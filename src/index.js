const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/v1", require("./router/index"));

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
