const {Router} = require('express');
const router = Router();
const contact = require('../../middlewares/v1/contact');

router.route('/')
.get(contact.getAll)
.post(contact.postOne);

router.route('/:id')
.get(contact.getOne)
.put(contact.putOne)
.delete(contact.deleteOne);

module.exports = router;
