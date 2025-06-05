import React, { useState } from 'react'
import { FaMobileScreen } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import MyDropzone from '../../Common/Drag&drop';
import { Inputbox, PurpleButton } from '../../Common/FormElement';

function Profile() {
  let [profile, setProfile]=useState(false)
  return (
    <>
      <div className='w-full flex gap-3 px-3'>
        <div className='flex flex-col items-center h-max min-w-72 gap-5 shadow-2xl rounded-lg pt-5'>
          <figure className='flex flex-col items-center'>
            <img class="w-15 h-15 rounded-full" src="/public/pexels-photo-2379005.jpeg" alt="Rounded avatar" />
            <figcaption className='text-sm'>Admin</figcaption>
          </figure>
          <div className='flex flex-col justify-start gap-5 bg-[#f6f9fd] w-full px-4 py-5 rounded-b-lg'>
            <h3 className='font-bold leading-6'>Contact Information</h3>
            <div className='flex flex-col gap-3'>
              <p className='flex items-center gap-1'>
                <FaMobileScreen className='text-xl' />
                1234567890
              </p>
              <p className='flex items-center gap-1'>
                <HiOutlineMail className='text-xl' />
                xyz@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className='w-full px-3 py-4 shadow-lg rounded-lg'>
          <div className='w-full border-b flex gap-3 border-gray-300'>
            <button onClick={()=>setProfile(false)} className={` font-medium leading-6 text-[14px] cursor-pointer ${profile==false ? 'text-[#8225ce] border-b-2 border-[#8225ce]' : 'text-[#4b5563] border-0'} `}>Edit Profile</button>
            <button onClick={()=>setProfile(true)} className={`font-medium text-[#4b5563] leading-6 text-[14px] cursor-pointer ${profile==true ? 'text-[#8225ce] border-b-2 border-[#8225ce]' : 'text-[#4b5563] border-0'}`}>Change Password</button>
          </div>
          <form action="" className='w-full pt-3'>
              {profile==false ? <EditProfile/> : <ChangePassword/>}
            <PurpleButton BtnName={'Update Profile'} />
          </form>
        </div>
      </div>
    </>
  )
}

export default Profile

function EditProfile() {
  return (
    <>
      <div className='w-full flex pb-3'>
        <MyDropzone label={'Choose Image'} />
        <div className='w-full'>
          <Inputbox label={'Title'} Placeholder={'Title'} inputType={'text'} />
          <Inputbox label={'Email'} Placeholder={'Email'} inputType={'email'} />
          <Inputbox label={'Mobile Number'} Placeholder={'Number'} inputType={'number'} />
        </div>
      </div>
    </>
  )
}

function ChangePassword() {
  return (
    <>
      <div className='w-full pb-3'>
        <Inputbox label={'Current Password'} Placeholder={'Current Password'} inputType={'password'} />
        <Inputbox label={'New Password'} Placeholder={'New Password'} inputType={'password'} />
        <Inputbox label={'Confirm Password'} Placeholder={'Confirm Password'} inputType={'password'} />
      </div>
    </>
  )
}