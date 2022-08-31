function IdCard(props) {
    return (<div>
                <div>
                    <img className="picture" src={props.picture} alt="user's pic" />
                </div>
                 <div>
                    <p className="firstName">First Name : {props.firstName}</p>
                    <p className="lastName">Last Name : {props.lastName}</p>
                    <p className="gender">Gender : {props.gender}</p>
                    <p className="height">Height : {props.height}</p>
                    <p className="birth">Birth : {props.birth.toISOString()}</p>
                </div>
            </div>)
}

export default IdCard