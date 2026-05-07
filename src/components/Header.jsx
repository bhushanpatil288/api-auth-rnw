import { Link, useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <span className="text-2xl font-bold">Api Auth</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600" onClick={() => navigate("/login")}>Login</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600" onClick={() => navigate("/signup")}>Signup</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header