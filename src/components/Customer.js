import React from 'react';
import '../styles/customer.css';
function Customer(props) {
    return (
        <div>
             <table className='customers_table'>
        <tr className='headings'>
          <th>Serial number</th>
          <th>Name</th>
          <th>Account number</th>
          <th>Balance</th>
        </tr>
        <tr className='values'>
              <td>1</td>
              <td>name</td>
              <td>account_number</td>
              <td>balance</td>
            </tr>
        </table>
        </div>
    );
}

export default Customer;