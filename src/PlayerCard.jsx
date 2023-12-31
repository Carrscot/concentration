const PlayerCard = (props) => {
  const {
    playerTurn, 
    src, 
    player, 
    playerScore, 
    id } = props;
  return (
    <div className="playerCardContainer">
      <div className="playerCard">
        <img src={src} alt={player} id={id} className="playerImage" />
        <p className="bold large-text">{player}</p>
        <p className="bold large-text">Score: {playerScore}</p>
      </div>
      <div className={playerTurn ? "turnBox" : "hide"}>It's Your Turn!</div>
    </div>
  );
};

export default PlayerCard;
