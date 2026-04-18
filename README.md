

# Full Stack Todo Application (Backend Focus)

A professional-grade, containerized Todo application built with a modern backend stack. This project demonstrates the implementation of a RESTful API, database management with an ORM, user authentication, and environment containerization.

## 🚀 Features

  - **Full CRUD Functionality**: Create, Read, Update, and Delete todo items.
  - **User Authentication**: Secure user registration and login system.
  - **Database Persistence**: Persistent storage using PostgreSQL.
  - **ORM Integration**: Type-safe database queries using Prisma.
  - **Containerization**: Entire environment (App + Database) orchestrated using Docker Compose.
  - **RESTful API**: Clean API endpoints for frontend-backend communication.

## 🛠 Tech Stack

  - **Backend**: Node.js, Express.js
  - **Database**: PostgreSQL
  - **ORM**: Prisma
  - **Environment**: Docker, Docker Compose
  - **Tooling**: Nodemon (Development), Postman (API Testing)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

  - [Node.js](https://nodejs.org/) (v16 or higher)
  - [Docker & Docker Desktop](https://www.docker.com/products/docker-desktop/)
  - [Git](https://git-scm.com/)

## ⚙️ Installation & Setup

1.  **Clone the repository**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Environment Configuration**
    Create a `.env` file in the root directory and add your connection string:

    ```env
    DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
    JWT_SECRET="your_super_secret_key"
    ```

4.  **Spin up Docker Containers**
    This command starts the PostgreSQL database and the Node.js server in separate containers.

    ```bash
    docker-compose up -d
    ```

5.  **Run Prisma Migrations**

    ```bash
    npx prisma migrate dev --name init
    ```

## 🚀 Usage

The server will be running at `http://localhost:8484`.

### API Endpoints

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| **POST** | `/register` | Register a new user | No |
| **POST** | `/login` | Login and receive JWT | No |
| **GET** | `/todos` | Get all user todos | **Yes** |
| **POST** | `/todos` | Create a new todo | **Yes** |
| **PUT** | `/todos/:id` | Update/Complete todo | **Yes** |
| **DELETE** | `/todos/:id` | Delete a todo | **Yes** |

## 🐳 Docker Commands

  - **Start App**: `docker-compose up`
  - **Stop App**: `docker-compose down`
  - **View Logs**: `docker-compose logs -f`

