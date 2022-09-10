import React ,{useState} from "react";
import Layout from "./../components/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";


const ForgotPassword = () => {
 const [email , setEmail] = useState('');
 const navigate = useNavigate();

 const onSubmitHandler = async (e) =>{
e.preventDefault();

try{
  const auth = getAuth();
  await sendPasswordResetEmail(auth,email);
  toast.error("Email was send", {
    position: toast.POSITION.TOP_CENTER
  });
  navigate('/signin');
}catch (error){
  toast.error("Somthing Went Wrong ", {
    position: toast.POSITION.TOP_CENTER
  });
}
 }
  return (
    <Layout>





<div className="container h-100  " >
    <div className="row d-flex justify-content-center align-items-center h-100 " >

    

      <div className=" " style={{width: '600px' }} >
        <div className="card" style={{borderRadius: '1rem' }}>
          <div className="row g-0">
         
            {/* <div className="col-md-6 col-lg-7 d-flex align-items-center "> */}
              <div className="card-body p-4 p-lg-5 text-black">
            
             
      <h1>Reset Your Password</h1>

   <form onSubmit={onSubmitHandler}>
  <div className="form-group">

    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
<div className="d-flex justify-content-between">
 <button type="submit" className="btn btn-danger">Reset</button>
<Link to='/signin'>Sign In</Link>
</div>


</form>

      </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    







    
    </Layout>
  );
};

export default ForgotPassword;
