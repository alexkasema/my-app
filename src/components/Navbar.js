
import React from 'react'
import reactLogo from '../images/logo.png'

export default function Navbar(){
    return (
        <nav className='nav'>
            <img className='nav-image' alt='logo' src={reactLogo} />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}