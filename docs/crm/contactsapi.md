---
id: contactsapi
title: Contact APIs
sidebar_label: Contact
---
You will be able to manage your contacts details with provided APIs, such as create, retrieve, update and delete.
## API
---

### Get Contacts

Show all contacts

##### Description:

Get all contacts

#### GET
#### /v1/crm/contacts
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/contacts
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/crm/contacts" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```


##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| columns | query |  | No | [ string ] |
| contains_email | query |  | No | boolean |
| limit | query |  | No | integer |
| page | query |  | No | integer |
| orderBy | query |  | No | string |
| search | query |  | No | string |
| type | query |  | No | string |
| contact_ids | query |  | No | string |
| order | query |  | No | string |
| action | query |  | No | string |
| sort | query |  | No | string |
| name | query |  | No | string |
| email | query |  | No | string |
| phone | query |  | No | string |
| type | query |  | No | string |
| order_by | query |  | No | string |

##### Sample Response
```java
{
  "data": [
    {
      "id": 179,
      "name": "testing Qa",
      "email": "jayhind@getnada.com",
      "country_code": "+232",
      "label": {
        "id": 1,
        "name": "No label"
      },
      "label_id": 1,
      "type": "person",
      "visibility_type": "private",
      "visibility_ids": null,
      "persons": [

      ],
      "organization": {
      },
      "organization_id": 178,
      "sub_owner_ids": [

      ],
      "owner_id": 19311,
      "tenant_id": 23312,
      "created_at": "2020-06-12T07:07:56.232308Z",
      "updated_at": "2020-06-12T07:07:56.23231Z",
      "created_by": 17826,
      "updated_by": 17826,
      "owner_details": {
        "id": 19311,
        "first_name": "Test",
        "last_name": "User",
        "email": "mytest1@getnada.com",
        "contact": "+6585758458",
        "role": "User",
        "status": "active"
      },
      "deal_details": [
        {
          "contactId": 179,
          "status": 0,
          "status_count": 1
        }
      ],
      "sub_owner_details": null,
      "custom_field": [
        {
          "code": "D-0000013",
          "label": "drop",
          "value": "V2",
          "module": "",
          "shortName": "drop"
        }
      ],
      "c_field": {
        "num": "",
        "drop": "V2",
        "text": ""
      },
      "view_only": false
    }
  ],
  "paginationInfo": {
    "page": 1,
    "totalRecords": 1
  }
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactSaveDto](#ContactSaveDto) ] |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Bulk Update

Bulk Update Contacts

##### Description:

Bulk update contacts

#### PATCH
#### /v1/crm/contacts
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/contacts
```

##### Curl

