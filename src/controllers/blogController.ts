import expressAsyncHandler from "express-async-handler";
import Blog, { IBlog } from "../models/blogModel";

export const getAllBlog = expressAsyncHandler(async (req, res) => {
  const blog = await Blog.find();
  res.status(200).json(blog);
});
