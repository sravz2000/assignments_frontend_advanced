import {  useState } from 'react';
import './Register.css';
import {useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';
import dataServiceObj from './Data';
 
function Register()
{
    const [result, setResult] = useState("");
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [bool, setBool] = useState();

    const [errors, setErrors] = useState({  
            uname  :  "",            
            password  :  "",            
            email :  ""
    });
    
    function onSubmitClick(event)
    {
        event.preventDefault();

        let url =" http://localhost:3500/login";

        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

        let tempErrorObj = Object.assign({}, errors);

        tempErrorObj.uname =  (uname.length == 0)? "User Name is required..!" : "";
        tempErrorObj.password =  (password.length < 8)? "Password required 8 chars..! " : "";
        tempErrorObj.email =  validEmailRegex.test(email)? '': 'Email is not valid!';
        
        setErrors(tempErrorObj);

        var Obj ={
            username:uname,
            pwd:password,
            email:email
        }

        dataServiceObj.addData(Obj);

        let valuesArray = Object.values(tempErrorObj);
        let index  = valuesArray.findIndex( item => item.length != 0 );
        
        if(index == -1)
        {
                  setBool(true) ;     // Logic to send this data to server using AJAX              
              setResult("Registered Successfully. Please Login");
             // sessionStorage.setItem("AUTH_TOKEN", uname);               
        }
        else
        {           
            setBool(false);
           setResult("Please fill the valid details.");
           
        }
    }

    return (
        <div className='div3'>  
            <fieldset>
                

                <form  onSubmit={onSubmitClick}  noValidate>
                <table>
                    <tr ><h2>Sign Up</h2></tr><br/>
                    <tr>
                        <td>User Name  : </td>
                        <td> <input type="text" autoFocus name="uname" onChange={(e) => setUname(e.target.value)}  /><br/>
                 <span className="error">{errors.uname}</span> </td>
                    </tr><br/>
                    <tr>
                        <td>Password : </td>
                        <td><input type="password" name="password" onChange={(e) => setPassword(e.target.value)}  /><br/>
                 <span className="error">{errors.password}</span> </td>
                    </tr><br/>
                    <tr>
                        <td>Email  : </td>
                        <td><input type="text" name="email" onChange={(e) => setEmail(e.target.value)}  /><br/>
                 <span className="error">{errors.email}</span></td>
                    </tr><br/>
                    <tr><td colspan="2" style={{textAlign:"center"}} ><input className="btn btn-info" type="submit" value="Register" /></td></tr><br/>
                    <tr><td colspan="2" style={{textAlign:"center"}} ><h4 style={{color:(bool)?"green":"red"}}>{result}</h4></td></tr>
                    <tr><td  colspan="2">Already have an Account?<span><Link to="/Login"> Login In</Link></span></td></tr><br/>
                </table>

                </form>    

            </fieldset>

        </div>
    );   
}

export default Register;