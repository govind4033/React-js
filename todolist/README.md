## To-Do List API (MERN Stack)

A full-stack To-Do List application built using the MERN stack.
This project demonstrates CRUD operations, REST API design, and MongoDB integration with a React frontend.


## Features
	•	Create tasks
	•	View all tasks
	•	Update tasks
	•	Mark tasks as completed
	•	Delete tasks
	•	Persistent storage using MongoDB
	•	Real-time UI updates


## Tech Stack

Layer	Technology
Frontend	React.js
Backend	Node.js, Express.js
Database	MongoDB (Mongoose)
API	REST API
Data	JSON



## Database Model

Each todo is stored in MongoDB as a document:

{
  "_id": "64f1a2b3c9d1e2f3a4b5c6d7",
  "title": "Learn Express",
  "completed": false,
  "createdAt": "2026-04-30T10:00:00.000Z"
}



## API Endpoints

Method	Endpoint	Description
GET	/todos	Fetch all todos
POST	/todos	Create a new todo
PUT	/todos/:id	Update todo
PATCH	/todos/:id	Toggle completion
DELETE	/todos/:id	Delete todo



## Example API Response

{
  "success": true,
  "data": {
    "_id": "64f1a2b3c9d1e2f3a4b5c6d7",
    "title": "Learn Express",
    "completed": false
  }
}

## Project Workflow

User → React UI → API Request → Express Backend → MongoDB → Response → UI Update



## Key Learnings
	•	REST API design principles
	•	MongoDB schema design using Mongoose
	•	React state management with API integration
	•	Handling asynchronous data flow
	•	Debugging frontend-backend mismatches


## Challenges Faced

🔹 MongoDB Integration

Migrated from in-memory storage to MongoDB for persistence.

🔹 _id Handling Issue

Frontend initially failed due to inconsistent API response structure (data vs message).

🔹 UI Sync Problem

New todos were not rendering immediately — fixed by properly updating React state after API response.


## Future Improvements
	•	🔐 Authentication (JWT)
	•	🔍 Search & filter todos
	•	📊 Pagination
	•	🎨 Better UI/UX
	•	⚡ Optimistic UI updates


## Installation

# Clone repository
git clone https://github.com/govind4033/React-js.git

# Install backend dependencies
cd backend
npm install

# Start backend
npm run dev

# Install frontend dependencies
cd frontend
npm install

# Start frontend
npm run dev



## 👨‍💻 Author

Govind lodhi
MERN Stack Developer

⸻
⭐ If you like this project

Give it a ⭐ on GitHub and feel free to fork it!