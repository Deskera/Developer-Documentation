---
id: webhook
title: Webhooks
sidebar_label: Webhooks
---

## Webhooks in Deskera

Webhooks allow you to receive real-time notifications about specific events occurring in Deskera. You can configure which events you want to be notified about and define the endpoint where Deskera should send these notifications. This enables seamless automation and integration with your applications, even when users are not actively interacting with Deskera.

## API Overview

Deskera provides the following API endpoints to manage webhooks:

- **Register Webhook**: Subscribe to event notifications.
- **Deregister Webhook**: Unsubscribe from event notifications.
- **List Registered Webhooks**: Retrieve a list of active webhooks.

---

### Register Webhook

This API registers a webhook to receive event notifications.

#### **POST** `/v1/webhooks/register`

##### **Request URL**
```bash
https://bifrost.deskera.com/v1/webhooks/register
```

##### **cURL Example**
```bash
curl -X POST "https://bifrost.deskera.com/v1/webhooks/register" \
     -H "accept: application/json" \
     -H "x-access-token: sampleaccesstoken" \
     -H "Content-Type: application/json" \
     -d '{
           "clientId": "cl_pub...",
           "clientSecret": "cl_priv...",
           "accessToken": "sampleaccesstoken",
           "refreshToken": "samplerefreshtoken",
           "eventType": "CREATE_PRODUCTS",
           "webhookUrl": "samplewebhookurl"
         }'
```

##### **Request Parameters**

| Name          | Located in | Description            | Required | Type   |
|--------------|------------|------------------------|----------|--------|
| clientId     | body       | Client ID              | Yes      | string |
| clientSecret | body       | Client Secret          | Yes      | string |
| accessToken  | body       | Access Token           | Yes      | string |
| refreshToken | body       | Refresh Token          | Yes      | string |
| eventType    | body       | Event Type             | Yes      | [enum](#eventtypes) |
| webhookUrl   | body       | Webhook URL            | Yes      | string |
| x-access-token | header   | Authentication token   | Yes      | string |

##### **Response Parameters**

| Name        | Located in | Description    | Required | Type    |
|------------|------------|----------------|----------|--------|
| hookId     | body       | Webhook ID     | Yes      | long   |
| eventType  | body       | Event Type     | Yes      | [enum](#eventtypes) |
| webhookUrl | body       | Webhook URL    | Yes      | string |
| deleted    | body       | Status         | Yes      | boolean |

##### **Sample Response**
```json
{
  "hookId": 4,
  "eventType": "CREATE_CRM_DEAL",
  "webhookUrl": "https://fb3d2be15599.ngrok.io/api/webhooks",
  "deleted": false
}
```
:::note
Store `hookId` for future reference and deregistration.
:::

---

### Deregister Webhook

This API removes a registered webhook.

#### **DELETE** `/v1/webhooks/delete/{id}`

##### **Request URL**
```bash
https://bifrost.deskera.com/v1/webhooks/delete/{id}
```

##### **cURL Example**
```bash
curl -X DELETE "https://bifrost.deskera.com/v1/webhooks/delete/8" \
     -H "x-access-token: sampleaccesstoken"
```

##### **Request Parameters**

| Name          | Located in | Description        | Required | Type   |
|--------------|------------|--------------------|----------|--------|
| id           | path       | Webhook ID         | Yes      | long   |
| x-access-token | header   | Access Token      | Yes      | string |

##### **Sample Response**
```json
{
  "hookId": 4,
  "eventType": "CREATE_CRM_DEAL",
  "webhookUrl": "https://fb3d2be15599.ngrok.io/api/webhooks",
  "deleted": false
}
```

---

### List All Registered Webhooks

Retrieve all active webhooks.

#### **GET** `/v1/webhooks`

##### **Request URL**
```bash
https://bifrost.deskera.com/v1/webhooks
```

##### **cURL Example**
```bash
curl -X GET "https://bifrost.deskera.com/v1/webhooks" \
     -H "x-access-token: sampleaccesstoken"
```

##### **Request Parameters**

| Name          | Located in | Description       | Required | Type   |
|--------------|------------|-------------------|----------|--------|
| x-access-token | header   | Access Token     | Yes      | string |

##### **Sample Response**
```json
[
  {
    "hookId": 4,
    "eventType": "CREATE_CRM_DEAL",
    "webhookUrl": "https://fb3d2be15599.ngrok.io/api/webhooks",
    "deleted": false
  },
  {
    "hookId": 5,
    "eventType": "UPDATE_CRM_DEAL",
    "webhookUrl": "https://fb3d2be15599.ngrok.io/api/webhooks",
    "deleted": false
  }
]
```

---

## Event Types

Below are the event types supported by Deskera webhooks:

| Event              | Description |
|--------------------|-------------|
| CREATE_PRODUCTS   | Triggers when a product is added in Books |
| CREATE_CONTACT    | Triggers when a contact is added in Books |
| CREATE_BILL       | Triggers when a bill is created in Books |
| UPDATE_BILL       | Triggers when a bill is updated in Books |
| DELETE_BILL       | Triggers when a bill is deleted in Books |
| CREATE_INVOICE    | Triggers when an invoice is created in Books |
| UPDATE_INVOICE    | Triggers when an invoice is updated in Books |
| DELETE_INVOICE    | Triggers when an invoice is deleted in Books |
| CREATE_CRM_CONTACT | Triggers when a contact is created in Sales |
| UPDATE_CRM_CONTACT | Triggers when a contact is updated in Sales |
| DELETE_CRM_CONTACT | Triggers when a contact is deleted in Sales |
| CREATE_CRM_DEAL   | Triggers when a deal is created in Sales |
| UPDATE_CRM_DEAL   | Triggers when a deal is updated in Sales |
| DELETE_CRM_DEAL   | Triggers when a deal is deleted in Sales |
| STOCK_IN          | Triggers when stock is increased for a product in Books |
| STOCK_OUT         | Triggers when stock is reduced for a product in Books |

---

## Testing Webhooks

To test your webhook implementation, you can use services like **Beeceptor** and **Request Inspector**. These tools allow you to inspect incoming webhook requests without setting up a server.

- **[Beeceptor](https://beeceptor.com/)**: Create a custom endpoint to monitor and debug webhook requests.
- **[Request Inspector](https://requestinspector.com/)**: Provides a quick way to view incoming webhook payloads.
