'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import tlogo from "@/public/tlogo.png"
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoMdBuild } from "react-icons/io";
import Link from 'next/link';
import { routeModule } from 'next/dist/build/templates/pages';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/department';

const itemsList = [
  "All",
  "Fresh",
  "Sell",
  "Gift Cards",
  "Buy Again",
  "Browsing History",
  "Health, Household & Personal Care"
];


const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  useEffect(()=>{
    const getUserData = async()=>{
      const {data:{user}} = await supabase.auth.getUser();
      setUser(user); 
    }
    getUserData();
  })
  return (
    <>
    <div className="bg-[#00A9E0] text-white py-3">
        <div className="flex items-center justify-between w-[90%] mx-auto">
          <div className="w-[10%]">
          <Image src={tlogo} alt="clogo" width={40} height={40}></Image>
          </div>
          <div className=" flex  items-center w-[60%]">
            <ul className='flex items-center justify-center gap-11 text-xs cursor-pointer'>
              <li>Home</li>
              <li>Services</li>
              <li>Career</li>
              <li>Resources</li>
              <li>About us</li>
            </ul>
            {/* <input className="w-full p-2 rounded-l-md text-black text-center outline-none" type="text" placeholder="Search Product" />
            <div className="bg-[#F6BE32] p-2 text-black rounded-r-md cursor-pointer">
            <CiSearch size={"24px"}/> */}
            {/* </div> */}
          </div>
          <div className="flex items-center justify-end w-[20%] gap-2">
              <p className='font-bold text-sm'>Hello {`${user ? user.identities[0].identity_data.full_name:'Guest' }`}</p>
            <div className='flex bg-[#20C997] rounded-md p-2 cursor-pointer'>
            <div className='relative top-1 right-1'>
            <IoMdBuild />
            </div>
            <div>
              <h1 onClick={()=>{
                router.push('/signin');
              }} className='text-xm'>Build with us</h1>
            </div>
            </div>
            {/* <div className="cursor-pointer">
              <h1 className="text-xs">Hello, Kshitiz</h1>
              <h1 className="font-medium text-sm">Account & Lists</h1>
          </div>
          <div className="cursor-pointer">
            <p className="text-xs">Returns</p>
            <h1 className="font-medium text-sm">& Orders</h1>
          </div>
          <div className="cursor-pointer">
            <p className="relative top-3 left-3">0</p>
            <div className="flex">
            <div>
          <CiShoppingCart size={"30px"}/>
            </div>
            <h1 className="mt-2">cart</h1>
            </div>
          </div> */}
        </div>
    </div>
    </div>
    {/* <div className="bg-[#20C997]  w-full p-2 flex justify-between items-center">
      <div>
        {
          itemsList.map((link,idx)=>{
            return(
              <Link href={`/${link}`} className='mx-2 hover:border hover:border-white border border-transparent p-2'>
              {link}</Link>
            )
          })
        }
      </div>
        <div className='mr-5'>
        <h1 className='text-[#F6BE32] font-bold cursor-pointer hover:underline'>Sign out</h1>
        </div>
      </div> */}
    </>
  )
}

export default Header
