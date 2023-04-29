import React from 'react'
import { Link } from 'react-router-dom'


export default function Login() {
  return (
    <div>
        <div className='bg-slate-100 flex flex-col justify-center h-[850px]'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-slate-200 p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>Register</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Full Name</label>
                    <input className='rounded-lg bg-slate-50 mt-2 p-2 focus:border-blue-500 focus:bg-slate-100 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Enrollment Number</label>
                    <input className='rounded-lg bg-slate-50 mt-2 p-2 focus:border-blue-500 focus:bg-slate-100 focus:outline-none' type="number"/>
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email</label>
                    <input className='rounded-lg bg-slate-50 mt-2 p-2 focus:border-blue-500 focus:bg-slate-100 focus:outline-none' type="email" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Mobile Number</label>
                    <input className='rounded-lg bg-slate-50 mt-2 p-2 focus:border-blue-500 focus:bg-slate-100 focus:outline-none' type="number"/>
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-slate-50 mt-2 focus:border-blue-500 focus:bg-slate-100 focus:outline-none' type="password" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Confirm Password</label>
                    <input className='p-2 rounded-lg bg-slate-50 mt-2 focus:border-blue-500 focus:bg-slate-100 focus:outline-none' type="password" />
                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Register</button>
                <Link className='ml-8' to='/login'>Already have an account? <span className='text-blue-500'>Login Here</span></Link>
            </form>
        </div>
    </div>
  )
}