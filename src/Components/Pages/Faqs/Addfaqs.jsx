import React from 'react'
import { Textarea } from '../../Common/FormElement'

function Addfaqs() {
  return (
    <div>
      <section className='px-5'>
        <div className='border rounded'>
          <div className='border-b rounded-t py-3 px-2 bg-[#f1f5f9]'>
            <div className='w-full text-[20px] font-semibold leading-7'>Add Faq</div>
          </div>
          <div className='py-2'>
            <form action="">
              <div className="mb-5 px-3">
                <label htmlFor="color-name" className="block mb-2 text-sm font-medium text-gray-900">Question</label>
                <input type="Question" id="Question" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Question" required />
              </div>
              <Textarea label={'Answer'} />
              <div className="mb-5 px-3">
                <label htmlFor="Order" className="block mb-2 text-sm font-medium text-gray-900">Order</label>
                <input type="number" id="Order" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Order" required />
              </div>
              <button type="button" class="focus:outline-none mx-3 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add Faq</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Addfaqs