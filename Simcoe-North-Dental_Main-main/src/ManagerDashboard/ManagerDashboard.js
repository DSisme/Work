import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, Table, Container } from "react-bootstrap";
import React from "react";
import "./ManagerDashboard.css";

function ManagerDashboard() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(null);
  const [redirect, setRedirect] = useState(false);

  let history = useHistory();

  const logout = () => {
    localStorage.clear();
    localStorage.removeItem("RESULT");
    setRedirect(true);
  };

  useEffect(() => {
    const url = "https://frozen-meadow-88258.herokuapp.com/api/customers/";

    setLoading(true);

    fetch(url)
      .then((res) => {
        if (!res) {
          throw new Error("Unable to find customers' information");
        }
        return res.json();
      })
      .then((result) => {
        setResults(result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (!results || loading) {
    return (
      <div className="ManagerDashboard">
        <div className="manager-content">
          <p>Loading Customers' information...</p>
        </div>
      </div>
    );
  }

  if (redirect) {
    return (
      <div className="goodbye">
        <a className="goodbye-text" href="/">
          <h1>Goodbye Administrator</h1>
          <p>See you next time, take care!</p>
        </a>
      </div>
    );
  }

  return (
    <div className="ManagerDashboard">
      <div className="manager-content">
        <Container>
          <Card>
            <Card.Header>
              <p>Customer List</p>
              <footer className="text-muted"></footer>
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Customer ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((customer) => (
                    <tr
                      key={customer._id}
                      onClick={() => {
                        history.push(`/manager/customer/${customer._id}`);
                      }}
                    >
                      <td>{customer._id}</td>
                      <td>{customer.first_name}</td>
                      <td>{customer.last_name}</td>
                      <td>{customer.email_address}</td>
                      <td>{customer.cell_phone}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Container>
        <div className="logoutBtn">
          <button onClick={logout}>LOGOUT</button>
        </div>
      </div>
    </div>
  );
}

export default ManagerDashboard;
