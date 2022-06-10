import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterAbilities from "../Character-abilities/Character-abilities";
import CharacterImage from "../Character-image.js/Character-image";
import CharacterDescription from "../Character-description/Character-description";

import "./Character-info.css";

const CharacterInfo = () => {
  let uuid = useParams().id;

  useEffect(() => {
    fetchAgent();
  }, []);

  const [agentData, setAgentData] = useState([]);
  const [agentRole, setAgentRole] = useState([]);
  const [agentAbilities, setAgentAbilities] = useState([]);

  const fetchAgent = async () => {
    const data = await fetch(`https://valorant-api.com/v1/agents/${uuid}`);
    const value = await data.json();
    setAgentData(value.data);
    setAgentRole(value.data.role);
    setAgentAbilities(value.data.abilities);
  };

  return (
    <div id="CharacterInfo">
      <CharacterImage agentData={agentData} />
      <div>
        <CharacterDescription agentData={agentData} agentRole={agentRole} />
        <CharacterAbilities agentAbilities={agentAbilities} />
      </div>
    </div>
  );
};

export default CharacterInfo;
