"use client"
import { useAppSelector } from '@/lib/supabase/hooks/redux'
import { getDepartment } from '@/redux/departSlice'
import Image from 'next/image';
import React from 'react'

const Department = () => {
    const department = useAppSelector(getDepartment);
    console.log(department);
  return (
    <div>
        department
      <div>
        {/* {
            department.map((depart:any)=>{

                <div>
                    <div>
                <Image src={depart.image} width={300} height={300} alt={depart.depart_name}/>
                </div>
                <div>
                    <h1>{depart.depart_name}</h1>
                    <p>{depart.description}</p>
                    </div>
                    </div>

            })
        } */}
      </div>
    </div>
  )
}

export default Department
