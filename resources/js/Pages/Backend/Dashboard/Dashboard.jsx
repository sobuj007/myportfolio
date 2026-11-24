import { Head, Link } from '@inertiajs/react'
import { LogOut, PersonStandingIcon, User } from 'lucide-react'
import React from 'react'

export default function Dashboard() {
    return (
        <>       <Head title='Boss Dashboard' />
            <div className="mainArea flex ">
                <User />
                <LogOut />
                <Link
                    href="/backend/logout"
                    method="post"
                    as="button"
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition"
                > <p>Logout</p></Link>


            </div>

        </>




    )
}
