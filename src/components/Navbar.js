import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
function Navbar(props) {
    return (
        <nav>
             <div className="img-div">
                <a href="/">
                    <img src='' alt="Bank Logo" className='bank-logo' />
                </a>
            </div>
            <div className='pages'>
                <ul className="lists">
                    <li className='list-1'><Link to='/customer'> Accounts</Link></li>
                    <li className='list-2'><Link to='/moneyTransfer'>Transfer funds</Link></li>
                    <li className='list-3'><Link to='/transactions'>Transactions</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;