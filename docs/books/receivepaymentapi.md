---
id: receivepaymentapi
title: Receive Payment APIs
sidebar_label: Receive Payment
---
Receive Payment will be under the sell module. You will be able to generate receipt for the payment made by the customer. The record would be saved and can be viewed from Payments Received in Transaction Records.

If you receive a payment (either full or partial payment) from a customer or make a payment to a vendor without making reference to a specific invoice this can be treated as a payment on account.

`PaymentDto` helps you to receive new payment, retrieve a particular payment, update payment, or retrieve a list of payments.

More about [Receive Payment API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bb6cc20c-8a66-4f41-8153-8140e23628b7)

## API
---
### Search Payment

Get receive payments by filter criteria. [More about search payment](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bb6cc20c-8a66-4f41-8153-8140e23628b7)

##### Description:

- Allows you to retrieve a list of all receive payments.
- Allows you to retrieve specific receive payments based on it's filter criteria.

#### GET
#### /v1/payments/receive
##### Request URL

[More about update payment](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bb6cc20c-8a66-4f41-8153-8140e23628b7)
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
| 200 | Receive Payment's have been fetched successfully. | [ReceivePaymentDto](#receivepaymentdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Receive Payment

Receive a new payment. [More about receive payment](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bb6cc20c-8a66-4f41-8153-8140e23628b7)

##### Description:

- Allows you to receive a new payment.

#### POST
#### /v1/payments/receive
##### Request URL

