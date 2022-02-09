var Auth = require('../models/auth')
var User = require('../models/user')

exports.search = function(req, res) {
    var query  = User.where({ email: req.body.email });

    query.findOne(function (err, user) {
        if(err) {
            return res.status(500).json( {
                message: 'Error al buscar usuario',
                error: err
            })
        }
        
        if(!user) {
            return res.status(500).json( {
                message: 'Usuario no existe',
                error: err
            })
        }

        return res.status(201).json({
            message: 'user find',
            user: user
        })
    })
    
}