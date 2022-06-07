import React, { useState, useEffect } from "react";
import RenderCharacters from "../RenderCharacters/RenderCharacters";

const Characters = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const characters = await fetch("https://valorant-api.com/v1/agents");
    const character = await characters.json();
    const newArray = character.data.filter(
      (char) => char.isPlayableCharacter === true
    );
    console.log(newArray);
    setAgents(newArray);
  };

  return (
    <section id="charactersContainer">
      <h1>Characters</h1>
      <RenderCharacters agents={agents} />
    </section>
  );
};

export default Characters;
