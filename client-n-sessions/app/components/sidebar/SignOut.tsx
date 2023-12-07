"use client";
import { logout } from "@/app/functions";
import { UserType } from "@/app/interfaces/Interfaces";
import React from "react";

const SignOut = ({ userType }: { userType: UserType }) => {
  return (
    <button
      className="text-white hover:text-front text-sm absolute"
      onClick={() => logout(userType)}
    >
      sign out
    </button>
  );
};

export default SignOut;
