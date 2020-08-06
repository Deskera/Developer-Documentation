---
id: stock
title: Stock Management
sidebar_label: Stock
---


`Stock` management is the practice of ordering, storing, tracking, and controlling inventory.## Stock Object

[Stock management](https://www.deskera.com/sg/erp/inventory-reports/) applies to every item a business uses to produce its [products or services](https://www.deskera.com/deskera-pricing/) – from raw materials to finished goods. In other words, stock management covers every aspect of a business’s inventory.

### Attributes
---
#### StockTransferDto
| Attribute | Type | Description |
| ---- | ---- | ----------- |
| code | `string` | Unique code assigned to the stock transfer. |
| destWarehouseCode | `string` | Destination warehouse code assigned to the stock transfer. |
| notes | `string` |  |
| srcWarehouseCode | `string` | Source warehouse code assigned to the stock transfer. |
| stockTransferItems | `list` | Attribute for [stockTransferItems](#stocktransferitemdto) |
| transferDate | `string` | Stock Transfer date. |

#### StockAdjustmentDto

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| adjustmentDate | `string` | Stock Adjustment |
| adjustmentReason | `enum` | Possible values for [adjustmentReason](#adjustment_reason) |
| adjustmentType | `enum` | Possible values for [adjustmentType](#adjustment_type) |
| code | `string` | Unique code assigned to the stock adjustment. |
| notes | `string` |  |
| stockAdjustmentItems | `list` | Attribute for [stockAdjustmentItems](#stockadjustmentitemdto) |
| totalValue | `number` |  |
| warehouseCode | `string` | Warehouse code for stock adjustment. |

## API
---
### Create Stock Transfer
Create new stock transfer.

#### Parameters
- [stockTransferDto](#stock-object) `StockTransferDto`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

  public StockTransferDto createStockTransfer(String accessToken, StockTransferDto stockTransferDto){
    return this.inventoryClient.createStockTransfer(accessToken, stockTransferDto);
  }
```
---
### Retrive Stock Transfer
Retrieves the details of an existing Stock Transfer. You need only supply the unique code that was returned upon Stock Transfer creation.

#### Parameters
- [accessToken](#access-token) `string`
- code `string`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

  public StockTransferDto getStockTransferByCode(String accessToken, String code){
    return this.inventoryClient.getStockTransferByCode(accessToken, code);
  }
```
---

### Update Stock Transfer
Update the details of an existing Stock Transfer.

#### Parameters
- [accessToken](#access-token) `string`
- [stockTransferRequest](#stocktransferrequest) `StockTransferRequest`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

  public StockTransferDto editStockTransferByCode(String accessToken, StockTransferRequest stockTransferRequest){
    return this.inventoryClient.editStockTransferByCode(accessToken, stockTransferRequest);
  }
```
---

### List All Stock Transfer
Returns list of Stock Tarnsfer.

#### Parameters
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

    public List<StockTransferDto> getStockTransferList(String accessToken){
    return this.inventoryClient.getStockTransferList(accessToken);
  } 
```
---
### Search Stock Transfer
Search Stock Transfer.

#### Parameters
- [accessToken](#access-token) `string`
- [filterCriteria](#filtercriteria) `FilterCriteria`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

    public RestResponsePage searchStockTransferList(String accessToken, FilterCriteria filterCriteria){
    return this.inventoryClient.searchStockTransferList(accessToken, filterCriteria);
  }

```
---
### Create Stock Adjustment
Create new atock Adjustment.

#### Parameters
- [stockAdjustmentDto](#stock-object) `StockAdjustmentDto`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

    public StockAdjustmentDto createStockAdjustment(String accessToken, StockAdjustmentDto stockAdjustmentDto){
    return this.inventoryClient.createStockAdjustment(accessToken, stockAdjustmentDto);
  }
```
---
### Retrive Stock Adjustment
Retrieves the details of an existing Stock Adjustment. You need only supply the unique code that was returned upon Stock Adjustment creation.

#### Parameters
- [accessToken](#access-token) `string`
- code `string`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

    public StockAdjustmentDto getStockAdjustmentByCode(String accessToken, String code){
    return this.inventoryClient.getStockAdjustmentByCode(accessToken, code);
  }

```
---

### Update Stock Adjustment
Update the details of an existing Stock Adjustment.

#### Parameters
- [accessToken](#access-token) `string`
- [stockAdjustmentRequest](#stockadjustmentrequest) `StockAdjustmentRequest`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

    public StockAdjustmentDto editStockAdjustmentByCode(String accessToken, StockAdjustmentRequest stockAdjustmentRequest){
    return this.inventoryClient.editStockAdjustmentByCode(accessToken, stockAdjustmentRequest);
  }

```
---

### List All Stock Adjustment
Returns list of Stock Adjustment.

#### Parameters
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

    public List<StockAdjustmentDto> getStockAdjustmentList(String accessToken){
    return this.inventoryClient.getStockAdjustmentList(accessToken);
  }
```
---
### Search Stock Adjustment
Search Stock Adjustment.

#### Parameters
- [accessToken](#access-token) `string`
- [filterCriteria](#filtercriteria) `FilterCriteria`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

    public RestResponsePage<StockAdjustmentDto> searchStockAdjustmentList(String accessToken, FilterCriteria filterCriteria){
    return this.inventoryClient.searchStockAdjustmentList(accessToken, filterCriteria);
  }
```
---


## Objects
---
### StockTransferItemDto

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| productVariantCode | `string` |  |
| quantity | `BigDecimal` | Transfer quantity. |
| productName | `string` | Product name. |

### StockAdjustmentItemDto

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| perUnitValue | `BigDecimal` | Per unit price of product. |
| productVariantCode | `string` |  |
| quantity | `BigDecimal` | Transfer quantity. |
| productName | `string` | Product name. |

### StockTransferRequest

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| code | `string` | Unique code assigned to the stock transfer. |
| notes | `string` |  |

### StockAdjustmentRequest
| Attribute | Type | Description |
| ---- | ---- | ----------- |
| code | `string` | Unique code assigned to the stock adjustment. |
| reason | `enum` | Possible values for [reason](#adjustment_reason) |
| notes | `string` |  |

### FilterCriteria

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| fullTextSearch | `string` | Text to be searched. |
| query | `string` |  |
| page | `int` | Page no. to get records for particular page. |
| limit | `int` | Total no. of records should be displayed on current page. |
| sort | `string` |  |
| sortDir | `string` |  |
| fromDate | `string` |  |
| toDate | `string` |  |
| filter | `string` |  |

### RestResponsePage«StockAdjustmentDto»

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| content | `list` | List of Stock Adjustment. Attribute for [content](#stockadjustmentdto) |
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

### RestResponsePage«StockTransferDto»

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| content | `list` | List of Stock Transfer. Attribute for [content](#stocktransferdto) |
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

### Pageable

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| offset | `long` |  |
| pageNumber | `int` |  |
| pageSize | `int` |  |
| paged | `boolean` |  |
| sort | [Sort](#sort) |  |
| unpaged | `boolean` |  |

### Sort

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| empty | `boolean` |  |
| sorted | `boolean` |  |
| unsorted | `boolean` |  |

---

## Enums
---

### ADJUSTMENT_TYPE
- STOCK_IN
- STOCK_OUT

### ADJUSTMENT_REASON
- RETURNED
- PROMOTION
- STOCKTAKE
- DAMAGED
- SHRINKAGE
- OTHER
