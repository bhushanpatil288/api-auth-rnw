# React Auth API Client

This project is a React-based frontend application built with Vite, designed to handle user authentication (login/registration) by integrating with a REST API.

## 🚀 Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router DOM (v7)
- **State Management**: Redux Toolkit & React-Redux
- **Form Handling**: React Hook Form
- **HTTP Client**: Axios
- **Styling**: Tailwind CSS (v4)
- **Linting/Formatting**: ESLint & Prettier

## 🏗️ Project Structure & Architecture

The application follows a modular and scalable directory structure within the `src` folder:

```text
src/
├── api/          # Axios instance and API call definitions (e.g., api.js)
├── components/   # Reusable UI components (e.g., Header, Footer)
├── config/       # Configuration files (e.g., environment variables in env.js)
├── pages/        # Route components, grouped by domain (AuthPages, PublicPages)
├── redux/        # Redux slices, thunks, and store configuration
├── App.jsx       # Root component handling routing and layouts
└── main.jsx      # Application entry point
```

## 🧠 Approach & Key Implementations

### 1. State Management (Redux Toolkit)
- Centralized authentication state (`isLoading`, `userData`, `error`) is managed using Redux Toolkit's `createSlice`.
- Asynchronous API calls (like login and registration) are handled using `createAsyncThunk` (`authThunk.js`), ensuring components remain clean and focused on the UI rather than data fetching logic.

### 2. API Integration (Axios)
- An Axios instance is configured in `api/api.js` with a base URL read from environment variables.
- **Interceptors**: A request interceptor is implemented to automatically attach the JWT token (from `localStorage`) as a `Bearer` token to the `Authorization` header of all outgoing requests.

### 3. Routing & Layouts (React Router DOM)
- The app uses nested routing with layout components (`MainLayout`, `InnerLayout`) to maintain consistent UI structure (like headers and footers) across different pages.
- Fallback routing is configured to redirect unknown paths to the Home page.

### 4. Form Handling & Validation (React Hook Form)
- Forms (`Login`, `Signup`) utilize `react-hook-form` for efficient state management and validation.
- Custom validation logic (regex) is implemented directly within the form fields to ensure email format correctness and password strength (minimum length, requiring lowercase letters, etc.) before submitting.

### 5. Styling (Tailwind CSS)
- The project leverages Tailwind CSS for utility-first, responsive, and rapid UI development.

## 🛠️ Getting Started

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Environment Setup**:
   - Copy `.env.example` to `.env` and configure your API base URL.
4. **Run the development server**:
   ```bash
   npm run dev
   ```
5. **Linting**:
   ```bash
   npm run lint
   ```
