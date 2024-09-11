# Charts Site using NextJS and Django

This application is a fullstack project built using **Next.js** for the frontend and **Django** for the backend. It displays several types of charts (Line, Bar, Pie, and Candlestick charts) on a single page, with data fetched dynamically from the Django backend.

## Setup

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or Yarn
- Python (v3.6 or higher)
- pip (Python package installer)

### Frontend (Next.js)

1. Clone the repository and navigate to the charts-frontend directory:
    ```bash
    git clone <repository_url>
    cd charts-frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```
    
3. Start the development server:
    ```bash
    npm run dev
    ```

   The app will be running at `http://localhost:3000`.

### Backend (Django)

1. Navigate to the `chartsbackend` directory:
    ```bash
    cd chartsbackend
    ```

2. Create a virtual environment and activate it:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On macOS/Linux
    venv\Scripts\activate  # On Windows
    ```

3. Install the dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Run the Django development server:
    ```bash
    python manage.py runserver
    ```

   The backend will be running at `http://localhost:8000`.

---

## Running the Application

1. Ensure both the **frontend** and **backend** servers are running.

2. Visit `http://localhost:3000` to view the frontend, which fetches data from the backend API at `http://localhost:8000`.

---

## Libraries and Tools Used

### Frontend (Next.js)

- **Next.js**: A React-based framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for styling components.
- **Chart.js**: A popular charting library for rendering various types of charts.
- **chartjs-chart-financial**: An additional library for rendering financial charts (e.g., Candlestick charts).
- **chartjs-adapter-date-fns**: Used for handling date formatting in Chart.js with `date-fns`.
  
### Backend (Django)

- **Django**: A Python-based web framework for building the backend API.
- **Django REST Framework (DRF)**: Used to create the API endpoints for fetching chart data.
- **CORS Headers**: Django package to handle Cross-Origin Resource Sharing between the backend and frontend.

---

## Approach and Thought Process

### Frontend:
The frontend is built using Next.js and Tailwind CSS for efficient development and styling. Chart.js was used to visualize the data for multiple chart types. The charts include Line, Bar, Pie, and Candlestick charts, each displayed in a responsive grid using Tailwind's grid layout.

### Backend:
The backend is powered by Django and Django REST Framework (DRF). It exposes API endpoints for each chart (`/api/line-chart-data/`, `/api/bar-chart-data/`, etc.). The data is hardcoded for simplicity in this example but can be easily replaced with data from a database.

API endpoints return data in the format expected by Chart.js (for example, candlestick data with open, high, low, close values). CORS is configured to allow the frontend to interact with the backend API.

This structure allows easy separation of concerns, scalability, and maintainability. The frontend focuses on displaying data, while the backend handles data processing and retrieval.

---