[More about update payment](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bb6cc20c-8a66-4f41-8153-8140e23628b7)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| receivePaymentDto | body | receivePaymentDto | Yes | [ReceivePaymentDto](#receivepaymentdto) |


##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ReceivePaymentDto](#receivepaymentdto) |
| 201 | Payment has been done successfully. | [ReceivePaymentDto](#receivepaymentdto) |
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

Update recieve payment information. [More about update payment](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bb6cc20c-8a66-4f41-8153-8140e23628b7)

##### Description:

- Allows you to update a specific recieve payment information.

#### PUT
#### /v1/payments/receive/{id}
##### Request URL

[More about update payment](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bb6cc20c-8a66-4f41-8153-8140e23628b7)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| receivePaymentDto | body | receivePaymentDto | Yes | [ReceivePaymentDto](#receivepaymentdto) |


##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Payment has been updated successfully. | [ReceivePaymentDto](#receivepaymentdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |


## receive-payment-controller
Receive Payment APIs.

### /v1/payments/receive
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



### /v1/payments/receive/bulk

#### POST
##### Summary

Receive payment.

##### Description

API to receive a new payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receivePaymentDtos | body | receivePaymentDtos | Yes | [ [ReceivePaymentDto](#receivepaymentdto) ] |

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

### /v1/payments/receive/bulk-pay

#### POST
##### Summary

Receive bulk payment.

##### Description

API to receive a new bulk payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receiveBulkPaymentDto | body | receiveBulkPaymentDto | Yes | [ReceiveBulkPaymentDto«ReceivePaymentResponseDto,ReceivePaymentItemResponseDto»](#receivebulkpaymentdto«receivepaymentresponsedto,receivepaymentitemresponsedto») |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ReceiveBulkPaymentDto](#receivebulkpaymentdto) |
| 201 | Payment has been done successfully. | [ReceiveBulkPaymentDto](#receivebulkpaymentdto) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/bulk-pay/{code}

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

### /v1/payments/receive/contact-due-amount

#### POST
##### Summary

Fetch Due amounts by contact codes

##### Description

API to fetch due amounts of contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Due amounts fetched successfully | [ [DueAmountResponse](#dueamountresponse) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Due amounts fetched failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |



### /v1/payments/receive/deposit/advance-payments-by-contact

#### GET
##### Summary

Get Advance Payment amounts by code.

##### Description

API to get Advance Payment amount by contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCode | query | contactCode | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Deposit details fetched successfully. | [DepositInformation](#depositinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Deposit not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/deposit/code/{code}/details

#### GET
##### Summary

Get Deposit details by code.

##### Description

API to get Deposit details by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Deposit details fetched successfully. | [DepositInformation](#depositinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Deposit not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |


### /v1/payments/receive/deposits/import

#### POST
##### Summary

Create multiple deposits via import

##### Description

API to create deposits via import.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receivePaymentDtos | body | receivePaymentDtos | Yes | [ [ReceivePaymentDto](#receivepaymentdto) ] |

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

### /v1/payments/receive/import-adv-opening

#### POST
##### Summary

Create multiple opening advance payment via import

##### Description

API to create opening advance payment via import.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| openingAdvpaymentRequests | body | openingAdvpaymentRequests | Yes | [ [ReceivePaymentDto](#receivepaymentdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkApiResponse](#bulkapiresponse) |
| 201 | Opening advance payment imported successfully. | [BulkApiResponse](#bulkapiresponse) |
| 400 | Failed to import opening advance payment. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/import-get-paid

#### POST
##### Summary

Import Get Paid.

##### Description

API to import get paid.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receivePaymentDtos | body | receivePaymentDtos | Yes | [ [ReceivePaymentDto](#receivepaymentdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkApiResponse](#bulkapiresponse) |
| 201 | Payment has been done successfully. | [BulkApiResponse](#bulkapiresponse) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/knock-off

#### PUT
##### Summary

Deposit-AdvancePayment knock-off and update its due amount

##### Description

API to update due amount for Deposit-AdvancePayment while knocking off with other documents

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
| 404 | Deposit-AdvancePayment entry not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/reconcile

#### POST
##### Summary

Reconcile transactions

##### Description

API to reconcile transactions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receiptCodes | body | receiptCodes | Yes | [ string ] |

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

### /v1/payments/receive/tax/count

#### POST
##### Summary

Get Receive Payment count for tax

##### Description

API to fetch Receive Payment count for tax

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| taxCodes | body | taxCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax Receive Payment count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |



### /v1/payments/receive/taxmapping

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

### /v1/payments/receive/undeposits

#### GET
##### Summary

Fetch Un-Deposited Receive Payments

##### Description

API to fetch Un-Deposited Receive payments.

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
| 200 | Un-Deposited Payment's have been fetched successfully. | [ReceivePaymentDto](#receivepaymentdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/unreconcile

#### POST
##### Summary

Unreconcile transactions

##### Description

API to unreconcile transactions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receiptCodes | body | receiptCodes | Yes | [ string ] |

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

### /v1/payments/receive/unreconciled

#### GET
##### Summary

Get unreconciled receipts/deposits

##### Description

API to get unreconciled receipts/deposits.

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
| 200 | Unreconciled receipts/deposits fetched successfully. | [ReconcileTransactionResponse](#reconciletransactionresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/update-knock-off

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

### /v1/payments/receive/{code}

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

---
## receive-payment-controller-indonesia
Receive Payment Indonesia APIs.

### /v1/payments/receive/id

#### GET
##### Summary

Fetch Receive Payments

##### Description

API to fetch existing make payments.

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
| 200 | Receive Payment's have been fetched successfully. | [ReceivePaymentDtoIndonesia](#receivepaymentdtoindonesia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Receive payment.

##### Description

API to receive a new payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receivePaymentDto | body | receivePaymentDto | Yes | [ReceivePaymentDtoIndonesia](#receivepaymentdtoindonesia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ReceivePaymentDtoIndonesia](#receivepaymentdtoindonesia) |
| 201 | Payment has been done successfully. | [ReceivePaymentDtoIndonesia](#receivepaymentdtoindonesia) |
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

### /v1/payments/receive/id/bank-deposit

#### DELETE
##### Summary

Delete Bank Deposit

##### Description

API to Delete Bank Deposit

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receivePaymentCode | query | receivePaymentCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Bank Deposit have been deleted successfully |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/id/bulk-pay

#### POST
##### Summary

Receive bulk payment.

##### Description

API to receive a new bulk payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receiveBulkPaymentDto | body | receiveBulkPaymentDto | Yes | [ReceiveBulkPaymentDto«ReceivePaymentResponseDtoIndonesia,ReceivePaymentItemResponseDtoIndonesia»](#receivebulkpaymentdto«receivepaymentresponsedtoindonesia,receivepaymentitemresponsedtoindonesia») |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ReceiveBulkPaymentDto](#receivebulkpaymentdto) |
| 201 | Payment has been done successfully. | [ReceiveBulkPaymentDto](#receivebulkpaymentdto) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/id/deposits

#### GET
##### Summary

Fetch Deposits

##### Description

API to fetch existing deposits.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactName | query | contactName | No | string |
| customfield | query | customfield | No | string |
| docType | query | docType | No | string |
| includeUndepositedFunds | query | includeUndepositedFunds | No | boolean |
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
| 200 | Deposits have been fetched successfully. | [ReceivePaymentDto](#receivepaymentdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/id/knock-off

#### PUT
##### Summary

Deposit-AdvancePayment knock-off and update its due amount

##### Description

API to update due amount for Deposit-AdvancePayment while knocking off with other documents

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
| 404 | Deposit-AdvancePayment entry not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/id/reconcile

#### POST
##### Summary

Reconcile transactions

##### Description

API to reconcile transactions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receiptCodes | body | receiptCodes | Yes | [ string ] |

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

### /v1/payments/receive/id/unreconciled

#### GET
##### Summary

Get unreconciled receipts/deposits

##### Description

API to get unreconciled receipts/deposits.

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
| 200 | Unreconciled receipts/deposits fetched successfully. | [ReconcileTransactionResponse](#reconciletransactionresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/id/{code}

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

### /v1/payments/receive/id/{id}

#### PUT
##### Summary

Update payment.

##### Description

API to update existing payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| receivePaymentDto | body | receivePaymentDto | Yes | [ReceivePaymentDtoIndonesia](#receivepaymentdtoindonesia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Payment has been updated successfully. | [ReceivePaymentDtoIndonesia](#receivepaymentdtoindonesia) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## receive-payment-controller-israel
Receive Payment Israel APIs.

### /v1/payments/receive/il

#### GET
##### Summary

Fetch Receive Payments

##### Description

API to fetch existing make payments.

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
| 200 | Receive Payment's have been fetched successfully. | [ReceivePaymentDtoIsrael](#receivepaymentdtoisrael) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Receive payment.

##### Description

API to receive a new payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receivePaymentDto | body | receivePaymentDto | Yes | [ReceivePaymentDtoIsrael](#receivepaymentdtoisrael) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ReceivePaymentDtoIsrael](#receivepaymentdtoisrael) |
| 201 | Payment has been done successfully. | [ReceivePaymentDtoIsrael](#receivepaymentdtoisrael) |
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

### /v1/payments/receive/il/bank-deposit

#### DELETE
##### Summary

Delete Bank Deposit

##### Description

API to Delete Bank Deposit

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receivePaymentCode | query | receivePaymentCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Bank Deposit have been deleted successfully |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/il/bulk-pay

#### POST
##### Summary

Receive bulk payment.

##### Description

API to receive a new bulk payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receiveBulkPaymentDto | body | receiveBulkPaymentDto | Yes | [ReceiveBulkPaymentDto«ReceivePaymentResponseDtoIsrael,ReceivePaymentItemResponseDtoIsrael»](#receivebulkpaymentdto«receivepaymentresponsedtoisrael,receivepaymentitemresponsedtoisrael») |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ReceiveBulkPaymentDto](#receivebulkpaymentdto) |
| 201 | Payment has been done successfully. | [ReceiveBulkPaymentDto](#receivebulkpaymentdto) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/il/deposits

#### GET
##### Summary

Fetch Deposits

##### Description

API to fetch existing deposits.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactName | query | contactName | No | string |
| customfield | query | customfield | No | string |
| docType | query | docType | No | string |
| includeUndepositedFunds | query | includeUndepositedFunds | No | boolean |
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
| 200 | Deposits have been fetched successfully. | [ReceivePaymentDto](#receivepaymentdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/il/knock-off

#### PUT
##### Summary

Deposit-AdvancePayment knock-off and update its due amount

##### Description

API to update due amount for Deposit-AdvancePayment while knocking off with other documents

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
| 404 | Deposit-AdvancePayment entry not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/il/reconcile

#### POST
##### Summary

Reconcile transactions

##### Description

API to reconcile transactions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receiptCodes | body | receiptCodes | Yes | [ string ] |

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

### /v1/payments/receive/il/unreconciled

#### GET
##### Summary

Get unreconciled receipts/deposits

##### Description

API to get unreconciled receipts/deposits.

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
| 200 | Unreconciled receipts/deposits fetched successfully. | [ReconcileTransactionResponse](#reconciletransactionresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/il/{code}

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

### /v1/payments/receive/il/{id}

#### PUT
##### Summary

Update payment.

##### Description

API to update existing payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| receivePaymentDto | body | receivePaymentDto | Yes | [ReceivePaymentDtoIsrael](#receivepaymentdtoisrael) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Payment has been updated successfully. | [ReceivePaymentDtoIsrael](#receivepaymentdtoisrael) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## receive-payment-controller-india
Receive Payment India APIs.

### /v1/payments/receive/in

#### GET
##### Summary

Fetch Receive Payments

##### Description

API to fetch existing make payments.

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
| 200 | Receive Payment's have been fetched successfully. | [ReceivePaymentDtoIndia](#receivepaymentdtoindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Receive payment.

##### Description

API to receive a new payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receivePaymentDto | body | receivePaymentDto | Yes | [ReceivePaymentDtoIndia](#receivepaymentdtoindia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ReceivePaymentDtoIndia](#receivepaymentdtoindia) |
| 201 | Payment has been done successfully. | [ReceivePaymentDtoIndia](#receivepaymentdtoindia) |
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

### /v1/payments/receive/in/bank-deposit

#### DELETE
##### Summary

Delete Bank Deposit

##### Description

API to Delete Bank Deposit

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receivePaymentCode | query | receivePaymentCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Bank Deposit have been deleted successfully |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/in/bulk-pay

#### POST
##### Summary

Receive bulk payment.

##### Description

API to receive a new bulk payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receiveBulkPaymentDto | body | receiveBulkPaymentDto | Yes | [ReceiveBulkPaymentDto«ReceivePaymentResponseDtoIndia,ReceivePaymentItemResponseDtoIndia»](#receivebulkpaymentdto«receivepaymentresponsedtoindia,receivepaymentitemresponsedtoindia») |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ReceiveBulkPaymentDto](#receivebulkpaymentdto) |
| 201 | Payment has been done successfully. | [ReceiveBulkPaymentDto](#receivebulkpaymentdto) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/in/deposit

#### POST
##### Summary

Make deposit entry

##### Description

API to make deposit entry.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receivePaymentDto | body | receivePaymentDto | Yes | [ReceivePaymentDtoIndia](#receivepaymentdtoindia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ReceivePaymentDto](#receivepaymentdto) |
| 201 | Deposit has been done successfully. | [ReceivePaymentDto](#receivepaymentdto) |
| 400 | Deposit failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/in/deposits

#### GET
##### Summary

Fetch Deposits

##### Description

API to fetch existing deposits.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactName | query | contactName | No | string |
| customfield | query | customfield | No | string |
| docType | query | docType | No | string |
| includeUndepositedFunds | query | includeUndepositedFunds | No | boolean |
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
| 200 | Deposits have been fetched successfully. | [ReceivePaymentDto](#receivepaymentdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/in/import-get-paid

#### POST
##### Summary

Import Get Paid.

##### Description

API to import get paid.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receivePaymentDtos | body | receivePaymentDtos | Yes | [ [ReceivePaymentDtoIndia](#receivepaymentdtoindia) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkApiResponse](#bulkapiresponse) |
| 201 | Payment has been done successfully. | [BulkApiResponse](#bulkapiresponse) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/in/reconcile

#### POST
##### Summary

Reconcile transactions

##### Description

API to reconcile transactions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receiptCodes | body | receiptCodes | Yes | [ string ] |

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

### /v1/payments/receive/in/unreconciled

#### GET
##### Summary

Get unreconciled receipts/deposits

##### Description

API to get unreconciled receipts/deposits.

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
| 200 | Unreconciled receipts/deposits fetched successfully. | [ReconcileTransactionResponse](#reconciletransactionresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/in/{code}

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

### /v1/payments/receive/in/{id}

#### PUT
##### Summary

Update payment.

##### Description

API to update existing payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| receivePaymentDto | body | receivePaymentDto | Yes | [ReceivePaymentDtoIndia](#receivepaymentdtoindia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Payment has been updated successfully. | [ReceivePaymentDtoIndia](#receivepaymentdtoindia) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## receive-payment-controller-philippines
Receive Payment Philippines APIs.

### /v1/payments/receive/ph

#### GET
##### Summary

Fetch Receive Payments

##### Description

API to fetch existing make payments.

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
| 200 | Receive Payment's have been fetched successfully. | [ReceivePaymentDtoPhilippines](#receivepaymentdtophilippines) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Receive payment.

##### Description

API to receive a new payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receivePaymentDto | body | receivePaymentDto | Yes | [ReceivePaymentDtoPhilippines](#receivepaymentdtophilippines) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ReceivePaymentDtoPhilippines](#receivepaymentdtophilippines) |
| 201 | Payment has been done successfully. | [ReceivePaymentDtoPhilippines](#receivepaymentdtophilippines) |
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

### /v1/payments/receive/ph/bank-deposit

#### DELETE
##### Summary

Delete Bank Deposit

##### Description

API to Delete Bank Deposit

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receivePaymentCode | query | receivePaymentCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Bank Deposit have been deleted successfully |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/ph/bulk-pay

#### POST
##### Summary

Receive bulk payment.

##### Description

API to receive a new bulk payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receiveBulkPaymentDto | body | receiveBulkPaymentDto | Yes | [ReceiveBulkPaymentDto«ReceivePaymentResponseDtoPhilippines,ReceivePaymentItemResponseDtoPhilippines»](#receivebulkpaymentdto«receivepaymentresponsedtophilippines,receivepaymentitemresponsedtophilippines») |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ReceiveBulkPaymentDto](#receivebulkpaymentdto) |
| 201 | Payment has been done successfully. | [ReceiveBulkPaymentDto](#receivebulkpaymentdto) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/ph/deposits

#### GET
##### Summary

Fetch Deposits

##### Description

API to fetch existing deposits.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactName | query | contactName | No | string |
| customfield | query | customfield | No | string |
| docType | query | docType | No | string |
| includeUndepositedFunds | query | includeUndepositedFunds | No | boolean |
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
| 200 | Deposits have been fetched successfully. | [ReceivePaymentDto](#receivepaymentdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/ph/knock-off

#### PUT
##### Summary

Deposit-AdvancePayment knock-off and update its due amount

##### Description

API to update due amount for Deposit-AdvancePayment while knocking off with other documents

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
| 404 | Deposit-AdvancePayment entry not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/ph/reconcile

#### POST
##### Summary

Reconcile transactions

##### Description

API to reconcile transactions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receiptCodes | body | receiptCodes | Yes | [ string ] |

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

### /v1/payments/receive/ph/unreconciled

#### GET
##### Summary

Get unreconciled receipts/deposits

##### Description

API to get unreconciled receipts/deposits.

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
| 200 | Unreconciled receipts/deposits fetched successfully. | [ReconcileTransactionResponse](#reconciletransactionresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/receive/ph/{code}

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

### /v1/payments/receive/ph/{id}

#### PUT
##### Summary

Update payment.

##### Description

API to update existing payment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| receivePaymentDto | body | receivePaymentDto | Yes | [ReceivePaymentDtoPhilippines](#receivepaymentdtophilippines) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Payment has been updated successfully. | [ReceivePaymentDtoPhilippines](#receivepaymentdtophilippines) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## data-correction-controller
Data Correction Controller

### /v1/payments/datacorrect/mappedinvoices

#### GET
##### Summary

getPaymentForInvoices

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| invoice | query | invoice | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [MakePaymentDto](#makepaymentdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## payment-integration-controller
Payment Integration APIs.

### /v1/payments/integrations/configured-payment-accounts

#### GET
##### Summary

Get connected payment accounts.

##### Description

API to get connected payment accounts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentCurrency | query | documentCurrency | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Connected payment accounts fetched successfully. | object |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Connected payment accounts not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/payments/integrations/payment-link

#### POST
##### Summary

Get payment link for document

##### Description

API to get payment link for document.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| paymentLinkRequestDto | body | paymentLinkRequestDto | Yes | [PaymentLinkRequestDto](#paymentlinkrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Getting payment link successfully. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Getting payment link failed. |  |

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
| referenceDate | dateTime | Date of 