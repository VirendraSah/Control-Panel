import { MainTable } from "../../Common/Table"
import isoImg from '../../../assets/iso.webp';

function Viewsubcategory() {
  let TableHeading="View Sub Category";
  
  let Thobj=["Parent Category Name", "Sub Category Name", "Image", "Order"]
  
    let Tbobj = [
      {
        parentcategoryname: "Shoe",
        subcategoryname: "Men",
        Image: isoImg ,
        order: "1",
        status: "active"
      }
    ]
  return (
    <>
      <MainTable ThData={Thobj} TBody={Tbobj} THeading={TableHeading}/>
    </>
  )
}

export default Viewsubcategory