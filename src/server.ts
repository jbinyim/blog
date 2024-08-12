import express from "express";
import dbConnect from "./config/dbConnect";
import cors from "cors";
import blogRoutes from "./routes/blogRoutes";
import memberRoutes from "./routes/memberRoutes";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();

app.use("/tail", blogRoutes);
app.use("/member", memberRoutes);

// app.get("/", (req, res) => {
//   res.send("hello word");
// });

// app.use(express.static(path.join(__dirname, "../front/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../front/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`서버 실행 중 ${PORT}`);
});
