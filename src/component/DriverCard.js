import Rating from "./Rating";

function DriverCard(props) {
    const style = {
        container: {
            display:            "flex",
            justifyContent:     "center",
            alignItems:         "center",
            width:              "50vw",
            borderRadius:       8,
            paddingBlock:       20,
            backgroundColor:    "#455eb5",
            gap:                20
        },
        picture: {
            display:            "flex",
            borderRadius:       "50%",
            height:             "7rem",
            width:              "7rem",
            aspectRatio:        "1/1"
        },
        details: {
            display:            "flex",
            flexDirection:      "column",
            justifyContent:     "center",
            width:              "20vw",
            color:              "white"
        },
        marginZero: {
            margin:             0
        }
    };

    return (
        <div style={style.container}>
            <div>
                <img style={style.picture} src={props.img} alt="driver-profile" />
            </div>
            <div style={style.details}>
                <h2 style={style.marginZero}>{props.name}</h2>
                <Rating>{props.rating}</Rating>
                <p style={style.marginZero}>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    );
}

export default DriverCard;