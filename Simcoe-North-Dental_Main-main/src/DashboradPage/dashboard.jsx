import { useParams, Link } from "react-router-dom";
//import { useEffect, useState } from "react";
import useSWR from "swr";
import { useState } from "react";
import { Container } from "react-bootstrap";
import './dashboard.css';
import UserInfoComponent from "./UserInfoComponent/UserInfoComponent";
import UserAppointmentListComponent from "./UserAppointmentListComponent/UserAppointmentListComponent";


export default function Dashboard() {
    const { id } = useParams();
    console.log(`user-${id}`);
    const { data: user, error } = useSWR(`https://db-customer-snd.herokuapp.com/api/customers/${id}`);
    const [redirect, setRedirect] = useState(false);
 
    //console.log(user);

    const logout = () => {
        localStorage.clear();
        localStorage.removeItem("RESULT");
        setRedirect(true);
      };


    if(error)
        return <h1>Error...</h1>;

    if(!user){
        return <h1>LOADING...</h1>
    }

    const { first_name, last_name, email_address, address, cell_phone, customer_id, doctor_id, auth_type } = user.customers;
    const data = {
        first_name: first_name,
        last_name: last_name,
        email_address: email_address,
        cell_phone: cell_phone,
        address: address || null,
        customer_id: customer_id || null,
        doctor_id: doctor_id || null,
        auth_type: auth_type || null
    };
    //console.log(data);

    if(redirect){
        return (
            <div className="goodbye">
                <a className="goodbye-text" href="/">
                    <h1>Goodbye {data.first_name}</h1>
                    <p>See you next time, take care!</p>
                </a>
            </div>
        );
    } else {
        return (
            <div className="dashboard-container">
                <main className="dashboard-main">
                    <Container>
                        <div className="dashboard-pic">
                            <h2 className="dashboard-pic-word">Hello, {first_name} {last_name}</h2>
                        </div>
                        <div className="dashboard-contain">
                            <div className="dashboard-info">
                                <UserInfoComponent data={data} />
                                <Link to={{ pathname: `/dashboard/${id}/update`, state: {user: data} }}>Update Info</Link>
                            </div>
                            <div className="dashboard-appointment">
                                <h3>My Appointments</h3>
                                <p>|</p>
                                <UserAppointmentListComponent customer_id={customer_id} />
                            </div>
                        </div>
                    </Container>
                </main>

                <div className="logoutBtn">
                    <button  onClick={logout}>LOGOUT</button>
                </div>
            </div>
        );
    }
}