---
id: activitiesapi
title: Activity APIs
sidebar_label: Activity
---

## API
---

### Get activities

Show all activities

##### Description:

Get all activities

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
| query | query | name="Test Contact",contact_id=2,deal_id=3,date=2019-04-11,activtyType="call",is_status=true | No | string |

##### Sample Response
```java
{
  "data": [
    {
      "id": 107,
      "name": "qa call",
      "date": 1591920000,
      "time": "09:00 AM",
      "activity_type": "call",
      "duration": 3,
      "notes": "",
      "visibility_type": "team",
      "is_availability": null,
      "is_send_invitation": true,
      "assigned_to": "",
      "assigned": [

      ],
      "attendee": [

      ],
      "owner_id": 17826,
      "tenant_id": 23312,
      "is_status": false,
      "created_at": "2020-06-12T06:46:56.380851Z",
      "updated_at": "2020-06-12T06:46:56.380851Z",
      "created_by": 17826,
      "updated_by": 17826,
      "is_deleted": false,
      "EmailSent": "NEW",
      "consumer_id": "",
      "scheduled_status": "",
      "batch_id": "",
      "cron_status": ""
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
| 200 | OK | [ActivityResponse](#Activityresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Create activity

Create activity

##### Description:

Add new activity

#### POST
#### /v1/crm/activities

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/activities
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/crm/activities" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ name: \"Test Act\" activity_type: \"call\" date: 1592451000 time: \"09:00 AM\" duration: 1 assigned: null attendee: [{attendee_type: \"deal\"}] availability: null notes: \"\" is_send_invitation: true tenant_id: 23312 is_status: null}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activity | body | Create activity | Yes | [ActivityReq](#ActivityReq) |

##### Sample Request
```java
{
  name: "Test Act"
  activity_type: "call"
  date: 1592451000
  time: "09:00 AM"
  duration: 1
  assigned: null
  attendee: [{attendee_type: "deal"}]
  availability: null
  notes: ""
  is_send_invitation: true
  tenant_id: 23312
  is_status: null
}
```
##### Sample Response
```java
{
  "id":246
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

### Get activity by Id
Get activity by Id
##### Description:

Get activity by Id

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
      "id": 1,
      "name": "qa call",
      "date": 1591920000,
      "time": "09:00 AM",
      "activity_type": "call",
      "duration": 3,
      "notes": "",
      "visibility_type": "team",
      "is_availability": null,
      "is_send_invitation": true,
      "assigned_to": "",
      "assigned": [

      ],
      "attendee": [

      ],
      "owner_id": 17826,
      "tenant_id": 23312,
      "is_status": false,
      "created_at": "2020-06-12T06:46:56.380851Z",
      "updated_at": "2020-06-12T06:46:56.380851Z",
      "created_by": 17826,
      "updated_by": 17826,
      "is_deleted": false,
      "EmailSent": "NEW",
      "consumer_id": "",
      "scheduled_status": "",
      "batch_id": "",
      "cron_status": ""
    }
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Activity](#Activity) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Update activity by id

Update Activity

##### Description:

Update Activity

#### PUT
#### /v1/crm/activities/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/activities/1
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/crm/activities/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ name: \"Test Act\" activity_type: \"call\" date: 1592451000 time: \"09:00 AM\" duration: 1 assigned: null attendee: [{attendee_type: \"deal\"}] availability: null notes: \"\" is_send_invitation: true tenant_id: 23312 id: 246 is_status: false}"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Activity ID | Yes | integer |
| Activity | body | Update Activity | Yes | [ActivityReq](#ActivityReq) |

##### Sample Request
```java
{
  name: "Test Act"
  activity_type: "call"
  date: 1592451000
  time: "09:00 AM"
  duration: 1
  assigned: null
  attendee: [{attendee_type: "deal"}]
  availability: null
  notes: ""
  is_send_invitation: true
  tenant_id: 23312
  id: 246
  is_status: false
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

### Delete activity by id

Delete Activity

##### Description:

Delete Activity

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

| Code | Description |
| ---- | ----------- |
| 204 | OK |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Bulk Update

Update multiple activity

##### Description:

Update multiple activity

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
| activity | body | Update multiple activity | Yes | [MultiActivityUpdate](#MultiActivityUpdate) |

##### Sample Request
```java
{
  "ids": [246, 107],
  "visibility_type: "private"
}
```
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Bulk Delete

Delete multiple activity

##### Description:

Delete multiple activity

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

| Code | Description |
| ---- | ----------- |
| 204 | OK |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

## Models
---

### ActivityResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ActivityAssigned](#ActivityAssigned) |  | No |
| paginationInfo | object |  | No |

### Activity

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | integer |  | No |
| name | string |  | No |
| date | string |  | No |
| time | string |  | No |
| duration | integer |  | No |
| notes | string |  | No |
| is_availability | boolean |  | No |
| is_send_invitation | boolean |  | No |
| activity_type | string | call | meeting | task | deadline | email | lunch | No |
| visibility_type | string | private | public | team | No |
| assigned | [ActivityAssigned](#ActivityAssigned) |  | No |
| attendee | [ActivityAttendee](#ActivityAttendee) |  | No |
| assigned_to | string |  | No |
| owner_id | integer |  | No |
| tenant_id | integer |  | No |
| is_status | boolean |  | No |
| created_at | string |  | No |
| updated_at | string |  | No |
| created_by | integer |  | No |
| updated_by | integer |  | No |
| is_deleted | boolean |  | No |

### ActivityAttendee

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | integer |  | No |
| activity_id | integer |  | No |
| attendee_type | string | person| deal | orgnization | No |
| attendee_id | integer |  | No |
| attendee_name | string |  | No |
| attendee_email | string |  | No |
| attendee_contact | string |  | No |
| attendee_profile_image | string |  | No |
| owner_id | integer |  | No |
| tenant_id | integer |  | No |
| is_status | boolean |  | No |
| created_at | string |  | No |
| updated_at | string |  | No |
| created_by | integer |  | No |
| updated_by | integer |  | No |
| is_deleted | boolean |  | No |

### ActivityAssigned

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | integer |  | No |
| activity_id | integer |  | No |
| assigned_type | string | user | team | No |
| assigned_id | integer |  | No |
| assigned_name | string |  | No |
| assigned_email | string |  | No |
| assigned_contact | string |  | No |
| assigned_profile_image | string |  | No |
| owner_id | integer |  | No |
| tenant_id | integer |  | No |
| is_status | boolean |  | No |
| created_at | string |  | No |
| updated_at | string |  | No |
| created_by | integer |  | No |
| updated_by | integer |  | No |
| is_deleted | boolean |  | No |

### ActivityReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | integer |  | No |
| name | string |  | No |
| date | string |  | No |
| time | string |  | No |
| duration | integer |  | No |
| notes | string |  | No |
| is_availability | boolean |  | No |
| is_send_invitation | boolean |  | No |
| activity_type | string | call | meeting | task | deadline | email | lunch | No |
| assigned | [ [ActivityAssignedReq](#ActivityAssignedReq) ] |  | No |
| attendee | [ [ActivityAttendeeReq](#ActivityAttendeeReq) ] |  | No |
| assigned_to | string |  | No |

### ActivityAttendeeReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | integer |  | No |
| activity_id | integer |  | No |
| attendee_type | string | person| deal | orgnization | No |
| attendee_id | integer |  | No |

### ActivityAssignedReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | integer |  | No |
| activity_id | integer |  | No |
| assigned_type | string | user | team | No |
| assigned_id | integer |  | No |

### MultiActivityUpdate

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ids | [ integer ] |  | No |
| visibility_type | string |  | No |
| is_status | boolean |  | No |