---
id: payruns
title: Payruns
sidebar_label: Payruns
---
Payrun apis allow admins to manage (create/update/list/delete) payruns for their employees

## API
---

### Payruns

#### GET
##### Summary

Get Payruns

##### Description

Get all Payruns of a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| sortOrder | query | Sort Order | No | string |
| sortField | query | Sort Field | No | string |
| limit | query | Limit per Page | No | integer |
| currentPage | query | Current Page number | No | integer |
| searchString | query | Search String | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunsResponse](#dtopayrunsresponse) |


##### Request URL

```java
https://bifrost-us.deskera.com/v1/people-pay-run/payruns?limit=20&currentPage=1&order=desc&field=_id
```

##### Curl

```java
curl -X GET "https://bifrost-us.deskera.com/v1/people-pay-run/payruns?limit=20&currentPage=1&order=desc&field=_id" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrollsResponse](#dtopayrollsresponse) |

##### Sample Response
```java
{
    "payruns": [
        {
            "_id": "6359f7126aed621f3eb9e98c",
            "payrunType": 1,
            "paySchedule": {
                "id": "6359f7029baf6fc88bb19d39",
                "name": "oct-payschedule"
            },
            "payPeriod": "monthly",
            "workWeek": [
                5,
                1,
                2,
                3,
                4
            ],
            "payDay": "lastWorkingDayMonth",
            "firstPayDate": "10/31/2022",
            "workPeriod": {
                "from": "10/01/2022",
                "to": "10/31/2022"
            },
            "isForAllUsers": false,
            "isForContractors": false,
            "employees": [
                "63525be29f4afb9427b6f509",
                "6310886bc741a206031c257c"
            ],
            "totalCost": 20961,
            "totalTaxes": 0,
            "totalEarnings": 20001,
            "totalDeductions": 960,
            "netPay": 19041,
            "totalEmployerTaxes": 960,
            "totalEmployerCost": 960,
            "totalEmployeeCost": 20001,
            "year": 2022,
            "month": 10,
            "hasDirectPayment": false,
            "directDepositConsent": false,
            "tenantWorkWeek": [
                {
                    "day": "friday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "saturday",
                    "isWorkingDay": false,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "sunday",
                    "isWorkingDay": false,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "monday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "tuesday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "wednesday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "thursday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                }
            ],
            "holidays": null,
            "unpaidLeaves": null,
            "createdAt": "2022-10-27T03:12:18.221Z",
            "updatedAt": "2022-10-27T03:12:24.731Z",
            "stage": ",
            "processed": true,
            "processedAt": "2022-10-27T03:12:32.67Z",
            "isPaymentDone": false,
            "paymentDoneAt": "0001-01-01T00:00:00Z",
            "paymentVendor": ",
            "paymentFailureReason": ",
            "payDate": "10/31/2022",
            "totalDirectDepositNetPay": 19040,
            "totalCashNetPay": 0,
            "totalCheckNetPay": 0,
            "companyDaysBetweenPeriod": 21,
            "isNetPayNegative": false,
            "isValid": true,
            "jeStatus": "POSTED",
            "jeId": "20219893",
            "jePostedOn": "2022-10-27T03:12:33.421Z",
            "jeEntryNumber": "JE-0000030",
            "jeDetails": [
                {
                    "jeStatus": "POSTED",
                    "jeId": "20219893",
                    "jePostedOn": "2022-10-27T03:12:33.421Z",
                    "jeEntryNumber": "JE-0000030",
                    "isRevertJE": false
                }
            ],
            "employeeCount": 2,
            "revertedAt": "0001-01-01T00:00:00Z",
            "isPayrunReverted": false,
            "paymentCount": 2,
            "paymentFailureCount": 2,
            "location": 0,
            "shiftsInvolved": [],
            "otInvolved": [],
            "customFields": [
                {
                    "fieldId": "6323d1eeaabe99169d328446",
                    "fieldName": "C1",
                    "fieldValue": [
                        "c1"
                    ]
                }
            ]
        }
    ],
    "filterResponse": {
        "currentPage": 1,
        "count": 8,
        "limit": 20,
        "totalPages": 1,
        "totalCount": 8
    }
}
```


#### GET
##### Summary

Get all Payruns of a tenant based on searchField and searchString

##### Description

Get all Payruns of a tenant based on searchField and searchString

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| sortOrder | query | Sort Order | No | string |
| sortField | query | Sort Field | No | string |
| limit | query | Limit per Page | No | integer |
| currentPage | query | Current Page number | No | integer |
| searchString | query | Search String | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunsResponse](#dtopayrunsresponse) |



##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-run/payruns?searchField=non-synced-by-pay-period&searchString=05/01/2022-10/31/2022
```

##### Curl

```java
curl 'https://bifrost-us.deskera.com/v1/people-pay-run/payruns?searchField=non-synced-by-pay-period&searchString=05/01/2022-10/31/2022' \
--header 'Accept: application/json, text/plain, */*' \
--header 'Content-Type: application/json' \
--header 'x-access-token: sampletoken' \

  --compressed
```

##### Sample Request
```java
?searchField=non-synced-by-pay-period&searchString=05/01/2022-10/31/2022
```

##### Sample Response
```java
{
  "payruns": [
    {
      "_id": "635a5ea36aed621f3eb9eaab",
      "payrunType": 1,
      "paySchedule": {
        "id": "635a5d90a8522b716fa87248",
        "name": "Month"
      },
      "payPeriod": "monthly",
      "workWeek": [
        1,
        5,
        4,
        2,
        3
      ],
      "payDay": "lastWorkingDayMonth",
      "firstPayDate": "09/30/2022",
      "workPeriod": {
        "from": "09/01/2022",
        "to": "09/30/2022"
      },
      "isForAllUsers": true,
      "isForContractors": false,
      "totalCost": 51800,
      "totalTaxes": 0,
      "totalEarnings": 50000,
      "totalDeductions": 2600,
      "netPay": 47400,
      "totalEmployerTaxes": 1800,
      "totalEmployerCost": 1800,
      "totalEmployeeCost": 50000,
      "year": 2022,
      "month": 9,
      "hasDirectPayment": false,
      "directDepositConsent": false,
      "tenantWorkWeek": [
        {
          "day": "thursday",
          "isWorkingDay": true,
          "startTime": "09:00 AM",
          "endTime": "06:00 PM",
          "duration": 9
        },
        {
          "day": "wednesday",
          "isWorkingDay": true,
          "startTime": "09:00 AM",
          "endTime": "06:00 PM",
          "duration": 9
        },
        {
          "day": "saturday",
          "isWorkingDay": false,
          "startTime": "09:00 AM",
          "endTime": "06:00 PM",
          "duration": 9
        },
        {
          "day": "friday",
          "isWorkingDay": true,
          "startTime": "09:00 AM",
          "endTime": "06:00 PM",
          "duration": 9
        },
        {
          "day": "sunday",
          "isWorkingDay": false,
          "startTime": "09:00 AM",
          "endTime": "06:00 PM",
          "duration": 9
        },
        {
          "day": "monday",
          "isWorkingDay": true,
          "startTime": "09:00 AM",
          "endTime": "06:00 PM",
          "duration": 9
        },
        {
          "day": "tuesday",
          "isWorkingDay": true,
          "startTime": "09:00 AM",
          "endTime": "06:00 PM",
          "duration": 9
        }
      ],
      "holidays": null,
      "unpaidLeaves": null,
      "createdAt": "2022-10-27T10:34:11.299Z",
      "updatedAt": "2022-10-27T10:37:24.607Z",
      "stage": ",
      "processed": true,
      "processedAt": "2022-10-27T10:37:28.509Z",
      "isPaymentDone": false,
      "paymentDoneAt": "0001-01-01T00:00:00Z",
      "paymentVendor": ",
      "paymentFailureReason": ",
      "payDate": "09/30/2022",
      "totalDirectDepositNetPay": 0,
      "totalCashNetPay": 47400,
      "totalCheckNetPay": 0,
      "companyDaysBetweenPeriod": 22,
      "isNetPayNegative": false,
      "isValid": true,
      "jeStatus": ",
      "jeId": ",
      "jePostedOn": "0001-01-01T00:00:00Z",
      "jeEntryNumber": ",
      "jeDetails": null,
      "employeeCount": 1,
      "revertedAt": "0001-01-01T00:00:00Z",
      "isPayrunReverted": false,
      "paymentCount": 0,
      "paymentFailureCount": 0,
      "location": 0,
      "shiftsInvolved": null,
      "otInvolved": null,
      "customFields": null
    },
    {
      "_id": "635a5e8488e99679a2493df0",
      "payrunType": 1,
      "paySchedule": {
        "id": "635a5d90a8522b716fa87248",
        "name": "Month"
      },
      "payPeriod": "monthly",
      "workWeek": [
        1,
        5,
        4,
        2,
        3
      ],
      "payDay": "lastWorkingDayMonth",
      "firstPayDate": "10/31/2022",
      "workPeriod": {
        "from": "10/01/2022",
        "to": "10/31/2022"
      },
      "isForAllUsers": true,
      "isForContractors": false,
      "totalCost": 51800,
      "totalTaxes": 0,
      "totalEarnings": 50000,
      "totalDeductions": 2600,
      "netPay": 47400,
      "totalEmployerTaxes": 1800,
      "totalEmployerCost": 1800,
      "totalEmployeeCost": 50000,
      "year": 2022,
      "month": 10,
      "hasDirectPayment": false,
      "directDepositConsent": false,
      "tenantWorkWeek": [
        {
          "day": "thursday",
          "isWorkingDay": true,
          "startTime": "09:00 AM",
          "endTime": "06:00 PM",
          "duration": 9
        },
        {
          "day": "wednesday",
          "isWorkingDay": true,
          "startTime": "09:00 AM",
          "endTime": "06:00 PM",
          "duration": 9
        },
        {
          "day": "saturday",
          "isWorkingDay": false,
          "startTime": "09:00 AM",
          "endTime": "06:00 PM",
          "duration": 9
        },
        {
          "day": "friday",
          "isWorkingDay": true,
          "startTime": "09:00 AM",
          "endTime": "06:00 PM",
          "duration": 9
        },
        {
          "day": "sunday",
          "isWorkingDay": false,
          "startTime": "09:00 AM",
          "endTime": "06:00 PM",
          "duration": 9
        },
        {
          "day": "monday",
          "isWorkingDay": true,
          "startTime": "09:00 AM",
          "endTime": "06:00 PM",
          "duration": 9
        },
        {
          "day": "tuesday",
          "isWorkingDay": true,
          "startTime": "09:00 AM",
          "endTime": "06:00 PM",
          "duration": 9
        }
      ],
      "holidays": null,
      "unpaidLeaves": null,
      "createdAt": "2022-10-27T10:33:40.352Z",
      "updatedAt": "2022-10-27T10:33:48.07Z",
      "stage": ",
      "processed": true,
      "processedAt": "2022-10-27T10:33:55.42Z",
      "isPaymentDone": false,
      "paymentDoneAt": "0001-01-01T00:00:00Z",
      "paymentVendor": ",
      "paymentFailureReason": ",
      "payDate": "10/31/2022",
      "totalDirectDepositNetPay": 0,
      "totalCashNetPay": 47400,
      "totalCheckNetPay": 0,
      "companyDaysBetweenPeriod": 21,
      "isNetPayNegative": false,
      "isValid": true,
      "jeStatus": "REVERTED",
      "jeId": "20227079",
      "jePostedOn": "2022-10-27T10:41:24.57Z",
      "jeEntryNumber": "JE-0000004",
      "jeDetails": [
        {
          "jeStatus": "POSTED",
          "jeId": "20227050",
          "jePostedOn": "2022-10-27T10:39:28.544Z",
          "jeEntryNumber": "JE-0000002",
          "isRevertJE": false
        },
        {
          "jeStatus": "REVERTED",
          "jeId": "20227079",
          "jePostedOn": "2022-10-27T10:41:24.57Z",
          "jeEntryNumber": "JE-0000004",
          "isRevertJE": true
        }
      ],
      "employeeCount": 1,
      "revertedAt": "0001-01-01T00:00:00Z",
      "isPayrunReverted": false,
      "paymentCount": 0,
      "paymentFailureCount": 0,
      "location": 0,
      "shiftsInvolved": null,
      "otInvolved": null,
      "customFields": null
    }
  ],
  "filterResponse": {
    "currentPage": 1,
    "count": 2,
    "limit": 2,
    "totalPages": 1,
    "totalCount": 2
  }
}
```

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

#### POST
##### Summary

Add Payrun

##### Description

Add Payrun for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrun | body | Payrun Request Body | Yes | [dto.PayrunRequest](#dtopayrunrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunResponse](#dtopayrunresponse) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-run/payruns
```

##### Curl

```java
curl --location --request POST 'https://bifrost-us.deskera.com/v1/people-pay-run/payruns' \
-H "accept: application/json" -H "x-access-token: sampleaccesstoken
-d '{
    "countryCode": "IN",
    "tenantId": "208637",
    "deleted": false,
    "payrunType": 1,
    "location": 0,
    "paySchedule": {
        "id": "6359f7029baf6fc88bb19d39",
        "name": "oct-payschedule"
    },
    "payPeriod": "monthly",
    "workWeek": [
        5,
        1,
        2,
        3,
        4
    ],
    "payDay": "lastWorkingDayMonth",
    "firstPayDate": "10/31/2022",
    "payDate": "10/31/2022",
    "workPeriod": {
        "from": "10/01/2022",
        "to": "10/31/2022"
    },
    "isForAllUsers": false,
    "employees": [
        "63525be29f4afb9427b6f509",
        "6310886bc741a206031c257c"
    ],
    "customFields": [
        {
            "fieldId": "6323d1eeaabe99169d328446",
            "fieldName": "C1",
            "fieldValue": [
                "c1"
            ]
        }
    ]
}'"
```

##### Sample Request
```java
{
    "countryCode": "IN",
    "tenantId": "208637",
    "deleted": false,
    "payrunType": 1,
    "location": 0,
    "paySchedule": {
        "id": "6359f7029baf6fc88bb19d39",
        "name": "oct-payschedule"
    },
    "payPeriod": "monthly",
    "workWeek": [
        5,
        1,
        2,
        3,
        4
    ],
    "payDay": "lastWorkingDayMonth",
    "firstPayDate": "10/31/2022",
    "payDate": "10/31/2022",
    "workPeriod": {
        "from": "10/01/2022",
        "to": "10/31/2022"
    },
    "isForAllUsers": false,
    "employees": [
        "63525be29f4afb9427b6f509",
        "6310886bc741a206031c257c"
    ],
    "customFields": [
        {
            "fieldId": "6323d1eeaabe99169d328446",
            "fieldName": "C1",
            "fieldValue": [
                "c1"
            ]
        }
    ]
}
```

##### Sample Response
```java
{
    "_id": "635a023088e99679a2493d59",
    "payrunType": 1,
    "paySchedule": {
        "id": "6359f7029baf6fc88bb19d39",
        "name": "oct-payschedule"
    },
    "payPeriod": "monthly",
    "workWeek": [
        5,
        1,
        2,
        3,
        4
    ],
    "payDay": "lastWorkingDayMonth",
    "firstPayDate": "10/31/2022",
    "workPeriod": {
        "from": "10/01/2022",
        "to": "10/31/2022"
    },
    "isForAllUsers": false,
    "isForContractors": false,
    "payrolls": [
        {
            "_id": "635a023088e99679a2493d5b",
            "payrunId": "635a023088e99679a2493d59",
            "employeeId": "63525be29f4afb9427b6f509",
            "empId": "00043",
            "userId": "63525be29f4afb9427b6f509",
            "firstName": "Simon",
            "lastName": "Chua",
            "daysOff": 0,
            "daysWorked": 21,
            "hoursWorked": 189,
            "overtime": null,
            "otPayRate": 0,
            "compensationCurrency": ",
            "compensationPeriod": "30",
            "compensation": 0.4,
            "netPay": 1,
            "basicPayrun": 0.4,
            "netPayrun": 0.4,
            "basicPayrunYTD": 0.8,
            "netPayrunYTD": 0.8,
            "hourlyPay": 0,
            "netPayYTD": 2,
            "deductions": 0,
            "earnings": 0.6,
            "netTaxes": 0,
            "components": [
                {
                    "componentId": "623adf1618c85cfab9f9f387",
                    "employeeId": ",
                    "name": "HRA",
                    "amount": 0.16,
                    "type": "EARNING",
                    "modified": false,
                    "YTD": 0.32,
                    "status": ",
                    "isVariable": true,
                    "componentConfig": {
                        "configureAmountBasis": "percentageOfBasicSalary",
                        "basisComponentId": ",
                        "componentPercent": 40,
                        "amountPerDay": 0,
                        "deductionType": "
                    },
                    "frequency": {
                        "period": "everyPayrun",
                        "occurrence": null,
                        "when": "
                    },
                    "isHidden": false,
                    "subType": "hra",
                    "includeInCTC": true,
                    "includeInOTCalc": false,
                    "isUnpaidIncluded": true,
                    "defaultAmount": 0.16,
                    "formulaConfig": null,
                    "formula": "
                },
                {
                    "componentId": "623adf1618c85cfab9f9f386",
                    "employeeId": ",
                    "name": "Conveyance Allowance",
                    "amount": 0,
                    "type": "EARNING",
                    "modified": false,
                    "YTD": 0,
                    "status": ",
                    "isVariable": false,
                    "componentConfig": {
                        "configureAmountBasis": ",
                        "basisComponentId": ",
                        "componentPercent": 0,
                        "amountPerDay": 0,
                        "deductionType": "
                    },
                    "frequency": {
                        "period": "everyPayrun",
                        "occurrence": null,
                        "when": "
                    },
                    "isHidden": false,
                    "subType": "conveyance_allowance",
                    "includeInCTC": true,
                    "includeInOTCalc": false,
                    "isUnpaidIncluded": false,
                    "defaultAmount": 0,
                    "formulaConfig": null,
                    "formula": "
                },
                {
                    "componentId": "623adf1618c85cfab9f9f385",
                    "employeeId": ",
                    "name": "Fixed Allowance",
                    "amount": 0.44,
                    "type": "EARNING",
                    "modified": false,
                    "YTD": 0.88,
                    "status": ",
                    "isVariable": false,
                    "componentConfig": {
                        "configureAmountBasis": ",
                        "basisComponentId": ",
                        "componentPercent": 0,
                        "amountPerDay": 0,
                        "deductionType": "
                    },
                    "frequency": {
                        "period": "everyPayrun",
                        "occurrence": null,
                        "when": "
                    },
                    "isHidden": false,
                    "subType": "fixed_allowance",
                    "includeInCTC": true,
                    "includeInOTCalc": false,
                    "isUnpaidIncluded": true,
                    "defaultAmount": 0.44,
                    "formulaConfig": null,
                    "formula": "
                }
            ],
            "benefits": null,
            "benefitsMeta": [],
            "compliance": {
                "userId": "63525be29f4afb9427b6f509",
                "countryCode": "IN",
                "employerContribution": {},
                "employeeContribution": {},
                "grossWageYTD": 0,
                "taxableWageYTD": 0,
                "taxDetails": [],
                "preTaxDeductionYTD": 0,
                "postTaxDeductionYTD": 0,
                "preTaxDeduction": 0,
                "postTaxDeduction": 0
            },
            "directDepositConsent": false,
            "bank": ",
            "accountType": ",
            "ifsc": ",
            "upi": "5800123456@abc",
            "accountNumber": ",
            "routingNumber": ",
            "paymentMethod": "upi",
            "createdAt": "2022-10-27T03:59:44.259Z",
            "processed": false,
            "processedAt": "0001-01-01T00:00:00Z",
            "updatedAt": "2022-10-27T03:59:45.16Z",
            "hasSalaryAdvance": false,
            "effectiveCompensations": null,
            "daysOffBefore": 0,
            "daysOffAfter": 0,
            "basicBefore": 0.01904761904761905,
            "basicAfter": 0.01904761904761905,
            "lossOfPay": 0,
            "overtimePay": 0,
            "basicPayForDay": 0.02,
            "unfilledFields": null,
            "ctc": 1,
            "isPaymentDone": false,
            "paymentDoneAt": "0001-01-01T00:00:00Z",
            "paymentVendor": ",
            "paymentFailureReason": ",
            "terminationInitiated": false,
            "terminationDate": "0001-01-01T00:00:00Z"
        },
        {
            "_id": "635a023088e99679a2493d5a",
            "payrunId": "635a023088e99679a2493d59",
            "employeeId": "6310886bc741a206031c257c",
            "empId": "00037",
            "userId": "6310886bc741a206031c257c",
            "firstName": "Felicity",
            "lastName": "Howard",
            "daysOff": 0,
            "daysWorked": 21,
            "hoursWorked": 189,
            "overtime": null,
            "otPayRate": 0,
            "compensationCurrency": ",
            "compensationPeriod": "30",
            "compensation": 8000,
            "netPay": 20000,
            "basicPayrun": 8000,
            "netPayrun": 8000,
            "basicPayrunYTD": 32000,
            "netPayrunYTD": 32000,
            "hourlyPay": 41.03,
            "netPayYTD": 77120,
            "deductions": 0,
            "earnings": 12000,
            "netTaxes": 0,
            "components": [
                {
                    "componentId": "623adf1618c85cfab9f9f387",
                    "employeeId": ",
                    "name": "HRA",
                    "amount": 3200,
                    "type": "EARNING",
                    "modified": false,
                    "YTD": 12800,
                    "status": ",
                    "isVariable": true,
                    "componentConfig": {
                        "configureAmountBasis": "percentageOfBasicSalary",
                        "basisComponentId": ",
                        "componentPercent": 40,
                        "amountPerDay": 0,
                        "deductionType": "
                    },
                    "frequency": {
                        "period": "everyPayrun",
                        "occurrence": null,
                        "when": "
                    },
                    "isHidden": false,
                    "subType": "hra",
                    "includeInCTC": true,
                    "includeInOTCalc": false,
                    "isUnpaidIncluded": true,
                    "defaultAmount": 3200,
                    "formulaConfig": null,
                    "formula": "
                },
                {
                    "componentId": "623adf1618c85cfab9f9f386",
                    "employeeId": ",
                    "name": "Conveyance Allowance",
                    "amount": 0,
                    "type": "EARNING",
                    "modified": false,
                    "YTD": 0,
                    "status": ",
                    "isVariable": false,
                    "componentConfig": {
                        "configureAmountBasis": ",
                        "basisComponentId": ",
                        "componentPercent": 0,
                        "amountPerDay": 0,
                        "deductionType": "
                    },
                    "frequency": {
                        "period": "everyPayrun",
                        "occurrence": null,
                        "when": "
                    },
                    "isHidden": false,
                    "subType": "conveyance_allowance",
                    "includeInCTC": true,
                    "includeInOTCalc": false,
                    "isUnpaidIncluded": false,
                    "defaultAmount": 0,
                    "formulaConfig": null,
                    "formula": "
                },
                {
                    "componentId": "623adf1618c85cfab9f9f385",
                    "employeeId": ",
                    "name": "Fixed Allowance",
                    "amount": 8800,
                    "type": "EARNING",
                    "modified": false,
                    "YTD": 35200,
                    "status": ",
                    "isVariable": false,
                    "componentConfig": {
                        "configureAmountBasis": ",
                        "basisComponentId": ",
                        "componentPercent": 0,
                        "amountPerDay": 0,
                        "deductionType": "
                    },
                    "frequency": {
                        "period": "everyPayrun",
                        "occurrence": null,
                        "when": "
                    },
                    "isHidden": false,
                    "subType": "fixed_allowance",
                    "includeInCTC": true,
                    "includeInOTCalc": false,
                    "isUnpaidIncluded": true,
                    "defaultAmount": 8800,
                    "formulaConfig": null,
                    "formula": "
                }
            ],
            "benefits": null,
            "benefitsMeta": [],
            "compliance": null,
            "directDepositConsent": false,
            "bank": ",
            "accountType": "currentAccount",
            "ifsc": "ABCD0123456",
            "upi": ",
            "accountNumber": "12345678910",
            "routingNumber": "26009140",
            "paymentMethod": "directDeposit",
            "createdAt": "2022-10-27T03:59:44.258Z",
            "processed": false,
            "processedAt": "0001-01-01T00:00:00Z",
            "updatedAt": "2022-10-27T03:59:45.169Z",
            "hasSalaryAdvance": false,
            "effectiveCompensations": null,
            "daysOffBefore": 0,
            "daysOffAfter": 0,
            "basicBefore": 380.95238095238096,
            "basicAfter": 380.95238095238096,
            "lossOfPay": 0,
            "overtimePay": 0,
            "basicPayForDay": 380.95,
            "unfilledFields": null,
            "ctc": 20000,
            "isPaymentDone": false,
            "paymentDoneAt": "0001-01-01T00:00:00Z",
            "paymentVendor": ",
            "paymentFailureReason": ",
            "terminationInitiated": false,
            "terminationDate": "0001-01-01T00:00:00Z"
        }
    ],
    "employees": [
        "63525be29f4afb9427b6f509",
        "6310886bc741a206031c257c"
    ],
    "totalCost": 20001,
    "totalTaxes": 0,
    "totalEarnings": 20001,
    "totalDeductions": 0,
    "netPay": 20001,
    "totalEmployerTaxes": 0,
    "totalEmployerCost": 0,
    "totalEmployeeCost": 20001,
    "year": 2022,
    "month": 10,
    "hasDirectPayment": false,
    "directDepositConsent": false,
    "tenantWorkWeek": [
        {
            "day": "monday",
            "isWorkingDay": true,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        },
        {
            "day": "tuesday",
            "isWorkingDay": true,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        },
        {
            "day": "wednesday",
            "isWorkingDay": true,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        },
        {
            "day": "thursday",
            "isWorkingDay": true,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        },
        {
            "day": "friday",
            "isWorkingDay": true,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        },
        {
            "day": "saturday",
            "isWorkingDay": false,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        },
        {
            "day": "sunday",
            "isWorkingDay": false,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        }
    ],
    "holidays": [],
    "unpaidLeaves": null,
    "createdAt": "2022-10-27T03:59:44.243Z",
    "updatedAt": "2022-10-27T03:59:45.179Z",
    "stage": ",
    "processed": false,
    "processedAt": "0001-01-01T00:00:00Z",
    "isPaymentDone": false,
    "paymentDoneAt": "0001-01-01T00:00:00Z",
    "paymentVendor": ",
    "paymentFailureReason": ",
    "payDate": "10/31/2022",
    "totalDirectDepositNetPay": 20000,
    "totalCashNetPay": 0,
    "totalCheckNetPay": 0,
    "companyDaysBetweenPeriod": 21,
    "isNetPayNegative": false,
    "isValid": true,
    "jeStatus": ",
    "jeId": ",
    "jePostedOn": "0001-01-01T00:00:00Z",
    "jeEntryNumber": ",
    "jeDetails": null,
    "employeeCount": 0,
    "revertedAt": "0001-01-01T00:00:00Z",
    "isPayrunReverted": false,
    "paymentCount": 0,
    "paymentFailureCount": 0,
    "location": 0,
    "shiftsInvolved": [],
    "otInvolved": [],
    "customFields": [
        {
            "fieldId": "6323d1eeaabe99169d328446",
            "fieldName": "C1",
            "fieldValue": [
                "c1"
            ]
        }
    ]
}
```

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

#### DELETE
##### Summary

Bulk Delete Payruns By Ids

##### Description

Bulk Delete Payruns by Ids for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| ids | body | Payrun Ids | Yes | [ [dto.BulkPayrunRequest](#dtobulkpayrunrequest) ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunResponse](#dtopayrunresponse) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-run/payruns
```

##### Curl

```java
curl 'https://bifrost-us.deskera.com/v1/people-pay-run/payruns' \
  -X 'DELETE' \
 --header 'Accept: application/json, text/plain, */*' \
--header 'Content-Type: application/json' \
--header 'x-access-token: sampletoken' \
  --data-raw '[{"payrunId":"635a4a596aed621f3eb9e9f4"}]' \
  --compressed
```

##### Sample Request
```java
[{"payrunId":"635a4a596aed621f3eb9e9f4"}]
```

##### Sample Response
```java
{
    "_id": ",
    "paySchedule": {
        "id": ",
        "name": "
    },
    "payPeriod": ",
    "workWeek": null,
    "payDay": ",
    "firstPayDate": ",
    "workPeriod": {
        "from": ",
        "to": "
    },
    "isForAllUsers": false,
    "isForContractors": false,
    "totalCost": 0,
    "totalTaxes": 0,
    "totalEarnings": 0,
    "totalDeductions": 0,
    "netPay": 0,
    "totalEmployerTaxes": 0,
    "totalEmployerCost": 0,
    "totalEmployeeCost": 0,
    "year": 0,
    "month": 0,
    "hasDirectPayment": false,
    "directDepositConsent": false,
    "tenantWorkWeek": null,
    "holidays": null,
    "unpaidLeaves": null,
    "createdAt": "0001-01-01T00:00:00Z",
    "updatedAt": "0001-01-01T00:00:00Z",
    "stage": ",
    "processed": false,
    "processedAt": "0001-01-01T00:00:00Z",
    "isPaymentDone": false,
    "paymentDoneAt": "0001-01-01T00:00:00Z",
    "paymentVendor": ",
    "paymentFailureReason": ",
    "payDate": ",
    "totalDirectDepositNetPay": 0,
    "totalCashNetPay": 0,
    "totalCheckNetPay": 0,
    "companyDaysBetweenPeriod": 0,
    "isNetPayNegative": false,
    "isValid": false,
    "jeStatus": ",
    "jeId": ",
    "jePostedOn": "0001-01-01T00:00:00Z",
    "jeEntryNumber": ",
    "jeDetails": null,
    "employeeCount": 0,
    "revertedAt": "0001-01-01T00:00:00Z",
    "isPayrunReverted": false,
    "paymentCount": 0,
    "paymentFailureCount": 0,
    "location": 0,
    "shiftsInvolved": null,
    "otInvolved": null,
    "customFields": null
}
```
##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Update Payroll of an employee for a  Payrun

#### PUT
##### Summary

Update Payroll of an employee for a  Payrun

##### Description

Update Payroll of a Payrun for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrunId | path | Payrun Id | Yes | string |
| mappingId | path | Payroll Id | Yes | string |
| payrun | body | Payroll Request Body | Yes | [dto.PayrollRequest](#dtopayrollrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunResponse](#dtopayrunresponse) |



##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-run/payruns/payrun/6359f7126aed621f3eb9e98c/payroll/6359f7126aed621f3eb9e98e
```

##### Curl

```java
curl 'https://bifrost-us.deskera.com/v1/people-pay-run/payruns/payrun/6359f7126aed621f3eb9e98c/payroll/6359f7126aed621f3eb9e98e' \
  -X 'PUT' \
--header 'Accept: application/json, text/plain, */*' \
--header 'Content-Type: application/json' \
--header 'x-access-token: sampletoken' \
  --data-raw '{"_id":"6359f7126aed621f3eb9e98e","payrunId":"6359f7126aed621f3eb9e98c","employeeId":"63525be29f4afb9427b6f509","empId":"00043","userId":"63525be29f4afb9427b6f509","firstName":"Simon","lastName":"Chua","daysOff":1,"daysWorked":21,"hoursWorked":189,"overtime":null,"otPayRate":0,"compensationCurrency":","compensationPeriod":"30","compensation":0.4,"netPay":1,"basicPayrun":0.4,"netPayrun":0.4,"basicPayrunYTD":0.4,"netPayrunYTD":0.4,"hourlyPay":0,"netPayYTD":1,"deductions":0,"earnings":0.6,"netTaxes":0,"components":[{"componentId":"623adf1618c85cfab9f9f386","employeeId":","name":"Conveyance Allowance","amount":0,"type":"EARNING","modified":false,"YTD":0,"status":","isVariable":false,"componentConfig":{"configureAmountBasis":","basisComponentId":","componentPercent":0,"amountPerDay":0,"deductionType":"},"frequency":{"period":"everyPayrun","occurrence":null,"when":"},"isHidden":false,"subType":"conveyance_allowance","includeInCTC":true,"includeInOTCalc":false,"isUnpaidIncluded":false,"defaultAmount":0,"formulaConfig":null,"formula":"},{"componentId":"623adf1618c85cfab9f9f387","employeeId":","name":"HRA","amount":0.16,"type":"EARNING","modified":false,"YTD":0.16,"status":","isVariable":true,"componentConfig":{"configureAmountBasis":"percentageOfBasicSalary","basisComponentId":","componentPercent":40,"amountPerDay":0,"deductionType":"},"frequency":{"period":"everyPayrun","occurrence":null,"when":"},"isHidden":false,"subType":"hra","includeInCTC":true,"includeInOTCalc":false,"isUnpaidIncluded":true,"defaultAmount":0.0128,"formulaConfig":null,"formula":"},{"componentId":"623adf1618c85cfab9f9f385","employeeId":","name":"Fixed Allowance","amount":0.43999999999999995,"type":"EARNING","modified":false,"YTD":0.44,"status":","isVariable":false,"componentConfig":{"configureAmountBasis":","basisComponentId":","componentPercent":0,"amountPerDay":0,"deductionType":"},"frequency":{"period":"everyPayrun","occurrence":null,"when":"},"isHidden":false,"subType":"fixed_allowance","includeInCTC":true,"includeInOTCalc":false,"isUnpaidIncluded":true,"defaultAmount":0.04,"formulaConfig":null,"formula":"}],"benefits":null,"benefitsMeta":[],"compliance":{"userId":"63525be29f4afb9427b6f509","countryCode":"IN","employerContribution":{},"employeeContribution":{},"grossWageYTD":0,"taxableWageYTD":0,"taxDetails":[],"preTaxDeductionYTD":0,"postTaxDeductionYTD":0,"preTaxDeduction":0,"postTaxDeduction":0},"directDepositConsent":false,"bank":","accountType":","ifsc":","upi":"5800123456@abc","accountNumber":","routingNumber":","paymentMethod":"upi","createdAt":"2022-10-27T03:12:18.251Z","processed":false,"processedAt":"0001-01-01T00:00:00Z","updatedAt":"2022-10-27T09:40:14.206Z","hasSalaryAdvance":false,"effectiveCompensations":null,"daysOffBefore":0,"daysOffAfter":0,"basicBefore":0.01904761904761905,"basicAfter":0.01904761904761905,"lossOfPay":0.047619047619047616,"overtimePay":0,"basicPayForDay":0.02,"unfilledFields":null,"ctc":1,"isPaymentDone":false,"paymentDoneAt":"0001-01-01T00:00:00Z","paymentVendor":","paymentFailureReason":","terminationInitiated":false,"terminationDate":"0001-01-01T00:00:00Z"}' \
  --compressed
```

##### Sample Request
```java
{
    "_id": "6359f7126aed621f3eb9e98e",
    "payrunId": "6359f7126aed621f3eb9e98c",
    "employeeId": "63525be29f4afb9427b6f509",
    "empId": "00043",
    "userId": "63525be29f4afb9427b6f509",
    "firstName": "Simon",
    "lastName": "Chua",
    "daysOff": 1,
    "daysWorked": 21,
    "hoursWorked": 189,
    "overtime": null,
    "otPayRate": 0,
    "compensationCurrency": ",
    "compensationPeriod": "30",
    "compensation": 0.4,
    "netPay": 1,
    "basicPayrun": 0.4,
    "netPayrun": 0.4,
    "basicPayrunYTD": 0.4,
    "netPayrunYTD": 0.4,
    "hourlyPay": 0,
    "netPayYTD": 1,
    "deductions": 0,
    "earnings": 0.6,
    "netTaxes": 0,
    "components": [
        {
            "componentId": "623adf1618c85cfab9f9f386",
            "employeeId": ",
            "name": "Conveyance Allowance",
            "amount": 0,
            "type": "EARNING",
            "modified": false,
            "YTD": 0,
            "status": ",
            "isVariable": false,
            "componentConfig": {
                "configureAmountBasis": ",
                "basisComponentId": ",
                "componentPercent": 0,
                "amountPerDay": 0,
                "deductionType": "
            },
            "frequency": {
                "period": "everyPayrun",
                "occurrence": null,
                "when": "
            },
            "isHidden": false,
            "subType": "conveyance_allowance",
            "includeInCTC": true,
            "includeInOTCalc": false,
            "isUnpaidIncluded": false,
            "defaultAmount": 0,
            "formulaConfig": null,
            "formula": "
        },
        {
            "componentId": "623adf1618c85cfab9f9f387",
            "employeeId": ",
            "name": "HRA",
            "amount": 0.16,
            "type": "EARNING",
            "modified": false,
            "YTD": 0.16,
            "status": ",
            "isVariable": true,
            "componentConfig": {
                "configureAmountBasis": "percentageOfBasicSalary",
                "basisComponentId": ",
                "componentPercent": 40,
                "amountPerDay": 0,
                "deductionType": "
            },
            "frequency": {
                "period": "everyPayrun",
                "occurrence": null,
                "when": "
            },
            "isHidden": false,
            "subType": "hra",
            "includeInCTC": true,
            "includeInOTCalc": false,
            "isUnpaidIncluded": true,
            "defaultAmount": 0.0128,
            "formulaConfig": null,
            "formula": "
        },
        {
            "componentId": "623adf1618c85cfab9f9f385",
            "employeeId": ",
            "name": "Fixed Allowance",
            "amount": 0.43999999999999995,
            "type": "EARNING",
            "modified": false,
            "YTD": 0.44,
            "status": ",
            "isVariable": false,
            "componentConfig": {
                "configureAmountBasis": ",
                "basisComponentId": ",
                "componentPercent": 0,
                "amountPerDay": 0,
                "deductionType": "
            },
            "frequency": {
                "period": "everyPayrun",
                "occurrence": null,
                "when": "
            },
            "isHidden": false,
            "subType": "fixed_allowance",
            "includeInCTC": true,
            "includeInOTCalc": false,
            "isUnpaidIncluded": true,
            "defaultAmount": 0.04,
            "formulaConfig": null,
            "formula": "
        }
    ],
    "benefits": null,
    "benefitsMeta": [],
    "compliance": {
        "userId": "63525be29f4afb9427b6f509",
        "countryCode": "IN",
        "employerContribution": {},
        "employeeContribution": {},
        "grossWageYTD": 0,
        "taxableWageYTD": 0,
        "taxDetails": [],
        "preTaxDeductionYTD": 0,
        "postTaxDeductionYTD": 0,
        "preTaxDeduction": 0,
        "postTaxDeduction": 0
    },
    "directDepositConsent": false,
    "bank": ",
    "accountType": ",
    "ifsc": ",
    "upi": "5800123456@abc",
    "accountNumber": ",
    "routingNumber": ",
    "paymentMethod": "upi",
    "createdAt": "2022-10-27T03:12:18.251Z",
    "processed": false,
    "processedAt": "0001-01-01T00:00:00Z",
    "updatedAt": "2022-10-27T09:40:14.206Z",
    "hasSalaryAdvance": false,
    "effectiveCompensations": null,
    "daysOffBefore": 0,
    "daysOffAfter": 0,
    "basicBefore": 0.01904761904761905,
    "basicAfter": 0.01904761904761905,
    "lossOfPay": 0.047619047619047616,
    "overtimePay": 0,
    "basicPayForDay": 0.02,
    "unfilledFields": null,
    "ctc": 1,
    "isPaymentDone": false,
    "paymentDoneAt": "0001-01-01T00:00:00Z",
    "paymentVendor": ",
    "paymentFailureReason": ",
    "terminationInitiated": false,
    "terminationDate": "0001-01-01T00:00:00Z"
}
```

##### Sample Response
```java
{
    "_id": "6359f7126aed621f3eb9e98c",
    "payrunType": 1,
    "paySchedule": {
        "id": "6359f7029baf6fc88bb19d39",
        "name": "oct-payschedule"
    },
    "payPeriod": "monthly",
    "workWeek": [
        5,
        1,
        2,
        3,
        4
    ],
    "payDay": "lastWorkingDayMonth",
    "firstPayDate": "10/31/2022",
    "workPeriod": {
        "from": "10/01/2022",
        "to": "10/31/2022"
    },
    "isForAllUsers": false,
    "isForContractors": false,
    "payrolls": [
        {
            "_id": "6359f7126aed621f3eb9e98d",
            "payrunId": "6359f7126aed621f3eb9e98c",
            "employeeId": "6310886bc741a206031c257c",
            "empId": "00037",
            "userId": "6310886bc741a206031c257c",
            "firstName": "Felicity",
            "lastName": "Howard",
            "daysOff": 0,
            "daysWorked": 21,
            "hoursWorked": 189,
            "overtime": null,
            "otPayRate": 0,
            "compensationCurrency": ",
            "compensationPeriod": "30",
            "compensation": 8000,
            "netPay": 19040,
            "basicPayrun": 8000,
            "netPayrun": 8000,
            "basicPayrunYTD": 8000,
            "netPayrunYTD": 8000,
            "hourlyPay": 41.03,
            "netPayYTD": 19040,
            "deductions": 960,
            "earnings": 12000,
            "netTaxes": 960,
            "components": [
                {
                    "componentId": "623adf1618c85cfab9f9f386",
                    "employeeId": ",
                    "name": "Conveyance Allowance",
                    "amount": 0,
                    "type": "EARNING",
                    "modified": false,
                    "YTD": 0,
                    "status": ",
                    "isVariable": false,
                    "componentConfig": {
                        "configureAmountBasis": ",
                        "basisComponentId": ",
                        "componentPercent": 0,
                        "amountPerDay": 0,
                        "deductionType": "
                    },
                    "frequency": {
                        "period": "everyPayrun",
                        "occurrence": null,
                        "when": "
                    },
                    "isHidden": false,
                    "subType": "conveyance_allowance",
                    "includeInCTC": true,
                    "includeInOTCalc": false,
                    "isUnpaidIncluded": false,
                    "defaultAmount": 0,
                    "formulaConfig": null,
                    "formula": "
                },
                {
                    "componentId": "623adf1618c85cfab9f9f387",
                    "employeeId": ",
                    "name": "HRA",
                    "amount": 3200,
                    "type": "EARNING",
                    "modified": false,
                    "YTD": 3200,
                    "status": ",
                    "isVariable": true,
                    "componentConfig": {
                        "configureAmountBasis": "percentageOfBasicSalary",
                        "basisComponentId": ",
                        "componentPercent": 40,
                        "amountPerDay": 0,
                        "deductionType": "
                    },
                    "frequency": {
                        "period": "everyPayrun",
                        "occurrence": null,
                        "when": "
                    },
                    "isHidden": false,
                    "subType": "hra",
                    "includeInCTC": true,
                    "includeInOTCalc": false,
                    "isUnpaidIncluded": true,
                    "defaultAmount": 3200,
                    "formulaConfig": null,
                    "formula": "
                },
                {
                    "componentId": "623adf1618c85cfab9f9f385",
                    "employeeId": ",
                    "name": "Fixed Allowance",
                    "amount": 8800,
                    "type": "EARNING",
                    "modified": false,
                    "YTD": 8800,
                    "status": ",
                    "isVariable": false,
                    "componentConfig": {
                        "configureAmountBasis": ",
                        "basisComponentId": ",
                        "componentPercent": 0,
                        "amountPerDay": 0,
                        "deductionType": "
                    },
                    "frequency": {
                        "period": "everyPayrun",
                        "occurrence": null,
                        "when": "
                    },
                    "isHidden": false,
                    "subType": "fixed_allowance",
                    "includeInCTC": true,
                    "includeInOTCalc": false,
                    "isUnpaidIncluded": true,
                    "defaultAmount": 8800,
                    "formulaConfig": null,
                    "formula": "
                }
            ],
            "benefits": null,
            "benefitsMeta": [],
            "compliance": {
                "userId": "6310886bc741a206031c257c",
                "countryCode": "IN",
                "employerContribution": {
                    "EPF": 293.6,
                    "EPS": 666.4
                },
                "employeeContribution": {
                    "EPF": 960,
                    "Income Tax": 0
                },
                "grossWageYTD": 0,
                "taxableWageYTD": 0,
                "taxDetails": [
                    {
                        "taxName": "EPF",
                        "payeeType": "EMPLOYEE",
                        "taxAmount": 960,
                        "monthToDate": 960,
                        "quaterToDate": 960,
                        "yearToDate": 960,
                        "authorityCode": "
                    },
                    {
                        "taxName": "EPF",
                        "payeeType": "EMPLOYER",
                        "taxAmount": 293.6,
                        "monthToDate": 293.6,
                        "quaterToDate": 293.6,
                        "yearToDate": 293.6,
                        "authorityCode": "
                    },
                    {
                        "taxName": "EPS",
                        "payeeType": "EMPLOYER",
                        "taxAmount": 666.4,
                        "monthToDate": 666.4,
                        "quaterToDate": 666.4,
                        "yearToDate": 666.4,
                        "authorityCode": "
                    },
                    {
                        "taxName": "Income Tax",
                        "payeeType": "EMPLOYEE",
                        "taxAmount": 0,
                        "monthToDate": 0,
                        "quaterToDate": 0,
                        "yearToDate": 0,
                        "authorityCode": "
                    }
                ],
                "preTaxDeductionYTD": 0,
                "postTaxDeductionYTD": 0,
                "preTaxDeduction": 0,
                "postTaxDeduction": 0
            },
            "directDepositConsent": false,
            "bank": ",
            "accountType": "currentAccount",
            "ifsc": "ABCD0123456",
            "upi": ",
            "accountNumber": "12345678910",
            "routingNumber": "26009140",
            "paymentMethod": "directDeposit",
            "createdAt": "2022-10-27T03:12:18.251Z",
            "processed": false,
            "processedAt": "0001-01-01T00:00:00Z",
            "updatedAt": "2022-10-27T09:40:14.199Z",
            "hasSalaryAdvance": false,
            "effectiveCompensations": null,
            "daysOffBefore": 0,
            "daysOffAfter": 0,
            "basicBefore": 380.95238095238096,
            "basicAfter": 380.95238095238096,
            "lossOfPay": 0,
            "overtimePay": 0,
            "basicPayForDay": 380.95,
            "unfilledFields": null,
            "ctc": 20000,
            "isPaymentDone": false,
            "paymentDoneAt": "0001-01-01T00:00:00Z",
            "paymentVendor": ",
            "paymentFailureReason": ",
            "terminationInitiated": false,
            "terminationDate": "0001-01-01T00:00:00Z"
        },
        {
            "_id": "6359f7126aed621f3eb9e98e",
            "payrunId": "6359f7126aed621f3eb9e98c",
            "employeeId": "63525be29f4afb9427b6f509",
            "empId": "00043",
            "userId": "63525be29f4afb9427b6f509",
            "firstName": "Simon",
            "lastName": "Chua",
            "daysOff": 1,
            "daysWorked": 21,
            "hoursWorked": 189,
            "overtime": null,
            "otPayRate": 0,
            "compensationCurrency": ",
            "compensationPeriod": "30",
            "compensation": 0.4,
            "netPay": 0.95,
            "basicPayrun": 0.4,
            "netPayrun": 0.38,
            "basicPayrunYTD": 0.4,
            "netPayrunYTD": 0.38,
            "hourlyPay": 0,
            "netPayYTD": 0.95,
            "deductions": 0,
            "earnings": 0.57,
            "netTaxes": 0,
            "components": [
                {
                    "componentId": "623adf1618c85cfab9f9f385",
                    "employeeId": ",
                    "name": "Fixed Allowance",
                    "amount": 0.42,
                    "type": "EARNING",
                    "modified": false,
                    "YTD": 0.42,
                    "status": ",
                    "isVariable": false,
                    "componentConfig": {
                        "configureAmountBasis": ",
                        "basisComponentId": ",
                        "componentPercent": 0,
                        "amountPerDay": 0,
                        "deductionType": "
                    },
                    "frequency": {
                        "period": "everyPayrun",
                        "occurrence": null,
                        "when": "
                    },
                    "isHidden": false,
                    "subType": "fixed_allowance",
                    "includeInCTC": true,
                    "includeInOTCalc": false,
                    "isUnpaidIncluded": true,
                    "defaultAmount": 0.04,
                    "formulaConfig": null,
                    "formula": "
                },
                {
                    "componentId": "623adf1618c85cfab9f9f386",
                    "employeeId": ",
                    "name": "Conveyance Allowance",
                    "amount": 0,
                    "type": "EARNING",
                    "modified": false,
                    "YTD": 0,
                    "status": ",
                    "isVariable": false,
                    "componentConfig": {
                        "configureAmountBasis": ",
                        "basisComponentId": ",
                        "componentPercent": 0,
                        "amountPerDay": 0,
                        "deductionType": "
                    },
                    "frequency": {
                        "period": "everyPayrun",
                        "occurrence": null,
                        "when": "
                    },
                    "isHidden": false,
                    "subType": "conveyance_allowance",
                    "includeInCTC": true,
                    "includeInOTCalc": false,
                    "isUnpaidIncluded": false,
                    "defaultAmount": 0,
                    "formulaConfig": null,
                    "formula": "
                },
                {
                    "componentId": "623adf1618c85cfab9f9f387",
                    "employeeId": ",
                    "name": "HRA",
                    "amount": 0.15,
                    "type": "EARNING",
                    "modified": false,
                    "YTD": 0.15,
                    "status": ",
                    "isVariable": true,
                    "componentConfig": {
                        "configureAmountBasis": "percentageOfBasicSalary",
                        "basisComponentId": ",
                        "componentPercent": 40,
                        "amountPerDay": 0,
                        "deductionType": "
                    },
                    "frequency": {
                        "period": "everyPayrun",
                        "occurrence": null,
                        "when": "
                    },
                    "isHidden": false,
                    "subType": "hra",
                    "includeInCTC": true,
                    "includeInOTCalc": false,
                    "isUnpaidIncluded": true,
                    "defaultAmount": 0.0128,
                    "formulaConfig": null,
                    "formula": "
                }
            ],
            "benefits": null,
            "benefitsMeta": [],
            "compliance": {
                "userId": "63525be29f4afb9427b6f509",
                "countryCode": "IN",
                "employerContribution": {},
                "employeeContribution": {},
                "grossWageYTD": 0,
                "taxableWageYTD": 0,
                "taxDetails": [],
                "preTaxDeductionYTD": 0,
                "postTaxDeductionYTD": 0,
                "preTaxDeduction": 0,
                "postTaxDeduction": 0
            },
            "directDepositConsent": false,
            "bank": ",
            "accountType": ",
            "ifsc": ",
            "upi": "5800123456@abc",
            "accountNumber": ",
            "routingNumber": ",
            "paymentMethod": "upi",
            "createdAt": "2022-10-27T03:12:18.251Z",
            "processed": false,
            "processedAt": "0001-01-01T00:00:00Z",
            "updatedAt": "2022-10-27T09:49:56.069Z",
            "hasSalaryAdvance": false,
            "effectiveCompensations": null,
            "daysOffBefore": 0,
            "daysOffAfter": 0,
            "basicBefore": 0.01904761904761905,
            "basicAfter": 0.01904761904761905,
            "lossOfPay": 0.02,
            "overtimePay": 0,
            "basicPayForDay": 0.02,
            "unfilledFields": null,
            "ctc": 1,
            "isPaymentDone": false,
            "paymentDoneAt": "0001-01-01T00:00:00Z",
            "paymentVendor": ",
            "paymentFailureReason": ",
            "terminationInitiated": false,
            "terminationDate": "0001-01-01T00:00:00Z"
        }
    ],
    "employees": [
        "63525be29f4afb9427b6f509",
        "6310886bc741a206031c257c"
    ],
    "totalCost": 20960.95,
    "totalTaxes": 0,
    "totalEarnings": 20000.95,
    "totalDeductions": 960,
    "netPay": 19040.95,
    "totalEmployerTaxes": 960,
    "totalEmployerCost": 960,
    "totalEmployeeCost": 20000.95,
    "year": 2022,
    "month": 10,
    "hasDirectPayment": false,
    "directDepositConsent": false,
    "tenantWorkWeek": [
        {
            "day": "friday",
            "isWorkingDay": true,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        },
        {
            "day": "saturday",
            "isWorkingDay": false,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        },
        {
            "day": "sunday",
            "isWorkingDay": false,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        },
        {
            "day": "monday",
            "isWorkingDay": true,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        },
        {
            "day": "tuesday",
            "isWorkingDay": true,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        },
        {
            "day": "wednesday",
            "isWorkingDay": true,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        },
        {
            "day": "thursday",
            "isWorkingDay": true,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        }
    ],
    "holidays": null,
    "unpaidLeaves": null,
    "createdAt": "2022-10-27T03:12:18.221Z",
    "updatedAt": "2022-10-27T09:49:56.079Z",
    "stage": ",
    "processed": false,
    "processedAt": "0001-01-01T00:00:00Z",
    "isPaymentDone": false,
    "paymentDoneAt": "0001-01-01T00:00:00Z",
    "paymentVendor": ",
    "paymentFailureReason": ",
    "payDate": "10/31/2022",
    "totalDirectDepositNetPay": 19040,
    "totalCashNetPay": 0,
    "totalCheckNetPay": 0,
    "companyDaysBetweenPeriod": 21,
    "isNetPayNegative": false,
    "isValid": true,
    "jeStatus": "REVERTED",
    "jeId": "20226558",
    "jePostedOn": "2022-10-27T09:39:31.982Z",
    "jeEntryNumber": "JE-0000035",
    "jeDetails": [
        {
            "jeStatus": "POSTED",
            "jeId": "20219893",
            "jePostedOn": "2022-10-27T03:12:33.421Z",
            "jeEntryNumber": "JE-0000030",
            "isRevertJE": false
        },
        {
            "jeStatus": "REVERTED",
            "jeId": "20226452",
            "jePostedOn": "2022-10-27T09:23:34.931Z",
            "jeEntryNumber": "JE-0000033",
            "isRevertJE": true
        },
        {
            "jeStatus": "POSTED",
            "jeId": "20226552",
            "jePostedOn": "2022-10-27T09:38:59.254Z",
            "jeEntryNumber": "JE-0000034",
            "isRevertJE": false
        },
        {
            "jeStatus": "REVERTED",
            "jeId": "20226558",
            "jePostedOn": "2022-10-27T09:39:31.982Z",
            "jeEntryNumber": "JE-0000035",
            "isRevertJE": true
        }
    ],
    "employeeCount": 0,
    "revertedAt": "2022-10-27T09:39:31.669Z",
    "isPayrunReverted": true,
    "paymentCount": 0,
    "paymentFailureCount": 0,
    "location": 0,
    "shiftsInvolved": [],
    "otInvolved": [],
    "customFields": [
        {
            "fieldId": "6323d1eeaabe99169d328446",
            "fieldName": "C1",
            "fieldValue": [
                "c1"
            ]
        }
    ]
}
```
##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |


### Revert Payrun 

#### PATCH
##### Summary

Revert Payrun By Id

##### Description

Revert Payrun by Id for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrunId | path | Id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunResponse](#dtopayrunresponse) |



##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-run/payruns/revert/6359f7126aed621f3eb9e98c
```

##### Curl

```java
curl 'https://bifrost-us.deskera.com/v1/people-pay-run/payruns/revert/6359f7126aed621f3eb9e98c' \
  -X 'PATCH' \
--header 'Accept: application/json, text/plain, */*' \
--header 'Content-Type: application/json' \
--header 'x-access-token: sampletoken' \

  --data-raw '{}' \
  --compressed
```

##### Sample Request
```java
{}
```

##### Sample Response
```java
{
    "_id": ",
    "paySchedule": {
        "id": ",
        "name": "
    },
    "payPeriod": ",
    "workWeek": null,
    "payDay": ",
    "firstPayDate": ",
    "workPeriod": {
        "from": ",
        "to": "
    },
    "isForAllUsers": false,
    "isForContractors": false,
    "totalCost": 0,
    "totalTaxes": 0,
    "totalEarnings": 0,
    "totalDeductions": 0,
    "netPay": 0,
    "totalEmployerTaxes": 0,
    "totalEmployerCost": 0,
    "totalEmployeeCost": 0,
    "year": 0,
    "month": 0,
    "hasDirectPayment": false,
    "directDepositConsent": false,
    "tenantWorkWeek": null,
    "holidays": null,
    "unpaidLeaves": null,
    "createdAt": "0001-01-01T00:00:00Z",
    "updatedAt": "0001-01-01T00:00:00Z",
    "stage": ",
    "processed": false,
    "processedAt": "0001-01-01T00:00:00Z",
    "isPaymentDone": false,
    "paymentDoneAt": "0001-01-01T00:00:00Z",
    "paymentVendor": ",
    "paymentFailureReason": ",
    "payDate": ",
    "totalDirectDepositNetPay": 0,
    "totalCashNetPay": 0,
    "totalCheckNetPay": 0,
    "companyDaysBetweenPeriod": 0,
    "isNetPayNegative": false,
    "isValid": false,
    "jeStatus": ",
    "jeId": ",
    "jePostedOn": "0001-01-01T00:00:00Z",
    "jeEntryNumber": ",
    "jeDetails": null,
    "employeeCount": 0,
    "revertedAt": "0001-01-01T00:00:00Z",
    "isPayrunReverted": false,
    "paymentCount": 0,
    "paymentFailureCount": 0,
    "location": 0,
    "shiftsInvolved": null,
    "otInvolved": null,
    "customFields": null
}
```
##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Processes payrun

#### PATCH
##### Summary

Processes a given payrun

##### Description

Processes a given payrun by Id for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrunId | path | Payrun Id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunResponse](#dtopayrunresponse) |

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-run/payruns/status/635a4a596aed621f3eb9e9f4
```

##### Curl

```java
curl 'https://bifrost-us.deskera.com/v1/people-pay-run/payruns/status/635a4a596aed621f3eb9e9f4' \
  -X 'PATCH' \
--header 'Accept: application/json, text/plain, */*' \
--header 'Content-Type: application/json' \
--header 'x-access-token: sampletoken' \
  --compressed
```

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |


### Delete payrun

#### DELETE
##### Summary

Delete Payrun By Id

##### Description

Delete Payrun by Id for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Id | Yes | string |



##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-run/payruns
```

##### Curl

```java
curl 'https://bifrost-us.deskera.com/v1/people-pay-run/payruns' \
  -X 'DELETE' \
 --header 'Accept: application/json, text/plain, */*' \
--header 'Content-Type: application/json' \
--header 'x-access-token: sampletoken' \
  --data-raw '[{"payrunId":"635a4a596aed621f3eb9e9f4"}]' \
  --compressed
```

##### Sample Request
```java
[{"payrunId":"635a4a596aed621f3eb9e9f4"}]
```

##### Sample Response
```java
{
    "_id": ",
    "paySchedule": {
        "id": ",
        "name": "
    },
    "payPeriod": ",
    "workWeek": null,
    "payDay": ",
    "firstPayDate": ",
    "workPeriod": {
        "from": ",
        "to": "
    },
    "isForAllUsers": false,
    "isForContractors": false,
    "totalCost": 0,
    "totalTaxes": 0,
    "totalEarnings": 0,
    "totalDeductions": 0,
    "netPay": 0,
    "totalEmployerTaxes": 0,
    "totalEmployerCost": 0,
    "totalEmployeeCost": 0,
    "year": 0,
    "month": 0,
    "hasDirectPayment": false,
    "directDepositConsent": false,
    "tenantWorkWeek": null,
    "holidays": null,
    "unpaidLeaves": null,
    "createdAt": "0001-01-01T00:00:00Z",
    "updatedAt": "0001-01-01T00:00:00Z",
    "stage": ",
    "processed": false,
    "processedAt": "0001-01-01T00:00:00Z",
    "isPaymentDone": false,
    "paymentDoneAt": "0001-01-01T00:00:00Z",
    "paymentVendor": ",
    "paymentFailureReason": ",
    "payDate": ",
    "totalDirectDepositNetPay": 0,
    "totalCashNetPay": 0,
    "totalCheckNetPay": 0,
    "companyDaysBetweenPeriod": 0,
    "isNetPayNegative": false,
    "isValid": false,
    "jeStatus": ",
    "jeId": ",
    "jePostedOn": "0001-01-01T00:00:00Z",
    "jeEntryNumber": ",
    "jeDetails": null,
    "employeeCount": 0,
    "revertedAt": "0001-01-01T00:00:00Z",
    "isPayrunReverted": false,
    "paymentCount": 0,
    "paymentFailureCount": 0,
    "location": 0,
    "shiftsInvolved": null,
    "otInvolved": null,
    "customFields": null
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunResponse](#dtopayrunresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Fetch a payrun

#### GET
##### Summary

Get Payrun By Id

##### Description

Get Payrun by Id for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrunId | path | Payrun Id | Yes | string |
| sortOrder | query | Sort Order | No | string |
| sortField | query | Sort Field | No | string |
| limit | query | Limit per Page | No | integer |
| currentPage | query | Current Page number | No | integer |
| searchString | query | Search String | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunResponse](#dtopayrunresponse) |



##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-run/payruns/6359f7126aed621f3eb9e98c?limit=20&currentPage=1&sortOrder=desc&sortField=_id&searchField=firstName&searchString=&paymentMethod=
```

##### Curl

```java
curl 'https://bifrost-us.deskera.com/v1/people-pay-run/payruns/6359f7126aed621f3eb9e98c?limit=20&currentPage=1&sortOrder=desc&sortField=_id&searchField=firstName&searchString=&paymentMethod=' \
--header 'Accept: application/json, text/plain, */*' \
--header 'Content-Type: application/json' \
--header 'x-access-token: sampletoken' \
  --compressed
```

##### Sample Request
```java
?limit=20&currentPage=1&sortOrder=desc&sortField=_id&searchField=firstName&searchString=&paymentMethod=
```

##### Sample Response
```java
{
    "_id": "6359f7126aed621f3eb9e98c",
    "payrunType": 1,
    "paySchedule": {
        "id": "6359f7029baf6fc88bb19d39",
        "name": "oct-payschedule"
    },
    "payPeriod": "monthly",
    "workWeek": [
        5,
        1,
        2,
        3,
        4
    ],
    "payDay": "lastWorkingDayMonth",
    "firstPayDate": "10/31/2022",
    "workPeriod": {
        "from": "10/01/2022",
        "to": "10/31/2022"
    },
    "isForAllUsers": false,
    "isForContractors": false,
    "payrolls": [
        {
            "_id": "6359f7126aed621f3eb9e98e",
            "payrunId": "6359f7126aed621f3eb9e98c",
            "employeeId": "63525be29f4afb9427b6f509",
            "empId": "00043",
            "userId": "63525be29f4afb9427b6f509",
            "firstName": "Simon",
            "lastName": "Chua",
            "daysOff": 0,
            "daysWorked": 21,
            "hoursWorked": 189,
            "overtime": null,
            "otPayRate": 0,
            "compensationCurrency": ",
            "compensationPeriod": "30",
            "compensation": 0.4,
            "netPay": 1,
            "basicPayrun": 0.4,
            "netPayrun": 0.4,
            "basicPayrunYTD": 0.4,
            "netPayrunYTD": 0.4,
            "hourlyPay": 0,
            "netPayYTD": 1,
            "deductions": 0,
            "earnings": 0.6,
            "netTaxes": 0,
            "components": [
                {
                    "componentId": "623adf1618c85cfab9f9f386",
                    "employeeId": ",
                    "name": "Conveyance Allowance",
                    "amount": 0,
                    "type": "EARNING",
                    "modified": false,
                    "YTD": 0,
                    "status": ",
                    "isVariable": false,
                    "componentConfig": {
                        "configureAmountBasis": ",
                        "basisComponentId": ",
                        "componentPercent": 0,
                        "amountPerDay": 0,
                        "deductionType": "
                    },
                    "frequency": {
                        "period": "everyPayrun",
                        "occurrence": null,
                        "when": "
                    },
                    "isHidden": false,
                    "subType": "conveyance_allowance",
                    "includeInCTC": true,
                    "includeInOTCalc": false,
                    "isUnpaidIncluded": false,
                    "defaultAmount": 0,
                    "formulaConfig": null,
                    "formula": "
                },
                {
                    "componentId": "623adf1618c85cfab9f9f387",
                    "employeeId": ",
                    "name": "HRA",
                    "amount": 0.16,
                    "type": "EARNING",
                    "modified": false,
                    "YTD": 0.16,
                    "status": ",
                    "isVariable": true,
                    "componentConfig": {
                        "configureAmountBasis": "percentageOfBasicSalary",
                        "basisComponentId": ",
                        "componentPercent": 40,
                        "amountPerDay": 0,
                        "deductionType": "
                    },
                    "frequency": {
                        "period": "everyPayrun",
                        "occurrence": null,
                        "when": "
                    },
                    "isHidden": false,
                    "subType": "hra",
                    "includeInCTC": true,
                    "includeInOTCalc": false,
                    "isUnpaidIncluded": true,
                    "defaultAmount": 0.0128,
                    "formulaConfig": null,
                    "formula": "
                },
                {
                    "componentId": "623adf1618c85cfab9f9f385",
                    "employeeId": ",
                    "name": "Fixed Allowance",
                    "amount": 0.44,
                    "type": "EARNING",
                    "modified": false,
                    "YTD": 0.44,
                    "status": ",
                    "isVariable": false,
                    "componentConfig": {
                        "configureAmountBasis": ",
                        "basisComponentId": ",
                        "componentPercent": 0,
                        "amountPerDay": 0,
                        "deductionType": "
                    },
                    "frequency": {
                        "period": "everyPayrun",
                        "occurrence": null,
                        "when": "
                    },
                    "isHidden": false,
                    "subType": "fixed_allowance",
                    "includeInCTC": true,
                    "includeInOTCalc": false,
                    "isUnpaidIncluded": true,
                    "defaultAmount": 0.04,
                    "formulaConfig": null,
                    "formula": "
                }
            ],
            "benefits": null,
            "benefitsMeta": [],
            "compliance": {
                "userId": "63525be29f4afb9427b6f509",
                "countryCode": "IN",
                "employerContribution": {},
                "employeeContribution": {},
                "grossWageYTD": 0,
                "taxableWageYTD": 0,
                "taxDetails": [],
                "preTaxDeductionYTD": 0,
                "postTaxDeductionYTD": 0,
                "preTaxDeduction": 0,
                "postTaxDeduction": 0
            },
            "directDepositConsent": false,
            "bank": ",
            "accountType": ",
            "ifsc": ",
            "upi": "5800123456@abc",
            "accountNumber": ",
            "routingNumber": ",
            "paymentMethod": "upi",
            "createdAt": "2022-10-27T03:12:18.251Z",
            "processed": false,
            "processedAt": "0001-01-01T00:00:00Z",
            "updatedAt": "2022-10-27T09:40:14.206Z",
            "hasSalaryAdvance": false,
            "effectiveCompensations": null,
            "daysOffBefore": 0,
            "daysOffAfter": 0,
            "basicBefore": 0.01904761904761905,
            "basicAfter": 0.01904761904761905,
            "lossOfPay": 0,
            "overtimePay": 0,
            "basicPayForDay": 0.02,
            "unfilledFields": null,
            "ctc": 1,
            "isPaymentDone": false,
            "paymentDoneAt": "0001-01-01T00:00:00Z",
            "paymentVendor": ",
            "paymentFailureReason": ",
            "terminationInitiated": false,
            "terminationDate": "0001-01-01T00:00:00Z"
        },
        {
            "_id": "6359f7126aed621f3eb9e98d",
            "payrunId": "6359f7126aed621f3eb9e98c",
            "employeeId": "6310886bc741a206031c257c",
            "empId": "00037",
            "userId": "6310886bc741a206031c257c",
            "firstName": "Felicity",
            "lastName": "Howard",
            "daysOff": 0,
            "daysWorked": 21,
            "hoursWorked": 189,
            "overtime": null,
            "otPayRate": 0,
            "compensationCurrency": ",
            "compensationPeriod": "30",
            "compensation": 8000,
            "netPay": 19040,
            "basicPayrun": 8000,
            "netPayrun": 8000,
            "basicPayrunYTD": 8000,
            "netPayrunYTD": 8000,
            "hourlyPay": 41.03,
            "netPayYTD": 19040,
            "deductions": 960,
            "earnings": 12000,
            "netTaxes": 960,
            "components": [
                {
                    "componentId": "623adf1618c85cfab9f9f386",
                    "employeeId": ",
                    "name": "Conveyance Allowance",
                    "amount": 0,
                    "type": "EARNING",
                    "modified": false,
                    "YTD": 0,
                    "status": ",
                    "isVariable": false,
                    "componentConfig": {
                        "configureAmountBasis": ",
                        "basisComponentId": ",
                        "componentPercent": 0,
                        "amountPerDay": 0,
                        "deductionType": "
                    },
                    "frequency": {
                        "period": "everyPayrun",
                        "occurrence": null,
                        "when": "
                    },
                    "isHidden": false,
                    "subType": "conveyance_allowance",
                    "includeInCTC": true,
                    "includeInOTCalc": false,
                    "isUnpaidIncluded": false,
                    "defaultAmount": 0,
                    "formulaConfig": null,
                    "formula": "
                },
                {
                    "componentId": "623adf1618c85cfab9f9f387",
                    "employeeId": ",
                    "name": "HRA",
                    "amount": 3200,
                    "type": "EARNING",
                    "modified": false,
                    "YTD": 3200,
                    "status": ",
                    "isVariable": true,
                    "componentConfig": {
                        "configureAmountBasis": "percentageOfBasicSalary",
                        "basisComponentId": ",
                        "componentPercent": 40,
                        "amountPerDay": 0,
                        "deductionType": "
                    },
                    "frequency": {
                        "period": "everyPayrun",
                        "occurrence": null,
                        "when": "
                    },
                    "isHidden": false,
                    "subType": "hra",
                    "includeInCTC": true,
                    "includeInOTCalc": false,
                    "isUnpaidIncluded": true,
                    "defaultAmount": 3200,
                    "formulaConfig": null,
                    "formula": "
                },
                {
                    "componentId": "623adf1618c85cfab9f9f385",
                    "employeeId": ",
                    "name": "Fixed Allowance",
                    "amount": 8800,
                    "type": "EARNING",
                    "modified": false,
                    "YTD": 8800,
                    "status": ",
                    "isVariable": false,
                    "componentConfig": {
                        "configureAmountBasis": ",
                        "basisComponentId": ",
                        "componentPercent": 0,
                        "amountPerDay": 0,
                        "deductionType": "
                    },
                    "frequency": {
                        "period": "everyPayrun",
                        "occurrence": null,
                        "when": "
                    },
                    "isHidden": false,
                    "subType": "fixed_allowance",
                    "includeInCTC": true,
                    "includeInOTCalc": false,
                    "isUnpaidIncluded": true,
                    "defaultAmount": 8800,
                    "formulaConfig": null,
                    "formula": "
                }
            ],
            "benefits": null,
            "benefitsMeta": [],
            "compliance": {
                "userId": "6310886bc741a206031c257c",
                "countryCode": "IN",
                "employerContribution": {
                    "EPF": 293.6,
                    "EPS": 666.4
                },
                "employeeContribution": {
                    "EPF": 960,
                    "Income Tax": 0
                },
                "grossWageYTD": 0,
                "taxableWageYTD": 0,
                "taxDetails": [
                    {
                        "taxName": "EPF",
                        "payeeType": "EMPLOYEE",
                        "taxAmount": 960,
                        "monthToDate": 960,
                        "quaterToDate": 960,
                        "yearToDate": 960,
                        "authorityCode": "
                    },
                    {
                        "taxName": "EPF",
                        "payeeType": "EMPLOYER",
                        "taxAmount": 293.6,
                        "monthToDate": 293.6,
                        "quaterToDate": 293.6,
                        "yearToDate": 293.6,
                        "authorityCode": "
                    },
                    {
                        "taxName": "EPS",
                        "payeeType": "EMPLOYER",
                        "taxAmount": 666.4,
                        "monthToDate": 666.4,
                        "quaterToDate": 666.4,
                        "yearToDate": 666.4,
                        "authorityCode": "
                    },
                    {
                        "taxName": "Income Tax",
                        "payeeType": "EMPLOYEE",
                        "taxAmount": 0,
                        "monthToDate": 0,
                        "quaterToDate": 0,
                        "yearToDate": 0,
                        "authorityCode": "
                    }
                ],
                "preTaxDeductionYTD": 0,
                "postTaxDeductionYTD": 0,
                "preTaxDeduction": 0,
                "postTaxDeduction": 0
            },
            "directDepositConsent": false,
            "bank": ",
            "accountType": "currentAccount",
            "ifsc": "ABCD0123456",
            "upi": ",
            "accountNumber": "12345678910",
            "routingNumber": "26009140",
            "paymentMethod": "directDeposit",
            "createdAt": "2022-10-27T03:12:18.251Z",
            "processed": false,
            "processedAt": "0001-01-01T00:00:00Z",
            "updatedAt": "2022-10-27T09:40:14.199Z",
            "hasSalaryAdvance": false,
            "effectiveCompensations": null,
            "daysOffBefore": 0,
            "daysOffAfter": 0,
            "basicBefore": 380.95238095238096,
            "basicAfter": 380.95238095238096,
            "lossOfPay": 0,
            "overtimePay": 0,
            "basicPayForDay": 380.95,
            "unfilledFields": null,
            "ctc": 20000,
            "isPaymentDone": false,
            "paymentDoneAt": "0001-01-01T00:00:00Z",
            "paymentVendor": ",
            "paymentFailureReason": ",
            "terminationInitiated": false,
            "terminationDate": "0001-01-01T00:00:00Z"
        }
    ],
    "filter": {
        "currentPage": 1,
        "count": 2,
        "limit": 20,
        "totalPages": 1,
        "totalCount": 2
    },
    "employees": [
        "63525be29f4afb9427b6f509",
        "6310886bc741a206031c257c"
    ],
    "totalCost": 20961,
    "totalTaxes": 0,
    "totalEarnings": 20001,
    "totalDeductions": 960,
    "netPay": 19041,
    "totalEmployerTaxes": 960,
    "totalEmployerCost": 960,
    "totalEmployeeCost": 20001,
    "year": 2022,
    "month": 10,
    "hasDirectPayment": false,
    "directDepositConsent": false,
    "tenantWorkWeek": [
        {
            "day": "friday",
            "isWorkingDay": true,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        },
        {
            "day": "saturday",
            "isWorkingDay": false,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        },
        {
            "day": "sunday",
            "isWorkingDay": false,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        },
        {
            "day": "monday",
            "isWorkingDay": true,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        },
        {
            "day": "tuesday",
            "isWorkingDay": true,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        },
        {
            "day": "wednesday",
            "isWorkingDay": true,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        },
        {
            "day": "thursday",
            "isWorkingDay": true,
            "startTime": "09:00 AM",
            "endTime": "06:00 PM",
            "duration": 9
        }
    ],
    "holidays": null,
    "unpaidLeaves": null,
    "createdAt": "2022-10-27T03:12:18.221Z",
    "updatedAt": "2022-10-27T09:40:14.214Z",
    "stage": ",
    "processed": false,
    "processedAt": "0001-01-01T00:00:00Z",
    "isPaymentDone": false,
    "paymentDoneAt": "0001-01-01T00:00:00Z",
    "paymentVendor": ",
    "paymentFailureReason": ",
    "payDate": "10/31/2022",
    "totalDirectDepositNetPay": 19040,
    "totalCashNetPay": 0,
    "totalCheckNetPay": 0,
    "companyDaysBetweenPeriod": 21,
    "isNetPayNegative": false,
    "isValid": true,
    "jeStatus": "REVERTED",
    "jeId": "20226558",
    "jePostedOn": "2022-10-27T09:39:31.982Z",
    "jeEntryNumber": "JE-0000035",
    "jeDetails": [
        {
            "jeStatus": "POSTED",
            "jeId": "20219893",
            "jePostedOn": "2022-10-27T03:12:33.421Z",
            "jeEntryNumber": "JE-0000030",
            "isRevertJE": false
        },
        {
            "jeStatus": "REVERTED",
            "jeId": "20226452",
            "jePostedOn": "2022-10-27T09:23:34.931Z",
            "jeEntryNumber": "JE-0000033",
            "isRevertJE": true
        },
        {
            "jeStatus": "POSTED",
            "jeId": "20226552",
            "jePostedOn": "2022-10-27T09:38:59.254Z",
            "jeEntryNumber": "JE-0000034",
            "isRevertJE": false
        },
        {
            "jeStatus": "REVERTED",
            "jeId": "20226558",
            "jePostedOn": "2022-10-27T09:39:31.982Z",
            "jeEntryNumber": "JE-0000035",
            "isRevertJE": true
        }
    ],
    "employeeCount": 0,
    "revertedAt": "2022-10-27T09:39:31.669Z",
    "isPayrunReverted": true,
    "paymentCount": 0,
    "paymentFailureCount": 2,
    "location": 0,
    "shiftsInvolved": [],
    "otInvolved": [],
    "customFields": [
        {
            "fieldId": "6323d1eeaabe99169d328446",
            "fieldName": "C1",
            "fieldValue": [
                "c1"
            ]
        }
    ]
}
```
##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

#### PUT
##### Summary

Update Payrun

##### Description

Update Payrun for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrunId | path | Payrun Id | Yes | string |
| payrun | body | Payrun Request Body | Yes | [dto.PayrunRequest](#dtopayrunrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunResponse](#dtopayrunresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

#### DELETE
##### Summary

Delete Payrolls of a Payrun By Id

##### Description

Delete Payrolls of a Payrun by Id for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrunId | path | Payrun Id | Yes | string |
| bulkReq | body | Payroll Ids | Yes | [dto.BulkIdRequest](#dtobulkidrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunResponse](#dtopayrunresponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Fetch payruns for a year

#### GET
##### Summary

Get Payruns in a year

##### Description

Get payruns in a year for a Tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| year | path | Year | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PayrunsResponse](#dtopayrunsresponse) |



##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-run/payruns/year/2022?limit=20&currentPage=1&order=desc&field=_id
```

##### Curl

```java
curl --location --request GET 'https://bifrost-us.deskera.com/v1/people-pay-run/payruns/year/2022?limit=20&currentPage=1&order=desc&field=_id' \
--header 'Accept: application/json, text/plain, */*' \
--header 'Content-Type: application/json' \
--header 'x-access-token: sampletoken' \
```

##### Sample Request
```java

```

##### Sample Response
```java
{
    "payruns": [
        {
            "_id": ",
            "payrunType": 1,
            "paySchedule": {
                "id": "62611056bac41ace51e7dcb8",
                "name": "monthly"
            },
            "payPeriod": "monthly",
            "workWeek": [
                5,
                1,
                2,
                3,
                4
            ],
            "payDay": "lastWorkingDayMonth",
            "firstPayDate": "04/30/2022",
            "workPeriod": {
                "from": "04/01/2022",
                "to": "04/30/2022"
            },
            "isForAllUsers": false,
            "isForContractors": false,
            "employees": [
                "623c2dc0e3a652c5aee32876"
            ],
            "totalCost": 11988.42,
            "totalTaxes": 0,
            "totalEarnings": 11988.42,
            "totalDeductions": 0,
            "netPay": 11988.42,
            "totalEmployerTaxes": 0,
            "totalEmployerCost": 0,
            "totalEmployeeCost": 11988.42,
            "year": 2022,
            "month": 4,
            "hasDirectPayment": false,
            "directDepositConsent": false,
            "tenantWorkWeek": [
                {
                    "day": "friday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "saturday",
                    "isWorkingDay": false,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "sunday",
                    "isWorkingDay": false,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "monday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "tuesday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "wednesday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "thursday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                }
            ],
            "holidays": null,
            "unpaidLeaves": null,
            "createdAt": "2022-04-21T08:06:02.6Z",
            "updatedAt": "2022-04-21T08:07:50.962Z",
            "stage": ",
            "processed": true,
            "processedAt": "2022-04-20T19:07:55.252Z",
            "isPaymentDone": false,
            "paymentDoneAt": "0001-01-01T00:00:00Z",
            "paymentVendor": ",
            "paymentFailureReason": ",
            "payDate": "04/30/2022",
            "totalDirectDepositNetPay": 0,
            "totalCashNetPay": 11988.42,
            "totalCheckNetPay": 0,
            "companyDaysBetweenPeriod": 21,
            "isNetPayNegative": false,
            "isValid": true,
            "jeStatus": "POSTED",
            "jeId": "18506757",
            "jePostedOn": "2022-07-29T10:22:08.105Z",
            "jeEntryNumber": "JE-0000023",
            "jeDetails": [
                {
                    "jeStatus": "POSTED",
                    "jeId": "18506757",
                    "jePostedOn": "2022-07-29T10:22:08.105Z",
                    "jeEntryNumber": "JE-0000023",
                    "isRevertJE": false
                }
            ],
            "employeeCount": 0,
            "revertedAt": "0001-01-01T00:00:00Z",
            "isPayrunReverted": false,
            "paymentCount": 0,
            "paymentFailureCount": 0,
            "location": 0,
            "shiftsInvolved": null,
            "otInvolved": null,
            "customFields": null
        },
        {
            "_id": ",
            "payrunType": 1,
            "paySchedule": {
                "id": "62611056bac41ace51e7dcb8",
                "name": "monthly"
            },
            "payPeriod": "monthly",
            "workWeek": [
                5,
                1,
                2,
                3,
                4
            ],
            "payDay": "lastWorkingDayMonth",
            "firstPayDate": "07/31/2022",
            "workPeriod": {
                "from": "07/01/2022",
                "to": "07/31/2022"
            },
            "isForAllUsers": true,
            "isForContractors": false,
            "totalCost": 51440,
            "totalTaxes": 0,
            "totalEarnings": 50000,
            "totalDeductions": 1615,
            "netPay": 48385,
            "totalEmployerTaxes": 1440,
            "totalEmployerCost": 1440,
            "totalEmployeeCost": 50000,
            "year": 2022,
            "month": 7,
            "hasDirectPayment": false,
            "directDepositConsent": false,
            "tenantWorkWeek": [
                {
                    "day": "friday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "saturday",
                    "isWorkingDay": false,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "sunday",
                    "isWorkingDay": false,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "monday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "tuesday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "wednesday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "thursday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                }
            ],
            "holidays": null,
            "unpaidLeaves": null,
            "createdAt": "2022-07-29T10:55:58.908Z",
            "updatedAt": "2022-09-02T15:39:18.717Z",
            "stage": ",
            "processed": true,
            "processedAt": "2022-09-02T15:39:24.067Z",
            "isPaymentDone": false,
            "paymentDoneAt": "0001-01-01T00:00:00Z",
            "paymentVendor": ",
            "paymentFailureReason": ",
            "payDate": "07/31/2022",
            "totalDirectDepositNetPay": 19040,
            "totalCashNetPay": 19345,
            "totalCheckNetPay": 0,
            "companyDaysBetweenPeriod": 21,
            "isNetPayNegative": false,
            "isValid": true,
            "jeStatus": "POSTED",
            "jeId": "19145285",
            "jePostedOn": "2022-09-02T15:39:24.957Z",
            "jeEntryNumber": "JE-0000026",
            "jeDetails": [
                {
                    "jeStatus": "POSTED",
                    "jeId": "19145285",
                    "jePostedOn": "2022-09-02T15:39:24.957Z",
                    "jeEntryNumber": "JE-0000026",
                    "isRevertJE": false
                }
            ],
            "employeeCount": 0,
            "revertedAt": "0001-01-01T00:00:00Z",
            "isPayrunReverted": false,
            "paymentCount": 0,
            "paymentFailureCount": 0,
            "location": 0,
            "shiftsInvolved": null,
            "otInvolved": null,
            "customFields": null
        },
        {
            "_id": ",
            "payrunType": 1,
            "paySchedule": {
                "id": "62611056bac41ace51e7dcb8",
                "name": "monthly"
            },
            "payPeriod": "monthly",
            "workWeek": [
                5,
                1,
                2,
                3,
                4
            ],
            "payDay": "lastWorkingDayMonth",
            "firstPayDate": "07/31/2022",
            "workPeriod": {
                "from": "07/01/2022",
                "to": "07/31/2022"
            },
            "isForAllUsers": false,
            "isForContractors": false,
            "employees": [
                "62b95a63076208827c8f4eaa"
            ],
            "totalCost": 223580.32,
            "totalTaxes": 0,
            "totalEarnings": 213340,
            "totalDeductions": 10440.32,
            "netPay": 202899.68,
            "totalEmployerTaxes": 10240.32,
            "totalEmployerCost": 10240.32,
            "totalEmployeeCost": 213340,
            "year": 2022,
            "month": 7,
            "hasDirectPayment": false,
            "directDepositConsent": false,
            "tenantWorkWeek": [
                {
                    "day": "monday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "tuesday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "wednesday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "thursday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "friday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "saturday",
                    "isWorkingDay": false,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "sunday",
                    "isWorkingDay": false,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                }
            ],
            "holidays": null,
            "unpaidLeaves": null,
            "createdAt": "2022-07-29T11:33:43.706Z",
            "updatedAt": "2022-09-02T15:39:08.881Z",
            "stage": ",
            "processed": true,
            "processedAt": "2022-09-02T15:39:12.086Z",
            "isPaymentDone": false,
            "paymentDoneAt": "0001-01-01T00:00:00Z",
            "paymentVendor": ",
            "paymentFailureReason": ",
            "payDate": "07/31/2022",
            "totalDirectDepositNetPay": 0,
            "totalCashNetPay": 202899.68,
            "totalCheckNetPay": 0,
            "companyDaysBetweenPeriod": 21,
            "isNetPayNegative": false,
            "isValid": true,
            "jeStatus": "POSTED",
            "jeId": "19145275",
            "jePostedOn": "2022-09-02T15:39:12.91Z",
            "jeEntryNumber": "JE-0000025",
            "jeDetails": [
                {
                    "jeStatus": "POSTED",
                    "jeId": "19145275",
                    "jePostedOn": "2022-09-02T15:39:12.91Z",
                    "jeEntryNumber": "JE-0000025",
                    "isRevertJE": false
                }
            ],
            "employeeCount": 0,
            "revertedAt": "0001-01-01T00:00:00Z",
            "isPayrunReverted": false,
            "paymentCount": 0,
            "paymentFailureCount": 0,
            "location": 0,
            "shiftsInvolved": null,
            "otInvolved": null,
            "customFields": null
        },
        {
            "_id": ",
            "payrunType": 1,
            "paySchedule": {
                "id": "62611056bac41ace51e7dcb8",
                "name": "monthly"
            },
            "payPeriod": "monthly",
            "workWeek": [
                5,
                1,
                2,
                3,
                4
            ],
            "payDay": "lastWorkingDayMonth",
            "firstPayDate": "04/30/2022",
            "workPeriod": {
                "from": "04/01/2022",
                "to": "04/30/2022"
            },
            "isForAllUsers": false,
            "isForContractors": false,
            "employees": [
                "62b13c668024d6e694f7d25a",
                "62b08b06196cdc080a2167cd"
            ],
            "totalCost": 20480,
            "totalTaxes": 0,
            "totalEarnings": 20000,
            "totalDeductions": 655,
            "netPay": 19345,
            "totalEmployerTaxes": 480,
            "totalEmployerCost": 480,
            "totalEmployeeCost": 20000,
            "year": 2022,
            "month": 4,
            "hasDirectPayment": false,
            "directDepositConsent": false,
            "tenantWorkWeek": [
                {
                    "day": "friday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "saturday",
                    "isWorkingDay": false,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "sunday",
                    "isWorkingDay": false,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "monday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "tuesday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "wednesday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "thursday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                }
            ],
            "holidays": null,
            "unpaidLeaves": null,
            "createdAt": "2022-08-10T10:52:49.718Z",
            "updatedAt": "2022-08-10T10:52:57.236Z",
            "stage": ",
            "processed": true,
            "processedAt": "2022-08-10T10:53:04.703Z",
            "isPaymentDone": false,
            "paymentDoneAt": "0001-01-01T00:00:00Z",
            "paymentVendor": ",
            "paymentFailureReason": ",
            "payDate": "04/30/2022",
            "totalDirectDepositNetPay": 0,
            "totalCashNetPay": 9345,
            "totalCheckNetPay": 0,
            "companyDaysBetweenPeriod": 21,
            "isNetPayNegative": false,
            "isValid": true,
            "jeStatus": "POSTED",
            "jeId": "18763839",
            "jePostedOn": "2022-08-10T10:53:05.838Z",
            "jeEntryNumber": "JE-0000024",
            "jeDetails": [
                {
                    "jeStatus": "POSTED",
                    "jeId": "18763839",
                    "jePostedOn": "2022-08-10T10:53:05.838Z",
                    "jeEntryNumber": "JE-0000024",
                    "isRevertJE": false
                }
            ],
            "employeeCount": 0,
            "revertedAt": "0001-01-01T00:00:00Z",
            "isPayrunReverted": false,
            "paymentCount": 0,
            "paymentFailureCount": 0,
            "location": 0,
            "shiftsInvolved": null,
            "otInvolved": null,
            "customFields": null
        },
        {
            "_id": ",
            "payrunType": 1,
            "paySchedule": {
                "id": "62611056bac41ace51e7dcb8",
                "name": "monthly"
            },
            "payPeriod": "monthly",
            "workWeek": [
                5,
                1,
                2,
                3,
                4
            ],
            "payDay": "lastWorkingDayMonth",
            "firstPayDate": "04/30/2022",
            "workPeriod": {
                "from": "04/01/2022",
                "to": "04/30/2022"
            },
            "isForAllUsers": false,
            "isForContractors": false,
            "employees": [
                "6310886cc741a206031c2583"
            ],
            "totalCost": 10000,
            "totalTaxes": 0,
            "totalEarnings": 10000,
            "totalDeductions": 0,
            "netPay": 10000,
            "totalEmployerTaxes": 0,
            "totalEmployerCost": 0,
            "totalEmployeeCost": 10000,
            "year": 2022,
            "month": 4,
            "hasDirectPayment": false,
            "directDepositConsent": false,
            "tenantWorkWeek": [
                {
                    "day": "friday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "saturday",
                    "isWorkingDay": false,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "sunday",
                    "isWorkingDay": false,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "monday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "tuesday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "wednesday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "thursday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                }
            ],
            "holidays": null,
            "unpaidLeaves": null,
            "createdAt": "2022-09-16T01:32:21.208Z",
            "updatedAt": "2022-10-27T10:23:50.711Z",
            "stage": ",
            "processed": true,
            "processedAt": "2022-10-27T10:23:54.368Z",
            "isPaymentDone": false,
            "paymentDoneAt": "0001-01-01T00:00:00Z",
            "paymentVendor": ",
            "paymentFailureReason": ",
            "payDate": "04/30/2022",
            "totalDirectDepositNetPay": 0,
            "totalCashNetPay": 0,
            "totalCheckNetPay": 0,
            "companyDaysBetweenPeriod": 21,
            "isNetPayNegative": false,
            "isValid": true,
            "jeStatus": "POSTED",
            "jeId": "20226933",
            "jePostedOn": "2022-10-27T10:23:55.084Z",
            "jeEntryNumber": "JE-0000040",
            "jeDetails": [
                {
                    "jeStatus": "POSTED",
                    "jeId": "19364560",
                    "jePostedOn": "2022-09-16T01:32:31.751Z",
                    "jeEntryNumber": "JE-0000027",
                    "isRevertJE": false
                },
                {
                    "jeStatus": "REVERTED",
                    "jeId": "20226564",
                    "jePostedOn": "2022-10-27T09:39:41.896Z",
                    "jeEntryNumber": "JE-0000038",
                    "isRevertJE": true
                },
                {
                    "jeStatus": "POSTED",
                    "jeId": "20226933",
                    "jePostedOn": "2022-10-27T10:23:55.084Z",
                    "jeEntryNumber": "JE-0000040",
                    "isRevertJE": false
                }
            ],
            "employeeCount": 0,
            "revertedAt": "2022-10-27T09:39:41.59Z",
            "isPayrunReverted": false,
            "paymentCount": 0,
            "paymentFailureCount": 0,
            "location": 58128,
            "shiftsInvolved": [],
            "otInvolved": [],
            "customFields": [
                {
                    "fieldId": "6323d1eeaabe99169d328446",
                    "fieldName": "C1",
                    "fieldValue": [
                        "mycustom"
                    ]
                }
            ]
        },
        {
            "_id": ",
            "payrunType": 1,
            "paySchedule": {
                "id": "62611056bac41ace51e7dcb8",
                "name": "monthly"
            },
            "payPeriod": "monthly",
            "workWeek": [
                5,
                1,
                2,
                3,
                4
            ],
            "payDay": "lastWorkingDayMonth",
            "firstPayDate": "04/30/2022",
            "workPeriod": {
                "from": "04/01/2022",
                "to": "04/30/2022"
            },
            "isForAllUsers": false,
            "isForContractors": false,
            "employees": [
                "62b13c678024d6e694f7d261",
                "6310886bc741a206031c257c",
                "6310886cc741a206031c2583"
            ],
            "totalCost": 35960,
            "totalTaxes": 0,
            "totalEarnings": 35000,
            "totalDeductions": 960,
            "netPay": 34040,
            "totalEmployerTaxes": 960,
            "totalEmployerCost": 960,
            "totalEmployeeCost": 35000,
            "year": 2022,
            "month": 4,
            "hasDirectPayment": false,
            "directDepositConsent": false,
            "tenantWorkWeek": [
                {
                    "day": "monday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "tuesday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "wednesday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "thursday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "friday",
                    "isWorkingDay": true,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "saturday",
                    "isWorkingDay": false,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                },
                {
                    "day": "sunday",
                    "isWorkingDay": false,
                    "startTime": "09:00 AM",
                    "endTime": "06:00 PM",
                    "duration": 9
                }
            ],
            "holidays": null,
            "unpaidLeaves": null,
            "createdAt": "2022-09-30T08:07:16.047Z",
            "updatedAt": "2022-10-27T10:23:38.508Z",
            "stage": ",
            "processed": true,
            "processedAt": "2022-10-27T10:23:41.419Z",
            "isPaymentDone": false,
            "paymentDoneAt": "0001-01-01T00:00:00Z",
            "paymentVendor": ",
            "paymentFailureReason": ",
            "payDate": "04/30/2022",
            "totalDirectDepositNetPay": 19040,
            "totalCashNetPay": 5000,
            "totalCheckNetPay": 0,
            "companyDaysBetweenPeriod": 21,
            "isNetPayNegative": false,
            "isValid": true,
            "jeStatus": "POSTED",
            "jeId": "20226931",
            "jePostedOn": "2022-10-27T10:23:42.193Z",
            "jeEntryNumber": "JE-0000039",
            "jeDetails": [
                {
                    "jeStatus": "POSTED",
                    "jeId": "19664661",
                    "jePostedOn": "2022-09-30T08:07:38.47Z",
                    "jeEntryNumber": "JE-0000029",
                    "isRevertJE": false
                },
                {
                    "jeStatus": "REVERTED",
                    "jeId": "20226560",
                    "jePostedOn": "2022-10-27T09:39:35.196Z",
                    "jeEntryNumber": "JE-0000036",
                    "isRevertJE": true
                },
                {
                    "jeStatus": "POSTED",
                    "jeId": "20226931",
                    "jePostedOn": "2022-10-27T10:23:42.193Z",
                    "jeEntryNumber": "JE-0000039",
                    "isRevertJE": false
                }
            ],
            "employeeCount": 0,
            "revertedAt": "2022-10-27T09:39:34.867Z",
            "isPayrunReverted": false,
            "paymentCount": 0,
            "paymentFailureCount": 0,
            "location": 0,
            "shiftsInvolved": [],
            "otInvolved": [],
            "customFields": [
                {
                    "fieldId": "6323d1eeaabe99169d328446",
                    "fieldName": "C1",
                    "fieldValue": [
                        "c1"
                    ]
                }
            ]
        }
    ]
}
```
##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Books-Integration sync Journal entries

#### POST
##### Summary

Sync Payrun JE To Books

##### Description

Sync Payrun JE To Books

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.SyncPayrunJEsRequest](#dtosyncpayrunjesrequest) |



##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-run/payruns/sync-je
```

##### Curl

```java
curl 'https://bifrost-us.deskera.com/v1/people-pay-run/payruns/sync-je' \
--header 'Accept: application/json, text/plain, */*' \
--header 'Content-Type: application/json' \
--header 'x-access-token: sampletoken' \
  --data-raw '{"payrun":[{"jeDate":"10/28/2022","payrunId":"635a5ea36aed621f3eb9eaab"}]}' \
  --compressed
```

##### Sample Request
```java
{"payrun":[{"jeDate":"10/28/2022","payrunId":"635a5ea36aed621f3eb9eaab"}]}
```

##### Sample Response
```java
"For given payrun's, JE Posting Successful!"
```
##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |


### Books-Integration revert Journal entries

#### POST
##### Summary

Revert Payrun JE From Books

##### Description

Revert Payrun JE From Books

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.RevertPayrunJEsRequest](#dtorevertpayrunjesrequest) |



##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-run/payruns/revert-je
```

##### Curl

```java
curl 'https://bifrost-us.deskera.com/v1/people-pay-run/payruns/revert-je' \
--header 'Accept: application/json, text/plain, */*' \
--header 'Content-Type: application/json' \
--header 'x-access-token: sampletoken' \
  --data-raw '{"revertPayrun":[{"jeId":20237575,"jeRevertDate":"10/28/2022","payrunId":"635a5ea36aed621f3eb9eaab"}]}' \
  --compressed
```

##### Sample Request
```java
{"revertPayrun":[{"jeId":20237575,"jeRevertDate":"10/28/2022","payrunId":"635a5ea36aed621f3eb9eaab"}]}
```

##### Sample Response
```java
"For given payrun's, JE Revert Successful!"
```

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Fetch Paystub of an employee

#### GET
##### Summary

Get Paystubs of Employee

##### Description

Get all Paystubs of Employee of a tenant

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| employeeId | path | EmployeeId (UserId) | Yes | string |
| sortOrder | query | Sort Order | No | string |
| sortField | query | Sort Field | No | string |
| limit | query | Limit per Page | No | integer |
| currentPage | query | Current Page number | No | integer |
| searchString | query | Search String | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.PaystubsResponse](#dtopaystubsresponse) |

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-run/paystubs/employee/60b734520a2aaa7131f2c588?limit=5&currentPage=1&sortField=createdAt&sortOrder=desc
```

##### Curl

```java
curl -X GET "https://bifrost-us.deskera.com/v1/people-pay-run/paystubs/employee/60b734520a2aaa7131f2c588?limit=5&currentPage=1&sortField=createdAt&sortOrder=desc" -H "accept: application/json" -H "x-access-token: sampletoken"
```

##### Sample Request
```java

```

##### Sample Response
```java
{
  "paystubs": [
    {
      "_id": "633299df318100e72aaa826a",
      "payrollId": "60b7558e7657d83a69feed40",
      "employeeId": "60b734520a2aaa7131f2c588",
      "iamUserId": 55189,
      "firstName": "Ganesh",
      "lastName": "Karale",
      "daysOff": 20,
      "days": 22,
      "compensationCurrency": ",
      "compensationPeriod": "30",
      "basicPay": 0,
      "netPay": 951.482,
      "basicPayrun": 12500,
      "netPayrun": 1146.364,
      "deductions": 494.882,
      "earnings": 300,
      "netTaxes": 0,
      "payPeriod": "monthly",
      "workPeriod": {
        "from": "09/01/2022",
        "to": "09/30/2022"
      },
      "components": [
        {
          "componentId": "60b7558e7f4bfc87cd086ab0",
          "employeeId": ",
          "name": "DENTAL INSURANCE",
          "amount": 100,
          "type": "DEDUCTION",
          "modified": false,
          "YTD": 900,
          "status": ",
          "isVariable": false,
          "componentConfig": {
            "configureAmountBasis": ",
            "basisComponentId": ",
            "componentPercent": 0,
            "amountPerDay": 0,
            "deductionType": "
          },
          "frequency": {
            "period": "everyPayrun",
            "occurrence": null,
            "when": "
          },
          "isHidden": false,
          "subType": ",
          "includeInCTC": false,
          "includeInOTCalc": false,
          "isUnpaidIncluded": false,
          "defaultAmount": 100,
          "formulaConfig": null,
          "formula": "
        },
        {
          "componentId": "60c9f0fdff91a82207a7bd6e",
          "employeeId": ",
          "name": "Variable 1",
          "amount": 114.636,
          "type": "DEDUCTION",
          "modified": false,
          "YTD": 3027.855,
          "status": ",
          "isVariable": true,
          "componentConfig": {
            "configureAmountBasis": "percentageOfBasicSalary",
            "basisComponentId": ",
            "componentPercent": 10,
            "amountPerDay": 0,
            "deductionType": "
          },
          "frequency": {
            "period": "everyPayrun",
            "occurrence": null,
            "when": "
          },
          "isHidden": false,
          "subType": ",
          "includeInCTC": false,
          "includeInOTCalc": false,
          "isUnpaidIncluded": false,
          "defaultAmount": 100,
          "formulaConfig": null,
          "formula": "
        },
        {
          "componentId": "60b7558e7f4bfc87cd086aa7",
          "employeeId": ",
          "name": "Bonus",
          "amount": 200,
          "type": "EARNING",
          "modified": false,
          "YTD": 1800,
          "status": ",
          "isVariable": false,
          "componentConfig": {
            "configureAmountBasis": ",
            "basisComponentId": ",
            "componentPercent": 0,
            "amountPerDay": 0,
            "deductionType": "
          },
          "frequency": {
            "period": "everyPayrun",
            "occurrence": null,
            "when": "
          },
          "isHidden": false,
          "subType": ",
          "includeInCTC": false,
          "includeInOTCalc": false,
          "isUnpaidIncluded": false,
          "defaultAmount": 200,
          "formulaConfig": null,
          "formula": "
        },
        {
          "componentId": "60b7558e7f4bfc87cd086aa9",
          "employeeId": ",
          "name": "Tips",
          "amount": 100,
          "type": "EARNING",
          "modified": false,
          "YTD": 900,
          "status": ",
          "isVariable": false,
          "componentConfig": {
            "configureAmountBasis": ",
            "basisComponentId": ",
            "componentPercent": 0,
            "amountPerDay": 0,
            "deductionType": "
          },
          "frequency": {
            "period": "everyPayrun",
            "occurrence": null,
            "when": "
          },
          "isHidden": false,
          "subType": ",
          "includeInCTC": false,
          "includeInOTCalc": false,
          "isUnpaidIncluded": false,
          "defaultAmount": 100,
          "formulaConfig": null,
          "formula": "
        },
        {
          "componentId": "60b7558e7f4bfc87cd086ab3",
          "employeeId": ",
          "name": "HSA Family",
          "amount": 100,
          "type": "DEDUCTION",
          "modified": false,
          "YTD": 900,
          "status": ",
          "isVariable": false,
          "componentConfig": {
            "configureAmountBasis": ",
            "basisComponentId": ",
            "componentPercent": 0,
            "amountPerDay": 0,
            "deductionType": "
          },
          "frequency": {
            "period": "everyPayrun",
            "occurrence": null,
            "when": "
          },
          "isHidden": false,
          "subType": ",
          "includeInCTC": false,
          "includeInOTCalc": false,
          "isUnpaidIncluded": false,
          "defaultAmount": 100,
          "formulaConfig": null,
          "formula": "
        }
      ],
      "benefits": [
        {
          "id": "613215d012b39afd98aa519b",
          "name": "Mediclaim",
          "employerContribution": 50,
          "employeeContribution": 100,
          "employerYTD": 200,
          "employeeYTD": 400,
          "compliance": {
            "deductionType": "pretaxdeduction",
            "countryCode": "US",
            "CPF": "
          }
        },
        {
          "id": "62a32cff772d5f6a6954c48f",
          "name": "Travel Allowance",
          "employerContribution": 80.245,
          "employeeContribution": 80.245,
          "employerYTD": 2049.498,
          "employeeYTD": 2049.498,
          "compliance": {
            "deductionType": "pretaxdeduction",
            "countryCode": "US",
            "CPF": "
          }
        }
      ],
      "compliance": null,
      "createdAt": "2022-09-27T06:36:15.467Z",
      "filepath": "payslips/70419/58592/1664260577436_Ganesh-Karale.pdf",
      "overtime": [
        {
          "value": 2,
          "rate": 1,
          "amount": 10
        }
      ],
      "countryCode": "US",
      "compensation": 12500,
      "basicPayrunYTD": 55000,
      "netPayrunYTD": 34278.545,
      "netPayYTD": 20388.463,
      "payDate": "2021-09-30T00:00:00Z",
      "isPaymentDone": false,
      "paymentDoneAt": "0001-01-01T00:00:00Z",
      "paymentVendor": ",
      "paymentFailureReason": ",
      "lossOfPay": 11363.636,
      "overtimePay": 10
    }
  ],
  "filterResponse": {
    "currentPage": 1,
    "count": 5,
    "limit": 5,
    "totalPages": 3,
    "totalCount": 11
  }
}
```
##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Fetch liability reports

#### GET
##### Summary

Get liabilities between dates

##### Description

Get all liabilities of a tenant between dates

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| from | query | From | Yes | string |
| to | query | To | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.LiabilityResponse](#dtoliabilityresponse) |

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-run/paystubs/report/liability?from=2022-10-01&to=2022-10-31
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people-pay-run/paystubs/report/liability?from=2022-10-01&to=2022-10-31' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'```

##### Sample Request
```java
```

##### Sample Response
```java
{
  "liabilities": [
    {
      "name": "CDAC",
      "displayName": "CDAC",
      "employeesContribution": 0.5,
      "employerContribution": 0,
      "total": 0.5
    },
    {
      "name": "CPF",
      "displayName": "CPF",
      "employeesContribution": 800,
      "employerContribution": 2210,
      "total": 3010
    },
    {
      "name": "ECF",
      "displayName": "ECF",
      "employeesContribution": 29,
      "employerContribution": 0,
      "total": 29
    },
    {
      "name": "FWL",
      "displayName": "FWL",
      "employeesContribution": 0,
      "employerContribution": 0,
      "total": 0
    },
    {
      "name": "MBMF",
      "displayName": "MBMF",
      "employeesContribution": 0,
      "employerContribution": 0,
      "total": 0
    },
    {
      "name": "SDL",
      "displayName": "SDL",
      "employeesContribution": 0,
      "employerContribution": 36.25,
      "total": 36.25
    },
    {
      "name": "SINDA",
      "displayName": "SINDA",
      "employeesContribution": 18,
      "employerContribution": 0,
      "total": 18
    }
  ]
}
```
##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Fetch statutory-report

#### POST
##### Summary

Get statutory report data by date and employee id

##### Description

Get statutory report data

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payroll | body | Report filter Dto | Yes | [dto.ReportsFilter](#dtoreportsfilter) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.ReportData](#dtoreportdata) |

##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-run/paystubs/statutory-report```

##### Curl

```java
curl -X 'POST' \
  'https://bifrost-us.deskera.com/v1/people-pay-run/paystubs/statutory-report' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken' \
  -H 'Content-Type: application/json' \
  -d '{""from"":""2022-09-01"",""to"":""2022-09-30"",""form"":""EPF"",""employeeId"":[],""filterOptions"":{""currentPage"":1,""limit"":20}}'```

##### Sample Request
```java
{
  ""from"": ""2022-09-01"",
  ""to"": ""2022-09-30"",
  ""form"": ""EPF"",
  ""employeeId"": [
    
  ],
  ""filterOptions"": {
    ""currentPage"": 1,
    ""limit"": 20
  }
}```

##### Sample Response
```java
{
  ""ptReport"": null,
  ""esiReport"": null,
  ""epfReport"": [
    {
      ""employeID"": ""00001"",
      ""uanNumber"": """",
      ""grossWages"": 0,
      ""epfWages"": 0,
      ""epsWages"": 0,
      ""edliWages"": 0,
      ""employeeName"": ""rohan_us_temp@temp.deskera.xyz "",
      ""epfContributionRemitted"": 0,
      ""epsContributionRemitted"": 0,
      ""epfEpsDiffRemitted"": 0,
      ""ncpDays"": 0,
      ""refundOfAdvance"": 0,
      ""iamUserId"": ""58372"",
      ""pf"": false
    }
  ],
  ""filterResponse"": {
    ""currentPage"": 1,
    ""count"": 1,
    ""limit"": 20,
    ""totalPages"": 1,
    ""totalCount"": 1
  }
}
```
##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Fetch GIRO files for SG/MY compliances

#### GET
##### Summary

Get GIRO

##### Description

Get GIRO file

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| sortOrder | query | Sort Order | No | string |
| sortField | query | Sort Field | No | string |
| limit | query | Limit per Page | No | integer |
| currentPage | query | Current Page number | No | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [dto.GIROFileResponse](#dtogirofileresponse) |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-run/payruns/giro/file?limit=20&currentPage=1&from=10%2F01%2F2022&to=10%2F31%2F2022
```

##### Curl

```java
curl -X 'GET' \
  'https://bifrost-us.deskera.com/v1/people-pay-run/payruns/giro/file?limit=20&currentPage=1&from=10%2F01%2F2022&to=10%2F31%2F2022
' \
  -H 'accept: application/json' \
  -H 'x-access-token: sampletoken'```
```

##### Sample Request
```java
```

##### Sample Response
```java
{
    "payrunForGIROFile": [
        {
            "payrunId": "635267349b69107e7574c217",
            "workPeriod": {
                "from": "10/01/2022",
                "to": "10/31/2022"
            },
            "paySchedule": {
                "id": "635133a46dba490b5b2c770d",
                "name": "octyes"
            },
            "firstPayDate": "10/31/2022",
            "netPay": 6729.0952380952385,
            "totalEmployee": 1,
            "generatedGIROCount": 0
        }
    ],
    "filterResponse": {
        "currentPage": 1,
        "count": 1,
        "limit": 20,
        "totalPages": 1,
        "totalCount": 1
    }
}
```
##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |


### Cashfree process-payment by payrun id

#### PATCH
##### Summary

process Payment by Payrun Id

##### Description

Payment by Payrun Id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| payrunId | path | Id | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | string |


##### Request URL
```java
https://bifrost-us.deskera.com/v1/people-pay-run/payruns/year/2022?limit=20&currentPage=1&order=desc&field=_id
```

##### Curl

```java
curl -X GET "https://bifrost-us.deskera.com/v1/people-pay-run/payruns?limit=20&currentPage=1&order=desc&field=_id" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Sample Request
```java
{key:value}
```

##### Sample Response
```java
{key:value}
```
##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Models

#### dto.Benefit

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| compliance | [dto.Compliance](#dtocompliance) |  | No |
| employeeContribution | number |  | No |
| employeeYTD | number |  | No |
| employerContribution | number |  | No |
| employerYTD | number |  | No |
| id | string |  | No |
| name | string |  | No |

#### dto.BenefitMeta

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| annualMaxContribution | number |  | No |
| benefitId | string |  | No |
| compliance | [dto.Compliance](#dtocompliance) |  | No |
| countryCode | string |  | No |
| employeeDeductionAmount | number |  | No |
| employeeDeductionType | string |  | No |
| employerDeductionAmount | number |  | No |
| employerDeductionType | string |  | No |
| name | string |  | No |

#### dto.BulkDeleteResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| info | string |  | No |

#### dto.BulkIdRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ids | [ string ] |  | No |

#### dto.BulkPayrunRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| payrunId | string |  | No |

#### dto.BulkPaystubsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| paystubsResponse | [ [dto.PaystubsResponse](#dtopaystubsresponse) ] |  | No |

#### dto.CheckPrintDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountNumber | string |  | No |
| bankName | string |  | No |
| checkNumber | string |  | No |
| companyAddress | string |  | No |
| companyDateFormat | string |  | No |
| companyName | string |  | No |
| currency | string |  | No |
| currencySymbol | string |  | No |
| employeeName | string |  | No |
| memo | string |  | No |
| netPay | number |  | No |
| netPayInWords | string |  | No |
| payDate | string |  | No |
| routingNumber | string |  | No |
| workPeriod | [dto.WorkPeriod](#dtoworkperiod) |  | No |
| zipcode | string |  | No |

#### dto.CheckPrintRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeeIds | [ string ] |  | No |
| payrunId | string |  | No |

#### dto.CommissionRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| commissionDate | string |  | No |
| datasourceAmount | number |  | No |
| datasourceId | string |  | No |
| datasourceStatus | string |  | No |
| datasourceType | string |  | No |
| iamUserId | integer |  | No |
| type | string |  | No |
| userId | string |  | No |
| value | number |  | No |

#### dto.CommissionResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| _id | string |  | No |
| commissionAmount | number |  | No |
| commissionDate | string |  | No |
| datasourceAmount | number |  | No |
| datasourceId | string |  | No |
| datasourceStatus | string |  | No |
| datasourceType | string |  | No |
| iamUserId | integer |  | No |
| tenantId | integer |  | No |
| type | string |  | No |
| userId | string |  | No |
| value | number |  | No |

#### dto.Compliance

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| CPF | string |  | No |
| countryCode | string |  | No |
| deductionType | string |  | No |

#### dto.Component

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| YTD | number |  | No |
| amount | number |  | No |
| componentConfig | [dto.ComponentConfig](#dtocomponentconfig) |  | No |
| componentId | string |  | No |
| defaultAmount | number |  | No |
| employeeId | string |  | No |
| frequency | [dto.Frequency](#dtofrequency) |  | No |
| includeInCTC | boolean |  | No |
| includeInOTCalc | boolean |  | No |
| isHidden | boolean |  | No |
| isUnpaidIncluded | boolean |  | No |
| isVariable | boolean |  | No |
| modified | boolean |  | No |
| name | string |  | No |
| status | string |  | No |
| subType | string |  | No |
| type | string |  | No |

#### dto.ComponentConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amountPerDay | number |  | No |
| basisComponentId | string |  | No |
| componentPercent | number |  | No |
| configureAmountBasis | string |  | No |
| deductionType | string |  | No |

#### dto.CurrentYTD

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| YTD | number |  | No |
| current | number |  | No |

#### dto.EPFReport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| edliWages | string |  | No |
| employeID | string |  | No |
| employeeName | string |  | No |
| epfContributionRemitted | number |  | No |
| epfEpsDiffRemitted | string |  | No |
| epfWages | number |  | No |
| epsContributionRemitted | number |  | No |
| epsWages | number |  | No |
| grossWages | string |  | No |
| iamUserId | string |  | No |
| ncpDays | string |  | No |
| refundOfAdvance | string |  | No |
| uanNumber | number |  | No |

#### dto.EffectiveCompensation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| basicCompensation | number |  | No |
| compensation | number |  | No |
| effectiveDate | string |  | No |
| isVisible | boolean |  | No |
| period | string |  | No |

#### dto.EmployeeDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SSN | string |  | No |
| address | [ string ] |  | No |
| exemptions | boolean |  | No |
| name | string |  | No |
| taxebleMaritalStatus | string |  | No |

#### dto.EncryptedPayrollsCount

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| payrollsCount | string |  | No |

#### dto.Field

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| key | string |  | No |
| value | string |  | No |

#### dto.FieldsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| countryCode | string |  | No |
| fields | [ [dto.Field](#dtofield) ] |  | No |
| id | string |  | No |

#### dto.FilterOptions

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| currentPage | integer |  | No |
| limit | integer |  | No |
| orderBy | [dto.OrderBy](#dtoorderby) |  | No |
| searchField | string |  | No |
| searchString | string |  | No |

#### dto.FilterResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| count | integer |  | No |
| currentPage | integer |  | No |
| limit | integer |  | No |
| totalCount | integer |  | No |
| totalPages | integer |  | No |

#### dto.FinancialYear

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| endDate | string |  | No |
| startDate | string |  | No |

#### dto.Frequency

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| occurrence | [ string ] |  | No |
| period | string |  | No |
| when | string |  | No |

#### dto.GIROFileResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filterResponse | [dto.FilterResponse](#dtofilterresponse) |  | No |
| payrunForGIROFile | [ [dto.PayrunForGIROFile](#dtopayrunforgirofile) ] |  | No |

#### dto.GetCommissionRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| datasourceStatus | string |  | No |
| fromDate | string |  | No |
| toDate | string |  | No |
| userId | string |  | No |

#### dto.Holiday

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| dayName | string |  | No |
| holidayDate | string |  | No |
| holidayType | string |  | No |
| id | string |  | No |

#### dto.JEDetails

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| isRevertJE | boolean |  | No |
| jeEntryNumber | string |  | No |
| jeId | string |  | No |
| jePostedOn | string |  | No |
| jeStatus | string |  | No |

#### dto.LeaveDates

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amPmId | integer |  | No |
| isHalfDate | boolean |  | No |
| leaveDate | string |  | No |

#### dto.LeaveInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| LeaveDates | [ [dto.LeaveDates](#dtoleavedates) ] |  | No |
| duration | number |  | No |
| fromDate | string |  | No |
| fromDateHalf | boolean |  | No |
| leaveTypeId | string |  | No |
| toDate | string |  | No |
| toDateHalf | boolean |  | No |

#### dto.LiabilityResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| liabilities | [  ] |  | No |

#### dto.OrderBy

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| field | string |  | No |
| order | string |  | No |

#### dto.Overtime

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number |  | No |
| rate | number |  | No |
| value | number |  | No |

#### dto.PTReport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeID | string |  | No |
| employeeName | string |  | No |
| iamUserId | string |  | No |
| ptTaxAmount | number |  | No |
| ptWagesAmount | number |  | No |

#### dto.PaySchedule

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| name | string |  | No |

#### dto.PaySlipResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| benefits | [ [dto.Benefit](#dtobenefit) ] |  | No |
| benefitsMeta | [ [dto.BenefitMeta](#dtobenefitmeta) ] |  | No |
| deductions | [ [dto.PayslipComponent](#dtopayslipcomponent) ] |  | No |
| earnings | [ [dto.PayslipComponent](#dtopayslipcomponent) ] |  | No |
| employeeDetails | [dto.EmployeeDetails](#dtoemployeedetails) |  | No |
| employeeTax | [ [dto.PayslipTax](#dtopaysliptax) ] |  | No |
| employerTax | [ [dto.PayslipTax](#dtopaysliptax) ] |  | No |
| employersCPF |  |  | No |
| grossEarning | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| netPay | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| postTaxDeduction | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| postTaxEarning | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| preTaxDeduction | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| preTaxEarning | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| processedAt | string |  | No |
| reimbursment | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| sick | [ [dto.TimeOff](#dtotimeoff) ] |  | No |
| taxes | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| timeOff | [ [dto.TimeOff](#dtotimeoff) ] |  | No |

#### dto.PayrollCheckPrintResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | [ [dto.CheckPrintDto](#dtocheckprintdto) ] |  | No |

#### dto.PayrollRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| accountNumber | string |  | No |
| bank | string |  | No |
| basicAfter | number |  | No |
| basicBefore | number |  | No |
| basicPayrun | number |  | No |
| benefits | [ [dto.Benefit](#dtobenefit) ] |  | No |
| benefitsMeta | [ [dto.BenefitMeta](#dtobenefitmeta) ] |  | No |
| compensation | number |  | No |
| compensationCurrency | string |  | No |
| compensationPeriod | string |  | No |
| components | [ [dto.Component](#dtocomponent) ] |  | No |
| componentsUpdated | boolean |  | No |
| countryCode | string |  | No |
| ctc | number |  | No |
| dateOfJoining | string |  | No |
| daysOff | number |  | No |
| daysOffAfter | number |  | No |
| daysOffBefore | number |  | No |
| daysWorked | number |  | No |
| effectiveCompensations | [ [dto.EffectiveCompensation](#dtoeffectivecompensation) ] |  | No |
| firstName | string |  | No |
| hasSalaryAdvance | boolean |  | No |
| hoursWorked | number |  | No |
| iamUserId | integer |  | No |
| lastName | string |  | No |
| lossOfPay | number |  | No |
| overtime | [ [dto.Overtime](#dtoovertime) ] |  | No |
| paymentMethod | string |  | No |
| routingNumber | string |  | No |
| tenantId | string |  | No |
| type | string |  | No |
| userId | string |  | No |

#### dto.PayrollResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| _id | string |  | No |
| accountNumber | string |  | No |
| bank | string |  | No |
| basicAfter | number |  | No |
| basicBefore | number |  | No |
| basicPayForDay | number |  | No |
| basicPayrun | number |  | No |
| basicPayrunYTD | number |  | No |
| benefits | [ [dto.Benefit](#dtobenefit) ] |  | No |
| benefitsMeta | [ [dto.BenefitMeta](#dtobenefitmeta) ] |  | No |
| compensation | number |  | No |
| compensationCurrency | string |  | No |
| compensationPeriod | string |  | No |
| compliance |  |  | No |
| components | [ [dto.Component](#dtocomponent) ] |  | No |
| createdAt | string |  | No |
| ctc | number |  | No |
| daysOff | number |  | No |
| daysOffAfter | number |  | No |
| daysOffBefore | number |  | No |
| daysWorked | number |  | No |
| deductions | number |  | No |
| directDepositConsent | boolean |  | No |
| earnings | number |  | No |
| effectiveCompensations | [ [dto.EffectiveCompensation](#dtoeffectivecompensation) ] |  | No |
| employeeId | string |  | No |
| firstName | string |  | No |
| hasSalaryAdvance | boolean |  | No |
| hourlyPay | number |  | No |
| hoursWorked | number |  | No |
| isPaymentDone | boolean |  | No |
| lastName | string |  | No |
| lossOfPay | number |  | No |
| netPay | number |  | No |
| netPayYTD | number |  | No |
| netPayrun | number |  | No |
| netPayrunYTD | number |  | No |
| netTaxes | number |  | No |
| overtime | [ [dto.Overtime](#dtoovertime) ] |  | No |
| overtimePay | number |  | No |
| paymentDoneAt | string |  | No |
| paymentFailureReason | string |  | No |
| paymentMethod | string |  | No |
| paymentVendor | string |  | No |
| payrunId | string |  | No |
| processed | boolean |  | No |
| processedAt | string |  | No |
| routingNumber | string |  | No |
| unfilledFields | [ string ] |  | No |
| updatedAt | string |  | No |
| userId | string |  | No |

#### dto.PayrollsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filterResponse | [dto.FilterResponse](#dtofilterresponse) |  | No |
| payrolls | [ [dto.PayrollResponse](#dtopayrollresponse) ] |  | No |

#### dto.Payrun

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| jeDate | string |  | No |
| payrunId | string |  | No |

#### dto.PayrunForGIROFile

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employees | [ string ] |  | No |
| firstPayDate | string |  | No |
| generatedGIROCount | integer |  | No |
| netPay | number |  | No |
| paySchedule | [dto.PaySchedule](#dtopayschedule) |  | No |
| payrunId | string |  | No |
| totalEmployee | integer |  | No |
| workPeriod | [dto.WorkPeriod](#dtoworkperiod) |  | No |

#### dto.PayrunJEPostedRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| isRevertJE | boolean |  | No |
| jeEntryNumber | string |  | No |
| jeId | string |  | No |
| payrunId | string |  | No |

#### dto.PayrunRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contractorHours | number |  | No |
| countryCode | string |  | No |
| deleted | boolean |  | No |
| employees | [ string ] |  | No |
| firstPayDate | string |  | No |
| isForAllUsers | boolean |  | No |
| isForContractors | boolean |  | No |
| payDate | string |  | No |
| payDay | string |  | No |
| payPeriod | string |  | No |
| paySchedule | [dto.PaySchedule](#dtopayschedule) |  | No |
| payrunType | integer |  | No |
| workPeriod | [dto.WorkPeriod](#dtoworkperiod) |  | No |
| workWeek | [ integer ] |  | No |

#### dto.PayrunResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| _id | string |  | No |
| companyDaysBetweenPeriod | number |  | No |
| createdAt | string |  | No |
| deniedPayrolls | [ [dto.PayrollResponse](#dtopayrollresponse) ] |  | No |
| directDepositConsent | boolean |  | No |
| employeeCount | integer |  | No |
| employees | [ string ] |  | No |
| filter | [dto.FilterResponse](#dtofilterresponse) |  | No |
| firstPayDate | string |  | No |
| hasDirectPayment | boolean |  | No |
| holidays | [ [dto.Holiday](#dtoholiday) ] |  | No |
| isForAllUsers | boolean |  | No |
| isNetPayNegative | boolean |  | No |
| isPaymentDone | boolean |  | No |
| isPayrunReverted | boolean |  | No |
| isValid | boolean |  | No |
| jeDetails | [ [dto.JEDetails](#dtojedetails) ] |  | No |
| jeEntryNumber | string |  | No |
| jeId | string |  | No |
| jePostedOn | string |  | No |
| jeStatus | string |  | No |
| month | integer |  | No |
| netPay | number |  | No |
| payDate | string |  | No |
| payDay | string |  | No |
| payPeriod | string |  | No |
| paySchedule | [dto.PaySchedule](#dtopayschedule) |  | No |
| paymentCount | integer |  | No |
| paymentDoneAt | string |  | No |
| paymentFailureCount | integer |  | No |
| paymentFailureReason | string |  | No |
| paymentVendor | string |  | No |
| payrolls | [ [dto.PayrollResponse](#dtopayrollresponse) ] |  | No |
| payrunType | integer |  | No |
| processed | boolean |  | No |
| processedAt | string |  | No |
| revertedAt | string |  | No |
| stage | string |  | No |
| tenantWorkWeek | [ [dto.WorkWeek](#dtoworkweek) ] |  | No |
| totalCashNetPay | number |  | No |
| totalCheckNetPay | number |  | No |
| totalCost | number |  | No |
| totalDeductions | number |  | No |
| totalDirectDepositNetPay | number |  | No |
| totalEarnings | number |  | No |
| totalEmployeeCost | number |  | No |
| totalEmployerCost | number |  | No |
| totalEmployerTaxes | number |  | No |
| totalTaxes | number |  | No |
| unpaidLeaves | [ [dto.UnpaidLeave](#dtounpaidleave) ] |  | No |
| updatedAt | string |  | No |
| workPeriod | [dto.WorkPeriod](#dtoworkperiod) |  | No |
| workWeek | [ integer ] |  | No |
| year | integer |  | No |

#### dto.PayrunsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filterResponse | [dto.FilterResponse](#dtofilterresponse) |  | No |
| payruns | [ [dto.PayrunResponse](#dtopayrunresponse) ] |  | No |

#### dto.PayslipComponent

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| YTD | number |  | No |
| current | number |  | No |
| description | string |  | No |
| rate | number |  | No |
| type | string |  | No |

#### dto.PayslipDetailResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| basicPayrun | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| benefits | [ [dto.Benefit](#dtobenefit) ] |  | No |
| benefitsMeta | [ [dto.BenefitMeta](#dtobenefitmeta) ] |  | No |
| compliance |  |  | No |
| countryCode | string |  | No |
| daysOff | number |  | No |
| deductions | [ [dto.PayslipComponent](#dtopayslipcomponent) ] |  | No |
| earnings | [ [dto.PayslipComponent](#dtopayslipcomponent) ] |  | No |
| employeeDetails | [dto.UserInfo](#dtouserinfo) |  | No |
| employeeId | string |  | No |
| employeeTax | [ [dto.PayslipTax](#dtopaysliptax) ] |  | No |
| employerTax | [ [dto.PayslipTax](#dtopaysliptax) ] |  | No |
| grossEarning | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| grossPayrun | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| iamUserId | integer |  | No |
| lossOfPay | number |  | No |
| netPay | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| netPayrun | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| overtime | [ [dto.Overtime](#dtoovertime) ] |  | No |
| payDate | string |  | No |
| payPeriod | string |  | No |
| paystubId | string |  | No |
| postTaxDeduction | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| postTaxEarning | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| preTaxDeduction | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| preTaxEarning | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| processedAt | string |  | No |
| reimbursment | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| sick | [ [dto.TimeOff](#dtotimeoff) ] |  | No |
| taxInfo | [dto.TaxInfo](#dtotaxinfo) |  | No |
| taxes | [dto.CurrentYTD](#dtocurrentytd) |  | No |
| tenantConfiguration | [dto.TenantConfigurationResponse](#dtotenantconfigurationresponse) |  | No |
| tenantId | integer |  | No |
| tenantInfo | [dto.TenantShortInfo](#dtotenantshortinfo) |  | No |
| timeOff | [ [dto.TimeOff](#dtotimeoff) ] |  | No |
| workPeriod | [dto.WorkPeriod](#dtoworkperiod) |  | No |

#### dto.PayslipTax

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| YTD | number |  | No |
| current | number |  | No |
| tax | string |  | No |

#### dto.PaystubResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| _id | string |  | No |
| basicPay | number |  | No |
| basicPayrun | number |  | No |
| basicPayrunYTD | number |  | No |
| benefits | [ [dto.Benefit](#dtobenefit) ] |  | No |
| compensation | number |  | No |
| compensationCurrency | string |  | No |
| compensationPeriod | string |  | No |
| compliance |  |  | No |
| components | [ [dto.Component](#dtocomponent) ] |  | No |
| countryCode | string |  | No |
| createdAt | string |  | No |
| days | number |  | No |
| daysOff | number |  | No |
| deductions | number |  | No |
| earnings | number |  | No |
| employeeId | string |  | No |
| filepath | string |  | No |
| firstName | string |  | No |
| iamUserId | integer |  | No |
| isPaymentDone | boolean |  | No |
| lastName | string |  | No |
| lossOfPay | number |  | No |
| netPay | number |  | No |
| netPayYTD | number |  | No |
| netPayrun | number |  | No |
| netPayrunYTD | number |  | No |
| netTaxes | number |  | No |
| overtime | [ [dto.Overtime](#dtoovertime) ] |  | No |
| overtimePay | number |  | No |
| payDate | string |  | No |
| payPeriod | string |  | No |
| paymentDoneAt | string |  | No |
| paymentFailureReason | string |  | No |
| paymentVendor | string |  | No |
| payrollId | string |  | No |
| workPeriod | [dto.WorkPeriod](#dtoworkperiod) |  | No |

#### dto.PaystubsResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| filterResponse | [dto.FilterResponse](#dtofilterresponse) |  | No |
| paystubs | [ [dto.PaystubResponse](#dtopaystubresponse) ] |  | No |

#### dto.ReportData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| epfReport | [ [dto.EPFReport](#dtoepfreport) ] |  | No |
| filterResponse | [dto.FilterResponse](#dtofilterresponse) |  | No |
| ptReport | [ [dto.PTReport](#dtoptreport) ] |  | No |

#### dto.ReportsFilter

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| employeeId | [ integer ] |  | No |
| filterOptions | [dto.FilterOptions](#dtofilteroptions) |  | No |
| form | string |  | No |
| from | string |  | No |
| to | string |  | No |

#### dto.RevertPayrun

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| jeId | integer |  | No |
| jeRevertDate | string |  | No |
| payrunId | string |  | No |

#### dto.RevertPayrunJEsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| revertPayrun | [ [dto.RevertPayrun](#dtorevertpayrun) ] |  | No |

#### dto.SyncPayrunJEsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| payrun | [ [dto.Payrun](#dtopayrun) ] |  | No |

#### dto.TaxInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| compliance | [dto.TaxInfoCompliance](#dtotaxinfocompliance) |  | No |

#### dto.TaxInfoCompliance

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| esiNumber | string |  | No |

#### dto.TenantConfigurationResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| countryCode | string |  | No |
| dateFormat | string |  | No |
| decimalFormat | string |  | No |
| financialYear | [dto.FinancialYear](#dtofinancialyear) |  | No |
| tenantId | string |  | No |

#### dto.TenantShortInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| address | [dtos.Address](#dtosaddress) |  | No |
| companyCode | string |  | No |
| companyId | string |  | No |
| contactNumber | string |  | No |
| countryCode | string |  | No |
| currency | string |  | No |
| currencySymbol | string |  | No |
| fax | string |  | No |
| legalEntityName | string |  | No |
| name | string |  | No |
| oldFlow | boolean |  | No |
| organizationName | string |  | No |
| phone | string |  | No |
| tenantId | string |  | No |

#### dto.TimeOff

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| description | string |  | No |
| hours | string |  | No |

#### dto.UnpaidLeave

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| iamUserId | integer |  | No |
| leaveInfo | [ [dto.LeaveInfo](#dtoleaveinfo) ] |  | No |
| userId | string |  | No |

#### dto.UserCompliance

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SSN | string |  | No |
| federalFilingStatus | string |  | No |
| fin | string |  | No |
| nric | string |  | No |
| pfAccountNumber | string |  | No |
| taxExemptions | boolean |  | No |
| uanNumber | string |  | No |
| workPermitNumber | string |  | No |

#### dto.UserInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SSN | string |  | No |
| address | [dtos.Address](#dtosaddress) |  | No |
| aliasName | string |  | No |
| compliance | [dto.UserCompliance](#dtousercompliance) |  | No |
| dateOfJoining | string |  | No |
| designation | string |  | No |
| firstName | string |  | No |
| lastName | string |  | No |

#### dto.WorkPeriod

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| from | string |  | No |
| to | string |  | No |

#### dto.WorkWeek

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| day | string |  | No |
| duration | number |  | No |
| endTime | string |  | No |
| isWorkingDay | boolean |  | No |
| startTime | string |  | No |

#### dtos.Address

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| addressLine1 | string |  | No |
| addressLine2 | string |  | No |
| city | string |  | No |
| country | string |  | No |
| county | string |  | No |
| state | string |  | No |
| suburb | string |  | No |
| zipCode | string |  | No |
