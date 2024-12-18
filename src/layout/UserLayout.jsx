import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "../components/Sidebar";
import PrivateRoute from "../components/PrivateRoute";

function UserLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>

      <PrivateRoute>
        <Sidebar />
      </PrivateRoute>
    </>
  );
}

export default UserLayout;
