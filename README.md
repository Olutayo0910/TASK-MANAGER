# Task Manager API

A simple task manager API built with Express.js and MongoDB. This project allows users to create, read, update, and delete tasks via a RESTful API. Additionally, it includes a front-end interface to interact with the API.

## Features

- Create new tasks
- Retrieve all tasks
- Retrieve a single task by ID
- Update tasks
- Delete tasks

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Axios
- Tailwind CSS
- Font Awesome

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/TASK-MANAGER-API.git
    cd task-manager-api
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add your MongoDB connection string:

    ```env
    MONGO_URI=your_mongo_db_connection_string
    PORT=3000
    ```

4. **Start the server:**

    ```bash
    npm start
    ```

    The server will start on the port specified in the `.env` file.

## API Endpoints

### Get All Tasks

- **URL:** `/api/v1/tasks`
- **Method:** `GET`
- **Description:** Retrieve all tasks.

### Create a New Task

- **URL:** `/api/v1/tasks`
- **Method:** `POST`
- **Description:** Create a new task.
- **Request Body:**

    ```json
    {
        "name": "Task name"
    }
    ```

### Get a Single Task

- **URL:** `/api/v1/tasks/:id`
- **Method:** `GET`
- **Description:** Retrieve a single task by its ID.

### Update a Task

- **URL:** `/api/v1/tasks/:id`
- **Method:** `PATCH`
- **Description:** Update a task.
- **Request Body:**

    ```json
    {
        "name": "Updated task name",
        "completed": true
    }
    ```

### Delete a Task

- **URL:** `/api/v1/tasks/:id`
- **Method:** `DELETE`
- **Description:** Delete a task by its ID.

## Front-End

The front-end interface is located in the public folder and uses Tailwind CSS for styling.

### Main Page

- **Path:** `/`
- **Description:** Displays the task manager interface.

### Edit Task Page

- **Path:** `/task.html?id=taskID`
- **Description:** Provides an interface to edit a task.

## License

This project is licensed under the MIT License.
