---
id: dealsapi
title: Deal APIs
sidebar_label: Deal
---

This APIs will help you to manage your deals and pipelines records.

You will be able to do the following:
- **Deal:**
  - Create, Retrieve, Update and Delete
- **Pipeline:**
  - Create, Retrieve, Update and Delete
- **Stage:**
  - Delete

## API
---

### Bulk Delete Deal

Bulk Delete Deal.

##### Description:

- Allows you to delete large volume of deal.

#### DELETE
#### /v1/crm/deals
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/deals
```

##### Curl

```java
curl -X DELETE "https://bifrost.deskera.com/v1/crm/deals" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"ids\": [ 1,2 ]}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pipeline | body | Bulk Delete deal | Yes | [BulkOperations](#bulkoperations) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 204 |  | |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

---

### Get Deals

Get Deals.

##### Description:

- Allows you to retrieve a list of deal records.

#### GET
#### /v1/crm/deals
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/deals
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/crm/deals" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pipeline_id | query | Pipeline ID | No | integer |
| deal_summary | query | Is deal summary | No | boolean |
| contact_id | query | Contact id | No | string |
| deal_ids | query | Deal ids | No | string |
| show_closed_deals | query | Show Closed deals flag | No | boolean |

##### Sample Response
```java
{
    "data": [
        {
            "id": 501,
            "name": "Test",
            "pipeline_id": 360,
            "stage_id": 2261,
            "stage": {
                "pipeline_id": 360,
                "order": 6,
                "name": "Closed won",
                "deal_probability": 100,
                "rotting_days": 30,
                "help_text": "",
                "system_generated": false,
                "won_lost_status": ""
            },
            "contact_id": 6768,
            "organization_id": 6767,
            "mobile": "",
            "email": "",
            "currency_code": "USD",
            "amount": 0,
            "closing_date": "2020-06-17T10:44:21.345Z",
            "status": 0,
            "activity_id": 0,
            "owner_id": 6517,
            "is_deleted": false,
            "reason": "",
            "created_at": "2020-06-17T10:44:48.686512Z",
            "total_activities": 0,
            "next_activity_date": ""
        }
    ],
    "page": 1,
    "number_of_elements": 2,
    "size_per_page": 10,
    "total_pages": 1,
    "number_of_records": 2
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [FilterConfig](#filterconfig) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

---

### Bulk Update Deal

Bulk Update Deal.

##### Description:

- Allows you to update a large amount of deal records at once.

#### PATCH
#### /v1/crm/deals
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/deals
```

##### Curl

