---
id: contact
title: Contact Service
sidebar_label: Contact
---

`Contact` describe the customers and vendors, that are associated with the `Tenant`. You can create, update and retrieve [contacts](https://www.deskera.com/books/contacts/) by using API.
## Contact Object

### Attributes
---
|Attribute| Type | Description |
|---------|------|-------------|
|id        |`long`|Unique identifier for the contact.|
|code|`string`|Unique code assigned to the contact.|
|name|`string`|Name of the contact.|
|receivableAccountCode|`string`|Account code of contact's account receivable.|
|payableAccountCode|`string`|Account code of contact's account payable.|
|currencyCode|`enum`|Currency code. Possible values for [currency code](#supported_currency_type).|
|paymentTermCode|`string`|Payment term for contact.|
|billingAddress|`list`|List of billing addresses for contact. Attributes for [Address](#address).|
|shippingAddress|`list`|List of shipping addresses for contact. Attributes for [Address](#address).|
|status|`enum`|Status of the contact. Possible values for [contact status](#contact_status).|
|customer|`boolean`|Has the value `true` if the contact is customer or `false` if the contact is not customer.|
|vendor|`boolean`|Has the value `true` if the contact is vendor or `false` if the contact is not vendor.|
|deleted|`boolean`|Has the value `true` if the contact is deleted or `false` if the contact is not deleted.|
|tenantId        |`long`|Tenant id to whom contact is associated with.|
|theyOweYou        |`BigDecimal`|Amount owe by others for contact.|
|youOweThem        |`BigDecimal`|Amount that contact owe to others.|
|totalNetAmount        |`BigDecimal`|Receivable account opening amount.|
|totalBillAmount        |`BigDecimal`|Payable account opening amount.|
|invoices        |`list`|List of invoices associated with contact. Attributes of [Invoice](#invoice).|
|customField        |`jsonobject`|Key-value pair for custom field name and its value|
|avalaraCustomerCode|`string`|Avlara customer code.|
|uen|`string`|UEN of contact.|
|taxNumber|`string`|Tax number of contact.|
|taxExempted|`boolean`|Has the value `true` if the contact is exempted from tax or `false` if the contact is not exempted from tax.|
|taxExemptionNo|`string`|Tax exemption number of contact.|
|taxExemptionReason|`string`|Tax exemption reason for contact.|
|peppolId|`string`|PeppolId of contact.|


## API
---
### Create Contact
Creates a new contact.

#### Parameters
- [contactDto](#contact-object) `ContactDto`
- [accessToken](#access-token) `string`

#### Code
```java
  @Autowired
  private ContactsApiClient contactsApiClient;

  public ContactDto createContact(ContactDto contactDto, String accessToken){
    return this.contactsApiClient.createContact(contactDto, accessToken);
  }
```
---
### Retrieve Contact
Retrieves the details of an existing contact. You only need to supply the unique contact code that was returned upon contact creation.

#### Parameters
- contactCode `string`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private ContactsApiClient contactsApiClient;

  public ContactDto retrieveContactByCode(String contactCode, String accessToken){
    return this.contactsApiClient.getClientByCode(contactCode, accessToken);
  }
```
---

### List All Contacts
Returns list of contacts.

#### Parameters
- [accessToken](#access-token) `string`
- limit `int`

#### Code

```java
  @Autowired
  private ContactsApiClient contactsApiClient;

  public List<ContactDto> getContacts(String accessToken, int limit){
    return this.contactsApiClient.getAllContacts(accessToken, limit);
  }
```
---
### Update Contact
Updates the specified contact by passing parameters with unique identified id of the contact.

#### Parameters
- contactId `long`
- [contactDto](#contact-object) `ContactDto`
- [accessToken](#access-token) `string`

#### Code

```java

  @Autowired
  private ContactsApiClient contactsApiClient;

  public ContactDto updateContact(long contactId, ContactDto contactDto, String accessToken){
    return this.contactsApiClient.updateContact(contactId, contactDto, accessToken);
  }
```
---

### Patch Update Contact
Updates the specified contact by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
#### Parameters
- contactId `long`
- [contactAttributeUpdateDto](#contactattributeupdatedto) `ContactAttributeUpdateDto`
- [accessToken](#access-token) `string`

#### Code

```java

  @Autowired
  private ContactsApiClient contactsApiClient;

  public ContactAttributeUpdateDto updateContactAttribute(long contactId, ContactAttributeUpdateDto contactAttributeUpdateDto, String accessToken){
    return this.contactsApiClient.updateContactAttributes(contactId, contactAttributeUpdateDto, accessToken);
  }
```
---


## Objects
---

### ContactAttributeUpdateDto
|Attribute|Type| Description|
|---------|----|------------|
|billingAddress|`list`|List of billing addresses for contact. Attributes for [Address](#address).|
|shippingAddress|`list`|List of shipping addresses for contact. Attributes for [Address](#address).|
|status|`enum`|Status of the contact. Possible values for [contact status](#contact_status).|
|customer|`boolean`|Has the value `true` if the contact is customer or `false` if the contact is not customer.|
|vendor|`boolean`|Has the value `true` if the contact is vendor or `false` if the contact is not vendor.|
|customField        |`jsonobject`|Key-value pair for custom field name and its value.|

### Address
|Attribute|Type| Description|
|---------|----|------------|
|address1|`string`|Address line 1.|
|address2|`string`|Address line 2.|
|country|`string`|Country.|
|state|`string`|State.|
|city|`string`|City.|
|postalCode|`string`|Postal Code.|
|preferred|`boolean`|Has the value `true` if the address is default  or `false` if the address is not default address.|

### Invoice
|Attribute|Type| Description|
|---------|----|------------|
|id|`long`|Unique identifier for the invoice.|
|invoiceDate|`date`|Invoice date.|
|invoiceDueDate|`date`|Invoice due date.|
|memo|`string`|Invoice memo.|
|documentCode|`string`|Document code of invoice.|
|totalAmount|`BigDecimal`|Total amount of invoice.|
|dueAmount|`BigDecimal`|Due amount of invoice.|
|taxAmount|`BigDecimal`|Tax amount of invoice.|
|type|`string`|`sale_invoice` for invoice or `purchase invoice` for bill.|


## Enums
---
### CONTACT_STATUS
- ACTIVE
- INACTIVE

### SUPPORTED_CURRENCY_TYPE
- AFN
- ALL
- DZD
- AOA
- ARS
- AMD
- AWG
- AZN
- BSD
- BHD
- BDT
- BBD
- BYN
- BZD
- BMD
- BTN
- BOB
- BAM
- BRL
- BND
- BGN
- BIF
- KHR
- CAD
- CVE
- KYD
- CLP
- CNY
- COP
- KMF
- CDF
- CRC
- HRK
- CUC
- DJF
- DOP
- EGP
- ERN
- ETB
- FKP
- FJD
- XAF
- GMD
- GEL
- GHS
- GIP
- DKK
- GTQ
- GNF
- GYD
- HTG
- HNL
- HKD
- HUF
- ISK
- INR
- IDR
- IRR
- IQD
- JMD
- JPY
- JOD
- KZT
- KES
- KWD
- KGS
- LAK
- LBP
- LSL
- LRD
- LYD
- MOP
- MKD
- MGA
- MWK
- MYR
- MVR
- MRO
- MUR
- MXN
- MDL
- MNT
- MZN
- MMK
- NAD
- NPR
- NIO
- NGN
- KPW
- OMR
- PKR
- ILS
- PAB
- PGK
- PYG
- PEN
- PHP
- PLN
- QAR
- RON
- RUB
- RWF
- SHP
- XCD
- WST
- STD
- SAR
- RSD
- SCR
- SLL
- SGD
- ANG
- SBD
- SOS
- ZAR
- KRW
- SSP
- EUR
- LKR
- SDG
- SRD
- NOK
- SZL
- SEK
- CHF
- SYP
- TWD
- TJS
- TZS
- THB
- XOF
- NZD
- TOP
- TTD
- TND
- TRY
- TMT
- AUD
- UGX
- UAH
- AED
- GBP
- USD
- UYU
- VUV
- VEF
- VND
- XPF
- MAD
- YER
- ZMW
- BWP
- CNH





 

