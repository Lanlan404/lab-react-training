function Rating(props) {
    const maxRating = 5;
    const whiteStar = "☆";
    const blackStar = "★";

    const style     = {
        margin:     0,
        fontSize:   20
    };

    return (
        <p style={style}>
            {blackStar.repeat(Math.round(props.children))}
            {whiteStar.repeat(maxRating - Math.round(props.children))}
        </p>
    );
}

export default Rating;