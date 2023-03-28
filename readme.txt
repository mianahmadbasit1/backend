npm init -y for creating backend project
use this command in packge.json in script


"dev": "nodemon server.js",
    "start": "node server.js"
 install nodemon 
 npm i -g nodemon
 install express mongoose .env cors
 npm i express mongoose dotenv cors
 npm run dev for runing your server 
 ------
 create a account on mongodb 
 create user & set access network than connect copy uri
 craete a file .env
 paste your uri replace id password in this file
 go to server & connect mongoose use try catch (promises)
 in backend create the folder routes & create routes
 -----
 than create three folder & file in backend 
 routes models controller 
 &  file in js
1- (set in folder & file of model 
 use schema )
2- now create controller
import model in controller file
3-this controller call in router & taskrouterjs
than move & server js import & req  router 
than use app.use api url etc in the last before listen port
get task funcation is ended
-----------------------------
Save function is created in task controller
update funcation 
delete funcation 
All the file create in task controller 

------------------------------------
than move to taskroute & call the save update delete props
----------------
go to task routes
& call the method of routes get post put delete (crud opertion )
-------------------backend is done
