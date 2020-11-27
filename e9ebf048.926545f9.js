(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(150)),o={id:"authenticate",title:"Authenticate using OAuth 2.0",sidebar_label:"Authentication"},c={id:"books/authenticate",title:"Authenticate using OAuth 2.0",description:"The safe retrieval of secure resources while protecting user credentials can be achieved by OAuth 2.0.",source:"@site/docs/books/authenticate.md",permalink:"/Developer-Documentation/docs/books/authenticate",sidebar_label:"Authentication",sidebar:"someSidebar",previous:{title:"Setup Developer Account",permalink:"/Developer-Documentation/docs/books/setup"},next:{title:"Authentication Service",permalink:"/Developer-Documentation/docs/books/authentication"}},s=[{value:"The OAuth connection flow",id:"the-oauth-connection-flow",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The safe retrieval of secure resources while protecting user credentials can be achieved by OAuth 2.0."),Object(i.b)("p",null,"The OAuth 2.0 specification defines a delegation protocol that is useful for conveying authorization decisions across a network of web-enabled applications and APIs. OAuth is used in a wide variety of applications, including providing mechanisms for user authentication. This has led many developers and API providers to incorrectly conclude that OAuth is itself an authentication protocol and to mistakenly use it as such."),Object(i.b)("p",null,"Once you have registered as a Deskera developer and received your ",Object(i.b)("inlineCode",{parentName:"p"},"client_id")," and ",Object(i.b)("inlineCode",{parentName:"p"},"client_secret"),", they can be used to implement the standard Oauth 2.0 three legged flow to allow user to authorize the application to access Deskera APIs."),Object(i.b)("h3",{id:"the-oauth-connection-flow"},"The OAuth connection flow"),Object(i.b)("p",null,"A user connects to your platform using the following OAuth connection flow:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Starting on a page at your site, the user clicks a link that takes them to Deskera App Authentication page, passing along your app's ",Object(i.b)("inlineCode",{parentName:"li"},"client_id"),"."),Object(i.b)("li",{parentName:"ol"},"On Deskera's app auth page, the user provides the necessary information for connecting to your platform."),Object(i.b)("li",{parentName:"ol"},"A call is made to the ",Object(i.b)("inlineCode",{parentName:"li"},"callback_uri")," given during app registeration along with an authorization code (this code can be used to get access_token and refresh_token for accessing the user's Deskera data)."),Object(i.b)("li",{parentName:"ol"},"On successfull response  of the call back API, the Deskera app auth page will redirect the user to a ",Object(i.b)("inlineCode",{parentName:"li"},"redirect_uri")," of your choice.")),Object(i.b)("h4",{id:"step-1-the-oauth-link"},"Step 1: The OAuth Link"),Object(i.b)("p",null,"The Deskera endpoint should receive these parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"response_type"),", with the value ",Object(i.b)("strong",{parentName:"li"},"code")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"scope"),", with the value ",Object(i.b)("strong",{parentName:"li"},"write")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"client_id"),", with app's client ID generated during registration"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"state")," (",Object(i.b)("em",{parentName:"li"},"optional"),"), state value"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"redirect_uri")," (",Object(i.b)("em",{parentName:"li"},"optional"),"), The redirect URI that the user should be taken  to after authorization. This must be sent encoded")),Object(i.b)("h5",{id:"sample-oauth-link"},"Sample OAuth Link"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"https://appauth.deskera.com/?client_id=cl_pub_12312412asdasdh12&scope=write&state=65289&response_type=code&redirect_uri=https%3A%2F%2Ftestapp.deskera.com%2Fpages%2Fdeskera\n")),Object(i.b)("h4",{id:"step-2-users-connect-their-deskera-account"},"Step 2: Users connect their Deskera account"),Object(i.b)("p",null,"Once on the Deskera App auth page, the user would be prompted to input his/her Deskera user name and password and asked to authorize the app. The user should be already registered to Deskera Books and have atleast one orhganisation before coming to this step."),Object(i.b)("h4",{id:"step-3-callback-request-with-auth-code"},"Step 3: Callback request with Auth Code"),Object(i.b)("p",null,"After the user connects their existing account to your platform, we'll make an API call to the ",Object(i.b)("inlineCode",{parentName:"p"},"callback_uri")," with the below parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"scope")," granted"),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"state")," value, if any"),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"code"),", authorization code that is to be used get the tokens as described in next steps. This auth code is short lived and for one time use only.")),Object(i.b)("h5",{id:"sample-callback-request"},"Sample callback request"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"https://testapp.deskera.com/pages/deskera?code=Ag78aIu&state=65289&scope=write\n")),Object(i.b)("h4",{id:"step-4-platform-completes-the-deskera-account-connection-and-gets-tokens"},"Step 4: Platform completes the Deskera account connection and gets tokens"),Object(i.b)("p",null,"Provide the code received in the Step 3 to the API below to get the tokens from Deskera. The ",Object(i.b)("inlineCode",{parentName:"p"},"deskera-token")," can be used to make API calls to Deskera Books and the ",Object(i.b)("inlineCode",{parentName:"p"},"deskera-refresh-token")," can be used to fetch a new ",Object(i.b)("inlineCode",{parentName:"p"},"deskera-token")," in case it expires."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Authorization")," header consists of Basic + baseEncode64(clientId:clientSecret)"),Object(i.b)("h5",{id:"sample-request-to-get-tokens"},"Sample request to get tokens"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request POST 'https://bifrost.deskera.com/oauth/token?grant_type=authorization_code&scope=read+write&code=0P2xhb' \\\n--header 'Authorization: Basic Y2xfcHViX2I5N2Q3MDI0ZmI4ZjQ5OGU4YmE0YjIwOTljMmRhMjAyOmNsX3ByaXZfNmZ'\n")),Object(i.b)("h5",{id:"sample-response-for-get-tokens-api"},"Sample response for get tokens API"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "access_token": "95fd1877-368b-4ceb-8793-26e8d1a8a15d",\n    "token_type": "bearer",\n    "refresh_token": "fd4a88b6-5680-41fd-bf61-f9470604982c",\n    "expires_in": 9,\n    "scope": "read",\n    "deskera-token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYW1Vc2VySWQiOjEyNzQ3LCJ3ZWJzaXRlIjoiU2lu",\n    "deskera-refresh-token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYW1Vc2VySWQiOjEyNzQ3LCJ3ZWJzaXRlIjoiU2luZ2Fwb3JlIE9yZyIsImlzT3JnU2V0Ijp0cnVlLCJ1c2VyX25hbWUiOiIx",\n    "email": "test-user@mailinator.com",\n    "username": "My Org",\n    "org": "Singapore Org"\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"deskera-token")," is not a permanent token and might become invalid time to time. At any point of time the validity of the token can be checked by calling the below API."),Object(i.b)("h5",{id:"sample-request-to-check-if-token-is-valid"},"Sample request to check if token is valid"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'https://bifrost.deskera.com/v1/iam/token/app/validate' \\\n--header 'x-access-token: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYW1Vc2VySWQiOjEyNzQ3LCJ3ZWJzaXRlIjoiU2luZ2Fwb3JlIE9yZyIsImlzT3J'\n")),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"200")," response for the above API would mean that the token is still valid.\nIn case the token is invalid, the deskera token can be refreshed by using the below API"),Object(i.b)("h5",{id:"sample-request-to-refresh-token"},"Sample request to refresh token"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request POST 'https://bifrost.deskera.com/v1/iam/auth/app/getrefreshtoken' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"refreshToken\" : \"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYW1Vc2VySWQiOjEyNzQ3LCJ3ZWJzaXRlIjoiU2luZ2Fwb3JlIE9yZyIsImlzT3JnU2V0Ijp0cnVlLCJ1c2V\"\n}'\n")),Object(i.b)("h5",{id:"sample-respone-for-refresh-token"},"Sample respone for refresh token"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYW1Vc2VySWQiOjEyNzQ3LCJ3ZWJzaXRlIjoiU2luZ2Fwb3JlIE9yZyIsImlzT3JnU2V0Ijp0cnVlLCJ1c2Vy",\n    "refreshToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYW1Vc2VySWQiOjEyNzQ3LCJ3ZWJzaXRlIjoiU2luZ2Fwb3JlIE9yZyIsImlzT3JnU2V0Ijp0cnVlLCJ1c2Vy",\n    "idToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYW1Vc2VySWQiOjEyNzQ3LCJ3ZWJzaXRlIjoiU2luZ2Fwb3JlIE9yZyIsImlzT3JnU2V0Ijp0cnVlLCJ1c2VyX",\n    "expiresIn": 0,\n    "tokenType": "bearer",\n    "emailVerified": false\n}\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"In the above refresh token API response - "),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"accessToken")," refers to ",Object(i.b)("inlineCode",{parentName:"li"},"deskera-token")," "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"refreshToken")," refers to ",Object(i.b)("inlineCode",{parentName:"li"},"deskera-refresh-token"))))),Object(i.b)("h4",{id:"step-4-user-is-redirected-to-application"},"Step 4: User is redirected to Application"),Object(i.b)("p",null,"If the ",Object(i.b)("inlineCode",{parentName:"p"},"callback_uri")," return a 2XX response and is successfully able to fetch the tokens and complete the connection, the user UI is then redirected to the ",Object(i.b)("inlineCode",{parentName:"p"},"redirect_uri"),", if any provided in step #1."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Your ",Object(i.b)("inlineCode",{parentName:"p"},"access-token")," and ",Object(i.b)("inlineCode",{parentName:"p"},"deskera-token")," contains many privileges, keep it secure!"))),Object(i.b)("p",null,"Your platform can now use these token to access various Deskera APIs."))}p.isMDXComponent=!0},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,h=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?r.a.createElement(h,c(c({ref:t},l),{},{components:n})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);