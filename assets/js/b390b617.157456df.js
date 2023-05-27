"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[52248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={description:"Guide for native Switch hardware using CFW Atmosphere."},i="Atmosphere (Switch)",l={unversionedId:"installation/atmosphere",id:"installation/atmosphere",title:"Atmosphere (Switch)",description:"Guide for native Switch hardware using CFW Atmosphere.",source:"@site/docs/installation/atmosphere.mdx",sourceDirName:"installation",slug:"/installation/atmosphere",permalink:"/luminescent-team-dev/docs/installation/atmosphere",draft:!1,tags:[],version:"current",frontMatter:{description:"Guide for native Switch hardware using CFW Atmosphere."},sidebar:"docs",previous:{title:"Installation Guide",permalink:"/luminescent-team-dev/docs/category/installation"},next:{title:"Ryujinx",permalink:"/luminescent-team-dev/docs/installation/ryujinx"}},s={},u=[{value:"Installation",id:"installation",level:2},{value:"Updating the Mod",id:"updating-the-mod",level:2},{value:"Notes",id:"notes",level:2},{value:"Is it working?",id:"is-it-working",level:2},{value:"Not working?",id:"not-working",level:2}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"atmosphere-switch"},"Atmosphere (Switch)"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Do not install any other mods with Luminescent Platinum! You will risk breaking your game!")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set up Brilliant Diamond 1.3.0 in your emuNAND. Please use NXDumpTool to copy your personal Brilliant Diamond and update file to the SD and install into emuNAND. You will need two files by the end of it: the game ",(0,o.kt)("em",{parentName:"li"},"and")," the update.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Shining Pearl is ",(0,o.kt)("em",{parentName:"li"},"not")," supported."),(0,o.kt)("li",{parentName:"ul"},"Any other update is ",(0,o.kt)("em",{parentName:"li"},"not")," supported."),(0,o.kt)("li",{parentName:"ul"},"Do not play Luminescent Platinum in sysNAND, as all of the modified Pok\xe9mon and files will put your system at risk of ban."))),(0,o.kt)("li",{parentName:"ol"},"Download the mod ",(0,o.kt)("a",{parentName:"li",href:"https://www.nexusmods.com/pokemonbdsp/mods/1"},"from here"),"."),(0,o.kt)("li",{parentName:"ol"},"Extract the files somewhere on your computer."),(0,o.kt)("li",{parentName:"ol"},'Open your Switch SD folder and drop just the "exefs" and "romfs" folders into atmosphere/contents/0100000011D90000/',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Create any folders that do not exist."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"THIS STEP IS THE MOST IMPORTANT ONE FOR SWITCH USERS"),":",(0,o.kt)("br",{parentName:"li"}),"Go into the exefs folder and move the .ips file to /atmosphere/exefs_patches/Luminescent",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Once again, create any folders that don't exist."),(0,o.kt)("li",{parentName:"ul"},"You will have to move it again for every Luminescent update you install.")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:".ips Installation",src:n(73596).Z,width:"724",height:"333"})),(0,o.kt)("h2",{id:"updating-the-mod"},"Updating the Mod"),(0,o.kt)("p",null,"Back up your saves (using the homebrews JKSV or Checkpoint) just in case of any potential issue. Delete the old romfs and exefs files (for Switch, this includes the ones in /atmosphere/exefs_patches/Luminescent). Follow the install instructions again with the new files."),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"THIS IS A ROMHACK, NOT AN INDEPENDENT GAME. YOU MUST ALREADY OWN BRILLIANT DIAMOND 1.3.0 TO INSTALL THIS."),(0,o.kt)("li",{parentName:"ul"},"Currently, only Brilliant Diamond is supported."),(0,o.kt)("li",{parentName:"ul"},"You must be on update 1.3.0 (not 1.1.3).")),(0,o.kt)("h2",{id:"is-it-working"},"Is it working?"),(0,o.kt)("p",null,"If you are starting a new game, the language select screen should have a gold background, and all languages except English should be crossed out. Make sure to double check that the EXP Share is off as soon as you have more than one Pok\xe9mon. If it isn't, you have a bad install. Once that's been done, you can turn it on if you so desire from the computer in a Pok\xe9mon Center."),(0,o.kt)("p",null,"If you have a currently running game, the Pok\xe9mon party screen should have extra options for nicknaming/changing moves of Pok\xe9mon. You can also try the EXP Share check."),(0,o.kt)("h2",{id:"not-working"},"Not working?"),(0,o.kt)("p",null,"If you have followed all of these instructions and the game still doesn't boot, please use a homebrew file reader such as NX-Shell and navigate to atmosphere/contents/0100000011D90000 and check that romfs and exefs (and the folders within) are displaying as folders as intended."),(0,o.kt)("p",null,"If they are instead displaying as files please make your own exefs and romfs in the appropriate spot and place the contents inside yourself. Check again in NX-Shell that everything is displaying as folders now."),(0,o.kt)("p",null,"You may also need to redownload the mod entirely in case of a corruption."))}m.isMDXComponent=!0},73596:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/exefs_install-502e47bd652324cf9cd505eb2c2a39fd.png"}}]);