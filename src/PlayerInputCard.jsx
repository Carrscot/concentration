import InputField from "./InputField"

const PlayerCard = (props) => {
    const {
        player, 
        onInfoChange, 
        id, 
        placeholder, 
        value, 
        src,
        inputClass} = props;

    return (
        <div className="playerInputCard">
        <img 
            src={src} 
            alt={player} 
            id={id} 
            className="playerImage"/>

        <InputField 
            inputClass={inputClass}
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