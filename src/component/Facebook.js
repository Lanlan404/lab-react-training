import profiles from '../data/berlin.json';
import Profile from './Profile';

// {
//     "firstName": "Amelia",
//     "lastName": "Chorng Ua",
//     "country": "Malaysia",
//     "img": "http://res.cloudinary.com/djyjdargg/image/upload/v1550168765/Ironclass/IH_Jan1952.jpg.jpg",
//     "isStudent": true
// }

function Facebook() {
    const styles = {
        list: {
            display:        "flex",
            flexDirection:  "column",
            margin:         10,
            gap:            10
        }
    };

    return (
        <div style={styles.list}>
            {profiles.map(profile => <Profile
                                        firstName={profile.firstName}
                                        lastName={profile.lastName}
                                        img={profile.img}
                                        country={profile.country}
                                        isStudent={profile.isStudent} />)}
        </div>
    );
}

export default Facebook;