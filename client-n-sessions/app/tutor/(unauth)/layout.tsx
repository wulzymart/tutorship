const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-screen">
      {/* <div className="container p-10 flex jutify-center items-center align-middle overflow-scroll scrollbar"> */}
      {children}
      {/* </div> */}
    </section>
  );
};
export default AuthLayout;
