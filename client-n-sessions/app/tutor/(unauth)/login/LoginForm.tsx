"use client";
import { useRouter } from "next/navigation";
import React, { useState, ChangeEvent, FormEvent } from "react";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };
  const handleLogin = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    // Handle the login logic, e.g., send credentials to the server
    if (!username || !password) return alert("enter valid email and password");
    const formdata = new URLSearchParams();
    formdata.append("username", username);
    formdata.append("password", password);
    console.log(formdata);

    const loginData = await fetch(
      `${process.env.NEXT_PUBLIC_SERVERADDRESS}/tutor/token`,
      {
        method: "POST",
        headers: {
          //"Content-Type": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },

        body: formdata,
      }
    ).then((res) => res.json());

    console.log(loginData);

    if (loginData.access_token) {
      localStorage.setItem("access_token", loginData.access_token);
      return router.push("/tutor/dashboard");
    }
    alert("invalid login credentials");
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic, e.g., send credentials to the server
    handleLogin(credentials);
  };

  return (
    <form
      id="login"
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-4 border rounded"
    >
      <label className="block mb-2">
        Email:
        <input
          type="email"
          name="username"
          value={credentials.username}
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
