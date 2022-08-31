function Greetings(props) {
    const greeting = {
        "de": "Hallo",
        "en": "Hello",
        "es": "Hola",
        "fr":  "Salut"
    };

    return <p>{greeting[props.lang]} {props.children}!</p>;
}

export default Greetings;