---
id: table-api
title: Table API
sidebar_label: Table
---

You will be able to manage your tables with this API

## API
---

### Get All Tables

Show all tables.

##### Description:

- Allows you to retrieve a list of all tables.

#### GET
#### /v1/crm/core/table

##### Request URL

```java
https://bifrost-us.deskera.com/v1/crm/core/table
```

##### Curl

```java
curl -X GET "https://bifrost-us.deskera.com/v1/crm/core/table" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| objectTypes | query | Comma separated objectTypes of tables to fetch | No | string |
| databaseName | query | Database Name associated with tables to fetch | No | string |

##### Sample Response

<details>
<summary>Click to expand/collapse</summary>

```java
{
  "data": [
    {
      "_id": "61faa9c1822a71d710f4f6a4",
      "name": "contact",
      "objectType": "CONTACT",
      "databaseId": "60e57afc1caa010011b513ac",
      "databaseName": "crm",
      "columnsMetaData": [
        {
          "id": "Uvhr",
          "name": "Name",
          "type": "text",
          "index": 0,
          "options": [
            
          ],
          "required": true,
          "width": 174,
          "editable": true,
          "hidden": false,
          "systemField": true,
          "uiVisible": true,
          "columnCode": "name",
          "datasource": [
            
          ]
        },
        {
          "id": "JofH",
          "name": "Email",
          "type": "email",
          "index": 1,
          "options": [
            
          ],
          "required": false,
          "width": 236,
          "editable": true,
          "hidden": false,
          "systemField": true,
          "uiVisible": true,
          "columnCode": "email",
          "datasource": [
            
          ]
        },
        {
          "id": "VKQV",
          "name": "Type",
          "type": "select",
          "index": 2,
          "options": [
            {
              "name": "People",
              "id": 1,
              "color": "data-grid-badge-color-1",
              "systemField": true
            },
            {
              "name": "Organization",
              "id": 2,
              "color": "data-grid-badge-color-2",
              "systemField": true
            }
          ],
          "required": false,
          "width": 125,
          "editable": true,
          "hidden": false,
          "systemField": true,
          "uiVisible": true,
          "columnCode": "type",
          "datasource": [
            
          ],
          "allowAddOption": true
        },
        {
          "id": "VKek",
          "name": "Phone",
          "type": "phone",
          "index": 3,
          "options": [
            
          ],
          "required": false,
          "width": 144,
          "editable": true,
          "hidden": false,
          "systemField": false,
          "uiVisible": true,
          "columnCode": "phone",
          "datasource": [
            
          ]
        },
        {
          "id": "5ZLD",
          "name": "Organization",
          "type": "text",
          "index": 4,
          "options": [
            
          ],
          "required": false,
          "width": 148,
          "editable": true,
          "hidden": false,
          "systemField": false,
          "uiVisible": true,
          "columnCode": "organization",
          "datasource": [
            
          ]
        },
        {
          "id": "UgCs",
          "name": "Address",
          "type": "text",
          "index": 5,
          "options": [
            
          ],
          "required": false,
          "width": 172,
          "editable": true,
          "hidden": false,
          "systemField": false,
          "uiVisible": true,
          "columnCode": "address",
          "datasource": [
            
          ]
        },
        {
          "id": "HLsw",
          "name": "Segment",
          "type": "multi-select",
          "index": 6,
          "options": [
            {
              "name": "Master List",
              "id": 1,
              "color": "data-grid-badge-color-1",
              "systemField": true
            },
            {
              "id": 7661,
              "name": "My Seg 1",
              "color": "data-grid-badge-color-3"
            }
          ],
          "required": false,
          "width": 250,
          "editable": true,
          "hidden": false,
          "systemField": true,
          "uiVisible": true,
          "columnCode": "segment",
          "datasource": [
            
          ],
          "allowAddOption": true
        },
        {
          "id": "8TlJ",
          "name": "Status",
          "type": "select",
          "index": 7,
          "options": [
            {
              "name": "Active",
              "id": 1,
              "color": "data-grid-badge-color-6",
              "systemField": true
            },
            {
              "name": "In-Active",
              "id": 2,
              "color": "data-grid-badge-color-10",
              "systemField": true
            }
          ],
          "required": false,
          "width": 87,
          "editable": true,
          "hidden": false,
          "systemField": true,
          "uiVisible": true,
          "columnCode": "status",
          "datasource": [
            
          ],
          "allowAddOption": true
        },
        {
          "id": "QFyJ",
          "name": "Label",
          "type": "select",
          "index": 8,
          "options": [
            {
              "name": "Cold Lead ❄️",
              "id": 1,
              "color": "data-grid-badge-color-7",
              "systemField": true
            },
            {
              "name": "Hot Lead 🔥",
              "id": 2,
              "color": "data-grid-badge-color-10",
              "systemField": true
            },
            {
              "name": "Warm Lead ♨️",
              "id": 3,
              "color": "data-grid-badge-color-5",
              "systemField": true
            }
          ],
          "required": false,
          "width": 123,
          "editable": true,
          "hidden": false,
          "systemField": false,
          "uiVisible": true,
          "columnCode": "label",
          "datasource": [
            
          ],
          "allowAddOption": true
        },
        {
          "id": "hqta",
          "name": "Profile Pic",
          "type": "text",
          "index": 9,
          "options": null,
          "required": false,
          "width": 250,
          "editable": true,
          "hidden": true,
          "systemField": true,
          "uiVisible": false,
          "columnCode": "profile_pic",
          "datasource": [
            
          ]
        },
        {
          "name": "Unsubscribed",
          "columnCode": "unsubscribed",
          "type": "boolean",
          "index": 10,
          "options": null,
          "required": false,
          "width": 250,
          "editable": false,
          "hidden": true,
          "systemField": true,
          "uiVisible": false,
          "id": "5PCd",
          "datasource": [
            
          ]
        },
        {
          "name": "Source",
          "columnCode": "source",
          "type": "string",
          "index": 11,
          "options": null,
          "required": false,
          "width": 250,
          "editable": false,
          "hidden": true,
          "systemField": true,
          "uiVisible": false,
          "id": "a2vj"
        },
        {
          "name": "Source Id",
          "columnCode": "source_id",
          "type": "text",
          "index": 12,
          "options": null,
          "required": false,
          "width": 250,
          "editable": false,
          "hidden": true,
          "systemField": true,
          "uiVisible": false,
          "id": "QbZm"
        },
        {
          "name": "Created At",
          "columnCode": "created_at",
          "type": "date",
          "index": 13,
          "options": [
            
          ],
          "required": false,
          "width": 117,
          "editable": false,
          "hidden": false,
          "systemField": true,
          "uiVisible": true,
          "id": "iPz8"
        },
        {
          "id": "30Tf",
          "name": "Attachment",
          "columnCode": "attachment",
          "type": "json",
          "index": 14,
          "options": null,
          "required": false,
          "width": 150,
          "editable": false,
          "hidden": false,
          "systemField": true,
          "uiVisible": true
        },
        {
          "name": "Books Contact Id",
          "type": "number",
          "options": null,
          "required": false,
          "width": 250,
          "editable": false,
          "hidden": true,
          "systemField": true,
          "uiVisible": false,
          "columnCode": "books_contact_id",
          "id": "gulv",
          "index": 15
        },
        {
          "id": "KvRO",
          "name": "Country",
          "columnCode": "",
          "type": "text",
          "index": 16,
          "options": [
            
          ],
          "datasource": null,
          "required": false,
          "width": 220,
          "editable": true,
          "hidden": false,
          "systemField": false,
          "uiVisible": true
        },
        {
          "name": "Note",
          "columnCode": "note",
          "type": "json_array",
          "index": 17,
          "options": null,
          "required": false,
          "width": 250,
          "editable": false,
          "hidden": true,
          "systemField": true,
          "uiVisible": true,
          "id": "lRkX"
        },
        {
          "name": "Owner",
          "type": "user",
          "options": null,
          "required": false,
          "width": 250,
          "editable": true,
          "hidden": false,
          "systemField": true,
          "uiVisible": true,
          "columnCode": "owner_id",
          "datasource": [
            
          ],
          "id": "Fvks",
          "index": 18
        }
      ],
      "createdAt": "2022-02-02T15:56:49.824Z",
      "createdBy": 231183,
      "updatedAt": "2022-04-19T08:28:15.007Z"
    },
    {
      "_id": "61faa9c1822a71d710f4f6c8",
      "name": "deal",
      "objectType": "DEAL",
      "databaseId": "60e57afc1caa010011b513ac",
      "databaseName": "crm",
      "columnsMetaData": [
        {
          "id": "lLAQ",
          "name": "Name",
          "type": "text",
          "index": 0,
          "options": null,
          "required": true,
          "width": 250,
          "editable": true,
          "hidden": false,
          "systemField": true,
          "uiVisible": true,
          "columnCode": "name",
          "datasource": [
            
          ]
        },
        {
          "id": "51z1",
          "name": "Closing Date",
          "type": "date",
          "index": 1,
          "options": null,
          "required": false,
          "width": 250,
          "editable": true,
          "hidden": false,
          "systemField": true,
          "uiVisible": true,
          "columnCode": "closing_date",
          "datasource": [
            
          ]
        },
        {
          "id": "TL0y",
          "name": "Stage",
          "type": "ref",
          "index": 2,
          "options": null,
          "required": true,
          "width": 250,
          "editable": true,
          "hidden": true,
          "systemField": true,
          "uiVisible": false,
          "columnCode": "stage_id",
          "refTable": {
            "_id": "61faa9c1822a71d710f4f6c2",
            "objectType": "STAGE"
          },
          "datasource": [
            
          ],
          "allowAddOption": true
        },
        {
          "id": "nFek",
          "name": "Amount",
          "type": "number",
          "index": 3,
          "options": null,
          "required": false,
          "width": 250,
          "editable": true,
          "hidden": false,
          "systemField": true,
          "uiVisible": true,
          "columnCode": "amount",
          "datasource": [
            
          ]
        },
        {
          "id": "t3nA",
          "name": "Contact",
          "type": "ref",
          "index": 4,
          "options": null,
          "required": false,
          "width": 250,
          "editable": true,
          "hidden": true,
          "systemField": true,
          "uiVisible": false,
          "columnCode": "contact_id",
          "refTable": {
            "_id": "61faa9c1822a71d710f4f6a4",
            "objectType": "CONTACT"
          },
          "datasource": [
            
          ],
          "allowAddOption": true
        },
        {
          "id": "cuEj",
          "name": "Deal Date",
          "type": "date",
          "index": 5,
          "options": null,
          "required": false,
          "width": 250,
          "editable": true,
          "hidden": false,
          "systemField": true,
          "uiVisible": true,
          "columnCode": "deal_date",
          "datasource": [
            
          ]
        },
        {
          "id": "JK95",
          "name": "Deal Owner",
          "type": "user",
          "index": 6,
          "options": null,
          "required": false,
          "width": 250,
          "editable": true,
          "hidden": false,
          "systemField": true,
          "uiVisible": true,
          "columnCode": "owner_id",
          "datasource": [
            
          ],
          "allowAddOption": true
        },
        {
          "id": "WCDY",
          "name": "Visibility",
          "type": "select",
          "index": 7,
          "options": [
            {
              "name": "Private",
              "id": 1,
              "systemField": true,
              "color": "data-grid-badge-color-10"
            },
            {
              "name": "Team",
              "id": 2,
              "systemField": true,
              "color": "data-grid-badge-color-7"
            },
            {
              "name": "Everyone",
              "id": 3,
              "systemField": true,
              "color": "data-grid-badge-color-1"
            }
          ],
          "required": false,
          "width": 250,
          "editable": true,
          "hidden": true,
          "systemField": true,
          "uiVisible": false,
          "columnCode": "visibility",
          "datasource": [
            
          ],
          "allowAddOption": true
        },
        {
          "id": "vWRe",
          "name": "Organization",
          "type": "ref",
          "index": 8,
          "options": null,
          "required": false,
          "width": 250,
          "editable": true,
          "hidden": true,
          "systemField": true,
          "uiVisible": false,
          "columnCode": "organization_id",
          "refTable": {
            "_id": "61faa9c1822a71d710f4f6a4",
            "objectType": "CONTACT"
          },
          "datasource": [
            
          ],
          "allowAddOption": true
        },
        {
          "id": "j6zv",
          "name": "Pipeline",
          "columnCode": "pipeline_id",
          "type": "ref",
          "index": 9,
          "options": null,
          "required": true,
          "width": 250,
          "editable": true,
          "hidden": true,
          "systemField": true,
          "uiVisible": false,
          "refTable": {
            "_id": "61faa9c1822a71d710f4f6bc",
            "objectType": "PIPELINE"
          },
          "datasource": [
            
          ],
          "allowAddOption": true
        },
        {
          "name": "Status",
          "columnCode": "status",
          "type": "number",
          "index": 10,
          "options": null,
          "required": false,
          "width": 250,
          "editable": true,
          "hidden": true,
          "systemField": true,
          "uiVisible": false,
          "id": "3k1O",
          "datasource": [
            
          ]
        },
        {
          "name": "Reason",
          "columnCode": "reason",
          "type": "text",
          "index": 11,
          "options": null,
          "required": false,
          "width": 250,
          "editable": false,
          "hidden": false,
          "systemField": true,
          "uiVisible": true,
          "id": "amz1",
          "datasource": [
            
          ]
        },
        {
          "id": "3UTH",
          "name": "Note",
          "columnCode": "note",
          "type": "json_array",
          "index": 12,
          "options": null,
          "required": false,
          "width": 250,
          "editable": false,
          "hidden": true,
          "systemField": true,
          "uiVisible": true,
          "datasource": [
            
          ]
        },
        {
          "name": "Source",
          "columnCode": "source",
          "type": "string",
          "index": 13,
          "options": null,
          "required": false,
          "width": 250,
          "editable": false,
          "hidden": true,
          "systemField": true,
          "uiVisible": false,
          "id": "stxU"
        },
        {
          "name": "Source Id",
          "columnCode": "source_id",
          "type": "text",
          "index": 14,
          "options": null,
          "required": false,
          "width": 250,
          "editable": false,
          "hidden": true,
          "systemField": true,
          "uiVisible": false,
          "id": "VXpo"
        },
        {
          "name": "Created At",
          "columnCode": "created_at",
          "type": "date",
          "index": 15,
          "options": null,
          "required": false,
          "width": 250,
          "editable": false,
          "hidden": false,
          "systemField": true,
          "uiVisible": true,
          "id": "VcXB"
        },
        {
          "id": "ERWE",
          "name": "Attachment",
          "columnCode": "attachment",
          "type": "json",
          "index": 16,
          "options": null,
          "required": false,
          "width": 150,
          "editable": false,
          "hidden": false,
          "systemField": true,
          "uiVisible": true
        }
      ],
      "createdAt": "2022-02-02T15:56:49.827Z",
      "createdBy": 231183,
      "updatedAt": "2022-02-08T12:47:15.390Z"
    }
  ],
  "totalCount": 32
}
```
</details>

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TableListResponse](#tablelistresponse) |
| 401 | Unauthorized |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |


---

### Get Table by ID

Get a Table by ID

##### Description:

- Allows you to retrieve a table by its unique id.

#### GET
#### /v1/crm/core/table/{tableId}

##### Request URL

```java
https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4
```

##### Curl

```java
curl -X GET "https://bifrost-us.deskera.com/v1/crm/core/table/61faa9c1822a71d710f4f6a4" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tableId | path | Unique id | Yes | string |

