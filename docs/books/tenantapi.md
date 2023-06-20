---
id: tenantapi
title: Company APIs
sidebar_label: Company
---

More about [Company API](https://www.postman.com/grey-meadow-1395/workspace/deskera/folder/8538637-db7ba720-5f1a-4e8f-a933-f3e5ec892667)

# Deskera - Company Management

### /auth/apisid/{apisid}

#### GET
##### Summary

APISID API

##### Description

APISID API

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| apisid | path | apisid | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | APISID successful | boolean |
| 400 | APISID failed |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /auth/checkcontact

#### POST
##### Summary

check if Phone number exists in Platform

##### Description

API to check if Phone number exists in Platform

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| contactCheckRequest | body | contactCheckRequest | Yes | [ContactCheckRequest](#contactcheckrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact | [TenantInfo](#tenantinfo) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | API failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /auth/confirmforgotpassword

#### POST
##### Summary

Confirm forgot password

##### Description

Confirm forgot password

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| confirmForgotPassRequest | body | confirmForgotPassRequest | Yes | [ConfirmForgotPassRequest](#confirmforgotpassrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | User has set new password successfully. |
| 201 | Created |
| 400 | User's new password request failed. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | User's new password request failed. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /auth/email/verify

#### PUT
##### Summary

/email/verify

##### Description

Email verification API

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userDto | body | userDto | Yes | [UserDto](#userdto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Email has been verified successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | The Confirmation link is invalid. Please generate a new confirmation link. |
| 410 | Email Token has been expired. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /auth/forgotpassword

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

### /auth/getnewtokens

#### POST
##### Summary

Get new tokens in case existing is expired

##### Description

Get new tokens in case existing is expired

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| newTokenRequest | body | newTokenRequest | Yes | [NewTokenRequest](#newtokenrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Confirmation code has been sent successfully. | [AuthenticationResultType](#authenticationresulttype) |
| 201 | Created |  |
| 400 | Failed to initiate sign in confirmation code. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to initiate sign in confirmation code. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /auth/getrefreshtoken

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
| 200 | Confirmation code has been sent successfully. | [AuthenticationResultType](#authenticationresulttype) |
| 201 | Created |  |
| 400 | Failed to initiate sign in confirmation code. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to initiate sign in confirmation code. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /auth/mobilesignin

#### POST
##### Summary

Signin API to receive verification code and session

##### Description

Signin API to receive verification code and session

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| mobileSignInRequest | body | mobileSignInRequest | Yes | [MobileSignInRequest](#mobilesigninrequest) |

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

### /auth/mobilesignup

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

### /auth/mobileverifysignin

#### POST
##### Summary

Verify Api to get token against verification code

##### Description

Verify Api to get token against verification code

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| MobileVerifySignInRequest | body | MobileVerifySignInRequest | Yes | [MobileVerifySignInRequest](#mobileverifysigninrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Confirmation code has been sent successfully. | [AuthenticationResultType](#authenticationresulttype) |
| 201 | Created |  |
| 400 | Failed to initiate sign in confirmation code. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to initiate sign in confirmation code. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /auth/sso/verify

#### POST
##### Summary

Verify SSO APISID

##### Description

API to verify SSO APISID

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ssoVerifyRequest | body | ssoVerifyRequest | Yes | [SsoVerifyRequest](#ssoverifyrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TenantInfo](#tenantinfo) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | APISID invalid |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /auth/subscription/cancel

#### GET
##### Summary

Cancel subscription

##### Description

API to cancel subscription.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| token | query | token | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Request to cancel subscription successful. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /auth/websignin

#### POST
##### Summary

Login API to receive token with username and password

##### Description

Login API to receive token with username and password

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| webSignInRequest | body | webSignInRequest | Yes | [WebSignInRequest](#websigninrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Login done successfully. | [AuthenticationResultType](#authenticationresulttype) |
| 201 | Created |  |
| 400 | Failed to login with given credentials. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to login with given credentials. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /auth/websignup

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

---
## open-api-controller
Utility API

### /auth/active-users

#### GET
##### Summary

Active users count

##### Description

API to provide active users count

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Active user count has been provided. | object |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## email-verification-controller
User email verification

### /auth/email/regenerate

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

### /auth/email/verification

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
## google-auth-controller
Auth user from google

### /auth/google/gwebsignin

#### POST
##### Summary

User SignIn from Google

##### Description

API to authenticate and login a user.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| authAppUserSignInRequest | body | authAppUserSignInRequest | Yes | [AuthApplicationCreateRequest](#authapplicationcreaterequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User sign in successfully. | [AuthenticationResultType](#authenticationresulttype) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /auth/google/gwebsignup

#### POST
##### Summary

User SignUp from Google

##### Description

API to authenticate and create a user.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| authAppUserCreateRequest | body | authAppUserCreateRequest | Yes | [AuthApplicationCreateRequest](#authapplicationcreaterequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [UserDto](#userdto) |
| 201 | Authenticate User has been created successfully. | [UserDto](#userdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 409 | User with same username is already exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## token-controller
Refresh token for social auth user

### /auth/token

#### POST
##### Summary

Refresh token for social auth user

##### Description

API to create a new refresh token for social auth user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| authApplicationCreateRequest | body | authApplicationCreateRequest | Yes | [AuthApplicationCreateRequest](#authapplicationcreaterequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Refresh token created successfully. | [AuthenticationResultType](#authenticationresulttype) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## internal-demo-org-controller
Internal Demo Org Controller

### /internal-demo-org/demo-org

#### POST
##### Summary

Create demo organization

##### Description

API to create demo organization

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| country | query | country | No | string |
| tenantRequest | body | tenantRequest | Yes | [TenantRequest](#tenantrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal-demo-org/tenantNames

#### POST
##### Summary

getAllTenantNames

##### Description

List of tenant names for list of tenantids

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tenantIds | body | tenantIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Successfully fetched all tenant names | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failure fetching tenant names |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## internal-tenant-details-controller
API for internal components to get Tenant details

### /internal/tenant/details/country/{countryCode}

#### GET
##### Summary

Get tenant get by country code.

##### Description

API to get tenant information by country code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| countryCode | path | countryCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information by country code has been fetched successfully. | object |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant with same name is already registered. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenant/details/{id}

#### GET
##### Summary

API for internal components to get Tenant details

##### Description

API to get Tenant details without tenant token and only for use internally

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant details fetched successfully | [TenantInfo](#tenantinfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Failed to get tenant details |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## internal-token-controller
API to create a HPA token for a given tenant

### /internal/tenant/hpa/token

#### GET
##### Summary

API to create a HPA token for a given tenant

##### Description

Generate a HPA token for a given tenant, but is not updated in cognito

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tenantId | query | tenantId | Yes | long |
| userId | query | userId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | HPA token created successfully | [AuthenticationResultType](#authenticationresulttype) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Failed to create token |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## internal-user-controller
User Management

### /internal/tenants/users/assign/crm_plus

#### POST
##### Summary

Add user's roles for crm_plus app

##### Description

Add user's roles for crm_plus app

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| emails | body | emails | Yes | [ string ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users has been added to crm plus successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/change-email

#### PATCH
##### Summary

Change user email

##### Description

Api to change user email

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| emailChangeDto | body | emailChangeDto | Yes | [EmailChangeDto](#emailchangedto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Encryption Success | [AppUserBasicInfoDto](#appuserbasicinfodto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/change-name

#### PATCH
##### Summary

change name of user

##### Description

Api to change name of user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| changeNameDto | body | changeNameDto | Yes | [ChangeNameDto](#changenamedto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | successfully modified the name | [AppUserBasicInfoDto](#appuserbasicinfodto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/decrypt

#### POST
##### Summary

Get decrypted text

##### Description

Api to get decrypted values of strings

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| encryptedStrings | body | encryptedStrings | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Decryption Success | [ string ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/delete-roles

#### DELETE
##### Summary

Delete user roles from cron

##### Description

Delete user roles from cron

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | User roles cleared successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/domain

#### POST
##### Summary

Extract domain from email id

##### Description

Api to extract domain from email id

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Domains extracted successfully |
| 201 | Created |
| 401 | Failed to extract users |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/encrypt

#### GET
##### Summary

run encryption on app user info

##### Description

run encryption on app user info

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Encryption Success |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Get encrypted text

##### Description

Api to get encrypted values of strings

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| plainStrings | body | plainStrings | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Encryption Success | [ string ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/encrypt-app-invite

#### GET
##### Summary

run encryption on app_invite info

##### Description

run encryption on app_invite info

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Encryption Success |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/encrypt-bookkeeper-client-invite

#### GET
##### Summary

run encryption on bookkeeper_client_invite

##### Description

run encryption on bookkeeper_client_invite

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Encryption Success |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/encrypt_tenant

#### GET
##### Summary

encrypt tenant in user_tenant_mapping_basic_info

##### Description

encrypt tenant in user_tenant_mapping_basic_info

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| size | query | size | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | encryption of tenant data in user_tenant_mapping_basic_info has been done successfully |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/findAllByEmailContainingIgnoreCase/{email}

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
| 200 | Users found with the given email | [ [BookkeeperClientInvite](#bookkeeperclientinvite) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/findAllByEmailContainingIgnoreCaseAndStatusAndIsBookkeeperFalseAndDeletedFalse/{email}/{status}

#### GET
##### Summary

Find by email containing ignored case and status

##### Description

Find by email containing ignored case and status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| email | path | email | Yes | string |
| status | path | status | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User found with the given email and status | [ [BookkeeperClientInvite](#bookkeeperclientinvite) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/findAllByEmailIgnoreCaseAndUserTenantMappingAndDeletedFalse/{email}{userTenantMapping}

#### GET
##### Summary

Find by email ignored case and user tenant mapping

##### Description

Find by email ignored case and user tenant mapping

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| email | path | email | Yes | string |
| userTenantMapping | path | userTenantMapping | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Users found with the given email | [ [BookkeeperClientInvite](#bookkeeperclientinvite) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/findByEmailContainingIgnoreCase/{email}

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
| 200 | User found by email | [ [User](#user) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/findByEmailIgnoreCase/{email}

#### GET
##### Summary

Find one by email ignore case

##### Description

Find one by email ignore case

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| email | path | email | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User found by email | [User](#user) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/findByEmailIgnoreCaseAndTenantId/{email}/{tenantId}

#### GET
##### Summary

Find by email and tenant id

##### Description

Find by email and tenant id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| email | path | email | Yes | string |
| tenantId | path | tenantId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User found by email | [AppInvite](#appinvite) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/findByEmailIgnoreCaseAndTenantIdAndDeletedFalse/{email}{tenantId}

#### GET
##### Summary

Find by email ignored case and tenant id

##### Description

Find by email ignored case and tenant id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| email | path | email | Yes | string |
| tenantId | path | tenantId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User found with the given email and tenant id | [BookkeeperClientInvite](#bookkeeperclientinvite) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/findByIdAndEmailContainingIgnoreCaseAndDeletedFalse/{id}/{email}

#### GET
##### Summary

Find by id and email containing ignored case

##### Description

Find by id and email containing ignored case

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| email | path | email | Yes | string |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User found with the given id and email | [BookkeeperClientInvite](#bookkeeperclientinvite) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/firstname-index

#### GET
##### Summary

Api to check & create first name sort index

##### Description

Api to check & create first name sort index

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| num | query | num | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | first name sort index created | string |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/get-users

#### POST
##### Summary

Get users by tenant id

##### Description

Api to get users by tenant id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tenantIds | body | tenantIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Users fetched successfully | [ [UserShortInfo](#usershortinfo) ] |
| 201 | Created |  |
| 401 | Failed to fetch users |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/getByIamUserIdsBasic

#### POST
##### Summary

Get user by id.

##### Description

API to get user information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| iamUserIds | body | iamUserIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User information has been fetched successfully. | [AppUserResponseInfo](#appuserresponseinfo) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | User does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/getiamid

#### GET
##### Summary

Get user by id.

##### Description

API to get user information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tenantId | query | tenantId | Yes | long |
| userId | query | userId | Yes | long |

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

### /internal/tenants/users/iam

#### POST
##### Summary

Get user by id.

##### Description

API to get user information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| iamUserIds | body | iamUserIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User information has been fetched successfully. | [AppUserResponseInfo](#appuserresponseinfo) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | User does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/iam/{id}

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

#### DELETE
##### Summary

Deleted iam user mapping

##### Description

Api to ackowledge deleted iam user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | User deleted |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/ids

#### POST
##### Summary

Get user by id.

##### Description

API to get user information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User information has been fetched successfully. | [UserDto](#userdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | User does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/index

#### POST
##### Summary

Update sort column for users

##### Description

Update sort column for users

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| erpTenantIds | body | erpTenantIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | No users found | string |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/refresh-roles-modules

#### POST
##### Summary

Refresh the roles and permissions of the user

##### Description

Refresh the roles and permissions of the user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| refreshRolesModulesRequest | body | refreshRolesModulesRequest | Yes | [RefreshRolesModulesRequest](#refreshrolesmodulesrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User updated successfully | [RefreshRolesModulesResponse](#refreshrolesmodulesresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to update roles and modules |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/set-contact-email

#### PATCH
##### Summary

Change user contact/email

##### Description

Api to change user contact/email

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| setContactEmailDto | body | setContactEmailDto | Yes | [SetContactEmailDto](#setcontactemaildto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Encryption Success | [AppUserBasicInfoDto](#appuserbasicinfodto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/tenant-delete/{id}

#### DELETE
##### Summary

Delete the tenant

##### Description

Delete the tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant deleted successfully | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/tenant-reset

#### DELETE
##### Summary

Reset the tenant

##### Description

Reset the tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant reset successfully | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/tenantId/{tenantId}/app/{app}/role_group/{roleGroup}

#### GET
##### Summary

Get iamUserId for app and roleGroup

##### Description

Get iamUserId for app and roleGroup

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| app | path | app | Yes | string |
| roleGroup | path | roleGroup | Yes | string |
| tenantId | path | tenantId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | IamUserId for app and roleGroup has been fetched successfully. | long |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /internal/tenants/users/utmbi

#### GET
##### Summary

insert decrypted data in user_tenant_mapping_basic_info

##### Description

insert decrypted data in user_tenant_mapping_basic_info

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| size | query | size | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | decrypted data in user_tenant_mapping_basic_info has been done successfully |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## role-group-controller
Role Group Management

### /v1/rolegroups

#### GET
##### Summary

Get Role Groups

##### Description

API to get role groups

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Role Group information has been fetched successfully. | [RoleGroupDto](#rolegroupdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create Role Groups

##### Description

API to create role groups

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| roleGroupCreateReq | body | roleGroupCreateReq | Yes | [RoleGroupCreateRequestDto](#rolegroupcreaterequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [RoleGroupDto](#rolegroupdto) |
| 201 | Role information has been created successfully. | [RoleGroupDto](#rolegroupdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Role Groups

##### Description

API to delete role groups

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| roleGroupDeleteReq | body | roleGroupDeleteReq | Yes | [RoleGroupDeleteRequestDto](#rolegroupdeleterequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Role information has been deleted successfully. | [RoleGroupDto](#rolegroupdto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update Role Groups

##### Description

API to update role groups

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| roleGroupCreateReq | body | roleGroupCreateReq | Yes | [RoleGroupCreateRequestDto](#rolegroupcreaterequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Role information has been updated successfully. | [RoleGroupDto](#rolegroupdto) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/rolegroups/get/roles

#### GET
##### Summary

Get Role Groups

##### Description

API to get role groups

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Role information has been fetched successfully. | [UserDto](#userdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/rolegroups/{appName}

#### GET
##### Summary

Get role group by code.

##### Description

API to get role group by code.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| appName | path | appName | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Role information has been fetched successfully. | [UserDto](#userdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Role group does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## tenant-controller
Tenant APIs

### /v1/tenants/**

#### PATCH
##### Summary

Update tenant attributes.

##### Description

API to update attributes of existing tenant.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [TenantAttributeRequest](#tenantattributerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant attributes has been updated successfully. | [TenantInfo](#tenantinfo) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/affiliate/organisation

#### POST
##### Summary

Organization Setup by an affiliate user

##### Description

API to setup organization by an affiliate user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequest | body | orgSignUpRequest | Yes | [OrgSignUpRequest](#orgsignuprequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup by an affiliate user has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup by an affiliate user |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/apps-customization

#### GET
##### Summary

Get Apps Customization details

##### Description

API to get Apps Customization details

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Request to get App Customization details successful. | [AppsCustomizationResponseDto](#appscustomizationresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to get App Customization details. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Save User preferences for App customization

##### Description

Save User preferences for App customization

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| appsCustomizationRequestDto | body | appsCustomizationRequestDto | Yes | [AppsCustomizationRequestDto](#appscustomizationrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | App Customization Preferences has been saved successfully. | [AppsCustomizationResponseDto](#appscustomizationresponsedto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failure in saving app customization |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update customization setting.

##### Description

API to update customization setting of existing tenant.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| appsCustomizationRequestDto | body | appsCustomizationRequestDto | Yes | [AppsCustomizationRequestDto](#appscustomizationrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Customization setting has been updated successfully. | [TenantInfo](#tenantinfo) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/bktenantId/{id}

#### GET
##### Summary

Get Book Keeper tenant by id.

##### Description

API to get book keeper tenant information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Book Keeper Tenant information has been fetched successfully. | [TenantInfo](#tenantinfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Book Keeper Tenant or User not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/bookkeeper/client

#### POST
##### Summary

Bookkeeper client setup

##### Description

API to setup Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequest](#bookkeeperclientrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Bookkeeper client setup success | [SignUpResponse](#signupresponse) |
| 400 | Bookkeeper client setup fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Bookkeeper client update

##### Description

API to update Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequest](#bookkeeperclientrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bookkeeper client update success | [TenantInfo](#tenantinfo) |
| 201 | Created |  |
| 400 | Bookkeeper client update fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/books/subscription

#### GET
##### Summary

Get Books subscription details

##### Description

API to get subscription details for a tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Request to get subscription details successful. | [TenantBooksSubscriptionDetails](#tenantbookssubscriptiondetails) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to get Books subscription details. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/contact-info

#### GET
##### Summary

Get Company's contact info

##### Description

API to get Company's contact info

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact info fetched successfully | [TenantInfo](#tenantinfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact info not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update Company's contact info

##### Description

API to update Company's contact info

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [TenantContact](#tenantcontact) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Contact info updated successfully | [TenantInfo](#tenantinfo) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Contact info update failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/demo-organization

#### POST
##### Summary

Create demo organization

##### Description

API to create demo organization

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| country | query | country | No | string |
| tenantRequest | body | tenantRequest | Yes | [TenantRequest](#tenantrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/details

#### GET
##### Summary

Get tenant details of logged in user.

##### Description

API to get tenant information of logged in user.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfo](#tenantinfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/get-tenants-by-nature

#### GET
##### Summary

Get Tenants by nature.

##### Description

Get Tenants by nature.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| nature | query | nature | Yes | string |
| tenantId | query | tenantId | No | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User tenant list fetched successfully | [ [TenantShortInfo](#tenantshortinfo) ] |
| 400 | Get Tenants by nature. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/iamuser

#### POST
##### Summary

Add an IAM user to a tenant

##### Description

Add an IAM user to a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userTenantRelRequest | body | userTenantRelRequest | Yes | [UserTenantRelRequest](#usertenantrelrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | IAM User added to a tenant successfully! | [UserDto](#userdto) |
| 201 | Created |  |
| 400 | IAM User addition to tenant failed! |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/iamuser/bulk

#### POST
##### Summary

Create user in bulk.

##### Description

Api to create users in bulk

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| requests | body | requests | Yes | [ [UserTenantRelRequest](#usertenantrelrequest) ] |

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

### /v1/tenants/**/iamuser/bulkasync

#### POST
##### Summary

Create user in bulk.

##### Description

Api to create users in bulk

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| requests | body | requests | Yes | [ [UserTenantRelRequest](#usertenantrelrequest) ] |

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

### /v1/tenants/**/iamuser/{iamUserId}

#### GET
##### Summary

Get tenant by id.

##### Description

API to get tenant information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| iamUserId | path | iamUserId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant User information has been fetched successfully. | [TenantInfo](#tenantinfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant User not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/inviteduser

#### POST
##### Summary

Add an IAM user to a tenant

##### Description

Add an IAM user to a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userTenantRelRequest | body | userTenantRelRequest | Yes | [UserTenantRelRequest](#usertenantrelrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | IAM User added to a tenant successfully! | [UserDto](#userdto) |
| 201 | Created |  |
| 400 | IAM User addition to tenant failed! |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/logout

#### GET
##### Summary

Log out

##### Description

Log out API

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Logged out successfully | boolean |
| 400 | Log out failed |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/logout2

#### GET
##### Summary

Log out

##### Description

Log out API

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Logged out successfully | boolean |
| 400 | Log out failed |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/mobilesignup

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

### /v1/tenants/**/nexus-states

#### POST
##### Summary

Get Tenant Info by id.

##### Description

API to get Tenant Info by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tenantIds | body | tenantIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant Info has been fetched successfully. | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Organization or Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/organisation

#### POST
##### Summary

Organization Setup

##### Description

API to setup organization

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequest | body | orgSignUpRequest | Yes | [OrgSignUpRequest](#orgsignuprequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Complete organization setup

##### Description

API to complete organization setup

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequest | body | orgSignUpRequest | Yes | [OrgSignUpRequest](#orgsignuprequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been completed successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/organisation/country/update

#### PATCH
##### Summary

API to country of Tenant from People

##### Description

API to country of Tenant from People

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tenantCountryDto | body | tenantCountryDto | Yes | [TenantCountryDto](#tenantcountrydto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Updated Tenant country and currency successfully | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to update Tenant country and currency from. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/organisationwithoutsetup

#### POST
##### Summary

Create organization without setup

##### Description

API to create organization without setup

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tenantRequest | body | tenantRequest | Yes | [TenantRequest](#tenantrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/organization/settings

#### GET
##### Summary

Get Organization settings

##### Description

Get Organization settings

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Organization settings have been fetched successfully. | [OrganizationSettings](#organizationsettings) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Organization not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/owner

#### GET
##### Summary

owner user

##### Description

Api to find owner name of user

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | successfully fetched the name | [OwnerInfoDto](#ownerinfodto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/reset

#### DELETE
##### Summary

Reset Tenant

##### Description

Api to reset Tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant reset successfully. | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to reset Tenant. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/roles/iamuser

#### POST
***DEPRECATED***
##### Summary

Add an IAM user to a tenant

##### Description

Add an IAM user to a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userTenantRelCreationRequest | body | userTenantRelCreationRequest | Yes | [UserTenantRelCreationRequest](#usertenantrelcreationrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | IAM User added to a tenant successfully! | [UserDto](#userdto) |
| 201 | Created |  |
| 400 | IAM User addition to tenant failed! |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/roles/module/iamuser

#### POST
##### Summary

Add an IAM user to a tenant

##### Description

Add an IAM user to a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userTenantRelCreationRequest | body | userTenantRelCreationRequest | Yes | [UserTenantRelCreationRequest](#usertenantrelcreationrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | IAM User added to a tenant successfully! | [UserDto](#userdto) |
| 201 | Created |  |
| 400 | IAM User addition to tenant failed! |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/setup/status

#### GET
##### Summary

Get Organization setup status

##### Description

Get Organization setup status

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Organization setup information has been fetched successfully. | [OrganizationSetupStatusResponse](#organizationsetupstatusresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Organization not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Save Organization setup status

##### Description

Save Organization setup status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| organizationSetupStatus | body | organizationSetupStatus | Yes | [OrganizationSetupStatusResponse](#organizationsetupstatusresponse) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Organization setup information has been saved successfully. | [ResponseEntity](#responseentity) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Organization not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Update Organization setup status

##### Description

Update Organization setup status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| organizationSetupRequestDto | body | organizationSetupRequestDto | Yes | [OrganizationSetupStatusResponse](#organizationsetupstatusresponse) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Organization setup information has been updated successfully. | [TenantInfo](#tenantinfo) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Organization not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/tenant/{tenantId}/user/{userId}/switch

#### POST
##### Summary

Switch tenant for a loggedin user

##### Description

Switch tenant for a loggedin user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tenantId | path | tenantId | Yes | long |
| userId | path | userId | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Tenant switched successfully |
| 201 | Created |
| 400 | Failed to switch tenant |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | User not found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/update-login-info

#### PUT
##### Summary

Update IP Address after user signin

##### Description

API to update IP Address after user signin

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| user | body | user | Yes | [UserLastLoginInfo](#userlastlogininfo) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | User IP Address updated successfully |
| 201 | Created |
| 400 | User IP Address update failed |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/user/{userId}/tenantinfo

#### GET
##### Summary

Get tenant by id.

##### Description

API to get tenant information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userId | path | userId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfo](#tenantinfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/user/{userId}/tenants-info

#### GET
##### Summary

Get all tenants information for user

##### Description

API to get get all tenants information for user.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userId | path | userId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [ [TenantInfo](#tenantinfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/users

#### POST
##### Summary

API to bulk add users to current tenant

##### Description

API to bulk add users to current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users added successfully |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users assignment to tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to bulk remove users from current tenant

##### Description

API to bulk remove users from current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users removed successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users removal from tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/verify

#### POST
##### Summary

Tenant verification

##### Description

API to verify a tenant after successful sign up.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| oAuthAccountVerifyRequest | body | oAuthAccountVerifyRequest | Yes | [OAuthAccountVerifyRequest](#oauthaccountverifyrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Tenant has been verified successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Either Tenant or Recovery token is no longer valid. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/**/{id}

#### GET
##### Summary

Get tenant by id.

##### Description

API to get tenant information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfo](#tenantinfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant with same name is already registered. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update tenant information

##### Description

API to update a tenant information.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| tenantInfo | body | tenantInfo | Yes | [TenantInfo](#tenantinfo) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been updated successfully. | [TenantInfo](#tenantinfo) |
| 201 | Created |  |
| 400 | Tenant with same name is already registered. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to delete tenant

##### Description

API to delete tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant has been deleted successfully | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant deletion failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## system-admin-controller
System Admin Controller

### /v1/tenants/**/system/search

#### GET
##### Summary

tenantSearch

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Fetched tenant list. | [Page«TenantInformation»](#page«tenantinformation») |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## tenant-controller-uae
UAE specific Tenant APIs

### /v1/tenants/ae

#### PATCH
##### Summary

Update tenant attributes.

##### Description

API to update attributes of existing tenant.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [TenantAttributeRequest](#tenantattributerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant attributes has been updated successfully. | [TenantInfoUAE](#tenantinfouae) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ae/affiliate/organisation

#### POST
##### Summary

Organization Setup by an affiliate user

##### Description

API to setup organization by an affiliate user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestUAE | body | orgSignUpRequestUAE | Yes | [OrgSignUpRequestUAE](#orgsignuprequestuae) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup by an affiliate user has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup by an affiliate user |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ae/bookkeeper/client

#### POST
##### Summary

Bookkeeper client setup

##### Description

API to setup Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestUAE](#bookkeeperclientrequestuae) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Bookkeeper client setup success | [SignUpResponse](#signupresponse) |
| 400 | Bookkeeper client setup fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Bookkeeper client update

##### Description

API to update Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestUAE](#bookkeeperclientrequestuae) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bookkeeper client update success | [TenantInfoUAE](#tenantinfouae) |
| 201 | Created |  |
| 400 | Bookkeeper client update fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ae/details

#### GET
##### Summary

Get tenant details of logged in user.

##### Description

API to get tenant information of logged in user.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoUAE](#tenantinfouae) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ae/organisation

#### POST
##### Summary

Organization Setup

##### Description

API to setup organization

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestUAE | body | orgSignUpRequestUAE | Yes | [OrgSignUpRequestUAE](#orgsignuprequestuae) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Complete organization setup

##### Description

API to complete organization setup

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestUAE | body | orgSignUpRequestUAE | Yes | [OrgSignUpRequestUAE](#orgsignuprequestuae) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been completed successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ae/reset

#### DELETE
##### Summary

Reset Tenant

##### Description

Api to reset Tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant reset successfully. | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to reset Tenant. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ae/users

#### POST
##### Summary

API to bulk add users to current tenant

##### Description

API to bulk add users to current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users added successfully |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users assignment to tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to bulk remove users from current tenant

##### Description

API to bulk remove users from current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users removed successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users removal from tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ae/verify

#### POST
##### Summary

Tenant verification

##### Description

API to verify a tenant after successful sign up.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| oAuthAccountVerifyRequest | body | oAuthAccountVerifyRequest | Yes | [OAuthAccountVerifyRequest](#oauthaccountverifyrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Tenant has been verified successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Either Tenant or Recovery token is no longer valid. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ae/{id}

#### GET
##### Summary

Get tenant by id.

##### Description

API to get tenant information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoUAE](#tenantinfouae) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant with same name is already registered. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update tenant information

##### Description

API to update a tenant information.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| tenantInfoUAE | body | tenantInfoUAE | Yes | [TenantInfoUAE](#tenantinfouae) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been updated successfully. | [TenantInfoUAE](#tenantinfouae) |
| 201 | Created |  |
| 400 | Tenant with same name is already registered. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to delete tenant

##### Description

API to delete tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant has been deleted successfully | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant deletion failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## tenant-controller-australia
Australia specific Tenant APIs

### /v1/tenants/au

#### PATCH
##### Summary

Update tenant attributes.

##### Description

API to update attributes of existing tenant.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [TenantAttributeRequest](#tenantattributerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant attributes has been updated successfully. | [TenantInfoAustralia](#tenantinfoaustralia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/au/affiliate/organisation

#### POST
##### Summary

Organization Setup by an affiliate user

##### Description

API to setup organization by an affiliate user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestAustralia | body | orgSignUpRequestAustralia | Yes | [OrgSignUpRequestAustralia](#orgsignuprequestaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup by an affiliate user has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup by an affiliate user |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/au/bookkeeper/client

#### POST
##### Summary

Bookkeeper client setup

##### Description

API to setup Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestAustralia](#bookkeeperclientrequestaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Bookkeeper client setup success | [SignUpResponse](#signupresponse) |
| 400 | Bookkeeper client setup fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Bookkeeper client update

##### Description

API to update Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestAustralia](#bookkeeperclientrequestaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bookkeeper client update success | [TenantInfoAustralia](#tenantinfoaustralia) |
| 201 | Created |  |
| 400 | Bookkeeper client update fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/au/details

#### GET
##### Summary

Get tenant details of logged in user.

##### Description

API to get tenant information of logged in user.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoAustralia](#tenantinfoaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/au/organisation

#### POST
##### Summary

Organization Setup

##### Description

API to setup organization

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestAustralia | body | orgSignUpRequestAustralia | Yes | [OrgSignUpRequestAustralia](#orgsignuprequestaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Complete organization setup

##### Description

API to complete organization setup

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequest | body | orgSignUpRequest | Yes | [OrgSignUpRequestAustralia](#orgsignuprequestaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been completed successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/au/reset

#### DELETE
##### Summary

Reset Tenant

##### Description

Api to reset Tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant reset successfully. | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to reset Tenant. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/au/users

#### POST
##### Summary

API to bulk add users to current tenant

##### Description

API to bulk add users to current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users added successfully |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users assignment to tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to bulk remove users from current tenant

##### Description

API to bulk remove users from current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users removed successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users removal from tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/au/verify

#### POST
##### Summary

Tenant verification

##### Description

API to verify a tenant after successful sign up.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| oAuthAccountVerifyRequest | body | oAuthAccountVerifyRequest | Yes | [OAuthAccountVerifyRequest](#oauthaccountverifyrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Tenant has been verified successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Either Tenant or Recovery token is no longer valid. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/au/{id}

#### GET
##### Summary

Get tenant by id.

##### Description

API to get tenant information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoAustralia](#tenantinfoaustralia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant with same name is already registered. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update tenant information

##### Description

API to update a tenant information.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| tenantInfoAustralia | body | tenantInfoAustralia | Yes | [TenantInfoAustralia](#tenantinfoaustralia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been updated successfully. | [TenantInfoAustralia](#tenantinfoaustralia) |
| 201 | Created |  |
| 400 | Tenant with same name is already registered. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to delete tenant

##### Description

API to delete tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant has been deleted successfully | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant deletion failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## tenant-controller-belgium
Belgium specific Tenant APIs

### /v1/tenants/be

#### PATCH
##### Summary

Update tenant attributes.

##### Description

API to update attributes of existing tenant.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [TenantAttributeRequest](#tenantattributerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant attributes has been updated successfully. | [TenantInfoBelgium](#tenantinfobelgium) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/be/affiliate/organisation

#### POST
##### Summary

Organization Setup by an affiliate user

##### Description

API to setup organization by an affiliate user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestBelgium | body | orgSignUpRequestBelgium | Yes | [OrgSignUpRequestBelgium](#orgsignuprequestbelgium) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup by an affiliate user has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup by an affiliate user |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/be/bookkeeper/client

#### POST
##### Summary

Bookkeeper client setup

##### Description

API to setup Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestBelgium](#bookkeeperclientrequestbelgium) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Bookkeeper client setup success | [SignUpResponse](#signupresponse) |
| 400 | Bookkeeper client setup fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Bookkeeper client update

##### Description

API to update Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestBelgium](#bookkeeperclientrequestbelgium) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bookkeeper client update success | [TenantInfoBelgium](#tenantinfobelgium) |
| 201 | Created |  |
| 400 | Bookkeeper client update fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/be/details

#### GET
##### Summary

Get tenant details of logged in user.

##### Description

API to get tenant information of logged in user.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoBelgium](#tenantinfobelgium) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/be/organisation

#### POST
##### Summary

Organization Setup

##### Description

API to setup organization

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestBelgium | body | orgSignUpRequestBelgium | Yes | [OrgSignUpRequestBelgium](#orgsignuprequestbelgium) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Complete organization setup

##### Description

API to complete organization setup

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequest | body | orgSignUpRequest | Yes | [OrgSignUpRequestBelgium](#orgsignuprequestbelgium) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been completed successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/be/reset

#### DELETE
##### Summary

Reset Tenant

##### Description

Api to reset Tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant reset successfully. | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to reset Tenant. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/be/users

#### POST
##### Summary

API to bulk add users to current tenant

##### Description

API to bulk add users to current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users added successfully |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users assignment to tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to bulk remove users from current tenant

##### Description

API to bulk remove users from current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users removed successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users removal from tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/be/verify

#### POST
##### Summary

Tenant verification

##### Description

API to verify a tenant after successful sign up.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| oAuthAccountVerifyRequest | body | oAuthAccountVerifyRequest | Yes | [OAuthAccountVerifyRequest](#oauthaccountverifyrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Tenant has been verified successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Either Tenant or Recovery token is no longer valid. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/be/{id}

#### GET
##### Summary

Get tenant by id.

##### Description

API to get tenant information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoBelgium](#tenantinfobelgium) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant with same name is already registered. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update tenant information

##### Description

API to update a tenant information.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| tenantInfoBelgium | body | tenantInfoBelgium | Yes | [TenantInfoBelgium](#tenantinfobelgium) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been updated successfully. | [TenantInfoBelgium](#tenantinfobelgium) |
| 201 | Created |  |
| 400 | Tenant with same name is already registered. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to delete tenant

##### Description

API to delete tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant has been deleted successfully | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant deletion failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## bookkeeper-controller
Bookkeeper API

### /v1/tenants/bookkeeper

#### GET
##### Summary

Get Bookkeepers

##### Description

API to get bookkeeper

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |
| type | query | type | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bookkeepers information has been fetched successfully. | [BookkeeperTeamInfo](#bookkeeperteaminfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Bookkeeper team user creation

##### Description

API to create a user.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| manageClient | query | manageClient | No | boolean |
| userTenantTeamRequest | body | userTenantTeamRequest | Yes | [UserTenantTeamRequest](#usertenantteamrequest) |

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

#### PUT
##### Summary

Bookkeeper team user updation.

##### Description

API to update a bookkeeper team user.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| manageClient | query | manageClient | No | boolean |
| userTenantTeamRequest | body | userTenantTeamRequest | Yes | [UserTenantTeamRequest](#usertenantteamrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [UserDto](#userdto) |
| 201 | User email has been updated successfully. | [UserDto](#userdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/bookkeeper/add-existing-user-to-team

#### POST
##### Summary

Add existing user to Bookkeeper Team API

##### Description

Add existing user to Bookkeeper Team API Note

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userId | query | userId | No | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | User email has been updated successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/bookkeeper/add-team-on-invite

#### PUT
##### Summary

Bookkeeper Client Mapping on client's invite.

##### Description

API for Bookkeeper Client Mapping on client's invite

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| clientInviteId | query | clientInviteId | No | long |
| tenantId | query | tenantId | No | long |
| userId | query | userId | No | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BookkeeperTeam](#bookkeeperteam) |
| 201 | User email has been updated successfully. | [BookkeeperTeam](#bookkeeperteam) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/bookkeeper/client-status

#### PUT
##### Summary

Bookkeeper client user updation.

##### Description

Toggle bookkeeper manage client status flag

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | query | id | No | long |
| status | query | status | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BookkeeperTeam](#bookkeeperteam) |
| 201 | User email has been updated successfully. | [BookkeeperTeam](#bookkeeperteam) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/bookkeeper/client-tenants

#### GET
##### Summary

Get client's tenant mapping list.

##### Description

Get client's tenant mapping list.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Client's tenant list fetched successfully | [ [UserTenantMappingResponse](#usertenantmappingresponse) ] |
| 400 | Failed to get Client's tenant list. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Client's tenant list not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/bookkeeper/client/team-members

#### GET
##### Summary

Get list of all team members of the client

##### Description

API to get list of all team members of the client.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| clientDefaultUserId | query | clientDefaultUserId | No | long |
| clientTenantId | query | clientTenantId | No | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Team members of client fetched successfully | [ [BookkeeperTeamInfo](#bookkeeperteaminfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/bookkeeper/invite

#### POST
##### Summary

Invite bulk user to a tenant

##### Description

Invite bulk user to a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inviteBookKeeperRequest | body | inviteBookKeeperRequest | Yes | [InviteBookKeeperRequest](#invitebookkeeperrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User added to a tenant successfully | [ [BookkeeperInviteResponse](#bookkeeperinviteresponse) ] |
| 201 | Created |  |
| 400 | Bookkeeper request for send email can't null! |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | User does not exist with username/email/phone %s. |  |
| 500 | Bookkeeper request for send single email fail! |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/bookkeeper/notify

#### POST
##### Summary

Notify bookkeeper to upgrade plan for client.

##### Description

API to notify bookkeeper to upgrade plan for client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperNotifyRequest | body | bookkeeperNotifyRequest | Yes | [BookkeeperNotifyRequest](#bookkeepernotifyrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Bookkeeper notified successfully to upgrade plan for client. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/bookkeeper/payment

#### GET
##### Summary

Whether client pays or bookkeeper pays for subscription

##### Description

API to find whether client pays or bookkeeper pays for subscription

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Payment information fetched successfully. | [BookkeeperClientPayment](#bookkeeperclientpayment) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/bookkeeper/resend-invite

#### POST
##### Summary

Invite bulk user to a tenant

##### Description

Invite bulk user to a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| resendInviteBookkeeperRequest | body | resendInviteBookkeeperRequest | Yes | [InviteBookkeeperByIdsRequest](#invitebookkeeperbyidsrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User added to a tenant successfully | [ [BookkeeperInviteResponse](#bookkeeperinviteresponse) ] |
| 201 | Created |  |
| 400 | User tenant mapping creation failed |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/bookkeeper/subscription/cancel

#### POST
##### Summary

Cancel subscription

##### Description

API to cancel subscription.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| cancelSubscriptionRequest | body | cancelSubscriptionRequest | Yes | [CancelSubscriptionRequest](#cancelsubscriptionrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Request to cancel subscription successful. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/bookkeeper/team-member/clients

#### GET
##### Summary

Get list of all the clients the team member has access

##### Description

API to get list of all the clients the team member has access.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bkTeamId | query | bkTeamId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Clients of team member fetched successfully | [ [BookkeeperTeamInfo](#bookkeeperteaminfo) ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/bookkeeper/team-status

#### PUT
##### Summary

Bookkeeper team user updation.

##### Description

Toggle bookkeeper manage team status flag

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | query | id | No | long |
| status | query | status | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [BookkeeperTeam](#bookkeeperteam) |
| 201 | User email has been updated successfully. | [BookkeeperTeam](#bookkeeperteam) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/bookkeeper/team-user-detail

#### GET
##### Summary

Get details of logged in team member

##### Description

API to get details of logged in team member

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Logged in team member details fetched successfully | [BookkeeperTeamInfo](#bookkeeperteaminfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/bookkeeper/transfer-ownership

#### PUT
##### Summary

Bookkeeper transfer ownership.

##### Description

API to transfer Bookkeeper ownership.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bkTeamId | query | bkTeamId | No | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Bookkeeper ownership transferred successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/bookkeeper/{id}

#### DELETE
##### Summary

v1/tenants/bookkeeper

##### Description

Delete bookkeeper API

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | boolean |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## tenant-controller-canada
Canada specific Tenant APIs

### /v1/tenants/ca

#### PATCH
##### Summary

Update tenant attributes.

##### Description

API to update attributes of existing tenant.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [TenantAttributeRequest](#tenantattributerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant attributes has been updated successfully. | [TenantInfoCanada](#tenantinfocanada) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ca/affiliate/organisation

#### POST
##### Summary

Organization Setup by an affiliate user

##### Description

API to setup organization by an affiliate user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestCanada | body | orgSignUpRequestCanada | Yes | [OrgSignUpRequestCanada](#orgsignuprequestcanada) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup by an affiliate user has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup by an affiliate user |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ca/bookkeeper/client

#### POST
##### Summary

Bookkeeper client setup

##### Description

API to setup Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestCanada](#bookkeeperclientrequestcanada) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Bookkeeper client setup success | [SignUpResponse](#signupresponse) |
| 400 | Bookkeeper client setup fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Bookkeeper client update

##### Description

API to update Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestCanada](#bookkeeperclientrequestcanada) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bookkeeper client update success | [TenantInfoCanada](#tenantinfocanada) |
| 201 | Created |  |
| 400 | Bookkeeper client update fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ca/details

#### GET
##### Summary

Get tenant details of logged in user.

##### Description

API to get tenant information of logged in user.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoCanada](#tenantinfocanada) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ca/organisation

#### POST
##### Summary

Organization Setup

##### Description

API to setup organization

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestCanada | body | orgSignUpRequestCanada | Yes | [OrgSignUpRequestCanada](#orgsignuprequestcanada) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Complete organization setup

##### Description

API to complete organization setup

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequest | body | orgSignUpRequest | Yes | [OrgSignUpRequestCanada](#orgsignuprequestcanada) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been completed successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ca/reset

#### DELETE
##### Summary

Reset Tenant

##### Description

Api to reset Tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant reset successfully. | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to reset Tenant. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ca/users

#### POST
##### Summary

API to bulk add users to current tenant

##### Description

API to bulk add users to current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users added successfully |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users assignment to tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to bulk remove users from current tenant

##### Description

API to bulk remove users from current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users removed successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users removal from tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ca/verify

#### POST
##### Summary

Tenant verification

##### Description

API to verify a tenant after successful sign up.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| oAuthAccountVerifyRequest | body | oAuthAccountVerifyRequest | Yes | [OAuthAccountVerifyRequest](#oauthaccountverifyrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Tenant has been verified successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Either Tenant or Recovery token is no longer valid. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ca/{id}

#### GET
##### Summary

Get tenant by id.

##### Description

API to get tenant information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoCanada](#tenantinfocanada) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant with same name is already registered. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update tenant information

##### Description

API to update a tenant information.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| tenantInfoCanada | body | tenantInfoCanada | Yes | [TenantInfoCanada](#tenantinfocanada) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been updated successfully. | [TenantInfoCanada](#tenantinfocanada) |
| 201 | Created |  |
| 400 | Tenant with same name is already registered. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to delete tenant

##### Description

API to delete tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant has been deleted successfully | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant deletion failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## bookkeeper-client-controller
Bookkeeper Client Controller

### /v1/tenants/client/bookkeeper

#### DELETE
##### Summary

Delete Bookkeeper for Client

##### Description

API to delete Bookkeeper for Client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bkTeamId | query | bkTeamId | No | long |
| inviteId | query | inviteId | No | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bookkeeper for Client deleted successfully | [BookkeeperTeamInfo](#bookkeeperteaminfo) |
| 204 | No Content |  |
| 400 | Bookkeeper for Client delete failed |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/client/bookkeeper-status

#### PUT
##### Summary

Update status of Bookkeeper

##### Description

API to update status of Bookkeeper

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bkTeamId | query | bkTeamId | Yes | long |
| status | query | status | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bookkeeper status updated successfully | [BookkeeperTeamInfo](#bookkeeperteaminfo) |
| 201 | Created |  |
| 400 | Bookkeeper status update failed |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/client/bookkeepers

#### GET
##### Summary

Get Bookkeepers of a Client

##### Description

API to get Bookkeepers of a Client

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bookkeepers of Client fetched successfully | [ [BookkeeperTeamInfo](#bookkeeperteaminfo) ] |
| 400 | Get Bookkeepers of Client failed |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/client/invite-bookkeeper

#### POST
##### Summary

Invite a bookkeeper to a tenant

##### Description

API to invite a bookkeeper to a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inviteBookKeeperRequest | body | inviteBookKeeperRequest | Yes | [InviteBookKeeperRequest](#invitebookkeeperrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bookkeeper has been invited successfully | [ [BookkeeperInviteResponse](#bookkeeperinviteresponse) ] |
| 201 | Created |  |
| 400 | Invite a bookkeeper to a tenant failed |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/client/subscription/cancel

#### POST
##### Summary

Cancel subscription

##### Description

API to cancel subscription.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| cancelSubscriptionRequest | body | cancelSubscriptionRequest | Yes | [CancelSubscriptionRequest](#cancelsubscriptionrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Request to cancel subscription successful. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## tenant-controller-germany
Germany specific Tenant APIs

### /v1/tenants/de

#### PATCH
##### Summary

Update tenant attributes.

##### Description

API to update attributes of existing tenant.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [TenantAttributeRequest](#tenantattributerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant attributes has been updated successfully. | [TenantInfoGermany](#tenantinfogermany) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/de/affiliate/organisation

#### POST
##### Summary

Organization Setup by an affiliate user

##### Description

API to setup organization by an affiliate user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestGermany | body | orgSignUpRequestGermany | Yes | [OrgSignUpRequestGermany](#orgsignuprequestgermany) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup by an affiliate user has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup by an affiliate user |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/de/bookkeeper/client

#### POST
##### Summary

Bookkeeper client setup

##### Description

API to setup Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestGermany](#bookkeeperclientrequestgermany) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Bookkeeper client setup success | [SignUpResponse](#signupresponse) |
| 400 | Bookkeeper client setup fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Bookkeeper client update

##### Description

API to update Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestGermany](#bookkeeperclientrequestgermany) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bookkeeper client update success | [TenantInfoGermany](#tenantinfogermany) |
| 201 | Created |  |
| 400 | Bookkeeper client update fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/de/details

#### GET
##### Summary

Get tenant details of logged in user.

##### Description

API to get tenant information of logged in user.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoGermany](#tenantinfogermany) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/de/organisation

#### POST
##### Summary

Organization Setup

##### Description

API to setup organization

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestGermany | body | orgSignUpRequestGermany | Yes | [OrgSignUpRequestGermany](#orgsignuprequestgermany) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Complete organization setup

##### Description

API to complete organization setup

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequest | body | orgSignUpRequest | Yes | [OrgSignUpRequestGermany](#orgsignuprequestgermany) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been completed successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/de/reset

#### DELETE
##### Summary

Reset Tenant

##### Description

Api to reset Tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant reset successfully. | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to reset Tenant. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/de/users

#### POST
##### Summary

API to bulk add users to current tenant

##### Description

API to bulk add users to current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users added successfully |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users assignment to tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to bulk remove users from current tenant

##### Description

API to bulk remove users from current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users removed successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users removal from tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/de/verify

#### POST
##### Summary

Tenant verification

##### Description

API to verify a tenant after successful sign up.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| oAuthAccountVerifyRequest | body | oAuthAccountVerifyRequest | Yes | [OAuthAccountVerifyRequest](#oauthaccountverifyrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Tenant has been verified successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Either Tenant or Recovery token is no longer valid. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/de/{id}

#### GET
##### Summary

Get tenant by id.

##### Description

API to get tenant information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoGermany](#tenantinfogermany) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant with same name is already registered. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update tenant information

##### Description

API to update a tenant information.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| tenantInfoGermany | body | tenantInfoGermany | Yes | [TenantInfoGermany](#tenantinfogermany) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been updated successfully. | [TenantInfoGermany](#tenantinfogermany) |
| 201 | Created |  |
| 400 | Tenant with same name is already registered. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to delete tenant

##### Description

API to delete tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant has been deleted successfully | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant deletion failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## tenant-controller-indonesia
Indonesia specific Tenant APIs

### /v1/tenants/id

#### PATCH
##### Summary

Update tenant attributes.

##### Description

API to update attributes of existing tenant.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [TenantAttributeRequest](#tenantattributerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant attributes has been updated successfully. | [TenantInfoIndonesia](#tenantinfoindonesia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/id/affiliate/organisation

#### POST
##### Summary

Organization Setup by an affiliate user

##### Description

API to setup organization by an affiliate user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestIndonesia | body | orgSignUpRequestIndonesia | Yes | [OrgSignUpRequestIndonesia](#orgsignuprequestindonesia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup by an affiliate user has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup by an affiliate user |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/id/bookkeeper/client

#### POST
##### Summary

Bookkeeper client setup

##### Description

API to setup Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestIndonesia](#bookkeeperclientrequestindonesia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Bookkeeper client setup success | [SignUpResponse](#signupresponse) |
| 400 | Bookkeeper client setup fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Bookkeeper client update

##### Description

API to update Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestIndonesia](#bookkeeperclientrequestindonesia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bookkeeper client update success | [TenantInfoIndonesia](#tenantinfoindonesia) |
| 201 | Created |  |
| 400 | Bookkeeper client update fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/id/details

#### GET
##### Summary

Get tenant details of logged in user.

##### Description

API to get tenant information of logged in user.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoIndonesia](#tenantinfoindonesia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/id/organisation

#### POST
##### Summary

Organization Setup

##### Description

API to setup organization

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestIndonesia | body | orgSignUpRequestIndonesia | Yes | [OrgSignUpRequestIndonesia](#orgsignuprequestindonesia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Complete organization setup

##### Description

API to complete organization setup

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequest | body | orgSignUpRequest | Yes | [OrgSignUpRequestIndonesia](#orgsignuprequestindonesia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been completed successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/id/reset

#### DELETE
##### Summary

Reset Tenant

##### Description

Api to reset Tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant reset successfully. | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to reset Tenant. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/id/users

#### POST
##### Summary

API to bulk add users to current tenant

##### Description

API to bulk add users to current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users added successfully |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users assignment to tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to bulk remove users from current tenant

##### Description

API to bulk remove users from current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users removed successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users removal from tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/id/verify

#### POST
##### Summary

Tenant verification

##### Description

API to verify a tenant after successful sign up.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| oAuthAccountVerifyRequest | body | oAuthAccountVerifyRequest | Yes | [OAuthAccountVerifyRequest](#oauthaccountverifyrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Tenant has been verified successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Either Tenant or Recovery token is no longer valid. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/id/{id}

#### GET
##### Summary

Get tenant by id.

##### Description

API to get tenant information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoIndonesia](#tenantinfoindonesia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant with same name is already registered. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update tenant information

##### Description

API to update a tenant information.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| TenantInfoIndonesia | body | TenantInfoIndonesia | Yes | [TenantInfoIndonesia](#tenantinfoindonesia) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been updated successfully. | [TenantInfoIndonesia](#tenantinfoindonesia) |
| 201 | Created |  |
| 400 | Tenant with same name is already registered. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to delete tenant

##### Description

API to delete tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant has been deleted successfully | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant deletion failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## tenant-controller-israel
Israel specific Tenant APIs

### /v1/tenants/il

#### PATCH
##### Summary

Update tenant attributes.

##### Description

API to update attributes of existing tenant.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [TenantAttributeRequest](#tenantattributerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant attributes has been updated successfully. | [TenantInfoIsrael](#tenantinfoisrael) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/il/affiliate/organisation

#### POST
##### Summary

Organization Setup by an affiliate user

##### Description

API to setup organization by an affiliate user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestIsrael | body | orgSignUpRequestIsrael | Yes | [OrgSignUpRequestIsrael](#orgsignuprequestisrael) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup by an affiliate user has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup by an affiliate user |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/il/bookkeeper/client

#### POST
##### Summary

Bookkeeper client setup

##### Description

API to setup Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestIsrael](#bookkeeperclientrequestisrael) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Bookkeeper client setup success | [SignUpResponse](#signupresponse) |
| 400 | Bookkeeper client setup fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Bookkeeper client update

##### Description

API to update Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestIsrael](#bookkeeperclientrequestisrael) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bookkeeper client update success | [TenantInfoIsrael](#tenantinfoisrael) |
| 201 | Created |  |
| 400 | Bookkeeper client update fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/il/details

#### GET
##### Summary

Get tenant details of logged in user.

##### Description

API to get tenant information of logged in user.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoIsrael](#tenantinfoisrael) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/il/organisation

#### POST
##### Summary

Organization Setup

##### Description

API to setup organization

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestIsrael | body | orgSignUpRequestIsrael | Yes | [OrgSignUpRequestIsrael](#orgsignuprequestisrael) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Complete organization setup

##### Description

API to complete organization setup

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequest | body | orgSignUpRequest | Yes | [OrgSignUpRequestIsrael](#orgsignuprequestisrael) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been completed successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/il/reset

#### DELETE
##### Summary

Reset Tenant

##### Description

Api to reset Tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant reset successfully. | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to reset Tenant. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/il/users

#### POST
##### Summary

API to bulk add users to current tenant

##### Description

API to bulk add users to current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users added successfully |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users assignment to tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to bulk remove users from current tenant

##### Description

API to bulk remove users from current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users removed successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users removal from tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/il/verify

#### POST
##### Summary

Tenant verification

##### Description

API to verify a tenant after successful sign up.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| oAuthAccountVerifyRequest | body | oAuthAccountVerifyRequest | Yes | [OAuthAccountVerifyRequest](#oauthaccountverifyrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Tenant has been verified successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Either Tenant or Recovery token is no longer valid. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/il/{id}

#### GET
##### Summary

Get tenant by id.

##### Description

API to get tenant information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoIsrael](#tenantinfoisrael) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant with same name is already registered. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update tenant information

##### Description

API to update a tenant information.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| tenantInfoIsrael | body | tenantInfoIsrael | Yes | [TenantInfoIsrael](#tenantinfoisrael) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been updated successfully. | [TenantInfoIsrael](#tenantinfoisrael) |
| 201 | Created |  |
| 400 | Tenant with same name is already registered. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to delete tenant

##### Description

API to delete tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant has been deleted successfully | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant deletion failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## tenant-controller-india
India specific Tenant APIs

### /v1/tenants/in

#### PATCH
##### Summary

Update tenant attributes.

##### Description

API to update attributes of existing tenant.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [TenantAttributeRequest](#tenantattributerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant attributes has been updated successfully. | [TenantInfoIndia](#tenantinfoindia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/in/affiliate/organisation

#### POST
##### Summary

Organization Setup by an affiliate user

##### Description

API to setup organization by an affiliate user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestIndia | body | orgSignUpRequestIndia | Yes | [OrgSignUpRequestIndia](#orgsignuprequestindia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup by an affiliate user has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup by an affiliate user |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/in/bookkeeper/client

#### POST
##### Summary

Bookkeeper client setup

##### Description

API to setup Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestIndia](#bookkeeperclientrequestindia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Bookkeeper client setup success | [SignUpResponse](#signupresponse) |
| 400 | Bookkeeper client setup fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Bookkeeper client update

##### Description

API to update Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestIndia](#bookkeeperclientrequestindia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bookkeeper client update success | [TenantInfoIndia](#tenantinfoindia) |
| 201 | Created |  |
| 400 | Bookkeeper client update fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/in/details

#### GET
##### Summary

Get tenant details of logged in user.

##### Description

API to get tenant information of logged in user.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoIndia](#tenantinfoindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/in/organisation

#### POST
##### Summary

Organization Setup

##### Description

API to setup organization

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestIndia | body | orgSignUpRequestIndia | Yes | [OrgSignUpRequestIndia](#orgsignuprequestindia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Complete organization setup

##### Description

API to complete organization setup

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequest | body | orgSignUpRequest | Yes | [OrgSignUpRequestIndia](#orgsignuprequestindia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been completed successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/in/reset

#### DELETE
##### Summary

Reset Tenant

##### Description

Api to reset Tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant reset successfully. | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to reset Tenant. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/in/users

#### POST
##### Summary

API to bulk add users to current tenant

##### Description

API to bulk add users to current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users added successfully |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users assignment to tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to bulk remove users from current tenant

##### Description

API to bulk remove users from current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users removed successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users removal from tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/in/verify

#### POST
##### Summary

Tenant verification

##### Description

API to verify a tenant after successful sign up.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| oAuthAccountVerifyRequest | body | oAuthAccountVerifyRequest | Yes | [OAuthAccountVerifyRequest](#oauthaccountverifyrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Tenant has been verified successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Either Tenant or Recovery token is no longer valid. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/in/{id}

#### GET
##### Summary

Get tenant by id.

##### Description

API to get tenant information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoIndia](#tenantinfoindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant with same name is already registered. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update tenant information

##### Description

API to update a tenant information.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| TenantInfoIndia | body | TenantInfoIndia | Yes | [TenantInfoIndia](#tenantinfoindia) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been updated successfully. | [TenantInfoIndia](#tenantinfoindia) |
| 201 | Created |  |
| 400 | Tenant with same name is already registered. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to delete tenant

##### Description

API to delete tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant has been deleted successfully | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant deletion failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## tenant-controller-malaysia
Malaysia specific Tenant APIs

### /v1/tenants/my

#### PATCH
##### Summary

Update tenant attributes.

##### Description

API to update attributes of existing tenant.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [TenantAttributeRequest](#tenantattributerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant attributes has been updated successfully. | [TenantInfoMalaysia](#tenantinfomalaysia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/my/affiliate/organisation

#### POST
##### Summary

Organization Setup by an affiliate user

##### Description

API to setup organization by an affiliate user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestMalaysia | body | orgSignUpRequestMalaysia | Yes | [OrgSignUpRequestMalaysia](#orgsignuprequestmalaysia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup by an affiliate user has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup by an affiliate user |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/my/bookkeeper/client

#### POST
##### Summary

Bookkeeper client setup

##### Description

API to setup Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestMalaysia](#bookkeeperclientrequestmalaysia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Bookkeeper client setup success | [SignUpResponse](#signupresponse) |
| 400 | Bookkeeper client setup fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Bookkeeper client update

##### Description

API to update Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestMalaysia](#bookkeeperclientrequestmalaysia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bookkeeper client update success | [TenantInfoMalaysia](#tenantinfomalaysia) |
| 201 | Created |  |
| 400 | Bookkeeper client update fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/my/details

#### GET
##### Summary

Get tenant details of logged in user.

##### Description

API to get tenant information of logged in user.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoMalaysia](#tenantinfomalaysia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/my/organisation

#### POST
##### Summary

Organization Setup

##### Description

API to setup organization

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestMalaysia | body | orgSignUpRequestMalaysia | Yes | [OrgSignUpRequestMalaysia](#orgsignuprequestmalaysia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Complete organization setup

##### Description

API to complete organization setup

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequest | body | orgSignUpRequest | Yes | [OrgSignUpRequestMalaysia](#orgsignuprequestmalaysia) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been completed successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/my/reset

#### DELETE
##### Summary

Reset Tenant

##### Description

Api to reset Tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant reset successfully. | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to reset Tenant. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/my/users

#### POST
##### Summary

API to bulk add users to current tenant

##### Description

API to bulk add users to current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users added successfully |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users assignment to tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to bulk remove users from current tenant

##### Description

API to bulk remove users from current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users removed successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users removal from tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/my/verify

#### POST
##### Summary

Tenant verification

##### Description

API to verify a tenant after successful sign up.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| oAuthAccountVerifyRequest | body | oAuthAccountVerifyRequest | Yes | [OAuthAccountVerifyRequest](#oauthaccountverifyrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Tenant has been verified successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Either Tenant or Recovery token is no longer valid. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/my/{id}

#### GET
##### Summary

Get tenant by id.

##### Description

API to get tenant information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoMalaysia](#tenantinfomalaysia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant with same name is already registered. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update tenant information

##### Description

API to update a tenant information.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| TenantInfoMalaysia | body | TenantInfoMalaysia | Yes | [TenantInfoMalaysia](#tenantinfomalaysia) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been updated successfully. | [TenantInfoMalaysia](#tenantinfomalaysia) |
| 201 | Created |  |
| 400 | Tenant with same name is already registered. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to delete tenant

##### Description

API to delete tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant has been deleted successfully | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant deletion failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## tenant-controller-nl
Netherlands specific Tenant APIs

### /v1/tenants/nl

#### PATCH
##### Summary

Update tenant attributes.

##### Description

API to update attributes of existing tenant.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [TenantAttributeRequest](#tenantattributerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant attributes has been updated successfully. | [TenantInfoNL](#tenantinfonl) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/nl/affiliate/organisation

#### POST
##### Summary

Organization Setup by an affiliate user

##### Description

API to setup organization by an affiliate user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestNL | body | orgSignUpRequestNL | Yes | [OrgSignUpRequestNL](#orgsignuprequestnl) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup by an affiliate user has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup by an affiliate user |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/nl/bookkeeper/client

#### POST
##### Summary

Bookkeeper client setup

##### Description

API to setup Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestNL](#bookkeeperclientrequestnl) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Bookkeeper client setup success | [SignUpResponse](#signupresponse) |
| 400 | Bookkeeper client setup fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Bookkeeper client update

##### Description

API to update Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestNL](#bookkeeperclientrequestnl) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bookkeeper client update success | [TenantInfoNL](#tenantinfonl) |
| 201 | Created |  |
| 400 | Bookkeeper client update fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/nl/details

#### GET
##### Summary

Get tenant details of logged in user.

##### Description

API to get tenant information of logged in user.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoNL](#tenantinfonl) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/nl/organisation

#### POST
##### Summary

Organization Setup

##### Description

API to setup organization

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestNL | body | orgSignUpRequestNL | Yes | [OrgSignUpRequestNL](#orgsignuprequestnl) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Complete organization setup

##### Description

API to complete organization setup

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequest | body | orgSignUpRequest | Yes | [OrgSignUpRequestNL](#orgsignuprequestnl) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been completed successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/nl/reset

#### DELETE
##### Summary

Reset Tenant

##### Description

Api to reset Tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant reset successfully. | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to reset Tenant. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/nl/users

#### POST
##### Summary

API to bulk add users to current tenant

##### Description

API to bulk add users to current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users added successfully |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users assignment to tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to bulk remove users from current tenant

##### Description

API to bulk remove users from current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users removed successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users removal from tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/nl/verify

#### POST
##### Summary

Tenant verification

##### Description

API to verify a tenant after successful sign up.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| oAuthAccountVerifyRequest | body | oAuthAccountVerifyRequest | Yes | [OAuthAccountVerifyRequest](#oauthaccountverifyrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Tenant has been verified successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Either Tenant or Recovery token is no longer valid. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/nl/{id}

#### GET
##### Summary

Get tenant by id.

##### Description

API to get tenant information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoNL](#tenantinfonl) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant with same name is already registered. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update tenant information

##### Description

API to update a tenant information.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| tenantInfoNL | body | tenantInfoNL | Yes | [TenantInfoNL](#tenantinfonl) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been updated successfully. | [TenantInfoNL](#tenantinfonl) |
| 201 | Created |  |
| 400 | Tenant with same name is already registered. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to delete tenant

##### Description

API to delete tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant has been deleted successfully | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant deletion failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## tenant-controller-nz
New Zealand specific Tenant APIs

### /v1/tenants/nz

#### PATCH
##### Summary

Update tenant attributes.

##### Description

API to update attributes of existing tenant.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [TenantAttributeRequest](#tenantattributerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant attributes has been updated successfully. | [TenantInfoNZ](#tenantinfonz) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/nz/affiliate/organisation

#### POST
##### Summary

Organization Setup by an affiliate user

##### Description

API to setup organization by an affiliate user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestNZ | body | orgSignUpRequestNZ | Yes | [OrgSignUpRequestNZ](#orgsignuprequestnz) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup by an affiliate user has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup by an affiliate user |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/nz/bookkeeper/client

#### POST
##### Summary

Bookkeeper client setup

##### Description

API to setup Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestNZ](#bookkeeperclientrequestnz) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Bookkeeper client setup success | [SignUpResponse](#signupresponse) |
| 400 | Bookkeeper client setup fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Bookkeeper client update

##### Description

API to update Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestNZ](#bookkeeperclientrequestnz) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bookkeeper client update success | [TenantInfoNZ](#tenantinfonz) |
| 201 | Created |  |
| 400 | Bookkeeper client update fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/nz/details

#### GET
##### Summary

Get tenant details of logged in user.

##### Description

API to get tenant information of logged in user.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoNZ](#tenantinfonz) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/nz/organisation

#### POST
##### Summary

Organization Setup

##### Description

API to setup organization

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestNZ | body | orgSignUpRequestNZ | Yes | [OrgSignUpRequestNZ](#orgsignuprequestnz) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Complete organization setup

##### Description

API to complete organization setup

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequest | body | orgSignUpRequest | Yes | [OrgSignUpRequestNZ](#orgsignuprequestnz) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been completed successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/nz/reset

#### DELETE
##### Summary

Reset Tenant

##### Description

Api to reset Tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant reset successfully. | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to reset Tenant. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/nz/users

#### POST
##### Summary

API to bulk add users to current tenant

##### Description

API to bulk add users to current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users added successfully |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users assignment to tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to bulk remove users from current tenant

##### Description

API to bulk remove users from current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users removed successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users removal from tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/nz/verify

#### POST
##### Summary

Tenant verification

##### Description

API to verify a tenant after successful sign up.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| oAuthAccountVerifyRequest | body | oAuthAccountVerifyRequest | Yes | [OAuthAccountVerifyRequest](#oauthaccountverifyrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Tenant has been verified successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Either Tenant or Recovery token is no longer valid. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/nz/{id}

#### GET
##### Summary

Get tenant by id.

##### Description

API to get tenant information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoNZ](#tenantinfonz) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant with same name is already registered. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update tenant information

##### Description

API to update a tenant information.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| tenantInfoNZ | body | tenantInfoNZ | Yes | [TenantInfoNZ](#tenantinfonz) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been updated successfully. | [TenantInfoNZ](#tenantinfonz) |
| 201 | Created |  |
| 400 | Tenant with same name is already registered. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to delete tenant

##### Description

API to delete tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant has been deleted successfully | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant deletion failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## permission-controller
Permission Controller

### /v1/tenants/permissions

#### GET
##### Summary

Get permission of logged in user for selected tenant

##### Description

Get permission of user and tenant from auth details

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Permission fetches | [UserPermissionResponse](#userpermissionresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Fetching permission failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Assign user permission for apps

##### Description

Assign user Permission for apps

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userPermissionReq | body | userPermissionReq | Yes | [ [UserPermissionRequest](#userpermissionrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Permission assigned to user successfully | [ [UserPermissionResponse](#userpermissionresponse) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Assign permission to user failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Remove user permission for apps

##### Description

Remove user Permission for apps

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| removePermissionRequests | body | removePermissionRequests | Yes | [ [RemovePermissionRequest](#removepermissionrequest) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | User permission removed successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not able to remove user permission |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
##### Summary

Add user permission for apps

##### Description

Add user Permission for apps

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userPermissionReq | body | userPermissionReq | Yes | [ [UserPermissionRequest](#userpermissionrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Permission added to user successfully | [ [UserPermissionResponse](#userpermissionresponse) ] |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Adding permission to user failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/permissions/metadata

#### POST
##### Summary

Get permission details for apps

##### Description

Get permission details (Role Group, Module, Roles) for given apps

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| appNames | body | appNames | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Module permission fetched successfully | object |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Module permission fetch failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/permissions/module

#### POST
##### Summary

Get module list for apps

##### Description

Get module list details for given apps

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| appNames | body | appNames | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Module list fetched successfully | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Module list fetch failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/permissions/refresh

#### POST
##### Summary

Refresh User Redis Permission

##### Description

Refresh User Redis Permission

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Permission refreshed successfully | boolean |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to refresh user permission |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/permissions/users

#### POST
##### Summary

Get permission of userIds for selected tenant

##### Description

Get permission of given userIds and tenant from auth details

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Permission fetches | [ object ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Fetching permission failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## tenant-controller-philippines
Philippines specific Tenant APIs

### /v1/tenants/ph

#### PATCH
##### Summary

Update tenant attributes.

##### Description

API to update attributes of existing tenant.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [TenantAttributeRequest](#tenantattributerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant attributes has been updated successfully. | [TenantInfoIndia](#tenantinfoindia) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ph/affiliate/organisation

#### POST
##### Summary

Organization Setup by an affiliate user

##### Description

API to setup organization by an affiliate user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestPhilippines | body | orgSignUpRequestPhilippines | Yes | [OrgSignUpRequestPhilippines](#orgsignuprequestphilippines) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup by an affiliate user has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup by an affiliate user |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ph/bookkeeper/client

#### POST
##### Summary

Bookkeeper client setup

##### Description

API to setup Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestPhilippines](#bookkeeperclientrequestphilippines) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Bookkeeper client setup success | [SignUpResponse](#signupresponse) |
| 400 | Bookkeeper client setup fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Bookkeeper client update

##### Description

API to update Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestPhilippines](#bookkeeperclientrequestphilippines) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bookkeeper client update success | [TenantInfoPhilippines](#tenantinfophilippines) |
| 201 | Created |  |
| 400 | Bookkeeper client update fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ph/details

#### GET
##### Summary

Get tenant details of logged in user.

##### Description

API to get tenant information of logged in user.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoIndia](#tenantinfoindia) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ph/organisation

#### POST
##### Summary

Organization Setup

##### Description

API to setup organization

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestPhilippines | body | orgSignUpRequestPhilippines | Yes | [OrgSignUpRequestPhilippines](#orgsignuprequestphilippines) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Complete organization setup

##### Description

API to complete organization setup

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequest | body | orgSignUpRequest | Yes | [OrgSignUpRequestPhilippines](#orgsignuprequestphilippines) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been completed successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ph/reset

#### DELETE
##### Summary

Reset Tenant

##### Description

Api to reset Tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant reset successfully. | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to reset Tenant. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ph/users

#### POST
##### Summary

API to bulk add users to current tenant

##### Description

API to bulk add users to current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users added successfully |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users assignment to tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to bulk remove users from current tenant

##### Description

API to bulk remove users from current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users removed successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users removal from tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ph/verify

#### POST
##### Summary

Tenant verification

##### Description

API to verify a tenant after successful sign up.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| oAuthAccountVerifyRequest | body | oAuthAccountVerifyRequest | Yes | [OAuthAccountVerifyRequest](#oauthaccountverifyrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Tenant has been verified successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Either Tenant or Recovery token is no longer valid. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/ph/{id}

#### GET
##### Summary

Get tenant by id.

##### Description

API to get tenant information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoPhilippines](#tenantinfophilippines) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant with same name is already registered. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update tenant information

##### Description

API to update a tenant information.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| TenantInfoPhilippines | body | TenantInfoPhilippines | Yes | [TenantInfoPhilippines](#tenantinfophilippines) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been updated successfully. | [TenantInfoIndia](#tenantinfoindia) |
| 201 | Created |  |
| 400 | Tenant with same name is already registered. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to delete tenant

##### Description

API to delete tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant has been deleted successfully | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant deletion failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## tenant-controller-sa
Saudi Arabia specific Tenant APIs

### /v1/tenants/sa

#### PATCH
##### Summary

Update tenant attributes.

##### Description

API to update attributes of existing tenant.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [TenantAttributeRequest](#tenantattributerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant attributes has been updated successfully. | [TenantInfoSA](#tenantinfosa) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/sa/affiliate/organisation

#### POST
##### Summary

Organization Setup by an affiliate user

##### Description

API to setup organization by an affiliate user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestSA | body | orgSignUpRequestSA | Yes | [OrgSignUpRequestSA](#orgsignuprequestsa) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup by an affiliate user has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup by an affiliate user |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/sa/bookkeeper/client

#### POST
##### Summary

Bookkeeper client setup

##### Description

API to setup Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestSA](#bookkeeperclientrequestsa) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Bookkeeper client setup success | [SignUpResponse](#signupresponse) |
| 400 | Bookkeeper client setup fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Bookkeeper client update

##### Description

API to update Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestSA](#bookkeeperclientrequestsa) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bookkeeper client update success | [TenantInfoSA](#tenantinfosa) |
| 201 | Created |  |
| 400 | Bookkeeper client update fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/sa/details

#### GET
##### Summary

Get tenant details of logged in user.

##### Description

API to get tenant information of logged in user.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoSA](#tenantinfosa) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/sa/organisation

#### POST
##### Summary

Organization Setup

##### Description

API to setup organization

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestSA | body | orgSignUpRequestSA | Yes | [OrgSignUpRequestSA](#orgsignuprequestsa) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Complete organization setup

##### Description

API to complete organization setup

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestSA | body | orgSignUpRequestSA | Yes | [OrgSignUpRequestSA](#orgsignuprequestsa) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been completed successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/sa/reset

#### DELETE
##### Summary

Reset Tenant

##### Description

Api to reset Tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant reset successfully. | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to reset Tenant. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/sa/users

#### POST
##### Summary

API to bulk add users to current tenant

##### Description

API to bulk add users to current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users added successfully |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users assignment to tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to bulk remove users from current tenant

##### Description

API to bulk remove users from current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users removed successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users removal from tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/sa/verify

#### POST
##### Summary

Tenant verification

##### Description

API to verify a tenant after successful sign up.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| oAuthAccountVerifyRequest | body | oAuthAccountVerifyRequest | Yes | [OAuthAccountVerifyRequest](#oauthaccountverifyrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Tenant has been verified successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Either Tenant or Recovery token is no longer valid. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/sa/{id}

#### GET
##### Summary

Get tenant by id.

##### Description

API to get tenant information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoSA](#tenantinfosa) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant with same name is already registered. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update tenant information

##### Description

API to update a tenant information.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| tenantInfoSA | body | tenantInfoSA | Yes | [TenantInfoSA](#tenantinfosa) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been updated successfully. | [TenantInfoSA](#tenantinfosa) |
| 201 | Created |  |
| 400 | Tenant with same name is already registered. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to delete tenant

##### Description

API to delete tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant has been deleted successfully | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant deletion failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## tenant-controller-uk
UK specific Tenant APIs

### /v1/tenants/uk

#### PATCH
##### Summary

Update tenant attributes.

##### Description

API to update attributes of existing tenant.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| request | body | request | Yes | [TenantAttributeRequest](#tenantattributerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant attributes has been updated successfully. | [TenantInfoUK](#tenantinfouk) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/uk/affiliate/organisation

#### POST
##### Summary

Organization Setup by an affiliate user

##### Description

API to setup organization by an affiliate user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestUK | body | orgSignUpRequestUK | Yes | [OrgSignUpRequestUK](#orgsignuprequestuk) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup by an affiliate user has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup by an affiliate user |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/uk/bookkeeper/client

#### POST
##### Summary

Bookkeeper client setup

##### Description

API to setup Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestUK](#bookkeeperclientrequestuk) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Bookkeeper client setup success | [SignUpResponse](#signupresponse) |
| 400 | Bookkeeper client setup fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Bookkeeper client update

##### Description

API to update Bookkeeper client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| bookkeeperClientRequest | body | bookkeeperClientRequest | Yes | [BookkeeperClientRequestUK](#bookkeeperclientrequestuk) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Bookkeeper client update success | [TenantInfoUK](#tenantinfouk) |
| 201 | Created |  |
| 400 | Bookkeeper client update fail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/uk/details

#### GET
##### Summary

Get tenant details of logged in user.

##### Description

API to get tenant information of logged in user.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoUK](#tenantinfouk) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/uk/organisation

#### POST
##### Summary

Organization Setup

##### Description

API to setup organization

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequestUK | body | orgSignUpRequestUK | Yes | [OrgSignUpRequestUK](#orgsignuprequestuk) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been done successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Complete organization setup

##### Description

API to complete organization setup

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| orgSignUpRequest | body | orgSignUpRequest | Yes | [OrgSignUpRequestUK](#orgsignuprequestuk) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SignUpResponse](#signupresponse) |
| 201 | Organization setup has been completed successfully. | [SignUpResponse](#signupresponse) |
| 400 | Invalid request to organization setup. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/uk/reset

#### DELETE
##### Summary

Reset Tenant

##### Description

Api to reset Tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant reset successfully. | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Failed to reset Tenant. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/uk/users

#### POST
##### Summary

API to bulk add users to current tenant

##### Description

API to bulk add users to current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users added successfully |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users assignment to tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to bulk remove users from current tenant

##### Description

API to bulk remove users from current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userIds | body | userIds | Yes | [ long ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Users removed successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Users removal from tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/uk/verify

#### POST
##### Summary

Tenant verification

##### Description

API to verify a tenant after successful sign up.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| oAuthAccountVerifyRequest | body | oAuthAccountVerifyRequest | Yes | [OAuthAccountVerifyRequest](#oauthaccountverifyrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Tenant has been verified successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Either Tenant or Recovery token is no longer valid. |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/uk/{id}

#### GET
##### Summary

Get tenant by id.

##### Description

API to get tenant information by id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been fetched successfully. | [TenantInfoUK](#tenantinfouk) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant with same name is already registered. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update tenant information

##### Description

API to update a tenant information.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| tenantInfoUK | body | tenantInfoUK | Yes | [TenantInfoUK](#tenantinfouk) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been updated successfully. | [TenantInfoUK](#tenantinfouk) |
| 201 | Created |  |
| 400 | Tenant with same name is already registered. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to delete tenant

##### Description

API to delete tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant has been deleted successfully | [SignUpResponse](#signupresponse) |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant deletion failed |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## tenant-settings-controller
Organization level Settings

### /v1/tenants/{id}/settings

#### GET
##### Summary

Get tenant settings by section

##### Description

Fetch tenant settings by section API

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| section | query | section | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant section information fetched successfully. | [TenantSettings](#tenantsettings) |
| 401 | Cannot access information of different tenant. |  |
| 403 | Forbidden |  |
| 404 | Tenant with the id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/{id}/settings/barcode

#### POST
##### Summary

Update tenant barcode details

##### Description

Save/update tenant barcode details API

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| tenantBarcodeSettingDetails | body | tenantBarcodeSettingDetails | Yes | [TenantBarcodeSettingDetails](#tenantbarcodesettingdetails) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant barcode details updated successfully. | [TenantBarcodeSettingDetails](#tenantbarcodesettingdetails) |
| 201 | Created |  |
| 400 | Tenant barcode details could not be updated because of insufficient data. |  |
| 401 | Cannot access information of different tenant. |  |
| 403 | Forbidden |  |
| 404 | Tenant with the id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

API to delete barcode setting from current tenant

##### Description

API to delete barcode setting from current tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Barcode setting removed successfully |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Barcode setting removal from tenant failed |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/{id}/settings/controlaccount

#### POST
##### Summary

Update tenant control account details

##### Description

Update Tenant TCS Settings

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| controlAccountDetails | body | controlAccountDetails | Yes | [TenantControlAccountsDetails](#tenantcontrolaccountsdetails) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant control account details updated successfully. | [TenantControlAccountsDetails](#tenantcontrolaccountsdetails) |
| 201 | Created |  |
| 400 | Tenant control account details could not be updated because of insufficient data. |  |
| 401 | Cannot access information of different tenant. |  |
| 403 | Forbidden |  |
| 404 | Tenant with the id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/{id}/settings/finance

#### POST
##### Summary

Update tenant finance details

##### Description

Save/update tenant finance details API

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| financeDetails | body | financeDetails | Yes | [TenantFinanceDetails](#tenantfinancedetails) |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant finance details updated successfully. | [TenantFinanceDetails](#tenantfinancedetails) |
| 201 | Created |  |
| 400 | Tenant finance details could not be updated because of insufficient data. |  |
| 401 | Cannot access information of different tenant. |  |
| 403 | Forbidden |  |
| 404 | Tenant with the id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/{id}/settings/info

#### GET
##### Summary

Get tenant basic info

##### Description

Fetch tenant details API

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information fetched successfully. | [TenantDetails](#tenantdetails) |
| 401 | Cannot access information of different tenant. |  |
| 403 | Forbidden |  |
| 404 | Tenant with the id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Tenant details update

##### Description

Update tenant details API

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| request | body | request | Yes | [TenantUpdateRequest](#tenantupdaterequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information updated successfully. | [TenantDetails](#tenantdetails) |
| 201 | Created |  |
| 400 | Tenant could not be updated because of insufficient data. |  |
| 401 | Cannot access information of different tenant. |  |
| 403 | Forbidden |  |
| 404 | Tenant with the id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/{id}/settings/inventory

#### POST
##### Summary

Update tenant inventory details

##### Description

Save/update tenant inventory details API

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| inventoryDetails | body | inventoryDetails | Yes | [TenantInventoryDetails](#tenantinventorydetails) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant inventory details updated successfully. | [TenantInventoryDetails](#tenantinventorydetails) |
| 201 | Created |  |
| 400 | Tenant inventory details could not be updated because of insufficient data. |  |
| 401 | Cannot access information of different tenant. |  |
| 403 | Forbidden |  |
| 404 | Tenant with the id not found. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/{id}/settings/name

#### POST
##### Summary

updateName

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| updateNameRequest | body | updateNameRequest | Yes | [TenantUpdateNameRequest](#tenantupdatenamerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | boolean |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/{id}/settings/tcs

#### GET
##### Summary

Get Tenant TCS Settings List

##### Description

Get Tenant TCS Settings List

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Save Tenant TCS Settings

##### Description

Save Tenant TCS Settings

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tcsSettingsRequest | body | tcsSettingsRequest | Yes | [TCSSettingsRequest](#tcssettingsrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TCSSettingsResponse](#tcssettingsresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/{id}/settings/tcs/nature

#### GET
##### Summary

Get TCS Collection Nature List

##### Description

Get TCS Collection Nature List

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ object ] |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Create TCS Collection Nature

##### Description

Create Tenant TCS Collection Nature

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tcsCollectionNatureRequest | body | tcsCollectionNatureRequest | Yes | [TCSCollectionNatureRequest](#tcscollectionnaturerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TCSCollectionNatureResponse](#tcscollectionnatureresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/{id}/settings/tcs/{tcs_id}

#### GET
##### Summary

Get Tenant TCS Settings By Id

##### Description

Get Tenant TCS Settings By Id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tcs_id | path | tcs_id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TCSSettingsResponse](#tcssettingsresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PUT
##### Summary

Update Tenant TCS Settings

##### Description

Update Tenant TCS Settings

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tcsSettingsRequest | body | tcsSettingsRequest | Yes | [TCSSettingsRequest](#tcssettingsrequest) |
| tcs_id | path | tcs_id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [TCSSettingsResponse](#tcssettingsresponse) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Delete Tenant TCS Settings

##### Description

Delete Tenant TCS Settings

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tcs_id | path | tcs_id | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/{id}/settings/tcs/{tcs_id}/status/{status}

#### PATCH
##### Summary

Update Tenant TCS Settings

##### Description

Update Tenant TCS Settings

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| status | path | status | Yes | string |
| tcs_id | path | tcs_id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | boolean |
| 204 | No Content |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/{id}/settings/update

#### PATCH
##### Summary

Update tenant information

##### Description

API to update a tenant information.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| tenantInfo | body | tenantInfo | Yes | [TenantAttributeRequest](#tenantattributerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant information has been updated successfully. | [TenantInfo](#tenantinfo) |
| 204 | No Content |  |
| 400 | Tenant with same name is already registered. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant does not exist. |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/tenants/{id}/settings/updateaccount

#### PUT
##### Summary

Update account in Settings By Id

##### Description

Update account in Settings By Id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| codes | body | codes | Yes | [ string ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Updated account in Settings By Id successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## user-controller
User Management

### /v1/users

#### GET
##### Summary

Search users.

##### Description

API to search existing users.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User information has been fetched successfully. | [AppUserResponseInfo](#appuserresponseinfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
***DEPRECATED***
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

### /v1/users/all

#### GET
##### Summary

Search users.

##### Description

API to search existing users.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User information has been fetched successfully. | [AppUserShortInfo](#appusershortinfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/basic-info

#### GET
##### Summary

Users count by application

##### Description

API to Get Users count by application

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| appName | query | appName | No | string |
| iamUserIds | query | iamUserIds | No | [ long ] |
| name | query | name | No | string |
| role | query | role | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Users count by application is fetched | [TenantInfo](#tenantinfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not able to fetch count by application |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/bulk-invite

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

### /v1/users/changepassword

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

### /v1/users/email

#### PUT
##### Summary

Update logged in mobile user email.

##### Description

API to update mobile user email.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userDto | body | userDto | Yes | [UserDto](#userdto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | User email has been updated successfully. |
| 201 | Created |
| 400 | User does not exist. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/exclude

#### POST
##### Summary

Fetch users excluding given ids

##### Description

API to fetch existing users excluding given ids

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |
| limit | query | limit | No | integer |
| page | query | page | No | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User information has been fetched successfully. | [ [UserShortInfo](#usershortinfo) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/iam/{id}

#### PATCH
##### Summary

Update user attributes.

##### Description

API to update attributes of existing user.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| user | body | user | Yes | object |

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

### /v1/users/ids

#### POST
##### Summary

Get users by list of ids.

##### Description

API to get users details by ids.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [UserShortInfo](#usershortinfo) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/info

#### POST
##### Summary

Get users nfo by list of ids.

##### Description

API to get users info by ids.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| ids | body | ids | Yes | [ long ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [UserShortInfo](#usershortinfo) ] |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/invite

#### POST
##### Summary

Invite a user to a tenant

##### Description

Invite a user to a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| inviteUserRequest | body | inviteUserRequest | Yes | [InviteUserRequest](#inviteuserrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User added to a tenant successfully | [UserDto](#userdto) |
| 201 | Created |  |
| 400 | User tenant mapping creation failed |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/mfa-disable

#### POST
##### Summary

Disable MFA for Users

##### Description

Disable MFA for Users

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| mfaDisableRequest | body | mfaDisableRequest | Yes | [MFADisableRequest](#mfadisablerequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Disable MFA for User successful | [AppUserResponseInfo](#appuserresponseinfo) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | User not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/registered/contacts

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
| 200 | Registered contacts list fetched successfully | [ [ContactAndEmail](#contactandemail) ] |
| 201 | Created |  |
| 400 | Failed to get registered user list |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Registered user list not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/registered/id

#### POST
##### Summary

Returns user id for a give email or contact

##### Description

Returns user id for a give email or contact

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| registeredUserRequest | body | registeredUserRequest | Yes | [RegisteredUserIdRequest](#registereduseridrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Registered contacts id fetched successfully | long |
| 201 | Created |  |
| 400 | Failed to get registered user detail |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Registered user not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/resetpassword

#### POST
##### Summary

Reset user password

##### Description

Reset user password

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| resetPasswordRequest | body | resetPasswordRequest | Yes | [ResetPasswordRequest](#resetpasswordrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Password reset successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | User not found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/roles

#### GET
##### Summary

Get logged-in user roles

##### Description

API to get logged-in user roles

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Role information has been fetched successfully. | [UserCache](#usercache) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | User does not exist. |  |
| 500 | Fail to get short code roles in all applications |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/roles/assign

#### POST
***DEPRECATED***
##### Summary

Assign Roles For Users

##### Description

Assign List of Role for Users

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| assignUserRoleRequest | body | assignUserRoleRequest | Yes | [AssignUserRoleRequest](#assignuserrolerequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Assign Roles for Users success. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | User not found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/roles/unassign

#### POST
***DEPRECATED***
##### Summary

Unassign roles for users

##### Description

Unassign roles for users

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| unAssignUserRoleRequest | body | unAssignUserRoleRequest | Yes | [UnAssignUserRoleRequest](#unassignuserrolerequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Unassigned roles for users successfully. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | User not found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/shops

#### GET
##### Summary

Validate user access for shops

##### Description

API to Validate user access for shops

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userId | query | userId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User has a shop associated with them | string |
| 401 | User don't have a shop associated with them |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/switchtenant

#### POST
##### Summary

Switch tenant for a loggedin user

##### Description

Switch tenant for a loggedin user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| switchTenantRequest | body | switchTenantRequest | Yes | [SwitchTenantRequest](#switchtenantrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Tenant switched successfully | [AuthenticationResultType](#authenticationresulttype) |
| 201 | Created |  |
| 400 | Failed to switch tenant |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | User not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/tenants

#### GET
##### Summary

Get user tenant mapping list.

##### Description

Get user tenant mapping list.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User tenant list fetched successfully | [ [UserTenantMappingResponse](#usertenantmappingresponse) ] |
| 400 | Failed to get User's tenant list. |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant list not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

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
| 400 | User tenant mapping creation failed |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Tenant not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### DELETE
##### Summary

Remove user from tenant

##### Description

Remove user from tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| delUserTenantMapRequest | body | delUserTenantMapRequest | Yes | [DelUserTenantMapRequest](#delusertenantmaprequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Tenant removed successfully |
| 204 | No Content |
| 400 | User tenant mapping deletion failed |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Tenant or User not found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/tenants-roles

#### DELETE
##### Summary

Remove user from tenant

##### Description

Remove user from tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| delUserTenantMapRequest | body | delUserTenantMapRequest | Yes | [DelUserTenantMapRequest](#delusertenantmaprequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Tenant removed successfully |
| 204 | No Content |
| 400 | User tenant mapping deletion failed |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Tenant or User not found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/update-invite

#### POST
##### Summary

Update Invite status for Bookkeeper Team/Client

##### Description

API to update Invite status for Bookkeeper Team/Client

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| user | body | user | Yes | [UserShortInfo](#usershortinfo) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Invite status updated successfully for user. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/update/info

#### POST
##### Summary

Assign Roles For Users

##### Description

Assign List of Role for Users

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userInfoWithRoles | body | userInfoWithRoles | Yes | [UpdateUserInfoWithRoles](#updateuserinfowithroles) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Assign Roles for Users success. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | User not found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/update/info-role

#### POST
##### Summary

Assign Roles For Users

##### Description

Assign List of Role for Users

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| updateUserInfoModuleRole | body | updateUserInfoModuleRole | Yes | [UpdateUserInfoModuleRole](#updateuserinfomodulerole) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Assign Roles for Users success. |
| 201 | Created |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | User not found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### PATCH
***DEPRECATED***
##### Summary

Assign Roles For Users

##### Description

Assign List of Role for Users

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| updateUserInfoModuleRole | body | updateUserInfoModuleRole | Yes | [UpdateUserInfoModuleRole](#updateuserinfomodulerole) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Assign Roles for Users success. |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | User not found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/user

#### GET
##### Summary

Get Users by tenant id.

##### Description

API to Get Users by tenant id.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User information has been fetched successfully. | [TenantInfo](#tenantinfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | User not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/user-ip

#### GET
##### Summary

Get Ip Address of User

##### Description

Api to get Ip Address of User

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tenantId | query | tenantId | Yes | long |
| userId | query | userId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Successfully fetched Ip Address | string |
| 401 | Not able to fetch Ip Address |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/userinfo

#### GET
##### Summary

Search users.

##### Description

API to search existing users.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| exclude_mfa | query | exclude_mfa | No | boolean |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User information has been fetched successfully. | [AppUserShortInfo](#appusershortinfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/userinfo/short

#### GET
##### Summary

Search users.

##### Description

API to search existing users.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User information has been fetched successfully. | [UserShortInfo](#usershortinfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/users/count

#### GET
##### Summary

Users count by application

##### Description

API to Get Users count by application

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| tenantId | query | tenantId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Users count by application is fetched | [TenantInfo](#tenantinfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not able to fetch count by application |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/usershortinfo

#### GET
##### Summary

Get users

##### Description

API to get users

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| search | query | search | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User information has been fetched successfully. | [AppUserShortInfo](#appusershortinfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/validate

#### GET
##### Summary

Validate user access for tenant

##### Description

API to Validate user access for tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userId | query | userId | Yes | long |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Tenant is authorized to access the user |
| 401 | Tenant is unauthorized to access the user |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/{id}

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

Update logged in mobile user email.

##### Description

API to update mobile user email.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |
| userDto | body | userDto | Yes | [UserDto](#userdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User email has been updated successfully. | [UserDto](#userdto) |
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
| user | body | user | Yes | object |

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
## affiliate-controller
Affiliate User Management

### /v1/users/affiliate/add-user

#### POST
##### Summary

Add user with roles tenant for an affiliated user

##### Description

Add user with roles tenant for an affiliated user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| userTenantMappingRequest | body | userTenantMappingRequest | Yes | [UserTenantRelCreationRequest](#usertenantrelcreationrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User added to tenant with affiliated user successfully | [UserDto](#userdto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Affiliate User info not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/affiliate/tenants-apps

#### GET
##### Summary

Get all tenant for an affiliated user

##### Description

Get all tenant for an affiliated user

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Affiliate User information has been fetched successfully. | [AffiliateTenantInfo](#affiliatetenantinfo) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Affiliate User info not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/affiliate/tenants-subscription/{id}

#### GET
##### Summary

Get a tenant's subscription details for an affiliated user

##### Description

Get a tenant's subscription details for an affiliated user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Affiliate User information has been fetched successfully. | [TenantSubscription](#tenantsubscription) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Affiliate User info not found |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## user-invitation-controller
Manage User Invitations

### /v1/users/books/invite

#### GET
##### Summary

Get all Invites and users for a tenant

##### Description

API to get all invites and users

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| appName | query | appName | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Invites and users has been fetched successfully. | [TenantInviteResponse](#tenantinviteresponse) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Unable to fetch all invites and users |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

#### POST
##### Summary

Invite a user

##### Description

API to invite a new user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| appInviteRequest | body | appInviteRequest | Yes | [AppInviteResponse](#appinviteresponse) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AppInviteResponse](#appinviteresponse) |
| 201 | User has been invited successfully. | [AppInviteResponse](#appinviteresponse) |
| 400 | User is already part of the organization or invite already sent |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |
| 500 | Unable to sent invite to user |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/books/invite/cancel/{id}

#### DELETE
##### Summary

Update Invite status

##### Description

API to update invite status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Invitation updated successfully. | [ResponseEntity](#responseentity) |
| 204 | No Content |  |
| 400 | Unable to update invitation |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 500 | Unable to update invitation |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/books/invite/code/{code}

#### PATCH
##### Summary

Update Invite status

##### Description

API to update invite status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Invitation updated successfully. | [AppInviteResponse](#appinviteresponse) |
| 204 | No Content |  |
| 400 | Unable to update invitation |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 500 | Unable to update invitation |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

### /v1/users/books/invite/resend/{id}

#### PATCH
##### Summary

Update Invite status

##### Description

API to update invite status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id | path | id | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Invitation updated successfully. | [AppInviteResponse](#appinviteresponse) |
| 204 | No Content |  |
| 400 | Unable to update invitation |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 500 | Unable to update invitation |  |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| Authorization | global |

---
## mobile-email-linking-controller
Mobile user Email link

### /v1/users/email/delink

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

### /v1/users/email/link

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

### /v1/users/email/regenerate

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

### /v1/users/email/verify

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

#### AffiliateTenantInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| applicationInfo | [ [ApplicationInfo](#applicationinfo) ] |  | No |
| country | string |  | No |
| currency | string |  | No |
| isDemoOrg | boolean |  | No |
| name | string |  | No |
| tenantId | long |  | No |

#### AppInvite

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string |  | No |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| deleted | boolean |  | No |
| email | string |  | No |
| gdprMigrated | boolean |  | No |
| id | long |  | No |
| inviteCode | string |  | No |
| inviteCount | integer |  | No |
| inviterToken | string |  | No |
| role | string |  | No |
| status | string |  | No |
| tenantId | long |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |

#### AppInviteResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Application Name<br/>*Example:* `"ERP"` | No |
| email | string | Email of the user.<br/>*Example:* `"abc@gmail.com"` | No |
| firstName | string | User first name<br/>*Example:* `"John"` | No |
| iamUserId | long | Iam User Id<br/>*Example:* `1234` | No |
| id | long | Invitation ID<br/>*Example:* `1` | No |
| inviteCode | string | Unique Invitation Code<br/>*Example:* `"3609848a-394a-41c6-817f-c81e362881ed"` | No |
| inviterToken | string | Inviter Token<br/>*Example:* `"token"` | No |
| lastName | string | User last name<br/>*Example:* `"Doe"` | No |
| role | string | Assigned role to the user.<br/>*Example:* `"business"` | No |
| status | string | Invitation Sttaus<br/>*Example:* `"SENT"` | No |
| tenantId | long | Tenant Id<br/>*Example:* `1234` | No |
| userId | long | Tenant User Id<br/>*Example:* `1234` | No |
| userName | string | username<br/>*Example:* `"john.doe@deskera.com"` | No |

#### AppPermissionRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | APP Name<br/>*Example:* `"ERP"` | No |
| moduleUuids | [ string ] | List of module UUID | No |
| rgShortCode | string | Role Group Short Code<br/>*Example:* `"business"` | No |

#### AppPermissionResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | APP Name<br/>*Example:* `"ERP"` | No |
| moduleUuids | [ string ] | List of module UUID | No |
| modules | [ [ModuleDto](#moduledto) ] | List of module | No |
| rgShortCode | string | Role Group Short Code<br/>*Example:* `"business"` | No |
| roleGroup | [RoleGroupDto](#rolegroupdto) | Role group details | No |

#### AppRoleInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Application Name<br/>*Enum:* `"CONSOLE"`, `"ERP"`, `"ORGANISATION"`, `"ATTENDANCE"`, `"EXPENSE"`, `"CRM"`, `"PEOPLE"`, `"CHAT"`, `"ALL"`, `"REPORT_BUILDER"`, `"SHOP"`, `"WORKFLOW_ENGINE"`, `"CRM_PLUS"`, `"MRP"`<br/>*Example:* `"ERP"` | No |
| role | string | Role<br/>*Example:* `"admin"` | No |

#### AppUserBasicInfoDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string |  | No |
| deleted | boolean |  | No |
| email | string |  | No |
| firstName | string |  | No |
| lastName | string |  | No |

#### AppUserCountTuple

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| applicationName | string | *Enum:* `"CONSOLE"`, `"ERP"`, `"ORGANISATION"`, `"ATTENDANCE"`, `"EXPENSE"`, `"CRM"`, `"PEOPLE"`, `"CHAT"`, `"ALL"`, `"REPORT_BUILDER"`, `"SHOP"`, `"WORKFLOW_ENGINE"`, `"CRM_PLUS"`, `"MRP"` | No |
| userCount | integer |  | No |

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
| moduleUuids | [ string ] | List of module UUID | No |
| organizationName | string | Pass organization name if you want to create org without setup<br/>*Example:* `"Deskera"` | No |
| password | string | Password<br/>*Example:* `"**********"` | No |
| roleGroup | string | Role Group<br/>*Example:* `"admin"` | No |
| shouldSendEmail | boolean | flag to send email or not<br/>*Example:* `true` | No |
| socialAuth | string | Needed, if user is signing up via social login<br/>*Example:* `"GOOGLE"` | No |
| source | string | Registration source DESKERA/SHOPIFY<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"Deskera"` | No |

#### AppUserMapping

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string |  | No |
| email | string |  | No |
| firstName | string |  | No |
| isGuest | boolean |  | No |
| lastName | string |  | No |
| role | string |  | No |
| userId | long |  | No |

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
| iamUserId | long | Iam User Id<br/>*Example:* `1` | No |
| id | long | Primary Key<br/>*Example:* `1` | No |
| isEmailVerified | boolean | Email is verified or not. | No |
| isMFAEnabled | boolean | MFA Enable status. | No |
| lastName | string | User Last Name<br/>*Example:* `"Doe"` | No |
| profileUrl | string | User profile image path.<br/>*Example:* `"http://deskera.com/user/myprofile.png"` | No |
| socialAuth | string | social auth<br/>*Example:* `"auth"` | No |
| status | string | Status like Active/ InActive<br/>*Example:* `"active"` | No |
| tenantId | long | Tenant Id<br/>*Example:* `1` | No |
| tenantName | string | Tenant Name<br/>*Example:* `"Sample Tenant"` | No |
| userName | string | User Name<br/>*Example:* `"jsmith@example.com"` | No |

#### AppUserRoleInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Application Name<br/>*Enum:* `"CONSOLE"`, `"ERP"`, `"ORGANISATION"`, `"ATTENDANCE"`, `"EXPENSE"`, `"CRM"`, `"PEOPLE"`, `"CHAT"`, `"ALL"`, `"REPORT_BUILDER"`, `"SHOP"`, `"WORKFLOW_ENGINE"`, `"CRM_PLUS"`, `"MRP"`<br/>*Example:* `"ERP"` | No |
| permissions | [RolePermissionInfo](#rolepermissioninfo) | Role Permissions | No |
| roleGroup | string | Role Group<br/>*Example:* `"admin"` | No |
| roleShortCode | string | Role Short Code<br/>*Example:* `"console_user_r"` | No |
| tenantId | long | Tenant ID<br/>*Example:* `12` | No |

#### AppUserRoleXref

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | *Enum:* `"CONSOLE"`, `"ERP"`, `"ORGANISATION"`, `"ATTENDANCE"`, `"EXPENSE"`, `"CRM"`, `"PEOPLE"`, `"CHAT"`, `"ALL"`, `"REPORT_BUILDER"`, `"SHOP"`, `"WORKFLOW_ENGINE"`, `"CRM_PLUS"`, `"MRP"` | No |
| appUser | [User](#user) |  | No |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| deleted | boolean |  | No |
| id | long |  | No |
| role | [Role](#role) |  | No |
| roleGroup | [RoleGroup](#rolegroup) |  | No |
| tenantId | long |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |
| userId | long |  | No |

#### AppUserRolesCreateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Application name<br/>*Example:* `"ERP"` | No |
| moduleUuids | [ string ] | List of module UUID | No |
| roleGroup | string | Role Group<br/>*Example:* `"admin"` | No |

#### AppUserShortInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appUserRoleXrefs | [ [AppUserRoleInfo](#appuserroleinfo) ] | User Roles | No |
| contact | string | User Contact<br/>*Example:* `12345678` | No |
| currency | string | Tenant Currency<br/>*Example:* `"SGD"` | No |
| deleted | boolean | Delete Flag<br/>*Example:* `false` | No |
| email | string | User email<br/>*Example:* `"jsmith@example.com"` | No |
| firstName | string | User First Name<br/>*Example:* `"John"` | No |
| genderLookUpCode | string | Gender<br/>*Example:* `"Mr."` | No |
| id | long | Primary Key<br/>*Example:* `1` | No |
| lastName | string | User Last Name<br/>*Example:* `"Doe"` | No |
| profileUrl | string | User profile image path.<br/>*Example:* `"http://deskera.com/user/myprofile.png"` | No |
| status | string | Status like Active/ InActive<br/>*Example:* `"active"` | No |
| tenantId | long | Tenant Id<br/>*Example:* `1` | No |
| tenantName | string | Tenant Name<br/>*Example:* `"name"` | No |
| userName | string | User Name<br/>*Example:* `"jsmith@example.com"` | No |
| userTenants | object | User Tenants | No |

#### ApplicationInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | *Enum:* `"CONSOLE"`, `"ERP"`, `"ORGANISATION"`, `"ATTENDANCE"`, `"EXPENSE"`, `"CRM"`, `"PEOPLE"`, `"CHAT"`, `"ALL"`, `"REPORT_BUILDER"`, `"SHOP"`, `"WORKFLOW_ENGINE"`, `"CRM_PLUS"`, `"MRP"` | No |
| appUserXref | [ [AppUserMapping](#appusermapping) ] |  | No |

#### AppsCustomizationRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| application | string |  | No |
| config | object |  | No |
| customLabels | [CustomLabels](#customlabels) |  | No |
| hiddenApps | string |  | No |
| hideKredxInfo | boolean |  | No |
| isResetCustomLabels | boolean |  | No |
| isResetHiddenApps | boolean |  | No |
| onBoardingSetting | [OnBoardingSetting](#onboardingsetting) |  | No |
| prefillDocumentData | [PrefillDocumentData](#prefilldocumentdata) |  | No |
| userLanguage | [UserLanguageDto](#userlanguagedto) |  | No |

#### AppsCustomizationResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| application | string |  | No |
| config | object |  | No |
| customLabels | [CustomLabels](#customlabels) |  | No |
| hiddenApps | string |  | No |
| hideKredxInfo | boolean |  | No |
| onBoardingSetting | [OnBoardingSetting](#onboardingsetting) |  | No |
| prefillDocumentData | [PrefillDocumentData](#prefilldocumentdata) |  | No |
| tenantId | long |  | No |
| userId | long |  | No |
| userLanguage | [UserLanguageDto](#userlanguagedto) |  | No |

#### AssignUserRoleRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Application name<br/>*Example:* `"ERP"` | Yes |
| clientTenantId | long | client tenantId<br/>*Example:* `1234` | No |
| iamUserIds | [ long ] | List of iamUserIds of users<br/>*Example:* `[4,11,12]` | No |
| isClient | boolean | If assign role is for client<br/>*Example:* `false` | No |
| roleGroup | [ string ] | Role Group short code<br/>*Example:* `["accounting","business"]` | Yes |
| userIds | [ long ] | List users assign<br/>*Example:* `[4,11,12]` | Yes |

#### AuthApplicationCreateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string | Contact Number<br/>*Example:* `"contact"` | No |
| idToken | string | Google id token<br/>*Example:* `"idToken"` | No |

#### AuthenticationResultType

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accessToken | string |  | No |
| expiresIn | integer |  | No |
| idToken | string |  | No |
| newDeviceMetadata | [NewDeviceMetadataType](#newdevicemetadatatype) |  | No |
| refreshToken | string |  | No |
| tokenType | string |  | No |

#### BookkeeperClientInvite

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bookkeeper | boolean |  | No |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| deleted | boolean |  | No |
| email | string |  | No |
| gdprMigrated | boolean |  | No |
| id | long |  | No |
| status | string | *Enum:* `"INVALID"`, `"ACCEPTED"`, `"REJECTED"`, `"ACTIVE"`, `"INACTIVE"`, `"INVITED"` | No |
| tenantId | long |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |
| userTenantMapping | [UserTenantMapping](#usertenantmapping) |  | No |

#### BookkeeperClientPayment

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bookkeeperPays | boolean | True if bookkeeper pays, False if client pays<br/>*Example:* `true` | No |

#### BookkeeperClientRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| clientDefaultUserId | long | UserId of default client user.<br/>*Example:* `1` | No |
| clientTenantId | long | Tenant id of client.<br/>*Example:* `1` | No |
| orgSignUpRequest | [OrgSignUpRequest](#orgsignuprequest) | organization complete signup | No |
| teamInfo | [ [BookkeeperTeamInfo](#bookkeeperteaminfo) ] | List of Bookkeepers to have access to this client | No |
| webSignupRequest | [WebSignupRequest](#websignuprequest) | web signup request | No |

#### BookkeeperClientRequestAustralia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| clientDefaultUserId | long | UserId of default client user.<br/>*Example:* `1` | No |
| clientTenantId | long | Tenant id of client.<br/>*Example:* `1` | No |
| orgSignUpRequest | [OrgSignUpRequestAustralia](#orgsignuprequestaustralia) | organization complete signup | No |
| teamInfo | [ [BookkeeperTeamInfo](#bookkeeperteaminfo) ] | List of Bookkeepers to have access to this client | No |
| webSignupRequest | [WebSignupRequest](#websignuprequest) | web signup request | No |

#### BookkeeperClientRequestBelgium

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| clientDefaultUserId | long | UserId of default client user.<br/>*Example:* `1` | No |
| clientTenantId | long | Tenant id of client.<br/>*Example:* `1` | No |
| orgSignUpRequest | [OrgSignUpRequestBelgium](#orgsignuprequestbelgium) | organization complete signup | No |
| teamInfo | [ [BookkeeperTeamInfo](#bookkeeperteaminfo) ] | List of Bookkeepers to have access to this client | No |
| webSignupRequest | [WebSignupRequest](#websignuprequest) | web signup request | No |

#### BookkeeperClientRequestCanada

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| clientDefaultUserId | long | UserId of default client user.<br/>*Example:* `1` | No |
| clientTenantId | long | Tenant id of client.<br/>*Example:* `1` | No |
| orgSignUpRequest | [OrgSignUpRequestCanada](#orgsignuprequestcanada) | organization complete signup | No |
| teamInfo | [ [BookkeeperTeamInfo](#bookkeeperteaminfo) ] | List of Bookkeepers to have access to this client | No |
| webSignupRequest | [WebSignupRequest](#websignuprequest) | web signup request | No |

#### BookkeeperClientRequestGermany

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| clientDefaultUserId | long | UserId of default client user.<br/>*Example:* `1` | No |
| clientTenantId | long | Tenant id of client.<br/>*Example:* `1` | No |
| orgSignUpRequest | [OrgSignUpRequestGermany](#orgsignuprequestgermany) | organization complete signup | No |
| teamInfo | [ [BookkeeperTeamInfo](#bookkeeperteaminfo) ] | List of Bookkeepers to have access to this client | No |
| webSignupRequest | [WebSignupRequest](#websignuprequest) | web signup request | No |

#### BookkeeperClientRequestIndia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| clientDefaultUserId | long | UserId of default client user.<br/>*Example:* `1` | No |
| clientTenantId | long | Tenant id of client.<br/>*Example:* `1` | No |
| orgSignUpRequest | [OrgSignUpRequestIndia](#orgsignuprequestindia) | organization complete signup | No |
| teamInfo | [ [BookkeeperTeamInfo](#bookkeeperteaminfo) ] | List of Bookkeepers to have access to this client | No |
| webSignupRequest | [WebSignupRequest](#websignuprequest) | web signup request | No |

#### BookkeeperClientRequestIndonesia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| clientDefaultUserId | long | UserId of default client user.<br/>*Example:* `1` | No |
| clientTenantId | long | Tenant id of client.<br/>*Example:* `1` | No |
| orgSignUpRequest | [OrgSignUpRequestIndonesia](#orgsignuprequestindonesia) | organization complete signup | No |
| teamInfo | [ [BookkeeperTeamInfo](#bookkeeperteaminfo) ] | List of Bookkeepers to have access to this client | No |
| webSignupRequest | [WebSignupRequest](#websignuprequest) | web signup request | No |

#### BookkeeperClientRequestIsrael

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| clientDefaultUserId | long | UserId of default client user.<br/>*Example:* `1` | No |
| clientTenantId | long | Tenant id of client.<br/>*Example:* `1` | No |
| orgSignUpRequest | [OrgSignUpRequestIsrael](#orgsignuprequestisrael) | organization complete signup | No |
| teamInfo | [ [BookkeeperTeamInfo](#bookkeeperteaminfo) ] | List of Bookkeepers to have access to this client | No |
| webSignupRequest | [WebSignupRequest](#websignuprequest) | web signup request | No |

#### BookkeeperClientRequestMalaysia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| clientDefaultUserId | long | UserId of default client user.<br/>*Example:* `1` | No |
| clientTenantId | long | Tenant id of client.<br/>*Example:* `1` | No |
| orgSignUpRequest | [OrgSignUpRequestMalaysia](#orgsignuprequestmalaysia) | organization complete signup | No |
| teamInfo | [ [BookkeeperTeamInfo](#bookkeeperteaminfo) ] | List of Bookkeepers to have access to this client | No |
| webSignupRequest | [WebSignupRequest](#websignuprequest) | web signup request | No |

#### BookkeeperClientRequestNL

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| clientDefaultUserId | long | UserId of default client user.<br/>*Example:* `1` | No |
| clientTenantId | long | Tenant id of client.<br/>*Example:* `1` | No |
| orgSignUpRequest | [OrgSignUpRequestNL](#orgsignuprequestnl) | organization complete signup | No |
| teamInfo | [ [BookkeeperTeamInfo](#bookkeeperteaminfo) ] | List of Bookkeepers to have access to this client | No |
| webSignupRequest | [WebSignupRequest](#websignuprequest) | web signup request | No |

#### BookkeeperClientRequestNZ

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| clientDefaultUserId | long | UserId of default client user.<br/>*Example:* `1` | No |
| clientTenantId | long | Tenant id of client.<br/>*Example:* `1` | No |
| orgSignUpRequest | [OrgSignUpRequestNZ](#orgsignuprequestnz) | organization complete signup | No |
| teamInfo | [ [BookkeeperTeamInfo](#bookkeeperteaminfo) ] | List of Bookkeepers to have access to this client | No |
| webSignupRequest | [WebSignupRequest](#websignuprequest) | web signup request | No |

#### BookkeeperClientRequestPhilippines

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| clientDefaultUserId | long | UserId of default client user.<br/>*Example:* `1` | No |
| clientTenantId | long | Tenant id of client.<br/>*Example:* `1` | No |
| orgSignUpRequest | [OrgSignUpRequestPhilippines](#orgsignuprequestphilippines) | organization complete signup | No |
| teamInfo | [ [BookkeeperTeamInfo](#bookkeeperteaminfo) ] | List of Bookkeepers to have access to this client | No |
| webSignupRequest | [WebSignupRequest](#websignuprequest) | web signup request | No |

#### BookkeeperClientRequestSA

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| clientDefaultUserId | long | UserId of default client user.<br/>*Example:* `1` | No |
| clientTenantId | long | Tenant id of client.<br/>*Example:* `1` | No |
| orgSignUpRequest | [OrgSignUpRequestSA](#orgsignuprequestsa) | organization complete signup | No |
| teamInfo | [ [BookkeeperTeamInfo](#bookkeeperteaminfo) ] | List of Bookkeepers to have access to this client | No |
| webSignupRequest | [WebSignupRequest](#websignuprequest) | web signup request | No |

#### BookkeeperClientRequestUAE

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| clientDefaultUserId | long | UserId of default client user.<br/>*Example:* `1` | No |
| clientTenantId | long | Tenant id of client.<br/>*Example:* `1` | No |
| orgSignUpRequest | [OrgSignUpRequestUAE](#orgsignuprequestuae) | organization complete signup | No |
| teamInfo | [ [BookkeeperTeamInfo](#bookkeeperteaminfo) ] | List of Bookkeepers to have access to this client | No |
| webSignupRequest | [WebSignupRequest](#websignuprequest) | web signup request | No |

#### BookkeeperClientRequestUK

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| clientDefaultUserId | long | UserId of default client user.<br/>*Example:* `1` | No |
| clientTenantId | long | Tenant id of client.<br/>*Example:* `1` | No |
| orgSignUpRequest | [OrgSignUpRequestUK](#orgsignuprequestuk) | organization complete signup | No |
| teamInfo | [ [BookkeeperTeamInfo](#bookkeeperteaminfo) ] | List of Bookkeepers to have access to this client | No |
| webSignupRequest | [WebSignupRequest](#websignuprequest) | web signup request | No |

#### BookkeeperInviteResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bookkeeperId | long | bookkeeperId<br/>*Example:* `1` | No |
| email | string | User email<br/>*Example:* `"jsmith@example.com"` | No |
| status | string | Status of invite email<br/>*Enum:* `"FAIL"`, `"SUCCESS"`<br/>*Example:* `"FAIL/SUCCESS"` | No |

#### BookkeeperNotifyRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| currency | string | Currency code.<br/>*Example:* `"SGD"` | No |
| periodicity | string | Monthly billing or yearly billing: MONTHLY or YEARLY.<br/>*Example:* `"YEARLY"` | No |
| planName | string | Name of the plan upgrade requested: START UP, ESSENTIAL or PROFESSIONAL.<br/>*Example:* `"PROFESSIONAL"` | No |
| planRate | number | Rate of the plan.<br/>*Example:* `239` | No |

#### BookkeeperTeam

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bookkeeperTenantId | long |  | No |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| defaultUser | boolean |  | No |
| deleted | boolean |  | No |
| id | long |  | No |
| manageClient | boolean |  | No |
| status | string | *Enum:* `"INVALID"`, `"ACCEPTED"`, `"REJECTED"`, `"ACTIVE"`, `"INACTIVE"`, `"INVITED"` | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |
| userTenantMapping | [UserTenantMapping](#usertenantmapping) |  | No |

#### BookkeeperTeamInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bkTeamId | long |  | No |
| bookkeeperPays | boolean |  | No |
| clientTenantId | long |  | No |
| contact | string |  | No |
| email | string |  | No |
| firstName | string |  | No |
| fullName | string |  | No |
| id | long |  | No |
| inviteId | long |  | No |
| invitedByClient | boolean |  | No |
| isDefaultUser | boolean |  | No |
| lastName | string |  | No |
| manageClient | boolean |  | No |
| organizationName | string |  | No |
| roleGroups | string |  | No |
| roleNames | string |  | No |
| status | string |  | No |
| switchStatusAllowed | boolean |  | No |
| tenantId | long |  | No |
| userId | long |  | No |
| userName | string |  | No |

#### BulkAddUserResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failure | [ [IAMUserDto](#iamuserdto) ] |  | No |
| success | [ [IAMUserDto](#iamuserdto) ] |  | No |

#### Callable«ResponseEntity»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Callable«ResponseEntity» | object |  |  |

#### CancelSubscriptionRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Amount<br/>*Example:* `99` | No |
| clientTenantId | long | Tenant id of Client<br/>*Example:* `1234` | No |
| clientUserId | long | User id of Client<br/>*Example:* `5678` | No |
| currency | string | Currency<br/>*Example:* `"usd"` | No |
| interval | string | Billing interval<br/>*Example:* `"monthly"` | No |
| planId | string | Plan Id<br/>*Example:* `"plan_jeXS4RxX"` | No |
| planName | string | Plan Name<br/>*Example:* `"Essential"` | No |
| trialDays | integer | Number of trial days<br/>*Example:* `30` | No |

#### ChangeNameDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| email | string | email of user<br/>*Example:* `"ram@gamil.com"` | No |
| firstName | string | modified first name<br/>*Example:* `"ram"` | No |
| lastName | string | modified last name<br/>*Example:* `"kumar"` | No |

#### ConfirmForgotPassRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| confirmationCode | string | Confirmation code received through SMS<br/>*Example:* `123456` | Yes |
| password | string | Password to signin<br/>*Example:* `"abcd@123"` | Yes |
| userName | string | Username<br/>*Example:* `"+65-1234-5678"` | Yes |

#### ContactAndEmail

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string |  | No |
| email | string |  | No |

#### ContactCheckRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string | Contact number<br/>*Example:* `"+919999999"` | Yes |

#### CustomLabels

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| customLabelPair | object |  | No |

#### DelUserTenantMapRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userId | long | User ID<br/>*Example:* `1` | No |

#### EmailChangeDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| newEmail | string | Newly added email<br/>*Example:* `"New email"` | No |
| oldEmail | string | Email to be replaced<br/>*Example:* `"Old email"` | No |

#### EmailLinkRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| confirmationCode | string | Confirmation code received through Email<br/>*Example:* `123456` | Yes |
| password | string | Password to signin<br/>*Example:* `"abcd@123"` | Yes |

#### FlatRatePercentageListUK

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| applyFrom | dateTime | Apply Date<br/>*Example:* `"01-01-2020"` | No |
| flatRatePercentage | number | Flat Rate Percentage<br/>*Example:* `7.3` | No |

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

#### InviteBookKeeperRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| emailId | [ string ] | Bookkeepers emails to be invited | No |

#### InviteBookkeeperByIdsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bookkeeperIds | [ long ] | Bookkeeper id | No |

#### InviteBulkUserRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Deskera Application Name<br/>*Example:* `"ORGANISATION"` | Yes |
| contact | string | Contact No<br/>*Example:* `"+65 1245678"` | Yes |
| email | string | User email<br/>*Example:* `"nguyen.tuan_123@deskera.com"` | Yes |
| firstName | string | user first name<br/>*Example:* `"John"` | Yes |
| lastName | string | User last name<br/>*Example:* `"Doe"` | Yes |
| roleGroup | string | Deskera Roles<br/>*Example:* `"org_admin"` | Yes |
| username | string | Username or Email or Contact Number of User<br/>*Example:* `"example@domain.com"` | Yes |

#### InviteUserRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Deskera Application Name<br/>*Example:* `"ORGANISATION"` | Yes |
| contact | string | Contact No<br/>*Example:* `"+65 1245678"` | Yes |
| firstName | string | user first name<br/>*Example:* `"John"` | Yes |
| lastName | string | User last name<br/>*Example:* `"Doe"` | Yes |
| roleGroup | string | Deskera Roles<br/>*Example:* `"org_admin"` | Yes |
| username | string | Username or Email or Contact Number of User<br/>*Example:* `"example@domain.com"` | Yes |

#### LandedCostCategory

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allocationType | string | *Enum:* `"QUANTITY"`, `"VALUE"`, `"WEIGHT"`, `"MANUAL"`, `"CUSTOM_DUTY"` | No |
| name | string |  | No |

#### LandedCostSettings

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| categoryList | [ [LandedCostCategory](#landedcostcategory) ] |  | No |
| landedCost | boolean |  | No |

#### Limit

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fixed | long |  | No |
| monthly | long |  | No |

#### MFADisableRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userIds | [ long ] | List of users for whom to disable MFA<br/>*Example:* `[1,2,3]` | Yes |

#### Map«string,Limit»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Map«string,Limit» | object |  |  |

#### Map«string,string»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Map«string,string» | object |  |  |

#### MergeAccountDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| currentUserId | long | IAM user id of current account<br/>*Example:* `2` | Yes |
| isMobile | boolean | True if account being merged is mobile account.<br/>*Example:* `true` | Yes |
| mergedUserId | long | IAM user id of account to be merged<br/>*Example:* `1` | Yes |

#### MobileSignInRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| phoneNumber | string | Phone Number<br/>*Example:* `"+65-1234-5678"` | Yes |

#### MobileSignupRequestWithOrg

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string | User Contact Number<br/>*Example:* `12345678` | No |
| firstName | string | User First Name<br/>*Example:* `"John"` | No |
| iamUserId | long | IAM app_user id<br/>*Example:* `12` | No |
| lastName | string | User Last Name<br/>*Example:* `"Doe"` | No |
| organizationName | string | Pass organization name if you want to create org without setup<br/>*Example:* `"Deskera"` | No |
| shouldSendEmail | boolean | flag to send email or not<br/>*Example:* `true` | No |

#### MobileVerifySignInRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| phoneNumber | string | Phone number<br/>*Example:* `"+65-1234-5678"` | Yes |
| session | string | Cognito session received on signup<br/>*Example:* `"eyJjdHkiOiJKV1QiLCJlbmMiOiJ.."` | Yes |
| verificationCode | string | Verification code received on contact no<br/>*Example:* `12345` | Yes |

#### ModuleDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accessLevel | string | Access Level<br/>*Example:* `"r"` | No |
| active | boolean | Is Module Active?<br/>*Example:* `true` | No |
| appName | string | APP Name<br/>*Example:* `"ERP"` | No |
| code | string | Module Code<br/>*Example:* `"m_erp_product"` | No |
| description | string | Module Description<br/>*Example:* `"Invoice Read Permission"` | No |
| groupName | string | Module Group Name<br/>*Example:* `"product"` | No |
| isDefault | boolean | isDefault?<br/>*Example:* `false` | No |
| name | string | Module Name<br/>*Example:* `"Invoice"` | No |
| sequence | long | Module Group Sequence<br/>*Example:* `0` | No |
| uuid | string | UUID<br/>*Example:* `"1xdz...."` | No |
| visible | boolean | can display module in UI?<br/>*Example:* `false` | No |

#### ModuleResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| group | string | Module Group<br/>*Example:* `"erp_product"` | No |
| modules | [ [ModuleDto](#moduledto) ] | Module associated with role group | No |
| sequence | long | Module Group Sequence<br/>*Example:* `0` | No |

#### NewDeviceMetadataType

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| deviceGroupKey | string |  | No |
| deviceKey | string |  | No |

#### NewTokenRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| refreshToken | string | Refresh token<br/>*Example:* `"eyJjdHkiOiJKV1QiLCJlbmMiOiJ.."` | Yes |
| userName | string | Username<br/>*Example:* `"+65-1234-5678"` | Yes |

#### OAuthAccountVerifyRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| deskeraToken | string | Deskera Token<br/>*Example:* `"QWE11232s"` | Yes |
| tenantId | long | Tenant Id<br/>*Example:* `1` | Yes |
| userId | long | User Id<br/>*Example:* `101` | Yes |

#### OnBoardingSetting

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| digitalProducts | boolean |  | No |
| inventory | boolean |  | No |
| services | boolean |  | No |
| showGettingStarted | boolean |  | No |

#### OnboardingStatusInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| abortZeroStateDashboard | boolean | Aborting zero state dashboard<br/>*Example:* `true` | No |
| accountingMethod | string | Accounting method used by user.<br/>*Enum:* `"ACCRUAL"`, `"CASH"`<br/>*Example:* `"ACCRUAL"` | No |
| addTaxCheck | boolean | true<br/>*Example:* `true` | No |
| appInstallChecked | boolean | true<br/>*Example:* `true` | No |
| bankChecked | boolean | true<br/>*Example:* `true` | No |
| companyAddressChecked | boolean | true<br/>*Example:* `true` | No |
| contactChecked | boolean | true<br/>*Example:* `true` | No |
| customFieldsChecked | boolean | Is custom fields option checked.<br/>*Example:* `true` | No |
| designTemplateChecked | boolean | Will user use design template feature<br/>*Example:* `true` | No |
| isComplianceSaved | boolean | true<br/>*Example:* `true` | No |
| multiCurrencyChecked | boolean | Has user enabled multi-currency<br/>*Example:* `true` | No |
| openingBalanceChecked | boolean | true<br/>*Example:* `true` | No |
| organisationSettingsChecked | boolean | Organisation settings option checked.<br/>*Example:* `true` | No |
| paymentServiceChecked | boolean | Payment approved by user.<br/>*Example:* `true` | No |
| productChecked | boolean | true<br/>*Example:* `true` | No |
| setupImportStatus | string | Organization import setup status<br/>*Enum:* `"SKIP"`, `"DONE"`, `"PENDING"`<br/>*Example:* `"SKIP"` | No |
| setupInvoiceStatus | string | Organization invoice setup status<br/>*Enum:* `"SKIP"`, `"DONE"`, `"PENDING"`<br/>*Example:* `"DONE"` | No |
| sgEInvoiceChecked | boolean | Is SG EInvoice Checked<br/>*Example:* `false` | No |
| updateTaxComplianceCheck | boolean | true<br/>*Example:* `true` | No |

#### OrgSignUpRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [Address](#address) | Billing Address | No |
| bookBeginningStartDate | string | Book Beginning Start Date<br/>*Example:* `"01-04-2019"` | Yes |
| completeOrgSetup | boolean | Whether to setup complete org or not?<br/>*Example:* `true` | No |
| countryLookupCode | string | Country code<br/>*Example:* `"SG"` | Yes |
| currencyLookUpCode | string | Base Currency code<br/>*Example:* `"SGD"` | Yes |
| dateFormatLookUpCode | string | Date Format code<br/>*Example:* `"dd-mm-yyyy"` | Yes |
| decimalScale | integer | Decimal scale for amounts for Org<br/>*Example:* `3` | No |
| financialStartDate | string | Financial Year Start Date<br/>*Example:* `"01-01-2019"` | Yes |
| fyClosingPeriodEndDate | string | Closing Period End date<br/>*Example:* `"01-04-2019"` | No |
| gstNo | string | Organization GST Reg No.<br/>*Example:* `"M91234567X"` | No |
| gstRegistered | boolean | Whether the business is registered to GST or not.<br/>*Example:* `true` | No |
| industry | string | Org Industry<br/>*Example:* `"Shipping"` | No |
| isBookkeeper | boolean | Flag to indicate if organization is book keeper organization<br/>*Example:* `true` | No |
| isPartner | boolean | Flag to indicate if organization is partner book keeper organization<br/>*Example:* `true` | No |
| isShop | boolean | Flag to indicate if tenant is linked to a shop<br/>*Example:* `true` | No |
| logoUrl | string | Company Logo URL | No |
| multicurrency | boolean | Flag to enable multicurrency<br/>*Example:* `true` | No |
| nexus | string | List of nexus states<br/>*Example:* `"nexusStates"` | No |
| numberFormat | string | Number format for amounts for Org<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"`<br/>*Example:* `"us"` | No |
| peppolId | string | PeppolId<br/>*Example:* `"0195:SGUEN123456"` | No |
| peppolOptIn | string | Peppol opt-in flag<br/>*Example:* `false` | No |
| purpose | string | Org Main Task<br/>*Example:* `"Accounting"` | No |
| refreshToken | string | Refresh Token<br/>*Example:* `"refreshToken"` | No |
| shippingAddress | [Address](#address) | Shipping Address | No |
| size | string | Org Size<br/>*Example:* `"10-15"` | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"DESKERA"` | No |
| tenantName | string | Tenant name<br/>*Example:* `"Deskera"` | Yes |
| timezoneLookUpCode | string | Timezone code<br/>*Example:* `"TZ001"` | No |
| uenNo | string | Organization UEN No.<br/>*Example:* `"200312345A"` | No |
| userId | long | User Id<br/>*Example:* `1` | Yes |
| vendorId | string | vendorId<br/>*Example:* `12345` | No |

#### OrgSignUpRequestAustralia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| australianBusinessNo | string | Australian Business Number (ABN).<br/>*Example:* `123456789098765` | No |
| basReportingMethod | string | BAS Reporting Method (SIMPLER / FULL)<br/>*Enum:* `"SIMPLER"`, `"FULL"`<br/>*Example:* `"SIMPLER"` | No |
| billingAddress | [Address](#address) | Billing Address | No |
| bookBeginningStartDate | string | Book Beginning Start Date<br/>*Example:* `"01-04-2019"` | Yes |
| completeOrgSetup | boolean | Whether to setup complete org or not?<br/>*Example:* `true` | No |
| countryLookupCode | string | Country code<br/>*Example:* `"SG"` | Yes |
| currencyLookUpCode | string | Base Currency code<br/>*Example:* `"SGD"` | Yes |
| dateFormatLookUpCode | string | Date Format code<br/>*Example:* `"dd-mm-yyyy"` | Yes |
| decimalScale | integer | Decimal scale for amounts for Org<br/>*Example:* `3` | No |
| financialStartDate | string | Financial Year Start Date<br/>*Example:* `"01-01-2019"` | Yes |
| fyClosingPeriodEndDate | string | Closing Period End date<br/>*Example:* `"01-04-2019"` | No |
| gstRegistered | boolean | Whether the business is registered to GST or not.<br/>*Example:* `true` | No |
| industry | string | Org Industry<br/>*Example:* `"Shipping"` | No |
| isBookkeeper | boolean | Flag to indicate if organization is book keeper organization<br/>*Example:* `true` | No |
| isPartner | boolean | Flag to indicate if organization is partner book keeper organization<br/>*Example:* `true` | No |
| isShop | boolean | Flag to indicate if tenant is linked to a shop<br/>*Example:* `true` | No |
| logoUrl | string | Company Logo URL | No |
| multicurrency | boolean | Flag to enable multicurrency<br/>*Example:* `true` | No |
| numberFormat | string | Number format for amounts for Org<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"`<br/>*Example:* `"us"` | No |
| peppolId | string | PeppolId<br/>*Example:* `"0195:SGUEN123456"` | No |
| peppolOptIn | string | Peppol opt-in flag<br/>*Example:* `false` | No |
| purpose | string | Org Main Task<br/>*Example:* `"Accounting"` | No |
| refreshToken | string | Refresh Token<br/>*Example:* `"refreshToken"` | No |
| shippingAddress | [Address](#address) | Shipping Address | No |
| size | string | Org Size<br/>*Example:* `"10-15"` | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"DESKERA"` | No |
| taxFileNumber | string | Tax File Number<br/>*Example:* `123456789098765` | No |
| tenantName | string | Tenant name<br/>*Example:* `"Deskera"` | Yes |
| timezoneLookUpCode | string | Timezone code<br/>*Example:* `"TZ001"` | No |
| userId | long | User Id<br/>*Example:* `1` | Yes |
| vendorId | string | vendorId<br/>*Example:* `12345` | No |

#### OrgSignUpRequestBelgium

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [Address](#address) | Billing Address | No |
| bookBeginningStartDate | string | Book Beginning Start Date<br/>*Example:* `"01-04-2019"` | Yes |
| completeOrgSetup | boolean | Whether to setup complete org or not?<br/>*Example:* `true` | No |
| countryLookupCode | string | Country code<br/>*Example:* `"SG"` | Yes |
| currencyLookUpCode | string | Base Currency code<br/>*Example:* `"SGD"` | Yes |
| dateFormatLookUpCode | string | Date Format code<br/>*Example:* `"dd-mm-yyyy"` | Yes |
| decimalScale | integer | Decimal scale for amounts for Org<br/>*Example:* `3` | No |
| enterpriseNumberBE | string | Enterprise Number.<br/>*Example:* `123456789098765` | No |
| financialStartDate | string | Financial Year Start Date<br/>*Example:* `"01-01-2019"` | Yes |
| fyClosingPeriodEndDate | string | Closing Period End date<br/>*Example:* `"01-04-2019"` | No |
| gstRegistered | boolean | Whether the business is registered to GST or not.<br/>*Example:* `true` | No |
| industry | string | Org Industry<br/>*Example:* `"Shipping"` | No |
| isBookkeeper | boolean | Flag to indicate if organization is book keeper organization<br/>*Example:* `true` | No |
| isPartner | boolean | Flag to indicate if organization is partner book keeper organization<br/>*Example:* `true` | No |
| isShop | boolean | Flag to indicate if tenant is linked to a shop<br/>*Example:* `true` | No |
| logoUrl | string | Company Logo URL | No |
| multicurrency | boolean | Flag to enable multicurrency<br/>*Example:* `true` | No |
| numberFormat | string | Number format for amounts for Org<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"`<br/>*Example:* `"us"` | No |
| peppolId | string | PeppolId<br/>*Example:* `"0195:SGUEN123456"` | No |
| peppolOptIn | string | Peppol opt-in flag<br/>*Example:* `false` | No |
| purpose | string | Org Main Task<br/>*Example:* `"Accounting"` | No |
| refreshToken | string | Refresh Token<br/>*Example:* `"refreshToken"` | No |
| shippingAddress | [Address](#address) | Shipping Address | No |
| size | string | Org Size<br/>*Example:* `"10-15"` | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"DESKERA"` | No |
| tenantName | string | Tenant name<br/>*Example:* `"Deskera"` | Yes |
| timezoneLookUpCode | string | Timezone code<br/>*Example:* `"TZ001"` | No |
| userId | long | User Id<br/>*Example:* `1` | Yes |
| vatIdentificationNumberBE | string | VAT Identification Number<br/>*Example:* `123456789098765` | No |
| vendorId | string | vendorId<br/>*Example:* `12345` | No |

#### OrgSignUpRequestCanada

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [Address](#address) | Billing Address | No |
| bookBeginningStartDate | string | Book Beginning Start Date<br/>*Example:* `"01-04-2019"` | Yes |
| canadianBusinessNo | string | Canadian Business Number (ABN).<br/>*Example:* `123456789098765` | No |
| completeOrgSetup | boolean | Whether to setup complete org or not?<br/>*Example:* `true` | No |
| countryLookupCode | string | Country code<br/>*Example:* `"SG"` | Yes |
| currencyLookUpCode | string | Base Currency code<br/>*Example:* `"SGD"` | Yes |
| dateFormatLookUpCode | string | Date Format code<br/>*Example:* `"dd-mm-yyyy"` | Yes |
| decimalScale | integer | Decimal scale for amounts for Org<br/>*Example:* `3` | No |
| financialStartDate | string | Financial Year Start Date<br/>*Example:* `"01-01-2019"` | Yes |
| fyClosingPeriodEndDate | string | Closing Period End date<br/>*Example:* `"01-04-2019"` | No |
| gstNumber | string | GST Number<br/>*Example:* `123456789098765` | No |
| gstRegistered | boolean | Whether the business is registered to GST or not.<br/>*Example:* `true` | No |
| industry | string | Org Industry<br/>*Example:* `"Shipping"` | No |
| isBookkeeper | boolean | Flag to indicate if organization is book keeper organization<br/>*Example:* `true` | No |
| isPartner | boolean | Flag to indicate if organization is partner book keeper organization<br/>*Example:* `true` | No |
| isShop | boolean | Flag to indicate if tenant is linked to a shop<br/>*Example:* `true` | No |
| logoUrl | string | Company Logo URL | No |
| multicurrency | boolean | Flag to enable multicurrency<br/>*Example:* `true` | No |
| numberFormat | string | Number format for amounts for Org<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"`<br/>*Example:* `"us"` | No |
| peppolId | string | PeppolId<br/>*Example:* `"0195:SGUEN123456"` | No |
| peppolOptIn | string | Peppol opt-in flag<br/>*Example:* `false` | No |
| purpose | string | Org Main Task<br/>*Example:* `"Accounting"` | No |
| refreshToken | string | Refresh Token<br/>*Example:* `"refreshToken"` | No |
| shippingAddress | [Address](#address) | Shipping Address | No |
| size | string | Org Size<br/>*Example:* `"10-15"` | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"DESKERA"` | No |
| tenantName | string | Tenant name<br/>*Example:* `"Deskera"` | Yes |
| timezoneLookUpCode | string | Timezone code<br/>*Example:* `"TZ001"` | No |
| userId | long | User Id<br/>*Example:* `1` | Yes |
| vendorId | string | vendorId<br/>*Example:* `12345` | No |

#### OrgSignUpRequestGermany

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [Address](#address) | Billing Address | No |
| bookBeginningStartDate | string | Book Beginning Start Date<br/>*Example:* `"01-04-2019"` | Yes |
| companyRegistrationNumberDE | string | Company Registration Number<br/>*Example:* `123456789` | No |
| completeOrgSetup | boolean | Whether to setup complete org or not?<br/>*Example:* `true` | No |
| countryLookupCode | string | Country code<br/>*Example:* `"SG"` | Yes |
| currencyLookUpCode | string | Base Currency code<br/>*Example:* `"SGD"` | Yes |
| dateFormatLookUpCode | string | Date Format code<br/>*Example:* `"dd-mm-yyyy"` | Yes |
| decimalScale | integer | Decimal scale for amounts for Org<br/>*Example:* `3` | No |
| financialStartDate | string | Financial Year Start Date<br/>*Example:* `"01-01-2019"` | Yes |
| fyClosingPeriodEndDate | string | Closing Period End date<br/>*Example:* `"01-04-2019"` | No |
| gstNoDE | string | Tax Number<br/>*Example:* `"NL123456789B01"` | No |
| gstRegistered | boolean | Whether the business is registered to GST or not.<br/>*Example:* `true` | No |
| industry | string | Org Industry<br/>*Example:* `"Shipping"` | No |
| isBookkeeper | boolean | Flag to indicate if organization is book keeper organization<br/>*Example:* `true` | No |
| isPartner | boolean | Flag to indicate if organization is partner book keeper organization<br/>*Example:* `true` | No |
| isShop | boolean | Flag to indicate if tenant is linked to a shop<br/>*Example:* `true` | No |
| logoUrl | string | Company Logo URL | No |
| multicurrency | boolean | Flag to enable multicurrency<br/>*Example:* `true` | No |
| numberFormat | string | Number format for amounts for Org<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"`<br/>*Example:* `"us"` | No |
| peppolId | string | PeppolId<br/>*Example:* `"0195:SGUEN123456"` | No |
| peppolOptIn | string | Peppol opt-in flag<br/>*Example:* `false` | No |
| purpose | string | Org Main Task<br/>*Example:* `"Accounting"` | No |
| refreshToken | string | Refresh Token<br/>*Example:* `"refreshToken"` | No |
| shippingAddress | [Address](#address) | Shipping Address | No |
| size | string | Org Size<br/>*Example:* `"10-15"` | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"DESKERA"` | No |
| tenantName | string | Tenant name<br/>*Example:* `"Deskera"` | Yes |
| timezoneLookUpCode | string | Timezone code<br/>*Example:* `"TZ001"` | No |
| userId | long | User Id<br/>*Example:* `1` | Yes |
| vatIdentificationNumberDE | string | VAT Identification Number<br/>*Example:* `"NL123456789B01"` | No |
| vendorId | string | vendorId<br/>*Example:* `12345` | No |

#### OrgSignUpRequestIndia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [Address](#address) | Billing Address | No |
| bookBeginningStartDate | string | Book Beginning Start Date<br/>*Example:* `"01-04-2019"` | Yes |
| completeOrgSetup | boolean | Whether to setup complete org or not?<br/>*Example:* `true` | No |
| compositionSchemeType | string | The percent tax payable under the Composition Scheme. Applicable when gstRegistered=true<br/>*Enum:* `"ONE_PERCENT"`, `"TWO_PERCENT"`, `"FIVE_PERCENT"`, `"SIX_PERCENT"`<br/>*Example:* `"SIX_PERCENT"` | No |
| countryLookupCode | string | Country code<br/>*Example:* `"SG"` | Yes |
| currencyLookUpCode | string | Base Currency code<br/>*Example:* `"SGD"` | Yes |
| dateFormatLookUpCode | string | Date Format code<br/>*Example:* `"dd-mm-yyyy"` | Yes |
| decimalScale | integer | Decimal scale for amounts for Org<br/>*Example:* `3` | No |
| enableReverseCharge | boolean | Whether the Tenant has enabled reverse charge in Sales Transaction. Applicable when gstRegistered=true<br/>*Example:* `true` | No |
| financialStartDate | string | Financial Year Start Date<br/>*Example:* `"01-01-2019"` | Yes |
| fyClosingPeriodEndDate | string | Closing Period End date<br/>*Example:* `"01-04-2019"` | No |
| gstRegistered | boolean | Whether the business is registered to GST or not.<br/>*Example:* `true` | No |
| gstRegistrationDate | string | The Date on Which GST was registered. Date Format is dd-mm-yyyy. Applicable when gstRegistered=true<br/>*Example:* `"01-01-2020"` | No |
| gstin | string | Organization GST Reg No. for India<br/>*Example:* `"M91234567X"` | No |
| industry | string | Org Industry<br/>*Example:* `"Shipping"` | No |
| isBookkeeper | boolean | Flag to indicate if organization is book keeper organization<br/>*Example:* `true` | No |
| isPartner | boolean | Flag to indicate if organization is partner book keeper organization<br/>*Example:* `true` | No |
| isShop | boolean | Flag to indicate if tenant is linked to a shop<br/>*Example:* `true` | No |
| logoUrl | string | Company Logo URL | No |
| multicurrency | boolean | Flag to enable multicurrency<br/>*Example:* `true` | No |
| numberFormat | string | Number format for amounts for Org<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"`<br/>*Example:* `"us"` | No |
| peppolId | string | PeppolId<br/>*Example:* `"0195:SGUEN123456"` | No |
| peppolOptIn | string | Peppol opt-in flag<br/>*Example:* `false` | No |
| purpose | string | Org Main Task<br/>*Example:* `"Accounting"` | No |
| refreshToken | string | Refresh Token<br/>*Example:* `"refreshToken"` | No |
| registeredToCompositionScheme | boolean | Whether the Tenant is registered to Composition Scheme. Applicable when gstRegistered=true<br/>*Example:* `true` | No |
| sezOrImportExport | boolean | Whether the Tenant is an SEZ or deals with Import/Export. Applicable when gstRegistered=true<br/>*Example:* `true` | No |
| shippingAddress | [Address](#address) | Shipping Address | No |
| size | string | Org Size<br/>*Example:* `"10-15"` | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"DESKERA"` | No |
| tenantName | string | Tenant name<br/>*Example:* `"Deskera"` | Yes |
| timezoneLookUpCode | string | Timezone code<br/>*Example:* `"TZ001"` | No |
| trackDigitalServices | boolean | Whether the Tenant has enables tracking of digital services to overseas customers. Applicable when gstRegistered=true<br/>*Example:* `true` | No |
| userId | long | User Id<br/>*Example:* `1` | Yes |
| vendorId | string | vendorId<br/>*Example:* `12345` | No |

#### OrgSignUpRequestIndonesia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [Address](#address) | Billing Address | No |
| bookBeginningStartDate | string | Book Beginning Start Date<br/>*Example:* `"01-04-2019"` | Yes |
| completeOrgSetup | boolean | Whether to setup complete org or not?<br/>*Example:* `true` | No |
| countryLookupCode | string | Country code<br/>*Example:* `"SG"` | Yes |
| currencyLookUpCode | string | Base Currency code<br/>*Example:* `"SGD"` | Yes |
| dateFormatLookUpCode | string | Date Format code<br/>*Example:* `"dd-mm-yyyy"` | Yes |
| decimalScale | integer | Decimal scale for amounts for Org<br/>*Example:* `3` | No |
| exciseAccount | string | Account to set for Excise Payable<br/>*Example:* `"AC0001"` | No |
| exciseApplicable | boolean | True to allow excise flow<br/>*Example:* `true` | No |
| financialStartDate | string | Financial Year Start Date<br/>*Example:* `"01-01-2019"` | Yes |
| fyClosingPeriodEndDate | string | Closing Period End date<br/>*Example:* `"01-04-2019"` | No |
| gstRegistered | boolean | Whether the business is registered to GST or not.<br/>*Example:* `true` | No |
| industry | string | Org Industry<br/>*Example:* `"Shipping"` | No |
| isBookkeeper | boolean | Flag to indicate if organization is book keeper organization<br/>*Example:* `true` | No |
| isPartner | boolean | Flag to indicate if organization is partner book keeper organization<br/>*Example:* `true` | No |
| isShop | boolean | Flag to indicate if tenant is linked to a shop<br/>*Example:* `true` | No |
| logoUrl | string | Company Logo URL | No |
| multicurrency | boolean | Flag to enable multicurrency<br/>*Example:* `true` | No |
| npwpNo | string | Indonesia specific Organization NPWP No.<br/>*Example:* `"01.542.188.6-046.000"` | No |
| numberFormat | string | Number format for amounts for Org<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"`<br/>*Example:* `"us"` | No |
| peppolId | string | PeppolId<br/>*Example:* `"0195:SGUEN123456"` | No |
| peppolOptIn | string | Peppol opt-in flag<br/>*Example:* `false` | No |
| purpose | string | Org Main Task<br/>*Example:* `"Accounting"` | No |
| refreshToken | string | Refresh Token<br/>*Example:* `"refreshToken"` | No |
| shippingAddress | [Address](#address) | Shipping Address | No |
| size | string | Org Size<br/>*Example:* `"10-15"` | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"DESKERA"` | No |
| tenantName | string | Tenant name<br/>*Example:* `"Deskera"` | Yes |
| timezoneLookUpCode | string | Timezone code<br/>*Example:* `"TZ001"` | No |
| userId | long | User Id<br/>*Example:* `1` | Yes |
| vendorId | string | vendorId<br/>*Example:* `12345` | No |

#### OrgSignUpRequestIsrael

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [Address](#address) | Billing Address | No |
| bookBeginningStartDate | string | Book Beginning Start Date<br/>*Example:* `"01-04-2019"` | Yes |
| completeOrgSetup | boolean | Whether to setup complete org or not?<br/>*Example:* `true` | No |
| countryLookupCode | string | Country code<br/>*Example:* `"SG"` | Yes |
| currencyLookUpCode | string | Base Currency code<br/>*Example:* `"SGD"` | Yes |
| dateFormatLookUpCode | string | Date Format code<br/>*Example:* `"dd-mm-yyyy"` | Yes |
| decimalScale | integer | Decimal scale for amounts for Org<br/>*Example:* `3` | No |
| financialStartDate | string | Financial Year Start Date<br/>*Example:* `"01-01-2019"` | Yes |
| fyClosingPeriodEndDate | string | Closing Period End date<br/>*Example:* `"01-04-2019"` | No |
| gstRegistered | boolean | Whether the business is registered to GST or not.<br/>*Example:* `true` | No |
| ilDeductionFileId | string | Israel specific deduction file id<br/>*Example:* `"deduction file id"` | No |
| ilEngagementType | string | Israel specific engagement type<br/>*Example:* `"engagement type"` | No |
| ilIncomeTaxNo | string | Israel specific income tax no<br/>*Example:* `"income tax no"` | No |
| ilLegalName | string | Israel specific legal name<br/>*Example:* `"legal name"` | No |
| ilNationalInsuranceNo | string | Israel specific national insurance no<br/>*Example:* `"national insurance no"` | No |
| ilParentSubsidiaryName | string | Israel specific parent subsidiary name<br/>*Example:* `"parent subsidiary name"` | No |
| ilReturnAddress | [ [Address](#address) ] | Israel Specific Return Address | No |
| ilReturnEmail | string | Israel specific return email<br/>*Example:* `"return email"` | No |
| ilVatCode | string | Israel specific vat code<br/>*Example:* `"vat code"` | No |
| ilVatRegistrationNo | string | Israel specific vat registration no<br/>*Example:* `"vat registration no"` | No |
| ilWithholdingTaxAccount | string | Israel specific withholding tax account<br/>*Example:* `"withholding tax account"` | No |
| industry | string | Org Industry<br/>*Example:* `"Shipping"` | No |
| isBookkeeper | boolean | Flag to indicate if organization is book keeper organization<br/>*Example:* `true` | No |
| isPartner | boolean | Flag to indicate if organization is partner book keeper organization<br/>*Example:* `true` | No |
| isShop | boolean | Flag to indicate if tenant is linked to a shop<br/>*Example:* `true` | No |
| logoUrl | string | Company Logo URL | No |
| multicurrency | boolean | Flag to enable multicurrency<br/>*Example:* `true` | No |
| numberFormat | string | Number format for amounts for Org<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"`<br/>*Example:* `"us"` | No |
| peppolId | string | PeppolId<br/>*Example:* `"0195:SGUEN123456"` | No |
| peppolOptIn | string | Peppol opt-in flag<br/>*Example:* `false` | No |
| purpose | string | Org Main Task<br/>*Example:* `"Accounting"` | No |
| refreshToken | string | Refresh Token<br/>*Example:* `"refreshToken"` | No |
| shippingAddress | [Address](#address) | Shipping Address | No |
| size | string | Org Size<br/>*Example:* `"10-15"` | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"DESKERA"` | No |
| tenantName | string | Tenant name<br/>*Example:* `"Deskera"` | Yes |
| timezoneLookUpCode | string | Timezone code<br/>*Example:* `"TZ001"` | No |
| userId | long | User Id<br/>*Example:* `1` | Yes |
| vendorId | string | vendorId<br/>*Example:* `12345` | No |

#### OrgSignUpRequestMalaysia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [Address](#address) | Billing Address | No |
| bookBeginningStartDate | string | Book Beginning Start Date<br/>*Example:* `"01-04-2019"` | Yes |
| businessRegistrationNo | string | Organization Business Reg No. for Malaysia<br/>*Example:* `"B91234567X"` | No |
| completeOrgSetup | boolean | Whether to setup complete org or not?<br/>*Example:* `true` | No |
| countryLookupCode | string | Country code<br/>*Example:* `"SG"` | Yes |
| currencyLookUpCode | string | Base Currency code<br/>*Example:* `"SGD"` | Yes |
| dateFormatLookUpCode | string | Date Format code<br/>*Example:* `"dd-mm-yyyy"` | Yes |
| decimalScale | integer | Decimal scale for amounts for Org<br/>*Example:* `3` | No |
| exemption | boolean | Whether the Exemption is on or off.<br/>*Example:* `true` | No |
| exemptionCerificate | boolean | Whether the Exemption Cerificate is availble or not.<br/>*Example:* `true` | No |
| exemptionCriteria | string | Organization Exemption criteria. for Malaysia<br/>*Example:* `"EX1234567X"` | No |
| exemptionNo | string | Organization Exemption No. for Malaysia<br/>*Example:* `"EX1234567X"` | No |
| expiryDate | string | Date Format code<br/>*Example:* `"01-06-2020"` | No |
| financialStartDate | string | Financial Year Start Date<br/>*Example:* `"01-01-2019"` | Yes |
| fyClosingPeriodEndDate | string | Closing Period End date<br/>*Example:* `"01-04-2019"` | No |
| gstRegistered | boolean | Whether the business is registered to GST or not.<br/>*Example:* `true` | No |
| industry | string | Org Industry<br/>*Example:* `"Shipping"` | No |
| isBookkeeper | boolean | Flag to indicate if organization is book keeper organization<br/>*Example:* `true` | No |
| isPartner | boolean | Flag to indicate if organization is partner book keeper organization<br/>*Example:* `true` | No |
| isShop | boolean | Flag to indicate if tenant is linked to a shop<br/>*Example:* `true` | No |
| logoUrl | string | Company Logo URL | No |
| multicurrency | boolean | Flag to enable multicurrency<br/>*Example:* `true` | No |
| numberFormat | string | Number format for amounts for Org<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"`<br/>*Example:* `"us"` | No |
| peppolId | string | PeppolId<br/>*Example:* `"0195:SGUEN123456"` | No |
| peppolOptIn | string | Peppol opt-in flag<br/>*Example:* `false` | No |
| purpose | string | Org Main Task<br/>*Example:* `"Accounting"` | No |
| refreshToken | string | Refresh Token<br/>*Example:* `"refreshToken"` | No |
| salesTaxRegistrationNo | string | Organization Sales Tax Reg No. for Malaysia<br/>*Example:* `"T91234567X"` | No |
| serviceTaxRegistrationNo | string | Organization Service Tax Reg No. for Malaysia<br/>*Example:* `"S91234567X"` | No |
| shippingAddress | [Address](#address) | Shipping Address | No |
| size | string | Org Size<br/>*Example:* `"10-15"` | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"DESKERA"` | No |
| tenantName | string | Tenant name<br/>*Example:* `"Deskera"` | Yes |
| timezoneLookUpCode | string | Timezone code<br/>*Example:* `"TZ001"` | No |
| userId | long | User Id<br/>*Example:* `1` | Yes |
| vendorId | string | vendorId<br/>*Example:* `12345` | No |

#### OrgSignUpRequestNL

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [Address](#address) | Billing Address | No |
| bookBeginningStartDate | string | Book Beginning Start Date<br/>*Example:* `"01-04-2019"` | Yes |
| companyRegistrationNumberNL | string | Company Registration Number<br/>*Example:* `"B91234567X"` | No |
| completeOrgSetup | boolean | Whether to setup complete org or not?<br/>*Example:* `true` | No |
| countryLookupCode | string | Country code<br/>*Example:* `"SG"` | Yes |
| currencyLookUpCode | string | Base Currency code<br/>*Example:* `"SGD"` | Yes |
| dateFormatLookUpCode | string | Date Format code<br/>*Example:* `"dd-mm-yyyy"` | Yes |
| decimalScale | integer | Decimal scale for amounts for Org<br/>*Example:* `3` | No |
| financialStartDate | string | Financial Year Start Date<br/>*Example:* `"01-01-2019"` | Yes |
| fyClosingPeriodEndDate | string | Closing Period End date<br/>*Example:* `"01-04-2019"` | No |
| gstRegistered | boolean | Whether the business is registered to GST or not.<br/>*Example:* `true` | No |
| industry | string | Org Industry<br/>*Example:* `"Shipping"` | No |
| isBookkeeper | boolean | Flag to indicate if organization is book keeper organization<br/>*Example:* `true` | No |
| isPartner | boolean | Flag to indicate if organization is partner book keeper organization<br/>*Example:* `true` | No |
| isShop | boolean | Flag to indicate if tenant is linked to a shop<br/>*Example:* `true` | No |
| logoUrl | string | Company Logo URL | No |
| multicurrency | boolean | Flag to enable multicurrency<br/>*Example:* `true` | No |
| numberFormat | string | Number format for amounts for Org<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"`<br/>*Example:* `"us"` | No |
| peppolId | string | PeppolId<br/>*Example:* `"0195:SGUEN123456"` | No |
| peppolOptIn | string | Peppol opt-in flag<br/>*Example:* `false` | No |
| purpose | string | Org Main Task<br/>*Example:* `"Accounting"` | No |
| refreshToken | string | Refresh Token<br/>*Example:* `"refreshToken"` | No |
| shippingAddress | [Address](#address) | Shipping Address | No |
| size | string | Org Size<br/>*Example:* `"10-15"` | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"DESKERA"` | No |
| tenantName | string | Tenant name<br/>*Example:* `"Deskera"` | Yes |
| timezoneLookUpCode | string | Timezone code<br/>*Example:* `"TZ001"` | No |
| userId | long | User Id<br/>*Example:* `1` | Yes |
| vatIdentificationNumberNL | string | VAT Identification Number<br/>*Example:* `"B91234567X"` | No |
| vendorId | string | vendorId<br/>*Example:* `12345` | No |

#### OrgSignUpRequestNZ

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [Address](#address) | Billing Address | No |
| bookBeginningStartDate | string | Book Beginning Start Date<br/>*Example:* `"01-04-2019"` | Yes |
| completeOrgSetup | boolean | Whether to setup complete org or not?<br/>*Example:* `true` | No |
| countryLookupCode | string | Country code<br/>*Example:* `"SG"` | Yes |
| currencyLookUpCode | string | Base Currency code<br/>*Example:* `"SGD"` | Yes |
| dateFormatLookUpCode | string | Date Format code<br/>*Example:* `"dd-mm-yyyy"` | Yes |
| decimalScale | integer | Decimal scale for amounts for Org<br/>*Example:* `3` | No |
| financialStartDate | string | Financial Year Start Date<br/>*Example:* `"01-01-2019"` | Yes |
| fyClosingPeriodEndDate | string | Closing Period End date<br/>*Example:* `"01-04-2019"` | No |
| gstNoNZ | string | GST Number<br/>*Example:* `"111-111-111"` | No |
| gstRegistered | boolean | Whether the business is registered to GST or not.<br/>*Example:* `true` | No |
| industry | string | Org Industry<br/>*Example:* `"Shipping"` | No |
| irdNo | string | IRD Number<br/>*Example:* `"111-111-111"` | No |
| isBookkeeper | boolean | Flag to indicate if organization is book keeper organization<br/>*Example:* `true` | No |
| isPartner | boolean | Flag to indicate if organization is partner book keeper organization<br/>*Example:* `true` | No |
| isShop | boolean | Flag to indicate if tenant is linked to a shop<br/>*Example:* `true` | No |
| logoUrl | string | Company Logo URL | No |
| multicurrency | boolean | Flag to enable multicurrency<br/>*Example:* `true` | No |
| numberFormat | string | Number format for amounts for Org<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"`<br/>*Example:* `"us"` | No |
| peppolId | string | PeppolId<br/>*Example:* `"0195:SGUEN123456"` | No |
| peppolOptIn | string | Peppol opt-in flag<br/>*Example:* `false` | No |
| purpose | string | Org Main Task<br/>*Example:* `"Accounting"` | No |
| refreshToken | string | Refresh Token<br/>*Example:* `"refreshToken"` | No |
| shippingAddress | [Address](#address) | Shipping Address | No |
| size | string | Org Size<br/>*Example:* `"10-15"` | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"DESKERA"` | No |
| tenantName | string | Tenant name<br/>*Example:* `"Deskera"` | Yes |
| timezoneLookUpCode | string | Timezone code<br/>*Example:* `"TZ001"` | No |
| userId | long | User Id<br/>*Example:* `1` | Yes |
| vendorId | string | vendorId<br/>*Example:* `12345` | No |

#### OrgSignUpRequestPhilippines

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [Address](#address) | Billing Address | No |
| bookBeginningStartDate | string | Book Beginning Start Date<br/>*Example:* `"01-04-2019"` | Yes |
| completeOrgSetup | boolean | Whether to setup complete org or not?<br/>*Example:* `true` | No |
| countryLookupCode | string | Country code<br/>*Example:* `"SG"` | Yes |
| currencyLookUpCode | string | Base Currency code<br/>*Example:* `"SGD"` | Yes |
| dateFormatLookUpCode | string | Date Format code<br/>*Example:* `"dd-mm-yyyy"` | Yes |
| decimalScale | integer | Decimal scale for amounts for Org<br/>*Example:* `3` | No |
| financialStartDate | string | Financial Year Start Date<br/>*Example:* `"01-01-2019"` | Yes |
| fyClosingPeriodEndDate | string | Closing Period End date<br/>*Example:* `"01-04-2019"` | No |
| gstRegistered | boolean | Whether the business is registered to GST or not.<br/>*Example:* `true` | No |
| industry | string | Org Industry<br/>*Example:* `"Shipping"` | No |
| isBookkeeper | boolean | Flag to indicate if organization is book keeper organization<br/>*Example:* `true` | No |
| isPartner | boolean | Flag to indicate if organization is partner book keeper organization<br/>*Example:* `true` | No |
| isShop | boolean | Flag to indicate if tenant is linked to a shop<br/>*Example:* `true` | No |
| logoUrl | string | Company Logo URL | No |
| multicurrency | boolean | Flag to enable multicurrency<br/>*Example:* `true` | No |
| numberFormat | string | Number format for amounts for Org<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"`<br/>*Example:* `"us"` | No |
| peppolId | string | PeppolId<br/>*Example:* `"0195:SGUEN123456"` | No |
| peppolOptIn | string | Peppol opt-in flag<br/>*Example:* `false` | No |
| purpose | string | Org Main Task<br/>*Example:* `"Accounting"` | No |
| refreshToken | string | Refresh Token<br/>*Example:* `"refreshToken"` | No |
| shippingAddress | [Address](#address) | Shipping Address | No |
| size | string | Org Size<br/>*Example:* `"10-15"` | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"DESKERA"` | No |
| tenantName | string | Tenant name<br/>*Example:* `"Deskera"` | Yes |
| timezoneLookUpCode | string | Timezone code<br/>*Example:* `"TZ001"` | No |
| userId | long | User Id<br/>*Example:* `1` | Yes |
| vatNoPhilippines | string | Organization VAT No. for Philippines<br/>*Example:* `"0123456789101"` | No |
| vatPayableAccountPhilippines | string | Organization VAT Payable account for Philippines<br/>*Example:* `11212` | No |
| vendorId | string | vendorId<br/>*Example:* `12345` | No |

#### OrgSignUpRequestSA

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [Address](#address) | Billing Address | No |
| bookBeginningStartDate | string | Book Beginning Start Date<br/>*Example:* `"01-04-2019"` | Yes |
| completeOrgSetup | boolean | Whether to setup complete org or not?<br/>*Example:* `true` | No |
| countryLookupCode | string | Country code<br/>*Example:* `"SG"` | Yes |
| currencyLookUpCode | string | Base Currency code<br/>*Example:* `"SGD"` | Yes |
| dateFormatLookUpCode | string | Date Format code<br/>*Example:* `"dd-mm-yyyy"` | Yes |
| decimalScale | integer | Decimal scale for amounts for Org<br/>*Example:* `3` | No |
| exciseAccountSA | string | Account to set for Excise Payable<br/>*Example:* `"AC400010"` | No |
| exciseApplicableSA | boolean | True to allow excise flow for UAE country<br/>*Example:* `true` | No |
| financialStartDate | string | Financial Year Start Date<br/>*Example:* `"01-01-2019"` | Yes |
| fyClosingPeriodEndDate | string | Closing Period End date<br/>*Example:* `"01-04-2019"` | No |
| gstRegistered | boolean | Whether the business is registered to GST or not.<br/>*Example:* `true` | No |
| industry | string | Org Industry<br/>*Example:* `"Shipping"` | No |
| isBookkeeper | boolean | Flag to indicate if organization is book keeper organization<br/>*Example:* `true` | No |
| isDesignatedZoneSA | boolean | Is your business located in a Designated Zone?<br/>*Example:* `true` | No |
| isPartner | boolean | Flag to indicate if organization is partner book keeper organization<br/>*Example:* `true` | No |
| isShop | boolean | Flag to indicate if tenant is linked to a shop<br/>*Example:* `true` | No |
| logoUrl | string | Company Logo URL | No |
| multicurrency | boolean | Flag to enable multicurrency<br/>*Example:* `true` | No |
| numberFormat | string | Number format for amounts for Org<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"`<br/>*Example:* `"us"` | No |
| outsideContactSA | boolean | True to allow RCM flow for UAE country<br/>*Example:* `true` | No |
| peppolId | string | PeppolId<br/>*Example:* `"0195:SGUEN123456"` | No |
| peppolOptIn | string | Peppol opt-in flag<br/>*Example:* `false` | No |
| purpose | string | Org Main Task<br/>*Example:* `"Accounting"` | No |
| rcmAccountSA | string | Account to set for RCM<br/>*Example:* `"AC400010"` | No |
| refreshToken | string | Refresh Token<br/>*Example:* `"refreshToken"` | No |
| registeredForVatSA | boolean | Registered for vat flag<br/>*Example:* `false` | No |
| shippingAddress | [Address](#address) | Shipping Address | No |
| size | string | Org Size<br/>*Example:* `"10-15"` | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"DESKERA"` | No |
| tenantInfoInSA | [TenantInfoSASaudiLanguage](#tenantinfosasaudilanguage) | Arabic Details<br/>*Example:* `true` | No |
| tenantName | string | Tenant name<br/>*Example:* `"Deskera"` | Yes |
| timezoneLookUpCode | string | Timezone code<br/>*Example:* `"TZ001"` | No |
| userId | long | User Id<br/>*Example:* `1` | Yes |
| vatAccountNumberSA | string | Vat Account Number<br/>*Example:* `"NL123456789B01"` | No |
| vatReturnFrequencySA | string | VAT Return Frequency<br/>*Example:* `"Monthly"` | No |
| vendorId | string | vendorId<br/>*Example:* `12345` | No |

#### OrgSignUpRequestUAE

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [Address](#address) | Billing Address | No |
| bookBeginningStartDate | string | Book Beginning Start Date<br/>*Example:* `"01-04-2019"` | Yes |
| completeOrgSetup | boolean | Whether to setup complete org or not?<br/>*Example:* `true` | No |
| countryLookupCode | string | Country code<br/>*Example:* `"SG"` | Yes |
| currencyLookUpCode | string | Base Currency code<br/>*Example:* `"SGD"` | Yes |
| dateFormatLookUpCode | string | Date Format code<br/>*Example:* `"dd-mm-yyyy"` | Yes |
| decimalScale | integer | Decimal scale for amounts for Org<br/>*Example:* `3` | No |
| exciseAccount | string | Account to set for Excise Payable<br/>*Example:* `"AC400010"` | No |
| exciseApplicable | boolean | True to allow excise flow for UAE country<br/>*Example:* `true` | No |
| financialStartDate | string | Financial Year Start Date<br/>*Example:* `"01-01-2019"` | Yes |
| fyClosingPeriodEndDate | string | Closing Period End date<br/>*Example:* `"01-04-2019"` | No |
| gstRegistered | boolean | Whether the business is registered to GST or not.<br/>*Example:* `true` | No |
| industry | string | Org Industry<br/>*Example:* `"Shipping"` | No |
| isBookkeeper | boolean | Flag to indicate if organization is book keeper organization<br/>*Example:* `true` | No |
| isDesignatedZone | boolean | Is your business located in a Designated Zone?<br/>*Example:* `true` | No |
| isPartner | boolean | Flag to indicate if organization is partner book keeper organization<br/>*Example:* `true` | No |
| isShop | boolean | Flag to indicate if tenant is linked to a shop<br/>*Example:* `true` | No |
| logoUrl | string | Company Logo URL | No |
| multicurrency | boolean | Flag to enable multicurrency<br/>*Example:* `true` | No |
| numberFormat | string | Number format for amounts for Org<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"`<br/>*Example:* `"us"` | No |
| outsideContact | boolean | True to allow RCM flow for UAE country<br/>*Example:* `true` | No |
| peppolId | string | PeppolId<br/>*Example:* `"0195:SGUEN123456"` | No |
| peppolOptIn | string | Peppol opt-in flag<br/>*Example:* `false` | No |
| purpose | string | Org Main Task<br/>*Example:* `"Accounting"` | No |
| rcmAccount | string | Account to set for RCM<br/>*Example:* `"AC400010"` | No |
| refreshToken | string | Refresh Token<br/>*Example:* `"refreshToken"` | No |
| shippingAddress | [Address](#address) | Shipping Address | No |
| size | string | Org Size<br/>*Example:* `"10-15"` | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"DESKERA"` | No |
| tenantName | string | Tenant name<br/>*Example:* `"Deskera"` | Yes |
| timezoneLookUpCode | string | Timezone code<br/>*Example:* `"TZ001"` | No |
| userId | long | User Id<br/>*Example:* `1` | Yes |
| vatNoUAE | string | UAE specific Organization VAT No.<br/>*Example:* `"012-345-678-910"` | No |
| vendorId | string | vendorId<br/>*Example:* `12345` | No |

#### OrgSignUpRequestUK

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddress | [Address](#address) | Billing Address | No |
| bookBeginningStartDate | string | Book Beginning Start Date<br/>*Example:* `"01-04-2019"` | Yes |
| businessRegistrationNoUK | string | Organization Business Reg No. for UK<br/>*Example:* `"B91234567X"` | No |
| completeOrgSetup | boolean | Whether to setup complete org or not?<br/>*Example:* `true` | No |
| countryLookupCode | string | Country code<br/>*Example:* `"SG"` | Yes |
| currencyLookUpCode | string | Base Currency code<br/>*Example:* `"SGD"` | Yes |
| dateFormatLookUpCode | string | Date Format code<br/>*Example:* `"dd-mm-yyyy"` | Yes |
| decimalScale | integer | Decimal scale for amounts for Org<br/>*Example:* `3` | No |
| financialStartDate | string | Financial Year Start Date<br/>*Example:* `"01-01-2019"` | Yes |
| flatRatePercentageListUK | [ [FlatRatePercentageListUK](#flatratepercentagelistuk) ] | Whether the Marketing Tax Digital is on or off.<br/>*Example:* `true` | No |
| fyClosingPeriodEndDate | string | Closing Period End date<br/>*Example:* `"01-04-2019"` | No |
| gstRegistered | boolean | Whether the business is registered to GST or not.<br/>*Example:* `true` | No |
| industry | string | Org Industry<br/>*Example:* `"Shipping"` | No |
| isBookkeeper | boolean | Flag to indicate if organization is book keeper organization<br/>*Example:* `true` | No |
| isPartner | boolean | Flag to indicate if organization is partner book keeper organization<br/>*Example:* `true` | No |
| isShop | boolean | Flag to indicate if tenant is linked to a shop<br/>*Example:* `true` | No |
| logoUrl | string | Company Logo URL | No |
| marketingTaxDigitalUK | boolean | Whether the Marketing Tax Digital is on or off.<br/>*Example:* `true` | No |
| multicurrency | boolean | Flag to enable multicurrency<br/>*Example:* `true` | No |
| numberFormat | string | Number format for amounts for Org<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"`<br/>*Example:* `"us"` | No |
| peppolId | string | PeppolId<br/>*Example:* `"0195:SGUEN123456"` | No |
| peppolOptIn | string | Peppol opt-in flag<br/>*Example:* `false` | No |
| purpose | string | Org Main Task<br/>*Example:* `"Accounting"` | No |
| refreshToken | string | Refresh Token<br/>*Example:* `"refreshToken"` | No |
| shippingAddress | [Address](#address) | Shipping Address | No |
| size | string | Org Size<br/>*Example:* `"10-15"` | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"DESKERA"` | No |
| tenantName | string | Tenant name<br/>*Example:* `"Deskera"` | Yes |
| timezoneLookUpCode | string | Timezone code<br/>*Example:* `"TZ001"` | No |
| userId | long | User Id<br/>*Example:* `1` | Yes |
| vatIdentificationNumberUK | string | VAT Number<br/>*Example:* `123456789098765` | No |
| vatSchemeUK | string | VAT Scheme<br/>*Example:* `"Standard scheme"` | No |
| vendorId | string | vendorId<br/>*Example:* `12345` | No |

#### OrganizationSettings

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| decimalScale | integer |  | No |
| tenantId | long |  | No |

#### OrganizationSetupStatusResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | Organization ID<br/>*Example:* `123` | No |
| onboardingStatusInfo | [OnboardingStatusInfo](#onboardingstatusinfo) | Onboarding status | No |
| orgSetupCompleted | boolean | Organization setup status<br/>*Example:* `true` | No |
| tenantId | long | Tenant ID<br/>*Example:* `123` | No |

#### OwnerInfoDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ownerIamUserId | long |  | No |
| ownerTenantUserId | long |  | No |

#### Pageable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| offset | long |  | No |
| pageNumber | integer |  | No |
| pageSize | integer |  | No |
| paged | boolean |  | No |
| sort | [Sort](#sort) |  | No |
| unpaged | boolean |  | No |

#### Page«AppUserResponseInfo»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [AppUserResponseInfo](#appuserresponseinfo) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalPages | integer |  | No |

#### Page«BookkeeperTeamInfo»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [BookkeeperTeamInfo](#bookkeeperteaminfo) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalPages | integer |  | No |

#### Page«RoleGroupDto»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [RoleGroupDto](#rolegroupdto) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalPages | integer |  | No |

#### Page«TenantInformation»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [TenantInformation](#tenantinformation) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalPages | integer |  | No |

#### Page«UserShortInfo»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [UserShortInfo](#usershortinfo) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalPages | integer |  | No |

#### Page«UserShortRoleInfo»

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | [ [UserShortRoleInfo](#usershortroleinfo) ] |  | No |
| empty | boolean |  | No |
| first | boolean |  | No |
| last | boolean |  | No |
| number | integer |  | No |
| numberOfElements | integer |  | No |
| pageable | [Pageable](#pageable) |  | No |
| size | integer |  | No |
| sort | [Sort](#sort) |  | No |
| totalElements | long |  | No |
| totalPages | integer |  | No |

#### PermissionInfoResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | APPLICATION Name<br/>*Example:* `"ERP"` | No |
| roleGroupDto | [ [RoleGroupDto](#rolegroupdto) ] | Roles Groups | No |

#### PlanInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Amount | number |  | No |
| Currency | string |  | No |
| InTrial | boolean |  | No |
| Interval | string |  | No |
| Name | string |  | No |
| PlanID | string |  | No |
| TrialDays | integer |  | No |
| TrialOver | boolean |  | No |
| UpdatedOn | dateTime |  | No |

#### PrefillDocumentData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| autoPopulateData | boolean |  | No |
| firstTimePopup | boolean |  | No |

#### ProductLimit

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AddonCharge | integer |  | No |
| Code | string |  | No |
| ContactCount | integer |  | No |
| EmailSendCount | integer |  | No |
| EmployeeCount | integer |  | No |
| FreeUserCount | integer |  | No |
| GuestUserCount | integer |  | No |

#### PromoCode

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| expiryDate | dateTime |  | No |
| id | long |  | No |
| multipleUseAllowed | boolean |  | No |
| used | boolean |  | No |

#### RefreshRolesModulesRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| allTenants | boolean | To update for all tenants<br/>*Example:* `true` | No |
| batchSize | integer | Batch size<br/>*Example:* `10` | No |
| startPage | integer | Start batch number<br/>*Example:* `10` | No |
| tenantIds | [ long ] | List of tenants for which to update<br/>*Example:* `[1,2,4]` | No |

#### RefreshRolesModulesResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| foundTenantIds | [ long ] | List of tenantIds found<br/>*Example:* `[1,2,3]` | No |
| sucessfulTenantIds | [ long ] | List of successfully refreshed tenants<br/>*Example:* `[1,2,3]` | No |

#### RefreshTokenRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| refreshToken | string | Refresh token<br/>*Example:* `"eyJjdHkiOiJKV1QiLCJlbmMiOiJ.."` | Yes |
| tenantId | long | Tenant Id<br/>*Example:* `123456` | Yes |
| userName | string | Username<br/>*Example:* `"+65-1234-5678"` | Yes |

#### RegisteredUserIdRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| email | string | Email Address<br/>*Example:* `"sample@demo.com"` | No |
| phone | string | Phone Number<br/>*Example:* `"+6504372324"` | No |

#### RegisteredUserRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| emails | [ string ] | List of user's contacts emails<br/>*Example:* `["sample@xyz.abc","demo@abc.xyz"]` | Yes |
| phones | [ string ] | List of user's contacts phone numbers<br/>*Example:* `["+6504372324"]` | Yes |

#### RemovePermissionRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| apps | [ string ] |  | No |
| tenantId | long |  | No |
| userId | long |  | No |

#### ResetPasswordRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userName | string | Username<br/>*Example:* `"+65-1234-5678"` | Yes |

#### ResponseEntity

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| body | object |  | No |
| statusCode | string | *Enum:* `"100 CONTINUE"`, `"101 SWITCHING_PROTOCOLS"`, `"102 PROCESSING"`, `"103 CHECKPOINT"`, `"200 OK"`, `"201 CREATED"`, `"202 ACCEPTED"`, `"203 NON_AUTHORITATIVE_INFORMATION"`, `"204 NO_CONTENT"`, `"205 RESET_CONTENT"`, `"206 PARTIAL_CONTENT"`, `"207 MULTI_STATUS"`, `"208 ALREADY_REPORTED"`, `"226 IM_USED"`, `"300 MULTIPLE_CHOICES"`, `"301 MOVED_PERMANENTLY"`, `"302 FOUND"`, `"302 MOVED_TEMPORARILY"`, `"303 SEE_OTHER"`, `"304 NOT_MODIFIED"`, `"305 USE_PROXY"`, `"307 TEMPORARY_REDIRECT"`, `"308 PERMANENT_REDIRECT"`, `"400 BAD_REQUEST"`, `"401 UNAUTHORIZED"`, `"402 PAYMENT_REQUIRED"`, `"403 FORBIDDEN"`, `"404 NOT_FOUND"`, `"405 METHOD_NOT_ALLOWED"`, `"406 NOT_ACCEPTABLE"`, `"407 PROXY_AUTHENTICATION_REQUIRED"`, `"408 REQUEST_TIMEOUT"`, `"409 CONFLICT"`, `"410 GONE"`, `"411 LENGTH_REQUIRED"`, `"412 PRECONDITION_FAILED"`, `"413 PAYLOAD_TOO_LARGE"`, `"413 REQUEST_ENTITY_TOO_LARGE"`, `"414 URI_TOO_LONG"`, `"414 REQUEST_URI_TOO_LONG"`, `"415 UNSUPPORTED_MEDIA_TYPE"`, `"416 REQUESTED_RANGE_NOT_SATISFIABLE"`, `"417 EXPECTATION_FAILED"`, `"418 I_AM_A_TEAPOT"`, `"419 INSUFFICIENT_SPACE_ON_RESOURCE"`, `"420 METHOD_FAILURE"`, `"421 DESTINATION_LOCKED"`, `"422 UNPROCESSABLE_ENTITY"`, `"423 LOCKED"`, `"424 FAILED_DEPENDENCY"`, `"426 UPGRADE_REQUIRED"`, `"428 PRECONDITION_REQUIRED"`, `"429 TOO_MANY_REQUESTS"`, `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"`, `"451 UNAVAILABLE_FOR_LEGAL_REASONS"`, `"500 INTERNAL_SERVER_ERROR"`, `"501 NOT_IMPLEMENTED"`, `"502 BAD_GATEWAY"`, `"503 SERVICE_UNAVAILABLE"`, `"504 GATEWAY_TIMEOUT"`, `"505 HTTP_VERSION_NOT_SUPPORTED"`, `"506 VARIANT_ALSO_NEGOTIATES"`, `"507 INSUFFICIENT_STORAGE"`, `"508 LOOP_DETECTED"`, `"509 BANDWIDTH_LIMIT_EXCEEDED"`, `"510 NOT_EXTENDED"`, `"511 NETWORK_AUTHENTICATION_REQUIRED"` | No |
| statusCodeValue | integer |  | No |

#### Role

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | *Enum:* `"CONSOLE"`, `"ERP"`, `"ORGANISATION"`, `"ATTENDANCE"`, `"EXPENSE"`, `"CRM"`, `"PEOPLE"`, `"CHAT"`, `"ALL"`, `"REPORT_BUILDER"`, `"SHOP"`, `"WORKFLOW_ENGINE"`, `"CRM_PLUS"`, `"MRP"` | No |
| description | string |  | No |
| id | long |  | No |
| permissions | [RolePermissionInfo](#rolepermissioninfo) |  | No |
| shortCode | string |  | No |

#### RoleGroup

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| activeFlag | boolean |  | No |
| admin | boolean |  | No |
| appName | string | *Enum:* `"CONSOLE"`, `"ERP"`, `"ORGANISATION"`, `"ATTENDANCE"`, `"EXPENSE"`, `"CRM"`, `"PEOPLE"`, `"CHAT"`, `"ALL"`, `"REPORT_BUILDER"`, `"SHOP"`, `"WORKFLOW_ENGINE"`, `"CRM_PLUS"`, `"MRP"` | No |
| guest | boolean |  | No |
| id | long |  | No |
| name | string |  | No |
| shortCode | string |  | No |
| systemDefined | boolean |  | No |
| tenantId | long |  | No |

#### RoleGroupCreateRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | APP Name<br/>*Example:* `"ERP"` | No |
| isAdmin | boolean | is admin <br/>*Example:* `false` | No |
| isGuest | boolean | is guest <br/>*Example:* `false` | No |
| moduleUuids | [ string ] | List of module UUID | No |
| roleCode | string | Role code<br/>*Example:* `"superman"` | No |
| roleName | string | Role Name<br/>*Example:* `"superman"` | No |

#### RoleGroupDeleteRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | APP Name<br/>*Example:* `"ERP"` | No |
| roleCode | string | Role code<br/>*Example:* `"superman"` | No |

#### RoleGroupDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| activeFlag | boolean | Active status<br/>*Example:* `true` | No |
| appName | string | APPLICATION Name<br/>*Example:* `"ERP"` | No |
| guest | boolean | Is Guest<br/>*Example:* `true` | No |
| id | long | Role group id<br/>*Example:* `1` | No |
| modules | [ [ModuleResponse](#moduleresponse) ] | Module associated with role group | No |
| name | string | Description<br/>*Example:* `"Organization Administrator"` | No |
| rolePermissions | [ [RoleGroupRoleXref](#rolegrouprolexref) ] | Roles Permissions | No |
| shortCode | string | Short code for role group<br/>*Example:* `"admin"` | No |
| systemDefined | string | System defined role group<br/>*Example:* `true` | No |

#### RoleGroupRoleXref

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long |  | No |
| optional | boolean |  | No |
| role | [Role](#role) |  | No |
| roleGroupId | long |  | No |

#### RolePermissionInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| can_delete | boolean | Can Delete Access<br/>*Example:* `false` | No |
| can_read | boolean | Can Read Access<br/>*Example:* `false` | No |
| can_write | boolean | Can Write Access<br/>*Example:* `false` | No |

#### RoleShortInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Application Name<br/>*Enum:* `"CONSOLE"`, `"ERP"`, `"ORGANISATION"`, `"ATTENDANCE"`, `"EXPENSE"`, `"CRM"`, `"PEOPLE"`, `"CHAT"`, `"ALL"`, `"REPORT_BUILDER"`, `"SHOP"`, `"WORKFLOW_ENGINE"`, `"CRM_PLUS"`, `"MRP"`<br/>*Example:* `"ERP"` | No |
| guest | boolean | Is Guest<br/>*Example:* `true` | No |
| roleGroupName | string | Role Group<br/>*Example:* `"Auditor"` | No |
| shortCode | string | Role Group<br/>*Example:* `"admin"` | No |

#### SetContactEmailDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string | contact to be set<br/>*Example:* `"New contact"` | No |
| email | string | Email to be set<br/>*Example:* `"new email"` | No |
| isEmailChangeContact | boolean | email or contact to be set<br/>*Example:* `false` | No |

#### SetupCompletion

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| chartOfAccounts | boolean |  | No |
| contacts | boolean |  | No |
| openingBalances | boolean |  | No |
| productAndServices | boolean |  | No |

#### SignUpResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| authenticationResultType | [AuthenticationResultType](#authenticationresulttype) |  | No |
| tenantId | long | Tenant ID<br/>*Example:* `123` | No |
| tenantName | string | Tenant name<br/>*Example:* `"Deskera"` | No |
| userId | long | User Id<br/>*Example:* `"1L"` | No |

#### Sort

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| empty | boolean |  | No |
| sorted | boolean |  | No |
| unsorted | boolean |  | No |

#### SsoVerifyRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| apisid | string | APISID<br/>*Example:* `"eyJjdHkiOiJKV1QiLCJlbmMiOiJ.."` | Yes |

#### SwitchTenantRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| refreshToken | string | Refresh token<br/>*Example:* `"eyJjdHkiOiJKV1QiLCJlbmMiOiJ.."` | Yes |
| skipTenantCall | boolean | Skip tenant service switch tenant call.<br/>*Example:* `true` | No |
| tenantId | long | Tenant ID<br/>*Example:* `1` | Yes |
| userName | string | Username<br/>*Example:* `"+65-1234-5678"` | Yes |

#### TCSCollectionNatureRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | ID<br/>*Example:* `10` | No |
| name | string | Tax Name<br/>*Example:* `"206C(1H) Sales of Goods"` | No |

#### TCSCollectionNatureResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | ID<br/>*Example:* `10` | No |
| name | string | Tax Name<br/>*Example:* `"206C(1H) Sales of Goods"` | No |

#### TCSSettingsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountPayable | string | Account Payable<br/>*Example:* `"AC-0001"` | No |
| accountReceivable | string | Account Receivable<br/>*Example:* `"AC-0002"` | No |
| active | boolean | Active<br/>*Example:* `true` | No |
| id | long | ID<br/>*Example:* `10` | No |
| ratePercentage | float | Rate Percentage<br/>*Example:* `5.3` | No |
| taxName | string | Tax Name<br/>*Example:* `"tax-01"` | No |
| tcsCollectionNatureId | long | TCS Nature ID.<br/>*Example:* `1` | No |

#### TCSSettingsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountPayable | string | Account Payable<br/>*Example:* `"AC-0001"` | No |
| accountReceivable | string | Account Receivable<br/>*Example:* `"AC-0002"` | No |
| active | boolean | Active<br/>*Example:* `true` | No |
| id | long | ID<br/>*Example:* `10` | No |
| ratePercentage | float | Rate Percentage<br/>*Example:* `5.3` | No |
| taxName | string | Tax Name<br/>*Example:* `"tax-01"` | No |
| tcsCollectionNatureId | long | TCS Nature ID.<br/>*Example:* `1` | No |

#### Tenant

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean |  | No |
| address1 | string |  | No |
| address2 | string |  | No |
| city | string |  | No |
| contacts | [TenantContact](#tenantcontact) |  | No |
| countryLookUpCode | string | *Enum:* `"AF"`, `"AX"`, `"AL"`, `"DZ"`, `"AS"`, `"AD"`, `"AO"`, `"AI"`, `"AQ"`, `"AG"`, `"AR"`, `"AM"`, `"AW"`, `"AU"`, `"AT"`, `"AZ"`, `"BS"`, `"BH"`, `"BD"`, `"BB"`, `"BY"`, `"BE"`, `"BZ"`, `"BJ"`, `"BM"`, `"BT"`, `"BO"`, `"BQ"`, `"BA"`, `"BW"`, `"BV"`, `"BR"`, `"IO"`, `"UM"`, `"VG"`, `"VI"`, `"BN"`, `"BG"`, `"BF"`, `"BI"`, `"KH"`, `"CM"`, `"CA"`, `"CV"`, `"KY"`, `"CF"`, `"TD"`, `"CL"`, `"CN"`, `"CX"`, `"CC"`, `"CO"`, `"KM"`, `"CG"`, `"CD"`, `"CK"`, `"CR"`, `"HR"`, `"CU"`, `"CW"`, `"CY"`, `"CZ"`, `"DK"`, `"DJ"`, `"DM"`, `"DO"`, `"EC"`, `"EG"`, `"SV"`, `"GQ"`, `"ER"`, `"EE"`, `"ET"`, `"FK"`, `"FO"`, `"FJ"`, `"FI"`, `"FR"`, `"GF"`, `"PF"`, `"TF"`, `"GA"`, `"GM"`, `"GE"`, `"DE"`, `"GH"`, `"GI"`, `"GR"`, `"GL"`, `"GD"`, `"GP"`, `"GU"`, `"GT"`, `"GG"`, `"GN"`, `"GW"`, `"GY"`, `"HT"`, `"HM"`, `"VA"`, `"HN"`, `"HK"`, `"HU"`, `"IS"`, `"IN"`, `"ID"`, `"CI"`, `"IR"`, `"IQ"`, `"IE"`, `"IM"`, `"IL"`, `"IT"`, `"JM"`, `"JP"`, `"JE"`, `"JO"`, `"KZ"`, `"KE"`, `"KI"`, `"KW"`, `"KG"`, `"LA"`, `"LV"`, `"LB"`, `"LS"`, `"LR"`, `"LY"`, `"LI"`, `"LT"`, `"LU"`, `"MO"`, `"MK"`, `"MG"`, `"MW"`, `"MY"`, `"MV"`, `"ML"`, `"MT"`, `"MH"`, `"MQ"`, `"MR"`, `"MU"`, `"YT"`, `"MX"`, `"FM"`, `"MD"`, `"MC"`, `"MN"`, `"ME"`, `"MS"`, `"MA"`, `"MZ"`, `"MM"`, `"NA"`, `"NR"`, `"NP"`, `"NL"`, `"NC"`, `"NZ"`, `"NI"`, `"NE"`, `"NG"`, `"NU"`, `"NF"`, `"KP"`, `"MP"`, `"NO"`, `"OM"`, `"PK"`, `"PW"`, `"PS"`, `"PA"`, `"PG"`, `"PY"`, `"PE"`, `"PH"`, `"PN"`, `"PL"`, `"PT"`, `"PR"`, `"QA"`, `"XK"`, `"RE"`, `"RO"`, `"RU"`, `"RW"`, `"BL"`, `"SH"`, `"KN"`, `"LC"`, `"MF"`, `"PM"`, `"VC"`, `"WS"`, `"SM"`, `"ST"`, `"SA"`, `"SN"`, `"RS"`, `"SC"`, `"SL"`, `"SG"`, `"SX"`, `"SK"`, `"SI"`, `"SB"`, `"SO"`, `"ZA"`, `"GS"`, `"KR"`, `"SS"`, `"ES"`, `"LK"`, `"SD"`, `"SR"`, `"SJ"`, `"SZ"`, `"SE"`, `"CH"`, `"SY"`, `"TW"`, `"TJ"`, `"TZ"`, `"TH"`, `"TL"`, `"TG"`, `"TK"`, `"TO"`, `"TT"`, `"TN"`, `"TR"`, `"TM"`, `"TC"`, `"TV"`, `"UG"`, `"UA"`, `"AE"`, `"GB"`, `"UK"`, `"US"`, `"US1"`, `"UY"`, `"UZ"`, `"VU"`, `"VE"`, `"VN"`, `"WF"`, `"EH"`, `"YE"`, `"ZM"`, `"ZW"` | No |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| currencyLookUpCode | string |  | No |
| dateFormatLookUpCode | string |  | No |
| defaultPaymentTerm | long |  | No |
| deleted | boolean |  | No |
| demoOrg | boolean |  | No |
| id | long |  | No |
| isBookkeeper | boolean |  | No |
| isPartner | boolean |  | No |
| isShop | boolean |  | No |
| logoUrl | string |  | No |
| name | string |  | No |
| orgSetupCompleted | boolean |  | No |
| postalCode | string |  | No |
| promoCode | [PromoCode](#promocode) |  | No |
| source | string | *Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"` | No |
| state | string |  | No |
| tenantMeta | [TenantMeta](#tenantmeta) |  | No |
| timezoneLookUpCode | string |  | No |
| token | string |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |
| verified | boolean |  | No |

#### TenantAttributeRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalSettings | object | Additional org settings | No |
| address | [Address](#address) | Address | No |
| allowNegativeInventory | boolean | Allow negative inventory<br/>*Example:* `true` | No |
| australianBusinessNo | string | Australian Business Number (ABN).<br/>*Example:* `123456789098765` | No |
| basReportingMethod | string | BAS Reporting Method (SIMPLER / FULL)<br/>*Enum:* `"SIMPLER"`, `"FULL"`<br/>*Example:* `"SIMPLER"` | No |
| billingAddresses | [ [Address](#address) ] | Billing addresses | No |
| bookBeginningStartDate | dateTime | Book beginning date<br/>*Example:* `"01-01-2020"` | No |
| businessRegistrationNo | string | businessRegistrationNo<br/>*Example:* `"22AAAAAA00"` | No |
| businessRegistrationNoUK | string | Organization Business Reg No. for UK<br/>*Example:* `"B91234567X"` | No |
| canadianBusinessNo | string | Canadian Business Number (ABN).<br/>*Example:* `123456789098765` | No |
| cinIndia | string | Company CIN Number<br/>*Example:* `"U12345AA1234AAA123456"` | No |
| companyRegistrationNumberDE | string | Company Registration Number<br/>*Example:* `123456789` | No |
| companyRegistrationNumberNL | string | Company Registration Number<br/>*Example:* `"B91234567X"` | No |
| complianceEnabled | boolean | Enable Compliance<br/>*Example:* `false` | No |
| compositionSchemeType | string | The percent tax payable under the Composition Scheme. Applicable when gstRegistered=true<br/>*Enum:* `"ONE_PERCENT"`, `"TWO_PERCENT"`, `"FIVE_PERCENT"`, `"SIX_PERCENT"`<br/>*Example:* `"SIX_PERCENT"` | No |
| countryLookUpCode | string | Country lookup code for the Company.<br/>*Enum:* `"AF"`, `"AX"`, `"AL"`, `"DZ"`, `"AS"`, `"AD"`, `"AO"`, `"AI"`, `"AQ"`, `"AG"`, `"AR"`, `"AM"`, `"AW"`, `"AU"`, `"AT"`, `"AZ"`, `"BS"`, `"BH"`, `"BD"`, `"BB"`, `"BY"`, `"BE"`, `"BZ"`, `"BJ"`, `"BM"`, `"BT"`, `"BO"`, `"BQ"`, `"BA"`, `"BW"`, `"BV"`, `"BR"`, `"IO"`, `"UM"`, `"VG"`, `"VI"`, `"BN"`, `"BG"`, `"BF"`, `"BI"`, `"KH"`, `"CM"`, `"CA"`, `"CV"`, `"KY"`, `"CF"`, `"TD"`, `"CL"`, `"CN"`, `"CX"`, `"CC"`, `"CO"`, `"KM"`, `"CG"`, `"CD"`, `"CK"`, `"CR"`, `"HR"`, `"CU"`, `"CW"`, `"CY"`, `"CZ"`, `"DK"`, `"DJ"`, `"DM"`, `"DO"`, `"EC"`, `"EG"`, `"SV"`, `"GQ"`, `"ER"`, `"EE"`, `"ET"`, `"FK"`, `"FO"`, `"FJ"`, `"FI"`, `"FR"`, `"GF"`, `"PF"`, `"TF"`, `"GA"`, `"GM"`, `"GE"`, `"DE"`, `"GH"`, `"GI"`, `"GR"`, `"GL"`, `"GD"`, `"GP"`, `"GU"`, `"GT"`, `"GG"`, `"GN"`, `"GW"`, `"GY"`, `"HT"`, `"HM"`, `"VA"`, `"HN"`, `"HK"`, `"HU"`, `"IS"`, `"IN"`, `"ID"`, `"CI"`, `"IR"`, `"IQ"`, `"IE"`, `"IM"`, `"IL"`, `"IT"`, `"JM"`, `"JP"`, `"JE"`, `"JO"`, `"KZ"`, `"KE"`, `"KI"`, `"KW"`, `"KG"`, `"LA"`, `"LV"`, `"LB"`, `"LS"`, `"LR"`, `"LY"`, `"LI"`, `"LT"`, `"LU"`, `"MO"`, `"MK"`, `"MG"`, `"MW"`, `"MY"`, `"MV"`, `"ML"`, `"MT"`, `"MH"`, `"MQ"`, `"MR"`, `"MU"`, `"YT"`, `"MX"`, `"FM"`, `"MD"`, `"MC"`, `"MN"`, `"ME"`, `"MS"`, `"MA"`, `"MZ"`, `"MM"`, `"NA"`, `"NR"`, `"NP"`, `"NL"`, `"NC"`, `"NZ"`, `"NI"`, `"NE"`, `"NG"`, `"NU"`, `"NF"`, `"KP"`, `"MP"`, `"NO"`, `"OM"`, `"PK"`, `"PW"`, `"PS"`, `"PA"`, `"PG"`, `"PY"`, `"PE"`, `"PH"`, `"PN"`, `"PL"`, `"PT"`, `"PR"`, `"QA"`, `"XK"`, `"RE"`, `"RO"`, `"RU"`, `"RW"`, `"BL"`, `"SH"`, `"KN"`, `"LC"`, `"MF"`, `"PM"`, `"VC"`, `"WS"`, `"SM"`, `"ST"`, `"SA"`, `"SN"`, `"RS"`, `"SC"`, `"SL"`, `"SG"`, `"SX"`, `"SK"`, `"SI"`, `"SB"`, `"SO"`, `"ZA"`, `"GS"`, `"KR"`, `"SS"`, `"ES"`, `"LK"`, `"SD"`, `"SR"`, `"SJ"`, `"SZ"`, `"SE"`, `"CH"`, `"SY"`, `"TW"`, `"TJ"`, `"TZ"`, `"TH"`, `"TL"`, `"TG"`, `"TK"`, `"TO"`, `"TT"`, `"TN"`, `"TR"`, `"TM"`, `"TC"`, `"TV"`, `"UG"`, `"UA"`, `"AE"`, `"GB"`, `"UK"`, `"US"`, `"US1"`, `"UY"`, `"UZ"`, `"VU"`, `"VE"`, `"VN"`, `"WF"`, `"EH"`, `"YE"`, `"ZM"`, `"ZW"`<br/>*Example:* `"SG"` | No |
| currency | string | Currency<br/>*Example:* `"SGD"` | No |
| currencyCodesToActivate | [ string ] | Currency codes to activate | No |
| currencyLookUpCode | string | Currency lookup code for the Company.<br/>*Example:* `"SGD"` | No |
| dateFormat | string | Date format<br/>*Example:* `"DF001"` | No |
| decimalScale | integer | Decimal scale for amounts for Org<br/>*Example:* `3` | No |
| defaultPaymentTerm | long | Payment Term Id<br/>*Example:* `1` | No |
| enableReverseCharge | boolean | Whether the Tenant has enabled reverse charge in Sales Transaction. Applicable when gstRegistered=true<br/>*Example:* `true` | No |
| enterpriseNumberBE | string | Enterprise Number.<br/>*Example:* `123456789098765` | No |
| exciseAccount | string | Account to set for Excise Payable<br/>*Example:* `"AC0001"` | No |
| exciseAccountSA | string | Account to set for Excise Payable<br/>*Example:* `"AC400010"` | No |
| exciseApplicable | boolean | True to allow excise flow<br/>*Example:* `true` | No |
| exciseApplicableSA | boolean | True to allow excise flow for UAE country<br/>*Example:* `true` | No |
| exemption | boolean | exemption<br/>*Example:* `true` | No |
| exemptionCerificate | boolean | Whether the Exemption Cerificate is availble or not.<br/>*Example:* `true` | No |
| exemptionCriteria | string | Organization Exemption criteria. for Malaysia<br/>*Example:* `"EX1234567X"` | No |
| exemptionNo | string | exemptionNo<br/>*Example:* `"22AAAAAA0"` | No |
| expiryDate | dateTime | The Date on Which SST was registered. Date Format is dd-mm-yyyy. Applicable when sstRegistered=true<br/>*Example:* `"01-01-2020"` | No |
| financialStartDate | dateTime | Financial start date<br/>*Example:* `"01-01-2020"` | No |
| flatRatePercentageListUK | [ [FlatRatePercentageListUK](#flatratepercentagelistuk) ] | Whether the Marketing Tax Digital is on or off.<br/>*Example:* `true` | No |
| fyClosingPeriodEndDate | dateTime | Closing End date<br/>*Example:* `"01-01-2020"` | No |
| gstNo | string | Organization GST Reg No.<br/>*Example:* `"GST-00001"` | No |
| gstNoDE | string | Tax Number<br/>*Example:* `"NL123456789B01"` | No |
| gstNoNZ | string | GST Number<br/>*Example:* `"111-111-111"` | No |
| gstNumber | string | Canada gst number<br/>*Example:* `123456789098765` | No |
| gstRegistered | boolean | Gst is registered<br/>*Example:* `false` | No |
| gstRegistrationDate | dateTime | The Date on Which GST was registered. Date Format is dd-mm-yyyy. Applicable when gstRegistered=true<br/>*Example:* `"01-01-2020"` | No |
| gstin | string | Organization GSTIN No.<br/>*Example:* `"22AAAAAA00000AA21"` | No |
| ilDeductionFileId | string | Israel specific deduction file id<br/>*Example:* `"deduction file id"` | No |
| ilEngagementType | string | Israel specific engagement type<br/>*Example:* `"engagement type"` | No |
| ilIncomeTaxNo | string | Israel specific income tax no<br/>*Example:* `"income tax no"` | No |
| ilLegalName | string | Israel specific legal name<br/>*Example:* `"legal name"` | No |
| ilNationalInsuranceNo | string | Israel specific national insurance no<br/>*Example:* `"national insurance no"` | No |
| ilParentSubsidiaryName | string | Israel specific parent subsidiary name<br/>*Example:* `"parent subsidiary name"` | No |
| ilReturnAddress | [ [Address](#address) ] | Israel Specific Billing Address | No |
| ilReturnEmail | string | Israel specific return email<br/>*Example:* `"return email"` | No |
| ilVatCode | string | Israel specific vat code<br/>*Example:* `"vat code"` | No |
| ilVatRegistrationNo | string | Israel specific vat registration no<br/>*Example:* `"vat registration no"` | No |
| ilWithholdingTaxAccount | string | Israel specific withholding tax account<br/>*Example:* `"withholding tax account"` | No |
| implementFIFOForAdvTracking | boolean |  | No |
| indiaEinvoice | boolean |  | No |
| indiaGstr | boolean |  | No |
| indiaGstrUsername | string |  | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| irdNo | string | IRD Number<br/>*Example:* `"111-111-111"` | No |
| isDesignatedZone | boolean | Is your business located in a Designated Zone?<br/>*Example:* `true` | No |
| isDesignatedZoneSA | boolean | Is your business located in a Designated Zone?<br/>*Example:* `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>*Example:* `true` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>*Example:* `true` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>*Example:* `true` | No |
| landedCostSettings | [LandedCostSettings](#landedcostsettings) | Landed Cost Category settings | No |
| logoUrl | string | Company Logo URL | No |
| marketingTaxDigitalUK | boolean | Whether the Marketing Tax Digital is on or off.<br/>*Example:* `true` | No |
| multicurrency | boolean | Enable multi-currency<br/>*Example:* `true` | No |
| name | string | Name of the Company.<br/>*Example:* `"Deskera"` | No |
| nexusStates | string | List of nexus states<br/>*Example:* `"AL,TX,CA,FL,MA,NY,AS"` | No |
| npwpNo | string | 15 digit indentification no. for VAT bussiness<br/>*Example:* `123456789098765` | No |
| numberFormat | string | Number format for amounts for Org<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"`<br/>*Example:* `"us"` | No |
| outsideContact | boolean | True to allow RCM flow for UAE country<br/>*Example:* `true` | No |
| outsideContactSA | boolean | True to allow RCM flow for UAE country<br/>*Example:* `true` | No |
| panIndia | string | Company PAN Number<br/>*Example:* `"AAAAA1111A"` | No |
| peppolId | string | Peppol Id<br/>*Example:* `"U000:9990::0001"` | No |
| peppolOptIn | boolean | peppol Opt In flag<br/>*Example:* `true` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| rcmAccount | string | Account to set for RCM<br/>*Example:* `"AC400010"` | No |
| rcmAccountSA | string | Account to set for RCM<br/>*Example:* `"AC400010"` | No |
| registeredForVatSA | boolean | Registered for vat flag<br/>*Example:* `false` | No |
| registeredToCompositionScheme | boolean | Whether the Tenant is registered to Composition Scheme. Applicable when gstRegistered=true<br/>*Example:* `true` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesTaxRegistrationNo | string | salesTaxRegistrationNo<br/>*Example:* `"22AAAAAA"` | No |
| serviceTaxRegistrationNo | string | serviceTaxRegistrationNo<br/>*Example:* `"22AAAAAA0"` | No |
| sezOrImportExport | boolean | Enable Sez for company<br/>*Example:* `true` | No |
| shippingAddresses | [ [Address](#address) ] | Shipping addresses | No |
| tanNumberIndia | string | Company TAN Number<br/>*Example:* `"GSFD2376S"` | No |
| taxFileNumber | string | Tax File Number<br/>*Example:* `123456789098765` | No |
| taxNo | string | Organization Tax No.<br/>*Example:* `"TAX-00001"` | No |
| tcsEnabled | boolean | whether TCS is enabled or not<br/>*Example:* `false` | No |
| tdsPaymentInterestRateIndia | number | TDS Payment Interest Rate for India<br/>*Example:* `"1%"` | No |
| tenantInfoInSA | [TenantInfoSASaudiLanguage](#tenantinfosasaudilanguage) | Arabic Details<br/>*Example:* `true` | No |
| tenantMeta | [TenantMeta](#tenantmeta) | Tenant Meta info such as no of Employees, Industry | No |
| timezone | string | Timezone<br/>*Example:* `"TZ001"` | No |
| trackDigitalServices | boolean | Whether the Tenant has enables tracking of digital services to overseas customers. Applicable when gstRegistered=true<br/>*Example:* `true` | No |
| uenNo | string | Organization UEN No.<br/>*Example:* `"UEN-00001"` | No |
| useSeparateSequenceFormat | boolean | Use separate sequence format<br/>*Example:* `true` | No |
| vatAccountNumberSA | string | Vat Account Number<br/>*Example:* `"NL123456789B01"` | No |
| vatIdentificationNumberBE | string | VAT Identification Number.<br/>*Example:* `123456789098765` | No |
| vatIdentificationNumberDE | string | VAT Identification Number<br/>*Example:* `"NL123456789B01"` | No |
| vatIdentificationNumberNL | string | VAT Identification Number<br/>*Example:* `"B91234567X"` | No |
| vatIdentificationNumberUK | string | VAT Number<br/>*Example:* `123456789098765` | No |
| vatNoPhilippines | string | Philippines specific Contact VAT No.<br/>*Example:* `"012-345-678-910"` | No |
| vatNoUAE | string | UAE specific Organization VAT No.<br/>*Example:* `"012-345-678-910"` | No |
| vatReturnFrequencySA | string | VAT Return Frequency<br/>*Example:* `"Monthly"` | No |
| vatSchemeUK | string | VAT Scheme<br/>*Example:* `"Standard scheme"` | No |
| vatStatusPhilippines | string | Philippines specific Contact VAT Status<br/>*Example:* `"Input VAT"` | No |
| vendorId | string | vendorId<br/>*Example:* `12345` | No |

#### TenantBarcodeSettingDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| activateGeneralBarcode | boolean | Activate General Barcode Functionality<br/>*Example:* `true` | No |
| activateGeneralBarcodeSODO | boolean | Activate General Barcode Functionality for SO/DO<br/>*Example:* `true` | No |
| barcodeLabelHeight | long | Barcode Label Height in mm<br/>*Example:* `12` | No |
| barcodeLeftMargin | long | Barcode Left Margin in mm<br/>*Example:* `10` | No |
| barcodeTopMargin | long | Barcode Top Margin in mm<br/>*Example:* `10` | No |
| barcodeType | string | Barcode Type<br/>*Enum:* `"CODE_128"`, `"CODE_39"`, `"EAN_8"`, `"EAN_13"`, `"UPC_A"`, `"DATAMATRIX"`<br/>*Example:* `"CODE_128"` | No |
| batchExpiryDateFontSize | long | Batch Expiry Date Font Size<br/>*Example:* `-10` | No |
| batchExpiryDatePrefix | string | Batch Expiry Date Prefix<br/>*Example:* `"Saint"` | No |
| batchExpiryDateTranslateX | long | Batch Expiry Date Translate X<br/>*Example:* `-40` | No |
| batchExpiryDateTranslateY | long | Batch Expiry Date Translate Y<br/>*Example:* `-40` | No |
| batchManufactureDateFontSize | long | Batch Manufacture Date Font Size<br/>*Example:* `-10` | No |
| batchManufactureDatePrefix | string | Batch Manufacture Date Prefix<br/>*Example:* `"Saint"` | No |
| batchManufactureDateTranslateX | long | Batch Manufacture Date Translate X<br/>*Example:* `-40` | No |
| batchManufactureDateTranslateY | long | Batch Manufacture Date Translate Y<br/>*Example:* `-40` | No |
| companyNameFontSize | long | Company Name Font Size<br/>*Example:* `-10` | No |
| companyNamePrefix | string | Company Name Prefix<br/>*Example:* `"Saint"` | No |
| companyNameTranslateX | long | Company Name Translate X<br/>*Example:* `-40` | No |
| companyNameTranslateY | long | Company Name Translate Y<br/>*Example:* `-40` | No |
| dpi | long | DPI in mm<br/>*Example:* `99` | No |
| generateBarcodeForWorkOrderSettings | boolean | Generate Barcode for work order<br/>*Example:* `true` | No |
| generateBarcodeWithBatchExpiryDate | boolean | Generate Barcode With Batch Expiry Date<br/>*Example:* `true` | No |
| generateBarcodeWithBatchManufactureDate | boolean | Generate Barcode With Batch Manufacture Date<br/>*Example:* `true` | No |
| generateBarcodeWithPriceTag | boolean | Generate Barcode With Price tag<br/>*Example:* `true` | No |
| generateBarcodeWithProduct | boolean | Generate Barcode With Product<br/>*Example:* `true` | No |
| generateBarcodeWithProductCode | boolean | Generate Barcode With Product<br/>*Example:* `true` | No |
| generateBarcodeWithRetailPrice | boolean | Generate Barcode With Retail Price<br/>*Example:* `true` | No |
| generateBarcodeWithTenantName | boolean | Generate Barcode With TenantName<br/>*Example:* `true` | No |
| generateBarcodeforJobcard | boolean | Generate Barcode for Job card<br/>*Example:* `true` | No |
| generateBarcodeforJobcardAlongWithOperator | boolean | Generate Barcode for Job card along with operator<br/>*Example:* `true` | No |
| height | long | Height in mm<br/>*Example:* `12` | No |
| maxRetailPriceFontSize | long | Max Retail Price Font Size<br/>*Example:* `-10` | No |
| maxRetailPricePrefix | string | Max Retail Price Prefix<br/>*Example:* `"Saint"` | No |
| maxRetailPriceTranslateX | long | Max Retail Price Translate X<br/>*Example:* `-40` | No |
| maxRetailPriceTranslateY | long | Max Retail Price Translate Y<br/>*Example:* `-40` | No |
| priceFontSize | long | Price Font Size<br/>*Example:* `-10` | No |
| pricePrefix | string | Price Prefix<br/>*Example:* `"Saint"` | No |
| priceTranslateX | long | Price Translate X<br/>*Example:* `-40` | No |
| priceTranslateY | long | Price Translate Y<br/>*Example:* `-40` | No |
| printBatchExpiryDateDirection | string | Print Batch Expiry Date Direction<br/>*Enum:* `"RIGHT"`, `"LEFT"`, `"TOP"`, `"BOTTOM"`<br/>*Example:* `"RIGHT"` | No |
| printBatchManufactureDateDirection | string | Print Batch Manufacture Date Direction<br/>*Enum:* `"RIGHT"`, `"LEFT"`, `"TOP"`, `"BOTTOM"`<br/>*Example:* `"RIGHT"` | No |
| printCompanyNameType | string | Print Company Name Type<br/>*Enum:* `"RIGHT"`, `"LEFT"`, `"TOP"`, `"BOTTOM"`<br/>*Example:* `"RIGHT"` | No |
| printPriceType | string | Print Price Type<br/>*Enum:* `"RIGHT"`, `"LEFT"`, `"TOP"`, `"BOTTOM"`<br/>*Example:* `"RIGHT"` | No |
| printProductCodeDirection | string | Print Product Code Direction<br/>*Enum:* `"RIGHT"`, `"LEFT"`, `"TOP"`, `"BOTTOM"`<br/>*Example:* `"RIGHT"` | No |
| printProductNameDirection | string | Print Product Name Direction<br/>*Enum:* `"RIGHT"`, `"LEFT"`, `"TOP"`, `"BOTTOM"`<br/>*Example:* `"RIGHT"` | No |
| printRetailPriceDirection | string | Print Retail Price Direction<br/>*Enum:* `"RIGHT"`, `"LEFT"`, `"TOP"`, `"BOTTOM"`<br/>*Example:* `"RIGHT"` | No |
| productCodeFontSize | long | Product Code Font Size<br/>*Example:* `-10` | No |
| productCodePrefix | string | Product Code Prefix<br/>*Example:* `"Saint"` | No |
| productCodeTranslateX | long | Product Code Translate X<br/>*Example:* `-40` | No |
| productCodeTranslateY | long | Product Code Translate Y<br/>*Example:* `-40` | No |
| productNameFontSize | long | Product Name Font Size<br/>*Example:* `-10` | No |
| productNamePrefix | string | Product Name Prefix<br/>*Example:* `"Saint"` | No |
| productNameTranslateX | long | Product Name Translate X<br/>*Example:* `-40` | No |
| productNameTranslateY | long | Product Name Translate Y<br/>*Example:* `-40` | No |
| skuEnable | boolean | EKU enable/disable<br/>*Example:* `true` | No |
| skuRename | string | rename SKU field as<br/>*Example:* `"SKU001"` | No |

#### TenantBooksSubscriptionDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| inTrial | boolean | Is in trial<br/>*Example:* `true` | No |
| planId | string | Plan Id<br/>*Example:* `"plan_L1Ko5kjP"` | No |
| planName | string | Plan Name<br/>*Example:* `"Essential"` | No |
| status | string | Subscription Status<br/>*Example:* `"active"` | No |
| trialDays | integer | Trial Days<br/>*Example:* `30` | No |
| trialOver | boolean | Is trial over<br/>*Example:* `false` | No |
| updatedOn | dateTime | UpdatedOn<br/>*Example:* `"2020-07-09T02:13:27.404Z"` | No |

#### TenantContact

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| email | string | Email<br/>*Example:* `"contact@deskera.com"` | No |
| fax | string | Fax number<br/>*Example:* `123454234` | No |
| phone | string | Phone number<br/>*Example:* `12345433` | No |
| website | string | Website<br/>*Example:* `"www.deskera.com"` | No |

#### TenantControlAccountsDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| gainLossonForeignExchangeAccountCode | string | Gain/Loss on Foreign Exchange<br/>*Example:* `"A002"` | No |
| itcReversalAccountCode | string | ITC reversal<br/>*Example:* `"AC-0000020"` | No |
| roundOffAccountCode | string | Round Off (Default) Code<br/>*Example:* `"A002"` | No |
| roundingDifferenceAccountCode | string | Rounding Difference Code<br/>*Example:* `"A001"` | No |
| salesTaxAccountCode | string | Sales Tax<br/>*Example:* `"AC-0000020"` | No |

#### TenantCountryDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| countryLookUpCode | string | Country code<br/>*Enum:* `"AF"`, `"AX"`, `"AL"`, `"DZ"`, `"AS"`, `"AD"`, `"AO"`, `"AI"`, `"AQ"`, `"AG"`, `"AR"`, `"AM"`, `"AW"`, `"AU"`, `"AT"`, `"AZ"`, `"BS"`, `"BH"`, `"BD"`, `"BB"`, `"BY"`, `"BE"`, `"BZ"`, `"BJ"`, `"BM"`, `"BT"`, `"BO"`, `"BQ"`, `"BA"`, `"BW"`, `"BV"`, `"BR"`, `"IO"`, `"UM"`, `"VG"`, `"VI"`, `"BN"`, `"BG"`, `"BF"`, `"BI"`, `"KH"`, `"CM"`, `"CA"`, `"CV"`, `"KY"`, `"CF"`, `"TD"`, `"CL"`, `"CN"`, `"CX"`, `"CC"`, `"CO"`, `"KM"`, `"CG"`, `"CD"`, `"CK"`, `"CR"`, `"HR"`, `"CU"`, `"CW"`, `"CY"`, `"CZ"`, `"DK"`, `"DJ"`, `"DM"`, `"DO"`, `"EC"`, `"EG"`, `"SV"`, `"GQ"`, `"ER"`, `"EE"`, `"ET"`, `"FK"`, `"FO"`, `"FJ"`, `"FI"`, `"FR"`, `"GF"`, `"PF"`, `"TF"`, `"GA"`, `"GM"`, `"GE"`, `"DE"`, `"GH"`, `"GI"`, `"GR"`, `"GL"`, `"GD"`, `"GP"`, `"GU"`, `"GT"`, `"GG"`, `"GN"`, `"GW"`, `"GY"`, `"HT"`, `"HM"`, `"VA"`, `"HN"`, `"HK"`, `"HU"`, `"IS"`, `"IN"`, `"ID"`, `"CI"`, `"IR"`, `"IQ"`, `"IE"`, `"IM"`, `"IL"`, `"IT"`, `"JM"`, `"JP"`, `"JE"`, `"JO"`, `"KZ"`, `"KE"`, `"KI"`, `"KW"`, `"KG"`, `"LA"`, `"LV"`, `"LB"`, `"LS"`, `"LR"`, `"LY"`, `"LI"`, `"LT"`, `"LU"`, `"MO"`, `"MK"`, `"MG"`, `"MW"`, `"MY"`, `"MV"`, `"ML"`, `"MT"`, `"MH"`, `"MQ"`, `"MR"`, `"MU"`, `"YT"`, `"MX"`, `"FM"`, `"MD"`, `"MC"`, `"MN"`, `"ME"`, `"MS"`, `"MA"`, `"MZ"`, `"MM"`, `"NA"`, `"NR"`, `"NP"`, `"NL"`, `"NC"`, `"NZ"`, `"NI"`, `"NE"`, `"NG"`, `"NU"`, `"NF"`, `"KP"`, `"MP"`, `"NO"`, `"OM"`, `"PK"`, `"PW"`, `"PS"`, `"PA"`, `"PG"`, `"PY"`, `"PE"`, `"PH"`, `"PN"`, `"PL"`, `"PT"`, `"PR"`, `"QA"`, `"XK"`, `"RE"`, `"RO"`, `"RU"`, `"RW"`, `"BL"`, `"SH"`, `"KN"`, `"LC"`, `"MF"`, `"PM"`, `"VC"`, `"WS"`, `"SM"`, `"ST"`, `"SA"`, `"SN"`, `"RS"`, `"SC"`, `"SL"`, `"SG"`, `"SX"`, `"SK"`, `"SI"`, `"SB"`, `"SO"`, `"ZA"`, `"GS"`, `"KR"`, `"SS"`, `"ES"`, `"LK"`, `"SD"`, `"SR"`, `"SJ"`, `"SZ"`, `"SE"`, `"CH"`, `"SY"`, `"TW"`, `"TJ"`, `"TZ"`, `"TH"`, `"TL"`, `"TG"`, `"TK"`, `"TO"`, `"TT"`, `"TN"`, `"TR"`, `"TM"`, `"TC"`, `"TV"`, `"UG"`, `"UA"`, `"AE"`, `"GB"`, `"UK"`, `"US"`, `"US1"`, `"UY"`, `"UZ"`, `"VU"`, `"VE"`, `"VN"`, `"WF"`, `"EH"`, `"YE"`, `"ZM"`, `"ZW"`<br/>*Example:* `"SG"` | Yes |
| currencyLookUpCode | string | Country currency<br/>*Example:* `"SGD"` | Yes |

#### TenantDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| barcodeSettings | [TenantSettings](#tenantsettings) | Barcode Settings | No |
| baseCurrency | string | Base Currency<br/>*Example:* `"C001"` | No |
| billingAddresses | [ [Address](#address) ] | Billing Addresses | No |
| controlAccountSettings | [TenantSettings](#tenantsettings) | Control Account Settings | No |
| financeSettings | [TenantSettings](#tenantsettings) | Finance Settings | No |
| inventorySettings | [TenantSettings](#tenantsettings) | Inventory Settings | No |
| logoUrl | string | Logo Url<br/>*Example:* `"http://sjhfksdf.com/logo.png"` | No |
| multicurrencyEnabled | boolean | Multicurrency enabled flag | No |
| name | string | Company name<br/>*Example:* `"Deskera"` | No |
| setupCompletion | [SetupCompletion](#setupcompletion) | Setup completion | No |
| shippingAddresses | [ [Address](#address) ] | Shipping Addresses | No |
| timezone | string | Timezone<br/>*Example:* `"TZ001"` | No |

#### TenantEInvoiceResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| peppolId | string | PeppolId Of Tenant<br/>*Example:* `"0195:sguen12345"` | No |
| tenantId | long | TenantId Of Tenant<br/>*Example:* `1` | No |
| userId | long | userId Of Tenant<br/>*Example:* `1` | No |

#### TenantFinanceDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| currentYearEarningAccountCode | string | current Year Earning Account Code<br/>*Example:* `"A002"` | No |
| financeEnd | string | Finance End<br/>*Example:* `"12/22"` | No |
| financeStart | string | Finance Start<br/>*Example:* `"1/23"` | No |
| payableAccountCode | string | Payable Account Code<br/>*Example:* `"A001"` | No |
| receivableAccountCode | string | Receivable Account Code<br/>*Example:* `"A002"` | No |
| taxAccountSequenceCode | string | Tax Account Sequence Code<br/>*Example:* `"AC-0000020"` | No |

#### TenantInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalSettings | object | Additional org settings | No |
| address | [Address](#address) | Address | No |
| allowNegativeInventory | boolean | Allow negative inventory<br/>*Example:* `true` | No |
| australianBusinessNo | string | Australian Business Number (ABN).<br/>*Example:* `123456789098765` | No |
| avalaraCode | string | Avalara Company Code | No |
| avalaraId | integer | Avalara Company ID | No |
| basReportingMethod | string | BAS Reporting Method (SIMPLER / FULL)<br/>*Enum:* `"SIMPLER"`, `"FULL"`<br/>*Example:* `"SIMPLER"` | No |
| billingAddresses | [ [Address](#address) ] | Billing addresses | No |
| bookBeginningStartDate | string | Book beginning date | No |
| cinIndia | string | Company CIN Number<br/>*Example:* `"U12345AA1234AAA123456"` | No |
| complianceEnabled | boolean | Whether the business collects tax or not. | No |
| contacts | [TenantContact](#tenantcontact) | Contact information | No |
| country | string | Country Code<br/>*Example:* `"SG"` | No |
| currency | string | Currency<br/>*Example:* `"SGD"` | No |
| dateFormat | string | Date format<br/>*Example:* `"DF001"` | No |
| decimalScale | integer | Decimal Scale | No |
| defaultPaymentTerm | long | Payment Term Id<br/>*Example:* `1` | No |
| financialStartDate | string | Financial Start Date | No |
| fyClosingPeriodEndDate | string | Closing Period End date | No |
| gstNo | string | Organization GST Reg No.<br/>*Example:* `"GST-00001"` | No |
| gstin | string | INDIA GST Reg num<br/>*Example:* `"27XXBCT3518Q1ZW"` | No |
| id | long | Tenant id<br/>*Example:* `1234` | No |
| implementFIFOForAdvTracking | boolean | Implement FIFO for advanced tracking | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| isBookKeeper | boolean | Flag to indicate if Organization is Book Keeper<br/>*Example:* `true` | No |
| isDemoOrg | boolean | Flag to indicate demo Organization<br/>*Example:* `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>*Example:* `false` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>*Example:* `false` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>*Example:* `false` | No |
| isShop | boolean | Flag to indicate if tenant is linked to a shop | No |
| landedCostSettings | [LandedCostSettings](#landedcostsettings) | Landed Cost Settings | No |
| logoUrl | string | Tenant logo<br/>*Example:* `"http://wwww.amazon-s3/tenant/mylogo.png"` | No |
| multicurrencyEnabled | boolean | Multicurrency enabled flag | No |
| name | string | Tenant name<br/>*Example:* `"Deskera"` | No |
| nexusStates | string | Avalara nexus states | No |
| numberFormat | string | Number Format<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"` | No |
| oldFlow | boolean | Flag to indicate if tenant has old flow for IN countries | No |
| orgSetupCompleted | boolean | Whether organization setup is completed or not?<br/>*Example:* `true` | No |
| panIndia | string | Company PAN Number<br/>*Example:* `"AAAAA1111A"` | No |
| peppolId | string | Peppol ID for SG | No |
| peppolOptIn | boolean | IS Peppol Opt In | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| serviceProvider | string | Service provider priority | No |
| shippingAddresses | [ [Address](#address) ] | Shipping addresses | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"` | No |
| tanNumberIndia | string | Company TAN Number<br/>*Example:* `"GSFD2376S"` | No |
| taxFileNumber | string | Tax File Number<br/>*Example:* `123456789098765` | No |
| taxNo | string | Organization Tax No.<br/>*Example:* `"TAX-00001"` | No |
| tenantCreatedDate | string | Tenant Created Date | No |
| tenantInfoInSA | [TenantInfoSASaudiLanguage](#tenantinfosasaudilanguage) | Arabic Details<br/>*Example:* `true` | No |
| timezone | string | Timezone<br/>*Example:* `"TZ001"` | No |
| uenNo | string | Organization UEN No.<br/>*Example:* `"UEN-00001"` | No |
| useSeparateSequenceFormat | boolean | Use separate sequence format<br/>*Example:* `true` | No |
| userId | long | User id | No |
| vendorId | string | Vendor ID for SG | No |

#### TenantInfoAustralia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalSettings | object | Additional org settings | No |
| address | [Address](#address) | Address | No |
| allowNegativeInventory | boolean | Allow negative inventory<br/>*Example:* `true` | No |
| australianBusinessNo | string | Australian Business Number (ABN).<br/>*Example:* `123456789098765` | No |
| basReportingMethod | string | BAS Reporting Method (SIMPLER / FULL)<br/>*Enum:* `"SIMPLER"`, `"FULL"`<br/>*Example:* `"SIMPLER"` | No |
| billingAddresses | [ [Address](#address) ] | Billing addresses | No |
| bookBeginningStartDate | string | Book beginning date | No |
| contacts | [TenantContact](#tenantcontact) | Contact information | No |
| country | string | Country Code<br/>*Example:* `"SG"` | No |
| currency | string | Currency<br/>*Example:* `"SGD"` | No |
| dateFormat | string | Date format<br/>*Example:* `"DF001"` | No |
| decimalScale | integer | Decimal Scale | No |
| defaultPaymentTerm | long | Payment Term Id<br/>*Example:* `1` | No |
| financialStartDate | string | Financial Start Date | No |
| fyClosingPeriodEndDate | string | Closing Period End date | No |
| id | long | Tenant id<br/>*Example:* `1234` | No |
| implementFIFOForAdvTracking | boolean | Implement FIFO for advanced tracking | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| isBookKeeper | boolean | Flag to indicate if Organization is Book Keeper<br/>*Example:* `true` | No |
| isDemoOrg | boolean | Flag to indicate demo Organization<br/>*Example:* `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>*Example:* `false` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>*Example:* `false` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>*Example:* `false` | No |
| landedCostSettings | [LandedCostSettings](#landedcostsettings) | Landed Cost Settings | No |
| logoUrl | string | Tenant logo<br/>*Example:* `"http://wwww.amazon-s3/tenant/mylogo.png"` | No |
| multicurrencyEnabled | boolean | Multicurrency enabled flag | No |
| name | string | Tenant name<br/>*Example:* `"Deskera"` | No |
| numberFormat | string | Number Format<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"` | No |
| orgSetupCompleted | boolean | Whether organization setup is completed or not?<br/>*Example:* `true` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| serviceProvider | string | Service provider priority | No |
| shippingAddresses | [ [Address](#address) ] | Shipping addresses | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"` | No |
| taxFileNumber | string | Tax File Number<br/>*Example:* `123456789098765` | No |
| tenantCreatedDate | string | Tenant Created Date | No |
| timezone | string | Timezone<br/>*Example:* `"TZ001"` | No |
| useSeparateSequenceFormat | boolean | Use separate sequence format<br/>*Example:* `true` | No |

#### TenantInfoBelgium

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalSettings | object | Additional org settings | No |
| address | [Address](#address) | Address | No |
| allowNegativeInventory | boolean | Allow negative inventory<br/>*Example:* `true` | No |
| billingAddresses | [ [Address](#address) ] | Billing addresses | No |
| bookBeginningStartDate | string | Book beginning date | No |
| contacts | [TenantContact](#tenantcontact) | Contact information | No |
| country | string | Country Code<br/>*Example:* `"SG"` | No |
| currency | string | Currency<br/>*Example:* `"SGD"` | No |
| dateFormat | string | Date format<br/>*Example:* `"DF001"` | No |
| decimalScale | integer | Decimal Scale | No |
| defaultPaymentTerm | long | Payment Term Id<br/>*Example:* `1` | No |
| enterpriseNumberBE | string | Enterprise Number.<br/>*Example:* `123456789098765` | No |
| financialStartDate | string | Financial Start Date | No |
| fyClosingPeriodEndDate | string | Closing Period End date | No |
| id | long | Tenant id<br/>*Example:* `1234` | No |
| implementFIFOForAdvTracking | boolean | Implement FIFO for advanced tracking | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| isBookKeeper | boolean | Flag to indicate if Organization is Book Keeper<br/>*Example:* `true` | No |
| isDemoOrg | boolean | Flag to indicate demo Organization<br/>*Example:* `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>*Example:* `false` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>*Example:* `false` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>*Example:* `false` | No |
| landedCostSettings | [LandedCostSettings](#landedcostsettings) | Landed Cost Settings | No |
| logoUrl | string | Tenant logo<br/>*Example:* `"http://wwww.amazon-s3/tenant/mylogo.png"` | No |
| multicurrencyEnabled | boolean | Multicurrency enabled flag | No |
| name | string | Tenant name<br/>*Example:* `"Deskera"` | No |
| numberFormat | string | Number Format<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"` | No |
| orgSetupCompleted | boolean | Whether organization setup is completed or not?<br/>*Example:* `true` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| serviceProvider | string | Service provider priority | No |
| shippingAddresses | [ [Address](#address) ] | Shipping addresses | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"` | No |
| tenantCreatedDate | string | Tenant Created Date | No |
| timezone | string | Timezone<br/>*Example:* `"TZ001"` | No |
| useSeparateSequenceFormat | boolean | Use separate sequence format<br/>*Example:* `true` | No |
| vatIdentificationNumberBE | string | VAT Identification Number<br/>*Example:* `123456789098765` | No |

#### TenantInfoCanada

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalSettings | object | Additional org settings | No |
| address | [Address](#address) | Address | No |
| allowNegativeInventory | boolean | Allow negative inventory<br/>*Example:* `true` | No |
| billingAddresses | [ [Address](#address) ] | Billing addresses | No |
| bookBeginningStartDate | string | Book beginning date | No |
| canadianBusinessNo | string | Canadian Business Number (CBN).<br/>*Example:* `123456789098765` | No |
| contacts | [TenantContact](#tenantcontact) | Contact information | No |
| country | string | Country Code<br/>*Example:* `"SG"` | No |
| currency | string | Currency<br/>*Example:* `"SGD"` | No |
| dateFormat | string | Date format<br/>*Example:* `"DF001"` | No |
| decimalScale | integer | Decimal Scale | No |
| defaultPaymentTerm | long | Payment Term Id<br/>*Example:* `1` | No |
| financialStartDate | string | Financial Start Date | No |
| fyClosingPeriodEndDate | string | Closing Period End date | No |
| gstNumber | string | GST Number<br/>*Example:* `123456789098765` | No |
| id | long | Tenant id<br/>*Example:* `1234` | No |
| implementFIFOForAdvTracking | boolean | Implement FIFO for advanced tracking | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| isBookKeeper | boolean | Flag to indicate if Organization is Book Keeper<br/>*Example:* `true` | No |
| isDemoOrg | boolean | Flag to indicate demo Organization<br/>*Example:* `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>*Example:* `false` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>*Example:* `false` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>*Example:* `false` | No |
| landedCostSettings | [LandedCostSettings](#landedcostsettings) | Landed Cost Settings | No |
| logoUrl | string | Tenant logo<br/>*Example:* `"http://wwww.amazon-s3/tenant/mylogo.png"` | No |
| multicurrencyEnabled | boolean | Multicurrency enabled flag | No |
| name | string | Tenant name<br/>*Example:* `"Deskera"` | No |
| numberFormat | string | Number Format<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"` | No |
| orgSetupCompleted | boolean | Whether organization setup is completed or not?<br/>*Example:* `true` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| serviceProvider | string | Service provider priority | No |
| shippingAddresses | [ [Address](#address) ] | Shipping addresses | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"` | No |
| tenantCreatedDate | string | Tenant Created Date | No |
| timezone | string | Timezone<br/>*Example:* `"TZ001"` | No |
| useSeparateSequenceFormat | boolean | Use separate sequence format<br/>*Example:* `true` | No |

#### TenantInfoGermany

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalSettings | object | Additional org settings | No |
| address | [Address](#address) | Address | No |
| allowNegativeInventory | boolean | Allow negative inventory<br/>*Example:* `true` | No |
| billingAddresses | [ [Address](#address) ] | Billing addresses | No |
| bookBeginningStartDate | string | Book beginning date | No |
| companyRegistrationNumberDE | string | Company Registration Number<br/>*Example:* `123456789` | No |
| contacts | [TenantContact](#tenantcontact) | Contact information | No |
| country | string | Country Code<br/>*Example:* `"SG"` | No |
| currency | string | Currency<br/>*Example:* `"SGD"` | No |
| dateFormat | string | Date format<br/>*Example:* `"DF001"` | No |
| decimalScale | integer | Decimal Scale | No |
| defaultPaymentTerm | long | Payment Term Id<br/>*Example:* `1` | No |
| financialStartDate | string | Financial Start Date | No |
| fyClosingPeriodEndDate | string | Closing Period End date | No |
| gstNoDE | string | Tax Number<br/>*Example:* `"NL123456789B01"` | No |
| id | long | Tenant id<br/>*Example:* `1234` | No |
| implementFIFOForAdvTracking | boolean | Implement FIFO for advanced tracking | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| isBookKeeper | boolean | Flag to indicate if Organization is Book Keeper<br/>*Example:* `true` | No |
| isDemoOrg | boolean | Flag to indicate demo Organization<br/>*Example:* `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>*Example:* `false` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>*Example:* `false` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>*Example:* `false` | No |
| landedCostSettings | [LandedCostSettings](#landedcostsettings) | Landed Cost Settings | No |
| logoUrl | string | Tenant logo<br/>*Example:* `"http://wwww.amazon-s3/tenant/mylogo.png"` | No |
| multicurrencyEnabled | boolean | Multicurrency enabled flag | No |
| name | string | Tenant name<br/>*Example:* `"Deskera"` | No |
| numberFormat | string | Number Format<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"` | No |
| orgSetupCompleted | boolean | Whether organization setup is completed or not?<br/>*Example:* `true` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| serviceProvider | string | Service provider priority | No |
| shippingAddresses | [ [Address](#address) ] | Shipping addresses | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"` | No |
| tenantCreatedDate | string | Tenant Created Date | No |
| timezone | string | Timezone<br/>*Example:* `"TZ001"` | No |
| useSeparateSequenceFormat | boolean | Use separate sequence format<br/>*Example:* `true` | No |
| vatIdentificationNumberDE | string | VAT Identification Number<br/>*Example:* `"NL123456789B01"` | No |

#### TenantInfoIndia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalSettings | object | Additional org settings | No |
| address | [Address](#address) | Address | No |
| allowNegativeInventory | boolean | Allow negative inventory<br/>*Example:* `true` | No |
| billingAddresses | [ [Address](#address) ] | Billing addresses | No |
| bookBeginningStartDate | string | Book beginning date | No |
| cinIndia | string | Company CIN Number<br/>*Example:* `"U12345AA1234AAA123456"` | No |
| compositionSchemeType | string | The percent tax payable under the Composition Scheme. Applicable when gstRegistered=true<br/>*Enum:* `"ONE_PERCENT"`, `"TWO_PERCENT"`, `"FIVE_PERCENT"`, `"SIX_PERCENT"`<br/>*Example:* `"SIX_PERCENT"` | No |
| contacts | [TenantContact](#tenantcontact) | Contact information | No |
| country | string | Country Code<br/>*Example:* `"SG"` | No |
| currency | string | Currency<br/>*Example:* `"SGD"` | No |
| dateFormat | string | Date format<br/>*Example:* `"DF001"` | No |
| decimalScale | integer | Decimal Scale | No |
| defaultPaymentTerm | long | Payment Term Id<br/>*Example:* `1` | No |
| enableReverseCharge | boolean | Whether the Tenant has enabled reverse charge in Sales Transaction. Applicable when gstRegistered=true<br/>*Example:* `true` | No |
| financialStartDate | string | Financial Start Date | No |
| fyClosingPeriodEndDate | string | Closing Period End date | No |
| gstRegistered | boolean | Whether the business is registered to GST or not.<br/>*Example:* `true` | No |
| gstRegistrationDate | dateTime | The Date on Which GST was registered. Date Format is dd-mm-yyyy. Applicable when gstRegistered=true<br/>*Example:* `"01-01-2020"` | No |
| gstin | string | India specific Organization GST Reg No.<br/>*Example:* `"GST-00001"` | No |
| id | long | Tenant id<br/>*Example:* `1234` | No |
| implementFIFOForAdvTracking | boolean | Implement FIFO for advanced tracking | No |
| indiaEinvoice | boolean | Whether the eInvoice is applicable or not<br/>*Example:* `true` | No |
| indiaGstr | boolean | Whether the gstr is applicable or not<br/>*Example:* `true` | No |
| indiaGstrUsername | string | gstr username<br/>*Example:* `true` | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| isBookKeeper | boolean | Flag to indicate if Organization is Book Keeper<br/>*Example:* `true` | No |
| isDemoOrg | boolean | Flag to indicate demo Organization<br/>*Example:* `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>*Example:* `false` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>*Example:* `false` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>*Example:* `false` | No |
| landedCostSettings | [LandedCostSettings](#landedcostsettings) | Landed Cost Settings | No |
| logoUrl | string | Tenant logo<br/>*Example:* `"http://wwww.amazon-s3/tenant/mylogo.png"` | No |
| multicurrencyEnabled | boolean | Multicurrency enabled flag | No |
| name | string | Tenant name<br/>*Example:* `"Deskera"` | No |
| numberFormat | string | Number Format<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"` | No |
| orgSetupCompleted | boolean | Whether organization setup is completed or not?<br/>*Example:* `true` | No |
| panIndia | string | Company PAN Number<br/>*Example:* `"AAAAA1111A"` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| registeredToCompositionScheme | boolean | Whether the Tenant is registered to Composition Scheme. Applicable when gstRegistered=true<br/>*Example:* `true` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| serviceProvider | string | Service provider priority | No |
| sezOrImportExport | boolean | Whether the Tenant is an SEZ or deals with Import/Export. Applicable when gstRegistered=true<br/>*Example:* `true` | No |
| shippingAddresses | [ [Address](#address) ] | Shipping addresses | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"` | No |
| tanNumberIndia | string | Company TAN Number<br/>*Example:* `"GSFD2376S"` | No |
| tcsEnabled | boolean | Whether the TCS is enabled or not.<br/>*Example:* `true` | No |
| tdsPaymentInterestRateIndia | number | TDS Payment Interest Rate for India<br/>*Example:* `"1%"` | No |
| tenantCreatedDate | string | Tenant Created Date | No |
| timezone | string | Timezone<br/>*Example:* `"TZ001"` | No |
| trackDigitalServices | boolean | Whether the Tenant has enables tracking of digital services to overseas customers. Applicable when gstRegistered=true<br/>*Example:* `true` | No |
| useSeparateSequenceFormat | boolean | Use separate sequence format<br/>*Example:* `true` | No |

#### TenantInfoIndonesia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalSettings | object | Additional org settings | No |
| address | [Address](#address) | Address | No |
| allowNegativeInventory | boolean | Allow negative inventory<br/>*Example:* `true` | No |
| billingAddresses | [ [Address](#address) ] | Billing addresses | No |
| bookBeginningStartDate | string | Book beginning date | No |
| contacts | [TenantContact](#tenantcontact) | Contact information | No |
| country | string | Country Code<br/>*Example:* `"SG"` | No |
| currency | string | Currency<br/>*Example:* `"SGD"` | No |
| dateFormat | string | Date format<br/>*Example:* `"DF001"` | No |
| decimalScale | integer | Decimal Scale | No |
| defaultPaymentTerm | long | Payment Term Id<br/>*Example:* `1` | No |
| exciseAccount | string | Account to set for Excise Payable<br/>*Example:* `"AC400010"` | No |
| exciseApplicable | boolean | True to allow excise flow for indonesia country<br/>*Example:* `true` | No |
| financialStartDate | string | Financial Start Date | No |
| fyClosingPeriodEndDate | string | Closing Period End date | No |
| id | long | Tenant id<br/>*Example:* `1234` | No |
| implementFIFOForAdvTracking | boolean | Implement FIFO for advanced tracking | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| isBookKeeper | boolean | Flag to indicate if Organization is Book Keeper<br/>*Example:* `true` | No |
| isDemoOrg | boolean | Flag to indicate demo Organization<br/>*Example:* `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>*Example:* `false` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>*Example:* `false` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>*Example:* `false` | No |
| landedCostSettings | [LandedCostSettings](#landedcostsettings) | Landed Cost Settings | No |
| logoUrl | string | Tenant logo<br/>*Example:* `"http://wwww.amazon-s3/tenant/mylogo.png"` | No |
| multicurrencyEnabled | boolean | Multicurrency enabled flag | No |
| name | string | Tenant name<br/>*Example:* `"Deskera"` | No |
| npwpNo | string | Indonesia specific Organization NPWP No.<br/>*Example:* `123456789098765` | No |
| numberFormat | string | Number Format<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"` | No |
| orgSetupCompleted | boolean | Whether organization setup is completed or not?<br/>*Example:* `true` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| serviceProvider | string | Service provider priority | No |
| shippingAddresses | [ [Address](#address) ] | Shipping addresses | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"` | No |
| tenantCreatedDate | string | Tenant Created Date | No |
| timezone | string | Timezone<br/>*Example:* `"TZ001"` | No |
| useSeparateSequenceFormat | boolean | Use separate sequence format<br/>*Example:* `true` | No |

#### TenantInfoIsrael

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalSettings | object | Additional org settings | No |
| address | [Address](#address) | Address | No |
| allowNegativeInventory | boolean | Allow negative inventory<br/>*Example:* `true` | No |
| billingAddresses | [ [Address](#address) ] | Billing addresses | No |
| bookBeginningStartDate | string | Book beginning date | No |
| contacts | [TenantContact](#tenantcontact) | Contact information | No |
| country | string | Country Code<br/>*Example:* `"SG"` | No |
| currency | string | Currency<br/>*Example:* `"SGD"` | No |
| dateFormat | string | Date format<br/>*Example:* `"DF001"` | No |
| decimalScale | integer | Decimal Scale | No |
| defaultPaymentTerm | long | Payment Term Id<br/>*Example:* `1` | No |
| financialStartDate | string | Financial Start Date | No |
| fyClosingPeriodEndDate | string | Closing Period End date | No |
| id | long | Tenant id<br/>*Example:* `1234` | No |
| ilDeductionFileId | string | Israel specific deduction file id<br/>*Example:* `"deduction file id"` | No |
| ilEngagementType | string | Israel specific engagement type<br/>*Example:* `"engagement type"` | No |
| ilIncomeTaxNo | string | Israel specific income tax no<br/>*Example:* `"income tax no"` | No |
| ilLegalName | string | Israel specific legal name<br/>*Example:* `"legal name"` | No |
| ilNationalInsuranceNo | string | Israel specific national insurance no<br/>*Example:* `"national insurance no"` | No |
| ilParentSubsidiaryName | string | Israel specific parent subsidiary name<br/>*Example:* `"parent subsidiary name"` | No |
| ilReturnAddress | [ [Address](#address) ] | Israel Specific Billing Address | No |
| ilReturnEmail | string | Israel specific return email<br/>*Example:* `"return email"` | No |
| ilVatCode | string | Israel specific vat code<br/>*Example:* `"vat code"` | No |
| ilVatRegistrationNo | string | Israel specific vat registration no<br/>*Example:* `"vat registration no"` | No |
| ilWithholdingTaxAccount | string | Israel specific withholding tax account<br/>*Example:* `"withholding tax account"` | No |
| implementFIFOForAdvTracking | boolean | Implement FIFO for advanced tracking | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| isBookKeeper | boolean | Flag to indicate if Organization is Book Keeper<br/>*Example:* `true` | No |
| isDemoOrg | boolean | Flag to indicate demo Organization<br/>*Example:* `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>*Example:* `false` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>*Example:* `false` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>*Example:* `false` | No |
| landedCostSettings | [LandedCostSettings](#landedcostsettings) | Landed Cost Settings | No |
| logoUrl | string | Tenant logo<br/>*Example:* `"http://wwww.amazon-s3/tenant/mylogo.png"` | No |
| multicurrencyEnabled | boolean | Multicurrency enabled flag | No |
| name | string | Tenant name<br/>*Example:* `"Deskera"` | No |
| numberFormat | string | Number Format<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"` | No |
| orgSetupCompleted | boolean | Whether organization setup is completed or not?<br/>*Example:* `true` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| serviceProvider | string | Service provider priority | No |
| shippingAddresses | [ [Address](#address) ] | Shipping addresses | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"` | No |
| tenantCreatedDate | string | Tenant Created Date | No |
| timezone | string | Timezone<br/>*Example:* `"TZ001"` | No |
| useSeparateSequenceFormat | boolean | Use separate sequence format<br/>*Example:* `true` | No |

#### TenantInfoMalaysia

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalSettings | object | Additional org settings | No |
| address | [Address](#address) | Address | No |
| allowNegativeInventory | boolean | Allow negative inventory<br/>*Example:* `true` | No |
| billingAddresses | [ [Address](#address) ] | Billing addresses | No |
| bookBeginningStartDate | string | Book beginning date | No |
| businessRegistrationNo | string | Organization Business Reg No. for Malaysia<br/>*Example:* `"B91234567X"` | No |
| complianceEnabled | boolean | Whether the business collects tax or not. | No |
| contacts | [TenantContact](#tenantcontact) | Contact information | No |
| country | string | Country Code<br/>*Example:* `"SG"` | No |
| currency | string | Currency<br/>*Example:* `"SGD"` | No |
| dateFormat | string | Date format<br/>*Example:* `"DF001"` | No |
| decimalScale | integer | Decimal Scale | No |
| defaultPaymentTerm | long | Payment Term Id<br/>*Example:* `1` | No |
| exemption | boolean | Whether the Exemption is on or off.<br/>*Example:* `true` | No |
| exemptionCerificate | boolean | Whether the Exemption Cerificate is availble or not.<br/>*Example:* `true` | No |
| exemptionCriteria | string | Organization Exemption criteria. for Malaysia<br/>*Example:* `"EX1234567X"` | No |
| exemptionNo | string | Organization Exemption No. for Malaysia<br/>*Example:* `"EX1234567X"` | No |
| expiryDate | dateTime | The Date on Which SST was registered. Date Format is dd-mm-yyyy. Applicable when sstRegistered=true<br/>*Example:* `"01-01-2020"` | No |
| financialStartDate | string | Financial Start Date | No |
| fyClosingPeriodEndDate | string | Closing Period End date | No |
| id | long | Tenant id<br/>*Example:* `1234` | No |
| implementFIFOForAdvTracking | boolean | Implement FIFO for advanced tracking | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| isBookKeeper | boolean | Flag to indicate if Organization is Book Keeper<br/>*Example:* `true` | No |
| isDemoOrg | boolean | Flag to indicate demo Organization<br/>*Example:* `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>*Example:* `false` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>*Example:* `false` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>*Example:* `false` | No |
| landedCostSettings | [LandedCostSettings](#landedcostsettings) | Landed Cost Settings | No |
| logoUrl | string | Tenant logo<br/>*Example:* `"http://wwww.amazon-s3/tenant/mylogo.png"` | No |
| multicurrencyEnabled | boolean | Multicurrency enabled flag | No |
| name | string | Tenant name<br/>*Example:* `"Deskera"` | No |
| numberFormat | string | Number Format<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"` | No |
| orgSetupCompleted | boolean | Whether organization setup is completed or not?<br/>*Example:* `true` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesTaxRegistrationNo | string | Organization Sales Tax Reg No. for Malaysia<br/>*Example:* `"T91234567X"` | No |
| serviceProvider | string | Service provider priority | No |
| serviceTaxRegistrationNo | string | Organization Service Tax Reg No. for Malaysia<br/>*Example:* `"S91234567X"` | No |
| shippingAddresses | [ [Address](#address) ] | Shipping addresses | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"` | No |
| tenantCreatedDate | string | Tenant Created Date | No |
| timezone | string | Timezone<br/>*Example:* `"TZ001"` | No |
| useSeparateSequenceFormat | boolean | Use separate sequence format<br/>*Example:* `true` | No |

#### TenantInfoNL

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalSettings | object | Additional org settings | No |
| address | [Address](#address) | Address | No |
| allowNegativeInventory | boolean | Allow negative inventory<br/>*Example:* `true` | No |
| billingAddresses | [ [Address](#address) ] | Billing addresses | No |
| bookBeginningStartDate | string | Book beginning date | No |
| companyRegistrationNumberNL | string | Company Registration Number<br/>*Example:* `"B91234567X"` | No |
| contacts | [TenantContact](#tenantcontact) | Contact information | No |
| country | string | Country Code<br/>*Example:* `"SG"` | No |
| currency | string | Currency<br/>*Example:* `"SGD"` | No |
| dateFormat | string | Date format<br/>*Example:* `"DF001"` | No |
| decimalScale | integer | Decimal Scale | No |
| defaultPaymentTerm | long | Payment Term Id<br/>*Example:* `1` | No |
| financialStartDate | string | Financial Start Date | No |
| fyClosingPeriodEndDate | string | Closing Period End date | No |
| id | long | Tenant id<br/>*Example:* `1234` | No |
| implementFIFOForAdvTracking | boolean | Implement FIFO for advanced tracking | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| isBookKeeper | boolean | Flag to indicate if Organization is Book Keeper<br/>*Example:* `true` | No |
| isDemoOrg | boolean | Flag to indicate demo Organization<br/>*Example:* `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>*Example:* `false` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>*Example:* `false` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>*Example:* `false` | No |
| landedCostSettings | [LandedCostSettings](#landedcostsettings) | Landed Cost Settings | No |
| logoUrl | string | Tenant logo<br/>*Example:* `"http://wwww.amazon-s3/tenant/mylogo.png"` | No |
| multicurrencyEnabled | boolean | Multicurrency enabled flag | No |
| name | string | Tenant name<br/>*Example:* `"Deskera"` | No |
| numberFormat | string | Number Format<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"` | No |
| orgSetupCompleted | boolean | Whether organization setup is completed or not?<br/>*Example:* `true` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| serviceProvider | string | Service provider priority | No |
| shippingAddresses | [ [Address](#address) ] | Shipping addresses | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"` | No |
| tenantCreatedDate | string | Tenant Created Date | No |
| timezone | string | Timezone<br/>*Example:* `"TZ001"` | No |
| useSeparateSequenceFormat | boolean | Use separate sequence format<br/>*Example:* `true` | No |
| vatIdentificationNumberNL | string | VAT Identification Number<br/>*Example:* `"B91234567X"` | No |

#### TenantInfoNZ

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalSettings | object | Additional org settings | No |
| address | [Address](#address) | Address | No |
| allowNegativeInventory | boolean | Allow negative inventory<br/>*Example:* `true` | No |
| billingAddresses | [ [Address](#address) ] | Billing addresses | No |
| bookBeginningStartDate | string | Book beginning date | No |
| contacts | [TenantContact](#tenantcontact) | Contact information | No |
| country | string | Country Code<br/>*Example:* `"SG"` | No |
| currency | string | Currency<br/>*Example:* `"SGD"` | No |
| dateFormat | string | Date format<br/>*Example:* `"DF001"` | No |
| decimalScale | integer | Decimal Scale | No |
| defaultPaymentTerm | long | Payment Term Id<br/>*Example:* `1` | No |
| financialStartDate | string | Financial Start Date | No |
| fyClosingPeriodEndDate | string | Closing Period End date | No |
| gstNoNZ | string | GST Number<br/>*Example:* `"111-111-111"` | No |
| id | long | Tenant id<br/>*Example:* `1234` | No |
| implementFIFOForAdvTracking | boolean | Implement FIFO for advanced tracking | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| irdNo | string | IRD Number<br/>*Example:* `"111-111-111"` | No |
| isBookKeeper | boolean | Flag to indicate if Organization is Book Keeper<br/>*Example:* `true` | No |
| isDemoOrg | boolean | Flag to indicate demo Organization<br/>*Example:* `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>*Example:* `false` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>*Example:* `false` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>*Example:* `false` | No |
| landedCostSettings | [LandedCostSettings](#landedcostsettings) | Landed Cost Settings | No |
| logoUrl | string | Tenant logo<br/>*Example:* `"http://wwww.amazon-s3/tenant/mylogo.png"` | No |
| multicurrencyEnabled | boolean | Multicurrency enabled flag | No |
| name | string | Tenant name<br/>*Example:* `"Deskera"` | No |
| numberFormat | string | Number Format<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"` | No |
| orgSetupCompleted | boolean | Whether organization setup is completed or not?<br/>*Example:* `true` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| serviceProvider | string | Service provider priority | No |
| shippingAddresses | [ [Address](#address) ] | Shipping addresses | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"` | No |
| tenantCreatedDate | string | Tenant Created Date | No |
| timezone | string | Timezone<br/>*Example:* `"TZ001"` | No |
| useSeparateSequenceFormat | boolean | Use separate sequence format<br/>*Example:* `true` | No |

#### TenantInfoPhilippines

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalSettings | object | Additional org settings | No |
| address | [Address](#address) | Address | No |
| allowNegativeInventory | boolean | Allow negative inventory<br/>*Example:* `true` | No |
| billingAddresses | [ [Address](#address) ] | Billing addresses | No |
| bookBeginningStartDate | string | Book beginning date | No |
| contacts | [TenantContact](#tenantcontact) | Contact information | No |
| country | string | Country Code<br/>*Example:* `"SG"` | No |
| currency | string | Currency<br/>*Example:* `"SGD"` | No |
| dateFormat | string | Date format<br/>*Example:* `"DF001"` | No |
| decimalScale | integer | Decimal Scale | No |
| defaultPaymentTerm | long | Payment Term Id<br/>*Example:* `1` | No |
| financialStartDate | string | Financial Start Date | No |
| fyClosingPeriodEndDate | string | Closing Period End date | No |
| id | long | Tenant id<br/>*Example:* `1234` | No |
| implementFIFOForAdvTracking | boolean | Implement FIFO for advanced tracking | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| isBookKeeper | boolean | Flag to indicate if Organization is Book Keeper<br/>*Example:* `true` | No |
| isDemoOrg | boolean | Flag to indicate demo Organization<br/>*Example:* `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>*Example:* `false` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>*Example:* `false` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>*Example:* `false` | No |
| landedCostSettings | [LandedCostSettings](#landedcostsettings) | Landed Cost Settings | No |
| logoUrl | string | Tenant logo<br/>*Example:* `"http://wwww.amazon-s3/tenant/mylogo.png"` | No |
| multicurrencyEnabled | boolean | Multicurrency enabled flag | No |
| name | string | Tenant name<br/>*Example:* `"Deskera"` | No |
| numberFormat | string | Number Format<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"` | No |
| orgSetupCompleted | boolean | Whether organization setup is completed or not?<br/>*Example:* `true` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| serviceProvider | string | Service provider priority | No |
| shippingAddresses | [ [Address](#address) ] | Shipping addresses | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"` | No |
| tenantCreatedDate | string | Tenant Created Date | No |
| timezone | string | Timezone<br/>*Example:* `"TZ001"` | No |
| useSeparateSequenceFormat | boolean | Use separate sequence format<br/>*Example:* `true` | No |
| vatNoPhilippines | string | Philippines specific Organization VAT No.<br/>*Example:* `"012-345-678-910"` | No |
| vatPayableAccountPhilippines | string | Payable Account<br/>*Example:* `"012345678910"` | No |

#### TenantInfoSA

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalSettings | object | Additional org settings | No |
| address | [Address](#address) | Address | No |
| allowNegativeInventory | boolean | Allow negative inventory<br/>*Example:* `true` | No |
| billingAddresses | [ [Address](#address) ] | Billing addresses | No |
| bookBeginningStartDate | string | Book beginning date | No |
| contacts | [TenantContact](#tenantcontact) | Contact information | No |
| country | string | Country Code<br/>*Example:* `"SG"` | No |
| currency | string | Currency<br/>*Example:* `"SGD"` | No |
| dateFormat | string | Date format<br/>*Example:* `"DF001"` | No |
| decimalScale | integer | Decimal Scale | No |
| defaultPaymentTerm | long | Payment Term Id<br/>*Example:* `1` | No |
| exciseAccountSA | string | Account to set for Excise Payable<br/>*Example:* `"AC400010"` | No |
| exciseApplicableSA | boolean | True to allow excise flow for UAE country<br/>*Example:* `true` | No |
| financialStartDate | string | Financial Start Date | No |
| fyClosingPeriodEndDate | string | Closing Period End date | No |
| id | long | Tenant id<br/>*Example:* `1234` | No |
| implementFIFOForAdvTracking | boolean | Implement FIFO for advanced tracking | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| isBookKeeper | boolean | Flag to indicate if Organization is Book Keeper<br/>*Example:* `true` | No |
| isDemoOrg | boolean | Flag to indicate demo Organization<br/>*Example:* `true` | No |
| isDesignatedZoneSA | boolean | Is your business located in a Designated Zone?<br/>*Example:* `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>*Example:* `false` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>*Example:* `false` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>*Example:* `false` | No |
| landedCostSettings | [LandedCostSettings](#landedcostsettings) | Landed Cost Settings | No |
| logoUrl | string | Tenant logo<br/>*Example:* `"http://wwww.amazon-s3/tenant/mylogo.png"` | No |
| multicurrencyEnabled | boolean | Multicurrency enabled flag | No |
| name | string | Tenant name<br/>*Example:* `"Deskera"` | No |
| numberFormat | string | Number Format<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"` | No |
| orgSetupCompleted | boolean | Whether organization setup is completed or not?<br/>*Example:* `true` | No |
| outsideContactSA | boolean | True to allow RCM flow for UAE country<br/>*Example:* `true` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| rcmAccountSA | string | Account to set for RCM<br/>*Example:* `"AC400010"` | No |
| registeredForVatSA | boolean | Registered for vat flag<br/>*Example:* `false` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| serviceProvider | string | Service provider priority | No |
| shippingAddresses | [ [Address](#address) ] | Shipping addresses | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"` | No |
| tenantCreatedDate | string | Tenant Created Date | No |
| tenantInfoInSA | [TenantInfoSASaudiLanguage](#tenantinfosasaudilanguage) | Arabic Details<br/>*Example:* `true` | No |
| timezone | string | Timezone<br/>*Example:* `"TZ001"` | No |
| useSeparateSequenceFormat | boolean | Use separate sequence format<br/>*Example:* `true` | No |
| vatAccountNumberSA | string | Vat Account Number<br/>*Example:* `"NL123456789B01"` | No |
| vatReturnFrequencySA | string | VAT Return Frequency<br/>*Example:* `"Monthly"` | No |

#### TenantInfoSASaudiLanguage

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| arabicNameSA | string | *Example:* `"Name in Saudi Arabic Language"` | No |
| billingAddress | [ [Address](#address) ] | Billing addresses in Arabic language | No |
| shippingAddress | [ [Address](#address) ] | Shipping addresses in Arabic language | No |

#### TenantInfoUAE

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalSettings | object | Additional org settings | No |
| address | [Address](#address) | Address | No |
| allowNegativeInventory | boolean | Allow negative inventory<br/>*Example:* `true` | No |
| billingAddresses | [ [Address](#address) ] | Billing addresses | No |
| bookBeginningStartDate | string | Book beginning date | No |
| contacts | [TenantContact](#tenantcontact) | Contact information | No |
| country | string | Country Code<br/>*Example:* `"SG"` | No |
| currency | string | Currency<br/>*Example:* `"SGD"` | No |
| dateFormat | string | Date format<br/>*Example:* `"DF001"` | No |
| decimalScale | integer | Decimal Scale | No |
| defaultPaymentTerm | long | Payment Term Id<br/>*Example:* `1` | No |
| exciseAccount | string | Account to set for Excise Payable<br/>*Example:* `"AC400010"` | No |
| exciseApplicable | boolean | True to allow excise flow for UAE country<br/>*Example:* `true` | No |
| financialStartDate | string | Financial Start Date | No |
| fyClosingPeriodEndDate | string | Closing Period End date | No |
| id | long | Tenant id<br/>*Example:* `1234` | No |
| implementFIFOForAdvTracking | boolean | Implement FIFO for advanced tracking | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| isBookKeeper | boolean | Flag to indicate if Organization is Book Keeper<br/>*Example:* `true` | No |
| isDemoOrg | boolean | Flag to indicate demo Organization<br/>*Example:* `true` | No |
| isDesignatedZone | boolean | Is your business located in a Designated Zone?<br/>*Example:* `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>*Example:* `false` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>*Example:* `false` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>*Example:* `false` | No |
| landedCostSettings | [LandedCostSettings](#landedcostsettings) | Landed Cost Settings | No |
| logoUrl | string | Tenant logo<br/>*Example:* `"http://wwww.amazon-s3/tenant/mylogo.png"` | No |
| multicurrencyEnabled | boolean | Multicurrency enabled flag | No |
| name | string | Tenant name<br/>*Example:* `"Deskera"` | No |
| numberFormat | string | Number Format<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"` | No |
| orgSetupCompleted | boolean | Whether organization setup is completed or not?<br/>*Example:* `true` | No |
| outsideContact | boolean | True to allow RCM flow for UAE country<br/>*Example:* `true` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| rcmAccount | string | Account to set for RCM<br/>*Example:* `"AC400010"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| serviceProvider | string | Service provider priority | No |
| shippingAddresses | [ [Address](#address) ] | Shipping addresses | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"` | No |
| tenantCreatedDate | string | Tenant Created Date | No |
| timezone | string | Timezone<br/>*Example:* `"TZ001"` | No |
| useSeparateSequenceFormat | boolean | Use separate sequence format<br/>*Example:* `true` | No |
| vatNoUAE | string | UAE specific Organization VAT No.<br/>*Example:* `"012-345-678-910"` | No |

#### TenantInfoUK

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| additionalSettings | object | Additional org settings | No |
| address | [Address](#address) | Address | No |
| allowNegativeInventory | boolean | Allow negative inventory<br/>*Example:* `true` | No |
| billingAddresses | [ [Address](#address) ] | Billing addresses | No |
| bookBeginningStartDate | string | Book beginning date | No |
| businessRegistrationNoUK | string | Organization Business Reg No. for UK<br/>*Example:* `"B91234567X"` | No |
| contacts | [TenantContact](#tenantcontact) | Contact information | No |
| country | string | Country Code<br/>*Example:* `"SG"` | No |
| currency | string | Currency<br/>*Example:* `"SGD"` | No |
| dateFormat | string | Date format<br/>*Example:* `"DF001"` | No |
| decimalScale | integer | Decimal Scale | No |
| defaultPaymentTerm | long | Payment Term Id<br/>*Example:* `1` | No |
| financialStartDate | string | Financial Start Date | No |
| flatRatePercentageListUK | [ [FlatRatePercentageListUK](#flatratepercentagelistuk) ] | Whether the Marketing Tax Digital is on or off.<br/>*Example:* `true` | No |
| fyClosingPeriodEndDate | string | Closing Period End date | No |
| id | long | Tenant id<br/>*Example:* `1234` | No |
| implementFIFOForAdvTracking | boolean | Implement FIFO for advanced tracking | No |
| invoiceCreditLimitType | string | Invoice Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| isBookKeeper | boolean | Flag to indicate if Organization is Book Keeper<br/>*Example:* `true` | No |
| isDemoOrg | boolean | Flag to indicate demo Organization<br/>*Example:* `true` | No |
| isIncludeCurrentInvoice | boolean | Include Current Invoice<br/>*Example:* `false` | No |
| isIncludeCurrentQuotation | boolean | Include Current Quotation<br/>*Example:* `false` | No |
| isIncludeCurrentSalesOrder | boolean | Include Current Sales Order<br/>*Example:* `false` | No |
| landedCostSettings | [LandedCostSettings](#landedcostsettings) | Landed Cost Settings | No |
| logoUrl | string | Tenant logo<br/>*Example:* `"http://wwww.amazon-s3/tenant/mylogo.png"` | No |
| marketingTaxDigitalUK | boolean | Whether the Marketing Tax Digital is on or off.<br/>*Example:* `true` | No |
| multicurrencyEnabled | boolean | Multicurrency enabled flag | No |
| name | string | Tenant name<br/>*Example:* `"Deskera"` | No |
| numberFormat | string | Number Format<br/>*Enum:* `"us"`, `"in"`, `"fr"`, `"es"` | No |
| orgSetupCompleted | boolean | Whether organization setup is completed or not?<br/>*Example:* `true` | No |
| quotationCreditLimitType | string | Quotation Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| salesOrderCreditLimitType | string | Sales Order Credit Limit Type<br/>*Enum:* `"IGNORE"`, `"WARN"`, `"BLOCK"`<br/>*Example:* `"IGNORE"` | No |
| serviceProvider | string | Service provider priority | No |
| shippingAddresses | [ [Address](#address) ] | Shipping addresses | No |
| source | string | Registration source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"` | No |
| tenantCreatedDate | string | Tenant Created Date | No |
| timezone | string | Timezone<br/>*Example:* `"TZ001"` | No |
| useSeparateSequenceFormat | boolean | Use separate sequence format<br/>*Example:* `true` | No |
| vatIdentificationNumberUK | string | VAT Number<br/>*Example:* `123456789098765` | No |
| vatSchemeUK | string | VAT Scheme<br/>*Example:* `"Standard scheme"` | No |

#### TenantInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | [TenantContact](#tenantcontact) |  | No |
| countryLookupCode | string |  | No |
| createdAt | string |  | No |
| deleted | boolean |  | No |
| demoOrg | boolean |  | No |
| id | long |  | No |
| isBookkeeper | boolean |  | No |
| isPartner | boolean |  | No |
| name | string |  | No |
| user | [UserInformation](#userinformation) |  | No |

#### TenantInventoryDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| costOfGoodsSoldAccount | string | Cost of goods sold account<br/>*Example:* `"C001"` | No |
| finishedGoodsInventory | string | Finished Goods Account<br/>*Example:* `"ACC-0000029"` | No |
| inventoryAccount | string | Inventory Account Code<br/>*Example:* `"IA001"` | No |
| inventoryPurchaseAccount | string | Purchase Account (Inventory)<br/>*Example:* `"PAI001"` | No |
| inventoryPurchaseReturnAccount | string | Purchase Return Account (Inventory)<br/>*Example:* `"PRI001"` | No |
| manufacturingCost | string | Manufacturing cost Account<br/>*Example:* `"ACC-0000030"` | No |
| nonInventoryPurchaseAccount | string | Purchase Account (Non Inventory)<br/>*Example:* `"PANI001"` | No |
| nonInventoryPurchaseReturnAccount | string | Purchase Return Account (Non Inventory)<br/>*Example:* `"PRNI001"` | No |
| salesAccount | string | Sales Account<br/>*Example:* `"SA001"` | No |
| salesReturnAccount | string | Sales Return Account<br/>*Example:* `"SRA001"` | No |
| stockAdjustmentAccount | string | Stock adjustment account code<br/>*Example:* `"SA001"` | No |
| wipInventoryAccount | string | WIP Inventory Account Code<br/>*Example:* `"IA001"` | No |

#### TenantInviteResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| currentUserCount | integer | Current User Count<br/>*Example:* `3` | No |
| invites | [ [AppInviteResponse](#appinviteresponse) ] | Invite List<br/>*Example:* `1` | No |
| planMaxUserCount | integer | max user count as per the plan<br/>*Example:* `3` | No |
| planName | string | Plan subscribed by the tenant<br/>*Example:* `1` | No |

#### TenantMeta

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| industry | string | type of industry<br/>*Example:* `"Food"` | No |
| noOfEmployees | string | no of employees in company<br/>*Example:* `25` | No |

#### TenantName

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| dateFormat | string | Company name<br/>*Example:* `"Deskera"` | No |
| id | long | Primary Key<br/>*Example:* `1` | No |
| name | string | Company name<br/>*Example:* `"Deskera"` | No |

#### TenantRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| isBookkeeper | boolean | If the tenant is bookkeeper<br/>*Example:* `false` | No |
| refreshToken | string | Refresh Token<br/>*Example:* `"refreshToken"` | No |
| source | string | Registration Source<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"DESKERA"` | No |
| tenantName | string | Tenant name<br/>*Example:* `"Deskera"` | Yes |

#### TenantSettings

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| TenantSettings | object |  |  |

#### TenantShortInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| currencyLookUpCode | string |  | No |
| demoOrg | boolean |  | No |
| email | string |  | No |
| id | long |  | No |
| isBookkeeper | boolean |  | No |
| name | string |  | No |
| ownerUserId | long |  | No |
| primaryCurrencyCode | string |  | No |

#### TenantSubscription

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AIOPlan | [PlanInfo](#planinfo) |  | No |
| CRMPlan | [PlanInfo](#planinfo) |  | No |
| CustomPlan | [PlanInfo](#planinfo) |  | No |
| ERPPlan | [PlanInfo](#planinfo) |  | No |
| PeoplePlan | [PlanInfo](#planinfo) |  | No |
| ProductLimits | [ [ProductLimit](#productlimit) ] |  | No |
| Status | string |  | No |

#### TenantUpdateNameRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| newName | string | Company's New Name<br/>*Example:* `"Acme Inc"` | Yes |

#### TenantUpdateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| billingAddresses | [ [Address](#address) ] | Billing Addresses | No |
| logoUrl | string | Logo Url<br/>*Example:* `"http://sjhfksdf.com/logo.png"` | No |
| shippingAddresses | [ [Address](#address) ] | Shipping Addresses | No |

#### UnAssignUserRoleRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Application name<br/>*Example:* `"ERP"` | Yes |
| iamUserIds | [ long ] | List of iamUserIds of users<br/>*Example:* `[4,11,12]` | No |
| userIds | [ long ] | List users assign<br/>*Example:* `[1,2,3]` | Yes |

#### UpdateUserInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long |  | No |
| user | object |  | No |

#### UpdateUserInfoModuleRole

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| assignUserRoleRequest | [ [AppPermissionRequest](#apppermissionrequest) ] |  | No |
| tenantId | long |  | No |
| unAssignUserRoleRequest | [RemovePermissionRequest](#removepermissionrequest) |  | No |
| updateUserInfo | [UpdateUserInfo](#updateuserinfo) |  | No |

#### UpdateUserInfoWithRoles

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| assignUserRoleRequest | [ [AssignUserRoleRequest](#assignuserrolerequest) ] |  | No |
| unAssignUserRoleRequest | [ [UnAssignUserRoleRequest](#unassignuserrolerequest) ] |  | No |
| updateUserInfo | [UpdateUserInfo](#updateuserinfo) |  | No |

#### User

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | [ [Address](#address) ] |  | No |
| appUserRoleXrefs | [ [AppUserRoleXref](#appuserrolexref) ] |  | No |
| contact | string |  | No |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| deleted | boolean |  | No |
| department | string |  | No |
| designation | string |  | No |
| domain | string |  | No |
| email | string |  | No |
| firebaseId | string |  | No |
| firstName | string |  | No |
| gdprMigrated | boolean |  | No |
| genderLookUpCode | string |  | No |
| iamUserId | long |  | No |
| id | long |  | No |
| idpUserId | string |  | No |
| isBookkeeper | boolean |  | No |
| isEmailVerified | boolean |  | No |
| isPartner | boolean |  | No |
| lastName | string |  | No |
| migrated | boolean |  | No |
| password | string |  | No |
| profileUrl | string |  | No |
| status | string |  | No |
| tenantId | long |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |
| userMigrated | boolean |  | No |
| userName | string |  | No |
| userTenantMappingList | [ [UserTenantMapping](#usertenantmapping) ] |  | No |

#### UserCache

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| permissions | object | User Permissions<br/>*Example:* `"'ERP':['acc_gr_rwd','account_rwd']"` | No |
| tenantId | long | Tenant Primary Key<br/>*Example:* `1` | No |
| userId | long | User Primary Key<br/>*Example:* `1` | No |
| userLimitCache | [UserLimitCache](#userlimitcache) |  | No |

#### UserChangePasswordRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| newPassword | string | New valid password<br/>*Example:* `"test#123"` | Yes |
| oldPassword | string | Old valid password<br/>*Example:* `"test@123"` | Yes |

#### UserDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | [ [Address](#address) ] | List of Address. | No |
| appName | string | Application name<br/>*Example:* `"ERP"` | Yes |
| authUserId | string | Auth0 User ID<br/>*Example:* `"auth0|5d70ec986e382a0d12a4ff22"` | No |
| authenticationResultType | [AuthenticationResultType](#authenticationresulttype) |  | No |
| contact | string | User contact number<br/>*Example:* `12345678` | No |
| deleted | boolean | Delete Flag<br/>*Example:* `false` | No |
| department | string | User Department<br/>*Example:* `"Finance"` | No |
| designation | string | User Designation<br/>*Example:* `"Accountant"` | No |
| email | string | User email<br/>*Example:* `"jsmith@example.com"` | No |
| emailVerified | boolean |  | No |
| firstName | string | User First Name<br/>*Example:* `"John"` | Yes |
| fullName | string |  | No |
| genderLookUpCode | string | Gender<br/>*Example:* `"Mr."` | No |
| iamUserId | long | User Id in IAM<br/>*Example:* `2` | No |
| id | long | Primary Key<br/>*Example:* `1` | No |
| inviteCode | string | Unique Invitation Code<br/>*Example:* `"3609848a-394a-41c6-817f-c81e362881ed"` | No |
| isBookkeeper | boolean | flag to send email or not<br/>*Example:* `true` | No |
| isGoUser | boolean | Go request to update user to ERP<br/>*Example:* `false` | No |
| isInviteUser | boolean | Flag to indicate invite user flow<br/>*Example:* `false` | No |
| isPartner | boolean | flag for partner book keeper<br/>*Example:* `true` | No |
| lastName | string | User Last Name<br/>*Example:* `"Doe"` | Yes |
| peoplePlus | boolean | flag to decide whether user is created from People/People+<br/>*Example:* `false` | No |
| profileUrl | string | User profile image path.<br/>*Example:* `"http://deskera.com/user/myprofile.png"` | No |
| roleGroup | string | Role Group<br/>*Example:* `"admin"` | Yes |
| shouldSendEmail | boolean | flag to send email or not<br/>*Example:* `true` | No |
| status | string | Status like Active/ InActive<br/>*Example:* `"active"` | No |
| tenantId | long | Tenant Id<br/>*Example:* `1` | Yes |
| userName | string | Username<br/>*Example:* `"d.6511223344"` | No |

#### UserInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact | string |  | No |
| createdAt | string |  | No |
| email | string |  | No |
| firstName | string |  | No |
| isBookkeeper | boolean |  | No |
| isPartner | boolean |  | No |
| lastName | string |  | No |

#### UserLanguageDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| languageCode | string |  | No |
| languageName | string |  | No |

#### UserLastLoginInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ipAddress | string |  | No |
| userId | long |  | No |

#### UserLimitCache

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| limits | object | Limits<br/>*Example:* `"'ERP':['contact','[monthly:100,total:1000]]']"` | No |
| tenantId | long | Tenant Primary Key<br/>*Example:* `1` | No |

#### UserPermissionRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| apps | [ [AppPermissionRequest](#apppermissionrequest) ] | List of app permission | No |
| tenantId | long | Tenant Id<br/>*Example:* `2` | No |
| userId | long | User Id<br/>*Example:* `2` | No |

#### UserPermissionResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| apps | [ [AppPermissionResponse](#apppermissionresponse) ] | List of Apps Permission | No |
| userId | long | User Id<br/>*Example:* `2` | No |

#### UserRoleBasicInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appRoles | [ [AppRoleInfo](#approleinfo) ] | appRoles | No |
| contact | string | User contact number<br/>*Example:* `"+6512345678"` | No |
| email | string | User email<br/>*Example:* `"jsmith@example.com"` | No |
| firstName | string | User First Name<br/>*Example:* `"John"` | No |
| iamUserId | long | IAM user id<br/>*Example:* `1` | No |
| lastName | string | User Last Name<br/>*Example:* `"Doe"` | No |
| status | string | Status like Active/ InActive<br/>*Example:* `"active"` | No |

#### UserShortInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| email | string |  | No |
| firstName | string |  | No |
| iamUserId | long |  | No |
| id | long |  | No |
| lastName | string |  | No |
| profileUrl | string |  | No |
| userName | string |  | No |

#### UserShortRoleInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | [ [Address](#address) ] | List of Address. | No |
| authUserId | string | Auth0 User ID<br/>*Example:* `"auth0|5d70ec986e382a0d12a4ff22"` | No |
| contact | string | User Contact<br/>*Example:* `12345678` | No |
| deleted | boolean | Delete Flag<br/>*Example:* `false` | No |
| department | string | User Department<br/>*Example:* `"Finance"` | No |
| designation | string | User Designation<br/>*Example:* `"Accountant"` | No |
| email | string | User email<br/>*Example:* `"jsmith@example.com"` | No |
| firstName | string | User First Name<br/>*Example:* `"John"` | No |
| genderLookUpCode | string | Gender<br/>*Example:* `"Mr."` | No |
| iamUserId | long | Iam User Id<br/>*Example:* `1` | No |
| id | long | Primary Key<br/>*Example:* `1` | No |
| isEmailVerified | boolean | Email is verified or not. | No |
| lastName | string | User Last Name<br/>*Example:* `"Doe"` | No |
| mfaenabled | boolean |  | No |
| profileUrl | string | User profile image path.<br/>*Example:* `"http://deskera.com/user/myprofile.png"` | No |
| roleShortInfo | [ [RoleShortInfo](#roleshortinfo) ] |  | No |
| socialAuth | string | social auth<br/>*Example:* `"auth"` | No |
| status | string | Status like Active/ InActive<br/>*Example:* `"active"` | No |
| tenantId | long | Tenant Id<br/>*Example:* `1` | No |
| userName | string | User Name<br/>*Example:* `"jsmith@example.com"` | No |

#### UserTenantMapping

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| deleted | boolean |  | No |
| firstNameIndex | long |  | No |
| gdprMigrationStatus | string |  | No |
| id | long |  | No |
| ipAddress | string |  | No |
| lastLogin | boolean |  | No |
| lastLoginAt | dateTime |  | No |
| pickedForProcessing | boolean |  | No |
| processed | boolean |  | No |
| tenant | [Tenant](#tenant) |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |
| userContact | string |  | No |
| userFirstName | string |  | No |
| userId | long |  | No |
| userLastName | string |  | No |

#### UserTenantMappingResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| countryLookUpCode | string | Country Lookup Code<br/>*Example:* `"SG"` | No |
| dateFormat | string | date format for tenant<br/>*Example:* `"dd-MM-yyyy"` | No |
| enableSwitch | boolean | Flag to enable switch<br/>*Example:* `false` | No |
| id | long | Primary Key<br/>*Example:* `1` | No |
| isDemoOrg | boolean | Flag to indicate if organization is demo organization<br/>*Example:* `false` | No |
| logoUrl | string | Logo URL<br/>*Example:* `"Logo URL"` | No |
| memberCount | integer | Member Count<br/>*Example:* `12` | No |
| roleGroups | [ string ] | User Roles Group | No |
| tenantId | long | Tenant<br/>*Example:* `1` | No |
| tenantName | string | Tenant Name<br/>*Example:* `"Sample Tenant"` | No |
| userContact | string | User Contact<br/>*Example:* `"+65 12345678"` | No |
| userFirstName | string | User first name<br/>*Example:* `"John"` | No |
| userId | long | User ID<br/>*Example:* `1` | No |
| userLastName | string | User last name<br/>*Example:* `"Doe"` | No |

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
| id | long | Tenant ID<br/>*Example:* `1` | No |
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
| id | long | Tenant ID<br/>*Example:* `1` | No |
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
| moduleUuids | [ string ] | List of module UUID | No |
| organizationName | string | Pass organization name if you want to create org without setup<br/>*Example:* `"Deskera"` | No |
| password | string | Password<br/>*Example:* `"**********"` | No |
| peoplePlus | boolean | request origin identifier People or PeoplePlus<br/>*Example:* `true` | No |
| roleGroup | string | Role Group<br/>*Example:* `"admin"` | No |
| shouldSendEmail | boolean | flag to send email or not<br/>*Example:* `true` | No |
| skipCreation | boolean | skipCreation<br/>*Example:* `false` | No |
| socialAuth | string | Needed, if user is signing up via social login<br/>*Example:* `"GOOGLE"` | No |
| source | string | Registration source DESKERA/SHOPIFY<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"Deskera"` | No |
| tenantId | long | Tenant ID<br/>*Example:* `1` | No |

#### UserTenantTeamRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appName | string | Application name<br/>*Example:* `"ERP"` | No |
| bkPlanDetails | string | Selected plan details if client pays.<br/>*Example:* `"MONTHLY/YEARLY"` | No |
| bkPlanId | string | Selected plan id if client pays.<br/>*Example:* `1234` | No |
| bkTeamId | long |  | No |
| bookkeeperPays | boolean | book keeper team pays or client pays<br/>*Example:* `false` | No |
| bookkeeperTeamInfos | [ [BookkeeperTeamInfo](#bookkeeperteaminfo) ] |  | No |
| contact | string | User Contact Number<br/>*Example:* `12345678` | No |
| createUserInTenant | boolean | Flag to control creation of users in tenant<br/>*Example:* `true` | No |
| emailId | string | Email<br/>*Example:* `"james@bond.com"` | No |
| firstName | string | User First Name<br/>*Example:* `"John"` | No |
| iamUserId | long | IAM app_user id<br/>*Example:* `12` | No |
| id | long | Tenant ID<br/>*Example:* `1` | No |
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
| moduleUuids | [ string ] | List of module UUID | No |
| organizationName | string | Pass organization name if you want to create org without setup<br/>*Example:* `"Deskera"` | No |
| password | string | Password<br/>*Example:* `"**********"` | No |
| peoplePlus | boolean | request origin identifier People or PeoplePlus<br/>*Example:* `true` | No |
| roleGroup | string | Role Group<br/>*Example:* `"admin"` | No |
| shouldSendEmail | boolean | flag to send email or not<br/>*Example:* `true` | No |
| skipCreation | boolean | skipCreation<br/>*Example:* `false` | No |
| socialAuth | string | Needed, if user is signing up via social login<br/>*Example:* `"GOOGLE"` | No |
| source | string | Registration source DESKERA/SHOPIFY<br/>*Enum:* `"DESKERA"`, `"SHOPIFY"`, `"MOBILE"`, `"MOBILE_GOOGLE"`, `"MOBILE_APPLE"`, `"MOBILE_OTHER"`, `"WEB"`, `"WEB_GOOGLE"`, `"WEB_APPLE"`, `"WEB_OTHER"`<br/>*Example:* `"Deskera"` | No |
| tenantId | long | Tenant ID<br/>*Example:* `1` | No |

#### WebSignInRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
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
