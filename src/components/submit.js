import React from 'react'
import { Link } from 'react-router-dom';

function submit() {
  return (
        <div>
        <div className='w-[500px] justify-center mx-auto mt-8 mb-8 py-6 px-2 border-2 border-zinc-50 bg-slate-50 rounded-md text-lg '>
            <div className=''>Your Data has been Successfully Submited</div>
            <Link to="/">
            <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Go to Home</button>
            </Link>
        </div>
        <div className='w-[500px] justify-center mx-auto py-6 px-2 mt-8 mb-8 border-2 border-zinc-50 bg-slate-50 rounded-md text-lg '>Did you checkout about us??<br/> If not you can you bellow Button!!
            <Link to="/about">
            <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>About</button>
            </Link>
            </div>
        </div>
  )
}

export default submit;