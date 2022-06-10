import { Link } from "react-router-dom";
import "./RenderCharacters.css";

const RenderCharacters = ({ agents }) => {
  return (
    <div className="characters-list">
      {agents.map((agent) => {
        return (
          <div key={agent.uuid}>
            <Link to={`/characters/${agent.uuid}`}>
              <img src={agent.displayIconSmall} alt={agent.displayName} />
              <h2>{agent.displayName}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RenderCharacters;
