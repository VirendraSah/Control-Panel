import { Inputbox } from "../../Common/FormElement"
import { PurpleButton } from "../../Common/FormElement"
import MyDropzone from "../../Common/Drag&drop"
import { Selectinput } from "../../Common/FormElement"
function Addsubcategory() {
  let SelectInputValue=["Men's",'Women','Sale']
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
                  <Selectinput  label={'Parent Category Name'} selected={'Select Category'} value={SelectInputValue}/>
                  <Inputbox label={'Category Name'} Placeholder={'Category Name'} inputType={'Text'} />
                  <Inputbox label={'Order'} Placeholder={'Category order...'} inputType={'Number'} />
                </div>
              </div>
              <PurpleButton BtnName={'Add Sub Category'} />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Addsubcategory