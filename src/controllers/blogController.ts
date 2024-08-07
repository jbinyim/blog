import expressAsyncHandler from "express-async-handler";
import Blog, { IBlog } from "../models/blogModel";

// 새 블로그 추가
export const postNewBlog = expressAsyncHandler(async (req, res) => {
  const { title, text, img, youtube } = req.body;
  try {
    const newBlog: IBlog = await Blog.create({ title, text, img, youtube });
    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: "err" });
  }
});

// 모든 블로그 가져오기
export const getAllBlog = expressAsyncHandler(async (req, res) => {
  const blog = await Blog.find();
  res.status(200).json(blog);
});

// 블로그 상세보기
export const getSeeBlog = expressAsyncHandler(async (req, res) => {
  const seeBlog = await Blog.findById(req.params.id);
  res.status(200).json(seeBlog);
});
