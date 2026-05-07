import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Api Auth Project</h1>
      <p className="text-center">This is a simple project to demonstrate the use of API authentication</p>
      <p className="mt-4 text-center">You will see &apos;Go to Dashboard&apos; button here, once you are logged in!</p>
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-500 text-white px-4 cursor-pointer py-2 rounded hover:bg-blue-600"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  )
}

export default Home