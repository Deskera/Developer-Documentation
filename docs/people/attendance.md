---
id: attendance
title: Attendance
sidebar_label: Attendance
---

### Security
**Authorization**  

|apiKey|*API Key*|
|---|---|
|Name|x-access-token|
|In|header|

### /v1/people/attendance

#### GET
##### Summary

Search attendance details.

##### Description

API to search attendance details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| filter | query | filter | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| searchField | query | searchField | No | string |
| searchString | query | searchString | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Attendance details have been fetched successfully. | [AttendanceDetailDTO](#attendancedetaildto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Save attendance punching data

##### Description

API to save attendance punching details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| punchDTO | body | punchDTO | Yes | [PunchDTO](#punchdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PunchDTO](#punchdto) |
| 201 | Attendance punching data has been posted successfully | [PunchDTO](#punchdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/attendance/proxy

#### POST
##### Summary

Save proxy attendance punching data

##### Description

API to save proxy attendance punching details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| punchDTO | body | punchDTO | Yes | [PunchDTO](#punchdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PunchDTO](#punchdto) |
| 201 | Proxy attendance punching data has been posted successfully | [PunchDTO](#punchdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/attendance/self

#### GET
##### Summary

Get logged-in user attendance details.

##### Description

API to get logged-in user attendance details.

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
| 200 | Attendance details have been fetched successfully. | [AttendanceDetailDTO](#attendancedetaildto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/attendance/swagger

#### GET
##### Summary

home

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Models

#### AttendanceDetailDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| clockIn | dateTime | Clock-in Time
_Example:_ `"2021-08-08 09:00:00"` | No |
| clockInAddress | string | address for punch-in
_Example:_ `"Deskera"` | No |
| clockInLatitude | string | latitude value for punch-in
_Example:_ `103.84933902295474` | No |
| clockInLongitude | string | longitude value for punch-in
_Example:_ `1.2798478269079867` | No |
| clockOut | dateTime | Clock-out Time
_Example:_ `"2021-08-08 18:00:00"` | No |
| clockOutAddress | string | address for punch-out
_Example:_ `"Deskera"` | No |
| clockOutLatitude | string | latitude value for punch-out
_Example:_ `103.84933902295474` | No |
| clockOutLongitude | string | longitude value for punch-out
_Example:_ `1.2798478269079867` | No |
| designation | string | IAM User Id
_Example:_ `1234` | No |
| employeeId | string | IAM User Id
_Example:_ `1234` | No |
| employeeName | string | IAM User Id
_Example:_ `1234` | No |
| entryOffsetMinutes | integer | Entry offset in minutes
_Example:_ `0` | No |
| exitOffsetMinutes | integer | Exit offset in minutes
_Example:_ `0` | No |
| iamUserId | long | IAM User Id
_Example:_ `1234` | No |
| id | long | Attendance Id
_Example:_ `1` | No |
| overtimeMinutes | integer | Over time in minutes
_Example:_ `0` | No |
| punchingLogs | [ [PunchDTO](#punchdto) ] | punched logs
_Example:_ `"Deskera"` | No |
| totalMinutes | integer | Total time worked between Clock-in and Clock-out in minutes
_Example:_ `450` | No |
| underMinutes | integer | Under time in minutes
_Example:_ `0` | No |

#### FilterConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| numberOfElements | string |  | No |
| numberOfRecords | string |  | No |
| page | string |  | No |
| sizePerPage | string |  | No |
| totalPage | string |  | No |

#### Pageable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| offset | long |  | No |
| pageNumber | integer |  | No |
| pageSize | integer |  | No |
| paged | boolean |  | No |
| sort | [Sort](#sort) |  | No |
| unpaged | boolean |  | No |

#### PageableAttendanceDetailDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attendances | [ [AttendanceDetailDTO](#attendancedetaildto) ] |  | No |
| filterConfig | [FilterConfig](#filterconfig) |  | No |

#### Page«AttendanceDetailDTO»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [AttendanceDetailDTO](#attendancedetaildto) ] |  | No |
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

#### PunchDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | string | address for punch-in
_Example:_ `"Deskera"` | No |
| clockIn | dateTime | This is clock in time
_Example:_ `"2021-01-01 12:00"` | No |
| iamUserId | long |  | No |
| latitude | string | latitude value for punch-in
_Example:_ `103.84933902295474` | No |
| longitude | string | longitude value for punch-in
_Example:_ `1.2798478269079867` | No |
| punchAt | dateTime | This is punching time
_Example:_ `"2021-01-01 12:00"` | No |
| type | string | This is punching type
_Enum:_ `"CLOCK_IN"`, `"CLOCK_OUT"`
_Example:_ `"CLOCK_IN"` | No |

#### PunchingResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | string | address for punch-in
_Example:_ `"Deskera"` | No |
| clockIn | dateTime | Clock in time
_Example:_ `"2021-01-01 12:OO"` | No |
| clockOut | dateTime | Clock out time
_Example:_ `"2021-01-01 12:OO"` | No |
| latitude | string | latitude value for punch-in
_Example:_ `103.84933902295474` | No |
| longitude | string | longitude value for punch-in
_Example:_ `1.2798478269079867` | No |
| workPeriodEndTime | string | Work period end time
_Example:_ `"09:00 AM"` | No |
| workPeriodStartTime | string | Work period start time
_Example:_ `"09:00 AM"` | No |

#### Sort

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| empty | boolean |  | No |
| sorted | boolean |  | No |
| unsorted | boolean |  | No |
