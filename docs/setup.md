---
id: setup
title: Setup Developer Account
sidebar_label: Setup Developer Account
---

In order to create Apps on Deskera platform, developer needs to register with us as a Partner. 

We uses OAuth 2.0 for the Authentication scheme. Developers must first register with us by providing some details about their app, such as email, redirectUrl, and name.

You can use below curl command to register with us by providing
* Your app name
* Your email address
* The redirect URL of your webserver (to be used for authentication flow)

### Sample Request
```
curl --location --request POST 'https://bifrost.deskera.com/oauth/partner' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
"name": "Your Name App",
"email": "testemail@domain.com",
"webServerRedirectUri" : "http://localhost:8080/yourendpoint/"
}'
```
After executing above curl command successfully, you will get the following values:
* clientId
* clientSecret

### Sample Response
```
{
    "clientId": "cl_pub_eb4ef885035043abaab28ace82feec06",
    "clientSecret": "cl_priv_004d321b522743aab8bfa5d36940f2f8",
    "scope": "read,write",
    "authorizedGrantTypes": "password,refresh_token,client_credentials,authorization_code",
    "webServerRedirectUri": "http://localhost:8080/yourendpoint/",
    "authorities": null,
    "accessTokenValidity": 3600,
    "refreshTokenValidity": 2592000,
    "additionalInformation": null,
    "autoApprove": true
}
```

You need to store this values with you, as they are one time generated values, central to the OAuth 2.0 flow.

Once all this is done, developers are ready to create apps on the Deskera platform.
:::note
Please note that you need to have a working redirect URl for us to send you the accessToken and authCode. If you are working on a local server, you can install [ngrok](https://ngrok.com/) and get a public URL for your webserver, to act as redirect URL. You can change this redirect URL anytime you want.
:::
