import InputField from "./InputField"

const PlayerCard = (props) => {
    const {player, onInfoChange, type, id, placeholder, value} = props
    return (
        <div className="playerCard">
        <h1>{player}</h1>
        <InputField 
            onInfoChange={onInfoChange} 
            type="text"
            id={player} 
            placeholder={placeholder} 
            value={value}
        />
        </div>
    )
}

export default PlayerCard