
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import Tech from '../assets/Tlogo.png'

const nav = () => {
    return (
        <>
            <header className='headnav'>
                <div className='Thead'>
                    Welcome to Tech World
                </div>

            </header>
            <nav className='Hnav'>
                <img src={Tech} alt="" className='logo' />
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">about</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                    <li><NavLink to="/enquiry">Enquiry</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default nav