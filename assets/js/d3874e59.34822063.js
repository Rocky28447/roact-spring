"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[374,514,265],{52897:function(e,t,n){n.r(t),n.d(t,{HomepageFeatures:function(){return p},default:function(){return b}});var a=n(87462),r=n(39960),c=n(52263),i=n(54814),s=n(86010),l=n(67294),o="heroBanner_PAbV",u="buttons_2tNn",d="features_3cQC",m="featureSvg_1mXg",h=[{title:"Declarative and imperative",description:"react-spring is the perfect bridge between declarative and imperative animations. It takes the best of both worlds and packs them into one flexible library."},{title:"Fluid, powerful, painless",description:"react-spring is designed to make animations fluid, powerful, and painless to build and maintain. Animation becomes easy and approachable, and everything you do looks and feel natural by default."},{title:"Versatile",description:"react-spring works with most data types and provides extensible configurations that makes it painless to create advanced animations."}];function f(e){var t=e.image,n=e.title,a=e.description;return l.createElement("div",{className:(0,s.Z)("col col--4")},t&&l.createElement("div",{className:"text--center"},l.createElement("img",{className:m,alt:n,src:t})),l.createElement("div",{className:"text--center padding-horiz--md"},l.createElement("h3",null,n),l.createElement("p",null,a)))}function p(){return h?l.createElement("section",{className:d},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},h.map((function(e,t){return l.createElement(f,(0,a.Z)({key:t},e))}))))):null}function v(){var e=(0,c.Z)().siteConfig;return l.createElement("header",{className:(0,s.Z)("hero",o)},l.createElement("div",{className:"container"},l.createElement("h1",{className:"hero__title"},e.title),l.createElement("p",{className:"hero__subtitle"},e.tagline),l.createElement("div",{className:u},l.createElement(r.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Get Started \u2192"))))}function b(){var e=(0,c.Z)(),t=e.siteConfig,n=e.tagline;return l.createElement(i.Z,{title:t.title,description:n},l.createElement(v,null),l.createElement("main",null,l.createElement(p,null),l.createElement("div",{className:"container"})))}},6979:function(e,t,n){var a=n(76775),r=n(52263),c=n(28084),i=n(94184),s=n.n(i),l=n(67294);t.Z=function(e){var t=(0,l.useRef)(!1),i=(0,l.useRef)(null),o=(0,a.k6)(),u=(0,r.Z)().siteConfig,d=(void 0===u?{}:u).baseUrl;(0,l.useEffect)((function(){var e=function(e){"s"!==e.key&&"/"!==e.key||i.current&&e.srcElement===document.body&&(e.preventDefault(),i.current.focus())};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]);var m=(0,c.usePluginData)("docusaurus-lunr-search"),h=function(){t.current||(Promise.all([fetch(""+d+m.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+d+m.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([n.e(878),n.e(245)]).then(n.bind(n,24130)),Promise.all([n.e(532),n.e(343)]).then(n.bind(n,53343))]).then((function(e){var t=e[0],n=e[1],a=e[2].default;0!==t.length&&function(e,t,n){new n({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:function(e,t,n){var a=d+n.url;document.createElement("a").href=a,o.push(a)}})}(t,n,a)})),t.current=!0)},f=(0,l.useCallback)((function(t){i.current.contains(t.target)||i.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return l.createElement("div",{className:"navbar__search",key:"search-box"},l.createElement("span",{"aria-label":"expand searchbar",role:"button",className:s()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),l.createElement("input",{id:"search_input_react",type:"search",placeholder:"Press S to Search...","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:h,onMouseOver:h,onFocus:f,onBlur:f,ref:i}))}}}]);