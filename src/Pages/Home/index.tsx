import React from "react";
import MainLayout from "../../Components/Layout/MainLayout";
import MainSections from "../../Components/MainSectoins";
import Login from "../LoginPage/Login";
import Register from "../RegisterPage/Register";

type Props = {};

function Home({}: Props) {
  return (
    <MainLayout>
      <MainSections />
    </MainLayout>
  );
}

export default Home;
