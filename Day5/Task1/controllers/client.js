const Client = require('../models/client')
module.exports = {
    apiGetAllClients(req, res, next) {
        const limit = parseInt(req.query.limit) || ''
        Client.find({}).limit(limit)
            .then(clients => res.status(200).send(clients))
            .catch(next)
    },

    apiCreateClient(req, res, next) {
        const clientdata = req.body;
        Client.create(clientdata)
            .then(client => res.status(201).send(client))
            .catch(next)
    },

    apiGetClientById(req, res, next) {
        const clientId = req.params.id;
        Client.findById({
                _id: clientId
            })
            .then(client => res.status(200).send(client))
            .catch(next)
    },

    apiUpdateClient(req, res, next) {
        const clientId = req.params.id;
        const clientdata = req.body;
        Client.findByIdAndUpdate({
                _id: clientId
            }, clientdata)
            .then(() => Client.findById({
                _id: clientId
            }))
            .then(client => res.status(200).send(client))
            .catch(next)
    },

    apiDeleteClient(req, res, next) {
        const clientId = req.params.id;
        Client.findByIdAndRemove({
                _id: clientId
            })
            .then(driver => res.status(204).send(driver))
            .catch(next)
    }
}