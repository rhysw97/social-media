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
                    Password
                    <input id="username" type="password"/>
                </label>
            </form>
        </div>

    )
}