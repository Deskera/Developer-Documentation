---
id: started
title: Getting Started
sidebar_label: Getting Started
---

All [Deskera](https://www.deskera.com/books/) endpoints are secured and can only be reached after a successful authentication. Deskera APIs require a valid token to communicate. This token should be passed as `x-access-token` in the request header while interacting Deskera APIs. To generate a valid token, the user can trade-off username and password with Authentication API. Authentication API will return accessToken in the response body which can be used to communicate with Deskera APIs.

Deskera exposes various Human Resources APIs and can be utilised for various purposes, from creating [Employees](https://deskera.github.io/Developer-Documentation/docs/people/employee) to [Managing Employees](https://deskera.github.io/Developer-Documentation/docs/people/users) and [Setting up Compliance](https://deskera.github.io/Developer-Documentation/docs/people/compliance) to running [Payrolls](https://deskera.github.io/Developer-Documentation/docs/people/payrun) managing [Expenses](https://deskera.github.io/Developer-Documentation/docs/people/expense) and [Attendance](https://deskera.github.io/Developer-Documentation/docs/people/attendance).