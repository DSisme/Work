import { useParams, Link } from "react-router-dom";
import useSWR from "swr";
import { useState } from "react";
import { Container } from "react-bootstrap";
import '../DashboradPage/dashboard.css';
import './doctorDashboard.css';

import DoctorAppointmentListComponent from "./DoctorAppointmentListComponent/DoctorAppointmentListComponent";
import PatientsList from "./PatientsListComponent/PatientsList";

export default function DoctorDashboard() {
    const { id } = useParams();
    console.log(`user-${id}`);
    const { data: user, error } = useSWR(`https://test-doctor-api.herokuapp.com/api/doctors/${id}`);
    const [redirect, setRedirect] = useState(false);
 
    console.log(user);

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

    const { first_name, last_name, email_address, cell_phone, emp_id } = user.doctors;
    const data = {
        first_name: first_name,
        last_name: last_name,
        email_address: email_address,
        cell_phone: cell_phone,
        emp_id: emp_id
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
                            <h2 className="dashboard-pic-word">Hello, Dr. {first_name} {last_name}</h2>
                        </div>
                        <div className="dashboard-contain">
                            <div className="dashboard-info-doctor">
                                <h3>Basic Information</h3>
                                <ul className="user-info-li">
                                    <li className="user-infor-lii">
                                        <div className="user-info-div">Full Name</div>
                                        <div className="user-info-divInfo">{first_name} {last_name}</div>
                                    </li>
                                    <li className="user-infor-lii">
                                        <div className="user-info-div">Email Address</div>
                                        <div className="user-info-divInfo">{email_address}</div>
                                    </li>
                                    <li className="user-infor-lii2">
                                        <div className="user-info-div">ID</div>
                                        <div className="user-info-divInfo">
                                            <p className="user-info-p">{emp_id}</p>
                                        </div>
                                    </li>
                                    <li className="user-infor-lii">
                                        <div className="user-info-div">Phone Number</div>
                                        <div className="user-info-divInfo">{cell_phone}</div>
                                    </li>
                                </ul>
                                
                                <Link to={{ pathname: `/dashboard/doctor/${id}/update`, state: {user: data} }}>Update Info</Link>
                                <p>-----------------------</p>
                                <h3>My Patients</h3>
                                <PatientsList emp_id={emp_id} />
                            </div>


                            <div className="dashboard-appointment-doctor">
                                <h3>My Appointments</h3>
                                <DoctorAppointmentListComponent emp_id={emp_id} />
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