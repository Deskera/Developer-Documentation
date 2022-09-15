---
id: payment
title: Payment Service
sidebar_label: Payment
---
`Payment` on account is any partial payment of an amount that is owed, either to you or by you, that is not matched to a specific invoice. If you [receive a payment](https://www.deskera.com/sg/books/accept-and-receive-payments-with-stripe/) (either full or partial payment) from a customer or make a payment to a vendor without making reference to a specific invoice this can be treated as a payment on account.

## ReceivePaymentDTO Object

### Attributes
---
|Attribute| Type | Description |
|---------|------|-------------|
|id|`long`|Unique identifier for payment.|
|code|`string`|Payment code.|
|jeCode|`string`|Journal Entry code.|
|contactCode|`string`|code related to the contact making the payment.|
|contactName|`string`|Name of contact making the payment.|
|currency|`string`|The currency the payment is made in.|
|exchangeRate|`BigDecimal`| Exchange rate.|
|accountCodePayTo|`string`|The account code payment is made to.|
|accountName| `string`|Name of payment account.|
|paymentType|`enum`|Payment type. Possible values for [Payment type](#payment_type).|
|referenceNumber|`string`|Reference number of Bank Transfer/cheque.|
|referenceDate|`string`|Date of Bank Transfer/cheque.|
|amount|`BigDecimal`| Payment amount.|
|documentDate|`string`|Document date.|
|memo|`string`|Memo text.|
|deleted|`boolean`|Has the value `true` if the payment is deleted or `false` if the payment is not deleted.|
|tenantId|`long`|Tenant id to whom payment is associated with.|
|receivePaymentItemDtoList|`list`|Receive payment for item. Attributes of [Payment Item](#receivepaymentitemdto).|
|receivePaymentFeeDtoList|`list`|Receive payment for fee. Attributes of [Payment Fee](#receivepaymentfeedto).|
|shipFrom|`enum`|Ship from address.  Attributes of [Address](#address).|
|shipTo|`enum`|Ship to address. Attributes of [Address](#address).|
|billTo|`enum`|Bill to address. Attributes of [Address](#address).|

## API
---
### Receive Payment
Get detail of payment receive.

#### Code
```java
  @Autowired
  private PaymentsApiClient paymentsApiClient;

  public ReceivePaymentDto receivePayment(ReceivePaymentDto receivePaymentDto, String accessToken){
    return this.paymentsApiClient.receivePayment(fulfillmentRequest, accessToken);
  }
```

## Objects
---
### ReceivePaymentItemDto
|Attribute|Type| Description|
|---------|----|------------|
|id|`long`|Unique identifier for payment.|
|documentType|`string`|Product code of the item. Possible values for [document type](#document_type).|
|documentCode|`string`|Unique code for order.|
|description|`string`|Description of payment received.|
|exchangeRate|`BigDecimal`| Exchange rate.|
|taxCode|`string`|Code of selected tax.|
|taxAmount|`BigDecimal`| Tax Amount.|
|paymentAmount|`BigDecimal`| Amount to be paid.|
|tenantId|`long`|Tenant id to whom payment is associated with.|
|accountName|`string`|Name of payment account.|
|taxList|`list`| Tax List. Attributes of [Tax](#taxmappingdto).|
|paymentId|`long`|Identifier for payment.|

### TaxMappingDto
|Attribute|Type| Description|
|---------|----|------------|
|id|`long`|Unique identifier for tax.|
|taxSeqCode|`string`|Sequence code of tax item.|
|taxCode|`string`|Code of tax.|
|taxType|`string`|Type of tax.|
|taxAmount|`BigDecimal`| Tax Amount.|
|taxRate|`BigDecimal`| Rate of Tax.|
|taxableAmount|`BigDecimal`| Amount to tax.|

### ReceivePaymentFeeDto
|Attribute|Type| Description|
|---------|----|------------|
|id|`long`|Unique identifier for payment fee.|
|accountCode|`string`|Code linked to the account used.|
|amount|`BigDecimal`| Fee amount.|
|tenantId|`long`|Tenant id to whom payment is associated with.|
|paymentId|`long`|Identifier for payment.|

### Address
|Attribute|Type| Description|
|---------|----|------------|
|address1|`string`|Address Line 1.|
|address2|`string`|Address Line 2.|
|country|`string`|Country where the address is located.|
|state|`string`|State where the address is located.|
|city|`string`|City where the address is located.|
|postalCode|`string`|Address postal code.|
|preferred|`boolean`|Has the value `true` if address is set as default or `false` if address is not set as default.|

## Enums
---
### PAYMENT_TYPE
- CHEQUE
- CASH
- BANK_TRANSFER

### DOCUMENT_TYPE
- QUOTATION
- PURCHASE_ORDER
- SALES_ORDER
- PURCHASE_INVOICE
- SALES_INVOICE
- MAKE_PAYMENT
- RECEIVE_PAYMENT
- JOURNAL_ENTRY
- CREDIT_NOTE
- DEBIT_NOTE
- EXPENSE
- EXPENSE_PREPAYMENT
- DEPOSIT
- DEPOSIT_ADVPAYMENT