##### Sample Response

<details>
<summary>Click to expand/collapse</summary>

```java
{
  "_id": "61faa9c1822a71d710f4f6a4",
  "name": "contact",
  "objectType": "CONTACT",
  "databaseId": "60e57afc1caa010011b513ac",
  "databaseName": "crm",
  "columnsMetaData": [
    {
      "id": "Uvhr",
      "name": "Name",
      "type": "text",
      "index": 0,
      "options": [
        
      ],
      "required": true,
      "width": 174,
      "editable": true,
      "hidden": false,
      "systemField": true,
      "uiVisible": true,
      "columnCode": "name",
      "datasource": [
        
      ]
    },
    {
      "id": "JofH",
      "name": "Email",
      "type": "email",
      "index": 1,
      "options": [
        
      ],
      "required": false,
      "width": 236,
      "editable": true,
      "hidden": false,
      "systemField": true,
      "uiVisible": true,
      "columnCode": "email",
      "datasource": [
        
      ]
    },
    {
      "id": "VKQV",
      "name": "Type",
      "type": "select",
      "index": 2,
      "options": [
        {
          "name": "People",
          "id": 1,
          "color": "data-grid-badge-color-1",
          "systemField": true
        },
        {
          "name": "Organization",
          "id": 2,
          "color": "data-grid-badge-color-2",
          "systemField": true
        }
      ],
      "required": false,
      "width": 125,
      "editable": true,
      "hidden": false,
      "systemField": true,
      "uiVisible": true,
      "columnCode": "type",
      "datasource": [
        
      ],
      "allowAddOption": true
    },
    {
      "id": "VKek",
      "name": "Phone",
      "type": "phone",
      "index": 3,
      "options": [
        
      ],
      "required": false,
      "width": 144,
      "editable": true,
      "hidden": false,
      "systemField": false,
      "uiVisible": true,
      "columnCode": "phone",
      "datasource": [
        
      ]
    },
    {
      "id": "5ZLD",
      "name": "Organization",
      "type": "text",
      "index": 4,
      "options": [
        
      ],
      "required": false,
      "width": 148,
      "editable": true,
      "hidden": false,
      "systemField": false,
      "uiVisible": true,
      "columnCode": "organization",
      "datasource": [
        
      ]
    },
    {
      "id": "UgCs",
      "name": "Address",
      "type": "text",
      "index": 5,
      "options": [
        
      ],
      "required": false,
      "width": 172,
      "editable": true,
      "hidden": false,
      "systemField": false,
      "uiVisible": true,
      "columnCode": "address",
      "datasource": [
        
      ]
    },
    {
      "id": "HLsw",
      "name": "Segment",
      "type": "multi-select",
      "index": 6,
      "options": [
        {
          "name": "Master List",
          "id": 1,
          "color": "data-grid-badge-color-1",
          "systemField": true
        },
        {
          "id": 7661,
          "name": "My Seg 1",
          "color": "data-grid-badge-color-3"
        }
      ],
      "required": false,
      "width": 250,
      "editable": true,
      "hidden": false,
      "systemField": true,
      "uiVisible": true,
      "columnCode": "segment",
      "datasource": [
        
      ],
      "allowAddOption": true
    },
    {
      "id": "8TlJ",
      "name": "Status",
      "type": "select",
      "index": 7,
      "options": [
        {
          "name": "Active",
          "id": 1,
          "color": "data-grid-badge-color-6",
          "systemField": true
        },
        {
          "name": "In-Active",
          "id": 2,
          "color": "data-grid-badge-color-10",
          "systemField": true
        }
      ],
      "required": false,
      "width": 87,
      "editable": true,
      "hidden": false,
      "systemField": true,
      "uiVisible": true,
      "columnCode": "status",
      "datasource": [
        
      ],
      "allowAddOption": true
    },
    {
      "id": "QFyJ",
      "name": "Label",
      "type": "select",
      "index": 8,
      "options": [
        {
          "name": "Cold Lead ❄️",
          "id": 1,
          "color": "data-grid-badge-color-7",
          "systemField": true
        },
        {
          "name": "Hot Lead 🔥",
          "id": 2,
          "color": "data-grid-badge-color-10",
          "systemField": true
        },
        {
          "name": "Warm Lead ♨️",
          "id": 3,
          "color": "data-grid-badge-color-5",
          "systemField": true
        }
      ],
      "required": false,
      "width": 123,
      "editable": true,
      "hidden": false,
      "systemField": false,
      "uiVisible": true,
      "columnCode": "label",
      "datasource": [
        
      ],
      "allowAddOption": true
    },
    {
      "id": "hqta",
      "name": "Profile Pic",
      "type": "text",
      "index": 9,
      "options": null,
      "required": false,
      "width": 250,
      "editable": true,
      "hidden": true,
      "systemField": true,
      "uiVisible": false,
      "columnCode": "profile_pic",
      "datasource": [
        
      ]
    },
    {
      "name": "Unsubscribed",
      "columnCode": "unsubscribed",
      "type": "boolean",
      "index": 10,
      "options": null,
      "required": false,
      "width": 250,
      "editable": false,
      "hidden": true,
      "systemField": true,
      "uiVisible": false,
      "id": "5PCd",
      "datasource": [
        
      ]
    },
    {
      "name": "Source",
      "columnCode": "source",
      "type": "string",
      "index": 11,
      "options": null,
      "required": false,
      "width": 250,
      "editable": false,
      "hidden": true,
      "systemField": true,
      "uiVisible": false,
      "id": "a2vj"
    },
    {
      "name": "Source Id",
      "columnCode": "source_id",
      "type": "text",
      "index": 12,
      "options": null,
      "required": false,
      "width": 250,
      "editable": false,
      "hidden": true,
      "systemField": true,
      "uiVisible": false,
      "id": "QbZm"
    },
    {
      "name": "Created At",
      "columnCode": "created_at",
      "type": "date",
      "index": 13,
      "options": [
        
      ],
      "required": false,
      "width": 117,
      "editable": false,
      "hidden": false,
      "systemField": true,
      "uiVisible": true,
      "id": "iPz8"
    },
    {
      "id": "30Tf",
      "name": "Attachment",
      "columnCode": "attachment",
      "type": "json",
      "index": 14,
      "options": null,
      "required": false,
      "width": 150,
      "editable": false,
      "hidden": false,
      "systemField": true,
      "uiVisible": true
    },
    {
      "name": "Books Contact Id",
      "type": "number",
      "options": null,
      "required": false,
      "width": 250,
      "editable": false,
      "hidden": true,
      "systemField": true,
      "uiVisible": false,
      "columnCode": "books_contact_id",
      "id": "gulv",
      "index": 15
    },
    {
      "id": "KvRO",
      "name": "Country",
      "columnCode": "",
      "type": "text",
      "index": 16,
      "options": [
        
      ],
      "datasource": null,
      "required": false,
      "width": 220,
      "editable": true,
      "hidden": false,
      "systemField": false,
      "uiVisible": true
    },
    {
      "name": "Note",
      "columnCode": "note",
      "type": "json_array",
      "index": 17,
      "options": null,
      "required": false,
      "width": 250,
      "editable": false,
      "hidden": true,
      "systemField": true,
      "uiVisible": true,
      "id": "lRkX"
    },
    {
      "name": "Owner",
      "type": "user",
      "options": null,
      "required": false,
      "width": 250,
      "editable": true,
      "hidden": false,
      "systemField": true,
      "uiVisible": true,
      "columnCode": "owner_id",
      "datasource": [
        
      ],
      "id": "Fvks",
      "index": 18
    }
  ],
  "createdAt": "2022-02-02T15:56:49.824Z",
  "createdBy": 231183,
  "updatedAt": "2022-04-19T08:28:15.007Z"
}
```
</details>

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Table](#table) |
| 401 | Unauthorized |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

---

### Get All Tables by objectType

Show all tables mapped with objectType.

##### Description:

- Allows you to retrieve a list of all tables mapped with their objectType.

#### GET
#### /v1/crm/core/table/by-object-type

##### Request URL

```java
https://bifrost-us.deskera.com/v1/crm/core/table/by-object-type
```

##### Curl

```java
curl -X GET "https://bifrost-us.deskera.com/v1/crm/core/table/by-object-type" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| objectTypes | query | Comma separated objectTypes of tables to fetch | No | string |
| databaseName | query | Database Name associated with tables to fetch | No | string |

##### Sample Response

<details>
<summary>Click to expand/collapse</summary>

```java
{
  "CONTACT": {
    "_id": "61faa9c1822a71d710f4f6a4",
    "name": "contact",
    "objectType": "CONTACT",
    "databaseId": "60e57afc1caa010011b513ac",
    "databaseName": "crm",
    "columnsMetaData": [
      {
        "id": "Uvhr",
        "name": "Name",
        "type": "text",
        "index": 0,
        "options": [
          
        ],
        "required": true,
        "width": 174,
        "editable": true,
        "hidden": false,
        "systemField": true,
        "uiVisible": true,
        "columnCode": "name",
        "datasource": [
          
        ]
      },
      {
        "id": "JofH",
        "name": "Email",
        "type": "email",
        "index": 1,
        "options": [
          
        ],
        "required": false,
        "width": 236,
        "editable": true,
        "hidden": false,
        "systemField": true,
        "uiVisible": true,
        "columnCode": "email",
        "datasource": [
          
        ]
      },
      {
        "id": "VKQV",
        "name": "Type",
        "type": "select",
        "index": 2,
        "options": [
          {
            "name": "People",
            "id": 1,
            "color": "data-grid-badge-color-1",
            "systemField": true
          },
          {
            "name": "Organization",
            "id": 2,
            "color": "data-grid-badge-color-2",
            "systemField": true
          }
        ],
        "required": false,
        "width": 125,
        "editable": true,
        "hidden": false,
        "systemField": true,
        "uiVisible": true,
        "columnCode": "type",
        "datasource": [
          
        ],
        "allowAddOption": true
      },
      {
        "id": "VKek",
        "name": "Phone",
        "type": "phone",
        "index": 3,
        "options": [
          
        ],
        "required": false,
        "width": 144,
        "editable": true,
        "hidden": false,
        "systemField": false,
        "uiVisible": true,
        "columnCode": "phone",
        "datasource": [
          
        ]
      },
      {
        "id": "5ZLD",
        "name": "Organization",
        "type": "text",
        "index": 4,
        "options": [
          
        ],
        "required": false,
        "width": 148,
        "editable": true,
        "hidden": false,
        "systemField": false,
        "uiVisible": true,
        "columnCode": "organization",
        "datasource": [
          
        ]
      },
      {
        "id": "UgCs",
        "name": "Address",
        "type": "text",
        "index": 5,
        "options": [
          
        ],
        "required": false,
        "width": 172,
        "editable": true,
        "hidden": false,
        "systemField": false,
        "uiVisible": true,
        "columnCode": "address",
        "datasource": [
          
        ]
      },
      {
        "id": "HLsw",
        "name": "Segment",
        "type": "multi-select",
        "index": 6,
        "options": [
          {
            "name": "Master List",
            "id": 1,
            "color": "data-grid-badge-color-1",
            "systemField": true
          },
          {
            "id": 7661,
            "name": "My Seg 1",
            "color": "data-grid-badge-color-3"
          }
        ],
        "required": false,
        "width": 250,
        "editable": true,
        "hidden": false,
        "systemField": true,
        "uiVisible": true,
        "columnCode": "segment",
        "datasource": [
          
        ],
        "allowAddOption": true
      },
      {
        "id": "8TlJ",
        "name": "Status",
        "type": "select",
        "index": 7,
        "options": [
          {
            "name": "Active",
            "id": 1,
            "color": "data-grid-badge-color-6",
            "systemField": true
          },
          {
            "name": "In-Active",
            "id": 2,
            "color": "data-grid-badge-color-10",
            "systemField": true
          }
        ],
        "required": false,
        "width": 87,
        "editable": true,
        "hidden": false,
        "systemField": true,
        "uiVisible": true,
        "columnCode": "status",
        "datasource": [
          
        ],
        "allowAddOption": true
      },
      {
        "id": "QFyJ",
        "name": "Label",
        "type": "select",
        "index": 8,
        "options": [
          {
            "name": "Cold Lead ❄️",
            "id": 1,
            "color": "data-grid-badge-color-7",
            "systemField": true
          },
          {
            "name": "Hot Lead 🔥",
            "id": 2,
            "color": "data-grid-badge-color-10",
            "systemField": true
          },
          {
            "name": "Warm Lead ♨️",
            "id": 3,
            "color": "data-grid-badge-color-5",
            "systemField": true
          }
        ],
        "required": false,
        "width": 123,
        "editable": true,
        "hidden": false,
        "systemField": false,
        "uiVisible": true,
        "columnCode": "label",
        "datasource": [
          
        ],
        "allowAddOption": true
      },
      {
        "id": "hqta",
        "name": "Profile Pic",
        "type": "text",
        "index": 9,
        "options": null,
        "required": false,
        "width": 250,
        "editable": true,
        "hidden": true,
        "systemField": true,
        "uiVisible": false,
        "columnCode": "profile_pic",
        "datasource": [
          
        ]
      },
      {
        "name": "Unsubscribed",
        "columnCode": "unsubscribed",
        "type": "boolean",
        "index": 10,
        "options": null,
        "required": false,
        "width": 250,
        "editable": false,
        "hidden": true,
        "systemField": true,
        "uiVisible": false,
        "id": "5PCd",
        "datasource": [
          
        ]
      },
      {
        "name": "Source",
        "columnCode": "source",
        "type": "string",
        "index": 11,
        "options": null,
        "required": false,
        "width": 250,
        "editable": false,
        "hidden": true,
        "systemField": true,
        "uiVisible": false,
        "id": "a2vj"
      },
      {
        "name": "Source Id",
        "columnCode": "source_id",
        "type": "text",
        "index": 12,
        "options": null,
        "required": false,
        "width": 250,
        "editable": false,
        "hidden": true,
        "systemField": true,
        "uiVisible": false,
        "id": "QbZm"
      },
      {
        "name": "Created At",
        "columnCode": "created_at",
        "type": "date",
        "index": 13,
        "options": [
          
        ],
        "required": false,
        "width": 117,
        "editable": false,
        "hidden": false,
        "systemField": true,
        "uiVisible": true,
        "id": "iPz8"
      },
      {
        "id": "30Tf",
        "name": "Attachment",
        "columnCode": "attachment",
        "type": "json",
        "index": 14,
        "options": null,
        "required": false,
        "width": 150,
        "editable": false,
        "hidden": false,
        "systemField": true,
        "uiVisible": true
      },
      {
        "name": "Books Contact Id",
        "type": "number",
        "options": null,
        "required": false,
        "width": 250,
        "editable": false,
        "hidden": true,
        "systemField": true,
        "uiVisible": false,
        "columnCode": "books_contact_id",
        "id": "gulv",
        "index": 15
      },
      {
        "id": "KvRO",
        "name": "Country",
        "columnCode": "",
        "type": "text",
        "index": 16,
        "options": [
          
        ],
        "datasource": null,
        "required": false,
        "width": 220,
        "editable": true,
        "hidden": false,
        "systemField": false,
        "uiVisible": true
      },
      {
        "name": "Note",
        "columnCode": "note",
        "type": "json_array",
        "index": 17,
        "options": null,
        "required": false,
        "width": 250,
        "editable": false,
        "hidden": true,
        "systemField": true,
        "uiVisible": true,
        "id": "lRkX"
      },
      {
        "name": "Owner",
        "type": "user",
        "options": null,
        "required": false,
        "width": 250,
        "editable": true,
        "hidden": false,
        "systemField": true,
        "uiVisible": true,
        "columnCode": "owner_id",
        "datasource": [
          
        ],
        "id": "Fvks",
        "index": 18
      }
    ],
    "createdAt": "2022-02-02T15:56:49.824Z",
    "createdBy": 231183,
    "updatedAt": "2022-04-19T08:28:15.007Z"
  },
  "DEAL": {
    "_id": "61faa9c1822a71d710f4f6c8",
    "name": "deal",
    "objectType": "DEAL",
    "databaseId": "60e57afc1caa010011b513ac",
    "databaseName": "crm",
    "columnsMetaData": [
      {
        "id": "lLAQ",
        "name": "Name",
        "type": "text",
        "index": 0,
        "options": null,
        "required": true,
        "width": 250,
        "editable": true,
        "hidden": false,
        "systemField": true,
        "uiVisible": true,
        "columnCode": "name",
        "datasource": [
          
        ]
      },
      {
        "id": "51z1",
        "name": "Closing Date",
        "type": "date",
        "index": 1,
        "options": null,
        "required": false,
        "width": 250,
        "editable": true,
        "hidden": false,
        "systemField": true,
        "uiVisible": true,
        "columnCode": "closing_date",
        "datasource": [
          
        ]
      },
      {
        "id": "TL0y",
        "name": "Stage",
        "type": "ref",
        "index": 2,
        "options": null,
        "required": true,
        "width": 250,
        "editable": true,
        "hidden": true,
        "systemField": true,
        "uiVisible": false,
        "columnCode": "stage_id",
        "refTable": {
          "_id": "61faa9c1822a71d710f4f6c2",
          "objectType": "STAGE"
        },
        "datasource": [
          
        ],
        "allowAddOption": true
      },
      {
        "id": "nFek",
        "name": "Amount",
        "type": "number",
        "index": 3,
        "options": null,
        "required": false,
        "width": 250,
        "editable": true,
        "hidden": false,
        "systemField": true,
        "uiVisible": true,
        "columnCode": "amount",
        "datasource": [
          
        ]
      },
      {
        "id": "t3nA",
        "name": "Contact",
        "type": "ref",
        "index": 4,
        "options": null,
        "required": false,
        "width": 250,
        "editable": true,
        "hidden": true,
        "systemField": true,
        "uiVisible": false,
        "columnCode": "contact_id",
        "refTable": {
          "_id": "61faa9c1822a71d710f4f6a4",
          "objectType": "CONTACT"
        },
        "datasource": [
          
        ],
        "allowAddOption": true
      },
      {
        "id": "cuEj",
        "name": "Deal Date",
        "type": "date",
        "index": 5,
        "options": null,
        "required": false,
        "width": 250,
        "editable": true,
        "hidden": false,
        "systemField": true,
        "uiVisible": true,
        "columnCode": "deal_date",
        "datasource": [
          
        ]
      },
      {
        "id": "JK95",
        "name": "Deal Owner",
        "type": "user",
        "index": 6,
        "options": null,
        "required": false,
        "width": 250,
        "editable": true,
        "hidden": false,
        "systemField": true,
        "uiVisible": true,
        "columnCode": "owner_id",
        "datasource": [
          
        ],
        "allowAddOption": true
      },
      {
        "id": "WCDY",
        "name": "Visibility",
        "type": "select",
        "index": 7,
        "options": [
          {
            "name": "Private",
            "id": 1,
            "systemField": true,
            "color": "data-grid-badge-color-10"
          },
          {
            "name": "Team",
            "id": 2,
            "systemField": true,
            "color": "data-grid-badge-color-7"
          },
          {
            "name": "Everyone",
            "id": 3,
            "systemField": true,
            "color": "data-grid-badge-color-1"
          }
        ],
        "required": false,
        "width": 250,
        "editable": true,
        "hidden": true,
        "systemField": true,
        "uiVisible": false,
        "columnCode": "visibility",
        "datasource": [
          
        ],
        "allowAddOption": true
      },
      {
        "id": "vWRe",
        "name": "Organization",
        "type": "ref",
        "index": 8,
        "options": null,
        "required": false,
        "width": 250,
        "editable": true,
        "hidden": true,
        "systemField": true,
        "uiVisible": false,
        "columnCode": "organization_id",
        "refTable": {
          "_id": "61faa9c1822a71d710f4f6a4",
          "objectType": "CONTACT"
        },
        "datasource": [
          
        ],
        "allowAddOption": true
      },
      {
        "id": "j6zv",
        "name": "Pipeline",
        "columnCode": "pipeline_id",
        "type": "ref",
        "index": 9,
        "options": null,
        "required": true,
        "width": 250,
        "editable": true,
        "hidden": true,
        "systemField": true,
        "uiVisible": false,
        "refTable": {
          "_id": "61faa9c1822a71d710f4f6bc",
          "objectType": "PIPELINE"
        },
        "datasource": [
          
        ],
        "allowAddOption": true
      },
      {
        "name": "Status",
        "columnCode": "status",
        "type": "number",
        "index": 10,
        "options": null,
        "required": false,
        "width": 250,
        "editable": true,
        "hidden": true,
        "systemField": true,
        "uiVisible": false,
        "id": "3k1O",
        "datasource": [
          
        ]
      },
      {
        "name": "Reason",
        "columnCode": "reason",
        "type": "text",
        "index": 11,
        "options": null,
        "required": false,
        "width": 250,
        "editable": false,
        "hidden": false,
        "systemField": true,
        "uiVisible": true,
        "id": "amz1",
        "datasource": [
          
        ]
      },
      {
        "id": "3UTH",
        "name": "Note",
        "columnCode": "note",
        "type": "json_array",
        "index": 12,
        "options": null,
        "required": false,
        "width": 250,
        "editable": false,
        "hidden": true,
        "systemField": true,
        "uiVisible": true,
        "datasource": [
          
        ]
      },
      {
        "name": "Source",
        "columnCode": "source",
        "type": "string",
        "index": 13,
        "options": null,
        "required": false,
        "width": 250,
        "editable": false,
        "hidden": true,
        "systemField": true,
        "uiVisible": false,
        "id": "stxU"
      },
      {
        "name": "Source Id",
        "columnCode": "source_id",
        "type": "text",
        "index": 14,
        "options": null,
        "required": false,
        "width": 250,
        "editable": false,
        "hidden": true,
        "systemField": true,
        "uiVisible": false,
        "id": "VXpo"
      },
      {
        "name": "Created At",
        "columnCode": "created_at",
        "type": "date",
        "index": 15,
        "options": null,
        "required": false,
        "width": 250,
        "editable": false,
        "hidden": false,
        "systemField": true,
        "uiVisible": true,
        "id": "VcXB"
      },
      {
        "id": "ERWE",
        "name": "Attachment",
        "columnCode": "attachment",
        "type": "json",
        "index": 16,
        "options": null,
        "required": false,
        "width": 150,
        "editable": false,
        "hidden": false,
        "systemField": true,
        "uiVisible": true
      }
    ],
    "createdAt": "2022-02-02T15:56:49.827Z",
    "createdBy": 231183,
    "updatedAt": "2022-02-08T12:47:15.390Z"
  }
}
```
</details>

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | Tables mapped with objectType |
| 401 | Unauthorized |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |


## Models
---

### TableListResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | List of [Table](#table) |  | Yes |
| totalCount | integer |  | Yes |

### Table

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| _id | string | unique id | Yes |
| name | string | Name of the table | No |
| objectType | string | Unique readable type | No |
| databaseId | string |  | No |
| databaseName | string | Name of the database where table records are stored | No |
| columnsMetaData | List of [Column](#column) |  | No |
| createdAt | string | ISO timestamp | No |
| updatedAt | string | ISO timestamp | No |
| createdBy | integer | iamUserId of the user who created the table | No |

### Column

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string | Unique id within the table | Yes |
| name | string | Display name | No |
| columnCode | string | Unique readable code | No |
| type | [ColumnType](#columntype) | Type of the column | No |
| index | integer | index of column in the display order | No |
| options | List of [ColumnOption](#columnoption) | possible values of the column. Applicable to select and multi-select type only. | No |
| required | boolean | Whether the value of column is required in each record | No |
| width | integer | width of the column in grid | No |
| editable | boolean | Whether the column value is editable in grid | No |
| hidden | boolean | Whether the column is to be kept hidden in the grid | No |
| systemField | boolean | Whether the column is provided by the system by default | No |
| uiVisible | boolean | Whether the column is visible in UI | No |

### ColumnType
| Name | Description |
| ---- | ----------- |
| text | Plain text |
| number | number. integer or decimal |
| email | email address |
| date | timestamp. Saved in ISO format |
| url | url |
| phone | phone number |
| select | single-selection drop-down with possible values defined in options. Value is stored as an array. |
| multi-select | multi-selection drop-down with possible values defined in options |
| boolean | true/false |
| ref | reference of a record from same table or another table. Value is stored as an array. |
| ref_array | reference of multiple records from same table or another table |
| user | iamUserId of a user of the org. Value is stored as an array. |
| user_array | list of iamUserId of one or more users of the org |

### ColumnOption
| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string | Unique id within the column | Yes |
| name | string | Display name | No |
| color | string | Badge color | No |
| systemField | boolean | Whether the option is provided by the system by default | No |
