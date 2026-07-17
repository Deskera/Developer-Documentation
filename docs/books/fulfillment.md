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
| parentDocumentSeqCode | `string` | Sequence code of the parent document |
| documentType | `string` | Document Type, Stage from where fulfillment is requested. |
| documentDate | `string` | Document date |
| contactCode | `string` | Contact code |
| contactName | `string` | Contact name |
| fulfillmentDate | `string` | Fulfillment date |
| fulfillmentItemDtos | `list` | Fulfillment item details. Attribute for [FulfillmentItemDto](#fulfillmentitemdto) |
| fulfillmentType | `enum` |  Possible values for [fulfillmentType](#fulfillment_type) |
| fulfillmentCode | `string` | Fulfillment specific unique code |
| sequence | `int` | Fulfillment group sequence |
| status | `string` | Fulfillment status |
| warehouseCode | `string` | warehouse code |
| linkedDocuments | `array` | Array of linked documents associated with the fulfillment |
| isPartialInvoice | `boolean` | Has the value `true` if the fulfillment is linked to a partial invoice or `false` otherwise |
| linkedPIDocument | `object` | Linked purchase invoice document info |
| customField | `list` | List of key-value pairs for custom field name and its value |
| parentFulfillmentCode | `string` | Code of the parent fulfillment, when this fulfillment was split from another |
| transactionLinkId | `long` | Identifier linking related fulfillment transactions |
| isBulkFulfillment | `boolean` | Has the value `true` if the fulfillment was created as part of a bulk fulfillment or `false` otherwise |
| bulkItemCount | `int` | Number of items included in a bulk fulfillment |
| reservedStock | `boolean` | Has the value `true` if stock is reserved for the fulfillment or `false` otherwise |
| source | `string` | Source of the fulfillment record |
| attachments | `array` | Array of file attachments |
| attachmentIds | `list` | List of attachment ids of the fulfillment |
| isQcEnabled | `boolean` | Has the value `true` if quality control is enabled for the fulfillment or `false` otherwise |
| customerOrderNumber | `string` | Customer order number associated with the fulfillment |
| shipFrom | `object` | Ship from address |
| shipTo | `object` | Ship to address |
| approvalStatus | `enum` | Approval status of the fulfillment. Possible values for [approval status](#approval_status) |
| approvers | `list` | List of approvers for the fulfillment |
| approvalCriteria | `string` | Approval criteria applied to the fulfillment |


## API
---
### Search Fulfillments
Returns a paginated list of fulfillments.

#### Parameters
- [accessToken](#access-token) `string`
- search `string`
- customFields `string`
- sort `string`
- sortDir `string`
- page `int`
- limit `int`

#### Code

```java
  @Autowired
  private InventoryApiClient inventoryApiClient;

  public Page<FulfillmentResponse> searchFulfillments(String search, String customFields, String sort,
      String sortDir, Integer page, Integer limit, String accessToken){
    return this.inventoryApiClient.searchFulfillments(search, customFields, sort, sortDir, page, limit, accessToken);
  }
```
---
### Create Fulfillment
Creates a new fulfillment.

#### Parameters
- [fulfillmentRequest](#fulfillment-object) `FulfillmentRequest`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private InventoryApiClient inventoryApiClient;

  public FulfillmentResponse createFulfillment(FulfillmentRequest fulfillmentRequest, String accessToken){
    return this.inventoryApiClient.createFulfillment(fulfillmentRequest, accessToken);
  }
```
---
### Retrieve Fulfillment
Retrieves the details of an existing fulfillment. You only need to supply the unique fulfillment code that was returned upon fulfillment creation.

#### Parameters
- fulfillmentCode `string`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private InventoryApiClient inventoryApiClient;

  public FulfillmentResponse getFulfillmentByCode(String fulfillmentCode, String accessToken){
    return this.inventoryApiClient.getFulfillmentByCode(fulfillmentCode, accessToken);
  }
```
---
### Delete Fulfillment
Deletes an existing fulfillment. You only need to supply the unique identifier that was returned upon fulfillment creation.

#### Parameters
- fulfillmentId `long`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private InventoryApiClient inventoryApiClient;

  public void deleteFulfillment(Long fulfillmentId, String accessToken){
    this.inventoryApiClient.deleteFulfillment(fulfillmentId, accessToken);
  }
```

## Objects
---

### FulfillmentResponse
`FulfillmentResponse` includes all attributes of [Fulfillment](#fulfillment-object), plus the following response-only attributes.

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| id | `long` | Unique identifier for the fulfillment. |
| delete | `boolean` | Has the value `true` if the fulfillment is deleted or `false` otherwise. |
| linkedWareHouses | `array` | Array of warehouses linked to the fulfillment. |
| createdBy | `long` | Identifier of the user who created the fulfillment. |
| attachmentsWithLink | `list` | List of attachment details including download links. |
| ffSentForToleranceApproval | `boolean` | Has the value `true` if the fulfillment was sent for tolerance approval or `false` otherwise. |
| linkedTolerancePendingApprovalFF | `string` | Code of the linked fulfillment pending tolerance approval. |

### FulfillmentItemDto

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | `long` | Unique identifier for the fulfillment item. |
| code | `string` | Fulfillment item code |
| documentItemCode | `string` | Document order code, It will be Quotaion/Invoice item code. |
| documentSequenceCode | `string` | Sequence code of the document the item belongs to |
| sequence | `int` | Fulfillment item sequence |
| productCode | `string` | Product code |
| productName | `string` | Product Name |
| productType | `string` | Product type |
| productDescription | `string` | Product description |
| fulfillmentDate | `string` | Fulfillment date |
| quantityRequired | `BigDecimal` | Ordered Quantity |
| pendingQuantity | `BigDecimal` | Pending quantity |
| fulfilledQuantity | `BigDecimal` | Fulfilled quantity |
| availableProductQuantity | `BigDecimal` |  |
| uomQuantityRequired | `BigDecimal` | Ordered quantity in the item's unit of measurement |
| uomPendingQuantity | `BigDecimal` | Pending quantity in the item's unit of measurement |
| uomFulfilledQuantity | `BigDecimal` | Fulfilled quantity in the item's unit of measurement |
| uomAvailableProductQuantity | `BigDecimal` | Available quantity in the item's unit of measurement |
| uomName | `string` | Name of the unit of measurement |
| documentUom | `long` | Unit of measurement identifier used on the document |
| documentUOMSchemaDefinition | `object` | Unit of measurement schema definition used on the document |
| warehouseCode | `string` | Warehouse code |
| warehouseInventoryData | `list` | List of warehouse-level inventory details for the item |
| isPartialInvoice | `boolean` | Has the value `true` if the item belongs to a partial invoice or `false` otherwise |
| linkedPIItemCode | `string` | Code of the linked purchase invoice item |
| advancedTracking | `enum` | Advanced tracking type of the item. Possible values for [advanced tracking type](#advancedtrackingtype) |
| advancedTrackingType | `enum` | Advanced tracking type of the item. Possible values for [advanced tracking type](#advancedtrackingtype) |
| advancedTrackingFulfilmentData | `list` | List of advanced tracking (batch/serial) fulfillment details |
| trackingInformation | `list` | List of advanced tracking (batch/serial) details |
| isQuickCommit | `boolean` | Has the value `true` if the item was quick-committed or `false` otherwise |
| customField | `list` | List of key-value pairs for custom field name and its value |
| linkedWareHouses | `array` | Array of warehouses linked to the item |
| reservedQuantityData | `list` | List of reserved quantity details for the item |
| qtyAboveToleranceLimit | `BigDecimal` | Quantity above the configured tolerance limit |
| toleranceLimit | `BigDecimal` | Tolerance limit configured for the item |
| acceptedQty | `BigDecimal` | Accepted quantity |
| rejectedQty | `BigDecimal` | Rejected quantity |
| isLocalizedUomQty | `boolean` | Has the value `true` if the unit of measurement quantity is localized or `false` otherwise |
| localizedBaseQtyDiff | `BigDecimal` | Difference in base quantity due to localization |
| unlocalizedDocumentUOMSchemaDefinition | `object` | Unit of measurement schema definition before localization |

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

### APPROVAL_STATUS
- APPROVED
- PENDING_FOR_APPROVAL
- EDITING
- REJECTED
- NOT_REQUIRED
- PULLED_BACK

### ADVANCEDTRACKINGTYPE
- NONE
- BATCH
- SERIAL
