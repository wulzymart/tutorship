"use server";
import { cookies } from "next/headers";

export function logout(usertype: string) {
  cookies().delete(`${usertype}_access_token`);
}
