// Import packages
import express from "express";
import expressLayout from "express-ejs-layouts";
import methodOverride from "method-override";
import mongoose from "mongoose";
import passport from "passport";
import LocalStrategy from "passport-local";
import bcrypt from "bcrypt";
import session from "express-session";
import dotenv from "dotenv";
import flash from "connect-flash";
import axios from "axios";
import nodemailer from "nodemailer";

dotenv.config();
const app = express();

// IMPORT CONFIG
import db from './config/db.js'

db()

app.set("view engine", "ejs");
app.set("layout", "layouts/layout");
app.use(expressLayout);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


// IMPORT ROUTES
import main from './routes/main.js'
import auth from './routes/auth.js'
import blog from './routes/blog.js'

// USE ROUTES
app.use('/', main)
app.use('/', auth)
app.use('/blog', blog)


// APP LISTEN
app.listen(process.env.PORT, () => console.log(`Server started at ${process.env.PORT}`))