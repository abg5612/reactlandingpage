import React from 'react'
import { Link } from "react-router-dom"


const signin = () => {
  return (
    <div>

      <div className="header">
        Welcome back. We exist to <br /> make entrepreneurship easier.
      </div>


      <form className='signin-form'>

        
      <div className="signin-btn">Sign with Google</div>
      <p className='sign-in-para'>Or, sign in with your email</p>

        <label>Email:</label> <br />
        <input type='text' placeholder='you@yourcompanyname.com'></input> <br />

        <label>Password:</label> <br />
        <input type='password' placeholder='Password at least (10 characters)'></input>  <br />

        <div className="check-box-main">
        <input type='checkbox'></input>
        <label>Keep me signed in</label>
        <div className="text-link">Forgot your password</div>
        </div>       
        <div className="sign-btn"> <Link to="/Signup">Sign up</Link> </div>
        <p className='last-text'>Don’t you have an account? <span>  <Link to="/Signup">Sign up</Link> </span></p>
        
       
      

      </form>




    </div>
  )
}

export default signin
