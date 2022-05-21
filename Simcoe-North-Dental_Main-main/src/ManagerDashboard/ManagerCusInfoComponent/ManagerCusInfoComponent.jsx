import { useParams, Link, useHistory } from "react-router-dom";
import useSWR from "swr";
import { Container } from "react-bootstrap";
import './ManagerCusInfoComponent.css';
import UserInfoComponent from "../../DashboradPage/UserInfoComponent/UserInfoComponent";



export default function ManagerCusInfoComponent() {
    const { id } = useParams();
    console.log(`user-${id}`);
    const { data: user, error } = useSWR(`https://db-customer-snd.herokuapp.com/api/customers/${id}`);
    let history = useHistory();
    //console.log(user);

    const back = () => {
        history.push("/manager")
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
        return (
            <div className="dashboard-container">
                <main className="dashboard-main ">
                    <Container>
                        <div className="dashboard-pic">
                            <h2 className="dashboard-pic-word">Hello, Administrator<h5><br/><span>{first_name}</span>'s information</h5></h2>
                        </div>
                        <div className="dashboard-contain managercus" >
                            <div className="dashboard-info">
                                <UserInfoComponent data={data} />
                                <Link to={{ pathname: `/manager/customer/${id}/update`, state: {user: data} }}>Update Info</Link>
                            </div>
                        </div>
                    </Container>
                </main>

                <div className="logoutBtn">
                    <button  onClick={back}>BACK</button>
                </div>
            </div>
        );
    
}


