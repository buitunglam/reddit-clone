import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Checkbox, Input, Button, Grid, Box } from "@mui/material";
import { Auth } from "aws-amplify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

type Props = {};
interface IFormInput {
  username: string;
  password: string;
}

const Login = (props: Props) => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log({ data, errors });
    await onLogin(data);
  };

  const onLogin = async (data: IFormInput) => {
    const { username, password } = data;
    try {
      const user = await Auth.signIn({
        username,
        password,
      });
      console.log("user log in...", user);
      if (user) {
        router.push("/");
      }
    } catch (error) {
      console.log("error signing up:", error);
      throw error;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{
          marign: "auto",
        }}
      >
        <Grid item>
          <TextField
            id="username"
            label="Username"
            type={"text"}
            variant="outlined"
            error={errors.username ? true : false}
            helperText={errors.username ? errors.username.message : null}
            {...register("username", {
              required: { value: true, message: "Please enter a username." },
              minLength: {
                value: 3,
                message: "Please enter a username between 3-6 characters",
              },
              maxLength: {
                value: 16,
                message: "Please enter a username between 3-6 characters",
              },
            })}
          />
        </Grid>

        <Grid item>
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            error={errors.password ? true : false}
            helperText={errors.password ? errors.password.message : null}
            {...register("password", {
              required: { value: true, message: "Please enter a password." },
              minLength: {
                value: 8,
                message: "Please enter a strong password",
              },
            })}
          />
        </Grid>

        <Grid>
          <Button variant="outlined" type="submit">
            Login
          </Button>
        </Grid>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Grid>
    </form>
  );
};

export default Login;
