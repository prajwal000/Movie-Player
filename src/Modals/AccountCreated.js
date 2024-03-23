import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const AccountCreated = (props) => {
  return (
    <>
    <Modal
    {...props}
    size="l"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    className='modal'
  >
  <div className='modal-success'>
  
    <Modal.Body closeButton>
    <div className='modal-text text-center'>
       Account has been Successfully Created
    </div>
    <div className='text-end'>
    <Button onClick={props.onHide} className='modal-btn'>Okay</Button>
    </div>
      
    </Modal.Body>
    
    </div>
    
  </Modal>
    </>
  )
}

export default AccountCreated