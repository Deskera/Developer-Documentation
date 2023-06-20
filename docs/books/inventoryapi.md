---
id: inventoryapi
title: Inventory APIs
sidebar_label: Inventory
---
`Inventory` is related to the stock available and the list of warehouse. You will be able to create, update and list all of the stocks or warehouses.

## API
More about [Inventory API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-da75f11b-80b7-45a3-bac4-b59eb3468ce6)
---

### Create Stock Adjustment

Create stock adjustment.

##### Description:

- Allows you to create a new stock adjustment entry.

#### POST
#### /v1/inventories/stockAdjustment

##### Request URL

More about [Inventory API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-da75f11b-80b7-45a3-bac4-b59eb3468ce6)


##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [StockAdjustmentDto](#stockadjustmentdto) |


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

More about [Inventory API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-da75f11b-80b7-45a3-bac4-b59eb3468ce6)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | query |  | No | string |
| notes | query |  | No | string |
| reason | query |  | No | string |


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

More about [Inventory API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-da75f11b-80b7-45a3-bac4-b59eb3468ce6)

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

More about [Inventory API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-da75f11b-80b7-45a3-bac4-b59eb3468ce6)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |


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

More about [Inventory API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-da75f11b-80b7-45a3-bac4-b59eb3468ce6)


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

