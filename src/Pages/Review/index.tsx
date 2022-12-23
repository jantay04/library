import React from "react";
import Breadcrumb from "../../Components/BreadCrumb";
import Header from "../../Components/Layout/Header";
import profilePic from "../../Components/ThirdSection/ProfileCard/assets/Ellipse1.svg";

import ReviewCard from "./ReviewCard";
import Slider from "react-slick";

const Review = () => {
  const REVIEWS: any = [
    {
      img: profilePic,
      name: "Роман Иванов",
      comment: "Моя рецензия на книгу “К себе нежно”. Читайте))wqdkjwq22222",
      dateOfReview: "16 декабря 2022 г.",
      see: "13050",
    },
    {
      img: profilePic,
      name: "Роман Иванов",
      comment:
        " Ура! Я прочитал все книги Брайана Трейси! Я просто в восторге!",
      dateOfReview: "16 декабря 2022 г.",
      see: "2250",
    },
    {
      img: profilePic,
      name: "Роман Иванов",
      comment: "Делюсь своей рецензией",
      dateOfReview: "16 декабря 2022 г.",
      see: "5230",
    },
    {
      img: profilePic,
      name: "Роман Иванов",
      comment: " Рецензия на книгу “Психология лжи”",
      dateOfReview: "16 декабря 2022 г.",
      see: "90",
    },
    {
      img: profilePic,
      name: "Роман Иванов",
      comment:
        " Ура! Я прочитал все книги Брайана Трейси! Я просто в восторге!",
      dateOfReview: "16 декабря 2022 г.",
      see: "2350",
    },
    {
      img: profilePic,
      name: "Роман Иванов",
      comment:
        " Рецензия на книгу “Дневник мага”, Пауло Коэльо. Книга очень трону",
      dateOfReview: "16 декабря 2022 г.",
      see: "550",
    },
    {
      img: profilePic,
      name: "Роман Иванов",
      comment:
        " Ура! Я прочитал все книги Брайана Трейси! Я просто в восторге!",
      dateOfReview: "16 декабря 2022 г.",
      see: "3550",
    },
    {
      img: profilePic,
      name: "Роман Иванов",
      comment:
        " Ура! Я прочитал все книги Брайана Трейси! Я просто в восторге!",
      dateOfReview: "16 декабря 2022 г.",
      see: "520",
    },
    {
      img: profilePic,
      name: "Роман Иванов",
      comment: "Моя рецензия на книгу “К себе нежно”. Читайте))",
      dateOfReview: "16 декабря 2022 г.",
      see: "500",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,

    // responsive: [
    //   {
    //     breakpoint: 1220,
    //     settings: {
    //       slidesToShow: 2,
    //       className: "ml-15 ",
    //     },
    //   },
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       className: "ml-2 ",
    //     },
    //   },
    //   {
    //     breakpoint: 900,
    //     settings: {
    //       slidesToShow: 1,
    //       className: "ml-20 ",
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       className: "ml-8 ",
    //     },
    //   },
    // ],
  };

  return (
    <div>
      <Header />
      <Breadcrumb />
      <h2 className="font-extrabold text-3xl text-ourBlue leading-loose ml-5 mb-3">
        Рецензии
      </h2>
      <div className="">
        <Slider {...settings}>
          {REVIEWS && REVIEWS ? (
            REVIEWS.map((item: any) => (
              <ReviewCard item={item} key={item.name} />
            ))
          ) : (
            <h1>Пока нет рецензий</h1>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
