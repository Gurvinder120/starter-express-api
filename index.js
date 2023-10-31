const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

PORT = 3000;

app.post("/demo", async (req, res) => {
    res.send("hELOO");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
