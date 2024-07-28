const jwt = require('jsonwebtoken')

const createUserToken = async (user, req, res)=>{
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, "nosso_secret")

    res.status(200).json({message: "Usuário autenticado!", token})
}

module.exports = createUserToken