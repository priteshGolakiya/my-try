import React from "react";
import Hero from "../components/home/Hero";
import Card from "../common/Card/Card";

function Home() {
  return (
    <div>
      <Hero />
      <h1
        style={{
          fontSize: "2rem",
          marginTop: "10px",
          textAlign: "center",
          color: "black",
        }}
      >
        My Service Area
      </h1>
      <Card />
    </div>
  );
}

export default Home;
