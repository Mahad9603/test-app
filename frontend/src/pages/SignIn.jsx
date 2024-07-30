import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { AuthContext } from "../context/AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../validations/FormValidation.js";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await login(values.email, values.password);
      navigate("/");
    } catch (error) {
      console.error("Error logging in login page:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md rounded bg-[#232727] p-6 shadow-md">
          <h2 className="mb-6 text-center text-3xl font-semibold text-green-800">
            Log In
          </h2>

          <Form>
            <div className="mb-4">
              <label className="block">Email Address</label>
              <Field
                type="email"
                name="email"
                className="w-full rounded-md px-4 py-2  bg-[#0e0f0f] focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <ErrorMessage
                name="email"
                component="p"
                className="mt-2 text-red-600"
              />
            </div>
            <div className="mb-4">
              <label className="block">Password</label>
              <Field
                type="password"
                name="password"
                className="w-full rounded-md px-4 py-2  bg-[#0e0f0f] focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <ErrorMessage
                name="password"
                component="p"
                className="mt-2 text-red-600"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-green-800 py-2 text-white transition duration-300 hover:bg-green-600"
            >
              Log In
            </button>
          </Form>

          <div className="mt-4 text-center">
            <Link to="/signup" className="text-green-800">
              Do not have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </Formik>
  );
};

export default Login;
