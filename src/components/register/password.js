import React, {useState} from "react";

export default function Password(props) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    let passwordsMatch = false;

    const regexs = {

        oneCap: /[A-Z]+/,
        oneLower: /[a-z]+/,
        oneSpecial: /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]]+/,
        oneNumber: /[0-9]+/,
    }
    const passwordRequirements = []

    const isValid = {
        eightOrMore: false,
        oneCap: null,
        oneLower: null,
        oneSpecial: null,
        oneNumber: null
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
        passwordsMatch = password === confirmPassword? true: false
        Object.keys(regexs).forEach(key => {
            if(regexs[key].test(password)) {
                isValid[key] = true;
            } else {
                isValid[key] = false;
                
            }
            console.log(key)
            console.log(isValid[key])
        })
        console.log(password.length)
        if(password.length >= 8) {
            isValid.eightOrMore = true
        } else {
            isValid.eightOrMore = false
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