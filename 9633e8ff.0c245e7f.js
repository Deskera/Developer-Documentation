(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{132:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),b=(a(0),a(154)),c={id:"authentication",title:"Authentication Service V1 (Deprecated)",sidebar_label:"Authentication V1"},i={id:"books/authentication",title:"Authentication Service V1 (Deprecated)",description:"The V1 authentication and OAuth APIs are deprecated and are being phased out. The following documentation is only for existing partners who are already using it. If you are a new partner please refer to Authentication V2",source:"@site/docs/books/authentication.md",permalink:"/Developer-Documentation/docs/books/authentication",sidebar_label:"Authentication V1",sidebar:"someSidebar",previous:{title:"Deskera OAuth 2.0 V2",permalink:"/Developer-Documentation/docs/books/oauthv2"},next:{title:"Authentication Service V2",permalink:"/Developer-Documentation/docs/books/authenticationv2"}},l=[{value:"APIs",id:"apis",children:[{value:"Login",id:"login",children:[]},{value:"Connect With Authorization Code",id:"connect-with-authorization-code",children:[]},{value:"Validate Deskera Access Token",id:"validate-deskera-access-token",children:[]},{value:"Refresh Deskera Access Token",id:"refresh-deskera-access-token",children:[]}]},{value:"Objects",id:"objects",children:[{value:"AuthenticationResultTypeDto",id:"authenticationresulttypedto",children:[]},{value:"NewDeviceMetadataType",id:"newdevicemetadatatype",children:[]},{value:"WebSignInRequest",id:"websigninrequest",children:[]},{value:"OAuth2AccessToken",id:"oauth2accesstoken",children:[]}]}],o={rightToc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"The V1 authentication and OAuth APIs are deprecated and are being phased out. The following documentation is only for existing partners who are already using it. If you are a new partner please refer to ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/Developer-Documentation/docs/books/authenticationv2"}),"Authentication V2")))),Object(b.b)("p",null,"A token is a piece of data that has no meaning or use on its own, but combined with the correct tokenization system, becomes a vital player in securing your application. Token based authentication works by ensuring that each request to a server is accompanied by a signed toke (RFC 7519) that defines a compact and self-contained method for securely transmitting information between parties encoded as a JSON object. "),Object(b.b)("p",null,"The Authentication API enables you to manage all aspects of user identity when you use Auth0. It offers endpoints so your users can log in, sign up, log out, access APIs, and more."),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"Your ",Object(b.b)("inlineCode",{parentName:"p"},"access-token")," contains many privileges, keep it secure!"))),Object(b.b)("h2",{id:"apis"},"APIs"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"login"},"Login"),Object(b.b)("p",null,"Login to receive token with username and password."),Object(b.b)("h4",{id:"parameters"},"Parameters"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#websigninrequest"}),"WebSignInRequest")," ",Object(b.b)("inlineCode",{parentName:"li"},"Object"))),Object(b.b)("h4",{id:"returns"},"Returns"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#authenticationresulttypedto"}),"AuthenticationResultTypeDto")," ",Object(b.b)("inlineCode",{parentName:"li"},"Object"))),Object(b.b)("h4",{id:"code"},"Code"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"  @Autowired\n  private TenantsApiClient tenantsApiClient;\n\n    public AuthenticationResultType login(WebSignInRequest webSignInRequest){\n    return this.tenantsApiClient.login(webSignInRequest);\n  }\n")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"connect-with-authorization-code"},"Connect With Authorization Code"),Object(b.b)("p",null,"API to complete OAuth connection with code and get tokens"),Object(b.b)("h4",{id:"parameters-1"},"Parameters"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"authCode ",Object(b.b)("inlineCode",{parentName:"li"},"String"))),Object(b.b)("h4",{id:"returns-1"},"Returns"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#oauth2accesstoken"}),"OAuth2AccessToken")," ",Object(b.b)("inlineCode",{parentName:"li"},"Object"))),Object(b.b)("h4",{id:"code-1"},"Code"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"  @Autowired\n  private OAuth2PartnerClient oauth2PartnerClient;\n\n    public OAuth2AccessToken connect(String authCode) {\n    return this.oauth2PartnerClient.connectWithDeskera(authCode);\n  }\n")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"validate-deskera-access-token"},"Validate Deskera Access Token"),Object(b.b)("p",null,"API to check the validity of Deskera Access Token"),Object(b.b)("h4",{id:"parameters-2"},"Parameters"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"accessToken ",Object(b.b)("inlineCode",{parentName:"li"},"String"))),Object(b.b)("h4",{id:"returns-2"},"Returns"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"isValid ",Object(b.b)("inlineCode",{parentName:"li"},"Boolean"))),Object(b.b)("h4",{id:"code-2"},"Code"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"  @Autowired\n  private OAuth2PartnerClient oauth2PartnerClient;\n\n    public Boolean validateDeskeraToken(String accessToken) {\n    return this.oauth2PartnerClient.validateToken(accessToken);\n  }\n")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"refresh-deskera-access-token"},"Refresh Deskera Access Token"),Object(b.b)("p",null,"API to fetch new access token with refresh token"),Object(b.b)("h4",{id:"parameters-3"},"Parameters"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"refreshToken ",Object(b.b)("inlineCode",{parentName:"li"},"String"))),Object(b.b)("h4",{id:"returns-3"},"Returns"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#authenticationresulttypedto"}),"AuthenticationResultTypeDto")," ",Object(b.b)("inlineCode",{parentName:"li"},"Object"))),Object(b.b)("h4",{id:"code-3"},"Code"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"  @Autowired\n  private OAuth2PartnerClient oauth2PartnerClient;\n\n    public AuthenticationResultTypeDto refreshDeskeraToken(String refreshToken) {\n    return this.oauth2PartnerClient.getAppRefreshToken(refreshToken);\n  }\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"objects"},"Objects"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"authenticationresulttypedto"},"AuthenticationResultTypeDto"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accessToken"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"expiresIn"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"idToken"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"newDeviceMetadata"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#newdevicemetadatatype"}),"NewDeviceMetadataType")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"refreshToken"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tokenType"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(b.b)("h3",{id:"newdevicemetadatatype"},"NewDeviceMetadataType"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"deviceGroupKey"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"deviceKey"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(b.b)("h3",{id:"websigninrequest"},"WebSignInRequest"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"password"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User password")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"userName"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Username")))),Object(b.b)("h3",{id:"oauth2accesstoken"},"OAuth2AccessToken"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accessToken"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Auth token (Unused)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tokenType"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Token Type")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"refreshToken"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Auth refresh token (Unused)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"expiresIn"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"float"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Time of expiry (Unused)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"scope"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Token Scope")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"deskeraToken"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Deskera Access Token")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"deskeraRefreshToken"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Deskera Refresh Token")))))}u.isMDXComponent=!0},154:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},O=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),O=u(a),p=n,d=O["".concat(c,".").concat(p)]||O[p]||s[p]||b;return a?r.a.createElement(d,i(i({ref:t},o),{},{components:a})):r.a.createElement(d,i({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);