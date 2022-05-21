import { Table } from "react-bootstrap";
import useSWR from "swr";

export default function PatientsList({ emp_id }) {
    console.log(emp_id);
    
    const { data: customerList, error } = useSWR(`https://db-customer-snd.herokuapp.com/api/customers/doctors/${emp_id}`);
    console.log(customerList);
    if(error)
        return <h1>Error</h1>;
    if(!customerList){
        return <h1>Loading...</h1>;
    }else{
    return(
       <div>
           <Table striped>
               <thead>
                    <tr>
                        <th>Patients ID</th>
                        <th>Name</th>
                    </tr>
               </thead>
               <tbody>
                   {
                        customerList.customers.map(item =>
                            <tr key={item._id}>
                                <td>{item.customer_id}</td>
                                <td>{item.first_name} {item.last_name}</td>
                            </tr> 
                        )
                   }
               </tbody>
           </Table>
       </div> 
    );}
}