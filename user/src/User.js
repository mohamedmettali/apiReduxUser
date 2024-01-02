import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap';


const User = ({ user }) => (
 
  <Card style={{ width: '25rem', height: '100%' }}>
 
  <Card.Body>
    <Card.Title>
      <h2>Name: {user.name}</h2>
    </Card.Title>
    <Card.Text>
      <p>User name: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Adress street: {user.address.street}</p>
      <p>adress geo: {user.address.geo.lat}</p>
  
    </Card.Text>
  </Card.Body>
</Card>
 

);

export default User;
