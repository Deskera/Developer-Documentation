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
|description|`string`|Tax account descriptioon.|
|percent|`BigDecimal`|Tax's percentage.|
|code|`string`|Tax code.|
|status|`string`|Tax Status.|
|deleted|`boolean`|Has the value `true` if the tax is deleted  or `false` if the tax still exist.|
|tenantId|`long`|Unique identifier for the object.|
|category|`enum`|Type of tax category. Possible values for [category](#category).|

## API
---

### List All Taxes
#### Parameters
- [accessToken](#access-token) `string`
- limit `int`
- page `int`

#### Code

```java
  @Autowired
  private TaxesApiClient taxesApiClient;

  public Taxes getTaxes(String accessToken, Integer limit, Integer page){
    return this.taxesApiClient.getTaxes(accessToken, limit, page);
  }
```

## Enums
---

### TYPE
- Sales
- Purchases
- Both

### Category
- System
- Custom
