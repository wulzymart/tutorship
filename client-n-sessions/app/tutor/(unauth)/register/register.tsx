"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  address: string;
  state: string;
  country: string;
  dob: string;
  bio: string;
  experience: string;
  certifications: string;
  links: string;
  contact: string;
  subjects: string;
}

const RegistrationForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    address: "",
    state: "",
    country: "",
    dob: "",
    bio: "",
    experience: "",
    certifications: "",
    links: "",
    contact: "",
    subjects: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirmPassword !== formData.password)
      return alert("imputed passswords not correct");

    // Handle form submission logic, e.g., send data to the server
    const regData = await fetch(
      `${process.env.NEXT_PUBLIC_SERVERADDRESS}/tutor/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(formData),
      }
    ).then((res) => res.json());
    console.log(regData);
    router.push("/tutor/login");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full  mt-8 p-4 border rounded">
      <div className="w-full flex gap-6">
        <label className="basis-1/2 block mb-2">
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
        <label className="basis-1/2 block mb-2">
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
        <label className="basis-1/2 block mb-2">
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

        <label className="basis-1/2 block mb-2">
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
        <label className="w-full block mb-2">
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
        <label className="basis-1/2 block mb-2">
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
        <label className="basis-1/2 block mb-2">
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

      <label className="block mb-2">
        Bio:
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
        />
      </label>
      <div className="w-full flex gap-6">
        <label className="basis-1/2 block mb-2">
          Experience:
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </label>
        <label className="basis-1/2 block mb-2">
          Certifications:
          <input
            type="text"
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </label>
      </div>
      <div className="w-full flex gap-6">
        <label className="basis-1/2 block mb-2">
          Links:
          <input
            type="url"
            name="links"
            value={formData.links}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </label>
        <label className="basis-1/2 block mb-2">
          Contact:
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </label>
      </div>
      <label className="block mb-2">
        Subjects:
        <input
          type="text"
          name="subjects"
          value={formData.subjects}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
        />
      </label>
      <div className="w-full flex gap-6">
        <label className="basis-1/2 block mb-2">
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
        <label className="basis-1/2 block mb-2">
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
