import React, { useEffect, useState } from "react";
import "../styles/customer.css";
import { collection, getDocs } from 'firebase/firestore'
import firebase from "../firebase";
function Customer(props) {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await firebase
          .firestore()
          .collection("customers")
          .get();
        const fetchedData = response.docs.map((doc) => doc.data());
        setData(fetchedData);

        // const collectionsRef = firebase.firestore().listCollections();
        // const fetchedCollections = await collectionsRef;
        // const collectionNames = fetchedCollections.map((collection) => collection.id);

        console.log("all the collections", fetchedData);
        // setData(collectionNames);

        //   console.log(fetchData,"fetching datas===============================")
        //   setData(fetchedData);
      } catch (error) {
       console.error("Error occured....",error)
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {console.log(data, "=====================all data")}
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
