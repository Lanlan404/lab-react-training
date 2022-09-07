function SingleColorPicker(props){
    const colorNames = {
        "r": "Red",
        "g": "Green",
        "b": "Blue"
    };

    const styles = {
        picker: {
            display:        "flex",
            justifyContent: "space-between",
            width:          "100%"
        },
        number: {
            width: 40
        }
    };

    function handleChange(event) {
        const colorNumber = event.target.value;

        if (colorNumber <= 255) { props.onChange(event.target.value) };
    };

    return (
        <label style={styles.picker}>
            <span>{colorNames[props.color]}:</span>
            <input style={styles.number} type="number" value={props.value} min="0" onChange={handleChange} />
        </label>
    );
}

export default SingleColorPicker;