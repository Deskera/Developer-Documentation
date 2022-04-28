---
id: column-api
title: Column API
sidebar_label: Column
---

You will be able to manage columns in your tables with this API

## API
---

### Add a column

##### Description:

- Allows you to add a new column into a table.

#### POST
#### /v1/crm/core/table/{tableId}/column

##### Request URL

```java
https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4/column
```

##### Curl

```java
curl -X POST "https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4/column" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d '{"name":"New Column","type":"text","options":[],"required":false,"width":220,"hidden":false,"uiVisible":true}'
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tableId | path | Unique id of table | Yes | string |
| Column | body | Column to add | Yes | [ColumnRequest](#columnrequest) |

##### Sample Request

<details>
<summary>Click to expand/collapse</summary>

```java
{
  "name": "New Column",
  "type": "text",
  "options": [],
  "required": false,
  "width": 220,
  "hidden": false,
  "uiVisible": true
}
```
</details>

##### Sample Response

<details>
<summary>Click to expand/collapse</summary>

```java
{
  "success": true,
  "id": "BXP0"
}
```
</details>

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 201 | OK | [ColumnCUDResponse](#columncudresponse) |
| 401 | Unauthorized |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |


---

### Update Column by ID

##### Description:

- Allows you to update a column by its unique id.

#### PUT
#### /v1/crm/core/table/{tableId}/column/{columnId}

##### Request URL

```java
https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4/column/BXP0
```

##### Curl

```java
curl -X PUT "https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4/column/BXP0" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d '{"name":"New Column Updated","type":"text","options":[],"required":false,"width":200,"hidden":false,"uiVisible":true}'
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tableId | path | Unique id of table | Yes | string |
| columnId | path | id of column | Yes | string |
| Column | body | Column to update | Yes | [ColumnRequest](#columnrequest) |

##### Sample Request

<details>
<summary>Click to expand/collapse</summary>

```java
{
  "name": "New Column Updated",
  "type": "text",
  "options": [],
  "required": false,
  "width": 200,
  "hidden": false,
  "uiVisible": true
}
```
</details>

##### Sample Response

<details>
<summary>Click to expand/collapse</summary>

```java
{
  "success": true,
  "id": "BXP0"
}
```
</details>

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ColumnCUDResponse](#columncudresponse) |
| 401 | Unauthorized |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

---


### Delete Column by ID

##### Description:

- Allows you to delete a column by its unique id.

#### DELETE
#### /v1/crm/core/table/{tableId}/column/{columnId}

##### Request URL

```java
https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4/column/BXP0
```

##### Curl

```java
curl -X DELETE "https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4/column/BXP0" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tableId | path | Unique id of table | Yes | string |
| columnId | path | id of column | Yes | string |

##### Sample Response

<details>
<summary>Click to expand/collapse</summary>

```java
{
  "success": true,
  "id": "BXP0"
}
```
</details>

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ColumnCUDResponse](#columncudresponse) |
| 401 | Unauthorized |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |


---

### Update Order of Columns

##### Description:

- Allows you to update order of the columns in a table.

#### POST
#### /v1/crm/core/table/{tableId}/save-col-order

##### Request URL

```java
https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4/save-col-order
```

##### Curl

```java
curl -X POST "https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4/save-col-order" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d '["col_id_1","col_id_2","col_id_3"]'
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tableId | path | Unique id of table | Yes | string |
| Column | body | Column to add | Yes | [ColumnRequest](#columnrequest) |

##### Sample Request

<details>
<summary>Click to expand/collapse</summary>

```java
[
  "col_id_1",
  "col_id_2",
  "col_id_3"
]
```
</details>

##### Sample Response

<details>
<summary>Click to expand/collapse</summary>

```java
{
  "success": true,
}
```
</details>

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 201 | OK | [ColumnOrderUpdateResponse](#columnorderupdateresponse) |
| 401 | Unauthorized |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |


## Models
---

### ColumnRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string | Display name | Yes |
| type | string | text/number/email/date/url/phone/select/multi-select/boolean/ref/ref_array/user/user_array | Yes |
| index | integer | index of column in the display order | No |
| options | List of [ColumnOptionRequest](#columnoptionrequest) | possible values of the column. Applicable to select and multi-select type only. | No |
| required | boolean | Whether the value of column is required in each record | No |
| width | integer | width of the column in grid | No |
| editable | boolean | Whether the column value is editable in grid | No |
| hidden | boolean | Whether the column is to be kept hidden in the grid | No |
| uiVisible | boolean | Whether the column is visible in UI | No |

### ColumnOptionRequest
| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string | Unique id within the column | Yes |
| name | string | Display name | Yes |
| color | string | Badge color | No |

### ColumnCUDResponse
| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| success | boolean | Success flag | Yes |
| id | string | Unique id of the column within the table | Yes |

### ColumnOrderUpdateResponse
| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| success | boolean | Success flag | Yes |
