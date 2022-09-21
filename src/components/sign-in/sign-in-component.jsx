import React from "react";
import FormInput from "../form-input/form-input-component";
import CustomButton from "../custom-button/custom-button.component";
import './sign-in.scss'


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
        return(
            <div className="sign-in">
               <h2> I am a customer already </h2> 
               <span>Sign in with your email and pasword</span>
               <form onSubmit={this.handleSubmit}>
                <FormInput name='email' type='email' id='email' value={this.state.email} label='Email'
                 handleChange={this.handleChange} required />
                <FormInput name='password' type='password' id='password' value={this.state.password} label='Password'
                 handleChange={this.handleChange} required />
                 <CustomButton type='submit' >sign in</CustomButton>
               </form>
            </div>
        )
    }
}
export default SignIn; 