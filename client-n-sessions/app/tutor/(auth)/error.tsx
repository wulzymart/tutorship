"use client"; // Error components must be Client Components

import Header2 from "@/app/components/utils/Header2";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-6 justify-center items-center align-middle h-full">
      <Header2 text="Something went wrong!" />
      <button
        className="btn bg-main2 text-front"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
