(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return j}));var n=a(2),b=a(6),c=(a(0),a(150)),r={id:"account",title:"Account Service",sidebar_label:"Account"},l={id:"books/account",title:"Account Service",description:"Account describe the customers and vendors accounts, that are associated with the Tenant. You can retrieve all accounts or by its id by using API.",source:"@site/docs/books/account.md",permalink:"/Developer-Documentation/docs/books/account",sidebar_label:"Account",sidebar:"someSidebar",previous:{title:"Authentication Service",permalink:"/Developer-Documentation/docs/books/authentication"},next:{title:"Contact Service",permalink:"/Developer-Documentation/docs/books/contact"}},i=[{value:"Account Object",id:"account-object",children:[{value:"Attributes",id:"attributes",children:[]}]},{value:"API",id:"api",children:[{value:"Retrieve Account",id:"retrieve-account",children:[]},{value:"List All Accounts",id:"list-all-accounts",children:[]}]},{value:"Objects",id:"objects",children:[{value:"Account_Group",id:"account_group",children:[]},{value:"Balance",id:"balance",children:[]},{value:"Bank_Account",id:"bank_account",children:[]},{value:"Account",id:"account",children:[]}]},{value:"Enums",id:"enums",children:[{value:"ACCOUNT_NAME",id:"account_name",children:[]},{value:"STATUS",id:"status",children:[]},{value:"OPENING_BALANCE_TYPE",id:"opening_balance_type",children:[]},{value:"ACCOUNT_NATURE",id:"account_nature",children:[]},{value:"TYPE",id:"type",children:[]}]}],O={rightToc:i};function j(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Account")," describe the customers and vendors accounts, that are associated with the ",Object(c.b)("inlineCode",{parentName:"p"},"Tenant"),". You can retrieve all accounts or by its id by using API."),Object(c.b)("h2",{id:"account-object"},"Account Object"),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("hr",null),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"long")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique identifier for the object.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accountCode"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique accountCode assigned to the object.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account name. Possible values for ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#account_name"}),"name"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"code"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique code assigned to the object.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Description.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"taxCode"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account tax code assigned to the object.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"currency"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Currency used.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accountGroup"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Group Name. Attributes for ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#account_group"}),"account group"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accountGroupId"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Group Id.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"status"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status of the account. Possible values for ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#status"}),"account status"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"openingBalance"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Opening Balance Amount.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"balance"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Balance Amount. Attributes for ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#balance"}),"balance"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"totalBalance"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Total value of Opening Balance and Balance.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"totalCOABalance"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Total value of Opening Balance and Balance with Nature.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"openingBalanceCdType"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Opening Balance Type. Possible values for ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#opening_balance_type"}),"type"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accountNature"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Nature. Possible values for ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#account_nature"}),"account nature"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"customField"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"jsonobject")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Key-value pair for custom field name and its value.")))),Object(c.b)("h2",{id:"api"},"API"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"retrieve-account"},"Retrieve Account"),Object(c.b)("p",null,"Retrieves the details of an existing account. You need only supply the unique account id that was returned upon account creation."),Object(c.b)("h4",{id:"parameters"},"Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"accountId ",Object(c.b)("inlineCode",{parentName:"li"},"long")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#access-token"}),"accessToken")," ",Object(c.b)("inlineCode",{parentName:"li"},"string"))),Object(c.b)("h4",{id:"code"},"Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"  @Autowired\n  private AccountsApiClient accountsApiClient;\n\n  public AccountDto getAccountById(Long accountId, String accessToken){\n    return this.accountsApiClient.getById(accountId, accessToken);\n  }\n")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"list-all-accounts"},"List All Accounts"),Object(c.b)("p",null,"Returns list of accounts."),Object(c.b)("h4",{id:"parameters-1"},"Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#access-token"}),"accessToken")," ",Object(c.b)("inlineCode",{parentName:"li"},"string")),Object(c.b)("li",{parentName:"ul"},"limit ",Object(c.b)("inlineCode",{parentName:"li"},"int")),Object(c.b)("li",{parentName:"ul"},"page ",Object(c.b)("inlineCode",{parentName:"li"},"int"))),Object(c.b)("h4",{id:"code-1"},"Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"  @Autowired\n  private AccountsApiClient accountsApiClient;\n\n  public Accounts getAccounts(String accessToken, Integer limit, Integer page){\n    return this.accountsApiClient.getAccounts(accessToken, limit, page);\n  }\n")),Object(c.b)("h2",{id:"objects"},"Objects"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"account_group"},"Account_Group"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"long")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique identifier for the object.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Group Name.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"parentId"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"long")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ID of AccountGroup Parent.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accountNatureId"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"long")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ID of Account Nature.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"parentName"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of AccountGroup Parent.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDeleted"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"boolean")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Has the value ",Object(c.b)("inlineCode",{parentName:"td"},"true")," if the accountGroup is deleted  or ",Object(c.b)("inlineCode",{parentName:"td"},"false")," if the accountGroup still exist.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accountMaster"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"long")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Identifier for accountMaster.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"code"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Code")))),Object(c.b)("h3",{id:"balance"},"Balance"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cdType"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"enum")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Credit / Debit Type. Possible values for ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#type"}),"type"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"openingBalance"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Opening Balance Amount.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accountCode"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique accountCode assigned to the object.")))),Object(c.b)("h3",{id:"bank_account"},"Bank_Account"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bankNumber"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique identifier for the object.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bankName"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Bank Account Name.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"connectStatus"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"boolean")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Has the value ",Object(c.b)("inlineCode",{parentName:"td"},"true")," if the status is ",Object(c.b)("em",{parentName:"td"},"active"),"  or ",Object(c.b)("inlineCode",{parentName:"td"},"false")," if the status is ",Object(c.b)("em",{parentName:"td"},"deactive"),".")))),Object(c.b)("h3",{id:"account"},"Account"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"long")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique identifier for the object.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accountCode"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique accountCode assigned to the object.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Name.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Description.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accountGroupId"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"long")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Group ID")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accountGroupName"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of Account Group.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"taxCode"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Tax code.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"currency"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Currency.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"status"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status of the account. Possible values for ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#status"}),"account status"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"controlAccount"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"boolean")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Has the value ",Object(c.b)("inlineCode",{parentName:"td"},"true")," if the control account flag is false or ",Object(c.b)("inlineCode",{parentName:"td"},"false")," if the control account flag is true.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"openingBalanceCdType"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"enum")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Credit / Debit Type. Possible values for ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#type"}),"type"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"customField"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"jsonobject")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Key-value pair for custom field name and its value.")))),Object(c.b)("h2",{id:"enums"},"Enums"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"account_name"},"ACCOUNT_NAME"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Savings account")),Object(c.b)("h3",{id:"status"},"STATUS"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"ACTIVE"),Object(c.b)("li",{parentName:"ul"},"INACTIVE")),Object(c.b)("h3",{id:"opening_balance_type"},"OPENING_BALANCE_TYPE"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"CREDIT"),Object(c.b)("li",{parentName:"ul"},"DEBIT")),Object(c.b)("h3",{id:"account_nature"},"ACCOUNT_NATURE"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Assets")),Object(c.b)("h3",{id:"type"},"TYPE"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"CREDIT"),Object(c.b)("li",{parentName:"ul"},"DEBIT")))}j.isMDXComponent=!0},150:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return p}));var n=a(0),b=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var O=b.a.createContext({}),j=function(e){var t=b.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=j(e.components);return b.a.createElement(O.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),o=j(a),d=n,p=o["".concat(r,".").concat(d)]||o[d]||u[d]||c;return a?b.a.createElement(p,l(l({ref:t},O),{},{components:a})):b.a.createElement(p,l({ref:t},O))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,r=new Array(c);r[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var O=2;O<c;O++)r[O]=a[O];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);