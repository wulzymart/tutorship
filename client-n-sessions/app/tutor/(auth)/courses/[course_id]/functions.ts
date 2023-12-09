"use server";
import { revalidateTag } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
const access_token = headers().get("tutor_token");
const tutorId = headers().get("tutor_id");

export async function publishCourse(course: any) {
  console.log("publish", course);
  course.published = true;
  const { title, about, price, free, published, id } = course;
  const res = await fetch(
    `${process.env.SERVERADDRESS}/tutor/${tutorId}/${id}/update_course`,
    {
      cache: "no-cache",
      method: "PUT",
      headers: {
        authorization: `bearer ${access_token}`,
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, about, price, free, published }),
    }
  );
  if (res.status < 300) {
    revalidateTag("course");
    console.log(await res.json());
  } else console.log(res.status, await res.json());
}

export async function unpublishCourse(course: any) {
  console.log(course);
  course.published = false;
  const { title, about, price, free, published, id } = course;
  const res = await fetch(
    `${process.env.SERVERADDRESS}/tutor/${tutorId}/${id}/update_course`,
    {
      cache: "no-cache",
      method: "PUT",
      headers: {
        authorization: `bearer ${access_token}`,
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, about, price, free, published }),
    }
  );
  if (res.status < 300) {
    revalidateTag("course");
    console.log(await res.json());
  } else console.log(res.status, await res.json());
}
export async function deleteCourse(id: string) {
  const res = await fetch(
    `${process.env.SERVERADDRESS}/tutor/${tutorId}/${id}/delete_course`,
    {
      cache: "no-cache",
      method: "DELETE",
      headers: {
        authorization: `bearer ${access_token}`,
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  if (res.status < 300) {
    redirect("/tutor/courses");
  } else console.log(res.status, await res.json());
}

export async function editCourse(course: any) {
  console.log(access_token);

  console.log(course);

  let { title, about, price, free, published, id } = course;
  free = price === 0 ? true : free;
  price = free ? 0 : price;

  const res = await fetch(
    `${process.env.SERVERADDRESS}/tutor/${tutorId}/${id}/update_course`,
    {
      cache: "no-cache",
      method: "PUT",
      headers: {
        authorization: `bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, about, price, free, published }),
    }
  );
  if (res.status < 300) {
    revalidateTag("course");
  } else console.log(res.status, await res.json());
}

export async function publishVideo(
  courseId: string,
  video: {
    id: string;
    title: string;
    description: string;
    free: boolean;
    video_url: string;
    published: boolean;
  }
) {
  video.published = true;
  const formData = new FormData();
  Object.entries(video).forEach(([key, value]: [key: string, value: any]) => {
    if (key !== "video_url") {
      formData.append(
        key,
        key === "free" || key === "published" ? String(value) : value
      );
    }
  });
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVERADDRESS}/tutor/${tutorId}/course/${courseId}/update-video/${video.id}`,
    {
      cache: "no-cache",
      method: "PUT",
      headers: {
        authorization: `bearer ${access_token}`,
        // "Content-Type": "multipart/form-data",
        // // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    }
  );
}

export async function unpublishVideo(
  courseId: string,
  video: {
    id: string;
    title: string;
    description: string;
    free: boolean;
    video_url: string;
    published: boolean;
  }
) {
  video.published = false;
  const formData = new FormData();
  Object.entries(video).forEach(([key, value]: [key: string, value: any]) => {
    if (key !== "video_url") {
      formData.append(
        key,
        key === "free" || key === "published" ? String(value) : value
      );
    }
  });
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVERADDRESS}/tutor/${tutorId}/course/${courseId}/update-video/${video.id}`,
    {
      cache: "no-cache",
      method: "PUT",
      headers: {
        authorization: `bearer ${access_token}`,
        // "Content-Type": "multipart/form-data",
        // // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    }
  );
}

export async function deleteVideo(courseId: string, id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVERADDRESS}/tutor/${tutorId}/course/${courseId}/delete-video/${id}`,
    {
      cache: "no-cache",
      method: "DELETE",
      headers: {
        authorization: `bearer ${access_token}`,
        // "Content-Type": "multipart/form-data",
        // // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
}
export async function editVideo(
  courseId: string,
  video: {
    id: string;
    title: string;
    description: string;
    free: boolean;
    video_url: string;
    published: boolean;
  }
) {
  video.published = false;
  const formData = new FormData();
  Object.entries(video).forEach(([key, value]: [key: string, value: any]) => {
    if (key !== "video_url") {
      formData.append(
        key,
        key === "free" || key === "published" ? String(value) : value
      );
    }
  });
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVERADDRESS}/tutor/${tutorId}/course/${courseId}/update-video/${video.id}`,
    {
      cache: "no-cache",
      method: "PUT",
      headers: {
        authorization: `bearer ${access_token}`,
        // "Content-Type": "multipart/form-data",
        // // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    }
  );
}
