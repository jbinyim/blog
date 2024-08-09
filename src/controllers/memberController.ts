import expressAsyncHandler from "express-async-handler";
import Member, { IMember } from "../models/memberModel";
const bcrypt = require("bcrypt");

export const getMember = expressAsyncHandler(async (req, res) => {
  const member = await Member.find();
  res.status(200).json(member);
});

export const postNewMember = expressAsyncHandler(async (req, res) => {
  const { id, pw } = req.body;

  if (!id || !pw) {
    res.status(400).json({ message: "err" });
  }

  const salt = await bcrypt.genSalt(10);

  const hashedPw = await bcrypt.hash(pw, salt);

  const member: IMember = await Member.create({ id, pw: hashedPw });

  res.status(200).json(member);
});
