---
id: inventoryapi
title: Inventory APIs
sidebar_label: Inventory
---
`Inventory` is related to the stock available and the list of warehouse. You will be able to create, update and list all of the stocks or warehouses.

## API
---

### Create Stock Adjustment

Create stock adjustment.

##### Description:

- Allows you to create a new stock adjustment entry.

#### POST
#### /v1/inventories/stockAdjustment

##### Request URL

```java
https://bifrost.deskera.com/v1/inventories/stockAdjustment
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/inventories/stockAdjustment" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"adjustmentDate\": \"2020-06-16T04:46:02.239Z\", \"adjustmentReason\": \"RETURNED\", \"adjustmentType\": \"STOCK_IN\", \"code\": \"SA_001\", \"notes\": \"Stock Adjustment In Created\", \"stockAdjustmentItems\": [ { \"perUnitValue\": 0, \"productVariantCode\": \"P-0000001\", \"quantity\": 0 } ], \"totalValue\": 0, \"warehouseCode\": \"WH-0000001\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [StockAdjustmentDto](#stockadjustmentdto) |

##### Sample Request

```java
{
  "adjustmentDate": "2020-06-16T04:46:02.239Z",
  "adjustmentReason": "RETURNED",
  "adjustmentType": "STOCK_IN",
  "code": "SA_001",
  "notes": "Stock Adjustment In Created",
  "stockAdjustmentItems": [
    {
      "perUnitValue": 0,
      "productVariantCode": "P-0000001",
      "quantity": 0
    }
  ],
  "totalValue": 0,
  "warehouseCode": "WH-0000001"
}
```

##### Sample Response

```java
{
  "adjustmentDate": "2020-06-16T04:51:40.901Z",
  "adjustmentReason": "RETURNED",
  "adjustmentType": "STOCK_IN",
  "code": "SA_001",
  "notes": "Stock Adjustment In Created",
  "stockAdjustmentItems": [
    {
      "perUnitValue": 0,
      "productVariantCode": "P-0000001",
      "quantity": 0
    }
  ],
  "totalValue": 0,
  "warehouseCode": "WH-0000001"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock adjustment created successfully. | [StockAdjustmentDto](#stockadjustmentdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Update Stock Adjustment
Update stock adjustment by code.

##### Description:

- Allows you to update stock adjustment by code for a tenant.

#### PUT
#### /v1/inventories/stockAdjustment

##### Request URL

```java
https://bifrost.deskera.com/v1/inventories/stockAdjustment?code=SA_001&notes=Notes&reason=RETURNED
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/inventories/stockAdjustment?code=SA_001&notes=Notes&reason=RETURNED" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | query |  | No | string |
| notes | query |  | No | string |
| reason | query |  | No | string |

##### Sample Response
```java
{
  "adjustmentDate": "2020-06-16T04:51:40.901Z",
  "adjustmentReason": "RETURNED",
  "adjustmentType": "STOCK_IN",
  "code": "SA_001",
  "notes": "Notes",
  "stockAdjustmentItems": [
    {
      "perUnitValue": 0,
      "productVariantCode": "P-0000001",
      "quantity": 0
    }
  ],
  "totalValue": 0,
  "warehouseCode": "WH-0000001"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Edited stock adjustment for given code successfully. | [StockTransferDto](#stocktransferdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Search Stock Adjustment

Search stock adjustments.

##### Description:

- Allows you to retrieve a list of all stock adjustments.
- Allows you to retrieve a list of stock adjustments based on it's filter criteria.

#### GET
#### /v1/inventories/stockAdjustment/search

##### Request URL

```java
https://bifrost.deskera.com/v1/inventories/stockAdjustment/search?limit=10&page=0&sort=createdAt&sortDir=asc
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/inventories/stockAdjustment/search?limit=10&page=0&sort=createdAt&sortDir=DESC" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fromDate | query | fromDate | No | dateTime |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| toDate | query | toDate | No | dateTime |

##### Sample Response

```java
{
  "content": [
    {
      "code": "ADJ-0000001",
      "warehouseCode": "WH-0000001",
      "warehouseName": "Primary Warehouse",
      "adjustmentDate": "2020-06-16T04:46:02.239+0000",
      "adjustmentType": "STOCK_IN",
      "adjustmentReason": "RETURNED",
      "totalValue": 200,
      "notes": "Test",
      "stockAdjustmentItems": [
        {
          "productVariantCode": "P-0000001",
          "quantity": 20,
          "perUnitValue": 10,
          "productName": "Product 001"
        }
      ]
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
  "last": true,
  "totalPages": 1,
  "totalElements": 1,
  "first": true,
  "sort": {
    "unsorted": false,
    "sorted": true,
    "empty": false
  },
  "numberOfElements": 1,
  "size": 10,
  "number": 0,
  "empty": false
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock adjustments have been fetched successfully. | [StockAdjustmentDto](#stockadjustmentdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Retrieve Stock Adjustment

Get stock adjustment by code.

##### Description:

- Allows you to retrieve stock adjustment by it's code for a tenant.

#### GET
#### /v1/inventories/stockAdjustment/{code}

##### Request URL

```java
https://bifrost.deskera.com/v1/inventories/stockAdjustment/ADJ-0000001
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/inventories/stockAdjustment/ADJ-0000001" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Sample Response

```java
{
  "code": "ADJ-0000001",
  "warehouseCode": "WH-0000001",
  "warehouseName": "Primary Warehouse",
  "adjustmentDate": "2020-06-16T04:46:02.239+0000",
  "adjustmentType": "STOCK_IN",
  "adjustmentReason": "RETURNED",
  "totalValue": 200,
  "notes": "Test",
  "stockAdjustmentItems": [
    {
      "productVariantCode": "P-0000001",
      "quantity": 20,
      "perUnitValue": 10,
      "productName": "Product 001"
    }
  ]
}

```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched stock adjustment for code successfully. | [StockAdjustmentDto](#stockadjustmentdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### List All Stock Adjustment

Get stock adjustment list.

##### Description:

- Allows you to retrieve a list of all stock adjustments for a tenant.

#### GET
#### /v1/inventories/stockAdjustmentList

##### Request URL

```java
https://bifrost.deskera.com/v1/inventories/stockAdjustmentList
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/inventories/stockAdjustmentList" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```


##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Sample Response

```java
[
  {
    "code": "ADJ-0000001",
    "warehouseCode": "WH-0000001",
    "warehouseName": "Primary Warehouse",
    "adjustmentDate": "2020-06-16T04:46:02.239+0000",
    "adjustmentType": "STOCK_IN",
    "adjustmentReason": "RETURNED",
    "totalValue": 200,
    "notes": "Test",
    "stockAdjustmentItems": [
      {
        "productVariantCode": "P-0000001",
        "quantity": 20,
        "perUnitValue": 10,
        "productName": "Product 001"
      }
    ]
  }
]
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock adjustment list fetched successfully. | [ [StockAdjustmentDto](#stockadjustmentdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Create Stock Transfer

Create stock transfer.

##### Description:

- Allows you to create a new stock transfer entry.

#### POST
#### /v1/inventories/stockTransfer

##### Request URL

```java
https://bifrost.deskera.com/v1/inventories/stockTransfer
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/inventories/stockTransfer" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"code\": \"SR-000001\", \"destWarehouseCode\": \"WH-0000002\", \"notes\": \"Test Transfer notes\", \"srcWarehouseCode\": \"WH-0000001\", \"stockTransferItems\": [ { \"productVariantCode\": \"P-0000001\", \"quantity\": 1 } ], \"transferDate\": \"2020-06-16T06:07:15.655Z\"}"

```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [StockTransferDto](#stocktransferdto) |

##### Sample Request

```java
{
  "code": "TRF-0000001",
  "destWarehouseCode": "WH-0000002",
  "notes": "Test Transfer notes",
  "srcWarehouseCode": "WH-0000001",
  "stockTransferItems": [
    {
      "productVariantCode": "P-0000001",
      "quantity": 1
    }
  ],
  "transferDate": "2020-06-16T06:07:15.655Z"
}
```

##### Sample Response

```java
{
  "code": "TRF-0000001",
  "srcWarehouseName": "Default",
  "destWarehouseName": "Primary Warehouse",
  "srcWarehouseCode": "WH-0000002",
  "destWarehouseCode": "WH-0000001",
  "notes": "Test Transfer notes",
  "transferDate": "2020-06-16T06:07:15.655+0000",
  "stockTransferItems": [
    {
      "productVariantCode": "P-0000001",
      "productName": "Product 001",
      "quantity": 1
    }
  ]
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock transfer created successfully. | [StockTransferDto](#stocktransferdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Update Stock Transfer

Edit stock transfer by code.

##### Description:

- Allows you to edit stock transfer by it's code for a tenant.

#### PUT
#### /v1/inventories/stockTransfer

##### Request URL

```java
https://bifrost.deskera.com/v1/inventories/stockTransfer?code=TRF-0000001&notes=Sample%20Notes
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/inventories/stockTransfer?code=TRF-0000001&notes=Sample%20Notes" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | query |  | No | string |
| notes | query |  | No | string |

##### Sample Response

```java
{
  "code": "TRF-0000001",
  "srcWarehouseCode": "WH-0000002",
  "destWarehouseCode": "WH-0000001",
  "notes": "Sample Notes",
  "transferDate": "2020-06-16T06:07:15.655+0000",
  "stockTransferItems": [
    {
      "productVariantCode": "P-0000001",
      "productName": "Product 001",
      "quantity": 1
    }
  ]
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Edited stock transfer for given code successfully. | [StockTransferDto](#stocktransferdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Search Stock Transfer

Search stock transfers.

##### Description:

- Allows you to retrieve a list of all stock transfers.
- Allows you to retrieve a list of stock transfers based on it's filter criteria.

#### GET
#### /v1/inventories/stockTransfer/search

##### Request URL

```java
https://bifrost.deskera.com/v1/inventories/stockTransfer/search?limit=10&page=0&sort=createdAt&sortDir=asc
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/inventories/stockTransfer/search?limit=10&page=0&sort=createdAt&sortDir=asc" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```


##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fromDate | query | fromDate | No | dateTime |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| toDate | query | toDate | No | dateTime |

##### Sample Response

```java
{
  "content": [
    {
      "code": "TRF-0000001",
      "srcWarehouseName": "Primary Warehouse",
      "destWarehouseName": "Default",
      "srcWarehouseCode": "WH-0000001",
      "destWarehouseCode": "WH-0000002",
      "notes": "Test Transfer notes",
      "transferDate": "2020-06-16T06:07:15.655+0000",
      "stockTransferItems": [
        {
          "productVariantCode": "P-0000001",
          "productName": "Product 001",
          "quantity": 1
        }
      ]
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
  "last": true,
  "totalPages": 1,
  "totalElements": 1,
  "first": true,
  "sort": {
    "unsorted": false,
    "sorted": true,
    "empty": false
  },
  "numberOfElements": 1,
  "size": 10,
  "number": 0,
  "empty": false
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock transfers have been fetched successfully. | [StockTransferDto](#stocktransferdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Retrieve Stock Transfer

Get stock transfer by code.

##### Description:

- Allows you to get stock transfer details by it's code for a tenant.

#### GET
#### /v1/inventories/stockTransfer/{code}

##### Request URL

```java
https://bifrost.deskera.com/v1/inventories/stockTransfer/TRF-0000001
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/inventories/stockTransfer/TRF-0000001" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Sample Response

```java
{
  "code": "TRF-0000001",
  "srcWarehouseName": "Primary Warehouse",
  "destWarehouseName": "Default",
  "srcWarehouseCode": "WH-0000001",
  "destWarehouseCode": "WH-0000002",
  "notes": "Test Transfer notes",
  "transferDate": "2020-06-16T06:07:15.655+0000",
  "stockTransferItems": [
    {
      "productVariantCode": "P-0000001",
      "productName": "Product 001",
      "quantity": 1
    }
  ]
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched stock transfer for code successfully. | [StockTransferDto](#stocktransferdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### List All Stock Transfer

Get stock transfer list.

##### Description:

- Allows you to retrieve a list of stock transfers for a tenant.

#### GET
#### /v1/inventories/stockTransferList

##### Request URL

```java
https://bifrost.deskera.com/v1/inventories/stockTransferList
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/inventories/stockTransferList" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Sample Response

```java
[
  {
    "code": "TRF-0000001",
    "srcWarehouseName": "Primary Warehouse",
    "destWarehouseName": "Default",
    "srcWarehouseCode": "WH-0000001",
    "destWarehouseCode": "WH-0000002",
    "notes": "Test Transfer notes",
    "transferDate": "2020-06-16T06:07:15.655+0000",
    "stockTransferItems": [
      {
        "productVariantCode": "P-0000001",
        "productName": "Product 001",
        "quantity": 1
      }
    ]
  }
]

```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock transfer list fetched successfully. | [ [StockTransferDto](#stocktransferdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Inventory Valuation

Get Inventory Valuation.

##### Description:

- Allows you to retrieve Inventory Valuation individual products and organization inventory valuation details.

#### GET
#### /v1/inventories/valuation

##### Request URL

```java
https://bifrost.deskera.com/v1/inventories/valuation
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/inventories/valuation" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Sample Response

```java
[
  {
    "totalValuation": 100,
    "totalProduct": 20,
    "productValuations": [
      {
        "productCode": "P-0000001",
        "noOfProduct": 20,
        "valuation": 100,
        "productName": "Product 001"
      }
    ]
  }
]
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory Valuation calculated successfully. | [ [InventoryValuation](#inventoryvaluation) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### List All Warehouses

Get warehouse list for tenant.

##### Description:

- Allows you to retrieve warehouse list for tenant.

#### GET
#### /v1/inventories/warehouses

##### Request URL

```java
https://bifrost.deskera.com/v1/inventories/warehouses
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/inventories/warehouses" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Sample Response

```java
[
  {
    "id": 1,
    "name": "Default",
    "active": true,
    "primary": false,
    "isDeleteEnable": null,
    "code": "WH-0000002",
    "location": {
      "id": 12857,
      "name": "Default",
      "address": [
        {
          "city": "",
          "state": "",
          "country": "SG",
          "address1": "Singapore",
          "address2": "",
          "preferred": null,
          "postalCode": ""
        }
      ]
    }
  }
]
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Warehouse information fetched successfully. | [ [WarehouseResponse](#warehouseresponse) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Warehouse not found with id %s |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Create Warehouse

Create Warehouse.

##### Description:

- Allows you to create a new warehouse.

#### POST
#### /v1/inventories/warehouses

##### Request URL

```java
https://bifrost.deskera.com/v1/inventories/warehouses
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/inventories/warehouses" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"active\": true, \"code\": \"WH-0000003\", \"id\": 101, \"location\": { \"address\": [ { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" } ], \"id\": 201, \"name\": \"Location-1\" }, \"name\": \"Warehouse-1\", \"primary\": false}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| wareHouseRequest | body | wareHouseRequest | Yes | [WareHouseRequest](#warehouserequest) |

##### Sample Request

```java
{
  "active": true,
  "code": "WH-0000003",
  "id": 101,
  "location": {
    "address": [
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
    "id": 201,
    "name": "Location-1"
  },
  "name": "Warehouse-1",
  "primary": false
}

```

##### Sample Response

```java
{
  "id": 101,
  "name": "Warehouse-1",
  "active": true,
  "primary": false,
  "isDeleteEnable": null,
  "code": "WH-0000003",
  "location": {
    "id": 201,
    "name": "Location-1",
    "address": [
      {
        "address1": "218, Robinson Road",
        "address2": "Downtown",
        "country": "C001",
        "state": "CS001",
        "city": "C001",
        "postalCode": "123456",
        "preferred": true
      }
    ]
  }
}

```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [WarehouseResponse](#warehouseresponse) |
| 201 | Warehouse has been created successfully. | [WarehouseResponse](#warehouseresponse) |
| 400 | Warehouse could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Search Warehouse

Search Warehouse.

##### Description:

- Allows you to retrieve a list of all Warehouse.
- Allows you to retrieve a list of all Warehouse based on it's filter criteria.

#### GET
#### /v1/inventories/warehouses/search

##### Request URL

```java
https://bifrost.deskera.com/v1/inventories/warehouses/search?limit=10&page=0&sort=createdAt&sortDir=asc
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/inventories/warehouses/search?limit=10&page=0&sort=createdAt&sortDir=asc" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
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
      "id": 1,
      "name": "Default",
      "active": true,
      "primary": false,
      "isDeleteEnable": false,
      "code": "WH-0000002",
      "location": {
        "id": 12857,
        "name": "Default",
        "address": [
          {
            "city": "",
            "state": "",
            "country": "SG",
            "address1": "Singapore",
            "address2": "",
            "preferred": null,
            "postalCode": ""
          }
        ]
      }
    },
    {
      "id": 101,
      "name": "Warehouse-1",
      "active": true,
      "primary": false,
      "isDeleteEnable": true,
      "code": "WH-0000003",
      "location": {
        "id": 201,
        "name": "Location-1",
        "address": [
          {
            "city": "C001",
            "state": "CS001",
            "country": "C001",
            "address1": "218, Robinson Road",
            "address2": "Downtown",
            "preferred": true,
            "postalCode": "123456"
          }
        ]
      }
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
  "last": true,
  "totalPages": 1,
  "totalElements": 2,
  "first": true,
  "sort": {
    "unsorted": false,
    "sorted": true,
    "empty": false
  },
  "numberOfElements": 3,
  "size": 10,
  "number": 0,
  "empty": false
}

```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | API to fetch Warehouse. | [WarehouseResponse](#warehouseresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Retrieve Warehouse

Get warehouse details by warehouse code.

##### Description:

- Allows you to retrieve warehouse details by it's warehouse code.

#### GET
#### /v1/inventories/warehouses/{code}

##### Request URL

```java
https://bifrost.deskera.com/v1/inventories/warehouses/WH-0000003
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/inventories/warehouses/WH-0000003" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Sample Response

```java
{
  "id": 101,
  "name": "Warehouse-1",
  "active": true,
  "primary": false,
  "isDeleteEnable": null,
  "code": "WH-0000003",
  "location": {
    "id": 201,
    "name": "Location-1",
    "address": [
      {
        "city": "C001",
        "state": "CS001",
        "country": "C001",
        "address1": "218, Robinson Road",
        "address2": "Downtown",
        "preferred": true,
        "postalCode": "123456"
      }
    ]
  }
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Warehouse information fetched successfully. | [WarehouseResponse](#warehouseresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Warehouse not found with id %s |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Update Warehouse

Update Warehouse.

##### Description:

- Allows you to update an existing Warehouse information.

#### PUT
#### /v1/inventories/warehouses/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/inventories/warehouses/101
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/inventories/warehouses/101" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"active\": true, \"code\": \"WH-0000002\", \"id\": 101, \"location\": { \"address\": [ { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" } ], \"id\": 201, \"name\": \"Location-1\" }, \"name\": \"Default Warehouse-1\", \"primary\": false}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| wareHouseRequest | body | wareHouseRequest | Yes | [WareHouseRequest](#warehouserequest) |

##### Sample Request

```java
{
  "active": true,
  "code": "WH-0000002",
  "id": 101,
  "location": {
    "address": [
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
    "id": 102,
    "name": "Location-1"
  },
  "name": "Default Warehouse-1",
  "primary": false
}

```

##### Sample Response

```java
{
  "id": 101,
  "name": "Default Warehouse-1",
  "active": true,
  "primary": false,
  "isDeleteEnable": null,
  "code": "WH-0000002",
  "location": {
    "id": 102,
    "name": "Location-1",
    "address": [
      {
        "address1": "218, Robinson Road",
        "address2": "Downtown",
        "country": "C001",
        "state": "CS001",
        "city": "C001",
        "postalCode": "123456",
        "preferred": true
      }
    ]
  }
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Warehouse has been updated successfully. | [WarehouseResponse](#warehouseresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Warehouse with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

## Models
---

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

### BoxDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| height | string | Box width. | No |
| length | string | Box length. | No |
| type | string | BOX_S, BOX_M, BOX_L | No |
| width | string | Box width. | No |

### File

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| absolute | boolean |  | No |
| absoluteFile | [File](#file) |  | No |
| absolutePath | string |  | No |
| canonicalFile | [File](#file) |  | No |
| canonicalPath | string |  | No |
| directory | boolean |  | No |
| file | boolean |  | No |
| freeSpace | long |  | No |
| hidden | boolean |  | No |
| name | string |  | No |
| parent | string |  | No |
| parentFile | [File](#file) |  | No |
| path | string |  | No |
| totalSpace | long |  | No |
| usableSpace | long |  | No |

### InputStream

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| InputStream | object |  |  |

### InventoryValuation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| productValuations | [ [ProductValuation](#productvaluation) ] |  | No |
| totalProduct | double | Number of Product | No |
| totalValuation | double | Total Valuation | No |

### LocationDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | [ [Address](#address) ] | List of Address. | No |
| id | long | Id | No |
| name | string | Name of location | No |

### PackedItemQuantityDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| packedQuantity | number | packed quantity of item in the package | No |
| shipmentDocumentItemId | long | Shipment Document Item Id | No |

### Page

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ object ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalPages | integer |  | No |

### Pageable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| offset | long |  | No |
| pageNumber | integer |  | No |
| pageSize | integer |  | No |
| paged | boolean |  | No |
| sort | [Sort](#sort) |  | No |
| unpaged | boolean |  | No |

### Page«StockAdjustmentDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [StockAdjustmentDto](#stockadjustmentdto) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalPages | integer |  | No |

### Page«StockTransferDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [StockTransferDto](#stocktransferdto) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalPages | integer |  | No |

### Page«WarehouseResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [WarehouseResponse](#warehouseresponse) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalPages | integer |  | No |

### Page«object»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ object ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalPages | integer |  | No |

### ProductValuation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| noOfProduct | number | Number of product of same type | No |
| productCode | string | Product Code | No |
| productName | string | Product Name | No |
| valuation | number | Valuation | No |

### ReorderReportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| committedStock | number |  | No |
| incomingStock | number |  | No |
| productName | string |  | No |
| reorderPoint | long |  | No |
| stockInHand | number |  | No |
| warehouseName | string |  | No |

### Sort

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| empty | boolean |  | No |
| sorted | boolean |  | No |
| unsorted | boolean |  | No |

### StockAdjustmentDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| adjustmentDate | dateTime |  | No |
| adjustmentReason | string |  | No |
| adjustmentType | string |  | No |
| code | string |  | No |
| notes | string |  | No |
| stockAdjustmentItems | [ [StockAdjustmentItemDto](#stockadjustmentitemdto) ] |  | No |
| totalValue | number |  | No |
| warehouseCode | string |  | No |

### StockAdjustmentItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| perUnitValue | number |  | No |
| productVariantCode | string |  | No |
| quantity | number |  | No |

### StockTransferDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| destWarehouseCode | string |  | No |
| notes | string |  | No |
| srcWarehouseCode | string |  | No |
| stockTransferItems | [ [StockTransferItemDto](#stocktransferitemdto) ] |  | No |
| transferDate | dateTime |  | No |

### StockTransferItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| productVariantCode | string |  | No |
| quantity | number |  | No |

### URI

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| absolute | boolean |  | No |
| authority | string |  | No |
| fragment | string |  | No |
| host | string |  | No |
| opaque | boolean |  | No |
| path | string |  | No |
| port | integer |  | No |
| query | string |  | No |
| rawAuthority | string |  | No |
| rawFragment | string |  | No |
| rawPath | string |  | No |
| rawQuery | string |  | No |
| rawSchemeSpecificPart | string |  | No |
| rawUserInfo | string |  | No |
| scheme | string |  | No |
| schemeSpecificPart | string |  | No |
| userInfo | string |  | No |

### URL

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| authority | string |  | No |
| content | object |  | No |
| defaultPort | integer |  | No |
| file | string |  | No |
| host | string |  | No |
| path | string |  | No |
| port | integer |  | No |
| protocol | string |  | No |
| query | string |  | No |
| ref | string |  | No |
| userInfo | string |  | No |

### WHProductResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| warehouses | [ [WarehouseShortInfo](#warehouseshortinfo) ] |  | No |

### WareHouseRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Warehouse Status. | No |
| code | string | warehouse specific unique code | No |
| id | long | Warehouse Id | No |
| location | [LocationDto](#locationdto) | Location details | No |
| name | string | Warehouse Name. | No |
| primary | boolean | flag to determine if warehouse is primary | No |

### WarehouseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Warehouse Status. | No |
| code | string | warehouse specific unique code | No |
| id | long | Warehouse Id | No |
| location | [LocationDto](#locationdto) | Location details | No |
| name | string | Warehouse Name. | No |
| primary | boolean | flag to determine if warehouse is primary | No |

### WarehouseResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Warehouse Status. | No |
| code | string | warehouse specific unique code | No |
| id | long | Warehouse ID | No |
| isDeleteEnable | boolean | Flag to determine if warehouse can be deleted | No |
| location | [LocationDto](#locationdto) | Location details | No |
| name | string | Warehouse Name. | No |
| primary | boolean | flag to determine if warehouse is primary | No |

### WarehouseShortInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string | warehouse specific unique code | No |
| id | long | Warehouse Id | No |
| location | [LocationDto](#locationdto) | Location details | No |
| name | string | Warehouse Name. | No |
| primary | boolean | flag to determine if warehouse is primary | No |
| productAvailableQuantity | object | Product Code and Available quantity Map. | No |