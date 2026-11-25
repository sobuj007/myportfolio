import React from 'react'
import { logoo } from '../Pages/Constant/Images'
import { LayoutDashboard, List, Tags } from 'lucide-react'
import { listItems } from '../Pages/Constant/constant'

export default function SideNav() {

    return (
        <div className='w-full h-auto  flex flex-col items-center justify-center '>
            <div className="w-50 text-center my-4">
                <h3 className='text-white text-5xl font-bold uppercase'>B<span className='text-blue-500 font-bold text-5xl '>0</span>ss </h3>

            </div>
            <div className="flex-1  nav my-4">
                {listItems.map((item) => (
                    <div className="w-50 flex items-center justify-baseline gap-3 mt-2 px-4 transition-all ease-in-out delay-100 py-1.5 hover:bg-gray-700 rounded-sm text-white" key={item.id}>
                        {item.name}
                    </div>
                ))}

            </div>
        </div>
    )
}
