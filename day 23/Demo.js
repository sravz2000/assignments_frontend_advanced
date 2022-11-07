import { useState } from "react";
import  {dataSericeObj}  from "./DataService";

function Demo() {

    let  [customersArray, setCustomersArray] = useState([]);
   
  function getDataClick()
  {  
        dataSericeObj.getAllCustomers().then( response =>  
        { 
            setCustomersArray( response.data.records );
        } );  
  }
   

  let result  =  customersArray.map( (item, index) =>  
  {
    return <tr>                
             <td> {item.Name}  </td>  
             <td> {item.City}  </td>                
             <td> {item.Country}  </td>  
        </tr>
  });
 
 
 
  
  
    return (
       <div> 
            <h3>Making HTTP Request using Axios Package</h3>
            <hr/>
 
            <button className="btn  btn-primary" onClick={getDataClick}>Get Data</button>
            <br/><br/>
            <table className="table" border="2"> 
             <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>City Name</th>
                  <th>Country Name</th>
              </tr>
              </thead>

              <tbody>
              {result}  
              </tbody>               
            </table> 

            
      </div>
    );
  }
  
  export default Demo;