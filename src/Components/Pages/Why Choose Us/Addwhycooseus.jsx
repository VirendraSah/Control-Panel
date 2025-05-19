import { Inputbox } from "../../Common/FormElement"
import { PurpleButton } from "../../Common/FormElement"
import MyDropzone from "../../Common/Drag&drop"
function Addwhycooseus() {
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
                  <Inputbox label={'Title'} Placeholder={'Title'} inputType={'Text'} />
                  <Inputbox label={'Order'} Placeholder={'Order'} inputType={'number'} />
                  <Inputbox label={'Description'} Placeholder={''} inputType={'text'} />
                </div>
              </div>
              <PurpleButton BtnName={'Add Sub Category'} />
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Addwhycooseus