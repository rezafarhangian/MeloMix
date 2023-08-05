import React from "react";
import HeaderHomePage from "../Container/HeaderHomePage/HeaderHomePage";
import song from "../data/musics";
import DOMPurify from "dompurify";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className="mb-5 page-container">
      <HeaderHomePage />

      {/* <div className="mt-5 ">
        {song.moviemusic.map((p, index) => (
          <div key={index}>
            <p>{p.License}</p>
            <p>{p.Musician}</p>
            <p>{p.SongName}</p>
            <p>{p.Singer}</p>
            <img src={p.Cover} alt="Error" />
            <audio controls>
              <source src={p.MusicUrl} type="audio/mpeg" />
            </audio>
            <div
              className="bg-body-secondary lh-sm"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(p.Description),
              }}
            />
          </div>
        ))}
      </div> */}


     

      <Footer/>
    </div>
  );
}
