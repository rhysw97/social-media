import React, {useState} from "react";

export default function Password(props) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    let passwordsMatch = false;
    const [isValid, setIsValid] = useState({
        eightOrMore: false,
        oneCap: false,
        oneLower: false,
        oneSpecial: false,
        oneNumber: false
    })

    const regexs = {

        oneCap: /[A-Z]/,
        oneLower: /[a-z]/,
        oneSpecial: /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\[\]]/,
        oneNumber: /\d+/,
    }
    const passwordRequirements = new Set()

    const passwordMessages = {
        eightOrMore: <p>eight or more characters</p>,
        oneCap: <p>One or more capital</p>,
        oneLower: <p>One or more lowercase</p>,
        oneSpecial: <p>One or more special character</p>,
        oneNumber: <p>One or more number</p>
    }


    const handlePassword = (event) => {
        setPassword(event.target.value)
        passwordsMatch = event.target.value === confirmPassword? true: false
        const isValid = Object.keys(regexs).reduce((result, key) => {
            result[key] = regexs[key].test(event.target.value)
            return result;
        }, {});
        setIsValid(isValid)

        if(event.target.value.length >= 8) {
            setIsValid(currentIsValid => {
                currentIsValid.eightOrMore = true;
                return currentIsValid
            })
        } else {
            setIsValid(currentIsValid => {
                currentIsValid.eightOrMore = false;
                return currentIsValid
            })
        }
        console.log(isValid)
        Object.keys(isValid).forEach(key => {
            if(isValid[key]) {
                passwordRequirements.add(passwordMessages[key])
            } else {
                passwordRequirements.delete(passwordMessages[key])
            }
        })
    };

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
        //check if password is equal to other password
        passwordsMatch = password === confirmPassword? true: false
        
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
              {passwordRequirements}
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