import React from "react";
import Card from "../Card";
import Playlists from '../Playlists';

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
              <button>
                <span>SEE ALL</span>
              </button>
            </div>
      <div className="subText">{category.tagline}</div>
          </div>
          <div className="cardsWrap">
              <Playlists categoryId={category.id}/>
          </div>
        </div>
      ))}
    </>
  );
};
export default Categories;
