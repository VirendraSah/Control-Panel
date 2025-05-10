import React from 'react'

export default function Footer() {
  return (
    <React.Fragment>
        <footer className='w-full flex items-center justify-between px-3 py-3 bg-white border-t-2 border-gray-200 absolute bottom-0 h-[40px]'>
            <div className='font-medium text-[12px] leading-5 text-[#111827]'>
                <p>© 2025 WsCube Tech™. All Rights Reserved.</p>
            </div>
            <div>
                <p className='font-medium text-[12px] leading-5 text-[#111827]'>Design By <span className='text-blue-500 hover:underline cursor-pointer'>WsCube Tech</span></p>
            </div>
        </footer>
    </React.Fragment>
  )
}
