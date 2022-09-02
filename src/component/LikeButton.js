import { useState } from "react";
export default LikeButton;

function LikeButton() {

    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

    // The state includes both the "likes" counter and the current background color (ie. index in the "colors" array) 
    const [state, setState] = useState(
        {
            likes:           0,
            backgroundColor: 0  // Index in "colors" array
        }
    );

    const style = {
        display:         "flex",
        justifyContent:  "center",
        alignItems:      "center",
        height:          30,
        width:           100,
        backgroundColor: colors[state.backgroundColor]
    };
    
    function newLike() {
        setState({
            likes: state.likes + 1,
            backgroundColor: (state.backgroundColor + 1) % colors.length
        });
    };

    return (
        <div style={style} onClick={newLike}>
            {state.likes} like{state.likes === 1 ? "" : "s"}
        </div>
    );
};
