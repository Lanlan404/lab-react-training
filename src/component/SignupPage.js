import { useState } from "react";

function SignupPage(props){
    const [email, setEmail]                 = useState("");
    const [password, setPassword]           = useState("");
    const [emailStyle, setEmailStyle]       = useState({ border: "none", height: 30, width: "100%", borderRadius: 3, outline: "1px solid black" });
    const [passwordStyle, setPasswordStyle] = useState({ border: "none", height: 30, width: "100%", borderRadius: 3, outline: "1px solid black" });
    const [greeting, setGreeting]           = useState("Please fill the form");

    const styles = {
        form: {
            display:            "flex",
            flexDirection:      "column",
            alignItems:         "start",
            border:             "1px solid black",
            width:              "50vw",
            padding:            20,
            gap:                10
        },
        userInput: {
            display:            "flex",
            flexDirection:      "column",
            alignItems:         "start",
            width:              "100%",
            gap:                10
        },
        select: {
            height:             30,
            width:              "100%",
            marginBottom:       8
        },
        button: {
            display:            "flex",
            justifyContent:     "center",
            alignItems:         "center",
            borderRadius:       5,
            backgroundColor:    "#59a2ff",
            color:              "white",
            paddingBlock:       10,
            paddingInline:      15
        },
        feedback: {
            margin:             20,
            textAlign:          "left"
        }
    };

    // Function to test email address validity
    function isValidEmail(email) {
        // const emailRegex = new RegExp(/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i);
        const emailRegex = new RegExp(/^[a-zA-Z0-9][-_.+!#$%&'*/=?^`{|]{0,1}([a-zA-Z0-9][-_.+!#$%&'*/=?^`{|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-.]{0,1}([a-zA-Z][-.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([.-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i);

        return emailRegex.test(email);
    };

    // Function to test password complexity
    function isStrongPassword(password) {
        const passwordLengthRegex   = "(?=^.{8,}$)";        // Length (at least 8 characters)
        const upperCaseRegex        = "(?=.*[A-Z])";        // Uppercase characters
        const lowerCaseRegex        = "(?=.*[a-z])";        // Lowercase characters
        const numberRegex           = "(?=.*[0-9])";        // Numbers
        const specialCharRegex      = "(?=.*[!@#$%^&*]+)";  // Special chars

        return      password.match(passwordLengthRegex)
                &&  password.match(upperCaseRegex)
                &&  password.match(lowerCaseRegex)
                &&  password.match(numberRegex)
                &&  password.match(specialCharRegex);
    };

    function handleEmailChange(event) {
        isValidEmail(event.target.value) ? setEmailStyle({ border: "none", height: 30, width: "100%", borderRadius: 3, outline: "1px solid green" }) : setEmailStyle({ border: "none", height: 30, width: "100%", borderRadius: 3, outline: "1px solid red" });

        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        isStrongPassword(event.target.value) ? setPasswordStyle({ border: "none", height: 30, width: "100%", borderRadius: 3, outline: "1px solid green" }) : setPasswordStyle({ border: "none", height: 30, width: "100%", borderRadius: 3, outline: "1px solid red" });

        setPassword(event.target.value);
    }

    function handleNationalityChange(event) {
        const greetings = {
            "en": "Hello",
            "fr": "Bonjour",
            "de": "Hallo"
        };

        setGreeting(greetings[`${event.target.value}`]);
    }

    function handleSubmit() {
        // Nothing happening here yet (no need for this iteration)
    }

    function submit() {
        document.querySelector(".login-form").submit();
    }

    return (
        <div>
            <form className="login-form" style={styles.form} onSubmit={handleSubmit}>
                <label style={styles.userInput}>
                    Email: 
                    <input style={emailStyle} type="email" value={email} onChange={handleEmailChange} />
                </label>
                <label style={styles.userInput}>
                    Password: 
                    <input style={passwordStyle} type="password" value={password} onChange={handlePasswordChange} />
                </label> 
                <label style={styles.userInput}>
                    Nationality: 
                    <select style={styles.select} onChange={handleNationalityChange}>
                        <option value="en">EN</option>
                        <option value="fr">FR</option>
                        <option value="de">DE</option>
                    </select>
                </label>
                <div style={styles.button} onClick={submit}>Sign up</div>
            </form>
            <p style={styles.feedback}>
                <div>{greeting},</div>
                <div>Your email address is: {email}</div>
                <div>Your email address is {isValidEmail(email) ? <b>correct</b> : <b>incorrect</b>}.</div>
            </p>
        </div>
    )
}

export default SignupPage;