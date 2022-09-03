import { useState } from "react";

// Dices inages
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import empty from "../assets/images/dice-empty.png";

const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
    // Dices are identifies by there index in the "dices" array.
    const [dice, setDice] = useState(0);
    const style = {
        height:    70,
        width:     "auto"
    };

    function roll() {
        const randomDice = Math.floor(Math.random() * 6);
        // Initial empty dice when user click
        setDice(empty);

        // Printing random dice one second later
        setTimeout(() => setDice(randomDice) , 1000);
    };

    return <img style={style} src={dices[dice]} alt="dice" onClick={roll} />;
};

export default Dice;
