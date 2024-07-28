const User = require('../models/User')
const createUserToken = require('../helpers/create-user-token')
const getToken = require('../helpers/get-token')
const getUserByToken = require('../helpers/get-user-by-token')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

class UserController {
    static async register(req, res) {
        const {name, email, phone, password, confirmpassword} = req.body

        // validations
        if(!name){
            res.status(422).json({ message: "O nome é obrigatório!"})
            return
        }
        if(!email){
            res.status(422).json({ message: "O email é obrigatório!"})
            return
        }
        // if(!phone){
        //     res.status(422).json({ message: "O telephone é obrigatório!"})
        //     return
        // }
        if(!password){
            res.status(422).json({ message: "A senha é obrigatória!"})
            return
        }
        if(!confirmpassword){
            res.status(422).json({ message: "A confirmação de senha é obrigatória!"})
            return
        }
        if(password !== confirmpassword){
            res.status(422).json({ message: "As senhas não conferem!" })
            return
        }
        
        // check if exist user
        const userExists = await User.findOne({ where: { email } })
        if(userExists){
            res.status(422).json({ message: "Por favor, utilize outro email!" })
            return
        }
        
        // encrypt password
        const salt = await bcrypt.genSalt(12) // 12 caracteres a mais
        const passwordHash = await bcrypt.hash(password, salt)
        
        const user = {name, email, password: passwordHash}
        
        try {
            const newUser = await User.create(user)
            await createUserToken(newUser, req, res)
        } catch (error) {
            res.status(500).json({ message: "Erro! Tente mais tarde!" })
        }

    }

    static async login(req, res){
        const {email, password} = req.body
        if(!email){
            res.status(422).json({message: "O email é obrigatório!"})
            return
        }
        if(!password){
            res.status(422).json({message: "A senha é obrigatória!"})
            return
        }
        try {
            const user = await User.findOne({ where: { email } })
            if(!user){
                res.status(401).json({message: "Usuário não cadastrado!"})
                return
            }
            
            // check if password match with db password
            const checkPassword = await bcrypt.compare(password, user.password)
            if(!checkPassword){
                res.status(401).json({message: "Senha inválida!"})
                return
            }
            await createUserToken(user, req, res)
        } catch (error) {
            console.log('Erro: ', error)
        }
    }

    // static async checkUser(req, res){
    //     let currentUser
    //     if(req.headers.authorization){
    //         const token = getToken(req)
    //         const decoded = jwt.verify(token, 'nosso_secret')
    //         currentUser = await User.findOne({ where: { id: decoded.id } })
    //         currentUser.password = undefined
    //     }else{
    //         currentUser = null
    //     }

    //     res.status(200).json({currentUser})
    // }

    static async getUserById(req, res){
        const id = req.params.id
        const user = await User.findOne({ where: { id: decoded.id } })
        if(!user){
            res.status(401).json({message: "Usuário não encontrado!"})
            return
        }
        res.status(200).json({user})
    }

    static async editUser(req, res){
        const id = req.params.id
        const token = getToken(req)
        const user = await getUserByToken(token)

        const {name, email, password, confirmpassword} = req.body

        if(req.file){
            user.image = req.file.filename
        }

        // validations
        if(!name){
            res.status(422).json({ message: "O nome é obrigatório!"})
            return
        }
        user.name = name
        if(!email){
            res.status(422).json({ message: "O email é obrigatório!"})
            return
        }
        const userExists = await User.findOne({email})
        if(user.email !== email && userExists){
            res.status(422).json({ message: "Por favor, utilize outro email!" })
            return
        }
        user.email = email
        if(!phone){
            res.status(422).json({ message: "O telephone é obrigatório!"})
            return
        }
        // user.phone = phone
        // if(!password){
        //     res.status(422).json({ message: "A senha é obrigatória!"})
        //     return
        // }
        if(!confirmpassword){
            res.status(422).json({ message: "A confirmação de senha é obrigatória!"})
            return
        }
        if(password !== confirmpassword){
            res.status(422).json({ message: "As senhas não conferem!" })
            return
        }else if(password === confirmpassword && password != null){
            const salt = await bcrypt.genSalt(12)
            const passwordHash = await bcrypt.hash(password, salt)
            user.password = passwordHash
        }
        
        try {
            const updatedUser = await User.update(user, {where: {id}})
            res.status(200).json({message: "Usuário atualizado com sucesso!"})
        } catch (error) {
            res.status(500).json({message: error})
            return
        }

    }
}

module.exports = UserController