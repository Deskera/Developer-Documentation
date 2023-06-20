---
id: noteapi
title: Note APIs
sidebar_label: Note
---
Note api consists of [credit](https://www.deskera.com/books/creating-credit-notes-in-deskera/) and [debit](https://www.deskera.com/books/debit-notes-with-deskera/) note information that can be use in buy and sell module. You will be able to create, update and retrieve debit/credit notes.

`Credit note` can be used to adjust invoices. You can view client-wise and date-wise reports of all credit notes with accounting software credit note management.

`Debit note` can be created and send to your supplier to adjust or correct your liability to your supplier or vendor. Successful debit note entry will auto record to journal entries accounting software feature.
More about [Notes API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-d3e274f4-b56d-4db6-b034-f4c08e042c93?ctx=documentation)
## API
---
### Search Credit Notes
Search credit notes.


##### Description:

- Allows you to retrieve a list of all credit notes.
- Allows you to retrieve a list of credit notes based on it's filter criteria.

#### GET
#### /v1/notes/credit
[More about search credit notes](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-d3e274f4-b56d-4db6-b034-f4c08e042c93?ctx=documentation)

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
| 200 | Credit notes have been fetched successfully. | [CreditNoteResponseDto](#creditnoteresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Create Credit Note

Create credit note.

##### Description:

- Allows you to create a credit note.

#### POST
#### /v1/notes/credit
[More about create credit notes](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-d3e274f4-b56d-4db6-b034-f4c08e042c93?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| creditNoteRequestDto | body | Credit Note Detail Json | No | [CreditNoteRequestDto](#creditnoterequestdto) |


##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [CreditNoteResponseDto](#creditnoteresponsedto) |
| 201 | Credit note has been created successfully | [CreditNoteResponseDto](#creditnoteresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Knock-off Credit Note
Credit note knock-off and update its due amount.

##### Description:

- Allows you to update due amount for credit notes while knocking off credit note with other documents.

#### PUT
#### /v1/notes/credit/knock-off
[More about knock-off credit notes](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-d3e274f4-b56d-4db6-b034-f4c08e042c93?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| noteLinkedDocumentInfos | body | noteLinkedDocumentInfos | Yes | [ [NoteLinkedDocumentInfo](#notelinkeddocumentinfo) ] |


##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Due amounts updated successfully. ||
| 201 | Created ||
| 401 | Unauthorized ||
| 403 | Forbidden ||
| 404 | Credit note not found. ||

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Retrieve Credit Note

Get credit note by code.

##### Description:

- Allows you to retrieve an existing credit note details by it's code.

#### GET
#### /v1/notes/credit/{code}
[More about retrieve credit note](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-d3e274f4-b56d-4db6-b034-f4c08e042c93?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |


##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Credit note information has been fetched successfully. | [CreditNoteResponseDto](#creditnoteresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Credit note not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Update Credit Note

Update credit note.

##### Description:

- Allows you to update existing credit note information.

#### PUT
#### /v1/notes/credit/{id}
[More about update credit note](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-d3e274f4-b56d-4db6-b034-f4c08e042c93?ctx=documentation)


##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| creditNoteUpdateRequestDto | body | creditNoteUpdateRequestDto | Yes | [CreditNoteUpdateRequestDto](#creditnoteupdaterequestdto) |
| id | path | id | Yes | long |


##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Credit note has been updated successfully. | [CreditNoteResponseDto](#creditnoteresponsedto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Credit note with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |
---
### Delete Credit Note

#### DELETE
#### /v1/notes/credit/{id}
##### Summary

Delete credit note by id.

##### Description

API to delete credit note details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Credit note has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Credit note not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
### Search Debit Note

Search debit notes.

##### Description:

- Allows you to retrieve a list of all debit notes.
- Allows you to retrieve a list of debit notes based on it's filter criteria.

#### GET
#### /v1/notes/debit
[More about search debit note](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-d3e274f4-b56d-4db6-b034-f4c08e042c93?ctx=documentation)

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
| 200 | Debit notes have been fetched successfully. | [DebitNoteResponseDto](#debitnoteresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |
---
### Create Debit Note

Create debit note.

##### Description:

- Allows you to create a new debit note.

#### POST
#### /v1/notes/debit
[More about create debit note](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-d3e274f4-b56d-4db6-b034-f4c08e042c93?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| debitNoteRequestDto | body | Debit Note Detail Json | No | [DebitNoteRequestDto](#debitnoterequestdto) |


##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [DebitNoteResponseDto](#debitnoteresponsedto) |
| 201 | Debit note has been created successfully | [DebitNoteResponseDto](#debitnoteresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Knock-off Debit Note
Debit note knock-off and update its due amount.

##### Description:

- Allows you to update due amount for debit notes while knocking off debit note with other documents.

#### PUT
#### /v1/notes/debit/knock-off
[More about knock-off debit note](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-d3e274f4-b56d-4db6-b034-f4c08e042c93?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| noteLinkedDocumentInfos | body | noteLinkedDocumentInfos | Yes | [ [NoteLinkedDocumentInfo](#notelinkeddocumentinfo) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Due amounts updated successfully. ||
| 201 | Created ||
| 401 | Unauthorized ||
| 403 | Forbidden ||
| 404 | Debit note not found. ||

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Retrieve Debit Note

Get debit note by code.

##### Description:

- Allows you to retrieve an existing debit note details by it's code.

#### GET
#### /v1/notes/debit/{code}
[More about retrieve debit note](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-d3e274f4-b56d-4db6-b034-f4c08e042c93?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |


##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Debit note information has been fetched successfully. | [DebitNoteResponseDto](#debitnoteresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Debit note not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Update Debit Note

Update debit note.

##### Description:

- Allows you to update a existing debit note information.

#### PUT
#### /v1/notes/debit/{id}
[More about update debit note](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-d3e274f4-b56d-4db6-b034-f4c08e042c93?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| debitNoteUpdateRequestDto | body | debitNoteUpdateRequestDto | Yes | [DebitNoteUpdateRequestDto](#debitnoteupdaterequestdto) |
| id | path | id | Yes | long |


##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Debit note has been updated successfully. | [DebitNoteResponseDto](#debitnoteresponsedto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Debit note with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |
---
### Delete Debit Note

#### DELETE
#### /v1/notes/debit/{id}
##### Summary

Delete debit note by id.

##### Description

API to delete debit note details by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Debit note has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Debit note not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |


---
## credit-note-controller

### /v1/notes/credit/add-note-tax-mapping

#### POST
##### Summary

Add missing data in note tax mapping

##### Description

API to add missing data in note tax mapping table

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Successfully added data in note tax mapping table updated. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/credit/code/{code}/details

#### GET
##### Summary

Get credit note details by code.

##### Description

API to get credit note details by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Credit note information has been fetched successfully. | [CreditNoteInformation](#creditnoteinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Credit note not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/credit/deleteknockoff

#### DELETE
##### Summary

API to delete linked documents with note

##### Description

API to delete linked documents with note

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |
| invoiceCode | query | invoiceCode | Yes | string |
| uid | query | uid | Yes | string (uuid) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Linked document deleted successfully | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/credit/import

#### POST
##### Summary

Create multiple credit notes via import

##### Description

API to create credit note via import.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| creditNoteRequests | body | creditNoteRequests | Yes | [ [CreditNoteRequestDto](#creditnoterequestdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkApiResponse](#bulkapiresponse) |
| 201 | Note has been created successfully. | [BulkApiResponse](#bulkapiresponse) |
| 400 | Note could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/credit/in/{id}/save-einvoice-info

#### PATCH
##### Summary

saveCreditNoteEInvoiceDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| einvoiceInfoIndia | body | einvoiceInfoIndia | Yes | [EinvoiceInfoIndia](#einvoiceinfoindia) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/credit/in/{id}/update-einvoice-info

#### PATCH
##### Summary

updateCreditNoteEInvoiceDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| einvoiceInfoIndia | body | einvoiceInfoIndia | Yes | [EinvoiceInfoIndiaCancel](#einvoiceinfoindiacancel) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/credit/sequence/{code}

#### GET
##### Summary

Get credit note by code.

##### Description

API to get credit note details by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Credit note information has been fetched successfully. | [CreditNoteResponseDto](#creditnoteresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Credit note not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/credit/tax/count

#### POST
##### Summary

Get Credit note count for tax

##### Description

API to fetch Credit note count for tax

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| taxCodes | body | taxCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax Credit note count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/credit/update-linked-document

#### POST
##### Summary

Update linked document information

##### Description

Api to update linked document information

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| linkedDocumentInfos | body | linkedDocumentInfos | Yes | object |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Linked document information updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/credit/update-linked-document-seq-code

#### POST
##### Summary

Update linked document information

##### Description

Api to update linked document information

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Linked document information updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/credit/{code}

#### GET
##### Summary

Get credit note by code.

##### Description

API to get credit note details by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Credit note information has been fetched successfully. | [CreditNoteResponseDto](#creditnoteresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Credit note not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/credit/{id}

#### PUT
##### Summary

Update credit note.

##### Description

API to update existing credit note.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| creditNoteUpdateRequestDto | body | creditNoteUpdateRequestDto | Yes | [CreditNoteUpdateRequestDto](#creditnoteupdaterequestdto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Credit note has been updated successfully. | [CreditNoteResponseDto](#creditnoteresponsedto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Credit note with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## debit-note-controller
Debit Notes API Description

### /v1/notes/debit

#### GET
##### Summary

Search debit notes.

##### Description

API to search debit notes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| 200 | Debit notes have been fetched successfully. | [DebitNoteResponseDto](#debitnoteresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create debit note.

##### Description

API to create a new debit note.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| debitNoteRequestDto | body | Debit Note Detail Json | No | [DebitNoteRequestDto](#debitnoterequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [DebitNoteResponseDto](#debitnoteresponsedto) |
| 201 | Debit note has been created successfully | [DebitNoteResponseDto](#debitnoteresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/debit/add-note-tax-mapping

#### POST
##### Summary

Add missing data in note tax mapping

##### Description

API to add missing data in note tax mapping table

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Successfully added data in note tax mapping table updated. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/debit/code/{code}/details

#### GET
##### Summary

Get debit note details by code.

##### Description

API to get debit note details by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Credit note information has been fetched successfully. | [DebitNoteInformation](#debitnoteinformation) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Credit note not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/debit/deleteknockoff

#### DELETE
##### Summary

API to delete linked documents with note

##### Description

API to delete linked documents with note

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |
| invoiceCode | query | invoiceCode | Yes | string |
| uid | query | uid | Yes | string (uuid) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Linked document deleted successfully | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/debit/import

#### POST
##### Summary

Create multiple debit notes via import

##### Description

API to create debit note via import.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| debitNoteRequests | body | debitNoteRequests | Yes | [ [DebitNoteRequestDto](#debitnoterequestdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkApiResponse](#bulkapiresponse) |
| 201 | Note has been created successfully. | [BulkApiResponse](#bulkapiresponse) |
| 400 | Note could not be created due to insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/debit/in/{id}/save-einvoice-info

#### PATCH
##### Summary

saveCreditNoteEInvoiceDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| einvoiceInfoIndia | body | einvoiceInfoIndia | Yes | [EinvoiceInfoIndia](#einvoiceinfoindia) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/debit/in/{id}/update-einvoice-info

#### PATCH
##### Summary

updateCreditNoteEInvoiceDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| einvoiceInfoIndia | body | einvoiceInfoIndia | Yes | [EinvoiceInfoIndiaCancel](#einvoiceinfoindiacancel) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/debit/knock-off

#### PUT
##### Summary

Debit note knock-off and update its due amount

##### Description

API to update due amount for debit notes while knocking off debit note with other documents

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| noteLinkedDocumentInfos | body | noteLinkedDocumentInfos | Yes | [ [NoteLinkedDocumentInfo](#notelinkeddocumentinfo) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Due amounts updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Debit note not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/debit/sequence/{code}

#### GET
##### Summary

Get debit note by code.

##### Description

API to get debit note by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Debit note information has been fetched successfully. | [DebitNoteResponseDto](#debitnoteresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Debit note not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/debit/tax/count

#### POST
##### Summary

Get Debit note count for tax

##### Description

API to fetch Debit note count for tax

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| taxCodes | body | taxCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax Debit note count has been fetched. | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/debit/update-linked-document

#### POST
##### Summary

Update linked document information

##### Description

Api to update linked document information

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| linkedDocumentInfos | body | linkedDocumentInfos | Yes | object |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Linked document information updated successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/debit/{code}

#### GET
##### Summary

Get debit note by code.

##### Description

API to get debit note by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Debit note information has been fetched successfully. | [DebitNoteResponseDto](#debitnoteresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Debit note not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/notes/debit/{id}

#### PUT
##### Summary

Update debit note.

##### Description

API to update existing debit note.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| debitNoteUpdateRequestDto | body | debitNoteUpdateRequestDto | Yes | [DebitNoteUpdateRequestDto](#debitnoteupdaterequestdto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Debit note has been updated successfully. | [DebitNoteResponseDto](#debitnoteresponsedto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Debit note with given id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## migration-controller
Migration Controller

### /v1/notes/docseqcodemigration/creditNote

#### POST
##### Summary

migrateDocSeqCodeCreditNote

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
| --------------- | ------ |
| Authorization | global |

### /v1/notes/docseqcodemigration/debitNote

#### POST
##### Summary

migrateDocSeqCodeDebitNote

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
| --------------- | ------ |
| Authorization | global |

---
## Models

### AccountDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account code<br/>*Example:* `"SA"` | No |
| accountGroup | string | Account group | No |
| accountGroupId | string | Account group | No |
| accountNature | string | Account Nature<br/>*Example:* `"ASSET"` | No |
| accountSubGroup | string | Account group | No |
| accountSubGroupName | string | Account group | No |
| balance | number | Balance Amount<br/>*Example:* `999.99` | No |
| balanceInAccountCurrency | number | Balance Amount in Account Currency<br/>*Example:* `999.99` | No |
| code | string | Account code | No |
| currency | string | Account Currency | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| description | string | Account Description<br/>*Example:* `"Savings account"` | No |
| exchangeRate | number | Base to Foreign Exchange Rate<br/>*Example:* `1` | No |
| id | long | Account ID.<br/>*Example:* `1` | No |
| isCreditCard | boolean | Is account is credit card account or not<br/>*Example:* `false` | No |
| isSubAccount | boolean | Flag to confirm Subaccount<br/>*Example:* `false` | No |
| isTdsApplicable | boolean | Is TDS applicable or not<br/>*Example:* `false` | No |
| isUndepositedFundAccount | boolean | Account is Undeposited fund account or not<br/>*Example:* `true` | No |
| name | string | Account Name<br/>*Example:* `"Savings account"` | No |
| natureOfIncomePayment | string | Nature of income payment<br/>*Example:* `"Interest on Securities"` | No |
| openingBalance | number | Opening Balance Amount in Base currency<br/>*Example:* `999.99` | No |
| openingBalanceCdType | string | Opening balance Credit/Debit Type<br/>*Example:* `"DEBIT"` | No |
| openingBalanceEditable | boolean | Account Opening Balance editable or not<br/>*Example:* `true` | No |
| openingBalanceInAccountCurrency | number | Opening Balance Amount in Account currency<br/>*Example:* `999.99` | No |
| parent | long | Parent AccountId<br/>*Example:* `2431252` | No |
| parentName | string | Parent Name<br/>*Example:* `2431252` | No |
| status | string | Account Status<br/>*Example:* `"ACTIVE"` | No |
| taxCode | string | Account Tax | No |
| totalBalance | number | Summation of Opening Balance and Balance<br/>*Example:* `999.99` | No |
| totalBalanceInAccountCurrency | number | Summation of Opening Balance and Balance in Account Currency<br/>*Example:* `999.99` | No |
| totalCOABalance | number | Summation of Opening Balance and Balance with Nature<br/>*Example:* `999.99` | No |
| totalCOABalanceInAccountCurrency | number | Summation of Opening Balance and Balance with Nature in Account Currency<br/>*Example:* `999.99` | No |
| usedChequeNumbers | string | Used Cheque Series<br/>*Example:* `"301,302"` | No |

### Address

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

### AdvancedTrackingMetaDto

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
| returnType | string | *Enum:* `"SALES_RETURN"`, `"PURCHASE_RETURN"` | No |
| transactionRefCode | string |  | No |

### AttributeDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | Attribute ID<br/>*Example:* `"Id"` | No |
| name | string | Attribute Name<br/>*Example:* `"Colour"` | No |
| values | [ string ] | Attribute values | No |

### BarcodeDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| barcodeField | string |  | No |
| hideBarcodeLabel | boolean |  | No |

### BomAdditionalCostDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bomMetaDetailsId | long | id of bomMetaDetailsId<br/>*Example:* `1234` | No |
| bomMetaName | string | BOM Meta Name<br/>*Example:* `"DEFAULT"` | No |
| label | string | Name of manufacturing service<br/>*Example:* `"Labour charges"` | No |
| price | number | Quantity of product in bom<br/>*Example:* `10.5` | No |

### BomMetaDetailsDto

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

### BomMetaDto

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

### BomOperationDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bomMetaDetailsId | long | id of bomMetaDetailsId<br/>*Example:* `1234` | No |
| bomMetaName | string | BOM Meta Name<br/>*Example:* `"DEFAULT"` | No |
| costPerHour | number | Cost of operation in bom<br/>*Example:* `10.5` | No |
| fixedRate | number | Cost of operation in bom<br/>*Example:* `10.5` | No |
| operationId | long | id of operation in bom<br/>*Example:* `1234` | No |
| operationName | string | Operation Name<br/>*Example:* `"Apple"` | Yes |
| totalCost | number | Cost of operation in bom<br/>*Example:* `10.5` | No |

### BomProductCostDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| operationCost | number | Operation Cost<br/>*Example:* `15` | No |
| rawMaterialCost | number | Raw material cost<br/>*Example:* `20` | No |
| totalCost | number | Total cost<br/>*Example:* `35` | No |

### BulkApiResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ object ] |  | No |
| statusCode | integer |  | No |
| success | [ object ] |  | No |

### BulkApiResponse«CreditNoteResponseDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [CreditNoteResponseDto](#creditnoteresponsedto) ] |  | No |
| statusCode | integer |  | No |
| success | [ [CreditNoteResponseDto](#creditnoteresponsedto) ] |  | No |

### BulkApiResponse«DebitNoteResponseDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [DebitNoteResponseDto](#debitnoteresponsedto) ] |  | No |
| statusCode | integer |  | No |
| success | [ [DebitNoteResponseDto](#debitnoteresponsedto) ] |  | No |

### ContactDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attentionTo | string | the contact name in  govt agency<br/>*Example:* `"Peter Parker"` | No |
| billingAddress | [ [Address](#address) ] | List of Billing Address. | No |
| businessUnit | string | indicates the contact is govt agency<br/>*Example:* `"CAA01 - Cvl Avtn Authrty of Singapore"` | No |
| contactMasterId | string (uuid) | contact master id<br/>*Example:* `"2df7a5c1-3305-498d-8d01-aa92c42d19d2"` | No |
| contactNumber | string | Contact number<br/>*Example:* `"+65999999999"` | No |
| creditLimit | number | Credit Limit<br/>*Example:* `100` | No |
| creditLimitInBaseCurrency | number | Credit Limit In Org Currency<br/>*Example:* `100` | No |
| currencyCode | string | Currency code<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| documentSequenceCode | string | Contact Sequence code<br/>*Example:* `"C-0000001"` | No |
| emailId | string | contact email address<br/>*Example:* `"myinfo@domain.com"` | No |
| extCompanyName | string | the company name from external app<br/>*Example:* `"QuickBook"` | No |
| intercompanyType | string | Contact Type either parent or subsidiary<br/>*Enum:* `"PARENT"`, `"SUBSIDIARY"`<br/>*Example:* `"PARENT/SUBSIDIARY"` | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| invoices | object |  | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>*Example:* `true` | No |
| isCreditLimitApplicable | boolean | Contact credit limit applicable<br/>*Example:* `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>*Example:* `true` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>*Example:* `true` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>*Example:* `false` | No |
| isParentCompany | boolean | Is Parent company<br/>*Example:* `false` | No |
| isSubsidiaryCompany | boolean | Is Subsidiary company<br/>*Example:* `false` | No |
| name | string | Contact name<br/>*Example:* `"Sam"` | No |
| payableAccountCode | string | Payable account code<br/>*Example:* `"AC002"` | No |
| paymentTermCode | string | Payment term code<br/>*Example:* `"Net 0"` | No |
| peppolId | string | Peppol ID<br/>*Example:* `"u000:11::11293"` | No |
| purchasePriceLists | [ long ] | Set of Purchase price lists<br/>*Example:* `[123,456]` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| receivableAccountCode | string | Receivable account code<br/>*Example:* `"AC001"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesPriceLists | [ long ] | Set of Sales price lists<br/>*Example:* `[123,456]` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| shippingAddress | [ [Address](#address) ] | List of Shipping Address. | No |
| singaporeGovt | boolean | indicates the contact is govt agency<br/>*Example:* `true` | No |
| taxExempted | boolean | Denotes if customer is tax exempted<br/>*Example:* `true` | No |
| taxExemptionNo | string | Generated tax exemption number<br/>*Example:* `"234s-few3-2422"` | No |
| taxExemptionReason | string | Tax exemption reason<br/>*Example:* `"Resale, Federal Agency"` | No |
| taxNumber | string | Tax number<br/>*Example:* `123456` | No |
| uen | string | Contact UEN<br/>*Example:* `"DHJEUK"` | No |

### ContactInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | string | Address<br/>*Example:* `"Raffles Place 1"` | Yes |
| name | string | Customer name<br/>*Example:* `"ABC Pte Ltd"` | Yes |

### CreditNoteInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Amount of Credit Note<br/>*Example:* `0` | No |
| amountDue | number | Amount Due<br/>*Example:* `0` | No |
| attachmentIds | [ integer ] |  | No |
| billTo | [Address](#address) | Bill to address | No |
| cancelledEInvoiceInfo | [EinvoiceInfoIndiaCancel](#einvoiceinfoindiacancel) |  | No |
| cnDate | dateTime | date pattern dd-MM-yyyy<br/>*Example:* `"06-11-2019"` | Yes |
| code | string | Credit Note Code<br/>*Example:* `"CN-0000001"` | No |
| companyAddress | [Address](#address) | Company address | No |
| contact | [ContactInfo](#contactinfo) |  | No |
| contactCode | string | Unique system generated contact code<br/>*Example:* `"C-0000001"` | No |
| contactDto | [ContactDto](#contactdto) |  | No |
| creditNoteProducts | [ [CreditNoteProductInformation](#creditnoteproductinformation) ] | Credit Note Products | No |
| currency | string | Currency Code<br/>*Example:* `"SGD"` | Yes |
| currencyExchangeRate | number | Currency Exchange Rate<br/>*Example:* `1` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| documentSequenceCode | string | Sequence code<br/>*Example:* `"C-0000001"` | No |
| einvoiceCancelled | boolean |  | No |
| einvoiceInfoIndia | [EinvoiceInfoIndia](#einvoiceinfoindia) |  | No |
| einvoiceStatus | string |  | No |
| errors | [ string ] | List of validation error messages | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| id | long | Credit Note ID<br/>*Example:* `1` | No |
| jeCode | string | Journal Entry Code<br/>*Example:* `"JE-0000001"` | No |
| lineItems | [ [CreditNoteItemInformation](#creditnoteiteminformation) ] | Credit Note Line Items | No |
| linkedDocuments | [ [NoteLinkedDocumentInfo](#notelinkeddocumentinfo) ] | Linked Documents | No |
| memo | string | Credit Note Memo<br/>*Example:* `"memo"` | No |
| opening | boolean | Opening Document<br/>*Example:* `false` | No |
| placeOfSupply | string | Place of supply<br/>*Example:* `"Solapur"` | No |
| reason | string | Reason of CN<br/>*Example:* `"Deficiency in Services"` | No |
| salesInvoiceCode | string | Linked sales invoice code<br/>*Example:* `"000010"` | No |
| salesReturnCode | string | Linked sales return code<br/>*Example:* `"000001"` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| shipTo | [Address](#address) | Ship to address | No |
| type | string | Credit Note Type<br/>*Example:* `"SALES"` | No |
| unitPriceGstInclusive | boolean | Unit Price GST Inclusive<br/>*Example:* `true` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |

### CreditNoteItemInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Unique system generated account code<br/>*Example:* `"AC-0000001"` | No |
| accountDto | [AccountDto](#accountdto) | Account details<br/>*Example:* `"AccountDto"` | No |
| amount | number | Amount<br/>*Example:* `100` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| id | long | Credit Note Line Item Id<br/>*Example:* `1` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"TaxDto"` | No |
| taxAmount | number | Tax Amount<br/>*Example:* `7` | No |
| taxCode | string | Unique system generated tax code<br/>*Example:* `"TC-001"` | No |
| taxList | [ [DocumentItemTaxMappingDto](#documentitemtaxmappingdto) ] |  | No |

### CreditNoteItemsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Unique system generated account code<br/>*Example:* `"AC-0000001"` | No |
| amount | number | Amount<br/>*Example:* `100` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| errors | [ string ] | List of validation error messages | No |
| taxAmount | number | Tax Amount<br/>*Example:* `7` | No |
| taxCode | string | Unique system generated tax code<br/>*Example:* `"TC-001"` | No |
| taxList | [ [DocumentItemTaxMappingDto](#documentitemtaxmappingdto) ] |  | No |

### CreditNoteProductDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| discount | number | Discount on item<br/>*Example:* `10` | No |
| discountInPercentFlg | boolean | Flag to tell discount is in percentage<br/>*Example:* `false` | No |
| inCessAmount | number | India Cess amount<br/>*Example:* `10` | No |
| inCessRate | number | India cess rate<br/>*Example:* `5` | No |
| inCessRule | string | India cess rule | No |
| inCgstAmount | number | India Cgst amount | No |
| inCgstRate | number | India Cgst rate<br/>*Example:* `5` | No |
| inHsnOrSacCode | string | India HSN/SAC Code<br/>*Example:* `"0010"` | No |
| inIgstAmount | number | India Igst amount | No |
| inIgstRate | number | India Igst rate<br/>*Example:* `12` | No |
| inSgstAmount | number | India Sgst amount | No |
| inSgstRate | number | India Sgst rate<br/>*Example:* `5` | No |
| productCode | string | Product code<br/>*Example:* `"P-0001"` | No |
| productDescription | string | Description of product<br/>*Example:* `"P-0001 Description"` | No |
| productOrder | integer | Order of product<br/>*Example:* `1` | No |
| productQuantity | number | Quantity of product<br/>*Example:* `12` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0` | No |
| taxCode | string | Tax code<br/>*Example:* `"TX-00001"` | No |
| totalAmount | number | Total amount<br/>*Example:* `1190` | No |
| unitPrice | number | Unit price of product<br/>*Example:* `100` | No |

### CreditNoteProductInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| discount | number | Discount on item<br/>*Example:* `10` | No |
| discountInPercentFlg | boolean | Flag to tell discount is in percentage<br/>*Example:* `false` | No |
| inCessAmount | number | India Cess amount<br/>*Example:* `10` | No |
| inCessRate | number | India cess rate<br/>*Example:* `5` | No |
| inCessRule | string | India cess rule | No |
| inCgstAmount | number | India Cgst amount | No |
| inCgstRate | number | India Cgst rate<br/>*Example:* `5` | No |
| inHsnOrSacCode | string | India HSN/SAC Code<br/>*Example:* `"0010"` | No |
| inIgstAmount | number | India Igst amount | No |
| inIgstRate | number | India Igst rate<br/>*Example:* `12` | No |
| inSgstAmount | number | India Sgst amount | No |
| inSgstRate | number | India Sgst rate<br/>*Example:* `5` | No |
| product | [ProductInformation](#productinformation) | Product Response<br/>*Example:* `"product"` | No |
| productCode | string | Product code<br/>*Example:* `"P-0001"` | No |
| productDescription | string | Description of product<br/>*Example:* `"P-0001 Description"` | No |
| productOrder | integer | Order of product<br/>*Example:* `1` | No |
| productQuantity | number | Quantity of product<br/>*Example:* `12` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"TaxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0` | No |
| taxCode | string | Tax code<br/>*Example:* `"TX-00001"` | No |
| totalAmount | number | Total amount<br/>*Example:* `1190` | No |
| unitPrice | number | Unit price of product<br/>*Example:* `100` | No |

### CreditNoteRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Total Amount<br/>*Example:* `100` | Yes |
| amountDue | number | Due Amount<br/>*Example:* `100` | No |
| attachmentIds | [ integer ] |  | No |
| billTo | [Address](#address) | Bill to address | No |
| cnDate | dateTime | date pattern dd-MM-yyyy<br/>*Example:* `"06-11-2019"` | Yes |
| companyAddress | [Address](#address) | Company address | No |
| contact | [ContactInfo](#contactinfo) |  | No |
| contactCode | string | Unique system generated contact code<br/>*Example:* `"C-0000001"` | No |
| creditNoteProducts | [ [CreditNoteProductDto](#creditnoteproductdto) ] | Credit Note products | No |
| currency | string | Currency Code<br/>*Example:* `"SGD"` | Yes |
| currencyExchangeRate | number | Currency Exchange Rate<br/>*Example:* `1` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| documentSequenceCode | string | Sequence code<br/>*Example:* `"C-0000001"` | No |
| errors | [ string ] | List of validation error messages | No |
| gstExchangeRate | number |  | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| lineItems | [ [CreditNoteItemsDto](#creditnoteitemsdto) ] | Credit Note Line Items | No |
| linkedDocuments | [ [NoteLinkedDocumentInfo](#notelinkeddocumentinfo) ] | Linked Documents | No |
| memo | string | Credit Note Memo<br/>*Example:* `"memo"` | No |
| opening | boolean | Opening Document<br/>*Example:* `false` | No |
| placeOfSupply | string | Place of supply<br/>*Example:* `"Solapur"` | No |
| reason | string | Reason of CN<br/>*Example:* `"Deficiency in Services"` | No |
| salesInvoiceCode | string | Linked sales invoice code<br/>*Example:* `"000010"` | No |
| salesReturnCode | string | Linked sales return code<br/>*Example:* `"000001"` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| shipTo | [Address](#address) | Ship to address | No |
| type | string | Credit Note Type<br/>*Example:* `"SALES"` | No |
| unitPriceGstInclusive | boolean | Unit Price GST Inclusive<br/>*Example:* `true` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |

### CreditNoteResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Amount of Credit Note<br/>*Example:* `0` | No |
| amountDue | number | Amount Due<br/>*Example:* `0` | No |
| attachmentIds | [ integer ] |  | No |
| billTo | [Address](#address) | Bill to address | No |
| cancelledEInvoiceInfo | [EinvoiceInfoIndiaCancel](#einvoiceinfoindiacancel) |  | No |
| cnDate | dateTime | date pattern dd-MM-yyyy<br/>*Example:* `"06-11-2019"` | Yes |
| code | string | Credit Note Code<br/>*Example:* `"CN-0000001"` | No |
| companyAddress | [Address](#address) | Company address | No |
| contact | [ContactInfo](#contactinfo) |  | No |
| contactCode | string | Unique system generated contact code<br/>*Example:* `"C-0000001"` | No |
| creditNoteProducts | [ [CreditNoteProductDto](#creditnoteproductdto) ] | Credit Note products | No |
| currency | string | Currency Code<br/>*Example:* `"SGD"` | Yes |
| currencyExchangeRate | number | Currency Exchange Rate<br/>*Example:* `1` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| documentSequenceCode | string | Sequence code<br/>*Example:* `"C-0000001"` | No |
| einvoiceCancelled | boolean |  | No |
| einvoiceInfoIndia | [EinvoiceInfoIndia](#einvoiceinfoindia) |  | No |
| einvoiceStatus | string |  | No |
| errors | [ string ] | List of validation error messages | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| id | long | Credit Note ID<br/>*Example:* `1` | No |
| jeCode | string | Journal Entry Code<br/>*Example:* `"JE-0000001"` | No |
| lineItems | [ [CreditNoteItemsDto](#creditnoteitemsdto) ] | Credit Note Line Items | No |
| linkedDocuments | [ [NoteLinkedDocumentInfo](#notelinkeddocumentinfo) ] | Linked Documents | No |
| memo | string | Credit Note Memo<br/>*Example:* `"memo"` | No |
| opening | boolean | Opening Document<br/>*Example:* `false` | No |
| placeOfSupply | string | Place of supply<br/>*Example:* `"Solapur"` | No |
| reason | string | Reason of CN<br/>*Example:* `"Deficiency in Services"` | No |
| salesInvoiceCode | string | Linked sales invoice code<br/>*Example:* `"000010"` | No |
| salesReturnCode | string | Linked sales return code<br/>*Example:* `"000001"` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| shipTo | [Address](#address) | Ship to address | No |
| type | string | Credit Note Type<br/>*Example:* `"SALES"` | No |
| unitPriceGstInclusive | boolean | Unit Price GST Inclusive<br/>*Example:* `true` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |

### CreditNoteUpdateRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| attachmentIds | [ integer ] |  | No |
| billTo | [Address](#address) | Bill to address | No |
| cnDate | dateTime | date pattern dd-MM-yyyy<br/>*Example:* `"06-11-2019"` | Yes |
| companyAddress | [Address](#address) | Company address | No |
| contact | [ContactInfo](#contactinfo) |  | No |
| contactCode | string | Unique system generated contact code<br/>*Example:* `"C-0000001"` | No |
| currency | string | Currency Code<br/>*Example:* `"SGD"` | Yes |
| currencyExchangeRate | number | Currency Exchange Rate<br/>*Example:* `1` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| documentSequenceCode | string | Sequence code<br/>*Example:* `"C-0000001"` | No |
| errors | [ string ] | List of validation error messages | No |
| gstExchangeRate | number |  | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| lineItems | [ [CreditNoteItemsDto](#creditnoteitemsdto) ] | Credit Note Line Items | No |
| linkedDocuments | [ [NoteLinkedDocumentInfo](#notelinkeddocumentinfo) ] | Linked Documents | No |
| memo | string | Credit Note Memo<br/>*Example:* `"memo"` | No |
| opening | boolean |  | No |
| placeOfSupply | string | Place of supply<br/>*Example:* `"Solapur"` | No |
| reason | string | Reason of CN<br/>*Example:* `"Deficiency in Services"` | No |
| salesInvoiceCode | string | Linked sales invoice code<br/>*Example:* `"000010"` | No |
| salesReturnCode | string | Linked sales return code<br/>*Example:* `"000001"` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| shipTo | [Address](#address) | Ship to address | No |
| type | string | Credit Note Type<br/>*Example:* `"SALES"` | No |
| unitPriceGstInclusive | boolean | Unit Price GST Inclusive<br/>*Example:* `true` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |

### CustomFieldItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | Dimension Id<br/>*Example:* `11567` | No |
| label | string | Custom Field Name<br/>*Example:* `"Label"` | Yes |
| module | string | Supported Modules | No |
| value | object | Dimension Value<br/>*Example:* `"XYZ"` | No |

### DebitNoteInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Amount of Debit Note<br/>*Example:* `0` | No |
| amountDue | number | Amount Due<br/>*Example:* `0` | No |
| billTo | [Address](#address) | Bill to address | No |
| cancelledEInvoiceInfo | [EinvoiceInfoIndiaCancel](#einvoiceinfoindiacancel) |  | No |
| code | string | Debit Note Code<br/>*Example:* `"DN-0000001"` | No |
| companyAddress | [Address](#address) | Company address | No |
| contact | [ContactInfo](#contactinfo) |  | No |
| contactCode | string | Unique system generated contact code<br/>*Example:* `"C-0000001"` | No |
| contactDto | [ContactDto](#contactdto) |  | No |
| currency | string | Currency Code<br/>*Example:* `"SGD"` | Yes |
| currencyExchangeRate | number | Currency Exchange Rate<br/>*Example:* `1` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| debitNoteProducts | [ [DebitNoteProductInformation](#debitnoteproductinformation) ] | Debit Note Products | No |
| dnDate | dateTime | date pattern dd-MM-yyyy<br/>*Example:* `"06-11-2019"` | Yes |
| documentSequenceCode | string | Sequence code<br/>*Example:* `"C-0000001"` | No |
| einvoiceCancelled | boolean |  | No |
| einvoiceInfoIndia | [EinvoiceInfoIndia](#einvoiceinfoindia) |  | No |
| einvoiceStatus | string |  | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| id | long | Debit Note ID<br/>*Example:* `1` | No |
| jeCode | string | Journal Entry Code<br/>*Example:* `"JE-0000001"` | No |
| lineItems | [ [DebitNoteItemInformation](#debitnoteiteminformation) ] | Debit Note Line Items | No |
| linkedDocuments | [ [NoteLinkedDocumentInfo](#notelinkeddocumentinfo) ] | Linked Documents | No |
| memo | string | Debit Note Memo<br/>*Example:* `"memo"` | No |
| opening | boolean |  | No |
| placeOfSupply | string | Place of supply<br/>*Example:* `"Solapur"` | No |
| purchaseInvoiceCode | string | Linked sales invoice code<br/>*Example:* `"000010"` | No |
| purchaseReturnCode | string | Linked sales return code<br/>*Example:* `"000001"` | No |
| reason | string | Reason of CN<br/>*Example:* `"Deficiency in Services"` | No |
| salesInvoiceCode | string | Linked sales invoice code<br/>*Example:* `"000010"` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| shipTo | [Address](#address) | Ship to address | No |
| type | string | Debit Note Type<br/>*Example:* `"SALES"` | No |
| unitPriceGstInclusive | boolean | Unit Price GST Inclusive<br/>*Example:* `true` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |

### DebitNoteItemInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Unique system generated account code<br/>*Example:* `"AC-0000001"` | No |
| accountDto | [AccountDto](#accountdto) | Account details<br/>*Example:* `"AccountDto"` | No |
| amount | number | Amount<br/>*Example:* `100` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"TaxDto"` | No |
| taxAmount | number | Tax Amount<br/>*Example:* `7` | No |
| taxCode | string | Unique system generated tax code<br/>*Example:* `"TC-001"` | No |
| taxList | [ [DocumentItemTaxMappingDto](#documentitemtaxmappingdto) ] |  | No |

### DebitNoteItemsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Unique system generated account code<br/>*Example:* `"AC-0000001"` | No |
| amount | number | Amount<br/>*Example:* `100` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| errors | [ string ] | List of validation error messages | No |
| taxAmount | number | Tax Amount<br/>*Example:* `7` | No |
| taxCode | string | Unique system generated tax code<br/>*Example:* `"TC-001"` | No |
| taxList | [ [DocumentItemTaxMappingDto](#documentitemtaxmappingdto) ] |  | No |

### DebitNoteProductDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| discount | number | Discount on item<br/>*Example:* `10` | No |
| discountInPercentFlg | boolean | Flag to tell discount is in percentage<br/>*Example:* `false` | No |
| inCessAmount | number | India Cess amount<br/>*Example:* `10` | No |
| inCessRate | number | India cess rate<br/>*Example:* `5` | No |
| inCessRule | string | India cess rule | No |
| inCgstAmount | number | India Cgst amount | No |
| inCgstRate | number | India Cgst rate<br/>*Example:* `5` | No |
| inHsnOrSacCode | string | India HSN/SAC Code<br/>*Example:* `"0010"` | No |
| inIgstAmount | number | India Igst amount | No |
| inIgstRate | number | India Igst rate<br/>*Example:* `12` | No |
| inSgstAmount | number | India Sgst amount | No |
| inSgstRate | number | India Sgst rate<br/>*Example:* `5` | No |
| productCode | string | Product code<br/>*Example:* `"P-0001"` | No |
| productDescription | string | Description of product<br/>*Example:* `"P-0001 Description"` | No |
| productOrder | integer | Order of product<br/>*Example:* `1` | No |
| productQuantity | number | Quantity of product<br/>*Example:* `12` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0` | No |
| taxCode | string | Tax code<br/>*Example:* `"TX-00001"` | No |
| totalAmount | number | Total amount<br/>*Example:* `1190` | No |
| unitPrice | number | Unit price of product<br/>*Example:* `100` | No |

### DebitNoteProductInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| discount | number | Discount on item<br/>*Example:* `10` | No |
| discountInPercentFlg | boolean | Flag to tell discount is in percentage<br/>*Example:* `false` | No |
| inCessAmount | number | India Cess amount<br/>*Example:* `10` | No |
| inCessRate | number | India cess rate<br/>*Example:* `5` | No |
| inCessRule | string | India cess rule | No |
| inCgstAmount | number | India Cgst amount | No |
| inCgstRate | number | India Cgst rate<br/>*Example:* `5` | No |
| inHsnOrSacCode | string | India HSN/SAC Code<br/>*Example:* `"0010"` | No |
| inIgstAmount | number | India Igst amount | No |
| inIgstRate | number | India Igst rate<br/>*Example:* `12` | No |
| inSgstAmount | number | India Sgst amount | No |
| inSgstRate | number | India Sgst rate<br/>*Example:* `5` | No |
| product | [ProductInformation](#productinformation) | Product Response<br/>*Example:* `"product"` | No |
| productCode | string | Product code<br/>*Example:* `"P-0001"` | No |
| productDescription | string | Description of product<br/>*Example:* `"P-0001 Description"` | No |
| productOrder | integer | Order of product<br/>*Example:* `1` | No |
| productQuantity | number | Quantity of product<br/>*Example:* `12` | No |
| tax | [TaxDto](#taxdto) | Tax details<br/>*Example:* `"TaxDto"` | No |
| taxAmount | number | Tax amount<br/>*Example:* `0` | No |
| taxCode | string | Tax code<br/>*Example:* `"TX-00001"` | No |
| totalAmount | number | Total amount<br/>*Example:* `1190` | No |
| unitPrice | number | Unit price of product<br/>*Example:* `100` | No |

### DebitNoteRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Total Amount<br/>*Example:* `1000` | Yes |
| amountDue | number |  | No |
| attachmentIds | [ integer ] |  | No |
| billTo | [Address](#address) | Bill to address | No |
| companyAddress | [Address](#address) | Company address | No |
| contact | [ContactInfo](#contactinfo) |  | No |
| contactCode | string | Unique system generated contact code<br/>*Example:* `"C-0000001"` | No |
| currency | string | Currency Code<br/>*Example:* `"SGD"` | Yes |
| currencyExchangeRate | number | Currency Exchange Rate<br/>*Example:* `1` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| debitNoteProducts | [ [DebitNoteProductDto](#debitnoteproductdto) ] | Credit Note products | No |
| dnDate | dateTime | date pattern dd-MM-yyyy<br/>*Example:* `"06-11-2019"` | Yes |
| documentSequenceCode | string | Sequence code<br/>*Example:* `"C-0000001"` | No |
| errors | [ string ] | List of validation error messages | No |
| gstExchangeRate | number |  | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| lineItems | [ [DebitNoteItemsDto](#debitnoteitemsdto) ] | Debit Note Line Items | No |
| linkedDocuments | [ [NoteLinkedDocumentInfo](#notelinkeddocumentinfo) ] | Linked Documents | No |
| memo | string | Debit Note Memo<br/>*Example:* `"memo"` | No |
| opening | boolean |  | No |
| placeOfSupply | string | Place of supply<br/>*Example:* `"Solapur"` | No |
| purchaseInvoiceCode | string | Linked purchase invoice code<br/>*Example:* `"000010"` | No |
| purchaseReturnCode | string | Linked sales return code<br/>*Example:* `"000001"` | No |
| reason | string | Reason of CN<br/>*Example:* `"Deficiency in Services"` | No |
| salesInvoiceCode | string | Linked sales invoice code<br/>*Example:* `"000010"` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| shipTo | [Address](#address) | Ship to address | No |
| type | string | Debit Note Type<br/>*Example:* `"SALES"` | No |
| unitPriceGstInclusive | boolean | Unit Price GST Inclusive<br/>*Example:* `true` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |

### DebitNoteResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Amount of Debit Note<br/>*Example:* `0` | No |
| amountDue | number | Amount Due<br/>*Example:* `0` | No |
| attachmentIds | [ integer ] |  | No |
| billTo | [Address](#address) | Bill to address | No |
| cancelledEInvoiceInfo | [EinvoiceInfoIndiaCancel](#einvoiceinfoindiacancel) |  | No |
| code | string | Debit Note Code<br/>*Example:* `"DN-0000001"` | No |
| companyAddress | [Address](#address) | Company address | No |
| contact | [ContactInfo](#contactinfo) |  | No |
| contactCode | string | Unique system generated contact code<br/>*Example:* `"C-0000001"` | No |
| currency | string | Currency Code<br/>*Example:* `"SGD"` | Yes |
| currencyExchangeRate | number | Currency Exchange Rate<br/>*Example:* `1` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| customerTypeIndia | string | India Compliance filed<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"SEZ (WPAY)"` | No |
| debitNoteProducts | [ [DebitNoteProductDto](#debitnoteproductdto) ] | Credit Note products | No |
| dnDate | dateTime | date pattern dd-MM-yyyy<br/>*Example:* `"06-11-2019"` | Yes |
| documentSequenceCode | string | Sequence code<br/>*Example:* `"C-0000001"` | No |
| einvoiceCancelled | boolean |  | No |
| einvoiceInfoIndia | [EinvoiceInfoIndia](#einvoiceinfoindia) |  | No |
| einvoiceStatus | string |  | No |
| errors | [ string ] | List of validation error messages | No |
| gstExchangeRate | number | GST Exchange rate if tax residency currency is different than base currency<br/>*Example:* `1` | No |
| gstIn | string |  | No |
| gstTreatmentIndia | string | India Compliance filed<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"REGISTERED_BUSINESS_REGULAR"` | No |
| id | long | Debit Note ID<br/>*Example:* `1` | No |
| jeCode | string | Journal Entry Code<br/>*Example:* `"JE-0000001"` | No |
| lineItems | [ [DebitNoteItemsDto](#debitnoteitemsdto) ] | Debit Note Line Items | No |
| linkedDocuments | [ [NoteLinkedDocumentInfo](#notelinkeddocumentinfo) ] | Linked Documents | No |
| memo | string | Debit Note Memo<br/>*Example:* `"memo"` | No |
| opening | boolean |  | No |
| placeOfSupply | string | Place of supply<br/>*Example:* `"Solapur"` | No |
| purchaseInvoiceCode | string | Linked purchase invoice code<br/>*Example:* `"000010"` | No |
| purchaseReturnCode | string | Linked sales return code<br/>*Example:* `"000001"` | No |
| reason | string | Reason of CN<br/>*Example:* `"Deficiency in Services"` | No |
| salesInvoiceCode | string | Linked sales invoice code<br/>*Example:* `"000010"` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| shipTo | [Address](#address) | Ship to address | No |
| type | string | Debit Note Type<br/>*Example:* `"SALES"` | No |
| unitPriceGstInclusive | boolean | Unit Price GST Inclusive<br/>*Example:* `true` | No |
| vendorTypeIndia | string | India Compliance filed<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"EXPORT (WOPAY)"` | No |

### DebitNoteUpdateRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| attachmentIds | [ integer ] |  | No |
| contactCode | string | Unique system generated contact code<br/>*Example:* `"C-0000001"` | No |
| currencyExchangeRate | number | Currency Exchange Rate<br/>*Example:* `1` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] |  | No |
| dnDate | dateTime | date pattern dd-MM-yyyy<br/>*Example:* `"06-11-2019"` | Yes |
| gstExchangeRate | number |  | No |
| lineItems | [ [DebitNoteItemsDto](#debitnoteitemsdto) ] | Debit Note Line Items | No |
| memo | string | Debit Note Memo<br/>*Example:* `"memo"` | No |
| unitPriceGstInclusiveFlg | boolean | Unit Price GST Inclusive<br/>*Example:* `true` | No |

### DocumentItemTaxMappingDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalTaxIn | boolean | true/false<br/>*Example:* `true` | No |
| taxAmount | number | Tax amount<br/>*Example:* `10` | No |
| taxApplyTo | string | Tax Apply To (Pre/AFTER)<br/>*Example:* `"Pre"` | No |
| taxCode | string | Tax Code<br/>*Example:* `"GST (10%)"` | No |
| taxName | string | Tax Name<br/>*Example:* `"GST (10%)"` | No |
| taxRate | number | Tax rate<br/>*Example:* `10` | No |
| taxSeqCode | string | Tax Sequence Code<br/>*Example:* `"0000001"` | No |
| taxableAmount | number | Taxable Amount<br/>*Example:* `100` | No |

### EinvoiceInfoIndia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ackDt | string |  | No |
| ackNo | string |  | No |
| appKey | string |  | No |
| data | string |  | No |
| error | [IrnResponseErrorDetails](#irnresponseerrordetails) |  | No |
| errorDetails | [ [IrnResponseErrorDetailsList](#irnresponseerrordetailslist) ] |  | No |
| ewbDt | string |  | No |
| ewbNo | string |  | No |
| ewbValidTill | string |  | No |
| id | long |  | No |
| irn | string |  | No |
| isTokenActive | boolean |  | No |
| postEinvoiceDate | dateTime |  | No |
| remarks | string |  | No |
| sek | string |  | No |
| signedInvoice | string |  | No |
| signedQRCode | string |  | No |
| status | string |  | No |

### EinvoiceInfoIndiaCancel

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appKey | string |  | No |
| cancelDate | string |  | No |
| data | string |  | No |
| error | [IrnResponseErrorDetails](#irnresponseerrordetails) |  | No |
| errorDetails | [ [IrnResponseErrorDetailsList](#irnresponseerrordetailslist) ] |  | No |
| id | long |  | No |
| irn | string |  | No |
| isTokenActive | boolean |  | No |
| sek | string |  | No |
| status | string |  | No |

### InventoryDto

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

### InventoryWarehouseDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| availableQuantity | number | Available quantity<br/>*Example:* `100` | No |
| openingQuantity | number | Opening quantity<br/>*Example:* `10` | No |
| openingValuation | number | Opening Valuation<br/>*Example:* `1000` | No |
| warehouseCode | string | Warehouse code<br/>*Example:* `"WH-00001"` | Yes |

### InvoiceResponseInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| currency | string |  | No |
| documentCode | string | document code<br/>*Example:* `"SI-0000041"` | No |
| documentSequenceCode | string | Document Sequence Code<br/>*Example:* `"00000001"` | No |
| dueAmount | number | due amount<br/>*Example:* `46` | No |
| exchangeRate | number |  | No |
| id | long | ID<br/>*Example:* `43` | No |
| invoiceDate | dateTime | invoice date<br/>*Example:* `"2018-10-01"` | No |
| invoiceDueDate | dateTime | invoice due date<br/>*Example:* `"2018-10-01"` | No |
| memo | string | memo<br/>*Example:* `"test"` | No |
| purchaseOrderRefNo | string | Contact PO reference number<br/>*Example:* `"CPO001"` | No |
| status | string | *Enum:* `"OPEN"`, `"DRAFT"`, `"CLOSED"` | No |
| supplierInvoiceNo | string | Contact supplier invoice number<br/>*Example:* `"CSI001"` | No |
| taxAmount | number | Total Amount<br/>*Example:* `1` | No |
| totalAmount | number | total amount<br/>*Example:* `46` | No |
| totalAmountInBaseCurrency | number | total amount in base currency<br/>*Example:* `46` | No |
| type | string | sale invoice or purchase invoice<br/>*Example:* `"sale_invoice"` | No |

### IrnResponseErrorDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| error_cd | string |  | No |
| message | string |  | No |

### IrnResponseErrorDetailsList

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| errorCode | string |  | No |
| errorMessage | string |  | No |

### LandedCostCategory

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allocationType | string | *Enum:* `"QUANTITY"`, `"VALUE"`, `"WEIGHT"`, `"MANUAL"`, `"CUSTOM_DUTY"` | No |
| name | string |  | No |

### NoteLinkedDocumentInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Amount<br/>*Example:* `100` | No |
| currency | string | Currency Code<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | Yes |
| documentCode | string | Unique system generated document code<br/>*Example:* `"SI-0000001"` | No |
| documentSeqCode | string | Unique system generated document code<br/>*Example:* `"SI-0000001"` | No |
| documentType | string | Type of document.<br/>*Enum:* `"SALES_INVOICE"`, `"PURCHASE_INVOICE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`<br/>*Example:* `"SALES_INVOICE"` | No |
| exchangeRate | number | Currency Exchange Rate<br/>*Example:* `1` | No |
| knockOffDate | dateTime | Document Date with pattern dd-mm-yyyy<br/>*Example:* `"06-11-2019"` | Yes |
| noteCode | string | Unique system generated credit or debit note code<br/>*Example:* `"CN-0000001"` | No |
| noteSeqCode | string | Unique user generated credit or debit note code<br/>*Example:* `"CN-0000001"` | No |
| uid | string (uuid) |  | No |

### Pageable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| offset | long |  | No |
| pageNumber | integer |  | No |
| pageSize | integer |  | No |
| paged | boolean |  | No |
| sort | [Sort](#sort) |  | No |
| unpaged | boolean |  | No |

### Page«CreditNoteResponseDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [CreditNoteResponseDto](#creditnoteresponsedto) ] |  | No |
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

### Page«DebitNoteResponseDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [DebitNoteResponseDto](#debitnoteresponsedto) ] |  | No |
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

### ProductInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Product status<br/>*Example:* `true` | No |
| advancedTracking | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"`<br/>*Example:* `"NONE"` | No |
| advancedTrackingMetaData | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] | Advanced Tracking Meta data<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| amortizationPeriod | integer | Amortization template period<br/>*Example:* `36` | No |
| amortizationTemplateCode | string | Amortization template code<br/>*Example:* `"0000001"` | No |
| attributes | [ [AttributeDetails](#attributedetails) ] | Attribute Details | No |
| autoFulfillmentEnabled | boolean | Is Auto-Fulfillment enable?<br/>*Example:* `false` | No |
| availableQuantity | number | Available Quantity<br/>*Example:* `2` | No |
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
| cessRule | string | Cess rule expression<br/>*Example:* `"Math.max(21*amount/100,4170*quantity/1000)"` | No |
| cessRuleDescription | string | Cess rule description<br/>*Example:* `"21% or Rs. 4170 per thousand, whichever is higher"` | No |
| costOfGoodsSoldAccountCode | string |  | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| deferredExpenseAccountCode | string | Deferred Expense account code<br/>*Example:* `"A-0015"` | No |
| deferredRevenueAccountCode | string | Deferred Revenue account code<br/>*Example:* `"A-0015"` | No |
| deleted | boolean | Product delete status<br/>*Example:* `true` | No |
| description | string | Product description<br/>*Example:* `"Description"` | No |
| documentSequenceCode | string | Product Sequence code<br/>*Example:* `"P-0000001"` | No |
| exciseApplicable | boolean | *Example:* `true` | No |
| exciseRate | double | Excise rate based on Excise Type<br/>*Example:* `10` | No |
| exciseType | string | Excise type to apply<br/>*Enum:* `"PERCENT"`, `"FLAT"`<br/>*Example:* `"PERCENT"` | No |
| exemptedMalaysia | boolean | Whether Product is Tax Exempted<br/>*Example:* `true` | No |
| glAccountCode | string | GL account code<br/>*Example:* `"A-0017"` | No |
| hasBuildAssembly | boolean | Has Build Assembly<br/>*Example:* `true` | No |
| hasVariants | boolean | Product has variants<br/>*Example:* `false` | No |
| hsnOrSacCode | string | HSN or SAC code of product<br/>*Example:* `1234` | No |
| id | long | Product ID<br/>*Example:* `1234` | No |
| images | [ string ] | Product image url's | No |
| incomingQty | number | Product incoming Qty | No |
| inventory | [InventoryDto](#inventorydto) | Inventory information required for Tracked Products. | No |
| inventoryAccountCode | string |  | No |
| inventoryWarehouseDetails | [ [InventoryWarehouseDetails](#inventorywarehousedetails) ] | Inventory warehouse details<br/>*Example:* `{"warehouseCode":"WH-00001","availableQuantity":"100","openingQuantity":"100"}` | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>*Example:* `true` | No |
| isFinishedProduct | boolean | Is finished product?<br/>*Example:* `false` | No |
| isUiProductUpdate | boolean | Product is update by UI.<br/>*Example:* `false` | No |
| isVariant | boolean | Is a variant<br/>*Example:* `false` | No |
| itcAdjustment | string | ITC adjustment<br/>*Enum:* `"NA"`, `"ITC_IS_BLOCKED"`, `"ITC_IS_REVERSED"`<br/>*Example:* `"ITC_IS_BLOCKED"` | No |
| landedCostCategory | [ [LandedCostCategory](#landedcostcategory) ] | Landed cost category details | No |
| manufacturingCostAccountCode | string | Manufacturing Cost Account Code<br/>*Example:* `"AC-0000012"` | No |
| masterProductCode | string | Master Product Code<br/>*Example:* `"P-0000001"` | No |
| multipleUomSchema | boolean | Is multiple Uom Schema?<br/>*Example:* `true` | No |
| name | string | Product Name<br/>*Example:* `"Apple"` | Yes |
| nameInArabicSA | string |  | No |
| offeringType | string | Offering type<br/>*Enum:* `"GOODS"`, `"SERVICES"`<br/>*Example:* `"GOODS"` | No |
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
| reservedQuantity | number | Reserved Quantity<br/>*Example:* `2` | No |
| revenueRecognitionInfo | [ProductRevenueRecognitionInfo](#productrevenuerecognitioninfo) | Product Revenue Recognition Information Object | No |
| rowRackBinData | [RowRackBinData](#rowrackbindata) | Row Rack Bin information required for Tracked Products. | No |
| salesAccountCode | string | Sales account code<br/>*Example:* `"A-0013"` | Yes |
| salesPrice | double | Sales price<br/>*Example:* `120` | Yes |
| salesPriceTaxInclusive | boolean | Is sales price tax inclusive?<br/>*Example:* `false` | No |
| salesReturnAccountCode | string | Sales return account code<br/>*Example:* `"A-0015"` | No |
| salesTaxCode | string | Sales tax code<br/>*Example:* `"T-002"` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| source | string | Identify this is ecom sync product<br/>*Example:* `"SHOPIFY"` | No |
| stockAdjustmentAccountCode | string |  | No |
| stockUom | long | Stock UOM<br/>*Example:* `2` | Yes |
| tariffOrServiceCodeMalaysia | string | Tariff or Service code of product<br/>*Example:* `1234` | No |
| taxExemptionReason | string | Tax Exempted reason to be filled, if taxPreference is true<br/>*Enum:* `"EXEMPTED"`, `"NON_GST"`<br/>*Example:* `"EXEMPTED"` | No |
| taxExemptionReasonMalaysia | string | Tax Exempted reason to be filled, if taxPreference is true<br/>*Enum:* `"EXEMPTED"`, `"NON_SST"`, `"LIVE_ANIMALS"`, `"UNPROCESSED_FOOD"`, `"VEGETABLES"`, `"MEDICINES"`, `"MACHINERY"`, `"CHEMICALS"`<br/>*Example:* `"EXEMPTED"` | No |
| taxPreference | boolean | Whether Product is Tax Exempted<br/>*Example:* `true` | No |
| taxable | boolean | Is taxable?<br/>*Example:* `true` | No |
| tdsApplicableIndia | boolean |  | No |
| tdsNatureOfPaymentIndia | string |  | No |
| type | string | Product type<br/>*Enum:* `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"`<br/>*Example:* `"TRACKED"` | Yes |
| uomSchema | long | Reorder level of the Products.<br/>*Example:* `100` | No |
| uomSchemaDto | [UOMSchemaDto](#uomschemadto) | Product uom schema information | No |
| valuationMethod | string | Valuation Method<br/>*Enum:* `"FIFO"`, `"AVERAGE"`<br/>*Example:* `"FIFO"` | Yes |
| variantAttributes | object | Attribute Details specific to a variant | No |
| variantCount | integer | Variant Count | No |
| whtApplicable | boolean | *Example:* `true` | No |
| whtSectionToWhtRateId | long | Product WHT - Nature Of Payment to WHT Rate Id<br/>*Example:* `1213454` | No |
| wipInventoryAccountCode | string |  | No |

### ProductRevenueRecognitionInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allocationType | string | Allocation Type<br/>*Example:* `"Normal/Exclude"` | No |
| createRevenuePlanOn | string | Create Revenue Plan On<br/>*Example:* `"Fulfillment"` | No |
| isDirectRevenuePositing | boolean | Direct Revenue Positing<br/>*Example:* `true` | No |
| itemRevenueCategory | string | Item Revenue Category<br/>*Example:* `"Licence"` | No |
| revRecForecastRule | string | Revenue Recognition Forecast Rule<br/>*Example:* `"Rule Forecast 1"` | No |
| revRecRule | string | Revenue Recognition Rule<br/>*Example:* `"Rule 1"` | No |

### ProductSubstitutesDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTracking | string | Advanced Tracking Type<br/>*Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"`<br/>*Example:* `"NONE"` | No |
| availableQuantity | number | Quantity of product available<br/>*Example:* `10` | No |
| productDocumentSeqCode | string | Doc seq code of Product<br/>*Example:* `"P-00001"` | No |
| productId | string | Product Id<br/>*Example:* `"P-00001"` | No |
| productName | string | Name of Product<br/>*Example:* `"Test Product"` | No |
| stockUom | long | Stock UOM<br/>*Example:* `2` | Yes |
| type | string | Product type<br/>*Enum:* `"TRACKED"`, `"NONTRACKED"`, `"BILL_OF_MATERIALS"`<br/>*Example:* `"TRACKED"` | Yes |

### ResponseEntity

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| body | object |  | No |
| statusCode | string | *Enum:* `"100 CONTINUE"`, `"101 SWITCHING_PROTOCOLS"`, `"102 PROCESSING"`, `"103 CHECKPOINT"`, `"200 OK"`, `"201 CREATED"`, `"202 ACCEPTED"`, `"203 NON_AUTHORITATIVE_INFORMATION"`, `"204 NO_CONTENT"`, `"205 RESET_CONTENT"`, `"206 PARTIAL_CONTENT"`, `"207 MULTI_STATUS"`, `"208 ALREADY_REPORTED"`, `"226 IM_USED"`, `"300 MULTIPLE_CHOICES"`, `"301 MOVED_PERMANENTLY"`, `"302 FOUND"`, `"302 MOVED_TEMPORARILY"`, `"303 SEE_OTHER"`, `"304 NOT_MODIFIED"`, `"305 USE_PROXY"`, `"307 TEMPORARY_REDIRECT"`, `"308 PERMANENT_REDIRECT"`, `"400 BAD_REQUEST"`, `"401 UNAUTHORIZED"`, `"402 PAYMENT_REQUIRED"`, `"403 FORBIDDEN"`, `"404 NOT_FOUND"`, `"405 METHOD_NOT_ALLOWED"`, `"406 NOT_ACCEPTABLE"`, `"407 PROXY_AUTHENTICATION_REQUIRED"`, `"408 REQUEST_TIMEOUT"`, `"409 CONFLICT"`, `"410 GONE"`, `"411 LENGTH_REQUIRED"`, `"412 PRECONDITION_FAILED"`, `"413 PAYLOAD_TOO_LARGE"`, `"413 REQUEST_ENTITY_TOO_LARGE"`, `"414 URI_TOO_LONG"`, `"414 REQUEST_URI_TOO_LONG"`, `"415 UNSUPPORTED_MEDIA_TYPE"`, `"416 REQUESTED_RANGE_NOT_SATISFIABLE"`, `"417 EXPECTATION_FAILED"`, `"418 I_AM_A_TEAPOT"`, `"419 INSUFFICIENT_SPACE_ON_RESOURCE"`, `"420 METHOD_FAILURE"`, `"421 DESTINATION_LOCKED"`, `"422 UNPROCESSABLE_ENTITY"`, `"423 LOCKED"`, `"424 FAILED_DEPENDENCY"`, `"426 UPGRADE_REQUIRED"`, `"428 PRECONDITION_REQUIRED"`, `"429 TOO_MANY_REQUESTS"`, `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"`, `"451 UNAVAILABLE_FOR_LEGAL_REASONS"`, `"500 INTERNAL_SERVER_ERROR"`, `"501 NOT_IMPLEMENTED"`, `"502 BAD_GATEWAY"`, `"503 SERVICE_UNAVAILABLE"`, `"504 GATEWAY_TIMEOUT"`, `"505 HTTP_VERSION_NOT_SUPPORTED"`, `"506 VARIANT_ALSO_NEGOTIATES"`, `"507 INSUFFICIENT_STORAGE"`, `"508 LOOP_DETECTED"`, `"509 BANDWIDTH_LIMIT_EXCEEDED"`, `"510 NOT_EXTENDED"`, `"511 NETWORK_AUTHENTICATION_REQUIRED"` | No |
| statusCodeValue | integer |  | No |

### RowRackBinData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| binId | long | Row Id<br/>*Example:* `1` | Yes |
| binName | string | Row Name<br/>*Example:* `"Row1"` | Yes |
| rackId | long | Row Id<br/>*Example:* `1` | Yes |
| rackName | string | Row Name<br/>*Example:* `"Row1"` | Yes |
| rowId | long | Row Id<br/>*Example:* `1` | Yes |
| rowName | string | Row Name<br/>*Example:* `"Row1"` | Yes |

### Sort

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| empty | boolean |  | No |
| sorted | boolean |  | No |
| unsorted | boolean |  | No |

### TaxDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Account code<br/>*Example:* `"AC-001"` | No |
| additionalTaxIn | boolean | TRUE/FALSE<br/>*Example:* `false` | No |
| basReporting | string | Reporting Method<br/>*Example:* `"BOTH"` | No |
| code | string | Tax code<br/>*Example:* `"TC-001"` | No |
| defaultMemoBE | string | Default memo<br/>*Example:* `"Memo"` | No |
| defaultMemoDe | string | Default Memo Germany<br/>*Example:* `"memo"` | No |
| defaultMemoNL | string | Default memo<br/>*Example:* `"Momo"` | No |
| defaultMemoUk | string | Default Memo UK<br/>*Example:* `"memo"` | No |
| deleted | boolean | Tax deleted<br/>*Example:* `false` | No |
| description | string | Description<br/>*Example:* `"sales Tax for SG"` | No |
| effectiveEndDate | dateTime | Effective end date of the tax<br/>*Example:* `"2023-12-31"` | No |
| effectiveStartDate | dateTime | Effective start date of the tax<br/>*Example:* `"2023-01-01"` | No |
| flatRateSchemeUk | boolean | Flat Rate Scheme UK<br/>*Example:* `false` | No |
| isDefault | boolean | Is Default Tax<br/>*Example:* `false` | No |
| isTaxGroup | boolean | Is Tax Group<br/>*Example:* `false` | No |
| name | string | Tax Name<br/>*Example:* `"SGST"` | No |
| netAmountBefore | string | Net Amount Before Section<br/>*Example:* `"Box 5,Box 6"` | No |
| netAmountBeforeBE | string | Net Amount Before Section<br/>*Example:* `"Box 00,Box 01"` | No |
| netAmountBeforeNL | string | Net Amount Before Section<br/>*Example:* `"Box 5,Box 6"` | No |
| netAmountDe | string |  | No |
| netAmountUk | string | Net Amount Before Section<br/>*Example:* `"Box 5,Box 6"` | No |
| percent | number | Tax percentage <br/>*Example:* `7` | No |
| showInReportsID | boolean | Flag to consider in reports<br/>*Example:* `true` | No |
| status | string | Tax status<br/>*Example:* `"active"` | No |
| taxAccountCode | string | Account Code<br/>*Example:* `"ACC-0000001"` | No |
| taxAgencyCan | string | *Example:* `"British Columbia"` | No |
| taxAmountDe | string | Tax Amount In Section<br/>*Example:* `"Box 5,Box 6"` | No |
| taxAmountIn | string | Tax Amount In Section<br/>*Example:* `"Box 5,Box 6"` | No |
| taxAmountInBE | string | Tax Amount In Section<br/>*Example:* `"Box 54,Box 55"` | No |
| taxAmountInNL | string | Tax Amount In Section<br/>*Example:* `"Box 5,Box 6"` | No |
| taxAmountUk | string | Tax Amount In Section<br/>*Example:* `"Box 5,Box 6"` | No |
| taxCode | string | Tax code<br/>*Example:* `"TC-001"` | No |
| taxGroupDetails | [ [TaxGroupDetails](#taxgroupdetails) ] | Tax Details | No |
| taxSectionAus | string | Tax Section<br/>*Enum:* `"DEFAULT_GST=Default GST"`, `"EXPORT_SALES=Export Sales"`, `"OTHER_GST=Other GST-free sales"`, `"INPUT_TAX_SALES=Input Taxed Sales"`, `"CAPITAL_PURCHASES=Capital purchases"`, `"NONCAPITAL_PURCHASES=Non-capital purchases"`, `"INPUT_TAX_PURCHASES=Input Tax Purchases"`, `"EXCLUDED_FROM_BAS=Excluded from BAS"`<br/>*Example:* `"DEFAULT_GST"` | No |
| taxSectionSAR | string | Tax Section Name<br/>*Example:* `"Standard rates sales, Standard rated domestic purchase"` | No |
| type | string | SALES<br/>*Enum:* `"SALES"`, `"PURCHASE"`, `"BOTH"`<br/>*Example:* `"SALES"` | No |

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

### UOMDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Is active or not<br/>*Example:* `true` | No |
| deleted | boolean | Is deleted or not<br/>*Example:* `false` | No |
| description | string | UOM description<br/>*Example:* `"UOM to measure weight"` | No |
| id | long | UOM Id<br/>*Example:* `1` | No |
| isSystemGenerated | boolean | Flag to specify if the UOM is system or user generated<br/>*Example:* `false` | No |
| name | string | UOM name<br/>*Example:* `"LB"` | No |
| tenantId | long | Tenant Id<br/>*Example:* `1233` | No |

### UOMSchemaDefinitionDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| sinkConversionFactor | number | 10<br/>*Example:* `10` | No |
| sinkUOM | long | 2<br/>*Example:* `2` | No |
| sourceConversionFactor | number | 1<br/>*Example:* `1` | No |
| sourceUOM | long | 4<br/>*Example:* `4` | No |
| uid | string (uuid) | UOM Schema Definition Id<br/>*Example:* `1` | No |

### UOMSchemaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Is active or not<br/>*Example:* `true` | No |
| baseUOM | [UOMDto](#uomdto) | Base UOM<br/>*Example:* `"LB"` | No |
| id | long | UOM Id<br/>*Example:* `1` | No |
| name | string | UOM name<br/>*Example:* `"LB"` | No |
| uomSchemaDefinitions | [ [UOMSchemaDefinitionDto](#uomschemadefinitiondto) ] | UOM schema definitions | No |