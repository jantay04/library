import React from "react";
import MainLayout from "../../Components/Layout/MainLayout";
import MainSections from "../../Components/MainSectoins";
import CardSlider from "../../Components/CardSlider";
import SecondSection from "../../Components/SecondSection";
import ThirdSection from "../../Components/ThirdSection";
import FourthSection from "../../Components/FourthSection";

type Props = {};

function Home({}: Props) {
  return (
    <MainLayout>
      {/* <MainSections /> */}
      {/* <CardSlider /> */}
      <MainSections />
      <CardSlider />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </MainLayout>
  );
}

export default Home;
