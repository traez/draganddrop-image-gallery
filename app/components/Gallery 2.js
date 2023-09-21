/*
the 
*/
"use client";
import Image from "next/image";
import { useContext } from "react";
import { StateContext } from "../StateProvider";

export default function Gallery() {
  const {
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
  } = useContext(StateContext);

  return (
    <section className="section-gallery">
      <input
        type="search"
        placeholder="Search by Continent"
        className="search-bar"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <div className="section-gallery-div">
        {dataToRender.map((item, index) => (
          <article
            key={index}
            draggable="true"
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragLeave={(e) => handleDragLeave(e)}
            onDrop={(e) => handleDrop(e, index)}
            className={index === draggedItem ? "dragged" : ""}
          >
            <div className="flag-container">
              <Image
                src={`/images/${item.flag}`}
                alt=""
                fill
                sizes="(min-width: 400px) 100vw"
                data-country={item.country.toLowerCase()}
                data-continent={item.continent.toLowerCase()}
              />
            </div>
            <ul>
              <li>{item.country}</li>
              <li>{item.continent}</li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
