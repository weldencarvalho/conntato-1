const models = require('../models');
const Login = models.Login;

export function getAll(req, res, next) {
  Login.findAll()
    .then((login) => {
      res.json(login);
    })
    .catch(next);
}

export function postOne(req, res, next) {
  const login = {
    user: req.body.user,
    password: req.body.password
  };
  Login.create(login)
    .then((login) => {
      res.json(login);
    })
    .catch(next);
}
