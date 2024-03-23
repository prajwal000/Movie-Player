import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const LoginFail = (props) => {
  
  return (
    <>  
  <Modal
  {...props}
  size="l"
  aria-labelledby="contained-modal-title-vcenter"
  centered
  className='modal'
>
<div className=' modal-fail'>

  <Modal.Body closeButton>
  <div className='modal-text text-center'>
  Login Failed!!! Your Email And Password Doesnt Match
  </div>
  <div className='pt-3 text-end'>
  <Button onClick={props.onHide} className='modal-btn'>Try Again</Button>
  </div>
    
  </Modal.Body>
  
  </div>
  
</Modal>







    {
      
    //   <Modal show={true} onHide={handleClose} className='modal'>
    // <div className='modal-fail'>
    //     <Modal.Body>Password doesnot match with email</Modal.Body>
    //       <div className='text-end pe-2 pb-2'>
    //       <Button className='danger' onClick={handleClose}>
    //       Try Again
    //   </Button>
    //       </div>
        
    //     </div>
      
     
    // </Modal>
  }
    </>
  )
}

export default LoginFail