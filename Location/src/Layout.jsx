import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
<nav>
    <h1> logo</h1>
    <ul>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/about'>ABOUT</Link></li>
        <li><Link to='/signup'>SIGNUP</Link></li>
        <li><Link to='/login'>LOGIN</Link></li>
    </ul>
</nav>
        </>
    )
}
const Footer = () => {
    return (
<>
<h1>FOOTER</h1>
</>
    )
}
export{Header,Footer}