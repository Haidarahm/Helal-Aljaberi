import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div className=" relative bg-[color:var(--color-accent)] text-[color:var(--color-text-primary)] flex flex-col">
      <Navbar />
      <main className="flex-1 relative mx-auto w-full  ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
