---
id: shift
title: Shifts
sidebar_label: Shifts
---
### Fetch Overtime policies

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
| userIds | query |  | No | [ string ] |
| isCustomFieldFilter | query |  | No | boolean |
| onlyTeamMembers | query |  | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetOvertimeResponse](#v1getovertimeresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/overtime?limit=20&currentPage=1
```

##### Curl

```java
curl -X GET "https://bifrost-us.deskera.com/v1/people/tenants/overtime?limit=20&currentPage=1" -H "accept: application/json" -H "x-access-token: sampletoken"
```

##### Sample Request
```java

```

##### Sample Response
```java
{
  "status": "OK",
  "data": [
    {
      "id": "63316ecf46f40e1b904e6af9",
      "policyName": "OT Policy 2",
      "description": "OT Policy 2",
      "activated": true,
      "effectiveFrom": "2022-08-31T18:30:00Z",
      "status": "ACTIVE",
      "remark": "AA",
      "employees": [
        {
          "employeeId": "6218718e01c98198c7a3e41d",
          "dateOfAssign": "2022-09-26T00:00:00.000Z"
        },
        {
          "employeeId": "624595fdb0bc1377fac94575",
          "dateOfAssign": "2022-09-26T00:00:00.000Z"
        },
        {
          "employeeId": "626a292ceee2302daeee58b1",
          "dateOfAssign": "2022-09-26T00:00:00.000Z"
        }
      ],
      "employeeIamUserIds": [
        
      ],
      "applicableToAll": false,
      "breakHours": {
        "restDay": "01:00",
        "offDay": "01:00",
        "holiday": "01:00",
        "regularDay": "01:00",
        "halfDay": "01:00",
        "all": "01:00"
      },
      "maxOvertime": {
        "daily": "04:00",
        "weekly": "20:00",
        "monthly": "80:00",
        "quarterly": "240:00"
      },
      "minHours": "00:30",
      "otToRoundOff": "ROUND_DOWN",
      "blockTime": 30,
      "hasExpiry": false,
      "actionDue": 0,
      "calculationType": "SHIFT",
      "calculationMethod": "COMPONENT",
      "flatAmount": "0",
      "component": "63316ee999b248f47220d2cb",
      "employeeDetails": [
        {
          "userId": "6218718e01c98198c7a3e41d",
          "firstName": "Rohan",
          "lastName": "Shelar",
          "iamUserId": "
        },
        {
          "userId": "624595fdb0bc1377fac94575",
          "firstName": "Karan",
          "lastName": "Bhandari",
          "iamUserId": "
        },
        {
          "userId": "626a292ceee2302daeee58b1",
          "firstName": "Shubham",
          "lastName": "Parihar",
          "iamUserId": "
        }
      ],
      "eUIMap": {
        
      },
      "createdAt": "2022-09-26T09:20:15.898Z",
      "multiplier": {
        "restDay": "2",
        "offDay": "2",
        "holiday": "2",
        "regularDay": "1",
        "halfDay": "1",
        "all": "
      },
      "createdBy": "Ganesh Karale (00001)",
      "updatedAt": "2022-09-26T09:21:44.586Z",
      "updatedBy": "Ganesh Karale (00001)",
      "employeeCount": 3
    }
  ],
  "filterConfig": {
    "page": "1",
    "numberOfElements": "3",
    "sizePerPage": "20",
    "totalPage": "1",
    "numberOfRecords": "3"
  }
}
```

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


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/overtime
```

##### Curl

```java
curl -X POST "https://bifrost-us.deskera.com/v1/people/tenants/overtime" -H "accept: application/json" -H "x-access-token: sampletoken" -H "Content-Type: application/json" -d "{\"policyName\":\"Day Shift\",\"description\":\"Day shift policy\",\"remark\":\"\",\"breakHours\":{\"all\":\"01:00\",\"restDay\":\"01:00\",\"offDay\":\"01:00\",\"holiday\":\"01:00\",\"regularDay\":\"01:00\",\"halfDay\":\"01:00\"},\"maxOvertime\":{\"daily\":\"02:00\",\"weekly\":\"10:00\",\"monthly\":\"40:00\",\"quarterly\":\"120:00\"},\"multiplier\":{\"all\":\"1\",\"restDay\":\"1\",\"offDay\":\"1\",\"holiday\":\"1\",\"regularDay\":\"1\",\"halfDay\":\"1\"},\"minHours\":\"00:30\",\"otToRoundOff\":\"ROUND_UP\",\"blockTime\":15,\"hasExpiry\":false,\"actionDue\":null,\"actionDueDate\":\"\",\"calculationType\":\"SHIFT\",\"calculationMethod\":\"FLAT\",\"flatAmount\":100,\"component\":\"\",\"effectiveFrom\":\"0001-01-01T00:00:00Z\",\"updatedAt\":\"2022-10-28T10:21:49.614Z\",\"status\":\"DRAFT\",\"activated\":false,\"employees\":[\"635a7c7e0ab739d2f218da6d\",\"63109c4f18ca88d8a9a9a035\"],\"applicableToAll\":false}"
```

##### Sample Request
```java
{
  "policyName": "Day Shift",
  "description": "Day shift policy",
  "remark": ",
  "breakHours": {
    "all": "01:00",
    "restDay": "01:00",
    "offDay": "01:00",
    "holiday": "01:00",
    "regularDay": "01:00",
    "halfDay": "01:00"
  },
  "maxOvertime": {
    "daily": "02:00",
    "weekly": "10:00",
    "monthly": "40:00",
    "quarterly": "120:00"
  },
  "multiplier": {
    "all": "1",
    "restDay": "1",
    "offDay": "1",
    "holiday": "1",
    "regularDay": "1",
    "halfDay": "1"
  },
  "minHours": "00:30",
  "otToRoundOff": "ROUND_UP",
  "blockTime": 15,
  "hasExpiry": false,
  "actionDue": null,
  "actionDueDate": ",
  "calculationType": "SHIFT",
  "calculationMethod": "FLAT",
  "flatAmount": 100,
  "component": ",
  "effectiveFrom": "0001-01-01T00:00:00Z",
  "updatedAt": "2022-10-28T10:21:49.614Z",
  "status": "DRAFT",
  "activated": false,
  "employees": [
    "635a7c7e0ab739d2f218da6d",
    "63109c4f18ca88d8a9a9a035"
  ],
  "applicableToAll": false
}
```

##### Sample Response
```java
{
  "id": "635bad3f0ab739d2f218da74",
  "policyName": "Day Shift",
  "description": "Day shift policy",
  "activated": false,
  "effectiveFrom": "0001-01-01T00:00:00Z",
  "status": "DRAFT",
  "remark": ",
  "employees": [
  ],
  "applicableToAll": false,
  "breakHours": {
    "restDay": "01:00",
    "offDay": "01:00",
    "holiday": "01:00",
    "regularDay": "01:00",
    "halfDay": "01:00",
    "all": "01:00"
  },
  "maxOvertime": {
    "daily": "02:00",
    "weekly": "10:00",
    "monthly": "40:00",
    "quarterly": "120:00"
  },
  "minHours": "00:30",
  "otToRoundOff": "ROUND_UP",
  "blockTime": 15,
  "hasExpiry": false,
  "actionDue": 0,
  "calculationType": "SHIFT",
  "calculationMethod": "FLAT",
  "flatAmount": "100",
  "component": ",
  "multiplier": {
    "restDay": "1",
    "offDay": "1",
    "holiday": "1",
    "regularDay": "1",
    "halfDay": "1",
    "all": "1"
  }
}
```
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


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/overtime
```

##### Curl

```java
curl -X PATCH "https://bifrost-us.deskera.com/v1/people/tenants/overtime" -H "accept: application/json" -H "x-access-token: sampletoken" -H "Content-Type: application/json" -d "{\"policyName\":\"Day Shift\",\"description\":\"Day shift policy\",\"remark\":\"\",\"breakHours\":{\"all\":\"01:00\",\"restDay\":\"01:00\",\"offDay\":\"01:00\",\"holiday\":\"01:00\",\"regularDay\":\"01:00\",\"halfDay\":\"01:00\"},\"maxOvertime\":{\"daily\":\"02:00\",\"weekly\":\"10:00\",\"monthly\":\"40:00\",\"quarterly\":\"120:00\"},\"multiplier\":{\"all\":\"1\",\"restDay\":\"1\",\"offDay\":\"1\",\"holiday\":\"1\",\"regularDay\":\"1\",\"halfDay\":\"1\"},\"minHours\":\"00:30\",\"otToRoundOff\":\"ROUND_UP\",\"blockTime\":15,\"hasExpiry\":false,\"actionDue\":0,\"actionDueDate\":\"\",\"calculationType\":\"SHIFT\",\"calculationMethod\":\"FLAT\",\"flatAmount\":100,\"component\":\"\",\"effectiveFrom\":\"0001-01-01T00:00:00Z\",\"updatedAt\":\"0001-01-01T00:00:00Z\",\"status\":\"DRAFT\",\"activated\":false,\"employees\":[\"635a7c7e0ab739d2f218da6d\",\"63109c4f18ca88d8a9a9a035\"],\"applicableToAll\":false,\"id\":\"635bad3f0ab739d2f218da74\"}"
```

##### Sample Request
```java
{
  "policyName": "Day Shift",
  "description": "Day shift policy",
  "remark": ",
  "breakHours": {
    "all": "01:00",
    "restDay": "01:00",
    "offDay": "01:00",
    "holiday": "01:00",
    "regularDay": "01:00",
    "halfDay": "01:00"
  },
  "maxOvertime": {
    "daily": "02:00",
    "weekly": "10:00",
    "monthly": "40:00",
    "quarterly": "120:00"
  },
  "multiplier": {
    "all": "1",
    "restDay": "1",
    "offDay": "1",
    "holiday": "1",
    "regularDay": "1",
    "halfDay": "1"
  },
  "minHours": "00:30",
  "otToRoundOff": "ROUND_UP",
  "blockTime": 15,
  "hasExpiry": false,
  "actionDue": 0,
  "actionDueDate": ",
  "calculationType": "SHIFT",
  "calculationMethod": "FLAT",
  "flatAmount": 100,
  "component": ",
  "effectiveFrom": "0001-01-01T00:00:00Z",
  "updatedAt": "0001-01-01T00:00:00Z",
  "status": "DRAFT",
  "activated": false,
  "employees": [
    "635a7c7e0ab739d2f218da6d",
    "63109c4f18ca88d8a9a9a035"
  ],
  "applicableToAll": false,
  "id": "635bad3f0ab739d2f218da74"
}
```

##### Sample Response
```java
{
  "id": "635bad3f0ab739d2f218da74",
  "policyName": "Day Shift",
  "description": "Day shift policy",
  "activated": false,
  "effectiveFrom": "0001-01-01T00:00:00Z",
  "status": "DRAFT",
  "remark": ",
  "employees": [
  ],
  "applicableToAll": false,
  "breakHours": {
    "restDay": "01:00",
    "offDay": "01:00",
    "holiday": "01:00",
    "regularDay": "01:00",
    "halfDay": "01:00",
    "all": "01:00"
  },
  "maxOvertime": {
    "daily": "02:00",
    "weekly": "10:00",
    "monthly": "40:00",
    "quarterly": "120:00"
  },
  "minHours": "00:30",
  "otToRoundOff": "ROUND_UP",
  "blockTime": 15,
  "hasExpiry": false,
  "actionDue": 0,
  "calculationType": "SHIFT",
  "calculationMethod": "FLAT",
  "flatAmount": "100",
  "component": ",
  "multiplier": {
    "restDay": "1",
    "offDay": "1",
    "holiday": "1",
    "regularDay": "1",
    "halfDay": "1",
    "all": "1"
  }
}
```
### Delete overtime policy


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/overtime/delete
```

##### Curl

```java
curl -X POST "https://bifrost-us.deskera.com/v1/people/tenants/overtime/delete" -H "accept: application/json" -H "x-access-token: sampletoken" -H "Content-Type: application/json" -d "{\"ids\":[\"635bad3f0ab739d2f218da74\"],\"forcedDelete\":true}"
```

##### Sample Request
```java
{
  "ids": [
    "635bad3f0ab739d2f218da74"
  ],
  "forcedDelete": true
}
```

##### Sample Response
```java
{
  "status": "OK",
  "message": "Deleted {1} document(s) with Id(s) {[635bad3f0ab739d2f218da74]}",
  "errCode": "
}
```
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


### Seach Overtime policies

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


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/overtime/find
```

##### Curl

```java
curl -X POST "https://bifrost-us.deskera.com/v1/people/tenants/overtime/find" -H "accept: application/json" -H "x-access-token: sampletoken" -H "Content-Type: application/json" -d "{\"iamUserIds\":[\"66194\"]}"
```

##### Sample Request
```java
{
  "iamUserIds": [
    "55189"
  ]
}
```

##### Sample Response
```java
{
  "status": "OK",
  "data": [
    {
      "id": "633152f3dbe993639a0b3110",
      "policyName": "OT Policy 1",
      "description": "OT Policy 1",
      "activated": true,
      "effectiveFrom": "2022-08-31T18:30:00Z",
      "status": "ACTIVE",
      "remark": ",
      "employees": [
        {
          "employeeId": "60b734520a2aaa7131f2c588",
          "dateOfAssign": "2022-09-26T00:00:00.000Z"
        },
        {
          "employeeId": "60d4374e32ed46f7fe1eb013",
          "dateOfAssign": "2022-09-26T00:00:00.000Z"
        },
        {
          "employeeId": "627a69e05bb6f9ec5715525c",
          "dateOfAssign": "2022-09-26T00:00:00.000Z"
        }
      ],
      "employeeIamUserIds": [
        "55189",
        "0",
        "0"
      ],
      "applicableToAll": false,
      "breakHours": {
        "restDay": "01:00",
        "offDay": "01:00",
        "holiday": "01:00",
        "regularDay": "01:00",
        "halfDay": "01:00",
        "all": "01:00"
      },
      "maxOvertime": {
        "daily": "02:00",
        "weekly": "10:00",
        "monthly": "40:00",
        "quarterly": "120:00"
      },
      "minHours": "00:30",
      "otToRoundOff": "ROUND_DOWN",
      "blockTime": 30,
      "hasExpiry": false,
      "actionDue": 0,
      "calculationType": "SHIFT",
      "calculationMethod": "FLAT",
      "flatAmount": "5",
      "component": ",
      "employeeDetails": [
      ],
      "eUIMap": {
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "multiplier": {
        "restDay": "2",
        "offDay": "2",
        "holiday": "2",
        "regularDay": "1",
        "halfDay": "1",
        "all": "
      },
      "createdBy": "55189",
      "updatedAt": "1970-01-01T00:00:00Z",
      "updatedBy": "55189",
      "employeeCount": 0
    }
  ],
  "filterConfig": null
}
```
### Manage Overtime multiplier

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
| userIds | query |  | No | [ string ] |
| isCustomFieldFilter | query |  | No | boolean |
| onlyTeamMembers | query |  | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1OvertimePayrollMultiplierResponse](#v1overtimepayrollmultiplierresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/overtime/ot-multiplier
```

##### Curl

```java
curl -X GET "https://bifrost-us.deskera.com/v1/people/tenants/overtime/ot-multiplier" -H "accept: application/json" -H "x-access-token: sampletoken"
```

##### Sample Request
```java

```

##### Sample Response
```java
{
  "status": "OK",
  "overtimePayrollMultiplier": {
    "id": "6331529246f40e1b904e6adb",
    "overtimeMultiplierValues": [
      {
        "value": "1",
        "description": "
      },
      {
        "value": "2",
        "description": "
      },
      {
        "value": "3",
        "description": "
      },
      {
        "value": "4",
        "description": "
      }
    ]
  }
}
```
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


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/overtime/ot-multiplier
```

##### Curl

```java
curl -X PATCH "https://bifrost-us.deskera.com/v1/people/tenants/overtime/ot-multiplier" -H "accept: application/json" -H "x-access-token: sampletoken" -H "Content-Type: application/json" -d "{\"overtimeMultiplierValues\":[{\"value\":\"1\",\"description\":\"\"},{\"value\":\"2\",\"description\":\"\"},{\"value\":\"3\",\"description\":\"\"},{\"value\":\"4.2\",\"description\":\"\"}],\"id\":\"6331529246f40e1b904e6adb\"}"
```

##### Sample Request
```java
{
  "overtimeMultiplierValues": [
    {
      "value": "1",
      "description": "
    },
    {
      "value": "2",
      "description": "
    },
    {
      "value": "3",
      "description": "
    },
    {
      "value": "4.2",
      "description": "
    }
  ],
  "id": "6331529246f40e1b904e6adb"
}
```

##### Sample Response
```java
{
  "status": "OK",
  "overtimePayrollMultiplier": {
    "id": "6331529246f40e1b904e6adb",
    "overtimeMultiplierValues": [
      {
        "value": "1",
        "description": "
      },
      {
        "value": "2",
        "description": "
      },
      {
        "value": "3",
        "description": "
      },
      {
        "value": "4.2",
        "description": "
      }
    ]
  }
}
```
### Fetch Overtime policy by id

#### GET
##### Summary

Get an overtime policy by id

##### Description

Get an overtime policy by id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1OvertimeResponse](#v1overtimeresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/overtime/633152f3dbe993639a0b3110
```

##### Curl

```java
curl -X GET "https://bifrost-us.deskera.com/v1/people/tenants/overtime/633152f3dbe993639a0b3110" -H "accept: application/json" -H "x-access-token: sampletoken"
```

##### Sample Request
```java

```

##### Sample Response
```java
{
  "id": "633152f3dbe993639a0b3110",
  "policyName": "OT Policy 1",
  "description": "OT Policy 1",
  "activated": true,
  "effectiveFrom": "2022-08-31T18:30:00Z",
  "status": "ACTIVE",
  "remark": ",
  "employees": [
    {
      "employeeId": "60b734520a2aaa7131f2c588",
      "dateOfAssign": "2022-09-26T00:00:00.000Z"
    },
    {
      "employeeId": "60d4374e32ed46f7fe1eb013",
      "dateOfAssign": "2022-09-26T00:00:00.000Z"
    },
    {
      "employeeId": "627a69e05bb6f9ec5715525c",
      "dateOfAssign": "2022-09-26T00:00:00.000Z"
    }
  ],
  "employeeIamUserIds": [
  ],
  "applicableToAll": false,
  "breakHours": {
    "restDay": "01:00",
    "offDay": "01:00",
    "holiday": "01:00",
    "regularDay": "01:00",
    "halfDay": "01:00",
    "all": "01:00"
  },
  "maxOvertime": {
    "daily": "02:00",
    "weekly": "10:00",
    "monthly": "40:00",
    "quarterly": "120:00"
  },
  "minHours": "00:30",
  "otToRoundOff": "ROUND_DOWN",
  "blockTime": 30,
  "hasExpiry": false,
  "actionDue": 0,
  "calculationType": "SHIFT",
  "calculationMethod": "FLAT",
  "flatAmount": "5",
  "component": ",
  "employeeDetails": [
    {
      "userId": "60b734520a2aaa7131f2c588",
      "firstName": "Ganesh",
      "lastName": "Karale",
      "iamUserId": "55189"
    },
    {
      "userId": "60d4374e32ed46f7fe1eb013",
      "firstName": "Sandeep",
      "lastName": "Misal",
      "iamUserId": "55728"
    },
    {
      "userId": "627a69e05bb6f9ec5715525c",
      "firstName": "Amit",
      "lastName": "Gunjal",
      "iamUserId": "56844"
    }
  ],
  "eUIMap": {
  },
  "createdAt": "2022-09-26T07:21:23.380Z",
  "multiplier": {
    "restDay": "2",
    "offDay": "2",
    "holiday": "2",
    "regularDay": "1",
    "halfDay": "1",
    "all": "
  },
  "createdBy": "Ganesh Karale (00001)",
  "updatedAt": "2022-09-26T07:21:43.181Z",
  "updatedBy": "Ganesh Karale (00001)",
  "employeeCount": 3
}
```
### Manage shifts

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
| userIds | query |  | No | [ string ] |
| isCustomFieldFilter | query |  | No | boolean |
| onlyTeamMembers | query |  | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetShiftResponse](#v1getshiftresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/shifts?orderBy.field=updatedAt&orderBy.order=desc&currentPage=1&limit=20
```

##### Curl

```java
curl -X GET "https://bifrost-us.deskera.com/v1/people/tenants/shifts?orderBy.field=updatedAt&orderBy.order=desc&currentPage=1&limit=20" -H "accept: application/json" -H "x-access-token: sampletoken"
```

##### Sample Request
```java

```

##### Sample Response
```java
{
  "status": "OK",
  "data": [
    {
      "id": "633a7b71faf6115ea85eb5af",
      "name": "New Shift 2",
      "from": "09:05",
      "to": "17:05",
      "shiftMargin": true,
      "shiftMarginBefore": "00:30",
      "shiftMarginAfter": "00:30",
      "reqdHrsToMarkPresent": "08:00",
      "reqdHrsToMarkHalfPresent": "04:00",
      "applicableTo": false,
      "employees": [
        
      ],
      "isOvertimeEnabled": false,
      "overtimeThreshold": "0",
      "overtimeUnit": "0",
      "overtimeMapping": ",
      "shiftWorkWeek": [
        {
          "day": "MONDAY",
          "workingStatus": "WEEK_DAY",
          "inTime": "09:05",
          "outTime": "17:05",
          "otMapped": [
            
          ]
        },
        {
          "day": "TUESDAY",
          "workingStatus": "WEEK_DAY",
          "inTime": "09:05",
          "outTime": "17:05",
          "otMapped": [
            
          ]
        },
        {
          "day": "WEDNESDAY",
          "workingStatus": "WEEK_DAY",
          "inTime": "09:05",
          "outTime": "17:05",
          "otMapped": [
            
          ]
        },
        {
          "day": "THURSDAY",
          "workingStatus": "OFF_DAY",
          "inTime": "00:00",
          "outTime": "00:00",
          "otMapped": [
            
          ]
        },
        {
          "day": "FRIDAY",
          "workingStatus": "WEEK_DAY",
          "inTime": "09:05",
          "outTime": "17:05",
          "otMapped": [
            
          ]
        },
        {
          "day": "SATURDAY",
          "workingStatus": "WEEK_DAY",
          "inTime": "09:05",
          "outTime": "17:05",
          "otMapped": [
            
          ]
        },
        {
          "day": "SUNDAY",
          "workingStatus": "WEEK_DAY",
          "inTime": "09:05",
          "outTime": "17:05",
          "otMapped": [
            
          ]
        }
      ],
      "employeeDetails": [
        
      ],
      "eUIMap": {
        
      },
      "createdAt": "
    }
  ],
  "filterConfig": {
    "page": "1",
    "numberOfElements": "4",
    "sizePerPage": "20",
    "totalPage": "1",
    "numberOfRecords": "4"
  }
}
```
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


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/shifts
```

##### Curl

```java
curl -X POST "https://bifrost-us.deskera.com/v1/people/tenants/shifts" -H "accept: application/json" -H "x-access-token: sampletoken" -H "Content-Type: application/json" -d "{\"name\":\"Morning Shift\",\"from\":\"07:00\",\"to\":\"15:00\",\"shiftMargin\":true,\"shiftMarginBefore\":\"03:00\",\"shiftMarginAfter\":\"03:00\",\"reqdHrsToMarkPresent\":\"08:00\",\"reqdHrsToMarkHalfPresent\":\"04:00\",\"applicableTo\":false,\"employees\":[\"626a292ceee2302daeee58b1\",\"624595fdb0bc1377fac94575\"],\"shiftWorkWeek\":[{\"day\":\"MONDAY\",\"workingStatus\":\"WEEK_DAY\",\"inTime\":\"07:00\",\"outTime\":\"15:00\"},{\"day\":\"TUESDAY\",\"workingStatus\":\"WEEK_DAY\",\"inTime\":\"07:00\",\"outTime\":\"15:00\"},{\"day\":\"WEDNESDAY\",\"workingStatus\":\"WEEK_DAY\",\"inTime\":\"07:00\",\"outTime\":\"15:00\"},{\"day\":\"THURSDAY\",\"workingStatus\":\"OFF_DAY\",\"inTime\":\"00:00\",\"outTime\":\"00:00\"},{\"day\":\"FRIDAY\",\"workingStatus\":\"WEEK_DAY\",\"inTime\":\"07:00\",\"outTime\":\"15:00\"},{\"day\":\"SATURDAY\",\"workingStatus\":\"WEEK_DAY\",\"inTime\":\"07:00\",\"outTime\":\"15:00\"},{\"day\":\"SUNDAY\",\"workingStatus\":\"WEEK_DAY\",\"inTime\":\"07:00\",\"outTime\":\"15:00\"}]}"
```

##### Sample Request
```java
{
  "name": "Morning Shift",
  "from": "07:00",
  "to": "15:00",
  "shiftMargin": true,
  "shiftMarginBefore": "03:00",
  "shiftMarginAfter": "03:00",
  "reqdHrsToMarkPresent": "08:00",
  "reqdHrsToMarkHalfPresent": "04:00",
  "applicableTo": false,
  "employees": [
    "626a292ceee2302daeee58b1",
    "624595fdb0bc1377fac94575"
  ],
  "shiftWorkWeek": [
    {
      "day": "MONDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00"
    },
    {
      "day": "TUESDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00"
    },
    {
      "day": "WEDNESDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00"
    },
    {
      "day": "THURSDAY",
      "workingStatus": "OFF_DAY",
      "inTime": "00:00",
      "outTime": "00:00"
    },
    {
      "day": "FRIDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00"
    },
    {
      "day": "SATURDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00"
    },
    {
      "day": "SUNDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00"
    }
  ]
}
```

##### Sample Response
```java
{
  "id": "635bba8e0ab739d2f218da7b",
  "name": "Morning Shift",
  "from": "07:00",
  "to": "15:00",
  "shiftMargin": true,
  "shiftMarginBefore": "03:00",
  "shiftMarginAfter": "03:00",
  "reqdHrsToMarkPresent": "08:00",
  "reqdHrsToMarkHalfPresent": "04:00",
  "applicableTo": false,
  "employees": [
  ],
  "isOvertimeEnabled": false,
  "overtimeThreshold": "0",
  "overtimeUnit": "0",
  "overtimeMapping": ",
  "shiftWorkWeek": [
    {
      "day": "MONDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00",
      "otMapped": [
      ]
    },
    {
      "day": "TUESDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00",
      "otMapped": [
      ]
    },
    {
      "day": "WEDNESDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00",
      "otMapped": [
      ]
    },
    {
      "day": "THURSDAY",
      "workingStatus": "OFF_DAY",
      "inTime": "00:00",
      "outTime": "00:00",
      "otMapped": [
      ]
    },
    {
      "day": "FRIDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00",
      "otMapped": [
      ]
    },
    {
      "day": "SATURDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00",
      "otMapped": [
      ]
    },
    {
      "day": "SUNDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00",
      "otMapped": [
      ]
    }
  ]
}
```
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

"

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/shifts
```

##### Curl

```java
curl -X PATCH "https://bifrost-us.deskera.com/v1/people/tenants/shifts" -H "accept: application/json" -H "x-access-token: sampletoken" -H "Content-Type: application/json" -d "{\"name\":\"Morning Shift\",\"from\":\"07:00\",\"to\":\"15:00\",\"shiftMargin\":true,\"shiftMarginBefore\":\"03:00\",\"shiftMarginAfter\":\"03:00\",\"reqdHrsToMarkPresent\":\"08:00\",\"reqdHrsToMarkHalfPresent\":\"04:00\",\"applicableTo\":false,\"employees\":[\"626a292ceee2302daeee58b1\",\"624595fdb0bc1377fac94575\"],\"shiftWorkWeek\":[{\"day\":\"MONDAY\",\"workingStatus\":\"WEEK_DAY\",\"inTime\":\"07:00\",\"outTime\":\"15:00\"},{\"day\":\"TUESDAY\",\"workingStatus\":\"WEEK_DAY\",\"inTime\":\"07:00\",\"outTime\":\"15:00\"},{\"day\":\"WEDNESDAY\",\"workingStatus\":\"WEEK_DAY\",\"inTime\":\"07:00\",\"outTime\":\"15:00\"},{\"day\":\"THURSDAY\",\"workingStatus\":\"OFF_DAY\",\"inTime\":\"00:00\",\"outTime\":\"00:00\"},{\"day\":\"FRIDAY\",\"workingStatus\":\"WEEK_DAY\",\"inTime\":\"07:00\",\"outTime\":\"15:00\"},{\"day\":\"SATURDAY\",\"workingStatus\":\"WEEK_DAY\",\"inTime\":\"07:00\",\"outTime\":\"15:00\"},{\"day\":\"SUNDAY\",\"workingStatus\":\"WEEK_DAY\",\"inTime\":\"07:00\",\"outTime\":\"15:00\"}]}"
```

##### Sample Request
```java
{
  "name": "Morning Shift",
  "from": "07:00",
  "to": "15:00",
  "shiftMargin": true,
  "shiftMarginBefore": "03:00",
  "shiftMarginAfter": "03:00",
  "reqdHrsToMarkPresent": "08:00",
  "reqdHrsToMarkHalfPresent": "04:00",
  "id": "635bba8e0ab739d2f218da7b",
  "applicableTo": false,
  "employees": [
    "626a292ceee2302daeee58b1",
    "624595fdb0bc1377fac94575"
  ],
  "shiftWorkWeek": [
    {
      "day": "MONDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00"
    },
    {
      "day": "TUESDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00"
    },
    {
      "day": "WEDNESDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00"
    },
    {
      "day": "THURSDAY",
      "workingStatus": "OFF_DAY",
      "inTime": "00:00",
      "outTime": "00:00"
    },
    {
      "day": "FRIDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00"
    },
    {
      "day": "SATURDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00"
    },
    {
      "day": "SUNDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00"
    }
  ]
}
```

##### Sample Response
```java
{
  "id": "635bba8e0ab739d2f218da7b",
  "name": "Morning Shift",
  "from": "07:00",
  "to": "15:00",
  "shiftMargin": true,
  "shiftMarginBefore": "03:00",
  "shiftMarginAfter": "03:00",
  "reqdHrsToMarkPresent": "08:00",
  "reqdHrsToMarkHalfPresent": "04:00",
  "applicableTo": false,
  "employees": [
  ],
  "isOvertimeEnabled": false,
  "overtimeThreshold": "0",
  "overtimeUnit": "0",
  "overtimeMapping": ",
  "shiftWorkWeek": [
    {
      "day": "MONDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00",
      "otMapped": [
      ]
    },
    {
      "day": "TUESDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00",
      "otMapped": [
      ]
    },
    {
      "day": "WEDNESDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00",
      "otMapped": [
      ]
    },
    {
      "day": "THURSDAY",
      "workingStatus": "OFF_DAY",
      "inTime": "00:00",
      "outTime": "00:00",
      "otMapped": [
      ]
    },
    {
      "day": "FRIDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00",
      "otMapped": [
      ]
    },
    {
      "day": "SATURDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00",
      "otMapped": [
      ]
    },
    {
      "day": "SUNDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "07:00",
      "outTime": "15:00",
      "otMapped": [
      ]
    }
  ]
}
```
### Delete shifts

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


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/shifts/delete
```

##### Curl

```java
curl -X POST "https://bifrost-us.deskera.com/v1/people/tenants/shifts/delete" -H "accept: application/json" -H "x-access-token: sampletoken" -H "Content-Type: application/json" -d "{\"ids\":[\"635bba8e0ab739d2f218da7b\"]}"
```

##### Sample Request
```java
{
  "ids": [
    "635bba8e0ab739d2f218da7b"
  ]
}
```

##### Sample Response
```java
{
  "status": "OK",
  "message": "Deleted {1} document(s) with Id(s) {[635bba8e0ab739d2f218da7b]}",
  "errCode": ""
}
```

### Fetch shifts by id

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

"

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/shifts/633aa30d7ee86486e5858ef9
```

##### Curl

```java
curl -X GET "https://bifrost-us.deskera.com/v1/people/tenants/shifts/633aa30d7ee86486e5858ef9" -H "accept: application/json" -H "x-access-token: sampletoken"
```

##### Sample Request
```java

```

##### Sample Response
```java
{
  "id": "633aa30d7ee86486e5858ef9",
  "name": "New",
  "from": "09:00",
  "to": "16:00",
  "shiftMargin": true,
  "shiftMarginBefore": "01:00",
  "shiftMarginAfter": "02:00",
  "reqdHrsToMarkPresent": "07:00",
  "reqdHrsToMarkHalfPresent": "03:30",
  "applicableTo": false,
  "employees": [
    {
      "employeeId": "627a69e05bb6f9ec5715525c",
      "dateOfAssign": "2022-10-03T00:00:00.000Z"
    },
    {
      "employeeId": "626a292ceee2302daeee58b1",
      "dateOfAssign": "2022-10-28T00:00:00.000Z"
    }
  ],
  "isOvertimeEnabled": false,
  "overtimeThreshold": "0",
  "overtimeUnit": "0",
  "overtimeMapping": "",
  "shiftWorkWeek": [
    {
      "day": "MONDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "10:00",
      "outTime": "16:00",
      "otMapped": [
      ]
    },
    {
      "day": "TUESDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "10:00",
      "outTime": "16:00",
      "otMapped": [
      ]
    },
    {
      "day": "WEDNESDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "09:00",
      "outTime": "17:00",
      "otMapped": [
      ]
    },
    {
      "day": "THURSDAY",
      "workingStatus": "OFF_DAY",
      "inTime": "00:00",
      "outTime": "00:00",
      "otMapped": [
      ]
    },
    {
      "day": "FRIDAY",
      "workingStatus": "OFF_DAY",
      "inTime": "09:00",
      "outTime": "16:00",
      "otMapped": [
      ]
    },
    {
      "day": "SATURDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "09:00",
      "outTime": "16:00",
      "otMapped": [
      ]
    },
    {
      "day": "SUNDAY",
      "workingStatus": "WEEK_DAY",
      "inTime": "09:00",
      "outTime": "16:00",
      "otMapped": [
      ]
    }
  ],
  "employeeDetails": [
    {
      "userId": "626a292ceee2302daeee58b1",
      "firstName": "Shubham",
      "lastName": "Parihar",
      "iamUserId": "59466"
    },
    {
      "userId": "627a69e05bb6f9ec5715525c",
      "firstName": "Amit",
      "lastName": "Gunjal",
      "iamUserId": "56844"
    }
  ],
  "eUIMap": {
  },
  "createdAt": ""
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
| key | string |  | No |

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
| multiplier | [v1OvertimeMultiplierMappings](#v1overtimemultipliermappings) |  | No |

#### v1OvertimeMultiplierMappings

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| restDay | string |  | No |
| offDay | string |  | No |
| holiday | string |  | No |
| regularDay | string |  | No |
| halfDay | string |  | No |
| all | string |  | No |

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
| createdAt | dateTime |  | No |
| multiplier | [v1OvertimeMultiplierMappings](#v1overtimemultipliermappings) |  | No |
| createdBy | string |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | string |  | No |
| employeeCount | long |  | No |

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
