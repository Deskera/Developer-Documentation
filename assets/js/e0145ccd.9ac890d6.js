"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1054],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1398:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"authenticationapi",title:"Authentication API",sidebar_label:"Authentication"},u=void 0,p={unversionedId:"people/authenticationapi",id:"people/authenticationapi",title:"Authentication API",description:"A token is a piece of data that has no meaning or use on its own, but combined with the correct tokenization system, becomes a vital player in securing your application. Token based authentication works by ensuring that each request to a server is accompanied by a signed token which the server verifies for authenticity and only then responds to the request.",source:"@site/docs/people/authenticationapi.md",sourceDirName:"people",slug:"/people/authenticationapi",permalink:"/Developer-Documentation/docs/people/authenticationapi",draft:!1,tags:[],version:"current",frontMatter:{id:"authenticationapi",title:"Authentication API",sidebar_label:"Authentication"}},s={},c=[{value:"API",id:"api",level:2},{value:"Login",id:"login",level:3},{value:"Parameters",id:"parameters",level:4},{value:"POST",id:"post",level:4},{value:"/v1/iam/auth/sign-in/web/sign-in",id:"v1iamauthsign-inwebsign-in",level:4},{value:"Request URL",id:"request-url",level:5},{value:"Curl",id:"curl",level:5},{value:"Models",id:"models",level:2},{value:"WebSignInRequest Object",id:"websigninrequest-object",level:3},{value:"AuthenticationResultType",id:"authenticationresulttype",level:3},{value:"NewDeviceMetadataType",id:"newdevicemetadatatype",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A token is a piece of data that has no meaning or use on its own, but combined with the correct tokenization system, becomes a vital player in securing your application. Token based authentication works by ensuring that each request to a server is accompanied by a signed token which the server verifies for authenticity and only then responds to the request."),(0,i.kt)("p",null,"JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained method for securely transmitting information between parties encoded as a JSON object. "),(0,i.kt)("p",null,"The Authentication API enables you to manage all aspects of user identity when you use Auth0. It offers endpoints so your users can log in, sign up, log out, access APIs, and more."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Your ",(0,i.kt)("inlineCode",{parentName:"p"},"access-token")," contains many privileges, keep it secure!")),(0,i.kt)("p",null,"Web Signin API to authenticate with username and password"),(0,i.kt)("p",null,"More about ",(0,i.kt)("a",{parentName:"p",href:"https://deskera.docs.apiary.io/#reference/authentication-api/v1iamauthsign-inwebsign-in/web-signin-api-to-authenticate-with-username-and-password"},"Authentication API documentation")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"login"},"Login"),(0,i.kt)("p",null,"Login to receive token with username and password."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#websigninrequest-object"},"webSignInRequest")," ",(0,i.kt)("inlineCode",{parentName:"li"},"WebSignInRequest"))),(0,i.kt)("h4",{id:"post"},"POST"),(0,i.kt)("h4",{id:"v1iamauthsign-inwebsign-in"},"/v1/iam/auth/sign-in/web/sign-in"),(0,i.kt)("h5",{id:"request-url"},"Request URL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"https://bifrost.deskera.com/v1/iam/auth/sign-in/web/sign-in\n")),(0,i.kt)("h5",{id:"curl"},"Curl"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'curl -X POST "https://bifrost.deskera.com/v1/iam/auth/sign-in/web/sign-in" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \\"isMobile\\": true, \\"password\\": \\"abcd@123\\", \\"userName\\": \\"+65-1234-5678\\"}"```\n')),(0,i.kt)("h2",{id:"models"},"Models"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"websigninrequest-object"},"WebSignInRequest Object"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"User password")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"userName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Username")))),(0,i.kt)("h3",{id:"authenticationresulttype"},"AuthenticationResultType"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"accessToken"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"expiresIn"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"idToken"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"newDeviceMetadata"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#newdevicemetadatatype"},"NewDeviceMetadataType")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"refreshToken"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenType"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"newdevicemetadatatype"},"NewDeviceMetadataType"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"deviceGroupKey"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"deviceKey"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);