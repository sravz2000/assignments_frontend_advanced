import React from "react";

function StudentDetails(props) {
//let value=props.course;
    let  stuArrays =  [
        {  sid : 10256, sname:"Scott", course: "HTML", age : 22, total:92  },
        {  sid : 10257, sname:"Smith", course: "CSS", age : 24, total:98  },
        {  sid : 10258, sname:"Sandy", course: "JS", age : 23, total:88  },
        {  sid : 10259, sname:"Sam", course: "ANGULAR", age : 22, total:90  },
        {  sid : 10260, sname:"John", course: "CSS", age : 24, total:92  },
        {  sid : 10261, sname:"Jay", course: "CSS", age : 24, total:96  },
        {  sid : 10262, sname:"Syam", course: "JS", age : 23, total:88  },
        {  sid : 10263, sname:"Sree", course: "ANGULAR", age : 22, total:90  }
    ];
    //let result  = [];
    //if(!props.course){}
    /*if(props.course==undefined){
        result=stuArrays.map( (item, key) =>
        {
        return <tr key="key" style={{backgroundColor:(key%2==0)?"lightblue":"lightpink"}}> 
                    <td> {item.sid}  </td>  
                    <td> {item.sname}  </td>  
                    <td> {item.course}  </td>  
                    <td> {item.age}  </td>  
                    <td> {item.total}  </td>
                </tr>
        });
    }*/
   // else{
       let result=stuArrays.filter(item=>{
            if(props.course==undefined){
                return item.course;
            }
            else{
            return item.course===props.course;
            }
        }).map( (item, key) =>
        {
        return <tr key="key" style={{backgroundColor:(key%2==0)?"lightblue":"lightpink"}}> 
                    <td> {item.sid}  </td>  
                    <td> {item.sname}  </td>  
                    <td> {item.course}  </td>  
                    <td> {item.age}  </td>  
                    <td> {item.total}  </td>
                </tr>
        });
   // }
    return (
        <> 
            <table border="2"  width="500" style={{margin:"5px"}} >
              <tr style={{backgroundColor:"lightgoldenrodyellow"}}>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Course</th>
                <th>Age</th>
                <th>Total</th>
              </tr>
  
              {result}
  
            </table>
  
  
        </>
      
    );
  }
  
  export default StudentDetails;

