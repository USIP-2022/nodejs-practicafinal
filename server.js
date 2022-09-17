const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT;
const host = process.env.HOST;
mongoose.connect(process.env.DATABASE, {}).then((con) => {
  console.log("Connected to mongo");
});
app.listen(port, () => {
  console.log(`App running on ${host}:${port}`);
});
