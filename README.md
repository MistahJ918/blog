# Simple Blog Website (CIS737 Project Skeleton)

## Overview
This project is a simple blog-style website built using HTML, CSS, JavaScript, and JSON. It demonstrates core web development concepts including page structure, styling, dynamic content loading, and data persistence using localStorage.

The site includes:
- A homepage that displays blog posts
- A form page for creating new posts
- A navigation bar for easy movement between pages
- A responsive layout using CSS Grid
- JSON-based starter posts
- LocalStorage support for saving new posts

---

## File Structure

blog/
│── index.html          → Homepage that displays posts  
│── create.html         → Form page for creating new posts  
│
├── css/
│   └── styles.css      → Styling for layout, navbar, posts, and forms  
│
├── js/
│   ├── script.js       → Loads and displays posts  
│   └── create.js       → Saves new posts to localStorage  
│
└── data/
    └── posts.json      → Starter blog posts  

---

## How It Works

### 1. index.html
Loads posts from:
- posts.json (starter data)
- localStorage (user-created posts)

JavaScript dynamically inserts posts into the page.

### 2. create.html
Contains a form that allows the user to create a new blog post.  
When submitted:
- The post is saved to localStorage
- The user is redirected back to the homepage

### 3. styles.css
Provides:
- Responsive grid layout
- Navigation bar styling
- Form styling
- Post card styling

### 4. script.js
Fetches posts from JSON and localStorage, merges them, and renders them to the page.

### 5. create.js
Handles form submission and saves new posts.

---

## How to Run the Project

### Option 1: Using Live Server (recommended)
1. Open the project folder in VS Code  
2. Right-click `index.html`  
3. Select **Open with Live Server**

### Option 2: Manual
1. Open the project folder on your computer  
2. Double-click `index.html`  
3. The site will open in your browser

---

## Future Expansion Ideas
- Single post pages
- Edit/delete functionality
- Search bar
- Categories/tags
- Dark mode
- Backend integration (Node.js, Python, etc.)

---

## Author
Created by Joshua Tankersley as part of CIS737 Web Development coursework.
