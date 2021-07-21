(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return O})),a.d(t,"default",(function(){return i}));var n=a(2),b=a(6),r=(a(0),a(154)),l={id:"webhook",title:"Webhook",sidebar_label:"Webhook"},c={id:"books/webhook",title:"Webhook",description:"Webhooks notify you about certain events that occur in Deskera. You can select which type of events you want to be notified about and where we should send them to. This allows you to be easily aware of things that happen, even after the consumer is no longer on your site.",source:"@site/docs/books/webhook.md",permalink:"/Developer-Documentation/docs/books/webhook",sidebar_label:"Webhook",sidebar:"someSidebar",previous:{title:"Inventory APIs",permalink:"/Developer-Documentation/docs/books/inventoryapi"}},O=[{value:"API",id:"api",children:[{value:"Register Webhook",id:"register-webhook",children:[]},{value:"Deregister Webhook",id:"deregister-webhook",children:[]},{value:"List All Registered Webhooks",id:"list-all-registered-webhooks",children:[]}]},{value:"Enums",id:"enums",children:[{value:"eventTypes",id:"eventtypes",children:[]}]}],j={rightToc:O};function i(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Webhooks notify you about certain events that occur in Deskera. You can select which type of events you want to be notified about and where we should send them to. This allows you to be easily aware of things that happen, even after the consumer is no longer on your site."),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"register-webhook"},"Register Webhook"),Object(r.b)("p",null,"Register webhook for an event."),Object(r.b)("h4",{id:"post"},"POST"),Object(r.b)("h4",{id:"v1webhooksregister"},"/v1/webhooks/register"),Object(r.b)("h5",{id:"request-url"},"Request URL"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"https://bifrost.deskera.com/v1/webhooks/register\n")),Object(r.b)("h5",{id:"curl"},"Curl"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'curl -X POST "https://bifrost.deskera.com/webhooks/register" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \\"clientId\\" : \\"cl_pub...\\", \\"clientSecret\\" : \\"cl_priv...\\", \\"accessToken\\" : \\"sampleaccesstoken\\", \\"refreshToken\\" : \\"samplerefreshtoken\\", \\"eventType\\" : \\"CREATE_PRODUCTS\\", \\"webhookUrl\\" : \\"samplewebhookurl\\" }"\n')),Object(r.b)("h5",{id:"parameters"},"Parameters"),Object(r.b)("h6",{id:"request"},"Request"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Located in"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Schema"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"clientId"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"body"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Client Id"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"clientSecret"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"body"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Client Secret"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accessToken"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"body"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Access Token"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"refreshToken"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"body"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Refresh Token"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"eventType"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"body"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Event Type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#eventtypes"}),"enum"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"webhookUrl"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"body"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Client Secret"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"x-access-token"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"header"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Access Token"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("h6",{id:"response"},"Response"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Located in"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Schema"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hookId"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"body"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Webhook Id"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"long")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"eventType"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"body"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Event Type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#eventtypes"}),"enum"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"webhookUrl"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"body"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Webhook Url"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"deleted"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"body"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")))),Object(r.b)("h5",{id:"sample-response"},"Sample Response"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "hookId": 4,\n    "eventType":"CREATE_CRM_DEAL",\n    "webhookUrl":"https://fb3d2be15599.ngrok.io/api/webhooks",\n    "deleted": false\n}\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Store ",Object(r.b)("inlineCode",{parentName:"p"},"hookId")," for future reference and deregistration."))),Object(r.b)("h3",{id:"deregister-webhook"},"Deregister Webhook"),Object(r.b)("h4",{id:"delete"},"DELETE"),Object(r.b)("h4",{id:"v1webhooksdeleteid"},"/v1/webhooks/delete/{id}"),Object(r.b)("h5",{id:"request-url-1"},"Request URL"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"https://bifrost.deskera.com/v1/webhooks/delete/{id}\n")),Object(r.b)("h5",{id:"curl-1"},"Curl"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'curl -X DELETE "https://bifrost.deskera.com/v1/webhooks/delete/8" -H "x-access-token: sampleaccesstoken"\n')),Object(r.b)("h5",{id:"parameters-1"},"Parameters"),Object(r.b)("h6",{id:"request-1"},"Request"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Located in"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Schema"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"path"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Webhook Id"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"long")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"x-access-token"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"header"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Access Token"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("h6",{id:"response-1"},"Response"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Located in"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Schema"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hookId"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"body"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Webhook Id"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"long")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"eventType"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"body"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Event Type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#eventtypes"}),"enum"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"webhookUrl"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"body"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Webhook Url"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"deleted"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"body"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")))),Object(r.b)("h5",{id:"sample-response-1"},"Sample Response"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "hookId": 4,\n    "eventType":"CREATE_CRM_DEAL",\n    "webhookUrl":"https://fb3d2be15599.ngrok.io/api/webhooks",\n    "deleted": false\n}\n')),Object(r.b)("h3",{id:"list-all-registered-webhooks"},"List All Registered Webhooks"),Object(r.b)("h4",{id:"get"},"GET"),Object(r.b)("h4",{id:"v1webhooks"},"/v1/webhooks"),Object(r.b)("h5",{id:"request-url-2"},"Request URL"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"https://bifrost.deskera.com/v1/webhooks\n")),Object(r.b)("h5",{id:"curl-2"},"Curl"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'curl -X GET "https://bifrost.deskera.com/v1/webhooks" -H "x-access-token: sampleaccesstoken"\n')),Object(r.b)("h5",{id:"parameters-2"},"Parameters"),Object(r.b)("h6",{id:"request-2"},"Request"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Located in"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Schema"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"x-access-token"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"header"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Access Token"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("h6",{id:"response-2"},"Response"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Located in"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Schema"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hookId"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"body"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Webhook Id"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"long")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"eventType"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"body"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Event Type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#eventtypes"}),"enum"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"webhookUrl"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"body"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Webhook Url"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"deleted"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"body"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")))),Object(r.b)("h5",{id:"sample-response-2"},"Sample Response"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n    "hookId": 4,\n    "eventType":"CREATE_CRM_DEAL",\n    "webhookUrl":"https://fb3d2be15599.ngrok.io/api/webhooks",\n    "deleted": false\n    },\n    {\n    "hookId": 5,\n    "eventType":"UPDATE_CRM_DEAL",\n    "webhookUrl":"https://fb3d2be15599.ngrok.io/api/webhooks",\n    "deleted": false\n    }\n]\n')),Object(r.b)("h2",{id:"enums"},"Enums"),Object(r.b)("h3",{id:"eventtypes"},"eventTypes"),Object(r.b)("hr",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Event"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CREATE_PRODUCTS"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when a Product is added in Books")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CREATE_CONTACT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when a Contact is added in Books")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CREATE_BILL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when a Bill is created in Books")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UPDATE_BILL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when a Bill is updated in Books")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DELETE_BILL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when a Bill is deleted in Books")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CREATE_INVOICE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when an Invoice is created in Books")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UPDATE_INVOICE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when an Invoice is updated in Books")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DELETE_INVOICE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when an Invoice is deleted in Books")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CREATE_DEBITNOTE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when a Debit Note is created in Books")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UPDATE_DEBITNOTE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when a Debit Note is updated in Books")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DELETE_DEBITNOTE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when a Debit Note is deleted in Books")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CREATE_CREDITNOTE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when a Credit Note is created in Books")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UPDATE_CREDITNOTE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when a Credit Note is updated in Books")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DELETE_CREDITNOTE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when a Credit Note is deleted in Books")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CREATE_CRM_CONTACT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when a Contact is created in Sales")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UPDATE_CRM_CONTACT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when a Contact is updated in Sales")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DELETE_CRM_CONTACT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when a Contact is deleted in Sales")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CREATE_CRM_DEAL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when a Deal is created in Sales")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UPDATE_CRM_DEAL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when a Deal is updated in Sales")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DELETE_CRM_DEAL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when a Deal is deleted in Sales")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"STOCK_IN"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when the Stock is increased for a Product in Books")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"STOCK_OUT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggers when the Stock is reduced for a Product in Books")))))}i.isMDXComponent=!0},154:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function O(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var j=b.a.createContext({}),i=function(e){var t=b.a.useContext(j),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},o=function(e){var t=i(e.components);return b.a.createElement(j.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},p=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,j=O(e,["components","mdxType","originalType","parentName"]),o=i(a),p=n,s=o["".concat(l,".").concat(p)]||o[p]||d[p]||r;return a?b.a.createElement(s,c(c({ref:t},j),{},{components:a})):b.a.createElement(s,c({ref:t},j))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=p;var c={};for(var O in t)hasOwnProperty.call(t,O)&&(c[O]=t[O]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var j=2;j<r;j++)l[j]=a[j];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);