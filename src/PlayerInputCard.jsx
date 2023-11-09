import InputField from "./InputField"

const PlayerCard = (props) => {
    const {
        player, 
        onInfoChange, 
        id, 
        placeholder, 
        value, 
        src} = props;

    return (
        <div className="playerCard">
        <img 
            src={src} 
            alt={player} 
            id={id} 
            className="playerImage"/>

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