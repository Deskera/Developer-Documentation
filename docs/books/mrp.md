---
id: mrpapi
title: MRP APIs
sidebar_label: MRP
---

More about [MRP API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-42c6c99a-069a-459d-8a81-f46c142b6916)

# Deskera - MRP Service
MRP service APIs.

## delivery-schedule-controller
Delivery Schedule Controller

### /v1/mrp/deliveryschedule

#### GET
##### Summary

Get delivery schedule.

##### Description

API to get delivery schedule for given delivery schedule id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentCode | query | documentCode | Yes | string |
| documentType | query | documentType | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Delivery schedule have been fetched successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Delivery schedule with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create new delivery schedule.

##### Description

API to create new delivery schedule.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| deliveryScheduleRequest | body | deliveryScheduleRequest | Yes | [DeliveryScheduleRequest](#deliveryschedulerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [DeliveryScheduleResponse](#deliveryscheduleresponse) |
| 201 | Delivery schedule has been created successfully. | [DeliveryScheduleResponse](#deliveryscheduleresponse) |
| 400 | Delivery schedule creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete delivery schedule.

##### Description

API to delete existing delivery schedule.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| deliveryScheduleIds | body | deliveryScheduleIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Delivery schedule has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Delivery schedule with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/deliveryschedule/search

#### GET
##### Summary

Search delivery schedule.

##### Description

API to search existing delivery schedule.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Delivery schedule have been fetched successfully. | [Page«DeliveryScheduleResponse»](#page«deliveryscheduleresponse») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/deliveryschedule/{id}

#### GET
##### Summary

Get delivery schedule.

##### Description

API to get delivery schedule for given delivery schedule id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Delivery schedule have been fetched successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Delivery schedule with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update existing delivery schedule.

##### Description

API to update existing delivery schedule.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| deliveryScheduleRequest | body | deliveryScheduleRequest | Yes | [DeliveryScheduleRequest](#deliveryschedulerequest) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Delivery schedule has been updated successfully. | [DeliveryScheduleResponse](#deliveryscheduleresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Delivery schedule with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/deliveryschedule/{id}/wo/productioninfo

#### GET
##### Summary

Get delivery schedule work order production info.

##### Description

API to get delivery schedule work order production info for given delivery schedule id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Delivery schedule work order production info have been fetched successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Delivery schedule with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## forecast-controller
Forecast Controller

### /v1/mrp/forecast

#### POST
##### Summary

Create new forecast.

##### Description

API to create new forecast.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| forecastRequest | body | forecastRequest | Yes | [ForecastRequest](#forecastrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ForecastResponse](#forecastresponse) |
| 201 | Forecast has been created successfully. | [ForecastResponse](#forecastresponse) |
| 400 | Forecast creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Forecast.

##### Description

API to delete existing forecast.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| forecastIds | body | forecastIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Forecast has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Forecast with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/forecast/forecastdetails

#### GET
##### Summary

getProductForecastDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| forecastId | query | forecastId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ProductForecastDetailsDto](#productforecastdetailsdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/forecast/linked-docs/product-codes

#### POST
##### Summary

Get products by code

##### Description

API to Get products by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product information has been fetched successfully. | string |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Products not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/forecast/saveforecastdetails

#### POST
##### Summary

Create new forecast.

##### Description

API to create new forecast.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| forecastRequest | body | forecastRequest | Yes | [ [ProductForecastDetailsDto](#productforecastdetailsdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ForecastResponse](#forecastresponse) |
| 201 | Forecast has been created successfully. | [ForecastResponse](#forecastresponse) |
| 400 | Forecast creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/forecast/search

#### GET
##### Summary

Search Forecast.

##### Description

API to search existing forecast.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Forecast have been fetched successfully. | [Page«ForecastResponse»](#page«forecastresponse») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/forecast/{id}

#### GET
##### Summary

Get Forecast.

##### Description

API to get forecast for given forecast id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Forecast have been fetched successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Forecast with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update existing forecast.

##### Description

API to update existing forecast.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| forecastRequest | body | forecastRequest | Yes | [ForecastRequest](#forecastrequest) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Forecast has been updated successfully. | [ForecastResponse](#forecastresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Forecast with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## job-card-controller
Job Card APIs

### /v1/mrp/jobcard

#### POST
##### Summary

Create new job card.

##### Description

API to create new job card.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| jobCardRequest | body | jobCardRequest | Yes | [JobCardRequest](#jobcardrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [JobCardResponse](#jobcardresponse) |
| 201 | Job Card has been created successfully. | [JobCardResponse](#jobcardresponse) |
| 400 | Job Card creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Job Card.

##### Description

API to delete existing Job Card.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| jobCardId | body | jobCardId | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Job Card has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Job Card has been created successfully. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/jobcard/bulk

#### POST
##### Summary

Create multiple job card

##### Description

API to create job card.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| jobCardRequests | body | jobCardRequests | Yes | [ [JobCardRequest](#jobcardrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [JobCardResponse](#jobcardresponse) |
| 201 | Job Card has been created successfully. | [JobCardResponse](#jobcardresponse) |
| 400 | Job Card could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/jobcard/search

#### GET
##### Summary

Search Job Card.

##### Description

API to search existing Job Card.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Job Card have been fetched successfully. | [Page«JobCardResponse»](#page«jobcardresponse») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/jobcard/updatestatus/{status}

#### PUT
##### Summary

Update Job Card status

##### Description

API to Update Job Card status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| jobCardCodes | body | jobCardCodes | Yes | [ string ] |
| status | path | status | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 204 | job card has been updated successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Job card with id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/jobcard/workorder/{code}

#### GET
##### Summary

Search Job Card by work order

##### Description

API to search existing Job Card with work order code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Job Card have been fetched successfully. | [ [JobCardResponse](#jobcardresponse) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/jobcard/{id}

#### PUT
##### Summary

Update existing job card.

##### Description

API to update existing job card.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| jobCardRequest | body | jobCardRequest | Yes | [JobCardRequest](#jobcardrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | job card has been updated successfully. | [JobCardResponse](#jobcardresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | job card with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update job card attributes.

##### Description

API to update attributes of existing job card.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| jobCardRequest | body | jobCardRequest | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | JC attributes has been updated successfully. | [JobCardResponse](#jobcardresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Job card with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## mrp-master-data-controller
MRP Masters APIs

### /v1/mrp/master/holidaylist

#### POST
##### Summary

Create Holiday list.

##### Description

API to create new Holiday list.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| holidayListDto | body | holidayListDto | Yes | [HolidayListDto](#holidaylistdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [HolidayListDto](#holidaylistdto) |
| 201 | Holiday list has been created successfully. | [HolidayListDto](#holidaylistdto) |
| 400 | Holiday list creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/master/holidaylist/all

#### GET
##### Summary

Get holiday list details.

##### Description

API to get All holiday list details.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Holiday list details have been fetched successfully. | [HolidayListDto](#holidaylistdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/master/holidaylist/holiday-ids

#### POST
##### Summary

Get holiday list details.

##### Description

API to get holiday list details for given holiday list ids.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| holidayListIds | body | holidayListIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Holiday list details have been fetched successfully. | [HolidayListDto](#holidaylistdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/master/holidaylist/search

#### GET
##### Summary

Search Holiday list.

##### Description

API to search existing holiday list.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Holiday list have been fetched successfully. | [Page«HolidayListDto»](#page«holidaylistdto») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/master/holidaylist/{id}

#### PUT
##### Summary

Update holiday list.

##### Description

API to update existing holiday list.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| holidayListDto | body | holidayListDto | Yes | [HolidayListDto](#holidaylistdto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Holiday list has been updated successfully. | [HolidayListDto](#holidaylistdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Holiday list with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete holiday list

##### Description

Api to delete holiday list

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Holiday list has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Holiday list with id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/master/linked-docs/product-codes

#### POST
##### Summary

Get products by code

##### Description

API to Get products by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product information has been fetched successfully. | [ [LinkedDocumentsDto](#linkeddocumentsdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Products not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/master/workstation

#### POST
##### Summary

Create Workstation.

##### Description

API to create new Workstation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| workstationDto | body | workstationDto | Yes | [WorkstationDto](#workstationdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [WorkstationDto](#workstationdto) |
| 201 | Workstation has been created successfully. | [WorkstationDto](#workstationdto) |
| 400 | Workstation creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/master/workstation/import

#### POST
##### Summary

Import Workstations

##### Description

API to import workstations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| workstationDtos | body | workstationDtos | Yes | [ [WorkstationDto](#workstationdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [WorkstationDto](#workstationdto) ] |
| 201 | Workstations have been imported successfully. | [ [WorkstationDto](#workstationdto) ] |
| 400 | Workstation import failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/master/workstation/search

#### GET
##### Summary

Search Workstations.

##### Description

API to search existing Workstations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Workstations have been fetched successfully. | [Page«WorkstationDto»](#page«workstationdto») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/master/workstation/{id}

#### PUT
##### Summary

Update workstation.

##### Description

API to update existing workstation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| workstationDto | body | workstationDto | Yes | [WorkstationDto](#workstationdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Workstation has been updated successfully. | [WorkstationDto](#workstationdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Workstation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete workstation

##### Description

Api to delete workstation

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Workstation has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Workstation with id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## operation-controller
Operation APIs

### /v1/mrp/operation

#### POST
##### Summary

Create new operation.

##### Description

API to create new operation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| operationRequest | body | operationRequest | Yes | [OperationRequest](#operationrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ProductResponse](#productresponse) |
| 201 | Operation has been created successfully. | [ProductResponse](#productresponse) |
| 400 | Operation creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete product.

##### Description

API to delete existing operation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| operationIds | body | operationIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Operation has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Operation has been created successfully. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/operation/ids

#### POST
##### Summary

Get operation details.

##### Description

API to get operation details for given operation ids.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Operation details have been fetched successfully. | [OperationResponse](#operationresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/operation/search

#### GET
##### Summary

Search Operations.

##### Description

API to search existing Operations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Operations have been fetched successfully. | [Page«OperationResponse»](#page«operationresponse») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/operation/{id}

#### PUT
##### Summary

Update existing operation.

##### Description

API to update existing operation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| operationRequest | body | operationRequest | Yes | [OperationRequest](#operationrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Operation has been updated successfully. | [OperationResponse](#operationresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Operation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## operator-controller
Operator APIs

### /v1/mrp/operator

#### POST
##### Summary

Create new operator.

##### Description

API to create new operator.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| operatorRequest | body | operatorRequest | Yes | [OperatorRequest](#operatorrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [OperatorResponse](#operatorresponse) |
| 201 | Operator has been created successfully. | [OperatorResponse](#operatorresponse) |
| 400 | Operator creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete operator.

##### Description

API to delete existing operator.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| operatorIds | body | operatorIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Operator has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Operator has been created successfully. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/operator/ids

#### POST
##### Summary

Get operator details.

##### Description

API to get operator details for given operator ids.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Operator details have been fetched successfully. | [OperatorResponse](#operatorresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/operator/import

#### POST
##### Summary

Import operators

##### Description

API to import operators.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| operatorRequest | body | operatorRequest | Yes | [ [OperatorRequest](#operatorrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [OperatorResponse](#operatorresponse) ] |
| 201 | Operator have been imported successfully. | [ [OperatorResponse](#operatorresponse) ] |
| 400 | Operator import failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/operator/search

#### GET
##### Summary

Search Operators.

##### Description

API to search existing Operators.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Operators have been fetched successfully. | [Page«OperatorResponse»](#page«operatorresponse») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/operator/worker-ids

#### POST
##### Summary

Get operator details.

##### Description

API to get operator details for given worker ids.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| workerIds | body | workerIds | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Operator details have been fetched successfully. | [OperatorResponse](#operatorresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/operator/{id}

#### PUT
##### Summary

Update existing operator.

##### Description

API to update existing operator.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| operatorRequest | body | operatorRequest | Yes | [OperatorRequest](#operatorrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Operator has been updated successfully. | [OperatorResponse](#operatorresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Operator with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## production-plan-controller
Production plan APIs

### /v1/mrp/productionplan

#### POST
##### Summary

Create new production plan.

##### Description

API to create new production plan.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productionPlanRequest | body | productionPlanRequest | Yes | [ProductionPlanRequest](#productionplanrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ProductionPlanResponse](#productionplanresponse) |
| 201 | Production plan has been created successfully. | [ProductionPlanResponse](#productionplanresponse) |
| 400 | Production plan creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Production plan.

##### Description

API to delete existing Production plan.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productionPlanId | body | productionPlanId | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Production plan has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Production plan has been created successfully. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/productionplan/search

#### GET
##### Summary

Search Production plan.

##### Description

API to search existing Production plan.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Production plan have been fetched successfully. | [Page«ProductionPlanResponse»](#page«productionplanresponse») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/productionplan/{id}

#### PUT
##### Summary

Update existing Production plan.

##### Description

API to update existing Production plan.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| productionPlanRequest | body | productionPlanRequest | Yes | [ProductionPlanRequest](#productionplanrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Production plan has been updated successfully. | [ProductionPlanResponse](#productionplanresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Production plan with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## quality-control-template-controller
Quality Control APIs

### /v1/mrp/qualitycontroltemplate

#### POST
##### Summary

Create new QC Template.

##### Description

API to create new QC Template.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| controlTemplateDto | body | controlTemplateDto | Yes | [QualityControlTemplateDto](#qualitycontroltemplatedto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QualityControlTemplateDto](#qualitycontroltemplatedto) |
| 201 | QC Template has been created successfully. | [QualityControlTemplateDto](#qualitycontroltemplatedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Template.

##### Description

API to delete existing Template.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| templateIds | body | templateIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Template has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Template with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/qualitycontroltemplate/search

#### GET
##### Summary

Search Template.

##### Description

API to search existing Operations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Operations have been fetched successfully. | [Page«QualityControlTemplateDto»](#page«qualitycontroltemplatedto») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/qualitycontroltemplate/template-ids

#### POST
##### Summary

Get Template details.

##### Description

API to get Template details for given template ids.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| templateIds | body | templateIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Template details have been fetched successfully. | [OperatorResponse](#operatorresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/qualitycontroltemplate/template-product-code/{product_code}

#### GET
##### Summary

Get Template details.

##### Description

API to get Template details for given product code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| product_code | path | product_code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Template details have been fetched successfully. | [OperatorResponse](#operatorresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/qualitycontroltemplate/template-usage-by-product

#### POST
##### Summary

API to get the template usage by product codes

##### Description

Product template usage note.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Product template usage have been fetched successfully. | [OperatorResponse](#operatorresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/qualitycontroltemplate/{id}

#### PUT
##### Summary

Update existing template.

##### Description

API to update existing template.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| controlTemplateDto | body | controlTemplateDto | Yes | [QualityControlTemplateDto](#qualitycontroltemplatedto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Template has been updated successfully. | [JobCardResponse](#jobcardresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Template with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## quality-inspection-controller
Quality Inspection APIs

### /v1/mrp/qualityinspection/createparameter

#### POST
##### Summary

Create Quality Inspection Parameter.

##### Description

API to create Quality Inspection Parameter.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| qcParameterRequest | body | qcParameterRequest | Yes | [QCParameterRequest](#qcparameterrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QCParameterGroupDto](#qcparametergroupdto) |
| 201 | Quality Inspection Parameter has been created successfully. | [QCParameterGroupDto](#qcparametergroupdto) |
| 400 | Quality Inspection Parameter creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/qualityinspection/createparametergroup

#### POST
##### Summary

Create Quality Inspection Parameter Group.

##### Description

API to create Quality Inspection Parameter Group.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| name | body | name | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QCParameterGroupDto](#qcparametergroupdto) |
| 201 | Quality Inspection Parameter Group has been created successfully. | [QCParameterGroupDto](#qcparametergroupdto) |
| 400 | Quality Inspection Parameter Group creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/qualityinspection/createtemplate

#### POST
##### Summary

Create Quality Inspection Template.

##### Description

API to create Quality Inspection Template.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| QCTemplateRequest | body | QCTemplateRequest | Yes | [QCTemplateRequest](#qctemplaterequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QCParameterGroupDto](#qcparametergroupdto) |
| 201 | Quality Inspection Template has been created successfully. | [QCParameterGroupDto](#qcparametergroupdto) |
| 400 | Quality Inspection Template creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/qualityinspection/parametergroupsearch

#### GET
##### Summary

Search QC Parameter Group.

##### Description

API to search existing QC Parameter Group.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | QC Parameter Group have been fetched successfully. | [Page«QCParameterGroupDto»](#page«qcparametergroupdto») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/qualityinspection/parametersearch

#### GET
##### Summary

Search QC Parameter Group.

##### Description

API to search existing QC Parameter Group.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | QC Parameter Group have been fetched successfully. | [Page«QCParameterResponse»](#page«qcparameterresponse») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/qualityinspection/templatesearch

#### GET
##### Summary

Search QC Parameter Group.

##### Description

API to search existing QC Parameter Group.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | QC Parameter Group have been fetched successfully. | [Page«QCTemplateResponse»](#page«qctemplateresponse») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## work-order-controller
work Order APIs

### /v1/mrp/workorder

#### POST
##### Summary

Create work order

##### Description

API to create work order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| workOrderRequest | body | workOrderRequest | Yes | [AbstractWorkOrderRequest](#abstractworkorderrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AbstractWorkOrderResponse](#abstractworkorderresponse) |
| 201 | work order has been created successfully. | [AbstractWorkOrderResponse](#abstractworkorderresponse) |
| 400 | work order could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Work Order.

##### Description

API to delete existing Work Order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| workOrderIds | body | workOrderIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Work Order has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Work Order has been created successfully. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/workorder/bulk

#### POST
##### Summary

Create multiple job card

##### Description

API to create job card.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| workOrderRequests | body | workOrderRequests | Yes | [ [AbstractWorkOrderRequest](#abstractworkorderrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AbstractWorkOrderResponse](#abstractworkorderresponse) |
| 201 | Job Card has been created successfully. | [AbstractWorkOrderResponse](#abstractworkorderresponse) |
| 400 | Job Card could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/workorder/bulk/workIds

#### POST
##### Summary

Api to fetch work orders in bulk based on work order Ids

##### Description

Api to fetch work orders

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| workOrderCodes | body | workOrderCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Api to fetch work orders in bulk | [AbstractWorkOrderResponse](#abstractworkorderresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/workorder/getUsedBomCodes

#### GET
##### Summary

Get Used Bom codes by product code.

##### Description

API to get used bom codes by product code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Used Bom codes by product code. | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/workorder/schedule-plan

#### GET
##### Summary

Work Order Scheduling Plan

##### Description

Work Order Scheduling Plan API

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Work Order Scheduling Plan fetched successfully. | [SchedulePlanDto](#scheduleplandto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/workorder/search

#### GET
##### Summary

Search Work Order.

##### Description

API to search existing Work Order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Work Order have been fetched successfully. | [Page«AbstractWorkOrderResponse»](#page«abstractworkorderresponse») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/workorder/unreserve-work-orders

#### POST
##### Summary

Api to Unreserve quantity in work orders only

##### Description

Api to Unreserve quantity in work orders only

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| updatedWorkOrderCodes | body | updatedWorkOrderCodes | Yes | [ string ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Api to Unreserve quantity in work orders only |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/workorder/update-so-column

#### POST
##### Summary

Api to update sales order code in work orders for all tenants

##### Description

Api to update sales order code in work orders

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Api to fetch work orders in bulk |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/workorder/updateQCStatus/{workOrderDocSeqCode}

#### PUT
##### Summary

Update work order QC status

##### Description

API to Update work order QC status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bomAssemblyCode | body | bomAssemblyCode | Yes | string |
| workOrderDocSeqCode | path | workOrderDocSeqCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 204 | Work Order QC status has been updated successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Work Order with given work order code and BOM code not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/workorder/updateRequisitionStatus/{workOrderCode}

#### PUT
##### Summary

Update work order Requisition pending status

##### Description

API to Update work order Requisition pending status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| isRequisitionPending | body | isRequisitionPending | Yes | boolean |
| workOrderCode | path | workOrderCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 204 | Work order requisition pending status has been updated successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Work order code not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/workorder/{code}

#### GET
##### Summary

Work Order By Code.

##### Description

API to search existing Work Order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Work Order have been fetched successfully. | [AbstractWorkOrderResponse](#abstractworkorderresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/workorder/{id}

#### PUT
##### Summary

Update work order.

##### Description

API to update existing work order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| workOrderRequest | body | workOrderRequest | Yes | [AbstractWorkOrderRequest](#abstractworkorderrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Work Order has been updated successfully. | [AbstractWorkOrderResponse](#abstractworkorderresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Work Order with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update work Order attributes.

##### Description

API to update attributes of existing work order.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| workOrderRequest | body | workOrderRequest | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | WO attributes has been updated successfully. | [AbstractWorkOrderResponse](#abstractworkorderresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | WorkOrder with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/workorder/{id}/{status}

#### PUT
##### Summary

Update work order status

##### Description

API to Update work order status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| status | path | status | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 204 | Work Order has been updated successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Work Order with given id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## wip-consumption-production-controller
Work Order WIP Consumption and Production log APIs

### /v1/mrp/workorderconsumption

#### POST
##### Summary

Create Work Order WIP Consumption and Production logs

##### Description

API to create work order WIP consumption and production logs.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| wipConsumptionProductionRequests | body | wipConsumptionProductionRequests | Yes | [ [WIPConsumptionProductionRequest](#wipconsumptionproductionrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Work Order WIP Consumption and Production logs has been created successfully. | [ object ] |
| 400 | Work Order WIP Consumption and Production logs creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update existing WIP Consumption and Production log.

##### Description

API to update existing WIP Consumption and Production log.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| wipConsumptionProductionRequests | body | wipConsumptionProductionRequests | Yes | [ [WIPConsumptionProductionRequest](#wipconsumptionproductionrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | WIP Consumption and Production log has been updated successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | WIP Consumption and Production log with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete WIP Consumption and Production log.

##### Description

API to delete existing WIP Consumption and Production log.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | WIP Consumption and Production log has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | WIP Consumption and Production log has been created successfully. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/workorderconsumption/ids

#### POST
##### Summary

Get WIP Consumption and Production log details.

##### Description

API to get WIP Consumption and Production log details for given operation ids.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | WIP Consumption and Production log details have been fetched successfully. | [WIPConsumptionProductionResponse](#wipconsumptionproductionresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/workorderconsumption/search

#### GET
##### Summary

Search WIP Consumption and Production data.

##### Description

API to search existing WIP Consumption and Production data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| productCodes | query | productCodes | No | string |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | WIP Consumption and Production data have been fetched successfully. | [Page«WIPConsumptionProductionResponse»](#page«wipconsumptionproductionresponse») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/workorderconsumption/updateQCStatus/{workOrderDocSeqCode}

#### PUT
##### Summary

Update WIP Production QC status

##### Description

API to Update WIP Production QC status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| stockAdjustmentCode | body | stockAdjustmentCode | Yes | string |
| workOrderDocSeqCode | path | workOrderDocSeqCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 204 | WIP Production QC status has been updated successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | WIP Production with given work order code and BOM code not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/mrp/workorderconsumption/workOrderCode

#### POST
##### Summary

Get WIP Consumption and Production productwise data for given work order.

##### Description

API to get WIP Consumption and Production productwise data for given work order code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| workOrderCode | body | workOrderCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | WIP Consumption and Production product wise data for work order have been fetched successfully. | [WIPConsumptionProductionProductwiseData](#wipconsumptionproductionproductwisedata) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
### Models

#### AbstractWorkOrderItemDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| addToRequisition | boolean |  | No |
| costPerUnit | number | Per Unit Price<br/>*Example:* `3` | No |
| documentSequenceCode | string | Product Document Sequence Code<br/>*Example:* `"WOI-0000001"` | Yes |
| id | long | ID<br/>*Example:* `2` | No |
| plannedQuantity | number | Planned Product quantity<br/>*Example:* `3` | No |
| produceProductType | string | Produce Product type<br/>*Enum:* `"NONE"`, `"SCRAP"`, `"COPRODUCT"`<br/>*Example:* `"SCRAP"` | Yes |
| producedQuantity | number | Produce Product quantity<br/>*Example:* `3` | No |
| productCode | string | Product code<br/>*Example:* `"P00001"` | Yes |
| productCustomField | [ [CustomFieldItem](#customfielditem) ] | Product custom fields<br/>*Example:* `[]` | No |
| productName | string | Product Name <br/>*Example:* `"Test Product"` | No |
| productSubstitutesDetails | [ [ProductSubstiteItemDetails](#productsubstiteitemdetails) ] | Substitute item details | No |
| requisitionQuantity | number |  | No |
| reservedQuantitiesData | [ [ReservedQuantityData](#reservedquantitydata) ] | Reserved quantity data<br/>*Example:* `[]` | No |
| reservedStock | boolean | Reserved stock enabled<br/>*Example:* `true` | No |
| sourceWarehouseCode | string | source warehouse code<br/>*Example:* `"WH-000001"` | No |
| warehouseInventoryData | [ [WarehouseInventoryData](#warehouseinventorydata) ] | Work Order Details | Yes |
| workOrderItemCode | string | Item Sequence Code<br/>*Example:* `"WOI-0000001"` | Yes |

#### AbstractWorkOrderOperationDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| completedQuantity | number | Completed quantity<br/>*Example:* `3` | No |
| description | string |  description | No |
| documentSequenceCode | string | Work Order Operation Document Sequence Code<br/>*Example:* `"WOO-0000001"` | Yes |
| id | long | ID<br/>*Example:* `2` | No |
| operationCode | string | operation code<br/>*Example:* `"O-000001"` | No |
| operationCost | number |  | No |
| operationId | long | Operation Id | No |
| operationTime | number | Operation time<br/>*Example:* `3` | No |
| operatorCost | number |  | No |
| plannedStartTime | dateTime | planned start time | No |
| status | string | operation status<br/>*Enum:* `"COMPLETED"`, `"IN_PROGRESS"`, `"PENDING"`<br/>*Example:* `"COMPLETED"` | No |
| workerId | string |  | No |
| workstationCode | string | workstation code<br/>*Example:* `"WS-000001"` | No |
| workstationCost | number |  | No |

#### AbstractWorkOrderRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| actualEndDate | dateTime | Actual end date<br/>*Example:* `"25-10-2019"` | No |
| actualQuantity | number | Manufacturing quantity <br/>*Example:* `2` | No |
| actualStartDate | dateTime | Actual start date<br/>*Example:* `"25-10-2019"` | No |
| actualYield | number |  | No |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Additional charges  | No |
| bomAssemblyCode | string |  | No |
| bomMetaCode | string | BOM Meta Code<br/>*Example:* `"000001"` | No |
| bomMetaDetails | [BomMetaDetailsDto](#bommetadetailsdto) | BOM Meta details | No |
| deliveryDate | dateTime | Delivery date<br/>*Example:* `"25-10-2019"` | No |
| documentSequenceCode | string | Work Order Code<br/>*Example:* `"0000001"` | No |
| inProgressWarehouseCode | string | In Progress Warehouse Code <br/>*Example:* `"WH-0000001"` | No |
| includeByProductCost | boolean | Include By product cost<br/>*Example:* `true` | No |
| isQcEnabled | boolean | Flag will pass as true for QC work flow. Possible value - TRUE \| FALSE<br/>*Example:* `false` | No |
| isRequisitionPending | boolean |  | No |
| jobWorkOutOrderCost | number |  | No |
| manufactureQuantity | number | Manufacturing quantity <br/>*Example:* `2` | No |
| operationCostDetails | [OperationCostDetails](#operationcostdetails) | Work Order cost details | No |
| parentWorkOrderCode | string | Parent Work Order code <br/>*Example:* `"WO-0000001"` | No |
| parentWorkOrderSeqCode | string | Parent Work Order seq code <br/>*Example:* `"WO-0000001"` | No |
| plannedEndDate | dateTime | Planned start date<br/>*Example:* `"25-10-2019"` | No |
| plannedStartDate | dateTime | Planned start date<br/>*Example:* `"25-10-2019"` | No |
| plannedYield | number |  | No |
| productCode | string | Product Code <br/>*Example:* `"P-000001"` | No |
| productCustomField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| productDocSeqCode | string | Product document sequence code<br/>*Example:* `"P-000001"` | Yes |
| productName | string | Product Name <br/>*Example:* `"Test Product"` | No |
| qcDetails | [QCDetails](#qcdetails) | QC Template details | No |
| qcRecordId | long |  | No |
| qcStatus | string | *Enum:* `"PENDING"`, `"COMPLETED"`, `"NONE"` | No |
| reservedStock | boolean | Reserved stock enabled<br/>*Example:* `true` | No |
| sequenceFormat | string | Sequence Format Id<br/>*Example:* `1` | No |
| sourceWarehouseCode | string | Source Warehouse Code <br/>*Example:* `"WH-0000001"` | No |
| status | string | *Enum:* `"OPEN"`, `"IN_PROGRESS"`, `"ON_HOLD"`, `"COMPLETED"` | No |
| targetWarehouseCode | string | Target Warehouse Code <br/>*Example:* `"WH-0000001"` | No |
| warehouseInventoryData | [ [WarehouseInventoryData](#warehouseinventorydata) ] | Bom Assembly Details | Yes |
| workOrderChildDetails | [ [WorkOrderChildDetails](#workorderchilddetails) ] | Work order child details. | No |
| workOrderItems | [ [AbstractWorkOrderItemDetails](#abstractworkorderitemdetails) ] | Work Order item details | No |
| workOrderOperations | [ [AbstractWorkOrderOperationDetails](#abstractworkorderoperationdetails) ] | Work Order operation details | No |
| workOrderSourceDetails | [WorkOrderSourceDetails](#workordersourcedetails) | work order source details<br/>*Example:* `{"workOrderSource":"SALES_ORDER"}` | No |

#### AbstractWorkOrderResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| actualEndDate | dateTime | Actual end date<br/>*Example:* `"25-10-2019"` | No |
| actualQuantity | number | Manufacturing quantity <br/>*Example:* `2` | No |
| actualStartDate | dateTime | Actual start date<br/>*Example:* `"25-10-2019"` | No |
| actualTime | long |  | No |
| actualYield | number |  | No |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Additional charges  | No |
| allJobCardsCompleted | boolean |  | No |
| bomAssemblyCode | string |  | No |
| bomMetaCode | string | BOM Meta Code<br/>*Example:* `"000001"` | No |
| bomMetaDetails | [BomMetaDetailsDto](#bommetadetailsdto) | BOM Meta details | No |
| deliveryDate | dateTime | Delivery date<br/>*Example:* `"25-10-2019"` | No |
| documentSequenceCode | string | Sales invoice Sequence Code<br/>*Example:* `"0000001"` | No |
| estimatedTime | long |  | No |
| id | long | Sales invoice id<br/>*Example:* `1` | No |
| inProgressWarehouseCode | string | In Progress Warehouse Code <br/>*Example:* `"WH-0000001"` | No |
| includeByProductCost | boolean | Include By product cost<br/>*Example:* `true` | No |
| isQcEnabled | boolean | Flag will pass as true for QC work flow. Possible value - TRUE \| FALSE<br/>*Example:* `false` | No |
| isRequisitionPending | boolean |  | No |
| isWIPConsumptionProduction | boolean |  | No |
| jobWorkOutOrderCost | number |  | No |
| manufactureQuantity | number | Manufacturing quantity <br/>*Example:* `2` | No |
| operationCostDetails | [OperationCostDetails](#operationcostdetails) | Work Order cost details | No |
| parentWorkOrderCode | string | Parent Work Order code <br/>*Example:* `"WO-0000001"` | No |
| parentWorkOrderSeqCode | string | Parent Work Order seq code <br/>*Example:* `"WO-0000001"` | No |
| plannedEndDate | dateTime | Planned start date<br/>*Example:* `"25-10-2019"` | No |
| plannedStartDate | dateTime | Planned start date<br/>*Example:* `"25-10-2019"` | No |
| plannedYield | number |  | No |
| productCode | string | Product Code <br/>*Example:* `"P-000001"` | No |
| productCustomField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| productDocSeqCode | string | Product document sequence code<br/>*Example:* `"P-000001"` | Yes |
| productName | string | Product Name <br/>*Example:* `"Test Product"` | No |
| qcDetails | [QCDetails](#qcdetails) | QC Template details | No |
| qcRecordId | long |  | No |
| qcStatus | string | *Enum:* `"PENDING"`, `"COMPLETED"`, `"NONE"` | No |
| reservedStock | boolean | Reserved stock enabled<br/>*Example:* `true` | No |
| sourceWarehouseCode | string | Source Warehouse Code <br/>*Example:* `"WH-0000001"` | No |
| status | string | *Enum:* `"OPEN"`, `"IN_PROGRESS"`, `"ON_HOLD"`, `"COMPLETED"` | No |
| targetWarehouseCode | string | Target Warehouse Code <br/>*Example:* `"WH-0000001"` | No |
| totalCompletedJobCards | integer |  | No |
| totalJobCards | integer |  | No |
| warehouseInventoryData | [ [WarehouseInventoryData](#warehouseinventorydata) ] | Bom Assembly Details | Yes |
| workOrderChildDetails | [ [WorkOrderChildDetails](#workorderchilddetails) ] | Work order child details. | No |
| workOrderCode | string | Sales invoice code<br/>*Example:* `"SI001"` | No |
| workOrderItems | [ [AbstractWorkOrderItemDetails](#abstractworkorderitemdetails) ] | Work Order item details | No |
| workOrderOperations | [ [AbstractWorkOrderOperationDetails](#abstractworkorderoperationdetails) ] | Work Order operation details | No |
| workOrderSourceDetails | [WorkOrderSourceDetails](#workordersourcedetails) | work order source details<br/>*Example:* `{"workOrderSource":"SALES_ORDER"}` | No |

#### AdditionalCharges

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalChargeAmount | number |  | No |
| additionalChargeTaxAmount | number |  | No |
| additionalChargesDetails | [ [AdditionalChargesDetails](#additionalchargesdetails) ] |  | No |
| globalDiscount | [GlobalDiscountDetails](#globaldiscountdetails) |  | No |
| globalDiscounts | [ [GlobalDiscountDetails](#globaldiscountdetails) ] |  | No |

#### AdditionalChargesDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharge | string |  | No |
| additionalChargeAccountCode | string |  | No |
| addtionalChargeTax | string |  | No |
| addtionalChargeTaxCode | string |  | No |
| apportionFlag | boolean |  | No |
| apportionValue | string | *Enum:* `"APPORTION_MANUAL"`, `"APPORTION_ON_QTY"`, `"APPORTION_ON_VALUE"` | No |
| cgst | number |  | No |
| chargeAmount | number |  | No |
| igst | number |  | No |
| isPercent | boolean |  | No |
| isPreCharge | boolean |  | No |
| percent | number |  | No |
| sgst | number |  | No |
| taxAmount | number |  | No |

#### Address

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address1 | string | Address line 1<br/>*Example:* `"218, Robinson Road"` | No |
| address2 | string | Address line 2<br/>*Example:* `"Downtown"` | No |
| city | string | City<br/>*Example:* `"C001"` | No |
| contactName | string | contact name for address<br/>*Example:* `"John Smith"` | No |
| country | string | Country<br/>*Example:* `"C001"` | No |
| destinationOfSupply | string | state in India<br/>*Example:* `"Maharashtra"` | No |
| placeOfSupply | string | state in India<br/>*Example:* `"Punjab"` | No |
| postalCode | string | Postal Code<br/>*Example:* `123456` | No |
| preferred | boolean | Is this a default address?<br/>*Example:* `true` | No |
| state | string | State<br/>*Example:* `"CS001"` | No |

#### AdvancedTrackingBOMDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| costPerUnit | number |  | No |
| expiryDate | dateTime | Expiry date. Date Format is dd-mm-yyyy. Applicable when AdvancedTrackingType is Batch<br/>*Example:* `"01-01-2020"` | No |
| manufacturingDate | dateTime | Manufacturing date. Date Format is dd-mm-yyyy. Applicable when AdvancedTrackingType is Batch<br/>*Example:* `"01-01-2020"` | No |
| qtyToFulfil | double | Batch qty to fulfill<br/>*Example:* `1` | No |
| remainingQuantity | number |  | No |
| serialBatchNumber | string | Batch or serial number to be fulfilled<br/>*Example:* `"Batch-001"` | No |

#### AdvancedTrackingMetaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| acquiredCost | number | Acquired cost of the entire serial or batch<br/>*Example:* `1` | No |
| advancedTrackingReturned | [AdvancedTrackingReturned](#advancedtrackingreturned) |  | No |
| batchSize | double | Serial Number or Batch size<br/>*Example:* `1` | Yes |
| batchSizeAvailableForReturn | double | How much of the batch or serial is fulfilled<br/>*Example:* `1` | Yes |
| batchSizeFulfilled | double | How much of the batch or serial is fulfilled<br/>*Example:* `1` | Yes |
| batchSizeReturned | double | How much of the batch or serial is returned<br/>*Example:* `1` | Yes |
| batchSizeReturnedPurchase | double | How much of the batch or serial is returned<br/>*Example:* `1` | Yes |
| binCode | string | bin code<br/>*Example:* `"BIN-00001"` | Yes |
| binName | string | bin Name<br/>*Example:* `"Bin 1"` | Yes |
| expiryDate | dateTime | Expiry date. Date Format is dd-mm-yyyy. Applicable when AdvancedTrackingType is Batch<br/>*Example:* `"01-01-2020"` | No |
| id | long |  | No |
| manufacturingDate | dateTime | Manufacturing date. Date Format is dd-mm-yyyy. Applicable when AdvancedTrackingType is Batch<br/>*Example:* `"01-01-2020"` | No |
| productVariantCode | string | Product code<br/>*Example:* `"P-001"` | Yes |
| rackCode | string | Rack code<br/>*Example:* `"RACK-00001"` | Yes |
| rackName | string | Rack Name<br/>*Example:* `"Rack 1"` | Yes |
| reservedQuantity | double | Reserved Serial Number or Batch size<br/>*Example:* `1` | No |
| reservedQuantityFulfilled | double | Fulfilled reserved serial number or batch size<br/>*Example:* `1` | Yes |
| rowCode | string | Row code<br/>*Example:* `"ROW-00001"` | Yes |
| rowName | string | Row Name<br/>*Example:* `"Row 1"` | Yes |
| sequence | long | Sequence number<br/>*Example:* `1` | No |
| serialBatchNumber | string | Serial Number or Batch Number<br/>*Example:* `"BATCH-001"` | Yes |
| subSequence | long | Subsequence number<br/>*Example:* `1` | No |
| warehouseCode | string | Primary Warehouse<br/>*Example:* `"WH-0000001"` | No |
| warehouseName | string | Primary Warehouse<br/>*Example:* `"warehouse name"` | No |

#### AdvancedTrackingReturned

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| batchSizeReturned | double |  | No |
| batchSizeReturnedPurchase | double |  | No |
| returnsByDoc | [ [AdvancedTrackingReturnedByDoc](#advancedtrackingreturnedbydoc) ] |  | No |

#### AdvancedTrackingReturnedByDoc

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string |  | No |
| qtyReturned | double |  | No |
| returnType | string | *Enum:* `"SALES_RETURN"`, `"PURCHASE_RETURN"` | No |
| transactionRefCode | string |  | No |

#### AssemblyItemsInfoProdPlan

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| plannedQuantity | number |  | No |
| plannedStartDate | string | Planned Start Date<br/>*Example:* `"2020-06-17"` | No |
| productCode | string | Product Code.<br/>*Example:* `"P-0000001"` | No |
| requiredQuantity | number |  | No |
| scheduledDate | string | Scheduled Date<br/>*Example:* `"2020-06-17"` | No |
| warehouseCode | string |  | No |

#### AttributeDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | Attribute ID<br/>*Example:* `"Id"` | No |
| name | string | Attribute Name<br/>*Example:* `"Colour"` | No |
| values | [ string ] | Attribute values | No |

#### BarcodeDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| barcodeField | string |  | No |
| hideBarcodeLabel | boolean |  | No |

#### BomAdditionalCostDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bomMetaDetailsId | long | id of bomMetaDetailsId<br/>*Example:* `1234` | No |
| bomMetaName | string | BOM Meta Name<br/>*Example:* `"DEFAULT"` | No |
| label | string | Name of manufacturing service<br/>*Example:* `"Labour charges"` | No |
| price | number | Quantity of product in bom<br/>*Example:* `10.5` | No |

#### BomMetaDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | bom meta details status<br/>*Example:* `true` | No |
| bomAddCostConfiguration | [ [BomAdditionalCostDto](#bomadditionalcostdto) ] | Bom additional cost information | No |
| bomOperationsConfiguration | [ [BomOperationDto](#bomoperationdto) ] | Bom Operations information | No |
| bomProductCostDetails | [ [BomProductCostDetails](#bomproductcostdetails) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| bomProductsConfiguration | [ [BomMetaDto](#bommetadto) ] | Bom Products information | No |
| code | string | bom meta details code<br/>*Example:* `"code"` | No |
| deleted | boolean | bom meta details delete status<br/>*Example:* `true` | No |
| id | long | id of bom meta details <br/>*Example:* `1234` | No |
| isDefault | boolean | bom default<br/>*Example:* `true` | No |
| name | string | bom meta details name<br/>*Example:* `"bom meta name"` | No |
| productId | string | id of bom product<br/>*Example:* `1234` | No |

#### BomMetaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bomMetaDetailsId | long | id of bomMetaDetailsId<br/>*Example:* `1234` | No |
| bomMetaName | string | BOM Meta Name<br/>*Example:* `"DEFAULT"` | No |
| bomProductSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] |  | No |
| cost | number | Cost of product in bom<br/>*Example:* `10.5` | No |
| itemId | long | id of item in bom<br/>*Example:* `1234` | No |
| itemName | string | Product Name<br/>*Example:* `"Apple"` | Yes |
| produceProductType | string | Produce Product type<br/>*Enum:* `"NONE"`, `"SCRAP"`, `"COPRODUCT"`<br/>*Example:* `"SCRAP"` | Yes |
| productCode | string |  | No |
| quantity | number | Quantity of product in bom<br/>*Example:* `10.5` | No |
| stockUom | long |  | No |

#### BomOperationDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bomMetaDetailsId | long | id of bomMetaDetailsId<br/>*Example:* `1234` | No |
| bomMetaName | string | BOM Meta Name<br/>*Example:* `"DEFAULT"` | No |
| costPerHour | number | Cost of operation in bom<br/>*Example:* `10.5` | No |
| fixedRate | number | Cost of operation in bom<br/>*Example:* `10.5` | No |
| operationId | long | id of operation in bom<br/>*Example:* `1234` | No |
| operationName | string | Operation Name<br/>*Example:* `"Apple"` | Yes |
| totalCost | number | Cost of operation in bom<br/>*Example:* `10.5` | No |

#### BomProductCostDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| operationCost | number | Operation Cost<br/>*Example:* `15` | No |
| rawMaterialCost | number | Raw material cost<br/>*Example:* `20` | No |
| totalCost | number | Total cost<br/>*Example:* `35` | No |

#### BulkApiResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ object ] |  | No |
| statusCode | integer |  | No |
| success | [ object ] |  | No |

#### BulkApiResponse«OperatorResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [OperatorResponse](#operatorresponse) ] |  | No |
| statusCode | integer |  | No |
| success | [ [OperatorResponse](#operatorresponse) ] |  | No |

#### BulkApiResponse«WorkstationDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [WorkstationDto](#workstationdto) ] |  | No |
| statusCode | integer |  | No |
| success | [ [WorkstationDto](#workstationdto) ] |  | No |

#### BulkApiResponse«string»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ string ] |  | No |
| statusCode | integer |  | No |
| success | [ string ] |  | No |

#### CostDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| actualCost | number | Actual cost of operation/operator<br/>*Example:* `2.2` | No |
| additionalCost | number | Additional cost of operation/operator<br/>*Example:* `1.5` | No |
| plannedCost | number | PLanned cost of operation/operator<br/>*Example:* `1.2` | No |

#### CustomFieldItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | Dimension Id<br/>*Example:* `11567` | No |
| label | string | Custom Field Name<br/>*Example:* `"Label"` | Yes |
| module | string | Supported Modules | No |
| value | object | Dimension Value<br/>*Example:* `"XYZ"` | No |

#### DeliveryScheduleItemRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| deliveryScheduleDate | dateTime |  | No |
| id | long |  | No |
| productCode | string |  | No |
| productQuantity | number |  | No |

#### DeliveryScheduleItemResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| deliveryScheduleDate | dateTime |  | No |
| deliveryScheduleStatus | string | *Enum:* `"DELIVERED_ON_TIME"`, `"DELIVERED_LATE"`, `"DELAYED"`, `"NO_STATUS"`, `"IN_PROGRESS"` | No |
| id | long |  | No |
| product | [ProductShortInfo](#productshortinfo) |  | No |
| productCode | string |  | No |
| productQuantity | number |  | No |

#### DeliveryScheduleRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string |  | No |
| deliveryScheduleItems | [ [DeliveryScheduleItemRequest](#deliveryscheduleitemrequest) ] |  | No |
| linkedDocument | [DocumentInfo](#documentinfo) |  | No |

#### DeliveryScheduleResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string |  | No |
| contactName | string |  | No |
| deliveryScheduleItems | [ [DeliveryScheduleItemResponse](#deliveryscheduleitemresponse) ] |  | No |
| deliveryScheduleStatus | string | *Enum:* `"DELIVERED_ON_TIME"`, `"DELIVERED_LATE"`, `"DELAYED"`, `"NO_STATUS"`, `"IN_PROGRESS"` | No |
| id | long |  | No |
| linkedDocument | [DocumentInfo](#documentinfo) |  | No |

#### DeliveryScheduleWipProductionInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| deliveryScheduleDate | dateTime |  | No |
| productCode | string |  | No |
| productionQuantity | number |  | No |

#### DocumentInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string | Document Code.<br/>*Example:* `"QO-0000001"` | No |
| documentCreatedDate | dateTime | Purchase creation date<br/>*Example:* `"2023-01-01T00:00:00.000+0000"` | No |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| documentType | string | Type of document.<br/>*Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`<br/>*Example:* `"QUOTATION"` | No |

#### ForecastRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fromDate | dateTime |  | No |
| fromPeriod | string |  | No |
| name | string |  | No |
| periodFrequency | string | *Enum:* `"MONTHLY"`, `"QUARTERLY"`, `"YEARLY"` | No |
| productCode | string |  | No |
| productId | long |  | No |
| toDate | dateTime |  | No |
| toPeriod | string |  | No |

#### ForecastResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fromDate | dateTime |  | No |
| fromPeriod | string |  | No |
| id | long |  | No |
| name | string |  | No |
| periodFrequency | string | *Enum:* `"MONTHLY"`, `"QUARTERLY"`, `"YEARLY"` | No |
| productCode | string |  | No |
| productId | long |  | No |
| productName | string |  | No |
| toDate | dateTime |  | No |
| toPeriod | string |  | No |

#### ForecastingDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| forecastQuantity | double |  | No |
| frequencyName | string |  | No |
| periodFrequency | string | *Enum:* `"MONTHLY"`, `"QUARTERLY"`, `"YEARLY"` | No |

#### GlobalDiscountDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string |  | No |
| amount | number |  | No |
| isPercent | boolean |  | No |
| isSubTotalOnly | boolean |  | No |
| name | string |  | No |
| percent | number |  | No |

#### HolidayListDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| description | string |  | No |
| holidayDate | string |  | No |
| srNo | string |  | No |

#### HolidayListDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fromDate | string | From date<br/>*Example:* `"25-10-2019"` | Yes |
| holidayListDetails | [ [HolidayListDetails](#holidaylistdetails) ] | Holiday list details.<br/>*Example:* `"Holiday list details"` | No |
| name | string | Holiday list name<br/>*Example:* `"Holiday 2022"` | Yes |
| toDate | string | To date<br/>*Example:* `"25-10-2019"` | Yes |

#### IncomingDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| incomingQty | number |  | No |
| outgoingQty | number |  | No |
| periodName | string |  | No |

#### InventoryDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQuantity | double | Available quantity<br/>*Example:* `100` | No |
| binCode | string | bin code<br/>*Example:* `"BIN-00001"` | Yes |
| binName | string | bin name<br/>*Example:* `"BIN-NAME"` | No |
| costOfGoodsSoldAccountCode | string | Cost of goods sold account code<br/>*Example:* `"A-10231"` | Yes |
| inventoryAccountCode | string | Inventory account code<br/>*Example:* `"A-10232"` | Yes |
| inventoryAccountName | string | Inventory account name<br/>*Example:* `"Inventory Account"` | Yes |
| landedCostWeight | number | Landed cost weight value<br/>*Example:* `10.5` | No |
| openingQuantity | double | Opening quantity<br/>*Example:* `10` | No |
| openingValuation | double | Opening valuation<br/>*Example:* `100.4` | No |
| rackCode | string | Rack code<br/>*Example:* `"RACK-00001"` | Yes |
| rackName | string | Rack name<br/>*Example:* `"RACK-NAME"` | No |
| reservedQuantity | double | Reserved quantity<br/>*Example:* `100` | No |
| rowCode | string | Row code<br/>*Example:* `"ROW-00001"` | Yes |
| rowName | string | Row name<br/>*Example:* `"ROW-NAME"` | No |
| stockAdjustmentAccountCode | string | Stock adjustment account code<br/>*Example:* `"A-10234"` | Yes |
| warehouseCode | string | Warehouse code<br/>*Example:* `"WH-00001"` | Yes |
| wipInventoryAccountCode | string | WIP Inventory account code<br/>*Example:* `"A-10233"` | Yes |

#### InventoryWarehouseDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQuantity | number | Available quantity<br/>*Example:* `100` | No |
| openingQuantity | number | Opening quantity<br/>*Example:* `10` | No |
| openingValuation | number | Opening Valuation<br/>*Example:* `1000` | No |
| warehouseCode | string | Warehouse code<br/>*Example:* `"WH-00001"` | Yes |

#### JobCardBatchSerialDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| batchSerialName | string | Batch Serial name<br/>*Example:* `"batch1"` | No |
| productCode | string | Product Code<br/>*Example:* `"P-000001"` | No |
| quantity | number | quantity<br/>*Example:* `1` | No |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"P-000001"` | No |

#### JobCardRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| actualTime | long |  | No |
| documentSequenceCode | string |  | No |
| fgquantityTransferredRawMaterials | long |  | No |
| instructions | string | Instructions<br/>*Example:* `"Instructions details"` | No |
| jobCardBatchSerialDetails | [ [JobCardBatchSerialDetails](#jobcardbatchserialdetails) ] |  | No |
| jobCardDate | dateTime |  | No |
| jobCardTimeLogs | [ [JobCardTimeLogs](#jobcardtimelogs) ] |  | No |
| operationCostDetails | [CostDetails](#costdetails) | Operator Cost Details | No |
| operationId | long |  | No |
| operatorCostDetails | [CostDetails](#costdetails) | Operator Cost Details | No |
| operatorDetails | [OperatorDetails](#operatordetails) | Operator Details | No |
| plannedTime | long |  | No |
| remarks | string |  | No |
| requestedQuantity | number |  | No |
| sequenceFormat | string |  | No |
| status | string | *Enum:* `"OPEN"`, `"IN_PROGRESS"`, `"ON_HOLD"`, `"CANCELLED"`, `"COMPLETED"` | No |
| totalCompletedQuantity | number |  | No |
| wipWarehouseCode | string |  | No |
| workOrderCode | string |  | No |
| workOrderItemCode | string |  | No |
| workOrderItemName | string |  | No |
| workstationId | long |  | No |

#### JobCardResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| actualTime | long |  | No |
| allJobCardsCompleted | boolean |  | No |
| documentSequenceCode | string |  | No |
| fgquantityTransferredRawMaterials | long |  | No |
| id | long |  | No |
| instructions | string | Instructions<br/>*Example:* `"Instructions details"` | No |
| isDeleted | boolean |  | No |
| jobCardBatchSerialDetails | [ [JobCardBatchSerialDetails](#jobcardbatchserialdetails) ] |  | No |
| jobCardCode | string |  | No |
| jobCardDate | dateTime |  | No |
| jobCardTimeLogs | [ [JobCardTimeLogs](#jobcardtimelogs) ] |  | No |
| operationCostDetails | [CostDetails](#costdetails) | Operator Cost Details | No |
| operationId | long |  | No |
| operationName | string |  | No |
| operatorCostDetails | [CostDetails](#costdetails) | Operator Cost Details | No |
| operatorDetails | [OperatorDetails](#operatordetails) | Operator Details | No |
| plannedTime | long |  | No |
| remarks | string |  | No |
| requestedQuantity | number |  | No |
| salesOrderSequenceCode | string |  | No |
| sequenceFormat | string |  | No |
| status | string | *Enum:* `"OPEN"`, `"IN_PROGRESS"`, `"ON_HOLD"`, `"CANCELLED"`, `"COMPLETED"` | No |
| totalCompletedQuantity | number |  | No |
| wipWarehouseCode | string |  | No |
| workOrderCode | string |  | No |
| workOrderItemCode | string |  | No |
| workOrderItemDocSeqCode | string |  | No |
| workOrderItemName | string |  | No |
| workOrderSequenceCode | string |  | No |
| workstationId | long |  | No |

#### JobCardTimeLogs

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| completedQuantity | double | completed quantity<br/>*Example:* `12` | No |
| employeeId | long | Employee Id<br/>*Example:* `1` | No |
| employeeName | string | Employee name<br/>*Example:* `1` | No |
| fromTime | string | Time Log From Time | No |
| timeInMinutes | long | Log in minutes<br/>*Example:* `1` | No |
| toTime | string | Time Log TO time | No |

#### LandedCostCategory

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allocationType | string | *Enum:* `"QUANTITY"`, `"VALUE"`, `"WEIGHT"`, `"MANUAL"`, `"CUSTOM_DUTY"` | No |
| name | string |  | No |

#### LinkedDocumentsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| used | boolean |  | No |

#### LinkedDocumentsInfoProdPlan

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string | Document Code.<br/>*Example:* `"SO-0000001"` | No |
| documentDate | string | Sales Order Date<br/>*Example:* `"2020-06-17"` | No |
| documentSequenceCode | string | Sales Order Code<br/>*Example:* `"0000001"` | No |
| documentType | string | Type of document.<br/>*Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`<br/>*Example:* `"SALES_ORDER"` | No |

#### OperationCostDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| actualOperatingCost | number | Actual cost of operation in bom<br/>*Example:* `10.5` | No |
| additionalOperatingCost | number | Additional cost of operation in bom<br/>*Example:* `10.5` | No |
| plannedOperatingCost | number | Planned cost of operation in bom<br/>*Example:* `10.5` | No |
| plannedOperatorCost | number | Planned cost of operator in bom<br/>*Example:* `10.5` | No |
| plannedWorkstationCost | number | Planned cost of workstation in bom<br/>*Example:* `10.5` | No |
| totalOperatingCost | number | Total cost of operation in bom<br/>*Example:* `10.5` | No |

#### OperationJobCard

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| batchSize | double | Batch Size<br/>*Example:* `12` | No |
| createJobCardOnBatchSize | boolean | Create Job Card based on Batch Size<br/>*Example:* `true` | No |
| qualityInspectionTemplateId | long | Quality Inspection Template id | No |
| qualityInspectionTemplateName | string | Quality Inspection Template name | No |

#### OperationRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachmentIds | [ integer ] | list of attachment id's for this gr | No |
| attachments | [ string ] | Attachments url's | No |
| costPerHour | number |  | No |
| defaultWorkstation | long |  | No |
| description | string |  | No |
| fixedRate | number |  | No |
| instructions | string | Instructions<br/>*Example:* `"Instructions details"` | No |
| isCorrective | boolean |  | No |
| isDeleted | boolean |  | No |
| name | string |  | No |
| operationJobCard | [OperationJobCard](#operationjobcard) | Operation Job Card | No |
| operationTime | double |  | No |
| operators | [ [OperatorDetails](#operatordetails) ] | Operators | No |
| subOperations | [ [SubOperations](#suboperations) ] | Sub Operations | No |

#### OperationResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachmentIds | [ integer ] | list of attachment id's for this gr | No |
| attachments | [ string ] | Attachments url's | No |
| costPerHour | number |  | No |
| defaultWorkstation | long |  | No |
| description | string |  | No |
| fixedRate | number |  | No |
| id | long |  | No |
| instructions | string | Instructions<br/>*Example:* `"Instructions details"` | No |
| isCorrective | boolean |  | No |
| isDeleted | boolean |  | No |
| name | string |  | No |
| operationCode | string |  | No |
| operationJobCard | [OperationJobCard](#operationjobcard) | Operation Job Card | No |
| operationTime | double |  | No |
| operators | [ [OperatorDetails](#operatordetails) ] | Operators | No |
| subOperations | [ [SubOperations](#suboperations) ] | Sub Operations | No |
| workstationDetails | [WorkstationDto](#workstationdto) | Workstation details | No |
| workstationName | string |  | No |

#### OperatorDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| costPerHour | number | cost per hour<br/>*Example:* `100` | No |
| costPerHourPerUnit | number | cost per hour<br/>*Example:* `100` | No |
| fixedRate | number | fixed rate<br/>*Example:* `40.5` | No |
| fixedRatePerUnit | number | fixed rate<br/>*Example:* `40.5` | No |
| operatorId | long | Operator Id<br/>*Example:* `1` | No |
| operatorName | string | Operator name | No |
| workerId | string | Employee Id<br/>*Example:* `1` | No |

#### OperatorRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | [Address](#address) | Operator address | No |
| contactNumber | string |  | No |
| costPerHour | number |  | No |
| dateOfBirth | string |  | No |
| email | string |  | No |
| fixedRate | number |  | No |
| jobTitle | string |  | No |
| name | string |  | No |
| time | long |  | No |
| workerId | string |  | No |

#### OperatorResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | [Address](#address) | Operator address | No |
| contactNumber | string |  | No |
| costPerHour | number |  | No |
| dateOfBirth | string |  | No |
| email | string |  | No |
| fixedRate | number |  | No |
| id | long |  | No |
| jobTitle | string |  | No |
| name | string |  | No |
| time | long |  | No |
| workerId | string |  | No |

#### Pageable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| offset | long |  | No |
| pageNumber | integer |  | No |
| pageSize | integer |  | No |
| paged | boolean |  | No |
| sort | [Sort](#sort) |  | No |
| unpaged | boolean |  | No |

#### Page«AbstractWorkOrderResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [AbstractWorkOrderResponse](#abstractworkorderresponse) ] |  | No |
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

#### Page«DeliveryScheduleResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [DeliveryScheduleResponse](#deliveryscheduleresponse) ] |  | No |
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

#### Page«ForecastResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ForecastResponse](#forecastresponse) ] |  | No |
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

#### Page«HolidayListDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [HolidayListDto](#holidaylistdto) ] |  | No |
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

#### Page«JobCardResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [JobCardResponse](#jobcardresponse) ] |  | No |
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

#### Page«OperationResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [OperationResponse](#operationresponse) ] |  | No |
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

#### Page«OperatorResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [OperatorResponse](#operatorresponse) ] |  | No |
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

#### Page«ProductionPlanResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [ProductionPlanResponse](#productionplanresponse) ] |  | No |
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

#### Page«QCParameterGroupDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [QCParameterGroupDto](#qcparametergroupdto) ] |  | No |
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

#### Page«QCParameterResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [QCParameterResponse](#qcparameterresponse) ] |  | No |
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

#### Page«QCTemplateResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [QCTemplateResponse](#qctemplateresponse) ] |  | No |
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

#### Page«QualityControlTemplateDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [QualityControlTemplateDto](#qualitycontroltemplatedto) ] |  | No |
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

#### Page«SchedulePlanDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [SchedulePlanDto](#scheduleplandto) ] |  | No |
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

#### Page«WIPConsumptionProductionResponse»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [WIPConsumptionProductionResponse](#wipconsumptionproductionresponse) ] |  | No |
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

#### Page«WorkstationDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [WorkstationDto](#workstationdto) ] |  | No |
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

#### ProductForecastDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQuantity | double |  | No |
| foreCastingDetails | [ [ForecastingDetails](#forecastingdetails) ] |  | No |
| forecastId | long |  | No |
| id | long |  | No |
| incomingDetailsList | [ [IncomingDetails](#incomingdetails) ] |  | No |
| parentCode | string |  | No |
| productCode | string |  | No |
| productId | long |  | No |
| productName | string |  | No |
| productSeqCode | string |  | No |
| quantityRequiredToBuild | number |  | No |
| type | string | *Enum:* `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"` | No |

#### ProductResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Product status<br/>*Example:* `true` | No |
| advancedTracking | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"`<br/>*Example:* `"NONE"` | No |
| advancedTrackingMetaData | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] | Advanced Tracking Meta data<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| amortizationPeriod | integer | Amortization template period<br/>*Example:* `36` | No |
| amortizationTemplateCode | string | Amortization template code<br/>*Example:* `"0000001"` | No |
| attributes | [ [AttributeDetails](#attributedetails) ] | Attribute Details | No |
| autoFulfillmentEnabled | boolean | Is Auto-Fulfillment enable?<br/>*Example:* `false` | No |
| barcode | string | Product barcode<br/>*Example:* `2365234` | No |
| barcodeDetails | [BarcodeDetails](#barcodedetails) | barcode details<br/>*Example:* `{"barcodeField":"Samsung"}` | No |
| basePrice | double | Revenue Base price<br/>*Example:* `120` | No |
| bomAddCostConfiguration | [ [BomAdditionalCostDto](#bomadditionalcostdto) ] | Bom additional cost information | No |
| bomMetaDetailsList | [ [BomMetaDetailsDto](#bommetadetailsdto) ] | multiple bom configuration<br/>*Example:* `"Bom Configuration"` | No |
| bomOperationsConfiguration | [ [BomOperationDto](#bomoperationdto) ] | Bom Operations information | No |
| bomProductCostDetails | [ [BomProductCostDetails](#bomproductcostdetails) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| bomProductsConfiguration | [ [BomMetaDto](#bommetadto) ] | Bom Products information | No |
| categoryCode | string | Category code<br/>*Example:* `"AB0001"` | No |
| categoryDesc | string | Category description<br/>*Example:* `"Medical Equipment"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| deferredExpenseAccountCode | string | Deferred Expense account code<br/>*Example:* `"A-0015"` | No |
| deferredRevenueAccountCode | string | Deferred Revenue account code<br/>*Example:* `"A-0015"` | No |
| deleted | boolean | Product delete status<br/>*Example:* `true` | No |
| description | string | Product description<br/>*Example:* `"Description"` | No |
| documentSequenceCode | string | Product Sequence code<br/>*Example:* `"P-0000001"` | No |
| hasBuildAssembly | boolean | Has Build Assembly<br/>*Example:* `true` | No |
| hasVariants | boolean | Product has variants<br/>*Example:* `false` | No |
| id | long | Product ID<br/>*Example:* `1234` | No |
| images | [ string ] | Product image url's | No |
| incomingQty | number | Product incoming Qty | No |
| inventory | [InventoryDto](#inventorydto) | Inventory information required for Tracked Products. | No |
| inventoryWarehouseDetails | [ [InventoryWarehouseDetails](#inventorywarehousedetails) ] | Inventory warehouse details<br/>*Example:* `{"warehouseCode":"WH-00001","availableQuantity":"100","openingQuantity":"100"}` | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>*Example:* `true` | No |
| isFinishedProduct | boolean | Is finished product?<br/>*Example:* `false` | No |
| isUiProductUpdate | boolean | Product is update by UI.<br/>*Example:* `false` | No |
| isVariant | boolean | Is a variant<br/>*Example:* `false` | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] | Landed cost category details | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code<br/>*Example:* `"AC-0000012"` | No |
| masterProductCode | string | Master Product Code<br/>*Example:* `"P-0000001"` | No |
| multipleUomSchema | boolean | Is multiple Uom Schema?<br/>*Example:* `true` | No |
| name | string | Product Name<br/>*Example:* `"Apple"` | Yes |
| outgoingQty | number | Product outgoing Qty | No |
| productId | string | Product ID<br/>*Example:* `"P000011"` | No |
| productSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] |  | No |
| productTransactionType | string | Product Transaction Type<br/>*Enum:* `"BOTH"`, `"PURCHASE"`, `"SALES"`<br/>*Example:* `"BOTH"` | Yes |
| purchaseAccountCode | string | Purchase account code<br/>*Example:* `"A-0012"` | Yes |
| purchasePrice | double | Purchase price<br/>*Example:* `123.33` | Yes |
| purchasePriceTaxInclusive | boolean | Is purchase price tax inclusive?<br/>*Example:* `true` | No |
| purchaseReturnAccountCode | string | Purchase return account code<br/>*Example:* `"A-0014"` | No |
| purchaseTaxCode | string | Purchase tax code<br/>*Example:* `"T-001"` | No |
| recommendedUom | long | Recommended product uom | No |
| reorderEnabled | boolean | Flag to enable reorder level<br/>*Example:* `true` | No |
| reorderLevel | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| reorderLevelReached | boolean | Has Reorder level reached | No |
| reorderQuantity | long | Quantity to be reordered<br/>*Example:* `50` | No |
| reorderVendorCode | string | Vendor code for reorder<br/>*Example:* `"C-000001"` | No |
| reorderVendorName | string | Reorder Vendor Name | No |
| revenueRecognitionInfo | [ProductRevenueRecognitionInfo](#productrevenuerecognitioninfo) | Product Revenue Recognition Information Object | No |
| rowRackBinData | [RowRackBinData](#rowrackbindata) | Row Rack Bin information required for Tracked Products. | No |
| salesAccountCode | string | Sales account code<br/>*Example:* `"A-0013"` | Yes |
| salesPrice | double | Sales price<br/>*Example:* `120` | Yes |
| salesPriceTaxInclusive | boolean | Is sales price tax inclusive?<br/>*Example:* `false` | No |
| salesReturnAccountCode | string | Sales return account code<br/>*Example:* `"A-0015"` | No |
| salesTaxCode | string | Sales tax code<br/>*Example:* `"T-002"` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| source | string | Identify this is ecom sync product<br/>*Example:* `"SHOPIFY"` | No |
| stockUom | long | Stock UOM<br/>*Example:* `2` | Yes |
| taxable | boolean | Is taxable?<br/>*Example:* `true` | No |
| type | string | Product type<br/>*Enum:* `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"`<br/>*Example:* `"TRACKED"` | Yes |
| uomSchema | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| uomSchemaDto | [UOMSchemaDto](#uomschemadto) | Product uom schema information | No |
| valuationMethod | string | Valuation Method<br/>*Enum:* `"FIFO"`, `"AVERAGE"`<br/>*Example:* `"FIFO"` | Yes |
| variantAttributes | object | Attribute Details specific to a variant | No |
| variantCount | integer | Variant Count | No |

#### ProductRevenueRecognitionInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allocationType | string | Allocation Type<br/>*Example:* `"Normal/Exclude"` | No |
| createRevenuePlanOn | string | Create Revenue Plan On<br/>*Example:* `"Fulfillment"` | No |
| isDirectRevenuePositing | boolean | Direct Revenue Positing<br/>*Example:* `true` | No |
| itemRevenueCategory | string | Item Revenue Category<br/>*Example:* `"Licence"` | No |
| revRecForecastRule | string | Revenue Recognition Forecast Rule<br/>*Example:* `"Rule Forecast 1"` | No |
| revRecRule | string | Revenue Recognition Rule<br/>*Example:* `"Rule 1"` | No |

#### ProductShortInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTracking | string | *Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| availableQuantity | number |  | No |
| barcode | string |  | No |
| categoryCode | string |  | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| description | string |  | No |
| documentSequenceCode | string |  | No |
| hasVariants | boolean |  | No |
| incomingQty | number |  | No |
| isVariant | boolean |  | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] |  | No |
| masterProductCode | string |  | No |
| multipleUomSchema | boolean |  | No |
| name | string |  | No |
| openingQuantity | number |  | No |
| outgoingQty | number |  | No |
| pid | string |  | No |
| product_transaction_type | string |  | No |
| purchasePrice | number |  | No |
| recommendedUom | long |  | No |
| reorderLevel | long |  | No |
| reorderQuantity | long |  | No |
| reservedQuantity | number |  | No |
| salesPrice | number |  | No |
| status | boolean |  | No |
| stockUom | integer |  | No |
| taxable | boolean |  | No |
| type | string |  | No |
| unitPrice | number |  | No |
| uomSchema | long |  | No |
| uomSchemaDto | [UOMSchemaDto](#uomschemadto) |  | No |
| valuationMethod | string | *Enum:* `"FIFO"`, `"AVERAGE"` | No |

#### ProductSubstiteItemDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentSequenceCode | string | Product Document Sequence Code<br/>*Example:* `"WOI-0000001"` | Yes |
| inventoryPrice | number |  | No |
| productCode | string | Product code<br/>*Example:* `"P00001"` | Yes |
| productQuantity | number | Product quantity<br/>*Example:* `3` | No |
| reservedQuantitiesData | [ [ReservedQuantityData](#reservedquantitydata) ] | Reserved quantity data<br/>*Example:* `[]` | No |
| sourceWarehouseCode | string | source warehouse code<br/>*Example:* `"WH-000001"` | No |
| warehouseInventoryData | [ [WarehouseInventoryData](#warehouseinventorydata) ] | Work Order Details | Yes |

#### ProductSubstitutesDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTracking | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"`<br/>*Example:* `"NONE"` | No |
| availableQuantity | number | Quantity of product available<br/>*Example:* `10` | No |
| productDocumentSeqCode | string | Doc seq code of Product<br/>*Example:* `"P-00001"` | No |
| productId | string | Product Id<br/>*Example:* `"P-00001"` | No |
| productName | string | Name of Product<br/>*Example:* `"Test Product"` | No |
| stockUom | long | Stock UOM<br/>*Example:* `2` | Yes |
| type | string | Product type<br/>*Enum:* `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"`<br/>*Example:* `"TRACKED"` | Yes |

#### ProductionPlanRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| assemblyItemsInfo | [ [AssemblyItemsInfoProdPlan](#assemblyitemsinfoprodplan) ] |  | No |
| documentSequenceCode | string |  | No |
| linkedDocumentType | string |  | No |
| linkedDocumentsInfo | [ [LinkedDocumentsInfoProdPlan](#linkeddocumentsinfoprodplan) ] |  | No |
| postingDate | dateTime |  | No |
| rawMaterialsInfo | [ [RawMaterialsInfoProdPlan](#rawmaterialsinfoprodplan) ] |  | No |
| sequenceFormat | string |  | No |
| status | string | *Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"` | No |
| totalPlannedQuantity | number |  | No |
| totalProducedQuantity | number |  | No |

#### ProductionPlanResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| assemblyItemsInfo | [ [AssemblyItemsInfoProdPlan](#assemblyitemsinfoprodplan) ] |  | No |
| documentSequenceCode | string |  | No |
| id | long |  | No |
| isDeleted | boolean |  | No |
| linkedDocumentType | string |  | No |
| linkedDocumentsInfo | [ [LinkedDocumentsInfoProdPlan](#linkeddocumentsinfoprodplan) ] |  | No |
| postingDate | dateTime |  | No |
| productionPlanCode | string |  | No |
| rawMaterialsInfo | [ [RawMaterialsInfoProdPlan](#rawmaterialsinfoprodplan) ] |  | No |
| sequenceFormat | string |  | No |
| status | string | *Enum:* `"DRAFT"`, `"OPEN"`, `"CLOSED"` | No |
| totalPlannedQuantity | number |  | No |
| totalProducedQuantity | number |  | No |

#### QCDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| comment | string |  | No |
| noOfQuantity | number |  | No |
| passedQuantity | number |  | No |
| rejectedQuantity | number |  | No |
| templateParameterDetails | [ [TemplateParameterDetails](#templateparameterdetails) ] | List of template parameters | No |

#### QCParameterGroupDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string | QC Parameter Group id<br/>*Example:* `"Test"` | Yes |

#### QCParameterRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| description | string |  | No |
| name | string |  | No |
| qcParameterGroup | long |  | No |

#### QCParameterResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| description | string |  | No |
| id | long |  | No |
| name | string |  | No |
| qcParameterGroup | long |  | No |

#### QCTemplateItemsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| acceptanceCriteriaValue | string |  | No |
| isNumeric | boolean |  | No |
| maximumValue | long |  | No |
| minimumValue | long |  | No |
| qcParameter | long |  | No |

#### QCTemplateProductDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| productCode | string | Product code<br/>*Example:* `"P00001"` | Yes |
| productId | long | Product id<br/>*Example:* `123456` | Yes |
| productName | string | name of product<br/>*Example:* `"Product"` | No |

#### QCTemplateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string |  | No |
| qcTemplateItems | [ [QCTemplateItemsDto](#qctemplateitemsdto) ] |  | No |

#### QCTemplateResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long |  | No |
| name | string |  | No |
| qcTemplateItems | [ [QCTemplateItemsDto](#qctemplateitemsdto) ] |  | No |

#### QualityControlTemplateDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| description | string | Parameter description<br/>*Example:* `"Template for Brand"` | Yes |
| name | string | Parameter Label<br/>*Example:* `"Label"` | Yes |
| parameterDtos | [ [TemplateParameterDto](#templateparameterdto) ] | Set of possible parameter | No |
| productDetails | [ [QCTemplateProductDetails](#qctemplateproductdetails) ] | List of product details | No |

#### RawMaterialsInfoProdPlan

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQuantity | number |  | No |
| productCode | string | Product Code.<br/>*Example:* `"P-0000001"` | No |
| quantityAsPerBOM | number |  | No |
| quantityToRequest | number |  | No |
| warehouseCode | string |  | No |

#### ReservedQuantityData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingMetaDtos | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] | Advance tracking type<br/>*Example:* `"SERIAL"` | No |
| advancedTrackingType | string | Advance tracking type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"`<br/>*Example:* `"SERIAL"` | No |
| availableQuantity | double | Available quantity in warehouse<br/>*Example:* `100` | No |
| binCode | string | bin code<br/>*Example:* `"BIN-00001"` | Yes |
| documentCode | string | Document code<br/>*Example:* `"000005"` | No |
| documentItemCode | string | Document item code<br/>*Example:* `"000005"` | No |
| documentType | string | Document type<br/>*Example:* `"SALES_INVOICE"` | No |
| productCode | string | Product Code<br/>*Example:* `10` | No |
| rackCode | string | Rack code<br/>*Example:* `"RACK-00001"` | Yes |
| reservedDate | dateTime | reserved date<br/>*Example:* `"20-10-2022"` | No |
| reservedQuantity | double | Reserved quantity<br/>*Example:* `100` | No |
| rowCode | string | Row code<br/>*Example:* `"ROW-00001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>*Example:* `100.4` | No |
| wipProcessType | string | Work Order WIP Process Type<br/>*Enum:* `"PRODUCTION"`, `"CONSUMPTION"`, `"WASTAGE"`, `"SCRAP"`, `"CO_PRODUCT"`<br/>*Example:* `"CONSUMPTION"` | No |

#### ResponseEntity

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| body | object |  | No |
| statusCode | string | *Enum:* `"100 CONTINUE"`, `"101 SWITCHING_PROTOCOLS"`, `"102 PROCESSING"`, `"103 CHECKPOINT"`, `"200 OK"`, `"201 CREATED"`, `"202 ACCEPTED"`, `"203 NON_AUTHORITATIVE_INFORMATION"`, `"204 NO_CONTENT"`, `"205 RESET_CONTENT"`, `"206 PARTIAL_CONTENT"`, `"207 MULTI_STATUS"`, `"208 ALREADY_REPORTED"`, `"226 IM_USED"`, `"300 MULTIPLE_CHOICES"`, `"301 MOVED_PERMANENTLY"`, `"302 FOUND"`, `"302 MOVED_TEMPORARILY"`, `"303 SEE_OTHER"`, `"304 NOT_MODIFIED"`, `"305 USE_PROXY"`, `"307 TEMPORARY_REDIRECT"`, `"308 PERMANENT_REDIRECT"`, `"400 BAD_REQUEST"`, `"401 UNAUTHORIZED"`, `"402 PAYMENT_REQUIRED"`, `"403 FORBIDDEN"`, `"404 NOT_FOUND"`, `"405 METHOD_NOT_ALLOWED"`, `"406 NOT_ACCEPTABLE"`, `"407 PROXY_AUTHENTICATION_REQUIRED"`, `"408 REQUEST_TIMEOUT"`, `"409 CONFLICT"`, `"410 GONE"`, `"411 LENGTH_REQUIRED"`, `"412 PRECONDITION_FAILED"`, `"413 PAYLOAD_TOO_LARGE"`, `"413 REQUEST_ENTITY_TOO_LARGE"`, `"414 URI_TOO_LONG"`, `"414 REQUEST_URI_TOO_LONG"`, `"415 UNSUPPORTED_MEDIA_TYPE"`, `"416 REQUESTED_RANGE_NOT_SATISFIABLE"`, `"417 EXPECTATION_FAILED"`, `"418 I_AM_A_TEAPOT"`, `"419 INSUFFICIENT_SPACE_ON_RESOURCE"`, `"420 METHOD_FAILURE"`, `"421 DESTINATION_LOCKED"`, `"422 UNPROCESSABLE_ENTITY"`, `"423 LOCKED"`, `"424 FAILED_DEPENDENCY"`, `"426 UPGRADE_REQUIRED"`, `"428 PRECONDITION_REQUIRED"`, `"429 TOO_MANY_REQUESTS"`, `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"`, `"451 UNAVAILABLE_FOR_LEGAL_REASONS"`, `"500 INTERNAL_SERVER_ERROR"`, `"501 NOT_IMPLEMENTED"`, `"502 BAD_GATEWAY"`, `"503 SERVICE_UNAVAILABLE"`, `"504 GATEWAY_TIMEOUT"`, `"505 HTTP_VERSION_NOT_SUPPORTED"`, `"506 VARIANT_ALSO_NEGOTIATES"`, `"507 INSUFFICIENT_STORAGE"`, `"508 LOOP_DETECTED"`, `"509 BANDWIDTH_LIMIT_EXCEEDED"`, `"510 NOT_EXTENDED"`, `"511 NETWORK_AUTHENTICATION_REQUIRED"` | No |
| statusCodeValue | integer |  | No |

#### RowRackBinData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| binId | long | Row Id<br/>*Example:* `1` | Yes |
| binName | string | Row Name<br/>*Example:* `"Row1"` | Yes |
| rackId | long | Row Id<br/>*Example:* `1` | Yes |
| rackName | string | Row Name<br/>*Example:* `"Row1"` | Yes |
| rowId | long | Row Id<br/>*Example:* `1` | Yes |
| rowName | string | Row Name<br/>*Example:* `"Row1"` | Yes |

#### SchedulePlanDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| actualWoEndDate | dateTime | Actual end date<br/>*Example:* `"25-10-2019"` | No |
| actualWoStartDate | dateTime | Actual start date<br/>*Example:* `"25-10-2019"` | No |
| id | long |  | No |
| parentWorkOrderCode | string | Parent Work Order code <br/>*Example:* `"WO-0000001"` | No |
| parentWorkOrderSeqCode | string | Parent Work Order seq code <br/>*Example:* `"WO-0000001"` | No |
| plannedWoEndDate | dateTime | Planned start date<br/>*Example:* `"25-10-2019"` | No |
| plannedWoStartDate | dateTime | Planned start date<br/>*Example:* `"25-10-2019"` | No |
| schedulePlanJCDto | [ [SchedulePlanJCDto](#scheduleplanjcdto) ] | work order source details | No |
| workOrderId | long | Work Order id <br/>*Example:* `1` | No |
| workOrderStatus | string | Work Order Status <br/>*Example:* `"OPEN"` | No |

#### SchedulePlanJCDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| actualJcTime | long |  | No |
| jobCardCode | string | Job card code <br/>*Example:* `"0000001"` | No |
| jobCardDate | dateTime | job card date<br/>*Example:* `"25-10-2019"` | No |
| jobCardId | long | Job card id <br/>*Example:* `1` | No |
| jobCardSeqCode | string | Job card seq code <br/>*Example:* `"JC-0000001"` | No |
| jobCardStatus | string |  | No |
| operatorId | long |  | No |
| operatorName | string |  | No |
| plannedJcTime | long |  | No |

#### Sort

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| empty | boolean |  | No |
| sorted | boolean |  | No |
| unsorted | boolean |  | No |

#### SubOperations

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| operationId | long | Sub Operation Id<br/>*Example:* `1` | No |
| operationName | string | Sub Operation name | No |
| operationTime | double | Sub Operation Time<br/>*Example:* `12` | No |

#### TemplateAttributeDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| value | string | Attribute Value<br/>*Example:* `"value"` | No |

#### TemplateParameterDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| parameterId | long | Template Parameter Id<br/>*Example:* `1` | No |
| parameterName | string | Template Parameter name | No |
| parameterValue | string | Template Parameter value<br/>*Example:* `12` | No |
| templateId | long |  | No |

#### TemplateParameterDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attributes | [ [TemplateAttributeDto](#templateattributedto) ] | Set of possible attributes | No |
| defaultValue | string | Parameter Default Value<br/>*Example:* `"XYZ"` | No |
| description | string | Parameter description<br/>*Example:* `"Parameter for Brand"` | Yes |
| fieldType | string | Parameter Type<br/>*Enum:* `"NUMBER"`, `"TEXT"`, `"DROPDOWN"`, `"MULTI_SELECT"`<br/>*Example:* `"TEXT"` | No |
| label | string | Parameter Label<br/>*Example:* `"Label"` | Yes |
| mandatory | boolean | Parameter Mandatory<br/>*Example:* `false` | No |
| maxLength | integer | Maximum length of value<br/>*Example:* `25` | No |

#### UOMDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Is active or not<br/>*Example:* `true` | No |
| deleted | boolean | Is deleted or not<br/>*Example:* `false` | No |
| description | string | UOM description<br/>*Example:* `"UOM to measure weight"` | No |
| id | long | UOM Id<br/>*Example:* `1` | No |
| isSystemGenerated | boolean | Flag to specify if the UOM is system or user generated<br/>*Example:* `false` | No |
| name | string | UOM name<br/>*Example:* `"LB"` | No |
| tenantId | long | Tenant Id<br/>*Example:* `1233` | No |

#### UOMSchemaDefinitionDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| sinkConversionFactor | number | 10<br/>*Example:* `10` | No |
| sinkUOM | long | 2<br/>*Example:* `2` | No |
| sourceConversionFactor | number | 1<br/>*Example:* `1` | No |
| sourceUOM | long | 4<br/>*Example:* `4` | No |
| uid | string (uuid) | UOM Schema Definition Id<br/>*Example:* `1` | No |

#### UOMSchemaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Is active or not<br/>*Example:* `true` | No |
| baseUOM | [UOMDto](#uomdto) | Base UOM<br/>*Example:* `"LB"` | No |
| id | long | UOM Id<br/>*Example:* `1` | No |
| name | string | UOM name<br/>*Example:* `"LB"` | No |
| uomSchemaDefinitions | [ [UOMSchemaDefinitionDto](#uomschemadefinitiondto) ] | UOM schema definitions | No |

#### WIPConsumptionProductionProductwiseData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| productCode | string | Product Code<br/>*Example:* `"P-0000001"` | Yes |
| quantity | number | Quantity<br/>*Example:* `1` | Yes |
| wipProcessTypes | string | WIP Process Types e.g. Consumption, Production etc<br/>*Enum:* `"PRODUCTION"`, `"CONSUMPTION"`, `"WASTAGE"`, `"SCRAP"`, `"CO_PRODUCT"`<br/>*Example:* `"NONE"` | No |
| workOrderCode | string | pid<br/>*Example:* `"P-0000001"` | Yes |

#### WIPConsumptionProductionRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| costPerUnit | number |  | No |
| documentDate | string |  | No |
| id | long |  | No |
| includeByProductCost | boolean |  | No |
| isQcEnabled | boolean | Flag will pass as true for QC work flow. Possible value - TRUE \| FALSE<br/>*Example:* `false` | No |
| productCode | string |  | No |
| qcRecordId | long |  | No |
| qcStatus | string | *Enum:* `"PENDING"`, `"COMPLETED"`, `"NONE"` | No |
| quantity | number |  | No |
| substituteParentProductCode | string |  | No |
| type | string | *Enum:* `"PRODUCTION"`, `"CONSUMPTION"`, `"WASTAGE"`, `"SCRAP"`, `"CO_PRODUCT"` | No |
| warehouseInventoryData | [ [WarehouseInventoryData](#warehouseinventorydata) ] |  | No |
| workOrderCode | string |  | No |
| workOrderId | long |  | No |
| workOrderItemCode | string |  | No |

#### WIPConsumptionProductionResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| childScrapCoproductItems | [ [WIPConsumptionProductionResponse](#wipconsumptionproductionresponse) ] |  | No |
| costPerUnit | number |  | No |
| dateStamp | dateTime |  | No |
| documentDate | string |  | No |
| id | long |  | No |
| includeByProductCost | boolean |  | No |
| isDeleted | boolean |  | No |
| isQcEnabled | boolean | Flag will pass as true for QC work flow. Possible value - TRUE \| FALSE<br/>*Example:* `false` | No |
| productCode | string |  | No |
| qcRecordId | long |  | No |
| qcStatus | string | *Enum:* `"PENDING"`, `"COMPLETED"`, `"NONE"` | No |
| quantity | number |  | No |
| substituteParentProductCode | string |  | No |
| type | string | *Enum:* `"PRODUCTION"`, `"CONSUMPTION"`, `"WASTAGE"`, `"SCRAP"`, `"CO_PRODUCT"` | No |
| warehouseInventoryData | [ [WarehouseInventoryData](#warehouseinventorydata) ] |  | No |
| workOrderCode | string |  | No |
| workOrderId | long |  | No |
| workOrderItemCode | string |  | No |

#### WarehouseInventoryData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingData | [ [AdvancedTrackingBOMDto](#advancedtrackingbomdto) ] | Advanced tracking to fulfil list | No |
| binCode | string | bin code<br/>*Example:* `"BIN-00001"` | Yes |
| binName | string | bin name<br/>*Example:* `"BIN-00001"` | No |
| id | long | Id<br/>*Example:* `1` | No |
| quantity | number | Warehouse Code<br/>*Example:* `1` | No |
| rackCode | string | Rack code<br/>*Example:* `"RACK-00001"` | Yes |
| rackName | string | Rack name<br/>*Example:* `"RACK-00001"` | No |
| rowCode | string | Row code<br/>*Example:* `"ROW-00001"` | Yes |
| rowName | string | Row Nane<br/>*Example:* `"ROW-00001"` | No |
| warehouseCode | string | Warehouse Code<br/>*Example:* `"WH-0000001"` | No |
| warehouseName | string | Warehouse Name<br/>*Example:* `"Warehouse name"` | No |

#### WorkOrderChildDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| productCode | string | Product Code<br/>*Example:* `"P-000001"` | No |
| workOrderCode | string | Child Work order code | No |
| workOrderSeqCode | string | Child Work order seq code<br/>*Example:* `"WO-00002"` | No |

#### WorkOrderSourceDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| linkedDocumentCode | string |  | No |
| salesOrderSequenceCode | string |  | No |
| workOrderSource | string | *Enum:* `"SALES_ORDER"`, `"NONE"` | No |

#### WorkingHours

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| endTime | string |  | No |
| isEnabled | boolean |  | No |
| srNo | string |  | No |
| startTime | string |  | No |

#### WorkstationDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| consumableCost | number | Consumable Cost.<br/>*Example:* `100` | No |
| description | string | Workstation description.<br/>*Example:* `"Description"` | No |
| electricityCost | number | Electricity Cost.<br/>*Example:* `100` | No |
| holidayList | long |  | No |
| productionCapacity | number | Production Capacity.<br/>*Example:* `100` | No |
| rentCost | number | Rent Cost.<br/>*Example:* `100` | No |
| wages | number | Wages.<br/>*Example:* `100` | No |
| workingHours | [ [WorkingHours](#workinghours) ] | Working hours list.<br/>*Example:* `"Working Hours"` | No |
| workstationCode | string |  | No |
| workstationName | string | Workstation name.<br/>*Example:* `"Waorkstation1"` | No |
