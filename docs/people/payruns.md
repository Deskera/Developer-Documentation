---
id: payruns
title: Payruns
sidebar_label: Payruns
---

### Security
**ApiKeyAuth**  

|apiKey|*API Key*|
|---|---|
|Name|x-access-token|
|In|header|

### /check-print/bulk

#### POST
##### Summary

Get Check Print Details By Employee Id and Payrun Id

##### Description

Get Check Print Details By Employee Id and Payrun Id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payroll | body | CheckPrint request dto | Yes | [dto.CheckPrintRequestDto](#dtocheckprintrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrollCheckPrintResponseDto](#dtopayrollcheckprintresponsedto) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /commission/add

#### POST
##### Summary

Add Commission Endpoint

##### Description

Add Commission Endpoint for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| commission | body | Commission Dto | Yes | [dto.CommissionRequestDto](#dtocommissionrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.CommissionResponseDto](#dtocommissionresponsedto) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /commission/details

#### GET
##### Summary

Get Commission Endpoint

##### Description

Get Commission Endpoint for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| commission | body | Commission paging Dto | Yes | [dto.GetCommissionRequestDto](#dtogetcommissionrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.CommissionResponseDto](#dtocommissionresponsedto) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /commission/update

#### PATCH
##### Summary

Update Commission Endpoint

##### Description

Update Commission Endpoint for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| commission | body | Commission Dto | Yes | [dto.CommissionRequestDto](#dtocommissionrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.CommissionResponseDto](#dtocommissionresponsedto) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /internal/payrun/{payrunId}

#### DELETE
##### Summary

Internal Delete Payrun By Id

##### Description

Internal Delete Payrun by Id for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrunId | path | Id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.BulkDeleteResponse](#dtobulkdeleteresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payrolls

#### GET
##### Summary

Get Payrolls

##### Description

Get Payrolls

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrollsResponse](#dtopayrollsresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

#### POST
##### Summary

Add new Payroll

##### Description

Add new Payroll for a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payroll | body | Payroll Dto | Yes | [dto.PayrollRequest](#dtopayrollrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrollResponse](#dtopayrollresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payrolls/employee/{employeeId}

#### GET
##### Summary

Get Payroll payrun mapping by Employee Id

##### Description

Get Payroll payrun mapping by Employee Id

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrollsResponse](#dtopayrollsresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payrolls/payroll/migrations

#### GET
##### Summary

Encrypt Payroll controller

##### Description

Encrypt Payroll controller

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| year | path | Year | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.EncryptedPayrollsCount](#dtoencryptedpayrollscount) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payrolls/{id}

#### GET
##### Summary

Get Payroll by ID

##### Description

Get Payroll by ID

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrollResponse](#dtopayrollresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payruns

#### GET
##### Summary

Get Payruns

##### Description

Get all Payruns of a tenant

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
| 200 | OK | [dto.PayrunsResponse](#dtopayrunsresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

#### POST
##### Summary

Add Payrun

##### Description

Add Payrun for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrun | body | Payrun Request Body | Yes | [dto.PayrunRequest](#dtopayrunrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunResponse](#dtopayrunresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

#### DELETE
##### Summary

Bulk Delete Payruns By Ids

##### Description

Bulk Delete Payruns by Ids for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| ids | body | Payrun Ids | Yes | [ [dto.BulkPayrunRequest](#dtobulkpayrunrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunResponse](#dtopayrunresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payruns/giro/file

#### GET
##### Summary

Get GIRO

##### Description

Get GIRO file

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| sortOrder | query | Sort Order | No | string |
| sortField | query | Sort Field | No | string |
| limit | query | Limit per Page | No | integer |
| currentPage | query | Current Page number | No | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.GIROFileResponse](#dtogirofileresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payruns/payment-status/{vendor}/{payrunId}

#### PATCH
##### Summary

Payment done of a given payrun

##### Description

Payment done of a given payrun by Id for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrunId | path | Payrun Id | Yes | string |
| vendor | path | vendor | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunResponse](#dtopayrunresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payruns/payrun/{payrunId}/payroll/{mappingId}

#### PUT
##### Summary

Update Payroll of a Payrun

##### Description

Update Payroll of a Payrun for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrunId | path | Payrun Id | Yes | string |
| mappingId | path | Payroll Id | Yes | string |
| payrun | body | Payroll Request Body | Yes | [dto.PayrollRequest](#dtopayrollrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunResponse](#dtopayrunresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payruns/process-payment/{id}

#### PATCH
##### Summary

process Payment by Payrun Id

##### Description

Payment by Payrun Id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrunId | path | Id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | string |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payruns/revert-je

#### POST
##### Summary

Revert Payrun JE From Books

##### Description

Revert Payrun JE From Books

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.RevertPayrunJEsRequest](#dtorevertpayrunjesrequest) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payruns/revert/{payrunId}

#### PATCH
##### Summary

Revert Payrun By Id

##### Description

Revert Payrun by Id for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrunId | path | Id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunResponse](#dtopayrunresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payruns/status/{payrunId}

#### PATCH
##### Summary

Processes a given payrun

##### Description

Processes a given payrun by Id for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrunId | path | Payrun Id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunResponse](#dtopayrunresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payruns/sync-je

#### POST
##### Summary

Sync Payrun JE To Books

##### Description

Sync Payrun JE To Books

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.SyncPayrunJEsRequest](#dtosyncpayrunjesrequest) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payruns/update/je-status

#### PATCH
##### Summary

Update payrun JE status

##### Description

Update payrun JE status

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunJEPostedRequest](#dtopayrunjepostedrequest) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payruns/year/{year}

#### GET
##### Summary

Get Payruns in a year

##### Description

Get payruns in a year for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| year | path | Year | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunsResponse](#dtopayrunsresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payruns/{id}

#### DELETE
##### Summary

Delete Payrun By Id

##### Description

Delete Payrun by Id for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunResponse](#dtopayrunresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payruns/{payrunId}

#### GET
##### Summary

Get Payrun By Id

##### Description

Get Payrun by Id for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrunId | path | Payrun Id | Yes | string |
| sortOrder | query | Sort Order | No | string |
| sortField | query | Sort Field | No | string |
| limit | query | Limit per Page | No | integer |
| currentPage | query | Current Page number | No | integer |
| searchString | query | Search String | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunResponse](#dtopayrunresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

#### PUT
##### Summary

Update Payrun

##### Description

Update Payrun for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrunId | path | Payrun Id | Yes | string |
| payrun | body | Payrun Request Body | Yes | [dto.PayrunRequest](#dtopayrunrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunResponse](#dtopayrunresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

#### DELETE
##### Summary

Delete Payrolls of a Payrun By Id

##### Description

Delete Payrolls of a Payrun by Id for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrunId | path | Payrun Id | Yes | string |
| bulkReq | body | Payroll Ids | Yes | [dto.BulkIdRequest](#dtobulkidrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunResponse](#dtopayrunresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payslips/fields

#### GET
##### Summary

Get fields for Payslips

##### Description

Get fields for Payslips

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| from | query | countryCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.FieldsResponse](#dtofieldsresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payslips/paystub/{paystubId}

#### GET
##### Summary

Get Payslip by Paystub Id

##### Description

Get all Payslip by Paystub Id of a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| paystubId | path | Paystub Id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PaySlipResponse](#dtopayslipresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payslips/paystub/{paystubId}/details

#### POST
##### Summary

Get Payslip details

##### Description

Get Payslip details

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| year | path | paystubId | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayslipDetailResponse](#dtopayslipdetailresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /payslips/paystub/{paystubId}/render

#### GET
##### Summary

Get Rendered Payslips

##### Description

Get Rendered Payslips

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| from | query | paystubId | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | string |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /paystubs

#### GET
##### Summary

Get Paystubs between dates

##### Description

Get all Payruns of a tenant between dates

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| from | query | From (Year) | Yes | string |
| to | query | To (Year) | Yes | string |
| employeeId | query | EmployeeId | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PaystubsResponse](#dtopaystubsresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /paystubs/bulk

#### POST
##### Summary

Get Paystubs by payrun id

##### Description

Get Paystubs by payrun id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payroll | body | Payroll id dto | Yes | [dto.BulkIdRequest](#dtobulkidrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.BulkPaystubsResponse](#dtobulkpaystubsresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /paystubs/employee/{employeeId}

#### GET
##### Summary

Get Paystubs of Employee

##### Description

Get all Paystubs of Employee of a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| employeeId | path | EmployeeId (UserId) | Yes | string |
| sortOrder | query | Sort Order | No | string |
| sortField | query | Sort Field | No | string |
| limit | query | Limit per Page | No | integer |
| currentPage | query | Current Page number | No | integer |
| searchString | query | Search String | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PaystubsResponse](#dtopaystubsresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /paystubs/employee/{employeeId}/month/{month}

#### GET
##### Summary

Get Paystubs for Employee in a Given Month

##### Description

Get all Payruns of a tenant between dates

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| from | query | From (Year) | Yes | string |
| to | query | To (Year) | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PaystubsResponse](#dtopaystubsresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /paystubs/report/liability

#### GET
##### Summary

Get liabilities between dates

##### Description

Get all liabilities of a tenant between dates

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| from | query | From | Yes | string |
| to | query | To | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.LiabilityResponse](#dtoliabilityresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /paystubs/statutory-report

#### POST
##### Summary

Get statutory report data by date and employee id

##### Description

Get statutory report data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payroll | body | Report filter Dto | Yes | [dto.ReportsFilter](#dtoreportsfilter) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.ReportData](#dtoreportdata) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### /paystubs/year/{year}

#### GET
##### Summary

Get Paystubs in a year

##### Description

Get paystubs in a year for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| year | path | Year | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunsResponse](#dtopayrunsresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Models

#### dto.Benefit

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| compliance | [dto.Compliance](#dtocompliance) |  | No |
| employeeContribution | number |  | No |
| employeeYTD | number |  | No |
| employerContribution | number |  | No |
| employerYTD | number |  | No |
| id | string |  | No |
| name | string |  | No |

#### dto.BenefitMeta

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| annualMaxContribution | number |  | No |
| benefitId | string |  | No |
| compliance | [dto.Compliance](#dtocompliance) |  | No |
| countryCode | string |  | No |
| employeeDeductionAmount | number |  | No |
| employeeDeductionType | string |  | No |
| employerDeductionAmount | number |  | No |
| employerDeductionType | string |  | No |
| name | string |  | No |

#### dto.BulkDeleteResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| info | string |  | No |

#### dto.BulkIdRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ids | [ string ] |  | No |

#### dto.BulkPayrunRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| payrunId | string |  | No |

#### dto.BulkPaystubsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| paystubsResponse | [ [dto.PaystubsResponse](#dtopaystubsresponse) ] |  | No |

#### dto.CheckPrintDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountNumber | string |  | No |
| bankName | string |  | No |
| checkNumber | string |  | No |
| companyAddress | string |  | No |
| companyDateFormat | string |  | No |
| companyName | string |  | No |
| currency | string |  | No |
| currencySymbol | string |  | No |
| employeeName | string |  | No |
| memo | string |  | No |
| netPay | number |  | No |
| netPayInWords | string |  | No |
| payDate | string |  | No |
| routingNumber | string |  | No |
| workPeriod | [dto.WorkPeriod](#dtoworkperiod) |  | No |
| zipcode | string |  | No |

#### dto.CheckPrintRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeeIds | [ string ] |  | No |
| payrunId | string |  | No |

#### dto.CommissionRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| commissionDate | string |  | No |
| datasourceAmount | number |  | No |
| datasourceId | string |  | No |
| datasourceStatus | string |  | No |
| datasourceType | string |  | No |
| iamUserId | integer |  | No |
| type | string |  | No |
| userId | string |  | No |
| value | number |  | No |

#### dto.CommissionResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| _id | string |  | No |
| commissionAmount | number |  | No |
| commissionDate | string |  | No |
| datasourceAmount | number |  | No |
| datasourceId | string |  | No |
| datasourceStatus | string |  | No |
| datasourceType | string |  | No |
| iamUserId | integer |  | No |
| tenantId | integer |  | No |
| type | string |  | No |
| userId | string |  | No |
| value | number |  | No |

#### dto.Compliance

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| CPF | string |  | No |
| countryCode | string |  | No |
| deductionType | string |  | No |

#### dto.Component

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| YTD | number |  | No |
| amount | number |  | No |
| componentConfig | [dto.ComponentConfig](#dtocomponentconfig) |  | No |
| componentId | string |  | No |
| defaultAmount | number |  | No |
| employeeId | string |  | No |
| frequency | [dto.Frequency](#dtofrequency) |  | No |
| includeInCTC | boolean |  | No |
| includeInOTCalc | boolean |  | No |
| isHidden | boolean |  | No |
| isUnpaidIncluded | boolean |  | No |
| isVariable | boolean |  | No |
| modified | boolean |  | No |
| name | string |  | No |
| status | string |  | No |
| subType | string |  | No |
| type | string |  | No |

#### dto.ComponentConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amountPerDay | number |  | No |
| basisComponentId | string |  | No |
| componentPercent | number |  | No |
| configureAmountBasis | string |  | No |
| deductionType | string |  | No |

#### dto.CurrentYTD

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| YTD | number |  | No |
| current | number |  | No |

#### dto.EPFReport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| edliWages | string |  | No |
| employeID | string |  | No |
| employeeName | string |  | No |
| epfContributionRemitted | number |  | No |
| epfEpsDiffRemitted | string |  | No |
| epfWages | number |  | No |
| epsContributionRemitted | number |  | No |
| epsWages | number |  | No |
| grossWages | string |  | No |
| iamUserId | string |  | No |
| ncpDays | string |  | No |
| refundOfAdvance | string |  | No |
| uanNumber | number |  | No |

#### dto.EffectiveCompensation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| basicCompensation | number |  | No |
| compensation | number |  | No |
| effectiveDate | string |  | No |
| isVisible | boolean |  | No |
| period | string |  | No |

#### dto.EmployeeDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SSN | string |  | No |
| address | [ string ] |  | No |
| exemptions | boolean |  | No |
| name | string |  | No |
| taxebleMaritalStatus | string |  | No |

#### dto.EncryptedPayrollsCount

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| payrollsCount | string |  | No |

#### dto.Field

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| key | string |  | No |
| value | string |  | No |

#### dto.FieldsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| countryCode | string |  | No |
| fields | [ [dto.Field](#dtofield) ] |  | No |
| id | string |  | No |

#### dto.FilterOptions

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| currentPage | integer |  | No |
| limit | integer |  | No |
| orderBy | [dto.OrderBy](#dtoorderby) |  | No |
| searchField | string |  | No |
| searchString | string |  | No |

#### dto.FilterResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| count | integer |  | No |
| currentPage | integer |  | No |
| limit | integer |  | No |
| totalCount | integer |  | No |
| totalPages | integer |  | No |

#### dto.FinancialYear

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| endDate | string |  | No |
| startDate | string |  | No |

#### dto.Frequency

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| occurrence | [ string ] |  | No |
| period | string |  | No |
| when | string |  | No |

#### dto.GIROFileResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filterResponse | [dto.FilterResponse](#dtofilterresponse) |  | No |
| payrunForGIROFile | [ [dto.PayrunForGIROFile](#dtopayrunforgirofile) ] |  | No |

#### dto.GetCommissionRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| datasourceStatus | string |  | No |
| fromDate | string |  | No |
| toDate | string |  | No |
| userId | string |  | No |

#### dto.Holiday

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| dayName | string |  | No |
| holidayDate | string |  | No |
| holidayType | string |  | No |
| id | string |  | No |

#### dto.JEDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| isRevertJE | boolean |  | No |
| jeEntryNumber | string |  | No |
| jeId | string |  | No |
| jePostedOn | string |  | No |
| jeStatus | string |  | No |

#### dto.LeaveDates

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amPmId | integer |  | No |
| isHalfDate | boolean |  | No |
| leaveDate | string |  | No |

#### dto.LeaveInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| LeaveDates | [ [dto.LeaveDates](#dtoleavedates) ] |  | No |
| duration | number |  | No |
| fromDate | string |  | No |
| fromDateHalf | boolean |  | No |
| leaveTypeId | string |  | No |
| toDate | string |  | No |
| toDateHalf | boolean |  | No |

#### dto.LiabilityResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| liabilities | [  ] |  | No |

#### dto.OrderBy

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| field | string |  | No |
| order | string |  | No |

#### dto.Overtime

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| rate | number |  | No |
| value | number |  | No |

#### dto.PTReport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeID | string |  | No |
| employeeName | string |  | No |
| iamUserId | string |  | No |
| ptTaxAmount | number |  | No |
| ptWagesAmount | number |  | No |

#### dto.PaySchedule

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| name | string |  | No |

#### dto.PaySlipResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| benefits | [ [dto.Benefit](#dtobenefit) ] |  | No |
| benefitsMeta | [ [dto.BenefitMeta](#dtobenefitmeta) ] |  | No |
| deductions | [ [dto.PayslipComponent](#dtopayslipcomponent) ] |  | No |
| earnings | [ [dto.PayslipComponent](#dtopayslipcomponent) ] |  | No |
| employeeDetails | [dto.EmployeeDetails](#dtoemployeedetails) |  | No |
| employeeTax | [ [dto.PayslipTax](#dtopaysliptax) ] |  | No |
| employerTax | [ [dto.PayslipTax](#dtopaysliptax) ] |  | No |
| employersCPF |  |  | No |
| grossEarning | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| netPay | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| postTaxDeduction | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| postTaxEarning | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| preTaxDeduction | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| preTaxEarning | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| processedAt | string |  | No |
| reimbursment | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| sick | [ [dto.TimeOff](#dtotimeoff) ] |  | No |
| taxes | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| timeOff | [ [dto.TimeOff](#dtotimeoff) ] |  | No |

#### dto.PayrollCheckPrintResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [dto.CheckPrintDto](#dtocheckprintdto) ] |  | No |

#### dto.PayrollRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountNumber | string |  | No |
| bank | string |  | No |
| basicAfter | number |  | No |
| basicBefore | number |  | No |
| basicPayrun | number |  | No |
| benefits | [ [dto.Benefit](#dtobenefit) ] |  | No |
| benefitsMeta | [ [dto.BenefitMeta](#dtobenefitmeta) ] |  | No |
| compensation | number |  | No |
| compensationCurrency | string |  | No |
| compensationPeriod | string |  | No |
| components | [ [dto.Component](#dtocomponent) ] |  | No |
| componentsUpdated | boolean |  | No |
| countryCode | string |  | No |
| ctc | number |  | No |
| dateOfJoining | string |  | No |
| daysOff | number |  | No |
| daysOffAfter | number |  | No |
| daysOffBefore | number |  | No |
| daysWorked | number |  | No |
| effectiveCompensations | [ [dto.EffectiveCompensation](#dtoeffectivecompensation) ] |  | No |
| firstName | string |  | No |
| hasSalaryAdvance | boolean |  | No |
| hoursWorked | number |  | No |
| iamUserId | integer |  | No |
| lastName | string |  | No |
| lossOfPay | number |  | No |
| overtime | [ [dto.Overtime](#dtoovertime) ] |  | No |
| paymentMethod | string |  | No |
| routingNumber | string |  | No |
| tenantId | string |  | No |
| type | string |  | No |
| userId | string |  | No |

#### dto.PayrollResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| _id | string |  | No |
| accountNumber | string |  | No |
| bank | string |  | No |
| basicAfter | number |  | No |
| basicBefore | number |  | No |
| basicPayForDay | number |  | No |
| basicPayrun | number |  | No |
| basicPayrunYTD | number |  | No |
| benefits | [ [dto.Benefit](#dtobenefit) ] |  | No |
| benefitsMeta | [ [dto.BenefitMeta](#dtobenefitmeta) ] |  | No |
| compensation | number |  | No |
| compensationCurrency | string |  | No |
| compensationPeriod | string |  | No |
| compliance |  |  | No |
| components | [ [dto.Component](#dtocomponent) ] |  | No |
| createdAt | string |  | No |
| ctc | number |  | No |
| daysOff | number |  | No |
| daysOffAfter | number |  | No |
| daysOffBefore | number |  | No |
| daysWorked | number |  | No |
| deductions | number |  | No |
| directDepositConsent | boolean |  | No |
| earnings | number |  | No |
| effectiveCompensations | [ [dto.EffectiveCompensation](#dtoeffectivecompensation) ] |  | No |
| employeeId | string |  | No |
| firstName | string |  | No |
| hasSalaryAdvance | boolean |  | No |
| hourlyPay | number |  | No |
| hoursWorked | number |  | No |
| isPaymentDone | boolean |  | No |
| lastName | string |  | No |
| lossOfPay | number |  | No |
| netPay | number |  | No |
| netPayYTD | number |  | No |
| netPayrun | number |  | No |
| netPayrunYTD | number |  | No |
| netTaxes | number |  | No |
| overtime | [ [dto.Overtime](#dtoovertime) ] |  | No |
| overtimePay | number |  | No |
| paymentDoneAt | string |  | No |
| paymentFailureReason | string |  | No |
| paymentMethod | string |  | No |
| paymentVendor | string |  | No |
| payrunId | string |  | No |
| processed | boolean |  | No |
| processedAt | string |  | No |
| routingNumber | string |  | No |
| unfilledFields | [ string ] |  | No |
| updatedAt | string |  | No |
| userId | string |  | No |

#### dto.PayrollsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filterResponse | [dto.FilterResponse](#dtofilterresponse) |  | No |
| payrolls | [ [dto.PayrollResponse](#dtopayrollresponse) ] |  | No |

#### dto.Payrun

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| jeDate | string |  | No |
| payrunId | string |  | No |

#### dto.PayrunForGIROFile

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employees | [ string ] |  | No |
| firstPayDate | string |  | No |
| generatedGIROCount | integer |  | No |
| netPay | number |  | No |
| paySchedule | [dto.PaySchedule](#dtopayschedule) |  | No |
| payrunId | string |  | No |
| totalEmployee | integer |  | No |
| workPeriod | [dto.WorkPeriod](#dtoworkperiod) |  | No |

#### dto.PayrunJEPostedRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| isRevertJE | boolean |  | No |
| jeEntryNumber | string |  | No |
| jeId | string |  | No |
| payrunId | string |  | No |

#### dto.PayrunRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contractorHours | number |  | No |
| countryCode | string |  | No |
| deleted | boolean |  | No |
| employees | [ string ] |  | No |
| firstPayDate | string |  | No |
| isForAllUsers | boolean |  | No |
| isForContractors | boolean |  | No |
| payDate | string |  | No |
| payDay | string |  | No |
| payPeriod | string |  | No |
| paySchedule | [dto.PaySchedule](#dtopayschedule) |  | No |
| payrunType | integer |  | No |
| workPeriod | [dto.WorkPeriod](#dtoworkperiod) |  | No |
| workWeek | [ integer ] |  | No |

#### dto.PayrunResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| _id | string |  | No |
| companyDaysBetweenPeriod | number |  | No |
| createdAt | string |  | No |
| deniedPayrolls | [ [dto.PayrollResponse](#dtopayrollresponse) ] |  | No |
| directDepositConsent | boolean |  | No |
| employeeCount | integer |  | No |
| employees | [ string ] |  | No |
| filter | [dto.FilterResponse](#dtofilterresponse) |  | No |
| firstPayDate | string |  | No |
| hasDirectPayment | boolean |  | No |
| holidays | [ [dto.Holiday](#dtoholiday) ] |  | No |
| isForAllUsers | boolean |  | No |
| isNetPayNegative | boolean |  | No |
| isPaymentDone | boolean |  | No |
| isPayrunReverted | boolean |  | No |
| isValid | boolean |  | No |
| jeDetails | [ [dto.JEDetails](#dtojedetails) ] |  | No |
| jeEntryNumber | string |  | No |
| jeId | string |  | No |
| jePostedOn | string |  | No |
| jeStatus | string |  | No |
| month | integer |  | No |
| netPay | number |  | No |
| payDate | string |  | No |
| payDay | string |  | No |
| payPeriod | string |  | No |
| paySchedule | [dto.PaySchedule](#dtopayschedule) |  | No |
| paymentCount | integer |  | No |
| paymentDoneAt | string |  | No |
| paymentFailureCount | integer |  | No |
| paymentFailureReason | string |  | No |
| paymentVendor | string |  | No |
| payrolls | [ [dto.PayrollResponse](#dtopayrollresponse) ] |  | No |
| payrunType | integer |  | No |
| processed | boolean |  | No |
| processedAt | string |  | No |
| revertedAt | string |  | No |
| stage | string |  | No |
| tenantWorkWeek | [ [dto.WorkWeek](#dtoworkweek) ] |  | No |
| totalCashNetPay | number |  | No |
| totalCheckNetPay | number |  | No |
| totalCost | number |  | No |
| totalDeductions | number |  | No |
| totalDirectDepositNetPay | number |  | No |
| totalEarnings | number |  | No |
| totalEmployeeCost | number |  | No |
| totalEmployerCost | number |  | No |
| totalEmployerTaxes | number |  | No |
| totalTaxes | number |  | No |
| unpaidLeaves | [ [dto.UnpaidLeave](#dtounpaidleave) ] |  | No |
| updatedAt | string |  | No |
| workPeriod | [dto.WorkPeriod](#dtoworkperiod) |  | No |
| workWeek | [ integer ] |  | No |
| year | integer |  | No |

#### dto.PayrunsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filterResponse | [dto.FilterResponse](#dtofilterresponse) |  | No |
| payruns | [ [dto.PayrunResponse](#dtopayrunresponse) ] |  | No |

#### dto.PayslipComponent

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| YTD | number |  | No |
| current | number |  | No |
| description | string |  | No |
| rate | number |  | No |
| type | string |  | No |

#### dto.PayslipDetailResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| basicPayrun | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| benefits | [ [dto.Benefit](#dtobenefit) ] |  | No |
| benefitsMeta | [ [dto.BenefitMeta](#dtobenefitmeta) ] |  | No |
| compliance |  |  | No |
| countryCode | string |  | No |
| daysOff | number |  | No |
| deductions | [ [dto.PayslipComponent](#dtopayslipcomponent) ] |  | No |
| earnings | [ [dto.PayslipComponent](#dtopayslipcomponent) ] |  | No |
| employeeDetails | [dto.UserInfo](#dtouserinfo) |  | No |
| employeeId | string |  | No |
| employeeTax | [ [dto.PayslipTax](#dtopaysliptax) ] |  | No |
| employerTax | [ [dto.PayslipTax](#dtopaysliptax) ] |  | No |
| grossEarning | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| grossPayrun | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| iamUserId | integer |  | No |
| lossOfPay | number |  | No |
| netPay | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| netPayrun | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| overtime | [ [dto.Overtime](#dtoovertime) ] |  | No |
| payDate | string |  | No |
| payPeriod | string |  | No |
| paystubId | string |  | No |
| postTaxDeduction | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| postTaxEarning | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| preTaxDeduction | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| preTaxEarning | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| processedAt | string |  | No |
| reimbursment | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| sick | [ [dto.TimeOff](#dtotimeoff) ] |  | No |
| taxInfo | [dto.TaxInfo](#dtotaxinfo) |  | No |
| taxes | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| tenantConfiguration | [dto.TenantConfigurationResponse](#dtotenantconfigurationresponse) |  | No |
| tenantId | integer |  | No |
| tenantInfo | [dto.TenantShortInfo](#dtotenantshortinfo) |  | No |
| timeOff | [ [dto.TimeOff](#dtotimeoff) ] |  | No |
| workPeriod | [dto.WorkPeriod](#dtoworkperiod) |  | No |

#### dto.PayslipTax

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| YTD | number |  | No |
| current | number |  | No |
| tax | string |  | No |

#### dto.PaystubResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| _id | string |  | No |
| basicPay | number |  | No |
| basicPayrun | number |  | No |
| basicPayrunYTD | number |  | No |
| benefits | [ [dto.Benefit](#dtobenefit) ] |  | No |
| compensation | number |  | No |
| compensationCurrency | string |  | No |
| compensationPeriod | string |  | No |
| compliance |  |  | No |
| components | [ [dto.Component](#dtocomponent) ] |  | No |
| countryCode | string |  | No |
| createdAt | string |  | No |
| days | number |  | No |
| daysOff | number |  | No |
| deductions | number |  | No |
| earnings | number |  | No |
| employeeId | string |  | No |
| filepath | string |  | No |
| firstName | string |  | No |
| iamUserId | integer |  | No |
| isPaymentDone | boolean |  | No |
| lastName | string |  | No |
| lossOfPay | number |  | No |
| netPay | number |  | No |
| netPayYTD | number |  | No |
| netPayrun | number |  | No |
| netPayrunYTD | number |  | No |
| netTaxes | number |  | No |
| overtime | [ [dto.Overtime](#dtoovertime) ] |  | No |
| overtimePay | number |  | No |
| payDate | string |  | No |
| payPeriod | string |  | No |
| paymentDoneAt | string |  | No |
| paymentFailureReason | string |  | No |
| paymentVendor | string |  | No |
| payrollId | string |  | No |
| workPeriod | [dto.WorkPeriod](#dtoworkperiod) |  | No |

#### dto.PaystubsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filterResponse | [dto.FilterResponse](#dtofilterresponse) |  | No |
| paystubs | [ [dto.PaystubResponse](#dtopaystubresponse) ] |  | No |

#### dto.ReportData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| epfReport | [ [dto.EPFReport](#dtoepfreport) ] |  | No |
| filterResponse | [dto.FilterResponse](#dtofilterresponse) |  | No |
| ptReport | [ [dto.PTReport](#dtoptreport) ] |  | No |

#### dto.ReportsFilter

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeeId | [ integer ] |  | No |
| filterOptions | [dto.FilterOptions](#dtofilteroptions) |  | No |
| form | string |  | No |
| from | string |  | No |
| to | string |  | No |

#### dto.RevertPayrun

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| jeId | integer |  | No |
| jeRevertDate | string |  | No |
| payrunId | string |  | No |

#### dto.RevertPayrunJEsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| revertPayrun | [ [dto.RevertPayrun](#dtorevertpayrun) ] |  | No |

#### dto.SyncPayrunJEsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| payrun | [ [dto.Payrun](#dtopayrun) ] |  | No |

#### dto.TaxInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| compliance | [dto.TaxInfoCompliance](#dtotaxinfocompliance) |  | No |

#### dto.TaxInfoCompliance

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| esiNumber | string |  | No |

#### dto.TenantConfigurationResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| countryCode | string |  | No |
| dateFormat | string |  | No |
| decimalFormat | string |  | No |
| financialYear | [dto.FinancialYear](#dtofinancialyear) |  | No |
| tenantId | string |  | No |

#### dto.TenantShortInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | [dtos.Address](#dtosaddress) |  | No |
| companyCode | string |  | No |
| companyId | string |  | No |
| contactNumber | string |  | No |
| countryCode | string |  | No |
| currency | string |  | No |
| currencySymbol | string |  | No |
| fax | string |  | No |
| legalEntityName | string |  | No |
| name | string |  | No |
| oldFlow | boolean |  | No |
| organizationName | string |  | No |
| phone | string |  | No |
| tenantId | string |  | No |

#### dto.TimeOff

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| description | string |  | No |
| hours | string |  | No |

#### dto.UnpaidLeave

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| iamUserId | integer |  | No |
| leaveInfo | [ [dto.LeaveInfo](#dtoleaveinfo) ] |  | No |
| userId | string |  | No |

#### dto.UserCompliance

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SSN | string |  | No |
| federalFilingStatus | string |  | No |
| fin | string |  | No |
| nric | string |  | No |
| pfAccountNumber | string |  | No |
| taxExemptions | boolean |  | No |
| uanNumber | string |  | No |
| workPermitNumber | string |  | No |

#### dto.UserInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SSN | string |  | No |
| address | [dtos.Address](#dtosaddress) |  | No |
| aliasName | string |  | No |
| compliance | [dto.UserCompliance](#dtousercompliance) |  | No |
| dateOfJoining | string |  | No |
| designation | string |  | No |
| firstName | string |  | No |
| lastName | string |  | No |

#### dto.WorkPeriod

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| from | string |  | No |
| to | string |  | No |

#### dto.WorkWeek

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| day | string |  | No |
| duration | number |  | No |
| endTime | string |  | No |
| isWorkingDay | boolean |  | No |
| startTime | string |  | No |

#### dtos.Address

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| addressLine1 | string |  | No |
| addressLine2 | string |  | No |
| city | string |  | No |
| country | string |  | No |
| county | string |  | No |
| state | string |  | No |
| suburb | string |  | No |
| zipCode | string |  | No |
