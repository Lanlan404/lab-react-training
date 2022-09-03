import { useState } from "react";

function Carousel(props) {
    const [picture, setPicture] = useState(0);
    const styles = {
        carousel: {
            display: "flex",
            alignItems: "center",
            gap: 10
        },
        button: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 30,
            width: 30,
            borderRadius: "50%",
            backgroundColor: "black",
            color: "white"
        },
        viewer: {
            height: "auto",
            width: "auto"
        }
    };

    function swipeLeft() {
        setPicture((picture - 1) % props.images.length);
    };

    function swipeRight() {
        setPicture((picture + 1) % props.images.length);
    };

    return (
        <div style={styles.carousel}>
            <div style={styles.button} onClick={swipeLeft}>◀</div>
            <div style={styles.viewer}>
                <img src={props.images[picture]} alt="carousel-view" />
            </div>
            <div style={styles.button} onClick={swipeRight}>▶</div>
        </div>
    );
};

export default Carousel;
