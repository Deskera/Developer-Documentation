---
id: orderapi
title: Order APIs
sidebar_label: Order
---
An order allows you to [buy](https://www.deskera.com/sg/books/purchase-orders/)/sell products or services. Once the order is completed, you will be able to convert it into bills upon confirmation or track the receipts directly.

`OrderDto` helps to create order, update a particular order, retrieve order by filter criteria, or get a list of all orders.

More about [Order API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-ccdb5953-9034-4cd0-b62e-7efa7a099d66?ctx=documentation)

## API
---

### Search Order
Get orders by filter criteria. [More about search order](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-ccdb5953-9034-4cd0-b62e-7efa7a099d66?ctx=documentation)

##### Description:

- Allows you to retrieve a list of all orders.
- Allows you to retrieve specific order based on it's filter criteria.

#### GET
#### Orders purchase
[More about search order](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-ccdb5953-9034-4cd0-b62e-7efa7a099d66?ctx=documentation)

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
| 200 | Purchase orders have been fetched successfully. | [PurchaseOrderResponse](#purchaseorderresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Create Purchase Order

Create a new order. [More about create order](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-ccdb5953-9034-4cd0-b62e-7efa7a099d66?ctx=documentation)

##### Description:

- Allows you to create new order.

#### POST
#### Orders purchase
[More about create order](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-ccdb5953-9034-4cd0-b62e-7efa7a099d66?ctx=documentation)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| purchaseOrderRequest | body | purchaseOrderRequest | Yes | [PurchaseOrderRequest](#purchaseorderrequest) |

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

Update order information. [More about update order](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-ccdb5953-9034-4cd0-b62e-7efa7a099d66?ctx=documentation)

##### Description:

- Allows you to update a specific order information.

#### PUT
#### Orders purchase/{id}
[More about update order](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-ccdb5953-9034-4cd0-b62e-7efa7a099d66?ctx=documentation)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| purchaseOrderRequest | body | purchaseOrderRequest | Yes | [PurchaseOrderRequest](#purchaseorderrequest) |


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

Get order by code. [More about retrieve order](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-ccdb5953-9034-4cd0-b62e-7efa7a099d66?ctx=documentation)
##### Description:

- Allows you to retrieve an existing order details by it's code.

#### GET
#### Orders purchase/code/{code}
[More about retrieve order](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-ccdb5953-9034-4cd0-b62e-7efa7a099d66?ctx=documentation)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

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
---
### Delete Purchase Order
#### DELETE
#### Orders purchase
##### Summary

Delete multiple purchase orders

##### Description

API to delete multiple purchase orders

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Purchase order deletion successful | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No purchase order with provided id's found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
## job-work-out-order-controller
Job Work Out Order APIs

### Orders jobworkout

#### GET
##### Summary

Search Job Work Out orders.

##### Description

API to search Job Work Out orders.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| fetchAttachmentDetails | query | fetchAttachmentDetails | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Job Work Out orders have been fetched successfully. | [JobWorkOutOrderResponse](#jobworkoutorderresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create Job Work Out order

##### Description

API to create Job Work Out order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| jobWorkOutOrderRequest | body | jobWorkOutOrderRequest | Yes | [JobWorkOutOrderRequest](#jobworkoutorderrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [JobWorkOutOrderResponse](#jobworkoutorderresponse) |
| 201 | Job Work Out order has been created successfully. | [JobWorkOutOrderResponse](#jobworkoutorderresponse) |
| 400 | Job Work Out order could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update Job Work Out order billed status

##### Description

API to update Job Work Out order billed status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orderCode | query | orderCode | Yes | string |
| purchaseOrderFields | body | purchaseOrderFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Billed status for Job Work Out order updated successfully. | [PurchaseOrderResponse](#purchaseorderresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Job Work Out Order with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders jobworkout/bulk-details

#### POST
##### Summary

Get Job Work Out order by list of codes

##### Description

Get Job Work Out order by list of codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [JobWorkOutOrderResponse](#jobworkoutorderresponse) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders jobworkout/code/{code}/details

#### GET
##### Summary

Job Work Out order details by codes

##### Description

Job Work Out order details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [JobWorkOutOrderInformation](#jobworkoutorderinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders jobworkout/code/{code}/detailsbyworkorder

#### GET
##### Summary

Job Work Out order details by Work order codes

##### Description

Job Work Out order details by Work order codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [JobWorkOutOrderInformation](#jobworkoutorderinformation) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders jobworkout/linked-docs/product-codes

#### POST
##### Summary

Get products by code

##### Description

API to Get products by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product information has been fetched successfully. | string |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Products not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders jobworkout/product-used-bom-codes

#### POST
##### Summary

Get used bom meta code for product

##### Description

API to Get used bom meta code for product.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCode | query | productCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bom meta code information has been fetched successfully. | string |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Products not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders jobworkout/status/{code}

#### PATCH
##### Summary

refreshOrderStatus

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders jobworkout/{code}

#### GET
##### Summary

Get Job Work Out order by id.

##### Description

API to fetch Job Work Out order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Job Work Out order information has been fetched successfully. | [JobWorkOutOrderResponse](#jobworkoutorderresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Job Work Out order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders jobworkout/{id}

#### PUT
##### Summary

Update Job Work Out order.

##### Description

API to update existing Job Work Out order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| jobWorkOutOrderRequest | body | jobWorkOutOrderRequest | Yes | [JobWorkOutOrderRequest](#jobworkoutorderrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Job Work Out Order has been updated successfully. | [JobWorkOutOrderResponse](#jobworkoutorderresponse) |
| 201 | Created |  |
| 400 | Purchase order draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Job Work Out Order with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Job Work Out order by id.

##### Description

API to delete Job Work Out order details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Job Work Out order has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Job Work Out order not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## job-work-out-order-india-controller
Job work out Order India APIs

### Orders jobworkout/in

#### GET
##### Summary

Search Job Work Out orders.

##### Description

API to search Job Work Out orders.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| fetchAttachmentDetails | query | fetchAttachmentDetails | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Job Work Out orders have been fetched successfully. | [JobWorkOutOrderIndiaResponse](#jobworkoutorderindiaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create Job Work Out order

##### Description

API to create Job Work Out order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| jobWorkOutOrderIndiaRequest | body | jobWorkOutOrderIndiaRequest | Yes | [JobWorkOutOrderIndiaRequest](#jobworkoutorderindiarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [JobWorkOutOrderIndiaResponse](#jobworkoutorderindiaresponse) |
| 201 | Job Work Out order has been created successfully. | [JobWorkOutOrderIndiaResponse](#jobworkoutorderindiaresponse) |
| 400 | Job Work Out order could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders jobworkout/in/{code}

#### GET
##### Summary

Get Job Work Out order by id.

##### Description

API to fetch Job Work Out order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Job Work Out order information has been fetched successfully. | [JobWorkOutOrderIndiaResponse](#jobworkoutorderindiaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Job Work Out order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders jobworkout/in/{id}

#### PUT
##### Summary

Update Job Work Out order.

##### Description

API to update existing Job Work Out order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| jobWorkOutOrderIndiaRequest | body | jobWorkOutOrderIndiaRequest | Yes | [JobWorkOutOrderIndiaRequest](#jobworkoutorderindiarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Job Work Out Order has been updated successfully. | [JobWorkOutOrderIndiaResponse](#jobworkoutorderindiaresponse) |
| 201 | Created |  |
| 400 | Purchase order draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Job Work Out Order with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Job Work Out order by id.

##### Description

API to delete Job Work Out order details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Job Work Out order has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Job Work Out order not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-order-controller
Purchase Order APIs

#### PATCH
#### Orders purchase
##### Summary

Update purchase order billed status

##### Description

API to update purchase order billed status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orderCode | query | orderCode | Yes | string |
| purchaseOrderFields | body | purchaseOrderFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Billed status for purchase order updated successfully. | [PurchaseOrderResponse](#purchaseorderresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/approval-status

#### POST
##### Summary

Update approval status

##### Description

API to update approval status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| approvalStatusRequestDtoList | body | approvalStatusRequestDtoList | Yes | [ [ApprovalStatusRequestDto](#approvalstatusrequestdto) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Approval status for Sales documents have been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/asset-group-count/{id}

#### GET
##### Summary

Get asset group used count.

##### Description

Api to get asset group used count.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Asset group used count fetched successfully. | integer |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Asset group used count not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Delete Purchase Order in Bulk
#### DELETE
#### Orders purchase/bulk-delete
##### Summary

Bulk Delete orders.

##### Description

API to Bulk Delete order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [BulkDeleteOrderResponse](#bulkdeleteorderresponse) ] |
| 204 | Order has been deleted successfully. | [ [BulkDeleteOrderResponse](#bulkdeleteorderresponse) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Get Purchase Order Details in Bulk

#### POST
#### Orders purchase/bulk-details
##### Summary

Purchase order details by  list of codes

##### Description

Purchase order details by list of codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [PurchaseOrderInformation](#purchaseorderinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/bulk-details-by-seq

#### POST
##### Summary

Purchase order details by sequence codes

##### Description

Purchase order details by sequence codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| seqCodes | body | seqCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [PurchaseOrderInformation](#purchaseorderinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/bulk-email

#### POST
##### Summary

Send order/bill email.

##### Description

Send order/bill as email.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| sendOrderEmails | body | sendOrderEmails | Yes | [ [SendOrderEmailDto](#sendorderemaildto) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Emails sent successfully. |
| 201 | Created |
| 400 | Unable to send emails. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/bulk-update

#### PATCH
##### Summary

Bulk Update Order Attribute

##### Description

API to Bulk Update Order Attribute

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseOrderFields | body | purchaseOrderFields | Yes | [ [Map«string,string»](#map«string,string») ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [ [BulkUpdateOrderResponse](#bulkupdateorderresponse) ] |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Retrieve Order

#### GET
##### Summary

Purchase order details by codes

##### Description

Purchase order details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderInformation](#purchaseorderinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/create-recurring

#### POST
##### Summary

Create a recurring purchase order

##### Description

API to create a recurring purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| event | body | event | Yes | [RecurringJobEvent](#recurringjobevent) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Recurring purchase order created successfully |
| 400 | Error while creating recurring purchase order |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/custom-fields

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

### Orders purchase/demo/{tenantId}

#### POST
##### Summary

Create demo orders.

##### Description

API to create demo orders.

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

### Orders purchase/draft/trigger

#### POST
##### Summary

Create approval status trigger

##### Description

API to reate approval status trigger

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| triggerKafkaRequestDto | body | triggerKafkaRequestDto | Yes | [TriggerKafkaRequestDto](#triggerkafkarequestdto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Trigger created for approval status |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/drop-ship

#### PUT
##### Summary

Update goods receipt status for order.

##### Description

API to update goods receipt status for order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |
| eventType | query | eventType | No | string |
| isDropShip | query | isDropShip | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Order attributes has been updated successfully. | [PurchaseOrderInformation](#purchaseorderinformation) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Order with given code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/email

#### POST
##### Summary

Send order as email

##### Description

API to send order as email

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| sendOrderEmail | body | sendOrderEmail | Yes | [SendOrderEmailDto](#sendorderemaildto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Email sent successfully. |
| 201 | Created |
| 400 | Unable to send email. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/export

#### GET
##### Summary

Get purchase orders

##### Description

Get Purchase orders

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| 200 | OK | [ [OrderReportInfo](#orderreportinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/import

#### POST
##### Summary

Create multiple purchase orders via import

##### Description

API to create purchase orders via import.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseOrderRequests | body | purchaseOrderRequests | Yes | [ [PurchaseOrderRequest](#purchaseorderrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkApiResponse](#bulkapiresponse) |
| 201 | Sales invoice has been created successfully. | [BulkApiResponse](#bulkapiresponse) |
| 400 | Sales invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/incomingStockQuantities

#### POST
##### Summary

Fetch incoming stock quantities for orders and partially-fulfilled purchase invoices

##### Description

API to fetch incoming stock quantities for orders and partially-fulfilled purchase invoices.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [StockQuantitiesRequest](#stockquantitiesrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched incoming stock quantities for given list of product-codes successfully. | [StockQuantitiesResponse](#stockquantitiesresponse) |
| 201 | Created |  |
| 400 | Fetching incoming stock quantities for given list of product-codes failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/linked-docs/product-codes

#### POST
##### Summary

Get products by code

##### Description

API to Get products by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product information has been fetched successfully. | string |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Products not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/product-in-out-qty

#### GET
##### Summary

Find order data for Product in out qty

##### Description

API to find order data for Product in out qty

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCode | query | productCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ProductInOutQty](#productinoutqty) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/receipt

#### GET
##### Summary

Fetch Goods receipts for documents

##### Description

API to Fetch Goods receipts for documents

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentCode | query | documentCode | Yes | string |
| documentType | query | documentType | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Goods receipts for documents fetched successfully. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/record-filter

#### POST
##### Summary

Create approval status trigger

##### Description

API to reate approval status trigger

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| filterRecord | body | filterRecord | Yes | [FilterRecord](#filterrecord) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Trigger created for approval status | boolean |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/report/count

#### POST
##### Summary

Get purchase order count for contacts

##### Description

API to fetch purchase order count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/report/overview

#### GET
##### Summary

Purchase report overview.

##### Description

API to fetch purchase report overview

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase orders overview report has been prepared. | [OrderOverviewReport](#orderoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/sequence

#### GET
##### Summary

Order Document Code

##### Description

API to get Order Document Code.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Order Document Code fetched successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Order Document Code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/set-recurring

#### POST
##### Summary

Set an purchase order to recurring

##### Description

API to set and purchase order to recurring.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| setRecurringDto | body | setRecurringDto | Yes | [SetRecurringDto](#setrecurringdto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | purchase order set to recur successfully |
| 201 | Created |
| 400 | Error while setting purchase order to recur |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/short-info/{code}

#### GET
##### Summary

Get purchase order Item details by codes

##### Description

API to fetch purchase order Item details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderResponse](#purchaseorderresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/status/{code}

#### PATCH
##### Summary

refreshOrderStatus

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/tax/count

#### POST
##### Summary

Get purchase order count for tax

##### Description

API to fetch purchase order count for tax

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| taxCodes | body | taxCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/unreceived-seq-codes

#### GET
##### Summary

Get Unfulfilled purchase order codes

##### Description

Get Unfulfilled purchase order codes

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unfulfilled purchase order codes have been fetched successfully. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/update/linkedDocument

#### POST
##### Summary

Update linked documents for PO.

##### Description

API to pdate linked documents for PO.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| linkedDocumentUpdateRequest | body | linkedDocumentUpdateRequest | Yes | [LinkedDocumentUpdateRequest](#linkeddocumentupdaterequest) |

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
| --------------- | ------ |
| Authorization | global |

### Orders purchase/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderResponse](#purchaseorderresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/{id}
#### DELETE
##### Summary

Delete purchase order by id.

##### Description

API to delete purchase order details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase order has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase order not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-order-uae-controller
Purchase Order UAE APIs

### Orders purchase/ae

#### GET
##### Summary

Search purchase orders.

##### Description

API to search purchase orders.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| 200 | Purchase orders have been fetched successfully. | [PurchaseOrderUaeResponse](#purchaseorderuaeresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create Purchase order

##### Description

API to create Purchase order

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseOrderUaeRequest | body | purchaseOrderUaeRequest | Yes | [PurchaseOrderUaeRequest](#purchaseorderuaerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderUaeResponse](#purchaseorderuaeresponse) |
| 201 | Purchase order has been created successfully. | [PurchaseOrderUaeResponse](#purchaseorderuaeresponse) |
| 400 | Purchase order could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete multiple purchase orders

##### Description

API to delete multiple purchase orders

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Purchase order deletion successful | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No purchase order with provided id's found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase order billed status

##### Description

API to update purchase order billed status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orderCode | query | orderCode | Yes | string |
| purchaseOrderFields | body | purchaseOrderFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Billed status for purchase order updated successfully. | [PurchaseOrderUaeResponse](#purchaseorderuaeresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ae/code/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get purchase order by id. | [PurchaseOrderUaeResponse](#purchaseorderuaeresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ae/report/count

#### POST
##### Summary

Get purchase order count for contacts

##### Description

API to fetch purchase order count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ae/report/overview

#### GET
##### Summary

Purchase report overview.

##### Description

API to fetch purchase report overview

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase orders overview report has been prepared. | [OrderOverviewReport](#orderoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ae/sequence

#### GET
##### Summary

Order Document Code

##### Description

API to get Order Document Code.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Order Document Code fetched successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Order Document Code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ae/short-info/{code}

#### GET
##### Summary

Get purchase order Item details by codes

##### Description

API to fetch purchase order Item details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderUaeResponse](#purchaseorderuaeresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ae/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderUaeResponse](#purchaseorderuaeresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ae/{id}

#### PUT
##### Summary

Update purchase order.

##### Description

API to update existing purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseOrderUaeRequest | body | purchaseOrderUaeRequest | Yes | [PurchaseOrderUaeRequest](#purchaseorderuaerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Order has been updated successfully. | [PurchaseOrderUaeResponse](#purchaseorderuaeresponse) |
| 201 | Created |  |
| 400 | Purchase order draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase order by id.

##### Description

API to delete purchase order details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase order has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase order not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-order-australia-controller
Purchase Order Australia APIs

### Orders purchase/au

#### GET
##### Summary

Search purchase orders.

##### Description

API to search purchase orders.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| 200 | Purchase orders have been fetched successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create Purchase order

##### Description

API to create Purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseOrderRequest | body | purchaseOrderRequest | Yes | [PurchaseOrderAustraliaRequest](#purchaseorderaustraliarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 201 | Purchase order has been created successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 400 | Purchase order could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete multiple purchase orders

##### Description

API to delete multiple purchase orders

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Purchase order deletion successful | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No purchase order with provided id's found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase order billed status

##### Description

API to update purchase order billed status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orderCode | query | orderCode | Yes | string |
| purchaseOrderFields | body | purchaseOrderFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Billed status for purchase order updated successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/au/code/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get purchase order by id. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/au/code/{code}/details

#### GET
##### Summary

Purchase order details by codes

##### Description

Purchase order details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderInformation](#purchaseorderinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/au/create-recurring

#### POST
##### Summary

Create a recurring purchase order

##### Description

API to create a recurring purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| event | body | event | Yes | [RecurringJobEvent](#recurringjobevent) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Recurring purchase order created successfully |
| 400 | Error while creating recurring purchase order |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/au/custom-fields

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

### Orders purchase/au/demo/{tenantId}

#### POST
##### Summary

Create demo orders.

##### Description

API to create demo orders.

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

### Orders purchase/au/export

#### GET
##### Summary

Get purchase orders

##### Description

Get Purchase orders

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [OrderReportInfo](#orderreportinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/au/report/count

#### POST
##### Summary

Get purchase order count for contacts

##### Description

API to fetch purchase order count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/au/report/overview

#### GET
##### Summary

Purchase report overview.

##### Description

API to fetch purchase report overview

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase orders overview report has been prepared. | [OrderOverviewReport](#orderoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/au/sequence

#### GET
##### Summary

Order Document Code

##### Description

API to get Order Document Code.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Order Document Code fetched successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Order Document Code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/au/set-recurring

#### POST
##### Summary

Set an purchase order to recurring

##### Description

API to set and purchase order to recurring.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| setRecurringDto | body | setRecurringDto | Yes | [SetRecurringDto](#setrecurringdto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | purchase order set to recur successfully |
| 201 | Created |
| 400 | Error while setting purchase order to recur |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/au/short-info/{code}

#### GET
##### Summary

Get purchase order Item details by codes

##### Description

API to fetch purchase order Item details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/au/tax/count

#### POST
##### Summary

Get purchase order count for tax

##### Description

API to fetch purchase order count for tax

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| taxCodes | body | taxCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/au/update/linkedDocument

#### POST
##### Summary

Update linked documents for PO.

##### Description

API to pdate linked documents for PO.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| linkedDocumentUpdateRequest | body | linkedDocumentUpdateRequest | Yes | [LinkedDocumentUpdateRequest](#linkeddocumentupdaterequest) |

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
| --------------- | ------ |
| Authorization | global |

### Orders purchase/au/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/au/{id}

#### PUT
##### Summary

Update purchase order.

##### Description

API to update existing purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseOrderRequest | body | purchaseOrderRequest | Yes | [PurchaseOrderAustraliaRequest](#purchaseorderaustraliarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Order has been updated successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 201 | Created |  |
| 400 | Purchase order draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase order by id.

##### Description

API to delete purchase order details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase order has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase order not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-order-belgium-controller
Purchase Order APIs for Belgium

### Orders purchase/be

#### GET
##### Summary

Search purchase orders.

##### Description

API to search purchase orders.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| 200 | Purchase orders have been fetched successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create Purchase order

##### Description

API to create Purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseOrderRequest | body | purchaseOrderRequest | Yes | [PurchaseOrderAustraliaRequest](#purchaseorderaustraliarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 201 | Purchase order has been created successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 400 | Purchase order could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete multiple purchase orders

##### Description

API to delete multiple purchase orders

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Purchase order deletion successful | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No purchase order with provided id's found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase order billed status

##### Description

API to update purchase order billed status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orderCode | query | orderCode | Yes | string |
| purchaseOrderFields | body | purchaseOrderFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Billed status for purchase order updated successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/be/code/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get purchase order by id. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/be/code/{code}/details

#### GET
##### Summary

Purchase order details by codes

##### Description

Purchase order details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderInformation](#purchaseorderinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/be/create-recurring

#### POST
##### Summary

Create a recurring purchase order

##### Description

API to create a recurring purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| event | body | event | Yes | [RecurringJobEvent](#recurringjobevent) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Recurring purchase order created successfully |
| 400 | Error while creating recurring purchase order |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/be/custom-fields

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

### Orders purchase/be/demo/{tenantId}

#### POST
##### Summary

Create demo orders.

##### Description

API to create demo orders.

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

### Orders purchase/be/export

#### GET
##### Summary

Get purchase orders

##### Description

Get Purchase orders

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [OrderReportInfo](#orderreportinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/be/report/count

#### POST
##### Summary

Get purchase order count for contacts

##### Description

API to fetch purchase order count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/be/report/overview

#### GET
##### Summary

Purchase report overview.

##### Description

API to fetch purchase report overview

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase orders overview report has been prepared. | [OrderOverviewReport](#orderoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/be/sequence

#### GET
##### Summary

Order Document Code

##### Description

API to get Order Document Code.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Order Document Code fetched successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Order Document Code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/be/set-recurring

#### POST
##### Summary

Set an purchase order to recurring

##### Description

API to set and purchase order to recurring.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| setRecurringDto | body | setRecurringDto | Yes | [SetRecurringDto](#setrecurringdto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | purchase order set to recur successfully |
| 201 | Created |
| 400 | Error while setting purchase order to recur |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/be/short-info/{code}

#### GET
##### Summary

Get purchase order Item details by codes

##### Description

API to fetch purchase order Item details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/be/tax/count

#### POST
##### Summary

Get purchase order count for tax

##### Description

API to fetch purchase order count for tax

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| taxCodes | body | taxCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/be/update/linkedDocument

#### POST
##### Summary

Update linked documents for PO.

##### Description

API to pdate linked documents for PO.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| linkedDocumentUpdateRequest | body | linkedDocumentUpdateRequest | Yes | [LinkedDocumentUpdateRequest](#linkeddocumentupdaterequest) |

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
| --------------- | ------ |
| Authorization | global |

### Orders purchase/be/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/be/{id}

#### PUT
##### Summary

Update purchase order.

##### Description

API to update existing purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseOrderRequest | body | purchaseOrderRequest | Yes | [PurchaseOrderAustraliaRequest](#purchaseorderaustraliarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Order has been updated successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 201 | Created |  |
| 400 | Purchase order draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase order by id.

##### Description

API to delete purchase order details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase order has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase order not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-order-canada-controller
Purchase Order Canada APIs

### Orders purchase/ca

#### GET
##### Summary

Search purchase orders.

##### Description

API to search purchase orders.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| 200 | Purchase orders have been fetched successfully. | [PurchaseOrderCanadaResponse](#purchaseordercanadaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create Purchase order

##### Description

API to create Purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseOrderRequest | body | purchaseOrderRequest | Yes | [PurchaseOrderCanadaRequest](#purchaseordercanadarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderCanadaResponse](#purchaseordercanadaresponse) |
| 201 | Purchase order has been created successfully. | [PurchaseOrderCanadaResponse](#purchaseordercanadaresponse) |
| 400 | Purchase order could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete multiple purchase orders

##### Description

API to delete multiple purchase orders

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Purchase order deletion successful | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No purchase order with provided id's found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase order billed status

##### Description

API to update purchase order billed status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orderCode | query | orderCode | Yes | string |
| purchaseOrderFields | body | purchaseOrderFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Billed status for purchase order updated successfully. | [PurchaseOrderCanadaResponse](#purchaseordercanadaresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ca/code/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get purchase order by id. | [PurchaseOrderCanadaResponse](#purchaseordercanadaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ca/code/{code}/details

#### GET
##### Summary

Purchase order details by codes

##### Description

Purchase order details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderInformation](#purchaseorderinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ca/create-recurring

#### POST
##### Summary

Create a recurring purchase order

##### Description

API to create a recurring purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| event | body | event | Yes | [RecurringJobEvent](#recurringjobevent) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Recurring purchase order created successfully |
| 400 | Error while creating recurring purchase order |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ca/custom-fields

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

### Orders purchase/ca/demo/{tenantId}

#### POST
##### Summary

Create demo orders.

##### Description

API to create demo orders.

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

### Orders purchase/ca/export

#### GET
##### Summary

Get purchase orders

##### Description

Get Purchase orders

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [OrderReportInfo](#orderreportinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ca/report/count

#### POST
##### Summary

Get purchase order count for contacts

##### Description

API to fetch purchase order count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ca/report/overview

#### GET
##### Summary

Purchase report overview.

##### Description

API to fetch purchase report overview

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase orders overview report has been prepared. | [OrderOverviewReport](#orderoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ca/sequence

#### GET
##### Summary

Order Document Code

##### Description

API to get Order Document Code.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Order Document Code fetched successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Order Document Code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ca/set-recurring

#### POST
##### Summary

Set an purchase order to recurring

##### Description

API to set and purchase order to recurring.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| setRecurringDto | body | setRecurringDto | Yes | [SetRecurringDto](#setrecurringdto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | purchase order set to recur successfully |
| 201 | Created |
| 400 | Error while setting purchase order to recur |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ca/short-info/{code}

#### GET
##### Summary

Get purchase order Item details by codes

##### Description

API to fetch purchase order Item details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderCanadaResponse](#purchaseordercanadaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ca/tax/count

#### POST
##### Summary

Get purchase order count for tax

##### Description

API to fetch purchase order count for tax

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| taxCodes | body | taxCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ca/update/linkedDocument

#### POST
##### Summary

Update linked documents for PO.

##### Description

API to pdate linked documents for PO.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| linkedDocumentUpdateRequest | body | linkedDocumentUpdateRequest | Yes | [LinkedDocumentUpdateRequest](#linkeddocumentupdaterequest) |

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
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ca/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderCanadaResponse](#purchaseordercanadaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ca/{id}

#### PUT
##### Summary

Update purchase order.

##### Description

API to update existing purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseOrderRequest | body | purchaseOrderRequest | Yes | [PurchaseOrderCanadaRequest](#purchaseordercanadarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Order has been updated successfully. | [PurchaseOrderCanadaResponse](#purchaseordercanadaresponse) |
| 201 | Created |  |
| 400 | Purchase order draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase order by id.

##### Description

API to delete purchase order details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase order has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase order not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-order-germany-controller
Purchase Order Germany APIs

### Orders purchase/de

#### GET
##### Summary

Search purchase orders.

##### Description

API to search purchase orders.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| 200 | Purchase orders have been fetched successfully. | [PurchaseOrderDEResponse](#purchaseorderderesponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create Purchase order

##### Description

API to create Purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseOrderRequest | body | purchaseOrderRequest | Yes | [PurchaseOrderDERequest](#purchaseorderderequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderDEResponse](#purchaseorderderesponse) |
| 201 | Purchase order has been created successfully. | [PurchaseOrderDEResponse](#purchaseorderderesponse) |
| 400 | Purchase order could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete multiple purchase orders

##### Description

API to delete multiple purchase orders

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Purchase order deletion successful | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No purchase order with provided id's found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase order billed status

##### Description

API to update purchase order billed status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orderCode | query | orderCode | Yes | string |
| purchaseOrderFields | body | purchaseOrderFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Billed status for purchase order updated successfully. | [PurchaseOrderDEResponse](#purchaseorderderesponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/de/code/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get purchase order by id. | [PurchaseOrderDEResponse](#purchaseorderderesponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/de/code/{code}/details

#### GET
##### Summary

Purchase order details by codes

##### Description

Purchase order details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderInformation](#purchaseorderinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/de/create-recurring

#### POST
##### Summary

Create a recurring purchase order

##### Description

API to create a recurring purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| event | body | event | Yes | [RecurringJobEvent](#recurringjobevent) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Recurring purchase order created successfully |
| 400 | Error while creating recurring purchase order |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/de/custom-fields

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

### Orders purchase/de/demo/{tenantId}

#### POST
##### Summary

Create demo orders.

##### Description

API to create demo orders.

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

### Orders purchase/de/export

#### GET
##### Summary

Get purchase orders

##### Description

Get Purchase orders

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [OrderReportInfo](#orderreportinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/de/report/count

#### POST
##### Summary

Get purchase order count for contacts

##### Description

API to fetch purchase order count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/de/report/overview

#### GET
##### Summary

Purchase report overview.

##### Description

API to fetch purchase report overview

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase orders overview report has been prepared. | [OrderOverviewReport](#orderoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/de/sequence

#### GET
##### Summary

Order Document Code

##### Description

API to get Order Document Code.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Order Document Code fetched successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Order Document Code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/de/set-recurring

#### POST
##### Summary

Set an purchase order to recurring

##### Description

API to set and purchase order to recurring.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| setRecurringDto | body | setRecurringDto | Yes | [SetRecurringDto](#setrecurringdto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | purchase order set to recur successfully |
| 201 | Created |
| 400 | Error while setting purchase order to recur |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/de/short-info/{code}

#### GET
##### Summary

Get purchase order Item details by codes

##### Description

API to fetch purchase order Item details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderDEResponse](#purchaseorderderesponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/de/tax/count

#### POST
##### Summary

Get purchase order count for tax

##### Description

API to fetch purchase order count for tax

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| taxCodes | body | taxCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/de/update/linkedDocument

#### POST
##### Summary

Update linked documents for PO.

##### Description

API to pdate linked documents for PO.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| linkedDocumentUpdateRequest | body | linkedDocumentUpdateRequest | Yes | [LinkedDocumentUpdateRequest](#linkeddocumentupdaterequest) |

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
| --------------- | ------ |
| Authorization | global |

### Orders purchase/de/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderDEResponse](#purchaseorderderesponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/de/{id}

#### PUT
##### Summary

Update purchase order.

##### Description

API to update existing purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseOrderRequest | body | purchaseOrderRequest | Yes | [PurchaseOrderDERequest](#purchaseorderderequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Order has been updated successfully. | [PurchaseOrderDEResponse](#purchaseorderderesponse) |
| 201 | Created |  |
| 400 | Purchase order draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase order by id.

##### Description

API to delete purchase order details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase order has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase order not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-order-indonesia-controller
Purchase Order Indonesia APIs

### Orders purchase/id

#### GET
##### Summary

Search purchase orders.

##### Description

API to search purchase orders.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| 200 | Purchase orders have been fetched successfully. | [PurchaseOrderIndonesiaResponse](#purchaseorderindonesiaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create Purchase order

##### Description

API to create Purchase order

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseOrderIndonesiaRequest | body | purchaseOrderIndonesiaRequest | Yes | [PurchaseOrderIndonesiaRequest](#purchaseorderindonesiarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderIndonesiaResponse](#purchaseorderindonesiaresponse) |
| 201 | Purchase order has been created successfully. | [PurchaseOrderIndonesiaResponse](#purchaseorderindonesiaresponse) |
| 400 | Purchase order could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete multiple purchase orders

##### Description

API to delete multiple purchase orders

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Purchase order deletion successful | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No purchase order with provided id's found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase order billed status

##### Description

API to update purchase order billed status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orderCode | query | orderCode | Yes | string |
| purchaseOrderFields | body | purchaseOrderFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Billed status for purchase order updated successfully. | [PurchaseOrderIndonesiaResponse](#purchaseorderindonesiaresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/id/code/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get purchase order by id. | [PurchaseOrderIndonesiaResponse](#purchaseorderindonesiaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/id/report/count

#### POST
##### Summary

Get purchase order count for contacts

##### Description

API to fetch purchase order count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/id/report/overview

#### GET
##### Summary

Purchase report overview.

##### Description

API to fetch purchase report overview

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase orders overview report has been prepared. | [OrderOverviewReport](#orderoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/id/sequence

#### GET
##### Summary

Order Document Code

##### Description

API to get Order Document Code.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Order Document Code fetched successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Order Document Code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/id/short-info/{code}

#### GET
##### Summary

Get purchase order Item details by codes

##### Description

API to fetch purchase order Item details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderIndonesiaResponse](#purchaseorderindonesiaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/id/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderIndonesiaResponse](#purchaseorderindonesiaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/id/{id}

#### PUT
##### Summary

Update purchase order.

##### Description

API to update existing purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseOrderIndonesiaRequest | body | purchaseOrderIndonesiaRequest | Yes | [PurchaseOrderIndonesiaRequest](#purchaseorderindonesiarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Order has been updated successfully. | [PurchaseOrderIndonesiaResponse](#purchaseorderindonesiaresponse) |
| 201 | Created |  |
| 400 | Purchase order draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase order by id.

##### Description

API to delete purchase order details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase order has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase order not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-order-israel-controller
Purchase Order Israel APIs

### Orders purchase/il

#### GET
##### Summary

Search purchase orders.

##### Description

API to search purchase orders.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| 200 | Purchase orders have been fetched successfully. | [PurchaseOrderIsraelResponse](#purchaseorderisraelresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create Purchase order

##### Description

API to create Purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseOrderIsraelRequest | body | purchaseOrderIsraelRequest | Yes | [PurchaseOrderIsraelRequest](#purchaseorderisraelrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderIsraelResponse](#purchaseorderisraelresponse) |
| 201 | Purchase order has been created successfully. | [PurchaseOrderIsraelResponse](#purchaseorderisraelresponse) |
| 400 | Purchase order could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete multiple purchase orders

##### Description

API to delete multiple purchase orders

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Purchase order deletion successful | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No purchase order with provided id's found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase order billed status

##### Description

API to update purchase order billed status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orderCode | query | orderCode | Yes | string |
| purchaseOrderFields | body | purchaseOrderFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Billed status for purchase order updated successfully. | [PurchaseOrderIsraelResponse](#purchaseorderisraelresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/il/code/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get purchase order by id. | [PurchaseOrderIsraelResponse](#purchaseorderisraelresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/il/report/count

#### POST
##### Summary

Get purchase order count for contacts

##### Description

API to fetch purchase order count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/il/report/overview

#### GET
##### Summary

Purchase report overview.

##### Description

API to fetch purchase report overview

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase orders overview report has been prepared. | [OrderOverviewReport](#orderoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/il/sequence

#### GET
##### Summary

Order Document Code

##### Description

API to get Order Document Code.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Order Document Code fetched successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Order Document Code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/il/short-info/{code}

#### GET
##### Summary

Get purchase order Item details by codes

##### Description

API to fetch purchase order Item details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderIsraelResponse](#purchaseorderisraelresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/il/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderIsraelResponse](#purchaseorderisraelresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/il/{id}

#### PUT
##### Summary

Update purchase order.

##### Description

API to update existing purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseOrderIsraelRequest | body | purchaseOrderIsraelRequest | Yes | [PurchaseOrderIsraelRequest](#purchaseorderisraelrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Order has been updated successfully. | [PurchaseOrderIsraelResponse](#purchaseorderisraelresponse) |
| 201 | Created |  |
| 400 | Purchase order draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase order by id.

##### Description

API to delete purchase order details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase order has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase order not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-order-india-controller
Purchase Order India APIs

### Orders purchase/in

#### GET
##### Summary

Search purchase orders.

##### Description

API to search purchase orders.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| fetchAttachmentDetails | query | fetchAttachmentDetails | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase orders have been fetched successfully. | [PurchaseOrderIndiaResponse](#purchaseorderindiaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create Purchase order

##### Description

API to create Purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseOrderIndiaRequest | body | purchaseOrderIndiaRequest | Yes | [PurchaseOrderIndiaRequest](#purchaseorderindiarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderIndiaResponse](#purchaseorderindiaresponse) |
| 201 | Purchase order has been created successfully. | [PurchaseOrderIndiaResponse](#purchaseorderindiaresponse) |
| 400 | Purchase order could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete multiple purchase orders

##### Description

API to delete multiple purchase orders

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Purchase order deletion successful | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No purchase order with provided id's found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase order billed status

##### Description

API to update purchase order billed status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orderCode | query | orderCode | Yes | string |
| purchaseOrderFields | body | purchaseOrderFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Billed status for purchase order updated successfully. | [PurchaseOrderIndiaResponse](#purchaseorderindiaresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/in/code/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get purchase order by id. | [PurchaseOrderIndiaResponse](#purchaseorderindiaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/in/import

#### POST
##### Summary

Create multiple purchase orders via import

##### Description

API to create purchase orders via import.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseOrderRequests | body | purchaseOrderRequests | Yes | [ [PurchaseOrderIndiaRequest](#purchaseorderindiarequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkApiResponse](#bulkapiresponse) |
| 201 | Sales invoice has been created successfully. | [BulkApiResponse](#bulkapiresponse) |
| 400 | Sales invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/in/report/count

#### POST
##### Summary

Get purchase order count for contacts

##### Description

API to fetch purchase order count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/in/report/overview

#### GET
##### Summary

Purchase report overview.

##### Description

API to fetch purchase report overview

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase orders overview report has been prepared. | [OrderOverviewReport](#orderoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/in/sequence

#### GET
##### Summary

Order Document Code

##### Description

API to get Order Document Code.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Order Document Code fetched successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Order Document Code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/in/short-info/{code}

#### GET
##### Summary

Get purchase order Item details by codes

##### Description

API to fetch purchase order Item details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderIndiaResponse](#purchaseorderindiaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/in/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderIndiaResponse](#purchaseorderindiaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/in/{id}

#### PUT
##### Summary

Update purchase order.

##### Description

API to update existing purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseOrderIndiaRequest | body | purchaseOrderIndiaRequest | Yes | [PurchaseOrderIndiaRequest](#purchaseorderindiarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Order has been updated successfully. | [PurchaseOrderIndiaResponse](#purchaseorderindiaresponse) |
| 201 | Created |  |
| 400 | Purchase order draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase order by id.

##### Description

API to delete purchase order details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase order has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase order not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-order-malaysia-controller
Purchase Order Malaysia APIs

### Orders purchase/my

#### GET
##### Summary

Search purchase orders.

##### Description

API to search purchase orders.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| 200 | Purchase orders have been fetched successfully. | [PurchaseOrderMalaysiaResponse](#purchaseordermalaysiaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create Purchase order

##### Description

API to create Purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseOrderMalaysiaRequest | body | purchaseOrderMalaysiaRequest | Yes | [PurchaseOrderMalaysiaRequest](#purchaseordermalaysiarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderMalaysiaResponse](#purchaseordermalaysiaresponse) |
| 201 | Purchase order has been created successfully. | [PurchaseOrderMalaysiaResponse](#purchaseordermalaysiaresponse) |
| 400 | Purchase order could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete multiple purchase orders

##### Description

API to delete multiple purchase orders

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Purchase order deletion successful | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No purchase order with provided id's found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase order billed status

##### Description

API to update purchase order billed status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orderCode | query | orderCode | Yes | string |
| purchaseOrderFields | body | purchaseOrderFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Billed status for purchase order updated successfully. | [PurchaseOrderMalaysiaResponse](#purchaseordermalaysiaresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/my/code/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get purchase order by id. | [PurchaseOrderMalaysiaResponse](#purchaseordermalaysiaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/my/report/count

#### POST
##### Summary

Get purchase order count for contacts

##### Description

API to fetch purchase order count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/my/report/overview

#### GET
##### Summary

Purchase report overview.

##### Description

API to fetch purchase report overview

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase orders overview report has been prepared. | [OrderOverviewReport](#orderoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/my/sequence

#### GET
##### Summary

Order Document Code

##### Description

API to get Order Document Code.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Order Document Code fetched successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Order Document Code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/my/short-info/{code}

#### GET
##### Summary

Get purchase order Item details by codes

##### Description

API to fetch purchase order Item details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderMalaysiaResponse](#purchaseordermalaysiaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/my/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderMalaysiaResponse](#purchaseordermalaysiaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/my/{id}

#### PUT
##### Summary

Update purchase order.

##### Description

API to update existing purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseOrderMalaysiaRequest | body | purchaseOrderMalaysiaRequest | Yes | [PurchaseOrderMalaysiaRequest](#purchaseordermalaysiarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Order has been updated successfully. | [PurchaseOrderMalaysiaResponse](#purchaseordermalaysiaresponse) |
| 201 | Created |  |
| 400 | Purchase order draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase order by id.

##### Description

API to delete purchase order details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase order has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase order not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-order-nl-controller
Purchase Order APIs for Netherland

### Orders purchase/nl

#### GET
##### Summary

Search purchase orders.

##### Description

API to search purchase orders.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| 200 | Purchase orders have been fetched successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create Purchase order

##### Description

API to create Purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseOrderRequest | body | purchaseOrderRequest | Yes | [PurchaseOrderAustraliaRequest](#purchaseorderaustraliarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 201 | Purchase order has been created successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 400 | Purchase order could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete multiple purchase orders

##### Description

API to delete multiple purchase orders

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Purchase order deletion successful | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No purchase order with provided id's found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase order billed status

##### Description

API to update purchase order billed status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orderCode | query | orderCode | Yes | string |
| purchaseOrderFields | body | purchaseOrderFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Billed status for purchase order updated successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nl/code/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get purchase order by id. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nl/code/{code}/details

#### GET
##### Summary

Purchase order details by codes

##### Description

Purchase order details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderInformation](#purchaseorderinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nl/create-recurring

#### POST
##### Summary

Create a recurring purchase order

##### Description

API to create a recurring purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| event | body | event | Yes | [RecurringJobEvent](#recurringjobevent) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Recurring purchase order created successfully |
| 400 | Error while creating recurring purchase order |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nl/custom-fields

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

### Orders purchase/nl/demo/{tenantId}

#### POST
##### Summary

Create demo orders.

##### Description

API to create demo orders.

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

### Orders purchase/nl/export

#### GET
##### Summary

Get purchase orders

##### Description

Get Purchase orders

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [OrderReportInfo](#orderreportinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nl/report/count

#### POST
##### Summary

Get purchase order count for contacts

##### Description

API to fetch purchase order count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nl/report/overview

#### GET
##### Summary

Purchase report overview.

##### Description

API to fetch purchase report overview

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase orders overview report has been prepared. | [OrderOverviewReport](#orderoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nl/sequence

#### GET
##### Summary

Order Document Code

##### Description

API to get Order Document Code.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Order Document Code fetched successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Order Document Code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nl/set-recurring

#### POST
##### Summary

Set an purchase order to recurring

##### Description

API to set and purchase order to recurring.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| setRecurringDto | body | setRecurringDto | Yes | [SetRecurringDto](#setrecurringdto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | purchase order set to recur successfully |
| 201 | Created |
| 400 | Error while setting purchase order to recur |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nl/short-info/{code}

#### GET
##### Summary

Get purchase order Item details by codes

##### Description

API to fetch purchase order Item details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nl/tax/count

#### POST
##### Summary

Get purchase order count for tax

##### Description

API to fetch purchase order count for tax

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| taxCodes | body | taxCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nl/update/linkedDocument

#### POST
##### Summary

Update linked documents for PO.

##### Description

API to pdate linked documents for PO.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| linkedDocumentUpdateRequest | body | linkedDocumentUpdateRequest | Yes | [LinkedDocumentUpdateRequest](#linkeddocumentupdaterequest) |

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
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nl/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nl/{id}

#### PUT
##### Summary

Update purchase order.

##### Description

API to update existing purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseOrderRequest | body | purchaseOrderRequest | Yes | [PurchaseOrderAustraliaRequest](#purchaseorderaustraliarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Order has been updated successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 201 | Created |  |
| 400 | Purchase order draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase order by id.

##### Description

API to delete purchase order details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase order has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase order not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-order-nz-controller
Purchase Order APIs for NewZealand

### Orders purchase/nz

#### GET
##### Summary

Search purchase orders.

##### Description

API to search purchase orders.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| 200 | Purchase orders have been fetched successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create Purchase order

##### Description

API to create Purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseOrderRequest | body | purchaseOrderRequest | Yes | [PurchaseOrderAustraliaRequest](#purchaseorderaustraliarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 201 | Purchase order has been created successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 400 | Purchase order could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete multiple purchase orders

##### Description

API to delete multiple purchase orders

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Purchase order deletion successful | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No purchase order with provided id's found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase order billed status

##### Description

API to update purchase order billed status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orderCode | query | orderCode | Yes | string |
| purchaseOrderFields | body | purchaseOrderFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Billed status for purchase order updated successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nz/code/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get purchase order by id. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nz/code/{code}/details

#### GET
##### Summary

Purchase order details by codes

##### Description

Purchase order details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderInformation](#purchaseorderinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nz/create-recurring

#### POST
##### Summary

Create a recurring purchase order

##### Description

API to create a recurring purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| event | body | event | Yes | [RecurringJobEvent](#recurringjobevent) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Recurring purchase order created successfully |
| 400 | Error while creating recurring purchase order |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nz/custom-fields

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

### Orders purchase/nz/demo/{tenantId}

#### POST
##### Summary

Create demo orders.

##### Description

API to create demo orders.

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

### Orders purchase/nz/export

#### GET
##### Summary

Get purchase orders

##### Description

Get Purchase orders

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [OrderReportInfo](#orderreportinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nz/report/count

#### POST
##### Summary

Get purchase order count for contacts

##### Description

API to fetch purchase order count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nz/report/overview

#### GET
##### Summary

Purchase report overview.

##### Description

API to fetch purchase report overview

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase orders overview report has been prepared. | [OrderOverviewReport](#orderoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nz/sequence

#### GET
##### Summary

Order Document Code

##### Description

API to get Order Document Code.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Order Document Code fetched successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Order Document Code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nz/set-recurring

#### POST
##### Summary

Set an purchase order to recurring

##### Description

API to set and purchase order to recurring.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| setRecurringDto | body | setRecurringDto | Yes | [SetRecurringDto](#setrecurringdto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | purchase order set to recur successfully |
| 201 | Created |
| 400 | Error while setting purchase order to recur |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nz/short-info/{code}

#### GET
##### Summary

Get purchase order Item details by codes

##### Description

API to fetch purchase order Item details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nz/tax/count

#### POST
##### Summary

Get purchase order count for tax

##### Description

API to fetch purchase order count for tax

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| taxCodes | body | taxCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nz/update/linkedDocument

#### POST
##### Summary

Update linked documents for PO.

##### Description

API to pdate linked documents for PO.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| linkedDocumentUpdateRequest | body | linkedDocumentUpdateRequest | Yes | [LinkedDocumentUpdateRequest](#linkeddocumentupdaterequest) |

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
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nz/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/nz/{id}

#### PUT
##### Summary

Update purchase order.

##### Description

API to update existing purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseOrderRequest | body | purchaseOrderRequest | Yes | [PurchaseOrderAustraliaRequest](#purchaseorderaustraliarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Order has been updated successfully. | [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) |
| 201 | Created |  |
| 400 | Purchase order draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase order by id.

##### Description

API to delete purchase order details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase order has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase order not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-order-philippines-controller
Purchase Order Philippines APIs

### Orders purchase/ph

#### GET
##### Summary

Search purchase orders.

##### Description

API to search purchase orders.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| 200 | Purchase orders have been fetched successfully. | [PurchaseOrderPhilippinesResponse](#purchaseorderphilippinesresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create Purchase order

##### Description

API to create Purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseOrderPhilippinesRequest | body | purchaseOrderPhilippinesRequest | Yes | [PurchaseOrderPhilippinesRequest](#purchaseorderphilippinesrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderPhilippinesResponse](#purchaseorderphilippinesresponse) |
| 201 | Purchase order has been created successfully. | [PurchaseOrderPhilippinesResponse](#purchaseorderphilippinesresponse) |
| 400 | Purchase order could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete multiple purchase orders

##### Description

API to delete multiple purchase orders

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Purchase order deletion successful | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No purchase order with provided id's found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase order billed status

##### Description

API to update purchase order billed status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orderCode | query | orderCode | Yes | string |
| purchaseOrderFields | body | purchaseOrderFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Billed status for purchase order updated successfully. | [PurchaseOrderPhilippinesResponse](#purchaseorderphilippinesresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ph/code/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get purchase order by id. | [PurchaseOrderPhilippinesResponse](#purchaseorderphilippinesresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ph/report/count

#### POST
##### Summary

Get purchase order count for contacts

##### Description

API to fetch purchase order count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ph/report/overview

#### GET
##### Summary

Purchase report overview.

##### Description

API to fetch purchase report overview

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase orders overview report has been prepared. | [OrderOverviewReport](#orderoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ph/sequence

#### GET
##### Summary

Order Document Code

##### Description

API to get Order Document Code.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Order Document Code fetched successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Order Document Code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ph/short-info/{code}

#### GET
##### Summary

Get purchase order Item details by codes

##### Description

API to fetch purchase order Item details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderPhilippinesResponse](#purchaseorderphilippinesresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ph/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderPhilippinesResponse](#purchaseorderphilippinesresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/ph/{id}

#### PUT
##### Summary

Update purchase order.

##### Description

API to update existing purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseOrderPhilippinesRequest | body | purchaseOrderPhilippinesRequest | Yes | [PurchaseOrderPhilippinesRequest](#purchaseorderphilippinesrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Order has been updated successfully. | [PurchaseOrderPhilippinesResponse](#purchaseorderphilippinesresponse) |
| 201 | Created |  |
| 400 | Purchase order draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase order by id.

##### Description

API to delete purchase order details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase order has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase order not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-order-saudi-arabia-controller
Purchase Order Saudi Arabia APIs

### Orders purchase/sa

#### GET
##### Summary

Search purchase orders.

##### Description

API to search purchase orders.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| 200 | Purchase orders have been fetched successfully. | [PurchaseOrderSaudiArabiaResponse](#purchaseordersaudiarabiaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create Purchase order

##### Description

API to create Purchase order

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseOrderSaudiArabiaRequest | body | purchaseOrderSaudiArabiaRequest | Yes | [PurchaseOrderSaudiArabiaRequest](#purchaseordersaudiarabiarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderSaudiArabiaResponse](#purchaseordersaudiarabiaresponse) |
| 201 | Purchase order has been created successfully. | [PurchaseOrderSaudiArabiaResponse](#purchaseordersaudiarabiaresponse) |
| 400 | Purchase order could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete multiple purchase orders

##### Description

API to delete multiple purchase orders

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Purchase order deletion successful | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No purchase order with provided id's found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase order billed status

##### Description

API to update purchase order billed status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orderCode | query | orderCode | Yes | string |
| purchaseOrderFields | body | purchaseOrderFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Billed status for purchase order updated successfully. | [PurchaseOrderSaudiArabiaResponse](#purchaseordersaudiarabiaresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/sa/code/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get purchase order by id. | [PurchaseOrderSaudiArabiaResponse](#purchaseordersaudiarabiaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/sa/report/count

#### POST
##### Summary

Get purchase order count for contacts

##### Description

API to fetch purchase order count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/sa/report/overview

#### GET
##### Summary

Purchase report overview.

##### Description

API to fetch purchase report overview

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase orders overview report has been prepared. | [OrderOverviewReport](#orderoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/sa/sequence

#### GET
##### Summary

Order Document Code

##### Description

API to get Order Document Code.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Order Document Code fetched successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Order Document Code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/sa/short-info/{code}

#### GET
##### Summary

Get purchase order Item details by codes

##### Description

API to fetch purchase order Item details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderSaudiArabiaResponse](#purchaseordersaudiarabiaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/sa/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderSaudiArabiaResponse](#purchaseordersaudiarabiaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/sa/{id}

#### PUT
##### Summary

Update purchase order.

##### Description

API to update existing purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseOrderSaudiArabiaRequest | body | purchaseOrderSaudiArabiaRequest | Yes | [PurchaseOrderSaudiArabiaRequest](#purchaseordersaudiarabiarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Order has been updated successfully. | [PurchaseOrderSaudiArabiaResponse](#purchaseordersaudiarabiaresponse) |
| 201 | Created |  |
| 400 | Purchase order draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase order by id.

##### Description

API to delete purchase order details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase order has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase order not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-order-uk-controller
Purchase Order UK APIs

### Orders purchase/uk

#### GET
##### Summary

Search purchase orders.

##### Description

API to search purchase orders.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| 200 | Purchase orders have been fetched successfully. | [PurchaseOrderUKResponse](#purchaseorderukresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create Purchase order

##### Description

API to create Purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseOrderRequest | body | purchaseOrderRequest | Yes | [PurchaseOrderUKRequest](#purchaseorderukrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderUKResponse](#purchaseorderukresponse) |
| 201 | Purchase order has been created successfully. | [PurchaseOrderUKResponse](#purchaseorderukresponse) |
| 400 | Purchase order could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete multiple purchase orders

##### Description

API to delete multiple purchase orders

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Purchase order deletion successful | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No purchase order with provided id's found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase order billed status

##### Description

API to update purchase order billed status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orderCode | query | orderCode | Yes | string |
| purchaseOrderFields | body | purchaseOrderFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Billed status for purchase order updated successfully. | [PurchaseOrderUKResponse](#purchaseorderukresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/uk/code/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get purchase order by id. | [PurchaseOrderUKResponse](#purchaseorderukresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/uk/code/{code}/details

#### GET
##### Summary

Purchase order details by codes

##### Description

Purchase order details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseOrderInformation](#purchaseorderinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/uk/create-recurring

#### POST
##### Summary

Create a recurring purchase order

##### Description

API to create a recurring purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| event | body | event | Yes | [RecurringJobEvent](#recurringjobevent) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Recurring purchase order created successfully |
| 400 | Error while creating recurring purchase order |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/uk/custom-fields

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

### Orders purchase/uk/demo/{tenantId}

#### POST
##### Summary

Create demo orders.

##### Description

API to create demo orders.

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

### Orders purchase/uk/export

#### GET
##### Summary

Get purchase orders

##### Description

Get Purchase orders

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [OrderReportInfo](#orderreportinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/uk/report/count

#### POST
##### Summary

Get purchase order count for contacts

##### Description

API to fetch purchase order count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/uk/report/overview

#### GET
##### Summary

Purchase report overview.

##### Description

API to fetch purchase report overview

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase orders overview report has been prepared. | [OrderOverviewReport](#orderoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/uk/sequence

#### GET
##### Summary

Order Document Code

##### Description

API to get Order Document Code.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Order Document Code fetched successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Order Document Code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/uk/set-recurring

#### POST
##### Summary

Set an purchase order to recurring

##### Description

API to set and purchase order to recurring.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| setRecurringDto | body | setRecurringDto | Yes | [SetRecurringDto](#setrecurringdto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | purchase order set to recur successfully |
| 201 | Created |
| 400 | Error while setting purchase order to recur |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/uk/short-info/{code}

#### GET
##### Summary

Get purchase order Item details by codes

##### Description

API to fetch purchase order Item details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderUKResponse](#purchaseorderukresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/uk/tax/count

#### POST
##### Summary

Get purchase order count for tax

##### Description

API to fetch purchase order count for tax

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| taxCodes | body | taxCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax purchase order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/uk/update/linkedDocument

#### POST
##### Summary

Update linked documents for PO.

##### Description

API to pdate linked documents for PO.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| linkedDocumentUpdateRequest | body | linkedDocumentUpdateRequest | Yes | [LinkedDocumentUpdateRequest](#linkeddocumentupdaterequest) |

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
| --------------- | ------ |
| Authorization | global |

### Orders purchase/uk/{code}

#### GET
##### Summary

Get purchase order by id.

##### Description

API to fetch purchase order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase order information has been fetched successfully. | [PurchaseOrderUKResponse](#purchaseorderukresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchase/uk/{id}

#### PUT
##### Summary

Update purchase order.

##### Description

API to update existing purchase order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseOrderRequest | body | purchaseOrderRequest | Yes | [PurchaseOrderUKRequest](#purchaseorderukrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Order has been updated successfully. | [PurchaseOrderUKResponse](#purchaseorderukresponse) |
| 201 | Created |  |
| 400 | Purchase order draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Order with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase order by id.

##### Description

API to delete purchase order details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase order has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase order not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-request-controller
Purchase Request APIs

### Search purchase requests
#### GET
#### Orders purchaserequest
##### Summary

Search purchase requests

##### Description

API to search purchase requests.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| fetchAttachmentDetails | query | fetchAttachmentDetails | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase requests have been fetched successfully. | [PurchaseRequestResponse](#purchaserequestresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create purchase request

##### Description

API to create purchase request.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseRequestRequest | body | purchaseRequestRequest | Yes | [PurchaseRequestRequest](#purchaserequestrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseRequestResponse](#purchaserequestresponse) |
| 201 | Purchase Request has been created | [PurchaseRequestResponse](#purchaserequestresponse) |
| 400 | Unable to create purchase request |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchaserequest/draft/trigger

#### POST
##### Summary

Create approval status trigger

##### Description

API to reate approval status trigger

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| triggerKafkaRequestDto | body | triggerKafkaRequestDto | Yes | [TriggerKafkaRequestDto](#triggerkafkarequestdto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Trigger created for approval status |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchaserequest/linked-docs/product-codes

#### POST
##### Summary

Get products by code

##### Description

API to Get products by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product information has been fetched successfully. | string |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Products not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchaserequest/{code}

#### GET
##### Summary

Get purchase request by id.

##### Description

API to fetch purchase request details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase request information has been fetched successfully. | [PurchaseRequestResponse](#purchaserequestresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase request not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders purchaserequest/{id}

#### PUT
##### Summary

Update purchase request

##### Description

API to update purchase request

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseRequestRequest | body | purchaseRequestRequest | Yes | [PurchaseRequestRequest](#purchaserequestrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase request updated succesfully | [PurchaseRequestResponse](#purchaserequestresponse) |
| 201 | Created |  |
| 400 | Purchase request draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase request with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Purchase Request by ID

##### Description

API to delete purchase request

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase request ahs been deleted |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase request to delete not found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## sales-order-controller
Sales Order APIs

### Orders sales

#### GET
##### Summary

Search sales orders.

##### Description

API to search sales orders.

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
| 200 | Sales orders have been fetched successfully. | [SalesOrderResponse](#salesorderresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create sales order

##### Description

API to create sales order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| salesOrderRequest | body | salesOrderRequest | Yes | [SalesOrderRequest](#salesorderrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SalesOrderResponse](#salesorderresponse) |
| 201 | Sales order has been created successfully. | [SalesOrderResponse](#salesorderresponse) |
| 400 | Sales order could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete multiple sales orders

##### Description

API to delete multiple sales orders

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Sales order deletion successful | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No sales order with provided id's found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update sales order billed status

##### Description

API to update sales order billed status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |
| salesOrderFields | body | salesOrderFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Billed status for sales order updated successfully. | [SalesOrderResponse](#salesorderresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Sales Order with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders sales/linked-quotation/{code}

#### GET
##### Summary

Get sales orders linked to a quotation by code.

##### Description

API to fetch sales orders linked to a quotation by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales orders has been fetched successfully. | [SalesOrderResponse](#salesorderresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders sales/report

#### GET
##### Summary

Dashboard sales report.

##### Description

API to fetch sales report for dashboard

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales orders have been fetched successfully. | [SalesOrderDashboardReport](#salesorderdashboardreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders sales/report/count

#### POST
##### Summary

Get sales order count for contacts

##### Description

API to fetch sales order count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact sales order count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders sales/report/overview

#### GET
##### Summary

Sales report overview.

##### Description

API to fetch sales report overview

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales orders overview report has been prepared. | [OrderOverviewReport](#orderoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders sales/{code}

#### GET
##### Summary

Get sales order by id.

##### Description

API to fetch sales order details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales order information has been fetched successfully. | [SalesOrderResponse](#salesorderresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Sales order not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Orders sales/{id}

#### PUT
##### Summary

Update sales order.

##### Description

API to update existing sales order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| salesOrderRequest | body | salesOrderRequest | Yes | [SalesOrderRequest](#salesorderrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales Order has been updated successfully. | [SalesOrderResponse](#salesorderresponse) |
| 201 | Created |  |
| 400 | Sales order draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Sales Order with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete sales order by id.

##### Description

API to delete sales order details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Sales order has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Sales order not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## Models

### AbstractJobWorkOutOrderItemDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account<br/>*Example:* `"AC001"` | No |
| advancedTrackingType | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| bomMetaCode | string | bom meta code<br/>*Example:* `"00001"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| id | long | ID<br/>*Example:* `2` | No |
| jobWorkOutOrderItemCode | string | Job Work Out Item Code<br/>*Example:* `"POI-00001"` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| otherRate | number | Tax Rate<br/>*Example:* `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>*Example:* `10` | No |
| pendingQuantity | number | Pending quantity<br/>*Example:* `2` | No |
| product | [ProductResponse](#productresponse) | Product Details<br/>*Example:* `"product"` | No |
| productCode | string | Product<br/>*Example:* `"P002"` | No |
| productDescription | string | Description<br/>*Example:* `"Description"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | No |
| receivedQuantityInBills | number | Received quantity through bill<br/>*Example:* `2` | No |
| receivedQuantityInOrder | number | Received quantity through order<br/>*Example:* `2` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number | Unit price / Amount<br/>*Example:* `2` | No |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>*Example:* `2.3` | Yes |

### AbstractPurchaseRequestItemDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| documentSequenceCode | string | Product Document Sequence Code<br/>*Example:* `"P-0000001"` | Yes |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| linkedPoCode | [ string ] | Linked Purchase Order Code<br/>*Example:* `["O-0000093","0-000098"]` | No |
| product | [ProductInformation](#productinformation) | Product Details<br/>*Example:* `"product"` | No |
| productCode | string | Product code<br/>*Example:* `"P00001"` | Yes |
| productConvertedQuantity | number | Product converted quantity<br/>*Example:* `2` | Yes |
| productDescription | string | Product description<br/>*Example:* `"Apple watch"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | Yes |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number | Product unit price<br/>*Example:* `0.7` | Yes |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>*Example:* `2.3` | Yes |

### AccountDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account code<br/>*Example:* `"SA"` | No |
| accountGroup | string | Account group | No |
| accountGroupId | string | Account group | No |
| accountNature | string | Account Nature<br/>*Example:* `"ASSET"` | No |
| accountSubGroup | string | Account group | No |
| accountSubGroupName | string | Account group | No |
| balance | number | Balance Amount<br/>*Example:* `999.99` | No |
| balanceInAccountCurrency | number | Balance Amount in Account Currency<br/>*Example:* `999.99` | No |
| code | string | Account code | No |
| currency | string | Account Currency | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Account Description<br/>*Example:* `"Savings account"` | No |
| exchangeRate | number | Base to Foreign Exchange Rate<br/>*Example:* `1` | No |
| id | long | Account ID.<br/>*Example:* `1` | No |
| isCreditCard | boolean | Is account is credit card account or not<br/>*Example:* `false` | No |
| isSubAccount | boolean | Flag to confirm Subaccount<br/>*Example:* `false` | No |
| isTdsApplicable | boolean | Is TDS applicable or not<br/>*Example:* `false` | No |
| isUndepositedFundAccount | boolean | Account is Undeposited fund account or not<br/>*Example:* `true` | No |
| name | string | Account Name<br/>*Example:* `"Savings account"` | No |
| natureOfIncomePayment | string | Nature of income payment<br/>*Example:* `"Interest on Securities"` | No |
| openingBalance | number | Opening Balance Amount in Base currency<br/>*Example:* `999.99` | No |
| openingBalanceCdType | string | Opening balance Credit/Debit Type<br/>*Example:* `"DEBIT"` | No |
| openingBalanceEditable | boolean | Account Opening Balance editable or not<br/>*Example:* `true` | No |
| openingBalanceInAccountCurrency | number | Opening Balance Amount in Account currency<br/>*Example:* `999.99` | No |
| parent | long | Parent AccountId<br/>*Example:* `2431252` | No |
| parentName | string | Parent Name<br/>*Example:* `2431252` | No |
| status | string | Account Status<br/>*Example:* `"ACTIVE"` | No |
| taxCode | string | Account Tax | No |
| totalBalance | number | Summation of Opening Balance and Balance<br/>*Example:* `999.99` | No |
| totalBalanceInAccountCurrency | number | Summation of Opening Balance and Balance in Account Currency<br/>*Example:* `999.99` | No |
| totalCOABalance | number | Summation of Opening Balance and Balance with Nature<br/>*Example:* `999.99` | No |
| totalCOABalanceInAccountCurrency | number | Summation of Opening Balance and Balance with Nature in Account Currency<br/>*Example:* `999.99` | No |
| usedChequeNumbers | string | Used Cheque Series<br/>*Example:* `"301,302"` | No |

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

### AdvancedTrackingBOMDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| costPerUnit | number |  | No |
| expiryDate | dateTime | Expiry date. Date Format is dd-mm-yyyy. Applicable when AdvancedTrackingType is Batch<br/>*Example:* `"01-01-2020"` | No |
| manufacturingDate | dateTime | Manufacturing date. Date Format is dd-mm-yyyy. Applicable when AdvancedTrackingType is Batch<br/>*Example:* `"01-01-2020"` | No |
| qtyToFulfil | double | Batch qty to fulfill<br/>*Example:* `1` | No |
| remainingQuantity | number |  | No |
| serialBatchNumber | string | Batch or serial number to be fulfilled<br/>*Example:* `"Batch-001"` | No |

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

### AmortizationDocumentItemDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| deferralAccountCode | string |  | No |
| endDate | dateTime |  | No |
| startDate | dateTime |  | No |
| templateCode | string |  | No |

### ApprovalHistoryItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvedBy | string |  | No |
| approvedDate | string |  | No |
| level | integer |  | No |
| remarks | string |  | No |
| status | string | *Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"` | No |

### ApprovalStatusRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalStatus | string | *Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"` | No |
| documentCodes | string |  | No |

### AssetGroupResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Is Asset Group active?<br/>*Example:* `true` | No |
| assetAccountCode | string | Asset Account Code<br/>*Example:* `"AC-0000001"` | No |
| assetAccountDisplayCode | string | Asset Account Display Code<br/>*Example:* `"Acc00001"` | No |
| assetAccountName | string | Asset Account Name<br/>*Example:* `"Computer Equipment Asset Account"` | No |
| assetAccumulatedAccountCode | string | Asset Accumulated Account Code<br/>*Example:* `"AC-0000002"` | No |
| assetAccumulatedAccountDisplayCode | string | Asset Accumulated Account Display Code<br/>*Example:* `"Acc00002"` | No |
| assetAccumulatedAccountName | string | Asset Accumulated Account Name<br/>*Example:* `"Computer Equipment Accumulated Account"` | No |
| decliningFactor | number | Declining Factor<br/>*Example:* `1` | No |
| depreciationConvention | string | Depreciation Convention<br/>*Enum:* `"FULL_MONTH"`, `"ACTUAL_DATE"`<br/>*Example:* `"FULL_MONTH"` | No |
| depreciationExpenseAccountCode | string | Depreciation Expense Account Code<br/>*Example:* `"AC-0000003"` | No |
| depreciationExpenseAccountDisplayCode | string | Depreciation Expense Account Display Code<br/>*Example:* `"Acc00003"` | No |
| depreciationExpenseAccountName | string | Depreciation Expense Account Name<br/>*Example:* `"Computer Equipment Depreciation Account"` | No |
| depreciationMethod | string | Depreciation Method<br/>*Enum:* `"NO_DEPRECIATION"`, `"STRAIGHT_LINE"`, `"DECLINING_BALANCE"`, `"INSTANT_ASSET_WRITE_OFF"`<br/>*Example:* `"STRAIGHT_LINE"` | No |
| depreciationRate | number | Depreciation Rate<br/>*Example:* `1` | No |
| effectiveLife | number | Effective Life<br/>*Example:* `2` | No |
| hsnOrSacCode | string | HSN or SAC Code<br/>*Example:* `"011"` | No |
| id | long | Id<br/>*Example:* `1` | No |
| name | string | Asset Group Name<br/>*Example:* `"IT Hardware"` | No |
| purchaseTaxCode | string | GST Tax Code<br/>*Example:* `"TX-0000003"` | No |
| uqcIndia | string | UQC<br/>*Example:* `"BAGS"` | No |
| viewOnly | boolean | Is Asset Group view-only?<br/>*Example:* `true` | No |
| writeOffAccountCode | string | Write off Account Code<br/>*Example:* `"AC-0000002"` | No |

### AssetRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| assetGroupId | long | Asset Group Id<br/>*Example:* `1` | No |
| currency | string | Currency<br/>*Example:* `"USD"` | No |
| decliningFactor | number | Declining Factor<br/>*Example:* `2.5` | No |
| depreciationConvention | string | Depreciation Convention<br/>*Enum:* `"FULL_MONTH"`, `"ACTUAL_DATE"`<br/>*Example:* `"FULL_MONTH"` | No |
| depreciationMethod | string | Depreciation Method<br/>*Enum:* `"NO_DEPRECIATION"`, `"STRAIGHT_LINE"`, `"DECLINING_BALANCE"`, `"INSTANT_ASSET_WRITE_OFF"`<br/>*Example:* `"STRAIGHT_LINE"` | No |
| depreciationRate | number | Depreciation Rate<br/>*Example:* `66.66` | No |
| depreciationStartDate | dateTime | Depreciation Start Date<br/>*Example:* `"20-06-2019"` | No |
| depreciationThreshold | number | Depreciation Threshold<br/>*Example:* `8765.43` | No |
| description | string | Asset Description<br/>*Example:* `"Computer for developers"` | No |
| discount | number |  | No |
| discountInPercent | boolean |  | No |
| documentCode | string |  | No |
| documentItemCode | string |  | No |
| documentSequenceCode | string | Document Sequence Code<br/>*Example:* `"FA-0000001"` | No |
| documentType | string |  | No |
| effectiveLife | number | Effective Life<br/>*Example:* `1.5` | No |
| errors | [ string ] |  | No |
| expenseBillCode | string | Expense Bill Code<br/>*Example:* `"BUY-0000001"` | No |
| id | long | Id<br/>*Example:* `1` | No |
| installationDate | dateTime | Installation Date<br/>*Example:* `"20-06-2019"` | No |
| name | string | Asset Name<br/>*Example:* `"Computer"` | No |
| openingAccumulatedDepreciation | number | Opening Accumulated Depreciation<br/>*Example:* `1234.56` | No |
| openingAsset | boolean | Is this an Opening Asset<br/>*Example:* `false` | No |
| profitLossAccountCode | string | Profit/Loss Account Code<br/>*Example:* `"AC-0000001"` | No |
| purchaseDate | dateTime | Purchase Date<br/>*Example:* `"20-06-2019"` | No |
| purchaseInvoiceId | long |  | No |
| purchaseInvoiceRequest | [PurchaseInvoiceRequest](#purchaseinvoicerequest) |  | No |
| purchasePrice | number | Purchase Price<br/>*Example:* `9999.99` | No |
| residualValue | number | Residual Value<br/>*Example:* `1234.56` | No |
| salesIncomeAccountCode | string | Sales/Income Account Code<br/>*Example:* `"AC-0000001"` | No |
| sequenceFormat | string | Document Sequence Format<br/>*Example:* `"FA-0000000"` | No |
| serialNumber | string | Serial Number<br/>*Example:* `"ABCD123456"` | No |
| taxAmount | number |  | No |
| taxCode | string |  | No |
| totalAmount | number |  | No |
| warehouse | string | Warehouse Code<br/>*Example:* `"WH-0000001"` | No |
| warrantyEndDate | string | Warranty End Date<br/>*Example:* `"01-11-2024"` | No |
| warrantyStartDate | string | Warranty Start Date<br/>*Example:* `"01-11-2023"` | No |

### AttachmentsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachmentDate | dateTime |  | No |
| attachmentFileName | string |  | No |
| attachmentId | long |  | No |
| attachmentSize | string |  | No |

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

### BomAdditionalCostDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bomMetaDetailsId | long | id of bomMetaDetailsId<br/>*Example:* `1234` | No |
| bomMetaName | string | BOM Meta Name<br/>*Example:* `"DEFAULT"` | No |
| label | string | Name of manufacturing service<br/>*Example:* `"Labour charges"` | No |
| price | number | Quantity of product in bom<br/>*Example:* `10.5` | No |

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

### BulkApiResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ object ] |  | No |
| statusCode | integer |  | No |
| success | [ object ] |  | No |

### BulkApiResponse«PurchaseOrderIndiaResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [PurchaseOrderIndiaResponse](#purchaseorderindiaresponse) ] |  | No |
| statusCode | integer |  | No |
| success | [ [PurchaseOrderIndiaResponse](#purchaseorderindiaresponse) ] |  | No |

### BulkApiResponse«PurchaseOrderResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [PurchaseOrderResponse](#purchaseorderresponse) ] |  | No |
| statusCode | integer |  | No |
| success | [ [PurchaseOrderResponse](#purchaseorderresponse) ] |  | No |

### BulkDeleteOrderResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentSequenceCode | string | Document Sequence Code<br/>*Example:* `"PO-0000011"` | No |
| httpStatus | string | HTTP Status<br/>*Enum:* `"100 CONTINUE"`, `"101 SWITCHING_PROTOCOLS"`, `"102 PROCESSING"`, `"103 CHECKPOINT"`, `"200 OK"`, `"201 CREATED"`, `"202 ACCEPTED"`, `"203 NON_AUTHORITATIVE_INFORMATION"`, `"204 NO_CONTENT"`, `"205 RESET_CONTENT"`, `"206 PARTIAL_CONTENT"`, `"207 MULTI_STATUS"`, `"208 ALREADY_REPORTED"`, `"226 IM_USED"`, `"300 MULTIPLE_CHOICES"`, `"301 MOVED_PERMANENTLY"`, `"302 FOUND"`, `"302 MOVED_TEMPORARILY"`, `"303 SEE_OTHER"`, `"304 NOT_MODIFIED"`, `"305 USE_PROXY"`, `"307 TEMPORARY_REDIRECT"`, `"308 PERMANENT_REDIRECT"`, `"400 BAD_REQUEST"`, `"401 UNAUTHORIZED"`, `"402 PAYMENT_REQUIRED"`, `"403 FORBIDDEN"`, `"404 NOT_FOUND"`, `"405 METHOD_NOT_ALLOWED"`, `"406 NOT_ACCEPTABLE"`, `"407 PROXY_AUTHENTICATION_REQUIRED"`, `"408 REQUEST_TIMEOUT"`, `"409 CONFLICT"`, `"410 GONE"`, `"411 LENGTH_REQUIRED"`, `"412 PRECONDITION_FAILED"`, `"413 PAYLOAD_TOO_LARGE"`, `"413 REQUEST_ENTITY_TOO_LARGE"`, `"414 URI_TOO_LONG"`, `"414 REQUEST_URI_TOO_LONG"`, `"415 UNSUPPORTED_MEDIA_TYPE"`, `"416 REQUESTED_RANGE_NOT_SATISFIABLE"`, `"417 EXPECTATION_FAILED"`, `"418 I_AM_A_TEAPOT"`, `"419 INSUFFICIENT_SPACE_ON_RESOURCE"`, `"420 METHOD_FAILURE"`, `"421 DESTINATION_LOCKED"`, `"422 UNPROCESSABLE_ENTITY"`, `"423 LOCKED"`, `"424 FAILED_DEPENDENCY"`, `"426 UPGRADE_REQUIRED"`, `"428 PRECONDITION_REQUIRED"`, `"429 TOO_MANY_REQUESTS"`, `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"`, `"451 UNAVAILABLE_FOR_LEGAL_REASONS"`, `"500 INTERNAL_SERVER_ERROR"`, `"501 NOT_IMPLEMENTED"`, `"502 BAD_GATEWAY"`, `"503 SERVICE_UNAVAILABLE"`, `"504 GATEWAY_TIMEOUT"`, `"505 HTTP_VERSION_NOT_SUPPORTED"`, `"506 VARIANT_ALSO_NEGOTIATES"`, `"507 INSUFFICIENT_STORAGE"`, `"508 LOOP_DETECTED"`, `"509 BANDWIDTH_LIMIT_EXCEEDED"`, `"510 NOT_EXTENDED"`, `"511 NETWORK_AUTHENTICATION_REQUIRED"`<br/>*Example:* `"404 NOT_FOUND"` | No |
| reason | string | *Example:* `"NOT FOUND"` | No |

### BulkResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| httpStatus | string | HTTP Status<br/>*Enum:* `"100 CONTINUE"`, `"101 SWITCHING_PROTOCOLS"`, `"102 PROCESSING"`, `"103 CHECKPOINT"`, `"200 OK"`, `"201 CREATED"`, `"202 ACCEPTED"`, `"203 NON_AUTHORITATIVE_INFORMATION"`, `"204 NO_CONTENT"`, `"205 RESET_CONTENT"`, `"206 PARTIAL_CONTENT"`, `"207 MULTI_STATUS"`, `"208 ALREADY_REPORTED"`, `"226 IM_USED"`, `"300 MULTIPLE_CHOICES"`, `"301 MOVED_PERMANENTLY"`, `"302 FOUND"`, `"302 MOVED_TEMPORARILY"`, `"303 SEE_OTHER"`, `"304 NOT_MODIFIED"`, `"305 USE_PROXY"`, `"307 TEMPORARY_REDIRECT"`, `"308 PERMANENT_REDIRECT"`, `"400 BAD_REQUEST"`, `"401 UNAUTHORIZED"`, `"402 PAYMENT_REQUIRED"`, `"403 FORBIDDEN"`, `"404 NOT_FOUND"`, `"405 METHOD_NOT_ALLOWED"`, `"406 NOT_ACCEPTABLE"`, `"407 PROXY_AUTHENTICATION_REQUIRED"`, `"408 REQUEST_TIMEOUT"`, `"409 CONFLICT"`, `"410 GONE"`, `"411 LENGTH_REQUIRED"`, `"412 PRECONDITION_FAILED"`, `"413 PAYLOAD_TOO_LARGE"`, `"413 REQUEST_ENTITY_TOO_LARGE"`, `"414 URI_TOO_LONG"`, `"414 REQUEST_URI_TOO_LONG"`, `"415 UNSUPPORTED_MEDIA_TYPE"`, `"416 REQUESTED_RANGE_NOT_SATISFIABLE"`, `"417 EXPECTATION_FAILED"`, `"418 I_AM_A_TEAPOT"`, `"419 INSUFFICIENT_SPACE_ON_RESOURCE"`, `"420 METHOD_FAILURE"`, `"421 DESTINATION_LOCKED"`, `"422 UNPROCESSABLE_ENTITY"`, `"423 LOCKED"`, `"424 FAILED_DEPENDENCY"`, `"426 UPGRADE_REQUIRED"`, `"428 PRECONDITION_REQUIRED"`, `"429 TOO_MANY_REQUESTS"`, `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"`, `"451 UNAVAILABLE_FOR_LEGAL_REASONS"`, `"500 INTERNAL_SERVER_ERROR"`, `"501 NOT_IMPLEMENTED"`, `"502 BAD_GATEWAY"`, `"503 SERVICE_UNAVAILABLE"`, `"504 GATEWAY_TIMEOUT"`, `"505 HTTP_VERSION_NOT_SUPPORTED"`, `"506 VARIANT_ALSO_NEGOTIATES"`, `"507 INSUFFICIENT_STORAGE"`, `"508 LOOP_DETECTED"`, `"509 BANDWIDTH_LIMIT_EXCEEDED"`, `"510 NOT_EXTENDED"`, `"511 NETWORK_AUTHENTICATION_REQUIRED"`<br/>*Example:* `"404 NOT_FOUND"` | No |
| id | long | ID<br/>*Example:* `2` | No |

### BulkUpdateOrderResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| httpStatus | string | HTTP Status<br/>*Enum:* `"100 CONTINUE"`, `"101 SWITCHING_PROTOCOLS"`, `"102 PROCESSING"`, `"103 CHECKPOINT"`, `"200 OK"`, `"201 CREATED"`, `"202 ACCEPTED"`, `"203 NON_AUTHORITATIVE_INFORMATION"`, `"204 NO_CONTENT"`, `"205 RESET_CONTENT"`, `"206 PARTIAL_CONTENT"`, `"207 MULTI_STATUS"`, `"208 ALREADY_REPORTED"`, `"226 IM_USED"`, `"300 MULTIPLE_CHOICES"`, `"301 MOVED_PERMANENTLY"`, `"302 FOUND"`, `"302 MOVED_TEMPORARILY"`, `"303 SEE_OTHER"`, `"304 NOT_MODIFIED"`, `"305 USE_PROXY"`, `"307 TEMPORARY_REDIRECT"`, `"308 PERMANENT_REDIRECT"`, `"400 BAD_REQUEST"`, `"401 UNAUTHORIZED"`, `"402 PAYMENT_REQUIRED"`, `"403 FORBIDDEN"`, `"404 NOT_FOUND"`, `"405 METHOD_NOT_ALLOWED"`, `"406 NOT_ACCEPTABLE"`, `"407 PROXY_AUTHENTICATION_REQUIRED"`, `"408 REQUEST_TIMEOUT"`, `"409 CONFLICT"`, `"410 GONE"`, `"411 LENGTH_REQUIRED"`, `"412 PRECONDITION_FAILED"`, `"413 PAYLOAD_TOO_LARGE"`, `"413 REQUEST_ENTITY_TOO_LARGE"`, `"414 URI_TOO_LONG"`, `"414 REQUEST_URI_TOO_LONG"`, `"415 UNSUPPORTED_MEDIA_TYPE"`, `"416 REQUESTED_RANGE_NOT_SATISFIABLE"`, `"417 EXPECTATION_FAILED"`, `"418 I_AM_A_TEAPOT"`, `"419 INSUFFICIENT_SPACE_ON_RESOURCE"`, `"420 METHOD_FAILURE"`, `"421 DESTINATION_LOCKED"`, `"422 UNPROCESSABLE_ENTITY"`, `"423 LOCKED"`, `"424 FAILED_DEPENDENCY"`, `"426 UPGRADE_REQUIRED"`, `"428 PRECONDITION_REQUIRED"`, `"429 TOO_MANY_REQUESTS"`, `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"`, `"451 UNAVAILABLE_FOR_LEGAL_REASONS"`, `"500 INTERNAL_SERVER_ERROR"`, `"501 NOT_IMPLEMENTED"`, `"502 BAD_GATEWAY"`, `"503 SERVICE_UNAVAILABLE"`, `"504 GATEWAY_TIMEOUT"`, `"505 HTTP_VERSION_NOT_SUPPORTED"`, `"506 VARIANT_ALSO_NEGOTIATES"`, `"507 INSUFFICIENT_STORAGE"`, `"508 LOOP_DETECTED"`, `"509 BANDWIDTH_LIMIT_EXCEEDED"`, `"510 NOT_EXTENDED"`, `"511 NETWORK_AUTHENTICATION_REQUIRED"`<br/>*Example:* `"404 NOT_FOUND"` | No |
| id | long | ID<br/>*Example:* `2` | No |
| reason | string | *Example:* `"NOT FOUND"` | No |

### ContactDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attentionTo | string | the contact name in  govt agency<br/>*Example:* `"Peter Parker"` | No |
| billingAddress | [ [Address](#address) ] | List of Billing Address. | No |
| businessUnit | string | indicates the contact is govt agency<br/>*Example:* `"CAA01 - Cvl Avtn Authrty of Singapore"` | No |
| contactMasterId | string (uuid) | contact master id<br/>*Example:* `"2df7a5c1-3305-498d-8d01-aa92c42d19d2"` | No |
| contactNumber | string | Contact number<br/>*Example:* `"+65999999999"` | No |
| creditLimit | number | Credit Limit<br/>*Example:* `100` | No |
| creditLimitInBaseCurrency | number | Credit Limit In Org Currency<br/>*Example:* `100` | No |
| currencyCode | string | Currency code<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| documentSequenceCode | string | Contact Sequence code<br/>*Example:* `"C-0000001"` | No |
| emailId | string | contact email address<br/>*Example:* `"myinfo@domain.com"` | No |
| extCompanyName | string | the company name from external app<br/>*Example:* `"QuickBook"` | No |
| intercompanyType | string | Contact Type either parent or subsidiary<br/>*Enum:* `"PARENT"`, `"SUBSIDIARY"`<br/>*Example:* `"PARENT/SUBSIDIARY"` | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| invoices | object |  | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>*Example:* `true` | No |
| isCreditLimitApplicable | boolean | Contact credit limit applicable<br/>*Example:* `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>*Example:* `true` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>*Example:* `true` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>*Example:* `false` | No |
| isParentCompany | boolean | Is Parent company<br/>*Example:* `false` | No |
| isSubsidiaryCompany | boolean | Is Subsidiary company<br/>*Example:* `false` | No |
| name | string | Contact name<br/>*Example:* `"Sam"` | No |
| payableAccountCode | string | Payable account code<br/>*Example:* `"AC002"` | No |
| paymentTermCode | string | Payment term code<br/>*Example:* `"Net 0"` | No |
| peppolId | string | Peppol ID<br/>*Example:* `"u000:11::11293"` | No |
| purchasePriceLists | [ long ] | Set of Purchase price lists<br/>*Example:* `[123,456]` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| receivableAccountCode | string | Receivable account code<br/>*Example:* `"AC001"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesPriceLists | [ long ] | Set of Sales price lists<br/>*Example:* `[123,456]` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| shippingAddress | [ [Address](#address) ] | List of Shipping Address. | No |
| singaporeGovt | boolean | indicates the contact is govt agency<br/>*Example:* `true` | No |
| taxExempted | boolean | Denotes if customer is tax exempted<br/>*Example:* `true` | No |
| taxExemptionNo | string | Generated tax exemption number<br/>*Example:* `"234s-few3-2422"` | No |
| taxExemptionReason | string | Tax exemption reason<br/>*Example:* `"Resale, Federal Agency"` | No |
| taxNumber | string | Tax number<br/>*Example:* `123456` | No |
| uen | string | Contact UEN<br/>*Example:* `"DHJEUK"` | No |

### ContactIndiaTdsInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| considerThresholdLimit | boolean | Consider Exemption Limit can be a check box field<br/>*Example:* `true` | No |
| deducteeCode | string | Deductee Type<br/>*Example:* `"Artificial Juridicial Person"` | No |
| deducteeType | string | Deductee Type<br/>*Example:* `"Artificial Juridicial Person"` | No |
| deductionApplicable | boolean | This field can be visible only if PAN number is mentioned.<br/>*Example:* `true` | No |
| dttaApplicable | boolean |  | No |
| dttaFromDate | dateTime |  | No |
| dttaToDate | dateTime |  | No |
| higherRate | integer | Percentage value and can be visible only if PAN number is not mentioned.<br/>*Example:* `5` | No |
| noDeductionFromDate | dateTime | Start date field visible only if deductionApplicable field is true<br/>*Example:* `"01-01-2020"` | No |
| noDeductionReason | string | Choose reason only if deductionApplicable field is true.<br/>*Example:* `"TDS not to be made till the Basic Exemption is reached"` | No |
| noDeductionRefNo | string | Alphanumeric field and visible only if deductionApplicable field is true.<br/>*Example:* `"AAAAABBBB1100"` | No |
| noDeductionTdsRate | integer | Special rate override with TDS Rate setting and will be visible only if deductionApplicable field is true<br/>*Example:* `5` | No |
| noDeductionToDate | dateTime | End date field visible only if deductionApplicable field is true<br/>*Example:* `"31-12-2020"` | No |
| nonDeductionApplicable | boolean | This field can be visible only if PAN number is mentioned.<br/>*Example:* `true` | No |
| specialRate | integer |  | No |
| tan | string | Contact TAN<br/>*Example:* `"AAAA99999A"` | No |

### ContactInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | string | Address<br/>*Example:* `"Raffles Place 1"` | Yes |
| name | string | Contact name<br/>*Example:* `"ABC Pte Ltd"` | Yes |

### ContactInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| beVatIdentificationNo | string | VAT Identification No<br/>*Example:* `123456789012345` | No |
| billingAddress | [ [Address](#address) ] | List of Billing Address. | No |
| birClassPhilippines | string | BIR class determines the type of business<br/>*Example:* `"Services"` | No |
| businessRegNo | string | Contact Business Registration No<br/>*Example:* `"W10-0108-000000021"` | No |
| contactMasterId | string (uuid) | contact master id<br/>*Example:* `"2df7a5c1-3305-498d-8d01-aa92c42d19d2"` | No |
| contactNumber | string | Contact number<br/>*Example:* `"+65999999999"` | No |
| creditLimit | number | Credit Limit<br/>*Example:* `100` | No |
| creditLimitInBaseCurrency | number | Credit Limit In Org Currency<br/>*Example:* `100` | No |
| currencyCode | string | Currency code<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| customerType | string | Customer Type<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"NA"` | No |
| customerTypeMalaysia | string | Customer Type<br/>*Enum:* `"NONE"`, `"EXPORT"`, `"SPECIAL_AREA"`, `"DESIGNATED_AREA"`, `"EXEMPTED_UNDER_SCHEDULE_A"`, `"EXEMPTED_UNDER_SCHEDULE_B"`, `"EXEMPTED_UNDER_SCHEDULE_C1_C2"`, `"EXEMPTED_UNDER_SCHEDULE_C3_C4"`, `"EXEMPTED_UNDER_SCHEDULE_C5"`<br/>*Example:* `"NONE(None)"` | No |
| customerTypePhilippines | string | Customer Type<br/>*Enum:* `"NORMAL_CORPORATE=Normal(Corporate)"`, `"NORMAL_INDIVIDUAL=Normal(Individual)"`, `"ZERO_RATED_CORPORATE=Zero rated(Corporate)"`, `"ZERO_RATED_INDIVIDUAL=Zero Rated (Individual)"`, `"NORMAL=Normal"`, `"GOVERNMENT=Government"`<br/>*Example:* `"Normal(Corporate)"` | No |
| deVatIdentificationNo | string | VAT Identification No<br/>*Example:* `123456789012345` | No |
| documentSequenceCode | string | Contact Sequence code<br/>*Example:* `"C-0000001"` | No |
| emailId | string | contact email address<br/>*Example:* `"myinfo@domain.com"` | No |
| exemptionCertificateMalaysia | boolean | Exemption certificate<br/>*Example:* `true` | No |
| exemptionCriterialMalaysia | string | Exemption criteria<br/>*Enum:* `"NONE"`, `"ZERO_RATED"`, `"EXEMPTED_ZERO"`<br/>*Example:* `"NONE(None)"` | No |
| gstTreatment | string | GST treatment<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"UnregisteredBusiness"` | No |
| gstin | string | Contact GSTIN<br/>*Example:* `"21AONPM8088Q211"` | No |
| intercompanyType | string | Contact Type either parent or subsidiary<br/>*Enum:* `"PARENT"`, `"SUBSIDIARY"`<br/>*Example:* `"PARENT/SUBSIDIARY"` | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| invoices | object |  | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>*Example:* `true` | No |
| isCreditLimitApplicable | boolean | Contact credit limit applicable<br/>*Example:* `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>*Example:* `true` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>*Example:* `true` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>*Example:* `false` | No |
| isParentCompany | boolean | Is Parent company<br/>*Example:* `false` | No |
| isSubsidiaryCompany | boolean | Is Subsidiary company<br/>*Example:* `false` | No |
| name | string | Contact name<br/>*Example:* `"Sam"` | No |
| nikNumber | long | NIK No<br/>*Example:* `123456789012345` | No |
| nlVatIdentificationNo | string | VAT Identification No<br/>*Example:* `123456789012345` | No |
| npwpNumber | long | NPWP No<br/>*Example:* `123456789012345` | No |
| pan | string | Contact PAN<br/>*Example:* `"AONPM8088Q"` | No |
| payableAccountCode | string | Payable account code<br/>*Example:* `"AC002"` | No |
| paymentTermCode | string | Payment term code<br/>*Example:* `"Net 0"` | No |
| purchasePriceLists | [ long ] | Set of Purchase price lists<br/>*Example:* `[123,456]` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| receivableAccountCode | string | Receivable account code<br/>*Example:* `"AC001"` | No |
| resident | boolean | Is resident?<br/>*Example:* `true` | No |
| residentStatusIndonesia | boolean | Resident Status<br/>*Example:* `true` | No |
| saArabicDetails | [ContactSAArabicDto](#contactsaarabicdto) | Contact details in Arabic for Saudi Arabia | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesPriceLists | [ long ] | Set of Sales price lists<br/>*Example:* `[123,456]` | No |
| salesTaxRegNo | string | Contact Sales Tax Registration No<br/>*Example:* `"W10-0108-000000021"` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| serviceTaxRegNo | string | Contact Service Tax Registration No<br/>*Example:* `"W10-0108-000000021"` | No |
| shippingAddress | [ [Address](#address) ] | List of Shipping Address. | No |
| taxExempted | boolean |  | No |
| taxExemptionNo | string |  | No |
| taxExemptionReason | string |  | No |
| taxTreatment | string | Tax Treatment<br/>*Enum:* `"VAT_Registered"`, `"Non_VAT_Registered"`, `"GCC_VAT_Registered"`, `"GCC_Non_VAT_Registered"`, `"Non_GCC"`, `"VAT_Registered_Designated_Zone"`, `"Non_VAT_Registered_Designated_Zone"`<br/>*Example:* `"VAT_Registered"` | No |
| taxTypeCustomer | string | Tax Types Customer<br/>*Enum:* `"TAX_CODE_CUSTOMER_01"`, `"TAX_CODE_CUSTOMER_02"`, `"TAX_CODE_CUSTOMER_03"`, `"TAX_CODE_CUSTOMER_04"`, `"TAX_CODE_CUSTOMER_05"`, `"TAX_CODE_CUSTOMER_06"`, `"TAX_CODE_CUSTOMER_07"`, `"TAX_CODE_CUSTOMER_08"`<br/>*Example:* `"TAX_CODE_CUSTOMER_01"` | No |
| taxTypeVendor | string | Tax Types Vendor<br/>*Enum:* `"TAX_CODE_VENDOR_01"`, `"TAX_CODE_VENDOR_02"`, `"TAX_CODE_VENDOR_03"`, `"TAX_CODE_VENDOR_04"`, `"TAX_CODE_VENDOR_05"`, `"TAX_CODE_VENDOR_06"`, `"TAX_CODE_VENDOR_07"`, `"TAX_CODE_VENDOR_08"`<br/>*Example:* `"TAX_CODE_VENDOR_01"` | No |
| tdsApplicableIndia | boolean |  | No |
| tdsInfoIndia | [ContactIndiaTdsInfo](#contactindiatdsinfo) |  | No |
| tdsSectionToTdsRateId | long | Contact TDS Section to Tds Rate Id<br/>*Example:* `1213454` | No |
| vatExemptionReasonPhilippines | string | Philippines specific Contact VAT Exemption Reason<br/>*Example:* `"Reason"` | No |
| vatNoPhilippines | string | Philippines specific Contact VAT No.<br/>*Example:* `"012-345-678-910"` | No |
| vatRegistrationNo | string | VAT Registration No<br/>*Example:* `123456789012345` | No |
| vatStatusPhilippines | string | Philippines specific Contact VAT Status<br/>*Example:* `"Input VAT"` | No |
| vendorType | string | Vendor Type<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"NA"` | No |
| vendorTypeMalaysia | string | Vendor Type<br/>*Enum:* `"NONE"`, `"SALES_TAX_EXEMPTION"`, `"MANUFACTURED_EXEMPTION"`, `"PERFORMED_EXEMPTION"`<br/>*Example:* `"NONE(None)"` | No |
| vendorTypePhilippines | string | Vendor Type<br/>*Enum:* `"NORMAL_CORPORATE=Normal(Corporate)"`, `"NORMAL_INDIVIDUAL=Normal(Individual)"`, `"ZERO_RATED_CORPORATE=Zero rated(Corporate)"`, `"ZERO_RATED_INDIVIDUAL=Zero Rated (Individual)"`, `"GOVERNMENT=Government"`, `"NORMAL=Normal"`, `"IMPORT=Import"`<br/>*Example:* `"Normal(Corporate)"` | No |
| whtApplicablePhilippines | boolean | Make Contact as WHT applicable<br/>*Example:* `true` | No |
| whtBusinessPhilippines | string | BIR class determines the type of business<br/>*Example:* `"Individual"` | No |

### ContactSAArabicDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [ [Address](#address) ] | Billing addresses in Arabic language | No |
| saArabicName | string | *Example:* `"Name in Saudi Arabic Language"` | No |
| shippingAddress | [ [Address](#address) ] | Shipping addresses in Arabic language | No |

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

### DocumentItemTaxMappingDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalTaxIn | boolean | true/false<br/>*Example:* `true` | No |
| taxAmount | number | Tax amount<br/>*Example:* `10` | No |
| taxApplyTo | string | Tax Apply To (Pre/AFTER)<br/>*Example:* `"Pre"` | No |
| taxCode | string | Tax Code<br/>*Example:* `"GST (10%)"` | No |
| taxName | string | Tax Name<br/>*Example:* `"GST (10%)"` | No |
| taxRate | number | Tax rate<br/>*Example:* `10` | No |
| taxSeqCode | string | Tax Sequence Code<br/>*Example:* `"0000001"` | No |
| taxableAmount | number | Taxable Amount<br/>*Example:* `100` | No |

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

### ExportDocumentRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| categoryName | string | QUOTE,INVOICE etc<br/>*Example:* `"QUOTE"` | Yes |
| customTemplate | boolean | Invoice Custom Template flag<br/>*Example:* `false` | No |
| documentCode | string | Document system number , could be invoice number, quotation number etc.<br/>*Example:* `"00001"` | No |
| documentNumber | string | Document number , could be invoice number, quotation number etc.<br/>*Example:* `"00001"` | No |
| documentType | string | *Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"` | No |
| fileName | string | File name of the template<br/>*Example:* `"QUOTE.DOCX"` | No |
| headers | [ [Map«string,object»](#map«string,object») ] |  | No |
| moduleName | string | ERP,CRM,HRMS<br/>*Example:* `"ERP"` | Yes |
| skipDocumentTemplateMapping | boolean | Skip document template mapping<br/>*Example:* `false` | No |
| templateId | long | Template id<br/>*Example:* `12` | No |

### FilterCondition

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| colId | string |  | No |
| opr | string |  | No |
| value | string |  | No |

### FilterRecord

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filterConditions | [ [FilterCondition](#filtercondition) ] |  | No |
| logicalOperator | string |  | No |
| uniqueId | long |  | No |

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

### InventoryWarehouseDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQuantity | number | Available quantity<br/>*Example:* `100` | No |
| openingQuantity | number | Opening quantity<br/>*Example:* `10` | No |
| openingValuation | number | Opening Valuation<br/>*Example:* `1000` | No |
| warehouseCode | string | Warehouse code<br/>*Example:* `"WH-00001"` | Yes |

### InvoiceResponseInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| currency | string |  | No |
| documentCode | string | document code<br/>*Example:* `"SI-0000041"` | No |
| documentSequenceCode | string | Document Sequence Code<br/>*Example:* `"00000001"` | No |
| dueAmount | number | due amount<br/>*Example:* `46` | No |
| exchangeRate | number |  | No |
| id | long | ID<br/>*Example:* `43` | No |
| invoiceDate | dateTime | invoice date<br/>*Example:* `"2018-10-01"` | No |
| invoiceDueDate | dateTime | invoice due date<br/>*Example:* `"2018-10-01"` | No |
| memo | string | memo<br/>*Example:* `"test"` | No |
| purchaseOrderRefNo | string | Contact PO reference number<br/>*Example:* `"CPO001"` | No |
| status | string | *Enum:* `"OPEN"`, `"DRAFT"`, `"CLOSED"` | No |
| supplierInvoiceNo | string | Contact supplier invoice number<br/>*Example:* `"CSI001"` | No |
| taxAmount | number | Total Amount<br/>*Example:* `1` | No |
| totalAmount | number | total amount<br/>*Example:* `46` | No |
| totalAmountInBaseCurrency | number | total amount in base currency<br/>*Example:* `46` | No |
| type | string | sale invoice or purchase invoice<br/>*Example:* `"sale_invoice"` | No |

### JobWorkOutOrderIndiaRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Job Work Out order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if job work out order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerType | string | Customer Type<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"NA"` | Yes |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Job Work Out Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if job work out order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstTreatment | string | GST Treatment<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| gstin | string | Indian state from where the good/service is shipped<br/>*Example:* `"22AAAAAA00000AA21"` | No |
| jobWorkOutOrderItems | [ [JobWorkOutOrderItemIndiaDetails](#jobworkoutorderitemindiadetails) ] | Job Work out order item details | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| placeOfSupply | string | Indian state from where the good/service is shipped<br/>*Example:* `"Delhi"` | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| vendorType | string | Vendor Type<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"NA"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### JobWorkOutOrderIndiaResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Additional Charges | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if job work out order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| billedStatus | string | job work out order billed<br/>*Enum:* `"PENDING"`, `"PARTIAL"`, `"BILLED"`<br/>*Example:* `false` | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | No |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerType | string | Customer Type<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"NA"` | Yes |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| dispatchStatus | string | Received status for the Goods<br/>*Enum:* `"PENDING_DISPATCH"`, `"PARTIALLY_DISPATCHED"`, `"DISPATCHED"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | job work out Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | job work out order drafted<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if job work out order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstTreatment | string | GST Treatment<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| gstin | string | Indian state from where the good/service is shipped<br/>*Example:* `"22AAAAAA00000AA21"` | No |
| id | long | job work out order id<br/>*Example:* `1` | No |
| jobWorkOutOrderItems | [ [JobWorkOutOrderItemIndiaDetails](#jobworkoutorderitemindiadetails) ] | Job Work out order item details | No |
| jwoCode | string | job work out Order Code<br/>*Example:* `"0000001"` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedPurchaseInvoices | [ [LinkedPurchaseInvoiceResponse](#linkedpurchaseinvoiceresponse) ] |  | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| pendingReceipt | boolean | job work out order pending receipt<br/>*Example:* `false` | No |
| placeOfSupply | string | Indian state from where the good/service is shipped<br/>*Example:* `"Delhi"` | No |
| poCode | string | job work out order code<br/>*Example:* `"PO0001"` | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| recurring | boolean | True if Order is recurring.<br/>*Example:* `true` | No |
| recurringActivated | boolean | True if Order recurrence is active.<br/>*Example:* `false` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| vendorType | string | Vendor Type<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"NA"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### JobWorkOutOrderInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase invoice additional charges details | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if JobWorkOut order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| billedStatus | string | JobWorkOut order billed<br/>*Enum:* `"PENDING"`, `"PARTIAL"`, `"BILLED"`<br/>*Example:* `"BILLED"` | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| contactDto | [ContactInformation](#contactinformation) | Contact Details | No |
| creditable | boolean | True if JobWorkOut Order is creditable<br/>*Example:* `true` | No |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerType | string | Customer Type<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"NA"` | Yes |
| dispatchStatus | string | Received status for the Goods<br/>*Enum:* `"PENDING_DISPATCH"`, `"PARTIALLY_DISPATCHED"`, `"DISPATCHED"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | JobWorkOut Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | JobWorkOut order drafted<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if JobWorkOut order is created for drop ship<br/>*Example:* `true` | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstin | string | Indian state from where the good/service is shipped<br/>*Example:* `"22AAAAAA00000AA21"` | No |
| id | long | JobWorkOut order id<br/>*Example:* `1` | No |
| jobWorkOutOrderItems | [ [JobWorkOutOrderItemInformation](#jobworkoutorderiteminformation) ] | JobWorkOut order item details | No |
| jwoCode | string | JobWorkOut order code<br/>*Example:* `"PO0001"` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedPurchaseInvoices | [ [LinkedPurchaseInvoiceResponse](#linkedpurchaseinvoiceresponse) ] |  | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| pendingReceipt | boolean | JobWorkOut order pending receipt<br/>*Example:* `false` | No |
| placeOfSupply | string | Indian state from where the good/service is shipped<br/>*Example:* `"Delhi"` | No |
| rcmApplicable | boolean | True if RCM applicable<br/>*Example:* `true` | No |
| receiptDate | string | Receipt date<br/>*Example:* `"01-10-2019"` | Yes |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number |  | No |
| tcsAmountInBaseCurrency | number |  | No |
| tcsPercentage | number |  | No |
| tcsRateId | long |  | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| vendorType | string | Vendor Type<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"NA"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### JobWorkOutOrderItemDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account<br/>*Example:* `"AC001"` | No |
| advancedTrackingType | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| bomMetaCode | string | bom meta code<br/>*Example:* `"00001"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| id | long | ID<br/>*Example:* `2` | No |
| jobWorkOutOrderItemCode | string | Job Work Out Item Code<br/>*Example:* `"POI-00001"` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| otherRate | number | Tax Rate<br/>*Example:* `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>*Example:* `10` | No |
| pendingQuantity | number | Pending quantity<br/>*Example:* `2` | No |
| product | [ProductResponse](#productresponse) | Product Details<br/>*Example:* `"product"` | No |
| productCode | string | Product<br/>*Example:* `"P002"` | No |
| productDescription | string | Description<br/>*Example:* `"Description"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | No |
| receivedQuantityInBills | number | Received quantity through bill<br/>*Example:* `2` | No |
| receivedQuantityInOrder | number | Received quantity through order<br/>*Example:* `2` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number | Unit price / Amount<br/>*Example:* `2` | No |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>*Example:* `2.3` | Yes |

### JobWorkOutOrderItemIndiaDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account<br/>*Example:* `"AC001"` | No |
| advancedTrackingType | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| bomMetaCode | string | bom meta code<br/>*Example:* `"00001"` | No |
| cessAmount | number | India specific CESS amount on total amount<br/>*Example:* `0` | No |
| cessPercentage | number | Cess Percentage<br/>*Example:* `2.322` | No |
| cessRule | string | Cess Rule if it applies to the item<br/>*Example:* `"Math.max(21*amount/100,4170*quantity/100)"` | No |
| cgstAmount | number | India specific CGST tax amount on total amount<br/>*Example:* `5` | No |
| cgstRate | number | India specific CGST rate<br/>*Example:* `5` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| hsnOrSacCode | string | Hsn or Sac code<br/>*Example:* `110011` | No |
| id | long | ID<br/>*Example:* `2` | No |
| igstAmount | number | India specific IGST tax amount on total amount<br/>*Example:* `5` | No |
| igstRate | number | India specific IGST rate<br/>*Example:* `5` | No |
| itcIneligibleType | string | Ineligible - as per Section 17(5)<br/>*Enum:* `"ITC_INELIGIBLE_SECTION_17"`, `"ITC_INELIGIBLE_OTHERS"`<br/>*Example:* `"ITC_INELIGIBLE_SECTION_17"` | No |
| jobWorkOutOrderItemCode | string | Job Work Out Item Code<br/>*Example:* `"POI-00001"` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| otherRate | number | Tax Rate<br/>*Example:* `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>*Example:* `10` | No |
| pendingQuantity | number | Pending quantity<br/>*Example:* `2` | No |
| product | [ProductResponse](#productresponse) | Product Details<br/>*Example:* `"product"` | No |
| productCode | string | Product<br/>*Example:* `"P002"` | No |
| productDescription | string | Description<br/>*Example:* `"Description"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | No |
| receivedQuantityInBills | number | Received quantity through bill<br/>*Example:* `2` | No |
| receivedQuantityInOrder | number | Received quantity through order<br/>*Example:* `2` | No |
| sgstAmount | number | India specific SGST tax amount on total amount<br/>*Example:* `5` | No |
| sgstRate | number | India specific SGST rate<br/>*Example:* `5` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| taxExemptionReason | string | Tax Exemption reason if taxPreference is true<br/>*Enum:* `"EXEMPTED"`, `"NON_GST"`<br/>*Example:* `"EXEMPTED"` | No |
| taxPreference | boolean | Tax preference, whether Exempted or not Exempted<br/>*Example:* `false` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number | Unit price / Amount<br/>*Example:* `2` | No |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>*Example:* `2.3` | Yes |
| userSetTaxes | boolean | Flag to check whether tax is user edited<br/>*Example:* `false` | No |

### JobWorkOutOrderItemInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account<br/>*Example:* `"AC001"` | No |
| bomMetaCode | string | bom meta code<br/>*Example:* `"00001"` | No |
| cessAmount | number | India specific CESS amount on total amount<br/>*Example:* `0` | No |
| cessPercentage | number | Cess Percentage<br/>*Example:* `2.322` | No |
| cessRule | string | Cess Rule if it applies to the item<br/>*Example:* `"Math.max(21*amount/100,4170*quantity/100)"` | No |
| cgstAmount | number | India specific CGST tax amount on total amount<br/>*Example:* `5` | No |
| cgstRate | number | India specific CGST rate<br/>*Example:* `5` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| exciseAmount | number | Excise amount<br/>*Example:* `0.5` | No |
| exciseRate | double | Rate of Excise<br/>*Example:* `5` | No |
| exciseType | string | Excise type<br/>*Enum:* `"PERCENT"`, `"FLAT"`<br/>*Example:* `"FLAT"` | No |
| hsnOrSacCode | string | Hsn or Sac code<br/>*Example:* `110011` | No |
| id | long | ID<br/>*Example:* `2` | No |
| igstAmount | number | India specific IGST tax amount on total amount<br/>*Example:* `5` | No |
| igstRate | number | India specific IGST rate<br/>*Example:* `5` | No |
| itcIneligibleType | string | Ineligible - as per Section 17(5)<br/>*Enum:* `"ITC_INELIGIBLE_SECTION_17"`, `"ITC_INELIGIBLE_OTHERS"`<br/>*Example:* `"ITC_INELIGIBLE_SECTION_17"` | No |
| jobWorkOutOrderItemCode | string | JobWorkOut Item Code<br/>*Example:* `"POI-00001"` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| otherRate | number | Tax Rate<br/>*Example:* `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>*Example:* `10` | No |
| pendingAmount | number | Pending amount<br/>*Example:* `100` | No |
| pendingQuantity | number | Pending quantity<br/>*Example:* `2` | No |
| product | [ProductInformation](#productinformation) | Product Details<br/>*Example:* `"product"` | No |
| productCode | string | Product<br/>*Example:* `"P002"` | No |
| productDescription | string | Description<br/>*Example:* `"Description"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | No |
| receivedQuantityInBills | number | Received quantity through bill<br/>*Example:* `2` | No |
| receivedQuantityInOrder | number | Received quantity through order<br/>*Example:* `2` | No |
| sgstAmount | number | India specific SGST tax amount on total amount<br/>*Example:* `5` | No |
| sgstRate | number | India specific SGST rate<br/>*Example:* `5` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| taxDetails | [ [DocumentItemTaxMappingDto](#documentitemtaxmappingdto) ] | Tax Details for Tax Group | No |
| taxExemptionReason | string | Tax Exemption reason if taxPreference is true<br/>*Enum:* `"EXEMPTED"`, `"NON_GST"`<br/>*Example:* `"EXEMPTED"` | No |
| taxPreference | boolean | Tax preference, whether Exempted or not Exempted<br/>*Example:* `false` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number | Unit price / Amount<br/>*Example:* `2` | No |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>*Example:* `2.3` | Yes |
| userSetTaxes | boolean | Flag to check whether tax is user edited<br/>*Example:* `false` | No |

### JobWorkOutOrderRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Job Work Out order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if job work out order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Job Work Out Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if job work out order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| jobWorkOutOrderItems | [ [JobWorkOutOrderItemDetails](#jobworkoutorderitemdetails) ] | Job Work out order item details | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### JobWorkOutOrderResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if job work out order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| billedStatus | string | job work out order billed<br/>*Enum:* `"PENDING"`, `"PARTIAL"`, `"BILLED"`<br/>*Example:* `false` | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | No |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| dispatchStatus | string | Received status for the Goods<br/>*Enum:* `"PENDING_DISPATCH"`, `"PARTIALLY_DISPATCHED"`, `"DISPATCHED"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | job work out Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | job work out order drafted<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if job work out order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| id | long | job work out order id<br/>*Example:* `1` | No |
| jobWorkOutOrderItems | [ [AbstractJobWorkOutOrderItemDetails](#abstractjobworkoutorderitemdetails) ] | Job Work out order item details | No |
| jwoCode | string | job work out Order Code<br/>*Example:* `"0000001"` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedPurchaseInvoices | [ [LinkedPurchaseInvoiceResponse](#linkedpurchaseinvoiceresponse) ] |  | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| pendingReceipt | boolean | job work out order pending receipt<br/>*Example:* `false` | No |
| poCode | string | job work out order code<br/>*Example:* `"PO0001"` | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| recurring | boolean | True if Order is recurring.<br/>*Example:* `true` | No |
| recurringActivated | boolean | True if Order recurrence is active.<br/>*Example:* `false` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### LandedCostCategory

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allocationType | string | *Enum:* `"QUANTITY"`, `"VALUE"`, `"WEIGHT"`, `"MANUAL"`, `"CUSTOM_DUTY"` | No |
| name | string |  | No |

### LandedCostDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allocationType | string | *Enum:* `"QUANTITY"`, `"VALUE"`, `"WEIGHT"`, `"MANUAL"`, `"CUSTOM_DUTY"` | No |
| categoryName | string |  | No |
| landedCostCategory | string |  | No |
| productDetails | [ [LandedCostProductDetails](#landedcostproductdetails) ] |  | No |

### LandedCostProductDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allocatedCost | number |  | No |
| customDutyAndOtherCharges | number |  | No |
| gstRate | string |  | No |
| hsncode | string |  | No |
| igst | number |  | No |
| product | string |  | No |
| productId | string |  | No |
| quantity | number |  | No |
| taxableValueForCustomDuty | number |  | No |
| taxableValueForIGST | number |  | No |
| totalAmount | number |  | No |
| unitPrice | number |  | No |

### LinkedDocumentResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentDate | dateTime | Purchase Invoice date<br/>*Example:* `"25-10-2019"` | Yes |
| documentSequenceCode | string | Purchase invoice Sequence Code<br/>*Example:* `"0000001"` | No |
| dueAmount | number | Amount Due<br/>*Example:* `12.322` | No |
| totalAmount | number | Total Invoice amount<br/>*Example:* `12.322` | No |

### LinkedDocumentUpdateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| newLinkedDocument | [DocumentInfo](#documentinfo) |  | No |
| oldLinkedDocument | [DocumentInfo](#documentinfo) |  | No |

### LinkedDocumentsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| used | boolean |  | No |

### LinkedPurchaseInvoiceResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentSequenceCode | string | Purchase invoice Sequence Code<br/>*Example:* `"0000001"` | No |
| dueAmount | number | Amount Due<br/>*Example:* `12.322` | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| isPartialInvoice | boolean | is Partial Invoice<br/>*Example:* `true` | No |
| purchaseInvoiceCode | string | Purchase invoice code<br/>*Example:* `"SI001"` | No |
| purchaseInvoiceDate | string | Purchase Invoice date<br/>*Example:* `"25-10-2019"` | Yes |
| totalAmount | number | Total Invoice amount<br/>*Example:* `12.322` | No |

### LinkedPurchaseOrderResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentSequenceCode | string | Purchase order Sequence Code<br/>*Example:* `"0000001"` | No |
| isPartialOrder | boolean | is Partial Order<br/>*Example:* `true` | No |
| purchaseOrderCode | string | Purchase order code<br/>*Example:* `"PO001"` | No |
| totalAmount | number | Total Order amount<br/>*Example:* `12.322` | No |

### Map«string,object»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Map«string,object» | object |  |  |

### Map«string,string»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Map«string,string» | object |  |  |

### MonthData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| count | integer |  | No |
| month | string | *Enum:* `"JANUARY"`, `"FEBRUARY"`, `"MARCH"`, `"APRIL"`, `"MAY"`, `"JUNE"`, `"JULY"`, `"AUGUST"`, `"SEPTEMBER"`, `"OCTOBER"`, `"NOVEMBER"`, `"DECEMBER"` | No |
| year | [Year](#year) |  | No |

### OrderOverview

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| count | integer |  | No |
| data | [ [MonthData](#monthdata) ] |  | No |
| totalAmount | number |  | No |

### OrderOverviewReport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billedNotFulfilled | [OrderOverview](#orderoverview) |  | No |
| billedNotReceived | [OrderOverview](#orderoverview) |  | No |
| closed | [OrderOverview](#orderoverview) |  | No |
| drafts | [OrderOverview](#orderoverview) |  | No |
| fulfilled | [OrderOverview](#orderoverview) |  | No |
| fulfilledNotBilled | [OrderOverview](#orderoverview) |  | No |
| open | [OrderOverview](#orderoverview) |  | No |
| pending | [OrderOverview](#orderoverview) |  | No |
| received | [OrderOverview](#orderoverview) |  | No |
| receivedNotBilled | [OrderOverview](#orderoverview) |  | No |
| total | [OrderOverview](#orderoverview) |  | No |
| unbilled | [OrderOverview](#orderoverview) |  | No |
| unfulfilled | [OrderOverview](#orderoverview) |  | No |

### OrderReportInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactName | string |  | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| docCurrency | string |  | No |
| documentCode | string |  | No |
| orderDateFormat | string |  | No |
| orderDueDateFormat | string |  | No |
| receiptStatus | string |  | No |
| totalAmount | string |  | No |

### OrderRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| addProcessingFee | boolean | flag to add processing fee<br/>*Example:* `true` | No |
| amount | number | Order amount<br/>*Example:* `3546.23` | No |
| currency | string | Currency<br/>*Example:* `"USD"` | No |
| customerEmail | string | Customer email<br/>*Example:* `"john@doe.com"` | No |
| customerName | string | Customer Name<br/>*Example:* `"John"` | No |
| daysUntilDue | integer | due date<br/>*Example:* `30` | No |
| description | string | Description<br/>*Example:* `"Order for inventory"` | No |
| platformDetails | [PlatformDetailsDto](#platformdetailsdto) | Platform details dto<br/>*Example:* `"platformDetailsDto"` | No |

### Pageable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| offset | long |  | No |
| pageNumber | integer |  | No |
| pageSize | integer |  | No |
| paged | boolean |  | No |
| sort | [Sort](#sort) |  | No |
| unpaged | boolean |  | No |

### Page«JobWorkOutOrderIndiaResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [JobWorkOutOrderIndiaResponse](#jobworkoutorderindiaresponse) ] |  | No |
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

### Page«JobWorkOutOrderResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [JobWorkOutOrderResponse](#jobworkoutorderresponse) ] |  | No |
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

### Page«PurchaseOrderAustraliaResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [PurchaseOrderAustraliaResponse](#purchaseorderaustraliaresponse) ] |  | No |
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

### Page«PurchaseOrderCanadaResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [PurchaseOrderCanadaResponse](#purchaseordercanadaresponse) ] |  | No |
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

### Page«PurchaseOrderDEResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [PurchaseOrderDEResponse](#purchaseorderderesponse) ] |  | No |
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

### Page«PurchaseOrderIndiaResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [PurchaseOrderIndiaResponse](#purchaseorderindiaresponse) ] |  | No |
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

### Page«PurchaseOrderIndonesiaResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [PurchaseOrderIndonesiaResponse](#purchaseorderindonesiaresponse) ] |  | No |
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

### Page«PurchaseOrderIsraelResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [PurchaseOrderIsraelResponse](#purchaseorderisraelresponse) ] |  | No |
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

### Page«PurchaseOrderMalaysiaResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [PurchaseOrderMalaysiaResponse](#purchaseordermalaysiaresponse) ] |  | No |
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

### Page«PurchaseOrderPhilippinesResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [PurchaseOrderPhilippinesResponse](#purchaseorderphilippinesresponse) ] |  | No |
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

### Page«PurchaseOrderResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [PurchaseOrderResponse](#purchaseorderresponse) ] |  | No |
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

### Page«PurchaseOrderSaudiArabiaResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [PurchaseOrderSaudiArabiaResponse](#purchaseordersaudiarabiaresponse) ] |  | No |
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

### Page«PurchaseOrderUKResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [PurchaseOrderUKResponse](#purchaseorderukresponse) ] |  | No |
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

### Page«PurchaseOrderUaeResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [PurchaseOrderUaeResponse](#purchaseorderuaeresponse) ] |  | No |
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

### Page«PurchaseRequestResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [PurchaseRequestResponse](#purchaserequestresponse) ] |  | No |
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

### Page«SalesOrderResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [SalesOrderResponse](#salesorderresponse) ] |  | No |
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

### PaymentMilestoneDetailsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Amount<br/>*Example:* `100` | Yes |
| amountInPercent | number |  | No |
| amountInPercentFlag | boolean |  | No |
| contactCode | string | Contact Code<br/>*Example:* `"C-000001"` | Yes |
| documentCode | string | Document Code<br/>*Example:* `"000001"` | Yes |
| documentType | string | Document Type<br/>*Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`<br/>*Example:* `"SALES_INVOICE"` | Yes |
| dueAmount | number | Payment Due Amount<br/>*Example:* `0` | Yes |
| id | long |  | No |
| linkedDocument | [LinkedDocumentResponse](#linkeddocumentresponse) | linkedDocument<br/>*Example:* `{}` | Yes |
| milestoneDate | string | Milestone Date<br/>*Example:* `"25-10-2019"` | Yes |
| milestoneNo | integer | Milestone Number<br/>*Example:* `1` | Yes |
| receivedAmount | number | Payment Received Amount<br/>*Example:* `100` | Yes |
| status | string | Status<br/>*Enum:* `"PAYMENT_DUE"`, `"PAYMENT_ON_TIME"`, `"DELAYED"`<br/>*Example:* `"DELAYED"` | Yes |

### PlatformDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account ID<br/>*Example:* `"ACC001"` | No |
| contactCode | string | Contact ID<br/>*Example:* `"C001"` | No |
| documentCode | string | Document Code<br/>*Example:* `"DOC001"` | No |
| documentDate | string | Document Date<br/>*Example:* `"2020-10-10"` | No |
| documentType | string | Document Type<br/>*Example:* `"INVOICE"` | No |
| invoiceId | string | Invoice ID<br/>*Example:* `"INV001"` | No |
| memo | string | Memo Description<br/>*Example:* `"Invoice sent for payment"` | No |
| paymentCode | string | Payment Code<br/>*Example:* `124552` | No |
| userId | string | User ID<br/>*Example:* `1142` | No |

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

### ProductRevenueRecognitionInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allocationType | string | Allocation Type<br/>*Example:* `"Normal/Exclude"` | No |
| createRevenuePlanOn | string | Create Revenue Plan On<br/>*Example:* `"Fulfillment"` | No |
| isDirectRevenuePositing | boolean | Direct Revenue Positing<br/>*Example:* `true` | No |
| itemRevenueCategory | string | Item Revenue Category<br/>*Example:* `"Licence"` | No |
| revRecForecastRule | string | Revenue Recognition Forecast Rule<br/>*Example:* `"Rule Forecast 1"` | No |
| revRecRule | string | Revenue Recognition Rule<br/>*Example:* `"Rule 1"` | No |

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

### PurchaseInvoiceAccountDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| account | [AccountDto](#accountdto) | Account Response<br/>*Example:* `"product"` | No |
| accountCode | string | Product code<br/>*Example:* `"P00001"` | Yes |
| accountDescription | string | Product description<br/>*Example:* `"Apple watch"` | No |
| accountOrder | integer | Product view order<br/>*Example:* `1` | No |
| amount | number | Amount<br/>*Example:* `2` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| id | long | ID<br/>*Example:* `2` | No |
| isTdsApplicableAccount | boolean |  | No |
| isTdsApplicableContact | boolean |  | No |
| isTdsApplicableProduct | boolean |  | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| tdsAccount | string | Tds Account Code<br/>*Example:* `"AC-0000011"` | No |
| tdsAmount | number | TDS Amount<br/>*Example:* `100` | No |
| tdsInfoIndia | [TdsInfoIndia](#tdsinfoindia) | Purchase invoice TDS details | No |
| tdsRate | number | TDS Rate<br/>*Example:* `10.1` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |

### PurchaseInvoiceAssetGroupDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalChargeAmount | number |  | No |
| additionalChargeTaxamount | number |  | No |
| additionalCharges | [AdditionalCharges](#additionalcharges) |  | No |
| amount | number | Amount<br/>*Example:* `2` | Yes |
| assetDetails | [ [AssetRequest](#assetrequest) ] |  | No |
| assetGroupId | long |  | No |
| assetGroupName | string | Product code<br/>*Example:* `"P00001"` | Yes |
| assetGroupResponse | [AssetGroupResponse](#assetgroupresponse) | Account Response<br/>*Example:* `"product"` | No |
| assetOrder | integer | Product view order<br/>*Example:* `1` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Product description<br/>*Example:* `"Apple watch"` | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| id | long | ID<br/>*Example:* `2` | No |
| invoiceItemCode | string |  | No |
| isPartialInvoice | boolean | Whether the Purchase Invoice is a partial invoice<br/>*Example:* `false` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| linkedOrderItem | long | Order Item linked to invoice item<br/>*Example:* `123` | No |
| quantity | number |  | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number |  | No |

### PurchaseInvoiceProductDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalChargeAmount | number | *Example:* `123` | No |
| additionalChargeAmountCalculated | number |  | No |
| additionalChargeTaxamount | number | *Example:* `123` | No |
| additionalChargeTaxamountCalculated | number |  | No |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase invoice item additional charges details | No |
| advancedTrackingType | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| amortizationDocumentItemDetails | [AmortizationDocumentItemDetails](#amortizationdocumentitemdetails) |  | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| id | long | ID<br/>*Example:* `2` | No |
| invoiceLineNumber | string | Invoice Line Number<br/>*Example:* `"ABSCDDSD1212"` | No |
| isPartialInvoice | boolean | Whether the Purchase Invoice is a partial invoice<br/>*Example:* `false` | No |
| landedCostDetails | [LandedCostDetails](#landedcostdetails) | Details for landed cost | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| linkedOrderItem | long | Order Item linked to invoice item<br/>*Example:* `123` | No |
| product | [ProductResponse](#productresponse) | Product Response<br/>*Example:* `"product"` | No |
| productCode | string | Product code<br/>*Example:* `"P00001"` | Yes |
| productDescription | string | Product description<br/>*Example:* `"Apple watch"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | Yes |
| purchaseInvoiceItemCode | string | Purchase Invoice Item Code<br/>*Example:* `"PII-000001"` | No |
| rcmRateSA | number | tax rate of rcm<br/>*Example:* `5` | No |
| rcmTaxAmountSA | number | tax rate of rcm<br/>*Example:* `5` | No |
| receivedQuantityInBills | number | *Example:* `123` | No |
| receivedQuantityInOrder | number | *Example:* `123` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| tdsAccount | string | Tds Account Code<br/>*Example:* `"AC-0000011"` | No |
| tdsAmount | number | TDS Amount<br/>*Example:* `100` | No |
| tdsId | integer | TDS Id<br/>*Example:* `1` | No |
| tdsRate | number | TDS Rate<br/>*Example:* `10.1` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| uaeRcmRate | number | tax rate of rcm<br/>*Example:* `5` | No |
| unitPrice | number | Product unit price<br/>*Example:* `0.7` | Yes |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>*Example:* `2.3` | Yes |
| vatCustomRateSA | number | tax rate of rcm<br/>*Example:* `5` | No |
| vatTaxAmountSA | number | tax rate of rcm<br/>*Example:* `5` | No |

### PurchaseInvoiceRecurringDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | ID<br/>*Example:* `2` | No |
| invoiceRecurringCount | integer | Number of Invoices to be created<br/>*Example:* `1` | Yes |
| recurrenceEndDate | string | Recurrence End date<br/>*Example:* `"25-10-2019"` | Yes |
| recurrenceFrequency | string | Days, Weeks or Months<br/>*Enum:* `"DAYS"`, `"WEEK"`, `"MONTH"`<br/>*Example:* `"WEEK"` | Yes |
| recurrenceType | integer | Every x Days/Weeks/Months<br/>*Example:* `1` | Yes |

### PurchaseInvoiceRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase invoice additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] |  | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase invoice is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact details | Yes |
| contactCode | string | Contact Code<br/>*Example:* `"C0001"` | Yes |
| currency | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| documentSequenceCode | string | Bill Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>*Example:* `false` | No |
| draftReferenceId | string | Draft reference id | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase invoice is created for drop ship<br/>*Example:* `true` | No |
| dueAmount | number | Amount Due<br/>*Example:* `12.322` | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| isPartialInvoice | boolean | True if is partial invoice<br/>*Example:* `false` | No |
| journalEntryCode | string | Journal Entry Code<br/>*Example:* `"JE0001"` | No |
| landedCost | boolean | To mark landed cost bill<br/>*Example:* `true` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked Documents | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingDocumentNumber | string | Customer opening document number<br/>*Example:* `"DC-0001"` | No |
| openingInvoice | boolean | True if opening invoice<br/>*Example:* `false` | No |
| payableAccountCode | string | Code of Account<br/>*Example:* `"AC-000001"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| paymentStatus | string | Payment status<br/>*Enum:* `"PENDING"`, `"PARTIAL"`, `"RECEIVED"`<br/>*Example:* `"PENDING"` | No |
| purchaseInvoiceAccounts | [ [PurchaseInvoiceAccountDetails](#purchaseinvoiceaccountdetails) ] | Purchase invoice Account item details | No |
| purchaseInvoiceAssets | [ [PurchaseInvoiceAssetGroupDetails](#purchaseinvoiceassetgroupdetails) ] |  | No |
| purchaseInvoiceDate | string | Purchase Invoice date<br/>*Example:* `"25-10-2019"` | Yes |
| purchaseInvoiceDueDate | string | Purchase Invoice due date<br/>*Example:* `"25-10-2019"` | Yes |
| purchaseInvoiceProducts | [ [PurchaseInvoiceProductDetails](#purchaseinvoiceproductdetails) ] | Purchase invoice Product item details | No |
| purchaseInvoiceRecurring | [PurchaseInvoiceRecurringDetails](#purchaseinvoicerecurringdetails) | Purchase invoice item details | No |
| purchaseInvoiceType | string | Purchase invoice type.<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`, `"ASSET"`<br/>*Example:* `"INVENTORY"` | Yes |
| purchaseOrderRefNo | string | Contact PO reference number<br/>*Example:* `"CPO001"` | No |
| receiptDate | dateTime | Receipt date<br/>*Example:* `"25-10-2019"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| receiveGoodsStatus | string | receipt goods status<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receivedComplete | boolean | True if auto received is required.<br/>*Example:* `false` | No |
| recurring | boolean | True if Invoice is recurring.<br/>*Example:* `true` | No |
| recurringActivated | boolean | True if Invoice recurrence is active.<br/>*Example:* `false` | No |
| roundOffAmountInBaseCurrency | number | Round Off Amount In Base Currency<br/>*Example:* `12.322` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount In Document Currency<br/>*Example:* `12.322` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Invoice status<br/>*Enum:* `"OPEN"`, `"DRAFT"`, `"CLOSED"`<br/>*Example:* `"OPEN"` | No |
| supplierInvoiceNo | string |  | No |
| taxAmount | number | Tax amount<br/>*Example:* `2.322` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `12.322` | No |
| totalAmountInBaseCurrency | number | Total amount in base currency<br/>*Example:* `12.322` | No |
| totalTdsAmount | number | Total Tds Amount<br/>*Example:* `12.32` | No |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | No |

### PurchaseOrderAssetGroupDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Amount<br/>*Example:* `2` | Yes |
| assetDetails | [ [AssetRequest](#assetrequest) ] |  | No |
| assetGroupId | long |  | No |
| assetGroupName | string | Product code<br/>*Example:* `"P00001"` | Yes |
| assetGroupResponse | [AssetGroupResponse](#assetgroupresponse) | Account Response<br/>*Example:* `"product"` | No |
| assetOrder | integer | Product view order<br/>*Example:* `1` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Product description<br/>*Example:* `"Apple watch"` | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| id | long | ID<br/>*Example:* `2` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| purchaseOrderItemCode | string |  | No |
| quantity | number |  | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number |  | No |

### PurchaseOrderAustraliaRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemAustraliaDetails](#purchaseorderitemaustraliadetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderAustraliaResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| billed | boolean | Purchase order billed<br/>*Example:* `false` | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | No |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | Purchase order drafted<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| id | long | Purchase order id<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedPurchaseInvoices | [ [LinkedPurchaseInvoiceResponse](#linkedpurchaseinvoiceresponse) ] |  | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| pendingReceipt | boolean | Purchase order pending receipt<br/>*Example:* `false` | No |
| poCode | string | Purchase order code<br/>*Example:* `"PO0001"` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemAustraliaDetails](#purchaseorderitemaustraliadetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| recurring | boolean | True if Order is recurring.<br/>*Example:* `true` | No |
| recurringActivated | boolean | True if Order recurrence is active.<br/>*Example:* `false` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderCanadaRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemCanadaDetails](#purchaseorderitemcanadadetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderCanadaResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| billed | boolean | Purchase order billed<br/>*Example:* `false` | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | No |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | Purchase order drafted<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| id | long | Purchase order id<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedPurchaseInvoices | [ [LinkedPurchaseInvoiceResponse](#linkedpurchaseinvoiceresponse) ] |  | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| pendingReceipt | boolean | Purchase order pending receipt<br/>*Example:* `false` | No |
| poCode | string | Purchase order code<br/>*Example:* `"PO0001"` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemCanadaDetails](#purchaseorderitemcanadadetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| recurring | boolean | True if Order is recurring.<br/>*Example:* `true` | No |
| recurringActivated | boolean | True if Order recurrence is active.<br/>*Example:* `false` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderDERequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemDEDetails](#purchaseorderitemdedetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderDEResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| billed | boolean | Purchase order billed<br/>*Example:* `false` | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | No |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | Purchase order drafted<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| id | long | Purchase order id<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedPurchaseInvoices | [ [LinkedPurchaseInvoiceResponse](#linkedpurchaseinvoiceresponse) ] |  | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| pendingReceipt | boolean | Purchase order pending receipt<br/>*Example:* `false` | No |
| poCode | string | Purchase order code<br/>*Example:* `"PO0001"` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemDEDetails](#purchaseorderitemdedetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| recurring | boolean | True if Order is recurring.<br/>*Example:* `true` | No |
| recurringActivated | boolean | True if Order recurrence is active.<br/>*Example:* `false` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderIndiaRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerType | string | Customer Type<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"NA"` | Yes |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstTreatment | string | GST Treatment<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| gstin | string | Indian state from where the good/service is shipped<br/>*Example:* `"22AAAAAA00000AA21"` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| placeOfSupply | string | Indian state from where the good/service is shipped<br/>*Example:* `"Delhi"` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemIndiaDetails](#purchaseorderitemindiadetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| vendorType | string | Vendor Type<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"NA"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderIndiaResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Additional Charges | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| billed | boolean | Purchase order billed<br/>*Example:* `false` | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | No |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerType | string | Customer Type<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"NA"` | Yes |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | Purchase order drafted<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstTreatment | string | GST Treatment<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| gstin | string | Indian state from where the good/service is shipped<br/>*Example:* `"22AAAAAA00000AA21"` | No |
| id | long | Purchase order id<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedPurchaseInvoices | [ [LinkedPurchaseInvoiceResponse](#linkedpurchaseinvoiceresponse) ] |  | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| pendingReceipt | boolean | Purchase order pending receipt<br/>*Example:* `false` | No |
| placeOfSupply | string | Indian state from where the good/service is shipped<br/>*Example:* `"Delhi"` | No |
| poCode | string | Purchase order code<br/>*Example:* `"PO0001"` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemIndiaDetails](#purchaseorderitemindiadetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| recurring | boolean | True if Order is recurring.<br/>*Example:* `true` | No |
| recurringActivated | boolean | True if Order recurrence is active.<br/>*Example:* `false` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| vendorType | string | Vendor Type<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"NA"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderIndonesiaRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| creditable | string | True if Purchase Order is creditable<br/>*Example:* `true` | No |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemIndonesiaDetails](#purchaseorderitemindonesiadetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderIndonesiaResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| billed | boolean | Purchase order billed<br/>*Example:* `false` | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | No |
| creditable | string | True if Purchase Order is creditable<br/>*Example:* `true` | No |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | Purchase order drafted<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| id | long | Purchase order id<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedPurchaseInvoices | [ [LinkedPurchaseInvoiceResponse](#linkedpurchaseinvoiceresponse) ] |  | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| pendingReceipt | boolean | Purchase order pending receipt<br/>*Example:* `false` | No |
| poCode | string | Purchase order code<br/>*Example:* `"PO0001"` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemIndonesiaDetails](#purchaseorderitemindonesiadetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| recurring | boolean | True if Order is recurring.<br/>*Example:* `true` | No |
| recurringActivated | boolean | True if Order recurrence is active.<br/>*Example:* `false` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase invoice additional charges details | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| billed | boolean | Purchase order billed<br/>*Example:* `false` | No |
| closedDate | string | Closed date<br/>*Example:* `"01-10-2019"` | Yes |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| contactDto | [ContactInformation](#contactinformation) | Contact Details | No |
| creditable | boolean | True if Purchase Order is creditable<br/>*Example:* `true` | No |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerType | string | Customer Type<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"NA"` | Yes |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | Purchase order drafted<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Due date<br/>*Example:* `"01-10-2019"` | Yes |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstin | string | Indian state from where the good/service is shipped<br/>*Example:* `"22AAAAAA00000AA21"` | No |
| id | long | Purchase order id<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedPurchaseInvoices | [ [LinkedPurchaseInvoiceResponse](#linkedpurchaseinvoiceresponse) ] |  | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneDetails | [ [PaymentMilestoneDetailsResponse](#paymentmilestonedetailsresponse) ] | Payment milestone details | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| pendingReceipt | boolean | Purchase order pending receipt<br/>*Example:* `false` | No |
| placeOfSupply | string | Indian state from where the good/service is shipped<br/>*Example:* `"Delhi"` | No |
| poCode | string | Purchase order code<br/>*Example:* `"PO0001"` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemInformation](#purchaseorderiteminformation) ] | Purchase order item details | No |
| rcmApplicable | boolean | True if RCM applicable<br/>*Example:* `true` | No |
| receiptDate | string | Receipt date<br/>*Example:* `"01-10-2019"` | Yes |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| recurring | boolean | True if Order is recurring.<br/>*Example:* `true` | No |
| recurringActivated | boolean | True if Order recurrence is active.<br/>*Example:* `false` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number |  | No |
| tcsAmountInBaseCurrency | number |  | No |
| tcsPercentage | number |  | No |
| tcsRateId | long |  | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| vendorType | string | Vendor Type<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"NA"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderIsraelRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemIsraelDetails](#purchaseorderitemisraeldetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderIsraelResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| billed | boolean | Purchase order billed<br/>*Example:* `false` | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | No |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | Purchase order drafted<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| id | long | Purchase order id<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedPurchaseInvoices | [ [LinkedPurchaseInvoiceResponse](#linkedpurchaseinvoiceresponse) ] |  | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| pendingReceipt | boolean | Purchase order pending receipt<br/>*Example:* `false` | No |
| poCode | string | Purchase order code<br/>*Example:* `"PO0001"` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemIsraelDetails](#purchaseorderitemisraeldetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| recurring | boolean | True if Order is recurring.<br/>*Example:* `true` | No |
| recurringActivated | boolean | True if Order recurrence is active.<br/>*Example:* `false` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderItemAustraliaDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account<br/>*Example:* `"AC001"` | No |
| additionalChargeAmount | number | *Example:* `123` | No |
| additionalChargeTaxamount | number | *Example:* `123` | No |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order item additional charges details | No |
| advancedTrackingType | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| id | long | ID<br/>*Example:* `2` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| otherRate | number | Tax Rate<br/>*Example:* `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>*Example:* `10` | No |
| pendingQuantity | number | Pending quantity<br/>*Example:* `2` | No |
| product | [ProductResponse](#productresponse) | Product Details<br/>*Example:* `"product"` | No |
| productCode | string | Product<br/>*Example:* `"P002"` | No |
| productDescription | string | Description<br/>*Example:* `"Description"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | No |
| purchaseOrderItemCode | string | Purchase Item Code<br/>*Example:* `"POI-00001"` | No |
| receivedQuantityInBills | number | Received quantity through bill<br/>*Example:* `2` | No |
| receivedQuantityInOrder | number | Received quantity through order<br/>*Example:* `2` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number | Unit price / Amount<br/>*Example:* `2` | No |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>*Example:* `2.3` | Yes |

### PurchaseOrderItemCanadaDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account<br/>*Example:* `"AC001"` | No |
| additionalChargeAmount | number | *Example:* `123` | No |
| additionalChargeTaxamount | number | *Example:* `123` | No |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order item additional charges details | No |
| advancedTrackingType | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| id | long | ID<br/>*Example:* `2` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| otherRate | number | Tax Rate<br/>*Example:* `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>*Example:* `10` | No |
| pendingQuantity | number | Pending quantity<br/>*Example:* `2` | No |
| product | [ProductResponse](#productresponse) | Product Details<br/>*Example:* `"product"` | No |
| productCode | string | Product<br/>*Example:* `"P002"` | No |
| productDescription | string | Description<br/>*Example:* `"Description"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | No |
| purchaseOrderItemCode | string | Purchase Item Code<br/>*Example:* `"POI-00001"` | No |
| receivedQuantityInBills | number | Received quantity through bill<br/>*Example:* `2` | No |
| receivedQuantityInOrder | number | Received quantity through order<br/>*Example:* `2` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number | Unit price / Amount<br/>*Example:* `2` | No |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>*Example:* `2.3` | Yes |

### PurchaseOrderItemDEDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account<br/>*Example:* `"AC001"` | No |
| additionalChargeAmount | number | *Example:* `123` | No |
| additionalChargeTaxamount | number | *Example:* `123` | No |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order item additional charges details | No |
| advancedTrackingType | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| id | long | ID<br/>*Example:* `2` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| otherRate | number | Tax Rate<br/>*Example:* `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>*Example:* `10` | No |
| pendingQuantity | number | Pending quantity<br/>*Example:* `2` | No |
| product | [ProductResponse](#productresponse) | Product Details<br/>*Example:* `"product"` | No |
| productCode | string | Product<br/>*Example:* `"P002"` | No |
| productDescription | string | Description<br/>*Example:* `"Description"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | No |
| purchaseOrderItemCode | string | Purchase Item Code<br/>*Example:* `"POI-00001"` | No |
| receivedQuantityInBills | number | Received quantity through bill<br/>*Example:* `2` | No |
| receivedQuantityInOrder | number | Received quantity through order<br/>*Example:* `2` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number | Unit price / Amount<br/>*Example:* `2` | No |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>*Example:* `2.3` | Yes |

### PurchaseOrderItemDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account<br/>*Example:* `"AC001"` | No |
| additionalChargeAmount | number | *Example:* `123` | No |
| additionalChargeTaxamount | number | *Example:* `123` | No |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order item additional charges details | No |
| advancedTrackingType | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| id | long | ID<br/>*Example:* `2` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| otherRate | number | Tax Rate<br/>*Example:* `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>*Example:* `10` | No |
| pendingQuantity | number | Pending quantity<br/>*Example:* `2` | No |
| product | [ProductResponse](#productresponse) | Product Details<br/>*Example:* `"product"` | No |
| productCode | string | Product<br/>*Example:* `"P002"` | No |
| productDescription | string | Description<br/>*Example:* `"Description"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | No |
| purchaseOrderItemCode | string | Purchase Item Code<br/>*Example:* `"POI-00001"` | No |
| receivedQuantityInBills | number | Received quantity through bill<br/>*Example:* `2` | No |
| receivedQuantityInOrder | number | Received quantity through order<br/>*Example:* `2` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number | Unit price / Amount<br/>*Example:* `2` | No |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>*Example:* `2.3` | Yes |

### PurchaseOrderItemIndiaDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account<br/>*Example:* `"AC001"` | No |
| additionalChargeAmount | number | *Example:* `123` | No |
| additionalChargeTaxamount | number | *Example:* `123` | No |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order item additional charges details | No |
| advancedTrackingType | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| cessAmount | number | India specific CESS amount on total amount<br/>*Example:* `0` | No |
| cessPercentage | number | Cess Percentage<br/>*Example:* `2.322` | No |
| cessRule | string | Cess Rule if it applies to the item<br/>*Example:* `"Math.max(21*amount/100,4170*quantity/100)"` | No |
| cgstAmount | number | India specific CGST tax amount on total amount<br/>*Example:* `5` | No |
| cgstRate | number | India specific CGST rate<br/>*Example:* `5` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| hsnOrSacCode | string | Hsn or Sac code<br/>*Example:* `110011` | No |
| id | long | ID<br/>*Example:* `2` | No |
| igstAmount | number | India specific IGST tax amount on total amount<br/>*Example:* `5` | No |
| igstRate | number | India specific IGST rate<br/>*Example:* `5` | No |
| itcIneligibleType | string | Ineligible - as per Section 17(5)<br/>*Enum:* `"ITC_INELIGIBLE_SECTION_17"`, `"ITC_INELIGIBLE_OTHERS"`<br/>*Example:* `"ITC_INELIGIBLE_SECTION_17"` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| otherRate | number | Tax Rate<br/>*Example:* `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>*Example:* `10` | No |
| pendingQuantity | number | Pending quantity<br/>*Example:* `2` | No |
| product | [ProductResponse](#productresponse) | Product Details<br/>*Example:* `"product"` | No |
| productCode | string | Product<br/>*Example:* `"P002"` | No |
| productDescription | string | Description<br/>*Example:* `"Description"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | No |
| purchaseOrderItemCode | string | Purchase Item Code<br/>*Example:* `"POI-00001"` | No |
| receivedQuantityInBills | number | Received quantity through bill<br/>*Example:* `2` | No |
| receivedQuantityInOrder | number | Received quantity through order<br/>*Example:* `2` | No |
| sgstAmount | number | India specific SGST tax amount on total amount<br/>*Example:* `5` | No |
| sgstRate | number | India specific SGST rate<br/>*Example:* `5` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| taxExemptionReason | string | Tax Exemption reason if taxPreference is true<br/>*Enum:* `"EXEMPTED"`, `"NON_GST"`<br/>*Example:* `"EXEMPTED"` | No |
| taxPreference | boolean | Tax preference, whether Exempted or not Exempted<br/>*Example:* `false` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number | Unit price / Amount<br/>*Example:* `2` | No |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>*Example:* `2.3` | Yes |
| userSetTaxes | boolean | Flag to check whether tax is user edited<br/>*Example:* `false` | No |

### PurchaseOrderItemIndonesiaDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account<br/>*Example:* `"AC001"` | No |
| additionalChargeAmount | number | *Example:* `123` | No |
| additionalChargeTaxamount | number | *Example:* `123` | No |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order item additional charges details | No |
| advancedTrackingType | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| exciseAmount | number | Excise amount<br/>*Example:* `0.5` | No |
| exciseRate | double | Rate of Excise<br/>*Example:* `5` | No |
| exciseType | string | Excise type<br/>*Enum:* `"PERCENT"`, `"FLAT"`<br/>*Example:* `"FLAT"` | No |
| id | long | ID<br/>*Example:* `2` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| otherRate | number | Tax Rate<br/>*Example:* `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>*Example:* `10` | No |
| pendingQuantity | number | Pending quantity<br/>*Example:* `2` | No |
| product | [ProductResponse](#productresponse) | Product Details<br/>*Example:* `"product"` | No |
| productCode | string | Product<br/>*Example:* `"P002"` | No |
| productDescription | string | Description<br/>*Example:* `"Description"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | No |
| purchaseOrderItemCode | string | Purchase Item Code<br/>*Example:* `"POI-00001"` | No |
| receivedQuantityInBills | number | Received quantity through bill<br/>*Example:* `2` | No |
| receivedQuantityInOrder | number | Received quantity through order<br/>*Example:* `2` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number | Unit price / Amount<br/>*Example:* `2` | No |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>*Example:* `2.3` | Yes |

### PurchaseOrderItemInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) |  | No |
| discount | number | Total Discount<br/>*Example:* `20` | No |
| discountInPercent | boolean |  | No |
| documentItemCode | string |  | No |
| productCode | string | Product<br/>*Example:* `"P-000002"` | No |
| quantity | number | Quantity<br/>*Example:* `2` | No |
| taxAmount | number |  | No |
| unitPrice | number | Unit price / Amount<br/>*Example:* `100` | No |

### PurchaseOrderItemInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account<br/>*Example:* `"AC001"` | No |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order item additional charges details | No |
| cessAmount | number | India specific CESS amount on total amount<br/>*Example:* `0` | No |
| cessPercentage | number | Cess Percentage<br/>*Example:* `2.322` | No |
| cessRule | string | Cess Rule if it applies to the item<br/>*Example:* `"Math.max(21*amount/100,4170*quantity/100)"` | No |
| cgstAmount | number | India specific CGST tax amount on total amount<br/>*Example:* `5` | No |
| cgstRate | number | India specific CGST rate<br/>*Example:* `5` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| exciseAmount | number | Excise amount<br/>*Example:* `0.5` | No |
| exciseRate | double | Rate of Excise<br/>*Example:* `5` | No |
| exciseType | string | Excise type<br/>*Enum:* `"PERCENT"`, `"FLAT"`<br/>*Example:* `"FLAT"` | No |
| hsnOrSacCode | string | Hsn or Sac code<br/>*Example:* `110011` | No |
| id | long | ID<br/>*Example:* `2` | No |
| igstAmount | number | India specific IGST tax amount on total amount<br/>*Example:* `5` | No |
| igstRate | number | India specific IGST rate<br/>*Example:* `5` | No |
| itcIneligibleType | string | Ineligible - as per Section 17(5)<br/>*Enum:* `"ITC_INELIGIBLE_SECTION_17"`, `"ITC_INELIGIBLE_OTHERS"`<br/>*Example:* `"ITC_INELIGIBLE_SECTION_17"` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| otherRate | number | Tax Rate<br/>*Example:* `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>*Example:* `10` | No |
| pendingAmount | number | Pending amount<br/>*Example:* `100` | No |
| pendingQuantity | number | Pending quantity<br/>*Example:* `2` | No |
| product | [ProductInformation](#productinformation) | Product Details<br/>*Example:* `"product"` | No |
| productCode | string | Product<br/>*Example:* `"P002"` | No |
| productDescription | string | Description<br/>*Example:* `"Description"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | No |
| purchaseOrderItemCode | string | Purchase Item Code<br/>*Example:* `"POI-00001"` | No |
| receivedQuantityInBills | number | Received quantity through bill<br/>*Example:* `2` | No |
| receivedQuantityInOrder | number | Received quantity through order<br/>*Example:* `2` | No |
| sgstAmount | number | India specific SGST tax amount on total amount<br/>*Example:* `5` | No |
| sgstRate | number | India specific SGST rate<br/>*Example:* `5` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| taxDetails | [ [DocumentItemTaxMappingDto](#documentitemtaxmappingdto) ] | Tax Details for Tax Group | No |
| taxExemptionReason | string | Tax Exemption reason if taxPreference is true<br/>*Enum:* `"EXEMPTED"`, `"NON_GST"`<br/>*Example:* `"EXEMPTED"` | No |
| taxPreference | boolean | Tax preference, whether Exempted or not Exempted<br/>*Example:* `false` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number | Unit price / Amount<br/>*Example:* `2` | No |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>*Example:* `2.3` | Yes |
| userSetTaxes | boolean | Flag to check whether tax is user edited<br/>*Example:* `false` | No |

### PurchaseOrderItemIsraelDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account<br/>*Example:* `"AC001"` | No |
| additionalChargeAmount | number | *Example:* `123` | No |
| additionalChargeTaxamount | number | *Example:* `123` | No |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order item additional charges details | No |
| advancedTrackingType | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| id | long | ID<br/>*Example:* `2` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| otherRate | number | Tax Rate<br/>*Example:* `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>*Example:* `10` | No |
| pendingQuantity | number | Pending quantity<br/>*Example:* `2` | No |
| product | [ProductResponse](#productresponse) | Product Details<br/>*Example:* `"product"` | No |
| productCode | string | Product<br/>*Example:* `"P002"` | No |
| productDescription | string | Description<br/>*Example:* `"Description"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | No |
| purchaseOrderItemCode | string | Purchase Item Code<br/>*Example:* `"POI-00001"` | No |
| receivedQuantityInBills | number | Received quantity through bill<br/>*Example:* `2` | No |
| receivedQuantityInOrder | number | Received quantity through order<br/>*Example:* `2` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number | Unit price / Amount<br/>*Example:* `2` | No |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>*Example:* `2.3` | Yes |

### PurchaseOrderItemMalaysiaDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account<br/>*Example:* `"AC001"` | No |
| additionalChargeAmount | number | *Example:* `123` | No |
| additionalChargeTaxamount | number | *Example:* `123` | No |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order item additional charges details | No |
| advancedTrackingType | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| id | long | ID<br/>*Example:* `2` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| otherRate | number | Tax Rate<br/>*Example:* `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>*Example:* `10` | No |
| pendingQuantity | number | Pending quantity<br/>*Example:* `2` | No |
| product | [ProductResponse](#productresponse) | Product Details<br/>*Example:* `"product"` | No |
| productCode | string | Product<br/>*Example:* `"P002"` | No |
| productDescription | string | Description<br/>*Example:* `"Description"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | No |
| purchaseOrderItemCode | string | Purchase Item Code<br/>*Example:* `"POI-00001"` | No |
| receivedQuantityInBills | number | Received quantity through bill<br/>*Example:* `2` | No |
| receivedQuantityInOrder | number | Received quantity through order<br/>*Example:* `2` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number | Unit price / Amount<br/>*Example:* `2` | No |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>*Example:* `2.3` | Yes |

### PurchaseOrderItemPhilippinesDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account<br/>*Example:* `"AC001"` | No |
| additionalChargeAmount | number | *Example:* `123` | No |
| additionalChargeTaxamount | number | *Example:* `123` | No |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order item additional charges details | No |
| advancedTrackingType | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| id | long | ID<br/>*Example:* `2` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| otherRate | number | Tax Rate<br/>*Example:* `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>*Example:* `10` | No |
| pendingQuantity | number | Pending quantity<br/>*Example:* `2` | No |
| product | [ProductResponse](#productresponse) | Product Details<br/>*Example:* `"product"` | No |
| productCode | string | Product<br/>*Example:* `"P002"` | No |
| productDescription | string | Description<br/>*Example:* `"Description"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | No |
| purchaseOrderItemCode | string | Purchase Item Code<br/>*Example:* `"POI-00001"` | No |
| receivedQuantityInBills | number | Received quantity through bill<br/>*Example:* `2` | No |
| receivedQuantityInOrder | number | Received quantity through order<br/>*Example:* `2` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number | Unit price / Amount<br/>*Example:* `2` | No |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>*Example:* `2.3` | Yes |

### PurchaseOrderItemSaudiArabiaDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account<br/>*Example:* `"AC001"` | No |
| additionalChargeAmount | number | *Example:* `123` | No |
| additionalChargeTaxamount | number | *Example:* `123` | No |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order item additional charges details | No |
| advancedTrackingType | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customRateSA | number | Custom tax rate for Saudi<br/>*Example:* `5` | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| id | long | ID<br/>*Example:* `2` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| otherRate | number | Tax Rate<br/>*Example:* `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>*Example:* `10` | No |
| pendingQuantity | number | Pending quantity<br/>*Example:* `2` | No |
| product | [ProductResponse](#productresponse) | Product Details<br/>*Example:* `"product"` | No |
| productCode | string | Product<br/>*Example:* `"P002"` | No |
| productDescription | string | Description<br/>*Example:* `"Description"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | No |
| purchaseOrderItemCode | string | Purchase Item Code<br/>*Example:* `"POI-00001"` | No |
| rcmRateSA | number | RCM tax rate for Saudi<br/>*Example:* `5` | No |
| receivedQuantityInBills | number | Received quantity through bill<br/>*Example:* `2` | No |
| receivedQuantityInOrder | number | Received quantity through order<br/>*Example:* `2` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number | Unit price / Amount<br/>*Example:* `2` | No |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>*Example:* `2.3` | Yes |

### PurchaseOrderItemUKDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account<br/>*Example:* `"AC001"` | No |
| additionalChargeAmount | number | *Example:* `123` | No |
| additionalChargeTaxamount | number | *Example:* `123` | No |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order item additional charges details | No |
| advancedTrackingType | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| id | long | ID<br/>*Example:* `2` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| otherRate | number | Tax Rate<br/>*Example:* `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>*Example:* `10` | No |
| pendingQuantity | number | Pending quantity<br/>*Example:* `2` | No |
| product | [ProductResponse](#productresponse) | Product Details<br/>*Example:* `"product"` | No |
| productCode | string | Product<br/>*Example:* `"P002"` | No |
| productDescription | string | Description<br/>*Example:* `"Description"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | No |
| purchaseOrderItemCode | string | Purchase Item Code<br/>*Example:* `"POI-00001"` | No |
| receivedQuantityInBills | number | Received quantity through bill<br/>*Example:* `2` | No |
| receivedQuantityInOrder | number | Received quantity through order<br/>*Example:* `2` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number | Unit price / Amount<br/>*Example:* `2` | No |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>*Example:* `2.3` | Yes |

### PurchaseOrderItemUaeDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account<br/>*Example:* `"AC001"` | No |
| additionalChargeAmount | number | *Example:* `123` | No |
| additionalChargeTaxamount | number | *Example:* `123` | No |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order item additional charges details | No |
| advancedTrackingType | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| id | long | ID<br/>*Example:* `2` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| otherRate | number | Tax Rate<br/>*Example:* `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>*Example:* `10` | No |
| pendingQuantity | number | Pending quantity<br/>*Example:* `2` | No |
| product | [ProductResponse](#productresponse) | Product Details<br/>*Example:* `"product"` | No |
| productCode | string | Product<br/>*Example:* `"P002"` | No |
| productDescription | string | Description<br/>*Example:* `"Description"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | No |
| purchaseOrderItemCode | string | Purchase Item Code<br/>*Example:* `"POI-00001"` | No |
| receivedQuantityInBills | number | Received quantity through bill<br/>*Example:* `2` | No |
| receivedQuantityInOrder | number | Received quantity through order<br/>*Example:* `2` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number | Unit price / Amount<br/>*Example:* `2` | No |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>*Example:* `2.3` | Yes |

### PurchaseOrderMalaysiaRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemMalaysiaDetails](#purchaseorderitemmalaysiadetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderMalaysiaResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| billed | boolean | Purchase order billed<br/>*Example:* `false` | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | No |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | Purchase order drafted<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| id | long | Purchase order id<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedPurchaseInvoices | [ [LinkedPurchaseInvoiceResponse](#linkedpurchaseinvoiceresponse) ] |  | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| pendingReceipt | boolean | Purchase order pending receipt<br/>*Example:* `false` | No |
| poCode | string | Purchase order code<br/>*Example:* `"PO0001"` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemMalaysiaDetails](#purchaseorderitemmalaysiadetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| recurring | boolean | True if Order is recurring.<br/>*Example:* `true` | No |
| recurringActivated | boolean | True if Order recurrence is active.<br/>*Example:* `false` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderPhilippinesRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemPhilippinesDetails](#purchaseorderitemphilippinesdetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderPhilippinesResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| billed | boolean | Purchase order billed<br/>*Example:* `false` | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | No |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | Purchase order drafted<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| id | long | Purchase order id<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedPurchaseInvoices | [ [LinkedPurchaseInvoiceResponse](#linkedpurchaseinvoiceresponse) ] |  | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| pendingReceipt | boolean | Purchase order pending receipt<br/>*Example:* `false` | No |
| poCode | string | Purchase order code<br/>*Example:* `"PO0001"` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemPhilippinesDetails](#purchaseorderitemphilippinesdetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| recurring | boolean | True if Order is recurring.<br/>*Example:* `true` | No |
| recurringActivated | boolean | True if Order recurrence is active.<br/>*Example:* `false` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemDetails](#purchaseorderitemdetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| billed | boolean | Purchase order billed<br/>*Example:* `false` | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | No |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | Purchase order drafted<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| id | long | Purchase order id<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedPurchaseInvoices | [ [LinkedPurchaseInvoiceResponse](#linkedpurchaseinvoiceresponse) ] |  | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| pendingReceipt | boolean | Purchase order pending receipt<br/>*Example:* `false` | No |
| poCode | string | Purchase order code<br/>*Example:* `"PO0001"` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemDetails](#purchaseorderitemdetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| recurring | boolean | True if Order is recurring.<br/>*Example:* `true` | No |
| recurringActivated | boolean | True if Order recurrence is active.<br/>*Example:* `false` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderSaudiArabiaRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customApplicableSA | boolean | True if RCM applicable<br/>*Example:* `true` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemSaudiArabiaDetails](#purchaseorderitemsaudiarabiadetails) ] | Purchase order item details | No |
| rcmApplicableSA | boolean | True if RCM applicable<br/>*Example:* `true` | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderSaudiArabiaResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| billed | boolean | Purchase order billed<br/>*Example:* `false` | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | No |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customApplicableSA | boolean | True if custom applicable<br/>*Example:* `true` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | Purchase order drafted<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| id | long | Purchase order id<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedPurchaseInvoices | [ [LinkedPurchaseInvoiceResponse](#linkedpurchaseinvoiceresponse) ] |  | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| pendingReceipt | boolean | Purchase order pending receipt<br/>*Example:* `false` | No |
| poCode | string | Purchase order code<br/>*Example:* `"PO0001"` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemSaudiArabiaDetails](#purchaseorderitemsaudiarabiadetails) ] | Purchase order item details | No |
| rcmApplicableSA | boolean | True if RCM applicable<br/>*Example:* `true` | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| recurring | boolean | True if Order is recurring.<br/>*Example:* `true` | No |
| recurringActivated | boolean | True if Order recurrence is active.<br/>*Example:* `false` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderShortResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) |  | No |
| documentSequenceCode | string | Purchase Order Document Sequence Code<br/>*Example:* `"00O0001"` | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| poCode | string | Purchase order code<br/>*Example:* `"PO0001"` | No |
| purchaseOrderItemInfos | [ [PurchaseOrderItemInfo](#purchaseorderiteminfo) ] |  | No |
| unitPriceGstInclusive | boolean |  | No |

### PurchaseOrderUKRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemUKDetails](#purchaseorderitemukdetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderUKResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| billed | boolean | Purchase order billed<br/>*Example:* `false` | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | No |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | Purchase order drafted<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| id | long | Purchase order id<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedPurchaseInvoices | [ [LinkedPurchaseInvoiceResponse](#linkedpurchaseinvoiceresponse) ] |  | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| pendingReceipt | boolean | Purchase order pending receipt<br/>*Example:* `false` | No |
| poCode | string | Purchase order code<br/>*Example:* `"PO0001"` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemUKDetails](#purchaseorderitemukdetails) ] | Purchase order item details | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| recurring | boolean | True if Order is recurring.<br/>*Example:* `true` | No |
| recurringActivated | boolean | True if Order recurrence is active.<br/>*Example:* `false` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderUaeRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemUaeDetails](#purchaseorderitemuaedetails) ] | Purchase order item details | No |
| rcmApplicable | boolean | True if RCM applicable<br/>*Example:* `true` | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseOrderUaeResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase order additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| attachments | [ string ] | File attachments | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if purchase order is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| billed | boolean | Purchase order billed<br/>*Example:* `false` | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | No |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deliveryDate | string | Delivery date<br/>*Example:* `"01-10-2019"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | Purchase order drafted<br/>*Example:* `false` | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase order is created for drop ship<br/>*Example:* `true` | No |
| dueDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| id | long | Purchase order id<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedPurchaseInvoices | [ [LinkedPurchaseInvoiceResponse](#linkedpurchaseinvoiceresponse) ] |  | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| orderType | string | Order Type<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`<br/>*Example:* `"Inventory"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| pendingReceipt | boolean | Purchase order pending receipt<br/>*Example:* `false` | No |
| poCode | string | Purchase order code<br/>*Example:* `"PO0001"` | No |
| purchaseOrderAssets | [ [PurchaseOrderAssetGroupDetails](#purchaseorderassetgroupdetails) ] |  | No |
| purchaseOrderItems | [ [PurchaseOrderItemUaeDetails](#purchaseorderitemuaedetails) ] | Purchase order item details | No |
| rcmApplicable | boolean | True if RCM applicable<br/>*Example:* `true` | No |
| receiptStatus | string | Received status for the Goods<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"FULLY_RECEIVED"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| recurring | boolean | True if Order is recurring.<br/>*Example:* `true` | No |
| recurringActivated | boolean | True if Order recurrence is active.<br/>*Example:* `false` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>*Example:* `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Order status<br/>*Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`, `"PARTIAL_PROCESSED"`<br/>*Example:* `"OPEN"` | No |
| tcsAmount | number | TCS amount<br/>*Example:* `2.322` | No |
| tcsPercentage | number | TCS percentage<br/>*Example:* `2` | No |
| tcsRateId | long | TCS Rate Id<br/>*Example:* `1` | No |
| totalAmount | number | Total amount<br/>*Example:* `123.33` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |
| vendorCode | string | Vendor<br/>*Example:* `"V001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-000001"` | Yes |

### PurchaseRequestRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalStatus | string | Approve Status<br/>*Example:* `"PENDING"` | No |
| attachmentIds | [ integer ] |  | No |
| attachments | [ string ] | File attachments | No |
| billTo | [Address](#address) | Bill to address | No |
| currency | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| documentSequenceCode | string | Sales Order Code<br/>*Example:* `"0000001"` | No |
| draftReferenceId | string | Draft reference id | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| memo | string | Memo<br/>*Example:* `"Note this"` | No |
| purchaseRequestDate | string | Purchase Request date<br/>*Example:* `"25-10-2019"` | Yes |
| purchaseRequestItems | [ [AbstractPurchaseRequestItemDetails](#abstractpurchaserequestitemdetails) ] | Purchase Request item details | No |
| receiveByDate | string | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| shipByDate | string | Ship by date<br/>*Example:* `"25-10-2019"` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| taxAmount | number | Tax amount<br/>*Example:* `2.322` | No |
| taxAmountInBaseCurrency | number | Tax amount in base currency<br/>*Example:* `2.322` | No |
| totalAmount | number | Total amount<br/>*Example:* `12.322` | No |
| totalAmountInBaseCurrency | number | Total amount in base currency<br/>*Example:* `12.322` | No |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |

### PurchaseRequestResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalStatus | string | Approve Status<br/>*Example:* `"PENDING"` | No |
| attachmentIds | [ integer ] |  | No |
| attachments | [ string ] | File attachments | No |
| billTo | [Address](#address) | Bill to address | No |
| contact | [ContactInfo](#contactinfo) | Contact details | Yes |
| contactCode | string | Contact Code<br/>*Example:* `"C0001"` | Yes |
| createdBy | long | ID of the user who created<br/>*Example:* `1` | No |
| currency | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| documentSequenceCode | string | Sales Order Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>*Example:* `false` | No |
| draftReferenceId | string | Draft reference id | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| id | long | Purchase Request id<br/>*Example:* `1` | No |
| linkedPurchaseOrders | [ [LinkedPurchaseOrderResponse](#linkedpurchaseorderresponse) ] | Linked Purchase Order details | No |
| memo | string | Sample memo<br/>*Example:* `"Sample memo"` | No |
| purchaseRequestCode | string | Purchase Request code<br/>*Example:* `"PRQ001"` | No |
| purchaseRequestDate | string | Purchase Request date<br/>*Example:* `"25-10-2019"` | Yes |
| purchaseRequestItems | [ [AbstractPurchaseRequestItemDetails](#abstractpurchaserequestitemdetails) ] | Purchase Request item details | No |
| receiveByDate | string | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| shipByDate | string | Ship by date<br/>*Example:* `"25-10-2019"` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| taxAmount | number | Tax amount<br/>*Example:* `2.322` | No |
| taxAmountInBaseCurrency | number | Tax amount in base currency<br/>*Example:* `2.322` | No |
| totalAmount | number | Total amount<br/>*Example:* `12.322` | No |
| totalAmountInBaseCurrency | number | Total amount in base currency<br/>*Example:* `12.322` | No |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |

### RecurringJobEvent

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| customTemplate | boolean |  | No |
| documentDate | dateTime |  | No |
| documentType | string | *Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"` | No |
| emailBody | string |  | No |
| emailReplyTo | string |  | No |
| emailSenderName | string |  | No |
| emailSubject | string |  | No |
| emailTemplateId | long |  | No |
| emailTo | string |  | No |
| iamUserId | long |  | No |
| insertPaymentLinkFlag | boolean |  | No |
| jobId | long |  | No |
| parentDocumentCode | string |  | No |
| sendEmailNotificationFlag | boolean |  | No |
| tenantId | long |  | No |
| userId | long |  | No |

### RowRackBinData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| binId | long | Row Id<br/>*Example:* `1` | Yes |
| binName | string | Row Name<br/>*Example:* `"Row1"` | Yes |
| rackId | long | Row Id<br/>*Example:* `1` | Yes |
| rackName | string | Row Name<br/>*Example:* `"Row1"` | Yes |
| rowId | long | Row Id<br/>*Example:* `1` | Yes |
| rowName | string | Row Name<br/>*Example:* `"Row1"` | Yes |

### SalesOrderDashboardReport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [MonthData](#monthdata) ] |  | No |
| noOfOpenQuotations | integer |  | No |
| noOfSalesOrdersCurrentMonth | integer |  | No |
| noOfSoUnfulfilledCurrentMonth | integer |  | No |
| salesInCurrentMonth | number |  | No |

### SalesOrderItemDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| id | long | ID<br/>*Example:* `2` | No |
| productCode | string | Product code<br/>*Example:* `"P001"` | Yes |
| productDescription | string | Product description<br/>*Example:* `"Apple watch"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | Yes |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| unitPrice | number | Product unit price<br/>*Example:* `0.7` | Yes |

### SalesOrderRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachments | [ string ] | File attachments | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| contactCode | string | Contact code<br/>*Example:* `"C002"` | Yes |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerPoRefNo | string | Customer PO reference number<br/>*Example:* `"CPO001"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| draft | boolean | True if want to save as draft.<br/>*Example:* `false` | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| fulfillmentDate | string | Fulfillment date<br/>*Example:* `"25-10-2019"` | Yes |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document number | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| salesOrderItems | [ [SalesOrderItemDetails](#salesorderitemdetails) ] | Sales order item details | No |
| totalAmount | number | Total amount<br/>*Example:* `12.322` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |

### SalesOrderResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachments | [ string ] | File attachments | No |
| billed | boolean | Sales order billed<br/>*Example:* `false` | No |
| contact | [ContactInfo](#contactinfo) | Contact info details | Yes |
| contactCode | string | Contact code<br/>*Example:* `"C002"` | Yes |
| currencyCode | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerPoRefNo | string | Customer PO reference number<br/>*Example:* `"CPO001"` | No |
| documentDate | string | Document date<br/>*Example:* `"01-10-2019"` | Yes |
| draft | boolean | Sales order drafted<br/>*Example:* `false` | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| fulfilled | boolean | Sales order fulfilled<br/>*Example:* `false` | No |
| fulfillmentDate | string | Fulfillment date<br/>*Example:* `"25-10-2019"` | Yes |
| id | long | Sales order id<br/>*Example:* `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document number | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingOrder | boolean |  | No |
| salesOrderItems | [ [SalesOrderItemDetails](#salesorderitemdetails) ] | Sales order item details | No |
| soCode | string | Sales order code<br/>*Example:* `"SO001"` | No |
| totalAmount | number | Total amount<br/>*Example:* `12.322` | Yes |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive<br/>*Example:* `false` | No |

### SendEmailRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| application | string | Application name<br/>*Example:* `"ERP"` | No |
| bcc | string | bcc email addresses<br/>*Example:* `"john1@doe.com,john2@doe.com"` | No |
| body | string | email body<br/>*Example:* `"This is a invite email"` | No |
| category | string | Module Name<br/>*Example:* `"ORDER"` | No |
| cc | string | cc email addresses<br/>*Example:* `"john1@doe.com,john2@doe.com"` | No |
| exportDocumentRequest | [ExportDocumentRequest](#exportdocumentrequest) | Application name<br/>*Example:* `"ERP"` | No |
| isEncoded | boolean | Is email body encoded<br/>*Example:* `false` | No |
| replyTo | string | Reply to email address<br/>*Example:* `"john@doe.com"` | No |
| senderName | string | Sender's name<br/>*Example:* `"Sender Name"` | No |
| subject | string | subject line<br/>*Example:* `"Order Email"` | No |
| to | string | to email address<br/>*Example:* `"john@doe.com"` | No |

### SendOrderEmailDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string |  | No |
| isSendPaymentLink | boolean | Send stripe payment link<br/>*Example:* `true` | No |
| orderRequest | [OrderRequestDto](#orderrequestdto) | config for  stripe payment link<br/>*Example:* `"Get Payment Link Config"` | No |
| saveContact | boolean |  | No |
| sendEmailRequest | [SendEmailRequest](#sendemailrequest) | Send email config<br/>*Example:* `"Send email config"` | No |

### SetRecurringDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string |  | No |
| documentType | string | *Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"` | No |
| recurring | boolean |  | No |
| recurringActivated | boolean |  | No |

### Sort

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| empty | boolean |  | No |
| sorted | boolean |  | No |
| unsorted | boolean |  | No |

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

### TaxDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account code<br/>*Example:* `"AC-001"` | No |
| additionalTaxIn | boolean | TRUE/FALSE<br/>*Example:* `false` | No |
| basReporting | string | Reporting Method<br/>*Example:* `"BOTH"` | No |
| code | string | Tax code<br/>*Example:* `"TC-001"` | No |
| defaultMemoBE | string | Default memo<br/>*Example:* `"Memo"` | No |
| defaultMemoDe | string | Default Memo Germany<br/>*Example:* `"memo"` | No |
| defaultMemoNL | string | Default memo<br/>*Example:* `"Momo"` | No |
| defaultMemoUk | string | Default Memo UK<br/>*Example:* `"memo"` | No |
| deleted | boolean | Tax deleted<br/>*Example:* `false` | No |
| description | string | Description<br/>*Example:* `"sales Tax for SG"` | No |
| effectiveEndDate | dateTime | Effective end date of the tax<br/>*Example:* `"2023-12-31"` | No |
| effectiveStartDate | dateTime | Effective start date of the tax<br/>*Example:* `"2023-01-01"` | No |
| flatRateSchemeUk | boolean | Flat Rate Scheme UK<br/>*Example:* `false` | No |
| isDefault | boolean | Is Default Tax<br/>*Example:* `false` | No |
| isTaxGroup | boolean | Is Tax Group<br/>*Example:* `false` | No |
| name | string | Tax Name<br/>*Example:* `"SGST"` | No |
| netAmountBefore | string | Net Amount Before Section<br/>*Example:* `"Box 5,Box 6"` | No |
| netAmountBeforeBE | string | Net Amount Before Section<br/>*Example:* `"Box 00,Box 01"` | No |
| netAmountBeforeNL | string | Net Amount Before Section<br/>*Example:* `"Box 5,Box 6"` | No |
| netAmountDe | string |  | No |
| netAmountUk | string | Net Amount Before Section<br/>*Example:* `"Box 5,Box 6"` | No |
| percent | number | Tax percentage <br/>*Example:* `7` | No |
| showInReportsID | boolean | Flag to consider in reports<br/>*Example:* `true` | No |
| status | string | Tax status<br/>*Example:* `"active"` | No |
| taxAccountCode | string | Account Code<br/>*Example:* `"ACC-0000001"` | No |
| taxAgencyCan | string | *Example:* `"British Columbia"` | No |
| taxAmountDe | string | Tax Amount In Section<br/>*Example:* `"Box 5,Box 6"` | No |
| taxAmountIn | string | Tax Amount In Section<br/>*Example:* `"Box 5,Box 6"` | No |
| taxAmountInBE | string | Tax Amount In Section<br/>*Example:* `"Box 54,Box 55"` | No |
| taxAmountInNL | string | Tax Amount In Section<br/>*Example:* `"Box 5,Box 6"` | No |
| taxAmountUk | string | Tax Amount In Section<br/>*Example:* `"Box 5,Box 6"` | No |
| taxCode | string | Tax code<br/>*Example:* `"TC-001"` | No |
| taxGroupDetails | [ [TaxGroupDetails](#taxgroupdetails) ] | Tax Details | No |
| taxSectionAus | string | Tax Section<br/>*Enum:* `"DEFAULT_GST=Default GST"`, `"EXPORT_SALES=Export Sales"`, `"OTHER_GST=Other GST-free sales"`, `"INPUT_TAX_SALES=Input Taxed Sales"`, `"CAPITAL_PURCHASES=Capital purchases"`, `"NONCAPITAL_PURCHASES=Non-capital purchases"`, `"INPUT_TAX_PURCHASES=Input Tax Purchases"`, `"EXCLUDED_FROM_BAS=Excluded from BAS"`<br/>*Example:* `"DEFAULT_GST"` | No |
| taxSectionSAR | string | Tax Section Name<br/>*Example:* `"Standard rates sales, Standard rated domestic purchase"` | No |
| type | string | SALES<br/>*Enum:* `"SALES"`, `"PURCHASE"`, `"BOTH"`<br/>*Example:* `"SALES"` | No |

### TaxGroupDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalTaxIn | boolean |  | No |
| applyTo | string |  | No |
| code | string |  | No |
| id | long |  | No |
| name | string |  | No |
| percentage | number |  | No |
| type | string |  | No |

### TdsInfoIndia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| assessableAmount | number |  | No |
| deducteeType | string |  | No |
| incomePayment | string |  | No |
| lineAmount | number |  | No |
| payableAccount | string |  | No |
| remark | string |  | No |
| tdsAmount | number |  | No |
| tdsRate | number |  | No |

### TriggerKafkaRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalHistory | [ [ApprovalHistoryItem](#approvalhistoryitem) ] |  | No |
| approverMap | object |  | No |
| contactCode | string |  | No |
| currency | string |  | No |
| currentLevel | integer |  | No |
| totalAmount | string |  | No |
| userName | string |  | No |

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

### Year

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| leap | boolean |  | No |
| value | integer |  | No |