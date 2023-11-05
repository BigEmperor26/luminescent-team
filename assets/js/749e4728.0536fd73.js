"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[16810],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||l;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4481:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={},i="(31) _IF_CALL",o={unversionedId:"scripting/commands/if-call",id:"scripting/commands/if-call",title:"(31) _IF_CALL",description:"Effect",source:"@site/rom-hacking/scripting/commands/if-call.md",sourceDirName:"scripting/commands",slug:"/scripting/commands/if-call",permalink:"/rom-hacking/scripting/commands/if-call",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"(30) _IF_JUMP",permalink:"/rom-hacking/scripting/commands/if-jump"},next:{title:"(32) _IFVAL_JUMP",permalink:"/rom-hacking/scripting/commands/ifval-jump"}},c={},p=[{value:"Effect",id:"effect",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2}],m={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"31-_if_call"},"(31) _IF_CALL"),(0,a.kt)("h2",{id:"effect"},"Effect"),(0,a.kt)("p",null,"Checks the result previous comparison command, then calls a script if the result matches the given comparison operator."),(0,a.kt)("p",null,"The position of the call is saved. Execution returns to this command once a _RET is executed."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"_IF_CALL(comparison, label)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Types"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"comparison")),(0,a.kt)("td",{parentName:"tr",align:null},"The comparison operator to use"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"label")),(0,a.kt)("td",{parentName:"tr",align:null},"The label to call"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"_LDVAL(@LOCALWORK4, 9)\n_LDVAL(@LOCALWORK8, 13)\n_LDVAL(@LOCALWORK1, 4)\n_CMPWK(@LOCALWORK1, 8)\n_IF_CALL('GT', 'ev_dummy')\n")),(0,a.kt)("p",null,"The above script will set:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Work variable @LOCALWORK4 to 9;"),(0,a.kt)("li",{parentName:"ul"},"Work variable @LOCALWORK8 to 13;"),(0,a.kt)("li",{parentName:"ul"},"Work variable @LOCALWORK1 to 4.")),(0,a.kt)("p",null,"Then, the values of work 4 (@LOCALWORK4) and work 8 (@LOCALWORK8) are compared. Due to a bug, no matter their values, @LOCALWORK4 is determined to be greater."),(0,a.kt)("p",null,'Next, the result of the comparison is checked. Since the result is "greater", ev_dummy is called.'))}u.isMDXComponent=!0}}]);