import "./products.css";
import ProductsDetails from "./ProductsDetails";
import {useNavigate} from "react-router-dom";
import Login from "./Login";

function Products(){


    let count;
    let doctorsArray = [{name:"Crystal Creamy Snap Cookies", Price:"Rs. 137.00", rating:3, img:"https://cdn.shopify.com/s/files/1/0652/0786/1486/products/brandysnap_360x.jpg?v=1662558531"},
                        {name:"Almond Tea Crunch Cookies", Price:"Rs. 137.00", rating:2,img:"https://cdn.shopify.com/s/files/1/0652/0786/1486/products/chocochips_360x.jpg?v=1662551662"},
                        {name:"Coconut Macroon Tea Cookies", Price:"Rs. 187.00", rating:3,img:"https://cdn.shopify.com/s/files/1/0652/0786/1486/products/coconutmacroon_360x.jpg?v=1662558262"},
                        {name:"Mocha Tea Crunchy Cookies", Price:"Rs. 187.00", rating:5,img:"https://cdn.shopify.com/s/files/1/0652/0786/1486/products/coconutmacroon_360x.jpg?v=166255826"},
                        {name:"Black Current Snap Cookies", Price:"Rs. 187.00", rating:2,img:"https://cdn.shopify.com/s/files/1/0652/0786/1486/products/coconutmacroon_360x.jpg?v=1662558262"},
                        {name:"Almond Tea Crunch Cookies", Price:"Rs. 187.00", rating:4,img:"https://cdn.shopify.com/s/files/1/0652/0786/1486/products/chocochips_360x.jpg?v=1662551662"},
                        {name:"California Burrito Almond Cookies", Price:"Rs. 187.00", rating:5,img:"https://cdn.shopify.com/s/files/1/0652/0786/1486/products/coconutmacroon_360x.jpg?v=166255826"},
                        {name:"Crystal Creamy Snap Cookies", Price:"Rs. 187.00", rating:1,img:"https://cdn.shopify.com/s/files/1/0652/0786/1486/products/chocochips_360x.jpg?v=1662551662"}];

                        let navigate = useNavigate();

    if(!sessionStorage.getItem("AUTH_TOKEN")){
       // navigate(`/Login`);
        return(
            <>
                <h1>Please Login</h1>
                <Login/>
            </>
        )
    }

                  else{      let result =  doctorsArray.map(item =>  
                            {
                              return <ProductsDetails Obj={item}  />
                            });
   
                            return (
                               <div> 
                                       {result} 
                              </div>
                            );
                            }

}
export default Products;