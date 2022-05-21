
import { Table } from "react-bootstrap";
import useSWR from "swr";

export default function UserAppointmentListComponent({ customer_id }) {
    console.log(customer_id);

    const { data: customerList, error } = useSWR(`https://db-customer-appointment-snd.herokuapp.com/api/customerData/customer/${customer_id}`);
    //customerList = customerList.values;
    //console.log(customerList.data);
    // customerList.array.forEach(element => {
    //     console.log(1);
    // });

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
                        <th>Doctor</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
               </thead>
               <tbody>
                   {
                        customerList.data.map(item =>
                            <tr key={item._id}>
                                <td>{item.emp_name}</td>
                                <td>{item.start.slice(0, 10)} / {item.start.slice(12,16)}</td>
                                <td>{item.type}</td>
                                <td>{item.title}</td>
                            </tr> 
                        )
                   }
               </tbody>
           </Table>
       </div> 
    );
    }
}