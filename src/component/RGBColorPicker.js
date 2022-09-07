import { useState }         from "react";
import SingleColorPicker    from "./SingleColorPicker";

function RGBColorPicker(props){
    const [rValue, setrValue] = useState(0);
    const [gValue, setgValue] = useState(0);
    const [bValue, setbValue] = useState(0);

    const styles = {
        container: {
            display:        "flex",
            flexDirection:  "column",
            alignItems:     "start",
            width:          "15vw",
            border:         "1px solid black",
            padding:        20,
            margin:         20
        },
        square: {
            display:        "flex",
            height:         "15vw",
            width:          "15vw",
            backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
            marginBottom:   20
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.square}></div>
            <SingleColorPicker color="r" value={rValue} onChange={setrValue} />
            <SingleColorPicker color="g" value={gValue} onChange={setgValue} />
            <SingleColorPicker color="b" value={bValue} onChange={setbValue} />
        </div>
    );
}

export default RGBColorPicker;