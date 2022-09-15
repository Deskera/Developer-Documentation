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
| userType | query | userType | No | string |

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

### /v1/people/attendance/bulk

#### POST
##### Summary

Save attendance punching data in bulk

##### Description

API to save attendance punching details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| attendanceBulkRequestDto | body | attendanceBulkRequestDto | Yes | [AttendanceBulkRequestDto](#attendancebulkrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AttendanceBulkResponseDto](#attendancebulkresponsedto) |
| 201 | Attendance punching data has been posted successfully | [AttendanceBulkResponseDto](#attendancebulkresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/attendance/export/punchlog

#### POST
##### Summary

getAttendanceDetailsForExport

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| exportAttendanceDetailsWithPunchLogDTO | body | exportAttendanceDetailsWithPunchLogDTO | Yes | [AttendanceAndLogExportRequestDto](#attendanceandlogexportrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [AttendanceAndPunchLogRespose](#attendanceandpunchlogrespose) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/attendance/getAttendanceExportData

#### GET
##### Summary

getAttendanceExportData

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| designation | query | designation | No | string |
| month | query | month | Yes | integer |
| shift_id | query | shift_id | No | string |
| year | query | year | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AttendanceExportResponseDto](#attendanceexportresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/attendance/migrate

#### GET
##### Summary

calculate punch logs migration

##### Description

API to calculate punch logs migration

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | attendance calculated punching data has been updated successfully |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

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

#### PUT
##### Summary

Updated proxy attendance punching data

##### Description

API to update proxy attendance punching details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| punchingUpdateDto | body | punchingUpdateDto | Yes | [PunchingUpdateDto](#punchingupdatedto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PunchingUpdateDto](#punchingupdatedto) |
| 201 | Proxy attendance punching data has been updated successfully | [PunchingUpdateDto](#punchingupdatedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/attendance/proxy/bulk

#### PUT
##### Summary

Add bulk proxy attendance punching data

##### Description

API to add bulk proxy attendance punching details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| punchingUpdateDto | body | punchingUpdateDto | Yes | [ [PunchingUpdateDto](#punchingupdatedto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkAttendanceResponse](#bulkattendanceresponse) |
| 201 | Bulk proxy attendance punching data has been addedd successfully | [BulkAttendanceResponse](#bulkattendanceresponse) |
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

### /v1/people/attendance/shifts/payrun

#### POST
##### Summary

getAttendanceDetailsByPeriodForPayrun

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| employeeAttendanceRequest | body | employeeAttendanceRequest | Yes | [EmployeeAttendanceRequest](#employeeattendancerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [EmployeeAttendance](#employeeattendance) |
| 201 | Created |  |
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

### /v1/people/attendance/terminate

#### POST
##### Summary

Update Terminated

##### Description

API to update attendance for user  to terminated.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| terminateAttendanceRequestDto | body | terminateAttendanceRequestDto | Yes | [TerminateAttendanceRequestDto](#terminateattendancerequestdto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Successfully updated the terminated flag |
| 201 | Created |
| 400 | Something went wring |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Models

#### AttendanceAndLogExportRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| designations | string | Designations
_Example:_ `"Admin"` | No |
| iamUserIds | [ long ] | IamUserIds | No |
| month | integer | count of month i.e. 1 = Jan
_Example:_ `1` | No |
| year | integer | Year
_Example:_ `2022` | No |

#### AttendanceAndPunchLogRespose

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| clockIn | string |  | No |
| clockOut | string |  | No |
| date | date |  | No |
| day | string |  | No |
| designation | string |  | No |
| employeeId | string |  | No |
| iamUserId | long |  | No |
| name | string |  | No |
| remark | string |  | No |
| totHours | string |  | No |
| totHoursByPunchLog | string |  | No |
| type | string |  | No |

#### AttendanceBulkRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attendanceRecords | [ [AttendanceImportDetailsDto](#attendanceimportdetailsdto) ] | Attendance details | No |
| dateFormat | string | Date format | No |

#### AttendanceBulkResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failed | [ [AttendanceImportDetailsDto](#attendanceimportdetailsdto) ] | Users attendance failed records detail dto | No |
| invalid | [ [AttendanceImportDetailsDto](#attendanceimportdetailsdto) ] | Users attendance invalid records detail dto | No |
| message | string | Success message
_Example:_ `"Attendance Imported successfully"` | No |
| status | string | Success
_Example:_ `"success"` | No |
| success | [ [AttendanceImportDetailsDto](#attendanceimportdetailsdto) ] | Users attendance success records detail dto | No |

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
| shiftName | string | name of the shift
_Example:_ `"Shift 1"` | No |
| shift_id | string | shift Id
_Example:_ `1234` | No |
| totalMinutes | integer | Total time worked between Clock-in and Clock-out in minutes
_Example:_ `450` | No |
| totalMinutesByPunchLogs | integer | Total time worked between every Punch In and Out in minutes
_Example:_ `380` | No |
| underMinutes | integer | Under time in minutes
_Example:_ `0` | No |

#### AttendanceExportResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attendanceDetails | [ [ string ] ] |  | No |
| headers | [ string ] |  | No |

#### AttendanceImportDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| consolidatedError | string | User does not exist
_Example:_ `"errors"` | No |
| email | string | User's email Id
_Example:_ `"kojal01@getnada.com"` | No |
| employeeId | string | EmployeeDetails Id
_Example:_ `"0001"` | No |
| firstName | string | User's first name
_Example:_ `"Kojak"` | No |
| lastName | string | User's last name
_Example:_ `"Dis"` | No |
| punchDate | dateTime | Punch Date
_Example:_ `"05/02/2022"` | No |
| punchTime | string | Punch time
_Example:_ `"09:00"` | No |
| punchType | string | Punch type
_Example:_ `"Entry"` | No |

#### BulkAttendanceResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failedRecords | [ [PunchingUpdateDto](#punchingupdatedto) ] |  | No |
| succeedRecords | [ [PunchingUpdateDto](#punchingupdatedto) ] |  | No |

#### EmployeeAttendance

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employee | [ [EmployeeAttendanceMeta](#employeeattendancemeta) ] |  | No |
| shifts | [ string ] |  | No |

#### EmployeeAttendanceMeta

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| daysWorked | number |  | No |
| employeeId | string |  | No |
| hrsWorked | number |  | No |
| iamUserId | long |  | No |
| overtime | [ [OvertimeDto](#overtimedto) ] |  | No |
| unpaidDays | number |  | No |

#### EmployeeAttendanceRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| from | string | From Date
_Example:_ `"2022-08-01"` | No |
| iamUserIds | [ long ] | IamUserIds | No |
| payrunCalcCriteria | string | Payrun Payable days setting
_Example:_ `"numberOfCalendarDaysInMonth"` | No |
| to | string | To Date
_Example:_ `"2022-08-31"` | No |

#### FilterConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| numberOfElements | string |  | No |
| numberOfRecords | string |  | No |
| page | string |  | No |
| sizePerPage | string |  | No |
| totalPage | string |  | No |

#### OvertimeDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| rate | number |  | No |
| units | number |  | No |
| value | number |  | No |

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
| allowProxyPunch | boolean | Allow Admin to do proxy Punch In/Out
_Example:_ `false` | No |
| clockIn | dateTime | This is clock in time
_Example:_ `"2021-01-01 12:00"` | No |
| iamUserId | long |  | No |
| id | long | Punch log id
_Example:_ `1234` | No |
| isFromGrid | boolean | _Example:_ `false` | No |
| latitude | string | latitude value for punch-in
_Example:_ `103.84933902295474` | No |
| longitude | string | longitude value for punch-in
_Example:_ `1.2798478269079867` | No |
| punchAt | dateTime | This is punching time
_Example:_ `"2021-01-01 12:00"` | No |
| remark | string | Remark for a proxy Clock In/Out
_Example:_ `"Manually added by ADMIN"` | No |
| shiftId | string | shift Id
_Example:_ `1234` | No |
| shiftName | string | name of the shift
_Example:_ `"Shift 1"` | No |
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

#### PunchingUpdateDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| clockIn | dateTime | This is clock in time
_Example:_ `"2021-01-01 12:00"` | No |
| clockOut | dateTime | This is clock out time
_Example:_ `"2021-01-01 12:00"` | No |
| iamUserId | long |  | No |
| id | long |  | No |
| isFromGrid | boolean |  | No |
| isPunchLog | boolean |  | No |
| remark | string |  | No |
| type | string | _Enum:_ `"CLOCK_IN"`, `"CLOCK_OUT"` | No |

#### Sort

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| empty | boolean |  | No |
| sorted | boolean |  | No |
| unsorted | boolean |  | No |

#### TerminateAttendanceRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userId | long |  | No |
