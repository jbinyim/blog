import expressAsyncHandler from "express-async-handler";
import Blog, { IBlog } from "../models/blogModel";

export const postNewBlog = expressAsyncHandler(async (req, res) => {
  const { title, text, img, youtube } = req.body;
  try {
    const newBlog: IBlog = await Blog.create({ title, text, img, youtube });
    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: "err" });
  }
});

export const getAllBlog = expressAsyncHandler(async (req, res) => {
  const blog = await Blog.find();
  res.status(200).json(blog);
});
