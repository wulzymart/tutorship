import { headers } from "next/headers";
import { redirect } from "next/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const userId = headers().get("tutor_id");
  if (userId) redirect("/tutor/dashboard");

  return (
    <section className="w-screen">
      {/* <div className="container p-10 flex jutify-center items-center align-middle overflow-scroll scrollbar"> */}
      {children}
      {/* </div> */}
    </section>
  );
};
export default AuthLayout;
