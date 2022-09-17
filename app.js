const express = require("express");
const morgan = require("morgan");
const productRouter = require("./routes/productRoutes");
const MyError = require("./utils/MyError");

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

//manejo de errores
app.use((err, req, res, next) => {
    //console.log("error:", err); //reeemplazar por guardado en archivo o en bd
    if (process.env.NODE_ENV === "development") {
        const statusCode = err.statusCode || 500;
        const status = err.status || "error";
        res.status(statusCode).json({
            status: err.status,
            message: err.message,
            stack: err.stack,
        });
    } else {
        if (err.isOperational) {
            res.status(err.statusCode).json({
                status: err.status,
                message: err.message,
            });
        } else {
            res.status(500).json({
                status: "error",
                message: "server error",
            });
        }
    }
});

//routes
app.use("/api/v1/products/", productRouter);

module.exports = app;

