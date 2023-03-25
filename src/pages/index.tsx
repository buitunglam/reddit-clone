import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {
  Box,
  Container,
  createTheme,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useUser } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { Post, ListPostsQuery } from "@/API";
import { API } from "aws-amplify";
import { listPosts } from "@/graphql/queries";
import PostPreview from "@/components/PostPreview";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/SideBar";
import MainContain from "@/components/MainContain";
import RightBar from "@/components/RightBar";

export default function Home() {
  const { user } = useUser();
  const [posts, setPosts] = useState<Post[]>([]);
  const [mode, setMode] = useState("dark");
  console.log("user sign in....", user);

  useEffect(() => {
    const fetchPostFromApi = async (): Promise<Post[]> => {
      try {
        const getAllPosts = (await API.graphql({ query: listPosts })) as {
          data: ListPostsQuery;
          errors: any[];
        };
        console.log("getAllPosts...", getAllPosts);

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

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color="text.primary">
        <NavBar />
        <Stack direction="row">
          {/* {posts.map((post) => (
        <PostPreview post={post} key={post?.id} />
      ))} */}
          {/* <PostPreview post={{}} /> */}
          {/* Side bar */}
          <Sidebar />
          <MainContain />
          <RightBar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
