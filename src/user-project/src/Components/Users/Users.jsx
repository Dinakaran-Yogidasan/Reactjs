import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`https://dummyjson.com/users`)
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData.users);
        console.log(actualData.users);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const deleteUser = () => {
    fetch("https://dummyjson.com/users/1", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(console.log);
  };

  useEffect(() => {
    if (search !== "") {
      fetch(`https://dummyjson.com/users/search?q= ${search}`)
        .then((res) => res.json())
        .then((searchData) => {
          setSearch(searchData.users);
          console.log(searchData.users);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [search]);

  return (
    <>
      <TableContainer component={Paper}>
        <Box>
          <Button variant="contained" color="primary">
            {/* <Link to={"/addProduct"}>Add Product</Link> */}
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
              <TableCell>username </TableCell>
              <TableCell align="center">firstName</TableCell>
              <TableCell align="center">lastName</TableCell>
              <TableCell align="center">age</TableCell>
              <TableCell align="center">email</TableCell>
              <TableCell align="center">domain</TableCell>
              <TableCell align="center">image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.username}
                </TableCell>
                <TableCell align="right">{row.firstName}</TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.domain}</TableCell>
                <TableCell align="right">
                  <img src={row.image} alt="" height={30} />
                </TableCell>
                {/* <Button variant="contained" color="primary">
                  EDIT
                </Button>
                <Button variant="contained" color="error">
                  DELETE
                </Button> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Users;
