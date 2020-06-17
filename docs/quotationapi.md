---
id: quotationapi
title: Quotation APIs
sidebar_label: Quotation
---
Quotation is created in sell module. You will be able to track the quotation process with the fulfillment feature. The fulfilment process comes with three status - “Fulfilled”, “Partial”, “Unfulfilled”. With this status, you will be able to make accurate business actions. Once the quotation is fulfilled, you will be able to convert it into an invoice, automatically recording it into your [accounts receivable account](https://www.deskera.com/sg/books/chart-of-accounts-with-deskera-books/).

`Quotation Api` helps you to create/draft new quotation, retrieve a particular quotation, update a particular quotation, update linked [backorder](https://www.deskera.com/sg/books/back-orders-with-deskera-books/)/documents, or retrieve a list of all quotations.

More about [Quotation API documentation](https://deskera.docs.apiary.io/#reference/quotation-apis)

## API
---

### Search Quotation

Get quotations by filter criteria. [More about search quotation](https://deskera.docs.apiary.io/#reference/quotation-apis/v1quotations/get-quotations-by-filter-criteria)

##### Description:

- Allows you to retrieve a list of all quotation.
- Allows you to retrieve specific quotation based on it's filter criteria.

#### GET
#### /v1/quotations
##### Request URL

```java
https://bifrost.deskera.com/v1/quotations?limit=10&page=0&sort=createdAt&sortDir=desc
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/quotations?limit=10&page=0&sort=createdAt&sortDir=desc" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
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
            "address": "string",
            "name": "Paul"
        },
        "contactCode": "C-0001",
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
                "currency": "SGD",
                "documentCode": "SI-0000041",
                "documentSequenceCode": "00000001",
                "dueAmount": 46,
                "exchangeRate": 0,
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
                "currency": "SGD",
                "documentCode": "SI-0000041",
                "documentSequenceCode": "00000001",
                "dueAmount": 46,
                "exchangeRate": 0,
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
                "currency": "SGD",
                "documentCode": "SI-0000041",
                "documentSequenceCode": "00000001",
                "dueAmount": 46,
                "exchangeRate": 0,
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
        "currency": "SGD",
        "customField": [
            {
            "label": "Label",
            "module": "Quotation",
            "value": "Extra Information"
            }
        ],
        "deleted": false,
        "documentDate": "27-10-2019",
        "documentSequenceCode": "0000001",
        "draft": false,
        "exchangeRate": 0.01891562,
        "fulfillmentDate": "28-10-2019",
        "fulfillmentOn": "28-10-2019",
        "fulfillmentStatus": "UNFULFILLED",
        "fulfillmentType": "PICK_PACK_SHIP",
        "linkedDocuments": [
            {
            "documentCode": "QO-0000001",
            "documentSequenceCode": "0000001",
            "documentType": "QUOTATION"
            }
        ],
        "memo": "Sales quotation",
        "quotationItemDtoList": [
            {
            "availableQuantity": 3,
            "customField": [
                {
                "label": "Label",
                "module": "Quotation",
                "value": "Extra Information"
                }
            ],
            "discount": 2,
            "discountInPercent": true,
            "documentSequenceCode": "P-0000001",
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
            "productCode": "PC-001",
            "productDescription": "Red pen",
            "productName": "Ball pen",
            "productOrder": 1,
            "productQuantity": 2.5,
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
            "taxAmount": 0.3,
            "taxCode": "TX-003",
            "taxName": "GST(7%)",
            "type": "TRACKED",
            "unitPrice": 10
            }
        ],
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
        "tenantId": 123,
        "unitPriceGstInclusive": true,
        "validTillDate": "29-10-2019",
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
    "unpaged": false,
    "paged": true
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
| 200 | Quotation's have been fetched successfully. | [QuotationDto](#quotationdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Create Quotation
Create/Draft a new quotation. [More about create quotation](https://deskera.docs.apiary.io/#reference/quotation-apis/v1quotations/create/draft-a-new-quotation)

##### Description:

- Allows you to create/draft a new quotation.

#### POST
#### /v1/quotations
##### Request URL

```java
https://bifrost.deskera.com/v1/quotations
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/quotations" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"attachments\": [ \"string\" ], \"backOrder\": true, \"billTo\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"contact\": { \"address\": \"string\", \"name\": \"string\" }, \"contactCode\": \"C-0001\", \"contactDto\": { \"attentionTo\": \"Peter Parker\", \"billingAddress\": [ { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" } ], \"businessUnit\": \"CAA01 - Cvl Avtn Authrty of Singapore\", \"currencyCode\": \"SGD\", \"customField\": { \"field1\": \"value1\", \"field2\": \"value2\" }, \"documentSequenceCode\": \"C-0000001\", \"emailId\": \"myinfo@domain.com\", \"invoices\": { \"additionalProp1\": [ { \"currency\": \"string\", \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"exchangeRate\": 0, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"purchaseOrderRefNo\": \"CPO001\", \"supplierInvoiceNo\": \"CSI001\", \"taxAmount\": 1, \"totalAmount\": 46, \"totalAmountInBaseCurrency\": 46, \"type\": \"sale_invoice\" } ], \"additionalProp2\": [ { \"currency\": \"string\", \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"exchangeRate\": 0, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"purchaseOrderRefNo\": \"CPO001\", \"supplierInvoiceNo\": \"CSI001\", \"taxAmount\": 1, \"totalAmount\": 46, \"totalAmountInBaseCurrency\": 46, \"type\": \"sale_invoice\" } ], \"additionalProp3\": [ { \"currency\": \"string\", \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"exchangeRate\": 0, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"purchaseOrderRefNo\": \"CPO001\", \"supplierInvoiceNo\": \"CSI001\", \"taxAmount\": 1, \"totalAmount\": 46, \"totalAmountInBaseCurrency\": 46, \"type\": \"sale_invoice\" } ] }, \"name\": \"Sam\", \"payableAccountCode\": \"AC002\", \"paymentTermCode\": \"Net 0\", \"peppolId\": \"u000:11::11293\", \"receivableAccountCode\": \"AC001\", \"sequenceFormat\": 1, \"shippingAddress\": [ { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" } ], \"singaporeGovt\": true, \"taxExempted\": true, \"taxExemptionNo\": \"234s-few3-2422\", \"taxExemptionReason\": \"Resale, Federal Agency\", \"taxNumber\": 123456, \"uen\": \"DHJEUK\" }, \"currency\": \"SGD\", \"customField\": [ { \"label\": \"Label\", \"module\": \"string\", \"value\": \"XYZ\" } ], \"deleted\": false, \"documentDate\": \"27-10-2019\", \"documentSequenceCode\": \"0000001\", \"draft\": false, \"exchangeRate\": 0.01891562, \"fulfillmentDate\": \"28-10-2019\", \"fulfillmentOn\": \"28-10-2019\", \"fulfillmentStatus\": \"UNFULFILLED\", \"fulfillmentType\": \"PICK_PACK_SHIP\", \"linkedDocuments\": [ { \"documentCode\": \"QO-0000001\", \"documentSequenceCode\": \"0000001\", \"documentType\": \"QUOTATION\" } ], \"memo\": \"Sales quotation\", \"quotationItemDtoList\": [ { \"availableQuantity\": 3, \"customField\": [ { \"label\": \"Label\", \"module\": \"string\", \"value\": \"XYZ\" } ], \"discount\": 2, \"discountInPercent\": true, \"documentSequenceCode\": \"P-0000001\", \"product\": { \"active\": true, \"barcode\": 2365234, \"bomAddCostConfiguration\": [ { \"label\": \"Labour charges\", \"price\": 10.5 } ], \"bomProductsConfiguration\": [ { \"itemId\": 1234, \"itemName\": \"Apple\", \"quantity\": 10.5 } ], \"categoryCode\": \"AB0001\", \"categoryDesc\": \"Medical Equipment\", \"customField\": { \"field1\": \"value1\", \"field2\": \"value2\" }, \"deleted\": true, \"description\": \"Description\", \"documentSequenceCode\": \"P-0000001\", \"id\": 1234, \"images\": [ \"string\" ], \"inventory\": { \"availableQuantity\": 100, \"costOfGoodsSoldAccountCode\": \"A-10231\", \"inventoryAccountCode\": \"A-10232\", \"inventoryAccountName\": \"Inventory Account\", \"openingQuantity\": 10, \"openingValuation\": 100.4, \"stockAdjustmentAccountCode\": \"A-10234\", \"warehouseCode\": \"WH-00001\" }, \"manufacturingCostAccountCode\": \"AC-0000012\", \"name\": \"Apple\", \"productId\": \"P000011\", \"purchaseAccountCode\": \"A-0012\", \"purchasePrice\": 123.33, \"purchasePriceTaxInclusive\": true, \"purchaseReturnAccountCode\": \"A-0014\", \"purchaseTaxCode\": \"T-001\", \"reorderEnabled\": true, \"reorderLevel\": 100, \"salesAccountCode\": \"A-0013\", \"salesPrice\": 120, \"salesPriceTaxInclusive\": false, \"salesReturnAccountCode\": \"A-0015\", \"salesTaxCode\": \"T-002\", \"sequenceFormat\": 1, \"stockUom\": 2, \"taxable\": true, \"type\": \"TRACKED\" }, \"productCode\": \"PC-001\", \"productDescription\": \"Red pen\", \"productName\": \"Ball pen\", \"productOrder\": 1, \"productQuantity\": 2.5, \"tax\": { \"accountCode\": \"AC-001\", \"code\": \"TC-001\", \"deleted\": false, \"description\": \"sales Tax for SG\", \"name\": \"SGST\", \"percent\": 7, \"status\": \"active\", \"taxCode\": \"TC-001\", \"type\": \"SALES\" }, \"taxAmount\": 0.3, \"taxCode\": \"TX-003\", \"taxName\": \"GST(7%)\", \"type\": \"TRACKED\", \"unitPrice\": 10 } ], \"sequenceFormat\": 1, \"shipByDate\": \"25-10-2019\", \"shipFrom\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"shipTo\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"status\": \"OPEN\", \"tenantId\": 123, \"unitPriceGstInclusive\": true, \"validTillDate\": \"29-10-2019\", \"warehouseCode\": \"WH-000001\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationDto | body | quotationDto | Yes | [QuotationDto](#quotationdto) |

