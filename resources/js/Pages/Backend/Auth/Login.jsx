import React from 'react'
import lockimg from '../../../../assets/lock.jpg'
import LoginFrom from '../../../Component/LoginFrom'
import FullScreenLayout from '@/Layouts/FullScreenLayout'
export default function Login() {

    return (
        <div className=' w-full h-screen bg-gray-100 pt-25  '>
            <div className="container md:w-3/4 lg:w-2/3 flex h-5/6 mx-auto  shadow-lg ">
                <div className="flex-1  bg-white p-4">
                    <div className="flex flex-col mx-auto w-fit items-center mt-4 ">
                        <h1 className='text-lg font-regular text-gray-700 '>Welcome Back</h1>
                        <h1 className='text-7xl tracking-tight font-semibold font-sans text-gray-700 uppercase '>B<strong className="text-blue-500">0</strong>ss</h1>
                        <p className="text-xs"> You can add your portfolio work here ,</p>
                    </div>
                    <div className="">
                        <LoginFrom />
                    </div>

                </div>
                <div className="flex-1  bg-amber-400">

                    <img src={lockimg} className="max-h-full w-full object-cover opacity-99
                    " />
                </div>


            </div>
        </div >
    )
}
Login.layout = (page) => <FullScreenLayout>{page}</FullScreenLayout>;