import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import api from "../../api/api";
import { Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const Employee = () => {
  const [employees, setEmployees] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await api.get("/employee");
        setEmployees(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEmployee();
  }, []);

  const editEmployee = (id) => {
    navigate("/employee/edit/" + id);
  };
  const deleteEmployee = (id) => {};
  const detailEmployee = (empid) => {
    navigate("/employee/detail/"+ empid);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Box>
          <Button variant="contained" color="primary">
            <Link to={"/employee/create"}>Add New </Link>
          </Button>
        </Box>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Employee </TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees &&
              employees.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                  <TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          editEmployee();
                        }}
                      >
                        EDIT
                      </Button>
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                          deleteEmployee();
                        }}
                      >
                        DELETE
                      </Button>
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        variant="contained"
                        color="warning"
                        onClick={() => {
                          detailEmployee();
                        }}
                      >
                        DETAILS
                      </Button>
                    </TableCell>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Employee;
