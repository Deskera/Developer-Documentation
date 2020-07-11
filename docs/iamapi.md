---
id: iamapi
title: IAM APIs
sidebar_label: IAM
---
`IAM Api service` is related to user accounts, such as generating verification email, creating user token and other user-related service.

## API
---
### Regenerate Verification Email

Regenerate user verification email.

##### Description:

- Allows you to regenerate a user verification email.

#### GET
#### /v1/iam/auth/email/regenerate

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/auth/email/regenerate?email=testemail%40test.com
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/iam/auth/email/regenerate?email=testemail%40test.com" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| email | query | email | Yes | string |

##### Sample Response

```java
{
  "body": {},
  "statusCode": "100 CONTINUE",
  "statusCodeValue": 0
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Email has been sent successfully. | [ResponseEntity](#responseentity) |
| 400 | Email verification unsuccessful. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |
---
### Email Verification

User email verification API.
##### Description:

- Allows you to verify user email.

#### GET
#### /v1/iam/auth/email/verification

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/auth/email/verification?token=sampletoken&user=testuser
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/iam/auth/email/verification?token=sampletoken&user=testuser" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```


##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| token | query | token | Yes | string |
| user | query | user | Yes | string |

##### Sample Response

```java
Email has been verified successfully.
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Email has been verified successfully. | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | The Confirmation link is invalid. Please generate a new confirmation link. |  |
| 410 | Email Token has been expired. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### User Logout

User Logout API.

##### Description:

- Allows you to start a new logout session.
- Allows you to redirect user to login page after successful logout.

#### GET
#### /v1/iam/auth/logout

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/auth/logout
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/iam/auth/logout" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK ||
| 401 | Unauthorized ||
| 403 | Forbidden ||
| 404 | Not Found ||

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Get RefreshToken

Get new tokens using tenantid in case existing is expired.

##### Description:

- Allows you to create new token when existing token expired.

#### POST
#### /v1/iam/auth/mobile/getrefreshtoken

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/auth/mobile/getrefreshtoken
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/iam/auth/mobile/getrefreshtoken" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"refreshToken\": \"eyJjdHkiOiJKV1QiLCJlbmMiOiJ..\", \"tenantId\": 123456, \"userName\": \"+65-1234-5678\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| refreshTokenRequest | body | refreshTokenRequest | Yes | [RefreshTokenRequest](#refreshtokenrequest) |

##### Sample Request

```java
{
  "refreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJ..",
  "tenantId": 123456,
  "userName": "+65-1234-5678"
}
```

##### Sample Response

```java
{
  "accessToken": "eyJraWQi...",
  "expiresIn": 3600,
  "idToken": "eyJhbGci...",
  "refreshToken": "eyJjdHki...",
  "tokenType": "Bearer"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Confirmation code has been sent successfully. | [AuthenticationResultTypeDto](#authenticationresulttypedto) |
| 201 | Created |  |
| 400 | Failed to initiate sign in confirmation code. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to initiate sign in confirmation code. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Confirm Forgot Password

Confirm forgot password.

##### Description:

- Allows you to confirm a forgot password request.
- Allows you to change your existing password to the new password.

#### POST
#### /v1/iam/auth/password/confirm

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/auth/password/confirm
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/iam/auth/password/confirm" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"confirmationCode\": 123456, \"password\": \"abcd@123\", \"userName\": \"+65-1234-5678\"}"
```


##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| confirmPasswordRequest | body | confirmPasswordRequest | Yes | [ConfirmPasswordRequest](#confirmpasswordrequest) |

##### Sample Request

```java
{
  "confirmationCode": 123456,
  "password": "abcd@123",
  "userName": "+65-1234-5678"
}
```

##### Sample Response

```java
User has set new password successfully.
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User has set new password successfully. ||
| 201 | Created ||
| 400 | User's new password request failed. ||
| 401 | Unauthorized ||
| 403 | Forbidden ||
| 404 | User's new password request failed. ||

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |
---
### Forgot Password

Forgot password.

##### Description:

- Allows you to create a confirmation code and sent it out when you forgot your password.

#### POST
#### /v1/iam/auth/password/forgot

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/auth/password/forgot
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/iam/auth/password/forgot" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"userName\": \"+65-1234-5678\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| forgotPasswordRequest | body | forgotPasswordRequest | Yes | [ForgotPasswordRequest](#forgotpasswordrequest) |

##### Sample Request

```java
{
  "userName": "+65-1234-5678"
}
```

##### Sample Response

```java
Confirmation code has been sent successfully.
```


##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Confirmation code has been sent successfully. ||
| 201 | Created ||
| 400 | Failed to initiate forgot password confirmation code. ||
| 401 | Unauthorized ||
| 403 | Forbidden ||
| 404 | Failed to initiate forgot password confirmation code. ||

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |
---
### User Login Status

User Login status.

##### Description:

- Allows you to fetch User Login status based on cookie or access token header.

#### GET
#### /v1/iam/auth/sign-in/login/status

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/auth/sign-in/login/status

```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/iam/auth/sign-in/login/status" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Sample Response

```java
{
  "accessToken": "eyJraWQi...",
  "expiresIn": 3600,
  "idToken": "eyJhbGci...",
  "refreshToken": "eyJjdHki...",
  "tokenType": "Bearer"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Signin has been successfully. | [AuthenticationResultTypeDto](#authenticationresulttypedto) |
| 400 | Failed to authenticate user credentials. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to authenticate user credentials. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Mobile Sign-in

Signin API to receive verification code and session.

##### Description:

- Allows you to create new mobile sign-in session.
- Allows you to create and send out verification code to user.

#### POST
#### /v1/iam/auth/sign-in/mobile

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/auth/sign-in/mobile
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/iam/auth/sign-in/mobile" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"phoneNumber\": \"+65-1234-5678\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| otpRequest | body | otpRequest | Yes | [OtpRequest](#otprequest) |

##### Sample Response

```java
Confirmation code has been sent successfully.
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Confirmation code has been sent successfully. | string |
| 201 | Created |  |
| 400 | Failed to initiate sign in confirmation code. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to initiate sign in confirmation code. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Mobile Token

Verify Api to get token against verification code.

##### Description:

- Allows you to create token after successful verification for mobile.

#### POST
#### /v1/iam/auth/sign-in/mobile/verify

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/auth/sign-in/mobile/verify
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/iam/auth/sign-in/mobile/verify" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"phoneNumber\": \"+65-1234-5678\", \"session\": \"eyJjdHkiOiJKV1QiLCJlbmMiOiJ..\", \"verificationCode\": 12345}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| otpVerificationRequest | body | otpVerificationRequest | Yes | [OtpVerificationRequest](#otpverificationrequest) |

##### Sample Request

```java
{
  "phoneNumber": "+65-1234-5678",
  "session": "eyJjdHkiOiJKV1QiLCJlbmMiOiJ..",
  "verificationCode": 12345
}
```

##### Sample Response

```java
{
  "accessToken": "eyJraWQi...",
  "expiresIn": 3600,
  "idToken": "eyJhbGci...",
  "refreshToken": "eyJjdHki...",
  "tokenType": "Bearer"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Confirmation code has been sent successfully. | [AuthenticationResultTypeDto](#authenticationresulttypedto) |
| 201 | Created |  |
| 400 | Failed to initiate sign in confirmation code. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to initiate sign in confirmation code. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |
---
### Web Sign-In

Web Signin API to authenticate with username and password.

##### Description:

- Allows you to authenticate with username and password for web sign-in.

#### POST
#### /v1/iam/auth/sign-in/web/sign-in

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/auth/sign-in/web/sign-in
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/iam/auth/sign-in/web/sign-in" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"isMobile\": true, \"password\": \"abcd@123\", \"userName\": \"+65-1234-5678\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| webSignInRequest | body | webSignInRequest | Yes | [WebSignInRequest](#websigninrequest) |

##### Sample Request

```java
{
  "isMobile": true,
  "password": "abcd@123",
  "userName": "+65-1234-5678"
}
```

##### Sample Response

```java
{
  "accessToken": "eyJraWQi...",
  "expiresIn": 3600,
  "idToken": "eyJhbGci...",
  "refreshToken": "eyJjdHki...",
  "tokenType": "Bearer"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Signin has been successfully. | [AuthenticationResultTypeDto](#authenticationresulttypedto) |
| 201 | Created |  |
| 400 | Failed to authenticate user credentials. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to authenticate user credentials. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |
---
### Mobile Sign-Up

Sign up using contact number.

##### Description:

- Allows you to sign up with contact number for mobile.

#### POST
#### /v1/iam/auth/sign-up/mobile

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/auth/sign-up/mobile
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/iam/auth/sign-up/mobile" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"contact\": 12345678, \"firstName\": \"John\", \"iamUserId\": 12, \"lastName\": \"Doe\", \"shouldSendEmail\": true}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| mobileSignupRequest | body | mobileSignupRequest | Yes | [MobileSignupRequest](#mobilesignuprequest) |

##### Sample Request

```java
{
  "contact": 12345678,
  "firstName": "John",
  "iamUserId": 12,
  "lastName": "Doe",
  "shouldSendEmail": true
}
```

##### Sample Response

```java
{
  "appName": "ERP",
  "authUserId": "auth0|5d70ec986e382a0d12a4ff22",
  "contact": 12345678,
  "deleted": false,
  "department": "Finance",
  "designation": "Accountant",
  "email": "jsmith@example.com",
  "emailVerified": true,
  "firstName": "John",
  "fullName": "string",
  "genderLookUpCode": "Mr.",
  "id": 1,
  "lastName": "Doe",
  "profileUrl": "http://deskera.com/user/myprofile.png",
  "roleGroup": "admin",
  "status": "active",
  "tenantId": 1,
  "userName": "d.6511223344"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [UserDto](#userdto) |
| 201 | User has been created successfully. | [UserDto](#userdto) |
| 400 | User with same username is already exist. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |
---
### Web Sign-Up

Sign up using contact, email and password.

##### Description:

- Allows you to sign up using contact, email and password for web.

#### POST
#### /v1/iam/auth/sign-up/web

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/auth/sign-up/web
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/iam/auth/sign-up/web" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"bkPlanDetails\": \"MONTHLY/YEARLY\", \"bkPlanId\": 1234, \"bookkeeperPays\": false, \"contact\": 12345678, \"createUserInTenant\": true, \"emailId\": \"james@bond.com\", \"firstName\": \"John\", \"iamUserId\": 12, \"isBookkeeper\": true, \"isEmailVerified\": false, \"isGoUser\": false, \"isPartner\": true, \"isTeam\": false, \"isWebsite\": false, \"lastName\": \"Doe\", \"organizationName\": \"Deskera\", \"password\": \"**********\", \"shouldSendEmail\": true, \"socialAuth\": \"GOOGLE\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| webSignupRequest | body | webSignupRequest | Yes | [WebSignupRequest](#websignuprequest) |

##### Sample Request

```java
{
  "bkPlanDetails": "MONTHLY/YEARLY",
  "bkPlanId": 1234,
  "bookkeeperPays": false,
  "contact": 12345678,
  "createUserInTenant": true,
  "emailId": "james@bond.com",
  "firstName": "John",
  "iamUserId": 12,
  "isBookkeeper": true,
  "isEmailVerified": false,
  "isGoUser": false,
  "isPartner": true,
  "isTeam": false,
  "isWebsite": false,
  "lastName": "Doe",
  "organizationName": "Deskera",
  "password": "**********",
  "shouldSendEmail": true,
  "socialAuth": "GOOGLE"
}
```

##### Sample Response

```java
{
  "appName": "ERP",
  "authUserId": "auth0|5d70ec986e382a0d12a4ff22",
  "contact": 12345678,
  "deleted": false,
  "department": "Finance",
  "designation": "Accountant",
  "email": "jsmith@example.com",
  "emailVerified": true,
  "firstName": "John",
  "fullName": "string",
  "genderLookUpCode": "Mr.",
  "id": 1,
  "lastName": "Doe",
  "profileUrl": "http://deskera.com/user/myprofile.png",
  "roleGroup": "admin",
  "status": "active",
  "tenantId": 1,
  "userName": "d.6511223344"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [UserDto](#userdto) |
| 201 | User has been created successfully. | [UserDto](#userdto) |
| 400 | User with same username is already exist. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |
---
### Check Existing User

Api to check if user email or contact exists.

##### Description:

- Allows you to check if user email or contact exists.

#### GET
#### /v1/iam/auth/user

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/auth/user?action=checkExistingUserDetails&contact=%2B6512345678&emailId=john.doe%40test.com
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/iam/auth/user?action=checkExistingUserDetails&contact=%2B6512345678&emailId=john.doe%40test.com" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| action | query | Possible value for [action](#action) | Yes | string |
| contact | query | Contact of user | Yes | string |
| emailId | query | Email of user | Yes | string |

##### Sample Response

```java
{
  "contactExists": false,
  "emailExists": true
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Check existing user details have been fetched successfully. | [CheckExistingUserResponse](#checkexistinguserresponse) |
| 400 | Check existing user details failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |
---
### Web Token

Get new token using tenantid in case existing is expired.

##### Description:

- Allows you to create new token using tenantid when existing token expired.

#### POST
#### /v1/iam/auth/web/getrefreshtoken

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/auth/web/getrefreshtoken
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/iam/auth/web/getrefreshtoken" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"refreshToken\": \"eyJjdHkiOiJKV1QiLCJlbmMiOiJ..\", \"tenantId\": 123456, \"userName\": \"+65-1234-5678\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| refreshTokenRequest | body | refreshTokenRequest | Yes | [RefreshTokenRequest](#refreshtokenrequest) |

##### Sample Request

```java
{
  "refreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJ..",
  "tenantId": 123456,
  "userName": "+65-1234-5678"
}
```

##### Sample Response

```java
{
  "accessToken": "eyJraWQi...",
  "expiresIn": 3600,
  "idToken": "eyJhbGci...",
  "refreshToken": "eyJjdHki...",
  "tokenType": "Bearer"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Confirmation code has been sent successfully. | [AuthenticationResultTypeDto](#authenticationresulttypedto) |
| 201 | Created |  |
| 400 | Failed to initiate sign in confirmation code. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to initiate sign in confirmation code. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |
---
### Create User

User Creation.

##### Description:

- Allows you to create a new user.

#### POST
#### /v1/iam/users

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/users
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/iam/users" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"appName\": \"ERP\", \"bkPlanDetails\": \"MONTHLY/YEARLY\", \"bkPlanId\": 1234, \"bookkeeperPays\": false, \"contact\": 12345678, \"createUserInTenant\": true, \"emailId\": \"james@bond.com\", \"firstName\": \"John\", \"iamUserId\": 12, \"isBookkeeper\": true, \"isEmailVerified\": false, \"isGoUser\": false, \"isPartner\": true, \"isTeam\": false, \"isWebsite\": false, \"lastName\": \"Doe\", \"organizationName\": \"Deskera\", \"password\": \"**********\", \"roleGroup\": \"admin\", \"shouldSendEmail\": true, \"socialAuth\": \"GOOGLE\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| appUserCreateRequest | body | appUserCreateRequest | Yes | [AppUserCreateRequest](#appusercreaterequest) |

##### Sample Request

```java
{
  "appName": "ERP",
  "bkPlanDetails": "MONTHLY/YEARLY",
  "bkPlanId": 1234,
  "bookkeeperPays": false,
  "contact": 12345678,
  "createUserInTenant": true,
  "emailId": "james@bond.com",
  "firstName": "John",
  "iamUserId": 12,
  "isBookkeeper": true,
  "isEmailVerified": false,
  "isGoUser": false,
  "isPartner": true,
  "isTeam": false,
  "isWebsite": false,
  "lastName": "Doe",
  "organizationName": "Deskera",
  "password": "**********",
  "roleGroup": "admin",
  "shouldSendEmail": true,
  "socialAuth": "GOOGLE"
}
```

##### Sample Response

```java
{
  "appName": "ERP",
  "authUserId": "auth0|5d70ec986e382a0d12a4ff22",
  "contact": 12345678,
  "deleted": false,
  "department": "Finance",
  "designation": "Accountant",
  "email": "jsmith@example.com",
  "emailVerified": true,
  "firstName": "John",
  "fullName": "string",
  "genderLookUpCode": "Mr.",
  "id": 1,
  "lastName": "Doe",
  "profileUrl": "http://deskera.com/user/myprofile.png",
  "roleGroup": "admin",
  "status": "active",
  "tenantId": 1,
  "userName": "d.6511223344"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [UserDto](#userdto) |
| 201 | User has been created successfully. | [UserDto](#userdto) |
| 400 | User with same username is already exist. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |
---
### Bulk Invite User

Invite bulk user to a tenant.

##### Description:

- Allows you to invite bulk user to a tenant.

#### POST
#### /v1/iam/users/bulk-invite

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/users/bulk-invite
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/iam/users/bulk-invite" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "[ { \"appName\": \"ORGANISATION\", \"contact\": \"+6512345678\", \"email\": \"nguyen.tuan_123@deskera.com\", \"firstName\": \"Tuan\", \"lastName\": \"Nguyen\", \"roleGroup\": \"org_admin\", \"username\": \"example@domain.com\" }]"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| inviteBulkUserRequests | body | inviteBulkUserRequests | Yes | [ [InviteBulkUserRequest](#invitebulkuserrequest) ] |

##### Sample Request

```java
[
  {
    "appName": "ORGANISATION",
    "contact": "+6512345678",
    "email": "nguyen.tuan_123@deskera.com",
    "firstName": "Tuan",
    "lastName": "Nguyen",
    "roleGroup": "org_admin",
    "username": "example@domain.com"
  }
]
```

##### Sample Response

```java
[
  {
    "appName": "ERP",
    "authUserId": "auth0|5d70ec986e382a0d12a4ff22",
    "contact": 12345678,
    "deleted": false,
    "department": "Finance",
    "designation": "Accountant",
    "email": "jsmith@example.com",
    "emailVerified": true,
    "firstName": "John",
    "fullName": "string",
    "genderLookUpCode": "Mr.",
    "id": 1,
    "lastName": "Doe",
    "profileUrl": "http://deskera.com/user/myprofile.png",
    "roleGroup": "admin",
    "status": "active",
    "tenantId": 1,
    "userName": "d.6511223344"
  }
]
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User added to a tenant successfully | [ [UserDto](#userdto) ] |
| 201 | Created |  |
| 400 | User tenant mapping creation failed |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |
---
### Change Password

Change user password.

##### Description:

- Allows you to change password.

#### POST
#### /v1/iam/users/change-password

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/users/change-password
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/iam/users/change-password" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"newPassword\": \"test#123\", \"oldPassword\": \"test@123\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| userChangePasswordRequest | body | userChangePasswordRequest | Yes | [UserChangePasswordRequest](#userchangepasswordrequest) |

##### Sample Request

```java
{
  "newPassword": "test#123",
  "oldPassword": "test@123"
}
```

##### Sample Response

```java
Password changed successfully.
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Password changed successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | User not found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Mobile - User Email De-linking

Mobile user email De-linking.

##### Description:

- Allows you to unlink email from mobile user.

#### POST
#### /v1/iam/users/email/delink

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/users/email/delink
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/iam/users/email/delink" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Sample Response

```java
Email de-link successfully.
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Email de-link successfully. | string |
| 201 | Created |  |
| 400 | Email de-link unsuccessful |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Mobile - User Email Linking

Mobile user email linking.

##### Description:

- Allows you to link email to mobile user.

#### POST
#### /v1/iam/users/email/link

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/users/email/link
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/iam/users/email/link" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "example@domain.com"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| email | body | email | Yes | string |

##### Sample Request

```java
example@domain.com
```

##### Sample Response

```java
{
  "body": {},
  "statusCode": "100 CONTINUE",
  "statusCodeValue": 0
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A verification email has been sent successfully. | [ResponseEntity](#responseentity) |
| 201 | Created |  |
| 208 | User email is already linked. | [ResponseEntity](#responseentity) |
| 400 | A verification email has not been sent successfully. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Add User

Add/invite a user to a tenant.

##### Description:

- Allows you to add/invite a user to a tenant.

#### POST
#### /v1/iam/users/tenants

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/users/tenants
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/iam/users/tenants" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"appName\": \"ERP\", \"bkPlanDetails\": \"MONTHLY/YEARLY\", \"bkPlanId\": 1234, \"bookkeeperPays\": false, \"contact\": 12345678, \"createUserInTenant\": true, \"emailId\": \"james@bond.com\", \"firstName\": \"John\", \"iamUserId\": 12, \"inviteUser\": true, \"isBookkeeper\": true, \"isEmailVerified\": false, \"isGoUser\": false, \"isPartner\": true, \"isTeam\": false, \"isWebsite\": false, \"lastName\": \"Doe\", \"organizationName\": \"Deskera\", \"password\": \"**********\", \"roleGroup\": \"admin\", \"shouldSendEmail\": true, \"socialAuth\": \"GOOGLE\", \"tenantId\": 1}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| userTenantMappingrequest | body | userTenantMappingrequest | Yes | [UserTenantRelRequest](#usertenantrelrequest) |

##### Sample Request

```java
{
  "appName": "ERP",
  "bkPlanDetails": "MONTHLY/YEARLY",
  "bkPlanId": 1234,
  "bookkeeperPays": false,
  "contact": 12345678,
  "createUserInTenant": true,
  "emailId": "james@bond.com",
  "firstName": "John",
  "iamUserId": 12,
  "inviteUser": true,
  "isBookkeeper": true,
  "isEmailVerified": false,
  "isGoUser": false,
  "isPartner": true,
  "isTeam": false,
  "isWebsite": false,
  "lastName": "Doe",
  "organizationName": "Deskera",
  "password": "**********",
  "roleGroup": "admin",
  "shouldSendEmail": true,
  "socialAuth": "GOOGLE",
  "tenantId": 1
}
```

##### Sample Response

```java
{
  "appName": "ERP",
  "authUserId": "auth0|5d70ec986e382a0d12a4ff22",
  "contact": 12345678,
  "deleted": false,
  "department": "Finance",
  "designation": "Accountant",
  "email": "jsmith@example.com",
  "emailVerified": true,
  "firstName": "John",
  "fullName": "string",
  "genderLookUpCode": "Mr.",
  "id": 1,
  "lastName": "Doe",
  "profileUrl": "http://deskera.com/user/myprofile.png",
  "roleGroup": "admin",
  "status": "active",
  "tenantId": 1,
  "userName": "d.6511223344"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User added to a tenant successfully | [UserDto](#userdto) |
| 201 | Created |  |
| 208 | User with same tenant already exists! | [UserDto](#userdto) |
| 400 | User tenant mapping creation failed |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---

### Retrieve User

Get user by id.

##### Description:

- Allows you to get user information by id.

#### GET
#### /v1/iam/users/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/users/1
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/iam/users/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |

##### Sample Response

```java
{
  "address": [
    {
      "address1": "218, Robinson Road",
      "address2": "Downtown",
      "city": "C001",
      "country": "C001",
      "postalCode": 123456,
      "preferred": true,
      "state": "CS001"
    }
  ],
  "appUserRoleXrefs": [
    {
      "appName": "ERP",
      "roleGroup": "admin",
      "roleShortCode": "console_user_r",
      "tenantId": 12
    }
  ],
  "authUserId": "auth0|5d70ec986e382a0d12a4ff22",
  "contact": 12345678,
  "deleted": false,
  "department": "Finance",
  "designation": "Accountant",
  "email": "jsmith@example.com",
  "firstName": "John",
  "genderLookUpCode": "Mr.",
  "id": 1,
  "lastName": "Doe",
  "profileUrl": "http://deskera.com/user/myprofile.png",
  "status": "active",
  "tenantId": 1,
  "userName": "jsmith@example.com"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User information has been fetched successfully. | [AppUserResponseInfo](#appuserresponseinfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | User does not exist. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

---
### Update User

Update user information.

##### Description:

- Allows you to update user information.

#### PUT
#### /v1/iam/users/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/iam/users/1
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/iam/users/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"appName\": \"ERP\", \"authUserId\": \"auth0|5d70ec986e382a0d12a4ff22\", \"contact\": 12345678, \"deleted\": false, \"department\": \"Finance\", \"designation\": \"Accountant\", \"email\": \"jsmith@example.com\", \"emailVerified\": true, \"firstName\": \"John\", \"fullName\": \"string\", \"genderLookUpCode\": \"Mr.\", \"id\": 1, \"lastName\": \"Doe\", \"profileUrl\": \"http://deskera.com/user/myprofile.png\", \"roleGroup\": \"admin\", \"status\": \"active\", \"tenantId\": 1, \"userName\": \"d.6511223344\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| userDto | body | userDto | Yes | [UserDto](#userdto) |

##### Sample Request

```java
{
  "appName": "ERP",
  "authUserId": "auth0|5d70ec986e382a0d12a4ff22",
  "contact": 12345678,
  "deleted": false,
  "department": "Finance",
  "designation": "Accountant",
  "email": "jsmith@example.com",
  "emailVerified": true,
  "firstName": "John",
  "fullName": "string",
  "genderLookUpCode": "Mr.",
  "id": 1,
  "lastName": "Doe",
  "profileUrl": "http://deskera.com/user/myprofile.png",
  "roleGroup": "admin",
  "status": "active",
  "tenantId": 1,
  "userName": "d.6511223344"
}
```

##### Sample Response

```java
{
  "appName": "ERP",
  "authUserId": "auth0|5d70ec986e382a0d12a4ff22",
  "contact": 12345678,
  "deleted": false,
  "department": "Finance",
  "designation": "Accountant",
  "email": "jsmith@example.com",
  "emailVerified": true,
  "firstName": "John",
  "fullName": "string",
  "genderLookUpCode": "Mr.",
  "id": 1,
  "lastName": "Doe",
  "profileUrl": "http://deskera.com/user/myprofile.png",
  "roleGroup": "admin",
  "status": "active",
  "tenantId": 1,
  "userName": "d.6511223344"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User has been updated successfully. | [UserDto](#userdto) |
| 201 | Created |  |
| 400 | User does not exist. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |


## Models

---

### Address

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address1 | string | Address line 1 | No |
| address2 | string | Address line 2 | No |
| city | string | City | No |
| country | string | Country | No |
| postalCode | string | Postal Code | No |
| preferred | boolean | Is this a default address? | No |
| state | string | State | No |

### AppUserCreateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Application name | No |
| bookkeeperPays | boolean | book keeper team pays or client pays | No |
| contact | string | User Contact Number | No |
| createUserInTenant | boolean | Flag to control creation of users in tenant | No |
| emailId | string | Email | No |
| firstName | string | User First Name | No |
| iamUserId | long | IAM app_user id | No |
| isBookkeeper | boolean | Flag indicate user book keeper | No |
| isEmailVerified | boolean | Email Verification Required  | No |
| isGoUser | boolean | Go request to add user to ERP | No |
| isPartner | boolean | Flag indicate partner book keeper | No |
| isTeam | boolean | book keeper team or client | No |
| isWebsite | boolean | Flag to indicate signup from website | No |
| lastName | string | User Last Name | No |
| organizationName | string | Pass organization name if you want to create org without setup | No |
| password | string | Password | No |
| roleGroup | string | Role Group | No |
| shouldSendEmail | boolean | flag to send email or not | No |
| socialAuth | string | Needed, if user is signing up via social login | No |

### AppUserResponseInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | [ [Address](#address) ] | List of Address. | No |
| appUserRoleXrefs | [ [AppUserRoleInfo](#appuserroleinfo) ] | User Roles | No |
| authUserId | string | Auth0 User ID | No |
| contact | string | User Contact | No |
| deleted | boolean | Delete Flag | No |
| department | string | User Department | No |
| designation | string | User Designation | No |
| email | string | User email | No |
| firstName | string | User First Name | No |
| genderLookUpCode | string | Gender | No |
| id | long | Primary Key | No |
| lastName | string | User Last Name | No |
| profileUrl | string | User profile image path. | No |
| status | string | Status like Active/ InActive | No |
| tenantId | long | Tenant Id | No |
| userName | string | User Name | No |

### AppUserRoleInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Application Name | No |
| roleGroup | string | Role Group | No |
| roleShortCode | string | Role Short Code | No |
| tenantId | long | Tenant ID | No |

### AuthenticationResultTypeDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accessToken | string |  The access token | No |
| expiresIn | integer | The expiration period of the authentication result in seconds. | No |
| idToken | string |  The id token | No |
| refreshToken | string |  The refresh token | No |
| tokenType | string | The token type. | No |

### CheckExistingUserResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactExists | boolean | Returns true if user with same contact exists | No |
| emailExists | boolean | Returns true if user with same email exists | No |

### ConfirmPasswordRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| confirmationCode | string | Confirmation code received through SMS | Yes |
| password | string | Password to signin | Yes |
| userName | string | Username | Yes |

### EmailLinkRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| confirmationCode | string | Confirmation code received through Email | Yes |
| password | string | Password to signin | Yes |

### ForgotPasswordRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userName | string | Username | Yes |

### InviteBulkUserRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Deskera Application Name | Yes |
| contact | string | Contact No | Yes |
| email | string | User email | Yes |
| firstName | string | user first name | Yes |
| lastName | string | User last name | Yes |
| roleGroup | string | Deskera Roles | Yes |
| username | string | Username or Email or Contact Number of User | Yes |

### MobileSignupRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string | User Contact Number | No |
| firstName | string | User First Name | No |
| iamUserId | long | IAM app_user id | No |
| lastName | string | User Last Name | No |
| shouldSendEmail | boolean | flag to send email or not | No |

### OtpRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| phoneNumber | string | Phone Number | Yes |

### OtpVerificationRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| phoneNumber | string | Phone number | Yes |
| session | string | Cognito session received on signup | Yes |
| verificationCode | string | Verification code received on contact no | Yes |

### RefreshTokenRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| refreshToken | string | Refresh token | Yes |
| tenantId | long | Tenant Id | Yes |
| userName | string | Username | Yes |

### RegisteredUserRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| emails | [ string ] | List of user's contacts emails | Yes |
| phones | [ string ] | List of user's contacts phone numbers | Yes |

### RegisteredUserResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string | Contact phone no. | No |
| email | string | Contact email address | No |
| firstName | string | User First Name | No |
| id | long | Primary Key | No |
| lastName | string | User Last Name | No |
| profileUrl | string | User profile image path. | No |

### ResponseEntity

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| body | object |  | No |
| statusCode | string |  | No |
| statusCodeValue | integer |  | No |

### SwitchTenantRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| refreshToken | string | Refresh token | Yes |
| tenantId | long | Tenant ID | Yes |
| userName | string | Username | Yes |

### UserAttributeUpdateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string | Contact Number | No |
| email | string | User email | No |
| firstName | string | User First Name | No |
| lastName | string | User Last Name | No |

### UserChangePasswordRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| newPassword | string | New valid password | Yes |
| oldPassword | string | Old valid password | Yes |

### UserDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Application name | Yes |
| authUserId | string | Auth0 User ID | No |
| contact | string | User contact number | No |
| deleted | boolean | Delete Flag | No |
| department | string | User Department | No |
| designation | string | User Designation | No |
| email | string | User email | No |
| firstName | string | User First Name | Yes |
| fullName | string |  | No |
| genderLookUpCode | string | Gender | No |
| id | long | Primary Key | No |
| lastName | string | User Last Name | Yes |
| profileUrl | string | User profile image path. | No |
| roleGroup | string | Role Group | Yes |
| status | string | Status like Active/ InActive | No |
| tenantId | long | Tenant Id | Yes |
| userName | string | Username | No |

### UserOtpResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string |  | No |
| expiry | dateTime |  | No |
| otp | string |  | No |
| otpType | string |  | No |
| session | string |  | No |

### UserTenantRelRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Application name | No |
| bookkeeperPays | boolean | book keeper team pays or client pays | No |
| contact | string | User Contact Number | No |
| createUserInTenant | boolean | Flag to control creation of users in tenant | No |
| emailId | string | Email | No |
| firstName | string | User First Name | No |
| iamUserId | long | IAM app_user id | No |
| inviteUser | boolean |  | No |
| isBookkeeper | boolean | Flag indicate user book keeper | No |
| isEmailVerified | boolean | Email Verification Required  | No |
| isGoUser | boolean | Go request to add user to ERP | No |
| isPartner | boolean | Flag indicate partner book keeper | No |
| isTeam | boolean | book keeper team or client | No |
| isWebsite | boolean | Flag to indicate signup from website | No |
| lastName | string | User Last Name | No |
| organizationName | string | Pass organization name if you want to create org without setup | No |
| password | string | Password | No |
| roleGroup | string | Role Group | No |
| shouldSendEmail | boolean | flag to send email or not | No |
| socialAuth | string | Needed, if user is signing up via social login | No |
| tenantId | long | Tenant ID | No |

### WebSignInRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| password | string | User password | Yes |
| userName | string | Username | Yes |

### WebSignupRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bookkeeperPays | boolean | book keeper team pays or client pays | No |
| contact | string | User Contact Number | No |
| createUserInTenant | boolean | Flag to control creation of users in tenant | No |
| emailId | string | Email | No |
| firstName | string | User First Name | No |
| iamUserId | long | IAM app_user id | No |
| isBookkeeper | boolean | Flag indicate user book keeper | No |
| isEmailVerified | boolean | Email Verification Required  | No |
| isGoUser | boolean | Go request to add user to ERP | No |
| isPartner | boolean | Flag indicate partner book keeper | No |
| isTeam | boolean | book keeper team or client | No |
| isWebsite | boolean | Flag to indicate signup from website | No |
| lastName | string | User Last Name | No |
| organizationName | string | Pass organization name if you want to create org without setup | No |
| password | string | Password | No |
| shouldSendEmail | boolean | flag to send email or not | No |
| socialAuth | string | Needed, if user is signing up via social login | No |

## Enums
---

### ACTION
- checkExistingUserDetails