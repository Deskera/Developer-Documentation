---
id: started
title: Getting Started
sidebar_label: Getting Started
---

All [Deskera](https://www.deskera.com/books/?utm_source=google&utm_medium=ads&utm_campaign=sg_brand&utm_medium=ppc&utm_term=deskera&utm_source=adwords&utm_campaign=Deskera+%7C+OOm+%7C+Brand&hsa_src=g&hsa_grp=100374910715&hsa_ver=3&hsa_mt=b&hsa_net=adwords&hsa_kw=deskera&hsa_acc=9866591391&hsa_cam=9723802991&hsa_ad=427945390298&hsa_tgt=kwd-309544122656&gclid=EAIaIQobChMIvunOuKaE6gIV2XwrCh0RcAIIEAAYASAAEgJ5IfD_BwE) endpoints are secured and can only be reached after a successful authentication. Deskera APIs requires a valid token to communicate. This token should be passed as `x-access-token` in the request header while interacting Deskera APIs. To generate a valid token, the user can trade of username and password with Authentication API. Authentication API will return accessToken in the response body which can be used to communicate with Deskera APIs.

