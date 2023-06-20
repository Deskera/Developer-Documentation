---
id: taxesapi
title: Taxes APIs
sidebar_label: Taxes
---
In Singapore, Goods and Services Tax (GST) is a broad-based consumption tax imposed on imported goods and almost all supplies of products and services.
This tax may also be known as Value-added Tax (VAT) in other countries.

Exported goods and international services are considered Zero-Rated Supplies and are charged at 0%. There are 2 types of taxes - Output tax or Input tax. Output tax is GST to be charged on top of the selling price of your supplies sold to your customers. Input tax is GST incurred on your company’s business purchases and expenses, including imported goods, which are paid to your suppliers.

`TaxDto` helps to create new taxes, retrieve tax by id or get a list of taxes.

More about [Taxes API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-2b92f661-738f-4210-ae30-21bae87c7dcd)

## API
---

### Search Tax
Get taxes by filter criteria. [More about search tax](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-2b92f661-738f-4210-ae30-21bae87c7dcd)

##### Description:

- Allows you to retrieve a list of all taxes.
- Allows you to retrieve specific taxes based on it's filter criteria.
### Get All Taxes
#### GET
#### /v1/taxes
##### Request URL
[Taxes API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-2b92f661-738f-4210-ae30-21bae87c7dcd)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| x-access-token | header | Access token | Yes | string |


##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Taxes have been fetched successfully. | [TaxDto](#taxdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

---
### Create Tax

Create a new Tax. [More about create tax](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-2b92f661-738f-4210-ae30-21bae87c7dcd)

##### Description:

- Allows you to create new tax.

#### POST
#### /v1/taxes
##### Request URL

