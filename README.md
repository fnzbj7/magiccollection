# magiccollection

## Description

One day, i decided that, i want to train my webpage developing skills, and i need a system to organize my Magic® The Gathering collections. <br/>So, that's when this git repo was made.

## Live

This webpage is running on www.almateszekfoglaltvolt.hu <br/>
\#Funfact: The url means **'I eat apples' was already taken**, don't ask how do i come up with this idea :)

## Functions
Now there is 2 function on the live page<br/>
* The card list page (http://www.almateszekfoglaltvolt.hu/cards). Click on any Set icons on the left side. (There is a known bug, where the first selected set is not appearing, it will be fixed soon)
* There is a calendar (still in development) to show and manage Magic contests (https://almateszekfoglaltvolt.hu/calendar)
* Worth mentioning, you can register to my page and you get a dummy email. If you register and log in, you can see your own cards. The problem is that, you can't add new cards on the webpage (Work in progress)

## Stack

**Frontend:** Angular 7<br/>
**Backend:** Node.js + Express<br/>
**Database:** Mysql


## Needed enviroment variable

* **JWT_KEY_MAGIC**: It's the key for the JWT token
* **PORT**: This port number will be used for the backend. *The default is 3000*
* **DATABASE_URL**: The address to the database. (now only support MySQL databases)
* **MAILGUN_API_KEY**: This key is used to send emails
