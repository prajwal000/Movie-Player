import React, { useState } from 'react'
import NavBar from '../components/Navbar'
import AccountCreated from '../Modals/AccountCreated'
import FieldsRequire from '../Modals/FieldsRequire';

const SignUp = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[confirmPassword,setConfirmPassword]=useState("");
  const[modalShow,setModalShow]=useState(false);
  const[fieldError,setFieldError]=useState(false)

  const Create=(e)=>{
    e.preventDefault();
if(name.length<3 || password.length<6 || email.length<5 ||confirmPassword.length<6){
 setFieldError(true);
}
else{
 if(password===confirmPassword){
setModalShow(true)

 }
 else{

 }
}
  }
  return (
    <>
    <NavBar/>
    <AccountCreated
                show={modalShow}
                onHide={() => setModalShow(false)}
      />
      <FieldsRequire
                show={fieldError}
                onHide={() => setFieldError(false)}
      />
    <section className='login my-2 p-4 '>
    <h4 className='text-center'>Create an account</h4>
    <form onSubmit={Create}>
    <div className="mb-3 px-5">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Name :
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Enter your Full Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
    </div>
    <div className="mb-3 px-5">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Email :
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Enter your email address"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
    </div>
    <div className="mb-3 px-5">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Password :
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="Password must be upto 6 character"
      value={password}
        onChange={(e)=>setPassword(e.target.value)}
    />
  </div> 
    <div className="mb-3 px-5">
    <label htmlFor="exampleFormControlInput1" className="form-label">
    Confirm  Password :
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="Please re-type your password"
      value={confirmPassword}
        onChange={(e)=>setConfirmPassword(e.target.value)}
    />
  </div>  
    
      <button className="mx-5 mt-3 nav-button">Submit</button>
     
    
  </form>

    </section>
    </>
  )
}

export default SignUp