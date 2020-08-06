---
id: product
title: Product Service
sidebar_label: Product
---

`Product` describe the goods or services you are offering to your customers or vendors. For example, you might offer Essential and Premium
version of your product. Offering of each version of your product would be separate product with different [pricing](https://www.deskera.com/deskera-pricing/). 
You can create, and retrieve products by using API.

## ProductRequest Object

### Attributes
---
|Attribute| Type | Description |
|---------|------|-------------|
|name|`string`|Name of the product.|
|type|`enum`|Type of the product. Possible values for [product type](#producttype).|
|barcode|`string`|Barcode of product.|
|description|`string`|Description of the product.|
|purchasePrice|`double`|Purchase price of the product.|
|salesPrice|`double`|Sales price of the product.|
|purchaseAccountCode|`string`|Purhcase account code.|
|salesAccountCode|`string`|Sales account code.|
|purchaseReturnAccountCode|`string`|Purchase return account code.|
|salesReturnAccountCode|`string`|Sales return account code.|
|purchaseTaxCode|`string`|Purchase tax code.|
|salesTaxCode|`string`|Sales tax code.|
|purchasePriceTaxInclusive|`boolean`|Has the value `true` if the purchase price of the product is inclusive of tax or `false` if the purchase price of the product is exclusive of tax.|
|salesPriceTaxInclusive|`boolean`|Has the value `true` if the sales price of the product is inclusive of tax or `false` if the sales price of the product is exclusive of tax.|
|stockUom        |`long`|Unit of measurement for stock.|
|images        |`string`|Image of the product.|
|inventory        |`InventoryDto`|[Inventory](#inventorydto) information of the product.|
|categoryCode        |`string`|Category code of product.|
|categoryDesc        |`string`|Category description of product.|
|taxable|`boolean`|Has the value `true` if the product is taxable or `false` if the product is not taxable.|
|customField        |`jsonobject`|Key-value pair for custom field name and its value.|
|reorderEnabled|`boolean`|Has the value `true` if the reordering is enabled or `false` if the reordering is disabled.|
|reorderLevel        |`long`|Reorder level of the product.|



## API
---
### Create Product
Creates a new product

#### Parameters
- [contactDto](#contact-object) `ContactDto`
- [accessToken](#access-token) `string`

#### Code
```java
  @Autowired
  private ProductsApiClient productsApiClient;

  public ProductResponse createProduct(ProductRequest productRequest, String accessToken){
    return this.productsApiClient.createProduct(productRequest, accessToken);
  }
```
---

### List All Products
Returns list of products.

#### Parameters
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private ProductsApiClient productsApiClient;

  public List<ProductShortInfo> getProducts(String accessToken){
    return this.productsApiClient.getProductBriefInfo(accessToken);
  }
```
---

## Objects
---

### ProductResponse
|Attribute| Type | Description |
|---------|------|-------------|
|id|`long`|Unique identifier for the product.|
|productId|`string`|Unique code assigned to the product.|
|active|`boolean`|Has the value `true` if the product is active or `false` if the product is not active.|
|deleted|`boolean`|Has the value `true` if the product is deleted or `false` if the product is not deleted.|
|name|`string`|Name of the product.|
|type|`enum`|Type of the product. Possible values for [product type](#producttype).|
|barcode|`string`|Barcode of product.|
|description|`string`|Description of the product|
|purchasePrice|`double`|Purchase price of the product.|
|salesPrice|`double`|Sales price of the product.|
|purchaseAccountCode|`string`|Purhcase account code.|
|salesAccountCode|`string`|Sales account code.|
|purchaseReturnAccountCode|`string`|Purchase return account code.|
|salesReturnAccountCode|`string`|Sales return account code.|
|purchaseTaxCode|`string`|Purchase tax code.|
|salesTaxCode|`string`|Sales tax code.|
|purchasePriceTaxInclusive|`boolean`|Has the value `true` if the purchase price of the product is inclusive of tax or `false` if the purchase price of the product is exclusive of tax.|
|salesPriceTaxInclusive|`boolean`|Has the value `true` if the sales price of the product is inclusive of tax or `false` if the sales price of the product is exclusive of tax.|
|stockUom        |`long`|Unit of measurement for stock.|
|images        |`string`|Image of the product.|
|inventory        |`InventoryDto`|[Inventory](#inventorydto) information of the product.|
|categoryCode        |`string`|Category code of product.|
|categoryDesc        |`string`|Category description of product.|
|taxable|`boolean`|Has the value `true` if the product is taxable or `false` if the product is not taxable.|
|customField        |`jsonobject`|Key-value pair for custom field name and its value.|
|reorderEnabled|`boolean`|Has the value `true` if the reordering is enabled or `false` if the reordering is disabled.|
|reorderLevel        |`long`|Reorder level of the product.|


### InventoryDto
|Attribute| Type | Description |
|---------|------|-------------|
|openingQuantity|`double`|Opening quantity of the product.|
|openingValuation|`double`|Opening valuation of the product.|
|availableQuantity|`double`|Available quantity of the product.|
|costOfGoodsSoldAccountCode|`string`|Cost of goods sold account code.|
|inventoryAccountCode|`string`|Inventory account code.|
|stockAdjustmentAccountCode|`string`|Stock adjustment account code.|
|inventoryAccountName|`string`|Inventory account name.|
|warehouseCode|`string`|Warehouse code.|

## Enums
---
### ProductType
- `TRACKED`
- `NONTRACKED`
- `BILL_OF_MATERIALS`
