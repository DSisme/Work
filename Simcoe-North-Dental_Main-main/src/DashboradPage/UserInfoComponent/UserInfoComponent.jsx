import './UserInfoComponent.css'

export default function UserInfoComponent({ data }) {
    console.log(data);
    const { first_name, last_name, email_address, address, cell_phone, customer_id, doctor_id } = data;
    return (
        <div>
            <div>
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
              
                </ul>
            </div>
            <div>
                {doctor_id === null || customer_id === null? (
                    <p></p>
                ) : (
                    <p>Doctor Information</p>
                )}
            </div>
            <div>
                <h3>Contact Information</h3>
                <ul className="user-info-li">
                    <li className="user-infor-lii">
                        <div className="user-info-div">Phone Number</div>
                        <div className="user-info-divInfo">{cell_phone}</div>
                    </li>
                    <li className="user-infor-lii2">
                        <div className="user-info-div">Address</div>
                        <div className="user-info-divInfo">{address}</div>
                    </li>
                </ul>
            </div>
        </div>
        
    );
}