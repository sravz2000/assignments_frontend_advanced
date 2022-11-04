import './App.css';

import DoctorsList from './DoctorsList';
import Emps from './Emps';
import Product from './Product';
import StudentDetails from './StudentDetails';


function App() {
  return (
    <>
      <StudentDetails />
      <StudentDetails course="ANGULAR"/>
      <StudentDetails course="CSS"/>
      <DoctorsList />

      <Product />
      <Emps />
      
    </>
  
  );
}

export default App;
