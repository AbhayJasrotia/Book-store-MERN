# 📚 ABJ Book Store - MERN Stack Application

ABJ Book Store is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This project allows users to manage a list of books by performing basic CRUD (Create, Read, Update, Delete) operations.

## 🚀 Live Demo
[Link to Demo (if deployed)](https://your-live-demo-link.com)

## 📸 Project Overview

![Project Screenshot](https://link-to-screenshot.com/screenshot.png)

## ✨ Features

- **Add Books**: Create new books with title, author, and publication year.
- **View Books**: List all books with details in both table and card view.
- **Edit Books**: Update existing book information.
- **Delete Books**: Remove books from the collection.
- **Responsive Design**: Fully responsive, working seamlessly on desktop, tablet, and mobile devices.

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Axios, React Router, React Icons
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (NoSQL)
- **Other Libraries**: 
  - Vite (Development Tool)
  - Notistack (Snackbars for notifications)

## 🖼️ UI Screenshots

### Home Page (Books List)
![Home Page](https://link-to-screenshot.com/home-page.png)

### Add Book Page
![Add Book](https://link-to-screenshot.com/add-book-page.png)

## 📂 Project Structure

```bash
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   └── server.js
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── App.jsx
│   └── package.json
└── README.md
```

## 🚀 Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js & npm installed on your machine
- MongoDB installed or use MongoDB Atlas (cloud-based)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/book-store-mern.git
   cd book-store-mern
   ```

2. Install dependencies for the backend and frontend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Start the MongoDB server:
   ```bash
   mongod
   ```

4. Set up environment variables in a `.env` file:
   ```bash
   MONGODB_URI=mongodb://localhost:27017/bookstore
   PORT=5555
   ```

5. Start the backend:
   ```bash
   cd backend
   npm start
   ```

6. Start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```

7. Visit `http://localhost:3000` in your browser.

## 🤝 Contribution

Feel free to fork this project, raise issues, or submit PRs if you'd like to contribute. Contributions are always welcome!

## 📝 License

This project is licensed under the MIT License.

## 📬 Contact

- **Author**: Abhay J.
