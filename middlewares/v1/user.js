const models = require('../../models');
const User = models.User;

exports.getAll = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.json({users});
    })
    .catch(next);
}

exports.postOne = (req, res, next) => {
  const user = {
    firstName: req.body.first_name,
    lastName: req.body.last_name,
    number: req.body.number,
    email: req.body.email,
    gender: req.body.gender,
    birth: req.body.birth,
    photograph: req.body.photograph,
    login: req.body.login,
    password: req.body.password
  };(req, res, next)

  User.create(user)
    .then((user) => {
      res.json({user});
    })
    .catch(next);
}

exports.getOne = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      res.json({user});
    })
    .catch(next);
}

exports.putOne = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) return res.send('usuario nao encontrado');

      user.firstName = req.body.first_name;
      user.lastName = req.body.last_name;
      user.number = req.body.number;
      user.email = req.body.email;
      user.gender = req.body.gender;
      user.birth = req.body.birth;
      user.photograph = req.body.photograph;
      user.login = req.body.login;
      user.password = req.body.password;

      return user.save()
        .then((user) => {
          res.json({user});
        })
        .catch(next);
    })
    .catch(next);
}

exports.deleteOne = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) return res.send('usuario nao encontrado');

      return user.destroy()
        .then((user) => {
          res.json({user});
        })
        .catch(next);
    })
    .catch(next);
}
