function CreditCard(props) {
    const cardStyle = {
        color: props.color,
        backgroundColor: props.bgColor,
    };
    return (
        <div id="card" style={cardStyle} >
            <p className="type">{props.type}</p>
            <p className="number">{props.number}</p>
            <p className="expiration">Expires: {props.expirationMonth}/{props.expirationYear}</p>
            <p className="bank">{props.bank}</p>
            <p className="owner">{props.owner}</p>
        </div>
    )
}

export default CreditCard