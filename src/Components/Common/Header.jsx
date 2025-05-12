import { FaBars } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router';

export default function Header() {
    return (
        <>
            <header className='w-full flex flex-col absolute top-0 h-[100px]'>
                <div className='w-full flex items-center justify-between px-3 pt-2 pb-2 border-b-2 border-gray-300 bg-white'>
                    <div className='flex gap-3 items-center justify-start'>
                        <FaBars className='text-[#64748b] text-[20px]' />
                        <span className='font-semibold leading-7 text-[#64748b] text-[20px]'>Dashboard</span>
                    </div>
                    <div className="relative group">
                        <figure className="cursor-pointer">
                            <img
                                className="w-10 h-10 rounded-full"
                                src="../public/pexels-photo-2379005.jpeg"
                                alt="Rounded avatar"
                            />
                        </figure>

                        {/* Dropdown menu */}
                        <div className="hidden group-hover:block absolute top-10 right-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-max">
                            <ul className="py-2 text-sm text-gray-700">
                                <li className="border-b border-gray-200">
                                    <a
                                        href="#"
                                        className="px-4 py-2 hover:bg-[#f3f4f6] hover:text-blue-500 flex items-center gap-1"
                                    >
                                        <FaUserCircle />
                                        <span className="font-semibold">Profile</span>
                                    </a>
                                </li>
                                <li className="border-b">
                                    <a
                                        href="#"
                                        className="px-4 py-2 hover:bg-[#f3f4f6] hover:text-blue-500 flex items-center gap-1"
                                    >
                                        <RiProfileLine />
                                        <span className="font-semibold">Company Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="px-4 py-2 hover:bg-[#f3f4f6] hover:text-blue-500 flex items-center gap-1"
                                    >
                                        <FaLock />
                                        <span className="font-semibold">Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className='w-full py-2 px-3 border-b-2 border-gray-100'>
                    <div className=' flex items-center justify-start gap-2'>
                        <Link to='dashboard' className='font-medium leading-6 text-[13px] hover:text-[#2563eb]'>Home</Link>
                        <span className='font-medium leading-6 text-[13px]'>/</span>
                        <Link to='dashboard' className='font-medium leading-6 text-[13px] hover:text-[#2563eb]'>Dashboard</Link>
                    </div>
                </div>
            </header>
        </>
    )
}
