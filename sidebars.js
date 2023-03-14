module.exports = {
  someSidebar: {
    Introduction: ['books/started'],
    Setup: ['books/setup'],
    Authentication: ['books/authenticate', 'books/oauthv2'],
    SDK: ['books/authentication', 'books/authenticationv2', 'books/account', 'books/contact', 'books/product', 'books/taxes', 'books/invoice', 'books/order', 'books/payment', 'books/warehouse', 'books/stock', 'books/fulfillment', 'books/shipment'],
    Resources: ['books/authenticationapi', 'books/accountapi', 'books/contactapi', 'books/productapi', 'books/taxesapi', 'books/orderapi', 'books/billapi', 'books/quotationapi', 'books/invoiceapi', 'books/makepaymentapi', 'books/expenseapi', 'books/receivepaymentapi', 'books/depositapi','books/noteapi','books/iamapi','books/inventoryapi', 'books/webhook']
  },

  crmSidebar: {
    Introduction:['sales/started'],
    Resources: ['sales/dealsapi','sales/activitiesapi','sales/contactsapi','sales/campaignapi']
  },

  crmplusSidebar: {
    Introduction:['crmplus/started'],
    Resources: ['crmplus/table-api','crmplus/column-api','crmplus/record-api']
  },

  peopleSidebar: {
    Introduction:['people/started'],
    Setup: ['people/setup'],
    Authentication: ['people/authenticate', 'people/oauthv2'],
    Resources: ['people/users','people/employee','people/compliance','people/attendance','people/expense', 'people/component','people/componentgroups',
                  'people/account', 'people/payschedule','people/payruns','people/bankaccount','people/customfields','people/performanceappraisal', 
                  'people/shift', 'people/team', 'people/template', 'people/tenant']
  },
  
  environmentSidebar: {
    Introduction:['environment/started'],
    Staging: ['environment/staging'],
    Production: ['environment/prod']
  }
};