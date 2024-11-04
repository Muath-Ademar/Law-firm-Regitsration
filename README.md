# Law Firm Registration Application

## Overview
This project is a Law Firm Registration application built using Next.js for the frontend and Flask (Python) for the backend. It allows users to register, check if their email exists in the database, and view their profile. 
---

## Project Structure
- **Frontend**: Next.js
- **Backend**: Flask with SQLAlchemy for database handling
- **Database**: Connection string configured via `.env`

---

## Features
1. **Form Setup and Navigation**: The frontend collects user information, including Name, Location, Phone Number, Email, Description, and Rating.
2. **API Endpoints**:
   - **Register API**: Saves user data and returns a unique `userID`.
   - **GetProfileById API**: Retrieves user details based on `userID`.
   - **GetEmail API**: Checks if a user email exists in the database. If the email exists, it transitions to the main interface and displays the user's information; otherwise, it prompts the user to register. A prompt is also displayed if the user attempts to continue without filling in all fields.

---

## Setup Instructions

### Prerequisites
- **Node.js and npm** (for the frontend)
- **Python and pip** (for the backend)
- **Database Driver**: `ODBC 18` is required for SQLAlchemy ([download link](https://docs.microsoft.com/en-us/sql/connect/odbc/download-odbc-driver-for-sql-server))
- **Install `pyodbc`** for SQLAlchemy:
   ```bash
   pip install pyodbc
   ```

---

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/law-firm-registration.git
cd law-firm-registration
```

### 2. Backend Setup
#### 2.1. Install Dependencies
Navigate to the server folder and install the necessary Python packages.
```bash
cd server
pip install Flask Flask-Migrate Flask-CORS Flask-SQLAlchemy python-dotenv pyodbc
```

#### 2.2. Configure `.env` File
Create a `.env` file in the server directory with the following content:
```
DATABASE_URL=mssql+pyodbc://username:password@hostname/database_name
SECRET_KEY=your_secret_key
```
Ensure the `DATABASE_URL` format is compatible with SQLAlchemy.

#### 2.5. Run the Backend Server
Start the Flask backend server:
```bash
flask run
```
The backend should now be accessible at `http://localhost:5000`.

### 3. Frontend Setup
#### 3.1. Navigate to the Client Folder and Install Dependencies
```bash
cd ../client
npm install
```

#### 3.2. Install Material-UI
Install Material-UI and its dependencies:
```bash
npm install @mui/material @emotion/react @emotion/styled
```
Note: you may need additional Material-UI components or packages.

#### 3.3. Run the Frontend Development Server
Start the Next.js frontend server:
```bash
npm run dev
```
The frontend should now be accessible at `http://localhost:3000`.

---

## API Documentation

### Register API
- **Endpoint**: `/register`
- **Method**: `POST`
- **Request Body**:
```json
{
  "name": "John Doe",
  "location": "New York",
  "phone": "123-456-7890",
  "email": "johndoe@example.com",
  "description": "Lawyer specializing in corporate law",
  "rating": 5
}
```
- **Response**:
```json
{
  "userID": "unique-user-id"
}
```

### GetProfileById API
- **Endpoint**: `/user/<user_id>`
- **Method**: `GET`
- **Response**:
```json
{
  "userId": 1,
  "name": "John Doe",
  "location": "New York",
  "phone": "123-456-7890",
  "email": "johndoe@example.com",
  "description": "Lawyer specializing in corporate law",
  "rating": 5
}
```

### GetEmail API
- **Endpoint**: `/get-email`
- **Method**: `POST`
- **Request Body**:
```json
{
  "email": "johndoe@example.com"
}
```
- **Response (if user found)**:
```json
{
  "userId": 1,
  "name": "John Doe",
  "location": "New York",
  "phone": "123-456-7890",
  "email": "johndoe@example.com",
  "description": "Lawyer specializing in corporate law",
  "rating": 5
}
```
**Usage**: This API is called when a user enters their information and clicks "Continue". If the email exists in the database, the user is directed to the main interface where their information is displayed. If the email is not found, the user is prompted to register. If the user attempts to proceed without filling out all form fields, they will be prompted to complete the form.

---

## Troubleshooting
- Verify that ODBC 18 is installed and the database connection string is compatible with SQLAlchemy.
