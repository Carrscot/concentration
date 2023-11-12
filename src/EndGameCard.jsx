const EndGameCard = (props) => {
    const {src, winnerName, winnerScore, place} = props;
    return (
        <>
            <div className="endGameCard">
                <img className="playerWinImage" src={src} alt="Player Win Image" id="playerWinImage"/>
                <p className="bolder large-text">{place} Place</p>
                <p className="bold large-text">{winnerName}</p>
                <p className="bold large-text">Score: {winnerScore}</p>
            </div>
        </>
    )
}

export default EndGameCard