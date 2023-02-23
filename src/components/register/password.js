import React, {useState} from "react";

export default function Password(props) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    let passwordsMatch = false;
    const [passwordRequirements, setPasswordRequirements] = useState([])
    const [isValid, setIsValid] = useState({
        eightOrMore: false,
        oneCap: false,
        oneLower: false,
        oneSpecial: false,
        oneNumber: false
    })

    const regexs = {
        eightOrMore: /.{8,}/,
        oneCap: /[A-Z]/,
        oneLower: /[a-z]/,
        oneSpecial: /[ `!@#$%^&*()_+\-={};':"\|,.<>\/?~\[\]]/,
        oneNumber: /\d+/,
    }
 

    const passwordMessages = {
        eightOrMore: "eight or more characters",
        oneCap: "One or more capital",
        oneLower: "One or more lowercase",
        oneSpecial: "One or more special character",
        oneNumber: "One or more number"
    }

    const checkRequirementsMet = (requirements, currentPassword, currentConfirmPassword) => {
        if(currentPassword === currentConfirmPassword) {
            const validPassword = Object.values(requirements).every(value => value)
            if (validPassword) {
                props.setCurrentIsValid(true)
                props.setCurrentPassword(password)
            }
        }
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
        passwordsMatch = event.target.value === confirmPassword? true: false
        const isValid = Object.keys(regexs).reduce((result, key) => {
            result[key] = regexs[key].test(event.target.value)
            return result;
        }, {});
        setIsValid(isValid)

        Object.keys(isValid).forEach(key => {
            console.log(key)
            if(!isValid[key]) {
                if(!passwordRequirements.includes(passwordMessages[key])) {
                    setPasswordRequirements(requirements => [...requirements, passwordMessages[key]])
                }
            } else {
                setPasswordRequirements(requirements => requirements.filter(message => message !== passwordMessages[key]))
            }
        })
    };

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
        //check if password is equal to other password
        passwordsMatch = password === event.target.value? true: false
        if(passwordsMatch && checkRequirementsMet(isValid)) {
            props.setConfirmPassword(password)
            props.setIsValid(isValid)
        }
    };


    return (
    <div>
        <div>
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={handlePassword}
            />
            <div>
              {passwordRequirements.map((requirement, index) => <p key={index}>{requirement}</p>)}
            </div>
            
        </div>
        <div>
            <label htmlFor="confirmPassword">Password</label>
            <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPassword}
            />
        </div>
    </div>
    )
}