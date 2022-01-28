"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[641],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63992:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:3},s="Configs",c={unversionedId:"configs",id:"configs",isDocsHomePage:!1,title:"Configs",description:"Springs are configurable and can be tuned. If you want to adjust these settings, you can provide a default config table to useSpring:",source:"@site/docs/configs.md",sourceDirName:".",slug:"/configs",permalink:"/roact-spring/docs/configs",editUrl:"https://github.com/chriscerie/roact-spring/edit/master/docs/configs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Props",permalink:"/roact-spring/docs/props"},next:{title:"Imperatives",permalink:"/roact-spring/docs/imperatives"}},p=[{value:"Presets",id:"presets",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configs"},"Configs"),(0,i.kt)("p",null,"Springs are configurable and can be tuned. If you want to adjust these settings, you can provide a default ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," table to ",(0,i.kt)("inlineCode",{parentName:"p"},"useSpring"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local styles, api = RoactSpring.useSpring(hooks, {\n    position = UDim2.fromScale(0.5, 0.5),\n    rotation = 0,\n}, { \n    mass = 10, tension = 100, friction = 50,\n})\n")),(0,i.kt)("p",null,"Configs can also be adjusted when animating the spring. If there isn't any config provided, the default config will be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"api.start({\n    position = UDim2.fromScale(0.5, 0.5),\n    rotation = 0,\n}, { \n    mass = 10, tension = 100, friction = 50,\n})\n")),(0,i.kt)("p",null,"The following configs are available:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mass"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"spring mass")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tension"),(0,i.kt)("td",{parentName:"tr",align:null},"170"),(0,i.kt)("td",{parentName:"tr",align:null},"spring energetic load")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"friction"),(0,i.kt)("td",{parentName:"tr",align:null},"26"),(0,i.kt)("td",{parentName:"tr",align:null},"spring resistence")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clamp"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"when true, stops the spring once it overshoots its boundaries")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"precision"),(0,i.kt)("td",{parentName:"tr",align:null},"0.005"),(0,i.kt)("td",{parentName:"tr",align:null},'how close to the end result the animated value gets before we consider it to be "there"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"velocity"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"initial velocity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bounce"),(0,i.kt)("td",{parentName:"tr",align:null},"nil"),(0,i.kt)("td",{parentName:"tr",align:null},"When above zero, the spring will bounce instead of overshooting when exceeding its goal value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"restVelocity"),(0,i.kt)("td",{parentName:"tr",align:null},"nil"),(0,i.kt)("td",{parentName:"tr",align:null},'The smallest velocity before the animation is considered to be "not moving". When undefined, precision is used instead.')))),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/react-spring-config-x1vjb?fontsize=14&hidenavigation=1&theme=dark&view=preview",width:"100%",height:"500",title:"react-spring-config",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("h2",{id:"presets"},"Presets"),(0,i.kt)("p",null,"There are also a couple of generic presets that will cover some common ground."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"RoactSpring.config = {\n    default = { mass: 1, tension: 170, friction: 26 },\n    gentle = { mass: 1, tension: 120, friction: 14 },\n    wobbly = { mass: 1, tension: 180, friction: 12 },\n    stiff = { mass: 1, tension: 210, friction: 20 },\n    slow = { mass: 1, tension: 280, friction: 60 },\n    molasses = { mass: 1, tension: 280, friction: 120 },\n}\n")),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/react-spring-preset-configs-kdv7r?fontsize=14&hidenavigation=1&theme=dark&view=preview",width:"100%",height:"500",title:"react-spring-config",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}d.isMDXComponent=!0}}]);