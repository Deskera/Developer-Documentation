---
id: authenticationapi
title: Authentication API
sidebar_label: Authentication
---
A token is a piece of data that has no meaning or use on its own, but combined with the correct tokenization system, becomes a vital player in securing your application. Token based authentication works by ensuring that each request to a server is accompanied by a signed token which the server verifies for authenticity and only then responds to the request.

JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained method for securely transmitting information between parties encoded as a JSON object. 

The Authentication API enables you to manage all aspects of user identity when you use Auth0. It offers endpoints so your users can log in, sign up, log out, access APIs, and more.

:::note

Your `access-token` contains many privileges, keep it secure!
:::


Web Signin API to authenticate with username and password

More about [Authentication API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)


## API
---
### Login
Login to receive token with username and password.

#### Parameters
- [webSignInRequest](#websigninrequest-object) `WebSignInRequest`


#### POST
#### /v1/iam/auth/sign-in/web/sign-in
##### Request URL

[Authentication API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)
## Models
---
### WebSignInRequest Object

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| password | string | User password |
| userName | string | Username |

### AuthenticationResultType

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| accessToken | string |  |
| expiresIn | integer |  |
| idToken | string |  |
| newDeviceMetadata | [NewDeviceMetadataType](#newdevicemetadatatype) |  |
| refreshToken | string |  |
| tokenType | string |  |

### NewDeviceMetadataType

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| deviceGroupKey | string |  |
| deviceKey | string |  |