"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[4642],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),h=a,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return t?r.createElement(m,l(l({ref:n},d),{},{components:t})):r.createElement(m,l({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},242:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var r=t(3117),a=(t(7294),t(3905));const o={id:"useHandler",title:"useHandler",sidebar_label:"useHandler"},l=void 0,i={unversionedId:"api/hooks/useHandler",id:"version-2.5.x/api/hooks/useHandler",title:"useHandler",description:"This is low-level hook returning context object and value indicating whether worklet should be rebuilt, which should be used in order to create custom event handler hook like useAnimatedGestureHandler or useAnimatedScrollHandler.",source:"@site/versioned_docs/version-2.5.x/api/hooks/useHandler.md",sourceDirName:"api/hooks",slug:"/api/hooks/useHandler",permalink:"/react-native-reanimated/docs/api/hooks/useHandler",draft:!1,tags:[],version:"2.5.x",frontMatter:{id:"useHandler",title:"useHandler",sidebar_label:"useHandler"},sidebar:"version-2.5.x/docs",previous:{title:"useEvent",permalink:"/react-native-reanimated/docs/api/hooks/useEvent"},next:{title:"useSharedValue",permalink:"/react-native-reanimated/docs/api/hooks/useSharedValue"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>handlerOrHandlersObject</code> object with worklets",id:"handlerorhandlersobject-object-with-worklets",level:4},{value:"<code>dependencies</code> Array",id:"dependencies-array",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2}],d={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is low-level hook returning context object and value indicating whether worklet should be rebuilt, which should be used in order to create custom event handler hook like ",(0,a.kt)("inlineCode",{parentName:"p"},"useAnimatedGestureHandler")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"useAnimatedScrollHandler"),"."),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"handlerorhandlersobject-object-with-worklets"},(0,a.kt)("inlineCode",{parentName:"h4"},"handlerOrHandlersObject")," ","[object with worklets]"),(0,a.kt)("p",null,"Object containing custom keys matching native event names.\nThe values in the object should be individual worklets.\nEach of the worklet will be triggered when the corresponding event is dispatched on the connected animated component."),(0,a.kt)("p",null,"Each of the event worklets will receive the following parameters when called:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"event")," ","[object]"," - event object.\nThe payload can differ depending on the type of the event.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"context")," ","[object]"," - plain JS object that can be used to store some state.\nThis object will persist in between event occurrences and you can read and write any data to it.\nWhen there are several event handlers provided in a form of an object of worklets, the ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," object will be shared in between the worklets allowing them to communicate with each other."))),(0,a.kt)("h4",{id:"dependencies-array"},(0,a.kt)("inlineCode",{parentName:"h4"},"dependencies")," ","[Array]"),(0,a.kt)("p",null,"Optional array of values which changes cause this hook to receive updated values during rerender of the wrapping component. This matters when, for instance, worklet uses values dependent on the component's state."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," here may be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"undefined"),"(argument skipped) - worklet will be rebuilt if there is any change in any of the callbacks' bodies or any values from their closure(variables from outer scope used in worklet),"),(0,a.kt)("li",{parentName:"ul"},"empty array(",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),") - worklet will be rebuilt only if any of the callbacks' bodies changes,"),(0,a.kt)("li",{parentName:"ul"},"array of values(",(0,a.kt)("inlineCode",{parentName:"li"},"[val1, val2, ..., valN]"),") - worklet will be rebuilt if there is any change in any of the callbacks bodies or in any values from the given array.")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"The hook returns a context that will be reused by event handlers and value that indicates whether worklets should be rebuilt. If different implementation is needed for web, ",(0,a.kt)("inlineCode",{parentName:"p"},"useWeb")," boolean is returned to check for web environment"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function useAnimatedPagerScrollHandler(handlers, dependencies) {\n  const { context, doDependenciesDiffer, useWeb } = useHandler(handlers, dependencies);\n\n  return useEvent(\n    (event) => {\n      'worklet';\n      const { onPageScroll } = handlers;\n\n      if (onPageScroll && event.eventName.endsWith('onPageScroll')) {\n        onPageScroll(event, context);\n      }\n    },\n    ['onPageScroll'],\n    doDependenciesDiffer,\n  );\n")))}u.isMDXComponent=!0}}]);