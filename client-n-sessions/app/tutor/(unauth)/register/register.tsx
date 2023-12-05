"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  address: string;
  state: string;
  country: string;
  dob: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    address: "",
    state: "",
    country: "",
    dob: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirmPassword !== formData.password)
      return alert("imputed passswords not correct");
    // Handle form submission logic, e.g., send data to the server
    const regData = fetch(
      "https://glorious-space-invention-rwqpvr6r7qwcp5p7-8000.app.github.dev/tutor",
      { method: "POST", body: JSON.stringify(formData) }
    ).then((res) => res.json());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto mt-8 p-4 border rounded"
    >
      <div className="w-full flex gap-6">
        <label className="block mb-2">
          First Name:
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Last Name:
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </label>
      </div>
      <div className="w-full flex gap-6">
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </label>

        <label className="block mb-2">
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </label>
      </div>
      <div className="w-full flex gap-6">
        <label className="block mb-2">
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </label>
      </div>
      <div className="w-full flex gap-6">
        <label className="block mb-2">
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Country:
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </label>
      </div>
      <div className="w-full flex gap-6">
        <label className="block mb-2">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Confirm Password:
          <input
            type="password"
            name="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.currentTarget.value)}
            className={`w-full mt-1 p-2 border ${
              confirmPassword !== formData.password
                ? "border-2 border-solid border-red"
                : ""
            } rounded`}
            required
          />
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
