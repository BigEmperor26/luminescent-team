"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[9333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=m(n),p=o,f=u["".concat(s,".").concat(p)]||u[p]||c[p]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>m});var r=n(7462),o=(n(7294),n(3905));const i={},l="Symbol Linking",a={unversionedId:"exefs/Symbols",id:"exefs/Symbols",title:"Symbol Linking",description:"WIP - These docs are a Work In Progress and are currently mostly for my own use",source:"@site/rom-hacking/exefs/Symbols.md",sourceDirName:"exefs",slug:"/exefs/Symbols",permalink:"/rom-hacking/exefs/Symbols",draft:!1,editUrl:"https://github.com/TeamLumi/luminescent-team/blob/main/rom-hacking/exefs/Symbols.md",tags:[],version:"current",frontMatter:{},sidebar:"ROMHackingSidebar",previous:{title:"Setting Up Starlight",permalink:"/rom-hacking/exefs/Setting Up Starlight"}},s={},m=[{value:"WIP - These docs are a Work In Progress and are currently mostly for my own use",id:"wip---these-docs-are-a-work-in-progress-and-are-currently-mostly-for-my-own-use",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Mangled Names",id:"mangled-names",level:2},{value:"Finding the offset",id:"finding-the-offset",level:2},{value:"Add the symbol to the linker script",id:"add-the-symbol-to-the-linker-script",level:2}],d={toc:m};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"symbol-linking"},"Symbol Linking"),(0,o.kt)("h2",{id:"wip---these-docs-are-a-work-in-progress-and-are-currently-mostly-for-my-own-use"},"WIP - These docs are a Work In Progress and are currently mostly for my own use"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"If you want to use any functions or defined symbols from the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," program, your code needs to know where those symbols are actually defined in memory.\nYou will need to find these symbols in Ghidra and add their offsets to the ",(0,o.kt)("inlineCode",{parentName:"p"},"linkerscripts/symbols.<version>.ld")," file."),(0,o.kt)("h2",{id:"mangled-names"},"Mangled Names"),(0,o.kt)("p",null,"C++ mangles any symbol names used in your program, these are unique between namespaces. You will need to use the mangled name in your symbols definition file.",(0,o.kt)("br",{parentName:"p"}),"\n","You can find the mangled names of the symbols you need in a few different ways."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"nm CMakeFiles/<Repo Name>.dir/src/<Your .cpp file>.obj"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"You'll need to build your project first for this field to be populated"),(0,o.kt)("li",{parentName:"ol"},"You'll find every symbol your file references inside here with its mangled name"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"mangler.sh <your method/symbol>"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"You'll need to enter your method/symbol including any namespaces and parameters.")))),(0,o.kt)("h2",{id:"finding-the-offset"},"Finding the offset"),(0,o.kt)("p",null,"Finding the offset in Ghidra is relatively simple. This is literally just the location in memory of the function/symbol relative to the program; just go to the function/symbol in ghidra and copy the offset location. This is the same location used for injecting code. Make sure to remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"0x7100000000")," from the start of your offset if using Ghidra Switch Loader."),(0,o.kt)("h2",{id:"add-the-symbol-to-the-linker-script"},"Add the symbol to the linker script"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the relevant linker script file (",(0,o.kt)("inlineCode",{parentName:"li"},"linkerscripts/symbols.<version>.ld"),")"),(0,o.kt)("li",{parentName:"ol"},"Add a new line to the file as follows",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("inlineCode",{parentName:"li"},"<Mangled Symbol> = <symbol offset> - <subsdk1 offset>;"),(0,o.kt)("br",{parentName:"li"}),"e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"_ZN3Dpr2UI13PoketchButton6OnPushEP10MethodInfo = 0x01e622c0 - 0x05708000;"))))}c.isMDXComponent=!0}}]);