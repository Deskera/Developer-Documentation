---
id: journal
title: Journal Entry Service
sidebar_label: Journal
---

`Journal Entry` is the fundamental accounting record used to log a financial transaction as a set of debit and credit lines that must balance to zero. Journal entries are created automatically by other documents (invoices, payments, fulfillments, etc.) or manually by a user, and they drive account balances used across [reports](reports) such as the General Ledger, Trial Balance, Profit and Loss, and Balance Sheet.

## JournalEntryRequest Object

### Attributes
---
|Attribute| Type | Description |
|---------|------|-------------|
|jeDate|`string`|Journal entry date.|
|memo|`string`|Memo of the journal entry.|
|currency|`string`|Currency code of the journal entry.|
|currencyExchangeRate|`BigDecimal`|Exchange rate.|
|primaryCurrencyExchangeRate|`BigDecimal`|Exchange rate against the tenant's primary currency.|
|reverseJeId|`long`|Identifier of the journal entry this entry reverses, if any.|
|parentJeId|`long`|Identifier of the parent journal entry, if any.|
|type|`enum`|Type of the journal entry. Possible values for [journal entry type](#journal_entry_type).|
|documentCode|`string`|Code of the source document that generated the journal entry.|
|documentSequenceCode|`string`|Sequence code of the source document that generated the journal entry.|
|contactCode|`string`|Contact code.|
|includeGSTReport|`boolean`|Has the value `true` if the journal entry should be included in the GST report or `false` otherwise.|
|generateCNDN|`boolean`|Has the value `true` if a credit note/debit note should be generated for the journal entry or `false` otherwise.|
|recurringJE|`boolean`|Has the value `true` if the journal entry is recurring or `false` otherwise.|
|recurringActivated|`boolean`|Has the value `true` if the recurring schedule is activated or `false` if it is de-activated.|
|nextJEDate|`string`|Next recurrence date.|
|opening|`boolean`|Has the value `true` if the journal entry is an opening entry or `false` otherwise.|
|customField|`list`|List of key-value pairs for custom field name and its value.|
|documentCustomField|`map`|Custom field values copied from the source document.|
|attachmentIds|`list`|List of attachment ids of the journal entry.|
|jeDocumentSequenceCode|`string`|Unique code associated with the journal entry.|
|sequenceFormat|`string`|Sequence format id.|
|interCompany|`boolean`|Has the value `true` if the journal entry is between inter-companies or `false` otherwise.|
|primaryPerspective|`boolean`|Has the value `true` if this record represents the primary-currency perspective of the journal entry.|
|perspective|`enum`|Perspective of the journal entry. Possible values for [perspective](#perspective).|
|isJEReEntered|`boolean`|Has the value `true` if the journal entry was re-entered or `false` otherwise.|
|isReverseJe|`boolean`|Has the value `true` if the journal entry is itself a reversal entry or `false` otherwise.|
|reversalJeCode|`string`|Code of the reversal journal entry, if any.|
|reversalJEDate|`string`|Date on which the journal entry was reversed, if any.|
|taxAdjustmentTypeSA|`string`|Tax adjustment type (Saudi Arabia).|
|taxReturnSectionSA|`string`|Tax return section (Saudi Arabia).|
|journalBillDetailsSA|`object`|Bill details for the journal entry (Saudi Arabia).|
|journalVATDetailsSA|`object`|VAT details for the journal entry (Saudi Arabia).|
|journalTaxDetailsIN|`object`|Tax details for the journal entry (India).|
|lineItems|`list`|List of debit/credit lines of the journal entry. Attributes of [Journal Entry Line Items](#journalentrylineitemsdto).|
|journalEntryRecurringDto|`object`|Recurring details for the journal entry. Attributes of [Journal Entry Recurring Details](#journalentryrecurringdto).|
|journalCnDnDto|`object`|Linked credit note/debit note details. Attributes of [Journal Cn/Dn](#journalcndndto).|

## API
---
### Create Journal Entry
Creates a new journal entry.

#### Parameters
- [journalEntryRequest](#journalentryrequest-object) `JournalEntryDetailRequestDto`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private JournalEntriesApiClient journalEntriesApiClient;

  public JournalEntryDetailResponseDto createJournalEntry(JournalEntryDetailRequestDto journalEntryRequest, String accessToken){
    return this.journalEntriesApiClient.createJournalEntry(journalEntryRequest, accessToken);
  }
```
---
### Retrieve Journal Entry
Retrieves the details of an existing journal entry. You only need to supply the unique journal entry code that was returned upon journal entry creation.

#### Parameters
- jeCode `string`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private JournalEntriesApiClient journalEntriesApiClient;

  public JournalEntryDetailResponseDto getJournalEntryByCode(String jeCode, String accessToken){
    return this.journalEntriesApiClient.getJournalEntryByCode(jeCode, accessToken);
  }
```
---
### List All Journal Entries
Returns a paginated list of journal entries.

#### Parameters
- [accessToken](#access-token) `string`
- search `string`
- customfield `string`
- sort `string`
- sortDir `string`
- page `int`
- limit `int`

#### Code

```java
  @Autowired
  private JournalEntriesApiClient journalEntriesApiClient;

  public Page<JournalEntryDetailResponseDto> getJournalEntries(String search, String customfield, String sort,
      String sortDir, Integer page, Integer limit, String accessToken){
    return this.journalEntriesApiClient.getJournalEntries(search, customfield, sort, sortDir, page, limit, accessToken);
  }
```
---
### Update Journal Entry
Updates the details of an existing journal entry.

#### Parameters
- id `long`
- [journalEntryRequest](#journalentryrequest-object) `JournalEntryDetailRequestDto`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private JournalEntriesApiClient journalEntriesApiClient;

  public Long updateJournalEntry(Long id, JournalEntryDetailRequestDto journalEntryRequest, String accessToken){
    return this.journalEntriesApiClient.updateJournalEntry(id, journalEntryRequest, accessToken);
  }
```
---
### Delete Journal Entry
Deletes an existing journal entry. You only need to supply the unique identifier that was returned upon journal entry creation.

#### Parameters
- id `long`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private JournalEntriesApiClient journalEntriesApiClient;

  public void deleteJournalEntry(Long id, String accessToken){
    this.journalEntriesApiClient.deleteJournalEntry(id, accessToken);
  }
```
---
### Reverse Journal Entry
Creates a reversal journal entry for an existing journal entry. Only journal entries of type `NORMAL_JE` or `BANK_TRANSFER` can be reversed.

#### Parameters
- id `long`
- jeDate `string`
- memo `string`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private JournalEntriesApiClient journalEntriesApiClient;

  public Long reverseJournalEntry(Long id, JournalEntryReverseRequestDto journalEntryReverseRequest, String accessToken){
    return this.journalEntriesApiClient.reverseJournalEntry(id, journalEntryReverseRequest, accessToken);
  }
```
---
### Create Journal Entries in Bulk
Creates multiple journal entries in a single request.

#### Parameters
- [journalEntryRequests](#journalentryrequest-object) `List<JournalEntryDetailRequestDto>`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private JournalEntriesApiClient journalEntriesApiClient;

  public BulkApiResponse createJournalEntries(List<JournalEntryDetailRequestDto> journalEntryRequests, String accessToken){
    return this.journalEntriesApiClient.createJournalEntries(journalEntryRequests, accessToken);
  }
```

## Objects
---

### JournalEntryLineItemsDto
A single debit or credit line of a journal entry.

|Attribute|Type| Description|
|---------|----|------------|
|id|`long`|Unique identifier for the line item.|
|cdType|`enum`|Credit/debit indicator of the line item. Possible values for [credit debit type](#credit_debit_type).|
|amount|`BigDecimal`|Amount of the line item.|
|amountInDocumentCurrency|`BigDecimal`|Amount of the line item in the document's currency.|
|description|`string`|Description of the line item.|
|accountCode|`string`|Account code of the line item.|
|accountName|`string`|Account name of the line item.|
|code|`string`|Display code of the account.|
|parentAccount|`string`|Parent account code, if any.|
|contactCode|`string`|Contact code linked to the line item.|
|contactName|`string`|Contact name linked to the line item.|
|customField|`list`|List of key-value pairs for custom field name and its value.|
|lineNumber|`int`|Line number of the line item.|
|lineItemCode|`long`|Unique code of the line item.|
|exchangeRate|`BigDecimal`|Exchange rate applied to the line item.|
|generateCN|`boolean`|Has the value `true` if a credit note should be generated for the line item or `false` otherwise.|
|generateDN|`boolean`|Has the value `true` if a debit note should be generated for the line item or `false` otherwise.|
|cndnId|`long`|Identifier of the linked credit note/debit note.|
|cndnCode|`string`|Code of the linked credit note/debit note.|
|isExtraCost|`boolean`|Has the value `true` if the line item represents an extra cost or `false` otherwise.|
|includeInValuation|`boolean`|Has the value `true` if the line item should be included in inventory valuation or `false` otherwise.|
|gstTypeIndia|`enum`|GST type of the line item (India). Possible values for [GST type India](#gst_type_india).|
|jeLineItemMetaData|`object`|Tax metadata for the line item. Attributes of [JE Line Item Meta Data](#jelineitemmetadata).|

### JELineItemMetaData
Tax metadata attached to a journal entry line item.

|Attribute|Type| Description|
|---------|----|------------|
|taxName|`string`|Name of the tax.|
|taxSequence|`string`|Sequence code of the tax.|
|taxCode|`string`|Tax code.|
|taxPercent|`BigDecimal`|Tax percentage.|
|contactName|`string`|Contact name associated with the tax line.|
|baseAmount|`BigDecimal`|Base amount the tax was calculated on.|
|isAdditionalTaxDetailsIN|`boolean`|Has the value `true` if additional India tax details are present.|
|jeLineItemAdditionalDetailsIN|`object`|Additional tax details for the line item (India).|

### JournalEntryRecurringDto
Recurring schedule details for a journal entry.

|Attribute|Type| Description|
|---------|----|------------|
|journalEntryID|`long`|Identifier of the journal entry this recurring schedule belongs to.|
|recurrenceType|`int`|Every x Days/Weeks/Months.|
|recurrenceFrequency|`enum`|Recurrence frequency. Possible values for [recurring frequency type](#recurring_frequency_type).|
|jeRecurringCount|`int`|Number of journal entries to be created.|
|recurrenceEndDate|`string`|Recurrence end date.|
|memo|`list`|List of memos to use for each generated recurring journal entry.|

### JournalCnDnDto
Credit note/debit note reference linked to a journal entry.

|Attribute|Type| Description|
|---------|----|------------|
|creditNoteNumber|`string`|Credit note number linked to the journal entry.|
|debitNoteNumber|`string`|Debit note number linked to the journal entry.|

## Enums
---
### JOURNAL_ENTRY_TYPE
- NORMAL_JE
- ADJUSTMENT
- BANK_TRANSFER
- PARTY_JE
- SALES_INVOICE
- PURCHASE_INVOICE
- INVENTORY_VARIANCE_ADJUSTMENT
- DISHONOURED_CHEQUE
- MAKE_PAYMENT
- RECEIVE_PAYMENT
- GOODS_RECEIVED_NOTE
- INVENTORY
- DELIVERY_ORDER
- CREDIT_NOTE
- DEBIT_NOTE
- FULFILLMENT
- GOOD_RECEIPT
- BOM_ASSEMBLY
- FIXED_ASSET
- SALES_RETURN
- PURCHASE_RETURN
- SALES_CONTRA
- PURCHASE_CONTRA
- BANK_DEPOSIT
- FINANCIAL_YEAR_CLOSING
- TDS_JE
- PAYROLL
- CONTRACTOR_PAYROLL
- EXPENSE_CLAIM
- REVALUATION
- ASSET_GOOD_RECEIPT
- FIXED_ASSET_BILL
- REVENUE_ARRANGEMENT
- AMORTIZATION
- REVENUE_ARRANGEMENT_UNBILLED_RECEIVABLE_ADJUSTMENT
- REVENUE_SCHEDULE_RECLASSIFICATION
- REVENUE_CARVE_OUT
- REVENUE_UNBILLED_RECEIVABLE_ADJUSTMENT_REVERSAL
- ALLOCATION
- SALES_REFUND
- BOOK_SPECIFIC_JE

### CREDIT_DEBIT_TYPE
- CREDIT
- DEBIT

### PERSPECTIVE
- STATUTORY
- PRIMARY

### GST_TYPE_INDIA
- CGST
- SGST
- IGST
- CESS

### RECURRING_FREQUENCY_TYPE
- DAYS
- WEEK
- MONTH

### TRANSFER_TYPE
- BANK_TRANSFER
- GIRO
- CASH
- CHEQUE
- CARD
- ACH
- OTHERS
