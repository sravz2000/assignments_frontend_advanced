import BankApp from "../BankApp";
import {Provider} from 'react-redux';

import cartStore from "../BankStore";

cartStore.dispatch({type:"CREATE"});

function ProductsDetails(props){


    function addCart(){

    }

    let count = props.Obj.rating;

    let arr = [];
    for(let index=0; index<count; index++){
        arr.push(<img style={{width:"20px", height:"20px", margin:"2px"}} src="https://www.topuwp.com/images/icon_star.svg"></img>);
    }

    return(
       <div style={{float:"left", border: "1px solid grey", width:"315px", textAlign:"center",borderRadius:"10px", margin:"10px", padding:"10px" }} >
        <img style={{borderRadius:"100%", height:"200px", width:"200px"}} src={props.Obj.img} />
        <h4>{props.Obj.name}</h4>
        <p>{props.Obj.Price}</p>
        <p>{arr}</p>
        <Provider store={cartStore}>
                <BankApp/>
        </Provider>
       </div>
    )
}
export default ProductsDetails;