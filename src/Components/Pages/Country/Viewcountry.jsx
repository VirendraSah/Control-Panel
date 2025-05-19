import { MainTable } from "../../Common/Table"

function Viewcountry() {
  let TableHeading = "View Country";
  let Thobj = ["Country Name", "Order"]

  let Tbobj = [
    {
      Name: "Neil Sims",
      Mobilenumber: "1",
      status: "active"
    },
    {
      Name: "Neil Sims",
      Mobilenumber: "1",
      status: "Deactive"
    }
  ]
  return (
    <div>
      <MainTable ThData={Thobj} TBody={Tbobj} THeading={TableHeading}/>
    </div>
  )
}

export default Viewcountry