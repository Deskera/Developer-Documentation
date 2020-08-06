---
id: started
title: Getting Started
sidebar_label: Getting Started
---

All [Deskera](https://www.deskera.com/books/) endpoints are secured and can only be reached after a successful authentication. Deskera APIs require a valid token to communicate. This token should be passed as `x-access-token` in the request header while interacting Deskera APIs. To generate a valid token, the user can trade-off username and password with Authentication API. Authentication API will return accessToken in the response body which can be used to communicate with Deskera APIs.

Deskera exposes various accounting APIs and can be utilised for various purposes, from creating [Quotes](https://www.deskera.com/sg/books/creating-quotes/) to [Invoices](https://www.deskera.com/sg/books/create-invoices-with-deskera-books/) and [Orders](https://www.deskera.com/sg/books/purchase-orders/) to [Bills](https://www.deskera.com/sg/books/paying-bills-with-deskera/) with [credit](https://www.deskera.com/sg/books/creating-credit-notes-in-deskera/) and [debit notes](https://www.deskera.com/sg/books/debit-notes-with-deskera/).