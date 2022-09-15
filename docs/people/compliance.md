---
id: compliance
title: Compliance
sidebar_label: Compliance
---

### Security
**Authorization**  

|apiKey|*API Key*|
|---|---|
|Name|x-access-token|
|In|header|

### /v1/people/compliance/ID/umr-data

#### GET
##### Summary

getUMRWithStateAndCity

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [IDUMRDataDto](#idumrdatadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/IN/tax-applicable

#### POST
##### Summary

getEmployeeApplicableTaxes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| userIds | body | userIds | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [TaxApplicableUserDTO](#taxapplicableuserdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/IN/tax-declaration-items

#### GET
##### Summary

getTaxDeclarationItems

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [TaxDeclarationItem](#taxdeclarationitem) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/IN/tax-esi-rate

#### GET
##### Summary

getCurrentESIRate

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ESIRateDTO](#esiratedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/IN/tax-estimate

#### GET
##### Summary

getIncomeTaxEstimation

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| financialYearStartDate | query | financialYearStartDate | Yes | string |
| userId | query | userId | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [IncomeTaxEstimationDTO](#incometaxestimationdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/ais-submission

#### POST
##### Summary

Validate or Validate & Submit AIS Submission

##### Description

API to Validate or Validate & Submit AIS Submission

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | query | code | Yes | string |
| isFromNewSetup | query | isFromNewSetup | No | boolean |
| state | query | state | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | AIS Submission validated / Submitted successfully | string |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/bank-transfer-report

#### GET
##### Summary

Get Bank Transfer Report data for specific date range.

##### Description

API to fetch Bank Transfer Report data for specific date range.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fromDate | query | fromDate | Yes | date |
| toDate | query | toDate | Yes | date |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bank Transfer Report data fetched successfully. | [PayrollSummaryReportDTO](#payrollsummaryreportdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No data found for Bank Transfer Report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/components

#### POST
##### Summary

createComponentCompliance

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [ComponentComplianceDto](#componentcompliancedto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ComponentComplianceDto](#componentcompliancedto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PUT
##### Summary

updateComponentCompliance

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [ComponentComplianceDto](#componentcompliancedto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ComponentComplianceDto](#componentcompliancedto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/components/category-mapping

#### POST
##### Summary

createMappedComponents

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| irasMappedComponentsDto | body | irasMappedComponentsDto | Yes | [IRASMappedComponentsDto](#irasmappedcomponentsdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [IRASMappedComponentsDto](#irasmappedcomponentsdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PUT
##### Summary

updateMappedComponent

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| irasMappedComponentsDto | body | irasMappedComponentsDto | Yes | [IRASMappedComponentsDto](#irasmappedcomponentsdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [IRASMappedComponentsDto](#irasmappedcomponentsdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/corpass-login

#### POST
##### Summary

initiateCorpPassAuthentication

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| aisEmployeeRequestDto | body | aisEmployeeRequestDto | Yes | [AISEmployeeRequestDto](#aisemployeerequestdto) |
| authorizedUserId | query | authorizedUserId | Yes | string |
| cpfAccountId | query | cpfAccountId | Yes | string |
| isFromNewSetup | query | isFromNewSetup | No | boolean |
| validateOnly | query | validateOnly | Yes | boolean |
| year | query | year | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [CorpPassAuthResponse](#corppassauthresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/employee-meta

#### POST
##### Summary

createEmployeeCompliance

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [EmployeeMetaDto](#employeemetadto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [EmployeeMetaDto](#employeemetadto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PUT
##### Summary

updateEmployeeCompliance

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [EmployeeMetaDto](#employeemetadto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [EmployeeMetaDto](#employeemetadto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/export

#### GET
##### Summary

Export Documents

##### Description

API to Export documents

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| currentPage | query | currentPage | Yes | integer |
| format | query | format | Yes | string |
| limit | query | limit | Yes | integer |
| module | query | module | Yes | string |
| searchString | query | searchString | Yes | string |
| sortField | query | sortField | Yes | string |
| sortOrder | query | sortOrder | Yes | string |
| status | query | status | Yes | string |
| year | query | year | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Document exported successfully | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/export/IRAS-form/{form-type}/{user-id}

#### GET
##### Summary

Export IRAS Form

##### Description

API to Export IRAS Form

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| cpfAccountId | query | cpfAccountId | Yes | string |
| form-type | path | form-type | Yes | string |
| user-id | path | user-id | Yes | string |
| year | query | year | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | IRAS Form exported successfully | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/export/bank-transfer-report

#### GET
##### Summary

Get Bank Transfer Report data for specific date range.

##### Description

API to fetch Bank Transfer Report data for specific date range.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fromDate | query | fromDate | Yes | date |
| toDate | query | toDate | Yes | date |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bank Transfer Report data fetched successfully. | [PayrollSummaryReportDTO](#payrollsummaryreportdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No data found for Bank Transfer Report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/export/form-1099-misc

#### POST
##### Summary

Export Form 1099 Misc from Payload

##### Description

Export Form 1099 Misc from Payload

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| form1099MiscPayload | body | form1099MiscPayload | Yes | [Form1099MiscPayload](#form1099miscpayload) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Form exported successfully | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/export/form-1099-nec

#### POST
##### Summary

Export Form 1099 (NEC) from Payload

##### Description

Export Form 1099 (NEC) from Payload

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| form1099NECPayload | body | form1099NECPayload | Yes | [Form1099NECPayload](#form1099necpayload) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Form exported successfully | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/export/statutory-form

#### POST
##### Summary

Export Statutory Form

##### Description

API to Export Statutory Form

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| form-type | query | form-type | Yes | string |
| month | query | month | Yes | integer |
| users | body | users | Yes | [ integer ] |
| year | query | year | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Statutory form exported successfully | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/export/w9

#### POST
##### Summary

Export Form W9 from Payload

##### Description

Export Form W9 from Payload

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| formW9Payload | body | formW9Payload | Yes | [FormW9Payload](#formw9payload) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Form exported successfully | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/export/{country-code}/statutory-form

#### GET
##### Summary

Export Statutory Form

##### Description

API to Export Statutory Form

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| accountId | query | accountId | No | string |
| country-code | path | country-code | Yes | string |
| form-type | query | form-type | Yes | string |
| month | query | month | No | integer |
| submission-media | query | submission-media | No | string |
| user-id | query | user-id | No | string |
| year | query | year | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Statutory form exported successfully | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/export/{user-id}/form-1099-misc

#### GET
##### Summary

Export Form 1099 Misc

##### Description

API to Export Form 1099 Misc

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| user-id | path | user-id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Form exported successfully | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/export/{user-id}/form-1099-nec

#### GET
##### Summary

Export Form 1099 (NEC)

##### Description

API to Export Form 1099 NEC

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| user-id | path | user-id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Form exported successfully | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/export/{user-id}/{form-type}

#### GET
##### Summary

Export Employee Withholding Form

##### Description

API to Export Withholding Form

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query | endDate | No | date |
| form-type | path | form-type | Yes | string |
| startDate | query | startDate | No | date |
| user-id | path | user-id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Form exported successfully | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/giro/payment-details

#### GET
##### Summary

getGiroAuditLogs

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Page«GIROPaymentAuditDTO»](#page«giropaymentauditdto») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

savePaymentDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| giroPaymentDetailsDTO | body | giroPaymentDetailsDTO | Yes | [GIROPaymentDetailsRequestDTO](#giropaymentdetailsrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/giro/payment-details/payrun

#### GET
##### Summary

Get giro payment status for employees against payrun

##### Description

Api to fetch giro payment status for employees against payrun.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| generated | query | generated | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| payrunId | query | payrunId | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [USComplianceResponseDto](#uscomplianceresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/giro/payrun-employee-info

#### POST
##### Summary

Get employee list by payruns

##### Description

Api to get employee list by payruns

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrunIds | body | payrunIds | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [GIROPayrunEmployeeDTO](#giropayrunemployeedto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/iras/ais_summary

#### GET
##### Summary

Get AIS summary for CPFAccount and year

##### Description

AIS summary with support for pagination and sorting

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| cpfAccountId | query | cpfAccountId | Yes | string |
| currentPage | query | currentPage | No | integer |
| field | query | field | No | string |
| limit | query | limit | No | integer |
| order | query | order | No | string |
| year | query | year | No | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | AIS Summary generated successfully | [AISSummary](#aissummary) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/iras/ais_summary/logs

#### GET
##### Summary

getAISSubmissionLogs

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| cpfAccountId | query | cpfAccountId | Yes | string |
| endDate | query | endDate | Yes | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| startDate | query | startDate | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Page«AISSubmissionLogDTO»](#page«aissubmissionlogdto») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/iras/ais_summary/submitted

#### GET
##### Summary

Get AIS summary for CPFAccount and year

##### Description

AIS summary with support for pagination and sorting

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| cpfAccountId | query | cpfAccountId | Yes | string |
| currentPage | query | currentPage | No | integer |
| field | query | field | No | string |
| limit | query | limit | No | integer |
| order | query | order | No | string |
| year | query | year | No | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | AIS Summary generated successfully | [AISSummary](#aissummary) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/locate-tax/

#### POST
##### Summary

Locate Payroll Tax

##### Description

API to Locate payroll tax.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| employeeRequestDto | body | employeeRequestDto | Yes | [UserDto](#userdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax located successfully. | string |
| 201 | Created |  |
| 400 | Payroll data not found to locate tax. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/payroll-singapore/esubmission

#### GET
##### Summary

downloadCPFeSubmissionFile

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| cpfAccount | query | cpfAccount | Yes | string |
| month | query | month | Yes | integer |
| year | query | year | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/payroll-singapore/esubmission/iras

#### POST
##### Summary

Download IRAS eSubmission File

##### Description

API to download IRAS eSubmission File

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| authorizedUserId | query | authorizedUserId | Yes | string |
| cpfAccountId | query | cpfAccountId | Yes | string |
| formType | query | formType | Yes | string |
| year | query | year | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | IRAS eSubmission File downloaded successfully | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/payroll-singapore/process

#### POST
##### Summary

processEmployeePayrollCompliance

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| employeeRequestDto | body | employeeRequestDto | Yes | [EmployeeRequestDto](#employeerequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ComplianceResponseDto](#complianceresponsedto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/payroll-summary-report/{country-code}/{user-id}

#### GET
##### Summary

Get Payroll Summary Report data for specific user and date.

##### Description

API to fetch Payroll Summary Report data for specific user and date.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country-code | path | country-code | Yes | string |
| fromDate | query | fromDate | Yes | dateTime |
| toDate | query | toDate | Yes | dateTime |
| user-id | path | user-id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Payroll Summary Report data fetched successfully. | [PayrollSummaryReportDTO](#payrollsummaryreportdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No data found for Payroll Summary Report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/payroll-us/master-tax/pts

#### GET
##### Summary

Export MasterTax PTS Import file

##### Description

Export MasterTax PTS Import file

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrunId | query | payrunId | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | MasterTax PTS Import file exported successfully | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/payroll-us/process

#### POST
##### Summary

Calculate Payroll Tax

##### Description

API to calculate payroll tax.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| employeeRequestDto | body | employeeRequestDto | Yes | [USEmployeeRequestDto](#usemployeerequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax calculated successfully. | [USComplianceResponseDto](#uscomplianceresponsedto) |
| 201 | Created |  |
| 400 | Payroll data not found to calculate tax. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/report/IRAS/summary/{id}

#### PUT
##### Summary

Update IRAS report summary Data

##### Description

API to update IRAS summary data based.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | string |
| request | body | request | Yes | [ReportSummaryDataRequestDto](#reportsummarydatarequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | IRAS summary report data updated successfully. | [ReportSummaryResponseDto](#reportsummaryresponsedto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No data found for report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/rules

#### POST
##### Summary

index

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| item | body | item | Yes | [Item](#item) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | string |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/swagger

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

### /v1/people/compliance/taxes

#### GET
##### Summary

Get Taxes for country

##### Description

API to fetch taxes for country.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Taxes fetched successfully. | [PageableReportSummaryResponseDto](#pageablereportsummaryresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No data found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/test

#### GET
##### Summary

test

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

### /v1/people/compliance/touch

#### GET
##### Summary

test

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

### /v1/people/compliance/us-forms/{form-type}

#### GET
##### Summary

Download US Forms

##### Description

API to Download US Forms.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| form-type | path | form-type | Yes | string |
| fromDate | query | fromDate | No | date |
| toDate | query | toDate | No | date |
| userId | query | userId | No | string |
| year | query | year | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Form downloaded successfully. | [USComplianceResponseDto](#uscomplianceresponsedto) |
| 400 | failed to download form. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/us/bsi-lookup-sync

#### POST
##### Summary

saveTaxAndType

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | string |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/{country-code}/IRAS-form

#### PUT
##### Summary

Update IR8S form data.

##### Description

API to Update IR8S form data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country-code | path | country-code | Yes | string |
| formType | query | formType | Yes | string |
| request | body | request | Yes | [IR8SFormDto](#ir8sformdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | IR8S form data Updated successfully. | [IR8SFormDto](#ir8sformdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No data found for report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/{country-code}/IRAS-form/{form-type}

#### PUT
##### Summary

Update IR8A form data.

##### Description

API to Update IR8A form data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country-code | path | country-code | Yes | string |
| form-type | path | form-type | Yes | string |
| request | body | request | Yes | [IR8AFormRequestDto](#ir8aformrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | IR8A form data Updated successfully. | [IR8AFormResponseDto](#ir8aformresponsedto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No data found for report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/{country-code}/IRAS-form/{form-type}/{user-id}

#### GET
##### Summary

Get Appendix 8A form data for specific year, tenant and user.

##### Description

API to fetch Appendix 8A form data for specific year, tenant and user.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country-code | path | country-code | Yes | string |
| cpfAccountNo | query | cpfAccountNo | Yes | string |
| form-type | path | form-type | Yes | string |
| user-id | path | user-id | Yes | string |
| year | query | year | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | IR8S form data fetched successfully. | [Appendix8AFormDto](#appendix8aformdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No data found for Appendix 8A Form report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/{country-code}/IRAS/{form-type}

#### PUT
##### Summary

Update Appendix 8A form data.

##### Description

API to Update Appendix 8A form data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country-code | path | country-code | Yes | string |
| form-type | path | form-type | Yes | string |
| request | body | request | Yes | [Appendix8AFormDto](#appendix8aformdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Appendix 8A form data Updated successfully. | [Appendix8AFormDto](#appendix8aformdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No data found for report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/{country-code}/IRASForm/APPENDIX_8B

#### PUT
##### Summary

Update Appendix 8B form data.

##### Description

API to Update Appendix 8B form data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country-code | path | country-code | Yes | string |
| request | body | request | Yes | [Appendix8BRequestDto](#appendix8brequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Appendix 8B form data Updated successfully. | [Appendix8BResponseDto](#appendix8bresponsedto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No data found for report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/{country-code}/IRASForm/APPENDIX_8B/{user-id}

#### GET
##### Summary

Get Appendix 8B form data for specific year, tenant and user.

##### Description

API to fetch Appendix 8B form data for specific year, tenant and user.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country-code | path | country-code | Yes | string |
| cpfAccountNo | query | cpfAccountNo | Yes | string |
| user-id | path | user-id | Yes | string |
| year | query | year | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Appendix 8B form data fetched successfully. | [Appendix8BResponseDto](#appendix8bresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No data found for Appendix 8B Form report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/{country-code}/components

#### GET
##### Summary

Get Component meta data for compliance

##### Description

API to fetch component details related to compliance.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country-code | path | country-code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Component compliance meta data fetched successfully. | [ComponentComplianceDto](#componentcompliancedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Component compliance not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/{country-code}/employee-meta

#### GET
##### Summary

getEmployeeComplianceForCountry

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country-code | path | country-code | Yes | string |
| isFromNewSetup | query | isFromNewSetup | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [EmployeeMetaDto](#employeemetadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/{country-code}/payroll-taxes

#### GET
##### Summary

Calculate Payroll Tax

##### Description

API to calculate payroll tax.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country-code | path | country-code | Yes | string |
| financialEndDate | query | financialEndDate | Yes | string |
| financialStartDate | query | financialStartDate | Yes | string |
| stateCode | query | stateCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax calculated successfully. | [ object ] |
| 400 | Payroll data not found to calculate tax. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/{country-code}/report

#### GET
##### Summary

Get Compliance data for specific country and report type

##### Description

API to fetch compliance report data for country and type.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country-code | path | country-code | Yes | string |
| currentPage | query | currentPage | Yes | integer |
| limit | query | limit | Yes | integer |
| reportType | query | reportType | Yes | string |
| searchString | query | searchString | Yes | string |
| sortField | query | sortField | Yes | string |
| sortOrder | query | sortOrder | Yes | string |
| year | query | year | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Compliance report fetched successfully. | [PageableReportSummaryResponseDto](#pageablereportsummaryresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No data found for report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/{country-code}/report/{user-id}

#### GET
##### Summary

Get Compliance data for specific country and report type

##### Description

API to fetch compliance report data for country and type.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country-code | path | country-code | Yes | string |
| cpfAccountId | query | cpfAccountId | Yes | string |
| reportType | query | reportType | Yes | string |
| user-id | path | user-id | Yes | string |
| year | query | year | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Compliance report fetched successfully. | [ [ReportSummaryResponseDto](#reportsummaryresponsedto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No data found for report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/{country-code}/state-taxes-meta/{state}

#### GET
##### Summary

getStateTaxesForState

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country-code | path | country-code | Yes | string |
| state | path | state | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [StateTaxesMetaDto](#statetaxesmetadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/{country-code}/tax

#### POST
##### Summary

Calculate Payroll Tax

##### Description

API to calculate payroll tax.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country-code | path | country-code | Yes | string |
| taxCalculationRequestDto | body | taxCalculationRequestDto | Yes | [TaxCalculationRequestDto](#taxcalculationrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax calculated successfully. | [ object ] |
| 201 | Created |  |
| 400 | Payroll data not found to calculate tax. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/{country-code}/{user-id}/IRAS-form

#### GET
##### Summary

Get IR8S form data for specific year, tenant and user.

##### Description

API to fetch IR8S form data for specific year, tenant and user.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country-code | path | country-code | Yes | string |
| cpfAccountNo | query | cpfAccountNo | Yes | string |
| formType | query | formType | Yes | string |
| user-id | path | user-id | Yes | string |
| year | query | year | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | IR8S form data fetched successfully. | [IR8AFormResponseDto](#ir8aformresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No data found for IR8S Form report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/{country-code}/{user-id}/IRAS-form/{form-type}

#### GET
##### Summary

Get IR8A form data for specific year, tenant and user.

##### Description

API to fetch IR8A form data for specific year, tenant and user.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country-code | path | country-code | Yes | string |
| cpfAccountNo | query | cpfAccountNo | Yes | string |
| form-type | path | form-type | Yes | string |
| user-id | path | user-id | Yes | string |
| year | query | year | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | IR8A form data fetched successfully. | [IR8AFormResponseDto](#ir8aformresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No data found for IR8A Form report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/{countryCode}/components/category

#### GET
##### Summary

getComponentCategoryMasterForCountry

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| countryCode | path | countryCode | Yes | string |
| type | query | type | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ComponentComplianceMasterListDto](#componentcompliancemasterlistdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/compliance/{countryCode}/components/category-mapping

#### GET
##### Summary

getPayrollMappedComponentDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| countryCode | path | countryCode | Yes | string |
| type | query | type | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [IRASMappedComponentsDto](#irasmappedcomponentsdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Models

#### AISEmployeeDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| formStatus | [ [IRASFormSubmissionStatus](#irasformsubmissionstatus) ] |  | No |
| iamUserId | string |  | No |
| userId | string |  | No |

#### AISEmployeeRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employees | [ [AISEmployeeDto](#aisemployeedto) ] |  | No |

#### AISFormResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| formType | string | _Enum:_ `"IR8A"`, `"APPENDIX_8A"`, `"APPENDIX_8B"`, `"IR8S"` | No |
| organizationRefNo | string |  | No |
| submissionDate | dateTime |  | No |
| submissionRefNo | string |  | No |

#### AISSubmissionLog

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| action | string |  | No |
| active | boolean |  | No |
| cpfAccountId | string |  | No |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| deleted | boolean |  | No |
| fileName | string |  | No |
| formResponse | [ [AISFormResponse](#aisformresponse) ] |  | No |
| id | string |  | No |
| noOfRecords | integer |  | No |
| requestFilePath | string |  | No |
| responseFilePath | string |  | No |
| status | string | _Enum:_ `"SUCCESS"`, `"FAILURE"` | No |
| tenantId | string |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |
| year | integer |  | No |

#### AISSubmissionLogDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| action | string |  | No |
| cpfAccountId | string |  | No |
| fileName | string |  | No |
| noOfRecords | integer |  | No |
| requestFilePath | string |  | No |
| responseFilePath | string |  | No |
| status | string |  | No |
| submissionDate | string |  | No |
| year | integer |  | No |

#### AISSummary

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cpfAccountId | string |  | No |
| employee | [ [EmployeeWithIRASInfo](#employeewithirasinfo) ] |  | No |
| filterConfig | [FilterConfig](#filterconfig) |  | No |
| year | integer |  | No |

#### AddressDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| addressForLine1 | string |  | No |
| addressForLine2 | string |  | No |
| addressLine1 | string | Address line 1
_Example:_ `"218, Robinson Road"` | No |
| addressLine2 | string | Address line 2
_Example:_ `"Downtown"` | No |
| addressLine3 | string | Address line 3
_Example:_ `"Downtown"` | No |
| city | string | City
_Example:_ `"C001"` | No |
| country | string | Country
_Example:_ `"C001"` | No |
| county | string | County
_Example:_ `"CA"` | No |
| fullAddress | string |  | No |
| houseNum | string | house number
_Example:_ `123` | No |
| levelNum | string | level number
_Example:_ `123` | No |
| state | string | State
_Example:_ `"CS001"` | No |
| streetName | string | Street name
_Example:_ `123` | No |
| unitNum | string | Unit number
_Example:_ `20` | No |
| zipCode | string | Postal Code
_Example:_ `123456` | No |
| zipCodeUnFormatted | string | Unformatted Postal Code
_Example:_ `123456` | No |

#### AddressForm1099

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| city | string | Recipient city or town
_Example:_ `"Burlington"` | No |
| state | string | Recipient state name
_Example:_ `"VT"` | No |
| streetName | string | Recipient street address
_Example:_ `"123 Battery street"` | No |
| zipCode | string | Recipient Zip code
_Example:_ `"05401"` | No |

#### Appendix8AFormDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| actualHotelAccommodation | double |  | No |
| address | [AddressDto](#addressdto) |  | No |
| annualValue | double |  | No |
| carBenefits | double |  | No |
| costOfHomeLeavePassages | double |  | No |
| cpfAccountId | string |  | No |
| days | string |  | No |
| driverActualAmount | double |  | No |
| educationalExpenses | double |  | No |
| employeeName | string |  | No |
| entranceFees | double |  | No |
| freeHolidays | double |  | No |
| fullCostOfVehicles | double |  | No |
| furnitureAndFittingType | string |  | No |
| gainFromAssets | double |  | No |
| hotelAccommodationAmountEmployee | double |  | No |
| id | string |  | No |
| insurancePremiumPaidByEmployer | double |  | No |
| interestPaymentMadeByEmployer | double |  | No |
| noOfEmpSharingPremises | string |  | No |
| occupationPeriod | string |  | No |
| otherNonMonetaryAwards | double |  | No |
| rentPaid | double |  | No |
| rentPaidByEmp | double |  | No |
| servantActualAmount | double |  | No |
| taxRefNo | string |  | No |
| taxRefType | [Character](#character) |  | No |
| taxableHotelAccommodation | double |  | No |
| taxableValueOfRec | double |  | No |
| taxableValueOfUtilsAndHousekeeping | double |  | No |
| totalTaxableValueOfRec | double |  | No |
| totalValueOfBenefitsInKind | double |  | No |
| userId | string |  | No |
| utilityActualAmount | double |  | No |
| valueOfFurniture | double |  | No |
| year | integer |  | No |

#### Appendix8BRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| authorizePerson | [EmployeeDto](#employeedto) |  | No |
| cpfAccountId | string |  | No |
| dateOfIncorporation | date |  | No |
| employee | [EmployeeDto](#employeedto) |  | No |
| id | string |  | No |
| sections | [ [SectionDto](#sectiondto) ] |  | No |
| taxRefNo | string |  | No |
| taxRefType | [Character](#character) |  | No |
| userId | string |  | No |
| year | integer |  | No |

#### Appendix8BResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| authorizePerson | [EmployeeDto](#employeedto) |  | No |
| cpfAccountId | string |  | No |
| dateOfIncorporation | date |  | No |
| employee | [EmployeeDto](#employeedto) |  | No |
| id | string |  | No |
| sections | [ [SectionDto](#sectiondto) ] |  | No |
| taxRefNo | string |  | No |
| taxRefType | [Character](#character) |  | No |
| userId | string |  | No |
| year | integer |  | No |

#### BenefitRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| benefitId | string |  | No |
| compliance | [ComponentComplianceDto](#componentcompliancedto) |  | No |

#### Categories

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| categories | [ [Categories](#categories) ] |  | No |
| components | [ string ] |  | No |
| displaySeq | string |  | No |
| name | string |  | No |

#### Character

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Character | object |  |  |

#### CompanyDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | string |  | No |
| city | string |  | No |
| companyID | string |  | No |
| companyLogo | string |  | No |
| companyName | string |  | No |
| deactivate | integer |  | No |
| deleted | integer |  | No |
| emailID | string |  | No |
| empidformat | string |  | No |
| faxNumber | string |  | No |
| financialmonth | integer |  | No |
| incorporationDate | date |  | No |
| ir8sApprovalDate | date |  | No |
| ir8sApprovalObtained | string |  | No |
| irasApiProdUrl | boolean |  | No |
| isFileDirectory | integer |  | No |
| isSelfService | integer |  | No |
| payEntity | string |  | No |
| phoneNumber | string |  | No |
| replytoemail | string |  | No |
| smtpflow | integer |  | No |
| smtppassword | string |  | No |
| smtppath | string |  | No |
| smtpport | string |  | No |
| state | string |  | No |
| subDomain | string |  | No |
| switchpref | integer |  | No |
| website | string |  | No |
| zipCode | string |  | No |

#### Compliance

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeeContribution | [EmployeeContribution](#employeecontribution) |  | No |
| employerContribution | [EmployerContribution](#employercontribution) |  | No |
| taxDetails | [ [TaxDetailsDto](#taxdetailsdto) ] |  | No |
| userId | string |  | No |

#### ComplianceResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeeContribution | [EmployeeContribution](#employeecontribution) |  | No |
| employerContribution | [EmployerContribution](#employercontribution) |  | No |
| showComplianceData | boolean |  | No |
| userId | string |  | No |

#### ComponentComplianceDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| BPJS | boolean |  | No |
| CPF | string |  | No |
| SDL | boolean |  | No |
| SHG | boolean |  | No |
| bonusType | string |  | No |
| bsiCode | string |  | No |
| componentCategory | string |  | No |
| countryCode | string |  | No |
| cp38 | boolean |  | No |
| deductionType | string |  | No |
| eis | boolean |  | No |
| epf | boolean |  | No |
| esi | boolean |  | No |
| exemptFromPayG | boolean |  | No |
| hasCPF | boolean |  | No |
| hrdf | boolean |  | No |
| pcb | boolean |  | No |
| pf | boolean |  | No |
| socso | boolean |  | No |
| superannuation | number |  | No |
| taxType | string |  | No |
| taxexempt | boolean |  | No |

#### ComponentComplianceElementDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| display_seq | string |  | No |
| name | string |  | No |

#### ComponentComplianceMasterListDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| categories | [ [ComponentComplianceElementDto](#componentcomplianceelementdto) ] |  | No |
| country_code | string |  | No |
| id | string |  | No |
| type | string |  | No |

#### ComponentDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| componentId | string |  | No |
| name | string |  | No |
| type | string |  | No |

#### ComponentRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| componentId | string |  | No |

#### ConditionalHideShowFieldDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fieldId | [ string ] |  | No |
| fieldValue | [ [ string ] ] |  | No |
| hide | boolean |  | No |

#### CorpPassAuthResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| url | string |  | No |

#### ESIRateDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| esiAmountCap | number |  | No |
| esiEmployeeRate | number |  | No |
| esiEmployerRate | number |  | No |

#### EmployeeContribution

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cdac | number |  | No |
| cpfContribution | number |  | No |
| ecf | number |  | No |
| mbmf | number |  | No |
| shortFall | number |  | No |
| sinda | number |  | No |

#### EmployeeDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | [AddressDto](#addressdto) |  | No |
| company | [CompanyDto](#companydto) |  | No |
| contactNumber | string |  | No |
| cpfNo | string |  | No |
| designation | string |  | No |
| dob | date |  | No |
| emailID | string |  | No |
| fax | string |  | No |
| finNo | string |  | No |
| firstName | string |  | No |
| fullName | string |  | No |
| gender | string |  | No |
| icNo | string |  | No |
| immigrationRefNum | string |  | No |
| isDeleted | boolean |  | No |
| isDirector | boolean |  | No |
| isTermninated | boolean |  | No |
| joiningDate | date |  | No |
| landNo | string |  | No |
| lastName | string |  | No |
| malaysianIC | string |  | No |
| middleName | string |  | No |
| nationality | string |  | No |
| nricNo | string |  | No |
| passportNo | string |  | No |
| relievingDate | date |  | No |
| residentialType | integer |  | No |
| userStatus | string |  | No |
| user_id | string |  | No |
| workEmail | string |  | No |
| workNo | string |  | No |
| workPermitNum | string |  | No |

#### EmployeeMetaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| country | string |  | No |
| country_code | string |  | No |
| id | string |  | No |
| sections | [ [FormSectionDto](#formsectiondto) ] |  | No |

#### EmployeeRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| endDate | date |  | No |
| payrolls | [ [PayrunDto](#payrundto) ] |  | No |
| startDate | date |  | No |

#### EmployeeWithIRASInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| designation | string |  | No |
| employeeId | string |  | No |
| fin | string |  | No |
| firstName | string |  | No |
| formStatus | [ [IRASFormSubmissionStatus](#irasformsubmissionstatus) ] |  | No |
| iamUserId | string |  | No |
| lastName | string |  | No |
| nric | string |  | No |
| userId | string |  | No |

#### EmployerContribution

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cpfContribution | number |  | No |
| employerFWL | number |  | No |
| employerSDL | number |  | No |

#### File

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| absolute | boolean |  | No |
| absoluteFile | [File](#file) |  | No |
| absolutePath | string |  | No |
| canonicalFile | [File](#file) |  | No |
| canonicalPath | string |  | No |
| directory | boolean |  | No |
| file | boolean |  | No |
| freeSpace | long |  | No |
| hidden | boolean |  | No |
| name | string |  | No |
| parent | string |  | No |
| parentFile | [File](#file) |  | No |
| path | string |  | No |
| totalSpace | long |  | No |
| usableSpace | long |  | No |

#### FilterConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| numberOfElements | string |  | No |
| numberOfRecords | string |  | No |
| page | string |  | No |
| sizePerPage | string |  | No |
| totalPage | string |  | No |

#### Form1099MiscPayload

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountNumber | string | Account number (see instructions)
_Example:_ `123456789` | No |
| box1 | number | 1 Rents
_Example:_ `230.55` | No |
| box10 | number | 10 Gross proceeds paid to an attorney
_Example:_ `230.55` | No |
| box11 | number | 11 Fish purchased for resale
_Example:_ `230.55` | No |
| box12 | number | 12 Section 409A deferrals
_Example:_ `230.55` | No |
| box13 | string | FATCA filing requirement
_Example:_ `"Yes"` | No |
| box14 | number | 14 Excess golden parachute payments
_Example:_ `230.55` | No |
| box15 | number | 15 Nonqualified deferred compensation
_Example:_ `230.55` | No |
| box16 | number | 16 State tax withheld
_Example:_ `230.55` | No |
| box17 | string | 17 State/Payer’s state no.
_Example:_ `6543245654` | No |
| box18 | number | 18 State income
_Example:_ `230.55` | No |
| box2 | number | 2 Royalties
_Example:_ `230.55` | No |
| box3 | number | 3 Other income
_Example:_ `230.55` | No |
| box4 | number | 4 Federal income tax withheld
_Example:_ `230.55` | No |
| box5 | number | 5 Fishing boat proceeds
_Example:_ `230.55` | No |
| box6 | number | 6 Medical and health care payments
_Example:_ `230.55` | No |
| box7 | string | 7 Payer made direct sales totaling $5,000 or more of consumer products to recipient for resale
_Example:_ `"Yes"` | No |
| box8 | number | 8 Substitute payments in lieu of dividends or interest
_Example:_ `230.55` | No |
| box9 | number | 9 Crop insurance proceeds
_Example:_ `230.55` | No |
| firstName | string | RECIPIENT’S First Name
_Example:_ `"Jane"` | No |
| lastName | string | RECIPIENT’S Last Name
_Example:_ `"Smith"` | No |
| middleName | string | RECIPIENT’S Middle Name
_Example:_ `"Michael"` | No |
| payersAddress | [AddressForm1099](#addressform1099) | PAYER’S Street address, city or town, state or province, country, ZIP   or foreign postal code
_Example:_ `"60 Battery St\n Burlington, VT\n US 05401"` | No |
| payersName | string | PAYER’S name
_Example:_ `"Vermont Inc."` | No |
| payersTIN | string | PAYER’S TIN
_Example:_ `345525455` | No |
| payersTelephoneNumber | string | PAYER’S  Telephone number
_Example:_ `"+112345678"` | No |
| recipientCityOrTown | string | City or town, state or province, country, and ZIP or foreign postal code
_Example:_ `"Richmond, VT, US 05477"` | No |
| recipientStreetAddress | string | Street address (including apt. no.)
_Example:_ `"910 Cochran Rd,"` | No |
| recipientsTIN | string | RECIPIENT’S TIN
_Example:_ `345525455` | No |
| secondTINNo | string | 2nd TIN not.
_Example:_ `"Yes"` | No |

#### Form1099NECPayload

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountNumber | string | Account number (see instructions)
_Example:_ `123456789` | No |
| box1 | number | 1 Nonemployee compensation
_Example:_ `230.55` | No |
| box2 | string | 2 Payer made direct sales totaling $5,000 or more of consumer products to recipient for resale
_Example:_ `"Yes"` | No |
| box4 | number | 4 Federal income tax withheld
_Example:_ `230.55` | No |
| box5 | number | 5 State tax withheld
_Example:_ `230.55` | No |
| box6 | string | 6 State/Payer’s state no.
_Example:_ `6543245654` | No |
| box7 | number | 7 State income
_Example:_ `230.55` | No |
| firstName | string | RECIPIENT’S First Name
_Example:_ `"Jane"` | No |
| lastName | string | RECIPIENT’S Last Name
_Example:_ `"Smith"` | No |
| middleName | string | RECIPIENT’S Middle Name
_Example:_ `"Michael"` | No |
| payersAddress | [AddressForm1099](#addressform1099) | PAYER’S Street address, city or town, state or province, country, ZIP   or foreign postal code
_Example:_ `"60 Battery St\n Burlington, VT\n US 05401"` | No |
| payersName | string | PAYER’S name
_Example:_ `"Vermont Inc."` | No |
| payersTIN | string | PAYER’S TIN
_Example:_ `345525455` | No |
| payersTelephoneNumber | string | PAYER’S  Telephone number
_Example:_ `"+112345678"` | No |
| recipientCityOrTown | string | City or town, state or province, country, and ZIP or foreign postal code
_Example:_ `"Richmond, VT, US 05477"` | No |
| recipientStreetAddress | string | Street address (including apt. no.)
_Example:_ `"910 Cochran Rd,"` | No |
| recipientsTIN | string | RECIPIENT’S TIN
_Example:_ `345525455` | No |
| secondTINNo | string | 2nd TIN not.
_Example:_ `"Yes"` | No |

#### FormDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| description | string |  | No |
| employees | boolean |  | No |
| hidden | boolean |  | No |
| id | string |  | No |
| name | string |  | No |
| quarter | boolean |  | No |
| year | boolean |  | No |

#### FormFieldDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| alignment | string |  | No |
| column | integer |  | No |
| columnWidth | integer |  | No |
| conditionalHideShowField | [ [ConditionalHideShowFieldDto](#conditionalhideshowfielddto) ] |  | No |
| defaultText | string |  | No |
| defaultValue | string |  | No |
| editable | boolean |  | No |
| fieldId | string |  | No |
| fieldLabel | string |  | No |
| fieldType | string |  | No |
| hidden | boolean |  | No |
| isMandatory | boolean |  | No |
| maxLength | string |  | No |
| maxValue | string |  | No |
| minLength | string |  | No |
| minValue | string |  | No |
| options | [ [SelectOptionDto](#selectoptiondto) ] |  | No |
| optionsType | string |  | No |
| radioButtons | [ [RadioButtonDto](#radiobuttondto) ] |  | No |
| row | integer |  | No |
| sequenceNo | integer |  | No |
| tooltip | string |  | No |
| validators | [ string ] |  | No |

#### FormSectionDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| defaultState | string |  | No |
| fields | [ [FormFieldDto](#formfielddto) ] |  | No |
| sectionNo | integer |  | No |
| sectionType | string |  | No |
| title | string |  | No |

#### FormW9Payload

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box1 | string | 1 Name (as shown on your income tax return). Name is required on this line; do not leave this line blank.
_Example:_ `"John Smith"` | No |
| box2 | string | 2 Business name/disregarded entity name, if different from above
_Example:_ `"Vermont Inc."` | No |
| box3 | string | 3 Check appropriate box for federal tax classification of the person whose name is entered on line 1. Check only one of the following seven boxes
_Enum:_ `"SOLE_PROPRIETORSHIP"`, `"PARTNERSHIP"`, `"LLP"`, `"S_CORPORATION"`, `"CORPORATION"`, `"LLC"`, `"NON_PROFIT_ORGANIZATION"`, `"CHARITABLE_ORGANIZATION"`
_Example:_ `"SOLE_PROPRIETORSHIP"` | No |
| box5 | string | 5 Address (number, street, and apt. or suite no.) See instructions.
_Example:_ `"210 E Main St"` | No |
| box6 | string | 6 City, state, and ZIP code
_Example:_ `"Richmond, VT, 05477"` | No |
| box7 | string | 7 List account number(s) here (optional)
_Example:_ `123456789` | No |
| employerIdentificationNumber | string | Employer identification number
_Example:_ `123456788` | No |
| socialSecurityNumber | string | Social security number
_Example:_ `123456789` | No |

#### GIROEmployeeDetailsDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bank | string |  | No |
| employeeId | string |  | No |
| employeeName | string |  | No |
| epfGiroGenerated | boolean |  | No |
| giroGenerated | boolean |  | No |
| incomeTaxGiroGenerated | boolean |  | No |
| netPay | number |  | No |
| payPeriodFromDate | string |  | No |
| payPeriodToDate | string |  | No |
| paySchedule | string |  | No |
| salaryGiroGenerated | boolean |  | No |
| socsoGiroGenerated | boolean |  | No |

#### GIROPaymentAuditDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountNumber | string |  | No |
| bank | string |  | No |
| batchId | long |  | No |
| fileName | string |  | No |
| filePath | string |  | No |
| giroType | string |  | No |
| payDate | date |  | No |
| payrunId | string |  | No |
| statutoryType | string |  | No |
| tenantId | long |  | No |
| totalPayment | number |  | No |

#### GIROPaymentDetailsRequestDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountNumber | string |  | No |
| autoGenerate | boolean |  | No |
| bank | string |  | No |
| bankCode | string |  | No |
| batchId | long |  | No |
| branchCode | string |  | No |
| companyCode | string |  | No |
| contactName | string |  | No |
| employeeIds | [ string ] |  | No |
| format | string |  | No |
| giroType | string |  | No |
| payDate | date |  | No |
| payrunId | string |  | No |
| statutoryType | string |  | No |

#### GIROPaymentDetailsResponseDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeeTotalCount | integer |  | No |
| giroEmployeeDetails | [ [GIROEmployeeDetailsDTO](#giroemployeedetailsdto) ] |  | No |
| payDate | date |  | No |
| payrunId | string |  | No |
| totalPayment | number |  | No |

#### GIROPayrunEmployeeDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeeids | [ string ] |  | No |
| payrunId | string |  | No |

#### IDBankTransferDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountNumber | string |  | No |
| bank | string |  | No |
| branchName | string |  | No |
| employeeId | string |  | No |
| name | string |  | No |
| netPay | number |  | No |

#### IDCityDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| name | string |  | No |
| umr | number |  | No |

#### IDStateDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cities | [ [IDCityDto](#idcitydto) ] |  | No |
| code | string |  | No |
| name | string |  | No |
| umr | number |  | No |

#### IDUMRDataDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| country_code | string |  | No |
| states | [ [IDStateDto](#idstatedto) ] |  | No |

#### IR8AFormRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| arrivalDate | dateTime |  | No |
| authorizePerson | [EmployeeDto](#employeedto) |  | No |
| bankId | string |  | No |
| benefitsInKindValue | string |  | No |
| benefitsInkind | integer |  | No |
| bonus | string |  | No |
| bonusDeclarationDate | dateTime |  | No |
| cessationDate | dateTime |  | No |
| commencementDate | dateTime |  | No |
| commissionPaymentFrom | date |  | No |
| commissionPaymentTo | date |  | No |
| compensationAndGratuity | integer |  | No |
| compensationLossofOfficeAmount | string |  | No |
| compulsoryPensionPFNameforEmployee | string |  | No |
| contractualBonus | string |  | No |
| contributionCharged | boolean |  | No |
| cpfAccountId | string |  | No |
| departureDate | dateTime |  | No |
| director | boolean |  | No |
| directorFees | string |  | No |
| directorFeesApprovalDate | date |  | No |
| donation | string |  | No |
| employee | [EmployeeDto](#employeedto) |  | No |
| employeeCPFContribution | string |  | No |
| employeeIncomeTaxBorneByEmployerIndicator | string |  | No |
| employerContributionforExcesscPF | string |  | No |
| employerContributionforPensionPF | string |  | No |
| employerIncomeTaxContribiution | string |  | No |
| employmentIncomeTaxbyEmployer | string |  | No |
| entertainmentAllowance | string |  | No |
| exemptIncome | string |  | No |
| exemptIncomeTaxRemission | string |  | No |
| exemptRemissionIncomeIndicator | integer |  | No |
| exgratia | string |  | No |
| fixedAmountIncomeTaxbornebyEmployee | string |  | No |
| fullAmountOfContribution | string |  | No |
| fundNameForForeigner | string |  | No |
| gainsAndProfitFromShare | string |  | No |
| gainsAndProfitFromSharg | string |  | No |
| gratuityExGratiaPayment | integer |  | No |
| gratuityExgratiaOthers | string |  | No |
| grossCommisionIndicatorMonth | string |  | No |
| grossCommission | string |  | No |
| id | string |  | No |
| insurance | string |  | No |
| ir21Date | dateTime |  | No |
| ir21Type | integer |  | No |
| ir8sApprovalDate | dateTime |  | No |
| ir8sApprovalObtained | string |  | No |
| isIr8aAmendment | integer |  | No |
| lossOfOffice | integer |  | No |
| mandatoryContribution | boolean |  | No |
| mosqueBuildingFund | string |  | No |
| nameOfPensionPF | string |  | No |
| nonContractualBonus | string |  | No |
| nonResidentDirector | integer |  | No |
| noticePay | string |  | No |
| other | string |  | No |
| otherAllowances | string |  | No |
| overseasPostingFullPartYear | string |  | No |
| pension | string |  | No |
| remissionAmountOfIncome | string |  | No |
| residentStatus | boolean |  | No |
| retirementBenefitFundName | string |  | No |
| retirementBenefitsAccruedUpto92 | string |  | No |
| retirementBenefitsAccruedfrom93 | string |  | No |
| retirementBenifitPaymentDate | dateTime |  | No |
| salary | string |  | No |
| section45Indicator | boolean |  | No |
| taxExemptDonations | string |  | No |
| tenantId | string |  | No |
| transportAllowance | string |  | No |
| uenNo | string |  | No |
| year | integer |  | No |

#### IR8AFormResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| arrivalDate | dateTime |  | No |
| authorizePerson | [EmployeeDto](#employeedto) |  | No |
| bankId | string |  | No |
| bankName | string |  | No |
| basisOfArriving | string |  | No |
| benefitsInKindValue | string |  | No |
| benefitsInkind | integer |  | No |
| bonus | string |  | No |
| bonusDeclarationDate | dateTime |  | No |
| cessationDate | dateTime |  | No |
| commencementDate | dateTime |  | No |
| commissionPaymentFrom | date |  | No |
| commissionPaymentTo | date |  | No |
| compensationAndGratuity | integer |  | No |
| compensationLossofOfficeAmount | string |  | No |
| compulsoryPensionPFNameforEmployee | string |  | No |
| contractualBonus | string |  | No |
| contributionCharged | boolean |  | No |
| cpfAccountId | string |  | No |
| departureDate | dateTime |  | No |
| director | boolean |  | No |
| directorFees | string |  | No |
| directorFeesApprovalDate | date |  | No |
| donation | string |  | No |
| employee | [EmployeeDto](#employeedto) |  | No |
| employeeCPFContribution | string |  | No |
| employeeIncomeTaxBorneByEmployerIndicator | string |  | No |
| employerContributionforExcesscPF | string |  | No |
| employerContributionforPensionPF | string |  | No |
| employerIncomeTaxContribiution | string |  | No |
| employmentIncomeTaxbyEmployer | string |  | No |
| entertainmentAllowance | string |  | No |
| exemptIncome | string |  | No |
| exemptIncomeTaxRemission | string |  | No |
| exemptRemissionIncomeIndicator | integer |  | No |
| exgratia | string |  | No |
| fixedAmountIncomeTaxbornebyEmployee | string |  | No |
| fullAmountOfContribution | string |  | No |
| fundNameForForeigner | string |  | No |
| gainsAndProfitFromShare | string |  | No |
| gainsAndProfitFromSharg | string |  | No |
| gratuityExGratiaPayment | integer |  | No |
| gratuityExgratiaOthers | string |  | No |
| grossCommisionIndicatorMonth | string |  | No |
| grossCommission | string |  | No |
| id | string |  | No |
| insurance | string |  | No |
| ir21Date | dateTime |  | No |
| ir21Type | integer |  | No |
| ir8sApprovalDate | dateTime |  | No |
| ir8sApprovalObtained | string |  | No |
| isIr8aAmendment | integer |  | No |
| lengthOfService | string |  | No |
| lossOfOffice | integer |  | No |
| mandatoryContribution | boolean |  | No |
| mosqueBuildingFund | string |  | No |
| nameOfPensionPF | string |  | No |
| nonContractualBonus | string |  | No |
| nonResidentDirector | integer |  | No |
| noticePay | string |  | No |
| other | string |  | No |
| otherAllowances | string |  | No |
| overseasPostingFullPartYear | string |  | No |
| paymentType | string |  | No |
| pension | string |  | No |
| reasonForPayment | string |  | No |
| remissionAmountOfIncome | string |  | No |
| residentStatus | boolean |  | No |
| retirementBenefitFundName | string |  | No |
| retirementBenefitsAccruedUpto92 | string |  | No |
| retirementBenefitsAccruedfrom93 | string |  | No |
| retirementBenifitPaymentDate | dateTime |  | No |
| salary | string |  | No |
| section45Indicator | boolean |  | No |
| taxExemptDonations | string |  | No |
| tenantId | string |  | No |
| transportAllowance | string |  | No |
| uenNo | string |  | No |
| year | integer |  | No |

#### IR8SFormDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| authorizePerson | [EmployeeDto](#employeedto) |  | No |
| authorizePersonName | string |  | No |
| contributionAtFullRate | boolean |  | No |
| cpfAccountId | string |  | No |
| cpfcappingindicator | integer |  | No |
| dateOfSpore | date |  | No |
| employee | [EmployeeDto](#employeedto) |  | No |
| employeescontribution | string |  | No |
| employerscontribution | string |  | No |
| id | string |  | No |
| lastCpfUpdatedOn | dateTime |  | No |
| monieswithheld | string |  | No |
| monieswithholdcmb | integer |  | No |
| monieswithholdnoresion | string |  | No |
| overseaspostingcpfcontribution | integer |  | No |
| overseaspostingfromdate | date |  | No |
| overseaspostingtodate | date |  | No |
| sectionC | [ [IR8SSectionC](#ir8ssectionc) ] |  | No |
| signedDate | date |  | No |
| tableData | [ [MonthlyWageDetailsDto](#monthlywagedetailsdto) ] |  | No |
| tenantId | string |  | No |
| uenNo | string |  | No |
| year | integer |  | No |

#### IR8SSectionC

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | double |  | No |
| datePaid | date |  | No |
| empContribution | double |  | No |
| empDate | date |  | No |
| empInterest | double |  | No |
| emrContribution | double |  | No |
| emrDate | date |  | No |
| emrInterest | double |  | No |
| periodFrom | date |  | No |
| periodTo | date |  | No |
| sectionC | string |  | No |
| year | string |  | No |

#### IRASFormSubmissionStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| isGenerated | boolean |  | No |
| isSubmitted | boolean |  | No |
| isValidated | boolean |  | No |
| type | string |  | No |

#### IRASMappedComponent

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| category | [ComponentComplianceElementDto](#componentcomplianceelementdto) |  | No |
| componentId | string |  | No |
| componentName | string |  | No |

#### IRASMappedComponentsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| components | [ [IRASMappedComponent](#irasmappedcomponent) ] |  | No |
| country | string |  | No |
| country_code | string |  | No |
| id | string |  | No |
| type | string |  | No |

#### IncomeTaxEstimationDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amountNewRegime | number |  | No |
| amountOldRegime | number |  | No |

#### InputStream

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| InputStream | object |  |  |

#### Item

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| category | string | _Enum:_ `"NA"`, `"LOW_RANGE"`, `"MID_RANGE"`, `"HIGH_RANGE"`, `"SPECIAL_MIDHIGH_RANGE"` | No |
| cost | double |  | No |
| id | long |  | No |
| name | string |  | No |
| salary | number |  | No |
| salePrice | double |  | No |

#### LookupDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| countryCode | string |  | No |
| taxes | [ [Taxes](#taxes) ] |  | No |

#### MonthlyWageDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| addemployee | string |  | No |
| addemployer | string |  | No |
| addwages | string |  | No |
| id | integer |  | No |
| month | string |  | No |
| ordemployee | string |  | No |
| ordemployer | string |  | No |
| ordwages | string |  | No |

#### Pageable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| offset | long |  | No |
| pageNumber | integer |  | No |
| pageSize | integer |  | No |
| paged | boolean |  | No |
| sort | [Sort](#sort) |  | No |
| unpaged | boolean |  | No |

#### PageableReportSummaryResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filterConfig | [FilterConfig](#filterconfig) |  | No |
| reportSummaries | [ [ReportSummaryResponseDto](#reportsummaryresponsedto) ] |  | No |

#### Page«AISSubmissionLogDTO»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [AISSubmissionLogDTO](#aissubmissionlogdto) ] |  | No |
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

#### Page«GIROPaymentAuditDTO»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [GIROPaymentAuditDTO](#giropaymentauditdto) ] |  | No |
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

#### PayrollSummaryReportDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| companyContributions | number |  | No |
| employeeId | string |  | No |
| employerTaxes | number |  | No |
| firstName | string |  | No |
| fullName | string |  | No |
| lastName | string |  | No |
| netPay | number |  | No |
| paystubId | string |  | No |
| taxesWithheld | number |  | No |
| totalCost | number |  | No |
| totalDaysWorked | integer |  | No |
| totalDeductions | number |  | No |
| totalPay | number |  | No |

#### PayrunDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| IAMUserId | long |  | No |
| basicPay | number |  | No |
| benefits | [ [BenefitRequestDto](#benefitrequestdto) ] |  | No |
| components | [ [ComponentRequestDto](#componentrequestdto) ] |  | No |
| lossOfPay | number |  | No |
| overtimePay | number |  | No |
| payrollId | string |  | No |
| userId | string |  | No |

#### RadioButtonDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fieldId | string |  | No |
| fieldLabel | string |  | No |
| isDefault | boolean |  | No |

#### ReportSummaryDataRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | [AddressDto](#addressdto) |  | No |
| bankOfSalaryCredit | string |  | No |
| bonusDeclarationDate | dateTime |  | No |
| categories | [ [Categories](#categories) ] |  | No |
| commissionPaymentFrom | date |  | No |
| commissionPaymentTo | date |  | No |
| compensationLossofOfficeAmount | string |  | No |
| compliance | [Compliance](#compliance) |  | No |
| components | [ [ComponentDetails](#componentdetails) ] |  | No |
| cpfAccountId | string |  | No |
| dateOfBirth | date |  | No |
| dateOfCessation | date |  | No |
| dateOfCommensement | date |  | No |
| deleted | boolean |  | No |
| designation | string |  | No |
| directorFeesApprovalDate | date |  | No |
| donation | number |  | No |
| employeeId | string |  | No |
| employeeIncomeTaxBorneByEmployerIndicator | string |  | No |
| employeeName | string |  | No |
| employeeTaxRefNo | string |  | No |
| employerTaxRefNo | string |  | No |
| employmentIncomeTaxbyEmployer | string |  | No |
| exemptIncomeTaxRemission | string |  | No |
| exemptRemissionIncomeIndicator | integer |  | No |
| finNo | string |  | No |
| fixedAmountIncomeTaxbornebyEmployee | string |  | No |
| fullNameOfEmployee | string |  | No |
| grossSalary | number |  | No |
| id | string |  | No |
| insurance | number |  | No |
| ir8sApprovalDate | dateTime |  | No |
| ir8sApprovalObtained | string |  | No |
| lastPayStubCreatedAt | dateTime |  | No |
| lossOfOffice | integer |  | No |
| month | integer |  | No |
| nationality | string |  | No |
| nricNo | string |  | No |
| payrollDate | dateTime |  | No |
| paystub_ids | [ string ] |  | No |
| section45Indicator | boolean |  | No |
| sex | string |  | No |
| status | string |  | No |
| totalBasicPay | number |  | No |
| uenNo | string |  | No |
| userId | string |  | No |
| year | integer |  | No |

#### ReportSummaryResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | [AddressDto](#addressdto) |  | No |
| bankOfSalaryCredit | string |  | No |
| bonusDeclarationDate | dateTime |  | No |
| categories | [ [Categories](#categories) ] |  | No |
| commissionPaymentFrom | date |  | No |
| commissionPaymentTo | date |  | No |
| compensationLossofOfficeAmount | string |  | No |
| compliance | [Compliance](#compliance) |  | No |
| components | [ [ComponentDetails](#componentdetails) ] |  | No |
| cpfAccountId | string |  | No |
| dateOfBirth | date |  | No |
| dateOfCessation | date |  | No |
| dateOfCommensement | date |  | No |
| deleted | boolean |  | No |
| designation | string |  | No |
| directorFeesApprovalDate | date |  | No |
| donation | number |  | No |
| employeeId | string |  | No |
| employeeIncomeTaxBorneByEmployerIndicator | string |  | No |
| employeeName | string |  | No |
| employeeTaxRefNo | string |  | No |
| employerTaxRefNo | string |  | No |
| employmentIncomeTaxbyEmployer | string |  | No |
| exemptIncomeTaxRemission | string |  | No |
| exemptRemissionIncomeIndicator | integer |  | No |
| finNo | string |  | No |
| fixedAmountIncomeTaxbornebyEmployee | string |  | No |
| fullNameOfEmployee | string |  | No |
| grossSalary | number |  | No |
| id | string |  | No |
| insurance | number |  | No |
| ir8sApprovalDate | dateTime |  | No |
| ir8sApprovalObtained | string |  | No |
| lossOfOffice | integer |  | No |
| month | integer |  | No |
| nationality | string |  | No |
| nricNo | string |  | No |
| payrollDate | dateTime |  | No |
| payrollId | string |  | No |
| section45Indicator | boolean |  | No |
| sex | string |  | No |
| status | string |  | No |
| totalBasicPay | number |  | No |
| uenNo | string |  | No |
| userId | string |  | No |
| year | integer |  | No |

#### Resource

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| description | string |  | No |
| file | [File](#file) |  | No |
| filename | string |  | No |
| inputStream | [InputStream](#inputstream) |  | No |
| open | boolean |  | No |
| readable | boolean |  | No |
| uri | [URI](#uri) |  | No |
| url | [URL](#url) |  | No |

#### SectionDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| acquiredShareCount | integer |  | No |
| companyName | string |  | No |
| companyRegNo | string |  | No |
| dateOfExpiryOfExercise | date |  | No |
| exerciseDate | date |  | No |
| exercisePrice | string |  | No |
| grossAmountNotQualForTaxExempt | string |  | No |
| grossAmountOfGain | string |  | No |
| grossAmountQualForTaxExemptUnderAllCorporation | string |  | No |
| grossAmountQualForTaxExemptUnderSME | string |  | No |
| grossAmountQualForTaxExemptUnderStartUps | string |  | No |
| noOfUnExercisedShares | integer |  | No |
| openMarketValueAtExerciseDate | string |  | No |
| openMarketValueAtGrantDate | string |  | No |
| planGrantDate | date |  | No |
| planGrantedType | string |  | No |
| sectionIndex | integer |  | No |
| sectionType | string |  | No |
| typeOfExercise | string |  | No |

#### SelectOptionDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| name | string |  | No |

#### Sort

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| empty | boolean |  | No |
| sorted | boolean |  | No |
| unsorted | boolean |  | No |

#### StateDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| forms | [ [FormDto](#formdto) ] |  | No |
| sections | [ [FormSectionDto](#formsectiondto) ] |  | No |
| state_name | string |  | No |

#### StateTaxesMetaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| country | string |  | No |
| country_code | string |  | No |
| id | string |  | No |
| state | [ [StateDto](#statedto) ] |  | No |

#### TaxApplicableDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| applicable | boolean |  | No |
| name | string |  | No |

#### TaxApplicableUserDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| taxes | [ [TaxApplicableDTO](#taxapplicabledto) ] |  | No |
| userId | string |  | No |

#### TaxCalculationRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| endDate | date |  | No |
| payDate | date |  | No |
| payPeriod | string |  | No |
| payrolls | [ [PayrunDto](#payrundto) ] |  | No |
| payrunId | string |  | No |
| startDate | date |  | No |

#### TaxDeclarationItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| key | string |  | No |
| section | string |  | No |
| value | string |  | No |

#### TaxDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| monthToDate | number |  | No |
| payeeType | string |  | No |
| quaterToDate | number |  | No |
| taxAmount | number |  | No |
| taxName | string |  | No |
| yearToDate | number |  | No |

#### TaxLookup

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [LookupDetails](#lookupdetails) ] |  | No |
| id | string |  | No |

#### Taxes

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| applicable_to | [ string ] |  | No |
| description | string |  | No |
| key | string |  | No |
| name | string |  | No |

#### URI

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| absolute | boolean |  | No |
| authority | string |  | No |
| fragment | string |  | No |
| host | string |  | No |
| opaque | boolean |  | No |
| path | string |  | No |
| port | integer |  | No |
| query | string |  | No |
| rawAuthority | string |  | No |
| rawFragment | string |  | No |
| rawPath | string |  | No |
| rawQuery | string |  | No |
| rawSchemeSpecificPart | string |  | No |
| rawUserInfo | string |  | No |
| scheme | string |  | No |
| schemeSpecificPart | string |  | No |
| userInfo | string |  | No |

#### URL

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| authority | string |  | No |
| content | object |  | No |
| defaultPort | integer |  | No |
| file | string |  | No |
| host | string |  | No |
| path | string |  | No |
| port | integer |  | No |
| protocol | string |  | No |
| query | string |  | No |
| ref | string |  | No |
| userInfo | string |  | No |

#### USComplianceResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| componentYTD | [USPayrollComponentYTD](#uspayrollcomponentytd) |  | No |
| deductionComponents | [ [USPayrollComponent](#uspayrollcomponent) ] |  | No |
| earningComponents | [ [USPayrollComponent](#uspayrollcomponent) ] |  | No |
| employeeContribution | [USEmployeeContribution](#usemployeecontribution) |  | No |
| employerContribution | [USEmployerContribution](#usemployercontribution) |  | No |
| userId | string |  | No |

#### USEmployeeContribution

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| federalTax | number |  | No |
| medicareTax | number |  | No |
| socialSecurityTax | number |  | No |

#### USEmployeeDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| alienRegNumber | string |  | No |
| allState | string |  | No |
| deductions | number |  | No |
| dependentClaims | number |  | No |
| expiryDateOfWorkAuthorisation | date |  | No |
| extraWithholdings | number |  | No |
| fdeWthForEEInSameTerritory | string |  | No |
| federalFilingStatus | string | _Enum:_ `"singleormarriedfilingseparately"`, `"marriedfilingjointlyorqualifyingwidower"`, `"marriedfilingseparately"`, `"headofhouseholdexemption"` | No |
| foreignEarnedIncome | boolean |  | No |
| i94AdmissionNumber | string |  | No |
| i9Eligibility | string |  | No |
| i9ForeignPassportIssuanceCountry | string |  | No |
| i9ForeignPassportNumber | string |  | No |
| maritalFilingStatus | string |  | No |
| otherIncome | number |  | No |
| residentCountry | string |  | No |
| selectStateIndicator | string |  | No |
| socialSecurityNumber | string |  | No |
| statutoryIndicator | string |  | No |
| taxExemptions | boolean |  | No |
| taxesApplicable | string |  | No |
| twocmarkedinw4 | boolean |  | No |

#### USEmployeeRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| endDate | date |  | No |
| payPeriodCount | number |  | No |
| payrolls | [ [PayrunDto](#payrundto) ] |  | No |
| startDate | date |  | No |

#### USEmployerContribution

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| futa | number |  | No |
| medicareTax | number |  | No |
| socialSecurityTax | number |  | No |
| suta | number |  | No |

#### USPayrollComponent

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| category | string | _Enum:_ `"COMPONENT"`, `"BENEFIT"` | No |
| component_type | string |  | No |
| deductionType | string |  | No |
| id | string |  | No |

#### USPayrollComponentYTD

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeeFederalTaxYTD | number |  | No |
| employeeMedicareTaxYTD | number |  | No |
| employeeSocialSecurityTaxYTD | number |  | No |
| employerFUTAYTD | number |  | No |
| employerMedicareTaxYTD | number |  | No |
| employerSUTAYTD | number |  | No |
| employerSocialSecurityTaxYTD | number |  | No |
| grossWageYTD | number |  | No |
| postTaxDeductionYTD | number |  | No |
| preTaxDeductionYTD | number |  | No |
| taxableWageYTD | number |  | No |

#### UserDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | [AddressDto](#addressdto) |  | No |
| compliance | [USEmployeeDetails](#usemployeedetails) |  | No |
| countryCode | string |  | No |
| erpTenantId | long |  | No |
| iamUserId | long |  | No |
| tenantCountryCode | string |  | No |
| tenantId | string |  | No |
| userId | string |  | No |
