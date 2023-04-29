import React from 'react'
import { Link } from 'react-router-dom';

function RequestForm() {
  return (
    <>
    <div className='bg-slate-100 flex flex-col justify-center mx-auto h-[700px]'>
        <form className='max-w-[600px] w-full mx-auto rounded-lg bg-slate-200 p-8 px-8'>
            <h2 className='text-4xl dark:text-white font-bold text-center'>Request Form</h2>
            <div className='flex flex-col text-gray-400 py-2'>
                <lable>Full Name</lable>
                <input className='rounded-lg bg-slate-50 mt-2 p-2 focus:border-blue-500 focus:bg-slate-100 focus:outline-none' type='text'/>
            </div>

            <div className='flex flex-col text-gray-400 py-2'>
                <lable>Mobile No</lable>
                <input className='rounded-lg bg-slate-50 mt-2 p-2 focus:border-blue-500 focus:bg-slate-100 focus:outline-none' type='number'/>
            </div>

            <div className='flex flex-col text-gray-400 py-2'>
                <lable>Where to Deliver</lable>
                <textarea className='rounded-lg bg-slate-50 mt-2 p-2 focus:border-blue-500 focus:bg-slate-100 focus:outline-none' cols={50} rows={5}></textarea>
            </div>

            <div className='flex flex-col text-gray-400 py-2'>
                <lable>Item to be Delivered</lable>
                <input className='rounded-lg bg-slate-50 mt-2 p-2 focus:border-blue-500 focus:bg-slate-100 focus:outline-none' type='text'/>
            </div>
            <Link to="/submitted">
            <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SUBMIT</button>
            </Link>
        </form>
    </div>
    </>
  )
}

export default RequestForm;