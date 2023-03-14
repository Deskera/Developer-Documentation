---
id: staging
title: Staging Environment
sidebar_label: Staging
---

## OAuth
##### Base url: https://oauth-staging.deskera.xyz
##### Sample: 
```
https://oauth-staging.deskera.xyz/?client_id=cl_pub_1234&scope=write&state=65921&response_type=code
```


## All other API 
##### Base url: https://api-staging.deskera.xyz
##### Sample: 
```
curl --location --request POST 'https://api-staging.deskera.xyz/v2/oauth/token?grant_type=authorization_code&scope=write&code=9wSQbM' \
--header 'Authorization: Basic Y2xfcHViXzEyMzQ6Y2xfcHJpdl83NzIz'
```

## UI Urls
##### https://books-ui-staging.deskera.xyz/

##### https://crm-ui-staging.deskera.xyz/

##### https://people-ui-staging.deskera.xyz/

##### https://go-ui-staging.deskera.xyz

