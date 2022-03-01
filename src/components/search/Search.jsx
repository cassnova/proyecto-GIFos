import React, { useEffect, useState } from "react";
import "./Search.css";

function Search({ setGifs }) {
  const [value, setValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [autocomplete, setAutocomplete] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
  };

  const autocompleteHandler = (e) => {
    setAutocomplete([]);
  };

  useEffect(() => {
    if (isSearching && value.length > 0) {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=19ue7d6TH7BikoEvUl7iZdUJINSwov2E&q=${value}&limit=15&offset=0&rating=g&lang=en`;

      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((body) => {
          setIsSearching(false);
          setGifs(body.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isSearching, value]);

  useEffect(() => {
    if (value.length >= 2) {
      const url = `https://api.giphy.com/v1/gifs/search/tags?api_key=19ue7d6TH7BikoEvUl7iZdUJINSwov2E&q=${value}&limit=4&offset=0&rating=g&lang=en`;

      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((body) => {
          // console.log(body.data);
          setAutocomplete(body.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [value]);

  return (
    <div className="Search">
      <h1 className="title">¡Inspirate y busca los mejores GIFS!</h1>
      <img
        className="imgGifos"
        src="images/ilustra_header.svg"
        alt="ilustracion"
      />

      <div className="containerBar">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="searchBar"
          type="text"
          placeholder="Busca gifs"
        />

        <button onClick={handleSearch} type="button" className="btnSearch">
          <img src="images/icon-search-mod-noc.svg" alt="Icono de Lupa" />
        </button>

        {autocomplete.length > 0 &&
          autocomplete.map((name, i) => {
            return (
              <div
                className="autocomplete"
                key={i}
                onClick={() => autocompleteHandler(name.username)}
              >
                <p
                  onClick={() => {
                    setValue(name.name);
                    setAutocomplete([]);
                  }}
                >
                  {name.name}
                </p>
              </div>
            );
          })}
        {isSearching ? <p className="charging">Cargando...</p> : null}
      </div>
    </div>
  );
}

export default Search;
