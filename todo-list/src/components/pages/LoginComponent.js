import React, { Component } from 'react';
import AuthenticationService from '../AuthenticationService';

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
        }
       // this.handleUsernameChange = this.handleUsernameChange.bind(this)
       // this.handlePasswordChange = this.handlePasswordChange.bind(this)
       this.handleChange = this.handleChange.bind(this)
       this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {

        this.setState(
            {
                [event.target.name]
                :event.target.value
            }
        )
    }
    
    // This is specific method for every element
    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({password:event.target.value})
    // }

    loginClicked() {
        if(this.state.username==='user' && this.state.password==='dummy') {
            AuthenticationService.registerSuccesfulLogin(this.state.username)
            
            this.props.history.push(`/welcome/${this.state.username}`)
            this.setState({hasLoginFailed: false })
        } else {
            this.setState({hasLoginFailed:true })
        }
        
    }

    render() {
        
        return (
            <div>
               

                <div style={formStyle}>
          
                <div style={login}>Login</div>
                    
                    { this.state.hasLoginFailed &&  <div className="alert alert-warning"> Invalid Credentials </div> }
                    
                    <div style={formdata}> 
                    <label>Username:</label>
                    <input style={inputStyle} type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleChange}></input>
                    <label>Password:</label>
                    <input style={inputStyle} type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}></input>
                
                    <button style={btn} onClick={this.loginClicked}>Login</button>
                </div>
            </div>
            </div>
        )

    }

} 

const btn = {
    border: 'none',
    background: 'rgb(51, 51, 51)',
    color: 'rgb(255, 255, 255)',
    padding: '7px 20px',
    cursor: 'pointer',
    marginLeft: '180px',
    marginTop: '10px',
    fontWeight: '700'
}

const formStyle = {
border: '1px solid',
width: '335px' ,
marginLeft: '350px',
height: '310px',
marginTop:'48px',
borderRadius: '2px 2px 2px 2px'
}

const formdata= {
    marginTop: '20px',
    marginLeft: '30px',
    width: '2px'
}

const inputStyle={
    marginBottom:'15px',
    height:'23px',
    width:'265px'
}

const login ={
    textAlign: 'center',
    fontSize: '22px',
    fontWeight: '900',
    background: '#333333',
    color: '#fff',
    height: '47px',
    paddingTop: '5px'
}

// function ShowInvalidCredentials(props) {
//     if(props.hasLoginFailed) {
//         return <div> Invalid Credentials </div>
//     }
//     return null
// }

// function ShowLoginSuccessfullMessage(props) {
//     if(props.showSuccessMessage) {
//         return <div> Login Success </div>
//     }
//     return null
// }


export default LoginComponent