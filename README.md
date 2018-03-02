# Fruit Voting Application

## About Application
This is an implementation of a voting application where a user can login and vote for their favorite fruit. The user can log back in as see which fruit they voted for.  The application is created using ReactJS in the front-end and PHP at the backend with MYSQL database.

### Note
The code has been deployed on AWS EC2 => http://ec2-52-201-227-81.compute-1.amazonaws.com:5000/
A production build for the code is uploaded. To run the production build use the following commands

```sh
$ cd Application_Name
$ npm install
$ npm run build
```
After the build is complete use this to host on a static server

```sh
$ npm install -g serve
$ serve -s build
```

This build will run on 
```sh 
localhost: 5000
```

For this implementation the user can vote once per login session. 

  
### Tech

The application uses these technologies:
* [React.js] - a declarative, efficient, and flexible JavaScript library for building user interfaces
* [PHP] - is a popular general-purpose scripting language
* [MySQL] - is an open-source relational database management system


### Installation

This application requires 
* [React.js](https://facebook.github.io/react/) 
* [PHP XAMPP](https://www.apachefriends.org/index.html)

Install the dependencies and devDependencies using:

XAMP server needs to be setup to run the PHP backend code.

```sh
$ cd Application_Name
$ npm install
```

For executing the code...

```sh
$ npm start
```
Go to your browser 
```sh
localhost:3000
```
