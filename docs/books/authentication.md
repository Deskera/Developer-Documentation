---
id: authentication
title: Authentication Service
sidebar_label: Authentication
---
A token is a piece of data that has no meaning or use on its own, but combined with the correct tokenization system, becomes a vital player in securing your application. Token based authentication works by ensuring that each request to a server is accompanied by a signed toke (RFC 7519) that defines a compact and self-contained method for securely transmitting information between parties encoded as a JSON object. 

The Authentication API enables you to manage all aspects of user identity when you use Auth0. It offers endpoints so your users can log in, sign up, log out, access APIs, and more.

:::note

Your `access-token` contains many privileges, keep it secure!
:::

## APIs
---
### Login
Login to receive token with username and password.

#### Parameters
- [WebSignInRequest](#websigninrequest) `Object`
#### Returns
- [AuthenticationResultTypeDto](#authenticationresulttypedto) `Object`

#### Code

```java
  @Autowired
  private TenantsApiClient tenantsApiClient;

    public AuthenticationResultType login(WebSignInRequest webSignInRequest){
    return this.tenantsApiClient.login(webSignInRequest);
  }
```
---

### Connect With Authorization Code
API to complete OAuth connection with code and get tokens

#### Parameters
- authCode `String`
#### Returns
- [OAuth2AccessToken](#oauth2accesstoken) `Object`

#### Code

```java
  @Autowired
  private OAuth2PartnerClient oauth2PartnerClient;

    public OAuth2AccessToken connect(String authCode) {
    return this.oauth2PartnerClient.connectWithDeskera(authCode);
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
  private OAuth2PartnerClient oauth2PartnerClient;

    public Boolean validateDeskeraToken(String accessToken) {
    return this.oauth2PartnerClient.validateToken(accessToken);
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
  private OAuth2PartnerClient oauth2PartnerClient;

    public AuthenticationResultTypeDto refreshDeskeraToken(String refreshToken) {
    return this.oauth2PartnerClient.getAppRefreshToken(refreshToken);
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

### WebSignInRequest

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| password | string | User password |
| userName | string | Username |

### OAuth2AccessToken

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| accessToken | string | Auth token (Unused) |
| tokenType | string | Token Type |
| refreshToken | string | Auth refresh token (Unused) |
| expiresIn | float | Time of expiry (Unused) |
| scope | string | Token Scope |
| deskeraToken | string | Deskera Access Token |
| deskeraRefreshToken | string | Deskera Refresh Token |