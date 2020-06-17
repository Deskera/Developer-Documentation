---
id: accountapi
title: Account APIs
sidebar_label: Account
---
An account is a record in the general ledger that is used to sort and store transactions. Accounts are typically defined by an identifier (account number) and a caption or header and are coded by account type. An account refers to assets, liabilities, income, expenses, and equity, as represented by individual ledger pages, to which changes in value are chronologically recorded with [debit and credit entries](https://www.deskera.com/sg/books/journal-entries-with-deskera/).

A [chart of accounts](https://www.deskera.com/sg/books/chart-of-accounts-with-deskera-books/) (COA) is a created list of the accounts used by an organization to define each class of items for which money or its equivalent is spent or received.

`AccountDto` help you to create a new account, update a particular account, retrieve account, or get the list of all accounts.

More about [Account API documentation](https://deskera.docs.apiary.io/#reference/account-apis)

## API
---

### Search Account
Get accounts by filter criteria. [More about search account](https://deskera.docs.apiary.io/#reference/account-apis/v1account/get-accounts-by-filter-criteria)

##### Description:

- Allows you to retrieve a list of all accounts.
- Allows you to retrieve a list of account details based on it's filter criteria. 

#### GET

#### /v1/account
##### Request URL

```java
https://bifrost.deskera.com/v1/account?limit=10&page=0&sort=createdOn&sortDir=desc
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/account?limit=10&page=0&sort=createdOn&sortDir=desc" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Sample Response

```java
{
  "content": [
      {
        "accountCode": "Saving Account",
        "accountGroup": "Sample Account Group",
        "accountGroupId": "SA001",
        "accountNature": "ASSET",
        "balance": 999.99,
        "balanceInAccountCurrency": 999.99,
        "code": "Sample Code",
        "currency": "SGD",
        "customField": [
            {
            "label": "Label",
            "module": "Account",
            "value": "Extra information"
            }
        ],
        "description": "Savings account",
        "exchangeRate": 1,
        "id": 1,
        "name": "Savings account",
        "openingBalance": 999.99,
        "openingBalanceCdType": "DEBIT",
        "openingBalanceInAccountCurrency": 999.99,
        "status": "ACTIVE",
        "taxCode": "Tax Code",
        "totalBalance": 999.99,
        "totalBalanceInAccountCurrency": 999.99,
        "totalCOABalance": 999.99,
        "totalCOABalanceInAccountCurrency": 999.99
     }
  ],
  "pageable": {
    "sort": {
      "sorted": true,
      "unsorted": false,
      "empty": false
    },
    "pageSize": 10,
    "pageNumber": 0,
    "offset": 0,
    "paged": true,
    "unpaged": false
  },
  "totalElements": 0,
  "last": true,
  "totalPages": 0,
  "first": true,
  "sort": {
    "sorted": true,
    "unsorted": false,
    "empty": false
  },
  "numberOfElements": 0,
  "size": 10,
  "number": 0,
  "empty": true
}

```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AccountDto](#accountdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Create Account
Create a new account. [More about create account](https://deskera.docs.apiary.io/#reference/account-apis/v1account/get-accounts-by-filter-criteria)

##### Description:

- Allows you to create a new account.

#### POST
#### /v1/account

##### Request URL

```java
https://bifrost.deskera.com/v1/account
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/account" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"accountCode\": \"Saving Account\", \"accountGroupId\": 1, \"accountGroupName\": \"Sample Account Group\", \"balance\": 999.99, \"currency\": \"SGD\", \"customField\": [ { \"label\": \"Label\", \"module\": \"string\", \"value\": \"XYZ\" } ], \"description\": \"Savings account description\", \"name\": \"Savings account\", \"openingBalance\": 999.99, \"openingBalanceCdType\": \"DEBIT\", \"taxCode\": \"Tax Code\", \"totalBalance\": 999.99}"
```


##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| accountRequestDto | body | accountRequestDto | Yes | [AccountRequestDto](#accountrequestdto) |

##### Sample Resquest

```java
{
  "accountCode": "Saving Account",
  "accountGroupId": 1,
  "accountGroupName": "Sample Account Group",
  "balance": 999.99,
  "currency": "SGD",
  "customField": [
    {
      "label": "Label",
      "module": "Account",
      "value": "Extra information"
    }
  ],
  "description": "Savings account description",
  "name": "Savings account",
  "openingBalance": 999.99,
  "openingBalanceCdType": "DEBIT",
  "taxCode": "Tax Code",
  "totalBalance": 999.99
}
```

##### Sample Response

```java
{
  "accountCode": "Saving Account",
  "accountGroupId": 1,
  "accountGroupName": "Sample Account Group",
  "balance": 999.99,
  "currency": "SGD",
  "customField": [
    {
      "label": "Label",
      "module": "Account",
      "value": "Extra information"
    }
  ],
  "description": "Savings account description",
  "name": "Savings account",
  "openingBalance": 999.99,
  "openingBalanceCdType": "DEBIT",
  "taxCode": "Tax Code",
  "totalBalance": 999.99
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AccountRequestDto](#accountrequestdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Retrieve Account
Get account by id. [More about retrieve account](https://deskera.docs.apiary.io/#reference/account-apis/v1accountid/get-account-by-id)

##### Description:

- Allows you to retrieve a specific account details.

#### GET
#### /v1/account/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/account/1
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/account/1" -H "accept: application/json"  -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Sample Response

```java
{
  "accountCode": "Saving Account",
  "accountGroup": "Sample Account Group",
  "accountGroupId": "SA001",
  "accountNature": "ASSET",
  "balance": 999.99,
  "balanceInAccountCurrency": 999.99,
  "code": "Sample",
  "currency": "USD",
  "customField": [
    {
      "label": "Label",
      "module": "Account",
      "value": "Extra information"
    }
  ],
  "description": "Savings account",
  "exchangeRate": 1,
  "id": 1,
  "name": "Savings account",
  "openingBalance": 999.99,
  "openingBalanceCdType": "DEBIT",
  "openingBalanceInAccountCurrency": 999.99,
  "status": "ACTIVE",
  "taxCode": "Tax Code",
  "totalBalance": 999.99,
  "totalBalanceInAccountCurrency": 999.99,
  "totalCOABalance": 999.99,
  "totalCOABalanceInAccountCurrency": 999.99
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AccountDto](#accountdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Update Account
Update account information. [More about update account](https://deskera.docs.apiary.io/#reference/account-apis/v1accountid/update-account-information)

##### Description:

- Allows you to update a specific account information.

#### PUT
#### /v1/account/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/account/1
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/account/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"accountCode\": \"Saving Account\", \"accountGroupId\": 1, \"accountGroupName\": \"Sample Account Group\", \"balance\": 999.99, \"currency\": \"SGD\", \"customField\": [ { \"label\": \"Label\", \"module\": \"Account\", \"value\": \"Extra information\" } ], \"description\": \"Savings account description\", \"name\": \"Savings account\", \"openingBalance\": 999.99, \"openingBalanceCdType\": \"DEBIT\", \"taxCode\": \"Tax Code\", \"totalBalance\": 999.99}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account | body | account | Yes | [AccountRequestDto](#accountrequestdto) |
| id | path | id | Yes | long |

##### Sample Request

```java
{
  "accountCode": "Saving Account",
  "accountGroupId": 1,
  "accountGroupName": "Sample Account Group",
  "balance": 999.99,
  "currency": "SGD",
  "customField": [
    {
      "label": "Label",
      "module": "Account",
      "value": "Extra information"
    }
  ],
  "description": "Savings account description",
  "name": "Savings account",
  "openingBalance": 999.99,
  "openingBalanceCdType": "DEBIT",
  "taxCode": "Tax Code",
  "totalBalance": 999.99
}
```

##### Sample Response
```java
{
  "accountCode": "Saving Account",
  "accountGroupId": 1,
  "accountGroupName": "Sample Account Group",
  "balance": 999.99,
  "currency": "SGD",
  "customField": [
    {
      "label": "Label",
      "module": "Account",
      "value": "Extra information"
    }
  ],
  "description": "Savings account description",
  "name": "Savings account",
  "openingBalance": 999.99,
  "openingBalanceCdType": "DEBIT",
  "taxCode": "Tax Code",
  "totalBalance": 999.99
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Account information has been updated successfully. | [AccountRequestDto](#accountrequestdto) |
| 201 | Created |  |
| 400 | Account with same name already exists |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Account does not exist. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### List of Account Types

Get account groups by filter criteria. [More about list of account types](https://deskera.docs.apiary.io/#reference/account-apis/v1accountgroup/get-account-groups-by-filter-criteria)

##### Description:

- Allows you to retrieve a list of all account groups.
- Allows you to retrieve specific account group based on it's filter criteria. 

#### GET
#### /v1/account/group
##### Request URL

```java
https://bifrost.deskera.com/v1/account/group?limit=10&page=0&sort=createdOn&sortDir=desc
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/account/group?limit=10&page=0&sort=createdOn&sortDir=desc" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Sample Response
```java
{
  "content": [
      {
        "accountMaster": 1,
        "accountNatureId": 3,
        "code": "AG-0000001",
        "id": 1,
        "isDeleted": false,
        "name": "Saving",
        "parentId": 1,
        "parentName": "Saving"
      }
  ],
  "pageable": {
    "sort": {
      "sorted": true,
      "unsorted": false,
      "empty": false
    },
    "pageSize": 10,
    "pageNumber": 0,
    "offset": 0,
    "paged": true,
    "unpaged": false
  },
  "totalElements": 0,
  "last": true,
  "totalPages": 0,
  "first": true,
  "sort": {
    "sorted": true,
    "unsorted": false,
    "empty": false
  },
  "numberOfElements": 0,
  "size": 10,
  "number": 0,
  "empty": true
}

```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AccountGroupDto](#accountgroupdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

## Models

---

### AccountDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account code | No |
| accountGroup | string | Account group | No |
| accountGroupId | string | Account group | No |
| accountNature | string | Account Nature | No |
| balance | number | Balance Amount | No |
| balanceInAccountCurrency | number | Balance Amount in Account Currency | No |
| code | string | Account code | No |
| currency | string | Account Currency | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Account Description | No |
| exchangeRate | number | Base to Foreign Exchange Rate | No |
| id | long | Account ID. | No |
| name | string | Account Name | No |
| openingBalance | number | Opening Balance Amount in Base currency | No |
| openingBalanceCdType | string | Opening balance Credit/Debit Type | No |
| openingBalanceInAccountCurrency | number | Opening Balance Amount in Account currency | No |
| status | string | Account Status | No |
| taxCode | string | Account Tax | No |
| totalBalance | number | Summation of Opening Balance and Balance | No |
| totalBalanceInAccountCurrency | number | Summation of Opening Balance and Balance in Account Currency | No |
| totalCOABalance | number | Summation of Opening Balance and Balance with Nature | No |
| totalCOABalanceInAccountCurrency | number | Summation of Opening Balance and Balance with Nature in Account Currency | No |

### AccountRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account code | No |
| accountGroupId | long | Account Group Id | No |
| accountGroupName | string | Account Group Name | No |
| balance | number | Balance Amount | No |
| currency | string | Singapore Dollars | No |
| customField | object | custom field json | No |
| description | string | Account Description | No |
| name | string | Account Name | No |
| openingBalance | number | Opening Balance Amount | No |
| openingBalanceCdType | string | Opening balance Credit/Debit Type | No |
| taxCode | string | Account Tax | No |
| totalBalance | number | Summation of Opening Balance and Balance | No |

### AccountGroupDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountMaster | long | Account Master | No |
| accountNatureId | long | Account Nature Id | No |
| code | string | Account Status | No |
| id | long | AccountGroup ID. | No |
| isDeleted | boolean | AccountGroup is deleted | No |
| name | string | AccountGroup Name | No |
| parentId | long | AccountGroup Parent id | No |
| parentName | string | AccountGroup Parent name | No |

### CustomFieldItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| label | string | Custom Field Name | Yes |
| module | string | Supported Modules | No |
| value | object | Dimension Value | No |