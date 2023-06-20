---
id: returnsapi
title: Returns APIs
sidebar_label: Returns
---

More about [Returns API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-b43692e9-0687-4ee3-9819-ab9f80d048da)

# Deskera - Return Service
Contact com.deskera.erp.return.service APIs.

## purchase-return-controller
Purchase Return Controller

### Add Purchase return

#### POST 
##### Summary

Create purchase return

More about [Returns API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-b43692e9-0687-4ee3-9819-ab9f80d048da)

##### Description

API to create purchase return.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseReturnDto | body | purchaseReturnDto | Yes | [PurchaseReturnDto](#purchasereturndto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [PurchaseReturnDto](#purchasereturndto) |
| 201 | Purchase return created successfully | [PurchaseReturnDto](#purchasereturndto) |
| 400 | Failed to create purchase return |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete purchase return

##### Description

API to delete purchase return.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| purchaseReturnCode | query | purchaseReturnCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Purchase return deleted successfully |
| 204 | No Content |
| 400 | Failed to delete purchase return |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Get Purchase return details

#### GET
##### Summary

Get purchase returns for a document


##### Description

API to get purchase returns for a document

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentCode | query | documentCode | Yes | string |
| documentType | query | documentType | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Purchase returns fetched successfully | [ [PurchaseReturnDto](#purchasereturndto) ] |
| 400 | Failed to fetch purchase return |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## sales-return-controller
Sales Return Controller

### Sales Return

#### GET
##### Summary

Search sales returns.

##### Description

API to search sales returns.

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
| 200 | Sales returns have been fetched successfully. | [SalesReturnDto](#salesreturndto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create sales return

##### Description

API to create sales return.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| salesReturnDto | body | salesReturnDto | Yes | [SalesReturnDto](#salesreturndto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SalesReturnDto](#salesreturndto) |
| 201 | Sales return created successfully | [SalesReturnDto](#salesreturndto) |
| 400 | Failed to create sales return |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete sales return

##### Description

API to delete sales return.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| salesReturnCode | query | salesReturnCode | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Sales return deleted successfully |
| 204 | No Content |
| 400 | Failed to delete sales return |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### Get Sales Return Details

#### GET
##### Summary

Get sales returns for a document

##### Description

API to get sales returns for a document

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| documentCode | query | documentCode | Yes | string |
| documentType | query | documentType | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Sales returns fetched successfully | [ [SalesReturnDto](#salesreturndto) ] |
| 400 | Failed to fetch sales return |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
### Models

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

#### BulkPaymentItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| documentCode | string |  | No |

#### ContactInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | string |  | No |
| name | string |  | No |

#### CustomFieldItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | Dimension Id<br/>*Example:* `11567` | No |
| label | string | Custom Field Name<br/>*Example:* `"Label"` | Yes |
| module | string | Supported Modules | No |
| value | object | Dimension Value<br/>*Example:* `"XYZ"` | No |

#### DocumentInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| documentCode | string | Document Code.<br/>*Example:* `"QO-0000001"` | No |
| documentCreatedDate | dateTime | Purchase creation date<br/>*Example:* `"2023-01-01T00:00:00.000+0000"` | No |
| documentSequenceCode | string | Purchase Order Code<br/>*Example:* `"0000001"` | No |
| documentType | string | Type of document.<br/>*Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"`<br/>*Example:* `"QUOTATION"` | No |

#### DocumentUOMSchemaDefinition

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string | UOM Schema Name<br/>*Example:* `"UNIT"` | No |
| schemaId | long | UOM Schema Id<br/>*Example:* `1` | No |
| sinkConversionFactor | number | 10<br/>*Example:* `10` | No |
| sinkUOM | long | 2<br/>*Example:* `2` | No |
| sourceConversionFactor | number | 1<br/>*Example:* `1` | No |
| sourceUOM | long | 4<br/>*Example:* `4` | No |
| uid | string | UOM Schema Definition Id<br/>*Example:* `1` | No |

#### KnockOffInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| bulkData | [ [BulkPaymentItem](#bulkpaymentitem) ] |  | No |
| contraDocumentCode | string |  | No |
| currency | string |  | No |
| documentCode | string |  | No |
| documentDate | dateTime |  | No |
| documentOrder | integer |  | No |
| documentType | string | *Enum:* `"QUOTATION"`, `"PURCHASE_ORDER"`, `"SALES_ORDER"`, `"PURCHASE_INVOICE"`, `"SALES_INVOICE"`, `"MAKE_PAYMENT"`, `"RECEIVE_PAYMENT"`, `"JOURNAL_ENTRY"`, `"BANK_TRANSFER"`, `"CREDIT_NOTE"`, `"DEBIT_NOTE"`, `"EXPENSE"`, `"EXPENSE_PREPAYMENT"`, `"DEPOSIT"`, `"DEPOSIT_ADVPAYMENT"`, `"CONTRA_ADJUSTMENT"`, `"GOODS_RECEIPT"`, `"FULFILLMENT"`, `"PICKLIST"`, `"PACKLIST"`, `"SHIPLIST"`, `"PAYSLIP"`, `"PAYROLL_CHECK"`, `"CHEQUE"`, `"SALES_RETURN"`, `"PURCHASE_RETURN"`, `"STOCK_ADJUSTMENT"`, `"STOCK_TRANSFER"`, `"WORK_ORDER"`, `"FIXED_ASSET"`, `"E_WAY_BILL_SUMMARY"`, `"E_WAY_BILL_DETAIL"`, `"PURCHASE_REQUEST"`, `"JOB_WORK_OUT_ORDER"`, `"JOB_WORK_OUT_TRANSFER"`, `"QC_DOCUMENT"`, `"WIP_PRODUCTION"`, `"STOCK_REQUEST"`, `"STOCK_ISSUE"`, `"FORECAST"` | No |
| exchangeRate | number |  | No |
| linkedDocumentSequence | string |  | No |
| linkedWhileCreatingNote | boolean |  | No |
| uid | string (uuid) |  | No |
| whtAmount | number |  | No |

#### Pageable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| offset | long |  | No |
| pageNumber | integer |  | No |
| pageSize | integer |  | No |
| paged | boolean |  | No |
| sort | [Sort](#sort) |  | No |
| unpaged | boolean |  | No |

#### Page«SalesReturnDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [SalesReturnDto](#salesreturndto) ] |  | No |
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

#### PurchaseReturnDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachments | [ string ] | Attachments | No |
| binCode | string | bin code<br/>*Example:* `"BIN-00001"` | Yes |
| closedDate | dateTime | Closed date<br/>*Example:* `"25-10-2020"` | No |
| contactCode | string | Contact code<br/>*Example:* `"C-00001"` | No |
| contactInfo | [ContactInfo](#contactinfo) | Contact information | No |
| currency | string | Currency<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deleted | boolean | Purchase return deleted<br/>*Example:* `false` | No |
| documentSequenceCode | string | Document sequence code<br/>*Example:* `"0000001"` | No |
| exchangeRate | number | Exchange rate<br/>*Example:* `1` | No |
| knockoffInfo | [ [KnockOffInfo](#knockoffinfo) ] | Knockoff information | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked documents | No |
| memo | string | Memo<br/>*Example:* `"Sample memo"` | No |
| purchaseReturnCode | string | Purchase return code<br/>*Example:* `"SL-00001"` | No |
| purchaseReturnDate | dateTime | Purchase return date<br/>*Example:* `"25-10-2020"` | No |
| purchaseReturnItems | [ [PurchaseReturnItemDto](#purchasereturnitemdto) ] | Purchase Return items information | No |
| quantity | string | Quantity<br/>*Enum:* `"FULL"`, `"PARTIAL"`<br/>*Example:* `1` | No |
| rackCode | string | Rack code<br/>*Example:* `"RACK-00001"` | Yes |
| reasonToReturn | string | Reason to return<br/>*Example:* `"Sample reason"` | No |
| receiptStatus | string | Receipt status<br/>*Enum:* `"OPEN"`, `"CLOSED"`<br/>*Example:* `"OPEN"` | No |
| receivedAmount | number | Received amount<br/>*Example:* `100` | No |
| returnType | string | Return type<br/>*Enum:* `"RETURN_ONLY"`, `"RETURN_AND_REFUND"`, `"REPLACEMENT"`<br/>*Example:* `"RETURN_ONLY"` | No |
| rowCode | string | Row code<br/>*Example:* `"ROW-00001"` | Yes |
| sequenceFormat | string | Sequence format<br/>*Example:* `"5e5789e7bfbb13a1976bb594"` | No |
| warehouseCode | string | Warehouse code<br/>*Example:* `"WH-00001"` | No |

#### PurchaseReturnItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingMetaData | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] |  | No |
| advancedTrackingType | string | *Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| documentSequenceCode | string | Document seqence code<br/>*Example:* `"0000001"` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| itemSequenceCode | string | Item sequence code<br/>*Example:* `"SRI-00001"` | No |
| productCode | string | Product code<br/>*Example:* `"P-00001"` | No |
| productDescription | string | Product description<br/>*Example:* `"Sample description"` | No |
| productName | string |  | No |
| productOrder | integer | Product Order<br/>*Example:* `1` | No |
| quantityReceived | number | Quantity received<br/>*Example:* `1` | No |
| quantityToReturn | number | Quantity to return<br/>*Example:* `1` | No |
| uomQuantityReceived | number | UOM Quantity received<br/>*Example:* `2` | Yes |
| uomQuantityToReturn | number | UOM Quantity to return<br/>*Example:* `100` | Yes |
| value | number | Return item value<br/>*Example:* `1` | No |
| warehouseCode | string | Warehouse code<br/>*Example:* `"WH-00001"` | No |

#### SalesReturnDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| attachments | [ string ] | Attachments | No |
| binCode | string | bin code<br/>*Example:* `"BIN-00001"` | Yes |
| closedDate | dateTime | Closed Date<br/>*Example:* `"25-10-2020"` | No |
| contactCode | string | Contact code<br/>*Example:* `"C-00001"` | No |
| contactInfo | [ContactInfo](#contactinfo) | Contact Information | No |
| currency | string | Currency<br/>*Example:* `"SGD"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| deleted | boolean | Sales Return Deleted<br/>*Example:* `false` | No |
| documentSequenceCode | string | Document sequence code<br/>*Example:* `"0000001"` | No |
| exchangeRate | number | Exchange Rate<br/>*Example:* `1` | No |
| fulfillmentType | string | Fulfillment type<br/>*Enum:* `"NONE"`, `"DEFAULT"`, `"PICK_PACK_SHIP"`, `"DROP_SHIP"`<br/>*Example:* `"PICK_PACK_SHIP"` | No |
| knockoffInfo | [ [KnockOffInfo](#knockoffinfo) ] | Knockoff Information | No |
| linkedDocuments | [ [DocumentInfo](#documentinfo) ] | Linked documents | No |
| memo | string | Memo<br/>*Example:* `"Sample memo"` | No |
| quantity | string | Quantity<br/>*Enum:* `"FULL"`, `"PARTIAL"`<br/>*Example:* `1` | No |
| rackCode | string | Rack code<br/>*Example:* `"RACK-00001"` | Yes |
| reasonToReturn | string | Reason to return<br/>*Example:* `"Sample reason"` | No |
| refundAmount | number | Refund amount<br/>*Example:* `100` | No |
| returnStatus | string | Return status<br/>*Enum:* `"OPEN"`, `"CLOSED"`<br/>*Example:* `"OPEN"` | No |
| returnType | string | Return Type<br/>*Enum:* `"RETURN_ONLY"`, `"RETURN_AND_REFUND"`, `"REPLACEMENT"`<br/>*Example:* `"RETURN_ONLY"` | No |
| rowCode | string | Row code<br/>*Example:* `"ROW-00001"` | Yes |
| salesReturnCode | string | Sales Return Code<br/>*Example:* `"SL-00001"` | No |
| salesReturnDate | dateTime | Sales Return Date<br/>*Example:* `"25-10-2020"` | No |
| salesReturnItems | [ [SalesReturnItemDto](#salesreturnitemdto) ] | Sales Return items information | No |
| sequenceFormat | string | Sequence format<br/>*Example:* `"5e5789e7bfbb13a1976bb594"` | No |
| warehouseCode | string | Warehouse code<br/>*Example:* `"WH-00001"` | No |

#### SalesReturnItemDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| advancedTrackingMetaData | [ [AdvancedTrackingMetaDto](#advancedtrackingmetadto) ] |  | No |
| advancedTrackingType | string | *Enum:* `"NONE"`, `"BATCH"`, `"SERIAL"` | No |
| customField | [ [CustomFieldItem](#customfielditem) ] | List of custom fields | No |
| documentSequenceCode | string | Document seqence code<br/>*Example:* `"0000001"` | No |
| documentUOMSchemaDefinition | [DocumentUOMSchemaDefinition](#documentuomschemadefinition) | Document UOM Schema Definition<br/>*Example:* `2` | Yes |
| documentUom | long | Document UOM id<br/>*Example:* `2` | Yes |
| itemSequenceCode | string | Item sequence code<br/>*Example:* `"SRI-00001"` | No |
| productCode | string | Product code<br/>*Example:* `"P-00001"` | No |
| productDescription | string | Product description<br/>*Example:* `"Sample description"` | No |
| productName | string |  | No |
| productOrder | integer | Product Order<br/>*Example:* `1` | No |
| quantityFulfilled | number | Quantity fulfilled<br/>*Example:* `1` | No |
| quantityToReturn | number | Quantity to return<br/>*Example:* `1` | No |
| uomQuantityFulfilled | number | UOM Quantity fulfilled<br/>*Example:* `2` | Yes |
| uomQuantityToReturn | number | UOM Quantity to return<br/>*Example:* `100` | Yes |
| value | number | Return item value<br/>*Example:* `1` | No |

#### Sort

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| empty | boolean |  | No |
| sorted | boolean |  | No |
| unsorted | boolean |  | No |
