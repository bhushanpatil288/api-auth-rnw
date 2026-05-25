import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAdminPanelThunk } from "../../redux/authThunk";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    dispatch(getAdminPanelThunk())
      .then((action) => {
        if (action.meta.requestStatus === "fulfilled") {
          setData(action.payload);
        } else {
          setError(action.payload || "Failed to load admin panel");
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Panel</h1>
      
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <div className="bg-red-100 text-red-700 p-4 rounded-md">{error}</div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
