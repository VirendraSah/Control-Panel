import { MainTable } from "../../Common/Table"
import isoImg from '../../../assets/iso.webp';

function Viewtestimonial() {
  let TableHeading = "View Testimonial";

  let Thobj = ["Title", "Image" ,"Designation", "Rating" ,"order"]

  let Tbobj = [
    {
      Name: "Neil Sims",
      Image: isoImg,
      Designation: "CEO Of SunPark",
      Rating: "5",
      Order: "1",
      status: "active"
    },
    {
      Name: "Neil Sims",
      Image: isoImg,
      Designation: "CEO Of SunPark",
      Rating: "5",
      order: "1",
      status: "Deactive"
    }
  ]
  return (
    <MainTable ThData={Thobj} TBody={Tbobj} THeading={TableHeading} />
  )
}

export default Viewtestimonial