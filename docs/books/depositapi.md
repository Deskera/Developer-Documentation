---
id: depositapi
title: Deposit APIs
sidebar_label: Deposit
---
You will be able to make a Deposit entry for payments received not related to an Invoice. It is a special case of Receive Payments APIs

More about [Deposit API documentation](https://deskera.docs.apiary.io/#reference/receive-payments-apis)

## API
---
### Search Deposits
Get Deposits by filter criteria. [More about search deposits](https://deskera.docs.apiary.io/#reference/receive-payments-apis/v1paymentsreceive/get-receive-payments-by-filter-criteria)

##### Description:

- Allows you to retrieve a list of all deposits.
- Allows you to retrieve a list of deposits based on it's filter criteria.

#### GET
#### /v1/payments/receive/deposits
##### Request URL

```java
https://bifrost.deskera.com/v1/payments/receive/deposits?limit=10&page=0&sort=createdAt&sortDir=desc
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/payments/receive/deposits?query=documentDate%3E=2021-01-01,documentDate%3C=2021-12-31,&search=&SKIP_REQUEST_INTERCEPTOR=true&limit=10&page=0&sort=documentDate&sortDir=DESC" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
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
	"content": [{
		"id": 23252,
		"code": "RP-0000005",
		"jeCode": "JE-0000023",
		"contactCode": "C-0000001",
		"contactName": "Sam",
		"currency": "SGD",
		"exchangeRate": 1,
		"accountCodePayTo": "AC-0000001",
		"accountName": "Bank",
		"amount": 353.10,
		"amountDue": 0,
		"tax": 23.10,
		"subTotal": 330,
		"documentDate": "2021-03-24",
		"memo": "",
		"tenantId": 68558,
		"paymentType": "BANK_TRANSFER",
		"referenceNumber": "123123",
		"referenceDate": "2021-03-24",
		"gstExchangeRate": 1,
		"receivePaymentItemDtoList": [{
			"id": 24367,
			"documentType": "DEPOSIT",
			"documentCode": "AC-0000054",
			"documentSequenceCode": null,
			"description": "Write-Off (Fixed Assets)",
			"exchangeRate": 1,
			"taxCode": "TX-0000001",
			"taxAmount": 7.00,
			"paymentAmount": 100,
			"tenantId": 68558,
			"accountName": "Write-Off (Fixed Assets)",
			"taxList": [{
				"id": 18214,
				"taxSeqCode": "TX-0000001",
				"taxCode": "SR (7%)",
				"taxName": "SR (7%)",
				"taxId": 180685,
				"taxType": "SR (7%)",
				"taxApplyTo": "",
				"taxAmount": 7.00,
				"taxRate": 7,
				"taxableAmount": 100
			}],
			"customField": []
		}, {
			"id": 24368,
			"documentType": "DEPOSIT",
			"documentCode": "AC-0000063",
			"documentSequenceCode": null,
			"description": "Manufacturing overhead account",
			"exchangeRate": 1,
			"taxCode": "TX-0000008",
			"taxAmount": 16.10,
			"paymentAmount": 230,
			"tenantId": 68558,
			"accountName": "Manufacturing overhead account",
			"taxList": [{
				"id": 18215,
				"taxSeqCode": "TX-0000008",
				"taxCode": "SROVR (7%)",
				"taxName": "SROVR (7%)",
				"taxId": 180692,
				"taxType": "SROVR (7%)",
				"taxApplyTo": "",
				"taxAmount": 16.10,
				"taxRate": 7,
				"taxableAmount": 230
			}],
			"customField": []
		}],
		"receivePaymentFeeDtoList": [{
			"id": 136,
			"accountCode": "AC-0000062",
			"amount": 230,
			"tenantId": 68558
		}],
		"customField": []
	}],
	"pageable": {
		"sort": {
			"sorted": true,
			"unsorted": false,
			"empty": false
		},
		"offset": 0,
		"pageSize": 10,
		"pageNumber": 0,
		"unpaged": false,
		"paged": true
	},
	"totalElements": 1,
	"last": true,
	"totalPages": 1,
	"first": true,
	"sort": {
		"sorted": true,
		"unsorted": false,
		"empty": false
	},
	"size": 10,
	"number": 0,
	"numberOfElements": 1,
	"empty": false
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Deposits have been fetched successfully. | [ReceivePaymentDto](#receivepaymentdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Create / Update Deposit

Make a new deposit entry. [More about create deposits](https://deskera.docs.apiary.io/#reference/receive-payments-apis/v1paymentsreceivedeposit/make-deposit-entry)

##### Description:

- Allows you to make a new deposit.
- including the `id` parameter will update existing deposit


#### POST
#### /v1/payments/receive/deposit
```java
https://bifrost.deskera.com/v1/payments/receive/deposit
```

##### Curl

```java
curl --location --request POST 'https://bifrost.deskera.com/v1/payments/receive/deposit' \
--header 'x-access-token: sampleAccessToken' \
--header 'Content-Type: application/json' \
--data-raw '{"accountName":"Bank","amount":400,"contactCode":"C-0000001","contactName":"Sam","currency":"SGD","documentDate":"2021-03-24","exchangeRate":1,"memo":"","paymentType":"BANK_TRANSFER","recurringActivated":false,"recurringPayment":false,"referenceDate":"2021-03-24","referenceNumber":"123123","customField":[],"gstExchangeRate":1,"accountCodePayTo":"AC-0000001","receivePaymentItemDtoList":[{"description":"Interest Expenses","documentCode":"AC-0000058","accountName":"Interest Expenses","documentType":"DEPOSIT","exchangeRate":1,"currency":"SGD","paymentAmount":100,"taxAmount":0,"taxCode":"TX-0000001","taxMappingDtoList":null,"customField":[]},{"description":"Write-Off (Fixed Assets)","documentCode":"AC-0000052","accountName":"Write-Off (Fixed Assets)","documentType":"DEPOSIT","exchangeRate":1,"currency":"SGD","paymentAmount":300,"taxAmount":0,"taxCode":"TX-0000001","taxMappingDtoList":null,"customField":[]}],"receivePaymentFeeDtoList":[{"accountCode":"AC-0000059","amount":10}]}'
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| receivePaymentDto | body | receivePaymentDto | Yes | [RecceivePaymentDto](#receivePaymentDto) |

##### Sample Request
```java
{
	"accountName": "Bank",
	"amount": 400,
	"contactCode": "C-0000001",
	"contactName": "Sam",
	"currency": "SGD",
	"documentDate": "2021-03-24",
	"exchangeRate": 1,
	"memo": "",
	"paymentType": "BANK_TRANSFER",
	"recurringActivated": false,
	"recurringPayment": false,
	"referenceDate": "2021-03-24",
	"referenceNumber": "123123",
	"customField": [],
	"gstExchangeRate": 1,
	"accountCodePayTo": "AC-0000001",
	"receivePaymentItemDtoList": [{
		"description": "Interest Expenses",
		"documentCode": "AC-0000058",
		"accountName": "Interest Expenses",
		"documentType": "DEPOSIT",
		"exchangeRate": 1,
		"currency": "SGD",
		"paymentAmount": 100,
		"taxAmount": 0,
		"taxCode": "TX-0000001",
		"taxMappingDtoList": null,
		"customField": []
	}, {
		"description": "Write-Off (Fixed Assets)",
		"documentCode": "AC-0000052",
		"accountName": "Write-Off (Fixed Assets)",
		"documentType": "DEPOSIT",
		"exchangeRate": 1,
		"currency": "SGD",
		"paymentAmount": 300,
		"taxAmount": 0,
		"taxCode": "TX-0000001",
		"taxMappingDtoList": null,
		"customField": []
	}],
	"receivePaymentFeeDtoList": [{
		"accountCode": "AC-0000059",
		"amount": 10
	}]
}
```
##### Sample Response
```java
{
	"id": 23253,
	"code": "RP-0000001",
	"jeCode": "JE-0000007",
	"contactCode": "C-0000001",
	"contactName": "Sam",
	"currency": "SGD",
	"exchangeRate": 1,
	"accountCodePayTo": "AC-0000001",
	"accountName": "Bank",
	"paymentType": "BANK_TRANSFER",
	"referenceNumber": "123123",
	"referenceDate": "2021-03-24T00:00:00.000+0000",
	"amount": 400,
	"amountDue": 0,
	"documentDate": "2021-03-24T00:00:00.000+0000",
	"memo": "",
	"deleted": false,
	"tenantId": 68537,
	"receivePaymentItemDtoList": [{
		"id": 24369,
		"documentType": "DEPOSIT",
		"documentCode": "AC-0000058",
		"documentSequenceCode": null,
		"description": "Interest Expenses",
		"exchangeRate": 1,
		"taxCode": "TX-0000001",
		"taxAmount": 0,
		"paymentAmount": 100,
		"tenantId": 68537,
		"accountName": "Interest Expenses",
		"taxList": [{
			"id": 18216,
			"taxSeqCode": "TX-0000001",
			"taxCode": "SR (0%)",
			"taxName": "Sales Tax (0%)",
			"taxId": 180425,
			"taxType": "SR (0%)",
			"taxApplyTo": "",
			"taxAmount": 0,
			"taxRate": 0,
			"taxableAmount": 100
		}],
		"customField": []
	}, {
		"id": 24370,
		"documentType": "DEPOSIT",
		"documentCode": "AC-0000052",
		"documentSequenceCode": null,
		"description": "Write-Off (Fixed Assets)",
		"exchangeRate": 1,
		"taxCode": "TX-0000001",
		"taxAmount": 0,
		"paymentAmount": 300,
		"tenantId": 68537,
		"accountName": "Write-Off (Fixed Assets)",
		"taxList": [{
			"id": 18217,
			"taxSeqCode": "TX-0000001",
			"taxCode": "SR (0%)",
			"taxName": "Sales Tax (0%)",
			"taxId": 180425,
			"taxType": "SR (0%)",
			"taxApplyTo": "",
			"taxAmount": 0,
			"taxRate": 0,
			"taxableAmount": 300
		}],
		"customField": []
	}],
	"knockoffInfo": null,
	"receivePaymentFeeDtoList": [{
		"id": 137,
		"accountCode": "AC-0000059",
		"amount": 10,
		"tenantId": 68537
	}],
	"shipFrom": null,
	"shipTo": null,
	"billTo": null,
	"gstExchangeRate": 1,
	"reconciled": false,
	"isUnDepositedPayment": null,
	"unDepositedEntriesReconciled": null,
	"journalEntryBankTransferRequestDto": null,
	"customField": [],
	"salesInvoice": null
}
```
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



### Create / Update Deposit with Tax Group

Make a new deposit entry with tax group. [More about deposit with tax group](https://deskera.docs.apiary.io/#reference/receive-payments-apis/v1paymentsreceivetaxgroupdeposit/make-tax-group-deposit-entry)

##### Description:

- Allows you to make a new deposit.
- including the `id` parameter will update existing deposit


#### POST
#### /v1/payments/receive/taxgroupdeposit
```java
https://bifrost.deskera.com/v1/payments/receive/taxgroupdeposit
```

##### Curl

```java
curl --location --request POST 'https://bifrost.deskera.com/v1/payments/receive/taxgroupdeposit' \
--header 'x-access-token: sampleAccessToken' \
--header 'Content-Type: application/json' \
--data-raw '{"accountName":"Bank","amount":353.1,"contactCode":"C-0000001","contactName":"Sam","currency":"SGD","documentDate":"2021-03-24","exchangeRate":1,"memo":"","paymentType":"BANK_TRANSFER","recurringActivated":false,"recurringPayment":false,"referenceDate":"2021-03-24","referenceNumber":"123123","customField":[],"gstExchangeRate":1,"accountCodePayTo":"AC-0000001","receivePaymentItemDtoList":[{"description":"Write-Off (Fixed Assets)","documentCode":"AC-0000054","accountName":"Write-Off (Fixed Assets)","documentType":"DEPOSIT","exchangeRate":1,"currency":"SGD","paymentAmount":100,"taxAmount":null,"taxCode":"TX-0000001","taxMappingDtoList":null,"customField":[],"taxList":[{"taxAmount":7,"taxId":180685,"taxName":"SR (7%)","taxRate":7,"taxCode":"SR (7%)","taxSeqCode":"TX-0000001","taxType":"SALES","taxableAmount":100}]},{"description":"Manufacturing overhead account","documentCode":"AC-0000063","accountName":"Manufacturing overhead account","documentType":"DEPOSIT","exchangeRate":1,"currency":"SGD","paymentAmount":230,"taxAmount":null,"taxCode":"TX-0000008","taxMappingDtoList":null,"customField":[],"taxList":[{"taxAmount":16.1,"taxId":180692,"taxName":"SROVR (7%)","taxRate":7,"taxCode":"SROVR (7%)","taxSeqCode":"TX-0000008","taxType":"SALES","taxableAmount":230}]}],"receivePaymentFeeDtoList":[{"accountCode":"AC-0000062","amount":230}]}'
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| receivePaymentDto | body | receivePaymentDto | Yes | [ReceivePaymentDto](#receivepaymentdto) |

##### Sample Request
```java
{
	"accountName": "Bank",
	"amount": 353.1,
	"contactCode": "C-0000001",
	"contactName": "Sam",
	"currency": "SGD",
	"documentDate": "2021-03-24",
	"exchangeRate": 1,
	"memo": "",
	"paymentType": "BANK_TRANSFER",
	"recurringActivated": false,
	"recurringPayment": false,
	"referenceDate": "2021-03-24",
	"referenceNumber": "123123",
	"customField": [],
	"gstExchangeRate": 1,
	"accountCodePayTo": "AC-0000001",
	"receivePaymentItemDtoList": [{
		"description": "Write-Off (Fixed Assets)",
		"documentCode": "AC-0000054",
		"accountName": "Write-Off (Fixed Assets)",
		"documentType": "DEPOSIT",
		"exchangeRate": 1,
		"currency": "SGD",
		"paymentAmount": 100,
		"taxAmount": null,
		"taxCode": "TX-0000001",
		"taxMappingDtoList": null,
		"customField": [],
		"taxList": [{
			"taxAmount": 7,
			"taxId": 180685,
			"taxName": "SR (7%)",
			"taxRate": 7,
			"taxCode": "SR (7%)",
			"taxSeqCode": "TX-0000001",
			"taxType": "SALES",
			"taxableAmount": 100
		}]
	}, {
		"description": "Manufacturing overhead account",
		"documentCode": "AC-0000063",
		"accountName": "Manufacturing overhead account",
		"documentType": "DEPOSIT",
		"exchangeRate": 1,
		"currency": "SGD",
		"paymentAmount": 230,
		"taxAmount": null,
		"taxCode": "TX-0000008",
		"taxMappingDtoList": null,
		"customField": [],
		"taxList": [{
			"taxAmount": 16.1,
			"taxId": 180692,
			"taxName": "SROVR (7%)",
			"taxRate": 7,
			"taxCode": "SROVR (7%)",
			"taxSeqCode": "TX-0000008",
			"taxType": "SALES",
			"taxableAmount": 230
		}]
	}],
	"receivePaymentFeeDtoList": [{
		"accountCode": "AC-0000062",
		"amount": 230
	}]
}
```

##### Sample Response
```java
{
	"id": 23252,
	"code": "RP-0000005",
	"jeCode": "JE-0000023",
	"contactCode": "C-0000001",
	"contactName": "Sam",
	"currency": "SGD",
	"exchangeRate": 1,
	"accountCodePayTo": "AC-0000001",
	"accountName": "Bank",
	"paymentType": "BANK_TRANSFER",
	"referenceNumber": "123123",
	"referenceDate": "2021-03-24T00:00:00.000+0000",
	"amount": 353.10,
	"amountDue": 0,
	"documentDate": "2021-03-24T00:00:00.000+0000",
	"memo": "",
	"deleted": false,
	"tenantId": 68558,
	"receivePaymentItemDtoList": [{
		"id": 24367,
		"documentType": "DEPOSIT",
		"documentCode": "AC-0000054",
		"documentSequenceCode": null,
		"description": "Write-Off (Fixed Assets)",
		"exchangeRate": 1,
		"taxCode": "TX-0000001",
		"taxAmount": 7.00,
		"paymentAmount": 100,
		"tenantId": 68558,
		"accountName": "Write-Off (Fixed Assets)",
		"taxList": [{
			"id": 18214,
			"taxSeqCode": "TX-0000001",
			"taxCode": "SR (7%)",
			"taxName": "SR (7%)",
			"taxId": 180685,
			"taxType": "SR (7%)",
			"taxApplyTo": "",
			"taxAmount": 7.00,
			"taxRate": 7,
			"taxableAmount": 100
		}],
		"customField": []
	}, {
		"id": 24368,
		"documentType": "DEPOSIT",
		"documentCode": "AC-0000063",
		"documentSequenceCode": null,
		"description": "Manufacturing overhead account",
		"exchangeRate": 1,
		"taxCode": "TX-0000008",
		"taxAmount": 16.10,
		"paymentAmount": 230,
		"tenantId": 68558,
		"accountName": "Manufacturing overhead account",
		"taxList": [{
			"id": 18215,
			"taxSeqCode": "TX-0000008",
			"taxCode": "SROVR (7%)",
			"taxName": "SROVR (7%)",
			"taxId": 180692,
			"taxType": "SROVR (7%)",
			"taxApplyTo": "",
			"taxAmount": 16.10,
			"taxRate": 7,
			"taxableAmount": 230
		}],
		"customField": []
	}],
	"knockoffInfo": null,
	"receivePaymentFeeDtoList": [{
		"id": 136,
		"accountCode": "AC-0000062",
		"amount": 230,
		"tenantId": 68558
	}],
	"shipFrom": null,
	"shipTo": null,
	"billTo": null,
	"gstExchangeRate": 1,
	"reconciled": false,
	"isUnDepositedPayment": null,
	"unDepositedEntriesReconciled": null,
	"journalEntryBankTransferRequestDto": null,
	"customField": [],
	"salesInvoice": null
}
```
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

### Delete Deposit

Delete deposit information.

##### Description:

- Allows you to delete deposit information.

#### DELETE
#### /v1/payments/receive/{code}
##### Request URL

```java
https://bifrost.deskera.com/v1/payments/receive/RP-0000001
```

##### Curl

```java
curl --location --request DELETE 'https://bifrost.deskera.com/v1/payments/receive/RP-0000001' \
--header 'x-access-token: sampleAccessToken'
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | Payment Code | Yes | String |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 204 | Deposit has been updated successfully. | |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with code not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

## Models

---

### ReceivePaymentDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayTo | string | Account code. | No |
| accountName | string | Account name. | No |
| amount | number | Payment amount. | No |
| billTo | [Address](#address) | Bill to address | No |
| contactCode | string | Contact code. | No |
| contactName | string | Contact name. | No |
| currency | string | Currency code. | No |
| documentDate | dateTime | Document date. | No |
| exchangeRate | number | Exchange rate. | No |
| memo | string | Memo text. | No |
| paymentType | string | Type of payment. | No |
| receivePaymentFeeDtoList | [ [ReceivePaymentFeeDto](#receivepaymentfeedto) ] | Transaction fee pertaining to the received payment | No |
| receivePaymentItemDtoList | [ [ReceivePaymentItemDto](#receivepaymentitemdto) ] | Receive payment items information. | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque. | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque. | No |
| salesInvoice | [SalesInvoiceResponse](#salesinvoiceresponse) |  | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |

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

### ReceivePaymentFeeDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ReceivePaymentFeeDto | object |  |  |

### ReceivePaymentItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string | Account name. | No |
| description | string | Description of document. | No |
| documentCode | string | Document code. | No |
| documentType | string | Document type. | No |
| exchangeRate | number | Exchange rate. | No |
| paymentAmount | number | Payment amount. | No |
| taxAmount | number | Tax amount. | No |
| taxCode | string | Tax code. | No |
| taxList | [ [TaxMappingDto](#taxmappingdto) ] |  | No |

### SalesInvoiceResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachmentIds | [ integer ] |  | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if backorder created | No |
| billTo | [Address](#address) | Bill to address | No |
| contact | [ContactInfo](#contactinfo) | Contact details | Yes |
| contactCode | string | Contact Code | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| currency | string | Currency | Yes |
| documentSequenceCode | string | Sales invoice Sequence Code | No |
| draft | boolean | Sales invoice drafted | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase invoice is created for drop ship | No |
| dueAmount | number | Amount Due | No |
| exchangeRate | number | Exchange rate | No |
| fulfillmentStatus | string | Sales invoice fulfillment status | No |
| fulfillmentType | string | Fulfillment type: NONE, DEFAULT, PICK_PACK_SHIP, DROP_SHIP | No |
| id | long | Sales invoice id | No |
| journalEntryCode | string | Journal Entry Code | No |
| memo | string | Memo | No |
| openingDocumentNumber | string | Customer opening document number | No |
| openingInvoice | boolean | True if opening invoice | No |
| paymentStatus | string | Sales invoice payment status | No |
| purchaseOrderRefNo | string | Contact PO reference number | No |
| recurring | boolean | True if Invoice is recurring. | No |
| recurringActivated | boolean | True if Invoice recurrence is active. | No |
| salesInvoiceCode | string | Sales invoice code | No |
| salesInvoiceDate | string | Sales Invoice date | Yes |
| salesInvoiceDueDate | string | Sales Invoice due date | Yes |
| salesInvoiceItems | [ [SalesInvoiceItemDetails](#salesinvoiceitemdetails) ] | Sales invoice item details | No |
| shipByDate | string | Ship by date | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Invoice status | No |
| taxAmount | number | Tax amount | No |
| totalAmount | number | Total amount | No |
| totalAmountInBaseCurrency | number | Total amount in base currency | No |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive | No |
| warehouseCode | string | Warehouse Code | No |
| withheldAmount | number | Withheld Amount | No |

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

### SalesInvoiceItemDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQuantity | number | Total available quantity | No |
| discount | number | Discount | No |
| discountInPercent | boolean | Discount in percentage | No |
| documentSequenceCode | string | Product Document Sequence Code | Yes |
| id | long | ID | No |
| invoiceLineNumber | string | Invoice Line Number | No |
| productCode | string | Product code | Yes |
| productDescription | string | Product description | No |
| productOrder | integer | Product view order | No |
| productQuantity | number | Product quantity | Yes |
| salesInvoiceItemCode | string | Sales Invoice Item Code | No |
| taxAmount | number | Tax amount | No |
| taxCode | string | Tax code | No |
| totalAmount | number | Total amount | Yes |
| type | string | Product type | Yes |
| unitPrice | number | Product unit price | Yes |

### TaxMappingDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long |  | No |
| taxAmount | number |  | No |
| taxCode | string |  | No |
| taxRate | number |  | No |
| taxSeqCode | string |  | No |
| taxType | string |  | No |
| taxableAmount | number |  | No |