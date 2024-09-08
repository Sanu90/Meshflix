import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";

const Player = () => {
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTM4MmRiZWFiMzNmMDcwMDdhMDU5YmQ5YmI4NTE5YyIsIm5iZiI6MTcyNTcwNzA0Ny4yMjg0NzgsInN1YiI6IjY2ZGMzMDM3ZmE5YzBmOGVhZDlkYjc4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YX1mTO-47vbaVdL2poX3zE03HW3HBWzy6NQqJGk36xc",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/923667/videos?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  );
};

export default Player;
