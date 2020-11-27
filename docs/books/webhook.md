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
#### /v1/webhook/register
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
| eventType | body | Event Type | Yes | [enum](#eventtype) |
| webhookUrl | body | Client Secret | Yes | string |
| x-access-token | header | Access Token | Yes | string |

###### Response
| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| hookId | body | Webhook Id | Yes | long |
| deleted | body | Status | Yes | boolean |

##### Sample Response
```json
{
	"hookId": 4,
	"deleted": false
}
```

:::note
Store `hookId` for future reference and deregistration.
:::

### Deregister Webhook

#### DELETE
#### /v1/webhook/delete/{id}
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
| deleted | body | Status | Yes | boolean |

##### Sample Response
```json
{
	"hookId": 8,
	"deleted": true
}
```

## Enums

### eventType
---
| Value |
| - |
| CREATE_PRODUCTS |
| CREATE_CONTACT |

