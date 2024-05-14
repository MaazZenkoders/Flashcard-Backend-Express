const express = require("express");
const router = require("./src/routes/flashcard.route");
const app = express();
const port = 3000;
app.use(express.json());

app.use("/api/", router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
