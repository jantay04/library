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
      to="/events"
      //  onClick={handleClick}
    >
      {loc}
    </Link>,
  ];

  // console.log(location);
  return (
    <Stack spacing={2} className="mt-2  ml-5">
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
