"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[90325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},27712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={},i="(49) _FLAG_CHECK_WK",o={unversionedId:"scripting/commands/flag-check-wk",id:"scripting/commands/flag-check-wk",title:"(49) _FLAG_CHECK_WK",description:"Effect",source:"@site/rom-hacking/scripting/commands/flag-check-wk.mdx",sourceDirName:"scripting/commands",slug:"/scripting/commands/flag-check-wk",permalink:"/rom-hacking/scripting/commands/flag-check-wk",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"(48) _IF_FLAGOFF_CALL",permalink:"/rom-hacking/scripting/commands/if-flagoff-call"},next:{title:"(50) _FLAG_SET_WK",permalink:"/rom-hacking/scripting/commands/flag-set-wk"}},c={},p=[{value:"Effect",id:"effect",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"49-_flag_check_wk"},"(49) _FLAG_CHECK_WK"),(0,a.kt)("h2",{id:"effect"},"Effect"),(0,a.kt)("p",null,"Checks the flag corresponding to the value of a work."),(0,a.kt)("p",null,"Sets a work with the result."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Contrary to what might be expected, a result of 0 is true and 1 is false.")),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"_FLAG_CHECK_WK(flag, result)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Types"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"flag")),(0,a.kt)("td",{parentName:"tr",align:null},"The work containing the flag to check or the direct flag number"),(0,a.kt)("td",{parentName:"tr",align:null},"Work, Float"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"result")),(0,a.kt)("td",{parentName:"tr",align:null},"The work to put the result in"),(0,a.kt)("td",{parentName:"tr",align:null},"Work"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"_FLAG_SET(#FH_03)\n_FLAG_CHECK_WK(#FH_03, @LOCALWORK1)\n_IFVAL_JUMP(@LOCALWORK1, 'EQ', 0, 'ev_dummy')\n")),(0,a.kt)("p",null,"The above script will set the #FH_03 flag."),(0,a.kt)("p",null,"Next, it checks the same flag. Since it is true, 0 is put into @LOCALWORK1."),(0,a.kt)("p",null,"Finally, @LOCALWORK1 is compared to 0. Since it is equal to it, the script jumps to ev_dummy."))}m.isMDXComponent=!0}}]);