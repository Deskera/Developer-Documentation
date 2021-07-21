---
id: webhook
title: Webhook
sidebar_label: Webhook
---
Webhooks notify you about certain events that occur in Deskera. You can select which type of events you want to be notified about and where we should send them to. This allows you to be easily aware of things that happen, even after the consumer is no longer on your site.

## API
---

### Register Webhook
Register webhook for an event.

#### POST
#### /v1/webhooks/register
##### Request URL 

```bash
https://bifrost.deskera.com/v1/webhooks/register
```

##### Curl

```bash
curl -X POST "https://bifrost.deskera.com/webhooks/register" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"clientId\" : \"cl_pub...\", \"clientSecret\" : \"cl_priv...\", \"accessToken\" : \"sampleaccesstoken\", \"refreshToken\" : \"samplerefreshtoken\", \"eventType\" : \"CREATE_PRODUCTS\", \"webhookUrl\" : \"samplewebhookurl\" }"
```

##### Parameters
###### Request


| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| clientId | body | Client Id | Yes | string |
| clientSecret | body | Client Secret | Yes | string |
| accessToken | body | Access Token | Yes | string |
| refreshToken | body | Refresh Token | Yes | string |
| eventType | body | Event Type | Yes | [enum](#eventtypes) |
| webhookUrl | body | Client Secret | Yes | string |
| x-access-token | header | Access Token | Yes | string |

###### Response
| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| hookId | body | Webhook Id | Yes | long |
| eventType | body | Event Type | Yes | [enum](#eventtypes) |
| webhookUrl | body | Webhook Url | Yes | string |
| deleted | body | Status | Yes | boolean |

##### Sample Response
```json
{
	"hookId": 4,
	"eventType":"CREATE_CRM_DEAL",
	"webhookUrl":"https://fb3d2be15599.ngrok.io/api/webhooks",
	"deleted": false
}
```

:::note
Store `hookId` for future reference and deregistration.
:::

### Deregister Webhook

#### DELETE
#### /v1/webhooks/delete/{id}
##### Request URL 

```bash
https://bifrost.deskera.com/v1/webhooks/delete/{id}
```

##### Curl

```bash
curl -X DELETE "https://bifrost.deskera.com/v1/webhooks/delete/8" -H "x-access-token: sampleaccesstoken"
```

##### Parameters
###### Request
| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Webhook Id | Yes | long |
| x-access-token | header | Access Token | Yes | string |

###### Response
| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| hookId | body | Webhook Id | Yes | long |
| eventType | body | Event Type | Yes | [enum](#eventtypes) |
| webhookUrl | body | Webhook Url | Yes | string |
| deleted | body | Status | Yes | boolean |

##### Sample Response
```json
{
	"hookId": 4,
	"eventType":"CREATE_CRM_DEAL",
	"webhookUrl":"https://fb3d2be15599.ngrok.io/api/webhooks",
	"deleted": false
}
```


### List All Registered Webhooks

#### GET
#### /v1/webhooks
##### Request URL 

```bash
https://bifrost.deskera.com/v1/webhooks
```

##### Curl

```bash
curl -X GET "https://bifrost.deskera.com/v1/webhooks" -H "x-access-token: sampleaccesstoken"
```

##### Parameters
###### Request
| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| x-access-token | header | Access Token | Yes | string |

###### Response
| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| hookId | body | Webhook Id | Yes | long |
| eventType | body | Event Type | Yes | [enum](#eventtypes) |
| webhookUrl | body | Webhook Url | Yes | string |
| deleted | body | Status | Yes | boolean |

##### Sample Response
```json
[
	{
	"hookId": 4,
	"eventType":"CREATE_CRM_DEAL",
	"webhookUrl":"https://fb3d2be15599.ngrok.io/api/webhooks",
	"deleted": false
	},
	{
	"hookId": 5,
	"eventType":"UPDATE_CRM_DEAL",
	"webhookUrl":"https://fb3d2be15599.ngrok.io/api/webhooks",
	"deleted": false
	}
]
```

## Enums

### eventTypes
---
|  Event | Description |  
| - | - |
| CREATE_PRODUCTS | Triggers when a Product is added in Books |
| CREATE_CONTACT | Triggers when a Contact is added in Books |
| CREATE_BILL | Triggers when a Bill is created in Books |
| UPDATE_BILL | Triggers when a Bill is updated in Books |
| DELETE_BILL | Triggers when a Bill is deleted in Books |
| CREATE_INVOICE | Triggers when an Invoice is created in Books |
| UPDATE_INVOICE | Triggers when an Invoice is updated in Books |
| DELETE_INVOICE | Triggers when an Invoice is deleted in Books |
| CREATE_DEBITNOTE | Triggers when a Debit Note is created in Books |
| UPDATE_DEBITNOTE | Triggers when a Debit Note is updated in Books |
| DELETE_DEBITNOTE | Triggers when a Debit Note is deleted in Books |
| CREATE_CREDITNOTE | Triggers when a Credit Note is created in Books |
| UPDATE_CREDITNOTE | Triggers when a Credit Note is updated in Books |
| DELETE_CREDITNOTE | Triggers when a Credit Note is deleted in Books |
| CREATE_CRM_CONTACT | Triggers when a Contact is created in Sales |
| UPDATE_CRM_CONTACT | Triggers when a Contact is updated in Sales |
| DELETE_CRM_CONTACT | Triggers when a Contact is deleted in Sales |
| CREATE_CRM_DEAL | Triggers when a Deal is created in Sales |
| UPDATE_CRM_DEAL | Triggers when a Deal is updated in Sales |
| DELETE_CRM_DEAL | Triggers when a Deal is deleted in Sales |
| STOCK_IN | Triggers when the Stock is increased for a Product in Books |
| STOCK_OUT | Triggers when the Stock is reduced for a Product in Books |


