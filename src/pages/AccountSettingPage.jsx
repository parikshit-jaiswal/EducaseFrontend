import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

function AccountSetting() {

  const navigate = useNavigate();

  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

  if (user) {
    return (
      <div className="flex justify-center lg:items-center h-screen bg-[#F7F8F9]">
        <div className='md:w-[30vw] md:border rounded-2xl pb-10'>
          <div className="border-b-2 text-xl p-5 font-semibold bg-white flex">
            <Link to="/"><ChevronLeft className="" size={32} /></Link>Account Setting
          </div>
          <div className="flex items-center mt-4">
            <div className="px-2 py-1">
              <img className='h-20 w-20 object-cover rounded-full' src="userM.jpg" alt="" />
              <img className="relative left-14 bottom-6" src="camera.svg" alt="" />
            </div>
            <div className="mt-[-2rem] font-bold">
              <p>{user?.fullName}</p>
              <p>{user?.email}</p>
            </div>
          </div>
          <p className="px-[1%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi dolorem, quia qui corrupti dignissimos veritatis
          </p>
        </div>
      </div>
    )
  }
  else {
    useEffect(() => {
      navigate('/login')
    }
      , [])
    return (
      <div>
        Redirecting to login...
      </div>
    )
  }
}

export default AccountSetting