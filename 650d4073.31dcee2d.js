(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{124:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),b=(a(0),a(150));const r={id:"invoice",title:"Invoice Service",sidebar_label:"Invoice"},c={id:"invoice",title:"Invoice Service",description:"Invoice  is a document issued by a seller to the buyer that indicates the quantities and costs of the products or services provider by the seller. Invoice specifies what a buyer must pay the seller according to the seller\u2019s payment terms. Payment terms indicate the maximum amount of time that a buyer has to pay for the goods and/or services that they have purchased from the seller.",source:"@site/docs/invoice.md",permalink:"/Developer-Documentation/docs/invoice",sidebar_label:"Invoice",sidebar:"someSidebar",previous:{title:"Tax Service",permalink:"/Developer-Documentation/docs/taxes"},next:{title:"Order Service",permalink:"/Developer-Documentation/docs/order"}},l=[{value:"SalesInvoiceRequest Object",id:"salesinvoicerequest-object",children:[{value:"Attributes",id:"attributes",children:[]}]},{value:"API",id:"api",children:[{value:"Create Invoice",id:"create-invoice",children:[]},{value:"Retrieve Invoice",id:"retrieve-invoice",children:[]},{value:"List All Invoices",id:"list-all-invoices",children:[]}]},{value:"Objects",id:"objects",children:[{value:"Address",id:"address",children:[]},{value:"ContactInfo",id:"contactinfo",children:[]},{value:"SalesInvoiceItemDetails",id:"salesinvoiceitemdetails",children:[]},{value:"SalesInvoiceRecurringDetails",id:"salesinvoicerecurringdetails",children:[]}]},{value:"Enums",id:"enums",children:[{value:"INVOICE_STATUS",id:"invoice_status",children:[]},{value:"FULFILLMENT_STATUS",id:"fulfillment_status",children:[]},{value:"ProductType",id:"producttype",children:[]},{value:"RECURRING_FREQUENCY_TYPE",id:"recurring_frequency_type",children:[]}]}],i={rightToc:l};function d({components:e,...t}){return Object(b.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Invoice"),"  is a document issued by a seller to the buyer that indicates the quantities and costs of the products or services provider by the seller. ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.deskera.com/sg/books/create-invoices-with-deskera-books/"}),"Invoice")," specifies what a buyer must pay the seller according to the seller\u2019s payment terms. Payment terms indicate the maximum amount of time that a buyer has to pay for the goods and/or services that they have purchased from the seller."),Object(b.b)("h2",{id:"salesinvoicerequest-object"},"SalesInvoiceRequest Object"),Object(b.b)("h3",{id:"attributes"},"Attributes"),Object(b.b)("hr",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"openingInvoice"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Has the value ",Object(b.b)("inlineCode",{parentName:"td"},"true")," if the invoice is opening invoice or ",Object(b.b)("inlineCode",{parentName:"td"},"false")," if the invoice is not opening invoice.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"totalAmount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Total amount of invoice.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"payableAccountCode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account code of contact's account payable.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"taxAmount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tax amount of invoice.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"openingDocumentNumber"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Opening document number of invoice.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"warehouseCode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Warehouse code.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dropShip"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Has the value ",Object(b.b)("inlineCode",{parentName:"td"},"true")," if the invoice created for drop ship or ",Object(b.b)("inlineCode",{parentName:"td"},"false")," if the invoice is not created for drop ship.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"backOrder"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Has the value ",Object(b.b)("inlineCode",{parentName:"td"},"true")," if the invoice is backorder or ",Object(b.b)("inlineCode",{parentName:"td"},"false")," if the invoice is not backorder.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"status"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"enum")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status of the invoice. Possible values for ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#invoice_status"}),"invoice status"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"customField"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"jsonobject")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Key-value pair for custom field name and its value.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"attachmentIds"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"list")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Attachment ids of invoice.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contactCode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Contact code.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"linkedDocuments"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"array")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array of linked documents associated with invoice.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"purchaseOrderRefNo"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Purchase order reference number.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"journalEntryCode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Journal entry code associated with invoice.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"currency"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Currency code of invoice.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"exchangeRate"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Exchange rate.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"salesInvoiceDate"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sales invoice date.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"salesInvoiceDueDate"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sales invoice due date.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"memo"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Memo of the invoice.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"attachments"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"array")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array of file attachments.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"unitPriceGstInclusive"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Has the value ",Object(b.b)("inlineCode",{parentName:"td"},"true")," if the unit price is inclusive of GST or ",Object(b.b)("inlineCode",{parentName:"td"},"false")," if the unit price is exclusive of GST.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dueAmount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Due amount of invoice.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"recurring"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Has the value ",Object(b.b)("inlineCode",{parentName:"td"},"true")," if the invoice is recurring invoice or ",Object(b.b)("inlineCode",{parentName:"td"},"false")," if the invoice is not recurring invoice.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"recurringActivated"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Has the value ",Object(b.b)("inlineCode",{parentName:"td"},"true")," if the recurring is activated for invoice or ",Object(b.b)("inlineCode",{parentName:"td"},"false")," if the recurring is de-activated for invoice.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"salesInvoiceRecurring"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Recurring details for the invoice. Attributes of ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#salesinvoicerecurringdetails"}),"Sales Invoice Recurring Details"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"salesInvoiceItems"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"list")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"List of items associated with invoice. Attributes of ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#salesinvoiceitemdetails"}),"Sales Invoice Items"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contact"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Contact information. Attributes for ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#contactinfo"}),"ContactInfo"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"shipFrom"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ship from address. Attributes for ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#address"}),"Address"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"shipTo"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ship to address. Attributes for ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#address"}),"Address"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"billTo"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Bill to address. Attributes for ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#address"}),"Address"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"shipByDate"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ship by date.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fulfillmentStatus"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"enum")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fulfillment status of invoice. Possible values for ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#fulfillment_status"}),"Fulfillment status"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"draft"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Has the value ",Object(b.b)("inlineCode",{parentName:"td"},"true")," if the invoice is in draft state or ",Object(b.b)("inlineCode",{parentName:"td"},"false")," if the invoice is not in draft state.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fulfillmentComplete"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Has the value ",Object(b.b)("inlineCode",{parentName:"td"},"true")," if auto fulfilled is required. or ",Object(b.b)("inlineCode",{parentName:"td"},"false")," if auto fulfilled is not required.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"documentSequenceCode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique code is associated with invoice.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sequenceFormat"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sequence format id.")))),Object(b.b)("h2",{id:"api"},"API"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"create-invoice"},"Create Invoice"),Object(b.b)("p",null,"Creates a new invoice."),Object(b.b)("h4",{id:"parameters"},"Parameters"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#salesinvoicerequest-object"}),"salesInvoiceRequest")," ",Object(b.b)("inlineCode",{parentName:"li"},"SalesInvoiceRequest")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#access-token"}),"accessToken")," ",Object(b.b)("inlineCode",{parentName:"li"},"string"))),Object(b.b)("h4",{id:"code"},"Code"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"  @Autowired\n  private InvoicesApiClient invoicesApiClient;\n  \n  public SalesInvoiceResponse createInvoice(SalesInvoiceRequest salesInvoiceRequest, String accessToken){\n    return this.invoicesApiClient.createInvoice(salesInvoiceRequest, accessToken);\n  }\n")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"retrieve-invoice"},"Retrieve Invoice"),Object(b.b)("p",null,"Retrieves the details of an existing invoice. You only need to supply the unique invoice code that was returned upon invoice creation."),Object(b.b)("h4",{id:"parameters-1"},"Parameters"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"invoiceCode ",Object(b.b)("inlineCode",{parentName:"li"},"string")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#access-token"}),"accessToken")," ",Object(b.b)("inlineCode",{parentName:"li"},"string"))),Object(b.b)("h4",{id:"code-1"},"Code"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"  @Autowired\n  private InvoicesApiClient invoicesApiClient;\n\n  public SalesInvoiceResponse getInvoiceByCode(String invoiceCode, String accessToken){\n    return this.invoicesApiClient.getInvoiceByCode(invoiceCode, accessToken);\n  }\n")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"list-all-invoices"},"List All Invoices"),Object(b.b)("p",null,"Returns list of invoices."),Object(b.b)("h4",{id:"parameters-2"},"Parameters"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#access-token"}),"accessToken")," ",Object(b.b)("inlineCode",{parentName:"li"},"string")),Object(b.b)("li",{parentName:"ul"},"limit ",Object(b.b)("inlineCode",{parentName:"li"},"int")),Object(b.b)("li",{parentName:"ul"},"page ",Object(b.b)("inlineCode",{parentName:"li"},"int")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#invoice_status"}),"status")," ",Object(b.b)("inlineCode",{parentName:"li"},"string"))),Object(b.b)("h4",{id:"code-2"},"Code"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"  @Autowired\n  private InvoicesApiClient invoicesApiClient;\n\n  public SalesInvoices getAllSalesInvoice(String accessToken, Integer limit, Integer page, String status){\n    return this.invoicesApiClient.getAllSalesInvoice(accessToken, limit, page, status);\n  }\n")),Object(b.b)("h2",{id:"objects"},"Objects"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"address"},"Address"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"address1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address line 1.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"address2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address line 2.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"country"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Country.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"state"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"State.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"city"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"City.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"postalCode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Postal Code.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"preferred"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Has the value ",Object(b.b)("inlineCode",{parentName:"td"},"true")," if the address is default  or ",Object(b.b)("inlineCode",{parentName:"td"},"false")," if the address is not default address.")))),Object(b.b)("h3",{id:"contactinfo"},"ContactInfo"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Contact name.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"address"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of the contact.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"peppolId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PeppolId of the contact.")))),Object(b.b)("h3",{id:"salesinvoiceitemdetails"},"SalesInvoiceItemDetails"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"long")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique identifier for item.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"productCode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Product code of the item.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"productDescription"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Product description of the item.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"productQuantity"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Product quantity of the item.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"unitPrice"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unit price of the item.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"discount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Discount on the item.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"discountInPercent"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Has the value ",Object(b.b)("inlineCode",{parentName:"td"},"true")," if discount is in percentage. or ",Object(b.b)("inlineCode",{parentName:"td"},"false")," if discount is not in percentage.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"taxCode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tax code of the item.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"taxAmount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tax amount of the item.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"totalAmount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Total amount of the item.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"productOrder"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"int")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Product view order.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"salesInvoiceItemCode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sales Invoice Item Code.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of the item. Possible values for ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#producttype"}),"ProductType"),".")))),Object(b.b)("h3",{id:"salesinvoicerecurringdetails"},"SalesInvoiceRecurringDetails"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"long")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique identifier for item.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"recurrenceType"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"int")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Every x Days/Weeks/Months.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"recurrenceFrequency"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"enum")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Recurrence frequency. Possible values for ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#recurring_frequency_type"}),"Recurring Frequency Type"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"invoiceRecurringCount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"int")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of Invoices to be created.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"recurrenceEndDate"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Recurrence End date.")))),Object(b.b)("h2",{id:"enums"},"Enums"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"invoice_status"},"INVOICE_STATUS"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"OPEN"),Object(b.b)("li",{parentName:"ul"},"DRAFT"),Object(b.b)("li",{parentName:"ul"},"CLOSED")),Object(b.b)("h3",{id:"fulfillment_status"},"FULFILLMENT_STATUS"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"UNFULFILLED"),Object(b.b)("li",{parentName:"ul"},"PARTIAL_FULFILLED"),Object(b.b)("li",{parentName:"ul"},"FULLY_FULFILLED")),Object(b.b)("h3",{id:"producttype"},"ProductType"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"TRACKED"),Object(b.b)("li",{parentName:"ul"},"NONTRACKED"),Object(b.b)("li",{parentName:"ul"},"BILL_OF_MATERIALS")),Object(b.b)("h3",{id:"recurring_frequency_type"},"RECURRING_FREQUENCY_TYPE"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"DAYS"),Object(b.b)("li",{parentName:"ul"},"WEEK"),Object(b.b)("li",{parentName:"ul"},"MONTH")))}d.isMDXComponent=!0},150:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return m}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var d=b.a.createContext({}),O=function(e){var t=b.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},j=function(e){var t=O(e.components);return b.a.createElement(d.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},p=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),j=O(a),p=n,m=j["".concat(c,".").concat(p)]||j[p]||o[p]||r;return a?b.a.createElement(m,l(l({ref:t},d),{},{components:a})):b.a.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var d=2;d<r;d++)c[d]=a[d];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);