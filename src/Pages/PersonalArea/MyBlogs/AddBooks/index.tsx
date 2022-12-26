import React, { useEffect, useState } from "react";
import PersonalSidebarLayout from "../../../../Components/Layout/PersonalAreaLayout";
import { useHref, useNavigate } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import "../AddBooks/book.css";
import AddImg from "../AddBooks/assets/add.png";

//!FOR WORKING dayjs  DOWNLOAD npm install dayjs --save
//!FOR WORKING DATE INPUT DOWNLOAD npm install @mui/x-date-pickers

type Props = {};

const genres: any = [
  "Баллада ",
  "Басня  ",
  "Былины  ",
  "Детектив  ",
  "Комедия  ",
  "Литература ужасов ",
  "Мелодрама  ",
  "Миф  ",
  "Научная фантастика  ",
  "Новелла ",
  "Ода  ",
  "Поэма  ",
  "Рассказ  ",
  "Роман  ",
  "Сказка  ",
  "Фэнтези  ",
  "Фольклор  ",
];

function AddBooks({ }: Props) {
  const navigate = useNavigate();

  const [genre, setGenre] = useState("");

  function handleChangeGenre(e: any) {
    setGenre(e.target.value);
  }
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  //file reading

  const [img, setImg] = useState("");
  const [imgURL, setImgURL] = useState<any | null>();

  const [pdf, setPdf] = useState("");
  const [pdfURL, setPdfURL] = useState<any | null>();

  const fileReader = new FileReader();
  const filereader2 = new FileReader();

  fileReader.onloadend = () => {
    setImgURL(fileReader.result);
  };

  function handlerSubmit(e: any) {
    e.preventDefault();
    const file = e.target.files[0];
    setImg(file);
    fileReader.readAsDataURL(file);
  }

  filereader2.onloadend = () => {
    setPdfURL(filereader2.result);
  };

  function handlerPdf(e: any) {
    e.preventDefault();
    const file = e.target.files[0];
    setPdf(file);
    filereader2.readAsDataURL(file);
  }

  return (
    <PersonalSidebarLayout>
      <div className="">
        <div className="">
          <h2 className="font-bold text-xl text-ourBlue ">Добавить книгу</h2>
        </div>
        <div className=" flex mt-8 w-full ">
          <div className=" gap-[8px]">
            <div className="flex gap-4">
              <TextField
                type="text"
                label="Книга"
                variant="outlined"
                color="secondary"
                className="h-12 w-64"
                placeholder="Название книги"
              />
              <TextField
                type="text"
                label="Автор"
                variant="outlined"
                color="secondary"
                className="h-12 w-64 "
                placeholder="ФИО автора"
              />
            </div>

            <div className="flex mt-11 mb-8 gap-4">
              <FormControl className="h-12 w-64  " color="warning">
                <InputLabel id="demo-multiple-name-label ">Жанр</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  // multiple
                  value={genre}
                  onChange={handleChangeGenre}
                  input={<OutlinedInput label="genre" />}>
                  {genres.map((item: any) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3} className="h-12 w-64">
                  <DesktopDatePicker
                    label="Год издания"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={params => (
                      <TextField {...params} color="warning" />
                    )}
                  />
                </Stack>
              </LocalizationProvider>
            </div>
            <TextField
              className=" w-full p-10 rounded-md "
              type="text"
              label="Описание книги"
              variant="outlined"
              color="secondary"
              multiline
              rows={5}
              placeholder="Введите текст"
            />
          </div>
          <div className=" w-full   ml-6">
            <form className="flex">
              <div className="w-52 h-80 flex justify-center border-2 rounded-lg border-dashed border-ourOrange  bg-gradient-to-r from-gray1ForGradient to-gray2ForGradient ">
                <label className=" w-full h-full flex flex-col justify-between items-center cursor-pointer  ">
                  {imgURL && imgURL ? (
                    <img src={imgURL} className="w-full h-full rounded-lg" />
                  ) : (
                    <img
                      src={AddImg}
                      className="w-3 h-3 cursor-pointer mt-36 "
                    />
                  )}

                  {imgURL ? null : (
                    <span className="text-ourBlue font-semibold text-base mb-9">
                      Выбрать обложку
                    </span>
                  )}

                  <TextField
                    type="file"
                    className="w-1/2 h-full input "
                    name=""
                    onChange={handlerSubmit}
                  />
                </label>
              </div>
              <div className="w-52 h-80 flex justify-center border-2 rounded-lg border-dashed border-ourOrange  bg-gradient-to-r from-gray1ForGradient to-gray2ForGradient ml-4 ">
                <label className=" w-full h-full flex flex-col justify-between items-center cursor-pointer  ">
                  {pdfURL && pdfURL ? (
                    <embed
                      src={pdfURL}
                      className="w-full h-full rounded-lg"
                    // width="200px"
                    // height="250px"
                    />
                  ) : (
                    <img
                      src={AddImg}
                      className="w-3 h-3 cursor-pointer mt-36 "
                    />
                  )}

                  {/* {pdfURL ? null : ( */}
                  <span className="text-ourBlue font-semibold text-base mb-9">
                    Выбрать PDF файл
                  </span>

                  <TextField
                    type="file"
                    className="w-1/2 h-full input "
                    name=""
                    onChange={handlerPdf}
                  />
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className=" w-full  flex justify-center">
          <button
            onClick={() => navigate("/personalarea/mybooks")}
            className="w-48 h-9  border-2 border-ourOrange bg-transparent rounded-lg font-bold text-ourOrange text-sm mt-7 transition-colors hover:bg-gray-100 mr-6">
            Отменить
          </button>
          <button
            onClick={() => console.log(pdf, img)}
            className="w-48 h-9  bg-ourOrange bg-transparent rounded-lg font-bold text-white text-sm mt-7 transition-colors hover:bg-orange-600">
            Сохранить
          </button>
        </div>
      </div>
    </PersonalSidebarLayout>
  );
}

export default AddBooks;
