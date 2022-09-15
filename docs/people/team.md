---
id: team
title: Teams
sidebar_label: Teams
---
### Security
**ApiKeyAuth**  

|apiKey|*API Key*|
|---|---|
|Name|x-access-token|
|In|header|

### /v1/people/tenants/teams

#### POST
##### Summary

Add one or more teams

##### Description

Add one or more new teams.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1AddTeamsRequest](#v1addteamsrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1AddTeamsResponse](#v1addteamsresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

#### PUT
##### Summary

Update a team

##### Description

Update a team.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1Team](#v1team) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetTeamResponse](#v1getteamresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

#### PATCH
##### Summary

Patch a team

##### Description

Patch a team.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1Team](#v1team) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1Team](#v1team) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/tenants/teams/bulk/shortinfo

#### POST
##### Summary

Get bulk Teams's short info

##### Description

Get bulk Teams's short info

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1BulkIdRequest](#v1bulkidrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetTeamsResponse](#v1getteamsresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/tenants/teams/delete

#### POST
##### Summary

Delete a Team by id

##### Description

Delete a Team by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1DeleteTeamsRequest](#v1deleteteamsrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1DeleteResponse](#v1deleteresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/tenants/teams/list

#### GET
##### Summary

Get all Teams

##### Description

Get list of all Teams with pagination.

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
| 200 | A successful response. | [v1GetTeamsResponse](#v1getteamsresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/tenants/teams/{id}

#### GET
##### Summary

Get a team by id

##### Description

Get a team by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| getCompliance | query |  | No | boolean |
| getComponents | query |  | No | boolean |
| getBenefits | query |  | No | boolean |
| getRolesAndTeams | query |  | No | boolean |
| customFieldModule | query |  | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetTeamResponse](#v1getteamresponse) |
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

#### v1AddTeamsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| teams | [ [v1Team](#v1team) ] |  | No |

#### v1AddTeamsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| message | string |  | No |

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

#### v1DeleteTeamsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| teamIds | [ string ] |  | No |

#### v1FilterConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| page | string (int64) |  | No |
| numberOfElements | string (int64) |  | No |
| sizePerPage | string (int64) |  | No |
| totalPage | string (int64) |  | No |
| numberOfRecords | string (int64) |  | No |

#### v1GetTeamResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| team | [v1Team](#v1team) |  | No |

#### v1GetTeamsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| teams | [ [v1Team](#v1team) ] |  | No |
| filterConfig | [v1FilterConfig](#v1filterconfig) |  | No |

#### v1Member

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userId | string |  | No |
| iamUserId | string (int64) |  | No |
| firstName | string |  | No |
| lastName | string |  | No |
| roles | [ string ] |  | No |

#### v1OrderBy

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| field | string |  | No |
| order | string |  | No |

#### v1Status

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| v1Status | string |  |  |

#### v1Team

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| teamId | string |  | No |
| name | string |  | No |
| createdAt | dateTime |  | No |
| members | [ [v1Member](#v1member) ] |  | No |
| status | string |  | No |
| type | string |  | No |

#### v1UserFilter

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| conditions | [ [v1Condition](#v1condition) ] |  | No |
