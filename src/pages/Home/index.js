import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className='flex justify-between'>
        <div>
          <input placeholder="Search doctors" className='w400'/>
        </div>
        <button className='outlined-btn my1'
        onClick={() => navigate('/apply-doctor')}
        > Apply doctor </button>
      </div>
    </div>
  )
}

export default Home