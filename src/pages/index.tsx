import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Container, Typography } from "@mui/material";
import { useUser } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { Post, ListPostsQuery } from "@/API";
import { API } from "aws-amplify";
import { listPosts } from "@/graphql/queries";
import PostPreview from "@/components/PostPreview";

export default function Home() {
  const { user } = useUser();
  const [posts, setPosts] = useState<Post[]>([]);

  console.log("user sign in....", user);

  useEffect(() => {
    const fetchPostFromApi = async (): Promise<Post[]> => {
      try {
        const getAllPosts = (await API.graphql({ query: listPosts })) as {
          data: ListPostsQuery;
          errors: any[];
        };
        if (getAllPosts?.data) {
          setPosts(getAllPosts?.data?.listPosts?.items as Post[]);
          return getAllPosts?.data?.listPosts?.items as Post[];
        } else {
          throw new Error("Could not get posts");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchPostFromApi();
  }, []);

  return (
    <Container maxWidth="md">
      {posts.map((post) => (
        <PostPreview post={post} key={post?.id} />
      ))}
    </Container>
  );
}
