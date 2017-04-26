const { User } = require('../../models');

exports.buscarUmUsuario= (req, res, next) =>{
  User.create({
    name: "Italo"
  }).then((user) => {
    res.json({ user });
  }).catch(next);
}

exports.atualizarUsusario = (req, res, next) =>{
  res.json({
    user: {
      id: 2,
      name: "Welden Carvalho"
    }
  });
}
