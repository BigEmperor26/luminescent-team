"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[68043],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},84977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:7},i="Debugging",l={unversionedId:"exefs/debugging",id:"exefs/debugging",title:"Debugging",description:"Introduction",source:"@site/rom-hacking/exefs/debugging.md",sourceDirName:"exefs",slug:"/exefs/debugging",permalink:"/luminescent-team-dev/rom-hacking/exefs/debugging",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"ROMHackingSidebar",previous:{title:"Logging",permalink:"/luminescent-team-dev/rom-hacking/exefs/logging"},next:{title:"Art",permalink:"/luminescent-team-dev/rom-hacking/category/art"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"How To",id:"how-to",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"debugging"},"Debugging"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Debugging is extremely useful when making your exefs mods. It will allow you to view the asm code as its running, look into what register values are at certain points and add break points to step through your code."),(0,a.kt)("p",null,"Debugging can be done with the help of Ghidra (I'm pretty sure you can set up IDA in a similar way), GDB (The GNU Project Debugger) and a GDB Stub (Yuzu or Atmosphere).\nThis tutorial assumes you're using Ghidra, Windows with WSL and Yuzu."),(0,a.kt)("h2",{id:"how-to"},"How To"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set up your GDB Stub. Once you enable the GDB stub your games will hang at startup waiting for a connection."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In Yuzu"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Emulation -> Configure -> General -> Debug -> Debugger -> Enable GDB Stub"),(0,a.kt)("li",{parentName:"ol"},"Take note of the port number here (or change it)"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In Atmosphere"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Ensure your version of Atmosphere is at least version 1.2.4 (System Settings \u2192 System \u2192 \"Current version: ... | AMS X.Y.Z | ...\" under the 'System Update' button)"),(0,a.kt)("li",{parentName:"ol"},"Modify sd:/atmosphere/config/system_settings.ini (or create it if it doesn't exist) and ensure the following values are set accordingly:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[atmosphere]\nenable_htc = u8!0x0\nenable_standalone_gdbstub = u8!0x1\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reboot your Switch")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set up GDB"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Set up WSL on your PC"),(0,a.kt)("li",{parentName:"ol"},"Enable SSH into your WSL VM"),(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("inlineCode",{parentName:"li"},"gdb-multiarch")," to your WSL VM"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set up Ghidra"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Open the BDSP Main file with debugger (Right click -> Open With -> Debugger)"),(0,a.kt)("li",{parentName:"ol"},"Make sure the base address of main is ",(0,a.kt)("inlineCode",{parentName:"li"},"0x8004000")," (this is where yuzu loads the file to)",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Window -> Memory Map -> House Icon At Top Right -> ",(0,a.kt)("inlineCode",{parentName:"li"},"8004000")),(0,a.kt)("li",{parentName:"ol"},"This may be different for atmosphere"))),(0,a.kt)("li",{parentName:"ol"},"Create a new Debugger Target",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"In the Targets window click the green/yellow socket at the top right"),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("inlineCode",{parentName:"li"},"GNU gdb via SSH")," and enter your details (I had to modify the following)",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"GDB launch command: ",(0,a.kt)("inlineCode",{parentName:"li"},"usr/bin/gdb-multiarch")),(0,a.kt)("li",{parentName:"ol"},"SSH username: ",(0,a.kt)("inlineCode",{parentName:"li"},"<WSL Username>")))),(0,a.kt)("li",{parentName:"ol"},"You may need to edit more or less depending on how you set up your SSH"),(0,a.kt)("li",{parentName:"ol"},"Click Connect and confirm any SSH details (password, keys etc.)"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connect and Debug"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"In the Ghidra Interpreter window enter ",(0,a.kt)("inlineCode",{parentName:"li"},"target extended-remote <YourWindowsIP>:<YuzuGDBPort>")),(0,a.kt)("li",{parentName:"ol"},"Run BDSP in Yuzu (It will hang at launch when connecting to GDB)"),(0,a.kt)("li",{parentName:"ol"},"In the Ghidra Modules window click the two way red arrow (This links your main program with the program loaded in memory)"),(0,a.kt)("li",{parentName:"ol"},"Set any breakpoints you need in the code (Right click -> Toggle Breakpoint)"),(0,a.kt)("li",{parentName:"ol"},"In the Ghidra Objects window, continue execution and step through code at breakpoints"),(0,a.kt)("li",{parentName:"ol"},"In the Ghidra Registers window, view the value of any registers at the current execution location")))))}m.isMDXComponent=!0}}]);