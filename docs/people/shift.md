---
id: shift
title: Shifts
sidebar_label: Shifts
---
### Security
**ApiKeyAuth**  

|apiKey|*API Key*|
|---|---|
|Name|x-access-token|
|In|header|

### /v1/people/tenants/overtime

#### GET
##### Summary

Get Overtime Policies

##### Description

Get all configured Overtime Policies.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query |  | No | string (int64) |
| currentPage | query |  | No | string (int64) |
| orderBy.field | query |  | No | string |
| orderBy.order | query |  | No | string |
| searchString | query |  | No | string |
| searchField | query |  | No | string |
| getComponents | query |  | No | boolean |
| fromDate | query |  | No | dateTime |
| toDate | query |  | No | dateTime |
| userType | query |  | No | string |
| cpfAccount | query |  | No | string |
| accountType | query |  | No | string |
| getBenefits | query |  | No | boolean |
| order | query |  | No | string |
| field | query |  | No | string |
| isInCompleteProfile | query |  | No | boolean |
| stage | query |  | No | string |
| includeDraft | query |  | No | boolean |
| ignTeamData | query |  | No | boolean |
| ignRoles | query |  | No | boolean |
| ignUserApprovers | query |  | No | boolean |
| ignTeamMembers | query |  | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetOvertimeResponse](#v1getovertimeresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

#### POST
##### Summary

Add a Overtime

##### Description

Add a new Overtime.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1Overtime](#v1overtime) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1Overtime](#v1overtime) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

#### PATCH
##### Summary

Update Overtime policy

##### Description

Update Overtime policy.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1Overtime](#v1overtime) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1Overtime](#v1overtime) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/tenants/overtime/delete

#### POST
##### Summary

Delete Overtime policy

##### Description

Delete overtime policies

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1BulkIdRequest](#v1bulkidrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1DeleteResponse](#v1deleteresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/tenants/overtime/find

#### POST
##### Summary

Get a OT Policy by Employee id

##### Description

Get a OT Policy by Employee id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1ShiftIdRequest](#v1shiftidrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetOvertimeResponse](#v1getovertimeresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/tenants/overtime/ot-multiplier

#### GET
##### Summary

Get Overtime Payroll Multiplier

##### Description

Get Overtime Payroll Multiplier

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query |  | No | string (int64) |
| currentPage | query |  | No | string (int64) |
| orderBy.field | query |  | No | string |
| orderBy.order | query |  | No | string |
| searchString | query |  | No | string |
| searchField | query |  | No | string |
| getComponents | query |  | No | boolean |
| fromDate | query |  | No | dateTime |
| toDate | query |  | No | dateTime |
| userType | query |  | No | string |
| cpfAccount | query |  | No | string |
| accountType | query |  | No | string |
| getBenefits | query |  | No | boolean |
| order | query |  | No | string |
| field | query |  | No | string |
| isInCompleteProfile | query |  | No | boolean |
| stage | query |  | No | string |
| includeDraft | query |  | No | boolean |
| ignTeamData | query |  | No | boolean |
| ignRoles | query |  | No | boolean |
| ignUserApprovers | query |  | No | boolean |
| ignTeamMembers | query |  | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1OvertimePayrollMultiplierResponse](#v1overtimepayrollmultiplierresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

#### PATCH
##### Summary

Update Overtime Payroll Multiplier

##### Description

Update Overtime Payroll Multiplier.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1OvertimePayrollMultiplier](#v1overtimepayrollmultiplier) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1OvertimePayrollMultiplierResponse](#v1overtimepayrollmultiplierresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/tenants/shifts

#### GET
##### Summary

Get Shifts

##### Description

Get Shifts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query |  | No | string (int64) |
| currentPage | query |  | No | string (int64) |
| orderBy.field | query |  | No | string |
| orderBy.order | query |  | No | string |
| searchString | query |  | No | string |
| searchField | query |  | No | string |
| getComponents | query |  | No | boolean |
| fromDate | query |  | No | dateTime |
| toDate | query |  | No | dateTime |
| userType | query |  | No | string |
| cpfAccount | query |  | No | string |
| accountType | query |  | No | string |
| getBenefits | query |  | No | boolean |
| order | query |  | No | string |
| field | query |  | No | string |
| isInCompleteProfile | query |  | No | boolean |
| stage | query |  | No | string |
| includeDraft | query |  | No | boolean |
| ignTeamData | query |  | No | boolean |
| ignRoles | query |  | No | boolean |
| ignUserApprovers | query |  | No | boolean |
| ignTeamMembers | query |  | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetShiftResponse](#v1getshiftresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

#### POST
##### Summary

Add a Shift

##### Description

Add a new Shift.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1Shift](#v1shift) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1Shift](#v1shift) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

#### PATCH
##### Summary

Update a Shift

##### Description

Update a Shift.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1Shift](#v1shift) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1Shift](#v1shift) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/tenants/shifts/delete

#### POST
##### Summary

Delete a Shift

##### Description

Delete multiple Shifts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1BulkIdRequest](#v1bulkidrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1DeleteResponse](#v1deleteresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/tenants/shifts/find

#### POST
##### Summary

Get a Shift by Employee id

##### Description

Get a Shift by Employee id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1ShiftIdRequest](#v1shiftidrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetShiftResponse](#v1getshiftresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/tenants/shifts/{id}

#### GET
##### Summary

Get a Shift by id

##### Description

Get a Shift by id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1ShiftResponse](#v1shiftresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/tenants/shiftsbyids

#### POST
##### Summary

Get Shifts by Shift ids

##### Description

Get Shifts by Shift ids

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1ShiftIdsRequest](#v1shiftidsrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetShiftResponse](#v1getshiftresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### Models

#### gatewayruntimeError

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| error | string |  | No |
| code | integer |  | No |
| message | string |  | No |
| details | [ [protobufAny](#protobufany) ] |  | No |

#### protobufAny

`Any` contains an arbitrary serialized protocol buffer message along with a
URL that describes the type of the serialized message.

Protobuf library provides support to pack/unpack Any values in the form
of utility functions or additional generated methods of the Any type.

Example 1: Pack and unpack a message in C++.

    Foo foo = ...;
    Any any;
    any.PackFrom(foo);
    ...
    if (any.UnpackTo(&foo)) {
      ...
    }

Example 2: Pack and unpack a message in Java.

    Foo foo = ...;
    Any any = Any.pack(foo);
    ...
    if (any.is(Foo.class)) {
      foo = any.unpack(Foo.class);
    }

 Example 3: Pack and unpack a message in Python.

    foo = Foo(...)
    any = Any()
    any.Pack(foo)
    ...
    if any.Is(Foo.DESCRIPTOR):
      any.Unpack(foo)
      ...

 Example 4: Pack and unpack a message in Go

     foo := &pb.Foo{...}
     any, err := ptypes.MarshalAny(foo)
     ...
     foo := &pb.Foo{}
     if err := ptypes.UnmarshalAny(any, foo); err != nil {
       ...
     }

The pack methods provided by protobuf library will by default use
'type.googleapis.com/full.type.name' as the type URL and the unpack
methods only use the fully qualified type name after the last '/'
in the type URL, for example "foo.bar.com/x/y.z" will yield type
name "y.z".

JSON
====
The JSON representation of an `Any` value uses the regular
representation of the deserialized, embedded message, with an
additional field `@type` which contains the type URL. Example:

    package google.profile;
    message Person {
      string first_name = 1;
      string last_name = 2;
    }

    {
      "@type": "type.googleapis.com/google.profile.Person",
      "firstName": <string>,
      "lastName": <string>
    }

If the embedded message type is well-known and has a custom JSON
representation, that representation will be embedded adding a field
`value` which holds the custom JSON in addition to the `@type`
field. Example (for message [google.protobuf.Duration][]):

    {
      "@type": "type.googleapis.com/google.protobuf.Duration",
      "value": "1.212s"
    }

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| type_url | string | A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one "/" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading "." is not accepted).  In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows:  * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a [google.protobuf.Type][]   value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the   URL, or have them precompiled into a binary to avoid any   lookup. Therefore, binary compatibility needs to be preserved   on changes to types. (Use versioned type names to manage   breaking changes.)  Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com.  Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics. | No |
| value | byte | Must be a valid serialized protocol buffer of the above specified type. | No |

#### v1BreakHours

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| restDay | string |  | No |
| offDay | string |  | No |
| holiday | string |  | No |
| regularDay | string |  | No |
| halfDay | string |  | No |
| all | string |  | No |

#### v1BulkIdRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ids | [ string ] |  | No |
| forcedDelete | boolean |  | No |

#### v1Condition

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| colId | string |  | No |
| value | string |  | No |
| opr | string |  | No |

#### v1DeleteResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| message | string |  | No |
| errCode | string |  | No |

#### v1EmployeeShiftData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeeId | string |  | No |
| dateOfAssign | string |  | No |

#### v1FilterConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| page | string (int64) |  | No |
| numberOfElements | string (int64) |  | No |
| sizePerPage | string (int64) |  | No |
| totalPage | string (int64) |  | No |
| numberOfRecords | string (int64) |  | No |

#### v1GetOvertimeResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| data | [ [v1OvertimeResponse](#v1overtimeresponse) ] |  | No |
| filterConfig | [v1FilterConfig](#v1filterconfig) |  | No |

#### v1GetShiftResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| data | [ [v1ShiftResponse](#v1shiftresponse) ] |  | No |
| filterConfig | [v1FilterConfig](#v1filterconfig) |  | No |

#### v1MaxOvertime

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| daily | string |  | No |
| weekly | string |  | No |
| monthly | string |  | No |
| quarterly | string |  | No |

#### v1OrderBy

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| field | string |  | No |
| order | string |  | No |

#### v1OtMapped

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| key | string |  | No |
| otType | string |  | No |
| value | string |  | No |

#### v1Overtime

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| policyName | string |  | No |
| description | string |  | No |
| activated | boolean |  | No |
| effectiveFrom | dateTime |  | No |
| status | string |  | No |
| remark | string |  | No |
| employees | [ string ] |  | No |
| applicableToAll | boolean |  | No |
| breakHours | [v1BreakHours](#v1breakhours) |  | No |
| maxOvertime | [v1MaxOvertime](#v1maxovertime) |  | No |
| minHours | string |  | No |
| otToRoundOff | string |  | No |
| blockTime | long |  | No |
| hasExpiry | boolean |  | No |
| actionDue | long |  | No |
| calculationType | string |  | No |
| calculationMethod | string |  | No |
| flatAmount | string (uint64) |  | No |
| component | string |  | No |

#### v1OvertimeMultiplierValues

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| value | string |  | No |
| description | string |  | No |

#### v1OvertimePayrollMultiplier

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| overtimeMultiplierValues | [ [v1OvertimeMultiplierValues](#v1overtimemultipliervalues) ] |  | No |

#### v1OvertimePayrollMultiplierResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| overtimePayrollMultiplier | [v1OvertimePayrollMultiplier](#v1overtimepayrollmultiplier) |  | No |

#### v1OvertimeResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| policyName | string |  | No |
| description | string |  | No |
| activated | boolean |  | No |
| effectiveFrom | dateTime |  | No |
| status | string |  | No |
| remark | string |  | No |
| employees | [ [v1EmployeeShiftData](#v1employeeshiftdata) ] |  | No |
| employeeIamUserIds | [ string (int64) ] |  | No |
| applicableToAll | boolean |  | No |
| breakHours | [v1BreakHours](#v1breakhours) |  | No |
| maxOvertime | [v1MaxOvertime](#v1maxovertime) |  | No |
| minHours | string |  | No |
| otToRoundOff | string |  | No |
| blockTime | long |  | No |
| hasExpiry | boolean |  | No |
| actionDue | long |  | No |
| calculationType | string |  | No |
| calculationMethod | string |  | No |
| flatAmount | string (uint64) |  | No |
| component | string |  | No |
| employeeDetails | [ [v1UserMeta](#v1usermeta) ] |  | No |
| eUIMap | object |  | No |
| createdAt | string |  | No |

#### v1Shift

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| name | string |  | No |
| from | string |  | No |
| to | string |  | No |
| shiftMargin | boolean |  | No |
| shiftMarginBefore | string |  | No |
| shiftMarginAfter | string |  | No |
| reqdHrsToMarkPresent | string |  | No |
| reqdHrsToMarkHalfPresent | string |  | No |
| applicableTo | boolean |  | No |
| employees | [ string ] |  | No |
| isOvertimeEnabled | boolean |  | No |
| overtimeThreshold | string (int64) |  | No |
| overtimeUnit | string (int64) |  | No |
| overtimeMapping | string |  | No |
| shiftWorkWeek | [ [v1ShiftWorkWeek](#v1shiftworkweek) ] |  | No |

#### v1ShiftIdRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeeIds | [ string ] |  | No |
| iamUserIds | [ string (int64) ] |  | No |

#### v1ShiftIdsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| shiftIds | [ string ] |  | No |

#### v1ShiftResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| name | string |  | No |
| from | string |  | No |
| to | string |  | No |
| shiftMargin | boolean |  | No |
| shiftMarginBefore | string |  | No |
| shiftMarginAfter | string |  | No |
| reqdHrsToMarkPresent | string |  | No |
| reqdHrsToMarkHalfPresent | string |  | No |
| applicableTo | boolean |  | No |
| employees | [ [v1EmployeeShiftData](#v1employeeshiftdata) ] |  | No |
| isOvertimeEnabled | boolean |  | No |
| overtimeThreshold | string (int64) |  | No |
| overtimeUnit | string (int64) |  | No |
| overtimeMapping | string |  | No |
| shiftWorkWeek | [ [v1ShiftWorkWeek](#v1shiftworkweek) ] |  | No |
| employeeDetails | [ [v1UserMeta](#v1usermeta) ] |  | No |
| eUIMap | object |  | No |
| createdAt | string |  | No |

#### v1ShiftWorkWeek

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| day | string |  | No |
| workingStatus | string |  | No |
| inTime | string |  | No |
| outTime | string |  | No |
| otMapped | [ [v1OtMapped](#v1otmapped) ] |  | No |

#### v1Status

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| v1Status | string |  |  |

#### v1UserFilter

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| conditions | [ [v1Condition](#v1condition) ] |  | No |

#### v1UserMeta

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userId | string |  | No |
| firstName | string |  | No |
| lastName | string |  | No |
| iamUserId | string |  | No |
