---
id: setup
title: Setup Developer Account
sidebar_label: Setup Developer Account
---

In order to create Apps on Deskera platform, developer needs to register with us as a Partner. 

We uses OAuth 2.0 for the Authentication scheme. Developers must first register with us by providing some details about their app, such as email, redirectUrl, and name.

Go to [Developer Registration Portal.](http://www.example.com/)
and register with us by providing
* Your app name
* Your email address
* The redirect URL of your webserver (to be used for authentication flow)


Once you click on the Register page, you will get the following values:
* clientId
* clientSecret

You need to store this values with you, as they are one time generated values, central to the oAuth2 flow.

Once all this is done, developers are ready to create apps on the Deskera platform.
:::note
Please note that you need to have a working redirect URl for us to send you the accessToken and authCode. If you are working on a local server, you can install ngrok.com and get a public URL for your webserver, to act as redirect URL. You can change this redirect URL anytime you want.
:::
