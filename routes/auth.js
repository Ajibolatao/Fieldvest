import express from "express";
const router = express.Router();

import {
  getRegister,
  getLogin,
} from "../controllers/main.js";

// ALL ROUTES
// INDEX
router.get("/register", getRegister);
router.get("/login", getLogin);


export default router;
