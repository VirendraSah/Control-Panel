import { MainTable } from '../../Common/Table'

function Newsletter() {
  let Thobj = {
    TableHeading: "Newsletters Management",
    thName: "Name",
    thInfo: "Email Id",
    thcontact: "Mobile Number"
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

export default Newsletter