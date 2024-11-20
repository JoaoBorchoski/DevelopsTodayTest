# Fullstack Country Info Project

This project is a fullstack web application designed to display information about countries, including details such as borders and population trends. The backend serves APIs to fetch data, while the frontend provides an interactive and responsive interface for exploring this information.

## Features

- **Backend**: Built with Node.js (Nest.js framework) to fetch data from external APIs.
- **Frontend**: Built with React.js (Next.js framework) for a dynamic and user-friendly UI.
- Displays country details, border countries, and a population chart.
- Allows navigation between country details using clickable links.

## Prerequisites

Before running the project, ensure you have the following installed:

1. **Node.js** (v18 or later recommended)
2. **Yarn** (Package manager)
3. **Git** (For version control)

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
yarn
```

3. Create a .env file in the backend directory and add the following variables:

```.env
NAGER_API=https://date.nager.at/api/v3
COUNTRIES_API=https://countriesnow.space/api/v0.1
```

4. Start the backend server in development mode:

```bash
yarn start:dev
```

5. The backend will run on http://localhost:3000 by default.

### Frontend Setup

1. Navigate to the backend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
yarn
```

3. Create a .env.local file in the frontend directory and add the following variable:

```.env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
```

4. Start the frontend server:

```bash
yarn dev
```

5. The frontend will run on http://localhost:4200 by default (or the port specified).

### Usage

1. Open the frontend in your browser at http://localhost:4200.
2. Navigate through the list of countries and click on any country to view detailed information.
3. If the backend is not running, the frontend will not display data correctly.
