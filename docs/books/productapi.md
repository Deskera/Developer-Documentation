---
id: productapi
title: Product APIs
sidebar_label: Product
---
Product describe the services or goods offering to your customers or vendors. For example, you might offer Essential and Premium version of your product. Offering of each version of your product would be separate product with different [pricing](https://www.deskera.com/deskera-pricing/).

`ProductRequest` help you to create a new product, and update a particular product.

More about [Product API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-81783ccd-eb71-412c-82dd-03e2323b910d)

## API
---
### Search Product

Get products by filter criteria. [More about search product](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-81783ccd-eb71-412c-82dd-03e2323b910d)

##### Description:

- Allows you to retrieve a list of all products.
- Allows you to retrieve specific products based on it's filter criteria.

#### GET Product
#### /v1/products

##### Request URL
[Product API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-81783ccd-eb71-412c-82dd-03e2323b910d)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcode | query | barcode | No | string |
| contactCode | query | contactCode | No | string |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| productTransactionType | query | productTransactionType | No | string |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products have been fetched successfully. | [ProductResponseIndia](#productresponseindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |


##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products have been fetched successfully. | [ProductResponseIndia](#productresponseindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
### Create Product

Create a new product. [More about create product](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-81783ccd-eb71-412c-82dd-03e2323b910d)

##### Description:

- Allows you to create a new product.

#### POST
#### /v1/products
##### Request URL

[Product API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-81783ccd-eb71-412c-82dd-03e2323b910d)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequest | body | productRequest | Yes | [ProductRequest](#productrequest) |




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

Update product information. [More about update product](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-81783ccd-eb71-412c-82dd-03e2323b910d)

##### Description:

- Allows you to update a specific product information.

#### PUT
#### Products {id}
##### Request URL

[Product API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-81783ccd-eb71-412c-82dd-03e2323b910d)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| productRequest | body | productRequest | Yes | [ProductRequest](#productrequest) |


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

---

### Get Products Paged

#### GET
##### Summary

Search products.

##### Description

API to search existing products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcode | query | barcode | No | string |
| contactCode | query | contactCode | No | string |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| productTransactionType | query | productTransactionType | No | string |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products have been fetched successfully. | [ProductResponseIndia](#productresponseindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new product.

##### Description

API to create new product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequest | body | productRequest | Yes | [ProductRequest](#productrequest) |

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
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete product.

##### Description

API to delete existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productIds | body | productIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Product has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product has been created successfully. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products activate

#### PUT
##### Summary

Change status of multiple products.

##### Description

API to change status of multiple products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |
| status | query | status | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Product status has been changed successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products allproductbrief

#### GET
##### Summary

Get All product brief information

##### Description

API to get brief information of all the products

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information have been fetched successfully. | [ [ProductShortInfo](#productshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products assign-batch

#### POST
##### Summary

assignBatchSerialToOpeningQuantity

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| assignBatchSerialRequest | body | assignBatchSerialRequest | Yes | [AssignBatchSerialRequest](#assignbatchserialrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products barcodes

#### POST
##### Summary

Get product details for barcodes.

##### Description

API to get product details for given barcodes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcodes | body | barcodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products brief

#### GET
##### Summary

Get product brief information

##### Description

API to get brief information of all the products

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productTransactionType | query | productTransactionType | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information have been fetched successfully. | [ [ProductShortInfo](#productshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products brief-search

#### GET
##### Summary

Get product brief information

##### Description

API to get brief information of all the products

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| search | query | search | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information have been fetched successfully. | [ [ProductShortInfo](#productshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products briefbyaccountcode/{accountCode}

#### GET
##### Summary

Get product brief information by account code.

##### Description

API to get the products by account code used as any of the following - Sales, Sales Return, Purchase, Purchase Return, COGS, Inventory, Stock Adjument account, GL account for India or GL account for MY.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | path | accountCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information by account code have been fetched successfully. | [ [ProductResponse](#productresponse) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products code/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| fetchImageUrls | query | fetchImageUrls | No | boolean |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products custom-fields

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

### Products demo/{tenantId}

#### POST
##### Summary

Create demo Products.

##### Description

API to create demo products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| country | query | country | No | string |
| tenantId | path | tenantId | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products doc-seq-codes

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentSequenceCodes | body | documentSequenceCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products getusedboms

#### POST
##### Summary

API to get used boms

##### Description

API to get used boms

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| pid | query | pid | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | API to get used boms successfully. | [ string ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ids

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products import

#### POST
##### Summary

Import products

##### Description

API to import products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequests | body | productRequests | Yes | [ [ProductRequest](#productrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductResponse](#productresponse) ] |
| 201 | Products have been imported successfully. | [ [ProductResponse](#productresponse) ] |
| 400 | Product import failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products info

#### POST
##### Summary

Fetch product details by codes

##### Description

Fetch product details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductInformation](#productinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventory

#### PUT
##### Summary

Update Inventory

##### Description

API to update inventory Opening Balance and Opening valuation in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inventoryRequests | body | inventoryRequests | Yes | [ [InventoryRequest](#inventoryrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory has been updated successfully. | [ [InventoryResponse](#inventoryresponse) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Inventory update fails. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Find Product Used

#### GET
##### Summary

To check if product is used

##### Description

API to check if product is used

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productId | query | productId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products isusedlandedcostcategory

#### POST
##### Summary

API to check used landed cost category

##### Description

To migrate in/out product qty

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| landedCostCategory | body | landedCostCategory | Yes | [LandedCostCategory](#landedcostcategory) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Landed Cost Category checked successfully. | boolean |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products isusedoperations

#### POST
##### Summary

API to check used operations

##### Description

API to check used operations

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| operations | body | operations | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | API to check used operations checked successfully. | boolean |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products migrate-reorder

#### POST
##### Summary

To migrate in/out product qty

##### Description

API to migrate in/out product qty

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodeList | body | productCodeList | Yes | [ string ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products names

#### POST
##### Summary

Get product details for names.

##### Description

API to get product details for given names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products opening-inventory-acc-codes

#### GET
##### Summary

Get Inventory Account Codes of Products with Opening Valuation

##### Description

API to Get Inventory Account Codes of Products with Opening Valuation

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory Account Codes of Products with Opening Valuation fetched successfully | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products product-custom-fields

#### POST
##### Summary

Get Custom Fields By Product Codes

##### Description

API to Get Custom Fields By Product Codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Custom Fields By Product Codes fetched successfully | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Get Product short info

#### POST
##### Summary

getProductPrice

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| priceRequestList | body | priceRequestList | Yes | [ [ProductShortInfoRequestForWorkOrder](#productshortinforequestforworkorder) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductShortInfoForWorkOrder](#productshortinfoforworkorder) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products save-import-data

#### POST
##### Summary

/save-import-data

##### Description

API to save import data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productDataRequest | body | productDataRequest | Yes | [ImportDataRequest](#importdatarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | object |
| 201 | Import Data saved successfully | object |
| 400 | Error while saving import Data |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Get Product Summary 

#### GET
##### Summary

Product summary.

##### Description

API for products summary.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products summary has been fetched successfully. | [ProductSummaryResponse](#productsummaryresponse) |
| 400 | Failed to fetch product summary. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products tax/count

#### POST
##### Summary

Get Product count for tax

##### Description

API to fetch Product count for tax

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| taxCodes | body | taxCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax Product count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products update-qty

#### POST
##### Summary

To update in/out product qty

##### Description

API to update in/out product qty

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productInOutQtyList | body | productInOutQtyList | Yes | [ [ProductInOutQty](#productinoutqty) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products variants

#### POST
##### Summary

Create product variants

##### Description

API to create new product variants

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| variantsCreateRequest | body | variantsCreateRequest | Yes | [VariantsCreateRequest](#variantscreaterequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ProductResponse](#productresponse) |
| 201 | Variant has been created successfully. | [ProductResponse](#productresponse) |
| 400 | Variant creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products variants/attribute/validate

#### POST
##### Summary

validateAttributeEdit

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| variantAttributeValidateRequest | body | variantAttributeValidateRequest | Yes | [VariantAttributeValidateRequest](#variantattributevalidaterequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products variants/list

#### POST
##### Summary

Get products variants

##### Description

API to get product variants

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| masterProductIds | body | masterProductIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product variants have been fetched successfully. | [ProductResponse](#productresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products variants/{id}

#### GET
##### Summary

Get products variants

##### Description

API to get product variants

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product variants have been fetched successfully. | [ProductResponse](#productresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete product variant

##### Description

API to delete product variant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Product variant has been deleted successfully. |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products {id}

#### PUT
##### Summary

Update existing product.

##### Description

API to update existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| productRequest | body | productRequest | Yes | [ProductRequest](#productrequest) |

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
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update product attributes.

##### Description

API to update attributes of existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| product | body | product | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product attributes has been updated successfully. | [ProductResponse](#productresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## additional-charge-controller
Additional Charge Controller

### Get Products Additonal Charges

#### GET
##### Summary

GET Additional Charges

##### Description

API to get all existing Additional Charges

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Additional Charges have been fetched successfully. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new additional charge.

##### Description

API to create new additional charges.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| additionalChargeRequest | body | additionalChargeRequest | Yes | [AdditionalChargeRequest](#additionalchargerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AdditionalChargeResponse](#additionalchargeresponse) |
| 201 | Additional charge has been created successfully. | [AdditionalChargeResponse](#additionalchargeresponse) |
| 400 | Additional charge creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products additional-charge/{id}

#### PUT
##### Summary

Update existing Additional Charge.

##### Description

API to update existing Additional Charge.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| additionalChargeRequest | body | additionalChargeRequest | Yes | [AdditionalChargeRequest](#additionalchargerequest) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Additional Charge has been updated successfully. | [AdditionalChargeResponse](#additionalchargeresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Additional Charge with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Additional Charge.

##### Description

API to delete existing Additional Charge.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Additional Charge has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Additional Charge has not been found to delete |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## product-controller-uae
Product UAE APIs

### Products ae

#### GET
##### Summary

Search products.

##### Description

API to search existing products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcode | query | barcode | No | string |
| contactCode | query | contactCode | No | string |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products have been fetched successfully. | [ProductResponseUae](#productresponseuae) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new product.

##### Description

API to create new product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequest | body | productRequest | Yes | [ProductRequestUae](#productrequestuae) |

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
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete product.

##### Description

API to delete existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productIds | body | productIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Product has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product has been created successfully. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ae/activate

#### PUT
##### Summary

Change status of multiple products.

##### Description

API to change status of multiple products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |
| status | query | status | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Product status has been changed successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ae/barcode-generate

#### GET
##### Summary

Get product details by barcode.

##### Description

API to get product details for given barcode valie.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| search | query | search | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ae/barcodes

#### POST
##### Summary

Get product details for barcodes.

##### Description

API to get product details for given barcodes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcodes | body | barcodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ae/brief

#### GET
##### Summary

Get product brief information

##### Description

API to get brief information of all the products

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information have been fetched successfully. | [ [ProductShortInfo](#productshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ae/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ae/doc-seq-codes

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentSequenceCodes | body | documentSequenceCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ae/import

#### POST
##### Summary

Import products

##### Description

API to import products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequests | body | productRequests | Yes | [ [ProductRequestUae](#productrequestuae) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductResponse](#productresponse) ] |
| 201 | Products have been imported successfully. | [ [ProductResponse](#productresponse) ] |
| 400 | Product import failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ae/inventory

#### PUT
##### Summary

Update Inventory

##### Description

API to update inventory Opening Balance and Opening valuation in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inventoryRequests | body | inventoryRequests | Yes | [ [InventoryRequest](#inventoryrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory has been updated successfully. | [ [InventoryResponse](#inventoryresponse) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Inventory update fails. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ae/names

#### POST
##### Summary

Get product details for names.

##### Description

API to get product details for given names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ae/summary

#### GET
##### Summary

Product summary.

##### Description

API for products summary.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products summary has been fetched successfully. | [ProductSummaryResponse](#productsummaryresponse) |
| 400 | Failed to fetch product summary. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ae/{id}

#### PUT
##### Summary

Update existing product.

##### Description

API to update existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| productRequest | body | productRequest | Yes | [ProductRequestUae](#productrequestuae) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product has been updated successfully. | [ProductResponseUae](#productresponseuae) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update product attributes.

##### Description

API to update attributes of existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| product | body | product | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product attributes has been updated successfully. | [ProductResponse](#productresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## bom-controller
Build Of Materials APIs

### Products assemble

#### POST
##### Summary

Assemble Bill_Of_Materials product

##### Description

API to assemble Bill_Of_Materials product

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCode | query | productCode | Yes | string |
| quantity | query | quantity | Yes | number |
| warehouseCode | query | warehouseCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Product has been assembled successfully |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 406 | Product can not be assembled due to insufficient quantity |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products assemble/addworkorderinventory

#### POST
##### Summary

Work Order Inventory

##### Description

add Work Order Inventory details

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| req | body | req | Yes | [WorkOrderInventoryRequest](#workorderinventoryrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Work order details added in inventory successfully | [BomAssemblyResponse](#bomassemblyresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 406 | Work order details could not be added in inventory. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products assemble/bom-je

#### POST
##### Summary

updateBOMJE

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bomCodes | body | bomCodes | Yes | [ string ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products assemble/bomProductCost

#### GET
##### Summary

getBomProductCost

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bomSeqCode | query | bomSeqCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | object |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products assemble/bomassemble

#### POST
##### Summary

Assemble Bill_Of_Materials product

##### Description

API to assemble Bill_Of_Materials product

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| req | body | req | Yes | [BomAssemblyRequest](#bomassemblyrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product has been assembled successfully | [BomAssemblyResponse](#bomassemblyresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 406 | Product can not be assembled due to insufficient quantity |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products assemble/bomconsumtionproductiondetails

#### GET
##### Summary

getBOMConsumptionProductionSummary

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bomMetaCode | query | bomMetaCode | No | string |
| productCode | query | productCode | Yes | string |
| workOrderCode | query | workOrderCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [WIPConsumptionProductionSummaryDto](#wipconsumptionproductionsummarydto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products assemble/bomdetails

#### GET
##### Summary

getBOMAssemblyDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bomMetaCode | query | bomMetaCode | No | string |
| productId | query | productId | Yes | long |
| quantityToBuild | query | quantityToBuild | Yes | number |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BOMAssemblyDetailsResponse](#bomassemblydetailsresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products assemble/bomexplosiondetails

#### GET
##### Summary

getBOMExplosionDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bomMetaCode | query | bomMetaCode | No | string |
| productCode | query | productCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BomExplosionDto](#bomexplosiondto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products assemble/productforecasedetails

#### GET
##### Summary

getProductForecastDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bomMetaCode | query | bomMetaCode | No | string |
| productCode | query | productCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductForecastDetailsDto](#productforecastdetailsdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products assemble/quantity

#### GET
##### Summary

Get max assemble quantity for product

##### Description

API to get max assemble quantity

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCode | query | productCode | Yes | string |
| warehouseCode | query | warehouseCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Max assemble quantity has been fetched successfully | integer |
| 400 | Warehouse Code is missing |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## attribute-controller
Attributes APIs

### Get Product Attributes

#### GET
##### Summary

Search attribute.

##### Description

API to search attribute.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Attribute has been fethced successfully. | [ProductResponseIndia](#productresponseindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new attribute.

##### Description

API to create new attribute.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| attributeRequest | body | attributeRequest | Yes | [AttributeRequest](#attributerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AttributeRequest](#attributerequest) |
| 201 | Attribute has been created successfully. | [AttributeRequest](#attributerequest) |
| 400 | Attribute creation failed |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products attribute/bulk

#### POST
##### Summary

Create new attribute.

##### Description

API to create new attribute.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| attributeRequestList | body | attributeRequestList | Yes | [ [AttributeRequest](#attributerequest) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Attribute has been created successfully. |
| 400 | Attribute creation failed |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products attribute/{id}

#### DELETE
##### Summary

Delete attribute.

##### Description

API to delete  attribute.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Attribute has been deleted successfully. |
| 204 | No Content |
| 400 | Attribute deletion failed |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## product-controller-australia
v1/products/au

### Products au

#### GET
##### Summary

Search products.

##### Description

API to search existing products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcode | query | barcode | No | string |
| contactCode | query | contactCode | No | string |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products have been fetched successfully. | [ProductResponseIndia](#productresponseindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new product.

##### Description

API to create new product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequest | body | productRequest | Yes | [ProductRequest](#productrequest) |

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
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete product.

##### Description

API to delete existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productIds | body | productIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Product has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product has been created successfully. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products au/activate

#### PUT
##### Summary

Change status of multiple products.

##### Description

API to change status of multiple products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |
| status | query | status | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Product status has been changed successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products au/barcode-generate

#### GET
##### Summary

Get product details by barcode.

##### Description

API to get product details for given barcode valie.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| search | query | search | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products au/barcodes

#### POST
##### Summary

Get product details for barcodes.

##### Description

API to get product details for given barcodes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcodes | body | barcodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products au/brief

#### GET
##### Summary

Get product brief information

##### Description

API to get brief information of all the products

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information have been fetched successfully. | [ [ProductShortInfo](#productshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products au/briefbyaccountcode/{accountCode}

#### GET
##### Summary

Get product brief information by account code.

##### Description

API to get the products by account code used as any of the following - Sales, Sales Return, Purchase, Purchase Return, COGS, Inventory, Stock Adjument account, GL account for India or GL account for MY.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | path | accountCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information by account code have been fetched successfully. | [ [ProductResponse](#productresponse) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products au/code/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products au/custom-fields

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

### Products au/demo/{tenantId}

#### POST
##### Summary

Create demo Products.

##### Description

API to create demo products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| country | query | country | No | string |
| tenantId | path | tenantId | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products au/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products au/doc-seq-codes

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentSequenceCodes | body | documentSequenceCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products au/import

#### POST
##### Summary

Import products

##### Description

API to import products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequests | body | productRequests | Yes | [ [ProductRequest](#productrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductResponse](#productresponse) ] |
| 201 | Products have been imported successfully. | [ [ProductResponse](#productresponse) ] |
| 400 | Product import failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products au/info

#### POST
##### Summary

Fetch product details by codes

##### Description

Fetch product details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductInformation](#productinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products au/inventory

#### PUT
##### Summary

Update Inventory

##### Description

API to update inventory Opening Balance and Opening valuation in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inventoryRequests | body | inventoryRequests | Yes | [ [InventoryRequest](#inventoryrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory has been updated successfully. | [ [InventoryResponse](#inventoryresponse) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Inventory update fails. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products au/names

#### POST
##### Summary

Get product details for names.

##### Description

API to get product details for given names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products au/opening-inventory-acc-codes

#### GET
##### Summary

Get Inventory Account Codes of Products with Opening Valuation

##### Description

API to Get Inventory Account Codes of Products with Opening Valuation

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory Account Codes of Products with Opening Valuation fetched successfully | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products au/summary

#### GET
##### Summary

Product summary.

##### Description

API for products summary.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products summary has been fetched successfully. | [ProductSummaryResponse](#productsummaryresponse) |
| 400 | Failed to fetch product summary. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products au/{id}

#### PUT
##### Summary

Update existing product.

##### Description

API to update existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| productRequest | body | productRequest | Yes | [ProductRequest](#productrequest) |

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
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update product attributes.

##### Description

API to update attributes of existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| product | body | product | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product attributes has been updated successfully. | [ProductResponse](#productresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## barcode-controller
Barcode Controller

### Products barcode-generate

#### GET
##### Summary

Get product details by barcode.

##### Description

API to get product details for given barcode valie.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| search | query | search | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new Product Barcode Info.

##### Description

API to create new Product Barcode Info.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [UOMDto](#uomdto) |
| 201 | API to create new Product Barcode Info. | [UOMDto](#uomdto) |
| 400 | Product Barcode Info creation failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## product-controller-be
Product Belgium APIs

### Products be

#### GET
##### Summary

Search products.

##### Description

API to search existing products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcode | query | barcode | No | string |
| contactCode | query | contactCode | No | string |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products have been fetched successfully. | [ProductResponseIndia](#productresponseindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new product.

##### Description

API to create new product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequest | body | productRequest | Yes | [ProductRequest](#productrequest) |

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
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete product.

##### Description

API to delete existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productIds | body | productIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Product has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product has been created successfully. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products be/activate

#### PUT
##### Summary

Change status of multiple products.

##### Description

API to change status of multiple products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |
| status | query | status | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Product status has been changed successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products be/barcode-generate

#### GET
##### Summary

Get product details by barcode.

##### Description

API to get product details for given barcode valie.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| search | query | search | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products be/barcodes

#### POST
##### Summary

Get product details for barcodes.

##### Description

API to get product details for given barcodes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcodes | body | barcodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products be/brief

#### GET
##### Summary

Get product brief information

##### Description

API to get brief information of all the products

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information have been fetched successfully. | [ [ProductShortInfo](#productshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products be/briefbyaccountcode/{accountCode}

#### GET
##### Summary

Get product brief information by account code.

##### Description

API to get the products by account code used as any of the following - Sales, Sales Return, Purchase, Purchase Return, COGS, Inventory, Stock Adjument account, GL account for India or GL account for MY.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | path | accountCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information by account code have been fetched successfully. | [ [ProductResponse](#productresponse) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products be/code/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products be/custom-fields

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

### Products be/demo/{tenantId}

#### POST
##### Summary

Create demo Products.

##### Description

API to create demo products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| country | query | country | No | string |
| tenantId | path | tenantId | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products be/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products be/doc-seq-codes

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentSequenceCodes | body | documentSequenceCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products be/import

#### POST
##### Summary

Import products

##### Description

API to import products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequests | body | productRequests | Yes | [ [ProductRequest](#productrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductResponse](#productresponse) ] |
| 201 | Products have been imported successfully. | [ [ProductResponse](#productresponse) ] |
| 400 | Product import failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products be/info

#### POST
##### Summary

Fetch product details by codes

##### Description

Fetch product details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductInformation](#productinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products be/inventory

#### PUT
##### Summary

Update Inventory

##### Description

API to update inventory Opening Balance and Opening valuation in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inventoryRequests | body | inventoryRequests | Yes | [ [InventoryRequest](#inventoryrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory has been updated successfully. | [ [InventoryResponse](#inventoryresponse) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Inventory update fails. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products be/names

#### POST
##### Summary

Get product details for names.

##### Description

API to get product details for given names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products be/opening-inventory-acc-codes

#### GET
##### Summary

Get Inventory Account Codes of Products with Opening Valuation

##### Description

API to Get Inventory Account Codes of Products with Opening Valuation

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory Account Codes of Products with Opening Valuation fetched successfully | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products be/summary

#### GET
##### Summary

Product summary.

##### Description

API for products summary.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products summary has been fetched successfully. | [ProductSummaryResponse](#productsummaryresponse) |
| 400 | Failed to fetch product summary. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products be/{id}

#### PUT
##### Summary

Update existing product.

##### Description

API to update existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| productRequest | body | productRequest | Yes | [ProductRequest](#productrequest) |

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
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update product attributes.

##### Description

API to update attributes of existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| product | body | product | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product attributes has been updated successfully. | [ProductResponse](#productresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## product-controller-canada
v1/products/ca

### Products ca

#### GET
##### Summary

Search products.

##### Description

API to search existing products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcode | query | barcode | No | string |
| contactCode | query | contactCode | No | string |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products have been fetched successfully. | [ProductResponseIndia](#productresponseindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new product.

##### Description

API to create new product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequest | body | productRequest | Yes | [ProductRequest](#productrequest) |

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
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete product.

##### Description

API to delete existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productIds | body | productIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Product has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product has been created successfully. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ca/activate

#### PUT
##### Summary

Change status of multiple products.

##### Description

API to change status of multiple products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |
| status | query | status | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Product status has been changed successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ca/barcode-generate

#### GET
##### Summary

Get product details by barcode.

##### Description

API to get product details for given barcode valie.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| search | query | search | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ca/barcodes

#### POST
##### Summary

Get product details for barcodes.

##### Description

API to get product details for given barcodes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcodes | body | barcodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ca/brief

#### GET
##### Summary

Get product brief information

##### Description

API to get brief information of all the products

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information have been fetched successfully. | [ [ProductShortInfo](#productshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ca/briefbyaccountcode/{accountCode}

#### GET
##### Summary

Get product brief information by account code.

##### Description

API to get the products by account code used as any of the following - Sales, Sales Return, Purchase, Purchase Return, COGS, Inventory, Stock Adjument account, GL account for India or GL account for MY.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | path | accountCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information by account code have been fetched successfully. | [ [ProductResponse](#productresponse) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ca/code/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ca/custom-fields

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

### Products ca/demo/{tenantId}

#### POST
##### Summary

Create demo Products.

##### Description

API to create demo products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| country | query | country | No | string |
| tenantId | path | tenantId | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ca/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ca/doc-seq-codes

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentSequenceCodes | body | documentSequenceCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ca/import

#### POST
##### Summary

Import products

##### Description

API to import products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequests | body | productRequests | Yes | [ [ProductRequest](#productrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductResponse](#productresponse) ] |
| 201 | Products have been imported successfully. | [ [ProductResponse](#productresponse) ] |
| 400 | Product import failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ca/info

#### POST
##### Summary

Fetch product details by codes

##### Description

Fetch product details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductInformation](#productinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ca/inventory

#### PUT
##### Summary

Update Inventory

##### Description

API to update inventory Opening Balance and Opening valuation in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inventoryRequests | body | inventoryRequests | Yes | [ [InventoryRequest](#inventoryrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory has been updated successfully. | [ [InventoryResponse](#inventoryresponse) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Inventory update fails. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ca/names

#### POST
##### Summary

Get product details for names.

##### Description

API to get product details for given names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ca/opening-inventory-acc-codes

#### GET
##### Summary

Get Inventory Account Codes of Products with Opening Valuation

##### Description

API to Get Inventory Account Codes of Products with Opening Valuation

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory Account Codes of Products with Opening Valuation fetched successfully | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ca/summary

#### GET
##### Summary

Product summary.

##### Description

API for products summary.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products summary has been fetched successfully. | [ProductSummaryResponse](#productsummaryresponse) |
| 400 | Failed to fetch product summary. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ca/{id}

#### PUT
##### Summary

Update existing product.

##### Description

API to update existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| productRequest | body | productRequest | Yes | [ProductRequest](#productrequest) |

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
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update product attributes.

##### Description

API to update attributes of existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| product | body | product | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product attributes has been updated successfully. | [ProductResponse](#productresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## product-controller-germany
v1/products/de

### Products de

#### GET
##### Summary

Search products.

##### Description

API to search existing products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcode | query | barcode | No | string |
| contactCode | query | contactCode | No | string |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products have been fetched successfully. | [ProductResponseIndia](#productresponseindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new product.

##### Description

API to create new product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequest | body | productRequest | Yes | [ProductRequest](#productrequest) |

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
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete product.

##### Description

API to delete existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productIds | body | productIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Product has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product has been created successfully. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products de/activate

#### PUT
##### Summary

Change status of multiple products.

##### Description

API to change status of multiple products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |
| status | query | status | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Product status has been changed successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products de/barcode-generate

#### GET
##### Summary

Get product details by barcode.

##### Description

API to get product details for given barcode valie.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| search | query | search | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products de/barcodes

#### POST
##### Summary

Get product details for barcodes.

##### Description

API to get product details for given barcodes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcodes | body | barcodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products de/brief

#### GET
##### Summary

Get product brief information

##### Description

API to get brief information of all the products

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information have been fetched successfully. | [ [ProductShortInfo](#productshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products de/briefbyaccountcode/{accountCode}

#### GET
##### Summary

Get product brief information by account code.

##### Description

API to get the products by account code used as any of the following - Sales, Sales Return, Purchase, Purchase Return, COGS, Inventory, Stock Adjument account, GL account for India or GL account for MY.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | path | accountCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information by account code have been fetched successfully. | [ [ProductResponse](#productresponse) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products de/code/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products de/custom-fields

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

### Products de/demo/{tenantId}

#### POST
##### Summary

Create demo Products.

##### Description

API to create demo products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| country | query | country | No | string |
| tenantId | path | tenantId | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products de/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products de/doc-seq-codes

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentSequenceCodes | body | documentSequenceCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products de/import

#### POST
##### Summary

Import products

##### Description

API to import products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequests | body | productRequests | Yes | [ [ProductRequest](#productrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductResponse](#productresponse) ] |
| 201 | Products have been imported successfully. | [ [ProductResponse](#productresponse) ] |
| 400 | Product import failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products de/info

#### POST
##### Summary

Fetch product details by codes

##### Description

Fetch product details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductInformation](#productinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products de/inventory

#### PUT
##### Summary

Update Inventory

##### Description

API to update inventory Opening Balance and Opening valuation in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inventoryRequests | body | inventoryRequests | Yes | [ [InventoryRequest](#inventoryrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory has been updated successfully. | [ [InventoryResponse](#inventoryresponse) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Inventory update fails. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products de/names

#### POST
##### Summary

Get product details for names.

##### Description

API to get product details for given names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products de/opening-inventory-acc-codes

#### GET
##### Summary

Get Inventory Account Codes of Products with Opening Valuation

##### Description

API to Get Inventory Account Codes of Products with Opening Valuation

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory Account Codes of Products with Opening Valuation fetched successfully | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products de/summary

#### GET
##### Summary

Product summary.

##### Description

API for products summary.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products summary has been fetched successfully. | [ProductSummaryResponse](#productsummaryresponse) |
| 400 | Failed to fetch product summary. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products de/{id}

#### PUT
##### Summary

Update existing product.

##### Description

API to update existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| productRequest | body | productRequest | Yes | [ProductRequest](#productrequest) |

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
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update product attributes.

##### Description

API to update attributes of existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| product | body | product | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product attributes has been updated successfully. | [ProductResponse](#productresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## fulfillment-controller
Fulfillment APIs

### Products fulfillment

#### GET
##### Summary

Search Fulfillment Order

##### Description

API to search Fulfillment Order

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fulfillment orders have been fetched successfully. | [FulfillmentResponse](#fulfillmentresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Fulfilled Sales Order.

##### Description

API to create sales order item fulfillment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| fulfillmentRequest | body | fulfillmentRequest | Yes | [FulfillmentRequest](#fulfillmentrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fulfillment has been created successfully. | [FulfillmentResponse](#fulfillmentresponse) |
| 201 | Created |  |
| 400 | Fulfillment not created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete fulfillment by fulfillment code.

##### Description

API to delete fulfillment by fulfillment code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentSequenceCode | query | documentSequenceCode | Yes | string |
| fulfillmentCode | query | fulfillmentCode | Yes | string |
| isBulkDelete | query | isBulkDelete | No | boolean |
| isConvertedFromQuotation | query | isConvertedFromQuotation | Yes | boolean |
| salesInvoiceCode | query | salesInvoiceCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Fulfillment has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Fulfillment could not be deleted. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products fulfillment/DeleteAllFulfillment

#### DELETE
##### Summary

Delete all fulfillment by tenant Id

##### Description

API to delete all fulfillment by tenant Id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tenantId | query | tenantId | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Fulfillment has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Fulfillment could not be deleted. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products fulfillment/bulk

#### POST
##### Summary

Fulfilled Sales Order.

##### Description

API to create bulk sales order item fulfillment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| fulfillmentRequests | body | fulfillmentRequests | Yes | [ [FulfillmentRequest](#fulfillmentrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fulfillment has been created successfully. | [ [FulfillmentResponse](#fulfillmentresponse) ] |
| 201 | Created |  |
| 400 | Fulfillment not created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Get Product Fulfillment based on code and type

#### GET
##### Summary

Get fulfillment details by document code. Document can be at any stage (QUOTATION or INVOICE)

##### Description

API to fetch fulfillment details by document code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentCode | path | documentCode | Yes | string |
| documentType | query | documentType | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fulfillment information fetched successfully. | [ [FulfillmentResponse](#fulfillmentresponse) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Fulfillment not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products fulfillment/fulfillmentitems/{code}

#### GET
##### Summary

Get fulfillment details by fulfillment code.

##### Description

API to fetch fulfillment details by fulfillment code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fulfillment information fetched successfully. | [FulfillmentResponse](#fulfillmentresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Fulfillment item not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products fulfillment/quantity

#### POST
##### Summary

getQuoteAndInvoiceQuantities

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [StockQuantitiesRequest](#stockquantitiesrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [StockQuantitiesResponse](#stockquantitiesresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products fulfillment/quotation

#### DELETE
##### Summary

Delete fulfillment of Quotation by fulfillment code.

##### Description

API to delete fulfillment of Quotation by fulfillment code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentSequenceCode | query | documentSequenceCode | Yes | string |
| fulfillmentCode | query | fulfillmentCode | Yes | string |
| isBulkDelete | query | isBulkDelete | No | boolean |
| quotationCode | query | quotationCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | API to delete fulfillment of Quotation by fulfillment code. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Fulfillment of Quotation could not be deleted. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products fulfillment/salesorder

#### DELETE
##### Summary

Delete fulfillment by fulfillment code.

##### Description

API to delete fulfillment by fulfillment code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentSequenceCode | query | documentSequenceCode | Yes | string |
| fulfillmentCode | query | fulfillmentCode | Yes | string |
| isBulkDelete | query | isBulkDelete | No | boolean |
| isConvertedFromQuotation | query | isConvertedFromQuotation | Yes | boolean |
| salesOrderCode | query | salesOrderCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Fulfillment has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Fulfillment could not be deleted. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products fulfillment/{code}

#### GET
##### Summary

Get fulfillment details by fulfillment code.

##### Description

API to fetch fulfillment details by fulfillment code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fulfillment information fetched successfully. | [FulfillmentResponse](#fulfillmentresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Fulfillment not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products fulfillment/{code}/bulk

#### GET
##### Summary

Get fulfillment details by fulfillment code.

##### Description

API to fetch fulfillment details by fulfillment code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fulfillment information fetched successfully. | [FulfillmentResponse](#fulfillmentresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Fulfillment not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products fulfillment/{id}

#### DELETE
##### Summary

Delete fulfillment by fulfillment id.

##### Description

API to delete fulfillment by fulfillment id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Fulfillment has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Fulfillment not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## goods-receipt-controller
Goods Receipts APIs

### Add Product Goods receipt

#### POST
##### Summary

Goods receipt purchase Order.

##### Description

API to create goods receipt purchase Order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| goodsReceiptRequest | body | goodsReceiptRequest | Yes | [GoodsReceiptRequest](#goodsreceiptrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order item goods receipt has been created successfully. | [GoodsReceiptResponse](#goodsreceiptresponse) |
| 201 | Created |  |
| 400 | Purchase order item goods receipt failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products goodsreceipt/DeleteAllGoodReceipt

#### DELETE
##### Summary

Delete all purchase order Goods receipt by tenant Id.

##### Description

API to delete all purchase order Goods receipt by tenant Id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tenantId | query | tenantId | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Goods receipt has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase order Goods receipt not found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products goodsreceipt/codes-types

#### POST
##### Summary

Fetch Goods receipts for documents

##### Description

API to Fetch Goods receipts for documents

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| goodsReceiptRequest | body | goodsReceiptRequest | Yes | [GoodsReceiptsTypeCodeRequest](#goodsreceiptstypecoderequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Goods receipts for documents fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products goodsreceipt/count/{code}

#### GET
##### Summary

Get number of GRs by parent code

##### Description

Get number of GRs by parent code

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GR count fetched by code | integer |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | GR count with code not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products goodsreceipt/documentCode/{documentCode}

#### GET
##### Summary

Get goods receipt details by document code.

##### Description

API to fetch purchase order item goods receipt details by document code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentCode | path | documentCode | Yes | string |
| documentType | query | documentType | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order item goods receipt information fetched successfully. | [ [GoodsReceiptResponse](#goodsreceiptresponse) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order goods receipt not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products goodsreceipt/items/{code}

#### GET
##### Summary

Get GR ITEM by code

##### Description

Get GR ITEM  by code

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GR fetched by code | [GoodsReceiptItemDto](#goodsreceiptitemdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | GR with code not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products goodsreceipt/receipt

#### DELETE
##### Summary

Delete Purchase Invoice Goods receipt by goodsReceipt code.

##### Description

API to delete Purchase Invoice Goods Receipt by goodsReceipt code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| goodsReceiptCode | query | goodsReceiptCode | Yes | string |
| isBulkDeleted | query | isBulkDeleted | No | boolean |
| isConvertedFromOrder | query | isConvertedFromOrder | Yes | boolean |
| purchaseInvoiceCode | query | purchaseInvoiceCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Goods receipt has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase Invoice Goods receipt not found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products goodsreceipt/receipt/bulk

#### POST
##### Summary

Goods receipt purchase Order.

##### Description

API to create bulk goods receipt purchase Order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| goodsReceiptRequests | body | goodsReceiptRequests | Yes | [ [GoodsReceiptRequest](#goodsreceiptrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order item goods receipt has been created successfully. | [ [GoodsReceiptResponse](#goodsreceiptresponse) ] |
| 201 | Created |  |
| 400 | Purchase order item goods receipt failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products goodsreceipt/receipt/order

#### DELETE
##### Summary

Delete Purchase Order Goods receipt by goodsReceipt code.

##### Description

API to delete Purchase Order Goods Receipt by goodsReceipt code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| goodsReceiptCode | query | goodsReceiptCode | Yes | string |
| isBulkDeleted | query | isBulkDeleted | No | boolean |
| purchaseOrderCode | query | purchaseOrderCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Goods receipt has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase order Goods receipt not found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products goodsreceipt/receipt/{code}

#### GET
##### Summary

Get Goods receipt details by goods receipt code.

##### Description

API to fetch Goods receipt details by fulfillment code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Goods receipt information fetched successfully. | [GoodsReceiptResponse](#goodsreceiptresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order Goods receipt not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products goodsreceipt/receipt/{code}/bulk

#### GET
##### Summary

Get Goods receipt details by goods receipt code.

##### Description

API to fetch Goods receipt details by fulfillment code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Goods receipt information fetched successfully. | [GoodsReceiptResponse](#goodsreceiptresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order Goods receipt not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products goodsreceipt/receipt/{id}

#### DELETE
##### Summary

Delete purchase order Goods receipt by goodsReceipt Id.

##### Description

API to delete purchase order Goods Receipt by goodsReceipt Id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Goods receipt has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase order Goods receipt not found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products goodsreceipt/{code}

#### GET
##### Summary

Get GR by code

##### Description

Get GR by code

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GR fetched by code | [GoodsReceiptResponse](#goodsreceiptresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | GR with code not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## product-controller-indonesia
Product Indonesia APIs

### Products id

#### GET
##### Summary

Search products.

##### Description

API to search existing products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcode | query | barcode | No | string |
| contactCode | query | contactCode | No | string |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products have been fetched successfully. | [ProductResponseIndonesia](#productresponseindonesia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new product.

##### Description

API to create new product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequest | body | productRequest | Yes | [ProductRequestIndonesia](#productrequestindonesia) |

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
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete product.

##### Description

API to delete existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productIds | body | productIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Product has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product has been created successfully. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products id/activate

#### PUT
##### Summary

Change status of multiple products.

##### Description

API to change status of multiple products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |
| status | query | status | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Product status has been changed successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products id/barcode-generate

#### GET
##### Summary

Get product details by barcode.

##### Description

API to get product details for given barcode valie.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| search | query | search | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products id/barcodes

#### POST
##### Summary

Get product details for barcodes.

##### Description

API to get product details for given barcodes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcodes | body | barcodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products id/brief

#### GET
##### Summary

Get product brief information

##### Description

API to get brief information of all the products

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information have been fetched successfully. | [ [ProductShortInfo](#productshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products id/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products id/doc-seq-codes

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentSequenceCodes | body | documentSequenceCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products id/import

#### POST
##### Summary

Import products

##### Description

API to import products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequests | body | productRequests | Yes | [ [ProductRequestIndonesia](#productrequestindonesia) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductResponse](#productresponse) ] |
| 201 | Products have been imported successfully. | [ [ProductResponse](#productresponse) ] |
| 400 | Product import failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products id/inventory

#### PUT
##### Summary

Update Inventory

##### Description

API to update inventory Opening Balance and Opening valuation in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inventoryRequests | body | inventoryRequests | Yes | [ [InventoryRequest](#inventoryrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory has been updated successfully. | [ [InventoryResponse](#inventoryresponse) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Inventory update fails. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products id/names

#### POST
##### Summary

Get product details for names.

##### Description

API to get product details for given names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products id/summary

#### GET
##### Summary

Product summary.

##### Description

API for products summary.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products summary has been fetched successfully. | [ProductSummaryResponse](#productsummaryresponse) |
| 400 | Failed to fetch product summary. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products id/{id}

#### PUT
##### Summary

Update existing product.

##### Description

API to update existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| productRequest | body | productRequest | Yes | [ProductRequestIndonesia](#productrequestindonesia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product has been updated successfully. | [ProductResponseIndonesia](#productresponseindonesia) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update product attributes.

##### Description

API to update attributes of existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| product | body | product | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product attributes has been updated successfully. | [ProductResponse](#productresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## product-controller-india
Product India APIs

### Products in

#### GET
##### Summary

Search products.

##### Description

API to search existing products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcode | query | barcode | No | string |
| contactCode | query | contactCode | No | string |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| productTransactionType | query | productTransactionType | No | string |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products have been fetched successfully. | [ProductResponseIndia](#productresponseindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new product.

##### Description

API to create new product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequestIndia | body | productRequestIndia | Yes | [ProductRequestIndia](#productrequestindia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ProductResponseIndia](#productresponseindia) |
| 201 | Product has been created successfully. | [ProductResponseIndia](#productresponseindia) |
| 400 | Product creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete product.

##### Description

API to delete existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productIds | body | productIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Product has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product has been created successfully. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products in/activate

#### PUT
##### Summary

Change status of multiple products.

##### Description

API to change status of multiple products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |
| status | query | status | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Product status has been changed successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products in/all-hsn-sac

#### GET
##### Summary

Fetch all HSN and SAC codes information

##### Description

API to get all HSN and SAC codes information

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | All HSN and SAC codes information have been fetched successfully. | [HSNAndSACCode](#hsnandsaccode) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products in/barcode-generate

#### GET
##### Summary

Get product details by barcode.

##### Description

API to get product details for given barcode valie.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| search | query | search | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products in/barcodes

#### POST
##### Summary

Get product details for barcodes.

##### Description

API to get product details for given barcodes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcodes | body | barcodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products in/brief

#### GET
##### Summary

Get product brief information

##### Description

API to get brief information of all the products

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information have been fetched successfully. | [ [ProductShortInfo](#productshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products in/codes

#### POST
##### Summary

getByCodes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductResponseIndia](#productresponseindia) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products in/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products in/doc-seq-codes

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentSequenceCodes | body | documentSequenceCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Get Products HSN

#### GET
##### Summary

Fetch HSN code information

##### Description

API to get HSN code information

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | HSN code information have been fetched successfully. | [HSNCodeIndiaDto](#hsncodeindiadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

API to create HSN

##### Description

API to create HSN

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| hsnCodeRequest | body | hsnCodeRequest | Yes | [HSNCodeRequest](#hsncoderequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | HSN successfully created | [HSNCodeIndiaDto](#hsncodeindiadto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products in/hsn/{code}

#### PUT
##### Summary

API to update HSN

##### Description

API to update HSN

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |
| hsnCodeRequest | body | hsnCodeRequest | Yes | [HSNCodeRequest](#hsncoderequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | HSN successfully updated | [HSNCodeIndiaDto](#hsncodeindiadto) |
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

API to delete HSN

##### Description

API to delete HSN

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | HSN succesfully deleted | [SACCodeIndiaDto](#saccodeindiadto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products in/import

#### POST
##### Summary

Import products

##### Description

API to import products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequests | body | productRequests | Yes | [ [ProductRequestIndia](#productrequestindia) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductResponseIndia](#productresponseindia) ] |
| 201 | Products have been imported successfully. | [ [ProductResponseIndia](#productresponseindia) ] |
| 400 | Product import failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Update Product inventory

#### PUT
##### Summary

Update Inventory

##### Description

API to update inventory Opening Balance and Opening valuation in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inventoryRequests | body | inventoryRequests | Yes | [ [InventoryRequest](#inventoryrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory has been updated successfully. | [ [InventoryResponse](#inventoryresponse) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Inventory update fails. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products in/names

#### POST
##### Summary

Get product details for names.

##### Description

API to get product details for given names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Get Product SAC

#### GET
##### Summary

Fetch SAC code information

##### Description

API to get SAC code information

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | SAC code information have been fetched successfully. | [SACCodeIndiaDto](#saccodeindiadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

API to create SAC

##### Description

API to create SAC

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| sacCodeRequest | body | sacCodeRequest | Yes | [SACCodeRequest](#saccoderequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | SAC successfully created | [SACCodeIndiaDto](#saccodeindiadto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products in/sac/{code}

#### PUT
##### Summary

API to update SAC

##### Description

API to update SAC

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |
| sacCodeRequest | body | sacCodeRequest | Yes | [SACCodeRequest](#saccoderequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | SAC successfully updated | [SACCodeIndiaDto](#saccodeindiadto) |
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

API to delete SAC

##### Description

SAC succesfully deleted

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | All HSN and SAC codes information have been fetched successfully. | [SACCodeIndiaDto](#saccodeindiadto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products in/summary

#### GET
##### Summary

Product summary.

##### Description

API for products summary.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products summary has been fetched successfully. | [ProductSummaryResponse](#productsummaryresponse) |
| 400 | Failed to fetch product summary. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Get product nature of payment

#### GET
##### Summary

Get TDS Nature of Payments.

##### Description

Get TDS Nature of Payments.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched TDS Nature of Payments successfully. | [TdsNatureOfPaymentIndia](#tdsnatureofpaymentindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create India Compliance TDS Nature of Payment.

##### Description

Create India Compliance TDS Nature of Payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tdsNatureOfPaymentIndiaRequest | body | tdsNatureOfPaymentIndiaRequest | Yes | [TdsNatureOfPaymentIndiaRequest](#tdsnatureofpaymentindiarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TdsNatureOfPaymentIndia](#tdsnatureofpaymentindia) |
| 201 | TDS Nature of Payment created successfully. | [TdsNatureOfPaymentIndia](#tdsnatureofpaymentindia) |
| 400 | TDS Nature of Payment creation failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update India Compliance TDS Nature of Payment.

##### Description

Update India Compliance TDS Nature of Payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tdsNatureOfPaymentIndiaRequest | body | tdsNatureOfPaymentIndiaRequest | Yes | [TdsNatureOfPaymentIndiaRequest](#tdsnatureofpaymentindiarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TdsNatureOfPaymentIndia](#tdsnatureofpaymentindia) |
| 201 | TDS Nature of Payment updated successfully. | [TdsNatureOfPaymentIndia](#tdsnatureofpaymentindia) |
| 400 | TDS Nature of Payment updation failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete TDS Nature of Payment.

##### Description

Delete TDS Nature of Payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | TDS Nature of Payment has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Nature of Payment with id %s not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products in/{id}

#### PUT
##### Summary

Update existing product.

##### Description

API to update existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| productRequestIndia | body | productRequestIndia | Yes | [ProductRequestIndia](#productrequestindia) |

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
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update product attributes.

##### Description

API to update attributes of existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| product | body | product | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product attributes has been updated successfully. | [ProductResponseIndia](#productresponseindia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---

## advanced-tracking-controller
Advanced Tracking APIs

### Products inventories/advanced-tracking/available-serial-batch-by-warehouse

#### GET
##### Summary

Get Unfulfiled, Active Serial Numbers count

##### Description

API to Get Unfulfiled and Active Serial Numbers count

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCode | query | productCode | Yes | string |
| requiredQty | query | requiredQty | No | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Successfuly calculated number of serial/batches. | [AdvancedTrackingCountBySerialBatchDto](#advancedtrackingcountbyserialbatchdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/advanced-tracking/document

#### GET
##### Summary

API to get product tracking information for a document

##### Description

API to get product tracking information for a document

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| document_code | query | document_code | Yes | string |
| document_type | query | document_type | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched product tracking information by document | [ [ProductTrackingInfo](#producttrackinginfo) ] |
| 400 | Failed to fetch product tracking information by document |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/advanced-tracking/document/fulfillment

#### POST
##### Summary

Get Document Tracking Inventory Info

##### Description

API to Get Document Tracking Inventory Info

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| document_code | query | document_code | Yes | string |
| document_type | query | document_type | Yes | string |
| fulfillmentItemCodes | body | fulfillmentItemCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Successfuly fetched tracking information by document. | [AdvancedTrackingMeta](#advancedtrackingmeta) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Get Product sales return based on code and type

#### POST
##### Summary

Get Document Tracking Inventory Info for return

##### Description

API to Get Document Tracking Inventory Info for return

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| document_code | query | document_code | Yes | string |
| document_type | query | document_type | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Successfuly fetched tracking information by document for return. | [AdvancedTrackingMeta](#advancedtrackingmeta) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/advanced-tracking/documentref

#### POST
##### Summary

Get Document Tracking Inventory Info

##### Description

API to Get Document Tracking Inventory Info

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| transactionRefCode | body | transactionRefCode | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Successfuly fetched tracking information by document. | [AdvancedTrackingMeta](#advancedtrackingmeta) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/advanced-tracking/fulfillment/search

#### GET
##### Summary

search Advanced Tracking Units for fulfillment by transactionRefCode

##### Description

API to search Advanced Tracking Units By Transaction Reference Code for Fulfillment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| fromDate | query | fromDate | No | dateTime |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| toDate | query | toDate | No | dateTime |
| transactionRefCode | query | transactionRefCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Advanced Tracked Units for the fulfillment have been fetched successfully. | [AdvancedTrackingMetaDto](#advancedtrackingmetadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/advanced-tracking/goods-received/search

#### GET
##### Summary

search Advanced Tracking Units for goods received by transactionRefCode

##### Description

API to search Advanced Tracking Units By Transaction Reference Code for Goods Received

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| fromDate | query | fromDate | No | dateTime |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| toDate | query | toDate | No | dateTime |
| transactionRefCode | query | transactionRefCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Advanced Tracked Units for goods received have been fetched successfully. | [AdvancedTrackingMetaDto](#advancedtrackingmetadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/advanced-tracking/goods-received/txnCodes

#### POST
##### Summary

All advance tracking meta data

##### Description

Get all advance tracking meta data by goods receipt transactions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| txnRefCodes | body | txnRefCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Successfuly fetched tracking information by document. | [AdvancedTrackingMeta](#advancedtrackingmeta) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/advanced-tracking/search

#### GET
##### Summary

Search Advanced Tracking Units

##### Description

API to search Advanced Tracking Units

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| fromDate | query | fromDate | No | dateTime |
| isCombined | query | isCombined | No | boolean |
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
| 200 | Advanced Tracked Units have been fetched successfully. | [AdvancedTrackingMetaDto](#advancedtrackingmetadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/advanced-tracking/serial-batch-count

#### GET
##### Summary

Get Unfulfiled, Active Serial Numbers count

##### Description

API to Get Unfulfiled and Active Serial Numbers count

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productVariantCode | query | productVariantCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Successfuly calculated number of serial/batches. | [AdvancedTrackingCountBySerialBatchDto](#advancedtrackingcountbyserialbatchdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## pick-pack-ship-controller
Pick Pack Ship Controller

### Products inventories/documents

#### GET
##### Summary

Search sales documents.

##### Description

API to search sales documents.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| filter | query | filter | No | string |
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
| 200 | Sales documents have been fetched successfully. | [Page](#page) |
| 400 | Failed to fetch sales documents. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/documents/pick-pack-ship

#### PATCH
##### Summary

Update PPS document status.

##### Description

API to update PPS document status.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| salesDocumentDtos | body | salesDocumentDtos | Yes | [ [SalesDocumentDto](#salesdocumentdto) ] |
| status | query | status | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Status updated successfully. |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | PPS Sales Document code not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/documents/processed/documents

#### POST
##### Summary

Get processed shipment document by quotation code.

##### Description

API to check shipment document is processed or not by quotation code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentCodes | body | documentCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Processed shipment document details have been fetched successfully. | [ [ShipmentDocumentStatusDto](#shipmentdocumentstatusdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/documents/shipment-details/bulk

#### POST
##### Summary

Get Shipment details.

##### Description

API for Shipment details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| requestDetails | body | requestDetails | Yes | [ShipDocumentDetailRequestDto](#shipdocumentdetailrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Shipment details has been fetched successfully. | [ [ShippingDocumentDto](#shippingdocumentdto) ] |
| 201 | Created |  |
| 400 | Failed to fetch Shipment details. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## pack-list-controller
Pack List Controller

### Products inventories/pack-list

#### POST
##### Summary

Create Pack List.

##### Description

API to create pack list.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| packListRequest | body | packListRequest | Yes | [PackListRequest](#packlistrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PicklistResponse](#picklistresponse) |
| 201 | Pack list has been created successfully. | [PicklistResponse](#picklistresponse) |
| 400 | Pack list could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update Pack List.

##### Description

API to update existing pack list

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| packListRequest | body | packListRequest | Yes | [PackListRequest](#packlistrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Pack List has been updated successfully. | [PicklistResponse](#picklistresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Pack List with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/pack-list/packlist-details

#### POST
##### Summary

print Packing Slip

##### Description

Api to print Packing Slip after passing documentCodes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| salesDocumentDtos | body | salesDocumentDtos | Yes | [ [SalesDocumentDto](#salesdocumentdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Selected Packing Slips has been printed successfully. | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Order not found. %s |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/pack-list/print

#### POST
##### Summary

print Packing Slip

##### Description

Api to print Packing Slip after passing documentCodes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| salesDocumentDtos | body | salesDocumentDtos | Yes | [ [SalesDocumentDto](#salesdocumentdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Selected Packing Slips has been printed successfully. | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Order not found. %s |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/pack-list/void

#### PUT
##### Summary

void pack list

##### Description

Api to void packlist after passing documentIds.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| salesDocumentDtos | body | salesDocumentDtos | Yes | [ [SalesDocumentDto](#salesdocumentdto) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Selected packlists has been voided successfully. |
| 201 | Created |
| 400 | packlists can not be voided. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Order not found. %s |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## pick-list-controller
Pick List Controller

### Products inventories/pick-list

#### GET
##### Summary

Search Pick List.

##### Description

API to fetch pick list.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| filter | query | filter | No | string |
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
| 200 | Pick list has been fetched successfully. | [PicklistResponse](#picklistresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create Pick List.

##### Description

API to create pick list.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| pickListRequest | body | pickListRequest | Yes | [PickListRequest](#picklistrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PicklistResponse](#picklistresponse) |
| 201 | Pick list has been created successfully. | [PicklistResponse](#picklistresponse) |
| 400 | Pick list could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/pick-list/picklist-details

#### POST
##### Summary

print Pick list

##### Description

Api to print picklist after passing picklistIds.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| pickListIds | body | pickListIds | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Selected picklists has been printed successfully. | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Shipments by code not found. PickListCodes:  %s |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/pick-list/print

#### POST
##### Summary

print Pick list

##### Description

Api to print picklist after passing picklistIds.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| pickListIds | body | pickListIds | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Selected picklists has been printed successfully. | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Shipments by code not found. PickListCodes:  %s |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/pick-list/sales-orders

#### POST
##### Summary

Get Details of selected order to create Pick list.

##### Description

Api to get details of selected orders.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| salesDocumentDtos | body | salesDocumentDtos | Yes | [ [SalesDocumentDto](#salesdocumentdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Order details for pick list generation has been fetched successfully. | [PicklistResponse](#picklistresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/pick-list/scan/{itemCode}/{barcode}

#### PUT
##### Summary

Scan product .

##### Description

API to scan product for selected order

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcode | path | barcode | Yes | string |
| itemCode | path | itemCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Product has been scanned |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Product not found  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/pick-list/void

#### PUT
##### Summary

void Pick list

##### Description

Api to void picklist after passing picklistIds.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| pickListIds | body | pickListIds | Yes | [ string ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Selected picklists has been voided successfully. |
| 201 | Created |
| 400 | Picklists can not be voided. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Shipments by code not found. PickListCodes:  %s |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/pick-list/{id}

#### PUT
##### Summary

Update Pick List.

##### Description

API to update existing pick list

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| pickListRequest | body | pickListRequest | Yes | [PickListRequest](#picklistrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Pick List has been updated successfully. | [PicklistResponse](#picklistresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Pick List with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## reorder-report-controller
Reorder Report Controller

### Products inventories/reorderreport

#### GET
##### Summary

Search Reorder.

##### Description

API to fetch Reorder Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Reorder Report fetched successfully | [ReorderReportDto](#reorderreportdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## ship-list-controller
Ship List Controller

### Products inventories/ship-list

#### GET
##### Summary

Search pack and ship List.

##### Description

API to fetch pack and ship list.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| filter | query | filter | No | string |
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
| 200 | Pack and ship list has been fetched successfully. | [ [ShipmentDocumentDto](#shipmentdocumentdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/ship-list/print

#### POST
##### Summary

print Shipping label

##### Description

Api to print shipping label.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| printShippingLabelRequests | body | printShippingLabelRequests | Yes | [ [PrintShippingLabelRequest](#printshippinglabelrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Selected shipping labels has been printed successfully. | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Shipping label not found. %s %s |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/ship-list/shiplist-details

#### POST
##### Summary

print Shipping label

##### Description

Api to print shipping label.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| printShippingLabelRequests | body | printShippingLabelRequests | Yes | [ [PrintShippingLabelRequest](#printshippinglabelrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Selected shipping labels has been printed successfully. | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Shipping label not found. %s %s |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/ship-list/void

#### PUT
##### Summary

void ship list

##### Description

API to void shiplist after passing documentCodes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| salesDocumentDtos | body | salesDocumentDtos | Yes | [ [SalesDocumentDto](#salesdocumentdto) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Selected shiplists has been voided successfully. |
| 201 | Created |
| 400 | shiplists can not be voided. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Order not found. %s |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/ship-list/{documentCode}/{documentType}

#### GET
##### Summary

Get Shipping details by document code and document type

##### Description

API to fetch Shipping details by document code and document type.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentCode | path | documentCode | Yes | string |
| documentType | path | documentType | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Shipping information fetched successfully. | [ShipListDto](#shiplistdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Shipping order not found with code %s , type %s . |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

create shipping details by document code and document type

##### Description

API to create shipping details by document code and document type.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentCode | path | documentCode | Yes | string |
| documentType | path | documentType | Yes | string |
| shipListRequest | body | shipListRequest | Yes | [ShipListRequest](#shiplistrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ShipListResponse](#shiplistresponse) |
| 201 | Shipping information created successfully. | [ShipListResponse](#shiplistresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Shipping order not found with code %s , type %s . |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

update shipping details by document code and document type

##### Description

API to update shipping details by document code and document type.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentCode | path | documentCode | Yes | string |
| documentType | path | documentType | Yes | string |
| shipListRequest | body | shipListRequest | Yes | [ShipListRequest](#shiplistrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | shipping information updated successfully. | [ShipListResponse](#shiplistresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Shipping order not found with code %s , type %s . |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## warehouse-controller
Warehouse Controller

### Products inventories/warehouses

#### GET
##### Summary

Get warehouse list for tenant.

##### Description

API to fetch warehouse list for tenant.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Warehouse information fetched successfully. | [ [WarehouseResponse](#warehouseresponse) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Warehouse not found with id %s |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create Warehouse.

##### Description

API to create warehouse.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

### Products inventories/warehouses/assignusers/{id}

#### POST
##### Summary

Assign users to warehouse

##### Description

API to assign users to warehouse

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users for warehouse assigned successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Warehouse with given id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/warehouses/jobworkout

#### GET
##### Summary

Get Job Work Out Warehouse tenant.

##### Description

API to fetch Job Work Out Warehouse tenant.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Job Work Out Warehouse code fetched successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Job Work Out Warehouse not found for Tenant |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/warehouses/jobworkoutwarehouse

#### POST
##### Summary

create job work out warehouse.

##### Description

API to create job work out warehouse.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 204 | Warehouse has been created successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Warehouse not created. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/warehouses/primary

#### GET
##### Summary

Get Primary Warehouse tenant.

##### Description

API to fetch Primary Warehouse tenant.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Primary Warehouse code fetched successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Primary Warehouse not found for Tenant |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/warehouses/rejected

#### GET
##### Summary

Get Rejected Warehouse tenant.

##### Description

API to fetch Rejected Warehouse tenant.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Rejected Warehouse code fetched successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Rejected Warehouse not found for Tenant |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/warehouses/rejectedwarehouse

#### POST
##### Summary

create rejected warehouse.

##### Description

API to create rejected warehouse.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 204 | Warehouse has been created successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Warehouse not created. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Get Warehouses

#### GET
##### Summary

Search Warehouse.

##### Description

API to fetch Warehouse.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| filterOnRolesFlg | query | filterOnRolesFlg | No | boolean |
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
| --------------- | ------ |
| Authorization | global |

### Products inventories/warehouses/shortinfo

#### GET
##### Summary

Get warehouse short info by warehouse code.

##### Description

API to fetch warehouse short info by warehouse code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| filterOnRolesFlg | query | filterOnRolesFlg | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Warehouse information fetched successfully. | [WarehouseResponse](#warehouseresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Warehouse not found with id %s |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/warehouses/type/{type}

#### GET
##### Summary

Get Warehouse by type

##### Description

API to fetch Warehouse by type.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| type | path | type | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Warehouse by type is fetched successfully. | [WarehouseResponse](#warehouseresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Warehouse by type not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

create warehouse by type.

##### Description

API to create warehouse by type.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| type | path | type | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 204 | Warehouse has been created successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Warehouse not created. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Get Inentory waraehouses
### Get Warehouse products

#### GET
##### Summary

Get all active Warehouse details with product and available quantity.

##### Description

API to fetch  Warehouse details with product and available quantity.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| filterOnRolesFlg | query | filterOnRolesFlg | No | boolean |
| warehouseCode | query | warehouseCode | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Warehouse details with available quantity has been fetched successfully. | [WHProductResponse](#whproductresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Get Ware house details with available quantity by product codes.

##### Description

API to fetch Ware house details with available quantity by product codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Ware house details with available quantity by product codes has been fetched successfully. | [WHProductResponse](#whproductresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/warehouses/warehouse-products-code

#### POST
##### Summary

Get Warehouse details with product Codes and available quantity.

##### Description

API to fetch  Warehouse details with product Codes and available quantity.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |
| warehouseCode | query | warehouseCode | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Warehouse details with available quantity has been fetched successfully. | [WHProductResponse](#whproductresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Get Advanced Track Based on product code

#### GET
##### Summary

Get Warehouse details with product Codes and available quantity.

##### Description

API to fetch  Warehouse details with product Codes and available quantity.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| includeQC | query | includeQC | No | boolean |
| isCombined | query | isCombined | No | boolean |
| productCode | query | productCode | Yes | string |
| warehouseCode | query | warehouseCode | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Warehouse details with available quantity has been fetched successfully. | [WHProductResponse](#whproductresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products inventories/warehouses/{code}

#### GET
##### Summary

Get warehouse details by warehouse code.

##### Description

API to fetch warehouse details by warehouse code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

### Products inventories/warehouses/{id}

#### PUT
##### Summary

Update Warehouse.

##### Description

API to update existing Warehouse

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Warehouse by id.

##### Description

API to delete warehouse details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Warehouse has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Warehouse not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update warehouse status

##### Description

API to update warehouse status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| active | query | active | No | boolean |
| id | path | id | Yes | long |
| primary | query | primary | No | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Active/Primary for warehouse updated successfully. |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Warehouse with given id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## product-controller-malaysia
Product Malaysia APIs

### Products my

#### GET
##### Summary

Search products.

##### Description

API to search existing products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products have been fetched successfully. | [ProductResponseMalaysia](#productresponsemalaysia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new product.

##### Description

API to create new product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequestMalaysia | body | productRequestMalaysia | Yes | [ProductRequestMalaysia](#productrequestmalaysia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ProductResponseMalaysia](#productresponsemalaysia) |
| 201 | Product has been created successfully. | [ProductResponseMalaysia](#productresponsemalaysia) |
| 400 | Product creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete product.

##### Description

API to delete existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productIds | body | productIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Product has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product has been created successfully. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products my/activate

#### PUT
##### Summary

Change status of multiple products.

##### Description

API to change status of multiple products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |
| status | query | status | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Product status has been changed successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products my/all-tariff-service

#### GET
##### Summary

Fetch all TARIFF and SERVICE codes information

##### Description

API to get all TARIFF and SERVICE codes information

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | All TARIFF and SERVICE codes information have been fetched successfully. | [TariffAndServiceCode](#tariffandservicecode) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products my/barcode-generate

#### GET
##### Summary

Get product details by barcode.

##### Description

API to get product details for given barcode valie.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| search | query | search | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products my/barcodes

#### POST
##### Summary

Get product details for barcodes.

##### Description

API to get product details for given barcodes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcodes | body | barcodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products my/brief

#### GET
##### Summary

Get product brief information

##### Description

API to get brief information of all the products

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information have been fetched successfully. | [ [ProductShortInfo](#productshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products my/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products my/doc-seq-codes

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentSequenceCodes | body | documentSequenceCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products my/import

#### POST
##### Summary

Import products

##### Description

API to import products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequests | body | productRequests | Yes | [ [ProductRequestMalaysia](#productrequestmalaysia) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductResponseMalaysia](#productresponsemalaysia) ] |
| 201 | Products have been imported successfully. | [ [ProductResponseMalaysia](#productresponsemalaysia) ] |
| 400 | Product import failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products my/inventory

#### PUT
##### Summary

Update Inventory

##### Description

API to update inventory Opening Balance and Opening valuation in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inventoryRequests | body | inventoryRequests | Yes | [ [InventoryRequest](#inventoryrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory has been updated successfully. | [ [InventoryResponse](#inventoryresponse) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Inventory update fails. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products my/names

#### POST
##### Summary

Get product details for names.

##### Description

API to get product details for given names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products my/service

#### GET
##### Summary

Fetch SERVICE code information

##### Description

API to get SERVICE code information

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | SERVICE code information have been fetched successfully. | [ServiceTypeMalaysiaDto](#servicetypemalaysiadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products my/summary

#### GET
##### Summary

Product summary.

##### Description

API for products summary.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products summary has been fetched successfully. | [ProductSummaryResponse](#productsummaryresponse) |
| 400 | Failed to fetch product summary. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products my/tariff

#### GET
##### Summary

Fetch TARIFF code information

##### Description

API to get TARIFF code information

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | TARIFF code information have been fetched successfully. | [TarifCodeMalaysiaDto](#tarifcodemalaysiadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products my/{id}

#### PUT
##### Summary

Update existing product.

##### Description

API to update existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| productRequestMalaysia | body | productRequestMalaysia | Yes | [ProductRequestMalaysia](#productrequestmalaysia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product has been updated successfully. | [ProductResponseMalaysia](#productresponsemalaysia) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update product attributes.

##### Description

API to update attributes of existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| product | body | product | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product attributes has been updated successfully. | [ProductResponseMalaysia](#productresponsemalaysia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## product-controller-nl
Product Netherlands APIs

### Products nl

#### GET
##### Summary

Search products.

##### Description

API to search existing products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcode | query | barcode | No | string |
| contactCode | query | contactCode | No | string |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products have been fetched successfully. | [ProductResponseIndia](#productresponseindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new product.

##### Description

API to create new product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequest | body | productRequest | Yes | [ProductRequest](#productrequest) |

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
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete product.

##### Description

API to delete existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productIds | body | productIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Product has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product has been created successfully. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nl/activate

#### PUT
##### Summary

Change status of multiple products.

##### Description

API to change status of multiple products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |
| status | query | status | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Product status has been changed successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nl/barcode-generate

#### GET
##### Summary

Get product details by barcode.

##### Description

API to get product details for given barcode valie.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| search | query | search | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nl/barcodes

#### POST
##### Summary

Get product details for barcodes.

##### Description

API to get product details for given barcodes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcodes | body | barcodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nl/brief

#### GET
##### Summary

Get product brief information

##### Description

API to get brief information of all the products

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information have been fetched successfully. | [ [ProductShortInfo](#productshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nl/briefbyaccountcode/{accountCode}

#### GET
##### Summary

Get product brief information by account code.

##### Description

API to get the products by account code used as any of the following - Sales, Sales Return, Purchase, Purchase Return, COGS, Inventory, Stock Adjument account, GL account for India or GL account for MY.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | path | accountCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information by account code have been fetched successfully. | [ [ProductResponse](#productresponse) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nl/code/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nl/custom-fields

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

### Products nl/demo/{tenantId}

#### POST
##### Summary

Create demo Products.

##### Description

API to create demo products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| country | query | country | No | string |
| tenantId | path | tenantId | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nl/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nl/doc-seq-codes

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentSequenceCodes | body | documentSequenceCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nl/import

#### POST
##### Summary

Import products

##### Description

API to import products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequests | body | productRequests | Yes | [ [ProductRequest](#productrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductResponse](#productresponse) ] |
| 201 | Products have been imported successfully. | [ [ProductResponse](#productresponse) ] |
| 400 | Product import failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nl/info

#### POST
##### Summary

Fetch product details by codes

##### Description

Fetch product details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductInformation](#productinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nl/inventory

#### PUT
##### Summary

Update Inventory

##### Description

API to update inventory Opening Balance and Opening valuation in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inventoryRequests | body | inventoryRequests | Yes | [ [InventoryRequest](#inventoryrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory has been updated successfully. | [ [InventoryResponse](#inventoryresponse) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Inventory update fails. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nl/names

#### POST
##### Summary

Get product details for names.

##### Description

API to get product details for given names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nl/opening-inventory-acc-codes

#### GET
##### Summary

Get Inventory Account Codes of Products with Opening Valuation

##### Description

API to Get Inventory Account Codes of Products with Opening Valuation

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory Account Codes of Products with Opening Valuation fetched successfully | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nl/summary

#### GET
##### Summary

Product summary.

##### Description

API for products summary.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products summary has been fetched successfully. | [ProductSummaryResponse](#productsummaryresponse) |
| 400 | Failed to fetch product summary. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nl/{id}

#### PUT
##### Summary

Update existing product.

##### Description

API to update existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| productRequest | body | productRequest | Yes | [ProductRequest](#productrequest) |

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
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update product attributes.

##### Description

API to update attributes of existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| product | body | product | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product attributes has been updated successfully. | [ProductResponse](#productresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## product-controller-nz
v1/products/nz

### Products nz

#### GET
##### Summary

Search products.

##### Description

API to search existing products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcode | query | barcode | No | string |
| contactCode | query | contactCode | No | string |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products have been fetched successfully. | [ProductResponseIndia](#productresponseindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new product.

##### Description

API to create new product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequest | body | productRequest | Yes | [ProductRequest](#productrequest) |

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
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete product.

##### Description

API to delete existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productIds | body | productIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Product has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product has been created successfully. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nz/activate

#### PUT
##### Summary

Change status of multiple products.

##### Description

API to change status of multiple products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |
| status | query | status | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Product status has been changed successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nz/barcode-generate

#### GET
##### Summary

Get product details by barcode.

##### Description

API to get product details for given barcode valie.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| search | query | search | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nz/barcodes

#### POST
##### Summary

Get product details for barcodes.

##### Description

API to get product details for given barcodes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcodes | body | barcodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nz/brief

#### GET
##### Summary

Get product brief information

##### Description

API to get brief information of all the products

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information have been fetched successfully. | [ [ProductShortInfo](#productshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nz/briefbyaccountcode/{accountCode}

#### GET
##### Summary

Get product brief information by account code.

##### Description

API to get the products by account code used as any of the following - Sales, Sales Return, Purchase, Purchase Return, COGS, Inventory, Stock Adjument account, GL account for India or GL account for MY.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | path | accountCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information by account code have been fetched successfully. | [ [ProductResponse](#productresponse) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nz/code/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nz/custom-fields

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

### Products nz/demo/{tenantId}

#### POST
##### Summary

Create demo Products.

##### Description

API to create demo products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| country | query | country | No | string |
| tenantId | path | tenantId | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nz/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nz/doc-seq-codes

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentSequenceCodes | body | documentSequenceCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nz/import

#### POST
##### Summary

Import products

##### Description

API to import products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequests | body | productRequests | Yes | [ [ProductRequest](#productrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductResponse](#productresponse) ] |
| 201 | Products have been imported successfully. | [ [ProductResponse](#productresponse) ] |
| 400 | Product import failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nz/info

#### POST
##### Summary

Fetch product details by codes

##### Description

Fetch product details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductInformation](#productinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nz/inventory

#### PUT
##### Summary

Update Inventory

##### Description

API to update inventory Opening Balance and Opening valuation in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inventoryRequests | body | inventoryRequests | Yes | [ [InventoryRequest](#inventoryrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory has been updated successfully. | [ [InventoryResponse](#inventoryresponse) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Inventory update fails. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nz/names

#### POST
##### Summary

Get product details for names.

##### Description

API to get product details for given names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nz/opening-inventory-acc-codes

#### GET
##### Summary

Get Inventory Account Codes of Products with Opening Valuation

##### Description

API to Get Inventory Account Codes of Products with Opening Valuation

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory Account Codes of Products with Opening Valuation fetched successfully | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nz/summary

#### GET
##### Summary

Product summary.

##### Description

API for products summary.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products summary has been fetched successfully. | [ProductSummaryResponse](#productsummaryresponse) |
| 400 | Failed to fetch product summary. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products nz/{id}

#### PUT
##### Summary

Update existing product.

##### Description

API to update existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| productRequest | body | productRequest | Yes | [ProductRequest](#productrequest) |

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
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update product attributes.

##### Description

API to update attributes of existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| product | body | product | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product attributes has been updated successfully. | [ProductResponse](#productresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## product-controller-philippines
Product Philippines APIs

### Products ph

#### GET
##### Summary

Search products.

##### Description

API to search existing products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcode | query | barcode | No | string |
| contactCode | query | contactCode | No | string |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products have been fetched successfully. | [ProductResponsePhilippines](#productresponsephilippines) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new product.

##### Description

API to create new product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequest | body | productRequest | Yes | [ProductRequestPhilippines](#productrequestphilippines) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ProductResponsePhilippines](#productresponsephilippines) |
| 201 | Product has been created successfully. | [ProductResponsePhilippines](#productresponsephilippines) |
| 400 | Product creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete product.

##### Description

API to delete existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productIds | body | productIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Product has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product has been created successfully. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ph/activate

#### PUT
##### Summary

Change status of multiple products.

##### Description

API to change status of multiple products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |
| status | query | status | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Product status has been changed successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ph/barcode-generate

#### GET
##### Summary

Get product details by barcode.

##### Description

API to get product details for given barcode valie.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| search | query | search | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ph/barcodes

#### POST
##### Summary

Get product details for barcodes.

##### Description

API to get product details for given barcodes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcodes | body | barcodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ph/brief

#### GET
##### Summary

Get product brief information

##### Description

API to get brief information of all the products

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information have been fetched successfully. | [ [ProductShortInfo](#productshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ph/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ph/doc-seq-codes

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentSequenceCodes | body | documentSequenceCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ph/import

#### POST
##### Summary

Import products

##### Description

API to import products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequests | body | productRequests | Yes | [ [ProductRequestPhilippines](#productrequestphilippines) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductResponse](#productresponse) ] |
| 201 | Products have been imported successfully. | [ [ProductResponse](#productresponse) ] |
| 400 | Product import failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ph/inventory

#### PUT
##### Summary

Update Inventory

##### Description

API to update inventory Opening Balance and Opening valuation in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inventoryRequests | body | inventoryRequests | Yes | [ [InventoryRequest](#inventoryrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory has been updated successfully. | [ [InventoryResponse](#inventoryresponse) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Inventory update fails. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ph/names

#### POST
##### Summary

Get product details for names.

##### Description

API to get product details for given names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ph/summary

#### GET
##### Summary

Product summary.

##### Description

API for products summary.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products summary has been fetched successfully. | [ProductSummaryResponse](#productsummaryresponse) |
| 400 | Failed to fetch product summary. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products ph/{id}

#### PUT
##### Summary

Update existing product.

##### Description

API to update existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| productRequest | body | productRequest | Yes | [ProductRequestPhilippines](#productrequestphilippines) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product has been updated successfully. | [ProductResponsePhilippines](#productresponsephilippines) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update product attributes.

##### Description

API to update attributes of existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| product | body | product | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product attributes has been updated successfully. | [ProductResponse](#productresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## price-list-controller
Price List Controller

### Products price-list

#### GET
##### Summary

GET price lists

##### Description

API to get all existing price lists

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Price lists have been fetched successfully. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new Price List.

##### Description

API to create new Price List.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| priceListDto | body | priceListDto | Yes | [PriceListDto](#pricelistdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PriceListDto](#pricelistdto) |
| 201 | Price List has been created successfully. | [PriceListDto](#pricelistdto) |
| 400 | Price List creation failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products price-list/active/{id}

#### PUT
##### Summary

Update existing UOM active status.

##### Description

API to update existing UOM active status.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| active | body | active | Yes | boolean |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PriceListDto](#pricelistdto) |
| 201 | UOM active status has been updated successfully. | [PriceListDto](#pricelistdto) |
| 400 | UOM active status update has been failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products price-list/assign-price-list/{id}

#### PUT
##### Summary

Assign price list to contacts.

##### Description

API to assign price list to contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| request | body | request | Yes | [PriceListContactsUpdateRequest](#pricelistcontactsupdaterequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PriceListDto](#pricelistdto) |
| 201 | Contacts assigned to price list successfully. | [PriceListDto](#pricelistdto) |
| 400 | Assign price list to contacts has been failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products price-list/change/{id}

#### PUT
##### Summary

Update existing UOM prices by percentage.

##### Description

API to update existing UOM prices by percentage.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| request | body | request | Yes | [PriceListPercentageUpdateRequest](#pricelistpercentageupdaterequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PriceListDto](#pricelistdto) |
| 201 | UOM prices has been updated successfully by percentage. | [PriceListDto](#pricelistdto) |
| 400 | UOM prices by percentage update has been failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products price-list/contact-price-lists

#### POST
##### Summary

Update contact in price lists.

##### Description

API to update contact in price lists.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [ContactUpdatePriceListRequest](#contactupdatepricelistrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Contact updated in price lists successfully. |
| 400 | Update contact in price lists has been failed. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products price-list/contact-price-lists/bulk

#### POST
##### Summary

Bulk Update contacts in price lists.

##### Description

API to bulk update contact in price lists.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [ [ContactUpdatePriceListRequest](#contactupdatepricelistrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [BulkApiResponse](#bulkapiresponse) ] |
| 201 | Bulk Contacts updated in price lists successfully. | [ [BulkApiResponse](#bulkapiresponse) ] |
| 400 | Bulk Update contacts in price lists has been failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### GET Document Price list

#### POST
##### Summary

Get prices for products.

##### Description

API to get prices for products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [PriceListPricingRequest](#pricelistpricingrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Prices for products fetched successfully. | [ object ] |
| 400 | Prices for products failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products price-list/import

#### POST
##### Summary

Import products

##### Description

API to import products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [ [PriceListDto](#pricelistdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [BulkApiResponse](#bulkapiresponse) ] |
| 201 | Products have been imported successfully. | [ [BulkApiResponse](#bulkapiresponse) ] |
| 400 | Product import failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products price-list/prices

#### POST
##### Summary

Get prices by uom.

##### Description

API to get prices by uom.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | object |
| 201 | Prices by uom fetched successfully. | object |
| 400 | Prices by uom failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products price-list/purchase-sales-price-list/{contactCode}

#### GET
##### Summary

Get purchase and sales price list by contact code.

##### Description

API to get purchase and sales price list by contact code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | path | contactCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase and sales price list by contact code has been fetched successfully. | [PurchaseSalesPriceListDto](#purchasesalespricelistdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Get All Products price-list

#### GET
##### Summary

Search Price lists.

##### Description

API to search existing price lists.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Price lists have been fetched successfully. | [Page«PriceListDto»](#page«pricelistdto») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products price-list/{id}

#### GET
##### Summary

GET price list by id

##### Description

API to get price list by id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Price list has been fetched successfully. | [PriceListDto](#pricelistdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update existing price list.

##### Description

API to update existing price list.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| priceListDto | body | priceListDto | Yes | [PriceListDto](#pricelistdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Price list has been updated successfully. | [PriceListDto](#pricelistdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Price list with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete price list.

##### Description

API to delete existing price list.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Price list has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Price list has not been found to delete |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## product-uom-contact-mapping-controller
Product Uom Contact Mapping Controller

### Products product-uom-contact/mapping

#### GET
##### Summary

Retrieve product uom and contact mapping

##### Description

Retrieve product uom and contact mapping

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| productCode | query | productCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetch product uom and contact mapping | [UOMDto](#uomdto) |
| 400 | Could not get mapping |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products product-uom-contact/mapping/{documentType}/{documentCode}

#### GET
##### Summary

Save product uom and contact mapping

##### Description

Save product uom and contact mapping

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentCode | path | documentCode | Yes | string |
| documentType | path | documentType | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Fetch product uom and contact mapping |
| 400 | Could not get mapping |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## qc-document-details-controller
QC Transaction APIs

### Add Product QC transaction

#### POST
##### Summary

Create new qc transaction.

##### Description

API to create new qc transaction.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| qcTransactionDetailsDto | body | qcTransactionDetailsDto | Yes | [QCDocumentDetailsRequestDto](#qcdocumentdetailsrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QCDocumentDetailsResponseDto](#qcdocumentdetailsresponsedto) |
| 201 | QC transaction has been created successfully. | [QCDocumentDetailsResponseDto](#qcdocumentdetailsresponsedto) |
| 400 | QC transaction creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products qctransaction/qcdetailsbyid/{documentId}

#### GET
##### Summary

Get QC document details by id

##### Description

API to get QC document details by id for a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentId | path | documentId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched QC document details by id successfully. | [StockTransferDto](#stocktransferdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products qctransaction/qcdocuments

#### POST
##### Summary

Create new qc document.

##### Description

API to create new qc document.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| qcDocumentRequestDtos | body | qcDocumentRequestDtos | Yes | [ [QCDocumentRequestDto](#qcdocumentrequestdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | QC document has been created successfully. | [ object ] |
| 400 | QC document creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products qctransaction/qcdocumentsbyproductcodes

#### POST
##### Summary

Get qc documents by product codes.

##### Description

API to get qc documents by product codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | QC document has been fetched successfully. | [ object ] |
| 400 | Unable to fetch QC documents. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Get QC trandaction Paged

#### GET
##### Summary

Get qc transactions.

##### Description

API to get qc transactions.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| 200 | OK | [QCDocumentResponseDto](#qcdocumentresponsedto) |
| 201 | QC transaction has been fetched successfully. | [QCDocumentResponseDto](#qcdocumentresponsedto) |
| 400 | Unable to fetch QC transactions. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## product-controller-saudi-arabia
Product Saudi Arabia APIs

### Products sa

#### GET
##### Summary

Search products.

##### Description

API to search existing products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcode | query | barcode | No | string |
| contactCode | query | contactCode | No | string |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products have been fetched successfully. | [ProductResponseSaudiArabia](#productresponsesaudiarabia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new product.

##### Description

API to create new product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequest | body | productRequest | Yes | [ProductRequestSaudiArabia](#productrequestsaudiarabia) |

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
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete product.

##### Description

API to delete existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productIds | body | productIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Product has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product has been created successfully. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products sa/activate

#### PUT
##### Summary

Change status of multiple products.

##### Description

API to change status of multiple products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |
| status | query | status | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Product status has been changed successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products sa/barcode-generate

#### GET
##### Summary

Get product details by barcode.

##### Description

API to get product details for given barcode valie.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| search | query | search | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products sa/barcodes

#### POST
##### Summary

Get product details for barcodes.

##### Description

API to get product details for given barcodes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcodes | body | barcodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products sa/brief

#### GET
##### Summary

Get product brief information

##### Description

API to get brief information of all the products

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information have been fetched successfully. | [ [ProductShortInfo](#productshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products sa/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products sa/doc-seq-codes

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentSequenceCodes | body | documentSequenceCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products sa/import

#### POST
##### Summary

Import products

##### Description

API to import products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequests | body | productRequests | Yes | [ [ProductRequestSaudiArabia](#productrequestsaudiarabia) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductResponse](#productresponse) ] |
| 201 | Products have been imported successfully. | [ [ProductResponse](#productresponse) ] |
| 400 | Product import failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products sa/inventory

#### PUT
##### Summary

Update Inventory

##### Description

API to update inventory Opening Balance and Opening valuation in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inventoryRequests | body | inventoryRequests | Yes | [ [InventoryRequest](#inventoryrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory has been updated successfully. | [ [InventoryResponse](#inventoryresponse) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Inventory update fails. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products sa/names

#### POST
##### Summary

Get product details for names.

##### Description

API to get product details for given names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products sa/summary

#### GET
##### Summary

Product summary.

##### Description

API for products summary.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products summary has been fetched successfully. | [ProductSummaryResponse](#productsummaryresponse) |
| 400 | Failed to fetch product summary. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products sa/{id}

#### PUT
##### Summary

Update existing product.

##### Description

API to update existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| productRequest | body | productRequest | Yes | [ProductRequestSaudiArabia](#productrequestsaudiarabia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product has been updated successfully. | [ProductResponseSaudiArabia](#productresponsesaudiarabia) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update product attributes.

##### Description

API to update attributes of existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| product | body | product | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product attributes has been updated successfully. | [ProductResponse](#productresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## stock-issue-controller
Stock Issue APIs

### Products stockissue

#### GET
##### Summary

Search stock issue

##### Description

API to search stock issue.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customField | query | customField | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock issue have been fetched successfully. | [StockIssueResponse](#stockissueresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create stock request

##### Description

API to create stock request.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| stockIssueRequest | body | stockIssueRequest | Yes | [StockIssueRequest](#stockissuerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [StockIssueResponse](#stockissueresponse) |
| 201 | Stock Request has been created | [StockIssueResponse](#stockissueresponse) |
| 400 | Unable to create stock issue |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products stockissue/{code}

#### GET
##### Summary

Get stock issue by id.

##### Description

API to fetch stock issue details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock issue information has been fetched successfully. | [AbstractStockIssueResponse](#abstractstockissueresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Stock issue not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## stock-request-controller
Stock Request APIs

### Products stockrequest

#### GET
##### Summary

Search stock requests

##### Description

API to search stock requests.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customField | query | customField | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock requests have been fetched successfully. | [StockRequestResponse](#stockrequestresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create stock request

##### Description

API to create stock request.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| stockRequestRequest | body | stockRequestRequest | Yes | [StockRequestRequest](#stockrequestrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [StockRequestResponse](#stockrequestresponse) |
| 201 | Stock Request has been created | [StockRequestResponse](#stockrequestresponse) |
| 400 | Unable to create stock request |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products stockrequest/approvestatus/{id}

#### PUT
##### Summary

Update approve status of stock request

##### Description

API to update approve status of  stock request.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| approveRequest | body | approveRequest | Yes | [StockRequestUpdateApproveRequest](#stockrequestupdateapproverequest) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock Request has been updated | [StockRequestResponse](#stockrequestresponse) |
| 201 | Created |  |
| 400 | Unable to update stock request |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products stockrequest/linked-docs/product-codes

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details fetched successfully | string |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Error in fetching product details |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products stockrequest/{code}

#### GET
##### Summary

Get stock request by id.

##### Description

API to fetch stock request details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock request information has been fetched successfully. | [AbstractStockRequestResponse](#abstractstockrequestresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Stock request not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products stockrequest/{id}

#### PUT
##### Summary

Update stock request

##### Description

API to update stock request

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| stockRequestRequest | body | stockRequestRequest | Yes | [StockRequestRequest](#stockrequestrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock request updated succesfully | [AbstractStockRequestResponse](#abstractstockrequestresponse) |
| 201 | Created |  |
| 400 | Stock request draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Stock request with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Stock Request by ID

##### Description

API to delete stock request

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Stock request has been deleted |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Stock request to delete not found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## product-controller-uk
v1/products/uk

### Products uk

#### GET
##### Summary

Search products.

##### Description

API to search existing products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcode | query | barcode | No | string |
| contactCode | query | contactCode | No | string |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products have been fetched successfully. | [ProductResponseIndia](#productresponseindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new product.

##### Description

API to create new product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequest | body | productRequest | Yes | [ProductRequest](#productrequest) |

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
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete product.

##### Description

API to delete existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productIds | body | productIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Product has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product has been created successfully. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uk/activate

#### PUT
##### Summary

Change status of multiple products.

##### Description

API to change status of multiple products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |
| status | query | status | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Product status has been changed successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uk/barcode-generate

#### GET
##### Summary

Get product details by barcode.

##### Description

API to get product details for given barcode valie.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| search | query | search | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uk/barcodes

#### POST
##### Summary

Get product details for barcodes.

##### Description

API to get product details for given barcodes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| barcodes | body | barcodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uk/brief

#### GET
##### Summary

Get product brief information

##### Description

API to get brief information of all the products

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information have been fetched successfully. | [ [ProductShortInfo](#productshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uk/briefbyaccountcode/{accountCode}

#### GET
##### Summary

Get product brief information by account code.

##### Description

API to get the products by account code used as any of the following - Sales, Sales Return, Purchase, Purchase Return, COGS, Inventory, Stock Adjument account, GL account for India or GL account for MY.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | path | accountCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product brief information by account code have been fetched successfully. | [ [ProductResponse](#productresponse) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uk/code/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uk/custom-fields

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

### Products uk/demo/{tenantId}

#### POST
##### Summary

Create demo Products.

##### Description

API to create demo products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| country | query | country | No | string |
| tenantId | path | tenantId | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uk/details

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uk/doc-seq-codes

#### POST
##### Summary

Get product details.

##### Description

API to get product details for given products codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentSequenceCodes | body | documentSequenceCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ProductDetails](#productdetails) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uk/import

#### POST
##### Summary

Import products

##### Description

API to import products.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productRequests | body | productRequests | Yes | [ [ProductRequest](#productrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductResponse](#productresponse) ] |
| 201 | Products have been imported successfully. | [ [ProductResponse](#productresponse) ] |
| 400 | Product import failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uk/info

#### POST
##### Summary

Fetch product details by codes

##### Description

Fetch product details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductInformation](#productinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uk/inventory

#### PUT
##### Summary

Update Inventory

##### Description

API to update inventory Opening Balance and Opening valuation in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inventoryRequests | body | inventoryRequests | Yes | [ [InventoryRequest](#inventoryrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory has been updated successfully. | [ [InventoryResponse](#inventoryresponse) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Inventory update fails. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uk/names

#### POST
##### Summary

Get product details for names.

##### Description

API to get product details for given names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product details have been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uk/opening-inventory-acc-codes

#### GET
##### Summary

Get Inventory Account Codes of Products with Opening Valuation

##### Description

API to Get Inventory Account Codes of Products with Opening Valuation

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inventory Account Codes of Products with Opening Valuation fetched successfully | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uk/summary

#### GET
##### Summary

Product summary.

##### Description

API for products summary.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Products summary has been fetched successfully. | [ProductSummaryResponse](#productsummaryresponse) |
| 400 | Failed to fetch product summary. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uk/{id}

#### PUT
##### Summary

Update existing product.

##### Description

API to update existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| productRequest | body | productRequest | Yes | [ProductRequest](#productrequest) |

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
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update product attributes.

##### Description

API to update attributes of existing product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| product | body | product | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product attributes has been updated successfully. | [ProductResponse](#productresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Product with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## uom-controller
UOM Controller

### Products uom

#### GET
##### Summary

GET UOMs

##### Description

API to get all existing UOMs

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | UOMs have been fetched successfully. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new UOM.

##### Description

API to create new UOM.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| uomDto | body | uomDto | Yes | [UOMDto](#uomdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [UOMDto](#uomdto) |
| 201 | UOM has been created successfully. | [UOMDto](#uomdto) |
| 400 | UOM creation failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uom/active

#### GET
##### Summary

GET UOMs

##### Description

API to get all existing UOMs

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | UOMs have been fetched successfully. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uom/productCodes

#### POST
##### Summary

UOM Details

##### Description

API to get UOM details

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | UOM details fetched successfully | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Get Product UOM paged

#### GET
##### Summary

Search UOMs.

##### Description

API to search existing UOMs.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | UOMs have been fetched successfully. | [Page«UOMDto»](#page«uomdto») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uom/uom-codes

#### POST
##### Summary

UOM Details

##### Description

API to get UOM details

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | UOM details fetched successfully | [ [UOMDto](#uomdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uom/{id}

#### PUT
##### Summary

Update existing UOM.

##### Description

API to update existing UOM.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| uomDto | body | uomDto | Yes | [UOMDto](#uomdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | UOM has been updated successfully. | [UOMDto](#uomdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | UOM with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete UOM.

##### Description

API to delete existing UOM.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | UOM has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | UOM has not been found to delete |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## uom-schema-controller
UOM Schema Controller

### Products uom-schema

#### GET
##### Summary

GET UOM Schemas

##### Description

API to get all existing UOM Schemas

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | UOM Schemas have been fetched successfully. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new UOM Schema.

##### Description

API to create new UOM Schema.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| uomSchemaRequestDto | body | uomSchemaRequestDto | Yes | [UOMSchemaRequestDto](#uomschemarequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [UOMSchemaDto](#uomschemadto) |
| 201 | UOM Schema has been created successfully. | [UOMSchemaDto](#uomschemadto) |
| 400 | UOM Schema creation failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uom-schema/active

#### GET
##### Summary

GET UOM Schemas

##### Description

API to get all existing UOM Schemas

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | UOMs have been fetched successfully. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Get Active UOM Schema

#### GET
##### Summary

GET UOM Schemas by base UOM

##### Description

API to get all existing UOM Schemas by base UOM

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| search | query | search | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | UOM Schemas by base UOM have been fetched successfully. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Get UOM Schema

#### GET
##### Summary

Search UOM Schemas.

##### Description

API to search existing UOM Schemas.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | UOMs have been fetched successfully. | [Page«UOMSchemaDto»](#page«uomschemadto») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Products uom-schema/{id}

#### PUT
##### Summary

Update existing UOM Schema.

##### Description

API to update existing UOM Schema.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| uomSchemaRequestDto | body | uomSchemaRequestDto | Yes | [UOMSchemaRequestDto](#uomschemarequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | UOM Schema has been updated successfully. | [UOMSchemaDto](#uomschemadto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | UOM Schema with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete UOM Schema.

##### Description

API to delete existing UOM Schema.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | UOM Schema has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | UOM Schema has not been found to delete |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |


## Models

---

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

### AdvancedTrackingStockTransferDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| destSerialBatchNumber | string | Destination Batch or serial number<br/>*Example:* `"Batch-002"` | No |
| expiryDate | dateTime | Expiry date. Date Format is dd-mm-yyyy. Applicable when AdvancedTrackingType is Batch<br/>*Example:* `"01-01-2020"` | No |
| manufacturingDate | dateTime | Manufacturing date. Date Format is dd-mm-yyyy. Applicable when AdvancedTrackingType is Batch<br/>*Example:* `"01-01-2020"` | No |
| qtyToTransfer | number | Batch qty to Transfer<br/>*Example:* `1` | No |
| sourceSerialBatchNumber | string | Source Batch or serial number<br/>*Example:* `"Batch-001"` | No |

### AssignBatchSerialRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingMetaData | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] |  | No |
| productVariantCode | string | Product ID<br/>*Example:* `"P-000001"` | No |

### AttributeDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | Attribute ID<br/>*Example:* `"Id"` | No |
| name | string | Attribute Name<br/>*Example:* `"Colour"` | No |
| values | [ string ] | Attribute values | No |

### AttributeRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string | attribute of product<br/>*Example:* `"colour"` | No |

### AttributeResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean |  | No |
| id | long |  | No |
| isSystemGenerated | boolean |  | No |
| name | string |  | No |
| tenantId | long |  | No |

### BOMAssemblyDetailsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allowQuantityToBuild | integer | No Of product quantity to allow to build<br/>*Example:* `10.5` | No |
| bomProductsConfiguration | [ [BOMAssemblyItemDetailsDto](#bomassemblyitemdetailsdto) ] | Bom Products information | No |
| costPerUnit | number | Cost Per Unit<br/>*Example:* `10.5` | No |
| description | string | Product Description<br/>*Example:* `"Test Product"` | Yes |
| id | long | id of item in bom<br/>*Example:* `1234` | No |
| name | string | Product Name<br/>*Example:* `"Apple"` | Yes |
| pid | string | Product Id<br/>*Example:* `"P-0000021"` | Yes |
| productCode | string | Product Code<br/>*Example:* `"P-0000021"` | Yes |
| totalAvailableQuantity | double | Available Quantity of product in bom<br/>*Example:* `10.5` | No |

### BOMAssemblyItemDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTracking | string | NONE, BATCH, SERIAL<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"`<br/>*Example:* `"BATCH"` | No |
| availableQuantity | number | Available Quantity<br/>*Example:* `100` | No |
| costPerUnit | number | Cost Per Unit<br/>*Example:* `10.5` | No |
| itemId | long | id of item in bom<br/>*Example:* `1234` | No |
| itemName | string | Product Name<br/>*Example:* `"Apple"` | Yes |
| pid | string | Product Id<br/>*Example:* `"P-0000021"` | Yes |
| productCode | string | Product Code<br/>*Example:* `"P-0000021"` | Yes |
| purchasePrice | number | Product Purchase Price<br/>*Example:* `10.5` | No |
| quantity | number | Quantity of product in bom<br/>*Example:* `10.5` | No |
| type | string | *Enum:* `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"` | No |
| uomId | long | UOM id | No |
| uomName | string | UOM name | No |

### BarcodeDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| barcodeField | string |  | No |
| hideBarcodeLabel | boolean |  | No |

### BarcodeInfoDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| barcode | string |  | No |
| isBatchSerialProduct | boolean |  | No |
| productCode | string |  | No |

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

### BomAssemblyDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| actualQuantityUsed | number | Actual Quantity Used<br/>*Example:* `1` | Yes |
| advancedTracking | string | Tracking type of product<br/>*Example:* `"NONE"` | No |
| costPerUnit | number | Cost Per Unit<br/>*Example:* `100` | Yes |
| documentCode | string | Document Code<br/>*Example:* `"BOM-0000001"` | Yes |
| documentSequenceCode | string | Document Code<br/>*Example:* `"BOM-0000001"` | Yes |
| id | long | Id<br/>*Example:* `1234` | Yes |
| isQuickCommit | boolean | Auto Commit Flag<br/>*Example:* `false` | No |
| pid | string | Product Id<br/>*Example:* `"P00001"` | Yes |
| produceProductType | string | Produce Product type<br/>*Enum:* `"NONE"`, `"SCRAP"`, `"COPRODUCT"`<br/>*Example:* `"SCRAP"` | Yes |
| productCode | string | Product code<br/>*Example:* `"P00001"` | Yes |
| productId | long | Product Id<br/>*Example:* `1` | Yes |
| productName | string | Product Name<br/>*Example:* `"Hard Disk"` | Yes |
| quantityRequired | number | Quantity Required<br/>*Example:* `1` | Yes |
| rawMaterial | boolean | Raw Material/Additional Cost<br/>*Example:* `true` | No |
| totalCost | number | Total Cost<br/>*Example:* `100` | No |
| totalQuantity | number | Quantity Total<br/>*Example:* `1` | Yes |
| transactionRefCode | string | Transaction Ref code<br/>*Example:* `"BI-0000001"` | Yes |
| warehouseInventoryData | [ [WarehouseInventoryData](#warehouseinventorydata) ] | Bom Assembly Details | Yes |

### BomAssemblyRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTracking | string | Tracking type of product<br/>*Example:* `"NONE"` | No |
| assemblyDate | string | Assembly Date<br/>*Example:* `"01-07-2021"` | Yes |
| bomAssemblyDetails | [ [BomAssemblyDetailsDto](#bomassemblydetailsdto) ] | Bom Assembly Details | Yes |
| bomMetaCode | string | BOM Meta Code<br/>*Example:* `"0000001"` | No |
| buildQuantityMax | number | Max Product Quantity that can be build<br/>*Example:* `10` | Yes |
| buildQuantityReq | number | Required Quantity to build<br/>*Example:* `5` | Yes |
| costPerUnit | number | Cost per Unit<br/>*Example:* `120` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| documentSequenceCode | string | 0000001 | No |
| memo | string | Memo<br/>*Example:* `"Computer Memo"` | Yes |
| pid | string | pid<br/>*Example:* `"P-0000001"` | Yes |
| productCode | string | Product Code<br/>*Example:* `"P-0000001"` | Yes |
| productId | long | Product Id<br/>*Example:* `1234` | Yes |
| productName | string | Product Name<br/>*Example:* `"Computer"` | Yes |
| sequenceFormat | string | 00000001 | No |
| totalQuantity | number | Total Quantity<br/>*Example:* `100` | Yes |
| warehouseInventoryData | [ [WarehouseInventoryData](#warehouseinventorydata) ] | Bom Assembly Details | Yes |

### BomAssemblyResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTracking | string | Tracking type of product<br/>*Example:* `"NONE"` | No |
| assemblyDate | string | Assembly Date<br/>*Example:* `"01-07-2021"` | Yes |
| bomAssemblyDetails | [ [BomAssemblyDetailsDto](#bomassemblydetailsdto) ] | Bom Assembly Details | Yes |
| bomMetaCode | string | BOM Meta Code<br/>*Example:* `"0000001"` | No |
| buildQuantityMax | number | Max Product Quantity that can be build<br/>*Example:* `10` | Yes |
| buildQuantityReq | number | Required Quantity to build<br/>*Example:* `5` | Yes |
| costPerUnit | number | Cost per Unit<br/>*Example:* `120` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customFieldMap | object | Custom Field Columns<br/>*Example:* `{}` | No |
| documentSequenceCode | string | 0000001 | No |
| id | long | Id<br/>*Example:* `1234` | Yes |
| journalEntryCode | string | Journal Entry Code<br/>*Example:* `"JE-0000001"` | No |
| memo | string | Memo<br/>*Example:* `"Computer Memo"` | Yes |
| pid | string | pid<br/>*Example:* `"P-0000001"` | Yes |
| productCode | string | Product Code<br/>*Example:* `"P-0000001"` | Yes |
| productId | long | Product Id<br/>*Example:* `1234` | Yes |
| productName | string | Product Name<br/>*Example:* `"Computer"` | Yes |
| sequenceFormat | string | 00000001 | No |
| totalCost | number | Total Cost<br/>*Example:* `100` | No |
| totalQuantity | number | Total Quantity<br/>*Example:* `100` | Yes |
| totalQuantityAfter | number | Quantity after BOM Assembly<br/>*Example:* `10` | No |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-0000001"` | No |
| warehouseInventoryData | [ [WarehouseInventoryData](#warehouseinventorydata) ] | Bom Assembly Details | Yes |
| warehouseName | string | Warehouse Name<br/>*Example:* `"Primary Warehouse"` | No |

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

### BulkApiResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ object ] |  | No |
| statusCode | integer |  | No |
| success | [ object ] |  | No |

### BulkApiResponse«ContactUpdatePriceListRequest»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [ContactUpdatePriceListRequest](#contactupdatepricelistrequest) ] |  | No |
| statusCode | integer |  | No |
| success | [ [ContactUpdatePriceListRequest](#contactupdatepricelistrequest) ] |  | No |

### BulkApiResponse«PriceListDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [PriceListDto](#pricelistdto) ] |  | No |
| statusCode | integer |  | No |
| success | [ [PriceListDto](#pricelistdto) ] |  | No |



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

### CustomPage«ProductResponseIndia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ProductResponseIndia](#productresponseindia) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalOpeningValuation | double |  | No |
| totalPages | integer |  | No |

### CustomPage«ProductResponseIndonesia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ProductResponseIndonesia](#productresponseindonesia) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalOpeningValuation | double |  | No |
| totalPages | integer |  | No |

### CustomPage«ProductResponseMalaysia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ProductResponseMalaysia](#productresponsemalaysia) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalOpeningValuation | double |  | No |
| totalPages | integer |  | No |

### CustomPage«ProductResponsePhilippines»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ProductResponsePhilippines](#productresponsephilippines) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalOpeningValuation | double |  | No |
| totalPages | integer |  | No |

### CustomPage«ProductResponseSaudiArabia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ProductResponseSaudiArabia](#productresponsesaudiarabia) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalOpeningValuation | double |  | No |
| totalPages | integer |  | No |

### CustomPage«ProductResponseUae»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ProductResponseUae](#productresponseuae) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalOpeningValuation | double |  | No |
| totalPages | integer |  | No |

### CustomPage«ProductResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ProductResponse](#productresponse) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalOpeningValuation | double |  | No |
| totalPages | integer |  | No |

### CustomPage«TdsNatureOfPaymentIndia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [TdsNatureOfPaymentIndia](#tdsnatureofpaymentindia) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalOpeningValuation | double |  | No |
| totalPages | integer |  | No |

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

### ForecastingDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| forecastQuantity | double |  | No |
| frequencyName | string |  | No |
| periodFrequency | string | *Enum:* `"MONTHLY"`, `"QUARTERLY"`, `"YEARLY"` | No |

### FulfillmentItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingFulfilmentData | [ [AdvancedTrackingFulfilmentDto](#advancedtrackingfulfilmentdto) ] | Advanced tracking to fulfil list | No |
| advancedTrackingType | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| availableProductQuantity | number |  | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| documentItemCode | string | Document order code, It will be Quotaion/Invoice item code. Possible value - QI-00001 or II-00001<br/>*Example:* `"QI-00001"` | Yes |
| documentSequenceCode | string | document sequence code<br/>*Example:* `"IN-0000001"` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| fulfilledQuantity | number | Fulfilled quantity<br/>*Example:* `20` | Yes |
| fulfillmentDate | string | fulfillment date<br/>*Example:* `"01-10-2019"` | No |
| fulfillment_item_code | string | fulfillment item specific unique code<br/>*Example:* `"FI-0000001"` | No |
| id | long |  | No |
| isPartialInvoice | boolean | Whether the document is invoice, and is partial invoice<br/>*Example:* `false` | No |
| isQuickCommit | boolean | Whether Fulfilment should be done in FIFO order<br/>*Example:* `false` | No |
| linkedPIItemCode | string | Quotation Item document sequence code<br/>*Example:* `"QII-0000001"` | No |
| pendingQuantity | number |  | No |
| productCode | string | Product code<br/>*Example:* `"P-0000001"` | Yes |
| productDescription | string |  | No |
| productName | string |  | No |
| productType | string |  | No |
| quantityRequired | number | Ordered Quantity<br/>*Example:* `100` | Yes |
| trackingInformation | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] | Advanced tracking information | No |
| uomAvailableProductQuantity | number |  | No |
| uomFulfilledQuantity | number | UOM Fulfilled quantity<br/>*Example:* `20` | No |
| uomName | string | UOM name | No |
| uomPendingQuantity | number |  | No |
| uomQuantityRequired | number | UOM Ordered Quantity<br/>*Example:* `100` | No |
| warehouseCode | string | warehouse code<br/>*Example:* `"WH-00001"` | No |
| warehouseInventoryData | [ [WarehouseInventoryData](#warehouseinventorydata) ] | warehouse Inventory List<br/>*Example:* `[]` | No |

### FulfillmentRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachmentIds | [ integer ] | list of attachment id's for this fulfillment | No |
| attachments | [ string ] | Attachments url's | No |
| autoFulfilled | boolean | Flag will pass as true for auto fulfilled flow. Possible value - TRUE \| FALSE<br/>*Example:* `false` | No |
| bulkItemCount | integer | count of bulk goods receipt<br/>*Example:* `0` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| documentCode | string | Document code<br/>*Example:* `"00001"` | Yes |
| documentDate | string | document creation date<br/>*Example:* `"01-10-2019"` | No |
| documentType | string | Document Type, Stage from where fulfillment is requested. Value will QUOTATION or SALES_INVOICE<br/>*Example:* `"QUOTATION"` | Yes |
| fulfillmentDate | string | fulfillment date<br/>*Example:* `"01-10-2019"` | No |
| fulfillmentItems | [ [FulfillmentItemDto](#fulfillmentitemdto) ] | Fulfillment item details | No |
| fulfillmentType | string | Fulfillment type: NONE, DEFAULT, PICK_PACK_SHIP, DROP_SHIP<br/>*Enum:* `"NONE"`, `"DEFAULT"`, `"PICK_PACK_SHIP"`, `"DROP_SHIP"`<br/>*Example:* `"PICK_PACK_SHIP"` | No |
| fulfillment_code | string | fulfillment specific unique code<br/>*Example:* `"FUL-0000001"` | No |
| isBulkFulfillment | boolean | true if the GR created is for bulk goods receipt<br/>*Example:* `true` | No |
| isPartialInvoice | boolean | Whether the document is invoice, and is partial invoice<br/>*Example:* `false` | No |
| isQcEnabled | boolean | Flag will pass as true for QC work flow. Possible value - TRUE \| FALSE<br/>*Example:* `false` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked Documents | No |
| linkedPIDocument | [DocumentInfo](#documentinfo) | Linked Partial Invoice document. | No |
| parentDocumentSeqCode | string | Document Sequence code of Quote or Invoice<br/>*Example:* `"00001"` | No |
| parentFulfillmentCode | string | goods receipt specific unique code for bulk gr<br/>*Example:* `"FUL-0000001"` | No |
| reservedStock | boolean | true if the GR created is for reserved stock<br/>*Example:* `true` | No |
| sequence | integer | fulfillment group sequence<br/>*Example:* `1` | No |
| status | string | fulfillment status, possible value : PARTIAL_FULFILLED \| FULLY_FULFILLED \| UNFULFILLED<br/>*Example:* `"PARTIAL_FULFILLED"` | No |
| transactionLinkId | long | transaction link id for the goods received<br/>*Example:* `1` | No |
| warehouseCode | string | warehouse code<br/>*Example:* `"WH-0000001"` | No |

### FulfillmentResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachmentIds | [ integer ] | list of attachment id's for this fulfillment | No |
| attachments | [ string ] | Attachments url's | No |
| autoFulfilled | boolean | Flag will pass as true for auto fulfilled flow. Possible value - TRUE \| FALSE<br/>*Example:* `false` | No |
| bulkItemCount | integer | count of bulk goods receipt<br/>*Example:* `0` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| documentCode | string | Document code<br/>*Example:* `"00001"` | Yes |
| documentDate | string | document creation date<br/>*Example:* `"01-10-2019"` | No |
| documentType | string | Document Type, Stage from where fulfillment is requested. Value will QUOTATION or SALES_INVOICE<br/>*Example:* `"QUOTATION"` | Yes |
| fulfillmentDate | string | fulfillment date<br/>*Example:* `"01-10-2019"` | No |
| fulfillmentItems | [ [FulfillmentItemDto](#fulfillmentitemdto) ] | Fulfillment item details | No |
| fulfillmentType | string | Fulfillment type: NONE, DEFAULT, PICK_PACK_SHIP, DROP_SHIP<br/>*Enum:* `"NONE"`, `"DEFAULT"`, `"PICK_PACK_SHIP"`, `"DROP_SHIP"`<br/>*Example:* `"PICK_PACK_SHIP"` | No |
| fulfillment_code | string | fulfillment specific unique code<br/>*Example:* `"FUL-0000001"` | No |
| id | long |  | No |
| isBulkFulfillment | boolean | true if the GR created is for bulk goods receipt<br/>*Example:* `true` | No |
| isPartialInvoice | boolean | Whether the document is invoice, and is partial invoice<br/>*Example:* `false` | No |
| isQcEnabled | boolean | Flag will pass as true for QC work flow. Possible value - TRUE \| FALSE<br/>*Example:* `false` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked Documents | No |
| linkedPIDocument | [DocumentInfo](#documentinfo) | Linked Partial Invoice document. | No |
| parentDocumentSeqCode | string | Document Sequence code of Quote or Invoice<br/>*Example:* `"00001"` | No |
| parentFulfillmentCode | string | goods receipt specific unique code for bulk gr<br/>*Example:* `"FUL-0000001"` | No |
| reservedStock | boolean | true if the GR created is for reserved stock<br/>*Example:* `true` | No |
| sequence | integer | fulfillment group sequence<br/>*Example:* `1` | No |
| status | string | fulfillment status, possible value : PARTIAL_FULFILLED \| FULLY_FULFILLED \| UNFULFILLED<br/>*Example:* `"PARTIAL_FULFILLED"` | No |
| transactionLinkId | long | transaction link id for the goods received<br/>*Example:* `1` | No |
| warehouseCode | string | warehouse code<br/>*Example:* `"WH-0000001"` | No |

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

### GoodsReceiptRequest

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
| isBulkGR | boolean | true if the GR created is for bulk goods receipt<br/>*Example:* `true` | No |
| isGoodsReceiptOfLinkedDoc | boolean | Flag will denote if GR is of a linked doc<br/>*Example:* `true` | No |
| isQcEnabled | boolean | Flag will pass as true for QC work flow. Possible value - TRUE \| FALSE<br/>*Example:* `false` | No |
| items | [ [GoodsReceiptItemDto](#goodsreceiptitemdto) ] | Goods Receipt item details | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked Documents | No |
| parentDocumentSeqCode | string | Document Sequence code of PO or Bill<br/>*Example:* `"00001"` | No |
| parentGrCode | string | goods receipt specific unique code for bulk gr<br/>*Example:* `"GR-0000001"` | No |
| receiptDate | string | Date on which all goods receipt successfully.<br/>*Example:* `"01-10-2019"` | No |
| sequence | integer | Goods receipt sequence<br/>*Example:* `1` | No |
| status | string | fulfillment status, possible value : UNRECEIVED \| PARTIAL_RECEIVED \| FULLY_RECEIVED<br/>*Example:* `"PARTIAL_FULFILLED"` | No |
| transactionLinkId | long | transaction link id for the goods received<br/>*Example:* `1` | No |
| warehouseCode | string | warehouse code<br/>*Example:* `"WH-0000001"` | No |

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

### GoodsReceiptsTypeCodeRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCodes | [ string ] |  | No |
| documentTypes | [ string ] |  | No |

### HSNAndSACCode

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| hsnCodes | [ [HSNCodeIndiaDto](#hsncodeindiadto) ] |  | No |
| sacCodes | [ [SACCodeIndiaDto](#saccodeindiadto) ] |  | No |

### HSNCodeIndiaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cessNonAdvol | boolean | Cess to be applied as Nonadvol or not<br/>*Example:* `false` | No |
| cessRule | string | Cess rule expression<br/>*Example:* `"Math.max(21*amount/100,4170*quantity/1000)"` | No |
| cessRuleDescription | string | Cess rule description<br/>*Example:* `"21% or Rs. 4170 per thousand, whichever is higher"` | No |
| code | string | HSN code<br/>*Example:* `1234` | No |
| description | string | Description of HSN code<br/>*Example:* `"Cigar and cheroots"` | No |
| gstRate | number | GST tax percent<br/>*Example:* `28` | No |
| tenantId | long | Tenant Id<br/>*Example:* `123` | No |

### HSNCodeRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string | HSN Code<br/>*Example:* `123` | Yes |
| description | string | HSN Description<br/>*Example:* `"Others"` | Yes |
| gstRate | number | HSN GST Rate<br/>*Example:* `28` | Yes |

### ImportDataRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accessToken | string |  | No |
| auditLogId | long |  | No |
| country | string |  | No |
| importDtoClassname | string |  | No |
| importDtoList | [ object ] |  | No |
| module | string |  | No |
| tenantId | long |  | No |
| userId | long |  | No |
| validRecords | [ object ] |  | No |

### IncomingDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| incomingQty | number |  | No |
| outgoingQty | number |  | No |
| periodName | string |  | No |

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

### InventoryRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| costOfGoodsSoldAccountCode | string | Available quantity<br/>*Example:* `100` | No |
| inventoryAccountCode | string | Inventory account code<br/>*Example:* `"A-10232"` | No |
| openingQuantity | double | Opening quantity<br/>*Example:* `10` | No |
| openingValuation | double | Opening valuation<br/>*Example:* `100.4` | No |
| productId | long | Product id - Unique Key<br/>*Example:* `121` | No |
| stockAdjustmentAccountCode | string | Stock adjustment account code<br/>*Example:* `"A-10234"` | No |
| warehouseCode | string | Warehouse code to identify the Warehouse.<br/>*Example:* `"WH-0000001"` | No |
| wipInventoryAccountCode | string | WIP Inventory account code<br/>*Example:* `"A-10233"` | No |

### InventoryResponse

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
| productId | long | Product id of the inventory<br/>*Example:* `121` | No |
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

### InventoryTxnLandedCostDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string | Document code<br/>*Example:* `"PI-0000001"` | Yes |
| jeCode | string | Linked JE Code<br/>*Example:* `"JE-0000001"` | Yes |
| landedPrice | number | Landed Price<br/>*Example:* `12.5` | Yes |
| linkedDocumentCode | string | Linked Document code<br/>*Example:* `"PI-0000007"` | Yes |
| transactionRefCode | string | Invoice item code<br/>*Example:* `"PII-0000007"` | No |

### InventoryUpdateResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failInventories | [ [InventoryResponse](#inventoryresponse) ] |  | No |
| updatedInventories | [ [InventoryResponse](#inventoryresponse) ] |  | No |

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

### LinkedDocumentsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| used | boolean |  | No |

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

### PackListRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ppsDocuments | [ [ShipmentDocumentDto](#shipmentdocumentdto) ] | List of PPS documents. | No |

### PackListResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ppsDocuments | [ [ShipmentDocumentDto](#shipmentdocumentdto) ] | List of PPS documents. | No |

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

### Page«AbstractStockIssueResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [AbstractStockIssueResponse](#abstractstockissueresponse) ] |  | No |
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

### Page«AbstractStockRequestResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [AbstractStockRequestResponse](#abstractstockrequestresponse) ] |  | No |
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

### Page«AdvancedTrackingMetaDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] |  | No |
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

### Page«AttributeResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [AttributeResponse](#attributeresponse) ] |  | No |
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

### Page«FulfillmentResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [FulfillmentResponse](#fulfillmentresponse) ] |  | No |
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

### Page«HSNCodeIndiaDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [HSNCodeIndiaDto](#hsncodeindiadto) ] |  | No |
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

### Page«PicklistResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [PicklistResponse](#picklistresponse) ] |  | No |
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

### Page«PriceListDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [PriceListDto](#pricelistdto) ] |  | No |
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

### Page«QCDocumentResponseDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [QCDocumentResponseDto](#qcdocumentresponsedto) ] |  | No |
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

### Page«ReorderReportDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ReorderReportDto](#reorderreportdto) ] |  | No |
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

### Page«SACCodeIndiaDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [SACCodeIndiaDto](#saccodeindiadto) ] |  | No |
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

### Page«ServiceTypeMalaysiaDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ServiceTypeMalaysiaDto](#servicetypemalaysiadto) ] |  | No |
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

### Page«ShipmentDocumentDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ShipmentDocumentDto](#shipmentdocumentdto) ] |  | No |
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

### Page«TarifCodeMalaysiaDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [TarifCodeMalaysiaDto](#tarifcodemalaysiadto) ] |  | No |
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

### Page«UOMDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [UOMDto](#uomdto) ] |  | No |
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

### Page«UOMSchemaDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [UOMSchemaDto](#uomschemadto) ] |  | No |
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

### PickListRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| barcodeScanner | boolean | Barcode scanner is on/off.<br/>*Example:* `false` | No |
| code | string | Pick list sequence<br/>*Example:* `"0000001"` | No |
| id | long | Pick List Id<br/>*Example:* `1` | No |
| picklistStatus | string | picking list status: READY_TO_PICK, PICKING_IN_PROGRESS, PICKED<br/>*Enum:* `"READY_TO_PICK"`, `"PICKING_IN_PROGRESS"`, `"PICKED"`<br/>*Example:* `"READY_TO_PICK"` | No |
| ppsDocuments | [ [ShipmentDocumentDto](#shipmentdocumentdto) ] | List of PPS documents. | No |
| status | string | PPS-shipment status<br/>*Enum:* `"READY_TO_PICK"`, `"PICKING_IN_PROGRESS"`, `"PICKED"`, `"READY_TO_PACK"`, `"PACKING_IN_PROGRESS"`, `"PACKED"`, `"READY_TO_SHIP"`, `"SHIPPING_IN_PROGRESS"`, `"PARTIAL_SHIPPED"`, `"SHIPPED"`<br/>*Example:* `"PICKED"` | No |
| warehouse | [WarehouseDto](#warehousedto) | Warehouse details. | No |

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

### PriceListContactsUpdateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allContacts | boolean | True if price list applicable to all contacts<br/>*Example:* `false` | No |
| contacts | [ string ] | Set of applicable contact codes<br/>*Example:* `["C-0000001"]` | No |

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

### PriceListPercentageUpdateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| change | number | change percentage to apply on prices, -100 to 100<br/>*Example:* `-4.25` | No |
| currencies | [ string ] | Alleast one currency required<br/>*Example:* `["USD"]` | No |

### PriceListPricingItemRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| productId | string | Product Id<br/>*Example:* `"P-0000001"` | Yes |
| quantity | number | Product quantity<br/>*Example:* `34` | Yes |
| uomId | long | Product uom id<br/>*Example:* `34` | Yes |

### PriceListPricingRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string | Contact code<br/>*Example:* `"C-0000001"` | No |
| currency | string | Document currency<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"USD"` | Yes |
| documentDate | dateTime | Document date<br/>*Example:* `"26-06-2021"` | Yes |
| exchangeRate | number | Exchange Rate<br/>*Example:* `0.7142857142857143` | No |
| priceListPricingItems | [ [PriceListPricingItemRequest](#pricelistpricingitemrequest) ] | Product Id | Yes |
| type | string | Transaction type BUY or SELL<br/>*Enum:* `"BUY"`, `"SELL"`, `"BOTH"`<br/>*Example:* `"SELL"` | Yes |

### PriceListPricingResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| price | number | Price<br/>*Example:* `34` | Yes |
| priceListShortInfos | [ [PriceListShortInfo](#pricelistshortinfo) ] |  | No |
| productId | string | Product Id<br/>*Example:* `34` | Yes |
| quantity | number | Product quantity<br/>*Example:* `34` | Yes |
| uomId | long | UOM Id<br/>*Example:* `34` | Yes |

### PriceListShortInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | Price list id<br/>*Example:* `34` | Yes |
| name | string | Price list name<br/>*Example:* `"Maximum Price"` | Yes |
| price | number | Price<br/>*Example:* `34` | Yes |

### PrintShippingLabelRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string | Document code<br/>*Example:* `"00001"` | Yes |
| documentSequenceCode | string | Document sequence code<br/>*Example:* `"00001"` | Yes |
| documentType | string | Document Type, Stage from where fulfillment - PPS is requested. Value will QUOTATION or SALES_INVOICE<br/>*Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`<br/>*Example:* `"QUOTATION"` | Yes |
| shipmentPackageSequence | [ integer ] | List of shipmentPackageSequence | No |

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

### ProductForecastDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQuantity | double |  | No |
| foreCastingDetails | [ [ForecastingDetails](#forecastingdetails) ] |  | No |
| forecastId | long |  | No |
| id | long |  | No |
| incomingDetailsList | [ [IncomingDetails](#incomingdetails) ] |  | No |
| parentCode | string |  | No |
| productCode | string |  | No |
| productId | long |  | No |
| productName | string |  | No |
| productSeqCode | string |  | No |
| quantityRequiredToBuild | number |  | No |
| type | string | *Enum:* `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"` | No |

### ProductInOutQty

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentType | string | *Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"` | No |
| productCode | string |  | No |
| quantity | number |  | No |

### ProductInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Product status<br/>*Example:* `true` | No |
| advancedTracking | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"`<br/>*Example:* `"NONE"` | No |
| advancedTrackingMetaData | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] | Advanced Tracking Meta data<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| amortizationPeriod | integer | Amortization template period<br/>*Example:* `36` | No |
| amortizationTemplateCode | string | Amortization template code<br/>*Example:* `"0000001"` | No |
| attributes | [ [AttributeDetails](#attributedetails) ] | Attribute Details | No |
| autoFulfillmentEnabled | boolean | Is Auto-Fulfillment enable?<br/>*Example:* `false` | No |
| availableQuantity | number | Available Quantity<br/>*Example:* `2` | No |
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
| cessRule | string | Cess rule expression<br/>*Example:* `"Math.max(21*amount/100,4170*quantity/1000)"` | No |
| cessRuleDescription | string | Cess rule description<br/>*Example:* `"21% or Rs. 4170 per thousand, whichever is higher"` | No |
| costOfGoodsSoldAccountCode | string |  | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| deferredExpenseAccountCode | string | Deferred Expense account code<br/>*Example:* `"A-0015"` | No |
| deferredRevenueAccountCode | string | Deferred Revenue account code<br/>*Example:* `"A-0015"` | No |
| deleted | boolean | Product delete status<br/>*Example:* `true` | No |
| description | string | Product description<br/>*Example:* `"Description"` | No |
| documentSequenceCode | string | Product Sequence code<br/>*Example:* `"P-0000001"` | No |
| exciseApplicable | boolean | *Example:* `true` | No |
| exciseRate | double | Excise rate based on Excise Type<br/>*Example:* `10` | No |
| exciseType | string | Excise type to apply<br/>*Enum:* `"PERCENT"`, `"FLAT"`<br/>*Example:* `"PERCENT"` | No |
| exemptedMalaysia | boolean | Whether Product is Tax Exempted<br/>*Example:* `true` | No |
| glAccountCode | string | GL account code<br/>*Example:* `"A-0017"` | No |
| hasBuildAssembly | boolean | Has Build Assembly<br/>*Example:* `true` | No |
| hasVariants | boolean | Product has variants<br/>*Example:* `false` | No |
| hsnOrSacCode | string | HSN or SAC code of product<br/>*Example:* `1234` | No |
| id | long | Product ID<br/>*Example:* `1234` | No |
| images | [ string ] | Product image url's | No |
| incomingQty | number | Product incoming Qty | No |
| inventory | [InventoryDto](#inventorydto) | Inventory information required for Tracked Products. | No |
| inventoryAccountCode | string |  | No |
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
| nameInArabicSA | string |  | No |
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
| reservedQuantity | number | Reserved Quantity<br/>*Example:* `2` | No |
| revenueRecognitionInfo | [ProductRevenueRecognitionInfo](#productrevenuerecognitioninfo) | Product Revenue Recognition Information Object | No |
| rowRackBinData | [RowRackBinData](#rowrackbindata) | Row Rack Bin information required for Tracked Products. | No |
| salesAccountCode | string | Sales account code<br/>*Example:* `"A-0013"` | Yes |
| salesPrice | double | Sales price<br/>*Example:* `120` | Yes |
| salesPriceTaxInclusive | boolean | Is sales price tax inclusive?<br/>*Example:* `false` | No |
| salesReturnAccountCode | string | Sales return account code<br/>*Example:* `"A-0015"` | No |
| salesTaxCode | string | Sales tax code<br/>*Example:* `"T-002"` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| source | string | Identify this is ecom sync product<br/>*Example:* `"SHOPIFY"` | No |
| stockAdjustmentAccountCode | string |  | No |
| stockUom | long | Stock UOM<br/>*Example:* `2` | Yes |
| tariffOrServiceCodeMalaysia | string | Tariff or Service code of product<br/>*Example:* `1234` | No |
| taxExemptionReason | string | Tax Exempted reason to be filled, if taxPreference is true<br/>*Enum:* `"EXEMPTED"`, `"NON_GST"`<br/>*Example:* `"EXEMPTED"` | No |
| taxExemptionReasonMalaysia | string | Tax Exempted reason to be filled, if taxPreference is true<br/>*Enum:* `"EXEMPTED"`, `"NON_SST"`, `"LIVE_ANIMALS"`, `"UNPROCESSED_FOOD"`, `"VEGETABLES"`, `"MEDICINES"`, `"MACHINERY"`, `"CHEMICALS"`<br/>*Example:* `"EXEMPTED"` | No |
| taxPreference | boolean | Whether Product is Tax Exempted<br/>*Example:* `true` | No |
| taxable | boolean | Is taxable?<br/>*Example:* `true` | No |
| tdsApplicableIndia | boolean |  | No |
| tdsNatureOfPaymentIndia | string |  | No |
| type | string | Product type<br/>*Enum:* `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"`<br/>*Example:* `"TRACKED"` | Yes |
| uomSchema | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| uomSchemaDto | [UOMSchemaDto](#uomschemadto) | Product uom schema information | No |
| valuationMethod | string | Valuation Method<br/>*Enum:* `"FIFO"`, `"AVERAGE"`<br/>*Example:* `"FIFO"` | Yes |
| variantAttributes | object | Attribute Details specific to a variant | No |
| variantCount | integer | Variant Count | No |
| whtApplicable | boolean | *Example:* `true` | No |
| whtSectionToWhtRateId | long | Product WHT - Nature Of Payment to WHT Rate Id<br/>*Example:* `1213454` | No |
| wipInventoryAccountCode | string |  | No |

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

### ProductRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
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
| description | string | Product description<br/>*Example:* `"Description"` | No |
| documentSequenceCode | string | Product Sequence code<br/>*Example:* `"P-0000001"` | No |
| hasVariants | boolean | Product has variants<br/>*Example:* `false` | No |
| images | [ string ] | Product image url's | No |
| inventory | [InventoryDto](#inventorydto) | Inventory information required for Tracked Products. | No |
| inventoryWarehouseDetails | [ [InventoryWarehouseDetails](#inventorywarehousedetails) ] | Inventory warehouse details<br/>*Example:* `{"warehouseCode":"WH-00001","availableQuantity":"100","openingQuantity":"100"}` | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>*Example:* `true` | No |
| isFinishedProduct | boolean | Is finished product?<br/>*Example:* `false` | No |
| isUiProductUpdate | boolean | Product is update by UI.<br/>*Example:* `false` | No |
| isVariant | boolean | Is a variant<br/>*Example:* `false` | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] | Landed Cost Category<br/>*Example:* `[{"name":"First Cat","allocationType":"QUANTITY"},{"name":"Second Cat","allocationType":"MANUAL"}]` | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code<br/>*Example:* `"AC-0000012"` | No |
| masterProductCode | string | Master Product Code<br/>*Example:* `"P-0000001"` | No |
| multipleUomSchema | boolean | Is multiple Uom Schema?<br/>*Example:* `true` | No |
| name | string | Product Name<br/>*Example:* `"Apple"` | Yes |
| productSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] |  | No |
| productTransactionType | string | Product Transaction Type<br/>*Enum:* `"BOTH"`, `"PURCHASE"`, `"SALES"`<br/>*Example:* `"BOTH"` | Yes |
| purchaseAccountCode | string | Purchase account code<br/>*Example:* `"A-0012"` | Yes |
| purchasePrice | double | Purchase price<br/>*Example:* `123.33` | Yes |
| purchasePriceTaxInclusive | boolean | Is purchase price tax inclusive?<br/>*Example:* `true` | No |
| purchaseReturnAccountCode | string | Purchase return account code<br/>*Example:* `"A-0014"` | No |
| purchaseTaxCode | string | Purchase tax code<br/>*Example:* `"T-001"` | No |
| reorderEnabled | boolean | Flag to enable reorder level<br/>*Example:* `true` | No |
| reorderLevel | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| reorderQuantity | long | Quantity to be reordered<br/>*Example:* `50` | No |
| reorderVendorCode | string | Vendor code for reorder<br/>*Example:* `"C-000001"` | No |
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
| valuationMethod | string | Valuation Method<br/>*Enum:* `"FIFO"`, `"AVERAGE"`<br/>*Example:* `"FIFO"` | Yes |
| variantAttributes | object | Attribute Details specific to a variant | No |

### ProductRequestIndia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
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
| cessNonAdvol | boolean | Cess is Non Advol or not<br/>*Example:* `false` | No |
| cessRule | string | Cess rule expression<br/>*Example:* `"Math.max(21*amount/100,4170*quantity/1000)"` | No |
| cessRuleDescription | string | Cess rule description<br/>*Example:* `"21% or Rs. 4170 per thousand, whichever is higher"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| deferredExpenseAccountCode | string | Deferred Expense account code<br/>*Example:* `"A-0015"` | No |
| deferredRevenueAccountCode | string | Deferred Revenue account code<br/>*Example:* `"A-0015"` | No |
| description | string | Product description<br/>*Example:* `"Description"` | No |
| documentSequenceCode | string | Product Sequence code<br/>*Example:* `"P-0000001"` | No |
| glAccountCode | string | GL account code<br/>*Example:* `"A-0017"` | No |
| hasVariants | boolean | Product has variants<br/>*Example:* `false` | No |
| hsnOrSacCode | string | HSN or SAC code of product<br/>*Example:* `1234` | No |
| images | [ string ] | Product image url's | No |
| inventory | [InventoryDto](#inventorydto) | Inventory information required for Tracked Products. | No |
| inventoryWarehouseDetails | [ [InventoryWarehouseDetails](#inventorywarehousedetails) ] | Inventory warehouse details<br/>*Example:* `{"warehouseCode":"WH-00001","availableQuantity":"100","openingQuantity":"100"}` | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>*Example:* `true` | No |
| isFinishedProduct | boolean | Is finished product?<br/>*Example:* `false` | No |
| isUiProductUpdate | boolean | Product is update by UI.<br/>*Example:* `false` | No |
| isVariant | boolean | Is a variant<br/>*Example:* `false` | No |
| itcAdjustment | string | ITC adjustment<br/>*Enum:* `"NA"`, `"ITC_IS_BLOCKED"`, `"ITC_IS_REVERSED"`<br/>*Example:* `"ITC_IS_BLOCKED"` | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] | Landed Cost Category<br/>*Example:* `[{"name":"First Cat","allocationType":"QUANTITY"},{"name":"Second Cat","allocationType":"MANUAL"}]` | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code<br/>*Example:* `"AC-0000012"` | No |
| masterProductCode | string | Master Product Code<br/>*Example:* `"P-0000001"` | No |
| multipleUomSchema | boolean | Is multiple Uom Schema?<br/>*Example:* `true` | No |
| name | string | Product Name<br/>*Example:* `"Apple"` | Yes |
| offeringType | string | Offering type<br/>*Enum:* `"GOODS"`, `"SERVICES"`<br/>*Example:* `"GOODS"` | No |
| productSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] |  | No |
| productTransactionType | string | Product Transaction Type<br/>*Enum:* `"BOTH"`, `"PURCHASE"`, `"SALES"`<br/>*Example:* `"BOTH"` | Yes |
| purchaseAccountCode | string | Purchase account code<br/>*Example:* `"A-0012"` | Yes |
| purchasePrice | double | Purchase price<br/>*Example:* `123.33` | Yes |
| purchasePriceTaxInclusive | boolean | Is purchase price tax inclusive?<br/>*Example:* `true` | No |
| purchaseReturnAccountCode | string | Purchase return account code<br/>*Example:* `"A-0014"` | No |
| purchaseTaxCode | string | Purchase tax code<br/>*Example:* `"T-001"` | No |
| reorderEnabled | boolean | Flag to enable reorder level<br/>*Example:* `true` | No |
| reorderLevel | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| reorderQuantity | long | Quantity to be reordered<br/>*Example:* `50` | No |
| reorderVendorCode | string | Vendor code for reorder<br/>*Example:* `"C-000001"` | No |
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
| uqcIndia | string | UQC code of product<br/>*Example:* `1234` | No |
| valuationMethod | string | Valuation Method<br/>*Enum:* `"FIFO"`, `"AVERAGE"`<br/>*Example:* `"FIFO"` | Yes |
| variantAttributes | object | Attribute Details specific to a variant | No |

### ProductRequestIndonesia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
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
| description | string | Product description<br/>*Example:* `"Description"` | No |
| documentSequenceCode | string | Product Sequence code<br/>*Example:* `"P-0000001"` | No |
| exciseApplicable | boolean | *Example:* `true` | No |
| exciseRate | double | Excise rate based on Excise Type<br/>*Example:* `10` | No |
| exciseType | string | Excise type to apply<br/>*Enum:* `"PERCENT"`, `"FLAT"`<br/>*Example:* `"PERCENT"` | No |
| hasVariants | boolean | Product has variants<br/>*Example:* `false` | No |
| images | [ string ] | Product image url's | No |
| inventory | [InventoryDto](#inventorydto) | Inventory information required for Tracked Products. | No |
| inventoryWarehouseDetails | [ [InventoryWarehouseDetails](#inventorywarehousedetails) ] | Inventory warehouse details<br/>*Example:* `{"warehouseCode":"WH-00001","availableQuantity":"100","openingQuantity":"100"}` | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>*Example:* `true` | No |
| isFinishedProduct | boolean | Is finished product?<br/>*Example:* `false` | No |
| isUiProductUpdate | boolean | Product is update by UI.<br/>*Example:* `false` | No |
| isVariant | boolean | Is a variant<br/>*Example:* `false` | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] | Landed Cost Category<br/>*Example:* `[{"name":"First Cat","allocationType":"QUANTITY"},{"name":"Second Cat","allocationType":"MANUAL"}]` | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code<br/>*Example:* `"AC-0000012"` | No |
| masterProductCode | string | Master Product Code<br/>*Example:* `"P-0000001"` | No |
| multipleUomSchema | boolean | Is multiple Uom Schema?<br/>*Example:* `true` | No |
| name | string | Product Name<br/>*Example:* `"Apple"` | Yes |
| productSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] |  | No |
| productTransactionType | string | Product Transaction Type<br/>*Enum:* `"BOTH"`, `"PURCHASE"`, `"SALES"`<br/>*Example:* `"BOTH"` | Yes |
| purchaseAccountCode | string | Purchase account code<br/>*Example:* `"A-0012"` | Yes |
| purchasePrice | double | Purchase price<br/>*Example:* `123.33` | Yes |
| purchasePriceTaxInclusive | boolean | Is purchase price tax inclusive?<br/>*Example:* `true` | No |
| purchaseReturnAccountCode | string | Purchase return account code<br/>*Example:* `"A-0014"` | No |
| purchaseTaxCode | string | Purchase tax code<br/>*Example:* `"T-001"` | No |
| reorderEnabled | boolean | Flag to enable reorder level<br/>*Example:* `true` | No |
| reorderLevel | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| reorderQuantity | long | Quantity to be reordered<br/>*Example:* `50` | No |
| reorderVendorCode | string | Vendor code for reorder<br/>*Example:* `"C-000001"` | No |
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
| valuationMethod | string | Valuation Method<br/>*Enum:* `"FIFO"`, `"AVERAGE"`<br/>*Example:* `"FIFO"` | Yes |
| variantAttributes | object | Attribute Details specific to a variant | No |
| whtApplicable | boolean | *Example:* `true` | No |
| whtSectionToWhtRateId | long | Product WHT - Nature Of Payment to WHT Rate Id<br/>*Example:* `1213454` | No |

### ProductRequestMalaysia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
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
| description | string | Product description<br/>*Example:* `"Description"` | No |
| documentSequenceCode | string | Product Sequence code<br/>*Example:* `"P-0000001"` | No |
| exemptedMalaysia | boolean | Whether Product is Tax Exempted<br/>*Example:* `true` | No |
| glAccountCode | string | GL account code<br/>*Example:* `"A-0017"` | No |
| hasVariants | boolean | Product has variants<br/>*Example:* `false` | No |
| images | [ string ] | Product image url's | No |
| inventory | [InventoryDto](#inventorydto) | Inventory information required for Tracked Products. | No |
| inventoryWarehouseDetails | [ [InventoryWarehouseDetails](#inventorywarehousedetails) ] | Inventory warehouse details<br/>*Example:* `{"warehouseCode":"WH-00001","availableQuantity":"100","openingQuantity":"100"}` | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>*Example:* `true` | No |
| isFinishedProduct | boolean | Is finished product?<br/>*Example:* `false` | No |
| isUiProductUpdate | boolean | Product is update by UI.<br/>*Example:* `false` | No |
| isVariant | boolean | Is a variant<br/>*Example:* `false` | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] | Landed Cost Category<br/>*Example:* `[{"name":"First Cat","allocationType":"QUANTITY"},{"name":"Second Cat","allocationType":"MANUAL"}]` | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code<br/>*Example:* `"AC-0000012"` | No |
| masterProductCode | string | Master Product Code<br/>*Example:* `"P-0000001"` | No |
| multipleUomSchema | boolean | Is multiple Uom Schema?<br/>*Example:* `true` | No |
| name | string | Product Name<br/>*Example:* `"Apple"` | Yes |
| offeringType | string | Offering type<br/>*Enum:* `"GOODS"`, `"SERVICES"`<br/>*Example:* `"GOODS"` | No |
| productSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] |  | No |
| productTransactionType | string | Product Transaction Type<br/>*Enum:* `"BOTH"`, `"PURCHASE"`, `"SALES"`<br/>*Example:* `"BOTH"` | Yes |
| purchaseAccountCode | string | Purchase account code<br/>*Example:* `"A-0012"` | Yes |
| purchasePrice | double | Purchase price<br/>*Example:* `123.33` | Yes |
| purchasePriceTaxInclusive | boolean | Is purchase price tax inclusive?<br/>*Example:* `true` | No |
| purchaseReturnAccountCode | string | Purchase return account code<br/>*Example:* `"A-0014"` | No |
| purchaseTaxCode | string | Purchase tax code<br/>*Example:* `"T-001"` | No |
| reorderEnabled | boolean | Flag to enable reorder level<br/>*Example:* `true` | No |
| reorderLevel | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| reorderQuantity | long | Quantity to be reordered<br/>*Example:* `50` | No |
| reorderVendorCode | string | Vendor code for reorder<br/>*Example:* `"C-000001"` | No |
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
| valuationMethod | string | Valuation Method<br/>*Enum:* `"FIFO"`, `"AVERAGE"`<br/>*Example:* `"FIFO"` | Yes |
| variantAttributes | object | Attribute Details specific to a variant | No |

### ProductRequestPhilippines

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
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
| description | string | Product description<br/>*Example:* `"Description"` | No |
| documentSequenceCode | string | Product Sequence code<br/>*Example:* `"P-0000001"` | No |
| hasVariants | boolean | Product has variants<br/>*Example:* `false` | No |
| images | [ string ] | Product image url's | No |
| inventory | [InventoryDto](#inventorydto) | Inventory information required for Tracked Products. | No |
| inventoryWarehouseDetails | [ [InventoryWarehouseDetails](#inventorywarehousedetails) ] | Inventory warehouse details<br/>*Example:* `{"warehouseCode":"WH-00001","availableQuantity":"100","openingQuantity":"100"}` | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>*Example:* `true` | No |
| isFinishedProduct | boolean | Is finished product?<br/>*Example:* `false` | No |
| isUiProductUpdate | boolean | Product is update by UI.<br/>*Example:* `false` | No |
| isVariant | boolean | Is a variant<br/>*Example:* `false` | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] | Landed Cost Category<br/>*Example:* `[{"name":"First Cat","allocationType":"QUANTITY"},{"name":"Second Cat","allocationType":"MANUAL"}]` | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code<br/>*Example:* `"AC-0000012"` | No |
| masterProductCode | string | Master Product Code<br/>*Example:* `"P-0000001"` | No |
| multipleUomSchema | boolean | Is multiple Uom Schema?<br/>*Example:* `true` | No |
| name | string | Product Name<br/>*Example:* `"Apple"` | Yes |
| productSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] |  | No |
| productTransactionType | string | Product Transaction Type<br/>*Enum:* `"BOTH"`, `"PURCHASE"`, `"SALES"`<br/>*Example:* `"BOTH"` | Yes |
| purchaseAccountCode | string | Purchase account code<br/>*Example:* `"A-0012"` | Yes |
| purchasePrice | double | Purchase price<br/>*Example:* `123.33` | Yes |
| purchasePriceTaxInclusive | boolean | Is purchase price tax inclusive?<br/>*Example:* `true` | No |
| purchaseReturnAccountCode | string | Purchase return account code<br/>*Example:* `"A-0014"` | No |
| purchaseTaxCode | string | Purchase tax code<br/>*Example:* `"T-001"` | No |
| reorderEnabled | boolean | Flag to enable reorder level<br/>*Example:* `true` | No |
| reorderLevel | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| reorderQuantity | long | Quantity to be reordered<br/>*Example:* `50` | No |
| reorderVendorCode | string | Vendor code for reorder<br/>*Example:* `"C-000001"` | No |
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
| valuationMethod | string | Valuation Method<br/>*Enum:* `"FIFO"`, `"AVERAGE"`<br/>*Example:* `"FIFO"` | Yes |
| variantAttributes | object | Attribute Details specific to a variant | No |
| whtApplicable | boolean | *Example:* `true` | No |
| whtSectionToWhtRateId | long | Product WHT - Nature Of Payment to WHT Rate Id<br/>*Example:* `1213454` | No |

### ProductRequestSaudiArabia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
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
| description | string | Product description<br/>*Example:* `"Description"` | No |
| documentSequenceCode | string | Product Sequence code<br/>*Example:* `"P-0000001"` | No |
| exciseApplicable | boolean | *Example:* `true` | No |
| exciseRate | double | Excise rate based on Excise Type<br/>*Example:* `10` | No |
| exciseType | string | Excise type to apply<br/>*Enum:* `"PERCENT"`, `"FLAT"`<br/>*Example:* `"PERCENT"` | No |
| hasVariants | boolean | Product has variants<br/>*Example:* `false` | No |
| images | [ string ] | Product image url's | No |
| inventory | [InventoryDto](#inventorydto) | Inventory information required for Tracked Products. | No |
| inventoryWarehouseDetails | [ [InventoryWarehouseDetails](#inventorywarehousedetails) ] | Inventory warehouse details<br/>*Example:* `{"warehouseCode":"WH-00001","availableQuantity":"100","openingQuantity":"100"}` | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>*Example:* `true` | No |
| isFinishedProduct | boolean | Is finished product?<br/>*Example:* `false` | No |
| isUiProductUpdate | boolean | Product is update by UI.<br/>*Example:* `false` | No |
| isVariant | boolean | Is a variant<br/>*Example:* `false` | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] | Landed Cost Category<br/>*Example:* `[{"name":"First Cat","allocationType":"QUANTITY"},{"name":"Second Cat","allocationType":"MANUAL"}]` | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code<br/>*Example:* `"AC-0000012"` | No |
| masterProductCode | string | Master Product Code<br/>*Example:* `"P-0000001"` | No |
| multipleUomSchema | boolean | Is multiple Uom Schema?<br/>*Example:* `true` | No |
| name | string | Product Name<br/>*Example:* `"Apple"` | Yes |
| nameInArabic | string | Product name in Arabic | No |
| productSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] |  | No |
| productTransactionType | string | Product Transaction Type<br/>*Enum:* `"BOTH"`, `"PURCHASE"`, `"SALES"`<br/>*Example:* `"BOTH"` | Yes |
| purchaseAccountCode | string | Purchase account code<br/>*Example:* `"A-0012"` | Yes |
| purchasePrice | double | Purchase price<br/>*Example:* `123.33` | Yes |
| purchasePriceTaxInclusive | boolean | Is purchase price tax inclusive?<br/>*Example:* `true` | No |
| purchaseReturnAccountCode | string | Purchase return account code<br/>*Example:* `"A-0014"` | No |
| purchaseTaxCode | string | Purchase tax code<br/>*Example:* `"T-001"` | No |
| reorderEnabled | boolean | Flag to enable reorder level<br/>*Example:* `true` | No |
| reorderLevel | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| reorderQuantity | long | Quantity to be reordered<br/>*Example:* `50` | No |
| reorderVendorCode | string | Vendor code for reorder<br/>*Example:* `"C-000001"` | No |
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
| valuationMethod | string | Valuation Method<br/>*Enum:* `"FIFO"`, `"AVERAGE"`<br/>*Example:* `"FIFO"` | Yes |
| variantAttributes | object | Attribute Details specific to a variant | No |

### ProductRequestUae

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
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
| description | string | Product description<br/>*Example:* `"Description"` | No |
| documentSequenceCode | string | Product Sequence code<br/>*Example:* `"P-0000001"` | No |
| exciseApplicable | boolean | *Example:* `true` | No |
| exciseRate | double | Excise rate based on Excise Type<br/>*Example:* `10` | No |
| exciseType | string | Excise type to apply<br/>*Enum:* `"PERCENT"`, `"FLAT"`<br/>*Example:* `"PERCENT"` | No |
| hasVariants | boolean | Product has variants<br/>*Example:* `false` | No |
| images | [ string ] | Product image url's | No |
| inventory | [InventoryDto](#inventorydto) | Inventory information required for Tracked Products. | No |
| inventoryWarehouseDetails | [ [InventoryWarehouseDetails](#inventorywarehousedetails) ] | Inventory warehouse details<br/>*Example:* `{"warehouseCode":"WH-00001","availableQuantity":"100","openingQuantity":"100"}` | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>*Example:* `true` | No |
| isFinishedProduct | boolean | Is finished product?<br/>*Example:* `false` | No |
| isUiProductUpdate | boolean | Product is update by UI.<br/>*Example:* `false` | No |
| isVariant | boolean | Is a variant<br/>*Example:* `false` | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] | Landed Cost Category<br/>*Example:* `[{"name":"First Cat","allocationType":"QUANTITY"},{"name":"Second Cat","allocationType":"MANUAL"}]` | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code<br/>*Example:* `"AC-0000012"` | No |
| masterProductCode | string | Master Product Code<br/>*Example:* `"P-0000001"` | No |
| multipleUomSchema | boolean | Is multiple Uom Schema?<br/>*Example:* `true` | No |
| name | string | Product Name<br/>*Example:* `"Apple"` | Yes |
| productSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] |  | No |
| productTransactionType | string | Product Transaction Type<br/>*Enum:* `"BOTH"`, `"PURCHASE"`, `"SALES"`<br/>*Example:* `"BOTH"` | Yes |
| purchaseAccountCode | string | Purchase account code<br/>*Example:* `"A-0012"` | Yes |
| purchasePrice | double | Purchase price<br/>*Example:* `123.33` | Yes |
| purchasePriceTaxInclusive | boolean | Is purchase price tax inclusive?<br/>*Example:* `true` | No |
| purchaseReturnAccountCode | string | Purchase return account code<br/>*Example:* `"A-0014"` | No |
| purchaseTaxCode | string | Purchase tax code<br/>*Example:* `"T-001"` | No |
| reorderEnabled | boolean | Flag to enable reorder level<br/>*Example:* `true` | No |
| reorderLevel | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| reorderQuantity | long | Quantity to be reordered<br/>*Example:* `50` | No |
| reorderVendorCode | string | Vendor code for reorder<br/>*Example:* `"C-000001"` | No |
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
| valuationMethod | string | Valuation Method<br/>*Enum:* `"FIFO"`, `"AVERAGE"`<br/>*Example:* `"FIFO"` | Yes |
| variantAttributes | object | Attribute Details specific to a variant | No |

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

### ProductSerialBatchInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentItemCode | string |  | No |
| expiryDate | dateTime |  | No |
| manufacturingDate | dateTime |  | No |
| quantity | string |  | No |
| sequence | integer |  | No |
| serialBatchNumber | string |  | No |
| subSequence | integer |  | No |

### ProductShortInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTracking | string | *Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| availableQuantity | number |  | No |
| barcode | string |  | No |
| categoryCode | string |  | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| description | string |  | No |
| documentSequenceCode | string |  | No |
| hasVariants | boolean |  | No |
| incomingQty | number |  | No |
| isVariant | boolean |  | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] |  | No |
| masterProductCode | string |  | No |
| multipleUomSchema | boolean |  | No |
| name | string |  | No |
| openingQuantity | number |  | No |
| outgoingQty | number |  | No |
| pid | string |  | No |
| product_transaction_type | string |  | No |
| purchasePrice | number |  | No |
| recommendedUom | long |  | No |
| reorderLevel | long |  | No |
| reorderQuantity | long |  | No |
| reservedQuantity | number |  | No |
| salesPrice | number |  | No |
| status | boolean |  | No |
| stockUom | integer |  | No |
| taxable | boolean |  | No |
| type | string |  | No |
| unitPrice | number |  | No |
| uomSchema | long |  | No |
| uomSchemaDto | [UOMSchemaDto](#uomschemadto) |  | No |
| valuationMethod | string | *Enum:* `"FIFO"`, `"AVERAGE"` | No |

### ProductShortInfoForWorkOrder

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTracking | string | *Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| availableQuantity | double |  | No |
| description | string |  | No |
| documentSequenceCode | string |  | No |
| id | long |  | No |
| inventoryPrice | number |  | No |
| name | string |  | No |
| pid | string |  | No |
| purchasePrice | number |  | No |
| reservedQuantity | double |  | No |
| salesPrice | number |  | No |
| stockUom | long |  | No |
| type | string |  | No |
| warehouseCode | string |  | No |

### ProductShortInfoRequestForWorkOrder

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| productCode | string | Product Code<br/>*Example:* `"P-0000012"` | No |
| quantity | number | 1<br/>*Example:* `1` | No |

### ProductStockInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fulfilledQuantity | number |  | No |
| pendingQuantity | number |  | No |
| productCode | string |  | No |
| receiptQuantity | number |  | No |
| status | string |  | No |
| warehouseCode | string |  | No |

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

### ProductSummaryResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableStockProductCount | integer | Available stock Count<br/>*Example:* `821` | No |
| bomCount | integer | BoM Product Count<br/>*Example:* `821` | No |
| nontrackedCount | integer | Non-Tracked Product Count<br/>*Example:* `100` | No |
| trackedCount | integer | Tracked Product Count<br/>*Example:* `512` | No |

### ProductTrackingInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| productCode | string |  | No |
| serialBatchInfo | [ [ProductSerialBatchInfo](#productserialbatchinfo) ] |  | No |

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

### PurchaseSalesPriceListDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| purchasePriceLists | [ long ] | Set of purchase price lists<br/>*Example:* `[123,456]` | No |
| salesPriceLists | [ long ] | Set of sales price lists<br/>*Example:* `[123,456]` | No |

### QCDocumentDetailsRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvedInventoryData | [ [StockTransferWarehouseInventoryData](#stocktransferwarehouseinventorydata) ] |  | No |
| documentQCRecordId | long |  | No |
| documentType | string | *Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"` | No |
| memo | string |  | No |
| qcApprovedQuantity | number |  | No |
| qcRejectedQuantity | number |  | No |
| rejectedInventoryData | [ [StockTransferWarehouseInventoryData](#stocktransferwarehouseinventorydata) ] |  | No |
| stockTransferCode | string |  | No |
| templateParameterDetails | [ [TemplateParameterDetails](#templateparameterdetails) ] |  | No |
| tenantId | long |  | No |
| warehouseInventoryData | [ [WarehouseInventoryData](#warehouseinventorydata) ] |  | No |

### QCDocumentDetailsResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean |  | No |
| approvedInventoryData | [ [StockTransferWarehouseInventoryData](#stocktransferwarehouseinventorydata) ] |  | No |
| code | string |  | No |
| documentQCRecordId | long |  | No |
| documentType | string | *Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"` | No |
| id | long |  | No |
| memo | string |  | No |
| qcApprovedQuantity | number |  | No |
| qcRejectedQuantity | number |  | No |
| rejectedInventoryData | [ [StockTransferWarehouseInventoryData](#stocktransferwarehouseinventorydata) ] |  | No |
| stockTransferCode | string |  | No |
| templateParameterDetails | [ [TemplateParameterDetails](#templateparameterdetails) ] |  | No |
| tenantId | long |  | No |
| warehouseInventoryData | [ [WarehouseInventoryData](#warehouseinventorydata) ] |  | No |

### QCDocumentRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentType | string | *Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"` | No |
| id | long |  | No |
| productCode | string |  | No |
| productDocumentSeqCode | string |  | No |
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

### RowRackBinLastUsedResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| binCode | string |  | No |
| binName | string |  | No |
| rackCode | string |  | No |
| rackName | string |  | No |
| rowCode | string |  | No |
| rowName | string |  | No |

### RowRackBinProductAvailableQuantityDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQuantity | number | Available quantity<br/>*Example:* `10` | Yes |
| binCode | string | bin code<br/>*Example:* `"BIN-00001"` | Yes |
| binName | string | bin Name<br/>*Example:* `"Bin 1"` | Yes |
| productCode | string | Product Code<br/>*Example:* `"P-00009"` | Yes |
| rackCode | string | Rack code<br/>*Example:* `"RACK-00001"` | Yes |
| rackName | string | Rack Name<br/>*Example:* `"Rack 1"` | Yes |
| reservedQuantity | number | reserved quantity<br/>*Example:* `1` | Yes |
| rowCode | string | Row code<br/>*Example:* `"ROW-00001"` | Yes |
| rowName | string | Row Name<br/>*Example:* `"Row 1"` | Yes |

### SACCodeIndiaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string | SAC code<br/>*Example:* `9954` | No |
| description | string | Description of SAC code<br/>*Example:* `"Composite supply of works contract as defined in clause (119) of section 2 of the Central Goods and Services Tax Act, 2017, involving predominantly earth work (that is, constituting more than 75 per cent. of the value of the works contract) provided to the Central Government, State Government, Union territory, local authority, a Governmental Authority or a Government Entity."` | No |
| gstRate | number | GST tax percent<br/>*Example:* `5` | No |
| tenantId | long | Tenant Id<br/>*Example:* `123` | No |

### SACCodeRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string | SAC Code<br/>*Example:* `123` | Yes |
| description | string | SAC Description<br/>*Example:* `"Others"` | Yes |
| gstRate | number | SAC GST Rate<br/>*Example:* `28` | Yes |

### SalesDocumentDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string | Document code<br/>*Example:* `"00001"` | Yes |
| documentSequenceCode | string | Document sequence code<br/>*Example:* `"00001"` | Yes |
| documentType | string | Document Type, Stage from where fulfillment - PPS is requested. Value will QUOTATION or SALES_INVOICE<br/>*Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`<br/>*Example:* `"QUOTATION"` | Yes |

### SaveInventoryTxnEventItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| productDetails | [ [ProductDetails](#productdetails) ] |  | No |

### SequenceNumberDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| sequenceNumber | string | Pick List Sequence Number<br/>*Example:* `"PL0000001"` | No |

### ServiceTypeMalaysiaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string | Service code<br/>*Example:* `9954` | No |
| description | string | Description of SERIVCE code<br/>*Example:* `"Cigar and cheroots"` | No |
| exemption | boolean | Whether Product is Tax Exempted<br/>*Example:* `true` | No |
| gstRate | number | GST tax percent<br/>*Example:* `5` | No |

### ShipDocumentDetailRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| salesInvoiceCodes | object | Document sequence code<br/>*Example:* `{"SALES_INVOICE":["0000005"]}` | Yes |
| salesOrderCodes | object | Document sequence code<br/>*Example:* `{"SALES_ORDER":["0000003"]}` | Yes |

### ShipListDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| boxTypes | [ string ] | box types. | No |
| carrierTypes | [ string ] | carrier types. | No |
| deliveryTypes | [ string ] | delivery types. | No |
| documentCode | string | Document code<br/>*Example:* `"00001"` | Yes |
| documentSequenceCode | string | Document Sequence code<br/>*Example:* `"00001"` | Yes |
| documentType | string | Document Type, Stage from where fulfillment - PPS is requested. Value will QUOTATION or SALES_INVOICE<br/>*Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`<br/>*Example:* `"QUOTATION"` | Yes |
| shipmentPackages | [ [ShipmentPackageDto](#shipmentpackagedto) ] | Package details. | No |
| status | string | Shipment status.<br/>*Enum:* `"READY_TO_PICK"`, `"PICKING_IN_PROGRESS"`, `"PICKED"`, `"READY_TO_PACK"`, `"PACKING_IN_PROGRESS"`, `"PACKED"`, `"READY_TO_SHIP"`, `"SHIPPING_IN_PROGRESS"`, `"PARTIAL_SHIPPED"`, `"SHIPPED"` | No |
| warehouseName | string | Warehouse details.<br/>*Example:* `"Primary Warehouse"` | No |

### ShipListRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| boxTypes | [ string ] | box types. | No |
| carrierTypes | [ string ] | carrier types. | No |
| deliveryTypes | [ string ] | delivery types. | No |
| documentCode | string | Document code<br/>*Example:* `"00001"` | Yes |
| documentSequenceCode | string | Document Sequence code<br/>*Example:* `"00001"` | Yes |
| documentType | string | Document Type, Stage from where fulfillment - PPS is requested. Value will QUOTATION or SALES_INVOICE<br/>*Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`<br/>*Example:* `"QUOTATION"` | Yes |
| shipmentPackages | [ [ShipmentPackageDto](#shipmentpackagedto) ] | Package details. | No |
| status | string | Shipment status.<br/>*Enum:* `"READY_TO_PICK"`, `"PICKING_IN_PROGRESS"`, `"PICKED"`, `"READY_TO_PACK"`, `"PACKING_IN_PROGRESS"`, `"PACKED"`, `"READY_TO_SHIP"`, `"SHIPPING_IN_PROGRESS"`, `"PARTIAL_SHIPPED"`, `"SHIPPED"` | No |
| warehouseName | string | Warehouse details.<br/>*Example:* `"Primary Warehouse"` | No |

### ShipListResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| boxTypes | [ string ] | box types. | No |
| carrierTypes | [ string ] | carrier types. | No |
| deliveryTypes | [ string ] | delivery types. | No |
| documentCode | string | Document code<br/>*Example:* `"00001"` | Yes |
| documentSequenceCode | string | Document Sequence code<br/>*Example:* `"00001"` | Yes |
| documentType | string | Document Type, Stage from where fulfillment - PPS is requested. Value will QUOTATION or SALES_INVOICE<br/>*Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`<br/>*Example:* `"QUOTATION"` | Yes |
| shipmentPackages | [ [ShipmentPackageDto](#shipmentpackagedto) ] | Package details. | No |
| status | string | Shipment status.<br/>*Enum:* `"READY_TO_PICK"`, `"PICKING_IN_PROGRESS"`, `"PICKED"`, `"READY_TO_PACK"`, `"PACKING_IN_PROGRESS"`, `"PACKED"`, `"READY_TO_SHIP"`, `"SHIPPING_IN_PROGRESS"`, `"PARTIAL_SHIPPED"`, `"SHIPPED"` | No |
| warehouseName | string | Warehouse details.<br/>*Example:* `"Primary Warehouse"` | No |

### ShipmentDocumentDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string | Document code<br/>*Example:* `"00001"` | Yes |
| documentDate | dateTime | Document date<br/>*Example:* `"25-10-2019"` | No |
| documentSequenceCode | string | Document Sequence code<br/>*Example:* `"00001"` | Yes |
| documentType | string | Document Type, Stage from where fulfillment - PPS is requested. Value will QUOTATION or SALES_INVOICE<br/>*Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`<br/>*Example:* `"QUOTATION"` | Yes |
| id | long | ID<br/>*Example:* `2` | No |
| ppsDocumentItems | [ [ShipmentDocumentItemDto](#shipmentdocumentitemdto) ] | PPS-Document item details | No |
| shipByDate | dateTime | Ship by date<br/>*Example:* `"25-10-2019"` | No |
| shipmentPackages | [ [ShipmentPackageDto](#shipmentpackagedto) ] | Package details. | No |
| status | string | PPS-Document status<br/>*Enum:* `"READY_TO_PICK"`, `"PICKING_IN_PROGRESS"`, `"PICKED"`, `"READY_TO_PACK"`, `"PACKING_IN_PROGRESS"`, `"PACKED"`, `"READY_TO_SHIP"`, `"SHIPPING_IN_PROGRESS"`, `"PARTIAL_SHIPPED"`, `"SHIPPED"`<br/>*Example:* `"PICKED"` | No |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-0000001"` | No |

### ShipmentDocumentItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQuantity | number | Total available item quantity.<br/>*Example:* `10` | No |
| barcode | string | barcode of product<br/>*Example:* `271231628` | No |
| documentCode | string | Document code<br/>*Example:* `"00001"` | Yes |
| documentType | string | Document Type, Stage from where fulfillment - PPS is requested. Value will QUOTATION or SALES_INVOICE<br/>*Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`<br/>*Example:* `"QUOTATION"` | Yes |
| id | long | ID<br/>*Example:* `2` | No |
| insufficientQuantity | boolean | Flag to tell whether inventory have sufficient quantity or not.<br/>*Example:* `false` | No |
| itemCode | string | Document Item code<br/>*Example:* `"SII-000001"` | Yes |
| itemDescription | string | Item Description.<br/>*Example:* `"Cotton T-Shirt - Dark Blue/Large"` | No |
| itemId | long | Document Item id<br/>*Example:* `154` | Yes |
| itemName | string | Item name.<br/>*Example:* `"Cotton T-Shirt - Dark Blue/Large"` | No |
| pickedQuantity | number | Total quantity picked for item.<br/>*Example:* `10` | No |
| productCode | string | Product code<br/>*Example:* `"P00001"` | Yes |
| productDocumentSequenceCode | string | Product Document Sequence Code<br/>*Example:* `"P-0000001"` | Yes |
| quantity | number | Ordered item quantity.<br/>*Example:* `10` | No |
| status | string | PPS-Document-item status<br/>*Enum:* `"READY_TO_PICK"`, `"PICKING_IN_PROGRESS"`, `"PICKED"`, `"READY_TO_PACK"`, `"PACKING_IN_PROGRESS"`, `"PACKED"`, `"READY_TO_SHIP"`, `"SHIPPING_IN_PROGRESS"`, `"PARTIAL_SHIPPED"`, `"SHIPPED"`<br/>*Example:* `"PICKED"` | No |
| warehouse | [WarehouseDto](#warehousedto) | Warehouse details. | No |
| warehouseInventoryPPSData | [ [WarehouseInventoryPPSData](#warehouseinventoryppsdata) ] | Inventory Warehouse data | No |

### ShipmentDocumentStatusDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string | Document code<br/>*Example:* `"00001"` | Yes |
| documentSequenceCode | string | Document Sequence code<br/>*Example:* `"00001"` | Yes |
| documentType | string | Document Type, Stage from where fulfillment - PPS is requested. Value will QUOTATION or SALES_INVOICE<br/>*Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`<br/>*Example:* `"QUOTATION"` | Yes |
| processed | boolean |  | No |

### ShipmentPackageDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box | [BoxDto](#boxdto) | Box Details | No |
| boxWeight | string | box weight.<br/>*Example:* `"10 KG"` | No |
| capacity | number | Total capacity of defined package/carton.<br/>*Example:* `10` | No |
| carrier | string | Shipping carrier. Fedex, ups<br/>*Enum:* `"Fedex"`, `"UPS"`, `"USPS"`, `"DHL"`, `"Other"`<br/>*Example:* `"Fedex"` | No |
| carrierName | string | Shipping carrier. Fedex, ups<br/>*Example:* `"Fedex"` | No |
| containsFragileObject | boolean | Whether package contains fragile object.<br/>*Example:* `false` | No |
| deliveryType | string | Delivery type. Courier<br/>*Enum:* `"Courier"`, `"Pickup"`, `"DropOff"`<br/>*Example:* `"Courier"` | No |
| documentCode | string | Document code<br/>*Example:* `"00001"` | Yes |
| documentType | string | Document Type, Stage from where fulfillment - PPS is requested. Value will QUOTATION or SALES_INVOICE<br/>*Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`<br/>*Example:* `"QUOTATION"` | Yes |
| id | long | Package Id.<br/>*Example:* `1` | No |
| label | string | Label of package.<br/>*Example:* `"Carton"` | No |
| packedItemQuantities | [ [PackedItemQuantityDto](#packeditemquantitydto) ] | Package Item quantity. | No |
| packedQuantity | number | Quantity packed in this package.<br/>*Example:* `10` | No |
| sequence | integer | Carton or other package sequence.<br/>*Example:* `10` | No |
| status | string | Package status<br/>*Enum:* `"READY_TO_PICK"`, `"PICKING_IN_PROGRESS"`, `"PICKED"`, `"READY_TO_PACK"`, `"PACKING_IN_PROGRESS"`, `"PACKED"`, `"READY_TO_SHIP"`, `"SHIPPING_IN_PROGRESS"`, `"PARTIAL_SHIPPED"`, `"SHIPPED"`<br/>*Example:* `"PACKED"` | No |
| trackingNumber | string | Tracking number of shipment.<br/>*Example:* `"103313333#$"` | No |

### ShippingDocumentDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string | Document code<br/>*Example:* `"00001"` | Yes |
| documentSequenceCode | string | Document Sequence code<br/>*Example:* `"00001"` | Yes |
| documentType | string | Document Type, Stage from where fulfillment - PPS is requested. Value will QUOTATION or SALES_INVOICE<br/>*Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`<br/>*Example:* `"QUOTATION"` | Yes |
| status | string | Shipment status.<br/>*Enum:* `"READY_TO_PICK"`, `"PICKING_IN_PROGRESS"`, `"PICKED"`, `"READY_TO_PACK"`, `"PACKING_IN_PROGRESS"`, `"PACKED"`, `"READY_TO_SHIP"`, `"SHIPPING_IN_PROGRESS"`, `"PARTIAL_SHIPPED"`, `"SHIPPED"` | No |

### Sort

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| empty | boolean |  | No |
| sorted | boolean |  | No |
| unsorted | boolean |  | No |


### StockIssueItemDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) |  | No |
| documentUom | long |  | No |
| productName | string |  | No |
| productSequenceCode | string |  | No |
| productVariantCode | string |  | No |
| quantity | number |  | No |
| stockTransferWarehouseInventoryData | [StockTransferWarehouseInventoryData](#stocktransferwarehouseinventorydata) |  | No |
| uomQuantity | number |  | No |

### StockIssueRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| destWarehouseCode | string |  | No |
| destWarehouseName | string |  | No |
| documentSequenceCode | string | Stock Issue Code<br/>*Example:* `"0000001"` | No |
| formattedTransferDate | dateTime |  | No |
| memo | string | Memo<br/>*Example:* `"Note this"` | No |
| notes | string |  | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| srcWarehouseCode | string |  | No |
| srcWarehouseName | string |  | No |
| stockIssueDate | string | Stock Issue date<br/>*Example:* `"25-10-2019"` | Yes |
| stockIssueItems | [ [StockIssueItemDetails](#stockissueitemdetails) ] |  | No |
| stockRequestCode | string | Stock request code<br/>*Example:* `"STKRQ-001"` | No |
| transferDate | dateTime |  | No |
| transferDateString | string |  | No |

### StockIssueResponse

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

### StockQuantitiesRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| productVariantCodes | [ string ] |  | No |
| status | [ string ] |  | No |
| warehouseCode | string |  | No |

### StockQuantitiesResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| productStockInfo | [ [ProductStockInfo](#productstockinfo) ] |  | No |

### StockRequestItemDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| documentSequenceCode | string | Product Document Sequence Code<br/>*Example:* `"P-0000001"` | Yes |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| dstBinCode | string |  | No |
| dstBinName | string |  | No |
| dstRackCode | string |  | No |
| dstRackName | string |  | No |
| dstRowCode | string |  | No |
| dstRowName | string |  | No |
| dstWarehouseCode | string | Destination Warehouse Code<br/>*Example:* `"WH-0000001"` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| product | [ProductResponse](#productresponse) | Product Details<br/>*Example:* `"product"` | No |
| productCode | string | Product code<br/>*Example:* `"P00001"` | Yes |
| productQuantity | number | Product quantity<br/>*Example:* `2` | Yes |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |

### StockRequestRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| documentSequenceCode | string | Stock Request Code<br/>*Example:* `"0000001"` | No |
| dstWarehouseCode | string | Destination Warehouse Code<br/>*Example:* `"WH-0000001"` | No |
| memo | string | Memo<br/>*Example:* `"Note this"` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| stockRequestDate | string | Stock Request date<br/>*Example:* `"25-10-2019"` | Yes |
| stockRequestItems | [ [StockRequestItemDetails](#stockrequestitemdetails) ] | Stock Request item details | No |

### StockRequestResponse

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

### StockRequestUpdateApproveRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approveStatus | string | Approve Status<br/>*Example:* `"PENDING"` | No |

### StockTransferDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Stock transfer additional charges details | No |
| code | string |  | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| destWarehouseCode | string |  | No |
| destWarehouseName | string |  | No |
| documentType | string | *Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"` | No |
| formattedTransferDate | dateTime |  | No |
| id | long |  | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked Documents | No |
| notes | string |  | No |
| srcWarehouseCode | string |  | No |
| srcWarehouseName | string |  | No |
| stockTransferItems | [ [StockTransferItemDto](#stocktransferitemdto) ] |  | No |
| transferDate | dateTime |  | No |
| transferDateString | string |  | No |

### StockTransferItemDto

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

### StockTransferRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| notes | string |  | No |

### StockTransferWarehouseInventoryData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingData | [ [AdvancedTrackingStockTransferDto](#advancedtrackingstocktransferdto) ] | Advanced tracking to stock transfer list | No |
| advancedTrackingType | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| destBinCode | string |  | No |
| destRackCode | string |  | No |
| destRowCode | string |  | No |
| destWarehouseCode | string | Warehouse Code<br/>*Example:* `"WH-0000001"` | No |
| destWarehouseName | string | Warehouse Code<br/>*Example:* `"WH-0000001"` | No |
| quantity | number | Warehouse Code<br/>*Example:* `1` | No |
| srcBinCode | string |  | No |
| srcRackCode | string |  | No |
| srcRowCode | string |  | No |
| srcWarehouseCode | string | Warehouse Code<br/>*Example:* `"WH-0000001"` | No |
| srcWarehouseName | string | Warehouse Code<br/>*Example:* `"WH-0000001"` | No |

### TarifCodeMalaysiaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string | TARIFF code<br/>*Example:* `1234` | No |
| description | string | Description of HSN code<br/>*Example:* `"Cigar and cheroots"` | No |
| exemption | boolean | Whether Product is Tax Exempted<br/>*Example:* `true` | No |
| gstRate | number | GST tax percent<br/>*Example:* `28` | No |

### TariffAndServiceCode

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| serviceCodes | [ [ServiceTypeMalaysiaDto](#servicetypemalaysiadto) ] |  | No |
| tariffCodes | [ [TarifCodeMalaysiaDto](#tarifcodemalaysiadto) ] |  | No |

### TdsNatureOfPaymentIndia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Active status<br/>*Example:* `true` | No |
| deleted | boolean | Delete status<br/>*Example:* `true` | No |
| id | long |  | No |
| natureOfPayment | string | Nature of Income Payment<br/>*Example:* `"Interest on Securities"` | No |
| sectionCode | string | TDS section code<br/>*Example:* `193` | No |

### TdsNatureOfPaymentIndiaRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long |  | No |
| natureOfPayment | string | Nature of Income Payment<br/>*Example:* `1234` | No |
| sectionCode | string | TDS section code<br/>*Example:* `193` | No |

### TemplateParameterDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| parameterId | long | Template Parameter Id<br/>*Example:* `1` | No |
| parameterName | string | Template Parameter name | No |
| parameterValue | string | Template Parameter value<br/>*Example:* `12` | No |
| templateId | long |  | No |

### UOMDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Is active or not<br/>*Example:* `true` | No |
| deleted | boolean | Is deleted or not<br/>*Example:* `false` | No |
| description | string | UOM description<br/>*Example:* `"UOM to measure weight"` | No |
| id | long | UOM Id<br/>*Example:* `1` | No |
| isSystemGenerated | boolean | Flag to specify if the UOM is system or user generated<br/>*Example:* `false` | No |
| name | string | UOM name<br/>*Example:* `"LB"` | No |
| tenantId | long | Tenant Id<br/>*Example:* `1233` | No |

### UOMSchemaDefinitionDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| sinkConversionFactor | number | 10<br/>*Example:* `10` | No |
| sinkUOM | long | 2<br/>*Example:* `2` | No |
| sourceConversionFactor | number | 1<br/>*Example:* `1` | No |
| sourceUOM | long | 4<br/>*Example:* `4` | No |
| uid | string (uuid) | UOM Schema Definition Id<br/>*Example:* `1` | No |

### UOMSchemaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Is active or not<br/>*Example:* `true` | No |
| baseUOM | [UOMDto](#uomdto) | Base UOM<br/>*Example:* `"LB"` | No |
| id | long | UOM Id<br/>*Example:* `1` | No |
| name | string | UOM name<br/>*Example:* `"LB"` | No |
| uomSchemaDefinitions | [ [UOMSchemaDefinitionDto](#uomschemadefinitiondto) ] | UOM schema definitions | No |

### UOMSchemaRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Is active or not<br/>*Example:* `true` | No |
| baseUOM | long | Base UOM id<br/>*Example:* `2` | No |
| id | long | UOM Id<br/>*Example:* `1` | No |
| name | string | UOM name<br/>*Example:* `"LB"` | No |
| uomSchemaDefinitions | [ [UOMSchemaDefinitionDto](#uomschemadefinitiondto) ] | UOM schema definitions | No |

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

### VariantAttributeValidateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attributeId | long | Attribute ID<br/>*Example:* `1234` | No |
| attributeValue | string | Attribute Value<br/>*Example:* `"Blue"` | No |
| productId | long | Product ID<br/>*Example:* `1234` | No |

### VariantDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQuantity | double | Available Quantity<br/>*Example:* `100` | No |
| barcode | string | Barcode<br/>*Example:* `123123` | No |
| id | long | Product ID<br/>*Example:* `1234` | No |
| openingQuantity | double | Opening Quantity<br/>*Example:* `1` | No |
| openingValuation | double | Opening Value<br/>*Example:* `100` | No |
| pid | string | Product Code<br/>*Example:* `"P-00002"` | No |
| reorderLevel | long | Reorder Level<br/>*Example:* `100` | No |
| reorderQuantity | long | reorder Quantity<br/>*Example:* `100` | No |
| reorderVendorCode | string | Reorder contact code<br/>*Example:* `100` | No |
| salesPrice | double | Sales Price<br/>*Example:* `10.9` | No |
| variantAttributes | object |  | No |
| variantName | string | Variant Name<br/>*Example:* `"T-Shirt - Black/L/Wool"` | No |
| variantNumber | string | Variant Number<br/>*Example:* `"P000011-BLW"` | No |

### VariantsCreateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| masterProductId | long | Master Product ID<br/>*Example:* `1234` | No |
| variants | [ [VariantDetails](#variantdetails) ] | Variant Details | No |

### VariantsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| invalidBarCodes | [ integer ] |  | No |
| invalidVariantCodes | [ integer ] |  | No |
| masterProductId | long | Master Product ID<br/>*Example:* `1234` | No |
| responseCode | integer |  | No |
| variants | [ [VariantDetails](#variantdetails) ] | Variant Details | No |

### WHProductResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| totalWarehouseCount | integer |  | No |
| warehouses | [ [WarehouseShortInfo](#warehouseshortinfo) ] |  | No |

### WIPConsumptionProductionCostDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account code<br/>*Example:* `"A-000001"` | No |
| costAmount | number | Component Cost, Additional Cost, SCRAP / COPRODUCT Cost etc<br/>*Example:* `"Component Cost"` | No |
| costType | string | Component Cost, Additional Cost, SCRAP / COPRODUCT Cost etc<br/>*Example:* `"Component Cost"` | No |
| productCode | string | Product code<br/>*Example:* `"P-000001"` | No |

### WIPConsumptionProductionSummaryDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTracking | string | Tracking type of product<br/>*Example:* `"NONE"` | No |
| allocatedQuantity | number | Allocated Quantity of product<br/>*Example:* `10.5` | No |
| bomProductConfiguration | [ [WIPConsumptionProductionSummaryDto](#wipconsumptionproductionsummarydto) ] | Bom Assembly Details | Yes |
| consumedQuantity | number | Consumed Quantity of product<br/>*Example:* `10.5` | No |
| description | string | Description of product<br/>*Example:* `"Product"` | No |
| pid | string | pid<br/>*Example:* `"P-0000001"` | Yes |
| produceProductType | string | Produce Product type<br/>*Enum:* `"NONE"`, `"SCRAP"`, `"COPRODUCT"`<br/>*Example:* `"SCRAP"` | Yes |
| producedQuantity | number | Produced Quantity of product<br/>*Example:* `10.5` | No |
| productCode | string | Product Code<br/>*Example:* `"P-0000001"` | Yes |
| productId | long | Product Id<br/>*Example:* `1234` | Yes |
| productName | string | Product Name<br/>*Example:* `"Computer"` | Yes |
| productSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] | substitute details | No |
| productType | string | Tracking type of product<br/>*Example:* `"NONE"` | No |
| purchasePrice | double | Purchase Price of Product<br/>*Example:* `10.5` | No |
| requiredQuantity | number | Required Quantity<br/>*Example:* `1` | Yes |
| salesPrice | double | Purchase Price of Product<br/>*Example:* `10.5` | No |
| uom | long | uom Id<br/>*Example:* `2` | Yes |
| wastageQuantity | number | Wastage Quantity of product<br/>*Example:* `10.5` | No |
| wipProcessTypes | string | WIP Process Types e.g. Consumption, Production etc<br/>*Enum:* `"PRODUCTION"`, `"CONSUMPTION"`, `"WASTAGE"`, `"SCRAP"`, `"CO_PRODUCT"`<br/>*Example:* `"NONE"` | No |

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

### WarehouseBinInfoResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| name | string |  | No |
| rackCode | string |  | No |
| rowCode | string |  | No |

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

### WarehouseRackInfoResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| name | string |  | No |
| rowCode | string |  | No |

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

### WarehouseRowInfoResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| name | string |  | No |

### WarehouseShortInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Warehouse Status.<br/>*Example:* `true` | No |
| advancedTrackingMeta | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] | Advanced Tracking Details | No |
| assignUserIds | [ long ] |  | No |
| code | string | warehouse specific unique code<br/>*Example:* `"WH-0000001"` | No |
| id | long | Warehouse Id<br/>*Example:* `1` | No |
| location | [LocationDto](#locationdto) | Location details | No |
| name | string | Warehouse Name.<br/>*Example:* `"Warehouse-1"` | No |
| primary | boolean | flag to determine if warehouse is primary<br/>*Example:* `false` | No |
| productAdvancedTrackingMeta | object | Product Code and Available quantity Map. | No |
| productAvailableQuantity | object | Product Code and Available quantity Map. | No |
| productReservedQuantity | object | Product Code and Reserved quantity Map. | No |
| rowRackBinProductAvailableQuantityDtos | [ [RowRackBinProductAvailableQuantityDto](#rowrackbinproductavailablequantitydto) ] | Row Rack Bin available quantity | No |
| warehouseBinInfos | [ [WarehouseBinInfoResponse](#warehousebininforesponse) ] | Warehouse bin Infos | No |
| warehouseRackInfos | [ [WarehouseRackInfoResponse](#warehouserackinforesponse) ] | Warehouse Rack Infos | No |
| warehouseRowInfos | [ [WarehouseRowInfoResponse](#warehouserowinforesponse) ] | Warehouse Row Infos | No |

### WorkOrderInventoryItemsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTracking | string | Tracking type of product<br/>*Example:* `"NONE"` | No |
| costPerUnit | number | Cost Per Unit<br/>*Example:* `100` | Yes |
| documentCode | string | Document Code<br/>*Example:* `"BOM-0000001"` | Yes |
| documentItemCode | string | Document Code<br/>*Example:* `"BOM-0000001"` | Yes |
| documentSequenceCode | string | Document Code<br/>*Example:* `"BOM-0000001"` | Yes |
| pid | string | Product Id<br/>*Example:* `"P00001"` | Yes |
| produceProductType | string | Produce Product type<br/>*Enum:* `"NONE"`, `"SCRAP"`, `"COPRODUCT"`<br/>*Example:* `"SCRAP"` | Yes |
| productCode | string | Product code<br/>*Example:* `"P00001"` | Yes |
| productId | long | Product Id<br/>*Example:* `1` | Yes |
| productName | string | Product Name<br/>*Example:* `"Hard Disk"` | Yes |
| totalQuantity | number | Quantity Total<br/>*Example:* `1` | Yes |
| transactionRefCode | string | Transaction Ref code<br/>*Example:* `"BI-0000001"` | Yes |
| warehouseInventoryData | [ [WarehouseInventoryData](#warehouseinventorydata) ] | Bom Assembly Details | Yes |

#### WorkOrderInventoryRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalChargeAmount | number | additional charge amount <br/>*Example:* `true` | No |
| advancedTracking | string | Tracking type of product<br/>*Example:* `"NONE"` | No |
| bomMetaCode | string | BOM Meta Code<br/>*Example:* `"0000001"` | No |
| costPerUnit | number | Cost per Unit<br/>*Example:* `120` | Yes |
| includeByProductCost | boolean | Include By product cost<br/>*Example:* `true` | No |
| jobWorkOutCost | number | job work out cost<br/>*Example:* `true` | No |
| manufactureQuantity | number | Manufacturing quantity <br/>*Example:* `2` | No |
| memo | string | Memo<br/>*Example:* `"Computer Memo"` | Yes |
| operationCostDetails | [ [OperationCost](#operationcost) ] | Operation Cost Details | Yes |
| pid | string | pid<br/>*Example:* `"P-0000001"` | Yes |
| productCode | string | Product Code<br/>*Example:* `"P-0000001"` | Yes |
| productId | long | Product Id<br/>*Example:* `1234` | Yes |
| productName | string | Product Name<br/>*Example:* `"Computer"` | Yes |
| warehouseInventoryData | [ [WarehouseInventoryData](#warehouseinventorydata) ] | Work Order Details | Yes |
| workOrderInventoryItemsRequests | [ [WorkOrderInventoryItemsRequest](#workorderinventoryitemsrequest) ] | Work Order Details | Yes |
| workorderCode | string | Work Order Code<br/>*Example:* `"WO-00001"` | Yes |
| workorderDate | string | Work Order Date<br/>*Example:* `"01-07-2021"` | Yes |
| workorderDocumentSequenceCode | string | Work Order Doc Seq Code<br/>*Example:* `"WO-000001"` | Yes |