import { MainTable } from "../../Common/Table"
import isoImg from '../../../assets/iso.webp';

function Viewslider() {
  let TableHeading="View Slider";
  
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
    <div>
      <MainTable ThData={Thobj} TBody={Tbobj} THeading={TableHeading}/>
    </div>
  )
}

export default Viewslider