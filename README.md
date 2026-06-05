# AI Job Board

A modern and responsive Job Board application built using React, Vite, Tailwind CSS, GitHub Actions, and Vercel. The platform allows users to browse jobs, search and filter listings, view job details, save jobs for later, and switch between light and dark themes.

## Live Demo

**Live Application:** https://job-board-application-livid.vercel.app/

## GitHub Repository

**Source Code:** https://github.com/abhishekbhargava2002/Job-Board-Application.git

---

# Project Overview

The AI Job Board is a web application designed to provide a clean and user-friendly job search experience. Users can search for jobs, filter listings by location, view detailed job information, and save jobs using browser storage.

The project demonstrates modern frontend development practices, responsive UI design, CI/CD implementation, and AI-assisted software development.

---

# Features

### Core Features

* Browse available job listings
* Search jobs by title
* Filter jobs by location
* View detailed job descriptions
* Save jobs for later viewing
* Responsive design for desktop and mobile devices
* Dark Mode / Light Mode toggle
* Persistent theme and saved jobs using Local Storage

### Additional Features

* React Router navigation
* Reusable component architecture
* Modern UI using Tailwind CSS
* GitHub Actions CI pipeline
* Automatic deployment with Vercel

---

# Screenshots

## Home Page

(Add screenshot here)

## Job Details Page

(Add screenshot here)

## Dark Mode

(Add screenshot here)

---

# Tech Stack

### Frontend

* React
* Vite
* JavaScript (ES6+)
* Tailwind CSS

### Routing

* React Router DOM

### State Management

* React Hooks

  * useState
  * useEffect

### Deployment

* Vercel

### CI/CD

* GitHub Actions

### Version Control

* Git
* GitHub

---

# Folder Structure

job-board-app/

├── public/

├── src/

│   ├── components/

│   │   ├── Navbar.jsx

│   │   ├── SearchBar.jsx

│   │   └── JobCard.jsx

│   │

│   ├── pages/

│   │   ├── Home.jsx

│   │   └── JobDetails.jsx

│   │

│   ├── data/

│   │   └── jobs.js

│   │

│   ├── App.jsx

│   └── main.jsx

│

├── .github/

│   └── workflows/

│       └── deploy.yml

│

├── package.json

└── README.md

---

# Installation

## Clone Repository

git clone https://github.com/yourusername/job-board-app.git

## Navigate to Project

cd job-board-app

## Install Dependencies

npm install

## Start Development Server

npm run dev

## Build for Production

npm run build

---

# CI/CD Pipeline

GitHub Actions is configured to automatically run on every push to the main branch.

Pipeline Steps:

1. Checkout repository
2. Install dependencies
3. Build application
4. Validate successful build

Workflow File:

.github/workflows/deploy.yml

---

# Deployment

The application is deployed using Vercel.

Every push to the main branch automatically triggers a new deployment.

Production URL:

[https://your-vercel-url.vercel.app
](https://job-board-application-livid.vercel.app/)
---

# AI Tools Used

This project was developed with assistance from AI tools.

### ChatGPT

Used for:

* Project planning
* UI component generation
* Feature implementation
* GitHub Actions workflow creation
* README documentation
* Code review and optimization

### GitHub Copilot (Optional)

Used for:

* Code completion
* Refactoring suggestions
* Productivity improvements

---

# Future Improvements

* Backend Integration
* User Authentication
* Job Application Tracking
* Advanced Filters
* Company Profiles
* Bookmark Synchronization
* Pagination and Infinite Scroll

---

# Author

Abhishek Bhargava

Software Developer

GitHub: https://github.com/abhishekbhargava2002
