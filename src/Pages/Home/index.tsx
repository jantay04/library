import React from "react";
import MainLayout from "../../Components/Layout/MainLayout";
import MainSections from "../../Components/MainSectoins";
import CardSlider from "../../Components/CardSlider";
type Props = {};

function Home({}: Props) {
  return (
    <MainLayout>
      <MainSections />
      <CardSlider />
    </MainLayout>
  );
}

export default Home;
