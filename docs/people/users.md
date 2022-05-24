---
id: users
title: Users
sidebar_label: Users
---

### Security
**ApiKeyAuth**  

|apiKey|*API Key*|
|---|---|
|Name|x-access-token|
|In|header|

### /v1/people/users

#### GET
##### Summary

Get all users

##### Description

Get list of all users with pagination.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query |  | No | string (int64) |
| currentPage | query |  | No | string (int64) |
| orderBy.field | query |  | No | string |
| orderBy.order | query |  | No | string |
| searchString | query |  | No | string |
| searchField | query |  | No | string |
| getComponents | query |  | No | boolean |
| fromDate | query |  | No | dateTime |
| toDate | query |  | No | dateTime |
| userType | query |  | No | string |
| cpfAccount | query |  | No | string |
| accountType | query |  | No | string |
| getBenefits | query |  | No | boolean |
| order | query |  | No | string |
| field | query |  | No | string |
| isInCompleteProfile | query |  | No | boolean |
| stage | query |  | No | string |
| includeDraft | query |  | No | boolean |
| ignTeamData | query |  | No | boolean |
| ignRoles | query |  | No | boolean |
| ignUserApprovers | query |  | No | boolean |
| ignTeamMembers | query |  | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetUsersResponse](#v1getusersresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

#### POST
##### Summary

Add a user

##### Description

Add a new user.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1User](#v1user) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetUserResponse](#v1getuserresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

#### PUT
##### Summary

Update a user

##### Description

Update a user.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1User](#v1user) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetUserResponse](#v1getuserresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

#### PATCH
##### Summary

Patch a user

##### Description

Patch a user

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1User](#v1user) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetUserResponse](#v1getuserresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/approvers/list

#### GET
##### Summary

Get User Approvers

##### Description

Get user approvers.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | query |  | No | string |
| getCompliance | query |  | No | boolean |
| getComponents | query |  | No | boolean |
| getBenefits | query |  | No | boolean |
| getRolesAndTeams | query |  | No | boolean |
| customFieldModule | query |  | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetUsersResponse](#v1getusersresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/beneficiary-status

#### PUT
##### Summary

*
API to Update User Status For CashFree

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1BeneficiaryRequest](#v1beneficiaryrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1BeneficiaryResponse](#v1beneficiaryresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/bulk

#### POST
##### Summary

Add users in bulk

##### Description

Add new users in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1AddUsersRequest](#v1addusersrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1AddUsersResponse](#v1addusersresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/bulk/components

#### POST
##### Summary

Setup components for users in bulk

##### Description

Setup components for users in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1AddComponentsRequest](#v1addcomponentsrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1AddComponentsResponse](#v1addcomponentsresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/bulk/info

#### POST
##### Summary

Get User's in bulk

##### Description

Get bulk User's using IamUserId and UserId

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1BulkUsersIdRequest](#v1bulkusersidrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetUsersResponse](#v1getusersresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/bulk/shortinfo

#### POST
##### Summary

Get bulk User's short info

##### Description

Get bulk User's short info

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1BulkInt64IdRequest](#v1bulkint64idrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetUsersResponse](#v1getusersresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/delete/bulk

#### POST
##### Summary

Bulk Delete a user by their ids

##### Description

Delete a users by ids.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1BulkIdRequest](#v1bulkidrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1DeleteResponse](#v1deleteresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/designations

#### GET
##### Summary

Get a list of all designations for given tenant

##### Description

Get a list of all designations for given tenant

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1DesignationsResponse](#v1designationsresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/email/{email}

#### GET
##### Summary

*
API to check whether user exists in People with the given email

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| email | path |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1UserExistsResponse](#v1userexistsresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/expense/approve

#### POST
##### Summary

Pay expense with off-cycle

##### Description

Pay expense with off-cycle

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1PayExpenseRequest](#v1payexpenserequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1SuccessResponse](#v1successresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/expense/pay

#### POST
##### Summary

Pay expense with off-cycle

##### Description

Pay expense with off-cycle

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1PayExpenseRequest](#v1payexpenserequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1SuccessResponse](#v1successresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/expense/paystubs

#### GET
##### Summary

Pay expense with off-cycle

##### Description

Pay expense with off-cycle

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1PayStubListDto](#v1paystublistdto) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/filtered-users

#### POST
##### Summary

Get all users

##### Description

Get list of all users with pagination.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1UserFilter](#v1userfilter) |
| limit | query |  | No | string (int64) |
| currentPage | query |  | No | string (int64) |
| orderBy.field | query |  | No | string |
| orderBy.order | query |  | No | string |
| searchString | query |  | No | string |
| searchField | query |  | No | string |
| getComponents | query |  | No | boolean |
| fromDate | query |  | No | dateTime |
| toDate | query |  | No | dateTime |
| userType | query |  | No | string |
| cpfAccount | query |  | No | string |
| accountType | query |  | No | string |
| getBenefits | query |  | No | boolean |
| order | query |  | No | string |
| field | query |  | No | string |
| isInCompleteProfile | query |  | No | boolean |
| stage | query |  | No | string |
| includeDraft | query |  | No | boolean |
| ignTeamData | query |  | No | boolean |
| ignRoles | query |  | No | boolean |
| ignUserApprovers | query |  | No | boolean |
| ignTeamMembers | query |  | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetUsersResponse](#v1getusersresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/iam/{iamUserId}

#### GET
##### Summary

Get a user by it's iamUserId

##### Description

Get a user by it's iamUserId.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| iamUserId | path |  | Yes | string (int64) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetUserResponse](#v1getuserresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/iams/paged

#### POST
##### Summary

Get all users with iamIds with pagination

##### Description

Get list of all users with iamIds with pagination.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1IamIdsWithPaginationRequest](#v1iamidswithpaginationrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetUserBasicsResponse](#v1getuserbasicsresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/in/migration

#### POST
##### Summary

*
API to perform India tax migration activity

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1INMigrationRequest](#v1inmigrationrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1MigrationResponse](#v1migrationresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/in/migration/review

#### POST
##### Summary

*
API to perform India tax migration activity

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1INMigrationRequest](#v1inmigrationrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1INMigrationResponse](#v1inmigrationresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/in/tax-declaration-info/list

#### GET
##### Summary

Get all users Tax declaration Info list with status

##### Description

Get all users Tax declaration Info list with status

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query |  | No | string (int64) |
| currentPage | query |  | No | string (int64) |
| orderBy.field | query |  | No | string |
| orderBy.order | query |  | No | string |
| searchString | query |  | No | string |
| searchField | query |  | No | string |
| getComponents | query |  | No | boolean |
| fromDate | query |  | No | dateTime |
| toDate | query |  | No | dateTime |
| userType | query |  | No | string |
| cpfAccount | query |  | No | string |
| accountType | query |  | No | string |
| getBenefits | query |  | No | boolean |
| order | query |  | No | string |
| field | query |  | No | string |
| isInCompleteProfile | query |  | No | boolean |
| stage | query |  | No | string |
| includeDraft | query |  | No | boolean |
| ignTeamData | query |  | No | boolean |
| ignRoles | query |  | No | boolean |
| ignUserApprovers | query |  | No | boolean |
| ignTeamMembers | query |  | No | boolean |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1TaxDeclarationInfoResponse](#v1taxdeclarationinforesponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/internal/bulk/info

#### POST
##### Summary

*
API to fetch user data by erpTenantId and IamUserIds

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1InternalUserRequest](#v1internaluserrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1InternalUserResponse](#v1internaluserresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/internal/bulk/termination

#### POST
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1TerminationStatusRequest](#v1terminationstatusrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1TerminationStatus](#v1terminationstatus) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/login/info

#### GET
##### Summary

Get the logged in user's info

##### Description

Get the logged in user's meta-information.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetUserResponse](#v1getuserresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/migration/encryption

#### GET
##### Summary

Encrypt Users having plain text fields

##### Description

Encrypt Users

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tenantId | query |  | No | string (int64) |
| model | query |  | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1EncryptedUsersResponse](#v1encryptedusersresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/payment-details

#### POST
##### Summary

Get payment details for a list of users

##### Description

Get payment details for a list of users

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1BulkIdRequest](#v1bulkidrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1UsersPaymentDetails](#v1userspaymentdetails) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/paypal/payouts

#### POST
##### Summary

Payouts using Paypal

##### Description

Payouts using Paypal

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1PaypalBatchPayoutRequest](#v1paypalbatchpayoutrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1PaypalBatchPayoutResponse](#v1paypalbatchpayoutresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/pii/support/page

#### POST
##### Summary

Encrypt/Decrypt Text

##### Description

Encrypt/Decrypt Text

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1PIISupport](#v1piisupport) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1PIISupport](#v1piisupport) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/profile/{stage}

#### PUT
##### Summary

Update a User Profile Stage

##### Description

Update a User.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| stage | path |  | Yes | string |
| body | body |  | Yes | [v1ProfileStage](#v1profilestage) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetUserResponse](#v1getuserresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/salary-advance/details

#### POST
##### Summary

API to get Bulk User salary advance details

##### Description

API to get Bulk User salary advance details

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1BulkInt64IdRequest](#v1bulkint64idrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1BulkUsersSalaryAdvanceDetails](#v1bulkuserssalaryadvancedetails) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/setup-bulk

#### POST
##### Summary

Setup users in bulk

##### Description

Setup IAM users in PEOPLE, in bulk.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1AddUsersRequest](#v1addusersrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1AddUsersBucketResponse](#v1addusersbucketresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/short-info/{iamUserId}

#### GET
##### Summary

Get a user short info by it's iamUserId

##### Description

Get a user short info by it's iamUserId.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| iamUserId | path |  | Yes | string (int64) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1UserShortInfoResponse](#v1usershortinforesponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/shortinfo

#### POST
##### Summary

Get User's short info in bulk

##### Description

Get bulk User's short info using IamUserId and UserId

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1BulkUsersIdRequest](#v1bulkusersidrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1BulkUsersShortInfoResponse](#v1bulkusersshortinforesponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/sync-beneficiaries

#### POST
##### Summary

*
API to Sync Users to CashFree as a Beneficiary

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes |  |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1BeneficiaryResponse](#v1beneficiaryresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/terminate/bulk

#### POST
##### Summary

Terminate users

##### Description

Terminate user from system.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1TerminateUserRequest](#v1terminateuserrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1DeleteResponse](#v1deleteresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/terminate/initiation

#### POST
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body |  | Yes | [v1TerminationRequest](#v1terminationrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1TerminateUserStatus](#v1terminateuserstatus) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### /v1/people/users/{id}

#### GET
##### Summary

Get a user by id

##### Description

Get a user by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| getCompliance | query |  | No | boolean |
| getComponents | query |  | No | boolean |
| getBenefits | query |  | No | boolean |
| getRolesAndTeams | query |  | No | boolean |
| customFieldModule | query |  | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1GetUserResponse](#v1getuserresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

#### DELETE
##### Summary

Delete a user by id

##### Description

Delete a user by it's id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| getCompliance | query |  | No | boolean |
| getComponents | query |  | No | boolean |
| getBenefits | query |  | No | boolean |
| getRolesAndTeams | query |  | No | boolean |
| customFieldModule | query |  | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A successful response. | [v1DeleteResponse](#v1deleteresponse) |
| default | An unexpected error response. | [gatewayruntimeError](#gatewayruntimeerror) |

### Models

#### gatewayruntimeError

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| error | string |  | No |
| code | integer |  | No |
| message | string |  | No |
| details | [ [protobufAny](#protobufany) ] |  | No |

#### protobufAny

`Any` contains an arbitrary serialized protocol buffer message along with a
URL that describes the type of the serialized message.

Protobuf library provides support to pack/unpack Any values in the form
of utility functions or additional generated methods of the Any type.

Example 1: Pack and unpack a message in C++.

    Foo foo = ...;
    Any any;
    any.PackFrom(foo);
    ...
    if (any.UnpackTo(&foo)) {
      ...
    }

Example 2: Pack and unpack a message in Java.

    Foo foo = ...;
    Any any = Any.pack(foo);
    ...
    if (any.is(Foo.class)) {
      foo = any.unpack(Foo.class);
    }

 Example 3: Pack and unpack a message in Python.

    foo = Foo(...)
    any = Any()
    any.Pack(foo)
    ...
    if any.Is(Foo.DESCRIPTOR):
      any.Unpack(foo)
      ...

 Example 4: Pack and unpack a message in Go

     foo := &pb.Foo{...}
     any, err := ptypes.MarshalAny(foo)
     ...
     foo := &pb.Foo{}
     if err := ptypes.UnmarshalAny(any, foo); err != nil {
       ...
     }

The pack methods provided by protobuf library will by default use
'type.googleapis.com/full.type.name' as the type URL and the unpack
methods only use the fully qualified type name after the last '/'
in the type URL, for example "foo.bar.com/x/y.z" will yield type
name "y.z".

JSON
====
The JSON representation of an `Any` value uses the regular
representation of the deserialized, embedded message, with an
additional field `@type` which contains the type URL. Example:

    package google.profile;
    message Person {
      string first_name = 1;
      string last_name = 2;
    }

    {
      "@type": "type.googleapis.com/google.profile.Person",
      "firstName": <string>,
      "lastName": <string>
    }

If the embedded message type is well-known and has a custom JSON
representation, that representation will be embedded adding a field
`value` which holds the custom JSON in addition to the `@type`
field. Example (for message [google.protobuf.Duration][]):

    {
      "@type": "type.googleapis.com/google.protobuf.Duration",
      "value": "1.212s"
    }

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| type_url | string | A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one "/" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading "." is not accepted).  In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows:  * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a [google.protobuf.Type][]   value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the   URL, or have them precompiled into a binary to avoid any   lookup. Therefore, binary compatibility needs to be preserved   on changes to types. (Use versioned type names to manage   breaking changes.)  Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com.  Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics. | No |
| value | byte | Must be a valid serialized protocol buffer of the above specified type. | No |

#### v1AddComponentsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userComponents | [ [v1UserComponents](#v1usercomponents) ] |  | No |

#### v1AddComponentsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failed | [ [v1UserComponents](#v1usercomponents) ] |  | No |
| success | [ [v1UserComponents](#v1usercomponents) ] |  | No |
| message | string |  | No |

#### v1AddUserError

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| user | [v1User](#v1user) |  | No |
| error | string |  | No |

#### v1AddUsersBucketResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| message | string |  | No |
| success | [ [v1User](#v1user) ] |  | No |
| failed | [ [v1AddUserError](#v1addusererror) ] |  | No |

#### v1AddUsersRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| users | [ [v1User](#v1user) ] |  | No |

#### v1AddUsersResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| message | string |  | No |
| errors | [ [v1SaveUserErr](#v1saveusererr) ] |  | No |

#### v1Address

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| addressLine1 | string |  | No |
| addressLine2 | string |  | No |
| zipCode | string |  | No |
| city | string |  | No |
| state | string |  | No |
| country | string |  | No |
| suburb | string |  | No |
| county | string |  | No |

#### v1Announcement

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| title | string |  | No |
| msg | string |  | No |
| frequency | [v1Frequency](#v1frequency) |  | No |
| type | string |  | No |
| roles | [ string ] |  | No |
| action | string |  | No |

#### v1ApplicableValues

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| metro | double |  | No |
| nonMetro | double |  | No |

#### v1Approver

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| firstName | string |  | No |
| lastName | string |  | No |
| designation | string |  | No |
| emailId | string |  | No |
| iamUserId | string (int64) |  | No |

#### v1BeneficiaryDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userId | string |  | No |
| reason | string |  | No |
| beneId | string |  | No |

#### v1BeneficiaryRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| beneficiaryStatusInfo | [ [v1BeneficiaryStatusInfo](#v1beneficiarystatusinfo) ] |  | No |

#### v1BeneficiaryResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | string |  | No |

#### v1BeneficiaryStatusInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| beneficiaryDetails | [ [v1BeneficiaryDetails](#v1beneficiarydetails) ] |  | No |
| operation | string |  | No |

#### v1BenefitMap

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| benefitId | string |  | No |
| name | string |  | No |
| employeeDeductionAmount | double |  | No |
| employeeDeductionType | string |  | No |
| employerDeductionAmount | double |  | No |
| employerDeductionType | string |  | No |
| annualMaxContribution | double |  | No |
| isActive | boolean |  | No |

#### v1BulkIdRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ids | [ string ] |  | No |
| forcedDelete | boolean |  | No |

#### v1BulkInt64IdRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ids | [ string (int64) ] |  | No |
| deleted | boolean |  | No |
| getCompliance | boolean |  | No |

#### v1BulkUsersIdRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userIds | [ string ] |  | No |
| iamUserIds | [ string (int64) ] |  | No |
| deleted | boolean |  | No |

#### v1BulkUsersSalaryAdvanceDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| salaryAdvance | [ [v1SalaryAdvance](#v1salaryadvance) ] |  | No |
| status | [v1Status](#v1status) |  | No |

#### v1BulkUsersShortInfoResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| usersShortInfo | [ [v1UserShortInfo](#v1usershortinfo) ] |  | No |

#### v1ComponentConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| configureAmountBasis | string |  | No |
| basisComponentId | string |  | No |
| componentPercent | double |  | No |
| amountPerDay | double |  | No |
| deductionType | string |  | No |
| applicableValues | [v1ApplicableValues](#v1applicablevalues) |  | No |

#### v1ComponentDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| name | string |  | No |
| type | string |  | No |

#### v1ComponentFrequency

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| period | string |  | No |
| occurrence | [ string ] |  | No |
| when | string |  | No |

#### v1ComponentMap

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| componentId | string |  | No |
| name | string |  | No |
| amount | double |  | No |
| type | string |  | No |
| status | string |  | No |
| componentConfig | [v1ComponentConfig](#v1componentconfig) |  | No |
| subType | string |  | No |
| frequency | [v1ComponentFrequency](#v1componentfrequency) |  | No |
| includeInOTCalc | boolean |  | No |

#### v1ComponentMapping

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| tenantComponents | [ [v1TenantComponents](#v1tenantcomponents) ] |  | No |
| mappedWith | string |  | No |

#### v1Condition

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| colId | string |  | No |
| value | string |  | No |
| opr | string |  | No |

#### v1CustomFieldData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| customFieldId | string |  | No |
| value | [ string ] |  | No |
| userId | string |  | No |
| tenantId | string |  | No |
| iamUserId | string (int64) |  | No |
| module | string |  | No |

#### v1DeleteResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| message | string |  | No |
| errCode | string |  | No |

#### v1DesignationsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| designations | [ string ] |  | No |

#### v1Document

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string |  | No |
| key | string |  | No |
| status | string |  | No |
| path | string |  | No |
| signConfig | [v1SignConfig](#v1signconfig) |  | No |
| isDefault | boolean |  | No |
| isTranslatorUsed | boolean |  | No |
| translatorConfig | [v1TranslatorConfig](#v1translatorconfig) |  | No |
| uploadedOn | string |  | No |

#### v1EffectiveCompensation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| effectiveDate | string |  | No |
| compensation | double |  | No |
| period | string |  | No |
| isVisible | boolean |  | No |
| basicCompensation | double |  | No |

#### v1EmployeeCtcDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string |  | No |
| empId | string |  | No |
| preMigCtc | [v1PreMigrationCtc](#v1premigrationctc) |  | No |
| postMigCtc | [v1PostMigrationCtc](#v1postmigrationctc) |  | No |
| iamUserId | string (int64) |  | No |

#### v1EncryptedUsersResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| usersCount | string (int64) |  | No |

#### v1Error

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| message | string |  | No |
| errorCode | string |  | No |
| details | string |  | No |

#### v1FilterConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| page | string (int64) |  | No |
| numberOfElements | string (int64) |  | No |
| sizePerPage | string (int64) |  | No |
| totalPage | string (int64) |  | No |
| numberOfRecords | string (int64) |  | No |

#### v1Frequency

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| always | boolean |  | No |
| fromDate | dateTime |  | No |
| toDate | dateTime |  | No |

#### v1GetUserBasicsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| users | [ [v1UserBasicInfo](#v1userbasicinfo) ] |  | No |
| filterConfig | [v1FilterConfig](#v1filterconfig) |  | No |

#### v1GetUserResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| user | [v1User](#v1user) |  | No |
| errors | [ [v1SaveUserErr](#v1saveusererr) ] |  | No |
| httpStatusCode | string (int64) |  | No |
| error | [v1Error](#v1error) |  | No |

#### v1GetUsersResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| users | [ [v1User](#v1user) ] |  | No |
| filterConfig | [v1FilterConfig](#v1filterconfig) |  | No |
| beneficiariesToAdd | string (int64) |  | No |

#### v1INMigrationRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| compensation | string |  | No |
| componentMapping | [ [v1ComponentMapping](#v1componentmapping) ] |  | No |

#### v1INMigrationResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| compensation | string |  | No |
| componentMapping | [ [v1ComponentMapping](#v1componentmapping) ] |  | No |
| employeeDetails | [ [v1EmployeeCtcDetails](#v1employeectcdetails) ] |  | No |
| erpTenantId | string (int64) |  | No |

#### v1IamIdsWithPaginationRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| iamUserIds | [ string (int64) ] |  | No |
| criteria | [v1Pagination](#v1pagination) |  | No |

#### v1InternalUserRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| erpTenantId | string (int64) |  | No |
| iamUserIdList | [ string (int64) ] |  | No |

#### v1InternalUserResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userResponseData | [ [v1UserResponseData](#v1userresponsedata) ] |  | No |

#### v1Items

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| recipientType | string |  | No |
| receiverId | string |  | No |

#### v1Member

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userId | string |  | No |
| iamUserId | string (int64) |  | No |
| firstName | string |  | No |
| lastName | string |  | No |
| roles | [ string ] |  | No |

#### v1MigrationResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| statusCode | string (int64) |  | No |
| msg | string |  | No |
| error | [v1Error](#v1error) |  | No |

#### v1OrderBy

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| field | string |  | No |
| order | string |  | No |

#### v1PIISupport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| action | string |  | No |
| text | string |  | No |

#### v1Pagination

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| limit | string (int64) |  | No |
| currentPage | string (int64) |  | No |
| orderBy | [v1OrderBy](#v1orderby) |  | No |
| searchString | string |  | No |
| searchField | string |  | No |
| getComponents | boolean |  | No |
| fromDate | dateTime |  | No |
| toDate | dateTime |  | No |
| userType | string |  | No |
| cpfAccount | string |  | No |
| accountType | string |  | No |
| getBenefits | boolean |  | No |
| order | string |  | No |
| field | string |  | No |
| isInCompleteProfile | boolean |  | No |
| stage | string |  | No |
| includeDraft | boolean |  | No |
| ignTeamData | boolean |  | No |
| ignRoles | boolean |  | No |
| userFilter | [v1UserFilter](#v1userfilter) |  | No |
| ignUserApprovers | boolean |  | No |
| ignTeamMembers | boolean |  | No |

#### v1PaidInstallmentDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| sequenceNumber | string (int64) |  | No |
| amountPaid | double |  | No |
| amountPaidDate | string |  | No |

#### v1PayExpenseRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| expenseId | string |  | No |
| expenseAmount | string (int64) |  | No |

#### v1PayStubListDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| paystubObject | [ [v1PaystubObject](#v1paystubobject) ] |  | No |

#### v1PaymentDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bank | string |  | No |
| bankId | string |  | No |
| paymentMethod | string |  | No |
| accountType | string |  | No |
| routingNumber | string |  | No |
| accountNumber | string |  | No |
| branchCode | string |  | No |
| branchName | string |  | No |
| ifsc | string |  | No |
| upi | string |  | No |

#### v1PaypalBatchPayoutRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | string |  | No |
| items | [ [v1Items](#v1items) ] |  | No |

#### v1PaypalBatchPayoutResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| payoutBatchId | string |  | No |

#### v1PaystubObject

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| payday | string |  | No |
| amount | string |  | No |

#### v1PostMigrationCtc

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | double |  | No |
| components | [ [v1ComponentMap](#v1componentmap) ] |  | No |

#### v1PreMigrationCtc

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | double |  | No |
| components | [ [v1ComponentMap](#v1componentmap) ] |  | No |

#### v1ProfileStage

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| stage | string |  | No |

#### v1ProfileStages

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeeDetails | boolean |  | No |
| paymentDetails | boolean |  | No |
| witholdingSetup | boolean |  | No |

#### v1Role

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| roleId | string |  | No |
| name | string |  | No |
| appName | string |  | No |
| policies | [ string ] |  | No |

#### v1SalaryAdvance

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | double |  | No |
| disbursementDate | string |  | No |
| repaymentStartDate | string |  | No |
| installmentAmount | double |  | No |
| noOfInstallments | string (int64) |  | No |
| status | string |  | No |
| unpaidAmount | double |  | No |
| paidInstallmentDetails | [ [v1PaidInstallmentDetails](#v1paidinstallmentdetails) ] |  | No |
| componentDetails | [ [v1ComponentDetails](#v1componentdetails) ] |  | No |
| iamUserId | string (int64) |  | No |
| isAmountDisbursed | boolean |  | No |
| isFinished | boolean |  | No |
| id | string |  | No |

#### v1SaveUserErr

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | string |  | No |
| fixedLimit | string (int64) |  | No |
| currentCount | string (int64) |  | No |
| message | string |  | No |

#### v1SignConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| isAgree | boolean |  | No |
| font | string |  | No |
| sign | string |  | No |

#### v1Status

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| v1Status | string |  |  |

#### v1SuccessResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| message | string |  | No |

#### v1TaxDeclarationInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userId | string |  | No |
| employeeName | string |  | No |
| submitOn | string |  | No |
| status | string |  | No |
| rejectedItems | [ string ] |  | No |

#### v1TaxDeclarationInfoResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| taxDeclarationInfo | [ [v1TaxDeclarationInfo](#v1taxdeclarationinfo) ] |  | No |
| filterConfig | [v1FilterConfig](#v1filterconfig) |  | No |

#### v1Team

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| teamId | string |  | No |
| name | string |  | No |
| createdAt | dateTime |  | No |
| members | [ [v1Member](#v1member) ] |  | No |
| status | string |  | No |
| type | string |  | No |

#### v1TenantComponents

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| name | string |  | No |

#### v1TerminateUserRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeeId | [ string ] |  | No |
| terminationDate | string |  | No |

#### v1TerminateUserStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failedIds | [ string (int64) ] |  | No |
| succeedIds | [ string (int64) ] |  | No |

#### v1TerminationRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| iamUserIdList | [ string (int64) ] |  | No |
| status | string |  | No |
| stage | string |  | No |
| terminationDate | string |  | No |

#### v1TerminationStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| failedIds | [ [v1UserStatus](#v1userstatus) ] |  | No |
| succeedIds | [ [v1UserStatus](#v1userstatus) ] |  | No |

#### v1TerminationStatusRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| iamUserIdList | [ [v1UserStatus](#v1userstatus) ] |  | No |
| status | string |  | No |
| stage | string |  | No |

#### v1TranslatorConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| isAgree | boolean |  | No |
| firstName | string |  | No |
| lastName | string |  | No |
| email | string |  | No |
| address | [v1Address](#v1address) |  | No |

#### v1User

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userId | string |  | No |
| firstName | string |  | No |
| lastName | string |  | No |
| designation | string |  | No |
| emailId | string |  | No |
| contact | string |  | No |
| gender | string |  | No |
| profileImagePath | string |  | No |
| profileImageRelativePath | string |  | No |
| organizationName | string |  | No |
| username | string |  | No |
| tenantId | string |  | No |
| name | string |  | No |
| employeeId | string |  | No |
| employeeType | string (int64) |  | No |
| address | [v1Address](#v1address) |  | No |
| nationality | string |  | No |
| department | string |  | No |
| iamUserId | string (int64) |  | No |
| erpTenantId | string (int64) |  | No |
| dateOfJoining | string |  | No |
| dateOfConfirmation | string |  | No |
| status | string |  | No |
| maritalStatus | string |  | No |
| appName | string |  | No |
| roles | [ [v1Role](#v1role) ] |  | No |
| teams | [ [v1Team](#v1team) ] |  | No |
| approvers | [ [v1Approver](#v1approver) ] |  | No |
| countryCode | string |  | No |
| hasComponents | boolean |  | No |
| components | [ [v1ComponentMap](#v1componentmap) ] |  | No |
| hasCompliance | boolean |  | No |
| compliance | [protobufAny](#protobufany) |  | No |
| dateOfTermination | string |  | No |
| dateOfBirth | string |  | No |
| passportNumber | string |  | No |
| compensation | double |  | No |
| compensationPeriod | string |  | No |
| compensationCurrency | string |  | No |
| paymentDetails | [v1PaymentDetails](#v1paymentdetails) |  | No |
| profileStages | [v1ProfileStages](#v1profilestages) |  | No |
| isTerminated | boolean |  | No |
| title | string |  | No |
| middleName | string |  | No |
| displayName | string |  | No |
| contractorType | string |  | No |
| type | string |  | No |
| documents | [ [v1Document](#v1document) ] |  | No |
| createdAt | string |  | No |
| employerIdentificationNumber | string |  | No |
| tenantCountryCode | string |  | No |
| tenantCurrencyCode | string |  | No |
| terminationStage | string |  | No |
| hasBenefits | boolean |  | No |
| benefits | [ [v1BenefitMap](#v1benefitmap) ] |  | No |
| socialSecurityNumber | string |  | No |
| directDepositConsent | boolean |  | No |
| consentMailSend | boolean |  | No |
| hasSalaryAdvance | boolean |  | No |
| salaryAdvance | [v1SalaryAdvance](#v1salaryadvance) |  | No |
| effectiveCompensations | [ [v1EffectiveCompensation](#v1effectivecompensation) ] |  | No |
| isEffectiveSalary | boolean |  | No |
| passportCountry | string |  | No |
| ctc | double |  | No |
| deleted | boolean |  | No |
| isImported | boolean |  | No |
| announcements | [ [v1Announcement](#v1announcement) ] |  | No |
| isInCompleteProfile | boolean |  | No |
| inCompleteFields | [ string ] |  | No |
| isContactUpdated | boolean |  | No |
| beneficiaryId | string |  | No |
| customFieldData | [ [v1CustomFieldData](#v1customfielddata) ] |  | No |
| aliasName | string |  | No |
| beneficiaryStatus | string |  | No |
| beneficiaryReason | string |  | No |
| makePayroll | boolean |  | No |
| componentGroup | string |  | No |
| inviteUserToFillInfo | boolean |  | No |
| hasDocuments | boolean |  | No |
| locationValue | string |  | No |
| cnfrmDateUpdated | boolean |  | No |
| checkHqError | [protobufAny](#protobufany) |  | No |
| checkEmployeeId | string |  | No |

#### v1UserBasicInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userId | string |  | No |
| firstName | string |  | No |
| lastName | string |  | No |
| emailId | string |  | No |
| tenantId | string |  | No |
| employeeId | string |  | No |
| iamUserId | string (int64) |  | No |
| erpTenantId | string (int64) |  | No |
| designation | string |  | No |

#### v1UserComponents

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| components | [ [v1ComponentMap](#v1componentmap) ] |  | No |
| email | string |  | No |
| uid | string |  | No |
| countryCode | string |  | No |
| errors | [ string ] |  | No |
| fullName | string |  | No |
| componentNameValueMap | object |  | No |

#### v1UserExistsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| email | string |  | No |
| exists | boolean |  | No |

#### v1UserFilter

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| conditions | [ [v1Condition](#v1condition) ] |  | No |

#### v1UserPaymentDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| iamUserId | string (int64) |  | No |
| userId | string |  | No |
| emailId | string |  | No |
| firstName | string |  | No |
| lastName | string |  | No |
| paymentDetails | [v1PaymentDetails](#v1paymentdetails) |  | No |

#### v1UserResponseData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| erpTenantId | string (int64) |  | No |
| iamUserId | string (int64) |  | No |
| firstName | string |  | No |
| emailId | string |  | No |

#### v1UserShortInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userId | string |  | No |
| firstName | string |  | No |
| lastName | string |  | No |
| paymentDetails | [v1PaymentDetails](#v1paymentdetails) |  | No |
| emailId | string |  | No |
| tenantId | string |  | No |
| employeeId | string |  | No |
| address | [v1Address](#v1address) |  | No |
| iamUserId | string (int64) |  | No |
| erpTenantId | string (int64) |  | No |
| dateOfTermination | string |  | No |
| directDepositConsent | boolean |  | No |
| taxConfiguration | string |  | No |
| dateOfBirth | string |  | No |
| dateOfJoining | string |  | No |
| hasCompliance | boolean |  | No |
| compensationCurrency | string |  | No |
| beneficiaryId | string |  | No |
| beneficiaryStatus | string |  | No |
| beneficiaryReason | string |  | No |
| ctc | double |  | No |

#### v1UserShortInfoResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | [v1Status](#v1status) |  | No |
| userShortInfo | [v1UserShortInfo](#v1usershortinfo) |  | No |

#### v1UserStatus

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| tenantId | string (int64) |  | No |
| iamUserId | string (int64) |  | No |

#### v1UsersPaymentDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| usersPaymentDetails | [ [v1UserPaymentDetails](#v1userpaymentdetails) ] |  | No |
