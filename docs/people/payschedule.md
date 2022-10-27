---
id: payschedule
title: Payschedule
sidebar_label: Payschedule
---
Payschedule apis allow admins to manage (create/update/list/delete) payschedules for running payruns

## API
---

### Add payschedule

#### POST
##### Summary

Add Payschedule

##### Description

Add payschedule

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payschedule | body | Payschedule Request Body | Yes | [dto.Schedule](#dtoschedule) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.Schedule](#dtoschedule) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-schedule/pay-schedule
```

##### Curl

```java
curl --location --request POST 'https://bifrost-us.deskera.com/v1/people-pay-schedule/pay-schedule' \
--header 'Accept: application/json, text/plain, */*' \
--header 'Content-Type: application/json' \
--header 'x-access-token: sampletoken' \
--data-raw '{"employees":["63525be29f4afb9427b6f509","6310886bc741a206031c257c"],"firstPayDate":"2022-10-31T23:59:59+08:00","isForAllUsers":false,"name":"oct-payschedule","payDay":"lastWorkingDayMonth","payPeriod":"monthly","workPeriod":{"from":"01/10/2022","to":"31/10/2022"},"workWeek":[5,1,2,3,4],"location":0,"customFields":[{"fieldId":"6323d1eeaabe99169d328446","fieldName":"C1","fieldValue":["c1"]}]}'
```


##### Sample Response
```java
{
    "id": "635a44f89baf6fc88bb19d3e",
    "name": "nov-payschedule",
    "payPeriod": "monthly",
    "workWeek": [
        5,
        1,
        2,
        3,
        4
    ],
    "payDay": "lastWorkingDayMonth",
    "firstPayDay": "",
    "secondPayDay": "",
    "firstPayDate": "2022-10-31T23:59:59+08:00",
    "workPeriod": {
        "from": "01/10/2022",
        "to": "31/10/2022"
    },
    "isForAllUsers": false,
    "employees": [
        "63525be29f4afb9427b6f509",
        "6310886bc741a206031c257c"
    ],
    "location": 0,
    "customFields": [
        {
            "fieldId": "6323d1eeaabe99169d328446",
            "fieldName": "C1",
            "fieldValue": [
                "c1"
            ]
        }
    ]
}
```



### /pay-schedule/{id}

#### GET
##### Summary

Get Payschedule By ID

##### Description

Get payschedule by ID

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Payschedule Id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.Schedule](#dtoschedule) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

#### Update Payschedule
##### Summary

Update Payschedule By Id

##### Description

Update Payschedule By Id for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Payschedule Id | Yes | string |
| payschedule | body | Payschedule Request Body | Yes | [dto.Schedule](#dtoschedule) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.Schedule](#dtoschedule) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-schedule/pay-schedule/635a44f89baf6fc88bb19d3e
```

##### Curl

```java
curl --location --request PUT 'https://bifrost-us.deskera.com/v1/people-pay-schedule/pay-schedule/635a44f89baf6fc88bb19d3e' \
--header 'Accept: application/json, text/plain, */*' \
--header 'Content-Type: application/json' \
--header 'x-access-token: sampletoken' \
--data-raw '{
    "employees": [
        "63525be29f4afb9427b6f509",
        "6310886bc741a206031c257c"
    ],
    "firstPayDate": "2022-10-31T23:59:59+08:00",
    "isForAllUsers": false,
    "name": "nov-payschedule",
    "payDay": "lastWorkingDayMonth",
    "payPeriod": "monthly",
    "workPeriod": {
        "from": "01/10/2022",
        "to": "31/10/2022"
    },
    "workWeek": [
        5,
        1,
        2,
        3,
        4
    ],
    "location": 0,
    "customFields": [
        {
            "fieldId": "6323d1eeaabe99169d328446",
            "fieldName": "C1",
            "fieldValue": [
                "c1"
            ]
        }
    ],
    "_id": "635a44f89baf6fc88bb19d3e"
}'
```

##### Sample Request
```java
{
    "employees": [
        "63525be29f4afb9427b6f509",
        "6310886bc741a206031c257c"
    ],
    "firstPayDate": "2022-10-31T23:59:59+08:00",
    "isForAllUsers": false,
    "name": "nov-payschedule",
    "payDay": "lastWorkingDayMonth",
    "payPeriod": "monthly",
    "workPeriod": {
        "from": "01/10/2022",
        "to": "31/10/2022"
    },
    "workWeek": [
        5,
        1,
        2,
        3,
        4
    ],
    "location": 0,
    "customFields": [
        {
            "fieldId": "6323d1eeaabe99169d328446",
            "fieldName": "C1",
            "fieldValue": [
                "c1"
            ]
        }
    ],
    "_id": "635a44f89baf6fc88bb19d3e"
}
```

##### Sample Response
```java
{
    "id": "635a44f89baf6fc88bb19d3e",
    "name": "nov-payschedule",
    "payPeriod": "monthly",
    "workWeek": [
        5,
        1,
        2,
        3,
        4
    ],
    "payDay": "lastWorkingDayMonth",
    "firstPayDay": "",
    "secondPayDay": "",
    "firstPayDate": "2022-10-31T23:59:59+08:00",
    "workPeriod": {
        "from": "01/10/2022",
        "to": "31/10/2022"
    },
    "isForAllUsers": false,
    "employees": [
        "63525be29f4afb9427b6f509",
        "6310886bc741a206031c257c"
    ],
    "location": 0,
    "customFields": [
        {
            "fieldId": "6323d1eeaabe99169d328446",
            "fieldName": "C1",
            "fieldValue": [
                "c1"
            ]
        }
    ]
}
```

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

#### DELETE Payschedule
##### Summary

Delete Payschedule By Id

##### Description

Delete Payschedule By Id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Payschedule Id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.Schedule](#dtoschedule) |



##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-schedule/pay-schedules/bulk
```

##### Curl

```java
curl 'https://bifrost-us.deskera.com/v1/people-pay-schedule/pay-schedules/bulk' \
  -X 'DELETE' \
--header 'Accept: application/json, text/plain, */*' \
--header 'Content-Type: application/json' \
--header 'x-access-token: sampletoken' \
  --data-raw '[{"scheduleId":"635a44f89baf6fc88bb19d3e"}]' \
  --compressed
```

##### Sample Request
```java
[{"scheduleId":"635a44f89baf6fc88bb19d3e"}]
```

##### Sample Response
```java
{
    "id": "000000000000000000000000",
    "name": "",
    "payPeriod": "",
    "workWeek": null,
    "payDay": "",
    "firstPayDay": "",
    "secondPayDay": "",
    "firstPayDate": "",
    "workPeriod": {
        "from": "",
        "to": ""
    },
    "isForAllUsers": false,
    "employees": null,
    "location": 0,
    "customFields": null
}
```

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Bulk delete Payschedule

#### DELETE 
##### Summary

Bulk Delete Payschedules By Ids

##### Description

Bulk Delete Payschedules By Ids for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| ids | body | Payschedule Ids | Yes | [ [dto.BulkScheduleRequest](#dtobulkschedulerequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.Schedule](#dtoschedule) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Get all Payschedules

#### GET
##### Summary

Get Payschedules

##### Description

Get all payschedules of a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| order | query | Order | No | string |
| field | query | Field | No | string |
| limit | query | Limit per Page | No | integer |
| currentPage | query | Current Page number | No | integer |
| searchString | query | Search String | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.SchedulesResponse](#dtoschedulesresponse) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-schedule/pay-schedules/tenant?limit=20&currentPage=1&order=desc&field=_id
```

##### Curl

```java
curl --location --request GET 'https://bifrost-us.deskera.com/v1/people-pay-schedule/pay-schedules/tenant?limit=20&currentPage=1&order=desc&field=_id' \
--header 'Accept: application/json, text/plain, */*' \
--header 'x-access-token: sampletoken' \
```


##### Sample Response
```java
{
    "schedules": [
        {
            "id": "6359f7029baf6fc88bb19d39",
            "name": "oct-payschedule",
            "payPeriod": "monthly",
            "workWeek": [
                5,
                1,
                2,
                3,
                4
            ],
            "payDay": "lastWorkingDayMonth",
            "firstPayDay": "",
            "secondPayDay": "",
            "firstPayDate": "2022-10-31T23:59:59+08:00",
            "workPeriod": {
                "from": "01/10/2022",
                "to": "31/10/2022"
            },
            "isForAllUsers": false,
            "employees": [
                "63525be29f4afb9427b6f509",
                "6310886bc741a206031c257c"
            ],
            "location": 0,
            "customFields": [
                {
                    "fieldId": "6323d1eeaabe99169d328446",
                    "fieldName": "C1",
                    "fieldValue": [
                        "c1"
                    ]
                }
            ]
        },
        {
            "id": "62611056bac41ace51e7dcb8",
            "name": "monthly",
            "payPeriod": "monthly",
            "workWeek": [
                5,
                1,
                2,
                3,
                4
            ],
            "payDay": "lastWorkingDayMonth",
            "firstPayDay": "",
            "secondPayDay": "",
            "firstPayDate": "2022-04-30T23:59:59+08:00",
            "workPeriod": {
                "from": "01/04/2022",
                "to": "30/04/2022"
            },
            "isForAllUsers": false,
            "employees": [
                "623c2dc0e3a652c5aee32876"
            ],
            "location": 0,
            "customFields": null
        }
    ],
    "filterResponse": {
        "currentPage": 1,
        "count": 2,
        "limit": 20,
        "totalPages": 1,
        "totalCount": 2
    }
}
```
##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Models

#### dto.BulkScheduleRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| scheduleId | string |  | No |

#### dto.CustomFieldsData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fieldId | string |  | No |
| fieldName | string |  | No |
| fieldValue | [ string ] |  | No |

#### dto.FilterResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| count | integer |  | No |
| currentPage | integer |  | No |
| limit | integer |  | No |
| totalCount | integer |  | No |
| totalPages | integer |  | No |

#### dto.Schedule

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| customFields | [ [dto.CustomFieldsData](#dtocustomfieldsdata) ] |  | No |
| employees | [ string ] |  | No |
| firstPayDate | string |  | No |
| firstPayDay | string |  | No |
| id | string |  | No |
| isForAllUsers | boolean |  | No |
| location | string |  | No |
| name | string |  | No |
| payDay | string |  | No |
| payPeriod | string |  | No |
| secondPayDay | string |  | No |
| workPeriod | [dto.WorkPeriod](#dtoworkperiod) |  | No |
| workWeek | [ integer ] |  | No |

#### dto.SchedulesResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filterResponse | [dto.FilterResponse](#dtofilterresponse) |  | No |
| schedules | [ [dto.Schedule](#dtoschedule) ] |  | No |

#### dto.WorkPeriod

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| from | string |  | No |
| to | string |  | No |
