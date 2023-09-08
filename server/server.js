const express = require("express");
const cors = require("cors");

const postsRoutes = require("./routes/posts");

const app = express();
const port = process.env.PORT || 3003;

app.use(express.json());
app.use(cors());

app.use("/api/posts", postsRoutes);

app.get("/", (req, res) => {
  res.send("root page");
});

app.listen(port, () => {
  console.log(" the server works");
});
