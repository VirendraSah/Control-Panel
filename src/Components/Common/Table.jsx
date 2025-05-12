import React, { useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdFilterAltOff } from "react-icons/md";
import { MdFilterAlt } from "react-icons/md";
import { FaPen } from "react-icons/fa";


function MainTable({ ThData, TBody }) {
    let [filter, setFilter] = useState(false)
    let { thInfo, thName, thcontact, TableHeading } = ThData
    return (
        <React.Fragment>
            <section className='px-5 flex flex-col gap-4'>
                <Onfilter Visibility={filter} />
                <div className='border rounded'>
                    <div className='bg-[#f1f5f9] rounded'>
                        <div className='p-3 flex justify-between'>
                            <p className='font-semibold leading-10 text-2xl '>{TableHeading}</p>
                            <div className='flex items-center justify-end'>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setFilter(!filter)}>
                                    {filter
                                        ? < MdFilterAltOff className='text-[20px] leading-5' />
                                        : < MdFilterAlt className='text-[20px] leading-5' />
                                    }
                                </button>

                                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-[14px] leading-5">Change Status</button>

                                <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 text-[14px] leading-5">Delete</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Table thName={thName} thInfo={thInfo} thcontact={thcontact} TBodyData={TBody} />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

function Table({ thName, thInfo, thcontact, TBodyData }) {
    return (
        <React.Fragment>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope='col' className='ps-6 py-3'><input type="checkbox" /></th>
                            <th scope="col" className=" flex items-center gap-2">{thName}</th>
                            <th scope="col" className="px-6 py-3">{thInfo}</th>
                            <th scope="col" className="px-6 py-3">{thcontact}</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3 flex justify-end"><span className="">Action</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {TBodyData.length >= 1 ? TBodyData.map((item, index) => {
                            let { Name, email, Mobilenumber, button } = item
                            return (
                                < Detailrow
                                    key={index}
                                    tdName={Name}
                                    tdemail={email}
                                    tdMobilenumber={Mobilenumber}
                                    tdbutton={button}
                                />
                            )
                        })
                            : (
                                <tr>
                                    <td colSpan="6">
                                        <p className="font-semibold px-5 py-7 text-center text-gray-500">No Data Found</p>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}


function Detailrow({ tdName, tdemail, tdMobilenumber, tdbutton }) {
    console.log(tdemail)
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope='col' className='px-6 py-3'><input type="checkbox" /></th>
            <th scope="row" className="pe-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{tdName}</th>
            <td className="px-6 py-4">
                {typeof tdemail === 'string'
                    ? tdemail
                    : (<img src={tdemail.value} alt={tdName} className="w-6 h-6 rounded-full" />)
                }
            </td>
            <td className="px-6 py-4">{tdMobilenumber}</td>
            <td className="px-6 py-4">
                {tdbutton === 'red'
                    ? <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Deactive</button>

                    : <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-1 text-center">Active</button>
                }
            </td>
            <td className="px-6 py-4 text-right">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><FaPen /></button>
            </td>
        </tr>
    )
}

function Onfilter({ Visibility }) {
    return (
        <React.Fragment>
            <section className={`border rounded py-2 px-3 ${Visibility ? 'block' : 'hidden'}`}>
                <form className="flex items-center max-w-sm">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="w-full">
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
                    </div>
                    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <FaMagnifyingGlass />
                    </button>
                </form>
            </section>
        </React.Fragment>
    )
}



export { MainTable }
