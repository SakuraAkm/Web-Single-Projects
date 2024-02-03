export default function Dice({number, greenBg, selected}) {
    const diceStyle = {backgroundColor: selected ? "green" : "transparent"}
    return (
        <div onClick={greenBg} style={diceStyle} className="dice d-felx justify-content-center">
            {number}
        </div>
    )
}