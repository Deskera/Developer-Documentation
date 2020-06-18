---
id: orderapi
title: Order APIs
sidebar_label: Order
---
An order allows you to [buy](https://www.deskera.com/sg/books/purchase-orders/)/sell products or services. Once the order is completed, you will be able to convert it into bills upon confirmation or track the receipts directly.

`OrderDto` helps to create order, update a particular order, retrieve order by filter criteria, or get a list of all orders.

More about [Order API documentation](https://deskera.docs.apiary.io/#reference/order-apis)

## API
---

### Search Order
Get orders by filter criteria. [More about search order](https://deskera.docs.apiary.io/#reference/order-apis/v1orderspurchase/get-orders-by-filter-criteria)

##### Description:

- Allows you to retrieve a list of all orders.
- Allows you to retrieve specific order based on it's filter criteria.

#### GET
#### /v1/orders/purchase
##### Request URL

```java
https://bifrost.deskera.com/v1/orders/purchase?limit=10&page=0&sort=createdAt&sortDir=desc
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/orders/purchase?limit=10&page=0&sort=createdAt&sortDir=desc" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
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
        "billed": false,
        "contact": {
            "address": "Raffles Place 1",
            "name": "ABC Pte Ltd"
        },
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
        "currencyCode": "C001",
        "customField": [
            {
            "label": "Label",
            "module": "Order",
            "value": "Extra Information"
            }
        ],
        "deliveryDate": "01-10-2019",
        "documentDate": "01-10-2019",
        "documentSequenceCode": "0000001",
        "draft": false,
        "dropShip": true,
        "dueDate": "01-10-2019",
        "exchangeRate": 0.456345,
        "id": 1,
        "linkedDocuments": [
            {
            "documentCode": "QO-0000001",
            "documentSequenceCode": "0000001",
            "documentType": "QUOTATION"
            }
        ],
        "memo": "Memo details",
        "openingOrder": true,
        "orderType": "Inventory",
        "pendingReceipt": false,
        "poCode": "PO0001",
        "purchaseOrderItems": [
            {
            "accountCode": "AC001",
            "customField": [
                {
                "label": "Label",
                "module": "Order",
                "value": "Extra Information"
                }
            ],
            "discount": 2,
            "discountInPercent": true,
            "id": 2,
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
            "productCode": "P002",
            "productDescription": "Description",
            "productOrder": 1,
            "productQuantity": 2,
            "purchaseOrderItemCode": "POI-00001",
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
            "unitPrice": 2
            }
        ],
        "receiptStatus": "FULLY_RECEIVED",
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
        "totalAmount": 123.33,
        "unitPriceGstInclusive": false,
        "vendorCode": "V001",
        "warehouseCode": "WH-000001"
        }
  ],
  "pageable": {
    "sort": {
      "unsorted": false,
      "sorted": true,
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
    "unsorted": false,
    "sorted": true,
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
| 200 | Purchase orders have been fetched successfully. | [PurchaseOrderResponse](#purchaseorderresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Create Order

Create a new order. [More about create order](https://deskera.docs.apiary.io/#reference/order-apis/v1orderspurchase/create-a-new-order)

##### Description:

- Allows you to create new order.

#### POST
#### /v1/orders/purchase
##### Request URL

```java
https://bifrost.deskera.com/v1/orders/purchase
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/orders/purchase" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"contactCode\": \"C-0000001\", \"currency\": \"SGD\", \"currencyCode\": \"SGD\", \"memo\": \"Test Memo for Order\", \"status\": \"OPEN\", \"unitPriceGstInclusive\": false, \"sequenceFormat\": \"5eeb41da95ec493bcc400405\", \"documentType\": \"PURCHASE_ORDER\", \"exchangeRate\": 1, \"previousExchangeRate\": 1, \"shipFrom\": { \"address1\": \"204 E Chestnut St\", \"city\": \"Louisville\", \"state\": \"KY\", \"country\": \"US\", \"postalCode\": \"40202\", \"preferred\": true }, \"shipTo\": { \"address1\": \"204 E Chestnut St\", \"city\": \"Independence\", \"state\": \"KS\", \"country\": null, \"postalCode\": \"67301\", \"preferred\": true }, \"billTo\": { \"address1\": \"204 E Chestnut St\", \"city\": \"Independence\", \"state\": \"KS\", \"country\": null, \"postalCode\": \"67301\", \"preferred\": true }, \"contact\": { \"id\": 120226, \"code\": \"C-0000001\", \"documentSequenceCode\": \"C-0000001\", \"sequenceFormat\": \"5eeb3ede95ec493bcc4003ff\", \"name\": \"James Smith\", \"receivableAccountCode\": \"AC-0000003\", \"payableAccountCode\": \"AC-0000011\", \"currencyCode\": \"SGD\", \"paymentTermCode\": \"4\", \"billingAddress\": [ { \"city\": \"Louisville\", \"state\": \"KY\", \"country\": \"US\", \"address1\": \"204 E Chestnut St\", \"address2\": null, \"preferred\": true, \"postalCode\": \"40202\" } ], \"shippingAddress\": [ { \"city\": \"Louisville\", \"state\": \"KY\", \"country\": \"US\", \"address1\": \"204 E Chestnut St\", \"address2\": null, \"preferred\": true, \"postalCode\": \"40202\" } ], \"status\": \"ACTIVE\", \"customer\": false, \"vendor\": false, \"deleted\": false, \"tenantId\": 38272, \"theyOweYou\": null, \"youOweThem\": null, \"totalNetAmount\": null, \"totalBillAmount\": null, \"invoices\": null, \"customField\": null, \"emailId\": \"james.smith@getnada.com\", \"errorMessage\": null, \"avalaraCustomerCode\": \"b123e677-d80a-484c-a700-b63e11e8f7dc\", \"uen\": \"79787978\", \"taxNumber\": \"123456780\", \"taxExempted\": null, \"taxExemptionNo\": null, \"taxExemptionReason\": null, \"peppolId\": null, \"singaporeGovt\": null, \"businessUnit\": \"\", \"attentionTo\": null, \"address\": \"204 E Chestnut St,Louisville,KY,US,40202\" }, \"documentDate\": \"01-06-2020\", \"validTillDate\": \"31-07-2020\", \"totalAmount\": 0, \"totalAmountInBaseCurrency\": 0, \"dueAmount\": 0, \"attachmentIds\": null, \"supportedFeatures\": [ ], \"items\": [ { \"igstAmount\": 0, \"cgstAmount\": 0, \"sgstAmount\": 0, \"cessAmount\": 0, \"gstType\": null, \"hsnOrSacCode\": null, \"taxPreference\": null, \"taxExemptionReason\": null, \"igstRate\": null, \"cgstRate\": null, \"sgstRate\": null, \"cessRule\": null, \"exciseApplicable\": false, \"exciseType\": null, \"exciseRate\": null, \"exciseAmount\": 0, \"id\": null, \"discount\": null, \"discountInPercent\": false, \"productCode\": \"P-0000001\", \"product\": { \"name\": \"Demo Product\", \"type\": \"TRACKED\", \"barcode\": \"123123132\", \"description\": \"Demo Product Description\", \"purchasePrice\": 100, \"salesPrice\": 120, \"purchaseAccountCode\": \"AC-0000032\", \"salesAccountCode\": \"AC-0000023\", \"purchaseReturnAccountCode\": null, \"salesReturnAccountCode\": null, \"manufacturingCostAccountCode\": \"AC-0000063\", \"purchaseTaxCode\": \"TX-0000011\", \"salesTaxCode\": \"TX-0000001\", \"purchasePriceTaxInclusive\": true, \"salesPriceTaxInclusive\": true, \"stockUom\": 2, \"images\": [ null ], \"inventory\": { \"openingQuantity\": 10, \"openingValuation\": 1000, \"availableQuantity\": 10, \"costOfGoodsSoldAccountCode\": \"AC-0000030\", \"inventoryAccountCode\": \"AC-0000004\", \"stockAdjustmentAccountCode\": \"AC-0000045\", \"inventoryAccountName\": \"Inventory\", \"warehouseCode\": \"WH-0000001\" }, \"categoryCode\": null, \"categoryDesc\": null, \"taxable\": true, \"customField\": null, \"reorderEnabled\": false, \"reorderLevel\": null, \"documentSequenceCode\": \"P-0000001\", \"sequenceFormat\": \"5eeb3cb495ec493bcc4003e5\", \"errorMessage\": null, \"id\": 58538, \"productId\": \"P-0000001\", \"active\": true, \"deleted\": false, \"bomProductsConfiguration\": [ ], \"bomAddCostConfiguration\": [ ], \"availableQuantity\": 10 }, \"productDescription\": \"Demo Product Description\", \"productName\": \"Demo Product\", \"productQuantity\": 1, \"availableQuantity\": 10, \"taxAmountBuffer\": 0, \"taxCode\": \"TX-0000011\", \"taxName\": \"TX (7%)\", \"tax\": { \"id\": 198104, \"name\": \"TX (7%)\", \"taxCode\": \"TX (7%)\", \"accountCode\": \"AC-0000021\", \"accountName\": \"GST\", \"type\": \"PURCHASE\", \"description\": \"Purchases from GST-registered suppliers that are subject to GST at 7%.\", \"percent\": 7, \"code\": \"TX-0000011\", \"status\": \"active\", \"deleted\": false, \"tenantId\": 38272, \"category\": \"SYSTEM\" }, \"unitPrice\": 100, \"currency\": null, \"totalAmount\": 107, \"taxSystem\": \"SG\", \"type\": \"TRACKED\", \"unitPriceGstInclusive\": false } ], \"vendorCode\": \"C-0000001\", \"buyType\": \"INVENTORY\", \"orderType\": \"INVENTORY\", \"dropShip\": false, \"backOrder\": false, \"orderDueDate\": \"31-07-2020\", \"receiveGoodsStatus\": \"UNRECEIVED\", \"purchaseOrderItems\": [ { \"igstAmount\": 0, \"cgstAmount\": 0, \"sgstAmount\": 0, \"cessAmount\": 0, \"gstType\": null, \"hsnOrSacCode\": null, \"taxPreference\": null, \"taxExemptionReason\": null, \"igstRate\": null, \"cgstRate\": null, \"sgstRate\": null, \"cessRule\": null, \"exciseApplicable\": false, \"exciseType\": null, \"exciseRate\": null, \"exciseAmount\": 0, \"id\": null, \"discount\": null, \"discountInPercent\": false, \"productCode\": \"P-0000001\", \"product\": { \"name\": \"Demo Product\", \"type\": \"TRACKED\", \"barcode\": \"123123132\", \"description\": \"Demo Product Description\", \"purchasePrice\": 100, \"salesPrice\": 120, \"purchaseAccountCode\": \"AC-0000032\", \"salesAccountCode\": \"AC-0000023\", \"purchaseReturnAccountCode\": null, \"salesReturnAccountCode\": null, \"manufacturingCostAccountCode\": \"AC-0000063\", \"purchaseTaxCode\": \"TX-0000011\", \"salesTaxCode\": \"TX-0000001\", \"purchasePriceTaxInclusive\": true, \"salesPriceTaxInclusive\": true, \"stockUom\": 2, \"images\": [ null ], \"inventory\": { \"openingQuantity\": 10, \"openingValuation\": 1000, \"availableQuantity\": 10, \"costOfGoodsSoldAccountCode\": \"AC-0000030\", \"inventoryAccountCode\": \"AC-0000004\", \"stockAdjustmentAccountCode\": \"AC-0000045\", \"inventoryAccountName\": \"Inventory\", \"warehouseCode\": \"WH-0000001\" }, \"categoryCode\": null, \"categoryDesc\": null, \"taxable\": true, \"customField\": null, \"reorderEnabled\": false, \"reorderLevel\": null, \"documentSequenceCode\": \"P-0000001\", \"sequenceFormat\": \"5eeb3cb495ec493bcc4003e5\", \"errorMessage\": null, \"id\": 58538, \"productId\": \"P-0000001\", \"active\": true, \"deleted\": false, \"bomProductsConfiguration\": [ ], \"bomAddCostConfiguration\": [ ], \"availableQuantity\": 10 }, \"productDescription\": \"Demo Product Description\", \"productName\": \"Demo Product\", \"productQuantity\": 1, \"availableQuantity\": 10, \"taxAmountBuffer\": 0, \"taxCode\": \"TX-0000011\", \"taxName\": \"TX (7%)\", \"tax\": { \"id\": 198104, \"name\": \"TX (7%)\", \"taxCode\": \"TX (7%)\", \"accountCode\": \"AC-0000021\", \"accountName\": \"GST\", \"type\": \"PURCHASE\", \"description\": \"Purchases from GST-registered suppliers that are subject to GST at 7%.\", \"percent\": 7, \"code\": \"TX-0000011\", \"status\": \"active\", \"deleted\": false, \"tenantId\": 38272, \"category\": \"SYSTEM\" }, \"unitPrice\": 100, \"currency\": null, \"totalAmount\": 107, \"taxSystem\": \"SG\", \"type\": \"TRACKED\", \"unitPriceGstInclusive\": false } ], \"dueDate\": \"31-07-2020\"}"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| purchaseOrderRequest | body | purchaseOrderRequest | Yes | [PurchaseOrderRequest](#purchaseorderrequest) |

##### Sample Request
```java
{
  "contactCode": "C-0000001",
  "currency": "SGD",
  "currencyCode": "SGD",
  "memo": "Test Memo for Order",
  "status": "OPEN",
  "unitPriceGstInclusive": false,
  "sequenceFormat": "5eeb41da95ec493bcc400405",
  "documentType": "PURCHASE_ORDER",
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
    "vendor": false,
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
  "documentDate": "01-06-2020",
  "validTillDate": "31-07-2020",
  "totalAmount": 0,
  "totalAmountInBaseCurrency": 0,
  "dueAmount": 0,
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
          "availableQuantity": 10,
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
        "availableQuantity": 10
      },
      "productDescription": "Demo Product Description",
      "productName": "Demo Product",
      "productQuantity": 1,
      "availableQuantity": 10,
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
  "vendorCode": "C-0000001",
  "buyType": "INVENTORY",
  "orderType": "INVENTORY",
  "dropShip": false,
  "backOrder": false,
  "orderDueDate": "31-07-2020",
  "receiveGoodsStatus": "UNRECEIVED",
  "purchaseOrderItems": [
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
          "availableQuantity": 10,
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
        "availableQuantity": 10
      },
      "productDescription": "Demo Product Description",
      "productName": "Demo Product",
      "productQuantity": 1,
      "availableQuantity": 10,
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
  "dueDate": "31-07-2020"
}
```

##### Sample Response
```java
{
  "vendorCode": "C-0000001",
  "currencyCode": "SGD",
  "contact": {
    "name": "James Smith",
    "address": "204 E Chestnut St,Louisville,KY,US,40202"
  },
  "deliveryDate": null,
  "documentDate": "01-06-2020",
  "dueDate": "31-07-2020",
  "exchangeRate": 1,
  "memo": "Test Memo for Order",
  "orderType": "INVENTORY",
  "unitPriceGstInclusive": false,
  "attachments": null,
  "totalAmount": 107.0000000000,
  "openingOrder": false,
  "linkedDocuments": null,
  "status": "OPEN",
  "purchaseOrderItems": [
    {
      "id": 5682,
      "accountCode": null,
      "productCode": "P-0000001",
      "productDescription": "Demo Product Description",
      "productQuantity": 1,
      "unitPrice": 100,
      "discount": null,
      "discountInPercent": false,
      "taxAmount": 7.0000000000,
      "taxCode": "TX-0000011",
      "totalAmount": 107.0000000000,
      "productOrder": null,
      "purchaseOrderItemCode": "POI-0000001",
      "customField": null,
      "product": null,
      "tax": null
    }
  ],
  "dropShip": false,
  "attachmentIds": null,
  "warehouseCode": null,
  "backOrder": false,
  "receiptStatus": null,
  "id": 3861,
  "poCode": "0000001",
  "billed": false,
  "draft": false,
  "pendingReceipt": true,
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
  "customField": null,
  "documentSequenceCode": "0000001",
  "contactDto": null,
  "totalAmountInBaseCurrency": 0.00
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderResponse](#purchaseorderresponse) |
| 201 | Purchase order has been created successfully. | [PurchaseOrderResponse](#purchaseorderresponse) |
| 400 | Purchase order could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Update Order

Update order information. [More about update order](https://deskera.docs.apiary.io/#reference/order-apis/v1orderspurchaseid/update-order-information)

##### Description:

- Allows you to update a specific order information.

#### PUT
#### /v1/orders/purchase/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/orders/purchase/1
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/orders/purchase/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"attachmentIds\": [ 0 ], \"attachments\": [ \"string\" ], \"backOrder\": true, \"billTo\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"contact\": { \"address\": \"Raffles Place 1\", \"name\": \"ABC Pte Ltd\" }, \"currencyCode\": \"C001\", \"customField\": [ { \"label\": \"Label\", \"module\": \"string\", \"value\": \"XYZ\" } ], \"deliveryDate\": \"01-10-2019\", \"documentDate\": \"01-10-2019\", \"documentSequenceCode\": \"0000001\", \"draft\": false, \"dropShip\": true, \"dueDate\": \"01-10-2019\", \"exchangeRate\": 0.456345, \"linkedDocuments\": [ { \"documentCode\": \"QO-0000001\", \"documentSequenceCode\": \"0000001\", \"documentType\": \"QUOTATION\" } ], \"memo\": \"Memo details\", \"openingOrder\": true, \"orderType\": \"Inventory\", \"purchaseOrderItems\": [ { \"accountCode\": \"AC001\", \"customField\": [ { \"label\": \"Label\", \"module\": \"string\", \"value\": \"XYZ\" } ], \"discount\": 2, \"discountInPercent\": true, \"id\": 2, \"product\": { \"active\": true, \"barcode\": 2365234, \"bomAddCostConfiguration\": [ { \"label\": \"Labour charges\", \"price\": 10.5 } ], \"bomProductsConfiguration\": [ { \"itemId\": 1234, \"itemName\": \"Apple\", \"quantity\": 10.5 } ], \"categoryCode\": \"AB0001\", \"categoryDesc\": \"Medical Equipment\", \"customField\": { \"field1\": \"value1\", \"field2\": \"value2\" }, \"deleted\": true, \"description\": \"Description\", \"documentSequenceCode\": \"P-0000001\", \"id\": 1234, \"images\": [ \"string\" ], \"inventory\": { \"availableQuantity\": 100, \"costOfGoodsSoldAccountCode\": \"A-10231\", \"inventoryAccountCode\": \"A-10232\", \"inventoryAccountName\": \"Inventory Account\", \"openingQuantity\": 10, \"openingValuation\": 100.4, \"stockAdjustmentAccountCode\": \"A-10234\", \"warehouseCode\": \"WH-00001\" }, \"manufacturingCostAccountCode\": \"AC-0000012\", \"name\": \"Apple\", \"productId\": \"P000011\", \"purchaseAccountCode\": \"A-0012\", \"purchasePrice\": 123.33, \"purchasePriceTaxInclusive\": true, \"purchaseReturnAccountCode\": \"A-0014\", \"purchaseTaxCode\": \"T-001\", \"reorderEnabled\": true, \"reorderLevel\": 100, \"salesAccountCode\": \"A-0013\", \"salesPrice\": 120, \"salesPriceTaxInclusive\": false, \"salesReturnAccountCode\": \"A-0015\", \"salesTaxCode\": \"T-002\", \"sequenceFormat\": 1, \"stockUom\": 2, \"taxable\": true, \"type\": \"TRACKED\" }, \"productCode\": \"P002\", \"productDescription\": \"Description\", \"productOrder\": 1, \"productQuantity\": 2, \"purchaseOrderItemCode\": \"POI-00001\", \"tax\": { \"accountCode\": \"AC-001\", \"code\": \"TC-001\", \"deleted\": false, \"description\": \"sales Tax for SG\", \"name\": \"SGST\", \"percent\": 7, \"status\": \"active\", \"taxCode\": \"TC-001\", \"type\": \"SALES\" }, \"taxAmount\": 0.5, \"taxCode\": \"GST7\", \"totalAmount\": 2.3, \"unitPrice\": 2 } ], \"receiptStatus\": \"FULLY_RECEIVED\", \"sequenceFormat\": 1, \"shipFrom\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"shipTo\": { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" }, \"status\": \"OPEN\", \"totalAmount\": 123.33, \"unitPriceGstInclusive\": false, \"vendorCode\": \"V001\", \"warehouseCode\": \"WH-000001\"}"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| purchaseOrderRequest | body | purchaseOrderRequest | Yes | [PurchaseOrderRequest](#purchaseorderrequest) |

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
    "name": "ABC Pte Ltd"
  },
  "currencyCode": "C001",
  "customField": [
    {
      "label": "Label",
      "module": "Order",
      "value": "Extra Information"
    }
  ],
  "deliveryDate": "01-10-2019",
  "documentDate": "01-10-2019",
  "documentSequenceCode": "0000001",
  "draft": false,
  "dropShip": true,
  "dueDate": "01-10-2019",
  "exchangeRate": 0.456345,
  "linkedDocuments": [
    {
      "documentCode": "QO-0000001",
      "documentSequenceCode": "0000001",
      "documentType": "QUOTATION"
    }
  ],
  "memo": "Memo details",
  "openingOrder": true,
  "orderType": "Inventory",
  "purchaseOrderItems": [
    {
      "accountCode": "AC001",
      "customField": [
        {
        "label": "Label",
        "module": "Order",
        "value": "Extra Information"
        }
      ],
      "discount": 2,
      "discountInPercent": true,
      "id": 2,
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
      "productCode": "P002",
      "productDescription": "Description",
      "productOrder": 1,
      "productQuantity": 2,
      "purchaseOrderItemCode": "POI-00001",
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
      "unitPrice": 2
    }
  ],
  "receiptStatus": "FULLY_RECEIVED",
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
  "totalAmount": 123.33,
  "unitPriceGstInclusive": false,
  "vendorCode": "V001",
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
  "billed": false,
  "contact": {
    "address": "Raffles Place 1",
    "name": "ABC Pte Ltd"
  },
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
  "currencyCode": "C001",
  "customField": [
    {
      "label": "Label",
      "module": "Order",
      "value": "Extra Information"
    }
  ],
  "deliveryDate": "01-10-2019",
  "documentDate": "01-10-2019",
  "documentSequenceCode": "0000001",
  "draft": false,
  "dropShip": true,
  "dueDate": "01-10-2019",
  "exchangeRate": 0.456345,
  "id": 1,
  "linkedDocuments": [
    {
      "documentCode": "QO-0000001",
      "documentSequenceCode": "0000001",
      "documentType": "QUOTATION"
    }
  ],
  "memo": "Memo details",
  "openingOrder": true,
  "orderType": "Inventory",
  "pendingReceipt": false,
  "poCode": "PO0001",
  "purchaseOrderItems": [
    {
      "accountCode": "AC001",
      "customField": [
        {
        "label": "Label",
        "module": "Order",
        "value": "Extra Information"
        }
      ],
      "discount": 2,
      "discountInPercent": true,
      "id": 2,
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
      "productCode": "P002",
      "productDescription": "Description",
      "productOrder": 1,
      "productQuantity": 2,
      "purchaseOrderItemCode": "POI-00001",
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
      "unitPrice": 2
    }
  ],
  "receiptStatus": "FULLY_RECEIVED",
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
  "totalAmount": 123.33,
  "unitPriceGstInclusive": false,
  "vendorCode": "V001",
  "warehouseCode": "WH-000001"
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Order has been updated successfully. | [PurchaseOrderResponse](#purchaseorderresponse) |
| 201 | Created |  |
| 400 | Purchase order draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---

### Retrieve Order

Get order by code. [More about retrieve order](https://deskera.docs.apiary.io/#reference/order-apis/v1orderspurchasecode/get-order-by-code)

##### Description:

- Allows you to retrieve an existing order details by it's code.

#### GET
#### /v1/orders/purchase/code/{code}
##### Request URL

```java
https://bifrost.deskera.com/v1/orders/purchase/code/OR001
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/orders/purchase/code/OR001" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
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
  "billed": false,
  "contact": {
    "address": "Raffles Place 1",
    "name": "ABC Pte Ltd"
  },
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
  "currencyCode": "C001",
  "customField": [
    {
      "label": "Label",
      "module": "Order",
      "value": "Extra Information"
    }
  ],
  "deliveryDate": "01-10-2019",
  "documentDate": "01-10-2019",
  "documentSequenceCode": "0000001",
  "draft": false,
  "dropShip": true,
  "dueDate": "01-10-2019",
  "exchangeRate": 0.456345,
  "id": 1,
  "linkedDocuments": [
    {
      "documentCode": "QO-0000001",
      "documentSequenceCode": "0000001",
      "documentType": "QUOTATION"
    }
  ],
  "memo": "Memo details",
  "openingOrder": true,
  "orderType": "Inventory",
  "pendingReceipt": false,
  "poCode": "PO0001",
  "purchaseOrderItems": [
    {
      "accountCode": "AC001",
      "customField": [
        {
        "label": "Label",
        "module": "Order",
        "value": "Extra Information"
        }
      ],
      "discount": 2,
      "discountInPercent": true,
      "id": 2,
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
      "productCode": "P002",
      "productDescription": "Description",
      "productOrder": 1,
      "productQuantity": 2,
      "purchaseOrderItemCode": "POI-00001",
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
      "unitPrice": 2
    }
  ],
  "receiptStatus": "FULLY_RECEIVED",
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
  "totalAmount": 123.33,
  "unitPriceGstInclusive": false,
  "vendorCode": "V001",
  "warehouseCode": "WH-000001"
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderResponse](#purchaseorderresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

## Models

---


### PurchaseOrderResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder | No |
| billTo | [Address](#address) | Bill to Address | No |
| billed | boolean | Purchase order billed | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| currencyCode | string | Currency | Yes |
| deliveryDate | string | Delivery date | No |
| documentDate | string | Document date | Yes |
| documentSequenceCode | string | Purchase Order Code | No |
| draft | boolean | Purchase order drafted | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship | No |
| dueDate | string | Document date | Yes |
| exchangeRate | number | Exchange rate | No |
| id | long | Purchase order id | No |
| memo | string | Memo | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type | No |
| pendingReceipt | boolean | Purchase order pending receipt | No |
| poCode | string | Purchase order code | No |
| purchaseOrderItems | [ [PurchaseOrderItemDetails](#purchaseorderitemdetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status | No |
| totalAmount | number | Total amount | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive | No |
| vendorCode | string | Vendor | Yes |
| warehouseCode | string | Warehouse Code | Yes |

### PurchaseOrderRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| currencyCode | string | Currency | Yes |
| deliveryDate | string | Delivery date | No |
| documentDate | string | Document date | Yes |
| documentSequenceCode | string | Purchase Order Code | No |
| draft | boolean | True if want to save as draft. | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship | No |
| dueDate | string | Document date | Yes |
| exchangeRate | number | Exchange rate | No |
| memo | string | Memo | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type | No |
| purchaseOrderItems | [ [PurchaseOrderItemDetails](#purchaseorderitemdetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods | No |
| sequenceFormat | string | Sequence Format Id | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status | No |
| totalAmount | number | Total amount | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive | No |
| vendorCode | string | Vendor | Yes |
| warehouseCode | string | Warehouse Code | Yes |

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

### PurchaseOrderItemDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account | No |
| discount | number | Discount | No |
| discountInPercent | boolean | Discount in percentage | No |
| id | long | ID | No |
| productCode | string | Product | No |
| productDescription | string | Description | No |
| productOrder | integer | Product view order | No |
| productQuantity | number | Product quantity | No |
| purchaseOrderItemCode | string | Purchase Item Code | No |
| taxAmount | number | Tax amount | No |
| taxCode | string | Tax code | No |
| totalAmount | number | Total amount | Yes |
| unitPrice | number | Unit price / Amount | No |