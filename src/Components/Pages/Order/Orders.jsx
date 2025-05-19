import React from 'react'

function Orders() {
  let THead = ['S. No.', 'Order ID', 'Name',
    'Quantity', 'Price', 'Date', 'Status', 'View']
  let TData = [
    {
      Orderid: 'Frank01',
      Name: 'Roshan Chaurasia',
      Quantity: '2',
      Price: '3500',
      Date: '10/06/2024',
      Status: 'Processing...'
    }
  ]
  return (
    <div>
      <ProductTable Thead={THead} TData={TData} />
    </div>
  )
}

export default Orders

function ProductTable({ Thead, TData }) {
  return (
    <div className='w-full border rounded'>
      <div className='text-2xl font-semibold px-5 py-5 bg-[#f1f5f9] rounded-top'>Order's List</div>
      <div class="relative overflow-x-auto shadow-md">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-3 py-2 text-center">Delete</button>
              </th>


              {Thead.map((item) => {
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
                    <td class="px-6 py-4">{item.Orderid}</td>
                    <td class="px-6 py-4">{item.Name}</td>
                    <td class="px-6 py-4">{item.Quantity}</td>
                    <td class="px-6 py-4">{item.Price}</td>
                    <td class="px-6 py-4">{item.Date}</td>
                    <td class="px-6 py-4">{item.Status}</td>
                    <td class="px-6 py-4">
                    <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700">View</button>
                    </td>
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