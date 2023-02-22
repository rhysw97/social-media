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

        oneCap: /A-Z/,
        oneLower: /a-z/,
        oneSpecial: / [ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\[\]]+/,
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
        passwordsMatch = password === confirmPassword? true: false
        Object.keys(regexs).forEach(key => {
            if(regexs[key].test(password)) {
                setIsValid(currentIsValid => {
                    currentIsValid[key] = true;
                    return currentIsValid
                })
            } else {
                setIsValid(currentIsValid => {
                    currentIsValid[key] = false;
                    return currentIsValid
                })
            }
            console.log(key)
            console.log(isValid[key])
        })
        console.log(password.length)
        if(password.length >= 8) {
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
                {!isValid.eightOrMore &&
                    <p>8 or more than characters</p>
                }
                { !isValid.oneCap &&
                    <p>At least one capital  </p>
                }
                {!isValid.oneLower &&
                    <p>At least one lowercase</p>
                }
                {!isValid.oneNumber &&
                    <p>At least one digit</p>
                }
                {!isValid.oneSpecial &&
                    <p>At least one special character</p>
                }
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