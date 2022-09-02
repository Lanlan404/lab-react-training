import { useState } from "react";

function ClickablePicture(props) {
    const [picture, setPicture] = useState(props.img);

    function togglePicture() {
        setPicture(picture === props.img ? props.imgClicked : props.img);
    };

    return (
        <img src={picture} onClick={togglePicture} alt="profile" />
    );
};

export default ClickablePicture;
