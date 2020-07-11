(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{127:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return O}));var n=a(2),b=(a(0),a(150));const c={id:"account",title:"Account Service",sidebar_label:"Account"},r={id:"account",title:"Account Service",description:"Account describe the customers and vendors accounts, that are associated with the Tenant. You can retrieve all accounts or by its id by using API.",source:"@site/docs/account.md",permalink:"/Developer-Documentation/docs/account",sidebar_label:"Account",sidebar:"someSidebar",previous:{title:"Authentication Service",permalink:"/Developer-Documentation/docs/authentication"},next:{title:"Contact Service",permalink:"/Developer-Documentation/docs/contact"}},l=[{value:"Account Object",id:"account-object",children:[{value:"Attributes",id:"attributes",children:[]}]},{value:"API",id:"api",children:[{value:"Retrieve Account",id:"retrieve-account",children:[]},{value:"List All Accounts",id:"list-all-accounts",children:[]}]},{value:"Objects",id:"objects",children:[{value:"Account_Group",id:"account_group",children:[]},{value:"Balance",id:"balance",children:[]},{value:"Bank_Account",id:"bank_account",children:[]},{value:"Account",id:"account",children:[]}]},{value:"Enums",id:"enums",children:[{value:"ACCOUNT_NAME",id:"account_name",children:[]},{value:"STATUS",id:"status",children:[]},{value:"OPENING_BALANCE_TYPE",id:"opening_balance_type",children:[]},{value:"ACCOUNT_NATURE",id:"account_nature",children:[]},{value:"TYPE",id:"type",children:[]}]}],i={rightToc:l};function O({components:e,...t}){return Object(b.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Account")," describe the customers and vendors accounts, that are associated with the ",Object(b.b)("inlineCode",{parentName:"p"},"Tenant"),". You can retrieve all accounts or by its id by using API."),Object(b.b)("h2",{id:"account-object"},"Account Object"),Object(b.b)("h3",{id:"attributes"},"Attributes"),Object(b.b)("hr",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"long")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique identifier for the object.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accountCode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique accountCode assigned to the object.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account name. Possible values for ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#account_name"}),"name"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"code"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique code assigned to the object.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Description.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"taxCode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account tax code assigned to the object.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"currency"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Currency used.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accountGroup"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Group Name. Attributes for ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#account_group"}),"account group"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accountGroupId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Group Id.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"status"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status of the account. Possible values for ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#status"}),"account status"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"openingBalance"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Opening Balance Amount.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"balance"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Balance Amount. Attributes for ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#balance"}),"balance"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"totalBalance"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Total value of Opening Balance and Balance.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"totalCOABalance"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Total value of Opening Balance and Balance with Nature.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"openingBalanceCdType"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Opening Balance Type. Possible values for ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#opening_balance_type"}),"type"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accountNature"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Nature. Possible values for ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#account_nature"}),"account nature"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"customField"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"jsonobject")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Key-value pair for custom field name and its value.")))),Object(b.b)("h2",{id:"api"},"API"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"retrieve-account"},"Retrieve Account"),Object(b.b)("p",null,"Retrieves the details of an existing account. You need only supply the unique account id that was returned upon account creation."),Object(b.b)("h4",{id:"parameters"},"Parameters"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"accountId ",Object(b.b)("inlineCode",{parentName:"li"},"long")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#access-token"}),"accessToken")," ",Object(b.b)("inlineCode",{parentName:"li"},"string"))),Object(b.b)("h4",{id:"code"},"Code"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"  @Autowired\n  private AccountsApiClient accountsApiClient;\n\n  public AccountDto getAccountById(Long accountId, String accessToken){\n    return this.accountsApiClient.getById(accountId, accessToken);\n  }\n")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"list-all-accounts"},"List All Accounts"),Object(b.b)("p",null,"Returns list of accounts."),Object(b.b)("h4",{id:"parameters-1"},"Parameters"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#access-token"}),"accessToken")," ",Object(b.b)("inlineCode",{parentName:"li"},"string")),Object(b.b)("li",{parentName:"ul"},"limit ",Object(b.b)("inlineCode",{parentName:"li"},"int")),Object(b.b)("li",{parentName:"ul"},"page ",Object(b.b)("inlineCode",{parentName:"li"},"int"))),Object(b.b)("h4",{id:"code-1"},"Code"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"  @Autowired\n  private AccountsApiClient accountsApiClient;\n\n  public Accounts getAccounts(String accessToken, Integer limit, Integer page){\n    return this.accountsApiClient.getAccounts(accessToken, limit, page);\n  }\n")),Object(b.b)("h2",{id:"objects"},"Objects"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"account_group"},"Account_Group"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"long")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique identifier for the object.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Group Name.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"parentId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"long")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ID of AccountGroup Parent.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accountNatureId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"long")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ID of Account Nature.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"parentName"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of AccountGroup Parent.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDeleted"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Has the value ",Object(b.b)("inlineCode",{parentName:"td"},"true")," if the accountGroup is deleted  or ",Object(b.b)("inlineCode",{parentName:"td"},"false")," if the accountGroup still exist.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accountMaster"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"long")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Identifier for accountMaster.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"code"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Code")))),Object(b.b)("h3",{id:"balance"},"Balance"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cdType"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"enum")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Credit / Debit Type. Possible values for ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#type"}),"type"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"openingBalance"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"BigDecimal")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Opening Balance Amount.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accountCode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique accountCode assigned to the object.")))),Object(b.b)("h3",{id:"bank_account"},"Bank_Account"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bankNumber"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique identifier for the object.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bankName"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Bank Account Name.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"connectStatus"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Has the value ",Object(b.b)("inlineCode",{parentName:"td"},"true")," if the status is ",Object(b.b)("em",{parentName:"td"},"active"),"  or ",Object(b.b)("inlineCode",{parentName:"td"},"false")," if the status is ",Object(b.b)("em",{parentName:"td"},"deactive"),".")))),Object(b.b)("h3",{id:"account"},"Account"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"long")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique identifier for the object.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accountCode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique accountCode assigned to the object.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Name.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Description.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accountGroupId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"long")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Group ID")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accountGroupName"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of Account Group.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"taxCode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Tax code.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"currency"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Account Currency.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"status"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status of the account. Possible values for ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#status"}),"account status"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"controlAccount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Has the value ",Object(b.b)("inlineCode",{parentName:"td"},"true")," if the control account flag is false or ",Object(b.b)("inlineCode",{parentName:"td"},"false")," if the control account flag is true.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"openingBalanceCdType"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"enum")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Credit / Debit Type. Possible values for ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#type"}),"type"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"customField"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"jsonobject")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Key-value pair for custom field name and its value.")))),Object(b.b)("h2",{id:"enums"},"Enums"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"account_name"},"ACCOUNT_NAME"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Savings account")),Object(b.b)("h3",{id:"status"},"STATUS"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"ACTIVE"),Object(b.b)("li",{parentName:"ul"},"INACTIVE")),Object(b.b)("h3",{id:"opening_balance_type"},"OPENING_BALANCE_TYPE"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"CREDIT"),Object(b.b)("li",{parentName:"ul"},"DEBIT")),Object(b.b)("h3",{id:"account_nature"},"ACCOUNT_NATURE"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Assets")),Object(b.b)("h3",{id:"type"},"TYPE"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"CREDIT"),Object(b.b)("li",{parentName:"ul"},"DEBIT")))}O.isMDXComponent=!0},150:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var n=a(0),b=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var O=b.a.createContext({}),j=function(e){var t=b.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=j(e.components);return b.a.createElement(O.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),u=j(a),d=n,p=u["".concat(r,".").concat(d)]||u[d]||o[d]||c;return a?b.a.createElement(p,l(l({ref:t},O),{},{components:a})):b.a.createElement(p,l({ref:t},O))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,r=new Array(c);r[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var O=2;O<c;O++)r[O]=a[O];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);