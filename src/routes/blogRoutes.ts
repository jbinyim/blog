import express from "express";
import {
  getAllBlog,
  postNewBlog,
  getSeeBlog,
  putEditBlog,
  deleteBlog,
} from "../controllers/blogController";

const router = express.Router();

router.route("/blogs").get(getAllBlog).post(postNewBlog);

router.route("/seemore/:id").get(getSeeBlog);

router.route("/edit/:id").get(getSeeBlog).put(putEditBlog).delete(deleteBlog);

export default router;