More about [Inventory API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-da75f11b-80b7-45a3-bac4-b59eb3468ce6)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [StockTransferDto](#stocktransferdto) |


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

More about [Inventory API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-da75f11b-80b7-45a3-bac4-b59eb3468ce6)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | query |  | No | string |
| notes | query |  | No | string |


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

More about [Inventory API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-da75f11b-80b7-45a3-bac4-b59eb3468ce6)


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

More about [Inventory API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-da75f11b-80b7-45a3-bac4-b59eb3468ce6)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |


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

More about [Inventory API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-da75f11b-80b7-45a3-bac4-b59eb3468ce6)

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

More about [Inventory API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-da75f11b-80b7-45a3-bac4-b59eb3468ce6)


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

More about [Inventory API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-da75f11b-80b7-45a3-bac4-b59eb3468ce6)

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

More about [Inventory API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-da75f11b-80b7-45a3-bac4-b59eb3468ce6)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| wareHouseRequest | body | wareHouseRequest | Yes | [WareHouseRequest](#warehouserequest) |


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

More about [Inventory API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-da75f11b-80b7-45a3-bac4-b59eb3468ce6)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |


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

More about [Inventory API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-da75f11b-80b7-45a3-bac4-b59eb3468ce6)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |


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

More about [Inventory API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-da75f11b-80b7-45a3-bac4-b59eb3468ce6)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| wareHouseRequest | body | wareHouseRequest | Yes | [WareHouseRequest](#warehouserequest) |


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

---

### /v1/products/inventories/DeleteAllStockAdj

#### DELETE
##### Summary

Delete Stock Adjustment by tenant Id

##### Description

Api to delete Stock Adjustment by tenant ID

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tenantId | query | tenantId | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Stock Adjustment deleted successfully. |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/addlandedcost

#### POST
##### Summary

Add landed cost to inventory.

##### Description

API to Add landed cost to inventory.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| landedCostDtoList | body | landedCostDtoList | Yes | [ [ProductLandedCostDto](#productlandedcostdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | landed cost has been added successfully. | [ [GoodsReceiptResponse](#goodsreceiptresponse) ] |
| 201 | Created |  |
| 400 | Adding landed cost failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/audit

#### POST
##### Summary

Update Inventory Reports

##### Description

API to Update Inventory Reports

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| auditId | query | auditId | No | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Inventory Reports successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/createinventorytransaction

#### POST
##### Summary

Create Inventory Transaction.

##### Description

API to Create Inventory Transaction

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [InventoryTransactionEvent](#inventorytransactionevent) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Inventory Transaction created successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/deleteinventorytransaction

#### DELETE
##### Summary

Delete Inventory Transaction.

##### Description

API to Delete Inventory Transaction

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [InventoryTransactionEvent](#inventorytransactionevent) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Inventory Transaction deleted successfully. |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/deletelandedcost

#### DELETE
##### Summary

Delete landed cost to inventory.

##### Description

API to Delete landed cost to inventory.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| landedCostDtoList | body | landedCostDtoList | Yes | [ [ProductLandedCostDto](#productlandedcostdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | landed cost has been Deleted successfully. | [ [GoodsReceiptResponse](#goodsreceiptresponse) ] |
| 204 | No Content |  |
| 400 | Deleting landed cost failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/fulfillment/createje/buysell/{tenantId}

#### POST
##### Summary

Create Inventory Transaction JE

##### Description

API to Create Inventory Transaction JE

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| adjustmentCodes | body | adjustmentCodes | No | [ string ] |
| tenantId | path | tenantId | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Inventory Transaction JE created successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/fulfillment/createje/{tenantId}

#### POST
##### Summary

Create Inventory Transaction JE

##### Description

API to Create Inventory Transaction JE

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tenantId | path | tenantId | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Inventory Transaction JE created successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/lastUsedRowRackBin

#### GET
##### Summary

Get last transactions used Row Rack Bin.

##### Description

API to fetch last transactions used Row Rack Bin.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Successfully fetched last transaction's Row Rack Bin. | [RowRackBinLastUsedResponse](#rowrackbinlastusedresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failure to fetched last transaction's Row Rack Bin. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/product/valuation

#### GET
##### Summary

Get Inventory Valuation

##### Description

API to Get Inventory Valuation individual products and organization inventory valuation

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| fromDate | query | fromDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory Valuation calculated successfully. | [ [InventoryValuation](#inventoryvaluation) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/product/warehouse/inventory

#### POST
##### Summary

Product inventories in warehouse

##### Description

Product inventories in warehouse

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product inventory in warehouse is fetched | [ [ProductInventoryByWarehouse](#productinventorybywarehouse) ] |
| 201 | Created |  |
| 400 | Product code is not provided |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/product/{productCode}

#### GET
##### Summary

Product inventory in warehouse

##### Description

Product inventory in warehouse

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCode | path | productCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product inventory in warehouse is fetched | [ [ProductInventoryByWarehouse](#productinventorybywarehouse) ] |
| 400 | Product code is not provided |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/productvaluation

#### POST
##### Summary

Get Product valuation details

##### Description

API to get product valuation details

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product Valuation fetched successfully | [ProductValuationDetails](#productvaluationdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/purchase-return/details

#### GET
##### Summary

Get purchase return details by document code and type

##### Description

API to get purchase return details by document code and type

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentCode | query | documentCode | Yes | string |
| documentType | query | documentType | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched purchase return details by document code and type successfully. | [PurchaseReturnDetails](#purchasereturndetails) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/recoverdata/{tenantId}

#### POST
##### Summary

Recover Inventory Transactions

##### Description

API to Recover Inventory Transactions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productId | body | productId | No | [ string ] |
| tenantId | path | tenantId | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Inventory Transaction Recovered successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/reserved-quantity

#### POST
##### Summary

Get reserved quantity

##### Description

API to get reserve quantity

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Reserved quantity fetched successfully | [ [ReservedQuantityData](#reservedquantitydata) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/reserved-quantity-combined

#### POST
##### Summary

Get reserved quantity

##### Description

API to get reserve quantity

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Reserved quantity fetched successfully | [ [ReservedQuantityData](#reservedquantitydata) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/reserved-quantity/add

#### POST
##### Summary

Get reserved quantity

##### Description

API to get reserve quantity

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| reservedQuantityDataList | body | reservedQuantityDataList | Yes | [ [ReservedQuantityData](#reservedquantitydata) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Reserved quantity fetched successfully | boolean |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/reserved-quantity/remove

#### POST
##### Summary

Get reserved quantity

##### Description

API to get reserve quantity

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| reservedQuantityDataList | body | reservedQuantityDataList | Yes | [ [ReservedQuantityData](#reservedquantitydata) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Reserved quantity fetched successfully | boolean |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/return

#### POST
##### Summary

Create sales/purchase return

##### Description

API to create returns.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [ReturnDto](#returndto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Return adjustment created successfully. | [ReturnDto](#returndto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete sales/purchase return

##### Description

API to delete return.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [ReturnDto](#returndto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ReturnDto](#returndto) |
| 204 | Return has been deleted successfully. | [ReturnDto](#returndto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Edit stock adjustment by code

##### Description

API to edit stock adjustment by code for a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [StockAdjustmentRequest](#stockadjustmentrequest) |

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
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/stockAdjustment/bulk

#### POST
##### Summary

Create stock adjustment

##### Description

API to create a new stock adjustment entry

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| requests | body | requests | Yes | [ [StockAdjustmentDto](#stockadjustmentdto) ] |

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
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/stockAdjustment/bulkimport

#### POST
##### Summary

Create stock adjustment

##### Description

API to create a new stock adjustment entry

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| requests | body | requests | Yes | [ [StockAdjustmentDto](#stockadjustmentdto) ] |

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
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/stockAdjustment/custom-fields

#### GET
##### Summary

Get custom field is used or not

##### Description

API to Get custom field is used or not

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customCode | query | customCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Custom fields status fetched successfully | boolean |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/stockAdjustment/reason

#### POST
##### Summary

Create stock adjustment reason.

##### Description

API to create stock adjustment reason.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| stockAdjustmentReasonDto | body | stockAdjustmentReasonDto | Yes | [StockAdjustmentReasonDto](#stockadjustmentreasondto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [StockAdjustmentReasonDto](#stockadjustmentreasondto) |
| 201 | Stock adjustment reason has been created successfully. | [StockAdjustmentReasonDto](#stockadjustmentreasondto) |
| 400 | Stock adjustment reason creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/stockAdjustment/reason/code/{code}

#### PUT
##### Summary

Update stock adjustment reason.

##### Description

API to update stock adjustment reason.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |
| stockAdjustmentReasonDto | body | stockAdjustmentReasonDto | Yes | [StockAdjustmentReasonDto](#stockadjustmentreasondto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock adjustment reason has been updated successfully. | [ProductResponseIndia](#productresponseindia) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Stock adjustment reason update failed because of insufficient data. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete stock adjustment reason

##### Description

API to delete a stock adjustment reason entry

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Stock adjustment reason deleted successfully. |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/stockAdjustment/reason/search

#### GET
##### Summary

Get stock adjustment reasons.

##### Description

API to fetch stock adjustment reasons.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| type | query | type | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock adjustment reason has been fetched successfully. | [StockAdjustmentReasonDto](#stockadjustmentreasondto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failure to fetched ck adjustment reasons. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/stockAdjustment/search

#### GET
##### Summary

Search stock adjustments

##### Description

API to search stock adjustments

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | No | dateTime |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| toDate | query | toDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock adjustments have been fetched successfully. | [StockAdjustmentDto](#stockadjustmentdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/stockAdjustment/{code}

#### GET
##### Summary

Get stock adjustment by code

##### Description

API to get stock adjustment by code for a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched stock adjustment for code successfully. | [StockAdjustmentDto](#stockadjustmentdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Stock Adjustment by code

##### Description

API to Delete stock transfer by code for a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock Adjustment deleted successfully. | [StockTransferDto](#stocktransferdto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/stockAdjustmentAudit/search

#### GET
##### Summary

searchStockAdjustmentAudit

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| fromDate | query | fromDate | No | dateTime |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| toDate | query | toDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Page«InventoryAuditDto»](#page«inventoryauditdto») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/stockAdjustmentAudit/{code}

#### GET
##### Summary

Get stock adjustment by code

##### Description

API to get stock adjustment by code for a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched stock adjustment for code successfully. | [StockAdjustmentDto](#stockadjustmentdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Stock Adjustment by code

##### Description

API to Delete stock transfer by code for a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock Adjustment deleted successfully. | [StockTransferDto](#stocktransferdto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/stockAdjustmentList

#### GET
##### Summary

Get stock adjustment list

##### Description

API to get list of stock adjustments for a tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock adjustment list fetched successfully. | [ [StockAdjustmentDto](#stockadjustmentdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/stockExport

#### GET
##### Summary

/stockExport

##### Description

Api to Export Stock Transfer/Adjustment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| moduleName | query | moduleName | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Exported Stock Transfer/Adjustment | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/stockTransfer

#### POST
##### Summary

Create stock transfer

##### Description

API to create a new stock transfer entry

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [StockTransferDto](#stocktransferdto) |

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
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Edit stock transfer by code

##### Description

API to edit stock transfer by code for a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [StockTransferRequest](#stocktransferrequest) |

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
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/stockTransfer/custom-fields

#### GET
##### Summary

Get custom field is used or not

##### Description

API to Get custom field is used or not

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customCode | query | customCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Custom fields status fetched successfully | boolean |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/stockTransfer/search

#### GET
##### Summary

Search stock transfers

##### Description

API to search stock transfers

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | No | dateTime |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| toDate | query | toDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock transfers have been fetched successfully. | [StockTransferDto](#stocktransferdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/stockTransfer/{code}

#### GET
##### Summary

Get stock transfer by code

##### Description

API to get stock transfer by code for a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched stock transfer for code successfully. | [StockTransferDto](#stocktransferdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/stockTransfer/{id}

#### DELETE
##### Summary

Delete stock transfer

##### Description

API to delete a stock transfer entry

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | stock transfer deleted successfully. | [StockTransferDto](#stocktransferdto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/stockTransferList

#### GET
##### Summary

Get stock transfer list

##### Description

API to get list of stock transfers for a tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock transfer list fetched successfully. | [ [StockTransferDto](#stocktransferdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/update-je

#### POST
##### Summary

Recalculate OUT JEs Reports

##### Description

API to recalculate out JEs

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | JE recalculation successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/update-product-inventory

#### POST
##### Summary

Update Inventory Reports By product Codes

##### Description

API to Update Inventory by Product Codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | No | [ string ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Inventory successfully updates. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/updateinventorytransaction

#### POST
##### Summary

Update Inventory Transaction.

##### Description

API to Update Inventory Transaction

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [SaveInventoryTxnEventItem](#saveinventorytxneventitem) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Inventory Transaction Updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/updatereports

#### POST
##### Summary

Update Inventory Reports

##### Description

API to Update Inventory Reports

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | No | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Inventory Reports successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/valuation

#### GET
##### Summary

Get Inventory Valuation

##### Description

API to Get Inventory Valuation individual products and organization inventory valuation

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory Valuation calculated successfully. | [ [InventoryValuation](#inventoryvaluation) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/products/inventories/warehouse_xref_duplicate_data_correction_sync

#### POST
##### Summary

inventoryWarehouseXrefDuplicateCorrection

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tenantIds | body | tenantIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [InvWarehouseXrefDto](#invwarehousexrefdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |


---
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
| additionalCharges | [AdditionalCharges](#additionalcharges) | Stock adjustment additional charges details | No |
| adjustmentDate | dateTime |  | No |
| adjustmentDateString | string |  | No |
| adjustmentReason | string |  | No |
| adjustmentType | string | *Enum:* `"STOCK_IN"`, `"STOCK_OUT"` | No |
| advancedTrackingMetaDtoList | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] |  | No |
| audit | boolean |  | No |
| auditCode | string |  | No |
| binCode | string |  | No |
| code | string |  | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| formattedAdjustmentDate | dateTime |  | No |
| isQcEnabled | boolean | Flag will pass as true for QC work flow. Possible value - TRUE \| FALSE<br/>*Example:* `false` | No |
| notes | string |  | No |
| rackCode | string |  | No |
| referenceId | string |  | No |
| rowCode | string |  | No |
| stockAdjustmentItems | [ [StockAdjustmentItemDto](#stockadjustmentitemdto) ] |  | No |
| stockAdjustmentReason | [StockAdjustmentReasonDto](#stockadjustmentreasondto) |  | No |
| totalValue | number |  | No |
| warehouseCode | string |  | No |
| warehouseName | string |  | No |

### StockAdjustmentItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| actualSystemQty | number |  | No |
| additionalChargeAmount | number | *Example:* `123` | No |
| additionalChargeTaxamount | number | *Example:* `123` | No |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Stock adjustment item additional charges details | No |
| adjustmentReason | string |  | No |
| adjustmentType | string | *Enum:* `"STOCK_IN"`, `"STOCK_OUT"` | No |
| batchDetails | [ [BatchDetails](#batchdetails) ] |  | No |
| batchNumber | string |  | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) |  | No |
| documentUom | long |  | No |
| jeCode | string |  | No |
| notes | string |  | No |
| perUnitValue | number |  | No |
| physicalQty | number |  | No |
| productName | string |  | No |
| productSequenceCode | string |  | No |
| productVariantCode | string |  | No |
| quantity | number |  | No |
| serialNumbers | [ string ] |  | No |
| stockAdjustmentAccountCode | string |  | No |
| stockAdjustmentAccountName | string |  | No |
| uomQuantity | number |  | No |
| uomUnitPrice | number |  | No |
| warehouseCode | string |  | No |
| wipProductionCostDetails | [ [WIPConsumptionProductionCostDetails](#wipconsumptionproductioncostdetails) ] |  | No |

### StockTransferDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalChargeAmount | number | *Example:* `123` | No |
| additionalChargeTaxamount | number | *Example:* `123` | No |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Stock transfer item additional charges details | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) |  | No |
| documentUom | long |  | No |
| productName | string |  | No |
| productSequenceCode | string |  | No |
| productVariantCode | string |  | No |
| quantity | number |  | No |
| stockTransferWarehouseInventoryData | [StockTransferWarehouseInventoryData](#stocktransferwarehouseinventorydata) |  | No |
| uomQuantity | number |  | No |

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



### WareHouseRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Warehouse Status.<br/>*Example:* `true` | No |
| assignUserIds | [ long ] |  | No |
| code | string | warehouse specific unique code<br/>*Example:* `"WH-0000001"` | No |
| id | long | Warehouse Id<br/>*Example:* `1` | No |
| location | [LocationDto](#locationdto) | Location details | No |
| name | string | Warehouse Name.<br/>*Example:* `"Warehouse-1"` | No |
| primary | boolean | flag to determine if warehouse is primary<br/>*Example:* `false` | No |
| warehouseBinInfos | [ [WarehouseBinInfo](#warehousebininfo) ] | Warehouse bin Infos | No |
| warehouseRackInfos | [ [WarehouseRackInfo](#warehouserackinfo) ] | Warehouse Rack Infos | No |
| warehouseRowInfos | [ [WarehouseRowInfo](#warehouserowinfo) ] | Warehouse Row Infos | No |
| warehouseType | string | Warehouse type<br/>*Enum:* `"PRIMARY"`, `"REJECTED"`, `"JOB_WORK_OUT"`, `"QA"`, `"NONE"`<br/>*Example:* `"NONE"` | No |

### WarehouseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Warehouse Status.<br/>*Example:* `true` | No |
| assignUserIds | [ long ] |  | No |
| code | string | warehouse specific unique code<br/>*Example:* `"WH-0000001"` | No |
| id | long | Warehouse Id<br/>*Example:* `1` | No |
| location | [LocationDto](#locationdto) | Location details | No |
| name | string | Warehouse Name.<br/>*Example:* `"Warehouse-1"` | No |
| primary | boolean | flag to determine if warehouse is primary<br/>*Example:* `false` | No |
| warehouseBinInfos | [ [WarehouseBinInfo](#warehousebininfo) ] | Warehouse bin Infos | No |
| warehouseRackInfos | [ [WarehouseRackInfo](#warehouserackinfo) ] | Warehouse Rack Infos | No |
| warehouseRowInfos | [ [WarehouseRowInfo](#warehouserowinfo) ] | Warehouse Row Infos | No |
| warehouseType | string | Warehouse type<br/>*Enum:* `"PRIMARY"`, `"REJECTED"`, `"JOB_WORK_OUT"`, `"QA"`, `"NONE"`<br/>*Example:* `"NONE"` | No |

### WarehouseResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Warehouse Status.<br/>*Example:* `true` | No |
| assignUserIds | [ long ] |  | No |
| code | string | warehouse specific unique code<br/>*Example:* `"WH-0000001"` | No |
| id | long | Warehouse ID<br/>*Example:* `1234` | No |
| isDeleteEnable | boolean | Flag to determine if warehouse can be deleted<br/>*Example:* `false` | No |
| location | [LocationDto](#locationdto) | Location details | No |
| name | string | Warehouse Name.<br/>*Example:* `"Warehouse-1"` | No |
| primary | boolean | flag to determine if warehouse is primary<br/>*Example:* `false` | No |
| warehouseBinInfos | [ [WarehouseBinInfo](#warehousebininfo) ] | Warehouse bin Infos | No |
| warehouseRackInfos | [ [WarehouseRackInfo](#warehouserackinfo) ] | Warehouse Rack Infos | No |
| warehouseRowInfos | [ [WarehouseRowInfo](#warehouserowinfo) ] | Warehouse Row Infos | No |
| warehouseType | string | Warehouse type<br/>*Enum:* `"PRIMARY"`, `"REJECTED"`, `"JOB_WORK_OUT"`, `"QA"`, `"NONE"`<br/>*Example:* `"NONE"` | No |

### AbstractStockIssueResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| destWarehouseCode | string |  | No |
| destWarehouseName | string |  | No |
| documentSequenceCode | string | Stock Issue Document Sequence Code<br/>*Example:* `"0000001"` | No |
| formattedTransferDate | dateTime |  | No |
| id | long | Stock Issue id<br/>*Example:* `1` | No |
| memo | string | Memo<br/>*Example:* `"Note this"` | No |
| notes | string |  | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| srcWarehouseCode | string |  | No |
| srcWarehouseName | string |  | No |
| stockIssueCode | string | Stock Issue code<br/>*Example:* `"STKIS001"` | No |
| stockIssueDate | string | Stock Issue date<br/>*Example:* `"25-10-2019"` | Yes |
| stockIssueItems | [ [StockIssueItemDetails](#stockissueitemdetails) ] |  | No |
| stockRequestCode | string | Stock Request code<br/>*Example:* `"STKRQ001"` | No |
| stockRequestItems | [ [StockRequestItemDetails](#stockrequestitemdetails) ] | Stock Request item details | No |
| stockTransferCode | string | Stock Transfer code<br/>*Example:* `"STKIS001"` | No |
| transferDate | dateTime |  | No |
| transferDateString | string |  | No |

### AbstractStockRequestResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approveDate | string | Stock Request Approve date<br/>*Example:* `"25-10-2019"` | Yes |
| approveStatus | string | Approve Status<br/>*Example:* `"PENDING"` | No |
| approvedBy | long | Stock Request approved by<br/>*Example:* `1` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| documentSequenceCode | string | Stock Request Document Sequence Code<br/>*Example:* `"0000001"` | No |
| dstWarehouseCode | string | Destination Warehouse Code<br/>*Example:* `"WH-0000001"` | No |
| id | long | Stock Request id<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedStockIssues | [ [StockIssueResponse](#stockissueresponse) ] |  | No |
| memo | string | Memo<br/>*Example:* `"Note this"` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| stockRequestCode | string | Stock Request code<br/>*Example:* `"STKRQ001"` | No |
| stockRequestDate | string | Stock Request date<br/>*Example:* `"25-10-2019"` | Yes |
| stockRequestItems | [ [StockRequestItemDetails](#stockrequestitemdetails) ] | Stock Request item details | No |

### AdditionalChargeRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| applyTo | string | Module for which charges are applicable<br/>*Enum:* `"BUY"`, `"SELL"`, `"BOTH"`<br/>*Example:* `"SELL"` | Yes |
| apportionFlag | boolean | Apportion this amount or independent charge<br/>*Example:* `true` | No |
| apportionValue | string | Apportion method<br/>*Enum:* `"APPORTION_MANUAL"`, `"APPORTION_ON_QTY"`, `"APPORTION_ON_VALUE"`<br/>*Example:* `"APPORTION_ON_QTY"` | Yes |
| chargeApplicableOn | string | *Enum:* `"TOTAL"`, `"SUBTOTAL"`<br/>*Example:* `"TOTAL"` | Yes |
| chargeValue | double | Charge value for additional charge<br/>*Example:* `200.33` | No |
| description | string | Additional charge description<br/>*Example:* `"Description"` | No |
| expenseAccountCode | string | Expense account code<br/>*Example:* `"A-0013"` | Yes |
| incomeAccountCode | string | Income account code<br/>*Example:* `"A-0012"` | Yes |
| indiaProperties | object | Indian Compliance specific properties<br/>*Example:* `[{"HSN":"0101","UOC":"1111"}]` | No |
| isDiscount | boolean | Check to identify if row is created for discount<br/>*Example:* `true` | No |
| isPercent | boolean | Is percentage enable?<br/>*Example:* `false` | No |
| isTaxable | boolean | Is the charge taxable?<br/>*Example:* `false` | No |
| name | string | Additional Charge Name<br/>*Example:* `"Apple"` | Yes |
| offeringType | string | Offering type<br/>*Enum:* `"GOODS"`, `"SERVICES"`<br/>*Example:* `"GOODS"` | No |
| percentageValue | double | Percentage applicable<br/>*Example:* `123.33` | Yes |
| purchaseTaxCode | string | Purchase tax code<br/>*Example:* `"T-001"` | No |
| salesTaxCode | string | Sales tax code<br/>*Example:* `"T-002"` | No |

### AdditionalChargeResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Additional Charge status<br/>*Example:* `true` | No |
| applyTo | string | Module for which charges are applicable<br/>*Enum:* `"BUY"`, `"SELL"`, `"BOTH"`<br/>*Example:* `"SELL"` | Yes |
| apportionFlag | boolean | Apportion this amount or independent charge<br/>*Example:* `true` | No |
| apportionValue | string | Apportion method<br/>*Enum:* `"APPORTION_MANUAL"`, `"APPORTION_ON_QTY"`, `"APPORTION_ON_VALUE"`<br/>*Example:* `"APPORTION_ON_QTY"` | Yes |
| chargeApplicableOn | string | *Enum:* `"TOTAL"`, `"SUBTOTAL"`<br/>*Example:* `"TOTAL"` | Yes |
| chargeValue | double | Charge value for additional charge<br/>*Example:* `200.33` | No |
| description | string | Additional charge description<br/>*Example:* `"Description"` | No |
| expenseAccountCode | string | Expense account code<br/>*Example:* `"A-0013"` | Yes |
| id | long | Additional Charge ID<br/>*Example:* `1234` | No |
| incomeAccountCode | string | Income account code<br/>*Example:* `"A-0012"` | Yes |
| indiaProperties | object | Indian Compliance specific properties<br/>*Example:* `[{"HSN":"0101","UOC":"1111"}]` | No |
| isDiscount | boolean | Check to identify if row is created for discount<br/>*Example:* `true` | No |
| isPercent | boolean | Is percentage enable?<br/>*Example:* `false` | No |
| isTaxable | boolean | Is the charge taxable?<br/>*Example:* `false` | No |
| name | string | Additional Charge Name<br/>*Example:* `"Apple"` | Yes |
| offeringType | string | Offering type<br/>*Enum:* `"GOODS"`, `"SERVICES"`<br/>*Example:* `"GOODS"` | No |
| percentageValue | double | Percentage applicable<br/>*Example:* `123.33` | Yes |
| purchaseTaxCode | string | Purchase tax code<br/>*Example:* `"T-001"` | No |
| salesTaxCode | string | Sales tax code<br/>*Example:* `"T-002"` | No |

### AdditionalCharges

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalChargeAmount | number |  | No |
| additionalChargeTaxAmount | number |  | No |
| additionalChargesDetails | [ [AdditionalChargesDetails](#additionalchargesdetails) ] |  | No |
| globalDiscount | [GlobalDiscountDetails](#globaldiscountdetails) |  | No |
| globalDiscounts | [ [GlobalDiscountDetails](#globaldiscountdetails) ] |  | No |

### AdditionalChargesDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharge | string |  | No |
| additionalChargeAccountCode | string |  | No |
| addtionalChargeTax | string |  | No |
| addtionalChargeTaxCode | string |  | No |
| apportionFlag | boolean |  | No |
| apportionValue | string | *Enum:* `"APPORTION_MANUAL"`, `"APPORTION_ON_QTY"`, `"APPORTION_ON_VALUE"` | No |
| cgst | number |  | No |
| chargeAmount | number |  | No |
| igst | number |  | No |
| isPercent | boolean |  | No |
| isPreCharge | boolean |  | No |
| percent | number |  | No |
| sgst | number |  | No |
| taxAmount | number |  | No |

### Address

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address1 | string | Address line 1<br/>*Example:* `"218, Robinson Road"` | No |
| address2 | string | Address line 2<br/>*Example:* `"Downtown"` | No |
| city | string | City<br/>*Example:* `"C001"` | No |
| contactName | string | contact name for address<br/>*Example:* `"John Smith"` | No |
| country | string | Country<br/>*Example:* `"C001"` | No |
| destinationOfSupply | string | state in India<br/>*Example:* `"Maharashtra"` | No |
| placeOfSupply | string | state in India<br/>*Example:* `"Punjab"` | No |
| postalCode | string | Postal Code<br/>*Example:* `123456` | No |
| preferred | boolean | Is this a default address?<br/>*Example:* `true` | No |
| state | string | State<br/>*Example:* `"CS001"` | No |

### AdvancedTrackedProductDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackedDetails | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] |  | No |
| advancedTracking | string | *Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| barcode | string |  | No |
| description | string |  | No |
| documentSequenceCode | string |  | No |
| id | long |  | No |
| masterProductCode | string |  | No |
| name | string |  | No |
| pid | string |  | No |
| type | string | *Enum:* `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"` | No |

### AdvancedTrackingBOMDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| costPerUnit | number |  | No |
| expiryDate | dateTime | Expiry date. Date Format is dd-mm-yyyy. Applicable when AdvancedTrackingType is Batch<br/>*Example:* `"01-01-2020"` | No |
| manufacturingDate | dateTime | Manufacturing date. Date Format is dd-mm-yyyy. Applicable when AdvancedTrackingType is Batch<br/>*Example:* `"01-01-2020"` | No |
| qtyToFulfil | double | Batch qty to fulfill<br/>*Example:* `1` | No |
| remainingQuantity | number |  | No |
| serialBatchNumber | string | Batch or serial number to be fulfilled<br/>*Example:* `"Batch-001"` | No |

### AdvancedTrackingCountBySerialBatchDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| numberOfSerialBatch | long | Count of unfulfilled and active serial/batch<br/>*Example:* `4` | Yes |
| totalQtyAvailable | number | Qty available in unfulfilled and active serial/batch<br/>*Example:* `37.5` | Yes |
| unassignedOpeningQuantity | number | Qty still unassigned out of the opening valuation<br/>*Example:* `2` | No |

### AdvancedTrackingData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| batchSize | double | Batch qty<br/>*Example:* `1` | No |
| binCode | string | bin code<br/>*Example:* `"BIN-00001"` | Yes |
| binName | string | bin name<br/>*Example:* `"BIN-00001"` | No |
| qtyToFulfil | double | Batch qty to fulfill<br/>*Example:* `1` | No |
| rackCode | string | Rack code<br/>*Example:* `"RACK-00001"` | Yes |
| rackName | string | Rack name<br/>*Example:* `"RACK-00001"` | No |
| rowCode | string | Row code<br/>*Example:* `"ROW-00001"` | Yes |
| rowName | string | Row Nane<br/>*Example:* `"ROW-00001"` | No |
| serialBatchNumber | string | Batch or serial number to be fulfilled<br/>*Example:* `"Batch-001"` | No |
| warehouseCode | string | Warehouse of selected Batch/Serial<br/>*Example:* `"WH-0000001"` | No |
| warehouseName | string | Warehouse Name<br/>*Example:* `"Warehouse name"` | No |

### AdvancedTrackingFulfilledByDoc

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| qtyFulfilled | double |  | No |
| transactionRefCode | string |  | No |

### AdvancedTrackingFulfilmentDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| binCode | string | bin code<br/>*Example:* `"BIN-00001"` | Yes |
| binName | string | Bin name<br/>*Example:* `"Bin1"` | No |
| qtyToFulfil | double | Batch qty to fulfill<br/>*Example:* `1` | No |
| rackCode | string | Rack code<br/>*Example:* `"RACK-00001"` | Yes |
| rackName | string | Rack name<br/>*Example:* `"Rack1"` | No |
| rowCode | string | Row code<br/>*Example:* `"ROW-00001"` | Yes |
| rowName | string | Row name<br/>*Example:* `"Row1"` | No |
| serialBatchNumber | string | Batch or serial number to be fulfilled<br/>*Example:* `"Batch-001"` | No |
| warehouseCode | string | Warehouse of selected Batch/Serial<br/>*Example:* `"WH-0000001"` | No |
| warehouseName | string | Warehouse name<br/>*Example:* `"Warehouse-1"` | No |

### AdvancedTrackingInventoryTxn

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean |  | No |
| advancedTrackingMeta | [AdvancedTrackingMeta](#advancedtrackingmeta) |  | No |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| id | long |  | No |
| inventoryTransaction | [InventoryTransaction](#inventorytransaction) |  | No |
| key | [AdvancedTrackingInventoryTxnKey](#advancedtrackinginventorytxnkey) |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |

### AdvancedTrackingInventoryTxnKey

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingMetaPk | long |  | No |
| inventoryTxnPk | long |  | No |

### AdvancedTrackingMeta

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| acquiredCost | number |  | No |
| active | boolean |  | No |
| advancedTrackingInventoryTxns | [ [AdvancedTrackingInventoryTxn](#advancedtrackinginventorytxn) ] |  | No |
| advancedTrackingReturned | [AdvancedTrackingReturned](#advancedtrackingreturned) |  | No |
| batchCreationDate | dateTime |  | No |
| batchSize | double |  | No |
| batchSizeFulfilled | double |  | No |
| binCode | string |  | No |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| expiryDate | dateTime |  | No |
| fulfillmentByDoc | [ [AdvancedTrackingFulfilledByDoc](#advancedtrackingfulfilledbydoc) ] |  | No |
| id | long |  | No |
| inventory | [Inventory](#inventory) |  | No |
| manufacturingDate | dateTime |  | No |
| productVariantCode | string |  | No |
| rackCode | string |  | No |
| reservedQuantity | double |  | No |
| reservedQuantityFulfilled | double |  | No |
| rowCode | string |  | No |
| sequence | long |  | No |
| serialBatchNumber | string |  | No |
| subSequence | long |  | No |
| tenantId | long |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |
| warehouseCode | string |  | No |

### AdvancedTrackingMetaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| acquiredCost | number | Acquired cost of the entire serial or batch<br/>*Example:* `1` | No |
| advancedTrackingReturned | [AdvancedTrackingReturned](#advancedtrackingreturned) |  | No |
| batchSize | double | Serial Number or Batch size<br/>*Example:* `1` | Yes |
| batchSizeAvailableForReturn | double | How much of the batch or serial is fulfilled<br/>*Example:* `1` | Yes |
| batchSizeFulfilled | double | How much of the batch or serial is fulfilled<br/>*Example:* `1` | Yes |
| batchSizeReturned | double | How much of the batch or serial is returned<br/>*Example:* `1` | Yes |
| batchSizeReturnedPurchase | double | How much of the batch or serial is returned<br/>*Example:* `1` | Yes |
| binCode | string | bin code<br/>*Example:* `"BIN-00001"` | Yes |
| binName | string | bin Name<br/>*Example:* `"Bin 1"` | Yes |
| expiryDate | dateTime | Expiry date. Date Format is dd-mm-yyyy. Applicable when AdvancedTrackingType is Batch<br/>*Example:* `"01-01-2020"` | No |
| id | long |  | No |
| manufacturingDate | dateTime | Manufacturing date. Date Format is dd-mm-yyyy. Applicable when AdvancedTrackingType is Batch<br/>*Example:* `"01-01-2020"` | No |
| productVariantCode | string | Product code<br/>*Example:* `"P-001"` | Yes |
| rackCode | string | Rack code<br/>*Example:* `"RACK-00001"` | Yes |
| rackName | string | Rack Name<br/>*Example:* `"Rack 1"` | Yes |
| reservedQuantity | double | Reserved Serial Number or Batch size<br/>*Example:* `1` | No |
| reservedQuantityFulfilled | double | Fulfilled reserved serial number or batch size<br/>*Example:* `1` | Yes |
| rowCode | string | Row code<br/>*Example:* `"ROW-00001"` | Yes |
| rowName | string | Row Name<br/>*Example:* `"Row 1"` | Yes |
| sequence | long | Sequence number<br/>*Example:* `1` | No |
| serialBatchNumber | string | Serial Number or Batch Number<br/>*Example:* `"BATCH-001"` | Yes |
| subSequence | long | Subsequence number<br/>*Example:* `1` | No |
| warehouseCode | string | Primary Warehouse<br/>*Example:* `"WH-0000001"` | No |
| warehouseName | string | Primary Warehouse<br/>*Example:* `"warehouse name"` | No |

### AdvancedTrackingReturned

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| batchSizeReturned | double |  | No |
| batchSizeReturnedPurchase | double |  | No |
| returnsByDoc | [ [AdvancedTrackingReturnedByDoc](#advancedtrackingreturnedbydoc) ] |  | No |

### AdvancedTrackingReturnedByDoc

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string |  | No |
| qtyReturned | double |  | No |
| returnType | string | *Enum:* `"SALES_RETURN"`, `"PURCHASE_RETURN"` | No |
| transactionRefCode | string |  | No |

### AttributeDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | Attribute ID<br/>*Example:* `"Id"` | No |
| name | string | Attribute Name<br/>*Example:* `"Colour"` | No |
| values | [ string ] | Attribute values | No |


### BarcodeDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| barcodeField | string |  | No |
| hideBarcodeLabel | boolean |  | No |

### BatchDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| batch | string |  | No |
| expiryDate | dateTime |  | No |
| manufacturingDate | dateTime |  | No |
| quantity | number |  | No |

### BomAdditionalCostDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bomMetaDetailsId | long | id of bomMetaDetailsId<br/>*Example:* `1234` | No |
| bomMetaName | string | BOM Meta Name<br/>*Example:* `"DEFAULT"` | No |
| label | string | Name of manufacturing service<br/>*Example:* `"Labour charges"` | No |
| price | number | Quantity of product in bom<br/>*Example:* `10.5` | No |

### BomExplosionDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTracking | string | Tracking type of product<br/>*Example:* `"NONE"` | No |
| availableQuantity | double | Available Quantity of product in bom<br/>*Example:* `10.5` | No |
| bomProductConfiguration | [ [BomExplosionDto](#bomexplosiondto) ] | Bom Assembly Details | Yes |
| description | string | Description of product<br/>*Example:* `"Product"` | No |
| pid | string | pid<br/>*Example:* `"P-0000001"` | Yes |
| produceProductType | string | Produce Product type<br/>*Enum:* `"NONE"`, `"SCRAP"`, `"COPRODUCT"`<br/>*Example:* `"SCRAP"` | Yes |
| productCode | string | Product Code<br/>*Example:* `"P-0000001"` | Yes |
| productId | long | Product Id<br/>*Example:* `1234` | Yes |
| productName | string | Product Name<br/>*Example:* `"Computer"` | Yes |
| productSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] | substitute details | No |
| productType | string | Tracking type of product<br/>*Example:* `"NONE"` | No |
| purchasePrice | double | Purchase Price of Product<br/>*Example:* `10.5` | No |
| quantityRequired | number | Quantity Required<br/>*Example:* `1` | Yes |
| reservedQuantity | double | Reserved Quantity of product in bom<br/>*Example:* `10.5` | No |
| salesPrice | double | Purchase Price of Product<br/>*Example:* `10.5` | No |
| uom | long | uom Id<br/>*Example:* `2` | Yes |

### BomMetaDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | bom meta details status<br/>*Example:* `true` | No |
| bomAddCostConfiguration | [ [BomAdditionalCostDto](#bomadditionalcostdto) ] | Bom additional cost information | No |
| bomOperationsConfiguration | [ [BomOperationDto](#bomoperationdto) ] | Bom Operations information | No |
| bomProductCostDetails | [ [BomProductCostDetails](#bomproductcostdetails) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| bomProductsConfiguration | [ [BomMetaDto](#bommetadto) ] | Bom Products information | No |
| code | string | bom meta details code<br/>*Example:* `"code"` | No |
| deleted | boolean | bom meta details delete status<br/>*Example:* `true` | No |
| id | long | id of bom meta details <br/>*Example:* `1234` | No |
| isDefault | boolean | bom default<br/>*Example:* `true` | No |
| name | string | bom meta details name<br/>*Example:* `"bom meta name"` | No |
| productId | string | id of bom product<br/>*Example:* `1234` | No |

### BomMetaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bomMetaDetailsId | long | id of bomMetaDetailsId<br/>*Example:* `1234` | No |
| bomMetaName | string | BOM Meta Name<br/>*Example:* `"DEFAULT"` | No |
| bomProductSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] |  | No |
| cost | number | Cost of product in bom<br/>*Example:* `10.5` | No |
| itemId | long | id of item in bom<br/>*Example:* `1234` | No |
| itemName | string | Product Name<br/>*Example:* `"Apple"` | Yes |
| produceProductType | string | Produce Product type<br/>*Enum:* `"NONE"`, `"SCRAP"`, `"COPRODUCT"`<br/>*Example:* `"SCRAP"` | Yes |
| productCode | string |  | No |
| quantity | number | Quantity of product in bom<br/>*Example:* `10.5` | No |
| stockUom | long |  | No |

### BomOperationDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bomMetaDetailsId | long | id of bomMetaDetailsId<br/>*Example:* `1234` | No |
| bomMetaName | string | BOM Meta Name<br/>*Example:* `"DEFAULT"` | No |
| costPerHour | number | Cost of operation in bom<br/>*Example:* `10.5` | No |
| fixedRate | number | Cost of operation in bom<br/>*Example:* `10.5` | No |
| operationId | long | id of operation in bom<br/>*Example:* `1234` | No |
| operationName | string | Operation Name<br/>*Example:* `"Apple"` | Yes |
| totalCost | number | Cost of operation in bom<br/>*Example:* `10.5` | No |

### BomProductCostDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| operationCost | number | Operation Cost<br/>*Example:* `15` | No |
| rawMaterialCost | number | Raw material cost<br/>*Example:* `20` | No |
| totalCost | number | Total cost<br/>*Example:* `35` | No |

### BoxDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| height | string | Box width.<br/>*Example:* `"14 m"` | No |
| length | string | Box length.<br/>*Example:* `"10 m"` | No |
| type | string | BOX_S, BOX_M, BOX_L<br/>*Example:* `"BOX_M"` | No |
| width | string | Box width.<br/>*Example:* `"10 m"` | No |

### ContactUpdatePriceListRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string | Contact code<br/>*Example:* `"C-0000001"` | No |
| priceLists | [ long ] | Set of price lists<br/>*Example:* `[123,456]` | No |

### CustomFieldItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | Dimension Id<br/>*Example:* `11567` | No |
| label | string | Custom Field Name<br/>*Example:* `"Label"` | Yes |
| module | string | Supported Modules | No |
| value | object | Dimension Value<br/>*Example:* `"XYZ"` | No |

### DocumentInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string | Document Code.<br/>*Example:* `"QO-0000001"` | No |
| documentCreatedDate | dateTime | Purchase creation date<br/>*Example:* `"2023-01-01T00:00:00.000+0000"` | No |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| documentType | string | Type of document.<br/>*Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`<br/>*Example:* `"QUOTATION"` | No |

### DocumentUOMSchemaDefinition

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string | UOM Schema Name<br/>*Example:* `"UNIT"` | No |
| schemaId | long | UOM Schema Id<br/>*Example:* `1` | No |
| sinkConversionFactor | number | 10<br/>*Example:* `10` | No |
| sinkUOM | long | 2<br/>*Example:* `2` | No |
| sourceConversionFactor | number | 1<br/>*Example:* `1` | No |
| sourceUOM | long | 4<br/>*Example:* `4` | No |
| uid | string | UOM Schema Definition Id<br/>*Example:* `1` | No |

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

### GlobalDiscountDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string |  | No |
| amount | number |  | No |
| isPercent | boolean |  | No |
| isSubTotalOnly | boolean |  | No |
| name | string |  | No |
| percent | number |  | No |

### GoodsReceiptItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingMetaData | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] |  | No |
| advancedTrackingType | string | *Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| documentItemCode | string | Document order code, It will be Purchase Order/Purchase Invoice item code. Possible value - POI-00001 or PII-00001<br/>*Example:* `"POI-00001"` | Yes |
| documentSequenceCode | string | document sequence code<br/>*Example:* `"IN-0000001"` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| goods_receipt_item_code | string | goods receipt item specific unique code<br/>*Example:* `"GRI-000001"` | No |
| id | long |  | No |
| pendingQuantity | number |  | No |
| productCode | string | Product code<br/>*Example:* `"P-0000001"` | Yes |
| productDescription | string |  | No |
| productName | string |  | No |
| quantityRequired | number | Purchase Ordered Quantity<br/>*Example:* `100` | Yes |
| receiptDate | string | Receipt date<br/>*Example:* `"01-10-2019"` | No |
| receiptQuantity | number | Goods Receipt quantity<br/>*Example:* `20` | Yes |
| uomName | string | UOM name | No |
| uomPendingQuantity | number | uom pending quantity<br/>*Example:* `2` | Yes |
| uomQuantityRequired | number | Purchase Ordered uom Quantity<br/>*Example:* `100` | Yes |
| uomReceiptQuantity | number | uom receipt quantity<br/>*Example:* `2` | Yes |
| warehouseCode | string |  | No |
| warehouseInventoryData | [ [WarehouseInventoryData](#warehouseinventorydata) ] | warehouse Inventory List<br/>*Example:* `[]` | No |


### GoodsReceiptResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachmentIds | [ integer ] | list of attachment id's for this gr | No |
| attachments | [ string ] | Attachments url's | No |
| autoReceipt | boolean | Flag will pass as true for auto receipt flow. Possible value - TRUE \| FALSE<br/>*Example:* `false` | No |
| bulkItemCount | integer | count of bulk goods receipt<br/>*Example:* `0` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| documentCode | string | Document code<br/>*Example:* `"00001"` | Yes |
| documentSequenceCode | string | Document code<br/>*Example:* `"00001"` | Yes |
| documentType | string | Document Type, Stage from where goods receive is requested. Value will PURCHASE_ORDER or PURCHASE_INVOICE<br/>*Example:* `"PURCHASE_ORDER"` | Yes |
| goods_receipt_code | string | goods receipt specific unique code<br/>*Example:* `"GR-0000001"` | No |
| id | long |  | No |
| isBulkGR | boolean | true if the GR created is for bulk goods receipt<br/>*Example:* `true` | No |
| isGoodsReceiptOfLinkedDoc | boolean | Flag will denote if GR is of a linked doc<br/>*Example:* `true` | No |
| items | [ [GoodsReceiptItemDto](#goodsreceiptitemdto) ] | Goods Receipt item details | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked Documents | No |
| parentDocumentSeqCode | string | Document Sequence code of PO or Bill<br/>*Example:* `"00001"` | No |
| parentGrCode | string | goods receipt specific unique code for bulk gr<br/>*Example:* `"GR-0000001"` | No |
| receiptDate | string | Date on which all goods receipt successfully.<br/>*Example:* `"01-10-2019"` | No |
| sequence | integer | Goods receipt sequence<br/>*Example:* `1` | No |
| status | string | fulfillment status, possible value : UNRECEIVED \| PARTIAL_RECEIVED \| FULLY_RECEIVED<br/>*Example:* `"PARTIAL_FULFILLED"` | No |
| transactionLinkId | long | transaction link id for the goods received<br/>*Example:* `1` | No |
| warehouseCode | string | warehouse code<br/>*Example:* `"WH-0000001"` | No |

### InputStream

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| InputStream | object |  |  |

### InvWarehouseXref

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingMeta | [ [AdvancedTrackingMeta](#advancedtrackingmeta) ] |  | No |
| availableQuantity | number |  | No |
| binCode | string |  | No |
| id | long |  | No |
| inventory | [Inventory](#inventory) |  | No |
| openingQuantity | number |  | No |
| openingValuation | number |  | No |
| productVariantCode | string |  | No |
| rackCode | string |  | No |
| reservedQuantity | number |  | No |
| rowCode | string |  | No |
| tenantId | long |  | No |
| warehouse | [Warehouse](#warehouse) |  | No |
| warehouseLevel | string |  | No |

### InvWarehouseXrefDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQuantity | number |  | No |
| binCode | string |  | No |
| id | long |  | No |
| inventoryId | long |  | No |
| openingQuantity | number |  | No |
| openingValuation | number |  | No |
| rackCode | string |  | No |
| reservedQuantity | number |  | No |
| rowCode | string |  | No |
| tenantId | long |  | No |
| warehouseId | long |  | No |

### Inventory

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean |  | No |
| advancedTrackingMeta | [ [AdvancedTrackingMeta](#advancedtrackingmeta) ] |  | No |
| availableQuantity | number |  | No |
| barcode | string |  | No |
| cfield | object |  | No |
| code | string |  | No |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| deleted | boolean |  | No |
| id | long |  | No |
| invWarehouseXrefs | [ [InvWarehouseXref](#invwarehousexref) ] |  | No |
| inventoryTransactions | [ [InventoryTransaction](#inventorytransaction) ] |  | No |
| openingQuantity | number |  | No |
| openingValuation | number |  | No |
| productVariantCode | string |  | No |
| productVariantName | string |  | No |
| reorderLevel | long |  | No |
| reservedQuantity | number |  | No |
| tenantId | long |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |

### InventoryAuditDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| adjustment_date | dateTime |  | No |
| audit_code | string |  | No |

### InventoryDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQuantity | double | Available quantity<br/>*Example:* `100` | No |
| binCode | string | bin code<br/>*Example:* `"BIN-00001"` | Yes |
| binName | string | bin name<br/>*Example:* `"BIN-NAME"` | No |
| costOfGoodsSoldAccountCode | string | Cost of goods sold account code<br/>*Example:* `"A-10231"` | Yes |
| inventoryAccountCode | string | Inventory account code<br/>*Example:* `"A-10232"` | Yes |
| inventoryAccountName | string | Inventory account name<br/>*Example:* `"Inventory Account"` | Yes |
| landedCostWeight | number | Landed cost weight value<br/>*Example:* `10.5` | No |
| openingQuantity | double | Opening quantity<br/>*Example:* `10` | No |
| openingValuation | double | Opening valuation<br/>*Example:* `100.4` | No |
| rackCode | string | Rack code<br/>*Example:* `"RACK-00001"` | Yes |
| rackName | string | Rack name<br/>*Example:* `"RACK-NAME"` | No |
| reservedQuantity | double | Reserved quantity<br/>*Example:* `100` | No |
| rowCode | string | Row code<br/>*Example:* `"ROW-00001"` | Yes |
| rowName | string | Row name<br/>*Example:* `"ROW-NAME"` | No |
| stockAdjustmentAccountCode | string | Stock adjustment account code<br/>*Example:* `"A-10234"` | Yes |
| warehouseCode | string | Warehouse code<br/>*Example:* `"WH-00001"` | Yes |
| wipInventoryAccountCode | string | WIP Inventory account code<br/>*Example:* `"A-10233"` | Yes |

### InventoryTransaction

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| actionType | string |  | No |
| additionalChargesAmount | number |  | No |
| advancedTrackingFulfilmentData | [ [AdvancedTrackingFulfilmentDto](#advancedtrackingfulfilmentdto) ] |  | No |
| advancedTrackingMetaData | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] |  | No |
| binCode | string |  | No |
| contactCode | string |  | No |
| customField | object |  | No |
| customFieldItems | [ [CustomFieldItem](#customfielditem) ] |  | No |
| documentCode | string |  | No |
| documentItemCode | string |  | No |
| documentSequenceCode | string |  | No |
| documentType | string |  | No |
| inventoryTxnActionType | string | *Enum:* `"ADD"`, `"REMOVE"`, `"DEFAULT"` | No |
| isQuickCommit | boolean |  | No |
| productCode | string |  | No |
| purchaseOrderCode | string |  | No |
| quantity | number |  | No |
| rackCode | string |  | No |
| reservedStock | boolean |  | No |
| rowCode | string |  | No |
| salesOrderCode | string |  | No |
| transactionDate | string | *Example:* `"dd-MM-yyyy HH:mm:ss"` | No |
| transactionRefCode | string |  | No |
| unitPrice | number |  | No |
| uomType | string | *Enum:* `"HOUR"`, `"UNIT"`, `"KG"`, `"PIECES"`, `"NA"`, `"DEFAULT"` | No |
| warehouseCode | string |  | No |

### InventoryTransactionEvent

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| inventoryTransactions | [ [InventoryTransaction](#inventorytransaction) ] |  | No |



### InventoryValuation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| productValuations | [ [ProductValuation](#productvaluation) ] |  | No |
| totalProduct | double | Number of Product<br/>*Example:* `30` | No |
| totalValuation | double | Total Valuation<br/>*Example:* `3000` | No |

### InventoryWarehouseDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQuantity | number | Available quantity<br/>*Example:* `100` | No |
| openingQuantity | number | Opening quantity<br/>*Example:* `10` | No |
| openingValuation | number | Opening Valuation<br/>*Example:* `1000` | No |
| warehouseCode | string | Warehouse code<br/>*Example:* `"WH-00001"` | Yes |

### LandedCostCategory

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allocationType | string | *Enum:* `"QUANTITY"`, `"VALUE"`, `"WEIGHT"`, `"MANUAL"`, `"CUSTOM_DUTY"` | No |
| name | string |  | No |


### Location

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean |  | No |
| address | [ [Address](#address) ] |  | No |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| deleted | boolean |  | No |
| holdStocks | boolean |  | No |
| id | long |  | No |
| name | string |  | No |
| tenantId | long |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |

### LocationDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | [ [Address](#address) ] | List of Address. | No |
| id | long | Id<br/>*Example:* `1` | No |
| name | string | Name of location<br/>*Example:* `"Location-1"` | No |

### Map«long,bigdecimal»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Map«long,bigdecimal» | object |  |  |

### OperationCost

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long |  | No |
| operationCode | string |  | No |
| operationCost | number |  | No |
| operatorCost | number |  | No |
| workstationCost | number |  | No |


### PackedItemQuantityDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| packedQuantity | number | packed quantity of item in the package<br/>*Example:* `10` | No |
| shipmentDocumentItemId | long | Shipment Document Item Id<br/>*Example:* `2` | No |
| warehouseInventoryPPSData | [ [WarehouseInventoryPPSData](#warehouseinventoryppsdata) ] | Inventory Warehouse data | No |

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

### Page«InventoryAuditDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [InventoryAuditDto](#inventoryauditdto) ] |  | No |
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

### PicklistResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| barcodeScanner | boolean | Barcode scanner is on/off.<br/>*Example:* `false` | No |
| code | string | Pick list sequence<br/>*Example:* `"0000001"` | No |
| createdDate | dateTime | Pick List creation date<br/>*Example:* `"25-10-2019"` | Yes |
| id | long | Pick List Id<br/>*Example:* `1` | No |
| picklistStatus | string | picking list status: READY_TO_PICK, PICKING_IN_PROGRESS, PICKED<br/>*Enum:* `"READY_TO_PICK"`, `"PICKING_IN_PROGRESS"`, `"PICKED"`<br/>*Example:* `"READY_TO_PICK"` | No |
| ppsDocuments | [ [ShipmentDocumentDto](#shipmentdocumentdto) ] | List of PPS documents. | No |
| status | string | PPS-shipment status<br/>*Enum:* `"READY_TO_PICK"`, `"PICKING_IN_PROGRESS"`, `"PICKED"`, `"READY_TO_PACK"`, `"PACKING_IN_PROGRESS"`, `"PACKED"`, `"READY_TO_SHIP"`, `"SHIPPING_IN_PROGRESS"`, `"PARTIAL_SHIPPED"`, `"SHIPPED"`<br/>*Example:* `"PICKED"` | No |
| warehouse | [WarehouseDto](#warehousedto) | Warehouse details. | No |


### PriceListCurrencySchemaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| currency | string | SGD<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| price | number | 1<br/>*Example:* `1` | No |
| uid | string (uuid) | Price List Currency Schema Id<br/>*Example:* `1` | No |

### PriceListDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Is active or not<br/>*Example:* `true` | No |
| allContacts | boolean | Is active or not<br/>*Example:* `true` | No |
| contacts | [ string ] | Contact codes | No |
| currencies | [ string ] | List of currencies<br/>*Example:* `["SGD"]` | No |
| effectiveDate | dateTime | Price list effective date<br/>*Example:* `"30-06-2021"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| id | long | Price List Id<br/>*Example:* `1` | No |
| name | string | Price list name | No |
| priceListItems | [ [PriceListItemDto](#pricelistitemdto) ] | Price list items | No |
| type | string | Price List type<br/>*Example:* `"SELL"` | No |

### PriceListItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| currencyPrice | [ [PriceListCurrencySchemaDto](#pricelistcurrencyschemadto) ] | Price for Currency | No |
| errors | [ string ] | List of validation error messages | No |
| id | long | Price List Id<br/>*Example:* `1` | No |
| minimumQuantity | number | Minimum Quantity | No |
| priceListId | long | Price list Id | No |
| productId | string | Product Id | No |
| uomId | long | UOM Id | No |


### ProductDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean |  | No |
| advancedTracking | string | *Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| advancedTrackingMetaData | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] |  | No |
| availableQuantity | number |  | No |
| barcode | string |  | No |
| binCode | string | bin code<br/>*Example:* `"BIN-00001"` | Yes |
| bomAdditionalCostDtoList | [ [BomAdditionalCostDto](#bomadditionalcostdto) ] |  | No |
| bomItems | object |  | No |
| bomOperationDtoList | [ [BomOperationDto](#bomoperationdto) ] |  | No |
| categoryCode | string |  | No |
| cfield | object |  | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| description | string |  | No |
| documentSequenceCode | string |  | No |
| hasVariants | boolean |  | No |
| id | long |  | No |
| images | [ string ] |  | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] |  | No |
| multipleUomSchema | boolean |  | No |
| name | string |  | No |
| openingQuantity | number |  | No |
| openingValuation | number |  | No |
| pid | string |  | No |
| purchasePrice | number |  | No |
| rackCode | string | Rack code<br/>*Example:* `"RACK-00001"` | Yes |
| recommendedUom | long |  | No |
| reorderLevel | long |  | No |
| reservedQuantity | number |  | No |
| rowCode | string | Row code<br/>*Example:* `"ROW-00001"` | Yes |
| salesPrice | number |  | No |
| stockAdjustmentAccountCode | string |  | No |
| stockUom | long |  | No |
| taxable | boolean |  | No |
| type | string | *Enum:* `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"` | No |
| uomSchema | long |  | No |
| uomSchemaDto | [UOMSchemaDto](#uomschemadto) |  | No |
| valuationMethod | string | *Enum:* `"FIFO"`, `"AVERAGE"` | No |
| warehouseCode | string |  | No |
| whtSectionToWhtRateId | long |  | No |

### ProductInventoryByWarehouse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | string | Warehouse address | No |
| code | string | warehouse specific unique code<br/>*Example:* `"WH-0000001"` | No |
| name | string | Warehouse Name.<br/>*Example:* `"Warehouse-1"` | No |
| openingQuantity | number | Opening Quantity | No |
| openingValuation | number | Opening Valuation | No |
| primary | boolean | flag to determine if warehouse is primary<br/>*Example:* `false` | No |
| quantity | number | Product quantity available in this warehouse | No |

### ProductLandedCostDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| currency | string | Linked Document Currency<br/>*Example:* `"INR"` | Yes |
| documentCode | string | Document code<br/>*Example:* `"PI-0000001"` | Yes |
| documentSequenceCode | string | Linked Document Sequence code<br/>*Example:* `"PI-0000001"` | Yes |
| exchangeRate | number | Linked Document Currency exchange rate<br/>*Example:* `2.115` | Yes |
| invoiceItemCode | string | Invoice item code<br/>*Example:* `"PII-0000007"` | No |
| jeCode | string | Linked JE Code<br/>*Example:* `"JE-0000001"` | No |
| landedPrice | number | Landed Price<br/>*Example:* `12.5` | Yes |
| landedProductCode | string | Product code<br/>*Example:* `"P00001"` | Yes |
| linkedDocumentCode | string | Linked Document code<br/>*Example:* `"PI-0000007"` | Yes |
| productCode | string | Product code<br/>*Example:* `"P00001"` | Yes |
| transactionDate | dateTime | Landed Document Date<br/>*Example:* `"2022-04-19"` | Yes |
### ProductResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Product status<br/>*Example:* `true` | No |
| advancedTracking | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"`<br/>*Example:* `"NONE"` | No |
| advancedTrackingMetaData | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] | Advanced Tracking Meta data<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| amortizationPeriod | integer | Amortization template period<br/>*Example:* `36` | No |
| amortizationTemplateCode | string | Amortization template code<br/>*Example:* `"0000001"` | No |
| attributes | [ [AttributeDetails](#attributedetails) ] | Attribute Details | No |
| autoFulfillmentEnabled | boolean | Is Auto-Fulfillment enable?<br/>*Example:* `false` | No |
| barcode | string | Product barcode<br/>*Example:* `2365234` | No |
| barcodeDetails | [BarcodeDetails](#barcodedetails) | barcode details<br/>*Example:* `{"barcodeField":"Samsung"}` | No |
| basePrice | double | Revenue Base price<br/>*Example:* `120` | No |
| bomAddCostConfiguration | [ [BomAdditionalCostDto](#bomadditionalcostdto) ] | Bom additional cost information | No |
| bomMetaDetailsList | [ [BomMetaDetailsDto](#bommetadetailsdto) ] | multiple bom configuration<br/>*Example:* `"Bom Configuration"` | No |
| bomOperationsConfiguration | [ [BomOperationDto](#bomoperationdto) ] | Bom Operations information | No |
| bomProductCostDetails | [ [BomProductCostDetails](#bomproductcostdetails) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| bomProductsConfiguration | [ [BomMetaDto](#bommetadto) ] | Bom Products information | No |
| categoryCode | string | Category code<br/>*Example:* `"AB0001"` | No |
| categoryDesc | string | Category description<br/>*Example:* `"Medical Equipment"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| deferredExpenseAccountCode | string | Deferred Expense account code<br/>*Example:* `"A-0015"` | No |
| deferredRevenueAccountCode | string | Deferred Revenue account code<br/>*Example:* `"A-0015"` | No |
| deleted | boolean | Product delete status<br/>*Example:* `true` | No |
| description | string | Product description<br/>*Example:* `"Description"` | No |
| documentSequenceCode | string | Product Sequence code<br/>*Example:* `"P-0000001"` | No |
| hasBuildAssembly | boolean | Has Build Assembly<br/>*Example:* `true` | No |
| hasVariants | boolean | Product has variants<br/>*Example:* `false` | No |
| id | long | Product ID<br/>*Example:* `1234` | No |
| images | [ string ] | Product image url's | No |
| incomingQty | number | Product incoming Qty | No |
| inventory | [InventoryDto](#inventorydto) | Inventory information required for Tracked Products. | No |
| inventoryWarehouseDetails | [ [InventoryWarehouseDetails](#inventorywarehousedetails) ] | Inventory warehouse details<br/>*Example:* `{"warehouseCode":"WH-00001","availableQuantity":"100","openingQuantity":"100"}` | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>*Example:* `true` | No |
| isFinishedProduct | boolean | Is finished product?<br/>*Example:* `false` | No |
| isUiProductUpdate | boolean | Product is update by UI.<br/>*Example:* `false` | No |
| isVariant | boolean | Is a variant<br/>*Example:* `false` | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] | Landed cost category details | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code<br/>*Example:* `"AC-0000012"` | No |
| masterProductCode | string | Master Product Code<br/>*Example:* `"P-0000001"` | No |
| multipleUomSchema | boolean | Is multiple Uom Schema?<br/>*Example:* `true` | No |
| name | string | Product Name<br/>*Example:* `"Apple"` | Yes |
| outgoingQty | number | Product outgoing Qty | No |
| productId | string | Product ID<br/>*Example:* `"P000011"` | No |
| productSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] |  | No |
| productTransactionType | string | Product Transaction Type<br/>*Enum:* `"BOTH"`, `"PURCHASE"`, `"SALES"`<br/>*Example:* `"BOTH"` | Yes |
| purchaseAccountCode | string | Purchase account code<br/>*Example:* `"A-0012"` | Yes |
| purchasePrice | double | Purchase price<br/>*Example:* `123.33` | Yes |
| purchasePriceTaxInclusive | boolean | Is purchase price tax inclusive?<br/>*Example:* `true` | No |
| purchaseReturnAccountCode | string | Purchase return account code<br/>*Example:* `"A-0014"` | No |
| purchaseTaxCode | string | Purchase tax code<br/>*Example:* `"T-001"` | No |
| recommendedUom | long | Recommended product uom | No |
| reorderEnabled | boolean | Flag to enable reorder level<br/>*Example:* `true` | No |
| reorderLevel | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| reorderLevelReached | boolean | Has Reorder level reached | No |
| reorderQuantity | long | Quantity to be reordered<br/>*Example:* `50` | No |
| reorderVendorCode | string | Vendor code for reorder<br/>*Example:* `"C-000001"` | No |
| reorderVendorName | string | Reorder Vendor Name | No |
| revenueRecognitionInfo | [ProductRevenueRecognitionInfo](#productrevenuerecognitioninfo) | Product Revenue Recognition Information Object | No |
| rowRackBinData | [RowRackBinData](#rowrackbindata) | Row Rack Bin information required for Tracked Products. | No |
| salesAccountCode | string | Sales account code<br/>*Example:* `"A-0013"` | Yes |
| salesPrice | double | Sales price<br/>*Example:* `120` | Yes |
| salesPriceTaxInclusive | boolean | Is sales price tax inclusive?<br/>*Example:* `false` | No |
| salesReturnAccountCode | string | Sales return account code<br/>*Example:* `"A-0015"` | No |
| salesTaxCode | string | Sales tax code<br/>*Example:* `"T-002"` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| source | string | Identify this is ecom sync product<br/>*Example:* `"SHOPIFY"` | No |
| stockUom | long | Stock UOM<br/>*Example:* `2` | Yes |
| taxable | boolean | Is taxable?<br/>*Example:* `true` | No |
| type | string | Product type<br/>*Enum:* `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"`<br/>*Example:* `"TRACKED"` | Yes |
| uomSchema | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| uomSchemaDto | [UOMSchemaDto](#uomschemadto) | Product uom schema information | No |
| valuationMethod | string | Valuation Method<br/>*Enum:* `"FIFO"`, `"AVERAGE"`<br/>*Example:* `"FIFO"` | Yes |
| variantAttributes | object | Attribute Details specific to a variant | No |
| variantCount | integer | Variant Count | No |

### ProductResponseIndia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Product status<br/>*Example:* `true` | No |
| advancedTracking | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"`<br/>*Example:* `"NONE"` | No |
| advancedTrackingMetaData | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] | Advanced Tracking Meta data<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| amortizationPeriod | integer | Amortization template period<br/>*Example:* `36` | No |
| amortizationTemplateCode | string | Amortization template code<br/>*Example:* `"0000001"` | No |
| attributes | [ [AttributeDetails](#attributedetails) ] | Attribute Details | No |
| autoFulfillmentEnabled | boolean | Is Auto-Fulfillment enable?<br/>*Example:* `false` | No |
| barcode | string | Product barcode<br/>*Example:* `2365234` | No |
| barcodeDetails | [BarcodeDetails](#barcodedetails) | barcode details<br/>*Example:* `{"barcodeField":"Samsung"}` | No |
| basePrice | double | Revenue Base price<br/>*Example:* `120` | No |
| bomAddCostConfiguration | [ [BomAdditionalCostDto](#bomadditionalcostdto) ] | Bom additional cost information | No |
| bomMetaDetailsList | [ [BomMetaDetailsDto](#bommetadetailsdto) ] | multiple bom configuration<br/>*Example:* `"Bom Configuration"` | No |
| bomOperationsConfiguration | [ [BomOperationDto](#bomoperationdto) ] | Bom Operations information | No |
| bomProductCostDetails | [ [BomProductCostDetails](#bomproductcostdetails) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| bomProductsConfiguration | [ [BomMetaDto](#bommetadto) ] | Bom Products information | No |
| categoryCode | string | Category code<br/>*Example:* `"AB0001"` | No |
| categoryDesc | string | Category description<br/>*Example:* `"Medical Equipment"` | No |
| cessNonAdvol | boolean | Cess Non Advol or not<br/>*Example:* `false` | No |
| cessRule | string | Cess rule expression<br/>*Example:* `"Math.max(21*amount/100,4170*quantity/1000)"` | No |
| cessRuleDescription | string | Cess rule description<br/>*Example:* `"21% or Rs. 4170 per thousand, whichever is higher"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| deferredExpenseAccountCode | string | Deferred Expense account code<br/>*Example:* `"A-0015"` | No |
| deferredRevenueAccountCode | string | Deferred Revenue account code<br/>*Example:* `"A-0015"` | No |
| deleted | boolean | Product delete status<br/>*Example:* `true` | No |
| description | string | Product description<br/>*Example:* `"Description"` | No |
| documentSequenceCode | string | Product Sequence code<br/>*Example:* `"P-0000001"` | No |
| glAccountCode | string | GL account code<br/>*Example:* `"A-0017"` | No |
| hasBuildAssembly | boolean | Has Build Assembly<br/>*Example:* `true` | No |
| hasVariants | boolean | Product has variants<br/>*Example:* `false` | No |
| hsnOrSacCode | string | HSN or SAC code of product<br/>*Example:* `1234` | No |
| id | long | Product ID<br/>*Example:* `1234` | No |
| images | [ string ] | Product image url's | No |
| incomingQty | number | Product incoming Qty | No |
| inventory | [InventoryDto](#inventorydto) | Inventory information required for Tracked Products. | No |
| inventoryWarehouseDetails | [ [InventoryWarehouseDetails](#inventorywarehousedetails) ] | Inventory warehouse details<br/>*Example:* `{"warehouseCode":"WH-00001","availableQuantity":"100","openingQuantity":"100"}` | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>*Example:* `true` | No |
| isFinishedProduct | boolean | Is finished product?<br/>*Example:* `false` | No |
| isUiProductUpdate | boolean | Product is update by UI.<br/>*Example:* `false` | No |
| isVariant | boolean | Is a variant<br/>*Example:* `false` | No |
| itcAdjustment | string | ITC adjustment<br/>*Enum:* `"NA"`, `"ITC_IS_BLOCKED"`, `"ITC_IS_REVERSED"`<br/>*Example:* `"ITC_IS_BLOCKED"` | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] | Landed cost category details | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code<br/>*Example:* `"AC-0000012"` | No |
| masterProductCode | string | Master Product Code<br/>*Example:* `"P-0000001"` | No |
| multipleUomSchema | boolean | Is multiple Uom Schema?<br/>*Example:* `true` | No |
| name | string | Product Name<br/>*Example:* `"Apple"` | Yes |
| offeringType | string | Offering type<br/>*Enum:* `"GOODS"`, `"SERVICES"`<br/>*Example:* `"GOODS"` | No |
| outgoingQty | number | Product outgoing Qty | No |
| productId | string | Product ID<br/>*Example:* `"P000011"` | No |
| productSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] |  | No |
| productTransactionType | string | Product Transaction Type<br/>*Enum:* `"BOTH"`, `"PURCHASE"`, `"SALES"`<br/>*Example:* `"BOTH"` | Yes |
| purchaseAccountCode | string | Purchase account code<br/>*Example:* `"A-0012"` | Yes |
| purchasePrice | double | Purchase price<br/>*Example:* `123.33` | Yes |
| purchasePriceTaxInclusive | boolean | Is purchase price tax inclusive?<br/>*Example:* `true` | No |
| purchaseReturnAccountCode | string | Purchase return account code<br/>*Example:* `"A-0014"` | No |
| purchaseTaxCode | string | Purchase tax code<br/>*Example:* `"T-001"` | No |
| recommendedUom | long | Recommended product uom | No |
| reorderEnabled | boolean | Flag to enable reorder level<br/>*Example:* `true` | No |
| reorderLevel | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| reorderLevelReached | boolean | Has Reorder level reached | No |
| reorderQuantity | long | Quantity to be reordered<br/>*Example:* `50` | No |
| reorderVendorCode | string | Vendor code for reorder<br/>*Example:* `"C-000001"` | No |
| reorderVendorName | string | Reorder Vendor Name | No |
| revenueRecognitionInfo | [ProductRevenueRecognitionInfo](#productrevenuerecognitioninfo) | Product Revenue Recognition Information Object | No |
| rowRackBinData | [RowRackBinData](#rowrackbindata) | Row Rack Bin information required for Tracked Products. | No |
| salesAccountCode | string | Sales account code<br/>*Example:* `"A-0013"` | Yes |
| salesPrice | double | Sales price<br/>*Example:* `120` | Yes |
| salesPriceTaxInclusive | boolean | Is sales price tax inclusive?<br/>*Example:* `false` | No |
| salesReturnAccountCode | string | Sales return account code<br/>*Example:* `"A-0015"` | No |
| salesTaxCode | string | Sales tax code<br/>*Example:* `"T-002"` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| source | string | Identify this is ecom sync product<br/>*Example:* `"SHOPIFY"` | No |
| stockUom | long | Stock UOM<br/>*Example:* `2` | Yes |
| taxExemptionReason | string | Tax Exempted reason to be filled, if taxPreference is true<br/>*Enum:* `"EXEMPTED"`, `"NON_GST"`<br/>*Example:* `"EXEMPTED"` | No |
| taxPreference | boolean | Whether Product is Tax Exempted<br/>*Example:* `true` | No |
| taxable | boolean | Is taxable?<br/>*Example:* `true` | No |
| tdsApplicableIndia | boolean | Is TDS Applicable?<br/>*Example:* `true` | No |
| tdsNatureOfPaymentIndia | string | TDS Payable<br/>*Example:* `"AC-0000023"` | No |
| type | string | Product type<br/>*Enum:* `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"`<br/>*Example:* `"TRACKED"` | Yes |
| uomSchema | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| uomSchemaDto | [UOMSchemaDto](#uomschemadto) | Product uom schema information | No |
| uqcIndia | string | UQC code of product<br/>*Example:* `1234` | No |
| valuationMethod | string | Valuation Method<br/>*Enum:* `"FIFO"`, `"AVERAGE"`<br/>*Example:* `"FIFO"` | Yes |
| variantAttributes | object | Attribute Details specific to a variant | No |
| variantCount | integer | Variant Count | No |

### ProductResponseIndonesia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Product status<br/>*Example:* `true` | No |
| advancedTracking | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"`<br/>*Example:* `"NONE"` | No |
| advancedTrackingMetaData | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] | Advanced Tracking Meta data<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| amortizationPeriod | integer | Amortization template period<br/>*Example:* `36` | No |
| amortizationTemplateCode | string | Amortization template code<br/>*Example:* `"0000001"` | No |
| attributes | [ [AttributeDetails](#attributedetails) ] | Attribute Details | No |
| autoFulfillmentEnabled | boolean | Is Auto-Fulfillment enable?<br/>*Example:* `false` | No |
| barcode | string | Product barcode<br/>*Example:* `2365234` | No |
| barcodeDetails | [BarcodeDetails](#barcodedetails) | barcode details<br/>*Example:* `{"barcodeField":"Samsung"}` | No |
| basePrice | double | Revenue Base price<br/>*Example:* `120` | No |
| bomAddCostConfiguration | [ [BomAdditionalCostDto](#bomadditionalcostdto) ] | Bom additional cost information | No |
| bomMetaDetailsList | [ [BomMetaDetailsDto](#bommetadetailsdto) ] | multiple bom configuration<br/>*Example:* `"Bom Configuration"` | No |
| bomOperationsConfiguration | [ [BomOperationDto](#bomoperationdto) ] | Bom Operations information | No |
| bomProductCostDetails | [ [BomProductCostDetails](#bomproductcostdetails) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| bomProductsConfiguration | [ [BomMetaDto](#bommetadto) ] | Bom Products information | No |
| categoryCode | string | Category code<br/>*Example:* `"AB0001"` | No |
| categoryDesc | string | Category description<br/>*Example:* `"Medical Equipment"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| deferredExpenseAccountCode | string | Deferred Expense account code<br/>*Example:* `"A-0015"` | No |
| deferredRevenueAccountCode | string | Deferred Revenue account code<br/>*Example:* `"A-0015"` | No |
| deleted | boolean | Product delete status<br/>*Example:* `true` | No |
| description | string | Product description<br/>*Example:* `"Description"` | No |
| documentSequenceCode | string | Product Sequence code<br/>*Example:* `"P-0000001"` | No |
| exciseApplicable | boolean | *Example:* `true` | No |
| exciseRate | double | Excise rate based on Excise Type<br/>*Example:* `10` | No |
| exciseType | string | Excise type to apply<br/>*Enum:* `"PERCENT"`, `"FLAT"`<br/>*Example:* `"PERCENT"` | No |
| hasBuildAssembly | boolean | Has Build Assembly<br/>*Example:* `true` | No |
| hasVariants | boolean | Product has variants<br/>*Example:* `false` | No |
| id | long | Product ID<br/>*Example:* `1234` | No |
| images | [ string ] | Product image url's | No |
| incomingQty | number | Product incoming Qty | No |
| inventory | [InventoryDto](#inventorydto) | Inventory information required for Tracked Products. | No |
| inventoryWarehouseDetails | [ [InventoryWarehouseDetails](#inventorywarehousedetails) ] | Inventory warehouse details<br/>*Example:* `{"warehouseCode":"WH-00001","availableQuantity":"100","openingQuantity":"100"}` | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>*Example:* `true` | No |
| isFinishedProduct | boolean | Is finished product?<br/>*Example:* `false` | No |
| isUiProductUpdate | boolean | Product is update by UI.<br/>*Example:* `false` | No |
| isVariant | boolean | Is a variant<br/>*Example:* `false` | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] | Landed cost category details | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code<br/>*Example:* `"AC-0000012"` | No |
| masterProductCode | string | Master Product Code<br/>*Example:* `"P-0000001"` | No |
| multipleUomSchema | boolean | Is multiple Uom Schema?<br/>*Example:* `true` | No |
| name | string | Product Name<br/>*Example:* `"Apple"` | Yes |
| outgoingQty | number | Product outgoing Qty | No |
| productId | string | Product ID<br/>*Example:* `"P000011"` | No |
| productSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] |  | No |
| productTransactionType | string | Product Transaction Type<br/>*Enum:* `"BOTH"`, `"PURCHASE"`, `"SALES"`<br/>*Example:* `"BOTH"` | Yes |
| purchaseAccountCode | string | Purchase account code<br/>*Example:* `"A-0012"` | Yes |
| purchasePrice | double | Purchase price<br/>*Example:* `123.33` | Yes |
| purchasePriceTaxInclusive | boolean | Is purchase price tax inclusive?<br/>*Example:* `true` | No |
| purchaseReturnAccountCode | string | Purchase return account code<br/>*Example:* `"A-0014"` | No |
| purchaseTaxCode | string | Purchase tax code<br/>*Example:* `"T-001"` | No |
| recommendedUom | long | Recommended product uom | No |
| reorderEnabled | boolean | Flag to enable reorder level<br/>*Example:* `true` | No |
| reorderLevel | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| reorderLevelReached | boolean | Has Reorder level reached | No |
| reorderQuantity | long | Quantity to be reordered<br/>*Example:* `50` | No |
| reorderVendorCode | string | Vendor code for reorder<br/>*Example:* `"C-000001"` | No |
| reorderVendorName | string | Reorder Vendor Name | No |
| revenueRecognitionInfo | [ProductRevenueRecognitionInfo](#productrevenuerecognitioninfo) | Product Revenue Recognition Information Object | No |
| rowRackBinData | [RowRackBinData](#rowrackbindata) | Row Rack Bin information required for Tracked Products. | No |
| salesAccountCode | string | Sales account code<br/>*Example:* `"A-0013"` | Yes |
| salesPrice | double | Sales price<br/>*Example:* `120` | Yes |
| salesPriceTaxInclusive | boolean | Is sales price tax inclusive?<br/>*Example:* `false` | No |
| salesReturnAccountCode | string | Sales return account code<br/>*Example:* `"A-0015"` | No |
| salesTaxCode | string | Sales tax code<br/>*Example:* `"T-002"` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| source | string | Identify this is ecom sync product<br/>*Example:* `"SHOPIFY"` | No |
| stockUom | long | Stock UOM<br/>*Example:* `2` | Yes |
| taxable | boolean | Is taxable?<br/>*Example:* `true` | No |
| type | string | Product type<br/>*Enum:* `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"`<br/>*Example:* `"TRACKED"` | Yes |
| uomSchema | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| uomSchemaDto | [UOMSchemaDto](#uomschemadto) | Product uom schema information | No |
| valuationMethod | string | Valuation Method<br/>*Enum:* `"FIFO"`, `"AVERAGE"`<br/>*Example:* `"FIFO"` | Yes |
| variantAttributes | object | Attribute Details specific to a variant | No |
| variantCount | integer | Variant Count | No |
| whtApplicable | boolean | *Example:* `true` | No |
| whtSectionToWhtRateId | long | Product WHT - Nature Of Payment to WHT Rate Id<br/>*Example:* `1213454` | No |

### ProductResponseMalaysia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Product status<br/>*Example:* `true` | No |
| advancedTracking | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"`<br/>*Example:* `"NONE"` | No |
| advancedTrackingMetaData | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] | Advanced Tracking Meta data<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| amortizationPeriod | integer | Amortization template period<br/>*Example:* `36` | No |
| amortizationTemplateCode | string | Amortization template code<br/>*Example:* `"0000001"` | No |
| attributes | [ [AttributeDetails](#attributedetails) ] | Attribute Details | No |
| autoFulfillmentEnabled | boolean | Is Auto-Fulfillment enable?<br/>*Example:* `false` | No |
| barcode | string | Product barcode<br/>*Example:* `2365234` | No |
| barcodeDetails | [BarcodeDetails](#barcodedetails) | barcode details<br/>*Example:* `{"barcodeField":"Samsung"}` | No |
| basePrice | double | Revenue Base price<br/>*Example:* `120` | No |
| bomAddCostConfiguration | [ [BomAdditionalCostDto](#bomadditionalcostdto) ] | Bom additional cost information | No |
| bomMetaDetailsList | [ [BomMetaDetailsDto](#bommetadetailsdto) ] | multiple bom configuration<br/>*Example:* `"Bom Configuration"` | No |
| bomOperationsConfiguration | [ [BomOperationDto](#bomoperationdto) ] | Bom Operations information | No |
| bomProductCostDetails | [ [BomProductCostDetails](#bomproductcostdetails) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| bomProductsConfiguration | [ [BomMetaDto](#bommetadto) ] | Bom Products information | No |
| categoryCode | string | Category code<br/>*Example:* `"AB0001"` | No |
| categoryDesc | string | Category description<br/>*Example:* `"Medical Equipment"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| deferredExpenseAccountCode | string | Deferred Expense account code<br/>*Example:* `"A-0015"` | No |
| deferredRevenueAccountCode | string | Deferred Revenue account code<br/>*Example:* `"A-0015"` | No |
| deleted | boolean | Product delete status<br/>*Example:* `true` | No |
| description | string | Product description<br/>*Example:* `"Description"` | No |
| documentSequenceCode | string | Product Sequence code<br/>*Example:* `"P-0000001"` | No |
| exemptedMalaysia | boolean | Whether Product is Tax Exempted<br/>*Example:* `true` | No |
| glAccountCode | string | GL account code<br/>*Example:* `"A-0017"` | No |
| hasBuildAssembly | boolean | Has Build Assembly<br/>*Example:* `true` | No |
| hasVariants | boolean | Product has variants<br/>*Example:* `false` | No |
| id | long | Product ID<br/>*Example:* `1234` | No |
| images | [ string ] | Product image url's | No |
| incomingQty | number | Product incoming Qty | No |
| inventory | [InventoryDto](#inventorydto) | Inventory information required for Tracked Products. | No |
| inventoryWarehouseDetails | [ [InventoryWarehouseDetails](#inventorywarehousedetails) ] | Inventory warehouse details<br/>*Example:* `{"warehouseCode":"WH-00001","availableQuantity":"100","openingQuantity":"100"}` | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>*Example:* `true` | No |
| isFinishedProduct | boolean | Is finished product?<br/>*Example:* `false` | No |
| isUiProductUpdate | boolean | Product is update by UI.<br/>*Example:* `false` | No |
| isVariant | boolean | Is a variant<br/>*Example:* `false` | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] | Landed cost category details | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code<br/>*Example:* `"AC-0000012"` | No |
| masterProductCode | string | Master Product Code<br/>*Example:* `"P-0000001"` | No |
| multipleUomSchema | boolean | Is multiple Uom Schema?<br/>*Example:* `true` | No |
| name | string | Product Name<br/>*Example:* `"Apple"` | Yes |
| offeringType | string | Offering type<br/>*Enum:* `"GOODS"`, `"SERVICES"`<br/>*Example:* `"GOODS"` | No |
| outgoingQty | number | Product outgoing Qty | No |
| productId | string | Product ID<br/>*Example:* `"P000011"` | No |
| productSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] |  | No |
| productTransactionType | string | Product Transaction Type<br/>*Enum:* `"BOTH"`, `"PURCHASE"`, `"SALES"`<br/>*Example:* `"BOTH"` | Yes |
| purchaseAccountCode | string | Purchase account code<br/>*Example:* `"A-0012"` | Yes |
| purchasePrice | double | Purchase price<br/>*Example:* `123.33` | Yes |
| purchasePriceTaxInclusive | boolean | Is purchase price tax inclusive?<br/>*Example:* `true` | No |
| purchaseReturnAccountCode | string | Purchase return account code<br/>*Example:* `"A-0014"` | No |
| purchaseTaxCode | string | Purchase tax code<br/>*Example:* `"T-001"` | No |
| recommendedUom | long | Recommended product uom | No |
| reorderEnabled | boolean | Flag to enable reorder level<br/>*Example:* `true` | No |
| reorderLevel | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| reorderLevelReached | boolean | Has Reorder level reached | No |
| reorderQuantity | long | Quantity to be reordered<br/>*Example:* `50` | No |
| reorderVendorCode | string | Vendor code for reorder<br/>*Example:* `"C-000001"` | No |
| reorderVendorName | string | Reorder Vendor Name | No |
| revenueRecognitionInfo | [ProductRevenueRecognitionInfo](#productrevenuerecognitioninfo) | Product Revenue Recognition Information Object | No |
| rowRackBinData | [RowRackBinData](#rowrackbindata) | Row Rack Bin information required for Tracked Products. | No |
| salesAccountCode | string | Sales account code<br/>*Example:* `"A-0013"` | Yes |
| salesPrice | double | Sales price<br/>*Example:* `120` | Yes |
| salesPriceTaxInclusive | boolean | Is sales price tax inclusive?<br/>*Example:* `false` | No |
| salesReturnAccountCode | string | Sales return account code<br/>*Example:* `"A-0015"` | No |
| salesTaxCode | string | Sales tax code<br/>*Example:* `"T-002"` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| source | string | Identify this is ecom sync product<br/>*Example:* `"SHOPIFY"` | No |
| stockUom | long | Stock UOM<br/>*Example:* `2` | Yes |
| tariffOrServiceCodeMalaysia | string | Tariff or Service code of product<br/>*Example:* `1234` | No |
| taxExemptionReasonMalaysia | string | Tax Exempted reason to be filled, if taxPreference is true<br/>*Enum:* `"EXEMPTED"`, `"NON_SST"`, `"LIVE_ANIMALS"`, `"UNPROCESSED_FOOD"`, `"VEGETABLES"`, `"MEDICINES"`, `"MACHINERY"`, `"CHEMICALS"`<br/>*Example:* `"EXEMPTED"` | No |
| taxable | boolean | Is taxable?<br/>*Example:* `true` | No |
| type | string | Product type<br/>*Enum:* `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"`<br/>*Example:* `"TRACKED"` | Yes |
| uomSchema | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| uomSchemaDto | [UOMSchemaDto](#uomschemadto) | Product uom schema information | No |
| valuationMethod | string | Valuation Method<br/>*Enum:* `"FIFO"`, `"AVERAGE"`<br/>*Example:* `"FIFO"` | Yes |
| variantAttributes | object | Attribute Details specific to a variant | No |
| variantCount | integer | Variant Count | No |

### ProductResponsePhilippines

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Product status<br/>*Example:* `true` | No |
| advancedTracking | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"`<br/>*Example:* `"NONE"` | No |
| advancedTrackingMetaData | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] | Advanced Tracking Meta data<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| amortizationPeriod | integer | Amortization template period<br/>*Example:* `36` | No |
| amortizationTemplateCode | string | Amortization template code<br/>*Example:* `"0000001"` | No |
| attributes | [ [AttributeDetails](#attributedetails) ] | Attribute Details | No |
| autoFulfillmentEnabled | boolean | Is Auto-Fulfillment enable?<br/>*Example:* `false` | No |
| barcode | string | Product barcode<br/>*Example:* `2365234` | No |
| barcodeDetails | [BarcodeDetails](#barcodedetails) | barcode details<br/>*Example:* `{"barcodeField":"Samsung"}` | No |
| basePrice | double | Revenue Base price<br/>*Example:* `120` | No |
| bomAddCostConfiguration | [ [BomAdditionalCostDto](#bomadditionalcostdto) ] | Bom additional cost information | No |
| bomMetaDetailsList | [ [BomMetaDetailsDto](#bommetadetailsdto) ] | multiple bom configuration<br/>*Example:* `"Bom Configuration"` | No |
| bomOperationsConfiguration | [ [BomOperationDto](#bomoperationdto) ] | Bom Operations information | No |
| bomProductCostDetails | [ [BomProductCostDetails](#bomproductcostdetails) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| bomProductsConfiguration | [ [BomMetaDto](#bommetadto) ] | Bom Products information | No |
| categoryCode | string | Category code<br/>*Example:* `"AB0001"` | No |
| categoryDesc | string | Category description<br/>*Example:* `"Medical Equipment"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| deferredExpenseAccountCode | string | Deferred Expense account code<br/>*Example:* `"A-0015"` | No |
| deferredRevenueAccountCode | string | Deferred Revenue account code<br/>*Example:* `"A-0015"` | No |
| deleted | boolean | Product delete status<br/>*Example:* `true` | No |
| description | string | Product description<br/>*Example:* `"Description"` | No |
| documentSequenceCode | string | Product Sequence code<br/>*Example:* `"P-0000001"` | No |
| hasBuildAssembly | boolean | Has Build Assembly<br/>*Example:* `true` | No |
| hasVariants | boolean | Product has variants<br/>*Example:* `false` | No |
| id | long | Product ID<br/>*Example:* `1234` | No |
| images | [ string ] | Product image url's | No |
| incomingQty | number | Product incoming Qty | No |
| inventory | [InventoryDto](#inventorydto) | Inventory information required for Tracked Products. | No |
| inventoryWarehouseDetails | [ [InventoryWarehouseDetails](#inventorywarehousedetails) ] | Inventory warehouse details<br/>*Example:* `{"warehouseCode":"WH-00001","availableQuantity":"100","openingQuantity":"100"}` | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>*Example:* `true` | No |
| isFinishedProduct | boolean | Is finished product?<br/>*Example:* `false` | No |
| isUiProductUpdate | boolean | Product is update by UI.<br/>*Example:* `false` | No |
| isVariant | boolean | Is a variant<br/>*Example:* `false` | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] | Landed cost category details | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code<br/>*Example:* `"AC-0000012"` | No |
| masterProductCode | string | Master Product Code<br/>*Example:* `"P-0000001"` | No |
| multipleUomSchema | boolean | Is multiple Uom Schema?<br/>*Example:* `true` | No |
| name | string | Product Name<br/>*Example:* `"Apple"` | Yes |
| outgoingQty | number | Product outgoing Qty | No |
| productId | string | Product ID<br/>*Example:* `"P000011"` | No |
| productSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] |  | No |
| productTransactionType | string | Product Transaction Type<br/>*Enum:* `"BOTH"`, `"PURCHASE"`, `"SALES"`<br/>*Example:* `"BOTH"` | Yes |
| purchaseAccountCode | string | Purchase account code<br/>*Example:* `"A-0012"` | Yes |
| purchasePrice | double | Purchase price<br/>*Example:* `123.33` | Yes |
| purchasePriceTaxInclusive | boolean | Is purchase price tax inclusive?<br/>*Example:* `true` | No |
| purchaseReturnAccountCode | string | Purchase return account code<br/>*Example:* `"A-0014"` | No |
| purchaseTaxCode | string | Purchase tax code<br/>*Example:* `"T-001"` | No |
| recommendedUom | long | Recommended product uom | No |
| reorderEnabled | boolean | Flag to enable reorder level<br/>*Example:* `true` | No |
| reorderLevel | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| reorderLevelReached | boolean | Has Reorder level reached | No |
| reorderQuantity | long | Quantity to be reordered<br/>*Example:* `50` | No |
| reorderVendorCode | string | Vendor code for reorder<br/>*Example:* `"C-000001"` | No |
| reorderVendorName | string | Reorder Vendor Name | No |
| revenueRecognitionInfo | [ProductRevenueRecognitionInfo](#productrevenuerecognitioninfo) | Product Revenue Recognition Information Object | No |
| rowRackBinData | [RowRackBinData](#rowrackbindata) | Row Rack Bin information required for Tracked Products. | No |
| salesAccountCode | string | Sales account code<br/>*Example:* `"A-0013"` | Yes |
| salesPrice | double | Sales price<br/>*Example:* `120` | Yes |
| salesPriceTaxInclusive | boolean | Is sales price tax inclusive?<br/>*Example:* `false` | No |
| salesReturnAccountCode | string | Sales return account code<br/>*Example:* `"A-0015"` | No |
| salesTaxCode | string | Sales tax code<br/>*Example:* `"T-002"` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| source | string | Identify this is ecom sync product<br/>*Example:* `"SHOPIFY"` | No |
| stockUom | long | Stock UOM<br/>*Example:* `2` | Yes |
| taxable | boolean | Is taxable?<br/>*Example:* `true` | No |
| type | string | Product type<br/>*Enum:* `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"`<br/>*Example:* `"TRACKED"` | Yes |
| uomSchema | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| uomSchemaDto | [UOMSchemaDto](#uomschemadto) | Product uom schema information | No |
| valuationMethod | string | Valuation Method<br/>*Enum:* `"FIFO"`, `"AVERAGE"`<br/>*Example:* `"FIFO"` | Yes |
| variantAttributes | object | Attribute Details specific to a variant | No |
| variantCount | integer | Variant Count | No |
| whtApplicable | boolean | *Example:* `true` | No |
| whtSectionToWhtRateId | long | Product WHT - Nature Of Payment to WHT Rate Id<br/>*Example:* `1213454` | No |

### ProductResponseSaudiArabia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Product status<br/>*Example:* `true` | No |
| advancedTracking | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"`<br/>*Example:* `"NONE"` | No |
| advancedTrackingMetaData | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] | Advanced Tracking Meta data<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| amortizationPeriod | integer | Amortization template period<br/>*Example:* `36` | No |
| amortizationTemplateCode | string | Amortization template code<br/>*Example:* `"0000001"` | No |
| attributes | [ [AttributeDetails](#attributedetails) ] | Attribute Details | No |
| autoFulfillmentEnabled | boolean | Is Auto-Fulfillment enable?<br/>*Example:* `false` | No |
| barcode | string | Product barcode<br/>*Example:* `2365234` | No |
| barcodeDetails | [BarcodeDetails](#barcodedetails) | barcode details<br/>*Example:* `{"barcodeField":"Samsung"}` | No |
| basePrice | double | Revenue Base price<br/>*Example:* `120` | No |
| bomAddCostConfiguration | [ [BomAdditionalCostDto](#bomadditionalcostdto) ] | Bom additional cost information | No |
| bomMetaDetailsList | [ [BomMetaDetailsDto](#bommetadetailsdto) ] | multiple bom configuration<br/>*Example:* `"Bom Configuration"` | No |
| bomOperationsConfiguration | [ [BomOperationDto](#bomoperationdto) ] | Bom Operations information | No |
| bomProductCostDetails | [ [BomProductCostDetails](#bomproductcostdetails) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| bomProductsConfiguration | [ [BomMetaDto](#bommetadto) ] | Bom Products information | No |
| categoryCode | string | Category code<br/>*Example:* `"AB0001"` | No |
| categoryDesc | string | Category description<br/>*Example:* `"Medical Equipment"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| deferredExpenseAccountCode | string | Deferred Expense account code<br/>*Example:* `"A-0015"` | No |
| deferredRevenueAccountCode | string | Deferred Revenue account code<br/>*Example:* `"A-0015"` | No |
| deleted | boolean | Product delete status<br/>*Example:* `true` | No |
| description | string | Product description<br/>*Example:* `"Description"` | No |
| documentSequenceCode | string | Product Sequence code<br/>*Example:* `"P-0000001"` | No |
| exciseApplicable | boolean | *Example:* `true` | No |
| exciseRate | double | Excise rate based on Excise Type<br/>*Example:* `10` | No |
| exciseType | string | Excise type to apply<br/>*Enum:* `"PERCENT"`, `"FLAT"`<br/>*Example:* `"PERCENT"` | No |
| hasBuildAssembly | boolean | Has Build Assembly<br/>*Example:* `true` | No |
| hasVariants | boolean | Product has variants<br/>*Example:* `false` | No |
| id | long | Product ID<br/>*Example:* `1234` | No |
| images | [ string ] | Product image url's | No |
| incomingQty | number | Product incoming Qty | No |
| inventory | [InventoryDto](#inventorydto) | Inventory information required for Tracked Products. | No |
| inventoryWarehouseDetails | [ [InventoryWarehouseDetails](#inventorywarehousedetails) ] | Inventory warehouse details<br/>*Example:* `{"warehouseCode":"WH-00001","availableQuantity":"100","openingQuantity":"100"}` | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>*Example:* `true` | No |
| isFinishedProduct | boolean | Is finished product?<br/>*Example:* `false` | No |
| isUiProductUpdate | boolean | Product is update by UI.<br/>*Example:* `false` | No |
| isVariant | boolean | Is a variant<br/>*Example:* `false` | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] | Landed cost category details | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code<br/>*Example:* `"AC-0000012"` | No |
| masterProductCode | string | Master Product Code<br/>*Example:* `"P-0000001"` | No |
| multipleUomSchema | boolean | Is multiple Uom Schema?<br/>*Example:* `true` | No |
| name | string | Product Name<br/>*Example:* `"Apple"` | Yes |
| nameInArabic | string | Product name in Arabic | No |
| outgoingQty | number | Product outgoing Qty | No |
| productId | string | Product ID<br/>*Example:* `"P000011"` | No |
| productSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] |  | No |
| productTransactionType | string | Product Transaction Type<br/>*Enum:* `"BOTH"`, `"PURCHASE"`, `"SALES"`<br/>*Example:* `"BOTH"` | Yes |
| purchaseAccountCode | string | Purchase account code<br/>*Example:* `"A-0012"` | Yes |
| purchasePrice | double | Purchase price<br/>*Example:* `123.33` | Yes |
| purchasePriceTaxInclusive | boolean | Is purchase price tax inclusive?<br/>*Example:* `true` | No |
| purchaseReturnAccountCode | string | Purchase return account code<br/>*Example:* `"A-0014"` | No |
| purchaseTaxCode | string | Purchase tax code<br/>*Example:* `"T-001"` | No |
| recommendedUom | long | Recommended product uom | No |
| reorderEnabled | boolean | Flag to enable reorder level<br/>*Example:* `true` | No |
| reorderLevel | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| reorderLevelReached | boolean | Has Reorder level reached | No |
| reorderQuantity | long | Quantity to be reordered<br/>*Example:* `50` | No |
| reorderVendorCode | string | Vendor code for reorder<br/>*Example:* `"C-000001"` | No |
| reorderVendorName | string | Reorder Vendor Name | No |
| revenueRecognitionInfo | [ProductRevenueRecognitionInfo](#productrevenuerecognitioninfo) | Product Revenue Recognition Information Object | No |
| rowRackBinData | [RowRackBinData](#rowrackbindata) | Row Rack Bin information required for Tracked Products. | No |
| salesAccountCode | string | Sales account code<br/>*Example:* `"A-0013"` | Yes |
| salesPrice | double | Sales price<br/>*Example:* `120` | Yes |
| salesPriceTaxInclusive | boolean | Is sales price tax inclusive?<br/>*Example:* `false` | No |
| salesReturnAccountCode | string | Sales return account code<br/>*Example:* `"A-0015"` | No |
| salesTaxCode | string | Sales tax code<br/>*Example:* `"T-002"` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| source | string | Identify this is ecom sync product<br/>*Example:* `"SHOPIFY"` | No |
| stockUom | long | Stock UOM<br/>*Example:* `2` | Yes |
| taxable | boolean | Is taxable?<br/>*Example:* `true` | No |
| type | string | Product type<br/>*Enum:* `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"`<br/>*Example:* `"TRACKED"` | Yes |
| uomSchema | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| uomSchemaDto | [UOMSchemaDto](#uomschemadto) | Product uom schema information | No |
| valuationMethod | string | Valuation Method<br/>*Enum:* `"FIFO"`, `"AVERAGE"`<br/>*Example:* `"FIFO"` | Yes |
| variantAttributes | object | Attribute Details specific to a variant | No |
| variantCount | integer | Variant Count | No |

### ProductResponseUae

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Product status<br/>*Example:* `true` | No |
| advancedTracking | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"`<br/>*Example:* `"NONE"` | No |
| advancedTrackingMetaData | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] | Advanced Tracking Meta data<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| amortizationPeriod | integer | Amortization template period<br/>*Example:* `36` | No |
| amortizationTemplateCode | string | Amortization template code<br/>*Example:* `"0000001"` | No |
| attributes | [ [AttributeDetails](#attributedetails) ] | Attribute Details | No |
| autoFulfillmentEnabled | boolean | Is Auto-Fulfillment enable?<br/>*Example:* `false` | No |
| barcode | string | Product barcode<br/>*Example:* `2365234` | No |
| barcodeDetails | [BarcodeDetails](#barcodedetails) | barcode details<br/>*Example:* `{"barcodeField":"Samsung"}` | No |
| basePrice | double | Revenue Base price<br/>*Example:* `120` | No |
| bomAddCostConfiguration | [ [BomAdditionalCostDto](#bomadditionalcostdto) ] | Bom additional cost information | No |
| bomMetaDetailsList | [ [BomMetaDetailsDto](#bommetadetailsdto) ] | multiple bom configuration<br/>*Example:* `"Bom Configuration"` | No |
| bomOperationsConfiguration | [ [BomOperationDto](#bomoperationdto) ] | Bom Operations information | No |
| bomProductCostDetails | [ [BomProductCostDetails](#bomproductcostdetails) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| bomProductsConfiguration | [ [BomMetaDto](#bommetadto) ] | Bom Products information | No |
| categoryCode | string | Category code<br/>*Example:* `"AB0001"` | No |
| categoryDesc | string | Category description<br/>*Example:* `"Medical Equipment"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| deferredExpenseAccountCode | string | Deferred Expense account code<br/>*Example:* `"A-0015"` | No |
| deferredRevenueAccountCode | string | Deferred Revenue account code<br/>*Example:* `"A-0015"` | No |
| deleted | boolean | Product delete status<br/>*Example:* `true` | No |
| description | string | Product description<br/>*Example:* `"Description"` | No |
| documentSequenceCode | string | Product Sequence code<br/>*Example:* `"P-0000001"` | No |
| exciseApplicable | boolean | *Example:* `true` | No |
| exciseRate | double | Excise rate based on Excise Type<br/>*Example:* `10` | No |
| exciseType | string | Excise type to apply<br/>*Enum:* `"PERCENT"`, `"FLAT"`<br/>*Example:* `"PERCENT"` | No |
| hasBuildAssembly | boolean | Has Build Assembly<br/>*Example:* `true` | No |
| hasVariants | boolean | Product has variants<br/>*Example:* `false` | No |
| id | long | Product ID<br/>*Example:* `1234` | No |
| images | [ string ] | Product image url's | No |
| incomingQty | number | Product incoming Qty | No |
| inventory | [InventoryDto](#inventorydto) | Inventory information required for Tracked Products. | No |
| inventoryWarehouseDetails | [ [InventoryWarehouseDetails](#inventorywarehousedetails) ] | Inventory warehouse details<br/>*Example:* `{"warehouseCode":"WH-00001","availableQuantity":"100","openingQuantity":"100"}` | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>*Example:* `true` | No |
| isFinishedProduct | boolean | Is finished product?<br/>*Example:* `false` | No |
| isUiProductUpdate | boolean | Product is update by UI.<br/>*Example:* `false` | No |
| isVariant | boolean | Is a variant<br/>*Example:* `false` | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] | Landed cost category details | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code<br/>*Example:* `"AC-0000012"` | No |
| masterProductCode | string | Master Product Code<br/>*Example:* `"P-0000001"` | No |
| multipleUomSchema | boolean | Is multiple Uom Schema?<br/>*Example:* `true` | No |
| name | string | Product Name<br/>*Example:* `"Apple"` | Yes |
| outgoingQty | number | Product outgoing Qty | No |
| productId | string | Product ID<br/>*Example:* `"P000011"` | No |
| productSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] |  | No |
| productTransactionType | string | Product Transaction Type<br/>*Enum:* `"BOTH"`, `"PURCHASE"`, `"SALES"`<br/>*Example:* `"BOTH"` | Yes |
| purchaseAccountCode | string | Purchase account code<br/>*Example:* `"A-0012"` | Yes |
| purchasePrice | double | Purchase price<br/>*Example:* `123.33` | Yes |
| purchasePriceTaxInclusive | boolean | Is purchase price tax inclusive?<br/>*Example:* `true` | No |
| purchaseReturnAccountCode | string | Purchase return account code<br/>*Example:* `"A-0014"` | No |
| purchaseTaxCode | string | Purchase tax code<br/>*Example:* `"T-001"` | No |
| recommendedUom | long | Recommended product uom | No |
| reorderEnabled | boolean | Flag to enable reorder level<br/>*Example:* `true` | No |
| reorderLevel | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| reorderLevelReached | boolean | Has Reorder level reached | No |
| reorderQuantity | long | Quantity to be reordered<br/>*Example:* `50` | No |
| reorderVendorCode | string | Vendor code for reorder<br/>*Example:* `"C-000001"` | No |
| reorderVendorName | string | Reorder Vendor Name | No |
| revenueRecognitionInfo | [ProductRevenueRecognitionInfo](#productrevenuerecognitioninfo) | Product Revenue Recognition Information Object | No |
| rowRackBinData | [RowRackBinData](#rowrackbindata) | Row Rack Bin information required for Tracked Products. | No |
| salesAccountCode | string | Sales account code<br/>*Example:* `"A-0013"` | Yes |
| salesPrice | double | Sales price<br/>*Example:* `120` | Yes |
| salesPriceTaxInclusive | boolean | Is sales price tax inclusive?<br/>*Example:* `false` | No |
| salesReturnAccountCode | string | Sales return account code<br/>*Example:* `"A-0015"` | No |
| salesTaxCode | string | Sales tax code<br/>*Example:* `"T-002"` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| source | string | Identify this is ecom sync product<br/>*Example:* `"SHOPIFY"` | No |
| stockUom | long | Stock UOM<br/>*Example:* `2` | Yes |
| taxable | boolean | Is taxable?<br/>*Example:* `true` | No |
| type | string | Product type<br/>*Enum:* `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"`<br/>*Example:* `"TRACKED"` | Yes |
| uomSchema | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| uomSchemaDto | [UOMSchemaDto](#uomschemadto) | Product uom schema information | No |
| valuationMethod | string | Valuation Method<br/>*Enum:* `"FIFO"`, `"AVERAGE"`<br/>*Example:* `"FIFO"` | Yes |
| variantAttributes | object | Attribute Details specific to a variant | No |
| variantCount | integer | Variant Count | No |

### ProductRevenueRecognitionInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allocationType | string | Allocation Type<br/>*Example:* `"Normal/Exclude"` | No |
| createRevenuePlanOn | string | Create Revenue Plan On<br/>*Example:* `"Fulfillment"` | No |
| isDirectRevenuePositing | boolean | Direct Revenue Positing<br/>*Example:* `true` | No |
| itemRevenueCategory | string | Item Revenue Category<br/>*Example:* `"Licence"` | No |
| revRecForecastRule | string | Revenue Recognition Forecast Rule<br/>*Example:* `"Rule Forecast 1"` | No |
| revRecRule | string | Revenue Recognition Rule<br/>*Example:* `"Rule 1"` | No |


### ProductSubstitutesDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTracking | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"`<br/>*Example:* `"NONE"` | No |
| availableQuantity | number | Quantity of product available<br/>*Example:* `10` | No |
| productDocumentSeqCode | string | Doc seq code of Product<br/>*Example:* `"P-00001"` | No |
| productId | string | Product Id<br/>*Example:* `"P-00001"` | No |
| productName | string | Name of Product<br/>*Example:* `"Test Product"` | No |
| stockUom | long | Stock UOM<br/>*Example:* `2` | Yes |
| type | string | Product type<br/>*Enum:* `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"`<br/>*Example:* `"TRACKED"` | Yes |


### ProductValuation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| noOfProduct | number | Number of product of same type<br/>*Example:* `20` | No |
| productCode | string | Product Code<br/>*Example:* `"P-000001"` | No |
| productName | string | Product Name<br/>*Example:* `"IPHONE"` | No |
| valuation | number | Valuation<br/>*Example:* `2000` | No |

### ProductValuationDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| averagePrice | number |  | No |
| documentSequenceCode | string |  | No |
| id | long |  | No |
| name | string |  | No |
| pid | string |  | No |
| valuationMethod | string | *Enum:* `"FIFO"`, `"AVERAGE"` | No |

### PurchaseReturnDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingType | string | *Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| productCode | string | Product code<br/>*Example:* `"P-0000001"` | No |
| productName | string | Product name<br/>*Example:* `"Tracked Product"` | No |
| receiptQuantity | number | Goods Receipt quantity<br/>*Example:* `20` | No |
| returnedQuantity | number | 2 | No |
| uomReceiptQuantity | number | uom receipt quantity<br/>*Example:* `2` | No |
| uomReturnedQuantity | number | 2 | No |
| warehouseInventoryData | [ [PurchaseReturnWarehouseInventoryData](#purchasereturnwarehouseinventorydata) ] | warehouse Inventory List<br/>*Example:* `[]` | No |

### PurchaseReturnWarehouseInventoryData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingData | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] | Advanced tracking to fulfil list | No |
| quantity | number | Warehouse Code<br/>*Example:* `1` | No |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-0000001"` | No |
| warehouseName | string | Warehouse Name<br/>*Example:* `"Warehouse name"` | No |


### QCDocumentResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean |  | No |
| code | string |  | No |
| documentSeqCode | string |  | No |
| documentType | string | *Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"` | No |
| id | long |  | No |
| productCode | string |  | No |
| productDocumentSeqCode | string |  | No |
| productName | string |  | No |
| qcDate | string |  | No |
| qcStatus | string | *Enum:* `"QA_PENDING"`, `"QA_IN_PROGRESS"`, `"QA_DONE"`, `"NONE"` | No |
| quantity | number |  | No |
| tenantId | long |  | No |
| transactionCode | string |  | No |
| transactionDate | string |  | No |
| transactionItemCode | string |  | No |
| transactionType | string | *Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"` | No |
| txnType | string |  | No |
| warehouseInventoryData | [ [WarehouseInventoryData](#warehouseinventorydata) ] |  | No |

### ReorderReportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| committedStock | number |  | No |
| incomingStock | number |  | No |
| productName | string |  | No |
| reorderPoint | long |  | No |
| stockInHand | number |  | No |
| warehouseName | string |  | No |

### ReservedQuantityData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingMetaDtos | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] | Advance tracking type<br/>*Example:* `"SERIAL"` | No |
| advancedTrackingType | string | Advance tracking type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"`<br/>*Example:* `"SERIAL"` | No |
| availableQuantity | double | Available quantity in warehouse<br/>*Example:* `100` | No |
| binCode | string | bin code<br/>*Example:* `"BIN-00001"` | Yes |
| documentCode | string | Document code<br/>*Example:* `"000005"` | No |
| documentItemCode | string | Document item code<br/>*Example:* `"000005"` | No |
| documentType | string | Document type<br/>*Example:* `"SALES_INVOICE"` | No |
| productCode | string | Product Code<br/>*Example:* `10` | No |
| rackCode | string | Rack code<br/>*Example:* `"RACK-00001"` | Yes |
| reservedDate | dateTime | reserved date<br/>*Example:* `"20-10-2022"` | No |
| reservedQuantity | double | Reserved quantity<br/>*Example:* `100` | No |
| rowCode | string | Row code<br/>*Example:* `"ROW-00001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `100.4` | No |
| wipProcessType | string | Work Order WIP Process Type<br/>*Enum:* `"PRODUCTION"`, `"CONSUMPTION"`, `"WASTAGE"`, `"SCRAP"`, `"CO_PRODUCT"`<br/>*Example:* `"CONSUMPTION"` | No |

### Resource

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| description | string |  | No |
| file | [File](#file) |  | No |
| filename | string |  | No |
| inputStream | [InputStream](#inputstream) |  | No |
| open | boolean |  | No |
| readable | boolean |  | No |
| uri | [URI](#uri) |  | No |
| url | [URL](#url) |  | No |

### ResponseEntity

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| body | object |  | No |
| statusCode | string | *Enum:* `"100 CONTINUE"`, `"101 SWITCHING_PROTOCOLS"`, `"102 PROCESSING"`, `"103 CHECKPOINT"`, `"200 OK"`, `"201 CREATED"`, `"202 ACCEPTED"`, `"203 NON_AUTHORITATIVE_INFORMATION"`, `"204 NO_CONTENT"`, `"205 RESET_CONTENT"`, `"206 PARTIAL_CONTENT"`, `"207 MULTI_STATUS"`, `"208 ALREADY_REPORTED"`, `"226 IM_USED"`, `"300 MULTIPLE_CHOICES"`, `"301 MOVED_PERMANENTLY"`, `"302 FOUND"`, `"302 MOVED_TEMPORARILY"`, `"303 SEE_OTHER"`, `"304 NOT_MODIFIED"`, `"305 USE_PROXY"`, `"307 TEMPORARY_REDIRECT"`, `"308 PERMANENT_REDIRECT"`, `"400 BAD_REQUEST"`, `"401 UNAUTHORIZED"`, `"402 PAYMENT_REQUIRED"`, `"403 FORBIDDEN"`, `"404 NOT_FOUND"`, `"405 METHOD_NOT_ALLOWED"`, `"406 NOT_ACCEPTABLE"`, `"407 PROXY_AUTHENTICATION_REQUIRED"`, `"408 REQUEST_TIMEOUT"`, `"409 CONFLICT"`, `"410 GONE"`, `"411 LENGTH_REQUIRED"`, `"412 PRECONDITION_FAILED"`, `"413 PAYLOAD_TOO_LARGE"`, `"413 REQUEST_ENTITY_TOO_LARGE"`, `"414 URI_TOO_LONG"`, `"414 REQUEST_URI_TOO_LONG"`, `"415 UNSUPPORTED_MEDIA_TYPE"`, `"416 REQUESTED_RANGE_NOT_SATISFIABLE"`, `"417 EXPECTATION_FAILED"`, `"418 I_AM_A_TEAPOT"`, `"419 INSUFFICIENT_SPACE_ON_RESOURCE"`, `"420 METHOD_FAILURE"`, `"421 DESTINATION_LOCKED"`, `"422 UNPROCESSABLE_ENTITY"`, `"423 LOCKED"`, `"424 FAILED_DEPENDENCY"`, `"426 UPGRADE_REQUIRED"`, `"428 PRECONDITION_REQUIRED"`, `"429 TOO_MANY_REQUESTS"`, `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"`, `"451 UNAVAILABLE_FOR_LEGAL_REASONS"`, `"500 INTERNAL_SERVER_ERROR"`, `"501 NOT_IMPLEMENTED"`, `"502 BAD_GATEWAY"`, `"503 SERVICE_UNAVAILABLE"`, `"504 GATEWAY_TIMEOUT"`, `"505 HTTP_VERSION_NOT_SUPPORTED"`, `"506 VARIANT_ALSO_NEGOTIATES"`, `"507 INSUFFICIENT_STORAGE"`, `"508 LOOP_DETECTED"`, `"509 BANDWIDTH_LIMIT_EXCEEDED"`, `"510 NOT_EXTENDED"`, `"511 NETWORK_AUTHENTICATION_REQUIRED"` | No |
| statusCodeValue | integer |  | No |

### ReturnDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| binCode | string | bin code<br/>*Example:* `"BIN-00001"` | Yes |
| cfield | object |  | No |
| code | string | SR-00001 | No |
| customFieldItems | [ [CustomFieldItem](#customfielditem) ] |  | No |
| documentCode | string | 0000002 | No |
| documentSequenceCode | string | 0000002 | No |
| documentType | string | QUOTATION | No |
| rackCode | string | Rack code<br/>*Example:* `"RACK-00001"` | Yes |
| returnDate | dateTime | 2020-09-21 | No |
| returnItemDtos | [ [ReturnItemDto](#returnitemdto) ] |  | No |
| returnType | string | SALES_RETURN<br/>*Enum:* `"SALES_RETURN"`, `"PURCHASE_RETURN"` | No |
| rowCode | string | Row code<br/>*Example:* `"ROW-00001"` | Yes |
| warehouseCode | string | W-000001 | No |

### ReturnItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingMetaData | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] | Advanced tracking to return list | No |
| advancedTrackingType | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| cfield | object |  | No |
| customFieldItems | [ [CustomFieldItem](#customfielditem) ] |  | No |
| productVariantCode | string | P-0000001 | No |
| quantity | number | 2 | No |
| transactionRefCode | string | SR-000001 | No |
| unitPrice | number | 10.72 | No |
| value | number |  | No |

### RowRackBinData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| binId | long | Row Id<br/>*Example:* `1` | Yes |
| binName | string | Row Name<br/>*Example:* `"Row1"` | Yes |
| rackId | long | Row Id<br/>*Example:* `1` | Yes |
| rackName | string | Row Name<br/>*Example:* `"Row1"` | Yes |
| rowId | long | Row Id<br/>*Example:* `1` | Yes |
| rowName | string | Row Name<br/>*Example:* `"Row1"` | Yes |
### SaveInventoryTxnEventItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| productDetails | [ [ProductDetails](#productdetails) ] |  | No |


### ServiceTypeMalaysiaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string | Service code<br/>*Example:* `9954` | No |
| description | string | Description of SERIVCE code<br/>*Example:* `"Cigar and cheroots"` | No |
| exemption | boolean | Whether Product is Tax Exempted<br/>*Example:* `true` | No |
| gstRate | number | GST tax percent<br/>*Example:* `5` | No |


### Warehouse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean |  | No |
| address | string |  | No |
| assignUserIds | [ long ] |  | No |
| code | string |  | No |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| deleted | boolean |  | No |
| id | long |  | No |
| invWarehouseXrefs | [ [InvWarehouseXref](#invwarehousexref) ] |  | No |
| isDeleteEnable | boolean |  | No |
| location | [Location](#location) |  | No |
| name | string |  | No |
| primary | boolean |  | No |
| tenantId | long |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |
| warehouseBinInfos | [ [WarehouseBinInfo](#warehousebininfo) ] |  | No |
| warehouseRackInfos | [ [WarehouseRackInfo](#warehouserackinfo) ] |  | No |
| warehouseRowInfos | [ [WarehouseRowInfo](#warehouserowinfo) ] |  | No |
| warehouseType | string | *Enum:* `"PRIMARY"`, `"REJECTED"`, `"JOB_WORK_OUT"`, `"QA"`, `"NONE"` | No |

### WarehouseBinInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean |  | No |
| code | string |  | No |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| id | long |  | No |
| name | string |  | No |
| rackCode | string |  | No |
| rowCode | string |  | No |
| tenantId | long |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |



### WarehouseInventoryData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingData | [ [AdvancedTrackingBOMDto](#advancedtrackingbomdto) ] | Advanced tracking to fulfil list | No |
| binCode | string | bin code<br/>*Example:* `"BIN-00001"` | Yes |
| binName | string | bin name<br/>*Example:* `"BIN-00001"` | No |
| id | long | Id<br/>*Example:* `1` | No |
| quantity | number | Warehouse Code<br/>*Example:* `1` | No |
| rackCode | string | Rack code<br/>*Example:* `"RACK-00001"` | Yes |
| rackName | string | Rack name<br/>*Example:* `"RACK-00001"` | No |
| rowCode | string | Row code<br/>*Example:* `"ROW-00001"` | Yes |
| rowName | string | Row Nane<br/>*Example:* `"ROW-00001"` | No |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-0000001"` | No |
| warehouseName | string | Warehouse Name<br/>*Example:* `"Warehouse name"` | No |

### WarehouseInventoryPPSData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingData | [ [AdvancedTrackingData](#advancedtrackingdata) ] | Advanced tracking to PPS list | No |
| binCode | string | bin code<br/>*Example:* `"BIN-00001"` | Yes |
| binName | string | bin name<br/>*Example:* `"BIN-00001"` | No |
| id | long | Id<br/>*Example:* `1` | No |
| quantity | number | Warehouse Code<br/>*Example:* `1` | No |
| rackCode | string | Rack code<br/>*Example:* `"RACK-00001"` | Yes |
| rackName | string | Rack name<br/>*Example:* `"RACK-00001"` | No |
| rowCode | string | Row code<br/>*Example:* `"ROW-00001"` | Yes |
| rowName | string | Row Nane<br/>*Example:* `"ROW-00001"` | No |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-0000001"` | No |
| warehouseName | string | Warehouse Name<br/>*Example:* `"Warehouse name"` | No |

### WarehouseRackInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean |  | No |
| code | string |  | No |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| id | long |  | No |
| name | string |  | No |
| rowCode | string |  | No |
| tenantId | long |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |

### WarehouseResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Warehouse Status.<br/>*Example:* `true` | No |
| assignUserIds | [ long ] |  | No |
| code | string | warehouse specific unique code<br/>*Example:* `"WH-0000001"` | No |
| id | long | Warehouse ID<br/>*Example:* `1234` | No |
| isDeleteEnable | boolean | Flag to determine if warehouse can be deleted<br/>*Example:* `false` | No |
| location | [LocationDto](#locationdto) | Location details | No |
| name | string | Warehouse Name.<br/>*Example:* `"Warehouse-1"` | No |
| primary | boolean | flag to determine if warehouse is primary<br/>*Example:* `false` | No |
| warehouseBinInfos | [ [WarehouseBinInfo](#warehousebininfo) ] | Warehouse bin Infos | No |
| warehouseRackInfos | [ [WarehouseRackInfo](#warehouserackinfo) ] | Warehouse Rack Infos | No |
| warehouseRowInfos | [ [WarehouseRowInfo](#warehouserowinfo) ] | Warehouse Row Infos | No |
| warehouseType | string | Warehouse type<br/>*Enum:* `"PRIMARY"`, `"REJECTED"`, `"JOB_WORK_OUT"`, `"QA"`, `"NONE"`<br/>*Example:* `"NONE"` | No |

### WarehouseRowInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean |  | No |
| code | string |  | No |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| id | long |  | No |
| name | string |  | No |
| tenantId | long |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |
