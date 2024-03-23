import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const FieldsRequire = (props) => {
  return (
    <>
    <Modal
    {...props}
    size="l"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    className='modal'
  >
  <div className='modal-fail'>
  
    <Modal.Body closeButton>
    <div className='modal-text text-center'>
      Please fill up all the fields correctly
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

export default FieldsRequire