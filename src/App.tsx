import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./Pages/Home";
import PersonalArea from "./Pages/PersonalArea";
import Settings from "./Pages/PersonalArea/Settings";
import Profile from "./Pages/PersonalArea/Profile";
import Favorites from "./Pages/PersonalArea/Favorites";
import Book from "./Pages/PersonalArea/Book";
import WriteBooks from "./Pages/PersonalArea/WriteBook";
import MyBlogs from "./Pages/PersonalArea/MyBooks";
import MyBooks from "./Pages/PersonalArea/MyBlogs";
import Exit from "./Pages/PersonalArea/Exit";
import AddBooks from "./Pages/PersonalArea/MyBlogs/AddBooks";
import Events from "./Pages/Events";
import Review from "./Pages/Review";
import Project from "./Pages/Projects";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#FF7F2C",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personalarea" element={<PersonalArea />} />
          <Route path="/personalarea/" element={<Profile />} />
          <Route path="/personalarea/mybooks" element={<MyBooks />} />
          <Route path="/personalarea/mybooks/addBooks" element={<AddBooks />} />
          <Route path="/personalarea/myblog" element={<MyBlogs />} />
          <Route path="/personalarea/writebook" element={<WriteBooks />} />
          <Route path="/personalarea/book" element={<Book />} />
          <Route path="/personalarea/favorites" element={<Favorites />} />
          <Route path="/personalarea/settings" element={<Settings />} />
          <Route path="/personalarea/exit" element={<Exit />} />
          <Route path="/events" element={<Events />} />
          <Route path="/review" element={<Review />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
