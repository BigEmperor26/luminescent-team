"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[19358],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,m=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(m,".").concat(d)]||u[d]||s[d]||i;return n?a.createElement(f,l(l({ref:e},c),{},{components:n})):a.createElement(f,l({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[u]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3644:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},l="(768) _AC_UP",o={unversionedId:"scripting/animation-commands/ac-up",id:"scripting/animation-commands/ac-up",title:"(768) _AC_UP",description:"Effect",source:"@site/rom-hacking/scripting/animation-commands/768-ac-up.md",sourceDirName:"scripting/animation-commands",slug:"/scripting/animation-commands/ac-up",permalink:"/rom-hacking/scripting/animation-commands/ac-up",draft:!1,tags:[],version:"current",sidebarPosition:768,frontMatter:{},sidebar:"docs",previous:{title:"Animation commands",permalink:"/rom-hacking/category/animation-commands"},next:{title:"(769) _AC_DOWN",permalink:"/rom-hacking/scripting/animation-commands/ac-down"}},m={},p=[{value:"Effect",id:"effect",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2}],c={toc:p},u="wrapper";function s(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"768-_ac_up"},"(768) _AC_UP"),(0,r.kt)("h2",{id:"effect"},"Effect"),(0,r.kt)("p",null,"Moves the entity of the animation up over a given amount of frames per tile."),(0,r.kt)("p",null,"If the ",(0,r.kt)("strong",{parentName:"p"},"time")," argument is negative, 16 is used."),(0,r.kt)("p",null,"If the ",(0,r.kt)("strong",{parentName:"p"},"idle_animation")," argument is provided, the entity will move while in it's idle animation."),(0,r.kt)("p",null,"Starts the stepping sound effect."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This command only moves the entity. It does not turn the entity in the moving direction.")),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"_AC_UP(tiles, time, idle_animation?)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Types"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"tiles")),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of tiles"),(0,r.kt)("td",{parentName:"tr",align:null},"Float"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"time")),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of time to move per tile, in frames"),(0,r.kt)("td",{parentName:"tr",align:null},"Float"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"idle_animation")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to use the idle animation"),(0,r.kt)("td",{parentName:"tr",align:null},"Any"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"anm_dummy:\n_AC_DIR_U(8)\n_AC_UP(3, 8)\n_ACMD_END()\n")),(0,r.kt)("p",null,"The above script will turn the entity up and then move it up 3 tiles over 8 frames per tile."))}s.isMDXComponent=!0}}]);