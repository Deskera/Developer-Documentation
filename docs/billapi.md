---
id: billapi
title: Bill APIs
sidebar_label: Bill
---
Bill is a transaction representing a request-for-payment from a third party for goods/services rendered, received, or both. With a complete overview of your bills with the "Bill" tab, you will be able to steer clear of late payment fees and build effective supplier relationships by paying your bills on time..

`Bill Api` helps you to create new bill, update a particular bill, retrieve bill by id, or get the list of all bills.

More about [Bill API documentation](https://deskera.docs.apiary.io/#reference/bill-apis)

## API
---
### Search Bill

Get bills by filter criteria. [More about search bill](https://deskera.docs.apiary.io/#reference/bill-apis/v1invoicespurchase/get-bills-by-filter-criteria)

##### Description:

- Allows you to retrieve a list of all bills.
- Allows you to retrieve specific bill based on it's filter criteria.

#### GET
#### /v1/invoices/purchase
##### Request URL

```java
https://bifrost.deskera.com/v1/invoices/purchase?limit=10&page=0&sort=createdDate&sortDir=DESC
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/invoices/purchase?limit=10&page=0&sort=createdDate&sortDir=DESC" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
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
{
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
                "module": "Billing",
                "value": "Extra Information"
            }
        ],
        "documentSequenceCode": "0000001",
        "draft": false,
        "dropShip": true,
        "dueAmount": 12.322,
        "exchangeRate": 0.456345,
        "id": 1,
        "journalEntryCode": "JE0001",
        "knockoffInfo": [
            {
            "amount": 0,
            "currency": "SGD",
            "documentCode": "DOC001",
            "documentDate": "2020-06-16T04:35:40.873Z",
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
        "payableAccountCode": "AC-000001",
        "paymentStatus": "PENDING",
        "purchaseInvoiceAccounts": [
            {
            "accountCode": "P00001",
            "accountDescription": "Apple watch",
            "accountOrder": 1,
            "amount": 2,
            "discount": 2,
            "discountInPercent": true,
            "id": 2,
            "taxAmount": 0.5,
            "taxCode": "GST7",
            "totalAmount": 2.3
            }
        ],
        "purchaseInvoiceCode": "SI001",
        "purchaseInvoiceDate": "25-10-2019",
        "purchaseInvoiceDueDate": "25-10-2019",
        "purchaseInvoiceProducts": [
            {
            "customField": [
                {
                "label": "Label",
                "module": "Billing",
                "value": "Extra Information"
                }
            ],
            "discount": 2,
            "discountInPercent": true,
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
            "purchaseInvoiceItemCode": "PII-000001",
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
            "tdsAccount": "AC-0000011",
            "tdsAmount": 100,
            "tdsId": 1,
            "tdsRate": 10.1,
            "totalAmount": 2.3,
            "unitPrice": 0.7
            }
        ],
        "purchaseInvoiceRecurring": {
            "id": 2,
            "invoiceRecurringCount": 1,
            "recurrenceEndDate": "25-10-2019",
            "recurrenceFrequency": "WEEK",
            "recurrenceType": 1
        },
        "purchaseInvoiceType": "INVENTORY",
        "purchaseOrderRefNo": "CPO001",
        "receiveGoodsStatus": "UNRECEIVED",
        "recurring": true,
        "recurringActivated": false,
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
        "supplierInvoiceNo": "INV001",
        "taxAmount": 2.322,
        "totalAmount": 12.322,
        "totalAmountInBaseCurrency": 12.322,
        "totalTdsAmount": 12.32,
        "unitPriceGstInclusive": false,
        "warehouseCode": "WH-000001"
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
| 200 | Purchase invoices have been fetched successfully. | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Create Bill

Create a new bill. [More about create bill](https://deskera.docs.apiary.io/#reference/bill-apis/v1invoicespurchase/create-a-new-bill)

##### Description:

- Allows you to create a new bill.

#### POST
#### /v1/invoices/purchase
##### Request URL

```java
https://bifrost.deskera.com/v1/invoices/purchase
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/invoices/purchase" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"contactCode\": \"C-0000001\", \"currency\": \"SGD\", \"currencyCode\": \"SGD\", \"memo\": \"Test Bill Memo\", \"status\": \"OPEN\", \"unitPriceGstInclusive\": false, \"sequenceFormat\": \"5eeb41da95ec493bcc400405\", \"documentType\": \"PURCHASE_INVOICE\", \"exchangeRate\": 1, \"previousExchangeRate\": 1, \"shipFrom\": { \"address1\": \"204 E Chestnut St\", \"city\": \"Louisville\", \"state\": \"KY\", \"country\": \"US\", \"postalCode\": \"40202\", \"preferred\": true }, \"shipTo\": { \"address1\": \"204 E Chestnut St\", \"city\": \"Independence\", \"state\": \"KS\", \"country\": null, \"postalCode\": \"67301\", \"preferred\": true }, \"billTo\": { \"address1\": \"204 E Chestnut St\", \"city\": \"Independence\", \"state\": \"KS\", \"country\": null, \"postalCode\": \"67301\", \"preferred\": true }, \"contact\": { \"id\": 120226, \"code\": \"C-0000001\", \"documentSequenceCode\": \"C-0000001\", \"sequenceFormat\": \"5eeb3ede95ec493bcc4003ff\", \"name\": \"James Smith\", \"receivableAccountCode\": \"AC-0000003\", \"payableAccountCode\": \"AC-0000011\", \"currencyCode\": \"SGD\", \"paymentTermCode\": \"4\", \"billingAddress\": [ { \"city\": \"Louisville\", \"state\": \"KY\", \"country\": \"US\", \"address1\": \"204 E Chestnut St\", \"address2\": null, \"preferred\": true, \"postalCode\": \"40202\" } ], \"shippingAddress\": [ { \"city\": \"Louisville\", \"state\": \"KY\", \"country\": \"US\", \"address1\": \"204 E Chestnut St\", \"address2\": null, \"preferred\": true, \"postalCode\": \"40202\" } ], \"status\": \"ACTIVE\", \"customer\": false, \"vendor\": true, \"deleted\": false, \"tenantId\": 1, \"theyOweYou\": null, \"youOweThem\": null, \"totalNetAmount\": null, \"totalBillAmount\": null, \"invoices\": null, \"customField\": null, \"emailId\": \"james.smith@getnada.com\", \"errorMessage\": null, \"avalaraCustomerCode\": \"b123e677-d80a-484c-a700-b63e11e8f7dc\", \"uen\": \"79787978\", \"taxNumber\": \"123456780\", \"taxExempted\": null, \"taxExemptionNo\": null, \"taxExemptionReason\": null, \"peppolId\": null, \"singaporeGovt\": null, \"businessUnit\": \"\", \"attentionTo\": null, \"address\": \"204 E Chestnut St,Louisville,KY,US,40202\" }, \"documentDate\": \"18-06-2020\", \"validTillDate\": \"18-07-2020\", \"totalAmount\": 0, \"totalAmountInBaseCurrency\": 0, \"dueAmount\": 0, \"attachments\": [ ], \"attachmentIds\": null, \"supportedFeatures\": [ ], \"items\": [ { \"igstAmount\": 0, \"cgstAmount\": 0, \"sgstAmount\": 0, \"cessAmount\": 0, \"gstType\": null, \"hsnOrSacCode\": null, \"taxPreference\": null, \"taxExemptionReason\": null, \"igstRate\": null, \"cgstRate\": null, \"sgstRate\": null, \"cessRule\": null, \"exciseApplicable\": false, \"exciseType\": null, \"exciseRate\": null, \"exciseAmount\": 0, \"id\": null, \"discount\": null, \"discountInPercent\": false, \"productCode\": \"P-0000001\", \"product\": { \"name\": \"Demo Product\", \"type\": \"TRACKED\", \"barcode\": \"123123132\", \"description\": \"Demo Product Description\", \"purchasePrice\": 100, \"salesPrice\": 120, \"purchaseAccountCode\": \"AC-0000032\", \"salesAccountCode\": \"AC-0000023\", \"purchaseReturnAccountCode\": null, \"salesReturnAccountCode\": null, \"manufacturingCostAccountCode\": \"AC-0000063\", \"purchaseTaxCode\": \"TX-0000011\", \"salesTaxCode\": \"TX-0000001\", \"purchasePriceTaxInclusive\": true, \"salesPriceTaxInclusive\": true, \"stockUom\": 2, \"images\": [ null ], \"inventory\": { \"openingQuantity\": 10, \"openingValuation\": 1000, \"availableQuantity\": 11, \"costOfGoodsSoldAccountCode\": \"AC-0000030\", \"inventoryAccountCode\": \"AC-0000004\", \"stockAdjustmentAccountCode\": \"AC-0000045\", \"inventoryAccountName\": \"Inventory\", \"warehouseCode\": \"WH-0000001\" }, \"categoryCode\": null, \"categoryDesc\": null, \"taxable\": true, \"customField\": null, \"reorderEnabled\": false, \"reorderLevel\": null, \"documentSequenceCode\": \"P-0000001\", \"sequenceFormat\": \"5eeb3cb495ec493bcc4003e5\", \"errorMessage\": null, \"id\": 58538, \"productId\": \"P-0000001\", \"active\": true, \"deleted\": false, \"bomProductsConfiguration\": [ ], \"bomAddCostConfiguration\": [ ], \"availableQuantity\": 11 }, \"productDescription\": \"Demo Product Description\", \"productName\": \"Demo Product\", \"productQuantity\": 1, \"availableQuantity\": 11, \"taxAmountBuffer\": 0, \"taxCode\": \"TX-0000011\", \"taxName\": \"TX (7%)\", \"tax\": { \"id\": 198104, \"name\": \"TX (7%)\", \"taxCode\": \"TX (7%)\", \"accountCode\": \"AC-0000021\", \"accountName\": \"GST\", \"type\": \"PURCHASE\", \"description\": \"Purchases from GST-registered suppliers that are subject to GST at 7%.\", \"percent\": 7, \"code\": \"TX-0000011\", \"status\": \"active\", \"deleted\": false, \"tenantId\": 38272, \"category\": \"SYSTEM\" }, \"unitPrice\": 100, \"currency\": null, \"totalAmount\": 107, \"taxSystem\": \"SG\", \"type\": \"TRACKED\", \"unitPriceGstInclusive\": false } ], \"receivedComplete\": false, \"billDue\": \"18-07-2020\", \"receiveGoodsStatus\": \"UNRECEIVED\", \"buyType\": \"INVENTORY\", \"dropShip\": false, \"purchaseInvoiceDueDate\": \"18-07-2020\", \"purchaseInvoiceType\": \"INVENTORY\", \"purchaseInvoiceDate\": \"18-06-2020\", \"purchaseInvoiceProducts\": [ { \"igstAmount\": 0, \"cgstAmount\": 0, \"sgstAmount\": 0, \"cessAmount\": 0, \"gstType\": null, \"hsnOrSacCode\": null, \"taxPreference\": null, \"taxExemptionReason\": null, \"igstRate\": null, \"cgstRate\": null, \"sgstRate\": null, \"cessRule\": null, \"exciseApplicable\": false, \"exciseType\": null, \"exciseRate\": null, \"exciseAmount\": 0, \"id\": null, \"discount\": null, \"discountInPercent\": false, \"productCode\": \"P-0000001\", \"product\": { \"name\": \"Demo Product\", \"type\": \"TRACKED\", \"barcode\": \"123123132\", \"description\": \"Demo Product Description\", \"purchasePrice\": 100, \"salesPrice\": 120, \"purchaseAccountCode\": \"AC-0000032\", \"salesAccountCode\": \"AC-0000023\", \"purchaseReturnAccountCode\": null, \"salesReturnAccountCode\": null, \"manufacturingCostAccountCode\": \"AC-0000063\", \"purchaseTaxCode\": \"TX-0000011\", \"salesTaxCode\": \"TX-0000001\", \"purchasePriceTaxInclusive\": true, \"salesPriceTaxInclusive\": true, \"stockUom\": 2, \"images\": [ null ], \"inventory\": { \"openingQuantity\": 10, \"openingValuation\": 1000, \"availableQuantity\": 11, \"costOfGoodsSoldAccountCode\": \"AC-0000030\", \"inventoryAccountCode\": \"AC-0000004\", \"stockAdjustmentAccountCode\": \"AC-0000045\", \"inventoryAccountName\": \"Inventory\", \"warehouseCode\": \"WH-0000001\" }, \"categoryCode\": null, \"categoryDesc\": null, \"taxable\": true, \"customField\": null, \"reorderEnabled\": false, \"reorderLevel\": null, \"documentSequenceCode\": \"P-0000001\", \"sequenceFormat\": \"5eeb3cb495ec493bcc4003e5\", \"errorMessage\": null, \"id\": 58538, \"productId\": \"P-0000001\", \"active\": true, \"deleted\": false, \"bomProductsConfiguration\": [ ], \"bomAddCostConfiguration\": [ ], \"availableQuantity\": 11 }, \"productDescription\": \"Demo Product Description\", \"productName\": \"Demo Product\", \"productQuantity\": 1, \"availableQuantity\": 11, \"taxAmountBuffer\": 0, \"taxCode\": \"TX-0000011\", \"taxName\": \"TX (7%)\", \"tax\": { \"id\": 198104, \"name\": \"TX (7%)\", \"taxCode\": \"TX (7%)\", \"accountCode\": \"AC-0000021\", \"accountName\": \"GST\", \"type\": \"PURCHASE\", \"description\": \"Purchases from GST-registered suppliers that are subject to GST at 7%.\", \"percent\": 7, \"code\": \"TX-0000011\", \"status\": \"active\", \"deleted\": false, \"tenantId\": 38272, \"category\": \"SYSTEM\" }, \"unitPrice\": 100, \"currency\": null, \"totalAmount\": 107, \"taxSystem\": \"SG\", \"type\": \"TRACKED\", \"unitPriceGstInclusive\": false } ]}"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequest](#purchaseinvoicerequest) |

##### Sample Request
```java
{
  "contactCode": "C-0000001",
  "currency": "SGD",
  "currencyCode": "SGD",
  "memo": "Test Bill Memo",
  "status": "OPEN",
  "unitPriceGstInclusive": false,
  "sequenceFormat": "5eeb41da95ec493bcc400405",
  "documentType": "PURCHASE_INVOICE",
  "exchangeRate": 1,
  "previousExchangeRate": 1,
  "shipFrom": {
    "address1": "204 E Chestnut St",
    "city": "Louisville",
    "state": "KY",
    "country": "US",
    "postalCode": "40202",
    "preferred": true
  },
  "shipTo": {
    "address1": "204 E Chestnut St",
    "city": "Independence",
    "state": "KS",
    "country": null,
    "postalCode": "67301",
    "preferred": true
  },
  "billTo": {
    "address1": "204 E Chestnut St",
    "city": "Independence",
    "state": "KS",
    "country": null,
    "postalCode": "67301",
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
    "customer": false,
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
      "taxCode": "TX-0000011",
      "taxName": "TX (7%)",
      "tax": {
        "id": 198104,
        "name": "TX (7%)",
        "taxCode": "TX (7%)",
        "accountCode": "AC-0000021",
        "accountName": "GST",
        "type": "PURCHASE",
        "description": "Purchases from GST-registered suppliers that are subject to GST at 7%.",
        "percent": 7,
        "code": "TX-0000011",
        "status": "active",
        "deleted": false,
        "tenantId": 1,
        "category": "SYSTEM"
      },
      "unitPrice": 100,
      "currency": null,
      "totalAmount": 107,
      "taxSystem": "SG",
      "type": "TRACKED",
      "unitPriceGstInclusive": false
    }
  ],
  "receivedComplete": false,
  "billDue": "18-07-2020",
  "receiveGoodsStatus": "UNRECEIVED",
  "buyType": "INVENTORY",
  "dropShip": false,
  "purchaseInvoiceDueDate": "18-07-2020",
  "purchaseInvoiceType": "INVENTORY",
  "purchaseInvoiceDate": "18-06-2020",
  "purchaseInvoiceProducts": [
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
      "taxCode": "TX-0000011",
      "taxName": "TX (7%)",
      "tax": {
        "id": 198104,
        "name": "TX (7%)",
        "taxCode": "TX (7%)",
        "accountCode": "AC-0000021",
        "accountName": "GST",
        "type": "PURCHASE",
        "description": "Purchases from GST-registered suppliers that are subject to GST at 7%.",
        "percent": 7,
        "code": "TX-0000011",
        "status": "active",
        "deleted": false,
        "tenantId": 1,
        "category": "SYSTEM"
      },
      "unitPrice": 100,
      "currency": null,
      "totalAmount": 107,
      "taxSystem": "SG",
      "type": "TRACKED",
      "unitPriceGstInclusive": false
    }
  ]
}
```

##### Sample Ressponse
```java
{
  "openingInvoice": false,
  "totalAmount": 107.00,
  "totalAmountInBaseCurrency": 107.00,
  "payableAccountCode": null,
  "taxAmount": 7.00,
  "openingDocumentNumber": null,
  "warehouseCode": null,
  "dropShip": false,
  "backOrder": false,
  "status": "OPEN",
  "customField": null,
  "attachmentIds": null,
  "contactCode": "C-0000001",
  "purchaseInvoiceType": "INVENTORY",
  "linkedDocuments": null,
  "supplierInvoiceNo": null,
  "purchaseOrderRefNo": null,
  "journalEntryCode": "JE-0000003",
  "currency": "SGD",
  "exchangeRate": 1,
  "purchaseInvoiceDate": "18-06-2020",
  "purchaseInvoiceDueDate": "18-07-2020",
  "memo": "Test Bill Memo",
  "attachments": [

  ],
  "unitPriceGstInclusive": false,
  "dueAmount": 107.00,
  "totalTdsAmount": null,
  "recurring": false,
  "recurringActivated": false,
  "purchaseInvoiceAccounts": null,
  "purchaseInvoiceRecurring": null,
  "contact": {
    "name": "James Smith",
    "address": "204 E Chestnut St,Louisville,KY,US,40202",
    "peppolId": null
  },
  "purchaseInvoiceProducts": [
    {
      "id": 20539,
      "productCode": "P-0000001",
      "productDescription": "Demo Product Description",
      "productQuantity": 1,
      "unitPrice": 100,
      "discount": null,
      "discountInPercent": false,
      "taxCode": "TX-0000011",
      "taxAmount": 7.0000000000,
      "tdsAccount": null,
      "tdsId": null,
      "tdsRate": null,
      "tdsAmount": null,
      "totalAmount": 107.0000000000,
      "productOrder": null,
      "purchaseInvoiceItemCode": "PII-0000002",
      "product": null,
      "tax": null,
      "customField": null,
      "invoiceLineNumber": null
    }
  ],
  "id": 15037,
  "purchaseInvoiceCode": "0000002",
  "documentSequenceCode": "0000002",
  "knockoffInfo": null,
  "draft": false,
  "paymentStatus": "PENDING",
  "shipFrom": {
    "address1": "204 E Chestnut St",
    "address2": null,
    "country": "US",
    "state": "KY",
    "city": "Louisville",
    "postalCode": "40202",
    "preferred": true
  },
  "shipTo": {
    "address1": "204 E Chestnut St",
    "address2": null,
    "country": null,
    "state": "KS",
    "city": "Independence",
    "postalCode": "67301",
    "preferred": true
  },
  "billTo": {
    "address1": "204 E Chestnut St",
    "address2": null,
    "country": null,
    "state": "KS",
    "city": "Independence",
    "postalCode": "67301",
    "preferred": true
  },
  "contactDto": null,
  "receiveGoodsStatus": "UNRECEIVED"
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |
| 201 | Purchase invoice has been created successfully. | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |
| 400 | Purchase invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---

### Update Bill

Update bill information. [More about update bill](https://deskera.docs.apiary.io/#reference/bill-apis/v1invoicespurchaseid/update-bill-information)

##### Description:

- Allows you to update a specific bill information.

#### PUT
#### /v1/invoices/purchase/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/invoices/purchase/1
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/invoices/purchase/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"attachmentIds\": [ 0 ], \"attachments\": [ \"string\" ], \"backOrder\": true, \"billTo\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"contact\": { \"address\": \"Raffles Place 1\", \"name\": \"ABC Pte Ltd\", \"peppolId\": \"u000:1109:uen\" }, \"contactCode\": \"C0001\", \"currency\": \"C001\", \"customField\": [ { \"label\": \"Label\", \"module\": \"string\", \"value\": \"XYZ\" } ], \"documentSequenceCode\": \"0000001\", \"draft\": false, \"dropShip\": true, \"dueAmount\": 12.322, \"exchangeRate\": 0.456345, \"journalEntryCode\": \"JE0001\", \"linkedDocuments\": [ { \"documentCode\": \"QO-0000001\", \"documentSequenceCode\": \"0000001\", \"documentType\": \"QUOTATION\" } ], \"memo\": \"Memo details\", \"openingDocumentNumber\": \"DC-0001\", \"openingInvoice\": false, \"payableAccountCode\": \"AC-000001\", \"purchaseInvoiceAccounts\": [ { \"accountCode\": \"P00001\", \"accountDescription\": \"Apple watch\", \"accountOrder\": 1, \"amount\": 2, \"discount\": 2, \"discountInPercent\": true, \"id\": 2, \"taxAmount\": 0.5, \"taxCode\": \"GST7\", \"totalAmount\": 2.3 } ], \"purchaseInvoiceDate\": \"25-10-2019\", \"purchaseInvoiceDueDate\": \"25-10-2019\", \"purchaseInvoiceProducts\": [ { \"customField\": [ { \"label\": \"Label\", \"module\": \"string\", \"value\": \"XYZ\" } ], \"discount\": 2, \"discountInPercent\": true, \"id\": 2, \"invoiceLineNumber\": \"ABSCDDSD1212\", \"product\": { \"active\": true, \"barcode\": 2365234, \"bomAddCostConfiguration\": [ { \"label\": \"Labour charges\", \"price\": 10.5 } ], \"bomProductsConfiguration\": [ { \"itemId\": 1234, \"itemName\": \"Apple\", \"quantity\": 10.5 } ], \"categoryCode\": \"AB0001\", \"categoryDesc\": \"Medical Equipment\", \"customField\": { \"field1\": \"value1\", \"field2\": \"value2\" }, \"deleted\": true, \"description\": \"Description\", \"documentSequenceCode\": \"P-0000001\", \"id\": 1234, \"images\": [ \"string\" ], \"inventory\": { \"availableQuantity\": 100, \"costOfGoodsSoldAccountCode\": \"A-10231\", \"inventoryAccountCode\": \"A-10232\", \"inventoryAccountName\": \"Inventory Account\", \"openingQuantity\": 10, \"openingValuation\": 100.4, \"stockAdjustmentAccountCode\": \"A-10234\", \"warehouseCode\": \"WH-00001\" }, \"manufacturingCostAccountCode\": \"AC-0000012\", \"name\": \"Apple\", \"productId\": \"P000011\", \"purchaseAccountCode\": \"A-0012\", \"purchasePrice\": 123.33, \"purchasePriceTaxInclusive\": true, \"purchaseReturnAccountCode\": \"A-0014\", \"purchaseTaxCode\": \"T-001\", \"reorderEnabled\": true, \"reorderLevel\": 100, \"salesAccountCode\": \"A-0013\", \"salesPrice\": 120, \"salesPriceTaxInclusive\": false, \"salesReturnAccountCode\": \"A-0015\", \"salesTaxCode\": \"T-002\", \"sequenceFormat\": 1, \"stockUom\": 2, \"taxable\": true, \"type\": \"TRACKED\" }, \"productCode\": \"P00001\", \"productDescription\": \"Apple watch\", \"productOrder\": 1, \"productQuantity\": 2, \"purchaseInvoiceItemCode\": \"PII-000001\", \"tax\": { \"accountCode\": \"AC-001\", \"code\": \"TC-001\", \"deleted\": false, \"description\": \"sales Tax for SG\", \"name\": \"SGST\", \"percent\": 7, \"status\": \"active\", \"taxCode\": \"TC-001\", \"type\": \"SALES\" }, \"taxAmount\": 0.5, \"taxCode\": \"GST7\", \"tdsAccount\": \"AC-0000011\", \"tdsAmount\": 100, \"tdsId\": 1, \"tdsRate\": 10.1, \"totalAmount\": 2.3, \"unitPrice\": 0.7 } ], \"purchaseInvoiceRecurring\": { \"id\": 2, \"invoiceRecurringCount\": 1, \"recurrenceEndDate\": \"25-10-2019\", \"recurrenceFrequency\": \"WEEK\", \"recurrenceType\": 1 }, \"purchaseInvoiceType\": \"INVENTORY\", \"purchaseOrderRefNo\": \"CPO001\", \"receiveGoodsStatus\": \"FULLY_RECEIVED\", \"receivedComplete\": false, \"recurring\": true, \"recurringActivated\": false, \"sequenceFormat\": 1, \"shipFrom\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"shipTo\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"status\": \"OPEN\", \"supplierInvoiceNo\": \"string\", \"taxAmount\": 2.322, \"totalAmount\": 12.322, \"totalAmountInBaseCurrency\": 12.322, \"totalTdsAmount\": 12.32, \"unitPriceGstInclusive\": false, \"warehouseCode\": \"WH-000001\"}"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequest](#purchaseinvoicerequest) |

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
        "module": "Billing",
        "value": "Extra Information"
    }
  ],
  "documentSequenceCode": "0000001",
  "draft": false,
  "dropShip": true,
  "dueAmount": 12.322,
  "exchangeRate": 0.456345,
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
  "payableAccountCode": "AC-000001",
  "purchaseInvoiceAccounts": [
    {
      "accountCode": "P00001",
      "accountDescription": "Apple watch",
      "accountOrder": 1,
      "amount": 2,
      "discount": 2,
      "discountInPercent": true,
      "id": 2,
      "taxAmount": 0.5,
      "taxCode": "GST7",
      "totalAmount": 2.3
    }
  ],
  "purchaseInvoiceDate": "25-10-2019",
  "purchaseInvoiceDueDate": "25-10-2019",
  "purchaseInvoiceProducts": [
    {
      "customField": [
        {
          "label": "Label",
          "module": "Billing",
          "value": "Extra Information"
        }
      ],
      "discount": 2,
      "discountInPercent": true,
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
      "purchaseInvoiceItemCode": "PII-000001",
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
      "tdsAccount": "AC-0000011",
      "tdsAmount": 100,
      "tdsId": 1,
      "tdsRate": 10.1,
      "totalAmount": 2.3,
      "unitPrice": 0.7
    }
  ],
  "purchaseInvoiceRecurring": {
    "id": 2,
    "invoiceRecurringCount": 1,
    "recurrenceEndDate": "25-10-2019",
    "recurrenceFrequency": "WEEK",
    "recurrenceType": 1
  },
  "purchaseInvoiceType": "INVENTORY",
  "purchaseOrderRefNo": "CPO001",
  "receiveGoodsStatus": "FULLY_RECEIVED",
  "receivedComplete": false,
  "recurring": true,
  "recurringActivated": false,
  "sequenceFormat": 1,
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
  "supplierInvoiceNo": "INV0001",
  "taxAmount": 2.322,
  "totalAmount": 12.322,
  "totalAmountInBaseCurrency": 12.322,
  "totalTdsAmount": 12.32,
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
        "module": "Billing",
        "value": "Extra Information"
    }
  ],
  "documentSequenceCode": "0000001",
  "draft": false,
  "dropShip": true,
  "dueAmount": 12.322,
  "exchangeRate": 0.456345,
  "id": 1,
  "journalEntryCode": "JE0001",
  "knockoffInfo": [
    {
      "amount": 0,
      "currency": "SGD",
      "documentCode": "DOC0001",
      "documentDate": "2020-06-16T04:52:59.953Z",
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
  "payableAccountCode": "AC-000001",
  "paymentStatus": "PENDING",
  "purchaseInvoiceAccounts": [
    {
      "accountCode": "P00001",
      "accountDescription": "Apple watch",
      "accountOrder": 1,
      "amount": 2,
      "discount": 2,
      "discountInPercent": true,
      "id": 2,
      "taxAmount": 0.5,
      "taxCode": "GST7",
      "totalAmount": 2.3
    }
  ],
  "purchaseInvoiceCode": "SI001",
  "purchaseInvoiceDate": "25-10-2019",
  "purchaseInvoiceDueDate": "25-10-2019",
  "purchaseInvoiceProducts": [
    {
      "customField": [
        {
          "label": "Label",
          "module": "Billing",
          "value": "Extra Information"
        }
      ],
      "discount": 2,
      "discountInPercent": true,
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
      "purchaseInvoiceItemCode": "PII-000001",
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
      "tdsAccount": "AC-0000011",
      "tdsAmount": 100,
      "tdsId": 1,
      "tdsRate": 10.1,
      "totalAmount": 2.3,
      "unitPrice": 0.7
    }
  ],
  "purchaseInvoiceRecurring": {
    "id": 2,
    "invoiceRecurringCount": 1,
    "recurrenceEndDate": "25-10-2019",
    "recurrenceFrequency": "WEEK",
    "recurrenceType": 1
  },
  "purchaseInvoiceType": "INVENTORY",
  "purchaseOrderRefNo": "CPO001",
  "receiveGoodsStatus": "UNRECEIVED",
  "recurring": true,
  "recurringActivated": false,
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
  "supplierInvoiceNo": "INV0001",
  "taxAmount": 2.322,
  "totalAmount": 12.322,
  "totalAmountInBaseCurrency": 12.322,
  "totalTdsAmount": 12.32,
  "unitPriceGstInclusive": false,
  "warehouseCode": "WH-000001"
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Invoice has been updated successfully. | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |
| 201 | Created |  |
| 400 | Purchase invoice draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---

### Retrieve Bill

Get bill by code. [More about retrieve bill](https://deskera.docs.apiary.io/#reference/bill-apis/v1invoicespurchasecode/get-bill-by-code)

##### Description:

- Allows you to retrieve an existing bill details by it's code.

#### GET
#### /v1/invoices/purchase/{code}
##### Request URL

```java
https://bifrost.deskera.com/v1/invoices/purchase/BI001
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/invoices/purchase/BI001" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
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
      "module": "Billing",
      "value": "Extra information"
    }
  ],
  "documentSequenceCode": "0000001",
  "draft": false,
  "dropShip": true,
  "dueAmount": 12.322,
  "exchangeRate": 0.456345,
  "id": 1,
  "journalEntryCode": "JE0001",
  "knockoffInfo": [
    {
      "amount": 0,
      "currency": "SGD",
      "documentCode": "DOC001",
      "documentDate": "2020-06-16T04:56:11.432Z",
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
  "payableAccountCode": "AC-000001",
  "paymentStatus": "PENDING",
  "purchaseInvoiceAccounts": [
    {
      "accountCode": "P00001",
      "accountDescription": "Apple watch",
      "accountOrder": 1,
      "amount": 2,
      "discount": 2,
      "discountInPercent": true,
      "id": 2,
      "taxAmount": 0.5,
      "taxCode": "GST7",
      "totalAmount": 2.3
    }
  ],
  "purchaseInvoiceCode": "SI001",
  "purchaseInvoiceDate": "25-10-2019",
  "purchaseInvoiceDueDate": "25-10-2019",
  "purchaseInvoiceProducts": [
    {
      "customField": [
        {
          "label": "Label",
          "module": "Billing",
          "value": "Extra Information"
        }
      ],
      "discount": 2,
      "discountInPercent": true,
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
      "purchaseInvoiceItemCode": "PII-000001",
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
      "tdsAccount": "AC-0000011",
      "tdsAmount": 100,
      "tdsId": 1,
      "tdsRate": 10.1,
      "totalAmount": 2.3,
      "unitPrice": 0.7
    }
  ],
  "purchaseInvoiceRecurring": {
    "id": 2,
    "invoiceRecurringCount": 1,
    "recurrenceEndDate": "25-10-2019",
    "recurrenceFrequency": "WEEK",
    "recurrenceType": 1
  },
  "purchaseInvoiceType": "INVENTORY",
  "purchaseOrderRefNo": "CPO001",
  "receiveGoodsStatus": "UNRECEIVED",
  "recurring": true,
  "recurringActivated": false,
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
  "supplierInvoiceNo": "INV0001",
  "taxAmount": 2.322,
  "totalAmount": 12.322,
  "totalAmountInBaseCurrency": 12.322,
  "totalTdsAmount": 12.32,
  "unitPriceGstInclusive": false,
  "warehouseCode": "WH-000001"
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

## Models

---

### PurchaseInvoiceRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachmentIds | [ integer ] |  | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase invoice is backorder | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact details | Yes |
| contactCode | string | Contact Code | Yes |
| currency | string | Currency | Yes |
| documentSequenceCode | string | Bill Code | No |
| draft | boolean | True if want to save as draft. | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase invoice is created for drop ship | No |
| dueAmount | number | Amount Due | No |
| exchangeRate | number | Exchange rate | No |
| journalEntryCode | string | Journal Entry Code | No |
| memo | string | Memo | No |
| openingDocumentNumber | string | Customer opening document number | No |
| openingInvoice | boolean | True if opening invoice | No |
| payableAccountCode | string | Code of Account | No |
| purchaseInvoiceDate | string | Purchase Invoice date | Yes |
| purchaseInvoiceDueDate | string | Purchase Invoice due date | Yes |
| purchaseInvoiceType | string | Purchase invoice type. | Yes |
| purchaseOrderRefNo | string | Contact PO reference number | No |
| receiveGoodsStatus | string | receipt goods status | No |
| receivedComplete | boolean | True if auto received is required. | No |
| recurring | boolean | True if Invoice is recurring. | No |
| recurringActivated | boolean | True if Invoice recurrence is active. | No |
| sequenceFormat | string | Sequence Format Id | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Invoice status | No |
| supplierInvoiceNo | string |  | No |
| taxAmount | number | Tax amount | No |
| totalAmount | number | Total amount | No |
| totalAmountInBaseCurrency | number | Total amount in base currency | No |
| totalTdsAmount | number | Total Tds Amount | No |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive | No |
| warehouseCode | string | Warehouse Code | No |

### PurchaseInvoiceResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachmentIds | [ integer ] |  | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase invoice is backorder | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact details | Yes |
| contactCode | string | Contact Code | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| currency | string | Currency | Yes |
| documentSequenceCode | string | Purchase invoice Sequence Code | No |
| draft | boolean | Purchase invoice drafted | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase invoice is created for drop ship | No |
| dueAmount | number | Amount Due | No |
| exchangeRate | number | Exchange rate | No |
| id | long | Purchase invoice id | No |
| journalEntryCode | string | Journal Entry Code | No |
| memo | string | Memo | No |
| openingDocumentNumber | string | Customer opening document number | No |
| openingInvoice | boolean | True if opening invoice | No |
| payableAccountCode | string | Code of Account | No |
| paymentStatus | string | Purchase invoice payment status | No |
| purchaseInvoiceCode | string | Purchase invoice code | No |
| purchaseInvoiceDate | string | Purchase Invoice date | Yes |
| purchaseInvoiceDueDate | string | Purchase Invoice due date | Yes |
| purchaseInvoiceType | string | Purchase invoice type. | Yes |
| purchaseOrderRefNo | string | Contact PO reference number | No |
| receiveGoodsStatus | string | Purchase invoice receipt status | No |
| recurring | boolean | True if Invoice is recurring. | No |
| recurringActivated | boolean | True if Invoice recurrence is active. | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Invoice status | No |
| supplierInvoiceNo | string |  | No |
| taxAmount | number | Tax amount | No |
| totalAmount | number | Total amount | No |
| totalAmountInBaseCurrency | number | Total amount in base currency | No |
| totalTdsAmount | number | Total Tds Amount | No |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive | No |
| warehouseCode | string | Warehouse Code | No |


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

### ContactInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | string | Address | Yes |
| name | string | Contact name | Yes |