---
id: makepaymentapi
title: Make Payment APIs
sidebar_label: Make Payment
---
You will be able to make payment for the goods purchased in buy module under bill. There will be 2 payment type - Cash or Bank transfer.

`PaymentDto` helps you to make new payment, retrieve a particular payment, update payment, or retrieve a list of payments.

More about [Make Payment API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bb6cc20c-8a66-4f41-8153-8140e23628b7?ctx=documentation)

## API
---
### Search Payment
Get make payments by filter criteria. [More about search payment](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bb6cc20c-8a66-4f41-8153-8140e23628b7?ctx=documentation)

##### Description:

- Allows you to retrieve a list of all make payments.
- Allows you to retrieve a list of make payments based on it's filter criteria.

#### GET
#### /v1/payments/make
[More about search payment](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bb6cc20c-8a66-4f41-8153-8140e23628b7?ctx=documentation)

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

Make a new payment. [More about make payment](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bb6cc20c-8a66-4f41-8153-8140e23628b7?ctx=documentation)

##### Description:

- Allows you to make a new payment.


#### POST
#### /v1/payments/make
[More about make payment](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bb6cc20c-8a66-4f41-8153-8140e23628b7?ctx=documentation)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDto](#makepaymentdto) |


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

Update payment information. [More about update payment](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bb6cc20c-8a66-4f41-8153-8140e23628b7?ctx=documentation)

##### Description:

- Allows you to update payment information.

#### PUT
#### /v1/payments/make/{id}
[More about update payment](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bb6cc20c-8a66-4f41-8153-8140e23628b7?ctx=documentation)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDto](#makepaymentdto) |


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

### Get Make Payment Expenses

#### GET
#### /v1/payments/make/expenses
##### Summary

Fetch Expenses

##### Description

API to fetch existing expenses.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactName | query | contactName | No | string |
| customfield | query | customfield | No | string |
| docType | query | docType | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| paymentDate | query | paymentDate | No | dateTime |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Expenses have been fetched successfully. | [MakePaymentDto](#makepaymentdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
### /v1/payments/make

#### DELETE
##### Summary

Delete payment.

##### Description

API to delete payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Payment has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/bulk

#### POST
##### Summary

Make payment.

##### Description

API to make a new payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| makePaymentDto | body | makePaymentDto | Yes | [ [MakePaymentDto](#makepaymentdto) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Payment has been done successfully. |
| 400 | Payment failed because of insufficient data. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/bulk-pay

#### POST
##### Summary

Make bulk payment.

##### Description

API to make a new bulk payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| makeBulkPaymentDto | body | makeBulkPaymentDto | Yes | [MakeBulkPaymentDto«MakePaymentResponseDto,MakePaymentItemResponseDto»](#makebulkpaymentdto«makepaymentresponsedto,makepaymentitemresponsedto») |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [MakeBulkPaymentDto](#makebulkpaymentdto) |
| 201 | Payment has been done successfully. | [MakeBulkPaymentDto](#makebulkpaymentdto) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/bulk-pay/{code}

#### DELETE
##### Summary

Delete bulk payment.

##### Description

API to delete bulk payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Bulk payment has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/expense

#### POST
##### Summary

Make expense entry

##### Description

API to make expense entry.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDto](#makepaymentdto) |

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
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/expense/code/{code}/details

#### GET
##### Summary

Get Expense details by code.

##### Description

API to get Expense details by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Expense details fetched successfully. | [ExpenseInformation](#expenseinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Expense not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/expense/import

#### POST
##### Summary

Create multiple expenses via import

##### Description

API to create expenses via import.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| makePaymentDtos | body | makePaymentDtos | Yes | [ [MakePaymentDto](#makepaymentdto) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Payment has been done successfully. |
| 400 | Payment failed because of insufficient data. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |


### /v1/payments/make/expensetaxgroup

#### POST
##### Summary

Make tax group expense entry

##### Description

API to make tax group expense entry.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDto](#makepaymentdto) |

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
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/generate-cheque-no

#### POST
##### Summary

generateChequeNumber

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| chequeNoGenerateDto | body | chequeNoGenerateDto | Yes | [ChequeNoGenerateDto](#chequenogeneratedto) |

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

### /v1/payments/make/import-pre-opening

#### POST
##### Summary

Create multiple opening pre payment via import

##### Description

API to create opening pre payment via import.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| openingPrepaymentRequests | body | openingPrepaymentRequests | Yes | [ [MakePaymentDto](#makepaymentdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkApiResponse](#bulkapiresponse) |
| 201 | Opening pre payment imported successfully. | [BulkApiResponse](#bulkapiresponse) |
| 400 | Failed to import opening pre payment. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/knock-off

#### PUT
##### Summary

Expense-Prepayment knock-off and update its due amount

##### Description

API to update due amount for Expense-Prepayment while knocking off with other documents

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| knockOffRequests | body | knockOffRequests | Yes | [ [KnockOffRequest](#knockoffrequest) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Expense-Prepayment entry not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/reconcile

#### POST
##### Summary

Reconcile transactions

##### Description

API to reconcile transactions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| paymentCodes | body | paymentCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Transactions reconciled successfully. | [ResponseEntity](#responseentity) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/tax/count

#### POST
##### Summary

Get Make Payment count for tax

##### Description

API to fetch Make Payment count for tax

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| taxCodes | body | taxCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax Make Payment count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/taxmapping

#### POST
##### Summary

API to map taxlist to item entity for old transactions

##### Description

API to map taxlist to item entity for old transactions

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Tax mapping for existing records done successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/unreconcile

#### POST
##### Summary

Unreconcile transactions

##### Description

API to unreconcile transactions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| paymentCodes | body | paymentCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Transactions unreconciled successfully. | [ResponseEntity](#responseentity) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/unreconciled

#### GET
##### Summary

Get unreconciled payments

##### Description

API to get unreconciled payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | query | accountCode | Yes | string |
| amount | query | amount | No | number |
| documentDate | query | documentDate | No | dateTime |
| statementDate | query | statementDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unreconciled payments fetched successfully. | [ReconcileTransactionResponse](#reconciletransactionresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/update-cheque-status

#### POST
##### Summary

updateChequePrintStatus

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| chequeStatusDtoList | body | chequeStatusDtoList | Yes | [ [ChequeStatusDto](#chequestatusdto) ] |

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

### /v1/payments/make/update-knock-off

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

### /v1/payments/make/{code}

#### DELETE
##### Summary

Delete payment.

##### Description

API to delete payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Payment has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/{id}

#### PUT
##### Summary

Update payment.

##### Description

API to update existing payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDto](#makepaymentdto) |

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
| --------------- | ------ |
| Authorization | global |

---
## make-payment-controller-indonesia
Make Payment Indonesia APIs.

### /v1/payments/make/id

#### GET
##### Summary

Fetch Make Payments

##### Description

API to fetch existing receive payments.

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
| 200 | Make Payment's have been fetched successfully. | [MakePaymentDtoIndonesia](#makepaymentdtoindonesia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Make payment.

##### Description

API to make a new payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDtoIndonesia](#makepaymentdtoindonesia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [MakePaymentDtoIndonesia](#makepaymentdtoindonesia) |
| 201 | Payment has been done successfully. | [MakePaymentDtoIndonesia](#makepaymentdtoindonesia) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete payment.

##### Description

API to delete payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Payment has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/id/bulk

#### POST
##### Summary

Make payment.

##### Description

API to make a new payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| makePaymentDto | body | makePaymentDto | Yes | [ [MakePaymentDtoIndonesia](#makepaymentdtoindonesia) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Payment has been done successfully. |
| 400 | Payment failed because of insufficient data. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/id/bulk-pay

#### POST
##### Summary

Make bulk payment.

##### Description

API to make a new bulk payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| makeBulkPaymentDto | body | makeBulkPaymentDto | Yes | [MakeBulkPaymentDto«MakePaymentResponseDtoIndonesia,MakePaymentItemResponseDtoIndonesia»](#makebulkpaymentdto«makepaymentresponsedtoindonesia,makepaymentitemresponsedtoindonesia») |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [MakeBulkPaymentDto](#makebulkpaymentdto) |
| 201 | Payment has been done successfully. | [MakeBulkPaymentDto](#makebulkpaymentdto) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/id/expense

#### POST
##### Summary

Make expense entry

##### Description

API to make expense entry.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDtoIndonesia](#makepaymentdtoindonesia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [MakePaymentDtoIndonesia](#makepaymentdtoindonesia) |
| 201 | Payment has been done successfully. | [MakePaymentDtoIndonesia](#makepaymentdtoindonesia) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/id/expenses

#### GET
##### Summary

Fetch Expenses

##### Description

API to fetch existing expenses.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactName | query | contactName | No | string |
| customfield | query | customfield | No | string |
| docType | query | docType | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| paymentDate | query | paymentDate | No | dateTime |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Expenses have been fetched successfully. | [MakePaymentDtoIndonesia](#makepaymentdtoindonesia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/id/knock-off

#### PUT
##### Summary

Expense-Prepayment knock-off and update its due amount

##### Description

API to update due amount for Expense-Prepayment while knocking off with other documents

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| knockOffRequests | body | knockOffRequests | Yes | [ [KnockOffRequest](#knockoffrequest) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Expense-Prepayment entry not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/id/reconcile

#### POST
##### Summary

Reconcile transactions

##### Description

API to reconcile transactions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| paymentCodes | body | paymentCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Transactions reconciled successfully. | [ResponseEntity](#responseentity) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/id/unreconciled

#### GET
##### Summary

Get unreconciled payments

##### Description

API to get unreconciled payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | query | accountCode | Yes | string |
| amount | query | amount | No | number |
| documentDate | query | documentDate | No | dateTime |
| statementDate | query | statementDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unreconciled payments fetched successfully. | [ReconcileTransactionResponse](#reconciletransactionresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/id/{code}

#### DELETE
##### Summary

Delete payment.

##### Description

API to delete payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Payment has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/id/{id}

#### PUT
##### Summary

Update payment.

##### Description

API to update existing payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDtoIndonesia](#makepaymentdtoindonesia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Payment has been updated successfully. | [MakePaymentDtoIndonesia](#makepaymentdtoindonesia) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## make-payment-controller-israel
Make Payment Israel APIs.

### /v1/payments/make/il

#### GET
##### Summary

Fetch Make Payments

##### Description

API to fetch existing receive payments.

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
| 200 | Make Payment's have been fetched successfully. | [MakePaymentDtoIsrael](#makepaymentdtoisrael) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Make payment.

##### Description

API to make a new payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDtoIsrael](#makepaymentdtoisrael) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [MakePaymentDtoIsrael](#makepaymentdtoisrael) |
| 201 | Payment has been done successfully. | [MakePaymentDtoIsrael](#makepaymentdtoisrael) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete payment.

##### Description

API to delete payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Payment has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/il/bulk

#### POST
##### Summary

Make payment.

##### Description

API to make a new payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| makePaymentDto | body | makePaymentDto | Yes | [ [MakePaymentDtoIsrael](#makepaymentdtoisrael) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Payment has been done successfully. |
| 400 | Payment failed because of insufficient data. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/il/bulk-pay

#### POST
##### Summary

Make bulk payment.

##### Description

API to make a new bulk payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| makeBulkPaymentDto | body | makeBulkPaymentDto | Yes | [MakeBulkPaymentDto«MakePaymentResponseDtoIsrael,MakePaymentItemResponseDtoIsrael»](#makebulkpaymentdto«makepaymentresponsedtoisrael,makepaymentitemresponsedtoisrael») |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [MakeBulkPaymentDto](#makebulkpaymentdto) |
| 201 | Payment has been done successfully. | [MakeBulkPaymentDto](#makebulkpaymentdto) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/il/expense

#### POST
##### Summary

Make expense entry

##### Description

API to make expense entry.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDtoIsrael](#makepaymentdtoisrael) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [MakePaymentDtoIsrael](#makepaymentdtoisrael) |
| 201 | Payment has been done successfully. | [MakePaymentDtoIsrael](#makepaymentdtoisrael) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/il/expenses

#### GET
##### Summary

Fetch Expenses

##### Description

API to fetch existing expenses.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactName | query | contactName | No | string |
| customfield | query | customfield | No | string |
| docType | query | docType | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| paymentDate | query | paymentDate | No | dateTime |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Expenses have been fetched successfully. | [MakePaymentDtoIsrael](#makepaymentdtoisrael) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/il/knock-off

#### PUT
##### Summary

Expense-Prepayment knock-off and update its due amount

##### Description

API to update due amount for Expense-Prepayment while knocking off with other documents

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| knockOffRequests | body | knockOffRequests | Yes | [ [KnockOffRequest](#knockoffrequest) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Expense-Prepayment entry not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/il/reconcile

#### POST
##### Summary

Reconcile transactions

##### Description

API to reconcile transactions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| paymentCodes | body | paymentCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Transactions reconciled successfully. | [ResponseEntity](#responseentity) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/il/unreconciled

#### GET
##### Summary

Get unreconciled payments

##### Description

API to get unreconciled payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | query | accountCode | Yes | string |
| amount | query | amount | No | number |
| documentDate | query | documentDate | No | dateTime |
| statementDate | query | statementDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unreconciled payments fetched successfully. | [ReconcileTransactionResponse](#reconciletransactionresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/il/{code}

#### DELETE
##### Summary

Delete payment.

##### Description

API to delete payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Payment has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/il/{id}

#### PUT
##### Summary

Update payment.

##### Description

API to update existing payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDtoIsrael](#makepaymentdtoisrael) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Payment has been updated successfully. | [MakePaymentDtoIsrael](#makepaymentdtoisrael) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## make-payment-controller-india
Make Payment India APIs.

### /v1/payments/make/in

#### GET
##### Summary

Fetch Make Payments

##### Description

API to fetch existing receive payments.

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
| 200 | Make Payment's have been fetched successfully. | [MakePaymentDtoIndia](#makepaymentdtoindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Make payment.

##### Description

API to make a new payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDtoIndia](#makepaymentdtoindia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [MakePaymentDtoIndia](#makepaymentdtoindia) |
| 201 | Payment has been done successfully. | [MakePaymentDtoIndia](#makepaymentdtoindia) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete payment.

##### Description

API to delete payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Payment has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/in/bulk-pay

#### POST
##### Summary

Make bulk payment.

##### Description

API to make a new bulk payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| makeBulkPaymentDto | body | makeBulkPaymentDto | Yes | [MakeBulkPaymentDto«MakePaymentResponseDtoIndia,MakePaymentItemResponseDtoIndia»](#makebulkpaymentdto«makepaymentresponsedtoindia,makepaymentitemresponsedtoindia») |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [MakeBulkPaymentDto](#makebulkpaymentdto) |
| 201 | Payment has been done successfully. | [MakeBulkPaymentDto](#makebulkpaymentdto) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/in/expense

#### POST
##### Summary

Make expense entry

##### Description

API to make expense entry.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| makePaymentDtoIndia | body | makePaymentDtoIndia | Yes | [MakePaymentDtoIndia](#makepaymentdtoindia) |

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
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/in/expenses

#### GET
##### Summary

Fetch Expenses

##### Description

API to fetch existing expenses.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactName | query | contactName | No | string |
| customfield | query | customfield | No | string |
| docType | query | docType | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| paymentDate | query | paymentDate | No | dateTime |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Expenses have been fetched successfully. | [MakePaymentDto](#makepaymentdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/in/reconcile

#### POST
##### Summary

Reconcile transactions

##### Description

API to reconcile transactions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| paymentCodes | body | paymentCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Transactions reconciled successfully. | [ResponseEntity](#responseentity) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/in/unreconciled

#### GET
##### Summary

Get unreconciled payments

##### Description

API to get unreconciled payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | query | accountCode | Yes | string |
| amount | query | amount | No | number |
| documentDate | query | documentDate | No | dateTime |
| statementDate | query | statementDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unreconciled payments fetched successfully. | [ReconcileTransactionResponse](#reconciletransactionresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/in/update-tds-processed-flag/{code}

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

### /v1/payments/make/in/{code}

#### DELETE
##### Summary

Delete payment.

##### Description

API to delete payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Payment has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/in/{id}

#### PUT
##### Summary

Update payment.

##### Description

API to update existing payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDtoIndia](#makepaymentdtoindia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Payment has been updated successfully. | [MakePaymentDtoIndia](#makepaymentdtoindia) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## make-payment-controller-philipines
Make Payment Philippines APIs.

### /v1/payments/make/ph

#### GET
##### Summary

Fetch Make Payments

##### Description

API to fetch existing receive payments.

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
| 200 | Make Payment's have been fetched successfully. | [MakePaymentDtoPhilippines](#makepaymentdtophilippines) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Make payment.

##### Description

API to make a new payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDtoPhilippines](#makepaymentdtophilippines) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [MakePaymentDtoPhilippines](#makepaymentdtophilippines) |
| 201 | Payment has been done successfully. | [MakePaymentDtoPhilippines](#makepaymentdtophilippines) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete payment.

##### Description

API to delete payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Payment has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/ph/bulk

#### POST
##### Summary

Make payment.

##### Description

API to make a new payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| makePaymentDto | body | makePaymentDto | Yes | [ [MakePaymentDtoPhilippines](#makepaymentdtophilippines) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Payment has been done successfully. |
| 400 | Payment failed because of insufficient data. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/ph/bulk-pay

#### POST
##### Summary

Make bulk payment.

##### Description

API to make a new bulk payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| makeBulkPaymentDto | body | makeBulkPaymentDto | Yes | [MakeBulkPaymentDto«MakePaymentResponseDtoPhilippines,MakePaymentItemResponseDtoPhilippines»](#makebulkpaymentdto«makepaymentresponsedtophilippines,makepaymentitemresponsedtophilippines») |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [MakeBulkPaymentDto](#makebulkpaymentdto) |
| 201 | Payment has been done successfully. | [MakeBulkPaymentDto](#makebulkpaymentdto) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/ph/expense

#### POST
##### Summary

Make expense entry

##### Description

API to make expense entry.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDtoPhilippines](#makepaymentdtophilippines) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [MakePaymentDtoPhilippines](#makepaymentdtophilippines) |
| 201 | Payment has been done successfully. | [MakePaymentDtoPhilippines](#makepaymentdtophilippines) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/ph/expenses

#### GET
##### Summary

Fetch Expenses

##### Description

API to fetch existing expenses.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactName | query | contactName | No | string |
| customfield | query | customfield | No | string |
| docType | query | docType | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| paymentDate | query | paymentDate | No | dateTime |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Expenses have been fetched successfully. | [MakePaymentDtoPhilippines](#makepaymentdtophilippines) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/ph/knock-off

#### PUT
##### Summary

Expense-Prepayment knock-off and update its due amount

##### Description

API to update due amount for Expense-Prepayment while knocking off with other documents

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| knockOffRequests | body | knockOffRequests | Yes | [ [KnockOffRequest](#knockoffrequest) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Expense-Prepayment entry not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/ph/reconcile

#### POST
##### Summary

Reconcile transactions

##### Description

API to reconcile transactions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| paymentCodes | body | paymentCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Transactions reconciled successfully. | [ResponseEntity](#responseentity) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/ph/unreconciled

#### GET
##### Summary

Get unreconciled payments

##### Description

API to get unreconciled payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | query | accountCode | Yes | string |
| amount | query | amount | No | number |
| documentDate | query | documentDate | No | dateTime |
| statementDate | query | statementDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unreconciled payments fetched successfully. | [ReconcileTransactionResponse](#reconciletransactionresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/ph/{code}

#### DELETE
##### Summary

Delete payment.

##### Description

API to delete payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Payment has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/make/ph/{id}

#### PUT
##### Summary

Update payment.

##### Description

API to update existing payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDtoPhilippines](#makepaymentdtophilippines) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Payment has been updated successfully. | [MakePaymentDtoPhilippines](#makepaymentdtophilippines) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
## Models

### AbstractMakePaymentItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Description of document.<br/>*Example:* `"General ledger for account."` | No |
| documentCode | string | Document code.<br/>*Example:* `"AC-001"` | No |
| documentSequenceCode | string | Document Sequence code.<br/>*Example:* `"AC-001"` | No |
| documentType | string | Document type.<br/>*Example:* `"General Ledger"` | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| isTdsApplicableAccount | boolean |  | No |
| isTdsApplicableContact | boolean |  | No |
| paymentAmount | number | Payment amount.<br/>*Example:* `10.5` | No |
| taxAmount | number | Tax amount.<br/>*Example:* `0.7` | No |
| taxCode | string | Tax code.<br/>*Example:* `"GST@7"` | No |
| taxList | [ [TaxMappingDto](#taxmappingdto) ] |  | No |
| tdsAccount | string | Tds Account Code<br/>*Example:* `"AC-0000011"` | No |
| tdsAmount | number | TDS Amount<br/>*Example:* `100` | No |
| tdsInfoIndia | [TdsInfoIndia](#tdsinfoindia) | Pre-Payment TDS details | No |
| tdsRate | number | TDS Rate<br/>*Example:* `10.1` | No |

### AbstractMakePaymentResponseDto«AbstractMakePaymentItemDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayFrom | string | Account code.<br/>*Example:* `"AC-001"` | No |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| amount | number | Payment amount.<br/>*Example:* `10` | No |
| amountDue | number | Payment amount Due.<br/>*Example:* `10` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| bankRuleId | long | Rule id if the document has been created by a Bank Rule | No |
| contactCode | string | Contact code.<br/>*Example:* `19425` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency code.<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| documentDate | dateTime | Document date.<br/>*Example:* `"2019-09-27"` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| interCompany | boolean | True if it is between inter companies<br/>*Example:* `true` | No |
| isTdsPaymentIndia | boolean |  | No |
| knockoffInfo | [ [KnockOffInfo](#knockoffinfo) ] |  | No |
| makePaymentFeeDtoList | [ [MakePaymentFeeDto](#makepaymentfeedto) ] | Transaction fee pertaining to the made payment | No |
| makePaymentItemDtoList | [ [AbstractMakePaymentItemDto](#abstractmakepaymentitemdto) ] | Make payment items information. | No |
| makePaymentRecurringDto | [MakePaymentRecurringDto](#makepaymentrecurringdto) | Recurring payment details. | No |
| memo | string | Memo text.<br/>*Example:* `"Sales quotation"` | No |
| nextPaymentDate | dateTime | Next payment date.<br/>*Example:* `"2019-09-27"` | No |
| opening | boolean | Opening Document<br/>*Example:* `false` | No |
| paymentType | string | Type of payment.<br/>*Enum:* `"CHEQUE"`, `"CASH"`, `"BANK_TRANSFER"`, `"CARD"`, `"OTHERS"`<br/>*Example:* `"BANK_TRANSFER"` | No |
| reconciled | boolean | Whether the current payment is reconciled or not. | No |
| recurringActivated | boolean | Recurring payment activated for payment.<br/>*Example:* `false` | No |
| recurringPayment | boolean | Recurring payment enable/disable for payment.<br/>*Example:* `false` | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque.<br/>*Example:* `"2019-09-27"` | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque.<br/>*Example:* `"CH001"` | No |
| status | string | Print Status<br/>*Enum:* `"PRINT_SUCCESS"`, `"PRINT_FAILURE"`, `"NOT_PRINTED"`<br/>*Example:* `"NOT_PRINTED"` | No |
| tdsPaymentInfoIndia | [TDSPaymentInfoIndia](#tdspaymentinfoindia) | TDS Payment details | No |
| tdsProcessedFlag | boolean | TDS Processed Flag<br/>*Example:* `false` | No |
| unitPriceGstInclusive | boolean | Price is GST inclusive<br/>*Example:* `false` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |

### AbstractReceivePaymentItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Description of document.<br/>*Example:* `"General ledger for account."` | No |
| documentCode | string | Document code.<br/>*Example:* `"AC-001"` | No |
| documentSequenceCode | string | Document Sequence code.<br/>*Example:* `"AC-001"` | No |
| documentType | string | Document type.<br/>*Example:* `"General Ledger"` | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| isTdsApplicableAccount | boolean |  | No |
| isTdsApplicableContact | boolean |  | No |
| paymentAmount | number | Payment amount.<br/>*Example:* `10.5` | No |
| taxAmount | number | Tax amount.<br/>*Example:* `0.7` | No |
| taxCode | string | Tax code.<br/>*Example:* `"GST@7"` | No |
| taxList | [ [TaxMappingDto](#taxmappingdto) ] |  | No |
| tdsInfoIndia | [TdsInfoIndia](#tdsinfoindia) | Pre-Payment TDS details | No |

### AbstractReceivePaymentResponseDto«AbstractReceivePaymentItemDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayTo | string | Account code.<br/>*Example:* `"AC-001"` | No |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| amount | number | Payment amount.<br/>*Example:* `10` | No |
| amountDue | number | Payment amount Due.<br/>*Example:* `10` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| bankRuleId | long | Rule id if the document has been created by a Bank Rule | No |
| billTo | [Address](#address) | Bill to address | No |
| contactCode | string | Contact code.<br/>*Example:* `19425` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency code.<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| documentDate | dateTime | Document date.<br/>*Example:* `"2019-09-27"` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| interCompany | boolean | True if it is between inter companies<br/>*Example:* `true` | No |
| isUnDepositedPayment | boolean | Whether the current payment is un-deposited or not. | No |
| journalEntryBankTransferRequestDto | [JournalEntryBankTransferRequestDto](#journalentrybanktransferrequestdto) | Bank Transfer Request DTO for Journal Entry | No |
| knockoffInfo | [ [KnockOffInfo](#knockoffinfo) ] |  | No |
| memo | string | Memo text.<br/>*Example:* `"Sales quotation"` | No |
| opening | boolean | Opening Document<br/>*Example:* `false` | No |
| paymentType | string | Type of payment.<br/>*Enum:* `"CHEQUE"`, `"CASH"`, `"BANK_TRANSFER"`, `"CARD"`, `"OTHERS"`<br/>*Example:* `"BANK_TRANSFER"` | No |
| receivePaymentFeeDtoList | [ [ReceivePaymentFeeDto](#receivepaymentfeedto) ] | Transaction fee pertaining to the received payment | No |
| receivePaymentItemDtoList | [ [AbstractReceivePaymentItemDto](#abstractreceivepaymentitemdto) ] | Receive payment items information. | No |
| reconciled | boolean | Whether the current payment is reconciled or not. | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque.<br/>*Example:* `"2019-09-27"` | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque.<br/>*Example:* `"CH001"` | No |
| sentEmail | boolean | Send Customer Email<br/>*Example:* `false` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| unDepositedEntriesReconciled | [ [UnDepositedEntriesReconciled](#undepositedentriesreconciled) ] | Reconciled un-deposited entries | No |
| unitPriceGstInclusive | boolean | Price is GST inclusive<br/>*Example:* `false` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |

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
| isDefault | boolean | Default Account Status<br/>*Example:* `true` | No |
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
| includeInReport | boolean |  | No |
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

### AdvancePaymentContactResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string |  | No |
| contactName | string |  | No |
| dueAmount | number |  | No |
| totalAmount | number |  | No |
| usedAmount | number |  | No |

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

### BulkApiResponse«MakePaymentResponseDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [MakePaymentResponseDto](#makepaymentresponsedto) ] |  | No |
| statusCode | integer |  | No |
| success | [ [MakePaymentResponseDto](#makepaymentresponsedto) ] |  | No |

### BulkApiResponse«ReceivePaymentResponseDtoIndia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [ReceivePaymentResponseDtoIndia](#receivepaymentresponsedtoindia) ] |  | No |
| statusCode | integer |  | No |
| success | [ [ReceivePaymentResponseDtoIndia](#receivepaymentresponsedtoindia) ] |  | No |

### BulkApiResponse«ReceivePaymentResponseDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [ReceivePaymentResponseDto](#receivepaymentresponsedto) ] |  | No |
| statusCode | integer |  | No |
| success | [ [ReceivePaymentResponseDto](#receivepaymentresponsedto) ] |  | No |

### BulkPaymentItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| documentCode | string |  | No |

### ChequeNoGenerateDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chequeNumberStart | long |  | No |
| documentCodes | string |  | No |

### ChequeStatusDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string |  | No |
| printStatus | string | *Enum:* `"PRINT_SUCCESS"`, `"PRINT_FAILURE"`, `"NOT_PRINTED"` | No |

### ContactDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attentionTo | string | the contact name in  govt agency<br/>*Example:* `"Peter Parker"` | No |
| autoCharge | boolean | Auto payment charge<br/>*Example:* `false` | No |
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

### ContactInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | string | Address<br/>*Example:* `"Raffles Place 1"` | No |
| name | string | Customer name<br/>*Example:* `"ABC Pte Ltd"` | Yes |
| peppolId | string | Peppol ID<br/>*Example:* `"u000:1109:uen"` | No |

### CustomFieldItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | Dimension Id<br/>*Example:* `11567` | No |
| label | string | Custom Field Name<br/>*Example:* `"Label"` | Yes |
| module | string | Supported Modules | No |
| value | object | Dimension Value<br/>*Example:* `"XYZ"` | No |

### DepositDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayTo | string |  | No |
| accountName | string |  | No |
| amount | number |  | No |
| amountDue | number |  | No |
| attachmentIds | [ integer ] |  | No |
| code | string |  | No |
| contactCode | string |  | No |
| contactCustomField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| contactName | string |  | No |
| currency | string | *Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| documentDate | string |  | No |
| exchangeRate | number |  | No |
| gstExchangeRate | number |  | No |
| id | long |  | No |
| interCompany | boolean |  | No |
| isUnDepositedPayment | boolean |  | No |
| jeCode | string |  | No |
| memo | string |  | No |
| opening | boolean |  | No |
| paymentType | string | *Enum:* `"CHEQUE"`, `"CASH"`, `"BANK_TRANSFER"`, `"CARD"`, `"OTHERS"` | No |
| receivePaymentFeeDtoList | [ [ReceivePaymentFeeDto](#receivepaymentfeedto) ] |  | No |
| receivePaymentItemDtoList | [ [ReceivePaymentItemDto](#receivepaymentitemdto) ] |  | No |
| referenceDate | string |  | No |
| referenceNumber | string |  | No |
| subTotal | number |  | No |
| tax | number |  | No |
| tenantId | long |  | No |
| unitPriceGstInclusive | boolean |  | No |
| whtApplicable | boolean |  | No |
| whtInfoIsrael | [WhtInfoIsrael](#whtinfoisrael) |  | No |

### DepositInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayTo | string | Account code.<br/>*Example:* `"AC-001"` | No |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| amount | number | Payment amount.<br/>*Example:* `10` | No |
| amountDue | number | Payment amount Due.<br/>*Example:* `10` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| bankRuleId | long | Rule id if the document has been created by a Bank Rule | No |
| billTo | [Address](#address) | Bill to address | No |
| contactCode | string | Contact code.<br/>*Example:* `19425` | No |
| contactDto | [ContactDto](#contactdto) |  | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency code.<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| documentDate | dateTime | Document date.<br/>*Example:* `"2019-09-27"` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| interCompany | boolean | True if it is between inter companies<br/>*Example:* `true` | No |
| isUnDepositedPayment | boolean | Whether the current payment is un-deposited or not. | No |
| journalEntryBankTransferRequestDto | [JournalEntryBankTransferRequestDto](#journalentrybanktransferrequestdto) | Bank Transfer Request DTO for Journal Entry | No |
| knockoffInfo | [ [KnockOffInfo](#knockoffinfo) ] |  | No |
| memo | string | Memo text.<br/>*Example:* `"Sales quotation"` | No |
| opening | boolean | Opening Document<br/>*Example:* `false` | No |
| paymentType | string | Type of payment.<br/>*Enum:* `"CHEQUE"`, `"CASH"`, `"BANK_TRANSFER"`, `"CARD"`, `"OTHERS"`<br/>*Example:* `"BANK_TRANSFER"` | No |
| receivePaymentFeeDtoList | [ [ReceivePaymentFeeDto](#receivepaymentfeedto) ] | Transaction fee pertaining to the received payment | No |
| receivePaymentItemDtoList | [ [DepositItemInformation](#deposititeminformation) ] | Receive payment items information. | No |
| reconciled | boolean | Whether the current payment is reconciled or not. | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque.<br/>*Example:* `"2019-09-27"` | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque.<br/>*Example:* `"CH001"` | No |
| sentEmail | boolean | Send Customer Email<br/>*Example:* `false` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| tdsAccountCode | string | TDS account code<br/>*Example:* `"AC-007"` | No |
| tdsAmount | number | TDS amount<br/>*Example:* `10` | No |
| unDepositedEntriesReconciled | [ [UnDepositedEntriesReconciled](#undepositedentriesreconciled) ] | Reconciled un-deposited entries | No |
| unitPriceGstInclusive | boolean | Price is GST inclusive<br/>*Example:* `false` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |
| whtApplicable | boolean | WHT Applicable for Receipt<br/>*Example:* `true` | No |

### DepositItemInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Description of document.<br/>*Example:* `"General ledger for account."` | No |
| documentCode | string | Document code.<br/>*Example:* `"AC-001"` | No |
| documentSequenceCode | string | Document Sequence code.<br/>*Example:* `"AC-001"` | No |
| documentType | string | Document type.<br/>*Example:* `"General Ledger"` | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| isTdsApplicableAccount | boolean |  | No |
| isTdsApplicableContact | boolean |  | No |
| paymentAmount | number | Payment amount.<br/>*Example:* `10.5` | No |
| taxAmount | number | Tax amount.<br/>*Example:* `0.7` | No |
| taxCode | string | Tax code.<br/>*Example:* `"GST@7"` | No |
| taxDto | [TaxDto](#taxdto) |  | No |
| taxList | [ [TaxMappingDto](#taxmappingdto) ] |  | No |
| tdsInfoIndia | [TdsInfoIndia](#tdsinfoindia) | Pre-Payment TDS details | No |

### DocumentInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string | Document Code.<br/>*Example:* `"QO-0000001"` | No |
| documentCreatedDate | dateTime | Purchase creation date<br/>*Example:* `"2023-01-01T00:00:00.000+0000"` | No |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| documentType | string | Type of document.<br/>*Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"PURCHASE_REQUEST"`, `"PURCHASE_REQUEST_FOR_QUOTES"`, `"SUPPLIER_QUOTES"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`<br/>*Example:* `"QUOTATION"` | No |

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

### DueAmountResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| name | string |  | No |

### ExpenseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayFrom | string |  | No |
| accountName | string |  | No |
| amount | number |  | No |
| amountDue | number |  | No |
| attachmentIds | [ integer ] |  | No |
| code | string |  | No |
| contactCode | string |  | No |
| contactCustomField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| contactName | string |  | No |
| currency | string | *Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| documentDate | string |  | No |
| exchangeRate | number |  | No |
| gstExchangeRate | number |  | No |
| id | long |  | No |
| interCompany | boolean |  | No |
| isTdsPaymentIndia | boolean |  | No |
| jeCode | string |  | No |
| makePaymentItemDtoList | [ [MakePaymentItemDto](#makepaymentitemdto) ] |  | No |
| memo | string |  | No |
| opening | boolean |  | No |
| paymentType | string | *Enum:* `"CHEQUE"`, `"CASH"`, `"BANK_TRANSFER"`, `"CARD"`, `"OTHERS"` | No |
| printStatus | string | *Enum:* `"PRINT_SUCCESS"`, `"PRINT_FAILURE"`, `"NOT_PRINTED"` | No |
| referenceDate | string |  | No |
| referenceNumber | string |  | No |
| subTotal | number |  | No |
| tax | number |  | No |
| tdsPaymentInfoIndia | [TDSPaymentInfoIndia](#tdspaymentinfoindia) |  | No |
| tdsProcessedFlag | boolean |  | No |
| tenantId | long |  | No |
| unitPriceGstInclusive | boolean |  | No |
| whtInfoIsrael | [WhtInfoIsrael](#whtinfoisrael) |  | No |

### ExpenseInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayFrom | string | Account code.<br/>*Example:* `"AC-001"` | No |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| amount | number | Payment amount.<br/>*Example:* `10` | No |
| amountDue | number | Payment amount Due.<br/>*Example:* `10` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| bankRuleId | long | Rule id if the document has been created by a Bank Rule | No |
| contactCode | string | Contact code.<br/>*Example:* `19425` | No |
| contactDto | [ContactDto](#contactdto) |  | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency code.<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| documentDate | dateTime | Document date.<br/>*Example:* `"2019-09-27"` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| interCompany | boolean | True if it is between inter companies<br/>*Example:* `true` | No |
| isTdsPaymentIndia | boolean |  | No |
| knockoffInfo | [ [KnockOffInfo](#knockoffinfo) ] |  | No |
| makePaymentFeeDtoList | [ [MakePaymentFeeDto](#makepaymentfeedto) ] | Transaction fee pertaining to the made payment | No |
| makePaymentItemDtoList | [ [ExpenseItemInformation](#expenseiteminformation) ] | Make payment items information. | No |
| makePaymentRecurringDto | [MakePaymentRecurringDto](#makepaymentrecurringdto) | Recurring payment details. | No |
| memo | string | Memo text.<br/>*Example:* `"Sales quotation"` | No |
| nextPaymentDate | dateTime | Next payment date.<br/>*Example:* `"2019-09-27"` | No |
| opening | boolean | Opening Document<br/>*Example:* `false` | No |
| paymentType | string | Type of payment.<br/>*Enum:* `"CHEQUE"`, `"CASH"`, `"BANK_TRANSFER"`, `"CARD"`, `"OTHERS"`<br/>*Example:* `"BANK_TRANSFER"` | No |
| reconciled | boolean | Whether the current payment is reconciled or not. | No |
| recurringActivated | boolean | Recurring payment activated for payment.<br/>*Example:* `false` | No |
| recurringPayment | boolean | Recurring payment enable/disable for payment.<br/>*Example:* `false` | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque.<br/>*Example:* `"2019-09-27"` | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque.<br/>*Example:* `"CH001"` | No |
| status | string | Print Status<br/>*Enum:* `"PRINT_SUCCESS"`, `"PRINT_FAILURE"`, `"NOT_PRINTED"`<br/>*Example:* `"NOT_PRINTED"` | No |
| tdsPaymentInfoIndia | [TDSPaymentInfoIndia](#tdspaymentinfoindia) | TDS Payment details | No |
| tdsProcessedFlag | boolean | TDS Processed Flag<br/>*Example:* `false` | No |
| unitPriceGstInclusive | boolean | Price is GST inclusive<br/>*Example:* `false` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |
| whtApplicable | boolean | WHT Applicable for make payment<br/>*Example:* `true` | No |

### ExpenseItemInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Description of document.<br/>*Example:* `"General ledger for account."` | No |
| documentCode | string | Document code.<br/>*Example:* `"AC-001"` | No |
| documentSequenceCode | string | Document Sequence code.<br/>*Example:* `"AC-001"` | No |
| documentType | string | Document type.<br/>*Example:* `"General Ledger"` | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| isTdsApplicableAccount | boolean |  | No |
| isTdsApplicableContact | boolean |  | No |
| paymentAmount | number | Payment amount.<br/>*Example:* `10.5` | No |
| taxAmount | number | Tax amount.<br/>*Example:* `0.7` | No |
| taxCode | string | Tax code.<br/>*Example:* `"GST@7"` | No |
| taxDto | [TaxDto](#taxdto) |  | No |
| taxList | [ [TaxMappingDto](#taxmappingdto) ] |  | No |
| tdsAccount | string | Tds Account Code<br/>*Example:* `"AC-0000011"` | No |
| tdsAmount | number | TDS Amount<br/>*Example:* `100` | No |
| tdsInfoIndia | [TdsInfoIndia](#tdsinfoindia) | Pre-Payment TDS details | No |
| tdsRate | number | TDS Rate<br/>*Example:* `10.1` | No |

### ExportDocumentRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| categoryName | string | QUOTE,INVOICE etc<br/>*Example:* `"QUOTE"` | Yes |
| customTemplate | boolean | Invoice Custom Template flag<br/>*Example:* `false` | No |
| documentCode | string | Document system number , could be invoice number, quotation number etc.<br/>*Example:* `"00001"` | No |
| documentNumber | string | Document number , could be invoice number, quotation number etc.<br/>*Example:* `"00001"` | No |
| documentType | string | *Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"PURCHASE_REQUEST"`, `"PURCHASE_REQUEST_FOR_QUOTES"`, `"SUPPLIER_QUOTES"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"` | No |
| fileName | string | File name of the template<br/>*Example:* `"QUOTE.DOCX"` | No |
| headers | [ [Map«string,object»](#map«string,object») ] |  | No |
| moduleName | string | ERP,CRM,HRMS<br/>*Example:* `"ERP"` | Yes |
| skipDocumentTemplateMapping | boolean | Skip document template mapping<br/>*Example:* `false` | No |
| templateId | long | Template id<br/>*Example:* `12` | No |

### GlobalDiscountDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string |  | No |
| amount | number |  | No |
| isPercent | boolean |  | No |
| isSubTotalOnly | boolean |  | No |
| name | string |  | No |
| percent | number |  | No |

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

### ItemQtyFulfilledByDoc

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fulfillmentId | string |  | No |
| siAmount | number |  | No |

### JELineItemMetaData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| baseAmount | number | Base amount for tax calculation<br/>*Example:* `200` | No |
| contactName | string | Contact Name<br/>*Example:* `"Abacus Limited"` | No |
| taxCode | string | Tax Code<br/>*Example:* `"TX-0000001"` | No |
| taxName | string | Tax Name<br/>*Example:* `"GST(BL)@7.00%"` | No |
| taxPercent | number | Tax Percent<br/>*Example:* `7` | No |
| taxSequence | string | Tax Sequence<br/>*Example:* `"GST(BL)@7.00%"` | No |

### JournalEntryBankTransferRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | amount<br/>*Example:* `1` | No |
| bankToBaseExchangeRate | number | If From bank is in foreign currency and To bank in another or same foreign currency<br/>*Example:* `1` | No |
| chequeDate | dateTime | date pattern dd-MM-yyyy | No |
| chequePrinted | boolean | cheque printed<br/>*Example:* `false` | No |
| contactCode | string | JE Contact Id<br/>*Example:* `1` | No |
| currency | string | currency ID<br/>*Example:* `"SGD"` | Yes |
| currencyExchangeRate | number | JE Currency Exchange Rate<br/>*Example:* `1` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| documentCode | string | JE Document Number<br/>*Example:* `"PI0001"` | No |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| fromAccount | long | from account<br/>*Example:* `1` | No |
| generateCNDN | boolean | Generate CN DN for JE<br/>*Example:* `false` | No |
| id | long | Journal Entry ID<br/>*Example:* `1` | No |
| includeGSTReport | boolean | Include JE in GST Report<br/>*Example:* `true` | No |
| jeCode | string | JE Number<br/>*Example:* `"JE-0000001"` | No |
| jeDate | dateTime | date pattern dd-MM-yyyy<br/>*Example:* `"06-11-2019"` | Yes |
| journalEntryRecurringDto | [JournalEntryRecurringDto](#journalentryrecurringdto) | Journal Entry Recurring Meta Data | No |
| lineItems | [ [JournalEntryLineItemsDto](#journalentrylineitemsdto) ] | Journal Entry Line Items | Yes |
| memo | string | JE Memo<br/>*Example:* `"memo"` | No |
| nextJEDate | dateTime | date pattern dd-MM-yyyy<br/>*Example:* `"16-11-2019"` | Yes |
| opening | boolean | Opening<br/>*Example:* `false` | No |
| parentJeId | long | Parent JE ID | No |
| paymentMethod | string | payment method<br/>*Example:* `1` | No |
| recurringActivated | boolean | Recurring JE Status<br/>*Example:* `false` | No |
| recurringJE | boolean | Recurring JE<br/>*Example:* `false` | No |
| toAccount | long | to account<br/>*Example:* `1` | No |
| transferDate | dateTime | date pattern dd-MM-yyyy | Yes |
| transferNumber | string | transfer number<br/>*Example:* `1` | No |
| transferType | string | BANK_TRANSFER | No |
| type | string | JE Type<br/>*Example:* `"NORMAL_JE"` | No |

### JournalEntryLineItemsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account Id<br/>*Example:* `1` | No |
| accountName | string | Account Name<br/>*Example:* `"Deskera"` | No |
| amount | number | amount<br/>*Example:* `0` | No |
| amountInDocumentCurrency | number | amount in document currency<br/>*Example:* `0` | No |
| cdType | string | Credit Debit Type<br/>*Example:* `"DEBIT"` | No |
| cfield | object |  | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | JE Line Items Description<br/>*Example:* `"credit description"` | No |
| gstTypeIndia | string | GST type<br/>*Enum:* `"CGST"`, `"SGST"`, `"IGST"`, `"CESS"`<br/>*Example:* `"IGST"` | No |
| id | long | Journal Entry Line Items ID<br/>*Example:* `1` | No |
| jeLineItemMetaData | [JELineItemMetaData](#jelineitemmetadata) | JE line items metadata | No |

### JournalEntryRecurringDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| jeRecurringCount | integer | Journal Entry Recurring Count<br/>*Example:* `1` | No |
| journalEntryID | long | Journal Entry Id<br/>*Example:* `1` | No |
| memo | [ [RecurringJournalEntryMemo](#recurringjournalentrymemo) ] | Journal entry memo | No |
| recurrenceEndDate | dateTime |  | Yes |
| recurrenceFrequency | string | Journal Entry Recurrence Frequency<br/>*Example:* `"WEEK"` | No |
| recurrenceType | integer | Journal Entry Recurrence<br/>*Example:* `1` | No |

### KnockOffInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| bulkData | [ [BulkPaymentItem](#bulkpaymentitem) ] |  | No |
| contraDocumentCode | string |  | No |
| currency | string |  | No |
| documentCode | string |  | No |
| documentDate | dateTime |  | No |
| documentOrder | integer |  | No |
| documentType | string | *Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"PURCHASE_REQUEST"`, `"PURCHASE_REQUEST_FOR_QUOTES"`, `"SUPPLIER_QUOTES"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"` | No |
| exchangeRate | number |  | No |
| linkedDocumentSequence | string |  | No |
| linkedWhileCreatingNote | boolean |  | No |
| uid | string (uuid) |  | No |
| whtAmount | number |  | No |

### KnockOffRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Amount<br/>*Example:* `100` | No |
| currency | string | Currency Code<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | Yes |
| documentCode | string | Unique system generated document code<br/>*Example:* `"SI-0000001"` | No |
| documentType | string | Type of document.<br/>*Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"PURCHASE_REQUEST"`, `"PURCHASE_REQUEST_FOR_QUOTES"`, `"SUPPLIER_QUOTES"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`<br/>*Example:* `"SALES_INVOICE"` | No |
| exchangeRate | number | Currency Exchange Rate<br/>*Example:* `1` | No |
| knockOffDate | dateTime | Knock off Date with pattern dd-mm-yyyy<br/>*Example:* `"06-11-2019"` | Yes |
| linkedDocumentSequence | string | Document Sequence Code<br/>*Example:* `"SI-0000001"` | No |
| paymentCode | string | Unique system generated payment/receipt code<br/>*Example:* `"MP-0000001"` | No |
| uid | string (uuid) |  | No |

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

### MakeBulkPaymentDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Payment amount<br/>*Example:* `100` | No |
| amountInBaseCurrency | number | Payment amount in Base Currency<br/>*Example:* `100` | No |
| code | string | Sequence code<br/>*Example:* `"MBP-0000001"` | No |
| contactCode | string | Contact code.<br/>*Example:* `"C-0000001"` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| documentDate | dateTime | Payment Date<br/>*Example:* `"25-10-2019"` | No |
| exchangeRate | number | Exchange Rate<br/>*Example:* `1` | No |
| id | long |  | No |
| makePaymentFeeDtoList | [ [MakePaymentFeeDto](#makepaymentfeedto) ] | Transaction fee pertaining to the made payment | No |
| makePaymentList | [ [AbstractMakePaymentResponseDto«AbstractMakePaymentItemDto»](#abstractmakepaymentresponsedto«abstractmakepaymentitemdto») ] | List of make payments<br/>*Example:* `[]` | No |

### MakeBulkPaymentDto«MakePaymentResponseDto,MakePaymentItemResponseDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Payment amount<br/>*Example:* `100` | No |
| amountInBaseCurrency | number | Payment amount in Base Currency<br/>*Example:* `100` | No |
| code | string | Sequence code<br/>*Example:* `"MBP-0000001"` | No |
| contactCode | string | Contact code.<br/>*Example:* `"C-0000001"` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| documentDate | dateTime | Payment Date<br/>*Example:* `"25-10-2019"` | No |
| exchangeRate | number | Exchange Rate<br/>*Example:* `1` | No |
| id | long |  | No |
| makePaymentFeeDtoList | [ [MakePaymentFeeDto](#makepaymentfeedto) ] | Transaction fee pertaining to the made payment | No |
| makePaymentList | [ [MakePaymentResponseDto](#makepaymentresponsedto) ] | List of make payments<br/>*Example:* `[]` | No |

### MakeBulkPaymentDto«MakePaymentResponseDtoIndia,MakePaymentItemResponseDtoIndia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Payment amount<br/>*Example:* `100` | No |
| amountInBaseCurrency | number | Payment amount in Base Currency<br/>*Example:* `100` | No |
| code | string | Sequence code<br/>*Example:* `"MBP-0000001"` | No |
| contactCode | string | Contact code.<br/>*Example:* `"C-0000001"` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| documentDate | dateTime | Payment Date<br/>*Example:* `"25-10-2019"` | No |
| exchangeRate | number | Exchange Rate<br/>*Example:* `1` | No |
| id | long |  | No |
| makePaymentFeeDtoList | [ [MakePaymentFeeDto](#makepaymentfeedto) ] | Transaction fee pertaining to the made payment | No |
| makePaymentList | [ [MakePaymentResponseDtoIndia](#makepaymentresponsedtoindia) ] | List of make payments<br/>*Example:* `[]` | No |

### MakeBulkPaymentDto«MakePaymentResponseDtoIndonesia,MakePaymentItemResponseDtoIndonesia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Payment amount<br/>*Example:* `100` | No |
| amountInBaseCurrency | number | Payment amount in Base Currency<br/>*Example:* `100` | No |
| code | string | Sequence code<br/>*Example:* `"MBP-0000001"` | No |
| contactCode | string | Contact code.<br/>*Example:* `"C-0000001"` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| documentDate | dateTime | Payment Date<br/>*Example:* `"25-10-2019"` | No |
| exchangeRate | number | Exchange Rate<br/>*Example:* `1` | No |
| id | long |  | No |
| makePaymentFeeDtoList | [ [MakePaymentFeeDto](#makepaymentfeedto) ] | Transaction fee pertaining to the made payment | No |
| makePaymentList | [ [MakePaymentResponseDtoIndonesia](#makepaymentresponsedtoindonesia) ] | List of make payments<br/>*Example:* `[]` | No |

### MakeBulkPaymentDto«MakePaymentResponseDtoIsrael,MakePaymentItemResponseDtoIsrael»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Payment amount<br/>*Example:* `100` | No |
| amountInBaseCurrency | number | Payment amount in Base Currency<br/>*Example:* `100` | No |
| code | string | Sequence code<br/>*Example:* `"MBP-0000001"` | No |
| contactCode | string | Contact code.<br/>*Example:* `"C-0000001"` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| documentDate | dateTime | Payment Date<br/>*Example:* `"25-10-2019"` | No |
| exchangeRate | number | Exchange Rate<br/>*Example:* `1` | No |
| id | long |  | No |
| makePaymentFeeDtoList | [ [MakePaymentFeeDto](#makepaymentfeedto) ] | Transaction fee pertaining to the made payment | No |
| makePaymentList | [ [MakePaymentResponseDtoIsrael](#makepaymentresponsedtoisrael) ] | List of make payments<br/>*Example:* `[]` | No |

### MakeBulkPaymentDto«MakePaymentResponseDtoPhilippines,MakePaymentItemResponseDtoPhilippines»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Payment amount<br/>*Example:* `100` | No |
| amountInBaseCurrency | number | Payment amount in Base Currency<br/>*Example:* `100` | No |
| code | string | Sequence code<br/>*Example:* `"MBP-0000001"` | No |
| contactCode | string | Contact code.<br/>*Example:* `"C-0000001"` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| documentDate | dateTime | Payment Date<br/>*Example:* `"25-10-2019"` | No |
| exchangeRate | number | Exchange Rate<br/>*Example:* `1` | No |
| id | long |  | No |
| makePaymentFeeDtoList | [ [MakePaymentFeeDto](#makepaymentfeedto) ] | Transaction fee pertaining to the made payment | No |
| makePaymentList | [ [MakePaymentResponseDtoPhilippines](#makepaymentresponsedtophilippines) ] | List of make payments<br/>*Example:* `[]` | No |

### MakePaymentDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayFrom | string | Account code.<br/>*Example:* `"AC-001"` | No |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| amount | number | Payment amount.<br/>*Example:* `10` | No |
| amountDue | number | Payment amount Due.<br/>*Example:* `10` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| bankRuleId | long | Rule id if the document has been created by a Bank Rule | No |
| contactCode | string | Contact code.<br/>*Example:* `19425` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency code.<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| documentDate | dateTime | Document date.<br/>*Example:* `"2019-09-27"` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| interCompany | boolean | True if it is between inter companies<br/>*Example:* `true` | No |
| isTdsPaymentIndia | boolean |  | No |
| knockoffInfo | [ [KnockOffInfo](#knockoffinfo) ] |  | No |
| makePaymentFeeDtoList | [ [MakePaymentFeeDto](#makepaymentfeedto) ] | Transaction fee pertaining to the made payment | No |
| makePaymentItemDtoList | [ [MakePaymentItemDto](#makepaymentitemdto) ] | Make payment items information. | No |
| makePaymentRecurringDto | [MakePaymentRecurringDto](#makepaymentrecurringdto) | Recurring payment details. | No |
| memo | string | Memo text.<br/>*Example:* `"Sales quotation"` | No |
| nextPaymentDate | dateTime | Next payment date.<br/>*Example:* `"2019-09-27"` | No |
| opening | boolean | Opening Document<br/>*Example:* `false` | No |
| paymentType | string | Type of payment.<br/>*Enum:* `"CHEQUE"`, `"CASH"`, `"BANK_TRANSFER"`, `"CARD"`, `"OTHERS"`<br/>*Example:* `"BANK_TRANSFER"` | No |
| purchaseInvoice | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |  | No |
| reconciled | boolean | Whether the current payment is reconciled or not. | No |
| recurringActivated | boolean | Recurring payment activated for payment.<br/>*Example:* `false` | No |
| recurringPayment | boolean | Recurring payment enable/disable for payment.<br/>*Example:* `false` | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque.<br/>*Example:* `"2019-09-27"` | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque.<br/>*Example:* `"CH001"` | No |
| status | string | *Enum:* `"PRINT_SUCCESS"`, `"PRINT_FAILURE"`, `"NOT_PRINTED"` | No |
| tdsPaymentInfoIndia | [TDSPaymentInfoIndia](#tdspaymentinfoindia) | TDS Payment details | No |
| tdsProcessedFlag | boolean | TDS Processed Flag<br/>*Example:* `false` | No |
| unitPriceGstInclusive | boolean | Price is GST inclusive<br/>*Example:* `false` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |

### MakePaymentDtoIndia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayFrom | string | Account code.<br/>*Example:* `"AC-001"` | No |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| amount | number | Payment amount.<br/>*Example:* `10` | No |
| amountDue | number | Payment amount Due.<br/>*Example:* `10` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| bankRuleId | long | Rule id if the document has been created by a Bank Rule | No |
| contactCode | string | Contact code.<br/>*Example:* `19425` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency code.<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| documentDate | dateTime | Document date.<br/>*Example:* `"2019-09-27"` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| interCompany | boolean | True if it is between inter companies<br/>*Example:* `true` | No |
| isTdsPaymentIndia | boolean |  | No |
| knockoffInfo | [ [KnockOffInfo](#knockoffinfo) ] |  | No |
| makePaymentFeeDtoList | [ [MakePaymentFeeDto](#makepaymentfeedto) ] | Transaction fee pertaining to the made payment | No |
| makePaymentItemDtoList | [ [MakePaymentItemDtoIndia](#makepaymentitemdtoindia) ] | Make payment items information. | No |
| makePaymentRecurringDto | [MakePaymentRecurringDto](#makepaymentrecurringdto) | Recurring payment details. | No |
| memo | string | Memo text.<br/>*Example:* `"Sales quotation"` | No |
| nextPaymentDate | dateTime | Next payment date.<br/>*Example:* `"2019-09-27"` | No |
| opening | boolean | Opening Document<br/>*Example:* `false` | No |
| paymentType | string | Type of payment.<br/>*Enum:* `"CHEQUE"`, `"CASH"`, `"BANK_TRANSFER"`, `"CARD"`, `"OTHERS"`<br/>*Example:* `"BANK_TRANSFER"` | No |
| reconciled | boolean | Whether the current payment is reconciled or not. | No |
| recurringActivated | boolean | Recurring payment activated for payment.<br/>*Example:* `false` | No |
| recurringPayment | boolean | Recurring payment enable/disable for payment.<br/>*Example:* `false` | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque.<br/>*Example:* `"2019-09-27"` | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque.<br/>*Example:* `"CH001"` | No |
| status | string | Print Status<br/>*Enum:* `"PRINT_SUCCESS"`, `"PRINT_FAILURE"`, `"NOT_PRINTED"`<br/>*Example:* `"NOT_PRINTED"` | No |
| tdsPaymentInfoIndia | [TDSPaymentInfoIndia](#tdspaymentinfoindia) | TDS Payment details | No |
| tdsProcessedFlag | boolean | TDS Processed Flag<br/>*Example:* `false` | No |
| unitPriceGstInclusive | boolean | Price is GST inclusive<br/>*Example:* `false` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |

### MakePaymentDtoIndonesia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayFrom | string | Account code.<br/>*Example:* `"AC-001"` | No |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| amount | number | Payment amount.<br/>*Example:* `10` | No |
| amountDue | number | Payment amount Due.<br/>*Example:* `10` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| bankRuleId | long | Rule id if the document has been created by a Bank Rule | No |
| contactCode | string | Contact code.<br/>*Example:* `19425` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency code.<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| documentDate | dateTime | Document date.<br/>*Example:* `"2019-09-27"` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| interCompany | boolean | True if it is between inter companies<br/>*Example:* `true` | No |
| isTdsPaymentIndia | boolean |  | No |
| knockoffInfo | [ [KnockOffInfo](#knockoffinfo) ] |  | No |
| makePaymentFeeDtoList | [ [MakePaymentFeeDto](#makepaymentfeedto) ] | Transaction fee pertaining to the made payment | No |
| makePaymentItemDtoList | [ [MakePaymentItemDtoIndonesia](#makepaymentitemdtoindonesia) ] | Make payment items information. | No |
| makePaymentRecurringDto | [MakePaymentRecurringDto](#makepaymentrecurringdto) | Recurring payment details. | No |
| memo | string | Memo text.<br/>*Example:* `"Sales quotation"` | No |
| nextPaymentDate | dateTime | Next payment date.<br/>*Example:* `"2019-09-27"` | No |
| opening | boolean | Opening Document<br/>*Example:* `false` | No |
| paymentType | string | Type of payment.<br/>*Enum:* `"CHEQUE"`, `"CASH"`, `"BANK_TRANSFER"`, `"CARD"`, `"OTHERS"`<br/>*Example:* `"BANK_TRANSFER"` | No |
| reconciled | boolean | Whether the current payment is reconciled or not. | No |
| recurringActivated | boolean | Recurring payment activated for payment.<br/>*Example:* `false` | No |
| recurringPayment | boolean | Recurring payment enable/disable for payment.<br/>*Example:* `false` | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque.<br/>*Example:* `"2019-09-27"` | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque.<br/>*Example:* `"CH001"` | No |
| status | string | Print Status<br/>*Enum:* `"PRINT_SUCCESS"`, `"PRINT_FAILURE"`, `"NOT_PRINTED"`<br/>*Example:* `"NOT_PRINTED"` | No |
| tdsPaymentInfoIndia | [TDSPaymentInfoIndia](#tdspaymentinfoindia) | TDS Payment details | No |
| tdsProcessedFlag | boolean | TDS Processed Flag<br/>*Example:* `false` | No |
| unitPriceGstInclusive | boolean | Price is GST inclusive<br/>*Example:* `false` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |
| whtApplicable | boolean | WHT Applicable for make payment<br/>*Example:* `true` | No |

### MakePaymentDtoIsrael

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayFrom | string | Account code.<br/>*Example:* `"AC-001"` | No |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| amount | number | Payment amount.<br/>*Example:* `10` | No |
| amountDue | number | Payment amount Due.<br/>*Example:* `10` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| bankRuleId | long | Rule id if the document has been created by a Bank Rule | No |
| contactCode | string | Contact code.<br/>*Example:* `19425` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency code.<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| documentDate | dateTime | Document date.<br/>*Example:* `"2019-09-27"` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| interCompany | boolean | True if it is between inter companies<br/>*Example:* `true` | No |
| isTdsPaymentIndia | boolean |  | No |
| knockoffInfo | [ [KnockOffInfo](#knockoffinfo) ] |  | No |
| makePaymentFeeDtoList | [ [MakePaymentFeeDto](#makepaymentfeedto) ] | Transaction fee pertaining to the made payment | No |
| makePaymentItemDtoList | [ [MakePaymentItemDtoIsrael](#makepaymentitemdtoisrael) ] | Make payment items information. | No |
| makePaymentRecurringDto | [MakePaymentRecurringDto](#makepaymentrecurringdto) | Recurring payment details. | No |
| memo | string | Memo text.<br/>*Example:* `"Sales quotation"` | No |
| nextPaymentDate | dateTime | Next payment date.<br/>*Example:* `"2019-09-27"` | No |
| opening | boolean | Opening Document<br/>*Example:* `false` | No |
| paymentType | string | Type of payment.<br/>*Enum:* `"CHEQUE"`, `"CASH"`, `"BANK_TRANSFER"`, `"CARD"`, `"OTHERS"`<br/>*Example:* `"BANK_TRANSFER"` | No |
| reconciled | boolean | Whether the current payment is reconciled or not. | No |
| recurringActivated | boolean | Recurring payment activated for payment.<br/>*Example:* `false` | No |
| recurringPayment | boolean | Recurring payment enable/disable for payment.<br/>*Example:* `false` | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque.<br/>*Example:* `"2019-09-27"` | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque.<br/>*Example:* `"CH001"` | No |
| status | string | Print Status<br/>*Enum:* `"PRINT_SUCCESS"`, `"PRINT_FAILURE"`, `"NOT_PRINTED"`<br/>*Example:* `"NOT_PRINTED"` | No |
| tdsPaymentInfoIndia | [TDSPaymentInfoIndia](#tdspaymentinfoindia) | TDS Payment details | No |
| tdsProcessedFlag | boolean | TDS Processed Flag<br/>*Example:* `false` | No |
| unitPriceGstInclusive | boolean | Price is GST inclusive<br/>*Example:* `false` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |
| whtApplicable | boolean | WHT Applicable for make payment<br/>*Example:* `true` | No |
| whtInfoIsrael | [WhtInfoIsrael](#whtinfoisrael) | WHT info for make payment | No |

### MakePaymentDtoPhilippines

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayFrom | string | Account code.<br/>*Example:* `"AC-001"` | No |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| amount | number | Payment amount.<br/>*Example:* `10` | No |
| amountDue | number | Payment amount Due.<br/>*Example:* `10` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| bankRuleId | long | Rule id if the document has been created by a Bank Rule | No |
| contactCode | string | Contact code.<br/>*Example:* `19425` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency code.<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| documentDate | dateTime | Document date.<br/>*Example:* `"2019-09-27"` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| interCompany | boolean | True if it is between inter companies<br/>*Example:* `true` | No |
| isTdsPaymentIndia | boolean |  | No |
| knockoffInfo | [ [KnockOffInfo](#knockoffinfo) ] |  | No |
| makePaymentFeeDtoList | [ [MakePaymentFeeDto](#makepaymentfeedto) ] | Transaction fee pertaining to the made payment | No |
| makePaymentItemDtoList | [ [MakePaymentItemDtoPhilippines](#makepaymentitemdtophilippines) ] | Make payment items information. | No |
| makePaymentRecurringDto | [MakePaymentRecurringDto](#makepaymentrecurringdto) | Recurring payment details. | No |
| memo | string | Memo text.<br/>*Example:* `"Sales quotation"` | No |
| nextPaymentDate | dateTime | Next payment date.<br/>*Example:* `"2019-09-27"` | No |
| opening | boolean | Opening Document<br/>*Example:* `false` | No |
| paymentType | string | Type of payment.<br/>*Enum:* `"CHEQUE"`, `"CASH"`, `"BANK_TRANSFER"`, `"CARD"`, `"OTHERS"`<br/>*Example:* `"BANK_TRANSFER"` | No |
| reconciled | boolean | Whether the current payment is reconciled or not. | No |
| recurringActivated | boolean | Recurring payment activated for payment.<br/>*Example:* `false` | No |
| recurringPayment | boolean | Recurring payment enable/disable for payment.<br/>*Example:* `false` | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque.<br/>*Example:* `"2019-09-27"` | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque.<br/>*Example:* `"CH001"` | No |
| status | string | Print Status<br/>*Enum:* `"PRINT_SUCCESS"`, `"PRINT_FAILURE"`, `"NOT_PRINTED"`<br/>*Example:* `"NOT_PRINTED"` | No |
| tdsPaymentInfoIndia | [TDSPaymentInfoIndia](#tdspaymentinfoindia) | TDS Payment details | No |
| tdsProcessedFlag | boolean | TDS Processed Flag<br/>*Example:* `false` | No |
| unitPriceGstInclusive | boolean | Price is GST inclusive<br/>*Example:* `false` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |
| whtApplicable | boolean | WHT Applicable for make payment<br/>*Example:* `true` | No |

### MakePaymentFeeDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| MakePaymentFeeDto | object |  |  |

### MakePaymentItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Description of document.<br/>*Example:* `"General ledger for account."` | No |
| documentCode | string | Document code.<br/>*Example:* `"AC-001"` | No |
| documentSequenceCode | string | Document Sequence code.<br/>*Example:* `"AC-001"` | No |
| documentType | string | Document type.<br/>*Example:* `"General Ledger"` | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| isTdsApplicableAccount | boolean |  | No |
| isTdsApplicableContact | boolean |  | No |
| paymentAmount | number | Payment amount.<br/>*Example:* `10.5` | No |
| taxAmount | number | Tax amount.<br/>*Example:* `0.7` | No |
| taxCode | string | Tax code.<br/>*Example:* `"GST@7"` | No |
| taxList | [ [TaxMappingDto](#taxmappingdto) ] |  | No |
| tdsAccount | string | Tds Account Code<br/>*Example:* `"AC-0000011"` | No |
| tdsAmount | number | TDS Amount<br/>*Example:* `100` | No |
| tdsInfoIndia | [TdsInfoIndia](#tdsinfoindia) | Pre-Payment TDS details | No |
| tdsRate | number | TDS Rate<br/>*Example:* `10.1` | No |

### MakePaymentItemDtoIndia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Description of document.<br/>*Example:* `"General ledger for account."` | No |
| documentCode | string | Document code.<br/>*Example:* `"AC-001"` | No |
| documentSequenceCode | string | Document Sequence code.<br/>*Example:* `"AC-001"` | No |
| documentType | string | Document type.<br/>*Example:* `"General Ledger"` | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| isTdsApplicableAccount | boolean |  | No |
| isTdsApplicableContact | boolean |  | No |
| paymentAmount | number | Payment amount.<br/>*Example:* `10.5` | No |
| taxAmount | number | Tax amount.<br/>*Example:* `0.7` | No |
| taxCode | string | Tax code.<br/>*Example:* `"GST@7"` | No |
| taxList | [ [TaxMappingDto](#taxmappingdto) ] |  | No |
| tdsAccount | string | Tds Account Code<br/>*Example:* `"AC-0000011"` | No |
| tdsAmount | number | TDS Amount<br/>*Example:* `100` | No |
| tdsInfoIndia | [TdsInfoIndia](#tdsinfoindia) | Pre-Payment TDS details | No |
| tdsRate | number | TDS Rate<br/>*Example:* `10.1` | No |

### MakePaymentItemDtoIndonesia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Description of document.<br/>*Example:* `"General ledger for account."` | No |
| documentCode | string | Document code.<br/>*Example:* `"AC-001"` | No |
| documentSequenceCode | string | Document Sequence code.<br/>*Example:* `"AC-001"` | No |
| documentType | string | Document type.<br/>*Example:* `"General Ledger"` | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| isTdsApplicableAccount | boolean |  | No |
| isTdsApplicableContact | boolean |  | No |
| paymentAmount | number | Payment amount.<br/>*Example:* `10.5` | No |
| taxAmount | number | Tax amount.<br/>*Example:* `0.7` | No |
| taxCode | string | Tax code.<br/>*Example:* `"GST@7"` | No |
| taxList | [ [TaxMappingDto](#taxmappingdto) ] |  | No |
| tdsAccount | string | Tds Account Code<br/>*Example:* `"AC-0000011"` | No |
| tdsAmount | number | TDS Amount<br/>*Example:* `100` | No |
| tdsInfoIndia | [TdsInfoIndia](#tdsinfoindia) | Pre-Payment TDS details | No |
| tdsRate | number | TDS Rate<br/>*Example:* `10.1` | No |

### MakePaymentItemDtoIsrael

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Description of document.<br/>*Example:* `"General ledger for account."` | No |
| documentCode | string | Document code.<br/>*Example:* `"AC-001"` | No |
| documentSequenceCode | string | Document Sequence code.<br/>*Example:* `"AC-001"` | No |
| documentType | string | Document type.<br/>*Example:* `"General Ledger"` | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| isTdsApplicableAccount | boolean |  | No |
| isTdsApplicableContact | boolean |  | No |
| paymentAmount | number | Payment amount.<br/>*Example:* `10.5` | No |
| taxAmount | number | Tax amount.<br/>*Example:* `0.7` | No |
| taxCode | string | Tax code.<br/>*Example:* `"GST@7"` | No |
| taxList | [ [TaxMappingDto](#taxmappingdto) ] |  | No |
| tdsAccount | string | Tds Account Code<br/>*Example:* `"AC-0000011"` | No |
| tdsAmount | number | TDS Amount<br/>*Example:* `100` | No |
| tdsInfoIndia | [TdsInfoIndia](#tdsinfoindia) | Pre-Payment TDS details | No |
| tdsRate | number | TDS Rate<br/>*Example:* `10.1` | No |

### MakePaymentItemDtoPhilippines

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Description of document.<br/>*Example:* `"General ledger for account."` | No |
| documentCode | string | Document code.<br/>*Example:* `"AC-001"` | No |
| documentSequenceCode | string | Document Sequence code.<br/>*Example:* `"AC-001"` | No |
| documentType | string | Document type.<br/>*Example:* `"General Ledger"` | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| isTdsApplicableAccount | boolean |  | No |
| isTdsApplicableContact | boolean |  | No |
| paymentAmount | number | Payment amount.<br/>*Example:* `10.5` | No |
| taxAmount | number | Tax amount.<br/>*Example:* `0.7` | No |
| taxCode | string | Tax code.<br/>*Example:* `"GST@7"` | No |
| taxList | [ [TaxMappingDto](#taxmappingdto) ] |  | No |
| tdsAccount | string | Tds Account Code<br/>*Example:* `"AC-0000011"` | No |
| tdsAmount | number | TDS Amount<br/>*Example:* `100` | No |
| tdsInfoIndia | [TdsInfoIndia](#tdsinfoindia) | Pre-Payment TDS details | No |
| tdsRate | number | TDS Rate<br/>*Example:* `10.1` | No |

### MakePaymentItemResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Description of document.<br/>*Example:* `"General ledger for account."` | No |
| documentCode | string | Document code.<br/>*Example:* `"AC-001"` | No |
| documentSequenceCode | string | Document Sequence code.<br/>*Example:* `"AC-001"` | No |
| documentType | string | Document type.<br/>*Example:* `"General Ledger"` | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| isTdsApplicableAccount | boolean |  | No |
| isTdsApplicableContact | boolean |  | No |
| paymentAmount | number | Payment amount.<br/>*Example:* `10.5` | No |
| taxAmount | number | Tax amount.<br/>*Example:* `0.7` | No |
| taxCode | string | Tax code.<br/>*Example:* `"GST@7"` | No |
| taxList | [ [TaxMappingDto](#taxmappingdto) ] |  | No |
| tdsAccount | string | Tds Account Code<br/>*Example:* `"AC-0000011"` | No |
| tdsAmount | number | TDS Amount<br/>*Example:* `100` | No |
| tdsInfoIndia | [TdsInfoIndia](#tdsinfoindia) | Pre-Payment TDS details | No |
| tdsRate | number | TDS Rate<br/>*Example:* `10.1` | No |

### MakePaymentItemResponseDtoIndia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Description of document.<br/>*Example:* `"General ledger for account."` | No |
| documentCode | string | Document code.<br/>*Example:* `"AC-001"` | No |
| documentSequenceCode | string | Document Sequence code.<br/>*Example:* `"AC-001"` | No |
| documentType | string | Document type.<br/>*Example:* `"General Ledger"` | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| isTdsApplicableAccount | boolean |  | No |
| isTdsApplicableContact | boolean |  | No |
| paymentAmount | number | Payment amount.<br/>*Example:* `10.5` | No |
| taxAmount | number | Tax amount.<br/>*Example:* `0.7` | No |
| taxCode | string | Tax code.<br/>*Example:* `"GST@7"` | No |
| taxList | [ [TaxMappingDto](#taxmappingdto) ] |  | No |
| tdsAccount | string | Tds Account Code<br/>*Example:* `"AC-0000011"` | No |
| tdsAmount | number | TDS Amount<br/>*Example:* `100` | No |
| tdsInfoIndia | [TdsInfoIndia](#tdsinfoindia) | Pre-Payment TDS details | No |
| tdsRate | number | TDS Rate<br/>*Example:* `10.1` | No |

### MakePaymentItemResponseDtoIndonesia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Description of document.<br/>*Example:* `"General ledger for account."` | No |
| documentCode | string | Document code.<br/>*Example:* `"AC-001"` | No |
| documentSequenceCode | string | Document Sequence code.<br/>*Example:* `"AC-001"` | No |
| documentType | string | Document type.<br/>*Example:* `"General Ledger"` | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| isTdsApplicableAccount | boolean |  | No |
| isTdsApplicableContact | boolean |  | No |
| paymentAmount | number | Payment amount.<br/>*Example:* `10.5` | No |
| taxAmount | number | Tax amount.<br/>*Example:* `0.7` | No |
| taxCode | string | Tax code.<br/>*Example:* `"GST@7"` | No |
| taxList | [ [TaxMappingDto](#taxmappingdto) ] |  | No |
| tdsAccount | string | Tds Account Code<br/>*Example:* `"AC-0000011"` | No |
| tdsAmount | number | TDS Amount<br/>*Example:* `100` | No |
| tdsInfoIndia | [TdsInfoIndia](#tdsinfoindia) | Pre-Payment TDS details | No |
| tdsRate | number | TDS Rate<br/>*Example:* `10.1` | No |
| whtRateInfo | [ [WHTRateInfo](#whtrateinfo) ] | Line items - WHT Rates information.<br/>*Example:* `[{"accountCode":"AC-001","productCode":"P-001","whtAmount":20,"rate":2,"whtSectionToWhtRateId":100}]` | No |

### MakePaymentItemResponseDtoIsrael

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Description of document.<br/>*Example:* `"General ledger for account."` | No |
| documentCode | string | Document code.<br/>*Example:* `"AC-001"` | No |
| documentSequenceCode | string | Document Sequence code.<br/>*Example:* `"AC-001"` | No |
| documentType | string | Document type.<br/>*Example:* `"General Ledger"` | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| isTdsApplicableAccount | boolean |  | No |
| isTdsApplicableContact | boolean |  | No |
| paymentAmount | number | Payment amount.<br/>*Example:* `10.5` | No |
| taxAmount | number | Tax amount.<br/>*Example:* `0.7` | No |
| taxCode | string | Tax code.<br/>*Example:* `"GST@7"` | No |
| taxList | [ [TaxMappingDto](#taxmappingdto) ] |  | No |
| tdsAccount | string | Tds Account Code<br/>*Example:* `"AC-0000011"` | No |
| tdsAmount | number | TDS Amount<br/>*Example:* `100` | No |
| tdsInfoIndia | [TdsInfoIndia](#tdsinfoindia) | Pre-Payment TDS details | No |
| tdsRate | number | TDS Rate<br/>*Example:* `10.1` | No |

### MakePaymentItemResponseDtoPhilippines

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Description of document.<br/>*Example:* `"General ledger for account."` | No |
| documentCode | string | Document code.<br/>*Example:* `"AC-001"` | No |
| documentSequenceCode | string | Document Sequence code.<br/>*Example:* `"AC-001"` | No |
| documentType | string | Document type.<br/>*Example:* `"General Ledger"` | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| isTdsApplicableAccount | boolean |  | No |
| isTdsApplicableContact | boolean |  | No |
| paymentAmount | number | Payment amount.<br/>*Example:* `10.5` | No |
| taxAmount | number | Tax amount.<br/>*Example:* `0.7` | No |
| taxCode | string | Tax code.<br/>*Example:* `"GST@7"` | No |
| taxList | [ [TaxMappingDto](#taxmappingdto) ] |  | No |
| tdsAccount | string | Tds Account Code<br/>*Example:* `"AC-0000011"` | No |
| tdsAmount | number | TDS Amount<br/>*Example:* `100` | No |
| tdsInfoIndia | [TdsInfoIndia](#tdsinfoindia) | Pre-Payment TDS details | No |
| tdsRate | number | TDS Rate<br/>*Example:* `10.1` | No |
| whtRateInfo | [ [WHTRateInfo](#whtrateinfo) ] | Line items - WHT Rates information.<br/>*Example:* `[{"accountCode":"AC-001","productCode":"P-001","whtAmount":20,"rate":2,"whtSectionToWhtRateId":100}]` | No |

### MakePaymentRecurringDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| paymentMemo | [PaymentMemo](#paymentmemo) | Recurring payment memo.<br/>*Example:* `"payment memo"` | No |
| recurringEndDate | dateTime | Recurring payment end date.<br/>*Example:* `"2019-09-27"` | No |
| recurringFrequency | integer | Recurring frequency.<br/>*Example:* `1` | No |
| recurringPaymentCount | integer | Recurring payment count.<br/>*Example:* `2` | No |
| recurringType | string | Recurring type.<br/>*Enum:* `"DAYS"`, `"WEEK"`, `"MONTH"`<br/>*Example:* `"WEEK"` | No |

### MakePaymentResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayFrom | string | Account code.<br/>*Example:* `"AC-001"` | No |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| amount | number | Payment amount.<br/>*Example:* `10` | No |
| amountDue | number | Payment amount Due.<br/>*Example:* `10` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| bankRuleId | long | Rule id if the document has been created by a Bank Rule | No |
| contactCode | string | Contact code.<br/>*Example:* `19425` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency code.<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| documentDate | dateTime | Document date.<br/>*Example:* `"2019-09-27"` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| interCompany | boolean | True if it is between inter companies<br/>*Example:* `true` | No |
| isTdsPaymentIndia | boolean |  | No |
| knockoffInfo | [ [KnockOffInfo](#knockoffinfo) ] |  | No |
| makePaymentFeeDtoList | [ [MakePaymentFeeDto](#makepaymentfeedto) ] | Transaction fee pertaining to the made payment | No |
| makePaymentItemDtoList | [ [MakePaymentItemResponseDto](#makepaymentitemresponsedto) ] | Make payment items information. | No |
| makePaymentRecurringDto | [MakePaymentRecurringDto](#makepaymentrecurringdto) | Recurring payment details. | No |
| memo | string | Memo text.<br/>*Example:* `"Sales quotation"` | No |
| nextPaymentDate | dateTime | Next payment date.<br/>*Example:* `"2019-09-27"` | No |
| opening | boolean | Opening Document<br/>*Example:* `false` | No |
| paymentType | string | Type of payment.<br/>*Enum:* `"CHEQUE"`, `"CASH"`, `"BANK_TRANSFER"`, `"CARD"`, `"OTHERS"`<br/>*Example:* `"BANK_TRANSFER"` | No |
| reconciled | boolean | Whether the current payment is reconciled or not. | No |
| recurringActivated | boolean | Recurring payment activated for payment.<br/>*Example:* `false` | No |
| recurringPayment | boolean | Recurring payment enable/disable for payment.<br/>*Example:* `false` | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque.<br/>*Example:* `"2019-09-27"` | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque.<br/>*Example:* `"CH001"` | No |
| status | string | Print Status<br/>*Enum:* `"PRINT_SUCCESS"`, `"PRINT_FAILURE"`, `"NOT_PRINTED"`<br/>*Example:* `"NOT_PRINTED"` | No |
| tdsPaymentInfoIndia | [TDSPaymentInfoIndia](#tdspaymentinfoindia) | TDS Payment details | No |
| tdsProcessedFlag | boolean | TDS Processed Flag<br/>*Example:* `false` | No |
| unitPriceGstInclusive | boolean | Price is GST inclusive<br/>*Example:* `false` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |
| whtApplicable | boolean |  | No |

### MakePaymentResponseDtoIndia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayFrom | string | Account code.<br/>*Example:* `"AC-001"` | No |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| amount | number | Payment amount.<br/>*Example:* `10` | No |
| amountDue | number | Payment amount Due.<br/>*Example:* `10` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| bankRuleId | long | Rule id if the document has been created by a Bank Rule | No |
| contactCode | string | Contact code.<br/>*Example:* `19425` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency code.<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| documentDate | dateTime | Document date.<br/>*Example:* `"2019-09-27"` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| interCompany | boolean | True if it is between inter companies<br/>*Example:* `true` | No |
| isTdsPaymentIndia | boolean |  | No |
| knockoffInfo | [ [KnockOffInfo](#knockoffinfo) ] |  | No |
| makePaymentFeeDtoList | [ [MakePaymentFeeDto](#makepaymentfeedto) ] | Transaction fee pertaining to the made payment | No |
| makePaymentItemDtoList | [ [MakePaymentItemResponseDtoIndia](#makepaymentitemresponsedtoindia) ] | Make payment items information. | No |
| makePaymentRecurringDto | [MakePaymentRecurringDto](#makepaymentrecurringdto) | Recurring payment details. | No |
| memo | string | Memo text.<br/>*Example:* `"Sales quotation"` | No |
| nextPaymentDate | dateTime | Next payment date.<br/>*Example:* `"2019-09-27"` | No |
| opening | boolean | Opening Document<br/>*Example:* `false` | No |
| paymentType | string | Type of payment.<br/>*Enum:* `"CHEQUE"`, `"CASH"`, `"BANK_TRANSFER"`, `"CARD"`, `"OTHERS"`<br/>*Example:* `"BANK_TRANSFER"` | No |
| reconciled | boolean | Whether the current payment is reconciled or not. | No |
| recurringActivated | boolean | Recurring payment activated for payment.<br/>*Example:* `false` | No |
| recurringPayment | boolean | Recurring payment enable/disable for payment.<br/>*Example:* `false` | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque.<br/>*Example:* `"2019-09-27"` | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque.<br/>*Example:* `"CH001"` | No |
| status | string | Print Status<br/>*Enum:* `"PRINT_SUCCESS"`, `"PRINT_FAILURE"`, `"NOT_PRINTED"`<br/>*Example:* `"NOT_PRINTED"` | No |
| tdsPaymentInfoIndia | [TDSPaymentInfoIndia](#tdspaymentinfoindia) | TDS Payment details | No |
| tdsProcessedFlag | boolean | TDS Processed Flag<br/>*Example:* `false` | No |
| unitPriceGstInclusive | boolean | Price is GST inclusive<br/>*Example:* `false` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |

### MakePaymentResponseDtoIndonesia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayFrom | string | Account code.<br/>*Example:* `"AC-001"` | No |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| amount | number | Payment amount.<br/>*Example:* `10` | No |
| amountDue | number | Payment amount Due.<br/>*Example:* `10` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| bankRuleId | long | Rule id if the document has been created by a Bank Rule | No |
| contactCode | string | Contact code.<br/>*Example:* `19425` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency code.<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| documentDate | dateTime | Document date.<br/>*Example:* `"2019-09-27"` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| interCompany | boolean | True if it is between inter companies<br/>*Example:* `true` | No |
| isTdsPaymentIndia | boolean |  | No |
| knockoffInfo | [ [KnockOffInfo](#knockoffinfo) ] |  | No |
| makePaymentFeeDtoList | [ [MakePaymentFeeDto](#makepaymentfeedto) ] | Transaction fee pertaining to the made payment | No |
| makePaymentItemDtoList | [ [MakePaymentItemResponseDtoIndonesia](#makepaymentitemresponsedtoindonesia) ] | Make payment items information. | No |
| makePaymentRecurringDto | [MakePaymentRecurringDto](#makepaymentrecurringdto) | Recurring payment details. | No |
| memo | string | Memo text.<br/>*Example:* `"Sales quotation"` | No |
| nextPaymentDate | dateTime | Next payment date.<br/>*Example:* `"2019-09-27"` | No |
| opening | boolean | Opening Document<br/>*Example:* `false` | No |
| paymentType | string | Type of payment.<br/>*Enum:* `"CHEQUE"`, `"CASH"`, `"BANK_TRANSFER"`, `"CARD"`, `"OTHERS"`<br/>*Example:* `"BANK_TRANSFER"` | No |
| reconciled | boolean | Whether the current payment is reconciled or not. | No |
| recurringActivated | boolean | Recurring payment activated for payment.<br/>*Example:* `false` | No |
| recurringPayment | boolean | Recurring payment enable/disable for payment.<br/>*Example:* `false` | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque.<br/>*Example:* `"2019-09-27"` | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque.<br/>*Example:* `"CH001"` | No |
| status | string | Print Status<br/>*Enum:* `"PRINT_SUCCESS"`, `"PRINT_FAILURE"`, `"NOT_PRINTED"`<br/>*Example:* `"NOT_PRINTED"` | No |
| tdsPaymentInfoIndia | [TDSPaymentInfoIndia](#tdspaymentinfoindia) | TDS Payment details | No |
| tdsProcessedFlag | boolean | TDS Processed Flag<br/>*Example:* `false` | No |
| unitPriceGstInclusive | boolean | Price is GST inclusive<br/>*Example:* `false` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |
| whtApplicable | boolean | *Example:* `true` | No |

### MakePaymentResponseDtoIsrael

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayFrom | string | Account code.<br/>*Example:* `"AC-001"` | No |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| amount | number | Payment amount.<br/>*Example:* `10` | No |
| amountDue | number | Payment amount Due.<br/>*Example:* `10` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| bankRuleId | long | Rule id if the document has been created by a Bank Rule | No |
| contactCode | string | Contact code.<br/>*Example:* `19425` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency code.<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| documentDate | dateTime | Document date.<br/>*Example:* `"2019-09-27"` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| interCompany | boolean | True if it is between inter companies<br/>*Example:* `true` | No |
| isTdsPaymentIndia | boolean |  | No |
| knockoffInfo | [ [KnockOffInfo](#knockoffinfo) ] |  | No |
| makePaymentFeeDtoList | [ [MakePaymentFeeDto](#makepaymentfeedto) ] | Transaction fee pertaining to the made payment | No |
| makePaymentItemDtoList | [ [MakePaymentItemResponseDtoIsrael](#makepaymentitemresponsedtoisrael) ] | Make payment items information. | No |
| makePaymentRecurringDto | [MakePaymentRecurringDto](#makepaymentrecurringdto) | Recurring payment details. | No |
| memo | string | Memo text.<br/>*Example:* `"Sales quotation"` | No |
| nextPaymentDate | dateTime | Next payment date.<br/>*Example:* `"2019-09-27"` | No |
| opening | boolean | Opening Document<br/>*Example:* `false` | No |
| paymentType | string | Type of payment.<br/>*Enum:* `"CHEQUE"`, `"CASH"`, `"BANK_TRANSFER"`, `"CARD"`, `"OTHERS"`<br/>*Example:* `"BANK_TRANSFER"` | No |
| reconciled | boolean | Whether the current payment is reconciled or not. | No |
| recurringActivated | boolean | Recurring payment activated for payment.<br/>*Example:* `false` | No |
| recurringPayment | boolean | Recurring payment enable/disable for payment.<br/>*Example:* `false` | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque.<br/>*Example:* `"2019-09-27"` | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque.<br/>*Example:* `"CH001"` | No |
| status | string | Print Status<br/>*Enum:* `"PRINT_SUCCESS"`, `"PRINT_FAILURE"`, `"NOT_PRINTED"`<br/>*Example:* `"NOT_PRINTED"` | No |
| tdsPaymentInfoIndia | [TDSPaymentInfoIndia](#tdspaymentinfoindia) | TDS Payment details | No |
| tdsProcessedFlag | boolean | TDS Processed Flag<br/>*Example:* `false` | No |
| unitPriceGstInclusive | boolean | Price is GST inclusive<br/>*Example:* `false` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |
| whtApplicable | boolean | *Example:* `true` | No |
| whtInfoIsrael | [WhtInfoIsrael](#whtinfoisrael) | WHT info for make payment | No |

### MakePaymentResponseDtoPhilippines

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayFrom | string | Account code.<br/>*Example:* `"AC-001"` | No |
| accountName | string | Account name.<br/>*Example:* `"Bank"` | No |
| amount | number | Payment amount.<br/>*Example:* `10` | No |
| amountDue | number | Payment amount Due.<br/>*Example:* `10` | No |
| attachmentIds | [ integer ] | list of attachment id's for this order | No |
| bankRuleId | long | Rule id if the document has been created by a Bank Rule | No |
| contactCode | string | Contact code.<br/>*Example:* `19425` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency code.<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| documentDate | dateTime | Document date.<br/>*Example:* `"2019-09-27"` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | number | Exchange rate.<br/>*Example:* `0.01891562` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| interCompany | boolean | True if it is between inter companies<br/>*Example:* `true` | No |
| isTdsPaymentIndia | boolean |  | No |
| knockoffInfo | [ [KnockOffInfo](#knockoffinfo) ] |  | No |
| makePaymentFeeDtoList | [ [MakePaymentFeeDto](#makepaymentfeedto) ] | Transaction fee pertaining to the made payment | No |
| makePaymentItemDtoList | [ [MakePaymentItemResponseDtoPhilippines](#makepaymentitemresponsedtophilippines) ] | Make payment items information. | No |
| makePaymentRecurringDto | [MakePaymentRecurringDto](#makepaymentrecurringdto) | Recurring payment details. | No |
| memo | string | Memo text.<br/>*Example:* `"Sales quotation"` | No |
| nextPaymentDate | dateTime | Next payment date.<br/>*Example:* `"2019-09-27"` | No |
| opening | boolean | Opening Document<br/>*Example:* `false` | No |
| paymentType | string | Type of payment.<br/>*Enum:* `"CHEQUE"`, `"CASH"`, `"BANK_TRANSFER"`, `"CARD"`, `"OTHERS"`<br/>*Example:* `"BANK_TRANSFER"` | No |
| reconciled | boolean | Whether the current payment is reconciled or not. | No |
| recurringActivated | boolean | Recurring payment activated for payment.<br/>*Example:* `false` | No |
| recurringPayment | boolean | Recurring payment enable/disable for payment.<br/>*Example:* `false` | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque.<br/>*Example:* `"2019-09-27"` | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque.<br/>*Example:* `"CH001"` | No |
| status | string | Print Status<br/>*Enum:* `"PRINT_SUCCESS"`, `"PRINT_FAILURE"`, `"NOT_PRINTED"`<br/>*Example:* `"NOT_PRINTED"` | No |
| tdsPaymentInfoIndia | [TDSPaymentInfoIndia](#tdspaymentinfoindia) | TDS Payment details | No |
| tdsProcessedFlag | boolean | TDS Processed Flag<br/>*Example:* `false` | No |
| unitPriceGstInclusive | boolean | Price is GST inclusive<br/>*Example:* `false` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |
| whtApplicable | boolean | *Example:* `true` | No |

### Map«string,object»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Map«string,object» | object |  |  |

### Pageable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| offset | long |  | No |
| pageNumber | integer |  | No |
| pageSize | integer |  | No |
| paged | boolean |  | No |
| sort | [Sort](#sort) |  | No |
| unpaged | boolean |  | No |

### Page«DepositDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [DepositDto](#depositdto) ] |  | No |
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

### Page«ExpenseDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ExpenseDto](#expensedto) ] |  | No |
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

### Page«MakePaymentResponseDtoIndia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [MakePaymentResponseDtoIndia](#makepaymentresponsedtoindia) ] |  | No |
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

### Page«MakePaymentResponseDtoIndonesia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [MakePaymentResponseDtoIndonesia](#makepaymentresponsedtoindonesia) ] |  | No |
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

### Page«MakePaymentResponseDtoIsrael»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [MakePaymentResponseDtoIsrael](#makepaymentresponsedtoisrael) ] |  | No |
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

### Page«MakePaymentResponseDtoPhilippines»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [MakePaymentResponseDtoPhilippines](#makepaymentresponsedtophilippines) ] |  | No |
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

### Page«MakePaymentResponseDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [MakePaymentResponseDto](#makepaymentresponsedto) ] |  | No |
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

### Page«ReceivePaymentResponseDtoIndia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ReceivePaymentResponseDtoIndia](#receivepaymentresponsedtoindia) ] |  | No |
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

### Page«ReceivePaymentResponseDtoIndonesia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ReceivePaymentResponseDtoIndonesia](#receivepaymentresponsedtoindonesia) ] |  | No |
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

### Page«ReceivePaymentResponseDtoIsrael»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ReceivePaymentResponseDtoIsrael](#receivepaymentresponsedtoisrael) ] |  | No |
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

### Page«ReceivePaymentResponseDtoPhilippines»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ReceivePaymentResponseDtoPhilippines](#receivepaymentresponsedtophilippines) ] |  | No |
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

### Page«ReceivePaymentResponseDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ReceivePaymentResponseDto](#receivepaymentresponsedto) ] |  | No |
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

### PaymentAccountDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| connected | boolean |  | No |
| connectionId | string |  | No |
| connectionName | string |  | No |
| modules | [ string ] |  | No |

### PaymentInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| autoCharge | boolean |  | No |
| connectionType | string | Payment connection type<br/>*Enum:* `"STRIPE"`, `"VEEM"`, `"WISE"`, `"PAYPAL"`, `"PAYTM"`, `"RAZORPAY"`, `"OPENNODE"`, `"CASHFREE"`<br/>*Example:* `"stripe"` | No |
| customerEmail | string | Customer email<br/>*Example:* `"john@doe.com"` | No |
| customerPhone | string | Customer phone<br/>*Example:* `1234567890` | No |
| paymentAccountDto | [PaymentAccountDto](#paymentaccountdto) | Payment method information<br/>*Example:* `{"connected":true}` | No |
| paymentLink | string | Payment link<br/>*Example:* `"www.veem.com/payment"` | No |

### PaymentLinkRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| autoCharge | boolean |  | No |
| connectionId | string |  | No |
| connectionType | string |  | No |
| currency | string |  | No |
| documentType | string | *Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"PURCHASE_REQUEST"`, `"PURCHASE_REQUEST_FOR_QUOTES"`, `"SUPPLIER_QUOTES"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"` | No |
| email | string |  | No |
| generateProviderAlert | boolean |  | No |
| invoiceId | string |  | No |
| paymentAmount | number |  | No |
| phone | string |  | No |
| updateEmail | boolean |  | No |

### PaymentMemo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| paymentMemos | object |  | No |
| referenceDetails | object |  | No |

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
| exciseRateIndo | number | Excise Rate<br/>*Example:* `5` | No |
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
| exciseRateIndo | number | Excise Rate<br/>*Example:* `5` | No |
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

### PurchaseInvoiceResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase invoice additional charges details | No |
| approvalStatus | string | Approval status<br/>*Enum:* `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>*Example:* `"APPROVED"` | No |
| attachmentIds | [ integer ] |  | No |
| attachments | [ string ] | File attachments | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if purchase invoice is backorder<br/>*Example:* `true` | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact details | Yes |
| contactCode | string | Contact Code<br/>*Example:* `"C0001"` | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| currency | string | Currency<br/>*Example:* `"C001"` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| documentSequenceCode | string | Purchase invoice Sequence Code<br/>*Example:* `"0000001"` | No |
| draft | boolean | Purchase invoice drafted<br/>*Example:* `false` | No |
| draftReferenceId | string | Draft reference id | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase invoice is created for drop ship<br/>*Example:* `true` | No |
| dueAmount | number | Amount Due<br/>*Example:* `12.322` | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `0.456345` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| id | long | Purchase invoice id<br/>*Example:* `1` | No |
| isPartialInvoice | boolean | Whether the Purchase Invoice is a partial invoice<br/>*Example:* `false` | No |
| journalEntryCode | string | Journal Entry Code<br/>*Example:* `"JE0001"` | No |
| knockoffInfo | [ [KnockOffInfo](#knockoffinfo) ] | KnockOff Info | No |
| landedCost | boolean | To mark landed cost bill<br/>*Example:* `true` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked Documents | No |
| memo | string | Memo<br/>*Example:* `"Memo details"` | No |
| openingDocumentNumber | string | Customer opening document number<br/>*Example:* `"DC-0001"` | No |
| openingInvoice | boolean | True if opening invoice<br/>*Example:* `false` | No |
| payableAccountCode | string | Code of Account<br/>*Example:* `"AC-000001"` | No |
| paymentMilestoneFlag | boolean | Payment milestone flag to indicate if payment milestones are set<br/>*Example:* `true` | No |
| paymentStatus | string | Purchase invoice payment status<br/>*Enum:* `"PENDING"`, `"PARTIAL"`, `"RECEIVED"`<br/>*Example:* `"PENDING"` | No |
| purchaseInvoiceAccounts | [ [PurchaseInvoiceAccountDetails](#purchaseinvoiceaccountdetails) ] | Purchase invoice Account item details | No |
| purchaseInvoiceAssets | [ [PurchaseInvoiceAssetGroupDetails](#purchaseinvoiceassetgroupdetails) ] |  | No |
| purchaseInvoiceCode | string | Purchase invoice code<br/>*Example:* `"SI001"` | No |
| purchaseInvoiceDate | string | Purchase Invoice date<br/>*Example:* `"25-10-2019"` | Yes |
| purchaseInvoiceDueDate | string | Purchase Invoice due date<br/>*Example:* `"25-10-2019"` | Yes |
| purchaseInvoiceProducts | [ [PurchaseInvoiceProductDetails](#purchaseinvoiceproductdetails) ] | Purchase invoice Product item details | No |
| purchaseInvoiceRecurring | [PurchaseInvoiceRecurringDetails](#purchaseinvoicerecurringdetails) | Purchase invoice item details | No |
| purchaseInvoiceType | string | Purchase invoice type.<br/>*Enum:* `"INVENTORY"`, `"EXPENSE"`, `"ASSET"`<br/>*Example:* `"INVENTORY"` | Yes |
| purchaseOrderRefNo | string | Contact PO reference number<br/>*Example:* `"CPO001"` | No |
| receiveByDate | dateTime | Receive by date<br/>*Example:* `"25-10-2019"` | No |
| receiveGoodsStatus | string | Purchase invoice receipt status<br/>*Enum:* `"UNRECEIVED"`, `"PARTIAL_RECEIVED"`, `"FULLY_RECEIVED"`, `"NOT_APPLICABLE"`<br/>*Example:* `"UNRECEIVED"` | No |
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

### ReceiveBulkPaymentDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Payment amount<br/>*Example:* `100` | No |
| amountInBaseCurrency | number | Payment amount in Base Currency<br/>*Example:* `100` | No |
| code | string | Sequence code<br/>*Example:* `"RBP-0000001"` | No |
| contactCode | string | Contact code.<br/>*Example:* `"C-0000001"` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| documentDate | dateTime | Payment Date<br/>*Example:* `"25-10-2019"` | No |
| exchangeRate | number | Exchange Rate<br/>*Example:* `1` | No |
| id | long |  | No |
| receivePaymentFeeDtoList | [ [ReceivePaymentFeeDto](#receivepaymentfeedto) ] | Transaction fee pertaining to the received payment | No |
| receivePaymentList | [ [AbstractReceivePaymentResponseDto«AbstractReceivePaymentItemDto»](#abstractreceivepaymentresponsedto«abstractreceivepaymentitemdto») ] | List of receive payments<br/>*Example:* `[]` | No |

### ReceiveBulkPaymentDto«ReceivePaymentResponseDto,ReceivePaymentItemResponseDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Payment amount<br/>*Example:* `100` | No |
| amountInBaseCurrency | number | Payment amount in Base Currency<br/>*Example:* `100` | No |
| code | string | Sequence code<br/>*Example:* `"RBP-0000001"` | No |
| contactCode | string | Contact code.<br/>*Example:* `"C-0000001"` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| documentDate | dateTime | Payment Date<br/>*Example:* `"25-10-2019"` | No |
| exchangeRate | number | Exchange Rate<br/>*Example:* `1` | No |
| id | long |  | No |
| receivePaymentFeeDtoList | [ [ReceivePaymentFeeDto](#receivepaymentfeedto) ] | Transaction fee pertaining to the received payment | No |
| receivePaymentList | [ [ReceivePaymentResponseDto](#receivepaymentresponsedto) ] | List of receive payments<br/>*Example:* `[]` | No |

### ReceiveBulkPaymentDto«ReceivePaymentResponseDtoIndia,ReceivePaymentItemResponseDtoIndia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Payment amount<br/>*Example:* `100` | No |
| amountInBaseCurrency | number | Payment amount in Base Currency<br/>*Example:* `100` | No |
| code | string | Sequence code<br/>*Example:* `"RBP-0000001"` | No |
| contactCode | string | Contact code.<br/>*Example:* `"C-0000001"` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| documentDate | dateTime | Payment Date<br/>*Example:* `"25-10-2019"` | No |
| exchangeRate | number | Exchange Rate<br/>*Example:* `1` | No |
| id | long |  | No |
| receivePaymentFeeDtoList | [ [ReceivePaymentFeeDto](#receivepaymentfeedto) ] | Transaction fee pertaining to the received payment | No |
| receivePaymentList | [ [ReceivePaymentResponseDtoIndia](#receivepaymentresponsedtoindia) ] | List of receive payments<br/>*Example:* `[]` | No |

### ReceiveBulkPaymentDto«ReceivePaymentResponseDtoIndonesia,ReceivePaymentItemResponseDtoIndonesia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Payment amount<br/>*Example:* `100` | No |
| amountInBaseCurrency | number | Payment amount in Base Currency<br/>*Example:* `100` | No |
| code | string | Sequence code<br/>*Example:* `"RBP-0000001"` | No |
| contactCode | string | Contact code.<br/>*Example:* `"C-0000001"` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| documentDate | dateTime | Payment Date<br/>*Example:* `"25-10-2019"` | No |
| exchangeRate | number | Exchange Rate<br/>*Example:* `1` | No |
| id | long |  | No |
| receivePaymentFeeDtoList | [ [ReceivePaymentFeeDto](#receivepaymentfeedto) ] | Transaction fee pertaining to the received payment | No |
| receivePaymentList | [ [ReceivePaymentResponseDtoIndonesia](#receivepaymentresponsedtoindonesia) ] | List of receive payments<br/>*Example:* `[]` | No |

### ReceiveBulkPaymentDto«ReceivePaymentResponseDtoIsrael,ReceivePaymentItemResponseDtoIsrael»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Payment amount<br/>*Example:* `100` | No |
| amountInBaseCurrency | number | Payment amount in Base Currency<br/>*Example:* `100` | No |
| code | string | Sequence code<br/>*Example:* `"RBP-0000001"` | No |
| contactCode | string | Contact code.<br/>*Example:* `"C-0000001"` | No |
| contactName | string | Contact name.<br/>*Example:* `"ABC PTE LTD"` | No |
| currency | string | Currency<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| documentDate | dateTime | Payment Date<br/>*Example:* `"25-10-2019"` | No |
| exchangeRate | number | Exchange Rate<br/>*Example:* `1` | No |
| id | long |  | No |
| receivePaymentFeeDtoList | [ [ReceivePaymentFeeDto](#receivepaymentfeedto) ] | Transaction fee pertaining to the received payment | No |
| receivePaymentList | [ [ReceivePaymentResponseDtoIsrael](#receivepaymentresponsedtoisrael) ] | List of receive payments<br/>*Example:* `[]` | No |

### ReceiveBulkPaymentDto«ReceivePaymentResponseDtoPhilippines,ReceivePaymentItemResponseDtoPhilippines»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Payment amount<br/>*