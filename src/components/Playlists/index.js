import React from "react";
import Card from "../Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import CardMobile from '../CardMobile'
import "./styles.scss";

const Playlists = (props) => {
  const responsiveSettings = [
    {
      breakpoint: 600,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
    {
      breakpoint: 780,
      settings: { slidesToShow: 2, slidesToScroll: 2 },
    },
    {
      breakpoint: 960,
      settings: { slidesToShow: 3, slidesToScroll: 3 },
    },
    {
      breakpoint: 1140,
      settings: { slidesToShow: 4, slidesToScroll: 4 },
    },
    {
      breakpoint: 1320,
      settings: { slidesToShow: 5, slidesToScroll: 5 },
    },
    {
      breakpoint: 1500,
      settings: { slidesToShow: 6, slidesToScroll: 6 },
    },
    {
      breakpoint: 1680,
      settings: { slidesToShow: 7, slidesToScroll: 7 },
    },
    {
      breakpoint: 1840,
      settings: { slidesToShow: 8, slidesToScroll: 8 },
    },
  ];
  const dataPlaylists = [
    {
      id: 101,
      category_id: 1,
      name: "Liked Songs",
      description: "",
      thumbnail:
        "https://images.unsplash.com/photo-1512608121467-72931bf816c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 102,
      category_id: 2,
      name: "Chart playlist 1",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      thumbnail:
        "https://images.unsplash.com/photo-1587446745330-e5712e1097d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 103,
      category_id: 2,
      name: "Chart playlist 2",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      thumbnail:
        "https://images.unsplash.com/photo-1587471557294-9b5773994a90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 104,
      category_id: 2,
      name: "Chart playlist 3",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      thumbnail:
        "https://images.unsplash.com/photo-1527588574470-7152d7c3c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 105,
      category_id: 2,
      name: "Chart playlist 4",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      thumbnail:
        "https://images.unsplash.com/photo-1587320734554-fdcd82819e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 106,
      category_id: 3,
      name: "Focus playlist 2",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      thumbnail:
        "https://images.unsplash.com/photo-1523860522695-dfc952f0c10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    },
    {
      id: 107,
      category_id: 3,
      name: "Focus playlist 3",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      thumbnail:
        "https://images.unsplash.com/photo-1526827826797-7b05204a22ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 108,
      category_id: 4,
      name: "Mood playlist 1",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      thumbnail:
        "https://images.unsplash.com/photo-1587491439833-78f88e990f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    },
    {
      id: 109,
      category_id: 4,
      name: "Mood playlist 2",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      thumbnail:
        "https://images.unsplash.com/photo-1587629329212-5f3eb096dc4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 110,
      category_id: 4,
      name: "Mood playlist 2",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      thumbnail:
        "https://images.unsplash.com/photo-1587629329212-5f3eb096dc4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 111,
      category_id: 4,
      name: "Mood playlist 2",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      thumbnail:
        "https://images.unsplash.com/photo-1587629329212-5f3eb096dc4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 112,
      category_id: 4,
      name: "Mood playlist 2",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      thumbnail:
        "https://images.unsplash.com/photo-1587629329212-5f3eb096dc4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 113,
      category_id: 4,
      name: "Mood playlist 2",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      thumbnail:
        "https://images.unsplash.com/photo-1587629329212-5f3eb096dc4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 114,
      category_id: 4,
      name: "Mood playlist 2",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      thumbnail:
        "https://images.unsplash.com/photo-1587629329212-5f3eb096dc4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 115,
      category_id: 4,
      name: "Mood playlist 2",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      thumbnail:
        "https://images.unsplash.com/photo-1587629329212-5f3eb096dc4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    },
  ];
  const Wrapper = styled.div`
    width: 100%;
  `;
  const WrapperMobile = styled.div`
    width: 130%;
    margin: 0;
    padding: 0;
    postion: absolute;
    margin-left: -50px;

    .slick-list:first-child {
      margin-left: 20px;
  }
  `;
  const machtedPlaylists = dataPlaylists.filter(
    (playlist) => playlist.category_id === props.categoryId
  );

  return (
    <>
      {isMobile? (
        
        <WrapperMobile>
          <Slider
            centerMode={false}
            infinite={false}
            speed={500}
            slidesToShow={2}
            slidesToScroll={2}
            dots={false}
            adaptiveHeight={true}
            arrows={false}
          >
            {machtedPlaylists.map((playlist) => (
              <CardMobile
                name={playlist.name}
                description={playlist.description}
                thumbnail={playlist.thumbnail}
                id={playlist.id}
                key={playlist.id}
              />
            ))}
          </Slider>
        </WrapperMobile>
      ) : (
        <Wrapper>
          <Slider
            centerMode={false}
            infinite={false}
            speed={500}
            slidesToShow={8}
            slidesToScroll={8}
            dots={false}
            adaptiveHeight={true}
            arrows={false}
            responsive={responsiveSettings}
          >
            {machtedPlaylists.map((playlist) => (
              <Card
                name={playlist.name}
                description={playlist.description}
                thumbnail={playlist.thumbnail}
                id={playlist.id}
                key={playlist.id}
              />
            ))}
          </Slider>
        </Wrapper>
      )}
    </>
  );
};

export default Playlists;
