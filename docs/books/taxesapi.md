---
id: taxesapi
title: Taxes APIs
sidebar_label: Taxes
---
In Singapore, Goods and Services Tax (GST) is a broad-based consumption tax imposed on imported goods and almost all supplies of products and services.
This tax may also be known as Value-added Tax (VAT) in other countries.

Exported goods and international services are considered Zero-Rated Supplies and are charged at 0%. There are 2 types of taxes - Output tax or Input tax. Output tax is GST to be charged on top of the selling price of your supplies sold to your customers. Input tax is GST incurred on your company’s business purchases and expenses, including imported goods, which are paid to your suppliers.

`TaxDto` helps to create new taxes, retrieve tax by id or get a list of taxes.

More about [Taxes API documentation](https://deskera.docs.apiary.io/#reference/tax-apis)

## API
---

### Search Tax
Get taxes by filter criteria. [More about search tax](https://deskera.docs.apiary.io/#reference/tax-apis/v1taxes/get-taxes-by-filter-criteria)

##### Description:

- Allows you to retrieve a list of all taxes.
- Allows you to retrieve specific taxes based on it's filter criteria.

#### GET
#### /v1/taxes
##### Request URL

```java
https://bifrost.deskera.com/v1/taxes?limit=10&page=0&sort=createdAt&sortDir=desc
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/taxes?limit=10&page=0&sort=createdAt&sortDir=desc" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
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
| x-access-token | header | Access token | Yes | string |

##### Sample Response
```java
{
  "content": [
      {
        "accountCode": "AC-001",
        "code": "TC-001",
        "deleted": false,
        "description": "sales Tax for SG",
        "name": "SGST",
        "percent": 7,
        "status": "active",
        "taxCode": "TC-001",
        "type": "SALES"
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
  "totalPages": 0,
  "last": true,
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
| 200 | Taxes have been fetched successfully. | [TaxDto](#taxdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

---
### Create Tax

Create a new Tax. [More about create tax](https://deskera.docs.apiary.io/#reference/tax-apis/v1taxes/create-a-new-tax)

##### Description:

- Allows you to create new tax.

#### POST
#### /v1/taxes
##### Request URL

```java
https://bifrost.deskera.com/v1/taxes
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/taxes" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"accountCode\": \"AC-001\", \"code\": \"TC-001\", \"deleted\": false, \"description\": \"sales Tax for SG\", \"name\": \"SGST\", \"percent\": 7, \"status\": \"active\", \"taxCode\": \"TC-001\", \"type\": \"SALES\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| taxDto | body | taxDto | Yes | [TaxDto](#taxdto) |
| x-access-token | header | Access token | Yes | string |

##### Sample Request
```java
{
  "accountCode": "AC-001",
  "code": "TC-001",
  "deleted": false,
  "description": "sales Tax for SG",
  "name": "SGST",
  "percent": 7,
  "status": "active",
  "taxCode": "TC-001",
  "type": "SALES"
}
```

##### Sample Response
```java
{
  "accountCode": "AC-001",
  "code": "TC-001",
  "deleted": false,
  "description": "sales Tax for SG",
  "name": "SGST",
  "percent": 7,
  "status": "active",
  "taxCode": "TC-001",
  "type": "SALES"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TaxDto](#taxdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

---
### Retrieve Tax

Get tax by id. [More about retrieve tax](https://deskera.docs.apiary.io/#reference/tax-apis/v1taxesid/get-tax-by-id)

##### Description:

- Allows you to retrieve a specific tax based on it's id.

#### GET
#### /v1/taxes/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/taxes/1
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/taxes/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```


##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| x-access-token | header | Access token | Yes | string |

##### Sample Response
```java
{
  "accountCode": "AC-001",
  "code": "TC-001",
  "deleted": false,
  "description": "sales Tax for SG",
  "name": "SGST",
  "percent": 7,
  "status": "active",
  "taxCode": "TC-001",
  "type": "SALES"
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TaxDto](#taxdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

## Models

---

### TaxDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account code | No |
| code | string | Tax code | No |
| deleted | boolean | Tax deleted | No |
| description | string | Description | No |
| name | string | Tax Name | No |
| percent | number | Tax percentage  | No |
| status | string | Tax status | No |
| taxCode | string | Tax code | No |
| type | string | SALES | No |
