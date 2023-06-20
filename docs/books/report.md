---
id: reportsapi
title: Reports APIs
sidebar_label: Reports
---

# Deskera - Report Service
Report service APIs.

More about [Reports](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-fc8d54cc-b30b-4d87-abc9-08741499e1ed)

### /internal/reports/product-in-out-qty

#### GET
##### Summary

Find data for Product in out qty

##### Description

API to Find data for Product in out qty

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| productCode | query | productCode | Yes | string |
| tenantId | query | tenantId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /internal/reports/tds-notification

#### GET
##### Summary

Process tds payment notification

##### Description

Api to process tds payment notification

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Notification sent successfully |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Email notification failed |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/aged/aged-dashboard

#### GET
##### Summary

Aged Report Dashboard Details

##### Description

Aged Report Dashboard API

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| type | query | type | Yes | string |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Aged Report Dashboard fetched successfully. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/aged/payable/detail

#### GET
##### Summary

Get Aged Payable report

##### Description

API to get Aged Payable report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| agingSlabDuration | query | agingSlabDuration | No | integer |
| asOfDate | query | asOfDate | Yes | dateTime |
| contactCode | query | contactCode | No | string |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | No | dateTime |
| toDate | query | toDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Aged report has been fetched succesfully | [AgedDetailReportSumDto](#ageddetailreportsumdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/aged/payable/summary

#### GET
##### Summary

Get Aged Payable report

##### Description

API to get Aged Payable report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| agingSlabDuration | query | agingSlabDuration | No | integer |
| asOfDate | query | asOfDate | Yes | dateTime |
| contactCode | query | contactCode | No | string |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | No | dateTime |
| toDate | query | toDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Aged report has been fetched succesfully | [BASActivityStatementResp](#basactivitystatementresp) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/aged/receivable-payable/export

#### GET
##### Summary

Report Aged receivable or payable

##### Description

Report Aged receivable or payable description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| agingSlabDuration | query | agingSlabDuration | No | integer |
| asOfDate | query | asOfDate | Yes | dateTime |
| contactCode | query | contactCode | No | string |
| customfield | query | customfield | No | string |
| format | query | format | Yes | string |
| fromDate | query | fromDate | No | dateTime |
| toDate | query | toDate | No | dateTime |
| type | query | type | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report Aged receivable or payable successfully. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/aged/receivable/detail

#### GET
##### Summary

Get Aged Receivable report

##### Description

API to get Aged Receivable report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| agingSlabDuration | query | agingSlabDuration | No | integer |
| asOfDate | query | asOfDate | Yes | dateTime |
| contactCode | query | contactCode | No | string |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | No | dateTime |
| toDate | query | toDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Aged report has been fetched succesfully | [AgedDetailReportSumDto](#ageddetailreportsumdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/aged/receivable/summary

#### GET
##### Summary

Get Aged Receivable report

##### Description

API to get Aged Receivable report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| agingSlabDuration | query | agingSlabDuration | No | integer |
| asOfDate | query | asOfDate | No | dateTime |
| contactCode | query | contactCode | No | string |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | No | dateTime |
| toDate | query | toDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Aged report has been fetched succesfully | [AgedSummaryReportDto](#agedsummaryreportdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/amortization/forecast

#### POST
##### Summary

Amortization Forecast Summary and Detail Report.

##### Description

API to Fetch Amortization Forecast Summary and Detail Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [AmortizationReportRequestDto](#amortizationreportrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Amortization Forecast Summary and Detail Report has been fetched. | [CustomPagingResponse](#custompagingresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/amortization/waterfall-summary

#### POST
##### Summary

Amortization Waterfall Summary Report.

##### Description

API to Fetch Amortization Waterfall Summary Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [AmortizationReportRequestDto](#amortizationreportrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Amortization Waterfall Summary Report has been fetched. | [AmortizationWaterfallSummaryResponse](#amortizationwaterfallsummaryresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/au/basactivity

#### POST
##### Summary

Create BAS Activity Statement Log

##### Description

API to create BAS Activity Statement Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activityReq | body | activityReq | Yes | [BASActivityStatementReq](#basactivitystatementreq) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BASActivityStatementResp](#basactivitystatementresp) |
| 201 | BAS Activity Statement Log created successfully. | [BASActivityStatementResp](#basactivitystatementresp) |
| 400 | BAS Activity Statement Log could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/au/basactivity/{id}

#### PUT
##### Summary

Update BAS Activity Statement Log

##### Description

API to update BAS Activity Statement Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activityReq | body | activityReq | Yes | [BASActivityStatementReq](#basactivitystatementreq) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | BAS Activity Statement Log updated successfully. | [BASActivityStatementResp](#basactivitystatementresp) |
| 201 | Created |  |
| 400 | BAS Activity Statement Log could not be updated due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | BAS Activity Statement Log not found to update. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete BAS Activity Statement Log

##### Description

API to delete BAS Activity Statement Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | BAS Activity Statement Log deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | BAS Activity Statement Log not found to delete. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/au/basactivity/{id}/{status}

#### PUT
##### Summary

Delete BAS Activity Statement Log

##### Description

API to delete BAS Activity Statement Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| status | path | status | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 204 | BAS Activity Statement Log deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | BAS Activity Statement Log not found to delete. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/au/basactivitydata

#### POST
##### Summary

Get BAS Activity Statement Data

##### Description

API to Get BAS Activity Statement Data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activityReq | body | activityReq | Yes | [BASActivityDataStatementReq](#basactivitydatastatementreq) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BASActivityStatementResp](#basactivitystatementresp) |
| 201 | BAS Activity Statement Log created successfully. | [BASActivityStatementResp](#basactivitystatementresp) |
| 400 | BAS Activity Statement Log could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/au/basactivitydata/export/xls

#### GET
##### Summary

BAS export.

##### Description

API to fetch BAS export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| reportId | query | reportId | No | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | BAS Report exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/au/basactivitydetailsdata/export/xls

#### GET
##### Summary

BAS Details export.

##### Description

API to fetch BAS Details export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| reportId | query | reportId | No | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | BAS Report exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/au/basactivityreport

#### GET
##### Summary

Search BAS Activity Log

##### Description

API to search BAS Activity Logs

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | BAS Activity Log report has been fetched successfully. | [BASActivityStatementResp](#basactivitystatementresp) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/au/bassettings

#### GET
##### Summary

Get Settings for BAS Activity Statement

##### Description

API to get settings for BAS Activity Statement

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | BAS Activity Settings has been fetched successfully. | [BASActivityStatementResp](#basactivitystatementresp) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/au/bastransactiondetails/unsavedreport/{tempBASLogReportId}

#### GET
##### Summary

Get BAS Transaction Details Data For Unsaved Report

##### Description

API to Get BAS Transaction Details Data For Unsaved Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tempBASLogReportId | path | tempBASLogReportId | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | BAS transaction details data fetched.. | [ [BASTransactionDetailsReportDto](#bastransactiondetailsreportdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/au/bastransactiondetails/{basLogReportId}

#### GET
##### Summary

Get BAS Transaction Details Data

##### Description

API to Get BAS Transaction Details Data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| basLogReportId | path | basLogReportId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | BAS transaction details data fetched.. | [ [BASTransactionDetailsReportDto](#bastransactiondetailsreportdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/au/updatebassettings

#### PUT
##### Summary

Update BAS Activity Statement Log

##### Description

API to update BAS Activity Statement Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| settings | body | settings | Yes | [BASActivitySettingsReq](#basactivitysettingsreq) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | BAS Activity Statement Log updated successfully. | [BASActivitySettingsResp](#basactivitysettingsresp) |
| 201 | Created |  |
| 400 | BAS Activity Statement Log could not be updated due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | BAS Activity Statement Log not found to update. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/basic/additional/export

#### POST
##### Summary

Additional Report Export

##### Description

Additional Report Export for multiple reports

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| requestParam | body | requestParam | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Additional report exported successfully. | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/basic/cash-net-flow

#### POST
##### Summary

Cash net flow data

##### Description

Cash net flow data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| columnBy | query | columnBy | Yes | string |
| startAndEndDate | body | startAndEndDate | Yes | [StartAndEndDate](#startandenddate) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Cash net flow fetched successfully. | [ [CashNetflow](#cashnetflow) ] |
| 201 | Created |  |
| 400 | Cash net flow could not be fetched. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/basic/detail-transaction

#### POST
##### Summary

Detailed Transaction Report.

##### Description

API to fetch data for Detailed Transaction Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [AdditionalReportsRequest](#additionalreportsrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Detailed Transaction Report data has been fetched. | [ object ] |
| 201 | Created |  |
| 400 | Failed to fetch Detailed Transaction Report data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/basic/get-day-book-document-type-for-filter

#### GET
##### Summary

Day Book Report document type filter

##### Description

API to get Day Book Report

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Day Book Report fetched successfully. | object |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/basic/get-day-book-report

#### POST
##### Summary

Day Book Report

##### Description

API to get Day Book Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| reportsRequest | body | reportsRequest | Yes | [AdditionalReportsRequest](#additionalreportsrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Day Book Report fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/basic/receipt-summary

#### POST
##### Summary

Receipt list summary data

##### Description

Receipt list summary data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [ReceiptListSummaryRequest](#receiptlistsummaryrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Receipt list summary fetched successfully. | [ [ReceiptListSummaryResponse](#receiptlistsummaryresponse) ] |
| 201 | Created |  |
| 400 | Receipt list summary could not be fetched. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/basic/receipt-summary/details

#### POST
##### Summary

Receipt list details

##### Description

Receipt list details

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [ReceiptListSummaryRequest](#receiptlistsummaryrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Receipt list details fetched successfully. | [ [ReceiptListDetailsResponse](#receiptlistdetailsresponse) ] |
| 201 | Created |  |
| 400 | Receipt list details could not be fetched. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/basic/receivables

#### POST
##### Summary

Receivables Report.

##### Description

API to fetch data for Receivables Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [AdditionalReportsRequest](#additionalreportsrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Receivables Report data has been fetched. | [ReportViewResponse](#reportviewresponse) |
| 201 | Created |  |
| 400 | Failed to fetch Receivables Report data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/basic/sales-register-detailed

#### GET
##### Summary

Sales Register Detailed Report

##### Description

API to get Sales Register Detailed Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query | endDate | Yes | dateTime |
| startDate | query | startDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales Register Detailed Report fetched successfully. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/basic/sales-register-summary

#### POST
##### Summary

Sales Register Report

##### Description

API to get Sales Register Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| reportsRequest | body | reportsRequest | Yes | [SalesRegisterSummaryRequest](#salesregistersummaryrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales Register Report fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/basic/soa-details

#### POST
##### Summary

Statement of Account Report.

##### Description

API to fetch data for Statement of Account Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [AdditionalReportsRequest](#additionalreportsrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Statement of Account Report data has been fetched. | [ReportViewResponse](#reportviewresponse) |
| 201 | Created |  |
| 400 | Failed to fetch Statement of Account Report data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/basic/soa-vendor-details

#### POST
##### Summary

Statement of Account Vendor Report.

##### Description

API to fetch data for Statement of Account Vendor Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [AdditionalReportsRequest](#additionalreportsrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Statement of Account Vendor Report data has been fetched. | [ReportViewResponse](#reportviewresponse) |
| 201 | Created |  |
| 400 | Failed to fetch Statement of Account Vendor Report data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/basic/stock-movement-summary-report

#### POST
##### Summary

Stock Movement Summary Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [AdditionalReportsRequest](#additionalreportsrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock Movement Summary Report fetched successfully. | [ReportViewResponse](#reportviewresponse) |
| 201 | Created |  |
| 400 | Failed to get Stock Movement Summary Report. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/be/vatreturn

#### POST
##### Summary

Create VAT Return Log

##### Description

API to create VAT Return Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activityReq | body | activityReq | Yes | [VATReturnBelgiumActivityStatementReq](#vatreturnbelgiumactivitystatementreq) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [VATReturnBelgiumActivityStatementResp](#vatreturnbelgiumactivitystatementresp) |
| 201 | BAS Activity Statement Log created successfully. | [VATReturnBelgiumActivityStatementResp](#vatreturnbelgiumactivitystatementresp) |
| 400 | BAS Activity Statement Log could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/be/vatreturn/{id}/{status}

#### PUT
##### Summary

Update filed status gst return Log

##### Description

API to Update filed status gst return Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| status | path | status | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 204 | BAS Activity Statement Log deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | BAS Activity Statement Log not found to delete. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/be/vatreturndata

#### POST
##### Summary

Get VAT Return Data for Belgium

##### Description

API to Get VAT Return Data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| vatReturnBEReportReq | body | vatReturnBEReportReq | Yes | [VATReturnBelgiumNewReportReq](#vatreturnbelgiumnewreportreq) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [VATReturnBelgiumActivityStatementResp](#vatreturnbelgiumactivitystatementresp) |
| 201 | BAS Activity Statement Log created successfully. | [VATReturnBelgiumActivityStatementResp](#vatreturnbelgiumactivitystatementresp) |
| 400 | BAS Activity Statement Log could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/be/vatreturnlog/{id}

#### PUT
##### Summary

Update VAT Return Log

##### Description

API to update VAT Return Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activityReq | body | activityReq | Yes | [VATReturnBelgiumActivityStatementReq](#vatreturnbelgiumactivitystatementreq) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | VAT Return Statement Log updated successfully. | [VATReturnBelgiumActivityStatementResp](#vatreturnbelgiumactivitystatementresp) |
| 201 | Created |  |
| 400 | VAT Return Statement Log could not be updated due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | VAT Return Statement Log not found to update. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete VAT Return Log

##### Description

API to delete VAT Return Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | VAT return Log deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | VAT return Log not found to delete. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/be/vatreturnreport

#### GET
##### Summary

Search VAT Return Log

##### Description

API to search VAT Return Logs

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | VAT return Log report has been fetched successfully. | [VATReturnBelgiumActivityStatementResp](#vatreturnbelgiumactivitystatementresp) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/be/vatreturnsettings

#### GET
##### Summary

Get Settings for VAT Return Report

##### Description

API to get settings for VAT Return Report

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | BAS Activity Settings has been fetched successfully. | [VATReturnBelgiumSettingsResp](#vatreturnbelgiumsettingsresp) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PUT
##### Summary

Update VAT Return Log

##### Description

API to update VAT Return Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| settings | body | settings | Yes | [VATReturnBelgiumSettingsReq](#vatreturnbelgiumsettingsreq) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | VAT Return Statement Log updated successfully. | [VATReturnBelgiumSettingsResp](#vatreturnbelgiumsettingsresp) |
| 201 | Created |  |
| 400 | VAT Return Statement Log could not be updated due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | VAT Return Statement Log not found to update. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/be/vatreturntransaction/export/xls

#### GET
##### Summary

VAT Return Summary export.

##### Description

API to export VAT Return Summary Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| reportId | query | reportId | No | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | VAT Return Summary Report exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/be/vatreturntransactiondetails/export/xls

#### GET
##### Summary

VAT Return Details export.

##### Description

API to fetch VAT Return Details export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| reportId | query | reportId | No | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | VAT Return Details Report exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/be/vatreturntransactiondetails/unsavedreport/{tempVATReturnLogReportId}

#### GET
##### Summary

Get VAT Return Transaction Details Data For Unsaved Report

##### Description

API to Get VAT Return Transaction Details Data For Unsaved Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tempVATReturnLogReportId | path | tempVATReturnLogReportId | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | VAT Return transaction details data fetched.. | [ [BASTransactionDetailsReportDto](#bastransactiondetailsreportdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/be/vatreturntransactiondetails/{vatReturnLogReportId}

#### GET
##### Summary

Get VAT Return Transaction Details Data

##### Description

API to Get VAT Return Transaction Details Data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| vatReturnLogReportId | path | vatReturnLogReportId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | VAT Return transaction details data fetched.. | [ [BASTransactionDetailsReportDto](#bastransactiondetailsreportdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ca/logs

#### GET
##### Summary

Get tax report log summary

##### Description

Api to get tax report log summary

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Canada tax report logs have been fetched successfully | [CanadaTaxReportLogDto](#canadataxreportlogdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Canada tax report logs not found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Create tax report logs

##### Description

Create Canada sales tax report logs

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [CanadaTaxReportLogRequestDto](#canadataxreportlogrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [CanadaTaxReportLogDto](#canadataxreportlogdto) |
| 201 | Canada sales tax report logs created successfully | [CanadaTaxReportLogDto](#canadataxreportlogdto) |
| 400 | Canada sales tax report logs could not be created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PUT
##### Summary

Update report log according to from and to date

##### Description

Api to update report log according to from and to date

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fromDate | query | fromDate | No | dateTime |
| id | query | id | Yes | long |
| toDate | query | toDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [CanadaTaxReportLogDto](#canadataxreportlogdto) |
| 201 | report log is updated successfully | [CanadaTaxReportLogDto](#canadataxreportlogdto) |
| 400 | report log could not be updated |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ca/logs/name/{id}

#### PATCH
##### Summary

Update name of the report

##### Description

Api to Update name of the report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| name | body | name | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Name for report updated successfully. | [CanadaTaxReportLogDto](#canadataxreportlogdto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to update Name for report |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ca/logs/status/{id}

#### PATCH
##### Summary

Update tax report log status

##### Description

Api to update tax report log status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| status | body | status | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax report log status has been updated successfully | [CanadaTaxReportSettingDto](#canadataxreportsettingdto) |
| 204 | No Content |  |
| 400 | Failed to update tax report log status |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ca/logs/tax

#### PATCH
##### Summary

Update tax amount

##### Description

Api to update tax amount

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [UpdateTaxRequestDto](#updatetaxrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [CanadaTaxReportLogDto](#canadataxreportlogdto) |
| 201 | Canada tax report amount has been updated successfully | [CanadaTaxReportLogDto](#canadataxreportlogdto) |
| 204 | No Content |  |
| 400 | Failed to update Canada tax report amount |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ca/logs/{id}

#### DELETE
##### Summary

Delete tax report log

##### Description

Api to delete tax report log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Tax report log has been deleted successfully |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Failed to delete tax report log |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ca/sales-tax

#### GET
##### Summary

Get sales tax report for Canada

##### Description

API to get sales tax report for Canada.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fromDate | query | fromDate | Yes | dateTime |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales tax report for Canada fetched successfully. | [TaxReportDto](#taxreportdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ca/search

#### GET
##### Summary

Search Reports Log

##### Description

API to Search Reports Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Reports Log report has been fetched successfully. | [CanadaTaxReportLogDto](#canadataxreportlogdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ca/settings

#### GET
##### Summary

Get tax report settings

##### Description

Api to get tax report settings

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Canada tax report type settings have been fetched successfully | [CanadaTaxReportSettingDto](#canadataxreportsettingdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Canada tax report type settings not found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PUT
##### Summary

Tax report settings

##### Description

Create Canada sales tax report settings

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [ [CanadaTaxReportSettingDto](#canadataxreportsettingdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [CanadaTaxReportSettingDto](#canadataxreportsettingdto) |
| 201 | Canada sales tax report settings created successfully | [CanadaTaxReportSettingDto](#canadataxreportsettingdto) |
| 400 | Canada sales tax report settings could not be created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ca/{id}/export

#### GET
##### Summary

Export Canada Tax Return report

##### Description

API to export Canada Tax Return report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Canada Tax Return report exported successfully. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/closingsettings

#### GET
##### Summary

Get Settings for Financial Closing

##### Description

API to get settings for Financial Closing

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Closing Settings has been fetched successfully. | [ClosingSettingsResp](#closingsettingsresp) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/additionalcharges/details

#### GET
##### Summary

additionalCHargesDetailsReport

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fromDate | query | fromDate | No | dateTime |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| toDate | query | toDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Page«AdditionalChargesReport»](#page«additionalchargesreport») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/batch-status-report

#### POST
##### Summary

Batch status report

##### Description

API to get batch status report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [BatchStatusReportRequest](#batchstatusreportrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Batch status report fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/buy_sell_dashboard

#### GET
##### Summary

Buy and Sell Dashboard Details

##### Description

Buy and Sell Dashboard API

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| duration | query | duration | Yes | string |
| type | query | type | Yes | string |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Buy and Sell Dashboard details fetched successfully. | [BuySellDashboardDto](#buyselldashboarddto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/cashflow/export

#### GET
##### Summary

Export Cashflow Report

##### Description

API to Cashflow Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| format | query | format | Yes | string |
| fromDate | query | fromDate | Yes | dateTime |
| method | query | method | Yes | string |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Cashflow Report exported successfully. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Failed to export Cashflow Report |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/cashflow/export-v2

#### POST
##### Summary

Export Cashflow Report

##### Description

API to Cashflow Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| cashFlowRequest | body | cashFlowRequest | Yes | [CashFlowRequest](#cashflowrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Cashflow Report exported successfully. | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Failed to export Cashflow Report |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/contact-opening-details

#### GET
##### Summary

Contact Opening Details

##### Description

Contact Opening Details API

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCode | query | contactCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact opening details fetched successfully. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/contact-opening-summary

#### GET
##### Summary

Contact Opening Summary

##### Description

Contact Opening Summary API

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| search | query | search | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact opening summary fetched successfully. | [Page](#page) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/deposit/export

#### GET
##### Summary

Deposit Report export.

##### Description

API to export Deposit Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| format | query | format | Yes | string |
| search | query | search | No | string |
| type | query | type | Yes | string |
| var-end_date | query | var-end_date | Yes | dateTime |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Deposit Report data has been exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/expense/export

#### GET
##### Summary

Expense Report export.

##### Description

API to export Expense Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| format | query | format | Yes | string |
| search | query | search | No | string |
| type | query | type | Yes | string |
| var-end_date | query | var-end_date | Yes | dateTime |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Expense Report data has been exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/export-balance-sheet

#### POST
##### Summary

Export Balance Sheet Report.

##### Description

API to export Balance Sheet Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| BSCustomViewRequest | body | BSCustomViewRequest | Yes | [CustomViewRequest](#customviewrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Balance Sheet exported successfully. | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/export-batch-status-report

#### POST
##### Summary

Export Batch Status Report

##### Description

API to export Batch Status Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [BatchStatusReportRequest](#batchstatusreportrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Batch Status Report exported successfully. | [Page](#page) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Failed to export Batch Status Report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/export-general-ledger

#### GET
##### Summary

Export General Ledger Report

##### Description

API to export General Ledger Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| accountCodes | query | accountCodes | No | [ string ] |
| accountGroupId | query | accountGroupId | No | long |
| basis | query | basis | No | string |
| customfield | query | customfield | No | string |
| format | query | format | Yes | string |
| fromDate | query | fromDate | Yes | dateTime |
| sort | query | sort | No | string |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | General LedgerReport exported successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Failed to export General Ledger Report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/export-grouping-balance-sheet

#### POST
##### Summary

Export Grouping Balance Sheet Report.

##### Description

API to export Grouping Balance Sheet Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| BSCustomViewRequest | body | BSCustomViewRequest | Yes | [CustomViewRequest](#customviewrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Balance Sheet exported successfully. | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/export-grouping-balance-sheet-v2

#### POST
##### Summary

Export Grouping Balance Sheet Report.

##### Description

API to export Grouping Balance Sheet Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| BSCustomViewRequest | body | BSCustomViewRequest | Yes | [CustomViewRequest](#customviewrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Balance Sheet exported successfully. | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/export-grouping-profit-and-loss

#### POST
##### Summary

Export Grouping Profit and Loss Report.

##### Description

API to export Grouping Profit and Loss Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| PLCustomViewRequest | body | PLCustomViewRequest | Yes | [CustomViewRequest](#customviewrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Profit and Loss exported successfully. | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/export-grouping-profit-and-loss-v2

#### POST
##### Summary

Export Grouping Profit and Loss Report.

##### Description

API to export Grouping Profit and Loss Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| PLCustomViewRequest | body | PLCustomViewRequest | Yes | [CustomViewRequest](#customviewrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Profit and Loss exported successfully. | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/export-landed-cost-report

#### GET
##### Summary

Export Landed Cost Report

##### Description

API to export Landed Cost Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| fromDate | query | fromDate | Yes | dateTime |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Landed Cost Report exported successfully. | [Page](#page) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Failed to export Landed Cost Report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/export-outstanding-purchase-grn

#### GET
##### Summary

Export Outstanding Purchase GRN Report

##### Description

API to export Outstanding Purchase GRN Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| format | query | format | Yes | string |
| fromDate | query | fromDate | Yes | dateTime |
| search | query | search | No | string |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Outstanding Purchase GRN Report exported successfully. | [Page](#page) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Failed to export Outstanding Purchase GRN Report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/export-outstanding-sales-do

#### GET
##### Summary

Export Outstanding Sales DO Report

##### Description

API to export Outstanding Sales DO Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| format | query | format | Yes | string |
| fromDate | query | fromDate | Yes | dateTime |
| search | query | search | No | string |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Outstanding Sales DO Report exported successfully. | [Page](#page) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Failed to export Outstanding Sales DO Report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Export Outstanding Sales DO Report

##### Description

API to export Outstanding Sales DO Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [ExportOutstandingSalesDORequest](#exportoutstandingsalesdorequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Outstanding Sales DO Report exported successfully. | [Page](#page) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Failed to export Outstanding Sales DO Report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/export-profit-and-loss

#### POST
##### Summary

Export Profit and Loss Report.

##### Description

API to export Profit and Loss Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| PLCustomViewRequest | body | PLCustomViewRequest | Yes | [CustomViewRequest](#customviewrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Profit and Loss exported successfully. | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/export-reserve-stock

#### GET
##### Summary

Export Reserve Stock Report

##### Description

API to export Reserve Stock Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| fromDate | query | fromDate | Yes | dateTime |
| search | query | search | No | string |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Outstanding Reserve Stock Report exported successfully. | [Page](#page) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Failed to export Reserve Stock Report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/fulfillmentReport

#### GET
##### Summary

Get fulfillment data

##### Description

Api to fetch fulfillment data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query | endDate | No | dateTime |
| format | query | format | No | string |
| limit | query | limit | Yes | integer |
| page | query | page | Yes | integer |
| search | query | search | No | string |
| startDate | query | startDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | object |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/get-budget-customfield-actual-balance

#### GET
##### Summary

Get Budget custom field actual balance

##### Description

API to Get Budget custom field actual balance.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| accountCode | query | accountCode | Yes | string |
| customfield | query | customfield | Yes | string |
| fromDate | query | fromDate | Yes | dateTime |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Budget custom field actual balance fetched successfully. | object |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/get-deskera-product-code-is-variant-false

#### GET
##### Summary

Get Deskeara Product codes.

##### Description

Get Deskeara Product codes for square.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| source | query | source | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched Deskeara Product codes. | [Page](#page) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/get-deskera-product-codes

#### GET
##### Summary

Get Deskeara Product codes.

##### Description

Get Deskeara Product codes for shopify.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| source | query | source | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched Deskeara Product codes. | [Page](#page) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/get-deskera-product-id

#### POST
##### Summary

Get Deskeara Product id.

##### Description

Get Deskeara Product id for shopify.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched Deskera Product id. | [Page](#page) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/get-document-customfield

#### GET
##### Summary

Get document custom field

##### Description

API to Get document custom field.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| jeId | query | jeId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Document Custom field fetched successfully. | object |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/journal-entry

#### GET
##### Summary

Get journal entry report.

##### Description

Get journal entry report for export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| format | query | format | Yes | string |
| jeSeq | query | jeSeq | No | string |
| recurringJE | query | recurringJE | No | boolean |
| var-end_date | query | var-end_date | Yes | dateTime |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Journal Entry report fetched successfully. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/landedcost/details

#### GET
##### Summary

landedCostDetailsReport

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fromDate | query | fromDate | No | dateTime |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| toDate | query | toDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Page«LandedCostReport»](#page«landedcostreport») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/note

#### GET
##### Summary

Get note report.

##### Description

Get note report for export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| type | query | type | Yes | string |
| var-end_date | query | var-end_date | Yes | dateTime |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Note report fetched successfully. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/outstanding-purchase-grn-detail

#### GET
##### Summary

Outstanding Purchase GRN Detail Report

##### Description

API to generate Outstanding Purchase GRN Detail Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | query | code | Yes | string |
| customfield | query | customfield | No | string |
| isBill | query | isBill | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Outstanding Purchase GRN Detail Report generated successfully. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Failed to generate Outstanding Purchase GRN Detail Report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/outstanding-purchase-grn-summary

#### GET
##### Summary

Outstanding Purchase GRN Summary Report

##### Description

API to generate Outstanding Purchase GRN Summary Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | Yes | dateTime |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| search | query | search | No | string |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Outstanding Purchase GRN Summary Report generated successfully. | [Page](#page) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Failed to generate Outstanding Purchase GRN Summary Report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/outstanding-sales-do-detail

#### GET
##### Summary

Outstanding Sales DO Detail Report

##### Description

API to generate Outstanding Sales DO Detail Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | query | code | Yes | string |
| customfield | query | customfield | No | string |
| isInvoice | query | isInvoice | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Outstanding Sales DO Detail Report generated successfully. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Failed to generate Outstanding Sales DO Detail Report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/outstanding-sales-do-summary

#### GET
##### Summary

Outstanding Sales DO Summary Report

##### Description

API to generate Outstanding Sales DO Summary Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | Yes | dateTime |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| search | query | search | No | string |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Outstanding Sales DO Summary Report generated successfully. | [Page](#page) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Failed to generate Outstanding Sales DO Summary Report. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/price-list/export

#### GET
##### Summary

Export Price List

##### Description

API to export price list

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| fromDate | query | fromDate | Yes | dateTime |
| search | query | search | No | string |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Price list exported successfully. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Failed to export price list |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/qb/journal-entry

#### GET
##### Summary

Get journal entry report for quickBooks

##### Description

Get journal entry report for quickBooks

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| format | query | format | Yes | string |
| jeSeq | query | jeSeq | No | string |
| recurringJE | query | recurringJE | No | boolean |
| var-end_date | query | var-end_date | Yes | dateTime |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Journal Entry report fetched successfully. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/record-count

#### GET
##### Summary

Module record counts data.

##### Description

API to fetch module record counts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| module | query | module | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Module record counts data has been prepared. | [ModuleRecordCount](#modulerecordcount) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/reserve-stock-report/details

#### GET
##### Summary

Reserved stock details report api

##### Description

API to get reserved stock details report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fromDate | query | fromDate | Yes | dateTime |
| productCode | query | productCode | Yes | string |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Reserved stock details report fetched successfully | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Failed to fetch reserved stock details report |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/reserve-stock-report/summary

#### GET
##### Summary

Reserved stock summary report api

##### Description

API to get reserved stock summary report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fromDate | query | fromDate | Yes | dateTime |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| search | query | search | No | string |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Reserved stock summary report fetched successfully | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Failed to fetch reserved stock summary report |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/sendemail

#### POST
##### Summary

Send Email with transaction attachment

##### Description

API to send email with attachment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| emailRequest | body | emailRequest | Yes | [SendGrafanaReportEmailRequest](#sendgrafanareportemailrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Email sending started successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Failed to send email. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/stock-avail-export

#### POST
##### Summary

Stock Availability By Warehouse Report Export.

##### Description

API to Export Stock Availability By Warehouse.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [StockAvailByWarehouseExportRequestDto](#stockavailbywarehouseexportrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock Availability By Warehouse Export has been prepared. | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/stock-availability-wh

#### POST
##### Summary

Stock Availability By Warehouse Report.

##### Description

API to Fetch Stock Availability By Warehouse.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [StockAvailByWarehouseExportRequestDto](#stockavailbywarehouseexportrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock Availability By Warehouse has been fetched. | [CustomPagingResponse](#custompagingresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/stock-availability-wh/detail

#### POST
##### Summary

Stock Availability By Warehouse Report.

##### Description

API to Fetch Stock Availability By Warehouse.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [StockAvailByWarehouseExportRequestDto](#stockavailbywarehouseexportrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Stock Availability By Warehouse has been fetched. | [CustomPagingResponse](#custompagingresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/common/unreserve-quantity

#### POST
##### Summary

Unreserve quantity api

##### Description

API to unreserve reserved quantity

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| requestDto | body | requestDto | Yes | [UnreserveQuantityRequestDto](#unreservequantityrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quantity unreserved successfully. | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Failed to unreserve quantity |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/custom-view

#### GET
##### Summary

Fetch report custom views

##### Description

Fetch report custom views

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| report | query | report | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report views fetched successfully. | [ [ReportCustomViewResponse](#reportcustomviewresponse) ] |
| 400 | Report views could not be fetched. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Save report custom view

##### Description

Save report custom view

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [ReportCustomViewRequest](#reportcustomviewrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report custom view saved successfully. | [ReportCustomViewResponse](#reportcustomviewresponse) |
| 201 | Created |  |
| 400 | Report custom view could not be saved. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/custom-view/{id}

#### DELETE
##### Summary

Delete report custom view

##### Description

Delete report custom view

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Report custom view deleted successfully. |
| 204 | No Content |
| 400 | Report custom view could not be deleted. |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/data-export

#### GET
##### Summary

Export Documents

##### Description

API to Export documents

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| module | query | module | Yes | string |
| query | query | query | No | string |
| search | query | search | No | string |

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

### /v1/reports/document/count

#### GET
##### Summary

Get Document count for tenant

##### Description

Get Document count for tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Document count fetched successfully. | [ReportViewResponse](#reportviewresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/document/productsUnitPrices

#### POST
##### Summary

Get last three unit prices of products

##### Description

Get latest unit prices of products for a particular document type

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [ProductUnitPriceFetchRequest](#productunitpricefetchrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product prices fetched successfully | [ReportViewResponse](#reportviewresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/document/purchase/details

#### GET
##### Summary

Purchase documents details.

##### Description

API for Purchase documents details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| documentStage | query | documentStage | No | string |
| fromDate | query | fromDate | No | dateTime |
| limit | query | limit | Yes | integer |
| page | query | page | Yes | integer |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| toDate | query | toDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase documents details has been fetched successfully. | [Page](#page) |
| 400 | Failed to fetch Purchase documents details. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/document/purchase/summary

#### GET
##### Summary

Purchases documents summary.

##### Description

API for Purchases documents summary.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| eType | query | eType | No | string |
| fromDate | query | fromDate | No | dateTime |
| query | query | query | No | string |
| search | query | search | No | string |
| toDate | query | toDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchases documents summary has been fetched successfully. | [DocumentSummaryResponse](#documentsummaryresponse) |
| 400 | Failed to fetch Purchases documents summary. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/document/sales/details

#### GET
##### Summary

Sales documents details.

##### Description

API for sales documents details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| documentStage | query | documentStage | No | string |
| filter | query | filter | No | string |
| fromDate | query | fromDate | No | dateTime |
| limit | query | limit | Yes | integer |
| page | query | page | Yes | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| toDate | query | toDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales documents details has been fetched successfully. | [Page](#page) |
| 400 | Failed to fetch sales documents details. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/document/sales/invoice-status-details

#### POST
##### Summary

Get Sales Invoice status details.

##### Description

API for Sales Invoice status details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales Invoice status details has been fetched successfully. | [ [InvoiceStatus](#invoicestatus) ] |
| 201 | Created |  |
| 400 | Failed to fetch Sales Invoice status details. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/document/sales/summary

#### GET
##### Summary

Sales documents summary.

##### Description

API for sales documents summary.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| eType | query | eType | No | string |
| fromDate | query | fromDate | No | dateTime |
| query | query | query | No | string |
| search | query | search | No | string |
| toDate | query | toDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales documents summary has been fetched successfully. | [DocumentSummaryResponse](#documentsummaryresponse) |
| 400 | Failed to fetch sales documents summary. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/account-auto-map

#### POST
##### Summary

Account auto map api.

##### Description

API to get auto map accounts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| report | query | report | Yes | string |
| tenantIds | body | tenantIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Auto map accounts fetched successfully. | [ConsolidationAccountAutoMapResponse](#consolidationaccountautomapresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/accounts-by-nature

#### POST
##### Summary

Post Get account info by nature

##### Description

API to Get account info by nature

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| report | query | report | Yes | string |
| tenantIds | body | tenantIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/balance-sheet

#### POST
##### Summary

Balance Sheet Report.

##### Description

API to fetch data for Balance Sheet Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| BSCustomViewRequest | body | BSCustomViewRequest | Yes | [CustomViewRequest](#customviewrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Balance Sheet data has been fetched. | [AccountPNLInfo](#accountpnlinfo) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/balance-sheet-v2

#### POST
##### Summary

Balance Sheet Report.

##### Description

API to fetch data for Balance Sheet Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| BSCustomViewRequest | body | BSCustomViewRequest | Yes | [CustomViewRequest](#customviewrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Balance Sheet data has been fetched. | [AccountPNLInfo](#accountpnlinfo) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/balance-sheet-v2-both-currency

#### POST
##### Summary

Balance Sheet Report.

##### Description

API to fetch data for Balance Sheet Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| BSCustomViewRequest | body | BSCustomViewRequest | Yes | [CustomViewRequest](#customviewrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Balance Sheet data has been fetched. | [AccountPNLInfo](#accountpnlinfo) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/cash-flow-v2

#### POST
##### Summary

Get Cash Flow Report

##### Description

API to get Cash Flow Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| cashFlowRequest | body | cashFlowRequest | Yes | [CashFlowRequest](#cashflowrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [CashFlowReportDto](#cashflowreportdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/consolidate-mapping

#### GET
##### Summary

Get Consolidate tenants account mapping

##### Description

API to get Consolidate tenants account mapping

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| multicompanyReport | query | multicompanyReport | No | boolean |
| report | query | report | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ConsolidateAccountTenantsResponseDto](#consolidateaccounttenantsresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Post Consolidate tenants account mapping

##### Description

API to save Consolidate tenants account mapping

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| consolidateAccountTenantsRequestDto | body | consolidateAccountTenantsRequestDto | Yes | [ConsolidateAccountTenantsRequestDto](#consolidateaccounttenantsrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ConsolidateAccountTenantsResponseDto](#consolidateaccounttenantsresponsedto) |
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

Put Consolidate tenants account mapping

##### Description

API to update Consolidate tenants account mapping

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| consolidateAccountTenantsRequestDto | body | consolidateAccountTenantsRequestDto | Yes | [ConsolidateAccountTenantsRequestDto](#consolidateaccounttenantsrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ConsolidateAccountTenantsResponseDto](#consolidateaccounttenantsresponsedto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/consolidate-mapping/bulk

#### DELETE
##### Summary

bulk delete Consolidate tenants account mapping

##### Description

API to bulk delete Consolidate tenants account mapping

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/consolidate-mapping/search

#### GET
##### Summary

Get Consolidate tenants account mapping

##### Description

API to get Consolidate tenants account mapping

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| multicompanyReport | query | multicompanyReport | No | boolean |
| page | query | page | No | integer |
| report | query | report | No | string |
| search | query | search | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [CustomPagingResponse](#custompagingresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/consolidate-mapping/{id}

#### DELETE
##### Summary

delete Consolidate tenants account mapping

##### Description

API to delete Consolidate tenants account mapping

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ConsolidateAccountTenantsResponseDto](#consolidateaccounttenantsresponsedto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/consolidation/balance-sheet

#### POST
##### Summary

Balance Sheet Report.

##### Description

API to fetch data for Balance Sheet Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [ConsolidateAccountTenantsRequestDto](#consolidateaccounttenantsrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Balance Sheet data has been fetched. | [BalanceSheetInfoConsolidationView](#balancesheetinfoconsolidationview) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/consolidation/pnl

#### POST
##### Summary

Profit and Loss Report.

##### Description

API to fetch data for Profit and Loss Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [ConsolidateAccountTenantsRequestDto](#consolidateaccounttenantsrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Profit and Loss data has been fetched. | [PNLCustomViewConsolidation](#pnlcustomviewconsolidation) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/consolidation/soa-customer

#### POST
##### Summary

Statement Of Account Report.

##### Description

API to fetch data for Statement Of Account Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [StatementOfAccountRequest](#statementofaccountrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Statement Of Account data has been fetched. | [SOAReportConsolidationResponse](#soareportconsolidationresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/consolidation/soa-vendor

#### POST
##### Summary

Statement Of Account Report.

##### Description

API to fetch data for Statement Of Account Report for Vendor.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [StatementOfAccountRequest](#statementofaccountrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Vendor Statement Of Account data has been fetched. | [SOAReportConsolidationResponse](#soareportconsolidationresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/contact-auto-map

#### POST
##### Summary

Contact auto map api.

##### Description

API to get auto map contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| report | query | report | Yes | string |
| tenantIds | body | tenantIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Auto map contacts fetched successfully. | [ConsolidationAccountAutoMapResponse](#consolidationaccountautomapresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/contact/owe-amount

#### POST
##### Summary

Get Contact's owe amounts

##### Description

API to get contact owe amounts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's owe amount has been fetched successfully | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/contactlist

#### GET
##### Summary

Get All Contacts of Tenant.

##### Description

API to get all Contacts of Tenant.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | All Contacts are fetched. | [StatementOfAccountResponse](#statementofaccountresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/dashboard/pnl

#### GET
##### Summary

Profit and Loss data for Dashboard

##### Description

API to fetch data for Profit and Loss data for Dashboard

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fromDate | query | fromDate | Yes | dateTime |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Profit and Loss data for Dashboard has been fetched | [ [DashboardPNLInfo](#dashboardpnlinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/get-account-closing-balance

#### POST
##### Summary

getAccountClosingBalance

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| accountClosingRequest | body | accountClosingRequest | Yes | [AccountClosingRequest](#accountclosingrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Accounts Closing fetched successfully. | [ [AccountClosingResponse](#accountclosingresponse) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/get-account-for-revaluation

#### GET
##### Summary

getAccountForRevaluation

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| accountCodes | query | accountCodes | No | [ string ] |
| accountGroupId | query | accountGroupId | No | [ long ] |
| accountNatureId | query | accountNatureId | No | [ integer ] |
| customfield | query | customfield | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Revaluation accounts fetched successfully. | [ [AccountDetailsResponse](#accountdetailsresponse) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/get-gross-profit-for-revenue-report

#### POST
##### Summary

getRevenueReportData

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| revenueReportRequest | body | revenueReportRequest | Yes | [RevenueReportRequest](#revenuereportrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [Map«string,object»](#map«string,object») ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/get-inter-company-journal-entries

#### POST
##### Summary

getInterCompanyJournalSummary

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| interCompanyJEListRequest | body | interCompanyJEListRequest | Yes | [InterCompanyJEListRequest](#intercompanyjelistrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Inter Company Journal Entries fetched successfully. | [ [JournalSummaryData](#journalsummarydata) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/get-journal-entry-lines

#### POST
##### Summary

getJournalEntryDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| interCompanyJEListRequest | body | interCompanyJEListRequest | Yes | [InterCompanyJEListRequest](#intercompanyjelistrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 |  Journal Entry Lines fetched successfully. | [ [JournalLineDetail](#journallinedetail) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/get-revaluation-accounts

#### GET
##### Summary

Get General Ledger

##### Description

API to get general ledger report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| accountCodes | query | accountCodes | No | [ string ] |
| accountGroupId | query | accountGroupId | No | long |
| basis | query | basis | No | string |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | Yes | dateTime |
| perspective | query | perspective | No | string |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Revaluation accounts fetched successfully. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/gl

#### GET
##### Summary

Get General Ledger

##### Description

API to get general ledger report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| accountCodes | query | accountCodes | No | [ string ] |
| accountGroupId | query | accountGroupId | No | long |
| amountInPrimaryCurrency | query | amountInPrimaryCurrency | No | boolean |
| baseCurrency | query | baseCurrency | No | string |
| basis | query | basis | No | string |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | Yes | dateTime |
| primaryCurrency | query | primaryCurrency | No | string |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | General Ledger has been fetched successfully | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Get General Ledger

##### Description

API to get general ledger report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| accountBalanceDto | body | accountBalanceDto | Yes | [GLAccountBalanceDto](#glaccountbalancedto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | General Ledger has been fetched successfully | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/glaccountbalance

#### GET
##### Summary

Get General Ledger

##### Description

API to get general ledger report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| accountCodes | query | accountCodes | No | [ string ] |
| accountGroupId | query | accountGroupId | No | long |
| basis | query | basis | No | string |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | Yes | dateTime |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | General Ledger has been fetched successfully | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Get General Ledger

##### Description

API to get general ledger report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| glAccountBalanceDto | body | glAccountBalanceDto | Yes | [GLAccountBalanceDto](#glaccountbalancedto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | General Ledger has been fetched successfully | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/grouping-balance-sheet

#### POST
##### Summary

Balance Sheet Report.

##### Description

API to fetch data for Balance Sheet Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| BSCustomViewRequest | body | BSCustomViewRequest | Yes | [CustomViewRequest](#customviewrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Balance Sheet data has been fetched. | [AccountPNLInfo](#accountpnlinfo) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/grouping-trial-balance

#### GET
##### Summary

Get Grouping Trial Balance

##### Description

API to get grouping trial balance of specific account

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| amountInPrimaryCurrency | query | amountInPrimaryCurrency | No | boolean |
| baseCurrency | query | baseCurrency | No | string |
| basis | query | basis | No | string |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | Yes | dateTime |
| primaryCurrency | query | primaryCurrency | No | string |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Grouping Trial balance has been fetched successfully | [TrialBalanceDetailsDto](#trialbalancedetailsdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/grouping-trial-balance/export/excel

#### POST
##### Summary

Export Trial Balance Report

##### Description

API to Trial Balance Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| trialBalanceRequestDto | body | trialBalanceRequestDto | Yes | [TrialBalanceRequestDto](#trialbalancerequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Trial Balance Report exported successfully. | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/journal_entry

#### GET
##### Summary

Get General Ledger Detail

##### Description

API to get general ledger detail

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| account | query | account | Yes | string |
| amountInPrimaryCurrency | query | amountInPrimaryCurrency | No | boolean |
| baseCurrency | query | baseCurrency | No | string |
| contactCodes | query | contactCodes | No | [ string ] |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | Yes | dateTime |
| perspective | query | perspective | No | string |
| primaryCurrency | query | primaryCurrency | No | string |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | General Ledger Detail has been fetched successfully | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/journal_entry/account/{code}

#### GET
##### Summary

Get General Ledger Detail

##### Description

API to get general ledger detail

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | Yes | dateTime |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | General Ledger Detail has been fetched successfully | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/pnl

#### POST
##### Summary

Profit and Loss Report.

##### Description

API to fetch data for Profit and Loss Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pnlCustomViewRequest | body | pnlCustomViewRequest | Yes | [CustomViewRequest](#customviewrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Profit and Loss data has been fetched. | [AccountPNLInfo](#accountpnlinfo) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/pnl-v2

#### POST
##### Summary

Profit and Loss Report.

##### Description

API to fetch data for Profit and Loss Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pnlCustomViewRequest | body | pnlCustomViewRequest | Yes | [CustomViewRequest](#customviewrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Profit and Loss data has been fetched. | [AccountPNLInfo](#accountpnlinfo) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/pnl-v2-both-currency

#### POST
##### Summary

Profit and Loss Report.

##### Description

API to fetch data for Profit and Loss Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pnlCustomViewRequest | body | pnlCustomViewRequest | Yes | [CustomViewRequest](#customviewrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Profit and Loss data has been fetched. | [AccountPNLInfo](#accountpnlinfo) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/pnl_grouping

#### POST
##### Summary

Profit and Loss Report.

##### Description

API to fetch data for Profit and Loss Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pnlCustomViewRequest | body | pnlCustomViewRequest | Yes | [CustomViewRequest](#customviewrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Profit and Loss data has been fetched. | [AccountPNLInfo](#accountpnlinfo) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/skip-je-from-elimination

#### POST
##### Summary

skipJEsFromElimination

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| jeId | body | jeId | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 |  Journal Entries Eliminated successfully. | [ResponseEntity](#responseentity) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/soa-customer

#### POST
##### Summary

Statement Of Account Report.

##### Description

API to fetch data for Statement Of Account Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [StatementOfAccountRequest](#statementofaccountrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Statement Of Account data has been fetched. | [StatementOfAccountResponse](#statementofaccountresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/soa-customer-export

#### POST
##### Summary

Export Statement Of Account Report.

##### Description

API to Export data for Statement Of Account Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [StatementOfAccountRequest](#statementofaccountrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Statement Of Account data has been Exported. | [StatementOfAccountResponse](#statementofaccountresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/soa-customer-group-by-currency

#### POST
##### Summary

Statement Of Account Report Group By Currency.

##### Description

API to fetch data for Statement Of Account Report Group By Currency.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [StatementOfAccountRequest](#statementofaccountrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Statement Of Account data has been fetched Group By Currency. | [StatementOfAccountResponse](#statementofaccountresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/soa-email

#### POST
##### Summary

Email Statement Of Account to contacts.

##### Description

API to Email Statement Of Account to contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [StatementOfAccountEmailRequest](#statementofaccountemailrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Statement Of Account data has been emailed. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/soa-vendor

#### POST
##### Summary

Statement Of Account Report.

##### Description

API to fetch data for Statement Of Account Report for Vendor.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [StatementOfAccountRequest](#statementofaccountrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Vendor Statement Of Account data has been fetched. | [StatementOfAccountResponse](#statementofaccountresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/soa-vendor-export

#### POST
##### Summary

Export Vendor Statement Of Account Report.

##### Description

API to Export data for Vendor Statement Of Account Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [StatementOfAccountRequest](#statementofaccountrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Vendor Statement Of Account data has been Exported. | [StatementOfAccountResponse](#statementofaccountresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/soa-vendor-group-by-currency

#### POST
##### Summary

Vendor Statement Of Account Report Group By Currency.

##### Description

API to fetch data for Vendor Statement Of Account Report Group By Currency.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [StatementOfAccountRequest](#statementofaccountrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Vendor Statement Of Account data has been fetched Group By Currency. | [StatementOfAccountResponse](#statementofaccountresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/trial-balance

#### GET
##### Summary

Get Trial Balance

##### Description

API to get trial balance of specific account

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| amountInPrimaryCurrency | query | amountInPrimaryCurrency | No | boolean |
| baseCurrency | query | baseCurrency | No | string |
| basis | query | basis | No | string |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | Yes | dateTime |
| primaryCurrency | query | primaryCurrency | No | string |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Trial balance has been fetched successfully | [TrialBalanceDetailsDto](#trialbalancedetailsdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/financial/trial-balance/export/excel

#### POST
##### Summary

Export Trial Balance Report

##### Description

API to Trial Balance Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| trialBalanceRequestDto | body | trialBalanceRequestDto | Yes | [TrialBalanceRequestDto](#trialbalancerequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Trial Balance Report exported successfully. | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/fyclosinglog

#### GET
##### Summary

Get FY CLosing Log

##### Description

API to Get FY closing Report Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | FY Closing Log created successfully. | [FYClosingReportLogResp](#fyclosingreportlogresp) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Create FY CLosing Log

##### Description

API to create FY closing Report Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activityReq | body | activityReq | Yes | [FYClosingReportLogReq](#fyclosingreportlogreq) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [FYClosingReportLogResp](#fyclosingreportlogresp) |
| 201 | FY Closing Log created successfully. | [FYClosingReportLogResp](#fyclosingreportlogresp) |
| 400 | FY Closing Log could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/fyclosinglog/{id}

#### GET
##### Summary

Get FY Closing Data

##### Description

API to Get FY Closing Data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [FYClosingReportLogResp](#fyclosingreportlogresp) |
| 201 | FY Closing Log fetched successfully. | [FYClosingReportLogResp](#fyclosingreportlogresp) |
| 400 | FY Closing Log not found |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PUT
##### Summary

Update FY Closing Log

##### Description

API to update FY Closing Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activityReq | body | activityReq | Yes | [FYClosingReportLogReq](#fyclosingreportlogreq) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Closing details updated successfully. | [FYClosingReportLogResp](#fyclosingreportlogresp) |
| 201 | Created |  |
| 400 | Closing details could not be updated due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Closing details not found to update. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete FY Closing Log

##### Description

API to delete FY Closing Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | FY Closing log deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | FY Closing log not found to delete. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/hmrc/liabilities

#### POST
##### Summary

Retrieve VAT liabilities

##### Description

Value to Retrieve VAT liabilities

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| liabilitiesRequest | body | liabilitiesRequest | Yes | [LiabilitiesRequest](#liabilitiesrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | VAT liabilities are successfully retrieved | [LiabilitiesResponse](#liabilitiesresponse) |
| 201 | Created |  |
| 401 | VAT liabilities retrieval is unsuccessful |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/hmrc/obligations

#### POST
##### Summary

Retrieve VAT obligations

##### Description

Value to Retrieve VAT obligations

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| obligationsRequest | body | obligationsRequest | Yes | [ObligationsRequest](#obligationsrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | VAT obligations are successfully retrieved | [ObligationsResponse](#obligationsresponse) |
| 201 | Created |  |
| 401 | VAT obligations retrieval is unsuccessful |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/hmrc/payments

#### POST
##### Summary

Retrieve VAT payments

##### Description

Value to Retrieve VAT payments

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| paymentsRequest | body | paymentsRequest | Yes | [PaymentsRequest](#paymentsrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | VAT payments are successfully retrieved | [PaymentsResponse](#paymentsresponse) |
| 201 | Created |  |
| 401 | VAT payments retrieval is unsuccessful |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/hmrc/returns

#### POST
##### Summary

Retrieve VAT returns

##### Description

Value to Retrieve VAT returns

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| returnsRequestDto | body | returnsRequestDto | Yes | [ReturnsRequestDto](#returnsrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | VAT returns are successfully retrieved | [ReturnsResponse](#returnsresponse) |
| 201 | Created |  |
| 401 | VAT returns retrieval is unsuccessful |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/hmrc/submitReturns

#### POST
##### Summary

Submit VAT returns

##### Description

API to submit VAT return

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fraudPreventionRequest | body | fraudPreventionRequest | No | [FraudPreventionRequest](#fraudpreventionrequest) |
| id | query | id | Yes | long |
| vrnNumber | query | vrnNumber | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | VAT returns are successfully submitted | [ReturnsRequest](#returnsrequest) |
| 201 | Created |  |
| 401 | VAT returns submission is unsuccessful |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/hmrc/validateRequesterVrn

#### POST
##### Summary

Validate Requester Vrn

##### Description

API to Validate Requester Vrn

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fraudPreventionRequest | body | fraudPreventionRequest | No | [FraudPreventionRequest](#fraudpreventionrequest) |
| requesterNumber | query | requesterNumber | Yes | string |
| vrnNumber | query | vrnNumber | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Validating Vrn is Successful | [ValidateTargetVrnDto](#validatetargetvrndto) |
| 201 | Created |  |
| 401 | Failed to Validate Vrn |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/hmrc/validateTargetVrn

#### POST
##### Summary

Validate Target Vrn

##### Description

API to Validate Target Vrn

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fraudPreventionRequest | body | fraudPreventionRequest | No | [FraudPreventionRequest](#fraudpreventionrequest) |
| vrnNumber | query | vrnNumber | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Validating Vrn is Successful | [ValidateTargetVrnDto](#validatetargetvrndto) |
| 201 | Created |  |
| 401 | Failed to Validate Vrn |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/hmrsToken/application

#### POST
##### Summary

Token for application restricted endpoint

##### Description

API to get token for application restricted endpoint

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fraudPreventionRequest | body | fraudPreventionRequest | No | [FraudPreventionRequest](#fraudpreventionrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetching Token Response is Successful | [HmrcTokenDto](#hmrctokendto) |
| 201 | Created |  |
| 401 | Failed to fetch Token Response |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/hmrsToken/clear

#### POST
##### Summary

Clear Token

##### Description

API to clear Refresh Token

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Clearing Token is Successful |
| 201 | Created |
| 401 | Failed to clear Token |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/hmrsToken/refresh

#### POST
##### Summary

Token form Refresh Token

##### Description

API to get Token form Refresh Token

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fraudPreventionRequest | body | fraudPreventionRequest | No | [FraudPreventionRequest](#fraudpreventionrequest) |
| refreshToken | query | refreshToken | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetching Token Response is Successful | [HmrcTokenDto](#hmrctokendto) |
| 201 | Created |  |
| 401 | Failed to fetch Token Response |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/hmrsToken/user

#### POST
##### Summary

Token for user restricted endpoint

##### Description

API to get token for user restricted endpoint

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | query | code | Yes | string |
| fraudPreventionRequest | body | fraudPreventionRequest | No | [FraudPreventionRequest](#fraudpreventionrequest) |
| screen | query | screen | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetching Token Response is Successful | [HmrcTokenDto](#hmrctokendto) |
| 201 | Created |  |
| 401 | Failed to fetch Token Response |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/id/purchase-transaction-summary

#### GET
##### Summary

Purchase Transaction Summary Report data.

##### Description

API to fetch Purchase Transaction Summary Report data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Transaction Summary Report data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/id/purchase-transaction-summary/export

#### GET
##### Summary

Purchase Transaction Summary Report export.

##### Description

API to export Purchase Transaction Summary Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| var-end_date | query | var-end_date | Yes | dateTime |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Transaction Summary Report data has been exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/id/sales-transaction-summary

#### GET
##### Summary

Sales Transaction Summary Report data.

##### Description

API to fetch Sales Transaction Summary Report data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales Transaction Summary Report data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/id/sales-transaction-summary/export

#### GET
##### Summary

Sales Transaction Summary Report export.

##### Description

API to export Sales Transaction Summary Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| var-end_date | query | var-end_date | Yes | dateTime |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales Transaction Summary Report has been exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/id/vat-in-report

#### GET
##### Summary

VAT IN Report data.

##### Description

API to fetch VAT IN Report data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | VAT IN Report data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/id/vat-in-report/export

#### GET
##### Summary

VAT IN Report export.

##### Description

API to fetch VAT IN Report export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| var-end_date | query | var-end_date | Yes | dateTime |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | VAT IN Report export has been prepared. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/id/vat-out-report

#### GET
##### Summary

VAT OUT Report data.

##### Description

API to fetch VAT OUT Report data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | VAT OUT Report data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/id/vat-out-report/export

#### GET
##### Summary

VAT OUT Report export.

##### Description

API to fetch VAT OUT Report export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| var-end_date | query | var-end_date | Yes | dateTime |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | VAT OUT Report export has been prepared. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in-use/recurring/account

#### GET
##### Summary

Check if account is used in any recurring document.

##### Description

API to check if account is used in any recurring document.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| accountCode | query | accountCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Account checked successfully. | [InUseDto](#inusedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in-use/recurring/contact

#### GET
##### Summary

Check if account is used in any recurring document.

##### Description

API to check if account is used in any recurring document.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCode | query | contactCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Account checked successfully. | [InUseDto](#inusedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in-use/recurring/product

#### GET
##### Summary

Check if product is used in any recurring document.

##### Description

API to check if product is used in any recurring document.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| productCode | query | productCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product checked successfully. | [InUseDto](#inusedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/form-one/details/data

#### GET
##### Summary

GST form one detail data.

##### Description

API to fetch GST form one detail data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| limit | query |  | No | integer |
| page | query |  | No | integer |
| sheetGroupBy | query |  | Yes | string |
| sheetName | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST form one detail data. | [GSTR1DetailDto](#gstr1detaildto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/form-one/details/export

#### GET
##### Summary

GST form one detail export.

##### Description

API to fetch GST form one detail export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query | endDate | Yes | dateTime |
| format | query | format | Yes | string |
| sheetName | query | sheetName | Yes | string |
| startDate | query | startDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST form one detail export. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/form-one/export/data

#### GET
##### Summary

GST form one data export.

##### Description

API to fetch GST form one data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST form one data exported. | [ [GstrDataSummary](#gstrdatasummary) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/form-one/export/details

#### GET
##### Summary

GST form one details export.

##### Description

API to fetch GST form one details export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| limit | query |  | No | integer |
| page | query |  | No | integer |
| sheetGroupBy | query |  | Yes | string |
| sheetName | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST form one detail exported. | object |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/form-one/export/excel

#### GET
##### Summary

GST form one export.

##### Description

API to fetch GST form one export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST form one exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/form-three-detailed/export/excel

#### GET
##### Summary

GST form three export.

##### Description

API to fetch GST form three export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST form three exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/form-three/details/data

#### GET
##### Summary

GST form three detail data.

##### Description

API to fetch GST form three detail data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| limit | query |  | No | integer |
| page | query |  | No | integer |
| sheetGroupBy | query |  | No | string |
| sheetName | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST form three detail data. | [ [GSTR3BDetailDto](#gstr3bdetaildto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/form-three/details/export

#### GET
##### Summary

GST form three detail export.

##### Description

API to fetch GST form three detail export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| sheetName | query | sheetName | Yes | string |
| var-end_date | query | var-end_date | Yes | dateTime |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST form three detail export. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/form-three/export/data

#### GET
##### Summary

GST form three export.

##### Description

API to fetch GST form three export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST form three exported. | [ [GstrDataSummary](#gstrdatasummary) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/form-three/export/details

#### GET
##### Summary

GST form three details export.

##### Description

API to fetch GST form three details export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| limit | query |  | No | integer |
| page | query |  | No | integer |
| sheetGroupBy | query |  | No | string |
| sheetName | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST form one detail exported. | object |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/form-three/export/excel

#### GET
##### Summary

GST form three export.

##### Description

API to fetch GST form three export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST form three exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/form_one_e_filing/export/excel

#### GET
##### Summary

GSTR1 E Filing export.

##### Description

API to fetch GSTR1 E Filing export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GSTR1 E Filing exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/post-tds-je

#### POST
##### Summary

Post TDS Journal Entry

##### Description

API to post TDS Journal Entry

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tdsJournalEntryDtos | body | tdsJournalEntryDtos | Yes | [ [TDSJournalEntryDto](#tdsjournalentrydto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkApiResponse](#bulkapiresponse) |
| 201 | TDS journal entry created successfully. | [BulkApiResponse](#bulkapiresponse) |
| 400 | TDS journal entry could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/revert-tds-payment-status

#### PUT
##### Summary

Update TDS payment status for selected records

##### Description

API to TDS payment status for selected records

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tdsPaymentJECode | body | tdsPaymentJECode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 204 | TDS payment status updated successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | TDS payment status is not updated. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/tds-customer-report/export

#### GET
##### Summary

TDS customer report export

##### Description

API to export TDS customer report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| search | query | search | No | string |
| var-end_date | query | var-end_date | Yes | dateTime |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | TDS customer report exported | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/tds-deducted

#### GET
##### Summary

Get total tds deducted on receive payment

##### Description

Api to fetch tds deducted for a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| search | query | search | No | string |
| var-end_date | query | var-end_date | No | dateTime |
| var-start_date | query | var-start_date | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Total TDS deducted fetched successfully | [Page«CustomerTdsReportDto»](#page«customertdsreportdto») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to fetched total TDS deducted |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/tds-detail-report

#### GET
##### Summary

Search TDS detail report

##### Description

API to search TDS detail report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | TDS detail report has been fetched successfully. | [TDSNotDeductedReportDto](#tdsnotdeductedreportdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/tds-non-deducted-report/export

#### GET
##### Summary

TDS non-deducted details report export

##### Description

API to export TDS non-deducted details return report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| var-end_date | query | var-end_date | Yes | dateTime |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | TDS non-deducted details report exported | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/tds-not-deducted-report

#### GET
##### Summary

Search TDS Not Deducted report

##### Description

API to search TDS Not Deducted report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | TDS Not Deducted report has been fetched successfully. | [TDSNotDeductedReportDto](#tdsnotdeductedreportdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/tds-notification

#### GET
##### Summary

Process tds payment notification

##### Description

Api to process tds payment notification

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Notification sent successfully |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Email notification failed |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/tds-report/export

#### GET
##### Summary

TDS details report export

##### Description

API to export TDS details report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| var-end_date | query | var-end_date | Yes | dateTime |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | TDS details report exported | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/tds-summary-report

#### GET
##### Summary

TDS Summary Report.

##### Description

API to fetch TDS Summary Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | TDS Summary Report data. | [ [TDSSummaryDto](#tdssummarydto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/tds-summary-report/export

#### GET
##### Summary

TDS Summary Report Export.

##### Description

API to fetch TDS Summary Report Export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| var-end_date | query | var-end_date | Yes | dateTime |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | TDS Summary Report Export has been prepared. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/update-tds-payment-status

#### PUT
##### Summary

Update TDS payment status for selected records

##### Description

API to TDS payment status for selected records

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tdsPaymentDto | body | tdsPaymentDto | Yes | [TDSPaymentDto](#tdspaymentdto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 204 | TDS payment status updated successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | TDS payment status is not updated. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/in/validate-tds-payment-status

#### GET
##### Summary

Validate TDS payment status for selected records

##### Description

API to validate TDS payment status for selected records

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| ids | query | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | TDS payment status validated successfully. | [BulkApiResponse](#bulkapiresponse) |
| 400 | TDS payment status is not validated. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/india-gst/auth-token

#### POST
##### Summary

Get auth Token

##### Description

API to Get auth Token

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gstnAuthTokenRequest | body | gstnAuthTokenRequest | No | [GstnAuthTokenRequest](#gstnauthtokenrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Submitting Data is Successful | [GstnAuthTokenResponse](#gstnauthtokenresponse) |
| 201 | Created |  |
| 401 | Failed to submit data |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/india-gst/check-status-gstr1-data

#### POST
##### Summary

Check Status GSTR1 data

##### Description

API to check status of  entire GSTR1.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gstr1RequestDto | body | gstr1RequestDto | No | [Gstr1CheckStatusDto](#gstr1checkstatusdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | file GSTR1 data is successful | [GstrStatusResponseDto](#gstrstatusresponsedto) |
| 201 | Created |  |
| 401 | Failed to file GSTR1 data |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/india-gst/file-gstr1-data

#### POST
##### Summary

File GSTR1 data

##### Description

API to file entire GSTR1.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gstr1RequestDto | body | gstr1RequestDto | No | [Gstr1FileRequestDto](#gstr1filerequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | file GSTR1 data is successful | [SaveGSTR1ResponseDto](#savegstr1responsedto) |
| 201 | Created |  |
| 401 | Failed to file GSTR1 data |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/india-gst/form-one/details/data

#### GET
##### Summary

GST form one detail data.

##### Description

API to fetch GST form one detail data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| filingYear | query |  | No | integer |
| frequency | query |  | No | string |
| fromDate | query |  | No | string |
| name | query |  | No | string |
| period | query |  | No | string |
| reportId | query |  | No | long |
| toDate | query |  | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST form one detail data. | [Gstr1DetailResponseDto](#gstr1detailresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/india-gst/get-gst-return-log

#### GET
##### Summary

Get GST Return log data

##### Description

API to get GST Return log.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST Return log report has been fetched successfully. | [IndiaGSTReturnLogResp](#indiagstreturnlogresp) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/india-gst/get-gstr1-save-api-data

#### GET
##### Summary

Save GSTR1 data

##### Description

API to save entire GSTR1 invoices.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| appKey | query |  | No | string |
| asp_secret_key | query |  | No | string |
| auth_token | query |  | No | string |
| endDate | query |  | Yes | string |
| financialPeriod | query |  | No | string |
| grossTurnover | query |  | No | number |
| gstin | query |  | No | string |
| id | query |  | No | long |
| ipUser | query |  | No | string |
| lastFYGrossTurnover | query |  | No | number |
| message_id | query |  | No | string |
| returnPeriod | query |  | No | string |
| sek | query |  | No | string |
| session_id | query |  | No | string |
| startDate | query |  | Yes | string |
| username | query |  | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Save GSTR1 data is successful | [SaveGSTR1RequestDto](#savegstr1requestdto) |
| 401 | Failed to save GSTR1 data |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/india-gst/otp-status

#### POST
##### Summary

Get otp

##### Description

API to Get otp

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gstnOtp | body | gstnOtp | No | [GstnOtpRequest](#gstnotprequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Submitting Data is Successful | [GstnOtpResponse](#gstnotpresponse) |
| 201 | Created |  |
| 401 | Failed to submit data |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/india-gst/reset-gstr1-data

#### POST
##### Summary

Reset GSTR1 data

##### Description

API to reset entire GSTR1 invoices.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gstr1RequestDto | body | gstr1RequestDto | No | [Gstr1ResetRequestDto](#gstr1resetrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Reset GSTR1 data is successful | [SaveGSTR1ResponseDto](#savegstr1responsedto) |
| 201 | Created |  |
| 401 | Failed to reset GSTR1 data |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/india-gst/save-gst-return-log

#### POST
##### Summary

Save GST Return log data

##### Description

API to save GST Return log.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activityReq | body | activityReq | Yes | [IndiaGSTReturnLogReq](#indiagstreturnlogreq) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Save GST Return log data is successful | [IndiaGSTReturnLogResp](#indiagstreturnlogresp) |
| 201 | Created |  |
| 401 | Failed to save GST Return log data |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/india-gst/save-gstr1-data

#### POST
##### Summary

Save GSTR1 data

##### Description

API to save entire GSTR1 invoices.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gstr1RequestDto | body | gstr1RequestDto | No | [Gstr1RequestDto](#gstr1requestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Save GSTR1 data is successful | [SaveGSTR1ResponseDto](#savegstr1responsedto) |
| 201 | Created |  |
| 401 | Failed to save GSTR1 data |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/india-gst/submit-gstr1-data

#### POST
##### Summary

Submit GSTR1 data

##### Description

API to submit entire GSTR1 invoices.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gstr1RequestDto | body | gstr1RequestDto | No | [Gstr1SubmitRequestDto](#gstr1submitrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Submit GSTR1 data is successful | [SaveGSTR1ResponseDto](#savegstr1responsedto) |
| 201 | Created |  |
| 401 | Failed to submit GSTR1 data |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/india-gst/update-gst-return-log/{id}

#### PUT
##### Summary

Update GST Return log data

##### Description

API to update GST Return log.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activityReq | body | activityReq | Yes | [IndiaGSTReturnLogUpdateReq](#indiagstreturnlogupdatereq) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST Return log data is updated successfully | [IndiaGSTReturnLogResp](#indiagstreturnlogresp) |
| 201 | Created |  |
| 401 | Failed to update GST Return log data |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/iras/gst

#### GET
##### Summary

Fetch redirect URL

##### Description

API to get redirectURL for applications

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | query | code | Yes | string |
| state | query | state | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Redirect URL fetched successfully | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/iras/gst/connect

#### GET
##### Summary

Connect to IRAS with Auth code

##### Description

API to complete IRAS connection

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | query | code | Yes | string |
| state | query | state | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | IRAS connected successfully | [IRASConnectionStatus](#irasconnectionstatus) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/iras/gst/status

#### GET
##### Summary

IRAS connection status.

##### Description

API to fetch IRAS connection status.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| redirectURL | query | redirectURL | No | string |
| reportLogId | query | reportLogId | No | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | IRAS connection status fetched successfully | [IRASConnectionStatus](#irasconnectionstatus) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/iras/gst/submit/{id}

#### GET
##### Summary

Submit GST report to IRAS

##### Description

API to submit GST report to IRAS

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST report submitted to IRAS successfully | [IRASBaseResponse](#irasbaseresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/jedata

#### POST
##### Summary

FY Closing JE Data.

##### Description

API to fetch data for FY Closing JE Data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| jeDataReq | body | jeDataReq | Yes | [CustomViewRequest](#customviewrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | FY Closing JE Data fetched. | [AccountPNLInfo](#accountpnlinfo) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/my/sales-tax-return

#### GET
##### Summary

Sales Tax Return data.

##### Description

API to fetch Sales Tax Return data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales Tax Return data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/my/sales-tax-return/export

#### GET
##### Summary

Sales Tax Return Report Export.

##### Description

API to fetch Sales Tax Return Report Export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| var-end_date | query | var-end_date | Yes | dateTime |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales Tax Return Report Export has been prepared. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/my/service-tax-return

#### GET
##### Summary

Service Tax Return data.

##### Description

API to fetch Service Tax Return data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Service Tax Return data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/my/service-tax-return/export

#### GET
##### Summary

Service Tax Return Export.

##### Description

API to EXPORT Service Tax Return data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| var-end_date | query | var-end_date | Yes | dateTime |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Service Tax Return has been Exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/my/sst-two-report

#### GET
##### Summary

SST02 data.

##### Description

API to fetch SST 02.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| reportType | query | reportType | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | SST 02 data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/my/sst-two-report/export/pdf

#### POST
##### Summary

SST 02 Report Export.

##### Description

API to fetch SST 02 Report Export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| sst02ExportRequestDto | body | sst02ExportRequestDto | Yes | [SST02ExportRequestDto](#sst02exportrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | SST 02 Export has been prepared. | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/nz/gstreturn

#### POST
##### Summary

Create GST Return Log

##### Description

API to create GST Return Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activityReq | body | activityReq | Yes | [GstNewZealandActivityStatementReq](#gstnewzealandactivitystatementreq) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [GstNewZealandActivityStatementResp](#gstnewzealandactivitystatementresp) |
| 201 | BAS Activity Statement Log created successfully. | [GstNewZealandActivityStatementResp](#gstnewzealandactivitystatementresp) |
| 400 | BAS Activity Statement Log could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/nz/gstreturn/{id}/{status}

#### PUT
##### Summary

Update filed status gst return Log

##### Description

API to Update filed status gst return Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| status | path | status | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 204 | BAS Activity Statement Log deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | BAS Activity Statement Log not found to delete. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/nz/gstreturndata

#### POST
##### Summary

Get GST Return Data

##### Description

API to Get GST Return Data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gstReturnNZReportReq | body | gstReturnNZReportReq | Yes | [GSTReturnNZReportReq](#gstreturnnzreportreq) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [GstNewZealandActivityStatementResp](#gstnewzealandactivitystatementresp) |
| 201 | BAS Activity Statement Log created successfully. | [GstNewZealandActivityStatementResp](#gstnewzealandactivitystatementresp) |
| 400 | BAS Activity Statement Log could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/nz/gstreturnlog/{id}

#### PUT
##### Summary

Update GST Return Log

##### Description

API to update GST Return Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activityReq | body | activityReq | Yes | [GstNewZealandActivityStatementReq](#gstnewzealandactivitystatementreq) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | BAS Activity Statement Log updated successfully. | [GstNewZealandActivityStatementResp](#gstnewzealandactivitystatementresp) |
| 201 | Created |  |
| 400 | BAS Activity Statement Log could not be updated due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | BAS Activity Statement Log not found to update. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete GST Return Log

##### Description

API to delete GST Return Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | BAS Activity Statement Log deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | BAS Activity Statement Log not found to delete. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/nz/gstreturnreport

#### GET
##### Summary

Search GST Return Log

##### Description

API to search GST Return Logs

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | BAS Activity Log report has been fetched successfully. | [GstNewZealandActivityStatementResp](#gstnewzealandactivitystatementresp) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/nz/gstreturnsettings

#### GET
##### Summary

Get Settings for GST Return Report

##### Description

API to get settings for GST Return Report

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | BAS Activity Settings has been fetched successfully. | [GstReturnNewZealandSettingsResp](#gstreturnnewzealandsettingsresp) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/nz/gstreturntransaction/export/xls

#### GET
##### Summary

GST Return Summary export.

##### Description

API to export GST Return Summary Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| reportId | query | reportId | No | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST Return Summary Report exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/nz/gstreturntransactiondetails/export/xls

#### GET
##### Summary

GST Return Details export.

##### Description

API to fetch GST Return Details export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| reportId | query | reportId | No | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST Return Details Report exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/nz/gstreturntransactiondetails/unsavedreport/{tempGSTReturnLogReportId}

#### GET
##### Summary

Get GST Return Transaction Details Data For Unsaved Report

##### Description

API to Get GST Return Transaction Details Data For Unsaved Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tempGSTReturnLogReportId | path | tempGSTReturnLogReportId | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST Return transaction details data fetched.. | [ [BASTransactionDetailsReportDto](#bastransactiondetailsreportdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/nz/gstreturntransactiondetails/{gstReturnLogReportId}

#### GET
##### Summary

Get GST Return Transaction Details Data

##### Description

API to Get GST Return Transaction Details Data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gstReturnLogReportId | path | gstReturnLogReportId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST Return transaction details data fetched.. | [ [BASTransactionDetailsReportDto](#bastransactiondetailsreportdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/nz/updategstreturnsettings

#### PUT
##### Summary

Update GST Return Log

##### Description

API to update GST Return Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| settings | body | settings | Yes | [GstReturnNewZealandSettingsReq](#gstreturnnewzealandsettingsreq) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | BAS Activity Statement Log updated successfully. | [GstReturnNewZealandSettingsResp](#gstreturnnewzealandsettingsresp) |
| 201 | Created |  |
| 400 | BAS Activity Statement Log could not be updated due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | BAS Activity Statement Log not found to update. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ph/bir-quarterly-return-report

#### GET
##### Summary

BIR2550Q Quarterly Return Report data.

##### Description

API to fetch BIR2550Q Quarterly Return Report data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | BIR2550Q Quarterly Return Report data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ph/form-1601E-report

#### GET
##### Summary

FORM 1601E Report data.

##### Description

API to fetch FORM 1601E Report data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | FORM 1601E Report data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ph/form-1601F-report

#### GET
##### Summary

FORM 1601F Report data.

##### Description

API to fetch FORM 1601F Report data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | FORM 1601F Report data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ph/form-1604-report

#### GET
##### Summary

FORM BIR form No. 1604E- Annual Return Report data.

##### Description

API to fetch BIR form No. 1604E- Annual Return Report data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | FORM BIR form No. 1604E- Annual Return Report data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ph/form-2307-report

#### GET
##### Summary

FORM 2307 Quarterly Report data.

##### Description

API to fetch FORM 2307 Quarterly Report data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | FORM 2307 Quarterly Report data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ph/form-2307-report/export/PDF

#### GET
##### Summary

FORM 2307 Quarterly Report PDF Export data.

##### Description

API to Export FORM 2307 Quarterly Report PDF Template.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| paymentId | query | paymentId | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | FORM 2307 Quarterly Report Export PDF Template Data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ph/form-map-1600-return

#### GET
##### Summary

FORM  Monthly Alphalist of Payees Report data.

##### Description

API to fetch Monthly Alphalist of Payees Report data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | FORM  Monthly Alphalist of Payees Report data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ph/form-srs-return

#### GET
##### Summary

FORM Semestral List of Regular Suppliers Report data.

##### Description

API to fetch Semestral List of Regular Suppliers Report data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | FORM Semestral List of Regular Suppliers Report data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ph/get-tenant-info

#### GET
##### Summary

Get Tenant Information.

##### Description

API to get Tenant Information for Philippines.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant Information has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ph/map-form-0619-report

#### GET
##### Summary

FORM MAP FORM 0619E Report data.

##### Description

API to fetch MAP FORM 0619E Report data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | FORM MAP FORM 0619E Report data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ph/purchase-relief-report

#### GET
##### Summary

Purchase Relief Report data.

##### Description

API to fetch Purchase Relief Report data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase Relief Report data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ph/purchase-relief-report/export

#### GET
##### Summary

Purchases Relief Report Export.

##### Description

API to fetch Purchases Relief Report Export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| var-end_date | query | var-end_date | Yes | dateTime |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchases Relief Report Export has been prepared. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ph/sales-relief-report

#### GET
##### Summary

Sales Relief Report data.

##### Description

API to fetch Sales Relief Report data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales Relief Report data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ph/sales-relief-report/export

#### GET
##### Summary

Sales Relief Report Export.

##### Description

API to fetch Sales Relief Report Export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| var-end_date | query | var-end_date | Yes | dateTime |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales Relief Report Export has been prepared. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ph/sawt-customer-return

#### GET
##### Summary

FORM SAWT for Customer Report data.

##### Description

API to fetch FORM SAWT for Customer Report data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | FORM SAWT for Customer Report data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ph/sawt-vendor-return

#### GET
##### Summary

FORM SAWT for Vendor Report data.

##### Description

API to fetch FORM SAWT for Vendor Report data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | FORM SAWT for Vendor Report data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/ph/wht/export

#### GET
##### Summary

Philippines Reports Export.

##### Description

API to Export Philippines Reports.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| report-name | query | report-name | Yes | string |
| var-end_date | query | var-end_date | Yes | dateTime |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Philippines Report Export has been prepared. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/product-sale-purchase

#### GET
##### Summary

Report sale by product or purchase by product

##### Description

Report sale by product or purchase by product description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| type | query | type | Yes | string |
| var-end_date | query | var-end_date | Yes | dateTime |
| var-product_code | query | var-product_code | No | string |
| var-start_date | query | var-start_date | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report sale by product or purchase by product successfully. | [SalePurchaseByProductResponse](#salepurchasebyproductresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Report sale by product or purchase by product

##### Description

Report sale by product or purchase by product description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [SalePurchaseByProductRequest](#salepurchasebyproductrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report sale by product or purchase by product successfully. | [SalePurchaseByProductResponse](#salepurchasebyproductresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/product-sale-purchase/stock-valuation

#### GET
##### Summary

Report sale by product or purchase by product

##### Description

Report sale by product or purchase by product description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| var-as_of_date | query | var-as_of_date | Yes | dateTime |
| var-product_name | query | var-product_name | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report sale by product or purchase by product successfully. | [SalePurchaseByProductResponse](#salepurchasebyproductresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/product/bom-report

#### GET
##### Summary

Get BOM Assembly report

##### Description

Api to get product Bom Assembly Details

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Page«BomAssemblyResponse»](#page«bomassemblyresponse») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/product/bom-report-export

#### GET
##### Summary

Get BOM Assembly report

##### Description

Api to get product Bom Assembly Details

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

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

### /v1/reports/product/customer

#### GET
##### Summary

Get product top customers

##### Description

Api to Get product top customers

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| currentDate | query | currentDate | Yes | string |
| duration | query | duration | Yes | string |
| productCode | query | productCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [TopContactDto](#topcontactdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/product/incoming-quantity

#### POST
##### Summary

Get product incoming quantity

##### Description

Api to get product incoming quantity

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fromDate | query | fromDate | Yes | string |
| periodFrequency | query | periodFrequency | Yes | string |
| productCodes | body | productCodes | Yes | [ string ] |
| toDate | query | toDate | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductIncommingQtyInfo](#productincommingqtyinfo) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/product/invoice

#### GET
##### Summary

Get product invoice data

##### Description

Api to Get product invoice data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| currentDate | query | currentDate | Yes | string |
| duration | query | duration | Yes | string |
| productCode | query | productCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductSalesStats](#productsalesstats) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/product/purchase

#### GET
##### Summary

Get product purchase data

##### Description

Api to Get product purchase data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| currentDate | query | currentDate | Yes | string |
| duration | query | duration | Yes | string |
| productCode | query | productCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductSalesStats](#productsalesstats) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/product/sales

#### GET
##### Summary

Get product sales data

##### Description

Api to Get product sales data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| currentDate | query | currentDate | Yes | string |
| duration | query | duration | Yes | string |
| productCode | query | productCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductSalesStats](#productsalesstats) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/product/sales-purchase

#### GET
##### Summary

Get product get sales purchase graph

##### Description

Api to get product get sales purchase graph

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| currentDate | query | currentDate | Yes | string |
| duration | query | duration | Yes | string |
| productCode | query | productCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | object |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/product/salesgrowth

#### GET
##### Summary

Get Sales with MoM Growth

##### Description

API to Get Sales with MoM Growth

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| currentDate | query | currentDate | Yes | string |
| duration | query | duration | Yes | string |
| productCode | query | productCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [SalesGrowthDto](#salesgrowthdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/product/short-details

#### GET
##### Summary

Get product data as per type

##### Description

Api to Get product data as per type

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| type | query | type | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductShortDetails](#productshortdetails) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Get product data for given sequence codes

##### Description

Api to Get product data as per type

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| productSeqCodes | body | productSeqCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductShortDetails](#productshortdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/product/stock-ageing

#### GET
##### Summary

Get stock ageing report

##### Description

Api to get stock ageing report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| currentDate | query | currentDate | No | string |
| groupByWarehouse | query | groupByWarehouse | No | boolean |
| productCode | query | productCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/product/stock-availability

#### GET
##### Summary

Get product stock availability report

##### Description

Api to get product stock availability report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| currentDate | query | currentDate | Yes | string |
| duration | query | duration | Yes | string |
| productCode | query | productCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [StockLedgerResponseDto](#stockledgerresponsedto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/product/supplier

#### GET
##### Summary

Get product top suppliers

##### Description

Api to Get product top suppliers

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| currentDate | query | currentDate | Yes | string |
| duration | query | duration | Yes | string |
| productCode | query | productCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [TopContactDto](#topcontactdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/return/purchase

#### GET
##### Summary

Get purchase return report

##### Description

API to get purchase return report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | Yes | dateTime |
| productName | query | productName | No | string |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase return report fetched successfully. | [PurchaseReturnReport](#purchasereturnreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/return/purchase/export

#### GET
##### Summary

Export purchase return report

##### Description

API to export purchase return report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| format | query | format | Yes | string |
| fromDate | query | fromDate | Yes | dateTime |
| productName | query | productName | No | string |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase return report exported successfully. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/return/sales

#### GET
##### Summary

Get sales return report

##### Description

API to get sales return report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| fromDate | query | fromDate | Yes | dateTime |
| productName | query | productName | No | string |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales return report fetched successfully. | [SalesReturnReport](#salesreturnreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/return/sales/export

#### GET
##### Summary

Export sales return report

##### Description

API to export sales return report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| format | query | format | Yes | string |
| fromDate | query | fromDate | Yes | dateTime |
| productName | query | productName | No | string |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales return report exported successfully. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/revrec/deferred-revenue-customer

#### POST
##### Summary

Profit and Loss Report.

##### Description

API to fetch data for Profit and Loss Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [DeferredRevenueByCustomerRequest](#deferredrevenuebycustomerrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Profit and Loss data has been fetched. | [AccountPNLInfo](#accountpnlinfo) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/revrec/deferred-revenue-product

#### POST
##### Summary

Profit and Loss Report.

##### Description

API to fetch data for Profit and Loss Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [DeferredRevenueByProductRequest](#deferredrevenuebyproductrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Profit and Loss data has been fetched. | [AccountPNLInfo](#accountpnlinfo) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/revrec/waterfall-detail

#### POST
##### Summary

Profit and Loss Report.

##### Description

API to fetch data for Profit and Loss Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [DeferredRevenueWaterfallDetailRequest](#deferredrevenuewaterfalldetailrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Profit and Loss data has been fetched. | [AccountPNLInfo](#accountpnlinfo) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/revrec/waterfall-summary

#### POST
##### Summary

Profit and Loss Report.

##### Description

API to fetch data for Profit and Loss Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [DeferredRevenueWaterfallSummaryRequest](#deferredrevenuewaterfallsummaryrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Profit and Loss data has been fetched. | [AccountPNLInfo](#accountpnlinfo) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sa/vatreturn

#### POST
##### Summary

Create VAT Return Log

##### Description

API to create VAT Return Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activityReq | body | activityReq | Yes | [VATReturnSaudiActivityStatementReq](#vatreturnsaudiactivitystatementreq) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [VATReturnSaudiActivityStatementResp](#vatreturnsaudiactivitystatementresp) |
| 201 | BAS Activity Statement Log created successfully. | [VATReturnSaudiActivityStatementResp](#vatreturnsaudiactivitystatementresp) |
| 400 | BAS Activity Statement Log could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sa/vatreturn/{id}/{status}

#### PUT
##### Summary

Update filed status gst return Log

##### Description

API to Update filed status gst return Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| status | path | status | Yes | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 204 | BAS Activity Statement Log deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | BAS Activity Statement Log not found to delete. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sa/vatreturndata

#### POST
##### Summary

Get VAT Return Data for Saudi Arabia

##### Description

API to Get VAT Return Data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| vatReturnSAReportReq | body | vatReturnSAReportReq | Yes | [VATReturnSaudiNewReportReq](#vatreturnsaudinewreportreq) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [VATReturnSaudiActivityStatementResp](#vatreturnsaudiactivitystatementresp) |
| 201 | BAS Activity Statement Log created successfully. | [VATReturnSaudiActivityStatementResp](#vatreturnsaudiactivitystatementresp) |
| 400 | BAS Activity Statement Log could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sa/vatreturnlog/{id}

#### PUT
##### Summary

Update VAT Return Log

##### Description

API to update VAT Return Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activityReq | body | activityReq | Yes | [VATReturnSaudiActivityStatementReq](#vatreturnsaudiactivitystatementreq) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | VAT Return Statement Log updated successfully. | [VATReturnSaudiActivityStatementResp](#vatreturnsaudiactivitystatementresp) |
| 201 | Created |  |
| 400 | VAT Return Statement Log could not be updated due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | VAT Return Statement Log not found to update. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete VAT Return Log

##### Description

API to delete VAT Return Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | VAT return Log deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | VAT return Log not found to delete. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sa/vatreturnreport

#### GET
##### Summary

Search VAT Return Log

##### Description

API to search VAT Return Logs

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | VAT return Log report has been fetched successfully. | [VATReturnBelgiumActivityStatementResp](#vatreturnbelgiumactivitystatementresp) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/script

#### GET
##### Summary

Generate missing address in warehouse

##### Description

Generate missing address in warehouse

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tenantId | query | tenantId | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Generate missing address in warehouse |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/script/cndn-seq-code

#### POST
##### Summary

Sync Credit and Debit note document seq code in invoices

##### Description

API to sync Credit and Debit note document seq code in invoices.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| noteType | query | noteType | Yes | string |
| tenantIds | body | tenantIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Credit and Debit note document seq code in invoices synced successfully |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/script/knock-off-uuid

#### POST
##### Summary

Generate Knock Off Info UUID

##### Description

API to Generate Knock Off Info UUID

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| documentKnockOffUpdateDto | body | documentKnockOffUpdateDto | Yes | [DocumentKnockOffUpdateDto](#documentknockoffupdatedto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Knock Off Info UUID generated successfully |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/script/sg/missing-taxes

#### GET
##### Summary

Generate missing taxes for SG countries

##### Description

API to generate missing taxes for SG countries.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fromDate | query | fromDate | No | dateTime |
| toDate | query | toDate | No | dateTime |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Missing taxes for SG country generated successfully |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/form-five

#### GET
##### Summary

GST form five data.

##### Description

API to fetch GST form five data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST form five data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/form-five/export/excel

#### POST
##### Summary

GST form five export.

##### Description

API to fetch GST form five export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gstFormFiveExportDetailsDto | body | gstFormFiveExportDetailsDto | Yes | [GSTFormFiveExportDetailsDto](#gstformfiveexportdetailsdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST form five exported. | [Resource](#resource) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/gst-detail

#### GET
##### Summary

GST Detail Report.

##### Description

API to fetch data for GST Detail Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST Detail data has been fetched. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/gst-transaction-detail

#### POST
##### Summary

GST Transactions Detail Report.

##### Description

API to fetch data for GST Transactions Detail Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gstTransactionRequestDto | body | gstTransactionRequestDto | Yes | [GstTransactionRequestDto](#gsttransactionrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST Transactions Detail data has been fetched. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/gst/export/xls

#### GET
##### Summary

GST export.

##### Description

API to fetch GST export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST Report exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/gstreturn

#### POST
##### Summary

Create GST Report Return Log

##### Description

API to create GST Report Return Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activityReq | body | activityReq | Yes | [SGGSTReportStatementDto«GSTForm5Data»](#sggstreportstatementdto«gstform5data») |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SGGSTReportStatementDto](#sggstreportstatementdto) |
| 201 | BAS Activity Statement Log created successfully. | [SGGSTReportStatementDto](#sggstreportstatementdto) |
| 400 | BAS Activity Statement Log could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/gstreturn/form7

#### POST
##### Summary

Create GST Report Return Log

##### Description

API to create GST Report Return Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activityReq | body | activityReq | Yes | [SGGSTReportStatementDto«GSTForm7Data»](#sggstreportstatementdto«gstform7data») |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SGGSTReportStatementDto](#sggstreportstatementdto) |
| 201 | BAS Activity Statement Log created successfully. | [SGGSTReportStatementDto](#sggstreportstatementdto) |
| 400 | BAS Activity Statement Log could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/gstreturn/form7/{id}

#### PUT
##### Summary

Update GST Report Return Log

##### Description

API to update GST Report Return Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activityReq | body | activityReq | Yes | [SGGSTReportStatementDto«GSTForm7Data»](#sggstreportstatementdto«gstform7data») |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | BAS Activity Statement Log updated successfully. | [SGGSTReportStatementDto](#sggstreportstatementdto) |
| 201 | Created |  |
| 400 | BAS Activity Statement Log could not be updated due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | BAS Activity Statement Log not found to update. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/gstreturn/{id}

#### PUT
##### Summary

Update GST Report Return Log

##### Description

API to update GST Report Return Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| activityReq | body | activityReq | Yes | [SGGSTReportStatementDto«GSTForm5Data»](#sggstreportstatementdto«gstform5data») |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | BAS Activity Statement Log updated successfully. | [SGGSTReportStatementDto](#sggstreportstatementdto) |
| 201 | Created |  |
| 400 | BAS Activity Statement Log could not be updated due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | BAS Activity Statement Log not found to update. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete GST Report Return Log

##### Description

API to delete GST Report Return Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | GST Report Statement Log deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | GST Report Statement Log not found to delete. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/gstreturn/{id}/{status}

#### PUT
##### Summary

Update filed status gst return Log

##### Description

API to Update filed status gst return Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| status | path | status | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 204 | GST Report Statement Log status updated successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | GST Report Statement Log not found to update status. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/gstreturndata

#### POST
##### Summary

GST form five data.

##### Description

API to fetch GST form five data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| sggstNewReportReq | body | sggstNewReportReq | Yes | [SGGSTNewReportReq](#sggstnewreportreq) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST form five data has been prepared. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/gstreturnreport

#### GET
##### Summary

Search GST Report Return Log

##### Description

API to search GST Report Return Logs

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST Return Log report has been fetched successfully. | [SGGSTReportStatementDto](#sggstreportstatementdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/gstreturnsettings

#### GET
##### Summary

Get Settings for GST Return Report

##### Description

API to get settings for GST Return Report

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST return Settings has been fetched successfully. | [SGGSTReportSettingsResp](#sggstreportsettingsresp) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PUT
##### Summary

Update GST Return Settings

##### Description

API to update GST Return Settings

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| settings | body | settings | Yes | [SGGSTReportSettingsReq](#sggstreportsettingsreq) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST Return Settings Log updated successfully. | [SGGSTReportSettingsResp](#sggstreportsettingsresp) |
| 201 | Created |  |
| 400 | GST Return Settings could not be updated due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | GST Return Settings not found to update. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/gstreturntransaction/export/xls

#### GET
##### Summary

GST Return Summary export.

##### Description

API to export GST Return Summary Report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fileName | query | fileName | Yes | string |
| reportId | query | reportId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST Return Summary Report exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/gstreturntransactiondetails/export/xls

#### GET
##### Summary

GST Return Details export.

##### Description

API to fetch GST Return Details export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fileName | query | fileName | Yes | string |
| reportId | query | reportId | No | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST Return Details Report exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/gstreturntransactiondetails/unsavedreport/{tempGSTReturnLogReportId}

#### GET
##### Summary

Get GST Return Transaction Details Data For Unsaved Report

##### Description

API to Get GST Return Transaction Details Data For Unsaved Report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tempGSTReturnLogReportId | path | tempGSTReturnLogReportId | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST Return transaction details data fetched.. | [ [BASTransactionDetailsReportDto](#bastransactiondetailsreportdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/gstreturntransactiondetails/{gstReturnLogReportId}

#### GET
##### Summary

Get GST Return Transaction Details Data

##### Description

API to Get GST Return Transaction Details Data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gstReturnLogReportId | path | gstReturnLogReportId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST Return transaction details data fetched.. | [ [BASTransactionDetailsReportDto](#bastransactiondetailsreportdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/iras/connect

#### GET
##### Summary

Connect to IRAS with Auth code

##### Description

API to complete IRAS connection

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | query | code | Yes | string |
| state | query | state | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | IRAS connected successfully | [IRASConnectionStatus](#irasconnectionstatus) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/iras/status

#### GET
##### Summary

IRAS connection status.

##### Description

API to fetch IRAS connection status.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| reportLogId | query | reportLogId | No | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | IRAS connection status fetched successfully | [IRASConnectionStatus](#irasconnectionstatus) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/iras/submit/{id}

#### GET
##### Summary

Submit GST report to IRAS

##### Description

API to submit GST report to IRAS

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | GST report submitted to IRAS successfully | [IRASBaseResponse](#irasbaseresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/iras/xml

#### GET
##### Summary

Generate IAF Audit file in xml format.

##### Description

API to generate IAF Audit file in xml format.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | IAF Audit file has been generated successfully. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/sg/tax-report

#### GET
##### Summary

Get tax report for Singapore

##### Description

API to get tax report for Singapore.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| fromDate | query | fromDate | Yes | dateTime |
| toDate | query | toDate | Yes | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax report for Singapore fetched successfully. | [TaxReportDto](#taxreportdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/template/provision/{country}

#### POST
##### Summary

Template provision to tenants belonging to provided country

##### Description

Template provision to tenants belonging to provided country

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country | path | country | Yes | string |
| templateProvision | body | templateProvision | Yes | [TemplateProvision](#templateprovision) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Template provisioned. |
| 201 | Created |
| 400 | Could not provision templates. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/uae/vat-return-201

#### GET
##### Summary

VAT Return 201 Report data.

##### Description

API to fetch VAT Return 201

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | VAT Return 201 data has been prepared. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/uae/vat-return-201/export/xls

#### GET
##### Summary

VAT Return 201 export.

##### Description

API to fetch VAT Return 201 export.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| endDate | query |  | Yes | string |
| startDate | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | VAT Return 201 exported. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/uk/logs

#### GET
##### Summary

Get UK vat return report log summary

##### Description

Api to get UK vat return report log summary

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | UK vat return report logs have been fetched successfully | [CanadaTaxReportLogDto](#canadataxreportlogdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Uk vat return report logs not found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Create UK vat return report logs

##### Description

Create UK vat return report logs

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [UkVatReportLogRequestDto](#ukvatreportlogrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [CanadaTaxReportLogDto](#canadataxreportlogdto) |
| 201 | UK vat return report logs created successfully | [CanadaTaxReportLogDto](#canadataxreportlogdto) |
| 400 | UK vat return report logs could not be created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PUT
##### Summary

Update report log according to from and to date

##### Description

Api to update report log according to from and to date

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| filingYear | query | filingYear | Yes | integer |
| fromDate | query | fromDate | No | dateTime |
| id | query | id | No | long |
| toDate | query | toDate | No | dateTime |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [CanadaTaxReportLogDto](#canadataxreportlogdto) |
| 201 | Report log is updated successfully | [CanadaTaxReportLogDto](#canadataxreportlogdto) |
| 400 | Report log could not be updated |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/uk/logs/name/{id}

#### PATCH
##### Summary

Update name of the report

##### Description

Api to Update name of the report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| name | body | name | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Name for report updated successfully. | [UkVatReportLogDto](#ukvatreportlogdto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to update Name for report |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/uk/logs/status/{id}

#### PATCH
##### Summary

Update tax report log status

##### Description

Api to update tax report log status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| status | body | status | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax report log status has been updated successfully | [CanadaTaxReportSettingDto](#canadataxreportsettingdto) |
| 204 | No Content |  |
| 400 | Failed to update tax report log status |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/uk/logs/{id}

#### DELETE
##### Summary

Delete tax report log

##### Description

Api to delete tax report log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Tax report log has been deleted successfully |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Failed to delete tax report log |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/uk/save-log

#### POST
##### Summary

Save UK vat return report log

##### Description

Api to save UK vat return report logs

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [UkVatReportLogDto](#ukvatreportlogdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [CanadaTaxReportLogDto](#canadataxreportlogdto) |
| 201 | UK vat return report log saved successfully | [CanadaTaxReportLogDto](#canadataxreportlogdto) |
| 400 | UK vat return report log could not be saved |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/uk/search

#### GET
##### Summary

Search Reports Log

##### Description

API to Search Reports Log

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Reports Log report has been fetched successfully. | [CanadaTaxReportLogDto](#canadataxreportlogdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/uk/settings

#### GET
##### Summary

Get vat return report settings

##### Description

Api to get vat return report settings

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | UK vat return report settings have been fetched successfully | [CanadaTaxReportSettingDto](#canadataxreportsettingdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | UK vat return report settings not found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PUT
##### Summary

UK Vat Return Report Settings

##### Description

Update UK Vat return report settings

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [UkVatReportSettingsDto](#ukvatreportsettingsdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [CanadaTaxReportSettingDto](#canadataxreportsettingdto) |
| 201 | UK vat return report settings updated successfully | [CanadaTaxReportSettingDto](#canadataxreportsettingdto) |
| 400 | UK vat return report settings could not be updated |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/uk/{id}/export

#### GET
##### Summary

Export UK Tax Return report

##### Description

API to export UK Tax Return report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| format | query | format | Yes | string |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Canada Tax Return report exported successfully. | [Resource](#resource) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/updateclosingsettings

#### PUT
##### Summary

Update Financial Year closing settings

##### Description

API to update Financial Year closing settings

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| settings | body | settings | Yes | [ClosingSettingsReq](#closingsettingsreq) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Closing details updated successfully. | [ClosingSettingsResp](#closingsettingsresp) |
| 201 | Created |  |
| 400 | Closing details could not be updated due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Closing details not found to update. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/view

#### GET
##### Summary

Fetch report views

##### Description

Fetch report views

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| financialReport | query | financialReport | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report views fetched successfully. | [ [ReportViewInfo](#reportviewinfo) ] |
| 400 | Report views could not be fetched. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Save report view

##### Description

Save report view

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [ReportViewRequest](#reportviewrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report view saved successfully. | [ReportViewResponse](#reportviewresponse) |
| 201 | Created |  |
| 400 | Report view could not be saved. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/reports/view/{id}

#### DELETE
##### Summary

Delete report view

##### Description

Delete report view

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Report view deleted successfully. |
| 204 | No Content |
| 400 | Report view could not be deleted. |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

## custom-report-builder-controller
Custom Report Builder Controller

### /v1/reports-builder/custom/get-file-list

#### GET
##### Summary

File meta list

##### Description

Fetch File meta list

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| appName | query | appName | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report list is fetch successfully | [ [FileMetaLogDto](#filemetalogdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/reports-builder/custom/update-column-mapping/{id}

#### PUT
##### Summary

update file meta

##### Description

update file meta column mapping

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| columnMappings | body | columnMappings | Yes | [ [ColumnMapping](#columnmapping) ] |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report list is fetch successfully | [FileMetaLogDto](#filemetalogdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## data-source-controller
Data Source Controller

### /v1/reports-builder/data-source/report-tables

#### GET
##### Summary

get report tables

##### Description

api get report tables

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| appName | query | appName | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get report table success! | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/reports-builder/data-source/report-tables/table

#### GET
##### Summary

get report tables by table name

##### Description

api get report tables by table name

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tableName | query | tableName | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get report table success! | [ReportTable](#reporttable) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/reports-builder/data-source/report-tables/{id}

#### GET
##### Summary

get report tables by id

##### Description

api get report tables by id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get report table success! | [ReportTable](#reporttable) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## drop-box-controller
Drop Box Controller

### /v1/reports-builder/dropbox/save-file-meta

#### POST
##### Summary

File Meta

##### Description

save File meta list

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| fileMetaSaveRequest | body | fileMetaSaveRequest | Yes | [FileMetaSaveRequest](#filemetasaverequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | File Meta saved Successfully. | [ [FileMetaLogDto](#filemetalogdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## one-drive-controller
One Drive Controller

### /v1/reports-builder/onedrive/save-file-meta

#### POST
##### Summary

File Meta

##### Description

save File meta list

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| fileMetaSaveRequest | body | fileMetaSaveRequest | Yes | [FileMetaSaveRequest](#filemetasaverequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | File Meta saved Successfully. | [ [FileMetaLogDto](#filemetalogdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## reports-controller
Reports Controller

### /v1/reports-builder/reports

#### GET
##### Summary

Reports list

##### Description

Reports list

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| appName | query | appName | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report list is fetch successfully | [ [ReportDto](#reportdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Save report

##### Description

Save report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| reportRequest | body | reportRequest | Yes | [ReportRequest](#reportrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report has been saved. | [ReportDto](#reportdto) |
| 201 | Created |  |
| 400 | Report data is invalid |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/reports-builder/reports/books/execute

#### POST
##### Summary

Build and execute the query for books report with pagination

##### Description

Build and execute the query for books report with pagination

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| filterOnRolesFlg | query | filterOnRolesFlg | No | boolean |
| limit | query | limit | No | integer |
| metadata | body | metadata | Yes | [ReportMetadata](#reportmetadata) |
| page | query | page | No | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Books report data has been fetched | [ReportPageDataResponse](#reportpagedataresponse) |
| 201 | Created |  |
| 400 | Books report metadata not valid |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/reports-builder/reports/books/export

#### POST
##### Summary

Export a books report

##### Description

Export a books report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| exportRequest | body | exportRequest | Yes | [ReportExportRequest](#reportexportrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Books Report has been exported | [Resource](#resource) |
| 201 | Created |  |
| 400 | Books report metadata not valid |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/reports-builder/reports/email-v1

#### POST
##### Summary

Email a report

##### Description

Email a report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| emailRequest | body | emailRequest | Yes | [ReportEmailRequest](#reportemailrequest) |
| fileType | query | fileType | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report has been emailed | string |
| 201 | Created |  |
| 400 | Report metadata not valid |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/reports-builder/reports/execute

#### POST
***DEPRECATED***
##### Summary

Build and execute the query for report

##### Description

Build and execute the query for report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| metadata | body | metadata | Yes | [ReportMetadata](#reportmetadata) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report data has been fetched | string |
| 201 | Created |  |
| 400 | Report metadata not valid |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/reports-builder/reports/execute-v1

#### POST
##### Summary

Build and execute the query for report with pagination

##### Description

Build and execute the query for report with pagination

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| metadata | body | metadata | Yes | [ReportMetadata](#reportmetadata) |
| page | query | page | No | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report data has been fetched | string |
| 201 | Created |  |
| 400 | Report metadata not valid |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/reports-builder/reports/export-multiple-v1

#### POST
##### Summary

Export report with multiple widgets

##### Description

Export report with multiple widgets

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| multiExportRequest | body | multiExportRequest | Yes | [ReportMultiExportRequest](#reportmultiexportrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report has been exported | string |
| 201 | Created |  |
| 400 | Report metadata not valid |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/reports-builder/reports/export-v1

#### POST
##### Summary

Export a report

##### Description

Export a report

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| exportRequest | body | exportRequest | Yes | [ReportExportRequest](#reportexportrequest) |
| fileType | query | fileType | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report has been exported | string |
| 201 | Created |  |
| 400 | Report metadata not valid |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/reports-builder/reports/paged

#### GET
##### Summary

Reports paginated list

##### Description

Reports paginated list

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| appName | query | appName | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sortBy | query | sortBy | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report paginated list is fetch successfully | [ReportDto](#reportdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/reports-builder/reports/revenue-report

#### POST
##### Summary

Fetch data for Revenue report.

##### Description

Fetch data for Revenue report.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [RevenueReportRequest](#revenuereportrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report data has been fetched | string |
| 201 | Created |  |
| 400 | Report metadata not valid |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/reports-builder/reports/{uid}

#### GET
##### Summary

Report by uid

##### Description

Report by uid

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| uid | path | uid | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report data has been fetched | [ReportDto](#reportdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Report with provided id not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update report by uid

##### Description

Update report by uid

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| reportRequest | body | reportRequest | Yes | [ReportRequest](#reportrequest) |
| uid | path | uid | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Report data has been updated | [ReportDto](#reportdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Report with provided id not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete report by uid

##### Description

Delete report by uid

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| uid | path | uid | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Report has been deleted. |
| 204 | No Content |
| 400 | Report cannot be deleted. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Report with provided id not found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---



## Models

### AccountClosingRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | [ string ] |  | No |
| baseCurrency | string |  | No |
| exchangeRate | number |  | No |
| perspective | string |  | No |
| primaryCurrency | string |  | No |
| revaluationDate | date |  | No |

### AccountClosingResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string |  | No |
| accountName | string |  | No |
| baseCurrency | string |  | No |
| closingAmountInBase | number |  | No |
| closingAmountInPrimary | number |  | No |
| exchangeRate | number |  | No |
| primaryCurrency | string |  | No |
| revaluationDate | date |  | No |
| updatedAmountInPrimary | number |  | No |

### AccountDetailsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string |  | No |
| accountGroup | string |  | No |
| accountGroupId | string |  | No |
| code | string |  | No |
| description | string |  | No |
| id | long |  | No |
| name | string |  | No |
| nature | string |  | No |
| parent | long |  | No |
| subGroupName | string |  | No |
| tenantId | long |  | No |

### AccountGLInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string |  | No |
| accountCurrency | string |  | No |
| accountGroup | string |  | No |
| accountName | string |  | No |
| accountNature | string |  | No |
| accountid | long |  | No |
| code | string |  | No |
| endingAmount | number |  | No |
| endingAmountInAccountCurrency | number |  | No |
| endingAmountInPrimaryCurrency | number |  | No |
| group | boolean |  | No |
| groupid | long |  | No |
| jeData | [ [CashJournalEntryDetails](#cashjournalentrydetails) ] |  | No |
| openingAmount | number |  | No |
| openingAmountInAccountCurrency | number |  | No |
| openingAmountInPrimaryCurrency | number |  | No |
| openingBalanceType | string |  | No |
| parentAccount | long |  | No |
| periodAmount | number |  | No |
| periodAmountInAccountCurrency | number |  | No |
| periodAmountInPrimaryCurrency | number |  | No |
| subGroup | long |  | No |
| subGroupName | string |  | No |

### AccountInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string | Account Code<br/>_Example:_ `"AC-0000001"` | No |
| name | string | Account Name<br/>_Example:_ `"Account Payable"` | No |

### AccountPNLInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cogs | object |  | No |
| costOfGoodsSold | object |  | No |
| expenses | object |  | No |
| grossProfit | number |  | No |
| income | object |  | No |
| incomeTaxExpenses | number |  | No |
| netProfitOrLoss | number |  | No |
| operatingExpenses | object |  | No |
| operatingProfit | number |  | No |
| otherExpenses | object |  | No |
| otherIncome | object |  | No |
| period | [Period](#period) |  | No |
| profitBeforeTax | number |  | No |
| revenue | object |  | No |
| totalCogs | number |  | No |
| totalCostOfGoodsSold | number |  | No |
| totalExpenses | number |  | No |
| totalIncome | number |  | No |
| totalOperatingExpenses | number |  | No |
| totalOtherExpenses | number |  | No |
| totalOtherIncome | number |  | No |
| totalRevenue | number |  | No |
| vname | string |  | No |

### AccountParentData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| id | long |  | No |
| name | string |  | No |
| parent | long |  | No |
| parentChain | [ [AccountParentData](#accountparentdata) ] |  | No |

### AdditionalCharges

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalChargeAmount | number |  | No |
| additionalChargeTaxAmount | number |  | No |
| additionalChargesDetails | [ [AdditionalChargesDetails](#additionalchargesdetails) ] |  | No |
| globalDiscount | [GlobalDiscountDetails](#globaldiscountdetails) |  | No |
| globalDiscounts | [ [GlobalDiscountDetails](#globaldiscountdetails) ] |  | No |

### AdditionalChargesDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharge | string |  | No |
| additionalChargeAccountCode | string |  | No |
| addtionalChargeTax | string |  | No |
| addtionalChargeTaxCode | string |  | No |
| apportionFlag | boolean |  | No |
| apportionValue | string | _Enum:_ `"APPORTION_MANUAL"`, `"APPORTION_ON_QTY"`, `"APPORTION_ON_VALUE"` | No |
| cgst | number |  | No |
| chargeAmount | number |  | No |
| igst | number |  | No |
| includeInReport | boolean |  | No |
| isPercent | boolean |  | No |
| isPreCharge | boolean |  | No |
| percent | number |  | No |
| sgst | number |  | No |
| taxAmount | number |  | No |

### AdditionalChargesReport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) |  | No |
| averageRate | number |  | No |
| contactCode | string |  | No |
| contactName | string |  | No |
| deleted | boolean |  | No |
| id | long |  | No |
| isPurchase | boolean |  | No |
| productCode | string |  | No |
| productName | string |  | No |
| quantity | number |  | No |
| tenantId | long |  | No |
| total | number |  | No |
| transactionDate | dateTime |  | No |
| transactionNo | string |  | No |
| unitPrice | number |  | No |

### AdditionalReportsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string |  | No |
| contact | [ string ] | _Example:_ `["C-000005","C-000006"]` | No |
| contactCode | string |  | No |
| customField | string |  | No |
| customFields | string |  | No |
| decimalScale | integer |  | No |
| endDate | dateTime |  | No |
| productCode | string |  | No |
| search | string |  | No |
| startDate | dateTime |  | No |
| transactionType | string |  | No |
| viewType | string | _Enum:_ `"DEFAULT"`, `"MONTHLY_SUMMARY"`, `"CUSTOMER_WISE"`, `"CUSTOMER_WISE_SUMMARY"`, `"DETAILS"`, `"SUMMARY"` | No |

### AddressDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| countryCode | string |  | No |
| line1 | string |  | No |
| postCode | string |  | No |

### AdvanceItemsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ad_amt | number |  | No |
| camt | number |  | No |
| csamt | number |  | No |
| iamt | number |  | No |
| rt | number |  | No |
| samt | number |  | No |

### AdvancePaymentsSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box91 | number |  | No |
| fromDate | string |  | No |
| id | long |  | No |
| toDate | string |  | No |

### AdvanceTaxLiabilityDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| diff_percent | number |  | No |
| flag | string |  | No |
| itms | [ [AdvanceItemsDto](#advanceitemsdto) ] |  | No |
| pos | string |  | No |
| sply_ty | string |  | No |

### AdvanceTaxLiabilityDtoStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cname | string |  | No |
| ctin | string |  | No |
| dnum | string |  | No |
| dt | string |  | No |
| error_cd | string |  | No |
| error_msg | string |  | No |
| state_cd | string |  | No |

### AdvancedTrackingBOMDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| costPerUnit | number |  | No |
| expiryDate | dateTime | Expiry date. Date Format is dd-mm-yyyy. Applicable when AdvancedTrackingType is Batch<br/>_Example:_ `"01-01-2020"` | No |
| manufacturingDate | dateTime | Manufacturing date. Date Format is dd-mm-yyyy. Applicable when AdvancedTrackingType is Batch<br/>_Example:_ `"01-01-2020"` | No |
| qtyToFulfil | double | Batch qty to fulfill<br/>_Example:_ `1` | No |
| remainingQuantity | number |  | No |
| serialBatchNumber | string | Batch or serial number to be fulfilled<br/>_Example:_ `"Batch-001"` | No |

### AgedDashboardDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| current | number |  | No |
| lessThanOneMonth | number |  | No |
| lessThanThreeMonth | number |  | No |
| lessThanTwoMonth | number |  | No |
| older | number |  | No |
| total | number |  | No |

### AgedDetailReportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount1To30 | number | 1-30 Days Amount<br/>_Example:_ `300` | No |
| amount30To60 | number | 30-60 Days Amount<br/>_Example:_ `300` | No |
| amount60To90 | number | 60-90 Days Amount<br/>_Example:_ `300` | No |
| amountGreaterThan90 | number | Greater than 90 days amount<br/>_Example:_ `300` | No |
| amountsPerSlab | [ number ] |  | No |
| contactCode | string | _Example:_ `"C-0000001"` | No |
| contactName | string | _Example:_ `"David"` | No |
| currentAmount | number | Current Amount<br/>_Example:_ `330` | No |
| documentCode | string | _Example:_ `"0000001"` | No |
| documentDate | dateTime | _Example:_ `"01-01-2020"` | No |
| documentDueDate | dateTime | _Example:_ `"01-01-2020"` | No |
| documentNumber | string | _Example:_ `"PO-0000001"` | No |

### AgedDetailReportSumDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCodeAndName | string | _Example:_ `"David C-0000001"` | No |
| details | [ [AgedDetailReportDto](#ageddetailreportdto) ] |  | No |
| totalAmount1To30 | number | Total 1-30 Days Amount<br/>_Example:_ `300` | No |
| totalAmount30To60 | number | Total 30-60 Days Amount<br/>_Example:_ `300` | No |
| totalAmount60To90 | number | Total 60-90 Days Amount<br/>_Example:_ `300` | No |
| totalAmountGreaterThan90 | number | Total Greater than 90 days amount<br/>_Example:_ `300` | No |
| totalAmountPerSlab | [ number ] |  | No |
| totalCurrentAmount | number | Total Current Amount<br/>_Example:_ `330` | No |

### AgedSummaryReportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount1To30 | number | 1-30 Days Amount<br/>_Example:_ `300` | No |
| amount30To60 | number | 30-60 Days Amount<br/>_Example:_ `300` | No |
| amount60To90 | number | 60-90 Days Amount<br/>_Example:_ `300` | No |
| amountGreaterThan90 | number | Greater than 90 days amount<br/>_Example:_ `300` | No |
| amountsPerSlab | [ number ] |  | No |
| contactCode | string | Contact Code<br/>_Example:_ `"C-0000001"` | No |
| contactName | string | Contact Name<br/>_Example:_ `"John"` | No |
| currentAmount | number | Current Amount<br/>_Example:_ `330` | No |

### AmortizationReportRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| asOfDate | dateTime | As of date<br/>_Example:_ `"01-01-2023"` | Yes |
| documentCode | string | _Example:_ `"0000001"` | No |
| endPeriod | string |  | No |
| fromPeriod | string |  | No |
| isDetails | boolean |  | No |
| limit | integer |  | No |
| page | integer |  | No |
| search | string |  | No |

### AmortizationScheduleWaterfallDetailResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string |  | No |
| contactName | string |  | No |
| contents | [ [DeferredAmortizationScheduleWaterfallDetail](#deferredamortizationschedulewaterfalldetail) ] |  | No |
| total | [AmortizationScheduleWaterfallTotal](#amortizationschedulewaterfalltotal) |  | No |

### AmortizationScheduleWaterfallTotal

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| periods | object |  | No |
| priorUnrecognized | number |  | No |
| total | number |  | No |

### AmortizationWaterfallSummary

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| deferralAccountCode | string |  | No |
| deferralAccountName | string |  | No |
| deferredExpenseBal | number |  | No |
| details | [ [AmortizationScheduleWaterfallDetailResponse](#amortizationschedulewaterfalldetailresponse) ] |  | No |
| periods | object |  | No |
| priorUnrecognized | number |  | No |
| targetAccountCode | string |  | No |
| targetAccountName | string |  | No |
| total | number |  | No |
| unplannedDeferredExpenseBal | number |  | No |

### AmortizationWaterfallSummaryResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contents | [ [AmortizationWaterfallSummary](#amortizationwaterfallsummary) ] |  | No |
| periodLabels | [ string ] |  | No |
| total | [AmortizationScheduleWaterfallTotal](#amortizationschedulewaterfalltotal) |  | No |

### AmountTheATOOwesYouSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| creditFromFBTInstalment | long |  | No |
| creditFromPaygTaxInstalment | long |  | No |
| endDate | string |  | No |
| frequency | string |  | No |
| fuelTaxCredit | long |  | No |
| gstOnPurchase | long |  | No |
| id | long |  | No |
| luxuryCarTaxRefundable | long |  | No |
| startDate | string |  | No |
| totalAmountstheATOOwesYou | long |  | No |
| wineEqualisationTaxRefundable | long |  | No |

### AmountsYouOweTheATOSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| deferredGST | long |  | No |
| endDate | string |  | No |
| fbtInstalment | long |  | No |
| frequency | string |  | No |
| fuelTaxCreditOverClaim | long |  | No |
| gstOnSale | long |  | No |
| id | long |  | No |
| luxuryCarTax | long |  | No |
| paygIncomeTaxInstalment | long |  | No |
| paygTaxWithheld | long |  | No |
| startDate | string |  | No |
| totalAmountsYouOwned | long |  | No |
| wineEqualisationTax | long |  | No |

### B2bDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ctin | string |  | No |
| inv | [ [InvDto](#invdto) ] |  | No |

### B2bDtoStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ctin | string |  | No |
| date | dateTime |  | No |
| error_cd | string |  | No |
| error_msg | string |  | No |
| inv_num | string |  | No |

### B2clDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| inv | [ [InvDtoB2cl](#invdtob2cl) ] |  | No |
| pos | string |  | No |

### B2clDtoStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| date | dateTime |  | No |
| error_cd | string |  | No |
| error_msg | string |  | No |
| inv_num | string |  | No |
| state_cd | number |  | No |

### B2csDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| camt | number |  | No |
| csamt | number |  | No |
| diff_percent | number |  | No |
| etin | string |  | No |
| flag | string |  | No |
| iamt | number |  | No |
| pos | string |  | No |
| rt | number |  | No |
| samt | number |  | No |
| sply_ty | string |  | No |
| txval | number |  | No |
| typ | string |  | No |

### B2csDtoStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| error_cd | string |  | No |
| error_msg | string |  | No |
| state_cd | number |  | No |

### BASActivityDataStatementReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| frequency | string | MONTHLY<br/>_Example:_ `"MONTHLY"` | No |
| fromDate | string | YYYY-MM-DD<br/>_Example:_ `"2020-01-01"` | No |
| id | long | Activity Report Id<br/>_Example:_ `1` | No |
| name | string | Activity Report<br/>_Example:_ `"Name of Business Activity Report"` | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| toDate | string | YYYY-MM-DD<br/>_Example:_ `"2020-12-31"` | No |

### BASActivitySettingsReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| australianBusinessNo | string | Australian Business Number<br/>_Example:_ `1234567890987654` | No |
| deferredGst | boolean | Deferred GST<br/>_Example:_ `true` | No |
| fringeBenefitsTax | boolean | True/False<br/>_Example:_ `true` | No |
| fringeBenefitsTaxCycle | string | MONTHLY/QUARTERLY<br/>_Example:_ `"MONTHLY"` | No |
| fuelTaxCredits | boolean | True/False<br/>_Example:_ `true` | No |
| gstCalculationCycle | string | MONTHLY/QUARTERLY/ANNUALLY<br/>_Example:_ `"MONTHLY"` | No |
| luxuryCarTax | boolean | True/False<br/>_Example:_ `true` | No |
| paygInstalmentCycle | string | NONE/MONTHLY/QUARTERLY/ANNUALLY<br/>_Example:_ `"NONE"` | No |
| paygInstalmentMethod | string | AMOUNT/RATE<br/>_Example:_ `"AMOUNT"` | No |
| paygWithholdingCycle | string | NONE/MONTHLY/QUARTERLY<br/>_Example:_ `"NONE"` | No |
| reportingMethod | string | SIMPLER/FULL<br/>_Example:_ `"SIMPLER"` | No |
| taxAccountBasis | string | ACCRUAL/CASH<br/>_Example:_ `"ACCRUAL"` | No |
| wineEqualisationTax | boolean | True/False<br/>_Example:_ `true` | No |

### BASActivitySettingsResp

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| australianBusinessNo | string | Australian Business Number<br/>_Example:_ `12345678909876543000` | No |
| deferredGst | boolean | Deferred GST<br/>_Example:_ `true` | No |
| deleted | boolean | True/False<br/>_Example:_ `true` | No |
| fringeBenefitsTax | boolean | True/False<br/>_Example:_ `true` | No |
| fringeBenefitsTaxCycle | string | MONTHLY/QUARTERLY<br/>_Example:_ `"MONTHLY"` | No |
| fuelTaxCredits | boolean | True/False<br/>_Example:_ `true` | No |
| gstCalculationCycle | string | MONTHLY/QUARTERLY/ANNUALLY<br/>_Example:_ `"MONTHLY"` | No |
| id | long |  | No |
| luxuryCarTax | boolean | True/False<br/>_Example:_ `true` | No |
| paygInstalmentCycle | string | NONE/MONTHLY/QUARTERLY/ANNUALLY<br/>_Example:_ `"NONE"` | No |
| paygInstalmentMethod | string | AMOUNT/RATE<br/>_Example:_ `"AMOUNT"` | No |
| paygWithholdingCycle | string | NONE/MONTHLY/QUARTERLY<br/>_Example:_ `"NONE"` | No |
| reportingMethod | string | SIMPLER/FULL<br/>_Example:_ `"SIMPLER"` | No |
| taxAccountBasis | string | Tax Account Basis<br/>_Example:_ `"ACCRUAL"` | No |
| wineEqualisationTax | boolean | True/False<br/>_Example:_ `true` | No |

### BASActivityStatementReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amountTheATOOwesYou | [AmountTheATOOwesYouSection](#amounttheatoowesyousection) | To Owe | No |
| amountsYouOweTheATO | [AmountsYouOweTheATOSection](#amountsyouowetheatosection) | You Owe | No |
| balance | number | Balance<br/>_Example:_ `500` | No |
| basSetting | [BASSettingDto](#bassettingdto) | BAS Setting | No |
| fbtInstalmentSection | [FBTInstalmentSection](#fbtinstalmentsection) | Fringe benefits tax (FBT) instalment section | No |
| filingYear | integer | Report Filing Year<br/>_Example:_ `2020` | No |
| frequency | string | MONTHLY<br/>_Example:_ `"MONTHLY"` | No |
| fromDate | string | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |
| gstSectionDetails | [GstSection](#gstsection) | Gst Section | No |
| id | long | Activity Report Id<br/>_Example:_ `1` | No |
| name | string | Activity Report<br/>_Example:_ `"Name of Business Activity Report"` | No |
| payGTaxWithheldSection | [PayGTaxWithheldSection](#paygtaxwithheldsection) | PAYG tax withheld section | No |
| paygIncomeTaxInstalmentOption1Section | [PaygIncomeTaxInstalmentOption1Section](#paygincometaxinstalmentoption1section) | PAYG tax withheld Option 1 section | No |
| paygIncomeTaxInstalmentOption2Section | [PaygIncomeTaxInstalmentOption2Section](#paygincometaxinstalmentoption2section) | PAYG tax withheld Option 2 section | No |
| paymentOrRefundSection | [PaymentOrRefundSection](#paymentorrefundsection) | Payment or refund section | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| tempBASLogReportId | string | Temporary BAS log report ID | No |
| toDate | string | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |

### BASActivityStatementResp

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amountTheATOOwesYou | [AmountTheATOOwesYouSection](#amounttheatoowesyousection) | To Owe | No |
| amountsYouOweTheATO | [AmountsYouOweTheATOSection](#amountsyouowetheatosection) | You Owe | No |
| balance | number | Balance<br/>_Example:_ `500` | No |
| basSetting | [BASSettingDto](#bassettingdto) | BAS Setting | No |
| creationDate | string | Creation Date<br/>_Example:_ `"01-12-2020"` | No |
| fbtInstalmentSection | [FBTInstalmentSection](#fbtinstalmentsection) | Fringe benefits tax (FBT) instalment section | No |
| filingYear | integer | Report Filing Year<br/>_Example:_ `2020` | No |
| frequency | string | MONTHLY<br/>_Example:_ `"MONTHLY"` | No |
| fromDate | string | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |
| gstSectionDetails | [GstSection](#gstsection) | Gst Section | No |
| id | long | Id<br/>_Example:_ `1` | No |
| name | string | Activity Report<br/>_Example:_ `"Name of Business Activity Report"` | No |
| payGTaxWithheldSection | [PayGTaxWithheldSection](#paygtaxwithheldsection) | PAYG tax withheld section | No |
| paygIncomeTaxInstalmentOption1Section | [PaygIncomeTaxInstalmentOption1Section](#paygincometaxinstalmentoption1section) | PAYG tax withheld Option 1 section | No |
| paygIncomeTaxInstalmentOption2Section | [PaygIncomeTaxInstalmentOption2Section](#paygincometaxinstalmentoption2section) | PAYG tax withheld Option 2 section | No |
| paymentOrRefundSection | [PaymentOrRefundSection](#paymentorrefundsection) | Payment or refund section | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| status | boolean | Status<br/>_Example:_ `true` | No |
| tempBASLogReportId | string | Temporary BAS log report ID | No |
| toDate | string | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |

### BASSettingDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| australianBusinessNo | string |  | No |
| deferredGst | boolean |  | No |
| fringeBenefitsTax | boolean |  | No |
| fringeBenefitsTaxCycle | string |  | No |
| fuelTaxCredits | boolean |  | No |
| gstCalculationCycle | string |  | No |
| id | long |  | No |
| luxuryCarTax | boolean |  | No |
| paygInstalmentCycle | string |  | No |
| paygInstalmentMethod | string |  | No |
| paygWithholdingCycle | string |  | No |
| reportingMethod | string |  | No |
| taxAccountBasis | string |  | No |
| wineEqualisationTax | boolean |  | No |

### BASTransactionDetailsReportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| boxName | string | Box name<br/>_Example:_ `"Box 00"` | No |
| documentDetails | [ [BASTransactionReportDocumentDetailsDto](#bastransactionreportdocumentdetailsdto) ] | Section wise Document details for BAS Transaction details report. | No |
| sectionName | string | Section name<br/>_Example:_ `"G1 Total Sales"` | No |
| taxAmountInBaseCurrency | number | Tax Amount.<br/>_Example:_ `100` | No |
| taxAmountInDefaultCurrency | number | Tax Amount.<br/>_Example:_ `100` | No |
| totalAmountInBaseCurrency | number | Total Amount inclusive of tax.<br/>_Example:_ `1100` | No |
| totalAmountInDefaultCurrency | number | Total Amount inclusive of tax.<br/>_Example:_ `1100` | No |
| totalBoxAmount | number | Total Box Amount<br/>_Example:_ `100` | No |

### BASTransactionReportDocumentDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string |  | No |
| boxAmount | number |  | No |
| contactName | string |  | No |
| currency | string |  | No |
| documentCode | string |  | No |
| documentDate | dateTime |  | No |
| documentSeqCode | string |  | No |
| documentType | string |  | No |
| exchangeRate | number |  | No |
| gstExchangeRate | number |  | No |
| productName | string |  | No |
| taxAmountInBaseCurrency | number |  | No |
| taxAmountInDefaultCurrency | number |  | No |
| taxCode | string |  | No |
| taxableAmountInDefaultCurrency | number |  | No |
| taxbaleAmountInBaseCurrency | number |  | No |
| totalAmountInBaseCurrency | number |  | No |

### BIR2307TempateDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| formDate | dateTime |  | No |
| payeeInfo | [PayeeInfo](#payeeinfo) |  | No |
| payorInfo | [PayorInfo](#payorinfo) |  | No |
| toDate | dateTime |  | No |
| whtDetails | [ [BIR2307WHTData](#bir2307whtdata) ] |  | No |

### BIR2307WHTData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| atccode | string |  | No |
| natureDescription | string |  | No |
| total | number |  | No |
| whtAmount | number |  | No |
| whtAssessableAmountQM1 | number |  | No |
| whtAssessableAmountQM2 | number |  | No |
| whtAssessableAmountQM3 | number |  | No |

### BIR2550QQuarterlyReturnResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| boxNumber | integer | Box Number<br/>_Example:_ `1` | No |
| label | string | Section name or heading<br/>_Example:_ `"Declaration"` | No |
| sectionNumber | string | Section number of the element<br/>_Example:_ `3` | No |
| sequenceNumber | integer | Sequence number of the element<br/>_Example:_ `2` | No |
| type | string | ELEMENT TYPE<br/>_Enum:_ `"GROUP"`, `"SUBGROUP"`, `"ELEMENT"`, `"TOTAL"`, `"NUMBER"`, `"TEXT"`, `"TABLEDATA"`, `"DATE"`<br/>_Example:_ `"ELEMENT"` | No |
| value1 | number | Tax Rate for element<br/>_Example:_ `"5%"` | No |
| value2 | number | Taxable Amount for the element<br/>_Example:_ `1000` | No |

### BalanceSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box71 | number |  | No |
| box72 | number |  | No |
| id | long |  | No |

### BalanceSheetAssetsInfoConsolidationView

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountsReceivable | [ [ReportItemDto](#reportitemdto) ] |  | No |
| bank | [ [ReportItemDto](#reportitemdto) ] |  | No |
| cash | [ [ReportItemDto](#reportitemdto) ] |  | No |
| currentAsset | [ [ReportItemDto](#reportitemdto) ] |  | No |
| fixedAssets | [ [ReportItemDto](#reportitemdto) ] |  | No |
| intangibles | [ [ReportItemDto](#reportitemdto) ] |  | No |
| longTermAssets | [ [ReportItemDto](#reportitemdto) ] |  | No |
| nonCurrentAsset | [ [ReportItemDto](#reportitemdto) ] |  | No |
| otherAssets | [ [ReportItemDto](#reportitemdto) ] |  | No |
| otherCurrentAssets | [ [ReportItemDto](#reportitemdto) ] |  | No |
| otherLongTermAsset | [ [ReportItemDto](#reportitemdto) ] |  | No |
| ppe | [ [ReportItemDto](#reportitemdto) ] |  | No |
| totalAccountsReceivable | object |  | No |
| totalAsset | object |  | No |
| totalBank | object |  | No |
| totalCash | object |  | No |
| totalCurrentAsset | object |  | No |
| totalFixedAssets | object |  | No |
| totalIntangibles | object |  | No |
| totalLongTermAssets | object |  | No |
| totalNonCurrentAsset | object |  | No |
| totalOtherAssets | object |  | No |
| totalOtherCurrentAssets | object |  | No |
| totalOtherLongTermAsset | object |  | No |
| totalPpe | object |  | No |

### BalanceSheetAssetsInfoCustomView

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountsReceivable | object |  | No |
| bank | object |  | No |
| cash | object |  | No |
| currentAsset | object |  | No |
| fixedAssets | object |  | No |
| intangibles | object |  | No |
| longTermAssets | object |  | No |
| nonCurrentAsset | object |  | No |
| otherAssets | object |  | No |
| otherCurrentAssets | object |  | No |
| otherLongTermAsset | object |  | No |
| ppe | object |  | No |
| totalAccountsReceivable | object |  | No |
| totalAsset | object |  | No |
| totalBank | object |  | No |
| totalCash | object |  | No |
| totalCurrentAsset | object |  | No |
| totalFixedAssets | object |  | No |
| totalIntangibles | object |  | No |
| totalLongTermAssets | object |  | No |
| totalNonCurrentAsset | object |  | No |
| totalOtherAssets | object |  | No |
| totalOtherCurrentAssets | object |  | No |
| totalOtherLongTermAsset | object |  | No |
| totalPpe | object |  | No |

### BalanceSheetAssetsInfoGroupingCustomView

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountsReceivable | object |  | No |
| bank | object |  | No |
| cash | object |  | No |
| currentAsset | object |  | No |
| fixedAssets | object |  | No |
| intangibles | object |  | No |
| longTermAssets | object |  | No |
| nonCurrentAsset | object |  | No |
| otherAssets | object |  | No |
| otherCurrentAssets | object |  | No |
| otherLongTermAsset | object |  | No |
| ppe | object |  | No |
| totalAccountsReceivable | object |  | No |
| totalAsset | object |  | No |
| totalBank | object |  | No |
| totalCash | object |  | No |
| totalCurrentAsset | object |  | No |
| totalFixedAssets | object |  | No |
| totalIntangibles | object |  | No |
| totalLongTermAssets | object |  | No |
| totalNonCurrentAsset | object |  | No |
| totalOtherAssets | object |  | No |
| totalOtherCurrentAssets | object |  | No |
| totalOtherLongTermAsset | object |  | No |
| totalPpe | object |  | No |

### BalanceSheetInfoConsolidationView

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| assets | [BalanceSheetAssetsInfoConsolidationView](#balancesheetassetsinfoconsolidationview) |  | No |
| diffOpeningBalance | object |  | No |
| displayText | object |  | No |
| groupNames | object |  | No |
| liabilities | [BalanceSheetLiabilitiesInfoConsolidationView](#balancesheetliabilitiesinfoconsolidationview) |  | No |
| periodName | object |  | No |

### BalanceSheetInfoCustomGroupingView

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| assets | [BalanceSheetAssetsInfoGroupingCustomView](#balancesheetassetsinfogroupingcustomview) |  | No |
| diffOpeningBalance | object |  | No |
| displayText | object |  | No |
| groupNames | object |  | No |
| liabilities | [BalanceSheetLiabilitiesInfoCustomGroupingView](#balancesheetliabilitiesinfocustomgroupingview) |  | No |
| periodName | object |  | No |

### BalanceSheetInfoCustomView

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| assets | [BalanceSheetAssetsInfoCustomView](#balancesheetassetsinfocustomview) |  | No |
| diffOpeningBalance | object |  | No |
| groupNames | object |  | No |
| liabilities | [BalanceSheetLiabilitiesInfoCustomView](#balancesheetliabilitiesinfocustomview) |  | No |
| periodName | object |  | No |

### BalanceSheetLiabilitiesInfoConsolidationView

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountsPayable | [ [ReportItemDto](#reportitemdto) ] |  | No |
| currentLiabilities | [ [ReportItemDto](#reportitemdto) ] |  | No |
| currentYearEarnings | object |  | No |
| equity | [ [ReportItemDto](#reportitemdto) ] |  | No |
| longTermLiabilities | [ [ReportItemDto](#reportitemdto) ] |  | No |
| nonCurrentLiabilities | [ [ReportItemDto](#reportitemdto) ] |  | No |
| otherCurrentLiabilities | [ [ReportItemDto](#reportitemdto) ] |  | No |
| totalAccountsPayable | object |  | No |
| totalCurrentLiabilities | object |  | No |
| totalEquity | object |  | No |
| totalLiabilities | object |  | No |
| totalLongTermLiabilities | object |  | No |
| totalNonCurrentLiabilities | object |  | No |
| totalOtherCurrentLiabilities | object |  | No |

### BalanceSheetLiabilitiesInfoCustomGroupingView

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountsPayable | object |  | No |
| currentLiabilities | object |  | No |
| currentYearEarnings | object |  | No |
| equity | object |  | No |
| longTermLiabilities | object |  | No |
| nonCurrentLiabilities | object |  | No |
| otherCurrentLiabilities | object |  | No |
| totalAccountsPayable | object |  | No |
| totalCurrentLiabilities | object |  | No |
| totalEquity | object |  | No |
| totalLiabilities | object |  | No |
| totalLongTermLiabilities | object |  | No |
| totalNonCurrentLiabilities | object |  | No |
| totalOtherCurrentLiabilities | object |  | No |

### BalanceSheetLiabilitiesInfoCustomView

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountsPayable | object |  | No |
| currentLiabilities | object |  | No |
| currentYearEarnings | object |  | No |
| equity | object |  | No |
| longTermLiabilities | object |  | No |
| nonCurrentLiabilities | object |  | No |
| otherCurrentLiabilities | object |  | No |
| totalAccountsPayable | object |  | No |
| totalCurrentLiabilities | object |  | No |
| totalEquity | object |  | No |
| totalLiabilities | object |  | No |
| totalLongTermLiabilities | object |  | No |
| totalNonCurrentLiabilities | object |  | No |
| totalOtherCurrentLiabilities | object |  | No |

### BatchStatusReportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| batchNumber | string |  | No |
| expiryDate | dateTime |  | No |
| expiryDateDisplay | string |  | No |
| product | string |  | No |
| qtyRemaining | number |  | No |
| receivedOn | string |  | No |
| receivedOnDisplay | string |  | No |
| remarks | string |  | No |
| status | string |  | No |
| supplier | string |  | No |

### BatchStatusReportRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| expiryFromDate | dateTime | Expiry from date<br/>_Example:_ `"01-01-2019"` | No |
| expiryToDate | dateTime | Expiry to date<br/>_Example:_ `"01-01-2019"` | No |
| fileFormat | string | _Enum:_ `"XLS"`, `"PDF"`, `"CSV"` | No |
| productCodes | [ string ] |  | No |
| status | string |  | No |
| warehouseCodes | [ string ] |  | No |

### BomAssemblyDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| actualQuantityUsed | number | Actual Quantity Used<br/>_Example:_ `1` | Yes |
| advancedTracking | string | Tracking type of product<br/>_Example:_ `"NONE"` | No |
| costPerUnit | number | Cost Per Unit<br/>_Example:_ `100` | Yes |
| documentCode | string | Document Code<br/>_Example:_ `"BOM-0000001"` | Yes |
| documentSequenceCode | string | Document Code<br/>_Example:_ `"BOM-0000001"` | Yes |
| id | long | Id<br/>_Example:_ `1234` | Yes |
| isQuickCommit | boolean | Auto Commit Flag<br/>_Example:_ `false` | No |
| pid | string | Product Id<br/>_Example:_ `"P00001"` | Yes |
| produceProductType | string | Produce Product type<br/>_Enum:_ `"NONE"`, `"SCRAP"`, `"COPRODUCT"`<br/>_Example:_ `"SCRAP"` | Yes |
| productCode | string | Product code<br/>_Example:_ `"P00001"` | Yes |
| productId | long | Product Id<br/>_Example:_ `1` | Yes |
| productName | string | Product Name<br/>_Example:_ `"Hard Disk"` | Yes |
| quantityRequired | number | Quantity Required<br/>_Example:_ `1` | Yes |
| rawMaterial | boolean | Raw Material/Additional Cost<br/>_Example:_ `true` | No |
| totalCost | number | Total Cost<br/>_Example:_ `100` | No |
| totalQuantity | number | Quantity Total<br/>_Example:_ `1` | Yes |
| transactionRefCode | string | Transaction Ref code<br/>_Example:_ `"BI-0000001"` | Yes |
| warehouseInventoryData | [ [WarehouseInventoryData](#warehouseinventorydata) ] | Bom Assembly Details | Yes |

### BomAssemblyResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTracking | string | Tracking type of product<br/>_Example:_ `"NONE"` | No |
| assemblyDate | string | Assembly Date<br/>_Example:_ `"01-07-2021"` | Yes |
| bomAssemblyDetails | [ [BomAssemblyDetailsDto](#bomassemblydetailsdto) ] | Bom Assembly Details | Yes |
| bomMetaCode | string | BOM Meta Code<br/>_Example:_ `"0000001"` | No |
| buildQuantityMax | number | Max Product Quantity that can be build<br/>_Example:_ `10` | Yes |
| buildQuantityReq | number | Required Quantity to build<br/>_Example:_ `5` | Yes |
| costPerUnit | number | Cost per Unit<br/>_Example:_ `120` | Yes |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customFieldMap | object | Custom Field Columns<br/>_Example:_ `{}` | No |
| documentSequenceCode | string | 0000001 | No |
| id | long | Id<br/>_Example:_ `1234` | Yes |
| journalEntryCode | string | Journal Entry Code<br/>_Example:_ `"JE-0000001"` | No |
| memo | string | Memo<br/>_Example:_ `"Computer Memo"` | Yes |
| pid | string | pid<br/>_Example:_ `"P-0000001"` | Yes |
| productCode | string | Product Code<br/>_Example:_ `"P-0000001"` | Yes |
| productId | long | Product Id<br/>_Example:_ `1234` | Yes |
| productName | string | Product Name<br/>_Example:_ `"Computer"` | Yes |
| sequenceFormat | string | 00000001 | No |
| totalCost | number | Total Cost<br/>_Example:_ `100` | No |
| totalQuantity | number | Total Quantity<br/>_Example:_ `100` | Yes |
| totalQuantityAfter | number | Quantity after BOM Assembly<br/>_Example:_ `10` | No |
| warehouseCode | string | Warehouse Code<br/>_Example:_ `"WH-0000001"` | No |
| warehouseInventoryData | [ [WarehouseInventoryData](#warehouseinventorydata) ] | Bom Assembly Details | Yes |
| warehouseName | string | Warehouse Name<br/>_Example:_ `"Primary Warehouse"` | No |

### BudgetCustomField

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| actualBalance | number |  | No |
| attributes | [ [BudgetCustomField](#budgetcustomfield) ] |  | No |
| code | string |  | No |
| limit | number |  | No |
| value | string |  | No |

### BulkApiResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ object ] |  | No |
| statusCode | integer |  | No |
| success | [ object ] |  | No |

### BuySellDashboardDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| dueSoon | number | Total Amount Due Soon<br/>_Example:_ `20` | No |
| lastTotalAmount | number | Last Total Amount<br/>_Example:_ `30` | No |
| outstanding | number | Total Amount Outstanding<br/>_Example:_ `50` | No |
| overDue | number | Total Amount Over Due<br/>_Example:_ `30` | No |
| paid | number | Total Pid Amount<br/>_Example:_ `10` | No |
| percent | number | Percentage<br/>_Example:_ `50` | No |
| totalAmount | number | Total Amount<br/>_Example:_ `60` | No |

### CanadaTaxReportLogDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Amount<br/>_Example:_ `200000` | No |
| createdDate | dateTime | Creation Date<br/>_Example:_ `"1-12-2020"` | No |
| currency | string | Currency symbol<br/>_Enum:_ `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>_Example:_ `"CAD"` | No |
| filingYear | integer | Filing year<br/>_Example:_ `2020` | No |
| fromDate | string | From date<br/>_Example:_ `"1-12-2020"` | No |
| id | long | Report id<br/>_Example:_ `123` | No |
| name | string | Report log name<br/>_Example:_ `"Snapshot Name 1"` | No |
| reportData | [ [TaxCalculationSections](#taxcalculationsections) ] | Report date | No |
| reportingTypeId | long | Reporting type id<br/>_Example:_ `123` | No |
| status | string | Report status<br/>_Example:_ `"Not Filed"` | No |
| taxReportingType | string | Tax type<br/>_Example:_ `"GST/HST Return"` | No |
| tenantId | long | tenantId<br/>_Example:_ `12345` | No |
| toDate | string | To date<br/>_Example:_ `"1-12-2020"` | No |

### CanadaTaxReportLogRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filingYear | integer | Filing year<br/>_Example:_ `2020` | No |
| taxReportingType | string | Tax type<br/>_Example:_ `"GST/HST Return"` | No |

### CanadaTaxReportSettingDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| enabled | boolean | Enable tax type<br/>_Example:_ `true` | No |
| filingFrequency | string | Filing frequency<br/>_Enum:_ `"MONTHLY"`, `"QUARTERLY"`, `"HALF_YEARLY"`, `"YEARLY"`<br/>_Example:_ `"YEARLY"` | No |
| firstPeriodStarts | string | Start of first period<br/>_Example:_ `"January"` | No |
| taxReportingType | string | Tax type Code<br/>_Example:_ `"TAX_SETTING_CODE_001"` | No |

### CashFlowReportByPeriodDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| beginningCash | object |  | No |
| displayText | object |  | No |
| endCash | object |  | No |
| name | string | Name of report<br/>_Example:_ `"STATEMENT OF CASHFLOWS"` | No |
| netChangeInCash | object |  | No |
| periodName | object |  | No |
| sections | [ [CashFlowSectionByPeriodDto](#cashflowsectionbyperioddto) ] | Cash Flow Sections | No |

### CashFlowReportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| beginningCash | number | Cash and Cash Equivalents at beginning of the period<br/>_Example:_ `120` | No |
| endCash | number | Cash and Cash Equivalents at end of the period<br/>_Example:_ `220` | No |
| fromDate | string | From Date<br/>_Example:_ `"25-08-2019"` | No |
| name | string | Name of report<br/>_Example:_ `"STATEMENT OF CASHFLOWS"` | No |
| netChangeInCash | number | Net change in cash<br/>_Example:_ `100` | No |
| period | [Period](#period) |  | No |
| sections | [ [CashFlowSectionDto](#cashflowsectiondto) ] | Cash Flow Sections | No |
| toDate | string | To Date<br/>_Example:_ `"25-08-2021"` | No |

### CashFlowRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accounts | [ string ] |  | No |
| amountInPrimaryCurrency | boolean |  | No |
| baseCurrency | string |  | No |
| columnBy | string | _Enum:_ `"TOTAL_ONLY"`, `"DAYS"`, `"WEEKS"`, `"MONTHS"`, `"QUARTERS"`, `"YEARS"`, `"CONTACTS"`, `"PRODUCTS"`, `"CLASS"`, `"LOCATION"` | No |
| contacts | [ string ] |  | No |
| custom_field | string |  | No |
| dateMacro | string | _Enum:_ `"ALL_DATES"`, `"CUSTOM"`, `"TODAY"`, `"THIS_WEEK"`, `"THIS_WEEK_TO_DATE"`, `"THIS_MONTH"`, `"THIS_MONTH_TO_DATE"`, `"THIS_QUARTER"`, `"THIS_QUARTER_TO_DATE"`, `"THIS_YEAR"`, `"THIS_YEAR_TO_DATE"`, `"THIS_YEAR_TO_LAST_MONTH"`, `"YESTERDAY"`, `"RECENT"`, `"LAST_WEEK"`, `"LAST_WEEK_TO_DATE"`, `"LAST_MONTH"`, `"LAST_MONTH_TO_DATE"`, `"LAST_QUARTER"`, `"LAST_QUARTER_TO_DATE"`, `"LAST_YEAR"`, `"LAST_YEAR_TO_DATE"`, `"SINCE_30_DAYS_AGO"`, `"SINCE_60_DAYS_AGO"`, `"SINCE_90_DAYS_AGO"`, `"SINCE_365_DAYS_AGO"`, `"NEXT_WEEK"`, `"NEXT_4_WEEKS"`, `"NEXT_MONTH"`, `"NEXT_QUARTER"`, `"NEXT_YEAR"` | No |
| endDate | string | End date<br/>_Example:_ `"31-12-2022"` | No |
| fileFormat | string | _Enum:_ `"XLS"`, `"PDF"`, `"CSV"` | No |
| method | string | Cash flow method<br/>_Enum:_ `"DIRECT"`, `"INDIRECT"` | No |
| periods | [ [Period](#period) ] |  | No |
| primaryCurrency | string |  | No |
| products | [ string ] |  | No |
| save | boolean |  | No |
| startDate | string | Start date<br/>_Example:_ `"01-01-2019"` | No |
| strict | boolean |  | No |
| vid | long |  | No |
| vname | string |  | No |

### CashFlowSectionByPeriodDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| items | [ [CashFlowSectionItemByPeriodDto](#cashflowsectionitembyperioddto) ] | List of Cash Flow section items. | No |
| netCashFlow | object | Net Cash Flow in the Section<br/>_Example:_ `100` | No |
| sectionLabel | string | Section Label<br/>_Example:_ `"Cash Flows from Operating Activities (Direct Method)"` | No |
| sectionOrder | integer | Order of the section<br/>_Example:_ `1` | No |

### CashFlowSectionDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| items | [ [CashFlowSectionItemDto](#cashflowsectionitemdto) ] | List of Cash Flow section items. | No |
| netCashFlow | number | Net Cash Flow in the Section<br/>_Example:_ `100` | No |
| sectionLabel | string | Section Label<br/>_Example:_ `"Cash Flows from Operating Activities (Direct Method)"` | No |
| sectionOrder | integer | Order of the section<br/>_Example:_ `1` | No |

### CashFlowSectionItemByPeriodDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accounts | object | List of accounts | No |
| deletable | boolean | If the item is deletable<br/>_Example:_ `true` | No |
| id | long | ID<br/>_Example:_ `1` | No |
| itemAmount | object | Amount for the item<br/>_Example:_ `10` | No |
| itemLabel | string | Item Label<br/>_Example:_ `"Cash paid to suppliers"` | No |
| itemOrder | integer | Item Order<br/>_Example:_ `1` | No |

### CashFlowSectionItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accounts | [ [AccountInfo](#accountinfo) ] | List of accounts | No |
| deletable | boolean | If the item is deletable<br/>_Example:_ `true` | No |
| id | long | ID<br/>_Example:_ `1` | No |
| itemAmount | number | Amount for the item<br/>_Example:_ `10` | No |
| itemLabel | string | Item Label<br/>_Example:_ `"Cash paid to suppliers"` | No |
| itemOrder | integer | Item Order<br/>_Example:_ `1` | No |

### CashJournalEntryDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| amountInDocumentCurrency | number |  | No |
| balance | number |  | No |
| balanceInDocumentCurrency | number |  | No |
| contactName | string |  | No |
| creditAmount | number |  | No |
| currency | string | _Enum:_ `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"` | No |
| currencyExchangeRate | number |  | No |
| date | dateTime |  | No |
| debitAmount | number |  | No |
| description | string |  | No |
| documentCode | string |  | No |
| documentSequenceCode | string |  | No |
| documentType | string | _Enum:_ `"NORMAL_JE"`, `"ADJUSTMENT"`, `"BANK_TRANSFER"`, `"PARTY_JE"`, `"SALES_INVOICE"`, `"PURCHASE_INVOICE"`, `"INVENTORY_VARIANCE_ADJUSTMENT"`, `"DISHONOURED_CHEQUE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"GOODS_RECEIVED_NOTE"`, `"INVENTORY"`, `"DELIVERY_ORDER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"FULFILLMENT"`, `"GOOD_RECEIPT"`, `"BOM_ASSEMBLY"`, `"FIXED_ASSET"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"SALES_CONTRA"`, `"PURCHASE_CONTRA"`, `"BANK_DEPOSIT"`, `"FINANCIAL_YEAR_CLOSING"`, `"TDS_JE"`, `"PAYROLL"`, `"CONTRACTOR_PAYROLL"`, `"EXPENSE_CLAIM"`, `"REVALUATION"`, `"ASSET_GOOD_RECEIPT"`, `"FIXED_ASSET_BILL"`, `"REVENUE_ARRANGEMENT"`, `"AMORTIZATION"`, `"ALLOCATION"` | No |
| jeCode | string |  | No |
| jeDate | string |  | No |
| memo | string |  | No |
| transactionType | string | _Enum:_ `"CREDIT"`, `"DEBIT"` | No |

### CashNetflow

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| currency | string | _Enum:_ `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"` | No |
| fromDate | string |  | No |
| inflow | string |  | No |
| netflow | string |  | No |
| outflow | string |  | No |
| toDate | string |  | No |

### CdnrDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chkSum | string |  | No |
| diff_percent | number |  | No |
| flag | string |  | No |
| inv_typ | string |  | No |
| itms | [ [CdnrItems](#cdnritems) ] |  | No |
| nt_dt | string |  | No |
| nt_num | string |  | No |
| ntty | string |  | No |
| pos | string |  | No |
| rchrg | string |  | No |
| val | number |  | No |

### CdnrDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ctin | string |  | No |
| nt | [ [CdnrDetails](#cdnrdetails) ] |  | No |

### CdnrDtoStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cname | string |  | No |
| ctin | string |  | No |
| error_cd | string |  | No |
| error_msg | string |  | No |
| nt_dt | string |  | No |
| nt_num | string |  | No |
| ty | string |  | No |
| typ | string |  | No |

### CdnrItemDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| camt | number |  | No |
| csamt | number |  | No |
| iamt | number |  | No |
| rt | number |  | No |
| samt | number |  | No |
| txval | number |  | No |

### CdnrItems

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| itm_det | [CdnrItemDetails](#cdnritemdetails) |  | No |
| num | integer |  | No |

### CdnurDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| diff_percent | number |  | No |
| flag | string |  | No |
| itms | [ [CdnurItems](#cdnuritems) ] |  | No |
| nt_dt | string |  | No |
| nt_num | string |  | No |
| ntty | string |  | No |
| pos | string |  | No |
| typ | string |  | No |
| val | number |  | No |

### CdnurItemDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| csamt | number |  | No |
| iamt | number |  | No |
| rt | number |  | No |
| txval | number |  | No |

### CdnurItems

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| itm_det | [CdnurItemDetails](#cdnuritemdetails) |  | No |
| num | integer |  | No |

### ClaimSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box10ClaimRefundTourist | number |  | No |
| box10ClaimRefundTouristApplied | boolean |  | No |
| box11BadDebtRelief | number |  | No |
| box11BadDebtReliefApplied | boolean |  | No |
| box12Preregistration | number |  | No |
| box12PreregistrationApplied | boolean |  | No |

### ClosingSettingsReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| closingPeriod | string | MONTHLY/QUARTERLY/YEARLY/CUSTOM<br/>_Example:_ `"YEARLY"` | No |
| retainedEarningAccount | string | Retained Earning Account<br/>_Example:_ `"AC-0000062"` | No |

### ClosingSettingsResp

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| closingPeriod | string | MONTHLY/QUARTERLY/YEARLY/CUSTOM<br/>_Example:_ `"YEARLY"` | No |
| deleted | boolean | True/False<br/>_Example:_ `true` | No |
| id | long |  | No |
| retainedEarningAccount | string | Retained Earning Account<br/>_Example:_ `"AC-0000062"` | No |

### ConsolidateAccountItemsInfoDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| tenantId | long |  | No |

### ConsolidateAccountTenantsMappingItemsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accounts | [ [ConsolidateAccountItemsInfoDto](#consolidateaccountitemsinfodto) ] |  | No |
| label | string |  | No |

### ConsolidateAccountTenantsRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accounts | [ string ] |  | No |
| amountInPrimaryCurrency | boolean |  | No |
| baseCurrency | string |  | No |
| basis | string | _Enum:_ `"ACCRUAL"`, `"CASH"` | No |
| columnBy | string | _Enum:_ `"TOTAL_ONLY"`, `"DAYS"`, `"WEEKS"`, `"MONTHS"`, `"QUARTERS"`, `"YEARS"`, `"CONTACTS"`, `"PRODUCTS"`, `"CLASS"`, `"LOCATION"` | No |
| contacts | [ string ] |  | No |
| custom_field | string |  | No |
| dateMacro | string | _Enum:_ `"ALL_DATES"`, `"CUSTOM"`, `"TODAY"`, `"THIS_WEEK"`, `"THIS_WEEK_TO_DATE"`, `"THIS_MONTH"`, `"THIS_MONTH_TO_DATE"`, `"THIS_QUARTER"`, `"THIS_QUARTER_TO_DATE"`, `"THIS_YEAR"`, `"THIS_YEAR_TO_DATE"`, `"THIS_YEAR_TO_LAST_MONTH"`, `"YESTERDAY"`, `"RECENT"`, `"LAST_WEEK"`, `"LAST_WEEK_TO_DATE"`, `"LAST_MONTH"`, `"LAST_MONTH_TO_DATE"`, `"LAST_QUARTER"`, `"LAST_QUARTER_TO_DATE"`, `"LAST_YEAR"`, `"LAST_YEAR_TO_DATE"`, `"SINCE_30_DAYS_AGO"`, `"SINCE_60_DAYS_AGO"`, `"SINCE_90_DAYS_AGO"`, `"SINCE_365_DAYS_AGO"`, `"NEXT_WEEK"`, `"NEXT_4_WEEKS"`, `"NEXT_MONTH"`, `"NEXT_QUARTER"`, `"NEXT_YEAR"` | No |
| deleted | boolean |  | No |
| endDate | string | End date<br/>_Example:_ `"31-12-2022"` | No |
| fileFormat | string | _Enum:_ `"XLS"`, `"PDF"`, `"CSV"` | No |
| fromDate | dateTime |  | No |
| id | long |  | No |
| mapping | [ [ConsolidateAccountTenantsMappingItemsDto](#consolidateaccounttenantsmappingitemsdto) ] |  | No |
| mode | string | _Enum:_ `"CONSOLIDATION"`, `"COMPARISON"` | No |
| multicompanyReport | boolean |  | No |
| name | string |  | No |
| payloadSave | boolean |  | No |
| periods | [ [Period](#period) ] |  | No |
| primaryCurrency | string |  | No |
| products | [ string ] |  | No |
| report | string |  | No |
| save | boolean |  | No |
| startDate | string | Start date<br/>_Example:_ `"01-01-2019"` | No |
| strict | boolean |  | No |
| tenantId | long |  | No |
| tenants | [ integer ] |  | No |
| tenantsToShow | [ integer ] |  | No |
| toDate | dateTime |  | No |
| vid | long |  | No |
| vname | string |  | No |

### ConsolidateAccountTenantsResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| deleted | boolean |  | No |
| id | long |  | No |
| mapping | [ [ConsolidateAccountTenantsMappingItemsDto](#consolidateaccounttenantsmappingitemsdto) ] |  | No |
| multicompanyReport | boolean |  | No |
| name | string |  | No |
| report | string |  | No |
| tenantId | long |  | No |
| tenants | [ integer ] |  | No |

### ConsolidationAccountAutoMapResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountAutoMap | [ [ConsolidateAccountTenantsMappingItemsDto](#consolidateaccounttenantsmappingitemsdto) ] |  | No |
| tenantAccountData | object |  | No |

### ConsolidationContactAutoMapResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactAutoMap | [ [ConsolidateAccountTenantsMappingItemsDto](#consolidateaccounttenantsmappingitemsdto) ] |  | No |
| tenantContactData | object |  | No |

### ContactData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string |  | No |
| contactCodeWithName | string |  | No |
| contactName | string |  | No |
| contactSeqCode | string |  | No |
| email | string |  | No |
| tenantId | long |  | No |

### ContactOpeningDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amountDue | number |  | No |
| contactCode | string |  | No |
| contactName | string |  | No |
| currency | string |  | No |
| depositTo | string |  | No |
| documentDate | dateTime |  | No |
| documentDateDisplay | string |  | No |
| documentNumber | string |  | No |
| documentSeqCode | string |  | No |
| documentType | string |  | No |
| dueDate | dateTime |  | No |
| dueDateDisplay | string |  | No |
| exchangeRate | number |  | No |
| id | long |  | No |
| memo | string |  | No |
| payFrom | string |  | No |
| purchaseOrderRefNumber | string |  | No |
| supplierInvoiceNo | string |  | No |
| taxAmount | number |  | No |
| totalAmount | number |  | No |
| totalAmountInBaseCurrency | number |  | No |

### ContactOpeningSummaryDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string |  | No |
| contactName | string |  | No |
| contactSeqCode | string |  | No |
| openingAdvPayments | number |  | No |
| openingBills | number |  | No |
| openingCreditNotes | number |  | No |
| openingDebitNotes | number |  | No |
| openingInvoices | number |  | No |
| openingPrePayments | number |  | No |

### CustomFieldItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | Dimension Id<br/>_Example:_ `11567` | No |
| label | string | Custom Field Name<br/>_Example:_ `"Label"` | Yes |
| module | string | Supported Modules | No |
| value | object | Dimension Value<br/>_Example:_ `"XYZ"` | No |

### CustomPagingResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ object ] |  | No |
| pageNumber | integer |  | No |
| pageSize | integer |  | No |
| totalElements | integer |  | No |
| totalPages | integer |  | No |

### CustomPagingResponse«ConsolidateAccountTenantsResponseDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ConsolidateAccountTenantsResponseDto](#consolidateaccounttenantsresponsedto) ] |  | No |
| pageNumber | integer |  | No |
| pageSize | integer |  | No |
| totalElements | integer |  | No |
| totalPages | integer |  | No |

### CustomPagingResponse«StatementOfAccountDataPeriod»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [StatementOfAccountDataPeriod](#statementofaccountdataperiod) ] |  | No |
| pageNumber | integer |  | No |
| pageSize | integer |  | No |
| totalElements | integer |  | No |
| totalPages | integer |  | No |

### CustomViewRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accounts | [ string ] |  | No |
| amountInPrimaryCurrency | boolean |  | No |
| baseCurrency | string |  | No |
| basis | string | Accounting Basis<br/>_Enum:_ `"ACCRUAL"`, `"CASH"` | No |
| columnBy | string | _Enum:_ `"TOTAL_ONLY"`, `"DAYS"`, `"WEEKS"`, `"MONTHS"`, `"QUARTERS"`, `"YEARS"`, `"CONTACTS"`, `"PRODUCTS"`, `"CLASS"`, `"LOCATION"` | No |
| contacts | [ string ] |  | No |
| custom_field | string |  | No |
| dateMacro | string | _Enum:_ `"ALL_DATES"`, `"CUSTOM"`, `"TODAY"`, `"THIS_WEEK"`, `"THIS_WEEK_TO_DATE"`, `"THIS_MONTH"`, `"THIS_MONTH_TO_DATE"`, `"THIS_QUARTER"`, `"THIS_QUARTER_TO_DATE"`, `"THIS_YEAR"`, `"THIS_YEAR_TO_DATE"`, `"THIS_YEAR_TO_LAST_MONTH"`, `"YESTERDAY"`, `"RECENT"`, `"LAST_WEEK"`, `"LAST_WEEK_TO_DATE"`, `"LAST_MONTH"`, `"LAST_MONTH_TO_DATE"`, `"LAST_QUARTER"`, `"LAST_QUARTER_TO_DATE"`, `"LAST_YEAR"`, `"LAST_YEAR_TO_DATE"`, `"SINCE_30_DAYS_AGO"`, `"SINCE_60_DAYS_AGO"`, `"SINCE_90_DAYS_AGO"`, `"SINCE_365_DAYS_AGO"`, `"NEXT_WEEK"`, `"NEXT_4_WEEKS"`, `"NEXT_MONTH"`, `"NEXT_QUARTER"`, `"NEXT_YEAR"` | No |
| endDate | string | End date<br/>_Example:_ `"31-12-2022"` | No |
| fileFormat | string | _Enum:_ `"XLS"`, `"PDF"`, `"CSV"` | No |
| periods | [ [Period](#period) ] |  | No |
| primaryCurrency | string |  | No |
| products | [ string ] |  | No |
| save | boolean |  | No |
| startDate | string | Start date<br/>_Example:_ `"01-01-2019"` | No |
| strict | boolean |  | No |
| vid | long |  | No |
| vname | string |  | No |

### CustomerTdsReportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string |  | No |
| customerName | string |  | No |
| customerTan | string |  | No |
| tdsDeducted | number |  | No |

### DashboardPNLInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountPNLInfo | [AccountPNLInfo](#accountpnlinfo) |  | No |
| monthStartDate | long |  | No |

### DataDtoHSN

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| camt | number |  | No |
| csamt | number |  | No |
| desc | string |  | No |
| hsn_sc | string |  | No |
| iamt | number |  | No |
| num | integer |  | No |
| qty | number |  | No |
| rt | number |  | No |
| samt | number |  | No |
| txval | number |  | No |
| uqc | string |  | No |

### DayBookResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string |  | No |
| contactName | string |  | No |
| creditAmount | string |  | No |
| debitAmount | string |  | No |
| documentCode | string |  | No |
| documentSeqCode | string |  | No |
| documentType | string | _Enum:_ `"QUOTATION"`, `"INVOICE"`, `"RECEIVE_PAYMENT"`, `"FULFILLMENT"`, `"PURCHASE_ORDER"`, `"BILL"`, `"EXPENSE_BILL"`, `"MAKE_PAYMENT"`, `"GOODS_RECEIPT"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"JOURNAL_ENTRY"`, `"PURCHASE_RETURN"`, `"BANK_DEPOSIT"`, `"SALES_RETURN"`, `"STOCK_ADJUSTMENT"`, `"ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"BUILD_ASSEMBLY"`, `"SALES_TAX_PAYMENT"`, `"OTHER"`, `"INVENTORY"` | No |
| documentTypeName | string |  | No |
| totalAmount | string |  | No |
| transactionDate | string |  | No |

### DeclarationSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactEmail | string |  | No |
| contactPerson | string |  | No |
| contactTel | string |  | No |
| declarantId | string |  | No |
| designation | string |  | No |
| ideclareInfoIsTrue | boolean |  | No |
| iunderstandPenalties | boolean |  | No |
| nameOfDeclarant | string |  | No |

### DefermentSchemeSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box16NetGst | number |  | No |
| box17ImportGstPayable | number |  | No |
| box17ImportGstPayableApplied | boolean |  | No |
| box18TaxPaidToIRAS | number |  | No |
| box19TotalGoodsValue | number |  | No |
| box19TotalGoodsValueApplied | boolean |  | No |

### DeferredAmortizationScheduleWaterfallDetail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string |  | No |
| contactName | string |  | No |
| currency | string |  | No |
| deferredExpenseAccountCode | string |  | No |
| deferredExpenseAccountName | string |  | No |
| deferredExpenseBalance | number |  | No |
| expenseAccountCode | string |  | No |
| expenseAccountName | string |  | No |
| periods | object |  | No |
| priorUnrecognized | number |  | No |
| productCode | string |  | No |
| productName | string |  | No |
| sourceDocumentCode | string |  | No |
| sourceDocumentItemCode | string |  | No |
| sourceDocumentSeqCode | string |  | No |
| sourceType | string |  | No |
| total | number |  | No |
| unplannedDeferredExpense | number |  | No |

### DeferredRevenueByCustomerDetailResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| sourceDocumentCode | string |  | No |
| sourceDocumentSeqCode | string |  | No |
| sourceType | string |  | No |

### DeferredRevenueByCustomerRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fromDate | dateTime | From date<br/>_Example:_ `"01-01-2023"` | Yes |
| toDate | dateTime | To date<br/>_Example:_ `"31-05-2023"` | Yes |

### DeferredRevenueByCustomerResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| contactCode | string |  | No |
| contactName | string |  | No |
| details | [ [DeferredRevenueByCustomerDetailResponse](#deferredrevenuebycustomerdetailresponse) ] |  | No |

### DeferredRevenueByProductDetailResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| sourceDocumentCode | string |  | No |
| sourceDocumentSeqCode | string |  | No |
| sourceType | string |  | No |

### DeferredRevenueByProductRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fromDate | dateTime | From date<br/>_Example:_ `"01-01-2023"` | Yes |
| toDate | dateTime | To date<br/>_Example:_ `"31-05-2023"` | Yes |

### DeferredRevenueByProductResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| details | [ [DeferredRevenueByProductDetailResponse](#deferredrevenuebyproductdetailresponse) ] |  | No |
| productCode | string |  | No |
| productName | string |  | No |

### DeferredRevenueWaterfallDetail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string |  | No |
| contactName | string |  | No |
| currency | string |  | No |
| deferredRevenueAccountCode | string |  | No |
| deferredRevenueAccountName | string |  | No |
| deferredRevenueBalance | number |  | No |
| periods | object |  | No |
| priorUnrecognized | number |  | No |
| productCode | string |  | No |
| productName | string |  | No |
| revenueAccountCode | string |  | No |
| revenueAccountName | string |  | No |
| sourceDocumentCode | string |  | No |
| sourceDocumentSeqCode | string |  | No |
| sourceType | string |  | No |
| total | number |  | No |
| unplannedDeferredRevenue | number |  | No |

### DeferredRevenueWaterfallDetailRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| asOfDate | dateTime | As of date<br/>_Example:_ `"01-01-2023"` | Yes |
| deferredRevenueAccountCode | string |  | No |
| recognitionAccountCode | string |  | No |

### DeferredRevenueWaterfallDetailResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string |  | No |
| contactName | string |  | No |
| contents | [ [DeferredRevenueWaterfallDetail](#deferredrevenuewaterfalldetail) ] |  | No |
| total | [DeferredRevenueWaterfallTotal](#deferredrevenuewaterfalltotal) |  | No |

### DeferredRevenueWaterfallSummary

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| deferredRevenueAccountCode | string |  | No |
| deferredRevenueAccountName | string |  | No |
| deferredRevenueBalance | number |  | No |
| details | [ [DeferredRevenueWaterfallDetailResponse](#deferredrevenuewaterfalldetailresponse) ] |  | No |
| periods | object |  | No |
| priorUnrecognized | number |  | No |
| revenueAccountCode | string |  | No |
| revenueAccountName | string |  | No |
| total | number |  | No |
| unplannedDeferredRevenue | number |  | No |

### DeferredRevenueWaterfallSummaryRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| asOfDate | dateTime | As of date<br/>_Example:_ `"01-01-2023"` | Yes |

### DeferredRevenueWaterfallSummaryResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contents | [ [DeferredRevenueWaterfallSummary](#deferredrevenuewaterfallsummary) ] |  | No |
| periodLabels | [ string ] |  | No |
| total | [DeferredRevenueWaterfallTotal](#deferredrevenuewaterfalltotal) |  | No |

### DeferredRevenueWaterfallTotal

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| periods | object |  | No |
| priorUnrecognized | number |  | No |
| total | number |  | No |

### DocDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| doc_num | number |  | No |
| docs | [ [Docs](#docs) ] |  | No |

### DocIssued

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| doc_det | [ [DocDetails](#docdetails) ] |  | No |

### Docs

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cancel | number |  | No |
| from | string |  | No |
| net_issue | number |  | No |
| num | number |  | No |
| to | string |  | No |
| totnum | number |  | No |

### DocumentCountDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| count | integer |  | No |

### DocumentKnockOffUpdateDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentType | string | SALES_INVOICE<br/>_Enum:_ `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"PURCHASE_REQUEST"`, `"PURCHASE_REQUEST_FOR_QUOTES"`, `"SUPPLIER_QUOTES"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`, `"ESTIMATE"` | Yes |
| tenantIds | [ long ] | [72107] | Yes |

### DocumentSummaryResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| closedDocumentAmount | number | Total amount of closed documents<br/>_Example:_ `1234.52` | No |
| closedDocumentCount | long | Total closed documents<br/>_Example:_ `821` | No |
| initialStageAmount | number | Total amount of all initial stage documents<br/>_Example:_ `1020.12` | No |
| initialStageCount | long | Total documents at initial stage<br/>_Example:_ `821` | No |
| invoiceAmount | number | Total amount of all invoices<br/>_Example:_ `3010.49` | No |
| invoiceCount | long | Total invoices<br/>_Example:_ `512` | No |
| invoiceDueAmount | number | Total due amount of all invoices<br/>_Example:_ `110.49` | No |

### ElectronicMktSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ovrrschk | boolean |  | No |
| redlvrMktOprLVGChk | boolean |  | No |
| totRedlvrMktOprLVGAmt | number |  | No |
| totRemServAmt | number |  | No |

### ExportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| exp_typ | string |  | No |
| inv | [ [InvDtoExport](#invdtoexport) ] |  | No |

### ExportDtoStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| error_cd | string |  | No |
| error_msg | string |  | No |
| i_dt | string |  | No |
| i_num | string |  | No |
| s_dt | string |  | No |
| s_num | string |  | No |

### ExportOutstandingSalesDORequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| customfield | string |  | No |
| format | string | _Enum:_ `"XLS"`, `"PDF"`, `"CSV"` | No |
| fromDate | dateTime |  | No |
| ids | [ string ] |  | No |
| search | string |  | No |
| toDate | dateTime |  | No |

### FBTInstalmentSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| endDate | string |  | No |
| estimatedTaxForTheYear | long |  | No |
| fbtInstalmentAmount | long |  | No |
| frequency | string |  | No |
| id | long |  | No |
| ifVaryingThisAmount | boolean |  | No |
| reasonCodeForVariation | long |  | No |
| startDate | string |  | No |
| variedAmountPayable | long |  | No |

### FYClosingReportLogReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| closingAmount | number | Closing Amount<br/>_Example:_ `500` | No |
| closingDate | string | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |
| creationDate | string | Creation Date<br/>_Example:_ `"01-12-2020"` | No |
| fromDate | string | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |
| fyChecklist | [FyChecklist](#fychecklist) | Financial Closing Checklist | No |
| fyJEData | [ [FYJEData](#fyjedata) ] | Financial Closing JE Data | No |
| fySettings | [FySettings](#fysettings) | Financial Closing Settings | No |
| id | long | Id<br/>_Example:_ `1` | No |
| jeNumber | string | JE Number<br/>_Example:_ `"JE-0000007"` | No |
| name | string | FY Closing Report<br/>_Example:_ `"Name of FY closing Report"` | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| status | boolean | Status<br/>_Example:_ `true` | No |
| toDate | string | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |

### FYClosingReportLogResp

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| closingAmount | number | Closing Amount<br/>_Example:_ `500` | No |
| closingDate | string | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |
| creationDate | string | Creation Date<br/>_Example:_ `"01-12-2020"` | No |
| fromDate | string | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |
| fyChecklist | [FyChecklist](#fychecklist) | Financial Closing Checklist | No |
| fyJEData | [ [FYJEData](#fyjedata) ] | Financial Closing JE Data | No |
| id | long | Id<br/>_Example:_ `1` | No |
| jeNumber | string | JE Number<br/>_Example:_ `"JE-0000007"` | No |
| name | string | FY Closing Report<br/>_Example:_ `"Name of FY closing Report"` | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| status | boolean | Status<br/>_Example:_ `true` | No |
| toDate | string | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |

### FYJEData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountAmount | number | Account Amount<br/>_Example:_ `"Amount of Account"` | No |
| accountCode | string | Account Code<br/>_Example:_ `"Code of Account"` | No |
| accountName | string | Account Name<br/>_Example:_ `"Name of Account"` | No |
| cdType | string | Credit/Debit Type<br/>_Enum:_ `"CREDIT"`, `"DEBIT"`<br/>_Example:_ `"DEBIT"` | No |

### FieldInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| field | string |  | No |
| message | string |  | No |

### File

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

### FraudPreventionRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| govClientBrowserDoNotTrack | string |  | No |
| govClientBrowserJSUserAgent | string |  | No |
| govClientBrowserPlugins | string |  | No |
| govClientConnectionMethod | string |  | No |
| govClientDeviceID | string |  | No |
| govClientLocalIps | string |  | No |
| govClientLocalIpsTimestamp | string |  | No |
| govClientMultiFactor | string |  | No |
| govClientPublicIP | string |  | No |
| govClientPublicIpTimestamp | string |  | No |
| govClientPublicPort | string |  | No |
| govClientScreens | string |  | No |
| govClientTimezone | string |  | No |
| govClientUserIds | string |  | No |
| govClientWindowSize | string |  | No |
| govVendorForwarded | string |  | No |
| govVendorLicenseIds | string |  | No |
| govVendorProductName | string |  | No |
| govVendorPublicIp | string |  | No |
| govVendorVersion | string |  | No |

### FyChecklist

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| assetDepreciation | boolean |  | No |
| differenceOpening | boolean |  | No |
| documentRevalution | boolean |  | No |
| inventoryAdjustment | boolean |  | No |
| journalentryAdjustment | boolean |  | No |
| recurringDocument | boolean |  | No |

### FySettings

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| closingPeriod | string |  | No |
| id | long |  | No |
| retainedEarningAccount | string |  | No |

### GLAccountBalanceDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCodes | [ string ] |  | No |
| accountGroupId | long |  | No |
| amountInPrimaryCurrency | boolean |  | No |
| baseCurrency | string |  | No |
| basis | string | _Enum:_ `"ACCRUAL"`, `"CASH"` | No |
| customFields | string |  | No |
| fromDate | dateTime |  | No |
| primaryCurrency | string |  | No |
| toDate | dateTime |  | No |

### GSTForm5Data

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| claimSection | [ClaimSection](#claimsection) |  | No |
| declarationSection | [DeclarationSection](#declarationsection) |  | No |
| defermentSchemeSection | [DefermentSchemeSection](#defermentschemesection) |  | No |
| electronicMktSection | [ElectronicMktSection](#electronicmktsection) |  | No |
| otherSchemeSection | [OtherSchemeSection](#otherschemesection) |  | No |
| purchaseSection | [PurchaseSection](#purchasesection) |  | No |
| reasonsSection | [ReasonsSection](#reasonssection) |  | No |
| revChargeLVGSection | [RevChargeLVGSection](#revchargelvgsection) |  | No |
| revenueSection | [RevenueSection](#revenuesection) |  | No |
| supplierLVGSection | [SupplierLVGSection](#supplierlvgsection) |  | No |
| suppliesSection | [SuppliesSection](#suppliessection) |  | No |
| taxesSection | [TaxesSection](#taxessection) |  | No |

### GSTForm7Data

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| declarationSection | [DeclarationSection](#declarationsection) |  | No |
| defermentSchemeSection | [GSTForm7DefermentSchemeSection](#gstform7defermentschemesection) |  | No |
| descriptionOfErrors | string |  | No |
| electronicMktSection | [ElectronicMktSection](#electronicmktsection) |  | No |
| otherSchemeSection | [GSTForm7OtherSchemeSection](#gstform7otherschemesection) |  | No |
| purchaseSection | [PurchaseSection](#purchasesection) |  | No |
| reasonsSection | [ReasonsSection](#reasonssection) |  | No |
| revChargeLVGSection | [RevChargeLVGSection](#revchargelvgsection) |  | No |
| revenueSection | [GSTForm7RevenueSection](#gstform7revenuesection) |  | No |
| supplierLVGSection | [SupplierLVGSection](#supplierlvgsection) |  | No |
| suppliesSection | [SuppliesSection](#suppliessection) |  | No |
| taxesSection | [GSTForm7TaxesSection](#gstform7taxessection) |  | No |

### GSTForm7DefermentSchemeSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box18RevisedNetGst | number |  | No |
| box19PreviousImportGstPayable | number |  | No |
| box20DiffInGstPayableToIRAS | number |  | No |
| box21DiffInNetGst | number |  | No |
| box22DiffInTotalTaxToIRAS | number |  | No |
| box23RevisedTotalTaxToIRAS | number |  | No |
| box24RevisedValueOfGoodsImported | number |  | No |

### GSTForm7OtherSchemeSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box11GoodsUnderScheme | number |  | No |
| box12ClaimRefundTourist | number |  | No |
| box12ClaimRefundTouristApplied | boolean |  | No |
| box13BadDebtRelief | number |  | No |
| box13BadDebtReliefApplied | boolean |  | No |
| box14Preregistration | number |  | No |
| box14PreregistrationApplied | boolean |  | No |

### GSTForm7RevenueSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box15Revenue | number |  | No |
| box16GstUnderReverseCharge | number |  | No |
| box16GstUnderReverseChargeApplied | boolean |  | No |
| box17ThirdPartyElectronicSupply | number |  | No |
| box17ThirdPartyElectronicSupplyApplied | boolean |  | No |

### GSTForm7TaxesSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box10DiffInGst | number |  | No |
| box6OutputTaxDue | number |  | No |
| box7RefundsClaimed | number |  | No |
| box8GstToBePaidToIras | number |  | No |
| box9PreviousYearGst | number |  | No |

### GSTFormFiveElementDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountGroupNames | [ string ] | JournalEntry group names of nature income<br/>_Example:_ `["Income"]` | No |
| amount | number | Amount for the box<br/>_Example:_ `100` | No |
| boxNumber | integer | GST Form five box number<br/>_Example:_ `1` | No |
| label | string | Element label<br/>_Example:_ `"Total value of standard rated supplies"` | No |
| sequenceNumber | integer | Sequence number of the element<br/>_Example:_ `2` | No |
| taxCodes | [ string ] | Tax codes list which is included in box<br/>_Example:_ `["SR (7%)","DS (7%)","SRCA-C (7%)"]` | No |
| type | string | Element type<br/>_Enum:_ `"GROUP"`, `"ELEMENT"`, `"TOTAL"`, `"NUMBER"`, `"TEXT"`<br/>_Example:_ `"ELEMENT"` | No |

### GSTFormFiveExportDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| numberFieldValues | object | Number field values<br/>_Example:_ `{"field_15":"100","field_16":"200","field_17":"300","field_20":"400","field_21":"500"}` | No |
| startAndEndDate | [StartAndEndDate](#startandenddate) | Start & end dates | No |
| textFieldValues | object | Text field values<br/>_Example:_ `{"field_24":"James","field_25":"123","field_26":"Manager","field_27":"James","field_28":"999","field_29":"james@mailinator.com"}` | No |

### GSTR1AdvanceTaxLiabilityDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| centralTaxAmount | number | Central Tax Amount<br/>_Example:_ `0` | No |
| cessAmount | number | Cess Amount<br/>_Example:_ `0` | No |
| customerName | string | Customer Name<br/>_Example:_ `"Deskera Customer"` | No |
| date | string | Date<br/>_Example:_ `"2020-01-01"` | No |
| gsttin | string | GSTIN<br/>_Example:_ `"27AAAAA0000A1Z5"` | No |
| integratedTaxAmount | number | Integrated Tax Amount<br/>_Example:_ `0` | No |
| paymentNo | string | Payment Number<br/>_Example:_ `"P-0000001"` | No |
| placeOfSupply | string | Place of Supply<br/>_Example:_ `"Maharashtra"` | No |
| stateTaxAmount | number | State Tax Amount<br/>_Example:_ `0` | No |
| supplyType | string | Supply Type<br/>_Example:_ `"INTER / INTRA"` | No |
| taxRate | number | Tax Rate<br/>_Example:_ `5` | No |
| taxableAmount | number | Taxable Amount<br/>_Example:_ `0` | No |
| totalAmountIncludingTax | number | Total Amount including Tax<br/>_Example:_ `0` | No |
| totalTaxAmount | number | Total Tax Amount<br/>_Example:_ `0` | No |

### GSTR1B2BAndB2ClDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| centralTaxAmount | number | Central Tax Amount<br/>_Example:_ `0` | No |
| cessAmount | number | Cess Amount<br/>_Example:_ `0` | No |
| customerName | string | Customer Name<br/>_Example:_ `"Deskera Customer"` | No |
| date | string | Date<br/>_Example:_ `"2020-01-01"` | No |
| gsttin | string | GSTIN<br/>_Example:_ `"27AAAAA0000A1Z5"` | No |
| integratedTaxAmount | number | Integrated Tax Amount<br/>_Example:_ `0` | No |
| invoiceNo | string | Invoice Number<br/>_Example:_ `"SI0000001"` | No |
| placeOfSupply | string | Place of Supply<br/>_Example:_ `"Maharashtra"` | No |
| stateTaxAmount | number | State Tax Amount<br/>_Example:_ `0` | No |
| taxRate | number | Tax Rate<br/>_Example:_ `5` | No |
| taxableAmount | number | Taxable Amount<br/>_Example:_ `0` | No |
| totalAmountIncludingTax | number | Total Amount including Tax<br/>_Example:_ `0` | No |
| totalTaxAmount | number | Total Tax Amount<br/>_Example:_ `0` | No |

### GSTR1B2CSDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| centralTaxAmount | number | Central Tax Amount<br/>_Example:_ `0` | No |
| cessAmount | number | Cess Amount<br/>_Example:_ `0` | No |
| customerName | string | Customer Name<br/>_Example:_ `"Deskera Customer"` | No |
| date | string | Date<br/>_Example:_ `"2020-01-01"` | No |
| gsttin | string | GSTIN<br/>_Example:_ `"27AAAAA0000A1Z5"` | No |
| integratedTaxAmount | number | Integrated Tax Amount<br/>_Example:_ `0` | No |
| invoiceNo | string | Invoice Number<br/>_Example:_ `"SI0000001"` | No |
| placeOfSupply | string | Place of Supply<br/>_Example:_ `"Maharashtra"` | No |
| stateTaxAmount | number | State Tax Amount<br/>_Example:_ `0` | No |
| supplyType | string | Supply Type<br/>_Example:_ `"INTER / INTRA"` | No |
| taxRate | number | Tax Rate<br/>_Example:_ `5` | No |
| taxableAmount | number | Taxable Amount<br/>_Example:_ `0` | No |
| totalAmountIncludingTax | number | Total Amount including Tax<br/>_Example:_ `0` | No |
| totalTaxAmount | number | Total Tax Amount<br/>_Example:_ `0` | No |
| type | string | Type<br/>_Example:_ `"Sales"` | No |

### GSTR1B2CSResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| centralTaxAmount | number | Central Tax Amount<br/>_Example:_ `0` | No |
| cessAmount | number | Cess Amount<br/>_Example:_ `0` | No |
| integratedTaxAmount | number | Integrated Tax Amount<br/>_Example:_ `0` | No |
| placeOfSupply | string | Place of Supply<br/>_Example:_ `"Maharashtra"` | No |
| stateTaxAmount | number | State Tax Amount<br/>_Example:_ `0` | No |
| supplyType | string | Supply Type<br/>_Example:_ `"INTER / INTRA"` | No |
| taxRate | number | Tax Rate<br/>_Example:_ `5` | No |
| taxableAmount | number | Taxable Amount<br/>_Example:_ `0` | No |
| totalAmountIncludingTax | number | Total Amount including Tax<br/>_Example:_ `0` | No |
| totalTaxAmount | number | Total Tax Amount<br/>_Example:_ `0` | No |

### GSTR1CdnrExportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| centralTaxAmount | number | Central Tax Amount<br/>_Example:_ `0` | No |
| cessAmount | number | Cess Amount<br/>_Example:_ `0` | No |
| customerName | string | Customer Name<br/>_Example:_ `"Deskera Customer"` | No |
| date | string | Date<br/>_Example:_ `"2020-01-01"` | No |
| gsttin | string | GSTIN<br/>_Example:_ `"27AAAAA0000A1Z5"` | No |
| integratedTaxAmount | number | Integrated Tax Amount<br/>_Example:_ `0` | No |
| invoiceDate | dateTime | Invoice Date<br/>_Example:_ `"2021-01-01"` | No |
| noteNo | string | Note Number<br/>_Example:_ `"P-0000001"` | No |
| placeOfSupply | string | Place of Supply<br/>_Example:_ `"Maharashtra"` | No |
| stateTaxAmount | number | State Tax Amount<br/>_Example:_ `0` | No |
| supplyType | string | Supply Type<br/>_Example:_ `"INTER STATE"` | No |
| taxRate | number | Tax Rate<br/>_Example:_ `5` | No |
| taxableAmount | number | Taxable Amount<br/>_Example:_ `0` | No |
| totalAmountIncludingTax | number | Total Amount including Tax<br/>_Example:_ `0` | No |
| totalTaxAmount | number | Total Tax Amount<br/>_Example:_ `0` | No |

### GSTR1CdnurExportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| centralTaxAmount | number | Central Tax Amount<br/>_Example:_ `0` | No |
| cessAmount | number | Cess Amount<br/>_Example:_ `0` | No |
| customerName | string | Customer Name<br/>_Example:_ `"Deskera Customer"` | No |
| date | string | Date<br/>_Example:_ `"2020-01-01"` | No |
| gsttin | string | GSTIN<br/>_Example:_ `"27AAAAA0000A1Z5"` | No |
| integratedTaxAmount | number | Integrated Tax Amount<br/>_Example:_ `0` | No |
| noteNo | string | Note Number<br/>_Example:_ `"P-0000001"` | No |
| placeOfSupply | string | Place of Supply<br/>_Example:_ `"Maharashtra"` | No |
| stateTaxAmount | number | State Tax Amount<br/>_Example:_ `0` | No |
| supplyType | string | Supply Type<br/>_Example:_ `"INTER STATE"` | No |
| taxRate | number | Tax Rate<br/>_Example:_ `5` | No |
| taxableAmount | number | Taxable Amount<br/>_Example:_ `0` | No |
| totalAmountIncludingTax | number | Total Amount including Tax<br/>_Example:_ `0` | No |
| totalTaxAmount | number | Total Tax Amount<br/>_Example:_ `0` | No |
| type | string | type<br/>_Example:_ `"EXPORT WPAY"` | No |

### GSTR1DetailDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| gstr1AdvanceTaxLiabilityDtos | [ [GSTR1AdvanceTaxLiabilityDto](#gstr1advancetaxliabilitydto) ] |  | No |
| gstr1B2BAndB2ClDtos | [ [GSTR1B2BAndB2ClDto](#gstr1b2bandb2cldto) ] |  | No |
| gstr1B2CSDtos | [ [GSTR1B2CSDto](#gstr1b2csdto) ] |  | No |
| gstr1CdnrDtos | [ [GSTR1CdnrExportDto](#gstr1cdnrexportdto) ] |  | No |
| gstr1CdnurDtos | [ [GSTR1CdnurExportDto](#gstr1cdnurexportdto) ] |  | No |
| gstr1ExportDtos | [ [GSTR1ExportDto](#gstr1exportdto) ] |  | No |
| gstr1HSNDtos | [ [GSTR1HSNDto](#gstr1hsndto) ] |  | No |
| gstr1NilDtos | [ [Gstr1NilResponseDto](#gstr1nilresponsedto) ] |  | No |

### GSTR1ExportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| centralTaxAmount | number | Central Tax Amount<br/>_Example:_ `0` | No |
| cessAmount | number | Cess Amount<br/>_Example:_ `0` | No |
| customerName | string | Customer Name<br/>_Example:_ `"Deskera Customer"` | No |
| date | string | Date<br/>_Example:_ `"2020-01-01"` | No |
| exportType | string | Export Type<br/>_Example:_ `"WPAY / WOPAY"` | No |
| gsttin | string | GSTIN<br/>_Example:_ `"27AAAAA0000A1Z5"` | No |
| integratedTaxAmount | number | Integrated Tax Amount<br/>_Example:_ `0` | No |
| invoiceNo | string | Invoice Number<br/>_Example:_ `"SI0000001"` | No |
| placeOfSupply | string | Place of Supply<br/>_Example:_ `"Maharashtra"` | No |
| stateTaxAmount | number | State Tax Amount<br/>_Example:_ `0` | No |
| taxRate | number | Tax Rate<br/>_Example:_ `5` | No |
| taxableAmount | number | Taxable Amount<br/>_Example:_ `0` | No |
| totalAmountIncludingTax | number | Total Amount including Tax<br/>_Example:_ `0` | No |
| totalTaxAmount | number | Total Tax Amount<br/>_Example:_ `0` | No |

### GSTR1HSNDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| centralTaxAmount | number | Central Tax Amount<br/>_Example:_ `1012100` | No |
| cessAmount | number | Cess Amount<br/>_Example:_ `1012100` | No |
| description | string | Description<br/>_Example:_ `"01012100"` | No |
| hsnCode | string | HSN Code<br/>_Example:_ `"01012100"` | No |
| integratedTaxAmount | number | Integrated Tax Amount<br/>_Example:_ `1012100` | No |
| invoiceNo | string | Invoice Number<br/>_Example:_ `"01012100"` | No |
| stateTaxAmount | number | State/UT Tax Amount<br/>_Example:_ `1012100` | No |
| taxRate | number | Tax Rate<br/>_Example:_ `18` | No |
| totalQuantity | double | Total Quantity<br/>_Example:_ `1012100` | No |
| totalTaxAmount | number | Total Tax Amount<br/>_Example:_ `1012100` | No |
| totalValue | number | Total Value<br/>_Example:_ `1012100` | No |
| uqc | string | UQC<br/>_Example:_ `"01012100"` | No |

### GSTR1HSNResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| centralTaxAmount | number | Central Tax Amount<br/>_Example:_ `1012100` | No |
| cessAmount | number | Cess Amount<br/>_Example:_ `1012100` | No |
| description | string | Description<br/>_Example:_ `"01012100"` | No |
| hsnCode | string | HSN Code<br/>_Example:_ `"01012100"` | No |
| integratedTaxAmount | number | Integrated Tax Amount<br/>_Example:_ `1012100` | No |
| stateTaxAmount | number | State/UT Tax Amount<br/>_Example:_ `1012100` | No |
| totalQuantity | double | Total Quantity<br/>_Example:_ `1012100` | No |
| totalTaxAmount | number | Total Tax Amount<br/>_Example:_ `1012100` | No |
| totalTaxableAmount | number | Cess Amount<br/>_Example:_ `1012100` | No |
| totalValue | number | Total Value<br/>_Example:_ `1012100` | No |

### GSTR3BDetailDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| centralTaxAmount | number | Central Tax Amount<br/>_Example:_ `0.07` | No |
| cessAmount | number | Cess Amount<br/>_Example:_ `0` | No |
| date | dateTime | Date<br/>_Example:_ `"2019-04-08"` | No |
| documentType | string | Document Type<br/>_Example:_ `"Sales Invoice"` | No |
| gstin | string | GSTIN<br/>_Example:_ `"18AABCU9603R1ZM"` | No |
| integratedTaxAmount | number | Integrated Tax Amount<br/>_Example:_ `0` | No |
| personName | string | Person Name<br/>_Example:_ `"RD Customer in  Maharashtra"` | No |
| placeOfSupply | string | Place of Supply<br/>_Example:_ `"Maharashtra"` | No |
| stateTaxAmount | number | State Tax Amount<br/>_Example:_ `0.07` | No |
| taxableAmount | number | Taxable Amount<br/>_Example:_ `0.82` | No |
| totalAmountIncludingTax | number | Total Amount including Tax<br/>_Example:_ `0.96` | No |
| totalTaxAmount | number | Total Tax Amount<br/>_Example:_ `0.14` | No |
| transactionNumber | string | Transaction Number<br/>_Example:_ `"SI/18-19/007-139"` | No |

### GSTReturnNZReportReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filingYear | integer | Report Filing Year<br/>_Example:_ `2020` | No |
| frequency | string | MONTHLY<br/>_Example:_ `"MONTHLY"` | No |
| fromDate | string | YYYY-MM-DD<br/>_Example:_ `"2020-01-01"` | No |
| id | long | Report Id<br/>_Example:_ `1` | No |
| name | string | GST Return Report<br/>_Example:_ `"Name of GST Return Report"` | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| reportType | string | Report Type<br/>_Example:_ `"GST Return Report Type"` | No |
| toDate | string | YYYY-MM-DD<br/>_Example:_ `"2020-12-31"` | No |

### GlobalDiscountDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string |  | No |
| amount | number |  | No |
| isPercent | boolean |  | No |
| isSubTotalOnly | boolean |  | No |
| name | string |  | No |
| percent | number |  | No |

### GstIndiaDetailView

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| gstrDataSummary | [GstrDataSummary](#gstrdatasummary) |  | No |
| invoices | [ [Invoice](#invoice) ] |  | No |

### GstNewZealandActivityStatementReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| balance | number | Balance<br/>_Example:_ `500` | No |
| dueDate | string | yyyy-MM-dd<br/>_Example:_ `"2020-12-28"` | No |
| filingYear | integer | Report Filing Year<br/>_Example:_ `2020` | No |
| frequency | string | MONTHLY<br/>_Example:_ `"MONTHLY"` | No |
| fromDate | string | yyyy-MM-dd<br/>_Example:_ `"2020-12-28"` | No |
| name | string | Activity Report<br/>_Example:_ `"Name of GST Return Report"` | No |
| paymentCalculation | [PaymentCalculation](#paymentcalculation) | Payment Calculation Section | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| provisionalTaxCalculation | [ProvisionalTaxCalculation](#provisionaltaxcalculation) | Provisional Tax Calculation Section | No |
| purchasesAndExpensesSection | [PurchasesAndExpensesSection](#purchasesandexpensessection) | Purchase and Expense Section | No |
| reportSettings | [GstReturnNewZealandSettingsDto](#gstreturnnewzealandsettingsdto) | Report Settings | No |
| reportType | string | Report Type<br/>_Example:_ `"GST Return Report Type"` | No |
| returnDetails | [ReturnDetailsSection](#returndetailssection) | Return Details Section | No |
| returnDetailsRatio | [ReturnDetailsRatio](#returndetailsratio) | Return Details Ration Section | No |
| returnDetailsStandard | [ReturnDetailsStandard](#returndetailsstandard) | Return Details Standard Section | No |
| salesAndIncomeSection | [SalesAndIncomeSection](#salesandincomesection) | Sales and Income Section | No |
| tempGSTReturnLogReportId | string | Temporary GST Return log report ID | No |
| toDate | string | yyyy-MM-dd<br/>_Example:_ `"2020-12-28"` | No |

### GstNewZealandActivityStatementResp

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| balance | number | Balance<br/>_Example:_ `500` | No |
| creationDate | string | Creation Date<br/>_Example:_ `"01-12-2020"` | No |
| dueDate | string | yyyy-MM-dd<br/>_Example:_ `"2020-12-28"` | No |
| filingYear | integer | Report Filing Year<br/>_Example:_ `2020` | No |
| frequency | string | MONTHLY<br/>_Example:_ `"MONTHLY"` | No |
| fromDate | string | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |
| id | long | Id<br/>_Example:_ `1` | No |
| name | string | GST Return Report<br/>_Example:_ `"Name of GST Return Report"` | No |
| paymentCalculation | [PaymentCalculation](#paymentcalculation) | Payment Calculation Section | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| provisionalTaxCalculation | [ProvisionalTaxCalculation](#provisionaltaxcalculation) | Provisional Tax Calculation Section | No |
| purchasesAndExpensesSection | [PurchasesAndExpensesSection](#purchasesandexpensessection) | Purchase and Expense Section | No |
| reportSettings | [GstReturnNewZealandSettingsDto](#gstreturnnewzealandsettingsdto) | Report Settings | No |
| reportType | string | Report Type<br/>_Example:_ `"GST Return Report Type"` | No |
| returnDetails | [ReturnDetailsSection](#returndetailssection) | Return Details Section | No |
| returnDetailsRatio | [ReturnDetailsRatio](#returndetailsratio) | Return Details Ration Section | No |
| returnDetailsStandard | [ReturnDetailsStandard](#returndetailsstandard) | Return Details Standard Section | No |
| salesAndIncomeSection | [SalesAndIncomeSection](#salesandincomesection) | Sales and Income Section | No |
| status | boolean | Status<br/>_Example:_ `true` | No |
| tempGSTReturnLogReportId | string | Temporary GST Return log report ID | No |
| toDate | string | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |

### GstReturnNewZealandSettingsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| deleted | boolean |  | No |
| filingFrequency | string |  | No |
| firstPeriod | integer |  | No |
| gstNo | string |  | No |
| provisionalTaxCalculation | string |  | No |
| taxAccountBasis | string |  | No |

### GstReturnNewZealandSettingsReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filingFrequency | string | NONE/MONTHLY/TWO-MONTHLY/QUARTERLY/ANNUALLY<br/>_Example:_ `"TWO-MONTHLY"` | No |
| firstPeriod | integer | 1/2/3<br/>_Example:_ `1` | No |
| gstNo | string | GST-NUMBER/12345678909<br/>_Example:_ `12345678909` | No |
| provisionalTaxCalculation | string | STANDARD/ESTIMATE/RATIO<br/>_Example:_ `"STANDARD"` | No |
| taxAccountBasis | string | INVOICE BASIS<br/>_Example:_ `"INVOICE BASIS"` | No |

### GstReturnNewZealandSettingsResp

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| deleted | boolean | True/False<br/>_Example:_ `true` | No |
| filingFrequency | string | NONE/MONTHLY/TWO-MONTHLY/QUARTERLY/ANNUALLY<br/>_Example:_ `"TWO-MONTHLY"` | No |
| firstPeriod | integer | 1/2/3<br/>_Example:_ `1` | No |
| gstNo | string | GST-NUMBER/12345678909<br/>_Example:_ `12345678909` | No |
| id | long | Id<br/>_Example:_ `1` | No |
| provisionalTaxCalculation | string | STANDARD/ESTIMATE/RATIO<br/>_Example:_ `"STANDARD"` | No |
| taxAccountBasis | string | INVOICE BASIS<br/>_Example:_ `"INVOICE BASIS"` | No |

### GstSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amountG1IncludeGST | boolean |  | No |
| capitalPurchase | long |  | No |
| endDate | string |  | No |
| exportSales | long |  | No |
| frequency | string |  | No |
| id | long |  | No |
| nonCapitalPurchase | long |  | No |
| otherGST | long |  | No |
| startDate | string |  | No |
| totalSales | long |  | No |

### GstTaxResponseNode

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amountBeforeGstInBaseCurr | number |  | No |
| amountWithGstInBaseCurr | number |  | No |
| children | [ [GstTaxResponseNode](#gsttaxresponsenode) ] |  | No |
| code | string |  | No |
| expandable | boolean |  | No |
| groupName | string |  | No |
| gstAmountInBaseCurr | number |  | No |
| level | integer |  | No |
| name | string |  | No |
| type | integer |  | No |

### GstTransactionDetailResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [GstTransactionDetails](#gsttransactiondetails) ] |  | No |
| pageSize | integer |  | No |
| total | [GstTransactionDetails](#gsttransactiondetails) |  | No |
| totalElements | integer |  | No |
| totalPages | integer |  | No |

### GstTransactionDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amountBeforeGstInBaseCurr | number |  | No |
| amountBeforeGstInTaxResidencyCurr | number |  | No |
| amountBeforeGstInTransCurr | number |  | No |
| amountWithGstInBaseCurr | number |  | No |
| amountWithGstInTaxResidencyCurr | number |  | No |
| amountWithGstInTransCurr | number |  | No |
| contactName | string |  | No |
| currency | string |  | No |
| exchangeRate | number |  | No |
| gstAmountInBaseCurr | number |  | No |
| gstAmountInTaxResidencyCurr | number |  | No |
| gstAmountInTransCurr | number |  | No |
| gstApplied | string |  | No |
| gstExchangeRate | number |  | No |
| jeNo | string |  | No |
| transactionDate | dateTime |  | No |
| transactionId | string |  | No |
| transactionType | string |  | No |

### GstTransactionRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| limit | integer |  | No |
| page | integer |  | No |
| startAndEndDate | [StartAndEndDate](#startandenddate) | Start & end dates | No |
| taxCode | string | Tax code for which transactions are to be fetched | No |
| taxType | string | Sales or Purchase transaction<br/>_Enum:_ `"SALES"`, `"PURCHASE"` | No |

### GstnAuthTokenRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appKey | string |  | No |
| enc_asp_secret | string |  | No |
| enc_key | string |  | No |
| encryptedAppKey | string |  | No |
| gstin | string |  | No |
| ipUser | string |  | No |
| message_id | string |  | No |
| otp | string |  | No |
| session_id | string |  | No |
| username | string |  | No |

### GstnAuthTokenResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appKey | string |  | No |
| asp_secret_key | string |  | No |
| auth_token | string |  | No |
| encryptedAppKey | string |  | No |
| error | [GstnOtpError](#gstnotperror) |  | No |
| expiry | string |  | No |
| ipUser | string |  | No |
| message_id | string |  | No |
| sek | string |  | No |
| session_id | string |  | No |
| status_cd | string |  | No |

### GstnOtpError

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| error_cd | string |  | No |
| message | string |  | No |

### GstnOtpRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| gstin | string |  | No |
| username | string |  | No |

### GstnOtpResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appKey | string |  | No |
| enc_asp_secret | string |  | No |
| enc_key | string |  | No |
| encryptedAppKey | string |  | No |
| error | [GstnOtpError](#gstnotperror) |  | No |
| ipUser | string |  | No |
| message | string |  | No |
| message_id | string |  | No |
| responseCode | string |  | No |
| session_id | string |  | No |
| status_cd | string |  | No |

### Gstr1CheckStatusDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appKey | string |  | No |
| asp_secret_key | string |  | No |
| auth_token | string |  | No |
| currStatus | string |  | No |
| gstin | string |  | No |
| id | long |  | No |
| ipUser | string |  | No |
| message_id | string |  | No |
| returnPeriod | string |  | No |
| sek | string |  | No |
| session_id | string |  | No |
| username | string |  | No |

### Gstr1DetailResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| gstr1B2CSDtos | [ [GSTR1B2CSResponseDto](#gstr1b2csresponsedto) ] |  | No |
| gstr1HSNDtos | [ [GSTR1HSNResponseDto](#gstr1hsnresponsedto) ] |  | No |
| gstr1NilDtos | [ [Gstr1NilResponseDto](#gstr1nilresponsedto) ] |  | No |
| gstr1TransactionSummaryDtos | [ [Gstr1TransactionSummaryDto](#gstr1transactionsummarydto) ] |  | No |
| reportId | long |  | No |

### Gstr1FileRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appKey | string |  | No |
| asp_secret_key | string |  | No |
| auth_token | string |  | No |
| gstin | string |  | No |
| id | long |  | No |
| ipUser | string |  | No |
| message_id | string |  | No |
| otp | string |  | No |
| pan | string |  | No |
| returnPeriod | string |  | No |
| sek | string |  | No |
| session_id | string |  | No |
| sumType | string |  | No |
| username | string |  | No |

### Gstr1NilResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| exemptAmount | number |  | No |
| nilAmount | number |  | No |
| nonGstAmount | number |  | No |
| supplyType | string |  | No |

### Gstr1RequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appKey | string |  | No |
| asp_secret_key | string |  | No |
| auth_token | string |  | No |
| endDate | string | End date<br/>_Example:_ `"31-12-2022"` | Yes |
| financialPeriod | string |  | No |
| grossTurnover | number |  | No |
| gstin | string |  | No |
| id | long |  | No |
| ipUser | string |  | No |
| lastFYGrossTurnover | number |  | No |
| message_id | string |  | No |
| returnPeriod | string |  | No |
| sek | string |  | No |
| session_id | string |  | No |
| startDate | string | Start date<br/>_Example:_ `"01-01-2019"` | Yes |
| username | string |  | No |

### Gstr1ResetRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appKey | string |  | No |
| asp_secret_key | string |  | No |
| auth_token | string |  | No |
| currStatus | string |  | No |
| gstin | string |  | No |
| id | long |  | No |
| ipUser | string |  | No |
| message_id | string |  | No |
| returnPeriod | string |  | No |
| sek | string |  | No |
| session_id | string |  | No |
| username | string |  | No |

### Gstr1SubmitRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appKey | string |  | No |
| asp_secret_key | string |  | No |
| auth_token | string |  | No |
| gstin | string |  | No |
| id | long |  | No |
| ipUser | string |  | No |
| message_id | string |  | No |
| returnPeriod | string |  | No |
| sek | string |  | No |
| session_id | string |  | No |
| username | string |  | No |

### Gstr1TransactionSummaryDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| categoryName | string |  | No |
| cessAmount | number |  | No |
| cgstAmount | number |  | No |
| igstAmount | number |  | No |
| sgstAmount | number |  | No |
| taxableAmount | number |  | No |
| totalTransactions | integer |  | No |

### GstrDataSummary

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cessAmount | number |  | No |
| cgstAmount | number |  | No |
| description | string |  | No |
| displayName | string |  | No |
| igstAmount | number |  | No |
| rowDetail | string |  | No |
| sectionName | string |  | No |
| sgstAmount | number |  | No |
| totalAmount | number |  | No |
| totalTaxAmount | number |  | No |
| totalTaxableAmount | number |  | No |

### GstrErrorDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| error_cd | string |  | No |
| message | string |  | No |

### GstrStatusResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| action | string |  | No |
| error_report | [GstrStatusResponseDtoErrorReport](#gstrstatusresponsedtoerrorreport) |  | No |
| form_typ | string |  | No |
| indiaFailureLogReportErrorsDtoList | [ [IndiaFailureLogReportErrorsDto](#indiafailurelogreporterrorsdto) ] |  | No |
| report_status | string |  | No |
| status_cd | string |  | No |

### GstrStatusResponseDtoErrorReport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| at | [ [AdvanceTaxLiabilityDtoStatus](#advancetaxliabilitydtostatus) ] |  | No |
| b2b | [ [B2bDtoStatus](#b2bdtostatus) ] |  | No |
| b2cl | [ [B2clDtoStatus](#b2cldtostatus) ] |  | No |
| b2cs | [ [B2csDtoStatus](#b2csdtostatus) ] |  | No |
| cdnr | [ [CdnrDtoStatus](#cdnrdtostatus) ] |  | No |
| error_cd | string |  | No |
| error_msg | string |  | No |
| exp | [ [ExportDtoStatus](#exportdtostatus) ] |  | No |
| hsn | [ [HSNDtoStatus](#hsndtostatus) ] |  | No |
| nil | [ [NillDtoStatus](#nilldtostatus) ] |  | No |

### HSNDtoStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| error_cd | string |  | No |
| error_msg | string |  | No |
| hsn_sc | string |  | No |
| ty | string |  | No |

### HmrcResponseBodyDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| message | string |  | No |
| path | string |  | No |

### HmrcTokenDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| access_token | string |  | No |
| expires_in | string |  | No |
| refresh_token | string |  | No |
| scope | string |  | No |
| token_type | string |  | No |

### HsnDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [DataDtoHSN](#datadtohsn) ] |  | No |

### IRASBaseResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| info | [Info](#info) |  | No |
| returnCode | string |  | No |

### IRASConnectionStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| connected | boolean |  | No |
| url | string |  | No |

### InUseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| inUse | boolean | Is used in any document.<br/>_Example:_ `true` | No |
| inUseBill | boolean | Is used in bill.<br/>_Example:_ `true` | No |
| inUseContact | boolean | Is used in Contact .<br/>_Example:_ `true` | No |
| inUseInvoice | boolean | Is used in invoice.<br/>_Example:_ `true` | No |
| inUseJournal | boolean | Is used in journal entry.<br/>_Example:_ `true` | No |
| inUseOrder | boolean | Is used in order.<br/>_Example:_ `true` | No |
| inUseProduct | boolean | Is used in Product.<br/>_Example:_ `true` | No |
| inUseQuotation | boolean | Is used in quotation.<br/>_Example:_ `true` | No |
| usedInTax | boolean | Is used in Tax.<br/>_Example:_ `true` | No |

### IncomingDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| incomingQty | number |  | No |
| outgoingQty | number |  | No |
| periodName | string |  | No |

### IndiaFailureLogReportErrorsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| errorCode | string |  | No |
| errorMessage | string |  | No |

### IndiaGSTReturnLogReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentDetailsDto | [SaveGSTR1DocumentDetailsDto](#savegstr1documentdetailsdto) | Document Details | No |
| filingYear | integer | Report Filing Year<br/>_Example:_ `2020` | No |
| frequency | string | MONTHLY<br/>_Example:_ `"MONTHLY"` | No |
| fromDate | string | YYYY-MM-DD<br/>_Example:_ `"2021-01-01"` | No |
| gstr1DetailResponseDto | [Gstr1DetailResponseDto](#gstr1detailresponsedto) | Summary and other section details | No |
| name | string | GST Return Report<br/>_Example:_ `"Name of GST Return Report"` | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| toDate | string | YYYY-MM-DD<br/>_Example:_ `"2021-12-31"` | No |

### IndiaGSTReturnLogResp

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| creationDate | string | Creation Date (YYYY-MM-DD)<br/>_Example:_ `"2021-12-31"` | No |
| documentDetailsDto | [SaveGSTR1DocumentDetailsDto](#savegstr1documentdetailsdto) | Document Details | No |
| errors | [ [IndiaFailureLogReportErrorsDto](#indiafailurelogreporterrorsdto) ] | API Failure Errors Details | No |
| filingYear | integer | Report Filing Year<br/>_Example:_ `2020` | No |
| frequency | string | MONTHLY<br/>_Example:_ `"MONTHLY"` | No |
| fromDate | string | YYYY-MM-DD<br/>_Example:_ `"2021-01-01"` | No |
| gstr1DetailResponseDto | [Gstr1DetailResponseDto](#gstr1detailresponsedto) | Summary and other section details | No |
| id | long | Id<br/>_Example:_ `1` | No |
| name | string | GST Return Report<br/>_Example:_ `"Name of GST Return Report"` | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| status | string | Status<br/>_Example:_ `-1` | No |
| toDate | string | YYYY-MM-DD<br/>_Example:_ `"2021-12-31"` | No |

### IndiaGSTReturnLogUpdateReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentDetailsDto | [SaveGSTR1DocumentDetailsDto](#savegstr1documentdetailsdto) | Document Details | No |
| status | string | Status | No |

### Info

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fieldInfoList | [ [FieldInfo](#fieldinfo) ] |  | No |
| message | string |  | No |
| messageCode | integer |  | No |

### InputStream

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| InputStream | object |  |  |

### InputsSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box81 | number |  | No |
| box82 | number |  | No |
| box83 | number |  | No |
| box84 | number |  | No |
| box85 | number |  | No |
| box86 | number |  | No |
| box87 | number |  | No |
| box88 | number |  | No |
| id | long |  | No |

### InterCompanyJEListRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| baseCurrency | string |  | No |
| endDate | dateTime | End date<br/>_Example:_ `"31-12-2022"` | No |
| jeCode | string |  | No |
| primaryCurrency | string |  | No |
| skipElimination | boolean |  | No |
| startDate | dateTime | Start date<br/>_Example:_ `"01-01-2019"` | No |
| tenantId | long |  | No |
| tenants | [ long ] |  | No |

### InvDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| diff_percent | number |  | No |
| etin | string |  | No |
| idt | string |  | No |
| inum | string |  | No |
| inv_typ | string |  | No |
| itms | [ [InvItemsDto](#invitemsdto) ] |  | No |
| pos | string |  | No |
| rchrg | string |  | No |
| val | number |  | No |

### InvDtoB2cl

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| diff_percent | number |  | No |
| etin | string |  | No |
| idt | string |  | No |
| inum | string |  | No |
| itms | [ [InvItemsDtoB2cl](#invitemsdtob2cl) ] |  | No |
| val | number |  | No |

### InvDtoExport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| idt | string |  | No |
| inum | string |  | No |
| itms | [ [InvItemsDtoExport](#invitemsdtoexport) ] |  | No |
| sbdt | string |  | No |
| sbnum | string |  | No |
| sbpcode | string |  | No |
| val | number |  | No |

### InvDtoNil

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| expt_amt | number |  | No |
| ngsup_amt | number |  | No |
| nil_amt | number |  | No |
| sply_ty | string |  | No |

### InvItemsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| itm_det | [ItemDetailsDto](#itemdetailsdto) |  | No |
| num | integer |  | No |

### InvItemsDtoB2cl

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| itm_det | [ItemDetailsDtoB2cl](#itemdetailsdtob2cl) |  | No |
| num | integer |  | No |

### InvItemsDtoExport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| csamt | number |  | No |
| iamt | number |  | No |
| rt | number |  | No |
| txval | number |  | No |

### Invoice

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Central Tax Amount | number |  | No |
| Cess Amount | number |  | No |
| Integrated Tax Amount | number |  | No |
| Sales Tax Amount | number |  | No |
| Tax Amount | number |  | No |
| Taxable Amount | number |  | No |
| Total Amount | number |  | No |
| contactCode | string |  | No |
| customerName | string |  | No |
| customerState | string |  | No |
| exchangeRate | number |  | No |
| gstin | string |  | No |
| inclusiveFlag | boolean |  | No |
| placeOfSupply | string |  | No |
| productCode | string |  | No |
| quantity | double |  | No |
| salesInvoiceCode | string |  | No |
| salesInvoiceDate | dateTime |  | No |
| senderState | string |  | No |
| taxExemptionReasonIndia | string | _Enum:_ `"EXEMPTED"`, `"NON_GST"` | No |
| taxPreferenceIndia | boolean |  | No |

### InvoiceInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| fromDate | string |  | No |
| qty | number |  | No |
| toDate | string |  | No |

### InvoiceStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string |  | No |
| documentSeqCode | string |  | No |
| fulfillmentStatus | string | _Enum:_ `"UNFULFILLED"`, `"PARTIAL_FULFILLED"`, `"FULLY_FULFILLED"` | No |
| paymentStatus | string | _Enum:_ `"PENDING"`, `"PARTIAL"`, `"RECEIVED"` | No |

### ItemDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| camt | number |  | No |
| csamt | number |  | No |
| iamt | number |  | No |
| rt | number |  | No |
| samt | number |  | No |
| txval | number |  | No |

### ItemDetailsDtoB2cl

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| csamt | number |  | No |
| iamt | number |  | No |
| rt | number |  | No |
| txval | number |  | No |

### JournalEntryDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| amountInDocumentCurrency | number |  | No |
| balance | number |  | No |
| balanceInDocumentCurrency | number |  | No |
| contactCode | string |  | No |
| contactName | string |  | No |
| creditAmount | number |  | No |
| currency | string | _Enum:_ `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"` | No |
| currencyExchangeRate | number |  | No |
| date | dateTime |  | No |
| debitAmount | number |  | No |
| description | string |  | No |
| documentCode | string |  | No |
| documentSequenceCode | string |  | No |
| documentType | string | _Enum:_ `"NORMAL_JE"`, `"ADJUSTMENT"`, `"BANK_TRANSFER"`, `"PARTY_JE"`, `"SALES_INVOICE"`, `"PURCHASE_INVOICE"`, `"INVENTORY_VARIANCE_ADJUSTMENT"`, `"DISHONOURED_CHEQUE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"GOODS_RECEIVED_NOTE"`, `"INVENTORY"`, `"DELIVERY_ORDER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"FULFILLMENT"`, `"GOOD_RECEIPT"`, `"BOM_ASSEMBLY"`, `"FIXED_ASSET"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"SALES_CONTRA"`, `"PURCHASE_CONTRA"`, `"BANK_DEPOSIT"`, `"FINANCIAL_YEAR_CLOSING"`, `"TDS_JE"`, `"PAYROLL"`, `"CONTRACTOR_PAYROLL"`, `"EXPENSE_CLAIM"`, `"REVALUATION"`, `"ASSET_GOOD_RECEIPT"`, `"FIXED_ASSET_BILL"`, `"REVENUE_ARRANGEMENT"`, `"AMORTIZATION"`, `"ALLOCATION"` | No |
| jeCode | string |  | No |
| jeDate | string |  | No |
| memo | string |  | No |
| transactionType | string | _Enum:_ `"CREDIT"`, `"DEBIT"` | No |

### JournalLineDetail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string |  | No |
| accountName | string |  | No |
| creditAmount | number |  | No |
| creditAmountInPrimaryCurrency | number |  | No |
| debitAmount | number |  | No |
| debitAmountInPrimaryCurrency | number |  | No |

### JournalSummaryData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string |  | No |
| currencyCode | string |  | No |
| entryType | string |  | No |
| exchangeRate | string |  | No |
| id | long |  | No |
| jeCode | string |  | No |
| jeDate | dateTime |  | No |
| relatedDocumentCode | string |  | No |
| subsidiary | string |  | No |
| tenantId | long |  | No |

### LandedCategoryCost

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| categoryName | string |  | No |
| cost | number |  | No |
| quantity | number |  | No |

### LandedCostReport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| barcode | string |  | No |
| billNo | string |  | No |
| categoryCosts | [ [LandedCategoryCost](#landedcategorycost) ] |  | No |
| contactCode | string |  | No |
| contactName | string |  | No |
| deleted | boolean |  | No |
| documentDate | dateTime |  | No |
| documentSeqCode | string |  | No |
| id | long |  | No |
| landedCostBillNo | string |  | No |
| landedCostPerUnit | number |  | No |
| landedCostTotal | number |  | No |
| productId | string |  | No |
| productName | string |  | No |
| purchaseQuantity | number |  | No |
| purchaseUnitPrice | number |  | No |
| tenantId | long |  | No |
| totalPurchaseValue | number |  | No |
| unitCostIncludingLandedCost | number |  | No |

### LiabilitiesRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fraudPreventionRequest | [FraudPreventionRequest](#fraudpreventionrequest) |  | No |
| fromDate | string |  | Yes |
| toDate | string |  | Yes |
| vrnNumber | string |  | Yes |

### LiabilitiesResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| liabilities | [ [LiabilitiesResponseDto](#liabilitiesresponsedto) ] |  | No |

### LiabilitiesResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| due | string |  | No |
| originalAmount | string |  | No |
| outstandingAmount | string |  | No |
| taxPeriod | [LiabilitiesResponseDtoTaxPeriod](#liabilitiesresponsedtotaxperiod) |  | No |
| type | string |  | No |

### LiabilitiesResponseDtoTaxPeriod

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| from | string |  | No |
| to | string |  | No |

### Map«string,bigdecimal»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Map«string,bigdecimal» | object |  |  |

### Map«string,string»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Map«string,string» | object |  |  |

### ModuleRecordCount

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bankAccount | integer | Total number of bank account<br/>_Example:_ `0` | No |
| buy | integer | Total number of purchase documents<br/>_Example:_ `0` | No |
| client | integer | Total number of clients<br/>_Example:_ `0` | No |
| contact | integer | Total number of contact<br/>_Example:_ `0` | No |
| product | integer | Total number of product<br/>_Example:_ `0` | No |
| sell | integer | Total number of sales documents<br/>_Example:_ `0` | No |
| team | integer | Total number of team members<br/>_Example:_ `0` | No |

### NetVATDueSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| currentVATDueAmount | number |  | No |
| id | long |  | No |
| netVATDueAmount | number |  | No |
| previousCorrectionsAmount | number |  | No |
| vatCarriedForwardAmount | number |  | No |

### NilDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| inv | [ [InvDtoNil](#invdtonil) ] |  | No |

### NillDtoStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| error_cd | string |  | No |
| error_msg | string |  | No |
| sply_ty | string |  | No |

### ObligationsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fraudPreventionRequest | [FraudPreventionRequest](#fraudpreventionrequest) |  | No |
| status | string |  | No |
| vrnNumber | string |  | Yes |

### ObligationsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fillingYear | string |  | No |
| obligations | [ [ObligationsResponseDto](#obligationsresponsedto) ] |  | No |

### ObligationsResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| due | string |  | No |
| end | string |  | No |
| periodKey | string |  | No |
| received | string |  | No |
| start | string |  | No |
| status | string |  | No |

### OtherSchemeSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box9GoodsUnderScheme | number |  | No |

### OutputsSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box00 | number |  | No |
| box01 | number |  | No |
| box02 | number |  | No |
| box03 | number |  | No |
| box44 | number |  | No |
| box45 | number |  | No |
| box46 | number |  | No |
| box47 | number |  | No |
| box48 | number |  | No |
| box49 | number |  | No |
| id | long |  | No |

### OutstandingPurchaseGRNDetailDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| balanceQuantity | number |  | No |
| productDescription | string |  | No |
| productId | string |  | No |
| productName | string |  | No |
| quantity | number |  | No |
| receivedQuantity | number |  | No |
| sno | integer |  | No |

### OutstandingPurchaseGRNSummaryDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| amountAfterTax | number |  | No |
| amountInBaseCurrency | number |  | No |
| code | string |  | No |
| contactName | string |  | No |
| currency | string |  | No |
| exchangeRate | number |  | No |
| isBill | boolean |  | No |
| poBillDate | string |  | No |
| poBillNo | string |  | No |
| poBillStatus | string |  | No |
| tax | number |  | No |

### OutstandingSalesDODetailDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| balanceQuantity | number |  | No |
| deliveredQuantity | number |  | No |
| productDescription | string |  | No |
| productId | string |  | No |
| productName | string |  | No |
| quantity | number |  | No |
| sno | integer |  | No |

### OutstandingSalesDOSummaryDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| amountAfterTax | number |  | No |
| amountInBaseCurrency | number |  | No |
| code | string |  | No |
| contactName | string |  | No |
| currency | string |  | No |
| exchangeRate | number |  | No |
| id | string |  | No |
| isInvoice | boolean |  | No |
| quoteInvoiceDate | string |  | No |
| quoteInvoiceNo | string |  | No |
| quoteInvoiceStatus | string |  | No |
| tax | number |  | No |

### PNLCustomView

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cogs | object |  | No |
| costOfGoodsSold | object |  | No |
| displayText | object |  | No |
| expenses | object |  | No |
| grossProfit | object |  | No |
| groupNames | object |  | No |
| income | object |  | No |
| incomeTaxExpenses | object |  | No |
| netProfitOrLoss | object |  | No |
| operatingExpenses | object |  | No |
| operatingProfit | object |  | No |
| otherExpenses | object |  | No |
| otherIncome | object |  | No |
| periodName | object |  | No |
| profitBeforeTax | object |  | No |
| revenue | object |  | No |
| totalCogs | object |  | No |
| totalCostOfGoodsSold | object |  | No |
| totalExpenses | object |  | No |
| totalIncome | object |  | No |
| totalOperatingExpenses | object |  | No |
| totalOtherExpenses | object |  | No |
| totalOtherIncome | object |  | No |
| totalRevenue | object |  | No |

### PNLCustomViewConsolidation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cogs | [ [ReportItemDto](#reportitemdto) ] |  | No |
| costOfGoodsSold | [ [ReportItemDto](#reportitemdto) ] |  | No |
| displayText | object |  | No |
| expenses | [ [ReportItemDto](#reportitemdto) ] |  | No |
| grossProfit | object |  | No |
| groupNames | object |  | No |
| income | [ [ReportItemDto](#reportitemdto) ] |  | No |
| incomeTaxExpenses | object |  | No |
| netProfitOrLoss | object |  | No |
| operatingExpenses | [ [ReportItemDto](#reportitemdto) ] |  | No |
| operatingProfit | object |  | No |
| otherExpenses | [ [ReportItemDto](#reportitemdto) ] |  | No |
| otherIncome | [ [ReportItemDto](#reportitemdto) ] |  | No |
| periodName | object |  | No |
| profitBeforeTax | object |  | No |
| revenue | [ [ReportItemDto](#reportitemdto) ] |  | No |
| totalCogs | object |  | No |
| totalCostOfGoodsSold | object |  | No |
| totalExpenses | object |  | No |
| totalIncome | object |  | No |
| totalOperatingExpenses | object |  | No |
| totalOtherExpenses | object |  | No |
| totalOtherIncome | object |  | No |
| totalRevenue | object |  | No |

### PNLCustomViewGrouping

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cogs | object |  | No |
| costOfGoodsSold | object |  | No |
| displayText | object |  | No |
| expenses | object |  | No |
| grossProfit | object |  | No |
| groupNames | object |  | No |
| income | object |  | No |
| incomeTaxExpenses | object |  | No |
| netProfitOrLoss | object |  | No |
| operatingExpenses | object |  | No |
| operatingProfit | object |  | No |
| otherExpenses | object |  | No |
| otherIncome | object |  | No |
| periodName | object |  | No |
| profitBeforeTax | object |  | No |
| revenue | object |  | No |
| totalCogs | object |  | No |
| totalCostOfGoodsSold | object |  | No |
| totalExpenses | object |  | No |
| totalIncome | object |  | No |
| totalOperatingExpenses | object |  | No |
| totalOtherExpenses | object |  | No |
| totalOtherIncome | object |  | No |
| totalRevenue | object |  | No |

### Page

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ object ] |  | No |
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

### Pageable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| offset | long |  | No |
| pageNumber | integer |  | No |
| pageSize | integer |  | No |
| paged | boolean |  | No |
| sort | [Sort](#sort) |  | No |
| unpaged | boolean |  | No |

### Page«AdditionalChargesReport»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [AdditionalChargesReport](#additionalchargesreport) ] |  | No |
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

### Page«BASActivityStatementResp»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [BASActivityStatementResp](#basactivitystatementresp) ] |  | No |
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

### Page«BomAssemblyResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [BomAssemblyResponse](#bomassemblyresponse) ] |  | No |
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

### Page«CanadaTaxReportLogDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [CanadaTaxReportLogDto](#canadataxreportlogdto) ] |  | No |
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

### Page«ContactOpeningSummaryDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ContactOpeningSummaryDto](#contactopeningsummarydto) ] |  | No |
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

### Page«CustomerTdsReportDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [CustomerTdsReportDto](#customertdsreportdto) ] |  | No |
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

### Page«FYClosingReportLogResp»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [FYClosingReportLogResp](#fyclosingreportlogresp) ] |  | No |
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

### Page«GstNewZealandActivityStatementResp»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [GstNewZealandActivityStatementResp](#gstnewzealandactivitystatementresp) ] |  | No |
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

### Page«IndiaGSTReturnLogResp»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [IndiaGSTReturnLogResp](#indiagstreturnlogresp) ] |  | No |
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

### Page«LandedCostReport»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [LandedCostReport](#landedcostreport) ] |  | No |
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

### Page«OutstandingPurchaseGRNSummaryDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [OutstandingPurchaseGRNSummaryDto](#outstandingpurchasegrnsummarydto) ] |  | No |
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

### Page«OutstandingSalesDOSummaryDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [OutstandingSalesDOSummaryDto](#outstandingsalesdosummarydto) ] |  | No |
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

### Page«ReserveStockSummaryReport»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ReserveStockSummaryReport](#reservestocksummaryreport) ] |  | No |
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

### Page«SGGSTReportStatementDto«object»»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [SGGSTReportStatementDto«object»](#sggstreportstatementdto«object») ] |  | No |
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

### Page«StockAvailabilitySummaryResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [StockAvailabilitySummaryResponse](#stockavailabilitysummaryresponse) ] |  | No |
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

### Page«TDSDetailsReportDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [TDSDetailsReportDto](#tdsdetailsreportdto) ] |  | No |
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

### Page«TDSNotDeductedReportDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [TDSNotDeductedReportDto](#tdsnotdeductedreportdto) ] |  | No |
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

### Page«UkVatReportLogDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [UkVatReportLogDto](#ukvatreportlogdto) ] |  | No |
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

### Page«VATReturnBelgiumActivityStatementResp»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [VATReturnBelgiumActivityStatementResp](#vatreturnbelgiumactivitystatementresp) ] |  | No |
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

### Page«VATReturnSaudiActivityStatementResp»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [VATReturnSaudiActivityStatementResp](#vatreturnsaudiactivitystatementresp) ] |  | No |
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

### PayGTaxWithheldSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amountWithheldFromPaymentsW1 | long |  | No |
| amountWithheldNoABNQuoted | long |  | No |
| endDate | string |  | No |
| frequency | string |  | No |
| id | long |  | No |
| otherAmountWithheld | long |  | No |
| startDate | string |  | No |
| totalAmountsWithheld | long |  | No |
| totalSalaryWagesOtherPayment | long |  | No |

### PayeeInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| foreignAddress | string |  | No |
| foreignZipCode | string |  | No |
| payeeName | string |  | No |
| payeeTIN | string |  | No |
| registeredAddress | string |  | No |
| registeredZipCode | string |  | No |

### PaygIncomeTaxInstalmentOption1Section

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| endDate | string |  | No |
| estimatedTaxForTheYear | long |  | No |
| frequency | string |  | No |
| id | long |  | No |
| ifVaryingThisAmount | boolean |  | No |
| instalment | long |  | No |
| reasonCodeForVariation | long |  | No |
| startDate | string |  | No |
| variedAmountPayable | long |  | No |

### PaygIncomeTaxInstalmentOption2Section

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| endDate | string |  | No |
| frequency | string |  | No |
| id | long |  | No |
| newRatedRate | double |  | No |
| orNewRatedVariedRate | boolean |  | No |
| paygInstalmentIncome | long |  | No |
| rate | double |  | No |
| reasonCodeForVariation | long |  | No |
| startDate | string |  | No |
| t1T2 | long |  | No |

### PaymentCalculation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box24InstallmentAmount | number |  | No |
| box25TransferToProvisionalTax | number |  | No |
| box26Total | number |  | No |
| box27GSTToPay | number |  | No |
| box28GSTAndProvisionalTax | number |  | No |
| voluntaryInstallmentAmount | number |  | No |

### PaymentOrRefundSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| 8AMoreThan8B | boolean |  | No |
| endDate | string |  | No |
| frequency | string |  | No |
| id | long |  | No |
| startDate | string |  | No |
| yourRefundAmount | long |  | No |

### PaymentResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | string |  | No |
| received | string |  | No |

### PaymentsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fraudPreventionRequest | [FraudPreventionRequest](#fraudpreventionrequest) |  | No |
| fromDate | string |  | No |
| toDate | string |  | No |
| vrnNumber | string |  | Yes |

### PaymentsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| payments | [ [PaymentResponseDto](#paymentresponsedto) ] |  | No |

### PayorInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| financialStartDate | dateTime |  | No |
| payorName | string |  | No |
| payorTIN | string |  | No |
| registeredAddress | string |  | No |
| registeredZipCode | string |  | No |

### Period

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fromDate | dateTime | From date<br/>_Example:_ `"01-01-2019"` | Yes |
| periodName | string |  | No |
| toDate | dateTime | To date<br/>_Example:_ `"01-01-2019"` | Yes |

### ProductInOutQty

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentType | string | _Enum:_ `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"PURCHASE_REQUEST"`, `"PURCHASE_REQUEST_FOR_QUOTES"`, `"SUPPLIER_QUOTES"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`, `"ESTIMATE"` | No |
| productCode | string |  | No |
| quantity | number |  | No |

### ProductIncommingQtyInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| incomingDetailsList | [ [IncomingDetails](#incomingdetails) ] |  | No |
| productCode | string |  | No |

### ProductSalesStats

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| growth | number |  | No |
| name | string |  | No |
| value | number |  | No |

### ProductShortDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentSequenceCode | string |  | No |
| name | string |  | No |
| pid | string |  | No |
| type | string |  | No |

### ProductUnitPriceFetchRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string |  | No |
| documentType | string | _Enum:_ `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"PURCHASE_REQUEST"`, `"PURCHASE_REQUEST_FOR_QUOTES"`, `"SUPPLIER_QUOTES"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`, `"ESTIMATE"` | No |
| numberOfPricesToFetch | integer |  | No |
| productCodes | [ string ] |  | No |

### ProductUnitPriceResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentType | string | _Enum:_ `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"PURCHASE_REQUEST"`, `"PURCHASE_REQUEST_FOR_QUOTES"`, `"SUPPLIER_QUOTES"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`, `"ESTIMATE"` | No |
| unitPrices | [ [ProductUnitPrices](#productunitprices) ] |  | No |

### ProductUnitPrices

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| lastUnitPrices | [ number ] |  | No |
| productCode | string |  | No |

### ProvisionalTaxCalculation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box16TotalSalesAndIncome | number |  | No |
| box17PreviousTotalSalesAndIncome | number |  | No |
| box18TotalSalesAndIncomeProvisional | number |  | No |
| box19All | number |  | No |
| box20TotalSalesAndIncome | number |  | No |
| box21Adjustment | number |  | No |
| box22LessAdjustment | number |  | No |
| box23InstallmentDue | number |  | No |

### PurchaseProductReport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | string |  | No |
| avgPurchasePrice | string |  | No |
| customField | string |  | No |
| percentOfPurchase | string |  | No |
| productCode | string |  | No |
| productName | string |  | No |
| quantity | string |  | No |

### PurchaseReliefReportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| addressLine1 | string |  | No |
| addressLine2 | string |  | No |
| capitalGoods | number |  | No |
| companyName | string |  | No |
| exempt | number |  | No |
| firstName | string |  | No |
| inputVat | number |  | No |
| lastName | string |  | No |
| middleName | string |  | No |
| otherThanCapitalGoods | number |  | No |
| services | number |  | No |
| taxableNetVat | number |  | No |
| totalPurchases | number |  | No |
| vatNo | string |  | No |
| vatRate | number |  | No |
| zeroRated | number |  | No |

### PurchaseReturnReport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fromDate | string | From Date<br/>_Example:_ `"09-09-2020"` | No |
| purchaseReturnReportItems | [ [PurchaseReturnReportItem](#purchasereturnreportitem) ] | List of products | No |
| toDate | string | To Date<br/>_Example:_ `"09-09-2021"` | No |

### PurchaseReturnReportItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| productCode | string | Product Code<br/>_Example:_ `"P-0000001"` | No |
| productName | string | Product Name<br/>_Example:_ `"Table"` | No |
| purchaseReturnReportItemTxns | [ [PurchaseReturnReportItemTxn](#purchasereturnreportitemtxn) ] | List of transactions. | No |
| quantityReturned | number | Total quantity returned<br/>_Example:_ `10` | No |
| value | number | Total value of goods returned<br/>_Example:_ `100` | No |

### PurchaseReturnReportItemTxn

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactName | string | Contact name<br/>_Example:_ `"Standard Chartered"` | No |
| linkedDocument | string | Linked Document<br/>_Example:_ `"Quote Q-0000001"` | No |
| linkedDocumentCode | string | Linked Document code<br/>_Example:_ `"Q-0000001"` | No |
| linkedDocumentType | string | Linked Document type<br/>_Example:_ `"Quote"` | No |
| purchaseReturnCode | string | Purchase Return code<br/>_Example:_ `"PR-0000001"` | No |
| purchaseReturnDate | string | Purchase Return Date<br/>_Example:_ `"10-09-2020"` | No |
| quantityReturned | number | Quantity returned<br/>_Example:_ `2` | No |
| value | number | Value of goods returned<br/>_Example:_ `20` | No |

### PurchaseSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box5TotalTaxablePurchase | number |  | No |

### PurchasesAndExpensesSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box10MoreThanBox14 | boolean |  | No |
| box14TotalGSTCredit | number |  | No |
| gstOnImports | number |  | No |
| id | long |  | No |
| otherCreditAdjustments | number |  | No |
| paymentOrRefundAmount | number |  | No |
| totalCreditAdjustments | number |  | No |
| totalGSTCreditedOnPurchases | number |  | No |
| totalPurchases | number |  | No |

### PurchasesSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| customs15AdjAmount | number |  | No |
| customs15Amount | number |  | No |
| customs15VATAmount | number |  | No |
| customs5AdjAmount | number |  | No |
| customs5Amount | number |  | No |
| customs5VATAmount | number |  | No |
| exemptAdjAmount | number |  | No |
| exemptAmount | number |  | No |
| exemptVATAmount | number |  | No |
| id | long |  | No |
| rcm15AdjAmount | number |  | No |
| rcm15Amount | number |  | No |
| rcm15VATAmount | number |  | No |
| rcm5AdjAmount | number |  | No |
| rcm5Amount | number |  | No |
| rcm5VATAmount | number |  | No |
| stdRatedPurchases15AdjAmount | number |  | No |
| stdRatedPurchases15Amount | number |  | No |
| stdRatedPurchases15VATAmount | number |  | No |
| stdRatedPurchases5AdjAmount | number |  | No |
| stdRatedPurchases5Amount | number |  | No |
| stdRatedPurchases5VATAmount | number |  | No |
| totalAdjAmount | number |  | No |
| totalAmount | number |  | No |
| totalVATAmount | number |  | No |
| zeroRatedAdjAmount | number |  | No |
| zeroRatedAmount | number |  | No |
| zeroRatedVATAmount | number |  | No |

### ReasonsSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| grp1OtherReasons | string |  | No |
| grp1ReasonValue | string |  | No |
| grp2OtherReasons | string |  | No |
| grp2ReasonValue | string |  | No |
| grp3OtherReasons | string |  | No |
| grp3ReasonValue | string |  | No |

### ReceiptListDetailsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string |  | No |
| contactName | string |  | No |
| currency | string | _Enum:_ `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"` | No |
| date | string |  | No |
| documentCode | string |  | No |
| inflow | number |  | No |
| receiptType | string |  | No |

### ReceiptListSummaryRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| columnBy | string | _Enum:_ `"TOTAL_ONLY"`, `"DAYS"`, `"WEEKS"`, `"MONTHS"`, `"QUARTERS"`, `"YEARS"`, `"CONTACTS"`, `"PRODUCTS"`, `"CLASS"`, `"LOCATION"` | No |
| decimalScale | integer |  | No |
| endDate | string | End date<br/>_Example:_ `"31-12-2022"` | Yes |
| startDate | string | Start date<br/>_Example:_ `"01-01-2019"` | Yes |

### ReceiptListSummaryResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| count | integer |  | No |
| currency | string | _Enum:_ `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"` | No |
| fromDate | string |  | No |
| toDate | string |  | No |
| totalInflow | string |  | No |

### ReceivablesReportResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| closingBalance | string |  | No |
| closingBalanceUnformatted | number |  | No |
| creditAmount | string |  | No |
| date | string |  | No |
| debitAmount | string |  | No |
| details | [ [ReceivablesReportResponse](#receivablesreportresponse) ] |  | No |
| docNo | string |  | No |
| dueDate | string |  | No |
| invoiceCode | string |  | No |
| name | string |  | No |
| overDueDays | string |  | No |
| pendingAmount | string |  | No |
| totalAmount | string |  | No |

### ReportCustomViewRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| customViewData | object |  | No |
| report | string | _Enum:_ `"PNL"`, `"BALANCE_SHEET"` | No |

### ReportCustomViewResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| customViewData | object |  | No |
| id | long |  | No |
| report | string |  | No |

### ReportItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountid | long |  | No |
| amount | number |  | No |
| amountWithChilds | number |  | No |
| code | string |  | No |
| group | boolean |  | No |
| groupid | long |  | No |
| itemDto | [ [ReportItemDto](#reportitemdto) ] |  | No |
| name | string |  | No |
| parent | long |  | No |
| periodMap | object |  | No |
| subGroupName | string |  | No |
| subGroupid | long |  | No |

### ReportViewInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| custom | boolean |  | No |
| id | long |  | No |
| vname | string |  | No |

### ReportViewRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| period | [ [Period](#period) ] |  | No |
| report | string | _Enum:_ `"PNL"`, `"BALANCE_SHEET"` | No |
| save | boolean |  | No |
| vname | string |  | No |

### ReportViewResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| custom | boolean |  | No |
| id | long |  | No |
| period | [ [Period](#period) ] |  | No |
| vname | string |  | No |

### ReserveStockDetailReport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| batch | string |  | No |
| productId | string |  | No |
| productName | string |  | No |
| quote | boolean |  | No |
| quoteInvoiceDocumentSeqNo | string |  | No |
| quoteInvoiceNo | string |  | No |
| reservedQty | number |  | No |
| serial | string |  | No |
| warehouseCode | string |  | No |
| warehouseName | string |  | No |
| workOrder | boolean |  | No |

### ReserveStockSummaryReport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQty | number |  | No |
| productDescription | string |  | No |
| productDocumentSeqCode | string |  | No |
| productId | string |  | No |
| productName | string |  | No |
| reservedQty | number |  | No |

### Resource

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

### ResponseEntity

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| body | object |  | No |
| statusCode | string | _Enum:_ `"100 CONTINUE"`, `"101 SWITCHING_PROTOCOLS"`, `"102 PROCESSING"`, `"103 CHECKPOINT"`, `"200 OK"`, `"201 CREATED"`, `"202 ACCEPTED"`, `"203 NON_AUTHORITATIVE_INFORMATION"`, `"204 NO_CONTENT"`, `"205 RESET_CONTENT"`, `"206 PARTIAL_CONTENT"`, `"207 MULTI_STATUS"`, `"208 ALREADY_REPORTED"`, `"226 IM_USED"`, `"300 MULTIPLE_CHOICES"`, `"301 MOVED_PERMANENTLY"`, `"302 FOUND"`, `"302 MOVED_TEMPORARILY"`, `"303 SEE_OTHER"`, `"304 NOT_MODIFIED"`, `"305 USE_PROXY"`, `"307 TEMPORARY_REDIRECT"`, `"308 PERMANENT_REDIRECT"`, `"400 BAD_REQUEST"`, `"401 UNAUTHORIZED"`, `"402 PAYMENT_REQUIRED"`, `"403 FORBIDDEN"`, `"404 NOT_FOUND"`, `"405 METHOD_NOT_ALLOWED"`, `"406 NOT_ACCEPTABLE"`, `"407 PROXY_AUTHENTICATION_REQUIRED"`, `"408 REQUEST_TIMEOUT"`, `"409 CONFLICT"`, `"410 GONE"`, `"411 LENGTH_REQUIRED"`, `"412 PRECONDITION_FAILED"`, `"413 PAYLOAD_TOO_LARGE"`, `"413 REQUEST_ENTITY_TOO_LARGE"`, `"414 URI_TOO_LONG"`, `"414 REQUEST_URI_TOO_LONG"`, `"415 UNSUPPORTED_MEDIA_TYPE"`, `"416 REQUESTED_RANGE_NOT_SATISFIABLE"`, `"417 EXPECTATION_FAILED"`, `"418 I_AM_A_TEAPOT"`, `"419 INSUFFICIENT_SPACE_ON_RESOURCE"`, `"420 METHOD_FAILURE"`, `"421 DESTINATION_LOCKED"`, `"422 UNPROCESSABLE_ENTITY"`, `"423 LOCKED"`, `"424 FAILED_DEPENDENCY"`, `"426 UPGRADE_REQUIRED"`, `"428 PRECONDITION_REQUIRED"`, `"429 TOO_MANY_REQUESTS"`, `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"`, `"451 UNAVAILABLE_FOR_LEGAL_REASONS"`, `"500 INTERNAL_SERVER_ERROR"`, `"501 NOT_IMPLEMENTED"`, `"502 BAD_GATEWAY"`, `"503 SERVICE_UNAVAILABLE"`, `"504 GATEWAY_TIMEOUT"`, `"505 HTTP_VERSION_NOT_SUPPORTED"`, `"506 VARIANT_ALSO_NEGOTIATES"`, `"507 INSUFFICIENT_STORAGE"`, `"508 LOOP_DETECTED"`, `"509 BANDWIDTH_LIMIT_EXCEEDED"`, `"510 NOT_EXTENDED"`, `"511 NETWORK_AUTHENTICATION_REQUIRED"` | No |
| statusCodeValue | integer |  | No |

### ReturnDetailsRatio

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| provisionalTaxCalculation | string |  | No |
| provisionalTaxRatio | number |  | No |

### ReturnDetailsSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountingBasis | string |  | No |
| endDate | string |  | No |
| id | long |  | No |
| paymentDueDate | string |  | No |
| period | string |  | No |
| registrationNo | string |  | No |
| startDate | string |  | No |

### ReturnDetailsStandard

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| provisionalTaxCalculation | string |  | No |

### ReturnsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chargeRefNumber | string |  | No |
| code | string |  | No |
| errors | [ [HmrcResponseBodyDetails](#hmrcresponsebodydetails) ] |  | No |
| formBundleNumber | string |  | No |
| message | string |  | No |
| paymentIndicator | string |  | No |
| processingDate | string |  | No |

### ReturnsRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fraudPreventionRequest | [FraudPreventionRequest](#fraudpreventionrequest) |  | No |
| periodKey | string |  | Yes |
| vrnNumber | string |  | Yes |

### ReturnsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| finalised | boolean |  | No |
| netVatDue | number |  | No |
| periodKey | string |  | No |
| totalAcquisitionsExVAT | number |  | No |
| totalValueGoodsSuppliedExVAT | number |  | No |
| totalValuePurchasesExVAT | number |  | No |
| totalValueSalesExVAT | number |  | No |
| totalVatDue | number |  | No |
| vatDueAcquisitions | number |  | No |
| vatDueSales | number |  | No |
| vatReclaimedCurrPeriod | number |  | No |

### RevChargeLVGSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| rclvgchk | boolean |  | No |
| totImpServLVGAmt | number |  | No |

### RevenueReportRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| dimensionId | string |  | No |
| names | [ string ] |  | No |
| startOfMonth | dateTime |  | No |
| startOfYear | dateTime |  | No |
| toDate | dateTime |  | No |

### RevenueSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box13Revenue | number |  | No |
| box14GstUnderReverseCharge | number |  | No |
| box14GstUnderReverseChargeApplied | boolean |  | No |
| box15ThirdPartyElectronicSupply | number |  | No |
| box15ThirdPartyElectronicSupplyApplied | boolean |  | No |

### SGGSTNewReportReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filingYear | integer | Report Filing Year<br/>_Example:_ `2020` | No |
| frequency | string | MONTHLY<br/>_Example:_ `"MONTHLY"` | No |
| fromDate | string | YYYY-MM-DD<br/>_Example:_ `"2020-01-01"` | No |
| id | long | Report Id<br/>_Example:_ `1` | No |
| igdsScheme | boolean | _Example:_ `true` | No |
| name | string | GST Report Name<br/>_Example:_ `"Name of GST Report"` | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| reportType | string | Report Type<br/>_Example:_ `"GST Form 5"` | No |
| toDate | string | YYYY-MM-DD<br/>_Example:_ `"2020-12-31"` | No |

### SGGSTReportSettingsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| deleted | boolean |  | No |
| filingFrequency | string |  | No |
| gstNo | string |  | No |
| igdsScheme | boolean |  | No |
| taxReferenceNo | string |  | No |

### SGGSTReportSettingsReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filingFrequency | string | Monthly/Quarterly<br/>_Example:_ `"Monthly"` | No |
| firstPeriodStarts | integer | First Period Starts/1/2/3/4<br/>_Example:_ `1` | No |
| gstNo | string | GST-NUMBER/12345678909<br/>_Example:_ `12345678909` | No |
| igdsScheme | boolean | _Example:_ `true` | No |
| taxReferenceNo | string | Tax Reference No/12345678909<br/>_Example:_ `12345678909` | No |

### SGGSTReportSettingsResp

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| deleted | boolean | True/False<br/>_Example:_ `true` | No |
| filingFrequency | string | Monthly/Quarterly<br/>_Example:_ `"Monthly"` | No |
| firstPeriodStarts | integer | First Period Starts/1/2/3/4<br/>_Example:_ `1` | No |
| gstNo | string | GST-NUMBER/12345678909<br/>_Example:_ `12345678909` | No |
| id | long | Id<br/>_Example:_ `1` | No |
| igdsScheme | boolean | _Example:_ `true` | No |
| taxReferenceNo | string | Tax Reference No/12345678909<br/>_Example:_ `12345678909` | No |

### SGGSTReportStatementDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| balance | number | Balance<br/>_Example:_ `500` | No |
| creationDate | string | Creation Date<br/>_Example:_ `"01-12-2020"` | No |
| filingYear | integer | Report Filing Year<br/>_Example:_ `2020` | No |
| frequency | string | MONTHLY<br/>_Example:_ `"MONTHLY"` | No |
| fromDate | dateTime | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |
| id | long | Id<br/>_Example:_ `1` | No |
| name | string | GST Report name<br/>_Example:_ `"Name of GST Report"` | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| reportData | [SGReportData](#sgreportdata) | Report Sections | No |
| reportSettings | [SGGSTReportSettingsDto](#sggstreportsettingsdto) | Report Settings | No |
| reportType | string | Report Type<br/>_Example:_ `"GST Form 5"` | No |
| status | string | Status<br/>_Example:_ `"FILED"` | No |
| tempGSTReturnLogReportId | string | Temporary GST Return log report ID | No |
| toDate | dateTime | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |

### SGGSTReportStatementDto«GSTForm5Data»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| balance | number | Balance<br/>_Example:_ `500` | No |
| creationDate | string | Creation Date<br/>_Example:_ `"01-12-2020"` | No |
| filingYear | integer | Report Filing Year<br/>_Example:_ `2020` | No |
| frequency | string | MONTHLY<br/>_Example:_ `"MONTHLY"` | No |
| fromDate | dateTime | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |
| id | long | Id<br/>_Example:_ `1` | No |
| name | string | GST Report name<br/>_Example:_ `"Name of GST Report"` | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| reportData | [GSTForm5Data](#gstform5data) | Report Sections | No |
| reportSettings | [SGGSTReportSettingsDto](#sggstreportsettingsdto) | Report Settings | No |
| reportType | string | Report Type<br/>_Example:_ `"GST Form 5"` | No |
| status | string | Status<br/>_Example:_ `"FILED"` | No |
| tempGSTReturnLogReportId | string | Temporary GST Return log report ID | No |
| toDate | dateTime | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |

### SGGSTReportStatementDto«GSTForm7Data»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| balance | number | Balance<br/>_Example:_ `500` | No |
| creationDate | string | Creation Date<br/>_Example:_ `"01-12-2020"` | No |
| filingYear | integer | Report Filing Year<br/>_Example:_ `2020` | No |
| frequency | string | MONTHLY<br/>_Example:_ `"MONTHLY"` | No |
| fromDate | dateTime | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |
| id | long | Id<br/>_Example:_ `1` | No |
| name | string | GST Report name<br/>_Example:_ `"Name of GST Report"` | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| reportData | [GSTForm7Data](#gstform7data) | Report Sections | No |
| reportSettings | [SGGSTReportSettingsDto](#sggstreportsettingsdto) | Report Settings | No |
| reportType | string | Report Type<br/>_Example:_ `"GST Form 5"` | No |
| status | string | Status<br/>_Example:_ `"FILED"` | No |
| tempGSTReturnLogReportId | string | Temporary GST Return log report ID | No |
| toDate | dateTime | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |

### SGGSTReportStatementDto«object»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| balance | number | Balance<br/>_Example:_ `500` | No |
| creationDate | string | Creation Date<br/>_Example:_ `"01-12-2020"` | No |
| filingYear | integer | Report Filing Year<br/>_Example:_ `2020` | No |
| frequency | string | MONTHLY<br/>_Example:_ `"MONTHLY"` | No |
| fromDate | dateTime | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |
| id | long | Id<br/>_Example:_ `1` | No |
| name | string | GST Report name<br/>_Example:_ `"Name of GST Report"` | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| reportData | object | Report Sections | No |
| reportSettings | [SGGSTReportSettingsDto](#sggstreportsettingsdto) | Report Settings | No |
| reportType | string | Report Type<br/>_Example:_ `"GST Form 5"` | No |
| status | string | Status<br/>_Example:_ `"FILED"` | No |
| tempGSTReturnLogReportId | string | Temporary GST Return log report ID | No |
| toDate | dateTime | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |

### SGReportData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| declarationSection | [DeclarationSection](#declarationsection) |  | No |
| electronicMktSection | [ElectronicMktSection](#electronicmktsection) |  | No |
| purchaseSection | [PurchaseSection](#purchasesection) |  | No |
| reasonsSection | [ReasonsSection](#reasonssection) |  | No |
| revChargeLVGSection | [RevChargeLVGSection](#revchargelvgsection) |  | No |
| supplierLVGSection | [SupplierLVGSection](#supplierlvgsection) |  | No |
| suppliesSection | [SuppliesSection](#suppliessection) |  | No |

### SOAReportConsolidationResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| periodMap | object |  | No |
| response | [CustomPagingResponse«StatementOfAccountDataPeriod»](#custompagingresponse«statementofaccountdataperiod») |  | No |

### SST02ExportRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fileFormat | string | _Enum:_ `"XLS"`, `"PDF"`, `"CSV"` | No |
| numberFields | object | Number field values<br/>_Example:_ `{"taxableField_4":"10","taxField_4":"250","taxField_5":"300","taxField_10":"300","taxRateField_11":"10","taxField_11":"100","taxField_12":"1000","taxField_20":"10000","totalField_1":"1000","totalField_2":"1000","totalField_3":"1000","totalField_4":"3000"}` | No |
| returnDueDate | string |  | No |
| sst_report_type | string | Tax Type<br/>_Enum:_ `"SALES"`, `"SSERVICE"` | No |
| startAndEndDate | [StartAndEndDate](#startandenddate) | Start & end dates | No |
| textFields | object | Text field values<br/>_Example:_ `{"declarationField_1":"20/11,2019","declarationField_2":"James","declarationField_3":"122545458","declarationField_4":"Manager","declarationField_5":"8998987879"}` | No |

### SSTForm02ResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| boxNumber | integer | Box Number<br/>_Example:_ `1` | No |
| label | string | Section name or heading<br/>_Example:_ `"Declaration"` | No |
| salesServiceDetailsDtos | [ [SalesServiceDetailsDto](#salesservicedetailsdto) ] | List of Sales and Service details for PART B<br/>_Example:_ `[{}]` | No |
| sequenceNumber | integer | Sequence number of the element<br/>_Example:_ `2` | No |
| taxAmount | number | Tax Amount for the element<br/>_Example:_ `50` | No |
| taxRate | number | Tax Rate for element<br/>_Example:_ `"5%"` | No |
| taxableAmount | number | Taxable Amount for the element<br/>_Example:_ `1000` | No |
| type | string | ELEMENT TYPE<br/>_Enum:_ `"GROUP"`, `"SUBGROUP"`, `"ELEMENT"`, `"TOTAL"`, `"NUMBER"`, `"TEXT"`, `"TABLEDATA"`, `"DATE"`<br/>_Example:_ `"ELEMENT"` | No |

### SalePurchaseByProductRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| fromDate | dateTime |  | No |
| productCode | string |  | No |
| toDate | dateTime |  | No |
| type | string | _Enum:_ `"SALES"`, `"PURCHASE"` | No |

### SalePurchaseByProductResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| purchaseProductReportData | [ [PurchaseProductReport](#purchaseproductreport) ] |  | No |
| salesProductReportData | [ [SalesProductReport](#salesproductreport) ] |  | No |
| totalSummary | object |  | No |

### SalesAndIncomeSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box10TotalGSTSalesAfterAdjustment | number |  | No |
| box5TotalSales | number |  | No |
| box6ZeroRatedSupplies | number |  | No |
| box7NetGSTSales | number |  | No |
| box8TotalGSTSalesBeforeAdjustment | number |  | No |
| box9Adjustments | number |  | No |
| id | long |  | No |

### SalesGrowthDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cogs | number |  | No |
| endDate | string |  | No |
| growth | number |  | No |
| qty | number |  | No |
| sales | number |  | No |
| startDate | string |  | No |

### SalesProductReport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | string |  | No |
| avgSalesPrice | string |  | No |
| cogs | string |  | No |
| customField | string |  | No |
| grossMargin | string |  | No |
| grossMarginPercent | string |  | No |
| percentOfSale | string |  | No |
| productCode | string |  | No |
| productName | string |  | No |
| quantity | string |  | No |

### SalesRegisterDetailedResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | string |  | No |
| contactName | string |  | No |
| documentCode | string |  | No |
| documentDate | dateTime |  | No |
| documentDateDisplay | string |  | No |
| documentSeqCode | string |  | No |

### SalesRegisterSummaryRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| endDate | dateTime |  | No |
| frequency | string | _Enum:_ `"WEEK"`, `"MONTH"`, `"QUARTER"` | No |
| startDate | dateTime |  | No |

### SalesRegisterSummaryResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | string |  | No |
| cumulativeAmount | string |  | No |
| endDate | string |  | No |
| startDate | string |  | No |

### SalesReliefReportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| addressLine1 | string |  | No |
| addressLine2 | string |  | No |
| capitalGoods | number |  | No |
| companyName | string |  | No |
| exempt | number |  | No |
| firstName | string |  | No |
| grossTaxable | number |  | No |
| lastName | string |  | No |
| middleName | string |  | No |
| otherThanCapitalGoods | number |  | No |
| outputVat | number |  | No |
| services | number |  | No |
| taxableNetVat | number |  | No |
| totalSales | number |  | No |
| vatNo | string |  | No |
| vatRate | number |  | No |
| zeroRated | number |  | No |

### SalesReturnReport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fromDate | string | From Date<br/>_Example:_ `"09-09-2020"` | No |
| salesReturnReportItems | [ [SalesReturnReportItem](#salesreturnreportitem) ] | List of products | No |
| toDate | string | To Date<br/>_Example:_ `"09-09-2021"` | No |

### SalesReturnReportItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| productCode | string | Product Code<br/>_Example:_ `"P-0000001"` | No |
| productName | string | Product Name<br/>_Example:_ `"Table"` | No |
| quantityReturned | number | Total quantity returned<br/>_Example:_ `10` | No |
| salesReturnReportItemTxns | [ [SalesReturnReportItemTxn](#salesreturnreportitemtxn) ] | List of transactions. | No |
| value | number | Total value of goods returned<br/>_Example:_ `100` | No |

### SalesReturnReportItemTxn

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactName | string | Contact name<br/>_Example:_ `"Standard Chartered"` | No |
| linkedDocument | string | Linked Document<br/>_Example:_ `"Quote Q-0000001"` | No |
| linkedDocumentCode | string | Linked Document code<br/>_Example:_ `"Q-0000001"` | No |
| linkedDocumentType | string | Linked Document type<br/>_Example:_ `"Quote"` | No |
| quantityReturned | number | Quantity returned<br/>_Example:_ `2` | No |
| salesReturnCode | string | Sales Return code<br/>_Example:_ `"SR-0000001"` | No |
| salesReturnDate | string | Sales Return Date<br/>_Example:_ `"10-09-2020"` | No |
| value | number | Value of goods returned<br/>_Example:_ `20` | No |

### SalesSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| exemptAdjAmount | number |  | No |
| exemptAmount | number |  | No |
| exemptVATAmount | number |  | No |
| exportAdjAmount | number |  | No |
| exportAmount | number |  | No |
| exportVATAmount | number |  | No |
| id | long |  | No |
| privateHealthcareAdjAmount | number |  | No |
| privateHealthcareAmount | number |  | No |
| privateHealthcareVATAmount | number |  | No |
| stdRatedSales15AdjAmount | number |  | No |
| stdRatedSales15Amount | number |  | No |
| stdRatedSales15VATAmount | number |  | No |
| stdRatedSales5AdjAmount | number |  | No |
| stdRatedSales5Amount | number |  | No |
| stdRatedSales5VATAmount | number |  | No |
| totalAdjAmount | number |  | No |
| totalAmount | number |  | No |
| totalVATAmount | number |  | No |
| zeroRatedAdjAmount | number |  | No |
| zeroRatedAmount | number |  | No |
| zeroRatedVATAmount | number |  | No |

### SalesServiceDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billNo | string |  | No |
| goodsOrServiceDescription | string |  | No |
| tariffOrServiceCode | string |  | No |
| valueOfGoodsForOwnUse | number |  | No |
| valueOfGoodsSold | number |  | No |
| valueOfTaxableService | number |  | No |

### SalesTaxReturnDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| description | string |  | No |
| srNo | integer |  | No |
| tariffCode | string |  | No |
| taxRate | number |  | No |
| taxRateSpecificTotal | number |  | No |
| taxableAmount | number |  | No |
| totalAmount | number |  | No |
| totalTaxPayable | number |  | No |
| valueOfGoodsOwnUse | number |  | No |
| valueOfWorkPerformed | number |  | No |

### SaveGSTR1DocumentDetailItemsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| netIssued | string |  | No |
| srNoFrom | string |  | No |
| srNoTo | string |  | No |
| totalCancelled | string |  | No |
| totalNumber | string |  | No |

### SaveGSTR1DocumentDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| creditNote | [SaveGSTR1DocumentDetailItemsDto](#savegstr1documentdetailitemsdto) |  | No |
| debitNote | [SaveGSTR1DocumentDetailItemsDto](#savegstr1documentdetailitemsdto) |  | No |
| invoicesIssued | [SaveGSTR1DocumentDetailItemsDto](#savegstr1documentdetailitemsdto) |  | No |
| jobWorkDeliveryChallan | [SaveGSTR1DocumentDetailItemsDto](#savegstr1documentdetailitemsdto) |  | No |
| paymentVoucher | [SaveGSTR1DocumentDetailItemsDto](#savegstr1documentdetailitemsdto) |  | No |
| rcmInvoices | [SaveGSTR1DocumentDetailItemsDto](#savegstr1documentdetailitemsdto) |  | No |
| receiptVoucher | [SaveGSTR1DocumentDetailItemsDto](#savegstr1documentdetailitemsdto) |  | No |
| refundVoucher | [SaveGSTR1DocumentDetailItemsDto](#savegstr1documentdetailitemsdto) |  | No |
| revisedInvoices | [SaveGSTR1DocumentDetailItemsDto](#savegstr1documentdetailitemsdto) |  | No |
| salaryOnApprovalDeliveryChallan | [SaveGSTR1DocumentDetailItemsDto](#savegstr1documentdetailitemsdto) |  | No |

### SaveGSTR1RequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| at | [ [AdvanceTaxLiabilityDto](#advancetaxliabilitydto) ] |  | No |
| b2b | [ [B2bDto](#b2bdto) ] |  | No |
| b2cl | [ [B2clDto](#b2cldto) ] |  | No |
| b2cs | [ [B2csDto](#b2csdto) ] |  | No |
| cdnr | [ [CdnrDto](#cdnrdto) ] |  | No |
| cdnur | [ [CdnurDto](#cdnurdto) ] |  | No |
| cur_gt | number |  | No |
| doc_issue | [DocIssued](#docissued) |  | No |
| exp | [ [ExportDto](#exportdto) ] |  | No |
| fp | string |  | No |
| gstin | string |  | No |
| gt | number |  | No |
| hsn | [HsnDto](#hsndto) |  | No |
| nil | [NilDto](#nildto) |  | No |

### SaveGSTR1ResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appKey | string |  | No |
| data | string |  | No |
| error | [GstrErrorDetails](#gstrerrordetails) |  | No |
| hmac | string |  | No |
| rek | string |  | No |
| sek | string |  | No |
| status_cd | string |  | No |

### SendGrafanaReportEmailRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| application | string | Application name<br/>_Example:_ `"ERP"` | No |
| body | string | email body<br/>_Example:_ `"Please find your attached statement for the period from #From Date# to #As of Date#. Please do not hesitate to contact us should you have any questions."` | No |
| contactCode | string | Contact code for report SOA<br/>_Example:_ `"C-00001"` | No |
| endDate | string | End date of report<br/>_Example:_ `"20-08-2020"` | No |
| reportCode | string | Report Name<br/>_Example:_ `"STATEMENT_OF_ACCOUNT"` | No |
| startDate | string | Start date of report<br/>_Example:_ `"01-08-2020"` | No |
| subject | string | subject line<br/>_Example:_ `"Statement Of Account"` | No |

### ServiceTaxReturnDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| computedTaxAmount | number |  | No |
| noOfCard | number |  | No |
| penaltyAmount | number |  | No |
| serviceType | string |  | No |
| srNo | integer |  | No |
| taxRate | number |  | No |
| taxableAmount | number |  | No |
| totalTaxPayable | number |  | No |
| valueOfServiceOwnUse | number |  | No |

### Sort

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| empty | boolean |  | No |
| sorted | boolean |  | No |
| unsorted | boolean |  | No |

### StartAndEndDate

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| endDate | string | End date<br/>_Example:_ `"31-12-2022"` | Yes |
| startDate | string | Start date<br/>_Example:_ `"01-01-2019"` | Yes |

### StatementOfAccountData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| amountInBase | number |  | No |
| balanceInBase | number |  | No |
| contactCode | string |  | No |
| contactCodeWithName | string |  | No |
| contactName | string |  | No |
| currency | string |  | No |
| details | [ [StatementOfAccountData](#statementofaccountdata) ] |  | No |
| documentCode | string |  | No |
| documentDate | dateTime |  | No |
| documentNumber | string |  | No |
| documentType | string |  | No |
| exchangeRate | string |  | No |
| formattedDate | string |  | No |
| isCollapse | boolean |  | No |
| memo | string |  | No |
| offsetInvoiceType | string |  | No |

### StatementOfAccountDataPeriod

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| amountInBase | number |  | No |
| balanceInBase | number |  | No |
| balanceInBaseByPeriod | object |  | No |
| contactCode | string |  | No |
| contactCodeWithName | string |  | No |
| contactName | string |  | No |
| currency | string |  | No |
| details | [ [StatementOfAccountDataPeriod](#statementofaccountdataperiod) ] |  | No |
| documentCode | string |  | No |
| documentDate | dateTime |  | No |
| documentNumber | string |  | No |
| documentType | string |  | No |
| exchangeRate | string |  | No |
| formattedDate | string |  | No |
| isCollapse | boolean |  | No |
| memo | string |  | No |
| orgName | string |  | No |
| tenantContactMap | object |  | No |
| tenantId | long |  | No |

### StatementOfAccountEmailRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bcc | string | Sender email address<br/>_Example:_ `"john@doe.com"` | No |
| body | string | email body<br/>_Example:_ `"Please find your attached statement for the period from #From Date# to #As of Date#. Please do not hesitate to contact us should you have any questions."` | No |
| statementOfAccountRequest | [StatementOfAccountRequest](#statementofaccountrequest) |  | No |
| subject | string | subject line<br/>_Example:_ `"Statement Of Account"` | No |
| vendor | boolean |  | No |

### StatementOfAccountRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| asOfDate | dateTime |  | No |
| contact | [ string ] | _Example:_ `["C-000005","C-000006"]` | No |
| contactCodeWithName | string |  | No |
| details | boolean |  | No |
| fileFormat | string | _Enum:_ `"XLS"`, `"PDF"`, `"CSV"` | No |
| fromDate | dateTime |  | No |
| groupByCurrency | boolean | If It is true all records group by contact and currency<br/>_Example:_ `false` | No |
| limit | integer |  | No |
| mapping | [ [ConsolidateAccountTenantsMappingItemsDto](#consolidateaccounttenantsmappingitemsdto) ] |  | No |
| mode | string | _Enum:_ `"CONSOLIDATION"`, `"COMPARISON"` | No |
| page | integer |  | No |
| report | string |  | No |
| tenantContactMap | object |  | No |
| tenants | [ integer ] |  | No |
| tenantsToShow | [ integer ] |  | No |

### StatementOfAccountResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | object |  | No |

### StockAgeingReport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| name | string |  | No |
| percentage | number |  | No |
| quantity | number |  | No |

### StockAvailByWarehouseExportRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| batchStatus | string | _Enum:_ `"ALL"`, `"EXPIRED"`, `"NON_EXPIRED"` | No |
| customField | string |  | No |
| fileFormat | string | _Enum:_ `"XLS"`, `"PDF"`, `"CSV"` | No |
| isDetails | boolean |  | No |
| limit | integer |  | No |
| multipleUom | boolean |  | No |
| page | integer |  | No |
| productCode | string | _Example:_ `"P-0000001"` | No |
| search | string |  | No |
| showRowRackBin | boolean |  | No |
| warehouse | [ string ] | _Example:_ `["WH-00001","WH-00002"]` | No |

### StockAvailabilitySummaryResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advanceType | string |  | No |
| availableQty | number | Product available quantity<br/>_Example:_ `10` | No |
| multipleSchemaData | [ [WarehouseMultipleSchemaData](#warehousemultipleschemadata) ] |  | No |
| otherUomQuantities | string | Quantity In Other Uoms<br/>_Example:_ `"10 KG"` | No |
| pid | string |  | No |
| productCode | string | Product ID<br/>_Example:_ `125` | No |
| productName | string | Product Name<br/>_Example:_ `"Name"` | No |
| productType | string | Product Type<br/>_Example:_ `"Tracked"` | No |
| reservedQty | number | Product reserved quantity<br/>_Example:_ `2` | No |
| uomName | string | UOM Name<br/>_Example:_ `"UNIT"` | No |

### StockLedgerResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fromDate | string |  | No |
| qtyIn | number |  | No |
| qtyInHand | number |  | No |
| qtyOut | number |  | No |
| timeline | string |  | No |
| toDate | string |  | No |

### StockValuationReport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQuantity | string |  | No |
| description | string |  | No |
| productId | string |  | No |
| productName | string |  | No |
| valuation | string |  | No |

### StockValuationReportResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| stockValuationReports | [ [StockValuationReport](#stockvaluationreport) ] |  | No |
| totalSummary | object |  | No |

### SupplierLVGSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ownImpLVGChk | boolean |  | No |
| totOwnImpLVGAmt | number |  | No |

### SuppliesSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box1StandardSupplies | number |  | No |
| box2ZeroRatedSupplies | number |  | No |
| box3ExemptSupplies | number |  | No |
| box3HasESN33 | boolean |  | No |
| box4TotalSupplies | number |  | No |

### TDSDetailsReportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string | Account Code<br/>_Example:_ `"ACC-000001"` | No |
| assessableAmount | number | Assessable Amount<br/>_Example:_ `500` | No |
| assessableAmountInBaseCurrency | number | Assessable Amount In Base Currency<br/>_Example:_ `500` | No |
| assessableLineAmount | number | Assessable Line Amount<br/>_Example:_ `500` | No |
| assessableLineAmountInBaseCurrency | number | Assessable Line Amount In Base Currency<br/>_Example:_ `500` | No |
| contactAddress | string | Contact Address<br/>_Example:_ `"Address of contact"` | No |
| contactCode | string | Contact Code<br/>_Example:_ `"C-000001"` | No |
| contactCountry | string | Contact Country<br/>_Example:_ `"India"` | No |
| contactEmail | string | Contact Email ID<br/>_Example:_ `"abc@xyz.com"` | No |
| contactName | string | Contact Name<br/>_Example:_ `"John"` | No |
| contactPayableAccountCode | string | Contact Payable Account Code<br/>_Example:_ `"ACC-000001"` | No |
| currency | string | Currency<br/>_Example:_ `"INR"` | No |
| deducteeType | string | Deductee Type<br/>_Example:_ `"Name of deductee type"` | No |
| deleted | boolean |  | No |
| documentCode | string | Document Code<br/>_Example:_ `"0000125"` | No |
| documentDate | dateTime | Document Date (DD-MM-YYYY)<br/>_Example:_ `"01-12-2020"` | No |
| documentLineItemId | long | Document Line Item Id<br/>_Example:_ `1` | No |
| documentSeqCode | string | Document Sequence Code<br/>_Example:_ `"0000125"` | No |
| documentType | string | Document Type<br/>_Example:_ `"Purchase Invoice"` | No |
| dueDate | dateTime | Due Date (DD-MM-YYYY)<br/>_Example:_ `"01-12-2020"` | No |
| exchangeRate | number | Exchange Rate<br/>_Example:_ `1.2345674` | No |
| id | long | Id<br/>_Example:_ `1` | No |
| natureOfPayment | string | Nature Of Payment<br/>_Example:_ `"Name of NOP"` | No |
| overdueByMonths | long | Overdue Months<br/>_Example:_ `2` | No |
| panno | string | Contact PAN / TAN Number<br/>_Example:_ `"ASHDF2345D"` | No |
| productName | string | Product Code<br/>_Example:_ `"P-000001"` | No |
| tanno | string |  | No |
| tdsAmount | number | TDS Amount<br/>_Example:_ `50` | No |
| tdsAmountInBaseCurrency | number | TDS Amount In Base Currency<br/>_Example:_ `50` | No |
| tdsApplicable | boolean | TDS Applicable (TRUE/FALSE) | No |
| tdsDeductJECode | string | TDS Deduct JE code<br/>_Example:_ `"JE-000001"` | No |
| tdsDeducted | boolean | TDS Deducted (TRUE/FALSE) | No |
| tdsDeductedAmount | number | TDS Deducted Amount<br/>_Example:_ `50` | No |
| tdsDeductedAmountInBaseCurrency | number | TDS Deducted Amount In Base Currency<br/>_Example:_ `0` | No |
| tdsFullyDeducted | boolean | TDS Fully Deducted (TRUE/FALSE) | No |
| tdsPaid | boolean | TDS Paid (TRUE/FALSE) | No |
| tdsPayableAccountCode | string | TDS Payable Account Code<br/>_Example:_ `"ACC-000001"` | No |
| tdsPendingAmount | number | TDS Pending Amount<br/>_Example:_ `0` | No |
| tdsPendingAmountInBaseCurrency | number | TDS Pending Amount In Base Currency<br/>_Example:_ `0` | No |
| tdsRate | number | TDS Rate<br/>_Example:_ `10` | No |
| tenantId | long | Tenant Id<br/>_Example:_ `1` | No |

### TDSJournalEntryDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string | Contact Code<br/>_Example:_ `"C-000001"` | No |
| contactPayableAccountCode | string | Contact Payable Account Code<br/>_Example:_ `"ACC-0000002"` | No |
| currency | string | Currency<br/>_Example:_ `"INR"` | No |
| documentCode | string | Document Code<br/>_Example:_ `"0000125"` | No |
| exchangeRate | number | Invoice Exchange Rate<br/>_Example:_ `1.22` | No |
| failureMessage | string | Failure Message | No |
| id | long | ID<br/>_Example:_ `1` | No |
| jeCode | string | JE Code<br/>_Example:_ `"JE-000001"` | No |
| tdsAmount | number | TDS Amount<br/>_Example:_ `50` | No |
| tdsAmountInBaseCurrency | number | TDS Amount In Base Currency<br/>_Example:_ `75` | No |
| tdsPayableAccountCode | string | Contact Payable Account Code<br/>_Example:_ `"ACC-0000002"` | No |

### TDSNotDeductedReportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountName | string | Account Code<br/>_Example:_ `"ACC-000001"` | No |
| assessableAmount | number | Assessable Amount<br/>_Example:_ `500` | No |
| assessableAmountInBaseCurrency | number | Assessable Amount In Base Currency<br/>_Example:_ `500` | No |
| assessableLineAmount | number | Assessable Line Amount<br/>_Example:_ `500` | No |
| assessableLineAmountInBaseCurrency | number | Assessable Line Amount In Base Currency<br/>_Example:_ `500` | No |
| contactAddress | string | Contact Address<br/>_Example:_ `"Address of contact"` | No |
| contactCode | string | Contact Code<br/>_Example:_ `"C-000001"` | No |
| contactCountry | string | Contact Country<br/>_Example:_ `"India"` | No |
| contactEmail | string | Contact Email ID<br/>_Example:_ `"abc@xyz.com"` | No |
| contactName | string | Contact Name<br/>_Example:_ `"John"` | No |
| contactPayableAccountCode | string | Contact Payable Account Code<br/>_Example:_ `"ACC-000001"` | No |
| currency | string | Currency<br/>_Example:_ `"INR"` | No |
| deducteeType | string | Deductee Type<br/>_Example:_ `"Name of deductee type"` | No |
| deleted | boolean |  | No |
| documentCode | string | Document Code<br/>_Example:_ `"0000125"` | No |
| documentDate | dateTime | Document Date (DD-MM-YYYY)<br/>_Example:_ `"01-12-2020"` | No |
| documentLineItemId | long | Document Line Item Id<br/>_Example:_ `1` | No |
| documentSeqCode | string | Document Sequence Code<br/>_Example:_ `"0000125"` | No |
| documentType | string | Document Type<br/>_Example:_ `"Purchase Invoice"` | No |
| exchangeRate | number | Exchange Rate<br/>_Example:_ `1.2345674` | No |
| id | long | Id<br/>_Example:_ `1` | No |
| natureOfPayment | string | Nature Of Payment<br/>_Example:_ `"Name of NOP"` | No |
| panno | string | Contact PAN / TAN Number<br/>_Example:_ `"ASHDF2345D"` | No |
| productName | string | Product Code<br/>_Example:_ `"P-000001"` | No |
| tdsAmount | number | TDS Amount<br/>_Example:_ `50` | No |
| tdsAmountInBaseCurrency | number | TDS Amount In Base Currency<br/>_Example:_ `50` | No |
| tdsApplicable | boolean | TDS Applicable (TRUE/FALSE) | No |
| tdsDeductJECode | string | TDS Deduct JE code<br/>_Example:_ `"JE-000001"` | No |
| tdsDeducted | boolean | TDS Deducted (TRUE/FALSE) | No |
| tdsDeductedAmount | number | TDS Deducted Amount<br/>_Example:_ `50` | No |
| tdsDeductedAmountInBaseCurrency | number | TDS Deducted Amount In Base Currency<br/>_Example:_ `0` | No |
| tdsFullyDeducted | boolean | TDS Fully Deducted (TRUE/FALSE) | No |
| tdsPaid | boolean | TDS Paid (TRUE/FALSE) | No |
| tdsPayableAccountCode | string | TDS Payable Account Code<br/>_Example:_ `"ACC-000001"` | No |
| tdsPendingAmount | number | TDS Pending Amount<br/>_Example:_ `0` | No |
| tdsPendingAmountInBaseCurrency | number | TDS Pending Amount In Base Currency<br/>_Example:_ `0` | No |
| tdsRate | number | TDS Rate<br/>_Example:_ `10` | No |
| tenantId | long | Tenant Id<br/>_Example:_ `1` | No |

### TDSPaymentDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ids | [ long ] |  | No |
| paymentJECode | string |  | No |

### TDSSummaryDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| tdsSection | string | TDS Section<br/>_Example:_ `"193(a)"` | No |
| total | number | Total<br/>_Example:_ `1000` | No |
| totalAfterTdsDeduction | number | Total After TDS Deduction<br/>_Example:_ `900` | No |
| totalTaxDeductedAtSource | number | Total Tax Deduction source<br/>_Example:_ `100` | No |

### TargetContainer

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | [AddressDetails](#addressdetails) |  | No |
| name | string |  | No |
| vatNumber | string |  | No |

### TaxCalculationSections

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| lineItems | [ [TaxLineItems](#taxlineitems) ] | Line items | Yes |
| name | string | Name<br/>_Example:_ `"Section name"` | No |

### TaxLineItems

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Amount<br/>_Example:_ `2000` | No |
| currency | string | Currency symbol<br/>_Enum:_ `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>_Example:_ `"CAD"` | No |
| description | string | Description of line item<br/>_Example:_ `"GST/HST collected or collectible"` | No |
| editable | boolean | Editability of line item<br/>_Example:_ `true` | No |
| name | string | name of line item<br/>_Example:_ `"Line101"` | No |
| netAmount | number | Net Amount<br/>_Example:_ `200000` | No |
| taxAmount | number | Tax Amount<br/>_Example:_ `200` | No |
| transactionDetailsList | [ [TaxTransactionDetails](#taxtransactiondetails) ] | Transaction Details | No |

### TaxReportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fromDate | string | From date<br/>_Example:_ `"1-12-2020"` | No |
| lineItems | [ [TaxLineItems](#taxlineitems) ] | Line items | Yes |
| name | string | Report log name<br/>_Example:_ `"Tax Report by Tax Code"` | No |
| toDate | string | To date<br/>_Example:_ `"1-12-2020"` | No |

### TaxTransactionDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| boxAmount | number | Box amount contribution<br/>_Example:_ `200` | No |
| contactCode | string | Contact Code<br/>_Example:_ `"C-0000001"` | No |
| contactName | string | Contact Name<br/>_Example:_ `"Khoa Nguyen"` | No |
| currency | string | Document Currency<br/>_Example:_ `"CAD"` | No |
| documentDate | string | Document Date<br/>_Example:_ `"25-12-2020"` | No |
| documentNumber | string | Document Number<br/>_Example:_ `"0000001"` | No |
| documentType | string | Document Type<br/>_Example:_ `"Bill"` | No |
| exchangeRate | number | Exchange Rate<br/>_Example:_ `1` | No |
| gstExchangeRate | number | Tax rate<br/>_Example:_ `1` | No |
| productOrAccountCode | string | Product or Account code<br/>_Example:_ `"P-0000001"` | No |
| productOrAccountName | string | Product or Account name<br/>_Example:_ `"Account Receivable"` | No |
| taxAmount | number | Tax Amount<br/>_Example:_ `182` | No |
| taxAmountInBaseCurrency | number | Tax Amount in Base Currency<br/>_Example:_ `182` | No |
| taxCode | string | Tax code<br/>_Example:_ `"GST - ON (13%)"` | No |
| taxSeqCode | string | Tax sequence code<br/>_Example:_ `"T-0000001"` | No |
| totalAmount | number | Total Amount<br/>_Example:_ `182` | No |
| totalAmountInBaseCurrency | number | Total Amount in Base Currency<br/>_Example:_ `182` | No |

### TaxesDeductibleSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box59 | number |  | No |
| box62 | number |  | No |
| box64 | number |  | No |
| id | long |  | No |
| totalYY | number |  | No |

### TaxesDueSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box54 | number |  | No |
| box55 | number |  | No |
| box56 | number |  | No |
| box57 | number |  | No |
| box61 | number |  | No |
| box63 | number |  | No |
| id | long |  | No |
| totalXX | number |  | No |

### TaxesSection

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| box6OutputTaxDue | number |  | No |
| box7RefundsClaimed | number |  | No |
| box8GstToBePaidToIras | number |  | No |

### TemplateMeta

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| category | string | _Enum:_ `"QUOTE"`, `"INVOICE"`, `"CHEQUE"`, `"PAYMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"EXPENSE"`, `"DEPOSIT"`, `"REPORT_SALESBYCONTACT"`, `"REPORT_PURCHASEBYCONTACT"`, `"REPORT_PURCHASEBYPRODUCT"`, `"REPORT_SALESBYCONTACTDETAIL"`, `"REPORT_PURCHASEBYCONTACTDETAIL"`, `"REPORT_SALESBYPRODUCT"`, `"REPORT_STOCKVALUATION"`, `"REPORT_AGEDPAYABLEBYCONTACT"`, `"REPORT_AGEDPAYABLEBYCONTACTDETAIL"`, `"REPORT_AGEDRECEIVABLEBYCONTACT"`, `"REPORT_AGEDRECEIVABLEBYCONTACTDETAIL"`, `"REPORT_INVOICE"`, `"REPORT_BILLINVOICE"`, `"REPORT_QUOTE_LIST"`, `"REPORT_ORDER_LIST"`, `"REPORT_RECEIVEPAYMENT"`, `"REPORT_MAKEPAYMENT"`, `"REPORT_DEBIT_NOTES"`, `"REPORT_CREDIT_NOTES"`, `"ORDER"`, `"BILLS"`, `"STATEMENT_OF_ACCOUNT"` | No |
| displayName | string |  | No |
| module | string | _Enum:_ `"CRM"`, `"ERP"`, `"HRMS"`, `"ORGANISATION"`, `"PEOPLE"` | No |
| name | string |  | No |
| path | string |  | No |

### TemplateProvision

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| templates | [ [TemplateMeta](#templatemeta) ] |  | No |
| tenants | [ long ] |  | No |

### TopContactDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string |  | No |
| contactName | string |  | No |
| totalAmount | number |  | No |
| totalQuantity | number |  | No |

### TrialBalanceDetailDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account Id<br/>_Example:_ `1` | No |
| amount | number | Amount<br/>_Example:_ `999.99` | No |
| cdType | string | Credit/Debit Type<br/>_Enum:_ `"CREDIT"`, `"DEBIT"`<br/>_Example:_ `"DEBIT"` | No |
| code | string | Account Id<br/>_Example:_ `1` | No |
| creditAmount | number | Credit Account<br/>_Example:_ `999.99` | No |
| debitAmount | number | Debit Amount<br/>_Example:_ `999.99` | No |
| group | string | Account Group<br/>_Example:_ `"Current Assets"` | No |
| name | string | Account Name<br/>_Example:_ `"Savings account"` | No |
| openingBalance | number | Opening Balance Amount<br/>_Example:_ `9.99` | No |
| openingBalanceCdType | string | Opening balance Credit/Debit Type<br/>_Enum:_ `"CREDIT"`, `"DEBIT"`<br/>_Example:_ `"DEBIT"` | No |
| totalBalance | number | Summation of Opening Balance and Balance<br/>_Example:_ `999.99` | No |
| totalBalanceCdType | string | Total Balance Credit/Debit Type<br/>_Enum:_ `"CREDIT"`, `"DEBIT"`<br/>_Example:_ `"DEBIT"` | No |

### TrialBalanceDetailGroupingDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account Id<br/>_Example:_ `1` | No |
| accountGroup | string | Account Group<br/>_Example:_ `"Current Assets"` | No |
| accountId | long |  | No |
| accountName | string | Account Name<br/>_Example:_ `"Savings account"` | No |
| amount | number | Amount<br/>_Example:_ `999.99` | No |
| cdType | string | Credit/Debit Type<br/>_Enum:_ `"CREDIT"`, `"DEBIT"`<br/>_Example:_ `"DEBIT"` | No |
| creditAmount | number | Credit Account<br/>_Example:_ `999.99` | No |
| creditAmountWithChilds | number |  | No |
| debitAmount | number | Debit Amount<br/>_Example:_ `999.99` | No |
| debitAmountWithChilds | number |  | No |
| group | boolean |  | No |
| groupid | long |  | No |
| itemDto | [ [TrialBalanceDetailGroupingDto](#trialbalancedetailgroupingdto) ] |  | No |
| openingBalance | number | Opening Balance Amount<br/>_Example:_ `9.99` | No |
| openingBalanceCdType | string | Opening balance Credit/Debit Type<br/>_Enum:_ `"CREDIT"`, `"DEBIT"`<br/>_Example:_ `"DEBIT"` | No |
| parent | long |  | No |
| subGroupName | string |  | No |
| subGroupid | long |  | No |
| totalBalance | number | Summation of Opening Balance and Balance<br/>_Example:_ `999.99` | No |
| totalBalanceCdType | string | Total Balance Credit/Debit Type<br/>_Enum:_ `"CREDIT"`, `"DEBIT"`<br/>_Example:_ `"DEBIT"` | No |

### TrialBalanceDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| diffOpeningBalance | number | Difference in Amount<br/>_Example:_ `999.99` | No |
| totalCreditAmount | number | Total Credit Amount<br/>_Example:_ `999.99` | No |
| totalDebitAmount | number | Total Debit Amount<br/>_Example:_ `999.99` | No |
| trialBalanceDetailDto | [ [TrialBalanceDetailDto](#trialbalancedetaildto) ] | Trial Balance | No |

### TrialBalanceDetailsGroupingDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| diffOpeningBalance | number | Difference in Amount<br/>_Example:_ `999.99` | No |
| totalCreditAmount | number | Total Credit Amount<br/>_Example:_ `999.99` | No |
| totalDebitAmount | number | Total Debit Amount<br/>_Example:_ `999.99` | No |
| trialBalanceDetailDto | [ [TrialBalanceDetailGroupingDto](#trialbalancedetailgroupingdto) ] | Trial Balance | No |

### TrialBalanceRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amountInPrimaryCurrency | boolean |  | No |
| baseCurrency | string |  | No |
| basis | string | _Enum:_ `"ACCRUAL"`, `"CASH"` | No |
| customField | string |  | No |
| fileFormat | string | _Enum:_ `"XLS"`, `"PDF"`, `"CSV"` | No |
| fromDate | dateTime |  | No |
| primaryCurrency | string |  | No |
| toDate | dateTime |  | No |

### URI

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

### URL

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

### UkVatReportLogDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Amount<br/>_Example:_ `200000` | No |
| createdDate | dateTime | Creation Date<br/>_Example:_ `"2021-01-01"` | No |
| currency | string | Currency symbol<br/>_Enum:_ `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>_Example:_ `"GBP"` | No |
| deleted | boolean | Is deleted?<br/>_Example:_ `false` | No |
| filingYear | integer | Filing year<br/>_Example:_ `2021` | No |
| fromDate | string | From date<br/>_Example:_ `"2021-01-01"` | No |
| id | long | Report id<br/>_Example:_ `123` | No |
| name | string | Report log name<br/>_Example:_ `"Snapshot Name 1"` | No |
| reportData | [ [TaxCalculationSections](#taxcalculationsections) ] | Report data | No |
| status | string | Report status<br/>_Example:_ `"Not Filed"` | No |
| tenantId | long | tenantId<br/>_Example:_ `12345` | No |
| toDate | string | To date<br/>_Example:_ `"2021-01-01"` | No |

### UkVatReportLogRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filingYear | integer | Filing year<br/>_Example:_ `2021` | No |
| fromDate | dateTime | From Date | No |
| isObligation | boolean | Obligations<br/>_Example:_ `true` | No |
| toDate | dateTime | To Date | No |

### UkVatReportSettingsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filingFrequency | string | Filing frequency<br/>_Enum:_ `"MONTHLY"`, `"QUARTERLY"`, `"HALF_YEARLY"`, `"YEARLY"`<br/>_Example:_ `"YEARLY"` | No |
| firstPeriodStarts | string | Start of first period<br/>_Example:_ `"January"` | No |

### UnreserveQuantityRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| invoices | [ string ] |  | No |
| quotations | [ string ] |  | No |
| workOrders | [ string ] |  | No |

### UpdateTaxRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long |  | No |
| reportData | [ [TaxCalculationSections](#taxcalculationsections) ] |  | No |
| tenantId | long |  | No |

### VATINReportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ALAMAT_LENGKAP | string |  | No |
| FG_PENGGANTI | integer |  | No |
| FM | string |  | No |
| IS_CREDITABLE | integer |  | No |
| JUMLAH_DPP | number |  | No |
| JUMLAH_PPN | number |  | No |
| JUMLAH_PPNBM | integer |  | No |
| KD_JENIS_TRANSAKSI | integer |  | No |
| MASA_PAJAK | integer |  | No |
| NAMA | string |  | No |
| NOMOR_FAKTUR | string |  | No |
| NPWP | string |  | No |
| TAHUN_PAJAK | integer |  | No |
| TANGGAL_FAKTUR | string |  | No |

### VATReturn201Dto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| boxNumber | integer | Box Number<br/>_Example:_ `1` | No |
| label | string | Section name or heading<br/>_Example:_ `"Declaration"` | No |
| sectionNumber | string | Section number of the element<br/>_Example:_ `3` | No |
| sequenceNumber | integer | Sequence number of the element<br/>_Example:_ `2` | No |
| type | string | ELEMENT TYPE<br/>_Enum:_ `"GROUP"`, `"SUBGROUP"`, `"ELEMENT"`, `"TOTAL"`, `"NUMBER"`, `"TEXT"`, `"TABLEDATA"`, `"DATE"`<br/>_Example:_ `"ELEMENT"` | No |
| value1 | number | Taxable Amount for the element<br/>_Example:_ `1000` | No |
| value2 | number | Tax Amount<br/>_Example:_ `100` | No |

### VATReturnBelgiumActivityStatementReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancePaymentsSection | [AdvancePaymentsSection](#advancepaymentssection) | Advance Payments Section | No |
| balance | number | Balance<br/>_Example:_ `500` | No |
| balanceSection | [BalanceSection](#balancesection) | Balance Section | No |
| filingYear | integer | Report Filing Year<br/>_Example:_ `2020` | No |
| frequency | string | MONTHLY<br/>_Example:_ `"MONTHLY"` | No |
| fromDate | string | yyyy-MM-dd<br/>_Example:_ `"2020-12-28"` | No |
| inputsSection | [InputsSection](#inputssection) | Inputs Section | No |
| name | string | Activity Report<br/>_Example:_ `"Name of GST Return Report"` | No |
| outputsSection | [OutputsSection](#outputssection) | Outputs Section | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| reportSettings | [VATReturnBelgiumSettingsDto](#vatreturnbelgiumsettingsdto) | Report Settings | No |
| taxesDeductibleSection | [TaxesDeductibleSection](#taxesdeductiblesection) | Taxes Deductible Section | No |
| taxesDueSection | [TaxesDueSection](#taxesduesection) | Taxes Due Section | No |
| tempVATReturnLogReportId | string | Temporary VAT Return log report ID | No |
| toDate | string | yyyy-MM-dd<br/>_Example:_ `"2020-12-28"` | No |

### VATReturnBelgiumActivityStatementResp

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancePaymentsSection | [AdvancePaymentsSection](#advancepaymentssection) | Advance Payments Section | No |
| balance | number | Balance<br/>_Example:_ `500` | No |
| balanceSection | [BalanceSection](#balancesection) | Balance Section | No |
| creationDate | string | Creation Date<br/>_Example:_ `"01-12-2020"` | No |
| filingYear | integer | Report Filing Year<br/>_Example:_ `2020` | No |
| frequency | string | MONTHLY<br/>_Example:_ `"MONTHLY"` | No |
| fromDate | string | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |
| id | long | Id<br/>_Example:_ `1` | No |
| inputsSection | [InputsSection](#inputssection) | Inputs Section | No |
| name | string | GST Return Report<br/>_Example:_ `"Name of GST Return Report"` | No |
| outputsSection | [OutputsSection](#outputssection) | Outputs Section | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| reportSettings | [VATReturnBelgiumSettingsDto](#vatreturnbelgiumsettingsdto) | Report Settings | No |
| status | boolean | Status<br/>_Example:_ `true` | No |
| taxesDeductibleSection | [TaxesDeductibleSection](#taxesdeductiblesection) | Taxes Deductible Section | No |
| taxesDueSection | [TaxesDueSection](#taxesduesection) | Taxes Due Section | No |
| tempVATReturnLogReportId | string | Temporary VAT Return log report ID | No |
| toDate | string | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |

### VATReturnBelgiumNewReportReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filingYear | integer | Report Filing Year<br/>_Example:_ `2020` | No |
| frequency | string | MONTHLY<br/>_Example:_ `"MONTHLY"` | No |
| fromDate | string | YYYY-MM-DD<br/>_Example:_ `"2020-01-01"` | No |
| id | long | Report Id<br/>_Example:_ `1` | No |
| name | string | GST Return Report<br/>_Example:_ `"Name of GST Return Report"` | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| toDate | string | YYYY-MM-DD<br/>_Example:_ `"2020-12-31"` | No |

### VATReturnBelgiumSettingsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| deleted | boolean |  | No |
| filingFrequency | string |  | No |
| language | string |  | No |
| taxAccountBasis | string |  | No |
| vatNo | string |  | No |

### VATReturnBelgiumSettingsReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filingFrequency | string | MONTHLY/QUARTERLY<br/>_Example:_ `"MONTHLY"` | No |
| language | string | English/French/Dutch<br/>_Example:_ `"English"` | No |
| taxAccountBasis | string | ACCRUAL/CASH<br/>_Example:_ `"ACCRUAL"` | No |
| vatNo | string | 12345678909<br/>_Example:_ `12345678909` | No |

### VATReturnBelgiumSettingsResp

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| deleted | boolean | True/False<br/>_Example:_ `true` | No |
| filingFrequency | string | MONTHLY/QUARTERLY<br/>_Example:_ `"MONTHLY"` | No |
| id | long | Id<br/>_Example:_ `1` | No |
| language | string | English/French/Dutch<br/>_Example:_ `"English"` | No |
| taxAccountBasis | string | ACCRUAL/CASH<br/>_Example:_ `"ACCRUAL"` | No |
| vatNo | string | 12345678909<br/>_Example:_ `12345678909` | No |

### VATReturnSaudiActivityStatementReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| balance | number | Balance<br/>_Example:_ `500` | No |
| filingYear | integer | Report Filing Year<br/>_Example:_ `2020` | No |
| frequency | string | MONTHLY<br/>_Example:_ `"MONTHLY"` | No |
| fromDate | string | yyyy-MM-dd<br/>_Example:_ `"2020-12-28"` | No |
| name | string | VAT Return Report<br/>_Example:_ `"Name of VAT Return Report"` | No |
| netVATDueSection | [NetVATDueSection](#netvatduesection) | Net VAT Due Section | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| purchasesSection | [PurchasesSection](#purchasessection) | Purchases Section | No |
| salesSection | [SalesSection](#salessection) | Sales Section | No |
| tempVATReturnLogReportId | string | Temporary VAT Return log report ID | No |
| toDate | string | yyyy-MM-dd<br/>_Example:_ `"2020-12-28"` | No |

### VATReturnSaudiActivityStatementResp

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| balance | number | Balance<br/>_Example:_ `500` | No |
| creationDate | string | Creation Date<br/>_Example:_ `"01-12-2020"` | No |
| filingYear | integer | Report Filing Year<br/>_Example:_ `2020` | No |
| frequency | string | MONTHLY<br/>_Example:_ `"MONTHLY"` | No |
| fromDate | string | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |
| id | long | Id<br/>_Example:_ `1` | No |
| name | string | VAT Return Report<br/>_Example:_ `"Name of VAT Return Report"` | No |
| netVATDueSection | [NetVATDueSection](#netvatduesection) | Net VAT Due Section | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| purchasesSection | [PurchasesSection](#purchasessection) | Purchases Section | No |
| salesSection | [SalesSection](#salessection) | Sales Section | No |
| status | boolean | Status<br/>_Example:_ `true` | No |
| tempVATReturnLogReportId | string | Temporary VAT Return log report ID | No |
| toDate | string | DD-MM-YYYY<br/>_Example:_ `"01-12-2020"` | No |

### VATReturnSaudiNewReportReq

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filingYear | integer | Report Filing Year<br/>_Example:_ `2020` | No |
| frequency | string | MONTHLY<br/>_Example:_ `"MONTHLY"` | No |
| fromDate | string | YYYY-MM-DD<br/>_Example:_ `"2020-01-01"` | No |
| id | long | Report Id<br/>_Example:_ `1` | No |
| name | string | VAT Return Report<br/>_Example:_ `"Name of VAT Return Report"` | No |
| period | string | Jan<br/>_Example:_ `"Period for Report"` | No |
| toDate | string | YYYY-MM-DD<br/>_Example:_ `"2020-12-31"` | No |

### ValidateTargetVrnDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| consultationNumber | string |  | No |
| processingDate | string |  | No |
| requester | string |  | No |
| target | [TargetContainer](#targetcontainer) |  | No |

### VatOutItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| DISKON | number |  | No |
| DPP | number |  | No |
| HARGA_SATUAN | number |  | No |
| HARGA_TOTAL | number |  | No |
| JUMLAH_BARANG | number |  | No |
| KODE_OBJEK | string |  | No |
| NAMA | string |  | No |
| OF | string |  | No |
| PPN | number |  | No |
| PPNBM | number |  | No |
| TARIF_PPNBM | number |  | No |

### VatOutReportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ALAMAT_LENGKAP | string |  | No |
| FG_PENGGANTI | integer |  | No |
| FG_UANG_MUKA | number |  | No |
| FK | string |  | No |
| ID_KETERANGAN_TAMBAHAN | string |  | No |
| JUMLAH_DPP | number |  | No |
| JUMLAH_PPN | number |  | No |
| JUMLAH_PPNBM | number |  | No |
| KD_JENIS_TRANSAKSI | integer |  | No |
| MASA_PAJAK | integer |  | No |
| NAMA | string |  | No |
| NOMOR_FAKTUR | string |  | No |
| NPWP | string |  | No |
| REFERENSI | string |  | No |
| TAHUN_PAJAK | integer |  | No |
| TANGGAL_FAKTUR | string |  | No |
| UANG_MUKA_DPP | number |  | No |
| UANG_MUKA_PPN | number |  | No |
| UANG_MUKA_PPNBM | number |  | No |
| lineItems | [ [VatOutItemDto](#vatoutitemdto) ] |  | No |

### WHTReportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | string |  | No |
| atccode | string |  | No |
| branchCode | string |  | No |
| companyName | string |  | No |
| firstName | string |  | No |
| individualName | string |  | No |
| lastName | string |  | No |
| middleName | string |  | No |
| natureDescription | string |  | No |
| reportingMonth | string |  | No |
| srNo | integer |  | No |
| vendorTIN | string |  | No |
| whtamount | number |  | No |
| whtassesableAmount | number |  | No |
| whtrate | number |  | No |

### WarehouseInventoryData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingData | [ [AdvancedTrackingBOMDto](#advancedtrackingbomdto) ] | Advanced tracking to fulfil list | No |
| binCode | string | bin code<br/>_Example:_ `"BIN-00001"` | Yes |
| binName | string | bin name<br/>_Example:_ `"BIN-00001"` | No |
| id | long | Id<br/>_Example:_ `1` | No |
| quantity | number | Warehouse Code<br/>_Example:_ `1` | No |
| rackCode | string | Rack code<br/>_Example:_ `"RACK-00001"` | Yes |
| rackName | string | Rack name<br/>_Example:_ `"RACK-00001"` | No |
| rowCode | string | Row code<br/>_Example:_ `"ROW-00001"` | Yes |
| rowName | string | Row Nane<br/>_Example:_ `"ROW-00001"` | No |
| warehouseCode | string | Warehouse Code<br/>_Example:_ `"WH-0000001"` | No |
| warehouseName | string | Warehouse Name<br/>_Example:_ `"Warehouse name"` | No |

### WarehouseMultipleSchemaData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| uomLabel | string |  | No |
| uomQuantity | number |  | No |





























### AdditionalField

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| columnName | string |  | No |
| currency | boolean |  | No |
| displayName | string |  | No |
| name | string |  | No |
| value | number |  | No |

### AdditionalFilter

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| apiUrl | string |  | No |
| callApi | boolean |  | No |
| condition | string |  | No |
| dataType | string |  | No |
| defaultValue | string |  | No |
| displayName | string |  | No |
| paramFunction | string |  | No |
| placeHolderNames | string |  | No |
| tableColumn | string |  | No |
| tableName | string |  | No |
| value | string |  | No |
| valuesArray | [ [Duration](#duration) ] |  | No |

### ColumnMapping

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allowToMap | boolean |  | No |
| colIndex | integer |  | No |
| columnName | string |  | No |
| displayName | string |  | No |
| fileColIndex | integer |  | No |
| type | string | *Enum:* `"DATE"`, `"DOUBLE"`, `"INT"`, `"TEXT"` | No |

### CustomFieldReportFilter

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| condition | string | *Enum:* `"EQUALS"`, `"LIKE"`, `"LESS_THAN"`, `"GREATER_THAN"`, `"LESS_THAN_EQUALS"`, `"GREATER_THAN_EQUALS"`, `"IS_EMPTY"`, `"IS_NOT_EMPTY"`, `"IN"`, `"eq"` | No |
| dataType | string | *Enum:* `"STRING"`, `"NUMBER"`, `"DATE"`, `"BOOLEAN"`, `"SELECT"`, `"MULTI_SELECT"`, `"DURATION"`, `"DROPDOWN"` | No |
| module | string |  | No |
| operatorJoinedWithValue | string |  | No |
| tableName | string |  | No |
| value | string |  | No |

### DataTable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | *Enum:* `"ERP"`, `"CRM"`, `"PEOPLE"`, `"REPORT_BUILDER"`, `"CRM3"` | No |
| columns | [ string ] |  | No |
| customFieldColumns | [ string ] |  | No |
| isCustomTable | boolean |  | No |
| joinSchema | [ [JoinSchema](#joinschema) ] |  | No |
| name | string |  | No |

### DriveItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| createdDateTime | dateTime |  | No |
| id | string |  | No |
| lastModifiedDateTime | dateTime |  | No |
| name | string |  | No |
| parentReference | [DriveItem](#driveitem) |  | No |
| path | string |  | No |

### Duration

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| key | string |  | No |
| value | string |  | No |

### ExportColumnMetadata

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| display | string |  | No |
| index | integer |  | No |
| key | string |  | No |

### File

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

### FileMetaLogDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| columnMappings | [ [ColumnMapping](#columnmapping) ] |  | No |
| deleted | boolean |  | No |
| fileId | string |  | No |
| fileName | string |  | No |
| id | long |  | No |
| s3Bucket | string |  | No |
| s3RelativePath | string |  | No |
| tableName | string |  | No |
| tenantId | long |  | No |

### FileMetaSaveRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appId | long |  | No |
| driveItems | [ [DriveItem](#driveitem) ] |  | No |

### Function

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| columns | [ string ] |  | No |
| name | string |  | No |

### GroupBy

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| columns | [ string ] |  | No |
| customColumns | [ string ] |  | No |
| functions | [ [Function](#function) ] |  | No |
| tableName | string |  | No |

### InputStream

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| InputStream | object |  |  |

### JoinSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| base_column | string | Base column<br/>*Example:* `"product_code"` | Yes |
| on | string | Column for join<br/>*Example:* `"document_code"` | Yes |
| table | string | Table to join<br/>*Example:* `"product_report"` | Yes |
| type | string | Type of join column<br/>*Example:* `"string"` | Yes |

### Map«string,object»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Map«string,object» | object |  |  |

### Pageable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| offset | long |  | No |
| pageNumber | integer |  | No |
| pageSize | integer |  | No |
| paged | boolean |  | No |
| sort | [Sort](#sort) |  | No |
| unpaged | boolean |  | No |

### Page«FileMetaLogDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [FileMetaLogDto](#filemetalogdto) ] |  | No |
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

### Page«ReportDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ReportDto](#reportdto) ] |  | No |
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

### ReportDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | *Enum:* `"ERP"`, `"CRM"`, `"PEOPLE"`, `"REPORT_BUILDER"`, `"CRM3"` | No |
| createdBy | long |  | No |
| createdDt | string |  | No |
| data | string |  | No |
| favourite | boolean |  | No |
| reportDesc | string |  | No |
| reportName | string |  | No |
| systemReport | boolean |  | No |
| thumbnail | string |  | No |
| uid | string |  | No |
| updatable | boolean |  | No |
| updatedDt | string |  | No |

### ReportEmailRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| body | string |  | No |
| exportColumnConfig | [ [ExportColumnMetadata](#exportcolumnmetadata) ] |  | No |
| filterOnRolesFlg | boolean | True/False<br/>*Example:* `true` | No |
| recipientEmails | [ string ] |  | No |
| reportMetadata | [ReportMetadata](#reportmetadata) |  | No |
| reportName | string |  | No |
| subject | string |  | No |
| widgetName | string | My Widget Name<br/>*Example:* `"Accounts List"` | Yes |

### ReportEmailResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| batch_size | integer |  | No |
| is_async | boolean |  | No |
| result | string |  | No |
| total_record_count | long |  | No |

### ReportExportRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| exportColumnConfig | [ [ExportColumnMetadata](#exportcolumnmetadata) ] |  | No |
| filterOnRolesFlg | boolean | True/False<br/>*Example:* `true` | No |
| reportMetadata | [ReportMetadata](#reportmetadata) |  | No |
| widgetName | string | My Widget Name<br/>*Example:* `"Accounts List"` | Yes |

### ReportExportResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| batch_size | integer |  | No |
| download_link | string |  | No |
| is_async | boolean |  | No |
| total_record_count | long |  | No |

### ReportField

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| country | string | Country Code<br/>*Example:* `"IN"` | No |
| currency | boolean | Is Currency Field<br/>*Example:* `true` | No |
| customField | boolean | Is Custom Field<br/>*Example:* `true` | No |
| data_type | string | Column Type<br/>*Example:* `"string"` | Yes |
| display | string | Column Name Display<br/>*Example:* `"Document Code"` | Yes |
| name | string | Column Name<br/>*Example:* `"document_code"` | Yes |
| possible_values | [ string ] | Default Value | No |
| showInFilters | boolean | Show In filters<br/>*Example:* `true` | No |

### ReportFilter

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| condition | string | *Enum:* `"EQUALS"`, `"LIKE"`, `"LESS_THAN"`, `"GREATER_THAN"`, `"LESS_THAN_EQUALS"`, `"GREATER_THAN_EQUALS"`, `"IS_EMPTY"`, `"IS_NOT_EMPTY"`, `"IN"`, `"eq"` | No |
| dataType | string | *Enum:* `"STRING"`, `"NUMBER"`, `"DATE"`, `"BOOLEAN"`, `"SELECT"`, `"MULTI_SELECT"`, `"DURATION"`, `"DROPDOWN"` | No |
| tableColumn | string |  | No |
| tableName | string |  | No |
| value | string |  | No |

### ReportMetadata

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalFilters | [ [ReportFilter](#reportfilter) ] |  | No |
| chartType | string | *Enum:* `"TABLE"`, `"BAR"`, `"LINE"`, `"PIE"`, `"BAR_VERTICAL"`, `"MULTI_BAR_VERTICAL"`, `"BAR_HORIZONTAL"`, `"MULTI_BAR_HORIZONTAL"`, `"DONUT"` | No |
| customFieldFilters | [ [CustomFieldReportFilter](#customfieldreportfilter) ] |  | No |
| dataTables | [ [DataTable](#datatable) ] |  | No |
| filters | [ [ReportFilter](#reportfilter) ] |  | No |
| groupBy | [GroupBy](#groupby) |  | No |
| logicalOperator | string |  | No |
| pointers | [ string ] |  | No |
| sectionSlices | [ string ] |  | No |
| sortBy | [SortBy](#sortby) |  | No |
| toDate | dateTime |  | No |
| xaxis | [ string ] |  | No |
| yaxis | [ string ] |  | No |

### ReportMultiExportRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| reportName | string | My Report Name<br/>*Example:* `"Accounts List"` | Yes |
| widgets | [ [ReportExportRequest](#reportexportrequest) ] |  | No |

### ReportPageDataResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalFields | [ [AdditionalField](#additionalfield) ] |  | No |
| columnTotal | object |  | No |
| data | [ [Map«string,object»](#map«string,object») ] |  | No |
| limit | integer |  | No |
| page | integer |  | No |
| sortBy | [SortBy](#sortby) |  | No |
| totalCount | integer |  | No |

### ReportRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | App Name<br/>*Enum:* `"ERP"`, `"CRM"`, `"PEOPLE"`, `"REPORT_BUILDER"`, `"CRM3"`<br/>*Example:* `"ERP"` | Yes |
| data | string | Report Metadata | Yes |
| favourite | boolean | Favourite<br/>*Example:* `true` | No |
| reportDesc | string | Report Description<br/>*Example:* `"Statement Of Account"` | No |
| reportName | string | Report Name<br/>*Example:* `"Accounts List"` | Yes |
| systemReport | boolean | System Report<br/>*Example:* `true` | Yes |
| thumbnail | string | Report thumbnail relative path<br/>*Example:* `"report/thumbnail/a.png"` | No |

### ReportTable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean |  | No |
| additionalFields | [ [AdditionalField](#additionalfield) ] |  | No |
| additionalFilters | [ [AdditionalFilter](#additionalfilter) ] |  | No |
| appName | string | *Enum:* `"ERP"`, `"CRM"`, `"PEOPLE"`, `"REPORT_BUILDER"`, `"CRM3"` | No |
| cfModules | [ string ] |  | No |
| customReport | boolean |  | No |
| description | string |  | No |
| displayName | string |  | No |
| fields | [ [ReportField](#reportfield) ] |  | No |
| id | long |  | No |
| joinSchema | [ [JoinSchema](#joinschema) ] |  | No |
| showAdditionalFields | boolean |  | No |
| source | string |  | No |
| tableName | string |  | No |
| tenantId | long |  | No |

### Resource

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

### RevenueReportRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| dimensionId | string |  | No |
| names | [ string ] |  | No |
| startOfMonth | string |  | No |
| startOfYear | string |  | No |
| toDate | string |  | No |

### RevenueReportResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| mtdProfit | object |  | No |
| mtdRevenue | object |  | No |
| name | string |  | No |
| ytdProfit | object |  | No |
| ytdRevenue | object |  | No |

### Sort

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| empty | boolean |  | No |
| sorted | boolean |  | No |
| unsorted | boolean |  | No |

### SortBy

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| column | string |  | No |
| dataType | string | *Enum:* `"STRING"`, `"NUMBER"`, `"DATE"`, `"BOOLEAN"`, `"SELECT"`, `"MULTI_SELECT"`, `"DURATION"`, `"DROPDOWN"` | No |
| direction | string | *Enum:* `"ASC"`, `"DESC"` | No |
| table | string |  | No |

### URI

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

### URL

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