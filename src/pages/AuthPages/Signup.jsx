import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { registerUserThunk } from "../../redux/authThunk";

const Signup = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.auth);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async data => {
    dispatch(registerUserThunk(data));
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Signup</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("name", {
                  required: true,
                  validate: (value) => {
                    if (value.length < 3) {
                      return "Name must be at least 3 characters long"
                    }
                    if (!/^[A-Z][a-zA-Z ]+$/.test(value)) {
                      return "Name must start with a capital letter and contain only letters and spaces"
                    }
                    return true
                  }
                })}
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("email", {
                  required: true,
                  validate: (value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                      return "Please Enter Valid Email"
                    }
                    return true
                  }
                })}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("password", {
                  required: true,
                  validate: (value) => {
                    if (value.length < 8) {
                      return "Password must be at least 8 characters long"
                    }
                    if (!/[a-z]/.test(value)) {
                      return "Password must contain at least one lowercase letter"
                    }
                    return true
                  }
                })}
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              {isLoading ? "Signing up..." : "Signup"}
            </button>
            {error && <span className="text-red-500 text-sm">{error}</span>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Signup