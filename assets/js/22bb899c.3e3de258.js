"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[6752],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5394:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=n(3117),o=(n(7294),n(3905));const a={id:"scrollTo",title:"scrollTo",sidebar_label:"scrollTo"},i=void 0,l={unversionedId:"api/nativeMethods/scrollTo",id:"api/nativeMethods/scrollTo",title:"scrollTo",description:"Provides synchronous scroll on the UI thread to a given offset using an animated ref to a scroll view. This allows performing smooth scrolling without lags (which might have otherwise occured when it was asynchronous and based on lots of events).",source:"@site/docs/api/nativeMethods/scrollTo.md",sourceDirName:"api/nativeMethods",slug:"/api/nativeMethods/scrollTo",permalink:"/react-native-reanimated/docs/next/api/nativeMethods/scrollTo",draft:!1,tags:[],version:"current",frontMatter:{id:"scrollTo",title:"scrollTo",sidebar_label:"scrollTo"},sidebar:"docs",previous:{title:"measure",permalink:"/react-native-reanimated/docs/next/api/nativeMethods/measure"},next:{title:"getRelativeCoords",permalink:"/react-native-reanimated/docs/next/api/miscellaneous/getRelativeCoords"}},c={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>animatedRef</code>",id:"animatedref",level:4},{value:"<code>x-cord</code> Float",id:"x-cord-float",level:4},{value:"<code>y-cord</code> Float",id:"y-cord-float",level:4},{value:"<code>animated</code> Boolean",id:"animated-boolean",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides synchronous scroll on the UI thread to a given offset using an animated ref to a scroll view. This allows performing smooth scrolling without lags (which might have otherwise occured when it was asynchronous and based on lots of events)."),(0,o.kt)("p",null,"This function is implemented on native platforms only. On web it's sufficient to use a standard version of ",(0,o.kt)("inlineCode",{parentName:"p"},"scrollTo")," which comes with a ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollView")," component (it's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/aebccd3f923c920bd85fb9e5fbdd2a8a75d3ad3d/Libraries/Components/ScrollView/ScrollView.js#L834"},"here"),"). In such a case it should be invoked in the following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const aref = useAnimatedRef();\naref.current.scrollTo({ x, y });\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"animatedref"},(0,o.kt)("inlineCode",{parentName:"h4"},"animatedRef")),(0,o.kt)("p",null,"The product of ",(0,o.kt)("a",{parentName:"p",href:"../hooks/useAnimatedRef"},(0,o.kt)("inlineCode",{parentName:"a"},"useAnimatedRef"))," which is Reanimated's extension of a standard React ref (delivers the view tag on the UI thread)."),(0,o.kt)("h4",{id:"x-cord-float"},(0,o.kt)("inlineCode",{parentName:"h4"},"x-cord")," ","[Float]"),(0,o.kt)("p",null,"Corresponds to the pixel along the horizontal axis of the element that you want displayed in the upper left."),(0,o.kt)("h4",{id:"y-cord-float"},(0,o.kt)("inlineCode",{parentName:"h4"},"y-cord")," ","[Float]"),(0,o.kt)("p",null,"Corresponds to the pixel along the vertical axis of the element that you want displayed in the upper left."),(0,o.kt)("h4",{id:"animated-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"animated")," ","[Boolean]"),(0,o.kt)("p",null,"Indicates whether the scroll should be smooth."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,"void"),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport { TouchableOpacity, View, Text, ScrollView } from 'react-native'\nimport { useAnimatedRef, useDerivedValue, useSharedValue, scrollTo } from 'react-native-reanimated'\n\nconst ITEM_COUNT = 10\nconst ITEM_SIZE = 100\nconst ITEM_MARGIN = 10\n\nexport const Comp = () => {\n  const aref = useAnimatedRef()\n  const scroll = useSharedValue(0)\n\n  useDerivedValue(() => {\n    scrollTo(aref, 0, scroll.value * (ITEM_SIZE + 2 * ITEM_MARGIN), true)\n  })\n\n  const items = Array.from(Array(ITEM_COUNT).keys())\n\n  const Incrementor = ({ increment }) => (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <TouchableOpacity\n        onPress={() => {\n          scroll.value =\n            scroll.value + increment > 0 ? scroll.value + increment : ITEM_COUNT - 1 + increment\n\n          if (scroll.value >= ITEM_COUNT - 2) scroll.value = 0\n        }}>\n        <Text>{`Scroll ${Math.abs(increment)} ${increment > 0 ? 'down' : 'up'}`}</Text>\n      </TouchableOpacity>\n    </View>\n  )\n\n  return (\n    <View style={{ flex: 1, flexDirection: 'column' }}>\n      <Incrementor increment={1} />\n      <View style={{ width: '100%', height: (ITEM_SIZE + 2 * ITEM_MARGIN) * 2 }}>\n        <ScrollView ref={aref} style={{ backgroundColor: 'orange' }}>\n          {items.map((_, i) => (\n            <View\n              key={i}\n              style={{\n                backgroundColor: 'white',\n                aspectRatio: 1,\n                width: ITEM_SIZE,\n                margin: ITEM_MARGIN,\n                justifyContent: 'center',\n                alignContent: 'center',\n              }}>\n              <Text style={{ textAlign: 'center' }}>{i}</Text>\n            </View>\n          ))}\n        </ScrollView>\n      </View>\n\n      <Incrementor increment={-1} />\n    </View>\n  )\n}\n")))}u.isMDXComponent=!0}}]);