import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc,  collection, writeBatch, query, getDocs } from "firebase/firestore";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAXCEGk5SeWGRvGsAvJpR3m0gOb1NiGqC4",
    authDomain: "e-commerce-63c74.firebaseapp.com",
    projectId: "e-commerce-63c74",
    storageBucket: "e-commerce-63c74.appspot.com",
    messagingSenderId: "949156639922",
    appId: "1:949156639922:web:a720e7673a4d4fc82145ab"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();


provider.setCustomParameters({ prompt: "select_account" });


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);


export const database = getFirestore();

//Sign In with Google Account
export const createUserDocument = async (userAuth,additionalInformaiton) => {
    if (!userAuth) return;

    const userRef = doc(database,'users' ,userAuth.uid);
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformaiton
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return snapShot;
}

//Sign Up with Email and Password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
        if(!email || !password) return;
        return await createUserWithEmailAndPassword(auth,email, password);
}

// Sign In with Email and Password
export const signInUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email, password);
}

// Sign Out
export const signOutUser = async () => {
    return await signOut(auth);
}

// State Observer
export const onAuthStateChangedListener = async (callback) => {
    return await onAuthStateChanged(auth,callback);
}
export const getCurrentUser = () =>{
    return new Promise((resolve,reject) =>{
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                unsubscribe();
                resolve(userAuth);
            },
            reject
        )
    })
}


// Add Collection
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(database, collectionKey);
    const batch = writeBatch(database);
    objectsToAdd.forEach(obj => {
        const newDocRef = doc(collectionRef, obj.title.toLowerCase());
        batch.set(newDocRef, obj);
    } );
    return await batch.commit();
}

// Get Collection from Firebase
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(database, 'categories');
    const q = query(collectionRef);
    

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnapshot) => docSnapshot.data())

  };
