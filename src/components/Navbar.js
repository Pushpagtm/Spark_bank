import React from 'react';
import '../styles/navbar.css';
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
                    <li className='list-1'><a href='/customer'> Accounts</a></li>
                    <li className='list-2'><a href='/moneyTransfer'>Transfer funds</a></li>
                    <li className='list-3'><a href='/transactions'>Transactions</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;