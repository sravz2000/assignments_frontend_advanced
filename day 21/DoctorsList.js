import DoctorsDetails from "./DoctorsDetails";

function DoctorsList() {

    // App  Logic 
    let  docArray =   [
      {  img : "https://templates.envytheme.com/fovia/default/assets/img/doctor/3.jpg", name:"Patey Cruiser", job: "Dentist", rating : 5  },
      {  img : "https://th.bing.com/th/id/R.8119b72a5359ab7cdf43f13c0b53a55a?rik=zD8x9xmq91dzQQ&riu=http%3a%2f%2fwpthemesgrid.com%2fthemes%2fmediplus%2fimg%2fteam3.jpg&ehk=XLPQlnSPQu%2buKebOPsjLqJkwLuHZ1xX%2fqdNjsviiJnE%3d&risl=&pid=ImgRaw&r=0", name:"Mario Speedway", job: "Neurosurgeon", rating : 3  },
      {  img : "https://th.bing.com/th/id/OIP.GQqNU2_9-yPk6MsZxX8ZdAAAAA?pid=ImgDet&w=300&h=300&rs=1S", name:"Anna Sthesia", job: "Urology", rating : 4  },
      {  img : "https://th.bing.com/th/id/R.d8e8ee91b115b7ec8b8b3b957a6f53e4?rik=E6WYKXlf0Qxp%2fA&riu=http%3a%2f%2fwpthemesgrid.com%2fthemes%2fmediplus%2fimg%2fteam1.jpg&ehk=m0SuPuZoa4S9Ai74RS11EO4r2E5PpqZatGJ%2bVyRm%2f9I%3d&risl=&pid=ImgRaw&r=0", name:"Paul Moliv", job: "Eye Specialist", rating : 3  },
      {  img : "https://th.bing.com/th/id/R.d8e8ee91b115b7ec8b8b3b957a6f53e4?rik=E6WYKXlf0Qxp%2fA&riu=http%3a%2f%2fwpthemesgrid.com%2fthemes%2fmediplus%2fimg%2fteam1.jpg&ehk=m0SuPuZoa4S9Ai74RS11EO4r2E5PpqZatGJ%2bVyRm%2f9I%3d&risl=&pid=ImgRaw&r=0", name:"Anna Maul", job: "Surgeon", rating : 2  },
      {  img : "https://th.bing.com/th/id/OIP.GQqNU2_9-yPk6MsZxX8ZdAAAAA?pid=ImgDet&w=300&h=300&rs=1S", name:"Gail Forcewind", job: "Eye Specialist", rating : 5  },
      {  img : "https://templates.envytheme.com/fovia/default/assets/img/doctor/3.jpg", name:"Mario sellena", job: "Urology", rating : 3  },
      {  img : "https://th.bing.com/th/id/R.8119b72a5359ab7cdf43f13c0b53a55a?rik=zD8x9xmq91dzQQ&riu=http%3a%2f%2fwpthemesgrid.com%2fthemes%2fmediplus%2fimg%2fteam3.jpg&ehk=XLPQlnSPQu%2buKebOPsjLqJkwLuHZ1xX%2fqdNjsviiJnE%3d&risl=&pid=ImgRaw&r=0", name:"Paul Gamber", job: "Dentist", rating : 3  },
  ];  
   
  
  let result =  docArray.map(item =>  
    {
      return <DoctorsDetails  docObj={item}  len={docArray.length} />
    });
    
  
  
    return (
       <div> 
               {result}
      </div>
    );
  }
  
  export default DoctorsList;