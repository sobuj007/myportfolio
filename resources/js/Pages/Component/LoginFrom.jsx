import React, { useState } from 'react'
import { useForm, Link } from '@inertiajs/react';
import { Copyright, Eye, EyeClosed, EyeClosedIcon, EyeIcon } from 'lucide-react';


export default function LoginFrom() {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false
    });
    function handleSubmit(e) {
        e.preventDefault();
        post('/backend/login', {
            onFinish: () => reset('password')
        })

    }

    return (
        <div className=' w-full '>
            <form onSubmit={handleSubmit} className='flex flex-col  w-80 mx-auto mt-5'>
                <div className="email flex flex-col" >
                    <label className='text-sm py-1' >Email</label>
                    <div className='w-full px-3 py-1.5 border border-gray-400 focus:outline-none mb-4 rounded  active:border-blue-500 '>
                        <input type='email' className='w-full focus:outline-none ' placeholder='Enter your email'
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />
                    </div>
                    {errors.email && <>{errors.email}</>}
                </div>
                <div className="password flex flex-col">
                    <label className='text-sm py-1'>Password</label>
                    <div className="w-full flex flex-row item-center border-gray-400 justify-end px-3 py-1.5 border focus:outline-none active:border-blue-500 mb-4 rounded">
                        <input type={showPassword ? 'text' : 'password'} className='w-full focus:outline-none' placeholder='******'

                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            required />
                        <button type='button'
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? <EyeClosedIcon /> : <EyeIcon />}
                        </button>



                    </div>
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    <div className="flex items-center gap-2 text-xs mb-4">
                        <input type="checkbox"
                            id="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="h-4 w-4 rounded border-gray-300 text-blue-600"

                        />
                        <p> Remember Me!</p>
                    </div>




                </div>
                <button
                    type="submit"
                    disabled={processing}
                    className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2.5 rounded-lg transition"
                >Login</button>
            </form>

            <div className="signup_area flex flex-row gap-2 items-center justify-center mt-4">
                <p className='text-xs capitalize font-normal'>create new account!</p> <Link href='/backend/register' ><h4>Signup!</h4> </Link>
            </div>
            <div className="version flex flex-col items-center justify-center  opacity-50 mt-5">
                <div className="d flex flex-row items-center gap-1">
                    <Copyright size={'15px'} />
                    <p className='text-xs'> Infixstudio.io</p>
                </div>

                <div className="code text-xs">
                    <p> Version:0.1.0 Beta</p>
                </div>
            </div>

        </div>
    )
}
