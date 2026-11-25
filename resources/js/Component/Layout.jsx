import React from 'react'

export default function Layout({ children, sidebar, header }) {
    return (
        <div className="flex flex-row">
            <div className="w-60 h-screen bg-gray-900">
                {sidebar}
            </div>
            <div className="flex-1 flex-col">
                {header}

            </div>


        </div>
    )
}
