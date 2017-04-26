const {Router} = require('express');
const router = Router();
const user = require('../../middlewares/v1/user');

router.route('/')
.get(user.getAll)
.post(user.postOne);

router.route('/:id')
.get(user.getOne)
.put(user.putOne)
.delete(user.deleteOne);

module.exports = router;
