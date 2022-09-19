const Cart = require("../models/Cart");
const catchAsync = require("../utils/catchAsync");

exports.getAllCart = catchAsync(async (req, res) => {
    const carts = await Cart.find();

    res.status(200).json({
        status: "success",
        timeOfRequest: req.requestTime,
        results: carts.length,
        data: {
            carts,
        },
    });
});

exports.addCartProduct = catchAsync(async (req, res) => {

    res.status(200).json({
        status: "success",
        data: {
            //TODO: falta realizar el metodo
        },
    });
});
exports.deleteCartProduct = catchAsync(async (req, res) => {

    res.status(200).json({
        status: "success",
        data: {
            //TODO: falta realizar el metodo
        },
    });
});

exports.payCartProduct = catchAsync(async (req, res) => {

    res.status(200).json({
        status: "success",
        data: {
            //TODO: falta realizar el metodo
        },
    });
});
