const models = require('../../models');
const Group = models.Group;

exports.getAll = (req, res, next) => {
  User.findAll()
    .then((groups) => {
      res.json({groups});
    })
    .catch(next);
}

exports.postOne = (req, res, next) => {
  const group = {
    name: req.body.name,
    description: req.body.description

  };

  Group.create(group)
    .then((group) => {
      res.json({group});
    })
    .catch(next);
}

exports.getOne = (req, res, next) => {
  Group.findById(req.params.id)
    .then((group) => {
      res.json({group});
    })
    .catch(next);
}

exports.putOne = (req, res, next) => {
  Group.findById(req.params.id)
    .then((group) => {
      if (!group) return res.send('grupo nao encontrado');

      group.name = req.body.name;
      group.description = req.body.description;


      return group.save()
        .then((group) => {
          res.json({group});
        })
        .catch(next);
    })
    .catch(next);
}

exports.deleteOne = (req, res, next) => {
  Group.findById(req.params.id)
    .then((group) => {
      if (!group) return res.send('grupo nao encontrado');

      return group.destroy()
        .then((group) => {
          res.json({group});
        })
        .catch(next);
    })
    .catch(next);
}
