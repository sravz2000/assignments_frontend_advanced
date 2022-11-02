import './App.css';
import DoctorsList from './DoctorsList';
import StudentDetails from './StudentDetails';


function App() {
  return (
    <>
      <StudentDetails />
      <StudentDetails course="ANGULAR"/>
      <StudentDetails course="CSS"/>
      <DoctorsList />
    </>
  
  );
}

export default App;
