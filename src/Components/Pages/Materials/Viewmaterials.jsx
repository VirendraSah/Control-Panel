import { MainTable } from "../../Common/Table"
function Viewmaterials() {
  let TableHeading="View Material";
  let Thobj=["Material Name", "Order"]

    let Tbobj = [
      {
        Name: "Neil Sims",
        Mobilenumber: "1",
        status:"active"
      }
    ]
  return (
    <>
      <MainTable ThData={Thobj} TBody={Tbobj} THeading={TableHeading}/>
    </>
  )
}

export default Viewmaterials