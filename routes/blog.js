import express from "express";
const router = express.Router();

import { getBlog } from "../controllers/blog.js";

// ALL ROUTES
// INDEX
router.get("/", getBlog);


export default router;
