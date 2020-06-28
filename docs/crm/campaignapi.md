---
id: campaignapi
title: Campaign APIs
sidebar_label: Campaign
---
A campaign is planned strategy for sales, which can uses channels to reach out leads and convert them into customers.
## API
---

### Get Form-template by Id

Get form-template by id

##### Description:

Get Form-template

#### GET
#### /v1/crm/campaign/assets/form-templates/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/campaign/assets/form-templates/30
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/crm/campaign/assets/form-templates/30" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Form ID | Yes | integer |

##### Sample Response
```java
"\u003cform class=\"form\"\u003e\u003cdiv class=\"form-group\"\u003e\u003clabel class=\"label\"\u003eName\u003c/label\u003e\u003cinput placeholder=\"Type here your name\" class=\"input\"/\u003e\u003c/div\u003e\u003cdiv class=\"form-group\"\u003e\u003clabel class=\"label\"\u003eEmail\u003c/label\u003e\u003cinput type=\"email\" placeholder=\"Type here your email\" class=\"input\"/\u003e\u003c/div\u003e\u003cdiv class=\"form-group\"\u003e\u003clabel class=\"label\"\u003eGender\u003c/label\u003e\u003cinput type=\"checkbox\" value=\"M\" class=\"checkbox\"/\u003e\u003clabel class=\"checkbox-label\"\u003eM\u003c/label\u003e\u003cinput type=\"checkbox\" value=\"F\" class=\"checkbox\"/\u003e\u003clabel class=\"checkbox-label\"\u003eF\u003c/label\u003e\u003c/div\u003e\u003cdiv class=\"form-group\"\u003e\u003clabel class=\"label\"\u003eMessage\u003c/label\u003e\u003ctextarea class=\"textarea\"\u003e\u003c/textarea\u003e\u003c/div\u003e\u003cdiv class=\"form-group\"\u003e\u003cbutton type=\"submit\" class=\"button\"\u003eSend\u003c/button\u003e\u003c/div\u003e\u003c/form\u003e\u003cstyle\u003e* { box-sizing: border-box; } body {margin: 0;}.form{border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding-top:10px;padding-right:15px;padding-bottom:10px;padding-left:15px;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;}.input{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.textarea{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.label{width:100%;display:block;}.button{width:100%;margin-top:15px;margin-right:0px;margin-bottom:15px;margin-left:0px;background-color:rgb(0, 119, 255);border-top-width:initial;border-right-width:initial;border-bottom-width:initial;border-left-width:initial;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:initial;border-right-color:initial;border-bottom-color:initial;border-left-color:initial;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;color:rgb(255, 255, 255);padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;font-size:1em;cursor:pointer;border-top-left-radius:10px !important;border-top-right-radius:10px !important;border-bottom-right-radius:10px !important;border-bottom-left-radius:10px !important;}body{background-color:rgb(255, 255, 255);}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}@keyframes fadeEffect{0%{opacity:0;}100%{opacity:1;}}\u003c/style\u003e"
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | string |

### Get Forms

Get Form

##### Description:

Get Form

#### GET
#### /v1/crm/campaign/assets/forms

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/campaign/assets/forms
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/crm/campaign/assets/forms" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query |  | No | integer |
| page | query |  | No | integer |
| search | query |  | No | string |


##### Sample Response
```java
{
  "data": [
    {
      "id": 27,
      "name": "Test Form Template",
      "raw": "\u003cform class=\"form\"\u003e\u003cdiv class=\"form-group\"\u003e\u003clabel class=\"label\"\u003eName\u003c/label\u003e\u003cinput placeholder=\"Type here your name\" class=\"input\"/\u003e\u003c/div\u003e\u003cdiv class=\"form-group\"\u003e\u003clabel class=\"label\"\u003eEmail\u003c/label\u003e\u003cinput type=\"email\" placeholder=\"Type here your email\" class=\"input\"/\u003e\u003c/div\u003e\u003cdiv class=\"form-group\"\u003e\u003clabel class=\"label\"\u003eGender\u003c/label\u003e\u003cinput type=\"checkbox\" value=\"M\" class=\"checkbox\"/\u003e\u003clabel class=\"checkbox-label\"\u003eM\u003c/label\u003e\u003cinput type=\"checkbox\" value=\"F\" class=\"checkbox\"/\u003e\u003clabel class=\"checkbox-label\"\u003eF\u003c/label\u003e\u003c/div\u003e\u003cdiv class=\"form-group\"\u003e\u003clabel class=\"label\"\u003eMessage\u003c/label\u003e\u003ctextarea class=\"textarea\"\u003e\u003c/textarea\u003e\u003c/div\u003e\u003cdiv class=\"form-group\"\u003e\u003cbutton type=\"submit\" class=\"button\"\u003eSend\u003c/button\u003e\u003c/div\u003e\u003c/form\u003e\u003cstyle\u003e* { box-sizing: border-box; } body {margin: 0;}.form{border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding-top:10px;padding-right:15px;padding-bottom:10px;padding-left:15px;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;}.input{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.textarea{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.label{width:100%;display:block;}.button{width:100%;margin-top:15px;margin-right:0px;margin-bottom:15px;margin-left:0px;background-color:rgb(0, 119, 255);border-top-width:initial;border-right-width:initial;border-bottom-width:initial;border-left-width:initial;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:initial;border-right-color:initial;border-bottom-color:initial;border-left-color:initial;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;color:rgb(255, 255, 255);padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;font-size:1em;cursor:pointer;border-top-left-radius:10px !important;border-top-right-radius:10px !important;border-bottom-right-radius:10px !important;border-bottom-left-radius:10px !important;}body{background-color:rgb(255, 255, 255);}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}@keyframes fadeEffect{0%{opacity:0;}100%{opacity:1;}}\u003c/style\u003e",
      "template": "{\"html\":\"\u003cform class=\\\"form\\\"\u003e\u003cdiv class=\\\"form-group\\\"\u003e\u003clabel class=\\\"label\\\"\u003eName\u003c/label\u003e\u003cinput placeholder=\\\"Type here your name\\\" class=\\\"input\\\"/\u003e\u003c/div\u003e\u003cdiv class=\\\"form-group\\\"\u003e\u003clabel class=\\\"label\\\"\u003eEmail\u003c/label\u003e\u003cinput type=\\\"email\\\" placeholder=\\\"Type here your email\\\" class=\\\"input\\\"/\u003e\u003c/div\u003e\u003cdiv class=\\\"form-group\\\"\u003e\u003clabel class=\\\"label\\\"\u003eGender\u003c/label\u003e\u003cinput type=\\\"checkbox\\\" value=\\\"M\\\" class=\\\"checkbox\\\"/\u003e\u003clabel class=\\\"checkbox-label\\\"\u003eM\u003c/label\u003e\u003cinput type=\\\"checkbox\\\" value=\\\"F\\\" class=\\\"checkbox\\\"/\u003e\u003clabel class=\\\"checkbox-label\\\"\u003eF\u003c/label\u003e\u003c/div\u003e\u003cdiv class=\\\"form-group\\\"\u003e\u003clabel class=\\\"label\\\"\u003eMessage\u003c/label\u003e\u003ctextarea class=\\\"textarea\\\"\u003e\u003c/textarea\u003e\u003c/div\u003e\u003cdiv class=\\\"form-group\\\"\u003e\u003cbutton type=\\\"submit\\\" class=\\\"button\\\"\u003eSend\u003c/button\u003e\u003c/div\u003e\u003c/form\u003e\",\"components\":\"[{\\\"tagName\\\":\\\"form\\\",\\\"type\\\":\\\"form\\\",\\\"status\\\":\\\"hovered\\\",\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form\\\",\\\"label\\\":\\\"form\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form-group\\\",\\\"label\\\":\\\"form-group\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"Name\\\",\\\"classes\\\":[{\\\"name\\\":\\\"label\\\",\\\"label\\\":\\\"label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]},{\\\"type\\\":\\\"input\\\",\\\"void\\\":true,\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"input\\\",\\\"label\\\":\\\"input\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"attributes\\\":{\\\"placeholder\\\":\\\"Type here your name\\\"}}]},{\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form-group\\\",\\\"label\\\":\\\"form-group\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"Email\\\",\\\"classes\\\":[{\\\"name\\\":\\\"label\\\",\\\"label\\\":\\\"label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]},{\\\"type\\\":\\\"input\\\",\\\"void\\\":true,\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"input\\\",\\\"label\\\":\\\"input\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"attributes\\\":{\\\"type\\\":\\\"email\\\",\\\"placeholder\\\":\\\"Type here your email\\\"}}]},{\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form-group\\\",\\\"label\\\":\\\"form-group\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"Gender\\\",\\\"classes\\\":[{\\\"name\\\":\\\"label\\\",\\\"label\\\":\\\"label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]},{\\\"type\\\":\\\"checkbox\\\",\\\"void\\\":true,\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"checkbox\\\",\\\"label\\\":\\\"checkbox\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"attributes\\\":{\\\"type\\\":\\\"checkbox\\\",\\\"value\\\":\\\"M\\\"}},{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"M\\\",\\\"classes\\\":[{\\\"name\\\":\\\"checkbox-label\\\",\\\"label\\\":\\\"checkbox-label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]},{\\\"type\\\":\\\"checkbox\\\",\\\"void\\\":true,\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"checkbox\\\",\\\"label\\\":\\\"checkbox\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"attributes\\\":{\\\"type\\\":\\\"checkbox\\\",\\\"value\\\":\\\"F\\\"}},{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"F\\\",\\\"classes\\\":[{\\\"name\\\":\\\"checkbox-label\\\",\\\"label\\\":\\\"checkbox-label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]}]},{\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form-group\\\",\\\"label\\\":\\\"form-group\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"Message\\\",\\\"classes\\\":[{\\\"name\\\":\\\"label\\\",\\\"label\\\":\\\"label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]},{\\\"type\\\":\\\"textarea\\\",\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"textarea\\\",\\\"label\\\":\\\"textarea\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]}]},{\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form-group\\\",\\\"label\\\":\\\"form-group\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"type\\\":\\\"button\\\",\\\"status\\\":\\\"selected\\\",\\\"content\\\":\\\"Send\\\",\\\"classes\\\":[{\\\"name\\\":\\\"button\\\",\\\"label\\\":\\\"button\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"attributes\\\":{\\\"type\\\":\\\"submit\\\"}}],\\\"open\\\":1}],\\\"open\\\":1}]\",\"assets\":\"[]\",\"css\":\"* { box-sizing: border-box; } body {margin: 0;}.form{border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding-top:10px;padding-right:15px;padding-bottom:10px;padding-left:15px;font-family:-apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \\\"Helvetica Neue\\\", sans-serif;}.input{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.textarea{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.label{width:100%;display:block;}.button{width:100%;margin-top:15px;margin-right:0px;margin-bottom:15px;margin-left:0px;background-color:rgb(0, 119, 255);border-top-width:initial;border-right-width:initial;border-bottom-width:initial;border-left-width:initial;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:initial;border-right-color:initial;border-bottom-color:initial;border-left-color:initial;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;color:rgb(255, 255, 255);padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;font-size:1em;cursor:pointer;border-top-left-radius:10px !important;border-top-right-radius:10px !important;border-bottom-right-radius:10px !important;border-bottom-left-radius:10px !important;}body{background-color:rgb(255, 255, 255);}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}@keyframes fadeEffect{0%{opacity:0;}100%{opacity:1;}}\",\"styles\":\"[{\\\"selectors\\\":[{\\\"name\\\":\\\"form\\\",\\\"label\\\":\\\"form\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"style\\\":{\\\"border-top-left-radius\\\":\\\"3px\\\",\\\"border-top-right-radius\\\":\\\"3px\\\",\\\"border-bottom-right-radius\\\":\\\"3px\\\",\\\"border-bottom-left-radius\\\":\\\"3px\\\",\\\"padding-top\\\":\\\"10px\\\",\\\"padding-right\\\":\\\"15px\\\",\\\"padding-bottom\\\":\\\"10px\\\",\\\"padding-left\\\":\\\"15px\\\",\\\"font-family\\\":\\\"-apple-system, BlinkMacSystemFont, \\\\\\\"Segoe UI\\\\\\\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \\\\\\\"Helvetica Neue\\\\\\\", sans-serif\\\"}},{\\\"selectors\\\":[{\\\"name\\\":\\\"input\\\",\\\"label\\\":\\\"input\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"style\\\":{\\\"width\\\":\\\"100%\\\",\\\"margin-bottom\\\":\\\"15px\\\",\\\"padding-top\\\":\\\"7px\\\",\\\"padding-right\\\":\\\"10px\\\",\\\"padding-bottom\\\":\\\"7px\\\",\\\"padding-left\\\":\\\"10px\\\",\\\"border-top-left-radius\\\":\\\"2px\\\",\\\"border-top-right-radius\\\":\\\"2px\\\",\\\"border-bottom-right-radius\\\":\\\"2px\\\",\\\"border-bottom-left-radius\\\":\\\"2px\\\",\\\"color\\\":\\\"rgb(73, 80, 87)\\\",\\\"border-top-width\\\":\\\"1px !important\\\",\\\"border-right-width\\\":\\\"1px !important\\\",\\\"border-bottom-width\\\":\\\"1px !important\\\",\\\"border-left-width\\\":\\\"1px !important\\\",\\\"border-top-style\\\":\\\"solid !important\\\",\\\"border-right-style\\\":\\\"solid !important\\\",\\\"border-bottom-style\\\":\\\"solid !important\\\",\\\"border-left-style\\\":\\\"solid !important\\\",\\\"border-top-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-right-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-bottom-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-left-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-image-source\\\":\\\"initial !important\\\",\\\"border-image-slice\\\":\\\"initial !important\\\",\\\"border-image-width\\\":\\\"initial !important\\\",\\\"border-image-outset\\\":\\\"initial !important\\\",\\\"border-image-repeat\\\":\\\"initial !important\\\"}},{\\\"selectors\\\":[{\\\"name\\\":\\\"textarea\\\",\\\"label\\\":\\\"textarea\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"style\\\":{\\\"width\\\":\\\"100%\\\",\\\"margin-bottom\\\":\\\"15px\\\",\\\"padding-top\\\":\\\"7px\\\",\\\"padding-right\\\":\\\"10px\\\",\\\"padding-bottom\\\":\\\"7px\\\",\\\"padding-left\\\":\\\"10px\\\",\\\"border-top-left-radius\\\":\\\"2px\\\",\\\"border-top-right-radius\\\":\\\"2px\\\",\\\"border-bottom-right-radius\\\":\\\"2px\\\",\\\"border-bottom-left-radius\\\":\\\"2px\\\",\\\"color\\\":\\\"rgb(73, 80, 87)\\\",\\\"border-top-width\\\":\\\"1px !important\\\",\\\"border-right-width\\\":\\\"1px !important\\\",\\\"border-bottom-width\\\":\\\"1px !important\\\",\\\"border-left-width\\\":\\\"1px !important\\\",\\\"border-top-style\\\":\\\"solid !important\\\",\\\"border-right-style\\\":\\\"solid !important\\\",\\\"border-bottom-style\\\":\\\"solid !important\\\",\\\"border-left-style\\\":\\\"solid !important\\\",\\\"border-top-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-right-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-bottom-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-left-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-image-source\\\":\\\"initial !important\\\",\\\"border-image-slice\\\":\\\"initial !important\\\",\\\"border-image-width\\\":\\\"initial !important\\\",\\\"border-image-outset\\\":\\\"initial !important\\\",\\\"border-image-repeat\\\":\\\"initial !important\\\"}},{\\\"selectors\\\":[{\\\"name\\\":\\\"label\\\",\\\"label\\\":\\\"label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"style\\\":{\\\"width\\\":\\\"100%\\\",\\\"display\\\":\\\"block\\\"}},{\\\"selectors\\\":[{\\\"name\\\":\\\"button\\\",\\\"label\\\":\\\"button\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"style\\\":{\\\"width\\\":\\\"100%\\\",\\\"margin-top\\\":\\\"15px\\\",\\\"margin-right\\\":\\\"0px\\\",\\\"margin-bottom\\\":\\\"15px\\\",\\\"margin-left\\\":\\\"0px\\\",\\\"background-color\\\":\\\"rgb(0, 119, 255)\\\",\\\"border-top-width\\\":\\\"initial\\\",\\\"border-right-width\\\":\\\"initial\\\",\\\"border-bottom-width\\\":\\\"initial\\\",\\\"border-left-width\\\":\\\"initial\\\",\\\"border-top-style\\\":\\\"none\\\",\\\"border-right-style\\\":\\\"none\\\",\\\"border-bottom-style\\\":\\\"none\\\",\\\"border-left-style\\\":\\\"none\\\",\\\"border-top-color\\\":\\\"initial\\\",\\\"border-right-color\\\":\\\"initial\\\",\\\"border-bottom-color\\\":\\\"initial\\\",\\\"border-left-color\\\":\\\"initial\\\",\\\"border-image-source\\\":\\\"initial\\\",\\\"border-image-slice\\\":\\\"initial\\\",\\\"border-image-width\\\":\\\"initial\\\",\\\"border-image-outset\\\":\\\"initial\\\",\\\"border-image-repeat\\\":\\\"initial\\\",\\\"color\\\":\\\"rgb(255, 255, 255)\\\",\\\"padding-top\\\":\\\"7px\\\",\\\"padding-right\\\":\\\"10px\\\",\\\"padding-bottom\\\":\\\"7px\\\",\\\"padding-left\\\":\\\"10px\\\",\\\"font-size\\\":\\\"1em\\\",\\\"cursor\\\":\\\"pointer\\\",\\\"border-top-left-radius\\\":\\\"10px !important\\\",\\\"border-top-right-radius\\\":\\\"10px !important\\\",\\\"border-bottom-right-radius\\\":\\\"10px !important\\\",\\\"border-bottom-left-radius\\\":\\\"10px !important\\\"}},{\\\"selectors\\\":[],\\\"selectorsAdd\\\":\\\"body\\\",\\\"style\\\":{\\\"background-color\\\":\\\"rgb(255, 255, 255)\\\"}},{\\\"selectors\\\":[],\\\"selectorsAdd\\\":\\\"*\\\",\\\"style\\\":{\\\"box-sizing\\\":\\\"border-box\\\"}},{\\\"selectors\\\":[],\\\"selectorsAdd\\\":\\\"body\\\",\\\"style\\\":{\\\"margin-top\\\":\\\"0px\\\",\\\"margin-right\\\":\\\"0px\\\",\\\"margin-bottom\\\":\\\"0px\\\",\\\"margin-left\\\":\\\"0px\\\"}},{\\\"selectors\\\":[],\\\"selectorsAdd\\\":\\\"0%\\\",\\\"style\\\":{\\\"opacity\\\":\\\"0\\\"},\\\"mediaText\\\":\\\"fadeEffect\\\",\\\"atRuleType\\\":\\\"keyframes\\\"},{\\\"selectors\\\":[],\\\"selectorsAdd\\\":\\\"100%\\\",\\\"style\\\":{\\\"opacity\\\":\\\"1\\\"},\\\"mediaText\\\":\\\"fadeEffect\\\",\\\"atRuleType\\\":\\\"keyframes\\\"}]\"}",
      "created_by": 6517,
      "created_at": "2020-06-22T04:56:15.09974Z",
      "updated_by": 6517,
      "updated_at": "2020-06-22T04:56:15.099712Z",
      "script": "\u003cscript type='text/javascript' src='https://avalon-dev.deskera.xyz/assets/dtpscript.js?f=27'\u003e\u003c/script\u003e",
      "submitted_forms_count": 0
    }
  ],
  "page": 1,
  "number_of_elements": 0,
  "size_per_page": 10,
  "total_pages": 0,
  "number_of_records": 0
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [FilterConfig](#FilterConfig) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Create Form

Create Form

##### Description:

Create Form

#### POST
#### /v1/crm/campaign/assets/forms

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/campaign/assets/forms
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/crm/campaign/assets/forms" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"name\": \"Test Form Template\", \"raw\": \"<form class=\"form\"><div class=\"form-group\"><label class=\"label\">Name</label><input placeholder=\"Typehereyourname\" class=\"input\"/></div><div class=\"form-group\"><label class=\"label\">Email</label><input type=\"email\" placeholder=\"Typehereyouremail\" class=\"input\"/></div><div class=\"form-group\"><label class=\"label\">Gender</label><input type=\"checkbox\" value=\"M\" class=\"checkbox\"/><label class=\"checkbox-label\">M</label><input type=\"checkbox\" value=\"F\" class=\"checkbox\"/><label class=\"checkbox-label\">F</label></div><div class=\"form-group\"><label class=\"label\">Message</label><textarea class=\"textarea\"></textarea></div><div class=\"form-group\"><button type=\"submit\" class=\"button\">Send</button></div></form><style>* { box-sizing: border-box; } body {margin: 0;}.form{border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding-top:10px;padding-right:15px;padding-bottom:10px;padding-left:15px;font-family:-apple-system, BlinkMacSystemFont, \"SegoeUI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"HelveticaNeue\", sans-serif;}.input{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.textarea{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.label{width:100%;display:block;}.button{width:100%;margin-top:15px;margin-right:0px;margin-bottom:15px;margin-left:0px;background-color:rgb(0, 119, 255);border-top-width:initial;border-right-width:initial;border-bottom-width:initial;border-left-width:initial;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:initial;border-right-color:initial;border-bottom-color:initial;border-left-color:initial;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;color:rgb(255, 255, 255);padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;font-size:1em;cursor:pointer;border-top-left-radius:10px !important;border-top-right-radius:10px !important;border-bottom-right-radius:10px !important;border-bottom-left-radius:10px !important;}body{background-color:rgb(255, 255, 255);}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}@keyframes fadeEffect{0%{opacity:0;}100%{opacity:1;}}</style>\", \"template\": \"{\"html\":\"<form class=\\\"form\\\"><div class=\\\"form-group\\\"><label class=\\\"label\\\">Name</label><input placeholder=\\\"Type here your name\\\" class=\\\"input\\\"/></div><div class=\\\"form-group\\\"><label class=\\\"label\\\">Email</label><input type=\\\"email\\\" placeholder=\\\"Type here your email\\\" class=\\\"input\\\"/></div><div class=\\\"form-group\\\"><label class=\\\"label\\\">Gender</label><input type=\\\"checkbox\\\" value=\\\"M\\\" class=\\\"checkbox\\\"/><label class=\\\"checkbox-label\\\">M</label><input type=\\\"checkbox\\\" value=\\\"F\\\" class=\\\"checkbox\\\"/><label class=\\\"checkbox-label\\\">F</label></div><div class=\\\"form-group\\\"><label class=\\\"label\\\">Message</label><textarea class=\\\"textarea\\\"></textarea></div><div class=\\\"form-group\\\"><button type=\\\"submit\\\" class=\\\"button\\\">Send</button></div></form>\",\"components\":\"[{\\\"tagName\\\":\\\"form\\\",\\\"type\\\":\\\"form\\\",\\\"status\\\":\\\"hovered\\\",\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form\\\",\\\"label\\\":\\\"form\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form-group\\\",\\\"label\\\":\\\"form-group\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"Name\\\",\\\"classes\\\":[{\\\"name\\\":\\\"label\\\",\\\"label\\\":\\\"label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]},{\\\"type\\\":\\\"input\\\",\\\"void\\\":true,\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"input\\\",\\\"label\\\":\\\"input\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"attributes\\\":{\\\"placeholder\\\":\\\"Type here your name\\\"}}]},{\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form-group\\\",\\\"label\\\":\\\"form-group\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"Email\\\",\\\"classes\\\":[{\\\"name\\\":\\\"label\\\",\\\"label\\\":\\\"label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]},{\\\"type\\\":\\\"input\\\",\\\"void\\\":true,\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"input\\\",\\\"label\\\":\\\"input\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"attributes\\\":{\\\"type\\\":\\\"email\\\",\\\"placeholder\\\":\\\"Type here your email\\\"}}]},{\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form-group\\\",\\\"label\\\":\\\"form-group\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"Gender\\\",\\\"classes\\\":[{\\\"name\\\":\\\"label\\\",\\\"label\\\":\\\"label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]},{\\\"type\\\":\\\"checkbox\\\",\\\"void\\\":true,\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"checkbox\\\",\\\"label\\\":\\\"checkbox\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"attributes\\\":{\\\"type\\\":\\\"checkbox\\\",\\\"value\\\":\\\"M\\\"}},{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"M\\\",\\\"classes\\\":[{\\\"name\\\":\\\"checkbox-label\\\",\\\"label\\\":\\\"checkbox-label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]},{\\\"type\\\":\\\"checkbox\\\",\\\"void\\\":true,\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"checkbox\\\",\\\"label\\\":\\\"checkbox\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"attributes\\\":{\\\"type\\\":\\\"checkbox\\\",\\\"value\\\":\\\"F\\\"}},{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"F\\\",\\\"classes\\\":[{\\\"name\\\":\\\"checkbox-label\\\",\\\"label\\\":\\\"checkbox-label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]}]},{\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form-group\\\",\\\"label\\\":\\\"form-group\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"Message\\\",\\\"classes\\\":[{\\\"name\\\":\\\"label\\\",\\\"label\\\":\\\"label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]},{\\\"type\\\":\\\"textarea\\\",\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"textarea\\\",\\\"label\\\":\\\"textarea\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]}]},{\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form-group\\\",\\\"label\\\":\\\"form-group\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"type\\\":\\\"button\\\",\\\"status\\\":\\\"selected\\\",\\\"content\\\":\\\"Send\\\",\\\"classes\\\":[{\\\"name\\\":\\\"button\\\",\\\"label\\\":\\\"button\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"attributes\\\":{\\\"type\\\":\\\"submit\\\"}}],\\\"open\\\":1}],\\\"open\\\":1}]\",\"assets\":\"[]\",\"css\":\"* { box-sizing: border-box; } body {margin: 0;}.form{border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding-top:10px;padding-right:15px;padding-bottom:10px;padding-left:15px;font-family:-apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \\\"Helvetica Neue\\\", sans-serif;}.input{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.textarea{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.label{width:100%;display:block;}.button{width:100%;margin-top:15px;margin-right:0px;margin-bottom:15px;margin-left:0px;background-color:rgb(0, 119, 255);border-top-width:initial;border-right-width:initial;border-bottom-width:initial;border-left-width:initial;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:initial;border-right-color:initial;border-bottom-color:initial;border-left-color:initial;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;color:rgb(255, 255, 255);padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;font-size:1em;cursor:pointer;border-top-left-radius:10px !important;border-top-right-radius:10px !important;border-bottom-right-radius:10px !important;border-bottom-left-radius:10px !important;}body{background-color:rgb(255, 255, 255);}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}@keyframes fadeEffect{0%{opacity:0;}100%{opacity:1;}}\",\"styles\":\"[{\\\"selectors\\\":[{\\\"name\\\":\\\"form\\\",\\\"label\\\":\\\"form\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"style\\\":{\\\"border-top-left-radius\\\":\\\"3px\\\",\\\"border-top-right-radius\\\":\\\"3px\\\",\\\"border-bottom-right-radius\\\":\\\"3px\\\",\\\"border-bottom-left-radius\\\":\\\"3px\\\",\\\"padding-top\\\":\\\"10px\\\",\\\"padding-right\\\":\\\"15px\\\",\\\"padding-bottom\\\":\\\"10px\\\",\\\"padding-left\\\":\\\"15px\\\",\\\"font-family\\\":\\\"-apple-system, BlinkMacSystemFont, \\\\\\\"Segoe UI\\\\\\\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \\\\\\\"Helvetica Neue\\\\\\\", sans-serif\\\"}},{\\\"selectors\\\":[{\\\"name\\\":\\\"input\\\",\\\"label\\\":\\\"input\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"style\\\":{\\\"width\\\":\\\"100%\\\",\\\"margin-bottom\\\":\\\"15px\\\",\\\"padding-top\\\":\\\"7px\\\",\\\"padding-right\\\":\\\"10px\\\",\\\"padding-bottom\\\":\\\"7px\\\",\\\"padding-left\\\":\\\"10px\\\",\\\"border-top-left-radius\\\":\\\"2px\\\",\\\"border-top-right-radius\\\":\\\"2px\\\",\\\"border-bottom-right-radius\\\":\\\"2px\\\",\\\"border-bottom-left-radius\\\":\\\"2px\\\",\\\"color\\\":\\\"rgb(73, 80, 87)\\\",\\\"border-top-width\\\":\\\"1px !important\\\",\\\"border-right-width\\\":\\\"1px !important\\\",\\\"border-bottom-width\\\":\\\"1px !important\\\",\\\"border-left-width\\\":\\\"1px !important\\\",\\\"border-top-style\\\":\\\"solid !important\\\",\\\"border-right-style\\\":\\\"solid !important\\\",\\\"border-bottom-style\\\":\\\"solid !important\\\",\\\"border-left-style\\\":\\\"solid !important\\\",\\\"border-top-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-right-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-bottom-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-left-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-image-source\\\":\\\"initial !important\\\",\\\"border-image-slice\\\":\\\"initial !important\\\",\\\"border-image-width\\\":\\\"initial !important\\\",\\\"border-image-outset\\\":\\\"initial !important\\\",\\\"border-image-repeat\\\":\\\"initial !important\\\"}},{\\\"selectors\\\":[{\\\"name\\\":\\\"textarea\\\",\\\"label\\\":\\\"textarea\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"style\\\":{\\\"width\\\":\\\"100%\\\",\\\"margin-bottom\\\":\\\"15px\\\",\\\"padding-top\\\":\\\"7px\\\",\\\"padding-right\\\":\\\"10px\\\",\\\"padding-bottom\\\":\\\"7px\\\",\\\"padding-left\\\":\\\"10px\\\",\\\"border-top-left-radius\\\":\\\"2px\\\",\\\"border-top-right-radius\\\":\\\"2px\\\",\\\"border-bottom-right-radius\\\":\\\"2px\\\",\\\"border-bottom-left-radius\\\":\\\"2px\\\",\\\"color\\\":\\\"rgb(73, 80, 87)\\\",\\\"border-top-width\\\":\\\"1px !important\\\",\\\"border-right-width\\\":\\\"1px !important\\\",\\\"border-bottom-width\\\":\\\"1px !important\\\",\\\"border-left-width\\\":\\\"1px !important\\\",\\\"border-top-style\\\":\\\"solid !important\\\",\\\"border-right-style\\\":\\\"solid !important\\\",\\\"border-bottom-style\\\":\\\"solid !important\\\",\\\"border-left-style\\\":\\\"solid !important\\\",\\\"border-top-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-right-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-bottom-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-left-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-image-source\\\":\\\"initial !important\\\",\\\"border-image-slice\\\":\\\"initial !important\\\",\\\"border-image-width\\\":\\\"initial !important\\\",\\\"border-image-outset\\\":\\\"initial !important\\\",\\\"border-image-repeat\\\":\\\"initial !important\\\"}},{\\\"selectors\\\":[{\\\"name\\\":\\\"label\\\",\\\"label\\\":\\\"label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"style\\\":{\\\"width\\\":\\\"100%\\\",\\\"display\\\":\\\"block\\\"}},{\\\"selectors\\\":[{\\\"name\\\":\\\"button\\\",\\\"label\\\":\\\"button\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"style\\\":{\\\"width\\\":\\\"100%\\\",\\\"margin-top\\\":\\\"15px\\\",\\\"margin-right\\\":\\\"0px\\\",\\\"margin-bottom\\\":\\\"15px\\\",\\\"margin-left\\\":\\\"0px\\\",\\\"background-color\\\":\\\"rgb(0, 119, 255)\\\",\\\"border-top-width\\\":\\\"initial\\\",\\\"border-right-width\\\":\\\"initial\\\",\\\"border-bottom-width\\\":\\\"initial\\\",\\\"border-left-width\\\":\\\"initial\\\",\\\"border-top-style\\\":\\\"none\\\",\\\"border-right-style\\\":\\\"none\\\",\\\"border-bottom-style\\\":\\\"none\\\",\\\"border-left-style\\\":\\\"none\\\",\\\"border-top-color\\\":\\\"initial\\\",\\\"border-right-color\\\":\\\"initial\\\",\\\"border-bottom-color\\\":\\\"initial\\\",\\\"border-left-color\\\":\\\"initial\\\",\\\"border-image-source\\\":\\\"initial\\\",\\\"border-image-slice\\\":\\\"initial\\\",\\\"border-image-width\\\":\\\"initial\\\",\\\"border-image-outset\\\":\\\"initial\\\",\\\"border-image-repeat\\\":\\\"initial\\\",\\\"color\\\":\\\"rgb(255, 255, 255)\\\",\\\"padding-top\\\":\\\"7px\\\",\\\"padding-right\\\":\\\"10px\\\",\\\"padding-bottom\\\":\\\"7px\\\",\\\"padding-left\\\":\\\"10px\\\",\\\"font-size\\\":\\\"1em\\\",\\\"cursor\\\":\\\"pointer\\\",\\\"border-top-left-radius\\\":\\\"10px !important\\\",\\\"border-top-right-radius\\\":\\\"10px !important\\\",\\\"border-bottom-right-radius\\\":\\\"10px !important\\\",\\\"border-bottom-left-radius\\\":\\\"10px !important\\\"}},{\\\"selectors\\\":[],\\\"selectorsAdd\\\":\\\"body\\\",\\\"style\\\":{\\\"background-color\\\":\\\"rgb(255, 255, 255)\\\"}},{\\\"selectors\\\":[],\\\"selectorsAdd\\\":\\\"*\\\",\\\"style\\\":{\\\"box-sizing\\\":\\\"border-box\\\"}},{\\\"selectors\\\":[],\\\"selectorsAdd\\\":\\\"body\\\",\\\"style\\\":{\\\"margin-top\\\":\\\"0px\\\",\\\"margin-right\\\":\\\"0px\\\",\\\"margin-bottom\\\":\\\"0px\\\",\\\"margin-left\\\":\\\"0px\\\"}},{\\\"selectors\\\":[],\\\"selectorsAdd\\\":\\\"0%\\\",\\\"style\\\":{\\\"opacity\\\":\\\"0\\\"},\\\"mediaText\\\":\\\"fadeEffect\\\",\\\"atRuleType\\\":\\\"keyframes\\\"},{\\\"selectors\\\":[],\\\"selectorsAdd\\\":\\\"100%\\\",\\\"style\\\":{\\\"opacity\\\":\\\"1\\\"},\\\"mediaText\\\":\\\"fadeEffect\\\",\\\"atRuleType\\\":\\\"keyframes\\\"}]\"}\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| form | body | Create form | Yes | [FormRequest](#FormRequest) |

##### Sample Request
```java
{
  "name": "Test Form Template",
  "raw": "<form class="form"><div class="form-group"><label class="label">Name</label><input placeholder="Typehereyourname" class="input"/></div><div class="form-group"><label class="label">Email</label><input type="email" placeholder="Typehereyouremail" class="input"/></div><div class="form-group"><label class="label">Gender</label><input type="checkbox" value="M" class="checkbox"/><label class="checkbox-label">M</label><input type="checkbox" value="F" class="checkbox"/><label class="checkbox-label">F</label></div><div class="form-group"><label class="label">Message</label><textarea class="textarea"></textarea></div><div class="form-group"><button type="submit" class="button">Send</button></div></form><style>* { box-sizing: border-box; } body {margin: 0;}.form{border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding-top:10px;padding-right:15px;padding-bottom:10px;padding-left:15px;font-family:-apple-system, BlinkMacSystemFont, "SegoeUI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "HelveticaNeue", sans-serif;}.input{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.textarea{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.label{width:100%;display:block;}.button{width:100%;margin-top:15px;margin-right:0px;margin-bottom:15px;margin-left:0px;background-color:rgb(0, 119, 255);border-top-width:initial;border-right-width:initial;border-bottom-width:initial;border-left-width:initial;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:initial;border-right-color:initial;border-bottom-color:initial;border-left-color:initial;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;color:rgb(255, 255, 255);padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;font-size:1em;cursor:pointer;border-top-left-radius:10px !important;border-top-right-radius:10px !important;border-bottom-right-radius:10px !important;border-bottom-left-radius:10px !important;}body{background-color:rgb(255, 255, 255);}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}@keyframes fadeEffect{0%{opacity:0;}100%{opacity:1;}}</style>",
  "template": "{"html":"<form class=\"form\"><div class=\"form-group\"><label class=\"label\">Name</label><input placeholder=\"Type here your name\" class=\"input\"/></div><div class=\"form-group\"><label class=\"label\">Email</label><input type=\"email\" placeholder=\"Type here your email\" class=\"input\"/></div><div class=\"form-group\"><label class=\"label\">Gender</label><input type=\"checkbox\" value=\"M\" class=\"checkbox\"/><label class=\"checkbox-label\">M</label><input type=\"checkbox\" value=\"F\" class=\"checkbox\"/><label class=\"checkbox-label\">F</label></div><div class=\"form-group\"><label class=\"label\">Message</label><textarea class=\"textarea\"></textarea></div><div class=\"form-group\"><button type=\"submit\" class=\"button\">Send</button></div></form>","components":"[{\"tagName\":\"form\",\"type\":\"form\",\"status\":\"hovered\",\"content\":\"\",\"classes\":[{\"name\":\"form\",\"label\":\"form\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"components\":[{\"content\":\"\",\"classes\":[{\"name\":\"form-group\",\"label\":\"form-group\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"components\":[{\"type\":\"label\",\"content\":\"Name\",\"classes\":[{\"name\":\"label\",\"label\":\"label\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}]},{\"type\":\"input\",\"void\":true,\"content\":\"\",\"classes\":[{\"name\":\"input\",\"label\":\"input\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"attributes\":{\"placeholder\":\"Type here your name\"}}]},{\"content\":\"\",\"classes\":[{\"name\":\"form-group\",\"label\":\"form-group\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"components\":[{\"type\":\"label\",\"content\":\"Email\",\"classes\":[{\"name\":\"label\",\"label\":\"label\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}]},{\"type\":\"input\",\"void\":true,\"content\":\"\",\"classes\":[{\"name\":\"input\",\"label\":\"input\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"attributes\":{\"type\":\"email\",\"placeholder\":\"Type here your email\"}}]},{\"content\":\"\",\"classes\":[{\"name\":\"form-group\",\"label\":\"form-group\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"components\":[{\"type\":\"label\",\"content\":\"Gender\",\"classes\":[{\"name\":\"label\",\"label\":\"label\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}]},{\"type\":\"checkbox\",\"void\":true,\"content\":\"\",\"classes\":[{\"name\":\"checkbox\",\"label\":\"checkbox\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"attributes\":{\"type\":\"checkbox\",\"value\":\"M\"}},{\"type\":\"label\",\"content\":\"M\",\"classes\":[{\"name\":\"checkbox-label\",\"label\":\"checkbox-label\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}]},{\"type\":\"checkbox\",\"void\":true,\"content\":\"\",\"classes\":[{\"name\":\"checkbox\",\"label\":\"checkbox\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"attributes\":{\"type\":\"checkbox\",\"value\":\"F\"}},{\"type\":\"label\",\"content\":\"F\",\"classes\":[{\"name\":\"checkbox-label\",\"label\":\"checkbox-label\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}]}]},{\"content\":\"\",\"classes\":[{\"name\":\"form-group\",\"label\":\"form-group\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"components\":[{\"type\":\"label\",\"content\":\"Message\",\"classes\":[{\"name\":\"label\",\"label\":\"label\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}]},{\"type\":\"textarea\",\"content\":\"\",\"classes\":[{\"name\":\"textarea\",\"label\":\"textarea\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}]}]},{\"content\":\"\",\"classes\":[{\"name\":\"form-group\",\"label\":\"form-group\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"components\":[{\"type\":\"button\",\"status\":\"selected\",\"content\":\"Send\",\"classes\":[{\"name\":\"button\",\"label\":\"button\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"attributes\":{\"type\":\"submit\"}}],\"open\":1}],\"open\":1}]","assets":"[]","css":"* { box-sizing: border-box; } body {margin: 0;}.form{border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding-top:10px;padding-right:15px;padding-bottom:10px;padding-left:15px;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;}.input{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.textarea{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.label{width:100%;display:block;}.button{width:100%;margin-top:15px;margin-right:0px;margin-bottom:15px;margin-left:0px;background-color:rgb(0, 119, 255);border-top-width:initial;border-right-width:initial;border-bottom-width:initial;border-left-width:initial;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:initial;border-right-color:initial;border-bottom-color:initial;border-left-color:initial;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;color:rgb(255, 255, 255);padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;font-size:1em;cursor:pointer;border-top-left-radius:10px !important;border-top-right-radius:10px !important;border-bottom-right-radius:10px !important;border-bottom-left-radius:10px !important;}body{background-color:rgb(255, 255, 255);}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}@keyframes fadeEffect{0%{opacity:0;}100%{opacity:1;}}","styles":"[{\"selectors\":[{\"name\":\"form\",\"label\":\"form\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"border-top-left-radius\":\"3px\",\"border-top-right-radius\":\"3px\",\"border-bottom-right-radius\":\"3px\",\"border-bottom-left-radius\":\"3px\",\"padding-top\":\"10px\",\"padding-right\":\"15px\",\"padding-bottom\":\"10px\",\"padding-left\":\"15px\",\"font-family\":\"-apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \\\"Helvetica Neue\\\", sans-serif\"}},{\"selectors\":[{\"name\":\"input\",\"label\":\"input\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"width\":\"100%\",\"margin-bottom\":\"15px\",\"padding-top\":\"7px\",\"padding-right\":\"10px\",\"padding-bottom\":\"7px\",\"padding-left\":\"10px\",\"border-top-left-radius\":\"2px\",\"border-top-right-radius\":\"2px\",\"border-bottom-right-radius\":\"2px\",\"border-bottom-left-radius\":\"2px\",\"color\":\"rgb(73, 80, 87)\",\"border-top-width\":\"1px !important\",\"border-right-width\":\"1px !important\",\"border-bottom-width\":\"1px !important\",\"border-left-width\":\"1px !important\",\"border-top-style\":\"solid !important\",\"border-right-style\":\"solid !important\",\"border-bottom-style\":\"solid !important\",\"border-left-style\":\"solid !important\",\"border-top-color\":\"rgb(221, 227, 236) !important\",\"border-right-color\":\"rgb(221, 227, 236) !important\",\"border-bottom-color\":\"rgb(221, 227, 236) !important\",\"border-left-color\":\"rgb(221, 227, 236) !important\",\"border-image-source\":\"initial !important\",\"border-image-slice\":\"initial !important\",\"border-image-width\":\"initial !important\",\"border-image-outset\":\"initial !important\",\"border-image-repeat\":\"initial !important\"}},{\"selectors\":[{\"name\":\"textarea\",\"label\":\"textarea\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"width\":\"100%\",\"margin-bottom\":\"15px\",\"padding-top\":\"7px\",\"padding-right\":\"10px\",\"padding-bottom\":\"7px\",\"padding-left\":\"10px\",\"border-top-left-radius\":\"2px\",\"border-top-right-radius\":\"2px\",\"border-bottom-right-radius\":\"2px\",\"border-bottom-left-radius\":\"2px\",\"color\":\"rgb(73, 80, 87)\",\"border-top-width\":\"1px !important\",\"border-right-width\":\"1px !important\",\"border-bottom-width\":\"1px !important\",\"border-left-width\":\"1px !important\",\"border-top-style\":\"solid !important\",\"border-right-style\":\"solid !important\",\"border-bottom-style\":\"solid !important\",\"border-left-style\":\"solid !important\",\"border-top-color\":\"rgb(221, 227, 236) !important\",\"border-right-color\":\"rgb(221, 227, 236) !important\",\"border-bottom-color\":\"rgb(221, 227, 236) !important\",\"border-left-color\":\"rgb(221, 227, 236) !important\",\"border-image-source\":\"initial !important\",\"border-image-slice\":\"initial !important\",\"border-image-width\":\"initial !important\",\"border-image-outset\":\"initial !important\",\"border-image-repeat\":\"initial !important\"}},{\"selectors\":[{\"name\":\"label\",\"label\":\"label\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"width\":\"100%\",\"display\":\"block\"}},{\"selectors\":[{\"name\":\"button\",\"label\":\"button\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"width\":\"100%\",\"margin-top\":\"15px\",\"margin-right\":\"0px\",\"margin-bottom\":\"15px\",\"margin-left\":\"0px\",\"background-color\":\"rgb(0, 119, 255)\",\"border-top-width\":\"initial\",\"border-right-width\":\"initial\",\"border-bottom-width\":\"initial\",\"border-left-width\":\"initial\",\"border-top-style\":\"none\",\"border-right-style\":\"none\",\"border-bottom-style\":\"none\",\"border-left-style\":\"none\",\"border-top-color\":\"initial\",\"border-right-color\":\"initial\",\"border-bottom-color\":\"initial\",\"border-left-color\":\"initial\",\"border-image-source\":\"initial\",\"border-image-slice\":\"initial\",\"border-image-width\":\"initial\",\"border-image-outset\":\"initial\",\"border-image-repeat\":\"initial\",\"color\":\"rgb(255, 255, 255)\",\"padding-top\":\"7px\",\"padding-right\":\"10px\",\"padding-bottom\":\"7px\",\"padding-left\":\"10px\",\"font-size\":\"1em\",\"cursor\":\"pointer\",\"border-top-left-radius\":\"10px !important\",\"border-top-right-radius\":\"10px !important\",\"border-bottom-right-radius\":\"10px !important\",\"border-bottom-left-radius\":\"10px !important\"}},{\"selectors\":[],\"selectorsAdd\":\"body\",\"style\":{\"background-color\":\"rgb(255, 255, 255)\"}},{\"selectors\":[],\"selectorsAdd\":\"*\",\"style\":{\"box-sizing\":\"border-box\"}},{\"selectors\":[],\"selectorsAdd\":\"body\",\"style\":{\"margin-top\":\"0px\",\"margin-right\":\"0px\",\"margin-bottom\":\"0px\",\"margin-left\":\"0px\"}},{\"selectors\":[],\"selectorsAdd\":\"0%\",\"style\":{\"opacity\":\"0\"},\"mediaText\":\"fadeEffect\",\"atRuleType\":\"keyframes\"},{\"selectors\":[],\"selectorsAdd\":\"100%\",\"style\":{\"opacity\":\"1\"},\"mediaText\":\"fadeEffect\",\"atRuleType\":\"keyframes\"}]"}"
}
```

##### Sample Response
```java
{
    "Success":true,
    "Id":27
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 201 | Created | [CUDRecordResponse](#CUDRecordResponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Delete Form

Delete Form

##### Description:

Delete Form

#### DELETE
#### /v1/crm/campaign/assets/forms/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/campaign/assets/forms/27
```

##### Curl

```java
curl -X DELETE "https://bifrost.deskera.com/v1/crm/campaign/assets/forms/27" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Form ID | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Get Form by Id

Get form by id

##### Description:

Get Form

#### GET
#### /v1/crm/campaign/assets/forms/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/activities?page=1&pageSize=10&sortBy=updated_at&sortDir=DESC
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/crm/activities?page=1&pageSize=10&sortBy=updated_at&sortDir=DESC" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Form ID | Yes | integer |

##### Sample Response
```java
{
      "id": 27,
      "name": "Test Form Template",
      "raw": "\u003cform class=\"form\"\u003e\u003cdiv class=\"form-group\"\u003e\u003clabel class=\"label\"\u003eName\u003c/label\u003e\u003cinput placeholder=\"Type here your name\" class=\"input\"/\u003e\u003c/div\u003e\u003cdiv class=\"form-group\"\u003e\u003clabel class=\"label\"\u003eEmail\u003c/label\u003e\u003cinput type=\"email\" placeholder=\"Type here your email\" class=\"input\"/\u003e\u003c/div\u003e\u003cdiv class=\"form-group\"\u003e\u003clabel class=\"label\"\u003eGender\u003c/label\u003e\u003cinput type=\"checkbox\" value=\"M\" class=\"checkbox\"/\u003e\u003clabel class=\"checkbox-label\"\u003eM\u003c/label\u003e\u003cinput type=\"checkbox\" value=\"F\" class=\"checkbox\"/\u003e\u003clabel class=\"checkbox-label\"\u003eF\u003c/label\u003e\u003c/div\u003e\u003cdiv class=\"form-group\"\u003e\u003clabel class=\"label\"\u003eMessage\u003c/label\u003e\u003ctextarea class=\"textarea\"\u003e\u003c/textarea\u003e\u003c/div\u003e\u003cdiv class=\"form-group\"\u003e\u003cbutton type=\"submit\" class=\"button\"\u003eSend\u003c/button\u003e\u003c/div\u003e\u003c/form\u003e\u003cstyle\u003e* { box-sizing: border-box; } body {margin: 0;}.form{border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding-top:10px;padding-right:15px;padding-bottom:10px;padding-left:15px;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;}.input{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.textarea{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.label{width:100%;display:block;}.button{width:100%;margin-top:15px;margin-right:0px;margin-bottom:15px;margin-left:0px;background-color:rgb(0, 119, 255);border-top-width:initial;border-right-width:initial;border-bottom-width:initial;border-left-width:initial;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:initial;border-right-color:initial;border-bottom-color:initial;border-left-color:initial;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;color:rgb(255, 255, 255);padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;font-size:1em;cursor:pointer;border-top-left-radius:10px !important;border-top-right-radius:10px !important;border-bottom-right-radius:10px !important;border-bottom-left-radius:10px !important;}body{background-color:rgb(255, 255, 255);}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}@keyframes fadeEffect{0%{opacity:0;}100%{opacity:1;}}\u003c/style\u003e",
      "template": "{\"html\":\"\u003cform class=\\\"form\\\"\u003e\u003cdiv class=\\\"form-group\\\"\u003e\u003clabel class=\\\"label\\\"\u003eName\u003c/label\u003e\u003cinput placeholder=\\\"Type here your name\\\" class=\\\"input\\\"/\u003e\u003c/div\u003e\u003cdiv class=\\\"form-group\\\"\u003e\u003clabel class=\\\"label\\\"\u003eEmail\u003c/label\u003e\u003cinput type=\\\"email\\\" placeholder=\\\"Type here your email\\\" class=\\\"input\\\"/\u003e\u003c/div\u003e\u003cdiv class=\\\"form-group\\\"\u003e\u003clabel class=\\\"label\\\"\u003eGender\u003c/label\u003e\u003cinput type=\\\"checkbox\\\" value=\\\"M\\\" class=\\\"checkbox\\\"/\u003e\u003clabel class=\\\"checkbox-label\\\"\u003eM\u003c/label\u003e\u003cinput type=\\\"checkbox\\\" value=\\\"F\\\" class=\\\"checkbox\\\"/\u003e\u003clabel class=\\\"checkbox-label\\\"\u003eF\u003c/label\u003e\u003c/div\u003e\u003cdiv class=\\\"form-group\\\"\u003e\u003clabel class=\\\"label\\\"\u003eMessage\u003c/label\u003e\u003ctextarea class=\\\"textarea\\\"\u003e\u003c/textarea\u003e\u003c/div\u003e\u003cdiv class=\\\"form-group\\\"\u003e\u003cbutton type=\\\"submit\\\" class=\\\"button\\\"\u003eSend\u003c/button\u003e\u003c/div\u003e\u003c/form\u003e\",\"components\":\"[{\\\"tagName\\\":\\\"form\\\",\\\"type\\\":\\\"form\\\",\\\"status\\\":\\\"hovered\\\",\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form\\\",\\\"label\\\":\\\"form\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form-group\\\",\\\"label\\\":\\\"form-group\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"Name\\\",\\\"classes\\\":[{\\\"name\\\":\\\"label\\\",\\\"label\\\":\\\"label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]},{\\\"type\\\":\\\"input\\\",\\\"void\\\":true,\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"input\\\",\\\"label\\\":\\\"input\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"attributes\\\":{\\\"placeholder\\\":\\\"Type here your name\\\"}}]},{\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form-group\\\",\\\"label\\\":\\\"form-group\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"Email\\\",\\\"classes\\\":[{\\\"name\\\":\\\"label\\\",\\\"label\\\":\\\"label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]},{\\\"type\\\":\\\"input\\\",\\\"void\\\":true,\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"input\\\",\\\"label\\\":\\\"input\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"attributes\\\":{\\\"type\\\":\\\"email\\\",\\\"placeholder\\\":\\\"Type here your email\\\"}}]},{\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form-group\\\",\\\"label\\\":\\\"form-group\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"Gender\\\",\\\"classes\\\":[{\\\"name\\\":\\\"label\\\",\\\"label\\\":\\\"label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]},{\\\"type\\\":\\\"checkbox\\\",\\\"void\\\":true,\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"checkbox\\\",\\\"label\\\":\\\"checkbox\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"attributes\\\":{\\\"type\\\":\\\"checkbox\\\",\\\"value\\\":\\\"M\\\"}},{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"M\\\",\\\"classes\\\":[{\\\"name\\\":\\\"checkbox-label\\\",\\\"label\\\":\\\"checkbox-label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]},{\\\"type\\\":\\\"checkbox\\\",\\\"void\\\":true,\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"checkbox\\\",\\\"label\\\":\\\"checkbox\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"attributes\\\":{\\\"type\\\":\\\"checkbox\\\",\\\"value\\\":\\\"F\\\"}},{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"F\\\",\\\"classes\\\":[{\\\"name\\\":\\\"checkbox-label\\\",\\\"label\\\":\\\"checkbox-label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]}]},{\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form-group\\\",\\\"label\\\":\\\"form-group\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"Message\\\",\\\"classes\\\":[{\\\"name\\\":\\\"label\\\",\\\"label\\\":\\\"label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]},{\\\"type\\\":\\\"textarea\\\",\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"textarea\\\",\\\"label\\\":\\\"textarea\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]}]},{\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form-group\\\",\\\"label\\\":\\\"form-group\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"type\\\":\\\"button\\\",\\\"status\\\":\\\"selected\\\",\\\"content\\\":\\\"Send\\\",\\\"classes\\\":[{\\\"name\\\":\\\"button\\\",\\\"label\\\":\\\"button\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"attributes\\\":{\\\"type\\\":\\\"submit\\\"}}],\\\"open\\\":1}],\\\"open\\\":1}]\",\"assets\":\"[]\",\"css\":\"* { box-sizing: border-box; } body {margin: 0;}.form{border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding-top:10px;padding-right:15px;padding-bottom:10px;padding-left:15px;font-family:-apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \\\"Helvetica Neue\\\", sans-serif;}.input{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.textarea{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.label{width:100%;display:block;}.button{width:100%;margin-top:15px;margin-right:0px;margin-bottom:15px;margin-left:0px;background-color:rgb(0, 119, 255);border-top-width:initial;border-right-width:initial;border-bottom-width:initial;border-left-width:initial;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:initial;border-right-color:initial;border-bottom-color:initial;border-left-color:initial;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;color:rgb(255, 255, 255);padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;font-size:1em;cursor:pointer;border-top-left-radius:10px !important;border-top-right-radius:10px !important;border-bottom-right-radius:10px !important;border-bottom-left-radius:10px !important;}body{background-color:rgb(255, 255, 255);}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}@keyframes fadeEffect{0%{opacity:0;}100%{opacity:1;}}\",\"styles\":\"[{\\\"selectors\\\":[{\\\"name\\\":\\\"form\\\",\\\"label\\\":\\\"form\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"style\\\":{\\\"border-top-left-radius\\\":\\\"3px\\\",\\\"border-top-right-radius\\\":\\\"3px\\\",\\\"border-bottom-right-radius\\\":\\\"3px\\\",\\\"border-bottom-left-radius\\\":\\\"3px\\\",\\\"padding-top\\\":\\\"10px\\\",\\\"padding-right\\\":\\\"15px\\\",\\\"padding-bottom\\\":\\\"10px\\\",\\\"padding-left\\\":\\\"15px\\\",\\\"font-family\\\":\\\"-apple-system, BlinkMacSystemFont, \\\\\\\"Segoe UI\\\\\\\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \\\\\\\"Helvetica Neue\\\\\\\", sans-serif\\\"}},{\\\"selectors\\\":[{\\\"name\\\":\\\"input\\\",\\\"label\\\":\\\"input\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"style\\\":{\\\"width\\\":\\\"100%\\\",\\\"margin-bottom\\\":\\\"15px\\\",\\\"padding-top\\\":\\\"7px\\\",\\\"padding-right\\\":\\\"10px\\\",\\\"padding-bottom\\\":\\\"7px\\\",\\\"padding-left\\\":\\\"10px\\\",\\\"border-top-left-radius\\\":\\\"2px\\\",\\\"border-top-right-radius\\\":\\\"2px\\\",\\\"border-bottom-right-radius\\\":\\\"2px\\\",\\\"border-bottom-left-radius\\\":\\\"2px\\\",\\\"color\\\":\\\"rgb(73, 80, 87)\\\",\\\"border-top-width\\\":\\\"1px !important\\\",\\\"border-right-width\\\":\\\"1px !important\\\",\\\"border-bottom-width\\\":\\\"1px !important\\\",\\\"border-left-width\\\":\\\"1px !important\\\",\\\"border-top-style\\\":\\\"solid !important\\\",\\\"border-right-style\\\":\\\"solid !important\\\",\\\"border-bottom-style\\\":\\\"solid !important\\\",\\\"border-left-style\\\":\\\"solid !important\\\",\\\"border-top-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-right-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-bottom-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-left-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-image-source\\\":\\\"initial !important\\\",\\\"border-image-slice\\\":\\\"initial !important\\\",\\\"border-image-width\\\":\\\"initial !important\\\",\\\"border-image-outset\\\":\\\"initial !important\\\",\\\"border-image-repeat\\\":\\\"initial !important\\\"}},{\\\"selectors\\\":[{\\\"name\\\":\\\"textarea\\\",\\\"label\\\":\\\"textarea\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"style\\\":{\\\"width\\\":\\\"100%\\\",\\\"margin-bottom\\\":\\\"15px\\\",\\\"padding-top\\\":\\\"7px\\\",\\\"padding-right\\\":\\\"10px\\\",\\\"padding-bottom\\\":\\\"7px\\\",\\\"padding-left\\\":\\\"10px\\\",\\\"border-top-left-radius\\\":\\\"2px\\\",\\\"border-top-right-radius\\\":\\\"2px\\\",\\\"border-bottom-right-radius\\\":\\\"2px\\\",\\\"border-bottom-left-radius\\\":\\\"2px\\\",\\\"color\\\":\\\"rgb(73, 80, 87)\\\",\\\"border-top-width\\\":\\\"1px !important\\\",\\\"border-right-width\\\":\\\"1px !important\\\",\\\"border-bottom-width\\\":\\\"1px !important\\\",\\\"border-left-width\\\":\\\"1px !important\\\",\\\"border-top-style\\\":\\\"solid !important\\\",\\\"border-right-style\\\":\\\"solid !important\\\",\\\"border-bottom-style\\\":\\\"solid !important\\\",\\\"border-left-style\\\":\\\"solid !important\\\",\\\"border-top-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-right-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-bottom-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-left-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-image-source\\\":\\\"initial !important\\\",\\\"border-image-slice\\\":\\\"initial !important\\\",\\\"border-image-width\\\":\\\"initial !important\\\",\\\"border-image-outset\\\":\\\"initial !important\\\",\\\"border-image-repeat\\\":\\\"initial !important\\\"}},{\\\"selectors\\\":[{\\\"name\\\":\\\"label\\\",\\\"label\\\":\\\"label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"style\\\":{\\\"width\\\":\\\"100%\\\",\\\"display\\\":\\\"block\\\"}},{\\\"selectors\\\":[{\\\"name\\\":\\\"button\\\",\\\"label\\\":\\\"button\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"style\\\":{\\\"width\\\":\\\"100%\\\",\\\"margin-top\\\":\\\"15px\\\",\\\"margin-right\\\":\\\"0px\\\",\\\"margin-bottom\\\":\\\"15px\\\",\\\"margin-left\\\":\\\"0px\\\",\\\"background-color\\\":\\\"rgb(0, 119, 255)\\\",\\\"border-top-width\\\":\\\"initial\\\",\\\"border-right-width\\\":\\\"initial\\\",\\\"border-bottom-width\\\":\\\"initial\\\",\\\"border-left-width\\\":\\\"initial\\\",\\\"border-top-style\\\":\\\"none\\\",\\\"border-right-style\\\":\\\"none\\\",\\\"border-bottom-style\\\":\\\"none\\\",\\\"border-left-style\\\":\\\"none\\\",\\\"border-top-color\\\":\\\"initial\\\",\\\"border-right-color\\\":\\\"initial\\\",\\\"border-bottom-color\\\":\\\"initial\\\",\\\"border-left-color\\\":\\\"initial\\\",\\\"border-image-source\\\":\\\"initial\\\",\\\"border-image-slice\\\":\\\"initial\\\",\\\"border-image-width\\\":\\\"initial\\\",\\\"border-image-outset\\\":\\\"initial\\\",\\\"border-image-repeat\\\":\\\"initial\\\",\\\"color\\\":\\\"rgb(255, 255, 255)\\\",\\\"padding-top\\\":\\\"7px\\\",\\\"padding-right\\\":\\\"10px\\\",\\\"padding-bottom\\\":\\\"7px\\\",\\\"padding-left\\\":\\\"10px\\\",\\\"font-size\\\":\\\"1em\\\",\\\"cursor\\\":\\\"pointer\\\",\\\"border-top-left-radius\\\":\\\"10px !important\\\",\\\"border-top-right-radius\\\":\\\"10px !important\\\",\\\"border-bottom-right-radius\\\":\\\"10px !important\\\",\\\"border-bottom-left-radius\\\":\\\"10px !important\\\"}},{\\\"selectors\\\":[],\\\"selectorsAdd\\\":\\\"body\\\",\\\"style\\\":{\\\"background-color\\\":\\\"rgb(255, 255, 255)\\\"}},{\\\"selectors\\\":[],\\\"selectorsAdd\\\":\\\"*\\\",\\\"style\\\":{\\\"box-sizing\\\":\\\"border-box\\\"}},{\\\"selectors\\\":[],\\\"selectorsAdd\\\":\\\"body\\\",\\\"style\\\":{\\\"margin-top\\\":\\\"0px\\\",\\\"margin-right\\\":\\\"0px\\\",\\\"margin-bottom\\\":\\\"0px\\\",\\\"margin-left\\\":\\\"0px\\\"}},{\\\"selectors\\\":[],\\\"selectorsAdd\\\":\\\"0%\\\",\\\"style\\\":{\\\"opacity\\\":\\\"0\\\"},\\\"mediaText\\\":\\\"fadeEffect\\\",\\\"atRuleType\\\":\\\"keyframes\\\"},{\\\"selectors\\\":[],\\\"selectorsAdd\\\":\\\"100%\\\",\\\"style\\\":{\\\"opacity\\\":\\\"1\\\"},\\\"mediaText\\\":\\\"fadeEffect\\\",\\\"atRuleType\\\":\\\"keyframes\\\"}]\"}",
      "created_by": 6517,
      "created_at": "2020-06-22T04:56:15.09974Z",
      "updated_by": 6517,
      "updated_at": "2020-06-22T04:56:15.099712Z",
      "script": "\u003cscript type='text/javascript' src='https://avalon-dev.deskera.xyz/assets/dtpscript.js?f=27'\u003e\u003c/script\u003e",
      "submitted_forms_count": 0
    }
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [FormResponse](#FormResponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Update Form

Update Form

##### Description:

Update Form

#### PUT
#### /v1/crm/campaign/assets/forms/{id}


##### Request URL

```java
https://bifrost.deskera.com/v1/crm/campaign/assets/forms/27
```

##### Curl

```java
curl -X PUT "https://bifrost.deskera.com/v1/crm/campaign/assets/forms/27" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"name\": \"Test Form Template updated\", \"raw\": \"<form class=\"form\"><div class=\"form-group\"><label class=\"label\">Name</label><input placeholder=\"Typehereyourname\" class=\"input\"/></div><div class=\"form-group\"><label class=\"label\">Email</label><input type=\"email\" placeholder=\"Typehereyouremail\" class=\"input\"/></div><div class=\"form-group\"><label class=\"label\">Gender</label><input type=\"checkbox\" value=\"M\" class=\"checkbox\"/><label class=\"checkbox-label\">M</label><input type=\"checkbox\" value=\"F\" class=\"checkbox\"/><label class=\"checkbox-label\">F</label></div><div class=\"form-group\"><label class=\"label\">Message</label><textarea class=\"textarea\"></textarea></div><div class=\"form-group\"><button type=\"submit\" class=\"button\">Send</button></div></form><style>* { box-sizing: border-box; } body {margin: 0;}.form{border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding-top:10px;padding-right:15px;padding-bottom:10px;padding-left:15px;font-family:-apple-system, BlinkMacSystemFont, \"SegoeUI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"HelveticaNeue\", sans-serif;}.input{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.textarea{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.label{width:100%;display:block;}.button{width:100%;margin-top:15px;margin-right:0px;margin-bottom:15px;margin-left:0px;background-color:rgb(0, 119, 255);border-top-width:initial;border-right-width:initial;border-bottom-width:initial;border-left-width:initial;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:initial;border-right-color:initial;border-bottom-color:initial;border-left-color:initial;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;color:rgb(255, 255, 255);padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;font-size:1em;cursor:pointer;border-top-left-radius:10px !important;border-top-right-radius:10px !important;border-bottom-right-radius:10px !important;border-bottom-left-radius:10px !important;}body{background-color:rgb(255, 255, 255);}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}@keyframes fadeEffect{0%{opacity:0;}100%{opacity:1;}}</style>\", \"template\": \"{\"html\":\"<form class=\\\"form\\\"><div class=\\\"form-group\\\"><label class=\\\"label\\\">Name</label><input placeholder=\\\"Type here your name\\\" class=\\\"input\\\"/></div><div class=\\\"form-group\\\"><label class=\\\"label\\\">Email</label><input type=\\\"email\\\" placeholder=\\\"Type here your email\\\" class=\\\"input\\\"/></div><div class=\\\"form-group\\\"><label class=\\\"label\\\">Gender</label><input type=\\\"checkbox\\\" value=\\\"M\\\" class=\\\"checkbox\\\"/><label class=\\\"checkbox-label\\\">M</label><input type=\\\"checkbox\\\" value=\\\"F\\\" class=\\\"checkbox\\\"/><label class=\\\"checkbox-label\\\">F</label></div><div class=\\\"form-group\\\"><label class=\\\"label\\\">Message</label><textarea class=\\\"textarea\\\"></textarea></div><div class=\\\"form-group\\\"><button type=\\\"submit\\\" class=\\\"button\\\">Send</button></div></form>\",\"components\":\"[{\\\"tagName\\\":\\\"form\\\",\\\"type\\\":\\\"form\\\",\\\"status\\\":\\\"hovered\\\",\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form\\\",\\\"label\\\":\\\"form\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form-group\\\",\\\"label\\\":\\\"form-group\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"Name\\\",\\\"classes\\\":[{\\\"name\\\":\\\"label\\\",\\\"label\\\":\\\"label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]},{\\\"type\\\":\\\"input\\\",\\\"void\\\":true,\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"input\\\",\\\"label\\\":\\\"input\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"attributes\\\":{\\\"placeholder\\\":\\\"Type here your name\\\"}}]},{\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form-group\\\",\\\"label\\\":\\\"form-group\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"Email\\\",\\\"classes\\\":[{\\\"name\\\":\\\"label\\\",\\\"label\\\":\\\"label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]},{\\\"type\\\":\\\"input\\\",\\\"void\\\":true,\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"input\\\",\\\"label\\\":\\\"input\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"attributes\\\":{\\\"type\\\":\\\"email\\\",\\\"placeholder\\\":\\\"Type here your email\\\"}}]},{\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form-group\\\",\\\"label\\\":\\\"form-group\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"Gender\\\",\\\"classes\\\":[{\\\"name\\\":\\\"label\\\",\\\"label\\\":\\\"label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]},{\\\"type\\\":\\\"checkbox\\\",\\\"void\\\":true,\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"checkbox\\\",\\\"label\\\":\\\"checkbox\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"attributes\\\":{\\\"type\\\":\\\"checkbox\\\",\\\"value\\\":\\\"M\\\"}},{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"M\\\",\\\"classes\\\":[{\\\"name\\\":\\\"checkbox-label\\\",\\\"label\\\":\\\"checkbox-label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]},{\\\"type\\\":\\\"checkbox\\\",\\\"void\\\":true,\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"checkbox\\\",\\\"label\\\":\\\"checkbox\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"attributes\\\":{\\\"type\\\":\\\"checkbox\\\",\\\"value\\\":\\\"F\\\"}},{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"F\\\",\\\"classes\\\":[{\\\"name\\\":\\\"checkbox-label\\\",\\\"label\\\":\\\"checkbox-label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]}]},{\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form-group\\\",\\\"label\\\":\\\"form-group\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"type\\\":\\\"label\\\",\\\"content\\\":\\\"Message\\\",\\\"classes\\\":[{\\\"name\\\":\\\"label\\\",\\\"label\\\":\\\"label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]},{\\\"type\\\":\\\"textarea\\\",\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"textarea\\\",\\\"label\\\":\\\"textarea\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}]}]},{\\\"content\\\":\\\"\\\",\\\"classes\\\":[{\\\"name\\\":\\\"form-group\\\",\\\"label\\\":\\\"form-group\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"components\\\":[{\\\"type\\\":\\\"button\\\",\\\"status\\\":\\\"selected\\\",\\\"content\\\":\\\"Send\\\",\\\"classes\\\":[{\\\"name\\\":\\\"button\\\",\\\"label\\\":\\\"button\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"attributes\\\":{\\\"type\\\":\\\"submit\\\"}}],\\\"open\\\":1}],\\\"open\\\":1}]\",\"assets\":\"[]\",\"css\":\"* { box-sizing: border-box; } body {margin: 0;}.form{border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding-top:10px;padding-right:15px;padding-bottom:10px;padding-left:15px;font-family:-apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \\\"Helvetica Neue\\\", sans-serif;}.input{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.textarea{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.label{width:100%;display:block;}.button{width:100%;margin-top:15px;margin-right:0px;margin-bottom:15px;margin-left:0px;background-color:rgb(0, 119, 255);border-top-width:initial;border-right-width:initial;border-bottom-width:initial;border-left-width:initial;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:initial;border-right-color:initial;border-bottom-color:initial;border-left-color:initial;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;color:rgb(255, 255, 255);padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;font-size:1em;cursor:pointer;border-top-left-radius:10px !important;border-top-right-radius:10px !important;border-bottom-right-radius:10px !important;border-bottom-left-radius:10px !important;}body{background-color:rgb(255, 255, 255);}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}@keyframes fadeEffect{0%{opacity:0;}100%{opacity:1;}}\",\"styles\":\"[{\\\"selectors\\\":[{\\\"name\\\":\\\"form\\\",\\\"label\\\":\\\"form\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"style\\\":{\\\"border-top-left-radius\\\":\\\"3px\\\",\\\"border-top-right-radius\\\":\\\"3px\\\",\\\"border-bottom-right-radius\\\":\\\"3px\\\",\\\"border-bottom-left-radius\\\":\\\"3px\\\",\\\"padding-top\\\":\\\"10px\\\",\\\"padding-right\\\":\\\"15px\\\",\\\"padding-bottom\\\":\\\"10px\\\",\\\"padding-left\\\":\\\"15px\\\",\\\"font-family\\\":\\\"-apple-system, BlinkMacSystemFont, \\\\\\\"Segoe UI\\\\\\\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \\\\\\\"Helvetica Neue\\\\\\\", sans-serif\\\"}},{\\\"selectors\\\":[{\\\"name\\\":\\\"input\\\",\\\"label\\\":\\\"input\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"style\\\":{\\\"width\\\":\\\"100%\\\",\\\"margin-bottom\\\":\\\"15px\\\",\\\"padding-top\\\":\\\"7px\\\",\\\"padding-right\\\":\\\"10px\\\",\\\"padding-bottom\\\":\\\"7px\\\",\\\"padding-left\\\":\\\"10px\\\",\\\"border-top-left-radius\\\":\\\"2px\\\",\\\"border-top-right-radius\\\":\\\"2px\\\",\\\"border-bottom-right-radius\\\":\\\"2px\\\",\\\"border-bottom-left-radius\\\":\\\"2px\\\",\\\"color\\\":\\\"rgb(73, 80, 87)\\\",\\\"border-top-width\\\":\\\"1px !important\\\",\\\"border-right-width\\\":\\\"1px !important\\\",\\\"border-bottom-width\\\":\\\"1px !important\\\",\\\"border-left-width\\\":\\\"1px !important\\\",\\\"border-top-style\\\":\\\"solid !important\\\",\\\"border-right-style\\\":\\\"solid !important\\\",\\\"border-bottom-style\\\":\\\"solid !important\\\",\\\"border-left-style\\\":\\\"solid !important\\\",\\\"border-top-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-right-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-bottom-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-left-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-image-source\\\":\\\"initial !important\\\",\\\"border-image-slice\\\":\\\"initial !important\\\",\\\"border-image-width\\\":\\\"initial !important\\\",\\\"border-image-outset\\\":\\\"initial !important\\\",\\\"border-image-repeat\\\":\\\"initial !important\\\"}},{\\\"selectors\\\":[{\\\"name\\\":\\\"textarea\\\",\\\"label\\\":\\\"textarea\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"style\\\":{\\\"width\\\":\\\"100%\\\",\\\"margin-bottom\\\":\\\"15px\\\",\\\"padding-top\\\":\\\"7px\\\",\\\"padding-right\\\":\\\"10px\\\",\\\"padding-bottom\\\":\\\"7px\\\",\\\"padding-left\\\":\\\"10px\\\",\\\"border-top-left-radius\\\":\\\"2px\\\",\\\"border-top-right-radius\\\":\\\"2px\\\",\\\"border-bottom-right-radius\\\":\\\"2px\\\",\\\"border-bottom-left-radius\\\":\\\"2px\\\",\\\"color\\\":\\\"rgb(73, 80, 87)\\\",\\\"border-top-width\\\":\\\"1px !important\\\",\\\"border-right-width\\\":\\\"1px !important\\\",\\\"border-bottom-width\\\":\\\"1px !important\\\",\\\"border-left-width\\\":\\\"1px !important\\\",\\\"border-top-style\\\":\\\"solid !important\\\",\\\"border-right-style\\\":\\\"solid !important\\\",\\\"border-bottom-style\\\":\\\"solid !important\\\",\\\"border-left-style\\\":\\\"solid !important\\\",\\\"border-top-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-right-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-bottom-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-left-color\\\":\\\"rgb(221, 227, 236) !important\\\",\\\"border-image-source\\\":\\\"initial !important\\\",\\\"border-image-slice\\\":\\\"initial !important\\\",\\\"border-image-width\\\":\\\"initial !important\\\",\\\"border-image-outset\\\":\\\"initial !important\\\",\\\"border-image-repeat\\\":\\\"initial !important\\\"}},{\\\"selectors\\\":[{\\\"name\\\":\\\"label\\\",\\\"label\\\":\\\"label\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"style\\\":{\\\"width\\\":\\\"100%\\\",\\\"display\\\":\\\"block\\\"}},{\\\"selectors\\\":[{\\\"name\\\":\\\"button\\\",\\\"label\\\":\\\"button\\\",\\\"type\\\":1,\\\"active\\\":true,\\\"private\\\":false,\\\"protected\\\":false}],\\\"style\\\":{\\\"width\\\":\\\"100%\\\",\\\"margin-top\\\":\\\"15px\\\",\\\"margin-right\\\":\\\"0px\\\",\\\"margin-bottom\\\":\\\"15px\\\",\\\"margin-left\\\":\\\"0px\\\",\\\"background-color\\\":\\\"rgb(0, 119, 255)\\\",\\\"border-top-width\\\":\\\"initial\\\",\\\"border-right-width\\\":\\\"initial\\\",\\\"border-bottom-width\\\":\\\"initial\\\",\\\"border-left-width\\\":\\\"initial\\\",\\\"border-top-style\\\":\\\"none\\\",\\\"border-right-style\\\":\\\"none\\\",\\\"border-bottom-style\\\":\\\"none\\\",\\\"border-left-style\\\":\\\"none\\\",\\\"border-top-color\\\":\\\"initial\\\",\\\"border-right-color\\\":\\\"initial\\\",\\\"border-bottom-color\\\":\\\"initial\\\",\\\"border-left-color\\\":\\\"initial\\\",\\\"border-image-source\\\":\\\"initial\\\",\\\"border-image-slice\\\":\\\"initial\\\",\\\"border-image-width\\\":\\\"initial\\\",\\\"border-image-outset\\\":\\\"initial\\\",\\\"border-image-repeat\\\":\\\"initial\\\",\\\"color\\\":\\\"rgb(255, 255, 255)\\\",\\\"padding-top\\\":\\\"7px\\\",\\\"padding-right\\\":\\\"10px\\\",\\\"padding-bottom\\\":\\\"7px\\\",\\\"padding-left\\\":\\\"10px\\\",\\\"font-size\\\":\\\"1em\\\",\\\"cursor\\\":\\\"pointer\\\",\\\"border-top-left-radius\\\":\\\"10px !important\\\",\\\"border-top-right-radius\\\":\\\"10px !important\\\",\\\"border-bottom-right-radius\\\":\\\"10px !important\\\",\\\"border-bottom-left-radius\\\":\\\"10px !important\\\"}},{\\\"selectors\\\":[],\\\"selectorsAdd\\\":\\\"body\\\",\\\"style\\\":{\\\"background-color\\\":\\\"rgb(255, 255, 255)\\\"}},{\\\"selectors\\\":[],\\\"selectorsAdd\\\":\\\"*\\\",\\\"style\\\":{\\\"box-sizing\\\":\\\"border-box\\\"}},{\\\"selectors\\\":[],\\\"selectorsAdd\\\":\\\"body\\\",\\\"style\\\":{\\\"margin-top\\\":\\\"0px\\\",\\\"margin-right\\\":\\\"0px\\\",\\\"margin-bottom\\\":\\\"0px\\\",\\\"margin-left\\\":\\\"0px\\\"}},{\\\"selectors\\\":[],\\\"selectorsAdd\\\":\\\"0%\\\",\\\"style\\\":{\\\"opacity\\\":\\\"0\\\"},\\\"mediaText\\\":\\\"fadeEffect\\\",\\\"atRuleType\\\":\\\"keyframes\\\"},{\\\"selectors\\\":[],\\\"selectorsAdd\\\":\\\"100%\\\",\\\"style\\\":{\\\"opacity\\\":\\\"1\\\"},\\\"mediaText\\\":\\\"fadeEffect\\\",\\\"atRuleType\\\":\\\"keyframes\\\"}]\"}\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Form ID | Yes | integer |
| form | body | Update Form | Yes | [FormRequest](#FormRequest) |


##### Sample Request
```java
{
  "name": "Test Form Template updated",
  "raw": "<form class="form"><div class="form-group"><label class="label">Name</label><input placeholder="Typehereyourname" class="input"/></div><div class="form-group"><label class="label">Email</label><input type="email" placeholder="Typehereyouremail" class="input"/></div><div class="form-group"><label class="label">Gender</label><input type="checkbox" value="M" class="checkbox"/><label class="checkbox-label">M</label><input type="checkbox" value="F" class="checkbox"/><label class="checkbox-label">F</label></div><div class="form-group"><label class="label">Message</label><textarea class="textarea"></textarea></div><div class="form-group"><button type="submit" class="button">Send</button></div></form><style>* { box-sizing: border-box; } body {margin: 0;}.form{border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding-top:10px;padding-right:15px;padding-bottom:10px;padding-left:15px;font-family:-apple-system, BlinkMacSystemFont, "SegoeUI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "HelveticaNeue", sans-serif;}.input{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.textarea{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.label{width:100%;display:block;}.button{width:100%;margin-top:15px;margin-right:0px;margin-bottom:15px;margin-left:0px;background-color:rgb(0, 119, 255);border-top-width:initial;border-right-width:initial;border-bottom-width:initial;border-left-width:initial;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:initial;border-right-color:initial;border-bottom-color:initial;border-left-color:initial;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;color:rgb(255, 255, 255);padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;font-size:1em;cursor:pointer;border-top-left-radius:10px !important;border-top-right-radius:10px !important;border-bottom-right-radius:10px !important;border-bottom-left-radius:10px !important;}body{background-color:rgb(255, 255, 255);}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}@keyframes fadeEffect{0%{opacity:0;}100%{opacity:1;}}</style>",
  "template": "{"html":"<form class=\"form\"><div class=\"form-group\"><label class=\"label\">Name</label><input placeholder=\"Type here your name\" class=\"input\"/></div><div class=\"form-group\"><label class=\"label\">Email</label><input type=\"email\" placeholder=\"Type here your email\" class=\"input\"/></div><div class=\"form-group\"><label class=\"label\">Gender</label><input type=\"checkbox\" value=\"M\" class=\"checkbox\"/><label class=\"checkbox-label\">M</label><input type=\"checkbox\" value=\"F\" class=\"checkbox\"/><label class=\"checkbox-label\">F</label></div><div class=\"form-group\"><label class=\"label\">Message</label><textarea class=\"textarea\"></textarea></div><div class=\"form-group\"><button type=\"submit\" class=\"button\">Send</button></div></form>","components":"[{\"tagName\":\"form\",\"type\":\"form\",\"status\":\"hovered\",\"content\":\"\",\"classes\":[{\"name\":\"form\",\"label\":\"form\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"components\":[{\"content\":\"\",\"classes\":[{\"name\":\"form-group\",\"label\":\"form-group\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"components\":[{\"type\":\"label\",\"content\":\"Name\",\"classes\":[{\"name\":\"label\",\"label\":\"label\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}]},{\"type\":\"input\",\"void\":true,\"content\":\"\",\"classes\":[{\"name\":\"input\",\"label\":\"input\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"attributes\":{\"placeholder\":\"Type here your name\"}}]},{\"content\":\"\",\"classes\":[{\"name\":\"form-group\",\"label\":\"form-group\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"components\":[{\"type\":\"label\",\"content\":\"Email\",\"classes\":[{\"name\":\"label\",\"label\":\"label\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}]},{\"type\":\"input\",\"void\":true,\"content\":\"\",\"classes\":[{\"name\":\"input\",\"label\":\"input\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"attributes\":{\"type\":\"email\",\"placeholder\":\"Type here your email\"}}]},{\"content\":\"\",\"classes\":[{\"name\":\"form-group\",\"label\":\"form-group\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"components\":[{\"type\":\"label\",\"content\":\"Gender\",\"classes\":[{\"name\":\"label\",\"label\":\"label\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}]},{\"type\":\"checkbox\",\"void\":true,\"content\":\"\",\"classes\":[{\"name\":\"checkbox\",\"label\":\"checkbox\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"attributes\":{\"type\":\"checkbox\",\"value\":\"M\"}},{\"type\":\"label\",\"content\":\"M\",\"classes\":[{\"name\":\"checkbox-label\",\"label\":\"checkbox-label\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}]},{\"type\":\"checkbox\",\"void\":true,\"content\":\"\",\"classes\":[{\"name\":\"checkbox\",\"label\":\"checkbox\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"attributes\":{\"type\":\"checkbox\",\"value\":\"F\"}},{\"type\":\"label\",\"content\":\"F\",\"classes\":[{\"name\":\"checkbox-label\",\"label\":\"checkbox-label\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}]}]},{\"content\":\"\",\"classes\":[{\"name\":\"form-group\",\"label\":\"form-group\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"components\":[{\"type\":\"label\",\"content\":\"Message\",\"classes\":[{\"name\":\"label\",\"label\":\"label\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}]},{\"type\":\"textarea\",\"content\":\"\",\"classes\":[{\"name\":\"textarea\",\"label\":\"textarea\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}]}]},{\"content\":\"\",\"classes\":[{\"name\":\"form-group\",\"label\":\"form-group\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"components\":[{\"type\":\"button\",\"status\":\"selected\",\"content\":\"Send\",\"classes\":[{\"name\":\"button\",\"label\":\"button\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"attributes\":{\"type\":\"submit\"}}],\"open\":1}],\"open\":1}]","assets":"[]","css":"* { box-sizing: border-box; } body {margin: 0;}.form{border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding-top:10px;padding-right:15px;padding-bottom:10px;padding-left:15px;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;}.input{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.textarea{width:100%;margin-bottom:15px;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;color:rgb(73, 80, 87);border-top-width:1px !important;border-right-width:1px !important;border-bottom-width:1px !important;border-left-width:1px !important;border-top-style:solid !important;border-right-style:solid !important;border-bottom-style:solid !important;border-left-style:solid !important;border-top-color:rgb(221, 227, 236) !important;border-right-color:rgb(221, 227, 236) !important;border-bottom-color:rgb(221, 227, 236) !important;border-left-color:rgb(221, 227, 236) !important;border-image-source:initial !important;border-image-slice:initial !important;border-image-width:initial !important;border-image-outset:initial !important;border-image-repeat:initial !important;}.label{width:100%;display:block;}.button{width:100%;margin-top:15px;margin-right:0px;margin-bottom:15px;margin-left:0px;background-color:rgb(0, 119, 255);border-top-width:initial;border-right-width:initial;border-bottom-width:initial;border-left-width:initial;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:initial;border-right-color:initial;border-bottom-color:initial;border-left-color:initial;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;color:rgb(255, 255, 255);padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;font-size:1em;cursor:pointer;border-top-left-radius:10px !important;border-top-right-radius:10px !important;border-bottom-right-radius:10px !important;border-bottom-left-radius:10px !important;}body{background-color:rgb(255, 255, 255);}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}@keyframes fadeEffect{0%{opacity:0;}100%{opacity:1;}}","styles":"[{\"selectors\":[{\"name\":\"form\",\"label\":\"form\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"border-top-left-radius\":\"3px\",\"border-top-right-radius\":\"3px\",\"border-bottom-right-radius\":\"3px\",\"border-bottom-left-radius\":\"3px\",\"padding-top\":\"10px\",\"padding-right\":\"15px\",\"padding-bottom\":\"10px\",\"padding-left\":\"15px\",\"font-family\":\"-apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \\\"Helvetica Neue\\\", sans-serif\"}},{\"selectors\":[{\"name\":\"input\",\"label\":\"input\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"width\":\"100%\",\"margin-bottom\":\"15px\",\"padding-top\":\"7px\",\"padding-right\":\"10px\",\"padding-bottom\":\"7px\",\"padding-left\":\"10px\",\"border-top-left-radius\":\"2px\",\"border-top-right-radius\":\"2px\",\"border-bottom-right-radius\":\"2px\",\"border-bottom-left-radius\":\"2px\",\"color\":\"rgb(73, 80, 87)\",\"border-top-width\":\"1px !important\",\"border-right-width\":\"1px !important\",\"border-bottom-width\":\"1px !important\",\"border-left-width\":\"1px !important\",\"border-top-style\":\"solid !important\",\"border-right-style\":\"solid !important\",\"border-bottom-style\":\"solid !important\",\"border-left-style\":\"solid !important\",\"border-top-color\":\"rgb(221, 227, 236) !important\",\"border-right-color\":\"rgb(221, 227, 236) !important\",\"border-bottom-color\":\"rgb(221, 227, 236) !important\",\"border-left-color\":\"rgb(221, 227, 236) !important\",\"border-image-source\":\"initial !important\",\"border-image-slice\":\"initial !important\",\"border-image-width\":\"initial !important\",\"border-image-outset\":\"initial !important\",\"border-image-repeat\":\"initial !important\"}},{\"selectors\":[{\"name\":\"textarea\",\"label\":\"textarea\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"width\":\"100%\",\"margin-bottom\":\"15px\",\"padding-top\":\"7px\",\"padding-right\":\"10px\",\"padding-bottom\":\"7px\",\"padding-left\":\"10px\",\"border-top-left-radius\":\"2px\",\"border-top-right-radius\":\"2px\",\"border-bottom-right-radius\":\"2px\",\"border-bottom-left-radius\":\"2px\",\"color\":\"rgb(73, 80, 87)\",\"border-top-width\":\"1px !important\",\"border-right-width\":\"1px !important\",\"border-bottom-width\":\"1px !important\",\"border-left-width\":\"1px !important\",\"border-top-style\":\"solid !important\",\"border-right-style\":\"solid !important\",\"border-bottom-style\":\"solid !important\",\"border-left-style\":\"solid !important\",\"border-top-color\":\"rgb(221, 227, 236) !important\",\"border-right-color\":\"rgb(221, 227, 236) !important\",\"border-bottom-color\":\"rgb(221, 227, 236) !important\",\"border-left-color\":\"rgb(221, 227, 236) !important\",\"border-image-source\":\"initial !important\",\"border-image-slice\":\"initial !important\",\"border-image-width\":\"initial !important\",\"border-image-outset\":\"initial !important\",\"border-image-repeat\":\"initial !important\"}},{\"selectors\":[{\"name\":\"label\",\"label\":\"label\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"width\":\"100%\",\"display\":\"block\"}},{\"selectors\":[{\"name\":\"button\",\"label\":\"button\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"width\":\"100%\",\"margin-top\":\"15px\",\"margin-right\":\"0px\",\"margin-bottom\":\"15px\",\"margin-left\":\"0px\",\"background-color\":\"rgb(0, 119, 255)\",\"border-top-width\":\"initial\",\"border-right-width\":\"initial\",\"border-bottom-width\":\"initial\",\"border-left-width\":\"initial\",\"border-top-style\":\"none\",\"border-right-style\":\"none\",\"border-bottom-style\":\"none\",\"border-left-style\":\"none\",\"border-top-color\":\"initial\",\"border-right-color\":\"initial\",\"border-bottom-color\":\"initial\",\"border-left-color\":\"initial\",\"border-image-source\":\"initial\",\"border-image-slice\":\"initial\",\"border-image-width\":\"initial\",\"border-image-outset\":\"initial\",\"border-image-repeat\":\"initial\",\"color\":\"rgb(255, 255, 255)\",\"padding-top\":\"7px\",\"padding-right\":\"10px\",\"padding-bottom\":\"7px\",\"padding-left\":\"10px\",\"font-size\":\"1em\",\"cursor\":\"pointer\",\"border-top-left-radius\":\"10px !important\",\"border-top-right-radius\":\"10px !important\",\"border-bottom-right-radius\":\"10px !important\",\"border-bottom-left-radius\":\"10px !important\"}},{\"selectors\":[],\"selectorsAdd\":\"body\",\"style\":{\"background-color\":\"rgb(255, 255, 255)\"}},{\"selectors\":[],\"selectorsAdd\":\"*\",\"style\":{\"box-sizing\":\"border-box\"}},{\"selectors\":[],\"selectorsAdd\":\"body\",\"style\":{\"margin-top\":\"0px\",\"margin-right\":\"0px\",\"margin-bottom\":\"0px\",\"margin-left\":\"0px\"}},{\"selectors\":[],\"selectorsAdd\":\"0%\",\"style\":{\"opacity\":\"0\"},\"mediaText\":\"fadeEffect\",\"atRuleType\":\"keyframes\"},{\"selectors\":[],\"selectorsAdd\":\"100%\",\"style\":{\"opacity\":\"1\"},\"mediaText\":\"fadeEffect\",\"atRuleType\":\"keyframes\"}]"}"
}
```

##### Sample Response
```java
{
    "Success":true,
    "Id":27
}
```


##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [CUDRecordResponse](#CUDRecordResponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |


### Get Categories

Show all Categories

##### Description:

Get all Categories

#### GET
#### /v1/crm/campaign/category

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/campaign/category?type=CAMPAIGN
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/crm/campaign/category?type=CAMPAIGN" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query |  | No | integer |
| page | query |  | No | integer |
| search | query |  | No | string |
| name | query |  | No | string |
| type | query |  | No | string |

##### Sample Response
```java
{
  "data": [
    {
      "id": 25,
      "name": "1",
      "description": "",
      "category_type": "CAMPAIGN",
      "color": "",
      "is_published": true,
      "owner_id": 17828
    },
    {
      "id": 27,
      "name": "2",
      "description": "",
      "category_type": "CAMPAIGN",
      "color": "",
      "is_published": true,
      "owner_id": 17828
    },
    {
      "id": 28,
      "name": "Mark",
      "description": "",
      "category_type": "CAMPAIGN",
      "color": "",
      "is_published": true,
      "owner_id": 17828
    }
  ],
  "page": 1,
  "number_of_elements": 0,
  "size_per_page": 10,
  "total_pages": 1,
  "number_of_records": 3
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [CategoryResponse](#CategoryResponse) ] |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Create Category

Create Category

##### Description:

Add New Category

#### POST
#### /v1/crm/campaign/category

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/campaign/category
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/crm/campaign/category" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"campaignCategoryTitle\": \"Test category\", \"campaignCategoryDescription\": \"Test Description\", \"publish\": false, \"campaignCategoryAlias\": \"\", \"name\": \"Test category\", \"description\": \"Test Description\", \"is_published\": false, \"category_type\": \"CAMPAIGN\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| category | body | Create Category | Yes | [CategoryRequest](#CategoryRequest) |

##### Sample Request
```java
{
    "campaignCategoryTitle": "Test category",
    "campaignCategoryDescription": "Test Description",
    "publish": false,
    "campaignCategoryAlias": "",
    "name": "Test category",
    "description": "Test Description",
    "is_published": false,
    "category_type": "CAMPAIGN"
}
```

##### Sample Response
```java
{
    "id":35
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 201 | Created | [CreateResponse](#CreateResponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Delete Category

Delete Category

##### Description:

Delete Category

#### DELETE
#### /v1/crm/campaign/category/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/campaign/category/1
```

##### Curl

```java
curl -X DELETE "https://bifrost.deskera.com/v1/crm/campaign/category/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Category ID | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Get Category by Id

Get Category By Id

##### Description:

Get Category By Id

#### GET
#### /v1/crm/campaign/category/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/campaign/category/25
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/crm/campaign/category/25" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Category ID | Yes | integer |

##### Sample Response
```java
{
    "id": 25,
    "name": "1",
    "description": "",
    "category_type": "CAMPAIGN",
    "color": "",
    "is_published": true,
    "owner_id": 17828
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [CategoryResponse](#CategoryResponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Update Category

Update Category

##### Description:

Update Category

#### PATCH
#### /v1/crm/campaign/category/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/campaign/category/1
```

##### Curl

```java
curl -X PATCH "https://bifrost.deskera.com/v1/crm/campaign/category/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"campaignCategoryTitle\": \"Test category updated\", \"campaignCategoryDescription\": \"Test Description\", \"publish\": false, \"campaignCategoryAlias\": \"\", \"name\": \"Test category\", \"description\": \"Test Description\", \"is_published\": false, \"category_type\": \"CAMPAIGN\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Category ID | Yes | integer |
| Category | body | Update Category | Yes | [CategoryRequest](#CategoryRequest) |

##### Sample Request
```java
{
    "campaignCategoryTitle": "Test category updated",
    "campaignCategoryDescription": "Test Description",
    "publish": false,
    "campaignCategoryAlias": "",
    "name": "Test category",
    "description": "Test Description",
    "is_published": false,
    "category_type": "CAMPAIGN"
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Get Email-templates

Show all EmailTemplates

##### Description:

Get all EmailTemplates

#### GET
#### /v1/crm/campaign/email-templates

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/campaign/email-templates?default=true&pageSize=15&limit=15&page=1
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/crm/campaign/email-templates?default=true&pageSize=15&limit=15&page=1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query |  | No | integer |
| page | query |  | No | integer |
| search | query |  | No | string |
| category_id | query |  | No | integer |
| default | query |  | No | boolean |
| my_template | query |  | No | boolean |
| ownerId | query |  | No | integer |

##### Sample Response
```java
{
  "data": [
    {
      "id": 18,
      "name": "Order shipped",
      "image": "https://s3.ap-southeast-1.amazonaws.com/cdn-crm-qa.deskera.xyz/campaign-poc/email-templates/0/18/content.png",
      "category": {
        "id": 1,
        "name": "Uncategorized",
        "description": "Uncategorized",
        "category_type": "Uncategorized",
        "color": "",
        "is_published": true,
        "owner_id": 0
      },
      "template_json": "",
      "owner_id": 0,
      "is_deleted": false,
      "tenant_id": 0,
      "created_by": 0,
      "created_at": "2020-06-02T02:17:34.652Z",
      "updated_by": 0,
      "updated_at": "2020-06-02T02:17:36.391Z"
    }
  ],
  "page": 1,
  "number_of_elements": 0,
  "size_per_page": 15,
  "total_pages": 2,
  "number_of_records": 29
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [EmailTemplateResponse](#EmailTemplateResponse) ] |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Create Email-template

Create EmailTemplate

##### Description:

Add New EmailTemplate

#### POST
#### /v1/crm/campaign/email-templates

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/campaign/email-templates
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/crm/campaign/email-templates" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"category_id\": 26, \"image\": \"\", \"name\": \"Test email Template\", \"template_html\": \"<table id=\"igib\" style=\"box-sizing: border-box;height: 150px;margin: 0auto10pxauto;padding: 5px5px5px5px;width: 100%;\" width=\"100%\" height=\"150\"><tbody style=\"box-sizing: border-box;\"><tr id=\"ihrc\" style=\"box-sizing: border-box;\"><td id=\"ivco9\" style=\"box-sizing: border-box;padding: 0;margin: 0;vertical-align: top;\" valign=\"top\"></td></tr></tbody></table>\", \"template_json\": \"%7B%22html%22:%22%3Ctable%20id=%5C%22igib%5C%22%3E%3Ctbody%3E%3Ctr%20id=%5C%22ihrc%5C%22%3E%3Ctd%20id=%5C%22ivco9%5C%22%3E%3C/td%3E%3C/tr%3E%3C/tbody%3E%3C/table%3E%22,%22components%22:%22%5B%7B%5C%22type%5C%22:%5C%22table%5C%22,%5C%22content%5C%22:%5C%22%5C%22,%5C%22attributes%5C%22:%7B%5C%22id%5C%22:%5C%22igib%5C%22%7D,%5C%22components%5C%22:%5B%7B%5C%22type%5C%22:%5C%22tbody%5C%22,%5C%22content%5C%22:%5C%22%5C%22,%5C%22components%5C%22:%5B%7B%5C%22type%5C%22:%5C%22row%5C%22,%5C%22status%5C%22:%5C%22selected%5C%22,%5C%22content%5C%22:%5C%22%5C%22,%5C%22attributes%5C%22:%7B%5C%22id%5C%22:%5C%22ihrc%5C%22%7D,%5C%22components%5C%22:%5B%7B%5C%22type%5C%22:%5C%22cell%5C%22,%5C%22content%5C%22:%5C%22%5C%22,%5C%22attributes%5C%22:%7B%5C%22id%5C%22:%5C%22ivco9%5C%22%7D%7D%5D,%5C%22open%5C%22:0%7D%5D,%5C%22open%5C%22:1%7D%5D,%5C%22open%5C%22:1%7D%5D%22,%22assets%22:%22%5B%5D%22,%22css%22:%22*%20%7B%20box-sizing:%20border-box;%20%7D%20body%20%7Bmargin:%200;%7Dbody%7Bbackground-color:rgb(255,%20255,%20255);%7D*%7Bbox-sizing:border-box;%7Dbody%7Bmargin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;%7D#igib%7Bheight:150px;margin:0%20auto%2010px%20auto;padding:5px%205px%205px%205px;width:100%25;%7D#ivco9%7Bpadding:0;margin:0;vertical-align:top;%7D@keyframes%20fadeEffect%7B0%25%7Bopacity:0;%7D100%25%7Bopacity:1;%7D%7D%22,%22styles%22:%22%5B%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22form%5C%22,%5C%22label%5C%22:%5C%22form%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22border-top-left-radius%5C%22:%5C%223px%5C%22,%5C%22border-top-right-radius%5C%22:%5C%223px%5C%22,%5C%22border-bottom-right-radius%5C%22:%5C%223px%5C%22,%5C%22border-bottom-left-radius%5C%22:%5C%223px%5C%22,%5C%22padding-top%5C%22:%5C%2210px%5C%22,%5C%22padding-right%5C%22:%5C%2215px%5C%22,%5C%22padding-bottom%5C%22:%5C%2210px%5C%22,%5C%22padding-left%5C%22:%5C%2215px%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22input%5C%22,%5C%22label%5C%22:%5C%22input%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22width%5C%22:%5C%22100%25%5C%22,%5C%22margin-bottom%5C%22:%5C%2215px%5C%22,%5C%22padding-top%5C%22:%5C%227px%5C%22,%5C%22padding-right%5C%22:%5C%2210px%5C%22,%5C%22padding-bottom%5C%22:%5C%227px%5C%22,%5C%22padding-left%5C%22:%5C%2210px%5C%22,%5C%22border-top-left-radius%5C%22:%5C%222px%5C%22,%5C%22border-top-right-radius%5C%22:%5C%222px%5C%22,%5C%22border-bottom-right-radius%5C%22:%5C%222px%5C%22,%5C%22border-bottom-left-radius%5C%22:%5C%222px%5C%22,%5C%22color%5C%22:%5C%22rgb(73,%2080,%2087)%5C%22,%5C%22border-top-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-right-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-bottom-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-left-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-top-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-right-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-bottom-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-left-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-top-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-right-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-bottom-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-left-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-image-source%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-slice%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-width%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-outset%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-repeat%5C%22:%5C%22initial%20!important%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22textarea%5C%22,%5C%22label%5C%22:%5C%22textarea%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22width%5C%22:%5C%22100%25%5C%22,%5C%22margin-bottom%5C%22:%5C%2215px%5C%22,%5C%22padding-top%5C%22:%5C%227px%5C%22,%5C%22padding-right%5C%22:%5C%2210px%5C%22,%5C%22padding-bottom%5C%22:%5C%227px%5C%22,%5C%22padding-left%5C%22:%5C%2210px%5C%22,%5C%22border-top-left-radius%5C%22:%5C%222px%5C%22,%5C%22border-top-right-radius%5C%22:%5C%222px%5C%22,%5C%22border-bottom-right-radius%5C%22:%5C%222px%5C%22,%5C%22border-bottom-left-radius%5C%22:%5C%222px%5C%22,%5C%22color%5C%22:%5C%22rgb(73,%2080,%2087)%5C%22,%5C%22border-top-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-right-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-bottom-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-left-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-top-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-right-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-bottom-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-left-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-top-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-right-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-bottom-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-left-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-image-source%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-slice%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-width%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-outset%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-repeat%5C%22:%5C%22initial%20!important%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22label%5C%22,%5C%22label%5C%22:%5C%22label%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22width%5C%22:%5C%22100%25%5C%22,%5C%22display%5C%22:%5C%22block%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22button%5C%22,%5C%22label%5C%22:%5C%22button%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22width%5C%22:%5C%22100%25%5C%22,%5C%22margin-top%5C%22:%5C%2215px%5C%22,%5C%22margin-right%5C%22:%5C%220px%5C%22,%5C%22margin-bottom%5C%22:%5C%2215px%5C%22,%5C%22margin-left%5C%22:%5C%220px%5C%22,%5C%22background-color%5C%22:%5C%22rgb(0,%20119,%20255)%5C%22,%5C%22border-top-width%5C%22:%5C%22initial%5C%22,%5C%22border-right-width%5C%22:%5C%22initial%5C%22,%5C%22border-bottom-width%5C%22:%5C%22initial%5C%22,%5C%22border-left-width%5C%22:%5C%22initial%5C%22,%5C%22border-top-style%5C%22:%5C%22none%5C%22,%5C%22border-right-style%5C%22:%5C%22none%5C%22,%5C%22border-bottom-style%5C%22:%5C%22none%5C%22,%5C%22border-left-style%5C%22:%5C%22none%5C%22,%5C%22border-top-color%5C%22:%5C%22initial%5C%22,%5C%22border-right-color%5C%22:%5C%22initial%5C%22,%5C%22border-bottom-color%5C%22:%5C%22initial%5C%22,%5C%22border-left-color%5C%22:%5C%22initial%5C%22,%5C%22border-image-source%5C%22:%5C%22initial%5C%22,%5C%22border-image-slice%5C%22:%5C%22initial%5C%22,%5C%22border-image-width%5C%22:%5C%22initial%5C%22,%5C%22border-image-outset%5C%22:%5C%22initial%5C%22,%5C%22border-image-repeat%5C%22:%5C%22initial%5C%22,%5C%22color%5C%22:%5C%22rgb(255,%20255,%20255)%5C%22,%5C%22padding-top%5C%22:%5C%227px%5C%22,%5C%22padding-right%5C%22:%5C%2210px%5C%22,%5C%22padding-bottom%5C%22:%5C%227px%5C%22,%5C%22padding-left%5C%22:%5C%2210px%5C%22,%5C%22font-size%5C%22:%5C%221em%5C%22,%5C%22cursor%5C%22:%5C%22pointer%5C%22,%5C%22border-top-left-radius%5C%22:%5C%2210px%20!important%5C%22,%5C%22border-top-right-radius%5C%22:%5C%2210px%20!important%5C%22,%5C%22border-bottom-right-radius%5C%22:%5C%2210px%20!important%5C%22,%5C%22border-bottom-left-radius%5C%22:%5C%2210px%20!important%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%22body%5C%22,%5C%22style%5C%22:%7B%5C%22background-color%5C%22:%5C%22rgb(255,%20255,%20255)%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%22*%5C%22,%5C%22style%5C%22:%7B%5C%22box-sizing%5C%22:%5C%22border-box%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%22body%5C%22,%5C%22style%5C%22:%7B%5C%22margin-top%5C%22:%5C%220px%5C%22,%5C%22margin-right%5C%22:%5C%220px%5C%22,%5C%22margin-bottom%5C%22:%5C%220px%5C%22,%5C%22margin-left%5C%22:%5C%220px%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%220%25%5C%22,%5C%22style%5C%22:%7B%5C%22opacity%5C%22:%5C%220%5C%22%7D,%5C%22mediaText%5C%22:%5C%22fadeEffect%5C%22,%5C%22atRuleType%5C%22:%5C%22keyframes%5C%22%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%22100%25%5C%22,%5C%22style%5C%22:%7B%5C%22opacity%5C%22:%5C%221%5C%22%7D,%5C%22mediaText%5C%22:%5C%22fadeEffect%5C%22,%5C%22atRuleType%5C%22:%5C%22keyframes%5C%22%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22igib%5C%22,%5C%22label%5C%22:%5C%22igib%5C%22,%5C%22type%5C%22:2,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22height%5C%22:%5C%22150px%5C%22,%5C%22margin%5C%22:%5C%220%20auto%2010px%20auto%5C%22,%5C%22padding%5C%22:%5C%225px%205px%205px%205px%5C%22,%5C%22width%5C%22:%5C%22100%25%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22ivco9%5C%22,%5C%22label%5C%22:%5C%22ivco9%5C%22,%5C%22type%5C%22:2,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22padding%5C%22:%5C%220%5C%22,%5C%22margin%5C%22:%5C%220%5C%22,%5C%22vertical-align%5C%22:%5C%22top%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22ihrc%5C%22,%5C%22label%5C%22:%5C%22ihrc%5C%22,%5C%22type%5C%22:2,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D%7D%5D%22%7D\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| EmailTemplate | body | Create EmailTemplate | Yes | [EmailTemplateRequest](#EmailTemplateRequest) |

##### Sample Request
```java
{
  "category_id": 26,
  "image": "",
  "name": "Test email Template",
  "template_html": "<table id="igib" style="box-sizing: border-box;height: 150px;margin: 0auto10pxauto;padding: 5px5px5px5px;width: 100%;" width="100%" height="150"><tbody style="box-sizing: border-box;"><tr id="ihrc" style="box-sizing: border-box;"><td id="ivco9" style="box-sizing: border-box;padding: 0;margin: 0;vertical-align: top;" valign="top"></td></tr></tbody></table>",
  "template_json": "%7B%22html%22:%22%3Ctable%20id=%5C%22igib%5C%22%3E%3Ctbody%3E%3Ctr%20id=%5C%22ihrc%5C%22%3E%3Ctd%20id=%5C%22ivco9%5C%22%3E%3C/td%3E%3C/tr%3E%3C/tbody%3E%3C/table%3E%22,%22components%22:%22%5B%7B%5C%22type%5C%22:%5C%22table%5C%22,%5C%22content%5C%22:%5C%22%5C%22,%5C%22attributes%5C%22:%7B%5C%22id%5C%22:%5C%22igib%5C%22%7D,%5C%22components%5C%22:%5B%7B%5C%22type%5C%22:%5C%22tbody%5C%22,%5C%22content%5C%22:%5C%22%5C%22,%5C%22components%5C%22:%5B%7B%5C%22type%5C%22:%5C%22row%5C%22,%5C%22status%5C%22:%5C%22selected%5C%22,%5C%22content%5C%22:%5C%22%5C%22,%5C%22attributes%5C%22:%7B%5C%22id%5C%22:%5C%22ihrc%5C%22%7D,%5C%22components%5C%22:%5B%7B%5C%22type%5C%22:%5C%22cell%5C%22,%5C%22content%5C%22:%5C%22%5C%22,%5C%22attributes%5C%22:%7B%5C%22id%5C%22:%5C%22ivco9%5C%22%7D%7D%5D,%5C%22open%5C%22:0%7D%5D,%5C%22open%5C%22:1%7D%5D,%5C%22open%5C%22:1%7D%5D%22,%22assets%22:%22%5B%5D%22,%22css%22:%22*%20%7B%20box-sizing:%20border-box;%20%7D%20body%20%7Bmargin:%200;%7Dbody%7Bbackground-color:rgb(255,%20255,%20255);%7D*%7Bbox-sizing:border-box;%7Dbody%7Bmargin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;%7D#igib%7Bheight:150px;margin:0%20auto%2010px%20auto;padding:5px%205px%205px%205px;width:100%25;%7D#ivco9%7Bpadding:0;margin:0;vertical-align:top;%7D@keyframes%20fadeEffect%7B0%25%7Bopacity:0;%7D100%25%7Bopacity:1;%7D%7D%22,%22styles%22:%22%5B%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22form%5C%22,%5C%22label%5C%22:%5C%22form%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22border-top-left-radius%5C%22:%5C%223px%5C%22,%5C%22border-top-right-radius%5C%22:%5C%223px%5C%22,%5C%22border-bottom-right-radius%5C%22:%5C%223px%5C%22,%5C%22border-bottom-left-radius%5C%22:%5C%223px%5C%22,%5C%22padding-top%5C%22:%5C%2210px%5C%22,%5C%22padding-right%5C%22:%5C%2215px%5C%22,%5C%22padding-bottom%5C%22:%5C%2210px%5C%22,%5C%22padding-left%5C%22:%5C%2215px%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22input%5C%22,%5C%22label%5C%22:%5C%22input%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22width%5C%22:%5C%22100%25%5C%22,%5C%22margin-bottom%5C%22:%5C%2215px%5C%22,%5C%22padding-top%5C%22:%5C%227px%5C%22,%5C%22padding-right%5C%22:%5C%2210px%5C%22,%5C%22padding-bottom%5C%22:%5C%227px%5C%22,%5C%22padding-left%5C%22:%5C%2210px%5C%22,%5C%22border-top-left-radius%5C%22:%5C%222px%5C%22,%5C%22border-top-right-radius%5C%22:%5C%222px%5C%22,%5C%22border-bottom-right-radius%5C%22:%5C%222px%5C%22,%5C%22border-bottom-left-radius%5C%22:%5C%222px%5C%22,%5C%22color%5C%22:%5C%22rgb(73,%2080,%2087)%5C%22,%5C%22border-top-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-right-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-bottom-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-left-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-top-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-right-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-bottom-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-left-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-top-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-right-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-bottom-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-left-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-image-source%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-slice%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-width%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-outset%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-repeat%5C%22:%5C%22initial%20!important%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22textarea%5C%22,%5C%22label%5C%22:%5C%22textarea%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22width%5C%22:%5C%22100%25%5C%22,%5C%22margin-bottom%5C%22:%5C%2215px%5C%22,%5C%22padding-top%5C%22:%5C%227px%5C%22,%5C%22padding-right%5C%22:%5C%2210px%5C%22,%5C%22padding-bottom%5C%22:%5C%227px%5C%22,%5C%22padding-left%5C%22:%5C%2210px%5C%22,%5C%22border-top-left-radius%5C%22:%5C%222px%5C%22,%5C%22border-top-right-radius%5C%22:%5C%222px%5C%22,%5C%22border-bottom-right-radius%5C%22:%5C%222px%5C%22,%5C%22border-bottom-left-radius%5C%22:%5C%222px%5C%22,%5C%22color%5C%22:%5C%22rgb(73,%2080,%2087)%5C%22,%5C%22border-top-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-right-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-bottom-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-left-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-top-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-right-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-bottom-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-left-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-top-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-right-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-bottom-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-left-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-image-source%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-slice%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-width%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-outset%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-repeat%5C%22:%5C%22initial%20!important%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22label%5C%22,%5C%22label%5C%22:%5C%22label%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22width%5C%22:%5C%22100%25%5C%22,%5C%22display%5C%22:%5C%22block%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22button%5C%22,%5C%22label%5C%22:%5C%22button%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22width%5C%22:%5C%22100%25%5C%22,%5C%22margin-top%5C%22:%5C%2215px%5C%22,%5C%22margin-right%5C%22:%5C%220px%5C%22,%5C%22margin-bottom%5C%22:%5C%2215px%5C%22,%5C%22margin-left%5C%22:%5C%220px%5C%22,%5C%22background-color%5C%22:%5C%22rgb(0,%20119,%20255)%5C%22,%5C%22border-top-width%5C%22:%5C%22initial%5C%22,%5C%22border-right-width%5C%22:%5C%22initial%5C%22,%5C%22border-bottom-width%5C%22:%5C%22initial%5C%22,%5C%22border-left-width%5C%22:%5C%22initial%5C%22,%5C%22border-top-style%5C%22:%5C%22none%5C%22,%5C%22border-right-style%5C%22:%5C%22none%5C%22,%5C%22border-bottom-style%5C%22:%5C%22none%5C%22,%5C%22border-left-style%5C%22:%5C%22none%5C%22,%5C%22border-top-color%5C%22:%5C%22initial%5C%22,%5C%22border-right-color%5C%22:%5C%22initial%5C%22,%5C%22border-bottom-color%5C%22:%5C%22initial%5C%22,%5C%22border-left-color%5C%22:%5C%22initial%5C%22,%5C%22border-image-source%5C%22:%5C%22initial%5C%22,%5C%22border-image-slice%5C%22:%5C%22initial%5C%22,%5C%22border-image-width%5C%22:%5C%22initial%5C%22,%5C%22border-image-outset%5C%22:%5C%22initial%5C%22,%5C%22border-image-repeat%5C%22:%5C%22initial%5C%22,%5C%22color%5C%22:%5C%22rgb(255,%20255,%20255)%5C%22,%5C%22padding-top%5C%22:%5C%227px%5C%22,%5C%22padding-right%5C%22:%5C%2210px%5C%22,%5C%22padding-bottom%5C%22:%5C%227px%5C%22,%5C%22padding-left%5C%22:%5C%2210px%5C%22,%5C%22font-size%5C%22:%5C%221em%5C%22,%5C%22cursor%5C%22:%5C%22pointer%5C%22,%5C%22border-top-left-radius%5C%22:%5C%2210px%20!important%5C%22,%5C%22border-top-right-radius%5C%22:%5C%2210px%20!important%5C%22,%5C%22border-bottom-right-radius%5C%22:%5C%2210px%20!important%5C%22,%5C%22border-bottom-left-radius%5C%22:%5C%2210px%20!important%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%22body%5C%22,%5C%22style%5C%22:%7B%5C%22background-color%5C%22:%5C%22rgb(255,%20255,%20255)%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%22*%5C%22,%5C%22style%5C%22:%7B%5C%22box-sizing%5C%22:%5C%22border-box%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%22body%5C%22,%5C%22style%5C%22:%7B%5C%22margin-top%5C%22:%5C%220px%5C%22,%5C%22margin-right%5C%22:%5C%220px%5C%22,%5C%22margin-bottom%5C%22:%5C%220px%5C%22,%5C%22margin-left%5C%22:%5C%220px%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%220%25%5C%22,%5C%22style%5C%22:%7B%5C%22opacity%5C%22:%5C%220%5C%22%7D,%5C%22mediaText%5C%22:%5C%22fadeEffect%5C%22,%5C%22atRuleType%5C%22:%5C%22keyframes%5C%22%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%22100%25%5C%22,%5C%22style%5C%22:%7B%5C%22opacity%5C%22:%5C%221%5C%22%7D,%5C%22mediaText%5C%22:%5C%22fadeEffect%5C%22,%5C%22atRuleType%5C%22:%5C%22keyframes%5C%22%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22igib%5C%22,%5C%22label%5C%22:%5C%22igib%5C%22,%5C%22type%5C%22:2,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22height%5C%22:%5C%22150px%5C%22,%5C%22margin%5C%22:%5C%220%20auto%2010px%20auto%5C%22,%5C%22padding%5C%22:%5C%225px%205px%205px%205px%5C%22,%5C%22width%5C%22:%5C%22100%25%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22ivco9%5C%22,%5C%22label%5C%22:%5C%22ivco9%5C%22,%5C%22type%5C%22:2,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22padding%5C%22:%5C%220%5C%22,%5C%22margin%5C%22:%5C%220%5C%22,%5C%22vertical-align%5C%22:%5C%22top%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22ihrc%5C%22,%5C%22label%5C%22:%5C%22ihrc%5C%22,%5C%22type%5C%22:2,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D%7D%5D%22%7D"
}
```

##### Sample Response
```java
{
    "id":65
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 201 | Created | [CreateResponse](#CreateResponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Delete Email-template

Delete EmailTemplate

##### Description:

Delete EmailTemplate

#### DELETE
#### /v1/crm/campaign/email-templates/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/campaign/email-templates/1
```

##### Curl

```java
curl -X DELETE "https://bifrost.deskera.com/v1/crm/campaign/email-templates/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | EmailTemplate ID | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Get Email-template by Id

Get EmailTemplate By Id

##### Description:

Get EmailTemplate By Id

#### GET
#### /v1/crm/campaign/email-templates/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/campaign/email-templates/62
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/crm/campaign/email-templates/62" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | EmailTemplate ID | Yes | integer |

##### Sample Response
```java
{
  "id": 62,
  "name": "My Template",
  "image": "https://s3.ap-southeast-1.amazonaws.com/cdn-crm-qa.deskera.xyz/campaign-poc/email-templates/23314/62/content.png",
  "category": {
    "id": 26,
    "name": "22",
    "description": "",
    "category_type": "EMAIL",
    "color": "",
    "is_published": true,
    "owner_id": 17828
  },
  "template_json": "%7B%22html%22:%22%3Ctable%20id=%5C%22ij5i%5C%22%3E%3Ctbody%3E%3Ctr%3E%3Ctd%20id=%5C%22inynt%5C%22%3E%3C/td%3E%3C/tr%3E%3C/tbody%3E%3C/table%3E%22,%22components%22:%22%5B%7B%5C%22type%5C%22:%5C%22table%5C%22,%5C%22status%5C%22:%5C%22hovered%5C%22,%5C%22content%5C%22:%5C%22%5C%22,%5C%22attributes%5C%22:%7B%5C%22id%5C%22:%5C%22ij5i%5C%22%7D,%5C%22components%5C%22:%5B%7B%5C%22type%5C%22:%5C%22tbody%5C%22,%5C%22content%5C%22:%5C%22%5C%22,%5C%22components%5C%22:%5B%7B%5C%22type%5C%22:%5C%22row%5C%22,%5C%22content%5C%22:%5C%22%5C%22,%5C%22components%5C%22:%5B%7B%5C%22type%5C%22:%5C%22cell%5C%22,%5C%22content%5C%22:%5C%22%5C%22,%5C%22attributes%5C%22:%7B%5C%22id%5C%22:%5C%22inynt%5C%22%7D%7D%5D%7D%5D%7D%5D%7D%5D%22,%22assets%22:%22%5B%5D%22,%22css%22:%22*%20%7B%20box-sizing:%20border-box;%20%7D%20body%20%7Bmargin:%200;%7Dbody%7Bbackground-color:rgb(255,%20255,%20255);%7D*%7Bbox-sizing:border-box;%7Dbody%7Bmargin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;%7D#ij5i%7Bheight:150px;margin:0%20auto%2010px%20auto;padding:5px%205px%205px%205px;width:100%25;%7D#inynt%7Bpadding:0;margin:0;vertical-align:top;%7D@keyframes%20fadeEffect%7B0%25%7Bopacity:0;%7D100%25%7Bopacity:1;%7D%7D%22,%22styles%22:%22%5B%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22form%5C%22,%5C%22label%5C%22:%5C%22form%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22border-top-left-radius%5C%22:%5C%223px%5C%22,%5C%22border-top-right-radius%5C%22:%5C%223px%5C%22,%5C%22border-bottom-right-radius%5C%22:%5C%223px%5C%22,%5C%22border-bottom-left-radius%5C%22:%5C%223px%5C%22,%5C%22padding-top%5C%22:%5C%2210px%5C%22,%5C%22padding-right%5C%22:%5C%2215px%5C%22,%5C%22padding-bottom%5C%22:%5C%2210px%5C%22,%5C%22padding-left%5C%22:%5C%2215px%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22input%5C%22,%5C%22label%5C%22:%5C%22input%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22width%5C%22:%5C%22100%25%5C%22,%5C%22margin-bottom%5C%22:%5C%2215px%5C%22,%5C%22padding-top%5C%22:%5C%227px%5C%22,%5C%22padding-right%5C%22:%5C%2210px%5C%22,%5C%22padding-bottom%5C%22:%5C%227px%5C%22,%5C%22padding-left%5C%22:%5C%2210px%5C%22,%5C%22border-top-left-radius%5C%22:%5C%222px%5C%22,%5C%22border-top-right-radius%5C%22:%5C%222px%5C%22,%5C%22border-bottom-right-radius%5C%22:%5C%222px%5C%22,%5C%22border-bottom-left-radius%5C%22:%5C%222px%5C%22,%5C%22color%5C%22:%5C%22rgb(73,%2080,%2087)%5C%22,%5C%22border-top-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-right-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-bottom-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-left-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-top-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-right-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-bottom-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-left-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-top-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-right-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-bottom-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-left-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-image-source%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-slice%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-width%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-outset%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-repeat%5C%22:%5C%22initial%20!important%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22textarea%5C%22,%5C%22label%5C%22:%5C%22textarea%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22width%5C%22:%5C%22100%25%5C%22,%5C%22margin-bottom%5C%22:%5C%2215px%5C%22,%5C%22padding-top%5C%22:%5C%227px%5C%22,%5C%22padding-right%5C%22:%5C%2210px%5C%22,%5C%22padding-bottom%5C%22:%5C%227px%5C%22,%5C%22padding-left%5C%22:%5C%2210px%5C%22,%5C%22border-top-left-radius%5C%22:%5C%222px%5C%22,%5C%22border-top-right-radius%5C%22:%5C%222px%5C%22,%5C%22border-bottom-right-radius%5C%22:%5C%222px%5C%22,%5C%22border-bottom-left-radius%5C%22:%5C%222px%5C%22,%5C%22color%5C%22:%5C%22rgb(73,%2080,%2087)%5C%22,%5C%22border-top-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-right-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-bottom-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-left-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-top-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-right-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-bottom-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-left-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-top-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-right-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-bottom-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-left-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-image-source%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-slice%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-width%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-outset%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-repeat%5C%22:%5C%22initial%20!important%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22label%5C%22,%5C%22label%5C%22:%5C%22label%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22width%5C%22:%5C%22100%25%5C%22,%5C%22display%5C%22:%5C%22block%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22button%5C%22,%5C%22label%5C%22:%5C%22button%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22width%5C%22:%5C%22100%25%5C%22,%5C%22margin-top%5C%22:%5C%2215px%5C%22,%5C%22margin-right%5C%22:%5C%220px%5C%22,%5C%22margin-bottom%5C%22:%5C%2215px%5C%22,%5C%22margin-left%5C%22:%5C%220px%5C%22,%5C%22background-color%5C%22:%5C%22rgb(0,%20119,%20255)%5C%22,%5C%22border-top-width%5C%22:%5C%22initial%5C%22,%5C%22border-right-width%5C%22:%5C%22initial%5C%22,%5C%22border-bottom-width%5C%22:%5C%22initial%5C%22,%5C%22border-left-width%5C%22:%5C%22initial%5C%22,%5C%22border-top-style%5C%22:%5C%22none%5C%22,%5C%22border-right-style%5C%22:%5C%22none%5C%22,%5C%22border-bottom-style%5C%22:%5C%22none%5C%22,%5C%22border-left-style%5C%22:%5C%22none%5C%22,%5C%22border-top-color%5C%22:%5C%22initial%5C%22,%5C%22border-right-color%5C%22:%5C%22initial%5C%22,%5C%22border-bottom-color%5C%22:%5C%22initial%5C%22,%5C%22border-left-color%5C%22:%5C%22initial%5C%22,%5C%22border-image-source%5C%22:%5C%22initial%5C%22,%5C%22border-image-slice%5C%22:%5C%22initial%5C%22,%5C%22border-image-width%5C%22:%5C%22initial%5C%22,%5C%22border-image-outset%5C%22:%5C%22initial%5C%22,%5C%22border-image-repeat%5C%22:%5C%22initial%5C%22,%5C%22color%5C%22:%5C%22rgb(255,%20255,%20255)%5C%22,%5C%22padding-top%5C%22:%5C%227px%5C%22,%5C%22padding-right%5C%22:%5C%2210px%5C%22,%5C%22padding-bottom%5C%22:%5C%227px%5C%22,%5C%22padding-left%5C%22:%5C%2210px%5C%22,%5C%22font-size%5C%22:%5C%221em%5C%22,%5C%22cursor%5C%22:%5C%22pointer%5C%22,%5C%22border-top-left-radius%5C%22:%5C%2210px%20!important%5C%22,%5C%22border-top-right-radius%5C%22:%5C%2210px%20!important%5C%22,%5C%22border-bottom-right-radius%5C%22:%5C%2210px%20!important%5C%22,%5C%22border-bottom-left-radius%5C%22:%5C%2210px%20!important%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%22body%5C%22,%5C%22style%5C%22:%7B%5C%22background-color%5C%22:%5C%22rgb(255,%20255,%20255)%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%22*%5C%22,%5C%22style%5C%22:%7B%5C%22box-sizing%5C%22:%5C%22border-box%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%22body%5C%22,%5C%22style%5C%22:%7B%5C%22margin-top%5C%22:%5C%220px%5C%22,%5C%22margin-right%5C%22:%5C%220px%5C%22,%5C%22margin-bottom%5C%22:%5C%220px%5C%22,%5C%22margin-left%5C%22:%5C%220px%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%220%25%5C%22,%5C%22style%5C%22:%7B%5C%22opacity%5C%22:%5C%220%5C%22%7D,%5C%22mediaText%5C%22:%5C%22fadeEffect%5C%22,%5C%22atRuleType%5C%22:%5C%22keyframes%5C%22%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%22100%25%5C%22,%5C%22style%5C%22:%7B%5C%22opacity%5C%22:%5C%221%5C%22%7D,%5C%22mediaText%5C%22:%5C%22fadeEffect%5C%22,%5C%22atRuleType%5C%22:%5C%22keyframes%5C%22%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22ij5i%5C%22,%5C%22label%5C%22:%5C%22ij5i%5C%22,%5C%22type%5C%22:2,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22height%5C%22:%5C%22150px%5C%22,%5C%22margin%5C%22:%5C%220%20auto%2010px%20auto%5C%22,%5C%22padding%5C%22:%5C%225px%205px%205px%205px%5C%22,%5C%22width%5C%22:%5C%22100%25%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22inynt%5C%22,%5C%22label%5C%22:%5C%22inynt%5C%22,%5C%22type%5C%22:2,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22padding%5C%22:%5C%220%5C%22,%5C%22margin%5C%22:%5C%220%5C%22,%5C%22vertical-align%5C%22:%5C%22top%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22wrapper%5C%22,%5C%22label%5C%22:%5C%22wrapper%5C%22,%5C%22type%5C%22:2,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22wrapper%5C%22:1%7D%5D%22%7D","template_html":"https://s3.ap-southeast-1.amazonaws.com/cdn-crm-qa.deskera.xyz/campaign-poc/email-templates/23314/62/content.html",
  "owner_id": 17828,
  "is_deleted": false,
  "tenant_id": 23314,
  "created_by": 17828,
  "created_at": "2020-06-18T05:56:48.772468Z",
  "updated_by": 17828,
  "updated_at": "2020-06-18T05:56:50.520431Z"
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [EmailTemplateResponse](#EmailTemplateResponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Update Email-template

Update EmailTemplate

##### Description:

Update EmailTemplate

#### PATCH
#### /v1/crm/campaign/email-templates/{id}
##### Request URL

```java
https://bifrost.deskera.com/v1/crm/campaign/email-templates/1
```

##### Curl

```java
curl -X PATCH "https://bifrost.deskera.com/v1/crm/campaign/email-templates/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"category_id\": 26, \"image\": \"\", \"name\": \"Test email Template\", \"template_html\": \"<table id=\"igib\" style=\"box-sizing: border-box;height: 150px;margin: 0auto10pxauto;padding: 5px5px5px5px;width: 100%;\" width=\"100%\" height=\"150\"><tbody style=\"box-sizing: border-box;\"><tr id=\"ihrc\" style=\"box-sizing: border-box;\"><td id=\"ivco9\" style=\"box-sizing: border-box;padding: 0;margin: 0;vertical-align: top;\" valign=\"top\"></td></tr></tbody></table>\", \"template_json\": \"%7B%22html%22:%22%3Ctable%20id=%5C%22igib%5C%22%3E%3Ctbody%3E%3Ctr%20id=%5C%22ihrc%5C%22%3E%3Ctd%20id=%5C%22ivco9%5C%22%3E%3C/td%3E%3C/tr%3E%3C/tbody%3E%3C/table%3E%22,%22components%22:%22%5B%7B%5C%22type%5C%22:%5C%22table%5C%22,%5C%22content%5C%22:%5C%22%5C%22,%5C%22attributes%5C%22:%7B%5C%22id%5C%22:%5C%22igib%5C%22%7D,%5C%22components%5C%22:%5B%7B%5C%22type%5C%22:%5C%22tbody%5C%22,%5C%22content%5C%22:%5C%22%5C%22,%5C%22components%5C%22:%5B%7B%5C%22type%5C%22:%5C%22row%5C%22,%5C%22status%5C%22:%5C%22selected%5C%22,%5C%22content%5C%22:%5C%22%5C%22,%5C%22attributes%5C%22:%7B%5C%22id%5C%22:%5C%22ihrc%5C%22%7D,%5C%22components%5C%22:%5B%7B%5C%22type%5C%22:%5C%22cell%5C%22,%5C%22content%5C%22:%5C%22%5C%22,%5C%22attributes%5C%22:%7B%5C%22id%5C%22:%5C%22ivco9%5C%22%7D%7D%5D,%5C%22open%5C%22:0%7D%5D,%5C%22open%5C%22:1%7D%5D,%5C%22open%5C%22:1%7D%5D%22,%22assets%22:%22%5B%5D%22,%22css%22:%22*%20%7B%20box-sizing:%20border-box;%20%7D%20body%20%7Bmargin:%200;%7Dbody%7Bbackground-color:rgb(255,%20255,%20255);%7D*%7Bbox-sizing:border-box;%7Dbody%7Bmargin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;%7D#igib%7Bheight:150px;margin:0%20auto%2010px%20auto;padding:5px%205px%205px%205px;width:100%25;%7D#ivco9%7Bpadding:0;margin:0;vertical-align:top;%7D@keyframes%20fadeEffect%7B0%25%7Bopacity:0;%7D100%25%7Bopacity:1;%7D%7D%22,%22styles%22:%22%5B%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22form%5C%22,%5C%22label%5C%22:%5C%22form%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22border-top-left-radius%5C%22:%5C%223px%5C%22,%5C%22border-top-right-radius%5C%22:%5C%223px%5C%22,%5C%22border-bottom-right-radius%5C%22:%5C%223px%5C%22,%5C%22border-bottom-left-radius%5C%22:%5C%223px%5C%22,%5C%22padding-top%5C%22:%5C%2210px%5C%22,%5C%22padding-right%5C%22:%5C%2215px%5C%22,%5C%22padding-bottom%5C%22:%5C%2210px%5C%22,%5C%22padding-left%5C%22:%5C%2215px%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22input%5C%22,%5C%22label%5C%22:%5C%22input%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22width%5C%22:%5C%22100%25%5C%22,%5C%22margin-bottom%5C%22:%5C%2215px%5C%22,%5C%22padding-top%5C%22:%5C%227px%5C%22,%5C%22padding-right%5C%22:%5C%2210px%5C%22,%5C%22padding-bottom%5C%22:%5C%227px%5C%22,%5C%22padding-left%5C%22:%5C%2210px%5C%22,%5C%22border-top-left-radius%5C%22:%5C%222px%5C%22,%5C%22border-top-right-radius%5C%22:%5C%222px%5C%22,%5C%22border-bottom-right-radius%5C%22:%5C%222px%5C%22,%5C%22border-bottom-left-radius%5C%22:%5C%222px%5C%22,%5C%22color%5C%22:%5C%22rgb(73,%2080,%2087)%5C%22,%5C%22border-top-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-right-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-bottom-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-left-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-top-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-right-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-bottom-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-left-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-top-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-right-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-bottom-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-left-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-image-source%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-slice%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-width%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-outset%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-repeat%5C%22:%5C%22initial%20!important%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22textarea%5C%22,%5C%22label%5C%22:%5C%22textarea%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22width%5C%22:%5C%22100%25%5C%22,%5C%22margin-bottom%5C%22:%5C%2215px%5C%22,%5C%22padding-top%5C%22:%5C%227px%5C%22,%5C%22padding-right%5C%22:%5C%2210px%5C%22,%5C%22padding-bottom%5C%22:%5C%227px%5C%22,%5C%22padding-left%5C%22:%5C%2210px%5C%22,%5C%22border-top-left-radius%5C%22:%5C%222px%5C%22,%5C%22border-top-right-radius%5C%22:%5C%222px%5C%22,%5C%22border-bottom-right-radius%5C%22:%5C%222px%5C%22,%5C%22border-bottom-left-radius%5C%22:%5C%222px%5C%22,%5C%22color%5C%22:%5C%22rgb(73,%2080,%2087)%5C%22,%5C%22border-top-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-right-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-bottom-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-left-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-top-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-right-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-bottom-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-left-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-top-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-right-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-bottom-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-left-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-image-source%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-slice%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-width%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-outset%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-repeat%5C%22:%5C%22initial%20!important%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22label%5C%22,%5C%22label%5C%22:%5C%22label%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22width%5C%22:%5C%22100%25%5C%22,%5C%22display%5C%22:%5C%22block%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22button%5C%22,%5C%22label%5C%22:%5C%22button%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22width%5C%22:%5C%22100%25%5C%22,%5C%22margin-top%5C%22:%5C%2215px%5C%22,%5C%22margin-right%5C%22:%5C%220px%5C%22,%5C%22margin-bottom%5C%22:%5C%2215px%5C%22,%5C%22margin-left%5C%22:%5C%220px%5C%22,%5C%22background-color%5C%22:%5C%22rgb(0,%20119,%20255)%5C%22,%5C%22border-top-width%5C%22:%5C%22initial%5C%22,%5C%22border-right-width%5C%22:%5C%22initial%5C%22,%5C%22border-bottom-width%5C%22:%5C%22initial%5C%22,%5C%22border-left-width%5C%22:%5C%22initial%5C%22,%5C%22border-top-style%5C%22:%5C%22none%5C%22,%5C%22border-right-style%5C%22:%5C%22none%5C%22,%5C%22border-bottom-style%5C%22:%5C%22none%5C%22,%5C%22border-left-style%5C%22:%5C%22none%5C%22,%5C%22border-top-color%5C%22:%5C%22initial%5C%22,%5C%22border-right-color%5C%22:%5C%22initial%5C%22,%5C%22border-bottom-color%5C%22:%5C%22initial%5C%22,%5C%22border-left-color%5C%22:%5C%22initial%5C%22,%5C%22border-image-source%5C%22:%5C%22initial%5C%22,%5C%22border-image-slice%5C%22:%5C%22initial%5C%22,%5C%22border-image-width%5C%22:%5C%22initial%5C%22,%5C%22border-image-outset%5C%22:%5C%22initial%5C%22,%5C%22border-image-repeat%5C%22:%5C%22initial%5C%22,%5C%22color%5C%22:%5C%22rgb(255,%20255,%20255)%5C%22,%5C%22padding-top%5C%22:%5C%227px%5C%22,%5C%22padding-right%5C%22:%5C%2210px%5C%22,%5C%22padding-bottom%5C%22:%5C%227px%5C%22,%5C%22padding-left%5C%22:%5C%2210px%5C%22,%5C%22font-size%5C%22:%5C%221em%5C%22,%5C%22cursor%5C%22:%5C%22pointer%5C%22,%5C%22border-top-left-radius%5C%22:%5C%2210px%20!important%5C%22,%5C%22border-top-right-radius%5C%22:%5C%2210px%20!important%5C%22,%5C%22border-bottom-right-radius%5C%22:%5C%2210px%20!important%5C%22,%5C%22border-bottom-left-radius%5C%22:%5C%2210px%20!important%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%22body%5C%22,%5C%22style%5C%22:%7B%5C%22background-color%5C%22:%5C%22rgb(255,%20255,%20255)%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%22*%5C%22,%5C%22style%5C%22:%7B%5C%22box-sizing%5C%22:%5C%22border-box%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%22body%5C%22,%5C%22style%5C%22:%7B%5C%22margin-top%5C%22:%5C%220px%5C%22,%5C%22margin-right%5C%22:%5C%220px%5C%22,%5C%22margin-bottom%5C%22:%5C%220px%5C%22,%5C%22margin-left%5C%22:%5C%220px%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%220%25%5C%22,%5C%22style%5C%22:%7B%5C%22opacity%5C%22:%5C%220%5C%22%7D,%5C%22mediaText%5C%22:%5C%22fadeEffect%5C%22,%5C%22atRuleType%5C%22:%5C%22keyframes%5C%22%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%22100%25%5C%22,%5C%22style%5C%22:%7B%5C%22opacity%5C%22:%5C%221%5C%22%7D,%5C%22mediaText%5C%22:%5C%22fadeEffect%5C%22,%5C%22atRuleType%5C%22:%5C%22keyframes%5C%22%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22igib%5C%22,%5C%22label%5C%22:%5C%22igib%5C%22,%5C%22type%5C%22:2,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22height%5C%22:%5C%22150px%5C%22,%5C%22margin%5C%22:%5C%220%20auto%2010px%20auto%5C%22,%5C%22padding%5C%22:%5C%225px%205px%205px%205px%5C%22,%5C%22width%5C%22:%5C%22100%25%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22ivco9%5C%22,%5C%22label%5C%22:%5C%22ivco9%5C%22,%5C%22type%5C%22:2,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22padding%5C%22:%5C%220%5C%22,%5C%22margin%5C%22:%5C%220%5C%22,%5C%22vertical-align%5C%22:%5C%22top%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22ihrc%5C%22,%5C%22label%5C%22:%5C%22ihrc%5C%22,%5C%22type%5C%22:2,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D%7D%5D%22%7D\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | EmailTemplate ID | Yes | integer |
| EmailTemplate | body | Update EmailTemplate | Yes | [EmailTemplateRequest](#EmailTemplateRequest) |

##### Sample Request
```java
{
  "category_id": 26,
  "image": "",
  "name": "Test email Template",
  "template_html": "<table id="igib" style="box-sizing: border-box;height: 150px;margin: 0auto10pxauto;padding: 5px5px5px5px;width: 100%;" width="100%" height="150"><tbody style="box-sizing: border-box;"><tr id="ihrc" style="box-sizing: border-box;"><td id="ivco9" style="box-sizing: border-box;padding: 0;margin: 0;vertical-align: top;" valign="top"></td></tr></tbody></table>",
  "template_json": "%7B%22html%22:%22%3Ctable%20id=%5C%22igib%5C%22%3E%3Ctbody%3E%3Ctr%20id=%5C%22ihrc%5C%22%3E%3Ctd%20id=%5C%22ivco9%5C%22%3E%3C/td%3E%3C/tr%3E%3C/tbody%3E%3C/table%3E%22,%22components%22:%22%5B%7B%5C%22type%5C%22:%5C%22table%5C%22,%5C%22content%5C%22:%5C%22%5C%22,%5C%22attributes%5C%22:%7B%5C%22id%5C%22:%5C%22igib%5C%22%7D,%5C%22components%5C%22:%5B%7B%5C%22type%5C%22:%5C%22tbody%5C%22,%5C%22content%5C%22:%5C%22%5C%22,%5C%22components%5C%22:%5B%7B%5C%22type%5C%22:%5C%22row%5C%22,%5C%22status%5C%22:%5C%22selected%5C%22,%5C%22content%5C%22:%5C%22%5C%22,%5C%22attributes%5C%22:%7B%5C%22id%5C%22:%5C%22ihrc%5C%22%7D,%5C%22components%5C%22:%5B%7B%5C%22type%5C%22:%5C%22cell%5C%22,%5C%22content%5C%22:%5C%22%5C%22,%5C%22attributes%5C%22:%7B%5C%22id%5C%22:%5C%22ivco9%5C%22%7D%7D%5D,%5C%22open%5C%22:0%7D%5D,%5C%22open%5C%22:1%7D%5D,%5C%22open%5C%22:1%7D%5D%22,%22assets%22:%22%5B%5D%22,%22css%22:%22*%20%7B%20box-sizing:%20border-box;%20%7D%20body%20%7Bmargin:%200;%7Dbody%7Bbackground-color:rgb(255,%20255,%20255);%7D*%7Bbox-sizing:border-box;%7Dbody%7Bmargin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;%7D#igib%7Bheight:150px;margin:0%20auto%2010px%20auto;padding:5px%205px%205px%205px;width:100%25;%7D#ivco9%7Bpadding:0;margin:0;vertical-align:top;%7D@keyframes%20fadeEffect%7B0%25%7Bopacity:0;%7D100%25%7Bopacity:1;%7D%7D%22,%22styles%22:%22%5B%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22form%5C%22,%5C%22label%5C%22:%5C%22form%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22border-top-left-radius%5C%22:%5C%223px%5C%22,%5C%22border-top-right-radius%5C%22:%5C%223px%5C%22,%5C%22border-bottom-right-radius%5C%22:%5C%223px%5C%22,%5C%22border-bottom-left-radius%5C%22:%5C%223px%5C%22,%5C%22padding-top%5C%22:%5C%2210px%5C%22,%5C%22padding-right%5C%22:%5C%2215px%5C%22,%5C%22padding-bottom%5C%22:%5C%2210px%5C%22,%5C%22padding-left%5C%22:%5C%2215px%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22input%5C%22,%5C%22label%5C%22:%5C%22input%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22width%5C%22:%5C%22100%25%5C%22,%5C%22margin-bottom%5C%22:%5C%2215px%5C%22,%5C%22padding-top%5C%22:%5C%227px%5C%22,%5C%22padding-right%5C%22:%5C%2210px%5C%22,%5C%22padding-bottom%5C%22:%5C%227px%5C%22,%5C%22padding-left%5C%22:%5C%2210px%5C%22,%5C%22border-top-left-radius%5C%22:%5C%222px%5C%22,%5C%22border-top-right-radius%5C%22:%5C%222px%5C%22,%5C%22border-bottom-right-radius%5C%22:%5C%222px%5C%22,%5C%22border-bottom-left-radius%5C%22:%5C%222px%5C%22,%5C%22color%5C%22:%5C%22rgb(73,%2080,%2087)%5C%22,%5C%22border-top-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-right-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-bottom-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-left-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-top-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-right-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-bottom-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-left-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-top-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-right-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-bottom-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-left-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-image-source%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-slice%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-width%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-outset%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-repeat%5C%22:%5C%22initial%20!important%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22textarea%5C%22,%5C%22label%5C%22:%5C%22textarea%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22width%5C%22:%5C%22100%25%5C%22,%5C%22margin-bottom%5C%22:%5C%2215px%5C%22,%5C%22padding-top%5C%22:%5C%227px%5C%22,%5C%22padding-right%5C%22:%5C%2210px%5C%22,%5C%22padding-bottom%5C%22:%5C%227px%5C%22,%5C%22padding-left%5C%22:%5C%2210px%5C%22,%5C%22border-top-left-radius%5C%22:%5C%222px%5C%22,%5C%22border-top-right-radius%5C%22:%5C%222px%5C%22,%5C%22border-bottom-right-radius%5C%22:%5C%222px%5C%22,%5C%22border-bottom-left-radius%5C%22:%5C%222px%5C%22,%5C%22color%5C%22:%5C%22rgb(73,%2080,%2087)%5C%22,%5C%22border-top-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-right-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-bottom-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-left-width%5C%22:%5C%221px%20!important%5C%22,%5C%22border-top-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-right-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-bottom-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-left-style%5C%22:%5C%22solid%20!important%5C%22,%5C%22border-top-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-right-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-bottom-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-left-color%5C%22:%5C%22rgb(221,%20227,%20236)%20!important%5C%22,%5C%22border-image-source%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-slice%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-width%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-outset%5C%22:%5C%22initial%20!important%5C%22,%5C%22border-image-repeat%5C%22:%5C%22initial%20!important%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22label%5C%22,%5C%22label%5C%22:%5C%22label%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22width%5C%22:%5C%22100%25%5C%22,%5C%22display%5C%22:%5C%22block%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22button%5C%22,%5C%22label%5C%22:%5C%22button%5C%22,%5C%22type%5C%22:1,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22width%5C%22:%5C%22100%25%5C%22,%5C%22margin-top%5C%22:%5C%2215px%5C%22,%5C%22margin-right%5C%22:%5C%220px%5C%22,%5C%22margin-bottom%5C%22:%5C%2215px%5C%22,%5C%22margin-left%5C%22:%5C%220px%5C%22,%5C%22background-color%5C%22:%5C%22rgb(0,%20119,%20255)%5C%22,%5C%22border-top-width%5C%22:%5C%22initial%5C%22,%5C%22border-right-width%5C%22:%5C%22initial%5C%22,%5C%22border-bottom-width%5C%22:%5C%22initial%5C%22,%5C%22border-left-width%5C%22:%5C%22initial%5C%22,%5C%22border-top-style%5C%22:%5C%22none%5C%22,%5C%22border-right-style%5C%22:%5C%22none%5C%22,%5C%22border-bottom-style%5C%22:%5C%22none%5C%22,%5C%22border-left-style%5C%22:%5C%22none%5C%22,%5C%22border-top-color%5C%22:%5C%22initial%5C%22,%5C%22border-right-color%5C%22:%5C%22initial%5C%22,%5C%22border-bottom-color%5C%22:%5C%22initial%5C%22,%5C%22border-left-color%5C%22:%5C%22initial%5C%22,%5C%22border-image-source%5C%22:%5C%22initial%5C%22,%5C%22border-image-slice%5C%22:%5C%22initial%5C%22,%5C%22border-image-width%5C%22:%5C%22initial%5C%22,%5C%22border-image-outset%5C%22:%5C%22initial%5C%22,%5C%22border-image-repeat%5C%22:%5C%22initial%5C%22,%5C%22color%5C%22:%5C%22rgb(255,%20255,%20255)%5C%22,%5C%22padding-top%5C%22:%5C%227px%5C%22,%5C%22padding-right%5C%22:%5C%2210px%5C%22,%5C%22padding-bottom%5C%22:%5C%227px%5C%22,%5C%22padding-left%5C%22:%5C%2210px%5C%22,%5C%22font-size%5C%22:%5C%221em%5C%22,%5C%22cursor%5C%22:%5C%22pointer%5C%22,%5C%22border-top-left-radius%5C%22:%5C%2210px%20!important%5C%22,%5C%22border-top-right-radius%5C%22:%5C%2210px%20!important%5C%22,%5C%22border-bottom-right-radius%5C%22:%5C%2210px%20!important%5C%22,%5C%22border-bottom-left-radius%5C%22:%5C%2210px%20!important%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%22body%5C%22,%5C%22style%5C%22:%7B%5C%22background-color%5C%22:%5C%22rgb(255,%20255,%20255)%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%22*%5C%22,%5C%22style%5C%22:%7B%5C%22box-sizing%5C%22:%5C%22border-box%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%22body%5C%22,%5C%22style%5C%22:%7B%5C%22margin-top%5C%22:%5C%220px%5C%22,%5C%22margin-right%5C%22:%5C%220px%5C%22,%5C%22margin-bottom%5C%22:%5C%220px%5C%22,%5C%22margin-left%5C%22:%5C%220px%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%220%25%5C%22,%5C%22style%5C%22:%7B%5C%22opacity%5C%22:%5C%220%5C%22%7D,%5C%22mediaText%5C%22:%5C%22fadeEffect%5C%22,%5C%22atRuleType%5C%22:%5C%22keyframes%5C%22%7D,%7B%5C%22selectors%5C%22:%5B%5D,%5C%22selectorsAdd%5C%22:%5C%22100%25%5C%22,%5C%22style%5C%22:%7B%5C%22opacity%5C%22:%5C%221%5C%22%7D,%5C%22mediaText%5C%22:%5C%22fadeEffect%5C%22,%5C%22atRuleType%5C%22:%5C%22keyframes%5C%22%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22igib%5C%22,%5C%22label%5C%22:%5C%22igib%5C%22,%5C%22type%5C%22:2,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22height%5C%22:%5C%22150px%5C%22,%5C%22margin%5C%22:%5C%220%20auto%2010px%20auto%5C%22,%5C%22padding%5C%22:%5C%225px%205px%205px%205px%5C%22,%5C%22width%5C%22:%5C%22100%25%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22ivco9%5C%22,%5C%22label%5C%22:%5C%22ivco9%5C%22,%5C%22type%5C%22:2,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D,%5C%22style%5C%22:%7B%5C%22padding%5C%22:%5C%220%5C%22,%5C%22margin%5C%22:%5C%220%5C%22,%5C%22vertical-align%5C%22:%5C%22top%5C%22%7D%7D,%7B%5C%22selectors%5C%22:%5B%7B%5C%22name%5C%22:%5C%22ihrc%5C%22,%5C%22label%5C%22:%5C%22ihrc%5C%22,%5C%22type%5C%22:2,%5C%22active%5C%22:true,%5C%22private%5C%22:false,%5C%22protected%5C%22:false%7D%5D%7D%5D%22%7D"
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Get Segments

Show all segments

##### Description:

Get all segments

#### GET
#### /v1/crm/campaign/segment

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/campaign/segment
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/crm/campaign/segment" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query |  | No | integer |
| page | query |  | No | integer |
| search | query |  | No | string |

##### Sample Response
```java
{
  "data": [
    {
      "id": 51,
      "name": "seg",
      "description": "",
      "is_published": true,
      "is_public": true,
      "owner_id": 17828,
      "is_deleted": false,
      "appUserRoleXrefs": [
        {
          "id": 1082,
          "segment_id": 51,
          "contact_id": 380
        },
        {
          "id": 1083,
          "segment_id": 51,
          "contact_id": 379
        }
      ]
    },
    {
      "id": 33,
      "name": "Test Segment",
      "description": "",
      "is_published": true,
      "is_public": true,
      "owner_id": 17828,
      "is_deleted": false,
      "appUserRoleXrefs": [
        {
          "id": 1058,
          "segment_id": 33,
          "contact_id": 9268
        }
      ]
    }
  ],
  "page": 1,
  "number_of_elements": 0,
  "size_per_page": 10,
  "total_pages": 1,
  "number_of_records": 2
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [SegmentResponse](#SegmentResponse) ] |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Create Segment

Add Segment

##### Description:

Add Segment

#### POST
#### /v1/crm/campaign/segment

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/campaign/segment
```

##### Curl

```java
curl -X POST "https://bifrost.deskera.com/v1/crm/campaign/segment" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"name\": \"Test Segment\", \"owner_id\": null, \"is_public\": true, \"is_published\": false, \"contact_ids\": [9268], \"description\": \"Test description.\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Segment | body | Add Contact Label | Yes | [SegmentRequest](#SegmentRequest) |

##### Sample Request
```java
{
    "name": "Test Segment",
    "owner_id": null,
    "is_public": true,
    "is_published": false,
    "contact_ids": [9268],
    "description": "Test description."
}
```

##### Sample Response
```java
{
    "id":60
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 201 | Created | [CreateResponse](#CreateResponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Delete Segment

Delete Segment

##### Description:

Delete Segment

#### DELETE
#### /v1/crm/campaign/segment/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/campaign/segment/1
```

##### Curl

```java
curl -X DELETE "https://bifrost.deskera.com/v1/crm/campaign/segment/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Segment ID | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Get Segment by Id

Show segment of specific ID

##### Description:

get segment for specific ID

#### GET
#### /v1/crm/campaign/segment/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/campaign/segment/1
```

##### Curl

```java
curl -X GET "https://bifrost.deskera.com/v1/crm/campaign/segment/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Segment ID | Yes | integer |

##### Sample Response
```java
{
    "id": 51,
    "name": "seg",
    "description": "",
    "is_published": true,
    "is_public": true,
    "owner_id": 17828,
    "is_deleted": false,
    "appUserRoleXrefs": [
        {
            "id": 1082,
            "segment_id": 51,
            "contact_id": 380
        },
        {
            "id": 1083,
            "segment_id": 51,
            "contact_id": 379
        }
    ]
}
```

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [SegmentResponse](#SegmentResponse) |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

### Update Segment

Update Segment

##### Description:

Update Segment

#### PATCH
#### /v1/crm/campaign/segment/{id}

##### Request URL

```java
https://bifrost.deskera.com/v1/crm/campaign/segment/1
```

##### Curl

```java
curl -X PATCH "https://bifrost.deskera.com/v1/crm/campaign/segment/1" -H "accept: application/json" -H "x-access-token: sampleaccesstoken" -H "Content-Type: application/json" -d "{ \"name\": \"Test Segment\", \"owner_id\": null, \"is_public\": true, \"is_published\": false, \"contact_ids\": [9268], \"description\": \"Test description.\"}"
```

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | Segment ID | Yes | integer |
| Segment | body | Update Segment | Yes | [SegmentRequest](#SegmentRequest) |

##### Sample Request
```java
{
    "name": "Test Segment",
    "owner_id": null,
    "is_public": true,
    "is_published": false,
    "contact_ids": [9268],
    "description": "Test description."
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| ApiKeyAuth | |

## Models
---

### CUDRecordResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | integer |  | No |
| success | boolean |  | No |

### CategoryRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| category_type | string | CAMPAIGN | EMAIL | No |
| color | string |  | No |
| description | string |  | No |
| is_published | boolean |  | No |
| name | string |  | No |

### CategoryResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| category_type | string |  | No |
| color | string |  | No |
| description | string |  | No |
| id | integer |  | No |
| is_published | boolean |  | No |
| name | string |  | No |
| owner_id | integer |  | No |

### CreateResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | integer |  | No |

### EmailTemplateRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| category_id | integer |  | No |
| image | string |  | No |
| is_deleted | boolean |  | No |
| name | string |  | No |
| owner_id | integer |  | No |
| template_html | string |  | No |
| template_json | string |  | No |

### EmailTemplateResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| category | [CategoryResponse](#CategoryResponse) |  | No |
| created_at | string |  | No |
| created_by | integer |  | No |
| id | integer |  | No |
| image | string |  | No |
| is_deleted | boolean |  | No |
| name | string |  | No |
| owner_id | integer |  | No |
| template_html | string |  | No |
| template_json | string |  | No |
| tenant_id | integer |  | No |
| updated_at | string |  | No |
| updated_by | integer |  | No |

### FilterConfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| data | object |  | No |
| number_of_elements | integer |  | No |
| number_of_records | integer |  | No |
| page | integer |  | No |
| size_per_page | integer |  | No |
| total_pages | integer |  | No |

### FormDataRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| form_data | string |  | No |
| form_id | integer |  | No |
| id | integer |  | No |

### FormDataResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| created_at | string |  | No |
| form_data | string |  | No |
| form_id | integer |  | No |
| id | integer |  | No |
| updated_at | string |  | No |

### FormRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | integer |  | No |
| name | string |  | No |
| raw | string |  | No |
| template | string |  | No |

### FormResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| created_at | string |  | No |
| created_by | integer |  | No |
| id | integer |  | No |
| name | string |  | No |
| raw | string |  | No |
| script | string |  | No |
| submitted_forms_count | integer |  | No |
| template | string |  | No |
| updated_at | string |  | No |
| updated_by | integer |  | No |

### OrderBy

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| field | string |  | No |
| order | string |  | No |

### SegmentContactXref

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact_id | integer |  | No |
| id | integer |  | No |
| segment_id | integer |  | No |

### SegmentRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| contact_ids | [ integer ] |  | No |
| description | string |  | No |
| id | integer |  | No |
| is_public | boolean |  | No |
| is_published | boolean |  | No |
| name | string |  | No |
| owner_id | integer |  | No |

### SegmentResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appUserRoleXrefs | [ [SegmentContactXref](#SegmentContactXref) ] |  | No |
| description | string |  | No |
| id | integer |  | No |
| is_deleted | boolean |  | No |
| is_public | boolean |  | No |
| is_published | boolean |  | No |
| name | string |  | No |
| owner_id | integer |  | No |