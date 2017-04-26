const models = require('../../models');
const ContactGroup = models.ContactGroup;

exports.getAll = (req, res, next) => {
  Group.findById(req.params.id)
    .then((group) => {
      return ContactGroup.findAll({
        where: {contact_id: group.id},
        include: [{ model: model.Contact }]
      });
    })
    .then((contacts) => {
      res.json({ contacts });
    })
    .catch(next);
}
