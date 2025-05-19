import { MainTable } from "../../Common/Table"

function Viewfaqs() {
  let TableHeading = "View Country";
  let Thobj = ["Question", "Answer", "Order"]

  let Tbobj = [
    {
      Question: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      Answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae adipisci explicabo molestias possimus quidem obcaecati deserunt vel, officiis, nobis facilis earum quaerat aut esse consequuntur ab praesentium eius suscipit natus!",
      Order: "1",
      status: "active"
    },
    {
      Question: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      Answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae adipisci explicabo molestias possimus quidem obcaecati deserunt vel, officiis, nobis facilis earum quaerat aut esse consequuntur ab praesentium eius suscipit natus!",
      Order: "1",
      status: "Deactive"
    }
  ]
  return (
      <MainTable ThData={Thobj} TBody={Tbobj} THeading={TableHeading}/>
  )
}

export default Viewfaqs