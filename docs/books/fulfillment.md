---
id: fulfillment
title: Fulfillment
sidebar_label: Fulfillment
---

`Fulfillment` is all the steps a organisation takes between receiving a new order and placing that order into the customer’s hands. The practice involves warehousing, [picking and packing](https://www.deskera.com/books/pick-pack-ship/) the product, [shipping](https://www.deskera.com/sg/dropship-with-deskera-books/) it.

## Fulfillment Object

### Attributes
---

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| autoFulfilled | `boolean` | Flag will pass as `true` for auto fulfilled flow.|
| documentCode | `string` | Document code |
| documentType | `string` | Document Type, Stage from where fulfillment is requested. |
| fulfillmentDate | `string` | Fulfillment date |
| fulfillmentItems | `list` | Fulfillment item details. Attribute for [fulfillmentItems](#fulfillmentitemdto) |
| fulfillmentType | `enum` |  Possible values for [fulfillmentType](#fulfillment_type) |
| fulfillmentCode | `string` | Fulfillment specific unique code |
| id | `long` | Unique identifier for the fulfillment. |
| sequence | `int` | Fulfillment group sequence |
| status | `string` | Fulfillment status |
| warehouseCode | `string` | warehouse code |


## API
---
### List All Fulfillments
Returns list of fulfillments.

#### Parameters
- [accessToken](#access-token) `string`
- page `int`
- limit `int`

#### Code

```java
  @Autowired
  private InventoryApiClient inventoryApiClient;

    public RestResponsePage getFulfillmentData(String accessToken, String page, String limit){
    return this.inventoryApiClient.getFulfillmentData(accessToken, page, limit);
  }
```
---

## Objects
---
### FulfillmentItemDto

| Name | Type | Description |
| ---- | ---- | ----------- |
| availableProductQuantity | `BigDecimal` |  |
| documentItemCode | `string` | Document order code, It will be Quotaion/Invoice item code. |
| fulfilledQuantity | `BigDecimal` | Fulfilled quantity |
| fulfillmentDate | `string` | Fulfillment date |
| id | `long` | Unique identifier for the fulfillment item. |
| pendingQuantity | `BigDecimal` |  |
| productCode | `string` | Product code |
| productDescription | `string` | Product description |
| productName | `string` | Product Name |
| productType | `string` | Product type |
| sequence | `int` | Fulfillment item sequence |
| quantityRequired | `BigDecimal` | Ordered Quantity |
| warehouseCode | `string` | Warehouse code |

### Pageable

| Name | Type | Description |
| ---- | ---- | ----------- |
| offset | `long` |  |
| pageNumber | `int` |  |
| pageSize | `int` |  |
| paged | `boolean` |  |
| sort | [Sort](#sort) |  |
| unpaged | `boolean` |  |

### Sort

| Name | Type | Description |
| ---- | ---- | ----------- |
| empty | `boolean` |  |
| sorted | `boolean` |  |
| unsorted | `boolean` |  |

### Page«FulfillmentResponse»

| Name | Type | Description |
| ---- | ---- | ----------- |
| content | `list` | List of Fulfillment. Attribute for [content](#fulfillmentresponse) |
| empty | `boolean` |  |
| first | `boolean` |  |
| last | `boolean` |  |
| number | `int` |  |
| numberOfElements | `int` |  |
| pageable | [Pageable](#pageable) |  |
| size | `int` |  |
| sort | [Sort](#sort) |  |
| totalElements | `long` |  |
| totalPages | `int` |  |

---
## Enums
---
### FULFILLMENT_TYPE
- NONE
- DEFAULT
- PICK_PACK_SHIP
- DROP_SHIP