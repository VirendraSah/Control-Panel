import { MainTable } from "../../Common/Table"
function Viewmaterials() {
  let Thobj = {
    TableHeading: "View Material",
    thName: "Material Name",
    thInfo: "",
    thcontact: "Order"
  }
    let Tbobj = [
      {
        Name: "Neil Sims",
        email: "",
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

export default Viewmaterials