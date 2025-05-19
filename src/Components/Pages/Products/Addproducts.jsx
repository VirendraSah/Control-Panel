import { Inputbox } from "../../Common/FormElement"
import { PurpleButton } from "../../Common/FormElement"
import MyDropzone from "../../Common/Drag&drop"
import { Selectinput } from "../../Common/FormElement"
import MyEditor from "../../Common/MyEditor"
function Addproducts() {

  let SelectInputValue = [
    ["Mobile Phones", 'Laptops', "Men's Wear"],
    ["Mobile Phones", 'Laptops', "Men's Wear", "Women Wear"],
    ["Mobile Phones", 'Laptops', "Men's Wear", "Women Wear"],
    ["Neem", 'Babul', "Neem", 'Babul', "Neem", 'Babul', "Neem", 'Babul'],
    ["Red", 'Blue', "Green", "Gray"],
    ["Featured", 'New Arrivals', "Onsale"],
    ["Yes", 'No'],
    ["Yes", 'No'],
    ["Yes", 'No']
  ]
  let label = [
    'Select Parent Category',
    'Select Sub Category',
    'Select Sub Sub Category',
    'Select Meterial',
    'Select Color',
    'Select Prodcut Type',
    'Is Best Selling',
    'Is Top Rated',
    'Is Upsell'
  ]
  return (
    <>
      <section className="w-full flex">
        <div className='py-2 w-full'>
          <form action="" className="flex flex-col gap-3 items-start justify-start">
            <div className="flex w-full">
              <div className="flex flex-col">
                <MyDropzone label={'Product Image'} />
                <MyDropzone label={'Back Image'} />
                <MyDropzone label={'Gallery Image'} />
              </div>
              <div className="w-full grid grid-cols-2 items-center justify-between h-max gap-3">
                <Inputbox label={'Prodct Name'} Placeholder={'Product Name'} inputType={'Text'} />
                {SelectInputValue.map((data, index) => {
                  return (
                    <>
                      <Selectinput label={label[index]} selected={'Nothing Selected'} value={data} />
                    </>
                  )
                })}
                <Inputbox label={'Actual Price'} Placeholder={'Actual Price'} inputType={'number'} />
                <Inputbox label={'Sale Price'} Placeholder={'Sale Price'} inputType={'number'} />
                <Inputbox label={'Total in Stocks'} Placeholder={'Total in Stocks'} inputType={'number'} />
                <Inputbox label={'Order'} Placeholder={'Order'} inputType={'number'} />
              </div>
            </div>
            <MyEditor />
            <PurpleButton BtnName={'Add Color'} />
          </form>
        </div>
      </section>
    </>
  )
}

export default Addproducts