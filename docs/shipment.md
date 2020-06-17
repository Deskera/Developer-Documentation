---
id: shipment
title: Shipment
sidebar_label: Shipment
---

[Shipping](https://www.deskera.com/sg/books/pick-pack-ship/) is done through two methods depending on the size of the company. Either you ship it yourself (if you can afford it) or you ship it by tying up with a delivery partner or vendor. Some tips we have gathered to aid you in the process are printing handy labels for commonly shipped items to aid identification. Noting down the tracking id of the product and the shipping courier in one area gives you contextual information on assembling products as well as keeping your customers (and yourself) informed through proper notifications.
## Shipment Object

### Attributes
---

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| documentCode | `string` | Document code |
| documentDate | `string` | Document date |
| documentSequenceCode | `string` | Document Sequence code |
| documentType | `enum` | Document Type, Stage from where fulfillment - PPS is requested. Possible values for [documentType](#document_type) |
| id | `long` | Unique identifier for the object. |
| ppsDocumentItems | `list` | PPS-Document item details. Attribute for [ppsDocumentItems](#shipmentdocumentitemdto) |
| shipByDate | `string` | Ship by date |
| shipmentPackages | `list` | Package details. Attribute for [shipmentPackages](#shipmentpackagedto) |
| status | string | PPS-Document status. Possible values for [status](#shipment_document_status) |
| warehouseCode | string | Warehouse Code |


## API
---
### List All Shipments
Returns list of shipments.

#### Parameters
- [accessToken](#access-token) `string`
- page `int`
- limit `int`

#### Code

```java
  @Autowired
  private InventoryApiClient inventoryApiClient;

    public RestResponsePage<ShipmentDocumentDto> getShipmentOrder(String accessToken, String page, String limit){
    return this.inventoryApiClient.getShipmentOrder(accessToken, page, limit);
  }
```
---

## Objects
---
### BoxDto

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| height | `string` | Box width. |
| length | `string` | Box length. |
| type | `string` | BOX_S, BOX_M, BOX_L |
| width | `string` | Box width. |

### PackedItemQuantityDto

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| packedQuantity | `BigDecimal` | Packed quantity of item in the package |
| shipmentDocumentItemId | `long` | Shipment Document Item Id |

### ShipmentDocumentItemDto

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| availableQuantity | `BigDecimal` | Total available item quantity. |
| barcode | `string` | Barcode of product |
| documentCode | `string` | Document code |
| documentType | `enum` | Document Type, Stage from where fulfillment - PPS is requested. Possible values for [documentType](#document_type) |
| id | `long` | Unique identifier for the shipment document item. |
| insufficientQuantity | `boolean` | Has the value `true` if the quantity is insufficient or `false` if the quantity is sufficient. |
| itemDescription | `string` | Item Description. |
| itemName | `string` | Item name. |
| pickedQuantity | `BigDecimal` | Total quantity picked for item. |
| productCode | `string` | Product code |
| productDocumentSequenceCode | `string` | Product Document Sequence Code |
| quantity | `BigDecimal` | Ordered item quantity. |
| status | `enum` | PPS-Document-item status. Possible values for [status](#shipment_document_status) |
| warehouse | [WarehouseDto](#warehousedto) | Warehouse details. |

### ShipmentPackageDto

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| box | [BoxDto](#boxdto) | Box Details |
| boxWeight | `string` | box weight. |
| capacity | `BigDecimal` | Total capacity of defined package/carton. |
| carrier | `enum` | Shipping carrier. Possible values for [carrier](#carrier_type) |
| containsFragileObject | `boolean` | Whether package contains fragile object. |
| deliveryType | `enum` | Delivery type. Possible values for [deliveryType](#delivery_type) |
| documentCode | `string` | Document code |
| documentType | `enum` | Document Type, Stage from where fulfillment - PPS is requested. Possible values for [documentType](#document_type) |
| id | `long` | Package Id. |
| label | `string` | Label of package. |
| packedItemQuantities | `list` | Package Item quantity. Attribute for [packedItemQuantities](#packeditemquantitydto) |
| packedQuantity | `BigDecimal` | Quantity packed in this package. |
| sequence | `int` | Carton or other package sequence. |
| status | `enum` | Package status. Possible values for [status](#shipment_document_status) |
| trackingNumber | `string` | Tracking number of shipment. |

### WarehouseDto

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| active | `boolean` | Has the value `true` if the warehouse is active or `false` if the warehouse is not active. |
| code | `string` | Warehouse specific unique code. |
| id | `long`  | Unique identifier for the Warehouse. |
| location | [LocationDto](#locationdto) | Location details. |
| name | `string` | Warehouse Name. |
| primary | `boolean` | Has the value `true` if the warehouse is primary or `false` if the warehouse is not primary. |

### LocationDto

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| address | `list` | List of Address. Attribute for [Address](#address) |
| id | `long` | Unique identifier for the Location. |
| name | `string` | Name of location |

### Address

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| address1 | `string` | Address line 1 |
| address2 | `string` | Address line 2 |
| city | `string` | City |
| country | `string` | Country |
| postalCode | `string` | Postal Code |
| preferred | `boolean` | Is this a default address? |

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
| content | `list` | List of Fulfillment. Attribute for [content](#shipment-object) |
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
### SHIPMENT_DOCUMENT_STATUS
- READY_TO_PICK(1)
- PICKING_IN_PROGRESS(2)
- PICKED(3)
- READY_TO_PACK(4)
- PACKING_IN_PROGRESS(5)
- PACKED(6)
- READY_TO_SHIP(7)
- SHIPPING_IN_PROGRESS(8)
- PARTIAL_SHIPPED(9)
- SHIPPED(10)

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

### CARRIER_TYPE
- Fedex
- UPS
- USPS
- DHL

### DELIVERY_TYPE
- Courier
- Pickup
- DropOff
