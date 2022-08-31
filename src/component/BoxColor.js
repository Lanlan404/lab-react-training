function BoxColor(props) {
    const style = {
        display:            "flex",
        width:              "30vw",
        height:             "10vh",
        backgroundColor:    `rgb(${props.r}, ${props.g}, ${props.b})`
    };

    return <div style={style}></div>;
}

export default BoxColor;