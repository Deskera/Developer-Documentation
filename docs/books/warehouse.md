---
id: warehouse
title: Warehouse Service
sidebar_label: Warehouse
---

A `Warehouse` is a commercial space vital in the supply chain that is used to store finished goods and raw materials and is widely used in industries such as manufacturing and distribution. 

Each [warehouse](https://www.deskera.com/books/warehouse-management/) keeps records that show stock movements, losses and balances at the warehouse.
## Warehouse Object

### Attributes
---

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| active | `boolean` | Has the value `true` if the warehouse is active or `false` if the warehouse is not active. |
| assignUserIds | `list` | List of user ids assigned to the warehouse. |
| code | `string` | Warehouse specific unique code. |
| id | `long`  | Unique identifier for the Warehouse. |
| location | [LocationDto](#locationdto) | Location details. |
| name | `string` | Warehouse Name. |
| primary | `boolean` | Has the value `true` if the warehouse is primary or `false` if the warehouse is not primary. |
| warehouseBinInfos | `list` | List of bin details for the warehouse. Attribute for [WarehouseBinInfo](#warehousebininfo) |
| warehouseRackInfos | `list` | List of rack details for the warehouse. Attribute for [WarehouseRackInfo](#warehouserackinfo) |
| warehouseRowInfos | `list` | List of row details for the warehouse. Attribute for [WarehouseRowInfo](#warehouserowinfo) |
| warehouseType | `enum` | Type of the warehouse. Possible values for [warehouseType](#warehouse_type) |

## API
---
### List All Warehouse
Returns list of warehouse.

#### Parameters
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

  public List<WarehouseResponse> getWarehouseList(String accessToken){
    return this.inventoryClient.getWarehouseList(accessToken);
  }
```
---
### Retrive Warehouse details by code
Retrieves the details of an existing warehouse. You need only supply the code that was returned upon warehouse creation.

#### Parameters
- [accessToken](#access-token) `string`
- code `string`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

  public WarehouseResponse getWarehouseDetailsByCode(final String accessToken, final String code){
    return this.inventoryClient.getWarehouseDetailsByCode(accessToken, code);
  }
```
---
### Search Warehouses
Returns a paginated list of warehouses matching the given filter criteria.

#### Parameters
- [accessToken](#access-token) `string`
- search `string`
- query `string`
- sort `string`
- sortDir `string`
- page `int`
- limit `int`
- filterOnRolesFlg `boolean`
- allRRBDetails `boolean`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

  public Page<WarehouseResponse> searchWarehouses(String accessToken, String search, String query,
      String sort, String sortDir, Integer page, Integer limit, Boolean filterOnRolesFlg,
      Boolean allRRBDetails){
    return this.inventoryClient.searchWarehouses(accessToken, search, query, sort, sortDir, page,
        limit, filterOnRolesFlg, allRRBDetails);
  }
```
---
### Create Warehouse
Creates a new warehouse.

#### Parameters
- [wareHouseRequest](#warehouse-object) `WareHouseRequest`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

  public WarehouseResponse createWarehouse(WareHouseRequest wareHouseRequest, String accessToken){
    return this.inventoryClient.createWarehouse(wareHouseRequest, accessToken);
  }
```
---
### Update Warehouse
Updates an existing warehouse. You only need to supply the unique identifier that was returned upon warehouse creation.

#### Parameters
- id `long`
- [wareHouseRequest](#warehouse-object) `WareHouseRequest`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

  public WarehouseResponse updateWarehouse(Long id, WareHouseRequest wareHouseRequest, String accessToken){
    return this.inventoryClient.updateWarehouse(id, wareHouseRequest, accessToken);
  }
```
---
### Update Warehouse Attributes
Updates the `active`/`primary` attributes of an existing warehouse.

#### Parameters
- id `long`
- active `boolean`
- primary `boolean`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

  public void updateWarehouseAttributes(Long id, Boolean active, Boolean primary, String accessToken){
    this.inventoryClient.updateWarehouseAttributes(id, active, primary, accessToken);
  }
```
---
### Delete Warehouse
Deletes an existing warehouse. You only need to supply the unique identifier that was returned upon warehouse creation.

#### Parameters
- id `long`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

  public void deleteWarehouse(Long id, String accessToken){
    this.inventoryClient.deleteWarehouse(id, accessToken);
  }
```
---

### Retrive Warehouse Products
Retrieves the warehouse details with available quantity for the given product codes.

#### Parameters
- [accessToken](#access-token) `string`
- productCodes `set`
- includeRejectedWarehouse `boolean`
- includeAvailableQtyWarehouse `boolean`
- includeJwoWarehouse `boolean`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

  public WHProductResponse getWarehouseProducts(final String accessToken, final Set<String> productCodes,
      final Boolean includeRejectedWarehouse, final Boolean includeAvailableQtyWarehouse,
      final Boolean includeJwoWarehouse){
    return this.inventoryClient.getWarehouseProducts(accessToken, productCodes,
        includeRejectedWarehouse, includeAvailableQtyWarehouse, includeJwoWarehouse);
  }
```
---

### Retrive Active Warehouse Products
Retrieves the details of active warehouses with product and available quantity.

#### Parameters
- [accessToken](#access-token) `string`
- search `string`
- warehouseCode `string`
- filterOnRolesFlg `boolean`
- includeRejectedWarehouse `boolean`
- page `int`
- limit `int`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

  public WHProductResponse getActiveWarehouseProducts(final String accessToken, final String search,
      final String warehouseCode, final Boolean filterOnRolesFlg, final Boolean includeRejectedWarehouse,
      final Integer page, final Integer limit){
    return this.inventoryClient.getActiveWarehouseProducts(accessToken, search, warehouseCode,
        filterOnRolesFlg, includeRejectedWarehouse, page, limit);
  }
```
---

### Get Warehouses Short Info
Returns a short-form list of all warehouses.

#### Parameters
- [accessToken](#access-token) `string`
- filterOnRolesFlg `boolean`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

  public List<WarehouseResponse> getWarehousesShortInfo(final String accessToken, final Boolean filterOnRolesFlg){
    return this.inventoryClient.getWarehousesShortInfo(accessToken, filterOnRolesFlg);
  }
```
---

### Get Primary Warehouse Code
Returns the code of the tenant's primary warehouse.

#### Parameters
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

  public String getPrimaryWarehouseCode(final String accessToken){
    return this.inventoryClient.getPrimaryWarehouseCode(accessToken);
  }
```
---

### Get Rejected Warehouse
Returns the details of the tenant's rejected-goods warehouse.

#### Parameters
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

  public WarehouseResponse getRejectedWarehouse(final String accessToken){
    return this.inventoryClient.getRejectedWarehouse(accessToken);
  }
```

## Objects
---
### WarehouseResponse
`WarehouseResponse` includes all attributes of [Warehouse](#warehouse-object), plus the following response-only attributes.

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| isDeleteEnable | `boolean` | Has the value `true` if the warehouse can be deleted or `false` otherwise. |

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
| contactName | `string` | Name of the contact associated with the address |
| country | `string` | Country |
| countryCode | `string` | Country code of the address |
| customFields | `list` | List of key-value pairs for custom field name and its value |
| destinationOfSupply | `string` | Destination of supply for tax purposes |
| emailId | `string` | Email address |
| mobileCountryCode | `string` | Country code for the mobile number |
| mobileNumber | `string` | Mobile number |
| placeOfSupply | `string` | Place of supply for tax purposes |
| postalCode | `string` | Postal Code |
| preferred | `boolean` | Is this a default address? |
| state | `string` | State |
| stateCode | `string` | State code of the address |

### WHProductResponse

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| totalWarehouseCount | `int` | Total number of warehouses matching the request. |
| warehouseShortInfoList | `list` | List of warehouse and product details. Attribute for [WarehouseShortInfo](#warehouseshortinfo) |

### WarehouseShortInfo

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| active | `boolean` | Has the value `true` if the warehouse is active or `false` if the warehouse is not active. |
| advancedTrackingMeta | `list` | List of advanced tracking (batch/serial) details for the requested products. |
| assignUserIds | `list` | List of user ids assigned to the warehouse. |
| code | `string` | Warehouse specific unique code. |
| existingBatchCustomFields | `Map` | Map of batch/serial number to its list of custom field values. |
| id | `long` | Unique identifier for the Warehouse. |
| location | [LocationDto](#locationdto) | Location details. |
| name | `string` | Warehouse Name. |
| primary | `boolean` | Has the value `true` if the warehouse is primary or `false` if the warehouse is not primary. |
| productAdvancedTrackingMeta | `Map` | Map of product code to its list of advanced tracking (batch/serial) details. |
| productAvailableQuantity | `Map` | Product Code and Available quantity Map. |
| productReservedQuantity | `Map` | Product Code and Reserved quantity Map. |
| rowRackBinProductAvailableQuantityDtos | `list` | List of row/rack/bin level available quantity details. Attribute for [RowRackBinProductAvailableQuantityDto](#rowrackbinproductavailablequantitydto) |
| warehouseBinInfos | `list` | List of bin details for the warehouse. Attribute for [WarehouseBinInfoResponse](#warehousebininforesponse) |
| warehouseRackInfos | `list` | List of rack details for the warehouse. Attribute for [WarehouseRackInfoResponse](#warehouserackinforesponse) |
| warehouseRowInfos | `list` | List of row details for the warehouse. Attribute for [WarehouseRowInfoResponse](#warehouserowinforesponse) |
| warehouseType | `enum` | Type of the warehouse. Possible values for [warehouseType](#warehouse_type) |

### WarehouseRowInfo

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| code | `string` | Row code. |
| name | `string` | Row name. |

### WarehouseRackInfo

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| code | `string` | Rack code. |
| name | `string` | Rack name. |
| rowCode | `string` | Code of the row the rack belongs to. |

### WarehouseBinInfo

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| code | `string` | Bin code. |
| name | `string` | Bin name. |
| rackCode | `string` | Code of the rack the bin belongs to. |
| rowCode | `string` | Code of the row the bin belongs to. |
| taggedQuantity | `number` | Quantity tagged to this bin. |

### WarehouseRowInfoResponse

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| code | `string` | Row code. |
| name | `string` | Row name. |

### WarehouseRackInfoResponse

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| code | `string` | Rack code. |
| name | `string` | Rack name. |
| rowCode | `string` | Code of the row the rack belongs to. |

### WarehouseBinInfoResponse

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| code | `string` | Bin code. |
| name | `string` | Bin name. |
| rackCode | `string` | Code of the rack the bin belongs to. |
| rowCode | `string` | Code of the row the bin belongs to. |

### RowRackBinProductAvailableQuantityDto

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| availableQuantity | `number` | Available quantity at this row/rack/bin. |
| binCode | `string` | Bin code. |
| binName | `string` | Bin name. |
| productCode | `string` | Product code. |
| rackCode | `string` | Rack code. |
| rackName | `string` | Rack name. |
| reservedQuantity | `number` | Reserved quantity at this row/rack/bin. |
| rowCode | `string` | Row code. |
| rowName | `string` | Row name. |

## Enums
---
### WAREHOUSE_TYPE
- PRIMARY
- REJECTED
- TOLERANCE_REJECTED
- JOB_WORK_OUT
- QA
- NONE
