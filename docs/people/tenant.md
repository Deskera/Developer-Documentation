---
id: tenant
title: Tenant
sidebar_label: Tenant
---

### Manage your Tenant/Organization/Company

#### GET
##### Summary

Get a tenant by id

##### Description

Get a tenant by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| getTenantConfig | query |  | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetTenantResponse](#v1gettenantresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants?getTenantConfig=true
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.comv1/people/tenants?getTenantConfig=true' \
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
  "tenant": {
    "tenantId": "6332e1f84a34b52444ff72b9",
    "iamUserId": "58372",
    "erpTenantId": "75531",
    "organizationName": "SingaporeTEst",
    "name": ",
    "companyCode": ",
    "phone": ",
    "address": {
      "addressLine1": ",
      "addressLine2": ",
      "zipCode": ",
      "city": ",
      "state": ",
      "country": "SG",
      "suburb": ",
      "county": "
    },
    "fax": ",
    "currency": "SGD",
    "orgSetupCompleted": true,
    "complianceEnabled": false,
    "multiCurrencyEnabled": false,
    "isWorkLocation": false,
    "profileStages": {
      "companyDetails": true,
      "paySchedule": true,
      "employeeDetails": true,
      "paymentDetails": false,
      "cpfDetails": true,
      "taxDetails": false,
      "payrollComponents": true,
      "completeEmployeeProfiles": false,
      "bankDetails": false,
      "filingAuthorization": false
    },
    "payrunCheckList": null,
    "website": ",
    "emailId": "rohan_us_temp@temp.deskera.xyz",
    "countryCode": "SG",
    "workWeekDetails": [
      {
        "day": "monday",
        "isWorkingDay": true,
        "startTime": "09:00 AM",
        "endTime": "06:00 PM",
        "duration": 9
      },
      {
        "day": "tuesday",
        "isWorkingDay": true,
        "startTime": "09:00 AM",
        "endTime": "06:00 PM",
        "duration": 9
      },
      {
        "day": "wednesday",
        "isWorkingDay": true,
        "startTime": "09:00 AM",
        "endTime": "06:00 PM",
        "duration": 9
      },
      {
        "day": "thursday",
        "isWorkingDay": true,
        "startTime": "09:00 AM",
        "endTime": "06:00 PM",
        "duration": 9
      },
      {
        "day": "friday",
        "isWorkingDay": true,
        "startTime": "09:00 AM",
        "endTime": "06:00 PM",
        "duration": 9
      },
      {
        "day": "saturday",
        "isWorkingDay": false,
        "startTime": "09:00 AM",
        "endTime": "06:00 PM",
        "duration": 9
      },
      {
        "day": "sunday",
        "isWorkingDay": false,
        "startTime": "09:00 AM",
        "endTime": "06:00 PM",
        "duration": 9
      }
    ],
    "dateOfCreation": "2022-09-27T08:53:56.678Z",
    "companyId": ",
    "legalEntityName": ",
    "contactNumber": ",
    "companySignatory": ",
    "businessClassification": {
      "id": "000000000000000000000000",
      "dwollaId": ",
      "name": ",
      "industryClassification": {
        "dwollaId": ",
        "name": "
      }
    },
    "UBI": {
      "type": ",
      "value": "
    },
    "businessType": ",
    "lineOfBusiness": ",
    "businessDescription": ",
    "UMR": 0,
    "companyEmail": ",
    "compliance": {
      "@type": "type.googleapis.com/v1.DefaultCompliance",
      "countryCode": "
    },
    "signatoryVerificationStatus": ",
    "tenantConfiguration": {
      "countryCode": "SG",
      "tenantId": "6332e1f84a34b52444ff72b9",
      "financialYear": {
        "startDate": "1900-01-01T00:00:00Z",
        "endDate": "1900-12-31T00:00:00Z"
      },
      "investmentConfig": {
        "declarationConfig": [],
        "proofOfInvestmentConfig": []
      },
      "confId": "6332e1f84a34b52444ff72c3",
      "dateFormat": "dd-MM-yyyy",
      "decimalFormat": "2",
      "geofencing": false
    },
    "dwollaDocumentRequiredFor": ",
    "oldFlow": false,
    "isCashfreeEnabled": false,
    "isAddBankAcc": false,
    "checkNumber": "0",
    "isLocationActive": false,
    "locationType": ",
    "checkHQIntegration": false,
    "checkHQCompanyCreated": false,
    "checkHqError": null,
    "isCheckhqOffCyclePaymentEnabled": false,
    "isPaypalPaymentEnabled": false,
    "payrunCalcCriteria": "numberOfWorkingDaysInMonth",
    "enableShiftManagement": true
  }
}
```


#### PUT
##### Summary

Update a tenant

##### Description

Update a tenant.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1Tenant](#v1tenant) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetTenantResponse](#v1gettenantresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants
```

##### Curl

```java
curl-X'PUT'\'https://bifrost-us.deskera.com/v1/people/tenants'\-H'accept: application/json'\-H'x-access-token: sampleaccesstoken'\-H'Content-Type: application/json'\-d'{   "tenantId": "6332e1f84a34b52444ff72b9",   "iamUserId": "58372",   "erpTenantId": "75531",   "organizationName": "SingaporeTEst",   "name": ",   "companyCode": ",   "phone": ",   "address": {     "addressLine1": ",     "addressLine2": ",     "zipCode": ",     "city": ",     "state": ",     "country": "SG",     "suburb": ",     "county": "   },   "fax": ",   "currency": "SGD",   "orgSetupCompleted": true,   "complianceEnabled": false,   "multiCurrencyEnabled": false,   "isWorkLocation": false,   "profileStages": {     "companyDetails": true,     "paySchedule": true,     "employeeDetails": true,     "paymentDetails": false,     "cpfDetails": true,     "taxDetails": false,     "payrollComponents": true,     "completeEmployeeProfiles": false,     "bankDetails": false,     "filingAuthorization": false   },   "payrunCheckList": null,   "website": ",   "emailId": "rohan_us_temp@temp.deskera.xyz",   "countryCode": "SG",   "workWeekDetails": [     {       "day": "monday",       "isWorkingDay": true,       "startTime": "09:00 AM",       "endTime": "06:00 PM",       "duration": 9     },     {       "day": "tuesday",       "isWorkingDay": true,       "startTime": "09:00 AM",       "endTime": "06:00 PM",       "duration": 9     },     {       "day": "wednesday",       "isWorkingDay": true,       "startTime": "09:00 AM",       "endTime": "06:00 PM",       "duration": 9     },     {       "day": "thursday",       "isWorkingDay": true,       "startTime": "09:00 AM",       "endTime": "06:00 PM",       "duration": 9     },     {       "day": "friday",       "isWorkingDay": true,       "startTime": "09:00 AM",       "endTime": "06:00 PM",       "duration": 9     },     {       "day": "saturday",       "isWorkingDay": false,       "startTime": "09:00 AM",       "endTime": "06:00 PM",       "duration": 9     },     {       "day": "sunday",       "isWorkingDay": false,       "startTime": "09:00 AM",       "endTime": "06:00 PM",       "duration": 9     }   ],   "dateOfCreation": "2022-09-27T08:53:56.678Z",   "companyId": ",   "legalEntityName": ",   "contactNumber": ",   "companySignatory": ",   "businessClassification": {     "id": "000000000000000000000000",     "dwollaId": ",     "name": ",     "industryClassification": {       "dwollaId": ",       "name": "     }   },   "UBI": {     "type": ",     "value": "   },   "businessType": ",   "lineOfBusiness": ",   "businessDescription": ",   "UMR": 0,   "companyEmail": ",   "compliance": {     "@type": "type.googleapis.com/v1.DefaultCompliance",     "countryCode": "   },   "signatoryVerificationStatus": ",   "tenantConfiguration": null,   "dwollaDocumentRequiredFor": ",   "oldFlow": false,   "isCashfreeEnabled": false,   "isAddBankAcc": false,   "checkNumber": "0",   "isLocationActive": false,   "locationType": ",   "checkHQIntegration": false,   "checkHQCompanyCreated": false,   "checkHqError": null,   "isCheckhqOffCyclePaymentEnabled": false,   "isPaypalPaymentEnabled": false,   "payrunCalcCriteria": "numberOfWorkingDaysInMonth",   "enableShiftManagement": false }'

```



