---
id: invoice
title: Invoice Service
sidebar_label: Invoice
---

`Invoice`  is a document issued by a seller to the buyer that indicates the quantities and costs of the products or services provider by the seller. [Invoice](https://www.deskera.com/sg/books/create-invoices-with-deskera-books/) specifies what a buyer must pay the seller according to the seller’s payment terms. Payment terms indicate the maximum amount of time that a buyer has to pay for the goods and/or services that they have purchased from the seller.

## SalesInvoiceRequest Object

### Attributes
---
|Attribute| Type | Description |
|---------|------|-------------|
|openingInvoice|`boolean`|Has the value `true` if the invoice is opening invoice or `false` if the invoice is not opening invoice.|
|totalAmount        |`BigDecimal`|Total amount of invoice.|
|totalAmountInBaseCurrency|`BigDecimal`|Total amount of invoice converted to the base currency.|
|payableAccountCode|`string`|Account code of contact's account payable.|
|taxAmount        |`BigDecimal`|Tax amount of invoice.|
|tcsAmount|`BigDecimal`|TCS (Tax Collected at Source) amount of invoice.|
|tcsRateId|`long`|Identifier of the TCS rate applied to the invoice.|
|tcsPercentage|`BigDecimal`|TCS percentage applied to the invoice.|
|openingDocumentNumber|`string`|Opening document number of invoice.|
|warehouseCode|`string`|Warehouse code.|
|dropShip|`boolean`|Has the value `true` if the invoice created for drop ship or `false` if the invoice is not created for drop ship.|
|backOrder|`boolean`|Has the value `true` if the invoice is backorder or `false` if the invoice is not backorder.|
|paymentMilestoneFlag|`boolean`|Has the value `true` if the invoice is linked to a payment milestone or `false` otherwise.|
|status|`enum`|Status of the invoice. Possible values for [invoice status](#invoice_status).|
|customField        |`list`|List of key-value pairs for custom field name and its value.|
|roundOffAmountInBaseCurrency|`BigDecimal`|Round off amount of invoice in base currency.|
|roundOffAmountInDocumentCurrency|`BigDecimal`|Round off amount of invoice in document currency.|
|paymentStatus|`enum`|Payment status of the invoice. Possible values for [payment status](#payment_status).|
|attachmentIds        |`list`|List of attachment ids of invoice.|
|sgEInvoiceStatus|`string`|Singapore e-invoice status of the invoice.|
|paymentTerm|`string`|Payment term of the invoice.|
|eInvoiceStatus|`list`|List of e-invoice status details. Attributes of EInvoiceStatusDto.|
|buyerReference|`string`|Buyer reference of the invoice.|
|createdDate|`string`|Date on which the invoice was created.|
|createdBy|`long`|Identifier of the user who created the invoice.|
|multiApprovalDetails|`object`|Multi-level approval details for the invoice.|
|sgEInvoiceIRASStatus|`string`|Singapore IRAS e-invoice status of the invoice.|
|contactCode|`string`|Contact code.|
|linkedDocuments|`array`|Array of linked documents associated with invoice.|
|purchaseOrderRefNo|`string`|Purchase order reference number.|
|journalEntryCode|`string`|Journal entry code associated with invoice.|
|customerOrderNumber|`string`|Customer order number associated with invoice.|
|currency|`string`|Currency code of invoice.|
|exchangeRate|`BigDecimal`|Exchange rate.|
|gstExchangeRate|`BigDecimal`|GST exchange rate.|
|salesInvoiceDate|`string`|Sales invoice date.|
|salesInvoiceDueDate|`string`|Sales invoice due date.|
|memo|`string`|Memo of the invoice.|
|attachments|`array`|Array of file attachments.|
|unitPriceGstInclusive|`boolean`|Has the value `true` if the unit price is inclusive of GST or `false` if the unit price is exclusive of GST.|
|dueAmount|`BigDecimal`|Due amount of invoice.|
|recurring|`boolean`|Has the value `true` if the invoice is recurring invoice or `false` if the invoice is not recurring invoice.|
|recurringActivated|`boolean`|Has the value `true` if the recurring is activated for invoice or `false` if the recurring is de-activated for invoice.|
|salesInvoiceRecurring|`object`|Recurring details for the invoice. Attributes of [Sales Invoice Recurring Details](#salesinvoicerecurringdetails).|
|salesInvoiceItems        |`list`|List of items associated with invoice. Attributes of [Sales Invoice Items](#salesinvoiceitemdetails).|
|contact        |`object`|Contact information. Attributes for [ContactInfo](#contactinfo).|
|shipFrom        |`object`|Ship from address. Attributes for [Address](#address).|
|shipTo        |`object`|Ship to address. Attributes for [Address](#address).|
|billTo        |`object`|Bill to address. Attributes for [Address](#address).|
|shipByDate|`string`|Ship by date.|
|fulfillmentStatus|`enum`|Fulfillment status of invoice. Possible values for [Fulfillment status](#fulfillment_status).|
|fulfillmentType|`enum`|Fulfillment type of invoice.|
|isPartialInvoice|`boolean`|Has the value `true` if the invoice is a partial invoice or `false` otherwise.|
|paymentInformation|`object`|Payment information associated with the invoice.|
|reservedStock|`boolean`|Has the value `true` if stock is reserved for the invoice or `false` otherwise.|
|approvalStatus|`enum`|Approval status of the invoice. Possible values for [approval status](#approval_status).|
|additionalCharges|`object`|Additional charges applied to the invoice.|
|draftReferenceId|`string`|Draft reference identifier of the invoice.|
|draftSeqCode|`string`|Draft sequence code of the invoice.|
|poNumber|`string`|Purchase order number.|
|primaryExchangeRate|`BigDecimal`|Primary exchange rate of the invoice.|
|requestedBy|`long`|Identifier of the user who requested the invoice.|
|draft|`boolean`|Has the value `true` if the invoice is in draft state or `false` if the invoice is not in draft state.|
|fulfillmentComplete|`boolean`|Has the value `true` if auto fulfilled is required. or `false` if auto fulfilled is not required.|
|documentSequenceCode|`string`|Unique code is associated with invoice.|
|sequenceFormat|`string`|Sequence format id.|

## SalesInvoiceResponse Object

`SalesInvoiceResponse` includes all attributes of [SalesInvoiceRequest](#salesinvoicerequest-object), plus the following response-only attributes.

### Attributes
---
|Attribute| Type | Description |
|---------|------|-------------|
|id|`long`|Unique identifier for the invoice.|
|salesInvoiceCode|`string`|Unique code associated with the invoice.|
|withheldAmount|`BigDecimal`|Withheld amount of the invoice.|
|knockoffInfo|`array`|Array of knock-off information linked to the invoice.|
|tdsInfo|`array`|Array of TDS (Tax Deducted at Source) information linked to the invoice.|
|contactDto|`object`|Full contact details of the invoice's contact.|
|linkedDocHasPps|`boolean`|Has the value `true` if a linked document has a pick-pack-ship record or `false` otherwise.|
|attachmentsWithLink|`list`|List of attachment details including download links.|
|eInvoiceResponseStatus|`string`|Status returned from the e-invoice response.|
|eInvoiceResponseReason|`string`|Reason returned from the e-invoice response.|
|linkedCreditNote|`array`|Array of credit notes linked to the invoice.|
|linkedDebitNote|`array`|Array of debit notes linked to the invoice.|
|cogsAmount|`BigDecimal`|Cost of goods sold amount for the invoice.|
|createdBy|`long`|Identifier of the user who created the invoice.|
|updatedBy|`long`|Identifier of the user who last updated the invoice.|
|emailStatus|`string`|Status of the last email sent for the invoice.|
|bankTransactionFileCode|`string`|Bank transaction file code associated with the invoice.|
|printStatus|`string`|Print status of the invoice.|
|revertPrintStatusBy|`long`|Identifier of the user who reverted the print status.|
|revertPrintStatusOn|`Date`|Date on which the print status was reverted.|
|refundStatus|`enum`|Refund status of the invoice. Possible values for [refund status](#refund_status).|
|refundAmount|`BigDecimal`|Refunded amount of the invoice.|
|linkedRefundDocs|`array`|Array of refund documents linked to the invoice.|
|manuallyClosed|`boolean`|Has the value `true` if the invoice was manually closed or `false` otherwise.|
|shortClosedStatus|`enum`|Short-closed status of the invoice. Possible values for [short closed status](#short_closed_status).|

## API
---
### Create Invoice
Creates a new invoice.

#### Parameters
- [salesInvoiceRequest](#salesinvoicerequest-object) `SalesInvoiceRequest`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private InvoicesApiClient invoicesApiClient;
  
  public SalesInvoiceResponse createInvoice(SalesInvoiceRequest salesInvoiceRequest, String accessToken){
    return this.invoicesApiClient.createInvoice(salesInvoiceRequest, accessToken);
  }
```
---
### Retrieve Invoice
Retrieves the details of an existing invoice. You only need to supply the unique invoice code that was returned upon invoice creation.

#### Parameters
- invoiceCode `string`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private InvoicesApiClient invoicesApiClient;

  public SalesInvoiceResponse getInvoiceByCode(String invoiceCode, String accessToken){
    return this.invoicesApiClient.getInvoiceByCode(invoiceCode, accessToken);
  }
```
---
 

### List All Invoices
Returns list of invoices.

#### Parameters
- [accessToken](#access-token) `string`
- limit `int`
- page `int`
- [status](#invoice_status) `string`

#### Code

```java
  @Autowired
  private InvoicesApiClient invoicesApiClient;

  public SalesInvoices getAllSalesInvoice(String accessToken, Integer limit, Integer page, String status){
    return this.invoicesApiClient.getAllSalesInvoice(accessToken, limit, page, status);
  }
```
---
### Update Invoice
Updates the details of an existing invoice. You only need to supply the unique invoice code along with the updated fields.

#### Parameters
- invoiceCode `string`
- [salesInvoiceRequest](#salesinvoicerequest-object) `SalesInvoiceRequest`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private InvoicesApiClient invoicesApiClient;

  public SalesInvoiceResponse updateInvoice(String invoiceCode, SalesInvoiceRequest salesInvoiceRequest, String accessToken){
    return this.invoicesApiClient.updateInvoice(invoiceCode, salesInvoiceRequest, accessToken);
  }
```
---
### Delete Invoice
Deletes an existing invoice. You only need to supply the unique invoice code that was returned upon invoice creation.

#### Parameters
- invoiceCode `string`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private InvoicesApiClient invoicesApiClient;

  public void deleteInvoice(String invoiceCode, String accessToken){
    this.invoicesApiClient.deleteInvoice(invoiceCode, accessToken);
  }
```
---
### Send Invoice Email
Sends an existing invoice to a contact by email.

#### Parameters
- sendSalesInvoiceEmail `SendSalesInvoiceEmail`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private InvoicesApiClient invoicesApiClient;

  public void sendInvoiceEmail(SendSalesInvoiceEmail sendSalesInvoiceEmail, String accessToken){
    this.invoicesApiClient.sendInvoiceEmail(sendSalesInvoiceEmail, accessToken);
  }
```

## Objects
---

### Address
|Attribute|Type| Description|
|---------|----|------------|
|contactName|`string`|Name of the contact associated with the address.|
|address1|`string`|Address line 1.|
|address2|`string`|Address line 2.|
|country|`string`|Country.|
|countryCode|`string`|Country code.|
|state|`string`|State.|
|stateCode|`string`|State code.|
|city|`string`|City.|
|postalCode|`string`|Postal Code.|
|preferred|`boolean`|Has the value `true` if the address is default  or `false` if the address is not default address.|
|placeOfSupply|`string`|Place of supply.|
|destinationOfSupply|`string`|Destination of supply.|
|mobileCountryCode|`string`|Country code of the mobile number.|
|mobileNumber|`string`|Mobile number.|
|emailId|`string`|Email address.|
|customFields|`list`|List of key-value pairs for custom field name and its value.|

### ContactInfo
|Attribute|Type| Description|
|---------|----|------------|
|name|`string`|Contact name.|
|address|`string`|Address of the contact.|
|peppolId|`string`|PeppolId of the contact.|
|taxExempted|`boolean`|Has the value `true` if the contact is tax exempted or `false` otherwise.|

### SalesInvoiceItemDetails
|Attribute|Type| Description|
|---------|----|------------|
|id|`long`|Unique identifier for item.|
|productCode|`string`|Product code of the item.|
|documentSequenceCode|`string`|Unique code associated with the item.|
|productDescription|`string`|Product description of the item.|
|productQuantity|`BigDecimal`|Product quantity of the item.|
|uomQuantity|`BigDecimal`|Quantity of the item in its unit of measurement.|
|uomUnitPrice|`BigDecimal`|Unit price of the item in its unit of measurement.|
|documentUom|`long`|Unit of measurement identifier used on the document.|
|documentUOMSchemaDefinition|`object`|Unit of measurement schema definition used on the document.|
|unitPrice|`BigDecimal`|Unit price of the item.|
|discount|`BigDecimal`|Discount on the item.|
|discountInPercent|`boolean`|Has the value `true` if discount is in percentage. or `false` if discount is not in percentage.|
|preTaxGlobalDiscount|`BigDecimal`|Pre-tax global discount applied to the item.|
|taxCode|`string`|Tax code of the item.|
|taxAmount|`BigDecimal`|Tax amount of the item.|
|totalAmount|`BigDecimal`|Total amount of the item.|
|productOrder|`int`|Product view order.|
|salesInvoiceItemCode|`string`|Sales Invoice Item Code.|
|type|`enum`|Type of the item. Possible values for [ProductType](#producttype).|
|availableQuantity|`BigDecimal`|Available quantity of the item.|
|product|`object`|Product details of the item.|
|tax|`object`|Tax details of the item.|
|customField|`list`|List of key-value pairs for custom field name and its value.|
|linkedQuoteItem|`long`|Identifier of the quote item linked to this item.|
|linkedQuoteItemCode|`string`|Code of the quote item linked to this item.|
|isPartialInvoice|`boolean`|Has the value `true` if the item belongs to a partial invoice or `false` otherwise.|
|updatedPartialQuantity|`BigDecimal`|Updated quantity for a partial invoice item.|
|itemFulfillmentStatus|`enum`|Fulfillment status of the item. Possible values for [Fulfillment status](#fulfillment_status).|
|quantityFulfilled|`BigDecimal`|Total quantity fulfilled for the item.|
|quantityFulfilledByUser|`BigDecimal`|Quantity fulfilled manually by the user.|
|quantityFulfilledByFlowover|`BigDecimal`|Quantity fulfilled automatically via flowover.|
|fulfillmentByDoc|`array`|Array of fulfillment quantities grouped by document.|
|errors|`list`|List of error messages associated with the item.|
|lineNumber|`int`|Line number of the item.|
|taxDetails|`list`|List of tax mapping details for the item.|
|reservedQuantitiesData|`list`|List of reserved quantity details for the item.|
|allocationType|`string`|Allocation type of the item.|
|basePrice|`BigDecimal`|Base price of the item.|
|revRecDocumentItemDetails|`object`|Revenue recognition details linked to the item.|
|itemDiscountMethod|`enum`|Discount method applied to the item.|
|additionalCharges|`object`|Additional charges applied to the item.|
|lineRefNo|`string`|Line reference number of the item.|
|bomComponentGroupDetails|`object`|Bill-of-materials component group details for the item.|
|userSetTaxes|`boolean`|Has the value `true` if taxes were manually set by the user or `false` otherwise.|
|qtyConvertedToDropShip|`BigDecimal`|Quantity converted to drop ship.|
|qtyFulfilledFromToDropShip|`BigDecimal`|Quantity fulfilled from a drop ship conversion.|
|qtyConvertedToPps|`BigDecimal`|Quantity converted to pick-pack-ship.|
|qtyFulfilledFromPps|`BigDecimal`|Quantity fulfilled from pick-pack-ship.|
|isShortClosed|`boolean`|Has the value `true` if the item is short closed or `false` otherwise.|
|shortClosedQuantity|`BigDecimal`|Quantity that was short closed.|
|shortClosedNotes|`string`|Notes recorded when the item was short closed.|
|isLocalizedUomQty|`boolean`|Has the value `true` if the unit of measurement quantity is localized or `false` otherwise.|
|localizedBaseQtyDiff|`BigDecimal`|Difference in base quantity due to localization.|
|unlocalizedDocumentUOMSchemaDefinition|`object`|Unit of measurement schema definition before localization.|
|invoiceLineNumber|`string`|Invoice line number of the item.|
|landedCostWeight|`BigDecimal`|Landed cost weight of the item.|

### SalesInvoiceRecurringDetails
|Attribute|Type| Description|
|---------|----|------------|
|id|`long`|Unique identifier for item.|
|recurrenceType|`int`|Every x Days/Weeks/Months.|
|recurrenceFrequency|`enum`|Recurrence frequency. Possible values for [Recurring Frequency Type](#recurring_frequency_type).|
|invoiceRecurringCount|`int`|Number of Invoices to be created.|
|recurrenceEndDate|`string`|Recurrence End date.|


## Enums
---
### INVOICE_STATUS
- OPEN
- DRAFT
- CLOSED

### FULFILLMENT_STATUS
- UNFULFILLED
- PARTIAL_FULFILLED
- FULLY_FULFILLED
- PENDING_FOR_APPROVAL

### PAYMENT_STATUS
- PENDING
- PARTIAL
- RECEIVED

### ApprovalStatus
- APPROVED
- PENDING_FOR_APPROVAL
- EDITING
- REJECTED
- NOT_REQUIRED
- PULLED_BACK

### REFUND_STATUS
- NOT_REFUNDED
- PARTIALLY_REFUNDED
- FULLY_REFUNDED

### ShortClosedStatus
- NONE
- PARTIALLY_SHORT_CLOSED
- FULLY_SHORT_CLOSED

### ProductType
- TRACKED
- NONTRACKED
- BILL_OF_MATERIALS

### RECURRING_FREQUENCY_TYPE
- DAYS
- WEEK
- MONTH
