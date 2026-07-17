---
id: product
title: Product Service
sidebar_label: Product
---

`Product` describe the goods or services you are offering to your customers or vendors. For example, you might offer Essential and Premium
version of your product. Offering of each version of your product would be separate product with different [pricing](https://www.deskera.com/deskera-pricing/). 
You can create, retrieve, update, and delete products by using API.

## ProductRequest Object

### Attributes
---
|Attribute| Type | Description |
|---------|------|-------------|
|name|`string`|Name of the product.|
|type|`enum`|Type of the product. Possible values for [product type](#producttype).|
|productTransactionType|`enum`|Transaction type of the product. Possible values for [product transaction type](#producttransactiontype).|
|barcode|`string`|Barcode of product.|
|description|`string`|Description of the product.|
|purchasePrice|`double`|Purchase price of the product.|
|salesPrice|`double`|Sales price of the product.|
|purchaseAccountCode|`string`|Purhcase account code.|
|salesAccountCode|`string`|Sales account code.|
|purchaseReturnAccountCode|`string`|Purchase return account code.|
|salesReturnAccountCode|`string`|Sales return account code.|
|manufacturingCostAccountCode|`string`|Manufacturing cost account code.|
|purchaseTaxCode|`string`|Purchase tax code.|
|salesTaxCode|`string`|Sales tax code.|
|purchasePriceTaxInclusive|`boolean`|Has the value `true` if the purchase price of the product is inclusive of tax or `false` if the purchase price of the product is exclusive of tax.|
|salesPriceTaxInclusive|`boolean`|Has the value `true` if the sales price of the product is inclusive of tax or `false` if the sales price of the product is exclusive of tax.|
|autoFulfillmentEnabled|`boolean`|Has the value `true` if auto fulfillment is enabled for the product or `false` otherwise.|
|isFinishedProduct|`boolean`|Has the value `true` if the product is a finished product or `false` otherwise.|
|stockUom        |`long`|Unit of measurement for stock.|
|images        |`array`|Array of image URLs of the product.|
|inventory        |`InventoryDto`|[Inventory](#inventorydto) information of the product.|
|categoryCode        |`string`|Category code of product.|
|categoryDesc        |`string`|Category description of product.|
|taxable|`boolean`|Has the value `true` if the product is taxable or `false` if the product is not taxable.|
|customField        |`list`|List of key-value pairs for custom field name and its value.|
|bomMetaList|`list`|List of bill-of-materials component details for the product.|
|bomOperationList|`list`|List of bill-of-materials operation details for the product.|
|bomAdditionalCostList|`list`|List of bill-of-materials additional cost details for the product.|
|bomMetaDetailsList|`list`|List of bill-of-materials meta details for the product.|
|reorderEnabled|`boolean`|Has the value `true` if the reordering is enabled or `false` if the reordering is disabled.|
|reorderLevel        |`long`|Reorder level of the product.|
|reorderQuantity|`long`|Reorder quantity of the product.|
|reorderVendorCode|`string`|Vendor code used for reordering the product.|
|restockLevel|`BigDecimal`|Restock level of the product.|
|restockBuildQuantity|`BigDecimal`|Restock build quantity of the product.|
|documentSequenceCode|`string`|Unique code associated with the product.|
|sequenceFormat|`string`|Sequence format id.|
|advancedTracking|`enum`|Advanced tracking type of the product. Possible values for [advanced tracking type](#advancedtrackingtype).|
|advancedTrackingMetaData|`list`|List of advanced tracking (batch/serial) details for the product.|
|exciseRateIndo|`BigDecimal`|Excise rate for Indonesia.|
|isVariant|`boolean`|Has the value `true` if the product is a variant of another product or `false` otherwise.|
|hasVariants|`boolean`|Has the value `true` if the product has variants or `false` otherwise.|
|masterProductCode|`string`|Code of the master product, when this product is a variant.|
|attributes|`list`|List of variant attribute definitions.|
|variantAttributes|`map`|Map of variant attribute name to value.|
|multipleUomSchema|`boolean`|Has the value `true` if the product uses multiple units of measurement or `false` otherwise.|
|uomSchema|`long`|Identifier of the unit of measurement schema used by the product.|
|bomProductCostDetails|`list`|List of bill-of-materials product cost details.|
|inventoryWarehouseDetails|`list`|List of warehouse-level inventory details for the product.|
|reorderVendorName|`string`|Vendor name used for reordering the product.|
|source|`string`|Source of the product record.|
|landedCostCategory|`array`|Array of landed cost categories associated with the product.|
|barcodeDetails|`object`|Additional barcode details of the product.|
|productSubstitutesDetails|`list`|List of substitute products for the product.|
|deferredRevenueAccountCode|`string`|Deferred revenue account code.|
|unbilledAccountReceivableAccountCode|`string`|Unbilled accounts receivable account code.|
|basePrice|`double`|Base price of the product.|
|revenueRecognitionInfo|`object`|Revenue recognition details of the product.|
|valuationMethod|`enum`|Valuation method of the product. Possible values for [valuation method](#valuationmethod).|
|deferredExpenseAccountCode|`string`|Deferred expense account code.|
|amortizationTemplateCode|`string`|Amortization template code.|
|amortizationPeriod|`int`|Amortization period, in months.|
|hasConsentForImageUpdate|`boolean`|Has the value `true` if consent was given to update product images or `false` otherwise.|
|attachments|`array`|Array of file attachments.|
|leadTimeDetails|`list`|List of vendor lead time details for the product.|
|productGroupIds|`list`|List of product group identifiers the product belongs to.|
|quotePriceEditable|`boolean`|Has the value `true` if the price is editable on a quotation or `false` otherwise.|
|preferredVendorDetails|`list`|List of preferred vendor details for the product.|



## API
---
### Create Product
Creates a new product.

#### Parameters
- [productRequest](#productrequest-object) `ProductRequest`
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
### Update Product
Updates the details of an existing product.

#### Parameters
- productId `long`
- [productRequest](#productrequest-object) `ProductRequest`
- [accessToken](#access-token) `string`

#### Code
```java
  @Autowired
  private ProductsApiClient productsApiClient;

  public ProductResponse updateProduct(Long productId, ProductRequest productRequest, String accessToken){
    return this.productsApiClient.updateProduct(productId, productRequest, accessToken);
  }
```
---
### Delete Products
Deletes one or more existing products.

#### Parameters
- productIds `set of long`
- [accessToken](#access-token) `string`

#### Code
```java
  @Autowired
  private ProductsApiClient productsApiClient;

  public BulkApiResponse deleteProducts(Set<Long> productIds, String accessToken){
    return this.productsApiClient.deleteProducts(productIds, accessToken);
  }
```
---
### Search Products
Returns a paginated list of products matching the given filter criteria.

#### Parameters
- [accessToken](#access-token) `string`
- search `string`
- barcode `string`
- customfield `string`
- sort `string`
- sortDir `string`
- page `int`
- limit `int`
- contactCode `string`
- [productTransactionType](#producttransactiontype) `string`

#### Code

```java
  @Autowired
  private ProductsApiClient productsApiClient;

  public CustomPage<ProductResponse> searchProducts(String search, String barcode, String customfield, String sort,
      String sortDir, Integer page, Integer limit, String contactCode, ProductTransactionType productTransactionType,
      String accessToken){
    return this.productsApiClient.searchProducts(search, barcode, customfield, sort, sortDir, page, limit,
        contactCode, productTransactionType, accessToken);
  }
```
---
### Get Product Brief Info
Returns a lightweight list of products, useful for populating product selectors.

#### Parameters
- [accessToken](#access-token) `string`
- search `string`
- page `int`
- limit `int`

#### Code

```java
  @Autowired
  private ProductsApiClient productsApiClient;

  public List<ProductShortInfo> getProductBriefInfo(String search, Integer page, Integer limit, String accessToken){
    return this.productsApiClient.getProductBriefInfo(search, page, limit, accessToken);
  }
```
---
### Toggle Product Status
Activates or deactivates one or more existing products.

#### Parameters
- productCodes `set of string`
- status `boolean`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private ProductsApiClient productsApiClient;

  public void toggleProductStatus(Set<String> productCodes, Boolean status, String accessToken){
    this.productsApiClient.toggleProductStatus(productCodes, status, accessToken);
  }
```

## Objects
---

### ProductResponse
`ProductResponse` includes all attributes of [ProductRequest](#productrequest-object), plus the following response-only attributes.

|Attribute| Type | Description |
|---------|------|-------------|
|id|`long`|Unique identifier for the product.|
|productId|`string`|Unique code assigned to the product.|
|active|`boolean`|Has the value `true` if the product is active or `false` if the product is not active.|
|deleted|`boolean`|Has the value `true` if the product is deleted or `false` if the product is not deleted.|
|variantCount|`int`|Number of variants the product has.|
|recommendedUom|`long`|Recommended unit of measurement identifier for the product.|
|uomSchemaDto|`object`|Unit of measurement schema details of the product.|
|incomingQty|`BigDecimal`|Incoming quantity of the product.|
|outgoingQty|`BigDecimal`|Outgoing quantity of the product.|
|reorderLevelReached|`boolean`|Has the value `true` if the product's available quantity has reached its reorder level or `false` otherwise.|
|reorderVendorName|`string`|Vendor name used for reordering the product.|
|hasBuildAssembly|`boolean`|Has the value `true` if the product has a build assembly or `false` otherwise.|
|attachmentsWithLink|`list`|List of attachment details including download links.|
|isArchived|`boolean`|Has the value `true` if the product is archived or `false` otherwise.|

### ProductShortInfo
Lightweight product representation returned by [Get Product Brief Info](#get-product-brief-info).

|Attribute| Type | Description |
|---------|------|-------------|
|pid|`string`|Unique code assigned to the product.|
|id|`long`|Unique identifier for the product.|
|documentSequenceCode|`string`|Unique code associated with the product.|
|name|`string`|Name of the product.|
|description|`string`|Description of the product.|
|type|`string`|Type of the product.|
|barcode|`string`|Barcode of the product.|
|availableQuantity|`BigDecimal`|Available quantity of the product.|
|reservedQuantity|`BigDecimal`|Reserved quantity of the product.|
|openingQuantity|`BigDecimal`|Opening quantity of the product.|
|status|`boolean`|Has the value `true` if the product is active or `false` if the product is not active.|
|categoryCode|`string`|Category code of the product.|
|unitPrice|`BigDecimal`|Unit price of the product.|
|taxable|`boolean`|Has the value `true` if the product is taxable or `false` if the product is not taxable.|
|hasVariants|`boolean`|Has the value `true` if the product has variants or `false` otherwise.|
|isVariant|`boolean`|Has the value `true` if the product is a variant of another product or `false` otherwise.|
|masterProductCode|`string`|Code of the master product, when this product is a variant.|
|advancedTracking|`enum`|Advanced tracking type of the product. Possible values for [advanced tracking type](#advancedtrackingtype).|
|product_transaction_type|`string`|Transaction type of the product.|
|stockUom|`int`|Unit of measurement for stock.|
|uomSchema|`long`|Identifier of the unit of measurement schema used by the product.|
|multipleUomSchema|`boolean`|Has the value `true` if the product uses multiple units of measurement or `false` otherwise.|
|recommendedUom|`long`|Recommended unit of measurement identifier for the product.|
|uomSchemaDto|`object`|Unit of measurement schema details of the product.|
|salesPrice|`BigDecimal`|Sales price of the product.|
|purchasePrice|`BigDecimal`|Purchase price of the product.|
|reorderLevel|`long`|Reorder level of the product.|
|reorderQuantity|`long`|Reorder quantity of the product.|
|incomingQty|`BigDecimal`|Incoming quantity of the product.|
|outgoingQty|`BigDecimal`|Outgoing quantity of the product.|
|openingValuation|`BigDecimal`|Opening valuation of the product.|
|customField|`list`|List of key-value pairs for custom field name and its value.|
|landedCostCategory|`array`|Array of landed cost categories associated with the product.|
|valuationMethod|`enum`|Valuation method of the product. Possible values for [valuation method](#valuationmethod).|
|bomMetaDetailsList|`list`|List of bill-of-materials meta details for the product.|
|bomOperationList|`list`|List of bill-of-materials operation details for the product.|
|bomAdditionalCostList|`list`|List of bill-of-materials additional cost details for the product.|
|bomMetaList|`list`|List of bill-of-materials component details for the product.|
|restockLevel|`BigDecimal`|Restock level of the product.|
|restockBuildQuantity|`BigDecimal`|Restock build quantity of the product.|
|active|`boolean`|Has the value `true` if the product is active or `false` if the product is not active.|
|warehouseCode|`string`|Warehouse code.|
|rowCode|`string`|Row code within the warehouse.|
|rackCode|`string`|Rack code within the warehouse.|
|binCode|`string`|Bin code within the warehouse.|
|rowName|`string`|Row name within the warehouse.|
|rackName|`string`|Rack name within the warehouse.|
|binName|`string`|Bin name within the warehouse.|

### InventoryDto
|Attribute| Type | Description |
|---------|------|-------------|
|openingQuantity|`double`|Opening quantity of the product.|
|openingValuation|`double`|Opening valuation of the product.|
|availableQuantity|`double`|Available quantity of the product.|
|reservedQuantity|`double`|Reserved quantity of the product.|
|unAssignedQuantity|`double`|Unassigned quantity of the product.|
|costOfGoodsSoldAccountCode|`string`|Cost of goods sold account code.|
|inventoryAccountCode|`string`|Inventory account code.|
|wipInventoryAccountCode|`string`|Work-in-progress inventory account code.|
|stockAdjustmentAccountCode|`string`|Stock adjustment account code.|
|inventoryAccountName|`string`|Inventory account name.|
|warehouseCode|`string`|Warehouse code.|
|rowCode|`string`|Row code within the warehouse.|
|rackCode|`string`|Rack code within the warehouse.|
|binCode|`string`|Bin code within the warehouse.|
|rowName|`string`|Row name within the warehouse.|
|rackName|`string`|Rack name within the warehouse.|
|binName|`string`|Bin name within the warehouse.|
|landedCostWeight|`BigDecimal`|Landed cost weight of the product.|

## Enums
---
### ProductType
- `TRACKED`
- `NONTRACKED`
- `BILL_OF_MATERIALS`

### ProductTransactionType
- `BOTH`
- `PURCHASE`
- `SALES`

### AdvancedTrackingType
- `NONE`
- `BATCH`
- `SERIAL`

### ValuationMethod
- `FIFO`
- `AVERAGE`
