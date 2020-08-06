---
id: productapi
title: Product APIs
sidebar_label: Product
---
Product describe the services or goods offering to your customers or vendors. For example, you might offer Essential and Premium version of your product. Offering of each version of your product would be separate product with different [pricing](https://www.deskera.com/deskera-pricing/).

`ProductRequest` help you to create a new product, and update a particular product.

More about [Product API documentation](https://deskera.docs.apiary.io/#reference/products-apis)

## API
---
### Search Product

Get products by filter criteria. [More about search product](https://deskera.docs.apiary.io/#reference/products-apis/v1products/get-products-by-filter-criteria)

##### Description:

- Allows you to retrieve a list of all products.
- Allows you to retrieve specific products based on it's filter criteria.

#### GET
#### /v1/products

##### Request URL

```java
https://bifrost.deskera.com/v1/products?limit=10&page=0&sort=createdAt&sortDir=desc
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/products?limit=10&page=0&sort=createdAt&sortDir=desc" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
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
        "cessRule": "Math.max(21*amount/100,4170*quantity/1000)",
        "cessRuleDescription": "21% or Rs. 4170 per thousand, whichever is higher",
        "customField": {
            "field1": "value1",
            "field2": "value2"
        },
        "deleted": true,
        "description": "Description",
        "documentSequenceCode": "P-0000001",
        "glAccountCode": "A-0017",
        "hsnOrSacCode": 1234,
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
        "itcAdjustment": "ITC_IS_BLOCKED",
        "manufacturingCostAccountCode": "AC-0000012",
        "name": "Apple",
        "offeringType": "GOODS",
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
        "taxExemptionReason": "EXEMPTED",
        "taxPreference": true,
        "taxable": true,
        "type": "TRACKED"
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
  "totalOpeningValuation": 0,
  "totalElements": 0,
  "totalPages": 0,
  "first": true,
  "sort": {
    "sorted": true,
    "unsorted": false,
    "empty": false
  },
  "numberOfElements": 0,
  "last": true,
  "size": 10,
  "number": 0,
  "empty": true
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products have been fetched successfully. | [ProductResponseIndia](#productresponseindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Create Product

Create a new product. [More about create product](https://deskera.docs.apiary.io/#reference/products-apis/v1products/create-a-new-product)

##### Description:

- Allows you to create a new product.

#### POST
#### /v1/products
##### Request URL

```java
https://bifrost.deskera.com/v1/products
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/products" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"name\": \"Demo Product\", \"description\": \"Demo Product Description\", \"type\": \"TRACKED\", \"sequenceFormat\": \"5eeb3cb495ec493bcc4003e5\", \"barcode\": \"123123132\", \"purchaseAccountCode\": \"AC-0000032\", \"purchasePrice\": 100, \"purchaseTaxCode\": \"TX-0000011\", \"purchasePriceTaxInclusive\": true, \"salesAccountCode\": \"AC-0000023\", \"salesPrice\": 120, \"salesTaxCode\": \"TX-0000001\", \"salesPriceTaxInclusive\": true, \"taxable\": true, \"stockUom\": \"2\", \"inventory\": { \"costOfGoodsSoldAccountCode\": \"AC-0000030\", \"inventoryAccountCode\": \"AC-0000004\", \"stockAdjustmentAccountCode\": \"AC-0000045\", \"openingQuantity\": 10, \"availableQuantity\": 0, \"openingValuation\": 1000, \"warehouseCode\": \"WH-0000001\" }, \"bomProductsConfiguration\": [ ], \"whtApplicable\": false, \"exciseApplicable\": false, \"exciseRate\": 0, \"exciseType\": \"FLAT\", \"images\": [ null ], \"manufacturingCostAccountCode\": \"AC-0000063\", \"bomAddCostConfiguration\": [ ], \"offeringType\": \"GOODS\", \"exemptedMalaysia\": true, \"whtSectionToWhtRateId\": null, \"customField\": null, \"taxPreference\": true}"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| productRequest | body | productRequest | Yes | [ProductRequest](#productrequest) |

##### Sample Request

```java
{
  "name": "Demo Product",
  "description": "Demo Product Description",
  "type": "TRACKED",
  "sequenceFormat": "5eeb3cb495ec493bcc4003e5",
  "barcode": "12131235",
  "purchaseAccountCode": "AC-0000032",
  "purchasePrice": 100,
  "purchaseTaxCode": "TX-0000011",
  "purchasePriceTaxInclusive": true,
  "salesAccountCode": "AC-0000023",
  "salesPrice": 120,
  "salesTaxCode": "TX-0000001",
  "salesPriceTaxInclusive": true,
  "taxable": true,
  "stockUom": "2",
  "inventory": {
    "costOfGoodsSoldAccountCode": "AC-0000030",
    "inventoryAccountCode": "AC-0000004",
    "stockAdjustmentAccountCode": "AC-0000045",
    "openingQuantity": 10,
    "availableQuantity": 0,
    "openingValuation": 1000,
    "warehouseCode": "WH-0000001"
  },
  "bomProductsConfiguration": [

  ],
  "whtApplicable": false,
  "exciseApplicable": false,
  "exciseRate": 0,
  "exciseType": "FLAT",
  "images": [
    null
  ],
  "manufacturingCostAccountCode": "AC-0000063",
  "bomAddCostConfiguration": [

  ],
  "offeringType": "GOODS",
  "exemptedMalaysia": true,
  "whtSectionToWhtRateId": null,
  "customField": null,
  "taxPreference": true
}
```

##### Sample Response
```java
{
  "name": "Demo Product",
  "type": "TRACKED",
  "barcode": "12131235",
  "description": "Demo Product Description",
  "purchasePrice": 100.0,
  "salesPrice": 120.0,
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
    "openingQuantity": 10.0,
    "openingValuation": 1000.0,
    "availableQuantity": 10.0,
    "costOfGoodsSoldAccountCode": "AC-0000030",
    "inventoryAccountCode": "AC-0000004",
    "stockAdjustmentAccountCode": "AC-0000045",
    "inventoryAccountName": null,
    "warehouseCode": "WH-0000001"
  },
  "categoryCode": null,
  "categoryDesc": null,
  "taxable": true,
  "customField": null,
  "reorderEnabled": false,
  "reorderLevel": null,
  "documentSequenceCode": "P-0000003",
  "sequenceFormat": "5eeb3cb495ec493bcc4003e5",
  "errorMessage": null,
  "id": 58553,
  "productId": "P-0000005",
  "active": true,
  "deleted": false,
  "bomProductsConfiguration": [],
  "bomAddCostConfiguration": []
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ProductResponse](#productresponse) |
| 201 | Product has been created successfully. | [ProductResponse](#productresponse) |
| 400 | Product creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Update Product

Update product information. [More about update product](https://deskera.docs.apiary.io/#reference/products-apis/v1productsid/update-product-information)

##### Description:

- Allows you to update a specific product information.

#### PUT
#### /v1/products/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/products/1
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/products/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"barcode\": 2365234, \"bomAddCostConfiguration\": [ { \"label\": \"Labour charges\", \"price\": 10.5 } ], \"bomProductsConfiguration\": [ { \"itemId\": 1234, \"itemName\": \"Apple\", \"quantity\": 10.5 } ], \"categoryCode\": \"AB0001\", \"categoryDesc\": \"Medical Equipment\", \"customField\": { \"field1\": \"value1\", \"field2\": \"value2\" }, \"description\": \"Description\", \"documentSequenceCode\": \"P-0000001\", \"images\": [ \"string\" ], \"inventory\": { \"availableQuantity\": 100, \"costOfGoodsSoldAccountCode\": \"A-10231\", \"inventoryAccountCode\": \"A-10232\", \"inventoryAccountName\": \"Inventory Account\", \"openingQuantity\": 10, \"openingValuation\": 100.4, \"stockAdjustmentAccountCode\": \"A-10234\", \"warehouseCode\": \"WH-00001\" }, \"manufacturingCostAccountCode\": \"AC-0000012\", \"name\": \"Apple\", \"purchaseAccountCode\": \"A-0012\", \"purchasePrice\": 123.33, \"purchasePriceTaxInclusive\": true, \"purchaseReturnAccountCode\": \"A-0014\", \"purchaseTaxCode\": \"T-001\", \"reorderEnabled\": true, \"reorderLevel\": 100, \"salesAccountCode\": \"A-0013\", \"salesPrice\": 120, \"salesPriceTaxInclusive\": false, \"salesReturnAccountCode\": \"A-0015\", \"salesTaxCode\": \"T-002\", \"sequenceFormat\": 1, \"stockUom\": 2, \"taxable\": true, \"type\": \"TRACKED\"}"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| productRequest | body | productRequest | Yes | [ProductRequest](#productrequest) |

##### Sample request
```java
{
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
  "description": "Description",
  "documentSequenceCode": "P-0000001",
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
}
```

##### Sample Response
```java
{
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
  "cessRule": "Math.max(21*amount/100,4170*quantity/1000)",
  "cessRuleDescription": "21% or Rs. 4170 per thousand, whichever is higher",
  "customField": {
    "field1": "value1",
    "field2": "value2"
  },
  "deleted": true,
  "description": "Description",
  "documentSequenceCode": "P-0000001",
  "glAccountCode": "A-0017",
  "hsnOrSacCode": 1234,
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
  "itcAdjustment": "ITC_IS_BLOCKED",
  "manufacturingCostAccountCode": "AC-0000012",
  "name": "Apple",
  "offeringType": "GOODS",
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
  "taxExemptionReason": "EXEMPTED",
  "taxPreference": true,
  "taxable": true,
  "type": "TRACKED"
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product has been updated successfully. | [ProductResponseIndia](#productresponseindia) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

## Models

---

### ProductResponseIndia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Product status | No |
| barcode | string | Product barcode | No |
| bomAddCostConfiguration | [ [BomAdditionalCostDto](#bomadditionalcostdto) ] | Bom additional cost information | No |
| bomProductsConfiguration | [ [BomMetaDto](#bommetadto) ] | Bom Products information | No |
| categoryCode | string | Category code | No |
| categoryDesc | string | Category description | No |
| cessRule | string | Cess rule expression | No |
| cessRuleDescription | string | Cess rule description | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields | No |
| deleted | boolean | Product delete status | No |
| description | string | Product description | No |
| documentSequenceCode | string | Product Sequence code | No |
| glAccountCode | string | GL account code | No |
| hsnOrSacCode | string | HSN or SAC code of product | No |
| id | long | Product ID | No |
| images | [ string ] | Product image url's | No |
| inventory | [InventoryDto](#inventorydto) | Inventory information required for Tracked Products. | No |
| itcAdjustment | string | ITC adjustment | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code | No |
| name | string | Product Name | Yes |
| offeringType | string | Offering type | No |
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
| taxExemptionReason | string | Tax Exempted reason to be filled, if taxPreference is true | No |
| taxPreference | boolean | Whether Product is Tax Exempted | No |
| taxable | boolean | Is taxable? | No |
| type | string | Product type | Yes |

### BomAdditionalCostDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| label | string | Name of manufacturing service | No |
| price | number | Quantity of product in bom | No |

### BomMetaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| itemId | long | id of item in bom | No |
| itemName | string | Product Name | Yes |
| quantity | number | Quantity of product in bom | No |


### CustomFieldItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| label | string | Custom Field Name | Yes |
| module | string | Supported Modules | No |
| value | object | Dimension Value | No |

### InventoryDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQuantity | double | Available quantity | No |
| costOfGoodsSoldAccountCode | string | Cost of goods sold account code | Yes |
| inventoryAccountCode | string | Inventory account code | Yes |
| inventoryAccountName | string | Inventory account name | Yes |
| openingQuantity | double | Opening quantity | No |
| openingValuation | double | Opening valuation | No |
| stockAdjustmentAccountCode | string | Stock adjustment account code | Yes |
| warehouseCode | string | Warehouse code | Yes |


### ProductRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| barcode | string |  | No |
| categoryCode | string | Category code | No |
| categoryDesc | string | Category description | No |
| customField | object | JSON object for custom fields | No |
| description | string | Product description | No |
| documentSequenceCode | string | Product Sequence code | No |
| images | [ string ] | Product image url's | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code | No |
| name | string | Product Name | Yes |
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
