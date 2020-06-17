---
id: contactapi
title: Contact APIs
sidebar_label: Contact
---
A [contact](https://www.deskera.com/sales/customer-relationship-management-contacts/) is a consumer of the product or service which is offered by your business. You can create, update and retrieve contacts by using API.

`ContactDto` help you to create a new contact, update a particular contact, retrieve contact, or get the list of all contacts.

More about [Contact API documentation](https://deskera.docs.apiary.io/#reference/contact-apis)

## API
---
### Search Contact

Get contacts by filter criteria. [More about search contact](https://deskera.docs.apiary.io/#reference/contact-apis/v1contacts/get-contacts-by-filter-criteria)

##### Description:
- Allows you to retrieve a list of all contacts.
- Allows you to retrieve specific contact based on it's filter criteria.

#### GET
#### /v1/contacts
##### Request URL

```java
https://bifrost.deskera.com/v1/contacts?includeOpeningAmounts=false&includeOweAmounts=false&limit=10&page=0&sort=createdAt&sortDir=desc
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/contacts?includeOpeningAmounts=false&includeOweAmounts=false&limit=10&page=0&sort=createdAt&sortDir=desc" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| includeOpeningAmounts | query | includeOpeningAmounts | No | boolean |
| includeOweAmounts | query | includeOweAmounts | No | boolean |
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
        "attentionTo": "Peter Parker",
        "billingAddress": [
            {
            "address1": "218, Robinson Road",
            "address2": "Downtown",
            "city": "C001",
            "country": "C001",
            "postalCode": 123456,
            "preferred": true,
            "state": "CS001"
            }
        ],
        "businessUnit": "CAA01 - Cvl Avtn Authrty of Singapore",
        "currencyCode": "SGD",
        "customField": {
            "field1": "value1",
            "field2": "value2"
        },
        "documentSequenceCode": "C-0000001",
        "emailId": "myinfo@domain.com",
        "invoices": {
            "additionalProp1": [
            {
                "documentCode": "SI-0000041",
                "documentSequenceCode": "00000001",
                "dueAmount": 46,
                "id": 43,
                "invoiceDate": "2018-10-01",
                "invoiceDueDate": "2018-10-01",
                "memo": "test",
                "taxAmount": 1,
                "totalAmount": 46,
                "type": "sale_invoice"
            }
            ],
            "additionalProp2": [
            {
                "documentCode": "SI-0000041",
                "documentSequenceCode": "00000001",
                "dueAmount": 46,
                "id": 43,
                "invoiceDate": "2018-10-01",
                "invoiceDueDate": "2018-10-01",
                "memo": "test",
                "taxAmount": 1,
                "totalAmount": 46,
                "type": "sale_invoice"
            }
            ],
            "additionalProp3": [
            {
                "documentCode": "SI-0000041",
                "documentSequenceCode": "00000001",
                "dueAmount": 46,
                "id": 43,
                "invoiceDate": "2018-10-01",
                "invoiceDueDate": "2018-10-01",
                "memo": "test",
                "taxAmount": 1,
                "totalAmount": 46,
                "type": "sale_invoice"
            }
            ]
        },
        "name": "Sam",
        "payableAccountCode": "AC002",
        "paymentTermCode": "Net 0",
        "peppolId": "u000:11::11293",
        "receivableAccountCode": "AC001",
        "sequenceFormat": 1,
        "shippingAddress": [
            {
            "address1": "218, Robinson Road",
            "address2": "Downtown",
            "city": "C001",
            "country": "C001",
            "postalCode": 123456,
            "preferred": true,
            "state": "CS001"
            }
        ],
        "singaporeGovt": true,
        "taxExempted": true,
        "taxExemptionNo": "234s-few3-2422",
        "taxExemptionReason": "Resale, Federal Agency",
        "taxNumber": 123456,
        "uen": "DHJEUK"
      }
  ],
  "pageable": {
    "sort": {
      "sorted": true,
      "unsorted": false,
      "empty": false
    },
    "pageSize": 10,
    "pageNumber": 0,
    "offset": 0,
    "paged": true,
    "unpaged": false
  },
  "totalElements": 0,
  "totalPages": 0,
  "last": true,
  "first": true,
  "sort": {
    "sorted": true,
    "unsorted": false,
    "empty": false
  },
  "numberOfElements": 0,
  "size": 10,
  "number": 0,
  "empty": true
}

```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactDto](#contactdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Create Contact

Create a new Contact. [More about create contact](https://deskera.docs.apiary.io/#reference/contact-apis/v1contacts/create-a-new-contact)

##### Description:

- Allows you to create new contact.

#### POST
#### /v1/contacts
##### Request URL

```java
https://bifrost.deskera.com/v1/contacts
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/contacts" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"attentionTo\": \"Peter Parker\", \"billingAddress\": [ { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" } ], \"businessUnit\": \"CAA01 - Cvl Avtn Authrty of Singapore\", \"currencyCode\": \"SGD\", \"customField\": { \"field1\": \"value1\", \"field2\": \"value2\" }, \"documentSequenceCode\": \"C-0000001\", \"emailId\": \"myinfo@domain.com\", \"invoices\": { \"additionalProp1\": [ { \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"taxAmount\": 1, \"totalAmount\": 46, \"type\": \"sale_invoice\" } ], \"additionalProp2\": [ { \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"taxAmount\": 1, \"totalAmount\": 46, \"type\": \"sale_invoice\" } ], \"additionalProp3\": [ { \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"taxAmount\": 1, \"totalAmount\": 46, \"type\": \"sale_invoice\" } ] }, \"name\": \"Sam\", \"payableAccountCode\": \"AC002\", \"paymentTermCode\": \"Net 0\", \"peppolId\": \"u000:11::11293\", \"receivableAccountCode\": \"AC001\", \"sequenceFormat\": 1, \"shippingAddress\": [ { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" } ], \"singaporeGovt\": true, \"taxExempted\": true, \"taxExemptionNo\": \"234s-few3-2422\", \"taxExemptionReason\": \"Resale, Federal Agency\", \"taxNumber\": 123456, \"uen\": \"DHJEUK\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactDto | body | contactDto | Yes | [ContactDto](#contactdto) |

##### Sample Request

```java
{
  "attentionTo": "Peter Parker",
  "billingAddress": [
    {
      "address1": "218, Robinson Road",
      "address2": "Downtown",
      "city": "C001",
      "country": "C001",
      "postalCode": 123456,
      "preferred": true,
      "state": "CS001"
    }
  ],
  "businessUnit": "CAA01 - Cvl Avtn Authrty of Singapore",
  "currencyCode": "SGD",
  "customField": {
    "field1": "value1",
    "field2": "value2"
  },
  "documentSequenceCode": "C-0000001",
  "emailId": "myinfo@domain.com",
  "invoices": {
    "additionalProp1": [
      {
        "documentCode": "SI-0000041",
        "documentSequenceCode": "00000001",
        "dueAmount": 46,
        "id": 43,
        "invoiceDate": "2018-10-01",
        "invoiceDueDate": "2018-10-01",
        "memo": "test",
        "taxAmount": 1,
        "totalAmount": 46,
        "type": "sale_invoice"
      }
    ],
    "additionalProp2": [
      {
        "documentCode": "SI-0000041",
        "documentSequenceCode": "00000001",
        "dueAmount": 46,
        "id": 43,
        "invoiceDate": "2018-10-01",
        "invoiceDueDate": "2018-10-01",
        "memo": "test",
        "taxAmount": 1,
        "totalAmount": 46,
        "type": "sale_invoice"
      }
    ],
    "additionalProp3": [
      {
        "documentCode": "SI-0000041",
        "documentSequenceCode": "00000001",
        "dueAmount": 46,
        "id": 43,
        "invoiceDate": "2018-10-01",
        "invoiceDueDate": "2018-10-01",
        "memo": "test",
        "taxAmount": 1,
        "totalAmount": 46,
        "type": "sale_invoice"
      }
    ]
  },
  "name": "Sam",
  "payableAccountCode": "AC002",
  "paymentTermCode": "Net 0",
  "peppolId": "u000:11::11293",
  "receivableAccountCode": "AC001",
  "sequenceFormat": 1,
  "shippingAddress": [
    {
      "address1": "218, Robinson Road",
      "address2": "Downtown",
      "city": "C001",
      "country": "C001",
      "postalCode": 123456,
      "preferred": true,
      "state": "CS001"
    }
  ],
  "singaporeGovt": true,
  "taxExempted": true,
  "taxExemptionNo": "234s-few3-2422",
  "taxExemptionReason": "Resale, Federal Agency",
  "taxNumber": 123456,
  "uen": "DHJEUK"
}
```

##### Sample Response

```java
{
  "attentionTo": "Peter Parker",
  "billingAddress": [
    {
      "address1": "218, Robinson Road",
      "address2": "Downtown",
      "city": "C001",
      "country": "C001",
      "postalCode": 123456,
      "preferred": true,
      "state": "CS001"
    }
  ],
  "businessUnit": "CAA01 - Cvl Avtn Authrty of Singapore",
  "currencyCode": "SGD",
  "customField": {
    "field1": "value1",
    "field2": "value2"
  },
  "documentSequenceCode": "C-0000001",
  "emailId": "myinfo@domain.com",
  "invoices": {
    "additionalProp1": [
      {
        "documentCode": "SI-0000041",
        "documentSequenceCode": "00000001",
        "dueAmount": 46,
        "id": 43,
        "invoiceDate": "2018-10-01",
        "invoiceDueDate": "2018-10-01",
        "memo": "test",
        "taxAmount": 1,
        "totalAmount": 46,
        "type": "sale_invoice"
      }
    ],
    "additionalProp2": [
      {
        "documentCode": "SI-0000041",
        "documentSequenceCode": "00000001",
        "dueAmount": 46,
        "id": 43,
        "invoiceDate": "2018-10-01",
        "invoiceDueDate": "2018-10-01",
        "memo": "test",
        "taxAmount": 1,
        "totalAmount": 46,
        "type": "sale_invoice"
      }
    ],
    "additionalProp3": [
      {
        "documentCode": "SI-0000041",
        "documentSequenceCode": "00000001",
        "dueAmount": 46,
        "id": 43,
        "invoiceDate": "2018-10-01",
        "invoiceDueDate": "2018-10-01",
        "memo": "test",
        "taxAmount": 1,
        "totalAmount": 46,
        "type": "sale_invoice"
      }
    ]
  },
  "name": "Sam",
  "payableAccountCode": "AC002",
  "paymentTermCode": "Net 0",
  "peppolId": "u000:11::11293",
  "receivableAccountCode": "AC001",
  "sequenceFormat": 1,
  "shippingAddress": [
    {
      "address1": "218, Robinson Road",
      "address2": "Downtown",
      "city": "C001",
      "country": "C001",
      "postalCode": 123456,
      "preferred": true,
      "state": "CS001"
    }
  ],
  "singaporeGovt": true,
  "taxExempted": true,
  "taxExemptionNo": "234s-few3-2422",
  "taxExemptionReason": "Resale, Federal Agency",
  "taxNumber": 123456,
  "uen": "DHJEUK"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ContactDto](#contactdto) |
| 201 | Contact has been created successfully. | [ContactDto](#contactdto) |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Retrieve Contact by ID

Get contact by id. [More about retrieve contact by id](https://deskera.docs.apiary.io/#reference/contact-apis/v1contactsid/get-contact-by-id)

##### Description:

- Allows you to retrieve an existing contact details by it's id.

#### GET
#### /v1/contacts/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/contacts/1
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/contacts/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Sample Response
```java
{
  "attentionTo": "Peter Parker",
  "billingAddress": [
    {
      "address1": "218, Robinson Road",
      "address2": "Downtown",
      "city": "C001",
      "country": "C001",
      "postalCode": 123456,
      "preferred": true,
      "state": "CS001"
    }
  ],
  "businessUnit": "CAA01 - Cvl Avtn Authrty of Singapore",
  "currencyCode": "SGD",
  "customField": {
    "field1": "value1",
    "field2": "value2"
  },
  "documentSequenceCode": "C-0000001",
  "emailId": "myinfo@domain.com",
  "invoices": {
    "additionalProp1": [
      {
        "documentCode": "SI-0000041",
        "documentSequenceCode": "00000001",
        "dueAmount": 46,
        "id": 43,
        "invoiceDate": "2018-10-01",
        "invoiceDueDate": "2018-10-01",
        "memo": "test",
        "taxAmount": 1,
        "totalAmount": 46,
        "type": "sale_invoice"
      }
    ],
    "additionalProp2": [
      {
        "documentCode": "SI-0000041",
        "documentSequenceCode": "00000001",
        "dueAmount": 46,
        "id": 43,
        "invoiceDate": "2018-10-01",
        "invoiceDueDate": "2018-10-01",
        "memo": "test",
        "taxAmount": 1,
        "totalAmount": 46,
        "type": "sale_invoice"
      }
    ],
    "additionalProp3": [
      {
        "documentCode": "SI-0000041",
        "documentSequenceCode": "00000001",
        "dueAmount": 46,
        "id": 43,
        "invoiceDate": "2018-10-01",
        "invoiceDueDate": "2018-10-01",
        "memo": "test",
        "taxAmount": 1,
        "totalAmount": 46,
        "type": "sale_invoice"
      }
    ]
  },
  "name": "Sam",
  "payableAccountCode": "AC002",
  "paymentTermCode": "Net 0",
  "peppolId": "u000:11::11293",
  "receivableAccountCode": "AC001",
  "sequenceFormat": 1,
  "shippingAddress": [
    {
      "address1": "218, Robinson Road",
      "address2": "Downtown",
      "city": "C001",
      "country": "C001",
      "postalCode": 123456,
      "preferred": true,
      "state": "CS001"
    }
  ],
  "singaporeGovt": true,
  "taxExempted": true,
  "taxExemptionNo": "234s-few3-2422",
  "taxExemptionReason": "Resale, Federal Agency",
  "taxNumber": 123456,
  "uen": "DHJEUK"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactDto](#contactdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Retrieve Contact by Code
Get contact by code. [More about retrieve contact by code](https://deskera.docs.apiary.io/#reference/contact-apis/v1contactscodecode/get-contact-by-code)

##### Description:

- Allows you to retrieve an existing contact by code.

#### GET
#### /v1/contacts/codes/{code}
##### Request URL

```java
https://bifrost.deskera.com/v1/contacts/codes
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/contacts/codes" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "[ \"Paul\"]"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

##### Sample Response
```java
[
  {
    "attentionTo": "Peter Parker",
    "billingAddress": [
      {
        "address1": "218, Robinson Road",
        "address2": "Downtown",
        "city": "C001",
        "country": "C001",
        "postalCode": 123456,
        "preferred": true,
        "state": "CS001"
      }
    ],
    "businessUnit": "CAA01 - Cvl Avtn Authrty of Singapore",
    "currencyCode": "SGD",
    "customField": {
      "field1": "value1",
      "field2": "value2"
    },
    "documentSequenceCode": "C-0000001",
    "emailId": "myinfo@domain.com",
    "invoices": {
      "additionalProp1": [
        {
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "id": 43,
          "invoiceDate": "2018-10-01",
          "invoiceDueDate": "2018-10-01",
          "memo": "test",
          "taxAmount": 1,
          "totalAmount": 46,
          "type": "sale_invoice"
        }
      ],
      "additionalProp2": [
        {
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "id": 43,
          "invoiceDate": "2018-10-01",
          "invoiceDueDate": "2018-10-01",
          "memo": "test",
          "taxAmount": 1,
          "totalAmount": 46,
          "type": "sale_invoice"
        }
      ],
      "additionalProp3": [
        {
          "documentCode": "SI-0000041",
          "documentSequenceCode": "00000001",
          "dueAmount": 46,
          "id": 43,
          "invoiceDate": "2018-10-01",
          "invoiceDueDate": "2018-10-01",
          "memo": "test",
          "taxAmount": 1,
          "totalAmount": 46,
          "type": "sale_invoice"
        }
      ]
    },
    "name": "Sam",
    "payableAccountCode": "AC002",
    "paymentTermCode": "Net 0",
    "peppolId": "u000:11::11293",
    "receivableAccountCode": "AC001",
    "sequenceFormat": 1,
    "shippingAddress": [
      {
        "address1": "218, Robinson Road",
        "address2": "Downtown",
        "city": "C001",
        "country": "C001",
        "postalCode": 123456,
        "preferred": true,
        "state": "CS001"
      }
    ],
    "singaporeGovt": true,
    "taxExempted": true,
    "taxExemptionNo": "234s-few3-2422",
    "taxExemptionReason": "Resale, Federal Agency",
    "taxNumber": 123456,
    "uen": "DHJEUK"
  }
]
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactDto](#contactdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |
---
### Update Contact

Update contact information.  [More about update contact](https://deskera.docs.apiary.io/#reference/contact-apis/v1contactsid/update-contact-information)

##### Description:

- Allows you to update an existing contact information.

#### PUT
#### /v1/contacts/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/contacts/1
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/contacts/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"attentionTo\": \"Peter Parker\", \"billingAddress\": [ { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" } ], \"businessUnit\": \"CAA01 - Cvl Avtn Authrty of Singapore\", \"currencyCode\": \"SGD\", \"customField\": { \"field1\": \"value1\", \"field2\": \"value2\" }, \"documentSequenceCode\": \"C-0000001\", \"emailId\": \"myinfo@domain.com\", \"invoices\": { \"additionalProp1\": [ { \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"taxAmount\": 1, \"totalAmount\": 46, \"type\": \"sale_invoice\" } ], \"additionalProp2\": [ { \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"taxAmount\": 1, \"totalAmount\": 46, \"type\": \"sale_invoice\" } ], \"additionalProp3\": [ { \"documentCode\": \"SI-0000041\", \"documentSequenceCode\": \"00000001\", \"dueAmount\": 46, \"id\": 43, \"invoiceDate\": \"2018-10-01\", \"invoiceDueDate\": \"2018-10-01\", \"memo\": \"test\", \"taxAmount\": 1, \"totalAmount\": 46, \"type\": \"sale_invoice\" } ] }, \"name\": \"Sam\", \"payableAccountCode\": \"AC002\", \"paymentTermCode\": \"Net 0\", \"peppolId\": \"u000:11::11293\", \"receivableAccountCode\": \"AC001\", \"sequenceFormat\": 1, \"shippingAddress\": [ { \"address1\": \"218, Robinson Road\", \"address2\": \"Downtown\", \"city\": \"C001\", \"country\": \"C001\", \"postalCode\": 123456, \"preferred\": true, \"state\": \"CS001\" } ], \"singaporeGovt\": true, \"taxExempted\": true, \"taxExemptionNo\": \"234s-few3-2422\", \"taxExemptionReason\": \"Resale, Federal Agency\", \"taxNumber\": 123456, \"uen\": \"DHJEUK\"}"
```
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactDto | body | contactDto | Yes | [ContactDto](#contactdto) |
| id | path | id | Yes | long |

##### Sample Request
```java
{
  "attentionTo": "Peter Parker",
  "billingAddress": [
    {
      "address1": "218, Robinson Road",
      "address2": "Downtown",
      "city": "C001",
      "country": "C001",
      "postalCode": 123456,
      "preferred": true,
      "state": "CS001"
    }
  ],
  "businessUnit": "CAA01 - Cvl Avtn Authrty of Singapore",
  "currencyCode": "SGD",
  "customField": {
    "field1": "value1",
    "field2": "value2"
  },
  "documentSequenceCode": "C-0000001",
  "emailId": "myinfo@domain.com",
  "invoices": {
    "additionalProp1": [
      {
        "documentCode": "SI-0000041",
        "documentSequenceCode": "00000001",
        "dueAmount": 46,
        "id": 43,
        "invoiceDate": "2018-10-01",
        "invoiceDueDate": "2018-10-01",
        "memo": "test",
        "taxAmount": 1,
        "totalAmount": 46,
        "type": "sale_invoice"
      }
    ],
    "additionalProp2": [
      {
        "documentCode": "SI-0000041",
        "documentSequenceCode": "00000001",
        "dueAmount": 46,
        "id": 43,
        "invoiceDate": "2018-10-01",
        "invoiceDueDate": "2018-10-01",
        "memo": "test",
        "taxAmount": 1,
        "totalAmount": 46,
        "type": "sale_invoice"
      }
    ],
    "additionalProp3": [
      {
        "documentCode": "SI-0000041",
        "documentSequenceCode": "00000001",
        "dueAmount": 46,
        "id": 43,
        "invoiceDate": "2018-10-01",
        "invoiceDueDate": "2018-10-01",
        "memo": "test",
        "taxAmount": 1,
        "totalAmount": 46,
        "type": "sale_invoice"
      }
    ]
  },
  "name": "Sam",
  "payableAccountCode": "AC002",
  "paymentTermCode": "Net 0",
  "peppolId": "u000:11::11293",
  "receivableAccountCode": "AC001",
  "sequenceFormat": 1,
  "shippingAddress": [
    {
      "address1": "218, Robinson Road",
      "address2": "Downtown",
      "city": "C001",
      "country": "C001",
      "postalCode": 123456,
      "preferred": true,
      "state": "CS001"
    }
  ],
  "singaporeGovt": true,
  "taxExempted": true,
  "taxExemptionNo": "234s-few3-2422",
  "taxExemptionReason": "Resale, Federal Agency",
  "taxNumber": 123456,
  "uen": "DHJEUK"
}
```

##### Sample Response
```java
{
  "attentionTo": "Peter Parker",
  "billingAddress": [
    {
      "address1": "218, Robinson Road",
      "address2": "Downtown",
      "city": "C001",
      "country": "C001",
      "postalCode": 123456,
      "preferred": true,
      "state": "CS001"
    }
  ],
  "businessUnit": "CAA01 - Cvl Avtn Authrty of Singapore",
  "currencyCode": "SGD",
  "customField": {
    "field1": "value1",
    "field2": "value2"
  },
  "documentSequenceCode": "C-0000001",
  "emailId": "myinfo@domain.com",
  "invoices": {
    "additionalProp1": [
      {
        "documentCode": "SI-0000041",
        "documentSequenceCode": "00000001",
        "dueAmount": 46,
        "id": 43,
        "invoiceDate": "2018-10-01",
        "invoiceDueDate": "2018-10-01",
        "memo": "test",
        "taxAmount": 1,
        "totalAmount": 46,
        "type": "sale_invoice"
      }
    ],
    "additionalProp2": [
      {
        "documentCode": "SI-0000041",
        "documentSequenceCode": "00000001",
        "dueAmount": 46,
        "id": 43,
        "invoiceDate": "2018-10-01",
        "invoiceDueDate": "2018-10-01",
        "memo": "test",
        "taxAmount": 1,
        "totalAmount": 46,
        "type": "sale_invoice"
      }
    ],
    "additionalProp3": [
      {
        "documentCode": "SI-0000041",
        "documentSequenceCode": "00000001",
        "dueAmount": 46,
        "id": 43,
        "invoiceDate": "2018-10-01",
        "invoiceDueDate": "2018-10-01",
        "memo": "test",
        "taxAmount": 1,
        "totalAmount": 46,
        "type": "sale_invoice"
      }
    ]
  },
  "name": "Sam",
  "payableAccountCode": "AC002",
  "paymentTermCode": "Net 0",
  "peppolId": "u000:11::11293",
  "receivableAccountCode": "AC001",
  "sequenceFormat": 1,
  "shippingAddress": [
    {
      "address1": "218, Robinson Road",
      "address2": "Downtown",
      "city": "C001",
      "country": "C001",
      "postalCode": 123456,
      "preferred": true,
      "state": "CS001"
    }
  ],
  "singaporeGovt": true,
  "taxExempted": true,
  "taxExemptionNo": "234s-few3-2422",
  "taxExemptionReason": "Resale, Federal Agency",
  "taxNumber": 123456,
  "uen": "DHJEUK"
}
```
##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact has been updated successfully. | [ContactDto](#contactdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |



## Models
---

### ContactDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attentionTo | string | the contact name in the company | No |
| billingAddress | [ [Address](#address) ] | List of Billing Address. | No |
| businessUnit | string | indicates the contact is govt agency | No |
| currencyCode | string | Currency code | No |
| documentSequenceCode | string | Contact Sequence code | No |
| emailId | string | contact email address | No |
| name | string | Contact name | No |
| payableAccountCode | string | Payable account code | No |
| paymentTermCode | string | Payment term code | No |
| peppolId | string | Peppol ID | No |
| receivableAccountCode | string | Receivable account code | No |
| sequenceFormat | string | Sequence Format | No |
| shippingAddress | [ [Address](#address) ] | List of Shipping Address. | No |
| singaporeGovt | boolean | indicates the contact is govt agency | No |
| taxExempted | boolean | Denotes if customer is tax exempted | No |
| taxExemptionNo | string | Generated tax exemption number | No |
| taxExemptionReason | string | Tax exemption reason | No |
| taxNumber | string | Tax number | No |
| uen | string | Contact UEN | No |


### Address

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address1 | string | Address line 1 | No |
| address2 | string | Address line 2 | No |
| city | string | City | No |
| country | string | Country | No |
| postalCode | string | Postal Code | No |
| preferred | boolean | Is this a default address? | No |
| state | string | State | No |