##### Sample Request
```java
{
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
    "address": "string",
    "name": "Paul"
  },
  "contactCode": "C-0001",
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
          "currency": "SGD",
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "exchangeRate": 0,
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
          "currency": "SGD",
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "exchangeRate": 0,
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
          "currency": "SGD",
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "exchangeRate": 0,
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
  "currency": "SGD",
  "customField": [
    {
      "label": "Label",
      "module": "Quotation",
      "value": "Extra Information"
    }
  ],
  "deleted": false,
  "documentDate": "27-10-2019",
  "documentSequenceCode": "0000001",
  "draft": false,
  "exchangeRate": 0.01891562,
  "fulfillmentDate": "28-10-2019",
  "fulfillmentOn": "28-10-2019",
  "fulfillmentStatus": "UNFULFILLED",
  "fulfillmentType": "PICK_PACK_SHIP",
  "linkedDocuments": [
    {
      "documentCode": "QO-0000001",
      "documentSequenceCode": "0000001",
      "documentType": "QUOTATION"
    }
  ],
  "memo": "Sales quotation",
  "quotationItemDtoList": [
    {
      "availableQuantity": 3,
      "customField": [
        {
          "label": "Label",
          "module": "Quotation",
          "value": "Extra Information"
        }
      ],
      "discount": 2,
      "discountInPercent": true,
      "documentSequenceCode": "P-0000001",
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
      "productCode": "PC-001",
      "productDescription": "Red pen",
      "productName": "Ball pen",
      "productOrder": 1,
      "productQuantity": 2.5,
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
      "taxAmount": 0.3,
      "taxCode": "TX-003",
      "taxName": "GST(7%)",
      "type": "TRACKED",
      "unitPrice": 10
    }
  ],
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
  "tenantId": 123,
  "unitPriceGstInclusive": true,
  "validTillDate": "29-10-2019",
  "warehouseCode": "WH-000001"
}
```

