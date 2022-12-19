import React, { useContext } from "react";
export const booksContextProvider = React.createContext();
export const useBooks = () => useContext(booksContextProvider);

const BooksContextProvider = ({ children }) => {
  function hello() {
    console.log("hello");
  }

  const API = "http://localhost:8000/products";

  return (
    <booksContextProvider.Provider value={{ hello }}>
      {children}
    </booksContextProvider.Provider>
  );
};

export default BooksContextProvider;
