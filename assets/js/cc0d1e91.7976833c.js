"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[4806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,f=s["".concat(c,".").concat(u)]||s[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},o="(146) _OBJ_ADD",l={unversionedId:"scripting/commands/interface/obj-add",id:"scripting/commands/interface/obj-add",title:"(146) _OBJ_ADD",description:"Effect",source:"@site/rom-hacking/scripting/commands/interface/146-obj-add.md",sourceDirName:"scripting/commands/interface",slug:"/scripting/commands/interface/obj-add",permalink:"/rom-hacking/scripting/commands/interface/obj-add",draft:!1,tags:[],version:"current",sidebarPosition:146,frontMatter:{},sidebar:"docs",previous:{title:"(140) _OBJ_ANIME_WAIT",permalink:"/rom-hacking/scripting/commands/interface/obj-anime-wait"},next:{title:"(147) _OBJ_DEL",permalink:"/rom-hacking/scripting/commands/interface/obj-del"}},c={},p=[{value:"Effect",id:"effect",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2}],m={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"146-_obj_add"},"(146) _OBJ_ADD"),(0,a.kt)("h2",{id:"effect"},"Effect"),(0,a.kt)("p",null,"Temporarily unhides a PlaceData."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"the visibility flag is NOT touched, unlike ",(0,a.kt)("a",{parentName:"p",href:"/rom-hacking/scripting/commands/interface/obj-del"},"_OBJ_DEL")," which does touch it.")),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"_OBJ_ADD(id)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Types"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"id")),(0,a.kt)("td",{parentName:"tr",align:null},"The ID of the PlaceData"),(0,a.kt)("td",{parentName:"tr",align:null},"Float"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"ev_dummy:\n_OBJ_ADD('T01_WOMAN1')\n_END()\n")),(0,a.kt)("p",null,"The above script will show the PlaceData with the ID 'T01_WOMAN1' at its position defined in the corresponding PlaceData file."),(0,a.kt)("p",null,"The above PlaceData should also be found in Vanilla BDSP in the file 'PlaceData_A01.json'."))}d.isMDXComponent=!0}}]);