import React, { useEffect, useState } from "react";
import "./styles.css";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Body from "./components/body/Body";
import Card from "./components/card/Card";
import Button from "./components/button/Button";
import Footer from "./components/footer/Footer";

export default function App() {
  //const [btn, setBtn] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    if (gifs.length === 0) {
      const url =
        "https://api.giphy.com/v1/gifs/trending?api_key=19ue7d6TH7BikoEvUl7iZdUJINSwov2E&limit=15&rating=g";

      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((body) => {
          setGifs(body.data);
        })
        .catch();
    }
  }, []);

  return (
    <main className={`App ${isDark ? "Dark" : "Light"} `}>
      <Header />
      <Button
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        {isDark ? "MODO LIGHT" : "MODO DARK"}
      </Button>
      <Search setGifs={setGifs} />
      <Body>
        {gifs.length ? (
          <>
            <p className="subtitle">¡Busca el Gif que desees!</p>
            <div className="cardGrid">
              {gifs.map((gif) => {
                return (
                  <Card
                    url={gif.url}
                    source={gif.images.original.url}
                    key={gif.id}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <p className="noResults">
            No hay resultados
            <br />
            ¡Intenta con otra palabra!
          </p>
        )}
      </Body>
      <Footer />
    </main>
  );
}
