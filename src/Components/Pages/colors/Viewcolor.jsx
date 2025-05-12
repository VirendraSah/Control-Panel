import { MainTable } from "../../Common/Table"

function Viewcolor() {
  let Thobj = {
    TableHeading: "View Color",
    thName: "Color Name",
    thInfo: "Code",
    thcontact: "Order"
  }

  let Tbobj = [
    {
      Name: "Red",
      email: "#er33rv",
      Mobilenumber: "1",
      button: "green"
    }
  ]
  return (
    <>
      <MainTable ThData={Thobj} TBody={Tbobj} />
    </>
  )
}

export default Viewcolor