```java
curl -X PATCH "https://bifrost.deskera.com/v1/crm/deals" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"ids\": [ 1,2 ], \"pipeline_id\": 1, \"stage_id\":32, \"reason\": \"Test reason\", \"status\": 2}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pipeline | body | Bulk Update deal | Yes | [BulkUpdateDealReq](#bulkupdatedealreq) |

##### Sample request
```java
{
  "ids": [
    1,2
  ],
  "owner_id": 12,
  "pipeline_id": 1,
  "stage_id":2,
  "reason": "Test reason",
  "status": 2,
  "tenantId": 1234
}
```

##### Sample Response
```java
[1,2]
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [int](#int) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

---

### Create Deal

Add deal.

##### Description:

- Allows you to create a new deal record.

#### POST
#### /v1/crm/deals
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/deals
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/crm/deals" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{\"name\": \"TestDeal1\",\"contact_id\": 0,\"contact_name\": \"Paul\",\"organization_name\": \"Paul Org \",\"organization_id\": 0,\"email\": \"\",\"currency_code\": \"SGD\",\"amount\": 0,\"stage_id\": 3169,\"pipeline_id\": 492,\"closing_date\": \"2020-06-23T07:30:26.438Z\",\"custom_field\": [],\"owner_id\": 9547,\"sub_owner_ids\": [],\"visibility_type\": \"team\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pipeline | body | Add deal | Yes | [DealRequest](#dealrequest) |

##### Sample Request
```java
{
  "name": "TestDeal",
  "contact_id": 0,
  "contact_name": "Paul",
  "organization_name": "Paul Org ",
  "organization_id": 0,
  "email": "",
  "currency_code": "SGD",
  "amount": 0,
  "stage_id": 3169,
  "pipeline_id": 492,
  "closing_date": "2020-06-23T07:30:26.438Z",
  "custom_field": [

  ],
  "owner_id": 9547,
  "sub_owner_ids": [

  ],
  "visibility_type": "team"
}
```

##### Sample Response
```java
{
  "id": 1,
  "success": true
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 201 | Created | [CUDRecordResponse](#cudrecordresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

---

### Delete Deal

Delete Deal.

##### Description:

- Allows you to delete deal record.

#### DELETE
#### /v1/crm/deals/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/deals/1
```

##### Curl

```java
curl -X DELETE "https://bifrost.deskera.com/v1/crm/deals/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Deal ID | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

---

### Get Deal by Id

Get Deal by id.

##### Description:

- Allows you to retrieve deal record by it's id.

#### GET
#### /v1/crm/deals/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/deals/1
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/crm/deals/1" -H "accept: application/json"  -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Deal ID | Yes | integer |

##### Sample Response
```java
{
    "id": 501,
    "name": "Test",
    "pipeline_id": 360,
    "stage_id": 2261,
    "stage": {
        "pipeline_id": 360,
        "order": 6,
        "name": "Closed won",
        "deal_probability": 100,
        "rotting_days": 30,
        "help_text": "",
        "system_generated": false,
        "won_lost_status": ""
    },
    "contact_id": 6768,
    "organization_id": 6767,
    "mobile": "",
    "email": "",
    "currency_code": "USD",
    "amount": 0,
    "closing_date": "2020-06-17T10:44:21.345Z",
    "status": 0,
    "activity_id": 0,
    "owner_id": 6517,
    "is_deleted": false,
    "reason": "",
    "created_at": "2020-06-17T10:44:48.686512Z",
    "total_activities": 0,
    "next_activity_date": ""
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [DealResponse](#dealresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

---

### Update Deal

Update Deal by id.

##### Description:

- Allows you to update deal record by it's id.

#### PUT
#### /v1/crm/deals/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/deals/1
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/crm/deals/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{\"name\": \"TestDeal123\",\"contact_id\": 0,\"contact_name\": \"Paul\",\"organization_name\": \"Paul Org \",\"organization_id\": 0,\"email\": \"\",\"currency_code\": \"SGD\",\"amount\": 0,\"stage_id\": 3169,\"pipeline_id\": 492,\"closing_date\": \"2020-06-23T07:30:26.438Z\",\"custom_field\": [],\"owner_id\": 9547,\"sub_owner_ids\": [],\"visibility_type\": \"team\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Deal ID | Yes | integer |
| pipeline | body | Update deal | Yes | [Deal](#deal) |

##### Sample Request
```java
{
  "name": "TestDeal",
  "contact_id": 0,
  "contact_name": "Paul",
  "organization_name": "Paul Org ",
  "organization_id": 0,
  "email": "",
  "currency_code": "SGD",
  "amount": 0,
  "stage_id": 3169,
  "pipeline_id": 492,
  "closing_date": "2020-06-23T07:30:26.438Z",
  "custom_field": [

  ],
  "owner_id": 9547,
  "sub_owner_ids": [

  ],
  "visibility_type": "team"
}
```

##### Sample Response
```java
{
  "id": 1,
  "success": true
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [CUDRecordResponse](#cudrecordresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

---

### Get Pipelines

Get Pipelines.

##### Description:

- Allows you to retrieve a list of pipeline details.

#### GET
#### /v1/crm/deals/pipelines
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/deals/pipelines
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/crm/deals/pipelines" -H "accept: application/json"  -H "x-access-token: sampleaccesstoken"
```

##### Sample Response
```java
[
    {
        "id": 1,
        "name": "Default Pipeline",
        "created_by": 6517,
        "created_at": "2020-06-17T05:10:26.374137Z",
        "updated_at": "2020-06-17T05:10:26.374137Z",
        "tenantId": 5148,
        "stages": [
            {
                "id": 2256,
                "order": 1,
                "name": "Appointment scheduled",
                "deal_probability": 20,
                "rotting_days": 30,
                "created_at": "2020-06-17T05:10:26.37774Z",
                "updated_at": "2020-06-17T05:10:26.37774Z",
                "deals": null,
                "help_text": "Appointment scheduled",
                "system_generated": false,
                "won_lost_status": "open"
            },
            {
                "id": 2257,
                "order": 2,
                "name": "Qualified to buy",
                "deal_probability": 40,
                "rotting_days": 30,
                "created_at": "2020-06-17T05:10:26.381605Z",
                "updated_at": "2020-06-17T05:10:26.381605Z",
                "deals": null,
                "help_text": "Qualified to buy",
                "system_generated": false,
                "won_lost_status": "open"
            },
            {
                "id": 2258,
                "order": 3,
                "name": "Presentation scheduled",
                "deal_probability": 60,
                "rotting_days": 30,
                "created_at": "2020-06-17T05:10:26.384912Z",
                "updated_at": "2020-06-17T05:10:26.384912Z",
                "deals": null,
                "help_text": "Presentation scheduled",
                "system_generated": false,
                "won_lost_status": "open"
            },
            {
                "id": 2259,
                "order": 4,
                "name": "Decision-maker bought-in",
                "deal_probability": 80,
                "rotting_days": 30,
                "created_at": "2020-06-17T05:10:26.388407Z",
                "updated_at": "2020-06-17T05:10:26.388407Z",
                "deals": null,
                "help_text": "Decision-maker bought-in",
                "system_generated": false,
                "won_lost_status": "open"
            },
            {
                "id": 2260,
                "order": 5,
                "name": "Contract sent",
                "deal_probability": 90,
                "rotting_days": 30,
                "created_at": "2020-06-17T05:10:26.393173Z",
                "updated_at": "2020-06-17T05:10:26.393173Z",
                "deals": null,
                "help_text": "Contract sent",
                "system_generated": false,
                "won_lost_status": "open"
            },
            {
                "id": 2261,
                "order": 6,
                "name": "Closed won",
                "deal_probability": 100,
                "rotting_days": 30,
                "created_at": "2020-06-17T05:10:26.398307Z",
                "updated_at": "2020-06-17T05:10:26.398307Z",
                "deals": [
                    {
                        "id": 501,
                        "name": "Test",
                        "stage": null,
                        "contact_id": 6768,
                        "organization_id": 6767,
                        "mobile": "9876543212",
                        "email": "test@test.com",
                        "currency_code": "USD",
                        "amount": 0,
                        "closing_date": "2020-06-17T10:44:21.345Z",
                        "status": 0,
                        "activity_id": 0,
                        "owner_id": 6517,
                        "is_deleted": false,
                        "reason": "",
                        "created_at": "2020-06-17T10:44:48.686512Z",
                        "total_activities": 0,
                        "next_activity_date": ""
                    }
                ],
                "help_text": "Closed won",
                "system_generated": true,
                "won_lost_status": "won"
            },
            {
                "id": 2262,
                "order": 7,
                "name": "Closed lost",
                "deal_probability": 0,
                "rotting_days": 30,
                "created_at": "2020-06-17T05:10:26.401914Z",
                "updated_at": "2020-06-17T05:10:26.401914Z",
                "deals": null,
                "help_text": "Closed lost",
                "system_generated": true,
                "won_lost_status": "lost"
            }
        ]
    }
]
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Pipeline](#pipeline) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

---

### Create Pipeline

Create Pipeline.

##### Description:

- Allows you to cretae new pipeline.

#### POST
#### /v1/crm/deals/pipelines:

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/deals/pipelines
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/crm/deals/pipelines" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"name\": \"Test Pipeline\", \"stages\": [ { \"order\": 1, \"name\": \"l1\", \"deal_probability\": 30, \"rotting_days\": 10, \"help_text\":\"Level1\", \"system_generated\":false, \"won_lost_status\":\"open\" }, { \"order\": 2, \"name\": \"Won\", \"deal_probability\": 30, \"rotting_days\": 10, \"help_text\":\"Won\", \"system_generated\":true, \"won_lost_status\":\"won\" }, { \"order\": 3, \"name\": \"Lost\", \"deal_probability\": 30, \"rotting_days\": 10, \"help_text\":\"Lost\", \"system_generated\":true, \"won_lost_status\":\"lost\" } ]}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pipeline | body | Create Pipeline | Yes | [Pipeline](#pipeline) |

##### Sample request
```java
{
  "name": "Test Pipeline",
  "stages": [
     {
      "order": 1,
      "name": "l1",
      "deal_probability": 30,
      "rotting_days": 10,
      "help_text":"Level1",
      "system_generated":false,
      "won_lost_status":"open"
    },
    {
      "order": 2,
      "name": "Won",
      "deal_probability": 30,
      "rotting_days": 10,
      "help_text":"Won",
      "system_generated":true,
      "won_lost_status":"won"
    },
    {
      "order": 3,
      "name": "Lost",
      "deal_probability": 30,
      "rotting_days": 10,
      "help_text":"Lost",
      "system_generated":true,
      "won_lost_status":"lost"
    }
  ]
}
```

##### Sample Response
```java
{
    "Success": true,
    "Id": 22
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 201 | Created | [CUDRecordResponse](#cudrecordresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

---

### Delete Pipeline

Delete Pipeline.

##### Description:

- Allows you to delete existing pipeline.

#### DELETE
#### /v1/crm/deals/pipelines/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/deals/pipelines/1
```

##### Curl

```java
curl -X DELETE "https://bifrost.deskera.com/v1/crm/deals/pipelines/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```


##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Pipeline ID | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 204 |  | |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

---

### Get Pipeline by Id

Get Pipeline by id.

##### Description:

- Allows you to retrieve pipeline details by it's id.

#### GET
#### /v1/crm/deals/pipelines/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/deals/pipelines/1
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/crm/deals/pipelines/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Pipeline ID | Yes | integer |

##### Sample Response
```java
{
  "id": 1,
  "name": "Test pipeline",
  "created_by": 6517,
  "created_at": "2020-05-22T13:09:57.2966+05:30",
  "updated_at": "2020-05-22T13:09:57.2966+05:30",
  "tenantId": 5148,
  "stages": [
    {
      "id": 1,
      "order": 1,
      "name": "level1",
      "deal_probability": 30,
      "rotting_days": 10,
      "created_at": "2020-05-22T13:09:57.297464+05:30",
      "updated_at": "2020-05-22T13:09:57.297464+05:30",
      "deals": [
        {
          "id": 2,
          "name": "New one",
          "stage": null,
          "contact_id": 245,
          "organization_id": 246,
          "mobile": "9876543212",
          "email": "a@a.com",
          "currency_code": "SGD",
          "amount": 12,
          "closing_date": "2020-05-02T13:44:19.607+05:30",
          "status": 2,
          "activity_id": 0,
          "owner_id": 6517,
          "is_deleted": false,
          "reason": "",
          "created_at": "2020-05-22T15:14:54.493316+05:30",
          "total_activities": 0,
          "next_activity_date": ""
        }
      ],
      "help_text": "Level1",
      "system_generated": false,
      "won_lost_status": "open"
    },
    {
      "id": 2,
      "order": 2,
      "name": "Won",
      "deal_probability": 30,
      "rotting_days": 10,
      "created_at": "2020-05-22T13:09:57.301669+05:30",
      "updated_at": "2020-05-22T13:09:57.301669+05:30",
      "deals": null,
      "help_text": "Won",
      "system_generated": true,
      "won_lost_status": "won"
    },
    {
      "id": 3,
      "order": 3,
      "name": "Lost",
      "deal_probability": 30,
      "rotting_days": 10,
      "created_at": "2020-05-22T13:09:57.302567+05:30",
      "updated_at": "2020-05-22T13:09:57.302567+05:30",
      "deals": null,
      "help_text": "Lost",
      "system_generated": true,
      "won_lost_status": "lost"
    }
  ]
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Pipeline](#pipeline) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

---

### Update Pipeline

Update Pipeline.

##### Description:

- Allows you to update existing pipeline details.

#### PUT
#### /v1/crm/deals/pipelines/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/deals/pipelines/2
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/crm/deals/pipelines/2" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"name\": \"Updated Test Pipeline\", \"stages\": [ { \"order\": 1, \"name\": \"l1\", \"deal_probability\": 30, \"rotting_days\": 10, \"help_text\":\"Level1\", \"system_generated\":false, \"won_lost_status\":\"open\" }, { \"order\": 2, \"name\": \"Won\", \"deal_probability\": 30, \"rotting_days\": 10, \"help_text\":\"Won\", \"system_generated\":true, \"won_lost_status\":\"won\" }, { \"order\": 3, \"name\": \"Lost\", \"deal_probability\": 30, \"rotting_days\": 10, \"help_text\":\"Lost\", \"system_generated\":true, \"won_lost_status\":\"lost\" } ]}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Pipeline ID | Yes | integer |
| pipeline | body | Update Pipeline | Yes | [Pipeline](#pipeline) |

##### Sample Request
```java
{
  "name": "Updated Test Pipeline",
  "stages": [
     {
      "order": 1,
      "name": "l1",
      "deal_probability": 30,
      "rotting_days": 10,
      "help_text":"Level1",
      "system_generated":false,
      "won_lost_status":"open"
    },
    {
      "order": 2,
      "name": "Won",
      "deal_probability": 30,
      "rotting_days": 10,
      "help_text":"Won",
      "system_generated":true,
      "won_lost_status":"won"
    },
    {
      "order": 3,
      "name": "Lost",
      "deal_probability": 30,
      "rotting_days": 10,
      "help_text":"Lost",
      "system_generated":true,
      "won_lost_status":"lost"
    }
  ]
}
```
##### Sample Response
```java
{
  "Success":true,
  "Id":2
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [CUDRecordResponse](#cudrecordresponse) |

---

### Delete Stage by Id

Delete Stage.

##### Description:

- Allows you to delete stage by it's id.

#### DELETE
#### /v1/crm/deals/pipelines/stages/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/pipelines/stages/1
```

##### Curl

```java
curl -X DELETE "https://bifrost.deskera.com/v1/crm/deals/pipelines/stages/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Stage ID | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 204 |  ||

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

---

## Models

---

### CUDRecordResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | integer |  | No |
| success | boolean |  | No |

### BulkOperations

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ids | [ integer ] |  | No |

### BulkUpdateDealReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ids | [ integer ] |  | No |
| owner_id | integer |  | No |
| pipeline_id | integer |  | No |
| reason | string |  | No |
| stage_id | integer |  | No |
| status | integer |  | No |
| tenantId | integer |  | No |

### Contact

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | string |  | No |
| country_code | string |  | No |
| created_by | integer |  | No |
| created_date | string |  | No |
| email | string |  | No |
| id | integer |  | No |
| label | [ContactLabel](#contactlabel) |  | No |
| label_id | integer |  | No |
| logo | string |  | No |
| name | string |  | No |
| note | string |  | No |
| organization_id | integer |  | No |
| owner_id | integer |  | No |
| phone | string |  | No |
| sub_owner_ids | string |  | No |
| tenant_id | integer |  | No |
| type | string | organization | person | No |
| updated_by | integer |  | No |
| updated_date | string |  | No |
| visibility_ids | string |  | No |
| visibility_type | string | private| public| team | No |

### ContactLabel

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| color | string |  | No |
| icon | string |  | No |
| id | integer |  | No |
| name | string |  | No |

### CustomField

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| label | string |  | No |
| module | string |  | No |
| shortName | string |  | No |
| value | string |  | No |

### DealRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| closing_date | string |  | No |
| contact | [Contact](#contact) |  | No |
| contact_id | integer |  | No |
| contact_name | string |  | No |
| currency_code | string |  | No |
| custom_field | [ [CustomField](#customField) ] |  | No |
| email | string |  | No |
| id | integer |  | No |
| mobile | string |  | No |
| name | string |  | No |
| organization | [Contact](#contact) |  | No |
| organization_id | integer |  | No |
| organization_name | string |  | No |
| owner | [UserAndTeams](#userandteams) |  | No |
| owner_id | integer |  | No |
| pipeline_id | integer |  | No |
| reason | string |  | No |
| stage_id | integer |  | No |
| status | integer |  | No |

### DealResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| activity_id | integer |  | No |
| amount | number |  | No |
| closing_date | string |  | No |
| contact_id | integer |  | No |
| contact_info | string |  | No |
| created_at | string |  | No |
| currency_code | string |  | No |
| custom_field | [ [CustomField](#customfield) ] |  | No |
| email | string |  | No |
| id | integer |  | No |
| is_deleted | boolean |  | No |
| mobile | string |  | No |
| name | string |  | No |
| next_activity_date | string |  | No |
| organization_id | integer |  | No |
| organization_info | string |  | No |
| owner_id | integer |  | No |
| owner_info | string |  | No |
| pipeline_id | integer |  | No |
| reason | string |  | No |
| stage | [StageDtoResponse](#stagedtoresponse) |  | No |
| stage_id | integer |  | No |
| status | integer |  | No |
| total_activities | integer |  | No |

### FilterConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | object |  | No |
| number_of_elements | integer |  | No |
| number_of_records | integer |  | No |
| page | integer |  | No |
| size_per_page | integer |  | No |
| total_pages | integer |  | No |

### Pipeline

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| created_at | string |  | No |
| created_by | integer |  | No |
| id | integer |  | No |
| name | string |  | No |
| stages | [ [StageDto](#stagedto) ] |  | No |
| tenantId | integer |  | No |
| updated_at | string |  | No |

### StageDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| created_at | string |  | No |
| deal_probability | integer |  | No |
| deals | [ [DealResponse](#dealresponse) ] |  | No |
| help_text | string |  | No |
| id | integer |  | No |
| name | string |  | No |
| order | integer |  | No |
| rotting_days | integer |  | No |
| system_generated | boolean |  | No |
| updated_at | string |  | No |
| won_lost_status | string |  | No |

### StageDtoResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| deal_probability | integer |  | No |
| help_text | string |  | No |
| name | string |  | No |
| order | integer |  | No |
| pipeline_id | integer |  | No |
| rotting_days | integer |  | No |
| system_generated | boolean |  | No |
| won_lost_status | string |  | No |

### UserAndTeams

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| user | string |  | No |

### Deal

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| c_field | string |  | No |
| closing_date | string |  | No |
| contact_id | integer |  | No |
| created_at | string |  | No |
| created_by | integer |  | No |
| currency_code | string |  | No |
| custom_field | string |  | No |
| email | string |  | No |
| id | integer |  | No |
| is_deleted | boolean |  | No |
| mobile | string |  | No |
| name | string |  | No |
| organization_id | integer |  | No |
| owner_id | integer |  | No |
| pipeline_id | integer |  | No |
| reason | string |  | No |
| stage | [StageModel](#stagemodel) |  | No |
| stage_id | integer |  | No |
| status | integer |  | No |
| tenant_id | integer |  | No |
| updated_at | string |  | No |
| updated_by | integer |  | No |

### StageModel

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| created_by | integer |  | No |
| created_dt | string |  | No |
| deal_probability | integer |  | No |
| deals | [ [Deal](#deal) ] |  | No |
| help_text | string |  | No |
| id | integer |  | No |
| is_deleted | boolean |  | No |
| name | string |  | No |
| order | integer |  | No |
| pipeline_id | integer |  | No |
| rotting_days | integer |  | No |
| system_generated | boolean |  | No |
| tenantId | integer |  | No |
| updated_by | integer |  | No |
| updated_dt | string |  | No |
| won_lost_status | string |  | No |