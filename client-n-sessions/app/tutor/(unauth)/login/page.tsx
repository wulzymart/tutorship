// Import the LoginForm component
import LoginForm from "./LoginForm";
import { useRouter } from "next/navigation";

// Your main component or page
const LoginPage = () => {
  // Define the login logic

  return (
    <div className="w-full h-screen flex justify-center">
      {/* Render the LoginForm component with the login logic */}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
