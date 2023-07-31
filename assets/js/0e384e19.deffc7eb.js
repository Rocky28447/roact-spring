"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1},o="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"roact-spring is a modern spring-physics based animation library for Roact inspired by react-spring. Instead of fixed durations, it uses physical properties like mass and tension to enable fluid and natural animations.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/roact-spring/docs/intro",draft:!1,editUrl:"https://github.com/chriscerie/roact-spring/edit/master/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Getting Started",permalink:"/roact-spring/docs/Getting Started"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Wally",id:"wally",level:3},{value:"With react-lua",id:"with-react-lua",level:4},{value:"With legacy Roact",id:"with-legacy-roact",level:4},{value:"roblox-ts",id:"roblox-ts",level:3},{value:"Why springs and not durations",id:"why-springs-and-not-durations",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("b",null,"roact-spring")," is a modern spring-physics based animation library for Roact inspired by react-spring. Instead of fixed durations, it uses physical properties like mass and tension to enable fluid and natural animations.",(0,a.kt)("p",null,"This library represents a modern approach to animation. It is the perfect bridge between declarative and imperative animations. It takes the best of both worlds and packs them into one flexible library."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"wally"},"Wally"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"roact-spring")," has two packages to support ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jsdotlua/react-lua"},"react-lua")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Roblox/roact"},"legacy Roact"),". It's crucial to install the correct package or you ",(0,a.kt)("strong",{parentName:"p"},"will")," encounter bugs. To install, add the latest version of roact-spring to your wally.toml:"),(0,a.kt)("h4",{id:"with-react-lua"},"With react-lua"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'RoactSpring = "chriscerie/react-spring@<version>"\n')),(0,a.kt)("p",null,"Note: react-lua packages under the scope jsdotlua must use react-spring >= 2.0. react-lua packages under the legacy scope corepackages must use react-spring v1."),(0,a.kt)("h4",{id:"with-legacy-roact"},"With legacy Roact"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'RoactSpring = "chriscerie/roact-spring@<version>"\n')),(0,a.kt)("h3",{id:"roblox-ts"},"roblox-ts"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"roact-spring")," is also available for roblox-ts projects. Install it with ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rbxts/roact-spring"},"npm"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npm i @rbxts/roact-spring\n")),(0,a.kt)("h2",{id:"why-springs-and-not-durations"},"Why springs and not durations"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Motivation from ",(0,a.kt)("a",{parentName:"p",href:"https://react-spring.io/#why-springs-and-not-durations"},"react-spring"))),(0,a.kt)("p",null,"The principle you will be working with is called a ",(0,a.kt)("inlineCode",{parentName:"p"},"spring"),", it ",(0,a.kt)("em",{parentName:"p"},"does not have a defined curve or a set duration"),". In that it differs greatly from the animation you are probably used to. We think of animation in terms of time and curves, but that in itself causes most of the struggle we face when trying to make elements on the screen move naturally, because nothing in the real world moves like that."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://i.imgur.com/7CCH51r.png",width:"200"})),(0,a.kt)("p",null,"We are so used to time-based animation that we believe that struggle is normal, dealing with arbitrary curves, easings, time waterfalls, not to mention getting this all in sync. As Andy Matuschak (ex Apple UI-Kit developer) ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/andy_matuschak/status/566736015188963328"},"expressed it once"),": ",(0,a.kt)("em",{parentName:"p"},"Animation APIs parameterized by duration and curve are fundamentally opposed to continuous, fluid interactivity"),"."))}d.isMDXComponent=!0}}]);