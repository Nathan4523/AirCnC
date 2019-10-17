const User = require('../models/User');
/**
 * Metodos padrão e regras
 * Index, show, store, update, destroy
 */

 //await faz o metodo esperar e ao mesmo tempo fica assincrona

module.exports = {
    async store(req, res){
        const { email } = req.body;

        let user = await User.findOne({ email: email });

        if(!user){
            user = await User.create({ email });
        }

        return res.json(user);
    }
};