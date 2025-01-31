function Profile(props){
    const styles = {
        container: {
            display:            "flex",
            border:             "1px solid black",
            width:              "40vw",
            gap:                10,
            padding:            10,
            backgroundColor:    props.highlight ? "#a3d2e2" : "white"
        },
        picture: {
            height:             100,
            width:              "auto",
            objectFit:          "cover"
        },
        description: {
            display:            "flex",
            flexDirection:      "column",
            alignItems:         "start"
        },
        field: {
            margin: 0
        }
    };

    return (
        <div style={styles.container}>
            <img style={styles.picture} src={props.img} alt="profile" />
            <div style={styles.description}>
                <p style={styles.field}><b>First name: </b>{props.firstName}</p>
                <p style={styles.field}><b>Last name: </b>{props.lastName}</p>
                <p style={styles.field}><b>Country: </b>{props.country}</p>
                <p style={styles.field}><b>Type: </b>{props.isStudent ? "Student" : "Teacher"}</p>
            </div>
        </div>
    );
}

// Version 1 from Iteration 13
// function Profile(props){
//     const styles = {
//         container: {
//             display:        "flex",
//             border:         "1px solid black",
//             width:          "40vw",
//             gap:            10,
//             padding:        10
//         },
//         picture: {
//             height:         100,
//             width:          "auto",
//             objectFit:      "cover"
//         },
//         description: {
//             display:        "flex",
//             flexDirection:  "column",
//             alignItems:     "start"
//         },
//         field: {
//             margin: 0
//         }
//     };

//     return (
//         <div style={styles.container}>
//             <img style={styles.picture} src={props.img} alt="profile" />
//             <div style={styles.description}>
//                 <p style={styles.field}><b>First name: </b>{props.firstName}</p>
//                 <p style={styles.field}><b>Last name: </b>{props.lastName}</p>
//                 <p style={styles.field}><b>Country: </b>{props.country}</p>
//                 <p style={styles.field}><b>Type: </b>{props.isStudent ? "Student" : "Teacher"}</p>
//             </div>
//         </div>
//     );
// }

export default Profile;