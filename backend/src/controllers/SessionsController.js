//metodos aqui dentro
//index , show, store, update , destroy 

const User = require('../models/User');

module.exports = {

    async store(req, res){
        //pegando os dados na requisição
        const { email } = req.body;
        
        //truque para evitar de criar novo usuário igual:
        let user = await User.findOne({ email : email });

        if(!user){
            //criando usuário
            user = await User.create({ email })
        }
        
        //retorno da criação em formato json
        return res.json(user);
    }
};