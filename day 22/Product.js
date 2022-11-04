import { useState } from "react";

function Product(){
    let [pname,setPname]=useState("");
    let [price,setPrice]=useState(0);
    let [quan, setQuan]=useState(0);
    let [total,setTotal]=useState("");

    // function inputPnameChange(event)
    // {
    //     setPname(event.target.value);   
    // }

    // function inputPriceChange(event)
    // {
    //     setPrice(event.target.value);   
    // }

    // function inputQuanChange(event)
    // {
    //     setQuan(event.target.value);   
    // }


    function  buttonClick()
    {   
        setTotal ("The Total Price of " + pname + " is " + (price*quan));        
    }

    return (
        <>
            <hr/>

            <fieldset>
               {// <legend>User Login</legend>
               // Product Name  :  
               // <input type="text"  onChange={inputPnameChange}  />
               // <br/><br/>
               // Price : 
                //<input type="text"  onChange={inputPriceChange}  />
               // <br/><br/>
               // Quantity : 
                // <input type="text"  onChange={inputQuanChange}  />
                // <br/><br/>
                // <button onClick={buttonClick}>Get Total</button>
                }

                <legend>User Login</legend>
                Product Name  :  
                <input type="text"  onChange={e=>setPname(e.target.value)}  />
                <br/><br/>
                Price : 
                <input type="text"  onChange={e=>setPrice(e.target.value)}  />
                <br/><br/>
                Quantity : 
                <input type="text"  onChange={e=>setQuan(e.target.value)}  />
                <br/><br/>
                <button onClick={buttonClick}>Get Total</button>

                <p>{total}</p>
            </fieldset>

        </>
    );
}

export default Product;