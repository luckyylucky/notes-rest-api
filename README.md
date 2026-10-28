# 📝 Notes REST API

A RESTful Notes API built using **Node.js, Express.js, MongoDB Atlas, and Mongoose**, following the **MVC architecture**.

The API allows users to register, log in securely, and manage their personal notes through CRUD operations. It uses **JWT authentication** to protect routes and **bcrypt** to securely hash user passwords.

## 🚀 Features

- User Registration
- User Login
- JWT-Based Authentication
- Protected Routes
- Password Hashing using bcrypt
- Create Notes
- Get All Notes
- Update Notes
- Delete Notes
- MongoDB Atlas Integration
- Mongoose Schema Validation
- MVC Architecture
- Environment Variables using dotenv
- Centralized Error Handling

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Backend Framework:** Express.js
- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **Authentication:** JSON Web Token (JWT)
- **Password Security:** bcrypt
- **API Testing:** Postman
- **Version Control:** Git and GitHub
- **Deployment:** Render

## 📂 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/luckyyylucky/notes-rest-api.git
```

### 2. Navigate to the Project Directory

```bash
cd notes-rest-api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Replace the placeholder values with your own configuration.


### 5. Start the Server

```bash
node server.js
```

The server will start on the configured port.

## 🔐 Authentication

The API uses JWT (JSON Web Token) for authentication.

- Users can register and log in.
- Passwords are hashed using bcrypt before being stored.
- After successful login, a JWT is generated.
- Protected routes require a valid JWT.
- The server verifies the token before allowing access to protected resources.

### Authorization Header

For protected endpoints, include the JWT in the request header:

```http
Authorization: Bearer <your_jwt_token>
```

## 📡 API Endpoints

### Authentication Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/notes/register` | Register a new user |
| POST | `/notes/login` | Log in an existing user |

### Notes Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/notes` | Create a note |
| GET | `/notes` | Get all notes |
| PUT | `/notes/:id` | Update a note |
| DELETE | `/notes/:id` | Delete a note |

**Note:** Authentication is required for protected Notes routes.

## 🧪 API Testing

The API was tested using **Postman** to verify:

- User registration and login
- JWT token generation and authentication
- Protected route access
- Notes CRUD operations
- API responses and error handling

## 📌 Project Highlights

- Implemented RESTful APIs using Express.js.
- Followed MVC architecture for code organization.
- Integrated MongoDB Atlas using Mongoose.
- Implemented JWT-based authentication and protected routes.
- Secured user passwords using bcrypt hashing.
- Added schema validation and centralized error handling.
- Tested API endpoints using Postman.
- Deployed the backend on Render.

## 🌐 Live API

**Render Deployment:**  
https://notes-rest-api-tgum.onrender.com

## 👨‍💻 Author

**Lucky Rupreja**

- GitHub: https://github.com/luckyylucky