const productRouter =  require('express').Router();
const alldata=require("../Data/Store")
productRouter.get("/", (request, response)=>{
    return response.send(alldata)
});
productRouter.get("/home", (request, response)=>{
    return response.send(alldata)
});
productRouter.get("/mobile", (request, response)=>{
    return response.send(alldata)
});

productRouter.get("/laptops", (request, response)=>{
    return response.send(alldata)
});
productRouter.get("/tablets", (request, response)=>{
    return response.send(alldata)
});

productRouter.get("/accessories", (request, response)=>{
    return response.send(alldata)
});



module.exports = productRouter