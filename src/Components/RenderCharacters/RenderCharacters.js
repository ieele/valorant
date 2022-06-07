import { Link } from "react-router-dom";

const RenderCharacters = ({ agents }) => {
  return (
    <div>
      {agents.map((agent) => {
        return (
          <h2 key={agent.uuid} title="rendered characters">
            <Link to={`/characters/${agent.uuid}`}>{agent.displayName}</Link>
          </h2>
        );
      })}
    </div>
  );
};

export default RenderCharacters;
