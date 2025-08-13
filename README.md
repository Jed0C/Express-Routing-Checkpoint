# Web Application with Working Hours Access

This project is a simple web application built with **Express.js** that includes the following pages:

- **Home**
- **Our Services**
- **Contact Us**

Each page includes a navigation bar linking to all three pages and is styled using CSS. The application is only accessible during **working hours** (Monday to Friday, from 9:00 to 17:00).

---

## Features

- Express-based routing for each page.
- Custom middleware to restrict access based on the current time and day.
- Navigation bar on each page (Home, Our Services, Contact Us).
- Customizable content on each page.
- Basic CSS styling.
- (Optional) Template engine support (e.g., EJS, Pug, Handlebars).

---

## Working Hours Middleware

A custom middleware function checks the current day and time to determine if the user is allowed to access the site:

- **Allowed:** Monday to Friday, 9:00 to 17:00
- **Denied:** Outside the specified working hours

---

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/yourproject.git
   cd yourproject

2. Install dependencies:
   ```bash
   npm install

3. Start the server:
```bash
   node index.js

4. Open your browser and go to:
```bash
   http://localhost:5000


