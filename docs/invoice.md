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
|payableAccountCode|`string`|Account code of contact's account payable.|
|taxAmount        |`BigDecimal`|Tax amount of invoice.|
|openingDocumentNumber|`string`|Opening document number of invoice.|
|warehouseCode|`string`|Warehouse code.|
|dropShip|`boolean`|Has the value `true` if the invoice created for drop ship or `false` if the invoice is not created for drop ship.|
|backOrder|`boolean`|Has the value `true` if the invoice is backorder or `false` if the invoice is not backorder.|
|status|`enum`|Status of the invoice. Possible values for [invoice status](#invoice_status).|
|customField        |`jsonobject`|Key-value pair for custom field name and its value.|
|attachmentIds        |`list`|Attachment ids of invoice.|
|contactCode|`string`|Contact code.|
|linkedDocuments|`array`|Array of linked documents associated with invoice.|
|purchaseOrderRefNo|`string`|Purchase order reference number.|
|journalEntryCode|`string`|Journal entry code associated with invoice.|
|currency|`string`|Currency code of invoice.|
|exchangeRate|`BigDecimal`|Exchange rate.|
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
|draft|`boolean`|Has the value `true` if the invoice is in draft state or `false` if the invoice is not in draft state.|
|fulfillmentComplete|`boolean`|Has the value `true` if auto fulfilled is required. or `false` if auto fulfilled is not required.|
|documentSequenceCode|`string`|Unique code is associated with invoice.|
|sequenceFormat|`string`|Sequence format id.|

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

## Objects
---

### Address
|Attribute|Type| Description|
|---------|----|------------|
|address1|`string`|Address line 1.|
|address2|`string`|Address line 2.|
|country|`string`|Country.|
|state|`string`|State.|
|city|`string`|City.|
|postalCode|`string`|Postal Code.|
|preferred|`boolean`|Has the value `true` if the address is default  or `false` if the address is not default address.|

### ContactInfo
|Attribute|Type| Description|
|---------|----|------------|
|name|`string`|Contact name.|
|address|`string`|Address of the contact.|
|peppolId|`string`|PeppolId of the contact.|

### SalesInvoiceItemDetails
|Attribute|Type| Description|
|---------|----|------------|
|id|`long`|Unique identifier for item.|
|productCode|`string`|Product code of the item.|
|productDescription|`string`|Product description of the item.|
|productQuantity|`BigDecimal`|Product quantity of the item.|
|unitPrice|`BigDecimal`|Unit price of the item.|
|discount|`BigDecimal`|Discount on the item.|
|discountInPercent|`boolean`|Has the value `true` if discount is in percentage. or `false` if discount is not in percentage.|
|taxCode|`string`|Tax code of the item.|
|taxAmount|`BigDecimal`|Tax amount of the item.|
|totalAmount|`BigDecimal`|Total amount of the item.|
|productOrder|`int`|Product view order.|
|salesInvoiceItemCode|`string`|Sales Invoice Item Code.|
|type|`object`|Type of the item. Possible values for [ProductType](#producttype).|

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

### ProductType
- TRACKED
- NONTRACKED
- BILL_OF_MATERIALS

### RECURRING_FREQUENCY_TYPE
- DAYS
- WEEK
- MONTH