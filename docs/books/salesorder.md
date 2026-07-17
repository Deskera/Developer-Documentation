---
id: salesorder
title: Sales Order Service
sidebar_label: Sales Order
---

`Sales Order` is a confirmation document a seller sends to a buyer before the goods or services are delivered. Once the order is fulfilled, it can be converted into an invoice for payment. Sales orders let you track product quantities and costs across the fulfillment lifecycle, from open, to partially fulfilled, to fully fulfilled.

## SalesOrderRequest Object

### Attributes
---
|Attribute| Type | Description |
|---------|------|-------------|
|openingSalesOrder|`boolean`|Has the value `true` if the sales order is an opening sales order or `false` otherwise.|
|totalAmount|`BigDecimal`|Total amount of the sales order.|
|totalAmountInBaseCurrency|`BigDecimal`|Total amount of the sales order in the tenant's base currency.|
|payableAccountCode|`string`|Account code of contact's account payable.|
|taxAmount|`BigDecimal`|Tax amount of the sales order.|
|tcsAmount|`BigDecimal`|TCS (Tax Collected at Source) amount of the sales order.|
|tcsRateId|`long`|Identifier of the TCS rate applied to the sales order.|
|tcsPercentage|`BigDecimal`|TCS percentage applied to the sales order.|
|openingDocumentNumber|`string`|Opening document number of the sales order.|
|warehouseCode|`string`|Warehouse code.|
|backOrder|`boolean`|Has the value `true` if the sales order is backorder or `false` if the sales order is not backorder.|
|status|`enum`|Status of the sales order. Possible values for [sales order status](#sales_order_status).|
|customField|`list`|List of key-value pairs for custom field name and its value.|
|roundOffAmountInBaseCurrency|`BigDecimal`|Round off amount of the sales order in base currency.|
|roundOffAmountInDocumentCurrency|`BigDecimal`|Round off amount of the sales order in document currency.|
|attachmentIds|`list`|List of attachment ids of the sales order.|
|paymentTerm|`string`|Payment term of the sales order.|
|buyerReference|`string`|Buyer reference of the sales order.|
|createdDate|`string`|Date on which the sales order was created.|
|primaryExchangeRate|`BigDecimal`|Exchange rate against the tenant's primary currency.|
|multiApprovalDetails|`object`|Multi-level approval details for the sales order.|
|sequenceFormat|`string`|Sequence format id.|
|fulfillmentType|`enum`|Fulfillment type of the sales order. Possible values for [fulfillment type](#fulfillment_type).|
|salesOrderDate|`string`|Sales order date.|
|salesOrderDueDate|`string`|Sales order due date.|
|shipByDate|`string`|Ship by date.|
|contactCode|`string`|Contact code.|
|linkedQuotationDocuments|`array`|Array of linked quotation documents.|
|linkedSalesInvoiceDocuments|`array`|Array of linked sales invoice documents.|
|linkedSalesInvoices|`list`|List of sales invoices linked to the sales order.|
|linkedWorkOrderDocuments|`array`|Array of linked work order documents.|
|purchaseOrderRefNo|`string`|Purchase order reference number.|
|customerOrderNumber|`string`|Customer order number associated with the sales order.|
|currency|`string`|Currency code of the sales order.|
|exchangeRate|`BigDecimal`|Exchange rate.|
|gstExchangeRate|`BigDecimal`|GST exchange rate.|
|memo|`string`|Memo of the sales order.|
|attachments|`array`|Array of file attachments.|
|unitPriceGstInclusive|`boolean`|Has the value `true` if the unit price is inclusive of GST or `false` if the unit price is exclusive of GST.|
|recurring|`boolean`|Has the value `true` if the sales order is recurring or `false` if the sales order is not recurring.|
|recurringActivated|`boolean`|Has the value `true` if the recurring is activated for the sales order or `false` if the recurring is de-activated.|
|salesOrderItems|`list`|List of items associated with the sales order. Attributes of [Sales Order Item Details](#salesorderitemdetails).|
|contact|`object`|Contact information.|
|shipFrom|`object`|Ship from address. Attributes for [Address](#address).|
|shipTo|`object`|Ship to address. Attributes for [Address](#address).|
|billTo|`object`|Bill to address. Attributes for [Address](#address).|
|fulfillmentStatus|`enum`|Fulfillment status of the sales order. Possible values for [fulfillment status](#fulfillment_status).|
|draft|`boolean`|Has the value `true` if the sales order is in draft state or `false` if the sales order is not in draft state.|
|draftReferenceId|`string`|Draft reference identifier of the sales order.|
|fulfillmentComplete|`boolean`|Has the value `true` if auto fulfilled is required or `false` if auto fulfilled is not required.|
|documentSequenceCode|`string`|Unique code associated with the sales order.|
|isPartialSalesOrder|`boolean`|Has the value `true` if the sales order is a partial sales order or `false` otherwise.|
|errors|`list`|List of validation error messages.|
|reservedStock|`boolean`|Has the value `true` if stock is reserved for the sales order or `false` otherwise.|
|approvalStatus|`enum`|Approval status of the sales order. Possible values for [approval status](#approval_status).|
|additionalCharges|`object`|Additional charges applied to the sales order.|
|seqCodeAlreadyDumped|`boolean`|Has the value `true` if the sequence code is already dumped or `false` otherwise.|
|poNumber|`string`|Purchase order number.|
|requestedBy|`long`|Identifier of the user who requested the sales order.|

## API
---
### Create Sales Order
Creates a new sales order.

#### Parameters
- [salesOrderRequest](#salesorderrequest-object) `SalesOrderRequest`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private SalesOrdersApiClient salesOrdersApiClient;

  public SalesOrderResponse createSalesOrder(SalesOrderRequest salesOrderRequest, String accessToken){
    return this.salesOrdersApiClient.createSalesOrder(salesOrderRequest, accessToken);
  }
```
---
### Retrieve Sales Order
Retrieves the details of an existing sales order. You only need to supply the unique sales order code that was returned upon sales order creation.

#### Parameters
- salesOrderCode `string`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private SalesOrdersApiClient salesOrdersApiClient;

  public SalesOrderResponse getSalesOrderByCode(String salesOrderCode, String accessToken){
    return this.salesOrdersApiClient.getSalesOrderByCode(salesOrderCode, accessToken);
  }
```
---
### List All Sales Orders
Returns a paginated list of sales orders.

#### Parameters
- [accessToken](#access-token) `string`
- search `string`
- customfield `string`
- sort `string`
- sortDir `string`
- page `int`
- limit `int`

#### Code

```java
  @Autowired
  private SalesOrdersApiClient salesOrdersApiClient;

  public Page<SalesOrderResponse> getSalesOrders(String search, String customfield, String sort, String sortDir,
      Integer page, Integer limit, String accessToken){
    return this.salesOrdersApiClient.getSalesOrders(search, customfield, sort, sortDir, page, limit, accessToken);
  }
```
---
### Update Sales Order
Updates the details of an existing sales order.

#### Parameters
- id `long`
- [salesOrderRequest](#salesorderrequest-object) `SalesOrderRequest`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private SalesOrdersApiClient salesOrdersApiClient;

  public SalesOrderResponse updateSalesOrder(Long id, SalesOrderRequest salesOrderRequest, String accessToken){
    return this.salesOrdersApiClient.updateSalesOrder(id, salesOrderRequest, accessToken);
  }
```
---
### Delete Sales Order
Deletes an existing sales order. You only need to supply the unique identifier that was returned upon sales order creation.

#### Parameters
- id `long`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private SalesOrdersApiClient salesOrdersApiClient;

  public void deleteSalesOrder(Long id, String accessToken){
    this.salesOrdersApiClient.deleteSalesOrder(id, accessToken);
  }
```
---
### Send Sales Order Email
Sends an existing sales order to a contact by email.

#### Parameters
- sendSalesOrderEmail `SendSalesOrderEmail`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private SalesOrdersApiClient salesOrdersApiClient;

  public void sendSalesOrderEmail(SendSalesOrderEmail sendSalesOrderEmail, String accessToken){
    this.salesOrdersApiClient.sendSalesOrderEmail(sendSalesOrderEmail, accessToken);
  }
```

## Objects
---

### SalesOrderResponse
`SalesOrderResponse` includes all attributes of [SalesOrderRequest](#salesorderrequest-object), plus the following response-only attributes.

|Attribute|Type| Description|
|---------|----|------------|
|id|`long`|Unique identifier for the sales order.|
|salesOrderCode|`string`|Unique code associated with the sales order.|
|contactDto|`object`|Full contact details of the sales order's contact.|
|attachmentsWithLink|`list`|List of attachment details including download links.|
|amountPaid|`BigDecimal`|Amount already paid against the sales order.|
|balanceDue|`BigDecimal`|Balance amount still due on the sales order.|
|productionStatus|`string`|Production status of the sales order.|
|orderProgress|`list`|List of progress details for the sales order.|
|emailStatus|`string`|Status of the last email sent for the sales order.|
|manuallyClosed|`boolean`|Has the value `true` if the sales order was manually closed or `false` otherwise.|
|shortClosedStatus|`enum`|Short-closed status of the sales order. Possible values for [short closed status](#short_closed_status).|
|cogsAmount|`BigDecimal`|Cost of goods sold amount for the sales order.|
|createdBy|`long`|Identifier of the user who created the sales order.|
|updatedBy|`long`|Identifier of the user who last updated the sales order.|
|printStatus|`string`|Print status of the sales order.|
|revertPrintStatusBy|`long`|Identifier of the user who reverted the print status.|
|revertPrintStatusOn|`string`|Date on which the print status was reverted.|

### SalesOrderItemDetails
|Attribute|Type| Description|
|---------|----|------------|
|id|`long`|Unique identifier for the item.|
|productCode|`string`|Product code of the item.|
|documentSequenceCode|`string`|Product Document Sequence Code.|
|productDescription|`string`|Product description of the item.|
|productQuantity|`BigDecimal`|Product quantity of the item.|
|uomQuantity|`BigDecimal`|Quantity of the item in its unit of measurement.|
|uomUnitPrice|`BigDecimal`|Unit price of the item in its unit of measurement.|
|documentUom|`long`|Unit of measurement identifier used on the document.|
|documentUOMSchemaDefinition|`object`|Unit of measurement schema definition used on the document.|
|unitPrice|`BigDecimal`|Product unit price.|
|discount|`BigDecimal`|Discount on the item.|
|discountInPercent|`boolean`|Has the value `true` if discount is in percentage or `false` if discount is not in percentage.|
|preTaxGlobalDiscount|`BigDecimal`|Pre-tax global discount applied to the item.|
|taxCode|`string`|Tax code of the item.|
|taxAmount|`BigDecimal`|Tax amount of the item.|
|totalAmount|`BigDecimal`|Total amount of the item.|
|productOrder|`int`|Product view order.|
|salesOrderItemCode|`string`|Sales Order Item Code.|
|type|`enum`|Type of the item. Possible values for [ProductType](#producttype).|
|availableQuantity|`BigDecimal`|Available quantity of the item.|
|product|`object`|Product details of the item.|
|tax|`object`|Tax details of the item.|
|customField|`list`|List of key-value pairs for custom field name and its value.|
|linkedQuoteItem|`long`|Identifier of the quote item linked to this item.|
|linkedQuoteItemCode|`string`|Code of the quote item linked to this item.|
|isPartialSalesOrder|`boolean`|Has the value `true` if the item belongs to a partial sales order or `false` otherwise.|
|updatedPartialQuantity|`BigDecimal`|Updated quantity for a partial sales order item.|
|itemFulfillmentStatus|`enum`|Fulfillment status of the item. Possible values for [fulfillment status](#fulfillment_status).|
|quantityFulfilled|`BigDecimal`|Total quantity fulfilled for the item.|
|quantityFulfilledByUser|`BigDecimal`|Quantity fulfilled manually by the user.|
|quantityFulfilledByFlowover|`BigDecimal`|Quantity fulfilled automatically via flowover.|
|fulfillmentByDoc|`array`|Array of fulfillment quantities grouped by document.|
|errors|`list`|List of error messages associated with the item.|
|lineNumber|`int`|Line number of the item.|
|taxDetails|`list`|List of tax mapping details for the item.|
|reservedQuantitiesData|`list`|List of reserved quantity details for the item.|
|pendingQuantity|`BigDecimal`|Quantity still pending fulfillment.|
|pendingQtyToConvert|`BigDecimal`|Quantity pending conversion (e.g. to a work order).|
|qtyConvertedToWo|`BigDecimal`|Quantity converted to a work order.|
|allocationType|`string`|Allocation type of the item.|
|basePrice|`BigDecimal`|Base price of the item.|
|revRecDocumentItemDetails|`object`|Revenue recognition details linked to the item.|
|itemDiscountMethod|`enum`|Discount method applied to the item.|
|additionalCharges|`object`|Additional charges applied to the item.|
|lineRefNo|`string`|Line reference number of the item.|
|bomComponentGroupDetails|`object`|Bill-of-materials component group details for the item.|
|userSetTaxes|`boolean`|Has the value `true` if taxes were manually set by the user or `false` otherwise.|
|isShortClosed|`boolean`|Has the value `true` if the item is short closed or `false` otherwise.|
|shortClosedQuantity|`BigDecimal`|Quantity that was short closed.|
|shortClosedNotes|`string`|Notes recorded when the item was short closed.|
|isLocalizedUomQty|`boolean`|Has the value `true` if the unit of measurement quantity is localized or `false` otherwise.|
|localizedBaseQtyDiff|`BigDecimal`|Difference in base quantity due to localization.|
|unlocalizedDocumentUOMSchemaDefinition|`object`|Unit of measurement schema definition before localization.|
|salesOrderLineNumber|`string`|Sales order line number of the item.|
|landedCostWeight|`BigDecimal`|Landed cost weight of the item.|

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
|preferred|`boolean`|Has the value `true` if the address is default or `false` if the address is not default address.|
|placeOfSupply|`string`|Place of supply.|
|destinationOfSupply|`string`|Destination of supply.|
|mobileCountryCode|`string`|Country code of the mobile number.|
|mobileNumber|`string`|Mobile number.|
|emailId|`string`|Email address.|
|customFields|`list`|List of key-value pairs for custom field name and its value.|

## Enums
---
### SALES_ORDER_STATUS
- DRAFT
- OPEN
- CLOSED
- ARCHIVED
- PROCESSED

### FULFILLMENT_STATUS
- UNFULFILLED
- PARTIAL_FULFILLED
- FULLY_FULFILLED
- PENDING_FOR_APPROVAL

### FULFILLMENT_TYPE
- NONE
- DEFAULT
- PICK_PACK_SHIP
- DROP_SHIP

### APPROVAL_STATUS
- APPROVED
- PENDING_FOR_APPROVAL
- EDITING
- REJECTED
- NOT_REQUIRED
- PULLED_BACK

### SHORT_CLOSED_STATUS
- NONE
- PARTIALLY_SHORT_CLOSED
- FULLY_SHORT_CLOSED

### ProductType
- TRACKED
- NONTRACKED
- BILL_OF_MATERIALS
