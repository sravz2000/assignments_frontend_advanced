function DoctorsDetails(props) {  
    let count=props.docObj.rating;
    let arr=[];
    for (let index = 0; index <count; index++)
        {
            arr.push(<i class="bi bi-star-fill"></i>);
        } 
    return (
       <div style={{float : "left",textAlign:"center" ,width:"280px", border: "2px solid gray",borderRadius:"10px" , padding : "5px", margin : "5px"}}> 
           <img src= {props.docObj.img} style={{width:"150px",borderRadius:"50%"}} />
            <p>{props.docObj.name}</p>
            <p>{props.docObj.job}</p>
            <p>{arr}
            </p>
            <a href="https://drive.google.com/drive/folders/1wByrdT3-Xc8lg2v35jYwhTlzzrVAAKBF"><button type="button" style={{padding:"7px",cursor:"pointer"}} >Book Appointment</button></a>
      </div>
    );
  }
  
  export default DoctorsDetails;
