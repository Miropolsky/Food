import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <nav className={`blue darken-3`}>
                <div className='nav-wrapper'>
                    <Link to='/' className='brand-logo'>
                        React Food
                    </Link>
                    <ul id='nav-mobile' className='right hide-on-med-and-down'>
                        <li>
                            <Link to='/about'>Contacts</Link>
                        </li>
                        <li>
                            <Link to='/contact'>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
