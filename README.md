# TODO-APP
A professional-grade, containerized Todo application built with a modern backend stack. This project demonstrates the implementation of a RESTful API, database management with an ORM, user authentication, and environment containerization.

🚀 Features
Full CRUD Functionality: Create, Read, Update, and Delete todo items.

User Authentication: Secure user registration and login system.

Database Persistence: Persistent storage using PostgreSQL.

ORM Integration: Type-safe database queries using Prisma.

Containerization: Entire environment (App + Database) orchestrated using Docker Compose.

RESTful API: Clean API endpoints for frontend-backend communication.

🛠 Tech Stack
Backend: Node.js, Express.js

Database: PostgreSQL

ORM: Prisma

Environment: Docker, Docker Compose

Tooling: Nodemon (Development), Postman (API Testing)

📋 Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v16 or higher)

Docker & Docker Desktop

Git

⚙️ Installation & Setup
Clone the repository

Bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install dependencies

Bash
npm install
Environment Configuration
Create a .env file in the root directory and add your connection string:

Code snippet
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
JWT_SECRET="your_super_secret_key"
Spin up Docker Containers
This command starts the PostgreSQL database and the Node.js server in separate containers.

Bash
docker-compose up -d
Run Prisma Migrations

Bash
npx prisma migrate dev --name init
