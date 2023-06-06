import React, { useEffect, useState } from "react";
import "../styles/customer.css";

function Customer(props) {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    
  }, []);

  return (
    <>
   
      <p>fetched data</p>

      {/* <div >
             <table className='customers_table'>
        <tr className='headings'>
          <th>Serial number</th>
          <th>Name</th>
          <th>Account number</th>
          <th>Balance</th>
        </tr>
        {
            done.map((item,i)=>{
                return (
                    <tr key={i} className='values'>
              <td>{item.sn}</td>
              <td>{item.name}</td>
              <td>{item.account_number}</td>
              <td>{item.balance}</td>
            </tr>

                )
            })
        }
        
        </table>
        </div> */}
    </>
  );
}

export default Customer;
