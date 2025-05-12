import { MainTable } from '../../Common/Table'

function Viewuser() {
  let Thobj={
    TableHeading:"View User",
    thName: "Name", 
    thInfo: "Email Id",
    thcontact: "Mobile Number"
  }

  let Tbobj=[
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

export default Viewuser