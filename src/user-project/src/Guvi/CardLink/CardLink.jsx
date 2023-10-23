import React from "react";
import styles  from  './CardLink.module.css'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const CardLink = ({ name, info, link }) => {
  console.log(styles);
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          // image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info}
          </Typography>
        </CardContent>
        <CardActions>
          <a href={link}>
            <Button size="small">Share </Button>
            <Button size="small">Learn More </Button>
          </a>
        </CardActions>
      </Card>
      <div className={styles.container}>
        Hi I am Dinakaran Danny
      </div>
      <div className={styles.cardValue}>
        Hi I am Dinakaran Danny King
      </div>
    </>
  );
};

export default CardLink;
