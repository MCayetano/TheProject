import React, {Component} from 'react';
import './Landing.css';
import {Link} from 'react-router-dom';


class Landing extends Component {
    constructor () {
        super();
        this.state = {
            auth: false,
            signin: false,
            register: false
        }
        this.toggleAuth = this.toggleAuth.bind(this)
    }
        

toggleAuth() {
    let {auth} = this.state
    this.setState({auth: !auth})
}

    render () {
        return (
            <div className="landing-base">

                <div className="landing-main">

                    <h1>The Art of Cars</h1>

                    <h2>Where you'll never lose your drive Inventory Systems</h2>

                    <Link to="/Auth">
                        <button className='login-button'>ENTER</button>
                    </Link>
                    
                </div>
            </div>
        )
    }
} 

export default Landing;