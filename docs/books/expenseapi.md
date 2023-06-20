---
id: expenseapi
title: Expense APIs
sidebar_label: Expense
---
You will be able to make an Expense entry for expenditure not related to a Bill. It is a special case of Make Payments APIs

More about [Expense API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bf5d3139-2838-4ca4-99f1-fc00196721fa)

## API
---
### Search Expenses
Get Expenses by filter criteria. [More about search expenses](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bf5d3139-2838-4ca4-99f1-fc00196721fa)

##### Description:

- Allows you to retrieve a list of all expenses.
- Allows you to retrieve a list of expenses based on it's filter criteria.

#### GET
#### /v1/payments/make/expenses
##### Request URL

[Expense API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bf5d3139-2838-4ca4-99f1-fc00196721fa)

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
| 200 | Expenses have been fetched successfully. | [MakePaymentDto](#makepaymentdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Create / Update Expense

Make a new expense entry. [More about create expense](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bf5d3139-2838-4ca4-99f1-fc00196721fa)

##### Description:

- Allows you to make a new expense.
- including the `id` parameter will update existing expense


#### POST
#### /v1/payments/make/expense
[Expense API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bf5d3139-2838-4ca4-99f1-fc00196721fa)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDto](#makepaymentdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [MakePaymentDto](#makepaymentdto) |
| 201 | Payment has been done successfully. | [MakePaymentDto](#makepaymentdto) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---



### Create / Update Expense with Tax Group

Make a new expense entry. [More about expense with tax group](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bf5d3139-2838-4ca4-99f1-fc00196721fa)

##### Description:

- Allows you to make a new expense.
- including the `id` parameter will update existing expense


#### POST
#### /v1/payments/make/expensetaxgroup
[Expense API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bf5d3139-2838-4ca4-99f1-fc00196721fa)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| makePaymentDto | body | makePaymentDto | Yes | [MakePaymentDto](#makepaymentdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [MakePaymentDto](#makepaymentdto) |
| 201 | Payment has been done successfully. | [MakePaymentDto](#makepaymentdto) |
| 400 | Payment failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---

### Delete Expense

Delete expense information.

##### Description:

- Allows you to delete expense information.

#### DELETE
#### /v1/payments/make/{code}
##### Request URL

[Expense API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-bf5d3139-2838-4ca4-99f1-fc00196721fa)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | Payment Code | Yes | String |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 204 | Expense has been updated successfully. | |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Payment with code not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

## expense-controller
Expense APIs.

### /v1/expenses/approval-data/update

#### POST
##### Summary

Update expense approval data

##### Description

API to update expense approval data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| automationId | query | automationId | No | long |
| deletedIds | body | deletedIds | No | [ long ] |
| spendDate | query | spendDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Updated expense approval data successfully. | [ object ] |
| 201 | Created |  |
| 400 | Failed due to bad request params |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/breakdown

#### GET
##### Summary

Fetch Expense breakdown

##### Description

API to fetch expense breakdown for the current year

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| type | query | type | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Expense status count and amount fetched successfully | [ExpenseTrendReportDto](#expensetrendreportdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/import

#### POST
##### Summary

Expense.

##### Description

API to add a new expense.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| expenseDtos | body | expenseDtos | Yes | [ [ExpenseDto](#expensedto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ExpenseResponse](#expenseresponse) ] |
| 201 | Expense has been added successfully. | [ [ExpenseResponse](#expenseresponse) ] |
| 400 | Expense failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/integration-mapping

#### GET
##### Summary

Get integration setting.

##### Description

API to get integration setting.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Expense attributes has been updated successfully. | [IntegrationMappingResponse](#integrationmappingresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Get integration setting failed. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update integration setting

##### Description

API to update existing integration setting.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| integrationMappingResponse | body | integrationMappingResponse | Yes | [IntegrationMappingResponse](#integrationmappingresponse) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Integration mapping has been updated successfully | [IntegrationMappingResponse](#integrationmappingresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Integration setting with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/je/{operation}

#### POST
##### Summary

sync/revert je

##### Description

API to add make sync/revert je.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| expenseIdsDtos | body | expenseIdsDtos | Yes | [ExpenseIdsDto](#expenseidsdto) |
| operation | path | operation | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sync/revert successful | string |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to sync/revert je. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/multi

#### POST
##### Summary

Multi expenses

##### Description

API to add multiple expenses.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| expensesDto | body | expensesDto | Yes | [MultiExpensesDto](#multiexpensesdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ExpenseResponse](#expenseresponse) |
| 201 | Expense has been added successfully. | [ExpenseResponse](#expenseresponse) |
| 400 | Expense failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/multi-approval/add

#### POST
##### Summary

Multi level approval

##### Description

API to add multi level approval for expenses.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| automationMultiLevelApprovalDto | body | automationMultiLevelApprovalDto | Yes | [AutomationMultiLevelApprovalFlowDto](#automationmultilevelapprovalflowdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ExpenseMultiApprovalResponseDto](#expensemultiapprovalresponsedto) |
| 201 | Automation Multi-level approval flow for expense has been added successfully. | [ExpenseMultiApprovalResponseDto](#expensemultiapprovalresponsedto) |
| 400 | Automation Multi-level approval flow for expense failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/process/image

#### GET
##### Summary

Get Text Extract from Image

##### Description

API to get texts from Image

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| relativeFilePath | query | relativeFilePath | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Image texts fetched successfully. | [ClaimVo](#claimvo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/push/{pushToClient}

#### POST
##### Summary

Push Information..

##### Description

API to push extracted image information to the server.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| pushToClient | path | pushToClient | Yes | boolean |
| textExtractDto | body | textExtractDto | Yes | [TextExtractDto](#textextractdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ClaimVo](#claimvo) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/receipt/upload

#### POST
##### Summary

Upload receipt

##### Description

Upload receipt

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| file | formData | file | Yes | file |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AttachmentsResponse](#attachmentsresponse) |
| 201 | Upload receipt successful | [AttachmentsResponse](#attachmentsresponse) |
| 400 | Upload receipt failed |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/scan

#### POST
##### Summary

Scanned Information.

##### Description

API to store scanned document information.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| scannerDto | body | scannerDto | Yes | [ScannerDto](#scannerdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ExpenseDto](#expensedto) |
| 201 | Scanned information stored successfully. | [ExpenseDto](#expensedto) |
| 400 | Scanned information failed to store because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/status

#### GET
##### Summary

Fetch Expense count,status and amount

##### Description

API to fetch expense count,amount grouped by status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| query | query | query | No | string |
| view | query | view | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Expense status count and amount fetched successfully | [ [ExpenseResponseWithCount](#expenseresponsewithcount) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/toggle-integration-mapping/{status}

#### PATCH
##### Summary

Toggle setting.

##### Description

API to update attributes of existing expense.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| status | path | status | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | API to toggle integration setting. | [IntegrationMappingResponse](#integrationmappingresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Toggle failed. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/trend

#### GET
##### Summary

Fetch Expense trend report

##### Description

API to fetch expense trend for the current year

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| trend_view | query | trend_view | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Expense status count and amount fetched successfully | [ExpenseTrendReportDto](#expensetrendreportdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/update

#### POST
##### Summary

Approve expenses in bulk

##### Description

API to approve multiple expenses

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |
| view | query | view | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Expense has been updated successfully. | [BulkResponse](#bulkresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/user/{userId}

#### GET
##### Summary

Expense Detail by Users

##### Description

API to fetch expense details by users and date

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| fromDate | query | fromDate | Yes | dateTime |
| toDate | query | toDate | Yes | dateTime |
| userId | path | userId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Make Payment's have been fetched successfully. | [ExpenseResponse](#expenseresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/userInfo/group

#### GET
##### Summary

User with group data

##### Description

API to fetch users data with their expense group data.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [UserShortInfoWithGroupWrapper](#usershortinfowithgroupwrapper) |
| 201 | User data with expense group fetched successfully. | [UserShortInfoWithGroupWrapper](#usershortinfowithgroupwrapper) |
| 400 | User data with expense group fetched failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/userroles

#### GET
##### Summary

Get User Roles.

##### Description

API to fetch Users group and role information

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [UserGroupRolesResponseDto](#usergrouprolesresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/{id}

#### GET
##### Summary

Get Expense by id.

##### Description

API to fetch Expense by id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ExpenseResponse](#expenseresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update expense.

##### Description

API to update existing expense.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| expenseDto | body | expenseDto | Yes | [ExpenseDto](#expensedto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Expense has been updated successfully. | [ExpenseResponse](#expenseresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Expense with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete expense.

##### Description

API to delete expense.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Expense has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Expense with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update expense attributes.

##### Description

API to update attributes of existing expense.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| expenseRequest | body | expenseRequest | Yes | object |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Expense attributes has been updated successfully. | [ExpenseDto](#expensedto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Expense with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## ext-app-category-controller
Expense APIs.

### /v1/expenses/admin/categories

#### GET
##### Summary

Fetch Category

##### Description

API to fetch category.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Category has been fetched successfully. | [ [ExpenseCategoryDto](#expensecategorydto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/category

#### GET
##### Summary

Fetch Category

##### Description

API to fetch category.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Category has been fetched successfully. | [ [ExpenseCategoryDto](#expensecategorydto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Category Creation

##### Description

API to create a category.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| expenseCategoryRequest | body | expenseCategoryRequest | Yes | [ExpenseCategoryRequest](#expensecategoryrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ExpenseCategoryDto](#expensecategorydto) |
| 201 | Category has been created successfully. | [ExpenseCategoryDto](#expensecategorydto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/category/{id}

#### PUT
##### Summary

updateCategory

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| expenseCategoryRequest | body | expenseCategoryRequest | Yes | [ExpenseCategoryRequest](#expensecategoryrequest) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ExpenseCategoryDto](#expensecategorydto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Category Delete

##### Description

API to delete a category.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Category has been deleted successfully. |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## ext-app-member-controller
Expense APIs.

### /v1/expenses/bulkUnassign

#### POST
##### Summary

Bulk UnAssign Manager role

##### Description

API to bulk un-assign manager(s).

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userGroupRoleDto | body | userGroupRoleDto | Yes | [ [UserGroupRoleDto](#usergrouproledto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Manager(s) unassigned successfully. | [ [UserGroupRoleDto](#usergrouproledto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/bulkUser

#### POST
##### Summary

Bulk User Creation

##### Description

API to create a user(s).

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userGroupRoleDto | body | userGroupRoleDto | Yes | [ [UserGroupRoleDto](#usergrouproledto) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Member(s) has been created successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/default-users

#### GET
##### Summary

Fetch Default Users

##### Description

API to fetch default users

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Default users have been fetched successfully. | [ [ExpenseMembersResponse](#expensemembersresponse) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/group/{groupId}/users

#### GET
##### Summary

Fetch Users

##### Description

API to fetch group users

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| groupId | path | groupId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Members has been fetched successfully. | [ [ExpenseMembersResponse](#expensemembersresponse) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/moveUser

#### POST
##### Summary

Move User

##### Description

API to move a user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| moveUserGroupRoleDto | body | moveUserGroupRoleDto | Yes | [MoveUserGroupRoleDto](#moveusergrouproledto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Member(s) has been created successfully. | [UserGroupRoleDto](#usergrouproledto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/roles/users

#### GET
##### Summary

Get users

##### Description

API to get users.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | users fetched successfully | [UserDto](#userdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to fetch users. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/user

#### POST
##### Summary

User Creation

##### Description

API to create a user(s).

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userGroupRoleDto | body | userGroupRoleDto | Yes | [UserGroupRoleDto](#usergrouproledto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [UserGroupRoleDto](#usergrouproledto) |
| 201 | Member(s) has been created successfully. | [UserGroupRoleDto](#usergrouproledto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/user/{id}

#### DELETE
##### Summary

User Deletion

##### Description

API to delete a user from a group.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userGroupRoleDto | body | userGroupRoleDto | Yes | [UserGroupRoleDto](#usergrouproledto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Member has been deleted successfully from the group. |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/users/{id}

#### GET
***DEPRECATED***
##### Summary

Fetch Users

##### Description

API to fetch group users

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Members has been fetched successfully. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## expense-export-controller
Expense APIs.

### /v1/expenses/export

#### GET
##### Summary

Expenses export

##### Description

API to export Expenses.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| categoryId | query | categoryId | No | long |
| fileFormat | query | fileFormat | No | string |
| fromDate | query | fromDate | Yes | dateTime |
| status | query | status | No | string |
| toDate | query | toDate | Yes | dateTime |
| view | query | view | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Expense Report data has been exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/export-with-filter

#### GET
##### Summary

Expenses export

##### Description

API to export Expenses.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| fileFormat | query | fileFormat | No | string |
| query | query | query | No | string |
| search | query | search | No | string |
| view | query | view | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Expense Report data has been exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## ext-app-group-controller
Expense APIs.

### /v1/expenses/group

#### GET
##### Summary

Fetch Groups

##### Description

API to fetch groups

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Group has been fetched successfully. | [ExtAppGroupDto](#extappgroupdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Group Creation

##### Description

API to create a group.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| extAppGroupRequest | body | extAppGroupRequest | Yes | [ExtAppGroupRequest](#extappgrouprequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ExtAppGroupDto](#extappgroupdto) |
| 201 | Group has been created successfully. | [ExtAppGroupDto](#extappgroupdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/group/{id}

#### GET
##### Summary

Fetch Group

##### Description

API to fetch group by id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Group has been fetched successfully. | [ExtAppGroupDto](#extappgroupdto) |
| 400 | Group does not exist. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Group Update

##### Description

API to update a group

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| extAppGroupDto | body | extAppGroupDto | Yes | [ExtAppGroupDto](#extappgroupdto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Group has been created successfully. | [ExtAppGroupDto](#extappgroupdto) |
| 201 | Created |  |
| 400 | Group does not exist. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Group Delete

##### Description

API to delete a group

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Group has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/expenses/roles

#### GET
##### Summary

Fetch Roles

##### Description

API to fetch roles

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Role has been fetched successfully. | [ExtAppGroupDto](#extappgroupdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## Models

### MakePaymentDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodePayFrom | string | Account code. | No |
| accountName | string | Account name. | No |
| amount | number | Payment amount. | No |
| contactCode | string | Contact code. | No |
| contactName | string | Contact name. | No |
| currency | string | Currency code. | No |
| documentDate | dateTime | Document date. | No |
| exchangeRate | number | Exchange rate. | No |
| makePaymentItemDtoList | [ [MakePaymentItemDto](#makepaymentitemdto) ] | Make payment items information. | No |
| memo | string | Memo text. | No |
| nextPaymentDate | dateTime | Next payment date. | No |
| paymentType | string | Type of payment. | No |
| purchaseInvoice | [PurchaseInvoiceResponse](#purchaseinvoiceresponse) |  | No |
| recurringActivated | boolean | Recurring payment activated for payment. | No |
| recurringPayment | boolean | Recurring payment enable/disable for payment. | No |
| referenceDate | dateTime | Date of Bank Transfer/cheque. | No |
| referenceNumber | string | Reference number of Bank Transfer/cheque. | No |

### MakePaymentItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string | Account name. | No |
| description | string | Description of document. | No |
| documentCode | string | Document code. | No |
| documentType | string | Document type. | No |
| exchangeRate | number | Exchange rate. | No |
| paymentAmount | number | Payment amount. | No |
| taxAmount | number | Tax amount. | No |
| taxCode | string | Tax code. | No |
| taxList | [ [TaxMappingDto](#taxmappingdto) ] |  | No |

### PurchaseInvoiceResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachmentIds | [ integer ] |  | No |
| attachments | [ string ] | File attachments | No |
| backOrder | boolean | Backorder flag to indicate if purchase invoice is backorder | No |
| billTo | [Address](#address) | Bill to Address | No |
| contact | [ContactInfo](#contactinfo) | Contact details | Yes |
| contactCode | string | Contact Code | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| currency | string | Currency | Yes |
| documentSequenceCode | string | Purchase invoice Sequence Code | No |
| draft | boolean | Purchase invoice drafted | No |
| dropShip | boolean | Drop Ship flag to indicate if purchase invoice is created for drop ship | No |
| dueAmount | number | Amount Due | No |
| exchangeRate | number | Exchange rate | No |
| id | long | Purchase invoice id | No |
| journalEntryCode | string | Journal Entry Code | No |
| memo | string | Memo | No |
| openingDocumentNumber | string | Customer opening document number | No |
| openingInvoice | boolean | True if opening invoice | No |
| payableAccountCode | string | Code of Account | No |
| paymentStatus | string | Purchase invoice payment status | No |
| purchaseInvoiceCode | string | Purchase invoice code | No |
| purchaseInvoiceDate | string | Purchase Invoice date | Yes |
| purchaseInvoiceDueDate | string | Purchase Invoice due date | Yes |
| purchaseInvoiceType | string | Purchase invoice type. | Yes |
| purchaseOrderRefNo | string | Contact PO reference number | No |
| receiveGoodsStatus | string | Purchase invoice receipt status | No |
| recurring | boolean | True if Invoice is recurring. | No |
| recurringActivated | boolean | True if Invoice recurrence is active. | No |
| shipFrom | [Address](#address) | Ship from address | No |
| shipTo | [Address](#address) | Ship to address | No |
| status | string | Invoice status | No |
| supplierInvoiceNo | string |  | No |
| taxAmount | number | Tax amount | No |
| totalAmount | number | Total amount | No |
| totalAmountInBaseCurrency | number | Total amount in base currency | No |
| totalTdsAmount | number | Total Tds Amount | No |
| unitPriceGstInclusive | boolean | Unit price is GST inclusive | No |
| warehouseCode | string | Warehouse Code | No |

### TaxMappingDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long |  | No |
| taxAmount | number |  | No |
| taxCode | string |  | No |
| taxRate | number |  | No |
| taxSeqCode | string |  | No |
| taxType | string |  | No |
| taxableAmount | number |  | No |

### Address

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address1 | string | Address line 1 | No |
| address2 | string | Address line 2 | No |
| city | string | City | No |
| country | string | Country | No |
| postalCode | string | Postal Code | No |
| preferred | boolean | Is this a default address? | No |
| state | string | State | No |

### ContactInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | string | Address | Yes |
| name | string | Contact name | Yes |

### ContactDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attentionTo | string | the contact name in the company | No |
| billingAddress | [ [Address](#address) ] | List of Billing Address. | No |
| businessUnit | string | indicates the contact is govt agency | No |
| currencyCode | string | Currency code | No |
| documentSequenceCode | string | Contact Sequence code | No |
| emailId | string | contact email address | No |
| name | string | Contact name | No |
| payableAccountCode | string | Payable account code | No |
| paymentTermCode | string | Payment term code | No |
| peppolId | string | Peppol ID | No |
| receivableAccountCode | string | Receivable account code | No |
| sequenceFormat | string | Sequence Format | No |
| shippingAddress | [ [Address](#address) ] | List of Shipping Address. | No |
| singaporeGovt | boolean | indicates the contact is govt agency | No |
| taxExempted | boolean | Denotes if customer is tax exempted | No |
| taxExemptionNo | string | Generated tax exemption number | No |
| taxExemptionReason | string | Tax exemption reason | No |
| taxNumber | string | Tax number | No |
| uen | string | Contact UEN | No |
### ApprovalStages

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvers | [ [ApproverData](#approverdata) ] | *Example:* `[{}]` | No |
| condition | string | *Example:* `"ALL"` | No |
| isReminderMailSent | boolean | *Example:* `true` | No |
| label | string | *Example:* `"Level 1"` | No |
| level | string | *Example:* `1` | No |
| levelApprovedAt | string | *Example:* `"2023-03-28"` | No |
| levelStatus | string | *Example:* `"approved/rejected"` | No |

### ApproverData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvedAt | string | *Example:* `"2023-03-28"` | No |
| id | long | *Example:* `1234` | No |
| name | string | *Example:* `"Tom Brady"` | No |
| status | string | *Example:* `"approved/rejected"` | No |

### AttachmentsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fileName | string |  | No |
| relativePath | string |  | No |

### AutomationApprovalLevel

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvers | [ long ] | *Example:* `[1,2]` | No |
| condition | string | *Example:* `"ANY"` | No |
| level | string | *Example:* `1` | No |
| levelLabel | string | *Example:* `"Level 1"` | No |

### AutomationApproverDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalLevels | [ [AutomationApprovalLevel](#automationapprovallevel) ] | *Example:* `[{}]` | No |
| reminderDays | integer | *Example:* `2` | No |
| sendEmailToApprover | boolean | *Example:* `false` | No |
| sendReminder | boolean | *Example:* `false` | No |

### AutomationMultiLevelApprovalFlowDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalDetails | [AutomationApproverDetails](#automationapproverdetails) | *Example:* `[{}]` | No |
| approvers | [ long ] | *Example:* `[123,1234]` | No |
| automationId | long | *Example:* `12345` | No |
| expenseId | long | *Example:* `1234` | No |

### BulkResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| httpStatusCode | integer | HTTP Status code<br/>*Example:* `404` | No |
| id | long | ID<br/>*Example:* `2` | No |

### CategotyAccountDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| expenseAccount | string | Expense Account.<br/>*Example:* `"ACC70003"` | No |
| id | string | Category id.<br/>*Example:* `"60d4298aff91a82207a7be2b"` | No |
| liabilityAccount | string | Liability Account.<br/>*Example:* `"ACC70003"` | No |
| name | string | Category name.<br/>*Example:* `"Food"` | No |

### ClaimVo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| extracted | boolean |  | No |
| extractedDates | [ string ] |  | No |
| invoiceNumber | string |  | No |
| tax | string |  | No |
| totalAmount | float |  | No |

### EntityVo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| score | float |  | No |
| text | string |  | No |
| type | string | *Enum:* `"DATE"`, `"QUANTITY"`, `"COMMERCIAL_ITEM"`, `"OTHER"` | No |

### ExpenseCategoryDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| groups | [ [ExtAppGroupDto](#extappgroupdto) ] |  | No |
| id | long | Primary Key<br/>*Example:* `1` | No |
| isAttachmentMandatory | boolean |  | No |
| name | string | Expense Category Name<br/>*Example:* `"food"` | No |
| sysGenerated | boolean | Boolean value<br/>*Example:* `false` | No |
| tenantId | long | Tenant Id<br/>*Example:* `1` | No |

### ExpenseCategoryRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| groupIds | [ long ] | List of Group id<br/>*Example:* `[1,2]` | No |
| isAttachmentMandatory | boolean | is attachment mandatory<br/>*Example:* `true` | No |
| name | string | Expense Name<br/>*Example:* `"food"` | No |

### ExpenseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalStages | [ [ApprovalStages](#approvalstages) ] | Approval Stages | No |
| attachmentIds | [ integer ] | Attachments ids | No |
| attachments | [ string ] | Attachments url's | No |
| categoryId | long | Expense category.<br/>*Example:* `1` | No |
| currency | string | Currency code.<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| deletedAttachmentIds | [ long ] | Deleted attachment id | No |
| expenseGroup | string | expense_group | No |
| invoiceNo | string | Invoice number.<br/>*Example:* `"INV001"` | No |
| merchant | string | Merchant name.<br/>*Example:* `"Uber"` | No |
| otherDetails | string | Other details.<br/>*Example:* `"Utilities bill"` | No |
| purpose | string | Expense purpose.<br/>*Example:* `"official meeting"` | No |
| spendDate | dateTime | Spend date.<br/>*Example:* `"2019-09-27"` | No |
| status | string | Expense status.<br/>*Enum:* `"DRAFT"`, `"PENDING"`, `"APPROVED"`, `"REJECTED"`<br/>*Example:* `"PENDING"` | No |
| taxAmount | number | Tax amount.<br/>*Example:* `0.7` | No |
| taxCode | string | Tax code.<br/>*Example:* `"TX0001"` | No |
| totalAmount | number | Total amount.<br/>*Example:* `10.5` | No |
| valid | boolean |  | No |

### ExpenseIdsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ids | [ long ] | Expense ids. | No |

### ExpenseMembersResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| firstName | string | User First Name<br/>*Example:* `"John"` | Yes |
| group | [ExtAppGroupDto](#extappgroupdto) | Group<br/>*Example:* `"Default"` | No |
| id | long | Primary Key<br/>*Example:* `1` | No |
| lastName | string | User Last Name<br/>*Example:* `"Doe"` | Yes |
| role | string | Role<br/>*Example:* `"Employee"` | No |
| userName | string | Username<br/>*Example:* `"d.6511223344"` | No |

### ExpenseMultiApprovalResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | *Example:* `1234` | No |
| isSuccess | boolean | *Example:* `false` | No |
| message | string | *Example:* `"Approval flow saved successfully"` | No |
| status | string | *Enum:* `"100 CONTINUE"`, `"101 SWITCHING_PROTOCOLS"`, `"102 PROCESSING"`, `"103 CHECKPOINT"`, `"200 OK"`, `"201 CREATED"`, `"202 ACCEPTED"`, `"203 NON_AUTHORITATIVE_INFORMATION"`, `"204 NO_CONTENT"`, `"205 RESET_CONTENT"`, `"206 PARTIAL_CONTENT"`, `"207 MULTI_STATUS"`, `"208 ALREADY_REPORTED"`, `"226 IM_USED"`, `"300 MULTIPLE_CHOICES"`, `"301 MOVED_PERMANENTLY"`, `"302 FOUND"`, `"302 MOVED_TEMPORARILY"`, `"303 SEE_OTHER"`, `"304 NOT_MODIFIED"`, `"305 USE_PROXY"`, `"307 TEMPORARY_REDIRECT"`, `"308 PERMANENT_REDIRECT"`, `"400 BAD_REQUEST"`, `"401 UNAUTHORIZED"`, `"402 PAYMENT_REQUIRED"`, `"403 FORBIDDEN"`, `"404 NOT_FOUND"`, `"405 METHOD_NOT_ALLOWED"`, `"406 NOT_ACCEPTABLE"`, `"407 PROXY_AUTHENTICATION_REQUIRED"`, `"408 REQUEST_TIMEOUT"`, `"409 CONFLICT"`, `"410 GONE"`, `"411 LENGTH_REQUIRED"`, `"412 PRECONDITION_FAILED"`, `"413 PAYLOAD_TOO_LARGE"`, `"413 REQUEST_ENTITY_TOO_LARGE"`, `"414 URI_TOO_LONG"`, `"414 REQUEST_URI_TOO_LONG"`, `"415 UNSUPPORTED_MEDIA_TYPE"`, `"416 REQUESTED_RANGE_NOT_SATISFIABLE"`, `"417 EXPECTATION_FAILED"`, `"418 I_AM_A_TEAPOT"`, `"419 INSUFFICIENT_SPACE_ON_RESOURCE"`, `"420 METHOD_FAILURE"`, `"421 DESTINATION_LOCKED"`, `"422 UNPROCESSABLE_ENTITY"`, `"423 LOCKED"`, `"424 FAILED_DEPENDENCY"`, `"426 UPGRADE_REQUIRED"`, `"428 PRECONDITION_REQUIRED"`, `"429 TOO_MANY_REQUESTS"`, `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"`, `"451 UNAVAILABLE_FOR_LEGAL_REASONS"`, `"500 INTERNAL_SERVER_ERROR"`, `"501 NOT_IMPLEMENTED"`, `"502 BAD_GATEWAY"`, `"503 SERVICE_UNAVAILABLE"`, `"504 GATEWAY_TIMEOUT"`, `"505 HTTP_VERSION_NOT_SUPPORTED"`, `"506 VARIANT_ALSO_NEGOTIATES"`, `"507 INSUFFICIENT_STORAGE"`, `"508 LOOP_DETECTED"`, `"509 BANDWIDTH_LIMIT_EXCEEDED"`, `"510 NOT_EXTENDED"`, `"511 NETWORK_AUTHENTICATION_REQUIRED"`<br/>*Example:* `200` | No |

### ExpenseResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalDate | string | Expense approval date.<br/>*Example:* `"2019-10-27"` | No |
| approvalStages | [ [ApprovalStages](#approvalstages) ] | Approval Stages | No |
| approvedBy | long | Expense approved id.<br/>*Example:* `4567` | No |
| approved_dt | dateTime | Expense approval date.<br/>*Example:* `"2019-10-27"` | No |
| approverName | string | Expense approver Name.<br/>*Example:* `"admin 1"` | No |
| attachmentIds | [ integer ] | Attachments ids | No |
| attachments | [ string ] | Attachments url's | No |
| category | string | Category name.<br/>*Example:* `"Food"` | No |
| categoryId | long | Expense category.<br/>*Example:* `1` | No |
| currency | string | Currency code.<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| deletedAttachmentIds | [ long ] | Deleted attachment id | No |
| expenseDate | string | Expense spend date.<br/>*Example:* `"2019-10-27"` | No |
| expenseGroup | string | expense_group | No |
| groupCode | string | Expense group code.<br/>*Example:* `"Group Code"` | No |
| groupName | string | Expense group name.<br/>*Example:* `"Claims"` | No |
| invoiceNo | string | Invoice number.<br/>*Example:* `"INV001"` | No |
| isActionDisabled | boolean | Is action disabled<br/>*Example:* `true` | No |
| merchant | string | Merchant name.<br/>*Example:* `"Uber"` | No |
| otherDetails | string | Other details.<br/>*Example:* `"Utilities bill"` | No |
| purpose | string | Expense purpose.<br/>*Example:* `"official meeting"` | No |
| receipts | [ string ] | Receipt urls | No |
| spendDate | dateTime | Spend date.<br/>*Example:* `"2019-09-27"` | No |
| status | string | Expense status.<br/>*Enum:* `"DRAFT"`, `"PENDING"`, `"APPROVED"`, `"REJECTED"`<br/>*Example:* `"PENDING"` | No |
| taxAmount | number | Tax amount.<br/>*Example:* `0.7` | No |
| taxCode | string | Tax code.<br/>*Example:* `"TX0001"` | No |
| totalAmount | number | Total amount.<br/>*Example:* `10.5` | No |
| userId | long | User id.<br/>*Example:* `1234` | No |
| userName | string | Expense created by.<br/>*Example:* `"user 1"` | No |
| valid | boolean |  | No |

### ExpenseResponseWithCount

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| count | long |  | No |
| status | string |  | No |
| totalAmount | number |  | No |

### ExpenseTrendReportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [TenureData](#tenuredata) ] |  | No |
| maxClaimAmount | number |  | No |
| totalClaimAmount | number |  | No |
| totalCount | integer |  | No |

### ExtAppGroupDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string | Code Generated by Procedure<br/>*Example:* `"E-0000001"` | No |
| id | long | Primary Key<br/>*Example:* `1` | No |
| memberCount | long | Member Count<br/>*Example:* `10` | No |
| name | string | Group Name<br/>*Example:* `"default"` | No |
| tenantId | long | Tenant Id<br/>*Example:* `1` | No |

### ExtAppGroupRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string | Group Name<br/>*Example:* `"default"` | No |

### File

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| absolute | boolean |  | No |
| absoluteFile | [File](#file) |  | No |
| absolutePath | string |  | No |
| canonicalFile | [File](#file) |  | No |
| canonicalPath | string |  | No |
| directory | boolean |  | No |
| file | boolean |  | No |
| freeSpace | long |  | No |
| hidden | boolean |  | No |
| name | string |  | No |
| parent | string |  | No |
| parentFile | [File](#file) |  | No |
| path | string |  | No |
| totalSpace | long |  | No |
| usableSpace | long |  | No |

### GroupMembersResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| role | string |  | No |
| userId | long |  | No |

### GroupRoles

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| groupId | long | Group Id. | No |
| groupName | string | Group Name. | No |
| roles | [ string ] | Roles. | No |

### InputStream

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| InputStream | object |  |  |

### IntegrationMappingResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | status.<br/>*Example:* `true` | No |
| countryCode | string | Country code.<br/>*Example:* `"US"` | No |
| id | long | Integration mapping id. | No |
| mapping | [MappingResponse](#mappingresponse) | Category mapping | No |
| tenantId | long | Tenant id.<br/>*Example:* `1234` | No |

### MappingResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| category | [ [CategotyAccountDto](#categotyaccountdto) ] | Category. | No |
| expenseAccount | string | Expense Account.<br/>*Example:* `"ACC70003"` | No |
| liabilityAccount | string | Liability Account.<br/>*Example:* `"ACC70003"` | No |

### MoveUserGroupRoleDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| newGroupId | long | New Group id<br/>*Example:* `1` | No |
| newRole | string | New Role Name<br/>*Example:* `"manager"` | No |
| oldGroupId | long | Old Group id<br/>*Example:* `1` | No |
| oldRole | string | Old Role Name<br/>*Example:* `"manager"` | No |
| userId | long | User id to be deleted<br/>*Example:* `1` | No |

### MultiExpensesDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| expneseGroupName | string | Group name.<br/>*Example:* `"Other"` | No |
| expneses | [ [ExpenseDto](#expensedto) ] | Multiple expense. | No |

### Pageable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| offset | long |  | No |
| pageNumber | integer |  | No |
| pageSize | integer |  | No |
| paged | boolean |  | No |
| sort | [Sort](#sort) |  | No |
| unpaged | boolean |  | No |

### Page«ExpenseMembersResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ExpenseMembersResponse](#expensemembersresponse) ] |  | No |
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

### Page«ExpenseResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ExpenseResponse](#expenseresponse) ] |  | No |
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

### Page«ExtAppGroupDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ExtAppGroupDto](#extappgroupdto) ] |  | No |
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

### Resource

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| description | string |  | No |
| file | [File](#file) |  | No |
| filename | string |  | No |
| inputStream | [InputStream](#inputstream) |  | No |
| open | boolean |  | No |
| readable | boolean |  | No |
| uri | [URI](#uri) |  | No |
| url | [URL](#url) |  | No |

### ResponseEntity

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| body | object |  | No |
| statusCode | string | *Enum:* `"100 CONTINUE"`, `"101 SWITCHING_PROTOCOLS"`, `"102 PROCESSING"`, `"103 CHECKPOINT"`, `"200 OK"`, `"201 CREATED"`, `"202 ACCEPTED"`, `"203 NON_AUTHORITATIVE_INFORMATION"`, `"204 NO_CONTENT"`, `"205 RESET_CONTENT"`, `"206 PARTIAL_CONTENT"`, `"207 MULTI_STATUS"`, `"208 ALREADY_REPORTED"`, `"226 IM_USED"`, `"300 MULTIPLE_CHOICES"`, `"301 MOVED_PERMANENTLY"`, `"302 FOUND"`, `"302 MOVED_TEMPORARILY"`, `"303 SEE_OTHER"`, `"304 NOT_MODIFIED"`, `"305 USE_PROXY"`, `"307 TEMPORARY_REDIRECT"`, `"308 PERMANENT_REDIRECT"`, `"400 BAD_REQUEST"`, `"401 UNAUTHORIZED"`, `"402 PAYMENT_REQUIRED"`, `"403 FORBIDDEN"`, `"404 NOT_FOUND"`, `"405 METHOD_NOT_ALLOWED"`, `"406 NOT_ACCEPTABLE"`, `"407 PROXY_AUTHENTICATION_REQUIRED"`, `"408 REQUEST_TIMEOUT"`, `"409 CONFLICT"`, `"410 GONE"`, `"411 LENGTH_REQUIRED"`, `"412 PRECONDITION_FAILED"`, `"413 PAYLOAD_TOO_LARGE"`, `"413 REQUEST_ENTITY_TOO_LARGE"`, `"414 URI_TOO_LONG"`, `"414 REQUEST_URI_TOO_LONG"`, `"415 UNSUPPORTED_MEDIA_TYPE"`, `"416 REQUESTED_RANGE_NOT_SATISFIABLE"`, `"417 EXPECTATION_FAILED"`, `"418 I_AM_A_TEAPOT"`, `"419 INSUFFICIENT_SPACE_ON_RESOURCE"`, `"420 METHOD_FAILURE"`, `"421 DESTINATION_LOCKED"`, `"422 UNPROCESSABLE_ENTITY"`, `"423 LOCKED"`, `"424 FAILED_DEPENDENCY"`, `"426 UPGRADE_REQUIRED"`, `"428 PRECONDITION_REQUIRED"`, `"429 TOO_MANY_REQUESTS"`, `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"`, `"451 UNAVAILABLE_FOR_LEGAL_REASONS"`, `"500 INTERNAL_SERVER_ERROR"`, `"501 NOT_IMPLEMENTED"`, `"502 BAD_GATEWAY"`, `"503 SERVICE_UNAVAILABLE"`, `"504 GATEWAY_TIMEOUT"`, `"505 HTTP_VERSION_NOT_SUPPORTED"`, `"506 VARIANT_ALSO_NEGOTIATES"`, `"507 INSUFFICIENT_STORAGE"`, `"508 LOOP_DETECTED"`, `"509 BANDWIDTH_LIMIT_EXCEEDED"`, `"510 NOT_EXTENDED"`, `"511 NETWORK_AUTHENTICATION_REQUIRED"` | No |
| statusCodeValue | integer |  | No |

### Role

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long |  | No |
| role | string |  | No |

### ScannerDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ string ] | Document content. | No |
| documentName | string | Document name.<br/>*Example:* `"expense.png"` | No |
| documentType | string | Document type.<br/>*Enum:* `"EXPENSE"`, `"CONTACT"`<br/>*Example:* `"EXPENSE"` | No |

### ShortRoleInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Application Name<br/>*Enum:* `"CONSOLE"`, `"ERP"`, `"ORGANISATION"`, `"ATTENDANCE"`, `"EXPENSE"`, `"CRM"`, `"PEOPLE"`, `"CHAT"`, `"ALL"`, `"REPORT_BUILDER"`, `"SHOP"`, `"WORKFLOW_ENGINE"`, `"CRM_PLUS"`<br/>*Example:* `"ERP"` | No |
| roleGroupName | string | Role Group<br/>*Example:* `"admin"` | No |
| shortCode | string | Role Group<br/>*Example:* `"admin"` | No |

### Sort

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| empty | boolean |  | No |
| sorted | boolean |  | No |
| unsorted | boolean |  | No |

### TenureData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| axisValue | string |  | No |
| count | integer |  | No |
| day | integer |  | No |
| month | string | *Enum:* `"JANUARY"`, `"FEBRUARY"`, `"MARCH"`, `"APRIL"`, `"MAY"`, `"JUNE"`, `"JULY"`, `"AUGUST"`, `"SEPTEMBER"`, `"OCTOBER"`, `"NOVEMBER"`, `"DECEMBER"` | No |
| name | string |  | No |
| year | [Year](#year) |  | No |

### Text

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| confidenceScore | float |  | No |
| hight | float |  | No |
| order | integer |  | No |
| size | float |  | No |
| text | string |  | No |
| width | float |  | No |

### TextExtractDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| entityVoList | [ [EntityVo](#entityvo) ] |  | No |
| fileName | string |  | No |
| tenantId | long |  | No |
| textList | [ [Text](#text) ] |  | No |
| userId | long |  | No |
| wssessionId | string |  | No |

### URI

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| absolute | boolean |  | No |
| authority | string |  | No |
| fragment | string |  | No |
| host | string |  | No |
| opaque | boolean |  | No |
| path | string |  | No |
| port | integer |  | No |
| query | string |  | No |
| rawAuthority | string |  | No |
| rawFragment | string |  | No |
| rawPath | string |  | No |
| rawQuery | string |  | No |
| rawSchemeSpecificPart | string |  | No |
| rawUserInfo | string |  | No |
| scheme | string |  | No |
| schemeSpecificPart | string |  | No |
| userInfo | string |  | No |

### URL

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| authority | string |  | No |
| content | object |  | No |
| defaultPort | integer |  | No |
| file | string |  | No |
| host | string |  | No |
| path | string |  | No |
| port | integer |  | No |
| protocol | string |  | No |
| query | string |  | No |
| ref | string |  | No |
| userInfo | string |  | No |

### UserDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| emailId | string |  | No |
| erpTenantId | long |  | No |
| iamUserId | long |  | No |
| isTerminated | boolean |  | No |
| locationValue | string |  | No |
| roles | [ [UserRoleDto](#userroledto) ] |  | No |
| tenantId | string |  | No |
| terminationStage | string |  | No |
| userId | string |  | No |

### UserGroupRoleDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| groupId | long | Group id<br/>*Example:* `1` | No |
| httpStatus | string | Response HTTP Status<br/>*Enum:* `"100 CONTINUE"`, `"101 SWITCHING_PROTOCOLS"`, `"102 PROCESSING"`, `"103 CHECKPOINT"`, `"200 OK"`, `"201 CREATED"`, `"202 ACCEPTED"`, `"203 NON_AUTHORITATIVE_INFORMATION"`, `"204 NO_CONTENT"`, `"205 RESET_CONTENT"`, `"206 PARTIAL_CONTENT"`, `"207 MULTI_STATUS"`, `"208 ALREADY_REPORTED"`, `"226 IM_USED"`, `"300 MULTIPLE_CHOICES"`, `"301 MOVED_PERMANENTLY"`, `"302 FOUND"`, `"302 MOVED_TEMPORARILY"`, `"303 SEE_OTHER"`, `"304 NOT_MODIFIED"`, `"305 USE_PROXY"`, `"307 TEMPORARY_REDIRECT"`, `"308 PERMANENT_REDIRECT"`, `"400 BAD_REQUEST"`, `"401 UNAUTHORIZED"`, `"402 PAYMENT_REQUIRED"`, `"403 FORBIDDEN"`, `"404 NOT_FOUND"`, `"405 METHOD_NOT_ALLOWED"`, `"406 NOT_ACCEPTABLE"`, `"407 PROXY_AUTHENTICATION_REQUIRED"`, `"408 REQUEST_TIMEOUT"`, `"409 CONFLICT"`, `"410 GONE"`, `"411 LENGTH_REQUIRED"`, `"412 PRECONDITION_FAILED"`, `"413 PAYLOAD_TOO_LARGE"`, `"413 REQUEST_ENTITY_TOO_LARGE"`, `"414 URI_TOO_LONG"`, `"414 REQUEST_URI_TOO_LONG"`, `"415 UNSUPPORTED_MEDIA_TYPE"`, `"416 REQUESTED_RANGE_NOT_SATISFIABLE"`, `"417 EXPECTATION_FAILED"`, `"418 I_AM_A_TEAPOT"`, `"419 INSUFFICIENT_SPACE_ON_RESOURCE"`, `"420 METHOD_FAILURE"`, `"421 DESTINATION_LOCKED"`, `"422 UNPROCESSABLE_ENTITY"`, `"423 LOCKED"`, `"424 FAILED_DEPENDENCY"`, `"426 UPGRADE_REQUIRED"`, `"428 PRECONDITION_REQUIRED"`, `"429 TOO_MANY_REQUESTS"`, `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"`, `"451 UNAVAILABLE_FOR_LEGAL_REASONS"`, `"500 INTERNAL_SERVER_ERROR"`, `"501 NOT_IMPLEMENTED"`, `"502 BAD_GATEWAY"`, `"503 SERVICE_UNAVAILABLE"`, `"504 GATEWAY_TIMEOUT"`, `"505 HTTP_VERSION_NOT_SUPPORTED"`, `"506 VARIANT_ALSO_NEGOTIATES"`, `"507 INSUFFICIENT_STORAGE"`, `"508 LOOP_DETECTED"`, `"509 BANDWIDTH_LIMIT_EXCEEDED"`, `"510 NOT_EXTENDED"`, `"511 NETWORK_AUTHENTICATION_REQUIRED"`<br/>*Example:* `"200 OK"` | No |
| message | string | Response error message, if any<br/>*Example:* `"User does not exist"` | No |
| role | string | Role Name<br/>*Example:* `"manager"` | No |
| userId | long | User id to be deleted<br/>*Example:* `1` | No |

### UserGroupRolesResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| groupRolesList | [ [GroupRoles](#grouproles) ] | Group Roles List. | No |
| tenantId | long | Tenant id. | No |
| userId | long | User id. | No |

### UserRoleDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string |  | No |
| name | string |  | No |
| roleId | string |  | No |

### UserShortInfoWithGroup

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| deleted | boolean | Delete Flag<br/>*Example:* `false` | No |
| email | string | User email<br/>*Example:* `"jsmith@example.com"` | No |
| firstName | string | User First Name<br/>*Example:* `"John"` | No |
| iamUserId | long | Iam User Id<br/>*Example:* `1` | No |
| id | long | Primary Key<br/>*Example:* `1` | No |
| lastName | string | User Last Name<br/>*Example:* `"Doe"` | No |
| tenantId | long | Tenant Id<br/>*Example:* `1` | No |
| userGroup | [ExtAppGroupDto](#extappgroupdto) | Group data<br/>*Example:* `{}` | No |
| userName | string | User Name<br/>*Example:* `"jsmith@example.com"` | No |
| userRole | [UserRoleDto](#userroledto) | User role data<br/>*Example:* `{}` | No |

### UserShortInfoWithGroupWrapper

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [UserShortInfoWithGroup](#usershortinfowithgroup) ] |  | No |

### UserShortInfoWithRole

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | [ [Address](#address) ] | List of Address. | No |
| authUserId | string | Auth0 User ID<br/>*Example:* `"auth0|5d70ec986e382a0d12a4ff22"` | No |
| contact | string | User Contact<br/>*Example:* `12345678` | No |
| deleted | boolean | Delete Flag<br/>*Example:* `false` | No |
| department | string | User Department<br/>*Example:* `"Finance"` | No |
| designation | string | User Designation<br/>*Example:* `"Accountant"` | No |
| email | string | User email<br/>*Example:* `"jsmith@example.com"` | No |
| firstName | string | User First Name<br/>*Example:* `"John"` | No |
| genderLookUpCode | string | Gender<br/>*Example:* `"Mr."` | No |
| iamUserId | long | Iam User Id<br/>*Example:* `1` | No |
| id | long | Primary Key<br/>*Example:* `1` | No |
| isEmailVerified | boolean | Email is verified or not. | No |
| lastName | string | User Last Name<br/>*Example:* `"Doe"` | No |
| mfaenabled | boolean |  | No |
| profileUrl | string | User profile image path.<br/>*Example:* `"http://deskera.com/user/myprofile.png"` | No |
| roleShortInfo | [ [ShortRoleInfo](#shortroleinfo) ] |  | No |
| status | string | Status like Active/ InActive<br/>*Example:* `"active"` | No |
| tenantId | long | Tenant Id<br/>*Example:* `1` | No |
| userName | string | User Name<br/>*Example:* `"jsmith@example.com"` | No |

### Year

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| leap | boolean |  | No |
| value | integer |  | No |