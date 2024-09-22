import { ApolloError } from "@apollo/client";
import { ChangeEventHandler, FormEventHandler } from "react";

export interface IAuthTile {
  password: string,
  email: string;
  setEmail: ChangeEventHandler<HTMLInputElement>;
  setPassword: ChangeEventHandler<HTMLInputElement>;
  handleLogin: FormEventHandler<HTMLFormElement>;
  error: ApolloError | undefined;
}