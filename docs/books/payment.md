---
id: payment
title: Payment Service
sidebar_label: Payment
---
`Payment` on account is any partial payment of an amount that is owed, either to you or by you, that is not matched to a specific invoice. If you [receive a payment](https://www.deskera.com/sg/books/accept-and-receive-payments-with-stripe/) (either full or partial payment) from a customer or make a payment to a vendor without making reference to a specific invoice this can be treated as a payment on account. The Payment service covers both directions of this flow: **Receive Payment** (money coming in from a contact) and **Make Payment** (money going out to a contact).

## ReceivePaymentDto Object

### Attributes
---
|Attribute| Type | Description |
|---------|------|-------------|
|id|`long`|Unique identifier for payment.|
|code|`string`|Payment code.|
|jeCode|`string`|Journal Entry code.|
|contactCode|`string`|code related to the contact making the payment.|
|contactName|`string`|Name of contact making the payment.|
|currency|`enum`|Currency code the payment is made in.<br/>*Example:* `"USD"`|
|exchangeRate|`BigDecimal`| Exchange rate.|
|primaryExchangeRate|`BigDecimal`| Exchange rate against the organization's primary currency.|
|accountCodePayTo|`string`|The account code payment is made to.|
|accountName| `string`|Name of payment account.|
|paymentType|`enum`|Payment type. Possible values for [Payment type](#payment_type).|
|referenceNumber|`string`|Reference number of Bank Transfer/cheque.|
|referenceDate|`string`|Date of Bank Transfer/cheque.|
|amount|`BigDecimal`| Payment amount.|
|amountDue|`BigDecimal`| Amount still due against this payment.|
|documentDate|`string`|Document date.|
|memo|`string`|Memo text.|
|deleted|`boolean`|Has the value `true` if the payment is deleted or `false` if the payment is not deleted.|
|tenantId|`long`|Tenant id to whom payment is associated with.|
|receivePaymentItemDtoList|`list`|Receive payment for item. Attributes of [ReceivePaymentItemDto](#receivepaymentitemdto).|
|knockoffInfo|`list`|List of knock-off details linking this payment to the documents it settles.|
|receivePaymentFeeDtoList|`list`|Receive payment for fee. Attributes of [ReceivePaymentFeeDto](#receivepaymentfeedto).|
|shipFrom|`object`|Ship from address. Attributes of [Address](#address).|
|shipTo|`object`|Ship to address. Attributes of [Address](#address).|
|billTo|`object`|Bill to address. Attributes of [Address](#address).|
|gstExchangeRate|`BigDecimal`|GST exchange rate.|
|reconciled|`boolean`|Has the value `true` if the payment has been reconciled or `false` otherwise.|
|isUnDepositedPayment|`boolean`|Has the value `true` if the payment is an undeposited payment or `false` otherwise.|
|unitPriceGstInclusive|`boolean`|Has the value `true` if unit prices are GST inclusive or `false` otherwise.|
|unDepositedEntriesReconciled|`list`|List of undeposited entries that have been reconciled against this payment.|
|journalEntryBankTransferRequestDto|`object`|Journal entry bank transfer request details.|
|customField|`list`|List of key-value pairs for custom field name and its value.|
|attachmentIds|`list`|List of attachment ids of the payment.|
|bankRuleId|`long`|Identifier of the bank rule applied to this payment.|
|opening|`boolean`|Has the value `true` if the payment is an opening balance entry or `false` otherwise.|
|errors|`list`|List of validation/processing error messages.|
|sentEmail|`boolean`|Has the value `true` if a receipt email has been sent for this payment or `false` otherwise.|
|interCompany|`boolean`|Has the value `true` if the payment is an inter-company transaction or `false` otherwise.|
|customerTypeIndia|`enum`|India-specific customer type classification.|
|vendorTypeIndia|`enum`|India-specific vendor type classification.|
|gstTreatmentIndia|`enum`|India-specific GST treatment classification.|
|gstIn|`string`|India GSTIN of the contact.|
|paymentTransTime|`string`|Transaction time of the payment.|
|roundOffAmountInBaseCurrency|`BigDecimal`|Round-off amount in the base currency.|
|roundOffAmountInDocumentCurrency|`BigDecimal`|Round-off amount in the document currency.|
|salesInvoice|`object`|Linked sales invoice details, when the payment is created against a sales invoice.|

## ReceivePaymentResponseDto Object

`ReceivePaymentResponseDto` includes all attributes of [ReceivePaymentDto](#receivepaymentdto-object) (except `salesInvoice`), plus the following response-only attributes.

|Attribute| Type | Description |
|---------|------|-------------|
|whtApplicable|`boolean`|Has the value `true` if withholding tax is applicable to this payment or `false` otherwise.|
|createdBy|`long`|Identifier of the user who created the payment.|
|updatedBy|`long`|Identifier of the user who last updated the payment.|

## API
---
### Create Receive Payment
Creates a new receive payment.

#### Parameters
- [receivePaymentDto](#receivepaymentdto-object) `ReceivePaymentDto`
- [accessToken](#access-token) `string`

#### Code
```java
  @Autowired
  private PaymentsApiClient paymentsApiClient;

  public ReceivePaymentResponseDto receivePayment(ReceivePaymentDto receivePaymentDto, String accessToken){
    return this.paymentsApiClient.receivePayment(receivePaymentDto, accessToken);
  }
```
---
### Retrieve Receive Payment
Retrieves the details of an existing receive payment. You only need to supply the unique payment code that was returned upon payment creation.

#### Parameters
- paymentCode `string`
- [accessToken](#access-token) `string`

#### Code
```java
  @Autowired
  private PaymentsApiClient paymentsApiClient;

  public ReceivePaymentDto getReceivePaymentByCode(String paymentCode, String accessToken){
    return this.paymentsApiClient.getReceivePaymentByCode(paymentCode, accessToken);
  }
```
---
### Update Receive Payment
Updates an existing receive payment.

#### Parameters
- id `long`
- [receivePaymentDto](#receivepaymentdto-object) `ReceivePaymentDto`
- [accessToken](#access-token) `string`

#### Code
```java
  @Autowired
  private PaymentsApiClient paymentsApiClient;

  public ReceivePaymentResponseDto updateReceivePayment(Long id, ReceivePaymentDto receivePaymentDto, String accessToken){
    return this.paymentsApiClient.updateReceivePayment(id, receivePaymentDto, accessToken);
  }
```
---
### Delete Receive Payment
Deletes an existing receive payment. You only need to supply the unique payment code that was returned upon payment creation.

#### Parameters
- paymentCode `string`
- [accessToken](#access-token) `string`

#### Code
```java
  @Autowired
  private PaymentsApiClient paymentsApiClient;

  public void deleteReceivePayment(String paymentCode, String accessToken){
    this.paymentsApiClient.deleteReceivePayment(paymentCode, accessToken);
  }
```
---
### List Receive Payments
Returns a paginated list of receive payments.

#### Parameters
- search `string`
- sort `string`
- sortDir `string`
- page `int`
- limit `int`
- [accessToken](#access-token) `string`

#### Code
```java
  @Autowired
  private PaymentsApiClient paymentsApiClient;

  public Page<ReceivePaymentResponseDto> searchReceivePayments(String search, String sort,
      String sortDir, Integer page, Integer limit, String accessToken){
    return this.paymentsApiClient.searchReceivePayments(search, sort, sortDir, page, limit, accessToken);
  }
```

## MakePaymentDto Object

### Attributes
---
|Attribute| Type | Description |
|---------|------|-------------|
|id|`long`|Unique identifier for payment.|
|parentPaymentId|`long`|Identifier of the parent payment, when this payment was split from another.|
|code|`string`|Payment code.|
|jeCode|`string`|Journal Entry code.|
|contactCode|`string`|code related to the contact being paid.|
|contactName|`string`|Name of contact being paid.|
|currency|`enum`|Currency code the payment is made in.<br/>*Example:* `"USD"`|
|exchangeRate|`BigDecimal`| Exchange rate.|
|primaryExchangeRate|`BigDecimal`| Exchange rate against the organization's primary currency.|
|accountCodePayFrom|`string`|The account code payment is made from.|
|accountName| `string`|Name of payment account.|
|paymentType|`enum`|Payment type. Possible values for [Payment type](#payment_type).|
|referenceNumber|`string`|Reference number of Bank Transfer/cheque.|
|referenceDate|`string`|Date of Bank Transfer/cheque.|
|amount|`BigDecimal`| Payment amount.|
|amountDue|`BigDecimal`| Amount still due against this payment.|
|documentDate|`string`|Document date.|
|memo|`string`|Memo text.|
|recurringPayment|`boolean`|Has the value `true` if the payment is set up to recur or `false` otherwise.|
|recurringActivated|`boolean`|Has the value `true` if the recurring schedule is currently active or `false` otherwise.|
|nextPaymentDate|`string`|Date the next recurring payment is due.|
|deleted|`boolean`|Has the value `true` if the payment is deleted or `false` if the payment is not deleted.|
|tenantId|`long`|Tenant id to whom payment is associated with.|
|makePaymentItemDtoList|`list`|Make payment for item. Attributes of [MakePaymentItemDto](#makepaymentitemdto).|
|makePaymentFeeDtoList|`list`|Make payment for fee. Attributes of [MakePaymentFeeDto](#makepaymentfeedto).|
|knockoffInfo|`list`|List of knock-off details linking this payment to the documents it settles.|
|makePaymentRecurringDto|`object`|Recurring payment schedule details.|
|gstExchangeRate|`BigDecimal`|GST exchange rate.|
|reconciled|`boolean`|Has the value `true` if the payment has been reconciled or `false` otherwise.|
|customField|`list`|List of key-value pairs for custom field name and its value.|
|attachmentIds|`list`|List of attachment ids of the payment.|
|bankRuleId|`long`|Identifier of the bank rule applied to this payment.|
|tdsPaymentInfoIndia|`object`|India-specific TDS payment information.|
|isTdsPaymentIndia|`boolean`|Has the value `true` if TDS applies to this payment (India) or `false` otherwise.|
|unitPriceGstInclusive|`boolean`|Has the value `true` if unit prices are GST inclusive or `false` otherwise.|
|tdsProcessedFlag|`boolean`|Has the value `true` if TDS has been processed for this payment or `false` otherwise.|
|status|`enum`|Print status of the payment.|
|opening|`boolean`|Has the value `true` if the payment is an opening balance entry or `false` otherwise.|
|errors|`list`|List of validation/processing error messages.|
|interCompany|`boolean`|Has the value `true` if the payment is an inter-company transaction or `false` otherwise.|
|customerTypeIndia|`enum`|India-specific customer type classification.|
|vendorTypeIndia|`enum`|India-specific vendor type classification.|
|gstTreatmentIndia|`enum`|India-specific GST treatment classification.|
|gstIn|`string`|India GSTIN of the contact.|
|billTo|`object`|Bill to address. Attributes of [Address](#address).|
|isSalesRefund|`boolean`|Has the value `true` if the payment represents a sales refund or `false` otherwise.|
|applyRcmCheck|`boolean`|Has the value `true` if the reverse charge mechanism check applies or `false` otherwise.|
|roundOffAmountInBaseCurrency|`BigDecimal`|Round-off amount in the base currency.|
|roundOffAmountInDocumentCurrency|`BigDecimal`|Round-off amount in the document currency.|
|refundedInvoiceCode|`string`|Code of the invoice this payment refunds, when applicable.|
|purchaseInvoice|`object`|Linked purchase invoice details, when the payment is created against a purchase invoice.|
|supplierInvoiceNo|`string`|Supplier's own invoice number.|
|tdsIds|`list`|List of TDS identifiers applied to this payment.|

## MakePaymentResponseDto Object

`MakePaymentResponseDto` includes all attributes of [MakePaymentDto](#makepaymentdto-object) (except `purchaseInvoice`, `supplierInvoiceNo` and `tdsIds`), plus the following response-only attributes.

|Attribute| Type | Description |
|---------|------|-------------|
|whtApplicable|`boolean`|Has the value `true` if withholding tax is applicable to this payment or `false` otherwise.|
|createdBy|`long`|Identifier of the user who created the payment.|
|updatedBy|`long`|Identifier of the user who last updated the payment.|

## API
---
### Create Make Payment
Creates a new make payment.

#### Parameters
- [makePaymentDto](#makepaymentdto-object) `MakePaymentDto`
- [accessToken](#access-token) `string`

#### Code
```java
  @Autowired
  private PaymentsApiClient paymentsApiClient;

  public MakePaymentResponseDto makePayment(MakePaymentDto makePaymentDto, String accessToken){
    return this.paymentsApiClient.makePayment(makePaymentDto, accessToken);
  }
```
---
### Retrieve Make Payment
Retrieves the details of an existing make payment. You only need to supply the unique payment code that was returned upon payment creation.

#### Parameters
- paymentCode `string`
- [accessToken](#access-token) `string`

#### Code
```java
  @Autowired
  private PaymentsApiClient paymentsApiClient;

  public MakePaymentDto getMakePaymentByCode(String paymentCode, String accessToken){
    return this.paymentsApiClient.getMakePaymentByCode(paymentCode, accessToken);
  }
```
---
### Update Make Payment
Updates an existing make payment.

#### Parameters
- id `long`
- [makePaymentDto](#makepaymentdto-object) `MakePaymentDto`
- [accessToken](#access-token) `string`

#### Code
```java
  @Autowired
  private PaymentsApiClient paymentsApiClient;

  public MakePaymentResponseDto updateMakePayment(Long id, MakePaymentDto makePaymentDto, String accessToken){
    return this.paymentsApiClient.updateMakePayment(id, makePaymentDto, accessToken);
  }
```
---
### Delete Make Payment
Deletes an existing make payment. You only need to supply the unique payment code that was returned upon payment creation.

#### Parameters
- paymentCode `string`
- [accessToken](#access-token) `string`

#### Code
```java
  @Autowired
  private PaymentsApiClient paymentsApiClient;

  public void deleteMakePayment(String paymentCode, String accessToken){
    this.paymentsApiClient.deleteMakePayment(paymentCode, accessToken);
  }
```
---
### List Make Payments
Returns a paginated list of make payments.

#### Parameters
- search `string`
- sort `string`
- sortDir `string`
- page `int`
- limit `int`
- [accessToken](#access-token) `string`

#### Code
```java
  @Autowired
  private PaymentsApiClient paymentsApiClient;

  public Page<MakePaymentResponseDto> searchMakePayments(String search, String sort,
      String sortDir, Integer page, Integer limit, String accessToken){
    return this.paymentsApiClient.searchMakePayments(search, sort, sortDir, page, limit, accessToken);
  }
```

## Objects
---
### ReceivePaymentItemDto
`ReceivePaymentItemResponseDto` (used inside [ReceivePaymentResponseDto](#receivepaymentresponsedto-object)) has the same attributes as `ReceivePaymentItemDto`.

|Attribute|Type| Description|
|---------|----|------------|
|id|`long`|Unique identifier for payment.|
|documentType|`string`|Product code of the item. Possible values for [document type](#document_type).|
|documentCode|`string`|Unique code for order.|
|documentSequenceCode|`string`|Sequence code of the document being paid against.|
|customerOrderNumber|`string`|Customer order number associated with the document.|
|description|`string`|Description of payment received.|
|exchangeRate|`BigDecimal`| Exchange rate.|
|taxCode|`string`|Code of selected tax.|
|taxAmount|`BigDecimal`| Tax Amount.|
|paymentAmount|`BigDecimal`| Amount to be paid.|
|tenantId|`long`|Tenant id to whom payment is associated with.|
|accountName|`string`|Name of payment account.|
|taxList|`list`| Tax List. Attributes of [TaxMappingDto](#taxmappingdto).|
|tdsInfoIndia|`object`|India-specific TDS information for this item.|
|isTdsApplicableContact|`boolean`|Has the value `true` if TDS applies at the contact level or `false` otherwise.|
|isTdsApplicableAccount|`boolean`|Has the value `true` if TDS applies at the account level or `false` otherwise.|
|customField|`list`|List of key-value pairs for custom field name and its value.|
|errors|`list`|List of validation/processing error messages.|
|supplierInvoiceNo|`string`|Supplier's own invoice number.|
|paymentId|`long`|Identifier for payment.|

### MakePaymentItemDto
`MakePaymentItemResponseDto` (used inside [MakePaymentResponseDto](#makepaymentresponsedto-object)) has the same attributes as `MakePaymentItemDto`. Both share the common item attributes listed under [ReceivePaymentItemDto](#receivepaymentitemdto) (`id`, `documentType`, `documentCode`, `documentSequenceCode`, `customerOrderNumber`, `description`, `exchangeRate`, `taxCode`, `taxAmount`, `paymentAmount`, `tenantId`, `accountName`, `taxList`, `paymentId`), plus the following.

|Attribute|Type| Description|
|---------|----|------------|
|tdsAccount|`string`|TDS account code applied to this item.|
|tdsRate|`BigDecimal`|TDS rate applied to this item.|
|tdsAmount|`BigDecimal`|TDS amount deducted for this item.|
|itcAdjustment|`enum`|Input Tax Credit adjustment type.|
|itcIneligibleType|`enum`|Input Tax Credit ineligibility type.|
|glAccountCode|`string`|General ledger account code for this item.|
|totalAmount|`BigDecimal`|Total amount for this item.|

### TaxMappingDto
|Attribute|Type| Description|
|---------|----|------------|
|id|`long`|Unique identifier for tax.|
|taxSeqCode|`string`|Sequence code of tax item.|
|taxCode|`string`|Code of tax.|
|taxName|`string`|Name of tax.|
|taxId|`BigDecimal`|Identifier of the tax.|
|taxType|`string`|Type of tax.|
|taxApplyTo|`string`|What the tax is applied to.|
|taxAmount|`BigDecimal`| Tax Amount.|
|taxRate|`BigDecimal`| Rate of Tax.|
|additionalTaxIn|`boolean`|Has the value `true` if this is an additional inclusive tax or `false` otherwise.|
|taxableAmount|`BigDecimal`| Amount to tax.|

### ReceivePaymentFeeDto
|Attribute|Type| Description|
|---------|----|------------|
|id|`long`|Unique identifier for payment fee.|
|accountCode|`string`|Code linked to the account used.|
|amount|`BigDecimal`| Fee amount.|
|tenantId|`long`|Tenant id to whom payment is associated with.|
|paymentId|`long`|Identifier for payment.|

### MakePaymentFeeDto
`MakePaymentFeeDto` has the same attributes as [ReceivePaymentFeeDto](#receivepaymentfeedto).

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
|contactName|`string`|Name of the contact associated with the address.|
|address1|`string`|Address Line 1.|
|address2|`string`|Address Line 2.|
|country|`string`|Country where the address is located.|
|countryCode|`string`|Country code of the address.|
|state|`string`|State where the address is located.|
|city|`string`|City where the address is located.|
|postalCode|`string`|Address postal code.|
|preferred|`boolean`|Has the value `true` if address is set as default or `false` if address is not set as default.|
|placeOfSupply|`string`|Place of supply for tax purposes.|
|destinationOfSupply|`string`|Destination of supply for tax purposes.|
|stateCode|`string`|State code of the address.|
|mobileCountryCode|`string`|Country code for the mobile number.|
|mobileNumber|`string`|Mobile number.|
|emailId|`string`|Email address.|
|customFields|`list`|List of key-value pairs for custom field name and its value.|

## Enums
---
### PAYMENT_TYPE
- CHEQUE
- CASH
- BANK_TRANSFER
- CARD
- OTHERS
- ACH

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

`DOCUMENT_TYPE` is a shared enum used across the wider Deskera platform; the values above are the ones relevant to payment documents. Other document types (e.g. `FULFILLMENT`, `WORK_ORDER`, `JOB_CARD`) also exist on this enum but aren't specific to Payment.
