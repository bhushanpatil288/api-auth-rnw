import { Outlet } from "react-router-dom"

const InnerLayout = () => {
  return (
    <div className="container mx-auto px-10 py-10 min-h-screen bg-gray-100">
      <Outlet />
    </div>
  )
}

export default InnerLayout