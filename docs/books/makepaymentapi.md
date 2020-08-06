---
id: makepaymentapi
title: Make Payment APIs
sidebar_label: Make Payment
---
You will be able to make payment for the goods purchased in buy module under bill. There will be 2 payment type - Cash or Bank transfer.

`PaymentDto` helps you to make new payment, retrieve a particular payment, update payment, or retrieve a list of payments.

More about [Make Payment API documentation](https://deskera.docs.apiary.io/#reference/make-payments-apis)

## API
---
### Search Payment
Get make payments by filter criteria. [More about search payment](https://deskera.docs.apiary.io/#reference/make-payments-apis/v1paymentsmake/get-make-payments-by-filter-criteria)

##### Description:

- Allows you to retrieve a list of all make payments.
- Allows you to retrieve a list of make payments based on it's filter criteria.

#### GET
#### /v1/payments/make
##### Request URL

```java
https://bifrost.deskera.com/v1/payments/make?limit=10&page=0&sort=createdAt&sortDir=desc
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/payments/make?limit=10&page=0&sort=createdAt&sortDir=desc" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
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
        "accountCodePayFrom": "AC-001",
        "accountName": "Bank",
        "amount": 10,
        "contactCode": 19425,
        "contactName": "ABC PTE LTD",
        "currency": "SGD",
        "documentDate": "2019-09-27",
        "exchangeRate": 0.01891562,
        "makePaymentItemDtoList": [
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
                "taxCode": "Tax10",
                "taxRate": 0,
                "taxSeqCode": "T001",
                "taxType": "string",
                "taxableAmount": 0
                }
            ]
            }
        ],
        "makePaymentRecurringDto": {
            "paymentMemo": {
            "paymentMemos": {
                "additionalProp1": "string",
                "additionalProp2": "string",
                "additionalProp3": "string"
            },
            "referenceDetails": {
                "additionalProp1": "string",
                "additionalProp2": "string",
                "additionalProp3": "string"
            }
            },
            "recurringEndDate": "2019-09-27",
            "recurringFrequency": 1,
            "recurringPaymentCount": 2,
            "recurringType": "WEEK"
        },
        "memo": "Sales quotation",
        "nextPaymentDate": "2019-09-27",
        "paymentType": "BANK_TRANSFER",
        "purchaseInvoice": {
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
                "module": "Make Payment",
                "value": "Information"
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
                "documentDate": "2020-06-16T08:31:02.810Z",
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
                "module": "Make Payment",
                "value": "Information"
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
        },
        "recurringActivated": false,
        "recurringPayment": false,
        "referenceDate": "2019-09-27",
        "referenceNumber": "CH001"
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
| 200 | Make Payment's have been fetched successfully. | [MakePaymentDto](#makepaymentdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Make Payment

Make a new payment. [More about make payment](https://deskera.docs.apiary.io/#reference/make-payments-apis/v1paymentsmake/make-a-new-payment)

##### Description:

- Allows you to make a new payment.


#### POST
#### /v1/payments/make
```java
https://bifrost.deskera.com/v1/payments/make
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/payments/make" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"documentDate\": \"2020-06-18\", \"closeDate\": \"2020-06-18\", \"amount\": 107, \"currency\": \"SGD\", \"exchangeRate\": 1, \"contactCode\": \"C-0000001\", \"accountCodePayFrom\": \"AC-0000002\", \"makePaymentItemDtoList\": [ { \"documentCode\": \"0000001\", \"documentType\": \"PURCHASE_INVOICE\", \"exchangeRate\": 1, \"paymentAmount\": 107 } ], \"paymentType\": \"CASH\"}"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDto](#makepaymentdto) |

##### Sample Request
```java
{
  "documentDate": "2020-06-18",
  "closeDate": "2020-06-18",
  "amount": 107,
  "currency": "SGD",
  "exchangeRate": 1,
  "contactCode": "C-0000001",
  "accountCodePayFrom": "AC-0000002",
  "makePaymentItemDtoList": [
    {
      "documentCode": "0000001",
      "documentType": "PURCHASE_INVOICE",
      "exchangeRate": 1,
      "paymentAmount": 107
    }
  ],
  "paymentType": "CASH"
}
```

##### Sample Response
```java
{
  "id": 4810,
  "parentPaymentId": null,
  "code": "MP-0000001",
  "jeCode": "JE-0000006",
  "contactCode": "C-0000001",
  "contactName": null,
  "currency": "SGD",
  "exchangeRate": 1,
  "accountCodePayFrom": "AC-0000002",
  "accountName": null,
  "paymentType": "CASH",
  "referenceNumber": null,
  "referenceDate": null,
  "amount": 107,
  "documentDate": "2020-06-18T00:00:00.000+0000",
  "memo": null,
  "recurringPayment": false,
  "recurringActivated": false,
  "nextPaymentDate": null,
  "deleted": false,
  "tenantId": 1,
  "makePaymentItemDtoList": [
    {
      "id": 5028,
      "documentType": "PURCHASE_INVOICE",
      "documentCode": "0000001",
      "description": null,
      "exchangeRate": 1,
      "paymentAmount": 107,
      "tenantId": 1,
      "accountName": null,
      "taxCode": null,
      "taxAmount": null,
      "whtRateInfo": null,
      "taxList": [

      ]
    }
  ],
  "makePaymentRecurringDto": null
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [MakePaymentDto](#makepaymentdto) |
| 201 | Payment has been done successfully. | [MakePaymentDto](#makepaymentdto) |
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

Update payment information. [More about update payment](https://deskera.docs.apiary.io/#reference/make-payments-apis/v1paymentsmakeid/update-payment-information)

##### Description:

- Allows you to update payment information.

#### PUT
#### /v1/payments/make/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/payments/make/1
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/payments/make/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"accountCodePayFrom\": \"AC-001\", \"accountName\": \"Bank\", \"amount\": 10, \"contactCode\": 19425, \"contactName\": \"ABC PTE LTD\", \"currency\": \"SGD\", \"documentDate\": \"2019-09-27\", \"exchangeRate\": 0.01891562, \"makePaymentItemDtoList\": [ { \"accountName\": \"Bank\", \"description\": \"General ledger for account.\", \"documentCode\": \"AC-001\", \"documentType\": \"General Ledger\", \"exchangeRate\": 0.01891562, \"paymentAmount\": 10.5, \"taxAmount\": 0.7, \"taxCode\": \"GST@7\", \"taxList\": [ { \"id\": 0, \"taxAmount\": 0, \"taxCode\": \"string\", \"taxRate\": 0, \"taxSeqCode\": \"string\", \"taxType\": \"string\", \"taxableAmount\": 0 } ] } ], \"makePaymentRecurringDto\": { \"paymentMemo\": { \"paymentMemos\": { \"additionalProp1\": \"string\", \"additionalProp2\": \"string\", \"additionalProp3\": \"string\" }, \"referenceDetails\": { \"additionalProp1\": \"string\", \"additionalProp2\": \"string\", \"additionalProp3\": \"string\" } }, \"recurringEndDate\": \"2019-09-27\", \"recurringFrequency\": 1, \"recurringPaymentCount\": 2, \"recurringType\": \"WEEK\" }, \"memo\": \"Sales quotation\", \"nextPaymentDate\": \"2019-09-27\", \"paymentType\": \"BANK_TRANSFER\", \"purchaseInvoice\": { \"attachmentIds\": [ 0 ], \"attachments\": [ \"string\" ], \"backOrder\": true, \"billTo\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"contact\": { \"address\": \"Raffles Place 1\", \"name\": \"ABC Pte Ltd\", \"peppolId\": \"u000:1109:uen\" }, \"contactCode\": \"C0001\", \"contactDto\": { \"attentionTo\": \"Peter Parker\", \"billingAddress\": [ { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" } ], \"businessUnit\": \"CAA01 - Cvl Avtn Authrty of Singapore\", \"currencyCode\": \"SGD\", \"customField\": { \"field1\": \"value1\", \"field2\": \"value2\" }, \"documentSequenceCode\": \"C-0000001\", \"emailId\": \"myinfo@domain.com\", \"invoices\": { \"additionalProp1\": [ { \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"purchaseOrderRefNo\": \"CPO001\", \"supplierInvoiceNo\": \"CSI001\", \"taxAmount\": 1, \"totalAmount\": 46, \"type\": \"sale_invoice\" } ], \"additionalProp2\": [ { \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"purchaseOrderRefNo\": \"CPO001\", \"supplierInvoiceNo\": \"CSI001\", \"taxAmount\": 1, \"totalAmount\": 46, \"type\": \"sale_invoice\" } ], \"additionalProp3\": [ { \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"purchaseOrderRefNo\": \"CPO001\", \"supplierInvoiceNo\": \"CSI001\", \"taxAmount\": 1, \"totalAmount\": 46, \"type\": \"sale_invoice\" } ] }, \"name\": \"Sam\", \"payableAccountCode\": \"AC002\", \"paymentTermCode\": \"Net 0\", \"peppolId\": \"u000:11::11293\", \"receivableAccountCode\": \"AC001\", \"sequenceFormat\": 1, \"shippingAddress\": [ { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" } ], \"singaporeGovt\": true, \"taxExempted\": true, \"taxExemptionNo\": \"234s-few3-2422\", \"taxExemptionReason\": \"Resale, Federal Agency\", \"taxNumber\": 123456, \"uen\": \"DHJEUK\" }, \"currency\": \"C001\", \"customField\": [ { \"label\": \"Label\", \"module\": \"string\", \"value\": \"XYZ\" } ], \"documentSequenceCode\": \"0000001\", \"draft\": false, \"dropShip\": true, \"dueAmount\": 12.322, \"exchangeRate\": 0.456345, \"id\": 1, \"journalEntryCode\": \"JE0001\", \"knockoffInfo\": [ { \"amount\": 0, \"currency\": \"string\", \"documentCode\": \"string\", \"documentDate\": \"2020-06-16T09:21:46.533Z\", \"documentOrder\": 0, \"documentType\": \"QUOTATION\", \"exchangeRate\": 0 } ], \"linkedDocuments\": [ { \"documentCode\": \"QO-0000001\", \"documentSequenceCode\": \"0000001\", \"documentType\": \"QUOTATION\" } ], \"memo\": \"Memo details\", \"openingDocumentNumber\": \"DC-0001\", \"openingInvoice\": false, \"payableAccountCode\": \"AC-000001\", \"paymentStatus\": \"PENDING\", \"purchaseInvoiceAccounts\": [ { \"accountCode\": \"P00001\", \"accountDescription\": \"Apple watch\", \"accountOrder\": 1, \"amount\": 2, \"discount\": 2, \"discountInPercent\": true, \"id\": 2, \"taxAmount\": 0.5, \"taxCode\": \"GST7\", \"totalAmount\": 2.3 } ], \"purchaseInvoiceCode\": \"SI001\", \"purchaseInvoiceDate\": \"25-10-2019\", \"purchaseInvoiceDueDate\": \"25-10-2019\", \"purchaseInvoiceProducts\": [ { \"customField\": [ { \"label\": \"Label\", \"module\": \"string\", \"value\": \"XYZ\" } ], \"discount\": 2, \"discountInPercent\": true, \"id\": 2, \"invoiceLineNumber\": \"ABSCDDSD1212\", \"product\": { \"active\": true, \"barcode\": 2365234, \"bomAddCostConfiguration\": [ { \"label\": \"Labour charges\", \"price\": 10.5 } ], \"bomProductsConfiguration\": [ { \"itemId\": 1234, \"itemName\": \"Apple\", \"quantity\": 10.5 } ], \"categoryCode\": \"AB0001\", \"categoryDesc\": \"Medical Equipment\", \"customField\": { \"field1\": \"value1\", \"field2\": \"value2\" }, \"deleted\": true, \"description\": \"Description\", \"documentSequenceCode\": \"P-0000001\", \"id\": 1234, \"images\": [ \"string\" ], \"inventory\": { \"availableQuantity\": 100, \"costOfGoodsSoldAccountCode\": \"A-10231\", \"inventoryAccountCode\": \"A-10232\", \"inventoryAccountName\": \"Inventory Account\", \"openingQuantity\": 10, \"openingValuation\": 100.4, \"stockAdjustmentAccountCode\": \"A-10234\", \"warehouseCode\": \"WH-00001\" }, \"manufacturingCostAccountCode\": \"AC-0000012\", \"name\": \"Apple\", \"productId\": \"P000011\", \"purchaseAccountCode\": \"A-0012\", \"purchasePrice\": 123.33, \"purchasePriceTaxInclusive\": true, \"purchaseReturnAccountCode\": \"A-0014\", \"purchaseTaxCode\": \"T-001\", \"reorderEnabled\": true, \"reorderLevel\": 100, \"salesAccountCode\": \"A-0013\", \"salesPrice\": 120, \"salesPriceTaxInclusive\": false, \"salesReturnAccountCode\": \"A-0015\", \"salesTaxCode\": \"T-002\", \"sequenceFormat\": 1, \"stockUom\": 2, \"taxable\": true, \"type\": \"TRACKED\" }, \"productCode\": \"P00001\", \"productDescription\": \"Apple watch\", \"productOrder\": 1, \"productQuantity\": 2, \"purchaseInvoiceItemCode\": \"PII-000001\", \"tax\": { \"accountCode\": \"AC-001\", \"code\": \"TC-001\", \"deleted\": false, \"description\": \"sales Tax for SG\", \"name\": \"SGST\", \"percent\": 7, \"status\": \"active\", \"taxCode\": \"TC-001\", \"type\": \"SALES\" }, \"taxAmount\": 0.5, \"taxCode\": \"GST7\", \"tdsAccount\": \"AC-0000011\", \"tdsAmount\": 100, \"tdsId\": 1, \"tdsRate\": 10.1, \"totalAmount\": 2.3, \"unitPrice\": 0.7 } ], \"purchaseInvoiceRecurring\": { \"id\": 2, \"invoiceRecurringCount\": 1, \"recurrenceEndDate\": \"25-10-2019\", \"recurrenceFrequency\": \"WEEK\", \"recurrenceType\": 1 }, \"purchaseInvoiceType\": \"INVENTORY\", \"purchaseOrderRefNo\": \"CPO001\", \"receiveGoodsStatus\": \"UNRECEIVED\", \"recurring\": true, \"recurringActivated\": false, \"shipFrom\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"shipTo\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"status\": \"OPEN\", \"supplierInvoiceNo\": \"string\", \"taxAmount\": 2.322, \"totalAmount\": 12.322, \"totalAmountInBaseCurrency\": 12.322, \"totalTdsAmount\": 12.32, \"unitPriceGstInclusive\": false, \"warehouseCode\": \"WH-000001\" }, \"recurringActivated\": false, \"recurringPayment\": false, \"referenceDate\": \"2019-09-27\", \"referenceNumber\": \"CH001\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDto](#makepaymentdto) |

##### Sample Request
```java
{
  "accountCodePayFrom": "AC-001",
  "accountName": "Bank",
  "amount": 10,
  "contactCode": 19425,
  "contactName": "ABC PTE LTD",
  "currency": "SGD",
  "documentDate": "2019-09-27",
  "exchangeRate": 0.01891562,
  "makePaymentItemDtoList": [
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
          "taxCode": "Tax10",
          "taxRate": 0,
          "taxSeqCode": "T001",
          "taxType": "string",
          "taxableAmount": 0
        }
      ]
    }
  ],
  "makePaymentRecurringDto": {
    "paymentMemo": {
      "paymentMemos": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      },
      "referenceDetails": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      }
    },
    "recurringEndDate": "2019-09-27",
    "recurringFrequency": 1,
    "recurringPaymentCount": 2,
    "recurringType": "WEEK"
  },
  "memo": "Sales quotation",
  "nextPaymentDate": "2019-09-27",
  "paymentType": "BANK_TRANSFER",
  "purchaseInvoice": {
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
            "module": "Make Payment",
            "value": "Information"
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
        "documentDate": "2020-06-16T09:21:46.533Z",
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
            "module": "Make Payment",
            "value": "Information"
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
  },
  "recurringActivated": false,
  "recurringPayment": false,
  "referenceDate": "2019-09-27",
  "referenceNumber": "CH001"
}
```

##### Sample Response
```java
{
  "accountCodePayFrom": "AC-001",
  "accountName": "Bank",
  "amount": 10,
  "contactCode": 19425,
  "contactName": "ABC PTE LTD",
  "currency": "SGD",
  "documentDate": "2019-09-27",
  "exchangeRate": 0.01891562,
  "makePaymentItemDtoList": [
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
          "taxCode": "Tax10",
          "taxRate": 0,
          "taxSeqCode": "T001",
          "taxType": "string",
          "taxableAmount": 0
        }
      ]
    }
  ],
  "makePaymentRecurringDto": {
    "paymentMemo": {
      "paymentMemos": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      },
      "referenceDetails": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      }
    },
    "recurringEndDate": "2019-09-27",
    "recurringFrequency": 1,
    "recurringPaymentCount": 2,
    "recurringType": "WEEK"
  },
  "memo": "Sales quotation",
  "nextPaymentDate": "2019-09-27",
  "paymentType": "BANK_TRANSFER",
  "purchaseInvoice": {
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
                "module": "Make Payment",
                "value": "Information"
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
        "documentDate": "2020-06-16T09:23:20.482Z",
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
            "module": "Make Payment",
            "value": "Information"
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
  },
  "recurringActivated": false,
  "recurringPayment": false,
  "referenceDate": "2019-09-27",
  "referenceNumber": "CH001"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Payment has been updated successfully. | [MakePaymentDto](#makepaymentdto) |
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

### MakePaymentDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayFrom | string | Account code. | No |
| accountName | string | Account name. | No |
| amount | number | Payment amount. | No |
| contactCode | string | Contact code. | No |
| contactName | string | Contact name. | No |
| currency | string | Currency code. | No |
| documentDate | dateTime | Document date. | No |
| exchangeRate | number | Exchange rate. | No |
| makePaymentItemDtoList | [ [MakePaymentItemDto](#makepaymentitemdto) ] | Make payment items information. | No |
| memo | string | Memo text. | No |
| nextPaymentDate | dateTime | Next payment date. | No |
| paymentType | string | Type of payment. | No |
| purchaseInvoice | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |  | No |
| recurringActivated | boolean | Recurring payment activated for payment. | No |
| recurringPayment | boolean | Recurring payment enable/disable for payment. | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque. | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque. | No |

### MakePaymentItemDto

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
