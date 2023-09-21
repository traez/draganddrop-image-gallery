/*
The essence of the StateProvider component to the codebase in which it is found is to provide a central place to manage the application's state. This makes it easy for all of the application's components to access the state without having to worry about how it is being managed.
*/
"use client";
import { createContext, useState, useEffect } from "react";
import { galleryData } from "../app/libraries/data";

export const StateContext = createContext();

export default function StateProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataToRender, setDataToRender] = useState(galleryData);
  const isSearchActive = searchTerm.trim() !== "";

  useEffect(() => {
    if (isSearchActive) {
      setDataToRender(
        galleryData.filter((item) =>
          item.continent.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setDataToRender(galleryData);
    }
  }, [searchTerm, isSearchActive]);

  return (
    <StateContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        dataToRender,
        setDataToRender,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
