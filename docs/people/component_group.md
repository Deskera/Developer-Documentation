---
id: componentgroups
title: Component Groups
sidebar_label: Component Groups
---

### Manage component groups

#### GET
##### Summary

Get all Component Groups

##### Description

Get list of all Component Groups with pagination.

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
| 200 | A successful response. | [v1GetComponentGroupsResponse](#v1getcomponentgroupsresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-run/payruns/year/2022?limit=20&currentPage=1&order=desc&field=_id
```

##### Curl

```java
curl -X GET "https://bifrost-us.deskera.com/v1/people-pay-run/payruns?limit=20&currentPage=1&order=desc&field=_id" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Sample Request
```java
{key:value}
```

##### Sample Response
```java
{key:value}
```
#### POST
##### Summary

Add Component Group

##### Description

Add Component Group.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1ComponentGroup](#v1componentgroup) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1ComponentGroup](#v1componentgroup) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/component-group
```

##### Curl

```java
curl-X'POST'\'https://bifrost-us.deskera.com/v1/people/tenants/component-group'\-H'accept: application/json'\-H'x-access-token: sampletoken'\-H'Content-Type: application/json'\-d'{   "id": "",   "name": "xyz",   "hasFixedComponents": true,   "fixedComponents": [     {       "name": "A",       "isActive": true,       "type": "EARNING",       "isForAllEmployee": true,       "compliance": {         "countryCode": "IN",         "pf": false,         "esi": false,         "taxexempt": false       },       "defaultComponent": false,       "id": "635fbcd93295b0023353c318",       "employees": [                ],       "isVariable": false,       "isFormula": false,       "componentConfig": {         "configureAmountBasis": "",         "basisComponentId": "",         "componentPercent": 0,         "applicableValues": null,         "amountPerDay": 0,         "deductionType": "posttaxdeduction"       },       "frequency": {         "period": "everyPayrun",         "occurrence": null,         "when": ""       },       "isHidden": false,       "subType": "",       "includeInCTC": true,       "includeInOTCalc": false,       "isUnpaidIncluded": false,       "formulaConfig": null,       "formula": "",       "amount": "400",       "componentId": "635fbcd93295b0023353c318"     }   ],   "variableComponents": [        ],   "hasVarComponents": false,   "applyToAll": true,   "users": [        ] }'
```

##### Sample Request
```java
{
  "id": "",
  "name": "xyz",
  "hasFixedComponents": true,
  "fixedComponents": [
    {
      "name": "A",
      "isActive": true,
      "type": "EARNING",
      "isForAllEmployee": true,
      "compliance": {
        "countryCode": "IN",
        "pf": false,
        "esi": false,
        "taxexempt": false
      },
      "defaultComponent": false,
      "id": "635fbcd93295b0023353c318",
      "employees": [
        
      ],
      "isVariable": false,
      "isFormula": false,
      "componentConfig": {
        "configureAmountBasis": "",
        "basisComponentId": "",
        "componentPercent": 0,
        "applicableValues": null,
        "amountPerDay": 0,
        "deductionType": "posttaxdeduction"
      },
      "frequency": {
        "period": "everyPayrun",
        "occurrence": null,
        "when": ""
      },
      "isHidden": false,
      "subType": "",
      "includeInCTC": true,
      "includeInOTCalc": false,
      "isUnpaidIncluded": false,
      "formulaConfig": null,
      "formula": "",
      "amount": "400",
      "componentId": "635fbcd93295b0023353c318"
    }
  ],
  "variableComponents": [
    
  ],
  "hasVarComponents": false,
  "applyToAll": true,
  "users": [
    
  ]
}
```

##### Sample Response
```java
{
  "id": "635fbfbf5ced530c2f3be9eb",
  "name": "xyz",
  "hasFixedComponents": true,
  "fixedComponents": [
    {
      "componentId": "635fbcd93295b0023353c318",
      "name": "A",
      "amount": 400,
      "type": "EARNING",
      "status": "",
      "componentConfig": {
        "configureAmountBasis": "",
        "basisComponentId": "",
        "componentPercent": 0,
        "amountPerDay": 0,
        "deductionType": "",
        "applicableValues": null
      },
      "subType": "",
      "frequency": null,
      "includeInOTCalc": false,
      "formula": "",
      "formulaConfig": []
    }
  ],
  "hasVarComponents": false,
  "variableComponents": [],
  "hasBenefits": false,
  "benefits": [],
  "applyToAll": true,
  "users": [],
  "deleted": false,
  "error": null
}
}
```
#### PUT
##### Summary

Update a Component Group

##### Description

Update a Component Group.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1ComponentGroup](#v1componentgroup) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1ComponentGroup](#v1componentgroup) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-run/payruns/year/2022?limit=20&currentPage=1&order=desc&field=_id
```

