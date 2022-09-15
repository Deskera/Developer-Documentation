---
id: performanceappraisal
title: Performance Appraisal
sidebar_label: Performance Appraisal
---

### Security
**Authorization**  

|apiKey|*API Key*|
|---|---|
|Name|x-access-token|
|In|header|

### /v1/people/performance-appraisal/assessment/ratings

#### GET
##### Summary

Get assessment rating details

##### Description

API to fetch assessment rating details.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Assessment ratings has been fetched successfully. | [AssessmentRatingDto](#assessmentratingdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/performance-appraisal/assessment/review-assessment

#### GET
##### Summary

Get reviewer assessment details

##### Description

API to fetch reviewer assessment details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| appraisalId | query | appraisalId | Yes | long |
| appraiseeId | query | appraiseeId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Reviewer assessment details has been fetched successfully. | [ReviewerAssessmentResponseDto](#reviewerassessmentresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Submit Review Assessment.

##### Description

API to submit review assessment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| reviewAssessmentDto | body | Review Assessment Detail Json | No | [ReviewAssessmentDto](#reviewassessmentdto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Review assessment has been saved successfully. |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/performance-appraisal/assessment/self-assessment

#### GET
##### Summary

Get self assessment details

##### Description

API to fetch self assessment details.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| appraisalId | query | appraisalId | Yes | long |
| appraiseeId | query | appraiseeId | No | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Self assessment details has been fetched successfully. | [AssessmentResponseDto](#assessmentresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Submit Self Assessment.

##### Description

API to submit self assessment.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| selfAssessmentDto | body | Self Assessment Detail Json | No | [SelfAssessmentDto](#selfassessmentdto) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 201 | Self assessment has been posted successfully |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/performance-appraisal/performance-appraisal-job

#### POST
##### Summary

copyPerformanceAppraisal

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tenantId | query | tenantId | Yes | long |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | string |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/performance-appraisal/reviews

#### GET
##### Summary

Get assesment reviews

##### Description

Api to get assesment reviews

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | limit | No | integer |
| page | query | page | No | integer |
| query | query | query | No | string |
| sort | query | sort | No | string |
| sortDir | query | sortDir | No | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | User assessment fetched successfully. | [AssesmentReviewDto](#assesmentreviewdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/performance-appraisal/settings

#### GET
##### Summary

Get active appraisal details

##### Description

API to fetch active appraisal details.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Appraisal details has been fetched successfully. | [AppraisalResponseDto](#appraisalresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No appraisal is active for today |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### POST
##### Summary

Create Appraisal.

##### Description

API to create a new appraisal.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| appraisalRequestDto | body | Appraisal Detail Json | No | [AppraisalRequestDto](#appraisalrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AppraisalResponseDto](#appraisalresponsedto) |
| 201 | Appraisal has been posted successfully | [AppraisalResponseDto](#appraisalresponsedto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

#### PUT
##### Summary

Update Appraisal

##### Description

API to update appraisal

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| appraisalId | query | appraisalId | Yes | long |
| appraisalRequestDto | body | Appraisal Detail Json | No | [AppraisalRequestDto](#appraisalrequestdto) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Appraisal has been updated successfully. | [AppraisalResponseDto](#appraisalresponsedto) |
| 201 | Created |  |
| 400 | Appraisal can not be updated as assessment cycle is already started |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Appraisal does not exists. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/performance-appraisal/settings/appraisal-list

#### GET
##### Summary

Get all appraisal details

##### Description

API to fetch all appraisal details.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | All appraisal details has been fetched successfully. | [AppraisalDateStatusDto](#appraisaldatestatusdto) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | No appraisal is active for today |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### /v1/people/performance-appraisal/settings/questions

#### PUT
##### Summary

Update Appraisal Questions

##### Description

API to update appraisal questions

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| appraisalId | query | appraisalId | Yes | long |
| questions | body | questions | Yes | [ string ] |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Questions has been updated successfully. | [AppraisalResponseDto](#appraisalresponsedto) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Appraisal does not exists. |  |

##### Security

| Security Schema | Scopes |
| --- | --- |
| Authorization | global |

### Models

#### Appraisal

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean |  | No |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| deleted | boolean |  | No |
| dueDate | dateTime |  | No |
| endDate | dateTime |  | No |
| frequency | string |  | No |
| id | long |  | No |
| questions | [ [AppraisalQuestions](#appraisalquestions) ] |  | No |
| startDate | dateTime |  | No |
| tenantId | long |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |

#### AppraisalDateStatusDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | appraiser id
_Example:_ `false` | No |
| endDate | dateTime | date pattern dd-MM-yyyy
_Example:_ `"20-09-2020"` | Yes |
| frequency | string | frequency
_Enum:_ `"QUARTERLY"`, `"HALF_YEARLY"`, `"YEARLY"`
_Example:_ `"This is frequency"` | No |
| id | long | Appraisal Id
_Example:_ `1234` | No |
| questions | [ [AppraisalQuestions](#appraisalquestions) ] | questions
_Example:_ `"This is questions"` | No |
| startDate | dateTime | date pattern dd-MM-yyyy
_Example:_ `"20-09-2020"` | Yes |

#### AppraisalQuestionResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long | Appraisal question id
_Example:_ `"This is question unique id"` | No |
| question | string | Appraisal question
_Example:_ `"This is sample question"` | No |
| seq | long | Appraisal question sequence
_Example:_ `1` | No |

#### AppraisalQuestions

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| createdAt | dateTime |  | No |
| createdBy | long |  | No |
| deleted | boolean |  | No |
| id | long |  | No |
| question | string |  | No |
| seq | long |  | No |
| tenantId | long |  | No |
| updatedAt | dateTime |  | No |
| updatedBy | long |  | No |

#### AppraisalRequestDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| dueDate | dateTime | date pattern dd-MM-yyyy
_Example:_ `"20-09-2020"` | Yes |
| frequency | string | Appraisal Frequency
_Enum:_ `"QUARTERLY"`, `"HALF_YEARLY"`, `"YEARLY"`
_Example:_ `"YEARLY"` | No |
| questions | [ string ] | List of questions | No |

#### AppraisalResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| active | boolean | Appraisal is active or not
_Example:_ `true` | No |
| dueDate | dateTime | date pattern dd-MM-yyyy
_Example:_ `"20-09-2020"` | Yes |
| endDate | dateTime | date pattern dd-MM-yyyy
_Example:_ `"20-09-2020"` | Yes |
| frequency | string | Appraisal Frequency
_Enum:_ `"QUARTERLY"`, `"HALF_YEARLY"`, `"YEARLY"`
_Example:_ `"YEARLY"` | No |
| id | long | Appraisal Id
_Example:_ `1234` | No |
| questions | [ [AppraisalQuestionResponseDto](#appraisalquestionresponsedto) ] | List of questions | No |
| startDate | dateTime | date pattern dd-MM-yyyy
_Example:_ `"20-09-2020"` | Yes |

#### AssesmentReviewDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appraisalId | [Appraisal](#appraisal) | Appraisal id
_Example:_ `"This is appraisal unique id"` | No |
| appraisee | [Users](#users) | Appraisee id
_Example:_ `"This is appraisee unique id"` | No |
| appraiseeSubmissionStatus | boolean | appraisee submission status
_Example:_ `false` | No |
| appraiser | [Users](#users) | appraiser id
_Example:_ `"This is appraiser unique id"` | No |
| appraiserSubmissionStatus | boolean | appraiser submission status
_Example:_ `false` | No |
| id | long | Appraisal review id
_Example:_ `"This is review unique id"` | No |

#### AssesmentReviewResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appraiserProgressCount | long | Appraiser progress count
_Example:_ `"This is appraiser progress count"` | No |
| assesmentReviewDto | [ [AssesmentReviewDto](#assesmentreviewdto) ] | List of assesment reviews | No |
| pageable | [Pageable](#pageable) | Pagable | No |
| selfAssementCount | long | Self assement count
_Example:_ `"This is self assement count"` | No |
| totalElements | long | TotalElements
_Example:_ `"This is total elements"` | No |
| totalPages | long | TotalPages
_Example:_ `"This is total pages"` | No |

#### AssessmentRatingDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| description | string | Rating Description
_Example:_ `"Exceeds Expection"` | No |
| rating | integer | Rating
_Example:_ `1` | No |

#### AssessmentResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appraisalId | long | Appraisal Id
_Example:_ `1234` | No |
| assessmentSubmitted | boolean | Assessment Submitted
_Example:_ `true` | No |
| assessments | [ [AssessmentSubmissionDto](#assessmentsubmissiondto) ] | List of ratings | No |
| endDate | dateTime | date pattern dd-MM-yyyy
_Example:_ `"20-09-2020"` | Yes |
| questions | [ [AppraisalQuestionResponseDto](#appraisalquestionresponsedto) ] | List of questions | No |
| startDate | dateTime | date pattern dd-MM-yyyy
_Example:_ `"20-09-2020"` | Yes |

#### AssessmentSubmissionDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| comment | string | Comment against the question
_Example:_ `"This is the sample comment"` | No |
| questionId | long | Question Id
_Example:_ `1234` | No |
| rating | integer | Rating against the questions
_Example:_ `1` | No |

#### Pageable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| offset | long |  | No |
| pageNumber | integer |  | No |
| pageSize | integer |  | No |
| paged | boolean |  | No |
| sort | [Sort](#sort) |  | No |
| unpaged | boolean |  | No |

#### ReviewAssessmentDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appraisalId | long | Appraisal Id
_Example:_ `1234` | No |
| appraiseeId | long | Appraisee Id
_Example:_ `1234` | No |
| appraiserOverallComment | string | Appraiser's Overall Comment
_Example:_ `"This is sample comment"` | No |
| assessmentSubmitted | boolean | Assessment Submitted
_Example:_ `true` | No |
| assessments | [ [AssessmentSubmissionDto](#assessmentsubmissiondto) ] | List of ratings | No |

#### ReviewerAssessmentResponseDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appraisalId | long | Appraisal Id
_Example:_ `1234` | No |
| appraiserOverallComment | string | Appraiser's overall comment.
_Example:_ `"This is sample overall comment."` | No |
| assessmentSubmitted | boolean | Assessment Submitted
_Example:_ `true` | No |
| assessments | [ [AssessmentSubmissionDto](#assessmentsubmissiondto) ] | List of ratings | No |
| endDate | dateTime | date pattern dd-MM-yyyy
_Example:_ `"20-09-2020"` | Yes |
| questions | [ [AppraisalQuestionResponseDto](#appraisalquestionresponsedto) ] | List of questions | No |
| startDate | dateTime | date pattern dd-MM-yyyy
_Example:_ `"20-09-2020"` | Yes |

#### SelfAssessmentDto

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| appraisalId | long | Appraisal Id
_Example:_ `1234` | No |
| assessmentSubmitted | boolean | Assessment Submitted
_Example:_ `true` | No |
| assessments | [ [AssessmentSubmissionDto](#assessmentsubmissiondto) ] | List of ratings | No |

#### Sort

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| empty | boolean |  | No |
| sorted | boolean |  | No |
| unsorted | boolean |  | No |

#### Users

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| firstName | string | First name
_Example:_ `"This is first name"` | No |
| iamUserId | integer | iamUserId
_Example:_ `"This is iamUserId"` | No |
| lastName | string | Last name
_Example:_ `"This is last name"` | No |
