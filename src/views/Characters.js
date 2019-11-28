import React, { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";

const Characters = () => {
  const url = "https://rickandmortyapi.com/api/character/?page=";
  const [chars, setChars] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(url + page)
      .then(res => res.json())
      .then(data => data.results)
      .then(chars => setChars(chars));
  }, [page]);

  const top = document.getElementById("top");
  const turnPage = e => {
    top.scrollIntoView({ behavior: "smooth" });
    switch (e.target.value) {
      case "next":
        if (page === 25) return;
        setPage(page + 1);
        break;
      case "prev":
        if (page === 1) return;
        setPage(page - 1);
        break;
      case "first":
        setPage(1);
        break;
      case "last":
        setPage(25);
        break;
      default:
        break;
    }
  };

  const CharacterComp = chars.map(char => (
    <CharacterCard
      key={char.id}
      name={char.name}
      image={char.image}
      species={char.species}
      gender={char.gender}
      status={char.status}
      origin={char.origin.name}
      episode={char.episode[0].split("/").pop()}
    />
  ));

  return (
    <section id="top" className="has-background-grey-lighter characters-page">
      <Pagination page={page} turnPage={turnPage} />
      <div className="">
        {chars.length > 0 ? (
          <div className="all-cards container is-widescreen">
            {CharacterComp}
          </div>
        ) : (
          <progress class="progress is-large is-primary" max="100"></progress>
        )}
      </div>
      <Pagination page={page} turnPage={turnPage} />
    </section>
  );
};

export default Characters;
