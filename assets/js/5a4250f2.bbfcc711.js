"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9065],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3279:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={id:"setup",title:"Setup Developer Account",sidebar_label:"Setup Developer Account"},u=void 0,c={unversionedId:"books/setup",id:"books/setup",title:"Setup Developer Account",description:"In order to create Apps on Deskera platform, developer needs to register with us as a Partner.",source:"@site/docs/books/setup.md",sourceDirName:"books",slug:"/books/setup",permalink:"/Developer-Documentation/docs/books/setup",draft:!1,tags:[],version:"current",frontMatter:{id:"setup",title:"Setup Developer Account",sidebar_label:"Setup Developer Account"},sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/Developer-Documentation/docs/books/started"},next:{title:"Authentication V1",permalink:"/Developer-Documentation/docs/books/authenticate"}},p={},s=[],d={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to create Apps on Deskera platform, developer needs to register with us as a Partner. "),(0,a.kt)("p",null,"We uses OAuth 2.0 for the Authentication scheme. Developers must first register with us by providing some details about their app, such as email, callbankURL, and name."),(0,a.kt)("p",null,"Please send us an email at ",(0,a.kt)("inlineCode",{parentName:"p"},"care@deskera.com")," with the information mentioned below to register as a partner and obtain Deskera ",(0,a.kt)("inlineCode",{parentName:"p"},"client_id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"client_secret")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your app name"),(0,a.kt)("li",{parentName:"ul"},"The purpose of your application"),(0,a.kt)("li",{parentName:"ul"},"Your company name"),(0,a.kt)("li",{parentName:"ul"},"Your email address"),(0,a.kt)("li",{parentName:"ul"},"The callbackURL of your webserver (A valid HTTPS URL to be used for authentication flow)"),(0,a.kt)("li",{parentName:"ul"},"Whether it will be used privately or will be available publicly.")),(0,a.kt)("p",null,"You need to store this values with you, as they are one time generated values, central to the OAuth 2.0 flow."),(0,a.kt)("p",null,"Once all this is done, developers are ready to create apps on the Deskera platform."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please note that you need to have a working HTTPS callback URl for us to send you the accessToken and authCode. If you are working on a local server, you can install ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/"},"ngrok")," and get a public URL for your webserver, to act as callback URL.")))}m.isMDXComponent=!0}}]);