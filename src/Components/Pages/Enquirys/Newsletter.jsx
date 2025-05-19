import { MainTable } from '../../Common/Table'

function Newsletter() {
  let TableHeading="Newsletters Management";
  let Thobj=["Name","Email Id", "Mobile Number"]

    let Tbobj = [
      {
        Name: "Neil Sims",
        email: "xyz@gmail.com",
        Mobilenumber: "9876543210",
        status:"active"
      },
      {
        Name: "Neil Sims",
        email: "xyz@gmail.com",
        Mobilenumber: "9876543210",
        status:"Deactive"
      }
    ]
  return (
    <>
      <MainTable ThData={Thobj} TBody={Tbobj} THeading={TableHeading}/>
    </>
  )
}

export default Newsletter