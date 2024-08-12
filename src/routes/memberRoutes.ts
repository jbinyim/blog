import express from "express";
import {
  postNewMember,
  getMember,
  getLogin,
  postLogin,
} from "../controllers/memberController";

const router = express.Router();

router.route("/register").get(getMember).post(postNewMember);

router.route("/login").get(getLogin).post(postLogin);

export default router;
