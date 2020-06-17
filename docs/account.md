---
id: account
title: Account Service
sidebar_label: Account
---

`Account` describe the customers and vendors accounts, that are associated with the `Tenant`. You can retrieve all accounts or by its id by using API.
## Account Object

### Attributes
---
|Attribute| Type | Description |
|---------|------|-------------|
|id        |`long`|Unique identifier for the object.|
|accountCode|`string`|Unique accountCode assigned to the object.|
|name|`string`|Account name. Possible values for [name](#account_name).|
|code|`string`|Unique code assigned to the object.|
|description|`string`|Account Description.|
|taxCode|`string`|Account tax code assigned to the object.|
|currency|`string`|Currency used.|
|accountGroup|`string`|Account Group Name. Attributes for [account group](#account_group).|
|accountGroupId|`string`|Account Group Id.|
|status|`string`|Status of the account. Possible values for [account status](#status).|
|openingBalance|`BigDecimal`|Opening Balance Amount.|
|balance|`BigDecimal`|Balance Amount. Attributes for [balance](#balance).|
|totalBalance|`BigDecimal`|Total value of Opening Balance and Balance.|
|totalCOABalance|`BigDecimal`|Total value of Opening Balance and Balance with Nature.|
|openingBalanceCdType|`string`|Opening Balance Type. Possible values for [type](#opening_balance_type).|
|accountNature|`string`|Account Nature. Possible values for [account nature](#account_nature).|
|customField        |`jsonobject`|Key-value pair for custom field name and its value.|


## API
---
### Retrieve Account
Retrieves the details of an existing account. You need only supply the unique account id that was returned upon account creation.

#### Parameters
- accountId `long`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private AccountsApiClient accountsApiClient;

  public AccountDto getAccountById(Long accountId, String accessToken){
    return this.accountsApiClient.getById(accountId, accessToken);
  }
```
---  

### List All Accounts
Returns list of accounts.

#### Parameters
- [accessToken](#access-token) `string`
- limit `int`
- page `int`

#### Code

```java
  @Autowired
  private AccountsApiClient accountsApiClient;

  public Accounts getAccounts(String accessToken, Integer limit, Integer page){
    return this.accountsApiClient.getAccounts(accessToken, limit, page);
  }
```

## Objects
---
### Account_Group
|Attribute|Type| Description|
|---------|----|------------|
|id|`long`|Unique identifier for the object.|
|name|`string`|Account Group Name.|
|parentId|`long`|ID of AccountGroup Parent.|
|accountNatureId|`long`|ID of Account Nature.|
|parentName|`string`|Name of AccountGroup Parent.|
|isDeleted|`boolean`|Has the value `true` if the accountGroup is deleted  or `false` if the accountGroup still exist.|
|accountMaster|`long`|Identifier for accountMaster.|
|code|`string`|Account Code|

### Balance
|Attribute|Type| Description|
|---------|----|------------|
|cdType|`enum`|Credit / Debit Type. Possible values for [type](#type).|
|openingBalance|`BigDecimal`|Opening Balance Amount.|
|accountCode|`string`|Unique accountCode assigned to the object.|

### Bank_Account
|Attribute|Type| Description|
|---------|----|------------|
|bankNumber|`string`|Unique identifier for the object.|
|bankName|`string`|Bank Account Name. |
|connectStatus|`boolean`|Has the value `true` if the status is *active*  or `false` if the status is *deactive*.|

### Account
|Attribute|Type| Description|
|---------|----|------------|
|id|`long`|Unique identifier for the object.|
|accountCode|`string`|Unique accountCode assigned to the object.|
|name|`string`|Account Name.|
|description|`string`|Account Description.|
|accountGroupId|`long`|Account Group ID|
|accountGroupName|`string`|Name of Account Group.|
|taxCode|`string`|Account Tax code.|
|currency|`string`|Account Currency.|
|status|`string`|Status of the account. Possible values for [account status](#status).|
|controlAccount|`boolean`|Has the value `true` if the control acocunt flag is xxx or `false` if the control acocunt flag is xxx.|
|openingBalanceCdType|`enum`|Credit / Debit Type. Possible values for [type](#type).|
|customField        |`jsonobject`|Key-value pair for custom field name and its value.|

## Enums
---

### ACCOUNT_NAME
- Savings account

### STATUS
- ACTIVE
- INACTIVE

### OPENING_BALANCE_TYPE
- CREDIT
- DEBIT

### ACCOUNT_NATURE

### TYPE
- CREDIT
- DEBIT
 