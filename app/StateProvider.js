/*
The 
*/
"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { galleryData } from "../app/libraries/data";

export const StateContext = createContext();

export default function StateProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [draggedItem, setDraggedItem] = useState(null);
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

  function handleDragStart(event, index) {
    setDraggedItem(index);
  }

  function handleDragOver(event, index) {
    event.preventDefault();
    event.target.classList.add("dragged-over");
    setTimeout(() => {
      event.target.classList.remove("dragged-over");
    }, 3000);
  }

  function handleDrop(event, index) {
    event.preventDefault();
    const updatedData = [...dataToRender];
    const [draggedItemData] = updatedData.splice(draggedItem, 1);
    updatedData.splice(index, 0, draggedItemData);
    setDataToRender(updatedData);
    setDraggedItem(null);
  }

  function handleDragLeave(event) {
    event.target.classList.remove("dragged-over");
  }

  return (
    <StateContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        draggedItem,
        setDraggedItem,
        dataToRender,
        setDataToRender,
        handleDragStart,
        handleDragOver,
        handleDrop,
        handleDragLeave,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
