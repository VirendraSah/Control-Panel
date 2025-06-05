import { MainTable } from "../../Common/Table"

function Viewcolor() {
  let Thobj = ["View Color","Color Name","Code","Order"]

  let Tbobj = [
    {
      Name: "Red",
      email: "#er33rv",
      Mobilenumber: "1",
      order: "green",
      status:"active"
    }
  ]
  return (
    <>
      <MainTable ThData={Thobj} TBody={Tbobj} />
    </>
  )
}

export default Viewcolor