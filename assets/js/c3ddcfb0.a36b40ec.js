"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[44556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,g=u["".concat(m,".").concat(d)]||u[d]||c[d]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={},i="(70) _TALKMSG",o={unversionedId:"scripting/commands/interface/talkmsg",id:"scripting/commands/interface/talkmsg",title:"(70) _TALKMSG",description:"Synonyms",source:"@site/rom-hacking/scripting/commands/interface/070-talkmsg.md",sourceDirName:"scripting/commands/interface",slug:"/scripting/commands/interface/talkmsg",permalink:"/rom-hacking/scripting/commands/interface/talkmsg",draft:!1,tags:[],version:"current",sidebarPosition:70,frontMatter:{},sidebar:"docs",previous:{title:"(4) _TIME_WAIT",permalink:"/rom-hacking/scripting/commands/interface/time-wait"},next:{title:"(81) _TALK_CLOSE",permalink:"/rom-hacking/scripting/commands/interface/talk-close"}},m={},s=[{value:"Synonyms",id:"synonyms",level:2},{value:"Effect",id:"effect",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2}],p={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"70-_talkmsg"},"(70) _TALKMSG"),(0,r.kt)("h2",{id:"synonyms"},"Synonyms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"_TALK_KEYWAIT")),(0,r.kt)("h2",{id:"effect"},"Effect"),(0,r.kt)("p",null,"Opens a basic message box."),(0,r.kt)("p",null,"Sets PlayTextFeedSe to true if ",(0,r.kt)("strong",{parentName:"p"},"text_sound_effect")," is 1."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"_TALKMSG(message, text_sound_effect?)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Types"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"message")),(0,r.kt)("td",{parentName:"tr",align:null},'The label for the message that gets shown, in format "file%message"'),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"text_sound_effect")),(0,r.kt)("td",{parentName:"tr",align:null},"If PlayTextFeedSe should be true"),(0,r.kt)("td",{parentName:"tr",align:null},"Work, Float"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"_TALKMSG(messageFile, message, text_sound_effect?)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Types"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"messageFile")),(0,r.kt)("td",{parentName:"tr",align:null},"The file containing the label for the message that gets shown"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"message")),(0,r.kt)("td",{parentName:"tr",align:null},"The label for the message that gets shown"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"text_sound_effect")),(0,r.kt)("td",{parentName:"tr",align:null},"If PlayTextFeedSe should be true"),(0,r.kt)("td",{parentName:"tr",align:null},"Work, Float"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"_LDVAL(@LOCALWORK1, 1)\n_TALKMSG('dp_dummy_file%dummy_msg', @LOCALWORK1)\n")),(0,r.kt)("p",null,"The above script will set the work variable @LOCALWORK1 to 1."),(0,r.kt)("p",null,"Then, a message box is opened with the text contained in the label dummy_msg of the dp_dummy_file message file."),(0,r.kt)("p",null,"PlayTextFeedSe is set to true as well because of @LOCALWORK1's value."))}c.isMDXComponent=!0}}]);