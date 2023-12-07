"use server";
import { cookies } from "next/headers";

export async function logout(usertype: string) {
  cookies().delete(`${usertype}_access_token`);
}
