import React, {useState,useEffect} from 'react'
import { GoogleLogout } from 'react-google-login'
import { useNavigate, useLocation } from 'react-router-dom'
import './styles.css'



// <div className="Card">
//       <img src={user.imageUrl} alt="..." />
//       <h2>user.givenName <span>user.familyName</span></h2>
//       <p>user.email</p>
//     </div>
const Profile = () => {
  //Google Client id
  //Get this on the Google Cloud Console, section of Credentials
  const clientID = '523657240639-2urvgrbl05bj39ov81s2k0atj5eda99m.apps.googleusercontent.com'

  //declare React Router Dom Features
  //Navigate to allow back of main page
  //Location to access props or user data
  const navigate = useNavigate()
  const location = useLocation()
  //Use State Element
  const [profileCard,setProfileCard]=useState()
  //Load Data from Location
  let user=location.state.res.profileObj;

  //Use Effect to Load Card
  useEffect(() => {
    setProfileCard(()=>(

      //Structure to Render
      <div className="Card">
        <img src={user.imageUrl} alt="..." />
        <h2>{user.givenName} <span>{user.familyName}</span></h2>
        <p>{user.email}</p>
      </div>
    ))
  }, [])
  

  //Logout actions to close open profile
  const logout = (res) => {
    console.log('success:', res);

    navigate('/react-google-login/')
  };



  return (
    <>
      <div className='container'>
        <div>Panel</div>
        {profileCard}
        
        <GoogleLogout
          clientId={clientID}
          buttonText="Logout"
          onLogoutSuccess={logout}
        />
      </div>

    </>
  )
}

export default Profile