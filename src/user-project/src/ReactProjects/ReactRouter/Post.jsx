import { Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Post = (props) => {
  const { id } = useParams();
  // const id = props.match.params.post_id
  // const id  = props.match.params.post_id
  // const [post, setPost] = useState([]);

  // async function getUser(id) {
  //   try {
  //     const response = await axios.get(
  //       `https://jsonplaceholder.typicode.com/posts/${id}`
  //     );
  //     setPost(response.data);
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // useEffect(() => {
  //   getUser();
  // }, []);

  const [post, setPost] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log(res.data);
      setPost(res.data);
    })();
  }, []);
  return (
    <div>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {post.title}
            good Morning
          </Typography>
          <Typography variant="h5" component="div">
            {post.body}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Post;
