(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a(2),r=a(6),l=(a(0),a(148)),b={id:"order",title:"Order Service",sidebar_label:"Order"},c={id:"order",title:"Order Service",description:"Order services includes purchase and sales order details. These details includes the product quantities and costs.",source:"@site/docs/order.md",permalink:"/Developer-Documentation/docs/order",sidebar_label:"Order",sidebar:"someSidebar",previous:{title:"Invoice Service",permalink:"/Developer-Documentation/docs/invoice"},next:{title:"Payment Service",permalink:"/Developer-Documentation/docs/payment"}},i=[{value:"Fulfillment DTO Object",id:"fulfillment-dto-object",children:[{value:"Attributes",id:"attributes",children:[]}]},{value:"API",id:"api",children:[{value:"Create Fulfillment",id:"create-fulfillment",children:[]}]},{value:"Objects",id:"objects",children:[{value:"FulfillmentItemDetails",id:"fulfillmentitemdetails",children:[]}]},{value:"Enums",id:"enums",children:[{value:"DOCUMENT_TYPE",id:"document_type",children:[]},{value:"ORDER_STATUS",id:"order_status",children:[]},{value:"FULFILLMENT_TYPE",id:"fulfillment_type",children:[]}]}],d={rightToc:i};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Order")," services includes purchase and sales order details. These details includes the product quantities and costs. "),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.deskera.com/sg/books/buying/"}),"Order")," specifies what a buyer must pay the seller according to the seller\u2019s payment terms."),Object(l.b)("h2",{id:"fulfillment-dto-object"},"Fulfillment DTO Object"),Object(l.b)("h3",{id:"attributes"},"Attributes"),Object(l.b)("hr",null),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sequence"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"integer")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sequence format id.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fulfillmentCode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique code for fulfillment.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"documentCode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique code for order.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"documentType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Document type. Possible values for ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#document_type"}),"document type"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fulfillmentItemDtos"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"list")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"List of items associated with fulfillment. Attributes of ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#fulfillmentitemdetails"}),"Fulfillment Items"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"status"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status of the order. Possible values for ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#order_status"}),"order status"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"autoFulfilled"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Has the value ",Object(l.b)("inlineCode",{parentName:"td"},"true")," if fulfilled is auto converted or ",Object(l.b)("inlineCode",{parentName:"td"},"false")," if it is not.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fulfillmentDate"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date of the fulillment.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fulfillmentType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"enum")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fulfillment type of order. Possible values for ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#fulfillment_type"}),"Fulfillment type"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"warehouseCode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique code related to the warehouse.")))),Object(l.b)("h2",{id:"api"},"API"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"create-fulfillment"},"Create Fulfillment"),Object(l.b)("p",null,"Creates a new fulfillment."),Object(l.b)("h4",{id:"code"},"Code"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"  @Autowired\n  private OrdersApiClient ordersApiClient;\n\n  public FulfillmentResponse createFulfillment(FulfillmentRequest fulfillmentRequest, String accessToken){\n    return this.ordersApiClient.createFulfillment(fulfillmentRequest, accessToken);\n  }\n")),Object(l.b)("h2",{id:"objects"},"Objects"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"fulfillmentitemdetails"},"FulfillmentItemDetails"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"long")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique identifier for item.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pendingQuantity"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pending quantity of the product.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"quantityRequired"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The needed quantity for the product.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"productCode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Product code of the item.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sequence"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"integer")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sequence format id.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"documentItemCode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Product code of the item.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fulfilledQuantity"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The product quantity needed to fulfilled the order.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fulfillmentDate"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date of the fulillment.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"availableProductQuantity"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of quantity left of the product.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"productName"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of product.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"productType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of product.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"productDescription"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Description of product.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"warehouseCode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique code related to the warehouse.")))),Object(l.b)("h2",{id:"enums"},"Enums"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"document_type"},"DOCUMENT_TYPE"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"QUOTATION"),Object(l.b)("li",{parentName:"ul"},"PURCHASE_ORDER"),Object(l.b)("li",{parentName:"ul"},"SALES_ORDER"),Object(l.b)("li",{parentName:"ul"},"PURCHASE_INVOICE"),Object(l.b)("li",{parentName:"ul"},"SALES_INVOICE"),Object(l.b)("li",{parentName:"ul"},"MAKE_PAYMENT"),Object(l.b)("li",{parentName:"ul"},"RECEIVE_PAYMENT"),Object(l.b)("li",{parentName:"ul"},"JOURNAL_ENTRY"),Object(l.b)("li",{parentName:"ul"},"CREDIT_NOTE"),Object(l.b)("li",{parentName:"ul"},"DEBIT_NOTE"),Object(l.b)("li",{parentName:"ul"},"EXPENSE"),Object(l.b)("li",{parentName:"ul"},"EXPENSE_PREPAYMENT"),Object(l.b)("li",{parentName:"ul"},"DEPOSIT"),Object(l.b)("li",{parentName:"ul"},"DEPOSIT_ADVPAYMENT")),Object(l.b)("h3",{id:"order_status"},"ORDER_STATUS"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"UNFULFILLED"),Object(l.b)("li",{parentName:"ul"},"PARTIAL_FULFILLED"),Object(l.b)("li",{parentName:"ul"},"FULLY_FULFILLED")),Object(l.b)("h3",{id:"fulfillment_type"},"FULFILLMENT_TYPE"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"None"),Object(l.b)("li",{parentName:"ul"},"Default"),Object(l.b)("li",{parentName:"ul"},"Pick_Pack_Ship"),Object(l.b)("li",{parentName:"ul"},"Drop_Ship")))}O.isMDXComponent=!0},148:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),O=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=O(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=O(a),o=n,p=u["".concat(b,".").concat(o)]||u[o]||j[o]||l;return a?r.a.createElement(p,c(c({ref:t},d),{},{components:a})):r.a.createElement(p,c({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=o;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var d=2;d<l;d++)b[d]=a[d];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);