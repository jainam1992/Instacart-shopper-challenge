# Instacart-shopper-challenge

## Goal

To build a shopper registration web application to sign-up shoppers. This challenge is broken into two parts. The first part is implementing the public-facing site that a prospective Instacart Shopper would see. The second is writing analytics to monitor the progress of shoppers through the hiring funnel.

## Requirements

python -- 2.7.9     django -- 1.11       sqlite database

## Installation
+* ``` git clone https://github.com/jainam1992/Instacart-shopper-challenge.git (I am not able to push entire database to git repo due to huge db size.  You can also download zip folder from hackerrank and test my app by using following commands)```
+* Once you download project or clone project, follow these steps mentioned:
+* ``` cd instacart-shopper-challenge/instaCart ```
+* ``` Now run folowing commands: ```
	+* ``` python manage.py makemigrations```
	+* ``` python manage.py migrate ```
    +* ``` python manage.py runserver```
     +* ``` Got to this url: http://127.0.0.1:8000/shopper/ ```


## APIs exposed by Application:

1. The web application exposes basic APIs for register, login, logout, editing an application. Following are those APIs
  -> http://127.0.0.1:8000/shopper/register
  -> http://127.0.0.1:8000/shopper/login
  -> http://127.0.0.1:8000/shopper/logout
  -> http://127.0.0.1:8000/shopper/edit

2. We also expose an analytics api to monitor the progress of shoppers. This API returns the status of weekly shopper application grouped by workflow state count. This can be accessed by --
http://127.0.0.1:8000/shopper/funnel/?start_date=START_DATE&end_date=END_DATE The dates must follow the YYYY-MM-DD format. 
Eg - http://127.0.0.1:8000/shopper/funnel/?start_date=2014-01-01&end_date=2018-12-31

## Design Overview

I am using sqlite database mentioned in the question. Using all columns from database in the project.

I also added django's default mem-cache to speed up query. I was able to retrieve same query really fast after using cache.

The cache is using week as key, and hence only 54 entries per year is required. Currently cache is invalidated only on new user registration as there is no other way of altering an application state. Once such API is written, the cache needs to be invalidated from that API as well. With so much cache invalidation, the efficiency of using cache might diminish. Hence, instead of invalidating the entire cache, we can update the cache.


## Design Improvements To do:

	Add better authentication and error handling in code.
	Designing better front-end
	Add some pytest or pyunit unit-tests to test corner cases.