import React from "react";
import Playlists from "../Playlists";
import { isMobile } from "react-device-detect";
import "./styles.scss";

const Categories = () => {
  const dataCategories = [
    {
      id: 1,
      name: "Uniquely yours",
      tagline: "",
    },
    {
      id: 2,
      name: "Charts",
      tagline: "",
    },
    {
      id: 3,
      name: "Focus",
      tagline: "Music to help you concentrate.",
    },
    {
      id: 4,
      name: "Mood",
      tagline: "Playlists to match your mood.",
    },
  ];
  return (
    <>
      {dataCategories.map((category) => (
        <div className="category" key={category.id}>
          <div className="headerSection">
            <div className="action-buttons">
              <button>
                <h1>{category.name}</h1>
              </button>
              {isMobile ? (
                <></>
              ) : (
                <button>
                  <span>SEE ALL</span>
                </button>
              )}
            </div>
            <div className="subText">{category.tagline}</div>
          </div>
          <Playlists categoryId={category.id} />
        </div>
      ))}
    </>
  );
};
export default Categories;
