import { LayoutDashboard } from 'lucide-react'
import React from 'react'

export default function Header() {
    return (
        <div>
            <div className="header bg-gray-800 h-18">
                <div className="flex">
                    <LayoutDashboard color='' />
                    <div className="w-1 h-10 border bg-white"></div>

                </div>
            </div>
        </div>
    )
}