##### Sample Response
```java
{
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
    "address": "string",
    "name": "string"
  },
  "contactCode": "C-0001",
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
          "currency": "SGD",
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "exchangeRate": 0,
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
          "currency": "SGD",
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "exchangeRate": 0,
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
          "currency": "SGD",
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "exchangeRate": 0,
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
  "currency": "SGD",
  "customField": [
    {
      "label": "Label",
      "module": "Quotation",
      "value": "Extra Information"
    }
  ],
  "deleted": false,
  "documentDate": "27-10-2019",
  "documentSequenceCode": "0000001",
  "draft": false,
  "exchangeRate": 0.01891562,
  "fulfillmentDate": "28-10-2019",
  "fulfillmentOn": "28-10-2019",
  "fulfillmentStatus": "UNFULFILLED",
  "fulfillmentType": "PICK_PACK_SHIP",
  "linkedDocuments": [
    {
      "documentCode": "QO-0000001",
      "documentSequenceCode": "0000001",
      "documentType": "QUOTATION"
    }
  ],
  "memo": "Sales quotation",
  "quotationItemDtoList": [
    {
      "availableQuantity": 3,
      "customField": [
        {
          "label": "Label",
          "module": "Quotation",
          "value": "Extra Information"
        }
      ],
      "discount": 2,
      "discountInPercent": true,
      "documentSequenceCode": "P-0000001",
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
      "productCode": "PC-001",
      "productDescription": "Red pen",
      "productName": "Ball pen",
      "productOrder": 1,
      "productQuantity": 2.5,
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
      "taxAmount": 0.3,
      "taxCode": "TX-003",
      "taxName": "GST(7%)",
      "type": "TRACKED",
      "unitPrice": 10
    }
  ],
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
  "tenantId": 123,
  "unitPriceGstInclusive": true,
  "validTillDate": "29-10-2019",
  "warehouseCode": "WH-000001"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QuotationDto](#quotationdto) |
| 201 | Quotation has been created/drafted successfully. | [QuotationDto](#quotationdto) |
| 400 | Quotation creation/draft failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---

### Update Quotation

Update quotation information. [More about update quotation](https://deskera.docs.apiary.io/#reference/quotation-apis/v1quotationsid/update-quotation-information)

##### Description:

- Allows you to update a specific quotation information.

#### PUT
#### /v1/quotations/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/quotations/1
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/quotations/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"attachments\": [ \"string\" ], \"backOrder\": true, \"billTo\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"contact\": { \"address\": \"string\", \"name\": \"string\" }, \"contactCode\": \"C-0001\", \"contactDto\": { \"attentionTo\": \"Peter Parker\", \"billingAddress\": [ { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" } ], \"businessUnit\": \"CAA01 - Cvl Avtn Authrty of Singapore\", \"currencyCode\": \"SGD\", \"customField\": { \"field1\": \"value1\", \"field2\": \"value2\" }, \"documentSequenceCode\": \"C-0000001\", \"emailId\": \"myinfo@domain.com\", \"invoices\": { \"additionalProp1\": [ { \"currency\": \"string\", \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"exchangeRate\": 0, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"purchaseOrderRefNo\": \"CPO001\", \"supplierInvoiceNo\": \"CSI001\", \"taxAmount\": 1, \"totalAmount\": 46, \"totalAmountInBaseCurrency\": 46, \"type\": \"sale_invoice\" } ], \"additionalProp2\": [ { \"currency\": \"string\", \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"exchangeRate\": 0, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"purchaseOrderRefNo\": \"CPO001\", \"supplierInvoiceNo\": \"CSI001\", \"taxAmount\": 1, \"totalAmount\": 46, \"totalAmountInBaseCurrency\": 46, \"type\": \"sale_invoice\" } ], \"additionalProp3\": [ { \"currency\": \"string\", \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"exchangeRate\": 0, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"purchaseOrderRefNo\": \"CPO001\", \"supplierInvoiceNo\": \"CSI001\", \"taxAmount\": 1, \"totalAmount\": 46, \"totalAmountInBaseCurrency\": 46, \"type\": \"sale_invoice\" } ] }, \"name\": \"Sam\", \"payableAccountCode\": \"AC002\", \"paymentTermCode\": \"Net 0\", \"peppolId\": \"u000:11::11293\", \"receivableAccountCode\": \"AC001\", \"sequenceFormat\": 1, \"shippingAddress\": [ { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" } ], \"singaporeGovt\": true, \"taxExempted\": true, \"taxExemptionNo\": \"234s-few3-2422\", \"taxExemptionReason\": \"Resale, Federal Agency\", \"taxNumber\": 123456, \"uen\": \"DHJEUK\" }, \"currency\": \"SGD\", \"customField\": [ { \"label\": \"Label\", \"module\": \"string\", \"value\": \"XYZ\" } ], \"deleted\": false, \"documentDate\": \"27-10-2019\", \"documentSequenceCode\": \"0000001\", \"draft\": false, \"exchangeRate\": 0.01891562, \"fulfillmentDate\": \"28-10-2019\", \"fulfillmentOn\": \"28-10-2019\", \"fulfillmentStatus\": \"UNFULFILLED\", \"fulfillmentType\": \"PICK_PACK_SHIP\", \"linkedDocuments\": [ { \"documentCode\": \"QO-0000001\", \"documentSequenceCode\": \"0000001\", \"documentType\": \"QUOTATION\" } ], \"memo\": \"Sales quotation\", \"quotationItemDtoList\": [ { \"availableQuantity\": 3, \"customField\": [ { \"label\": \"Label\", \"module\": \"string\", \"value\": \"XYZ\" } ], \"discount\": 2, \"discountInPercent\": true, \"documentSequenceCode\": \"P-0000001\", \"product\": { \"active\": true, \"barcode\": 2365234, \"bomAddCostConfiguration\": [ { \"label\": \"Labour charges\", \"price\": 10.5 } ], \"bomProductsConfiguration\": [ { \"itemId\": 1234, \"itemName\": \"Apple\", \"quantity\": 10.5 } ], \"categoryCode\": \"AB0001\", \"categoryDesc\": \"Medical Equipment\", \"customField\": { \"field1\": \"value1\", \"field2\": \"value2\" }, \"deleted\": true, \"description\": \"Description\", \"documentSequenceCode\": \"P-0000001\", \"id\": 1234, \"images\": [ \"string\" ], \"inventory\": { \"availableQuantity\": 100, \"costOfGoodsSoldAccountCode\": \"A-10231\", \"inventoryAccountCode\": \"A-10232\", \"inventoryAccountName\": \"Inventory Account\", \"openingQuantity\": 10, \"openingValuation\": 100.4, \"stockAdjustmentAccountCode\": \"A-10234\", \"warehouseCode\": \"WH-00001\" }, \"manufacturingCostAccountCode\": \"AC-0000012\", \"name\": \"Apple\", \"productId\": \"P000011\", \"purchaseAccountCode\": \"A-0012\", \"purchasePrice\": 123.33, \"purchasePriceTaxInclusive\": true, \"purchaseReturnAccountCode\": \"A-0014\", \"purchaseTaxCode\": \"T-001\", \"reorderEnabled\": true, \"reorderLevel\": 100, \"salesAccountCode\": \"A-0013\", \"salesPrice\": 120, \"salesPriceTaxInclusive\": false, \"salesReturnAccountCode\": \"A-0015\", \"salesTaxCode\": \"T-002\", \"sequenceFormat\": 1, \"stockUom\": 2, \"taxable\": true, \"type\": \"TRACKED\" }, \"productCode\": \"PC-001\", \"productDescription\": \"Red pen\", \"productName\": \"Ball pen\", \"productOrder\": 1, \"productQuantity\": 2.5, \"tax\": { \"accountCode\": \"AC-001\", \"code\": \"TC-001\", \"deleted\": false, \"description\": \"sales Tax for SG\", \"name\": \"SGST\", \"percent\": 7, \"status\": \"active\", \"taxCode\": \"TC-001\", \"type\": \"SALES\" }, \"taxAmount\": 0.3, \"taxCode\": \"TX-003\", \"taxName\": \"GST(7%)\", \"type\": \"TRACKED\", \"unitPrice\": 10 } ], \"sequenceFormat\": 1, \"shipByDate\": \"25-10-2019\", \"shipFrom\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"shipTo\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"status\": \"OPEN\", \"tenantId\": 123, \"unitPriceGstInclusive\": true, \"validTillDate\": \"29-10-2019\", \"warehouseCode\": \"WH-000001\"}"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotationDto | body | quotationDto | Yes | [QuotationDto](#quotationdto) |

##### Sample Request
```java
{
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
    "address": "string",
    "name": "Paul"
  },
  "contactCode": "C-0001",
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
          "currency": "SGD",
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "exchangeRate": 0,
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
          "currency": "SGD",
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "exchangeRate": 0,
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
          "currency": "SGD",
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "exchangeRate": 0,
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
  "currency": "SGD",
  "customField": [
    {
      "label": "Label",
      "module": "Quotation",
      "value": "Extra Information"
    }
  ],
  "deleted": false,
  "documentDate": "27-10-2019",
  "documentSequenceCode": "0000001",
  "draft": false,
  "exchangeRate": 0.01891562,
  "fulfillmentDate": "28-10-2019",
  "fulfillmentOn": "28-10-2019",
  "fulfillmentStatus": "UNFULFILLED",
  "fulfillmentType": "PICK_PACK_SHIP",
  "linkedDocuments": [
    {
      "documentCode": "QO-0000001",
      "documentSequenceCode": "0000001",
      "documentType": "QUOTATION"
    }
  ],
  "memo": "Sales quotation",
  "quotationItemDtoList": [
    {
      "availableQuantity": 3,
      "customField": [
        {
          "label": "Label",
          "module": "Quotation",
          "value": "Extra Information"
        }
      ],
      "discount": 2,
      "discountInPercent": true,
      "documentSequenceCode": "P-0000001",
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
      "productCode": "PC-001",
      "productDescription": "Red pen",
      "productName": "Ball pen",
      "productOrder": 1,
      "productQuantity": 2.5,
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
      "taxAmount": 0.3,
      "taxCode": "TX-003",
      "taxName": "GST(7%)",
      "type": "TRACKED",
      "unitPrice": 10
    }
  ],
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
  "tenantId": 123,
  "unitPriceGstInclusive": true,
  "validTillDate": "29-10-2019",
  "warehouseCode": "WH-000001"
}
```

##### Sample Response
```java
{
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
    "address": "string",
    "name": "Paul"
  },
  "contactCode": "C-0001",
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
          "currency": "SGD",
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "exchangeRate": 0,
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
          "currency": "SGD",
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "exchangeRate": 0,
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
          "currency": "SGD",
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "exchangeRate": 0,
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
  "currency": "SGD",
  "customField": [
    {
      "label": "Label",
      "module": "Quotation",
      "value": "Extra Information"
    }
  ],
  "deleted": false,
  "documentDate": "27-10-2019",
  "documentSequenceCode": "0000001",
  "draft": false,
  "exchangeRate": 0.01891562,
  "fulfillmentDate": "28-10-2019",
  "fulfillmentOn": "28-10-2019",
  "fulfillmentStatus": "UNFULFILLED",
  "fulfillmentType": "PICK_PACK_SHIP",
  "linkedDocuments": [
    {
      "documentCode": "QO-0000001",
      "documentSequenceCode": "0000001",
      "documentType": "QUOTATION"
    }
  ],
  "memo": "Sales quotation",
  "quotationItemDtoList": [
    {
      "availableQuantity": 3,
      "customField": [
        {
          "label": "Label",
          "module": "Quotation",
          "value": "Extra Information"
        }
      ],
      "discount": 2,
      "discountInPercent": true,
      "documentSequenceCode": "P-0000001",
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
      "productCode": "PC-001",
      "productDescription": "Red pen",
      "productName": "Ball pen",
      "productOrder": 1,
      "productQuantity": 2.5,
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
      "taxAmount": 0.3,
      "taxCode": "TX-003",
      "taxName": "GST(7%)",
      "type": "TRACKED",
      "unitPrice": 10
    }
  ],
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
  "tenantId": 123,
  "unitPriceGstInclusive": true,
  "validTillDate": "29-10-2019",
  "warehouseCode": "WH-000001"
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation has been updated successfully. | [QuotationDto](#quotationdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---

### Retrieve Quotation

Get quotation by code. [More about retrieve quotation](https://deskera.docs.apiary.io/#reference/quotation-apis/v1quotationscodecode/get-quotation-by-code)

##### Description:

- Allows you to retrieve an existing quotation document information by it's code.

#### GET
#### /v1/quotations/code/{code}
##### Request URL

```java
https://bifrost.deskera.com/v1/quotations/code/Q001
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/quotations/code/Q001" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Sample Response
```java
[
  {
    "contactCode": "000012",
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
            "currency": "SGD",
            "documentCode": "SI-0000041",
            "documentSequenceCode": "00000001",
            "dueAmount": 46,
            "exchangeRate": 0,
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
            "currency": "SGD",
            "documentCode": "SI-0000041",
            "documentSequenceCode": "00000001",
            "dueAmount": 46,
            "exchangeRate": 0,
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
            "currency": "SGD",
            "documentCode": "SI-0000041",
            "documentSequenceCode": "00000001",
            "dueAmount": 46,
            "exchangeRate": 0,
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
    "documentCode": "QO-0000001",
    "documentDate": "25-10-2019",
    "documentItemDetails": [
      {
        "documentSequenceCode": "P-0000001",
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
        "productName": "iPhone",
        "productQuantity": 2,
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
        "taxCode": "tax code",
        "unitPrice": 0.7
      }
    ],
    "documentSequenceCode": "0000001",
    "documentType": "QUOTATION",
    "exchangeRate": 0,
    "linkedDocuments": [
      {
        "documentCode": "QO-0000001",
        "documentSequenceCode": "0000001",
        "documentType": "QUOTATION"
      }
    ],
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
    "warehouseCode": "WH-0000001"
  }
]
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations documents have been fetched successfully. | [ [SalesDocument](#salesdocument) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Update Quotation Attribute

Update quotation attributes.

##### Description:

- Allows you to update attributes of existing quotation.

#### POST
#### /v1/quotations/status
##### Request URL

```java
https://bifrost.deskera.com/v1/quotations/status
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/quotations/status?quotationCode=Q001" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{}"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| attributeKeyValues | body | attributeKeyValues | Yes | object |
| quotationCode | query | quotationCode | Yes | string |

##### Sample Response
```java
Quotation attributes has been updated successfully.
```
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Quotation with given code not found. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Update Linked BackOrder

Update linked documents for PO backorder

##### Description:

- Allows you to update linked documents for PO backorder.

#### POST
#### /v1/quotations/update/linkedBackOrder
##### Request URL

```java
https://bifrost.deskera.com/v1/quotations/update/linkedBackOrder
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/quotations/update/linkedBackOrder" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"documentInfo\": { \"documentCode\": \"QO-0000001\", \"documentSequenceCode\": \"0000001\", \"documentType\": \"QUOTATION\" }, \"salesDocumentCode\": \"string\", \"salesDocumentType\": \"QUOTATION\"}"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| backOrderUpdateRequest | body | backOrderUpdateRequest | Yes | [BackOrderUpdateRequest](#backorderupdaterequest) |

##### Sample Request
```java
{
  "documentInfo": {
    "documentCode": "QO-0000001",
    "documentSequenceCode": "0000001",
    "documentType": "QUOTATION"
  },
  "salesDocumentCode": "SDC001",
  "salesDocumentType": "QUOTATION"
}
```

##### Sample Response
```java
Linked document for backorder has been successfully updated.
```
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Linked document for backorder has been successfully updated. |
| 201 | Created |
| 400 | Linked document for backorder update failed. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Update Linked Documents

Update linked documents for PO.

##### Description:

- Allows you to update linked documents for PO.

#### POST
#### /v1/quotations/update/linkedDocument
##### Request URL

```java
https://bifrost.deskera.com/v1/quotations/update/linkedDocument
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/quotations/update/linkedDocument" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"newLinkedDocument\": { \"documentCode\": \"QO-0000001\", \"documentSequenceCode\": \"0000001\", \"documentType\": \"QUOTATION\" }, \"oldLinkedDocument\": { \"documentCode\": \"QO-0000001\", \"documentSequenceCode\": \"0000001\", \"documentType\": \"QUOTATION\" }}"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| linkedDocumentUpdateRequest | body | linkedDocumentUpdateRequest | Yes | [LinkedDocumentUpdateRequest](#linkeddocumentupdaterequest) |

##### Sample Request
```java
{
  "newLinkedDocument": {
    "documentCode": "QO-0000001",
    "documentSequenceCode": "0000001",
    "documentType": "QUOTATION"
  },
  "oldLinkedDocument": {
    "documentCode": "QO-0000001",
    "documentSequenceCode": "0000001",
    "documentType": "QUOTATION"
  }
}
```

##### Sample Response
```java
Linked document has been successfully updated.
```
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Linked document has been successfully updated. |
| 201 | Created |
| 400 | Linked document update failed. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |


## Models

---

### QuotationDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachments | [ string ] | Attachments url's | No |
| backOrder | boolean | Backorder flag to indicate if backorder created | No |
| billTo | [Address](#address) | Bill to Address. | No |
| contact | [ContactInfo](#contactinfo) | Contact info | No |
| contactCode | string | Contact code | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| currency | string | Currency code | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deleted | boolean | Quotation deleted | No |
| documentDate | dateTime | Document date | No |
| documentSequenceCode | string | Quotation Code | No |
| draft | boolean | True if want to save as draft. | No |
| exchangeRate | double | Exchange rate | No |
| fulfillmentDate | dateTime | Fulfillment date | No |
| fulfillmentOn | dateTime | Fulfillment On | No |
| fulfillmentStatus | string | Fulfillment status | No |
| fulfillmentType | string | Fulfillment type: NONE, DEFAULT, PICK_PACK_SHIP, DROP_SHIP | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| memo | string | Memo text | No |
| quotationItemDtoList | [ [QuotationItemDto](#quotationitemdto) ] | Quotation items information | No |
| sequenceFormat | string | Sequence Format Id | No |
| shipByDate | dateTime | Ship by date | No |
| shipFrom | [Address](#address) | Ship from Address. | No |
| shipTo | [Address](#address) | Ship to Address. | No |
| status | string | Quotation status | No |
| tenantId | long | Tenant id | No |
| unitPriceGstInclusive | boolean | Unit Price is GST inclusive | No |
| validTillDate | dateTime | Valid till date | No |
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

### CustomFieldItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| label | string | Custom Field Name | Yes |
| module | string | Supported Modules | No |
| value | object | Dimension Value | No |

### DocumentInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string | Document Code. | No |
| documentSequenceCode | string | Purchase Order Code | No |
| documentType | string | Type of document. | No |

### QuotationItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQuantity | number | Total available quantity | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Product discount | No |
| discountInPercent | boolean | Discount in percentage | No |
| documentSequenceCode | string | Product Document Sequence Code | Yes |
| product | [ProductResponse](#productresponse) | Product Short Info | No |
| productCode | string | Product code | Yes |
| productDescription | string | Product description | No |
| productName | string | Product name | No |
| productOrder | integer | Product order | No |
| productQuantity | number | Product quantity | Yes |
| tax | [TaxDto](#taxdto) | Tax details | No |
| taxAmount | number | Tax amount | No |
| taxCode | string | Tax code | No |
| taxName | string | Tax name | No |
| type | string | Product type | Yes |
| unitPrice | number | Product price | No |

### ProductResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Product status | No |
| barcode | string | Product barcode | No |
| categoryCode | string | Category code | No |
| categoryDesc | string | Category description | No |
| customField | object | JSON object for custom fields | No |
| deleted | boolean | Product delete status | No |
| description | string | Product description | No |
| documentSequenceCode | string | Product Sequence code | No |
| id | long | Product ID | No |
| images | [ string ] | Product image url's | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code | No |
| name | string | Product Name | Yes |
| productId | string | Product ID | No |
| purchaseAccountCode | string | Purchase account code | Yes |
| purchasePrice | double | Purchase price | Yes |
| purchasePriceTaxInclusive | boolean | Is purchase price tax inclusive? | No |
| purchaseReturnAccountCode | string | Purchase return account code | No |
| purchaseTaxCode | string | Purchase tax code | No |
| reorderEnabled | boolean | Flag to enable reorder level | No |
| reorderLevel | long | Reorder level of the Products. | No |
| salesAccountCode | string | Sales account code | Yes |
| salesPrice | double | Sales price | Yes |
| salesPriceTaxInclusive | boolean | Is sales price tax inclusive? | No |
| salesReturnAccountCode | string | Sales return account code | No |
| salesTaxCode | string | Sales tax code | No |
| sequenceFormat | string | Sequence Format | No |
| stockUom | long | Stock UOM | Yes |
| taxable | boolean | Is taxable? | No |
| type | string | Product type | Yes |

### TaxDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account code | No |
| code | string | Tax code | No |
| deleted | boolean | Tax deleted | No |
| description | string | Description | No |
| name | string | Tax Name | No |
| percent | number | Tax percentage  | No |
| status | string | Tax status | No |
| taxCode | string | Tax code | No |
| type | string | SALES | No |

### SalesDocument

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string | Contact code | No |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| documentCode | string | Document Code. | No |
| documentDate | dateTime | Document date | No |
| documentItemDetails | [ [DocumentItemDetails](#documentitemdetails) ] | Document item details. | No |
| documentSequenceCode | string | Document Sequence Code. | No |
| documentType | string | Type of document. | No |
| exchangeRate | double |  | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked Documents | No |
| shipByDate | dateTime | Ship by date | No |
| shipFrom | [Address](#address) | Ship from address. | No |
| shipTo | [Address](#address) | Ship To address. | No |
| warehouseCode | string | Warehouse Code | No |

### DocumentItemDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentSequenceCode | string | Product Document Sequence code | Yes |
| product | [ProductResponse](#productresponse) | Product Short Info | No |
| productCode | string | Product code | Yes |
| productDescription | string | Product description | No |
| productName | string | Product Name | No |
| productQuantity | number | Product quantity | Yes |
| tax | [TaxDto](#taxdto) | Tax details | No |
| taxCode | string | Tax code | No |
| unitPrice | number | Product unit price | Yes |

### BackOrderUpdateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentInfo | [DocumentInfo](#documentinfo) |  | No |
| salesDocumentCode | string |  | No |
| salesDocumentType | string |  | No |

### LinkedDocumentUpdateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| newLinkedDocument | [DocumentInfo](#documentinfo) |  | No |
| oldLinkedDocument | [DocumentInfo](#documentinfo) |  | No |
