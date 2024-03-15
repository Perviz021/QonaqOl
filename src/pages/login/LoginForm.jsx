import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "https://qonaqol.onrender.com/qonaqol/api/v1/auth/signin",
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Login successful:", response.data);
      // Do something after successful login, like redirecting to another page
    } catch (error) {
      console.error("Login failed:", error.response.data);
      // Handle login failure, e.g., show error message to user
    }
  };

  useEffect(() => {
    // Check if both fields are valid and filled
    setIsFormValid(!errors.email && !errors.password);
  }, [errors]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[400px] mx-auto mt-5 space-y-4"
    >
      <input
        type="email"
        placeholder="Email"
        className={`w-full bg-[#f2f2f2] rounded-[8px] outline-transparent focus:outline-transparent ${
          errors.email
            ? "border-red-500 focus:border-red-500 focus:ring-0"
            : "border-none focus:border-transparent focus:ring-0"
        }`}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email address",
          },
        })}
      />
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className={`w-full bg-[#f2f2f2] rounded-[8px] ${
            errors.password
              ? "border-red-500"
              : "border-none outline-none focus:border-transparent focus:ring-0"
          }`}
          {...register("password", { required: true, minLength: 6 })}
        />
        <span
          className="absolute top-1/2 right-[10px] cursor-pointer -translate-y-1/2"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      <input
        type="submit"
        className={`w-full ${
          isFormValid
            ? "bg-[#FFCE00] cursor-pointer"
            : "bg-[#F1DD8B] cursor-not-allowed"
        }`}
        disabled={!isFormValid}
        value="Daxil ol"
      />
    </form>
  );
};

export default LoginForm;
