import "dotenv/config";
import cors from "cors";
import express from "express";

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World! Guys!!");
});

const sum = (a, b) => a + b;

export default sum;

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}
