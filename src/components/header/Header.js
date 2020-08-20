import React, { Component } from 'react'
import logo from '../../images/Logo.png'
export class Header extends Component {
    render() {
        return (
            <div>
               <img className='logo' style={{width:40}} src={logo} alt="logo" /> 
            </div>
        )
    }
}

export default Header
