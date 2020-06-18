---
id: invoiceapi
title: Invoice APIs
sidebar_label: Invoice
---
An Invoice represents a sales form where the customer pays for a product or service later. In ERP, it will help you to keep track of all your invoices and establish an efficient cash-flow system for your business.

Once, you receive payment from your customer, you will update the information such as the payment type – bank or cash – into the invoice overview. This will helps you to sort out which payment types to focus on and organizes your invoices accordingly.

`InvoiceDto` helps you to create new invoice, retreive a particular invoice, update a partivular invoice, retrieve a list of all invoices.

More about [Invoice API documentation](https://deskera.docs.apiary.io/#reference/invoice-apis)

## API
---
### Search Invoice

Get invoices by filter criteria. [More about search invoice](https://deskera.docs.apiary.io/#reference/invoice-apis/v1invoicessales/get-invoices-by-filter-criteria)

##### Description:

- Allows you to retrieve a list of all invoices.
- Allows you to retrieve specific invoices based on it's filter criteria.


#### GET
#### /v1/invoices/sales
##### Request URL

```java
https://bifrost.deskera.com/v1/invoices/sales?limit=10&page=0&sort=createdDate&sortDir=DESC
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/invoices/sales?limit=10&page=0&sort=createdDate&sortDir=DESC" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Sample Response
```java
  "content": [
      {
  "attachmentIds": [
    0
  ],
  "attachments": [
    "string"
  ],
  "backOrder": true,
  "billTo": {
    "address1": "218, Robinson Road",
    "address2": "Downtown",
    "city": "C001",
    "country": "C001",
    "postalCode": 123456,
    "preferred": true,
    "state": "CS001"
  },
  "contact": {
    "address": "Raffles Place 1",
    "name": "ABC Pte Ltd",
    "peppolId": "u000:1109:uen"
  },
  "contactCode": "C0001",
  "contactDto": {
    "attentionTo": "Peter Parker",
    "billingAddress": [
      {
        "address1": "218, Robinson Road",
        "address2": "Downtown",
        "city": "C001",
        "country": "C001",
        "postalCode": 123456,
        "preferred": true,
        "state": "CS001"
      }
    ],
    "businessUnit": "CAA01 - Cvl Avtn Authrty of Singapore",
    "currencyCode": "SGD",
    "customField": {
      "field1": "value1",
      "field2": "value2"
    },
    "documentSequenceCode": "C-0000001",
    "emailId": "myinfo@domain.com",
    "invoices": {
      "additionalProp1": [
        {
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "id": 43,
          "invoiceDate": "2018-10-01",
          "invoiceDueDate": "2018-10-01",
          "memo": "test",
          "purchaseOrderRefNo": "CPO001",
          "supplierInvoiceNo": "CSI001",
          "taxAmount": 1,
          "totalAmount": 46,
          "totalAmountInBaseCurrency": 46,
          "type": "sale_invoice"
        }
      ],
      "additionalProp2": [
        {
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "id": 43,
          "invoiceDate": "2018-10-01",
          "invoiceDueDate": "2018-10-01",
          "memo": "test",
          "purchaseOrderRefNo": "CPO001",
          "supplierInvoiceNo": "CSI001",
          "taxAmount": 1,
          "totalAmount": 46,
          "totalAmountInBaseCurrency": 46,
          "type": "sale_invoice"
        }
      ],
      "additionalProp3": [
        {
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "id": 43,
          "invoiceDate": "2018-10-01",
          "invoiceDueDate": "2018-10-01",
          "memo": "test",
          "purchaseOrderRefNo": "CPO001",
          "supplierInvoiceNo": "CSI001",
          "taxAmount": 1,
          "totalAmount": 46,
          "totalAmountInBaseCurrency": 46,
          "type": "sale_invoice"
        }
      ]
    },
    "name": "Sam",
    "payableAccountCode": "AC002",
    "paymentTermCode": "Net 0",
    "peppolId": "u000:11::11293",
    "receivableAccountCode": "AC001",
    "sequenceFormat": 1,
    "shippingAddress": [
      {
        "address1": "218, Robinson Road",
        "address2": "Downtown",
        "city": "C001",
        "country": "C001",
        "postalCode": 123456,
        "preferred": true,
        "state": "CS001"
      }
    ],
    "singaporeGovt": true,
    "taxExempted": true,
    "taxExemptionNo": "234s-few3-2422",
    "taxExemptionReason": "Resale, Federal Agency",
    "taxNumber": 123456,
    "uen": "DHJEUK"
  },
  "currency": "C001",
  "customField": [
    {
      "label": "Label",
      "module": "Invoice",
      "value": "Extra Information"
    }
  ],
  "documentSequenceCode": "0000001",
  "draft": false,
  "dropShip": true,
  "dueAmount": 12.322,
  "exchangeRate": 0.456345,
  "fulfillmentStatus": "UNFULFILLED",
  "fulfillmentType": "PICK_PACK_SHIP",
  "id": 1,
  "journalEntryCode": "JE0001",
  "knockoffInfo": [
    {
      "amount": 0,
      "currency": "SGD",
      "documentCode": "DOC001",
      "documentDate": "2020-06-16T06:40:34.502Z",
      "documentOrder": 0,
      "documentType": "QUOTATION",
      "exchangeRate": 0
    }
  ],
  "linkedDocuments": [
    {
      "documentCode": "QO-0000001",
      "documentSequenceCode": "0000001",
      "documentType": "QUOTATION"
    }
  ],
  "memo": "Memo details",
  "openingDocumentNumber": "DC-0001",
  "openingInvoice": false,
  "paymentStatus": "PENDING",
  "purchaseOrderRefNo": "CPO001",
  "recurring": true,
  "recurringActivated": false,
  "salesInvoiceCode": "SI001",
  "salesInvoiceDate": "25-10-2019",
  "salesInvoiceDueDate": "25-10-2019",
  "salesInvoiceItems": [
    {
      "availableQuantity": 3,
      "customField": [
        {
        "label": "Label",
        "module": "Invoice",
        "value": "Extra Information"
        }
      ],
      "discount": 2,
      "discountInPercent": true,
      "documentSequenceCode": "P-0000001",
      "id": 2,
      "invoiceLineNumber": "ABSCDDSD1212",
      "product": {
        "active": true,
        "barcode": 2365234,
        "bomAddCostConfiguration": [
          {
            "label": "Labour charges",
            "price": 10.5
          }
        ],
        "bomProductsConfiguration": [
          {
            "itemId": 1234,
            "itemName": "Apple",
            "quantity": 10.5
          }
        ],
        "categoryCode": "AB0001",
        "categoryDesc": "Medical Equipment",
        "customField": {
          "field1": "value1",
          "field2": "value2"
        },
        "deleted": true,
        "description": "Description",
        "documentSequenceCode": "P-0000001",
        "id": 1234,
        "images": [
          "string"
        ],
        "inventory": {
          "availableQuantity": 100,
          "costOfGoodsSoldAccountCode": "A-10231",
          "inventoryAccountCode": "A-10232",
          "inventoryAccountName": "Inventory Account",
          "openingQuantity": 10,
          "openingValuation": 100.4,
          "stockAdjustmentAccountCode": "A-10234",
          "warehouseCode": "WH-00001"
        },
        "manufacturingCostAccountCode": "AC-0000012",
        "name": "Apple",
        "productId": "P000011",
        "purchaseAccountCode": "A-0012",
        "purchasePrice": 123.33,
        "purchasePriceTaxInclusive": true,
        "purchaseReturnAccountCode": "A-0014",
        "purchaseTaxCode": "T-001",
        "reorderEnabled": true,
        "reorderLevel": 100,
        "salesAccountCode": "A-0013",
        "salesPrice": 120,
        "salesPriceTaxInclusive": false,
        "salesReturnAccountCode": "A-0015",
        "salesTaxCode": "T-002",
        "sequenceFormat": 1,
        "stockUom": 2,
        "taxable": true,
        "type": "TRACKED"
      },
      "productCode": "P00001",
      "productDescription": "Apple watch",
      "productOrder": 1,
      "productQuantity": 2,
      "salesInvoiceItemCode": "SII-000001",
      "tax": {
        "accountCode": "AC-001",
        "code": "TC-001",
        "deleted": false,
        "description": "sales Tax for SG",
        "name": "SGST",
        "percent": 7,
        "status": "active",
        "taxCode": "TC-001",
        "type": "SALES"
      },
      "taxAmount": 0.5,
      "taxCode": "GST7",
      "totalAmount": 2.3,
      "type": "TRACKED",
      "unitPrice": 0.7
    }
  ],
  "salesInvoiceRecurring": {
    "id": 2,
    "invoiceRecurringCount": 1,
    "recurrenceEndDate": "25-10-2019",
    "recurrenceFrequency": "WEEK",
    "recurrenceType": 1
  },
  "shipByDate": "25-10-2019",
  "shipFrom": {
    "address1": "218, Robinson Road",
    "address2": "Downtown",
    "city": "C001",
    "country": "C001",
    "postalCode": 123456,
    "preferred": true,
    "state": "CS001"
  },
  "shipTo": {
    "address1": "218, Robinson Road",
    "address2": "Downtown",
    "city": "C001",
    "country": "C001",
    "postalCode": 123456,
    "preferred": true,
    "state": "CS001"
  },
  "status": "OPEN",
  "taxAmount": 2.322,
  "tdsInfo": [
    {
      "documentCode": "DOC001",
      "tdsAccountCode": "string",
      "tdsAmount": 0
    }
  ],
  "totalAmount": 12.322,
  "totalAmountInBaseCurrency": 12.322,
  "unitPriceGstInclusive": false,
  "warehouseCode": "WH-000001",
  "withheldAmount": 12.322
}
  ],
  "pageable": {
    "sort": {
      "sorted": true,
      "unsorted": false,
      "empty": false
    },
    "pageSize": 10,
    "pageNumber": 0,
    "offset": 0,
    "paged": true,
    "unpaged": false
  },
  "totalElements": 0,
  "last": true,
  "totalPages": 0,
  "first": true,
  "sort": {
    "sorted": true,
    "unsorted": false,
    "empty": false
  },
  "numberOfElements": 0,
  "size": 10,
  "number": 0,
  "empty": true
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales invoices have been fetched successfully. | [SalesInvoiceResponse](#salesinvoiceresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Create Invoice
Create a new invoice. [More about create invoice](https://deskera.docs.apiary.io/#reference/invoice-apis/v1invoicessales/create-a-new-invoice)

##### Description:

- Allows you to create a new invoice.

#### POST
#### /v1/invoices/sales
##### Request URL

```java
https://bifrost.deskera.com/v1/invoices/sales
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/invoices/sales" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"contactCode\": \"C-0000001\", \"currency\": \"SGD\", \"currencyCode\": \"SGD\", \"memo\": \"Test Invoice Memo\", \"status\": \"OPEN\", \"unitPriceGstInclusive\": false, \"sequenceFormat\": \"5eeb4be995ec493bcc40040f\", \"documentType\": \"SALES_INVOICE\", \"exchangeRate\": 1, \"previousExchangeRate\": 1, \"shipFrom\": { \"address1\": \"204 E Chestnut St\", \"city\": \"Independence\", \"state\": \"KS\", \"country\": null, \"postalCode\": \"67301\", \"preferred\": true }, \"shipTo\": { \"address1\": \"204 E Chestnut St\", \"city\": \"Louisville\", \"state\": \"KY\", \"country\": \"US\", \"postalCode\": \"40202\", \"preferred\": true }, \"billTo\": { \"address1\": \"204 E Chestnut St\", \"city\": \"Louisville\", \"state\": \"KY\", \"country\": \"US\", \"postalCode\": \"40202\", \"preferred\": true }, \"contact\": { \"id\": 120226, \"code\": \"C-0000001\", \"documentSequenceCode\": \"C-0000001\", \"sequenceFormat\": \"5eeb3ede95ec493bcc4003ff\", \"name\": \"James Smith\", \"receivableAccountCode\": \"AC-0000003\", \"payableAccountCode\": \"AC-0000011\", \"currencyCode\": \"SGD\", \"paymentTermCode\": \"4\", \"billingAddress\": [ { \"city\": \"Louisville\", \"state\": \"KY\", \"country\": \"US\", \"address1\": \"204 E Chestnut St\", \"address2\": null, \"preferred\": true, \"postalCode\": \"40202\" } ], \"shippingAddress\": [ { \"city\": \"Louisville\", \"state\": \"KY\", \"country\": \"US\", \"address1\": \"204 E Chestnut St\", \"address2\": null, \"preferred\": true, \"postalCode\": \"40202\" } ], \"status\": \"ACTIVE\", \"customer\": true, \"vendor\": true, \"deleted\": false, \"tenantId\": 38272, \"theyOweYou\": null, \"youOweThem\": null, \"totalNetAmount\": null, \"totalBillAmount\": null, \"invoices\": null, \"customField\": null, \"emailId\": \"james.smith@getnada.com\", \"errorMessage\": null, \"avalaraCustomerCode\": \"b123e677-d80a-484c-a700-b63e11e8f7dc\", \"uen\": \"79787978\", \"taxNumber\": \"123456780\", \"taxExempted\": null, \"taxExemptionNo\": null, \"taxExemptionReason\": null, \"peppolId\": null, \"singaporeGovt\": null, \"businessUnit\": \"\", \"attentionTo\": null, \"address\": \"204 E Chestnut St,Louisville,KY,US,40202\" }, \"documentDate\": \"18-06-2020\", \"validTillDate\": \"18-07-2020\", \"fulfillmentDate\": \"18-06-2020\", \"totalAmount\": 0, \"totalAmountInBaseCurrency\": 0, \"dueAmount\": 0, \"attachments\": [ ], \"attachmentIds\": null, \"supportedFeatures\": [ ], \"items\": [ { \"igstAmount\": 0, \"cgstAmount\": 0, \"sgstAmount\": 0, \"cessAmount\": 0, \"gstType\": null, \"hsnOrSacCode\": null, \"taxPreference\": null, \"taxExemptionReason\": null, \"igstRate\": null, \"cgstRate\": null, \"sgstRate\": null, \"cessRule\": null, \"exciseApplicable\": false, \"exciseType\": null, \"exciseRate\": null, \"exciseAmount\": 0, \"id\": null, \"discount\": null, \"discountInPercent\": false, \"productCode\": \"P-0000001\", \"product\": { \"name\": \"Demo Product\", \"type\": \"TRACKED\", \"barcode\": \"123123132\", \"description\": \"Demo Product Description\", \"purchasePrice\": 100, \"salesPrice\": 120, \"purchaseAccountCode\": \"AC-0000032\", \"salesAccountCode\": \"AC-0000023\", \"purchaseReturnAccountCode\": null, \"salesReturnAccountCode\": null, \"manufacturingCostAccountCode\": \"AC-0000063\", \"purchaseTaxCode\": \"TX-0000011\", \"salesTaxCode\": \"TX-0000001\", \"purchasePriceTaxInclusive\": true, \"salesPriceTaxInclusive\": true, \"stockUom\": 2, \"images\": [ null ], \"inventory\": { \"openingQuantity\": 10, \"openingValuation\": 1000, \"availableQuantity\": 11, \"costOfGoodsSoldAccountCode\": \"AC-0000030\", \"inventoryAccountCode\": \"AC-0000004\", \"stockAdjustmentAccountCode\": \"AC-0000045\", \"inventoryAccountName\": \"Inventory\", \"warehouseCode\": \"WH-0000001\" }, \"categoryCode\": null, \"categoryDesc\": null, \"taxable\": true, \"customField\": null, \"reorderEnabled\": false, \"reorderLevel\": null, \"documentSequenceCode\": \"P-0000001\", \"sequenceFormat\": \"5eeb3cb495ec493bcc4003e5\", \"errorMessage\": null, \"id\": 58538, \"productId\": \"P-0000001\", \"active\": true, \"deleted\": false, \"bomProductsConfiguration\": [ ], \"bomAddCostConfiguration\": [ ], \"availableQuantity\": 11 }, \"productDescription\": \"Demo Product Description\", \"productName\": \"Demo Product\", \"productQuantity\": 1, \"availableQuantity\": 11, \"taxAmountBuffer\": 0, \"taxCode\": \"TX-0000001\", \"taxName\": \"SR (7%)\", \"tax\": { \"id\": 198094, \"name\": \"SR (7%)\", \"taxCode\": \"SR (7%)\", \"accountCode\": \"AC-0000021\", \"accountName\": \"GST\", \"type\": \"SALES\", \"description\": \"Local supply of goods and services.\", \"percent\": 7, \"code\": \"TX-0000001\", \"status\": \"active\", \"deleted\": false, \"tenantId\": 38272, \"category\": \"SYSTEM\" }, \"unitPrice\": 120, \"currency\": null, \"totalAmount\": 128.4, \"taxSystem\": \"SG\", \"type\": \"TRACKED\", \"unitPriceGstInclusive\": false } ], \"openingInvoice\": false, \"fulfillmentStatus\": \"UNFULFILLED\", \"backOrder\": false, \"salesInvoiceDueDate\": \"18-07-2020\", \"salesInvoiceDate\": \"18-06-2020\", \"shipByDate\": \"18-06-2020\", \"fulfillmentComplete\": false, \"salesInvoiceItems\": [ { \"igstAmount\": 0, \"cgstAmount\": 0, \"sgstAmount\": 0, \"cessAmount\": 0, \"gstType\": null, \"hsnOrSacCode\": null, \"taxPreference\": null, \"taxExemptionReason\": null, \"igstRate\": null, \"cgstRate\": null, \"sgstRate\": null, \"cessRule\": null, \"exciseApplicable\": false, \"exciseType\": null, \"exciseRate\": null, \"exciseAmount\": 0, \"id\": null, \"discount\": null, \"discountInPercent\": false, \"productCode\": \"P-0000001\", \"product\": { \"name\": \"Demo Product\", \"type\": \"TRACKED\", \"barcode\": \"123123132\", \"description\": \"Demo Product Description\", \"purchasePrice\": 100, \"salesPrice\": 120, \"purchaseAccountCode\": \"AC-0000032\", \"salesAccountCode\": \"AC-0000023\", \"purchaseReturnAccountCode\": null, \"salesReturnAccountCode\": null, \"manufacturingCostAccountCode\": \"AC-0000063\", \"purchaseTaxCode\": \"TX-0000011\", \"salesTaxCode\": \"TX-0000001\", \"purchasePriceTaxInclusive\": true, \"salesPriceTaxInclusive\": true, \"stockUom\": 2, \"images\": [ null ], \"inventory\": { \"openingQuantity\": 10, \"openingValuation\": 1000, \"availableQuantity\": 11, \"costOfGoodsSoldAccountCode\": \"AC-0000030\", \"inventoryAccountCode\": \"AC-0000004\", \"stockAdjustmentAccountCode\": \"AC-0000045\", \"inventoryAccountName\": \"Inventory\", \"warehouseCode\": \"WH-0000001\" }, \"categoryCode\": null, \"categoryDesc\": null, \"taxable\": true, \"customField\": null, \"reorderEnabled\": false, \"reorderLevel\": null, \"documentSequenceCode\": \"P-0000001\", \"sequenceFormat\": \"5eeb3cb495ec493bcc4003e5\", \"errorMessage\": null, \"id\": 58538, \"productId\": \"P-0000001\", \"active\": true, \"deleted\": false, \"bomProductsConfiguration\": [ ], \"bomAddCostConfiguration\": [ ], \"availableQuantity\": 11 }, \"productDescription\": \"Demo Product Description\", \"productName\": \"Demo Product\", \"productQuantity\": 1, \"availableQuantity\": 11, \"taxAmountBuffer\": 0, \"taxCode\": \"TX-0000001\", \"taxName\": \"SR (7%)\", \"tax\": { \"id\": 198094, \"name\": \"SR (7%)\", \"taxCode\": \"SR (7%)\", \"accountCode\": \"AC-0000021\", \"accountName\": \"GST\", \"type\": \"SALES\", \"description\": \"Local supply of goods and services.\", \"percent\": 7, \"code\": \"TX-0000001\", \"status\": \"active\", \"deleted\": false, \"tenantId\": 38272, \"category\": \"SYSTEM\" }, \"unitPrice\": 120, \"currency\": null, \"totalAmount\": 128.4, \"taxSystem\": \"SG\", \"type\": \"TRACKED\", \"unitPriceGstInclusive\": false, \"taxAmount\": 8.4 } ]}"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| salesInvoiceRequest | body | salesInvoiceRequest | Yes | [SalesInvoiceRequest](#salesinvoicerequest) |

##### Sample Request
```java
{
  "contactCode": "C-0000001",
  "currency": "SGD",
  "currencyCode": "SGD",
  "memo": "Test Invoice Memo",
  "status": "OPEN",
  "unitPriceGstInclusive": false,
  "sequenceFormat": "5eeb4be995ec493bcc40040f",
  "documentType": "SALES_INVOICE",
  "exchangeRate": 1,
  "previousExchangeRate": 1,
  "shipFrom": {
    "address1": "204 E Chestnut St",
    "city": "Independence",
    "state": "KS",
    "country": null,
    "postalCode": "67301",
    "preferred": true
  },
  "shipTo": {
    "address1": "204 E Chestnut St",
    "city": "Louisville",
    "state": "KY",
    "country": "US",
    "postalCode": "40202",
    "preferred": true
  },
  "billTo": {
    "address1": "204 E Chestnut St",
    "city": "Louisville",
    "state": "KY",
    "country": "US",
    "postalCode": "40202",
    "preferred": true
  },
  "contact": {
    "id": 120226,
    "code": "C-0000001",
    "documentSequenceCode": "C-0000001",
    "sequenceFormat": "5eeb3ede95ec493bcc4003ff",
    "name": "James Smith",
    "receivableAccountCode": "AC-0000003",
    "payableAccountCode": "AC-0000011",
    "currencyCode": "SGD",
    "paymentTermCode": "4",
    "billingAddress": [
      {
        "city": "Louisville",
        "state": "KY",
        "country": "US",
        "address1": "204 E Chestnut St",
        "address2": null,
        "preferred": true,
        "postalCode": "40202"
      }
    ],
    "shippingAddress": [
      {
        "city": "Louisville",
        "state": "KY",
        "country": "US",
        "address1": "204 E Chestnut St",
        "address2": null,
        "preferred": true,
        "postalCode": "40202"
      }
    ],
    "status": "ACTIVE",
    "customer": true,
    "vendor": true,
    "deleted": false,
    "tenantId": 1,
    "theyOweYou": null,
    "youOweThem": null,
    "totalNetAmount": null,
    "totalBillAmount": null,
    "invoices": null,
    "customField": null,
    "emailId": "james.smith@getnada.com",
    "errorMessage": null,
    "avalaraCustomerCode": "b123e677-d80a-484c-a700-b63e11e8f7dc",
    "uen": "79787978",
    "taxNumber": "123456780",
    "taxExempted": null,
    "taxExemptionNo": null,
    "taxExemptionReason": null,
    "peppolId": null,
    "singaporeGovt": null,
    "businessUnit": "",
    "attentionTo": null,
    "address": "204 E Chestnut St,Louisville,KY,US,40202"
  },
  "documentDate": "18-06-2020",
  "validTillDate": "18-07-2020",
  "fulfillmentDate": "18-06-2020",
  "totalAmount": 0,
  "totalAmountInBaseCurrency": 0,
  "dueAmount": 0,
  "attachments": [

  ],
  "attachmentIds": null,
  "supportedFeatures": [

  ],
  "items": [
    {
      "igstAmount": 0,
      "cgstAmount": 0,
      "sgstAmount": 0,
      "cessAmount": 0,
      "gstType": null,
      "hsnOrSacCode": null,
      "taxPreference": null,
      "taxExemptionReason": null,
      "igstRate": null,
      "cgstRate": null,
      "sgstRate": null,
      "cessRule": null,
      "exciseApplicable": false,
      "exciseType": null,
      "exciseRate": null,
      "exciseAmount": 0,
      "id": null,
      "discount": null,
      "discountInPercent": false,
      "productCode": "P-0000001",
      "product": {
        "name": "Demo Product",
        "type": "TRACKED",
        "barcode": "123123132",
        "description": "Demo Product Description",
        "purchasePrice": 100,
        "salesPrice": 120,
        "purchaseAccountCode": "AC-0000032",
        "salesAccountCode": "AC-0000023",
        "purchaseReturnAccountCode": null,
        "salesReturnAccountCode": null,
        "manufacturingCostAccountCode": "AC-0000063",
        "purchaseTaxCode": "TX-0000011",
        "salesTaxCode": "TX-0000001",
        "purchasePriceTaxInclusive": true,
        "salesPriceTaxInclusive": true,
        "stockUom": 2,
        "images": [
          null
        ],
        "inventory": {
          "openingQuantity": 10,
          "openingValuation": 1000,
          "availableQuantity": 11,
          "costOfGoodsSoldAccountCode": "AC-0000030",
          "inventoryAccountCode": "AC-0000004",
          "stockAdjustmentAccountCode": "AC-0000045",
          "inventoryAccountName": "Inventory",
          "warehouseCode": "WH-0000001"
        },
        "categoryCode": null,
        "categoryDesc": null,
        "taxable": true,
        "customField": null,
        "reorderEnabled": false,
        "reorderLevel": null,
        "documentSequenceCode": "P-0000001",
        "sequenceFormat": "5eeb3cb495ec493bcc4003e5",
        "errorMessage": null,
        "id": 58538,
        "productId": "P-0000001",
        "active": true,
        "deleted": false,
        "bomProductsConfiguration": [

        ],
        "bomAddCostConfiguration": [

        ],
        "availableQuantity": 11
      },
      "productDescription": "Demo Product Description",
      "productName": "Demo Product",
      "productQuantity": 1,
      "availableQuantity": 11,
      "taxAmountBuffer": 0,
      "taxCode": "TX-0000001",
      "taxName": "SR (7%)",
      "tax": {
        "id": 198094,
        "name": "SR (7%)",
        "taxCode": "SR (7%)",
        "accountCode": "AC-0000021",
        "accountName": "GST",
        "type": "SALES",
        "description": "Local supply of goods and services.",
        "percent": 7,
        "code": "TX-0000001",
        "status": "active",
        "deleted": false,
        "tenantId": 1,
        "category": "SYSTEM"
      },
      "unitPrice": 120,
      "currency": null,
      "totalAmount": 128.4,
      "taxSystem": "SG",
      "type": "TRACKED",
      "unitPriceGstInclusive": false
    }
  ],
  "openingInvoice": false,
  "fulfillmentStatus": "UNFULFILLED",
  "backOrder": false,
  "salesInvoiceDueDate": "18-07-2020",
  "salesInvoiceDate": "18-06-2020",
  "shipByDate": "18-06-2020",
  "fulfillmentComplete": false,
  "salesInvoiceItems": [
    {
      "igstAmount": 0,
      "cgstAmount": 0,
      "sgstAmount": 0,
      "cessAmount": 0,
      "gstType": null,
      "hsnOrSacCode": null,
      "taxPreference": null,
      "taxExemptionReason": null,
      "igstRate": null,
      "cgstRate": null,
      "sgstRate": null,
      "cessRule": null,
      "exciseApplicable": false,
      "exciseType": null,
      "exciseRate": null,
      "exciseAmount": 0,
      "id": null,
      "discount": null,
      "discountInPercent": false,
      "productCode": "P-0000001",
      "product": {
        "name": "Demo Product",
        "type": "TRACKED",
        "barcode": "123123132",
        "description": "Demo Product Description",
        "purchasePrice": 100,
        "salesPrice": 120,
        "purchaseAccountCode": "AC-0000032",
        "salesAccountCode": "AC-0000023",
        "purchaseReturnAccountCode": null,
        "salesReturnAccountCode": null,
        "manufacturingCostAccountCode": "AC-0000063",
        "purchaseTaxCode": "TX-0000011",
        "salesTaxCode": "TX-0000001",
        "purchasePriceTaxInclusive": true,
        "salesPriceTaxInclusive": true,
        "stockUom": 2,
        "images": [
          null
        ],
        "inventory": {
          "openingQuantity": 10,
          "openingValuation": 1000,
          "availableQuantity": 11,
          "costOfGoodsSoldAccountCode": "AC-0000030",
          "inventoryAccountCode": "AC-0000004",
          "stockAdjustmentAccountCode": "AC-0000045",
          "inventoryAccountName": "Inventory",
          "warehouseCode": "WH-0000001"
        },
        "categoryCode": null,
        "categoryDesc": null,
        "taxable": true,
        "customField": null,
        "reorderEnabled": false,
        "reorderLevel": null,
        "documentSequenceCode": "P-0000001",
        "sequenceFormat": "5eeb3cb495ec493bcc4003e5",
        "errorMessage": null,
        "id": 58538,
        "productId": "P-0000001",
        "active": true,
        "deleted": false,
        "bomProductsConfiguration": [

        ],
        "bomAddCostConfiguration": [

        ],
        "availableQuantity": 11
      },
      "productDescription": "Demo Product Description",
      "productName": "Demo Product",
      "productQuantity": 1,
      "availableQuantity": 11,
      "taxAmountBuffer": 0,
      "taxCode": "TX-0000001",
      "taxName": "SR (7%)",
      "tax": {
        "id": 198094,
        "name": "SR (7%)",
        "taxCode": "SR (7%)",
        "accountCode": "AC-0000021",
        "accountName": "GST",
        "type": "SALES",
        "description": "Local supply of goods and services.",
        "percent": 7,
        "code": "TX-0000001",
        "status": "active",
        "deleted": false,
        "tenantId": 1,
        "category": "SYSTEM"
      },
      "unitPrice": 120,
      "currency": null,
      "totalAmount": 128.4,
      "taxSystem": "SG",
      "type": "TRACKED",
      "unitPriceGstInclusive": false,
      "taxAmount": 8.4
    }
  ]
}
```
##### Sample Response
```java
{
  "openingInvoice": false,
  "totalAmount": 128.40,
  "totalAmountInBaseCurrency": 128.40,
  "payableAccountCode": null,
  "taxAmount": 8.40,
  "openingDocumentNumber": null,
  "warehouseCode": null,
  "dropShip": null,
  "backOrder": false,
  "status": "OPEN",
  "customField": null,
  "attachmentIds": null,
  "contactCode": "C-0000001",
  "linkedDocuments": null,
  "purchaseOrderRefNo": null,
  "journalEntryCode": "JE-0000004",
  "currency": "SGD",
  "exchangeRate": 1,
  "salesInvoiceDate": "18-06-2020",
  "salesInvoiceDueDate": "18-07-2020",
  "memo": "Test Invoice Memo",
  "attachments": [

  ],
  "unitPriceGstInclusive": false,
  "dueAmount": 128.40,
  "withheldAmount": null,
  "recurring": false,
  "recurringActivated": false,
  "salesInvoiceItems": [
    {
      "id": 19843,
      "productCode": "P-0000001",
      "documentSequenceCode": "P-0000001",
      "productDescription": "Demo Product Description",
      "productQuantity": 1,
      "unitPrice": 120,
      "discount": null,
      "discountInPercent": false,
      "taxCode": "TX-0000001",
      "taxAmount": 8.4000000000,
      "totalAmount": 128.4000000000,
      "productOrder": null,
      "salesInvoiceItemCode": "SII-0000001",
      "type": null,
      "availableQuantity": null,
      "product": null,
      "tax": null,
      "customField": null,
      "invoiceLineNumber": null
    }
  ],
  "salesInvoiceRecurring": null,
  "contact": {
    "name": "James Smith",
    "address": "204 E Chestnut St,Louisville,KY,US,40202",
    "peppolId": null
  },
  "shipFrom": {
    "address1": "204 E Chestnut St",
    "address2": null,
    "country": null,
    "state": "KS",
    "city": "Independence",
    "postalCode": "67301",
    "preferred": true
  },
  "shipTo": {
    "address1": "204 E Chestnut St",
    "address2": null,
    "country": "US",
    "state": "KY",
    "city": "Louisville",
    "postalCode": "40202",
    "preferred": true
  },
  "billTo": {
    "address1": "204 E Chestnut St",
    "address2": null,
    "country": "US",
    "state": "KY",
    "city": "Louisville",
    "postalCode": "40202",
    "preferred": true
  },
  "shipByDate": "18-06-2020",
  "id": 14932,
  "salesInvoiceCode": "0000002",
  "documentSequenceCode": "0000002",
  "knockoffInfo": null,
  "tdsInfo": null,
  "draft": false,
  "paymentStatus": "PENDING",
  "fulfillmentStatus": "UNFULFILLED",
  "fulfillmentType": "NONE",
  "contactDto": null
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SalesInvoiceResponse](#salesinvoiceresponse) |
| 201 | Sales invoice has been created successfully. | [SalesInvoiceResponse](#salesinvoiceresponse) |
| 400 | Sales invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---

### Update Invoice

Update invoice information. [More about update invoice](https://deskera.docs.apiary.io/#reference/invoice-apis/v1invoicessalesid/update-invoice-information)

##### Description:

- Allows you to update a specific invoice information.

#### PUT
#### /v1/invoices/sales/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/invoices/sales/1
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/invoices/sales/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"attachmentIds\": [ 0 ], \"attachments\": [ \"string\" ], \"backOrder\": true, \"billTo\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"contact\": { \"address\": \"Raffles Place 1\", \"name\": \"ABC Pte Ltd\", \"peppolId\": \"u000:1109:uen\" }, \"contactCode\": \"C0001\", \"currency\": \"C001\", \"customField\": [ { \"label\": \"Label\", \"module\": \"string\", \"value\": \"XYZ\" } ], \"documentSequenceCode\": \"0000001\", \"draft\": false, \"dropShip\": true, \"dueAmount\": 12.322, \"exchangeRate\": 0.456345, \"fulfillmentComplete\": false, \"fulfillmentStatus\": \"PARTIAL_FULFILLED\", \"fulfillmentType\": \"PICK_PACK_SHIP\", \"journalEntryCode\": \"JE0001\", \"linkedDocuments\": [ { \"documentCode\": \"QO-0000001\", \"documentSequenceCode\": \"0000001\", \"documentType\": \"QUOTATION\" } ], \"memo\": \"Memo details\", \"openingDocumentNumber\": \"DC-0001\", \"openingInvoice\": false, \"purchaseOrderRefNo\": \"CPO001\", \"recurring\": true, \"recurringActivated\": false, \"salesInvoiceDate\": \"25-10-2019\", \"salesInvoiceDueDate\": \"25-10-2019\", \"salesInvoiceItems\": [ { \"availableQuantity\": 3, \"customField\": [ { \"label\": \"Label\", \"module\": \"string\", \"value\": \"XYZ\" } ], \"discount\": 2, \"discountInPercent\": true, \"documentSequenceCode\": \"P-0000001\", \"id\": 2, \"invoiceLineNumber\": \"ABSCDDSD1212\", \"product\": { \"active\": true, \"barcode\": 2365234, \"bomAddCostConfiguration\": [ { \"label\": \"Labour charges\", \"price\": 10.5 } ], \"bomProductsConfiguration\": [ { \"itemId\": 1234, \"itemName\": \"Apple\", \"quantity\": 10.5 } ], \"categoryCode\": \"AB0001\", \"categoryDesc\": \"Medical Equipment\", \"customField\": { \"field1\": \"value1\", \"field2\": \"value2\" }, \"deleted\": true, \"description\": \"Description\", \"documentSequenceCode\": \"P-0000001\", \"id\": 1234, \"images\": [ \"string\" ], \"inventory\": { \"availableQuantity\": 100, \"costOfGoodsSoldAccountCode\": \"A-10231\", \"inventoryAccountCode\": \"A-10232\", \"inventoryAccountName\": \"Inventory Account\", \"openingQuantity\": 10, \"openingValuation\": 100.4, \"stockAdjustmentAccountCode\": \"A-10234\", \"warehouseCode\": \"WH-00001\" }, \"manufacturingCostAccountCode\": \"AC-0000012\", \"name\": \"Apple\", \"productId\": \"P000011\", \"purchaseAccountCode\": \"A-0012\", \"purchasePrice\": 123.33, \"purchasePriceTaxInclusive\": true, \"purchaseReturnAccountCode\": \"A-0014\", \"purchaseTaxCode\": \"T-001\", \"reorderEnabled\": true, \"reorderLevel\": 100, \"salesAccountCode\": \"A-0013\", \"salesPrice\": 120, \"salesPriceTaxInclusive\": false, \"salesReturnAccountCode\": \"A-0015\", \"salesTaxCode\": \"T-002\", \"sequenceFormat\": 1, \"stockUom\": 2, \"taxable\": true, \"type\": \"TRACKED\" }, \"productCode\": \"P00001\", \"productDescription\": \"Apple watch\", \"productOrder\": 1, \"productQuantity\": 2, \"salesInvoiceItemCode\": \"SII-000001\", \"tax\": { \"accountCode\": \"AC-001\", \"code\": \"TC-001\", \"deleted\": false, \"description\": \"sales Tax for SG\", \"name\": \"SGST\", \"percent\": 7, \"status\": \"active\", \"taxCode\": \"TC-001\", \"type\": \"SALES\" }, \"taxAmount\": 0.5, \"taxCode\": \"GST7\", \"totalAmount\": 2.3, \"type\": \"TRACKED\", \"unitPrice\": 0.7 } ], \"salesInvoiceRecurring\": { \"id\": 2, \"invoiceRecurringCount\": 1, \"recurrenceEndDate\": \"25-10-2019\", \"recurrenceFrequency\": \"WEEK\", \"recurrenceType\": 1 }, \"sequenceFormat\": 1, \"shipByDate\": \"25-10-2019\", \"shipFrom\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"shipTo\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"status\": \"OPEN\", \"taxAmount\": 2.322, \"totalAmount\": 12.322, \"totalAmountInBaseCurrency\": 12.322, \"unitPriceGstInclusive\": false, \"warehouseCode\": \"WH-000001\"}"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| salesInvoiceRequest | body | salesInvoiceRequest | Yes | [SalesInvoiceRequest](#salesinvoicerequest) |

##### Sample Request
```java
{
  "attachmentIds": [
    0
  ],
  "attachments": [
    "string"
  ],
  "backOrder": true,
  "billTo": {
    "address1": "218, Robinson Road",
    "address2": "Downtown",
    "city": "C001",
    "country": "C001",
    "postalCode": 123456,
    "preferred": true,
    "state": "CS001"
  },
  "contact": {
    "address": "Raffles Place 1",
    "name": "ABC Pte Ltd",
    "peppolId": "u000:1109:uen"
  },
  "contactCode": "C0001",
  "currency": "C001",
  "customField": [
    {
      "label": "Label",
      "module": "Invoice",
      "value": "Extra Information"
    }
  ],
  "documentSequenceCode": "0000001",
  "draft": false,
  "dropShip": true,
  "dueAmount": 12.322,
  "exchangeRate": 0.456345,
  "fulfillmentComplete": false,
  "fulfillmentStatus": "PARTIAL_FULFILLED",
  "fulfillmentType": "PICK_PACK_SHIP",
  "journalEntryCode": "JE0001",
  "linkedDocuments": [
    {
      "documentCode": "QO-0000001",
      "documentSequenceCode": "0000001",
      "documentType": "QUOTATION"
    }
  ],
  "memo": "Memo details",
  "openingDocumentNumber": "DC-0001",
  "openingInvoice": false,
  "purchaseOrderRefNo": "CPO001",
  "recurring": true,
  "recurringActivated": false,
  "salesInvoiceDate": "25-10-2019",
  "salesInvoiceDueDate": "25-10-2019",
  "salesInvoiceItems": [
    {
      "availableQuantity": 3,
      "customField": [
        {
        "label": "Label",
        "module": "Invoice",
        "value": "Extra Information"
        }
      ],
      "discount": 2,
      "discountInPercent": true,
      "documentSequenceCode": "P-0000001",
      "id": 2,
      "invoiceLineNumber": "ABSCDDSD1212",
      "product": {
        "active": true,
        "barcode": 2365234,
        "bomAddCostConfiguration": [
          {
            "label": "Labour charges",
            "price": 10.5
          }
        ],
        "bomProductsConfiguration": [
          {
            "itemId": 1234,
            "itemName": "Apple",
            "quantity": 10.5
          }
        ],
        "categoryCode": "AB0001",
        "categoryDesc": "Medical Equipment",
        "customField": {
          "field1": "value1",
          "field2": "value2"
        },
        "deleted": true,
        "description": "Description",
        "documentSequenceCode": "P-0000001",
        "id": 1234,
        "images": [
          "string"
        ],
        "inventory": {
          "availableQuantity": 100,
          "costOfGoodsSoldAccountCode": "A-10231",
          "inventoryAccountCode": "A-10232",
          "inventoryAccountName": "Inventory Account",
          "openingQuantity": 10,
          "openingValuation": 100.4,
          "stockAdjustmentAccountCode": "A-10234",
          "warehouseCode": "WH-00001"
        },
        "manufacturingCostAccountCode": "AC-0000012",
        "name": "Apple",
        "productId": "P000011",
        "purchaseAccountCode": "A-0012",
        "purchasePrice": 123.33,
        "purchasePriceTaxInclusive": true,
        "purchaseReturnAccountCode": "A-0014",
        "purchaseTaxCode": "T-001",
        "reorderEnabled": true,
        "reorderLevel": 100,
        "salesAccountCode": "A-0013",
        "salesPrice": 120,
        "salesPriceTaxInclusive": false,
        "salesReturnAccountCode": "A-0015",
        "salesTaxCode": "T-002",
        "sequenceFormat": 1,
        "stockUom": 2,
        "taxable": true,
        "type": "TRACKED"
      },
      "productCode": "P00001",
      "productDescription": "Apple watch",
      "productOrder": 1,
      "productQuantity": 2,
      "salesInvoiceItemCode": "SII-000001",
      "tax": {
        "accountCode": "AC-001",
        "code": "TC-001",
        "deleted": false,
        "description": "sales Tax for SG",
        "name": "SGST",
        "percent": 7,
        "status": "active",
        "taxCode": "TC-001",
        "type": "SALES"
      },
      "taxAmount": 0.5,
      "taxCode": "GST7",
      "totalAmount": 2.3,
      "type": "TRACKED",
      "unitPrice": 0.7
    }
  ],
  "salesInvoiceRecurring": {
    "id": 2,
    "invoiceRecurringCount": 1,
    "recurrenceEndDate": "25-10-2019",
    "recurrenceFrequency": "WEEK",
    "recurrenceType": 1
  },
  "sequenceFormat": 1,
  "shipByDate": "25-10-2019",
  "shipFrom": {
    "address1": "218, Robinson Road",
    "address2": "Downtown",
    "city": "C001",
    "country": "C001",
    "postalCode": 123456,
    "preferred": true,
    "state": "CS001"
  },
  "shipTo": {
    "address1": "218, Robinson Road",
    "address2": "Downtown",
    "city": "C001",
    "country": "C001",
    "postalCode": 123456,
    "preferred": true,
    "state": "CS001"
  },
  "status": "OPEN",
  "taxAmount": 2.322,
  "totalAmount": 12.322,
  "totalAmountInBaseCurrency": 12.322,
  "unitPriceGstInclusive": false,
  "warehouseCode": "WH-000001"
}
```

##### Sample Response
```java
{
  "attachmentIds": [
    0
  ],
  "attachments": [
    "string"
  ],
  "backOrder": true,
  "billTo": {
    "address1": "218, Robinson Road",
    "address2": "Downtown",
    "city": "C001",
    "country": "C001",
    "postalCode": 123456,
    "preferred": true,
    "state": "CS001"
  },
  "contact": {
    "address": "Raffles Place 1",
    "name": "ABC Pte Ltd",
    "peppolId": "u000:1109:uen"
  },
  "contactCode": "C0001",
  "contactDto": {
    "attentionTo": "Peter Parker",
    "billingAddress": [
      {
        "address1": "218, Robinson Road",
        "address2": "Downtown",
        "city": "C001",
        "country": "C001",
        "postalCode": 123456,
        "preferred": true,
        "state": "CS001"
      }
    ],
    "businessUnit": "CAA01 - Cvl Avtn Authrty of Singapore",
    "currencyCode": "SGD",
    "customField": {
      "field1": "value1",
      "field2": "value2"
    },
    "documentSequenceCode": "C-0000001",
    "emailId": "myinfo@domain.com",
    "invoices": {
      "additionalProp1": [
        {
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "id": 43,
          "invoiceDate": "2018-10-01",
          "invoiceDueDate": "2018-10-01",
          "memo": "test",
          "purchaseOrderRefNo": "CPO001",
          "supplierInvoiceNo": "CSI001",
          "taxAmount": 1,
          "totalAmount": 46,
          "totalAmountInBaseCurrency": 46,
          "type": "sale_invoice"
        }
      ],
      "additionalProp2": [
        {
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "id": 43,
          "invoiceDate": "2018-10-01",
          "invoiceDueDate": "2018-10-01",
          "memo": "test",
          "purchaseOrderRefNo": "CPO001",
          "supplierInvoiceNo": "CSI001",
          "taxAmount": 1,
          "totalAmount": 46,
          "totalAmountInBaseCurrency": 46,
          "type": "sale_invoice"
        }
      ],
      "additionalProp3": [
        {
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "id": 43,
          "invoiceDate": "2018-10-01",
          "invoiceDueDate": "2018-10-01",
          "memo": "test",
          "purchaseOrderRefNo": "CPO001",
          "supplierInvoiceNo": "CSI001",
          "taxAmount": 1,
          "totalAmount": 46,
          "totalAmountInBaseCurrency": 46,
          "type": "sale_invoice"
        }
      ]
    },
    "name": "Sam",
    "payableAccountCode": "AC002",
    "paymentTermCode": "Net 0",
    "peppolId": "u000:11::11293",
    "receivableAccountCode": "AC001",
    "sequenceFormat": 1,
    "shippingAddress": [
      {
        "address1": "218, Robinson Road",
        "address2": "Downtown",
        "city": "C001",
        "country": "C001",
        "postalCode": 123456,
        "preferred": true,
        "state": "CS001"
      }
    ],
    "singaporeGovt": true,
    "taxExempted": true,
    "taxExemptionNo": "234s-few3-2422",
    "taxExemptionReason": "Resale, Federal Agency",
    "taxNumber": 123456,
    "uen": "DHJEUK"
  },
  "currency": "C001",
  "customField": [
    {
      "label": "Label",
      "module": "Invoice",
      "value": "Extra Information"
    }
  ],
  "documentSequenceCode": "0000001",
  "draft": false,
  "dropShip": true,
  "dueAmount": 12.322,
  "exchangeRate": 0.456345,
  "fulfillmentStatus": "UNFULFILLED",
  "fulfillmentType": "PICK_PACK_SHIP",
  "id": 1,
  "journalEntryCode": "JE0001",
  "knockoffInfo": [
    {
      "amount": 0,
      "currency": "SGD",
      "documentCode": "DOC001",
      "documentDate": "2020-06-16T07:10:20.642Z",
      "documentOrder": 0,
      "documentType": "QUOTATION",
      "exchangeRate": 0
    }
  ],
  "linkedDocuments": [
    {
      "documentCode": "QO-0000001",
      "documentSequenceCode": "0000001",
      "documentType": "QUOTATION"
    }
  ],
  "memo": "Memo details",
  "openingDocumentNumber": "DC-0001",
  "openingInvoice": false,
  "paymentStatus": "PENDING",
  "purchaseOrderRefNo": "CPO001",
  "recurring": true,
  "recurringActivated": false,
  "salesInvoiceCode": "SI001",
  "salesInvoiceDate": "25-10-2019",
  "salesInvoiceDueDate": "25-10-2019",
  "salesInvoiceItems": [
    {
      "availableQuantity": 3,
      "customField": [
        {
        "label": "Label",
        "module": "Invoice",
        "value": "Extra Information"
        }
      ],
      "discount": 2,
      "discountInPercent": true,
      "documentSequenceCode": "P-0000001",
      "id": 2,
      "invoiceLineNumber": "ABSCDDSD1212",
      "product": {
        "active": true,
        "barcode": 2365234,
        "bomAddCostConfiguration": [
          {
            "label": "Labour charges",
            "price": 10.5
          }
        ],
        "bomProductsConfiguration": [
          {
            "itemId": 1234,
            "itemName": "Apple",
            "quantity": 10.5
          }
        ],
        "categoryCode": "AB0001",
        "categoryDesc": "Medical Equipment",
        "customField": {
          "field1": "value1",
          "field2": "value2"
        },
        "deleted": true,
        "description": "Description",
        "documentSequenceCode": "P-0000001",
        "id": 1234,
        "images": [
          "string"
        ],
        "inventory": {
          "availableQuantity": 100,
          "costOfGoodsSoldAccountCode": "A-10231",
          "inventoryAccountCode": "A-10232",
          "inventoryAccountName": "Inventory Account",
          "openingQuantity": 10,
          "openingValuation": 100.4,
          "stockAdjustmentAccountCode": "A-10234",
          "warehouseCode": "WH-00001"
        },
        "manufacturingCostAccountCode": "AC-0000012",
        "name": "Apple",
        "productId": "P000011",
        "purchaseAccountCode": "A-0012",
        "purchasePrice": 123.33,
        "purchasePriceTaxInclusive": true,
        "purchaseReturnAccountCode": "A-0014",
        "purchaseTaxCode": "T-001",
        "reorderEnabled": true,
        "reorderLevel": 100,
        "salesAccountCode": "A-0013",
        "salesPrice": 120,
        "salesPriceTaxInclusive": false,
        "salesReturnAccountCode": "A-0015",
        "salesTaxCode": "T-002",
        "sequenceFormat": 1,
        "stockUom": 2,
        "taxable": true,
        "type": "TRACKED"
      },
      "productCode": "P00001",
      "productDescription": "Apple watch",
      "productOrder": 1,
      "productQuantity": 2,
      "salesInvoiceItemCode": "SII-000001",
      "tax": {
        "accountCode": "AC-001",
        "code": "TC-001",
        "deleted": false,
        "description": "sales Tax for SG",
        "name": "SGST",
        "percent": 7,
        "status": "active",
        "taxCode": "TC-001",
        "type": "SALES"
      },
      "taxAmount": 0.5,
      "taxCode": "GST7",
      "totalAmount": 2.3,
      "type": "TRACKED",
      "unitPrice": 0.7
    }
  ],
  "salesInvoiceRecurring": {
    "id": 2,
    "invoiceRecurringCount": 1,
    "recurrenceEndDate": "25-10-2019",
    "recurrenceFrequency": "WEEK",
    "recurrenceType": 1
  },
  "shipByDate": "25-10-2019",
  "shipFrom": {
    "address1": "218, Robinson Road",
    "address2": "Downtown",
    "city": "C001",
    "country": "C001",
    "postalCode": 123456,
    "preferred": true,
    "state": "CS001"
  },
  "shipTo": {
    "address1": "218, Robinson Road",
    "address2": "Downtown",
    "city": "C001",
    "country": "C001",
    "postalCode": 123456,
    "preferred": true,
    "state": "CS001"
  },
  "status": "OPEN",
  "taxAmount": 2.322,
  "tdsInfo": [
    {
      "documentCode": "DOC001",
      "tdsAccountCode": "string",
      "tdsAmount": 0
    }
  ],
  "totalAmount": 12.322,
  "totalAmountInBaseCurrency": 12.322,
  "unitPriceGstInclusive": false,
  "warehouseCode": "WH-000001",
  "withheldAmount": 12.322
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales Invoice has been updated successfully. | [SalesInvoiceResponse](#salesinvoiceresponse) |
| 201 | Created |  |
| 400 | Sales invoice draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Sales Invoice with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Retrieve Invoice

Get invoice by code. [More about update invoice](https://deskera.docs.apiary.io/#reference/invoice-apis/v1invoicessalescode/get-invoice-by-code)

##### Description:

- Allows you to retrieve an existing invoice details by it's code.

#### GET
#### /v1/invoices/sales/{code}
##### Request URL

```java
https://bifrost.deskera.com/v1/invoices/sales/code
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/invoices/sales/INV" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Sample Response
```java
{
  "attachmentIds": [
    0
  ],
  "attachments": [
    "string"
  ],
  "backOrder": true,
  "billTo": {
    "address1": "218, Robinson Road",
    "address2": "Downtown",
    "city": "C001",
    "country": "C001",
    "postalCode": 123456,
    "preferred": true,
    "state": "CS001"
  },
  "contact": {
    "address": "Raffles Place 1",
    "name": "ABC Pte Ltd",
    "peppolId": "u000:1109:uen"
  },
  "contactCode": "C0001",
  "contactDto": {
    "attentionTo": "Peter Parker",
    "billingAddress": [
      {
        "address1": "218, Robinson Road",
        "address2": "Downtown",
        "city": "C001",
        "country": "C001",
        "postalCode": 123456,
        "preferred": true,
        "state": "CS001"
      }
    ],
    "businessUnit": "CAA01 - Cvl Avtn Authrty of Singapore",
    "currencyCode": "SGD",
    "customField": {
      "field1": "value1",
      "field2": "value2"
    },
    "documentSequenceCode": "C-0000001",
    "emailId": "myinfo@domain.com",
    "invoices": {
      "additionalProp1": [
        {
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "id": 43,
          "invoiceDate": "2018-10-01",
          "invoiceDueDate": "2018-10-01",
          "memo": "test",
          "purchaseOrderRefNo": "CPO001",
          "supplierInvoiceNo": "CSI001",
          "taxAmount": 1,
          "totalAmount": 46,
          "totalAmountInBaseCurrency": 46,
          "type": "sale_invoice"
        }
      ],
      "additionalProp2": [
        {
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "id": 43,
          "invoiceDate": "2018-10-01",
          "invoiceDueDate": "2018-10-01",
          "memo": "test",
          "purchaseOrderRefNo": "CPO001",
          "supplierInvoiceNo": "CSI001",
          "taxAmount": 1,
          "totalAmount": 46,
          "totalAmountInBaseCurrency": 46,
          "type": "sale_invoice"
        }
      ],
      "additionalProp3": [
        {
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "id": 43,
          "invoiceDate": "2018-10-01",
          "invoiceDueDate": "2018-10-01",
          "memo": "test",
          "purchaseOrderRefNo": "CPO001",
          "supplierInvoiceNo": "CSI001",
          "taxAmount": 1,
          "totalAmount": 46,
          "totalAmountInBaseCurrency": 46,
          "type": "sale_invoice"
        }
      ]
    },
    "name": "Sam",
    "payableAccountCode": "AC002",
    "paymentTermCode": "Net 0",
    "peppolId": "u000:11::11293",
    "receivableAccountCode": "AC001",
    "sequenceFormat": 1,
    "shippingAddress": [
      {
        "address1": "218, Robinson Road",
        "address2": "Downtown",
        "city": "C001",
        "country": "C001",
        "postalCode": 123456,
        "preferred": true,
        "state": "CS001"
      }
    ],
    "singaporeGovt": true,
    "taxExempted": true,
    "taxExemptionNo": "234s-few3-2422",
    "taxExemptionReason": "Resale, Federal Agency",
    "taxNumber": 123456,
    "uen": "DHJEUK"
  },
  "currency": "C001",
  "customField": [
    {
      "label": "Label",
      "module": "Invoice",
      "value": "Extra Information"
    }
  ],
  "documentSequenceCode": "0000001",
  "draft": false,
  "dropShip": true,
  "dueAmount": 12.322,
  "exchangeRate": 0.456345,
  "fulfillmentStatus": "UNFULFILLED",
  "fulfillmentType": "PICK_PACK_SHIP",
  "id": 1,
  "journalEntryCode": "JE0001",
  "knockoffInfo": [
    {
      "amount": 0,
      "currency": "SGD",
      "documentCode": "DOC001",
      "documentDate": "2020-06-16T07:39:30.884Z",
      "documentOrder": 0,
      "documentType": "QUOTATION",
      "exchangeRate": 0
    }
  ],
  "linkedDocuments": [
    {
      "documentCode": "QO-0000001",
      "documentSequenceCode": "0000001",
      "documentType": "QUOTATION"
    }
  ],
  "memo": "Memo details",
  "openingDocumentNumber": "DC-0001",
  "openingInvoice": false,
  "paymentStatus": "PENDING",
  "purchaseOrderRefNo": "CPO001",
  "recurring": true,
  "recurringActivated": false,
  "salesInvoiceCode": "SI001",
  "salesInvoiceDate": "25-10-2019",
  "salesInvoiceDueDate": "25-10-2019",
  "salesInvoiceItems": [
    {
      "availableQuantity": 3,
      "customField": [
        {
        "label": "Label",
        "module": "Invoice",
        "value": "Extra Information"
        }
      ],
      "discount": 2,
      "discountInPercent": true,
      "documentSequenceCode": "P-0000001",
      "id": 2,
      "invoiceLineNumber": "ABSCDDSD1212",
      "product": {
        "active": true,
        "barcode": 2365234,
        "bomAddCostConfiguration": [
          {
            "label": "Labour charges",
            "price": 10.5
          }
        ],
        "bomProductsConfiguration": [
          {
            "itemId": 1234,
            "itemName": "Apple",
            "quantity": 10.5
          }
        ],
        "categoryCode": "AB0001",
        "categoryDesc": "Medical Equipment",
        "customField": {
          "field1": "value1",
          "field2": "value2"
        },
        "deleted": true,
        "description": "Description",
        "documentSequenceCode": "P-0000001",
        "id": 1234,
        "images": [
          "string"
        ],
        "inventory": {
          "availableQuantity": 100,
          "costOfGoodsSoldAccountCode": "A-10231",
          "inventoryAccountCode": "A-10232",
          "inventoryAccountName": "Inventory Account",
          "openingQuantity": 10,
          "openingValuation": 100.4,
          "stockAdjustmentAccountCode": "A-10234",
          "warehouseCode": "WH-00001"
        },
        "manufacturingCostAccountCode": "AC-0000012",
        "name": "Apple",
        "productId": "P000011",
        "purchaseAccountCode": "A-0012",
        "purchasePrice": 123.33,
        "purchasePriceTaxInclusive": true,
        "purchaseReturnAccountCode": "A-0014",
        "purchaseTaxCode": "T-001",
        "reorderEnabled": true,
        "reorderLevel": 100,
        "salesAccountCode": "A-0013",
        "salesPrice": 120,
        "salesPriceTaxInclusive": false,
        "salesReturnAccountCode": "A-0015",
        "salesTaxCode": "T-002",
        "sequenceFormat": 1,
        "stockUom": 2,
        "taxable": true,
        "type": "TRACKED"
      },
      "productCode": "P00001",
      "productDescription": "Apple watch",
      "productOrder": 1,
      "productQuantity": 2,
      "salesInvoiceItemCode": "SII-000001",
      "tax": {
        "accountCode": "AC-001",
        "code": "TC-001",
        "deleted": false,
        "description": "sales Tax for SG",
        "name": "SGST",
        "percent": 7,
        "status": "active",
        "taxCode": "TC-001",
        "type": "SALES"
      },
      "taxAmount": 0.5,
      "taxCode": "GST7",
      "totalAmount": 2.3,
      "type": "TRACKED",
      "unitPrice": 0.7
    }
  ],
  "salesInvoiceRecurring": {
    "id": 2,
    "invoiceRecurringCount": 1,
    "recurrenceEndDate": "25-10-2019",
    "recurrenceFrequency": "WEEK",
    "recurrenceType": 1
  },
  "shipByDate": "25-10-2019",
  "shipFrom": {
    "address1": "218, Robinson Road",
    "address2": "Downtown",
    "city": "C001",
    "country": "C001",
    "postalCode": 123456,
    "preferred": true,
    "state": "CS001"
  },
  "shipTo": {
    "address1": "218, Robinson Road",
    "address2": "Downtown",
    "city": "C001",
    "country": "C001",
    "postalCode": 123456,
    "preferred": true,
    "state": "CS001"
  },
  "status": "OPEN",
  "taxAmount": 2.322,
  "tdsInfo": [
    {
      "documentCode": "DOC001",
      "tdsAccountCode": "string",
      "tdsAmount": 0
    }
  ],
  "totalAmount": 12.322,
  "totalAmountInBaseCurrency": 12.322,
  "unitPriceGstInclusive": false,
  "warehouseCode": "WH-000001",
  "withheldAmount": 12.322
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales invoice information has been fetched successfully. | [SalesInvoiceResponse](#salesinvoiceresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Sales invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

## Models

---


### SalesInvoiceResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachmentIds | [ integer ] |  | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if backorder created | No |
| billTo | [Address](#address) | Bill to address | No |
| contact | [ContactInfo](#contactinfo) | Contact details | Yes |
| contactCode | string | Contact Code | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| currency | string | Currency | Yes |
| documentSequenceCode | string | Sales invoice Sequence Code | No |
| draft | boolean | Sales invoice drafted | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase invoice is created for drop ship | No |
| dueAmount | number | Amount Due | No |
| exchangeRate | number | Exchange rate | No |
| fulfillmentStatus | string | Sales invoice fulfillment status | No |
| fulfillmentType | string | Fulfillment type: NONE, DEFAULT, PICK_PACK_SHIP, DROP_SHIP | No |
| id | long | Sales invoice id | No |
| journalEntryCode | string | Journal Entry Code | No |
| memo | string | Memo | No |
| openingDocumentNumber | string | Customer opening document number | No |
| openingInvoice | boolean | True if opening invoice | No |
| paymentStatus | string | Sales invoice payment status | No |
| purchaseOrderRefNo | string | Contact PO reference number | No |
| recurring | boolean | True if Invoice is recurring. | No |
| recurringActivated | boolean | True if Invoice recurrence is active. | No |
| salesInvoiceCode | string | Sales invoice code | No |
| salesInvoiceDate | string | Sales Invoice date | Yes |
| salesInvoiceDueDate | string | Sales Invoice due date | Yes |
| salesInvoiceItems | [ [SalesInvoiceItemDetails](#salesinvoiceitemdetails) ] | Sales invoice item details | No |
| shipByDate | string | Ship by date | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Invoice status | No |
| taxAmount | number | Tax amount | No |
| totalAmount | number | Total amount | No |
| totalAmountInBaseCurrency | number | Total amount in base currency | No |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive | No |
| warehouseCode | string | Warehouse Code | No |
| withheldAmount | number | Withheld Amount | No |

### Address

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address1 | string | Address line 1 | No |
| address2 | string | Address line 2 | No |
| city | string | City | No |
| country | string | Country | No |
| postalCode | string | Postal Code | No |
| preferred | boolean | Is this a default address? | No |
| state | string | State | No |

### ContactInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | string | Address | Yes |
| name | string | Contact name | Yes |

### ContactDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attentionTo | string | the contact name in the company | No |
| billingAddress | [ [Address](#address) ] | List of Billing Address. | No |
| businessUnit | string | indicates the contact is govt agency | No |
| currencyCode | string | Currency code | No |
| documentSequenceCode | string | Contact Sequence code | No |
| emailId | string | contact email address | No |
| name | string | Contact name | No |
| payableAccountCode | string | Payable account code | No |
| paymentTermCode | string | Payment term code | No |
| peppolId | string | Peppol ID | No |
| receivableAccountCode | string | Receivable account code | No |
| sequenceFormat | string | Sequence Format | No |
| shippingAddress | [ [Address](#address) ] | List of Shipping Address. | No |
| singaporeGovt | boolean | indicates the contact is govt agency | No |
| taxExempted | boolean | Denotes if customer is tax exempted | No |
| taxExemptionNo | string | Generated tax exemption number | No |
| taxExemptionReason | string | Tax exemption reason | No |
| taxNumber | string | Tax number | No |
| uen | string | Contact UEN | No |

### SalesInvoiceItemDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQuantity | number | Total available quantity | No |
| discount | number | Discount | No |
| discountInPercent | boolean | Discount in percentage | No |
| documentSequenceCode | string | Product Document Sequence Code | Yes |
| id | long | ID | No |
| invoiceLineNumber | string | Invoice Line Number | No |
| productCode | string | Product code | Yes |
| productDescription | string | Product description | No |
| productOrder | integer | Product view order | No |
| productQuantity | number | Product quantity | Yes |
| salesInvoiceItemCode | string | Sales Invoice Item Code | No |
| taxAmount | number | Tax amount | No |
| taxCode | string | Tax code | No |
| totalAmount | number | Total amount | Yes |
| type | string | Product type | Yes |
| unitPrice | number | Product unit price | Yes |

### SalesInvoiceRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachmentIds | [ integer ] |  | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase invoice is backorder | No |
| billTo | [Address](#address) | Bill to address | No |
| contact | [ContactInfo](#contactinfo) | Contact details | Yes |
| contactCode | string | Contact Code | Yes |
| currency | string | Currency | Yes |
| documentSequenceCode | string | Sales Invoice Code | No |
| draft | boolean | True if want to save as draft. | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase invoice is created for drop ship | No |
| dueAmount | number | Amount Due | No |
| exchangeRate | number | Exchange rate | No |
| fulfillmentComplete | boolean | True if auto fulfilled is required. | No |
| fulfillmentStatus | string | fulfillment status | No |
| fulfillmentType | string | Fulfillment type: NONE, DEFAULT, PICK_PACK_SHIP, DROP_SHIP | No |
| journalEntryCode | string | Journal Entry Code | No |
| memo | string | Memo | No |
| openingDocumentNumber | string | Customer opening document number | No |
| openingInvoice | boolean | True if opening invoice | No |
| purchaseOrderRefNo | string | Contact PO reference number | No |
| recurring | boolean | True if Invoice is recurring. | No |
| recurringActivated | boolean | True if Invoice recurrence is active. | No |
| salesInvoiceDate | string | Sales Invoice date | Yes |
| salesInvoiceDueDate | string | Sales Invoice due date | Yes |
| salesInvoiceItems | [ [SalesInvoiceItemDetails](#salesinvoiceitemdetails) ] | Sales invoice item details | No |
| sequenceFormat | string | Sequence Format Id | No |
| shipByDate | string | Ship by date | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Invoice status | No |
| taxAmount | number | Tax amount | No |
| totalAmount | number | Total amount | No |
| totalAmountInBaseCurrency | number | Total amount in base currency | No |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive | No |
| warehouseCode | string | Warehouse Code | No |