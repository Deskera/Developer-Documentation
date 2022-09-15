"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2041],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),k=r,m=d["".concat(u,".").concat(k)]||d[k]||p[k]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5549:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"authenticationv2",title:"Authentication Service V2",sidebar_label:"Authentication V2"},u=void 0,s={unversionedId:"books/authenticationv2",id:"books/authenticationv2",title:"Authentication Service V2",description:"A token is a piece of data that has no meaning or use on its own, but combined with the correct tokenization system, becomes a vital player in securing your application. Token based authentication works by ensuring that each request to a server is accompanied by a signed token (RFC 7519) that defines a compact and self-contained method for securely transmitting information between parties encoded as a JSON object.",source:"@site/docs/books/authenticationv2.md",sourceDirName:"books",slug:"/books/authenticationv2",permalink:"/Developer-Documentation/docs/books/authenticationv2",draft:!1,tags:[],version:"current",frontMatter:{id:"authenticationv2",title:"Authentication Service V2",sidebar_label:"Authentication V2"},sidebar:"someSidebar",previous:{title:"Authentication V1",permalink:"/Developer-Documentation/docs/books/authentication"},next:{title:"Account",permalink:"/Developer-Documentation/docs/books/account"}},c={},p=[{value:"APIs",id:"apis",level:2},{value:"Connect With Authorization Code",id:"connect-with-authorization-code",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Code",id:"code",level:4},{value:"Validate Deskera Access Token",id:"validate-deskera-access-token",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Code",id:"code-1",level:4},{value:"Refresh Deskera Access Token",id:"refresh-deskera-access-token",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Code",id:"code-2",level:4},{value:"Objects",id:"objects",level:2},{value:"AuthenticationResultTypeDto",id:"authenticationresulttypedto",level:3},{value:"NewDeviceMetadataType",id:"newdevicemetadatatype",level:3},{value:"OAuthV2AccessToken",id:"oauthv2accesstoken",level:3}],d={toc:p};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A token is a piece of data that has no meaning or use on its own, but combined with the correct tokenization system, becomes a vital player in securing your application. Token based authentication works by ensuring that each request to a server is accompanied by a signed token (RFC 7519) that defines a compact and self-contained method for securely transmitting information between parties encoded as a JSON object. "),(0,i.kt)("p",null,"The Authentication V2 API enables you to manage all aspects of user identity. It offers endpoints so your users can log in, sign up, log out, access APIs, and more."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Your ",(0,i.kt)("inlineCode",{parentName:"p"},"access-token")," contains many privileges, keep it secure!")),(0,i.kt)("h2",{id:"apis"},"APIs"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"connect-with-authorization-code"},"Connect With Authorization Code"),(0,i.kt)("p",null,"API to complete OAuth connection with code and get tokens"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"authCode ",(0,i.kt)("inlineCode",{parentName:"li"},"String"))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#oauthv2accesstoken"},"OAuthV2AccessToken")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Object"))),(0,i.kt)("h4",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"  @Autowired\n  private OAuthV2Client oAuthV2Client;\n\n    public OAuthV2AccessToken connect(String authCode) {\n    return this.oAuthV2Client.connectWithDeskera(authCode);\n  }\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"validate-deskera-access-token"},"Validate Deskera Access Token"),(0,i.kt)("p",null,"API to check the validity of Deskera Access Token"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"accessToken ",(0,i.kt)("inlineCode",{parentName:"li"},"String"))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"isValid ",(0,i.kt)("inlineCode",{parentName:"li"},"Boolean"))),(0,i.kt)("h4",{id:"code-1"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"  @Autowired\n  private OAuthV2Client oAuthV2Client;\n\n    public Boolean validateDeskeraToken(String accessToken) {\n    return this.oAuthV2Client.validateToken(accessToken);\n  }\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"refresh-deskera-access-token"},"Refresh Deskera Access Token"),(0,i.kt)("p",null,"API to fetch new access token with refresh token"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"refreshToken ",(0,i.kt)("inlineCode",{parentName:"li"},"String"))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#authenticationresulttypedto"},"AuthenticationResultTypeDto")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Object"))),(0,i.kt)("h4",{id:"code-2"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"  @Autowired\n  private OAuthV2Client oAuthV2Client;\n\n    public OAuthV2AccessToken refreshDeskeraToken(String refreshToken) {\n    return this.oAuthV2Client.getAppRefreshToken(refreshToken);\n  }\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"objects"},"Objects"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"authenticationresulttypedto"},"AuthenticationResultTypeDto"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"accessToken"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"expiresIn"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"idToken"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"newDeviceMetadata"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#newdevicemetadatatype"},"NewDeviceMetadataType")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"refreshToken"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenType"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"newdevicemetadatatype"},"NewDeviceMetadataType"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"deviceGroupKey"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"deviceKey"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"oauthv2accesstoken"},"OAuthV2AccessToken"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"access_token"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Auth token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"token_type"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Token Type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"refresh_token"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Auth refresh token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"expires_in"),(0,i.kt)("td",{parentName:"tr",align:null},"float"),(0,i.kt)("td",{parentName:"tr",align:null},"Time of expiry (Unused)")))))}k.isMDXComponent=!0}}]);