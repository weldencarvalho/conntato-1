const {Router} = require('express');
const router = Router();
const group = require('../../middlewares/v1/group');

router.route('/')
.get(group.getAll)
.post(group.postOne);

router.route('/:id')
.get(group.getOne)
.put(group.putOne)
.delete(group.deleteOne);

module.exports = router;
