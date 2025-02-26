
## Backend - Diabetes-Free Products

### 1. Clone the Repository
```sh
git clone https://github.com/Abhishekyaduvanahi/backend
cd backend
```
### 2. Install Dependencies
```sh
npm install
```

### 3. XAMPP
- Install XAMPP
- Run MySQL
- Create new database 'backend'
- Create users table with dummy database
```sh
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

- Add dummy users

### 4.Run the project
```sh
npm start
```
- Go to http://localhost:8000/users must give you list of all users.