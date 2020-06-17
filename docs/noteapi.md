---
id: noteapi
title: Note APIs
sidebar_label: Note
---
Note api consists of [credit](https://www.deskera.com/books/creating-credit-notes-in-deskera/) and [debit](https://www.deskera.com/books/debit-notes-with-deskera/) note information that can be use in buy and sell module. You will be able to create, update and retrieve debit/credit notes.

`Credit note` can be used to adjust invoices. You can view client-wise and date-wise reports of all credit notes with accounting software credit note management.

`Debit note` can be created and send to your supplier to adjust or correct your liability to your supplier or vendor. Successful debit note entry will auto record to journal entries accounting software feature.

## API
---
### Search Credit Notes
Search credit notes.


##### Description:

- Allows you to retrieve a list of all credit notes.
- Allows you to retrieve a list of credit notes based on it's filter criteria.

#### GET
#### /v1/notes/credit
##### Request URL

```java
https://bifrost.deskera.com/v1/notes/credit?limit=10&page=0&sort=createdOn&sortDir=desc
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/notes/credit?limit=10&page=0&sort=createdOn&sortDir=desc" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Sample Response

```java
{
  "content": [
    {
      "amount": 0,
      "amountDue": 0,
      "cnDate": "06-11-2019",
      "code": "CN-0000001",
      "contact": {
        "address": "Raffles Place 1",
        "name": "ABC Pte Ltd"
      },
      "contactCode": "C-0000001",
      "currency": "SGD",
      "currencyExchangeRate": 1,
      "id": 1,
      "jeCode": "JE-0000001",
      "lineItems": [
        {
          "accountCode": "AC-0000001",
          "amount": 100,
          "taxAmount": 7,
          "taxCode": "TC-001"
        }
      ],
      "linkedDocuments": [
        {
          "amount": 100,
          "currency": "SGD",
          "documentCode": "SI-0000001",
          "documentType": "SALES_INVOICE",
          "exchangeRate": 1,
          "knockOffDate": "06-11-2019",
          "noteCode": "CN-0000001"
        }
      ],
      "memo": "memo",
      "type": "SALES",
      "unitPriceGstInclusive": true
    }
  ],
  "pageable": {
    "sort": {
      "sorted": true,
      "unsorted": false,
      "empty": false
    },
    "offset": 0,
    "pageSize": 10,
    "pageNumber": 0,
    "paged": true,
    "unpaged": false
  },
  "totalElements": 1,
  "last": true,
  "totalPages": 1,
  "first": true,
  "sort": {
    "sorted": true,
    "unsorted": false,
    "empty": false
  },
  "size": 10,
  "number": 0,
  "numberOfElements": 1,
  "empty": true
}
```

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

##### Request URL

```java
https://bifrost.deskera.com/v1/notes/credit
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/notes/credit" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"cnDate\": \"06-11-2019\", \"contact\": { \"address\": \"Raffles Place 1\", \"name\": \"ABC Pte Ltd\" }, \"contactCode\": \"C-0000001\", \"currency\": \"SGD\", \"currencyExchangeRate\": 1, \"lineItems\": [ { \"accountCode\": \"AC-0000001\", \"amount\": 100, \"taxAmount\": 7, \"taxCode\": \"TC-001\" } ], \"linkedDocuments\": [ { \"amount\": 100, \"currency\": \"SGD\", \"documentCode\": \"SI-0000001\", \"documentType\": \"SALES_INVOICE\", \"exchangeRate\": 1, \"knockOffDate\": \"06-11-2019\", \"noteCode\": \"CN-0000001\" } ], \"memo\": \"memo\", \"type\": \"SALES\", \"unitPriceGstInclusive\": true}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| creditNoteRequestDto | body | Credit Note Detail Json | No | [CreditNoteRequestDto](#creditnoterequestdto) |

##### Sample Resquest

```java
{
  "cnDate": "06-11-2019",
  "contact": {
    "address": "Raffles Place 1",
    "name": "ABC Pte Ltd"
  },
  "contactCode": "C-0000001",
  "currency": "SGD",
  "currencyExchangeRate": 1,
  "lineItems": [
    {
      "accountCode": "AC-0000001",
      "amount": 100,
      "taxAmount": 7,
      "taxCode": "TC-001"
    }
  ],
  "linkedDocuments": [
    {
      "amount": 100,
      "currency": "SGD",
      "documentCode": "SI-0000001",
      "documentType": "SALES_INVOICE",
      "exchangeRate": 1,
      "knockOffDate": "06-11-2019",
      "noteCode": "CN-0000001"
    }
  ],
  "memo": "memo",
  "type": "SALES",
  "unitPriceGstInclusive": true
}
```

##### Sample Response

```java
{
  "amount": 0,
  "amountDue": 0,
  "cnDate": "06-11-2019",
  "code": "CN-0000001",
  "contact": {
    "address": "Raffles Place 1",
    "name": "ABC Pte Ltd"
  },
  "contactCode": "C-0000001",
  "currency": "SGD",
  "currencyExchangeRate": 1,
  "id": 1,
  "jeCode": "JE-0000001",
  "lineItems": [
    {
      "accountCode": "AC-0000001",
      "amount": 100,
      "taxAmount": 7,
      "taxCode": "TC-001"
    }
  ],
  "linkedDocuments": [
    {
      "amount": 100,
      "currency": "SGD",
      "documentCode": "SI-0000001",
      "documentType": "SALES_INVOICE",
      "exchangeRate": 1,
      "knockOffDate": "06-11-2019",
      "noteCode": "CN-0000001"
    }
  ],
  "memo": "memo",
  "type": "SALES",
  "unitPriceGstInclusive": true
}
```

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
##### Request URL

```java
https://bifrost.deskera.com/v1/notes/credit/knock-off
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/notes/credit/knock-off" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "[ { \"amount\": 100, \"currency\": \"SGD\", \"documentCode\": \"SI-0000001\", \"documentType\": \"SALES_INVOICE\", \"exchangeRate\": 1, \"knockOffDate\": \"06-11-2019\", \"noteCode\": \"CN-0000001\" }]"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| noteLinkedDocumentInfos | body | noteLinkedDocumentInfos | Yes | [ [NoteLinkedDocumentInfo](#notelinkeddocumentinfo) ] |

##### Sample Resquest

```java
[
  {
    "amount": 100,
    "currency": "SGD",
    "documentCode": "SI-0000001",
    "documentType": "SALES_INVOICE",
    "exchangeRate": 1,
    "knockOffDate": "06-11-2019",
    "noteCode": "CN-0000001"
  }
]
```

##### Sample Response

```java
Due amounts updated successfully.
```

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
##### Request URL

```java
https://bifrost.deskera.com/v1/notes/credit/CN-0000001
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/notes/credit/CN-0000001" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Sample Response

```java
{
  "amount": 0,
  "amountDue": 0,
  "cnDate": "06-11-2019",
  "code": "CN-0000001",
  "contact": {
    "address": "Raffles Place 1",
    "name": "ABC Pte Ltd"
  },
  "contactCode": "C-0000001",
  "currency": "SGD",
  "currencyExchangeRate": 1,
  "id": 1,
  "jeCode": "JE-0000001",
  "lineItems": [
    {
      "accountCode": "AC-0000001",
      "amount": 100,
      "taxAmount": 7,
      "taxCode": "TC-001"
    }
  ],
  "linkedDocuments": [
    {
      "amount": 100,
      "currency": "SGD",
      "documentCode": "SI-0000001",
      "documentType": "SALES_INVOICE",
      "exchangeRate": 1,
      "knockOffDate": "06-11-2019",
      "noteCode": "CN-0000001"
    }
  ],
  "memo": "memo",
  "type": "SALES",
  "unitPriceGstInclusive": true
}
```



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

##### Request URL
```java
https://bifrost.deskera.com/v1/notes/credit/1
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/notes/credit/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"cnDate\": \"06-11-2019\", \"lineItems\": [ { \"accountCode\": \"AC-0000001\", \"amount\": 100, \"taxAmount\": 7, \"taxCode\": \"TC-001\" } ], \"memo\": \"memo\", \"unitPriceGstInclusive\": true}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| creditNoteUpdateRequestDto | body | creditNoteUpdateRequestDto | Yes | [CreditNoteUpdateRequestDto](#creditnoteupdaterequestdto) |
| id | path | id | Yes | long |

##### Sample Resquest

```java
{
  "cnDate": "06-11-2019",
  "lineItems": [
    {
      "accountCode": "AC-0000001",
      "amount": 100,
      "taxAmount": 7,
      "taxCode": "TC-001"
    }
  ],
  "memo": "memo",
  "unitPriceGstInclusive": true
}
```

##### Sample Response

```java
{
  "amount": 0,
  "amountDue": 0,
  "cnDate": "06-11-2019",
  "code": "CN-0000001",
  "contact": {
    "address": "Raffles Place 1",
    "name": "ABC Pte Ltd"
  },
  "contactCode": "C-0000001",
  "currency": "SGD",
  "currencyExchangeRate": 1,
  "id": 1,
  "jeCode": "JE-0000001",
  "lineItems": [
    {
      "accountCode": "AC-0000001",
      "amount": 100,
      "taxAmount": 7,
      "taxCode": "TC-001"
    }
  ],
  "linkedDocuments": [
    {
      "amount": 100,
      "currency": "SGD",
      "documentCode": "SI-0000001",
      "documentType": "SALES_INVOICE",
      "exchangeRate": 1,
      "knockOffDate": "06-11-2019",
      "noteCode": "CN-0000001"
    }
  ],
  "memo": "memo",
  "type": "SALES",
  "unitPriceGstInclusive": true
}
```

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
### Search Debit Note

Search debit notes.

##### Description:

- Allows you to retrieve a list of all debit notes.
- Allows you to retrieve a list of debit notes based on it's filter criteria.

#### GET
#### /v1/notes/debit
##### Request URL

```java
https://bifrost.deskera.com/v1/notes/debit?limit=10&page=0&sort=createdOn&sortDir=desc
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/notes/debit?limit=10&page=0&sort=createdOn&sortDir=desc" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Sample Response

```java
{
  "content": [
    {
      "amount": 0,
      "amountDue": 0,
      "code": "DN-0000001",
      "contact": {
        "address": "Raffles Place 1",
        "name": "ABC Pte Ltd"
      },
      "contactCode": "C-0000001",
      "currency": "SGD",
      "currencyExchangeRate": 1,
      "dnDate": "06-11-2019",
      "id": 1,
      "jeCode": "JE-0000001",
      "lineItems": [
        {
          "accountCode": "AC-0000001",
          "amount": 100,
          "taxAmount": 7,
          "taxCode": "TC-001"
        }
      ],
      "linkedDocuments": [
        {
          "amount": 100,
          "currency": "SGD",
          "documentCode": "SI-0000001",
          "documentType": "SALES_INVOICE",
          "exchangeRate": 1,
          "knockOffDate": "06-11-2019",
          "noteCode": "CN-0000001"
        }
      ],
      "memo": "memo",
      "type": "SALES",
      "unitPriceGstInclusive": true
    }
  ],
  "pageable": {
    "sort": {
      "sorted": true,
      "unsorted": false,
      "empty": false
    },
    "offset": 0,
    "pageSize": 10,
    "pageNumber": 0,
    "paged": true,
    "unpaged": false
  },
  "totalElements": 1,
  "last": true,
  "totalPages": 1,
  "first": true,
  "sort": {
    "sorted": true,
    "unsorted": false,
    "empty": false
  },
  "size": 10,
  "number": 0,
  "numberOfElements": 1,
  "empty": true
}
```

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
##### Request URL

```java
https://bifrost.deskera.com/v1/notes/debit
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/notes/debit" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"contact\": { \"address\": \"Raffles Place 1\", \"name\": \"ABC Pte Ltd\" }, \"contactCode\": \"C-0000001\", \"currency\": \"SGD\", \"currencyExchangeRate\": 1, \"dnDate\": \"06-11-2019\", \"lineItems\": [ { \"accountCode\": \"AC-0000001\", \"amount\": 100, \"taxAmount\": 7, \"taxCode\": \"TC-001\" } ], \"linkedDocuments\": [ { \"amount\": 100, \"currency\": \"SGD\", \"documentCode\": \"SI-0000001\", \"documentType\": \"SALES_INVOICE\", \"exchangeRate\": 1, \"knockOffDate\": \"06-11-2019\", \"noteCode\": \"CN-0000001\" } ], \"memo\": \"memo\", \"type\": \"SALES\", \"unitPriceGstInclusive\": true}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| debitNoteRequestDto | body | Debit Note Detail Json | No | [DebitNoteRequestDto](#debitnoterequestdto) |

##### Sample Request

```java
{
  "contact": {
    "address": "Raffles Place 1",
    "name": "ABC Pte Ltd"
  },
  "contactCode": "C-0000001",
  "currency": "SGD",
  "currencyExchangeRate": 1,
  "dnDate": "06-11-2019",
  "lineItems": [
    {
      "accountCode": "AC-0000001",
      "amount": 100,
      "taxAmount": 7,
      "taxCode": "TC-001"
    }
  ],
  "linkedDocuments": [
    {
      "amount": 100,
      "currency": "SGD",
      "documentCode": "SI-0000001",
      "documentType": "SALES_INVOICE",
      "exchangeRate": 1,
      "knockOffDate": "06-11-2019",
      "noteCode": "CN-0000001"
    }
  ],
  "memo": "memo",
  "type": "SALES",
  "unitPriceGstInclusive": true
}
```

##### Sample Response

```java
{
  "amount": 0,
  "amountDue": 0,
  "code": "DN-0000001",
  "contact": {
    "address": "Raffles Place 1",
    "name": "ABC Pte Ltd"
  },
  "contactCode": "C-0000001",
  "currency": "SGD",
  "currencyExchangeRate": 1,
  "dnDate": "06-11-2019",
  "id": 1,
  "jeCode": "JE-0000001",
  "lineItems": [
    {
      "accountCode": "AC-0000001",
      "amount": 100,
      "taxAmount": 7,
      "taxCode": "TC-001"
    }
  ],
  "linkedDocuments": [
    {
      "amount": 100,
      "currency": "SGD",
      "documentCode": "SI-0000001",
      "documentType": "SALES_INVOICE",
      "exchangeRate": 1,
      "knockOffDate": "06-11-2019",
      "noteCode": "CN-0000001"
    }
  ],
  "memo": "memo",
  "type": "SALES",
  "unitPriceGstInclusive": true
}
```

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
##### Request URL

```java
https://bifrost.deskera.com/v1/notes/debit/knock-off
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/notes/debit/knock-off" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "[ { \"amount\": 100, \"currency\": \"SGD\", \"documentCode\": \"SI-0000001\", \"documentType\": \"SALES_INVOICE\", \"exchangeRate\": 1, \"knockOffDate\": \"06-11-2019\", \"noteCode\": \"CN-0000001\" }]"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| noteLinkedDocumentInfos | body | noteLinkedDocumentInfos | Yes | [ [NoteLinkedDocumentInfo](#notelinkeddocumentinfo) ] |

##### Sample Request

```java
[
  {
    "amount": 100,
    "currency": "SGD",
    "documentCode": "SI-0000001",
    "documentType": "SALES_INVOICE",
    "exchangeRate": 1,
    "knockOffDate": "06-11-2019",
    "noteCode": "CN-0000001"
  }
]
```

##### Sample Response

```java
Due amounts updated successfully.
```

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

##### Request URL

```java
https://bifrost.deskera.com/v1/notes/debit/DN-0000001
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/notes/debit/DN-0000001" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Sample Response

```java
{
  "amount": 0,
  "amountDue": 0,
  "code": "DN-0000001",
  "contact": {
    "address": "Raffles Place 1",
    "name": "ABC Pte Ltd"
  },
  "contactCode": "C-0000001",
  "currency": "SGD",
  "currencyExchangeRate": 1,
  "dnDate": "06-11-2019",
  "id": 1,
  "jeCode": "JE-0000001",
  "lineItems": [
    {
      "accountCode": "AC-0000001",
      "amount": 100,
      "taxAmount": 7,
      "taxCode": "TC-001"
    }
  ],
  "linkedDocuments": [
    {
      "amount": 100,
      "currency": "SGD",
      "documentCode": "SI-0000001",
      "documentType": "SALES_INVOICE",
      "exchangeRate": 1,
      "knockOffDate": "06-11-2019",
      "noteCode": "CN-0000001"
    }
  ],
  "memo": "memo",
  "type": "SALES",
  "unitPriceGstInclusive": true
}
```

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
##### Request URL

```java
https://bifrost.deskera.com/v1/notes/debit/1
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/notes/debit/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"dnDate\": \"06-11-2019\", \"lineItems\": [ { \"accountCode\": \"AC-0000001\", \"amount\": 100, \"taxAmount\": 7, \"taxCode\": \"TC-001\" } ], \"memo\": \"memo\", \"unitPriceGstInclusiveFlg\": true}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| debitNoteUpdateRequestDto | body | debitNoteUpdateRequestDto | Yes | [DebitNoteUpdateRequestDto](#debitnoteupdaterequestdto) |
| id | path | id | Yes | long |

##### Sample Request

```java
{
  "dnDate": "06-11-2019",
  "lineItems": [
    {
      "accountCode": "AC-0000001",
      "amount": 100,
      "taxAmount": 7,
      "taxCode": "TC-001"
    }
  ],
  "memo": "memo",
  "unitPriceGstInclusiveFlg": true
}
```

##### Sample Response

```java
{
  "amount": 0,
  "amountDue": 0,
  "code": "DN-0000001",
  "contact": {
    "address": "Raffles Place 1",
    "name": "ABC Pte Ltd"
  },
  "contactCode": "C-0000001",
  "currency": "SGD",
  "currencyExchangeRate": 1,
  "dnDate": "06-11-2019",
  "id": 1,
  "jeCode": "JE-0000001",
  "lineItems": [
    {
      "accountCode": "AC-0000001",
      "amount": 100,
      "taxAmount": 7,
      "taxCode": "TC-001"
    }
  ],
  "linkedDocuments": [
    {
      "amount": 100,
      "currency": "SGD",
      "documentCode": "SI-0000001",
      "documentType": "SALES_INVOICE",
      "exchangeRate": 1,
      "knockOffDate": "06-11-2019",
      "noteCode": "CN-0000001"
    }
  ],
  "memo": "memo",
  "type": "SALES",
  "unitPriceGstInclusive": true
}
```

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

## Models
---

### ContactInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | string | Address | Yes |
| name | string | Customer name | Yes |

### CreditNoteItemsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Unique system generated account code | No |
| amount | number | Amount | No |
| taxAmount | number | Tax Amount | No |
| taxCode | string | Unique system generated tax code | No |

### CreditNoteRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cnDate | dateTime | date pattern dd-MM-yyyy | Yes |
| contact | [ContactInfo](#contactinfo) |  | No |
| contactCode | string | Unique system generated contact code | No |
| currency | string | Currency Code | Yes |
| currencyExchangeRate | number | Currency Exchange Rate | No |
| lineItems | [ [CreditNoteItemsDto](#creditnoteitemsdto) ] | Credit Note Line Items | No |
| linkedDocuments | [ [NoteLinkedDocumentInfo](#notelinkeddocumentinfo) ] | Linked Documents | No |
| memo | string | Credit Note Memo | No |
| type | string | Credit Note Type | No |
| unitPriceGstInclusive | boolean | Unit Price GST Inclusive | No |

### CreditNoteResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Amount of Credit Note | No |
| amountDue | number | Amount Due | No |
| cnDate | dateTime | date pattern dd-MM-yyyy | Yes |
| code | string | Credit Note Code | No |
| contact | [ContactInfo](#contactinfo) |  | No |
| contactCode | string | Unique system generated contact code | No |
| currency | string | Currency Code | Yes |
| currencyExchangeRate | number | Currency Exchange Rate | No |
| id | long | Credit Note ID | No |
| jeCode | string | Journal Entry Code | No |
| lineItems | [ [CreditNoteItemsDto](#creditnoteitemsdto) ] | Credit Note Line Items | No |
| linkedDocuments | [ [NoteLinkedDocumentInfo](#notelinkeddocumentinfo) ] | Linked Documents | No |
| memo | string | Credit Note Memo | No |
| type | string | Credit Note Type | No |
| unitPriceGstInclusive | boolean | Unit Price GST Inclusive | No |

### CreditNoteUpdateRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cnDate | dateTime | date pattern dd-MM-yyyy | Yes |
| lineItems | [ [CreditNoteItemsDto](#creditnoteitemsdto) ] | Credit Note Line Items | No |
| memo | string | Credit Note Memo | No |
| unitPriceGstInclusive | boolean | Unit Price GST Inclusive | No |

### DebitNoteItemsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Unique system generated account code | No |
| amount | number | Amount | No |
| taxAmount | number | Tax Amount | No |
| taxCode | string | Unique system generated tax code | No |

### DebitNoteRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | [ContactInfo](#contactinfo) |  | No |
| contactCode | string | Unique system generated contact code | No |
| currency | string | Currency Code | Yes |
| currencyExchangeRate | number | Currency Exchange Rate | No |
| dnDate | dateTime | date pattern dd-MM-yyyy | Yes |
| lineItems | [ [DebitNoteItemsDto](#debitnoteitemsdto) ] | Debit Note Line Items | No |
| linkedDocuments | [ [NoteLinkedDocumentInfo](#notelinkeddocumentinfo) ] | Linked Documents | No |
| memo | string | Debit Note Memo | No |
| type | string | Debit Note Type | No |
| unitPriceGstInclusive | boolean | Unit Price GST Inclusive | No |

### DebitNoteResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Amount of Debit Note | No |
| amountDue | number | Amount Due | No |
| code | string | Debit Note Code | No |
| contact | [ContactInfo](#contactinfo) |  | No |
| contactCode | string | Unique system generated contact code | No |
| currency | string | Currency Code | Yes |
| currencyExchangeRate | number | Currency Exchange Rate | No |
| dnDate | dateTime | date pattern dd-MM-yyyy | Yes |
| id | long | Debit Note ID | No |
| jeCode | string | Journal Entry Code | No |
| lineItems | [ [DebitNoteItemsDto](#debitnoteitemsdto) ] | Debit Note Line Items | No |
| linkedDocuments | [ [NoteLinkedDocumentInfo](#notelinkeddocumentinfo) ] | Linked Documents | No |
| memo | string | Debit Note Memo | No |
| type | string | Debit Note Type | No |
| unitPriceGstInclusive | boolean | Unit Price GST Inclusive | No |

### DebitNoteUpdateRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| dnDate | dateTime | date pattern dd-MM-yyyy | Yes |
| lineItems | [ [DebitNoteItemsDto](#debitnoteitemsdto) ] | Debit Note Line Items | No |
| memo | string | Debit Note Memo | No |
| unitPriceGstInclusiveFlg | boolean | Unit Price GST Inclusive | No |

### NoteLinkedDocumentInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Amount | No |
| currency | string | Currency Code | Yes |
| documentCode | string | Unique system generated document code | No |
| documentType | string | Type of document. | No |
| exchangeRate | number | Currency Exchange Rate | No |
| knockOffDate | dateTime | Document Date with pattern dd-mm-yyyy | Yes |
| noteCode | string | Unique system generated credit or debit note code | No |

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

### Sort

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| empty | boolean |  | No |
| sorted | boolean |  | No |
| unsorted | boolean |  | No |