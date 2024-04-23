import {signInWithGooglePopup, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils';
import GoogleButton from 'react-google-button'

const SignIn = ()=> {
    const logGoogleUser = async ()=> {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <h2>Sign-in Page</h2>
            <GoogleButton onClick={logGoogleUser}/>
        </div>
    )
}

export default SignIn;