##### Sample Request
```java
{
  "tenantId": "6332e1f84a34b52444ff72b9",
  "iamUserId": "58372",
  "erpTenantId": "75531",
  "organizationName": "SingaporeTEst",
  "name": ",
  "companyCode": ",
  "phone": ",
  "address": {
    "addressLine1": ",
    "addressLine2": ",
    "zipCode": ",
    "city": ",
    "state": ",
    "country": "SG",
    "suburb": ",
    "county": "
  },
  "fax": ",
  "currency": "SGD",
  "orgSetupCompleted": true,
  "complianceEnabled": false,
  "multiCurrencyEnabled": false,
  "isWorkLocation": false,
  "profileStages": {
    "companyDetails": true,
    "paySchedule": true,
    "employeeDetails": true,
    "paymentDetails": false,
    "cpfDetails": true,
    "taxDetails": false,
    "payrollComponents": true,
    "completeEmployeeProfiles": false,
    "bankDetails": false,
    "filingAuthorization": false
  },
  "payrunCheckList": null,
  "website": ",
  "emailId": "rohan_us_temp@temp.deskera.xyz",
  "countryCode": "SG",
  "workWeekDetails": [
    {
      "day": "monday",
      "isWorkingDay": true,
      "startTime": "09:00 AM",
      "endTime": "06:00 PM",
      "duration": 9
    },
    {
      "day": "tuesday",
      "isWorkingDay": true,
      "startTime": "09:00 AM",
      "endTime": "06:00 PM",
      "duration": 9
    },
    {
      "day": "wednesday",
      "isWorkingDay": true,
      "startTime": "09:00 AM",
      "endTime": "06:00 PM",
      "duration": 9
    },
    {
      "day": "thursday",
      "isWorkingDay": true,
      "startTime": "09:00 AM",
      "endTime": "06:00 PM",
      "duration": 9
    },
    {
      "day": "friday",
      "isWorkingDay": true,
      "startTime": "09:00 AM",
      "endTime": "06:00 PM",
      "duration": 9
    },
    {
      "day": "saturday",
      "isWorkingDay": false,
      "startTime": "09:00 AM",
      "endTime": "06:00 PM",
      "duration": 9
    },
    {
      "day": "sunday",
      "isWorkingDay": false,
      "startTime": "09:00 AM",
      "endTime": "06:00 PM",
      "duration": 9
    }
  ],
  "dateOfCreation": "2022-09-27T08:53:56.678Z",
  "companyId": ",
  "legalEntityName": ",
  "contactNumber": ",
  "companySignatory": ",
  "businessClassification": {
    "id": "000000000000000000000000",
    "dwollaId": ",
    "name": ",
    "industryClassification": {
      "dwollaId": ",
      "name": "
    }
  },
  "UBI": {
    "type": ",
    "value": "
  },
  "businessType": ",
  "lineOfBusiness": ",
  "businessDescription": ",
  "UMR": 0,
  "companyEmail": ",
  "compliance": {
    "@type": "type.googleapis.com/v1.DefaultCompliance",
    "countryCode": "
  },
  "signatoryVerificationStatus": ",
  "tenantConfiguration": null,
  "dwollaDocumentRequiredFor": ",
  "oldFlow": false,
  "isCashfreeEnabled": false,
  "isAddBankAcc": false,
  "checkNumber": "0",
  "isLocationActive": false,
  "locationType": ",
  "checkHQIntegration": false,
  "checkHQCompanyCreated": false,
  "checkHqError": null,
  "isCheckhqOffCyclePaymentEnabled": false,
  "isPaypalPaymentEnabled": false,
  "payrunCalcCriteria": "numberOfWorkingDaysInMonth",
  "enableShiftManagement": true
}
```

##### Sample Response
```java
{
  "status": "OK",
  "tenant": {
    "tenantId": "6332e1f84a34b52444ff72b9",
    "iamUserId": "58372",
    "erpTenantId": "75531",
    "organizationName": "SingaporeTEst",
    "name": ",
    "companyCode": ",
    "phone": ",
    "address": {
      "addressLine1": ",
      "addressLine2": ",
      "zipCode": ",
      "city": ",
      "state": ",
      "country": "SG",
      "suburb": ",
      "county": "
    },
    "fax": ",
    "currency": "SGD",
    "orgSetupCompleted": true,
    "complianceEnabled": false,
    "multiCurrencyEnabled": false,
    "isWorkLocation": false,
    "profileStages": {
      "companyDetails": true,
      "paySchedule": true,
      "employeeDetails": true,
      "paymentDetails": false,
      "cpfDetails": true,
      "taxDetails": false,
      "payrollComponents": true,
      "completeEmployeeProfiles": false,
      "bankDetails": false,
      "filingAuthorization": false
    },
    "payrunCheckList": null,
    "website": ",
    "emailId": "rohan_us_temp@temp.deskera.xyz",
    "countryCode": "SG",
    "workWeekDetails": [
      {
        "day": "monday",
        "isWorkingDay": true,
        "startTime": "09:00 AM",
        "endTime": "06:00 PM",
        "duration": 9
      },
      {
        "day": "tuesday",
        "isWorkingDay": true,
        "startTime": "09:00 AM",
        "endTime": "06:00 PM",
        "duration": 9
      },
      {
        "day": "wednesday",
        "isWorkingDay": true,
        "startTime": "09:00 AM",
        "endTime": "06:00 PM",
        "duration": 9
      },
      {
        "day": "thursday",
        "isWorkingDay": true,
        "startTime": "09:00 AM",
        "endTime": "06:00 PM",
        "duration": 9
      },
      {
        "day": "friday",
        "isWorkingDay": true,
        "startTime": "09:00 AM",
        "endTime": "06:00 PM",
        "duration": 9
      },
      {
        "day": "saturday",
        "isWorkingDay": false,
        "startTime": "09:00 AM",
        "endTime": "06:00 PM",
        "duration": 9
      },
      {
        "day": "sunday",
        "isWorkingDay": false,
        "startTime": "09:00 AM",
        "endTime": "06:00 PM",
        "duration": 9
      }
    ],
    "dateOfCreation": "2022-09-27T08:53:56.678Z",
    "companyId": ",
    "legalEntityName": ",
    "contactNumber": ",
    "companySignatory": ",
    "businessClassification": {
      "id": "000000000000000000000000",
      "dwollaId": ",
      "name": ",
      "industryClassification": {
        "dwollaId": ",
        "name": "
      }
    },
    "UBI": {
      "type": ",
      "value": "
    },
    "businessType": ",
    "lineOfBusiness": ",
    "businessDescription": ",
    "UMR": 0,
    "companyEmail": ",
    "compliance": {
      "@type": "type.googleapis.com/v1.DefaultCompliance",
      "countryCode": "
    },
    "signatoryVerificationStatus": ",
    "tenantConfiguration": null,
    "dwollaDocumentRequiredFor": ",
    "oldFlow": false,
    "isCashfreeEnabled": false,
    "isAddBankAcc": false,
    "checkNumber": "0",
    "isLocationActive": false,
    "locationType": ",
    "checkHQIntegration": false,
    "checkHQCompanyCreated": false,
    "checkHqError": null,
    "isCheckhqOffCyclePaymentEnabled": false,
    "isPaypalPaymentEnabled": false,
    "payrunCalcCriteria": "numberOfWorkingDaysInMonth",
    "enableShiftManagement": true
  }
}
```
### Business classifications

#### GET
##### Summary

Get dwolla business classifications

##### Description

Get dwolla business classifications

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1BusinessClassificationsResponse](#v1businessclassificationsresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

#### POST
##### Summary

Insert dwolla business classifications

##### Description

Insert dwolla business classifications

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1AddBusinessClassificationsRequest](#v1addbusinessclassificationsrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1BusinessClassificationsResponse](#v1businessclassificationsresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### Tenant Configurations

#### GET
##### Summary

Get tenant configuration for company

##### Description

Get tenant configuration for company

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1TenantConfigurationResponse](#v1tenantconfigurationresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/configuration
```

##### Curl

```java
curl -X 'GET' \
  https://bifrost-us.deskera.com/v1/people/tenants/configuration' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'
```

##### Sample Request
```java

```

##### Sample Response
```java
{
  "countryCode": "string",
  "tenantId": "string",
  "financialYear": {
    "startDate": "2022-10-28T07:26:09.482Z",
    "endDate": "2022-10-28T07:26:09.482Z"
  },
  "investmentConfig": {
    "declarationConfig": [
      {
        "declarationStartDate": "2022-10-28T07:26:09.482Z",
        "declarationEndDate": "2022-10-28T07:26:09.482Z",
        "declarationLockStatus": true,
        "considerForITDeclaration": true,
        "declarationEffectiveMonth": "string",
        "active": true,
        "id": "string"
      }
    ],
    "proofOfInvestmentConfig": [
      {
        "proofOfInvestmentStartDate": "2022-10-28T07:26:09.482Z",
        "proofOfInvestmentEndDate": "2022-10-28T07:26:09.482Z",
        "proofOfInvestmentLockStatus": true,
        "active": true,
        "id": "string"
      }
    ]
  },
  "confId": "string",
  "dateFormat": "string",
  "decimalFormat": "string",
  "geofencing": true
}
```

#### PATCH
##### Summary

Update tenant configuration for company

##### Description

Update tenant configuration for company

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1TenantConfigurationRequest](#v1tenantconfigurationrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1TenantConfigurationResponse](#v1tenantconfigurationresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


### Configuration stage of an Organization/Company

#### PUT
##### Summary

Update a tenant

##### Description

Update a tenant.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| stage | path |  | Yes | string |
| body | body |  | Yes | [v1ProfileStage](#v1profilestage) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1TenantProfileStagesResponse](#v1tenantprofilestagesresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/profile/cpfDetails
```

##### Curl

```java
curl -X 'PUT' \
  'https://bifrost-us.deskera.com/v1/people/tenants/profile/cpfDetails' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken' \
  -H 'Content-Type: application/json' \
  -d '{
  "stage": "cpfDetails"
}'
```

##### Sample Request
```java
{
  "stage": "cpfDetails"
}
```

##### Sample Response
```java
{
  "status": "OK",
  "tenantId": "6332e1f84a34b52444ff72b9",
  "profileStages": {
    "companyDetails": true,
    "paySchedule": true,
    "employeeDetails": true,
    "paymentDetails": false,
    "cpfDetails": true,
    "taxDetails": false,
    "payrollComponents": true,
    "completeEmployeeProfiles": false,
    "bankDetails": false,
    "filingAuthorization": false
  }
}
```

### Fetch minimal Organization/Company Info

#### GET
##### Summary

Get tenant info

##### Description

Get tenant info based on its tenant ID contained in auth token

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetTenantShortInfoResponse](#v1gettenantshortinforesponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/tenant-short-info
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/tenants/tenant-short-info' \
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
  "tenantShortInfo": {
    "tenantId": "6332e1f84a34b52444ff72b9",
    "organizationName": "SingaporeTEst",
    "name": "Rohan Test",
    "companyCode": ",
    "phone": ",
    "address": {
      "addressLine1": ",
      "addressLine2": ",
      "zipCode": ",
      "city": ",
      "state": ",
      "country": "SG",
      "suburb": ",
      "county": "
    },
    "fax": ",
    "currency": "SGD",
    "countryCode": "SG",
    "companyId": ",
    "legalEntityName": ",
    "contactNumber": ",
    "businessClassification": {
      "id": "000000000000000000000000",
      "dwollaId": ",
      "name": ",
      "industryClassification": {
        "dwollaId": ",
        "name": "
      }
    },
    "companySignatory": ",
    "companyEmail": ",
    "oldFlow": false,
    "isAddBankAcc": false,
    "checkNumber": "0",
    "isLocationActive": false,
    "locationType": "
  }
}
```


### Get list features for your Organization/Company

#### GET
##### Summary

Get Features for Country

##### Description

Get Features for Country

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| countryCode | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1CountryFeaturesResponse](#v1countryfeaturesresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/country-feature/US
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/tenants/country-feature/US' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'
```

