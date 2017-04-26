const {Router} = require('express');
const router = Router();
const contactGroup = require('../../middlewares/v1/contactGroup');

router.route('/')
.get(contactGroup.getAll)


/*router.route('/:id')
.get(contactGroup.getOne)
.put(contactGroup.putOne)
.delete(contactGroup.deleteOne);*/

module.exports = router;
