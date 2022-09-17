const mongoose = require("mongoose");
process.on("uncaughtException", (err) => {
    console.log("uncaughtException", err);
    console.log("Shutting down");
    process.exit(1);
});
const app = require("./app");
const port = process.env.PORT;
const host = process.env.HOST;
mongoose.connect(process.env.DATABASE, {}).then((con) => {
    console.log("Connected to mongo");
});

const server = app.listen(port, () => {
    console.log(`App running on ${host}:${port}`);
});

process.on("unhandledRejection", (err) => {
    console.log("unhandledRejection", err);
    console.log("Shutting down");
    server.close(() => {
        process.exit(1);
    });
});
