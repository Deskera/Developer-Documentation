---
id: expenseapi
title: Expense APIs
sidebar_label: Expense
---
You will be able to make an Expense entry for expenditure not related to a Bill. It is a special case of Make Payments APIs

More about [Expense API documentation](https://deskera.docs.apiary.io/#reference/make-payments-apis)

## API
---
### Search Expenses
Get Expenses by filter criteria. [More about search expenses](https://deskera.docs.apiary.io/#reference/make-payments-apis/v1paymentsmakeexpenses/fetch-expenses)

##### Description:

- Allows you to retrieve a list of all expenses.
- Allows you to retrieve a list of expenses based on it's filter criteria.

#### GET
#### /v1/payments/make/expenses
##### Request URL

```java
https://bifrost.deskera.com/v1/payments/make/expenses?limit=10&page=0&sort=createdAt&sortDir=desc
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/payments/make/expenses?query=documentDate%3E=2021-01-01,documentDate%3C=2021-12-31,&search=&SKIP_REQUEST_INTERCEPTOR=true&limit=10&page=0&sort=documentDate&sortDir=DESC" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
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
		"id": 16661,
		"code": "MP-0000001",
		"jeCode": "JE-0000004",
		"contactCode": "C-0000001",
		"contactName": "Sam",
		"currency": "SGD",
		"exchangeRate": 1,
		"accountCodePayFrom": "AC-0000001",
		"accountName": "Bank",
		"amount": 300,
		"amountDue": 0,
		"tax": 0,
		"subTotal": 300,
		"documentDate": "2021-03-24",
		"memo": "",
		"tenantId": 12345,
		"paymentType": "BANK_TRANSFER",
		"referenceNumber": "123",
		"referenceDate": "",
		"makePaymentItemDtoList": [{
			"id": 231,
			"documentType": "EXPENSE",
			"documentCode": "AC-0000052",
			"documentSequenceCode": null,
			"description": "Write-Off (Fixed Assets)",
			"exchangeRate": 1,
			"taxCode": "TX-0000002",
			"taxAmount": 0,
			"paymentAmount": 100,
			"tenantId": 68537,
			"accountName": "Write-Off (Fixed Assets)",
			"taxList": [{
				"id": 18203,
				"taxSeqCode": "TX-0000002",
				"taxCode": "TX (0%)",
				"taxName": "Purchase Tax (0%)",
				"taxId": 180426,
				"taxType": "TX (0%)",
				"taxApplyTo": "",
				"taxAmount": 0,
				"taxRate": 0,
				"taxableAmount": 100
			}],
			"customField": []
		}, {
			"id": 18000,
			"documentType": "EXPENSE",
			"documentCode": "AC-0000064",
			"documentSequenceCode": null,
			"description": "Undeposited Funds",
			"exchangeRate": 1,
			"taxCode": "TX-0000002",
			"taxAmount": 0,
			"paymentAmount": 200,
			"tenantId": 68537,
			"accountName": "Undeposited Funds",
			"taxList": [{
				"id": 18204,
				"taxSeqCode": "TX-0000002",
				"taxCode": "TX (0%)",
				"taxName": "Purchase Tax (0%)",
				"taxId": 180426,
				"taxType": "TX (0%)",
				"taxApplyTo": "",
				"taxAmount": 0,
				"taxRate": 0,
				"taxableAmount": 200
			}],
			"customField": []
		}],
		"gstExchangeRate": 1,
		"customField": []
	}],
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
	"totalElements": 1,
	"last": true,
	"totalPages": 1,
	"first": true,
	"sort": {
		"sorted": true,
		"unsorted": false,
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
| 200 | Expenses have been fetched successfully. | [MakePaymentDto](#makepaymentdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Create / Update Expense

Make a new expense entry. [More about create expense](https://deskera.docs.apiary.io/#reference/make-payments-apis/v1paymentsmakeexpense/make-expense-entry)

##### Description:

- Allows you to make a new expense.
- including the `id` parameter will update existing expense


#### POST
#### /v1/payments/make/expense
```java
https://bifrost.deskera.com/v1/payments/make/expense
```

##### Curl

```java
curl --request POST 'https://bifrost.deskera.com/v1/payments/make/expense' \
--header 'x-access-token: sampleAccessToken' \
--header 'Content-Type: application/json' \
--data-raw '{"accountName":"Bank","amount":300,"contactCode":"C-0000001","contactName":"Sam","currency":"SGD","documentDate":"2021-03-24","exchangeRate":1,"memo":"","paymentType":"BANK_TRANSFER","recurringActivated":false,"recurringPayment":false,"referenceDate":"","referenceNumber":"123","customField":[],"gstExchangeRate":1,"accountCodePayFrom":"AC-0000001","makePaymentItemDtoList":[{"description":"Write-Off (Fixed Assets)","documentCode":"AC-0000052","accountName":"Write-Off (Fixed Assets)","documentType":"EXPENSE","exchangeRate":1,"currency":"SGD","paymentAmount":100,"taxAmount":0,"taxCode":"TX-0000002","taxMappingDtoList":null,"customField":[]},{"description":"Undeposited Funds","documentCode":"AC-0000064","accountName":"Undeposited Funds","documentType":"EXPENSE","exchangeRate":1,"currency":"SGD","paymentAmount":200,"taxAmount":0,"taxCode":"TX-0000002","taxMappingDtoList":null,"customField":[]}],"attachmentIds":null}'
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDto](#makepaymentdto) |

##### Sample Request
```java
{
	"accountName": "Bank",
	"amount": 300,
	"contactCode": "C-0000001",
	"contactName": "Sam",
	"currency": "SGD",
	"documentDate": "2021-03-24",
	"exchangeRate": 1,
	"memo": "",
	"paymentType": "BANK_TRANSFER",
	"recurringActivated": false,
	"recurringPayment": false,
	"referenceDate": "",
	"referenceNumber": "123",
	"customField": [],
	"gstExchangeRate": 1,
	"accountCodePayFrom": "AC-0000001",
	"makePaymentItemDtoList": [{
		"description": "Write-Off (Fixed Assets)",
		"documentCode": "AC-0000052",
		"accountName": "Write-Off (Fixed Assets)",
		"documentType": "EXPENSE",
		"exchangeRate": 1,
		"currency": "SGD",
		"paymentAmount": 100,
		"taxAmount": 0,
		"taxCode": "TX-0000002",
		"taxMappingDtoList": null,
		"customField": []
	}, {
		"description": "Undeposited Funds",
		"documentCode": "AC-0000064",
		"accountName": "Undeposited Funds",
		"documentType": "EXPENSE",
		"exchangeRate": 1,
		"currency": "SGD",
		"paymentAmount": 200,
		"taxAmount": 0,
		"taxCode": "TX-0000002",
		"taxMappingDtoList": null,
		"customField": []
	}],
	"attachmentIds": null
}
```

##### Sample Response
```java
{
	"id": 16663,
	"parentPaymentId": null,
	"code": "MP-0000003",
	"jeCode": "JE-0000006",
	"contactCode": "C-0000001",
	"contactName": "Sam",
	"currency": "SGD",
	"exchangeRate": 1,
	"accountCodePayFrom": "AC-0000001",
	"accountName": "Bank",
	"paymentType": "BANK_TRANSFER",
	"referenceNumber": "123",
	"referenceDate": null,
	"amount": 300,
	"amountDue": 0,
	"documentDate": "2021-03-24T00:00:00.000+0000",
	"memo": "",
	"recurringPayment": false,
	"recurringActivated": false,
	"nextPaymentDate": null,
	"deleted": false,
	"tenantId": 68537,
	"makePaymentItemDtoList": [{
		"id": 18003,
		"documentType": "EXPENSE",
		"documentCode": "AC-0000052",
		"documentSequenceCode": null,
		"description": "Write-Off (Fixed Assets)",
		"exchangeRate": 1,
		"taxCode": "TX-0000002",
		"taxAmount": 0,
		"paymentAmount": 100,
		"tenantId": 68537,
		"accountName": "Write-Off (Fixed Assets)",
		"taxList": [{
			"id": 18207,
			"taxSeqCode": "TX-0000002",
			"taxCode": "TX (0%)",
			"taxName": "Purchase Tax (0%)",
			"taxId": 180426,
			"taxType": "TX (0%)",
			"taxApplyTo": "",
			"taxAmount": 0,
			"taxRate": 0,
			"taxableAmount": 100
		}],
		"customField": []
	}, {
		"id": 18004,
		"documentType": "EXPENSE",
		"documentCode": "AC-0000064",
		"documentSequenceCode": null,
		"description": "Undeposited Funds",
		"exchangeRate": 1,
		"taxCode": "TX-0000002",
		"taxAmount": 0,
		"paymentAmount": 200,
		"tenantId": 68537,
		"accountName": "Undeposited Funds",
		"taxList": [{
			"id": 18208,
			"taxSeqCode": "TX-0000002",
			"taxCode": "TX (0%)",
			"taxName": "Purchase Tax (0%)",
			"taxId": 180426,
			"taxType": "TX (0%)",
			"taxApplyTo": "",
			"taxAmount": 0,
			"taxRate": 0,
			"taxableAmount": 200
		}],
		"customField": []
	}],
	"makePaymentFeeDtoList": null,
	"knockoffInfo": null,
	"makePaymentRecurringDto": null,
	"gstExchangeRate": 1,
	"reconciled": false,
	"customField": [],
	"attachmentIds": null,
	"purchaseInvoice": null
}
```
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



### Create / Update Expense with Tax Group

Make a new expense entry. [More about expense with tax group](https://deskera.docs.apiary.io/#reference/make-payments-apis/v1paymentsmakeexpensetaxgroup/make-tax-group-expense-entry)

##### Description:

- Allows you to make a new expense.
- including the `id` parameter will update existing expense


#### POST
#### /v1/payments/make/expensetaxgroup
```java
https://bifrost.deskera.com/v1/payments/make/expensetaxgroup
```

##### Curl

```java
curl --location --request POST 'https://bifrost.deskera.com/v1/payments/make/expensetaxgroup' \
--header 'x-access-token: sampleAccessToken' \
--header 'Content-Type: application/json' \
--data-raw '{"accountName":"Bank","amount":431,"contactCode":"C-0000001","contactName":"Sam","currency":"SGD","documentDate":"2021-03-24","exchangeRate":1,"memo":"","paymentType":"BANK_TRANSFER","recurringActivated":false,"recurringPayment":false,"referenceDate":"2021-03-24","referenceNumber":"1231","customField":[],"gstExchangeRate":1,"accountCodePayFrom":"AC-0000001","makePaymentItemDtoList":[{"description":"Workers Compensation","documentCode":"AC-0000050","accountName":"Workers Compensation","documentType":"EXPENSE","exchangeRate":1,"currency":"SGD","paymentAmount":100,"taxAmount":null,"taxCode":"TX-0000032","taxMappingDtoList":null,"customField":[],"taxList":[{"taxAmount":5,"taxId":181447,"taxName":"UpdatedTaxAAgain","taxRate":5,"taxCode":"TX-0000032","taxSeqCode":"TX-0000032","taxType":"SALES","taxApplyTo":"PRE","taxableAmount":100},{"taxAmount":5,"taxId":181448,"taxName":"TaxB","taxRate":5,"taxCode":"TX-0000033","taxSeqCode":"TX-0000033","taxType":"SALES","taxApplyTo":"PRE","taxableAmount":100}]},{"description":"Round Off (Default)","documentCode":"AC-0000066","accountName":"Round Off (Default)","documentType":"EXPENSE","exchangeRate":1,"currency":"SGD","paymentAmount":300,"taxAmount":null,"taxCode":"TX-0000009","taxMappingDtoList":null,"customField":[],"taxList":[{"taxAmount":21,"taxId":180693,"taxName":"TX (7%)","taxRate":7,"taxCode":"TX (7%)","taxSeqCode":"TX-0000009","taxType":"PURCHASE","taxableAmount":300}]}],"attachmentIds":null}'
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDto](#makepaymentdto) |

##### Sample Request
```java
{
	"accountName": "Bank",
	"amount": 431,
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
	"referenceNumber": "1231",
	"customField": [],
	"gstExchangeRate": 1,
	"accountCodePayFrom": "AC-0000001",
	"makePaymentItemDtoList": [{
		"description": "Workers' Compensation",
		"documentCode": "AC-0000050",
		"accountName": "Workers' Compensation",
		"documentType": "EXPENSE",
		"exchangeRate": 1,
		"currency": "SGD",
		"paymentAmount": 100,
		"taxAmount": null,
		"taxCode": "TX-0000032",
		"taxMappingDtoList": null,
		"customField": [],
		"taxList": [{
			"taxAmount": 5,
			"taxId": 181447,
			"taxName": "UpdatedTaxAAgain",
			"taxRate": 5,
			"taxCode": "TX-0000032",
			"taxSeqCode": "TX-0000032",
			"taxType": "SALES",
			"taxApplyTo": "PRE",
			"taxableAmount": 100
		}, {
			"taxAmount": 5,
			"taxId": 181448,
			"taxName": "TaxB",
			"taxRate": 5,
			"taxCode": "TX-0000033",
			"taxSeqCode": "TX-0000033",
			"taxType": "SALES",
			"taxApplyTo": "PRE",
			"taxableAmount": 100
		}]
	}, {
		"description": "Round Off (Default)",
		"documentCode": "AC-0000066",
		"accountName": "Round Off (Default)",
		"documentType": "EXPENSE",
		"exchangeRate": 1,
		"currency": "SGD",
		"paymentAmount": 300,
		"taxAmount": null,
		"taxCode": "TX-0000009",
		"taxMappingDtoList": null,
		"customField": [],
		"taxList": [{
			"taxAmount": 21,
			"taxId": 180693,
			"taxName": "TX (7%)",
			"taxRate": 7,
			"taxCode": "TX (7%)",
			"taxSeqCode": "TX-0000009",
			"taxType": "PURCHASE",
			"taxableAmount": 300
		}]
	}],
	"attachmentIds": null
}
```

##### Sample Response
```java
{
	"id": 16664,
	"parentPaymentId": null,
	"code": "MP-0000004",
	"jeCode": "JE-0000022",
	"contactCode": "C-0000001",
	"contactName": "Sam",
	"currency": "SGD",
	"exchangeRate": 1,
	"accountCodePayFrom": "AC-0000001",
	"accountName": "Bank",
	"paymentType": "BANK_TRANSFER",
	"referenceNumber": "1231",
	"referenceDate": "2021-03-24T00:00:00.000+0000",
	"amount": 431.00,
	"amountDue": 0,
	"documentDate": "2021-03-24T00:00:00.000+0000",
	"memo": "",
	"recurringPayment": false,
	"recurringActivated": false,
	"nextPaymentDate": null,
	"deleted": false,
	"tenantId": 68558,
	"makePaymentItemDtoList": [{
		"id": 18007,
		"documentType": "EXPENSE",
		"documentCode": "AC-0000050",
		"documentSequenceCode": null,
		"description": "Workers' Compensation",
		"exchangeRate": 1,
		"taxCode": "TX-0000032",
		"taxAmount": 10.00,
		"paymentAmount": 100,
		"tenantId": 68558,
		"accountName": "Workers' Compensation",
		"taxList": [{
			"id": 18211,
			"taxSeqCode": "TX-0000032",
			"taxCode": "",
			"taxName": "UpdatedTaxAAgain",
			"taxId": 181447,
			"taxType": "SALES",
			"taxApplyTo": "PRE",
			"taxAmount": 5.00,
			"taxRate": 5,
			"taxableAmount": 100
		}, {
			"id": 18212,
			"taxSeqCode": "TX-0000033",
			"taxCode": "",
			"taxName": "TaxB",
			"taxId": 181448,
			"taxType": "SALES",
			"taxApplyTo": "PRE",
			"taxAmount": 5.00,
			"taxRate": 5,
			"taxableAmount": 100
		}],
		"customField": []
	}, {
		"id": 18008,
		"documentType": "EXPENSE",
		"documentCode": "AC-0000066",
		"documentSequenceCode": null,
		"description": "Round Off (Default)",
		"exchangeRate": 1,
		"taxCode": "TX-0000009",
		"taxAmount": 21.00,
		"paymentAmount": 300,
		"tenantId": 68558,
		"accountName": "Round Off (Default)",
		"taxList": [{
			"id": 18213,
			"taxSeqCode": "TX-0000009",
			"taxCode": "TX (7%)",
			"taxName": "TX (7%)",
			"taxId": 180693,
			"taxType": "TX (7%)",
			"taxApplyTo": "",
			"taxAmount": 21.00,
			"taxRate": 7,
			"taxableAmount": 300
		}],
		"customField": []
	}],
	"makePaymentFeeDtoList": null,
	"knockoffInfo": null,
	"makePaymentRecurringDto": null,
	"gstExchangeRate": 1,
	"reconciled": false,
	"customField": [],
	"attachmentIds": null,
	"purchaseInvoice": null
}
```
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

### Delete Expense

Delete expense information.

##### Description:

- Allows you to delete expense information.

#### DELETE
#### /v1/payments/make/{code}
##### Request URL

```java
https://bifrost.deskera.com/v1/payments/make/MP-0000001
```

##### Curl

```java
curl --location --request DELETE 'https://bifrost.deskera.com/v1/payments/make/MP-0000001' \
--header 'x-access-token: sampleAccessToken'
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | Payment Code | Yes | String |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 204 | Expense has been updated successfully. | |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with code not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

## Models

---

### MakePaymentDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayFrom | string | Account code. | No |
| accountName | string | Account name. | No |
| amount | number | Payment amount. | No |
| contactCode | string | Contact code. | No |
| contactName | string | Contact name. | No |
| currency | string | Currency code. | No |
| documentDate | dateTime | Document date. | No |
| exchangeRate | number | Exchange rate. | No |
| makePaymentItemDtoList | [ [MakePaymentItemDto](#makepaymentitemdto) ] | Make payment items information. | No |
| memo | string | Memo text. | No |
| nextPaymentDate | dateTime | Next payment date. | No |
| paymentType | string | Type of payment. | No |
| purchaseInvoice | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |  | No |
| recurringActivated | boolean | Recurring payment activated for payment. | No |
| recurringPayment | boolean | Recurring payment enable/disable for payment. | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque. | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque. | No |

### MakePaymentItemDto

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

### PurchaseInvoiceResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachmentIds | [ integer ] |  | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase invoice is backorder | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact details | Yes |
| contactCode | string | Contact Code | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| currency | string | Currency | Yes |
| documentSequenceCode | string | Purchase invoice Sequence Code | No |
| draft | boolean | Purchase invoice drafted | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase invoice is created for drop ship | No |
| dueAmount | number | Amount Due | No |
| exchangeRate | number | Exchange rate | No |
| id | long | Purchase invoice id | No |
| journalEntryCode | string | Journal Entry Code | No |
| memo | string | Memo | No |
| openingDocumentNumber | string | Customer opening document number | No |
| openingInvoice | boolean | True if opening invoice | No |
| payableAccountCode | string | Code of Account | No |
| paymentStatus | string | Purchase invoice payment status | No |
| purchaseInvoiceCode | string | Purchase invoice code | No |
| purchaseInvoiceDate | string | Purchase Invoice date | Yes |
| purchaseInvoiceDueDate | string | Purchase Invoice due date | Yes |
| purchaseInvoiceType | string | Purchase invoice type. | Yes |
| purchaseOrderRefNo | string | Contact PO reference number | No |
| receiveGoodsStatus | string | Purchase invoice receipt status | No |
| recurring | boolean | True if Invoice is recurring. | No |
| recurringActivated | boolean | True if Invoice recurrence is active. | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Invoice status | No |
| supplierInvoiceNo | string |  | No |
| taxAmount | number | Tax amount | No |
| totalAmount | number | Total amount | No |
| totalAmountInBaseCurrency | number | Total amount in base currency | No |
| totalTdsAmount | number | Total Tds Amount | No |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive | No |
| warehouseCode | string | Warehouse Code | No |

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
