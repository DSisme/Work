import { Scheduler } from "@aldabil/react-scheduler";

import useSWR from "swr";

export default function DoctorAppointmentListComponent({ emp_id }) {
    console.log(emp_id);

    const { data: customerList, error } = useSWR(`https://db-customer-appointment-snd.herokuapp.com/api/customerData/employee/${emp_id}`);
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
           <Scheduler
                view="month"
                events={
                    customerList.data.map(item =>
                        ({event_id: item.id,
                        title: `${item.customer_name}: ${item.title}`,
                        start: new Date(item.start),
                        end: new Date(item.end)}
                        )
                    )
                }
                fields={[
                    {
                        name: "customer_name",
                        type: "input",
                        config: {label: "patient name", required: true, errMsg: "Patient name is required!"}
                    },
                    {
                        name: "customer_id",
                        type: "input",
                        config: {label: "patient ID", required: true, min:4, errMsg: "Patient ID is required!"}
                    },
                    {
                        name: "emp_id",
                        type: "hidden",
                        default: emp_id,
                    },
                    {
                        name: "emp_name",
                        type: "hidden",
                        default: customerList.data[0].emp_name,
                    },
                    {
                        name: "type",
                        type: "input",
                        default: "online",
                        config: {label: "Type"}
                    },
                    {
                        name: "id",
                        type: "hidden",
                        default: parseInt((Math.random()*10000))
                    },
                ]}
                onConfirm={
                    async function(event, action){
                        if(action === "create"){
                            console.log(event);
                            fetch("https://db-customer-appointment-snd.herokuapp.com/api/customerData", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(event),
                            })
                            .then((res) => {
                                console.log(res.status);
                            })
                            .catch((err) => {
                                console.log("Error submitting form", err);
                            });
                        }else if(action === "edit"){
                            console.log(event);
                            fetch(`https://db-customer-appointment-snd.herokuapp.com/api/customerData/${event.event_id}`, {
                                method: "PUT",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(event),
                            })
                            .then((res) => {
                                console.log(res.status);
                
                            })
                            .catch((err) => {
                                console.log("Error submitting form", err);
                            });
                        }
                        return new Promise((res, rej) => {
                                res({
                                    ...event,
                                    event_id: event.event_id || Math.random()
                                });
                        });
                    }
                }
                onDelete={
                    function(deletedId){
                        console.log(deletedId);
                        fetch(`https://db-customer-appointment-snd.herokuapp.com/api/customerData/${deletedId}`, {
                                method: "DELETE",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            })
                            .then((res) => {
                                console.log(res.status);
                            })
                            .catch((err) => {
                                console.log("Error submitting form", err);
                            });

                        return new Promise((res, rej) => {
                            setTimeout(() =>{res(deletedId);}, 10)
                            
                        });
                    }
                }
            />

       </div> 
    );
    }
}