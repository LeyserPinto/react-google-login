import './App.css'
import { useEffect } from 'react'
import GoogleLogin from 'react-google-login'
import { gapi } from 'gapi-script'

import { useNavigate } from 'react-router-dom'



//Components
function App() {


// Declare Navigation React router Dom UseNavigate
const navigate=useNavigate()

//Google Client id
//Get this on the Google Cloud Console, section of Credentials
const clientID='523657240639-2urvgrbl05bj39ov81s2k0atj5eda99m.apps.googleusercontent.com'



//Use Effect Hooks
  useEffect(() => {

    //Init Gapi Client
    const initClient = () => {
      gapi.client.init({
        clientId: clientID,
        scope: ''
      });
    };

    gapi.load('client:auth2', initClient);


  }, [])
  

  //IF Login happens successfully Execute this functions
  const onSuccess = (res) => {
    //Change of Route and pass Props
    navigate('profile',{state:{res}})
  };
  //IF Login trigger error to login, Execute this functions
  const onFailure = (err) => {
    console.log('failed:', err);
  };


  //Component React
  //Return 
  return (
    <div className="App">
      
      <h1>React Google Login </h1>
      <GoogleLogin
          clientId={clientID}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
      />
    </div>
  )
}

export default App
