import { useAppDispatch } from '@/lib/supabase/hooks/redux'
import { EnterDepartment } from '@/redux/departSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const FunctionWiseDepartment = ({department}: {department:any}) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
  return (
    <div className='border border-gray-300 p-5' >
        <h1>{department.depart_name}</h1>
        <div className='mt-2 h-[250px] overflow-hidden flex items-center justify-center'>
            <Image src={department.image} height={300} width={300} alt={department.depart_name}/>
        </div>
      <div>
        <button onClick={()=>{
            dispatch(EnterDepartment(department));
            router.push('/department');
        }} className='w-full py-2 my-2 rounded-md bg-green-600 text-black '>
            Enter {department.depart_name}
        </button>
      </div>
    </div>
  )
}

export default FunctionWiseDepartment
