const express = require("express");

const app=express();
const productRouter=require('./Router/ProductsRouting');
const userRouter=require('./Router/UserRoutes');
// const {route}=require("./Router/UserRoutes");
const cors=require("cors");
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use("/products", productRouter)
app.use("/user", userRouter)
app.listen(8888,()=>{
    console.log("sevrver is running fine");
})