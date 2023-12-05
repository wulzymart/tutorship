// Import the LoginForm component
import LoginForm from "./LoginForm";
import { useRouter } from "next/navigation";

// Your main component or page
const LoginPage = () => {
  const router = useRouter();
  // Define the login logic
  const handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    // Handle the login logic, e.g., send credentials to the server
    if (!email || !password) return alert("enter valid email and password");
    const loginData = await fetch(
      "https://glorious-space-invention-rwqpvr6r7qwcp5p7-8000.app.github.dev/tutor/token",
      { method: "POST", body: JSON.stringify({ email, password }) }
    ).then((res) => res.json());

    console.log(loginData);

    if (loginData.access_token) {
      localStorage.setItem("access_token", loginData.access_token);
      return router.push("/tutor/dashboard");
    }
    alert("invalid login credentials");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Render the LoginForm component with the login logic */}
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
