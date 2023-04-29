import React from 'react'
import { Link } from 'react-router-dom'


export default function Login() {
  return (
    <div>
        <div className='bg-slate-100 flex flex-col justify-center h-[600px]'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-slate-200 p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input className='rounded-lg bg-slate-50 mt-2 p-2 focus:border-blue-500 focus:bg-slate-100 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-slate-50 mt-2 focus:border-blue-500 focus:bg-slate-100 focus:outline-none' type="password" />
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Forgot Password</p>
                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SIGN IN</button>
                <Link className='ml-8' to='/register'>Don't have an account? <span className='text-blue-500'>Register Here</span></Link>
            </form>
        </div>
    </div>
  )
}