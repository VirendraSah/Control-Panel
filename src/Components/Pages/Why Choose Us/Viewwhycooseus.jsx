import { MainTable } from "../../Common/Table"
import isoImg from '../../../assets/iso.webp';

function Viewwhycooseus() {
  let TableHeading = "View Testimonial";

  let Thobj = ["Title", "Image" ,"Description	", "order"]

  let Tbobj = [
    {
      Name: "Neil Sims",
      Image: isoImg,
      Description: "CEO Of SunPark",
      Order: "1",
      status: "active"
    },
    {
      Name: "Neil Sims",
      Image: isoImg,
      Description: "CEO Of SunPark",
      order: "1",
      status: "Deactive"
    }
  ]
  return (
    <>
      <MainTable ThData={Thobj} TBody={Tbobj} THeading={TableHeading} />
    </>
  )
}

export default Viewwhycooseus