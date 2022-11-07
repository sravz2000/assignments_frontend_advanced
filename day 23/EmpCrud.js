import { useState } from "react";
import  dataSericeObj1  from "./DataService";

function EmpCrud() {

    let  [empsArray, setEmpsArray] = useState([]);
    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [deptno, setDeptno] = useState("");
   
  function getDataClick()
  {  
        dataSericeObj1.getAllEmps().then( response =>  
        { 
            setEmpsArray( response.data );
        } );  
  }

     
  function addDataClick()
  {  
        let EmpObj = {};
        EmpObj.empno = empno;
        EmpObj.ename = ename;
        EmpObj.job = job;
        EmpObj.deptno = deptno;

        dataSericeObj1.addEmp( EmpObj ).then( response => 
          {
             // alert("New Employee details are added to server");
              getDataClick();           
          } );


  }


  function removeDataClick(dno)
  {  
        dataSericeObj1.deleteEmp(dno).then( response =>  
        { 
         // alert("Selected Employee details are deleted from server");
          getDataClick();                  
        } );  
  }
   
  function selectDataClick(dno)
  {  
        dataSericeObj1.getEmpByno(dno).then( response =>  
        { 
               let EmpObj = response.data;
               setEmpno(EmpObj.empno);         
               setEname(EmpObj.ename);         
               setJob(EmpObj.job); 
               setDeptno(EmpObj.deptno);  
        } );  
  }

  function updateDataClick()
  { 
    let EmpObj = {};
    EmpObj.empno = empno;
    EmpObj.ename = ename;
    EmpObj.job = job;
    EmpObj.deptno =deptno;

      dataSericeObj1.updateEmp( EmpObj ).then( response => 
      {
         // alert("Selected Employee details are updated in server");
          getDataClick();           
      } );
 
  }

  let result  =  empsArray.map( (item, index) =>  
  {
    return <tr>                
             <td> {item.empno}  </td>  
             <td> {item.ename}  </td>                
             <td> {item.job}  </td>
             <td> {item.deptno} </td>  
             <td>
               <a href="#" onClick={ () => removeDataClick(item.empno)}> Delete </a>  |   
               <a href="#" onClick={ () => selectDataClick(item.empno)}> Select </a>   
          </td>
        </tr>
  });
 
 
 
  
  
    return (
       <div> 
            <h3>CRUD Operations || Json-Server</h3>
            <hr/>

            <input type="text" value={empno} placeholder="Empno"  
            onChange={(e) => setEmpno(e.target.value)}   />

            <input type="text" value={ename} placeholder="Ename"  
            onChange={(e) => setEname(e.target.value)}   />

            <input type="text" value={job} placeholder="Job"  
            onChange={(e) => setJob(e.target.value)}   /> 

            <input type="text" value={deptno} placeholder="Dept No"  
            onChange={(e) => setDeptno(e.target.value)}   />
            <br/><br/> 


            <button onClick={getDataClick}>Get Depts</button>
            <button onClick={addDataClick}>Add Dept</button>
            <button onClick={updateDataClick}>Update Dept</button>
            <br/><br/>
            <table className="table" border="2"> 
             <thead>
                <tr>
                  <th>Employee No</th>
                  <th>Employee Name</th>                
                  <th>Job</th>
                  <th>Dept No</th>
              </tr>
              </thead>

              <tbody>
              {result}  
              </tbody>               
            </table> 

            
      </div>
    );
  }
  
  export default EmpCrud;