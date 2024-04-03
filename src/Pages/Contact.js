import React, { useState } from "react";
import NavBar from "../components/Navbar";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    alert("your message has been submitted");
  };

  return (
    <>
      <NavBar />
      <section className="contact py-5 ">
        <h3 className="text-center py-3">Contact Us</h3>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name :
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email :
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Johndoe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
              placeholder="your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <>
            <button className=" nav-button">Submit</button>
          </>
        </form>
      </section>
    </>
  );
};

export default Contact;
