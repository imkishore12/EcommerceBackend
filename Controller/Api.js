const login = (req,res)=>{
    res.send({
        message:"You have successfully login"
    })
}

const register = (req,res)=>{
    res.send({
        message:"You have successfully registered"
    })
}

const about = (req,res)=>{
    res.send({
        message:"This is about page"
    })
}

const contact = (req,res)=>{
    res.send({
        message:"This is contact page"
    })
}

module.exports = {login,register,about,contact}