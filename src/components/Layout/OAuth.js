
import React  from 'react'
import { useLocation ,  useNavigate } from 'react-router-dom'
import { db } from '../Layout/firebase.config';
 import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
 import { doc,  getDoc,  setDoc , serverTimestamp } from "firebase/firestore";
import {FcGoogle} from 'react-icons/fc'
import { toast } from 'react-toastify'

const OAuth = () => {

    const navigate = useNavigate()
    const location = useLocation()
    
    const onGoogleAuthHandler = async ()=>{
        try{
        const auth = getAuth()
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth,provider)
        const user = result.user
        const docRef = doc( db, 'users', user.uid)
        const docSnap = await getDoc(docRef)
        if(!docSnap.exists()){
            await setDoc(doc(db,'users', user.uid),{
                name : user.displayName,
                email:user.email,
                timestamp:serverTimestamp()
            })
        }
        
        toast.success("Login Sucessfully", {
            position: toast.POSITION.TOP_CENTER
          });
    
        navigate('/')
        
        } catch (error){

            toast.error("Problem With Google Auth !", {
                position: toast.POSITION.TOP_CENTER
              });
        
          
        }
        
        };

  return (
   
            
      <div>
     
       <h5 className='mt-5 text-center'> {location.pathname === '/signup'} 

<div className='mb-3'>
    OR
</div>






  <button className='btn border  border-primary   rounded-pill ' onClick={onGoogleAuthHandler}>
     <FcGoogle  className=' mr-3'/>
     Continue With Google Account

  </button>
  

  </h5>
    </div>
 
  );
}

export default OAuth