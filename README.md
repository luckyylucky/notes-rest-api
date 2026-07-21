# 📝 Notes REST API
A RESTful Notes API built using **Node.js**, **Express.js**, **MongoDB Atlas**, and **Mongoose**.
The API allows users to create, read, update, and delete notes while following the MVC architecture and REST API principles.

## Features

- Create Notes
- Read Notes
- Update Notes
- Delete Notes
- MongoDB Atlas Integration
- Mongoose Schema Validation
- RESTful API Architecture
- Environment Variables using dotenv
- Error Handling

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman
- Git
- GitHub

## 🚀 Installation

Clone the repository
```bash
git clone https://github.com/luckyyylucky/notes-rest-api.git
```
Install dependencies
```bash
npm install
```
Create a `.env` file
Start the server
```bash
node server.js
```

## Environment Variables
Create a `.env` file in the project root and add:
```env
MONGO_URI=<your_mongodb_connection_string>
```

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /notes | Create Note |
| GET | /notes | Get All Notes |
| PUT | /notes/:id | Update Note |
| DELETE | /notes/:id | Delete Note |

## 📌 Project Highlights

- Built using MVC Architecture
- Connected to MongoDB Atlas Cloud Database
- RESTful API Design
- Schema Validation using Mongoose
- Tested using Postman

##  Future Improvements
- User Authentication using JWT
- Password Encryption using bcrypt
- Pagination
- Search Notes
- Filter Notes

## 🌐 Live API
Render Deployment:
https://notes-rest-api-tgum.onrender.com

## 👨‍💻 Author
Lucky Rupreja
GitHub:
https://github.com/luckylucky
