(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),c=(n(0),n(154)),b={id:"authenticationv2",title:"Authentication Service V2",sidebar_label:"Authentication V2"},i={id:"books/authenticationv2",title:"Authentication Service V2",description:"A token is a piece of data that has no meaning or use on its own, but combined with the correct tokenization system, becomes a vital player in securing your application. Token based authentication works by ensuring that each request to a server is accompanied by a signed token (RFC 7519) that defines a compact and self-contained method for securely transmitting information between parties encoded as a JSON object.",source:"@site/docs/books/authenticationv2.md",permalink:"/Developer-Documentation/docs/books/authenticationv2",sidebar_label:"Authentication V2",sidebar:"someSidebar",previous:{title:"Authentication Service V1 (Deprecated)",permalink:"/Developer-Documentation/docs/books/authentication"},next:{title:"Account Service",permalink:"/Developer-Documentation/docs/books/account"}},l=[{value:"APIs",id:"apis",children:[{value:"Connect With Authorization Code",id:"connect-with-authorization-code",children:[]},{value:"Validate Deskera Access Token",id:"validate-deskera-access-token",children:[]},{value:"Refresh Deskera Access Token",id:"refresh-deskera-access-token",children:[]}]},{value:"Objects",id:"objects",children:[{value:"AuthenticationResultTypeDto",id:"authenticationresulttypedto",children:[]},{value:"NewDeviceMetadataType",id:"newdevicemetadatatype",children:[]},{value:"OAuthV2AccessToken",id:"oauthv2accesstoken",children:[]}]}],o={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"A token is a piece of data that has no meaning or use on its own, but combined with the correct tokenization system, becomes a vital player in securing your application. Token based authentication works by ensuring that each request to a server is accompanied by a signed token (RFC 7519) that defines a compact and self-contained method for securely transmitting information between parties encoded as a JSON object. "),Object(c.b)("p",null,"The Authentication V2 API enables you to manage all aspects of user identity. It offers endpoints so your users can log in, sign up, log out, access APIs, and more."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Your ",Object(c.b)("inlineCode",{parentName:"p"},"access-token")," contains many privileges, keep it secure!"))),Object(c.b)("h2",{id:"apis"},"APIs"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"connect-with-authorization-code"},"Connect With Authorization Code"),Object(c.b)("p",null,"API to complete OAuth connection with code and get tokens"),Object(c.b)("h4",{id:"parameters"},"Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"authCode ",Object(c.b)("inlineCode",{parentName:"li"},"String"))),Object(c.b)("h4",{id:"returns"},"Returns"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#oauthv2accesstoken"}),"OAuthV2AccessToken")," ",Object(c.b)("inlineCode",{parentName:"li"},"Object"))),Object(c.b)("h4",{id:"code"},"Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"  @Autowired\n  private OAuthV2Client oAuthV2Client;\n\n    public OAuthV2AccessToken connect(String authCode) {\n    return this.oAuthV2Client.connectWithDeskera(authCode);\n  }\n")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"validate-deskera-access-token"},"Validate Deskera Access Token"),Object(c.b)("p",null,"API to check the validity of Deskera Access Token"),Object(c.b)("h4",{id:"parameters-1"},"Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"accessToken ",Object(c.b)("inlineCode",{parentName:"li"},"String"))),Object(c.b)("h4",{id:"returns-1"},"Returns"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"isValid ",Object(c.b)("inlineCode",{parentName:"li"},"Boolean"))),Object(c.b)("h4",{id:"code-1"},"Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"  @Autowired\n  private OAuthV2Client oAuthV2Client;\n\n    public Boolean validateDeskeraToken(String accessToken) {\n    return this.oAuthV2Client.validateToken(accessToken);\n  }\n")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"refresh-deskera-access-token"},"Refresh Deskera Access Token"),Object(c.b)("p",null,"API to fetch new access token with refresh token"),Object(c.b)("h4",{id:"parameters-2"},"Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"refreshToken ",Object(c.b)("inlineCode",{parentName:"li"},"String"))),Object(c.b)("h4",{id:"returns-2"},"Returns"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#authenticationresulttypedto"}),"AuthenticationResultTypeDto")," ",Object(c.b)("inlineCode",{parentName:"li"},"Object"))),Object(c.b)("h4",{id:"code-2"},"Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"  @Autowired\n  private OAuthV2Client oAuthV2Client;\n\n    public OAuthV2AccessToken refreshDeskeraToken(String refreshToken) {\n    return this.oAuthV2Client.getAppRefreshToken(refreshToken);\n  }\n")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"objects"},"Objects"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"authenticationresulttypedto"},"AuthenticationResultTypeDto"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Attribute"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"accessToken"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"expiresIn"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"idToken"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"newDeviceMetadata"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"#newdevicemetadatatype"}),"NewDeviceMetadataType")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"refreshToken"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tokenType"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(c.b)("h3",{id:"newdevicemetadatatype"},"NewDeviceMetadataType"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Attribute"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"deviceGroupKey"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"deviceKey"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(c.b)("h3",{id:"oauthv2accesstoken"},"OAuthV2AccessToken"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Attribute"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"access_token"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Auth token")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"token_type"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Token Type")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"refresh_token"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Auth refresh token")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"expires_in"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"float"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Time of expiry (Unused)")))))}u.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=u(n),O=a,d=s["".concat(b,".").concat(O)]||s[O]||p[O]||c;return n?r.a.createElement(d,i(i({ref:t},o),{},{components:n})):r.a.createElement(d,i({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var o=2;o<c;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);