function Logout(){
    sessionStorage.removeItem("AUTH_TOKEN");
    
    return(
        <div>
            <h2> You have Logged out Successfully!!</h2>
        </div>
    )
}
export default Logout;