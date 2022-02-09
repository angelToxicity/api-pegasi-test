var User = require('../models/user')
var Auth = require('../models/auth')

exports.create = function(req, res) {
    const query  = Auth.where({ email: req.body.auth.email });
    var user = new User(req.body.user)
    var auth = new Auth(req.body.auth)

    query.findOne(function (err, a) {
        if(err) {
            return res.status(500).json( {
                message: 'Error al buscar usuario',
                error: err
            })
        }

        if (!a) {
            user.save(function(err, user){
                if(err) {
                    return res.status(500).json( {
                        message: 'Error al guardar usuario',
                        error: err
                    })
                }
                auth.save(function(err, auth){
                    if(err) {
                        return res.status(500).json( {
                        message: 'Error al guardar credenciales',
                        error: err
                        })
                    }
                    return res.status(201).json({
                        message: 'saved',
                        _id: auth._id
                    })
                })
            })
        } else {
            return res.status(500).json( {
                message: 'Este usuario ya existe',
                error: user
            })
        }
    })
    
}