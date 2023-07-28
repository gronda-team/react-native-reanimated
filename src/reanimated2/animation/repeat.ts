import { defineAnimation, getReduceMotionForAnimation } from './util';
import type {
  Animation,
  AnimationCallback,
  AnimatableValue,
  Timestamp,
  AnimationObject,
} from '../commonTypes';
import type { ReducedMotionConfig, RepeatAnimation } from './commonTypes';

// TODO TYPESCRIPT This is a temporary type to get rid of .d.ts file.
type withRepeatType = <T extends AnimatableValue>(
  animation: T,
  numberOfReps?: number,
  reverse?: boolean,
  reduceMotion?: ReducedMotionConfig,
  callback?: AnimationCallback
) => T;

export const withRepeat = function <T extends AnimationObject>(
  _nextAnimation: T | (() => T),
  numberOfReps = 2,
  reverse = false,
  reduceMotion?: ReducedMotionConfig,
  callback?: AnimationCallback
): Animation<RepeatAnimation> {
  'worklet';

  return defineAnimation<RepeatAnimation, T>(
    _nextAnimation,
    (): RepeatAnimation => {
      'worklet';

      const nextAnimation =
        typeof _nextAnimation === 'function'
          ? _nextAnimation()
          : _nextAnimation;

      function repeat(animation: RepeatAnimation, now: Timestamp): boolean {
        const finished = nextAnimation.onFrame(nextAnimation, now);
        animation.current = nextAnimation.current;
        if (finished) {
          animation.reps += 1;
          // call inner animation's callback on every repetition
          // as the second argument the animation's current value is passed
          if (nextAnimation.callback) {
            nextAnimation.callback(true /* finished */, animation.current);
          }
          if (
            animation.reduceMotion ||
            (numberOfReps > 0 && animation.reps >= numberOfReps)
          ) {
            return true;
          }

          const startValue = reverse
            ? (nextAnimation.current as number)
            : animation.startValue;
          if (reverse) {
            nextAnimation.toValue = animation.startValue;
            animation.startValue = startValue;
          }
          nextAnimation.onStart(
            nextAnimation,
            startValue,
            now,
            nextAnimation.previousAnimation as RepeatAnimation
          );
          return false;
        }
        return false;
      }

      const repCallback = (finished?: boolean): void => {
        if (callback) {
          callback(finished);
        }
        // when cancelled call inner animation's callback
        if (!finished && nextAnimation.callback) {
          nextAnimation.callback(false /* finished */);
        }
      };

      function onStart(
        animation: RepeatAnimation,
        value: AnimatableValue,
        now: Timestamp,
        previousAnimation: Animation<any> | null
      ): void {
        animation.startValue = value;
        animation.reps = 0;

        // child animations inherit the setting, unless they already have it defined
        // they will have it defined only if the user used the `reduceMotion` prop
        if (nextAnimation.reduceMotion === undefined) {
          nextAnimation.reduceMotion = animation.reduceMotion;
        }

        // don't start the animation if reduced motion is enabled and
        // the animation would end at its starting point
        if (
          animation.reduceMotion &&
          reverse &&
          (numberOfReps <= 0 || numberOfReps % 2 === 0)
        ) {
          animation.current = animation.startValue;
          animation.onFrame = () => true;
        } else {
          nextAnimation.onStart(nextAnimation, value, now, previousAnimation);
        }
      }

      return {
        isHigherOrder: true,
        onFrame: repeat,
        onStart,
        reps: 0,
        current: nextAnimation.current,
        callback: repCallback,
        startValue: 0,
        reduceMotion: getReduceMotionForAnimation(reduceMotion),
      };
    }
  );
} as withRepeatType;
