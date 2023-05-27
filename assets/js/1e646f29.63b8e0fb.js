"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[56773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:4},o="Headers",l={unversionedId:"exefs/headers",id:"exefs/headers",title:"Headers",description:"Introduction",source:"@site/rom-hacking/exefs/headers.md",sourceDirName:"exefs",slug:"/exefs/headers",permalink:"/luminescent-team-dev/rom-hacking/exefs/headers",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"ROMHackingSidebar",previous:{title:"Setting Up Starlight",permalink:"/luminescent-team-dev/rom-hacking/exefs/starlight"},next:{title:"Symbol Linking",permalink:"/luminescent-team-dev/rom-hacking/exefs/symbols"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"il2cpp.h",id:"il2cpph",level:2},{value:"Complete Example",id:"complete-example",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"headers"},"Headers"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Headers allow us to define a few things; They allow us to use cleaner manually created types than those provided in ",(0,r.kt)("inlineCode",{parentName:"p"},"il2cpp.h")," and they allow us to reference methods in the main program."),(0,r.kt)("h2",{id:"il2cpph"},"il2cpp.h"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"il2cpp.h")," header includes all the types defined in the main program but they are not very pretty, they're all in the global namespace and have poor names. You can use these types but often times your code will be much better and more readable when you write a new header file."),(0,r.kt)("h2",{id:"complete-example"},"Complete Example"),(0,r.kt)("p",null,"See here an example header file I've written for the UnityAction Class. It include function definitions, a super class, nested namespaces, forward declarations, external pointer.",(0,r.kt)("br",{parentName:"p"}),"\n","Note: This does not include the linked symbols, those will also need to be defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"symbols.ld")," file if you want to access a static value or a method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="include/UnityEngine/Events/UnityAction.hpp"',title:'"include/UnityEngine/Events/UnityAction.hpp"'},'#pragma once\n#include "System/MulticastDelegate.hpp"\n\nnamespace System\n{\n    class IAsyncResult;\n    class AsyncCallback;\n}\n\nnamespace UnityEngine {\n    namespace Events {\n        extern void* UnityAction_TypeInfo;\n        \n        struct UnityAction_Fields {\n            System::MulticastDelegate_Fields super;\n        };\n        \n        struct UnityAction_StaticFields {\n        };\n\n        struct UnityAction_RGCTXs {\n        };\n\n        struct UnityAction_VTable {\n            VirtualInvokeData _0_Equals;\n            VirtualInvokeData _1_Finalize;\n            VirtualInvokeData _2_GetHashCode;\n            VirtualInvokeData _3_ToString;\n            VirtualInvokeData _4_unknown;\n            VirtualInvokeData _5_unknown;\n            VirtualInvokeData _6_Clone;\n            VirtualInvokeData _7_GetMethodImpl;\n            VirtualInvokeData _8_GetObjectData;\n            VirtualInvokeData _9_GetInvocationList;\n            VirtualInvokeData _10_CombineImpl;\n            VirtualInvokeData _11_RemoveImpl;\n            VirtualInvokeData _12_Invoke;\n            VirtualInvokeData _13_BeginInvoke;\n            VirtualInvokeData _14_EndInvoke;\n        };\n        \n        struct UnityAction_Klass {\n            Il2CppClass_1 _1;\n            UnityAction_StaticFields* static_fields;\n            UnityAction_RGCTXs* rgctx_data;\n            Il2CppClass_2 _2;\n            UnityAction_VTable vtable;\n        };\n        \n        struct UnityAction : System::MulticastDelegate {\n            UnityAction_Klass *klass;\n            void *monitor;\n            UnityAction_Fields fields;\n\n            void ctor(Il2CppObject *target, MethodInfo *method);\n            void Invoke(MethodInfo *method);\n            System::IAsyncResult* BeginInvoke(System::AsyncCallback *callback, Il2CppObject *object,MethodInfo *method);\n            void EndInvoke(System::IAsyncResult *result, MethodInfo *method);\n        };\n    }\n}\n')))}u.isMDXComponent=!0}}]);