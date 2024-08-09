import express from "express";
import { postNewMember, getMember } from "../controllers/memberController";

const router = express.Router();

router.route("/register").get(getMember).post(postNewMember);

export default router;
