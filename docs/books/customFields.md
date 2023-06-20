---
id: customfieldapi
title: Custom Fiels APIs
sidebar_label: Custom Field
---
# Deskera - Custom Fields Service
 Custom Fields service APIs.

More about [Custom Field](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-d636982a-4d7b-457a-a472-e45ad75e6d28)

## dimension-controller
Dimension APIs

### /v1/dimension

#### GET
##### Summary

Fetch dimensions

##### Description

API to fetch existing dimensions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| attributeSort | query | attributeSort | No | string |
| attributeSortDir | query | attributeSortDir | No | string |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Dimension information have been fetched successfully. | [DimensionDto](#dimensiondto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Dimension Creation

##### Description

API to create a dimension.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| dimensionDto | body | dimensionDto | Yes | [DimensionDto](#dimensiondto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [DimensionDto](#dimensiondto) |
| 201 | Dimension has been created successfully. | [DimensionDto](#dimensiondto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/dimension/code

#### GET
##### Summary

Get dimension by code

##### Description

Api to get dimension by code

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| attributeSort | query | attributeSort | No | string |
| attributeSortDir | query | attributeSortDir | No | string |
| code | query | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched dimension by code successfully. | [DimensionDto](#dimensiondto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/dimension/codes

#### POST
##### Summary

Get All dimensions by codes

##### Description

Api to get All dimensions by codes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| attributeSort | query | attributeSort | No | string |
| attributeSortDir | query | attributeSortDir | No | string |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched all dimensions by codes successfully. | [ [DimensionDto](#dimensiondto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/dimension/custom-fields-by-modules

#### POST
##### Summary

Api to provide custom field items by modules

##### Description

Api to provide custom field items by modules

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| attributeSort | query | attributeSort | No | string |
| attributeSortDir | query | attributeSortDir | No | string |
| request | body | request | Yes | [CustomFieldsListRequest](#customfieldslistrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Custom fields list by modules fetched successfully | [CustomFieldItem](#customfielditem) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/dimension/find-mandatory

#### POST
##### Summary

Api to provide mandatory dimensions

##### Description

Api to provide mandatory dimensions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [MandatoryDimensionsRequest](#mandatorydimensionsrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Mandatory dimensions fetched successfully | [CustomFieldItem](#customfielditem) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/dimension/max-length-precision

#### POST
##### Summary

Api to bulk update max length and max decimal precision

##### Description

Api to bulk update max length and max decimal precision

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | object |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Max length and max decimal precision updated successfully | [ [CustomFieldItem](#customfielditem) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/dimension/names

#### POST
##### Summary

Get All dimensions by Names

##### Description

Api to get All dimensions by Names

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| attributeSort | query | attributeSort | No | string |
| attributeSortDir | query | attributeSortDir | No | string |
| names | body | names | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched all dimensions by Names successfully. | [ [DimensionDto](#dimensiondto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/dimension/status

#### GET
##### Summary

Get dimensions count by status

##### Description

Api to get dimension count by status

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get dimensions count by status | [DimensionCount](#dimensioncount) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/dimension/supported-fields

#### GET
##### Summary

Get All Supported Custom field types

##### Description

Api to get all Supported Custom field types

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| appName | query | appName | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched all supported field types successfully. | [ [EnumDto](#enumdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/dimension/supported-modules

#### GET
##### Summary

Get All Supported modules

##### Description

Api to get all Supported modules

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| appName | query | appName | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched all supported modules successfully. | [EnumDto](#enumdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/dimension/{id}

#### GET
##### Summary

Fetch dimension by id.

##### Description

API to fetch existing dimension by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| attributeSort | query | attributeSort | No | string |
| attributeSortDir | query | attributeSortDir | No | string |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Dimension information have been fetched successfully. | [DimensionDto](#dimensiondto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Dimension with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update dimension.

##### Description

API to update existing dimension.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| dimensionDto | body | dimensionDto | Yes | [DimensionDto](#dimensiondto) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Dimension has been updated successfully. | [DimensionDto](#dimensiondto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Dimension with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Dimension

##### Description

API to delete a dimension

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Dimension has been deleted successfully. |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update dimension fields

##### Description

API to update fields of existing dimension

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| dimensionAttr | body | dimensionAttr | Yes | object |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Dimension fields have been updated successfully. | [DimensionDto](#dimensiondto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Could not update Dimension. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## attribute-controller
Dimension attributes APIs

### /v1/dimension/attributes/bulk

#### POST
##### Summary

Bulk insert values for multiple dimensions

##### Description

API to Bulk insert values for multiple dimensions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| attributeDtos | body | attributeDtos | Yes | [ [AttributeDto](#attributedto) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Values have been added successfully. | [ [AttributeDto](#attributedto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/dimension/attributes/code/{dimensionCode}

#### POST
##### Summary

Dimension Attributes Creation By Code

##### Description

API to add values to a dimension

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| dimensionCode | path | dimensionCode | Yes | string |
| values | body | values | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [AttributeDto](#attributedto) ] |
| 201 | Value has been added successfully. | [ [AttributeDto](#attributedto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/dimension/attributes/values/{name}

#### GET
##### Summary

Get attribute values by dimension name

##### Description

Api to Get attribute values by dimension name

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| attributeSort | query | attributeSort | No | string |
| attributeSortDir | query | attributeSortDir | No | string |
| name | path | name | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched attribute values by dimension name successfully. | [ [AttributeDto](#attributedto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/dimension/attributes/{dimensionId}

#### POST
##### Summary

Dimension Attributes Creation

##### Description

API to add values to a dimension

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| dimensionId | path | dimensionId | Yes | long |
| values | body | values | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [AttributeDto](#attributedto) ] |
| 201 | Value has been added successfully. | [ [AttributeDto](#attributedto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete given attributes for given dimension id

##### Description

API to delete given attributes for given dimension id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| dimensionId | path | dimensionId | Yes | long |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Dimension has been deleted successfully. | [ [AttributeDto](#attributedto) ] |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/dimension/attributes/{id}

#### PATCH
##### Summary

Update attribute fields

##### Description

API to update fields of existing attributes

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| attributeFields | body | attributeFields | Yes | object |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Attribute fields have been updated successfully. | [AttributeDto](#attributedto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Could not update Attribute. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## class-controller
Class items APIs

### /v1/dimension/class

#### GET
##### Summary

Get All Class

##### Description

Api to get All Class

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched all class successfully. | [ [ClassDto](#classdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Class Creation

##### Description

API to create a class.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| classDto | body | classDto | Yes | [ClassDto](#classdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ClassDto](#classdto) |
| 201 | Class has been created successfully. | [ClassDto](#classdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/dimension/class/{id}

#### GET
##### Summary

Get Class by ID

##### Description

Api to get Class by ID

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched class by Id successfully. | [ [ClassDto](#classdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

updateClass

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| classDto | body | classDto | Yes | [ClassDto](#classdto) |
| id | path | id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Class has been updated successfully. | [ClassDto](#classdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Class with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Class

##### Description

API to delete a class

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Class has been deleted successfully. |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## location-controller
Location items APIs

### /v1/dimension/location

#### GET
##### Summary

Get All Location

##### Description

Api to get All Class

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched all location successfully. | [ [ClassDto](#classdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Location Creation

##### Description

API to create a Location.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| locationDto | body | locationDto | Yes | [LocationDto](#locationdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [LocationDto](#locationdto) |
| 201 | Location has been created successfully. | [LocationDto](#locationdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/dimension/location/label

#### POST
##### Summary

Get All Location by Label

##### Description

Api to get All Location by Label

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| label | body | label | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched all Location by Label successfully. | [ [ClassDto](#classdto) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/dimension/location/{id}

#### GET
##### Summary

Get All Location by ID

##### Description

Api to get All Location by ID

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched all Location by Id successfully. | [ [ClassDto](#classdto) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

updateLocation

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | string |
| locationDto | body | locationDto | Yes | [LocationDto](#locationdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Location has been updated successfully. | [LocationDto](#locationdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Location with id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Location

##### Description

API to delete a Location

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Location has been deleted successfully. |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## static-lookup-controller
Dimension Lookup Values APIs

### /v1/dimension/lookup

#### POST
##### Summary

Api to get lookup values for given field types

##### Description

Api to get lookup values for given field types

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| fieldTypes | body | fieldTypes | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Lookup values for given field types fetched successfully | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## dimension-module-map-controller
Dimension Modules APIs

### /v1/dimension/module

#### PATCH
##### Summary

Update dimension fields

##### Description

API to update fields of existing dimension

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| dimensionModuleMapDto | body | dimensionModuleMapDto | Yes | [ModuleDimensionUpdateRequestDto](#moduledimensionupdaterequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [DimensionModuleMap](#dimensionmodulemap) ] |
| 201 | Dimensions has been updated successfully. | [ [DimensionModuleMap](#dimensionmodulemap) ] |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/dimension/module/{id}

#### POST
##### Summary

Dimension Modules Creation

##### Description

API to add values to a Dimension Module

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| values | body | values | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ string ] |
| 201 | Value has been added successfully. | [ string ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Dimension Module

##### Description

API to delete a dimension modules

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| values | body | values | Yes | [ string ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Dimension Module has been deleted successfully. |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
### Models

#### AttributeDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| defaultOption | boolean | Is this the default option<br/>*Example:* `false` | No |
| parentId | string | Parent attribute id<br/>*Example:* `"007"` | No |
| status | string | Visibility status of attribute<br/>*Enum:* `"ACTIVE"`, `"INACTIVE"`<br/>*Example:* `"ACTIVE"` | No |
| value | string | Attribute Value<br/>*Example:* `"value"` | No |

#### ClassDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| label | string | Class Item Label<br/>*Example:* `"Label"` | Yes |

#### CustomFieldItem

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | Dimension Id<br/>*Example:* `11567` | No |
| label | string | Custom Field Name<br/>*Example:* `"Label"` | Yes |
| module | string | Supported Modules | No |
| value | object | Dimension Value<br/>*Example:* `"XYZ"` | No |

#### CustomFieldsListRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| application | string | *Enum:* `"ERP"`, `"CRM"`, `"CRM3"`, `"PEOPLE"`, `"PEOPLE3"`, `"ALL"` | No |
| modules | [ string ] |  | No |

#### Dimension

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | *Enum:* `"ERP"`, `"CRM"`, `"CRM3"`, `"PEOPLE"`, `"PEOPLE3"`, `"ALL"` | No |
| code | string |  | No |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| decimalPrecision | integer |  | No |
| defaultValue | string |  | No |
| deleted | boolean |  | No |
| description | string |  | No |
| dimensionModules | [ [DimensionModuleMap](#dimensionmodulemap) ] |  | No |
| fieldType | string | *Enum:* `"NUMBER"`, `"TEXT"`, `"DATE"`, `"DROPDOWN"`, `"MULTI_SELECT"`, `"BOOLEAN"`, `"CURRENCY"`, `"COUNTRY"`, `"USER"` | No |
| id | long |  | No |
| label | string |  | No |
| mandatory | boolean |  | No |
| maxLength | integer |  | No |
| parent | [Dimension](#dimension) |  | No |
| shortName | string |  | No |
| status | string | *Enum:* `"ACTIVE"`, `"INACTIVE"` | No |
| system | boolean |  | No |
| tenantId | long |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |

#### DimensionCount

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| count | long |  | No |
| status | string |  | No |

#### DimensionDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Application name ERP/CRM.<br/>*Enum:* `"ERP"`, `"CRM"`, `"CRM3"`, `"PEOPLE"`, `"PEOPLE3"`, `"ALL"`<br/>*Example:* `"ERP"` | No |
| attributes | [ [AttributeDto](#attributedto) ] | Set of possible attributes | No |
| customFieldIndex | integer |  | No |
| decimalPrecision | integer | Decimal precision Value for fields of Number type<br/>*Example:* `2` | No |
| defaultValue | string | Dimension Default Value<br/>*Example:* `"XYZ"` | No |
| description | string | Dimension description<br/>*Example:* `"Custom field for Brand"` | Yes |
| fieldType | string | Dimension Type<br/>*Enum:* `"NUMBER"`, `"TEXT"`, `"DATE"`, `"DROPDOWN"`, `"MULTI_SELECT"`, `"BOOLEAN"`, `"CURRENCY"`, `"COUNTRY"`, `"USER"`<br/>*Example:* `"TEXT"` | No |
| isModuleMapActive | boolean |  | No |
| label | string | Dimension Label<br/>*Example:* `"Label"` | Yes |
| mandatory | boolean | Dimension Mandatory<br/>*Example:* `false` | No |
| maxLength | integer | Maximum length of value<br/>*Example:* `25` | No |
| modules | [ string ] | Supported Modules | No |
| parent | [DimensionDto](#dimensiondto) | Object of dimension if Parent selected<br/>*Example:* `"Dimension"` | No |
| staticLookupValues | [ string ] |  | No |
| status | string | Dimension Status<br/>*Enum:* `"ACTIVE"`, `"INACTIVE"`<br/>*Example:* `"ACTIVE"` | No |
| system | boolean |  | No |

#### DimensionModuleMap

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean |  | No |
| appName | string | *Enum:* `"ERP"`, `"CRM"`, `"CRM3"`, `"PEOPLE"`, `"PEOPLE3"`, `"ALL"` | No |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| customFieldIndex | integer |  | No |
| deleted | boolean |  | No |
| dimension | [Dimension](#dimension) |  | No |
| id | long |  | No |
| module | string | *Enum:* `"CONTACT"`, `"PRODUCT"`, `"INVOICE"`, `"QUOTATION"`, `"ACCOUNT"`, `"JOURNAL"`, `"ORDER"`, `"BILL"`, `"DEAL"`, `"TICKET"`, `"EXPENSE"`, `"DEPOSIT"`, `"DEBITNOTE"`, `"CREDITNOTE"`, `"BOMASSEMBLY"`, `"STOCKADJUSTMENT"`, `"STOCKTRANSFER"`, `"SALESORDER"`, `"JOBWORKOUTORDER"`, `"JOBWORKOUTSTOCKTRANSFER"`, `"FIXEDASSET"` | No |
| tenantId | long |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |

#### EnumDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| key | string |  | No |
| value | string |  | No |

#### LocationDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Is location active<br/>*Example:* `true` | Yes |
| label | string | Location Item Label<br/>*Example:* `"Label"` | Yes |

#### MandatoryDimensionsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| application | string | *Enum:* `"ERP"`, `"CRM"`, `"CRM3"`, `"PEOPLE"`, `"PEOPLE3"`, `"ALL"` | No |

#### ModuleDimensionUpdateRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| dimensionList | [ [DimensionDto](#dimensiondto) ] |  | No |
| moduleName | string | *Enum:* `"CONTACT"`, `"PRODUCT"`, `"INVOICE"`, `"QUOTATION"`, `"ACCOUNT"`, `"JOURNAL"`, `"ORDER"`, `"BILL"`, `"DEAL"`, `"TICKET"`, `"EXPENSE"`, `"DEPOSIT"`, `"DEBITNOTE"`, `"CREDITNOTE"`, `"BOMASSEMBLY"`, `"STOCKADJUSTMENT"`, `"STOCKTRANSFER"`, `"SALESORDER"`, `"JOBWORKOUTORDER"`, `"JOBWORKOUTSTOCKTRANSFER"`, `"FIXEDASSET"` | No |

#### Pageable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| offset | long |  | No |
| pageNumber | integer |  | No |
| pageSize | integer |  | No |
| paged | boolean |  | No |
| sort | [Sort](#sort) |  | No |
| unpaged | boolean |  | No |

#### Page«DimensionDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [DimensionDto](#dimensiondto) ] |  | No |
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

#### Sort

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| empty | boolean |  | No |
| sorted | boolean |  | No |
| unsorted | boolean |  | No |
