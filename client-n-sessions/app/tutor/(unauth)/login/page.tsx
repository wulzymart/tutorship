// Import the LoginForm component
import Header5 from "@/app/components/utils/Header5";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

// Your main component or page
const LoginPage = async () => {
  // Define the login logic

  async function login(e: FormData) {
    "use server";
    const username = e.get("username")?.toString();
    const password = e.get("password")?.toString();
    const formdata = new URLSearchParams();
    formdata.append("username", username as string);
    formdata.append("password", password as string);

    const loginData = await fetch(`http://127.0.0.1:8000/tutor/token`, {
      cache: "no-cache",
      method: "POST",
      headers: {
        //"Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },

      body: formdata,
    }).then((res) => res.json());

    if (loginData.access_token) {
      cookies().set("tutor_access_token", loginData.access_token);
      redirect("/tutor/dashboard");
    }
  }
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <div className="my-10 flex w-full justify-center rounded-lg">
        <Image
          className="rounded-full"
          alt="tutorship logo"
          src="/logo.png"
          width={100}
          height={100}
        />
      </div>
      <div className="flex justify-center">
        <Header5 text="Tutor's Login" />
      </div>

      <form id="login" action={login} className="max-w-md mx-auto mt-8 p-4 ">
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="username"
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Password:
          <input
            type="password"
            name="password"
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-main2 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
      <div className="flex justify-center">
        <p>
          Not Yet registered?{" "}
          <Link
            className="text-main2 hover:text-red-500"
            href="/tutor/register"
          >
            Click here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
