<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->
<!-- 
Dashboard App
This is a simple dashboard application built with React, leveraging axios for data fetching, react-spinners for loading indicators, react-icons for icons, and react-toastify for notifications. The application fetches comments for a given post ID from jsonplaceholder.typicode.com and displays them in a grid layout.

Table of Contents
Installation
Usage
Features
Components
Dependencies
License
Installation
To get started with the project, follow these steps:

Clone the repository:

sh
Copy code
git clone https://github.com/your-username/dashboard-app.git
cd dashboard-app
Install dependencies:

Make sure you have Node.js and npm installed.

sh
Copy code
npm install
Start the development server:
Npm run dev

sh
Copy code
npm start
This will start the development server and open the application in your default web browser.

Usage
The application consists of a sidebar and a main content area:

Sidebar: Contains a button to generate a new random post ID and display its comments. It also shows the current post ID being displayed.
Main Content Area: Displays comments fetched for the selected post ID in a grid layout. A loading spinner is shown while data is being fetched.
To generate a new list of comments for a different post ID, click the "Create New List" button in the sidebar.

Features
Responsive Layout: The application is designed to be responsive and works well on different screen sizes.
Dynamic Data Fetching: Fetches comments for a random post ID from jsonplaceholder.typicode.com.
Loading Indicator: Shows a loading spinner while data is being fetched.
Notifications: Displays a success toast notification when data is successfully fetched.
Sidebar Toggle: The sidebar can be toggled on smaller screens using the menu icon.
Components
App.js
The main component that manages the state, handles data fetching, and renders the layout.

Post.js
A functional component that takes email and body as props and displays a single comment.

Dependencies
react: Front-end library for building user interfaces.
axios: Promise-based HTTP client for the browser and Node.js.
react-spinners: Collection of loaders (loading indicators) built with React.
react-icons: Collection of popular icons for React.
react-toastify: Library for adding notifications to your React application.
tailwindcss: Utility-first CSS framework for rapid UI development.
