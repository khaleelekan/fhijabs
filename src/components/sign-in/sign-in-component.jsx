import React from "react";
import FormInput from "../form-input/form-input-component";
import CustomButton from "../custom-button/custom-button.component";
import './sign-in.scss'
import { auth } from '../../firebase/firebase.utils'
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit (e){
        e.preventDefault();

        this.setState({email:'', password:''})
    }
    handleChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value })
    }
    render(){
        const signInWithGoogle = () => { 
            const provider = new GoogleAuthProvider();
            provider.setCustomParameters({prompt: 'select_account'});
            signInWithPopup(auth,provider)
            .then((re) => {
                console.log(re);
            })
            .catch((err) =>{
                console.log(err)
            })
        }
        return(
            <div className="sign-in">
               <h2> I am a customer already </h2> 
               <span>Sign in with your email and pasword</span>
               <form onSubmit={this.handleSubmit}>
                <FormInput name='email' type='email' id='email' value={this.state.email} label='Email'
                 handleChange={this.handleChange} required />
                <FormInput name='password' type='password' id='password' value={this.state.password} label='Password'
                 handleChange={this.handleChange} required />
                 <div className="button">
                 <CustomButton type='submit' >Sign In</CustomButton>
                 <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Google Sign In</CustomButton>
                 </div>
               </form>
            </div>
        )
    }
}
export default SignIn; 