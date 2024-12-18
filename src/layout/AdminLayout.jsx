import React from "react";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <main className="">
      <Outlet />
    </main>
  );
}

export default AdminLayout;
