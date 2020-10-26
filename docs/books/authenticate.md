---
id: authenticate
title: Authenticate using OAuth 2.0
sidebar_label: Authentication
---

The safe retrieval of secure resources while protecting user credentials can be achieved by OAuth 2.0.

The OAuth 2.0 specification defines a delegation protocol that is useful for conveying authorization decisions across a network of web-enabled applications and APIs. OAuth is used in a wide variety of applications, including providing mechanisms for user authentication. This has led many developers and API providers to incorrectly conclude that OAuth is itself an authentication protocol and to mistakenly use it as such.

Once you have registered as a Deskera developer and received your `client_id` and `client_secret`, they can be used to implement the standard Oauth 2.0 three legged flow to allow user to authorize the application to access Deskera APIs.

### The OAuth connection flow
A user connects to your platform using the following OAuth connection flow:

1. Starting on a page at your site, the user clicks a link that takes them to Deskera App Authentication page, passing along your app's `client_id`.
2. On Deskera's app auth page, the user provides the necessary information for connecting to your platform.
3. A call is made to the `callback_uri` given during app registeration along with an authorization code (this code can be used to get access_token and refresh_token for accessing the user's Deskera data).
4. On successfull response  of the call back API, the Deskera app auth page will redirect the user to a `redirect_uri` of your choice.

#### Step 1: The OAuth Link

The Deskera endpoint should receive these parameters:
- `response_type`, with the value **code**
- `scope`, with the value **write**
- `client_id`, with app's client ID generated during registration
- `state` (*optional*), state value
- `redirect_uri` (*optional*), The redirect URI that the user should be taken  to after authorization. This must be sent encoded


##### Sample OAuth Link

```
https://appauth.deskera.com/?client_id=cl_pub_12312412asdasdh12&scope=write&state=65289&response_type=code&redirect_uri=https%3A%2F%2Ftestapp.deskera.com%2Fpages%2Fdeskera
```

#### Step 2: Users connect their Deskera account

Once on the Deskera App auth page, the user would be prompted to input his/her Deskera user name and password and asked to authorize the app. The user should be already registered to Deskera Books and have atleast one orhganisation before coming to this step.

#### Step 3: Callback request with Auth Code

After the user connects their existing account to your platform, we'll make an API call to the `callback_uri` with the below parameters
- The `scope` granted
- The `state` value, if any
- The `code`, authorization code that is to be used get the tokens as described in next steps. This auth code is short lived and for one time use only.

##### Sample callback request

```
https://testapp.deskera.com/pages/deskera?code=Ag78aIu&state=65289&scope=write
```

#### Step 4: Platform completes the Desker account connection and gets tokens

Provide the code received in the Step 3 to the API below to get the tokens from Deskera. The `deskera-token` can be used to make API calls to Deskera Books and the `deskera-refresh-token` can be used to fetch a new `deskera-token` in case it expires.

The `Authorization` header consists of Basic + baseEncode64(clientId:clientSecret)

##### Sample request to get tokens
```java
curl --location --request POST 'https://bifrost.deskera.com/oauth/token?grant_type=authorization_code&scope=read+write&code=0P2xhb' \
--header 'Authorization: Basic Y2xfcHViX2I5N2Q3MDI0ZmI4ZjQ5OGU4YmE0YjIwOTljMmRhMjAyOmNsX3ByaXZfNmZ'
```


##### Sample response for get tokens API
```json
{
    "access_token": "95fd1877-368b-4ceb-8793-26e8d1a8a15d",
    "token_type": "bearer",
    "refresh_token": "fd4a88b6-5680-41fd-bf61-f9470604982c",
    "expires_in": 9,
    "scope": "read",
    "deskera-token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYW1Vc2VySWQiOjEyNzQ3LCJ3ZWJzaXRlIjoiU2lu",
    "deskera-refresh-token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYW1Vc2VySWQiOjEyNzQ3LCJ3ZWJzaXRlIjoiU2luZ2Fwb3JlIE9yZyIsImlzT3JnU2V0Ijp0cnVlLCJ1c2VyX25hbWUiOiIx",
    "email": "test-user@mailinator.com",
    "username": "My Org",
    "org": "Singapore Org"
}
```

The `deskera-token` is not a permanent token and might become invalid time to time. At any point of time the validity of the token can be checked by calling the below API.

##### Sample request to check if token is valid

```bash
curl --location --request GET 'https://bifrost.deskera.com/v1/iam/token/app/validate' \
--header 'x-access-token: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYW1Vc2VySWQiOjEyNzQ3LCJ3ZWJzaXRlIjoiU2luZ2Fwb3JlIE9yZyIsImlzT3J'
```

A `200` response for the above API would mean that the token is still valid.
In case the token is invalid, the deskera token can be refreshed by using the below API

##### Sample request to refresh token

```bash
curl --location --request POST 'https://bifrost.deskera.com/v1/iam/auth/app/getrefreshtoken' \
--header 'Content-Type: application/json' \
--data-raw '{
    "refreshToken" : "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYW1Vc2VySWQiOjEyNzQ3LCJ3ZWJzaXRlIjoiU2luZ2Fwb3JlIE9yZyIsImlzT3JnU2V0Ijp0cnVlLCJ1c2V"
}'
```

##### Sample respone for refresh token

```json
{
    "accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYW1Vc2VySWQiOjEyNzQ3LCJ3ZWJzaXRlIjoiU2luZ2Fwb3JlIE9yZyIsImlzT3JnU2V0Ijp0cnVlLCJ1c2Vy",
    "refreshToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYW1Vc2VySWQiOjEyNzQ3LCJ3ZWJzaXRlIjoiU2luZ2Fwb3JlIE9yZyIsImlzT3JnU2V0Ijp0cnVlLCJ1c2Vy",
    "idToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYW1Vc2VySWQiOjEyNzQ3LCJ3ZWJzaXRlIjoiU2luZ2Fwb3JlIE9yZyIsImlzT3JnU2V0Ijp0cnVlLCJ1c2VyX",
    "expiresIn": 0,
    "tokenType": "bearer",
    "emailVerified": false
}
```

:::note
In the above refresh token API response - 
- `accessToken` refers to `deskera-token` 
- `refreshToken` refers to `deskera-refresh-token`
:::


#### Step 4: User is redirected to Application

If the `callback_uri` return a 2XX response and is successfully able to fetch the tokens and complete the connection, the user UI is then redirected to the `redirect_uri`, if any provided in step #1.


:::note
Your `access-token` and `deskera-token` contains many privileges, keep it secure!
:::

Your platform can now use these token to access various Deskera APIs.



