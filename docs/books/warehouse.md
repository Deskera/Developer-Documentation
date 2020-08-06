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
| code | `string` | Warehouse specific unique code. |
| id | `long`  | Unique identifier for the Warehouse. |
| location | [LocationDto](#locationdto) | Location details. |
| name | `string` | Warehouse Name. |
| primary | `boolean` | Has the value `true` if the warehouse is primary or `false` if the warehouse is not primary. |

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

### Retrive Warehouse Products
Retrieves the details of Warehouse details with available quantity by product codes. You need only supply the `set<string>` of product codes.

#### Parameters
- [accessToken](#access-token) `string`
- productCodes `set`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

  public WHProductResponse getWarehouseProducts(final String accessToken, final Set<String> productCodes){
    return this.inventoryClient.getWarehouseProducts(accessToken, productCodes);
  }
```
---

### Retrive Active Warehouse Products
Retrieves the details of all active Warehouse details with product and available quantity.

#### Parameters
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private InventoryClient inventoryClient;

  public WHProductResponse getActiveWarehouseProducts(final String accessToken){
    return this.inventoryClient.getActiveWarehouseProducts(accessToken);
  }
```
---

## Objects
---
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

### WHProductResponse

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| warehouses | `list` | List of warehouse and product details. Attribute for [WarehouseShortInfo](#warehouseshortinfo) |

### WarehouseShortInfo

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| code | `string` | Warehouse specific unique code. |
| id | `long` | Unique identifier for the Warehouse. |
| location | [LocationDto](#locationdto) | Location details. |
| name | `string` | Warehouse Name. |
| primary | `boolean` | Has the value `true` if the warehouse is primary or `false` if the warehouse is not primary. |
| productAvailableQuantity | `Map` | Product Code and Available quantity Map. |
