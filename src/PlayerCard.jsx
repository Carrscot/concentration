const PlayerCard = (props) => {
  const { 
    src, 
    player, 
    score, 
    id } = props;
  return (
    <div className="playerCardContainer">
      <div className="playerCard">
        <img src={src} alt={player} id={id} className="playerImage" />
        <p className="bold large-text">{player}</p>
        <p className="bold large-text">Score: {score}</p>
      </div>
      <div className="turnBox">It's Your Turn!</div>
    </div>
  );
};

export default PlayerCard;
