import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changePasswordThunk } from "../../redux/authThunk";
import { clearError, clearSuccessMsg } from "../../redux/authSlice";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const { isLoading, error, successMsg } = useSelector(state => state.auth);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    return () => {
      dispatch(clearError());
      dispatch(clearSuccessMsg());
    };
  }, [dispatch]);

  const onSubmit = async (data) => {
    dispatch(changePasswordThunk(data)).then((action) => {
      if(action.meta.requestStatus === "fulfilled"){
        reset();
      }
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Change Password</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Old Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("oldPassword", {
                  required: "Old password is required",
                })}
              />
              {errors.oldPassword && <span className="text-red-500 text-sm">{errors.oldPassword.message}</span>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("newPassword", {
                  required: "New password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" }
                })}
              />
              {errors.newPassword && <span className="text-red-500 text-sm">{errors.newPassword.message}</span>}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              {isLoading ? "Updating..." : "Change Password"}
            </button>
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            {successMsg && <div className="text-green-500 text-sm mt-2">{successMsg}</div>}
          </form>

        </div>
      </div>
    </section>
  )
}

export default ChangePassword;
