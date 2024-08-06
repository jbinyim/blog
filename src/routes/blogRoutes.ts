import express from "express";
import { getAllBlog } from "../controllers/blogController";

const router = express.Router();

router.route("/").get(getAllBlog);

export default router;
