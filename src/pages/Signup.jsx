import { useState } from "react";
import useAuthStore from "../utils/store";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const login = useAuthStore((state) => state.login);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const { password, ...user } = formData;
    login(user);
    navigate("/");
  };
  return (
    <div className="py-12 flex justify-center">
      <div className="py-8 px-8 bg-white rounded shadow">
        <h1 className="pt-4 pb-8 text-center text-3xl font-bold text-gray-900">
          Sign up to proceed
        </h1>
        <form onSubmit={handleSignUp}>
          <div className="py-2">
            <label
              htmlFor="username"
              className="text-sm font-semibold text-gray-900"
            >
              Full Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-600 text-gray-800 rounded"
              name="username"
              id="username"
              type="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Full name"
              required
            />
          </div>
          <div className="py-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-900"
            >
              Email Address
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-600 text-gray-800 rounded"
              name="email"
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              required
            />
          </div>
          <div className="py-2">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-900"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-600 text-gray-800 rounded"
              name="password"
              id="password"
              type="password"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>
          <div className="py-2">
            <button
              className="w-full py-2 px-3 bg-blue-500 text-white rounded outline-none border-none hover:bg-blue-600 font-bold text-lg"
              type="submit"
            >
              Sign up
            </button>
          </div>
          <div className="py-2 w-full text-gray-500 text-sm text-center">
            <p>
              Already have an account?{"  "}
              <a className="underline" href="/login">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
