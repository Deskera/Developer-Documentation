---
id: reports
title: Reports Service
sidebar_label: Reports
---

`Reports` gives you access to Deskera Books' core financial reports — General Ledger, Trial Balance, Profit and Loss, and Balance Sheet. These reports summarize your accounting data over a given date range and accounting basis (accrual or cash), letting you monitor account balances, business performance, and the overall financial position of your company.

## API
---
### Get General Ledger
Returns account balances and period movement for a given date range. Supports filtering by account group, specific account codes, and currency.

#### Parameters
- fromDate `Date`
- toDate `Date`
- accountGroupId `long`
- customfield `string`
- [basis](#accounting_basis) `string`
- accountCodes `list`
- amountInPrimaryCurrency `boolean`
- baseCurrency `string`
- primaryCurrency `string`
- page `int`
- limit `int`
- budget `boolean`
- currencyCodes `list`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private ReportsApiClient reportsApiClient;

  public Page<AccountGLInfo> getGeneralLedgerReport(Date fromDate, Date toDate, Long accountGroupId, String customfield,
      ACCOUNTING_BASIS basis, List<String> accountCodes, Boolean amountInPrimaryCurrency, String baseCurrency,
      String primaryCurrency, Integer page, Integer limit, Boolean budget, List<String> currencyCodes, String accessToken){
    return this.reportsApiClient.getGeneralLedgerReport(fromDate, toDate, accountGroupId, customfield, basis,
        accountCodes, amountInPrimaryCurrency, baseCurrency, primaryCurrency, page, limit, budget, currencyCodes, accessToken);
  }
```
---
### Get General Ledger Detail
Returns the journal entry line items that make up the General Ledger balance for a single account.

#### Parameters
- account `string`
- fromDate `Date`
- toDate `Date`
- customfield `string`
- contactCodes `list`
- amountInPrimaryCurrency `boolean`
- baseCurrency `string`
- primaryCurrency `string`
- page `int`
- limit `int`
- sortDir `string`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private ReportsApiClient reportsApiClient;

  public List<JournalEntryDetails> getGeneralLedgerDetail(String account, Date fromDate, Date toDate, String customfield,
      Set<String> contactCodes, Boolean amountInPrimaryCurrency, String baseCurrency, String primaryCurrency,
      Integer page, Integer limit, String sortDir, String accessToken){
    return this.reportsApiClient.getGeneralLedgerDetail(account, fromDate, toDate, customfield, contactCodes,
        amountInPrimaryCurrency, baseCurrency, primaryCurrency, page, limit, sortDir, accessToken);
  }
```
---
### Get Trial Balance
Returns a snapshot of opening, debit, credit, and closing balances for every account over a given date range.

#### Parameters
- fromDate `Date`
- toDate `Date`
- customfield `string`
- [basis](#accounting_basis) `string`
- amountInPrimaryCurrency `boolean`
- baseCurrency `string`
- primaryCurrency `string`
- sort `string`
- sortDir `string`
- optimisedFetch `boolean`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private ReportsApiClient reportsApiClient;

  public TrialBalanceDetailsDto getTrialBalanceReport(Date fromDate, Date toDate, String customfield, ACCOUNTING_BASIS basis,
      Boolean amountInPrimaryCurrency, String baseCurrency, String primaryCurrency, String sort, String sortDir,
      Boolean optimisedFetch, String accessToken){
    return this.reportsApiClient.getTrialBalanceReport(fromDate, toDate, customfield, basis, amountInPrimaryCurrency,
        baseCurrency, primaryCurrency, sort, sortDir, optimisedFetch, accessToken);
  }
```
---
### Get Profit and Loss
Returns income, cost of goods sold, expenses, and net profit/loss for the requested period(s), grouped into a nested account hierarchy.

#### Parameters
- [customViewRequest](#customviewrequest) `CustomViewRequest`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private ReportsApiClient reportsApiClient;

  public PNLCustomViewGrouping getProfitAndLossReport(CustomViewRequest customViewRequest, String accessToken){
    return this.reportsApiClient.getProfitAndLossReport(customViewRequest, accessToken);
  }
```
---
### Get Balance Sheet
Returns assets, liabilities, and equity as of the requested period(s), grouped into a nested account hierarchy.

#### Parameters
- [customViewRequest](#customviewrequest) `CustomViewRequest`
- [accessToken](#access-token) `string`

#### Code

```java
  @Autowired
  private ReportsApiClient reportsApiClient;

  public BalanceSheetInfoCustomGroupingView getBalanceSheetReport(CustomViewRequest customViewRequest, String accessToken){
    return this.reportsApiClient.getBalanceSheetReport(customViewRequest, accessToken);
  }
```
## Objects
---

### AccountGLInfo
Account-level General Ledger balance, returned by [Get General Ledger](#get-general-ledger).

|Attribute|Type| Description|
|---------|----|------------|
|code|`string`|Row code.|
|accountCode|`string`|Account code.|
|accountName|`string`|Account name.|
|accountGroup|`string`|Account group name.|
|openingAmount|`BigDecimal`|Opening balance amount.|
|openingAmountInAccountCurrency|`BigDecimal`|Opening balance amount in the account's currency.|
|openingBalanceType|`string`|Opening balance credit/debit indicator.|
|periodAmount|`BigDecimal`|Net movement amount for the period.|
|periodAmountInAccountCurrency|`BigDecimal`|Net movement amount in the account's currency.|
|endingAmount|`BigDecimal`|Closing balance amount.|
|endingAmountInAccountCurrency|`BigDecimal`|Closing balance amount in the account's currency.|
|periodAmountInPrimaryCurrency|`BigDecimal`|Net movement amount in the tenant's primary currency.|
|openingAmountInPrimaryCurrency|`BigDecimal`|Opening balance amount in the tenant's primary currency.|
|endingAmountInPrimaryCurrency|`BigDecimal`|Closing balance amount in the tenant's primary currency.|
|accountNature|`string`|Nature of the account (e.g. Asset, Liability).|
|accountCurrency|`string`|Currency code of the account.|
|accountid|`long`|Unique identifier of the account.|
|parentAccount|`long`|Identifier of the parent account, if any.|
|groupid|`long`|Identifier of the account group.|
|subGroup|`long`|Identifier of the account sub-group.|
|subGroupName|`string`|Name of the account sub-group.|
|group|`boolean`|Has the value `true` if this row represents an account group rather than an individual account.|
|budget|`object`|Budget details for the account, if requested.|
|jeData|`array`|Journal entry details contributing to this account's balance, when requested.|
|isRevalued|`boolean`|Has the value `true` if the account balance includes a currency revaluation.|

### JournalEntryDetails
A single journal entry line item, returned by [Get General Ledger Detail](#get-general-ledger-detail).

|Attribute|Type| Description|
|---------|----|------------|
|documentCode|`string`|Code of the source document.|
|documentSequenceCode|`string`|Sequence code of the source document.|
|jeCode|`string`|Journal entry code.|
|memo|`string`|Memo of the journal entry.|
|description|`string`|Description of the journal entry line.|
|amount|`BigDecimal`|Amount of the journal entry line.|
|amountInDocumentCurrency|`BigDecimal`|Amount in the document's currency.|
|currencyExchangeRate|`BigDecimal`|Exchange rate applied to the journal entry line.|
|transactionType|`enum`|Credit/debit indicator for the journal entry line.|
|currency|`enum`|Currency of the journal entry line.|
|jeDate|`string`|Journal entry date.|
|date|`Date`|Date of the journal entry line.|
|debitAmount|`BigDecimal`|Debit amount of the journal entry line.|
|creditAmount|`BigDecimal`|Credit amount of the journal entry line.|
|balance|`BigDecimal`|Running balance after this journal entry line.|
|balanceInDocumentCurrency|`BigDecimal`|Running balance in the document's currency.|
|contactCode|`string`|Contact code linked to the journal entry line.|
|contactSeqCode|`string`|Contact sequence code.|
|contactName|`string`|Contact name.|
|documentType|`enum`|Type of the source document.|

### TrialBalanceDetailsDto
Response of [Get Trial Balance](#get-trial-balance).

|Attribute|Type| Description|
|---------|----|------------|
|trialBalanceDetailDto|`list`|List of account balances. Attributes of [TrialBalanceDetailDto](#trialbalancedetaildto).|
|totalCreditAmount|`BigDecimal`|Total credit amount across all accounts.|
|totalDebitAmount|`BigDecimal`|Total debit amount across all accounts.|
|diffOpeningBalance|`BigDecimal`|Difference in opening balance, if any.|

### TrialBalanceDetailDto
A single account row within [TrialBalanceDetailsDto](#trialbalancedetailsdto).

|Attribute|Type| Description|
|---------|----|------------|
|name|`string`|Account name.|
|group|`string`|Account group name.|
|code|`string`|Account code.|
|accountCode|`string`|Account code.|
|amount|`BigDecimal`|Account balance amount.|
|cdType|`enum`|Credit/debit indicator of the balance.|
|totalBalance|`BigDecimal`|Total balance of the account.|
|openingBalance|`BigDecimal`|Opening balance of the account.|
|openingBalanceCdType|`enum`|Credit/debit indicator of the opening balance.|
|totalBalanceCdType|`enum`|Credit/debit indicator of the total balance.|
|debitAmount|`BigDecimal`|Debit amount of the account.|
|creditAmount|`BigDecimal`|Credit amount of the account.|

### CustomViewRequest
Request body used by [Get Profit and Loss](#get-profit-and-loss) and [Get Balance Sheet](#get-balance-sheet).

|Attribute|Type| Description|
|---------|----|------------|
|vId|`long`|Identifier of a saved custom view.|
|vName|`string`|Name of a saved custom view.|
|save|`boolean`|Has the value `true` to save this request as a custom view.|
|isPeriodView|`boolean`|Has the value `true` if the report is broken down by period.|
|periods|`list`|List of reporting periods. Attributes of [Period](#period).|
|fileFormat|[enum](#exportfileformat)|File format, used when the report is exported.|
|exportDetails|`boolean`|Has the value `true` to include line-level detail in an export.|
|basis|[enum](#accounting_basis)|Accounting basis. Defaults to `ACCRUAL`.|
|columnBy|[enum](#columnby)|How report columns are grouped. Defaults to `TOTAL_ONLY`.|
|departmentLevel1CF|`string`|Custom field code for department level 1.|
|departmentLevel2CF|`string`|Custom field code for department level 2.|
|departmentLevel3CF|`string`|Custom field code for department level 3.|
|dateMacro|[enum](#datemacro)|Predefined date range shortcut. Defaults to `ALL_DATES`.|
|strict|`boolean`|Has the value `true` to apply strict date filtering.|
|budget|`boolean`|Has the value `true` to include budget data.|
|sortDir|`string`|Sort direction.|
|startDate|`string`|Start date of the report (`dd-MM-yyyy`).|
|endDate|`string`|End date of the report (`dd-MM-yyyy`).|
|custom_field|`string`|Custom field filter.|
|accounts|`list`|List of account codes to filter by.|
|contacts|`list`|List of contact codes to filter by.|
|products|`list`|List of product codes to filter by.|
|amountInPrimaryCurrency|`boolean`|Has the value `true` if amounts should be shown in the tenant's primary currency.|
|primaryCurrency|`string`|Primary currency code.|
|baseCurrency|`string`|Base currency code.|
|optimisedFetch|`boolean`|Has the value `true` to use the optimised data fetch path. Defaults to `true`.|

### Period
A single reporting period within [CustomViewRequest](#customviewrequest).

|Attribute|Type| Description|
|---------|----|------------|
|fromDate|`Date`|Start date of the period.|
|toDate|`Date`|End date of the period.|
|periodName|`string`|Display name of the period.|
|bookBeginningDate|`Date`|Books beginning date used for opening balance calculation.|

### PNLCustomViewGrouping
Response of [Get Profit and Loss](#get-profit-and-loss).

|Attribute|Type| Description|
|---------|----|------------|
|periodName|`map`|Period key to display name.|
|income|`map`|Period key to income line items. Attributes of [ReportItemDto](#reportitemdto).|
|totalIncome|`map`|Period key to total income amount.|
|revenue|`map`|Period key to revenue line items. Attributes of [ReportItemDto](#reportitemdto).|
|totalRevenue|`map`|Period key to total revenue amount.|
|costOfGoodsSold|`map`|Period key to cost of goods sold line items. Attributes of [ReportItemDto](#reportitemdto).|
|totalCostOfGoodsSold|`map`|Period key to total cost of goods sold amount.|
|cogs|`map`|Period key to COGS line items. Attributes of [ReportItemDto](#reportitemdto).|
|totalCogs|`map`|Period key to total COGS amount.|
|grossProfit|`map`|Period key to gross profit amount.|
|expenses|`map`|Period key to expense line items. Attributes of [ReportItemDto](#reportitemdto).|
|totalExpenses|`map`|Period key to total expense amount.|
|operatingExpenses|`map`|Period key to operating expense line items. Attributes of [ReportItemDto](#reportitemdto).|
|totalOperatingExpenses|`map`|Period key to total operating expense amount.|
|operatingProfit|`map`|Period key to operating profit amount.|
|otherIncome|`map`|Period key to other income line items. Attributes of [ReportItemDto](#reportitemdto).|
|totalOtherIncome|`map`|Period key to total other income amount.|
|otherExpenses|`map`|Period key to other expense line items. Attributes of [ReportItemDto](#reportitemdto).|
|totalOtherExpenses|`map`|Period key to total other expense amount.|
|profitBeforeTax|`map`|Period key to profit before tax amount.|
|incomeTaxExpenses|`map`|Period key to income tax expense amount.|
|netProfitOrLoss|`map`|Period key to net profit or loss amount.|
|displayText|`map`|Period key to display text.|
|groupNames|`map`|Group code to group display name.|

### ReportItemDto
A single line item within the grouped Profit and Loss and Balance Sheet reports. Line items can nest child line items to form an account hierarchy.

|Attribute|Type| Description|
|---------|----|------------|
|name|`string`|Account or group name.|
|code|`string`|Account or group code.|
|amount|`BigDecimal`|Amount for this line item.|
|amountWithChilds|`BigDecimal`|Amount for this line item including all child line items.|
|isGroup|`boolean`|Has the value `true` if this line item represents an account group rather than an individual account.|
|parent|`long`|Identifier of the parent line item.|
|accountid|`long`|Identifier of the account.|
|groupid|`long`|Identifier of the account group.|
|subGroupid|`long`|Identifier of the account sub-group.|
|subGroupName|`string`|Name of the account sub-group.|
|periodMap|`map`|Period key to amount, when the report is broken down by period.|
|itemDto|`list`|List of child line items. Attributes of [ReportItemDto](#reportitemdto).|
|budgetMap|`map`|Period key to budget details, when budget data is requested.|

### BalanceSheetInfoCustomGroupingView
Response of [Get Balance Sheet](#get-balance-sheet).

|Attribute|Type| Description|
|---------|----|------------|
|periodName|`map`|Period key to display name.|
|assets|`object`|Asset line items. Attributes of [BalanceSheetAssetsInfoGroupingCustomView](#balancesheetassetsinfogroupingcustomview).|
|liabilities|`object`|Liability and equity line items. Attributes of [BalanceSheetLiabilitiesInfoCustomGroupingView](#balancesheetliabilitiesinfocustomgroupingview).|
|diffOpeningBalance|`map`|Period key to opening balance difference, if any.|
|displayText|`map`|Period key to display text.|
|groupNames|`map`|Group code to group display name.|

### BalanceSheetAssetsInfoGroupingCustomView
Asset section of [BalanceSheetInfoCustomGroupingView](#balancesheetinfocustomgroupingview). Each attribute below is a period key to [ReportItemDto](#reportitemdto) line items, and each has a matching `totalXxx` attribute (period key to total amount).

|Attribute|Type| Description|
|---------|----|------------|
|bank|`map`|Bank account line items.|
|totalBank|`map`|Total bank amount per period.|
|cash|`map`|Cash account line items.|
|totalCash|`map`|Total cash amount per period.|
|currentAsset|`map`|Current asset line items.|
|totalCurrentAsset|`map`|Total current asset amount per period.|
|nonCurrentAsset|`map`|Non-current asset line items.|
|totalNonCurrentAsset|`map`|Total non-current asset amount per period.|
|otherCurrentAssets|`map`|Other current asset line items.|
|totalOtherCurrentAssets|`map`|Total other current asset amount per period.|
|longTermAssets|`map`|Long term asset line items.|
|totalLongTermAssets|`map`|Total long term asset amount per period.|
|accountsReceivable|`map`|Accounts receivable line items.|
|totalAccountsReceivable|`map`|Total accounts receivable amount per period.|
|fixedAssets|`map`|Fixed asset line items.|
|totalFixedAssets|`map`|Total fixed asset amount per period.|
|otherAssets|`map`|Other asset line items.|
|totalOtherAssets|`map`|Total other asset amount per period.|
|ppe|`map`|Property, plant, and equipment line items.|
|totalPpe|`map`|Total property, plant, and equipment amount per period.|
|intangibles|`map`|Intangible asset line items.|
|totalIntangibles|`map`|Total intangible asset amount per period.|
|otherLongTermAsset|`map`|Other long term asset line items.|
|totalOtherLongTermAsset|`map`|Total other long term asset amount per period.|
|totalAsset|`map`|Total asset amount per period.|

### BalanceSheetLiabilitiesInfoCustomGroupingView
Liabilities and equity section of [BalanceSheetInfoCustomGroupingView](#balancesheetinfocustomgroupingview). Each attribute below is a period key to [ReportItemDto](#reportitemdto) line items, and each has a matching `totalXxx` attribute (period key to total amount).

|Attribute|Type| Description|
|---------|----|------------|
|equity|`map`|Equity line items.|
|totalEquity|`map`|Total equity amount per period.|
|currentLiabilities|`map`|Current liability line items.|
|totalCurrentLiabilities|`map`|Total current liability amount per period.|
|currentYearEarnings|`map`|Current year earnings amount per period.|
|nonCurrentLiabilities|`map`|Non-current liability line items.|
|totalNonCurrentLiabilities|`map`|Total non-current liability amount per period.|
|otherCurrentLiabilities|`map`|Other current liability line items.|
|totalOtherCurrentLiabilities|`map`|Total other current liability amount per period.|
|longTermLiabilities|`map`|Long term liability line items.|
|totalLongTermLiabilities|`map`|Total long term liability amount per period.|
|accountsPayable|`map`|Accounts payable line items.|
|totalAccountsPayable|`map`|Total accounts payable amount per period.|
|totalLiabilities|`map`|Total liabilities amount per period.|

## Enums
---
### ACCOUNTING_BASIS
- ACCRUAL
- CASH

### ExportFileFormat
- XLS
- PDF
- CSV
- TXT

### ColumnBy
- TOTAL_ONLY
- DAYS
- WEEKS
- MONTHS
- QUARTERS
- YEARS
- CONTACTS
- PRODUCTS
- CLASS
- LOCATION

### DateMacro
- ALL_DATES
- CUSTOM
- TODAY
- THIS_WEEK
- THIS_WEEK_TO_DATE
- THIS_MONTH
- THIS_MONTH_TO_DATE
- THIS_QUARTER
- THIS_QUARTER_TO_DATE
- THIS_YEAR
- THIS_YEAR_TO_DATE
- THIS_YEAR_TO_LAST_MONTH
- YESTERDAY
- RECENT
- LAST_WEEK
- LAST_WEEK_TO_DATE
- LAST_MONTH
- LAST_MONTH_TO_DATE
- LAST_QUARTER
- LAST_QUARTER_TO_DATE
- LAST_YEAR
- LAST_YEAR_TO_DATE
- SINCE_30_DAYS_AGO
- SINCE_60_DAYS_AGO
- SINCE_90_DAYS_AGO
- SINCE_365_DAYS_AGO
- NEXT_WEEK
- NEXT_4_WEEKS
- NEXT_MONTH
- NEXT_QUARTER
- NEXT_YEAR

### FinancialReport
- PNL
- BALANCE_SHEET
- PNL_BY_DEPARTMENT
- GL
