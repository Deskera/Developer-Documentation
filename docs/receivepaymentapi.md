---
id: receivepaymentapi
title: Receive Payment APIs
sidebar_label: Receive Payment
---
Receive Payment will be under the sell module. You will be able to generate receipt for the payment made by the customer. The record would be saved and can be viewed from Payments Received in Transaction Records.

If you receive a payment (either full or partial payment) from a customer or make a payment to a vendor without making reference to a specific invoice this can be treated as a payment on account.

`PaymentDto` helps you to receive new payment, retrieve a particular payment, update payment, or retrieve a list of payments.

More about [Receive Payment API documentation](https://deskera.docs.apiary.io/#reference/receive-payments-apis)

## API
---
### Search Payment

Get receive payments by filter criteria. [More about search payment](https://deskera.docs.apiary.io/#reference/receive-payments-apis/v1paymentsreceive/get-receive-payments-by-filter-criteria)

##### Description:

- Allows you to retrieve a list of all receive payments.
- Allows you to retrieve specific receive payments based on it's filter criteria.

#### GET
#### /v1/payments/receive
##### Request URL

```java
https://bifrost.deskera.com/v1/payments/receive
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/payments/receive?limit=10&page=0&sort=createdAt&sortDir=desc" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
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
      "accountCodePayTo": "AC-001",
      "accountName": "Bank",
      "amount": 10,
      "billTo": {
        "address1": "218, Robinson Road",
        "address2": "Downtown",
        "city": "C001",
        "country": "C001",
        "postalCode": 123456,
        "preferred": true,
        "state": "CS001"
      },
      "contactCode": 19425,
      "contactName": "ABC PTE LTD",
      "currency": "SGD",
      "documentDate": "2019-09-27",
      "exchangeRate": 0.01891562,
      "memo": "Sales quotation",
      "paymentType": "BANK_TRANSFER",
      "receivePaymentFeeDtoList": [
        {

        }
      ],
      "receivePaymentItemDtoList": [
        {
          "accountName": "Bank",
          "description": "General ledger for account.",
          "documentCode": "AC-001",
          "documentType": "General Ledger",
          "exchangeRate": 0.01891562,
          "paymentAmount": 10.5,
          "taxAmount": 0.7,
          "taxCode": "GST@7",
          "taxList": [
            {
              "id": 0,
              "taxAmount": 0,
              "taxCode": "string",
              "taxRate": 0,
              "taxSeqCode": "string",
              "taxType": "string",
              "taxableAmount": 0
            }
          ]
        }
      ],
      "referenceDate": "2019-09-27",
      "referenceNumber": "CH001",
      "salesInvoice": {
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
            "module": "string",
            "value": "XYZ"
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
            "currency": "string",
            "documentCode": "string",
            "documentDate": "2020-06-16T09:39:58.626Z",
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
                "module": "string",
                "value": "XYZ"
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
            "documentCode": "string",
            "tdsAccountCode": "string",
            "tdsAmount": 0
          }
        ],
        "totalAmount": 12.322,
        "totalAmountInBaseCurrency": 12.322,
        "unitPriceGstInclusive": false,
        "warehouseCode": "WH-000001",
        "withheldAmount": 12.322
      },
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
      }
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
  "totalPages": 0,
  "last": true,
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
| 200 | Receive Payment's have been fetched successfully. | [ReceivePaymentDto](#receivepaymentdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Receive Payment

Receive a new payment. [More about receive payment](https://deskera.docs.apiary.io/#reference/receive-payments-apis/v1paymentsreceive/receive-a-new-payment)

##### Description:

- Allows you to receive a new payment.

#### POST
#### /v1/payments/receive
##### Request URL

```java
https://bifrost.deskera.com/v1/payments/receive
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/payments/receive" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"accountCodePayTo\": \"AC-001\", \"accountName\": \"Bank\", \"amount\": 10, \"billTo\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"contactCode\": 19425, \"contactName\": \"ABC PTE LTD\", \"currency\": \"SGD\", \"documentDate\": \"2019-09-27\", \"exchangeRate\": 0.01891562, \"memo\": \"Sales quotation\", \"paymentType\": \"BANK_TRANSFER\", \"receivePaymentFeeDtoList\": [ {} ], \"receivePaymentItemDtoList\": [ { \"accountName\": \"Bank\", \"description\": \"General ledger for account.\", \"documentCode\": \"AC-001\", \"documentType\": \"General Ledger\", \"exchangeRate\": 0.01891562, \"paymentAmount\": 10.5, \"taxAmount\": 0.7, \"taxCode\": \"GST@7\", \"taxList\": [ { \"id\": 0, \"taxAmount\": 0, \"taxCode\": \"string\", \"taxRate\": 0, \"taxSeqCode\": \"string\", \"taxType\": \"string\", \"taxableAmount\": 0 } ] } ], \"referenceDate\": \"2019-09-27\", \"referenceNumber\": \"CH001\", \"salesInvoice\": { \"attachmentIds\": [ 0 ], \"attachments\": [ \"string\" ], \"backOrder\": true, \"billTo\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"contact\": { \"address\": \"Raffles Place 1\", \"name\": \"ABC Pte Ltd\", \"peppolId\": \"u000:1109:uen\" }, \"contactCode\": \"C0001\", \"contactDto\": { \"attentionTo\": \"Peter Parker\", \"billingAddress\": [ { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" } ], \"businessUnit\": \"CAA01 - Cvl Avtn Authrty of Singapore\", \"currencyCode\": \"SGD\", \"customField\": { \"field1\": \"value1\", \"field2\": \"value2\" }, \"documentSequenceCode\": \"C-0000001\", \"emailId\": \"myinfo@domain.com\", \"invoices\": { \"additionalProp1\": [ { \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"purchaseOrderRefNo\": \"CPO001\", \"supplierInvoiceNo\": \"CSI001\", \"taxAmount\": 1, \"totalAmount\": 46, \"type\": \"sale_invoice\" } ], \"additionalProp2\": [ { \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"purchaseOrderRefNo\": \"CPO001\", \"supplierInvoiceNo\": \"CSI001\", \"taxAmount\": 1, \"totalAmount\": 46, \"type\": \"sale_invoice\" } ], \"additionalProp3\": [ { \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"purchaseOrderRefNo\": \"CPO001\", \"supplierInvoiceNo\": \"CSI001\", \"taxAmount\": 1, \"totalAmount\": 46, \"type\": \"sale_invoice\" } ] }, \"name\": \"Sam\", \"payableAccountCode\": \"AC002\", \"paymentTermCode\": \"Net 0\", \"peppolId\": \"u000:11::11293\", \"receivableAccountCode\": \"AC001\", \"sequenceFormat\": 1, \"shippingAddress\": [ { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" } ], \"singaporeGovt\": true, \"taxExempted\": true, \"taxExemptionNo\": \"234s-few3-2422\", \"taxExemptionReason\": \"Resale, Federal Agency\", \"taxNumber\": 123456, \"uen\": \"DHJEUK\" }, \"currency\": \"C001\", \"customField\": [ { \"label\": \"Label\", \"module\": \"string\", \"value\": \"XYZ\" } ], \"documentSequenceCode\": \"0000001\", \"draft\": false, \"dropShip\": true, \"dueAmount\": 12.322, \"exchangeRate\": 0.456345, \"fulfillmentStatus\": \"UNFULFILLED\", \"fulfillmentType\": \"PICK_PACK_SHIP\", \"id\": 1, \"journalEntryCode\": \"JE0001\", \"knockoffInfo\": [ { \"amount\": 0, \"currency\": \"string\", \"documentCode\": \"string\", \"documentDate\": \"2020-06-16T09:41:44.334Z\", \"documentOrder\": 0, \"documentType\": \"QUOTATION\", \"exchangeRate\": 0 } ], \"linkedDocuments\": [ { \"documentCode\": \"QO-0000001\", \"documentSequenceCode\": \"0000001\", \"documentType\": \"QUOTATION\" } ], \"memo\": \"Memo details\", \"openingDocumentNumber\": \"DC-0001\", \"openingInvoice\": false, \"paymentStatus\": \"PENDING\", \"purchaseOrderRefNo\": \"CPO001\", \"recurring\": true, \"recurringActivated\": false, \"salesInvoiceCode\": \"SI001\", \"salesInvoiceDate\": \"25-10-2019\", \"salesInvoiceDueDate\": \"25-10-2019\", \"salesInvoiceItems\": [ { \"availableQuantity\": 3, \"customField\": [ { \"label\": \"Label\", \"module\": \"string\", \"value\": \"XYZ\" } ], \"discount\": 2, \"discountInPercent\": true, \"documentSequenceCode\": \"P-0000001\", \"id\": 2, \"invoiceLineNumber\": \"ABSCDDSD1212\", \"product\": { \"active\": true, \"barcode\": 2365234, \"bomAddCostConfiguration\": [ { \"label\": \"Labour charges\", \"price\": 10.5 } ], \"bomProductsConfiguration\": [ { \"itemId\": 1234, \"itemName\": \"Apple\", \"quantity\": 10.5 } ], \"categoryCode\": \"AB0001\", \"categoryDesc\": \"Medical Equipment\", \"customField\": { \"field1\": \"value1\", \"field2\": \"value2\" }, \"deleted\": true, \"description\": \"Description\", \"documentSequenceCode\": \"P-0000001\", \"id\": 1234, \"images\": [ \"string\" ], \"inventory\": { \"availableQuantity\": 100, \"costOfGoodsSoldAccountCode\": \"A-10231\", \"inventoryAccountCode\": \"A-10232\", \"inventoryAccountName\": \"Inventory Account\", \"openingQuantity\": 10, \"openingValuation\": 100.4, \"stockAdjustmentAccountCode\": \"A-10234\", \"warehouseCode\": \"WH-00001\" }, \"manufacturingCostAccountCode\": \"AC-0000012\", \"name\": \"Apple\", \"productId\": \"P000011\", \"purchaseAccountCode\": \"A-0012\", \"purchasePrice\": 123.33, \"purchasePriceTaxInclusive\": true, \"purchaseReturnAccountCode\": \"A-0014\", \"purchaseTaxCode\": \"T-001\", \"reorderEnabled\": true, \"reorderLevel\": 100, \"salesAccountCode\": \"A-0013\", \"salesPrice\": 120, \"salesPriceTaxInclusive\": false, \"salesReturnAccountCode\": \"A-0015\", \"salesTaxCode\": \"T-002\", \"sequenceFormat\": 1, \"stockUom\": 2, \"taxable\": true, \"type\": \"TRACKED\" }, \"productCode\": \"P00001\", \"productDescription\": \"Apple watch\", \"productOrder\": 1, \"productQuantity\": 2, \"salesInvoiceItemCode\": \"SII-000001\", \"tax\": { \"accountCode\": \"AC-001\", \"code\": \"TC-001\", \"deleted\": false, \"description\": \"sales Tax for SG\", \"name\": \"SGST\", \"percent\": 7, \"status\": \"active\", \"taxCode\": \"TC-001\", \"type\": \"SALES\" }, \"taxAmount\": 0.5, \"taxCode\": \"GST7\", \"totalAmount\": 2.3, \"type\": \"TRACKED\", \"unitPrice\": 0.7 } ], \"salesInvoiceRecurring\": { \"id\": 2, \"invoiceRecurringCount\": 1, \"recurrenceEndDate\": \"25-10-2019\", \"recurrenceFrequency\": \"WEEK\", \"recurrenceType\": 1 }, \"shipByDate\": \"25-10-2019\", \"shipFrom\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"shipTo\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"status\": \"OPEN\", \"taxAmount\": 2.322, \"tdsInfo\": [ { \"documentCode\": \"string\", \"tdsAccountCode\": \"string\", \"tdsAmount\": 0 } ], \"totalAmount\": 12.322, \"totalAmountInBaseCurrency\": 12.322, \"unitPriceGstInclusive\": false, \"warehouseCode\": \"WH-000001\", \"withheldAmount\": 12.322 }, \"shipFrom\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"shipTo\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }}"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| receivePaymentDto | body | receivePaymentDto | Yes | [ReceivePaymentDto](#receivepaymentdto) |

