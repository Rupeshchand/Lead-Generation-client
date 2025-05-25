# Lead Generation Frontend

This is a React-based frontend for the Lead Generation system

## Features
 - Lead form to collect name, email, company (opptional), and message (optional)
 - Validates email format and normal validation of name and email using form attribute required
 - Send data to Backend API
 - Redirect after successful submission

## Tech Stack
 - React
 - Bootstrap (for styling)
 - CSS

## Installation

    ```bash
    git clone https://github.com/Rupeshchand/Lead-Generation-client.git
    cd frontend
    npm install
    npm run dev
    ```

Make sure to add the API endpoint in your code

    ```js
    const BASE_URL = "http://localhost:5000/api";
    ```

## Folder Structure
    
    ```
    src/
    ├── components/
    │   └── Header.jsx
    │   └── LeadForm.jsx
    ├── utils/
    │   └── ServerUrl.js
    │   └── validateEmail.js
    ├── App.jsx
    ├── main.jsx
    ```

## Future Enhancements
    - Add success alert
    - Improve responsiveness and UX 
    - For handling multiple routes we can use Browser Router
