import { Button, CardContent, TextField, Typography } from "@mui/material";
import Card from "@mui/material/Card";

const CardDemo = ({ name, title, age, handleDelete, handleChange }) => {
  return (
    <div style={{ margin: "5%" }}>
      <Card sx={{ maxWidth: 200 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Name : {name}
          </Typography>
          <Typography variant="h5" component="div">
            USerName : {title}
          </Typography>
          <input value={name} onChange={handleChange} />
          <Typography variant="h5" component="div">
            Zipcode :{age}
          </Typography>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardDemo;
