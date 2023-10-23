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
import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export default function BasicTable() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/product");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  // useEffect(() => {
  //   //   code will run when the component is mounted.

  //   // Fetch user information

  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) =>
  //       // Update the state with fetched data
  //       setData(data)
  //     );

  //   // / This code will also run before the component is unmounted
  //   return () => {
  //     // Clean up any resources or subscriptions here
  //   };
  // }, []); // The empty dependency array ensures the effect runs only once

  return (
    <>
        <TableContainer component={Paper}>
          <Box>
            <Button variant="contained" color="primary">
              <Link to={"/addProduct"}>Add Product</Link>
            </Button>
          </Box>
          <Box>
            <TextField
              // value={searchFilter}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search}
          </Box>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product </TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Description</TableCell>
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
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">{row.category}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <Button variant="contained" color="primary">
                    EDIT
                  </Button>
                  <Button variant="contained" color="error">
                    DELETE
                  </Button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </>
  );
}
