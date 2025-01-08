"use client"
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
import React, { useEffect } from 'react'
import FunctionWiseDepartment from './FunctionWiseDepartment';

const Homepage = () => {
    const {department,getDepartment} = useSupabase();
    useEffect(()=>{
        getDepartment();
    },[])
    // console.log(department);
  return (
    <div>
      <div className='w-[80%] mx-auto grid grid-cols-4 gap-2'>
        {
            department.map((department:any)=>{
                return(
                    <div key={department.id}>
                        <FunctionWiseDepartment department={department}/>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Homepage
