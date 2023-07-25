import React from "react";
import HeaderHomePage from "../Container/HeaderHomePage/HeaderHomePage";
import song from "../data/musics"
export default function Home() {
  return (
    <div className="">
      <HeaderHomePage/>

      <div className="mt-5 bg-danger">
        {song.pop.map(p => (
          <p>{p.Description}</p>
        ))}
      </div>
    </div>
  );
}