##### Sample Request
```java
{
  "accountCodePayTo": "AC-001",
  "accountName": "Bank",
  "amount": 10,
  "billTo": {
    "address1": "218, Robinson Road",
    "address2": "Downtown",
    "city": "C001",
    "country": "C001",
    "postalCode": 123456,
    "preferred": true,
    "state": "CS001"
  },
  "contactCode": 19425,
  "contactName": "ABC PTE LTD",
  "currency": "SGD",
  "documentDate": "2019-09-27",
  "exchangeRate": 0.01891562,
  "memo": "Sales quotation",
  "paymentType": "BANK_TRANSFER",
  "receivePaymentFeeDtoList": [
    {}
  ],
  "receivePaymentItemDtoList": [
    {
      "accountName": "Bank",
      "description": "General ledger for account.",
      "documentCode": "AC-001",
      "documentType": "General Ledger",
      "exchangeRate": 0.01891562,
      "paymentAmount": 10.5,
      "taxAmount": 0.7,
      "taxCode": "GST@7",
      "taxList": [
        {
          "id": 0,
          "taxAmount": 0,
          "taxCode": "string",
          "taxRate": 0,
          "taxSeqCode": "string",
          "taxType": "string",
          "taxableAmount": 0
        }
      ]
    }
  ],
  "referenceDate": "2019-09-27",
  "referenceNumber": "CH001",
  "salesInvoice": {
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
        "module": "string",
        "value": "XYZ"
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
        "currency": "string",
        "documentCode": "string",
        "documentDate": "2020-06-16T09:41:44.334Z",
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
            "module": "string",
            "value": "XYZ"
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
        "documentCode": "string",
        "tdsAccountCode": "string",
        "tdsAmount": 0
      }
    ],
    "totalAmount": 12.322,
    "totalAmountInBaseCurrency": 12.322,
    "unitPriceGstInclusive": false,
    "warehouseCode": "WH-000001",
    "withheldAmount": 12.322
  },
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
  }
}
```

