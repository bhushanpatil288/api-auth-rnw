import { Routes, Route, Navigate } from "react-router-dom";

import { MainLayout, InnerLayout, Home, Login, Signup, About, Contact } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<InnerLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App