import Header3 from "@/app/components/utils/Header3";
import RegistrationForm from "./register";
import Header2 from "@/app/components/utils/Header2";
import Link from "next/link";

const Page = () => {
  return (
    <section className="w-full p-20">
      <div className="flex flex-col gap-6 items-center">
        <Header2 text="Tutor Registration" />

        <p className="max-w-[800px] text-center">
          Ready to get started? Fantastic! We&apos;re thrilled to have you join
          our coummunity of wonderful teachers. Please take a moment to create
          your account below:
        </p>
        <p className="max-w-[800px] text-center">
          Registered?{" "}
          <Link className="text-main2 hover:text-red-500" href="/tutor/login">
            log in here
          </Link>
        </p>
      </div>

      <RegistrationForm />
    </section>
  );
};

export default Page;
