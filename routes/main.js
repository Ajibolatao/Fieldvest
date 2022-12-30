import express from "express";
const router = express.Router();

import {
  getIndex,
  getAbout,
  getSavings,
  getLoans,
  getOthers,
  getContact,
  getGallery,
  getMembers,
} from "../controllers/main.js";

// ALL ROUTES
// INDEX
router.get("/", getIndex);
router.get("/about", getAbout);
router.get("/savings", getSavings);
router.get("/loans", getLoans);
router.get("/others", getOthers);
router.get("/contact", getContact);
router.get("/gallery", getGallery);
router.get("/members", getMembers);

export default router;
