#  API Documentation

Due to probelms with other build teams APIs I have used this backend to deploy and route data for serveral other teams. The main routes displayed are for the SIXR team. At the end of the document routes for Phan's team can be found. Other routes have been purposfuly omitted from this documentaion becasue documentation exists for those routes in those teams GITHUB repos.

https://vr-overlord-server.herokuapp.com/

## Table of Contents
 
- [Auth Routes](#auth-routes)
  * [Register](#register)    
  * [Login](#login)    
- [User Routes](#user-routes)
  * [Get Users](#get-users)    
  * [Get User](#get-user)
  * [Get Projects by User ID](#get-projects-by-user-id)
  * [Delete User](#delete-user)
  * [Update User](#update-user)
- [Project Routes](#project-routes)
  * [Create Project](#create-project)    
  * [Get Projects](#get-projects)    
  * [Get Projects](#get-projects-1)    
  * [Update Project](#update-project)    
  * [Delete Project](#delete-project)
    



# Auth Routes
| Table | Method |       Endpoint |                      Description |
| ----- | :----: | -------------: | -------------------------------: |
| users |  POST  | /auth/register |            Registers a new user. |
| users |  POST  | /auth/login    | Logs in already registered user. |

## Register 📑

### Registers a new user.

_Method URL:_ `https://vr-overlord-server.herokuapp.com//auth/register`

_HTTP Method:_ **[POST]**

## Login 📃

### Logs in an already registered user.

_Method URL:_ `https://vr-overlord-server.herokuapp.com/auth/login`

_HTTP Method:_ **[POST]**


# User Routes

## Get Users 🔍

### Gets a list of users.

_Method URL:_ `https://vr-overlord-server.herokuapp.com/users/`

_HTTP Method:_ **[GET]**


## Get User

### Gets user by ID. 🔍

_Method URL:_ `https://vr-overlord-server.herokuapp.com/users/:id`

_HTTP Method:_ **[GET]**

## Get Projects by User ID 🔍

### Gets all projects for specified user.

_Method URL:_ `https://vr-overlord-server.herokuapp.com/users/:id/projects`

_HTTP Method:_ **[GET]**

## Delete User 🔥

### Deletes user by ID.

_Method URL:_ `https://vr-overlord-server.herokuapp.com/users/:id`

_HTTP Method:_ **[DELETE]**

## Update User  💳

### Updates user by ID.

_Method URL:_ `https://vr-overlord-server.herokuapp.com/users/:id`

_HTTP Method:_ **[PUT]**

# Project Routes

## Create Project 📤

### Creates a project, with a project type, description, funding amount, and user id.

_Method URL:_ `https://vr-overlord-server.herokuapp.com/projects`

_HTTP Method:_ **[POST]**

## Get Projects 📥

### Gets a list of projects.

_Method URL:_ `https://vr-overlord-server.herokuapp.com/projects`

_HTTP Method:_ **[GET]**

## Get Projects 📥

### Gets project by ID.

_Method URL:_ `https://vr-overlord-server.herokuapp.com/projects/:id`

_HTTP Method:_ **[GET]**

## Update Project ✒️

### Updates project by ID.

_Method URL:_ `https://vr-overlord-server.herokuapp.com/projects/:id`

_HTTP Method:_ **[PUT]**

#### Example

```
{
  "projectName": "Test project 1",
  "projectType": "Tech",
  "description": "Small tech business test project 1",
  "fundingAmount": 5000.00,
  "user_id": 1, 
}
```

## Delete Project  🔪

### Deletes project by ID.

_Method URL:_ `https://vr-overlord-server.herokuapp.com/projects/:id`

_HTTP Method:_ **[DELETE]**

## Teams

### Get Teams

_Method URL:_ `https://vr-overlord-server.herokuapp.com/teams`


_HTTP Method:_ **[GET]**

### Get Team by ID

_Method URL:_ `https://vr-overlord-server.herokuapp.com/teams/:id`


_HTTP Method:_ **[GET]**

### Create Team

_Method URL:_ `https://vr-overlord-server.herokuapp.com/teams`


_HTTP Method:_ **[POST]**


# Notes 🚸

Restrictions on back end routes have been lifted to allow students to learn about client side authentication  

Due to probelms with other build teams apis I have used this backend to deploy data from serveral other teams.

Routes for data stored is as follows

## Phan's Routes
``#GET and #POST serviceWorkers

/serviceWorkers

#GET by id

/serviceWorkers/:id

#DELETE

/serviceWorkers/:id

#PATCH

/serviceWorkers/:id

#GET all transactions

/banker/Alltickets

#DELETE transactions

/banker/Alltickets/:id

#POST transactions

/banker/Alltickets

#GET and #POST tips

/banker/tips

#tips by  id

/banker/tips/:id``

