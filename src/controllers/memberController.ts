import expressAsyncHandler from "express-async-handler";
import Member, { IMember } from "../models/memberModel";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// 회원가입정보 가져오기
export const getMember = expressAsyncHandler(async (req, res) => {
  const member = await Member.find();
  res.status(200).json(member);
});

// 회원가입 정보 저장하기
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

export const getLogin = expressAsyncHandler(async (req, res) => {
  const member = await Member.find();
  res.status(200).json(member);
});

// 로그인하기
export const postLogin = expressAsyncHandler(async (req, res) => {
  const { loginId, loginPw } = req.body;

  const member = await Member.findOne({ id: loginId });

  if (!member || !(await bcrypt.compare(loginPw, member.pw))) {
    res.status(400).json({ message: "로그인 정보가 일치하지 않습니다." });
  }

  const token = jwt.sign({ id: member?.id }, "your_secret_key", {
    expiresIn: "1h",
  });

  res.status(200).json({ token });
});
