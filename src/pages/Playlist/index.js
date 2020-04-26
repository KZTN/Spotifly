import React from "react";
import Nav from "../../components/Nav";
import HomeNav from "../../components/HomeNav";
import { useParams } from "react-router-dom";
import { ReactComponent as PlayIcon } from "../../assets/buttons/playicon.svg";
import { ReactComponent as HeartIcon } from "../../assets/buttons/hearticon.svg";
import { ReactComponent as ThreedotsIcon } from "../../assets/buttons/threedotsicon.svg";
import { ReactComponent as NoteIcon } from "../../assets/buttons/noteicon.svg";

import "./styles.scss";
export default function Playlist(props) {
  const { id } = useParams();
  return (
    <>
      <Nav />
      <div className="playlist">
        <HomeNav />
        <div className="mainContent">
          <div className="boxInfo">
            <div className="boxInfoImage">
              <img
                src="https://images.unsplash.com/photo-1587446745330-e5712e1097d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                alt="album"
              />
            </div>
            <div className="boxInfoDetails">
              <span>PLAYLIST</span>
              <h1>Playlist {id}</h1>
              <p>
                Minimalism, eletronics and modern clasiscal to concentrate to.
              </p>
              <div className="boxInfoOthersDetails">
                <a href="#">
                  <strong>Spotiflypl</strong>
                </a>
                <span>15,216,128 likes</span>
                <span>2 hr 46 min </span>
              </div>
            </div>
          </div>
          <div className="boxActions">
            <button>
              <PlayIcon />
            </button>
            <button>
              <HeartIcon />
            </button>
            <button>
              <ThreedotsIcon />
            </button>
          </div>
          <div className="boxSongs">
            <ul className="songList">
              <li>
                <div className="songIcon">
                  <NoteIcon className="noteI" />
                  <PlayIcon className="playI" />
                </div>
                <div className="songDetails">
                  <h3>Held Down</h3>
                  <span>Laura Marling</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
              <li>
                <div className="songIcon">
                  <NoteIcon className="noteI" />
                  <PlayIcon className="playI" />
                </div>
                <div className="songDetails">
                  <h3>Held Down</h3>
                  <span>Laura Marling</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
              <li>
                <div className="songIcon">
                  <NoteIcon className="noteI" />
                  <PlayIcon className="playI" />
                </div>
                <div className="songDetails">
                  <h3>Held Down</h3>
                  <span>Laura Marling</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
              <li>
                <div className="songIcon">
                  <NoteIcon className="noteI" />
                  <PlayIcon className="playI" />
                </div>
                <div className="songDetails">
                  <h3>Held Down</h3>
                  <span>Laura Marling</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
              <li>
                <div className="songIcon">
                  <NoteIcon className="noteI" />
                  <PlayIcon className="playI" />
                </div>
                <div className="songDetails">
                  <h3>Held Down</h3>
                  <span>Laura Marling</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
              <li>
                <div className="songIcon">
                  <NoteIcon className="noteI" />
                  <PlayIcon className="playI" />
                </div>
                <div className="songDetails">
                  <h3>Held Down</h3>
                  <span>Laura Marling</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
              <li>
                <div className="songIcon">
                  <NoteIcon className="noteI" />
                  <PlayIcon className="playI" />
                </div>
                <div className="songDetails">
                  <h3>Held Down</h3>
                  <span>Laura Marling</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
              <li>
                <div className="songIcon">
                  <NoteIcon className="noteI" />
                  <PlayIcon className="playI" />
                </div>
                <div className="songDetails">
                  <h3>Held Down</h3>
                  <span>Laura Marling</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
              <li>
                <div className="songIcon">
                  <NoteIcon className="noteI" />
                  <PlayIcon className="playI" />
                </div>
                <div className="songDetails">
                  <h3>Held Down</h3>
                  <span>Laura Marling</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
              <li>
                <div className="songIcon">
                  <NoteIcon className="noteI" />
                  <PlayIcon className="playI" />
                </div>
                <div className="songDetails">
                  <h3>Held Down</h3>
                  <span>Laura Marling</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
              <li>
                <div className="songIcon">
                  <NoteIcon className="noteI" />
                  <PlayIcon className="playI" />
                </div>
                <div className="songDetails">
                  <h3>Held Down</h3>
                  <span>Laura Marling</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
              <li>
                <div className="songIcon">
                  <NoteIcon className="noteI" />
                  <PlayIcon className="playI" />
                </div>
                <div className="songDetails">
                  <h3>Held Down</h3>
                  <span>Laura Marling</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
              <li>
                <div className="songIcon">
                  <NoteIcon className="noteI" />
                  <PlayIcon className="playI" />
                </div>
                <div className="songDetails">
                  <h3>Held Down</h3>
                  <span>Laura Marling</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
              <li>
                <div className="songIcon">
                  <NoteIcon className="noteI" />
                  <PlayIcon className="playI" />
                </div>
                <div className="songDetails">
                  <h3>Held Down</h3>
                  <span>Laura Marling</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
              <li>
                <div className="songIcon">
                  <NoteIcon className="noteI" />
                  <PlayIcon className="playI" />
                </div>
                <div className="songDetails">
                  <h3>Held Down</h3>
                  <span>Laura Marling</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li> 
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
