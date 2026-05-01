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

# Request
Method: GET
URL:
/todos/search?title=React

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
## Project Workflow

User → React → Axios api → Backend → MongoDB → Response → frontend

## Future Improvements
Add authentication (JWT)
Improve UI/UX

## Installation

git clone https: github.com/govind4033/React-js.git

Backend Setup
// in backend folder
npm install
npm run dev

Frontend Setup
npm install
npm run dev
