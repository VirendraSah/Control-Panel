import { Inputbox } from "../../Common/FormElement"
import { PurpleButton } from "../../Common/FormElement"
import MyDropzone from "../../Common/Drag&drop"
function Addcategory() {
  return (
    <>
      <section className='px-5'>
        <div className='border rounded'>
          <div className='border-b rounded-t py-3 px-2 bg-[#f1f5f9]'>
            <div className='w-full text-[20px] font-semibold leading-7'>Add Category</div>
          </div>
          <div className='py-2'>
            <form action="">
              <div className="flex w-full">
                <MyDropzone label={'Category Image'} />
                <div className="w-full">
                  <Inputbox label={'Color Name'} Placeholder={'Enter color name...'} inputType={'Text'} />
                  <Inputbox label={'Order'} Placeholder={'Enter order...'} inputType={'Number'} />
                </div>
              </div>
              <PurpleButton BtnName={'Add Color'} />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Addcategory