---
id: setup
title: Setup Developer Account
sidebar_label: Setup Developer Account
---

In order to create Apps on Deskera platform, developer needs to register with us as a Partner. 

We uses OAuth 2.0 for the Authentication scheme. Developers must first register with us by providing some details about their app, such as email, callbankURL, and name.

Please fill in the following form below to register as a partner and obtain Deskera `client_id` and `client_secret`
https://docs.google.com/forms/d/e/1FAIpQLScZpPZg0Gu18AFF4E7YrekqSWLLbN7MVi6fBxTluQ_KFm4-zw/viewform



You need to store this values with you, as they are one time generated values, central to the OAuth 2.0 flow.

Once all this is done, developers are ready to create apps on the Deskera platform.
:::note
Please note that you need to have a working HTTPS callback URl for us to send you the accessToken and authCode. If you are working on a local server, you can install [ngrok](https://ngrok.com/) and get a public URL for your webserver, to act as callback URL.
:::
