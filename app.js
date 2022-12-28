import React, { useState } from "react";
import "./styles.css";

const movieList = {
  action: [
    "The Gray Man",
    "John Wick film series",
    "Marvel movies",
    "DCEU films",
    "Mission: Impossible Film series"
  ],
  adventure: [
    "King Kong",
    "Harry Potter Film series",
    "Pirates of the Caribbean Film series",
    "The Hobbit Film series",
    "Journey 2: The Mysterious Island"
  ],
  comedy: ["Hera Pheri", "Free Guy", "Deadpool", "The Dictator", "Ludo"],
  scifi: [
    "Edge of Tomorrow",
    "Interstellar",
    "Avatar Film series",
    "Men in Black Film series",
    "Oblivion"
  ]
};

export default function App() {
  const [items, setItems] = useState("");
  const [genre, setGenre] = useState("");
  function onClickHandler(id, genre) {
    switch (id) {
      case 1:
        setItems(movieList.action);
        setGenre(genre);
        break;
      case 2:
        setItems(movieList.adventure);
        setGenre(genre);
        break;
      case 3:
        setItems(movieList.comedy);
        setGenre(genre);
        break;
      case 4:
        setItems(movieList.scifi);
        setGenre(genre);
        break;
      default:
        break;
    }
  }
  return (
    <div className="App">
      <nav>
        <h1>Best Movies</h1>
        <p> I have curated a list of great movies of different genres</p>
      </nav>
      <div id="btn-container">
        <button onClick={() => onClickHandler(1, "Action")}>Action</button>
        <button onClick={() => onClickHandler(2, "Adventure")}>
          Adventure
        </button>
        <button onClick={() => onClickHandler(3, "Comedy")}>Comedy</button>
        <button onClick={() => onClickHandler(4, "Sci-fi")}>Sci-Fi</button>
      </div>
      <div id="list-container">
        <div id="genre">
          {" "}
          <h2> {genre} </h2>
        </div>
        <div class="listItem">
          <h3>{items[0]}</h3>
        </div>
        <div class="listItem">
          <h3>{items[1]}</h3>
        </div>
        <div class="listItem">
          <h3>{items[2]}</h3>
        </div>
        <div class="listItem">
          <h3>{items[3]}</h3>
        </div>
        <div class="listItem">
          <h3>{items[4]}</h3>
        </div>
      </div>
    </div>
  );
}