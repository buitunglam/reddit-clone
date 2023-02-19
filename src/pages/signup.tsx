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
  email: string;
  password: string;
  code: string;
}

const SignUp = (props: Props) => {
  const [showCode, setShowCode] = useState<boolean>(false);
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
    if (showCode) {
      onConfirmCode(data);
    } else {
      await onSignUp(data);
    }
  };

  const onSignUp = async (data: IFormInput) => {
    const { username, password, email } = data;
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: false,
        },
      });
      console.log("user sign in...", user);
      if (user) {
        setShowCode(true);
        toast.success("Signup success!");
      }
    } catch (error) {
      console.log("error signing up:", error);
      throw error;
    }
  };

  const onConfirmCode = async (data: IFormInput) => {
    try {
      const { username, code, password } = data;
      await Auth.confirmSignUp(username, code);
      const amplifyUser = await Auth.signIn(username, password);
      console.log("success...", amplifyUser);
      if(amplifyUser){
        router.push('/');
      }
    } catch (error) {
      throw new Error('Something when wrong :(')
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
            id="email"
            label="Email"
            type={"email"}
            variant="outlined"
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email.message : null}
            {...register("email", {
              required: { value: true, message: "Please enter a email." },
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
        {showCode ? (
          <Grid item>
            <TextField
              id="code"
              label="Verify Code"
              type={"text"}
              variant="outlined"
              error={errors.code ? true : false}
              helperText={errors.code ? errors.code.message : null}
              {...register("code", {
                required: { value: true, message: "Please enter a username." },
                minLength: {
                  value: 6,
                  message: "Please enter 6 characters",
                },
                maxLength: {
                  value: 6,
                  message: "Please enter 6 characters",
                },
              })}
            />
          </Grid>
        ) : null}
        <Grid>
          <Button variant="outlined" type="submit">
            {showCode ? "Confirm Code" : "Submit"}
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

export default SignUp;
