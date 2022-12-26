import Slider from "react-slick";
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import gg from "../MainSectoins/assets/1tabletman.svg";
import "../../style/Slider.css";
import Card from "../Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookCard from "../BookCard";

type Props = {};

export type Book = {
  id: number,
  name: string,
  author: string,
  year: string,
  genre: string,
  description: string,
  rating: number,
  imageUrl: any,
  pdf: string
}

const MainSlider = ({ }: Props) => {
  const settings = {
    slidesToShow: 6,
    infinite: false,
    speed: 500,
    swipeToSlide: true,
    // autoplaySpeed: 100,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  const [loading, setLoading] = useState(false)

  const [appState, setAppState] = useState()

  const [bookLists, setBooklists] = useState<Book[] | null>()

  useEffect(() => {
      const apiUrl = 'http://localhost:4000/books';
      axios.get(apiUrl).then((resp) => {
          const allPersons = resp.data;
          setBooklists(allPersons);
      });
      console.log(bookLists)
  }, [setBooklists]);

  return (
    <div className="max-w-7xl mx-auto p-4 ">
      <div className="w-[99%] ">

        <h2 className="text-[#1D324E] font-semibold text-2xl">Новинки и бестселлеры</h2>
        <Slider {...settings}>
          {bookLists && bookLists.map((book) => <div><BookCard id={book.id} name={book.name} author={book.author} bookUrl={book.imageUrl} rating={book.rating} /></div>)}
        </Slider>
        <h2 className="text-[#1D324E] font-semibold text-2xl">Нон - фикшн книги</h2>
        <Slider {...settings}>
          {bookLists && bookLists.map((book) => <div><BookCard id={book.id} name={book.name} author={book.author} bookUrl={book.imageUrl} rating={book.rating} /></div>)}
        </Slider>
        <h2 className="text-[#1D324E] font-semibold text-2xl">Художественная литература</h2>
        <Slider {...settings}>
          {bookLists && bookLists.map((book) => <div><BookCard id={book.id} name={book.name} author={book.author} bookUrl={book.imageUrl} rating={book.rating} /></div>)}
        </Slider>
      </div>
    </div>
  );
};

export default MainSlider;