##### Curl

```java
curl -X 'PUT' \
  'https://bifrost-us.deskera.com/v1/people/tenants/component-group' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'```

##### Sample Request
```java
{
  "id": "635fbcea0ab739d2f218da8b",
  "name": "Comp group",
  "hasFixedComponents": true,
  "fixedComponents": [
    {
      "componentId": "635fbcd93295b0023353c318",
      "name": "A",
      "amount": 5000,
      "type": "EARNING",
      "status": "",
      "componentConfig": {
        "configureAmountBasis": "",
        "basisComponentId": "",
        "componentPercent": 0,
        "amountPerDay": 0,
        "deductionType": "",
        "applicableValues": null
      },
      "subType": "",
      "frequency": null,
      "includeInOTCalc": false,
      "formula": "",
      "formulaConfig": [
        
      ]
    }
  ],
  "variableComponents": [
    
  ],
  "hasVarComponents": false,
  "applyToAll": true,
  "users": [
    
  ]
}```

##### Sample Response
```java
{
  "id": "635fbcea0ab739d2f218da8b",
  "name": "Comp group",
  "hasFixedComponents": true,
  "fixedComponents": [
    {
      "componentId": "635fbcd93295b0023353c318",
      "name": "A",
      "amount": 5000,
      "type": "EARNING",
      "status": "",
      "componentConfig": {
        "configureAmountBasis": "",
        "basisComponentId": "",
        "componentPercent": 0,
        "amountPerDay": 0,
        "deductionType": "",
        "applicableValues": null
      },
      "subType": "",
      "frequency": null,
      "includeInOTCalc": false,
      "formula": "",
      "formulaConfig": []
    }
  ],
  "hasVarComponents": false,
  "variableComponents": [],
  "hasBenefits": false,
  "benefits": [],
  "applyToAll": true,
  "users": [],
  "deleted": false,
  "error": null
}
```

### Delete component group

#### POST
##### Summary

Delete a Component Group by id

##### Description

