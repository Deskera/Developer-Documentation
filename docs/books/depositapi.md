---
id: depositapi
title: Deposit APIs
sidebar_label: Deposit
---
You will be able to make a Deposit entry for payments received not related to an Invoice. It is a special case of Receive Payments APIs

More about [Deposit API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4571ab8c-61c2-42c7-97d3-5454be047607)

## API
---
### Search Deposits
Get Deposits by filter criteria. [More about search deposits](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4571ab8c-61c2-42c7-97d3-5454be047607)

##### Description:

- Allows you to retrieve a list of all deposits.
- Allows you to retrieve a list of deposits based on it's filter criteria.

#### GET
#### /v1/payments/receive/deposits
##### Request URL

[Deposit API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4571ab8c-61c2-42c7-97d3-5454be047607)

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
| --- | --- |
| Authorization | global |

---
### Create / Update Deposit

Make a new deposit entry. [More about create deposits](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4571ab8c-61c2-42c7-97d3-5454be047607)

##### Description:

- Allows you to make a new deposit.
- including the `id` parameter will update existing deposit


#### POST
#### /v1/payments/receive/deposit
[Deposit API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4571ab8c-61c2-42c7-97d3-5454be047607)
##### Parameters

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ReceivePaymentDto](#receivepaymentdto) |
| 201 | Deposit has been done successfully. | [ReceivePaymentDto](#receivepaymentdto) |
| 400 | Deposit failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

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

Make a new deposit entry with tax group. [More about deposit with tax group](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4571ab8c-61c2-42c7-97d3-5454be047607)

##### Description:

- Allows you to make a new deposit.
- including the `id` parameter will update existing deposit


#### POST
#### /v1/payments/receive/taxgroupdeposit
[Deposit API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4571ab8c-61c2-42c7-97d3-5454be047607)
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

### Delete Deposit

Delete deposit information.

##### Description:

- Allows you to delete deposit information.

#### DELETE
#### /v1/payments/receive/{code}
##### Request URL

[Deposit API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4571ab8c-61c2-42c7-97d3-5454be047607)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| receivePaymentCode | query | receivePaymentCode | Yes | string |

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
| receivePaymentItemDtoList | [ [ReceivePaymentItemDto](#receivepaymentitemdto) ] | Receive payment items information. | No |
| reconciled | boolean | Whether the current payment is reconciled or not. | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque.<br/>*Example:* `"2019-09-27"` | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque.<br/>*Example:* `"CH001"` | No |
| salesInvoice | [SalesInvoiceResponse](#salesinvoiceresponse) |  | No |
| sentEmail | boolean | Send Customer Email<br/>*Example:* `false` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| unDepositedEntriesReconciled | [ [UnDepositedEntriesReconciled](#undepositedentriesreconciled) ] | Reconciled un-deposited entries | No |
| unitPriceGstInclusive | boolean | Price is GST inclusive<br/>*Example:* `false` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |

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

### ReceivePaymentFeeDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ReceivePaymentFeeDto | object |  |  |

### ReceivePaymentDto

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
| receivePaymentItemDtoList | [ [ReceivePaymentItemDto](#receivepaymentitemdto) ] | Receive payment items information. | No |
| reconciled | boolean | Whether the current payment is reconciled or not. | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque.<br/>*Example:* `"2019-09-27"` | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque.<br/>*Example:* `"CH001"` | No |
| salesInvoice | [SalesInvoiceResponse](#salesinvoiceresponse) |  | No |
| sentEmail | boolean | Send Customer Email<br/>*Example:* `false` | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| unDepositedEntriesReconciled | [ [UnDepositedEntriesReconciled](#undepositedentriesreconciled) ] | Reconciled un-deposited entries | No |
| unitPriceGstInclusive | boolean | Price is GST inclusive<br/>*Example:* `false` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |

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
| address | string | Address<br/>*Example:* `"Raffles Place 1"` | No |
| name | string | Customer name<br/>*Example:* `"ABC Pte Ltd"` | Yes |
| peppolId | string | Peppol ID<br/>*Example:* `"u000:1109:uen"` | No |

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

### SalesInvoiceItemDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allocationType | string | Allocation Type<br/>*Example:* `"NORMAL"` | No |
| availableQuantity | number | Total available quantity<br/>*Example:* `3` | No |
| basePrice | number | Revenue Base price<br/>*Example:* `120` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Discount<br/>*Example:* `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>*Example:* `true` | No |
| documentSequenceCode | string | Product Document Sequence Code<br/>*Example:* `"P-0000001"` | Yes |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| errors | [ string ] | List of validation error messages | No |
| fulfillmentByDoc | [ [ItemQtyFulfilledByDoc](#itemqtyfulfilledbydoc) ] | Item Qty fulfilled by Fulfillment Doc<br/>*Example:* `[]` | No |
| id | long | ID<br/>*Example:* `2` | No |
| invoiceLineNumber | string | Invoice Line Number<br/>*Example:* `"ABSCDDSD1212"` | No |
| isPartialInvoice | boolean | Whether the Sales Invoice is a partial invoice<br/>*Example:* `false` | No |
| itemFulfillmentStatus | string | Item Fulfillment Status<br/>*Enum:* `"UNFULFILLED"`, `"PARTIAL_FULFILLED"`, `"FULLY_FULFILLED"`<br/>*Example:* `"UNFULFILLED"` | No |
| lineNumber | integer | Line Number<br/>*Example:* `1` | No |
| linkedQuoteItem | long | Quote Item linked to invoice item<br/>*Example:* `"QO-001"` | No |
| linkedQuoteItemCode | string | Linked quote item code<br/>*Example:* `"QO-002"` | No |
| product | [ProductResponse](#productresponse) | Product Response<br/>*Example:* `"product"` | No |
| productCode | string | Product code<br/>*Example:* `"P00001"` | Yes |
| productDescription | string | Product description<br/>*Example:* `"Apple watch"` | No |
| productOrder | integer | Product view order<br/>*Example:* `1` | No |
| productQuantity | number | Product quantity<br/>*Example:* `2` | Yes |
| quantityFulfilled | number | quantity fulfilled<br/>*Example:* `10` | No |
| quantityFulfilledByFlowover | number | Total Quantity Fulfilled By Flowover | Yes |
| quantityFulfilledByUser | number | Total Quantity Fulfilled By User | Yes |
| reservedQuantitiesData | [ [ReservedQuantityData](#reservedquantitydata) ] | Reserved quantity data<br/>*Example:* `[]` | No |
| revRecDocumentItemDetails | [RevRecDocumentItemDetails](#revrecdocumentitemdetails) | Item Revenue Details<br/>*Example:* `"revRecDocumentItemDetails"` | No |
| salesInvoiceItemCode | string | Sales Invoice Item Code<br/>*Example:* `"SII-000001"` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0.5` | No |
| taxCode | string | Tax code<br/>*Example:* `"GST7"` | No |
| totalAmount | number | Total amount<br/>*Example:* `2.3` | Yes |
| type | string | Product type<br/>*Enum:* `"TRACKED"`, `"NONTRACKED"`<br/>*Example:* `"TRACKED"` | Yes |
| unitPrice | number | Product unit price<br/>*Example:* `0.7` | Yes |
| uomQuantity | number | uom quantity<br/>*Example:* `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>*Example:* `2.3` | Yes |
| updatedPartialQuantity | number | partial invoice updated quantity<br/>*Example:* `10` | No |

### TaxMappingDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalTaxIn | boolean |  | No |
| id | long |  | No |
| taxAmount | number |  | No |
| taxApplyTo | string |  | No |
| taxCode | string |  | No |
| taxId | number |  | No |
| taxName | string |  | No |
| taxRate | number |  | No |
| taxSeqCode | string |  | No |
| taxType | string |  | No |
| taxableAmount | number |  | No |