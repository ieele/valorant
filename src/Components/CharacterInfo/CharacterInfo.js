import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterInfo = () => {
  let uuid = useParams().id;

  useEffect(() => {
    fetchAgent();
  });

  const [agent, setAgent] = useState([]);

  const fetchAgent = async () => {
    const data = await fetch(`https://valorant-api.com/v1/agents/${uuid}`);
    const value = await data.json();
    setAgent(value.data);
  };

  return (
    <div>
      <h1>{agent.displayName}</h1>
    </div>
  );
};

export default CharacterInfo;
