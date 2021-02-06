const models = require('../schema/index.js')


    const add =  async(req, res, next) => {
        try {
            let userName = req.params.name
            const exists = await models.Links.findOne({name: userName})
            if(!exists){
                const name = await models.Links.create({name: userName, link: `www.mernInterview.com/${userName}`});
                res.status(200).json(name);
            }
            else{
                res.status(200).send({message: "Domain already exist"})
            }
        } catch (e) {
            res.status(500).send({
                message: 'There has been an error'
            });
            next(e);
        }
    }
    const getAll =  async(req, res, next) => {
        try {
            const allUsers = await models.Links.find();
            res.status(200).json(allUsers);
        } catch (e) {
            res.status(500).send({
                message: 'There has been an error'
            });
            next(e);
        }
    }


module.exports = {add, getAll}