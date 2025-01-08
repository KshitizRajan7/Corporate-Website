import { useAppDispatch } from '@/lib/supabase/hooks/redux'
// import { addUser } from '@/redux/departSlice';
import React from 'react'

const CustomerForm = () => {
    const dispatch = useAppDispatch();
  return (
    <div>
      <form className='flex'>
        <input type='text' placeholder='enter your email'/>
        <input type='text' placeholder='enter your phone number'/>
        <input onClick={()=>{
            // dispatch(addUser)
        }} type='submit' className='bg-green-400 cursor-pointer'/>
      </form>
    </div>
  )
}

export default CustomerForm
