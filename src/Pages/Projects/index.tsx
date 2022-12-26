import React from "react";
import ProjectCard from "./ProjectCard";
import BreadCrumb from "../../Components/BreadCrumb";

import projectIMG1 from "../Projects/assets/Rectangle 41projectIIMG.png";
import Slider from "react-slick";
import projectIMG2 from "../Projects/assets/Rectangle 40projectIMG2.png";
import MainLayout from "../../Components/Layout/MainLayout";

const Project = () => {
  const ALL_PROJECTS = [
    {
      img: projectIMG1,
      name: "Книгоман",
      title:
        "Тогда участвуйте в нашем челлендже “КНИГОМАН”. С помощью нашей таблицы, вы достигнете своей цели",
      text: "Таким образом, внедрение современных методик предопределяет высокую востребованность дальнейших направлений развития. Не следует, однако, забывать, что повышение уровня гражданского сознания, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений. ",
    },
    {
      img: projectIMG2,
      name: "Я автор",
      title:
        "С нами вы можете начать писать книгу. Наши специальные шаблоны помогут вам сделать это быстрее и интереснее",
      text: "И нет сомнений, что сторонники тоталитаризма в науке формируют глобальную экономическую сеть и при этом —  подвергнуты целой серии независимых исследований. Банальные, но неопровержимые выводы, а также интерактивные прототипы набирают популярность среди определенных слоев населения, а значит, должны быть объективно рассмотрены соответствующими инстанциями. ",
    },
    {
      img: projectIMG2,
      name: "Я автор",
      title:
        "С нами вы можете начать писать книгу. Наши специальные шаблоны помогут вам сделать это быстрее и интереснее",
      text: "И нет сомнений, что сторонники тоталитаризма в науке формируют глобальную экономическую сеть и при этом —  подвергнуты целой серии независимых исследований. Банальные, но неопровержимые выводы, а также интерактивные прототипы набирают популярность среди определенных слоев населения, а значит, должны быть объективно рассмотрены соответствующими инстанциями. ",
    },
    {
      img: projectIMG2,
      name: "Я автор",
      title:
        "С нами вы можете начать писать книгу. Наши специальные шаблоны помогут вам сделать это быстрее и интереснее",
      text: "И нет сомнений, что сторонники тоталитаризма в науке формируют глобальную экономическую сеть и при этом —  подвергнуты целой серии независимых исследований. Банальные, но неопровержимые выводы, а также интерактивные прототипы набирают популярность среди определенных слоев населения, а значит, должны быть объективно рассмотрены соответствующими инстанциями. ",
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
          className: "ml-15 ",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          className: "ml-2 ",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          className: "ml-20 ",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          className: "ml-8 ",
        },
      },
    ],
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto p-4">
        <BreadCrumb />
        <h1 className="font-extrabold text-3xl text-ourBlue leading-loose mb-3">
          Проекты
        </h1>
        <div className="">
          <Slider {...settings}>
            {ALL_PROJECTS.map((item: any) => (
              <ProjectCard item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </MainLayout>
  );
};

export default Project;
