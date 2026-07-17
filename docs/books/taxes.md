---
id: taxes
title: Tax Service
sidebar_label: Tax
---
`Tax` describe the taxes that are associated with the `Tenant`. You can retrieve taxes by using API.
## Tax Object

### Attributes
---
|Attribute| Type | Description |
|---------|------|-------------|
|id|`long`|Unique identifier for the object.|
|name|`string`|Name of the tax.|
|taxCode|`string`|Code of Tax.|
|accountCode|`string`|Account code of tax's account.|
|accountName|`string`|Name of Tax's account.|
|type|`enum`|Type of taxes. Possible values for [type](#type).|
|description|`string`|Tax account description.|
|percent|`BigDecimal`|Tax's percentage.|
|code|`string`|Tax code.|
|status|`string`|Tax Status.|
|deleted|`boolean`|Has the value `true` if the tax is deleted  or `false` if the tax still exist.|
|tenantId|`long`|Unique identifier for the object.|
|category|`enum`|Type of tax category. Possible values for [category](#category).|
|taxSectionAus|`enum`|Australia BAS tax section. Possible values for [taxSectionAus](#tax_section_aus).|
|basReporting|`string`|Australia BAS reporting value.|
|taxAccountCode|`string`|Tax account code.|
|taxGroupDetails|`list`|List of taxes that make up this tax group, when `isTaxGroup` is `true`. Attribute for [TaxGroupDetails](#taxgroupdetails).|
|netAmountBefore|`string`|Net amount before memo text.|
|taxAmountIn|`string`|Tax amount included memo text.|
|isTaxGroup|`boolean`|Has the value `true` if this tax is a group of multiple taxes or `false` otherwise.|
|isDefault|`boolean`|Has the value `true` if this tax is the default tax or `false` otherwise.|
|taxAgencyCan|`string`|Canada tax agency.|
|netAmountUk|`string`|UK net amount before memo text.|
|taxAmountUk|`string`|UK tax amount included memo text.|
|defaultMemoUk|`string`|UK default memo text.|
|flatRateSchemeUk|`boolean`|Has the value `true` if UK flat rate VAT scheme applies or `false` otherwise.|
|showInReportsID|`boolean`|Has the value `true` if the tax should be shown in Indonesia reports or `false` otherwise.|
|netAmountBeforeNL|`string`|Netherlands net amount before memo text.|
|taxAmountInNL|`string`|Netherlands tax amount included memo text.|
|defaultMemoNL|`string`|Netherlands default memo text.|
|netAmountBeforeBE|`string`|Belgium net amount before memo text.|
|taxAmountInBE|`string`|Belgium tax amount included memo text.|
|defaultMemoBE|`string`|Belgium default memo text.|
|netAmountDe|`string`|Germany net amount before memo text.|
|taxAmountDe|`string`|Germany tax amount included memo text.|
|defaultMemoDe|`string`|Germany default memo text.|
|additionalTaxIn|`boolean`|Has the value `true` if this is an additional inclusive tax or `false` otherwise.|
|taxSectionSAR|`string`|Saudi Arabia tax section.|
|effectiveStartDate|`string`|Date the tax rate becomes effective.|
|effectiveEndDate|`string`|Date the tax rate stops being effective.|

## API
---

### List All Taxes
Returns a paginated list of taxes.

#### Parameters
- [accessToken](#access-token) `string`
- search `string`
- query `string`
- sort `string`
- sortDir `string`
- page `int`
- limit `int`

#### Code

```java
  @Autowired
  private TaxesApiClient taxesApiClient;

  public Page<TaxDto> getTaxes(String accessToken, String search, String query, String sort,
      String sortDir, Integer page, Integer limit){
    return this.taxesApiClient.getTaxes(accessToken, search, query, sort, sortDir, page, limit);
  }
```
---
### Retrieve Tax
Retrieves the details of an existing tax. You only need to supply the unique identifier that was returned upon tax creation.

#### Parameters
- [accessToken](#access-token) `string`
- id `long`

#### Code

```java
  @Autowired
  private TaxesApiClient taxesApiClient;

  public TaxDto getById(String accessToken, Long id){
    return this.taxesApiClient.getById(accessToken, id);
  }
```
---
### Create Tax
Creates a new tax.

#### Parameters
- [taxDto](#tax-object) `TaxDto`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private TaxesApiClient taxesApiClient;

  public Long createTax(TaxDto taxDto, String accessToken){
    return this.taxesApiClient.createTax(taxDto, accessToken);
  }
```
---
### Update Tax
Updates an existing tax. You only need to supply the unique identifier that was returned upon tax creation.

#### Parameters
- id `long`
- [taxDto](#tax-object) `TaxDto`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private TaxesApiClient taxesApiClient;

  public void updateTax(Long id, TaxDto taxDto, String accessToken){
    this.taxesApiClient.updateTax(id, taxDto, accessToken);
  }
```
---
### Update Tax Status
Updates the status (active/inactive) of an existing tax.

#### Parameters
- id `long`
- status `string`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private TaxesApiClient taxesApiClient;

  public Boolean updateTaxStatus(Long id, String status, String accessToken){
    return this.taxesApiClient.updateTaxStatus(id, status, accessToken);
  }
```
---
### Delete Tax
Deletes an existing tax. You only need to supply the unique identifier that was returned upon tax creation.

#### Parameters
- id `long`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private TaxesApiClient taxesApiClient;

  public void deleteTaxById(Long id, String accessToken){
    this.taxesApiClient.deleteTaxById(id, accessToken);
  }
```
---
### Bulk Delete Tax
Deletes a list of existing taxes.

#### Parameters
- [deleteTaxCriteria](#deletetaxcriteria) `DeleteTaxCriteria`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private TaxesApiClient taxesApiClient;

  public List<BulkTaxDeleteResponse> deleteTax(DeleteTaxCriteria deleteTaxCriteria, String accessToken){
    return this.taxesApiClient.deleteTax(deleteTaxCriteria, accessToken);
  }
```

## Objects
---
### TaxGroupDetails

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| id | `long` | Unique identifier for the grouped tax. |
| code | `string` | Code of the grouped tax. |
| name | `string` | Name of the grouped tax. |
| percentage | `BigDecimal` | Percentage of the grouped tax. |
| type | `string` | Type of the grouped tax. |
| applyTo | `string` | What the grouped tax applies to. |
| additionalTaxIn | `boolean` | Has the value `true` if this is an additional inclusive tax or `false` otherwise. |

### DeleteTaxCriteria

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| taxIdList | `list` | List of tax ids to delete. |

### BulkTaxDeleteResponse

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| id | `long` | Identifier of the tax the response is for. |
| httpStatus | `string` | HTTP status of the delete attempt for this tax.<br/>*Example:* `"404 NOT_FOUND"` |
| reason | `string` | Reason for failure, when the delete attempt did not succeed. |

## Enums
---

### TYPE
- SALES
- PURCHASE
- BOTH

### CATEGORY
- SYSTEM
- CUSTOM

### TAX_SECTION_AUS
- DEFAULT_GST
- EXPORT_SALES
- OTHER_GST
- INPUT_TAX_SALES
- CAPITAL_PURCHASES
- NONCAPITAL_PURCHASES
- INPUT_TAX_PURCHASES
- EXCLUDED_FROM_BAS
