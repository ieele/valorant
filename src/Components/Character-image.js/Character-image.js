import "./Character-image.css";

const CharacterImage = (props) => {
  const { agentData } = props;

  return (
    <section
      id="CharacterImage"
      style={{
        backgroundImage: `url(${agentData.background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <img src={agentData.fullPortraitV2} alt="agent portrait" />
    </section>
  );
};

export default CharacterImage;
