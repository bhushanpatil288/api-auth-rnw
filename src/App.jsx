import { Routes, Route, Navigate } from "react-router-dom";

import { 
  MainLayout, InnerLayout, Home, Login, Signup, About, Contact,
  ChangePassword, ForgotPassword, ResetPassword, UserDashboard, AdminPanel
} from "./pages";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<InnerLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Protected Routes */}
            <Route element={<ProtectedRoute allowedRoles={['user', 'admin']} />}>
              <Route path="/change-password" element={<ChangePassword />} />
              <Route path="/user" element={<UserDashboard />} />
            </Route>
            
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
              <Route path="/admin" element={<AdminPanel />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;