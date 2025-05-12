import React from 'react'

function Addcolor() {
  return (
    <React.Fragment>
      <section className='px-5'>
        <div className='border rounded'>
          <div className='border-b rounded-t py-3 px-2 bg-[#f1f5f9]'>
            <div className='w-full text-[20px] font-semibold leading-7'>Add Colors</div>
          </div>
          <div className='py-2'>
            <form action="">
              <div className="mb-5 px-3">
                <label htmlFor="color-name" className="block mb-2 text-sm font-medium text-gray-900">Color Name</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter color name..." required />
              </div>
              <div className="mb-5 px-3">
                <label htmlFor="color-name" className="block mb-2 text-sm font-medium text-gray-900">Color Name</label>
                <input type="color" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter color name..." required />
              </div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Addcolor