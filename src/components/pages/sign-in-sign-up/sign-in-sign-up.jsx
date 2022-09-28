import React from "react";
import './sign-in-sign-up.scss'

import SignIn from "../../sign-in/sign-in-component";
import SignUp from "../../sign-up/sign-up.component";


const SignInSignUp = ()=> {
    return(
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}
export default SignInSignUp;