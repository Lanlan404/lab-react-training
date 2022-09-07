import { useState } from "react";
import profiles from '../data/berlin.json';
import Profile from './Profile';

function Facebook() {
    const [countryHighlight, setCountryHighlight] = useState("");

    const styles = {
        selectBar: {
            display:        "flex",
            flexWrap:       "wrap",
            width:          "40vw",
            margin:         10,
            gap:            10,
        },
        button: {
            display:        "flex",
            justifyContent: "center",
            alignItems:     "center",
            border:         "1px solid black",
            padding:        5
        },
        list: {
            display:        "flex",
            flexDirection:  "column",
            margin:         10,
            gap:            10
        }
    };

    // Extracting the list of countries from "profiles" data
    const countries = profiles.reduce((countries, user) => countries.includes(user.country) ? countries : [...countries, user.country], []);

    function highlight(country) {
        setCountryHighlight(country);
    }

    return (
        <div>
            <div style={styles.selectBar}>
                {countries.map(country => <div style={styles.button} onClick={() => highlight(country)}>{country}</div>)}
            </div>
            <div style={styles.list}>
                {profiles.map(profile => <Profile
                                            firstName={profile.firstName}
                                            lastName={profile.lastName}
                                            img={profile.img}
                                            country={profile.country}
                                            isStudent={profile.isStudent}
                                            highlight={profile.country === countryHighlight}
                                            />)}
            </div>
        </div>
    );
}

// Version 1 (from iteration 13) below
// function Facebook() {
//     const styles = {
//         list: {
//             display:        "flex",
//             flexDirection:  "column",
//             margin:         10,
//             gap:            10
//         }
//     };

//     return (
//         <div style={styles.list}>
//             {profiles.map(profile => <Profile
//                                         firstName={profile.firstName}
//                                         lastName={profile.lastName}
//                                         img={profile.img}
//                                         country={profile.country}
//                                         isStudent={profile.isStudent} />)}
//         </div>
//     );
// }

export default Facebook;