##### Sample Response
```java
{
  "accountCodePayTo": "AC-001",
  "accountName": "Bank",
  "amount": 10,
  "billTo": {
    "address1": "218, Robinson Road",
    "address2": "Downtown",
    "city": "C001",
    "country": "C001",
    "postalCode": 123456,
    "preferred": true,
    "state": "CS001"
  },
  "contactCode": 19425,
  "contactName": "ABC PTE LTD",
  "currency": "SGD",
  "documentDate": "2019-09-27",
  "exchangeRate": 0.01891562,
  "memo": "Sales quotation",
  "paymentType": "BANK_TRANSFER",
  "receivePaymentFeeDtoList": [
    {}
  ],
  "receivePaymentItemDtoList": [
    {
      "accountName": "Bank",
      "description": "General ledger for account.",
      "documentCode": "AC-001",
      "documentType": "General Ledger",
      "exchangeRate": 0.01891562,
      "paymentAmount": 10.5,
      "taxAmount": 0.7,
      "taxCode": "GST@7",
      "taxList": [
        {
          "id": 0,
          "taxAmount": 0,
          "taxCode": "string",
          "taxRate": 0,
          "taxSeqCode": "string",
          "taxType": "string",
          "taxableAmount": 0
        }
      ]
    }
  ],
  "referenceDate": "2019-09-27",
  "referenceNumber": "CH001",
  "salesInvoice": {
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
        "module": "string",
        "value": "XYZ"
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
        "currency": "string",
        "documentCode": "string",
        "documentDate": "2020-06-16T09:42:30.872Z",
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
            "module": "string",
            "value": "XYZ"
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
        "documentCode": "string",
        "tdsAccountCode": "string",
        "tdsAmount": 0
      }
    ],
    "totalAmount": 12.322,
    "totalAmountInBaseCurrency": 12.322,
    "unitPriceGstInclusive": false,
    "warehouseCode": "WH-000001",
    "withheldAmount": 12.322
  },
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
  }
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ReceivePaymentDto](#receivepaymentdto) |
| 201 | Payment has been done successfully. | [ReceivePaymentDto](#receivepaymentdto) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Update Payment

Update recieve payment information. [More about update payment](https://deskera.docs.apiary.io/#reference/receive-payments-apis/v1paymentsreceiveid/update-recieve-payment-information)

##### Description:

- Allows you to update a specific recieve payment information.

#### PUT
#### /v1/payments/receive/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/payments/receive/1
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/payments/receive/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"accountCodePayTo\": \"AC-001\", \"accountName\": \"Bank\", \"amount\": 10, \"billTo\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"contactCode\": 19425, \"contactName\": \"ABC PTE LTD\", \"currency\": \"SGD\", \"documentDate\": \"2019-09-27\", \"exchangeRate\": 0.01891562, \"memo\": \"Sales quotation\", \"paymentType\": \"BANK_TRANSFER\", \"receivePaymentFeeDtoList\": [ {} ], \"receivePaymentItemDtoList\": [ { \"accountName\": \"Bank\", \"description\": \"General ledger for account.\", \"documentCode\": \"AC-001\", \"documentType\": \"General Ledger\", \"exchangeRate\": 0.01891562, \"paymentAmount\": 10.5, \"taxAmount\": 0.7, \"taxCode\": \"GST@7\", \"taxList\": [ { \"id\": 0, \"taxAmount\": 0, \"taxCode\": \"string\", \"taxRate\": 0, \"taxSeqCode\": \"string\", \"taxType\": \"string\", \"taxableAmount\": 0 } ] } ], \"referenceDate\": \"2019-09-27\", \"referenceNumber\": \"CH001\", \"salesInvoice\": { \"attachmentIds\": [ 0 ], \"attachments\": [ \"string\" ], \"backOrder\": true, \"billTo\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"contact\": { \"address\": \"Raffles Place 1\", \"name\": \"ABC Pte Ltd\", \"peppolId\": \"u000:1109:uen\" }, \"contactCode\": \"C0001\", \"contactDto\": { \"attentionTo\": \"Peter Parker\", \"billingAddress\": [ { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" } ], \"businessUnit\": \"CAA01 - Cvl Avtn Authrty of Singapore\", \"currencyCode\": \"SGD\", \"customField\": { \"field1\": \"value1\", \"field2\": \"value2\" }, \"documentSequenceCode\": \"C-0000001\", \"emailId\": \"myinfo@domain.com\", \"invoices\": { \"additionalProp1\": [ { \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"purchaseOrderRefNo\": \"CPO001\", \"supplierInvoiceNo\": \"CSI001\", \"taxAmount\": 1, \"totalAmount\": 46, \"type\": \"sale_invoice\" } ], \"additionalProp2\": [ { \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"purchaseOrderRefNo\": \"CPO001\", \"supplierInvoiceNo\": \"CSI001\", \"taxAmount\": 1, \"totalAmount\": 46, \"type\": \"sale_invoice\" } ], \"additionalProp3\": [ { \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"purchaseOrderRefNo\": \"CPO001\", \"supplierInvoiceNo\": \"CSI001\", \"taxAmount\": 1, \"totalAmount\": 46, \"type\": \"sale_invoice\" } ] }, \"name\": \"Sam\", \"payableAccountCode\": \"AC002\", \"paymentTermCode\": \"Net 0\", \"peppolId\": \"u000:11::11293\", \"receivableAccountCode\": \"AC001\", \"sequenceFormat\": 1, \"shippingAddress\": [ { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" } ], \"singaporeGovt\": true, \"taxExempted\": true, \"taxExemptionNo\": \"234s-few3-2422\", \"taxExemptionReason\": \"Resale, Federal Agency\", \"taxNumber\": 123456, \"uen\": \"DHJEUK\" }, \"currency\": \"C001\", \"customField\": [ { \"label\": \"Label\", \"module\": \"string\", \"value\": \"XYZ\" } ], \"documentSequenceCode\": \"0000001\", \"draft\": false, \"dropShip\": true, \"dueAmount\": 12.322, \"exchangeRate\": 0.456345, \"fulfillmentStatus\": \"UNFULFILLED\", \"fulfillmentType\": \"PICK_PACK_SHIP\", \"id\": 1, \"journalEntryCode\": \"JE0001\", \"knockoffInfo\": [ { \"amount\": 0, \"currency\": \"string\", \"documentCode\": \"string\", \"documentDate\": \"2020-06-16T09:44:03.304Z\", \"documentOrder\": 0, \"documentType\": \"QUOTATION\", \"exchangeRate\": 0 } ], \"linkedDocuments\": [ { \"documentCode\": \"QO-0000001\", \"documentSequenceCode\": \"0000001\", \"documentType\": \"QUOTATION\" } ], \"memo\": \"Memo details\", \"openingDocumentNumber\": \"DC-0001\", \"openingInvoice\": false, \"paymentStatus\": \"PENDING\", \"purchaseOrderRefNo\": \"CPO001\", \"recurring\": true, \"recurringActivated\": false, \"salesInvoiceCode\": \"SI001\", \"salesInvoiceDate\": \"25-10-2019\", \"salesInvoiceDueDate\": \"25-10-2019\", \"salesInvoiceItems\": [ { \"availableQuantity\": 3, \"customField\": [ { \"label\": \"Label\", \"module\": \"string\", \"value\": \"XYZ\" } ], \"discount\": 2, \"discountInPercent\": true, \"documentSequenceCode\": \"P-0000001\", \"id\": 2, \"invoiceLineNumber\": \"ABSCDDSD1212\", \"product\": { \"active\": true, \"barcode\": 2365234, \"bomAddCostConfiguration\": [ { \"label\": \"Labour charges\", \"price\": 10.5 } ], \"bomProductsConfiguration\": [ { \"itemId\": 1234, \"itemName\": \"Apple\", \"quantity\": 10.5 } ], \"categoryCode\": \"AB0001\", \"categoryDesc\": \"Medical Equipment\", \"customField\": { \"field1\": \"value1\", \"field2\": \"value2\" }, \"deleted\": true, \"description\": \"Description\", \"documentSequenceCode\": \"P-0000001\", \"id\": 1234, \"images\": [ \"string\" ], \"inventory\": { \"availableQuantity\": 100, \"costOfGoodsSoldAccountCode\": \"A-10231\", \"inventoryAccountCode\": \"A-10232\", \"inventoryAccountName\": \"Inventory Account\", \"openingQuantity\": 10, \"openingValuation\": 100.4, \"stockAdjustmentAccountCode\": \"A-10234\", \"warehouseCode\": \"WH-00001\" }, \"manufacturingCostAccountCode\": \"AC-0000012\", \"name\": \"Apple\", \"productId\": \"P000011\", \"purchaseAccountCode\": \"A-0012\", \"purchasePrice\": 123.33, \"purchasePriceTaxInclusive\": true, \"purchaseReturnAccountCode\": \"A-0014\", \"purchaseTaxCode\": \"T-001\", \"reorderEnabled\": true, \"reorderLevel\": 100, \"salesAccountCode\": \"A-0013\", \"salesPrice\": 120, \"salesPriceTaxInclusive\": false, \"salesReturnAccountCode\": \"A-0015\", \"salesTaxCode\": \"T-002\", \"sequenceFormat\": 1, \"stockUom\": 2, \"taxable\": true, \"type\": \"TRACKED\" }, \"productCode\": \"P00001\", \"productDescription\": \"Apple watch\", \"productOrder\": 1, \"productQuantity\": 2, \"salesInvoiceItemCode\": \"SII-000001\", \"tax\": { \"accountCode\": \"AC-001\", \"code\": \"TC-001\", \"deleted\": false, \"description\": \"sales Tax for SG\", \"name\": \"SGST\", \"percent\": 7, \"status\": \"active\", \"taxCode\": \"TC-001\", \"type\": \"SALES\" }, \"taxAmount\": 0.5, \"taxCode\": \"GST7\", \"totalAmount\": 2.3, \"type\": \"TRACKED\", \"unitPrice\": 0.7 } ], \"salesInvoiceRecurring\": { \"id\": 2, \"invoiceRecurringCount\": 1, \"recurrenceEndDate\": \"25-10-2019\", \"recurrenceFrequency\": \"WEEK\", \"recurrenceType\": 1 }, \"shipByDate\": \"25-10-2019\", \"shipFrom\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"shipTo\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"status\": \"OPEN\", \"taxAmount\": 2.322, \"tdsInfo\": [ { \"documentCode\": \"string\", \"tdsAccountCode\": \"string\", \"tdsAmount\": 0 } ], \"totalAmount\": 12.322, \"totalAmountInBaseCurrency\": 12.322, \"unitPriceGstInclusive\": false, \"warehouseCode\": \"WH-000001\", \"withheldAmount\": 12.322 }, \"shipFrom\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"shipTo\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }}"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| receivePaymentDto | body | receivePaymentDto | Yes | [ReceivePaymentDto](#receivepaymentdto) |

##### Sample request
```java
{
  "accountCodePayTo": "AC-001",
  "accountName": "Bank",
  "amount": 10,
  "billTo": {
    "address1": "218, Robinson Road",
    "address2": "Downtown",
    "city": "C001",
    "country": "C001",
    "postalCode": 123456,
    "preferred": true,
    "state": "CS001"
  },
  "contactCode": 19425,
  "contactName": "ABC PTE LTD",
  "currency": "SGD",
  "documentDate": "2019-09-27",
  "exchangeRate": 0.01891562,
  "memo": "Sales quotation",
  "paymentType": "BANK_TRANSFER",
  "receivePaymentFeeDtoList": [
    {}
  ],
  "receivePaymentItemDtoList": [
    {
      "accountName": "Bank",
      "description": "General ledger for account.",
      "documentCode": "AC-001",
      "documentType": "General Ledger",
      "exchangeRate": 0.01891562,
      "paymentAmount": 10.5,
      "taxAmount": 0.7,
      "taxCode": "GST@7",
      "taxList": [
        {
          "id": 0,
          "taxAmount": 0,
          "taxCode": "string",
          "taxRate": 0,
          "taxSeqCode": "string",
          "taxType": "string",
          "taxableAmount": 0
        }
      ]
    }
  ],
  "referenceDate": "2019-09-27",
  "referenceNumber": "CH001",
  "salesInvoice": {
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
        "module": "string",
        "value": "XYZ"
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
        "currency": "string",
        "documentCode": "string",
        "documentDate": "2020-06-16T09:44:03.304Z",
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
            "module": "string",
            "value": "XYZ"
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
        "documentCode": "string",
        "tdsAccountCode": "string",
        "tdsAmount": 0
      }
    ],
    "totalAmount": 12.322,
    "totalAmountInBaseCurrency": 12.322,
    "unitPriceGstInclusive": false,
    "warehouseCode": "WH-000001",
    "withheldAmount": 12.322
  },
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
  }
}
```

##### Sample Response
```java
{
  "accountCodePayTo": "AC-001",
  "accountName": "Bank",
  "amount": 10,
  "billTo": {
    "address1": "218, Robinson Road",
    "address2": "Downtown",
    "city": "C001",
    "country": "C001",
    "postalCode": 123456,
    "preferred": true,
    "state": "CS001"
  },
  "contactCode": 19425,
  "contactName": "ABC PTE LTD",
  "currency": "SGD",
  "documentDate": "2019-09-27",
  "exchangeRate": 0.01891562,
  "memo": "Sales quotation",
  "paymentType": "BANK_TRANSFER",
  "receivePaymentFeeDtoList": [
    {}
  ],
  "receivePaymentItemDtoList": [
    {
      "accountName": "Bank",
      "description": "General ledger for account.",
      "documentCode": "AC-001",
      "documentType": "General Ledger",
      "exchangeRate": 0.01891562,
      "paymentAmount": 10.5,
      "taxAmount": 0.7,
      "taxCode": "GST@7",
      "taxList": [
        {
          "id": 0,
          "taxAmount": 0,
          "taxCode": "string",
          "taxRate": 0,
          "taxSeqCode": "string",
          "taxType": "string",
          "taxableAmount": 0
        }
      ]
    }
  ],
  "referenceDate": "2019-09-27",
  "referenceNumber": "CH001",
  "salesInvoice": {
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
        "module": "string",
        "value": "XYZ"
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
        "currency": "string",
        "documentCode": "string",
        "documentDate": "2020-06-16T09:44:15.688Z",
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
            "module": "string",
            "value": "XYZ"
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
        "documentCode": "string",
        "tdsAccountCode": "string",
        "tdsAmount": 0
      }
    ],
    "totalAmount": 12.322,
    "totalAmountInBaseCurrency": 12.322,
    "unitPriceGstInclusive": false,
    "warehouseCode": "WH-000001",
    "withheldAmount": 12.322
  },
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
  }
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Payment has been updated successfully. | [ReceivePaymentDto](#receivepaymentdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

## Models

---

### ReceivePaymentDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayTo | string | Account code. | No |
| accountName | string | Account name. | No |
| amount | number | Payment amount. | No |
| billTo | [Address](#address) | Bill to address | No |
| contactCode | string | Contact code. | No |
| contactName | string | Contact name. | No |
| currency | string | Currency code. | No |
| documentDate | dateTime | Document date. | No |
| exchangeRate | number | Exchange rate. | No |
| memo | string | Memo text. | No |
| paymentType | string | Type of payment. | No |
| receivePaymentFeeDtoList | [ [ReceivePaymentFeeDto](#receivepaymentfeedto) ] | Transaction fee pertaining to the received payment | No |
| receivePaymentItemDtoList | [ [ReceivePaymentItemDto](#receivepaymentitemdto) ] | Receive payment items information. | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque. | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque. | No |
| salesInvoice | [SalesInvoiceResponse](#salesinvoiceresponse) |  | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |

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

### ReceivePaymentFeeDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ReceivePaymentFeeDto | object |  |  |

### ReceivePaymentItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string | Account name. | No |
| description | string | Description of document. | No |
| documentCode | string | Document code. | No |
| documentType | string | Document type. | No |
| exchangeRate | number | Exchange rate. | No |
| paymentAmount | number | Payment amount. | No |
| taxAmount | number | Tax amount. | No |
| taxCode | string | Tax code. | No |
| taxList | [ [TaxMappingDto](#taxmappingdto) ] |  | No |

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

### TaxMappingDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long |  | No |
| taxAmount | number |  | No |
| taxCode | string |  | No |
| taxRate | number |  | No |
| taxSeqCode | string |  | No |
| taxType | string |  | No |
| taxableAmount | number |  | No |