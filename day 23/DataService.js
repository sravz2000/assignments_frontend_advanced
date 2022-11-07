import   axios  from "axios";

export let dataSericeObj = {
    getAllCustomers
};
 
function  getAllCustomers()
{
    let url =  "https://www.w3schools.com/angular/customers.php";
    return axios.get(url);
}


let dataSericeObj1 = {};

let url1 =  "http://localhost:3500/employees/";
let urls = "?_sort=empno";

dataSericeObj1.getAllEmps =  function()
{    
    return axios.get(url1+urls);
};

dataSericeObj1.getEmpByno =  function(no)
{    
    return axios.get(url1 + no);
};

dataSericeObj1.addEmp =  function(EmpObj)
{    
    return axios.post(url1, EmpObj);
};

dataSericeObj1.updateEmp =  function(EmpObj)
{    
    return axios.put(url1 + EmpObj.empno, EmpObj);
};

dataSericeObj1.deleteEmp =  function(no)
{    
    return axios.delete(url1 + no);
};
 

 export default dataSericeObj1;
