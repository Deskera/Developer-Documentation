---
id: employee
title: Employee
sidebar_label: Employee
---

### Security
**Authorization**  

|apiKey|*API Key*|
|---|---|
|Name|x-access-token|
|In|header|

### /v1/people/employees/check-list

#### GET
##### Summary

Get termination checklist.

##### Description

API to Get termination checklist.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Termination checklist has been fetched successfully. | [CheckListDto](#checklistdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Save termination checklist

##### Description

API to Save termination checklist

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| checkListDtos | body | Termination Detail Json | No | [ [CheckListDto](#checklistdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Termination checklist has been saved successfully. | [CheckListDto](#checklistdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/employees/in/tax-declaration-info

#### GET
##### Summary

Get Employee Tax Information Details.

##### Description

API to get employee tax declaration details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| financialYearStartDate | query | financialYearStartDate | Yes | string |
| stage | query | stage | Yes | string |
| userId | query | userId | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Employee tax declaration details has been fetched successfully. | [EmployeeTaxDeclarationResponseDto](#employeetaxdeclarationresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Save Employee Information Details.

##### Description

API to save employee information details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| requestDto | body | Employee Tax Declaration Detail Json | No | [EmployeeTaxRequestDto](#employeetaxrequestdto) |
| stage | query | stage | Yes | string |
| status | query | status | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | string |
| 201 | Employee tax declaration details has been saved successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PUT
##### Summary

Update Employee Tax Declaration Details.

##### Description

API to update employee tax declaration details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| financialYearStartDate | query | financialYearStartDate | Yes | string |
| requestDto | body | Employee Tax Declaration Detail Json | No | [EmployeeTaxRequestDto](#employeetaxrequestdto) |
| stage | query | stage | Yes | string |
| status | query | status | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Employee tax declaration details has been updated successfully. | [EmployeeTaxDeclarationResponseDto](#employeetaxdeclarationresponsedto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/employees/in/tax-declaration-info/details

#### GET
##### Summary

Get Employee Tax Information Details For All Stages.

##### Description

API to get employee tax declaration details for all stages

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| financialYearStartDate | query | financialYearStartDate | Yes | string |
| userId | query | userId | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Employee tax declaration details has been fetched successfully. | [EmployeeTaxDeclarationDetails](#employeetaxdeclarationdetails) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/employees/in/tax-declaration-info/info

#### POST
##### Summary

Api to get employee's investment submission details by user ids

##### Description

Api to get employee's investment submission details by user ids

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| stage | query | stage | Yes | string |
| userIds | body | userIds | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Employees investment submission details has been fetched successfully. | [EmployeeTaxDeclarationInfo](#employeetaxdeclarationinfo) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/employees/termination

#### GET
##### Summary

Get Employee Termination Details.

##### Description

API to get employee termination details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| empId | query | Employee Termination Detail Json | No | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Employee termination details has been fetched successfully. | [TerminationEmployeeDetailsRequestDto](#terminationemployeedetailsrequestdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Save Employee Termination Details.

##### Description

API to save employee termination details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| requestDto | body | Employee Termination Detail Json | No | [TerminationEmployeeDetailsRequestDto](#terminationemployeedetailsrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TerminationEmployeeDetailsRequestDto](#terminationemployeedetailsrequestdto) |
| 201 | Employee termination details has been saved successfully. | [TerminationEmployeeDetailsRequestDto](#terminationemployeedetailsrequestdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PUT
##### Summary

Update Employee Termination Details.

##### Description

API to update employee termination details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| requestDto | body | Employee Termination Detail Json | No | [TerminationEmployeeDetailsRequestDto](#terminationemployeedetailsrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Employee termination details has been updated successfully. | [TerminationEmployeeDetailsRequestDto](#terminationemployeedetailsrequestdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/employees/termination-job

#### GET
##### Summary

initiateTerminationJob

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tenantId | query | tenantId | Yes | long |
| terminationDate | query | terminationDate | Yes | string |

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

### /v1/people/employees/termination/rehire/{userId}

#### GET
##### Summary

Update Employee Termination Details.

##### Description

API to update employee termination details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| userId | path | userId | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Employee termination details has been updated successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/employees/{empid}/check-list

#### GET
##### Summary

Get employee termination checklist.

##### Description

API to Get employee termination checklist.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| empid | path | empid | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Employee termination checklist has been fetched successfully. | [CheckListDto](#checklistdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Save employee termination checklist

##### Description

API to Save employee termination checklist

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| empid | path | empid | Yes | long |
| employeeCheckListDtoList | body | employeeCheckListDtoList | Yes | [ [EmployeeCheckListDto](#employeechecklistdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Employee termination checklist has been saved successfully. | [CheckListDto](#checklistdto) |
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

Update termination checklist status.

##### Description

API to Update termination checklist status.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| CheckListStatusDtos | body | Termination Status Json | No | [ [CheckListStatusDto](#checkliststatusdto) ] |
| empid | path | empid | Yes | long |
| self | query | self | Yes | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Termination checklist status has been updated successfully. | [CheckListDto](#checklistdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PATCH
##### Summary

Update employee termination checklist

##### Description

API to Update employee termination checklist

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| empid | path | empid | Yes | long |
| employeeCheckListDtoList | body | employeeCheckListDtoList | Yes | [ [EmployeeCheckListDto](#employeechecklistdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Employee termination checklist has been updated successfully. | [CheckListDto](#checklistdto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Models

#### AddressDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| addressLine1 | string | Address line 1
_Example:_ `"218, Robinson Road"` | No |
| addressLine2 | string | Address line 2
_Example:_ `"Downtown"` | No |
| addressLine3 | string | Address line 3
_Example:_ `"Downtown"` | No |
| city | string | City
_Example:_ `"Pune"` | No |
| country | string | Country
_Example:_ `"IN"` | No |
| county | string | County
_Example:_ `"Montgomery County"` | No |
| state | string | State
_Example:_ `"MH"` | No |
| zipCode | string | Postal Code
_Example:_ `123456` | No |

#### AmountDetailsDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approverComments | [ string ] |  | No |
| attachments | [ string ] |  | No |
| declaredAmount | number | This is amount declared against the particular
_Example:_ `2000` | No |
| name | string | This is name of particular against which payment is done
_Example:_ `"Interest Paid"` | No |
| status | string | _Enum:_ `"PENDING"`, `"APPROVED"`, `"REJECTED"` | No |
| submitterComments | [ string ] |  | No |

#### CheckListDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| item | string | Task
_Example:_ `"This is task"` | No |
| seq | long | This is task seq id
_Example:_ `1` | No |

#### CheckListResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long |  | No |
| item | string | Task
_Example:_ `"This is task"` | No |
| seq | long | This is task seq id
_Example:_ `1` | No |

#### CheckListStatusDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeeItemStatus | boolean | This is employee task status
_Example:_ `false` | No |
| id | long |  | No |
| item | string | Task
_Example:_ `"This is task"` | No |
| managerItemStatus | boolean | This is manager status
_Example:_ `false` | No |
| seq | long | This is task seq id
_Example:_ `1` | No |

#### EmployeeCheckListDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeeItemStatus | boolean | This is employee task status
_Example:_ `false` | No |
| id | long |  | No |
| item | string | Task
_Example:_ `"This is task"` | No |
| managerItemStatus | boolean | This is manager status
_Example:_ `false` | No |
| seq | long | This is task seq id
_Example:_ `1` | No |

#### EmployeeTaxDeclarationDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| actual | [EmployeeTaxDeclarationResponseDto](#employeetaxdeclarationresponsedto) |  | No |
| approved | [EmployeeTaxDeclarationResponseDto](#employeetaxdeclarationresponsedto) |  | No |
| declaration | [EmployeeTaxDeclarationResponseDto](#employeetaxdeclarationresponsedto) |  | No |

#### EmployeeTaxDeclarationInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| rejectedItems | [ string ] | Rejected Items
_Example:_ `"Income from other sources"` | No |
| stage | string | Tax Declaration Stage
_Enum:_ `"DECLARATION"`, `"ACTUAL"`, `"APPROVED"`
_Example:_ `"DECLARATION"` | No |
| status | string | Tax Declaration Status
_Enum:_ `"DRAFT"`, `"SUBMITTED"`
_Example:_ `"DRAFT"` | No |
| submitOn | date | Tax Declaraion Date
_Example:_ `"2021-04-01"` | No |
| userId | string | Employee User Id
_Example:_ `1234` | No |

#### EmployeeTaxDeclarationResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeeName | string | Employee Name
_Example:_ `"John Doe"` | No |
| homeLoanRepayment | [ [HomeLoanRepaymentRequest](#homeloanrepaymentrequest) ] |  | No |
| houseRents | [ [HouseRentRequest](#houserentrequest) ] |  | No |
| investment80C | [Investment80CRequest](#investment80crequest) | 80C Investments details object
_Example:_ `"80C Investments"` | No |
| investment80D | [Investment80DRequest](#investment80drequest) | 80D Investments details object
_Example:_ `"80D Investments"` | No |
| newRegime | boolean | True if tax calculation is based on New Regime calculation
_Example:_ `true` | No |
| otherExemptions | [OtherExemptionsRequest](#otherexemptionsrequest) | Exemptions from other sources
_Example:_ `"Other Exemptions"` | No |
| otherIncomeSources | [OtherIncomeSourcesRequest](#otherincomesourcesrequest) | Income from other sources
_Example:_ `"Other Income sources"` | No |
| rentalIncome | [ [RentalIncomeRequest](#rentalincomerequest) ] |  | No |
| status | string | Employee User Id
_Enum:_ `"DRAFT"`, `"SUBMITTED"`
_Example:_ `"DRAFT"` | No |
| submitBy | long | Employee User Id
_Example:_ `1234` | No |
| submitOn | date | Declaration Date
_Example:_ `"2021-04-30"` | No |
| userId | string | Employee User Id
_Example:_ `1234` | No |

#### EmployeeTaxRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| homeLoanRepayment | [ [HomeLoanRepaymentRequest](#homeloanrepaymentrequest) ] |  | No |
| houseRents | [ [HouseRentRequest](#houserentrequest) ] |  | No |
| investment80C | [Investment80CRequest](#investment80crequest) | 80C Investments details object
_Example:_ `"80C Investments"` | No |
| investment80D | [Investment80DRequest](#investment80drequest) | 80D Investments details object
_Example:_ `"80D Investments"` | No |
| newRegime | boolean | True if tax calculation is based on New Regime calculation
_Example:_ `true` | No |
| otherExemptions | [OtherExemptionsRequest](#otherexemptionsrequest) | Exemptions from other sources
_Example:_ `"Other Exemptions"` | No |
| otherIncomeSources | [OtherIncomeSourcesRequest](#otherincomesourcesrequest) | Income from other sources
_Example:_ `"Other Income sources"` | No |
| rentalIncome | [ [RentalIncomeRequest](#rentalincomerequest) ] |  | No |
| userId | string | Employee User Id
_Example:_ `1234` | No |

#### EmployeeTerminationCheckListResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeeItemStatus | boolean | This is employee task status
_Example:_ `false` | No |
| id | long |  | No |
| item | string | Task
_Example:_ `"This is task"` | No |
| managerItemStatus | boolean | This is manager status
_Example:_ `false` | No |
| seq | long | This is task seq id
_Example:_ `1` | No |

#### HomeLoanRepaymentRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amountDetails | [ [AmountDetailsDTO](#amountdetailsdto) ] |  | No |
| lenderName | string | Lender Name
_Example:_ `"Deskera"` | No |
| lenderPAN | string | Lender PAN Number
_Example:_ `"AB123456Z"` | No |

#### HouseRentRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | [AddressDto](#addressdto) |  | No |
| amountDetails | [ [AmountDetailsDTO](#amountdetailsdto) ] |  | No |
| isMetroCity | boolean |  | No |
| landlordName | string | Lender Name
_Example:_ `"Deskera"` | No |
| landlordPAN | string | Lender PAN Number
_Example:_ `"AB123456Z"` | No |
| rentalFromDate | date | Rental Start Date
_Example:_ `"2021-04-01"` | No |
| rentalToDate | date | Rental End Date
_Example:_ `"2022-03-31"` | No |

#### Investment80CRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amountDetails | [ [AmountDetailsDTO](#amountdetailsdto) ] |  | No |

#### Investment80DRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amountDetails | [ [AmountDetailsDTO](#amountdetailsdto) ] |  | No |

#### OtherExemptionsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amountDetails | [ [AmountDetailsDTO](#amountdetailsdto) ] |  | No |

#### OtherIncomeSourcesRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amountDetails | [ [AmountDetailsDTO](#amountdetailsdto) ] |  | No |

#### RentalIncomeRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amountDetails | [ [AmountDetailsDTO](#amountdetailsdto) ] |  | No |
| lenderName | string | Lender Name
_Example:_ `"Deskera"` | No |
| lenderPAN | string | Lender PAN Number
_Example:_ `"AB123456Z"` | No |
| repayingHomeLoanForThisProperty | boolean |  | No |

#### TerminationEmployeeComplianceData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fieldValue | object | Field Value
_Example:_ `"TRUE"` | No |

#### TerminationEmployeeDetailsRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| compliance | [ [TerminationEmployeeComplianceData](#terminationemployeecompliancedata) ] | List of compliance data | No |
| employeeId | long | Employee User Id
_Example:_ `1234` | No |
| employeePersonalEmail | string | Employee Personal Email
_Example:_ `"employee@xyz.com"` | No |
| terminationDate | date | date pattern dd-MM-yyyy
_Example:_ `"20-09-2020"` | Yes |
| terminationReason | string | Termination Reason
_Example:_ `"Relocation"` | No |
| terminationType | string | Termination Type
_Enum:_ `"VOLUNTARY"`, `"INVOLUNTARY"`
_Example:_ `"VOLUNTARY"` | No |

#### TerminationEmployeeDetailsResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| compliance | [ [TerminationEmployeeComplianceData](#terminationemployeecompliancedata) ] | List of compliance data | No |
| employeeId | long | Employee User Id
_Example:_ `1234` | No |
| employeePersonalEmail | string | Employee Personal Email
_Example:_ `"employee@xyz.com"` | No |
| terminationDate | dateTime | date pattern dd-MM-yyyy
_Example:_ `"20-09-2020"` | Yes |
| terminationReason | string | Termination Reason
_Example:_ `"Relocation"` | No |
| terminationType | string | Termination Type
_Enum:_ `"VOLUNTARY"`, `"INVOLUNTARY"`
_Example:_ `"VOLUNTARY"` | No |
