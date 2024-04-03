import React, {  useState } from 'react';
import NavBar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import LoginFail from '../Modals/LoginFail';
import FieldsRequire from '../Modals/FieldsRequire';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();    
    const [modalShow, setModalShow] = React.useState(false);
    const [fields,setFields]=useState(false)

    const signIn = (e) => {
        e.preventDefault();

     if(email.length===0 || password.length<5){
       setFields(true)
     }
     else{
        if (email === "admin@gmail.com" && password === "12345") {   
            navigate("/admin/home", { state: { loginShow: true } }); // Pass state as an object
        } else {
            // alert("Password does not match with email");
            setModalShow(true);
        }
     }
    };
    

    return (
        <>
            <NavBar />
            <img src="https://swipefile.com/wp-content/uploads/2022/05/cta-banner-offer-copy.png" 
            alt="" 
            width="100%" 
            height="200px"/>
           
            <section className='login my-5 p-4 '>
                <h4 className='text-center'>Login</h4>
                <LoginFail
                show={modalShow}
                onHide={() => setModalShow(false)}
      />
              <FieldsRequire
              show={fields}
              onHide={() => setFields(false)}
              />
                <form onSubmit={signIn}>
                    <div className="mb-3 input">
                        <label htmlFor="emailInput" className="form-label">
                            Email:
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="emailInput"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 input">
                        <label htmlFor="passwordInput" className="form-label">
                            Password:
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="passwordInput"
                            placeholder="Please enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="mx-5 mt-3 nav-button"
                    >Submit</button>
                    <div className='text-center pt-4'>Don't have an account yet? <Link to="/signup" className='ps-2'>Create an Account</Link></div>
                </form>
            </section>
        </>
    );
};

export default Login;
