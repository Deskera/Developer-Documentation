---
id: accountapi
title: Account APIs
sidebar_label: Account
---
An Account is a record in the general ledger that is used to sort and store transactions. Accounts are typically defined by an identifier (Account number) and a caption or header and are coded by Account type. An Account refers to assets, liabilities, income, expenses, and equity, as represented by individual ledger pages, to which changes in value are chronologically recorded with [debit and credit entries](https://www.deskera.com/sg/books/journal-entries-with-deskera/).

A [chart of Accounts](https://www.deskera.com/sg/books/chart-of-Accounts-with-deskera-books/) (COA) is a created list of the Accounts used by an organization to define each class of items for which money or its equivalent is spent or received.

`AccountDto` help you to create a new Account, update a particular Account, retrieve Account, or get the list of all Accounts.

More about [Account API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-7b750500-0c87-4804-9fde-0bc04841629a?ctx=documentation)

## API
---

### Search Account
Get Accounts by filter criteria. [More about search Account](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-7b750500-0c87-4804-9fde-0bc04841629a?ctx=documentation)

##### Description:

- Allows you to retrieve a list of all Accounts.
- Allows you to retrieve a list of Account details based on it's filter criteria.

#### GET

#### Account


[More about search Account](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-7b750500-0c87-4804-9fde-0bc04841629a?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountGroups | query | AccountGroups | No | string |
| checkOpeningEditable | query | checkOpeningEditable | No | boolean |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AccountDto](#Accountdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |


##### Security
**Authorization**  

| apiKey | *API Key* |
| ------ | --------- |
| Name | x-access-token |
| In | header |

---
### Create Account
Create a new Account. [More about create Account](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-7b750500-0c87-4804-9fde-0bc04841629a?ctx=documentation)

##### Description:

- Allows you to create a new Account.

#### POST
#### Account

[More about create Account](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-7b750500-0c87-4804-9fde-0bc04841629a?ctx=documentation)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountRequestDto | body | AccountRequestDto | Yes | [AccountRequestDto](#Accountrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AccountRequestDto](#Accountrequestdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
### Retrieve Account
Get Account by id. [More about retrieve Account](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-7b750500-0c87-4804-9fde-0bc04841629a?ctx=documentation)

##### Description:

- Allows you to retrieve a specific Account details.

#### GET

#### Account {id}

[More about retrieve Account](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-7b750500-0c87-4804-9fde-0bc04841629a?ctx=documentation)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AccountDto](#Accountdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
### Update Account
Update Account information. [More about update Account](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-7b750500-0c87-4804-9fde-0bc04841629a?ctx=documentation)

##### Description:

- Allows you to update a specific Account information.

#### PUT

#### Account {id}

[More about update Account](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-7b750500-0c87-4804-9fde-0bc04841629a?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| Account | body | Account | Yes | [AccountRequestDto](#Accountrequestdto) |
| id | path | id | Yes | long |
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Account information has been updated successfully. | [AccountRequestDto](#Accountrequestdto) |
| 201 | Created |  |
| 400 | Account with same name already exists |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Account does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
### List of Account Types

Get Account groups by filter criteria. [More about list of Account types](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-7b750500-0c87-4804-9fde-0bc04841629a?ctx=documentation)

##### Description:

- Allows you to retrieve a list of all Account groups.
- Allows you to retrieve specific Account group based on it's filter criteria.

#### GET
#### Account group

[More about list of Account types](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-7b750500-0c87-4804-9fde-0bc04841629a?ctx=documentation)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AccountGroupDto](#Accountgroupdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Delete Account
#### DELETE
#### Account {id}
##### Summary

Delete Account.

##### Description

API to delete Account

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | boolean |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update Account attributes

##### Description

API to update attributes of existing Account.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountRequest | body | AccountRequest | Yes | object |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Account attributes has been updated successfully. | [AccountRequestDto](#Accountrequestdto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Account does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---

### Account Accountcodes

#### POST
##### Summary

Get Accounts By Account Codes

##### Description

API Get Account By Account Codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountCodes | body | AccountCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account Accountcodes-or-seqcodes

#### POST
##### Summary

Get Accounts By Account Codes or Seq Codes

##### Description

API Get Account By Account Codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountCodes | body | AccountCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account Accountgroup/codes

#### POST
##### Summary

Get Accounts By Account Group Code

##### Description

API Get Account By Account Group Code

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountGroupCodes | body | AccountGroupCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Get All Account Group Names
#### POST
#### Account Accountgroup/names
##### Summary

Get Accounts By Account Group Name

##### Description

API Get Account By Account Group Name

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| currencyCode | query | currencyCode | No | string |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Account Accountgroupandsubgroup

#### GET
##### Summary

Get Accounts By Account Group and Sub Group

##### Description

API Get Accounts By Account Group and Sub Group.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountGroupCode | query | AccountGroupCode | Yes | string |
| AccountSubGroupCode | query | AccountSubGroupCode | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [AccountDto](#Accountdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account Accountnames

#### POST
##### Summary

Get Accounts By Account Names

##### Description

API Get Account By Account Names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountNames | body | AccountNames | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [AccountDto](#Accountdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Get Accounts By Account nature name

#### GET
#### Account Accountnature/{name}
##### Summary

Get Accounts By Account Nature Name

##### Description

API Get Account By Account Nature Name

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| name | path | name | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Account Accounts-custom-fields

#### POST
##### Summary

Get custom fields by Account Names

##### Description

API to Get custom fields by Account Names

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountNames | body | AccountNames | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Custom fields by Account Names fetched successfully | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Update Account Status

#### PUT
#### Account activate
##### Summary

Change status of multiple Accounts

##### Description

API to change status of multiple Accounts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |
| status | query | status | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Account status has been changed successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Add Account Opening balance
#### PATCH
#### Account add-opening-balance

##### Summary

Add Account opening balance.

##### Description

API to add Account opening balance

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountBalanceRequestDto | body | Account Balance Request | No | [ [AccountBalanceRequestDto](#Accountbalancerequestdto) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Account opening balance has been updated successfully. |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Account does not exist. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account bank/{id}

#### DELETE
##### Summary

Delete Bank Account.

##### Description

API to delete Account

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | boolean |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Get Bank Accounts
#### Account bankAccounts

#### GET
##### Summary

Get Account by filter criteria

##### Description

API to fetch Account by filter criteria

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AccountDto](#Accountdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Account bankAccounts-dashboard

#### GET
##### Summary

Get Account by filter criteria

##### Description

API to fetch Account by filter criteria

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AccountDto](#Accountdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Get Bank Account Summary
#### GET
#### Account bankAccounts/summary
##### Summary

Get bank Accounts

##### Description

API to fetch bank Account

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AccountDto](#Accountdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Account brief

#### GET
##### Summary

Get Account brief information

##### Description

API to get brief information of all the Accounts

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Accounts brief information have been fetched successfully. | [ [AccountShortInfo](#Accountshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account brief-names

#### POST
##### Summary

Get Account brief information

##### Description

API to get brief information of given Account names

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountNames | body | AccountNames | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Accounts brief information have been fetched successfully. | [ [AccountShortInfo](#Accountshortinfo) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Change Account Status in Bulk
#### PUT
#### Account bulkactivate
##### Summary

Change status of multiple Accounts

##### Description

API to change status of multiple Accounts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |
| status | query | status | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Account status has been changed successfully. | [BulkApiResponse](#bulkapiresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security
---
| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account codes

#### POST
##### Summary

Get Accounts By Codes

##### Description

API Get Account By Codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| seqCodes | body | seqCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [AccountDto](#Accountdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account codes-or-sequencecodes

#### POST
##### Summary

Get Accounts By Seq Codes or Account Codes

##### Description

API Get Account By Codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account custom-fields

#### GET
##### Summary

Get custom field is used or not

##### Description

API to Get custom field is used or not

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customCode | query | customCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Custom fields status fetched successfully | boolean |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account import

#### POST
##### Summary

API to bulk import Accounts

##### Description

API to insert / update Accounts in bulk

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| Accounts | body | Accounts | Yes | [ [AccountRequestDto](#Accountrequestdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Check If Account Is Used
#### POST
#### Account isAccountused
##### Summary

Account used in transactions

##### Description

API to check Account used in transactions.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Account not used in transactions. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Account sequencecodes

#### POST
##### Summary

Get Accounts By Codes

##### Description

API Get Account By Codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Set Undeposited Fund Account
#### POST
#### Account undeposited-funds
##### Summary

Change Undeposited Funds default Account

##### Description

Change Undeposited Funds default Account

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountId | query | AccountId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | boolean |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Account update-cheque-numbers

#### POST
##### Summary

Change Undeposited Funds default Account

##### Description

Change Undeposited Funds default Account

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| updateChequeNumbersDto | body | updateChequeNumbersDto | Yes | [UpdateChequeNumbersDto](#updatechequenumbersdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [AccountDto](#Accountdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account update-opening-balance

#### PATCH
##### Summary

Update Account opening balance.

##### Description

API to update Account opening balance.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountBalanceRequestDto | body | Account Balance Request | No | [ [AccountBalanceRequestDto](#Accountbalancerequestdto) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Account opening balance has been updated successfully. |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Account does not exist. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account {tenantId}

#### POST
##### Summary

Create demo Accounts

##### Description

API to create a standard tax rates.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| country | query | country | No | string |
| tenantId | path | tenantId | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## budget-controller
Budgeting APIs

### Get Budgeting Accounts
#### Account budgeting

#### GET
##### Summary

get Budgets for filters

##### Description

API to get Budgets for filters

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Budgets are fetched successfully. | [BudgetDto](#budgetdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Create Budgeting Account
#### POST
#### Account budgeting
##### Summary

Create Budget for Accounts

##### Description

API to set Budget for Accounts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| budget | body | budget | Yes | [BudgetDto](#budgetdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Budget is set for Account successfully. | [BudgetDto](#budgetdto) |
| 201 | Created |  |
| 400 | Error while set budget for Account. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Account budgeting/check-budget-limit-exceed

#### POST
##### Summary

Update Budget actual balance for Accounts

##### Description

API to update Budget actual balance for Accounts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| budgetLimitExceedDto | body | budgetLimitExceedDto | Yes | [BudgetLimitExceedDto](#budgetlimitexceeddto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Budget is updated actual balance for Account successfully. | [BudgetDto](#budgetdto) |
| 201 | Created |  |
| 400 | Error while updating budget actual balance for Account. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account budgeting/update-budget-Account-actual-balance

#### POST
##### Summary

Update Budget actual balance for Accounts

##### Description

API to update Budget actual balance for Accounts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| budgetActualBalanceUpdateRequestList | body | budgetActualBalanceUpdateRequestList | Yes | [ [BudgetActualBalanceUpdateRequest](#budgetactualbalanceupdaterequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Budget is updated actual balance for Account successfully. | [BudgetDto](#budgetdto) |
| 201 | Created |  |
| 400 | Error while updating budget actual balance for Account. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account budgeting/{id}

#### GET
##### Summary

get Budget by id

##### Description

API to get Budget by id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Budget Fetched successfully. | [BudgetDto](#budgetdto) |
| 400 | Error while getting Budget by id |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update Budget for Accounts

##### Description

API to update Budget for Accounts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| budget | body | budget | Yes | [BudgetDto](#budgetdto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Budget is updated for Account successfully. | [BudgetDto](#budgetdto) |
| 201 | Created |  |
| 400 | Error while update budget for Account. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Budget for Account

##### Description

API to delete Budget for Accounts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Budget is deleted for Account successfully. | [BudgetDto](#budgetdto) |
| 204 | No Content |  |
| 400 | Error while delete budget for Account. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## Account-group-controller
AccountGroup APIs
### Get Account Groups
#### GET
#### Account group
##### Summary

Get Account groups by filter criteria

##### Description

API to fetch Account groups by filter criteria.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AccountGroupDto](#Accountgroupdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
#### POST
##### Summary

Create AccountGroup.

##### Description

API to create a new Account group.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountGroupDto | body | AccountGroupDto | Yes | [AccountGroupDto](#Accountgroupdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AccountGroupDto](#Accountgroupdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Account group/names

#### POST
##### Summary

Get AccountGroups by Names

##### Description

API to fetch AccountGroup list by names

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Get Account Group
#### GET
#### Account group/subgroup
##### Summary

Get Account Sub Groups by parent code

##### Description

API to fetch Account Sub Group by parent code

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Account group/subgroup/{code}

#### GET
##### Summary

Get Account Sub Groups by parent code

##### Description

API to fetch Account Sub Group by parent code

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account group/subgroup/{name}

#### POST
##### Summary

Get Account Sub Groups by parent name

##### Description

API to fetch Account Sub Group by parent name

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account group/subgroupbytype/{typeId}

#### GET
##### Summary

Get Account Sub Groups by type id

##### Description

API to fetch Account Sub Group by type id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| typeId | path | typeId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account group/{id}

#### GET
##### Summary

Get AccountGroup by id

##### Description

API to fetch AccountGroup by id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AccountGroupDto](#Accountgroupdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update AccountGroup.

##### Description

API to update a new Account group.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountGroupDto | body | AccountGroupDto | Yes | [AccountGroupDto](#Accountgroupdto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | AccountGroup information has been updated successfully. | long |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Account Group not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete AccountGroup.

##### Description

API to delete Account group

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | boolean |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account group/{id}/{AccountId}

#### DELETE
##### Summary

Delete AccountGroup.

##### Description

API to delete Account group

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountId | path | AccountId | Yes | long |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | boolean |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## Account-master-controller
Account APIs

### Account masters

#### GET
##### Summary

Get Account Master Type

##### Description

API to fetch all Account Master types

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AccountMasterTypeDto](#Accountmastertypedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## Account-nature-controller
Account Nature APIs

### Account natures

#### GET
##### Summary

Get Account Nature

##### Description

API to fetch all Account Nature

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AccountNatureResponseDto](#Accountnatureresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## Account-report-controller
Account Report Controller

### Account reports balance-sheet

#### GET
##### Summary

Balance Sheet Report

##### Description

API to fetch data for Balance Sheet Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | Yes | string |
| toDate | query | toDate | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Balance Sheet data has been fetched | [BalanceSheetInfo](#balancesheetinfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account reports cash-flow-dashboard

#### GET
##### Summary

Cash flow Dashboard Details

##### Description

Cash flow Dashboard API

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| duration | query | duration | Yes | string |
| to-date | query | to-date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Cash FLow Graph data has been fetched | [ [DashboardCashFlowInfo](#dashboardcashflowinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account reports dashboard/bank

#### GET
##### Summary

Bank Balance Dashboard Details

##### Description

Bank Balance report for the last 6 months

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountCode | query | AccountCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bank data Dashboard has been fetched. | [BankAccountBalanceResponseDto](#bankAccountbalanceresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account reports dashboard/pnl

#### GET
##### Summary

Profit and Loss data for Dashboard

##### Description

API to fetch data for Profit and Loss data for Dashboard

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| fromDate | query | fromDate | Yes | dateTime |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Profit and Loss data for Dashboard has been fetched | [ [DashboardPNLInfo](#dashboardpnlinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account reports deposit/unreconciled

#### GET
##### Summary

Get unreconciled deposit transactions

##### Description

API to get unreconciled deposit transactions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountCode | query | AccountCode | Yes | string |
| amount | query | amount | No | number |
| documentDate | query | documentDate | No | dateTime |
| statementDate | query | statementDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unreconciled transactions fetched successfully. | [ReconcileTransactionResponse](#reconciletransactionresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account reports gl

#### GET
##### Summary

General Ledger Report

##### Description

API to fetch data for General Ledger Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountGroupId | query | AccountGroupId | No | long |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | Yes | dateTime |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | General Ledger data has been fetched | [ [AccountGLInfo](#Accountglinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account reports payment/unreconciled

#### GET
##### Summary

Get unreconciled payment transactions

##### Description

API to get unreconciled payment transactions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountCode | query | AccountCode | Yes | string |
| amount | query | amount | No | number |
| documentDate | query | documentDate | No | dateTime |
| statementDate | query | statementDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unreconciled transactions fetched successfully. | [ReconcileTransactionResponse](#reconciletransactionresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account reports pnl

#### GET
##### Summary

Profit and Loss Report

##### Description

API to fetch data for Profit and Loss Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | Yes | dateTime |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Profit and Loss data has been fetched | [AccountPNLInfo](#Accountpnlinfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account reports trial-balance

#### GET
##### Summary

Get Trial Balance

##### Description

API to get trial balance of specific Account

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | Yes | string |
| toDate | query | toDate | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Trial balance has been fetched successfully | [TrialBalanceDetailsDto](#trialbalancedetailsdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account reports unreconciled

#### GET
##### Summary

Get unreconciled deposit and payment transactions

##### Description

API to get unreconciled deposit and payment transactions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| AccountCode | query | AccountCode | Yes | string |
| amount | query | amount | No | number |
| documentDate | query | documentDate | No | dateTime |
| statementDate | query | statementDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Unreconciled transactions fetched successfully. | [ReconcileTransactionResponse](#reconciletransactionresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## cash-flow-controller
Cash Flow Controller

### Account reports cash-flow

#### GET
##### Summary

Get Cash Flow Report

##### Description

API to get Cash Flow Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | Yes | string |
| method | query | method | Yes | string |
| toDate | query | toDate | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [CashFlowReportDto](#cashflowreportdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Account reports cash-flow/mapping

#### GET
##### Summary

Cash Flow sections.

##### Description

API to get Cash Flow sections mapping

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [CashFlowSectionDto](#cashflowsectiondto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update Flow sections.

##### Description

Api to update Cash Flow sections mapping

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| sections | body | sections | Yes | [ [CashFlowSectionDto](#cashflowsectiondto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [CashFlowSectionDto](#cashflowsectiondto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## Models

### AccountBalanceRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AccountCode | string | Account Code<br/>*Example:* `1` | No |
| cdType | string | Credit/Debit Type<br/>*Enum:* `"CREDIT"`, `"DEBIT"`<br/>*Example:* `"DEBIT"` | No |
| exchangerate | number | Exchange Rate<br/>*Example:* `0` | No |
| openingBalance | number | Opening Balance<br/>*Example:* `0` | No |

### AccountDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AccountCode | string |  | No |
| code | string |  | No |
| name | string |  | No |

### AccountDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AccountCode | string | Account code<br/>*Example:* `"SA"` | No |
| AccountGroup | string | Account group | No |
| AccountGroupId | string | Account group | No |
| AccountNature | string | Account Nature<br/>*Example:* `"ASSET"` | No |
| AccountSubGroup | string | Account group | No |
| AccountSubGroupName | string | Account group | No |
| balance | number | Balance Amount<br/>*Example:* `999.99` | No |
| balanceInAccountCurrency | number | Balance Amount in Account Currency<br/>*Example:* `999.99` | No |
| code | string | Account code | No |
| currency | string | Account Currency | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Account Description<br/>*Example:* `"Savings Account"` | No |
| exchangeRate | number | Base to Foreign Exchange Rate<br/>*Example:* `1` | No |
| id | long | Account ID.<br/>*Example:* `1` | No |
| isCreditCard | boolean | Is Account is credit card Account or not<br/>*Example:* `false` | No |
| isDefault | boolean | Default Account Status<br/>*Example:* `true` | No |
| isSubAccount | boolean | Flag to confirm SubAccount<br/>*Example:* `false` | No |
| isTdsApplicable | boolean | Is TDS applicable or not<br/>*Example:* `false` | No |
| isUndepositedFundAccount | boolean | Account is Undeposited fund Account or not<br/>*Example:* `true` | No |
| name | string | Account Name<br/>*Example:* `"Savings Account"` | No |
| natureOfIncomePayment | string | Nature of income payment<br/>*Example:* `"Interest on Securities"` | No |
| openingBalance | number | Opening Balance Amount in Base currency<br/>*Example:* `999.99` | No |
| openingBalanceCdType | string | Opening balance Credit/Debit Type<br/>*Example:* `"DEBIT"` | No |
| openingBalanceEditable | boolean | Account Opening Balance editable or not<br/>*Example:* `true` | No |
| openingBalanceInAccountCurrency | number | Opening Balance Amount in Account currency<br/>*Example:* `999.99` | No |
| parent | long | Parent AccountId<br/>*Example:* `2431252` | No |
| parentName | string | Parent Name<br/>*Example:* `2431252` | No |
| status | string | Account Status<br/>*Example:* `"ACTIVE"` | No |
| taxCode | string | Account Tax | No |
| totalBalance | number | Summation of Opening Balance and Balance<br/>*Example:* `999.99` | No |
| totalBalanceInAccountCurrency | number | Summation of Opening Balance and Balance in Account Currency<br/>*Example:* `999.99` | No |
| totalCOABalance | number | Summation of Opening Balance and Balance with Nature<br/>*Example:* `999.99` | No |
| totalCOABalanceInAccountCurrency | number | Summation of Opening Balance and Balance with Nature in Account Currency<br/>*Example:* `999.99` | No |
| usedChequeNumbers | string | Used Cheque Series<br/>*Example:* `"301,302"` | No |

### AccountGLInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AccountCode | string |  | No |
| AccountGroup | string |  | No |
| AccountName | string |  | No |
| AccountNature | string |  | No |
| code | string |  | No |
| endingAmount | number |  | No |
| endingAmountInAccountCurrency | number |  | No |
| openingAmount | number |  | No |
| openingAmountInAccountCurrency | number |  | No |
| openingBalanceType | string |  | No |
| periodAmount | number |  | No |

### AccountGroupDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AccountMaster | long | Account Master<br/>*Example:* `1` | No |
| AccountNatureId | long | Account Nature Id<br/>*Example:* `3` | No |
| code | string | Account Status<br/>*Example:* `"AG-0000001"` | No |
| id | long | AccountGroup ID.<br/>*Example:* `1` | No |
| isDeleted | boolean | AccountGroup is deleted<br/>*Example:* `false` | No |
| name | string | AccountGroup Name<br/>*Example:* `"Apple"` | No |
| parentId | long | AccountGroup Parent id<br/>*Example:* `1` | No |
| parentName | string | AccountGroup Parent name<br/>*Example:* `"Apple"` | No |

### AccountInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string | Account Code<br/>*Example:* `"AC-0000001"` | No |
| name | string | Account Name<br/>*Example:* `"Account Payable"` | No |

### AccountMasterTypeDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | Account master typr ID.<br/>*Example:* `1` | No |
| type | string | Account Master type<br/>*Example:* `"Cash"` | No |

### AccountNatureResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | Account Nature ID.<br/>*Example:* `1` | No |
| nature | string | Account Nature Name.<br/>*Example:* `"Asset"` | No |

### AccountPNLInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| costOfGoodsSold | object |  | No |
| expenses | object |  | No |
| grossProfit | number |  | No |
| income | object |  | No |
| incomeTaxExpenses | number |  | No |
| netProfitOrLoss | number |  | No |
| operatingProfit | number |  | No |
| otherExpenses | object |  | No |
| otherIncome | object |  | No |
| profitBeforeTax | number |  | No |
| totalCostOfGoodsSold | number |  | No |
| totalExpenses | number |  | No |
| totalIncome | number |  | No |
| totalOtherExpenses | number |  | No |
| totalOtherIncome | number |  | No |

### AccountRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AccountCode | string | Account code<br/>*Example:* `"SA"` | No |
| AccountGroupId | long | Account Group Id<br/>*Example:* `1` | No |
| AccountGroupName | string | Account Group Name<br/>*Example:* `"Sample Account Group"` | No |
| AccountSubGroup | long | Sub Account group id<br/>*Example:* `1` | No |
| AccountSubGroupName | string | Account Group Name<br/>*Example:* `"Sample Account Group"` | No |
| balance | number | Balance Amount<br/>*Example:* `999.99` | No |
| currency | string | Singapore Dollars<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| description | string | Account Description<br/>*Example:* `"Savings Account description"` | No |
| exchangeRate | number | Base to Foreign Exchange Rate<br/>*Example:* `1` | No |
| isCreditCard | boolean | Is Account is credit card Account or not<br/>*Example:* `false` | No |
| isSubAccount | boolean | Flag to confirm SubAccount<br/>*Example:* `false` | No |
| isTdsApplicable | boolean | Is TDS applicable or not<br/>*Example:* `false` | No |
| isUndepositedFundAccount | boolean | Is Account is undeposited fund Account or not<br/>*Example:* `false` | No |
| name | string | Account Name<br/>*Example:* `"Savings Account"` | No |
| natureOfIncomePayment | string | Nature of income payment<br/>*Example:* `"Interest on Securities"` | No |
| openingBalance | number | Opening Balance Amount<br/>*Example:* `999.99` | No |
| openingBalanceCdType | string | Opening balance Credit/Debit Type<br/>*Enum:* `"CREDIT"`, `"DEBIT"`<br/>*Example:* `"DEBIT"` | No |
| parent | long | Parent AccountId<br/>*Example:* `2431252` | No |
| parentName | string | Parent Name<br/>*Example:* `2431252` | No |
| sequenceFormat | string | 00000001 | No |
| taxCode | string | Account Tax<br/>*Example:* `"Tax Code"` | No |
| totalBalance | number | Summation of Opening Balance and Balance<br/>*Example:* `999.99` | No |

### AccountShortInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AccountCodeDbGen | string |  | No |
| AccountGroup | string |  | No |
| balance | string |  | No |
| code | string |  | No |
| currency | string |  | No |
| id | long |  | No |
| name | string |  | No |
| openingBalance | string |  | No |
| openingBalanceType | string |  | No |

### BalanceSheetAssetsInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bank | object |  | No |
| cash | object |  | No |
| currentAsset | object |  | No |
| nonCurrentAsset | object |  | No |
| otherCurrentAssets | object |  | No |
| receivables | object |  | No |
| totalAsset | number |  | No |
| totalBank | number |  | No |
| totalCash | number |  | No |
| totalCurrentAsset | number |  | No |
| totalNonCurrentAsset | number |  | No |
| totalOtherCurrentAssets | number |  | No |
| totalReceivables | number |  | No |

### BalanceSheetInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| assets | [BalanceSheetAssetsInfo](#balancesheetassetsinfo) |  | No |
| diffOpeningBalance | number |  | No |
| liabilities | [BalanceSheetLiabilitiesInfo](#balancesheetliabilitiesinfo) |  | No |

### BalanceSheetLiabilitiesInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| currentLiabilities | object |  | No |
| currentYearEarnings | number |  | No |
| equity | object |  | No |
| nonCurrentLiabilities | object |  | No |
| otherCurrentLiabilities | object |  | No |
| payable | object |  | No |
| totalCurrentLiabilities | number |  | No |
| totalEquity | number |  | No |
| totalLiabilities | number |  | No |
| totalNonCurrentLiabilities | number |  | No |
| totalOtherCurrentLiabilities | number |  | No |
| totalPayable | number |  | No |

### BankAccountBalanceResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AccountCode | string | *Example:* `"AC-000001"` | Yes |
| currency | string | *Example:* `"SGD"` | Yes |
| deskeraBalance | number | Deskera Balance<br/>*Example:* `5` | No |
| monthlyBalances | [ [PeriodicBalance](#periodicbalance) ] | Monthly Balances | No |

### BankAccountDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AccountCode | string | Account code<br/>*Example:* `"SA"` | No |
| AccountGroup | string | Account group | No |
| AccountGroupId | string | Account group | No |
| AccountNature | string | Account Nature<br/>*Example:* `"ASSET"` | No |
| AccountSubGroup | string | Account group | No |
| AccountSubGroupName | string | Account group | No |
| balance | number | Balance Amount<br/>*Example:* `999.99` | No |
| balanceInAccountCurrency | number | Balance Amount in Account Currency<br/>*Example:* `999.99` | No |
| bankLogo | string | Bank logo<br/>*Example:* `"http://logok.org/citi-logo/"` | No |
| bankName | string | Bank Account Name<br/>*Example:* `"ABC Current Account"` | No |
| bankNumber | string | Bank Account No<br/>*Example:* `123456` | No |
| code | string | Account code | No |
| connectStatus | boolean | Connection Status<br/>*Example:* `false` | No |
| currency | string | Account Currency | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Account Description<br/>*Example:* `"Savings Account"` | No |
| exchangeRate | number | Base to Foreign Exchange Rate<br/>*Example:* `1` | No |
| id | long | Account ID.<br/>*Example:* `1` | No |
| integrationMaterId | integer | Integration Master Id<br/>*Example:* `1` | No |
| isCreditCard | boolean | Is Account is credit card Account or not<br/>*Example:* `false` | No |
| isDefault | boolean | Default Account Status<br/>*Example:* `true` | No |
| isSubAccount | boolean | Flag to confirm SubAccount<br/>*Example:* `false` | No |
| isTdsApplicable | boolean | Is TDS applicable or not<br/>*Example:* `false` | No |
| isUndepositedFundAccount | boolean | Account is Undeposited fund Account or not<br/>*Example:* `true` | No |
| lastSyncDate | dateTime | Last Sync Date for Account<br/>*Example:* `"2021-01-01"` | No |
| name | string | Account Name<br/>*Example:* `"Savings Account"` | No |
| natureOfIncomePayment | string | Nature of income payment<br/>*Example:* `"Interest on Securities"` | No |
| openingBalance | number | Opening Balance Amount in Base currency<br/>*Example:* `999.99` | No |
| openingBalanceCdType | string | Opening balance Credit/Debit Type<br/>*Example:* `"DEBIT"` | No |
| openingBalanceEditable | boolean | Account Opening Balance editable or not<br/>*Example:* `true` | No |
| openingBalanceInAccountCurrency | number | Opening Balance Amount in Account currency<br/>*Example:* `999.99` | No |
| parent | long | Parent AccountId<br/>*Example:* `2431252` | No |
| parentName | string | Parent Name<br/>*Example:* `2431252` | No |
| status | string | Account Status<br/>*Example:* `"ACTIVE"` | No |
| taxCode | string | Account Tax | No |
| totalBalance | number | Summation of Opening Balance and Balance<br/>*Example:* `999.99` | No |
| totalBalanceInAccountCurrency | number | Summation of Opening Balance and Balance in Account Currency<br/>*Example:* `999.99` | No |
| totalCOABalance | number | Summation of Opening Balance and Balance with Nature<br/>*Example:* `999.99` | No |
| totalCOABalanceInAccountCurrency | number | Summation of Opening Balance and Balance with Nature in Account Currency<br/>*Example:* `999.99` | No |
| usedChequeNumbers | string | Used Cheque Series<br/>*Example:* `"301,302"` | No |

### BudgetAccountDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AccountCode | string |  | No |
| amount | number |  | No |

### BudgetActualBalanceUpdateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AccountBalance | object |  | No |
| customField | object |  | No |
| id | long |  | No |
| jeCode | string |  | No |
| jeDate | dateTime |  | No |

### BudgetCustomField

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| actualBalance | number |  | No |
| attributes | [ [BudgetCustomField](#budgetcustomfield) ] |  | No |
| code | string |  | No |
| limit | number |  | No |
| value | string |  | No |

### BudgetDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AccountCode | string |  | No |
| AccountName | string |  | No |
| actualBalance | number |  | No |
| customField | [BudgetCustomField](#budgetcustomfield) |  | No |
| effectiveFrom | date |  | No |
| effectiveTill | date |  | No |
| effectiveYear | integer |  | No |
| id | long |  | No |
| limit | number |  | No |
| limitExceedsBy | number |  | No |
| name | string |  | No |
| quarterMonth | integer |  | No |
| type | string | *Enum:* `"MONTHLY"`, `"QUARTERLY"`, `"YEARLY"` | No |

### BudgetLimitExceedDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| customField | object |  | No |
| data | [ [BudgetAccountDetails](#budgetAccountdetails) ] |  | No |
| documentDate | date |  | No |
| documentType | string |  | No |
| jeCode | string |  | No |

### BulkApiResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ object ] |  | No |
| statusCode | integer |  | No |
| success | [ object ] |  | No |

### CashFlowReportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| beginningCash | number | Cash and Cash Equivalents at beginning of the period<br/>*Example:* `120` | No |
| endCash | number | Cash and Cash Equivalents at end of the period<br/>*Example:* `220` | No |
| fromDate | string | From Date<br/>*Example:* `"25-08-2019"` | No |
| name | string | Name of report<br/>*Example:* `"STATEMENT OF CASHFLOWS"` | No |
| netChangeInCash | number | Net change in cash<br/>*Example:* `100` | No |
| sections | [ [CashFlowSectionDto](#cashflowsectiondto) ] | Cash Flow Sections | No |
| toDate | string | To Date<br/>*Example:* `"25-08-2021"` | No |

### CashFlowSectionDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| items | [ [CashFlowSectionItemDto](#cashflowsectionitemdto) ] | List of Cash Flow section items. | No |
| netCashFlow | number | Net Cash Flow in the Section<br/>*Example:* `100` | No |
| sectionLabel | string | Section Label<br/>*Example:* `"Cash Flows from Operating Activities (Direct Method)"` | No |
| sectionOrder | integer | Order of the section<br/>*Example:* `1` | No |

### CashFlowSectionItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Accounts | [ [AccountInfo](#Accountinfo) ] | List of Accounts | No |
| deletable | boolean | If the item is deletable<br/>*Example:* `true` | No |
| id | long | ID<br/>*Example:* `1` | No |
| itemAmount | number | Amount for the item<br/>*Example:* `10` | No |
| itemLabel | string | Item Label<br/>*Example:* `"Cash paid to suppliers"` | No |
| itemOrder | integer | Item Order<br/>*Example:* `1` | No |

### CustomFieldItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | Dimension Id<br/>*Example:* `11567` | No |
| label | string | Custom Field Name<br/>*Example:* `"Label"` | Yes |
| module | string | Supported Modules | No |
| value | object | Dimension Value<br/>*Example:* `"XYZ"` | No |

### DashboardCashFlowInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| monthStartDate | string |  | No |
| totalCreditAmount | number | Total Credit Amount<br/>*Example:* `999.99` | No |
| totalDebitAmount | number | Total Debit Amount<br/>*Example:* `999.99` | No |

### DashboardPNLInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AccountPNLInfo | [AccountPNLInfo](#Accountpnlinfo) |  | No |
| monthStartDate | long |  | No |

### Pageable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| offset | long |  | No |
| pageNumber | integer |  | No |
| pageSize | integer |  | No |
| paged | boolean |  | No |
| sort | [Sort](#sort) |  | No |
| unpaged | boolean |  | No |

### Page«AccountDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [AccountDto](#Accountdto) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalPages | integer |  | No |

### Page«AccountGroupDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [AccountGroupDto](#Accountgroupdto) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalPages | integer |  | No |

### Page«BankAccountDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [BankAccountDto](#bankAccountdto) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalPages | integer |  | No |

### Page«BudgetDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [BudgetDto](#budgetdto) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalPages | integer |  | No |

### PeriodicBalance

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Monthly Balance<br/>*Example:* `5` | No |
| endDate | dateTime | *Example:* `"06-11-2020"` | Yes |
| month | string | Month<br/>*Example:* `"Jan"` | No |
| startDate | dateTime | *Example:* `"06-01-2019"` | Yes |

### ReconcileTransactionInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| cdType | string | CREDIT/DEBIT Nature of transaction.<br/>*Example:* `"CREDIT"` | No |
| contactCode | string | Contact code.<br/>*Example:* `19425` | No |
| contactName | string | Contact Name.<br/>*Example:* `"ABC Corp Ltd."` | No |
| date | string | Date of document<br/>*Example:* `"27-12-2019"` | No |
| documentCode | string |  | No |
| documentType | string |  | No |
| jeCode | string |  | No |
| referenceDate | string | Date of Bank Transfer/cheque.<br/>*Example:* `"27-12-2019"` | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque.<br/>*Example:* `"CH001"` | No |

### ReconcileTransactionResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| openingBalance | number | Total Opening Amount.<br/>*Example:* `3000` | No |
| openingBalanceCdType | string | CREDIT/DEBIT Type<br/>*Example:* `"CREDIT"` | No |
| reconcileTransactionInfos | [ [ReconcileTransactionInfo](#reconciletransactioninfo) ] | List of transaction details | No |
| totalDeposits | number | Total Deposit Amount.<br/>*Example:* `5000` | No |
| totalPayments | number | Total Payment Amount.<br/>*Example:* `3000` | No |

### ResponseEntity

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| body | object |  | No |
| statusCode | string | *Enum:* `"100 CONTINUE"`, `"101 SWITCHING_PROTOCOLS"`, `"102 PROCESSING"`, `"103 CHECKPOINT"`, `"200 OK"`, `"201 CREATED"`, `"202 ACCEPTED"`, `"203 NON_AUTHORITATIVE_INFORMATION"`, `"204 NO_CONTENT"`, `"205 RESET_CONTENT"`, `"206 PARTIAL_CONTENT"`, `"207 MULTI_STATUS"`, `"208 ALREADY_REPORTED"`, `"226 IM_USED"`, `"300 MULTIPLE_CHOICES"`, `"301 MOVED_PERMANENTLY"`, `"302 FOUND"`, `"302 MOVED_TEMPORARILY"`, `"303 SEE_OTHER"`, `"304 NOT_MODIFIED"`, `"305 USE_PROXY"`, `"307 TEMPORARY_REDIRECT"`, `"308 PERMANENT_REDIRECT"`, `"400 BAD_REQUEST"`, `"401 UNAUTHORIZED"`, `"402 PAYMENT_REQUIRED"`, `"403 FORBIDDEN"`, `"404 NOT_FOUND"`, `"405 METHOD_NOT_ALLOWED"`, `"406 NOT_ACCEPTABLE"`, `"407 PROXY_AUTHENTICATION_REQUIRED"`, `"408 REQUEST_TIMEOUT"`, `"409 CONFLICT"`, `"410 GONE"`, `"411 LENGTH_REQUIRED"`, `"412 PRECONDITION_FAILED"`, `"413 PAYLOAD_TOO_LARGE"`, `"413 REQUEST_ENTITY_TOO_LARGE"`, `"414 URI_TOO_LONG"`, `"414 REQUEST_URI_TOO_LONG"`, `"415 UNSUPPORTED_MEDIA_TYPE"`, `"416 REQUESTED_RANGE_NOT_SATISFIABLE"`, `"417 EXPECTATION_FAILED"`, `"418 I_AM_A_TEAPOT"`, `"419 INSUFFICIENT_SPACE_ON_RESOURCE"`, `"420 METHOD_FAILURE"`, `"421 DESTINATION_LOCKED"`, `"422 UNPROCESSABLE_ENTITY"`, `"423 LOCKED"`, `"424 FAILED_DEPENDENCY"`, `"426 UPGRADE_REQUIRED"`, `"428 PRECONDITION_REQUIRED"`, `"429 TOO_MANY_REQUESTS"`, `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"`, `"451 UNAVAILABLE_FOR_LEGAL_REASONS"`, `"500 INTERNAL_SERVER_ERROR"`, `"501 NOT_IMPLEMENTED"`, `"502 BAD_GATEWAY"`, `"503 SERVICE_UNAVAILABLE"`, `"504 GATEWAY_TIMEOUT"`, `"505 HTTP_VERSION_NOT_SUPPORTED"`, `"506 VARIANT_ALSO_NEGOTIATES"`, `"507 INSUFFICIENT_STORAGE"`, `"508 LOOP_DETECTED"`, `"509 BANDWIDTH_LIMIT_EXCEEDED"`, `"510 NOT_EXTENDED"`, `"511 NETWORK_AUTHENTICATION_REQUIRED"` | No |
| statusCodeValue | integer |  | No |

### Sort

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| empty | boolean |  | No |
| sorted | boolean |  | No |
| unsorted | boolean |  | No |

### TrialBalanceDetailDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AccountCode | string | Account Id<br/>*Example:* `1` | No |
| amount | number | Amount<br/>*Example:* `999.99` | No |
| cdType | string | Credit/Debit Type<br/>*Enum:* `"CREDIT"`, `"DEBIT"`<br/>*Example:* `"DEBIT"` | No |
| code | string | Account Id<br/>*Example:* `1` | No |
| creditAmount | number | Credit Account<br/>*Example:* `999.99` | No |
| debitAmount | number | Debit Amount<br/>*Example:* `999.99` | No |
| group | string | Account Group<br/>*Example:* `"Current Assets"` | No |
| name | string | Account Name<br/>*Example:* `"Savings Account"` | No |
| openingBalance | number | Opening Balance Amount<br/>*Example:* `9.99` | No |
| openingBalanceCdType | string | Opening balance Credit/Debit Type<br/>*Enum:* `"CREDIT"`, `"DEBIT"`<br/>*Example:* `"DEBIT"` | No |
| totalBalance | number | Summation of Opening Balance and Balance<br/>*Example:* `999.99` | No |
| totalBalanceCdType | string | Total Balance Credit/Debit Type<br/>*Enum:* `"CREDIT"`, `"DEBIT"`<br/>*Example:* `"DEBIT"` | No |

### TrialBalanceDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| diffOpeningBalance | number | Difference in Amount<br/>*Example:* `999.99` | No |
| totalCreditAmount | number | Total Credit Amount<br/>*Example:* `999.99` | No |
| totalDebitAmount | number | Total Debit Amount<br/>*Example:* `999.99` | No |
| trialBalanceDetailDto | [ [TrialBalanceDetailDto](#trialbalancedetaildto) ] | Trial Balance | No |

### UpdateChequeNumbersDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AccountCode | string |  | No |
| chequeNumbers | [ string ] |  | No |
| updateChequeAction | string | *Enum:* `"ADD"`, `"REMOVE"` | No |