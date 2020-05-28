import React, {Component} from 'react';
import Signin from './Signin';
import Register from './Register';
import {Redirect} from 'react-router-dom';
import './Auth.css';

class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            display: true, 
            redirect: false
        }
    }

    toggleSignin = () => {
        let {display} = this.state
        this.setState({
            display: !display
        })
    }

    toggleRedirect = () => {
        let {redirect} = this.state
        this.setState({
            redirect: !redirect 
        })
    }

    render() {
        const {display, redirect} = this.state

        if (redirect) {
            return <Redirect to='/home'/>
        }

        return (
            <div className='auth-main'>
                <div className='text'>
                   <h2>Sign In</h2> 
                
                <div className='button'>
                {display ? 
                    <Signin 
                        toggle = {this.toggleSignin}
                        redirect = {this.toggleRedirect}/>
                :
                    <Register 
                        toggle = {this.toggleSignin}
                        redirect = {this.toggleRedirect}/>
                }
                </div>
                </div>
            </div>
        )
    }

}

export default Auth;