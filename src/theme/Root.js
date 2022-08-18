import React, {useState} from 'react';
import {handleSubmission, logout, auth} from './firebase';
import '../css/login.css';
import Loading from './Loading';
import Login from './Login.js'
// Default implementation, that you can customize
export default function Root({children}) {
  const [userAuth, setUserAuth] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  auth.onAuthStateChanged(async function(user) {
    if (user !== null) {
      setUserAuth(user);
    }

    setAuthLoading(false);
  });

  const isAllow = () => {
    return userAuth?.email;
  };

  if (authLoading) {
    return (
      <>
        <Loading />
        <div style={{display: 'none'}}>{children}</div>
      </>
    );
  }

  return (
    <React.Fragment>
      {isAllow() ? (
        <>{children}</>
      ) : (<Login/>
        )}
    </React.Fragment>
  );
}


// <div className="login">
//           <div className="login__container">
//             <button className="login__btn login__google" onClick={handleSubmission}>
//               Login with Google
//             </button>
//             <form method="post">
//           <div class="mb-3">
//             <label for="email" class="form-label">Email address</label>
//             {/* <input type="email" class="form-control" required id="email" aria-describedby="emailHelp" name="email"> */}
//           </div>
//           <div class="mb-3">
//             <label for="password" class="form-label">Password</label>
//             {/* <input type="password" class="form-control" required id="password" name="password"> */}
//           </div>
//           <button type="submit" class="btn btn-primary">Login</button>
//         </form>
//             Email : <input type="text" />
//             Passward : <input type="text" />
//           </div>
//         </div>
      