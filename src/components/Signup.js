import React from 'react'
import { Link } from "react-router-dom"
// import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const Signup = () => {
    return (
        <div>

            <div className="header">
                Welcome. We exist to make <br></br> entrepreneurship easier.
            </div>
            {/* <Link to ="../Navbar"> link to form</Link> */}

            <form action="" className="signup-form">

                <div className="signin-btn">Sign with Google</div> 
                <p className="sign-up-para">Or, register with your email</p>

                <label>Name:</label> <br />
                <input type='text' placeholder='Name'></input> <br />

                <label>Company Name: </label> <br />
                <input type='text' placeholder='Company name'></input> <br />


                <label>Email:</label> <br />
                <input type='text' placeholder='you@yourcompanyname.com'></input> <br />

                <label>Password:</label> <br />
                <input type='password' placeholder='Password at least (10 characters)'></input>  <br />

                <div className="signup-disc">
                    I agree to be contacted by Open PRO about this offer as <br /> per the Open PRO Privacy Policy.
                </div>

                <div className="signup-btn"> <Link to="/Signin">Sign up</Link> </div>

                {/* <Link to={Signup}>Signup</Link> */}


            </form>

        </div>
    )
}

export default Signup
