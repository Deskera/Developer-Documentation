---
id: oauthv2
title: Deskera OAuth 2.0 V2
sidebar_label: OAuth V2
---

The safe retrieval of secure resources while protecting user credentials can be achieved by OAuth 2.0.

The OAuth 2.0 specification defines a delegation protocol that is useful for conveying authorization decisions across a network of web-enabled applications and APIs. OAuth is used in a wide variety of applications, including providing mechanisms for user authentication. This has led many developers and API providers to incorrectly conclude that OAuth is itself an authentication protocol and to mistakenly use it as such.

Once you have registered as a Deskera developer and received your `client_id` and `client_secret`, they can be used to implement the standard Oauth 2.0 three legged flow to allow user to authorize the application to access Deskera APIs.

### The OAuth connection flow
A user connects to your platform using the following OAuth connection flow:

1. Starting on a page at your site, the user clicks a link that takes them to Deskera App Authentication page, passing along your app's `client_id`.
2. On Deskera's app auth page, the user provides the necessary information for connecting to your platform.s
3. On success, the Deskera app auth page will redirect the user to a `redirect_uri` of your choice along with an authorization code (this code can be used to get access_token and refresh_token for accessing the user's Deskera data).

#### Step 1: The OAuth Link

The Deskera endpoint should receive these parameters:
- `response_type`, with the value **code**
- `scope`, with the value **write**
- `client_id`, with app's client ID generated during registration
- `state` (*optional*), state value


##### Sample OAuth Link

```
https://oauth-staging.deskera.xyz/?client_id=cl_pub_1234&scope=write&state=65921&response_type=code
```

#### Step 2: Users connect their Deskera account

Once on the Deskera App auth page, the user would be prompted to input his/her Deskera user name and password, select the Organization we would like to connect and asked to authorize the app. The user should be already registered to Deskera Books and have atleast one organisation before coming to this step.

#### Step 3: Redirection request with Auth Code

After the user connects their existing account to your platform, we'll make an API call to the `redirect_uri` (provided at the time of partner registration) with the below parameters
- The `state` value, if any
- The `code`, authorization code that is to be used get the tokens as described in next steps. This auth code is short lived and for one time use only.

##### Sample callback request

```
https://testapp.deskera.com/callback?code=9wSQbM&state=65921
```


Provide the code received in the Step 3 to the API below to get the tokens from Deskera. The `access_token` can be used to make API calls to Deskera Books and the `refresh_token` can be used to fetch a new `access_token` in case it expires.

The `Authorization` header consists of Basic + baseEncode64(clientId:clientSecret)

##### Sample request to get tokens
```bash
curl --location --request POST 'https://api-staging.deskera.xyz/v2/oauth/token?grant_type=authorization_code&scope=write&code=9wSQbM' \
--header 'Authorization: Basic Y2xfcHViXzEyMzQ6Y2xfcHJpdl83NzIz'
```


##### Sample response for get tokens API
```json
{
	"access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYW1Vc2VySWQiOjEyNzc1Mywid2Vic2l0ZSI6IlZlZW0gT3JnIiwiaXNPcmdTZXQiOnRydWUsInVzZXJfbmFtZSI6IjEyNjk0NDoxMTY5MDMiLCJpc3MiOiJEZXNrZXJhIiwiZ2l2ZW5fbmFtZSI6IkFua3VzaCIsInVzZXJJZCI6MTI2OTQ0LCJjbGllbnRfaWQiOiJhcHAtY2xpZW50IiwidGF4UmVzaWRlbmN5IjoiVVMiLCJjb21wbGlhbmNlRW5hYmxlZCI6dHJ1ZSwiZmlyZWJhc2VUb2tlbiI6ImV5SmhiR2NpT2lKU1V6STFOaUo5LmV5SmhkV1FpT2lKb2RIUndjem92TDJsa1pXNTBhWFI1ZEc5dmJHdHBkQzVuYjI5bmJHVmhjR2x6TG1OdmJTOW5iMjluYkdVdWFXUmxiblJwZEhrdWFXUmxiblJwZEhsMGIyOXNhMmwwTG5ZeExrbGtaVzUwYVhSNVZHOXZiR3RwZENJc0ltVjRjQ0k2TVRZd05EazVOVEE1TVN3aWFXRjBJam94TmpBME9Ua3hORGt4TENKcGMzTWlPaUptYVhKbFltRnpaUzFoWkcxcGJuTmtheTFoTW1sdWMwQmtaWE5yYlc5aWFXeGxZWEJ3TFhCeWIyUXVhV0Z0TG1kelpYSjJhV05sWVdOamIzVnVkQzVqYjIwaUxDSnpkV0lpT2lKbWFYSmxZbUZ6WlMxaFpHMXBibk5rYXkxaE1tbHVj",
	"token_type": "bearer",
	"refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYW1Vc2VySWQiOjEyNzc1Mywid2Vic2l0ZSI6IlZlZW0gT3JnIiwiaXNPcmdTZXQiOnRydWUsInVzZXJfbmFtZSI6IjEyNjk0NDoxMTY5MDMiLCJpc3MiOiJEZXNrZXJhIiwiZ2l2ZW5fbmFtZSI6IkFua3VzaCIsInVzZXJJZCI6MTI2OTQ0LCJjbGllbnRfaWQiOiJhcHAtY2xpZW50IiwidGF4UmVzaWRlbmN5IjoiVVMiLCJjb21wbGlhbmNlRW5hYmxlZCI6dHJ1ZSwiZmlyZWJhc2VUb2tlbiI6ImV5SmhiR2NpT2lKU1V6STFOaUo5LmV5SmhkV1FpT2lKb2RIUndjem92TDJsa1pXNTBhWFI1ZEc5dmJHdHBkQzVuYjI5bmJHVmhjR2x6TG1OdmJTOW5iMjluYkdVdWFXUmxiblJwZEhrdWFXUmxiblJwZEhsMGIyOXNhMmwwTG5ZeExrbGtaVzUwYVhSNVZHOXZiR3RwZENJc0ltVjRjQ0k2TVRZd05EazVOVEE1TVN3aWFXRjBJam94TmpBME9Ua3hORGt4TENKcGMzTWlPaUptYVhKbFltRnpaUzFoWkcxcGJuTmtheTFoTW1sdWMwQmtaWE5yYlc5aWFXeGxZWEJ3TFhCeWIyUXVhV0Z0TG1kelpYSjJhV05sWVdOamIzVnVkQzVqYjIwaUxDSnpkV0lpT2lKbWFYSmxZbUZ6WlMxaFpHMXBibk5rYXkxaE1tbHVjMEJrWlhOcmJXOWlhV3hsWVhCd0xYQnliMlF1YVdGdExtZHpaWEoyYVdObFlXTmpiM1Z1ZEM1amIyMGlMQ0oxYVdRaU9pSmtZV0UzWXpVell5MW1aVFptTFRSaU5EY3RZV1V3Wmkx",
	"expires_in": 0
}
```

The `access_token` is not a permanent token and might become invalid time to time. At any point of time the validity of the token can be checked by calling the below API.

##### Sample request to check if token is valid

```bash
curl --location --request GET 'https://api-staging.deskera.xyz/v1/iam/token/app/validate' \
--header 'x-access-token: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYW1Vc2VySWQiOjEyNzQ3LCJ3ZWJzaXRlIjoiU2luZ2Fwb3JlIE9yZyIsImlzT3J'
```

A `200` response for the above API would mean that the token is still valid.
In case the token is invalid, the deskera token can be refreshed by using the below API

##### Sample request to refresh token

```bash
curl --location --request POST 'https://api-staging.deskera.xyz/v2/oauth/token?grant_type=refresh_token&refresh_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYW1Vc2VySWQiOjQ3MjU2LCJ3ZWJzaXRlIjoiRXVybyBPcmciLCJpc09yZ1NldCI6dHJ1ZSwidXNlcl9uYW1lIjoiNTEwNzM6NjQ5MzQiLCJpc3MiOiJEZXNrZXJhIiwiZ2l2ZW5fbmFtZSI6IkFua3VzaCIsInVzZXJJZCI6NTEwNzMsImNsaWVudF9pZCI6ImFwcC1jbGllbnQiLCJ0YXhSZXNpZGVuY3kiOiJFUyIsImNvbXBsaWFuY2VFbmFibGVkIjpmYWxzZSwiZmlyZWJh' \
--header 'Authorization: Basic Y2xfcHViXzEyMzQ6Y2xfcHJpdl83NzIz'
```

##### Sample respone for refresh token

```json
{
	"access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYW1Vc2VySWQiOjEyNzc1Mywid2Vic2l0ZSI6IlZlZW0gT3JnIiwiaXNPcmdTZXQiOnRydWUsInVzZXJfbmFtZSI6IjEyNjk0NDoxMTY5MDMiLCJpc3MiOiJEZXNrZXJhIiwiZ2l2ZW5fbmFtZSI6IkFua3VzaCIsInVzZXJJZCI6MTI2OTQ0LCJjbGllbnRfaWQiOiJhcHAtY2xpZW50IiwidGF4UmVzaWRlbmN5IjoiVVMiLCJjb21wbGlhbmNlRW5hYmxlZCI6dHJ1ZSwiZmlyZWJhc2VUb2tlbiI6ImV5SmhiR2NpT2lKU1V6STFOaUo5LmV5SmhkV1FpT2lKb2RIUndjem92TDJsa1pXNTBhWFI1ZEc5dmJHdHBkQzVuYjI5bmJHVmhjR2x6TG1OdmJTOW5iMjluYkdVdWFXUmxiblJwZEhrdWFXUmxiblJwZEhsMGIyOXNhMmwwTG5ZeExrbGtaVzUwYVhSNVZHOXZiR3RwZENJc0ltVjRjQ0k2TVRZd05EazVOVEE1TVN3aWFXRjBJam94TmpBME9Ua3hORGt4TENKcGMzTWlPaUptYVhKbFltRnpaUzFoWkcxcGJuTmtheTFoTW1sdWMwQmtaWE5yYlc5aWFXeGxZWEJ3TFhCeWIyUXVhV0Z0TG1kelpYSjJhV05sWVdOamIzVnVkQzVqYjIwaUxDSnpkV0lpT2lKbWFYSmxZbUZ6WlMxaFpHMXBibk5rYXkxaE1tbHVj",
	"token_type": "bearer",
	"refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYW1Vc2VySWQiOjEyNzc1Mywid2Vic2l0ZSI6IlZlZW0gT3JnIiwiaXNPcmdTZXQiOnRydWUsInVzZXJfbmFtZSI6IjEyNjk0NDoxMTY5MDMiLCJpc3MiOiJEZXNrZXJhIiwiZ2l2ZW5fbmFtZSI6IkFua3VzaCIsInVzZXJJZCI6MTI2OTQ0LCJjbGllbnRfaWQiOiJhcHAtY2xpZW50IiwidGF4UmVzaWRlbmN5IjoiVVMiLCJjb21wbGlhbmNlRW5hYmxlZCI6dHJ1ZSwiZmlyZWJhc2VUb2tlbiI6ImV5SmhiR2NpT2lKU1V6STFOaUo5LmV5SmhkV1FpT2lKb2RIUndjem92TDJsa1pXNTBhWFI1ZEc5dmJHdHBkQzVuYjI5bmJHVmhjR2x6TG1OdmJTOW5iMjluYkdVdWFXUmxiblJwZEhrdWFXUmxiblJwZEhsMGIyOXNhMmwwTG5ZeExrbGtaVzUwYVhSNVZHOXZiR3RwZENJc0ltVjRjQ0k2TVRZd05EazVOVEE1TVN3aWFXRjBJam94TmpBME9Ua3hORGt4TENKcGMzTWlPaUptYVhKbFltRnpaUzFoWkcxcGJuTmtheTFoTW1sdWMwQmtaWE5yYlc5aWFXeGxZWEJ3TFhCeWIyUXVhV0Z0TG1kelpYSjJhV05sWVdOamIzVnVkQzVqYjIwaUxDSnpkV0lpT2lKbWFYSmxZbUZ6WlMxaFpHMXBibk5rYXkxaE1tbHVjMEJrWlhOcmJXOWlhV3hsWVhCd0xYQnliMlF1YVdGdExtZHpaWEoyYVdObFlXTmpiM1Z1ZEM1amIyMGlMQ0oxYVdRaU9pSmtZV0UzWXpVell5MW1aVFptTFRSaU5EY3RZV1V3Wmkx",
	"expires_in": 0
}
```


:::note
Your `access-token` contains many privileges, keep it secure!
:::

Your platform can now use these token to access various Deskera APIs.