##### Sample Request
```java

```

##### Sample Response
```java
{
  "isRevertPayrunAllowed": false,
  "isDeletePayrunAllowed": false,
  "isEmployeeExportEnabled": false
}
```

### Validate emails for company/users/employees

#### GET
##### Summary

Check email exist for any user or for company

##### Description

Check email exist for any user or for company

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| emailId | query |  | No | string |
| contact | query |  | No | string |
| userId | query |  | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1DuplicateEmailResponse](#v1duplicateemailresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |



##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/email/validate?emailId=shubham%40gmail.com&contact=9392939442
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/tenants/email/validate?emailId=shubham%40gmail.com&contact=9392939442' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'
```

##### Sample Request
```java

```

##### Sample Response
```java
{
  "isdupliacateEmail": false,
  "isdupliacateContact": false
}

```
### Geo-locations 

#### GET
##### Summary

Get tenant geolocations by iamUserId

##### Description

Get geolocations values of the tenant by iamUserId

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GeoFencingPlansResponse](#v1geofencingplansresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/geofencing/plans
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/tenants/geofencing/plans' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'
```

##### Sample Request
```java
```

##### Sample Response
```java
{
  "plans": [
    "ProfessionalPlus"
  ]
}
```
### Fetch Books Integration for JE

#### GET
##### Summary

Get Integration Mapping

##### Description

Get Integration Mapping.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1IntegrationMappingResponse](#v1integrationmappingresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/integration-mapping
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/tenants/integration-mapping' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'
```

##### Sample Request
```java
```

##### Sample Response
```java
{
  "id": "629636e7d3e4fba66b81d717",
  "tenantId": "629636e6d3e4fba66b81d705",
  "erpTenantId": "74192",
  "countryCode": "IN",
  "active": true,
  "whenJEPosted": "payDate",
  "mapping": [
    {
      "payType": "Earnings",
      "expenseAccount": "ACC70003",
      "liabilityAccount": "ACC40004",
      "components": [
        {
          "name": "Basic",
          "id": "629636e7772d5f6a6954c2a9",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": false
        },
        {
          "name": "Bonus",
          "id": "629636e7772d5f6a6954c2aa",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": false
        },
        {
          "name": "Conveyance Allowance",
          "id": "629636e7772d5f6a6954c2a7",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": false
        },
        {
          "name": "Fixed Allowance",
          "id": "629636e7772d5f6a6954c2a6",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": false
        },
        {
          "name": "Commission",
          "id": "629636e7772d5f6a6954c2ab",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": false
        },
        {
          "name": "HRA",
          "id": "629636e7772d5f6a6954c2a8",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": false
        },
        {
          "name": "Transport Allowance",
          "id": "629636e7772d5f6a6954c2ac",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": false
        }
      ]
    },
    {
      "payType": "Employee Deductions",
      "expenseAccount": "ACC70003",
      "liabilityAccount": "ACC40004",
      "components": [
        {
          "name": "EPF Contribution",
          "id": "EPF",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        },
        {
          "name": "ESI",
          "id": "ESI",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        },
        {
          "name": "Income Tax",
          "id": "Income Tax",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        },
        {
          "name": "Professional Tax",
          "id": "Professional Tax",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        }
      ]
    },
    {
      "payType": "Employer Contributions",
      "expenseAccount": "ACC70003",
      "liabilityAccount": "ACC40004",
      "components": [
        {
          "name": "EPF Contribution",
          "id": "EPF",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        },
        {
          "name": "ESI",
          "id": "ESI",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        },
        {
          "name": "EPS",
          "id": "EPS",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        }
      ]
    }
  ]
}
```

### Toggle Books Integration for JE

#### PATCH
##### Summary

Toggle Integration Mapping

##### Description

Toggle Integration Mapping.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1ToggleIntegrationMappingRequest](#v1toggleintegrationmappingrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1IntegrationMappingResponse](#v1integrationmappingresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/integration-mapping
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/tenants/integration-mapping' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'
```

##### Sample Request
```java
```

##### Sample Response
```java
{
  "id": "629636e7d3e4fba66b81d717",
  "tenantId": "629636e6d3e4fba66b81d705",
  "erpTenantId": "74192",
  "countryCode": "IN",
  "active": true,
  "whenJEPosted": "payDate",
  "mapping": [
    {
      "payType": "Earnings",
      "expenseAccount": "ACC70003",
      "liabilityAccount": "ACC40004",
      "components": [
        {
          "name": "Basic",
          "id": "629636e7772d5f6a6954c2a9",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": false
        },
        {
          "name": "Bonus",
          "id": "629636e7772d5f6a6954c2aa",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": false
        },
        {
          "name": "Conveyance Allowance",
          "id": "629636e7772d5f6a6954c2a7",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": false
        },
        {
          "name": "Fixed Allowance",
          "id": "629636e7772d5f6a6954c2a6",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": false
        },
        {
          "name": "Commission",
          "id": "629636e7772d5f6a6954c2ab",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": false
        },
        {
          "name": "HRA",
          "id": "629636e7772d5f6a6954c2a8",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": false
        },
        {
          "name": "Transport Allowance",
          "id": "629636e7772d5f6a6954c2ac",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": false
        }
      ]
    },
    {
      "payType": "Employee Deductions",
      "expenseAccount": "ACC70003",
      "liabilityAccount": "ACC40004",
      "components": [
        {
          "name": "EPF Contribution",
          "id": "EPF",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        },
        {
          "name": "ESI",
          "id": "ESI",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        },
        {
          "name": "Income Tax",
          "id": "Income Tax",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        },
        {
          "name": "Professional Tax",
          "id": "Professional Tax",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        }
      ]
    },
    {
      "payType": "Employer Contributions",
      "expenseAccount": "ACC70003",
      "liabilityAccount": "ACC40004",
      "components": [
        {
          "name": "EPF Contribution",
          "id": "EPF",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        },
        {
          "name": "ESI",
          "id": "ESI",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        },
        {
          "name": "EPS",
          "id": "EPS",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        }
      ]
    }
  ]
}
```


### Update Books Integration Mappings for JE

#### PUT
##### Summary

Update Integration Mapping

##### Description

Update Integration Mapping.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1IntegrationMappingRequest](#v1integrationmappingrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1IntegrationMappingResponse](#v1integrationmappingresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |



##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/update/integration-mapping```
```
##### Curl

```java
curl -X 'PUT' \
  'https://bifrost-us.deskera.com/v1/people/tenants/update/integration-mapping' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken' \
  -H 'Content-Type: application/json' \
  -d '{"active":true,"countryCode":"SG","erpTenantId":"75531","id":"6332e1f94a25f774ed3a4fa2","tenantId":"6332e1f84a34b52444ff72b9","whenJEPosted":"payDate","mapping":[{"expenseAccount":"ACC70003","liabilityAccount":"ACC40004","payType":"Earnings","components":[{"name":"Reimbursement","id":"6332e1fa99b248f47220d2d3","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":false},{"name":"AWS","id":"6332e1fa99b248f47220d2d4","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":false},{"name":"Bonus","id":"6332e1fa99b248f47220d2d6","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":false},{"name":"Allowance","id":"6332e1fa99b248f47220d2d7","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":false},{"name":"Commission","id":"6332e1fa99b248f47220d2d5","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":false}]},{"expenseAccount":"ACC70003","liabilityAccount":"ACC40004","payType":"Employee Deductions","components":[{"name":"SINDA","id":"sinda","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":true},{"name":"CDAC","id":"cdac","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":true},{"name":"MBMF","id":"mbmf","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":true},{"name":"ECF","id":"ecf","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":true},{"name":"CPF","id":"cpfContribution","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":true}]},{"expenseAccount":"ACC70003","liabilityAccount":"ACC40004","payType":"Employer Contributions","components":[{"name":"CPF","id":"cpfContribution","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":true},{"name":"SDL","id":"employerSDL","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":true},{"name":"FWL","id":"employerFWL","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":true}]}]}'```
```
##### Sample Request
```java
{"active":true,"countryCode":"SG","erpTenantId":"75531","id":"6332e1f94a25f774ed3a4fa2","tenantId":"6332e1f84a34b52444ff72b9","whenJEPosted":"payDate","mapping":[{"expenseAccount":"ACC70003","liabilityAccount":"ACC40004","payType":"Earnings","components":[{"name":"Reimbursement","id":"6332e1fa99b248f47220d2d3","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":false},{"name":"AWS","id":"6332e1fa99b248f47220d2d4","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":false},{"name":"Bonus","id":"6332e1fa99b248f47220d2d6","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":false},{"name":"Allowance","id":"6332e1fa99b248f47220d2d7","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":false},{"name":"Commission","id":"6332e1fa99b248f47220d2d5","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":false}]},{"expenseAccount":"ACC70003","liabilityAccount":"ACC40004","payType":"Employee Deductions","components":[{"name":"SINDA","id":"sinda","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":true},{"name":"CDAC","id":"cdac","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":true},{"name":"MBMF","id":"mbmf","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":true},{"name":"ECF","id":"ecf","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":true},{"name":"CPF","id":"cpfContribution","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":true}]},{"expenseAccount":"ACC70003","liabilityAccount":"ACC40004","payType":"Employer Contributions","components":[{"name":"CPF","id":"cpfContribution","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":true},{"name":"SDL","id":"employerSDL","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":true},{"name":"FWL","id":"employerFWL","expenseAccount":"ACC70003","liabilityAccount":"ACC40004","isTax":true}]}]}```
```
##### Sample Response
```java
{
  "id": "6332e1f94a25f774ed3a4fa2",
  "tenantId": "6332e1f84a34b52444ff72b9",
  "erpTenantId": "75531",
  "countryCode": "SG",
  "active": true,
  "whenJEPosted": "payDate",
  "mapping": [
    {
      "payType": "Earnings",
      "expenseAccount": "ACC70003",
      "liabilityAccount": "ACC40004",
      "components": [
        {
          "name": "Reimbursement",
          "id": "6332e1fa99b248f47220d2d3",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": false
        },
        {
          "name": "AWS",
          "id": "6332e1fa99b248f47220d2d4",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": false
        },
        {
          "name": "Bonus",
          "id": "6332e1fa99b248f47220d2d6",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": false
        },
        {
          "name": "Allowance",
          "id": "6332e1fa99b248f47220d2d7",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": false
        },
        {
          "name": "Commission",
          "id": "6332e1fa99b248f47220d2d5",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": false
        }
      ]
    },
    {
      "payType": "Employee Deductions",
      "expenseAccount": "ACC70003",
      "liabilityAccount": "ACC40004",
      "components": [
        {
          "name": "SINDA",
          "id": "sinda",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        },
        {
          "name": "CDAC",
          "id": "cdac",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        },
        {
          "name": "MBMF",
          "id": "mbmf",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        },
        {
          "name": "ECF",
          "id": "ecf",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        },
        {
          "name": "CPF",
          "id": "cpfContribution",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        }
      ]
    },
    {
      "payType": "Employer Contributions",
      "expenseAccount": "ACC70003",
      "liabilityAccount": "ACC40004",
      "components": [
        {
          "name": "CPF",
          "id": "cpfContribution",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        },
        {
          "name": "SDL",
          "id": "employerSDL",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        },
        {
          "name": "FWL",
          "id": "employerFWL",
          "expenseAccount": "ACC70003",
          "liabilityAccount": "ACC40004",
          "isTax": true
        }
      ]
    }
  ]
}
```

#### PUT
##### Summary

Update Payment Integration Status

##### Description

Update Payment Integration Status.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| status | path |  | Yes | string |
| body | body |  | Yes | [v1PaymentIntegrationStatus](#v1paymentintegrationstatus) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1PaymentIntegrationStatus](#v1paymentintegrationstatus) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### Fetch Leave balances for employees

#### GET
##### Summary

Get Entitlement

##### Description

Get Entitlement.

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
| 200 | A successful response. | [v1EntitlementResponse](#v1entitlementresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/leave-entitlement/leaveBalance?limit=10&currentPage=1&orderBy.field=updatedAt&orderBy.order=desc&field=2022-01-01,2022-12-31
```

##### Curl
```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/tenants/leave-entitlement/leaveBalance?limit=10&currentPage=1&orderBy.field=updatedAt&orderBy.order=desc&field=2022-01-01,2022-12-31'\
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'
```

##### Sample Request
```java
```

##### Sample Response
```java
{
  "leaveTypes": [
    {
      "_id": "635277725c3a1f94f308213f",
      "leaveDescription": "",
      "leaveType": "A",
      "colorCode": "green",
      "isPaid": false,
      "leaveStatus": "Active",
      "daysPerYear": 10,
      "isApplicableToAll": true,
      "isAllowForUnpaidLeave": false
    }
  ],
  "leaveDetails": [
    {
      "users": {
        "firstName": "Rohan",
        "lastName": "Test",
        "designation": "qa",
        "iamUserId": "58372",
        "roles": [
          
        ]
      },
      "leaveBalanace": [
        {
          "_id": "635277725c3a1f94f308213f",
          "leaveType": "A",
          "entitledLeaves": 10,
          "carryForwardLeaves": 0,
          "earnedLeaves": 10,
          "takenLeaves": 2,
          "balanceLeaves": 8,
          "colorCode": "",
          "isPaid": false,
          "appliedLeaves": 0,
          "isFromLeaveDetails": false,
          "isAllowForUnpaidLeave": false,
          "adjustedLeaves": 0,
          "carryForwardExpiredBal": 0
        }
      ]
    },
    
  ],
  "filterConfig": {
    "page": "1",
    "numberOfElements": "6",
    "sizePerPage": "10",
    "totalPage": "1",
    "numberOfRecords": "6"
  }
}
```
### Organization/Company notification settings

#### GET
##### Summary

Get user notification settings

##### Description

Get notification settings values of the user

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1TenantNotificationSetting](#v1tenantnotificationsetting) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/notification-settings
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/tenants/notification-settings' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'
```

##### Sample Request
```java
```

##### Sample Response
```java
{
  "id": "",
  "tenantId": "75531",
  "settings": [
    {
      "id": "6256cfa07585d431b22398a6",
      "name": "Payrun Emails",
      "value": true,
      "key": "PAYRUN_EMAILS",
      "type": "EMAIL",
      "description": "Setting to enable/disable payrun processing email notifications"
    },
    {
      "id": "6258050af909e7b6a773e072",
      "name": "Test Emails",
      "value": true,
      "key": "TEST_EMAILS",
      "type": "EMAIL",
      "description": "Setting to enable/disable  test processing email notifications"
    },
    {
      "id": "62580532f909e7b6a773e073",
      "name": "Payrun Bell",
      "value": true,
      "key": "PAYRUN_BELL",
      "type": "BELL",
      "description": "Setting to enable/disable payrun processing bell notifications"
    }
  ],
  "updatedAt": null,
  "updatedBy": "0"
}
```
#### POST
##### Summary

Set user notification settings

##### Description

Set notification settings values of the user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1TenantNotificationSetting](#v1tenantnotificationsetting) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1TenantNotificationSetting](#v1tenantnotificationsetting) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### Organization/Comapny Checlist for running payruns

#### GET
##### Summary

Get tenant payrun checklist

##### Description

Get tenant payrun checklist.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1PayrunCheckListResponse](#v1payrunchecklistresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
 https://bifrost-us.deskera.com/v1/people/tenants/payrun/checklist
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/tenants/payrun/checklist' \
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
  "checklist": [
    {
      "index": "0",
      "isChecked": false,
      "question": "Have you filled your Company Details?"
    },
    {
      "index": "1",
      "isChecked": false,
      "question": "Have you created a CPF Account?"
    },
    {
      "index": "2",
      "isChecked": false,
      "question": "Have you created a Pay Schedule for your employees?"
    }
  ]
}
```
#### PUT
##### Summary

Update tenant payrun checklist

##### Description

Update tenant payrun checklist

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1PayrunCheckList](#v1payrunchecklist) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1PayrunCheckListResponse](#v1payrunchecklistresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


### Get all the roles available for users

#### GET
##### Summary

Get tenant roles

##### Description

Get tenant roles.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| module | query |  | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1TenantRoleMappingResponse](#v1tenantrolemappingresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/roles/details
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/tenants/roles/details' \
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
  "tenantRoles": {
    "id": "6332e1f84a34b52444ff72ba",
    "erpTenantId": "75531",
    "roles": [
      {
        "roleId": "5f4fd64782e6aa8ee90378ec",
        "name": "HR",
        "appName": "PEOPLE",
        "policies": []
      },
      {
        "roleId": "5f4fd64782e6aa8ee90378eb",
        "name": "ADMIN",
        "appName": "PEOPLE",
        "policies": []
      },
      {
        "roleId": "5f4fd64782e6aa8ee90378ef",
        "name": "OWNER",
        "appName": "PEOPLE",
        "policies": []
      },
      {
        "roleId": "5f4fd64782e6aa8ee90378ed",
        "name": "MANAGER",
        "appName": "PEOPLE",
        "policies": []
      },
      {
        "roleId": "5f4fd64782e6aa8ee90378ee",
        "name": "USER",
        "appName": "PEOPLE",
        "policies": []
      },
      {
        "roleId": "61d28833b26d810f034b96a2",
        "name": "PAID_USER",
        "appName": "PEOPLE",
        "policies": []
      },
      {
        "roleId": "62a32b0a13c229e91fb26036",
        "name": "HIRINGADMIN",
        "appName": "PEOPLE",
        "policies": []
      }
    ]
  }
}
```

### Manage Organization/Company Workweek 

#### GET
##### Summary

Get tenant workweek info

##### Description

Get tenant workweek info based on its tenant ID contained in auth token

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1TenantWorkweekResponse](#v1tenantworkweekresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/workweek
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/tenants/workweek' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'
```

##### Sample Request
```java
```

##### Sample Response
```java
{
  "workweek": [
    {
      "day": "monday",
      "isWorkingDay": true,
      "startTime": "09:00 AM",
      "endTime": "06:00 PM",
      "duration": 9
    },
    {
      "day": "tuesday",
      "isWorkingDay": true,
      "startTime": "09:00 AM",
      "endTime": "06:00 PM",
      "duration": 9
    },
    {
      "day": "wednesday",
      "isWorkingDay": true,
      "startTime": "09:00 AM",
      "endTime": "06:00 PM",
      "duration": 9
    },
    {
      "day": "thursday",
      "isWorkingDay": true,
      "startTime": "09:00 AM",
      "endTime": "06:00 PM",
      "duration": 9
    },
    {
      "day": "friday",
      "isWorkingDay": true,
      "startTime": "09:00 AM",
      "endTime": "06:00 PM",
      "duration": 9
    },
    {
      "day": "saturday",
      "isWorkingDay": false,
      "startTime": "09:00 AM",
      "endTime": "06:00 PM",
      "duration": 9
    },
    {
      "day": "sunday",
      "isWorkingDay": false,
      "startTime": "09:00 AM",
      "endTime": "06:00 PM",
      "duration": 9
    }
  ]
}
```
#### POST
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1ErpTenantId](#v1erptenantid) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1TenantWorkweekResponse](#v1tenantworkweekresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants
```

##### Curl

```java
curl-X'PUT'\'https://bifrost-us.deskera.com/v1/people/tenants'\-H'accept: application/json'\-H'x-access-token: sampleaccesstoken'\-H'Content-Type: application/json'\-d'{   ""tenantId"": ""6332e1f84a34b52444ff72b9"",   ""iamUserId"": ""58372"",   ""erpTenantId"": ""75531"",   ""organizationName"": ""SingaporeTEst"",   ""name"": """",   ""companyCode"": """",   ""phone"": """",   ""address"": {     ""addressLine1"": """",     ""addressLine2"": """",     ""zipCode"": """",     ""city"": """",     ""state"": """",     ""country"": ""SG"",     ""suburb"": """",     ""county"": """"   },   ""fax"": """",   ""currency"": ""SGD"",   ""orgSetupCompleted"": true,   ""complianceEnabled"": false,   ""multiCurrencyEnabled"": false,   ""isWorkLocation"": false,   ""profileStages"": {     ""companyDetails"": true,     ""paySchedule"": true,     ""employeeDetails"": true,     ""paymentDetails"": false,     ""cpfDetails"": true,     ""taxDetails"": false,     ""payrollComponents"": true,     ""completeEmployeeProfiles"": false,     ""bankDetails"": false,     ""filingAuthorization"": false   },   ""payrunCheckList"": null,   ""website"": """",   ""emailId"": ""rohan_us_temp@temp.deskera.xyz"",   ""countryCode"": ""SG"",   ""workWeekDetails"": [     {       ""day"": ""monday"",       ""isWorkingDay"": true,       ""startTime"": ""09:00 AM"",       ""endTime"": ""06:00 PM"",       ""duration"": 9     },     {       ""day"": ""tuesday"",       ""isWorkingDay"": true,       ""startTime"": ""09:00 AM"",       ""endTime"": ""06:00 PM"",       ""duration"": 9     },     {       ""day"": ""wednesday"",       ""isWorkingDay"": true,       ""startTime"": ""09:00 AM"",       ""endTime"": ""06:00 PM"",       ""duration"": 9     },     {       ""day"": ""thursday"",       ""isWorkingDay"": true,       ""startTime"": ""09:00 AM"",       ""endTime"": ""06:00 PM"",       ""duration"": 9     },     {       ""day"": ""friday"",       ""isWorkingDay"": true,       ""startTime"": ""09:00 AM"",       ""endTime"": ""06:00 PM"",       ""duration"": 9     },     {       ""day"": ""saturday"",       ""isWorkingDay"": false,       ""startTime"": ""09:00 AM"",       ""endTime"": ""06:00 PM"",       ""duration"": 9     },     {       ""day"": ""sunday"",       ""isWorkingDay"": false,       ""startTime"": ""09:00 AM"",       ""endTime"": ""06:00 PM"",       ""duration"": 9     }   ],   ""dateOfCreation"": ""2022-09-27T08:53:56.678Z"",   ""companyId"": """",   ""legalEntityName"": """",   ""contactNumber"": """",   ""companySignatory"": """",   ""businessClassification"": {     ""id"": ""000000000000000000000000"",     ""dwollaId"": """",     ""name"": """",     ""industryClassification"": {       ""dwollaId"": """",       ""name"": """"     }   },   ""UBI"": {     ""type"": """",     ""value"": """"   },   ""businessType"": """",   ""lineOfBusiness"": """",   ""businessDescription"": """",   ""UMR"": 0,   ""companyEmail"": """",   ""compliance"": {     ""@type"": ""type.googleapis.com/v1.DefaultCompliance"",     ""countryCode"": """"   },   ""signatoryVerificationStatus"": """",   ""tenantConfiguration"": null,   ""dwollaDocumentRequiredFor"": """",   ""oldFlow"": false,   ""isCashfreeEnabled"": false,   ""isAddBankAcc"": false,   ""checkNumber"": ""0"",   ""isLocationActive"": false,   ""locationType"": """",   ""checkHQIntegration"": false,   ""checkHQCompanyCreated"": false,   ""checkHqError"": null,   ""isCheckhqOffCyclePaymentEnabled"": false,   ""isPaypalPaymentEnabled"": false,   ""payrunCalcCriteria"": ""numberOfWorkingDaysInMonth"",   ""enableShiftManagement"": false }'

```

##### Sample Request
```java
{
  ""tenantId"": ""6332e1f84a34b52444ff72b9"",
  ""iamUserId"": ""58372"",
  ""erpTenantId"": ""75531"",
  ""organizationName"": ""SingaporeTEst"",
  ""name"": """",
  ""companyCode"": """",
  ""phone"": """",
  ""address"": {
    ""addressLine1"": """",
    ""addressLine2"": """",
    ""zipCode"": """",
    ""city"": """",
    ""state"": """",
    ""country"": ""SG"",
    ""suburb"": """",
    ""county"": """"
  },
  ""fax"": """",
  ""currency"": ""SGD"",
  ""orgSetupCompleted"": true,
  ""complianceEnabled"": false,
  ""multiCurrencyEnabled"": false,
  ""isWorkLocation"": false,
  ""profileStages"": {
    ""companyDetails"": true,
    ""paySchedule"": true,
    ""employeeDetails"": true,
    ""paymentDetails"": false,
    ""cpfDetails"": true,
    ""taxDetails"": false,
    ""payrollComponents"": true,
    ""completeEmployeeProfiles"": false,
    ""bankDetails"": false,
    ""filingAuthorization"": false
  },
  ""payrunCheckList"": null,
  ""website"": """",
  ""emailId"": ""rohan_us_temp@temp.deskera.xyz"",
  ""countryCode"": ""SG"",
  ""workWeekDetails"": [
    {
      ""day"": ""monday"",
      ""isWorkingDay"": true,
      ""startTime"": ""09:00 AM"",
      ""endTime"": ""06:00 PM"",
      ""duration"": 9
    },
    {
      ""day"": ""tuesday"",
      ""isWorkingDay"": true,
      ""startTime"": ""09:00 AM"",
      ""endTime"": ""06:00 PM"",
      ""duration"": 9
    },
    {
      ""day"": ""wednesday"",
      ""isWorkingDay"": true,
      ""startTime"": ""09:00 AM"",
      ""endTime"": ""06:00 PM"",
      ""duration"": 9
    },
    {
      ""day"": ""thursday"",
      ""isWorkingDay"": true,
      ""startTime"": ""09:00 AM"",
      ""endTime"": ""06:00 PM"",
      ""duration"": 9
    },
    {
      ""day"": ""friday"",
      ""isWorkingDay"": true,
      ""startTime"": ""09:00 AM"",
      ""endTime"": ""06:00 PM"",
      ""duration"": 9
    },
    {
      ""day"": ""saturday"",
      ""isWorkingDay"": false,
      ""startTime"": ""09:00 AM"",
      ""endTime"": ""06:00 PM"",
      ""duration"": 9
    },
    {
      ""day"": ""sunday"",
      ""isWorkingDay"": false,
      ""startTime"": ""09:00 AM"",
      ""endTime"": ""06:00 PM"",
      ""duration"": 9
    }
  ],
  ""dateOfCreation"": ""2022-09-27T08:53:56.678Z"",
  ""companyId"": """",
  ""legalEntityName"": """",
  ""contactNumber"": """",
  ""companySignatory"": """",
  ""businessClassification"": {
    ""id"": ""000000000000000000000000"",
    ""dwollaId"": """",
    ""name"": """",
    ""industryClassification"": {
      ""dwollaId"": """",
      ""name"": """"
    }
  },
  ""UBI"": {
    ""type"": """",
    ""value"": """"
  },
  ""businessType"": """",
  ""lineOfBusiness"": """",
  ""businessDescription"": """",
  ""UMR"": 0,
  ""companyEmail"": """",
  ""compliance"": {
    ""@type"": ""type.googleapis.com/v1.DefaultCompliance"",
    ""countryCode"": """"
  },
  ""signatoryVerificationStatus"": """",
  ""tenantConfiguration"": null,
  ""dwollaDocumentRequiredFor"": """",
  ""oldFlow"": false,
  ""isCashfreeEnabled"": false,
  ""isAddBankAcc"": false,
  ""checkNumber"": ""0"",
  ""isLocationActive"": false,
  ""locationType"": """",
  ""checkHQIntegration"": false,
  ""checkHQCompanyCreated"": false,
  ""checkHqError"": null,
  ""isCheckhqOffCyclePaymentEnabled"": false,
  ""isPaypalPaymentEnabled"": false,
  ""payrunCalcCriteria"": ""numberOfWorkingDaysInMonth"",
  ""enableShiftManagement"": true
}
```

##### Sample Response
```java
{
  ""status"": ""OK"",
  ""tenant"": {
    ""tenantId"": ""6332e1f84a34b52444ff72b9"",
    ""iamUserId"": ""58372"",
    ""erpTenantId"": ""75531"",
    ""organizationName"": ""SingaporeTEst"",
    ""name"": """",
    ""companyCode"": """",
    ""phone"": """",
    ""address"": {
      ""addressLine1"": """",
      ""addressLine2"": """",
      ""zipCode"": """",
      ""city"": """",
      ""state"": """",
      ""country"": ""SG"",
      ""suburb"": """",
      ""county"": """"
    },
    ""fax"": """",
    ""currency"": ""SGD"",
    ""orgSetupCompleted"": true,
    ""complianceEnabled"": false,
    ""multiCurrencyEnabled"": false,
    ""isWorkLocation"": false,
    ""profileStages"": {
      ""companyDetails"": true,
      ""paySchedule"": true,
      ""employeeDetails"": true,
      ""paymentDetails"": false,
      ""cpfDetails"": true,
      ""taxDetails"": false,
      ""payrollComponents"": true,
      ""completeEmployeeProfiles"": false,
      ""bankDetails"": false,
      ""filingAuthorization"": false
    },
    ""payrunCheckList"": null,
    ""website"": """",
    ""emailId"": ""rohan_us_temp@temp.deskera.xyz"",
    ""countryCode"": ""SG"",
    ""workWeekDetails"": [
      {
        ""day"": ""monday"",
        ""isWorkingDay"": true,
        ""startTime"": ""09:00 AM"",
        ""endTime"": ""06:00 PM"",
        ""duration"": 9
      },
      {
        ""day"": ""tuesday"",
        ""isWorkingDay"": true,
        ""startTime"": ""09:00 AM"",
        ""endTime"": ""06:00 PM"",
        ""duration"": 9
      },
      {
        ""day"": ""wednesday"",
        ""isWorkingDay"": true,
        ""startTime"": ""09:00 AM"",
        ""endTime"": ""06:00 PM"",
        ""duration"": 9
      },
      {
        ""day"": ""thursday"",
        ""isWorkingDay"": true,
        ""startTime"": ""09:00 AM"",
        ""endTime"": ""06:00 PM"",
        ""duration"": 9
      },
      {
        ""day"": ""friday"",
        ""isWorkingDay"": true,
        ""startTime"": ""09:00 AM"",
        ""endTime"": ""06:00 PM"",
        ""duration"": 9
      },
      {
        ""day"": ""saturday"",
        ""isWorkingDay"": false,
        ""startTime"": ""09:00 AM"",
        ""endTime"": ""06:00 PM"",
        ""duration"": 9
      },
      {
        ""day"": ""sunday"",
        ""isWorkingDay"": false,
        ""startTime"": ""09:00 AM"",
        ""endTime"": ""06:00 PM"",
        ""duration"": 9
      }
    ],
    ""dateOfCreation"": ""2022-09-27T08:53:56.678Z"",
    ""companyId"": """",
    ""legalEntityName"": """",
    ""contactNumber"": """",
    ""companySignatory"": """",
    ""businessClassification"": {
      ""id"": ""000000000000000000000000"",
      ""dwollaId"": """",
      ""name"": """",
      ""industryClassification"": {
        ""dwollaId"": """",
        ""name"": """"
      }
    },
    ""UBI"": {
      ""type"": """",
      ""value"": """"
    },
    ""businessType"": """",
    ""lineOfBusiness"": """",
    ""businessDescription"": """",
    ""UMR"": 0,
    ""companyEmail"": """",
    ""compliance"": {
      ""@type"": ""type.googleapis.com/v1.DefaultCompliance"",
      ""countryCode"": """"
    },
    ""signatoryVerificationStatus"": """",
    ""tenantConfiguration"": null,
    ""dwollaDocumentRequiredFor"": """",
    ""oldFlow"": false,
    ""isCashfreeEnabled"": false,
    ""isAddBankAcc"": false,
    ""checkNumber"": ""0"",
    ""isLocationActive"": false,
    ""locationType"": """",
    ""checkHQIntegration"": false,
    ""checkHQCompanyCreated"": false,
    ""checkHqError"": null,
    ""isCheckhqOffCyclePaymentEnabled"": false,
    ""isPaypalPaymentEnabled"": false,
    ""payrunCalcCriteria"": ""numberOfWorkingDaysInMonth"",
    ""enableShiftManagement"": true
  }
}
```
### Manage Tax Details of your organization/Company

#### GET
##### Summary

Get tax detail

##### Description

Get new tax details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| countryCode | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1TaxDetailResponse](#v1taxdetailresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/{countryCode}/tax
```
##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people/tenants/IN/tax' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'```
```
##### Sample Request
```java
```

##### Sample Response
```java
{
  "id": "635ba97f5ced530c2f3be9e0",
  "erpTenantId": "74192",
  "federalEmployeeIdNo": ",
  "businessType": ",
  "federalFilterType": ",
  "federalDepositSchedule": ",
  "receivedFUTATaxCredit": false,
  "compliance": {
    "@type": "type.googleapis.com/v1.INTaxDetails",
    "epefNumber": "AAAAA3245345333",
    "epfEmployerContribution": "Restrict to 15000",
    "esiNumber": "45645646456456444",
    "esiEmployerContribution": 0,
    "esiEmployeeContribution": 0,
    "ptNumber": "345343",
    "epfApplicable": true,
    "esiApplicable": true,
    "laborWelfareFund": false,
    "edliApplicable": false,
    "epfAdminChargesApplicable": false,
    "epfContributionInCtc": false,
    "edliContributionInCtc": false,
    "epfAdminContributionInCtc": false,
    "esiContributionInCtc": false,
    "epfEmployeeContribution": "12% of PF Wage"
  },
  "tenantId": "629636e6d3e4fba66b81d705",
  "hasBeneficialOwners": false,
  "stateCode": "
}
```
#### POST
##### Summary

Add tax detail

##### Description

Add new tax details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| countryCode | path |  | Yes | string |
| body | body |  | Yes | [v1TaxDetail](#v1taxdetail) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1TaxDetailResponse](#v1taxdetailresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |



##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/{countryCode}/tax
```

##### Curl

```java
curl -X 'POST' \
  'https://bifrost-us.deskera.com/v1/people/tenants/IN/tax' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken' \
  -H 'Content-Type: application/json' \
  -d '{"compliance":{"@type":"type.googleapis.com/v1.INTaxDetails","epefNumber":"AAAAA3245345333","epfEmployerContribution":"Restrict to 15000","epfEmployeeContribution":"12% of PF Wage","esiNumber":"45645646456456444","esiEmployerContribution":0,"esiEmployeeContribution":0,"ptNumber":"345343","epfApplicable":true,"esiApplicable":true,"edliApplicable":false,"epfAdminChargesApplicable":false,"epfContributionInCtc":false,"edliContributionInCtc":false,"epfAdminContributionInCtc":false,"laborWelfareFund":false,"esiContributionInCtc":false},"countryCode":"IN"}'
```

##### Sample Request
```java
{
  "compliance": {
    "@type": "type.googleapis.com/v1.INTaxDetails",
    "epefNumber": "AAAAA3245345333",
    "epfEmployerContribution": "Restrict to 15000",
    "epfEmployeeContribution": "12% of PF Wage",
    "esiNumber": "45645646456456444",
    "esiEmployerContribution": 0,
    "esiEmployeeContribution": 0,
    "ptNumber": "345343",
    "epfApplicable": true,
    "esiApplicable": true,
    "edliApplicable": false,
    "epfAdminChargesApplicable": false,
    "epfContributionInCtc": false,
    "edliContributionInCtc": false,
    "epfAdminContributionInCtc": false,
    "laborWelfareFund": false,
    "esiContributionInCtc": false
  },
  "countryCode": "IN"
}
```

##### Sample Response
```java
{
  "id": "635babe3e0c4dfe41091136e",
  "erpTenantId": "74192",
  "federalEmployeeIdNo": ",
  "businessType": ",
  "federalFilterType": ",
  "federalDepositSchedule": ",
  "receivedFUTATaxCredit": false,
  "compliance": {
    "@type": "type.googleapis.com/v1.INTaxDetails",
    "epefNumber": "AAAAA3245345333",
    "epfEmployerContribution": "Restrict to 15000",
    "esiNumber": "45645646456456444",
    "esiEmployerContribution": 0,
    "esiEmployeeContribution": 0,
    "ptNumber": "345343",
    "epfApplicable": true,
    "esiApplicable": true,
    "laborWelfareFund": false,
    "edliApplicable": false,
    "epfAdminChargesApplicable": false,
    "epfContributionInCtc": false,
    "edliContributionInCtc": false,
    "epfAdminContributionInCtc": false,
    "esiContributionInCtc": false,
    "epfEmployeeContribution": "12% of PF Wage"
  },
  "tenantId": "629636e6d3e4fba66b81d705",
  "hasBeneficialOwners": false,
  "stateCode": "
}
```
#### PUT
##### Summary

Update tax detail

##### Description

Update new tax details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| countryCode | path |  | Yes | string |
| body | body |  | Yes | [v1TaxDetail](#v1taxdetail) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1TaxDetailResponse](#v1taxdetailresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |



##### Request URL
```java
https://bifrost-us.deskera.com/v1/people/tenants/{countryCode}/tax
```

##### Curl

```java
curl -X 'PUT' \
  'http://localhost:8082/v1/people/tenants/IN/tax' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken' \
  -H 'Content-Type: application/json' \
  -d '{"compliance":{"@type":"type.googleapis.com/v1.INTaxDetails","epefNumber":"AAAAA3245345336","epfEmployerContribution":"Restrict to 15000","esiNumber":"45645646456456444","esiEmployerContribution":0,"esiEmployeeContribution":0,"ptNumber":"345343","epfApplicable":true,"esiApplicable":true,"laborWelfareFund":false,"edliApplicable":false,"epfAdminChargesApplicable":false,"epfContributionInCtc":false,"edliContributionInCtc":false,"epfAdminContributionInCtc":false,"esiContributionInCtc":false,"epfEmployeeContribution":"12% of PF Wage"},"id":"635ba97f5ced530c2f3be9e0","countryCode":"IN"}'
```

##### Sample Request
```java
{
  "compliance": {
    "@type": "type.googleapis.com/v1.INTaxDetails",
    "epefNumber": "AAAAA3245345336",
    "epfEmployerContribution": "Restrict to 15000",
    "esiNumber": "45645646456456444",
    "esiEmployerContribution": 0,
    "esiEmployeeContribution": 0,
    "ptNumber": "345343",
    "epfApplicable": true,
    "esiApplicable": true,
    "laborWelfareFund": false,
    "edliApplicable": false,
    "epfAdminChargesApplicable": false,
    "epfContributionInCtc": false,
    "edliContributionInCtc": false,
    "epfAdminContributionInCtc": false,
    "esiContributionInCtc": false,
    "epfEmployeeContribution": "12% of PF Wage"
  },
  "id": "635ba97f5ced530c2f3be9e0",
  "countryCode": "IN"
}
```


##### Sample Response
```java
{
  "id": "635ba97f5ced530c2f3be9e0",
  "erpTenantId": "74192",
  "federalEmployeeIdNo": ",
  "businessType": ",
  "federalFilterType": ",
  "federalDepositSchedule": ",
  "receivedFUTATaxCredit": false,
  "compliance": {
    "@type": "type.googleapis.com/v1.INTaxDetails",
    "epefNumber": "AAAAA3245345336",
    "epfEmployerContribution": "Restrict to 15000",
    "esiNumber": "45645646456456444",
    "esiEmployerContribution": 0,
    "esiEmployeeContribution": 0,
    "ptNumber": "345343",
    "epfApplicable": true,
    "esiApplicable": true,
    "laborWelfareFund": false,
    "edliApplicable": false,
    "epfAdminChargesApplicable": false,
    "epfContributionInCtc": false,
    "edliContributionInCtc": false,
    "epfAdminContributionInCtc": false,
    "esiContributionInCtc": false,
    "epfEmployeeContribution": "12% of PF Wage"
  },
  "tenantId": "629636e6d3e4fba66b81d705",
  "hasBeneficialOwners": false,
  "stateCode": "
}
```

### Manage Malaysia Country Tax Details

#### POST
##### Summary

Add MY user tax detail

##### Description

Add MY user tax details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1MYUserTaxDetails](#v1myusertaxdetails) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1AddUpdateMYUserTaxDetailsResponse](#v1addupdatemyusertaxdetailsresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

#### PUT
##### Summary

Update MY user tax detail

##### Description

Update MY user tax details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1MYUserTaxDetails](#v1myusertaxdetails) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1AddUpdateMYUserTaxDetailsResponse](#v1addupdatemyusertaxdetailsresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### Fetch Manage Malaysia Country Tax Details

#### POST
##### Summary

Get MY user tax detail

##### Description

Get MY user tax details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1MYUserTaxDetailsRequest](#v1myusertaxdetailsrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1MYUserTaxDetailsResponse](#v1myusertaxdetailsresponse) |
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

#### v1AddBusinessClassificationsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| businessClassifications | [ [v1BusinessClassification](#v1businessclassification) ] |  | No |

#### v1AddUpdateMYUserTaxDetailsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| myUserTaxDetails | [v1MYUserTaxDetails](#v1myusertaxdetails) |  | No |
| msg | string |  | No |

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

#### v1BusinessClassification

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| dwollaId | string |  | No |
| name | string |  | No |
| industryClassifications | [ [v1IndustryClassification](#v1industryclassification) ] |  | No |

#### v1BusinessClassificationsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| businessClassifications | [ [v1BusinessClassification](#v1businessclassification) ] |  | No |
| checkCompanyTypes | [v1CheckCompanyTypes](#v1checkcompanytypes) |  | No |

#### v1CheckCompanyTypes

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| companyType | [ [v1Types](#v1types) ] |  | No |
| industryType | [ [v1Types](#v1types) ] |  | No |

#### v1CheckComponentRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| component | string |  | No |
| employeeId | string |  | No |
| module | string |  | No |

#### v1CheckComponentUrlResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| url | string |  | No |

#### v1CheckHQSyncRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| module | string |  | No |
| component | string |  | No |
| employeeId | string |  | No |

#### v1CheckHQSyncResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| module | string |  | No |
| msg | string |  | No |

#### v1ChecklistItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| index | string (int64) |  | No |
| isChecked | boolean |  | No |
| question | string |  | No |

#### v1Component

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string |  | No |
| id | string |  | No |
| expenseAccount | string |  | No |
| liabilityAccount | string |  | No |
| isTax | boolean |  | No |

#### v1Condition

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| colId | string |  | No |
| value | string |  | No |
| opr | string |  | No |

#### v1CountryFeaturesResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| isRevertPayrunAllowed | boolean |  | No |
| isDeletePayrunAllowed | boolean |  | No |
| isEmployeeExportEnabled | boolean |  | No |

#### v1DeclarationConfigRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| declarationStartDate | dateTime |  | No |
| declarationEndDate | dateTime |  | No |
| declarationLockStatus | boolean |  | No |
| considerForITDeclaration | boolean |  | No |
| declarationEffectiveMonth | string |  | No |
| active | boolean |  | No |
| id | string |  | No |
| updateLock | boolean |  | No |

#### v1DeclarationConfigResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| declarationStartDate | dateTime |  | No |
| declarationEndDate | dateTime |  | No |
| declarationLockStatus | boolean |  | No |
| considerForITDeclaration | boolean |  | No |
| declarationEffectiveMonth | string |  | No |
| active | boolean |  | No |
| id | string |  | No |

#### v1DuplicateEmailResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| isdupliacateEmail | boolean |  | No |
| isdupliacateContact | boolean |  | No |

#### v1EntitledUser

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| firstName | string |  | No |
| lastName | string |  | No |
| designation | string |  | No |
| iamUserId | string (int64) |  | No |
| roles | [ [v1Role](#v1role) ] |  | No |

#### v1EntitlementResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| leaveTypes | [ [v1LeavesTypeDetail](#v1leavestypedetail) ] |  | No |
| leaveDetails | [ [v1LeaveDetails](#v1leavedetails) ] |  | No |
| filterConfig | [v1FilterConfig](#v1filterconfig) |  | No |

#### v1ErpTenantId

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| erpTenantId | byte |  | No |

#### v1FilterConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| page | string (int64) |  | No |
| numberOfElements | string (int64) |  | No |
| sizePerPage | string (int64) |  | No |
| totalPage | string (int64) |  | No |
| numberOfRecords | string (int64) |  | No |

#### v1FinancialYear

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| startDate | dateTime |  | No |
| endDate | dateTime |  | No |

#### v1GeoFencingPlansResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| plans | [ string ] |  | No |

#### v1GetTenantResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| tenant | [v1TenantResponse](#v1tenantresponse) |  | No |

#### v1GetTenantShortInfoResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| tenantShortInfo | [v1TenantShortInfo](#v1tenantshortinfo) |  | No |

#### v1IndustryClassification

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| dwollaId | string |  | No |
| name | string |  | No |

#### v1IntegrationMapping

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| payType | string |  | No |
| expenseAccount | string |  | No |
| liabilityAccount | string |  | No |
| components | [ [v1Component](#v1component) ] |  | No |

#### v1IntegrationMappingRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| active | boolean |  | No |
| whenJEPosted | string |  | No |
| mapping | [ [v1IntegrationMapping](#v1integrationmapping) ] |  | No |

#### v1IntegrationMappingResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| tenantId | string |  | No |
| erpTenantId | string (int64) |  | No |
| countryCode | string |  | No |
| active | boolean |  | No |
| whenJEPosted | string |  | No |
| mapping | [ [v1IntegrationMapping](#v1integrationmapping) ] |  | No |

#### v1InvestmentConfigRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| declarationConfig | [ [v1DeclarationConfigRequest](#v1declarationconfigrequest) ] |  | No |
| proofOfInvestmentConfig | [ [v1ProofOfInvestmentConfigRequest](#v1proofofinvestmentconfigrequest) ] |  | No |

#### v1InvestmentConfigResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| declarationConfig | [ [v1DeclarationConfigResponse](#v1declarationconfigresponse) ] |  | No |
| proofOfInvestmentConfig | [ [v1ProofOfInvestmentConfigResponse](#v1proofofinvestmentconfigresponse) ] |  | No |

#### v1LeaveBalance

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| _id | string |  | No |
| leaveType | string |  | No |
| entitledLeaves | float |  | No |
| carryForwardLeaves | float |  | No |
| earnedLeaves | float |  | No |
| takenLeaves | float |  | No |
| balanceLeaves | float |  | No |
| colorCode | string |  | No |
| isPaid | boolean |  | No |
| appliedLeaves | float |  | No |
| isFromLeaveDetails | boolean |  | No |
| isAllowForUnpaidLeave | boolean |  | No |
| adjustedLeaves | float |  | No |
| carryForwardExpiredBal | float |  | No |

#### v1LeaveDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| users | [v1EntitledUser](#v1entitleduser) |  | No |
| leaveBalanace | [ [v1LeaveBalance](#v1leavebalance) ] |  | No |

#### v1LeavesTypeDetail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| _id | string |  | No |
| leaveDescription | string |  | No |
| leaveType | string |  | No |
| colorCode | string |  | No |
| isPaid | boolean |  | No |
| leaveStatus | string |  | No |
| daysPerYear | float |  | No |
| isApplicableToAll | boolean |  | No |
| isAllowForUnpaidLeave | boolean |  | No |

#### v1MYUserTaxDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| erpTenantId | string (int64) |  | No |
| countryCode | string |  | No |
| userId | string |  | No |
| basicSupport | string (int64) |  | No |
| medicalExamination | string (int64) |  | No |
| retirementSchemeAnnuityContribution | string (int64) |  | No |
| educationMedicalInsurancePremium | string (int64) |  | No |
| selfHigherEducationFees | string (int64) |  | No |
| houseLoanInterest | string (int64) |  | No |
| parentsNeedsCareMedicalExpenses | string (int64) |  | No |
| seriousDiseasesMedicalExpenses | string (int64) |  | No |
| netDepositSspns | string (int64) |  | No |
| alimonyPaymentToWife | string (int64) |  | No |
| childCareKindergartensFeesDeduction | string (int64) |  | No |
| lifeStyleDeduction | string (int64) |  | No |
| feedingEquipmentPurchaseDeduction | string (int64) |  | No |
| lifeInsurance | string (int64) |  | No |
| totalAccumulatedFees | string (int64) |  | No |
| employeeSocso | string (int64) |  | No |
| employerSocso | string (int64) |  | No |

#### v1MYUserTaxDetailsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userIds | [ string ] |  | No |

#### v1MYUserTaxDetailsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| myUserTaxDetails | [ [v1MYUserTaxDetails](#v1myusertaxdetails) ] |  | No |

#### v1NotificationSetting

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| name | string |  | No |
| value | boolean |  | No |
| key | string |  | No |
| type | string |  | No |
| description | string |  | No |

#### v1OrderBy

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| field | string |  | No |
| order | string |  | No |

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

#### v1PaymentIntegrationStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | string |  | No |

#### v1PayrunCheckList

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| checklist | [ [v1ChecklistItem](#v1checklistitem) ] |  | No |

#### v1PayrunCheckListResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| checklist | [ [v1ChecklistItem](#v1checklistitem) ] |  | No |

#### v1ProfileStage

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| stage | string |  | No |

#### v1ProfileStagesResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| companyDetails | boolean |  | No |
| paySchedule | boolean |  | No |
| employeeDetails | boolean |  | No |
| paymentDetails | boolean |  | No |
| cpfDetails | boolean |  | No |
| taxDetails | boolean |  | No |
| payrollComponents | boolean |  | No |
| completeEmployeeProfiles | boolean |  | No |
| bankDetails | boolean |  | No |
| filingAuthorization | boolean |  | No |

#### v1ProofOfInvestmentConfigRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| proofOfInvestmentStartDate | dateTime |  | No |
| proofOfInvestmentEndDate | dateTime |  | No |
| proofOfInvestmentLockStatus | boolean |  | No |
| active | boolean |  | No |
| id | string |  | No |
| updateLock | boolean |  | No |

#### v1ProofOfInvestmentConfigResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| proofOfInvestmentStartDate | dateTime |  | No |
| proofOfInvestmentEndDate | dateTime |  | No |
| proofOfInvestmentLockStatus | boolean |  | No |
| active | boolean |  | No |
| id | string |  | No |

#### v1Role

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| roleId | string |  | No |
| name | string |  | No |
| appName | string |  | No |
| policies | [ string ] |  | No |

#### v1Status

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| v1Status | string |  |  |

#### v1TaxDetail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| countryCode | string |  | No |
| compliance | [protobufAny](#protobufany) |  | No |
| federalEmployeeIdNo | string |  | No |
| businessType | string |  | No |
| federalFilterType | string |  | No |
| federalDepositSchedule | string |  | No |
| texasWCAccountNo | string |  | No |
| effectiveUIRate | float |  | No |
| receivedFUTATaxCredit | boolean |  | No |
| hasBeneficialOwners | boolean |  | No |
| stateCode | string |  | No |

#### v1TaxDetailResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| erpTenantId | string (int64) |  | No |
| tenantId | string |  | No |
| federalEmployeeIdNo | string |  | No |
| businessType | string |  | No |
| federalFilterType | string |  | No |
| federalDepositSchedule | string |  | No |
| texasWCAccountNo | string |  | No |
| effectiveUIRate | float |  | No |
| receivedFUTATaxCredit | boolean |  | No |
| compliance | [protobufAny](#protobufany) |  | No |
| hasBeneficialOwners | boolean |  | No |
| stateCode | string |  | No |

#### v1Tenant

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| tenantId | string |  | No |
| iamUserId | string (int64) |  | No |
| erpTenantId | string (int64) |  | No |
| organizationName | string |  | No |
| name | string |  | No |
| companyCode | string |  | No |
| phone | string |  | No |
| address | [v1Address](#v1address) |  | No |
| fax | string |  | No |
| currency | string |  | No |
| orgSetupCompleted | boolean |  | No |
| complianceEnabled | boolean |  | No |
| multiCurrencyEnabled | boolean |  | No |
| isWorkLocation | boolean |  | No |
| paymentDetails | [v1PaymentDetails](#v1paymentdetails) |  | No |
| profileStages | [v1ProfileStagesResponse](#v1profilestagesresponse) |  | No |
| payrunCheckList | [v1PayrunCheckList](#v1payrunchecklist) |  | No |
| website | string |  | No |
| emailId | string |  | No |
| countryCode | string |  | No |
| workWeekDetails | [ [v1WorkWeek](#v1workweek) ] |  | No |
| dateOfCreation | dateTime |  | No |
| companyId | string |  | No |
| legalEntityName | string |  | No |
| contactNumber | string |  | No |
| companySignatory | string |  | No |
| businessClassification | [v1TenantBusinessClassification](#v1tenantbusinessclassification) |  | No |
| UBI | [v1UniqueBusinessIdentifier](#v1uniquebusinessidentifier) |  | No |
| businessType | string |  | No |
| lineOfBusiness | string |  | No |
| businessDescription | string |  | No |
| UMR | float |  | No |
| companyEmail | string |  | No |
| compliance | [protobufAny](#protobufany) |  | No |
| signatoryVerificationStatus | string |  | No |
| dwollaDocumentRequiredFor | string |  | No |
| oldFlow | boolean |  | No |
| isCashfreeEnabled | boolean |  | No |
| isAddBankAcc | boolean |  | No |
| checkNumber | string (int64) |  | No |
| refreshToken | string |  | No |
| isLocationActive | boolean |  | No |
| locationType | string |  | No |
| checkHQIntegration | boolean |  | No |
| checkHQCompanyCreated | boolean |  | No |
| isCheckhqOffCyclePaymentEnabled | boolean |  | No |
| isPaypalPaymentEnabled | boolean |  | No |
| payrunCalcCriteria | string |  | No |
| enableShiftManagement | boolean |  | No |

#### v1TenantBusinessClassification

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| dwollaId | string |  | No |
| name | string |  | No |
| industryClassification | [v1IndustryClassification](#v1industryclassification) |  | No |

#### v1TenantConfigurationRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| countryCode | string |  | No |
| tenantId | string |  | No |
| financialYear | [v1FinancialYear](#v1financialyear) |  | No |
| investmentConfig | [v1InvestmentConfigRequest](#v1investmentconfigrequest) |  | No |
| confId | string |  | No |
| dateFormat | string |  | No |
| decimalFormat | string (int64) |  | No |
| geofencing | boolean |  | No |

#### v1TenantConfigurationResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| countryCode | string |  | No |
| tenantId | string |  | No |
| financialYear | [v1FinancialYear](#v1financialyear) |  | No |
| investmentConfig | [v1InvestmentConfigResponse](#v1investmentconfigresponse) |  | No |
| confId | string |  | No |
| dateFormat | string |  | No |
| decimalFormat | string (int64) |  | No |
| geofencing | boolean |  | No |

#### v1TenantNotificationSetting

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| tenantId | string (int64) |  | No |
| settings | [ [v1NotificationSetting](#v1notificationsetting) ] |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | string (int64) |  | No |

#### v1TenantProfileStagesResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| tenantId | string |  | No |
| profileStages | [v1ProfileStagesResponse](#v1profilestagesresponse) |  | No |

#### v1TenantResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| tenantId | string |  | No |
| iamUserId | string (int64) |  | No |
| erpTenantId | string (int64) |  | No |
| organizationName | string |  | No |
| name | string |  | No |
| companyCode | string |  | No |
| phone | string |  | No |
| address | [v1Address](#v1address) |  | No |
| fax | string |  | No |
| currency | string |  | No |
| orgSetupCompleted | boolean |  | No |
| complianceEnabled | boolean |  | No |
| multiCurrencyEnabled | boolean |  | No |
| isWorkLocation | boolean |  | No |
| profileStages | [v1ProfileStagesResponse](#v1profilestagesresponse) |  | No |
| payrunCheckList | [v1PayrunCheckList](#v1payrunchecklist) |  | No |
| website | string |  | No |
| emailId | string |  | No |
| countryCode | string |  | No |
| workWeekDetails | [ [v1WorkWeek](#v1workweek) ] |  | No |
| dateOfCreation | dateTime |  | No |
| companyId | string |  | No |
| legalEntityName | string |  | No |
| contactNumber | string |  | No |
| companySignatory | string |  | No |
| businessClassification | [v1TenantBusinessClassification](#v1tenantbusinessclassification) |  | No |
| UBI | [v1UniqueBusinessIdentifier](#v1uniquebusinessidentifier) |  | No |
| businessType | string |  | No |
| lineOfBusiness | string |  | No |
| businessDescription | string |  | No |
| UMR | float |  | No |
| companyEmail | string |  | No |
| compliance | [protobufAny](#protobufany) |  | No |
| signatoryVerificationStatus | string |  | No |
| tenantConfiguration | [v1TenantConfigurationResponse](#v1tenantconfigurationresponse) |  | No |
| dwollaDocumentRequiredFor | string |  | No |
| oldFlow | boolean |  | No |
| isCashfreeEnabled | boolean |  | No |
| isAddBankAcc | boolean |  | No |
| checkNumber | string (int64) |  | No |
| isLocationActive | boolean |  | No |
| locationType | string |  | No |
| checkHQIntegration | boolean |  | No |
| checkHQCompanyCreated | boolean |  | No |
| checkHqError | [protobufAny](#protobufany) |  | No |
| isCheckhqOffCyclePaymentEnabled | boolean |  | No |
| isPaypalPaymentEnabled | boolean |  | No |
| payrunCalcCriteria | string |  | No |
| enableShiftManagement | boolean |  | No |

#### v1TenantRoleMapping

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| erpTenantId | string (int64) |  | No |
| roles | [ [v1Role](#v1role) ] |  | No |

#### v1TenantRoleMappingResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| tenantRoles | [v1TenantRoleMapping](#v1tenantrolemapping) |  | No |

#### v1TenantShortInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| tenantId | string |  | No |
| organizationName | string |  | No |
| name | string |  | No |
| companyCode | string |  | No |
| phone | string |  | No |
| address | [v1Address](#v1address) |  | No |
| fax | string |  | No |
| currency | string |  | No |
| countryCode | string |  | No |
| companyId | string |  | No |
| legalEntityName | string |  | No |
| contactNumber | string |  | No |
| businessClassification | [v1TenantBusinessClassification](#v1tenantbusinessclassification) |  | No |
| companySignatory | string |  | No |
| companyEmail | string |  | No |
| oldFlow | boolean |  | No |
| isAddBankAcc | boolean |  | No |
| checkNumber | string (int64) |  | No |
| isLocationActive | boolean |  | No |
| locationType | string |  | No |

#### v1TenantWorkweekResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| workweek | [ [v1WorkWeek](#v1workweek) ] |  | No |

#### v1ToggleIntegrationMappingRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean |  | No |

#### v1Types

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| value | string |  | No |
| label | string |  | No |

#### v1UniqueBusinessIdentifier

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| type | string |  | No |
| value | string |  | No |

#### v1UpdatedCount

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| count | string (int64) |  | No |

#### v1UserFilter

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| conditions | [ [v1Condition](#v1condition) ] |  | No |

#### v1WorkWeek

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| day | string |  | No |
| isWorkingDay | boolean |  | No |
| startTime | string |  | No |
| endTime | string |  | No |
| duration | float |  | No |
