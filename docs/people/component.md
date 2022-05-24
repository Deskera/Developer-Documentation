---
id: component
title: Component
sidebar_label: Component
---
### Security
**ApiKeyAuth**  

|apiKey|*API Key*|
|---|---|
|Name|x-access-token|
|In|header|

### /benefit

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

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /benefit/user

#### PATCH
##### Summary

Update Benefits of a User

##### Description

Update Benefits of a User

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| benefit | body | User Benefits request body | Yes | [dto.UserBenefits](#dtouserbenefits) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [dto.UserBenefits](#dtouserbenefits) ] |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /benefit/user/bulk

#### POST
##### Summary

Get Benefit of Users in bulk

##### Description

Get Benefits of a Users

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| userIdList | body | userIdList | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [dto.UserBenefits](#dtouserbenefits) ] |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /benefit/user/{userId}

#### GET
##### Summary

Get Benefit By User

##### Description

Get Benefit of a User

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| userId | path | UserId | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.UserBenefits](#dtouserbenefits) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /benefit/{id}

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

### /benefits/tenant

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

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /component

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

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /component/salary-advance/details

#### GET
##### Summary

Get Salary Advance component By Tenant Id

##### Description

Get Salary Advance component By Tenant Id

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [models.ComponentDetails](#modelscomponentdetails) ] |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /component/{id}

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

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

#### DELETE
##### Summary

Delete Component By Id

##### Description

Delete Component by Id for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Component Id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.Component](#dtocomponent) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /components/bulk

#### POST
##### Summary

Bulk Fetch Components By Ids

##### Description

Bulk Fetch Components by Ids for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| ids | body | Ids | Yes | [dto.BulkIdRequest](#dtobulkidrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.ComponentsResponse](#dtocomponentsresponse) |

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

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /components/tenant

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
