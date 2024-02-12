const express = require("express");
const productRouter=require("./Router/ProductsRouting");
const userRouter=require("./Router/UserRoutes");
// const {route}=require("./Router/UserRoutes");
const app=express();
const cors=require("cors");
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use("/user", userRouter)
app.use("/products", productRouter)
app.listen(5000)