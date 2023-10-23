import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data.slice(0, 5));
    })();
  }, []);

  const listMarkup =
    posts.length > 0 ? (
      posts.map((post) => (
        <Card sx={{ maxWidth: 600 }}>
          <CardContent key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <Typography variant="h5" gutterBottom>
                {post.title}
              </Typography>
            </Link>
            <Typography variant="h5" component="div">
              {post.body}
            </Typography>
          </CardContent>
        </Card>
      ))
    ) : (
      <div>
        <h1>Loding</h1>
      </div>
    );

  return (
    <div>
      <h1>
        {/* {posts.map((post) => (
          <li>{post.title}</li>
        ))} */}
        {listMarkup}
      </h1>
    </div>
  );
};

export default Home;
// https://jsonplaceholder.typicode.com/users
