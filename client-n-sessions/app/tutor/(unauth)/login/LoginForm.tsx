"use-client"
import React, { useState, ChangeEvent, FormEvent } from "react";

interface LoginFormProps {
  onLogin: (credentials: { email: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic, e.g., send credentials to the server
    onLogin(credentials);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-4 border rounded"
    >
      <label className="block mb-2">
        Email:
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
          required
        />
      </label>
      <label className="block mb-2">
        Password:
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
          required
        />
      </label>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
