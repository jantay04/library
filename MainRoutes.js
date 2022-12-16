import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Pages/RegisterPage/Register";
import Login from "./Components/Pages/LoginPage/Login";

const MainRoutes = () => {
  const ALL_ROUTES = [
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];

  return (
    <Routes>
      {ALL_ROUTES.map(item => (
        <Route path={item.path} id={item.path} element={item.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
