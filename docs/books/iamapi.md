---
id: iamapi
title: IAM APIs
sidebar_label: IAM
---
`IAM Api service` is related to user accounts, such as generating verification email, creating user token and other user-related service.

More about [IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)
## API


---
### Regenerate Verification Email

Regenerate user verification email.

##### Description:

- Allows you to regenerate a user verification email.

#### GET
#### /v1/iam/auth/email/regenerate

##### Request URL

[IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| email | query | email | Yes | string |


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

[IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)


##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| token | query | token | Yes | string |
| user | query | user | Yes | string |


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
[IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| refreshTokenRequest | body | refreshTokenRequest | Yes | [RefreshTokenRequest](#refreshtokenrequest) |



```java
{
  "refreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJ..",
  "tenantId": 123456,
  "userName": "+65-1234-5678"
}
```



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

[IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)


##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| confirmPasswordRequest | body | confirmPasswordRequest | Yes | [ConfirmPasswordRequest](#confirmpasswordrequest) |


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

[IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)
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

[IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| otpRequest | body | otpRequest | Yes | [OtpRequest](#otprequest) |



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

[IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| otpVerificationRequest | body | otpVerificationRequest | Yes | [OtpVerificationRequest](#otpverificationrequest) |


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

[IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| webSignInRequest | body | webSignInRequest | Yes | [WebSignInRequest](#websigninrequest) |


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

[IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| mobileSignupRequest | body | mobileSignupRequest | Yes | [MobileSignupRequest](#mobilesignuprequest) |


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

[IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| webSignupRequest | body | webSignupRequest | Yes | [WebSignupRequest](#websignuprequest) |
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

[IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| action | query | Possible value for [action](#action) | Yes | string |
| contact | query | Contact of user | Yes | string |
| emailId | query | Email of user | Yes | string |



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

[IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| refreshTokenRequest | body | refreshTokenRequest | Yes | [RefreshTokenRequest](#refreshtokenrequest) |

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

[IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| appUserCreateRequest | body | appUserCreateRequest | Yes | [AppUserCreateRequest](#appusercreaterequest) |

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

[IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| inviteBulkUserRequests | body | inviteBulkUserRequests | Yes | [ [InviteBulkUserRequest](#invitebulkuserrequest) ] |

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

[IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| userChangePasswordRequest | body | userChangePasswordRequest | Yes | [UserChangePasswordRequest](#userchangepasswordrequest) |

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

[IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)
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

[IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| email | body | email | Yes | string |

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

[IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| userTenantMappingrequest | body | userTenantMappingrequest | Yes | [UserTenantRelRequest](#usertenantrelrequest) |


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

[IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |


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

[IAM API documentation](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-4153fca1-e6f6-42f2-bda8-89f497f83cdc?ctx=documentation)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | long |
| userDto | body | userDto | Yes | [UserDto](#userdto) |


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
---
## sign-up-controller
Auth Management

### /v1/iam/auth/app/getrefreshtoken

#### POST
##### Summary

Get new tokens using tenantid in case existing is expired

##### Description

Get new tokens using tenantid in case existing is expired

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| refreshTokenRequest | body | refreshTokenRequest | Yes | [RefreshTokenRequest](#refreshtokenrequest) |

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/books/invite/status

#### GET
##### Summary

Get Invite status for the invite code

##### Description

API to get Invite status for the invite code

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | query | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Successfully retreived the status for Invite code | [InviteStatusResponse](#invitestatusresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Server error while retreiving the status for Invite code |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/mobile/getrefreshtoken

#### POST
##### Summary

Get new tokens using tenantid in case existing is expired

##### Description

Get new tokens using tenantid in case existing is expired

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| refreshTokenRequest | body | refreshTokenRequest | Yes | [RefreshTokenRequest](#refreshtokenrequest) |

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/password/confirm

#### POST
##### Summary

Confirm forgot password

##### Description

Confirm forgot password

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| confirmPasswordRequest | body | confirmPasswordRequest | Yes | [ConfirmPasswordRequest](#confirmpasswordrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User has set new password successfully. | [OtpResponse](#otpresponse) |
| 201 | Created |  |
| 400 | User's new password request failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | User's new password request failed. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/password/forgot

#### POST
##### Summary

Forgot password

##### Description

Forgot password

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| forgotPasswordRequest | body | forgotPasswordRequest | Yes | [ForgotPasswordRequest](#forgotpasswordrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Confirmation code has been sent successfully. |
| 201 | Created |
| 400 | Failed to initiate forgot password confirmation code. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Failed to initiate forgot password confirmation code. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/sign-up/affiliate

#### POST
##### Summary

Affiliate Sign up

##### Description

Affiliate Sign up

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| affiliateSignupRequest | body | affiliateSignupRequest | Yes | [AffiliateSignupRequest](#affiliatesignuprequest) |

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/sign-up/books/invite

#### POST
##### Summary

Signup using invitation code

##### Description

Signup using invitation code

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| signUpWithInviteRequest | body | signUpWithInviteRequest | Yes | [SignUpWithInviteRequest](#signupwithinviterequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AuthenticationResultTypeDto](#authenticationresulttypedto) |
| 201 | User has been created successfully. | [AuthenticationResultTypeDto](#authenticationresulttypedto) |
| 400 | User with same username is already exist. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/sign-up/employee/invite

#### POST
##### Summary

Set password and sign in employee with invitation code

##### Description

Set password and sign in employee with invitation code

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| signUpWithInviteRequest | body | signUpWithInviteRequest | Yes | [SignUpWithInviteRequest](#signupwithinviterequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AuthenticationResultTypeDto](#authenticationresulttypedto) |
| 201 | User has been created successfully. | [AuthenticationResultTypeDto](#authenticationresulttypedto) |
| 400 | User with same username is already exist. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/sign-up/mobile

#### POST
##### Summary

Signup using contact no

##### Description

Signup using contact no

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| mobileSignupRequestWithOrg | body | mobileSignupRequestWithOrg | Yes | [MobileSignupRequestWithOrg](#mobilesignuprequestwithorg) |

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/sign-up/web

#### POST
##### Summary

Signup using contact, email and password

##### Description

Signup using contact, email and password

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| webSignupRequest | body | webSignupRequest | Yes | [WebSignupRequest](#websignuprequest) |

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/user

#### GET
##### Summary

Api to check if user email or contact exists.

##### Description

Api to check if user email or contact exists.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| action | query | action | No | string |
| contact | query | Contact of user | No | string |
| emailId | query | Email of user | No | string |

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/user/invite

#### POST
##### Summary

Invite user

##### Description

Invite user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inviteRequest | body | inviteRequest | Yes | [InviteRequest](#inviterequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Invite code has been sent. | object |
| 201 | Created |  |
| 400 | Failed to initiate invite. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to initiate invite. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/user/verify-invite

#### POST
##### Summary

Verify invite user

##### Description

Verify invite user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inviteVerificationRequest | body | inviteVerificationRequest | Yes | [InviteVerificationRequest](#inviteverificationrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Invite code Verified. | [UserDto](#userdto) |
| 201 | Created |  |
| 400 | Failed to Verify invite code. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to Verify invite code. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/web/getrefreshtoken

#### POST
##### Summary

Get new tokens using tenantid in case existing is expired

##### Description

Get new tokens using tenantid in case existing is expired

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| refreshTokenRequest | body | refreshTokenRequest | Yes | [RefreshTokenRequest](#refreshtokenrequest) |

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
| --------------- | ------ |
| Authorization | global |

---
## email-verification-controller
User email verification

### /v1/iam/auth/email/regenerate

#### GET
##### Summary

/regenerate

##### Description

Regenerate Email verification API

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| email | query | email | Yes | string |

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/email/verification

#### GET
##### Summary

/verification

##### Description

Email verification API

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| token | query | token | Yes | string |
| user | query | user | Yes | string |

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
| --------------- | ------ |
| Authorization | global |

---
## logout-controller
Logout Controller

### /v1/iam/auth/logout

#### GET
##### Summary

logout

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/logout2

#### GET
##### Summary

logout2

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## mobile-social-auth-controller
Social Auth Management

### /v1/iam/auth/mobile/social

#### POST
##### Summary

Social Auth

##### Description

Social Auth

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| socialAuthRequest | body | socialAuthRequest | Yes | [SocialAuthRequest](#socialauthrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User has been successfully authorized! | [SocialAuthResponse](#socialauthresponse) |
| 201 | Created |  |
| 401 | User is not authorized! |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## sign-in-controller
Mobile Auth Management

### /v1/iam/auth/sign-in/login/status

#### GET
##### Summary

User Login status

##### Description

API to fetch User Login status based on cookie or access token header

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/sign-in/mobile

#### POST
##### Summary

Signin API to receive verification code and session

##### Description

Signin API to receive verification code and session

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| otpRequest | body | otpRequest | Yes | [OtpRequest](#otprequest) |

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/sign-in/mobile/verify

#### POST
##### Summary

Verify Api to get token against verification code

##### Description

Verify Api to get token against verification code

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| otpVerificationRequest | body | otpVerificationRequest | Yes | [OtpVerificationRequest](#otpverificationrequest) |

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/sign-in/web/mfa

#### POST
##### Summary

API to get MFA key and QR code

##### Description

API to get MFA key and QR code

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Got MFA Status successfully | [MFAResponse](#mfaresponse) |
| 201 | Created |  |
| 400 | Failed to get MFA key |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to get MFA key |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to disable MFA

##### Description

API to disable MFA

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| disableRequest | body | disableRequest | Yes | [MFADisableRequest](#mfadisablerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Disabled MFA successfully | [MFAResponse](#mfaresponse) |
| 204 | No Content |  |
| 400 | Failed to disable MFA |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to disable MFA |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/sign-in/web/mfa-enable

#### POST
##### Summary

API to enable MFA

##### Description

API to enable MFA

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| enableRequest | body | enableRequest | Yes | [MFAEnableRequest](#mfaenablerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Enabled MFA successfully | [MFAEnableResponse](#mfaenableresponse) |
| 201 | Created |  |
| 400 | Failed to enable MFA |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to enable MFA |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/sign-in/web/mfa-signin

#### POST
##### Summary

MFA API to authenticate with username, password & pin

##### Description

MFA API to authenticate with username, password & pin

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| mfaSigninRequest | body | mfaSigninRequest | Yes | [MFASigninRequest](#mfasigninrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Authentication using MFA completed successfully. | [AuthenticationResultTypeDto](#authenticationresulttypedto) |
| 201 | Created |  |
| 400 | Failed to authenticate using MFA |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to authenticate using MFA |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/sign-in/web/mfa-status

#### GET
##### Summary

API to get MFA Status

##### Description

API to get MFA Status

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Got MFA Status successfully | [MFAStatusResponse](#mfastatusresponse) |
| 400 | Failed to get MFA key |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to get MFA key |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/auth/sign-in/web/sign-in

#### POST
##### Summary

Web Signin API to authenticate with username and password

##### Description

Web Signin API to authenticate with username and password

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| webSignInRequest | body | webSignInRequest | Yes | [WebSignInRequest](#websigninrequest) |

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
| --------------- | ------ |
| Authorization | global |

---
## social-auth-controller
Social Auth Management

### /v1/iam/auth/social

#### POST
##### Summary

Social Auth

##### Description

Social Auth

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| socialAuthRequest | body | socialAuthRequest | Yes | [SocialAuthRequest](#socialauthrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User has been successfully authorized! | [SocialAuthResponse](#socialauthresponse) |
| 201 | Created |  |
| 401 | User is not authorized! |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## apple-auth-controller
Apple Auth Controller

### /v1/iam/auth/social/apple

#### POST
##### Summary

Apple Auth

##### Description

Apple Auth Management

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | formData |  | No | string |
| id_token | formData |  | No | string |
| state | formData |  | No | string |
| user | formData |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | User has been successfully authorized! |
| 201 | Created |
| 401 | User is not authorized! |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## token-controller
Token Controller

### /v1/iam/token/app/validate

#### GET
##### Summary

API to validate token

##### Description

API to validate token

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Token has been validated successfully! | [SocialAuthResponse](#socialauthresponse) |
| 401 | Invalid token! |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/token/firebase

#### GET
##### Summary

Generate firebase token.

##### Description

API to generate firebase token.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Firebase token generated successfully | string |
| 401 | Invalid access token |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/token/validate

#### GET
##### Summary

API to validate token

##### Description

API to validate token

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Token has been validated successfully! | [SocialAuthResponse](#socialauthresponse) |
| 401 | Invalid token! |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## user-controller
User Management

### /v1/iam/users

#### POST
##### Summary

User Creation

##### Description

API to create a user.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| appUserCreateRequest | body | appUserCreateRequest | Yes | [AppUserCreateRequest](#appusercreaterequest) |

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/account

#### DELETE
##### Summary

Delete User Account

##### Description

API to delete user account

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| accountDeleteReason | query | accountDeleteReason | Yes | string |
| isSocialLogin | query | isSocialLogin | No | boolean |
| password | query | password | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | User account has been deleted |
| 400 | Unable to delete user account |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/adminEmailVerify/{email}

#### GET
##### Summary

Find by email containing ignored case

##### Description

Find by email containing ignored case

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| email | path | email | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User found by email | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/adminSetPassword

#### POST
##### Summary

Confirm forgot password

##### Description

Confirm forgot password

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| confirmPasswordRequest | body | confirmPasswordRequest | Yes | [ConfirmPasswordRequest](#confirmpasswordrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User has set new password successfully. | [OtpResponse](#otpresponse) |
| 201 | Created |  |
| 400 | User's new password request failed. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | User's new password request failed. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/app/switch-tenant

#### POST
##### Summary

Switch Tenant

##### Description

Switch Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| switchTenantRequest | body | switchTenantRequest | Yes | [SwitchTenantRequest](#switchtenantrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant has been switched successfully. | [AuthenticationResultTypeDto](#authenticationresulttypedto) |
| 201 | Created |  |
| 400 | You are not part of the requested organiation. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Could not switch tenant. Please try again. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/app/token

#### POST
##### Summary

App Signin API to switch user token to app token

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/bulk-create

#### POST
##### Summary

Create user in bulk.

##### Description

Api to create users in bulk

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inviteBulkUserRequests | body | inviteBulkUserRequests | Yes | [ [InviteBulkUserRequest](#invitebulkuserrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Users created successfully. | [BulkAddUserResponse](#bulkadduserresponse) |
| 201 | Created |  |
| 400 | Failed to create users. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/bulk-invite

#### POST
##### Summary

Invite bulk user to a tenant

##### Description

Invite bulk user to a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inviteBulkUserRequests | body | inviteBulkUserRequests | Yes | [ [InviteBulkUserRequest](#invitebulkuserrequest) ] |

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/change-password

#### POST
##### Summary

Change user password

##### Description

Change user password

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userChangePasswordRequest | body | userChangePasswordRequest | Yes | [UserChangePasswordRequest](#userchangepasswordrequest) |

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/confirmotp

#### POST
##### Summary

confirm verification code

##### Description

confirm verification code

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| confirmOtpRequest | body | confirmOtpRequest | Yes | [ConfirmOtpRequest](#confirmotprequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | user has confirmed email/contact successfully | [OtpResponse](#otpresponse) |
| 201 | Created |  |
| 400 | user failed to confirm email/contact |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | user failed to confirm email/contact |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/disableMFAUserAccount/{email}

#### GET
##### Summary

Find by email and disable MFA

##### Description

Find by email containing ignored case and disable  MFA

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| email | path | email | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | MFA disabled for email | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/emailchangeconfirmotp

#### POST
##### Summary

email change confirm

##### Description

email change configm

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| emailChangeConfirmRequest | body | emailChangeConfirmRequest | Yes | [EmailChangeConfirmRequest](#emailchangeconfirmrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | email has been changed | [ResponseEntity](#responseentity) |
| 201 | Created |  |
| 400 | bad request  |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/emailchangeotp

#### POST
##### Summary

email change request

##### Description

email change request

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| emailChangeRequest | body | emailChangeRequest | Yes | [EmailChangeRequest](#emailchangerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | otp has been generated for email change | [EmailChangeResponse](#emailchangeresponse) |
| 201 | Created |  |
| 400 | bad request  |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/generateverifycontactotp

#### GET
##### Summary

generateverifycontactotp

##### Description

Send OTP to verify contact

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| email | query | email | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | SMS has been sent successfully. | [ResponseEntity](#responseentity) |
| 400 | SMS send failed |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/generateverifyemailotp

#### GET
##### Summary

generateverifyemailotp

##### Description

Send OTP to verify email

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| email | query | email | Yes | string |

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/intercom-hash

#### GET
##### Summary

User Intercom hash

##### Description

API to get Intercom hash for a user.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User hash generated successfully. | [IntercomHash](#intercomhash) |
| 400 | Could not generate hash. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/intercom-hash-android

#### GET
##### Summary

User Intercom hash

##### Description

API to get Intercom hash for a user.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User hash generated successfully. | [IntercomHash](#intercomhash) |
| 400 | Could not generate hash. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/intercom-hash-ios

#### GET
##### Summary

User Intercom hash

##### Description

API to get Intercom hash for a user.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User hash generated successfully. | [IntercomHash](#intercomhash) |
| 400 | Could not generate hash. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/invite/{id}

#### PUT
##### Summary

Update invited user

##### Description

Update invited user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| inviteUserUpdateRequest | body | inviteUserUpdateRequest | Yes | [InviteUserUpdateRequest](#inviteuserupdaterequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Invited user Updated. | [InviteUserUpdateRequest](#inviteuserupdaterequest) |
| 201 | Created |  |
| 400 | Failed to Update invited user |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to Update invited user. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/otp

#### GET
##### Summary

Get user otp API

##### Description

Get user otp API

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userName | query | userName | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Get user otp success | [UserOtpResponse](#userotpresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Invalid user name user otp. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create user otp API

##### Description

Create user otp API

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userName | body | userName | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Create user otp success | [UserOtpResponse](#userotpresponse) |
| 201 | Created |  |
| 401 | Invalid user name user otp. |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/registered/contacts

#### POST
##### Summary

Returns list of users for a given list of contact numbers

##### Description

Returns list of users for a given list of contact numbers

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| registeredUserRequest | body | registeredUserRequest | Yes | [RegisteredUserRequest](#registereduserrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Registered contacts list fetched successfully | [ [RegisteredUserResponse](#registereduserresponse) ] |
| 201 | Created |  |
| 400 | Failed to get registered user list |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Registered user list not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/switch-client

#### POST
##### Summary

Switch Client

##### Description

Switch Client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| switchTenantRequest | body | switchTenantRequest | Yes | [SwitchTenantRequest](#switchtenantrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Client has been switched successfully. | [AuthenticationResultTypeDto](#authenticationresulttypedto) |
| 201 | Created |  |
| 400 | You are not part of the requested organiation. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Could not switch client. Please try again. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/switch-tenant

#### POST
##### Summary

Switch Tenant

##### Description

Switch Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| switchTenantRequest | body | switchTenantRequest | Yes | [SwitchTenantRequest](#switchtenantrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant has been switched successfully. | [AuthenticationResultTypeDto](#authenticationresulttypedto) |
| 201 | Created |  |
| 400 | You are not part of the requested organiation. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Could not switch tenant. Please try again. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/tenant-reset

#### DELETE
##### Summary

Reset tenant

##### Description

API to reset tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| password | query | password | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 204 | Tenant has been reset | [SignUpResponse](#signupresponse) |
| 400 | Unable to reset tenant |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/tenant/{id}

#### DELETE
##### Summary

Delete tenant

##### Description

API to delete tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| password | query | password | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 204 | Tenant has been deleted | [SignUpResponse](#signupresponse) |
| 400 | Unable to delete tenant |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/tenants

#### POST
##### Summary

Add/invite a user to a tenant

##### Description

Add/invite a user to a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userTenantMappingrequest | body | userTenantMappingrequest | Yes | [UserTenantRelRequest](#usertenantrelrequest) |

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/tenants/module-roles

#### POST
##### Summary

Add/invite a user to a tenant

##### Description

Add/invite a user to a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userTenantMappingrequest | body | userTenantMappingrequest | Yes | [UserTenantRelCreationRequest](#usertenantrelcreationrequest) |

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/tenants/roles

#### POST
##### Summary

Add/invite a user to a tenant

##### Description

Add/invite a user to a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userTenantMappingrequest | body | userTenantMappingrequest | Yes | [UserTenantRelCreationRequest](#usertenantrelcreationrequest) |

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/unLockUserAccount/{email}

#### GET
##### Summary

Find by email containing ignored case

##### Description

Find by email containing ignored case

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| email | path | email | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User found by email | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/unlinkcontact

#### GET
##### Summary

unlinkcontact

##### Description

Unlink Contact

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact has been sent successfully unlinked. | [ResponseEntity](#responseentity) |
| 400 | Failed to unlink contact |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/web/switch-tenant

#### POST
##### Summary

Switch Tenant

##### Description

Switch Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| switchTenantRequest | body | switchTenantRequest | Yes | [SwitchTenantRequest](#switchtenantrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant has been switched successfully. | [AuthenticationResultTypeDto](#authenticationresulttypedto) |
| 201 | Created |  |
| 400 | You are not part of the requested organiation. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Could not switch tenant. Please try again. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/{id}

#### GET
##### Summary

Get user by id.

##### Description

API to get user information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User information has been fetched successfully. | [AppUserResponseInfo](#appuserresponseinfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | User does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update user information

##### Description

API to update user information

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| userDto | body | userDto | Yes | [UserDto](#userdto) |

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
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update user attributes.

##### Description

API to update attributes of existing user.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| userAttributeUpdateRequest | body | userAttributeUpdateRequest | Yes | [UserAttributeUpdateRequest](#userattributeupdaterequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User attributes has been updated successfully. | [UserDto](#userdto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | User does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## mobile-email-linking-controller
Mobile user Email link

### /v1/iam/users/email/delink

#### POST
##### Summary

Mobile user email De-linking.

##### Description

API De-link email to mobile user.

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/email/link

#### POST
##### Summary

Mobile user email linking.

##### Description

API link email to mobile user.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| email | body | email | Yes | string |

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/email/merge

#### POST
##### Summary

Merge accounts

##### Description

API to merge accounts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [MergeAccountRequest](#mergeaccountrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Verification code has been sent successfully. |
| 201 | Created |
| 400 | Verification code has not been sent. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/email/merge/process

#### POST
##### Summary

Process merging of accounts

##### Description

API to process merge accounts.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [MergeAccountProcessRequest](#mergeaccountprocessrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Accounts merged successfully. | [AuthenticationResultTypeDto](#authenticationresulttypedto) |
| 201 | Created |  |
| 400 | Accounts could not be merged. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/email/regenerate

#### POST
##### Summary

Regenerate Email verification API

##### Description

Regenerate Email verification API

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
| --------------- | ------ |
| Authorization | global |

### /v1/iam/users/email/verify

#### POST
##### Summary

Mobile user email verification.

##### Description

API email verfication for mobile user.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| emailLinkRequest | body | emailLinkRequest | Yes | [EmailLinkRequest](#emaillinkrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Email has been linked successfully. | [ResponseEntity](#responseentity) |
| 201 | Created |  |
| 400 | Email has not been linked successfully. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Provided confirmation code information is invalid |  |
| 410 | The Confirmation code has been expired. Please generate a new confirmation code. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
### Models

#### Address

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address1 | string | Address line 1<br/>*Example:* `"218, Robinson Road"` | No |
| address2 | string | Address line 2<br/>*Example:* `"Downtown"` | No |
| city | string | City<br/>*Example:* `"C001"` | No |
| contactName | string | contact name for address<br/>*Example:* `"John Smith"` | No |
| country | string | Country<br/>*Example:* `"C001"` | No |
| destinationOfSupply | string | state in India<br/>*Example:* `"Maharashtra"` | No |
| placeOfSupply | string | state in India<br/>*Example:* `"Punjab"` | No |
| postalCode | string | Postal Code<br/>*Example:* `123456` | No |
| preferred | boolean | Is this a default address?<br/>*Example:* `true` | No |
| state | string | State<br/>*Example:* `"CS001"` | No |

#### AffiliateSignupRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string | User Contact Number<br/>*Example:* `12345678` | No |
| emailId | string | Email<br/>*Example:* `"james@bond.com"` | No |
| firstName | string | User First Name<br/>*Example:* `"John"` | No |
| iamUserId | long | IAM app_user id<br/>*Example:* `12` | No |
| isEmailVerified | boolean | Email Verification Required <br/>*Example:* `false` | No |
| lastName | string | User Last Name<br/>*Example:* `"Doe"` | No |
| password | string | Password<br/>*Example:* `"**********"` | No |
| shouldSendEmail | boolean | flag to send email or not<br/>*Example:* `true` | No |

#### AppUserBasicInfoDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string |  | No |
| deleted | boolean |  | No |
| email | string |  | No |
| firstName | string |  | No |
| lastName | string |  | No |

#### AppUserCreateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Application name<br/>*Example:* `"ERP"` | No |
| bkPlanDetails | string | Selected plan details if client pays.<br/>*Example:* `"MONTHLY/YEARLY"` | No |
| bkPlanId | string | Selected plan id if client pays.<br/>*Example:* `1234` | No |
| bookkeeperPays | boolean | book keeper team pays or client pays<br/>*Example:* `false` | No |
| contact | string | User Contact Number<br/>*Example:* `12345678` | No |
| createUserInTenant | boolean | Flag to control creation of users in tenant<br/>*Example:* `true` | No |
| emailId | string | Email<br/>*Example:* `"james@bond.com"` | No |
| firstName | string | User First Name<br/>*Example:* `"John"` | No |
| iamUserId | long | IAM app_user id<br/>*Example:* `12` | No |
| isBookkeeper | boolean | Flag indicate user book keeper<br/>*Example:* `true` | No |
| isEmailVerified | boolean | Email Verification Required <br/>*Example:* `false` | No |
| isGoUser | boolean | Go request to add user to ERP<br/>*Example:* `false` | No |
| isPartner | boolean | Flag indicate partner book keeper<br/>*Example:* `true` | No |
| isTeam | boolean | book keeper team or client<br/>*Example:* `false` | No |
| isUserNotUpdated | boolean | Flag maintain to identify if user is added through invite flow.<br/>*Example:* `false` | No |
| isWebsite | boolean | Flag to indicate signup from website<br/>*Example:* `false` | No |
| lastName | string | User Last Name<br/>*Example:* `"Doe"` | No |
| organizationName | string | Pass organization name if you want to create org without setup<br/>*Example:* `"Deskera"` | No |
| password | string | Password<br/>*Example:* `"**********"` | No |
| roleGroup | string | Role Group<br/>*Example:* `"admin"` | No |
| shouldSendEmail | boolean | flag to send email or not<br/>*Example:* `true` | No |
| socialAuth | string | Needed, if user is signing up via social login<br/>*Example:* `"GOOGLE"` | No |
| source | string | Registration source DESKERA/SHOPIFY<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"Deskera"` | No |

#### AppUserResponseInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | [ [Address](#address) ] | List of Address. | No |
| appUserRoleXrefs | [ [AppUserRoleInfo](#appuserroleinfo) ] | User Roles | No |
| authUserId | string | Auth0 User ID<br/>*Example:* `"auth0|5d70ec986e382a0d12a4ff22"` | No |
| contact | string | User Contact<br/>*Example:* `12345678` | No |
| deleted | boolean | Delete Flag<br/>*Example:* `false` | No |
| department | string | User Department<br/>*Example:* `"Finance"` | No |
| designation | string | User Designation<br/>*Example:* `"Accountant"` | No |
| email | string | User email<br/>*Example:* `"jsmith@example.com"` | No |
| firstName | string | User First Name<br/>*Example:* `"John"` | No |
| genderLookUpCode | string | Gender<br/>*Example:* `"Mr."` | No |
| id | long | Primary Key<br/>*Example:* `1` | No |
| isMFAEnabled | boolean | MFA Enabled Status<br/>*Example:* `false` | No |
| lastName | string | User Last Name<br/>*Example:* `"Doe"` | No |
| profileUrl | string | User profile image path.<br/>*Example:* `"http://deskera.com/user/myprofile.png"` | No |
| socialAuth | string | social auth<br/>*Example:* `"auth"` | No |
| status | string | Status like Active/ InActive<br/>*Example:* `"active"` | No |
| tenantId | long | Tenant Id<br/>*Example:* `1` | No |
| userName | string | User Name<br/>*Example:* `"jsmith@example.com"` | No |
| userNotUpdated | boolean |  | No |

#### AppUserRoleInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Application Name<br/>*Enum:* `"CONSOLE"`, `"ERP"`, `"ORGANISATION"`, `"ATTENDANCE"`, `"EXPENSE"`, `"CRM_PLUS"`<br/>*Example:* `"ERP"` | No |
| roleGroup | string | Role Group<br/>*Example:* `"admin"` | No |
| roleShortCode | string | Role Short Code<br/>*Example:* `"console_user_r"` | No |
| tenantId | long | Tenant ID<br/>*Example:* `12` | No |

#### AppUserRolesCreateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Application name<br/>*Example:* `"ERP"` | No |
| moduleUuids | [ string ] | List of module UUID | No |
| roleGroup | string | Role Group<br/>*Example:* `"admin"` | No |

#### AuthenticationResultType

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accessToken | string |  | No |
| expiresIn | integer |  | No |
| idToken | string |  | No |
| newDeviceMetadata | [NewDeviceMetadataType](#newdevicemetadatatype) |  | No |
| refreshToken | string |  | No |
| tokenType | string |  | No |

#### AuthenticationResultTypeDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accessToken | string |  The access token<br/>*Example:* `"eyJraWQi..."` | No |
| emailVerified | boolean | Email verified status<br/>*Example:* `false` | No |
| expiresIn | integer | The expiration period of the authentication result in seconds.<br/>*Example:* `3600` | No |
| guid | string |  The access token<br/>*Example:* `"eyJraWQi..."` | No |
| idToken | string |  The id token<br/>*Example:* `"eyJhbGci..."` | No |
| mfaenabled | boolean |  | No |
| refreshToken | string |  The refresh token<br/>*Example:* `"eyJjdHki..."` | No |
| tokenType | string | The token type.<br/>*Example:* `"Bearer"` | No |

#### BulkAddUserResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [IAMUserDto](#iamuserdto) ] |  | No |
| success | [ [IAMUserDto](#iamuserdto) ] |  | No |

#### CheckExistingUserResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contactExists | boolean | Returns true if user with same contact exists<br/>*Example:* `false` | No |
| emailExists | boolean | Returns true if user with same email exists<br/>*Example:* `true` | No |
| sameUser | boolean | Returns true if contact exists and email exists and they belong to same user.<br/>*Example:* `true` | No |

#### ConfirmOtpRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| confirmationCode | string | Confirmation code received through Email/SMS<br/>*Example:* `123456` | Yes |
| isEmail | boolean | if username is email then this is true<br/>*Example:* `true` | No |
| password | string | User password<br/>*Example:* `"abcd@123"` | No |
| userName | string | email/contact<br/>*Example:* `"+65-1234-5678"` | Yes |

#### ConfirmPasswordRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| confirmationCode | string | Confirmation code received through SMS<br/>*Example:* `123456` | Yes |
| password | string | Password to signin<br/>*Example:* `"abcd@123"` | Yes |
| userName | string | Username<br/>*Example:* `"+65-1234-5678"` | Yes |

#### EmailChangeConfirmRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| newEmail | string | New Email<br/>*Example:* `"johndoe@example.com"` | Yes |
| sessionID | string | Session ID<br/>*Example:* `"abcd-efgh"` | Yes |
| verificationCode | string | Verification Code<br/>*Example:* `123456` | Yes |

#### EmailChangeDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| newEmail | string | Newly added email<br/>*Example:* `"New email"` | No |
| oldEmail | string | Email to be replaced<br/>*Example:* `"Old email"` | No |

#### EmailChangeRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| newEmail | string | New Email<br/>*Example:* `"johndoe@example.com"` | Yes |
| password | string | Login password<br/>*Example:* `"password"` | Yes |

#### EmailChangeResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| otpExpiryDurationSeconds | string | Duration in seconds for otp expiry<br/>*Example:* `180` | Yes |
| sessionID | string | session ID<br/>*Example:* `"abcd-efgh"` | Yes |

#### EmailLinkRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| confirmationCode | string | Confirmation code received through Email<br/>*Example:* `123456` | Yes |
| password | string | Password to signin<br/>*Example:* `"Abcd@123"` | Yes |

#### ForgotPasswordRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userName | string | Username<br/>*Example:* `"+65-1234-5678"` | Yes |

#### IAMUserDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string |  | No |
| contact | string |  | No |
| email | string |  | No |
| firstName | string |  | No |
| fullName | string |  | No |
| id | long |  | No |
| lastName | string |  | No |
| message | string |  | No |
| roleGroup | string |  | No |
| tenantId | long |  | No |
| username | string |  | No |

#### IntercomHash

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| hash | string |  | No |

#### InviteBulkUserRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Deskera Application Name<br/>*Example:* `"ORGANISATION"` | Yes |
| contact | string | Contact No<br/>*Example:* `"+6512345678"` | Yes |
| email | string | User email<br/>*Example:* `"nguyen.tuan_123@deskera.com"` | Yes |
| firstName | string | user first name<br/>*Example:* `"Tuan"` | Yes |
| lastName | string | User last name<br/>*Example:* `"Nguyen"` | Yes |
| peoplePlus | boolean | Request Origin is People+ App<br/>*Example:* `true` | No |
| roleGroup | string | Deskera Roles<br/>*Example:* `"org_admin"` | Yes |
| username | string | Username or Email or Contact Number of User<br/>*Example:* `"example@domain.com"` | Yes |

#### InviteRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| email | string | email<br/>*Example:* `"abcd@gmail.com"` | Yes |
| phone | string | contact<br/>*Example:* `99999999` | Yes |

#### InviteStatusResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appInviteStatus | string |  | No |
| inviteCode | string |  | No |

#### InviteUserUpdateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string |  | No |
| countryCode | string |  | No |
| currency | string |  | No |
| email | string |  | No |
| firstName | string |  | No |
| industry | string |  | No |
| lastName | string |  | No |
| name | string |  | No |
| noOfEmployees | string |  | No |
| password | string |  | No |
| phone | string |  | No |
| title | string |  | No |

#### InviteVerificationRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| email | string | email address<br/>*Example:* `"abc@gmail.com"` | Yes |
| phone | string | contact number<br/>*Example:* `99999999` | Yes |
| session | string | session received on invite request<br/>*Example:* `"eyJjdHkiOiJKV1QiLCJlbmMiOiJ.."` | Yes |
| verificationCode | string | Verification code received on email<br/>*Example:* `12345` | No |

#### MFADisableRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| password | string | User password<br/>*Example:* `"abcd@123"` | Yes |

#### MFAEnableRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| mfaCode | string | MFA code<br/>*Example:* `1234567` | Yes |
| mfaType | string | Mfa type<br/>*Enum:* `"EIGHT_DIGIT"`, `"SIX_DIGIT"`, `"ALPHA_NUMERIC"`<br/>*Example:* `"EIGHT_DIGIT"` | No |

#### MFAEnableResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| enableStatus | boolean | MFA Enable Status<br/>*Example:* `true` | No |
| recoveryCodes | [ string ] | MFA Recovery codes | No |

#### MFAResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| enableStatus | boolean | MFA Enable Status<br/>*Example:* `true` | No |
| key | string | MFA Key<br/>*Example:* `"abcd"` | No |
| qrCodeBytes | string | MFA QR Code bytes in base64<br/>*Example:* `"qrcode"` | No |

#### MFASigninRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| inviteCode | string | Invitation Code<br/>*Example:* `"as-1231234-asdhasd"` | No |
| isMobile | boolean | Is Mobile sign in<br/>*Example:* `true` | No |
| mfaCode | string | MFA Code<br/>*Example:* `"ABC123"` | Yes |
| password | string | User password<br/>*Example:* `"abcd@123"` | Yes |
| userName | string | Username<br/>*Example:* `"+65-1234-5678"` | Yes |

#### MFAStatusByIamIdResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long |  | No |
| isMFAEnabled | boolean |  | No |

#### MFAStatusResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| enableStatus | boolean | MFA Enable Status<br/>*Example:* `true` | No |

#### MergeAccountProcessRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string | Contact of account to merge<br/>*Example:* `"+6598644453"` | Yes |
| email | string | Email id of account to merge<br/>*Example:* `"abc@def.com"` | Yes |
| isMobile | boolean | Is mobile client or web client.<br/>*Example:* `true` | Yes |
| makePrimary | boolean | Flag to overwrite contact/email if contact/email in current account is not empty.<br/>*Example:* `false` | Yes |
| otp | string | OTP received by SMS/Mail.<br/>*Example:* `123456` | Yes |

#### MergeAccountRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string | Contact of account to merge<br/>*Example:* `"+6598644453"` | Yes |
| email | string | Email id of account to merge<br/>*Example:* `"abc@def.com"` | Yes |

#### MobileSignupRequestWithOrg

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string | User Contact Number<br/>*Example:* `12345678` | No |
| firstName | string | User First Name<br/>*Example:* `"John"` | No |
| iamUserId | long | IAM app_user id<br/>*Example:* `12` | No |
| lastName | string | User Last Name<br/>*Example:* `"Doe"` | No |
| organizationName | string | Pass organization name if you want to create org without setup<br/>*Example:* `"Deskera"` | No |
| shouldSendEmail | boolean | flag to send email or not<br/>*Example:* `true` | No |

#### NameChangeDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| email | string | email of user<br/>*Example:* `"ram@gamil.com"` | No |
| firstName | string | modified first name<br/>*Example:* `"ram"` | No |
| lastName | string | modified last name<br/>*Example:* `"kumar"` | No |

#### NewDeviceMetadataType

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| deviceGroupKey | string |  | No |
| deviceKey | string |  | No |

#### OtpRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| phoneNumber | string | Phone Number<br/>*Example:* `"+65-1234-5678"` | Yes |

#### OtpResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| message | string |  | No |
| retriesLeft | integer |  | No |

#### OtpVerificationRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| phoneNumber | string | Phone number<br/>*Example:* `"+65-1234-5678"` | Yes |
| session | string | Cognito session received on signup<br/>*Example:* `"eyJjdHkiOiJKV1QiLCJlbmMiOiJ.."` | Yes |
| verificationCode | string | Verification code received on contact no<br/>*Example:* `12345` | Yes |

#### RefreshTokenRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| refreshToken | string | Refresh token<br/>*Example:* `"eyJjdHkiOiJKV1QiLCJlbmMiOiJ.."` | Yes |
| tenantId | long | Tenant Id<br/>*Example:* `123456` | Yes |
| userName | string | Username<br/>*Example:* `"+65-1234-5678"` | Yes |

#### RegisteredUserRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| emails | [ string ] | List of user's contacts emails<br/>*Example:* `["sample@xyz.abc","demo@abc.xyz"]` | Yes |
| phones | [ string ] | List of user's contacts phone numbers<br/>*Example:* `["+6504372324"]` | Yes |

#### RegisteredUserResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string | Contact phone no.<br/>*Example:* `"+169342347234"` | No |
| email | string | Contact email address<br/>*Example:* `"user@sample.yyy"` | No |
| firstName | string | User First Name<br/>*Example:* `"John"` | No |
| id | long | Primary Key<br/>*Example:* `1` | No |
| lastName | string | User Last Name<br/>*Example:* `"Doe"` | No |
| profileUrl | string | User profile image path.<br/>*Example:* `"http://deskera.com/user/myprofile.png"` | No |

#### ResponseEntity

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| body | object |  | No |
| statusCode | string | *Enum:* `"100 CONTINUE"`, `"101 SWITCHING_PROTOCOLS"`, `"102 PROCESSING"`, `"103 CHECKPOINT"`, `"200 OK"`, `"201 CREATED"`, `"202 ACCEPTED"`, `"203 NON_AUTHORITATIVE_INFORMATION"`, `"204 NO_CONTENT"`, `"205 RESET_CONTENT"`, `"206 PARTIAL_CONTENT"`, `"207 MULTI_STATUS"`, `"208 ALREADY_REPORTED"`, `"226 IM_USED"`, `"300 MULTIPLE_CHOICES"`, `"301 MOVED_PERMANENTLY"`, `"302 FOUND"`, `"302 MOVED_TEMPORARILY"`, `"303 SEE_OTHER"`, `"304 NOT_MODIFIED"`, `"305 USE_PROXY"`, `"307 TEMPORARY_REDIRECT"`, `"308 PERMANENT_REDIRECT"`, `"400 BAD_REQUEST"`, `"401 UNAUTHORIZED"`, `"402 PAYMENT_REQUIRED"`, `"403 FORBIDDEN"`, `"404 NOT_FOUND"`, `"405 METHOD_NOT_ALLOWED"`, `"406 NOT_ACCEPTABLE"`, `"407 PROXY_AUTHENTICATION_REQUIRED"`, `"408 REQUEST_TIMEOUT"`, `"409 CONFLICT"`, `"410 GONE"`, `"411 LENGTH_REQUIRED"`, `"412 PRECONDITION_FAILED"`, `"413 PAYLOAD_TOO_LARGE"`, `"413 REQUEST_ENTITY_TOO_LARGE"`, `"414 URI_TOO_LONG"`, `"414 REQUEST_URI_TOO_LONG"`, `"415 UNSUPPORTED_MEDIA_TYPE"`, `"416 REQUESTED_RANGE_NOT_SATISFIABLE"`, `"417 EXPECTATION_FAILED"`, `"418 I_AM_A_TEAPOT"`, `"419 INSUFFICIENT_SPACE_ON_RESOURCE"`, `"420 METHOD_FAILURE"`, `"421 DESTINATION_LOCKED"`, `"422 UNPROCESSABLE_ENTITY"`, `"423 LOCKED"`, `"424 FAILED_DEPENDENCY"`, `"425 TOO_EARLY"`, `"426 UPGRADE_REQUIRED"`, `"428 PRECONDITION_REQUIRED"`, `"429 TOO_MANY_REQUESTS"`, `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"`, `"451 UNAVAILABLE_FOR_LEGAL_REASONS"`, `"500 INTERNAL_SERVER_ERROR"`, `"501 NOT_IMPLEMENTED"`, `"502 BAD_GATEWAY"`, `"503 SERVICE_UNAVAILABLE"`, `"504 GATEWAY_TIMEOUT"`, `"505 HTTP_VERSION_NOT_SUPPORTED"`, `"506 VARIANT_ALSO_NEGOTIATES"`, `"507 INSUFFICIENT_STORAGE"`, `"508 LOOP_DETECTED"`, `"509 BANDWIDTH_LIMIT_EXCEEDED"`, `"510 NOT_EXTENDED"`, `"511 NETWORK_AUTHENTICATION_REQUIRED"` | No |
| statusCodeValue | integer |  | No |

#### SignUpResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| authenticationResultType | [AuthenticationResultType](#authenticationresulttype) |  | No |
| tenantId | long | Tenant ID<br/>*Example:* `123` | No |
| tenantName | string | Tenant name<br/>*Example:* `"Deskera"` | No |
| userId | long | User Id<br/>*Example:* `"1L"` | No |

#### SignUpWithInviteRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string | User Contact<br/>*Example:* `"+6589991231"` | No |
| email | string | Email of the user.<br/>*Example:* `"abc@gmail.com"` | No |
| firstName | string | User first name<br/>*Example:* `"John"` | No |
| inviteCode | string | Unique Invitation Code<br/>*Example:* `"3609848a-394a-41c6-817f-c81e362881ed"` | No |
| lastName | string | User last name<br/>*Example:* `"Doe"` | No |
| password | string | Password<br/>*Example:* `"Abc@1234"` | No |

#### SocialAuthRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | social auth app name<br/>*Enum:* `"QUICKBOOK"`, `"ZOHO"`, `"XERO"`, `"LINKEDIN"`, `"FACEBOOK"`, `"APPLE"`, `"GOOGLE"`, `"OFFICE_365"`, `"ONEDRIVE"`, `"DROPBOX"`<br/>*Example:* `"GOOGLE"` | No |
| code | string | authorization grant code<br/>*Example:* `"12sdihgf23"` | No |
| firstName | string | first name of user<br/>*Example:* `"Tom"` | No |
| lastName | string | last name of user<br/>*Example:* `"Hanks"` | No |
| realmId | string | realmId<br/>*Example:* `"askjd23"` | No |
| redirectUrl | string | Base64 encoded redirect url associate with the authorization grant code<br/>*Example:* `"aHR0cDovL2Rlc2tlcmEuY29t"` | No |
| state | string | state<br/>*Example:* `123` | No |

#### SocialAuthResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accessToken | string | IAM Service Token<br/>*Example:* `"ey0...dy3W"` | No |
| email | string | User email<br/>*Example:* `"jonsnow@email.com"` | No |
| existingUser | boolean | is Existing user<br/>*Example:* `false` | No |
| firstName | string | User first name<br/>*Example:* `"John"` | No |
| idToken | string | Id Token<br/>*Example:* `"ey0...dy3W"` | No |
| lastName | string | User last name<br/>*Example:* `"Snow"` | No |
| refreshToken | string | IAM refresh Token<br/>*Example:* `"ey0...dy3W"` | No |

#### SwitchTenantRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| refreshToken | string | Refresh token<br/>*Example:* `"eyJjdHkiOiJKV1QiLCJlbmMiOiJ.."` | Yes |
| skipTenantCall | boolean | Skip tenant service switch tenant call.<br/>*Example:* `true` | No |
| tenantId | long | Tenant ID<br/>*Example:* `1` | Yes |
| userName | string | Username<br/>*Example:* `"+65-1234-5678"` | Yes |

#### User

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountDeleteReason | string |  | No |
| accountLocked | boolean |  | No |
| bcryptGenerated | boolean |  | No |
| cognitoPassword | string |  | No |
| contact | string |  | No |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| deleted | boolean |  | No |
| department | string |  | No |
| designation | string |  | No |
| email | string |  | No |
| emailVerified | boolean |  | No |
| failedAttempt | integer |  | No |
| firebaseId | string |  | No |
| firstName | string |  | No |
| gdprMigrated | boolean |  | No |
| genderLookUpCode | string |  | No |
| goUser | boolean |  | No |
| iamUser | boolean |  | No |
| id | long |  | No |
| idpUserId | string |  | No |
| isBookkeeper | boolean |  | No |
| isMFAEnabled | boolean |  | No |
| lastName | string |  | No |
| lockTime | dateTime |  | No |
| mfaRecoveryCodes | string |  | No |
| mfaSecretKey | string |  | No |
| mfaType | string | *Enum:* `"EIGHT_DIGIT"`, `"SIX_DIGIT"`, `"ALPHA_NUMERIC"` | No |
| migrated | boolean |  | No |
| password | string |  | No |
| profileUrl | string |  | No |
| pwdGenerated | boolean |  | No |
| shabCryptGenerated | boolean |  | No |
| socialAuth | string |  | No |
| status | string |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |
| userName | string |  | No |
| userNotUpdated | boolean |  | No |

#### UserAttributeUpdateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string | Contact Number<br/>*Example:* `"+6587654556"` | No |
| designation | string | User Title<br/>*Example:* `"Sales Executive"` | No |
| email | string | User email<br/>*Example:* `"jsmith@example.com"` | No |
| firstName | string | User First Name<br/>*Example:* `"John"` | No |
| isBookkeeper | boolean | set if user is bookkeeper<br/>*Example:* `false` | No |
| lastName | string | User Last Name<br/>*Example:* `"Doe"` | No |
| password | string | User Password<br/>*Example:* `"**********"` | No |
| userNotUpdated | boolean |  | No |

#### UserChangePasswordRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| newPassword | string | New valid password<br/>*Example:* `"test#123"` | Yes |
| oldPassword | string | Old valid password<br/>*Example:* `"test@123"` | Yes |

#### UserDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Application name<br/>*Example:* `"ERP"` | Yes |
| authUserId | string | Auth0 User ID<br/>*Example:* `"auth0|5d70ec986e382a0d12a4ff22"` | No |
| contact | string | User contact number<br/>*Example:* `12345678` | No |
| deleted | boolean | Delete Flag<br/>*Example:* `false` | No |
| department | string | User Department<br/>*Example:* `"Finance"` | No |
| designation | string | User Designation<br/>*Example:* `"Accountant"` | No |
| email | string | User email<br/>*Example:* `"jsmith@example.com"` | No |
| emailVerified | boolean |  | No |
| firstName | string | User First Name<br/>*Example:* `"John"` | Yes |
| fullName | string |  | No |
| genderLookUpCode | string | Gender<br/>*Example:* `"Mr."` | No |
| id | long | Primary Key<br/>*Example:* `1` | No |
| lastName | string | User Last Name<br/>*Example:* `"Doe"` | Yes |
| profileUrl | string | User profile image path.<br/>*Example:* `"http://deskera.com/user/myprofile.png"` | No |
| roleGroup | string | Role Group<br/>*Example:* `"admin"` | Yes |
| socialAuth | string | social auth<br/>*Example:* `"auth"` | No |
| source | string | Registration source DESKERA/SHOPIFY<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"Deskera"` | No |
| status | string | Status like Active/ InActive<br/>*Example:* `"active"` | No |
| tenantId | long | Tenant Id<br/>*Example:* `1` | Yes |
| userName | string | Username<br/>*Example:* `"d.6511223344"` | No |

#### UserEmailContactRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string | mobile<br/>*Example:* `"+65122313"` | Yes |
| email | string | email<br/>*Example:* `"abcd@a.com"` | Yes |

#### UserOtpResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string |  | No |
| expiry | dateTime |  | No |
| otp | string |  | No |
| otpType | string | *Enum:* `"LOGIN"`, `"PASSWORD_RESET"`, `"EMAIL_VERIFICATION"`, `"MERGE_ACCOUNTS"`, `"EMAIL_CONTACT_VERIFY_OTP"`, `"EMAIL_CHANGE"` | No |
| session | string |  | No |

#### UserTenantRelCreationRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appUserCreateRequestList | [ [AppUserRolesCreateRequest](#appuserrolescreaterequest) ] | Role in particular app<br/>*Example:* `[{"roleGroup":"admin","appName":"ERP"}]` | No |
| bkPlanDetails | string | Selected plan details if client pays.<br/>*Example:* `"MONTHLY/YEARLY"` | No |
| bkPlanId | string | Selected plan id if client pays.<br/>*Example:* `1234` | No |
| bookkeeperPays | boolean | book keeper team pays or client pays<br/>*Example:* `false` | No |
| contact | string | User Contact Number<br/>*Example:* `12345678` | No |
| createUserInTenant | boolean | Flag to control creation of users in tenant<br/>*Example:* `true` | No |
| emailId | string | Email<br/>*Example:* `"james@bond.com"` | No |
| firstName | string | User First Name<br/>*Example:* `"John"` | No |
| iamUserId | long | IAM app_user id<br/>*Example:* `12` | No |
| inviteUser | boolean |  | No |
| isBookkeeper | boolean | Flag indicate user book keeper<br/>*Example:* `true` | No |
| isEmailVerified | boolean | Email Verification Required <br/>*Example:* `false` | No |
| isGoUser | boolean | Go request to add user to ERP<br/>*Example:* `false` | No |
| isPartner | boolean | Flag indicate partner book keeper<br/>*Example:* `true` | No |
| isTeam | boolean | book keeper team or client<br/>*Example:* `false` | No |
| isUserNotUpdated | boolean | Flag maintain to identify if user is added through invite flow.<br/>*Example:* `false` | No |
| isWebsite | boolean | Flag to indicate signup from website<br/>*Example:* `false` | No |
| lastName | string | User Last Name<br/>*Example:* `"Doe"` | No |
| organizationName | string | Pass organization name if you want to create org without setup<br/>*Example:* `"Deskera"` | No |
| password | string | Password<br/>*Example:* `"**********"` | No |
| shouldSendEmail | boolean | flag to send email or not<br/>*Example:* `true` | No |
| socialAuth | string | Needed, if user is signing up via social login<br/>*Example:* `"GOOGLE"` | No |
| source | string | Registration source DESKERA/SHOPIFY<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"Deskera"` | No |
| tenantId | long | Tenant ID<br/>*Example:* `1` | No |

#### UserTenantRelRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Application name<br/>*Example:* `"ERP"` | No |
| bkPlanDetails | string | Selected plan details if client pays.<br/>*Example:* `"MONTHLY/YEARLY"` | No |
| bkPlanId | string | Selected plan id if client pays.<br/>*Example:* `1234` | No |
| bookkeeperPays | boolean | book keeper team pays or client pays<br/>*Example:* `false` | No |
| contact | string | User Contact Number<br/>*Example:* `12345678` | No |
| createUserInTenant | boolean | Flag to control creation of users in tenant<br/>*Example:* `true` | No |
| emailId | string | Email<br/>*Example:* `"james@bond.com"` | No |
| firstName | string | User First Name<br/>*Example:* `"John"` | No |
| iamUserId | long | IAM app_user id<br/>*Example:* `12` | No |
| inviteCode | string | Invitation Code<br/>*Example:* `"abc-123"` | No |
| inviteUser | boolean |  | No |
| isBookkeeper | boolean | Flag indicate user book keeper<br/>*Example:* `true` | No |
| isEmailVerified | boolean | Email Verification Required <br/>*Example:* `false` | No |
| isGoUser | boolean | Go request to add user to ERP<br/>*Example:* `false` | No |
| isPartner | boolean | Flag indicate partner book keeper<br/>*Example:* `true` | No |
| isTeam | boolean | book keeper team or client<br/>*Example:* `false` | No |
| isUserNotUpdated | boolean | Flag maintain to identify if user is added through invite flow.<br/>*Example:* `false` | No |
| isWebsite | boolean | Flag to indicate signup from website<br/>*Example:* `false` | No |
| lastName | string | User Last Name<br/>*Example:* `"Doe"` | No |
| organizationName | string | Pass organization name if you want to create org without setup<br/>*Example:* `"Deskera"` | No |
| password | string | Password<br/>*Example:* `"**********"` | No |
| peoplePlus | boolean | request origin identifier People or PeoplePlus<br/>*Example:* `true` | No |
| roleGroup | string | Role Group<br/>*Example:* `"admin"` | No |
| shouldSendEmail | boolean | flag to send email or not<br/>*Example:* `true` | No |
| socialAuth | string | Needed, if user is signing up via social login<br/>*Example:* `"GOOGLE"` | No |
| source | string | Registration source DESKERA/SHOPIFY<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"Deskera"` | No |
| tenantId | long | Tenant ID<br/>*Example:* `1` | No |

#### WebSignInRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| inviteCode | string | Invitation Code<br/>*Example:* `"as-1231234-asdhasd"` | No |
| isMobile | boolean | Is Mobile sign in<br/>*Example:* `true` | No |
| password | string | User password<br/>*Example:* `"abcd@123"` | Yes |
| userName | string | Username<br/>*Example:* `"+65-1234-5678"` | Yes |

#### WebSignupRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bkPlanDetails | string | Selected plan details if client pays.<br/>*Example:* `"MONTHLY/YEARLY"` | No |
| bkPlanId | string | Selected plan id if client pays.<br/>*Example:* `1234` | No |
| bookkeeperPays | boolean | book keeper team pays or client pays<br/>*Example:* `false` | No |
| contact | string | User Contact Number<br/>*Example:* `12345678` | No |
| createUserInTenant | boolean | Flag to control creation of users in tenant<br/>*Example:* `true` | No |
| emailId | string | Email<br/>*Example:* `"james@bond.com"` | No |
| firstName | string | User First Name<br/>*Example:* `"John"` | No |
| iamUserId | long | IAM app_user id<br/>*Example:* `12` | No |
| isBookkeeper | boolean | Flag indicate user book keeper<br/>*Example:* `true` | No |
| isEmailVerified | boolean | Email Verification Required <br/>*Example:* `false` | No |
| isGoUser | boolean | Go request to add user to ERP<br/>*Example:* `false` | No |
| isPartner | boolean | Flag indicate partner book keeper<br/>*Example:* `true` | No |
| isTeam | boolean | book keeper team or client<br/>*Example:* `false` | No |
| isUserNotUpdated | boolean | Flag maintain to identify if user is added through invite flow.<br/>*Example:* `false` | No |
| isWebsite | boolean | Flag to indicate signup from website<br/>*Example:* `false` | No |
| lastName | string | User Last Name<br/>*Example:* `"Doe"` | No |
| organizationName | string | Pass organization name if you want to create org without setup<br/>*Example:* `"Deskera"` | No |
| password | string | Password<br/>*Example:* `"**********"` | No |
| shouldSendEmail | boolean | flag to send email or not<br/>*Example:* `true` | No |
| socialAuth | string | Needed, if user is signing up via social login<br/>*Example:* `"GOOGLE"` | No |
| source | string | Registration source DESKERA/SHOPIFY<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"Deskera"` | No |

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