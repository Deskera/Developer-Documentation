---
id: users
title: Users
sidebar_label: Users
---

### Manage Users

#### GET
##### Summary

Get all users

##### Description

Get list of all users with pagination.

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
| 200 | A successful response. | [v1GetUsersResponse](#v1getusersresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users?limit=20&currentPage=1&order=desc&field=_id
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/users?limit=20&currentPage=1&order=desc&field=_id' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampleaccesstoken'
```

##### Sample Request
```java
No Request Body
```

##### Sample Response
```
{
  "status": "OK",
  "users": [
    {
      "userId": "635b6e005ced530c2f3be9dd",
      "firstName": "test",
      "lastName": "user",
      "designation": "qa",
      "emailId": "jkdfhkj@getnada.com",
      "contact": ",
      "gender": ",
      "profileImagePath": ",
      "profileImageRelativePath": ",
      "organizationName": "malaysia",
      "username": ",
      "tenantId": "634f74cdcc648ad3b50bc1e9",
      "name": "test user",
      "employeeId": "00006",
      "employeeType": "0",
      "address": {
        "addressLine1": ",
        "addressLine2": ",
        "zipCode": ",
        "city": ",
        "state": ",
        "country": "MY",
        "suburb": ",
        "county": "
      },
      "nationality": ",
      "department": ",
      "iamUserId": "66195",
      "erpTenantId": "75630",
      "dateOfJoining": "2022-03-09T00:00:00.000Z",
      "dateOfConfirmation": "2022-03-09T00:00:00.000Z",
      "status": "active",
      "maritalStatus": "married",
      "appName": ",
      "roles": [
        {
          "roleId": "5f4fd64782e6aa8ee90378ee",
          "name": "USER",
          "appName": "PEOPLE",
          "policies": []
        }
      ],
      "teams": [
        {
          "teamId": "634f74cdcc648ad3b50bc1eb",
          "name": "Default Team",
          "createdAt": "2022-10-18T04:22:59.719Z",
          "members": [
            {
              "userId": "634f74cdcc648ad3b50bc1f4",
              "iamUserId": "65973",
              "firstName": "sonali_compoff@temp.deskera.xyz",
              "lastName": "kk",
              "employeeId": "00001",
              "roles": [
                "MANAGER"
              ]
            },
            {
              "userId": "634f7738e0e4d94bdec23f71",
              "iamUserId": "51127",
              "firstName": "Tom",
              "lastName": "Brady",
              "employeeId": "00002",
              "roles": [
                "USER"
              ]
            },
            {
              "userId": "634f7738e0e4d94bdec23f73",
              "iamUserId": "46121",
              "firstName": "ABDALLAH",
              "lastName": "ZAID",
              "employeeId": "00003",
              "roles": [
                "USER"
              ]
            },
            {
              "userId": "634f7739e0e4d94bdec23f75",
              "iamUserId": "46123",
              "firstName": "Felicity",
              "lastName": "Howard",
              "employeeId": "00004",
              "roles": [
                "USER"
              ]
            },
            {
              "userId": "634f7739e0e4d94bdec23f77",
              "iamUserId": "56969",
              "firstName": "Simon",
              "lastName": "Chua",
              "employeeId": "00005",
              "roles": [
                "USER"
              ]
            },
            {
              "userId": "635b6e005ced530c2f3be9dd",
              "iamUserId": "66195",
              "firstName": "test",
              "lastName": "user",
              "employeeId": "00006",
              "roles": [
                "USER"
              ]
            }
          ],
          "status": "active",
          "type": "default"
        }
      ],
      "approvers": [
        {
          "firstName": "sonali_compoff@temp.deskera.xyz",
          "lastName": "kk",
          "designation": "a",
          "emailId": "sonali_compoff@temp.deskera.xyz",
          "iamUserId": "65973"
        }
      ],
      "countryCode": "MY",
      "hasComponents": true,
      "components": [],
      "hasCompliance": true,
      "compliance": {
        "@type": "type.googleapis.com/v1.MYCompliance",
        "residenceStatus": "malaysian",
        "icNumber": "123323-23-3333",
        "passportNumber": ",
        "workerStatus": "normal",
        "nationality": "afghan",
        "countryOfOrigin": "AO",
        "race": "others",
        "religion": ",
        "epfNumber": "43",
        "epfContribution": true,
        "epfMemberBeforeAugust": false,
        "employeeEpfRate": 11,
        "additionalEmployeeRate": 0,
        "employerEpfRate": 0,
        "additionalEmployerRate": 0,
        "pcbNumber": ",
        "socsoCategory": ",
        "eisContribution": true,
        "pcbBorneByEmployer": false,
        "disabilityStatus": "notdisabled",
        "disabilityStatusSpouse": "notdisabled",
        "havingChildren": true,
        "spouseWorking": false,
        "numberOfQualifyingChildren": 0,
        "previousEmployerRemuneration": 0,
        "previousEmployerEpfContribution": 0,
        "previousEmployerMtdAmount": 0,
        "previousEmployerTaxReliefDeduction": 0,
        "taxExemption": false,
        "bikContribution": false,
        "bikAmount": 0,
        "socsoEmployee": ",
        "socsoEmployerContributionOnly": false,
        "numberOfChildrenAbove18ReceivingDegreeOutsideMalaysia": 1,
        "numberOfChildrenAbove18ReceivingDiplomaInMalaysia": 0,
        "numberOfChildrenUnder18": 0,
        "numberOfDisabledChildren": 0,
        "numberOfDisabledChildrenStudying": 0
      },
      "dateOfTermination": ",
      "dateOfBirth": "1998-10-07T00:00:00.000Z",
      "passportNumber": ",
      "compensation": 45000,
      "compensationPeriod": "30",
      "compensationCurrency": "MYR",
      "paymentDetails": {
        "bank": ",
        "bankId": ",
        "paymentMethod": "cash",
        "accountType": ",
        "routingNumber": ",
        "accountNumber": ",
        "branchCode": ",
        "branchName": ",
        "ifsc": ",
        "upi": ",
        "transitNumber": ",
        "institutionNumber": "
      },
      "profileStages": {
        "employeeDetails": false,
        "paymentDetails": false
      },
      "isTerminated": false,
      "title": ",
      "middleName": ",
      "displayName": ",
      "contractorType": ",
      "type": ",
      "documents": [],
      "createdAt": "2022-10-27T12:06:56Z",
      "employerIdentificationNumber": ",
      "tenantCountryCode": ",
      "tenantCurrencyCode": ",
      "terminationStage": ",
      "hasBenefits": false,
      "benefits": [],
      "socialSecurityNumber": ",
      "directDepositConsent": false,
      "consentMailSend": false,
      "hasSalaryAdvance": false,
      "salaryAdvance": null,
      "effectiveCompensations": [],
      "isEffectiveSalary": false,
      "passportCountry": ",
      "ctc": 0,
      "deleted": false,
      "isImported": false,
      "announcements": [],
      "isInCompleteProfile": false,
      "inCompleteFields": [],
      "isContactUpdated": false,
      "beneficiaryId": ",
      "customFieldData": [],
      "aliasName": ",
      "beneficiaryStatus": ",
      "beneficiaryReason": ",
      "makePayroll": false,
      "componentGroup": ",
      "inviteUserToFillInfo": false,
      "hasDocuments": false,
      "locationValue": ",
      "cnfrmDateUpdated": false,
      "isFromKafka": false,
      "tenantUserId": "0",
      "documentSequenceId": ",
      "customFields": {},
      "prevDateOfJoining": [],
      "isRehire": false
    }
  ],
  "filterConfig": {
    "page": "1",
    "numberOfElements": "1",
    "sizePerPage": "1",
    "totalPage": "6",
    "numberOfRecords": "6"
  },
  "beneficiariesToAdd": "0"
}
```
#### POST
##### Summary

Add a user

##### Description

Add a new user.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1User](#v1user) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetUserResponse](#v1getuserresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users
```

##### Curl

```java
curl -X 'POST' \
  'https://bifrost-us.deskera.com/v1/people/users' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken' \
  -H 'Content-Type: application/json' \
  -d '{
    "firstName": "Test",
    "lastName": "01",
    "name": "Test 01",
    "employeeId": ",
    "documentSequenceId": "63467ae3b0c1b8ae61f1563a",
    "aliasName": ",
    "designation": "Designer",
    "emailId": "test@temp.deskera.xyz",
    "contact": "+911111111111",
    "gender": "male",
    "employeeType": 1,
    "organizationName": "India",
    "countryCode": "IN",
    "compensation": 0,
    "compensationCurrency": "INR",
    "compensationPeriod": "30",
    "dateOfBirth": "2001-10-18T00:00:00.000Z",
    "maritalStatus": "single",
    "passportNumber": "123465423456",
    "passportCountry": "IN",
    "dateOfJoining": "2022-09-02T00:00:00.000Z",
    "dateOfConfirmation": "2022-10-01T00:00:00.000Z",
    "address": {
        "addressLine1": "SHahu",
        "zipCode": "422009",
        "city": "Nasik",
        "state": "MH",
        "country": "IN"
    },
    "paymentDetails": {
        "paymentMethod": "directDeposit",
        "accountType": "currentAccount",
        "routingNumber": "12321",
        "accountNumber": "1331133",
        "bank": ",
        "bankId": ",
        "upi": ",
        "ifsc": "ABCD0123122"
    },
    "isEffectiveSalary": true,
    "effectiveCompensations": [
        {
            "compensation": "50000",
            "period": "30",
            "effectiveDate": "2022-10-01",
            "isVisible": true
        }
    ],
    "ctc": "10000",
    "customFieldData": [],
    "inviteUserToFillInfo": false,
    "hasComponents": false,
    "hasCompliance": false,
    "makePayroll": true
}'
```

##### Sample Request
```java
{
    "firstName": "Test",
    "lastName": "01",
    "name": "Test 01",
    "employeeId": ",
    "documentSequenceId": "63467ae3b0c1b8ae61f1563a",
    "aliasName": ",
    "designation": "Designer",
    "emailId": "test@temp.deskera.xyz",
    "contact": "+911111111111",
    "gender": "male",
    "employeeType": 1,
    "organizationName": "India",
    "countryCode": "IN",
    "compensation": 0,
    "compensationCurrency": "INR",
    "compensationPeriod": "30",
    "dateOfBirth": "2001-10-18T00:00:00.000Z",
    "maritalStatus": "single",
    "passportNumber": "123465423456",
    "passportCountry": "IN",
    "dateOfJoining": "2022-09-02T00:00:00.000Z",
    "dateOfConfirmation": "2022-10-01T00:00:00.000Z",
    "address": {
        "addressLine1": "SHahu",
        "zipCode": "422009",
        "city": "Nasik",
        "state": "MH",
        "country": "IN"
    },
    "paymentDetails": {
        "paymentMethod": "directDeposit",
        "accountType": "currentAccount",
        "routingNumber": "12321",
        "accountNumber": "1331133",
        "bank": ",
        "bankId": ",
        "upi": ",
        "ifsc": "ABCD0123122"
    },
    "isEffectiveSalary": true,
    "effectiveCompensations": [
        {
            "compensation": "50000",
            "period": "30",
            "effectiveDate": "2022-10-01",
            "isVisible": true
        }
    ],
    "ctc": "10000",
    "customFieldData": [],
    "inviteUserToFillInfo": false,
    "hasComponents": false,
    "hasCompliance": false,
    "makePayroll": true
}
```

##### Sample Response
```java
{
  "status": "OK",
  "user": {
    "userId": "635bbfb25ced530c2f3be9e4",
    "firstName": "Test",
    "lastName": "01",
    "designation": "Designer",
    "emailId": "test@temp.deskera.xyz",
    "contact": "+911111111111",
    "gender": "male",
    "profileImagePath": ",
    "profileImageRelativePath": ",
    "organizationName": "India",
    "username": ",
    "tenantId": "63467ae3af49e0abcbb5da14",
    "name": "Test 01",
    "employeeId": "00006",
    "employeeType": "1",
    "address": {
      "addressLine1": "SHahu",
      "addressLine2": ",
      "zipCode": "422009",
      "city": "Nasik",
      "state": "MH",
      "country": "IN",
      "suburb": ",
      "county": "
    },
    "nationality": ",
    "department": ",
    "iamUserId": "56518",
    "erpTenantId": "75584",
    "dateOfJoining": "2022-09-02T00:00:00.000Z",
    "dateOfConfirmation": "2022-10-01T00:00:00.000Z",
    "status": "active",
    "maritalStatus": "single",
    "appName": ",
    "roles": [
    ],
    "teams": [
      {
        "teamId": "63467ae3af49e0abcbb5da16",
        "name": "Default Team",
        "createdAt": "1970-01-01T00:00:00Z",
        "members": [
          {
            "userId": "63467ae3af49e0abcbb5da1f",
            "iamUserId": "0",
            "firstName": ",
            "lastName": ",
            "employeeId": ",
            "roles": [
              "MANAGER"
            ]
          },
          {
            "userId": "63513fa4a529443b09b3405d",
            "iamUserId": "0",
            "firstName": ",
            "lastName": ",
            "employeeId": ",
            "roles": [
              "USER"
            ]
          },
          {
            "userId": "63513fa5a529443b09b3405f",
            "iamUserId": "0",
            "firstName": ",
            "lastName": ",
            "employeeId": ",
            "roles": [
              "USER"
            ]
          },
          {
            "userId": "63513fa5a529443b09b34061",
            "iamUserId": "0",
            "firstName": ",
            "lastName": ",
            "employeeId": ",
            "roles": [
              "USER"
            ]
          },
          {
            "userId": "63513fa5a529443b09b34063",
            "iamUserId": "0",
            "firstName": ",
            "lastName": ",
            "employeeId": ",
            "roles": [
              "USER"
            ]
          },
          {
            "userId": "635bbfb25ced530c2f3be9e4",
            "iamUserId": "0",
            "firstName": ",
            "lastName": ",
            "employeeId": ",
            "roles": [
              "USER"
            ]
          }
        ],
        "status": "active",
        "type": "default"
      }
    ],
    "approvers": [
    ],
    "countryCode": "IN",
    "hasComponents": true,
    "components": [
    ],
    "hasCompliance": false,
    "compliance": null,
    "dateOfTermination": ",
    "dateOfBirth": "2001-10-18T00:00:00.000Z",
    "passportNumber": "123465423456",
    "compensation": 0,
    "compensationPeriod": "30",
    "compensationCurrency": "INR",
    "paymentDetails": {
      "bank": ",
      "bankId": ",
      "paymentMethod": "directDeposit",
      "accountType": "currentAccount",
      "routingNumber": "12321",
      "accountNumber": "1331133",
      "branchCode": ",
      "branchName": ",
      "ifsc": "ABCD0123122",
      "upi": ",
      "transitNumber": ",
      "institutionNumber": "
    },
    "profileStages": {
      "employeeDetails": false,
      "paymentDetails": false,
      "witholdingSetup": false,
      "filingAuthorization": false
    },
    "isTerminated": false,
    "title": ",
    "middleName": ",
    "displayName": ",
    "contractorType": ",
    "type": ",
    "documents": [
    ],
    "createdAt": "2022-10-27T12:06:56Z",
    "employerIdentificationNumber": ",
    "tenantCountryCode": ",
    "tenantCurrencyCode": ",
    "terminationStage": ",
    "hasBenefits": false,
    "benefits": [
    ],
    "socialSecurityNumber": ",
    "directDepositConsent": false,
    "consentMailSend": false,
    "hasSalaryAdvance": false,
    "salaryAdvance": null,
    "effectiveCompensations": [
      {
        "effectiveDate": "2022-10-01",
        "compensation": 50000,
        "period": "30",
        "isVisible": true,
        "basicCompensation": 0
      }
    ],
    "isEffectiveSalary": true,
    "passportCountry": "IN",
    "ctc": 10000,
    "deleted": false,
    "isImported": false,
    "announcements": [
    ],
    "isInCompleteProfile": false,
    "inCompleteFields": [
    ],
    "isContactUpdated": false,
    "beneficiaryId": ",
    "customFieldData": [
    ],
    "aliasName": ",
    "beneficiaryStatus": ",
    "beneficiaryReason": ",
    "makePayroll": true,
    "componentGroup": ",
    "inviteUserToFillInfo": false,
    "hasDocuments": false,
    "locationValue": ",
    "cnfrmDateUpdated": false,
    "checkHqError": null,
    "checkEmployeeId": ",
    "documentSequenceId": "63467ae3b0c1b8ae61f1563a",
    "isFromKafka": false,
    "tenantUserId": "0",
    "customFields": {
    },
    "prevDateOfJoining": [
    ],
    "isRehire": false
  },
  "errors": [
  ],
  "httpStatusCode": "0",
  "error": null
}
```
#### PUT
##### Summary

Update a user

##### Description

Update a user.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1User](#v1user) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetUserResponse](#v1getuserresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |



##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users
```

##### Curl

```java
curl -X 'PUT' \
  'https://bifrost-us.deskera.com/v1/people/users' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken' \
  -H 'Content-Type: application/json' \
  -d '{
  "firstName": "Test",
  "lastName": "01",
  "name": "Test 01",
  "employeeId": "00006",
  "aliasName": ",
  "designation": "Designer",
  "emailId": "test@temp.deskera.xyz",
  "contact": "+911111111111",
  "gender": "male",
  "employeeType": 1,
  "organizationName": "India",
  "countryCode": "IN",
  "compensation": 0,
  "compensationCurrency": "INR",
  "compensationPeriod": "30",
  "dateOfBirth": "2001-10-18T00:00:00.000Z",
  "maritalStatus": "single",
  "passportNumber": "123465423456",
  "passportCountry": "IN",
  "dateOfJoining": "2022-09-02T00:00:00.000Z",
  "dateOfConfirmation": "2022-10-01T00:00:00.000Z",
  "address": {
    "addressLine1": "SHahu",
    "addressLine2": ",
    "zipCode": "422009",
    "city": "Nasik",
    "state": "MH",
    "country": "IN",
    "suburb": ",
    "county": "
  },
  "paymentDetails": {
    "paymentMethod": "directDeposit",
    "accountType": "currentAccount",
    "routingNumber": "12321",
    "accountNumber": "1331133",
    "bank": ",
    "bankId": ",
    "upi": ",
    "ifsc": "ABCD0123122"
  },
  "isEffectiveSalary": true,
  "effectiveCompensations": [
    {
      "effectiveDate": "2022-10-01",
      "compensation": 50000,
      "period": "30",
      "isVisible": false,
      "basicCompensation": 0
    },
    {
      "compensation": 50000,
      "period": "30",
      "effectiveDate": "2022-10-01",
      "isVisible": true
    }
  ],
  "ctc": "10000",
  "customFieldData": [
    
  ],
  "inviteUserToFillInfo": false,
  "hasComponents": false,
  "hasCompliance": false,
  "userId": "635bbfb25ced530c2f3be9e4"
}'
```

##### Sample Request
```java
{
  "firstName": "Test",
  "lastName": "01",
  "name": "Test 01",
  "employeeId": "00006",
  "aliasName": ",
  "designation": "Designer",
  "emailId": "test@temp.deskera.xyz",
  "contact": "+911111111111",
  "gender": "male",
  "employeeType": 1,
  "organizationName": "India",
  "countryCode": "IN",
  "compensation": 0,
  "compensationCurrency": "INR",
  "compensationPeriod": "30",
  "dateOfBirth": "2001-10-18T00:00:00.000Z",
  "maritalStatus": "single",
  "passportNumber": "123465423456",
  "passportCountry": "IN",
  "dateOfJoining": "2022-09-02T00:00:00.000Z",
  "dateOfConfirmation": "2022-10-01T00:00:00.000Z",
  "address": {
    "addressLine1": "SHahu",
    "addressLine2": ",
    "zipCode": "422009",
    "city": "Nasik",
    "state": "MH",
    "country": "IN",
    "suburb": ",
    "county": "
  },
  "paymentDetails": {
    "paymentMethod": "directDeposit",
    "accountType": "currentAccount",
    "routingNumber": "12321",
    "accountNumber": "1331133",
    "bank": ",
    "bankId": ",
    "upi": ",
    "ifsc": "ABCD0123122"
  },
  "isEffectiveSalary": true,
  "effectiveCompensations": [
    {
      "effectiveDate": "2022-10-01",
      "compensation": 50000,
      "period": "30",
      "isVisible": false,
      "basicCompensation": 0
    },
    {
      "compensation": 50000,
      "period": "30",
      "effectiveDate": "2022-10-01",
      "isVisible": true
    }
  ],
  "ctc": "10000",
  "customFieldData": [
    
  ],
  "inviteUserToFillInfo": false,
  "hasComponents": false,
  "hasCompliance": false,
  "userId": "635bbfb25ced530c2f3be9e4"
}
```

##### Sample Response
```java
{
  "status": "OK",
  "user": {
    "userId": "635bbfb25ced530c2f3be9e4",
    "firstName": "Test",
    "lastName": "01",
    "designation": "Designer",
    "emailId": "test@temp.deskera.xyz",
    "contact": "+911111111111",
    "gender": "male",
    "profileImagePath": ",
    "profileImageRelativePath": ",
    "organizationName": "India",
    "username": ",
    "tenantId": "63467ae3af49e0abcbb5da14",
    "name": "Test 01",
    "employeeId": "00006",
    "employeeType": "1",
    "address": {
      "addressLine1": "SHahu",
      "addressLine2": ",
      "zipCode": "422009",
      "city": "Nasik",
      "state": "MH",
      "country": "IN",
      "suburb": ",
      "county": "
    },
    "nationality": ",
    "department": ",
    "iamUserId": "56518",
    "erpTenantId": "75584",
    "dateOfJoining": "2022-09-02T00:00:00.000Z",
    "dateOfConfirmation": "2022-10-01T00:00:00.000Z",
    "status": "active",
    "maritalStatus": "single",
    "appName": ",
    "roles": [
    ],
    "teams": [
    ],
    "approvers": [
    ],
    "countryCode": "IN",
    "hasComponents": true,
    "components": [
    ],
    "hasCompliance": false,
    "compliance": null,
    "dateOfTermination": ",
    "dateOfBirth": "2001-10-18T00:00:00.000Z",
    "passportNumber": "123465423456",
    "compensation": 0,
    "compensationPeriod": "30",
    "compensationCurrency": "INR",
    "paymentDetails": {
      "bank": ",
      "bankId": ",
      "paymentMethod": "directDeposit",
      "accountType": "currentAccount",
      "routingNumber": "12321",
      "accountNumber": "1331133",
      "branchCode": ",
      "branchName": ",
      "ifsc": "ABCD0123122",
      "upi": ",
      "transitNumber": ",
      "institutionNumber": "
    },
    "profileStages": {
      "employeeDetails": false,
      "paymentDetails": false,
      "witholdingSetup": false,
      "filingAuthorization": false
    },
    "isTerminated": false,
    "title": ",
    "middleName": ",
    "displayName": ",
    "contractorType": ",
    "type": ",
    "documents": [
    ],
    "createdAt": ",
    "employerIdentificationNumber": ",
    "tenantCountryCode": ",
    "tenantCurrencyCode": ",
    "terminationStage": ",
    "hasBenefits": false,
    "benefits": [
    ],
    "socialSecurityNumber": ",
    "directDepositConsent": false,
    "consentMailSend": false,
    "hasSalaryAdvance": false,
    "salaryAdvance": null,
    "effectiveCompensations": [
      {
        "effectiveDate": "2022-10-01",
        "compensation": 50000,
        "period": "30",
        "isVisible": false,
        "basicCompensation": 0
      },
      {
        "effectiveDate": "2022-10-01",
        "compensation": 50000,
        "period": "30",
        "isVisible": true,
        "basicCompensation": 0
      }
    ],
    "isEffectiveSalary": true,
    "passportCountry": "IN",
    "ctc": 10000,
    "deleted": false,
    "isImported": false,
    "announcements": [
    ],
    "isInCompleteProfile": false,
    "inCompleteFields": [
    ],
    "isContactUpdated": false,
    "beneficiaryId": ",
    "customFieldData": [
    ],
    "aliasName": ",
    "beneficiaryStatus": ",
    "beneficiaryReason": ",
    "makePayroll": false,
    "componentGroup": ",
    "inviteUserToFillInfo": false,
    "hasDocuments": false,
    "locationValue": ",
    "cnfrmDateUpdated": false,
    "checkHqError": null,
    "checkEmployeeId": ",
    "documentSequenceId": ",
    "isFromKafka": false,
    "tenantUserId": "0",
    "customFields": {
    },
    "prevDateOfJoining": [
    ],
    "isRehire": false
  },
  "errors": [
  ],
  "httpStatusCode": "0",
  "error": null
}
```
#### PATCH
##### Summary

Patch a user

##### Description

Patch a user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1User](#v1user) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetUserResponse](#v1getuserresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


### Bulk Delete users

#### POST
##### Summary

Bulk Delete a user by their ids

##### Description

Delete a users by ids.

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
https://bifrost-us.deskera.com/v1/people/users/delete/bulk
```

##### Curl

```java
curl -X 'POST' \
  'https://bifrost-us.deskera.com/v1/people/users/delete/bulk' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken' \
  -H 'Content-Type: application/json' \
  -d '{
  "ids": [
    "63513fa5a529443b09b34063"
  ],
  "forcedDelete": true
}'
```

##### Sample Request
```java
{
  "ids": [
    "63513fa5a529443b09b34063"
  ],
  "forcedDelete": true
}
```

##### Sample Response
```java
{
  "status": "OK",
  "message": "0 Document deleted successfully.",
  "errCode": "
}
```

### Search Users

#### POST
##### Summary

Get all users

##### Description

Get list of all users with pagination.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1UserFilter](#v1userfilter) |
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
| 200 | A successful response. | [v1GetUsersResponse](#v1getusersresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users/filtered-users?limit=20&currentPage=1&includeDraft=true&ignTeamData=true&order=desc&field=_id
```

##### Curl

```java
curl -X 'POST' \
  'https://bifrost-us.deskera.com/v1/people/users/filtered-users?limit=20&currentPage=1&includeDraft=true&ignTeamData=true&order=desc&field=_id' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken' \
  -H 'Content-Type: application/json' \
  -d '{
  "conditions": [
    {
      "colId": "name",
      "value": "simon",
      "opr": "c",
      "key": "
    }
  ]
}'
```

##### Sample Request
```java
{
  "conditions": [
    {
      "colId": "name",
      "value": "simon",
      "opr": "c",
      "key": "
    }
  ]
}
```

##### Sample Response
```java
{
  "status": "OK",
  "users": [
    {
      "userId": "634f7739e0e4d94bdec23f77",
      "firstName": "Simon",
      "lastName": "Chua",
      "designation": "Designer",
      "emailId": "simon@getnada.com",
      "contact": ",
      "gender": "female",
      "profileImagePath": ",
      "profileImageRelativePath": ",
      "organizationName": "malaysia",
      "username": ",
      "tenantId": "634f74cdcc648ad3b50bc1e9",
      "name": "Simon Chua",
      "employeeId": "00005",
      "employeeType": "0",
      "address": {
        "addressLine1": "5d",
        "addressLine2": "Plaza sentral,Jalan Stesen Sentral 8",
        "zipCode": "50450",
        "city": "Kuala lumpur",
        "state": "Selangor",
        "country": "MY",
        "suburb": ",
        "county": "
      },
      "nationality": ",
      "department": ",
      "iamUserId": "56969",
      "erpTenantId": "75630",
      "dateOfJoining": "2020-01-01T00:00:00Z",
      "dateOfConfirmation": "2023-01-06T00:00:00Z",
      "status": "active",
      "maritalStatus": "single",
      "appName": ",
      "roles": [
        {
          "roleId": "5f4fd64782e6aa8ee90378ee",
          "name": "USER",
          "appName": "PEOPLE",
          "policies": []
        }
      ],
      "teams": [
        {
          "teamId": "634f74cdcc648ad3b50bc1eb",
          "name": "Default Team",
          "createdAt": "2022-10-18T04:22:59.719Z",
          "members": [
            {
              "userId": "634f74cdcc648ad3b50bc1f4",
              "iamUserId": "65973",
              "firstName": "sonali_compoff@temp.deskera.xyz",
              "lastName": "kk",
              "employeeId": "00001",
              "roles": [
                "MANAGER"
              ]
            },
            {
              "userId": "634f7738e0e4d94bdec23f71",
              "iamUserId": "51127",
              "firstName": "Tom",
              "lastName": "Brady",
              "employeeId": "00002",
              "roles": [
                "USER"
              ]
            },
            {
              "userId": "634f7738e0e4d94bdec23f73",
              "iamUserId": "46121",
              "firstName": "ABDALLAH",
              "lastName": "ZAID",
              "employeeId": "00003",
              "roles": [
                "USER"
              ]
            },
            {
              "userId": "634f7739e0e4d94bdec23f75",
              "iamUserId": "46123",
              "firstName": "Felicity",
              "lastName": "Howard",
              "employeeId": "00004",
              "roles": [
                "USER"
              ]
            },
            {
              "userId": "634f7739e0e4d94bdec23f77",
              "iamUserId": "56969",
              "firstName": "Simon",
              "lastName": "Chua",
              "employeeId": "00005",
              "roles": [
                "USER"
              ]
            },
            {
              "userId": "635b6e005ced530c2f3be9dd",
              "iamUserId": "66195",
              "firstName": "test",
              "lastName": "user",
              "employeeId": "00006",
              "roles": [
                "USER"
              ]
            }
          ],
          "status": "active",
          "type": "default"
        }
      ],
      "approvers": [
        {
          "firstName": "sonali_compoff@temp.deskera.xyz",
          "lastName": "kk",
          "designation": "a",
          "emailId": "sonali_compoff@temp.deskera.xyz",
          "iamUserId": "65973"
        }
      ],
      "countryCode": "MY",
      "hasComponents": false,
      "components": [],
      "hasCompliance": true,
      "compliance": {
        "@type": "type.googleapis.com/v1.MYCompliance",
        "residenceStatus": "malaysian",
        "icNumber": "870721-127873",
        "passportNumber": ",
        "workerStatus": "iskandar",
        "nationality": "malaysian",
        "countryOfOrigin": "MY",
        "race": "malay",
        "religion": ",
        "epfNumber": "98764434",
        "epfContribution": true,
        "epfMemberBeforeAugust": true,
        "employeeEpfRate": 11,
        "additionalEmployeeRate": 1,
        "employerEpfRate": 0,
        "additionalEmployerRate": 1,
        "pcbNumber": "MY 87643456-098",
        "socsoCategory": ",
        "eisContribution": true,
        "pcbBorneByEmployer": false,
        "disabilityStatus": "notdisabled",
        "disabilityStatusSpouse": "notdisabled",
        "havingChildren": true,
        "spouseWorking": true,
        "numberOfQualifyingChildren": 0,
        "previousEmployerRemuneration": 500,
        "previousEmployerEpfContribution": 100,
        "previousEmployerMtdAmount": 1000,
        "previousEmployerTaxReliefDeduction": 10000,
        "taxExemption": true,
        "bikContribution": true,
        "bikAmount": 1,
        "socsoEmployee": ",
        "socsoEmployerContributionOnly": false,
        "numberOfChildrenAbove18ReceivingDegreeOutsideMalaysia": 0,
        "numberOfChildrenAbove18ReceivingDiplomaInMalaysia": 0,
        "numberOfChildrenUnder18": 1,
        "numberOfDisabledChildren": 0,
        "numberOfDisabledChildrenStudying": 0
      },
      "dateOfTermination": ",
      "dateOfBirth": "1999-01-01T00:00:00Z",
      "passportNumber": ",
      "compensation": 10000,
      "compensationPeriod": "30",
      "compensationCurrency": ",
      "paymentDetails": {
        "bank": ",
        "bankId": ",
        "paymentMethod": "cash",
        "accountType": ",
        "routingNumber": ",
        "accountNumber": ",
        "branchCode": ",
        "branchName": ",
        "ifsc": ",
        "upi": ",
        "transitNumber": ",
        "institutionNumber": "
      },
      "profileStages": {
        "employeeDetails": false,
        "paymentDetails": false
      },
      "isTerminated": false,
      "title": ",
      "middleName": ",
      "displayName": ",
      "contractorType": ",
      "type": ",
      "documents": [],
      "createdAt": "2022-10-18T08:04:51Z",
      "employerIdentificationNumber": ",
      "tenantCountryCode": ",
      "tenantCurrencyCode": ",
      "terminationStage": ",
      "hasBenefits": false,
      "benefits": [],
      "socialSecurityNumber": ",
      "directDepositConsent": false,
      "consentMailSend": false,
      "hasSalaryAdvance": false,
      "salaryAdvance": null,
      "effectiveCompensations": [],
      "isEffectiveSalary": false,
      "passportCountry": ",
      "ctc": 0,
      "deleted": false,
      "isImported": false,
      "announcements": [],
      "isInCompleteProfile": false,
      "inCompleteFields": [],
      "isContactUpdated": false,
      "beneficiaryId": ",
      "customFieldData": [],
      "aliasName": "Simmi",
      "beneficiaryStatus": ",
      "beneficiaryReason": ",
      "makePayroll": false,
      "componentGroup": ",
      "inviteUserToFillInfo": false,
      "hasDocuments": false,
      "locationValue": ",
      "cnfrmDateUpdated": false,
      "isFromKafka": false,
      "tenantUserId": "0",
      "documentSequenceId": ",
      "customFields": {},
      "prevDateOfJoining": [],
      "isRehire": false
    }
  ],
  "filterConfig": {
    "page": "1",
    "numberOfElements": "1",
    "sizePerPage": "1",
    "totalPage": "1",
    "numberOfRecords": "1"
  },
  "beneficiariesToAdd": "0"
}
```


### Fetch users by id

#### GET
##### Summary

Get a user by it's iamUserId

##### Description

Get a user by it's iamUserId.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| iamUserId | path |  | Yes | string (int64) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetUserResponse](#v1getuserresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users/geolocations/iam/56518
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/users/geolocations/iam/56518' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'
```

##### Sample Request
```java
No Request Body
```

##### Sample Response
```java
{
  "geolocations": [
    {
      "latitude": "19.9842462",
      "longitude": "73.7610578",
      "name": "Nasik",
      "address": "Kalika Park Garden, Jagtap Nagar, Nashik, Maharashtra, India",
      "radius": 50
    }
  ]
}
```


### Fetch logged-in user info

#### GET
##### Summary

Get the logged in user's info

##### Description

Get the logged in user's meta-information.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetUserResponse](#v1getuserresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users/login/info
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/users/login/info' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'```
```
##### Sample Request
```java
```

##### Sample Response
```java
{
  "status": "OK",
  "user": {
    "userId": "60dab2fde1ad8cb2268f50f1",
    "firstName": "myuser98@temp.deskera.xyz",
    "lastName": "1",
    "designation": "dev",
    "emailId": "myuser98@temp.deskera.xyz",
    "contact": ",
    "gender": ",
    "profileImagePath": ",
    "profileImageRelativePath": ",
    "organizationName": "qqq",
    "username": "desk.myuser98@temp.deskera.xyz",
    "tenantId": "60dab2fde1ad8cb2268f50e5",
    "name": ",
    "employeeId": "00001",
    "employeeType": "0",
    "address": null,
    "nationality": ",
    "department": ",
    "iamUserId": "55872",
    "erpTenantId": "70815",
    "dateOfJoining": "2015-01-01T00:00:00.000Z",
    "dateOfConfirmation": "2015-01-01T00:00:00.000Z",
    "status": "active",
    "maritalStatus": ",
    "appName": "PEOPLE",
    "roles": [
      {
        "roleId": "5f4fd64782e6aa8ee90378eb",
        "name": "ADMIN",
        "appName": "PEOPLE",
        "policies": []
      }
    ],
    "teams": [
      {
        "teamId": "60dab2fde1ad8cb2268f50e7",
        "name": "Default Team",
        "createdAt": "2021-06-25T08:00:20.512Z",
        "members": [
          {
            "userId": "60dab2fde1ad8cb2268f50f1",
            "iamUserId": "55872",
            "firstName": "myuser98@temp.deskera.xyz",
            "lastName": "1",
            "employeeId": "00001",
            "roles": [
              "MANAGER"
            ]
          },
          {
            "userId": "62ff086e1e1b72c08f506293",
            "iamUserId": "46121",
            "firstName": "ABDALLAH",
            "lastName": "ZAID",
            "employeeId": ",
            "roles": [
              "USER"
            ]
          },
          {
            "userId": "62ff08a80337f259a7a0d8f9",
            "iamUserId": "51127",
            "firstName": "Tom",
            "lastName": "Brady",
            "employeeId": "00004",
            "roles": [
              "USER"
            ]
          }
        ],
        "status": "active",
        "type": "default"
      }
    ],
    "approvers": [],
    "countryCode": ",
    "hasComponents": false,
    "components": [],
    "hasCompliance": false,
    "compliance": null,
    "dateOfTermination": ",
    "dateOfBirth": ",
    "passportNumber": ",
    "compensation": 0,
    "compensationPeriod": ",
    "compensationCurrency": ",
    "paymentDetails": null,
    "profileStages": {
      "employeeDetails": true,
      "paymentDetails": true,
      "witholdingSetup": false,
      "filingAuthorization": false
    },
    "isTerminated": false,
    "title": ",
    "middleName": ",
    "displayName": ",
    "contractorType": ",
    "type": ",
    "documents": [],
    "createdAt": "2021-06-25T08:00:20Z",
    "employerIdentificationNumber": ",
    "tenantCountryCode": "MY",
    "tenantCurrencyCode": "MYR",
    "terminationStage": ",
    "hasBenefits": false,
    "benefits": [],
    "socialSecurityNumber": ",
    "directDepositConsent": false,
    "consentMailSend": false,
    "hasSalaryAdvance": false,
    "salaryAdvance": null,
    "effectiveCompensations": [],
    "isEffectiveSalary": false,
    "passportCountry": ",
    "ctc": 0,
    "deleted": false,
    "isImported": false,
    "announcements": [],
    "isInCompleteProfile": false,
    "inCompleteFields": [],
    "isContactUpdated": false,
    "beneficiaryId": ",
    "customFieldData": [],
    "aliasName": ",
    "beneficiaryStatus": ",
    "beneficiaryReason": ",
    "makePayroll": false,
    "componentGroup": ",
    "inviteUserToFillInfo": false,
    "hasDocuments": false,
    "locationValue": ",
    "cnfrmDateUpdated": false,
    "checkHqError": null,
    "checkEmployeeId": ",
    "documentSequenceId": ",
    "isFromKafka": false,
    "tenantUserId": "0",
    "customFields": {},
    "prevDateOfJoining": [],
    "isRehire": false
  },
  "errors": [],
  "httpStatusCode": "0",
  "error": null
}
```

### Update user's profile

#### PUT
##### Summary

Update a User Profile Stage

##### Description

Update a User.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| stage | path |  | Yes | string |
| body | body |  | Yes | [v1ProfileStage](#v1profilestage) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetUserResponse](#v1getuserresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users/profile/{stage}```

##### Curl

```java
curl -X 'PUT' \
  'https://bifrost-us.deskera.com/v1/people/users/profile/paymentDetails' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'```

##### Sample Request
```java
{
  "stage": "paymentDetails"
}```

##### Sample Response
```java
{
  "status": "OK",
  "user": {
    "userId": "6332e1f84a34b52444ff72c4",
    "firstName": "Rohan",
    "lastName": "Test",
    "designation": "qa",
    "emailId": "/Z84ro/Tdio/g/keyERLeF7zTW/wBv5G7ykO3neezC34tjbDDtZ8NdiFoA0bpw==",
    "contact": ",
    "gender": "male",
    "profileImagePath": ",
    "profileImageRelativePath": ",
    "organizationName": "SingaporeTEst",
    "username": ",
    "tenantId": "6332e1f84a34b52444ff72b9",
    "name": "Rohan Test",
    "employeeId": "00001",
    "employeeType": "0",
    "address": {
      "addressLine1": ",
      "addressLine2": ",
      "zipCode": ",
      "city": ",
      "state": ",
      "country": ",
      "suburb": ",
      "county": "
    },
    "nationality": ",
    "department": ",
    "iamUserId": "58372",
    "erpTenantId": "75531",
    "dateOfJoining": "2017-09-06T00:00:00.000Z",
    "dateOfConfirmation": "2018-09-19T00:00:00.000Z",
    "status": "active",
    "maritalStatus": "married",
    "appName": ",
    "roles": [],
    "teams": [],
    "approvers": [],
    "countryCode": ",
    "hasComponents": true,
    "components": [],
    "hasCompliance": true,
    "compliance": null,
    "dateOfTermination": ",
    "dateOfBirth": "1993-09-07T00:00:00.000Z",
    "passportNumber": ",
    "compensation": 50000,
    "compensationPeriod": "30",
    "compensationCurrency": "SGD",
    "paymentDetails": {
      "bank": ",
      "bankId": ",
      "paymentMethod": "cash",
      "accountType": ",
      "routingNumber": ",
      "accountNumber": ",
      "branchCode": ",
      "branchName": ",
      "ifsc": ",
      "upi": ",
      "transitNumber": ",
      "institutionNumber": "
    },
    "profileStages": {
      "employeeDetails": false,
      "paymentDetails": true,
      "witholdingSetup": false,
      "filingAuthorization": false
    },
    "isTerminated": false,
    "title": ",
    "middleName": ",
    "displayName": ",
    "contractorType": ",
    "type": ",
    "documents": [],
    "createdAt": ",
    "employerIdentificationNumber": ",
    "tenantCountryCode": ",
    "tenantCurrencyCode": ",
    "terminationStage": ",
    "hasBenefits": false,
    "benefits": [],
    "socialSecurityNumber": ",
    "directDepositConsent": false,
    "consentMailSend": false,
    "hasSalaryAdvance": false,
    "salaryAdvance": null,
    "effectiveCompensations": [],
    "isEffectiveSalary": false,
    "passportCountry": ",
    "ctc": 0,
    "deleted": false,
    "isImported": false,
    "announcements": [],
    "isInCompleteProfile": false,
    "inCompleteFields": [],
    "isContactUpdated": false,
    "beneficiaryId": ",
    "customFieldData": [],
    "aliasName": "QAA",
    "beneficiaryStatus": ",
    "beneficiaryReason": ",
    "makePayroll": false,
    "componentGroup": ",
    "inviteUserToFillInfo": false,
    "hasDocuments": false,
    "locationValue": "b0293b3a-49d8-4663-9fd8-ee918692435b",
    "cnfrmDateUpdated": false,
    "checkHqError": null,
    "checkEmployeeId": ",
    "documentSequenceId": ",
    "isFromKafka": false,
    "tenantUserId": "0",
    "customFields": {},
    "prevDateOfJoining": [],
    "isRehire": false
  },
  "errors": [],
  "httpStatusCode": "0",
  "error": null
}
```

### Fetch user's salary-advance details

#### POST
##### Summary

API to get Bulk User salary advance details

##### Description

API to get Bulk User salary advance details

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1BulkInt64IdRequest](#v1bulkint64idrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1BulkUsersSalaryAdvanceDetails](#v1bulkuserssalaryadvancedetails) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

###  Fetch users' minimal info

#### GET
##### Summary

Get a user short info by it's iamUserId

##### Description

Get a user short info by it's iamUserId.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| iamUserId | path |  | Yes | string (int64) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1UserShortInfoResponse](#v1usershortinforesponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users/short-info/{iamUserId}```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/users/short-info/46121' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'```

##### Sample Request
```java
```

##### Sample Response
```java
{
  "status": "OK",
  "userShortInfo": {
    "userId": "62ff086e1e1b72c08f506293",
    "firstName": "ABDALLAH",
    "lastName": "ZAID",
    "paymentDetails": {
      "bank": ",
      "bankId": ",
      "paymentMethod": "cash",
      "accountType": ",
      "routingNumber": ",
      "accountNumber": ",
      "branchCode": ",
      "branchName": ",
      "ifsc": ",
      "upi": ",
      "transitNumber": ",
      "institutionNumber": "
    },
    "emailId": "slam123@getnada.com",
    "tenantId": "60dab2fde1ad8cb2268f50e5",
    "employeeId": ",
    "address": {
      "addressLine1": "3a",
      "addressLine2": "Plaza sentral,Jalan Stesen Sentral 6",
      "zipCode": "50088",
      "city": "Kuala lumpur",
      "state": "Selangor",
      "country": "MY",
      "suburb": ",
      "county": "
    },
    "iamUserId": "46121",
    "erpTenantId": "70815",
    "dateOfTermination": ",
    "directDepositConsent": false,
    "taxConfiguration": ",
    "dateOfBirth": "1999-01-01T00:00:00Z",
    "dateOfJoining": "2020-01-01T00:00:00Z",
    "hasCompliance": true,
    "compensationCurrency": ",
    "beneficiaryId": ",
    "beneficiaryStatus": ",
    "beneficiaryReason": ",
    "ctc": 0
  }
}
```
### Fetch multiple users' minimal info

#### POST
##### Summary

Get User's short info in bulk

##### Description

Get bulk User's short info using IamUserId and UserId

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1BulkUsersIdRequest](#v1bulkusersidrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1BulkUsersShortInfoResponse](#v1bulkusersshortinforesponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

"

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users/shortinfo```

##### Curl

```java
curl -X 'POST' \
  'https://bifrost-us.deskera.com/v1/people/users/shortinfo' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken' \
  -H 'Content-Type: application/json' \
  -d '{
  "userIds": [
    "62ff086e1e1b72c08f506293"
  ],
"iamUserIds": [
    "46121"
  ],
  
  "deleted": false
}'```

##### Sample Request
```java
{
  "userIds": [
    "62ff086e1e1b72c08f506293"
  ],
"iamUserIds": [
    "46121"
  ],
  
  "deleted": false
}```

##### Sample Response
```java
{
  "status": "OK",
  "usersShortInfo": [
    {
      "userId": "62ff086e1e1b72c08f506293",
      "firstName": "ABDALLAH",
      "lastName": "ZAID",
      "paymentDetails": {
        "bank": "",
        "bankId": "",
        "paymentMethod": "cash",
        "accountType": "",
        "routingNumber": "",
        "accountNumber": "",
        "branchCode": "",
        "branchName": "",
        "ifsc": "",
        "upi": "",
        "transitNumber": "",
        "institutionNumber": ""
      },
      "emailId": "slam123@getnada.com",
      "tenantId": "60dab2fde1ad8cb2268f50e5",
      "employeeId": "",
      "address": {
        "addressLine1": "3a",
        "addressLine2": "Plaza sentral,Jalan Stesen Sentral 6",
        "zipCode": "50088",
        "city": "Kuala lumpur",
        "state": "Selangor",
        "country": "MY",
        "suburb": "",
        "county": ""
      },
      "iamUserId": "46121",
      "erpTenantId": "70815",
      "dateOfTermination": "",
      "directDepositConsent": false,
      "taxConfiguration": "",
      "dateOfBirth": "1999-01-01T00:00:00Z",
      "dateOfJoining": "2020-01-01T00:00:00Z",
      "hasCompliance": true,
      "compensationCurrency": "",
      "beneficiaryId": "",
      "beneficiaryStatus": "",
      "beneficiaryReason": "",
      "ctc": 0
    }
  ]
}
```

### /v1/people/users/{id}

#### GET
##### Summary

Get a user by id

##### Description

Get a user by it's id.

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
| 200 | A successful response. | [v1GetUserResponse](#v1getuserresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users/{id}```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/users/62ff086e1e1b72c08f506293' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'
```

##### Sample Request
```java
```

##### Sample Response
```java
{
  "status": "OK",
  "user": {
    "userId": "62ff086e1e1b72c08f506293",
    "firstName": "ABDALLAH",
    "lastName": "ZAID",
    "designation": "QA Engineer",
    "emailId": "slam123@getnada.com",
    "contact": "",
    "gender": "male",
    "profileImagePath": "",
    "profileImageRelativePath": "",
    "organizationName": "Desk",
    "username": "",
    "tenantId": "60dab2fde1ad8cb2268f50e5",
    "name": "",
    "employeeId": "",
    "employeeType": "0",
    "address": {
      "addressLine1": "3a",
      "addressLine2": "Plaza sentral,Jalan Stesen Sentral 6",
      "zipCode": "50088",
      "city": "Kuala lumpur",
      "state": "Selangor",
      "country": "MY",
      "suburb": "",
      "county": ""
    },
    "nationality": "",
    "department": "",
    "iamUserId": "46121",
    "erpTenantId": "70815",
    "dateOfJoining": "2020-01-01T00:00:00Z",
    "dateOfConfirmation": "2021-01-06T00:00:00Z",
    "status": "active",
    "maritalStatus": "married",
    "appName": "",
    "roles": [],
    "teams": [],
    "approvers": [],
    "countryCode": "MY",
    "hasComponents": false,
    "components": [],
    "hasCompliance": true,
    "compliance": null,
    "dateOfTermination": "",
    "dateOfBirth": "1999-01-01T00:00:00Z",
    "passportNumber": "",
    "compensation": 15000,
    "compensationPeriod": "30",
    "compensationCurrency": "",
    "paymentDetails": {
      "bank": "",
      "bankId": "",
      "paymentMethod": "cash",
      "accountType": "",
      "routingNumber": "",
      "accountNumber": "",
      "branchCode": "",
      "branchName": "",
      "ifsc": "",
      "upi": "",
      "transitNumber": "",
      "institutionNumber": ""
    },
    "profileStages": {
      "employeeDetails": false,
      "paymentDetails": false,
      "witholdingSetup": false,
      "filingAuthorization": false
    },
    "isTerminated": false,
    "title": "",
    "middleName": "",
    "displayName": "",
    "contractorType": "",
    "type": "",
    "documents": [],
    "createdAt": "",
    "employerIdentificationNumber": "",
    "tenantCountryCode": "",
    "tenantCurrencyCode": "",
    "terminationStage": "",
    "hasBenefits": false,
    "benefits": [],
    "socialSecurityNumber": "",
    "directDepositConsent": false,
    "consentMailSend": false,
    "hasSalaryAdvance": false,
    "salaryAdvance": null,
    "effectiveCompensations": [],
    "isEffectiveSalary": false,
    "passportCountry": "",
    "ctc": 0,
    "deleted": false,
    "isImported": false,
    "announcements": [],
    "isInCompleteProfile": false,
    "inCompleteFields": [],
    "isContactUpdated": false,
    "beneficiaryId": "",
    "customFieldData": [],
    "aliasName": "ABD",
    "beneficiaryStatus": "",
    "beneficiaryReason": "",
    "makePayroll": false,
    "componentGroup": "",
    "inviteUserToFillInfo": false,
    "hasDocuments": false,
    "locationValue": "",
    "cnfrmDateUpdated": false,
    "checkHqError": null,
    "checkEmployeeId": "",
    "documentSequenceId": "",
    "isFromKafka": false,
    "tenantUserId": "0",
    "customFields": {},
    "prevDateOfJoining": [],
    "isRehire": false
  },
  "errors": [],
  "httpStatusCode": "0",
  "error": null
}
```
#### DELETE
##### Summary

Delete a user by id

##### Description

Delete a user by it's id.

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
| 200 | A successful response. | [v1DeleteResponse](#v1deleteresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |
### Manage Geofencing locations

#### GET
##### Summary

Get geolocations

##### Description

Get geolocation values

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
| 200 | A successful response. | [v1Geolocations](#v1geolocations) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users/geofencing/locations?currentPage=1&limit=20&searchString=&searchField=
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/users/geofencing/locations?currentPage=1&limit=20&searchString=&searchField=' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'
```

##### Sample Request
```java
No Request Body
```

##### Sample Response
```java
{
  "geolocations": [
    {
      "id": "635bb20d5ced530c2f3be9e2",
      "name": "Nasik",
      "address": "Kalika Park Garden, Jagtap Nagar, Nashik, Maharashtra, India",
      "latitude": "19.9842462",
      "longitude": "73.7610578",
      "radius": 50,
      "placeId": "ChIJ7XrNC-Tr3TsRC8162eECJrA",
      "active": true
    }
  ],
  "filterConfig": {
    "page": "1",
    "numberOfElements": "1",
    "sizePerPage": "20",
    "totalPage": "1",
    "numberOfRecords": "1"
  }
}
```
#### DELETE
##### Summary

Delete geolocations

##### Description

Delete geolocation values

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1BulkIdRequest](#v1bulkidrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1Geolocations](#v1geolocations) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users/geofencing/locations
```

##### Curl

```java
curl -X 'DELETE' \
  'https://bifrost-us.deskera.com/v1/people/users/geofencing/locations' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken' \
  -H 'Content-Type: application/json' \
  -d '{
  "ids": [
    "635bb66de686859b374e0ba9"
  ],
  "forcedDelete": true
}'
```

##### Sample Request
```java
{
  "ids": [
    "635bb66de686859b374e0ba9"
  ],
  "forcedDelete": true
}
```

##### Sample Response
```java
{
  "geolocations": [
    {
      "id": "635bb66de686859b374e0ba9",
      "name": "Nasik",
      "address": "Kalika Park Garden, Jagtap Nagar, Nashik, Maharashtra, India",
      "latitude": "19.9842462",
      "longitude": "73.7610578",
      "radius": 50,
      "placeId": "ChIJ7XrNC-Tr3TsRC8162eECJrA",
      "active": true
    }
  ],
  "filterConfig": null
}
```
#### POST
##### Summary

Add geolocations

##### Description

Add geolocation values

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1Geolocations](#v1geolocations) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1Geolocations](#v1geolocations) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users/geofencing/locations
```

##### Curl

```java
curl -X 'POST' \
  'https://bifrost-us.deskera.com/v1/people/users/geofencing/locations' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken' \
  -H 'Content-Type: application/json' \
  -d '{
  "geolocations": [
    {
      "active": true,
      "radius": 50,
      "address": "Kalika Park Garden, Jagtap Nagar, Nashik, Maharashtra, India",
      "longitude": "73.7610578",
      "latitude": "19.9842462",
      "name": "Nasik",
      "placeId": "ChIJ7XrNC-Tr3TsRC8162eEJJrA"
    }
  ]
}'
```

##### Sample Request
```java
{
  "geolocations": [
    {
      "active": true,
      "radius": 50,
      "address": "Kalika Park Garden, Jagtap Nagar, Nashik, Maharashtra, India",
      "longitude": "73.7610578",
      "latitude": "19.9842462",
      "name": "Nasik",
      "placeId": "ChIJ7XrNC-Tr3TsRC8162eECJrA"
    }
  ]
}
```

##### Sample Response
```java
{
  "geolocations": [
    {
      "id": "635bb66de686859b374e0ba9",
      "name": "Nasik",
      "address": "Kalika Park Garden, Jagtap Nagar, Nashik, Maharashtra, India",
      "latitude": "19.9842462",
      "longitude": "73.7610578",
      "radius": 50,
      "placeId": "ChIJ7XrNC-Tr3TsRC8162eEJJrA",
      "active": true
    }
  ],
  "filterConfig": null
}
```
#### PUT
##### Summary

Edit geolocations

##### Description

Edit geolocations values

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1Geolocations](#v1geolocations) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1Geolocations](#v1geolocations) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |



##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users/geofencing/locations
```

##### Curl

```java
curl -X 'PUT' \
  'https://bifrost-us.deskera.com/v1/people/users/geofencing/locations' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken' \
  -H 'Content-Type: application/json' \
  -d '{
  "geolocations": [
    {
      "id": "635bb66de686859b374e0ba9",
      "active": true,
      "radius": 50,
      "address": "Kalika Park Garden, Jagtap Nagar, Nashik, Maharashtra, India",
      "longitude": "73.7610578",
      "latitude": "19.9842462",
      "name": "Nasik",
      "placeId": "ChIJ7XrNC-Tr3TsRC8162eECJrA"
    }
  ]
}'
```

##### Sample Request
```java
{
  "geolocations": [
    {
      "id": "635bb66de686859b374e0ba9",
      "active": true,
      "radius": 50,
      "address": "Kalika Park Garden, Jagtap Nagar, Nashik, Maharashtra, India",
      "longitude": "73.7610578",
      "latitude": "19.9842462",
      "name": "Nasik",
      "placeId": "ChIJ7XrNC-Tr3TsRC8162eECJrA"
    }
  ]
}
```

##### Sample Response
```java
{
  "geolocations": [
    {
      "id": "635bb66de686859b374e0ba9",
      "name": "Nasik",
      "address": "Kalika Park Garden, Jagtap Nagar, Nashik, Maharashtra, India",
      "latitude": "19.9842462",
      "longitude": "73.7610578",
      "radius": 50,
      "placeId": "ChIJ7XrNC-Tr3TsRC8162eEJJrA",
      "active": true
    }
  ],
  "filterConfig": null
}
```
### Manage geolocation mappings

#### GET
##### Summary

Get geolocation mappings

##### Description

Get geolocation mapping values

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
| 200 | A successful response. | [v1GeolocationMappingsResponse](#v1geolocationmappingsresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users/geolocation/mappings?currentPage=1&limit=20&searchString=&searchField=
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/users/geolocation/mappings?currentPage=1&limit=20&searchString=&searchField=' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'
```

##### Sample Request
```java
No Request Body
```

##### Sample Response
```java
{
  "geolocations": [
    {
      "id": "635bb9280ab739d2f218da7a",
      "users": [],
      "locations": [
        {
          "id": "635bb20d5ced530c2f3be9e2",
          "name": "Nasik",
          "address": "Kalika Park Garden, Jagtap Nagar, Nashik, Maharashtra, India",
          "latitude": "19.9842462",
          "longitude": "73.7610578",
          "radius": 50,
          "placeId": "ChIJ7XrNC-Tr3TsRC8162eECJrA",
          "active": true
        }
      ],
      "applicableToAll": true,
      "active": true
    }
  ],
  "filterConfig": {
    "page": "1",
    "numberOfElements": "1",
    "sizePerPage": "20",
    "totalPage": "1",
    "numberOfRecords": "1"
  }
}
```
#### DELETE
##### Summary

Delete geolocation mappings

##### Description

Delete geolocation mapping values

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1BulkIdRequest](#v1bulkidrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GeolocationMappingsResponse](#v1geolocationmappingsresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users/geolocation/mappings
```

##### Curl

```java
curl -X 'DELETE' \
  'https://bifrost-us.deskera.com/v1/people/users/geolocation/mappings' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken' \
  -H 'Content-Type: application/json' \
  -d '{
  "ids": [
    "635bbb30e686859b374e0baa"
  ],
  "forcedDelete": true
}'
```

##### Sample Request
```java
{
  "ids": [
    "635bbb30e686859b374e0baa"
  ],
  "forcedDelete": true
}
```

##### Sample Response
```java
{
  "geolocations": [
    {
      "id": "635bbb30e686859b374e0baa",
      "users": [],
      "locations": [
        {
          "id": "635bb20d5ced530c2f3be9e2",
          "name": "Nasik",
          "address": "Kalika Park Garden, Jagtap Nagar, Nashik, Maharashtra, India",
          "latitude": "19.9842462",
          "longitude": "73.7610578",
          "radius": 50,
          "placeId": "ChIJ7XrNC-Tr3TsRC8162eECJrA",
          "active": true
        }
      ],
      "applicableToAll": true,
      "active": true
    }
  ],
  "filterConfig": null
}
```
#### POST
##### Summary

Add geolocation mappings

##### Description

Add geolocation mapping values

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1GeolocationMappingsRequest](#v1geolocationmappingsrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GeolocationMappingsResponse](#v1geolocationmappingsresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users/geolocation/mappings
```

##### Curl

```java
curl -X 'POST' \
  'https://bifrost-us.deskera.com/v1/people/users/geolocation/mappings' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken' \
  -H 'Content-Type: application/json' \
  -d '{
  "geolocations": [
    {
      "applicableToAll": true,
      "active": true,
      "iamUserIds": [
        
      ],
      "locationIds": [
        "635bb20d5ced530c2f3be9e2"
      ]
    }
  ]
}'
```

##### Sample Request
```java
{
  "geolocations": [
    {
      "applicableToAll": true,
      "active": true,
      "iamUserIds": [
        
      ],
      "locationIds": [
        "635bb20d5ced530c2f3be9e2"
      ]
    }
  ]
}
```

##### Sample Response
```java
{
  "geolocations": [
    {
      "id": "635bbb30e686859b374e0baa",
      "users": [],
      "locations": [
        {
          "id": "635bb20d5ced530c2f3be9e2",
          "name": "Nasik",
          "address": "Kalika Park Garden, Jagtap Nagar, Nashik, Maharashtra, India",
          "latitude": "19.9842462",
          "longitude": "73.7610578",
          "radius": 50,
          "placeId": "ChIJ7XrNC-Tr3TsRC8162eECJrA",
          "active": true
        }
      ],
      "applicableToAll": true,
      "active": true
    }
  ],
  "filterConfig": null
}
```
#### PUT
##### Summary

Edit geolocation mappings

##### Description

Edit geolocation mapping values

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1GeolocationMappingsRequest](#v1geolocationmappingsrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GeolocationMappingsResponse](#v1geolocationmappingsresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |



##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users/geolocation/mappings
```

##### Curl

```java
curl -X 'PUT' \
  'https://bifrost-us.deskera.com/v1/people/users/geolocation/mappings' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken' \
  -H 'Content-Type: application/json' \
  -d '{
  "geolocations": [
    {
      "id": "635bbb30e686859b374e0baa",
      "applicableToAll": true,
      "active": true,
      "iamUserIds": [
        
      ],
      "locationIds": [
        "635bb20d5ced530c2f3be9e2"
      ]
    }
  ]
}'
```

##### Sample Request
```java
{
  "geolocations": [
    {
      "applicableToAll": true,
      "active": true,
      "iamUserIds": [
        
      ],
      "locationIds": [
        "635bb20d5ced530c2f3be9e2"
      ]
    }
  ]
}
```

##### Sample Response
```java
{
  "geolocations": [
    {
      "id": "635bbb30e686859b374e0baa",
      "users": [],
      "locations": [
        {
          "id": "635bb20d5ced530c2f3be9e2",
          "name": "Nasik",
          "address": "Kalika Park Garden, Jagtap Nagar, Nashik, Maharashtra, India",
          "latitude": "19.9842462",
          "longitude": "73.7610578",
          "radius": 50,
          "placeId": "ChIJ7XrNC-Tr3TsRC8162eECJrA",
          "active": true
        }
      ],
      "applicableToAll": true,
      "active": true
    }
  ],
  "filterConfig": null
}
```


### List approvers

#### GET
##### Summary

Get User Approvers

##### Description

Get user approvers.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | query |  | No | string |
| getCompliance | query |  | No | boolean |
| getComponents | query |  | No | boolean |
| getBenefits | query |  | No | boolean |
| getRolesAndTeams | query |  | No | boolean |
| customFieldModule | query |  | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetUsersResponse](#v1getusersresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users/approvers/list?getCompliance=false&getComponents=true&getBenefits=true&getRolesAndTeams=true
```

##### Curl

```java
  curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/users/approvers/list?getCompliance=false&getComponents=true&getBenefits=true&getRolesAndTeams=true' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'
```

##### Sample Request
```java
No Request Body
```

##### Sample Response
```java
{
  "status": "OK",
  "users": [
    {
      "userId": "634f74cdcc648ad3b50bc1f4",
      "firstName": "sonali_compoff@temp.deskera.xyz",
      "lastName": "kk",
      "designation": "a",
      "emailId": "sonali_compoff@temp.deskera.xyz",
      "contact": ",
      "gender": ",
      "profileImagePath": ",
      "profileImageRelativePath": ",
      "organizationName": "malaysia",
      "username": ",
      "tenantId": "634f74cdcc648ad3b50bc1e9",
      "name": "sonali_compoff@temp.deskera.xyz kk",
      "employeeId": "00001",
      "employeeType": "0",
      "address": {
        "addressLine1": ",
        "addressLine2": ",
        "zipCode": ",
        "city": ",
        "state": ",
        "country": ",
        "suburb": ",
        "county": "
      },
      "nationality": ",
      "department": ",
      "iamUserId": "65973",
      "erpTenantId": "75630",
      "dateOfJoining": "2022-09-09T00:00:00.000Z",
      "dateOfConfirmation": "2022-10-03T00:00:00.000Z",
      "status": "active",
      "maritalStatus": ",
      "appName": ",
      "roles": [
        {
          "roleId": "5f4fd64782e6aa8ee90378eb",
          "name": "ADMIN",
          "appName": "PEOPLE",
          "policies": []
        }
      ],
      "teams": [
        {
          "teamId": "634f74cdcc648ad3b50bc1eb",
          "name": "Default Team",
          "createdAt": "2022-10-18T04:22:59.719Z",
          "members": [
            {
              "userId": "634f74cdcc648ad3b50bc1f4",
              "iamUserId": "65973",
              "firstName": "sonali_compoff@temp.deskera.xyz",
              "lastName": "kk",
              "employeeId": "00001",
              "roles": [
                "MANAGER"
              ]
            },
            {
              "userId": "634f7738e0e4d94bdec23f71",
              "iamUserId": "51127",
              "firstName": "Tom",
              "lastName": "Brady",
              "employeeId": "00002",
              "roles": [
                "USER"
              ]
            },
            {
              "userId": "634f7738e0e4d94bdec23f73",
              "iamUserId": "46121",
              "firstName": "ABDALLAH",
              "lastName": "ZAID",
              "employeeId": "00003",
              "roles": [
                "USER"
              ]
            },
            {
              "userId": "634f7739e0e4d94bdec23f75",
              "iamUserId": "46123",
              "firstName": "Felicity",
              "lastName": "Howard",
              "employeeId": "00004",
              "roles": [
                "USER"
              ]
            },
            {
              "userId": "634f7739e0e4d94bdec23f77",
              "iamUserId": "56969",
              "firstName": "Simon",
              "lastName": "Chua",
              "employeeId": "00005",
              "roles": [
                "USER"
              ]
            },
            {
              "userId": "635b6e005ced530c2f3be9dd",
              "iamUserId": "66195",
              "firstName": "test",
              "lastName": "user",
              "employeeId": "00006",
              "roles": [
                "USER"
              ]
            }
          ],
          "status": "active",
          "type": "default"
        }
      ],
      "approvers": [],
      "countryCode": "MY",
      "hasComponents": true,
      "components": [],
      "hasCompliance": true,
      "compliance": null,
      "dateOfTermination": ",
      "dateOfBirth": "1999-10-12T00:00:00.000Z",
      "passportNumber": ",
      "compensation": 50000,
      "compensationPeriod": "30",
      "compensationCurrency": "MYR",
      "paymentDetails": {
        "bank": "amBank",
        "bankId": "619733d4fcf7ca6deb847cf5",
        "paymentMethod": "directDeposit",
        "accountType": "619733d4fcf7ca6deb847cf5",
        "routingNumber": "345",
        "accountNumber": "456789",
        "branchCode": ",
        "branchName": ",
        "ifsc": ",
        "upi": ",
        "transitNumber": ",
        "institutionNumber": "
      },
      "profileStages": {
        "employeeDetails": false,
        "paymentDetails": false
      },
      "isTerminated": false,
      "title": ",
      "middleName": ",
      "displayName": ",
      "contractorType": ",
      "type": ",
      "documents": [],
      "createdAt": ",
      "employerIdentificationNumber": ",
      "tenantCountryCode": ",
      "tenantCurrencyCode": ",
      "terminationStage": ",
      "hasBenefits": false,
      "benefits": [],
      "socialSecurityNumber": ",
      "directDepositConsent": false,
      "consentMailSend": false,
      "hasSalaryAdvance": false,
      "salaryAdvance": null,
      "effectiveCompensations": [],
      "isEffectiveSalary": false,
      "passportCountry": ",
      "ctc": 0,
      "deleted": false,
      "isImported": false,
      "announcements": [],
      "isInCompleteProfile": false,
      "inCompleteFields": [],
      "isContactUpdated": false,
      "beneficiaryId": ",
      "customFieldData": [],
      "aliasName": ",
      "beneficiaryStatus": ",
      "beneficiaryReason": ",
      "makePayroll": false,
      "componentGroup": ",
      "inviteUserToFillInfo": false,
      "hasDocuments": false,
      "locationValue": ",
      "cnfrmDateUpdated": false,
      "isFromKafka": false,
      "tenantUserId": "0",
      "documentSequenceId": ",
      "customFields": {},
      "prevDateOfJoining": [],
      "isRehire": false
    }
  ],
  "filterConfig": null,
  "beneficiariesToAdd": "0"
}
```
### Cashfree Beneficiaries

#### PUT
##### Summary

*
API to Update User Status For CashFree

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1BeneficiaryRequest](#v1beneficiaryrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1BeneficiaryResponse](#v1beneficiaryresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users/beneficiary-status
```

##### Curl

```java
curl -X 'PUT' \
  'https://bifrost-us.deskera.com/v1/people/users/beneficiary-status' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampleaccesstoken' \
  -H 'Content-Type: application/json' \
  -d '{
  "beneficiaryStatusInfo": [
    {
      "beneficiaryDetails": [
        {
          "userId": "634f74cdcc648ad3b50bc1f4",
          "reason": "Acds",
          "beneId": "634f74cdcc648ad3b50bc1f4"
        }
      ],
      "operation": "update"
    }
  ]
}'
```

##### Sample Request
```java
{
  "beneficiaryStatusInfo": [
    {
      "beneficiaryDetails": [
        {
          "userId": "634f74cdcc648ad3b50bc1f4",
          "reason": "Acds",
          "beneId": "634f74cdcc648ad3b50bc1f4"
        }
      ],
      "operation": "update"
    }
  ]
}
```

##### Sample Response
```java
{
  "status": "all user beneficiary status form cashfree updated successfully"
}
```



### Cashfree sync-beneficiaries

#### POST
##### Summary

*
API to Sync Users to CashFree as a Beneficiary

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes |  |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1BeneficiaryResponse](#v1beneficiaryresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

"

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users/sync-beneficiaries```

##### Curl

```java
curl -X 'POST' \
  'https://bifrost-us.deskera.com/v1/people/users/sync-beneficiaries' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken' \
  -H 'Content-Type: application/json' \
  -d '{}'```

##### Sample Request
```java
{}```

##### Sample Response
```java
{
  "status": "INITIATED: Syncing Beneficiaries to CashFree"
}
```

### Designations

#### GET
##### Summary

Get a list of all designations for given tenant

##### Description

Get a list of all designations for given tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1DesignationsResponse](#v1designationsresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users/designations
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/users/designations' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'
```

##### Sample Request
```java
No Request Body
```

##### Sample Response
```java
{
  "status": "OK",
  "designations": [
    "BA",
    "Designer",
    "QA Engineer",
    "a",
    "qa"
  ]
}
```

### Expenses

#### POST
##### Summary

Approve expenses

##### Description

Approve expenses

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1Pay"Request](#v1pay"request) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1SuccessResponse](#v1successresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### Pay expenses off-cycle

#### POST
##### Summary

Pay expenses with off-cycle

##### Description

Pay expenses with off-cycle

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1Pay"Request](#v1pay"request) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1SuccessResponse](#v1successresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### Off-cycle expense payments

#### GET
##### Summary

Pay expenses with off-cycle

##### Description

Pay expenses with off-cycle

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1PayStubListDto](#v1paystublistdto) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### India tax-declaration infomration list

#### GET
##### Summary

Get all users Tax declaration Info list with status

##### Description

Get all users Tax declaration Info list with status

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
| 200 | A successful response. | [v1TaxDeclarationInfoResponse](#v1taxdeclarationinforesponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/users/in/tax-declaration-info/list?limit=20&currentPage=1&order=desc&field=_id&stage=DECLARATION
```

##### Curl

```java
curl -X GET "https://bifrost-us.deskera.com/v1/people/users/in/tax-declaration-info/list?limit=20&currentPage=1&order=desc&field=_id&stage=DECLARATION" -H "accept: application/json" -H "x-access-token: sampletoken"```

##### Sample Request
```java
```

##### Sample Response
```java
{
  "status": "OK",
  "taxDeclarationInfo": [
    {
      "userId": "6298543909c8200b44e67127",
      "employeeName": "Simon Chu",
      "submitOn": ",
      "status": ",
      "rejectedItems": [
        
      ]
    },
    {
      "userId": "62835aaec922cf795d61d408",
      "employeeName": "Tom Brandy",
      "submitOn": ",
      "status": ",
      "rejectedItems": [
        
      ]
    }
  ],
  "filterConfig": {
    "page": "1",
    "numberOfElements": "2",
    "sizePerPage": "20",
    "totalPage": "1",
    "numberOfRecords": "2"
  }
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

#### v1AddComponentsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userComponents | [ [v1UserComponents](#v1usercomponents) ] |  | No |
| countryCode | string |  | No |

#### v1AddComponentsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failed | [ [v1UserComponents](#v1usercomponents) ] |  | No |
| success | [ [v1UserComponents](#v1usercomponents) ] |  | No |
| message | string |  | No |

#### v1AddUserError

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| user | [v1User](#v1user) |  | No |
| error | string |  | No |

#### v1AddUsersBucketResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| message | string |  | No |
| success | [ [v1User](#v1user) ] |  | No |
| failed | [ [v1AddUserError](#v1addusererror) ] |  | No |

#### v1AddUsersRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| users | [ [v1User](#v1user) ] |  | No |

#### v1AddUsersResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| message | string |  | No |
| errors | [ [v1SaveUserErr](#v1saveusererr) ] |  | No |

#### v1Address

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| addressLine1 | string |  | No |
| addressLine2 | string |  | No |
| zipCode | string |  | No |
| city | string |  | No |
| state | string |  | No |
| country | string |  | No |
| suburb | string |  | No |
| county | string |  | No |

#### v1AddressLatLong

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| latitude | string |  | No |
| longitude | string |  | No |
| name | string |  | No |
| address | string |  | No |
| radius | float |  | No |

#### v1AddressLatLongResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| geolocations | [ [v1AddressLatLong](#v1addresslatlong) ] |  | No |

#### v1Announcement

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| title | string |  | No |
| msg | string |  | No |
| frequency | [v1Frequency](#v1frequency) |  | No |
| type | string |  | No |
| roles | [ string ] |  | No |
| action | string |  | No |

#### v1ApplicableValues

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| metro | double |  | No |
| nonMetro | double |  | No |

#### v1Approver

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| firstName | string |  | No |
| lastName | string |  | No |
| designation | string |  | No |
| emailId | string |  | No |
| iamUserId | string (int64) |  | No |

#### v1BeneficiaryDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userId | string |  | No |
| reason | string |  | No |
| beneId | string |  | No |

#### v1BeneficiaryRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| beneficiaryStatusInfo | [ [v1BeneficiaryStatusInfo](#v1beneficiarystatusinfo) ] |  | No |

#### v1BeneficiaryResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | string |  | No |

#### v1BeneficiaryStatusInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| beneficiaryDetails | [ [v1BeneficiaryDetails](#v1beneficiarydetails) ] |  | No |
| operation | string |  | No |

#### v1BenefitMap

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| benefitId | string |  | No |
| name | string |  | No |
| employeeDeductionAmount | double |  | No |
| employeeDeductionType | string |  | No |
| employerDeductionAmount | double |  | No |
| employerDeductionType | string |  | No |
| annualMaxContribution | double |  | No |
| isActive | boolean |  | No |

#### v1BulkIdRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ids | [ string ] |  | No |
| forcedDelete | boolean |  | No |

#### v1BulkInt64IdRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ids | [ string (int64) ] |  | No |
| deleted | boolean |  | No |
| getCompliance | boolean |  | No |
| getComponents | boolean |  | No |

#### v1BulkUsersIdRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userIds | [ string ] |  | No |
| iamUserIds | [ string (int64) ] |  | No |
| deleted | boolean |  | No |

#### v1BulkUsersSalaryAdvanceDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| salaryAdvance | [ [v1SalaryAdvance](#v1salaryadvance) ] |  | No |
| status | [v1Status](#v1status) |  | No |

#### v1BulkUsersShortInfoResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| usersShortInfo | [ [v1UserShortInfo](#v1usershortinfo) ] |  | No |

#### v1ComponentConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| configureAmountBasis | string |  | No |
| basisComponentId | string |  | No |
| componentPercent | double |  | No |
| amountPerDay | double |  | No |
| deductionType | string |  | No |
| applicableValues | [v1ApplicableValues](#v1applicablevalues) |  | No |

#### v1ComponentDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| name | string |  | No |
| type | string |  | No |

#### v1ComponentFrequency

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| period | string |  | No |
| occurrence | [ string ] |  | No |
| when | string |  | No |

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

#### v1ComponentMapping

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| tenantComponents | [ [v1TenantComponents](#v1tenantcomponents) ] |  | No |
| mappedWith | string |  | No |

#### v1Condition

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| colId | string |  | No |
| value | string |  | No |
| opr | string |  | No |
| key | string |  | No |

#### v1CustomFieldData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| customFieldId | string |  | No |
| value | [ string ] |  | No |
| userId | string |  | No |
| tenantId | string |  | No |
| iamUserId | string (int64) |  | No |
| module | string |  | No |

#### v1DeleteResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| message | string |  | No |
| errCode | string |  | No |

#### v1DesignationsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| designations | [ string ] |  | No |

#### v1Document

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string |  | No |
| key | string |  | No |
| status | string |  | No |
| path | string |  | No |
| signConfig | [v1SignConfig](#v1signconfig) |  | No |
| isDefault | boolean |  | No |
| isTranslatorUsed | boolean |  | No |
| translatorConfig | [v1TranslatorConfig](#v1translatorconfig) |  | No |
| uploadedOn | string |  | No |

#### v1EffectiveCompensation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| effectiveDate | string |  | No |
| compensation | double |  | No |
| period | string |  | No |
| isVisible | boolean |  | No |
| basicCompensation | double |  | No |

#### v1EmployeeCtcDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string |  | No |
| empId | string |  | No |
| preMigCtc | [v1PreMigrationCtc](#v1premigrationctc) |  | No |
| postMigCtc | [v1PostMigrationCtc](#v1postmigrationctc) |  | No |
| iamUserId | string (int64) |  | No |

#### v1EncryptedUsersResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| usersCount | string (int64) |  | No |

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

#### v1Frequency

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| always | boolean |  | No |
| fromDate | dateTime |  | No |
| toDate | dateTime |  | No |

#### v1Geolocation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| name | string |  | No |
| address | string |  | No |
| latitude | string |  | No |
| longitude | string |  | No |
| radius | float |  | No |
| placeId | string |  | No |
| active | boolean |  | No |

#### v1GeolocationMappingRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| applicableToAll | boolean |  | No |
| iamUserIds | [ string (int64) ] |  | No |
| locationIds | [ string ] |  | No |
| active | boolean |  | No |

#### v1GeolocationMappingResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| users | [ [v1UserBasicInfo](#v1userbasicinfo) ] |  | No |
| locations | [ [v1Geolocation](#v1geolocation) ] |  | No |
| applicableToAll | boolean |  | No |
| active | boolean |  | No |

#### v1GeolocationMappingsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| geolocations | [ [v1GeolocationMappingRequest](#v1geolocationmappingrequest) ] |  | No |

#### v1GeolocationMappingsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| geolocations | [ [v1GeolocationMappingResponse](#v1geolocationmappingresponse) ] |  | No |
| filterConfig | [v1FilterConfig](#v1filterconfig) |  | No |

#### v1Geolocations

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| geolocations | [ [v1Geolocation](#v1geolocation) ] |  | No |
| filterConfig | [v1FilterConfig](#v1filterconfig) |  | No |

#### v1GetUserBasicsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| users | [ [v1UserBasicInfo](#v1userbasicinfo) ] |  | No |
| filterConfig | [v1FilterConfig](#v1filterconfig) |  | No |

#### v1GetUserResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| user | [v1User](#v1user) |  | No |
| errors | [ [v1SaveUserErr](#v1saveusererr) ] |  | No |
| httpStatusCode | string (int64) |  | No |
| error | [v1Error](#v1error) |  | No |

#### v1GetUsersResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| users | [ [v1User](#v1user) ] |  | No |
| filterConfig | [v1FilterConfig](#v1filterconfig) |  | No |
| beneficiariesToAdd | string (int64) |  | No |

#### v1INMigrationRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| compensation | string |  | No |
| componentMapping | [ [v1ComponentMapping](#v1componentmapping) ] |  | No |

#### v1INMigrationResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| compensation | string |  | No |
| componentMapping | [ [v1ComponentMapping](#v1componentmapping) ] |  | No |
| employeeDetails | [ [v1EmployeeCtcDetails](#v1employeectcdetails) ] |  | No |
| erpTenantId | string (int64) |  | No |

#### v1IamIdsWithPaginationRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| iamUserIds | [ string (int64) ] |  | No |
| criteria | [v1Pagination](#v1pagination) |  | No |


#### v1Items

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| recipientType | string |  | No |
| receiverId | string |  | No |

#### v1Member

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userId | string |  | No |
| iamUserId | string (int64) |  | No |
| firstName | string |  | No |
| lastName | string |  | No |
| employeeId | string |  | No |
| roles | [ string ] |  | No |


#### v1OrderBy

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| field | string |  | No |
| order | string |  | No |

#### v1PIISupport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| action | string |  | No |
| text | string |  | No |

#### v1Pagination

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| limit | string (int64) |  | No |
| currentPage | string (int64) |  | No |
| orderBy | [v1OrderBy](#v1orderby) |  | No |
| searchString | string |  | No |
| searchField | string |  | No |
| getComponents | boolean |  | No |
| fromDate | dateTime |  | No |
| toDate | dateTime |  | No |
| userType | string |  | No |
| cpfAccount | string |  | No |
| accountType | string |  | No |
| getBenefits | boolean |  | No |
| order | string |  | No |
| field | string |  | No |
| isInCompleteProfile | boolean |  | No |
| stage | string |  | No |
| includeDraft | boolean |  | No |
| ignTeamData | boolean |  | No |
| ignRoles | boolean |  | No |
| userFilter | [v1UserFilter](#v1userfilter) |  | No |
| ignUserApprovers | boolean |  | No |
| ignTeamMembers | boolean |  | No |
| userIds | [ string ] |  | No |
| isCustomFieldFilter | boolean |  | No |
| onlyTeamMembers | boolean |  | No |

#### v1PaidInstallmentDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| sequenceNumber | string (int64) |  | No |
| amountPaid | double |  | No |
| amountPaidDate | string |  | No |

#### v1Pay"Request

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| "Id | string |  | No |
| "Amount | string (int64) |  | No |

#### v1PayStubListDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| paystubObject | [ [v1PaystubObject](#v1paystubobject) ] |  | No |

#### v1PaymentDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bank | string |  | No |
| bankId | string |  | No |
| paymentMethod | string |  | No |
| accountType | string |  | No |
| routingNumber | string |  | No |
| accountNumber | string |  | No |
| branchCode | string |  | No |
| branchName | string |  | No |
| ifsc | string |  | No |
| upi | string |  | No |
| transitNumber | string |  | No |
| institutionNumber | string |  | No |

#### v1PaypalBatchPayoutRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | string |  | No |
| items | [ [v1Items](#v1items) ] |  | No |

#### v1PaypalBatchPayoutResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| payoutBatchId | string |  | No |

#### v1PaystubObject

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| payday | string |  | No |
| amount | string |  | No |

#### v1PostMigrationCtc

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | double |  | No |
| components | [ [v1ComponentMap](#v1componentmap) ] |  | No |

#### v1PreMigrationCtc

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | double |  | No |
| components | [ [v1ComponentMap](#v1componentmap) ] |  | No |

#### v1ProfileStage

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| stage | string |  | No |

#### v1ProfileStages

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeeDetails | boolean |  | No |
| paymentDetails | boolean |  | No |
| witholdingSetup | boolean |  | No |

#### v1Role

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| roleId | string |  | No |
| name | string |  | No |
| appName | string |  | No |
| policies | [ string ] |  | No |

#### v1SalaryAdvance

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | double |  | No |
| disbursementDate | string |  | No |
| repaymentStartDate | string |  | No |
| installmentAmount | double |  | No |
| noOfInstallments | string (int64) |  | No |
| status | string |  | No |
| unpaidAmount | double |  | No |
| paidInstallmentDetails | [ [v1PaidInstallmentDetails](#v1paidinstallmentdetails) ] |  | No |
| componentDetails | [ [v1ComponentDetails](#v1componentdetails) ] |  | No |
| iamUserId | string (int64) |  | No |
| isAmountDisbursed | boolean |  | No |
| isFinished | boolean |  | No |
| id | string |  | No |

#### v1SaveUserErr

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| fixedLimit | string (int64) |  | No |
| currentCount | string (int64) |  | No |
| message | string |  | No |

#### v1SearchRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| email | string |  | No |
| contact | string |  | No |

#### v1SignConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| isAgree | boolean |  | No |
| font | string |  | No |
| sign | string |  | No |

#### v1Status

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| v1Status | string |  |  |

#### v1SuccessResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| message | string |  | No |

#### v1TaxDeclarationInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userId | string |  | No |
| employeeName | string |  | No |
| submitOn | string |  | No |
| status | string |  | No |
| rejectedItems | [ string ] |  | No |

#### v1TaxDeclarationInfoResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| taxDeclarationInfo | [ [v1TaxDeclarationInfo](#v1taxdeclarationinfo) ] |  | No |
| filterConfig | [v1FilterConfig](#v1filterconfig) |  | No |

#### v1Team

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| teamId | string |  | No |
| name | string |  | No |
| createdAt | dateTime |  | No |
| members | [ [v1Member](#v1member) ] |  | No |
| status | string |  | No |
| type | string |  | No |

#### v1TenantComponents

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| name | string |  | No |

#### v1TerminateUserRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeeId | [ string ] |  | No |
| terminationDate | string |  | No |

#### v1TerminateUserStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failedIds | [ string (int64) ] |  | No |
| succeedIds | [ string (int64) ] |  | No |

#### v1TerminationRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| iamUserIdList | [ string (int64) ] |  | No |
| status | string |  | No |
| stage | string |  | No |
| terminationDate | string |  | No |

#### v1TerminationStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failedIds | [ [v1UserStatus](#v1userstatus) ] |  | No |
| succeedIds | [ [v1UserStatus](#v1userstatus) ] |  | No |

#### v1TerminationStatusRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| iamUserIdList | [ [v1UserStatus](#v1userstatus) ] |  | No |
| status | string |  | No |
| stage | string |  | No |

#### v1TranslatorConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| isAgree | boolean |  | No |
| firstName | string |  | No |
| lastName | string |  | No |
| email | string |  | No |
| address | [v1Address](#v1address) |  | No |

#### v1User

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userId | string |  | No |
| firstName | string |  | No |
| lastName | string |  | No |
| designation | string |  | No |
| emailId | string |  | No |
| contact | string |  | No |
| gender | string |  | No |
| profileImagePath | string |  | No |
| profileImageRelativePath | string |  | No |
| organizationName | string |  | No |
| username | string |  | No |
| tenantId | string |  | No |
| name | string |  | No |
| employeeId | string |  | No |
| employeeType | string (int64) |  | No |
| address | [v1Address](#v1address) |  | No |
| nationality | string |  | No |
| department | string |  | No |
| iamUserId | string (int64) |  | No |
| erpTenantId | string (int64) |  | No |
| dateOfJoining | string |  | No |
| dateOfConfirmation | string |  | No |
| status | string |  | No |
| maritalStatus | string |  | No |
| appName | string |  | No |
| roles | [ [v1Role](#v1role) ] |  | No |
| teams | [ [v1Team](#v1team) ] |  | No |
| approvers | [ [v1Approver](#v1approver) ] |  | No |
| countryCode | string |  | No |
| hasComponents | boolean |  | No |
| components | [ [v1ComponentMap](#v1componentmap) ] |  | No |
| hasCompliance | boolean |  | No |
| compliance | [protobufAny](#protobufany) |  | No |
| dateOfTermination | string |  | No |
| dateOfBirth | string |  | No |
| passportNumber | string |  | No |
| compensation | double |  | No |
| compensationPeriod | string |  | No |
| compensationCurrency | string |  | No |
| paymentDetails | [v1PaymentDetails](#v1paymentdetails) |  | No |
| profileStages | [v1ProfileStages](#v1profilestages) |  | No |
| isTerminated | boolean |  | No |
| title | string |  | No |
| middleName | string |  | No |
| displayName | string |  | No |
| contractorType | string |  | No |
| type | string |  | No |
| documents | [ [v1Document](#v1document) ] |  | No |
| createdAt | string |  | No |
| employerIdentificationNumber | string |  | No |
| tenantCountryCode | string |  | No |
| tenantCurrencyCode | string |  | No |
| terminationStage | string |  | No |
| hasBenefits | boolean |  | No |
| benefits | [ [v1BenefitMap](#v1benefitmap) ] |  | No |
| socialSecurityNumber | string |  | No |
| directDepositConsent | boolean |  | No |
| consentMailSend | boolean |  | No |
| hasSalaryAdvance | boolean |  | No |
| salaryAdvance | [v1SalaryAdvance](#v1salaryadvance) |  | No |
| effectiveCompensations | [ [v1EffectiveCompensation](#v1effectivecompensation) ] |  | No |
| isEffectiveSalary | boolean |  | No |
| passportCountry | string |  | No |
| ctc | double |  | No |
| deleted | boolean |  | No |
| isImported | boolean |  | No |
| announcements | [ [v1Announcement](#v1announcement) ] |  | No |
| isInCompleteProfile | boolean |  | No |
| inCompleteFields | [ string ] |  | No |
| isContactUpdated | boolean |  | No |
| beneficiaryId | string |  | No |
| customFieldData | [ [v1CustomFieldData](#v1customfielddata) ] |  | No |
| aliasName | string |  | No |
| beneficiaryStatus | string |  | No |
| beneficiaryReason | string |  | No |
| makePayroll | boolean |  | No |
| componentGroup | string |  | No |
| inviteUserToFillInfo | boolean |  | No |
| hasDocuments | boolean |  | No |
| locationValue | string |  | No |
| cnfrmDateUpdated | boolean |  | No |
| checkHqError | [protobufAny](#protobufany) |  | No |
| checkEmployeeId | string |  | No |
| documentSequenceId | string |  | No |
| isFromKafka | boolean |  | No |
| tenantUserId | string (int64) |  | No |
| customFields | object |  | No |
| prevDateOfJoining | [ string ] |  | No |
| isRehire | boolean |  | No |

#### v1UserBasicInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userId | string |  | No |
| firstName | string |  | No |
| lastName | string |  | No |
| emailId | string |  | No |
| tenantId | string |  | No |
| employeeId | string |  | No |
| iamUserId | string (int64) |  | No |
| erpTenantId | string (int64) |  | No |
| designation | string |  | No |

#### v1UserComponents

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| components | [ [v1ComponentMap](#v1componentmap) ] |  | No |
| email | string |  | No |
| uid | string |  | No |
| countryCode | string |  | No |
| errors | [ string ] |  | No |
| fullName | string |  | No |
| componentNameValueMap | object |  | No |

#### v1UserExistsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| email | string |  | No |
| exists | boolean |  | No |

#### v1UserFilter

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| conditions | [ [v1Condition](#v1condition) ] |  | No |

#### v1UserList

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [v1User](#v1user) ] |  | No |

#### v1UserPaymentDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| iamUserId | string (int64) |  | No |
| userId | string |  | No |
| emailId | string |  | No |
| firstName | string |  | No |
| lastName | string |  | No |
| paymentDetails | [v1PaymentDetails](#v1paymentdetails) |  | No |

#### v1UserResponseData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| erpTenantId | string (int64) |  | No |
| iamUserId | string (int64) |  | No |
| firstName | string |  | No |
| emailId | string |  | No |

#### v1UserShortInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userId | string |  | No |
| firstName | string |  | No |
| lastName | string |  | No |
| paymentDetails | [v1PaymentDetails](#v1paymentdetails) |  | No |
| emailId | string |  | No |
| tenantId | string |  | No |
| employeeId | string |  | No |
| address | [v1Address](#v1address) |  | No |
| iamUserId | string (int64) |  | No |
| erpTenantId | string (int64) |  | No |
| dateOfTermination | string |  | No |
| directDepositConsent | boolean |  | No |
| taxConfiguration | string |  | No |
| dateOfBirth | string |  | No |
| dateOfJoining | string |  | No |
| hasCompliance | boolean |  | No |
| compensationCurrency | string |  | No |
| beneficiaryId | string |  | No |
| beneficiaryStatus | string |  | No |
| beneficiaryReason | string |  | No |
| ctc | double |  | No |

#### v1UserShortInfoResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| userShortInfo | [v1UserShortInfo](#v1usershortinfo) |  | No |

#### v1UserStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| tenantId | string (int64) |  | No |
| iamUserId | string (int64) |  | No |

#### v1UsersEmailsAndUserCount

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| emails | [ string ] |  | No |
| empCount | string (int64) |  | No |

#### v1UsersEmailsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| emails | [ string ] |  | No |

#### v1UsersEmailsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userWithEmailResponse | [ [v1UsersWithEmailResponse](#v1userswithemailresponse) ] |  | No |
| message | string |  | No |

#### v1UsersPaymentDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| usersPaymentDetails | [ [v1UserPaymentDetails](#v1userpaymentdetails) ] |  | No |

#### v1UsersWithEmailResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| email | string |  | No |
| iamUserId | string (int64) |  | No |
| employeeId | string |  | No |
| designation | string |  | No |
| firstName | string |  | No |
| lastName | string |  | No |