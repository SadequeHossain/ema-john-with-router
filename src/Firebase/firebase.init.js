import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}


export default initializeAuthentication;


/*Steps for Authetication
----------------------------------------------------------------

Step-1: Initialize Setup
1. Firebase: Create Project
2. Create web appId
3. get Configurations from
4. Initilize Firebase configuration
5. Enable auth method


----------------------------------------------------------------
Step-2: Setup Components

1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register
------------------------------------
Step-3: Set Auth System
1. Set up Sign in method
2. Setup Sign Out method
3. User State State
4. Special Observer
5. Return necessary methods and states from useFirebase
----------------------------------------------------------------

Step-4: Create auth Context hook(UseAuth)
1. Create a auth context
2. Create contex provider
3. Set context Provider context Value
4. use Auth provider
5. Create useAuth Hook
----------------------------------
Step-5:  Create Private Route
1. Create Private Route
2. Set Private Route


---------------------------------------


step-6 Redirect after login

1. After login redirect to the destination
*/