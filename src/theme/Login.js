import React from 'react'
import {GoogleAuthProvider, getAuth, signInWithPopup, signOut,signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from './firebase';
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
import styles from "./Login/Login.module.css";
import InputControl from './InputControl/InputControl';
import {useState} from 'react'

function Login  ()  {
    const [values, setValues] = useState({
        email:"",
        pass:""})



    function handleSubmission  ()  {

        signInWithEmailAndPassword(auth, values.email, values.pass)
        // signInWithEmailAndPassword(auth, 'p@gmail.com', '0123456789')
          .then(async (res) => {
            navigate('docs/getting-started');
          })
          .catch((err) => { console.log(err); alert(err);});
      };


  return (
    // <>
    // <div className="login">
    //       <div className="login__container">
    //         <button className="login__btn login__google" onClick={handleSubmission}>
    //           Login with Google
    //         </button>
    //         <form method="post">
    //       <div class="mb-3">
    //         <label for="email" class="form-label">Email address</label>
    //         {/* <input type="email" class="form-control" required id="email" aria-describedby="emailHelp" name="email"> */}
    //       </div>
    //       <div class="mb-3">
    //         <label for="password" class="form-label">Password</label>
    //         {/* <input type="password" class="form-control" required id="password" name="password"> */}
    //       </div>
    //       <button type="submit" class="btn btn-primary">Login</button>
    //     </form>
    //         Email : <input type="text" />
    //         Passward : <input type="text" />
    //       </div>
    //     </div>
      
    // </>
    <>
        <div className={styles.container}>
      <div className={styles.innerBox}>
        <h2 className={styles.heading}>Wellmed Login</h2>
        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          {/* <b className={styles.error}>{errorMsg}</b> */}
          <button  onClick={handleSubmission}>
            Login
          </button>
         
        </div>
      </div>
    </div>
    </>
  )
}

  
  

export default Login