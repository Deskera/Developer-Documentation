---
id: billapi
title: Bill APIs
sidebar_label: Bill
---
Bill is a transaction representing a request-for-payment from a third party for goods/services rendered, received, or both. With a complete overview of your bills with the "Bill" tab, you will be able to steer clear of late payment fees and build effective supplier relationships by paying your bills on time..

`Bill Api` helps you to create new bill, update a particular bill, retrieve bill by id, or get the list of all bills.

More about [Bill API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-a782bdc8-aca7-4111-beda-f0c14f1dd9a6?ctx=documentation)

## API
---
### Search Bill

Get bills by filter criteria. [More about search bill](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-a782bdc8-aca7-4111-beda-f0c14f1dd9a6?ctx=documentation)

##### Description:

- Allows you to retrieve a list of all bills.
- Allows you to retrieve specific bill based on it's filter criteria.

#### GET
#### Bill 

[More about search bill](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-a782bdc8-aca7-4111-beda-f0c14f1dd9a6?ctx=documentation)
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

Create a new bill. [More about create bill](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-a782bdc8-aca7-4111-beda-f0c14f1dd9a6?ctx=documentation)

##### Description:

- Allows you to create a new bill.

#### POST
#### Bill 

[More about create bill](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-a782bdc8-aca7-4111-beda-f0c14f1dd9a6?ctx=documentation)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequest](#purchaseinvoicerequest) |

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

Update bill information. [More about update bill](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-a782bdc8-aca7-4111-beda-f0c14f1dd9a6?ctx=documentation)

##### Description:

- Allows you to update a specific bill information.

#### PUT
#### Bill /{id}

[More about update bill](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-a782bdc8-aca7-4111-beda-f0c14f1dd9a6?ctx=documentation)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequest](#purchaseinvoicerequest) |

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

Get bill by code. [More about retrieve bill](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-a782bdc8-aca7-4111-beda-f0c14f1dd9a6?ctx=documentation)

##### Description:

- Allows you to retrieve an existing bill details by it's code.

#### GET
#### Bill /{code}

[More about retrieve bill](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-a782bdc8-aca7-4111-beda-f0c14f1dd9a6?ctx=documentation)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

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

---
### Retrieve Bill details by code

#### GET
#### Bill /code/{code}/details
##### Summary

Purchase invoice details by codes

##### Description

Purchase invoice details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceInformation](#purchaseinvoiceinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
### Bulk Delete Bills

#### DELETE
#### Bill /bulk-delete
##### Summary

Bulk Delete purchase invoices.

##### Description

API to Bulk Delete purchase invoices.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [BulkDeletePurchaseInvoiceResponse](#bulkdeletepurchaseinvoiceresponse) ] |
| 204 | Purchase invoice has been deleted successfully. | [ [BulkDeletePurchaseInvoiceResponse](#bulkdeletepurchaseinvoiceresponse) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
### Delete Bill

#### DELETE
#### Bill /{id}
##### Summary

Delete purchase invoice by id.

##### Description

API to delete purchase invoice details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase invoice has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---

### Bill 

#### DELETE
##### Summary

Delete purchase invoices by ids in bulk.

##### Description

API to delete purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Request processed successfully. | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoices not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /approval-status

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

### Bill /asset-group-count/{id}

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

### Bill /bulk

#### POST
##### Summary

Create multiple sales invoice

##### Description

API to create sales invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequests | body | purchaseInvoiceRequests | Yes | [ [PurchaseInvoiceRequest](#purchaseinvoicerequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |
| 201 | Sales invoice has been created successfully. | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |
| 400 | Sales invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /bulk-details

#### POST
##### Summary

Purchase invoice details by codes

##### Description

Purchase invoice details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [PurchaseInvoiceInformation](#purchaseinvoiceinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /bulk-update-purchase-invoice

#### PATCH
##### Summary

Update purchase invoices

##### Description

API to Update purchase invoices

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceFields | body | purchaseInvoiceFields | Yes | [ [Map«string,string»](#map«string,string») ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [BulkPurchaseInvoiceUpdateResponse](#bulkpurchaseinvoiceupdateresponse) ] |
| 204 | No Content |  |
| 207 | Purchase invoices updated successfully. | [ [BulkPurchaseInvoiceUpdateResponse](#bulkpurchaseinvoiceupdateresponse) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Sales Invoice with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /bulk/codes

#### POST
##### Summary

Get multiple purchase invoices

##### Description

API to get purchase invoices.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase documents have been fetched successfully. | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /code/{code}

#### GET
##### Summary

Get purchase invoice by code.

##### Description

API to fetch purchase invoice details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /code/{code}/details

#### GET
##### Summary

Purchase invoice details by codes

##### Description

Purchase invoice details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceInformation](#purchaseinvoiceinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /codes

#### POST
##### Summary

Get Invoice  information by codes.

##### Description

API to get invoice document information by codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Invoice documents have been fetched successfully. | [ [PurchaseDocument](#purchasedocument) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /contrabill

#### POST
##### Summary

Bill contra adjustment.

##### Description

API to contra adjustment for bill of contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contraBillDto | body | contraBillDto | Yes | [ContraBillDto](#contrabilldto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ContraBillDto](#contrabilldto) |
| 201 | Contra adjustment for bill has been done successfully. | [ContraBillDto](#contrabilldto) |
| 400 | Contra adjustment for bill has been failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Bill contra adjustment.

##### Description

API to contra adjustment for bill of contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contraCode | query | contraCode | Yes | string |
| salesInvoiceCode | query | salesInvoiceCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ContraBillDto](#contrabilldto) |
| 201 | Contra adjustment for bill has been done successfully. | [ContraBillDto](#contrabilldto) |
| 204 | No Content |  |
| 400 | Contra adjustment for bill has been failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /create-recurring

#### POST
##### Summary

Create a recurring invoice

##### Description

API to create a recurring invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| event | body | event | Yes | [RecurringJobEvent](#recurringjobevent) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |
| 201 | Recurring invoice created successfully | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |
| 400 | Error while creating recurring invoice |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /documentseqcode

#### POST
##### Summary

Get purchase invoice by code.

##### Description

API to fetch purchase invoice details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /draft/trigger

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

### Bill /due-amount

#### PUT
##### Summary

Update due amount for purchase invoices in bulk.

##### Description

API to update due amount for purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| invoiceUpdateAmountDueDtoList | body | invoiceUpdateAmountDueDtoList | Yes | [ [InvoiceUpdateAmountDueDto](#invoiceupdateamountduedto) ] |
| revert | query | revert | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /due-amount-bulk-payment-delete

#### PUT
##### Summary

Update due amount for purchase invoices in bulk payment delete.

##### Description

API to update due amount for purchase invoices in bulk payment delete.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| invoiceUpdateAmountDueDtoList | body | invoiceUpdateAmountDueDtoList | Yes | [ [InvoiceUpdateAmountDueDto](#invoiceupdateamountduedto) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /es/{contactCode}

#### GET
##### Summary

Get Invoice for contact.

##### Description

Get Invoice with contact code from ES.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | path | contactCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get Invoice successfully. | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Invoice with given contact code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /journal

#### POST
##### Summary

Recreate Journal Entries for all Purchase Invoices

##### Description

API to recreate Journal Entries for all Purchase Invoices.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Journal Entries for all Purchase Invoices recreated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /linked-docs/product-codes

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

### Bill /linked-order/{code}

#### GET
##### Summary

Get purchase invoices linked to an order by code.

##### Description

API to fetch purchase invoices linked to an order by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoices has been fetched successfully. | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /linked-orders

#### POST
##### Summary

Get purchase invoices linked to an order by code.

##### Description

API to fetch purchase invoices linked to an order by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoices has been fetched successfully. | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /linked/status/{code}

#### PUT
##### Summary

refreshLinkedPIStatus

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

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

### Bill /notes

#### DELETE
##### Summary

Delete sales invoice by id.

##### Description

API to delete sales invoice details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |
| invoicecode | query | invoicecode | Yes | string |
| uid | query | uid | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Sales invoice has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Sales invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /payment

#### DELETE
##### Summary

Delete Payment

##### Description

API to Delete Payment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| paymentCode | query | paymentCode | Yes | string |
| purchaseInvoiceCode | query | purchaseInvoiceCode | Yes | string |
| uid | query | uid | No | string (uuid) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | API to Delete Payment | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /pendingpaymentbillcode

#### GET
##### Summary

Get purchase invoice by code for Pending Payment.

##### Description

API to Get purchase invoice by code for Pending Payment.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /purchase/receipt

#### DELETE
##### Summary

API to Delete Goods Receipt

##### Description

API to Delete Goods Receipt

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| goodsReceiptCode | query | goodsReceiptCode | Yes | string |
| isBulkDeleted | query | isBulkDeleted | No | boolean |
| purchaseInvoiceCode | query | purchaseInvoiceCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | API to Delete Goods Receipt | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /record-filter

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

### Bill /report/count

#### POST
##### Summary

Get purchase invoice count for contacts

##### Description

API to fetch purchase invoice count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase invoice count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /report/overview

#### GET
##### Summary

Purchase invoice overview report data.

##### Description

API to fetch purchase invoice overview report data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice overview report has been prepared. | [InvoiceOverviewReport](#invoiceoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /report/unpaid

#### GET
##### Summary

Unpaid purchase invoices report.

##### Description

API to fetch unpaid purchase invoices

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unpaid purchase invoices report has been prepared. | [DashboardReportData](#dashboardreportdata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /set-recurring

#### POST
##### Summary

Set an invoice to recurring

##### Description

API to set and invoice to recurring.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| setRecurringDto | body | setRecurringDto | Yes | [SetRecurringDto](#setrecurringdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Invoice set to recur successfully | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |
| 201 | Created |  |
| 400 | Error while setting invoice to recur |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /status/{code}

#### PUT
##### Summary

refreshPIStatus

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

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

### Bill /stockQuantities

#### POST
##### Summary

Get purchase invoice stock quantities

##### Description

API to get purchase invoice stock quantities

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [StockQuantitiesRequest](#stockquantitiesrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched purchase invoice stock quantities successfully. | [StockQuantitiesResponse](#stockquantitiesresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /tax/count

#### POST
##### Summary

Get purchase invoice count for tax

##### Description

API to fetch purchase invoice count for tax

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| taxCodes | body | taxCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax purchase invoice count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /unreceived-seq-codes

#### GET
##### Summary

Get Unfulfilled purchase invoices codes

##### Description

Get Unfulfilled purchase invoices codes

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales invoice information has been fetched successfully. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Sales invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /update-knock-off

#### POST
##### Summary

Update knock off information

##### Description

Api to update knock off information

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| knockOffInfos | body | knockOffInfos | Yes | object |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Knock off information updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |


### Bill /{code}/asset-details

#### POST
##### Summary

Save Assets details for purchase invoice

##### Description

API to save Assets details for purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| assetRequests | body | assetRequests | Yes | [ [AssetRequest](#assetrequest) ] |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Asset details for purchase invoice saved successfully. | [BulkApiResponse](#bulkapiresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Api to save asset details for purchase invoice failed. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /{id}

#### PUT
##### Summary

Update purchase invoice.

##### Description

API to update existing purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequest](#purchaseinvoicerequest) |

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
| --------------- | ------ |
| Authorization | global |


#### PATCH
##### Summary

Update purchase invoice memo or attachment

##### Description

API to update purchase invoice memo or attachment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceFields | body | purchaseInvoiceFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Memo/attachment for purchase invoice updated successfully. | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-invoice-controller-uae
Purchase Invoice APIs for UAE

### Bill /ae

#### GET
##### Summary

Search purchase invoices.

##### Description

API to search purchase invoices.

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
| 200 | Purchase invoices have been fetched successfully. | [PurchaseInvoiceResponseUae](#purchaseinvoiceresponseuae) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create purchase invoice

##### Description

API to create purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestUae](#purchaseinvoicerequestuae) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseUae](#purchaseinvoiceresponseuae) |
| 201 | Purchase invoice has been created successfully. | [PurchaseInvoiceResponseUae](#purchaseinvoiceresponseuae) |
| 400 | Purchase invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update purchase invoice attributes by code.

##### Description

API to update attributes of existing purchase invoice by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |
| request | body | request | Yes | [PurchaseInvoiceUpdateRequest](#purchaseinvoiceupdaterequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Purchase invoice attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice with given code not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoices by ids in bulk.

##### Description

API to delete purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Request processed successfully. | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoices not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ae/bulk

#### POST
##### Summary

Create multiple sales invoice

##### Description

API to create sales invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequests | body | purchaseInvoiceRequests | Yes | [ [PurchaseInvoiceRequestUae](#purchaseinvoicerequestuae) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseUae](#purchaseinvoiceresponseuae) |
| 201 | Sales invoice has been created successfully. | [PurchaseInvoiceResponseUae](#purchaseinvoiceresponseuae) |
| 400 | Sales invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ae/code/{code}/details

#### GET
##### Summary

Purchase invoice details by codes

##### Description

Purchase invoice details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceInformation](#purchaseinvoiceinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ae/due-amount

#### PUT
##### Summary

Update due amount for purchase invoices in bulk.

##### Description

API to update due amount for purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| invoiceUpdateAmountDueDtoList | body | invoiceUpdateAmountDueDtoList | Yes | [ [InvoiceUpdateAmountDueDto](#invoiceupdateamountduedto) ] |
| revert | query | revert | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ae/es/{contactCode}

#### GET
##### Summary

Get Invoice for contact.

##### Description

Get Invoice with contact code from ES.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | path | contactCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get Invoice successfully. | [PurchaseInvoiceResponseUae](#purchaseinvoiceresponseuae) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Invoice with given contact code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ae/linked-order/{code}

#### GET
##### Summary

Get purchase invoices linked to an order by code.

##### Description

API to fetch purchase invoices linked to an order by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoices has been fetched successfully. | [PurchaseInvoiceResponseUae](#purchaseinvoiceresponseuae) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ae/report/count

#### POST
##### Summary

Get purchase invoice count for contacts

##### Description

API to fetch purchase invoice count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase invoice count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ae/report/overview

#### GET
##### Summary

Purchase invoice overview report data.

##### Description

API to fetch purchase invoice overview report data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice overview report has been prepared. | [InvoiceOverviewReport](#invoiceoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ae/report/unpaid

#### GET
##### Summary

Unpaid purchase invoices report.

##### Description

API to fetch unpaid purchase invoices

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unpaid purchase invoices report has been prepared. | [DashboardReportData](#dashboardreportdata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ae/{code}

#### GET
##### Summary

Get purchase invoice by code.

##### Description

API to fetch purchase invoice details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | [PurchaseInvoiceResponseUae](#purchaseinvoiceresponseuae) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ae/{id}

#### PUT
##### Summary

Update purchase invoice.

##### Description

API to update existing purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestUae](#purchaseinvoicerequestuae) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Invoice has been updated successfully. | [PurchaseInvoiceResponseUae](#purchaseinvoiceresponseuae) |
| 201 | Created |  |
| 400 | Purchase invoice draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoice by id.

##### Description

API to delete purchase invoice details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase invoice has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase invoice memo or attachment

##### Description

API to update purchase invoice memo or attachment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceFields | body | purchaseInvoiceFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Memo/attachment for purchase invoice updated successfully. | [PurchaseInvoiceResponseUae](#purchaseinvoiceresponseuae) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-invoice-controller-australia
Purchase Invoice APIs for Australia.

### Bill /au

#### GET
##### Summary

Search purchase invoices.

##### Description

API to search purchase invoices.

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
| 200 | Purchase invoices have been fetched successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create purchase invoice

##### Description

API to create purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestAustralia](#purchaseinvoicerequestaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 201 | Purchase invoice has been created successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 400 | Purchase invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update purchase invoice attributes by code.

##### Description

API to update attributes of existing purchase invoice by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |
| request | body | request | Yes | [PurchaseInvoiceUpdateRequest](#purchaseinvoiceupdaterequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Purchase invoice attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice with given code not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoices by ids in bulk.

##### Description

API to delete purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Request processed successfully. | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoices not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /au/bulk

#### POST
##### Summary

Create multiple sales invoice

##### Description

API to create sales invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequests | body | purchaseInvoiceRequests | Yes | [ [PurchaseInvoiceRequestAustralia](#purchaseinvoicerequestaustralia) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 201 | Sales invoice has been created successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 400 | Sales invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /au/code/{code}/details

#### GET
##### Summary

Purchase invoice details by codes

##### Description

Purchase invoice details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceInformation](#purchaseinvoiceinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /au/due-amount

#### PUT
##### Summary

Update due amount for purchase invoices in bulk.

##### Description

API to update due amount for purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| invoiceUpdateAmountDueDtoList | body | invoiceUpdateAmountDueDtoList | Yes | [ [InvoiceUpdateAmountDueDto](#invoiceupdateamountduedto) ] |
| revert | query | revert | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /au/es/{contactCode}

#### GET
##### Summary

Get Invoice for contact.

##### Description

Get Invoice with contact code from ES.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | path | contactCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get Invoice successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Invoice with given contact code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /au/linked-order/{code}

#### GET
##### Summary

Get purchase invoices linked to an order by code.

##### Description

API to fetch purchase invoices linked to an order by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoices has been fetched successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /au/report/count

#### POST
##### Summary

Get purchase invoice count for contacts

##### Description

API to fetch purchase invoice count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase invoice count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /au/report/overview

#### GET
##### Summary

Purchase invoice overview report data.

##### Description

API to fetch purchase invoice overview report data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice overview report has been prepared. | [InvoiceOverviewReport](#invoiceoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /au/report/unpaid

#### GET
##### Summary

Unpaid purchase invoices report.

##### Description

API to fetch unpaid purchase invoices

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unpaid purchase invoices report has been prepared. | [DashboardReportData](#dashboardreportdata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /au/{code}

#### GET
##### Summary

Get purchase invoice by code.

##### Description

API to fetch purchase invoice details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /au/{id}

#### PUT
##### Summary

Update purchase invoice.

##### Description

API to update existing purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestAustralia](#purchaseinvoicerequestaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Invoice has been updated successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 201 | Created |  |
| 400 | Purchase invoice draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoice by id.

##### Description

API to delete purchase invoice details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase invoice has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase invoice memo or attachment

##### Description

API to update purchase invoice memo or attachment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceFields | body | purchaseInvoiceFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Memo/attachment for purchase invoice updated successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-invoice-controller-belgium
Purchase Invoice APIs for Belgium

### Bill /be

#### GET
##### Summary

Search purchase invoices.

##### Description

API to search purchase invoices.

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
| 200 | Purchase invoices have been fetched successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create purchase invoice

##### Description

API to create purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestAustralia](#purchaseinvoicerequestaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 201 | Purchase invoice has been created successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 400 | Purchase invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update purchase invoice attributes by code.

##### Description

API to update attributes of existing purchase invoice by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |
| request | body | request | Yes | [PurchaseInvoiceUpdateRequest](#purchaseinvoiceupdaterequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Purchase invoice attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice with given code not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoices by ids in bulk.

##### Description

API to delete purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Request processed successfully. | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoices not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /be/bulk

#### POST
##### Summary

Create multiple sales invoice

##### Description

API to create sales invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequests | body | purchaseInvoiceRequests | Yes | [ [PurchaseInvoiceRequestAustralia](#purchaseinvoicerequestaustralia) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 201 | Sales invoice has been created successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 400 | Sales invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /be/code/{code}/details

#### GET
##### Summary

Purchase invoice details by codes

##### Description

Purchase invoice details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceInformation](#purchaseinvoiceinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /be/due-amount

#### PUT
##### Summary

Update due amount for purchase invoices in bulk.

##### Description

API to update due amount for purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| invoiceUpdateAmountDueDtoList | body | invoiceUpdateAmountDueDtoList | Yes | [ [InvoiceUpdateAmountDueDto](#invoiceupdateamountduedto) ] |
| revert | query | revert | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /be/es/{contactCode}

#### GET
##### Summary

Get Invoice for contact.

##### Description

Get Invoice with contact code from ES.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | path | contactCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get Invoice successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Invoice with given contact code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /be/linked-order/{code}

#### GET
##### Summary

Get purchase invoices linked to an order by code.

##### Description

API to fetch purchase invoices linked to an order by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoices has been fetched successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /be/report/count

#### POST
##### Summary

Get purchase invoice count for contacts

##### Description

API to fetch purchase invoice count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase invoice count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /be/report/overview

#### GET
##### Summary

Purchase invoice overview report data.

##### Description

API to fetch purchase invoice overview report data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice overview report has been prepared. | [InvoiceOverviewReport](#invoiceoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /be/report/unpaid

#### GET
##### Summary

Unpaid purchase invoices report.

##### Description

API to fetch unpaid purchase invoices

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unpaid purchase invoices report has been prepared. | [DashboardReportData](#dashboardreportdata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /be/{code}

#### GET
##### Summary

Get purchase invoice by code.

##### Description

API to fetch purchase invoice details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /be/{id}

#### PUT
##### Summary

Update purchase invoice.

##### Description

API to update existing purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestAustralia](#purchaseinvoicerequestaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Invoice has been updated successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 201 | Created |  |
| 400 | Purchase invoice draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoice by id.

##### Description

API to delete purchase invoice details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase invoice has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase invoice memo or attachment

##### Description

API to update purchase invoice memo or attachment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceFields | body | purchaseInvoiceFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Memo/attachment for purchase invoice updated successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-invoice-controller-canada
Purchase Invoice APIs for Canada.

### Bill /ca

#### GET
##### Summary

Search purchase invoices.

##### Description

API to search purchase invoices.

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
| 200 | Purchase invoices have been fetched successfully. | [PurchaseInvoiceResponseCanada](#purchaseinvoiceresponsecanada) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create purchase invoice

##### Description

API to create purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestCanada](#purchaseinvoicerequestcanada) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseCanada](#purchaseinvoiceresponsecanada) |
| 201 | Purchase invoice has been created successfully. | [PurchaseInvoiceResponseCanada](#purchaseinvoiceresponsecanada) |
| 400 | Purchase invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update purchase invoice attributes by code.

##### Description

API to update attributes of existing purchase invoice by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |
| request | body | request | Yes | [PurchaseInvoiceUpdateRequest](#purchaseinvoiceupdaterequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Purchase invoice attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice with given code not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoices by ids in bulk.

##### Description

API to delete purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Request processed successfully. | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoices not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ca/bulk

#### POST
##### Summary

Create multiple sales invoice

##### Description

API to create sales invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequests | body | purchaseInvoiceRequests | Yes | [ [PurchaseInvoiceRequestCanada](#purchaseinvoicerequestcanada) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseCanada](#purchaseinvoiceresponsecanada) |
| 201 | Sales invoice has been created successfully. | [PurchaseInvoiceResponseCanada](#purchaseinvoiceresponsecanada) |
| 400 | Sales invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ca/code/{code}/details

#### GET
##### Summary

Purchase invoice details by codes

##### Description

Purchase invoice details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceInformation](#purchaseinvoiceinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ca/due-amount

#### PUT
##### Summary

Update due amount for purchase invoices in bulk.

##### Description

API to update due amount for purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| invoiceUpdateAmountDueDtoList | body | invoiceUpdateAmountDueDtoList | Yes | [ [InvoiceUpdateAmountDueDto](#invoiceupdateamountduedto) ] |
| revert | query | revert | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ca/es/{contactCode}

#### GET
##### Summary

Get Invoice for contact.

##### Description

Get Invoice with contact code from ES.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | path | contactCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get Invoice successfully. | [PurchaseInvoiceResponseCanada](#purchaseinvoiceresponsecanada) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Invoice with given contact code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ca/linked-order/{code}

#### GET
##### Summary

Get purchase invoices linked to an order by code.

##### Description

API to fetch purchase invoices linked to an order by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoices has been fetched successfully. | [PurchaseInvoiceResponseCanada](#purchaseinvoiceresponsecanada) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ca/report/count

#### POST
##### Summary

Get purchase invoice count for contacts

##### Description

API to fetch purchase invoice count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase invoice count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ca/report/overview

#### GET
##### Summary

Purchase invoice overview report data.

##### Description

API to fetch purchase invoice overview report data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice overview report has been prepared. | [InvoiceOverviewReport](#invoiceoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ca/report/unpaid

#### GET
##### Summary

Unpaid purchase invoices report.

##### Description

API to fetch unpaid purchase invoices

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unpaid purchase invoices report has been prepared. | [DashboardReportData](#dashboardreportdata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ca/{code}

#### GET
##### Summary

Get purchase invoice by code.

##### Description

API to fetch purchase invoice details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | [PurchaseInvoiceResponseCanada](#purchaseinvoiceresponsecanada) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ca/{id}

#### PUT
##### Summary

Update purchase invoice.

##### Description

API to update existing purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestCanada](#purchaseinvoicerequestcanada) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Invoice has been updated successfully. | [PurchaseInvoiceResponseCanada](#purchaseinvoiceresponsecanada) |
| 201 | Created |  |
| 400 | Purchase invoice draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoice by id.

##### Description

API to delete purchase invoice details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase invoice has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase invoice memo or attachment

##### Description

API to update purchase invoice memo or attachment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceFields | body | purchaseInvoiceFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Memo/attachment for purchase invoice updated successfully. | [PurchaseInvoiceResponseCanada](#purchaseinvoiceresponsecanada) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-invoice-controller-germany
Purchase Invoice APIs for Germany.

### Bill /de

#### GET
##### Summary

Search purchase invoices.

##### Description

API to search purchase invoices.

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
| 200 | Purchase invoices have been fetched successfully. | [PurchaseInvoiceResponseGermany](#purchaseinvoiceresponsegermany) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create purchase invoice

##### Description

API to create purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestGermany](#purchaseinvoicerequestgermany) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseGermany](#purchaseinvoiceresponsegermany) |
| 201 | Purchase invoice has been created successfully. | [PurchaseInvoiceResponseGermany](#purchaseinvoiceresponsegermany) |
| 400 | Purchase invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update purchase invoice attributes by code.

##### Description

API to update attributes of existing purchase invoice by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |
| request | body | request | Yes | [PurchaseInvoiceUpdateRequest](#purchaseinvoiceupdaterequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Purchase invoice attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice with given code not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoices by ids in bulk.

##### Description

API to delete purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Request processed successfully. | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoices not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /de/bulk

#### POST
##### Summary

Create multiple sales invoice

##### Description

API to create sales invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequests | body | purchaseInvoiceRequests | Yes | [ [PurchaseInvoiceRequestGermany](#purchaseinvoicerequestgermany) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseGermany](#purchaseinvoiceresponsegermany) |
| 201 | Sales invoice has been created successfully. | [PurchaseInvoiceResponseGermany](#purchaseinvoiceresponsegermany) |
| 400 | Sales invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /de/code/{code}/details

#### GET
##### Summary

Purchase invoice details by codes

##### Description

Purchase invoice details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceInformation](#purchaseinvoiceinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /de/due-amount

#### PUT
##### Summary

Update due amount for purchase invoices in bulk.

##### Description

API to update due amount for purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| invoiceUpdateAmountDueDtoList | body | invoiceUpdateAmountDueDtoList | Yes | [ [InvoiceUpdateAmountDueDto](#invoiceupdateamountduedto) ] |
| revert | query | revert | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /de/es/{contactCode}

#### GET
##### Summary

Get Invoice for contact.

##### Description

Get Invoice with contact code from ES.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | path | contactCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get Invoice successfully. | [PurchaseInvoiceResponseGermany](#purchaseinvoiceresponsegermany) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Invoice with given contact code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /de/linked-order/{code}

#### GET
##### Summary

Get purchase invoices linked to an order by code.

##### Description

API to fetch purchase invoices linked to an order by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoices has been fetched successfully. | [PurchaseInvoiceResponseGermany](#purchaseinvoiceresponsegermany) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /de/report/count

#### POST
##### Summary

Get purchase invoice count for contacts

##### Description

API to fetch purchase invoice count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase invoice count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /de/report/overview

#### GET
##### Summary

Purchase invoice overview report data.

##### Description

API to fetch purchase invoice overview report data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice overview report has been prepared. | [InvoiceOverviewReport](#invoiceoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /de/report/unpaid

#### GET
##### Summary

Unpaid purchase invoices report.

##### Description

API to fetch unpaid purchase invoices

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unpaid purchase invoices report has been prepared. | [DashboardReportData](#dashboardreportdata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /de/{code}

#### GET
##### Summary

Get purchase invoice by code.

##### Description

API to fetch purchase invoice details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | [PurchaseInvoiceResponseGermany](#purchaseinvoiceresponsegermany) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /de/{id}

#### PUT
##### Summary

Update purchase invoice.

##### Description

API to update existing purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestGermany](#purchaseinvoicerequestgermany) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Invoice has been updated successfully. | [PurchaseInvoiceResponseGermany](#purchaseinvoiceresponsegermany) |
| 201 | Created |  |
| 400 | Purchase invoice draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoice by id.

##### Description

API to delete purchase invoice details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase invoice has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase invoice memo or attachment

##### Description

API to update purchase invoice memo or attachment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceFields | body | purchaseInvoiceFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Memo/attachment for purchase invoice updated successfully. | [PurchaseInvoiceResponseGermany](#purchaseinvoiceresponsegermany) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-document-controller
Purchase Document APIs

### Bill /document

#### GET
##### Summary

Search purchase documents.

##### Description

API to search purchase documents.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentStage | query | documentStage | No | string |
| fromDate | query | fromDate | No | dateTime |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| toDate | query | toDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase documents have been fetched successfully. | [Page](#page) |
| 400 | Failed to fetch purchase documents. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /document/purchase/invoices

#### POST
##### Summary

Purchase Invoice Report

##### Description

Purchase Invoice Report API

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [InvoiceDataESRequest](#invoicedataesrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Invoice data fetched from ES successfully. | [InvoiceDataESResponse](#invoicedataesresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /document/summary

#### GET
##### Summary

Purchase documents summary.

##### Description

API for purchase documents summary.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| fromDate | query | fromDate | No | dateTime |
| search | query | search | No | string |
| toDate | query | toDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase documents summary has been fetched successfully. | [DocumentSummaryResponse](#documentsummaryresponse) |
| 400 | Failed to fetch purchase documents summary. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-invoice-controller-indonesia
Purchase Invoice APIs for Indonesia

### Bill /id

#### GET
##### Summary

Search purchase invoices.

##### Description

API to search purchase invoices.

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
| 200 | Purchase invoices have been fetched successfully. | [PurchaseInvoiceResponseIndonesia](#purchaseinvoiceresponseindonesia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create purchase invoice

##### Description

API to create purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestIndonesia](#purchaseinvoicerequestindonesia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseIndonesia](#purchaseinvoiceresponseindonesia) |
| 201 | Purchase invoice has been created successfully. | [PurchaseInvoiceResponseIndonesia](#purchaseinvoiceresponseindonesia) |
| 400 | Purchase invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update purchase invoice attributes by code.

##### Description

API to update attributes of existing purchase invoice by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |
| request | body | request | Yes | [PurchaseInvoiceUpdateRequest](#purchaseinvoiceupdaterequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Purchase invoice attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice with given code not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoices by ids in bulk.

##### Description

API to delete purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Request processed successfully. | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoices not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /id/bulk

#### POST
##### Summary

Create multiple sales invoice

##### Description

API to create sales invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequests | body | purchaseInvoiceRequests | Yes | [ [PurchaseInvoiceRequestIndonesia](#purchaseinvoicerequestindonesia) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseIndonesia](#purchaseinvoiceresponseindonesia) |
| 201 | Sales invoice has been created successfully. | [PurchaseInvoiceResponseIndonesia](#purchaseinvoiceresponseindonesia) |
| 400 | Sales invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /id/code/{code}

#### GET
##### Summary

Get purchase invoice by code.

##### Description

API to fetch purchase invoice details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | [PurchaseInvoiceResponseIndonesia](#purchaseinvoiceresponseindonesia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /id/code/{code}/details

#### GET
##### Summary

Purchase invoice details by codes

##### Description

Purchase invoice details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceInformation](#purchaseinvoiceinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /id/due-amount

#### PUT
##### Summary

Update due amount for purchase invoices in bulk.

##### Description

API to update due amount for purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| invoiceUpdateAmountDueDtoList | body | invoiceUpdateAmountDueDtoList | Yes | [ [InvoiceUpdateAmountDueDto](#invoiceupdateamountduedto) ] |
| revert | query | revert | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /id/es/{contactCode}

#### GET
##### Summary

Get Invoice for contact.

##### Description

Get Invoice with contact code from ES.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | path | contactCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get Invoice successfully. | [PurchaseInvoiceResponseIndonesia](#purchaseinvoiceresponseindonesia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Invoice with given contact code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /id/linked-order/{code}

#### GET
##### Summary

Get purchase invoices linked to an order by code.

##### Description

API to fetch purchase invoices linked to an order by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoices has been fetched successfully. | [PurchaseInvoiceResponseIndonesia](#purchaseinvoiceresponseindonesia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /id/report/count

#### POST
##### Summary

Get purchase invoice count for contacts

##### Description

API to fetch purchase invoice count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase invoice count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /id/report/overview

#### GET
##### Summary

Purchase invoice overview report data.

##### Description

API to fetch purchase invoice overview report data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice overview report has been prepared. | [InvoiceOverviewReport](#invoiceoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /id/report/unpaid

#### GET
##### Summary

Unpaid purchase invoices report.

##### Description

API to fetch unpaid purchase invoices

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unpaid purchase invoices report has been prepared. | [DashboardReportData](#dashboardreportdata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /id/{code}

#### GET
##### Summary

Get purchase invoice by code.

##### Description

API to fetch purchase invoice details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | [PurchaseInvoiceResponseIndonesia](#purchaseinvoiceresponseindonesia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /id/{id}

#### PUT
##### Summary

Update purchase invoice.

##### Description

API to update existing purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestIndonesia](#purchaseinvoicerequestindonesia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Invoice has been updated successfully. | [PurchaseInvoiceResponseIndonesia](#purchaseinvoiceresponseindonesia) |
| 201 | Created |  |
| 400 | Purchase invoice draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoice by id.

##### Description

API to delete purchase invoice details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase invoice has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase invoice memo or attachment

##### Description

API to update purchase invoice memo or attachment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceFields | body | purchaseInvoiceFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Memo/attachment for purchase invoice updated successfully. | [PurchaseInvoiceResponseIndonesia](#purchaseinvoiceresponseindonesia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-invoice-controller-israel
Purchase Invoice APIs for Israel.

### Bill /il

#### GET
##### Summary

Search purchase invoices.

##### Description

API to search purchase invoices.

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
| 200 | Purchase invoices have been fetched successfully. | [PurchaseInvoiceResponseIsrael](#purchaseinvoiceresponseisrael) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create purchase invoice

##### Description

API to create purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestIsrael](#purchaseinvoicerequestisrael) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseIsrael](#purchaseinvoiceresponseisrael) |
| 201 | Purchase invoice has been created successfully. | [PurchaseInvoiceResponseIsrael](#purchaseinvoiceresponseisrael) |
| 400 | Purchase invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update purchase invoice attributes by code.

##### Description

API to update attributes of existing purchase invoice by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |
| request | body | request | Yes | [PurchaseInvoiceUpdateRequest](#purchaseinvoiceupdaterequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Purchase invoice attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice with given code not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoices by ids in bulk.

##### Description

API to delete purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Request processed successfully. | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoices not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /il/bulk

#### POST
##### Summary

Create multiple sales invoice

##### Description

API to create sales invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequests | body | purchaseInvoiceRequests | Yes | [ [PurchaseInvoiceRequestIsrael](#purchaseinvoicerequestisrael) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseIsrael](#purchaseinvoiceresponseisrael) |
| 201 | Sales invoice has been created successfully. | [PurchaseInvoiceResponseIsrael](#purchaseinvoiceresponseisrael) |
| 400 | Sales invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /il/code/{code}/details

#### GET
##### Summary

Purchase invoice details by codes

##### Description

Purchase invoice details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceInformation](#purchaseinvoiceinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /il/due-amount

#### PUT
##### Summary

Update due amount for purchase invoices in bulk.

##### Description

API to update due amount for purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| invoiceUpdateAmountDueDtoList | body | invoiceUpdateAmountDueDtoList | Yes | [ [InvoiceUpdateAmountDueDto](#invoiceupdateamountduedto) ] |
| revert | query | revert | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /il/es/{contactCode}

#### GET
##### Summary

Get Invoice for contact.

##### Description

Get Invoice with contact code from ES.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | path | contactCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get Invoice successfully. | [PurchaseInvoiceResponseIsrael](#purchaseinvoiceresponseisrael) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Invoice with given contact code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /il/linked-order/{code}

#### GET
##### Summary

Get purchase invoices linked to an order by code.

##### Description

API to fetch purchase invoices linked to an order by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoices has been fetched successfully. | [PurchaseInvoiceResponseIsrael](#purchaseinvoiceresponseisrael) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /il/report/count

#### POST
##### Summary

Get purchase invoice count for contacts

##### Description

API to fetch purchase invoice count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase invoice count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /il/report/overview

#### GET
##### Summary

Purchase invoice overview report data.

##### Description

API to fetch purchase invoice overview report data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice overview report has been prepared. | [InvoiceOverviewReport](#invoiceoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /il/report/unpaid

#### GET
##### Summary

Unpaid purchase invoices report.

##### Description

API to fetch unpaid purchase invoices

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unpaid purchase invoices report has been prepared. | [DashboardReportData](#dashboardreportdata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /il/{code}

#### GET
##### Summary

Get purchase invoice by code.

##### Description

API to fetch purchase invoice details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | [PurchaseInvoiceResponseIsrael](#purchaseinvoiceresponseisrael) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /il/{id}

#### PUT
##### Summary

Update purchase invoice.

##### Description

API to update existing purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestIsrael](#purchaseinvoicerequestisrael) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Invoice has been updated successfully. | [PurchaseInvoiceResponseIsrael](#purchaseinvoiceresponseisrael) |
| 201 | Created |  |
| 400 | Purchase invoice draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoice by id.

##### Description

API to delete purchase invoice details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase invoice has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase invoice memo or attachment

##### Description

API to update purchase invoice memo or attachment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceFields | body | purchaseInvoiceFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Memo/attachment for purchase invoice updated successfully. | [PurchaseInvoiceResponseIsrael](#purchaseinvoiceresponseisrael) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-invoice-controller-india
Purchase Invoice APIs for India

### Bill /in

#### GET
##### Summary

Search purchase invoices.

##### Description

API to search purchase invoices.

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
| 200 | Purchase invoices have been fetched successfully. | [PurchaseInvoiceResponseIndia](#purchaseinvoiceresponseindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create purchase invoice

##### Description

API to create purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestIndia](#purchaseinvoicerequestindia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseIndia](#purchaseinvoiceresponseindia) |
| 201 | Purchase invoice has been created successfully. | [PurchaseInvoiceResponseIndia](#purchaseinvoiceresponseindia) |
| 400 | Purchase invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update purchase invoice attributes by code.

##### Description

API to update attributes of existing purchase invoice by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |
| request | body | request | Yes | [PurchaseInvoiceUpdateRequest](#purchaseinvoiceupdaterequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Purchase invoice attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice with given code not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoices by ids in bulk.

##### Description

API to delete purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Request processed successfully. | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoices not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /in/bulk

#### POST
##### Summary

Create multiple sales invoice

##### Description

API to create sales invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequests | body | purchaseInvoiceRequests | Yes | [ [PurchaseInvoiceRequestIndia](#purchaseinvoicerequestindia) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseIndia](#purchaseinvoiceresponseindia) |
| 201 | Sales invoice has been created successfully. | [PurchaseInvoiceResponseIndia](#purchaseinvoiceresponseindia) |
| 400 | Sales invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /in/code/{code}

#### GET
##### Summary

Get purchase invoice by code.

##### Description

API to fetch purchase invoice details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | [PurchaseInvoiceResponseIndia](#purchaseinvoiceresponseindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /in/code/{code}/details

#### GET
##### Summary

Purchase invoice details by codes

##### Description

Purchase invoice details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceInformation](#purchaseinvoiceinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /in/due-amount

#### PUT
##### Summary

Update due amount for purchase invoices in bulk.

##### Description

API to update due amount for purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| invoiceUpdateAmountDueDtoList | body | invoiceUpdateAmountDueDtoList | Yes | [ [InvoiceUpdateAmountDueDto](#invoiceupdateamountduedto) ] |
| revert | query | revert | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /in/es/{contactCode}

#### GET
##### Summary

Get Invoice for contact.

##### Description

Get Invoice with contact code from ES.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | path | contactCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get Invoice successfully. | [PurchaseInvoiceResponseIndia](#purchaseinvoiceresponseindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Invoice with given contact code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /in/linked-order/{code}

#### GET
##### Summary

Get purchase invoices linked to an order by code.

##### Description

API to fetch purchase invoices linked to an order by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoices has been fetched successfully. | [PurchaseInvoiceResponseIndia](#purchaseinvoiceresponseindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /in/report/count

#### POST
##### Summary

Get purchase invoice count for contacts

##### Description

API to fetch purchase invoice count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase invoice count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /in/report/overview

#### GET
##### Summary

Purchase invoice overview report data.

##### Description

API to fetch purchase invoice overview report data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice overview report has been prepared. | [InvoiceOverviewReport](#invoiceoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /in/report/unpaid

#### GET
##### Summary

Unpaid purchase invoices report.

##### Description

API to fetch unpaid purchase invoices

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unpaid purchase invoices report has been prepared. | [DashboardReportData](#dashboardreportdata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /in/tds/{id}

#### GET
##### Summary

Get purchase invoice amount by tds id.

##### Description

API to get get total purchase invoice amount by tds id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | number |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /in/total

#### GET
##### Summary

Get Total Purchase invoices Amount

##### Description

API to fetch total purchase invoice amount

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get Total Purchase invoices Amount. | number |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /in/update-tds-processed-flag/{code}

#### PATCH
##### Summary

Update tds processed flag by code

##### Description

Api to update tds processed flag by code

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |
| isTdsProcessed | body | isTdsProcessed | Yes | boolean |

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

### Bill /in/{code}

#### GET
##### Summary

Get purchase invoice by code.

##### Description

API to fetch purchase invoice details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | [PurchaseInvoiceResponseIndia](#purchaseinvoiceresponseindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /in/{id}

#### PUT
##### Summary

Update purchase invoice.

##### Description

API to update existing purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestIndia](#purchaseinvoicerequestindia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Invoice has been updated successfully. | [PurchaseInvoiceResponseIndia](#purchaseinvoiceresponseindia) |
| 201 | Created |  |
| 400 | Purchase invoice draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoice by id.

##### Description

API to delete purchase invoice details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase invoice has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase invoice memo or attachment

##### Description

API to update purchase invoice memo or attachment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceFields | body | purchaseInvoiceFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Memo/attachment for purchase invoice updated successfully. | [PurchaseInvoiceResponseIndia](#purchaseinvoiceresponseindia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-invoice-controller-malaysia
Purchase Invoice APIs for Malaysia

### Bill /my

#### GET
##### Summary

Search purchase invoices.

##### Description

API to search purchase invoices.

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
| 200 | Purchase invoices have been fetched successfully. | [PurchaseInvoiceResponseMalaysia](#purchaseinvoiceresponsemalaysia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create purchase invoice

##### Description

API to create purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestMalaysia](#purchaseinvoicerequestmalaysia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseMalaysia](#purchaseinvoiceresponsemalaysia) |
| 201 | Purchase invoice has been created successfully. | [PurchaseInvoiceResponseMalaysia](#purchaseinvoiceresponsemalaysia) |
| 400 | Purchase invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update purchase invoice attributes by code.

##### Description

API to update attributes of existing purchase invoice by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |
| request | body | request | Yes | [PurchaseInvoiceUpdateRequest](#purchaseinvoiceupdaterequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Purchase invoice attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice with given code not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoices by ids in bulk.

##### Description

API to delete purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Request processed successfully. | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoices not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /my/bulk

#### POST
##### Summary

Create multiple sales invoice

##### Description

API to create sales invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequests | body | purchaseInvoiceRequests | Yes | [ [PurchaseInvoiceRequestMalaysia](#purchaseinvoicerequestmalaysia) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseMalaysia](#purchaseinvoiceresponsemalaysia) |
| 201 | Sales invoice has been created successfully. | [PurchaseInvoiceResponseMalaysia](#purchaseinvoiceresponsemalaysia) |
| 400 | Sales invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /my/code/{code}/details

#### GET
##### Summary

Purchase invoice details by codes

##### Description

Purchase invoice details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceInformation](#purchaseinvoiceinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /my/due-amount

#### PUT
##### Summary

Update due amount for purchase invoices in bulk.

##### Description

API to update due amount for purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| invoiceUpdateAmountDueDtoList | body | invoiceUpdateAmountDueDtoList | Yes | [ [InvoiceUpdateAmountDueDto](#invoiceupdateamountduedto) ] |
| revert | query | revert | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /my/es/{contactCode}

#### GET
##### Summary

Get Invoice for contact.

##### Description

Get Invoice with contact code from ES.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | path | contactCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get Invoice successfully. | [PurchaseInvoiceResponseMalaysia](#purchaseinvoiceresponsemalaysia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Invoice with given contact code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /my/linked-order/{code}

#### GET
##### Summary

Get purchase invoices linked to an order by code.

##### Description

API to fetch purchase invoices linked to an order by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoices has been fetched successfully. | [PurchaseInvoiceResponseMalaysia](#purchaseinvoiceresponsemalaysia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /my/report/count

#### POST
##### Summary

Get purchase invoice count for contacts

##### Description

API to fetch purchase invoice count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase invoice count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /my/report/overview

#### GET
##### Summary

Purchase invoice overview report data.

##### Description

API to fetch purchase invoice overview report data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice overview report has been prepared. | [InvoiceOverviewReport](#invoiceoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /my/report/unpaid

#### GET
##### Summary

Unpaid purchase invoices report.

##### Description

API to fetch unpaid purchase invoices

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unpaid purchase invoices report has been prepared. | [DashboardReportData](#dashboardreportdata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /my/{code}

#### GET
##### Summary

Get purchase invoice by code.

##### Description

API to fetch purchase invoice details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | [PurchaseInvoiceResponseMalaysia](#purchaseinvoiceresponsemalaysia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /my/{id}

#### PUT
##### Summary

Update purchase invoice.

##### Description

API to update existing purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestMalaysia](#purchaseinvoicerequestmalaysia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Invoice has been updated successfully. | [PurchaseInvoiceResponseMalaysia](#purchaseinvoiceresponsemalaysia) |
| 201 | Created |  |
| 400 | Purchase invoice draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoice by id.

##### Description

API to delete purchase invoice details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase invoice has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase invoice memo or attachment

##### Description

API to update purchase invoice memo or attachment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceFields | body | purchaseInvoiceFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Memo/attachment for purchase invoice updated successfully. | [PurchaseInvoiceResponseMalaysia](#purchaseinvoiceresponsemalaysia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-invoice-controller-netherlands
Purchase Invoice APIs for Netherlands

### Bill /nl

#### GET
##### Summary

Search purchase invoices.

##### Description

API to search purchase invoices.

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
| 200 | Purchase invoices have been fetched successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create purchase invoice

##### Description

API to create purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestAustralia](#purchaseinvoicerequestaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 201 | Purchase invoice has been created successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 400 | Purchase invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update purchase invoice attributes by code.

##### Description

API to update attributes of existing purchase invoice by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |
| request | body | request | Yes | [PurchaseInvoiceUpdateRequest](#purchaseinvoiceupdaterequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Purchase invoice attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice with given code not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoices by ids in bulk.

##### Description

API to delete purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Request processed successfully. | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoices not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /nl/bulk

#### POST
##### Summary

Create multiple sales invoice

##### Description

API to create sales invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequests | body | purchaseInvoiceRequests | Yes | [ [PurchaseInvoiceRequestAustralia](#purchaseinvoicerequestaustralia) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 201 | Sales invoice has been created successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 400 | Sales invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /nl/code/{code}/details

#### GET
##### Summary

Purchase invoice details by codes

##### Description

Purchase invoice details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceInformation](#purchaseinvoiceinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /nl/due-amount

#### PUT
##### Summary

Update due amount for purchase invoices in bulk.

##### Description

API to update due amount for purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| invoiceUpdateAmountDueDtoList | body | invoiceUpdateAmountDueDtoList | Yes | [ [InvoiceUpdateAmountDueDto](#invoiceupdateamountduedto) ] |
| revert | query | revert | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /nl/es/{contactCode}

#### GET
##### Summary

Get Invoice for contact.

##### Description

Get Invoice with contact code from ES.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | path | contactCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get Invoice successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Invoice with given contact code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /nl/linked-order/{code}

#### GET
##### Summary

Get purchase invoices linked to an order by code.

##### Description

API to fetch purchase invoices linked to an order by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoices has been fetched successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /nl/report/count

#### POST
##### Summary

Get purchase invoice count for contacts

##### Description

API to fetch purchase invoice count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase invoice count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /nl/report/overview

#### GET
##### Summary

Purchase invoice overview report data.

##### Description

API to fetch purchase invoice overview report data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice overview report has been prepared. | [InvoiceOverviewReport](#invoiceoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /nl/report/unpaid

#### GET
##### Summary

Unpaid purchase invoices report.

##### Description

API to fetch unpaid purchase invoices

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unpaid purchase invoices report has been prepared. | [DashboardReportData](#dashboardreportdata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /nl/{code}

#### GET
##### Summary

Get purchase invoice by code.

##### Description

API to fetch purchase invoice details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /nl/{id}

#### PUT
##### Summary

Update purchase invoice.

##### Description

API to update existing purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestAustralia](#purchaseinvoicerequestaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Invoice has been updated successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 201 | Created |  |
| 400 | Purchase invoice draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoice by id.

##### Description

API to delete purchase invoice details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase invoice has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase invoice memo or attachment

##### Description

API to update purchase invoice memo or attachment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceFields | body | purchaseInvoiceFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Memo/attachment for purchase invoice updated successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-invoice-controller-nz
Purchase Invoice APIs for New Zealand

### Bill /nz

#### GET
##### Summary

Search purchase invoices.

##### Description

API to search purchase invoices.

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
| 200 | Purchase invoices have been fetched successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create purchase invoice

##### Description

API to create purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestAustralia](#purchaseinvoicerequestaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 201 | Purchase invoice has been created successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 400 | Purchase invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update purchase invoice attributes by code.

##### Description

API to update attributes of existing purchase invoice by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |
| request | body | request | Yes | [PurchaseInvoiceUpdateRequest](#purchaseinvoiceupdaterequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Purchase invoice attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice with given code not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoices by ids in bulk.

##### Description

API to delete purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Request processed successfully. | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoices not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /nz/bulk

#### POST
##### Summary

Create multiple sales invoice

##### Description

API to create sales invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequests | body | purchaseInvoiceRequests | Yes | [ [PurchaseInvoiceRequestAustralia](#purchaseinvoicerequestaustralia) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 201 | Sales invoice has been created successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 400 | Sales invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /nz/code/{code}/details

#### GET
##### Summary

Purchase invoice details by codes

##### Description

Purchase invoice details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceInformation](#purchaseinvoiceinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /nz/due-amount

#### PUT
##### Summary

Update due amount for purchase invoices in bulk.

##### Description

API to update due amount for purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| invoiceUpdateAmountDueDtoList | body | invoiceUpdateAmountDueDtoList | Yes | [ [InvoiceUpdateAmountDueDto](#invoiceupdateamountduedto) ] |
| revert | query | revert | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /nz/es/{contactCode}

#### GET
##### Summary

Get Invoice for contact.

##### Description

Get Invoice with contact code from ES.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | path | contactCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get Invoice successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Invoice with given contact code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /nz/linked-order/{code}

#### GET
##### Summary

Get purchase invoices linked to an order by code.

##### Description

API to fetch purchase invoices linked to an order by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoices has been fetched successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /nz/report/count

#### POST
##### Summary

Get purchase invoice count for contacts

##### Description

API to fetch purchase invoice count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase invoice count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /nz/report/overview

#### GET
##### Summary

Purchase invoice overview report data.

##### Description

API to fetch purchase invoice overview report data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice overview report has been prepared. | [InvoiceOverviewReport](#invoiceoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /nz/report/unpaid

#### GET
##### Summary

Unpaid purchase invoices report.

##### Description

API to fetch unpaid purchase invoices

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unpaid purchase invoices report has been prepared. | [DashboardReportData](#dashboardreportdata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /nz/{code}

#### GET
##### Summary

Get purchase invoice by code.

##### Description

API to fetch purchase invoice details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /nz/{id}

#### PUT
##### Summary

Update purchase invoice.

##### Description

API to update existing purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestAustralia](#purchaseinvoicerequestaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Invoice has been updated successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 201 | Created |  |
| 400 | Purchase invoice draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoice by id.

##### Description

API to delete purchase invoice details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase invoice has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase invoice memo or attachment

##### Description

API to update purchase invoice memo or attachment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceFields | body | purchaseInvoiceFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Memo/attachment for purchase invoice updated successfully. | [PurchaseInvoiceResponseAustralia](#purchaseinvoiceresponseaustralia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-invoice-controller-philippines
Purchase Invoice APIs for Philippines

### Bill /ph

#### GET
##### Summary

Search purchase invoices.

##### Description

API to search purchase invoices.

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
| 200 | Purchase invoices have been fetched successfully. | [PurchaseInvoiceResponsePhilippines](#purchaseinvoiceresponsephilippines) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create purchase invoice

##### Description

API to create purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestPhilippines](#purchaseinvoicerequestphilippines) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponsePhilippines](#purchaseinvoiceresponsephilippines) |
| 201 | Purchase invoice has been created successfully. | [PurchaseInvoiceResponsePhilippines](#purchaseinvoiceresponsephilippines) |
| 400 | Purchase invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update purchase invoice attributes by code.

##### Description

API to update attributes of existing purchase invoice by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |
| request | body | request | Yes | [PurchaseInvoiceUpdateRequest](#purchaseinvoiceupdaterequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Purchase invoice attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice with given code not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoices by ids in bulk.

##### Description

API to delete purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Request processed successfully. | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoices not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ph/bulk

#### POST
##### Summary

Create multiple sales invoice

##### Description

API to create sales invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequests | body | purchaseInvoiceRequests | Yes | [ [PurchaseInvoiceRequestPhilippines](#purchaseinvoicerequestphilippines) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponsePhilippines](#purchaseinvoiceresponsephilippines) |
| 201 | Sales invoice has been created successfully. | [PurchaseInvoiceResponsePhilippines](#purchaseinvoiceresponsephilippines) |
| 400 | Sales invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ph/code/{code}/details

#### GET
##### Summary

Purchase invoice details by codes

##### Description

Purchase invoice details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceInformation](#purchaseinvoiceinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ph/due-amount

#### PUT
##### Summary

Update due amount for purchase invoices in bulk.

##### Description

API to update due amount for purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| invoiceUpdateAmountDueDtoList | body | invoiceUpdateAmountDueDtoList | Yes | [ [InvoiceUpdateAmountDueDto](#invoiceupdateamountduedto) ] |
| revert | query | revert | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ph/es/{contactCode}

#### GET
##### Summary

Get Invoice for contact.

##### Description

Get Invoice with contact code from ES.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | path | contactCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get Invoice successfully. | [PurchaseInvoiceResponsePhilippines](#purchaseinvoiceresponsephilippines) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Invoice with given contact code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ph/linked-order/{code}

#### GET
##### Summary

Get purchase invoices linked to an order by code.

##### Description

API to fetch purchase invoices linked to an order by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoices has been fetched successfully. | [PurchaseInvoiceResponsePhilippines](#purchaseinvoiceresponsephilippines) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ph/report/count

#### POST
##### Summary

Get purchase invoice count for contacts

##### Description

API to fetch purchase invoice count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase invoice count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ph/report/overview

#### GET
##### Summary

Purchase invoice overview report data.

##### Description

API to fetch purchase invoice overview report data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice overview report has been prepared. | [InvoiceOverviewReport](#invoiceoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ph/report/unpaid

#### GET
##### Summary

Unpaid purchase invoices report.

##### Description

API to fetch unpaid purchase invoices

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unpaid purchase invoices report has been prepared. | [DashboardReportData](#dashboardreportdata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ph/{code}

#### GET
##### Summary

Get purchase invoice by code.

##### Description

API to fetch purchase invoice details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | [PurchaseInvoiceResponsePhilippines](#purchaseinvoiceresponsephilippines) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /ph/{id}

#### PUT
##### Summary

Update purchase invoice.

##### Description

API to update existing purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestPhilippines](#purchaseinvoicerequestphilippines) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Invoice has been updated successfully. | [PurchaseInvoiceResponsePhilippines](#purchaseinvoiceresponsephilippines) |
| 201 | Created |  |
| 400 | Purchase invoice draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoice by id.

##### Description

API to delete purchase invoice details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase invoice has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase invoice memo or attachment

##### Description

API to update purchase invoice memo or attachment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceFields | body | purchaseInvoiceFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Memo/attachment for purchase invoice updated successfully. | [PurchaseInvoiceResponsePhilippines](#purchaseinvoiceresponsephilippines) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-invoice-controller-sa
Purchase Invoice APIs for Saudi Arab

### Bill /sa

#### GET
##### Summary

Search purchase invoices.

##### Description

API to search purchase invoices.

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
| 200 | Purchase invoices have been fetched successfully. | [PurchaseInvoiceResponseSA](#purchaseinvoiceresponsesa) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create purchase invoice

##### Description

API to create purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestSA](#purchaseinvoicerequestsa) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseSA](#purchaseinvoiceresponsesa) |
| 201 | Purchase invoice has been created successfully. | [PurchaseInvoiceResponseSA](#purchaseinvoiceresponsesa) |
| 400 | Purchase invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update purchase invoice attributes by code.

##### Description

API to update attributes of existing purchase invoice by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |
| request | body | request | Yes | [PurchaseInvoiceUpdateRequest](#purchaseinvoiceupdaterequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Purchase invoice attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice with given code not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoices by ids in bulk.

##### Description

API to delete purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Request processed successfully. | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoices not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /sa/bills-for-adjustment-je

#### GET
##### Summary

Get list of purchase invoices for Custom / RCM adjustment journal entries

##### Description

Api to fetch list of purchase invoices for Custom / RCM adjustment journal entries

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| adjustmentType | query | adjustmentType | Yes | string |
| endDate | query | endDate | Yes | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| search | query | search | No | string |
| startDate | query | startDate | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoices have been fetched successfully | [JournalBillDetailsSA](#journalbilldetailssa) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /sa/bills-summary-for-adjustment-je

#### GET
##### Summary

Get purchase invoices summary for Custom / RCM adjustment journal entries

##### Description

Api to fetch purchase invoices summary for Custom / RCM adjustment journal entries

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| adjustmentType | query | adjustmentType | Yes | string |
| endDate | query | endDate | Yes | string |
| startDate | query | startDate | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoices summary have been fetched successfully | [JournalAdjustmentBillsSummarySA](#journaladjustmentbillssummarysa) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /sa/bulk

#### POST
##### Summary

Create multiple sales invoice

##### Description

API to create sales invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequests | body | purchaseInvoiceRequests | Yes | [ [PurchaseInvoiceRequestSA](#purchaseinvoicerequestsa) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseSA](#purchaseinvoiceresponsesa) |
| 201 | Sales invoice has been created successfully. | [PurchaseInvoiceResponseSA](#purchaseinvoiceresponsesa) |
| 400 | Sales invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /sa/code/{code}/details

#### GET
##### Summary

Purchase invoice details by codes

##### Description

Purchase invoice details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceInformation](#purchaseinvoiceinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /sa/due-amount

#### PUT
##### Summary

Update due amount for purchase invoices in bulk.

##### Description

API to update due amount for purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| invoiceUpdateAmountDueDtoList | body | invoiceUpdateAmountDueDtoList | Yes | [ [InvoiceUpdateAmountDueDto](#invoiceupdateamountduedto) ] |
| revert | query | revert | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /sa/es/{contactCode}

#### GET
##### Summary

Get Invoice for contact.

##### Description

Get Invoice with contact code from ES.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | path | contactCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get Invoice successfully. | [PurchaseInvoiceResponseSA](#purchaseinvoiceresponsesa) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Invoice with given contact code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /sa/linked-order/{code}

#### GET
##### Summary

Get purchase invoices linked to an order by code.

##### Description

API to fetch purchase invoices linked to an order by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoices has been fetched successfully. | [PurchaseInvoiceResponseSA](#purchaseinvoiceresponsesa) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /sa/report/count

#### POST
##### Summary

Get purchase invoice count for contacts

##### Description

API to fetch purchase invoice count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase invoice count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /sa/report/overview

#### GET
##### Summary

Purchase invoice overview report data.

##### Description

API to fetch purchase invoice overview report data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice overview report has been prepared. | [InvoiceOverviewReport](#invoiceoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /sa/report/unpaid

#### GET
##### Summary

Unpaid purchase invoices report.

##### Description

API to fetch unpaid purchase invoices

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unpaid purchase invoices report has been prepared. | [DashboardReportData](#dashboardreportdata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /sa/update-adjustment-je-flag/{code}

#### PATCH
##### Summary

Update adjustment je flag by code for Saudi Arabia

##### Description

Api to update adjustment je flag by code for Saudi Arabia

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| adjustmentJEFlag | body | adjustmentJEFlag | Yes | boolean |
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

### Bill /sa/{code}

#### GET
##### Summary

Get purchase invoice by code.

##### Description

API to fetch purchase invoice details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | [PurchaseInvoiceResponseSA](#purchaseinvoiceresponsesa) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /sa/{id}

#### PUT
##### Summary

Update purchase invoice.

##### Description

API to update existing purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestSA](#purchaseinvoicerequestsa) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Invoice has been updated successfully. | [PurchaseInvoiceResponseSA](#purchaseinvoiceresponsesa) |
| 201 | Created |  |
| 400 | Purchase invoice draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoice by id.

##### Description

API to delete purchase invoice details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase invoice has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase invoice memo or attachment

##### Description

API to update purchase invoice memo or attachment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceFields | body | purchaseInvoiceFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Memo/attachment for purchase invoice updated successfully. | [PurchaseInvoiceResponseSA](#purchaseinvoiceresponsesa) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## purchase-invoice-controller-uk
Purchase Invoice APIs for UK.

### Bill /uk

#### GET
##### Summary

Search purchase invoices.

##### Description

API to search purchase invoices.

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
| 200 | Purchase invoices have been fetched successfully. | [PurchaseInvoiceResponseUk](#purchaseinvoiceresponseuk) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create purchase invoice

##### Description

API to create purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestUk](#purchaseinvoicerequestuk) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseUk](#purchaseinvoiceresponseuk) |
| 201 | Purchase invoice has been created successfully. | [PurchaseInvoiceResponseUk](#purchaseinvoiceresponseuk) |
| 400 | Purchase invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update purchase invoice attributes by code.

##### Description

API to update attributes of existing purchase invoice by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |
| request | body | request | Yes | [PurchaseInvoiceUpdateRequest](#purchaseinvoiceupdaterequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Purchase invoice attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice with given code not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoices by ids in bulk.

##### Description

API to delete purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkResponse](#bulkresponse) |
| 204 | No Content |  |
| 207 | Request processed successfully. | [BulkResponse](#bulkresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoices not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /uk/bulk

#### POST
##### Summary

Create multiple sales invoice

##### Description

API to create sales invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseInvoiceRequests | body | purchaseInvoiceRequests | Yes | [ [PurchaseInvoiceRequestUk](#purchaseinvoicerequestuk) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceResponseUk](#purchaseinvoiceresponseuk) |
| 201 | Sales invoice has been created successfully. | [PurchaseInvoiceResponseUk](#purchaseinvoiceresponseuk) |
| 400 | Sales invoice could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /uk/code/{code}/details

#### GET
##### Summary

Purchase invoice details by codes

##### Description

Purchase invoice details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseInvoiceInformation](#purchaseinvoiceinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /uk/due-amount

#### PUT
##### Summary

Update due amount for purchase invoices in bulk.

##### Description

API to update due amount for purchase invoices in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| invoiceUpdateAmountDueDtoList | body | invoiceUpdateAmountDueDtoList | Yes | [ [InvoiceUpdateAmountDueDto](#invoiceupdateamountduedto) ] |
| revert | query | revert | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /uk/es/{contactCode}

#### GET
##### Summary

Get Invoice for contact.

##### Description

Get Invoice with contact code from ES.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | path | contactCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get Invoice successfully. | [PurchaseInvoiceResponseUk](#purchaseinvoiceresponseuk) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Invoice with given contact code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /uk/linked-order/{code}

#### GET
##### Summary

Get purchase invoices linked to an order by code.

##### Description

API to fetch purchase invoices linked to an order by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoices has been fetched successfully. | [PurchaseInvoiceResponseUk](#purchaseinvoiceresponseuk) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /uk/report/count

#### POST
##### Summary

Get purchase invoice count for contacts

##### Description

API to fetch purchase invoice count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact purchase invoice count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /uk/report/overview

#### GET
##### Summary

Purchase invoice overview report data.

##### Description

API to fetch purchase invoice overview report data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice overview report has been prepared. | [InvoiceOverviewReport](#invoiceoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /uk/report/unpaid

#### GET
##### Summary

Unpaid purchase invoices report.

##### Description

API to fetch unpaid purchase invoices

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unpaid purchase invoices report has been prepared. | [DashboardReportData](#dashboardreportdata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /uk/{code}

#### GET
##### Summary

Get purchase invoice by code.

##### Description

API to fetch purchase invoice details by it's code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase invoice information has been fetched successfully. | [PurchaseInvoiceResponseUk](#purchaseinvoiceresponseuk) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase invoice not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill /uk/{id}

#### PUT
##### Summary

Update purchase invoice.

##### Description

API to update existing purchase invoice.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceRequest | body | purchaseInvoiceRequest | Yes | [PurchaseInvoiceRequestUk](#purchaseinvoicerequestuk) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Invoice has been updated successfully. | [PurchaseInvoiceResponseUk](#purchaseinvoiceresponseuk) |
| 201 | Created |  |
| 400 | Purchase invoice draft status cannot be changed after saving |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase invoice by id.

##### Description

API to delete purchase invoice details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Purchase invoice has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Purchase invoice not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update purchase invoice memo or attachment

##### Description

API to update purchase invoice memo or attachment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| purchaseInvoiceFields | body | purchaseInvoiceFields | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Memo/attachment for purchase invoice updated successfully. | [PurchaseInvoiceResponseUk](#purchaseinvoiceresponseuk) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Purchase Invoice with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## data-correction-controller
Purchase Invoice APIs

### Bill correction/update

#### POST
##### Summary

updateTaxAmount

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | string |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bill correction/updateinvoicestatus

#### POST
##### Summary

updateInvoicePaymentStatusToReceived

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

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

### Bill correction/updatemissingjepurchase

#### POST
##### Summary

updateMissingJEPurchase

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

### Bill correction/updatemissingjesales

#### POST
##### Summary

updateMissingJESales

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

---
## Models
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

### AggregationBucket

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| invoiceCount | long |  | No |
| invoiceDate | long |  | No |
| totalAmount | number |  | No |

### AmortizationDocumentItemDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| deferralAccountCode | string |  | No |
| endDate | dateTime |  | No |
| startDate | dateTime |  | No |
| templateCode | string |  | No |

### AnalyzeDocumentResult

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| analyzeDocumentModelVersion | string |  | No |
| blocks | [ [Block](#block) ] |  | No |
| documentMetadata | [DocumentMetadata](#documentmetadata) |  | No |
| humanLoopActivationOutput | [HumanLoopActivationOutput](#humanloopactivationoutput) |  | No |
| sdkHttpMetadata | [SdkHttpMetadata](#sdkhttpmetadata) |  | No |
| sdkResponseMetadata | [ResponseMetadata](#responsemetadata) |  | No |

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

### AssetResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| assetGroup | [AssetGroupResponse](#assetgroupresponse) | Asset Group | No |
| assetGroupId | long | Asset Group Id<br/>*Example:* `1` | No |
| bookValue | number | Book Value<br/>*Example:* `9999.99` | No |
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
| netBookValue | number | Net Book Value<br/>*Example:* `9876.54` | No |
| openingAccumulatedDepreciation | number | Opening Accumulated Depreciation<br/>*Example:* `1234.56` | No |
| openingAsset | boolean | Is this an Opening Asset<br/>*Example:* `false` | No |
| profitLossAccountCode | string | Profit/Loss Account Code<br/>*Example:* `"AC-0000001"` | No |
| purchaseDate | dateTime | Purchase Date<br/>*Example:* `"20-06-2019"` | No |
| purchaseInvoiceId | long |  | No |
| purchaseInvoiceRequest | [PurchaseInvoiceRequest](#purchaseinvoicerequest) |  | No |
| purchasePrice | number | Purchase Price<br/>*Example:* `9999.99` | No |
| remainingLife | string | Remaining Life<br/>*Example:* `"1.25 years"` | No |
| residualValue | number | Residual Value<br/>*Example:* `1234.56` | No |
| salesIncomeAccountCode | string | Sales/Income Account Code<br/>*Example:* `"AC-0000001"` | No |
| sequenceFormat | string | Document Sequence Format<br/>*Example:* `"FA-0000000"` | No |
| serialNumber | string | Serial Number<br/>*Example:* `"ABCD123456"` | No |
| taxAmount | number |  | No |
| taxCode | string |  | No |
| totalAmount | number |  | No |
| viewOnly | boolean | Is Asset view-only?<br/>*Example:* `true` | No |
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

### BackOrderUpdateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentInfo | [DocumentInfo](#documentinfo) |  | No |
| salesDocumentCode | string |  | No |
| salesDocumentType | string | *Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"` | No |

### BarcodeDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| barcodeField | string |  | No |
| hideBarcodeLabel | boolean |  | No |

### Block

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| blockType | string |  | No |
| columnIndex | integer |  | No |
| columnSpan | integer |  | No |
| confidence | float |  | No |
| entityTypes | [ string ] |  | No |
| geometry | [Geometry](#geometry) |  | No |
| id | string |  | No |
| page | integer |  | No |
| relationships | [ [Relationship](#relationship) ] |  | No |
| rowIndex | integer |  | No |
| rowSpan | integer |  | No |
| selectionStatus | string |  | No |
| text | string |  | No |
| textType | string |  | No |

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

### BoundingBox

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| height | float |  | No |
| left | float |  | No |
| top | float |  | No |
| width | float |  | No |

### BulkApiResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ object ] |  | No |
| statusCode | integer |  | No |
| success | [ object ] |  | No |

### BulkApiResponse«AssetResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [AssetResponse](#assetresponse) ] |  | No |
| statusCode | integer |  | No |
| success | [ [AssetResponse](#assetresponse) ] |  | No |

### BulkApiResponse«SalesInvoiceResponseAustralia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [SalesInvoiceResponseAustralia](#salesinvoiceresponseaustralia) ] |  | No |
| statusCode | integer |  | No |
| success | [ [SalesInvoiceResponseAustralia](#salesinvoiceresponseaustralia) ] |  | No |

### BulkApiResponse«SalesInvoiceResponseCanada»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [SalesInvoiceResponseCanada](#salesinvoiceresponsecanada) ] |  | No |
| statusCode | integer |  | No |
| success | [ [SalesInvoiceResponseCanada](#salesinvoiceresponsecanada) ] |  | No |

### BulkApiResponse«SalesInvoiceResponseGermany»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [SalesInvoiceResponseGermany](#salesinvoiceresponsegermany) ] |  | No |
| statusCode | integer |  | No |
| success | [ [SalesInvoiceResponseGermany](#salesinvoiceresponsegermany) ] |  | No |

### BulkApiResponse«SalesInvoiceResponseIndia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [SalesInvoiceResponseIndia](#salesinvoiceresponseindia) ] |  | No |
| statusCode | integer |  | No |
| success | [ [SalesInvoiceResponseIndia](#salesinvoiceresponseindia) ] |  | No |

### BulkApiResponse«SalesInvoiceResponseIndonesia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [SalesInvoiceResponseIndonesia](#salesinvoiceresponseindonesia) ] |  | No |
| statusCode | integer |  | No |
| success | [ [SalesInvoiceResponseIndonesia](#salesinvoiceresponseindonesia) ] |  | No |

### BulkApiResponse«SalesInvoiceResponseIsrael»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [SalesInvoiceResponseIsrael](#salesinvoiceresponseisrael) ] |  | No |
| statusCode | integer |  | No |
| success | [ [SalesInvoiceResponseIsrael](#salesinvoiceresponseisrael) ] |  | No |

### BulkApiResponse«SalesInvoiceResponseMalaysia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [SalesInvoiceResponseMalaysia](#salesinvoiceresponsemalaysia) ] |  | No |
| statusCode | integer |  | No |
| success | [ [SalesInvoiceResponseMalaysia](#salesinvoiceresponsemalaysia) ] |  | No |

### BulkApiResponse«SalesInvoiceResponsePhilippines»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [SalesInvoiceResponsePhilippines](#salesinvoiceresponsephilippines) ] |  | No |
| statusCode | integer |  | No |
| success | [ [SalesInvoiceResponsePhilippines](#salesinvoiceresponsephilippines) ] |  | No |

### BulkApiResponse«SalesInvoiceResponseSA»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [SalesInvoiceResponseSA](#salesinvoiceresponsesa) ] |  | No |
| statusCode | integer |  | No |
| success | [ [SalesInvoiceResponseSA](#salesinvoiceresponsesa) ] |  | No |

### BulkApiResponse«SalesInvoiceResponseUae»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [SalesInvoiceResponseUae](#salesinvoiceresponseuae) ] |  | No |
| statusCode | integer |  | No |
| success | [ [SalesInvoiceResponseUae](#salesinvoiceresponseuae) ] |  | No |

### BulkApiResponse«SalesInvoiceResponseUk»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [SalesInvoiceResponseUk](#salesinvoiceresponseuk) ] |  | No |
| statusCode | integer |  | No |
| success | [ [SalesInvoiceResponseUk](#salesinvoiceresponseuk) ] |  | No |

### BulkApiResponse«SalesInvoiceResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [SalesInvoiceResponse](#salesinvoiceresponse) ] |  | No |
| statusCode | integer |  | No |
| success | [ [SalesInvoiceResponse](#salesinvoiceresponse) ] |  | No |

### BulkApiResponse«SalesOrderResponseIndia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [SalesOrderResponseIndia](#salesorderresponseindia) ] |  | No |
| statusCode | integer |  | No |
| success | [ [SalesOrderResponseIndia](#salesorderresponseindia) ] |  | No |

### BulkApiResponse«SalesOrderResponseMalaysia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [SalesOrderResponseMalaysia](#salesorderresponsemalaysia) ] |  | No |
| statusCode | integer |  | No |
| success | [ [SalesOrderResponseMalaysia](#salesorderresponsemalaysia) ] |  | No |

### BulkApiResponse«SalesOrderResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [SalesOrderResponse](#salesorderresponse) ] |  | No |
| statusCode | integer |  | No |
| success | [ [SalesOrderResponse](#salesorderresponse) ] |  | No |

### BulkDeletePurchaseInvoiceResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentSequenceCode | string | ID<br/>*Example:* `2` | No |
| httpStatus | string | HTTP Status<br/>*Enum:* `"100 CONTINUE"`, `"101 SWITCHING_PROTOCOLS"`, `"102 PROCESSING"`, `"103 CHECKPOINT"`, `"200 OK"`, `"201 CREATED"`, `"202 ACCEPTED"`, `"203 NON_AUTHORITATIVE_INFORMATION"`, `"204 NO_CONTENT"`, `"205 RESET_CONTENT"`, `"206 PARTIAL_CONTENT"`, `"207 MULTI_STATUS"`, `"208 ALREADY_REPORTED"`, `"226 IM_USED"`, `"300 MULTIPLE_CHOICES"`, `"301 MOVED_PERMANENTLY"`, `"302 FOUND"`, `"302 MOVED_TEMPORARILY"`, `"303 SEE_OTHER"`, `"304 NOT_MODIFIED"`, `"305 USE_PROXY"`, `"307 TEMPORARY_REDIRECT"`, `"308 PERMANENT_REDIRECT"`, `"400 BAD_REQUEST"`, `"401 UNAUTHORIZED"`, `"402 PAYMENT_REQUIRED"`, `"403 FORBIDDEN"`, `"404 NOT_FOUND"`, `"405 METHOD_NOT_ALLOWED"`, `"406 NOT_ACCEPTABLE"`, `"407 PROXY_AUTHENTICATION_REQUIRED"`, `"408 REQUEST_TIMEOUT"`, `"409 CONFLICT"`, `"410 GONE"`, `"411 LENGTH_REQUIRED"`, `"412 PRECONDITION_FAILED"`, `"413 PAYLOAD_TOO_LARGE"`, `"413 REQUEST_ENTITY_TOO_LARGE"`, `"414 URI_TOO_LONG"`, `"414 REQUEST_URI_TOO_LONG"`, `"415 UNSUPPORTED_MEDIA_TYPE"`, `"416 REQUESTED_RANGE_NOT_SATISFIABLE"`, `"417 EXPECTATION_FAILED"`, `"418 I_AM_A_TEAPOT"`, `"419 INSUFFICIENT_SPACE_ON_RESOURCE"`, `"420 METHOD_FAILURE"`, `"421 DESTINATION_LOCKED"`, `"422 UNPROCESSABLE_ENTITY"`, `"423 LOCKED"`, `"424 FAILED_DEPENDENCY"`, `"426 UPGRADE_REQUIRED"`, `"428 PRECONDITION_REQUIRED"`, `"429 TOO_MANY_REQUESTS"`, `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"`, `"451 UNAVAILABLE_FOR_LEGAL_REASONS"`, `"500 INTERNAL_SERVER_ERROR"`, `"501 NOT_IMPLEMENTED"`, `"502 BAD_GATEWAY"`, `"503 SERVICE_UNAVAILABLE"`, `"504 GATEWAY_TIMEOUT"`, `"505 HTTP_VERSION_NOT_SUPPORTED"`, `"506 VARIANT_ALSO_NEGOTIATES"`, `"507 INSUFFICIENT_STORAGE"`, `"508 LOOP_DETECTED"`, `"509 BANDWIDTH_LIMIT_EXCEEDED"`, `"510 NOT_EXTENDED"`, `"511 NETWORK_AUTHENTICATION_REQUIRED"`<br/>*Example:* `"404 NOT_FOUND"` | No |
| reason | string | *Example:* `"NOT FOUND"` | No |

### BulkEwbRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appKey | string |  | No |
| asp_secret_key | string |  | No |
| authtoken | string |  | No |
| ewbDetailsDtoList | [ [EwbDetailsDto](#ewbdetailsdto) ] |  | No |
| gstin | string |  | No |
| sek | string |  | No |
| session_id | string |  | No |
| status | string |  | No |
| tokenExp | string |  | No |
| userName | string |  | No |

### BulkPaymentItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| documentCode | string |  | No |

### BulkPurchaseInvoiceUpdateResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| httpStatus | string | HTTP Status<br/>*Enum:* `"100 CONTINUE"`, `"101 SWITCHING_PROTOCOLS"`, `"102 PROCESSING"`, `"103 CHECKPOINT"`, `"200 OK"`, `"201 CREATED"`, `"202 ACCEPTED"`, `"203 NON_AUTHORITATIVE_INFORMATION"`, `"204 NO_CONTENT"`, `"205 RESET_CONTENT"`, `"206 PARTIAL_CONTENT"`, `"207 MULTI_STATUS"`, `"208 ALREADY_REPORTED"`, `"226 IM_USED"`, `"300 MULTIPLE_CHOICES"`, `"301 MOVED_PERMANENTLY"`, `"302 FOUND"`, `"302 MOVED_TEMPORARILY"`, `"303 SEE_OTHER"`, `"304 NOT_MODIFIED"`, `"305 USE_PROXY"`, `"307 TEMPORARY_REDIRECT"`, `"308 PERMANENT_REDIRECT"`, `"400 BAD_REQUEST"`, `"401 UNAUTHORIZED"`, `"402 PAYMENT_REQUIRED"`, `"403 FORBIDDEN"`, `"404 NOT_FOUND"`, `"405 METHOD_NOT_ALLOWED"`, `"406 NOT_ACCEPTABLE"`, `"407 PROXY_AUTHENTICATION_REQUIRED"`, `"408 REQUEST_TIMEOUT"`, `"409 CONFLICT"`, `"410 GONE"`, `"411 LENGTH_REQUIRED"`, `"412 PRECONDITION_FAILED"`, `"413 PAYLOAD_TOO_LARGE"`, `"413 REQUEST_ENTITY_TOO_LARGE"`, `"414 URI_TOO_LONG"`, `"414 REQUEST_URI_TOO_LONG"`, `"415 UNSUPPORTED_MEDIA_TYPE"`, `"416 REQUESTED_RANGE_NOT_SATISFIABLE"`, `"417 EXPECTATION_FAILED"`, `"418 I_AM_A_TEAPOT"`, `"419 INSUFFICIENT_SPACE_ON_RESOURCE"`, `"420 METHOD_FAILURE"`, `"421 DESTINATION_LOCKED"`, `"422 UNPROCESSABLE_ENTITY"`, `"423 LOCKED"`, `"424 FAILED_DEPENDENCY"`, `"426 UPGRADE_REQUIRED"`, `"428 PRECONDITION_REQUIRED"`, `"429 TOO_MANY_REQUESTS"`, `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"`, `"451 UNAVAILABLE_FOR_LEGAL_REASONS"`, `"500 INTERNAL_SERVER_ERROR"`, `"501 NOT_IMPLEMENTED"`, `"502 BAD_GATEWAY"`, `"503 SERVICE_UNAVAILABLE"`, `"504 GATEWAY_TIMEOUT"`, `"505 HTTP_VERSION_NOT_SUPPORTED"`, `"506 VARIANT_ALSO_NEGOTIATES"`, `"507 INSUFFICIENT_STORAGE"`, `"508 LOOP_DETECTED"`, `"509 BANDWIDTH_LIMIT_EXCEEDED"`, `"510 NOT_EXTENDED"`, `"511 NETWORK_AUTHENTICATION_REQUIRED"`<br/>*Example:* `"404 NOT_FOUND"` | No |
| id | long | ID<br/>*Example:* `2` | No |
| reason | string | *Example:* `"NOT FOUND"` | No |

### BulkResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| httpStatus | string | HTTP Status<br/>*Enum:* `"100 CONTINUE"`, `"101 SWITCHING_PROTOCOLS"`, `"102 PROCESSING"`, `"103 CHECKPOINT"`, `"200 OK"`, `"201 CREATED"`, `"202 ACCEPTED"`, `"203 NON_AUTHORITATIVE_INFORMATION"`, `"204 NO_CONTENT"`, `"205 RESET_CONTENT"`, `"206 PARTIAL_CONTENT"`, `"207 MULTI_STATUS"`, `"208 ALREADY_REPORTED"`, `"226 IM_USED"`, `"300 MULTIPLE_CHOICES"`, `"301 MOVED_PERMANENTLY"`, `"302 FOUND"`, `"302 MOVED_TEMPORARILY"`, `"303 SEE_OTHER"`, `"304 NOT_MODIFIED"`, `"305 USE_PROXY"`, `"307 TEMPORARY_REDIRECT"`, `"308 PERMANENT_REDIRECT"`, `"400 BAD_REQUEST"`, `"401 UNAUTHORIZED"`, `"402 PAYMENT_REQUIRED"`, `"403 FORBIDDEN"`, `"404 NOT_FOUND"`, `"405 METHOD_NOT_ALLOWED"`, `"406 NOT_ACCEPTABLE"`, `"407 PROXY_AUTHENTICATION_REQUIRED"`, `"408 REQUEST_TIMEOUT"`, `"409 CONFLICT"`, `"410 GONE"`, `"411 LENGTH_REQUIRED"`, `"412 PRECONDITION_FAILED"`, `"413 PAYLOAD_TOO_LARGE"`, `"413 REQUEST_ENTITY_TOO_LARGE"`, `"414 URI_TOO_LONG"`, `"414 REQUEST_URI_TOO_LONG"`, `"415 UNSUPPORTED_MEDIA_TYPE"`, `"416 REQUESTED_RANGE_NOT_SATISFIABLE"`, `"417 EXPECTATION_FAILED"`, `"418 I_AM_A_TEAPOT"`, `"419 INSUFFICIENT_SPACE_ON_RESOURCE"`, `"420 METHOD_FAILURE"`, `"421 DESTINATION_LOCKED"`, `"422 UNPROCESSABLE_ENTITY"`, `"423 LOCKED"`, `"424 FAILED_DEPENDENCY"`, `"426 UPGRADE_REQUIRED"`, `"428 PRECONDITION_REQUIRED"`, `"429 TOO_MANY_REQUESTS"`, `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"`, `"451 UNAVAILABLE_FOR_LEGAL_REASONS"`, `"500 INTERNAL_SERVER_ERROR"`, `"501 NOT_IMPLEMENTED"`, `"502 BAD_GATEWAY"`, `"503 SERVICE_UNAVAILABLE"`, `"504 GATEWAY_TIMEOUT"`, `"505 HTTP_VERSION_NOT_SUPPORTED"`, `"506 VARIANT_ALSO_NEGOTIATES"`, `"507 INSUFFICIENT_STORAGE"`, `"508 LOOP_DETECTED"`, `"509 BANDWIDTH_LIMIT_EXCEEDED"`, `"510 NOT_EXTENDED"`, `"511 NETWORK_AUTHENTICATION_REQUIRED"`<br/>*Example:* `"404 NOT_FOUND"` | No |
| id | long | ID<br/>*Example:* `2` | No |

### CancelDetail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cnlRem | string |  | No |
| cnlRsn | string |  | No |
| id | long |  | No |
| irn | string |  | No |

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
| taxExempted | boolean | Denotes if customer is tax exempted<br/>*Ex