import React from "react";


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
    
    render(){
        return(
            <div className="sign-in">
               <h2> I am a customer already </h2> 
               <span>Sign in with your email and pasword</span>
               <form onSubmit={this.handleSubmit}>
                <input name='email' type='email' id='email' value={this.state.email} required />
                <label>Email</label>
                <input name='password' type='password' id='password' value={this.state.password} required />
                <label>Password</label>
               </form>
            </div>
        )
    }
}
export default SignIn; 