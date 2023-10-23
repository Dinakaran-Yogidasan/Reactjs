import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Modal from "@mui/material/Modal";
import Skeleton from "@mui/material/Skeleton";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import api from "../../api/api";
import { Rating } from "@mui/material";
// import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const titles = ["title", "description", "price", "brand", "category"];

export default function ProductsList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [formid, setFormid] = useState("");
  const [open, setOpen] = useState(false);
  const [editopen, setEditOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);
  //   const rows = useAppStore((state) => state.rows);
  //   const setRows = useAppStore((state) => state.setRows);
  //   const empCollectionRef = collection(db, "products");

  useEffect(() => {
    getProducts();
  }, []);

  //   const getProducts = async () => {
  //     // const data = await getDocs(empCollectionRef);
  //     // setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };\

  const getProducts = async () => {
    try {
      const response = await api.get("/products");
      setRows(response.data.products);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = async (id) => {
    try {
      const response = await api.delete(`/products/${id}`);
      setRows(response.data.products);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      getProducts();
    }
  };

  const editData = (id, title, price, category) => {
    const data = {
      id: id,
      title: title,
      price: price,
      category: category,
    };
    setFormid(data);
    handleEditOpen();
  };

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AddForm closeEvent={handleClose} rows={rows} setRows={setRows} />
          </Box>
        </Modal>
        <Modal
          open={editopen}
          onClose={handleEditClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <EditForm
              closeEvent={handleEditClose}
              fid={formid}
              rows={rows}
              setRows={setRows}
            />
          </Box>
        </Modal>
      </div>

      <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ padding: "2px" }}
        >
          Products List
        </Typography>
        <Divider />
        <Box height={15} />
        <Stack direction="row" spacing={2} className="my-2 mb-2">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={rows}
            sx={{ width: 300 }}
            onChange={(e, v) => filterData(v)}
            getOptionLabel={(rows) => rows.title || ""}
            renderInput={(params) => (
              <TextField {...params} size="small" label="Search Products" />
            )}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button
            variant="contained"
            endIcon={<AddCircleIcon />}
            onClick={handleOpen}
          >
            Add
          </Button>
        </Stack>
        <Box height={10} />
        {rows.length > 0 && (
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Title
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Price
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Category
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Rating
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Description
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Stock
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        <TableCell align="left">{row.title}</TableCell>
                        <TableCell align="left">{String(row.price)}</TableCell>
                        <TableCell align="left">{row.category}</TableCell>
                        <TableCell align="left">
                          <Stack spacing={1}>
                            <Rating
                              name="half-rating-read"
                              defaultValue={row.rating}
                              precision={0.5}
                              readOnly
                            />
                          </Stack>
                        </TableCell>
                        <TableCell align="left">{row.description}</TableCell>
                        <TableCell align="left">{row.stock}</TableCell>
                        <TableCell align="left">
                          <Stack spacing={2} direction="row">
                            <EditIcon
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              className="cursor-pointer"
                              onClick={() => {
                                editData(
                                  row.id,
                                  row.title,
                                  row.price,
                                  row.category
                                );
                              }}
                            />
                            <DeleteIcon
                              style={{
                                fontSize: "20px",
                                color: "darkred",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                deleteUser(row.id);
                              }}
                            />
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {rows.length === 0 && (
        <>
          <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
            <Box height={20} />
            <Skeleton variant="rectangular" width={"100%"} height={30} />
            <Box height={40} />
            <Skeleton variant="rectangular" width={"100%"} height={60} />
            <Box height={20} />
            <Skeleton variant="rectangular" width={"100%"} height={60} />
            <Box height={20} />
            <Skeleton variant="rectangular" width={"100%"} height={60} />
            <Box height={20} />
            <Skeleton variant="rectangular" width={"100%"} height={60} />
            <Box height={20} />
            <Skeleton variant="rectangular" width={"100%"} height={60} />
            <Box height={20} />
          </Paper>
        </>
      )}
    </>
  );
}
