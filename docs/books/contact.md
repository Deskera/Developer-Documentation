---
id: contact
title: Contact Service
sidebar_label: Contact
---

`Contact` describe the customers and vendors, that are associated with the `Tenant`. You can create, update, retrieve, and delete [contacts](https://www.deskera.com/books/contacts/) by using API.
## Contact Object

### Attributes
---
|Attribute| Type | Description |
|---------|------|-------------|
|id        |`long`|Unique identifier for the contact.|
|code|`string`|Unique code assigned to the contact.|
|documentSequenceCode|`string`|Unique code associated with the contact.|
|sequenceFormat|`string`|Sequence format id.|
|name|`string`|Name of the contact.|
|receivableAccountCode|`string`|Account code of contact's account receivable.|
|payableAccountCode|`string`|Account code of contact's account payable.|
|isAccountNumberFlag|`boolean`|Has the value `true` if account number is being sent instead of account code or `false` otherwise.|
|currencyCode|`enum`|Currency code. Possible values for [currency code](#supported_currency_type).|
|paymentTermCode|`string`|Payment term code for contact.|
|paymentTerm|`string`|Payment term name for contact.|
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
|invoices        |`map`|Map of invoice type to the list of invoices associated with contact. Attributes of [Invoice](#invoice).|
|customField        |`list`|List of key-value pairs for custom field name and its value.|
|emailId|`string`|Email address of the contact.|
|contactMasterId|`string`|Unique identifier of the contact master record.|
|contactNumber|`string`|Contact phone number.|
|otherEmails|`string`|Other email addresses for the contact.|
|creditLimit|`BigDecimal`|Credit limit for the contact.|
|creditLimitInBaseCurrency|`BigDecimal`|Credit limit for the contact in the tenant's base currency.|
|isCreditLimitApplicable|`boolean`|Has the value `true` if a credit limit is applicable to the contact or `false` otherwise.|
|invoiceCreditLimitType|`enum`|Invoice credit limit type. Possible values for [credit limit type](#credit_limit_type).|
|isIncludeCurrentInvoice|`boolean`|Has the value `true` if the current invoice should be included in the credit limit check or `false` otherwise.|
|quotationCreditLimitType|`enum`|Quotation credit limit type. Possible values for [credit limit type](#credit_limit_type).|
|isIncludeCurrentQuotation|`boolean`|Has the value `true` if the current quotation should be included in the credit limit check or `false` otherwise.|
|salesOrderCreditLimitType|`enum`|Sales order credit limit type. Possible values for [credit limit type](#credit_limit_type).|
|isIncludeCurrentSalesOrder|`boolean`|Has the value `true` if the current sales order should be included in the credit limit check or `false` otherwise.|
|intercompanyType|`enum`|Contact type, either parent or subsidiary. Possible values for [contact type](#contact_type).|
|purchasePriceLists|`list`|Set of purchase price list ids applied to the contact.|
|salesPriceLists|`list`|Set of sales price list ids applied to the contact.|
|autoCharge|`boolean`|Has the value `true` if auto payment charge is enabled for the contact or `false` otherwise.|
|attachmentsWithLink|`list`|List of attachment details including download links.|
|salesPersonMaster|`list`|List of sales persons associated with the contact.|
|products|`list`|List of vendor products associated with the contact.|
|avalaraCustomerCode|`string`|Avlara customer code.|
|uen|`string`|UEN of contact.|
|taxNumber|`string`|Tax number of contact.|
|taxExempted|`boolean`|Has the value `true` if the contact is exempted from tax or `false` if the contact is not exempted from tax.|
|taxExemptionNo|`string`|Tax exemption number of contact.|
|taxExemptionReason|`string`|Tax exemption reason for contact.|
|peppolId|`string`|PeppolId of contact.|
|singaporeGovt|`boolean`|Has the value `true` if the contact is a Singapore government agency or `false` otherwise.|
|businessUnit|`string`|Business unit, when the contact is a Singapore government agency.|
|attentionTo|`string`|Contact name within a government agency.|
|extCompanyName|`string`|Company name from an external app the contact was synced from.|
|additionalPaymentInfo|`object`|Additional payment information for the contact.|
|is1099Eligible|`boolean`|Has the value `true` if the contact is 1099 eligible or `false` otherwise.|


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

### Delete Contact
Deletes an existing contact. You only need to supply the unique identifier that was returned upon contact creation.

#### Parameters
- contactId `long`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private ContactsApiClient contactsApiClient;

  public void deleteContact(long contactId, String accessToken){
    this.contactsApiClient.deleteContact(contactId, accessToken);
  }
```
---

### Get Contacts Summary
Returns a summary count of contacts, customers, and vendors.

#### Parameters
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private ContactsApiClient contactsApiClient;

  public ContactSummaryDto getContactsSummary(String accessToken){
    return this.contactsApiClient.getContactsSummary(accessToken);
  }
```


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
|customField        |`list`|List of key-value pairs for custom field name and its value.|

### Address
|Attribute|Type| Description|
|---------|----|------------|
|contactName|`string`|Name of the contact associated with the address.|
|address1|`string`|Address line 1.|
|address2|`string`|Address line 2.|
|country|`string`|Country.|
|countryCode|`string`|Country code.|
|state|`string`|State.|
|stateCode|`string`|State code.|
|city|`string`|City.|
|postalCode|`string`|Postal Code.|
|preferred|`boolean`|Has the value `true` if the address is default  or `false` if the address is not default address.|
|placeOfSupply|`string`|Place of supply.|
|destinationOfSupply|`string`|Destination of supply.|
|mobileCountryCode|`string`|Country code of the mobile number.|
|mobileNumber|`string`|Mobile number.|
|emailId|`string`|Email address.|
|customFields|`list`|List of key-value pairs for custom field name and its value.|

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

### ContactSummaryDto
|Attribute|Type| Description|
|---------|----|------------|
|total|`int`|Total number of contacts.|
|customer|`int`|Number of contacts that are customers.|
|vendor|`int`|Number of contacts that are vendors.|


## Enums
---
### CONTACT_STATUS
- ACTIVE
- INACTIVE

### CREDIT_LIMIT_TYPE
- IGNORE
- WARN
- BLOCK

### CONTACT_TYPE
- PARENT
- SUBSIDIARY

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
