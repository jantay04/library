import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useState from "react";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
}

export default function BreadCrumb(): any {
  const location: any = useLocation();
  const [loc, setLoc] = React.useState<null | any>();

  React.useEffect(() => {
    setLoc(location.pathname);
  }, []);
  switch (loc) {
    case "/events":
      return setLoc("Мероприятия");
      break;
    case "/review":
      return setLoc("Рецензии");
      break;
    case "/aboutus":
      return setLoc("О Нас");
      break;
    case "/law":
      return setLoc("Все права защищены");
      break;
    case "/privacypolicy":
      return setLoc("Политика конфиденциальности");
      break;
    case "/publicoffer":
      return setLoc("Публичная оферта");
      break;
    case "/contacts":
      return setLoc("Контакты");
      break;
    case "/library":
      return setLoc("Библиотека");
      break;
    case "/library/1":
      return setLoc("Библиотека");
      break;
  }

  const breadcrumbs = [
    <Link
      className="transition-colors hover:underline text-ourOrange"
      key="1"
      // color="inherit"
      // onClick={handleClick}
      to="/">
      Главная
    </Link>,
    <Link
      className="transition-colors hover:underline"
      key="2"
      color="inherit"
      to={location}
    //  onClick={handleClick}
    >
      {loc}
    </Link>,
  ];

  // console.log(location);
  return (
    <Stack spacing={2} className="mt-2">
      <Breadcrumbs
        separator={
          <NavigateNextIcon fontSize="small" className="text-ourOrange" />
        }
        aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
