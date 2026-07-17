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

##### Responses
- `200` [AuthenticationResultType](#authenticationresulttype) — on success, or the same type with only `isMFAEnabled` populated if the user must complete an MFA challenge.

---
### Signin with OTP
Sends an OTP to the given phone number to initiate a mobile sign-in.

#### Parameters
- [otpRequest](#otprequest-object) `OtpRequest`

#### POST
#### /v1/iam/auth/sign-in/mobile

##### Responses
- `200` `string`

---
### Verify OTP
Verifies the OTP sent to the phone number and completes mobile sign-in.

#### Parameters
- [otpVerificationRequest](#otpverificationrequest-object) `OtpVerificationRequest`

#### POST
#### /v1/iam/auth/sign-in/mobile/verify

##### Responses
- `200` [AuthenticationResultType](#authenticationresulttype)

---
### Send MFA OTP via Email
Sends an MFA one-time-password to the user's email.

#### Parameters
- [mfaEmailRequest](#mfaemailrequest-object) `MFAEmailRequest`

#### POST
#### /v1/iam/auth/sign-in/send-otp-mail

##### Responses
- `200` OK

---
### MFA Signin
Completes sign-in using username, password and an MFA code.

#### Parameters
- [mfaSigninRequest](#mfasigninrequest-object) `MFASigninRequest`

#### POST
#### /v1/iam/auth/sign-in/web/mfa-signin

##### Responses
- `200` [AuthenticationResultType](#authenticationresulttype)

---
### Get MFA Status
Retrieves whether MFA is enabled for the signed-in user. Requires a valid `x-access-token`.

#### POST
#### /v1/iam/auth/sign-in/web/mfa-status

##### Responses
- `200` [MFAStatusResponse](#mfastatusresponse-object)

---
### Create MFA Secret
Creates a new MFA secret/QR code for the signed-in user. Requires a valid `x-access-token`.

#### POST
#### /v1/iam/auth/sign-in/web/mfa

##### Responses
- `200` [MFAResponse](#mfaresponse-object)

---
### Disable MFA
Disables MFA for the signed-in user. Requires a valid `x-access-token`.

#### Parameters
- [mfaDisableRequest](#mfadisablerequest-object) `MFADisableRequest`

#### DELETE
#### /v1/iam/auth/sign-in/web/mfa

##### Responses
- `200` [MFAResponse](#mfaresponse-object)

---
### Enable MFA
Enables MFA for the signed-in user. Requires a valid `x-access-token`.

#### Parameters
- [mfaEnableRequest](#mfaenablerequest-object) `MFAEnableRequest`

#### POST
#### /v1/iam/auth/sign-in/web/mfa-enable

##### Responses
- `200` [MFAEnableResponse](#mfaenableresponse-object)

---
### Login Status
Validates the given access token and returns the current authentication details.

#### GET
#### /v1/iam/auth/sign-in/login/status

##### Responses
- `200` [AuthenticationResultType](#authenticationresulttype)
- `404` Not signed in

---
### Workday Signin
Signs a user in using a Workday authorization code.

#### Parameters
- [workdaySigninRequest](#workdaysigninrequest-object) `WorkdaySigninRequest`

#### POST
#### /v1/iam/auth/sign-in/web/workday-signin

##### Responses
- `200` [AuthenticationResultType](#authenticationresulttype)

---
### OIDC Signin
Signs a user in using OIDC credentials.

#### Parameters
- [oidcSigninRequest](#oidcsigninrequest-object) `OIDCSigninRequest`

#### POST
#### /v1/iam/auth/sign-in/web/oidc-signin

##### Responses
- `200` [AuthenticationResultType](#authenticationresulttype)

---
### Clerk Signin
Signs a user in using a Clerk bearer token, supplied via the `Authorization: Bearer <token>` header.

#### Parameters
- inviteCode `string` (query, optional)

#### POST
#### /v1/iam/auth/sign-in/web/clerk-signin

##### Responses
- `200` [AuthenticationResultType](#authenticationresulttype)
- `400` Missing or invalid Authorization header

## Models
---
### WebSignInRequest Object

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| userName | string | Username |
| password | string | User password |
| isMobile | boolean | Is Mobile sign in |
| inviteCode | string | Invitation Code |
| referer | string | Referer URL |

### AuthenticationResultType

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| accessToken | string |  |
| refreshToken | string |  |
| idToken | string |  |
| expiresIn | integer |  |
| tokenType | string |  |
| emailVerified | boolean |  |
| isTrialUser | boolean |  |
| isMFAEnabled | boolean |  |
| guid | string |  |

### OtpRequest Object

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| phoneNumber | string | Phone Number |

### OtpVerificationRequest Object

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| phoneNumber | string | Phone number |
| verificationCode | string | Verification code received on contact no |
| session | string | Session token received on signup |

### MFAEmailRequest Object

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| email | string | Email address |
| verificationToken | string | Verification token |

### MFASigninRequest Object

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| userName | string | Username |
| password | string | User password |
| isMobile | boolean | Is Mobile sign in |
| inviteCode | string | Invitation Code |
| mfaCode | string | MFA Code |

### MFADisableRequest Object

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| password | string | User password |

### MFAEnableRequest Object

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| mfaCode | string | MFA code |
| mfaType | enum | Mfa type<br/>*Example:* `"EIGHT_DIGIT"` |

### MFAResponse Object

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| enableStatus | boolean | MFA Enable Status |
| key | string | MFA Key |
| qrCodeBytes | string | MFA QR Code bytes in base64 |

### MFAEnableResponse Object

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| enableStatus | boolean | MFA Enable Status |
| recoveryCodes | list | MFA Recovery codes |

### MFAStatusResponse Object

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| enableStatus | boolean | MFA Enable Status |

### WorkdaySigninRequest Object

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| code | string | Code from Workday |

### OIDCSigninRequest Object

| Attribute | Type | Description |
| ---- | ---- | ----------- |
| email | string | OIDC user email |
| accessToken | string | OIDC Access token |
