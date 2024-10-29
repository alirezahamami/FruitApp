# Fruit App

## Overview

Fruit App is a React and TypeScript application that displays a list of fruits fetched from an API. Users can view fruits in different groupings and formats, add them to a jar, and visualize the total calories using a pie chart.

## Features

- Fetches fruit data from an external API.
- Displays fruits grouped by categories such as Family, Order, and Genus.
- Two display options: List view and Table view.
- Allows users to add individual fruits or entire groups to a jar.
- Calculates and displays the total calories of the fruits in the jar.
- Visualizes the calories of added fruits using a pie chart.
- User-friendly and visually appealing interface.

## Technologies Used
- React
- TypeScript
- Vite
- Redux (for state management)
- Material-UI (for UI components)
- Recharts (for chart visualization)
- Axios (for data fetching)
- ESLint (for linting)
- Express (for handling GET request because of CORS problem)

## Dependencies

These packages are essential for the core functionality of the Fruit App:
- @emotion/react & @emotion/styled: Used for styling components with Material-UI.
- @mui/icons-material & @mui/material: Provides Material-UI components and icons to create a consistent UI.
- @reduxjs/toolkit: Simplifies the setup and management of Redux for global state management.
- axios: Handles API requests to fetch fruit data.
- dotenv: Loads environment variables, helpful for setting configuration values.
- express: Enables server-side functionality, useful if the app includes backend code.
- react & react-dom: Core libraries for building the user interface.
- react-redux: Connects React components to the Redux store.
- recharts: Renders pie charts for visualizing calorie data.
- redux: Manages application-wide state.

## DevDependencies

These packages are only needed during development and are not included in the production build:

- @eslint/js & eslint: Enforces code quality and style consistency.
- @types/node, @types/react, and @types/react-dom: Provides TypeScript type definitions for Node.js and React, enhancing development with - better type-checking.
- @vitejs/plugin-react: Integrates Vite with React for fast and efficient development.
- concurrently: Allows running multiple commands concurrently (e.g., Vite and Node.js server).
- eslint-plugin-react-hooks & eslint-plugin-react-refresh: Adds support for React hooks and React Refresh in linting.
- globals: Defines global variables for the linter.
- typescript & typescript-eslint: Enables TypeScript functionality and type-checking throughout the app.
- vite: A fast and lightweight bundler optimized for React and TypeScript projects.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/fruitapp.git
   cd fruitapp
   ```

2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Run the development server:**

    ```bash
    npm run dev
    ```
4. **Open your browser and navigate to:**
    ```bash
    http://localhost:5173
    ```

## Usage
- **Once the app is running, you will see the list of fruits.**
- **Use the "Group by" dropdown to filter fruits based on Family, Order, or Genus.**
- **Choose between List view or Table view to display the fruits.**
- **Click "Add" next to a fruit or group to add them to your jar.**
- **The jar will display the total calories of the added fruits, along with a pie chart visualization.**


## Deployment
This application is live and can be accessed at the link below. Please allow approximately 50 seconds for loading, as it’s hosted on a free tier.
```bash
https://fruitapp-v1.onrender.com/
```

## Repository
You can find the source code at this link : 
```bash
https://github.com/alirezahamami/FruitApp
```


## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
Thanks to the Fruityvice API for providing fruit data.
Special thanks to the developers of React, TypeScript, and all the libraries used in this project.
