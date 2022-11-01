---
id: component
title: Component
sidebar_label: Component
---

### Manage components


#### GET
##### Summary

Get Components

##### Description

Get all Components of a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| sortOrder | query | Sort Order | No | string |
| sortField | query | Sort Field | No | string |
| limit | query | Limit per Page | No | integer |
| currentPage | query | Current Page number | No | integer |
| searchString | query | Search String | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.ComponentsResponse](#dtocomponentsresponse) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-component/components/tenant?limit=20&currentPage=1
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people-component/components/tenant?limit=20&currentPage=1' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'
```

##### Sample Request
```java
```

##### Sample Response
```java
{
  "components": [
    {
      "name": "Salary Advance",
      "isActive": true,
      "type": "EARNING",
      "isForAllEmployee": false,
      "compliance": {
        "countryCode": ",
        "pf": false,
        "esi": false,
        "taxexempt": false
      },
      "defaultComponent": false,
      "id": "627dd963cbc52ce913e564df",
      "employees": null,
      "isVariable": false,
      "isFormula": false,
      "componentConfig": {
        "configureAmountBasis": ",
        "basisComponentId": ",
        "componentPercent": 0,
        "applicableValues": null,
        "amountPerDay": 0,
        "deductionType": "posttaxdeduction"
      },
      "frequency": {
        "period": ",
        "occurrence": null,
        "when": "
      },
      "isHidden": true,
      "subType": "salary_advance",
      "includeInCTC": false,
      "includeInOTCalc": false,
      "isUnpaidIncluded": false,
      "formulaConfig": null,
      "formula": "
    }
  
  ],
  "filterResponse": {
    "currentPage": 1,
    "count": 1,
    "limit": 20,
    "totalPages": 1,
    "totalCount": 1
  }
}
```


#### POST
##### Summary

Add Component

##### Description

Add Component for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrun | body | Component Request Body | Yes | [dto.Component](#dtocomponent) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.ComponentResponse](#dtocomponentresponse) |

"
##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-component/component
```

##### Curl

```java
curl-X'POST'\'https://bifrost-us.deskera.com/v1/people-component/component'\-H'accept: application/json'\-H'x-access-token: sampletoken'\-H'Content-Type: application/json'\-d'{   "compliance": {     "countryCode": "IN",     "esi": false,     "pf": false,     "taxexempt": false,     "deductionType": "posttaxdeduction",     "hasCPF": false,     "taxable": false,     "SDL": false,     "SHG": false,     "CPF": "AW"   },   "countryCode": "IN",   "componentConfig": {     "amountPerDay": 0,     "applicableValues": null,     "basisComponentId": ",     "componentPercent": 0,     "configureAmountBasis": ",     "deductionType": "posttaxdeduction"   },   "defaultComponent": false,   "employees": [        ],   "frequency": {     "occurrence": null,     "period": "everyPayrun",     "when": "   },   "includeInCTC": false,   "includeInOTCalc": false,   "isActive": true,   "isForAllEmployee": true,   "isHidden": false,   "isVariable": false,   "isUnpaidIncluded": true,   "name": "Travel2",   "subType": ",   "type": "EARNING",   "isFormula": false,   "formula": ",   "formulaConfig": null }'```

##### Sample Request
```java
{
  "compliance": {
    "countryCode": "IN",
    "esi": false,
    "pf": false,
    "taxexempt": false,
    "deductionType": "posttaxdeduction",
    "hasCPF": false,
    "taxable": false,
    "SDL": false,
    "SHG": false,
    "CPF": "AW"
  },
  "countryCode": "IN",
  "componentConfig": {
    "amountPerDay": 0,
    "applicableValues": null,
    "basisComponentId": ",
    "componentPercent": 0,
    "configureAmountBasis": ",
    "deductionType": "posttaxdeduction"
  },
  "defaultComponent": false,
  "employees": [
    
  ],
  "frequency": {
    "occurrence": null,
    "period": "everyPayrun",
    "when": "
  },
  "includeInCTC": false,
  "includeInOTCalc": false,
  "isActive": true,
  "isForAllEmployee": true,
  "isHidden": false,
  "isVariable": false,
  "isUnpaidIncluded": true,
  "name": "Travel2",
  "subType": ",
  "type": "EARNING",
  "isFormula": false,
  "formula": ",
  "formulaConfig": null
}```

##### Sample Response
```java
{
  "name": "Travel2",
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
  "id": "635fdc6f1d1752891f434072",
  "employees": [],
  "isVariable": false,
  "isFormula": false,
  "componentConfig": {
    "configureAmountBasis": ",
    "basisComponentId": ",
    "componentPercent": 0,
    "applicableValues": null,
    "amountPerDay": 0,
    "deductionType": "posttaxdeduction"
  },
  "frequency": {
    "period": "everyPayrun",
    "occurrence": null,
    "when": "
  },
  "isHidden": false,
  "subType": ",
  "includeInCTC": false,
  "includeInOTCalc": false,
  "isUnpaidIncluded": true,
  "formulaConfig": null,
  "formula": "
}
```
##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |


#### GET
##### Summary

Get Component By Id

##### Description

Get Component by Id for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Component Id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.ComponentResponse](#dtocomponentresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

#### PUT
##### Summary

Update Component

##### Description

Update Component for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Component Id | Yes | string |
| payrun | body | Component Request Body | Yes | [dto.Component](#dtocomponent) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.ComponentResponse](#dtocomponentresponse) |

"
##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-component/component/{id}
```

##### Curl

```java
curl-X'PUT'\'https://bifrost-us.deskera.com/v1/people-component/component/635fdc6f1d1752891f434072'\-H'accept: application/json'\-H'x-access-token: sampletoken'\-H'Content-Type: application/json'\-d'{   "compliance": {     "countryCode": "IN",     "esi": false,     "pf": false,     "taxexempt": false,     "deductionType": "posttaxdeduction",     "hasCPF": false,     "taxable": false,     "SDL": false,     "SHG": false,     "CPF": "AW"   },   "countryCode": "IN",   "componentConfig": {     "amountPerDay": 0,     "applicableValues": null,     "basisComponentId": ",     "componentPercent": 0,     "configureAmountBasis": ",     "deductionType": "posttaxdeduction"   },   "defaultComponent": false,   "employees": [        ],   "frequency": {     "occurrence": null,     "period": "everyPayrun",     "when": "   },   "includeInCTC": false,   "includeInOTCalc": false,   "isActive": true,   "isForAllEmployee": true,   "isHidden": false,   "isVariable": false,   "isUnpaidIncluded": true,   "name": "Travel2",   "subType": ",   "type": "EARNING",   "isFormula": false,   "formula": ",   "formulaConfig": null }'```

##### Sample Request
```java
{
  "compliance": {
    "countryCode": "IN",
    "esi": false,
    "pf": false,
    "taxexempt": false,
    "deductionType": "posttaxdeduction",
    "hasCPF": false,
    "taxable": false,
    "SDL": false,
    "SHG": false,
    "CPF": "AW"
  },
  "countryCode": "IN",
  "componentConfig": {
    "amountPerDay": 0,
    "applicableValues": null,
    "basisComponentId": ",
    "componentPercent": 0,
    "configureAmountBasis": ",
    "deductionType": "posttaxdeduction"
  },
  "defaultComponent": false,
  "employees": [
    
  ],
  "frequency": {
    "occurrence": null,
    "period": "everyPayrun",
    "when": "
  },
  "includeInCTC": false,
  "includeInOTCalc": false,
  "isActive": true,
  "isForAllEmployee": true,
  "isHidden": false,
  "isVariable": false,
  "isUnpaidIncluded": true,
  "name": "Education",
  "subType": ",
  "type": "EARNING",
  "isFormula": false,
  "formula": ",
  "formulaConfig": null
}```

##### Sample Response
```java
{
  "name": "Education",
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
  "id": "635fdc6f1d1752891f434072",
  "employees": [],
  "isVariable": false,
  "isFormula": false,
  "componentConfig": {
    "configureAmountBasis": ",
    "basisComponentId": ",
    "componentPercent": 0,
    "applicableValues": null,
    "amountPerDay": 0,
    "deductionType": "posttaxdeduction"
  },
  "frequency": {
    "period": "everyPayrun",
    "occurrence": null,
    "when": "
  },
  "isHidden": false,
  "subType": ",
  "includeInCTC": false,
  "includeInOTCalc": false,
  "isUnpaidIncluded": true,
  "formulaConfig": null,
  "formula": "
}
```
##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |





#### DELETE
##### Summary

Bulk Delete Components By Ids

##### Description

Bulk Delete Components by Ids for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| ids | body | Component Ids | Yes | [ [dto.BulkComponentRequest](#dtobulkcomponentrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.Component](#dtocomponent) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-component/components/bulk
```

##### Curl

```java
curl -X 'DELETE' \
  'https://bifrost-us.deskera.com/v1/people-component/components/bulk' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken' \
  -H 'Content-Type: application/json' \
  -d '[
  {
    "componentId": "635fdc6f1d1752891f434072"
  }
]'```

##### Sample Request
```java
[
  {
    "componentId": "635fdc6f1d1752891f434072"
  }
]```

##### Sample Response
```java
{
  "name": "",
  "isActive": false,
  "type": "",
  "isForAllEmployee": false,
  "countryCode": "",
  "compliance": null,
  "employees": null,
  "isVariable": false,
  "isFormula": false,
  "componentConfig": {
    "configureAmountBasis": "",
    "basisComponentId": "",
    "componentPercent": 0,
    "applicableValues": null,
    "amountPerDay": 0,
    "deductionType": ""
  },
  "frequency": {
    "period": "",
    "occurrence": null,
    "when": ""
  },
  "includeInCTC": false,
  "includeInOTCalc": false,
  "isUnpaidIncluded": false,
  "formulaConfig": null,
  "formula": ""
}
```
##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |




### Manage Benefits

#### GET
##### Summary

Get Benefits

##### Description

Get all benefits for a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| sortOrder | query | Sort Order | No | string |
| sortField | query | Sort Field | No | string |
| limit | query | Limit per page | No | integer |
| currentPage | query | Current page number | No | integer |
| searchString | query | Search string | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.BenefitsResponse](#dtobenefitsresponse) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-component/benefits/tenant?sortOrder=asc&sortField=createdAt&limit=20&currentPage=1
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people-component/benefits/tenant?sortOrder=asc&sortField=createdAt&limit=20&currentPage=1' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'```

##### Sample Request
```java
```

##### Sample Response
```java
{
  "benefits": [
    {
      "benefitId": "635fdfb33295b0023353c31d",
      "name": "A",
      "isActive": true,
      "employeeDeductionAmount": 200,
      "employeeDeductionType": "amount",
      "employerDeductionAmount": 100,
      "employerDeductionType": "amount",
      "isForAllEmployees": true,
      "annualMaxContribution": 0,
      "countryCode": "US",
      "compliance": {
        "countryCode": "US",
        "deductionType": "pretaxdeduction",
        "bsiCode": ""
      },
      "users": []
    }
  ],
  "filterResponse": {
    "currentPage": 1,
    "count": 1,
    "limit": 20,
    "totalPages": 1,
    "totalCount": 1
  }
}
```
##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |


#### PUT
##### Summary

Update a Benefit

##### Description

Update a benefit

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| benefit | body | Benefit request body | Yes | [dto.Benefit](#dtobenefit) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.Benefit](#dtobenefit) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-component/benefit
```

##### Curl

```java
curl -X 'PUT' \
  'https://bifrost-us.deskera.com/v1/people-component/benefit' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken' \
  -H 'Content-Type: application/json' \
  -d '{
  "benefitId": "635fe1a91d1752891f434073",
  "name": "Retirement plans",
  "isActive": true,
  "employeeDeductionAmount": 500,
  "employeeDeductionType": "amount",
  "employerDeductionAmount": 200,
  "employerDeductionType": "amount",
  "isForAllEmployees": true,
  "annualMaxContribution": 0,
  "countryCode": "US",
  "compliance": {
    "countryCode": "US",
    "deductionType": "pretaxdeduction",
    "bsiCode": ""
  },
  "users": []
}'```

##### Sample Request
```java
{
  "benefitId": "635fe1a91d1752891f434073",
  "name": "Retirement plans",
  "isActive": true,
  "employeeDeductionAmount": 500,
  "employeeDeductionType": "amount",
  "employerDeductionAmount": 200,
  "employerDeductionType": "amount",
  "isForAllEmployees": true,
  "annualMaxContribution": 0,
  "countryCode": "US",
  "compliance": {
    "countryCode": "US",
    "deductionType": "pretaxdeduction",
    "bsiCode": ""
  },
  "users": []
}```

##### Sample Response
```java
{
  "benefitId": "635fe1a91d1752891f434073",
  "name": "Retirement plans",
  "isActive": true,
  "employeeDeductionAmount": 500,
  "employeeDeductionType": "amount",
  "employerDeductionAmount": 200,
  "employerDeductionType": "amount",
  "isForAllEmployees": true,
  "annualMaxContribution": 0,
  "countryCode": "US",
  "compliance": {
    "countryCode": "US",
    "deductionType": "pretaxdeduction",
    "bsiCode": ""
  },
  "users": []
}
```
##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

#### POST
##### Summary

Add Benefit

##### Description

Add a benefit for one or more users of a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| benefit | body | Benefit request body | Yes | [dto.Benefit](#dtobenefit) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.Benefit](#dtobenefit) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-component/benefit
```

##### Curl

```java
curl-X'POST'\'https://bifrost-us.deskera.com/v1/people-component/benefit'\-H'accept: application/json'\-H'x-access-token: '\-H'Content-Type: application/json'\-d'{   "annualMaxContribution": 0,   "benefitId": "",   "compliance": {     "countryCode": "US",     "deductionType": "pretaxdeduction"   },   "countryCode": "US",   "employeeDeductionAmount": 500,   "employeeDeductionType": "amount",   "employerDeductionAmount": 200,   "employerDeductionType": "amount",   "isActive": true,   "isForAllEmployees": true,   "name": "C",   "type": "pretaxdeduction",   "users": [        ] }'```

##### Sample Request
```java
{
  "annualMaxContribution": 0,
  "benefitId": "",
  "compliance": {
    "countryCode": "US",
    "deductionType": "pretaxdeduction"
  },
  "countryCode": "US",
  "employeeDeductionAmount": 500,
  "employeeDeductionType": "amount",
  "employerDeductionAmount": 200,
  "employerDeductionType": "amount",
  "isActive": true,
  "isForAllEmployees": true,
  "name": "C",
  "type": "pretaxdeduction",
  "users": [
    
  ]
}```

##### Sample Response
```java
{
  "benefitId": "635fe1a91d1752891f434073",
  "name": "C",
  "isActive": true,
  "employeeDeductionAmount": 500,
  "employeeDeductionType": "amount",
  "employerDeductionAmount": 200,
  "employerDeductionType": "amount",
  "isForAllEmployees": true,
  "annualMaxContribution": 0,
  "countryCode": "US",
  "compliance": {
    "countryCode": "US",
    "deductionType": "pretaxdeduction",
    "bsiCode": ""
  },
  "users": []
}
```
##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |



#### GET
##### Summary

Get Benefit By Id

##### Description

Get Benefit by Id for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Benefit Id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.Benefit](#dtobenefit) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Models

#### dto.ApplicableValues

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| metro | number |  | No |
| nonMetro | number |  | No |

#### dto.Benefit

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| annualMaxContribution | number |  | No |
| benefitId | string |  | No |
| compliance |  |  | No |
| countryCode | string |  | No |
| employeeDeductionAmount | number |  | No |
| employeeDeductionType | string |  | No |
| employerDeductionAmount | number |  | No |
| employerDeductionType | string |  | No |
| isActive | boolean |  | No |
| isForAllEmployees | boolean |  | No |
| name | string |  | No |
| users | [ [dto.user](#dtouser) ] |  | No |

#### dto.BenefitsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| benefits | [ [dto.Benefit](#dtobenefit) ] |  | No |
| filterResponse | [dto.FilterResponse](#dtofilterresponse) |  | No |

#### dto.BulkComponentRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| componentId | string |  | No |

#### dto.BulkIdRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ids | [ string ] |  | No |

#### dto.Component

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| compliance |  |  | No |
| componentConfig | [dto.ComponentConfig](#dtocomponentconfig) |  | No |
| countryCode | string |  | No |
| employees | [ string ] |  | No |
| frequency | [dto.Frequency](#dtofrequency) |  | No |
| includeInCTC | boolean |  | No |
| includeInOTCalc | boolean |  | No |
| isActive | boolean |  | No |
| isForAllEmployee | boolean |  | No |
| isUnpaidIncluded | boolean |  | No |
| isVariable | boolean |  | No |
| name | string |  | No |
| type | string |  | No |

#### dto.ComponentConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amountPerDay | number |  | No |
| applicableValues | [dto.ApplicableValues](#dtoapplicablevalues) |  | No |
| basisComponentId | string |  | No |
| componentPercent | number |  | No |
| configureAmountBasis | string |  | No |
| deductionType | string |  | No |

#### dto.ComponentResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| compliance |  |  | No |
| componentConfig | [dto.ComponentConfig](#dtocomponentconfig) |  | No |
| defaultComponent | boolean |  | No |
| employees | [ string ] |  | No |
| frequency | [dto.Frequency](#dtofrequency) |  | No |
| id | string |  | No |
| includeInCTC | boolean |  | No |
| includeInOTCalc | boolean |  | No |
| isActive | boolean |  | No |
| isForAllEmployee | boolean |  | No |
| isHidden | boolean |  | No |
| isUnpaidIncluded | boolean |  | No |
| isVariable | boolean |  | No |
| name | string |  | No |
| subType | string |  | No |
| type | string |  | No |

#### dto.ComponentsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| components | [ [dto.ComponentResponse](#dtocomponentresponse) ] |  | No |
| filterResponse | [dto.FilterResponse](#dtofilterresponse) |  | No |

#### dto.FilterResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| count | integer |  | No |
| currentPage | integer |  | No |
| limit | integer |  | No |
| totalCount | integer |  | No |
| totalPages | integer |  | No |

#### dto.Frequency

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| occurrence | [ string ] |  | No |
| period | string |  | No |
| when | string |  | No |

#### dto.UserBenefits

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| benefits | [ [dto.Benefit](#dtobenefit) ] |  | No |
| iamUserId | integer |  | No |
| userId | string |  | No |

#### dto.benefitAmounts

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| annualMaxContribution | number |  | No |
| employeeDeductionAmount | number |  | No |
| employeeDeductionType | string |  | No |
| employerDeductionAmount | number |  | No |
| employerDeductionType | string |  | No |

#### dto.user

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| benefitAmounts | [dto.benefitAmounts](#dtobenefitamounts) | the benefitAmount struct holds amount | No |
| iamUserId | integer |  | No |
| userId | string |  | No |

#### models.ComponentDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| meta | [models.Meta](#modelsmeta) |  | No |

#### models.Meta

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| countryCode | string |  | No |
| employees | [ string ] |  | No |
| isActive | boolean |  | No |
| isForAllEmployee | boolean |  | No |
| isSalaryAdvanceComponent | boolean |  | No |
| isVariable | boolean |  | No |
| name | string |  | No |
| type | string |  | No |
