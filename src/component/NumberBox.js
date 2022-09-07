function NumberBox(props) {
    const styles = {
        square: {
            display:            "flex",
            border:             "1px solid black",
            justifyContent:     "center",
            alignItems:         "center",
            height:             60,
            width:              60,
            backgroundColor:    props.number % 2 === 0 ? "red" : "white",
            fontSize:           20,
            fontWeight:         "bolder",
            color:              props.number % 2 === 0 ? "white" : "black",
        }
    }

    return <div style={styles.square}>{props.number}</div>;
}

export default NumberBox;