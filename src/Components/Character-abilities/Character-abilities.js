import "./Character-abilities.css";

const CharacterAbilities = (props) => {
  const { agentAbilities } = props;

  return (
    <section id="CharacterAbilities">
      <h1>Abilities</h1>
      {agentAbilities.map((ability) => {
        return (
          <div className="abilities-content" key={ability.slot}>
            <div>
              <img src={ability.displayIcon} alt={ability.displayName} />
              <h3>{ability.displayName}</h3>
            </div>
            <p>{ability.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default CharacterAbilities;
