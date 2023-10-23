import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import api from "../../api/api";
// import { collection, addDoc, getDocs } from "firebase/firestore";
// import { db } from "../firebase-config";
// import Swal from "sweetalert2";
// import { useAppStore } from "../appStore";

export default function AddForm({ closeEvent, rows, setRows }) {
  const [addForm, setAddForm] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    stock: "",
    rating: "",
  });

  const addFormData = async () => {
    try {
      const response = await api.post("/products/add", addForm);
      setAddForm(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
    closeEvent();
    console.log(addForm);
  };

  const uniqueOpenCategories = [
    ...new Set(rows.map((option) => option.category)),
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Add Product
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            error={false}
            id="name"
            name="title"
            value={addForm.title}
            onChange={handleChange}
            label="Name"
            size="small"
            sx={{ marginTop: "30px", minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="price"
            error={false}
            id="price"
            label="Price"
            type="number"
            value={addForm.price}
            onChange={handleChange}
            size="small"
            sx={{ minWidth: "100%" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupeeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            error={false}
            id="category"
            label="Category"
            select
            value={addForm.category}
            onChange={handleChange}
            size="small"
            sx={{ minWidth: "100%" }}
            name="category"
          >
            {uniqueOpenCategories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
          <Grid item xs={12}>
            <TextField
              error={false}
              id="Description"
              name="description"
              value={addForm.description}
              onChange={handleChange}
              label="Description"
              size="small"
              sx={{ marginTop: "30px", minWidth: "100%" }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="stock"
            id="stock"
            label="stock"
            type="number"
            value={addForm.stock}
            onChange={handleChange}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="rating"
            id="rating"
            label="rating"
            type="number"
            value={addForm.rating}
            onChange={handleChange}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button variant="contained" onClick={addFormData}>
              Submit
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
