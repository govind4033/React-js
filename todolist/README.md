# Todo REST API

## Introduction

A REST API that supports full CRUD operations — creating, reading, updating, and deleting tasks.

---

## API Endpoints

### 1. Get All Tasks

| Property | Value |
|----------|-------|
| **Endpoint** | `/todos` |
| **Method** | `GET` |
| **Response** | Array of all task objects |

---

### 2. Create a New Task

| Property | Value |
|----------|-------|
| **Endpoint** | `/todos` |
| **Method** | `POST` |

**Request Body:**
```json
{
  "todo": "learn Express.js"
}
```

**Response:** The newly created task object.

---

### 3. Update a Task

| Property | Value |
|----------|-------|
| **Endpoint** | `/todos/{id}` |
| **Method** | `PUT` |

**Request Body:**
```json
{
  "todo": "master Express.js"
}
```

**Response:** The updated task object.

---

### 4. Mark Task as Completed

| Property | Value |
|----------|-------|
| **Endpoint** | `/todos/{id}` |
| **Method** | `PATCH` |

**Response:** The task object with `"completed": true`.

---

### 5. Delete a Task

| Property | Value |
|----------|-------|
| **Endpoint** | `/todos/{id}` |
| **Method** | `DELETE` |

**Response:**
```json
{
  "message": "Task deleted successfully"
}
```

---

## How It Works

| Action | Endpoint | Method | Description |
|--------|----------|--------|-------------|
| App loads | `/todos` | `GET` | Fetches all existing tasks |
| Add task | `/todos` | `POST` | Creates a new task |
| Edit task | `/todos/{id}` | `PUT` | Updates all fields of a task |
| Mark complete | `/todos/{id}` | `PATCH` | Marks a specific task as completed |
| Delete task | `/todos/{id}` | `DELETE` | Removes a specific task |

---

## Challenges Faced

### 1. CORS Configuration
Setting up CORS (Cross-Origin Resource Sharing) was a new concept that took about an hour to figure out. CORS is required to allow communication between the frontend and backend when they run on different origins. Learning what it does and how to install and configure it properly was an unexpected but valuable learning experience.

### 2. Frontend API Integration
The backend was completed relatively quickly, but the frontend took significantly more time — particularly the part where API calls are made using `fetch`. Getting the request/response handling right across all five operations required careful debugging and iteration.