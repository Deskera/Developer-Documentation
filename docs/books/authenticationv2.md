---
id: authenticationv2
title: Authentication Service V2
sidebar_label: Authentication V2
---

A token is a piece of data that has no meaning or use on its own, but combined with the correct tokenization system, becomes a vital player in securing your application. Token based authentication works by ensuring that each request to a server is accompanied by a signed toke (RFC 7519) that defines a compact and self-contained method for securely transmitting information between parties encoded as a JSON object. 

The Authentication V2 API enables you to manage all aspects of user identity when you use Auth0. It offers endpoints so your users can log in, sign up, log out, access APIs, and more.

:::note

Your `access-token` contains many privileges, keep it secure!
:::

## APIs
---
### Connect With Authorization Code
API to complete OAuth connection with code and get tokens

#### Parameters
- authCode `String`
#### Returns
- [OAuthV2AccessToken](#oauthv2accesstoken) `Object`

#### Code

```java
  @Autowired
  private OAuthV2Client oAuthV2Client;

    public OAuthV2AccessToken connect(String authCode) {
    return this.oAuthV2Client.connectWithDeskera(authCode);
  }
```
---

### Validate Deskera Access Token
API to check the validity of Deskera Access Token

#### Parameters
- accessToken `String`
#### Returns
- isValid `Boolean`

#### Code

```java
  @Autowired
  private OAuthV2Client oAuthV2Client;

    public Boolean validateDeskeraToken(String accessToken) {
    return this.oAuthV2Client.validateToken(accessToken);
  }
```
---

### Refresh Deskera Access Token
API to fetch new access token with refresh token

#### Parameters
- refreshToken `String`
#### Returns
- [AuthenticationResultTypeDto](#authenticationresulttypedto) `Object`

#### Code

```java
  @Autowired
  private OAuthV2Client oAuthV2Client;

    public AuthenticationResultTypeDto refreshDeskeraToken(String refreshToken) {
    return this.oAuthV2Client.getAppRefreshToken(refreshToken);
  }
```
---

## Objects
---

### AuthenticationResultTypeDto

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

### OAuthV2AccessToken

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| access_token | string | Auth token |
| token_type | string | Token Type |
| refresh_token | string | Auth refresh token |
| expires_in | float | Time of expiry (Unused) |