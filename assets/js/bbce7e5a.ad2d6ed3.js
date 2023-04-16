"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const o={},r="Ryujinx",l={unversionedId:"installation/ryujinx",id:"installation/ryujinx",title:"Ryujinx",description:"Installation",source:"@site/docs/installation/ryujinx.mdx",sourceDirName:"installation",slug:"/installation/ryujinx",permalink:"/docs/installation/ryujinx",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Atmosphere (Switch)",permalink:"/docs/installation/atmosphere"},next:{title:"Yuzu",permalink:"/docs/installation/yuzu"}},s={},u=[{value:"Installation",id:"installation",level:2},{value:"Updating the Mod",id:"updating-the-mod",level:2},{value:"Notes",id:"notes",level:2},{value:"Is it working?",id:"is-it-working",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ryujinx"},"Ryujinx"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Do not install any other mods with Luminescent Platinum! You will risk breaking your game!")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Set up your personal copy of Brilliant Diamond 1.3.0 in Ryujinx. When setting it up, make sure you have files for both the game and the update \u2014 there is no such thing as a single file that runs as "Brilliant Diamond 1.3.0".',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Shining Pearl is ",(0,a.kt)("em",{parentName:"li"},"not")," supported."),(0,a.kt)("li",{parentName:"ul"},"Any other update is ",(0,a.kt)("em",{parentName:"li"},"not")," supported.")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ryujinx Title Bar",src:n(6617).Z,width:"459",height:"30"}),(0,a.kt)("br",null),"\n",(0,a.kt)("img",{alt:"Ryujinx Menu",src:n(3033).Z,width:"440",height:"110"}),(0,a.kt)("br",null),"\n2. Download the mod ",(0,a.kt)("a",{parentName:"p",href:"https://www.nexusmods.com/pokemonbdsp/mods/1"},"from here"),'.\n3. Right click Brilliant Diamond in Ryujinx.\n4. Click "Open Mods Directory".\n5. Extract the contents of the mod\'s zip into that opened location (i.e., "Luminescent" that contains the exefs and romfs).'),(0,a.kt)("h2",{id:"updating-the-mod"},"Updating the Mod"),(0,a.kt)("p",null,'Back up your saves (right click on the game and select "Open Save Directory" to copy the save elsewhere) just in case of any potential issue. Delete the old romfs and exefs files. Follow the install instructions again with the new files.'),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"THIS IS A ROMHACK, NOT AN INDEPENDENT GAME. YOU MUST ALREADY OWN BRILLIANT DIAMOND 1.3.0 TO INSTALL THIS."),(0,a.kt)("li",{parentName:"ul"},"Currently, only Brilliant Diamond is supported."),(0,a.kt)("li",{parentName:"ul"},"You must be on update 1.3.0 (Not 1.1.3)."),(0,a.kt)("li",{parentName:"ul"},"If playing on Steam Deck, you must start the game in Desktop Mode in order to name your character.")),(0,a.kt)("h2",{id:"is-it-working"},"Is it working?"),(0,a.kt)("p",null,"If you are starting a new game, the language select screen should have a gold background, and all languages except English should be crossed out. Make sure to double check that the EXP Share is off as soon as you have more than one Pok\xe9mon. If it isn't, you have a bad install. Once that's been done, you can turn it on if you so desire from the computer in a Pok\xe9mon Center."),(0,a.kt)("p",null,"If you have a currently running game, the Pok\xe9mon party screen should have extra options for nicknaming/changing moves of Pok\xe9mon. You can also try the EXP Share check."))}p.isMDXComponent=!0},6617:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},3033:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/ryujinx2-61fbbcf5779e2bb60311d85781baa191.png"}}]);