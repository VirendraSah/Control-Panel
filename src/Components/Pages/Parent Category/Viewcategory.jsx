import { MainTable } from "../../Common/Table"
import isoImg from '../../../assets/iso.webp';
function Viewcategory() {
  let Thobj = {
    TableHeading: "View Category",
    thName: "Name",
    thInfo: "Image",
    thcontact: "Order"
  }

  let Tbobj = [
    {
      Name: "Neil Sims",
      email: { type: "image", value: isoImg },
      Mobilenumber: "1",
      button: "green"
    },
    {
      Name: "Neil Sims",
      email: { type: "image", value: isoImg },
      Mobilenumber: "1",
      button: "red"
    }
  ]
  return (
    <>
      <MainTable ThData={Thobj} TBody={Tbobj} />
    </>
  )
}

export default Viewcategory