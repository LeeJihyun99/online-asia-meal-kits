import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore,doc,getDoc,setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDiWIlzr3LfydUwASZstDNk-YpL3P_8iA0",
    authDomain: "asia-meal-kit-db.firebaseapp.com",
    projectId: "asia-meal-kit-db",
    storageBucket: "asia-meal-kit-db.appspot.com",
    messagingSenderId: "345611507600",
    appId: "1:345611507600:web:e9b39c728fb64d1d23c515"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth(firebaseApp);
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  
  export const db = getFirestore();
  
  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
      // if user data does not exist
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
      }catch(error){
        console.log('error creating the user', error.message);

      }};
      return userDocRef;
  }

  