import { Inputbox } from "../../Common/FormElement"
import { PurpleButton } from "../../Common/FormElement"
function Addcolor() {
  return (
    <>
      <section className='px-5'>
        <div className='border rounded'>
          <div className='border-b rounded-t py-3 px-2 bg-[#f1f5f9]'>
            <div className='w-full text-[20px] font-semibold leading-7'>Add Colors</div>
          </div>
          <div className='py-2'>
            <form action="">
              <Inputbox label={'Color Name'} Placeholder={'Enter color name...'} inputType={'Text'} />
              <div className="mb-5 px-3">
                <label htmlFor="color-name" className="block mb-2 text-sm font-medium text-gray-900">Color Picker</label>
                <input type="color" id="color-picker" placeholder="Enter color name..." required />
              </div>
              <Inputbox label={'Order'} Placeholder={'Enter order...'} inputType={'Number'} />
              <PurpleButton BtnName={'Add Color'} />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Addcolor