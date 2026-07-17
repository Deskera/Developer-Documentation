---
id: account
title: Account Service
sidebar_label: Account
---

`Account` describe the customers and vendors accounts, that are associated with the `Tenant`. You can create, retrieve, update, and delete accounts by using API.
## Account Object

### Attributes
---
|Attribute| Type | Description |
|---------|------|-------------|
|id        |`long`|Unique identifier for the object.|
|accountCode|`string`|Unique accountCode assigned to the object.|
|name|`string`|Account name.|
|code|`string`|Unique code assigned to the object.|
|description|`string`|Account Description.|
|taxCode|`string`|Account tax code assigned to the object.|
|currency|`string`|Currency used.|
|accountGroup|`string`|Account Group Name. Attributes for [account group](#account_group).|
|accountGroupId|`string`|Account Group Id.|
|accountSubGroup|`string`|Account Sub Group Id.|
|accountSubGroupName|`string`|Account Sub Group Name.|
|isSubAccount|`boolean`|Has the value `true` if the account is a sub-account or `false` otherwise.|
|parent|`long`|Identifier of the parent account, when this account is a sub-account.|
|parentName|`string`|Name of the parent account, when this account is a sub-account.|
|status|`string`|Status of the account. Possible values for [account status](#status).|
|openingBalance|`BigDecimal`|Opening Balance Amount.|
|openingBalanceInAccountCurrency|`BigDecimal`|Opening balance amount in the account's currency.|
|exchangeRate|`BigDecimal`|Exchange rate.|
|balance|`BigDecimal`|Balance Amount.|
|balanceInAccountCurrency|`BigDecimal`|Balance amount in the account's currency.|
|totalBalance|`BigDecimal`|Total value of Opening Balance and Balance.|
|totalBalanceInAccountCurrency|`BigDecimal`|Total value of Opening Balance and Balance in the account's currency.|
|totalCOABalance|`BigDecimal`|Total value of Opening Balance and Balance with Nature.|
|totalCOABalanceInAccountCurrency|`BigDecimal`|Total value of Opening Balance and Balance with Nature in the account's currency.|
|openingBalanceCdType|`string`|Opening Balance Type. Possible values for [type](#opening_balance_type).|
|accountNature|`string`|Account Nature. Possible values for [account nature](#account_nature).|
|isDefault|`boolean`|Has the value `true` if this is a default (system) account or `false` otherwise.|
|openingBalanceEditable|`boolean`|Has the value `true` if the opening balance can still be edited or `false` otherwise.|
|isUndepositedFundAccount|`boolean`|Has the value `true` if this is the Undeposited Funds account or `false` otherwise.|
|isCreditCard|`boolean`|Has the value `true` if the account represents a credit card or `false` otherwise.|
|isTdsApplicable|`boolean`|Has the value `true` if TDS (Tax Deducted at Source) is applicable to this account or `false` otherwise.|
|natureOfIncomePayment|`string`|Nature of income payment, used for TDS calculation.|
|usedChequeNumbers|`string`|Cheque numbers already used against this account.|
|itcAdjustment|`enum`|ITC (Input Tax Credit) adjustment applied to the account. Possible values for [ITC adjustment](#itc_adjustment).|
|isRevalued|`boolean`|Has the value `true` if the account balance includes a currency revaluation or `false` otherwise.|
|glAccountCode|`string`|General ledger account code.|
|customField        |`list`|List of key-value pairs for custom field name and its value.|


## API
---
### Create Account
Creates a new account.

#### Parameters
- [accountRequest](#account) `AccountRequestDto`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private AccountsApiClient accountsApiClient;

  public AccountRequestDto createAccount(AccountRequestDto accountRequest, String accessToken){
    return this.accountsApiClient.createAccount(accountRequest, accessToken);
  }
```
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
---
### Update Account
Updates the details of an existing account.

#### Parameters
- accountId `long`
- [accountRequest](#account) `AccountRequestDto`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private AccountsApiClient accountsApiClient;

  public void updateAccount(Long accountId, AccountRequestDto accountRequest, String accessToken){
    this.accountsApiClient.updateAccount(accountId, accountRequest, accessToken);
  }
```
---
### Delete Account
Deletes an existing account. You only need to supply the unique account id that was returned upon account creation.

#### Parameters
- accountId `long`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private AccountsApiClient accountsApiClient;

  public void deleteAccount(Long accountId, String accessToken){
    this.accountsApiClient.deleteAccount(accountId, accessToken);
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
Request body used by [Create Account](#create-account) and [Update Account](#update-account).

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
|controlAccount|`boolean`|Has the value `true` if the control account flag is false or `false` if the control account flag is true.|
|openingBalanceCdType|`enum`|Credit / Debit Type. Possible values for [type](#type).|
|openingBalance|`BigDecimal`|Opening Balance Amount.|
|balance|`BigDecimal`|Balance Amount.|
|totalBalance|`BigDecimal`|Total value of Opening Balance and Balance.|
|exchangeRate|`BigDecimal`|Exchange rate.|
|isUndepositedFundAccount|`boolean`|Has the value `true` if this is the Undeposited Funds account or `false` otherwise.|
|isCreditCard|`boolean`|Has the value `true` if the account represents a credit card or `false` otherwise.|
|isTdsApplicable|`boolean`|Has the value `true` if TDS (Tax Deducted at Source) is applicable to this account or `false` otherwise.|
|natureOfIncomePayment|`string`|Nature of income payment, used for TDS calculation.|
|isSubAccount|`boolean`|Has the value `true` if the account is a sub-account or `false` otherwise.|
|parent|`long`|Identifier of the parent account, when this account is a sub-account.|
|parentName|`string`|Name of the parent account, when this account is a sub-account.|
|accountSubGroup|`long`|Identifier of the account sub-group.|
|accountSubGroupName|`string`|Name of the account sub-group.|
|sequenceFormat|`string`|Sequence format id.|
|itcAdjustment|`enum`|ITC (Input Tax Credit) adjustment applied to the account. Possible values for [ITC adjustment](#itc_adjustment).|
|isRevalued|`boolean`|Has the value `true` if the account balance includes a currency revaluation or `false` otherwise.|
|glAccountCode|`string`|General ledger account code.|
|customField        |`list`|List of key-value pairs for custom field name and its value.|

## Enums
---

### STATUS
- ACTIVE
- INACTIVE

### OPENING_BALANCE_TYPE
- CREDIT
- DEBIT

### ACCOUNT_NATURE
- Asset
- Liability
- Income
- Expenses
- Equity

### ITC_ADJUSTMENT
- NA
- ITC_IS_BLOCKED
- ITC_IS_REVERSED

### TYPE
- CREDIT
- DEBIT
