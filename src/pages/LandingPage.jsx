import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'


function LandingPage() {
    return (
        <div className="flex justify-center items-center h-screen bg-[#F7F8F9]">
            <div className='md:w-[30vw] px-[2%] md:border rounded-2xl py-8'>
                <div className="flex flex-col space-y-3 text-center">
                    <div className="text-4xl font-bold">Welcome to PopX</div>
                    <p className='opacity-75 mx-auto w-[75%] md:w-full md:mx-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <img className='w-[70%] mx-auto my-10' src="/landing.svg" alt="" />
                <div className="flex-col space-y-3 mt-3">
                    <Link to="/signup" className="block"><Button variant="signup" size="lg">Create Account</Button></Link>
                    <Link to="/login" className="block"><Button variant="login" size="lg">Already Registered? Login</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage