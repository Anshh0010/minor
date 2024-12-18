import React from "react";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import PathConstants from "./routes/PathConstants";
import Layout from "./layout/Layout";
import routes, { userRoutes } from "./routes";
import Page404 from "./pages/Page404";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserLayout from "./layout/UserLayout";
import ForgotPassword from "./pages/ForgotPassword";
import { adminRoutes } from "./routes";
import AdminLayout from "./layout/AdminLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: routes,
      errorElement: <Page404 />,
    },
    {
      path: PathConstants.LOGIN,
      element: <Login />,
      errorElement: <Page404 />,
    },
    {
      path: PathConstants.SIGNUP,
      element: <SignUp />,
      errorElement: <Page404 />,
    },
    {
      path: PathConstants.FORGOTPASSWORD,
      element: <ForgotPassword />,
      errorElement: <Page404 />,
    },
    {
      path: PathConstants.HOME,
      element: <UserLayout />,
      children: userRoutes,
      errorElement: <Page404 />,
    },
    {
      path: PathConstants.ADMIN,
      element: <AdminLayout />,
      children: adminRoutes,
      errorElement: <Page404 />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </>
  );
}

export default App;
