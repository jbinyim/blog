import express from "express";
import {
  getAllBlog,
  postNewBlog,
  getSeeBlog,
} from "../controllers/blogController";

const router = express.Router();

router.route("/blogs").get(getAllBlog).post(postNewBlog);

router.route("/seemore/:id").get(getSeeBlog);

export default router;
