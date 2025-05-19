import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Image1 from "../../../../public/product image.png";
function Viewproducts() {
  let THead = ['Delete', 'S. No.', 'Product Name', 'Description',
    'Short Description', 'Thumbnails', 'Action', 'Status']
  let TData = [
    {
      PName: "Men's",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa consequatur animi rerum at eveniet praesentium explicabo expedita assumenda voluptas maiores nobis",
      ShortDiscription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa consequatur animi rerum at eveniet praesentium explicabo expedita assumenda voluptas maiores nobis",
      Thambnail: Image1
    },
    {
      PName: "Men's",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa consequatur animi rerum at eveniet praesentium explicabo expedita assumenda voluptas maiores nobis",
      ShortDiscription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa consequatur animi rerum at eveniet praesentium explicabo expedita assumenda voluptas maiores nobis",
      Thambnail: Image1
    },
    {
      PName: "Men's",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa consequatur animi rerum at eveniet praesentium explicabo expedita assumenda voluptas maiores nobis",
      ShortDiscription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa consequatur animi rerum at eveniet praesentium explicabo expedita assumenda voluptas maiores nobis",
      Thambnail: Image1
    },
    {
      PName: "Men's",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa consequatur animi rerum at eveniet praesentium explicabo expedita assumenda voluptas maiores nobis",
      ShortDiscription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa consequatur animi rerum at eveniet praesentium explicabo expedita assumenda voluptas maiores nobis",
      Thambnail: Image1
    },
    {
      PName: "Men's",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa consequatur animi rerum at eveniet praesentium explicabo expedita assumenda voluptas maiores nobis",
      ShortDiscription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa consequatur animi rerum at eveniet praesentium explicabo expedita assumenda voluptas maiores nobis",
      Thambnail: Image1
    }
  ]
  return (
    <div>
      <ProductTable Thead={THead} TData={TData} />
    </div>
  )
}

export default Viewproducts



function ProductTable({ Thead, TData }) {
  return (
    <div className='w-full border rounded'>
      <div className='text-2xl font-semibold px-5 py-5 bg-[#f1f5f9] rounded-top'>Product Items</div>
      <div class="relative overflow-x-auto shadow-md">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {Thead.map((item, index) => {
                return (
                  <>
                    <th scope="col" class="px-6 py-3">{item}</th>
                  </>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {TData.map((item, index) => {
              return (
                <>
                  <tr class="bg-white border-b dark:border-gray-700 border-gray-200 hover:bg-gray-50 h-full">
                    <td class="w-4 p-4">
                      <div class="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4" />
                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                      </div>
                    </td>
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">{index + 1}</th>
                    <td class="px-6 py-4">{item.PName}</td>
                    <td class="px-6 py-4">
                      <p className='line-clamp-1'>{item.Description}</p>
                      <a href='' className='font-semibold text-blue-500'>Read More</a>
                    </td>
                    <td class="px-6 py-4">
                      <p className='line-clamp-1'>{item.ShortDiscription}</p>
                      <a href='' className='font-semibold text-blue-500'>Read More</a>
                    </td>
                    <td class="px-6 py-4">
                      <img src={item.Thambnail} alt="product Image" className='w-17 h-17 object-fit-contain rounded' />
                    </td>
                    <td class="px-6 py-4">
                      <div className='flex items-center gap-3'>
                        <RiDeleteBin6Line className='text-red-500 text-[20px]' /> <span>|</span>
                        <FaEdit className='text-amber-400 text-[20px]' />
                      </div>
                    </td>
                    <td class="px-6 py-4">Active</td>
                  </tr >
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}