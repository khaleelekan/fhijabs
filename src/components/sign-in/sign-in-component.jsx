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
                <input name='email' type='email' id='email' value={this.state.email} onChange={this.handleChange} required />
                <label>Email</label>
                <input name='password' type='password' id='password' value={this.state.password}  onChange={this.handleChange} required />
                <label>Password</label>

                <input type='submit' value='Submit Form'/>
               </form>
            </div>
        )
    }
}
export default SignIn; 