import React from "react";

export default function Register() {
    return(
        <div>
            <h1>Register To Gig Mates</h1>
            <form>
                <label>
                    Username
                    <input id="username" type="text"/>
                </label>

                <label>
                    Email
                    <input id="email" type="email"/>
                </label>

                <label>
                    Date Of Birth
                    <input id="dob" type="date"/>
                </label>

                <label>
                    Password
                    <input id="password" type="password"/>
                </label>

                <label>
                    Confirm Password
                    <input id="confirm-password" type="password"/>
                </label>
            </form>
        </div>

    )
}