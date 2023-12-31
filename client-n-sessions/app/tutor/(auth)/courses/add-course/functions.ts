"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function addCourse(
  tutorId: string,
  title: string,
  about: string,
  price: number,
  free: boolean
) {
  const access_token = headers().get("tutor_token");
  free = price === 0 ? true : free;
  price = free ? 0 : price;
  const res = await fetch(
    `${process.env.SERVERADDRESS}/tutor/${tutorId}/add_course`,
    {
      method: "POST",
      headers: {
        authorization: `bearer ${access_token}`,
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, about, price, free }),
    }
  );
  if (res.status < 300) {
    const courseInfo = await res.json();
    redirect(`/tutor/courses/${courseInfo.id}`);
  }
}
