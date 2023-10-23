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
import { Box, Button, IconButton, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

export default function CustomTable() {
  const [data, setData] = useState([]);
  const [dropDown, setDropDown] = useState(true);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:8080/product")
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(data);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                Product
                {
                  <IconButton onClick={handleDropDown}>
                    {dropDown ? (
                      <KeyboardDoubleArrowUpIcon fontSize="small" />
                    ) : (
                      <KeyboardDoubleArrowDownIcon fontSize="small" />
                    )}
                  </IconButton>
                }
              </TableCell>
              <TableCell align="center">
                Title
                {
                  <IconButton onClick={handleDropDown}>
                    {dropDown ? (
                      <KeyboardDoubleArrowUpIcon fontSize="small" />
                    ) : (
                      <KeyboardDoubleArrowDownIcon fontSize="small" />
                    )}
                  </IconButton>
                }
              </TableCell>
              <TableCell align="center">
                Category
                {
                  <IconButton onClick={handleDropDown}>
                    {dropDown ? (
                      <KeyboardDoubleArrowUpIcon fontSize="small" />
                    ) : (
                      <KeyboardDoubleArrowDownIcon fontSize="small" />
                    )}
                  </IconButton>
                }
              </TableCell>
              <TableCell align="center">
                Price
                {
                  <IconButton onClick={handleDropDown}>
                    {dropDown ? (
                      <KeyboardDoubleArrowUpIcon fontSize="small" />
                    ) : (
                      <KeyboardDoubleArrowDownIcon fontSize="small" />
                    )}
                  </IconButton>
                }
              </TableCell>
              <TableCell align="center">
                Description
                {
                  <IconButton onClick={handleDropDown}>
                    {dropDown ? (
                      <KeyboardDoubleArrowUpIcon fontSize="small" />
                    ) : (
                      <KeyboardDoubleArrowDownIcon fontSize="small" />
                    )}
                  </IconButton>
                }
              </TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="center">{row.title}</TableCell>
                <TableCell align="center">{row.category}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.description}</TableCell>
                <TableCell align="center">
                  <Button variant="contained" color="primary">
                    EDIT
                  </Button>
                  <Button variant="contained" color="error" sx={{ m: 1 }}>
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
