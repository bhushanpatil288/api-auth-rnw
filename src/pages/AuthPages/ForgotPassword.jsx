import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPasswordThunk } from "../../redux/authThunk";
import { clearError, clearSuccessMsg } from "../../redux/authSlice";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, successMsg } = useSelector(state => state.auth);
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    return () => {
      dispatch(clearError());
      dispatch(clearSuccessMsg());
    };
  }, [dispatch]);

  const onSubmit = async (data) => {
    dispatch(forgotPasswordThunk(data)).then((action) => {
      if(action.meta.requestStatus === "fulfilled"){
         setTimeout(() => {
             navigate("/reset-password");
         }, 2000);
      }
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Forgot Password</h2>
          <p className="text-gray-600 mb-4 text-sm">Enter your email to receive an OTP.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              {isLoading ? "Sending..." : "Send OTP"}
            </button>
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            {successMsg && <div className="text-green-500 text-sm mt-2">{successMsg}</div>}
          </form>

        </div>
      </div>
    </section>
  )
}

export default ForgotPassword;