```java
curl -X PATCH "https://bifrost.deskera.com/v1/crm/contacts" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"ids\": [ 1,2 ], \"label_id\": 0, \"owner_id\": 0, \"visibility_type\": \"team\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Contact | body | Bulk Update Contacts | Yes | [BulkUpdateContact](#BulkUpdateContact) |

##### Sample Request
```java
{
  "ids": [
    1,2
  ],
  "label_id": 0,
  "owner_id": 0,
  "visibility_type": "team"
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Create Contact

Create Contact

##### Description:

Add New Contact

#### POST
#### /v1/crm/contacts
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/contacts
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/crm/contacts" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"name\": \"Test Contact\", \"email\": \"test@test.com\", \"country_code\": \"+91\", \"phone\": \"9876543212\", \"address\": \"\", \"label_id\": 1, \"visibility_type\": \"team\", \"type\": \"person\", \"person_names\": [ ], \"owner_id\": 17826, \"sub_owner_ids\": [ ], \"custom_field\": [ { \"label\": \"drop\", \"code\": \"D-0000013\", \"module\": null, \"value\": \"V2\" } ]}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contact | body | Create Contact | Yes | [ContactSaveDto](#ContactSaveDto) |

##### Sample Request
```java
{
  "name": "Test Contact",
  "email": "test@test.com",
  "country_code": "+91",
  "phone": "9876543212",
  "address": "",
  "label_id": 1,
  "visibility_type": "team",
  "type": "person",
  "person_names": [
  ],
  "owner_id": 17826,
  "sub_owner_ids": [
  ],
  "custom_field": [
    {
      "label": "drop",
      "code": "D-0000013",
      "module": null,
      "value": "V2"
    }
  ]
}
```

##### Sample Response
```java
{
  "id": 12,
  "name": "Test Contact",
  "country_code": "+232",
  "label": {

  },
  "label_id": 1,
  "type": "person",
  "visibility_type": "team",
  "visibility_ids": null,
  "persons": null,
  "organization": null,
  "organization_id": 0,
  "sub_owner_ids": [

  ],
  "owner_id": 17826,
  "tenant_id": 23312,
  "created_at": "2020-06-18T12:48:44.11855Z",
  "updated_at": "2020-06-18T12:48:44.118552Z",
  "created_by": 17826,
  "updated_by": 17826,
  "owner_details": {

  },
  "deal_details": null,
  "sub_owner_details": null,
  "custom_field": [
    {
      "code": "D-0000013",
      "label": "drop",
      "value": "V2",
      "module": "",
      "shortName": "drop"
    }
  ]
  "view_only": false
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [CreateResponse](#CreateResponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Delete Contact by Id

Delete Contact

##### Description:

Delete Contact

#### DELETE
#### /v1/crm/contacts/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/contacts/1
```

##### Curl

```java
curl -X DELETE "https://bifrost.deskera.com/v1/crm/contacts/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Summary:

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Contact ID | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Get Contact by Id

Get Contact By Id

##### Description:

Get Contact By Id

#### GET
#### /v1/crm/contacts/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/contacts/1
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/crm/contacts/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Contact ID | Yes | integer |

##### Sample Response
```java
{
      "id": 179,
      "name": "testing Qa",
      "email": "jayhind@getnada.com",
      "country_code": "+232",
      "label": {
        "id": 1,
        "name": "No label"
      },
      "label_id": 1,
      "type": "person",
      "visibility_type": "private",
      "visibility_ids": null,
      "persons": [

      ],
      "organization": {
      },
      "organization_id": 178,
      "sub_owner_ids": [

      ],
      "owner_id": 19311,
      "tenant_id": 23312,
      "created_at": "2020-06-12T07:07:56.232308Z",
      "updated_at": "2020-06-12T07:07:56.23231Z",
      "created_by": 17826,
      "updated_by": 17826,
      "owner_details": {
        "id": 19311,
        "first_name": "Test",
        "last_name": "User",
        "email": "mytest1@getnada.com",
        "contact": "+6585758458",
        "role": "User",
        "status": "active"
      },
      "deal_details": [
        {
          "contactId": 179,
          "status": 0,
          "status_count": 1
        }
      ],
      "sub_owner_details": null,
      "custom_field": [
        {
          "code": "D-0000013",
          "label": "drop",
          "value": "V2",
          "module": "",
          "shortName": "drop"
        }
      ],
      "c_field": {
        "num": "",
        "drop": "V2",
        "text": ""
      },
      "view_only": false
    }
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ContactSaveDto](#ContactSaveDto) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Update Contact

Update Contact

##### Description:

Update Contact

#### PATCH
#### /v1/crm/contacts/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/contacts/1
```

##### Curl

```java
curl -X PATCH "https://bifrost.deskera.com/v1/crm/contacts/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d " \"name\": \"Rahul A\" \"email\": \"rahul.kaushik@deskera.org\" \"country_code\": \"+232\" \"phone\": \"\" \"label_id\": 1 \"visibility_type\": \"team\" \"type\": \"person\" \"person_names\": [] \"owner_id\": 21584 \"sub_owner_ids\": [2675] \"custom_field\": [{\"label\": \"TT\", \"code\": \"D-0000005\", \"module\": \"\", \"value\": \"\"}] \"id\": 1}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Contact ID | Yes | integer |
| Contact | body | Update Contact | Yes | [ContactSaveDto](#ContactSaveDto) |

##### Sample Request
```java
{
    "name": "Rahul A"
    "email": "rahul.kaushik@deskera.org"
    "country_code": "+232"
    "phone": ""
    "label_id": 1
    "visibility_type": "team"
    "type": "person"
    "person_names": []
    "owner_id": 21584
    "sub_owner_ids": [2675]
    "custom_field": [{"label": "TT", "code": "D-0000005", "module": "", "value": ""}]
    "id": 1
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Update Contact

Update Contact

##### Description:

Update Contact

#### PUT
#### /v1/crm/contacts/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/contacts/1
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/crm/contacts/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"name\": \"Rahul A\", \"email\": \"rahul.kaushik@deskera.org\", \"country_code\": \"+232\", \"phone\": \"\", \"label_id\": 1, \"visibility_type\": \"team\", \"type\": \"person\", \"person_names\": [ ], \"owner_id\": 21584, \"sub_owner_ids\": [ 2675 ], \"custom_field\": [ { \"label\": \"TT\", \"code\": \"D-0000005\", \"module\": \"\", \"value\": \"\" } ], \"id\": 1}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Contact ID | Yes | integer |
| Contact | body | Update Contact | Yes | [ContactSaveDto](#ContactSaveDto) |

##### Sample Request
```java
{
    "name": "Rahul A"
    "email": "rahul.kaushik@deskera.org"
    "country_code": "+232"
    "phone": ""
    "label_id": 1
    "visibility_type": "team"
    "type": "person"
    "person_names": []
    "owner_id": 21584
    "sub_owner_ids": [2675]
    "custom_field": [{label: "TT", code: "D-0000005", module: "", value: ""}]
    "id": 1
}
```


##### Responses

| Code | Description |
| ---- | ----------- |
| 201 |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Get Contact Labels

Show all Contact Labels

##### Description:

Get all Contact Labels

#### GET
#### /v1/crm/contacts/labels
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/contacts/labels
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/crm/contacts/labels" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Sample Response
```java
[
  {
    "id": 1,
    "name": "No label",
    "color": "",
    "icon": "",
    "owner_id": 0
  },
  {
    "id": 2,
    "name": "Cold lead",
    "color": "blue",
    "icon": "ac_unit",
    "owner_id": 0
  },
  {
    "id": 3,
    "name": "Warm lead",
    "color": "orange",
    "icon": "brightness_low",
    "owner_id": 0
  },
  {
    "id": 4,
    "name": "Hot lead",
    "color": "deep-orange",
    "icon": "whatshot",
    "owner_id": 0
  }
]
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactLabelResponse](#ContactLabelResponse) ] |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Create Contact Label

Add Contact Label

##### Description:

Add Contact Label

#### POST
#### /v1/crm/contacts/labels
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/contacts/labels
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/crm/contacts/labels" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"name\": \"Test Label\", \"color\": \"green\", \"icon\": \"fiber_manual_record\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| ContactLabel | body | Add Contact Label | Yes | [ContactLabelRequest](#ContactLabelRequest) |

##### Sample Request
```java
{
    "name": "Test Label",
    "color": "green",
    "icon": "fiber_manual_record"
}
```

##### Sample Response
```java
{
    "id":"14"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 201 | Created | [CreateResponse](#CreateResponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Delete Contact Label

Delete Contact Label

##### Description:

Delete Contact Label

#### DELETE
#### /v1/crm/contacts/labels/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/contacts/labels/1
```

##### Curl

```java
curl -X DELETE "https://bifrost.deskera.com/v1/crm/contacts/labels/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Contact Label ID | Yes | integer |


##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Get Contact Label by Id

Show contact Label of specific ID

##### Description:

get contact Label for specific ID

#### GET
#### /v1/crm/contacts/labels/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/contacts/labels/1
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/crm/contacts/labels/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Label ID | Yes | integer |

##### Sample Response
```java
{
    "id": 1,
    "name": "No label",
    "color": "",
    "icon": "",
    "owner_id": 0
  }
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ContactLabelResponse](#ContactLabelResponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Update Contact Label

Update Contact Label

##### Description:

Update Contact Label

#### PUT
#### /v1/crm/contacts/labels/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/contacts/labels/1
```

##### Curl

```java
curl -X PUT "https:/bifrost.deskera.com/v1/crm/contacts/labels/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"name\": \"Test Label12\", \"color\": \"green\", \"icon\": \"fiber_manual_record\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Contact Label ID | Yes | integer |
| ContactLabel | body | Update Contact Label | Yes | [ContactLabelRequest](#ContactLabelRequest) |

##### Sample Request
```java
{
    "name": "Test Label",
    "color": "green",
    "icon": "fiber_manual_record"
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Get Contacts y Multiple Ids

Get Multiple Contacts By Id

##### Description:

Get Multiple Contacts By Id

#### POST
#### /v1/crm/contacts/multiple
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/contacts/multiple
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/crm/contacts/multiple" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"contact_ids\": [ 1,2 ]}"
```


##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| ContactIds | body | Contact Ids | Yes | [MultipleContactsByIdRequest](#MultipleContactsByIdRequest) |

##### Sample Request
```java
{
  "contact_ids": [
    1,2
  ]
}
```

##### Sample Response
```java
[
    {
      "id": 179,
      "name": "testing Qa",
      "email": "jayhind@getnada.com",
      "country_code": "+232",
      "label": {
        "id": 1,
        "name": "No label"
      },
      "label_id": 1,
      "type": "person",
      "visibility_type": "private",
      "visibility_ids": null,
      "persons": [

      ],
      "organization": {
      },
      "organization_id": 178,
      "sub_owner_ids": [

      ],
      "owner_id": 19311,
      "tenant_id": 23312,
      "created_at": "2020-06-12T07:07:56.232308Z",
      "updated_at": "2020-06-12T07:07:56.23231Z",
      "created_by": 17826,
      "updated_by": 17826,
      "owner_details": {
        "id": 19311,
        "first_name": "Test",
        "last_name": "User",
        "email": "mytest1@getnada.com",
        "contact": "+6585758458",
        "role": "User",
        "status": "active"
      },
      "deal_details": [
        {
          "contactId": 179,
          "status": 0,
          "status_count": 1
        }
      ],
      "sub_owner_details": null,
      "custom_field": [
        {
          "code": "D-0000013",
          "label": "drop",
          "value": "V2",
          "module": "",
          "shortName": "drop"
        }
      ],
      "c_field": {
        "num": "",
        "drop": "V2",
        "text": ""
      },
      "view_only": false
    }
]
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactSaveDto](#ContactSaveDto) ] |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

## Models
---

### BulkUpdateContact

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ids | [ integer ] |  | No |
| label_id | integer |  | No |
| owner_id | integer |  | No |
| visibility_ids | string |  | No |
| visibility_type | string | private| public| team | No |

### ContactDtoImportResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | [ContactSaveDto](#ContactSaveDto) |  | No |
| message | string |  | No |

### ContactFilter

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| email | string |  | No |
| name | string |  | No |
| order_by | string |  | No |
| phone | string |  | No |
| sort | string |  | No |
| type | string |  | No |

### ContactLabelRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| color | string |  | No |
| icon | string |  | No |
| name | string |  | No |
| owner_id | integer |  | No |

### ContactLabelResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| color | string |  | No |
| icon | string |  | No |
| id | integer |  | No |
| name | string |  | No |
| owner_id | integer |  | No |
| tenant_id | integer |  | No |

### ContactSaveDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | string |  | No |
| country_code | string |  | No |
| custom_field | [ [CustomField](#CustomField) ] |  | No |
| email | string |  | No |
| id | integer |  | No |
| label_id | integer |  | No |
| logo | string |  | No |
| name | string |  | No |
| note | string |  | No |
| organization_id | integer |  | No |
| organization_name | string |  | No |
| owner_details | string |  | No |
| owner_id | integer |  | No |
| person_ids | [ integer ] |  | No |
| person_names | [ string ] |  | No |
| phone | string |  | No |
| sub_owner_ids | string |  | No |
| type | string | organization | person | No |
| visibility_ids | string |  | No |
| visibility_type | string | private| public| team | No |

### CreateResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | integer |  | No |

### CustomField

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| label | string |  | No |
| module | string |  | No |
| shortName | string |  | No |
| value | string |  | No |

### MultipleContactsByIdRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact_ids | [ integer ] |  | No |