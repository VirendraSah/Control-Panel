import { Inputbox } from "../../Common/FormElement"
import { PurpleButton } from "../../Common/FormElement"
import MyDropzone from "../../Common/Drag&drop"

function Addtestimonial() {
  return (
    <div>
      <section className='px-5'>
        <div className='border rounded'>
          <div className='border-b rounded-t py-3 px-2 bg-[#f1f5f9]'>
            <div className='w-full text-[20px] font-semibold leading-7'>Add Why Choose Us</div>
          </div>
          <div className='py-2'>
            <form action="">
              <div className="flex w-full">
                <MyDropzone label={'Choose Image'} />
                <div className="w-full">
                  <Inputbox label={'Name'} Placeholder={'Name'} inputType={'Text'} />
                  <Inputbox label={'Designation'} Placeholder={'Designation'} inputType={'Text'} />
                  <Inputbox label={'Rating'} Placeholder={'Rating'} inputType={'Text'} />
                  <Inputbox label={'Order'} Placeholder={'Order'} inputType={'number'} />
                  <Inputbox label={'Message'} Placeholder={''} inputType={'Text'} />
                </div>
              </div>
              <PurpleButton BtnName={'Add Testimonial'} />
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Addtestimonial