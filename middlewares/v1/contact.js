const models = require('../../models');
const Contact = models.Contact;

exports.getAll = (req, res, next) => {
  Contact.findAll()
    .then((contact) => {
      res.json({contact});
    })
    .catch(next);
}

exports.postOne = (req, res, next) =>{
  const contact = {
    firstName: req.body.first_name,
    lastName: req.body.last_name,
    number: req.body.number,
    email: req.body.email,
    gender: req.body.gender,
    birth: req.body.birth,
    photograph: req.body.photograph

  };

  Contact.create(contact)
    .then((contact) => {
      res.json({contact});
    })
    .catch(next);
}

exports.getOne = (req, res, next) =>{
  Contact.findById(req.params.id)
    .then((contact) => {
      res.json({contact});
    })
    .catch(next);
}

exports.putOne = (req, res, next) =>{
  Contact.findById(req.params.id)
    .then((contact) => {
      if (!contact) return res.send('contato nao encontrado');

      contact.firstName = req.body.first_name;
      contact.lastName = req.body.last_name;
      contact.number = req.body.number;
      contact.email = req.body.email;
      contact.gender = req.body.gender;
      contact.birth = req.body.birth;
      contact.photograph = req.body.photograph;


      return contact.save()
        .then((contact) => {
          res.json({contact});
        })
        .catch(next);
    })
    .catch(next);
}

exports.deleteOne = (req, res, next) =>{
  Contact.findById(req.params.id)
    .then((contact) => {
      if (!contact) return res.send('contato nao encontrado');

      return contact.destroy()
        .then((contact) => {
          res.json({contact});
        })
        .catch(next);
    })
    .catch(next);
}
