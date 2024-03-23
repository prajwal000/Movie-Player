import React from 'react'
import { Link } from 'react-router-dom'

const Dashobard = () => {
  return (
    <>
    <div className='col-lg-2 dashboard'>
  <div className='head'> <Link to="/home" className='dashboard-links '> <h4 className='text-center p-4'>Movie Mania</h4></Link></div>
    <div className='text-center'>
    <div className='pt-3'><Link className='dashboard-links'>Home</Link></div>

    <div className='py-4'><Link className='dashboard-links'>Users</Link></div>

    <div className=''><Link className='dashboard-links'>Moderators</Link></div>

    <div className='py-4'><Link className='dashboard-links'>Spammers</Link></div>

    <div className=''><Link className='dashboard-links'>Suspended Accounts</Link></div>

    <div className='py-4'><Link className='dashboard-links'>Log Out</Link></div>

    



    </div>
    </div>
    </>
  )
}

export default Dashobard