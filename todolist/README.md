# To-Do List App (MERN Stack)

To-Do List application built using the MERN stack (MongoDB, Express, React, Node.js).

---

## Features

- Create tasks
- View all tasks
- Update tasks
- Mark tasks as completed
- Delete tasks
- Search tasks by title

---

## Tech Stack

Frontend: html, css, tailwind css,javascript, react.js
Backend: node.js, express.js  
Database: mongoDB 
API: REST API using Axios

---

## Database Model

task data format:

```json
{
  "_id": "64f1a2b3c9d1e2f3a4b5c6d7",
  "title": "wish commanded mere akka",
  "completed": false,
}
```
---
## API Endpoints

1. GET	/todos	get all todos
2. POST	/todos	add new task
3. PUT	/todos/:id	update task
4. PATCH	/todos/:id	mark unmark task
5. DELETE	/todos/:id	delete task
6. GET	/todos/search	search tasks by title

## format of API response :-
```json
{
  "success": true,
  "data": {
    "_id": "64f1a2b3c9d1e2f3a4b5c6d7",
    "title": "task name",
    "completed": false
  },
  "message": "task completed"
}
```
## Installation

# Backend
folder: /todolist/backend
npm install
npm init -y
npm i express
npm i -g nodemon (globally)
npm i nodemon (for specific folder)
npm i dotenv

RUN: npm run dev

# Frontend
folder: /todolist
npm install
npm install axios
npm install react-router-dom
npm install tailwindcss @tailwindcss/vite

RUN: npm run dev

## Project Workflow

User → React → Axios api → Backend → MongoDB → Response → frontend

## Future Improvements
Add authentication (JWT)
Improve UI/UX

## Postman Testing

testing of all api is done by postmen application

1. Create Todo

# Request
Method: POST
URL: /todos

Body (JSON):
```json
{
  "title": "Learn React"
}
```
# Response
```json
{
  "success": true,
  "data": {
    "_id": "123",
    "title": "Learn React",
    "completed": false
  },
  "message": "anything"
}
```
2. Get All Todos

# Request
Method: GET
URL: /todos

# Response
```json
{
  "success": true,
  "data": [
    {
      "_id": "123",
      "title": "Learn React",
      "completed": false
    },
  ],
  "message": "anything"
}
```
3. Update Todo

# Request
Method: PUT
URL: /todos/:id

Body:
```json
{
  "title": "Learn Node"
}
```
4. Toggle Complete

Request
Method: PATCH
URL: /todos/:id

5. Delete Todo

Request
Method: DELETE

URL: /todos/:id

6. Search Todo

Limitations: Search uses simple regex

# Request
Method: GET

URL: /todos/search?title=React

## Response
```json
{
  "success": true,
  "data": [
    {
      "_id": "123",
      "title": "Learn React",
      "completed": false
    }
  ],
  "message": "anything"
}
```
# API Testing (Postman)

## Add Task
**Success (201):**  
![Create Task OK](screenshots/postmen-testing/create_task_ok.png)

## Delete Task
**Success (200 OK):**  
![Delete OK](screenshots/postmen-testing/delete_ok.png)

## Get All Tasks
**Success (200 OK):**  
![Get All OK](screenshots/postmen-testing/get_all_ok.png)

## Get Task by ID
**Success (200 OK):**  
![Get By ID OK](screenshots/postmen-testing/get_by_id_ok.png)

**Failed (404):**  
![Get By ID Error](screenshots/postmen-testing/get_by_id_error.png)

## Mark Task by ID
**Success (200 OK):**  
![Mark By ID OK](screenshots/postmen-testing/mark_by_id_ok.png)

**Failed (404):**  
![Mark By ID Error](screenshots/postmen-testing/mark_by_id_error.png)