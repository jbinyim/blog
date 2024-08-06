import express from "express";
import { getAllBlog, postNewBlog } from "../controllers/blogController";

const router = express.Router();

router.route("/blogs").get(getAllBlog).post(postNewBlog);

export default router;
