import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="">
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