Delete a Component Group by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1BulkIdRequest](#v1bulkidrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1DeleteResponse](#v1deleteresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/component-group/delete
```

##### Curl

```java
curl -X 'POST' \
  'https://bifrost-us.deskera.com/v1/people/tenants/component-group/delete' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken' \
  -H 'Content-Type: application/json' \
  -d '{
  "ids": [
    "635fbf560ab739d2f218da8c"
  ]
}'```

##### Sample Request
```java
{
  "ids": [
    "635fbf560ab739d2f218da8c"
  ]
}```

##### Sample Response
```java
{
  "status": "OK",
  "message": "Deleted {1} Component Group document(s) for id {[635fbf560ab739d2f218da8c]}",
  "errCode": ""
}
```
### Fetch component group

#### GET
##### Summary

Get a Component Group by id

##### Description

Get a Component Group by it's id.

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
| 200 | A successful response. | [v1ComponentGroup](#v1componentgroup) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/component-group
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/tenants/component-group' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'```

##### Sample Request
```java
```

##### Sample Response
```java
{
  "status": "OK",
  "componentGroups": [
    {
      "id": "635fbcea0ab739d2f218da8b",
      "name": "Comp group",
      "hasFixedComponents": true,
      "fixedComponents": [
        {
          "componentId": "635fbcd93295b0023353c318",
          "name": "A",
          "amount": 5000,
          "type": "EARNING",
          "status": "",
          "componentConfig": {
            "configureAmountBasis": "",
            "basisComponentId": "",
            "componentPercent": 0,
            "amountPerDay": 0,
            "deductionType": "",
            "applicableValues": null
          },
          "subType": "",
          "frequency": null,
          "includeInOTCalc": false,
          "formula": "",
          "formulaConfig": []
        }
      ],
      "hasVarComponents": false,
      "variableComponents": [],
      "hasBenefits": false,
      "benefits": [],
      "applyToAll": true,
      "users": [],
      "deleted": false,
      "error": null
    }
  ],
  "filterConfig": {
    "page": "1",
    "numberOfElements": "1",
    "sizePerPage": "1",
    "totalPage": "1",
    "numberOfRecords": "1"
  },
  "error": null
}
```
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

#### v1ApplicableValues

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| metro | double |  | No |
| nonMetro | double |  | No |

#### v1BenefitIds

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| benefitId | string |  | No |

#### v1BulkIdRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ids | [ string ] |  | No |
| forcedDelete | boolean |  | No |

#### v1ComponentConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| configureAmountBasis | string |  | No |
| basisComponentId | string |  | No |
| componentPercent | double |  | No |
| amountPerDay | double |  | No |
| deductionType | string |  | No |
| applicableValues | [v1ApplicableValues](#v1applicablevalues) |  | No |

#### v1ComponentFrequency

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| period | string |  | No |
| occurrence | [ string ] |  | No |
| when | string |  | No |

#### v1ComponentGroup

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| name | string |  | No |
| hasFixedComponents | boolean |  | No |
| fixedComponents | [ [v1ComponentMap](#v1componentmap) ] |  | No |
| hasVarComponents | boolean |  | No |
| variableComponents | [ [v1ComponentIds](#v1componentids) ] |  | No |
| hasBenefits | boolean |  | No |
| benefits | [ [v1BenefitIds](#v1benefitids) ] |  | No |
| applyToAll | boolean |  | No |
| users | [ string ] |  | No |
| deleted | boolean |  | No |
| error | [v1Error](#v1error) |  | No |

#### v1ComponentIds

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| componentId | string |  | No |

#### v1ComponentMap

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| componentId | string |  | No |
| name | string |  | No |
| amount | double |  | No |
| type | string |  | No |
| status | string |  | No |
| componentConfig | [v1ComponentConfig](#v1componentconfig) |  | No |
| subType | string |  | No |
| frequency | [v1ComponentFrequency](#v1componentfrequency) |  | No |
| includeInOTCalc | boolean |  | No |
| formula | string |  | No |
| formulaConfig | [ [v1FormulaConfig](#v1formulaconfig) ] |  | No |

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

#### v1Error

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| message | string |  | No |
| errorCode | string |  | No |
| details | string |  | No |

#### v1FilterConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| page | string (int64) |  | No |
| numberOfElements | string (int64) |  | No |
| sizePerPage | string (int64) |  | No |
| totalPage | string (int64) |  | No |
| numberOfRecords | string (int64) |  | No |

#### v1FormulaConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| index | string |  | No |
| componentId | string |  | No |
| type | string |  | No |
| percentage | float |  | No |

#### v1GetComponentGroupsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| componentGroups | [ [v1ComponentGroup](#v1componentgroup) ] |  | No |
| filterConfig | [v1FilterConfig](#v1filterconfig) |  | No |
| error | [v1Error](#v1error) |  | No |

#### v1OrderBy

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| field | string |  | No |
| order | string |  | No |

#### v1Status

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| v1Status | string |  |  |

#### v1UserFilter

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| conditions | [ [v1Condition](#v1condition) ] |  | No |
