import "./Character-description.css";

const CharacterDescription = (props) => {
  const { agentData, agentRole } = props;

  return (
    <section id="CharacterAbout">
      <h1>Agent: {agentData.displayName}</h1>
      <div>
        <h3>class</h3>
        <span>{agentRole.displayName}</span>
      </div>
      <div>
        <h3>Description</h3>
        <p>{agentData.description}</p>
      </div>
    </section>
  );
};

export default CharacterDescription;
