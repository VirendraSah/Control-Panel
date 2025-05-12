import { MainTable } from '../../Common/Table'

function Contactenquiry() {
  let Thobj = {
    TableHeading: "Contact Enquiry Management",
    thName: "User Info",
    thInfo: "	Subject",
    thcontact: "Message"
  }

  let Tbobj = [
    {
      Name: "Neil Sims",
      email: "xyz@gmail.com",
      Mobilenumber: "9876543210",
      button: "green"
    },
    {
      Name: "Neil Sims",
      email: "xyz@gmail.com",
      Mobilenumber: "9876543210",
      button: "red"
    }
  ]
  return (
    <>
      <MainTable ThData={Thobj} TBody={Tbobj} />
    </>
  )
}

export default Contactenquiry