[Taxes API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-2b92f661-738f-4210-ae30-21bae87c7dcd)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| taxDto | body | taxDto | Yes | [TaxDto](#taxdto) |
| x-access-token | header | Access token | Yes | string |


##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TaxDto](#taxdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

---
### Retrieve Tax

Get tax by id. [More about retrieve tax](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-2b92f661-738f-4210-ae30-21bae87c7dcd)

##### Description:

- Allows you to retrieve a specific tax based on it's id.

#### GET
#### Taxes {id}
##### Request URL

[Taxes API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-2b92f661-738f-4210-ae30-21bae87c7dcd)


##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TaxDto](#taxdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
---

### Delete Tax

#### DELETE
#### /v1/taxes
##### Summary

Delete Tax.

##### Description

API to delete tax.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| deleteTaxCriteria | body | deleteTaxCriteria | Yes | [DeleteTaxCriteria](#deletetaxcriteria) |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BulkTaxDeleteResponse](#bulktaxdeleteresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

---
### Get Standard withholding taxes

#### GET
#### Taxes il/standardwht
##### Summary

Get Standard withholding taxes

##### Description

API to get All Standard WHT for the tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | All Standard WHT has been fetched successfully. | [ [WhtResponseIsrael](#whtresponseisrael) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Standard WHT Records not found  |  |
---

### Get Withholding Taxes

#### GET
#### Taxes il/wht
##### Summary

Get Withholding Taxes

##### Description

API to get All Withholding Taxes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | All WHT has been fetched successfully. | [ [WhtResponseIsrael](#whtresponseisrael) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | WHT Records not found  |  |

---
### Taxes codes

#### POST
##### Summary

Taxes Details.

##### Description

API to get the tax details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| getTaxCriteria | body | getTaxCriteria | Yes | [GetTaxCriteria](#gettaxcriteria) |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TaxDto](#taxdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### Taxes create-tax

#### POST
##### Summary

CreateNewTax.

##### Description

Create new Tax with response type as Tax

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| taxDto | body | taxDto | Yes | [TaxDto](#taxdto) |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TaxDto](#taxdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### Taxes method/{method}

#### PUT
##### Summary

SIMPLER

##### Description

Update taxes as per reporting method

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| method | path | method | Yes | string |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ResponseEntity](#responseentity) |
| 201 | Taxes as per BAS reporting method updated successfully. | [ResponseEntity](#responseentity) |
| 400 | Invalid request to update Taxes |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### Taxes missing-taxes

#### POST
##### Summary

Generate missing taxes.

##### Description

API to generate missing taxes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

### Taxes names

#### POST
##### Summary

Taxes Details by name.

##### Description

API to get the tax details by tax name.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| taxNames | body | taxNames | Yes | [ string ] |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [TaxDto](#taxdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### Taxes set-default

#### PATCH
##### Summary

Update Tax is default value

##### Description

API to Update Tax is default value

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| taxIdAndStatus | body | taxIdAndStatus | Yes | object |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

### Taxes sg/missing-taxes

#### POST
##### Summary

Generate sg missing taxes.

##### Description

API to generate sg missing taxes.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| taxAccountCodeByTenantIds | body | taxAccountCodeByTenantIds | Yes | object |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

### Taxes taxCode

#### GET
##### Summary

getByTaxCode

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | No | string |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TaxDto](#taxdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### Taxes taxid/{taxId}

#### GET
##### Summary

Check Used Tax.

##### Description

API to Check Used Tax.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| taxId | path | taxId | Yes | long |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TaxDto](#taxdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

#### PUT
##### Summary

UpdateTax.

##### Description

API to update a existing tax.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| taxDto | body | taxDto | Yes | [TaxDto](#taxdto) |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tax information has been updated successfully. | [TaxDto](#taxdto) |
| 201 | Created |  |
| 400 | Tax with same name already exists |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tax does not exist. |  |

#### DELETE
##### Summary

Delete Tax.

##### Description

API to delete tax.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TaxDto](#taxdto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

### Taxes {id}/default/{value}

#### PATCH
##### Summary

Update Tax is default value

##### Description

API to Update Tax is default value

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| value | path | value | Yes | boolean |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TaxDto](#taxdto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

### Taxes {id}/status/{status}

#### PATCH
##### Summary

Update Tax status.

##### Description

Update Tax status.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| status | path | status | Yes | string |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TaxDto](#taxdto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

### Taxes {tenantId}

#### POST
##### Summary

Create standard tax rates.

##### Description

API to create a standard tax rates.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tenantId | path | tenantId | Yes | long |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TaxDto](#taxdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

---
## wht-indonesia-controller
Tax APIs

### Taxes id

#### GET
##### Summary

Get WHT

##### Description

API to get  WHT for the tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| residentStatus | query | residentStatus | Yes | boolean |
| whtId | query | whtId | Yes | long |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | All WHT has been fetched successfully. | [WhtResponse](#whtresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | WHT Records not found  |  |

### Taxes id/standardwht

#### GET
##### Summary

Get all Standard WHT

##### Description

API to get All Standard WHT for the tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | All Standard WHT has been fetched successfully. | [ [WhtResponseIndonesia](#whtresponseindonesia) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Standard WHT Records not found  |  |

### Taxes id/wht

#### GET
##### Summary

Get all WHT

##### Description

API to get All WHT for the tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | All WHT has been fetched successfully. | [ [WhtResponseIndonesia](#whtresponseindonesia) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | WHT Records not found  |  |

#### POST
##### Summary

Create a new WHT

##### Description

API to create WHT

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [WhtRequestIndonesia](#whtrequestindonesia) |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [WhtResponseIndonesia](#whtresponseindonesia) |
| 201 | WHT has been created successfully. | [WhtResponseIndonesia](#whtresponseindonesia) |
| 400 | Invalid request to create WHT |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### Taxes id/wht/{whtId}

#### PUT
##### Summary

Update an existing WHT

##### Description

API to update WHT

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [WhtRequestIndonesia](#whtrequestindonesia) |
| whtId | path | whtId | Yes | long |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | WHT has been updated successfully. | [WhtResponseIndonesia](#whtresponseindonesia) |
| 201 | Created |  |
| 400 | Invalid request to update WHT |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

#### DELETE
##### Summary

Delete WHT Payment

##### Description

API to dete WHT rate

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| whtId | path | whtId | Yes | long |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | WHT has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Invalid request to fetch WHT payment |

---
## wht-israel-controller
Tax APIs

### Taxes il

#### GET
##### Summary

Get WHT

##### Description

API to get  WHT for the tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| whtBusinessType | query | whtBusinessType | Yes | string |
| whtId | query | whtId | Yes | long |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | All WHT has been fetched successfully. | [WhtResponse](#whtresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | WHT Records not found  |  |

#### POST
##### Summary

Create a new WHT

##### Description

API to create WHT

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [WhtRequestIsrael](#whtrequestisrael) |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [WhtResponseIsrael](#whtresponseisrael) |
| 201 | WHT has been created successfully. | [WhtResponseIsrael](#whtresponseisrael) |
| 400 | Invalid request to create WHT |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### Taxes il/wht/{whtId}

#### PUT
##### Summary

Update an existing WHT

##### Description

API to update WHT

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [WhtRequestIsrael](#whtrequestisrael) |
| whtId | path | whtId | Yes | long |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | WHT has been updated successfully. | [WhtResponseIsrael](#whtresponseisrael) |
| 201 | Created |  |
| 400 | Invalid request to update WHT |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

#### DELETE
##### Summary

Delete WHT Payment

##### Description

API to dete WHT rate

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| whtId | path | whtId | Yes | long |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | WHT has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Invalid request to fetch WHT payment |

---
## tds-india-controller
Tax APIs

### Taxes in/tds

#### GET
##### Summary

Get all TDS for a tenant

##### Description

API to get All TDS for the tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | All TDS has been fetched successfully. | [ [TdsResponseIndia](#tdsresponseindia) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | TDS Records not found  |  |

#### POST
##### Summary

Create a new TDS

##### Description

API to create TDS

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [TdsRequestIndia](#tdsrequestindia) |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TdsResponseIndia](#tdsresponseindia) |
| 201 | TDS has been created successfully. | [TdsResponseIndia](#tdsresponseindia) |
| 400 | Invalid request to create TDS |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

#### PUT
##### Summary

Update the all requested TDS

##### Description

API to update the given TDS list

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tdsRequestIndiaList | body | tdsRequestIndiaList | Yes | [ [TdsRequestIndia](#tdsrequestindia) ] |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | TDS has been updated successfully. | [ [TdsResponseIndia](#tdsresponseindia) ] |
| 201 | Created |  |
| 400 | Invalid request to update TDS |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### Taxes in/tds-master

#### GET
##### Summary

Get all Standard TDS

##### Description

API to get All TDS for the tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | All TDS has been fetched successfully. | [ [TdsResponseIndia](#tdsresponseindia) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | TDS Records not found  |  |

### Taxes in/tds/limit

#### GET
##### Summary

Get annual exemption limit for a tenant

##### Description

API to get annual exemption limit for the tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | All Annual Exemption limits for tenant fetched successfully. | object |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to fetch annual limit exemption limits for tenant fetched successfully. |  |

### Taxes in/tds/{id}

#### GET
##### Summary

Get TDS for a tenant

##### Description

API to get TDS for the tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | TDS has been fetched successfully. | [TdsResponseIndia](#tdsresponseindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | TDS Records not found  |  |

### Taxes in/tds/{tdsId}

#### PUT
##### Summary

Update an existing TDS

##### Description

API to update TDS

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [TdsRequestIndia](#tdsrequestindia) |
| tdsId | path | tdsId | Yes | long |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | TDS has been updated successfully. | [TdsResponseIndia](#tdsresponseindia) |
| 201 | Created |  |
| 400 | Invalid request to update TDS |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

#### DELETE
##### Summary

Delete TDS Payment

##### Description

API to dete TDS rate

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tdsId | path | tdsId | Yes | long |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | TDS has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Invalid request to fetch TDS payment |

---
## wht-philippines-controller
Tax APIs

### Taxes ph

#### GET
##### Summary

Get WHT

##### Description

API to get  WHT for the tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| whtBusinessType | query | whtBusinessType | Yes | string |
| whtId | query | whtId | Yes | long |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | All WHT has been fetched successfully. | [WhtResponse](#whtresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | WHT Records not found  |  |

### Taxes ph/standardwht

#### GET
##### Summary

Get all Standard WHT

##### Description

API to get All Standard WHT for the tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | All Standard WHT has been fetched successfully. | [ [WhtResponsePhilippines](#whtresponsephilippines) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Standard WHT Records not found  |  |

### Taxes ph/wht

#### GET
##### Summary

Get all WHT

##### Description

API to get All WHT for the tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | All WHT has been fetched successfully. | [ [WhtResponsePhilippines](#whtresponsephilippines) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | WHT Records not found  |  |

#### POST
##### Summary

Create a new WHT

##### Description

API to create WHT

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [WhtRequestPhlippines](#whtrequestphlippines) |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [WhtResponsePhilippines](#whtresponsephilippines) |
| 201 | WHT has been created successfully. | [WhtResponsePhilippines](#whtresponsephilippines) |
| 400 | Invalid request to create WHT |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### Taxes ph/wht/{whtId}

#### PUT
##### Summary

Update an existing WHT

##### Description

API to update WHT

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [WhtRequestPhlippines](#whtrequestphlippines) |
| whtId | path | whtId | Yes | long |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | WHT has been updated successfully. | [WhtResponsePhilippines](#whtresponsephilippines) |
| 201 | Created |  |
| 400 | Invalid request to update WHT |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

#### DELETE
##### Summary

Delete WHT Payment

##### Description

API to dete WHT rate

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| whtId | path | whtId | Yes | long |
| x-access-token | header | Access token | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | WHT has been deleted successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Invalid request to fetch WHT payment |

---
## Models

### BulkTaxDeleteResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| httpStatus | string | HTTP Status<br/>*Enum:* `"100 CONTINUE"`, `"101 SWITCHING_PROTOCOLS"`, `"102 PROCESSING"`, `"103 CHECKPOINT"`, `"200 OK"`, `"201 CREATED"`, `"202 ACCEPTED"`, `"203 NON_AUTHORITATIVE_INFORMATION"`, `"204 NO_CONTENT"`, `"205 RESET_CONTENT"`, `"206 PARTIAL_CONTENT"`, `"207 MULTI_STATUS"`, `"208 ALREADY_REPORTED"`, `"226 IM_USED"`, `"300 MULTIPLE_CHOICES"`, `"301 MOVED_PERMANENTLY"`, `"302 FOUND"`, `"302 MOVED_TEMPORARILY"`, `"303 SEE_OTHER"`, `"304 NOT_MODIFIED"`, `"305 USE_PROXY"`, `"307 TEMPORARY_REDIRECT"`, `"308 PERMANENT_REDIRECT"`, `"400 BAD_REQUEST"`, `"401 UNAUTHORIZED"`, `"402 PAYMENT_REQUIRED"`, `"403 FORBIDDEN"`, `"404 NOT_FOUND"`, `"405 METHOD_NOT_ALLOWED"`, `"406 NOT_ACCEPTABLE"`, `"407 PROXY_AUTHENTICATION_REQUIRED"`, `"408 REQUEST_TIMEOUT"`, `"409 CONFLICT"`, `"410 GONE"`, `"411 LENGTH_REQUIRED"`, `"412 PRECONDITION_FAILED"`, `"413 PAYLOAD_TOO_LARGE"`, `"413 REQUEST_ENTITY_TOO_LARGE"`, `"414 URI_TOO_LONG"`, `"414 REQUEST_URI_TOO_LONG"`, `"415 UNSUPPORTED_MEDIA_TYPE"`, `"416 REQUESTED_RANGE_NOT_SATISFIABLE"`, `"417 EXPECTATION_FAILED"`, `"418 I_AM_A_TEAPOT"`, `"419 INSUFFICIENT_SPACE_ON_RESOURCE"`, `"420 METHOD_FAILURE"`, `"421 DESTINATION_LOCKED"`, `"422 UNPROCESSABLE_ENTITY"`, `"423 LOCKED"`, `"424 FAILED_DEPENDENCY"`, `"426 UPGRADE_REQUIRED"`, `"428 PRECONDITION_REQUIRED"`, `"429 TOO_MANY_REQUESTS"`, `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"`, `"451 UNAVAILABLE_FOR_LEGAL_REASONS"`, `"500 INTERNAL_SERVER_ERROR"`, `"501 NOT_IMPLEMENTED"`, `"502 BAD_GATEWAY"`, `"503 SERVICE_UNAVAILABLE"`, `"504 GATEWAY_TIMEOUT"`, `"505 HTTP_VERSION_NOT_SUPPORTED"`, `"506 VARIANT_ALSO_NEGOTIATES"`, `"507 INSUFFICIENT_STORAGE"`, `"508 LOOP_DETECTED"`, `"509 BANDWIDTH_LIMIT_EXCEEDED"`, `"510 NOT_EXTENDED"`, `"511 NETWORK_AUTHENTICATION_REQUIRED"`<br/>*Example:* `"404 NOT_FOUND"` | No |
| id | long | ID<br/>*Example:* `2` | No |
| reason | string | *Example:* `"NOT FOUND"` | No |

### DeleteTaxCriteria

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| taxIdList | [ long ] |  | No |

### GetTaxCriteria

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| taxCodeList | [ string ] |  | No |

### Pageable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| offset | long |  | No |
| pageNumber | integer |  | No |
| pageSize | integer |  | No |
| paged | boolean |  | No |
| sort | [Sort](#sort) |  | No |
| unpaged | boolean |  | No |

### Page«TaxDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [TaxDto](#taxdto) ] |  | No |
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

### ResponseEntity

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| body | object |  | No |
| statusCode | string | *Enum:* `"100 CONTINUE"`, `"101 SWITCHING_PROTOCOLS"`, `"102 PROCESSING"`, `"103 CHECKPOINT"`, `"200 OK"`, `"201 CREATED"`, `"202 ACCEPTED"`, `"203 NON_AUTHORITATIVE_INFORMATION"`, `"204 NO_CONTENT"`, `"205 RESET_CONTENT"`, `"206 PARTIAL_CONTENT"`, `"207 MULTI_STATUS"`, `"208 ALREADY_REPORTED"`, `"226 IM_USED"`, `"300 MULTIPLE_CHOICES"`, `"301 MOVED_PERMANENTLY"`, `"302 FOUND"`, `"302 MOVED_TEMPORARILY"`, `"303 SEE_OTHER"`, `"304 NOT_MODIFIED"`, `"305 USE_PROXY"`, `"307 TEMPORARY_REDIRECT"`, `"308 PERMANENT_REDIRECT"`, `"400 BAD_REQUEST"`, `"401 UNAUTHORIZED"`, `"402 PAYMENT_REQUIRED"`, `"403 FORBIDDEN"`, `"404 NOT_FOUND"`, `"405 METHOD_NOT_ALLOWED"`, `"406 NOT_ACCEPTABLE"`, `"407 PROXY_AUTHENTICATION_REQUIRED"`, `"408 REQUEST_TIMEOUT"`, `"409 CONFLICT"`, `"410 GONE"`, `"411 LENGTH_REQUIRED"`, `"412 PRECONDITION_FAILED"`, `"413 PAYLOAD_TOO_LARGE"`, `"413 REQUEST_ENTITY_TOO_LARGE"`, `"414 URI_TOO_LONG"`, `"414 REQUEST_URI_TOO_LONG"`, `"415 UNSUPPORTED_MEDIA_TYPE"`, `"416 REQUESTED_RANGE_NOT_SATISFIABLE"`, `"417 EXPECTATION_FAILED"`, `"418 I_AM_A_TEAPOT"`, `"419 INSUFFICIENT_SPACE_ON_RESOURCE"`, `"420 METHOD_FAILURE"`, `"421 DESTINATION_LOCKED"`, `"422 UNPROCESSABLE_ENTITY"`, `"423 LOCKED"`, `"424 FAILED_DEPENDENCY"`, `"426 UPGRADE_REQUIRED"`, `"428 PRECONDITION_REQUIRED"`, `"429 TOO_MANY_REQUESTS"`, `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"`, `"451 UNAVAILABLE_FOR_LEGAL_REASONS"`, `"500 INTERNAL_SERVER_ERROR"`, `"501 NOT_IMPLEMENTED"`, `"502 BAD_GATEWAY"`, `"503 SERVICE_UNAVAILABLE"`, `"504 GATEWAY_TIMEOUT"`, `"505 HTTP_VERSION_NOT_SUPPORTED"`, `"506 VARIANT_ALSO_NEGOTIATES"`, `"507 INSUFFICIENT_STORAGE"`, `"508 LOOP_DETECTED"`, `"509 BANDWIDTH_LIMIT_EXCEEDED"`, `"510 NOT_EXTENDED"`, `"511 NETWORK_AUTHENTICATION_REQUIRED"` | No |
| statusCodeValue | integer |  | No |

### Sort

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| empty | boolean |  | No |
| sorted | boolean |  | No |
| unsorted | boolean |  | No |

### Tax

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string |  | No |
| additionalTaxIn | boolean |  | No |
| basReporting | string |  | No |
| category | string | *Enum:* `"SYSTEM"`, `"CUSTOM"` | No |
| code | string |  | No |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| defaultMemoBE | string |  | No |
| defaultMemoDe | string |  | No |
| defaultMemoNL | string |  | No |
| defaultMemoUk | string |  | No |
| deleted | boolean |  | No |
| description | string |  | No |
| effectiveEndDate | dateTime |  | No |
| effectiveStartDate | dateTime |  | No |
| flatRateSchemeUk | boolean |  | No |
| id | long |  | No |
| isDefault | boolean |  | No |
| isTaxGroup | boolean |  | No |
| name | string |  | No |
| netAmountBefore | string |  | No |
| netAmountBeforeBE | string |  | No |
| netAmountBeforeNL | string |  | No |
| netAmountDe | string |  | No |
| netAmountUk | string |  | No |
| percent | number |  | No |
| showInReportsID | boolean |  | No |
| status | string |  | No |
| taxAccountCode | string |  | No |
| taxAgencyCan | string |  | No |
| taxAmountDe | string |  | No |
| taxAmountIn | string |  | No |
| taxAmountInBE | string |  | No |
| taxAmountInNL | string |  | No |
| taxAmountUk | string |  | No |
| taxCode | string |  | No |
| taxGroupDetails | [ [TaxGroupDetails](#taxgroupdetails) ] |  | No |
| taxSectionAus | string | *Enum:* `"DEFAULT_GST=Default GST"`, `"EXPORT_SALES=Export Sales"`, `"OTHER_GST=Other GST-free sales"`, `"INPUT_TAX_SALES=Input Taxed Sales"`, `"CAPITAL_PURCHASES=Capital purchases"`, `"NONCAPITAL_PURCHASES=Non-capital purchases"`, `"INPUT_TAX_PURCHASES=Input Tax Purchases"`, `"EXCLUDED_FROM_BAS=Excluded from BAS"` | No |
| taxSectionSAR | string |  | No |
| tenantId | long |  | No |
| type | string | *Enum:* `"SALES"`, `"PURCHASE"`, `"BOTH"` | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |

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

### TdsRequestIndia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Tds account code<br/>*Example:* `"A-0013"` | Yes |
| rate | number | Rate<br/>*Example:* `10` | No |
| resident | boolean | Resident Or Non Resident<br/>*Example:* `true` | No |
| sectionName | string | Section Id<br/>*Example:* `1` | No |
| standardTaxId | long | Standard Tax Id<br/>*Example:* `1` | No |
| tdsId | long | Tds Id<br/>*Example:* `1` | No |

### TdsResponseIndia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Tds account code<br/>*Example:* `"A-0013"` | Yes |
| annualExemptionLimit | number | Annual exemption Limit<br/>*Example:* `120000` | No |
| rate | number | Rate<br/>*Example:* `10` | No |
| resident | boolean | Resident Or Non Resident<br/>*Example:* `true` | No |
| sectionName | string | Section name<br/>*Example:* `190` | No |
| sectionShortDescription | string | Section short Description<br/>*Example:* `"Dividend"` | No |
| standardTaxId | long | Standard Tax Id<br/>*Example:* `1` | No |
| tdsId | long | Tds Id<br/>*Example:* `1` | No |

### WhtRequestIndonesia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Tds account code<br/>*Example:* `"A-0013"` | Yes |
| accountReceivableCode | string | Tds Receivable account code<br/>*Example:* `"A-0013"` | Yes |
| rate | number | Rate<br/>*Example:* `10` | No |
| resident | boolean | Resident Or Non Resident<br/>*Example:* `true` | No |
| sectionName | string | Section Id<br/>*Example:* `1` | No |
| standardTaxId | long | Standard Tax Id<br/>*Example:* `1` | No |
| tdsId | long | Tds Id<br/>*Example:* `1` | No |

### WhtRequestIsrael

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Tds account code<br/>*Example:* `"A-0013"` | Yes |
| accountReceivableCode | string | Tds Receivable account code<br/>*Example:* `"A-0013"` | Yes |
| rate | number | Rate<br/>*Example:* `10` | No |
| resident | boolean | Resident Or Non Resident<br/>*Example:* `true` | No |
| sectionDescription | string | Section Description<br/>*Example:* `"Section Description"` | No |
| sectionName | string | Section Id<br/>*Example:* `1` | No |
| sectionShortDescription | string | Section short Description<br/>*Example:* `"Section short Description"` | No |
| standardTaxId | long | Standard Tax Id<br/>*Example:* `1` | No |
| tdsId | long | Tds Id<br/>*Example:* `1` | No |

### WhtRequestPhlippines

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Tds account code<br/>*Example:* `"A-0013"` | Yes |
| accountReceivableCode | string | Tds Receivable account code<br/>*Example:* `"A-0013"` | Yes |
| rate | number | Rate<br/>*Example:* `10` | No |
| resident | boolean | Resident Or Non Resident<br/>*Example:* `true` | No |
| sectionName | string | Section Id<br/>*Example:* `1` | No |
| standardTaxId | long | Standard Tax Id<br/>*Example:* `1` | No |
| tdsId | long | Tds Id<br/>*Example:* `1` | No |
| whtBusinessType | string | Individual Or Corporation<br/>*Example:* `"Corporation"` | No |

### WhtResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Tds account code<br/>*Example:* `"A-0013"` | Yes |
| accountReceivableCode | string | Tds account receivable  code<br/>*Example:* `"A-0013"` | Yes |
| annualExemptionLimit | number | Annual exemption Limit<br/>*Example:* `120000` | No |
| rate | number | Rate<br/>*Example:* `10` | No |
| resident | boolean | Resident Or Non Resident<br/>*Example:* `true` | No |
| sectionName | string | Section name<br/>*Example:* `190` | No |
| sectionShortDescription | string | Section short Description<br/>*Example:* `"Dividend"` | No |
| standardTaxId | long | Standard Tax Id<br/>*Example:* `1` | No |
| tdsId | long | Tds Id<br/>*Example:* `1` | No |

### WhtResponseIndonesia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Tds account code<br/>*Example:* `"A-0013"` | Yes |
| accountReceivableCode | string | Tds Receivable account code<br/>*Example:* `"A-0013"` | Yes |
| annualExemptionLimit | number | Annual exemption Limit<br/>*Example:* `120000` | No |
| rate | number | Rate<br/>*Example:* `10` | No |
| resident | boolean | Resident Or Non Resident<br/>*Example:* `true` | No |
| sectionName | string | Section name<br/>*Example:* `190` | No |
| sectionShortDescription | string | Section short Description<br/>*Example:* `"Dividend"` | No |
| standardTaxId | long | Standard Tax Id<br/>*Example:* `1` | No |
| tdsId | long | Tds Id<br/>*Example:* `1` | No |

### WhtResponseIsrael

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Tds account code<br/>*Example:* `"A-0013"` | Yes |
| accountReceivableCode | string | Tds Receivable account code<br/>*Example:* `"A-0013"` | Yes |
| annualExemptionLimit | number | Annual exemption Limit<br/>*Example:* `120000` | No |
| isStandardTds | boolean |  | No |
| rate | number | Rate<br/>*Example:* `10` | No |
| resident | boolean | Resident Or Non Resident<br/>*Example:* `true` | No |
| sectionName | string | Section name<br/>*Example:* `190` | No |
| sectionShortDescription | string | Section short Description<br/>*Example:* `"Dividend"` | No |
| standardTaxId | long | Standard Tax Id<br/>*Example:* `1` | No |
| tdsId | long | Tds Id<br/>*Example:* `1` | No |

### WhtResponsePhilippines

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountCode | string | Tds account code<br/>*Example:* `"A-0013"` | Yes |
| accountReceivableCode | string | Tds Receivable account code<br/>*Example:* `"A-0013"` | Yes |
| annualExemptionLimit | number | Annual exemption Limit<br/>*Example:* `120000` | No |
| rate | number | Rate<br/>*Example:* `10` | No |
| resident | boolean | Resident Or Non Resident<br/>*Example:* `true` | No |
| sectionName | string | Section name<br/>*Example:* `190` | No |
| sectionShortDescription | string | Section short Description<br/>*Example:* `"Dividend"` | No |
| standardTaxId | long | Standard Tax Id<br/>*Example:* `1` | No |
| tdsId | long | Tds Id<br/>*Example:* `1` | No |
| whtBusinessType | string | Individual Or Corporation<br/>*Example:* `"Corporation"` | No |