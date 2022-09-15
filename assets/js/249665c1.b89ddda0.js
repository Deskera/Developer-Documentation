"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2655],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,m=c["".concat(u,".").concat(k)]||c[k]||d[k]||l;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8736:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"authentication",title:"Authentication Service V1 (Deprecated)",sidebar_label:"Authentication V1"},u=void 0,p={unversionedId:"people/authentication",id:"people/authentication",title:"Authentication Service V1 (Deprecated)",description:"The V1 authentication and OAuth APIs are deprecated and are being phased out. The following documentation is only for existing partners who are already using it. If you are a new partner please refer to Authentication V2",source:"@site/docs/people/authentication.md",sourceDirName:"people",slug:"/people/authentication",permalink:"/Developer-Documentation/docs/people/authentication",draft:!1,tags:[],version:"current",frontMatter:{id:"authentication",title:"Authentication Service V1 (Deprecated)",sidebar_label:"Authentication V1"}},s={},d=[{value:"APIs",id:"apis",level:2},{value:"Login",id:"login",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Code",id:"code",level:4},{value:"Connect With Authorization Code",id:"connect-with-authorization-code",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Code",id:"code-1",level:4},{value:"Validate Deskera Access Token",id:"validate-deskera-access-token",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Code",id:"code-2",level:4},{value:"Refresh Deskera Access Token",id:"refresh-deskera-access-token",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Code",id:"code-3",level:4},{value:"Objects",id:"objects",level:2},{value:"AuthenticationResultTypeDto",id:"authenticationresulttypedto",level:3},{value:"NewDeviceMetadataType",id:"newdevicemetadatatype",level:3},{value:"WebSignInRequest",id:"websigninrequest",level:3},{value:"OAuth2AccessToken",id:"oauth2accesstoken",level:3}],c={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"The V1 authentication and OAuth APIs are deprecated and are being phased out. The following documentation is only for existing partners who are already using it. If you are a new partner please refer to ",(0,l.kt)("a",{parentName:"p",href:"/Developer-Documentation/docs/people/authenticationv2"},"Authentication V2"))),(0,l.kt)("p",null,"A token is a piece of data that has no meaning or use on its own, but combined with the correct tokenization system, becomes a vital player in securing your application. Token based authentication works by ensuring that each request to a server is accompanied by a signed toke (RFC 7519) that defines a compact and self-contained method for securely transmitting information between parties encoded as a JSON object. "),(0,l.kt)("p",null,"The Authentication API enables you to manage all aspects of user identity when you use Auth0. It offers endpoints so your users can log in, sign up, log out, access APIs, and more."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Your ",(0,l.kt)("inlineCode",{parentName:"p"},"access-token")," contains many privileges, keep it secure!")),(0,l.kt)("h2",{id:"apis"},"APIs"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"login"},"Login"),(0,l.kt)("p",null,"Login to receive token with username and password."),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#websigninrequest"},"WebSignInRequest")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Object"))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#authenticationresulttypedto"},"AuthenticationResultTypeDto")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Object"))),(0,l.kt)("h4",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"  @Autowired\n  private TenantsApiClient tenantsApiClient;\n\n    public AuthenticationResultType login(WebSignInRequest webSignInRequest){\n    return this.tenantsApiClient.login(webSignInRequest);\n  }\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"connect-with-authorization-code"},"Connect With Authorization Code"),(0,l.kt)("p",null,"API to complete OAuth connection with code and get tokens"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"authCode ",(0,l.kt)("inlineCode",{parentName:"li"},"String"))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#oauth2accesstoken"},"OAuth2AccessToken")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Object"))),(0,l.kt)("h4",{id:"code-1"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"  @Autowired\n  private OAuth2PartnerClient oauth2PartnerClient;\n\n    public OAuth2AccessToken connect(String authCode) {\n    return this.oauth2PartnerClient.connectWithDeskera(authCode);\n  }\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"validate-deskera-access-token"},"Validate Deskera Access Token"),(0,l.kt)("p",null,"API to check the validity of Deskera Access Token"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"accessToken ",(0,l.kt)("inlineCode",{parentName:"li"},"String"))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"isValid ",(0,l.kt)("inlineCode",{parentName:"li"},"Boolean"))),(0,l.kt)("h4",{id:"code-2"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"  @Autowired\n  private OAuth2PartnerClient oauth2PartnerClient;\n\n    public Boolean validateDeskeraToken(String accessToken) {\n    return this.oauth2PartnerClient.validateToken(accessToken);\n  }\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"refresh-deskera-access-token"},"Refresh Deskera Access Token"),(0,l.kt)("p",null,"API to fetch new access token with refresh token"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"refreshToken ",(0,l.kt)("inlineCode",{parentName:"li"},"String"))),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#authenticationresulttypedto"},"AuthenticationResultTypeDto")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Object"))),(0,l.kt)("h4",{id:"code-3"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"  @Autowired\n  private OAuth2PartnerClient oauth2PartnerClient;\n\n    public AuthenticationResultTypeDto refreshDeskeraToken(String refreshToken) {\n    return this.oauth2PartnerClient.getAppRefreshToken(refreshToken);\n  }\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"objects"},"Objects"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"authenticationresulttypedto"},"AuthenticationResultTypeDto"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accessToken"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expiresIn"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"idToken"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"newDeviceMetadata"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#newdevicemetadatatype"},"NewDeviceMetadataType")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"refreshToken"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tokenType"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"newdevicemetadatatype"},"NewDeviceMetadataType"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deviceGroupKey"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deviceKey"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"websigninrequest"},"WebSignInRequest"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"User password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Username")))),(0,l.kt)("h3",{id:"oauth2accesstoken"},"OAuth2AccessToken"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accessToken"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Auth token (Unused)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tokenType"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Token Type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"refreshToken"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Auth refresh token (Unused)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expiresIn"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Time of expiry (Unused)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scope"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Token Scope")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deskeraToken"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Deskera Access Token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deskeraRefreshToken"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Deskera Refresh Token")))))}k.isMDXComponent=!0}}]);