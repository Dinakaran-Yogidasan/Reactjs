import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const UserEdit = () => {
  const [modal, setModal] = useState(true);

  /* updating lastName of user with id 1 */
fetch('https://dummyjson.com/users/1', {
    method: 'PUT', /* or PATCH */
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      lastName: 'Owais'
    })
  })
  .then(res => res.json())
  .then(console.log);

  return (
    <div>
      <Dialog fullWidth open={modal} onClose={() => setModal(false)}>
        <DialogTitle>
          <Box mb="20px">
            <Typography
              variant="h1"
              fontWeight="bold"
              sx={{ m: "10 0 5px 10" }}
            >
              {/* {`${rowSelection.projectName}`} (edit) */}
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          {/* <EditProject
            projectId={rowSelection.projectId}
            handleUpdateProject={handleUpdateProject}
          /> */}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setModal(false)}
            color="error"
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            form="updateproject-form"
            color="primary"
            variant="contained"
          >
            Update User
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserEdit;
