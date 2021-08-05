---
id: activitiesapi
title: Activity APIs
sidebar_label: Activity
---

You will be able to manage your activities details with this APIs, such as create, retrieve, update and delete.

## API
---

### Get Activities

Show all activities.

##### Description:

- Allows you to retrieve a list of all activities.

#### GET
#### /v1/crm/activities

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/activities?page=1&pageSize=10&sortBy=updated_at&sortDir=DESC
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/crm/activities?page=1&pageSize=10&sortBy=updated_at&sortDir=DESC" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query |  | No | integer |
| pageSize | query |  | No | integer |
| sortBy | query |  | No | string |
| sortDir | query |  | No | string |
| query | query | query=name=act,contact_id=179642,organization_id=196518,deal_id=1227,assignee_id=46944,date>1628121600,activityType=call,is_status=true,source=WEB,source_id=1 | No | string |

##### Sample Response
```java
{
  "data": [
    {
      "id": 1,
      "name": "Act 3",
      "activity_type": "call",
      "duration": "1h 21m",
      "notes": "Test Note<br>",
      "visibility_type": "team",
      "is_availability": null,
      "is_send_invitation": true,
      "is_send_contacts_invitation": true,
      "assigned_to": "",
      "assignee_ids": [
        46944
      ],
      "assignee_details": [
        {
          "id": 46944,
          "first_name": "C1",
          "last_name": "C1",
          "email": "crm-test@getnada.com",
          "country_code": "",
          "contact": "",
          "profile_url": ""
        }
      ],
      "contact_ids": [
        179642,
        179640
      ],
      "contact_details": [
        {
          "id": 179642,
          "name": "T1 temp contact person",
          "email": "",
          "phone": "",
          "country_code": "+232",
          "address": "",
          "type": "person",
          "organization_id": 0,
          "label_id": 0,
          "label": {
            "name": "No label"
          },
          "logo": ""
        },
        {
          "id": 179640,
          "name": "T0 temp contact person",
          "email": "",
          "phone": "",
          "country_code": "+232",
          "address": "",
          "type": "person",
          "organization_id": 0,
          "label_id": 0,
          "label": {
            "name": "No label"
          },
          "logo": ""
        }
      ],
      "organization_ids": [
        196518,
        196517
      ],
      "organization_details": [
        {
          "id": 196518,
          "name": "A2",
          "email": "",
          "phone": "",
          "country_code": "",
          "address": "India ",
          "type": "organization",
          "organization_id": 0,
          "label_id": 0,
          "label": {
            "name": "No label"
          },
          "logo": ""
        },
        {
          "id": 196517,
          "name": "A1",
          "email": "",
          "phone": "",
          "country_code": "",
          "address": "India ",
          "type": "organization",
          "organization_id": 0,
          "label_id": 0,
          "label": {
            "name": "No label"
          },
          "logo": ""
        }
      ],
      "linked_to": 1227,
      "deal_details": {
        "id": 1227,
        "name": "AA",
        "pipeline_id": 13774,
        "stage_id": 95977,
        "stage": {
          "pipeline_id": 0,
          "order": 1,
          "name": "Appointment Scheduled",
          "deal_probability": 20,
          "rotting_days": 30,
          "help_text": "Appointment Scheduled",
          "system_generated": false,
          "won_lost_status": "open"
        },
        "contact_id": 146987,
        "organization_id": 0,
        "mobile": "+1(239) 595-0413",
        "email": "ct-1@getnada.com",
        "currency_code": "USD",
        "amount": "0",
        "closing_date": "2021-04-22T00:00:00Z",
        "status": 0,
        "activity_id": 0,
        "order": 0,
        "stage_name": "",
        "deal_probability": 0,
        "rotting_days": 0,
        "owner_id": 46944,
        "is_deleted": false,
        "contact_info": {
          "id": 146987,
          "name": "CT-1",
          "email": "ct-1@getnada.com",
          "phone": "+1(239) 595-0413",
          "country_code": "",
          "address": "",
          "type": "person",
          "organization_id": 0,
          "label_id": 0,
          "label": {
            "name": "No label"
          },
          "logo": ""
        },
        "organization_info": {
          "id": 0,
          "name": "",
          "email": "",
          "phone": "",
          "country_code": "",
          "address": "",
          "type": "",
          "organization_id": 0,
          "label_id": 0,
          "label": {},
          "logo": ""
        },
        "owner_info": {
          "id": 46944,
          "first_name": "C1",
          "last_name": "C1",
          "email": "crm-test@getnada.com",
          "country_code": "",
          "contact": "",
          "profile_url": ""
        },
        "reason": "",
        "custom_field": [
          {
            "code": "D-0000008",
            "label": "CF01",
            "value": "",
            "module": "",
            "shortName": "CF01"
          }
        ],
        "created_at": "2021-04-22T05:16:05.857311Z"
      },
      "owner_id": 46944,
      "owner_details": {
        "id": 46944,
        "first_name": "C1",
        "last_name": "C1",
        "email": "crm-test@getnada.com",
        "country_code": "",
        "contact": "",
        "profile_url": ""
      },
      "tenant_id": 64797,
      "is_status": true,
      "created_at": "2021-08-05T17:20:58.875416+05:30",
      "updated_at": "2021-08-05T17:20:58.875416+05:30",
      "created_by": 46944,
      "updated_by": 46944,
      "is_deleted": false,
      "EmailSent": "NEW",
      "consumer_id": "",
      "scheduled_status": "",
      "batch_id": "",
      "cron_status": "NEW",
      "notification_error": "",
      "source": "WEB",
      "source_id": "1",
      "user_timezone": "Asia/Singapore",
      "start": "2021-08-05T12:37:03+05:30",
      "end": "2021-08-05T13:58:03+05:30"
    }
  ],
  "paginationInfo": {
    "page": 1,
    "totalRecords": 3,
    "isZeroState": false
  }
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ActivityResponse](#activityresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

---

### Create Activity

Create activity.

##### Description:

- Allows you to add new activity.

#### POST
#### /v1/crm/activities

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/activities
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/crm/activities" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{\"name\":\"Act-001\",\"activity_type\":\"call\",\"start\":\"2021-08-05T13:15:49Z\",\"end\":\"2021-08-05T14:15:49Z\",\"notes\":\"VGVzdCBOb3RlPGJyPg==\",\"is_send_invitation\":true,\"is_send_contacts_invitation\":true,\"user_timezone\":\"Asia/Singapore\",\"contact_ids\":[179642,179640],\"organization_ids\":[196517,196518],\"assignee_ids\":[46944],\"linked_to\":1227,\"is_status\":false}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activity | body | Create activity | Yes | [Activity](#activity) |

##### Sample Request
```java
{
  "name": "Act-001",
  "activity_type": "call",
  "start": "2021-08-05T13:15:49Z",
  "end": "2021-08-05T14:15:49Z",
  "notes": "VGVzdCBOb3RlPGJyPg==",
  "is_send_invitation": true,
  "is_send_contacts_invitation": true,
  "user_timezone": "Asia/Singapore",
  "contact_ids": [
    179642,
    179640
  ],
  "organization_ids": [
    196517,
    196518
  ],
  "assignee_ids": [
    46944
  ],
  "linked_to": 1227,
  "is_status": false
}
```
##### Sample Response
```java
{
  "id":1
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 201 | OK | object |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

---

### Get Activity by Id
Get Activity by Id.

##### Description:

- Allows you to retrieve activity detail by it's id.

#### GET
#### /v1/crm/activities/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/activities/1
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/crm/activities/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Activity ID | Yes | integer |

##### Sample Response
```java
{
  "id": 81,
  "name": "Act 3",
  "activity_type": "call",
  "duration": "1h 21m",
  "notes": "Test Note<br>",
  "visibility_type": "team",
  "is_availability": null,
  "is_send_invitation": true,
  "is_send_contacts_invitation": true,
  "assigned_to": "",
  "assignee_ids": [
    46944
  ],
  "assignee_details": [
    {
      "id": 46944,
      "first_name": "C1",
      "last_name": "C1",
      "email": "crm-test@getnada.com",
      "country_code": "",
      "contact": "",
      "profile_url": ""
    }
  ],
  "contact_ids": [
    179642,
    179640
  ],
  "contact_details": [
    {
      "id": 179642,
      "name": "T1 temp contact person",
      "email": "",
      "phone": "",
      "country_code": "+232",
      "address": "",
      "type": "person",
      "organization_id": 0,
      "label_id": 0,
      "label": {
        "name": "No label"
      },
      "logo": ""
    },
    {
      "id": 179640,
      "name": "T0 temp contact person",
      "email": "",
      "phone": "",
      "country_code": "+232",
      "address": "",
      "type": "person",
      "organization_id": 0,
      "label_id": 0,
      "label": {
        "name": "No label"
      },
      "logo": ""
    }
  ],
  "organization_ids": [
    196518,
    196517
  ],
  "organization_details": [
    {
      "id": 196518,
      "name": "A2",
      "email": "",
      "phone": "",
      "country_code": "",
      "address": "India ",
      "type": "organization",
      "organization_id": 0,
      "label_id": 0,
      "label": {
        "name": "No label"
      },
      "logo": ""
    },
    {
      "id": 196517,
      "name": "A1",
      "email": "",
      "phone": "",
      "country_code": "",
      "address": "India ",
      "type": "organization",
      "organization_id": 0,
      "label_id": 0,
      "label": {
        "name": "No label"
      },
      "logo": ""
    }
  ],
  "linked_to": 1227,
  "deal_details": {
    "id": 1227,
    "name": "AA",
    "pipeline_id": 13774,
    "stage_id": 95977,
    "stage": {
      "pipeline_id": 0,
      "order": 1,
      "name": "Appointment Scheduled",
      "deal_probability": 20,
      "rotting_days": 30,
      "help_text": "Appointment Scheduled",
      "system_generated": false,
      "won_lost_status": "open"
    },
    "contact_id": 146987,
    "organization_id": 0,
    "mobile": "+1(239) 595-0413",
    "email": "ct-1@getnada.com",
    "currency_code": "USD",
    "amount": "0",
    "closing_date": "2021-04-22T00:00:00Z",
    "status": 0,
    "activity_id": 0,
    "order": 0,
    "stage_name": "",
    "deal_probability": 0,
    "rotting_days": 0,
    "owner_id": 46944,
    "is_deleted": false,
    "contact_info": {
      "id": 146987,
      "name": "CT-1",
      "email": "ct-1@getnada.com",
      "phone": "+1(239) 595-0413",
      "country_code": "",
      "address": "",
      "type": "person",
      "organization_id": 0,
      "label_id": 0,
      "label": {
        "name": "No label"
      },
      "logo": ""
    },
    "organization_info": {
      "id": 0,
      "name": "",
      "email": "",
      "phone": "",
      "country_code": "",
      "address": "",
      "type": "",
      "organization_id": 0,
      "label_id": 0,
      "label": {},
      "logo": ""
    },
    "owner_info": {
      "id": 46944,
      "first_name": "C1",
      "last_name": "C1",
      "email": "crm-test@getnada.com",
      "country_code": "",
      "contact": "",
      "profile_url": ""
    },
    "reason": "",
    "custom_field": [
      {
        "code": "D-0000008",
        "label": "CF01",
        "value": "",
        "module": "",
        "shortName": "CF01"
      }
    ],
    "created_at": "2021-04-22T05:16:05.857311Z"
  },
  "owner_id": 46944,
  "owner_details": {
    "id": 46944,
    "first_name": "C1",
    "last_name": "C1",
    "email": "crm-test@getnada.com",
    "country_code": "",
    "contact": "",
    "profile_url": ""
  },
  "tenant_id": 64797,
  "is_status": true,
  "created_at": "2021-08-05T17:20:58.875416+05:30",
  "updated_at": "2021-08-05T17:20:58.875416+05:30",
  "created_by": 46944,
  "updated_by": 46944,
  "is_deleted": false,
  "EmailSent": "NEW",
  "consumer_id": "",
  "scheduled_status": "",
  "batch_id": "",
  "cron_status": "NEW",
  "notification_error": "",
  "source": "WEB",
  "source_id": "1",
  "user_timezone": "Asia/Singapore",
  "start": "2021-08-05T12:37:03+05:30",
  "end": "2021-08-05T13:58:03+05:30"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Activity](#activity) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

---

### Update Activity by Id

Update Activity.

##### Description:

- Allows you to update an existing activity record.

#### PUT
#### /v1/crm/activities/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/activities/1
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/crm/activities/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{\"name\":\"Act-001\",\"activity_type\":\"call\",\"start\":\"2021-08-05T13:15:49Z\",\"end\":\"2021-08-05T14:15:49Z\",\"assigned\":[],\"attendee\":[],\"availability\":null,\"notes\":\"VGVzdCBOb3RlPGJyPg==\",\"is_send_invitation\":true,\"is_send_contacts_invitation\":true,\"user_timezone\":\"Asia/Singapore\",\"contact_ids\":[179642,179640],\"organization_ids\":[196517,196518],\"assignee_ids\":[46944],\"linked_to\":1227,\"is_status\":false}"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Activity ID | Yes | integer |
| Activity | body | Update Activity | Yes | [Activity](#activity) |

##### Sample Request
```java
{
  "name": "Act-001",
  "activity_type": "call",
  "start": "2021-08-05T13:15:49Z",
  "end": "2021-08-05T14:15:49Z",
  "notes": "VGVzdCBOb3RlPGJyPg==",
  "is_send_invitation": true,
  "is_send_contacts_invitation": true,
  "user_timezone": "Asia/Singapore",
  "contact_ids": [
    179642,
    179640
  ],
  "organization_ids": [
    196517,
    196518
  ],
  "assignee_ids": [
    46944
  ],
  "linked_to": 1227,
  "is_status": false
}
```

##### Sample Response
```java
{
  "id":1
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | object |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

---

### Delete Activity by Id

Delete Activity.

##### Description:

- Allows you to delete a specific activity.

#### DELETE
#### /v1/crm/activities/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/activities/1
```

##### Curl

```java
curl -X DELETE "https://bifrost.deskera.com/v1/crm/activities/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Activity ID | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 204 | OK | |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

---

### Bulk Update

Update multiple activity.

##### Description:

- Allows you to update multiple activity.

#### PATCH
#### /v1/crm/activities/bulkUpdate

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/activities/bulkUpdate
```

##### Curl

```java
curl -X PATCH "https://bifrost.deskera.com/v1/crm/activities/bulkUpdate" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"ids\": [246, 107],\"visibility_type\": \"private\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activity | body | Update multiple activity | Yes | [MultiActivityUpdate](#multiactivityupdate) |

##### Sample Request
```java
{
  "ids": [246, 107],
  "visibility_type: "private"
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK ||

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

---

### Bulk Delete

Delete multiple activity.

##### Description:

- Allows you to delete large amount of activity record.

#### POST
#### /v1/crm/activities/bulkDelete

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/activities/bulkDelete
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/crm/activities/bulkDelete" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "[ 1,2]"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activity | body | Delete multiple activity | Yes | [ integer ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 204 | OK | |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

## Models
---

### ActivityResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [Activity](#activity) |  | No |
| paginationInfo | object |  | No |

### Activity

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | integer |  | No |
| name | string |  | No |
| activity_type | string | call | meeting | task | deadline | email | lunch | No |
| duration | integer |  | No |
| notes | string | In base64 format | No |
| visibility_type | string | private | public | team | No |
| is_availability | boolean |  | No |
| is_send_invitation | boolean |  | No |
| is_send_contacts_invitation | boolean |  | No |
| assigned_to | string |  | No |
| assignee_ids | [integer] |  | No |
| assignee_details | [UserShortInfo] |  | No |
| contact_ids | [integer] |  | No |
| contact_details | [ContactShortInfo] |  | No |
| organization_ids | [integer] |  | No |
| organization_details | [ContactShortInfo] |  | No |
| linked_to | integer |  | No |
| deal_details | UserShortInfo |  | No |
| owner_id | integer |  | No |
| owner_details | UserShortInfo |  | No |
| tenant_id | integer |  | No |
| is_status | boolean |  | No |
| created_at | string |  | No |
| updated_at | string |  | No |
| created_by | integer |  | No |
| updated_by | integer |  | No |
| is_deleted | boolean |  | No |
| email_sent | string |  | No |
| consumer_id | string |  | No |
| scheduled_status | string |  | No |
| batch_id | string |  | No |
| cron_status | string |  | No |
| notification_error | string |  | No |
| source | string |  | No |
| source_id | string |  | No |
| user_timezone | string | e.g. Asia/Singapore | No |
| start | string | In UTC | No |
| end | string | In UTC | No |

### MultiActivityUpdate

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ids | [ integer ] |  | No |
| visibility_type | string |  | No |
| is_status | boolean |  | No |