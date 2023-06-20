---
id: quotationapi
title: Quotation APIs
sidebar_label: Quotation
---
Quotation is created in sell module. You will be able to track the quotation process with the fulfillment feature. The fulfilment process comes with three status - “Fulfilled”, “Partial”, “Unfulfilled”. With this status, you will be able to make accurate business actions. Once the quotation is fulfilled, you will be able to convert it into an invoice, automatically recording it into your [accounts receivable account](https://www.deskera.com/sg/books/chart-of-accounts-with-deskera-books/).

`Quotation Api` helps you to create/draft new quotation, retrieve a particular quotation, update a particular quotation, update linked [backorder](https://www.deskera.com/sg/books/back-orders-with-deskera-books/)/documents, or retrieve a list of all quotations.

More about [Quotation API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-e9797fc3-c97f-4f6e-8430-0ddeed514447?ctx=documentation)

## API
---

### Search Quotation/Estimate

Get quotations by filter criteria. [More about search quotation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-e9797fc3-c97f-4f6e-8430-0ddeed514447?ctx=documentation)

##### Description:

- Allows you to retrieve a list of all quotation.
- Allows you to retrieve specific quotation based on it's filter criteria.

#### GET
#### Quotations 

[More about search quotation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-e9797fc3-c97f-4f6e-8430-0ddeed514447?ctx=documentation)

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
| 200 | Quotation's have been fetched successfully. | [QuotationDto](#quotationdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Create Quotation/Estimate
Create/Draft a new quotation. [More about create quotation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-e9797fc3-c97f-4f6e-8430-0ddeed514447?ctx=documentation)

##### Description:

- Allows you to create/draft a new quotation.

#### POST
#### Quotations 

[More about create quotation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-e9797fc3-c97f-4f6e-8430-0ddeed514447?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationDto | body | quotationDto | Yes | [QuotationDto](#quotationdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QuotationDto](#quotationdto) |
| 201 | Quotation has been created/drafted successfully. | [QuotationDto](#quotationdto) |
| 400 | Quotation creation/draft failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---

### Update Quotation/Estimate

Update quotation information. [More about update quotation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-e9797fc3-c97f-4f6e-8430-0ddeed514447?ctx=documentation)

##### Description:

- Allows you to update a specific quotation information.

#### PUT
#### Quotations /{id}

[More about update quotation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-e9797fc3-c97f-4f6e-8430-0ddeed514447?ctx=documentation)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotationDto | body | quotationDto | Yes | [QuotationDto](#quotationdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation has been updated successfully. | [QuotationDto](#quotationdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---

### Retrieve Quotation/Estimate

Get quotation by code. [More about retrieve quotation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-e9797fc3-c97f-4f6e-8430-0ddeed514447?ctx=documentation)

##### Description:

- Allows you to retrieve an existing quotation document information by it's code.

#### GET
#### Quotations /code/{code}

[More about retrieve quotation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-e9797fc3-c97f-4f6e-8430-0ddeed514447?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations documents have been fetched successfully. | [ [SalesDocument](#salesdocument) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
<!--
### Update Quotation Attribute

Update quotation attributes.

##### Description:

- Allows you to update attributes of existing quotation.

#### POST
#### Quotations /status
##### Request URL

```java
https://bifrost.deskera.comQuotations /status
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.comQuotations /status?quotationCode=Q001" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{}"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| attributeKeyValues | body | attributeKeyValues | Yes | object |
| quotationCode | query | quotationCode | Yes | string |

##### Sample Response
```java
Quotation attributes has been updated successfully.
```
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Quotation with given code not found. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
-->
### Update Linked BackOrder

Update linked documents for PO backorder

##### Description:

- Allows you to update linked documents for PO backorder.

#### POST
#### Quotations /update/linkedBackOrder
[More about retrieve quotation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-e9797fc3-c97f-4f6e-8430-0ddeed514447?ctx=documentation)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| backOrderUpdateRequest | body | backOrderUpdateRequest | Yes | [BackOrderUpdateRequest](#backorderupdaterequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Linked document for backorder has been successfully updated. |
| 201 | Created |
| 400 | Linked document for backorder update failed. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Update Linked Documents

Update linked documents for PO.

##### Description:

- Allows you to update linked documents for PO.

#### POST
#### Quotations /update/linkedDocument

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| linkedDocumentUpdateRequest | body | linkedDocumentUpdateRequest | Yes | [LinkedDocumentUpdateRequest](#linkeddocumentupdaterequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Linked document has been successfully updated. |
| 201 | Created |
| 400 | Linked document update failed. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Quotations /ae

#### GET
##### Summary

Fetch Quotations

##### Description

API to fetch existing quotations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation's have been fetched successfully. | [QuotationDtoUAE](#quotationdtouae) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Create/Draft quotation.

##### Description

API to create/draft a new quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationDtoUAE | body | quotationDtoUAE | Yes | [QuotationDtoUAE](#quotationdtouae) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QuotationDtoUAE](#quotationdtouae) |
| 201 | Quotation has been created/drafted successfully. | [QuotationDtoUAE](#quotationdtouae) |
| 400 | Quotation creation/draft failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ae/brief

#### GET
##### Summary

Get quotation brief information

##### Description

API to get brief information of all the quotations

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| isNewUi | query | isNewUi | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations brief information have been fetched successfully. | [ [QuotationShortInfo](#quotationshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ae/code/{code}

#### GET
##### Summary

Get quotation  information by codes.

##### Description

API to get quotation document information by codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations documents have been fetched successfully. | [ [QuotationDtoUAE](#quotationdtouae) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ae/report/count

#### POST
##### Summary

Get quotation count for contacts

##### Description

API to fetch quotation count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact quotation count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ae/report/open-quotes

#### GET
##### Summary

Current open quotations

##### Description

API to fetch current open quotations

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Open quotations count has been fetched. | integer |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ae/report/overview

#### GET
##### Summary

Quotation report overview.

##### Description

API to fetch quotation report overview.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCode | query | contactCode | No | string |
| epoch | query | epoch | Yes | long |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation overview report has been prepared. | [QuotationOverviewReport](#quotationoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ae/status

#### POST
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| attributeKeyValues | body | attributeKeyValues | Yes | object |
| quotationCode | query | quotationCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Quotation with given code not found. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ae/{id}

#### PUT
##### Summary

Update quotation.

##### Description

API to update existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotationDtoUAE | body | quotationDtoUAE | Yes | [QuotationDtoUAE](#quotationdtouae) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation has been updated successfully. | [QuotationDtoUAE](#quotationdtouae) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete quotation.

##### Description

API to delete quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Quotation has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PATCH
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotation | body | quotation | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation attributes has been updated successfully. | [QuotationDtoUAE](#quotationdtouae) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /approval-status

#### POST
##### Summary

Update approval status

##### Description

API to update approval status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| approvalStatusRequestDtoList | body | approvalStatusRequestDtoList | Yes | [ [ApprovalStatusRequestDto](#approvalstatusrequestdto) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Approval status for Sales documents have been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /au

#### GET
##### Summary

Fetch Quotations

##### Description

API to fetch existing quotations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation's have been fetched successfully. | [QuotationDtoAustralia](#quotationdtoaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Create/Draft quotation.

##### Description

API to create/draft a new quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationDtoAustralia | body | quotationDtoAustralia | Yes | [QuotationDtoAustralia](#quotationdtoaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QuotationDtoAustralia](#quotationdtoaustralia) |
| 201 | Quotation has been created/drafted successfully. | [QuotationDtoAustralia](#quotationdtoaustralia) |
| 400 | Quotation creation/draft failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /au/brief

#### GET
##### Summary

Get quotation brief information

##### Description

API to get brief information of all the quotations

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| isNewUi | query | isNewUi | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations brief information have been fetched successfully. | [ [QuotationShortInfo](#quotationshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /au/code/{code}

#### GET
##### Summary

Get quotation  information by codes.

##### Description

API to get quotation document information by codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations documents have been fetched successfully. | [ [QuotationDtoAustralia](#quotationdtoaustralia) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /au/report/count

#### POST
##### Summary

Get quotation count for contacts

##### Description

API to fetch quotation count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact quotation count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /au/report/open-quotes

#### GET
##### Summary

Current open quotations

##### Description

API to fetch current open quotations

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Open quotations count has been fetched. | integer |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /au/report/overview

#### GET
##### Summary

Quotation report overview.

##### Description

API to fetch quotation report overview.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCode | query | contactCode | No | string |
| epoch | query | epoch | Yes | long |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation overview report has been prepared. | [QuotationOverviewReport](#quotationoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /au/status

#### POST
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| attributeKeyValues | body | attributeKeyValues | Yes | object |
| quotationCode | query | quotationCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Quotation with given code not found. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /au/{id}

#### PUT
##### Summary

Update quotation.

##### Description

API to update existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotationDtoAustralia | body | quotationDtoAustralia | Yes | [QuotationDtoAustralia](#quotationdtoaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation has been updated successfully. | [QuotationDtoAustralia](#quotationdtoaustralia) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete quotation.

##### Description

API to delete quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Quotation has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PATCH
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotation | body | quotation | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation attributes has been updated successfully. | [QuotationDtoAustralia](#quotationdtoaustralia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /batch

#### PUT
##### Summary

Batch update quotation attributes.

##### Description

Batch API to update attributes of existing quotation by codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationUpdateRequests | body | quotationUpdateRequests | Yes | [ [QuotationUpdateRequest](#quotationupdaterequest) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Quotation with given code not found. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /be

#### GET
##### Summary

Fetch Quotations

##### Description

API to fetch existing quotations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation's have been fetched successfully. | [QuotationDtoAustralia](#quotationdtoaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Create/Draft quotation.

##### Description

API to create/draft a new quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationDtoAustralia | body | quotationDtoAustralia | Yes | [QuotationDtoAustralia](#quotationdtoaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QuotationDtoAustralia](#quotationdtoaustralia) |
| 201 | Quotation has been created/drafted successfully. | [QuotationDtoAustralia](#quotationdtoaustralia) |
| 400 | Quotation creation/draft failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /be/brief

#### GET
##### Summary

Get quotation brief information

##### Description

API to get brief information of all the quotations

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| isNewUi | query | isNewUi | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations brief information have been fetched successfully. | [ [QuotationShortInfo](#quotationshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /be/code/{code}

#### GET
##### Summary

Get quotation  information by codes.

##### Description

API to get quotation document information by codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations documents have been fetched successfully. | [ [QuotationDtoAustralia](#quotationdtoaustralia) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /be/report/count

#### POST
##### Summary

Get quotation count for contacts

##### Description

API to fetch quotation count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact quotation count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /be/report/open-quotes

#### GET
##### Summary

Current open quotations

##### Description

API to fetch current open quotations

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Open quotations count has been fetched. | integer |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /be/report/overview

#### GET
##### Summary

Quotation report overview.

##### Description

API to fetch quotation report overview.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCode | query | contactCode | No | string |
| epoch | query | epoch | Yes | long |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation overview report has been prepared. | [QuotationOverviewReport](#quotationoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /be/status

#### POST
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| attributeKeyValues | body | attributeKeyValues | Yes | object |
| quotationCode | query | quotationCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Quotation with given code not found. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /be/{id}

#### PUT
##### Summary

Update quotation.

##### Description

API to update existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotationDtoAustralia | body | quotationDtoAustralia | Yes | [QuotationDtoAustralia](#quotationdtoaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation has been updated successfully. | [QuotationDtoAustralia](#quotationdtoaustralia) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete quotation.

##### Description

API to delete quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Quotation has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PATCH
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotation | body | quotation | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation attributes has been updated successfully. | [QuotationDtoAustralia](#quotationdtoaustralia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /brief

#### GET
##### Summary

Get quotation brief information

##### Description

API to get brief information of all the quotations

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| isNewUi | query | isNewUi | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations brief information have been fetched successfully. | [ [QuotationShortInfo](#quotationshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /bulk-delete

#### DELETE
##### Summary

Bulk Delete quotation.

##### Description

API to bulk delete quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationIds | body | quotationIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [QuotationBulkDeleteResponseDto](#quotationbulkdeleteresponsedto) ] |
| 204 | Quotation has been deleted successfully. | [ [QuotationBulkDeleteResponseDto](#quotationbulkdeleteresponsedto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /bulk-details

#### POST
##### Summary

Quotation details by codes

##### Description

Quotation details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [QuotationInformation](#quotationinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /bulk-patch

#### PATCH
##### Summary

Bulk update quotation attributes.

##### Description

Bulk API to update attributes of existing quotations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotations | body | quotations | Yes | [ [Map«string,object»](#map«string,object») ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation attributes has been updated successfully. | [BulkApiResponse](#bulkapiresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /by-contact-ids

#### POST
##### Summary

Fetch Quotations

##### Description

API to fetch existing quotations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactIds | body | contactIds | Yes | [ long ] |
| customfield | query | customfield | No | string |
| fetchAttachmentDetails | query | fetchAttachmentDetails | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation's have been fetched successfully. | [QuotationDto](#quotationdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ca

#### GET
##### Summary

Fetch Quotations

##### Description

API to fetch existing quotations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation's have been fetched successfully. | [QuotationDtoCanada](#quotationdtocanada) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Create/Draft quotation.

##### Description

API to create/draft a new quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationDtoCanada | body | quotationDtoCanada | Yes | [QuotationDtoCanada](#quotationdtocanada) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QuotationDtoCanada](#quotationdtocanada) |
| 201 | Quotation has been created/drafted successfully. | [QuotationDtoCanada](#quotationdtocanada) |
| 400 | Quotation creation/draft failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ca/brief

#### GET
##### Summary

Get quotation brief information

##### Description

API to get brief information of all the quotations

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| isNewUi | query | isNewUi | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations brief information have been fetched successfully. | [ [QuotationShortInfo](#quotationshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ca/code/{code}

#### GET
##### Summary

Get quotation  information by codes.

##### Description

API to get quotation document information by codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations documents have been fetched successfully. | [ [QuotationDtoCanada](#quotationdtocanada) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ca/report/count

#### POST
##### Summary

Get quotation count for contacts

##### Description

API to fetch quotation count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact quotation count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ca/report/open-quotes

#### GET
##### Summary

Current open quotations

##### Description

API to fetch current open quotations

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Open quotations count has been fetched. | integer |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ca/report/overview

#### GET
##### Summary

Quotation report overview.

##### Description

API to fetch quotation report overview.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCode | query | contactCode | No | string |
| epoch | query | epoch | Yes | long |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation overview report has been prepared. | [QuotationOverviewReport](#quotationoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ca/status

#### POST
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| attributeKeyValues | body | attributeKeyValues | Yes | object |
| quotationCode | query | quotationCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Quotation with given code not found. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ca/{id}

#### PUT
##### Summary

Update quotation.

##### Description

API to update existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotationDtoCanada | body | quotationDtoCanada | Yes | [QuotationDtoCanada](#quotationdtocanada) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation has been updated successfully. | [QuotationDtoCanada](#quotationdtocanada) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete quotation.

##### Description

API to delete quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Quotation has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PATCH
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotation | body | quotation | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation attributes has been updated successfully. | [QuotationDtoCanada](#quotationdtocanada) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |


### Quotations /code/{code}/details

#### GET
##### Summary

Quotation details by codes

##### Description

Quotation details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QuotationInformation](#quotationinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /codes

#### POST
##### Summary

Get quotation  information by codes.

##### Description

API to get quotation document information by codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations documents have been fetched successfully. | [ [SalesDocument](#salesdocument) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /create-recurring

#### POST
##### Summary

Create a recurring quotation

##### Description

API to create a recurring quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| event | body | event | Yes | [RecurringJobEvent](#recurringjobevent) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Recurring quotation created successfully |
| 400 | Error while creating recurring quotation |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /custom-fields

#### GET
##### Summary

Get custom field is used or not

##### Description

API to Get custom field is used or not

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customCode | query | customCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Custom fields status fetched successfully | boolean |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /de

#### GET
##### Summary

Fetch Quotations

##### Description

API to fetch existing quotations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation's have been fetched successfully. | [QuotationDtoDE](#quotationdtode) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Create/Draft quotation.

##### Description

API to create/draft a new quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationDtoDE | body | quotationDtoDE | Yes | [QuotationDtoDE](#quotationdtode) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QuotationDtoDE](#quotationdtode) |
| 201 | Quotation has been created/drafted successfully. | [QuotationDtoDE](#quotationdtode) |
| 400 | Quotation creation/draft failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /de/brief

#### GET
##### Summary

Get quotation brief information

##### Description

API to get brief information of all the quotations

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| isNewUi | query | isNewUi | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations brief information have been fetched successfully. | [ [QuotationShortInfo](#quotationshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /de/code/{code}

#### GET
##### Summary

Get quotation  information by codes.

##### Description

API to get quotation document information by codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations documents have been fetched successfully. | [ [QuotationDto](#quotationdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /de/report/count

#### POST
##### Summary

Get quotation count for contacts

##### Description

API to fetch quotation count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact quotation count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /de/report/open-quotes

#### GET
##### Summary

Current open quotations

##### Description

API to fetch current open quotations

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Open quotations count has been fetched. | integer |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /de/report/overview

#### GET
##### Summary

Quotation report overview.

##### Description

API to fetch quotation report overview.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCode | query | contactCode | No | string |
| epoch | query | epoch | Yes | long |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation overview report has been prepared. | [QuotationOverviewReport](#quotationoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /de/status

#### POST
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| attributeKeyValues | body | attributeKeyValues | Yes | object |
| quotationCode | query | quotationCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Quotation with given code not found. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /de/{id}

#### PUT
##### Summary

Update quotation.

##### Description

API to update existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotationDtoDE | body | quotationDtoDE | Yes | [QuotationDtoDE](#quotationdtode) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation has been updated successfully. | [QuotationDtoDE](#quotationdtode) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete quotation.

##### Description

API to delete quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Quotation has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PATCH
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotation | body | quotation | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation attributes has been updated successfully. | [QuotationDtoDE](#quotationdtode) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /demo/{tenantId}

#### POST
##### Summary

Create demo quotations.

##### Description

API to create demo quotations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| country | query | country | No | string |
| tenantId | path | tenantId | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /draft/trigger

#### POST
##### Summary

Create approval status trigger

##### Description

API to reate approval status trigger

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| triggerKafkaRequestDto | body | triggerKafkaRequestDto | Yes | [TriggerKafkaRequestDto](#triggerkafkarequestdto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Trigger created for approval status |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /dropshipupdatequotation

#### PUT
##### Summary

Batch update quotation attributes.

##### Description

Batch API to update attributes of existing quotation by codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationUpdateRequests | body | quotationUpdateRequests | Yes | [ [QuotationUpdateRequest](#quotationupdaterequest) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Quotation with given code not found. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /id

#### GET
##### Summary

Fetch Quotations

##### Description

API to fetch existing quotations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation's have been fetched successfully. | [QuotationDtoIndonesia](#quotationdtoindonesia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Create/Draft quotation.

##### Description

API to create/draft a new quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationDtoIndonesia | body | quotationDtoIndonesia | Yes | [QuotationDtoIndonesia](#quotationdtoindonesia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QuotationDtoIndonesia](#quotationdtoindonesia) |
| 201 | Quotation has been created/drafted successfully. | [QuotationDtoIndonesia](#quotationdtoindonesia) |
| 400 | Quotation creation/draft failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /id/brief

#### GET
##### Summary

Get quotation brief information

##### Description

API to get brief information of all the quotations

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| isNewUi | query | isNewUi | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations brief information have been fetched successfully. | [ [QuotationShortInfo](#quotationshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /id/code/{code}

#### GET
##### Summary

Get quotation  information by codes.

##### Description

API to get quotation document information by codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations documents have been fetched successfully. | [ [QuotationDtoIndonesia](#quotationdtoindonesia) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /id/report/count

#### POST
##### Summary

Get quotation count for contacts

##### Description

API to fetch quotation count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact quotation count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /id/report/open-quotes

#### GET
##### Summary

Current open quotations

##### Description

API to fetch current open quotations

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Open quotations count has been fetched. | integer |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /id/report/overview

#### GET
##### Summary

Quotation report overview.

##### Description

API to fetch quotation report overview.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCode | query | contactCode | No | string |
| epoch | query | epoch | Yes | long |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation overview report has been prepared. | [QuotationOverviewReport](#quotationoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /id/status

#### POST
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| attributeKeyValues | body | attributeKeyValues | Yes | object |
| quotationCode | query | quotationCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Quotation with given code not found. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /id/{id}

#### PUT
##### Summary

Update quotation.

##### Description

API to update existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotationDtoIndonesia | body | quotationDtoIndonesia | Yes | [QuotationDtoIndonesia](#quotationdtoindonesia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation has been updated successfully. | [QuotationDtoIndonesia](#quotationdtoindonesia) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete quotation.

##### Description

API to delete quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Quotation has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PATCH
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotation | body | quotation | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation attributes has been updated successfully. | [QuotationDtoIndonesia](#quotationdtoindonesia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /il

#### GET
##### Summary

Fetch Quotations

##### Description

API to fetch existing quotations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation's have been fetched successfully. | [QuotationIsraelDto](#quotationisraeldto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Create/Draft quotation.

##### Description

API to create/draft a new quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationIsraelDto | body | quotationIsraelDto | Yes | [QuotationIsraelDto](#quotationisraeldto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QuotationIsraelDto](#quotationisraeldto) |
| 201 | Quotation has been created/drafted successfully. | [QuotationIsraelDto](#quotationisraeldto) |
| 400 | Quotation creation/draft failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /il/brief

#### GET
##### Summary

Get quotation brief information

##### Description

API to get brief information of all the quotations

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| isNewUi | query | isNewUi | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations brief information have been fetched successfully. | [ [QuotationShortInfo](#quotationshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /il/code/{code}

#### GET
##### Summary

Get quotation  information by codes.

##### Description

API to get quotation document information by codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations documents have been fetched successfully. | [ [QuotationIsraelDto](#quotationisraeldto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /il/report/count

#### POST
##### Summary

Get quotation count for contacts

##### Description

API to fetch quotation count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact quotation count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /il/report/open-quotes

#### GET
##### Summary

Current open quotations

##### Description

API to fetch current open quotations

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Open quotations count has been fetched. | integer |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /il/report/overview

#### GET
##### Summary

Quotation report overview.

##### Description

API to fetch quotation report overview.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCode | query | contactCode | No | string |
| epoch | query | epoch | Yes | long |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation overview report has been prepared. | [QuotationOverviewReport](#quotationoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /il/status

#### POST
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| attributeKeyValues | body | attributeKeyValues | Yes | object |
| quotationCode | query | quotationCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Quotation with given code not found. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /il/{id}

#### PUT
##### Summary

Update quotation.

##### Description

API to update existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotationIsraelDto | body | quotationIsraelDto | Yes | [QuotationIsraelDto](#quotationisraeldto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation has been updated successfully. | [QuotationIsraelDto](#quotationisraeldto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete quotation.

##### Description

API to delete quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Quotation has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PATCH
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotation | body | quotation | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation attributes has been updated successfully. | [QuotationIsraelDto](#quotationisraeldto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /import

#### POST
##### Summary

Create multiple quotations via import

##### Description

API to create quotations via import.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationRequests | body | quotationRequests | Yes | [ [QuotationDto](#quotationdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkApiResponse](#bulkapiresponse) |
| 201 | Quotation has been created/drafted successfully. | [BulkApiResponse](#bulkapiresponse) |
| 400 | Quotation creation/draft failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /in

#### GET
##### Summary

Fetch Quotations

##### Description

API to fetch existing quotations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| fetchAttachmentDetails | query | fetchAttachmentDetails | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation's have been fetched successfully. | [QuotationIndiaDto](#quotationindiadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Create/Draft quotation.

##### Description

API to create/draft a new quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationIndiaDto | body | quotationIndiaDto | Yes | [QuotationIndiaDto](#quotationindiadto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QuotationIndiaDto](#quotationindiadto) |
| 201 | Quotation has been created/drafted successfully. | [QuotationIndiaDto](#quotationindiadto) |
| 400 | Quotation creation/draft failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /in/brief

#### GET
##### Summary

Get quotation brief information

##### Description

API to get brief information of all the quotations

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| isNewUi | query | isNewUi | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations brief information have been fetched successfully. | [ [QuotationShortInfo](#quotationshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /in/code/{code}

#### GET
##### Summary

Get quotation  information by codes.

##### Description

API to get quotation document information by codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations documents have been fetched successfully. | [ [QuotationIndiaDto](#quotationindiadto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /in/create

#### PUT
##### Summary

Create/Draft quotation.

##### Description

API to create/draft a new quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationIndiaDto | body | quotationIndiaDto | Yes | [QuotationIndiaDto](#quotationindiadto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QuotationIndiaDto](#quotationindiadto) |
| 201 | Quotation has been created/drafted successfully. | [QuotationIndiaDto](#quotationindiadto) |
| 400 | Quotation creation/draft failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /in/import

#### POST
##### Summary

Create multiple quotations via import

##### Description

API to create quotations via import.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationRequests | body | quotationRequests | Yes | [ [QuotationIndiaDto](#quotationindiadto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkApiResponse](#bulkapiresponse) |
| 201 | Quotation has been created/drafted successfully. | [BulkApiResponse](#bulkapiresponse) |
| 400 | Quotation creation/draft failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /in/report/count

#### POST
##### Summary

Get quotation count for contacts

##### Description

API to fetch quotation count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact quotation count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /in/report/open-quotes

#### GET
##### Summary

Current open quotations

##### Description

API to fetch current open quotations

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Open quotations count has been fetched. | integer |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /in/report/overview

#### GET
##### Summary

Quotation report overview.

##### Description

API to fetch quotation report overview.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCode | query | contactCode | No | string |
| epoch | query | epoch | Yes | long |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation overview report has been prepared. | [QuotationOverviewReport](#quotationoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /in/status

#### POST
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| attributeKeyValues | body | attributeKeyValues | Yes | object |
| quotationCode | query | quotationCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Quotation with given code not found. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /in/{id}

#### PUT
##### Summary

Update quotation.

##### Description

API to update existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotationIndiaDto | body | quotationIndiaDto | Yes | [QuotationIndiaDto](#quotationindiadto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation has been updated successfully. | [QuotationIndiaDto](#quotationindiadto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete quotation.

##### Description

API to delete quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Quotation has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PATCH
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotation | body | quotation | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation attributes has been updated successfully. | [QuotationIndiaDto](#quotationindiadto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /linked-docs/product-codes

#### POST
##### Summary

Get products by code

##### Description

API to Get products by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
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
| --- | --- |
| Authorization | global |

### Quotations /my

#### GET
##### Summary

Fetch Quotations

##### Description

API to fetch existing quotations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation's have been fetched successfully. | [QuotationDtoMalaysia](#quotationdtomalaysia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Create/Draft quotation.

##### Description

API to create/draft a new quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| QuotationDtoMalaysia | body | QuotationDtoMalaysia | Yes | [QuotationDtoMalaysia](#quotationdtomalaysia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QuotationDtoMalaysia](#quotationdtomalaysia) |
| 201 | Quotation has been created/drafted successfully. | [QuotationDtoMalaysia](#quotationdtomalaysia) |
| 400 | Quotation creation/draft failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /my/brief

#### GET
##### Summary

Get quotation brief information

##### Description

API to get brief information of all the quotations

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| isNewUi | query | isNewUi | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations brief information have been fetched successfully. | [ [QuotationShortInfo](#quotationshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /my/code/{code}

#### GET
##### Summary

Get quotation  information by codes.

##### Description

API to get quotation document information by codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations documents have been fetched successfully. | [ [QuotationDtoMalaysia](#quotationdtomalaysia) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /my/report/count

#### POST
##### Summary

Get quotation count for contacts

##### Description

API to fetch quotation count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact quotation count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /my/report/open-quotes

#### GET
##### Summary

Current open quotations

##### Description

API to fetch current open quotations

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Open quotations count has been fetched. | integer |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /my/report/overview

#### GET
##### Summary

Quotation report overview.

##### Description

API to fetch quotation report overview.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCode | query | contactCode | No | string |
| epoch | query | epoch | Yes | long |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation overview report has been prepared. | [QuotationOverviewReport](#quotationoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /my/status

#### POST
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| attributeKeyValues | body | attributeKeyValues | Yes | object |
| quotationCode | query | quotationCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Quotation with given code not found. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /my/{id}

#### PUT
##### Summary

Update quotation.

##### Description

API to update existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| QuotationDtoMalaysia | body | QuotationDtoMalaysia | Yes | [QuotationDtoMalaysia](#quotationdtomalaysia) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation has been updated successfully. | [QuotationDtoMalaysia](#quotationdtomalaysia) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete quotation.

##### Description

API to delete quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Quotation has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PATCH
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotation | body | quotation | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation attributes has been updated successfully. | [QuotationDtoMalaysia](#quotationdtomalaysia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /nl

#### GET
##### Summary

Fetch Quotations

##### Description

API to fetch existing quotations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation's have been fetched successfully. | [QuotationDtoAustralia](#quotationdtoaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Create/Draft quotation.

##### Description

API to create/draft a new quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationDtoAustralia | body | quotationDtoAustralia | Yes | [QuotationDtoAustralia](#quotationdtoaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QuotationDtoAustralia](#quotationdtoaustralia) |
| 201 | Quotation has been created/drafted successfully. | [QuotationDtoAustralia](#quotationdtoaustralia) |
| 400 | Quotation creation/draft failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /nl/brief

#### GET
##### Summary

Get quotation brief information

##### Description

API to get brief information of all the quotations

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| isNewUi | query | isNewUi | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations brief information have been fetched successfully. | [ [QuotationShortInfo](#quotationshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /nl/code/{code}

#### GET
##### Summary

Get quotation  information by codes.

##### Description

API to get quotation document information by codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations documents have been fetched successfully. | [ [QuotationDtoAustralia](#quotationdtoaustralia) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /nl/report/count

#### POST
##### Summary

Get quotation count for contacts

##### Description

API to fetch quotation count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact quotation count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /nl/report/open-quotes

#### GET
##### Summary

Current open quotations

##### Description

API to fetch current open quotations

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Open quotations count has been fetched. | integer |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /nl/report/overview

#### GET
##### Summary

Quotation report overview.

##### Description

API to fetch quotation report overview.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCode | query | contactCode | No | string |
| epoch | query | epoch | Yes | long |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation overview report has been prepared. | [QuotationOverviewReport](#quotationoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /nl/status

#### POST
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| attributeKeyValues | body | attributeKeyValues | Yes | object |
| quotationCode | query | quotationCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Quotation with given code not found. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /nl/{id}

#### PUT
##### Summary

Update quotation.

##### Description

API to update existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotationDtoAustralia | body | quotationDtoAustralia | Yes | [QuotationDtoAustralia](#quotationdtoaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation has been updated successfully. | [QuotationDtoAustralia](#quotationdtoaustralia) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete quotation.

##### Description

API to delete quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Quotation has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PATCH
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotation | body | quotation | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation attributes has been updated successfully. | [QuotationDtoAustralia](#quotationdtoaustralia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /nz

#### GET
##### Summary

Fetch Quotations

##### Description

API to fetch existing quotations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation's have been fetched successfully. | [QuotationDtoAustralia](#quotationdtoaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Create/Draft quotation.

##### Description

API to create/draft a new quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationDtoAustralia | body | quotationDtoAustralia | Yes | [QuotationDtoAustralia](#quotationdtoaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QuotationDtoAustralia](#quotationdtoaustralia) |
| 201 | Quotation has been created/drafted successfully. | [QuotationDtoAustralia](#quotationdtoaustralia) |
| 400 | Quotation creation/draft failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /nz/brief

#### GET
##### Summary

Get quotation brief information

##### Description

API to get brief information of all the quotations

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| isNewUi | query | isNewUi | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations brief information have been fetched successfully. | [ [QuotationShortInfo](#quotationshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /nz/code/{code}

#### GET
##### Summary

Get quotation  information by codes.

##### Description

API to get quotation document information by codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations documents have been fetched successfully. | [ [QuotationDtoAustralia](#quotationdtoaustralia) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /nz/report/count

#### POST
##### Summary

Get quotation count for contacts

##### Description

API to fetch quotation count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact quotation count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /nz/report/open-quotes

#### GET
##### Summary

Current open quotations

##### Description

API to fetch current open quotations

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Open quotations count has been fetched. | integer |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /nz/report/overview

#### GET
##### Summary

Quotation report overview.

##### Description

API to fetch quotation report overview.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCode | query | contactCode | No | string |
| epoch | query | epoch | Yes | long |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation overview report has been prepared. | [QuotationOverviewReport](#quotationoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /nz/status

#### POST
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| attributeKeyValues | body | attributeKeyValues | Yes | object |
| quotationCode | query | quotationCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Quotation with given code not found. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /nz/{id}

#### PUT
##### Summary

Update quotation.

##### Description

API to update existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotationDtoAustralia | body | quotationDtoAustralia | Yes | [QuotationDtoAustralia](#quotationdtoaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation has been updated successfully. | [QuotationDtoAustralia](#quotationdtoaustralia) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete quotation.

##### Description

API to delete quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Quotation has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PATCH
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotation | body | quotation | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation attributes has been updated successfully. | [QuotationDtoAustralia](#quotationdtoaustralia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /pendingqty

#### PUT
##### Summary

Batch update to pending qty in Quotation Item.

##### Description

Batch API to update pending qty for QuotationItem.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationItemPendingQtyUpdateMap | body | quotationItemPendingQtyUpdateMap | Yes | object |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Pending qty updated successfully |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Pending qty update failure |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ph

#### GET
##### Summary

Fetch Quotations

##### Description

API to fetch existing quotations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation's have been fetched successfully. | [QuotationPhilippinesDto](#quotationphilippinesdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Create/Draft quotation.

##### Description

API to create/draft a new quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationPhilippinesDto | body | quotationPhilippinesDto | Yes | [QuotationPhilippinesDto](#quotationphilippinesdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QuotationPhilippinesDto](#quotationphilippinesdto) |
| 201 | Quotation has been created/drafted successfully. | [QuotationPhilippinesDto](#quotationphilippinesdto) |
| 400 | Quotation creation/draft failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ph/brief

#### GET
##### Summary

Get quotation brief information

##### Description

API to get brief information of all the quotations

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| isNewUi | query | isNewUi | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations brief information have been fetched successfully. | [ [QuotationShortInfo](#quotationshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ph/code/{code}

#### GET
##### Summary

Get quotation  information by codes.

##### Description

API to get quotation document information by codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations documents have been fetched successfully. | [ [QuotationPhilippinesDto](#quotationphilippinesdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ph/report/count

#### POST
##### Summary

Get quotation count for contacts

##### Description

API to fetch quotation count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact quotation count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ph/report/open-quotes

#### GET
##### Summary

Current open quotations

##### Description

API to fetch current open quotations

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Open quotations count has been fetched. | integer |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ph/report/overview

#### GET
##### Summary

Quotation report overview.

##### Description

API to fetch quotation report overview.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCode | query | contactCode | No | string |
| epoch | query | epoch | Yes | long |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation overview report has been prepared. | [QuotationOverviewReport](#quotationoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ph/status

#### POST
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| attributeKeyValues | body | attributeKeyValues | Yes | object |
| quotationCode | query | quotationCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Quotation with given code not found. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /ph/{id}

#### PUT
##### Summary

Update quotation.

##### Description

API to update existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotationPhilippinesDto | body | quotationPhilippinesDto | Yes | [QuotationPhilippinesDto](#quotationphilippinesdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation has been updated successfully. | [QuotationPhilippinesDto](#quotationphilippinesdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete quotation.

##### Description

API to delete quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Quotation has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PATCH
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotation | body | quotation | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation attributes has been updated successfully. | [QuotationPhilippinesDto](#quotationphilippinesdto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /product-codes

#### POST
##### Summary

Get List Of Quotations by product codes

##### Description

List of Quotations by product codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| productCodes | body | productCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [QuotationDto](#quotationdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /product-in-out-qty

#### GET
##### Summary

Find quotation data for Product in out qty

##### Description

API to Find quotation data for Product in out qty

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| productCode | query | productCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ProductInOutQty](#productinoutqty) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /productCode/{productCode}

#### GET
##### Summary

Check if a quotation exists for a given product

##### Description

Api to check if a quotation exists for a given product

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| productCode | path | productCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | boolean |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /quotationitemsstatus

#### POST
##### Summary

Get quotation items fulfillment status

##### Description

API to fetch quotation items fulfillment status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationItemToFulfilledMap | body | quotationItemToFulfilledMap | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | quotation items fulfillment status. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /quotationreserved

#### PUT
##### Summary

Update quotation reserved quantity

##### Description

API to Update quotation reserved quantity.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| reservedQuantityData | body | reservedQuantityData | Yes | [ [PPSReservedQuantityData](#ppsreservedquantitydata) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation reserved quantity updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Error occured while updating quotation reserved quantity. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /quotes-quantity

#### POST
##### Summary

Get quotation quantity

##### Description

API to get quotation quantity

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| request | body | request | Yes | [StockQuantitiesRequest](#stockquantitiesrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched quotation quantity successfully. | [StockQuantitiesResponse](#stockquantitiesresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /record-filter

#### POST
##### Summary

Create approval status trigger

##### Description

API to reate approval status trigger

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| filterRecord | body | filterRecord | Yes | [FilterRecord](#filterrecord) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Trigger created for approval status | boolean |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /report/count

#### POST
##### Summary

Get quotation count for contacts

##### Description

API to fetch quotation count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact quotation count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /report/open-quotes

#### GET
##### Summary

Current open quotations

##### Description

API to fetch current open quotations

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Open quotations count has been fetched. | integer |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /report/overview

#### GET
##### Summary

Quotation report overview.

##### Description

API to fetch quotation report overview.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCode | query | contactCode | No | string |
| epoch | query | epoch | Yes | long |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation overview report has been prepared. | [QuotationOverviewReport](#quotationoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /sa

#### GET
##### Summary

Fetch Quotations

##### Description

API to fetch existing quotations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation's have been fetched successfully. | [QuotationDtoSaudiArabia](#quotationdtosaudiarabia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Create/Draft quotation.

##### Description

API to create/draft a new quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationDtoUAE | body | quotationDtoUAE | Yes | [QuotationDtoSaudiArabia](#quotationdtosaudiarabia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QuotationDtoSaudiArabia](#quotationdtosaudiarabia) |
| 201 | Quotation has been created/drafted successfully. | [QuotationDtoSaudiArabia](#quotationdtosaudiarabia) |
| 400 | Quotation creation/draft failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /sa/brief

#### GET
##### Summary

Get quotation brief information

##### Description

API to get brief information of all the quotations

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| isNewUi | query | isNewUi | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations brief information have been fetched successfully. | [ [QuotationShortInfo](#quotationshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /sa/code/{code}

#### GET
##### Summary

Get quotation  information by codes.

##### Description

API to get quotation document information by codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations documents have been fetched successfully. | [ [QuotationDtoSaudiArabia](#quotationdtosaudiarabia) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /sa/report/count

#### POST
##### Summary

Get quotation count for contacts

##### Description

API to fetch quotation count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact quotation count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /sa/report/open-quotes

#### GET
##### Summary

Current open quotations

##### Description

API to fetch current open quotations

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Open quotations count has been fetched. | integer |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /sa/report/overview

#### GET
##### Summary

Quotation report overview.

##### Description

API to fetch quotation report overview.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCode | query | contactCode | No | string |
| epoch | query | epoch | Yes | long |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation overview report has been prepared. | [QuotationOverviewReport](#quotationoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /sa/status

#### POST
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| attributeKeyValues | body | attributeKeyValues | Yes | object |
| quotationCode | query | quotationCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Quotation with given code not found. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /sa/{id}

#### PUT
##### Summary

Update quotation.

##### Description

API to update existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotationDtoUAE | body | quotationDtoUAE | Yes | [QuotationDtoSaudiArabia](#quotationdtosaudiarabia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation has been updated successfully. | [QuotationDtoSaudiArabia](#quotationdtosaudiarabia) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete quotation.

##### Description

API to delete quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Quotation has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PATCH
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotation | body | quotation | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation attributes has been updated successfully. | [QuotationDtoSaudiArabia](#quotationdtosaudiarabia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /set-recurring

#### POST
##### Summary

Set an quotation to recurring

##### Description

API to set and quotation to recurring.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| setRecurringDto | body | setRecurringDto | Yes | [SetRecurringDto](#setrecurringdto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation set to recur successfully |
| 201 | Created |
| 400 | Error while setting quotation to recur |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /status

#### POST
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| attributeKeyValues | body | attributeKeyValues | Yes | object |
| quotationCode | query | quotationCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Quotation with given code not found. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /status/{code}

#### PATCH
##### Summary

refreshQuoteStatus

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /tax/count

#### POST
##### Summary

Get quotation count for tax

##### Description

API to fetch quotation count for tax

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| taxCodes | body | taxCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax quotation count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /uk

#### GET
##### Summary

Fetch Quotations

##### Description

API to fetch existing quotations.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customfield | query | customfield | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation's have been fetched successfully. | [QuotationDtoUk](#quotationdtouk) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Create/Draft quotation.

##### Description

API to create/draft a new quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| quotationDtoUk | body | quotationDtoUk | Yes | [QuotationDtoUk](#quotationdtouk) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [QuotationDtoUk](#quotationdtouk) |
| 201 | Quotation has been created/drafted successfully. | [QuotationDtoUk](#quotationdtouk) |
| 400 | Quotation creation/draft failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /uk/brief

#### GET
##### Summary

Get quotation brief information

##### Description

API to get brief information of all the quotations

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| isNewUi | query | isNewUi | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations brief information have been fetched successfully. | [ [QuotationShortInfo](#quotationshortinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /uk/code/{code}

#### GET
##### Summary

Get quotation  information by codes.

##### Description

API to get quotation document information by codes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotations documents have been fetched successfully. | [ [QuotationDto](#quotationdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /uk/report/count

#### POST
##### Summary

Get quotation count for contacts

##### Description

API to fetch quotation count for contacts

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact quotation count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /uk/report/open-quotes

#### GET
##### Summary

Current open quotations

##### Description

API to fetch current open quotations

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Open quotations count has been fetched. | integer |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /uk/report/overview

#### GET
##### Summary

Quotation report overview.

##### Description

API to fetch quotation report overview.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactCode | query | contactCode | No | string |
| epoch | query | epoch | Yes | long |
| interval | query | interval | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation overview report has been prepared. | [QuotationOverviewReport](#quotationoverviewreport) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /uk/status

#### POST
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| attributeKeyValues | body | attributeKeyValues | Yes | object |
| quotationCode | query | quotationCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Quotation attributes has been updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Quotation with given code not found. |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /uk/{id}

#### PUT
##### Summary

Update quotation.

##### Description

API to update existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotationDtoUk | body | quotationDtoUk | Yes | [QuotationDtoUk](#quotationdtouk) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation has been updated successfully. | [QuotationDtoUk](#quotationdtouk) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete quotation.

##### Description

API to delete quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Quotation has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PATCH
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotation | body | quotation | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation attributes has been updated successfully. | [QuotationDtoUk](#quotationdtouk) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /unreserve-quotations

#### POST
##### Summary

Api to Unreserve quantity in quotes only

##### Description

Api to Unreserve quantity in quotes only

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| updatedQuoteCodes | body | updatedQuoteCodes | Yes | [ string ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Api to Unreserve quantity in quotes only |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |


#### POST
##### Summary

Update linked documents for PO backorder

##### Description

API to update linked documents for PO backorder

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| backOrderUpdateRequest | body | backOrderUpdateRequest | Yes | [BackOrderUpdateRequest](#backorderupdaterequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Linked document for backorder has been successfully updated. |
| 201 | Created |
| 400 | Linked document for backorder update failed. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Quotations /update/linkedDocument

#### POST
##### Summary

Update linked documents for PO.

##### Description

API to pdate linked documents for PO.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| linkedDocumentUpdateRequest | body | linkedDocumentUpdateRequest | Yes | [LinkedDocumentUpdateRequest](#linkeddocumentupdaterequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Linked document has been successfully updated. |
| 201 | Created |
| 400 | Linked document update failed. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |


#### DELETE
##### Summary

Delete quotation.

##### Description

API to delete quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Quotation has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PATCH
##### Summary

Update quotation attributes.

##### Description

API to update attributes of existing quotation.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| quotation | body | quotation | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Quotation attributes has been updated successfully. | [QuotationDto](#quotationdto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Quotation with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/rel-txn

#### GET
##### Summary

Get Relation

##### Description

API to get relation between two documents.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| documentCode | query | documentCode | Yes | string |
| documentType | query | documentType | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Related transactions fetched successfully. | [RelatedTransactionResponse](#relatedtransactionresponse) |
| 400 | Get related transactions failed due to bad data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Create Relation

##### Description

API to create relation between two documents.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| relationDto | body | relationDto | Yes | [RelatedTransactionDto](#relatedtransactiondto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Relation Created. |
| 400 | Relation creation failed due to bad data. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### DELETE
##### Summary

Delete Relation

##### Description

API to delete relation between two documents.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| documentCode | query | documentCode | Yes | string |
| documentType | query | documentType | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Relation Deleted. |
| 400 | Relation deletion failed due to bad data. |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |
## Models

---

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

### Address

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address1 | string | Address line 1<br/>_Example:_ `"218, Robinson Road"` | No |
| address2 | string | Address line 2<br/>_Example:_ `"Downtown"` | No |
| city | string | City<br/>_Example:_ `"C001"` | No |
| contactName | string | contact name for address<br/>_Example:_ `"John Smith"` | No |
| country | string | Country<br/>_Example:_ `"C001"` | No |
| destinationOfSupply | string | state in India<br/>_Example:_ `"Maharashtra"` | No |
| placeOfSupply | string | state in India<br/>_Example:_ `"Punjab"` | No |
| postalCode | string | Postal Code<br/>_Example:_ `123456` | No |
| preferred | boolean | Is this a default address?<br/>_Example:_ `true` | No |
| state | string | State<br/>_Example:_ `"CS001"` | No |

### AdvancedTrackingFulfilmentDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| binCode | string | bin code<br/>_Example:_ `"BIN-00001"` | Yes |
| binName | string | Bin name<br/>_Example:_ `"Bin1"` | No |
| qtyToFulfil | double | Batch qty to fulfill<br/>_Example:_ `1` | No |
| rackCode | string | Rack code<br/>_Example:_ `"RACK-00001"` | Yes |
| rackName | string | Rack name<br/>_Example:_ `"Rack1"` | No |
| rowCode | string | Row code<br/>_Example:_ `"ROW-00001"` | Yes |
| rowName | string | Row name<br/>_Example:_ `"Row1"` | No |
| serialBatchNumber | string | Batch or serial number to be fulfilled<br/>_Example:_ `"Batch-001"` | No |
| warehouseCode | string | Warehouse of selected Batch/Serial<br/>_Example:_ `"WH-0000001"` | No |
| warehouseName | string | Warehouse name<br/>_Example:_ `"Warehouse-1"` | No |

### AdvancedTrackingMetaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| acquiredCost | number | Acquired cost of the entire serial or batch<br/>_Example:_ `1` | No |
| advancedTrackingReturned | [AdvancedTrackingReturned](#advancedtrackingreturned) |  | No |
| batchSize | double | Serial Number or Batch size<br/>_Example:_ `1` | Yes |
| batchSizeAvailableForReturn | double | How much of the batch or serial is fulfilled<br/>_Example:_ `1` | Yes |
| batchSizeFulfilled | double | How much of the batch or serial is fulfilled<br/>_Example:_ `1` | Yes |
| batchSizeReturned | double | How much of the batch or serial is returned<br/>_Example:_ `1` | Yes |
| batchSizeReturnedPurchase | double | How much of the batch or serial is returned<br/>_Example:_ `1` | Yes |
| binCode | string | bin code<br/>_Example:_ `"BIN-00001"` | Yes |
| binName | string | bin Name<br/>_Example:_ `"Bin 1"` | Yes |
| expiryDate | dateTime | Expiry date. Date Format is dd-mm-yyyy. Applicable when AdvancedTrackingType is Batch<br/>_Example:_ `"01-01-2020"` | No |
| id | long |  | No |
| manufacturingDate | dateTime | Manufacturing date. Date Format is dd-mm-yyyy. Applicable when AdvancedTrackingType is Batch<br/>_Example:_ `"01-01-2020"` | No |
| productVariantCode | string | Product code<br/>_Example:_ `"P-001"` | Yes |
| rackCode | string | Rack code<br/>_Example:_ `"RACK-00001"` | Yes |
| rackName | string | Rack Name<br/>_Example:_ `"Rack 1"` | Yes |
| reservedQuantity | double | Reserved Serial Number or Batch size<br/>_Example:_ `1` | No |
| reservedQuantityFulfilled | double | Fulfilled reserved serial number or batch size<br/>_Example:_ `1` | Yes |
| rowCode | string | Row code<br/>_Example:_ `"ROW-00001"` | Yes |
| rowName | string | Row Name<br/>_Example:_ `"Row 1"` | Yes |
| sequence | long | Sequence number<br/>_Example:_ `1` | No |
| serialBatchNumber | string | Serial Number or Batch Number<br/>_Example:_ `"BATCH-001"` | Yes |
| subSequence | long | Subsequence number<br/>_Example:_ `1` | No |
| warehouseCode | string | Primary Warehouse<br/>_Example:_ `"WH-0000001"` | No |
| warehouseName | string | Primary Warehouse<br/>_Example:_ `"warehouse name"` | No |

### AdvancedTrackingReturned

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| batchSizeReturned | double |  | No |
| batchSizeReturnedPurchase | double |  | No |
| returnsByDoc | [ [AdvancedTrackingReturnedByDoc](#advancedtrackingreturnedbydoc) ] |  | No |

### AdvancedTrackingReturnedByDoc

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string |  | No |
| qtyReturned | double |  | No |
| returnType | string | _Enum:_ `"SALES_RETURN"`, `"PURCHASE_RETURN"` | No |
| transactionRefCode | string |  | No |

### ApprovalHistoryItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvedBy | string |  | No |
| approvedDate | string |  | No |
| level | integer |  | No |
| remarks | string |  | No |
| status | string | _Enum:_ `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"` | No |

### ApprovalStatusRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalStatus | string | _Enum:_ `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"` | No |
| documentCodes | string |  | No |

### AttachmentsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachmentDate | dateTime |  | No |
| attachmentFileName | string |  | No |
| attachmentId | long |  | No |
| attachmentSize | string |  | No |

### AttributeDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | Attribute ID<br/>_Example:_ `"Id"` | No |
| name | string | Attribute Name<br/>_Example:_ `"Colour"` | No |
| values | [ string ] | Attribute values | No |

### BackOrderUpdateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentInfo | [DocumentInfo](#documentinfo) |  | No |
| salesDocumentCode | string |  | No |
| salesDocumentType | string | _Enum:_ `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"PURCHASE_REQUEST"`, `"PURCHASE_REQUEST_FOR_QUOTES"`, `"SUPPLIER_QUOTES"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`, `"ESTIMATE"` | No |

### BarcodeDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| barcodeField | string |  | No |
| hideBarcodeLabel | boolean |  | No |

### BomAdditionalCostDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bomMetaDetailsId | long | id of bomMetaDetailsId<br/>_Example:_ `1234` | No |
| bomMetaName | string | BOM Meta Name<br/>_Example:_ `"DEFAULT"` | No |
| label | string | Name of manufacturing service<br/>_Example:_ `"Labour charges"` | No |
| price | number | Quantity of product in bom<br/>_Example:_ `10.5` | No |

### BomMetaDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | bom meta details status<br/>_Example:_ `true` | No |
| bomAddCostConfiguration | [ [BomAdditionalCostDto](#bomadditionalcostdto) ] | Bom additional cost information | No |
| bomOperationsConfiguration | [ [BomOperationDto](#bomoperationdto) ] | Bom Operations information | No |
| bomProductCostDetails | [ [BomProductCostDetails](#bomproductcostdetails) ] | JSON object for custom fields<br/>_Example:_ `{"field1":"value1","field2":"value2"}` | No |
| bomProductsConfiguration | [ [BomMetaDto](#bommetadto) ] | Bom Products information | No |
| code | string | bom meta details code<br/>_Example:_ `"code"` | No |
| deleted | boolean | bom meta details delete status<br/>_Example:_ `true` | No |
| id | long | id of bom meta details <br/>_Example:_ `1234` | No |
| isDefault | boolean | bom default<br/>_Example:_ `true` | No |
| name | string | bom meta details name<br/>_Example:_ `"bom meta name"` | No |
| productId | string | id of bom product<br/>_Example:_ `1234` | No |

### BomMetaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bomMetaDetailsId | long | id of bomMetaDetailsId<br/>_Example:_ `1234` | No |
| bomMetaName | string | BOM Meta Name<br/>_Example:_ `"DEFAULT"` | No |
| bomProductSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] |  | No |
| cost | number | Cost of product in bom<br/>_Example:_ `10.5` | No |
| itemId | long | id of item in bom<br/>_Example:_ `1234` | No |
| itemName | string | Product Name<br/>_Example:_ `"Apple"` | Yes |
| produceProductType | string | Produce Product type<br/>_Enum:_ `"NONE"`, `"SCRAP"`, `"COPRODUCT"`<br/>_Example:_ `"SCRAP"` | Yes |
| productCode | string |  | No |
| quantity | number | Quantity of product in bom<br/>_Example:_ `10.5` | No |
| stockUom | long |  | No |

### BomOperationDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bomMetaDetailsId | long | id of bomMetaDetailsId<br/>_Example:_ `1234` | No |
| bomMetaName | string | BOM Meta Name<br/>_Example:_ `"DEFAULT"` | No |
| costPerHour | number | Cost of operation in bom<br/>_Example:_ `10.5` | No |
| fixedRate | number | Cost of operation in bom<br/>_Example:_ `10.5` | No |
| operationId | long | id of operation in bom<br/>_Example:_ `1234` | No |
| operationName | string | Operation Name<br/>_Example:_ `"Apple"` | Yes |
| totalCost | number | Cost of operation in bom<br/>_Example:_ `10.5` | No |

### BomProductCostDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| operationCost | number | Operation Cost<br/>_Example:_ `15` | No |
| rawMaterialCost | number | Raw material cost<br/>_Example:_ `20` | No |
| totalCost | number | Total cost<br/>_Example:_ `35` | No |

### BulkApiResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ object ] |  | No |
| statusCode | integer |  | No |
| success | [ object ] |  | No |

### BulkApiResponse«QuotationDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [QuotationDto](#quotationdto) ] |  | No |
| statusCode | integer |  | No |
| success | [ [QuotationDto](#quotationdto) ] |  | No |

### BulkApiResponse«QuotationIndiaDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [QuotationIndiaDto](#quotationindiadto) ] |  | No |
| statusCode | integer |  | No |
| success | [ [QuotationIndiaDto](#quotationindiadto) ] |  | No |

### ContactDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attentionTo | string | the contact name in  govt agency<br/>_Example:_ `"Peter Parker"` | No |
| autoCharge | boolean | Auto payment charge<br/>_Example:_ `false` | No |
| billingAddress | [ [Address](#address) ] | List of Billing Address. | No |
| businessUnit | string | indicates the contact is govt agency<br/>_Example:_ `"CAA01 - Cvl Avtn Authrty of Singapore"` | No |
| contactMasterId | string (uuid) | contact master id<br/>_Example:_ `"2df7a5c1-3305-498d-8d01-aa92c42d19d2"` | No |
| contactNumber | string | Contact number<br/>_Example:_ `"+65999999999"` | No |
| creditLimit | number | Credit Limit<br/>_Example:_ `100` | No |
| creditLimitInBaseCurrency | number | Credit Limit In Org Currency<br/>_Example:_ `100` | No |
| currencyCode | string | Currency code<br/>_Enum:_ `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>_Example:_ `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>_Example:_ `{"field1":"value1","field2":"value2"}` | No |
| documentSequenceCode | string | Contact Sequence code<br/>_Example:_ `"C-0000001"` | No |
| emailId | string | contact email address<br/>_Example:_ `"myinfo@domain.com"` | No |
| extCompanyName | string | the company name from external app<br/>_Example:_ `"QuickBook"` | No |
| intercompanyType | string | Contact Type either parent or subsidiary<br/>_Enum:_ `"PARENT"`, `"SUBSIDIARY"`<br/>_Example:_ `"PARENT/SUBSIDIARY"` | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>_Enum:_ `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>_Example:_ `"IGNORE"` | No |
| invoices | object |  | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>_Example:_ `true` | No |
| isCreditLimitApplicable | boolean | Contact credit limit applicable<br/>_Example:_ `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>_Example:_ `true` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>_Example:_ `true` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>_Example:_ `false` | No |
| name | string | Contact name<br/>_Example:_ `"Sam"` | No |
| payableAccountCode | string | Payable account code<br/>_Example:_ `"AC002"` | No |
| paymentTermCode | string | Payment term code<br/>_Example:_ `"Net 0"` | No |
| peppolId | string | Peppol ID<br/>_Example:_ `"u000:11::11293"` | No |
| purchasePriceLists | [ long ] | Set of Purchase price lists<br/>_Example:_ `[123,456]` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>_Enum:_ `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>_Example:_ `"IGNORE"` | No |
| receivableAccountCode | string | Receivable account code<br/>_Example:_ `"AC001"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>_Enum:_ `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>_Example:_ `"IGNORE"` | No |
| salesPriceLists | [ long ] | Set of Sales price lists<br/>_Example:_ `[123,456]` | No |
| sequenceFormat | string | Sequence Format<br/>_Example:_ `1` | No |
| shippingAddress | [ [Address](#address) ] | List of Shipping Address. | No |
| singaporeGovt | boolean | indicates the contact is govt agency<br/>_Example:_ `true` | No |
| taxExempted | boolean | Denotes if customer is tax exempted<br/>_Example:_ `true` | No |
| taxExemptionNo | string | Generated tax exemption number<br/>_Example:_ `"234s-few3-2422"` | No |
| taxExemptionReason | string | Tax exemption reason<br/>_Example:_ `"Resale, Federal Agency"` | No |
| taxNumber | string | Tax number<br/>_Example:_ `123456` | No |
| uen | string | Contact UEN<br/>_Example:_ `"DHJEUK"` | No |

### ContactIndiaTdsInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| considerThresholdLimit | boolean | Consider Exemption Limit can be a check box field<br/>_Example:_ `true` | No |
| deducteeCode | string | Deductee Type<br/>_Example:_ `"Artificial Juridicial Person"` | No |
| deducteeType | string | Deductee Type<br/>_Example:_ `"Artificial Juridicial Person"` | No |
| deductionApplicable | boolean | This field can be visible only if PAN number is mentioned.<br/>_Example:_ `true` | No |
| dttaApplicable | boolean |  | No |
| dttaFromDate | dateTime |  | No |
| dttaToDate | dateTime |  | No |
| higherRate | integer | Percentage value and can be visible only if PAN number is not mentioned.<br/>_Example:_ `5` | No |
| noDeductionFromDate | dateTime | Start date field visible only if deductionApplicable field is true<br/>_Example:_ `"01-01-2020"` | No |
| noDeductionReason | string | Choose reason only if deductionApplicable field is true.<br/>_Example:_ `"TDS not to be made till the Basic Exemption is reached"` | No |
| noDeductionRefNo | string | Alphanumeric field and visible only if deductionApplicable field is true.<br/>_Example:_ `"AAAAABBBB1100"` | No |
| noDeductionTdsRate | integer | Special rate override with TDS Rate setting and will be visible only if deductionApplicable field is true<br/>_Example:_ `5` | No |
| noDeductionToDate | dateTime | End date field visible only if deductionApplicable field is true<br/>_Example:_ `"31-12-2020"` | No |
| nonDeductionApplicable | boolean | This field can be visible only if PAN number is mentioned.<br/>_Example:_ `true` | No |
| specialRate | integer |  | No |
| tan | string | Contact TAN<br/>_Example:_ `"AAAA99999A"` | No |

### ContactInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | string |  | No |
| name | string |  | No |

### ContactInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| autoCharge | boolean | Auto payment charge<br/>_Example:_ `false` | No |
| beVatIdentificationNo | string | VAT Identification No<br/>_Example:_ `123456789012345` | No |
| billingAddress | [ [Address](#address) ] | List of Billing Address. | No |
| birClassPhilippines | string | BIR class determines the type of business<br/>_Example:_ `"Services"` | No |
| businessRegNo | string | Contact Business Registration No<br/>_Example:_ `"W10-0108-000000021"` | No |
| contactMasterId | string (uuid) | contact master id<br/>_Example:_ `"2df7a5c1-3305-498d-8d01-aa92c42d19d2"` | No |
| contactNumber | string | Contact number<br/>_Example:_ `"+65999999999"` | No |
| creditLimit | number | Credit Limit<br/>_Example:_ `100` | No |
| creditLimitInBaseCurrency | number | Credit Limit In Org Currency<br/>_Example:_ `100` | No |
| currencyCode | string | Currency code<br/>_Enum:_ `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>_Example:_ `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>_Example:_ `{"field1":"value1","field2":"value2"}` | No |
| customerType | string | Customer Type<br/>_Enum:_ `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>_Example:_ `"NA"` | No |
| customerTypeMalaysia | string | Customer Type<br/>_Enum:_ `"NONE"`, `"EXPORT"`, `"SPECIAL_AREA"`, `"DESIGNATED_AREA"`, `"EXEMPTED_UNDER_SCHEDULE_A"`, `"EXEMPTED_UNDER_SCHEDULE_B"`, `"EXEMPTED_UNDER_SCHEDULE_C1_C2"`, `"EXEMPTED_UNDER_SCHEDULE_C3_C4"`, `"EXEMPTED_UNDER_SCHEDULE_C5"`<br/>_Example:_ `"NONE(None)"` | No |
| customerTypePhilippines | string | Customer Type<br/>_Enum:_ `"NORMAL_CORPORATE=Normal(Corporate)"`, `"NORMAL_INDIVIDUAL=Normal(Individual)"`, `"ZERO_RATED_CORPORATE=Zero rated(Corporate)"`, `"ZERO_RATED_INDIVIDUAL=Zero Rated (Individual)"`, `"NORMAL=Normal"`, `"GOVERNMENT=Government"`<br/>_Example:_ `"Normal(Corporate)"` | No |
| deVatIdentificationNo | string | VAT Identification No<br/>_Example:_ `123456789012345` | No |
| documentSequenceCode | string | Contact Sequence code<br/>_Example:_ `"C-0000001"` | No |
| emailId | string | contact email address<br/>_Example:_ `"myinfo@domain.com"` | No |
| exemptionCertificateMalaysia | boolean | Exemption certificate<br/>_Example:_ `true` | No |
| exemptionCriterialMalaysia | string | Exemption criteria<br/>_Enum:_ `"NONE"`, `"ZERO_RATED"`, `"EXEMPTED_ZERO"`<br/>_Example:_ `"NONE(None)"` | No |
| gstTreatment | string | GST treatment<br/>_Enum:_ `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>_Example:_ `"UnregisteredBusiness"` | No |
| gstin | string | Contact GSTIN<br/>_Example:_ `"21AONPM8088Q211"` | No |
| intercompanyType | string | Contact Type either parent or subsidiary<br/>_Enum:_ `"PARENT"`, `"SUBSIDIARY"`<br/>_Example:_ `"PARENT/SUBSIDIARY"` | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>_Enum:_ `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>_Example:_ `"IGNORE"` | No |
| invoices | object |  | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>_Example:_ `true` | No |
| isCreditLimitApplicable | boolean | Contact credit limit applicable<br/>_Example:_ `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>_Example:_ `true` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>_Example:_ `true` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>_Example:_ `false` | No |
| name | string | Contact name<br/>_Example:_ `"Sam"` | No |
| nikNumber | long | NIK No<br/>_Example:_ `123456789012345` | No |
| nlVatIdentificationNo | string | VAT Identification No<br/>_Example:_ `123456789012345` | No |
| npwpNumber | long | NPWP No<br/>_Example:_ `123456789012345` | No |
| pan | string | Contact PAN<br/>_Example:_ `"AONPM8088Q"` | No |
| payableAccountCode | string | Payable account code<br/>_Example:_ `"AC002"` | No |
| paymentTermCode | string | Payment term code<br/>_Example:_ `"Net 0"` | No |
| purchasePriceLists | [ long ] | Set of Purchase price lists<br/>_Example:_ `[123,456]` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>_Enum:_ `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>_Example:_ `"IGNORE"` | No |
| receivableAccountCode | string | Receivable account code<br/>_Example:_ `"AC001"` | No |
| resident | boolean | Is resident?<br/>_Example:_ `true` | No |
| residentStatusIndonesia | boolean | Resident Status<br/>_Example:_ `true` | No |
| saArabicDetails | [ContactSAArabicDto](#contactsaarabicdto) | Contact details in Arabic for Saudi Arabia | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>_Enum:_ `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>_Example:_ `"IGNORE"` | No |
| salesPriceLists | [ long ] | Set of Sales price lists<br/>_Example:_ `[123,456]` | No |
| salesTaxRegNo | string | Contact Sales Tax Registration No<br/>_Example:_ `"W10-0108-000000021"` | No |
| sequenceFormat | string | Sequence Format<br/>_Example:_ `1` | No |
| serviceTaxRegNo | string | Contact Service Tax Registration No<br/>_Example:_ `"W10-0108-000000021"` | No |
| shippingAddress | [ [Address](#address) ] | List of Shipping Address. | No |
| taxExempted | boolean |  | No |
| taxExemptionNo | string |  | No |
| taxExemptionReason | string |  | No |
| taxTreatment | string | Tax Treatment<br/>_Enum:_ `"VAT_Registered"`, `"Non_VAT_Registered"`, `"GCC_VAT_Registered"`, `"GCC_Non_VAT_Registered"`, `"Non_GCC"`, `"VAT_Registered_Designated_Zone"`, `"Non_VAT_Registered_Designated_Zone"`<br/>_Example:_ `"VAT_Registered"` | No |
| taxTypeCustomer | string | Tax Types Customer<br/>_Enum:_ `"TAX_CODE_CUSTOMER_01"`, `"TAX_CODE_CUSTOMER_02"`, `"TAX_CODE_CUSTOMER_03"`, `"TAX_CODE_CUSTOMER_04"`, `"TAX_CODE_CUSTOMER_05"`, `"TAX_CODE_CUSTOMER_06"`, `"TAX_CODE_CUSTOMER_07"`, `"TAX_CODE_CUSTOMER_08"`<br/>_Example:_ `"TAX_CODE_CUSTOMER_01"` | No |
| taxTypeVendor | string | Tax Types Vendor<br/>_Enum:_ `"TAX_CODE_VENDOR_01"`, `"TAX_CODE_VENDOR_02"`, `"TAX_CODE_VENDOR_03"`, `"TAX_CODE_VENDOR_04"`, `"TAX_CODE_VENDOR_05"`, `"TAX_CODE_VENDOR_06"`, `"TAX_CODE_VENDOR_07"`, `"TAX_CODE_VENDOR_08"`<br/>_Example:_ `"TAX_CODE_VENDOR_01"` | No |
| tdsApplicableIndia | boolean |  | No |
| tdsInfoIndia | [ContactIndiaTdsInfo](#contactindiatdsinfo) |  | No |
| tdsSectionToTdsRateId | long | Contact TDS Section to Tds Rate Id<br/>_Example:_ `1213454` | No |
| vatExemptionReasonPhilippines | string | Philippines specific Contact VAT Exemption Reason<br/>_Example:_ `"Reason"` | No |
| vatNoPhilippines | string | Philippines specific Contact VAT No.<br/>_Example:_ `"012-345-678-910"` | No |
| vatRegistrationNo | string | VAT Registration No<br/>_Example:_ `123456789012345` | No |
| vatStatusPhilippines | string | Philippines specific Contact VAT Status<br/>_Example:_ `"Input VAT"` | No |
| vendorType | string | Vendor Type<br/>_Enum:_ `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>_Example:_ `"NA"` | No |
| vendorTypeMalaysia | string | Vendor Type<br/>_Enum:_ `"NONE"`, `"SALES_TAX_EXEMPTION"`, `"MANUFACTURED_EXEMPTION"`, `"PERFORMED_EXEMPTION"`<br/>_Example:_ `"NONE(None)"` | No |
| vendorTypePhilippines | string | Vendor Type<br/>_Enum:_ `"NORMAL_CORPORATE=Normal(Corporate)"`, `"NORMAL_INDIVIDUAL=Normal(Individual)"`, `"ZERO_RATED_CORPORATE=Zero rated(Corporate)"`, `"ZERO_RATED_INDIVIDUAL=Zero Rated (Individual)"`, `"GOVERNMENT=Government"`, `"NORMAL=Normal"`, `"IMPORT=Import"`<br/>_Example:_ `"Normal(Corporate)"` | No |
| whtApplicablePhilippines | boolean | Make Contact as WHT applicable<br/>_Example:_ `true` | No |
| whtBusinessPhilippines | string | BIR class determines the type of business<br/>_Example:_ `"Individual"` | No |

### ContactSAArabicDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [ [Address](#address) ] | Billing addresses in Arabic language | No |
| saArabicName | string | _Example:_ `"Name in Saudi Arabic Language"` | No |
| shippingAddress | [ [Address](#address) ] | Shipping addresses in Arabic language | No |

### CustomFieldItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | Dimension Id<br/>_Example:_ `11567` | No |
| label | string | Custom Field Name<br/>_Example:_ `"Label"` | Yes |
| module | string | Supported Modules | No |
| value | object | Dimension Value<br/>_Example:_ `"XYZ"` | No |

### DocumentInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string | Document Code.<br/>_Example:_ `"QO-0000001"` | No |
| documentCreatedDate | dateTime | Purchase creation date<br/>_Example:_ `"2023-01-01T00:00:00.000+0000"` | No |
| documentSequenceCode | string | Purchase Order Code<br/>_Example:_ `"0000001"` | No |
| documentType | string | Type of document.<br/>_Enum:_ `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"PURCHASE_REQUEST"`, `"PURCHASE_REQUEST_FOR_QUOTES"`, `"SUPPLIER_QUOTES"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`, `"ESTIMATE"`<br/>_Example:_ `"QUOTATION"` | No |

### DocumentItemDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentSequenceCode | string | Product Document Sequence code<br/>_Example:_ `"P-0000001"` | Yes |
| documentUom | long | UOM id<br/>_Example:_ `111` | No |
| itemId | long | Document Item id<br/>_Example:_ `154` | Yes |
| product | [ProductResponse](#productresponse) | Product Short Info<br/>_Example:_ `"product"` | No |
| productCode | string | Product code<br/>_Example:_ `"P00001"` | Yes |
| productDescription | string | Product description<br/>_Example:_ `"Apple watch"` | No |
| productName | string | Product Name<br/>_Example:_ `"iPhone"` | No |
| productQuantity | number | Product quantity<br/>_Example:_ `2` | Yes |
| tax | [TaxDto](#taxdto) | Tax details<br/>_Example:_ `"taxDto"` | No |
| taxCode | string | Tax code<br/>_Example:_ `"tax code"` | No |
| unitPrice | number | Product unit price<br/>_Example:_ `0.7` | Yes |

### DocumentItemTaxMappingDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalTaxIn | boolean | true/false<br/>_Example:_ `true` | No |
| taxAmount | number | Tax amount<br/>_Example:_ `10` | No |
| taxApplyTo | string | Tax Apply To (Pre/AFTER)<br/>_Example:_ `"Pre"` | No |
| taxCode | string | Tax Code<br/>_Example:_ `"GST (10%)"` | No |
| taxName | string | Tax Name<br/>_Example:_ `"GST (10%)"` | No |
| taxRate | number | Tax rate<br/>_Example:_ `10` | No |
| taxSeqCode | string | Tax Sequence Code<br/>_Example:_ `"0000001"` | No |
| taxableAmount | number | Taxable Amount<br/>_Example:_ `100` | No |

### DocumentUOMSchemaDefinition

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string | UOM Schema Name<br/>_Example:_ `"UNIT"` | No |
| schemaId | long | UOM Schema Id<br/>_Example:_ `1` | No |
| sinkConversionFactor | number | 10<br/>_Example:_ `10` | No |
| sinkUOM | long | 2<br/>_Example:_ `2` | No |
| sourceConversionFactor | number | 1<br/>_Example:_ `1` | No |
| sourceUOM | long | 4<br/>_Example:_ `4` | No |
| uid | string | UOM Schema Definition Id<br/>_Example:_ `1` | No |

### FilterCondition

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| colId | string |  | No |
| opr | string |  | No |
| value | string |  | No |

### FilterRecord

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filterConditions | [ [FilterCondition](#filtercondition) ] |  | No |
| logicalOperator | string |  | No |
| uniqueId | long |  | No |

### GlobalDiscountDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string |  | No |
| amount | number |  | No |
| isPercent | boolean |  | No |
| isSubTotalOnly | boolean |  | No |
| name | string |  | No |
| percent | number |  | No |

### InventoryDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQuantity | double | Available quantity<br/>_Example:_ `100` | No |
| binCode | string | bin code<br/>_Example:_ `"BIN-00001"` | Yes |
| binName | string | bin name<br/>_Example:_ `"BIN-NAME"` | No |
| costOfGoodsSoldAccountCode | string | Cost of goods sold account code<br/>_Example:_ `"A-10231"` | Yes |
| inventoryAccountCode | string | Inventory account code<br/>_Example:_ `"A-10232"` | Yes |
| inventoryAccountName | string | Inventory account name<br/>_Example:_ `"Inventory Account"` | Yes |
| landedCostWeight | number | Landed cost weight value<br/>_Example:_ `10.5` | No |
| openingQuantity | double | Opening quantity<br/>_Example:_ `10` | No |
| openingValuation | double | Opening valuation<br/>_Example:_ `100.4` | No |
| rackCode | string | Rack code<br/>_Example:_ `"RACK-00001"` | Yes |
| rackName | string | Rack name<br/>_Example:_ `"RACK-NAME"` | No |
| reservedQuantity | double | Reserved quantity<br/>_Example:_ `100` | No |
| rowCode | string | Row code<br/>_Example:_ `"ROW-00001"` | Yes |
| rowName | string | Row name<br/>_Example:_ `"ROW-NAME"` | No |
| stockAdjustmentAccountCode | string | Stock adjustment account code<br/>_Example:_ `"A-10234"` | Yes |
| warehouseCode | string | Warehouse code<br/>_Example:_ `"WH-00001"` | Yes |
| wipInventoryAccountCode | string | WIP Inventory account code<br/>_Example:_ `"A-10233"` | Yes |

### InventoryWarehouseDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQuantity | number | Available quantity<br/>_Example:_ `100` | No |
| openingQuantity | number | Opening quantity<br/>_Example:_ `10` | No |
| openingValuation | number | Opening Valuation<br/>_Example:_ `1000` | No |
| warehouseCode | string | Warehouse code<br/>_Example:_ `"WH-00001"` | Yes |

### InvoiceResponseInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| currency | string |  | No |
| documentCode | string | document code<br/>_Example:_ `"SI-0000041"` | No |
| documentSequenceCode | string | Document Sequence Code<br/>_Example:_ `"00000001"` | No |
| dueAmount | number | due amount<br/>_Example:_ `46` | No |
| exchangeRate | number |  | No |
| id | long | ID<br/>_Example:_ `43` | No |
| invoiceDate | dateTime | invoice date<br/>_Example:_ `"2018-10-01"` | No |
| invoiceDueDate | dateTime | invoice due date<br/>_Example:_ `"2018-10-01"` | No |
| memo | string | memo<br/>_Example:_ `"test"` | No |
| purchaseOrderRefNo | string | Contact PO reference number<br/>_Example:_ `"CPO001"` | No |
| status | string | _Enum:_ `"OPEN"`, `"DRAFT"`, `"CLOSED"` | No |
| supplierInvoiceNo | string | Contact supplier invoice number<br/>_Example:_ `"CSI001"` | No |
| taxAmount | number | Total Amount<br/>_Example:_ `1` | No |
| totalAmount | number | total amount<br/>_Example:_ `46` | No |
| totalAmountInBaseCurrency | number | total amount in base currency<br/>_Example:_ `46` | No |
| type | string | sale invoice or purchase invoice<br/>_Example:_ `"sale_invoice"` | No |

### ItemQtyFulfilledByDoc

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fulfillmentId | string |  | No |
| siAmount | number |  | No |

### LandedCostCategory

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allocationType | string | _Enum:_ `"QUANTITY"`, `"VALUE"`, `"WEIGHT"`, `"MANUAL"`, `"CUSTOM_DUTY"` | No |
| name | string |  | No |

### LinkedDocumentUpdateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| newLinkedDocument | [DocumentInfo](#documentinfo) |  | No |
| oldLinkedDocument | [DocumentInfo](#documentinfo) |  | No |

### LinkedDocumentsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| used | boolean |  | No |

### LinkedSalesInvoiceResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentSequenceCode | string | Sales invoice Sequence Code<br/>_Example:_ `"0000001"` | No |
| dueAmount | number | Amount Due<br/>_Example:_ `12.322` | No |
| exchangeRate | number | Exchange rate<br/>_Example:_ `0.456345` | No |
| fulfillmentStatus | string | fulfillment status<br/>_Enum:_ `"UNFULFILLED"`, `"PARTIAL_FULFILLED"`, `"FULLY_FULFILLED"`<br/>_Example:_ `"PARTIAL_FULFILLED"` | No |
| salesInvoiceCode | string | Sales invoice code<br/>_Example:_ `"SI001"` | No |
| salesInvoiceDate | string | Sales Invoice date<br/>_Example:_ `"25-10-2019"` | Yes |
| totalAmount | number | Total Amount<br/>_Example:_ `1234.33` | No |

### LinkedSalesOrderResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentSequenceCode | string | Sales order Sequence Code<br/>_Example:_ `"0000001"` | No |
| dueAmount | number | Amount Due<br/>_Example:_ `12.322` | No |
| exchangeRate | number | Exchange rate<br/>_Example:_ `0.456345` | No |
| fulfillmentStatus | string | fulfillment status<br/>_Enum:_ `"UNFULFILLED"`, `"PARTIAL_FULFILLED"`, `"FULLY_FULFILLED"`<br/>_Example:_ `"PARTIAL_FULFILLED"` | No |
| salesOrderCode | string | Sales order code<br/>_Example:_ `"SO-001"` | No |
| salesOrderDate | string | Sales Invoice date<br/>_Example:_ `"25-10-2019"` | Yes |

### LinkedWareHouse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| binCode | string | bin code<br/>_Example:_ `"BIN-00001"` | Yes |
| quantity | number | Quantity from Warehouse.<br/>_Example:_ `100` | No |
| rackCode | string | Rack code<br/>_Example:_ `"RACK-00001"` | Yes |
| rowCode | string | Row code<br/>_Example:_ `"ROW-00001"` | Yes |
| warehouseCode | string | Warehouse code to identify the Warehouse.<br/>_Example:_ `"WH-0000001"` | No |

### PPSReservedQuantityData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| itemId | long | Document Item id<br/>_Example:_ `154` | Yes |
| reservedQuantitiesData | [ [ReservedQuantityData](#reservedquantitydata) ] | Reserved quantity data<br/>_Example:_ `[]` | No |

### Pageable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| offset | long |  | No |
| pageNumber | integer |  | No |
| pageSize | integer |  | No |
| paged | boolean |  | No |
| sort | [Sort](#sort) |  | No |
| unpaged | boolean |  | No |

### Page«QuotationDtoAustralia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [QuotationDtoAustralia](#quotationdtoaustralia) ] |  | No |
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

### Page«QuotationDtoCanada»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [QuotationDtoCanada](#quotationdtocanada) ] |  | No |
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

### Page«QuotationDtoDE»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [QuotationDtoDE](#quotationdtode) ] |  | No |
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

### Page«QuotationDtoIndonesia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [QuotationDtoIndonesia](#quotationdtoindonesia) ] |  | No |
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

### Page«QuotationDtoMalaysia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [QuotationDtoMalaysia](#quotationdtomalaysia) ] |  | No |
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

### Page«QuotationDtoSaudiArabia»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [QuotationDtoSaudiArabia](#quotationdtosaudiarabia) ] |  | No |
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

### Page«QuotationDtoUAE»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [QuotationDtoUAE](#quotationdtouae) ] |  | No |
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

### Page«QuotationDtoUk»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [QuotationDtoUk](#quotationdtouk) ] |  | No |
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

### Page«QuotationDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [QuotationDto](#quotationdto) ] |  | No |
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

### Page«QuotationIndiaDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [QuotationIndiaDto](#quotationindiadto) ] |  | No |
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

### Page«QuotationIsraelDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [QuotationIsraelDto](#quotationisraeldto) ] |  | No |
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

### Page«QuotationPhilippinesDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [QuotationPhilippinesDto](#quotationphilippinesdto) ] |  | No |
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

### ProductInOutQty

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentType | string | _Enum:_ `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"PURCHASE_REQUEST"`, `"PURCHASE_REQUEST_FOR_QUOTES"`, `"SUPPLIER_QUOTES"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`, `"ESTIMATE"` | No |
| productCode | string |  | No |
| quantity | number |  | No |

### ProductInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Product status<br/>_Example:_ `true` | No |
| advancedTracking | string | Advanced Tracking Type<br/>_Enum:_ `"NONE"`, `"BATCH"`, `"SERIAL"`<br/>_Example:_ `"NONE"` | No |
| advancedTrackingMetaData | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] | Advanced Tracking Meta data<br/>_Example:_ `{"field1":"value1","field2":"value2"}` | No |
| amortizationPeriod | integer | Amortization template period<br/>_Example:_ `36` | No |
| amortizationTemplateCode | string | Amortization template code<br/>_Example:_ `"0000001"` | No |
| attributes | [ [AttributeDetails](#attributedetails) ] | Attribute Details | No |
| autoFulfillmentEnabled | boolean | Is Auto-Fulfillment enable?<br/>_Example:_ `false` | No |
| availableQuantity | number | Available Quantity<br/>_Example:_ `2` | No |
| barcode | string | Product barcode<br/>_Example:_ `2365234` | No |
| barcodeDetails | [BarcodeDetails](#barcodedetails) | barcode details<br/>_Example:_ `{"barcodeField":"Samsung"}` | No |
| basePrice | double | Revenue Base price<br/>_Example:_ `120` | No |
| bomAddCostConfiguration | [ [BomAdditionalCostDto](#bomadditionalcostdto) ] | Bom additional cost information | No |
| bomMetaDetailsList | [ [BomMetaDetailsDto](#bommetadetailsdto) ] | multiple bom configuration<br/>_Example:_ `"Bom Configuration"` | No |
| bomOperationsConfiguration | [ [BomOperationDto](#bomoperationdto) ] | Bom Operations information | No |
| bomProductCostDetails | [ [BomProductCostDetails](#bomproductcostdetails) ] | JSON object for custom fields<br/>_Example:_ `{"field1":"value1","field2":"value2"}` | No |
| bomProductsConfiguration | [ [BomMetaDto](#bommetadto) ] | Bom Products information | No |
| categoryCode | string | Category code<br/>_Example:_ `"AB0001"` | No |
| categoryDesc | string | Category description<br/>_Example:_ `"Medical Equipment"` | No |
| cessRule | string | Cess rule expression<br/>_Example:_ `"Math.max(21*amount/100,4170*quantity/1000)"` | No |
| cessRuleDescription | string | Cess rule description<br/>_Example:_ `"21% or Rs. 4170 per thousand, whichever is higher"` | No |
| costOfGoodsSoldAccountCode | string |  | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>_Example:_ `{"field1":"value1","field2":"value2"}` | No |
| deferredExpenseAccountCode | string | Deferred Expense account code<br/>_Example:_ `"A-0015"` | No |
| deferredRevenueAccountCode | string | Deferred Revenue account code<br/>_Example:_ `"A-0015"` | No |
| deleted | boolean | Product delete status<br/>_Example:_ `true` | No |
| description | string | Product description<br/>_Example:_ `"Description"` | No |
| documentSequenceCode | string | Product Sequence code<br/>_Example:_ `"P-0000001"` | No |
| exciseApplicable | boolean | _Example:_ `true` | No |
| exciseRate | double | Excise rate based on Excise Type<br/>_Example:_ `10` | No |
| exciseRateIndo | number | Excise Rate<br/>_Example:_ `5` | No |
| exciseType | string | Excise type to apply<br/>_Enum:_ `"PERCENT"`, `"FLAT"`<br/>_Example:_ `"PERCENT"` | No |
| exemptedMalaysia | boolean | Whether Product is Tax Exempted<br/>_Example:_ `true` | No |
| glAccountCode | string | GL account code<br/>_Example:_ `"A-0017"` | No |
| hasBuildAssembly | boolean | Has Build Assembly<br/>_Example:_ `true` | No |
| hasVariants | boolean | Product has variants<br/>_Example:_ `false` | No |
| hsnOrSacCode | string | HSN or SAC code of product<br/>_Example:_ `1234` | No |
| id | long | Product ID<br/>_Example:_ `1234` | No |
| images | [ string ] | Product image url's | No |
| incomingQty | number | Product incoming Qty | No |
| inventory | [InventoryDto](#inventorydto) | Inventory information required for Tracked Products. | No |
| inventoryAccountCode | string |  | No |
| inventoryWarehouseDetails | [ [InventoryWarehouseDetails](#inventorywarehousedetails) ] | Inventory warehouse details<br/>_Example:_ `{"warehouseCode":"WH-00001","availableQuantity":"100","openingQuantity":"100"}` | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>_Example:_ `true` | No |
| isFinishedProduct | boolean | Is finished product?<br/>_Example:_ `false` | No |
| isUiProductUpdate | boolean | Product is update by UI.<br/>_Example:_ `false` | No |
| isVariant | boolean | Is a variant<br/>_Example:_ `false` | No |
| itcAdjustment | string | ITC adjustment<br/>_Enum:_ `"NA"`, `"ITC_IS_BLOCKED"`, `"ITC_IS_REVERSED"`<br/>_Example:_ `"ITC_IS_BLOCKED"` | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] | Landed cost category details | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code<br/>_Example:_ `"AC-0000012"` | No |
| masterProductCode | string | Master Product Code<br/>_Example:_ `"P-0000001"` | No |
| multipleUomSchema | boolean | Is multiple Uom Schema?<br/>_Example:_ `true` | No |
| name | string | Product Name<br/>_Example:_ `"Apple"` | Yes |
| nameInArabicSA | string |  | No |
| offeringType | string | Offering type<br/>_Enum:_ `"GOODS"`, `"SERVICES"`<br/>_Example:_ `"GOODS"` | No |
| outgoingQty | number | Product outgoing Qty | No |
| productId | string | Product ID<br/>_Example:_ `"P000011"` | No |
| productSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] |  | No |
| productTransactionType | string | Product Transaction Type<br/>_Enum:_ `"BOTH"`, `"PURCHASE"`, `"SALES"`<br/>_Example:_ `"BOTH"` | Yes |
| purchaseAccountCode | string | Purchase account code<br/>_Example:_ `"A-0012"` | Yes |
| purchasePrice | double | Purchase price<br/>_Example:_ `123.33` | Yes |
| purchasePriceTaxInclusive | boolean | Is purchase price tax inclusive?<br/>_Example:_ `true` | No |
| purchaseReturnAccountCode | string | Purchase return account code<br/>_Example:_ `"A-0014"` | No |
| purchaseTaxCode | string | Purchase tax code<br/>_Example:_ `"T-001"` | No |
| recommendedUom | long | Recommended product uom | No |
| reorderEnabled | boolean | Flag to enable reorder level<br/>_Example:_ `true` | No |
| reorderLevel | long | Reorder level of the Products.<br/>_Example:_ `100` | No |
| reorderLevelReached | boolean | Has Reorder level reached | No |
| reorderQuantity | long | Quantity to be reordered<br/>_Example:_ `50` | No |
| reorderVendorCode | string | Vendor code for reorder<br/>_Example:_ `"C-000001"` | No |
| reorderVendorName | string | Reorder Vendor Name | No |
| reservedQuantity | number | Reserved Quantity<br/>_Example:_ `2` | No |
| revenueRecognitionInfo | [ProductRevenueRecognitionInfo](#productrevenuerecognitioninfo) | Product Revenue Recognition Information Object | No |
| salesAccountCode | string | Sales account code<br/>_Example:_ `"A-0013"` | Yes |
| salesPrice | double | Sales price<br/>_Example:_ `120` | Yes |
| salesPriceTaxInclusive | boolean | Is sales price tax inclusive?<br/>_Example:_ `false` | No |
| salesReturnAccountCode | string | Sales return account code<br/>_Example:_ `"A-0015"` | No |
| salesTaxCode | string | Sales tax code<br/>_Example:_ `"T-002"` | No |
| sequenceFormat | string | Sequence Format<br/>_Example:_ `1` | No |
| source | string | Identify this is ecom sync product<br/>_Example:_ `"SHOPIFY"` | No |
| stockAdjustmentAccountCode | string |  | No |
| stockUom | long | Stock UOM<br/>_Example:_ `2` | Yes |
| tariffOrServiceCodeMalaysia | string | Tariff or Service code of product<br/>_Example:_ `1234` | No |
| taxExemptionReason | string | Tax Exempted reason to be filled, if taxPreference is true<br/>_Enum:_ `"EXEMPTED"`, `"NON_GST"`<br/>_Example:_ `"EXEMPTED"` | No |
| taxExemptionReasonMalaysia | string | Tax Exempted reason to be filled, if taxPreference is true<br/>_Enum:_ `"EXEMPTED"`, `"NON_SST"`, `"LIVE_ANIMALS"`, `"UNPROCESSED_FOOD"`, `"VEGETABLES"`, `"MEDICINES"`, `"MACHINERY"`, `"CHEMICALS"`<br/>_Example:_ `"EXEMPTED"` | No |
| taxPreference | boolean | Whether Product is Tax Exempted<br/>_Example:_ `true` | No |
| taxable | boolean | Is taxable?<br/>_Example:_ `true` | No |
| tdsApplicableIndia | boolean |  | No |
| tdsNatureOfPaymentIndia | string |  | No |
| type | string | Product type<br/>_Enum:_ `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"`<br/>_Example:_ `"TRACKED"` | Yes |
| uomSchema | long | Reorder level of the Products.<br/>_Example:_ `100` | No |
| uomSchemaDto | [UOMSchemaDto](#uomschemadto) | Product uom schema information | No |
| valuationMethod | string | Valuation Method<br/>_Enum:_ `"FIFO"`, `"AVERAGE"`<br/>_Example:_ `"FIFO"` | Yes |
| variantAttributes | object | Attribute Details specific to a variant | No |
| variantCount | integer | Variant Count | No |
| whtApplicable | boolean | _Example:_ `true` | No |
| whtSectionToWhtRateId | long | Product WHT - Nature Of Payment to WHT Rate Id<br/>_Example:_ `1213454` | No |
| wipInventoryAccountCode | string |  | No |

### ProductResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Product status<br/>_Example:_ `true` | No |
| advancedTracking | string | Advanced Tracking Type<br/>_Enum:_ `"NONE"`, `"BATCH"`, `"SERIAL"`<br/>_Example:_ `"NONE"` | No |
| advancedTrackingMetaData | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] | Advanced Tracking Meta data<br/>_Example:_ `{"field1":"value1","field2":"value2"}` | No |
| amortizationPeriod | integer | Amortization template period<br/>_Example:_ `36` | No |
| amortizationTemplateCode | string | Amortization template code<br/>_Example:_ `"0000001"` | No |
| attributes | [ [AttributeDetails](#attributedetails) ] | Attribute Details | No |
| autoFulfillmentEnabled | boolean | Is Auto-Fulfillment enable?<br/>_Example:_ `false` | No |
| barcode | string | Product barcode<br/>_Example:_ `2365234` | No |
| barcodeDetails | [BarcodeDetails](#barcodedetails) | barcode details<br/>_Example:_ `{"barcodeField":"Samsung"}` | No |
| basePrice | double | Revenue Base price<br/>_Example:_ `120` | No |
| bomAddCostConfiguration | [ [BomAdditionalCostDto](#bomadditionalcostdto) ] | Bom additional cost information | No |
| bomMetaDetailsList | [ [BomMetaDetailsDto](#bommetadetailsdto) ] | multiple bom configuration<br/>_Example:_ `"Bom Configuration"` | No |
| bomOperationsConfiguration | [ [BomOperationDto](#bomoperationdto) ] | Bom Operations information | No |
| bomProductCostDetails | [ [BomProductCostDetails](#bomproductcostdetails) ] | JSON object for custom fields<br/>_Example:_ `{"field1":"value1","field2":"value2"}` | No |
| bomProductsConfiguration | [ [BomMetaDto](#bommetadto) ] | Bom Products information | No |
| categoryCode | string | Category code<br/>_Example:_ `"AB0001"` | No |
| categoryDesc | string | Category description<br/>_Example:_ `"Medical Equipment"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>_Example:_ `{"field1":"value1","field2":"value2"}` | No |
| deferredExpenseAccountCode | string | Deferred Expense account code<br/>_Example:_ `"A-0015"` | No |
| deferredRevenueAccountCode | string | Deferred Revenue account code<br/>_Example:_ `"A-0015"` | No |
| deleted | boolean | Product delete status<br/>_Example:_ `true` | No |
| description | string | Product description<br/>_Example:_ `"Description"` | No |
| documentSequenceCode | string | Product Sequence code<br/>_Example:_ `"P-0000001"` | No |
| exciseRateIndo | number | Excise Rate<br/>_Example:_ `5` | No |
| hasBuildAssembly | boolean | Has Build Assembly<br/>_Example:_ `true` | No |
| hasVariants | boolean | Product has variants<br/>_Example:_ `false` | No |
| id | long | Product ID<br/>_Example:_ `1234` | No |
| images | [ string ] | Product image url's | No |
| incomingQty | number | Product incoming Qty | No |
| inventory | [InventoryDto](#inventorydto) | Inventory information required for Tracked Products. | No |
| inventoryWarehouseDetails | [ [InventoryWarehouseDetails](#inventorywarehousedetails) ] | Inventory warehouse details<br/>_Example:_ `{"warehouseCode":"WH-00001","availableQuantity":"100","openingQuantity":"100"}` | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>_Example:_ `true` | No |
| isFinishedProduct | boolean | Is finished product?<br/>_Example:_ `false` | No |
| isUiProductUpdate | boolean | Product is update by UI.<br/>_Example:_ `false` | No |
| isVariant | boolean | Is a variant<br/>_Example:_ `false` | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] | Landed cost category details | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code<br/>_Example:_ `"AC-0000012"` | No |
| masterProductCode | string | Master Product Code<br/>_Example:_ `"P-0000001"` | No |
| multipleUomSchema | boolean | Is multiple Uom Schema?<br/>_Example:_ `true` | No |
| name | string | Product Name<br/>_Example:_ `"Apple"` | Yes |
| outgoingQty | number | Product outgoing Qty | No |
| productId | string | Product ID<br/>_Example:_ `"P000011"` | No |
| productSubstitutesDetails | [ [ProductSubstitutesDetails](#productsubstitutesdetails) ] |  | No |
| productTransactionType | string | Product Transaction Type<br/>_Enum:_ `"BOTH"`, `"PURCHASE"`, `"SALES"`<br/>_Example:_ `"BOTH"` | Yes |
| purchaseAccountCode | string | Purchase account code<br/>_Example:_ `"A-0012"` | Yes |
| purchasePrice | double | Purchase price<br/>_Example:_ `123.33` | Yes |
| purchasePriceTaxInclusive | boolean | Is purchase price tax inclusive?<br/>_Example:_ `true` | No |
| purchaseReturnAccountCode | string | Purchase return account code<br/>_Example:_ `"A-0014"` | No |
| purchaseTaxCode | string | Purchase tax code<br/>_Example:_ `"T-001"` | No |
| recommendedUom | long | Recommended product uom | No |
| reorderEnabled | boolean | Flag to enable reorder level<br/>_Example:_ `true` | No |
| reorderLevel | long | Reorder level of the Products.<br/>_Example:_ `100` | No |
| reorderLevelReached | boolean | Has Reorder level reached | No |
| reorderQuantity | long | Quantity to be reordered<br/>_Example:_ `50` | No |
| reorderVendorCode | string | Vendor code for reorder<br/>_Example:_ `"C-000001"` | No |
| reorderVendorName | string | Reorder Vendor Name | No |
| revenueRecognitionInfo | [ProductRevenueRecognitionInfo](#productrevenuerecognitioninfo) | Product Revenue Recognition Information Object | No |
| salesAccountCode | string | Sales account code<br/>_Example:_ `"A-0013"` | Yes |
| salesPrice | double | Sales price<br/>_Example:_ `120` | Yes |
| salesPriceTaxInclusive | boolean | Is sales price tax inclusive?<br/>_Example:_ `false` | No |
| salesReturnAccountCode | string | Sales return account code<br/>_Example:_ `"A-0015"` | No |
| salesTaxCode | string | Sales tax code<br/>_Example:_ `"T-002"` | No |
| sequenceFormat | string | Sequence Format<br/>_Example:_ `1` | No |
| source | string | Identify this is ecom sync product<br/>_Example:_ `"SHOPIFY"` | No |
| stockUom | long | Stock UOM<br/>_Example:_ `2` | Yes |
| taxable | boolean | Is taxable?<br/>_Example:_ `true` | No |
| type | string | Product type<br/>_Enum:_ `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"`<br/>_Example:_ `"TRACKED"` | Yes |
| uomSchema | long | Reorder level of the Products.<br/>_Example:_ `100` | No |
| uomSchemaDto | [UOMSchemaDto](#uomschemadto) | Product uom schema information | No |
| valuationMethod | string | Valuation Method<br/>_Enum:_ `"FIFO"`, `"AVERAGE"`<br/>_Example:_ `"FIFO"` | Yes |
| variantAttributes | object | Attribute Details specific to a variant | No |
| variantCount | integer | Variant Count | No |

### ProductRevenueRecognitionInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allocationType | string | Allocation Type<br/>_Example:_ `"Normal/Exclude"` | No |
| createRevenuePlanOn | string | Create Revenue Plan On<br/>_Example:_ `"Fulfillment"` | No |
| isDirectRevenuePositing | boolean | Direct Revenue Positing<br/>_Example:_ `true` | No |
| itemRevenueCategory | string | Item Revenue Category<br/>_Example:_ `"Licence"` | No |
| revRecForecastRule | string | Revenue Recognition Forecast Rule<br/>_Example:_ `"Rule Forecast 1"` | No |
| revRecRule | string | Revenue Recognition Rule<br/>_Example:_ `"Rule 1"` | No |

### ProductStockInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fulfilledQuantity | number |  | No |
| pendingQuantity | number |  | No |
| productCode | string |  | No |
| receiptQuantity | number |  | No |
| status | string |  | No |
| warehouseCode | string |  | No |

### ProductSubstitutesDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTracking | string | Advanced Tracking Type<br/>_Enum:_ `"NONE"`, `"BATCH"`, `"SERIAL"`<br/>_Example:_ `"NONE"` | No |
| availableQuantity | number | Quantity of product available<br/>_Example:_ `10` | No |
| productDocumentSeqCode | string | Doc seq code of Product<br/>_Example:_ `"P-00001"` | No |
| productId | string | Product Id<br/>_Example:_ `"P-00001"` | No |
| productName | string | Name of Product<br/>_Example:_ `"Test Product"` | No |
| stockUom | long | Stock UOM<br/>_Example:_ `2` | Yes |
| type | string | Product type<br/>_Enum:_ `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"`<br/>_Example:_ `"TRACKED"` | Yes |

### QuotationBulkDeleteResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentSequenceCode | string | documentSequenceCode<br/>_Example:_ `"QU-0000001"` | No |
| httpStatus | string | HTTP Status<br/>_Enum:_ `"100 CONTINUE"`, `"101 SWITCHING_PROTOCOLS"`, `"102 PROCESSING"`, `"103 CHECKPOINT"`, `"200 OK"`, `"201 CREATED"`, `"202 ACCEPTED"`, `"203 NON_AUTHORITATIVE_INFORMATION"`, `"204 NO_CONTENT"`, `"205 RESET_CONTENT"`, `"206 PARTIAL_CONTENT"`, `"207 MULTI_STATUS"`, `"208 ALREADY_REPORTED"`, `"226 IM_USED"`, `"300 MULTIPLE_CHOICES"`, `"301 MOVED_PERMANENTLY"`, `"302 FOUND"`, `"302 MOVED_TEMPORARILY"`, `"303 SEE_OTHER"`, `"304 NOT_MODIFIED"`, `"305 USE_PROXY"`, `"307 TEMPORARY_REDIRECT"`, `"308 PERMANENT_REDIRECT"`, `"400 BAD_REQUEST"`, `"401 UNAUTHORIZED"`, `"402 PAYMENT_REQUIRED"`, `"403 FORBIDDEN"`, `"404 NOT_FOUND"`, `"405 METHOD_NOT_ALLOWED"`, `"406 NOT_ACCEPTABLE"`, `"407 PROXY_AUTHENTICATION_REQUIRED"`, `"408 REQUEST_TIMEOUT"`, `"409 CONFLICT"`, `"410 GONE"`, `"411 LENGTH_REQUIRED"`, `"412 PRECONDITION_FAILED"`, `"413 PAYLOAD_TOO_LARGE"`, `"413 REQUEST_ENTITY_TOO_LARGE"`, `"414 URI_TOO_LONG"`, `"414 REQUEST_URI_TOO_LONG"`, `"415 UNSUPPORTED_MEDIA_TYPE"`, `"416 REQUESTED_RANGE_NOT_SATISFIABLE"`, `"417 EXPECTATION_FAILED"`, `"418 I_AM_A_TEAPOT"`, `"419 INSUFFICIENT_SPACE_ON_RESOURCE"`, `"420 METHOD_FAILURE"`, `"421 DESTINATION_LOCKED"`, `"422 UNPROCESSABLE_ENTITY"`, `"423 LOCKED"`, `"424 FAILED_DEPENDENCY"`, `"426 UPGRADE_REQUIRED"`, `"428 PRECONDITION_REQUIRED"`, `"429 TOO_MANY_REQUESTS"`, `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"`, `"451 UNAVAILABLE_FOR_LEGAL_REASONS"`, `"500 INTERNAL_SERVER_ERROR"`, `"501 NOT_IMPLEMENTED"`, `"502 BAD_GATEWAY"`, `"503 SERVICE_UNAVAILABLE"`, `"504 GATEWAY_TIMEOUT"`, `"505 HTTP_VERSION_NOT_SUPPORTED"`, `"506 VARIANT_ALSO_NEGOTIATES"`, `"507 INSUFFICIENT_STORAGE"`, `"508 LOOP_DETECTED"`, `"509 BANDWIDTH_LIMIT_EXCEEDED"`, `"510 NOT_EXTENDED"`, `"511 NETWORK_AUTHENTICATION_REQUIRED"`<br/>_Example:_ `"404 NOT_FOUND"` | No |
| reason | string | _Example:_ `"NOT FOUND"` | No |

### QuotationDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) |  | No |
| approvalStatus | string | Approval status<br/>_Enum:_ `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>_Example:_ `"APPROVED"` | No |
| attachments | [ string ] | Attachments url's | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if backorder created<br/>_Example:_ `true` | No |
| billTo | [Address](#address) | Bill to Address. | No |
| contact | [ContactInfo](#contactinfo) | Contact info<br/>_Example:_ `"contact object"` | No |
| contactCode | string | Contact code<br/>_Example:_ `"C-0001"` | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| createdBy | long | UserId of creator<br/>_Example:_ `123` | No |
| currency | string | Currency code<br/>_Example:_ `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deleted | boolean | Quotation deleted<br/>_Example:_ `false` | No |
| documentDate | dateTime | Document date<br/>_Example:_ `"27-10-2019"` | No |
| documentSequenceCode | string | Quotation Code<br/>_Example:_ `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>_Example:_ `false` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | double | Exchange rate<br/>_Example:_ `0.01891562` | No |
| fulfillmentDate | dateTime | Fulfillment date<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentOn | dateTime | Fulfillment On<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentStatus | string | Fulfillment status<br/>_Enum:_ `"UNFULFILLED"`, `"PARTIAL_FULFILLED"`, `"FULLY_FULFILLED"`<br/>_Example:_ `"UNFULFILLED"` | No |
| fulfillmentType | string | Fulfillment type: NONE, DEFAULT, PICK_PACK_SHIP, DROP_SHIP<br/>_Enum:_`"NONE"`, `"DEFAULT"`, `"PICK_PACK_SHIP"`, `"DROP_SHIP"`<br/>_Example:_ `"PICK_PACK_SHIP"` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>_Example:_ `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedSalesInvoices | [ [LinkedSalesInvoiceResponse](#linkedsalesinvoiceresponse) ] |  | No |
| linkedSalesOrders | [ [LinkedSalesOrderResponse](#linkedsalesorderresponse) ] |  | No |
| memo | string | Memo text<br/>_Example:_ `"Sales quotation"` | No |
| processedInPPS | boolean |  | No |
| quotationItemDtoList | [ [QuotationItemDto](#quotationitemdto) ] | Quotation items information | No |
| recurring | boolean | Is quotation set to recurring<br/>_Example:_ `false` | No |
| recurringActivated | boolean | Is quotation recurring active<br/>_Example:_ `false` | No |
| reservedStock | boolean | Reserved stock enabled<br/>_Example:_ `true` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>_Example:_ `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>_Example:_ `1` | No |
| shipByDate | dateTime | Ship by date<br/>_Example:_ `"25-10-2019"` | No |
| shipFrom | [Address](#address) | Ship from Address. | No |
| shipTo | [Address](#address) | Ship to Address. | No |
| sourceAppName | string | Source App Name<br/>_Example:_ `"BOOKS"` | No |
| status | string | Quotation status<br/>_Enum:_ `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`<br/>_Example:_ `"OPEN"` | No |
| tenantId | long | Tenant id<br/>_Example:_ `123` | No |
| unitPriceGstInclusive | boolean | Unit Price is GST inclusive<br/>_Example:_ `true` | No |
| validTillDate | dateTime | Valid till date<br/>_Example:_ `"29-10-2019"` | No |
| warehouseCode | string | Warehouse Code<br/>_Example:_ `"WH-000001"` | No |

### QuotationDtoAustralia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalStatus | string | Approval status<br/>_Enum:_ `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>_Example:_ `"APPROVED"` | No |
| attachments | [ string ] | Attachments url's | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if backorder created<br/>_Example:_ `true` | No |
| billTo | [Address](#address) | Bill to Address. | No |
| contact | [ContactInfo](#contactinfo) | Contact info<br/>_Example:_ `"contact object"` | No |
| contactCode | string | Contact code<br/>_Example:_ `"C-0001"` | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| createdBy | long | UserId of creator<br/>_Example:_ `123` | No |
| currency | string | Currency code<br/>_Example:_ `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deleted | boolean | Quotation deleted<br/>_Example:_ `false` | No |
| documentDate | dateTime | Document date<br/>_Example:_ `"27-10-2019"` | No |
| documentSequenceCode | string | Quotation Code<br/>_Example:_ `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>_Example:_ `false` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | double | Exchange rate<br/>_Example:_ `0.01891562` | No |
| fulfillmentDate | dateTime | Fulfillment date<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentOn | dateTime | Fulfillment On<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentStatus | string | Fulfillment status<br/>_Enum:_ `"UNFULFILLED"`, `"PARTIAL_FULFILLED"`, `"FULLY_FULFILLED"`<br/>_Example:_ `"UNFULFILLED"` | No |
| fulfillmentType | string | Fulfillment type: NONE, DEFAULT, PICK_PACK_SHIP, DROP_SHIP<br/>_Enum:_`"NONE"`, `"DEFAULT"`, `"PICK_PACK_SHIP"`, `"DROP_SHIP"`<br/>_Example:_ `"PICK_PACK_SHIP"` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>_Example:_ `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedSalesInvoices | [ [LinkedSalesInvoiceResponse](#linkedsalesinvoiceresponse) ] |  | No |
| linkedSalesOrders | [ [LinkedSalesOrderResponse](#linkedsalesorderresponse) ] |  | No |
| memo | string | Memo text<br/>_Example:_ `"Sales quotation"` | No |
| processedInPPS | boolean |  | No |
| quotationItemDtoList | [ [QuotationItemDtoAustralia](#quotationitemdtoaustralia) ] | Quotation items information | No |
| recurring | boolean | Is quotation set to recurring<br/>_Example:_ `false` | No |
| recurringActivated | boolean | Is quotation recurring active<br/>_Example:_ `false` | No |
| reservedStock | boolean | Reserved stock enabled<br/>_Example:_ `true` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>_Example:_ `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>_Example:_ `1` | No |
| shipByDate | dateTime | Ship by date<br/>_Example:_ `"25-10-2019"` | No |
| shipFrom | [Address](#address) | Ship from Address. | No |
| shipTo | [Address](#address) | Ship to Address. | No |
| sourceAppName | string | Source App Name<br/>_Example:_ `"BOOKS"` | No |
| status | string | Quotation status<br/>_Enum:_ `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`<br/>_Example:_ `"OPEN"` | No |
| tenantId | long | Tenant id<br/>_Example:_ `123` | No |
| unitPriceGstInclusive | boolean | Unit Price is GST inclusive<br/>_Example:_ `true` | No |
| validTillDate | dateTime | Valid till date<br/>_Example:_ `"29-10-2019"` | No |
| warehouseCode | string | Warehouse Code<br/>_Example:_ `"WH-000001"` | No |

### QuotationDtoCanada

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalStatus | string | Approval status<br/>_Enum:_ `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>_Example:_ `"APPROVED"` | No |
| attachments | [ string ] | Attachments url's | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if backorder created<br/>_Example:_ `true` | No |
| billTo | [Address](#address) | Bill to Address. | No |
| contact | [ContactInfo](#contactinfo) | Contact info<br/>_Example:_ `"contact object"` | No |
| contactCode | string | Contact code<br/>_Example:_ `"C-0001"` | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| createdBy | long | UserId of creator<br/>_Example:_ `123` | No |
| currency | string | Currency code<br/>_Example:_ `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deleted | boolean | Quotation deleted<br/>_Example:_ `false` | No |
| documentDate | dateTime | Document date<br/>_Example:_ `"27-10-2019"` | No |
| documentSequenceCode | string | Quotation Code<br/>_Example:_ `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>_Example:_ `false` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | double | Exchange rate<br/>_Example:_ `0.01891562` | No |
| fulfillmentDate | dateTime | Fulfillment date<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentOn | dateTime | Fulfillment On<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentStatus | string | Fulfillment status<br/>_Enum:_ `"UNFULFILLED"`, `"PARTIAL_FULFILLED"`, `"FULLY_FULFILLED"`<br/>_Example:_ `"UNFULFILLED"` | No |
| fulfillmentType | string | Fulfillment type: NONE, DEFAULT, PICK_PACK_SHIP, DROP_SHIP<br/>_Enum:_`"NONE"`, `"DEFAULT"`, `"PICK_PACK_SHIP"`, `"DROP_SHIP"`<br/>_Example:_ `"PICK_PACK_SHIP"` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>_Example:_ `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedSalesInvoices | [ [LinkedSalesInvoiceResponse](#linkedsalesinvoiceresponse) ] |  | No |
| linkedSalesOrders | [ [LinkedSalesOrderResponse](#linkedsalesorderresponse) ] |  | No |
| memo | string | Memo text<br/>_Example:_ `"Sales quotation"` | No |
| processedInPPS | boolean |  | No |
| quotationItemDtoList | [ [QuotationItemDtoCanada](#quotationitemdtocanada) ] | Quotation items information | No |
| recurring | boolean | Is quotation set to recurring<br/>_Example:_ `false` | No |
| recurringActivated | boolean | Is quotation recurring active<br/>_Example:_ `false` | No |
| reservedStock | boolean | Reserved stock enabled<br/>_Example:_ `true` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>_Example:_ `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>_Example:_ `1` | No |
| shipByDate | dateTime | Ship by date<br/>_Example:_ `"25-10-2019"` | No |
| shipFrom | [Address](#address) | Ship from Address. | No |
| shipTo | [Address](#address) | Ship to Address. | No |
| sourceAppName | string | Source App Name<br/>_Example:_ `"BOOKS"` | No |
| status | string | Quotation status<br/>_Enum:_ `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`<br/>_Example:_ `"OPEN"` | No |
| tenantId | long | Tenant id<br/>_Example:_ `123` | No |
| unitPriceGstInclusive | boolean | Unit Price is GST inclusive<br/>_Example:_ `true` | No |
| validTillDate | dateTime | Valid till date<br/>_Example:_ `"29-10-2019"` | No |
| warehouseCode | string | Warehouse Code<br/>_Example:_ `"WH-000001"` | No |

### QuotationDtoDE

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalStatus | string | Approval status<br/>_Enum:_ `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>_Example:_ `"APPROVED"` | No |
| attachments | [ string ] | Attachments url's | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if backorder created<br/>_Example:_ `true` | No |
| billTo | [Address](#address) | Bill to Address. | No |
| contact | [ContactInfo](#contactinfo) | Contact info<br/>_Example:_ `"contact object"` | No |
| contactCode | string | Contact code<br/>_Example:_ `"C-0001"` | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| createdBy | long | UserId of creator<br/>_Example:_ `123` | No |
| currency | string | Currency code<br/>_Example:_ `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deleted | boolean | Quotation deleted<br/>_Example:_ `false` | No |
| documentDate | dateTime | Document date<br/>_Example:_ `"27-10-2019"` | No |
| documentSequenceCode | string | Quotation Code<br/>_Example:_ `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>_Example:_ `false` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | double | Exchange rate<br/>_Example:_ `0.01891562` | No |
| fulfillmentDate | dateTime | Fulfillment date<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentOn | dateTime | Fulfillment On<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentStatus | string | Fulfillment status<br/>_Enum:_ `"UNFULFILLED"`, `"PARTIAL_FULFILLED"`, `"FULLY_FULFILLED"`<br/>_Example:_ `"UNFULFILLED"` | No |
| fulfillmentType | string | Fulfillment type: NONE, DEFAULT, PICK_PACK_SHIP, DROP_SHIP<br/>_Enum:_`"NONE"`, `"DEFAULT"`, `"PICK_PACK_SHIP"`, `"DROP_SHIP"`<br/>_Example:_ `"PICK_PACK_SHIP"` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>_Example:_ `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedSalesInvoices | [ [LinkedSalesInvoiceResponse](#linkedsalesinvoiceresponse) ] |  | No |
| linkedSalesOrders | [ [LinkedSalesOrderResponse](#linkedsalesorderresponse) ] |  | No |
| memo | string | Memo text<br/>_Example:_ `"Sales quotation"` | No |
| processedInPPS | boolean |  | No |
| quotationItemDtoList | [ [QuotationItemDtoDE](#quotationitemdtode) ] | Quotation items information | No |
| recurring | boolean | Is quotation set to recurring<br/>_Example:_ `false` | No |
| recurringActivated | boolean | Is quotation recurring active<br/>_Example:_ `false` | No |
| reservedStock | boolean | Reserved stock enabled<br/>_Example:_ `true` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>_Example:_ `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>_Example:_ `1` | No |
| shipByDate | dateTime | Ship by date<br/>_Example:_ `"25-10-2019"` | No |
| shipFrom | [Address](#address) | Ship from Address. | No |
| shipTo | [Address](#address) | Ship to Address. | No |
| sourceAppName | string | Source App Name<br/>_Example:_ `"BOOKS"` | No |
| status | string | Quotation status<br/>_Enum:_ `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`<br/>_Example:_ `"OPEN"` | No |
| tenantId | long | Tenant id<br/>_Example:_ `123` | No |
| unitPriceGstInclusive | boolean | Unit Price is GST inclusive<br/>_Example:_ `true` | No |
| validTillDate | dateTime | Valid till date<br/>_Example:_ `"29-10-2019"` | No |
| warehouseCode | string | Warehouse Code<br/>_Example:_ `"WH-000001"` | No |

### QuotationDtoIndonesia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalStatus | string | Approval status<br/>_Enum:_ `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>_Example:_ `"APPROVED"` | No |
| attachments | [ string ] | Attachments url's | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if backorder created<br/>_Example:_ `true` | No |
| billTo | [Address](#address) | Bill to Address. | No |
| contact | [ContactInfo](#contactinfo) | Contact info<br/>_Example:_ `"contact object"` | No |
| contactCode | string | Contact code<br/>_Example:_ `"C-0001"` | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| createdBy | long | UserId of creator<br/>_Example:_ `123` | No |
| currency | string | Currency code<br/>_Example:_ `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deleted | boolean | Quotation deleted<br/>_Example:_ `false` | No |
| documentDate | dateTime | Document date<br/>_Example:_ `"27-10-2019"` | No |
| documentSequenceCode | string | Quotation Code<br/>_Example:_ `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>_Example:_ `false` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | double | Exchange rate<br/>_Example:_ `0.01891562` | No |
| fulfillmentDate | dateTime | Fulfillment date<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentOn | dateTime | Fulfillment On<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentStatus | string | Fulfillment status<br/>_Enum:_ `"UNFULFILLED"`, `"PARTIAL_FULFILLED"`, `"FULLY_FULFILLED"`<br/>_Example:_ `"UNFULFILLED"` | No |
| fulfillmentType | string | Fulfillment type: NONE, DEFAULT, PICK_PACK_SHIP, DROP_SHIP<br/>_Enum:_`"NONE"`, `"DEFAULT"`, `"PICK_PACK_SHIP"`, `"DROP_SHIP"`<br/>_Example:_ `"PICK_PACK_SHIP"` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>_Example:_ `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedSalesInvoices | [ [LinkedSalesInvoiceResponse](#linkedsalesinvoiceresponse) ] |  | No |
| linkedSalesOrders | [ [LinkedSalesOrderResponse](#linkedsalesorderresponse) ] |  | No |
| memo | string | Memo text<br/>_Example:_ `"Sales quotation"` | No |
| processedInPPS | boolean |  | No |
| quotationItemDtoList | [ [QuotationItemDtoIndonesia](#quotationitemdtoindonesia) ] | Quotation items information | No |
| recurring | boolean | Is quotation set to recurring<br/>_Example:_ `false` | No |
| recurringActivated | boolean | Is quotation recurring active<br/>_Example:_ `false` | No |
| reservedStock | boolean | Reserved stock enabled<br/>_Example:_ `true` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>_Example:_ `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>_Example:_ `1` | No |
| shipByDate | dateTime | Ship by date<br/>_Example:_ `"25-10-2019"` | No |
| shipFrom | [Address](#address) | Ship from Address. | No |
| shipTo | [Address](#address) | Ship to Address. | No |
| sourceAppName | string | Source App Name<br/>_Example:_ `"BOOKS"` | No |
| status | string | Quotation status<br/>_Enum:_ `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`<br/>_Example:_ `"OPEN"` | No |
| tenantId | long | Tenant id<br/>_Example:_ `123` | No |
| unitPriceGstInclusive | boolean | Unit Price is GST inclusive<br/>_Example:_ `true` | No |
| validTillDate | dateTime | Valid till date<br/>_Example:_ `"29-10-2019"` | No |
| warehouseCode | string | Warehouse Code<br/>_Example:_ `"WH-000001"` | No |

### QuotationDtoMalaysia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalStatus | string | Approval status<br/>_Enum:_ `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>_Example:_ `"APPROVED"` | No |
| attachments | [ string ] | Attachments url's | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if backorder created<br/>_Example:_ `true` | No |
| billTo | [Address](#address) | Bill to Address. | No |
| contact | [ContactInfo](#contactinfo) | Contact info<br/>_Example:_ `"contact object"` | No |
| contactCode | string | Contact code<br/>_Example:_ `"C-0001"` | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| createdBy | long | UserId of creator<br/>_Example:_ `123` | No |
| currency | string | Currency code<br/>_Example:_ `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deleted | boolean | Quotation deleted<br/>_Example:_ `false` | No |
| documentDate | dateTime | Document date<br/>_Example:_ `"27-10-2019"` | No |
| documentSequenceCode | string | Quotation Code<br/>_Example:_ `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>_Example:_ `false` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | double | Exchange rate<br/>_Example:_ `0.01891562` | No |
| fulfillmentDate | dateTime | Fulfillment date<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentOn | dateTime | Fulfillment On<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentStatus | string | Fulfillment status<br/>_Enum:_ `"UNFULFILLED"`, `"PARTIAL_FULFILLED"`, `"FULLY_FULFILLED"`<br/>_Example:_ `"UNFULFILLED"` | No |
| fulfillmentType | string | Fulfillment type: NONE, DEFAULT, PICK_PACK_SHIP, DROP_SHIP<br/>_Enum:_`"NONE"`, `"DEFAULT"`, `"PICK_PACK_SHIP"`, `"DROP_SHIP"`<br/>_Example:_ `"PICK_PACK_SHIP"` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>_Example:_ `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedSalesInvoices | [ [LinkedSalesInvoiceResponse](#linkedsalesinvoiceresponse) ] |  | No |
| linkedSalesOrders | [ [LinkedSalesOrderResponse](#linkedsalesorderresponse) ] |  | No |
| memo | string | Memo text<br/>_Example:_ `"Sales quotation"` | No |
| processedInPPS | boolean |  | No |
| quotationItemDtoList | [ [QuotationItemDtoMalaysia](#quotationitemdtomalaysia) ] | Quotation items information | No |
| recurring | boolean | Is quotation set to recurring<br/>_Example:_ `false` | No |
| recurringActivated | boolean | Is quotation recurring active<br/>_Example:_ `false` | No |
| reservedStock | boolean | Reserved stock enabled<br/>_Example:_ `true` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>_Example:_ `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>_Example:_ `1` | No |
| shipByDate | dateTime | Ship by date<br/>_Example:_ `"25-10-2019"` | No |
| shipFrom | [Address](#address) | Ship from Address. | No |
| shipTo | [Address](#address) | Ship to Address. | No |
| sourceAppName | string | Source App Name<br/>_Example:_ `"BOOKS"` | No |
| status | string | Quotation status<br/>_Enum:_ `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`<br/>_Example:_ `"OPEN"` | No |
| tenantId | long | Tenant id<br/>_Example:_ `123` | No |
| unitPriceGstInclusive | boolean | Unit Price is GST inclusive<br/>_Example:_ `true` | No |
| validTillDate | dateTime | Valid till date<br/>_Example:_ `"29-10-2019"` | No |
| warehouseCode | string | Warehouse Code<br/>_Example:_ `"WH-000001"` | No |

### QuotationDtoSaudiArabia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalStatus | string | Approval status<br/>_Enum:_ `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>_Example:_ `"APPROVED"` | No |
| attachments | [ string ] | Attachments url's | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if backorder created<br/>_Example:_ `true` | No |
| billTo | [Address](#address) | Bill to Address. | No |
| contact | [ContactInfo](#contactinfo) | Contact info<br/>_Example:_ `"contact object"` | No |
| contactCode | string | Contact code<br/>_Example:_ `"C-0001"` | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| createdBy | long | UserId of creator<br/>_Example:_ `123` | No |
| currency | string | Currency code<br/>_Example:_ `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deleted | boolean | Quotation deleted<br/>_Example:_ `false` | No |
| documentDate | dateTime | Document date<br/>_Example:_ `"27-10-2019"` | No |
| documentSequenceCode | string | Quotation Code<br/>_Example:_ `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>_Example:_ `false` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | double | Exchange rate<br/>_Example:_ `0.01891562` | No |
| fulfillmentDate | dateTime | Fulfillment date<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentOn | dateTime | Fulfillment On<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentStatus | string | Fulfillment status<br/>_Enum:_ `"UNFULFILLED"`, `"PARTIAL_FULFILLED"`, `"FULLY_FULFILLED"`<br/>_Example:_ `"UNFULFILLED"` | No |
| fulfillmentType | string | Fulfillment type: NONE, DEFAULT, PICK_PACK_SHIP, DROP_SHIP<br/>_Enum:_`"NONE"`, `"DEFAULT"`, `"PICK_PACK_SHIP"`, `"DROP_SHIP"`<br/>_Example:_ `"PICK_PACK_SHIP"` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>_Example:_ `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedSalesInvoices | [ [LinkedSalesInvoiceResponse](#linkedsalesinvoiceresponse) ] |  | No |
| linkedSalesOrders | [ [LinkedSalesOrderResponse](#linkedsalesorderresponse) ] |  | No |
| memo | string | Memo text<br/>_Example:_ `"Sales quotation"` | No |
| processedInPPS | boolean |  | No |
| quotationItemDtoList | [ [QuotationItemDtoSaudiArabia](#quotationitemdtosaudiarabia) ] | Quotation items information | No |
| recurring | boolean | Is quotation set to recurring<br/>_Example:_ `false` | No |
| recurringActivated | boolean | Is quotation recurring active<br/>_Example:_ `false` | No |
| reservedStock | boolean | Reserved stock enabled<br/>_Example:_ `true` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>_Example:_ `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>_Example:_ `1` | No |
| shipByDate | dateTime | Ship by date<br/>_Example:_ `"25-10-2019"` | No |
| shipFrom | [Address](#address) | Ship from Address. | No |
| shipTo | [Address](#address) | Ship to Address. | No |
| sourceAppName | string | Source App Name<br/>_Example:_ `"BOOKS"` | No |
| status | string | Quotation status<br/>_Enum:_ `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`<br/>_Example:_ `"OPEN"` | No |
| tenantId | long | Tenant id<br/>_Example:_ `123` | No |
| unitPriceGstInclusive | boolean | Unit Price is GST inclusive<br/>_Example:_ `true` | No |
| validTillDate | dateTime | Valid till date<br/>_Example:_ `"29-10-2019"` | No |
| warehouseCode | string | Warehouse Code<br/>_Example:_ `"WH-000001"` | No |

### QuotationDtoUAE

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalStatus | string | Approval status<br/>_Enum:_ `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>_Example:_ `"APPROVED"` | No |
| attachments | [ string ] | Attachments url's | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if backorder created<br/>_Example:_ `true` | No |
| billTo | [Address](#address) | Bill to Address. | No |
| contact | [ContactInfo](#contactinfo) | Contact info<br/>_Example:_ `"contact object"` | No |
| contactCode | string | Contact code<br/>_Example:_ `"C-0001"` | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| createdBy | long | UserId of creator<br/>_Example:_ `123` | No |
| currency | string | Currency code<br/>_Example:_ `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deleted | boolean | Quotation deleted<br/>_Example:_ `false` | No |
| documentDate | dateTime | Document date<br/>_Example:_ `"27-10-2019"` | No |
| documentSequenceCode | string | Quotation Code<br/>_Example:_ `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>_Example:_ `false` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | double | Exchange rate<br/>_Example:_ `0.01891562` | No |
| fulfillmentDate | dateTime | Fulfillment date<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentOn | dateTime | Fulfillment On<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentStatus | string | Fulfillment status<br/>_Enum:_ `"UNFULFILLED"`, `"PARTIAL_FULFILLED"`, `"FULLY_FULFILLED"`<br/>_Example:_ `"UNFULFILLED"` | No |
| fulfillmentType | string | Fulfillment type: NONE, DEFAULT, PICK_PACK_SHIP, DROP_SHIP<br/>_Enum:_`"NONE"`, `"DEFAULT"`, `"PICK_PACK_SHIP"`, `"DROP_SHIP"`<br/>_Example:_ `"PICK_PACK_SHIP"` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>_Example:_ `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedSalesInvoices | [ [LinkedSalesInvoiceResponse](#linkedsalesinvoiceresponse) ] |  | No |
| linkedSalesOrders | [ [LinkedSalesOrderResponse](#linkedsalesorderresponse) ] |  | No |
| memo | string | Memo text<br/>_Example:_ `"Sales quotation"` | No |
| processedInPPS | boolean |  | No |
| quotationItemDtoList | [ [QuotationItemDtoUAE](#quotationitemdtouae) ] | Quotation items information | No |
| recurring | boolean | Is quotation set to recurring<br/>_Example:_ `false` | No |
| recurringActivated | boolean | Is quotation recurring active<br/>_Example:_ `false` | No |
| reservedStock | boolean | Reserved stock enabled<br/>_Example:_ `true` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>_Example:_ `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>_Example:_ `1` | No |
| shipByDate | dateTime | Ship by date<br/>_Example:_ `"25-10-2019"` | No |
| shipFrom | [Address](#address) | Ship from Address. | No |
| shipTo | [Address](#address) | Ship to Address. | No |
| sourceAppName | string | Source App Name<br/>_Example:_ `"BOOKS"` | No |
| status | string | Quotation status<br/>_Enum:_ `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`<br/>_Example:_ `"OPEN"` | No |
| tenantId | long | Tenant id<br/>_Example:_ `123` | No |
| unitPriceGstInclusive | boolean | Unit Price is GST inclusive<br/>_Example:_ `true` | No |
| validTillDate | dateTime | Valid till date<br/>_Example:_ `"29-10-2019"` | No |
| warehouseCode | string | Warehouse Code<br/>_Example:_ `"WH-000001"` | No |

### QuotationDtoUk

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalStatus | string | Approval status<br/>_Enum:_ `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>_Example:_ `"APPROVED"` | No |
| attachments | [ string ] | Attachments url's | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if backorder created<br/>_Example:_ `true` | No |
| billTo | [Address](#address) | Bill to Address. | No |
| contact | [ContactInfo](#contactinfo) | Contact info<br/>_Example:_ `"contact object"` | No |
| contactCode | string | Contact code<br/>_Example:_ `"C-0001"` | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| createdBy | long | UserId of creator<br/>_Example:_ `123` | No |
| currency | string | Currency code<br/>_Example:_ `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deleted | boolean | Quotation deleted<br/>_Example:_ `false` | No |
| documentDate | dateTime | Document date<br/>_Example:_ `"27-10-2019"` | No |
| documentSequenceCode | string | Quotation Code<br/>_Example:_ `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>_Example:_ `false` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | double | Exchange rate<br/>_Example:_ `0.01891562` | No |
| fulfillmentDate | dateTime | Fulfillment date<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentOn | dateTime | Fulfillment On<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentStatus | string | Fulfillment status<br/>_Enum:_ `"UNFULFILLED"`, `"PARTIAL_FULFILLED"`, `"FULLY_FULFILLED"`<br/>_Example:_ `"UNFULFILLED"` | No |
| fulfillmentType | string | Fulfillment type: NONE, DEFAULT, PICK_PACK_SHIP, DROP_SHIP<br/>_Enum:_`"NONE"`, `"DEFAULT"`, `"PICK_PACK_SHIP"`, `"DROP_SHIP"`<br/>_Example:_ `"PICK_PACK_SHIP"` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>_Example:_ `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedSalesInvoices | [ [LinkedSalesInvoiceResponse](#linkedsalesinvoiceresponse) ] |  | No |
| linkedSalesOrders | [ [LinkedSalesOrderResponse](#linkedsalesorderresponse) ] |  | No |
| memo | string | Memo text<br/>_Example:_ `"Sales quotation"` | No |
| processedInPPS | boolean |  | No |
| quotationItemDtoList | [ [QuotationItemDtoUk](#quotationitemdtouk) ] | Quotation items information | No |
| recurring | boolean | Is quotation set to recurring<br/>_Example:_ `false` | No |
| recurringActivated | boolean | Is quotation recurring active<br/>_Example:_ `false` | No |
| reservedStock | boolean | Reserved stock enabled<br/>_Example:_ `true` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>_Example:_ `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>_Example:_ `1` | No |
| shipByDate | dateTime | Ship by date<br/>_Example:_ `"25-10-2019"` | No |
| shipFrom | [Address](#address) | Ship from Address. | No |
| shipTo | [Address](#address) | Ship to Address. | No |
| sourceAppName | string | Source App Name<br/>_Example:_ `"BOOKS"` | No |
| status | string | Quotation status<br/>_Enum:_ `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`<br/>_Example:_ `"OPEN"` | No |
| tenantId | long | Tenant id<br/>_Example:_ `123` | No |
| unitPriceGstInclusive | boolean | Unit Price is GST inclusive<br/>_Example:_ `true` | No |
| validTillDate | dateTime | Valid till date<br/>_Example:_ `"29-10-2019"` | No |
| warehouseCode | string | Warehouse Code<br/>_Example:_ `"WH-000001"` | No |

### QuotationIndiaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) |  | No |
| approvalStatus | string | Approval status<br/>_Enum:_ `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>_Example:_ `"APPROVED"` | No |
| attachments | [ string ] | Attachments url's | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if backorder created<br/>_Example:_ `true` | No |
| billTo | [Address](#address) | Bill to Address. | No |
| contact | [ContactInfo](#contactinfo) | Contact info<br/>_Example:_ `"contact object"` | No |
| contactCode | string | Contact code<br/>_Example:_ `"C-0001"` | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| createdBy | long | UserId of creator<br/>_Example:_ `123` | No |
| currency | string | Currency code<br/>_Example:_ `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerType | string | Customer Type<br/>_Enum:_ `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>_Example:_ `"NA"` | Yes |
| deleted | boolean | Quotation deleted<br/>_Example:_ `false` | No |
| documentDate | dateTime | Document date<br/>_Example:_ `"27-10-2019"` | No |
| documentSequenceCode | string | Quotation Code<br/>_Example:_ `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>_Example:_ `false` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | double | Exchange rate<br/>_Example:_ `0.01891562` | No |
| fulfillmentDate | dateTime | Fulfillment date<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentOn | dateTime | Fulfillment On<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentStatus | string | Fulfillment status<br/>_Enum:_ `"UNFULFILLED"`, `"PARTIAL_FULFILLED"`, `"FULLY_FULFILLED"`<br/>_Example:_ `"UNFULFILLED"` | No |
| fulfillmentType | string | Fulfillment type: NONE, DEFAULT, PICK_PACK_SHIP, DROP_SHIP<br/>_Enum:_`"NONE"`, `"DEFAULT"`, `"PICK_PACK_SHIP"`, `"DROP_SHIP"`<br/>_Example:_ `"PICK_PACK_SHIP"` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>_Example:_ `1` | No |
| gstTreatment | string | GST Treatment<br/>_Enum:_ `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>_Example:_ `"REGISTERED_BUSINESS_REGULAR"` | Yes |
| gstin | string | Indian state from where the good/service is shipped<br/>_Example:_ `"22AAAAAA00000AA21"` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedSalesInvoices | [ [LinkedSalesInvoiceResponse](#linkedsalesinvoiceresponse) ] |  | No |
| linkedSalesOrders | [ [LinkedSalesOrderResponse](#linkedsalesorderresponse) ] |  | No |
| memo | string | Memo text<br/>_Example:_ `"Sales quotation"` | No |
| placeOfSupply | string | Indian state from where the good/service is shipped<br/>_Example:_ `"Delhi"` | No |
| processedInPPS | boolean |  | No |
| quotationItemDtoList | [ [QuotationItemIndiaDto](#quotationitemindiadto) ] | Quotation items information | No |
| recurring | boolean | Is quotation set to recurring<br/>_Example:_ `false` | No |
| recurringActivated | boolean | Is quotation recurring active<br/>_Example:_ `false` | No |
| reservedStock | boolean | Reserved stock enabled<br/>_Example:_ `true` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>_Example:_ `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>_Example:_ `1` | No |
| shipByDate | dateTime | Ship by date<br/>_Example:_ `"25-10-2019"` | No |
| shipFrom | [Address](#address) | Ship from Address. | No |
| shipTo | [Address](#address) | Ship to Address. | No |
| sourceAppName | string | Source App Name<br/>_Example:_ `"BOOKS"` | No |
| status | string | Quotation status<br/>_Enum:_ `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`<br/>_Example:_ `"OPEN"` | No |
| tcsAmount | number |  | No |
| tcsAmountInBaseCurrency | number |  | No |
| tcsPercentage | number |  | No |
| tcsRateId | long |  | No |
| tenantId | long | Tenant id<br/>_Example:_ `123` | No |
| unitPriceGstInclusive | boolean | Unit Price is GST inclusive<br/>_Example:_ `true` | No |
| validTillDate | dateTime | Valid till date<br/>_Example:_ `"29-10-2019"` | No |
| vendorType | string | Vendor Type<br/>_Enum:_ `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>_Example:_ `"NA"` | Yes |
| warehouseCode | string | Warehouse Code<br/>_Example:_ `"WH-000001"` | No |

### QuotationInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalCharges | [AdditionalCharges](#additionalcharges) | Purchase invoice additional charges details | No |
| attachments | [ string ] | Attachments url's | No |
| backOrder | boolean | Backorder flag to indicate if backorder created<br/>_Example:_ `true` | No |
| billTo | [Address](#address) | Bill to Address. | No |
| contact | [ContactInfo](#contactinfo) | Contact info<br/>_Example:_ `"contact object"` | No |
| contactCode | string | Contact code<br/>_Example:_ `"C-0001"` | Yes |
| contactDto | [ContactInformation](#contactinformation) | Contact Details | Yes |
| currency | string | Currency code<br/>_Example:_ `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customerType | string | Customer Type<br/>_Enum:_ `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>_Example:_ `"NA"` | Yes |
| deleted | boolean | Quotation deleted<br/>_Example:_ `false` | No |
| documentDate | string | Document date<br/>_Example:_ `"27-10-2019"` | No |
| documentSequenceCode | string | Quotation Code<br/>_Example:_ `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>_Example:_ `false` | No |
| exchangeRate | double | Exchange rate<br/>_Example:_ `0.01891562` | No |
| fulfillmentDate | string | Fulfillment date<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentOn | string | Fulfillment On<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentStatus | string | Fulfillment status<br/>_Enum:_ `"UNFULFILLED"`, `"PARTIAL_FULFILLED"`, `"FULLY_FULFILLED"`<br/>_Example:_ `"UNFULFILLED"` | No |
| fulfillmentType | string | Fulfillment type: NONE, DEFAULT, PICK_PACK_SHIP, DROP_SHIP<br/>_Enum:_`"NONE"`, `"DEFAULT"`, `"PICK_PACK_SHIP"`, `"DROP_SHIP"`<br/>_Example:_ `"PICK_PACK_SHIP"` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>_Example:_ `1` | No |
| gstin | string | Indian state from where the good/service is shipped<br/>_Example:_ `"22AAAAAA00000AA21"` | No |
| hasPartialInvoice | boolean | Has Partial Invoice linked to quotation<br/>_Example:_ `false` | Yes |
| hasPartialSalesOrder | boolean | Has Partial Sales Order linked to quotation<br/>_Example:_ `false` | Yes |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedSalesInvoices | [ [LinkedSalesInvoiceResponse](#linkedsalesinvoiceresponse) ] | List of Linked Sales Invoices | No |
| linkedSalesOrders | [ [LinkedSalesOrderResponse](#linkedsalesorderresponse) ] | List of Linked Sales Invoices | No |
| memo | string | Memo text<br/>_Example:_ `"Sales quotation"` | No |
| placeOfSupply | string | Indian state from where the good/service is shipped<br/>_Example:_ `"Delhi"` | No |
| processedInPPS | boolean |  | No |
| quotationItemDtoList | [ [QuotationItemInformation](#quotationiteminformation) ] | Quotation items information | No |
| recurring | boolean | Is quotation set to recurring<br/>_Example:_ `false` | No |
| recurringActivated | boolean | Is quotation recurring active<br/>_Example:_ `false` | No |
| reservedStock | boolean | Is quotation has reserved quantity<br/>_Example:_ `false` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>_Example:_ `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>_Example:_ `1` | No |
| shipByDate | string | Ship by date<br/>_Example:_ `"25-10-2019"` | No |
| shipFrom | [Address](#address) | Ship from Address. | No |
| shipTo | [Address](#address) | Ship to Address. | No |
| status | string | Quotation status<br/>_Enum:_ `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`<br/>_Example:_ `"OPEN"` | No |
| tcsAmount | number |  | No |
| tcsAmountInBaseCurrency | number |  | No |
| tcsPercentage | number |  | No |
| tcsRateId | long |  | No |
| tenantId | long | Tenant id<br/>_Example:_ `123` | No |
| unitPriceGstInclusive | boolean | Unit Price is GST inclusive<br/>_Example:_ `true` | No |
| validTillDate | string | Valid till date<br/>_Example:_ `"29-10-2019"` | No |
| vendorType | string | Vendor Type<br/>_Enum:_ `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>_Example:_ `"NA"` | Yes |
| warehouseCode | string | Warehouse Code<br/>_Example:_ `"WH-000001"` | No |

### QuotationIsraelDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalStatus | string | Approval status<br/>_Enum:_ `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>_Example:_ `"APPROVED"` | No |
| attachments | [ string ] | Attachments url's | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if backorder created<br/>_Example:_ `true` | No |
| billTo | [Address](#address) | Bill to Address. | No |
| contact | [ContactInfo](#contactinfo) | Contact info<br/>_Example:_ `"contact object"` | No |
| contactCode | string | Contact code<br/>_Example:_ `"C-0001"` | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| createdBy | long | UserId of creator<br/>_Example:_ `123` | No |
| currency | string | Currency code<br/>_Example:_ `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deleted | boolean | Quotation deleted<br/>_Example:_ `false` | No |
| documentDate | dateTime | Document date<br/>_Example:_ `"27-10-2019"` | No |
| documentSequenceCode | string | Quotation Code<br/>_Example:_ `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>_Example:_ `false` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | double | Exchange rate<br/>_Example:_ `0.01891562` | No |
| fulfillmentDate | dateTime | Fulfillment date<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentOn | dateTime | Fulfillment On<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentStatus | string | Fulfillment status<br/>_Enum:_ `"UNFULFILLED"`, `"PARTIAL_FULFILLED"`, `"FULLY_FULFILLED"`<br/>_Example:_ `"UNFULFILLED"` | No |
| fulfillmentType | string | Fulfillment type: NONE, DEFAULT, PICK_PACK_SHIP, DROP_SHIP<br/>_Enum:_`"NONE"`, `"DEFAULT"`, `"PICK_PACK_SHIP"`, `"DROP_SHIP"`<br/>_Example:_ `"PICK_PACK_SHIP"` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>_Example:_ `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedSalesInvoices | [ [LinkedSalesInvoiceResponse](#linkedsalesinvoiceresponse) ] |  | No |
| linkedSalesOrders | [ [LinkedSalesOrderResponse](#linkedsalesorderresponse) ] |  | No |
| memo | string | Memo text<br/>_Example:_ `"Sales quotation"` | No |
| processedInPPS | boolean |  | No |
| quotationItemDtoList | [ [QuotationItemIsraelDto](#quotationitemisraeldto) ] | Quotation items information | No |
| recurring | boolean | Is quotation set to recurring<br/>_Example:_ `false` | No |
| recurringActivated | boolean | Is quotation recurring active<br/>_Example:_ `false` | No |
| reservedStock | boolean | Reserved stock enabled<br/>_Example:_ `true` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>_Example:_ `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>_Example:_ `1` | No |
| shipByDate | dateTime | Ship by date<br/>_Example:_ `"25-10-2019"` | No |
| shipFrom | [Address](#address) | Ship from Address. | No |
| shipTo | [Address](#address) | Ship to Address. | No |
| sourceAppName | string | Source App Name<br/>_Example:_ `"BOOKS"` | No |
| status | string | Quotation status<br/>_Enum:_ `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`<br/>_Example:_ `"OPEN"` | No |
| tenantId | long | Tenant id<br/>_Example:_ `123` | No |
| unitPriceGstInclusive | boolean | Unit Price is GST inclusive<br/>_Example:_ `true` | No |
| validTillDate | dateTime | Valid till date<br/>_Example:_ `"29-10-2019"` | No |
| warehouseCode | string | Warehouse Code<br/>_Example:_ `"WH-000001"` | No |

### QuotationItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingType | string | Advanced Tracking Type<br/>_Enum:_ `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| allocationType | string | Allocation Type<br/>_Example:_ `"NORMAL"` | No |
| availableQuantity | number | Total available quantity<br/>_Example:_ `3` | No |
| basePrice | number | Revenue Base price<br/>_Example:_ `120` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Product discount<br/>_Example:_ `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>_Example:_ `true` | No |
| documentSequenceCode | string | Product Document Sequence Code<br/>_Example:_ `"P-0000001"` | Yes |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>_Example:_ `2` | Yes |
| documentUom | long | Document UOM id<br/>_Example:_ `2` | Yes |
| fulfilledQuantity | number | Total Fulfilled Quantity<br/>_Example:_ `3` | No |
| fulfilledQuantityByFlowover | number | Total Fulfilled Quantity By Flowover<br/>_Example:_ `3` | No |
| fulfilledQuantityByUser | number | Total Fulfilled Quantity By User<br/>_Example:_ `3` | No |
| fulfilledQuantityInvoiced | number | Total Fulfilled Quantity Invoiced<br/>_Example:_ `3` | No |
| fulfillmentByDoc | [ [ItemQtyFulfilledByDoc](#itemqtyfulfilledbydoc) ] | Item Qty fulfilled by Fulfillment Doc<br/>_Example:_ `[]` | No |
| lineNumber | integer | Line Number<br/>_Example:_ `1` | No |
| otherRate | number | Tax Rate<br/>_Example:_ `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>_Example:_ `10` | No |
| pendingQuantity | number | Pending Quantity<br/>_Example:_ `3` | No |
| product | [ProductResponse](#productresponse) | Product Short Info<br/>_Example:_ `"product"` | No |
| productCode | string | Product code<br/>_Example:_ `"PC-001"` | Yes |
| productDescription | string | Product description<br/>_Example:_ `"Red pen"` | No |
| productName | string | Product name<br/>_Example:_ `"Ball pen"` | No |
| productOrder | integer | Product order<br/>_Example:_ `1` | No |
| productQuantity | number | Product quantity<br/>_Example:_ `2.5` | Yes |
| reservedQuantitiesData | [ [ReservedQuantityData](#reservedquantitydata) ] | Reserved quantity data<br/>_Example:_ `[]` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>_Example:_ `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>_Example:_ `0.3` | No |
| taxCode | string | Tax code<br/>_Example:_ `"TX-003"` | No |
| taxName | string | Tax name<br/>_Example:_ `"GST(7%)"` | No |
| type | string | Product type<br/>_Enum:_ `"TRACKED"`, `"NONTRACKED"`<br/>_Example:_ `"TRACKED"` | Yes |
| unitPrice | number | Product price<br/>_Example:_ `10` | No |
| uomQuantity | number | uom quantity<br/>_Example:_ `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>_Example:_ `2.3` | Yes |

### QuotationItemDtoAustralia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingType | string | Advanced Tracking Type<br/>_Enum:_ `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| allocationType | string | Allocation Type<br/>_Example:_ `"NORMAL"` | No |
| availableQuantity | number | Total available quantity<br/>_Example:_ `3` | No |
| basePrice | number | Revenue Base price<br/>_Example:_ `120` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Product discount<br/>_Example:_ `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>_Example:_ `true` | No |
| documentSequenceCode | string | Product Document Sequence Code<br/>_Example:_ `"P-0000001"` | Yes |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>_Example:_ `2` | Yes |
| documentUom | long | Document UOM id<br/>_Example:_ `2` | Yes |
| fulfilledQuantity | number | Total Fulfilled Quantity<br/>_Example:_ `3` | No |
| fulfilledQuantityByFlowover | number | Total Fulfilled Quantity By Flowover<br/>_Example:_ `3` | No |
| fulfilledQuantityByUser | number | Total Fulfilled Quantity By User<br/>_Example:_ `3` | No |
| fulfilledQuantityInvoiced | number | Total Fulfilled Quantity Invoiced<br/>_Example:_ `3` | No |
| fulfillmentByDoc | [ [ItemQtyFulfilledByDoc](#itemqtyfulfilledbydoc) ] | Item Qty fulfilled by Fulfillment Doc<br/>_Example:_ `[]` | No |
| lineNumber | integer | Line Number<br/>_Example:_ `1` | No |
| otherRate | number | Tax Rate<br/>_Example:_ `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>_Example:_ `10` | No |
| pendingQuantity | number | Pending Quantity<br/>_Example:_ `3` | No |
| product | [ProductResponse](#productresponse) | Product Short Info<br/>_Example:_ `"product"` | No |
| productCode | string | Product code<br/>_Example:_ `"PC-001"` | Yes |
| productDescription | string | Product description<br/>_Example:_ `"Red pen"` | No |
| productName | string | Product name<br/>_Example:_ `"Ball pen"` | No |
| productOrder | integer | Product order<br/>_Example:_ `1` | No |
| productQuantity | number | Product quantity<br/>_Example:_ `2.5` | Yes |
| reservedQuantitiesData | [ [ReservedQuantityData](#reservedquantitydata) ] | Reserved quantity data<br/>_Example:_ `[]` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>_Example:_ `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>_Example:_ `0.3` | No |
| taxCode | string | Tax code<br/>_Example:_ `"TX-003"` | No |
| taxName | string | Tax name<br/>_Example:_ `"GST(7%)"` | No |
| type | string | Product type<br/>_Enum:_ `"TRACKED"`, `"NONTRACKED"`<br/>_Example:_ `"TRACKED"` | Yes |
| unitPrice | number | Product price<br/>_Example:_ `10` | No |
| uomQuantity | number | uom quantity<br/>_Example:_ `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>_Example:_ `2.3` | Yes |

### QuotationItemDtoCanada

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingType | string | Advanced Tracking Type<br/>_Enum:_ `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| allocationType | string | Allocation Type<br/>_Example:_ `"NORMAL"` | No |
| availableQuantity | number | Total available quantity<br/>_Example:_ `3` | No |
| basePrice | number | Revenue Base price<br/>_Example:_ `120` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Product discount<br/>_Example:_ `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>_Example:_ `true` | No |
| documentSequenceCode | string | Product Document Sequence Code<br/>_Example:_ `"P-0000001"` | Yes |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>_Example:_ `2` | Yes |
| documentUom | long | Document UOM id<br/>_Example:_ `2` | Yes |
| fulfilledQuantity | number | Total Fulfilled Quantity<br/>_Example:_ `3` | No |
| fulfilledQuantityByFlowover | number | Total Fulfilled Quantity By Flowover<br/>_Example:_ `3` | No |
| fulfilledQuantityByUser | number | Total Fulfilled Quantity By User<br/>_Example:_ `3` | No |
| fulfilledQuantityInvoiced | number | Total Fulfilled Quantity Invoiced<br/>_Example:_ `3` | No |
| fulfillmentByDoc | [ [ItemQtyFulfilledByDoc](#itemqtyfulfilledbydoc) ] | Item Qty fulfilled by Fulfillment Doc<br/>_Example:_ `[]` | No |
| lineNumber | integer | Line Number<br/>_Example:_ `1` | No |
| otherRate | number | Tax Rate<br/>_Example:_ `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>_Example:_ `10` | No |
| pendingQuantity | number | Pending Quantity<br/>_Example:_ `3` | No |
| product | [ProductResponse](#productresponse) | Product Short Info<br/>_Example:_ `"product"` | No |
| productCode | string | Product code<br/>_Example:_ `"PC-001"` | Yes |
| productDescription | string | Product description<br/>_Example:_ `"Red pen"` | No |
| productName | string | Product name<br/>_Example:_ `"Ball pen"` | No |
| productOrder | integer | Product order<br/>_Example:_ `1` | No |
| productQuantity | number | Product quantity<br/>_Example:_ `2.5` | Yes |
| reservedQuantitiesData | [ [ReservedQuantityData](#reservedquantitydata) ] | Reserved quantity data<br/>_Example:_ `[]` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>_Example:_ `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>_Example:_ `0.3` | No |
| taxCode | string | Tax code<br/>_Example:_ `"TX-003"` | No |
| taxName | string | Tax name<br/>_Example:_ `"GST(7%)"` | No |
| type | string | Product type<br/>_Enum:_ `"TRACKED"`, `"NONTRACKED"`<br/>_Example:_ `"TRACKED"` | Yes |
| unitPrice | number | Product price<br/>_Example:_ `10` | No |
| uomQuantity | number | uom quantity<br/>_Example:_ `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>_Example:_ `2.3` | Yes |

### QuotationItemDtoDE

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingType | string | Advanced Tracking Type<br/>_Enum:_ `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| allocationType | string | Allocation Type<br/>_Example:_ `"NORMAL"` | No |
| availableQuantity | number | Total available quantity<br/>_Example:_ `3` | No |
| basePrice | number | Revenue Base price<br/>_Example:_ `120` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Product discount<br/>_Example:_ `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>_Example:_ `true` | No |
| documentSequenceCode | string | Product Document Sequence Code<br/>_Example:_ `"P-0000001"` | Yes |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>_Example:_ `2` | Yes |
| documentUom | long | Document UOM id<br/>_Example:_ `2` | Yes |
| fulfilledQuantity | number | Total Fulfilled Quantity<br/>_Example:_ `3` | No |
| fulfilledQuantityByFlowover | number | Total Fulfilled Quantity By Flowover<br/>_Example:_ `3` | No |
| fulfilledQuantityByUser | number | Total Fulfilled Quantity By User<br/>_Example:_ `3` | No |
| fulfilledQuantityInvoiced | number | Total Fulfilled Quantity Invoiced<br/>_Example:_ `3` | No |
| fulfillmentByDoc | [ [ItemQtyFulfilledByDoc](#itemqtyfulfilledbydoc) ] | Item Qty fulfilled by Fulfillment Doc<br/>_Example:_ `[]` | No |
| lineNumber | integer | Line Number<br/>_Example:_ `1` | No |
| otherRate | number | Tax Rate<br/>_Example:_ `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>_Example:_ `10` | No |
| pendingQuantity | number | Pending Quantity<br/>_Example:_ `3` | No |
| product | [ProductResponse](#productresponse) | Product Short Info<br/>_Example:_ `"product"` | No |
| productCode | string | Product code<br/>_Example:_ `"PC-001"` | Yes |
| productDescription | string | Product description<br/>_Example:_ `"Red pen"` | No |
| productName | string | Product name<br/>_Example:_ `"Ball pen"` | No |
| productOrder | integer | Product order<br/>_Example:_ `1` | No |
| productQuantity | number | Product quantity<br/>_Example:_ `2.5` | Yes |
| reservedQuantitiesData | [ [ReservedQuantityData](#reservedquantitydata) ] | Reserved quantity data<br/>_Example:_ `[]` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>_Example:_ `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>_Example:_ `0.3` | No |
| taxCode | string | Tax code<br/>_Example:_ `"TX-003"` | No |
| taxName | string | Tax name<br/>_Example:_ `"GST(7%)"` | No |
| type | string | Product type<br/>_Enum:_ `"TRACKED"`, `"NONTRACKED"`<br/>_Example:_ `"TRACKED"` | Yes |
| unitPrice | number | Product price<br/>_Example:_ `10` | No |
| uomQuantity | number | uom quantity<br/>_Example:_ `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>_Example:_ `2.3` | Yes |

### QuotationItemDtoIndonesia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingType | string | Advanced Tracking Type<br/>_Enum:_ `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| allocationType | string | Allocation Type<br/>_Example:_ `"NORMAL"` | No |
| availableQuantity | number | Total available quantity<br/>_Example:_ `3` | No |
| basePrice | number | Revenue Base price<br/>_Example:_ `120` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Product discount<br/>_Example:_ `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>_Example:_ `true` | No |
| documentSequenceCode | string | Product Document Sequence Code<br/>_Example:_ `"P-0000001"` | Yes |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>_Example:_ `2` | Yes |
| documentUom | long | Document UOM id<br/>_Example:_ `2` | Yes |
| exciseAmount | number | Excise amount on product<br/>_Example:_ `0.5` | No |
| exciseRate | number | Rate of Excise<br/>_Example:_ `5` | No |
| exciseType | string | Excise type<br/>_Enum:_ `"PERCENT"`, `"FLAT"`<br/>_Example:_ `"FLAT"` | No |
| fulfilledQuantity | number | Total Fulfilled Quantity<br/>_Example:_ `3` | No |
| fulfilledQuantityByFlowover | number | Total Fulfilled Quantity By Flowover<br/>_Example:_ `3` | No |
| fulfilledQuantityByUser | number | Total Fulfilled Quantity By User<br/>_Example:_ `3` | No |
| fulfilledQuantityInvoiced | number | Total Fulfilled Quantity Invoiced<br/>_Example:_ `3` | No |
| fulfillmentByDoc | [ [ItemQtyFulfilledByDoc](#itemqtyfulfilledbydoc) ] | Item Qty fulfilled by Fulfillment Doc<br/>_Example:_ `[]` | No |
| lineNumber | integer | Line Number<br/>_Example:_ `1` | No |
| otherRate | number | Tax Rate<br/>_Example:_ `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>_Example:_ `10` | No |
| pendingQuantity | number | Pending Quantity<br/>_Example:_ `3` | No |
| product | [ProductResponse](#productresponse) | Product Short Info<br/>_Example:_ `"product"` | No |
| productCode | string | Product code<br/>_Example:_ `"PC-001"` | Yes |
| productDescription | string | Product description<br/>_Example:_ `"Red pen"` | No |
| productName | string | Product name<br/>_Example:_ `"Ball pen"` | No |
| productOrder | integer | Product order<br/>_Example:_ `1` | No |
| productQuantity | number | Product quantity<br/>_Example:_ `2.5` | Yes |
| reservedQuantitiesData | [ [ReservedQuantityData](#reservedquantitydata) ] | Reserved quantity data<br/>_Example:_ `[]` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>_Example:_ `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>_Example:_ `0.3` | No |
| taxCode | string | Tax code<br/>_Example:_ `"TX-003"` | No |
| taxName | string | Tax name<br/>_Example:_ `"GST(7%)"` | No |
| type | string | Product type<br/>_Enum:_ `"TRACKED"`, `"NONTRACKED"`<br/>_Example:_ `"TRACKED"` | Yes |
| unitPrice | number | Product price<br/>_Example:_ `10` | No |
| uomQuantity | number | uom quantity<br/>_Example:_ `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>_Example:_ `2.3` | Yes |

### QuotationItemDtoMalaysia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingType | string | Advanced Tracking Type<br/>_Enum:_ `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| allocationType | string | Allocation Type<br/>_Example:_ `"NORMAL"` | No |
| availableQuantity | number | Total available quantity<br/>_Example:_ `3` | No |
| basePrice | number | Revenue Base price<br/>_Example:_ `120` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Product discount<br/>_Example:_ `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>_Example:_ `true` | No |
| documentSequenceCode | string | Product Document Sequence Code<br/>_Example:_ `"P-0000001"` | Yes |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>_Example:_ `2` | Yes |
| documentUom | long | Document UOM id<br/>_Example:_ `2` | Yes |
| fulfilledQuantity | number | Total Fulfilled Quantity<br/>_Example:_ `3` | No |
| fulfilledQuantityByFlowover | number | Total Fulfilled Quantity By Flowover<br/>_Example:_ `3` | No |
| fulfilledQuantityByUser | number | Total Fulfilled Quantity By User<br/>_Example:_ `3` | No |
| fulfilledQuantityInvoiced | number | Total Fulfilled Quantity Invoiced<br/>_Example:_ `3` | No |
| fulfillmentByDoc | [ [ItemQtyFulfilledByDoc](#itemqtyfulfilledbydoc) ] | Item Qty fulfilled by Fulfillment Doc<br/>_Example:_ `[]` | No |
| lineNumber | integer | Line Number<br/>_Example:_ `1` | No |
| otherRate | number | Tax Rate<br/>_Example:_ `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>_Example:_ `10` | No |
| pendingQuantity | number | Pending Quantity<br/>_Example:_ `3` | No |
| product | [ProductResponse](#productresponse) | Product Short Info<br/>_Example:_ `"product"` | No |
| productCode | string | Product code<br/>_Example:_ `"PC-001"` | Yes |
| productDescription | string | Product description<br/>_Example:_ `"Red pen"` | No |
| productName | string | Product name<br/>_Example:_ `"Ball pen"` | No |
| productOrder | integer | Product order<br/>_Example:_ `1` | No |
| productQuantity | number | Product quantity<br/>_Example:_ `2.5` | Yes |
| reservedQuantitiesData | [ [ReservedQuantityData](#reservedquantitydata) ] | Reserved quantity data<br/>_Example:_ `[]` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>_Example:_ `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>_Example:_ `0.3` | No |
| taxCode | string | Tax code<br/>_Example:_ `"TX-003"` | No |
| taxName | string | Tax name<br/>_Example:_ `"GST(7%)"` | No |
| type | string | Product type<br/>_Enum:_ `"TRACKED"`, `"NONTRACKED"`<br/>_Example:_ `"TRACKED"` | Yes |
| unitPrice | number | Product price<br/>_Example:_ `10` | No |
| uomQuantity | number | uom quantity<br/>_Example:_ `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>_Example:_ `2.3` | Yes |

### QuotationItemDtoSaudiArabia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingType | string | Advanced Tracking Type<br/>_Enum:_ `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| allocationType | string | Allocation Type<br/>_Example:_ `"NORMAL"` | No |
| availableQuantity | number | Total available quantity<br/>_Example:_ `3` | No |
| basePrice | number | Revenue Base price<br/>_Example:_ `120` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Product discount<br/>_Example:_ `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>_Example:_ `true` | No |
| documentSequenceCode | string | Product Document Sequence Code<br/>_Example:_ `"P-0000001"` | Yes |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>_Example:_ `2` | Yes |
| documentUom | long | Document UOM id<br/>_Example:_ `2` | Yes |
| exciseAmount | number | Excise amount on product<br/>_Example:_ `0.5` | No |
| exciseRate | number | Rate of Excise<br/>_Example:_ `5` | No |
| exciseType | string | Excise type<br/>_Enum:_ `"PERCENT"`, `"FLAT"`<br/>_Example:_ `"FLAT"` | No |
| fulfilledQuantity | number | Total Fulfilled Quantity<br/>_Example:_ `3` | No |
| fulfilledQuantityByFlowover | number | Total Fulfilled Quantity By Flowover<br/>_Example:_ `3` | No |
| fulfilledQuantityByUser | number | Total Fulfilled Quantity By User<br/>_Example:_ `3` | No |
| fulfilledQuantityInvoiced | number | Total Fulfilled Quantity Invoiced<br/>_Example:_ `3` | No |
| fulfillmentByDoc | [ [ItemQtyFulfilledByDoc](#itemqtyfulfilledbydoc) ] | Item Qty fulfilled by Fulfillment Doc<br/>_Example:_ `[]` | No |
| lineNumber | integer | Line Number<br/>_Example:_ `1` | No |
| otherRate | number | Tax Rate<br/>_Example:_ `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>_Example:_ `10` | No |
| pendingQuantity | number | Pending Quantity<br/>_Example:_ `3` | No |
| product | [ProductResponse](#productresponse) | Product Short Info<br/>_Example:_ `"product"` | No |
| productCode | string | Product code<br/>_Example:_ `"PC-001"` | Yes |
| productDescription | string | Product description<br/>_Example:_ `"Red pen"` | No |
| productName | string | Product name<br/>_Example:_ `"Ball pen"` | No |
| productOrder | integer | Product order<br/>_Example:_ `1` | No |
| productQuantity | number | Product quantity<br/>_Example:_ `2.5` | Yes |
| reservedQuantitiesData | [ [ReservedQuantityData](#reservedquantitydata) ] | Reserved quantity data<br/>_Example:_ `[]` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>_Example:_ `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>_Example:_ `0.3` | No |
| taxCode | string | Tax code<br/>_Example:_ `"TX-003"` | No |
| taxName | string | Tax name<br/>_Example:_ `"GST(7%)"` | No |
| type | string | Product type<br/>_Enum:_ `"TRACKED"`, `"NONTRACKED"`<br/>_Example:_ `"TRACKED"` | Yes |
| unitPrice | number | Product price<br/>_Example:_ `10` | No |
| uomQuantity | number | uom quantity<br/>_Example:_ `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>_Example:_ `2.3` | Yes |

### QuotationItemDtoUAE

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingType | string | Advanced Tracking Type<br/>_Enum:_ `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| allocationType | string | Allocation Type<br/>_Example:_ `"NORMAL"` | No |
| availableQuantity | number | Total available quantity<br/>_Example:_ `3` | No |
| basePrice | number | Revenue Base price<br/>_Example:_ `120` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Product discount<br/>_Example:_ `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>_Example:_ `true` | No |
| documentSequenceCode | string | Product Document Sequence Code<br/>_Example:_ `"P-0000001"` | Yes |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>_Example:_ `2` | Yes |
| documentUom | long | Document UOM id<br/>_Example:_ `2` | Yes |
| exciseAmount | number | Excise amount on product<br/>_Example:_ `0.5` | No |
| exciseRate | number | Rate of Excise<br/>_Example:_ `5` | No |
| exciseType | string | Excise type<br/>_Enum:_ `"PERCENT"`, `"FLAT"`<br/>_Example:_ `"FLAT"` | No |
| fulfilledQuantity | number | Total Fulfilled Quantity<br/>_Example:_ `3` | No |
| fulfilledQuantityByFlowover | number | Total Fulfilled Quantity By Flowover<br/>_Example:_ `3` | No |
| fulfilledQuantityByUser | number | Total Fulfilled Quantity By User<br/>_Example:_ `3` | No |
| fulfilledQuantityInvoiced | number | Total Fulfilled Quantity Invoiced<br/>_Example:_ `3` | No |
| fulfillmentByDoc | [ [ItemQtyFulfilledByDoc](#itemqtyfulfilledbydoc) ] | Item Qty fulfilled by Fulfillment Doc<br/>_Example:_ `[]` | No |
| lineNumber | integer | Line Number<br/>_Example:_ `1` | No |
| otherRate | number | Tax Rate<br/>_Example:_ `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>_Example:_ `10` | No |
| pendingQuantity | number | Pending Quantity<br/>_Example:_ `3` | No |
| product | [ProductResponse](#productresponse) | Product Short Info<br/>_Example:_ `"product"` | No |
| productCode | string | Product code<br/>_Example:_ `"PC-001"` | Yes |
| productDescription | string | Product description<br/>_Example:_ `"Red pen"` | No |
| productName | string | Product name<br/>_Example:_ `"Ball pen"` | No |
| productOrder | integer | Product order<br/>_Example:_ `1` | No |
| productQuantity | number | Product quantity<br/>_Example:_ `2.5` | Yes |
| reservedQuantitiesData | [ [ReservedQuantityData](#reservedquantitydata) ] | Reserved quantity data<br/>_Example:_ `[]` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>_Example:_ `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>_Example:_ `0.3` | No |
| taxCode | string | Tax code<br/>_Example:_ `"TX-003"` | No |
| taxName | string | Tax name<br/>_Example:_ `"GST(7%)"` | No |
| type | string | Product type<br/>_Enum:_ `"TRACKED"`, `"NONTRACKED"`<br/>_Example:_ `"TRACKED"` | Yes |
| unitPrice | number | Product price<br/>_Example:_ `10` | No |
| uomQuantity | number | uom quantity<br/>_Example:_ `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>_Example:_ `2.3` | Yes |

### QuotationItemDtoUk

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingType | string | Advanced Tracking Type<br/>_Enum:_ `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| allocationType | string | Allocation Type<br/>_Example:_ `"NORMAL"` | No |
| availableQuantity | number | Total available quantity<br/>_Example:_ `3` | No |
| basePrice | number | Revenue Base price<br/>_Example:_ `120` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Product discount<br/>_Example:_ `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>_Example:_ `true` | No |
| documentSequenceCode | string | Product Document Sequence Code<br/>_Example:_ `"P-0000001"` | Yes |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>_Example:_ `2` | Yes |
| documentUom | long | Document UOM id<br/>_Example:_ `2` | Yes |
| fulfilledQuantity | number | Total Fulfilled Quantity<br/>_Example:_ `3` | No |
| fulfilledQuantityByFlowover | number | Total Fulfilled Quantity By Flowover<br/>_Example:_ `3` | No |
| fulfilledQuantityByUser | number | Total Fulfilled Quantity By User<br/>_Example:_ `3` | No |
| fulfilledQuantityInvoiced | number | Total Fulfilled Quantity Invoiced<br/>_Example:_ `3` | No |
| fulfillmentByDoc | [ [ItemQtyFulfilledByDoc](#itemqtyfulfilledbydoc) ] | Item Qty fulfilled by Fulfillment Doc<br/>_Example:_ `[]` | No |
| lineNumber | integer | Line Number<br/>_Example:_ `1` | No |
| otherRate | number | Tax Rate<br/>_Example:_ `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>_Example:_ `10` | No |
| pendingQuantity | number | Pending Quantity<br/>_Example:_ `3` | No |
| product | [ProductResponse](#productresponse) | Product Short Info<br/>_Example:_ `"product"` | No |
| productCode | string | Product code<br/>_Example:_ `"PC-001"` | Yes |
| productDescription | string | Product description<br/>_Example:_ `"Red pen"` | No |
| productName | string | Product name<br/>_Example:_ `"Ball pen"` | No |
| productOrder | integer | Product order<br/>_Example:_ `1` | No |
| productQuantity | number | Product quantity<br/>_Example:_ `2.5` | Yes |
| reservedQuantitiesData | [ [ReservedQuantityData](#reservedquantitydata) ] | Reserved quantity data<br/>_Example:_ `[]` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>_Example:_ `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>_Example:_ `0.3` | No |
| taxCode | string | Tax code<br/>_Example:_ `"TX-003"` | No |
| taxName | string | Tax name<br/>_Example:_ `"GST(7%)"` | No |
| type | string | Product type<br/>_Enum:_ `"TRACKED"`, `"NONTRACKED"`<br/>_Example:_ `"TRACKED"` | Yes |
| unitPrice | number | Product price<br/>_Example:_ `10` | No |
| uomQuantity | number | uom quantity<br/>_Example:_ `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>_Example:_ `2.3` | Yes |

### QuotationItemIndiaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingType | string | Advanced Tracking Type<br/>_Enum:_ `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| allocationType | string | Allocation Type<br/>_Example:_ `"NORMAL"` | No |
| availableQuantity | number | Total available quantity<br/>_Example:_ `3` | No |
| basePrice | number | Revenue Base price<br/>_Example:_ `120` | No |
| cessAmount | number | India specific CESS amount on total amount<br/>_Example:_ `0` | No |
| cessPercentage | number | Cess Percentage<br/>_Example:_ `2.322` | No |
| cessRule | string | Cess Rule if it applies to the item<br/>_Example:_ `"Math.max(21*amount/100,4170*quantity/100)"` | No |
| cgstAmount | number | India specific CGST tax amount on total amount<br/>_Example:_ `5` | No |
| cgstRate | number | India specific CGST rate<br/>_Example:_ `5` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Product discount<br/>_Example:_ `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>_Example:_ `true` | No |
| documentSequenceCode | string | Product Document Sequence Code<br/>_Example:_ `"P-0000001"` | Yes |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>_Example:_ `2` | Yes |
| documentUom | long | Document UOM id<br/>_Example:_ `2` | Yes |
| fulfilledQuantity | number | Total Fulfilled Quantity<br/>_Example:_ `3` | No |
| fulfilledQuantityByFlowover | number | Total Fulfilled Quantity By Flowover<br/>_Example:_ `3` | No |
| fulfilledQuantityByUser | number | Total Fulfilled Quantity By User<br/>_Example:_ `3` | No |
| fulfilledQuantityInvoiced | number | Total Fulfilled Quantity Invoiced<br/>_Example:_ `3` | No |
| fulfillmentByDoc | [ [ItemQtyFulfilledByDoc](#itemqtyfulfilledbydoc) ] | Item Qty fulfilled by Fulfillment Doc<br/>_Example:_ `[]` | No |
| hsnOrSacCode | string | Hsn or Sac code<br/>_Example:_ `110011` | No |
| igstAmount | number | India specific IGST tax amount on total amount<br/>_Example:_ `5` | No |
| igstRate | number | India specific IGST rate<br/>_Example:_ `5` | No |
| lineNumber | integer | Line Number<br/>_Example:_ `1` | No |
| otherRate | number | Tax Rate<br/>_Example:_ `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>_Example:_ `10` | No |
| pendingQuantity | number | Pending Quantity<br/>_Example:_ `3` | No |
| product | [ProductResponse](#productresponse) | Product Short Info<br/>_Example:_ `"product"` | No |
| productCode | string | Product code<br/>_Example:_ `"PC-001"` | Yes |
| productDescription | string | Product description<br/>_Example:_ `"Red pen"` | No |
| productName | string | Product name<br/>_Example:_ `"Ball pen"` | No |
| productOrder | integer | Product order<br/>_Example:_ `1` | No |
| productQuantity | number | Product quantity<br/>_Example:_ `2.5` | Yes |
| reservedQuantitiesData | [ [ReservedQuantityData](#reservedquantitydata) ] | Reserved quantity data<br/>_Example:_ `[]` | No |
| sgstAmount | number | India specific SGST tax amount on total amount<br/>_Example:_ `5` | No |
| sgstRate | number | India specific SGST rate<br/>_Example:_ `5` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>_Example:_ `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>_Example:_ `0.3` | No |
| taxCode | string | Tax code<br/>_Example:_ `"TX-003"` | No |
| taxExemptionReason | string | Tax Exemption reason if taxPreference is true<br/>_Enum:_ `"EXEMPTED"`, `"NON_GST"`<br/>_Example:_ `"EXEMPTED"` | No |
| taxName | string | Tax name<br/>_Example:_ `"GST(7%)"` | No |
| taxPreference | boolean | Tax preference, whether Exempted or not Exempted<br/>_Example:_ `false` | No |
| type | string | Product type<br/>_Enum:_ `"TRACKED"`, `"NONTRACKED"`<br/>_Example:_ `"TRACKED"` | Yes |
| unitPrice | number | Product price<br/>_Example:_ `10` | No |
| uomQuantity | number | uom quantity<br/>_Example:_ `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>_Example:_ `2.3` | Yes |
| userSetTaxes | boolean | Flag to check whether tax is user edited<br/>_Example:_ `false` | No |

### QuotationItemInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allocationType | string | Allocation Type<br/>_Example:_ `"NORMAL"` | No |
| availableQuantity | number | Total available quantity<br/>_Example:_ `3` | No |
| basePrice | number | Revenue Base price<br/>_Example:_ `120` | No |
| cessAmount | number | India specific CESS amount on total amount<br/>_Example:_ `0` | No |
| cessPercentage | number | Cess Percentage<br/>_Example:_ `2.322` | No |
| cessRule | string | Cess Rule if it applies to the item<br/>_Example:_ `"Math.max(21*amount/100,4170*quantity/100)"` | No |
| cgstAmount | number | India specific CGST tax amount on total amount<br/>_Example:_ `5` | No |
| cgstRate | number | India specific CGST rate<br/>_Example:_ `5` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Product discount<br/>_Example:_ `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>_Example:_ `true` | No |
| documentSequenceCode | string | Product Document Sequence Code<br/>_Example:_ `"P-0000001"` | Yes |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>_Example:_ `2` | Yes |
| documentUom | long | Document UOM id<br/>_Example:_ `2` | Yes |
| exciseAmount | number | Excise amount on product<br/>_Example:_ `0.5` | No |
| exciseRate | number | Rate of Excise<br/>_Example:_ `5` | No |
| exciseType | string | Excise type<br/>_Enum:_ `"PERCENT"`, `"FLAT"`<br/>_Example:_ `"FLAT"` | No |
| fulfilledQuantity | number | Total Fulfilled Quantity<br/>_Example:_ `3` | No |
| fulfilledQuantityByFlowover | number | Total Fulfilled Quantity By Flowover<br/>_Example:_ `3` | No |
| fulfilledQuantityByUser | number | Total Fulfilled Quantity By User<br/>_Example:_ `3` | No |
| fulfilledQuantityInvoiced | number | Total Fulfilled Quantity Invoiced<br/>_Example:_ `3` | No |
| fulfillmentByDoc | [ [ItemQtyFulfilledByDoc](#itemqtyfulfilledbydoc) ] | Item Qty fulfilled by Fulfillment Doc<br/>_Example:_ `[]` | No |
| hsnOrSacCode | string | Hsn or Sac code<br/>_Example:_ `110011` | No |
| igstAmount | number | India specific IGST tax amount on total amount<br/>_Example:_ `5` | No |
| igstRate | number | India specific IGST rate<br/>_Example:_ `5` | No |
| lineNumber | integer | Line Number<br/>_Example:_ `1` | No |
| otherRate | number | Tax Rate<br/>_Example:_ `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>_Example:_ `10` | No |
| pendingAmount | number | Pending amount<br/>_Example:_ `100` | No |
| pendingQuantity | number | Pending Quantity<br/>_Example:_ `3` | No |
| product | [ProductInformation](#productinformation) | Product Short Info<br/>_Example:_ `"product"` | No |
| productCode | string | Product code<br/>_Example:_ `"PC-001"` | Yes |
| productDescription | string | Product description<br/>_Example:_ `"Red pen"` | No |
| productName | string | Product name<br/>_Example:_ `"Ball pen"` | No |
| productOrder | integer | Product order<br/>_Example:_ `1` | No |
| productQuantity | number | Product quantity<br/>_Example:_ `2.5` | Yes |
| reservedQuantitiesData | [ [ReservedQuantityData](#reservedquantitydata) ] | Reserved quantity data<br/>_Example:_ `[]` | No |
| sgstAmount | number | India specific SGST tax amount on total amount<br/>_Example:_ `5` | No |
| sgstRate | number | India specific SGST rate<br/>_Example:_ `5` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>_Example:_ `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>_Example:_ `0.3` | No |
| taxCode | string | Tax code<br/>_Example:_ `"TX-003"` | No |
| taxDetails | [ [DocumentItemTaxMappingDto](#documentitemtaxmappingdto) ] | Tax Details for Tax Group | No |
| taxExemptionReason | string | Tax Exemption reason if taxPreference is true<br/>_Enum:_ `"EXEMPTED"`, `"NON_GST"`<br/>_Example:_ `"EXEMPTED"` | No |
| taxName | string | Tax name<br/>_Example:_ `"GST(7%)"` | No |
| taxPreference | boolean | Tax preference, whether Exempted or not Exempted<br/>_Example:_ `false` | No |
| type | string | Product type<br/>_Enum:_ `"TRACKED"`, `"NONTRACKED"`<br/>_Example:_ `"TRACKED"` | Yes |
| unitPrice | number | Product price<br/>_Example:_ `10` | No |
| uomQuantity | number | uom quantity<br/>_Example:_ `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>_Example:_ `2.3` | Yes |
| userSetTaxes | boolean | Flag to check whether tax is user edited<br/>_Example:_ `false` | No |

### QuotationItemIsraelDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingType | string | Advanced Tracking Type<br/>_Enum:_ `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| allocationType | string | Allocation Type<br/>_Example:_ `"NORMAL"` | No |
| availableQuantity | number | Total available quantity<br/>_Example:_ `3` | No |
| basePrice | number | Revenue Base price<br/>_Example:_ `120` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Product discount<br/>_Example:_ `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>_Example:_ `true` | No |
| documentSequenceCode | string | Product Document Sequence Code<br/>_Example:_ `"P-0000001"` | Yes |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>_Example:_ `2` | Yes |
| documentUom | long | Document UOM id<br/>_Example:_ `2` | Yes |
| fulfilledQuantity | number | Total Fulfilled Quantity<br/>_Example:_ `3` | No |
| fulfilledQuantityByFlowover | number | Total Fulfilled Quantity By Flowover<br/>_Example:_ `3` | No |
| fulfilledQuantityByUser | number | Total Fulfilled Quantity By User<br/>_Example:_ `3` | No |
| fulfilledQuantityInvoiced | number | Total Fulfilled Quantity Invoiced<br/>_Example:_ `3` | No |
| fulfillmentByDoc | [ [ItemQtyFulfilledByDoc](#itemqtyfulfilledbydoc) ] | Item Qty fulfilled by Fulfillment Doc<br/>_Example:_ `[]` | No |
| lineNumber | integer | Line Number<br/>_Example:_ `1` | No |
| otherRate | number | Tax Rate<br/>_Example:_ `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>_Example:_ `10` | No |
| pendingQuantity | number | Pending Quantity<br/>_Example:_ `3` | No |
| product | [ProductResponse](#productresponse) | Product Short Info<br/>_Example:_ `"product"` | No |
| productCode | string | Product code<br/>_Example:_ `"PC-001"` | Yes |
| productDescription | string | Product description<br/>_Example:_ `"Red pen"` | No |
| productName | string | Product name<br/>_Example:_ `"Ball pen"` | No |
| productOrder | integer | Product order<br/>_Example:_ `1` | No |
| productQuantity | number | Product quantity<br/>_Example:_ `2.5` | Yes |
| reservedQuantitiesData | [ [ReservedQuantityData](#reservedquantitydata) ] | Reserved quantity data<br/>_Example:_ `[]` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>_Example:_ `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>_Example:_ `0.3` | No |
| taxCode | string | Tax code<br/>_Example:_ `"TX-003"` | No |
| taxName | string | Tax name<br/>_Example:_ `"GST(7%)"` | No |
| type | string | Product type<br/>_Enum:_ `"TRACKED"`, `"NONTRACKED"`<br/>_Example:_ `"TRACKED"` | Yes |
| unitPrice | number | Product price<br/>_Example:_ `10` | No |
| uomQuantity | number | uom quantity<br/>_Example:_ `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>_Example:_ `2.3` | Yes |

### QuotationItemPhilippinesDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingType | string | Advanced Tracking Type<br/>_Enum:_ `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| allocationType | string | Allocation Type<br/>_Example:_ `"NORMAL"` | No |
| availableQuantity | number | Total available quantity<br/>_Example:_ `3` | No |
| basePrice | number | Revenue Base price<br/>_Example:_ `120` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| discount | number | Product discount<br/>_Example:_ `2` | No |
| discountInPercent | boolean | Discount in percentage<br/>_Example:_ `true` | No |
| documentSequenceCode | string | Product Document Sequence Code<br/>_Example:_ `"P-0000001"` | Yes |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>_Example:_ `2` | Yes |
| documentUom | long | Document UOM id<br/>_Example:_ `2` | Yes |
| fulfilledQuantity | number | Total Fulfilled Quantity<br/>_Example:_ `3` | No |
| fulfilledQuantityByFlowover | number | Total Fulfilled Quantity By Flowover<br/>_Example:_ `3` | No |
| fulfilledQuantityByUser | number | Total Fulfilled Quantity By User<br/>_Example:_ `3` | No |
| fulfilledQuantityInvoiced | number | Total Fulfilled Quantity Invoiced<br/>_Example:_ `3` | No |
| fulfillmentByDoc | [ [ItemQtyFulfilledByDoc](#itemqtyfulfilledbydoc) ] | Item Qty fulfilled by Fulfillment Doc<br/>_Example:_ `[]` | No |
| lineNumber | integer | Line Number<br/>_Example:_ `1` | No |
| otherRate | number | Tax Rate<br/>_Example:_ `5` | No |
| otherTaxAmount | number | Other Tax Amount<br/>_Example:_ `10` | No |
| pendingQuantity | number | Pending Quantity<br/>_Example:_ `3` | No |
| product | [ProductResponse](#productresponse) | Product Short Info<br/>_Example:_ `"product"` | No |
| productCode | string | Product code<br/>_Example:_ `"PC-001"` | Yes |
| productDescription | string | Product description<br/>_Example:_ `"Red pen"` | No |
| productName | string | Product name<br/>_Example:_ `"Ball pen"` | No |
| productOrder | integer | Product order<br/>_Example:_ `1` | No |
| productQuantity | number | Product quantity<br/>_Example:_ `2.5` | Yes |
| reservedQuantitiesData | [ [ReservedQuantityData](#reservedquantitydata) ] | Reserved quantity data<br/>_Example:_ `[]` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>_Example:_ `"taxDto"` | No |
| taxAmount | number | Tax amount<br/>_Example:_ `0.3` | No |
| taxCode | string | Tax code<br/>_Example:_ `"TX-003"` | No |
| taxName | string | Tax name<br/>_Example:_ `"GST(7%)"` | No |
| type | string | Product type<br/>_Enum:_ `"TRACKED"`, `"NONTRACKED"`<br/>_Example:_ `"TRACKED"` | Yes |
| unitPrice | number | Product price<br/>_Example:_ `10` | No |
| uomQuantity | number | uom quantity<br/>_Example:_ `2` | Yes |
| uomUnitPrice | number | UOM Unit price<br/>_Example:_ `2.3` | Yes |

### QuotationOverview

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| count | integer |  | No |
| data | [ [TenureData](#tenuredata) ] |  | No |
| totalAmount | number |  | No |

### QuotationOverviewReport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| drafts | [QuotationOverview](#quotationoverview) |  | No |
| expired | [QuotationOverview](#quotationoverview) |  | No |
| open | [QuotationOverview](#quotationoverview) |  | No |
| processed | [QuotationOverview](#quotationoverview) |  | No |

### QuotationPhilippinesDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalStatus | string | Approval status<br/>_Enum:_ `"APPROVED"`, `"PENDING_FOR_APPROVAL"`, `"REJECTED"`, `"NOT_REQUIRED"`<br/>_Example:_ `"APPROVED"` | No |
| attachments | [ string ] | Attachments url's | No |
| attachmentsWithLink | [ [AttachmentsResponse](#attachmentsresponse) ] | Attachments Details | No |
| backOrder | boolean | Backorder flag to indicate if backorder created<br/>_Example:_ `true` | No |
| billTo | [Address](#address) | Bill to Address. | No |
| contact | [ContactInfo](#contactinfo) | Contact info<br/>_Example:_ `"contact object"` | No |
| contactCode | string | Contact code<br/>_Example:_ `"C-0001"` | Yes |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| createdBy | long | UserId of creator<br/>_Example:_ `123` | No |
| currency | string | Currency code<br/>_Example:_ `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deleted | boolean | Quotation deleted<br/>_Example:_ `false` | No |
| documentDate | dateTime | Document date<br/>_Example:_ `"27-10-2019"` | No |
| documentSequenceCode | string | Quotation Code<br/>_Example:_ `"0000001"` | No |
| draft | boolean | True if want to save as draft.<br/>_Example:_ `false` | No |
| errors | [ string ] | List of validation error messages | No |
| exchangeRate | double | Exchange rate<br/>_Example:_ `0.01891562` | No |
| fulfillmentDate | dateTime | Fulfillment date<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentOn | dateTime | Fulfillment On<br/>_Example:_ `"28-10-2019"` | No |
| fulfillmentStatus | string | Fulfillment status<br/>_Enum:_ `"UNFULFILLED"`, `"PARTIAL_FULFILLED"`, `"FULLY_FULFILLED"`<br/>_Example:_ `"UNFULFILLED"` | No |
| fulfillmentType | string | Fulfillment type: NONE, DEFAULT, PICK_PACK_SHIP, DROP_SHIP<br/>_Enum:_`"NONE"`, `"DEFAULT"`, `"PICK_PACK_SHIP"`, `"DROP_SHIP"`<br/>_Example:_ `"PICK_PACK_SHIP"` | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>_Example:_ `1` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked document information. | No |
| linkedSalesInvoices | [ [LinkedSalesInvoiceResponse](#linkedsalesinvoiceresponse) ] |  | No |
| linkedSalesOrders | [ [LinkedSalesOrderResponse](#linkedsalesorderresponse) ] |  | No |
| memo | string | Memo text<br/>_Example:_ `"Sales quotation"` | No |
| processedInPPS | boolean |  | No |
| quotationItemDtoList | [ [QuotationItemPhilippinesDto](#quotationitemphilippinesdto) ] | Quotation items information | No |
| recurring | boolean | Is quotation set to recurring<br/>_Example:_ `false` | No |
| recurringActivated | boolean | Is quotation recurring active<br/>_Example:_ `false` | No |
| reservedStock | boolean | Reserved stock enabled<br/>_Example:_ `true` | No |
| roundOffAmountInDocumentCurrency | number | Round Off Amount in Document Currency<br/>_Example:_ `0.3` | No |
| sequenceFormat | string | Sequence Format Id<br/>_Example:_ `1` | No |
| shipByDate | dateTime | Ship by date<br/>_Example:_ `"25-10-2019"` | No |
| shipFrom | [Address](#address) | Ship from Address. | No |
| shipTo | [Address](#address) | Ship to Address. | No |
| sourceAppName | string | Source App Name<br/>_Example:_ `"BOOKS"` | No |
| status | string | Quotation status<br/>_Enum:_ `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`<br/>_Example:_ `"OPEN"` | No |
| tenantId | long | Tenant id<br/>_Example:_ `123` | No |
| unitPriceGstInclusive | boolean | Unit Price is GST inclusive<br/>_Example:_ `true` | No |
| validTillDate | dateTime | Valid till date<br/>_Example:_ `"29-10-2019"` | No |
| warehouseCode | string | Warehouse Code<br/>_Example:_ `"WH-000001"` | No |

### QuotationShortInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| baseCurrency | string |  | No |
| contactName | string |  | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| docCurrency | string |  | No |
| documentDate | string |  | No |
| fulfillmentStatus | string |  | No |
| seqNo | string |  | No |
| totalAmount | string |  | No |
| totalAmountInBaseCurrency | string |  | No |
| validTillDate | string |  | No |

### QuotationUpdateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| backOrder | boolean | Backorder flag to indicate if backorder created<br/>_Example:_ `true` | No |
| closedDate | dateTime | Quotation closed on date<br/>_Example:_ `"05-12-2019"` | No |
| fulfilledQtyByItem | object | Fulfilled Quantity by Quotation Item<br/>_Example:_ `[]` | No |
| fulfillmentCode | string |  Fulfillment Code<br/>_Example:_ `"0000012"` | No |
| fulfillmentOn | dateTime | Fulfillment on date<br/>_Example:_ `"05-12-2019"` | No |
| fulfillmentStatus | string | Fulfillment status<br/>_Enum:_ `"UNFULFILLED"`, `"PARTIAL_FULFILLED"`, `"FULLY_FULFILLED"`<br/>_Example:_ `"UNFULFILLED"` | No |
| fulfillmentType | string | Fulfillment type such as  NONE,  DEFAULT,  PICK_PACK_SHIP,  DROP_SHIP<br/>_Enum:_`"NONE"`, `"DEFAULT"`, `"PICK_PACK_SHIP"`, `"DROP_SHIP"`<br/>_Example:_ `"NONE"` | No |
| isUpdateQuoteStatus | boolean | Whether to update quotation status <br/>_Example:_ `false` | No |
| isUpdateSIItemFulfillmentQty | boolean | Whether to update Sales Invoice Item Fulfillment Qty<br/>_Example:_ `false` | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked Documents | No |
| operation | string | Partial Invoice Item added<br/>_Example:_ `"add"` | No |
| partialInvoiceItemsQuantities | object | Partial Invoice Item quantities<br/>_Example:_ `[]` | No |
| quotationCode | string | Quotation code.<br/>_Example:_ `"000012"` | No |
| quotationId | long |  Quotation ID<br/>_Example:_ `123` | No |
| reservedQuantityFulfillmentItemDtoByItem | object | Reserved quantity fulfillment data<br/>_Example:_ `[]` | No |
| status | string | Quotation status<br/>_Enum:_ `"DRAFT"`, `"OPEN"`, `"CLOSED"`, `"ARCHIVED"`, `"PROCESSED"`<br/>_Example:_ `"CLOSED"` | No |

### RecurringJobEvent

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| autoCharge | boolean |  | No |
| customTemplate | boolean |  | No |
| documentDate | dateTime |  | No |
| documentType | string | _Enum:_ `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"PURCHASE_REQUEST"`, `"PURCHASE_REQUEST_FOR_QUOTES"`, `"SUPPLIER_QUOTES"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`, `"ESTIMATE"` | No |
| emailBody | string |  | No |
| emailReplyTo | string |  | No |
| emailSenderName | string |  | No |
| emailSubject | string |  | No |
| emailTemplateId | long |  | No |
| emailTo | string |  | No |
| iamUserId | long |  | No |
| insertPaymentLinkFlag | boolean |  | No |
| jobId | long |  | No |
| parentDocumentCode | string |  | No |
| sendEmailNotificationFlag | boolean |  | No |
| tenantId | long |  | No |
| userId | long |  | No |

### RelatedTransactionDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string | Code of child document.<br/>_Example:_ `"SO-0000005"` | Yes |
| documentType | string | Document type being linked.<br/>_Enum:_ `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`<br/>_Example:_ `"SALES_ORDER"` | No |
| parentCode | string | Code of the parent document.<br/>_Example:_ `"QO-0000001"` | No |
| parentType | string | Document type from which linking is created.<br/>_Enum:_ `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`<br/>_Example:_ `"QUOTATION"` | No |

### RelatedTransactionResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string | Code of the document.<br/>_Example:_ `"QO-0000001"` | No |
| documentType | string | Type of document.<br/>_Enum:_ `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`<br/>_Example:_ `"QUOTATION"` | No |
| jeCodes | [ string ] | Journal Entry codes attached to the document. | No |
| order | integer | Display order of the record.<br/>_Example:_ `1` | No |

### ReservedQuantityData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingMetaDtos | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] | Advance tracking type<br/>_Example:_ `"SERIAL"` | No |
| advancedTrackingType | string | Advance tracking type<br/>_Enum:_ `"NONE"`, `"BATCH"`, `"SERIAL"`<br/>_Example:_ `"SERIAL"` | No |
| availableQuantity | double | Available quantity in warehouse<br/>_Example:_ `100` | No |
| binCode | string | bin code<br/>_Example:_ `"BIN-00001"` | Yes |
| documentCode | string | Document code<br/>_Example:_ `"000005"` | No |
| documentItemCode | string | Document item code<br/>_Example:_ `"000005"` | No |
| documentType | string | Document type<br/>_Example:_ `"SALES_INVOICE"` | No |
| productCode | string | Product Code<br/>_Example:_ `10` | No |
| rackCode | string | Rack code<br/>_Example:_ `"RACK-00001"` | Yes |
| reservedDate | dateTime | reserved date<br/>_Example:_ `"20-10-2022"` | No |
| reservedQuantity | double | Reserved quantity<br/>_Example:_ `100` | No |
| rowCode | string | Row code<br/>_Example:_ `"ROW-00001"` | Yes |
| warehouseCode | string | Warehouse Code<br/>_Example:_ `100.4` | No |
| wipProcessType | string | Work Order WIP Process Type<br/>_Enum:_ `"PRODUCTION"`, `"CONSUMPTION"`, `"WASTAGE"`, `"SCRAP"`, `"CO_PRODUCT"`<br/>_Example:_ `"CONSUMPTION"` | No |

### ReservedQuantityFulfillmentItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingFulfilmentDtos | [ [AdvancedTrackingFulfilmentDto](#advancedtrackingfulfilmentdto) ] | Advanced tracking data for fulfilled reserved quantity<br/>_Example:_ `[]` | No |
| fulfilledQtyByWarehouse | [ [LinkedWareHouse](#linkedwarehouse) ] | Fulfilled reserved quantity by warehouse <br/>_Example:_ `[]` | No |

### ResponseEntity

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| body | object |  | No |
| statusCode | string | _Enum:_ `"100 CONTINUE"`, `"101 SWITCHING_PROTOCOLS"`, `"102 PROCESSING"`, `"103 CHECKPOINT"`, `"200 OK"`, `"201 CREATED"`, `"202 ACCEPTED"`, `"203 NON_AUTHORITATIVE_INFORMATION"`, `"204 NO_CONTENT"`, `"205 RESET_CONTENT"`, `"206 PARTIAL_CONTENT"`, `"207 MULTI_STATUS"`, `"208 ALREADY_REPORTED"`, `"226 IM_USED"`, `"300 MULTIPLE_CHOICES"`, `"301 MOVED_PERMANENTLY"`, `"302 FOUND"`, `"302 MOVED_TEMPORARILY"`, `"303 SEE_OTHER"`, `"304 NOT_MODIFIED"`, `"305 USE_PROXY"`, `"307 TEMPORARY_REDIRECT"`, `"308 PERMANENT_REDIRECT"`, `"400 BAD_REQUEST"`, `"401 UNAUTHORIZED"`, `"402 PAYMENT_REQUIRED"`, `"403 FORBIDDEN"`, `"404 NOT_FOUND"`, `"405 METHOD_NOT_ALLOWED"`, `"406 NOT_ACCEPTABLE"`, `"407 PROXY_AUTHENTICATION_REQUIRED"`, `"408 REQUEST_TIMEOUT"`, `"409 CONFLICT"`, `"410 GONE"`, `"411 LENGTH_REQUIRED"`, `"412 PRECONDITION_FAILED"`, `"413 PAYLOAD_TOO_LARGE"`, `"413 REQUEST_ENTITY_TOO_LARGE"`, `"414 URI_TOO_LONG"`, `"414 REQUEST_URI_TOO_LONG"`, `"415 UNSUPPORTED_MEDIA_TYPE"`, `"416 REQUESTED_RANGE_NOT_SATISFIABLE"`, `"417 EXPECTATION_FAILED"`, `"418 I_AM_A_TEAPOT"`, `"419 INSUFFICIENT_SPACE_ON_RESOURCE"`, `"420 METHOD_FAILURE"`, `"421 DESTINATION_LOCKED"`, `"422 UNPROCESSABLE_ENTITY"`, `"423 LOCKED"`, `"424 FAILED_DEPENDENCY"`, `"426 UPGRADE_REQUIRED"`, `"428 PRECONDITION_REQUIRED"`, `"429 TOO_MANY_REQUESTS"`, `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"`, `"451 UNAVAILABLE_FOR_LEGAL_REASONS"`, `"500 INTERNAL_SERVER_ERROR"`, `"501 NOT_IMPLEMENTED"`, `"502 BAD_GATEWAY"`, `"503 SERVICE_UNAVAILABLE"`, `"504 GATEWAY_TIMEOUT"`, `"505 HTTP_VERSION_NOT_SUPPORTED"`, `"506 VARIANT_ALSO_NEGOTIATES"`, `"507 INSUFFICIENT_STORAGE"`, `"508 LOOP_DETECTED"`, `"509 BANDWIDTH_LIMIT_EXCEEDED"`, `"510 NOT_EXTENDED"`, `"511 NETWORK_AUTHENTICATION_REQUIRED"` | No |
| statusCodeValue | integer |  | No |

### SalesDocument

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactCode | string | Contact code<br/>_Example:_ `"000012"` | No |
| contactDto | [ContactDto](#contactdto) | Contact Details | Yes |
| documentCode | string | Document Code.<br/>_Example:_ `"QO-0000001"` | No |
| documentDate | dateTime | Document date<br/>_Example:_ `"25-10-2019"` | No |
| documentItemDetails | [ [DocumentItemDetails](#documentitemdetails) ] | Document item details. | No |
| documentSequenceCode | string | Document Sequence Code.<br/>_Example:_ `"0000001"` | No |
| documentType | string | Type of document.<br/>_Enum:_ `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"PURCHASE_REQUEST"`, `"PURCHASE_REQUEST_FOR_QUOTES"`, `"SUPPLIER_QUOTES"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`, `"ESTIMATE"`<br/>_Example:_ `"QUOTATION"` | No |
| exchangeRate | double |  | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked Documents | No |
| shipByDate | dateTime | Ship by date<br/>_Example:_ `"25-10-2019"` | No |
| shipFrom | [Address](#address) | Ship from address. | No |
| shipTo | [Address](#address) | Ship To address. | No |
| warehouseCode | string | Warehouse Code<br/>_Example:_ `"WH-0000001"` | No |

### SetRecurringDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string |  | No |
| documentType | string | _Enum:_ `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"PURCHASE_REQUEST"`, `"PURCHASE_REQUEST_FOR_QUOTES"`, `"SUPPLIER_QUOTES"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`, `"ESTIMATE"` | No |
| recurring | boolean |  | No |
| recurringActivated | boolean |  | No |

### Sort

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| empty | boolean |  | No |
| sorted | boolean |  | No |
| unsorted | boolean |  | No |

### StockQuantitiesRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| productVariantCodes | [ string ] |  | No |
| status | [ string ] |  | No |
| warehouseCode | string |  | No |

### StockQuantitiesResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| productStockInfo | [ [ProductStockInfo](#productstockinfo) ] |  | No |

### TaxDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account code<br/>_Example:_ `"AC-001"` | No |
| additionalTaxIn | boolean | TRUE/FALSE<br/>_Example:_ `false` | No |
| basReporting | string | Reporting Method<br/>_Example:_ `"BOTH"` | No |
| code | string | Tax code<br/>_Example:_ `"TC-001"` | No |
| defaultMemoBE | string | Default memo<br/>_Example:_ `"Memo"` | No |
| defaultMemoDe | string | Default Memo Germany<br/>_Example:_ `"memo"` | No |
| defaultMemoNL | string | Default memo<br/>_Example:_ `"Momo"` | No |
| defaultMemoUk | string | Default Memo UK<br/>_Example:_ `"memo"` | No |
| deleted | boolean | Tax deleted<br/>_Example:_ `false` | No |
| description | string | Description<br/>_Example:_ `"sales Tax for SG"` | No |
| effectiveEndDate | dateTime | Effective end date of the tax<br/>_Example:_ `"2023-12-31"` | No |
| effectiveStartDate | dateTime | Effective start date of the tax<br/>_Example:_ `"2023-01-01"` | No |
| flatRateSchemeUk | boolean | Flat Rate Scheme UK<br/>_Example:_ `false` | No |
| isDefault | boolean | Is Default Tax<br/>_Example:_ `false` | No |
| isTaxGroup | boolean | Is Tax Group<br/>_Example:_ `false` | No |
| name | string | Tax Name<br/>_Example:_ `"SGST"` | No |
| netAmountBefore | string | Net Amount Before Section<br/>_Example:_ `"Box 5,Box 6"` | No |
| netAmountBeforeBE | string | Net Amount Before Section<br/>_Example:_ `"Box 00,Box 01"` | No |
| netAmountBeforeNL | string | Net Amount Before Section<br/>_Example:_ `"Box 5,Box 6"` | No |
| netAmountDe | string | Net Amount Before Section<br/>_Example:_ `"Box 5,Box 6"` | No |
| netAmountUk | string | Net Amount Before Section<br/>_Example:_ `"Box 5,Box 6"` | No |
| percent | number | Tax percentage <br/>_Example:_ `7` | No |
| showInReportsID | boolean | Flag to consider in reports<br/>_Example:_ `true` | No |
| status | string | Tax status<br/>_Example:_ `"active"` | No |
| taxAccountCode | string | Account Code<br/>_Example:_ `"ACC-0000001"` | No |
| taxAgencyCan | string | _Example:_ `"British Columbia"` | No |
| taxAmountDe | string | Tax Amount In Section<br/>_Example:_ `"Box 5,Box 6"` | No |
| taxAmountIn | string | Tax Amount In Section<br/>_Example:_ `"Box 5,Box 6"` | No |
| taxAmountInBE | string | Tax Amount In Section<br/>_Example:_ `"Box 54,Box 55"` | No |
| taxAmountInNL | string | Tax Amount In Section<br/>_Example:_ `"Box 5,Box 6"` | No |
| taxAmountUk | string | Tax Amount In Section<br/>_Example:_ `"Box 5,Box 6"` | No |
| taxCode | string | Tax code<br/>_Example:_ `"TC-001"` | No |
| taxGroupDetails | [ [TaxGroupDetails](#taxgroupdetails) ] | Tax Details | No |
| taxSectionAus | string | Tax Section<br/>_Enum:_ `"DEFAULT_GST=Default GST"`, `"EXPORT_SALES=Export Sales"`, `"OTHER_GST=Other GST-free sales"`, `"INPUT_TAX_SALES=Input Taxed Sales"`, `"CAPITAL_PURCHASES=Capital purchases"`, `"NONCAPITAL_PURCHASES=Non-capital purchases"`, `"INPUT_TAX_PURCHASES=Input Tax Purchases"`, `"EXCLUDED_FROM_BAS=Excluded from BAS"`<br/>_Example:_ `"DEFAULT_GST"` | No |
| taxSectionSAR | string | Tax Section Name<br/>_Example:_ `"Standard rates sales, Standard rated domestic purchase"` | No |
| type | string | SALES<br/>_Enum:_ `"SALES"`, `"PURCHASE"`, `"BOTH"`<br/>_Example:_ `"SALES"` | No |

### TaxGroupDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalTaxIn | boolean |  | No |
| applyTo | string |  | No |
| code | string |  | No |
| id | long |  | No |
| name | string |  | No |
| percentage | number |  | No |
| type | string |  | No |

### TenureData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| count | integer |  | No |
| day | integer |  | No |
| month | string | _Enum:_ `"JANUARY"`, `"FEBRUARY"`, `"MARCH"`, `"APRIL"`, `"MAY"`, `"JUNE"`, `"JULY"`, `"AUGUST"`, `"SEPTEMBER"`, `"OCTOBER"`, `"NOVEMBER"`, `"DECEMBER"` | No |
| year | [Year](#year) |  | No |

### TriggerKafkaRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| approvalHistory | [ [ApprovalHistoryItem](#approvalhistoryitem) ] |  | No |
| approverMap | object |  | No |
| contactCode | string |  | No |
| currency | string |  | No |
| currentLevel | integer |  | No |
| totalAmount | string |  | No |
| userName | string |  | No |

### UOMDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Is active or not<br/>_Example:_ `true` | No |
| deleted | boolean | Is deleted or not<br/>_Example:_ `false` | No |
| description | string | UOM description<br/>_Example:_ `"UOM to measure weight"` | No |
| id | long | UOM Id<br/>_Example:_ `1` | No |
| isSystemGenerated | boolean | Flag to specify if the UOM is system or user generated<br/>_Example:_ `false` | No |
| name | string | UOM name<br/>_Example:_ `"LB"` | No |
| tenantId | long | Tenant Id<br/>_Example:_ `1233` | No |

### UOMSchemaDefinitionDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| sinkConversionFactor | number | 10<br/>_Example:_ `10` | No |
| sinkUOM | long | 2<br/>_Example:_ `2` | No |
| sourceConversionFactor | number | 1<br/>_Example:_ `1` | No |
| sourceUOM | long | 4<br/>_Example:_ `4` | No |
| uid | string (uuid) | UOM Schema Definition Id<br/>_Example:_ `1` | No |

### UOMSchemaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Is active or not<br/>_Example:_ `true` | No |
| baseUOM | [UOMDto](#uomdto) | Base UOM<br/>_Example:_ `"LB"` | No |
| id | long | UOM Id<br/>_Example:_ `1` | No |
| name | string | UOM name<br/>_Example:_ `"LB"` | No |
| uomSchemaDefinitions | [ [UOMSchemaDefinitionDto](#uomschemadefinitiondto) ] | UOM schema definitions | No |

### Year

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| leap | boolean |  | No |
| value | integer |  | No |