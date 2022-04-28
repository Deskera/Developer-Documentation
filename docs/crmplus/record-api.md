---
id: record-api
title: Record API
sidebar_label: Record
---

You will be able to manage records in your tables with this API

## API
---

### Add a record

##### Description:

- Allows you to add a record into a table.

#### POST
#### /v1/crm/core/table/{tableId}/record

##### Request URL

```java
https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4/record
```

##### Curl

```java
curl -X POST "https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4/record" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d '{"cells":{"Uvhr":"My contact new","JofH":"my.contact.new@deskera.xyz","VKQV":[1],"HLsw":[1,7661]}}'
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tableId | path | Unique id of table | Yes | string |
| RecordRequest | body | RecordRequest | Yes | [RecordRequest](#recordrequest) |

##### Sample Request

<details>
<summary>Click to expand/collapse</summary>

```java
{
  "cells": {
    "Uvhr": "My contact new",
    "JofH": "my.contact.new@deskera.xyz",
    "VKQV": [
      1
    ],
    "HLsw": [
      1,
      7661
    ]
  }
}
```
</details>

##### Sample Response

<details>
<summary>Click to expand/collapse</summary>

```java
{
	"success": true,
	"id": "626a161631e99d00135282a4",
	"data": {
    "_id": "626a161631e99d00135282a4",
		"cells": {
			"Uvhr": "My contact new",
			"JofH": "my.contact.new@deskera.xyz",
			"VKQV": [
				1
			],
			"HLsw": [
				1,
				7661
			],
			"iPz8": "2022-04-28T04:20:38.262Z",
			"a2vj": "WEB",
			"Fvks": [
				231183
			]
		},
		"permissions": {
			"owners": [
				"231183"
			]
		},
		"createdBy": 231183,
		"createdAt": "2022-04-28T04:20:38.262Z",
		"updatedAt": "2022-04-28T04:20:38.262Z"
	}
}
```
</details>

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 201 | OK | [RecordCUResponse](#recordcuresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |


---

### List records

##### Description:

- Allows you to list records from a table with pagination and filter.

#### POST
#### /v1/crm/core/table/{tableId}/paged-record

##### Request URL

```java
https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4/paged-record?q=searchstring&pageNo=1&pageSize=2&sortCol=createdAt
```

##### Curl

```java
curl -X POST "https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4/paged-record?q=searchstring&pageNo=1&pageSize=2&sortCol=createdAt" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d '{"logicalOperator":"or","conditions":[{"colId":"Uvhr","opr":"eq","value":"my contact name"},{"colId":"JofH","opr":"sw","value":"my-prefix"}]}'
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tableId | path | Unique id of table | Yes | string |
| FilterRequest | body | Filter | Yes | [FilterRequest](#filterrequest) |
| q | query | value to perform full-text-search in records | No | string |
| pageNo | query | Page Number. Default Value: 1 | No | integer |
| pageSize | query | Page Size. Default Value: 30 | No | integer |
| sortCol | query | column id to sort record by. Default Value: createdAt | No | string |
| sortDir | query | Sort Direction. Default Value: -1 | No | [SortDirection](#sortdirection) |
| fetchAllRef | query | Pass true to populate details of all ref columns. Default Value: false | No | boolean |
| colIdsToFetchRef | query | Comma separated IDs of columns to populate ref column details. fetchAllRef has higher preference. | No | string |


##### Sample Request

<details>
<summary>Click to expand/collapse</summary>

```java
{
  "logicalOperator": "or",
  "conditions": [
    {
      "colId": "Uvhr",
      "opr": "eq",
      "value": "my contact name"
    },
    {
      "colId": "JofH",
      "opr": "sw",
      "value": "my-prefix"
    }
  ]
}
```
</details>

##### Sample Response

<details>
<summary>Click to expand/collapse</summary>

```java
{
  "totalCount": 100818,
  "sortCol": "createdAt",
  "sortDir": -1,
  "pageNo": 1,
  "pageSize": 2,
  "data": [
    {
      "_id": "551cfe9828d7b600b99c7b22",
      "cells": {
        "Uvhr": "My contact 1",
        "VKQV": [
          1
        ],
        "HLsw": [
          1
        ],
        "iPz8": "2022-04-26T11:52:46.848Z",
        "KvRO": "India",
        "a2vj": "WEB",
        "Fvks": [
          231183
        ]
      },
      "permissions": {
        "owners": [
          "231183"
        ]
      },
      "createdBy": 231183,
      "createdAt": "2022-04-26T11:52:46.848Z",
      "updatedAt": "2022-04-26T11:52:46.848Z"
    },
    {
      "_id": "a64b63c66506d2717fbc2dfd",
      "cells": {
        "Uvhr": "My contact 2",
        "VKQV": [
          1
        ],
        "HLsw": [
          1
        ],
        "iPz8": "2022-04-26T11:52:34.119Z",
        "a2vj": "WEB",
        "Fvks": [
          231183
        ]
      },
      "permissions": {
        "owners": [
          "231183"
        ]
      },
      "createdBy": 231183,
      "createdAt": "2022-04-26T11:52:34.120Z",
      "updatedAt": "2022-04-26T11:52:35.000Z"
    }
  ]
}
```
</details>

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PagedRecordResponse](#pagedrecordresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |


---

### Get record by ID

##### Description:

- Allows you to get a record from a table by its unique id.

#### GET
#### /v1/crm/core/table/{tableId}/record/{recordId}

##### Request URL

```java
https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4/record/551cfe9828d7b600b99c7b22
```

##### Curl

```java
curl -X GET "https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4/record/551cfe9828d7b600b99c7b22" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tableId | path | Unique id of table | Yes | string |
| recordId | path | Unique id of record | Yes | string |

##### Sample Response

<details>
<summary>Click to expand/collapse</summary>

```java
{
  "_id": "551cfe9828d7b600b99c7b22",
  "cells": {
    "Uvhr": "My contact 1",
    "VKQV": [
      1
    ],
    "HLsw": [
      1
    ],
    "iPz8": "2022-04-26T11:52:46.848Z",
    "KvRO": "India",
    "a2vj": "WEB",
    "Fvks": [
      231183
    ]
  },
  "permissions": {
    "owners": [
      "231183"
    ]
  },
  "createdBy": 231183,
  "createdAt": "2022-04-26T11:52:46.848Z",
  "updatedAt": "2022-04-26T11:52:46.848Z"
}
```
</details>

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Record](#record) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |


---

### Get record count

##### Description:

- Allows you to get total record count from a table.

#### GET
#### /v1/crm/core/table/{tableId}/count

##### Request URL

```java
https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4/count
```

##### Curl

```java
curl -X GET "https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4/count" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tableId | path | Unique id of table | Yes | string |

##### Sample Response

<details>
<summary>Click to expand/collapse</summary>

```java
{
	"count": 100819
}
```
</details>

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [RecordCountResponse](#recordcountresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |


---

### Update record by ID

##### Description:

- Allows you to update a record in a table by unique id of the record.

#### PUT
#### /v1/crm/core/table/{tableId}/record/{recordId}

##### Request URL

```java
https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4/record/626a161631e99d00135282a4
```

##### Curl

```java
curl -X PUT "https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4/record/626a161631e99d00135282a4" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d '{"cells":{"Uvhr":"My contact new - updated","JofH":"my.contact.new.updated@deskera.xyz","VKQV":[1],"HLsw":[1,7661]}}'
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tableId | path | Unique id of table | Yes | string |
| recordId | path | Unique id of record | Yes | string |
| RecordRequest | body | RecordRequest | Yes | [RecordRequest](#recordrequest) |

##### Sample Request

<details>
<summary>Click to expand/collapse</summary>

```java
{
  "cells": {
    "Uvhr": "My contact new - updated",
    "JofH": "my.contact.new.updated@deskera.xyz",
    "VKQV": [
      1
    ],
    "HLsw": [
      1,
      7661
    ]
  }
}
```
</details>

##### Sample Response

<details>
<summary>Click to expand/collapse</summary>

```java
{
	"success": true,
	"id": "626a161631e99d00135282a4",
	"data": {
    "_id": "626a161631e99d00135282a4",
		"cells": {
			"Uvhr": "My contact new - updated",
			"JofH": "my.contact.new.updated@deskera.xyz",
			"VKQV": [
				1
			],
			"HLsw": [
				1,
				7661
			],
			"iPz8": "2022-04-28T04:20:38.262Z",
			"a2vj": "WEB",
			"Fvks": [
				231183
			]
		},
		"permissions": {
			"owners": [
				"231183"
			]
		},
		"createdBy": 231183,
		"createdAt": "2022-04-28T04:20:38.262Z",
		"updatedAt": "2022-04-28T04:31:57.882Z"
	}
}
```
</details>

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [RecordCUResponse](#recordcuresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |


---

### Delete record by ID

##### Description:

- Allows you to delete a record from a table by unique id of the record.

#### DELETE
#### /v1/crm/core/table/{tableId}/record/{recordId}

##### Request URL

```java
https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4/record/626a161631e99d00135282a4
```

##### Curl

```java
curl -X DELETE "https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4/record/626a161631e99d00135282a4" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tableId | path | Unique id of table | Yes | string |
| recordId | path | Unique id of record | Yes | string |

##### Sample Response

<details>
<summary>Click to expand/collapse</summary>

```java
{
	"success": true,
	"id": "626a161631e99d00135282a4",
}
```
</details>

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [RecordDeleteResponse](#recorddeleteresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |


## Models
---

### FilterRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| logicalOperator | string | logical operator to join the filter conditions. Possible Values: [and, or] | Yes |
| conditions | List of [FilterCondition](#filtercondition) | filter conditions | No |

### FilterCondition
| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| colId | string | Column id | Yes |
| opr | [FilterOperator](#filteroperator) | Filter operator | Yes |
| value | string | Value to match in filter | Yes |

### FilterOperator
| Name | Description |
| ---- | ----------- |
| eq | Equals |
| neq | Not Equals |
| emp | Is Empty |
| nemp | Is Not Empty |
| lt | Less Than |
| lte | Less Than or Equals |
| gt | Greater Than |
| gte | Greater Than or Equals |
| in | In |
| nin | Not In |
| sw | Starts With |
| ew | Ends With |
| c | Contains |
| nc | Does Not Contain |


### PagedRecordResponse
| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| totalCount | integer | Total record count in table | Yes |
| sortCol | string | column id to sort record by. Defaults to: createdAt | Yes |
| sortDir | [SortDirection](#sortdirection) | Sort Direction. Defaults to: -1 | Yes |
| pageNo | integer | Page number | Yes |
| pageSize | integer | Number of records per page | Yes |
| data | List of [Record](#record) | Record list | Yes |

### SortDirection
| Name | Description |
| ---- | ----------- |
| 1 | ASC |
| -1 | DESC |

### Record
| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| _id | string | Unique id | Yes |
| cells | Map<string, object> | All column values in the form of a map, with column id as key and column value as value | Yes |
| permissions | [Permissions](#permissions) | Permissions of the users for the record | No |
| createdAt | string | ISO timestamp | No |
| updatedAt | string | ISO timestamp | No |
| createdBy | integer | iamUserId of the user who created the record | Yes |

### RecordRequest
| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cells | Map<string, object> | All column values in the form of a map, with column id as key and column value as value | Yes |

### Permissions
| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| owners | List of integer | List of iamUserId of users who are owners of the record. Applicable to Contact, Deal, and Activity. | Yes |

### RecordCUResponse
| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| success | boolean | Success flag | Yes |
| id | string | id of the record | Yes |
| data | [Record](#record) | Record | Yes |

### RecordDeleteResponse
| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| success | boolean | Success flag | Yes |
| id | string | id of the record | Yes |

### RecordCountResponse
| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| count | integer | count | Yes |
