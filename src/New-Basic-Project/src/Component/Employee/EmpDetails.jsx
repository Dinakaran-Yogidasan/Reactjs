import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";

export const EmpDetails = () => {
  const { empid } = useParams();
  const [empDeails, setEmpDeails] = useState({});
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await api.put(`/employee/${empid}`);
        setEmpDeails(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEmployee();
  }, []);
  return (<div>
    <h1>The Employee name is :{empDeails.name}</h1>
  </div>);
};
