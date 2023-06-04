import React from 'react';
import '../styles/transfer.css';

function TransferMoney(props) {
    return (
        <>
        <div className='box'>
            <form>
                <h2>Transfer Money</h2>
                <select name='customers' id='customers1' placeholder='To'>
                    <option id='option1' value='puspa'>
                        Puspa
                    </option>
                </select>
                <select name='customers' id='customers2' placeholder='From'>
                    <option id='option2' value='Deepa'>
                        Deepa
                    </option>
                </select>
                <input type="number" id='amt' className='amount' placeholder='Enter Amount' required />
          <input type="submit" className='submitBtn' value="Transfer" />

            </form>

        </div>
          
        </>
    );
}

export default TransferMoney;