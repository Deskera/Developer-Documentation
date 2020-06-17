---
id: order
title: Order Service
sidebar_label: Order
---
`Order` services includes purchase and sales order details. These details includes the product quantities and costs. 

[Order](https://www.deskera.com/sg/books/buying/) specifies what a buyer must pay the seller according to the seller’s payment terms.

## Fulfillment DTO Object

### Attributes
---
|Attribute| Type | Description |
|---------|------|-------------|
|sequence|`integer`| Sequence format id.|
|fulfillmentCode|`string`|Unique code for fulfillment.|
|documentCode|`string`|Unique code for order.|
|documentType|`string`|Document type. Possible values for [document type](#document_type).|
|fulfillmentItemDtos|`list`|List of items associated with fulfillment. Attributes of [Fulfillment Items](#fulfillmentitemdetails).|
|status|`string`|Status of the order. Possible values for [order status](#order_status).|
|autoFulfilled|`boolean`|Has the value `true` if fulfilled is auto converted or `false` if it is not.|
|fulfillmentDate|`string`|Date of the fulillment.|
|fulfillmentType|`enum`|Fulfillment type of order. Possible values for [Fulfillment type](#fulfillment_type)|
|warehouseCode|`string`|Unique code related to the warehouse.|

## API
---
### Create Fulfillment
Creates a new fulfillment.

#### Code
```java
  @Autowired
  private OrdersApiClient ordersApiClient;

  public FulfillmentResponse createFulfillment(FulfillmentRequest fulfillmentRequest, String accessToken){
    return this.ordersApiClient.createFulfillment(fulfillmentRequest, accessToken);
  }
```

## Objects
---
### FulfillmentItemDetails
|Attribute|Type| Description|
|---------|----|------------|
|id|`long`|Unique identifier for item.|
|pendingQuantity|`BigDecimal`|Pending quantity of the product.|
|quantityRequired|`BigDecimal`|The needed quantity for the product.|
|productCode|`string`|Product code of the item.|
|sequence|`integer`| Sequence format id.|
|documentItemCode|`string`|Product code of the item.|
|fulfilledQuantity|`BigDecimal`|The product quantity needed to fulfilled the order.|
|fulfillmentDate|`string`|Date of the fulillment.|
|availableProductQuantity|`BigDecimal`| Number of quantity left of the product.|
|productName|`string`|Name of product.|
|productType|`string`|Type of product.|
|productDescription|`string`|Description of product.|
|warehouseCode|`string`|Unique code related to the warehouse.|

## Enums
---
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

### ORDER_STATUS
- UNFULFILLED
- PARTIAL_FULFILLED
- FULLY_FULFILLED

### FULFILLMENT_TYPE
- None
- Default
- Pick_Pack_Ship
- Drop_Ship