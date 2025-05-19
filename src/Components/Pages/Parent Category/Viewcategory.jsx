import { MainTable } from "../../Common/Table"
import isoImg from '../../../assets/iso.webp';
function Viewcategory() {
  let TableHeading="View Category";
  
  let Thobj=["Name", "Image", "order"]

  let Tbobj = [
    {
      Name: "Neil Sims",
      Image: isoImg,
      order: "1",
      status: "active"
    },
    {
      Name: "Neil Sims",
      Image: isoImg ,
      order: "1",
      status: "Deactive"
    }
  ]
  return (
    <>
      <MainTable ThData={Thobj} TBody={Tbobj} THeading={TableHeading}/>
    </>
  )
}

export default Viewcategory