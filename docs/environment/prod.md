---
id: prod
title: Production Environment
sidebar_label: Production
---

## OAuth

##### Base url: https://oauth.deskera.com/

##### Sample: 
``` 
https://oauth-staging.deskera.xyz/?client_id=cl_pub_1234&scope=write&state=65921&response_type=code
```

## All other API 

##### Base url: https://bifrost-us.deskera.com

##### Sample: 
```
curl --location --request POST 'https://bifrost-us.deskera.com/oauth/token?grant_type=authorization_code&scope=read+write&code=0P2xhb' \
--header 'Authorization: Basic Y2xfcHViX2I5N2Q3MDI0ZmI4ZjQ5OGU4YmE0YjIwOTljMmRhMjAyOmNsX3ByaXZfNmZ'
```

## UI Urls

##### https://booksplus.deskera.com/

##### https://crmplus.deskera.com/

##### https://peopleplus.deskera.com/

##### https://go.deskera.com/

