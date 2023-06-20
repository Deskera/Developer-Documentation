---
id: contactapi
title: Contact APIs
sidebar_label: Contact
---
A [contact](https://www.deskera.com/sales/customer-relationship-management-contacts/) is a consumer of the product or service which is offered by your business. You can create, update and retrieve contacts by using API.

`ContactDto` help you to create a new contact, update a particular contact, retrieve contact, or get the list of all contacts.

More about [Contact API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-af0c88d9-5792-4a39-8413-63db40c1356c?ctx=documentation)

## API
---
### Search Contact

Get contacts by filter criteria. [More about search contact](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-af0c88d9-5792-4a39-8413-63db40c1356c?ctx=documentation)

##### Description:
- Allows you to retrieve a list of all contacts.
- Allows you to retrieve specific contact based on it's filter criteria.

#### GET
#### /v1/contacts
##### Request URL

[More about search contact](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-af0c88d9-5792-4a39-8413-63db40c1356c?ctx=documentation)

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

Create a new Contact. [More about create contact](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-af0c88d9-5792-4a39-8413-63db40c1356c?ctx=documentation)

##### Description:

- Allows you to create new contact.

#### POST
#### /v1/contacts

[More about create contact](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-af0c88d9-5792-4a39-8413-63db40c1356c?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactDto | body | contactDto | Yes | [ContactDto](#contactdto) |

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

Get contact by id. [More about retrieve contact by id](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-af0c88d9-5792-4a39-8413-63db40c1356c?ctx=documentation)

##### Description:

- Allows you to retrieve an existing contact details by it's id.

#### GET
#### Contacts {id}

[More about retrieve contact by id](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-af0c88d9-5792-4a39-8413-63db40c1356c?ctx=documentation)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

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
Get contact by code. [More about retrieve contact by code](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-af0c88d9-5792-4a39-8413-63db40c1356c?ctx=documentation)

##### Description:

- Allows you to retrieve an existing contact by code.

#### GET
#### Contacts code/{code}

[More about retrieve contact by code](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-af0c88d9-5792-4a39-8413-63db40c1356c?ctx=documentation)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| code | path | code | Yes | string |

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

Update contact information.  [More about update contact](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-af0c88d9-5792-4a39-8413-63db40c1356c?ctx=documentation)

##### Description:

- Allows you to update an existing contact information.

#### PUT
#### Contacts {id}

[More about update contact](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-af0c88d9-5792-4a39-8413-63db40c1356c?ctx=documentation)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| contactDto | body | contactDto | Yes | [ContactDto](#contactdto) |
| id | path | id | Yes | long |

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
---
### Delete Contact 

#### DELETE
#### Contacts {id}
##### Summary

Delete a contact

##### Description

Api to delete contact

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Contact has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Contact with id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
### Change Contacts Status

#### PATCH
#### Contacts codes/status
##### Summary

Change contact status in bulk

##### Description

Change contact status in bulk

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |
| status | query | status | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Bulk status update done successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
### Get Contacts Summary

#### GET
#### Contacts summary
##### Summary

Get contact summary

##### Description

API to get contact summary.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contacts summary have been fetched | [ContactSummaryDto](#contactsummarydto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |
---
### Bulk Delete Contacts

#### DELETE
#### Contacts bulk-delete
##### Summary

Delete contacts

##### Description

API to delete contacts in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactIds | body | contactIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Contact has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
### Get Withholding Taxes for a Contact

#### GET
#### Contacts il/withholdingTaxGroup
##### Summary

Get Withholding Tax Group.

##### Description

API to get Withholding Tax Group.

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
| 200 | Withholding Tax Group has been fetched successfully. | [WithHoldingTaxPaymentGroupIsraelDto](#withholdingtaxpaymentgroupisraeldto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
### Get Contact TDS Deductee Info

#### GET
#### Contacts in/tds-deductee
##### Summary

Get TDS Deductee info of a Contact.

##### Description

Get TDS Deductee info of a Contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched TDS Deductee successfully. | [TdsDeducteeResponse](#tdsdeducteeresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
### Get Payment Terms

#### GET
#### Contacts paymentTerms
##### Summary

Get Payment Terms.

##### Description

API to get Payment Terms.

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
| 200 | Payment term has been fetched successfully. | [PaymentTermResponseDto](#paymenttermresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## bank-details-controller
Bank Info APIs.

### Bankdetails

#### GET
##### Summary

Fetch Bank Info

##### Description

API to fetch existing contact Bank Details

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| type | query | type | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bank information have been fetched successfully. | [BankDetailsDto](#bankdetailsdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create Bank Info.

##### Description

API to create new bank info.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bankDetailsDto | body | bankDetailsDto | Yes | [BankDetailsDto](#bankdetailsdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BankDetailsDto](#bankdetailsdto) |
| 201 | Bank Info has been created successfully. | [BankDetailsDto](#bankdetailsdto) |
| 400 | Bank Info creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Bankdetails/{id}

#### PUT
##### Summary

Update Bank Info.

##### Description

API to update existing bank info.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bankDetailsDto | body | bankDetailsDto | Yes | [BankDetailsDto](#bankdetailsdto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bank Info has been updated successfully. | [BankDetailsDto](#bankdetailsdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Bank info with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## sg-controller
SG Controller

### /v1/contact/sg-uen/{uen}

#### GET
##### Summary

Check UEN

##### Description

Check UEN

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| uen | path | uen | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | UEN is registered for PEPPOL | boolean |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | UEN is not registered for PEPPOL |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---

### Contacts brief

#### GET
##### Summary

get contacts export

##### Description

request get contacts export by tenant and status.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | get contacts export successful. | [ [ContactDto](#contactdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts brief-details

#### GET
##### Summary

get contacts export

##### Description

request get contacts export by tenant and status.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | get contacts export successful. | [ [ContactDto](#contactdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts businessunits

#### GET
##### Summary

Fetch Govt's Business units

##### Description

API to fetch existing contacts.

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
| 200 | Contact's information have been fetched successfully. | [ContactDto](#contactdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts codes

#### POST
##### Summary

Fetch contacts by list of codes.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactDto](#contactdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided codes |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts contactmasters

#### POST
##### Summary

Fetch contacts by list of contact master ids.

##### Description

API to Fetch contacts by list of contact master ids.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactMasterIds | body | contactMasterIds | Yes | [ string (uuid) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactDto](#contactdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided contact masters |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts custom-fields

#### GET
##### Summary

Get custom field is used or not

##### Description

API to Get custom field is used or not

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

### Contacts details

#### POST
##### Summary

getContactDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts detailsbyaccount/{accountCode}

#### GET
##### Summary

Fetch contact details by account code

##### Description

Fetch contact details by account code used as receivable or payable account

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | path | accountCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts detailsbyids

#### POST
##### Summary

getContactDetailsByIds

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactIds | body | contactIds | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts detailsbyseqcodes

#### POST
##### Summary

getContactDetailsBySeqCodes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts import

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDtos | body | contactDtos | Yes | [ [ContactDto](#contactdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Contacts are imported successfully. | [ object ] |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts info

#### POST
##### Summary

Fetch contact details by codes

##### Description

Fetch contact details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactInformation](#contactinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts names

#### POST
##### Summary

Fetch contacts by list of names.

##### Description

API to fetch existing contact by names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactDto](#contactdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided names |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts proxyzapier

#### POST
##### Summary

Api proxy for Zapier service

##### Description

Api proxy for Zapier service

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| requestDto | body | requestDto | Yes | [ZapierRequestDto](#zapierrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ZapierResponseDto](#zapierresponsedto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |


### Contacts updateattribute/{code}

#### PATCH
##### Summary

Update contact attributes.

##### Description

API to update attributes of existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |
| contactAttributeUpdateDto | body | contactAttributeUpdateDto | Yes | [ContactAttributeUpdateDto](#contactattributeupdatedto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact attributes has been updated successfully. | [ContactDto](#contactdto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with code not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts {id}

#### GET
##### Summary

Fetch contact by id.

##### Description

API to fetch existing contact by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactDto](#contactdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update contact.

##### Description

API to update existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactDto](#contactdto) |
| id | path | id | Yes | long |

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
| --------------- | ------ |
| Authorization | global |

---
#### PATCH
##### Summary

Update contact attributes.

##### Description

API to update attributes of existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactAttributeUpdateDto | body | contactAttributeUpdateDto | Yes | [ContactAttributeUpdateDto](#contactattributeupdatedto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact attributes has been updated successfully. | [ContactDto](#contactdto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts {tenantId}

#### POST
##### Summary

Create demo Contacts.

##### Description

API to create demo contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

---
## contact-uae-controller
Contact APIs for UAE.

### Contacts ae

#### GET
##### Summary

Fetch contacts

##### Description

API to fetch existing contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| includeOpeningAmounts | query | includeOpeningAmounts | No | boolean |
| includeOweAmounts | query | includeOweAmounts | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactUaeDto](#contactuaedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

v1/contacts/ae

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactUaeDto](#contactuaedto) |

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
| --------------- | ------ |
| Authorization | global |

### Contacts ae/brief

#### GET
##### Summary

get contacts export

##### Description

request get contacts export by tenant and status.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | get contacts export successful. | [ [ContactUaeDto](#contactuaedto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ae/code/{code}

#### GET
##### Summary

Fetch contact by code.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactUaeDto](#contactuaedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ae/codes

#### POST
##### Summary

Fetch contacts by list of codes.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactUaeDto](#contactuaedto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided codes |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ae/codes/status

#### PATCH
##### Summary

Bulk status update

##### Description

Bulk status update

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |
| status | query | status | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Bulk status update done successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ae/details

#### POST
##### Summary

getContactDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ae/import

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDtos | body | contactDtos | Yes | [ [ContactUaeDto](#contactuaedto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Contacts are imported successfully. | [ object ] |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ae/names

#### POST
##### Summary

Fetch contacts by list of names.

##### Description

API to fetch existing contact by names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactUaeDto](#contactuaedto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided names |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ae/{id}

#### GET
##### Summary

Fetch contact by id.

##### Description

API to fetch existing contact by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactUaeDto](#contactuaedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update contact.

##### Description

API to update existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactUaeDto](#contactuaedto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact has been updated successfully. | [ContactUaeDto](#contactuaedto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete contacts

##### Description

Api to delete contact

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Contact has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Contact with id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update contact attributes.

##### Description

API to update attributes of existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactAttributeUpdateDto | body | contactAttributeUpdateDto | Yes | [ContactAttributeUpdateDto](#contactattributeupdatedto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact attributes has been updated successfully. | [ContactUaeDto](#contactuaedto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## contact-australia-controller
Contact APIs for Australia.

### Contacts au

#### GET
##### Summary

Fetch contacts

##### Description

API to fetch existing contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| includeOpeningAmounts | query | includeOpeningAmounts | No | boolean |
| includeOweAmounts | query | includeOweAmounts | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactAustraliaDto](#contactaustraliadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactAustraliaDto](#contactaustraliadto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ContactAustraliaDto](#contactaustraliadto) |
| 201 | Contact has been created successfully. | [ContactAustraliaDto](#contactaustraliadto) |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts au/brief

#### GET
##### Summary

get contacts export

##### Description

request get contacts export by tenant and status.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | get contacts export successful. | [ [ContactAustraliaDto](#contactaustraliadto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts au/businessunits

#### GET
##### Summary

Fetch Govt's Business units

##### Description

API to fetch existing contacts.

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
| 200 | Contact's information have been fetched successfully. | [ContactAustraliaDto](#contactaustraliadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts au/code/{code}

#### GET
##### Summary

Fetch contact by code.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactAustraliaDto](#contactaustraliadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts au/codes

#### POST
##### Summary

Fetch contacts by list of codes.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactAustraliaDto](#contactaustraliadto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided codes |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts au/codes/status

#### PATCH
##### Summary

Bulk status update

##### Description

Bulk status update

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |
| status | query | status | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Bulk status update done successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts au/custom-fields

#### GET
##### Summary

Get custom field is used or not

##### Description

API to Get custom field is used or not

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

### Contacts au/details

#### POST
##### Summary

getContactDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts au/detailsbyaccount/{accountCode}

#### GET
##### Summary

Fetch contact details by account code

##### Description

Fetch contact details by account code used as receivable or payable account

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | path | accountCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts au/detailsbyseqcodes

#### POST
##### Summary

getContactDetailsBySeqCodes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts au/import

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDtos | body | contactDtos | Yes | [ [ContactAustraliaDto](#contactaustraliadto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Contacts are imported successfully. | [ object ] |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts au/info

#### POST
##### Summary

Fetch contact details by codes

##### Description

Fetch contact details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactInformation](#contactinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts au/names

#### POST
##### Summary

Fetch contacts by list of names.

##### Description

API to fetch existing contact by names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactAustraliaDto](#contactaustraliadto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided names |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts au/{id}

#### GET
##### Summary

Fetch contact by id.

##### Description

API to fetch existing contact by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactAustraliaDto](#contactaustraliadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update contact.

##### Description

API to update existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactAustraliaDto](#contactaustraliadto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact has been updated successfully. | [ContactAustraliaDto](#contactaustraliadto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete contacts

##### Description

Api to delete contact

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Contact has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Contact with id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update contact attributes.

##### Description

API to update attributes of existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactAttributeUpdateDto | body | contactAttributeUpdateDto | Yes | [ContactAttributeUpdateDto](#contactattributeupdatedto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact attributes has been updated successfully. | [ContactAustraliaDto](#contactaustraliadto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts au/{tenantId}

#### POST
##### Summary

Create demo Contacts.

##### Description

API to create demo contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

---
## contact-be-controller
Contact APIs for Belgium.

### Contacts be

#### GET
##### Summary

Fetch contacts

##### Description

API to fetch existing contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| includeOpeningAmounts | query | includeOpeningAmounts | No | boolean |
| includeOweAmounts | query | includeOweAmounts | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactBEDto](#contactbedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactBEDto](#contactbedto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ContactBEDto](#contactbedto) |
| 201 | Contact has been created successfully. | [ContactBEDto](#contactbedto) |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts be/brief

#### GET
##### Summary

get contacts export

##### Description

request get contacts export by tenant and status.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | get contacts export successful. | [ [ContactBEDto](#contactbedto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts be/businessunits

#### GET
##### Summary

Fetch Govt's Business units

##### Description

API to fetch existing contacts.

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
| 200 | Contact's information have been fetched successfully. | [ContactBEDto](#contactbedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts be/code/{code}

#### GET
##### Summary

Fetch contact by code.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactBEDto](#contactbedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts be/codes

#### POST
##### Summary

Fetch contacts by list of codes.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactBEDto](#contactbedto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided codes |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts be/codes/status

#### PATCH
##### Summary

Bulk status update

##### Description

Bulk status update

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |
| status | query | status | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Bulk status update done successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts be/custom-fields

#### GET
##### Summary

Get custom field is used or not

##### Description

API to Get custom field is used or not

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

### Contacts be/details

#### POST
##### Summary

getContactDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts be/detailsbyaccount/{accountCode}

#### GET
##### Summary

Fetch contact details by account code

##### Description

Fetch contact details by account code used as receivable or payable account

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | path | accountCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts be/detailsbyseqcodes

#### POST
##### Summary

getContactDetailsBySeqCodes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts be/import

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDtos | body | contactDtos | Yes | [ [ContactBEDto](#contactbedto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Contacts are imported successfully. | [ object ] |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts be/info

#### POST
##### Summary

Fetch contact details by codes

##### Description

Fetch contact details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactInformation](#contactinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts be/names

#### POST
##### Summary

Fetch contacts by list of names.

##### Description

API to fetch existing contact by names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactBEDto](#contactbedto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided names |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts be/{id}

#### GET
##### Summary

Fetch contact by id.

##### Description

API to fetch existing contact by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactBEDto](#contactbedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update contact.

##### Description

API to update existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactBEDto](#contactbedto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact has been updated successfully. | [ContactBEDto](#contactbedto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete contacts

##### Description

Api to delete contact

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Contact has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Contact with id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update contact attributes.

##### Description

API to update attributes of existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactAttributeUpdateDto | body | contactAttributeUpdateDto | Yes | [ContactAttributeUpdateDto](#contactattributeupdatedto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact attributes has been updated successfully. | [ContactBEDto](#contactbedto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts be/{tenantId}

#### POST
##### Summary

Create demo Contacts.

##### Description

API to create demo contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

---
## contact-canada-controller
Contact APIs for Canada.

### Contacts ca

#### GET
##### Summary

Fetch contacts

##### Description

API to fetch existing contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| includeOpeningAmounts | query | includeOpeningAmounts | No | boolean |
| includeOweAmounts | query | includeOweAmounts | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactCanadaDto](#contactcanadadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactCanadaDto](#contactcanadadto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ContactCanadaDto](#contactcanadadto) |
| 201 | Contact has been created successfully. | [ContactCanadaDto](#contactcanadadto) |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ca/brief

#### GET
##### Summary

get contacts export

##### Description

request get contacts export by tenant and status.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | get contacts export successful. | [ [ContactCanadaDto](#contactcanadadto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ca/businessunits

#### GET
##### Summary

Fetch Govt's Business units

##### Description

API to fetch existing contacts.

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
| 200 | Contact's information have been fetched successfully. | [ContactCanadaDto](#contactcanadadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ca/code/{code}

#### GET
##### Summary

Fetch contact by code.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactCanadaDto](#contactcanadadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ca/codes

#### POST
##### Summary

Fetch contacts by list of codes.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactCanadaDto](#contactcanadadto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided codes |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ca/codes/status

#### PATCH
##### Summary

Bulk status update

##### Description

Bulk status update

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |
| status | query | status | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Bulk status update done successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ca/custom-fields

#### GET
##### Summary

Get custom field is used or not

##### Description

API to Get custom field is used or not

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

### Contacts ca/details

#### POST
##### Summary

getContactDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ca/detailsbyaccount/{accountCode}

#### GET
##### Summary

Fetch contact details by account code

##### Description

Fetch contact details by account code used as receivable or payable account

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | path | accountCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ca/detailsbyseqcodes

#### POST
##### Summary

getContactDetailsBySeqCodes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ca/import

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDtos | body | contactDtos | Yes | [ [ContactCanadaDto](#contactcanadadto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Contacts are imported successfully. | [ object ] |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ca/info

#### POST
##### Summary

Fetch contact details by codes

##### Description

Fetch contact details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactInformation](#contactinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ca/names

#### POST
##### Summary

Fetch contacts by list of names.

##### Description

API to fetch existing contact by names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactCanadaDto](#contactcanadadto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided names |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ca/{id}

#### GET
##### Summary

Fetch contact by id.

##### Description

API to fetch existing contact by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactCanadaDto](#contactcanadadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update contact.

##### Description

API to update existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactCanadaDto](#contactcanadadto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact has been updated successfully. | [ContactCanadaDto](#contactcanadadto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete contacts

##### Description

Api to delete contact

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Contact has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Contact with id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update contact attributes.

##### Description

API to update attributes of existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactAttributeUpdateDto | body | contactAttributeUpdateDto | Yes | [ContactAttributeUpdateDto](#contactattributeupdatedto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact attributes has been updated successfully. | [ContactCanadaDto](#contactcanadadto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ca/{tenantId}

#### POST
##### Summary

Create demo Contacts.

##### Description

API to create demo contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

---
## contact-germany-controller
Contact APIs for Germany.

### Contacts de

#### GET
##### Summary

Fetch contacts

##### Description

API to fetch existing contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| includeOpeningAmounts | query | includeOpeningAmounts | No | boolean |
| includeOweAmounts | query | includeOweAmounts | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactGermanyDto](#contactgermanydto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactGermanyDto](#contactgermanydto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ContactGermanyDto](#contactgermanydto) |
| 201 | Contact has been created successfully. | [ContactGermanyDto](#contactgermanydto) |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts de/brief

#### GET
##### Summary

get contacts export

##### Description

request get contacts export by tenant and status.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | get contacts export successful. | [ [ContactGermanyDto](#contactgermanydto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts de/businessunits

#### GET
##### Summary

Fetch Govt's Business units

##### Description

API to fetch existing contacts.

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
| 200 | Contact's information have been fetched successfully. | [ContactGermanyDto](#contactgermanydto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts de/code/{code}

#### GET
##### Summary

Fetch contact by code.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactGermanyDto](#contactgermanydto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts de/codes

#### POST
##### Summary

Fetch contacts by list of codes.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactGermanyDto](#contactgermanydto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided codes |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts de/codes/status

#### PATCH
##### Summary

Bulk status update

##### Description

Bulk status update

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |
| status | query | status | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Bulk status update done successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts de/custom-fields

#### GET
##### Summary

Get custom field is used or not

##### Description

API to Get custom field is used or not

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

### Contacts de/details

#### POST
##### Summary

getContactDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts de/detailsbyaccount/{accountCode}

#### GET
##### Summary

Fetch contact details by account code

##### Description

Fetch contact details by account code used as receivable or payable account

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | path | accountCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts de/detailsbyseqcodes

#### POST
##### Summary

getContactDetailsBySeqCodes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts de/import

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDtos | body | contactDtos | Yes | [ [ContactGermanyDto](#contactgermanydto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Contacts are imported successfully. | [ object ] |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts de/info

#### POST
##### Summary

Fetch contact details by codes

##### Description

Fetch contact details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactInformation](#contactinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts de/names

#### POST
##### Summary

Fetch contacts by list of names.

##### Description

API to fetch existing contact by names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactGermanyDto](#contactgermanydto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided names |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts de/{id}

#### GET
##### Summary

Fetch contact by id.

##### Description

API to fetch existing contact by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactGermanyDto](#contactgermanydto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update contact.

##### Description

API to update existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactGermanyDto](#contactgermanydto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact has been updated successfully. | [ContactGermanyDto](#contactgermanydto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete contacts

##### Description

Api to delete contact

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Contact has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Contact with id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update contact attributes.

##### Description

API to update attributes of existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactAttributeUpdateDto | body | contactAttributeUpdateDto | Yes | [ContactAttributeUpdateDto](#contactattributeupdatedto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact attributes has been updated successfully. | [ContactGermanyDto](#contactgermanydto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts de/{tenantId}

#### POST
##### Summary

Create demo Contacts.

##### Description

API to create demo contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

---
## migration-controller
Contact APIs.

### Contacts docseqcodemigration

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

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
| --------------- | ------ |
| Authorization | global |

---
## contact-indonesia-controller
Contact APIs for Indonesia.

### Contacts id

#### GET
##### Summary

Fetch contacts

##### Description

API to fetch existing contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| includeOpeningAmounts | query | includeOpeningAmounts | No | boolean |
| includeOweAmounts | query | includeOweAmounts | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactIndonesiaDto](#contactindonesiadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

v1/contacts/id

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactIndonesiaDto](#contactindonesiadto) |

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
| --------------- | ------ |
| Authorization | global |

### Contacts id/code/{code}

#### GET
##### Summary

Fetch contact by code.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactIndonesiaDto](#contactindonesiadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts id/codes

#### POST
##### Summary

Fetch contacts by list of codes.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactIndonesiaDto](#contactindonesiadto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided codes |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts id/codes/status

#### PATCH
##### Summary

Bulk status update

##### Description

Bulk status update

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |
| status | query | status | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Bulk status update done successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts id/details

#### POST
##### Summary

getContactDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts id/import

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDtos | body | contactDtos | Yes | [ [ContactIndonesiaDto](#contactindonesiadto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Contacts are imported successfully. | [ object ] |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts id/names

#### POST
##### Summary

Fetch contacts by list of names.

##### Description

API to fetch existing contact by names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactIndonesiaDto](#contactindonesiadto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided names |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts id/{id}

#### GET
##### Summary

Fetch contact by id.

##### Description

API to fetch existing contact by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactIndonesiaDto](#contactindonesiadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update contact.

##### Description

API to update existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactIndonesiaDto](#contactindonesiadto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact has been updated successfully. | [ContactIndonesiaDto](#contactindonesiadto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete contacts

##### Description

Api to delete contact

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Contact has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Contact with id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update contact attributes.

##### Description

API to update attributes of existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactAttributeUpdateDto | body | contactAttributeUpdateDto | Yes | [ContactAttributeUpdateDto](#contactattributeupdatedto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact attributes has been updated successfully. | [ContactIndonesiaDto](#contactindonesiadto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## contact-israel-controller
Contact APIs for Israel.

### Contacts il

#### GET
##### Summary

Fetch contacts

##### Description

API to fetch existing contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| includeOpeningAmounts | query | includeOpeningAmounts | No | boolean |
| includeOweAmounts | query | includeOweAmounts | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactIsraelDto](#contactisraeldto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

v1/contacts/ph

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactIsraelDto](#contactisraeldto) |

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
| --------------- | ------ |
| Authorization | global |

### Contacts il/brief

#### GET
##### Summary

get contacts export

##### Description

request get contacts export by tenant and status.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | get contacts export successful. | [ [ContactIsraelDto](#contactisraeldto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts il/bulk-delete

#### DELETE
##### Summary

Delete contacts

##### Description

Api to delete contacts in bulk

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactIds | body | contactIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | Contact has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts il/code/{code}

#### GET
##### Summary

Fetch contact by code.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactIsraelDto](#contactisraeldto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts il/codes

#### POST
##### Summary

Fetch contacts by list of codes.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactIsraelDto](#contactisraeldto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided codes |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts il/codes/status

#### PATCH
##### Summary

Bulk status update

##### Description

Bulk status update

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |
| status | query | status | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Bulk status update done successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts il/details

#### POST
##### Summary

getContactDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts il/import

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDtos | body | contactDtos | Yes | [ [ContactIsraelDto](#contactisraeldto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Contacts are imported successfully. | [ object ] |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts il/names

#### POST
##### Summary

Fetch contacts by list of names.

##### Description

API to fetch existing contact by names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactIsraelDto](#contactisraeldto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided names |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts il/{id}

#### GET
##### Summary

Fetch contact by id.

##### Description

API to fetch existing contact by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactIsraelDto](#contactisraeldto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update contact.

##### Description

API to update existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactIsraelDto](#contactisraeldto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact has been updated successfully. | [ContactIsraelDto](#contactisraeldto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete contacts

##### Description

Api to delete contact

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Contact has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Contact with id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update contact attributes.

##### Description

API to update attributes of existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactAttributeUpdateDto | body | contactAttributeUpdateDto | Yes | [ContactAttributeUpdateDto](#contactattributeupdatedto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact attributes has been updated successfully. | [ContactIsraelDto](#contactisraeldto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## with-holding-tax-payment-group-israel-controller
Withholding Tax Group APIs.

#### POST
##### Summary

Create Withholding Tax Group.

##### Description

API to Create Withholding Tax Group.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| withHoldingTaxGroupRequest | body | withHoldingTaxGroupRequest | Yes | [WithHoldingTaxPaymentGroupRequest](#withholdingtaxpaymentgrouprequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [WithHoldingTaxPaymentGroupIsraelDto](#withholdingtaxpaymentgroupisraeldto) |
| 201 | Withholding Tax Group has been updated successfully. | [WithHoldingTaxPaymentGroupIsraelDto](#withholdingtaxpaymentgroupisraeldto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts il/withholdingTaxGroup/all

#### GET
##### Summary

Fetch Withholding Tax Group.

##### Description

API to Fetch Withholding Tax Group.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Withholding Tax Group has been fetched successfully. | [WithHoldingTaxPaymentGroupIsraelDto](#withholdingtaxpaymentgroupisraeldto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts il/withholdingTaxGroup/{id}

#### GET
##### Summary

Get Withholding Tax Group by Id.

##### Description

API to Get Withholding Tax Group by Id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Withholding Tax Group has been fetched successfully. | [WithHoldingTaxPaymentGroupIsraelDto](#withholdingtaxpaymentgroupisraeldto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update Withholding Tax Group.

##### Description

API to Update Withholding Tax Group.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| withHoldingTaxGroupRequest | body | withHoldingTaxGroupRequest | Yes | [WithHoldingTaxPaymentGroupRequest](#withholdingtaxpaymentgrouprequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Withholding Tax Group has been update successfully. | [WithHoldingTaxPaymentGroupIsraelDto](#withholdingtaxpaymentgroupisraeldto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Withholding Tax Group.

##### Description

API to Delete Withholding Tax Group.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Withholding Tax Group has been deleted successfully. | [WithHoldingTaxPaymentGroupIsraelDto](#withholdingtaxpaymentgroupisraeldto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## contact-india-controller
Contact APIs for India.

### Contacts in

#### GET
##### Summary

Fetch contacts

##### Description

API to fetch existing contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| includeOpeningAmounts | query | includeOpeningAmounts | No | boolean |
| includeOweAmounts | query | includeOweAmounts | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactIndiaDto](#contactindiadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

v1/contacts/in

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactIndiaDto](#contactindiadto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ContactIndiaDto](#contactindiadto) |
| 201 | Contact has been created successfully. | [ContactIndiaDto](#contactindiadto) |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts in/brief

#### GET
##### Summary

get contacts export

##### Description

request get contacts export by tenant and status.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | get contacts export successful. | [ [ContactIndiaDto](#contactindiadto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts in/code/{code}

#### GET
##### Summary

Fetch contact by code.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactIndiaDto](#contactindiadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts in/codes

#### POST
##### Summary

Fetch contacts by list of codes.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactIndiaDto](#contactindiadto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided codes |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts in/codes/status

#### PATCH
##### Summary

Bulk status update

##### Description

Bulk status update

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |
| status | query | status | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Bulk status update done successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts in/details

#### POST
##### Summary

getContactDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts in/import

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDtos | body | contactDtos | Yes | [ [ContactIndiaDto](#contactindiadto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Contacts are imported successfully. | [ object ] |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts in/names

#### POST
##### Summary

Fetch contacts by list of names.

##### Description

API to fetch existing contact by names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactIndiaDto](#contactindiadto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided names |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create India Compliance TDS Deductee.

##### Description

Create India Compliance TDS Deductee.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tdsDeducteeIndiaRequest | body | tdsDeducteeIndiaRequest | Yes | [TdsDeducteeIndiaRequest](#tdsdeducteeindiarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TdsDeducteeResponse](#tdsdeducteeresponse) |
| 201 | TDS Deductee created successfully. | [TdsDeducteeResponse](#tdsdeducteeresponse) |
| 400 | TDS Deductee creation failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update India Compliance TDS Deductee.

##### Description

Update India Compliance TDS Deductee.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tdsDeducteeIndiaRequest | body | tdsDeducteeIndiaRequest | Yes | [TdsDeducteeIndiaRequest](#tdsdeducteeindiarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TdsDeducteeResponse](#tdsdeducteeresponse) |
| 201 | TDS Deductee updated successfully. | [TdsDeducteeResponse](#tdsdeducteeresponse) |
| 400 | TDS Deductee updation failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete TDS Deductee.

##### Description

Delete TDS Deductee.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| types | body | types | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | TDS Deductee has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | TDS deductee with type %s not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts in/tds-rate

#### GET
##### Summary

Get TDS rates.

##### Description

Get TDS rates.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched TDS rates successfully. | [TdsRateResponse](#tdsrateresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create India Compliance TDS Rate.

##### Description

Create India Compliance TDS Rate.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tdsRateIndiaRequest | body | tdsRateIndiaRequest | Yes | [TdsRateIndiaRequest](#tdsrateindiarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TdsRateResponse](#tdsrateresponse) |
| 201 | TDS rate created successfully. | [TdsRateResponse](#tdsrateresponse) |
| 400 | TDS rate creation failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update India Compliance TDS rate.

##### Description

Update India Compliance TDS rate.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tdsRateIndiaRequest | body | tdsRateIndiaRequest | Yes | [TdsRateIndiaRequest](#tdsrateindiarequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TdsRateResponse](#tdsrateresponse) |
| 201 | TDS rate updated successfully. | [TdsRateResponse](#tdsrateresponse) |
| 400 | TDS rate updation failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete TDS rate.

##### Description

Delete TDS rate.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 204 | TDS rate has been deleted successfully. | [ResponseEntity](#responseentity) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | TDS rate with id %d not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts in/tds-rate-detail

#### GET
##### Summary

fetch tds rate by nature of payment

##### Description

api to fetch tds rate by nature of payment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| deducteeType | query |  | No | string |
| documentDate | query |  | No | string |
| natureOfPayment | query |  | No | string |
| resident | query |  | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | tds rate fetched successfully | [TdsRateIndiaResponse](#tdsrateindiaresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | not able to find tds rate |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts in/tds-rate-details

#### POST
##### Summary

fetch tds rate by nature of payment

##### Description

api to fetch tds rate by nature of payment

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tdsRateRequest | body | tdsRateRequest | Yes | [TdsRateRequest](#tdsraterequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | tds rate fetched successfully | [TdsRateIndiaResponse](#tdsrateindiaresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | not able to find tds rate |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts in/{id}

#### GET
##### Summary

Fetch contact by id.

##### Description

API to fetch existing contact by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactIndiaDto](#contactindiadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update contact.

##### Description

API to update existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactIndiaDto](#contactindiadto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact has been updated successfully. | [ContactIndiaDto](#contactindiadto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete contacts

##### Description

Api to delete contact

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Contact has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Contact with id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update contact attributes.

##### Description

API to update attributes of existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactAttributeUpdateDto | body | contactAttributeUpdateDto | Yes | [ContactAttributeUpdateDto](#contactattributeupdatedto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact attributes has been updated successfully. | [ContactIndiaDto](#contactindiadto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## contact-malaysia-controller
Contact APIs for Malaysia.

### Contacts my

#### GET
##### Summary

Fetch contacts

##### Description

API to fetch existing contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| includeOpeningAmounts | query | includeOpeningAmounts | No | boolean |
| includeOweAmounts | query | includeOweAmounts | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactMalaysiaDto](#contactmalaysiadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

v1/contacts/my

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactMalaysiaDto](#contactmalaysiadto) |

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
| --------------- | ------ |
| Authorization | global |

### Contacts my/brief

#### GET
##### Summary

get contacts export

##### Description

request get contacts export by tenant and status.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | get contacts export successful. | [ [ContactMalaysiaDto](#contactmalaysiadto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts my/code/{code}

#### GET
##### Summary

Fetch contact by code.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactMalaysiaDto](#contactmalaysiadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts my/codes

#### POST
##### Summary

Fetch contacts by list of codes.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactMalaysiaDto](#contactmalaysiadto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided codes |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts my/codes/status

#### PATCH
##### Summary

Bulk status update

##### Description

Bulk status update

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |
| status | query | status | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Bulk status update done successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts my/details

#### POST
##### Summary

getContactDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts my/import

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDtos | body | contactDtos | Yes | [ [ContactMalaysiaDto](#contactmalaysiadto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Contacts are imported successfully. | [ object ] |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts my/names

#### POST
##### Summary

Fetch contacts by list of names.

##### Description

API to fetch existing contact by names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactMalaysiaDto](#contactmalaysiadto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided names |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts my/{id}

#### GET
##### Summary

Fetch contact by id.

##### Description

API to fetch existing contact by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactMalaysiaDto](#contactmalaysiadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update contact.

##### Description

API to update existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactMalaysiaDto](#contactmalaysiadto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact has been updated successfully. | [ContactMalaysiaDto](#contactmalaysiadto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete contacts

##### Description

Api to delete contact

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Contact has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Contact with id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update contact attributes.

##### Description

API to update attributes of existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactAttributeUpdateDto | body | contactAttributeUpdateDto | Yes | [ContactAttributeUpdateDto](#contactattributeupdatedto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact attributes has been updated successfully. | [ContactMalaysiaDto](#contactmalaysiadto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## contact-nl-controller
Contact APIs for Netherlands.

### Contacts nl

#### GET
##### Summary

Fetch contacts

##### Description

API to fetch existing contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| includeOpeningAmounts | query | includeOpeningAmounts | No | boolean |
| includeOweAmounts | query | includeOweAmounts | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactNLDto](#contactnldto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactNLDto](#contactnldto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ContactNLDto](#contactnldto) |
| 201 | Contact has been created successfully. | [ContactNLDto](#contactnldto) |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nl/brief

#### GET
##### Summary

get contacts export

##### Description

request get contacts export by tenant and status.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | get contacts export successful. | [ [ContactNLDto](#contactnldto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nl/businessunits

#### GET
##### Summary

Fetch Govt's Business units

##### Description

API to fetch existing contacts.

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
| 200 | Contact's information have been fetched successfully. | [ContactNLDto](#contactnldto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nl/code/{code}

#### GET
##### Summary

Fetch contact by code.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactNLDto](#contactnldto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nl/codes

#### POST
##### Summary

Fetch contacts by list of codes.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactNLDto](#contactnldto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided codes |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nl/codes/status

#### PATCH
##### Summary

Bulk status update

##### Description

Bulk status update

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |
| status | query | status | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Bulk status update done successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nl/custom-fields

#### GET
##### Summary

Get custom field is used or not

##### Description

API to Get custom field is used or not

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

### Contacts nl/details

#### POST
##### Summary

getContactDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nl/detailsbyaccount/{accountCode}

#### GET
##### Summary

Fetch contact details by account code

##### Description

Fetch contact details by account code used as receivable or payable account

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | path | accountCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nl/detailsbyseqcodes

#### POST
##### Summary

getContactDetailsBySeqCodes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nl/import

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDtos | body | contactDtos | Yes | [ [ContactNLDto](#contactnldto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Contacts are imported successfully. | [ object ] |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nl/info

#### POST
##### Summary

Fetch contact details by codes

##### Description

Fetch contact details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactInformation](#contactinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nl/names

#### POST
##### Summary

Fetch contacts by list of names.

##### Description

API to fetch existing contact by names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactNLDto](#contactnldto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided names |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nl/{id}

#### GET
##### Summary

Fetch contact by id.

##### Description

API to fetch existing contact by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactNLDto](#contactnldto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update contact.

##### Description

API to update existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactNLDto](#contactnldto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact has been updated successfully. | [ContactNLDto](#contactnldto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete contacts

##### Description

Api to delete contact

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Contact has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Contact with id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update contact attributes.

##### Description

API to update attributes of existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactAttributeUpdateDto | body | contactAttributeUpdateDto | Yes | [ContactAttributeUpdateDto](#contactattributeupdatedto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact attributes has been updated successfully. | [ContactNLDto](#contactnldto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nl/{tenantId}

#### POST
##### Summary

Create demo Contacts.

##### Description

API to create demo contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

---
## contact-nz-controller
Contact APIs for New Zealand.

### Contacts nz

#### GET
##### Summary

Fetch contacts

##### Description

API to fetch existing contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| includeOpeningAmounts | query | includeOpeningAmounts | No | boolean |
| includeOweAmounts | query | includeOweAmounts | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactNZDto](#contactnzdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactNZDto](#contactnzdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ContactNZDto](#contactnzdto) |
| 201 | Contact has been created successfully. | [ContactNZDto](#contactnzdto) |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nz/brief

#### GET
##### Summary

get contacts export

##### Description

request get contacts export by tenant and status.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | get contacts export successful. | [ [ContactNZDto](#contactnzdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nz/businessunits

#### GET
##### Summary

Fetch Govt's Business units

##### Description

API to fetch existing contacts.

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
| 200 | Contact's information have been fetched successfully. | [ContactNZDto](#contactnzdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nz/code/{code}

#### GET
##### Summary

Fetch contact by code.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactNZDto](#contactnzdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nz/codes

#### POST
##### Summary

Fetch contacts by list of codes.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactNZDto](#contactnzdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided codes |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nz/codes/status

#### PATCH
##### Summary

Bulk status update

##### Description

Bulk status update

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |
| status | query | status | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Bulk status update done successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nz/custom-fields

#### GET
##### Summary

Get custom field is used or not

##### Description

API to Get custom field is used or not

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

### Contacts nz/details

#### POST
##### Summary

getContactDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nz/detailsbyaccount/{accountCode}

#### GET
##### Summary

Fetch contact details by account code

##### Description

Fetch contact details by account code used as receivable or payable account

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | path | accountCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nz/detailsbyseqcodes

#### POST
##### Summary

getContactDetailsBySeqCodes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nz/import

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDtos | body | contactDtos | Yes | [ [ContactNZDto](#contactnzdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Contacts are imported successfully. | [ object ] |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nz/info

#### POST
##### Summary

Fetch contact details by codes

##### Description

Fetch contact details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactInformation](#contactinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nz/names

#### POST
##### Summary

Fetch contacts by list of names.

##### Description

API to fetch existing contact by names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactNZDto](#contactnzdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided names |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nz/{id}

#### GET
##### Summary

Fetch contact by id.

##### Description

API to fetch existing contact by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactNZDto](#contactnzdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update contact.

##### Description

API to update existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactNZDto](#contactnzdto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact has been updated successfully. | [ContactNZDto](#contactnzdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete contacts

##### Description

Api to delete contact

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Contact has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Contact with id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update contact attributes.

##### Description

API to update attributes of existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactAttributeUpdateDto | body | contactAttributeUpdateDto | Yes | [ContactAttributeUpdateDto](#contactattributeupdatedto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact attributes has been updated successfully. | [ContactNZDto](#contactnzdto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts nz/{tenantId}

#### POST
##### Summary

Create demo Contacts.

##### Description

API to create demo contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

---
## payment-term-controller
Payment Term APIs.

#### POST
##### Summary

Create Payment Term.

##### Description

API to Create Payment Term.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| paymentTermRequestDto | body | paymentTermRequestDto | Yes | [PaymentTermRequestDto](#paymenttermrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PaymentTermResponseDto](#paymenttermresponsedto) |
| 201 | Payment term has been updated successfully. | [PaymentTermResponseDto](#paymenttermresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Delete Payment Term.

##### Description

API to Delete Payment Term.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | query | id | Yes | long |
| paymentTermRequestDto | body | paymentTermRequestDto | Yes | [PaymentTermRequestDto](#paymenttermrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Payment term has been deleted successfully. | [PaymentTermResponseDto](#paymenttermresponsedto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Payment Term.

##### Description

API to Delete Payment Term.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | query | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Payment term has been deleted successfully. | [PaymentTermResponseDto](#paymenttermresponsedto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts paymentTerms/list

#### GET
##### Summary

Fetch Payment Term.

##### Description

API to Fetch Payment Term.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Payment term has been fetched successfully. | [PaymentTermResponseDto](#paymenttermresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts paymentTerms/termIds

#### POST
##### Summary

Get Payment Term Details.

##### Description

API to Get Payment Term Details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| termIds | body | termIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Payment term Details fetched successfully. | [PaymentTermResponseDto](#paymenttermresponsedto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## contact-philippines-controller
Contact APIs for Philippines.

### Contacts ph

#### GET
##### Summary

Fetch contacts

##### Description

API to fetch existing contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| includeOpeningAmounts | query | includeOpeningAmounts | No | boolean |
| includeOweAmounts | query | includeOweAmounts | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactPhilippinesDto](#contactphilippinesdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

v1/contacts/ph

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactPhilippinesDto](#contactphilippinesdto) |

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
| --------------- | ------ |
| Authorization | global |

### Contacts ph/code/{code}

#### GET
##### Summary

Fetch contact by code.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactPhilippinesDto](#contactphilippinesdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ph/codes

#### POST
##### Summary

Fetch contacts by list of codes.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactPhilippinesDto](#contactphilippinesdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided codes |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ph/codes/status

#### PATCH
##### Summary

Bulk status update

##### Description

Bulk status update

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |
| status | query | status | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Bulk status update done successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ph/details

#### POST
##### Summary

getContactDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ph/import

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDtos | body | contactDtos | Yes | [ [ContactPhilippinesDto](#contactphilippinesdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Contacts are imported successfully. | [ object ] |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ph/names

#### POST
##### Summary

Fetch contacts by list of names.

##### Description

API to fetch existing contact by names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactPhilippinesDto](#contactphilippinesdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided names |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts ph/{id}

#### GET
##### Summary

Fetch contact by id.

##### Description

API to fetch existing contact by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactPhilippinesDto](#contactphilippinesdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update contact.

##### Description

API to update existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactPhilippinesDto](#contactphilippinesdto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact has been updated successfully. | [ContactPhilippinesDto](#contactphilippinesdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete contacts

##### Description

Api to delete contact

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Contact has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Contact with id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update contact attributes.

##### Description

API to update attributes of existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactAttributeUpdateDto | body | contactAttributeUpdateDto | Yes | [ContactAttributeUpdateDto](#contactattributeupdatedto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact attributes has been updated successfully. | [ContactPhilippinesDto](#contactphilippinesdto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## contact-sa-controller
Contact APIs for Saudi Arabia.

### Contacts sa

#### GET
##### Summary

Fetch contacts

##### Description

API to fetch existing contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| includeOpeningAmounts | query | includeOpeningAmounts | No | boolean |
| includeOweAmounts | query | includeOweAmounts | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactSADto](#contactsadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactSADto](#contactsadto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ContactSADto](#contactsadto) |
| 201 | Contact has been created successfully. | [ContactSADto](#contactsadto) |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts sa/brief

#### GET
##### Summary

get contacts export

##### Description

request get contacts export by tenant and status.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | get contacts export successful. | [ [ContactSADto](#contactsadto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts sa/businessunits

#### GET
##### Summary

Fetch Govt's Business units

##### Description

API to fetch existing contacts.

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
| 200 | Contact's information have been fetched successfully. | [ContactSADto](#contactsadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts sa/code/{code}

#### GET
##### Summary

Fetch contact by code.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactSADto](#contactsadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts sa/codes

#### POST
##### Summary

Fetch contacts by list of codes.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactSADto](#contactsadto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided codes |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts sa/codes/status

#### PATCH
##### Summary

Bulk status update

##### Description

Bulk status update

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |
| status | query | status | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Bulk status update done successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts sa/custom-fields

#### GET
##### Summary

Get custom field is used or not

##### Description

API to Get custom field is used or not

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

### Contacts sa/details

#### POST
##### Summary

getContactDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts sa/detailsbyaccount/{accountCode}

#### GET
##### Summary

Fetch contact details by account code

##### Description

Fetch contact details by account code used as receivable or payable account

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | path | accountCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts sa/detailsbyseqcodes

#### POST
##### Summary

getContactDetailsBySeqCodes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts sa/import

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDtos | body | contactDtos | Yes | [ [ContactSADto](#contactsadto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Contacts are imported successfully. | [ object ] |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts sa/info

#### POST
##### Summary

Fetch contact details by codes

##### Description

Fetch contact details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactInformation](#contactinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts sa/names

#### POST
##### Summary

Fetch contacts by list of names.

##### Description

API to fetch existing contact by names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactSADto](#contactsadto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided names |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts sa/{id}

#### GET
##### Summary

Fetch contact by id.

##### Description

API to fetch existing contact by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactSADto](#contactsadto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update contact.

##### Description

API to update existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactSADto](#contactsadto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact has been updated successfully. | [ContactSADto](#contactsadto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete contacts

##### Description

Api to delete contact

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Contact has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Contact with id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update contact attributes.

##### Description

API to update attributes of existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactAttributeUpdateDto | body | contactAttributeUpdateDto | Yes | [ContactAttributeUpdateDto](#contactattributeupdatedto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact attributes has been updated successfully. | [ContactSADto](#contactsadto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts sa/{tenantId}

#### POST
##### Summary

Create demo Contacts.

##### Description

API to create demo contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

---
## contact-uk-controller
Contact APIs for UK.

### Contacts uk

#### GET
##### Summary

Fetch contacts

##### Description

API to fetch existing contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| customfield | query | customfield | No | string |
| includeOpeningAmounts | query | includeOpeningAmounts | No | boolean |
| includeOweAmounts | query | includeOweAmounts | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactUKDto](#contactukdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactUKDto](#contactukdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ContactUKDto](#contactukdto) |
| 201 | Contact has been created successfully. | [ContactUKDto](#contactukdto) |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts uk/brief

#### GET
##### Summary

get contacts export

##### Description

request get contacts export by tenant and status.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | get contacts export successful. | [ [ContactUKDto](#contactukdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts uk/businessunits

#### GET
##### Summary

Fetch Govt's Business units

##### Description

API to fetch existing contacts.

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
| 200 | Contact's information have been fetched successfully. | [ContactUKDto](#contactukdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts uk/code/{code}

#### GET
##### Summary

Fetch contact by code.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactUKDto](#contactukdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts uk/codes

#### POST
##### Summary

Fetch contacts by list of codes.

##### Description

API to fetch existing contact by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactUKDto](#contactukdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided codes |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts uk/codes/status

#### PATCH
##### Summary

Bulk status update

##### Description

Bulk status update

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |
| status | query | status | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Bulk status update done successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts uk/custom-fields

#### GET
##### Summary

Get custom field is used or not

##### Description

API to Get custom field is used or not

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

### Contacts uk/details

#### POST
##### Summary

getContactDetails

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts uk/detailsbyaccount/{accountCode}

#### GET
##### Summary

Fetch contact details by account code

##### Description

Fetch contact details by account code used as receivable or payable account

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountCode | path | accountCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts uk/detailsbyseqcodes

#### POST
##### Summary

getContactDetailsBySeqCodes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCodes | body | contactCodes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactDetails](#contactdetails) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts uk/import

#### POST
##### Summary

Contact.

##### Description

API to create new contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDtos | body | contactDtos | Yes | [ [ContactUKDto](#contactukdto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 201 | Contacts are imported successfully. | [ object ] |
| 400 | Contact creation failed because of insufficient data. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts uk/info

#### POST
##### Summary

Fetch contact details by codes

##### Description

Fetch contact details by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [ContactInformation](#contactinformation) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts uk/names

#### POST
##### Summary

Fetch contacts by list of names.

##### Description

API to fetch existing contact by names.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ [ContactUKDto](#contactukdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No contacts found with provided names |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts uk/{id}

#### GET
##### Summary

Fetch contact by id.

##### Description

API to fetch existing contact by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact's information have been fetched successfully. | [ContactUKDto](#contactukdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update contact.

##### Description

API to update existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactDto | body | contactDto | Yes | [ContactUKDto](#contactukdto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact has been updated successfully. | [ContactUKDto](#contactukdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete contacts

##### Description

Api to delete contact

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | Contact has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Contact with id not found. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update contact attributes.

##### Description

API to update attributes of existing contact.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactAttributeUpdateDto | body | contactAttributeUpdateDto | Yes | [ContactAttributeUpdateDto](#contactattributeupdatedto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact attributes has been updated successfully. | [ContactUKDto](#contactukdto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Contacts uk/{tenantId}

#### POST
##### Summary

Create demo Contacts.

##### Description

API to create demo contacts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
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
| --------------- | ------ |
| Authorization | global |

---
## Models

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

### BankDetailsDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountNumber | string | Contact bank account number<br/>*Example:* `"Test"` | Yes |
| bankName | string | Contact bank name<br/>*Example:* `"Test"` | Yes |
| contactCode | string | Contact Code.<br/>*Example:* `"C-000001"` | No |
| isDefault | boolean | Contact bank default flag<br/>*Example:* `false` | No |
| isTenantBank | boolean | Flag to determine whether this Bank details is for Tenant or Contact. <br/>*Example:* `false` | No |

### BankDetailsIsrael

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bankAccountNumber | string |  | No |
| bankCode | string |  | No |
| bankIbanCode | string |  | No |
| bankName | string |  | No |
| bankSwiftCode | string |  | No |
| branchAddress | string |  | No |
| branchName | string |  | No |
| branchNumber | string |  | No |

### BulkApiResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ object ] |  | No |
| statusCode | integer |  | No |
| success | [ object ] |  | No |

### BusinessUnitDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| businessUnitName | string | businessUnit name<br/>*Example:* `"AUD01 - Auditor-General's Office"` | No |

### ContactAttributeUpdateDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [ [Address](#address) ] | List of Billing Address. | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| customer | boolean | Is customer?<br/>*Example:* `true` | No |
| shippingAddress | [ [Address](#address) ] | List of Shipping Address. | No |
| status | string | Contact status<br/>*Enum:* `"ACTIVE"`, `"INACTIVE"`<br/>*Example:* `"INACTIVE"` | No |
| vendor | boolean | Is vendor?<br/>*Example:* `false` | No |

### ContactAustraliaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| australianBusinessNo | string | Australian Business No<br/>*Example:* `12345` | No |
| australianCompanyNo | string | Australian Company No<br/>*Example:* `12345` | No |
| billingAddress | [ [Address](#address) ] | List of Billing Address. | No |
| contactMasterId | string (uuid) | contact master id<br/>*Example:* `"2df7a5c1-3305-498d-8d01-aa92c42d19d2"` | No |
| contactNumber | string | Contact number<br/>*Example:* `"+65999999999"` | No |
| creditLimit | number | Credit Limit<br/>*Example:* `100` | No |
| creditLimitInBaseCurrency | number | Credit Limit In Org Currency<br/>*Example:* `100` | No |
| currencyCode | string | Currency code<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| documentSequenceCode | string | Contact Sequence code<br/>*Example:* `"C-0000001"` | No |
| emailId | string | contact email address<br/>*Example:* `"myinfo@domain.com"` | No |
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
| purchasePriceLists | [ long ] | Set of Purchase price lists<br/>*Example:* `[123,456]` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| receivableAccountCode | string | Receivable account code<br/>*Example:* `"AC001"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesPriceLists | [ long ] | Set of Sales price lists<br/>*Example:* `[123,456]` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| shippingAddress | [ [Address](#address) ] | List of Shipping Address. | No |

### ContactBEDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| beDefaultPurchaseTaxRate | string | *Example:* `"TAX"` | No |
| beDefaultSalesTaxRate | string | *Example:* `"TAX"` | No |
| beEnterpriseNo | string | Enterprise Number<br/>*Example:* `"111-111-111"` | No |
| beVatIdentificationNo | string | VAT Identification Number<br/>*Example:* `"111-111-111"` | No |
| billingAddress | [ [Address](#address) ] | List of Billing Address. | No |
| contactMasterId | string (uuid) | contact master id<br/>*Example:* `"2df7a5c1-3305-498d-8d01-aa92c42d19d2"` | No |
| contactNumber | string | Contact number<br/>*Example:* `"+65999999999"` | No |
| creditLimit | number | Credit Limit<br/>*Example:* `100` | No |
| creditLimitInBaseCurrency | number | Credit Limit In Org Currency<br/>*Example:* `100` | No |
| currencyCode | string | Currency code<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| documentSequenceCode | string | Contact Sequence code<br/>*Example:* `"C-0000001"` | No |
| emailId | string | contact email address<br/>*Example:* `"myinfo@domain.com"` | No |
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
| purchasePriceLists | [ long ] | Set of Purchase price lists<br/>*Example:* `[123,456]` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| receivableAccountCode | string | Receivable account code<br/>*Example:* `"AC001"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesPriceLists | [ long ] | Set of Sales price lists<br/>*Example:* `[123,456]` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| shippingAddress | [ [Address](#address) ] | List of Shipping Address. | No |

### ContactCanadaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [ [Address](#address) ] | List of Billing Address. | No |
| canadianBusinessNo | string | Canadian Business No<br/>*Example:* `12345` | No |
| canadianDefaultPurchaseTaxRate | string | *Example:* `12345` | No |
| canadianDefaultSalesTaxRate | string | *Example:* `12345` | No |
| canadianGstNo | string | Canadian GST No<br/>*Example:* `12345` | No |
| contactMasterId | string (uuid) | contact master id<br/>*Example:* `"2df7a5c1-3305-498d-8d01-aa92c42d19d2"` | No |
| contactNumber | string | Contact number<br/>*Example:* `"+65999999999"` | No |
| creditLimit | number | Credit Limit<br/>*Example:* `100` | No |
| creditLimitInBaseCurrency | number | Credit Limit In Org Currency<br/>*Example:* `100` | No |
| currencyCode | string | Currency code<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| documentSequenceCode | string | Contact Sequence code<br/>*Example:* `"C-0000001"` | No |
| emailId | string | contact email address<br/>*Example:* `"myinfo@domain.com"` | No |
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
| purchasePriceLists | [ long ] | Set of Purchase price lists<br/>*Example:* `[123,456]` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| receivableAccountCode | string | Receivable account code<br/>*Example:* `"AC001"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesPriceLists | [ long ] | Set of Sales price lists<br/>*Example:* `[123,456]` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| shippingAddress | [ [Address](#address) ] | List of Shipping Address. | No |

### ContactDetailInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactNumber | string | Contact number<br/>*Example:* `"Sam"` | No |
| emailId | string | Contact email<br/>*Example:* `"johndoe@deskera.com"` | No |
| id | long |  | No |
| name | string | Contact name<br/>*Example:* `"Sam"` | No |
| source | string | Source<br/>*Example:* `"BOOKS"` | No |
| sourceId | string | Source id<br/>*Example:* `"Sam"` | No |

### ContactDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| documentSeqCode | string |  | No |
| name | string |  | No |

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

### ContactEmailDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string | Contact Code<br/>*Example:* `"C-0000001"` | No |
| email | string | Contact Email<br/>*Example:* `"contact@abc.def"` | No |

### ContactGermanyDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [ [Address](#address) ] | List of Billing Address. | No |
| contactMasterId | string (uuid) | contact master id<br/>*Example:* `"2df7a5c1-3305-498d-8d01-aa92c42d19d2"` | No |
| contactNumber | string | Contact number<br/>*Example:* `"+65999999999"` | No |
| creditLimit | number | Credit Limit<br/>*Example:* `100` | No |
| creditLimitInBaseCurrency | number | Credit Limit In Org Currency<br/>*Example:* `100` | No |
| currencyCode | string | Currency code<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| documentSequenceCode | string | Contact Sequence code<br/>*Example:* `"C-0000001"` | No |
| emailId | string | contact email address<br/>*Example:* `"myinfo@domain.com"` | No |
| germanyBusinessCompanyNo | string | Germany Business registration No<br/>*Example:* `12345` | No |
| germanyDefaultPurchaseTaxRate | string | *Example:* `12345` | No |
| germanyDefaultSalesTaxRate | string | *Example:* `12345` | No |
| germanyVatIdentificationNo | string | Germany vat identification No<br/>*Example:* `12345` | No |
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
| purchasePriceLists | [ long ] | Set of Purchase price lists<br/>*Example:* `[123,456]` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| receivableAccountCode | string | Receivable account code<br/>*Example:* `"AC001"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesPriceLists | [ long ] | Set of Sales price lists<br/>*Example:* `[123,456]` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| shippingAddress | [ [Address](#address) ] | List of Shipping Address. | No |

### ContactIndiaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [ [Address](#address) ] | List of Billing Address. | No |
| contactMasterId | string (uuid) | contact master id<br/>*Example:* `"2df7a5c1-3305-498d-8d01-aa92c42d19d2"` | No |
| contactNumber | string | Contact number<br/>*Example:* `"+65999999999"` | No |
| creditLimit | number | Credit Limit<br/>*Example:* `100` | No |
| creditLimitInBaseCurrency | number | Credit Limit In Org Currency<br/>*Example:* `100` | No |
| currencyCode | string | Currency code<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| customerType | string | Customer Type<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"NA"` | No |
| documentSequenceCode | string | Contact Sequence code<br/>*Example:* `"C-0000001"` | No |
| emailId | string | contact email address<br/>*Example:* `"myinfo@domain.com"` | No |
| extCompanyName | string | the company name from external app<br/>*Example:* `"QuickBook"` | No |
| gstTreatment | string | GST treatment<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"UnregisteredBusiness"` | No |
| gstin | string | Contact GSTIN<br/>*Example:* `"21AONPM8088Q211"` | No |
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
| pan | string | Contact PAN<br/>*Example:* `"AONPM8088Q"` | No |
| payableAccountCode | string | Payable account code<br/>*Example:* `"AC002"` | No |
| paymentTermCode | string | Payment term code<br/>*Example:* `"Net 0"` | No |
| purchasePriceLists | [ long ] | Set of Purchase price lists<br/>*Example:* `[123,456]` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| receivableAccountCode | string | Receivable account code<br/>*Example:* `"AC001"` | No |
| resident | boolean | Is resident?<br/>*Example:* `true` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesPriceLists | [ long ] | Set of Sales price lists<br/>*Example:* `[123,456]` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| shippingAddress | [ [Address](#address) ] | List of Shipping Address. | No |
| tdsInfoIndia | [ContactIndiaTdsInfo](#contactindiatdsinfo) |  | No |
| tdsSectionToTdsRateId | long | Contact TDS Section to Tds Rate Id<br/>*Example:* `1213454` | No |
| vendorType | string | Vendor Type<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"NA"` | No |

### ContactIndiaTdsInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| considerThresholdLimit | boolean | Consider Exemption Limit can be a check box field<br/>*Example:* `true` | No |
| deducteeCode | string | Deductee Type<br/>*Example:* `"Artificial Juridicial Person"` | No |
| deducteeType | string | Deductee Type<br/>*Example:* `"Artificial Juridicial Person"` | No |
| deductionApplicable | boolean | This field can be visible only if PAN number is mentioned.<br/>*Example:* `true` | No |
| dttaApplicable | boolean |  | No |
| dttaFromDate | dateTime |  | No |
| dttaToDate | dateTime |  | No |
| higherRate | integer | Percentage value and can be visible only if PAN number is not mentioned.<br/>*Example:* `5` | No |
| noDeductionFromDate | dateTime | Start date field visible only if deductionApplicable field is true<br/>*Example:* `"01-01-2020"` | No |
| noDeductionReason | string | Choose reason only if deductionApplicable field is true.<br/>*Example:* `"TDS not to be made till the Basic Exemption is reached"` | No |
| noDeductionRefNo | string | Alphanumeric field and visible only if deductionApplicable field is true.<br/>*Example:* `"AAAAABBBB1100"` | No |
| noDeductionTdsRate | integer | Special rate override with TDS Rate setting and will be visible only if deductionApplicable field is true<br/>*Example:* `5` | No |
| noDeductionToDate | dateTime | End date field visible only if deductionApplicable field is true<br/>*Example:* `"31-12-2020"` | No |
| nonDeductionApplicable | boolean | This field can be visible only if PAN number is mentioned.<br/>*Example:* `true` | No |
| specialRate | integer |  | No |
| tan | string | Contact TAN<br/>*Example:* `"AAAA99999A"` | No |

### ContactIndonesiaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [ [Address](#address) ] | List of Billing Address. | No |
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
| nikNumber | long | NIK No<br/>*Example:* `123456789012345` | No |
| npwpNumber | long | NPWP No<br/>*Example:* `123456789012345` | No |
| payableAccountCode | string | Payable account code<br/>*Example:* `"AC002"` | No |
| paymentTermCode | string | Payment term code<br/>*Example:* `"Net 0"` | No |
| purchasePriceLists | [ long ] | Set of Purchase price lists<br/>*Example:* `[123,456]` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| receivableAccountCode | string | Receivable account code<br/>*Example:* `"AC001"` | No |
| residentStatusIndonesia | boolean | Resident Status<br/>*Example:* `true` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesPriceLists | [ long ] | Set of Sales price lists<br/>*Example:* `[123,456]` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| shippingAddress | [ [Address](#address) ] | List of Shipping Address. | No |
| taxTypeCustomer | string | Tax Types Customer<br/>*Enum:* `"TAX_CODE_CUSTOMER_01"`, `"TAX_CODE_CUSTOMER_02"`, `"TAX_CODE_CUSTOMER_03"`, `"TAX_CODE_CUSTOMER_04"`, `"TAX_CODE_CUSTOMER_05"`, `"TAX_CODE_CUSTOMER_06"`, `"TAX_CODE_CUSTOMER_07"`, `"TAX_CODE_CUSTOMER_08"`<br/>*Example:* `"TAX_CODE_CUSTOMER_01"` | No |
| taxTypeVendor | string | Tax Types Vendor<br/>*Enum:* `"TAX_CODE_VENDOR_01"`, `"TAX_CODE_VENDOR_02"`, `"TAX_CODE_VENDOR_03"`, `"TAX_CODE_VENDOR_04"`, `"TAX_CODE_VENDOR_05"`, `"TAX_CODE_VENDOR_06"`, `"TAX_CODE_VENDOR_07"`, `"TAX_CODE_VENDOR_08"`<br/>*Example:* `"TAX_CODE_VENDOR_01"` | No |

### ContactInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| beVatIdentificationNo | string | VAT Identification No<br/>*Example:* `123456789012345` | No |
| billingAddress | [ [Address](#address) ] | List of Billing Address. | No |
| birClassPhilippines | string | BIR class determines the type of business<br/>*Example:* `"Services"` | No |
| businessRegNo | string | Contact Business Registration No<br/>*Example:* `"W10-0108-000000021"` | No |
| contactMasterId | string (uuid) | contact master id<br/>*Example:* `"2df7a5c1-3305-498d-8d01-aa92c42d19d2"` | No |
| contactNumber | string | Contact number<br/>*Example:* `"+65999999999"` | No |
| creditLimit | number | Credit Limit<br/>*Example:* `100` | No |
| creditLimitInBaseCurrency | number | Credit Limit In Org Currency<br/>*Example:* `100` | No |
| currencyCode | string | Currency code<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| customerType | string | Customer Type<br/>*Enum:* `"EXPORT_WO_PAY"`, `"EXPORT_W_PAY"`, `"NA"`, `"SEZ_WO_PAY"`, `"SEZ_W_PAY"`<br/>*Example:* `"NA"` | No |
| customerTypeMalaysia | string | Customer Type<br/>*Enum:* `"NONE"`, `"EXPORT"`, `"SPECIAL_AREA"`, `"DESIGNATED_AREA"`, `"EXEMPTED_UNDER_SCHEDULE_A"`, `"EXEMPTED_UNDER_SCHEDULE_B"`, `"EXEMPTED_UNDER_SCHEDULE_C1_C2"`, `"EXEMPTED_UNDER_SCHEDULE_C3_C4"`, `"EXEMPTED_UNDER_SCHEDULE_C5"`<br/>*Example:* `"NONE(None)"` | No |
| customerTypePhilippines | string | Customer Type<br/>*Enum:* `"NORMAL_CORPORATE=Normal(Corporate)"`, `"NORMAL_INDIVIDUAL=Normal(Individual)"`, `"ZERO_RATED_CORPORATE=Zero rated(Corporate)"`, `"ZERO_RATED_INDIVIDUAL=Zero Rated (Individual)"`, `"NORMAL=Normal"`, `"GOVERNMENT=Government"`<br/>*Example:* `"Normal(Corporate)"` | No |
| deVatIdentificationNo | string | VAT Identification No<br/>*Example:* `123456789012345` | No |
| documentSequenceCode | string | Contact Sequence code<br/>*Example:* `"C-0000001"` | No |
| emailId | string | contact email address<br/>*Example:* `"myinfo@domain.com"` | No |
| exemptionCertificateMalaysia | boolean | Exemption certificate<br/>*Example:* `true` | No |
| exemptionCriterialMalaysia | string | Exemption criteria<br/>*Enum:* `"NONE"`, `"ZERO_RATED"`, `"EXEMPTED_ZERO"`<br/>*Example:* `"NONE(None)"` | No |
| gstTreatment | string | GST treatment<br/>*Enum:* `"REGISTERED_BUSINESS_REGULAR=Registered Business - Regular"`, `"REGISTERED_BUSINESS_COMPOSITION=Registered Business - Composition"`, `"UNREGISTERED_BUSINESS=Unregistered Business"`, `"CUSTOMER=Consumer"`, `"OVERSEAS=Overseas"`, `"SPECIAL_ECONOMIC_ZONE=Special Economic Zone"`, `"DEEMED_EXPORT=Deemed Export"`<br/>*Example:* `"UnregisteredBusiness"` | No |
| gstin | string | Contact GSTIN<br/>*Example:* `"21AONPM8088Q211"` | No |
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
| nikNumber | long | NIK No<br/>*Example:* `123456789012345` | No |
| nlVatIdentificationNo | string | VAT Identification No<br/>*Example:* `123456789012345` | No |
| npwpNumber | long | NPWP No<br/>*Example:* `123456789012345` | No |
| pan | string | Contact PAN<br/>*Example:* `"AONPM8088Q"` | No |
| payableAccountCode | string | Payable account code<br/>*Example:* `"AC002"` | No |
| paymentTermCode | string | Payment term code<br/>*Example:* `"Net 0"` | No |
| purchasePriceLists | [ long ] | Set of Purchase price lists<br/>*Example:* `[123,456]` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| receivableAccountCode | string | Receivable account code<br/>*Example:* `"AC001"` | No |
| resident | boolean | Is resident?<br/>*Example:* `true` | No |
| residentStatusIndonesia | boolean | Resident Status<br/>*Example:* `true` | No |
| saArabicDetails | [ContactSAArabicDto](#contactsaarabicdto) | Contact details in Arabic for Saudi Arabia | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesPriceLists | [ long ] | Set of Sales price lists<br/>*Example:* `[123,456]` | No |
| salesTaxRegNo | string | Contact Sales Tax Registration No<br/>*Example:* `"W10-0108-000000021"` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| serviceTaxRegNo | string | Contact Service Tax Registration No<br/>*Example:* `"W10-0108-000000021"` | No |
| shippingAddress | [ [Address](#address) ] | List of Shipping Address. | No |
| taxExempted | boolean |  | No |
| taxExemptionNo | string |  | No |
| taxExemptionReason | string |  | No |
| taxTreatment | string | Tax Treatment<br/>*Enum:* `"VAT_Registered"`, `"Non_VAT_Registered"`, `"GCC_VAT_Registered"`, `"GCC_Non_VAT_Registered"`, `"Non_GCC"`, `"VAT_Registered_Designated_Zone"`, `"Non_VAT_Registered_Designated_Zone"`<br/>*Example:* `"VAT_Registered"` | No |
| taxTypeCustomer | string | Tax Types Customer<br/>*Enum:* `"TAX_CODE_CUSTOMER_01"`, `"TAX_CODE_CUSTOMER_02"`, `"TAX_CODE_CUSTOMER_03"`, `"TAX_CODE_CUSTOMER_04"`, `"TAX_CODE_CUSTOMER_05"`, `"TAX_CODE_CUSTOMER_06"`, `"TAX_CODE_CUSTOMER_07"`, `"TAX_CODE_CUSTOMER_08"`<br/>*Example:* `"TAX_CODE_CUSTOMER_01"` | No |
| taxTypeVendor | string | Tax Types Vendor<br/>*Enum:* `"TAX_CODE_VENDOR_01"`, `"TAX_CODE_VENDOR_02"`, `"TAX_CODE_VENDOR_03"`, `"TAX_CODE_VENDOR_04"`, `"TAX_CODE_VENDOR_05"`, `"TAX_CODE_VENDOR_06"`, `"TAX_CODE_VENDOR_07"`, `"TAX_CODE_VENDOR_08"`<br/>*Example:* `"TAX_CODE_VENDOR_01"` | No |
| tdsApplicableIndia | boolean |  | No |
| tdsInfoIndia | [ContactIndiaTdsInfo](#contactindiatdsinfo) |  | No |
| tdsSectionToTdsRateId | long | Contact TDS Section to Tds Rate Id<br/>*Example:* `1213454` | No |
| vatExemptionReasonPhilippines | string | Philippines specific Contact VAT Exemption Reason<br/>*Example:* `"Reason"` | No |
| vatNoPhilippines | string | Philippines specific Contact VAT No.<br/>*Example:* `"012-345-678-910"` | No |
| vatRegistrationNo | string | VAT Registration No<br/>*Example:* `123456789012345` | No |
| vatStatusPhilippines | string | Philippines specific Contact VAT Status<br/>*Example:* `"Input VAT"` | No |
| vendorType | string | Vendor Type<br/>*Enum:* `"IMPORT"`, `"NA"`, `"SEZ_W_PAY"`, `"SEZ_WO_PAY"`<br/>*Example:* `"NA"` | No |
| vendorTypeMalaysia | string | Vendor Type<br/>*Enum:* `"NONE"`, `"SALES_TAX_EXEMPTION"`, `"MANUFACTURED_EXEMPTION"`, `"PERFORMED_EXEMPTION"`<br/>*Example:* `"NONE(None)"` | No |
| vendorTypePhilippines | string | Vendor Type<br/>*Enum:* `"NORMAL_CORPORATE=Normal(Corporate)"`, `"NORMAL_INDIVIDUAL=Normal(Individual)"`, `"ZERO_RATED_CORPORATE=Zero rated(Corporate)"`, `"ZERO_RATED_INDIVIDUAL=Zero Rated (Individual)"`, `"GOVERNMENT=Government"`, `"NORMAL=Normal"`, `"IMPORT=Import"`<br/>*Example:* `"Normal(Corporate)"` | No |
| whtApplicablePhilippines | boolean | Make Contact as WHT applicable<br/>*Example:* `true` | No |
| whtBusinessPhilippines | string | BIR class determines the type of business<br/>*Example:* `"Individual"` | No |

### ContactIsraelDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| assessingOfficerNumberIsrael | string | *Enum:* `"ASSESSING_OFFICER_NUMBER_01"`, `"ASSESSING_OFFICER_NUMBER_02"`, `"ASSESSING_OFFICER_NUMBER_04"`, `"ASSESSING_OFFICER_NUMBER_05"`, `"ASSESSING_OFFICER_NUMBER_06"`, `"ASSESSING_OFFICER_NUMBER_07"`, `"ASSESSING_OFFICER_NUMBER_10"`, `"ASSESSING_OFFICER_NUMBER_17"`, `"ASSESSING_OFFICER_NUMBER_21"`, `"ASSESSING_OFFICER_NUMBER_23"`, `"ASSESSING_OFFICER_NUMBER_24"`, `"ASSESSING_OFFICER_NUMBER_25"`, `"ASSESSING_OFFICER_NUMBER_26"`, `"ASSESSING_OFFICER_NUMBER_30"`, `"ASSESSING_OFFICER_NUMBER_31"`, `"ASSESSING_OFFICER_NUMBER_22"`, `"ASSESSING_OFFICER_NUMBER_34"`, `"ASSESSING_OFFICER_NUMBER_35"`, `"ASSESSING_OFFICER_NUMBER_37"`, `"ASSESSING_OFFICER_NUMBER_38"`, `"ASSESSING_OFFICER_NUMBER_39"`, `"ASSESSING_OFFICER_NUMBER_41"`, `"ASSESSING_OFFICER_NUMBER_50"`, `"ASSESSING_OFFICER_NUMBER_51"`, `"ASSESSING_OFFICER_NUMBER_52"`, `"ASSESSING_OFFICER_NUMBER_45"`, `"ASSESSING_OFFICER_NUMBER_43"`, `"ASSESSING_OFFICER_NUMBER_18"` | No |
| billingAddress | [ [Address](#address) ] | List of Billing Address. | No |
| contactMasterId | string (uuid) | contact master id<br/>*Example:* `"2df7a5c1-3305-498d-8d01-aa92c42d19d2"` | No |
| contactNumber | string | Contact number<br/>*Example:* `"+65999999999"` | No |
| creditLimit | number | Credit Limit<br/>*Example:* `100` | No |
| creditLimitInBaseCurrency | number | Credit Limit In Org Currency<br/>*Example:* `100` | No |
| currencyCode | string | Currency code<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| documentSequenceCode | string | Contact Sequence code<br/>*Example:* `"C-0000001"` | No |
| emailId | string | contact email address<br/>*Example:* `"myinfo@domain.com"` | No |
| intercompanyType | string | Contact Type either parent or subsidiary<br/>*Enum:* `"PARENT"`, `"SUBSIDIARY"`<br/>*Example:* `"PARENT/SUBSIDIARY"` | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| invoices | object |  | No |
| isAccountNumberFlag | boolean | indicates if user is sending account number or code<br/>*Example:* `true` | No |
| isCreditLimitApplicable | boolean | Contact credit limit applicable<br/>*Example:* `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>*Example:* `true` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>*Example:* `true` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>*Example:* `false` | No |
| isIncludedTaxReportingAtSourceIsrael | boolean |  | No |
| isParentCompany | boolean | Is Parent company<br/>*Example:* `false` | No |
| isSelfInvoicingIsrael | boolean |  | No |
| isSubsidiaryCompany | boolean | Is Subsidiary company<br/>*Example:* `false` | No |
| israelBankDetails | [ [BankDetailsIsrael](#bankdetailsisrael) ] |  | No |
| israelGlobalBankDetails | [ [GlobalBankDetailsIsrael](#globalbankdetailsisrael) ] |  | No |
| name | string | Contact name<br/>*Example:* `"Sam"` | No |
| payableAccountCode | string | Payable account code<br/>*Example:* `"AC002"` | No |
| paymentTermCode | string | Payment term code<br/>*Example:* `"Net 0"` | No |
| purchasePriceLists | [ long ] | Set of Purchase price lists<br/>*Example:* `[123,456]` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| receivableAccountCode | string | Receivable account code<br/>*Example:* `"AC001"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesPriceLists | [ long ] | Set of Sales price lists<br/>*Example:* `[123,456]` | No |
| sequenceFormat | string | Sequence Format<br/>*Example:* `1` | No |
| shippingAddress | [ [Address](#address) ] | List of Shipping Address. | No |
| taxCertificateValidityDateIsrael | date |  | No |
| taxNumber | string | Tax number<br/>*Example:* `123456` | No |
| taxPayerIdIsrael | string |  | No |
| typeOfCompanyIsrael | string | *Enum:* `"INDEPENDENT"`, `"COMPANY"`, `"A_RESIDENT_OF_THE_PALESTINIAN_AUTHORITY"`, `"AUTHORIZED_DEALER"`, `"FOREIGN_RESIDENT"`, `"INTERNATIONAL_COMPANY"` | No |
| whtApplicableIsrael | boolean | Make Contact as WHT applicable<br/>*Example:* `true` | No |
| withHoldingCertificatesIsrael | [ [WithHoldingCertificateIsrael](#withholdingcertificateisrael) ] |  | No |
| withHoldingTaxPaymentGroupIsraelId | long |  | No |
| withHoldingTaxTypeIsraelId | long |  | No |

### ContactMalaysiaDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [ [Address](#address) ] | List of Billing Address. | No |
| businessRegNo | string | Contact Business Registration No<br/>*Example:* `"W10-0108-000000021"` | No |
| contactMasterId | string (uuid) | contact master id<br/>*Example:* `"2df7a5c1-3305-498d-8d01-aa92c42d19d2"` | No |
| contactNumber | string | Contact number<br/>*Example:* `"+65999999999"` | No |
| creditLimit | number | Credit Limit<br/>*Example:* `100` | No |
| creditLimitInBaseCurrency | number | Credit Limit In Org Currency<br/>*Example:* `100` | No |
| currencyCode | string | Currency code<br/>*Enum:* `"AFN"`, `"ALL"`, `"DZD"`, `"AOA"`, `"ARS"`, `"AMD"`, `"AWG"`, `"AZN"`, `"BSD"`, `"BHD"`, `"BDT"`, `"BBD"`, `"BYN"`, `"BZD"`, `"BMD"`, `"BTN"`, `"BOB"`, `"BAM"`, `"BRL"`, `"BND"`, `"BGN"`, `"BIF"`, `"KHR"`, `"CAD"`, `"CVE"`, `"KYD"`, `"CLP"`, `"CNY"`, `"COP"`, `"KMF"`, `"CDF"`, `"CRC"`, `"CZK"`, `"HRK"`, `"CUC"`, `"DJF"`, `"DOP"`, `"EGP"`, `"ERN"`, `"ETB"`, `"FKP"`, `"FJD"`, `"XAF"`, `"GMD"`, `"GEL"`, `"GHS"`, `"GIP"`, `"DKK"`, `"GTQ"`, `"GNF"`, `"GYD"`, `"HTG"`, `"HNL"`, `"HKD"`, `"HUF"`, `"ISK"`, `"INR"`, `"IDR"`, `"IRR"`, `"IQD"`, `"JMD"`, `"JPY"`, `"JOD"`, `"KZT"`, `"KES"`, `"KWD"`, `"KGS"`, `"LAK"`, `"LBP"`, `"LSL"`, `"LRD"`, `"LYD"`, `"MOP"`, `"MKD"`, `"MGA"`, `"MWK"`, `"MYR"`, `"MVR"`, `"MRO"`, `"MUR"`, `"MXN"`, `"MDL"`, `"MNT"`, `"MZN"`, `"MMK"`, `"NAD"`, `"NPR"`, `"NIO"`, `"NGN"`, `"KPW"`, `"OMR"`, `"PKR"`, `"ILS"`, `"PAB"`, `"PGK"`, `"PYG"`, `"PEN"`, `"PHP"`, `"PLN"`, `"QAR"`, `"RON"`, `"RUB"`, `"RWF"`, `"SHP"`, `"XCD"`, `"WST"`, `"STD"`, `"SAR"`, `"RSD"`, `"SCR"`, `"SLL"`, `"SGD"`, `"ANG"`, `"SBD"`, `"SOS"`, `"ZAR"`, `"KRW"`, `"SSP"`, `"EUR"`, `"LKR"`, `"SDG"`, `"SRD"`, `"NOK"`, `"SZL"`, `"SEK"`, `"CHF"`, `"SYP"`, `"TWD"`, `"TJS"`, `"TZS"`, `"THB"`, `"XOF"`, `"NZD"`, `"TOP"`, `"TTD"`, `"TND"`, `"TRY"`, `"TMT"`, `"AUD"`, `"UGX"`, `"UAH"`, `"AED"`, `"GBP"`, `"USD"`, `"UYU"`, `"UZS"`, `"VUV"`, `"VEF"`, `"VND"`, `"XPF"`, `"MAD"`, `"YER"`, `"ZMW"`, `"BWP"`, `"CNH"`<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | JSON object for custom fields<br/>*Example:* `{"field1":"value1","field2":"value2"}` | No |
| customerTypeMalaysia | string | Customer Type<br/>*Enum:* `"NONE"`, `"EXPORT"`, `"SPECIAL_AREA"`, `"DESIGNATED_AREA"`, `"EXEMPTED_UNDER_SCHEDULE_A"`, `"EXEMPTED_UNDER_SCHEDULE_B"`, `"EXEMPTED_UNDER_SCHEDULE_C1_C2"`, `"EXEMPTED_UNDER_SCHEDULE_C3_C4"`, `"EXEMPTED_UNDER_SCHEDULE_C5"`<br/>*Example:* `"NONE(None)"` | No |
| documentSequenceCode | string | Contact Sequence code<br/>*Example:* `"C-0000001"` | No |
| emailId | string | contact email address<br/>*Example:* `"myinfo@domain.com"` | No |
| exemptionCertificateMalaysia | boolean | Exemption certificate<br/>*Example:* `true` | No |
| exemptionCriterialMalaysia | string | Exemption criteria<br/>*Enum:* `"NONE"`, `"ZERO_RATED"`, `"EXEMPTED_ZERO"`<br/>*Example:* `"NONE(None)"` | No |
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
| paymentTermCode | string | Payment term code<br/>*Example:* `"