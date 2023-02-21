import { Post } from "@/API";
import { Grid } from "@mui/material";
import React, { ReactElement } from "react";

type Props = {
  post: Post;
};

const PostPreview = ({ post }: Props): ReactElement => {
  return (
    <Grid container direction="row" justifyContent="space-between">
      {/* Upvote / votes / downvote */}
      <Grid
        container
        direction="column"
        spacing={2}
        alignItems="center"
        style={{ maxWidth: 128 }}
      >
        <Grid container direction="column" alignItems="center">
          <Grid item>up vote</Grid>
          <Grid item>votes</Grid>
          <Grid item>down vote</Grid>
        </Grid>
      </Grid>
      {/* Content Preview */}
      <Grid item>
        <Grid container direction={"column"} alignItems="flex-start">
          <Grid item>rest of the content</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PostPreview;
