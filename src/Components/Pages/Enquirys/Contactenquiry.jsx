import { MainTable } from '../../Common/Table'

function Contactenquiry() {
  let TableHeading="Contact Enquiry Management";
  let Thobj=["User Info", "Subject", "Message"]

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
      status:"Deactive",
    }
  ]
  return (
    <>
      <MainTable ThData={Thobj} TBody={Tbobj} THeading={TableHeading} />
    </>
  )
}

export default Contactenquiry