import React from "react"
import reactLogo from "./images/logo.png"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="nav-image" alt="logo" src={reactLogo}/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            
        </header>
    )
}