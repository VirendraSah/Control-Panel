import React, { useState } from 'react'
import { AiFillPieChart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegCircleDot } from "react-icons/fa6";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { FaDroplet } from "react-icons/fa6";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdEditDocument } from "react-icons/md";
import { FaSlidersH } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FcFaq } from "react-icons/fc";
import { IoDocumentText } from "react-icons/io5";
import { Link } from 'react-router';

export default function Sidebar() {
    let [user, setuser] = useState(false)
    let [Enquiry, setenquiry] = useState(false)
    let [Color, setcolor] = useState(false)
    let [Material, setMaterial] = useState(false)
    let [ParentCat, setParentCat] = useState(false)
    let [subCat, setSubcat] = useState(false)
    let [subsubCat, setSubsubCat] = useState(false)
    let [Products, setproduct] = useState(false)
    let [whycooseUs, setwhycooseUs] = useState(false)
    let [orders, setorders] = useState(false)
    let [Sliders, setsliders] = useState(false)
    let [Country, setCountry] = useState(false)
    let [testimonial, setTestimonial] = useState(false)
    let [Faqs, setFaqs] = useState(false)

    return (
        <React.Fragment>
            <div className=' border bg-[#1f2937] px-2 h-lvh overflow-y-scroll scrollbar-track-transparent py-5'>
                <figure className='w-full flex items-center justify-center border-b border-[#758396] pt-4 pb-4'>
                    <img src="../public/wscube-tech-logo-2.svg" alt="wscube tech" className='w-[70%]' />
                </figure>
                <div className='flex flex-col gap-5 pt-5'>
                    <div className='flex gap-3 cursor-pointer items-center justify-start px-2'>
                        <AiFillPieChart className='text-[#9ca3af] text-[20px]' />
                        <Link to='/dashboard' className='text-white text-[16px] font-medium'>Dashboard</Link>
                    </div>
                    <ul>
                        <li className='flex flex-col cursor-pointer items-center justify-start'>
                            <div onClick={() => setuser(!user)} className='flex items-center justify-between w-full hover:bg-[#374151] px-2 py-2 rounded-sm'>
                                <div className='flex gap-3 cursor-pointer items-center'>
                                    <FaUser className='text-white text-[16px]' />
                                    <span className='text-white text-[14px] font-medium'>Users</span>
                                </div>
                                {user
                                    ? <MdOutlineKeyboardArrowUp className='text-[#8a929e]' />
                                    : <MdKeyboardArrowDown className='text-[#8a929e]' />
                                }
                            </div>
                            <div className={`flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm ${user ? 'block' : 'hidden'}`}>
                                <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                <Link to="/user/view" className='text-white text-[12px] font-semibold'>View User</Link>
                            </div>
                        </li>
                        <li className='flex flex-col cursor-pointer items-center justify-start'>
                            <div onClick={() => setenquiry(!Enquiry)} className='flex items-center justify-between w-full hover:bg-[#374151] px-2 py-2 rounded-sm'>
                                <div className='flex gap-3 cursor-pointer items-center'>
                                    <FaMessage className='text-white text-[16px]' />
                                    <span className='text-white text-[14px] font-medium'>Enquirys</span>
                                </div>
                                {Enquiry
                                    ? <MdOutlineKeyboardArrowUp className='text-[#8a929e]' />
                                    : <MdKeyboardArrowDown className='text-[#8a929e]' />
                                }
                            </div>
                            <div className={`flex flex-col items-start w-full justify ${Enquiry ? 'block' : 'hidden'}`}>
                                <div className={`flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm}`}>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='/enquiry/contact-enquiry' className='text-white text-[12px] font-semibold'>Contact Enquirys</Link>
                                </div>
                                <div className={`flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm}`}>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='/enquiry/newsletter' className='text-white text-[12px] font-semibold'>Newsletters</Link>
                                </div>
                            </div>
                        </li>
                        <li className='flex flex-col cursor-pointer items-center justify-start'>
                            <div onClick={() => setcolor(!Color)} className='flex items-center justify-between w-full hover:bg-[#374151] px-2 py-2 rounded-sm'>
                                <div className='flex gap-3 cursor-pointer items-center'>
                                    <FaDroplet className='text-white text-[16px]' />
                                    <span className='text-white text-[14px] font-medium'>colors</span>
                                </div>
                                {Color
                                    ? <MdOutlineKeyboardArrowUp className='text-[#8a929e]' />
                                    : <MdKeyboardArrowDown className='text-[#8a929e]' />
                                }
                            </div>
                            <div className={`flex flex-col items-start w-full justify ${Color ? 'block' : 'hidden'}`}>
                                <div className={`flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm`}>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='colors/add' className='text-white text-[12px] font-semibold'>Add Color</Link>
                                </div>
                                <div className={`flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm`}>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='colors/view' className='text-white text-[12px] font-semibold'>View Color</Link>
                                </div>
                            </div>
                        </li>
                        <li className='flex flex-col cursor-pointer items-center justify-start'>
                            <div onClick={() => setMaterial(!Material)} className='flex items-center justify-between w-full hover:bg-[#374151] px-2 py-2 rounded-sm'>
                                <div className='flex gap-3 cursor-pointer items-center'>
                                    <FaExpandArrowsAlt className='text-white text-[16px]' />
                                    <span className='text-white text-[14px] font-medium'>Materials</span>
                                </div>
                                {Material
                                    ? <MdOutlineKeyboardArrowUp className='text-[#8a929e]' />
                                    : <MdKeyboardArrowDown className='text-[#8a929e]' />
                                }
                            </div>
                            <div className={`flex flex-col items-start w-full justify ${Material ? 'block' : 'hidden'}`}>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='materials/add' className='text-white text-[12px] font-semibold'>Add Material</Link>
                                </div>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='materials/view' className='text-white text-[12px] font-semibold'>View Material</Link>
                                </div>
                            </div>
                        </li>
                        <li className='flex flex-col cursor-pointer items-center justify-start'>
                            <div onClick={() => setParentCat(!ParentCat)} className='flex items-center justify-between w-full hover:bg-[#374151] px-2 py-2 rounded-sm'>
                                <div className='flex gap-3 cursor-pointer items-center'>
                                    <FaBarsStaggered className='text-white text-[16px]' />
                                    <span className='text-white text-[14px] font-medium'>Parent Categorys</span>
                                </div>
                                {ParentCat
                                    ? <MdOutlineKeyboardArrowUp className='text-[#8a929e]' />
                                    : <MdKeyboardArrowDown className='text-[#8a929e]' />
                                }
                            </div>
                            <div className={`flex flex-col items-start w-full justify ${ParentCat ? 'block' : 'hidden'}`}>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='parent-category/add' className='text-white text-[12px] font-semibold'>Add Category</Link>
                                </div>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='parent-category/view' className='text-white text-[12px] font-semibold'>View Category</Link>
                                </div>
                            </div>
                        </li>
                        <li className='flex flex-col cursor-pointer items-center justify-start'>
                            <div onClick={() => setSubcat(!subCat)} className='flex items-center justify-between w-full hover:bg-[#374151] px-2 py-2 rounded-sm'>
                                <div className='flex gap-3 cursor-pointer items-center'>
                                    <FaBarsStaggered className='text-white text-[16px]' />
                                    <span className='text-white text-[14px] font-medium'>Sub Categorys</span>
                                </div>
                                {subCat
                                    ? <MdOutlineKeyboardArrowUp className='text-[#8a929e]' />
                                    : <MdKeyboardArrowDown className='text-[#8a929e]' />
                                }
                            </div>
                            <div className={`flex flex-col items-start w-full justify ${subCat ? 'block' : 'hidden'}`}>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='sub-category/add' className='text-white text-[12px] font-semibold'>Add Sub Category</Link>
                                </div>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='sub-category/view' className='text-white text-[12px] font-semibold'>View Sub Category</Link>
                                </div>
                            </div>
                        </li>
                        <li className='flex flex-col cursor-pointer items-center justify-start'>
                            <div onClick={() => setSubsubCat(!subsubCat)} className='flex items-center justify-between w-full hover:bg-[#374151] px-2 py-2 rounded-sm'>
                                <div className='flex gap-3 cursor-pointer items-center'>
                                    <FaBarsStaggered className='text-white text-[16px]' />
                                    <span className='text-white text-[14px] font-medium'>Sub Sub Categorys</span>
                                </div>
                                {subsubCat
                                    ? <MdOutlineKeyboardArrowUp className='text-[#8a929e]' />
                                    : <MdKeyboardArrowDown className='text-[#8a929e]' />
                                }
                            </div>
                            <div className={`flex flex-col items-start w-full justify ${subsubCat ? 'block' : 'hidden'}`}>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='sub-sub-category/add' className='text-white text-[12px] font-semibold'>Add Sub Sub Category</Link>
                                </div>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='sub-sub-category/view' className='text-white text-[12px] font-semibold'>View Sub Sub Category</Link>
                                </div>
                            </div>
                        </li>
                        <li className='flex flex-col cursor-pointer items-center justify-start'>
                            <div onClick={() => setproduct(!Products)} className='flex items-center justify-between w-full hover:bg-[#374151] px-2 py-2 rounded-sm'>
                                <div className='flex gap-3 cursor-pointer items-center'>
                                    <GiShoppingBag className='text-white text-[16px]' />
                                    <span className='text-white text-[14px] font-medium'>Products</span>
                                </div>
                                {Products
                                    ? <MdOutlineKeyboardArrowUp className='text-[#8a929e]' />
                                    : <MdKeyboardArrowDown className='text-[#8a929e]' />
                                }
                            </div>
                            <div className={`flex flex-col items-start w-full justify ${Products ? 'block' : 'hidden'}`}>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='products/add' className='text-white text-[12px] font-semibold'>Add Products</Link>
                                </div>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='products/view' className='text-white text-[12px] font-semibold'>View Products</Link>
                                </div>
                            </div>
                        </li>
                        <li className='flex flex-col cursor-pointer items-center justify-start'>
                            <div onClick={() => setwhycooseUs(!whycooseUs)} className='flex items-center justify-between w-full hover:bg-[#374151] px-2 py-2 rounded-sm'>
                                <div className='flex gap-3 cursor-pointer items-center'>
                                    <FaClockRotateLeft className='text-white text-[16px]' />
                                    <span className='text-white text-[14px] font-medium'>Why Choose Us</span>
                                </div>
                                {whycooseUs
                                    ? <MdOutlineKeyboardArrowUp className='text-[#8a929e]' />
                                    : <MdKeyboardArrowDown className='text-[#8a929e]' />
                                }
                            </div>
                            <div className={`flex flex-col items-start w-full justify ${whycooseUs ? 'block' : 'hidden'}`}>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='why-choose-us/add' className='text-white text-[12px] font-semibold'>Add Why Choose Us</Link>
                                </div>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='why-choose-us/view' className='text-white text-[12px] font-semibold'>View Why Choose Us</Link>
                                </div>
                            </div>
                        </li>
                        <li className='flex flex-col cursor-pointer items-center justify-start'>
                            <div onClick={() => setorders(!orders)} className='flex items-center justify-between w-full hover:bg-[#374151] px-2 py-2 rounded-sm'>
                                <div className='flex gap-3 cursor-pointer items-center'>
                                    <MdEditDocument className='text-white text-[16px]' />
                                    <span className='text-white text-[14px] font-medium'>Orders</span>
                                </div>
                                {orders
                                    ? <MdOutlineKeyboardArrowUp className='text-[#8a929e]' />
                                    : <MdKeyboardArrowDown className='text-[#8a929e]' />
                                }
                            </div>
                            <div className={`flex flex-col items-start w-full justify ${orders ? 'block' : 'hidden'}`}>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='orders' className='text-white text-[12px] font-semibold'>Orders</Link>
                                </div>

                            </div>
                        </li>
                        <li className='flex flex-col cursor-pointer items-center justify-start'>
                            <div onClick={() => setsliders(!Sliders)} className='flex items-center justify-between w-full hover:bg-[#374151] px-2 py-2 rounded-sm'>
                                <div className='flex gap-3 cursor-pointer items-center'>
                                    <FaSlidersH className='text-white text-[16px]' />
                                    <span className='text-white text-[14px] font-medium'>Sliders</span>
                                </div>
                                {Sliders
                                    ? <MdOutlineKeyboardArrowUp className='text-[#8a929e]' />
                                    : <MdKeyboardArrowDown className='text-[#8a929e]' />
                                }
                            </div>
                            <div className={`flex flex-col items-start w-full justify ${Sliders ? 'block' : 'hidden'}`}>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='sliders/add' className='text-white text-[12px] font-semibold'>Add Slider</Link>
                                </div>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='sliders/view' className='text-white text-[12px] font-semibold'>View Slider</Link>
                                </div>
                            </div>
                        </li>
                        <li className='flex flex-col cursor-pointer items-center justify-start'>
                            <div onClick={() => setCountry(!Country)} className='flex items-center justify-between w-full hover:bg-[#374151] px-2 py-2 rounded-sm'>
                                <div className='flex gap-3 cursor-pointer items-center'>
                                    <FaLocationArrow className='text-white text-[16px]' />
                                    <span className='text-white text-[14px] font-medium'>Country</span>
                                </div>
                                {Country
                                    ? <MdOutlineKeyboardArrowUp className='text-[#8a929e]' />
                                    : <MdKeyboardArrowDown className='text-[#8a929e]' />
                                }
                            </div>
                            <div className={`flex flex-col items-start w-full justify ${Country ? 'block' : 'hidden'}`}>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='country/Add' className='text-white text-[12px] font-semibold'>Add Country</Link>
                                </div>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='country/view' className='text-white text-[12px] font-semibold'>View Country</Link>
                                </div>
                            </div>
                        </li>
                        <li className='flex flex-col cursor-pointer items-center justify-start'>
                            <div onClick={() => setTestimonial(!testimonial)} className='flex items-center justify-between w-full hover:bg-[#374151] px-2 py-2 rounded-sm'>
                                <div className='flex gap-3 cursor-pointer items-center'>
                                    <FaUserEdit className='text-white text-[16px]' />
                                    <span className='text-white text-[14px] font-medium'>Testimonials</span>
                                </div>
                                {testimonial
                                    ? <MdOutlineKeyboardArrowUp className='text-[#8a929e]' />
                                    : <MdKeyboardArrowDown className='text-[#8a929e]' />
                                }
                            </div>
                            <div className={`flex flex-col items-start w-full justify ${testimonial ? 'block' : 'hidden'}`}>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='testimonial/add' className='text-white text-[12px] font-semibold'>Add Testimonial</Link>
                                </div>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='testimonial/view' className='text-white text-[12px] font-semibold'>View Testimonial</Link>
                                </div>
                            </div>
                        </li>
                        <li className='flex flex-col cursor-pointer items-center justify-start'>
                            <div onClick={() => setFaqs(!Faqs)} className='flex items-center justify-between w-full hover:bg-[#374151] px-2 py-2 rounded-sm'>
                                <div className='flex gap-3 cursor-pointer items-center'>
                                    <FcFaq className='text-white text-[16px]' />
                                    <span className='text-white text-[14px] font-medium'>Faqs</span>
                                </div>
                                {Faqs
                                    ? <MdOutlineKeyboardArrowUp className='text-[#8a929e]' />
                                    : <MdKeyboardArrowDown className='text-[#8a929e]' />
                                }
                            </div>
                            <div className={`flex flex-col items-start w-full justify ${Faqs ? 'block' : 'hidden'}`}>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='faqs/add' className='text-white text-[12px] font-semibold'>Add Faq</Link>
                                </div>
                                <div className='flex gap-2 justify-start w-full items-center px-2 py-1 hover:bg-[#374151] rounded-sm'>
                                    <FaRegCircleDot className='text-[#858c98] text-[12px]' />
                                    <Link to='faqs/view' className='text-white text-[12px] font-semibold'>View Faq</Link>
                                </div>
                            </div>
                        </li>
                        <li className='flex flex-col cursor-pointer items-center justify-start'>
                            <div className='flex items-center justify-between w-full hover:bg-[#374151] px-2 py-2 rounded-sm'>
                                <div className='flex gap-3 cursor-pointer items-center'>
                                    <IoDocumentText className='text-white text-[16px]' />
                                    <span className='text-white text-[14px] font-medium'>Terms & Conditions</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}
