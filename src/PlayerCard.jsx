import InputField from "./InputField"

const PlayerCard = ({player}) => {
    return (
        <div className="playerCard">
        <h1>{player}</h1>
        <InputField />
        </div>
    )
}

export default PlayerCard