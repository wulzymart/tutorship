import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function TutorCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex justify-center gap-4">
        <Link href="/tutor/courses">All</Link>
        <Link href="/tutor/courses/published">Published</Link>
        <Link href="/tutor/courses/unpublished">Unpublished</Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
