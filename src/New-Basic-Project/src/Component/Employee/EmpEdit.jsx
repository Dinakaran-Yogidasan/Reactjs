import axios from 'axios';
import React, { useState } from 'react'
import api from "../../api/api";


const EmpEdit = ({employees}) => {
    const [name, setName] = useState(employees.name);
  const [email, setEmail] = useState(employees.email);
  const [phone, setPhone] = useState(employees.phone);

  const handleUpdate = async () => {
    try {
      const response = await api.put(`/employee/${employees.id}`, {
        name,
        email,
        phone
      });
      alert('User updated successfully!');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
        <button onClick={handleUpdate}>Edit</button>
    </div>
  )
}

export default EmpEdit