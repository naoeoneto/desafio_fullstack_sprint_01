import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { loginRouter } from "./routers/login.router";
import { userRouter } from "./routers/user.router";
import { contactRouter } from "./routers/contact.router";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(cors());
app.use("/login", loginRouter);
app.use("/users", userRouter);
app.use("/contacts", contactRouter);
