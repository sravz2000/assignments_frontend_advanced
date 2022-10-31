import logo from './logo.svg';
import './App.css';

function App() {
  let custid=1024;
  let custname="Sravanthi";
  let city="Guntur";
  let contact="1234567890";
 
  var products=[{prono:0,pname:"IPhone",pcat:"mobile",price:"66990",stock:"Available"},
  {prono:1,pname:"Samsung phone",pcat:"mobile",price:"24990",stock:"Available"},
  {prono:2,pname:"Lg refrigerator",pcat:"furniture",price:"27690",stock:"Out Of Stock"},
  {prono:3,pname:"Wakefit sofa",pcat:"furnitue",price:"10914",stock:"Available"},
  {prono:4,pname:"Oneplus",pcat:"mobile",price:"32999",stock:"Available"},
  {prono:5,pname:"wadrobe",pcat:"furniture",price:"12680",stock:"Out Of Stock"},
  ]

  let result  =  products.map( item =>  
    {
      return <tr> 
               <td> {item.prono}  </td>  
               <td> {item.pname}  </td>  
               <td> {item.pcat}  </td>  
               <td> {item.price}  </td>  
               <td> {item.stock} </td>
          </tr>
    });
  
  return (
    <div class="App">
      Customer Id : {custid};<br/><br/>
      Customer Name : {custname};<br/><br/>
      City : {city};<br/><br/>
      Contact : {contact};<br/><br/>

      <table>
        <tr>
          <th>Product No</th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
        {result}
      </table>
    </div>
   

  );
}

export default App;
