const {Router} = require('express');
const router = Router();
const me = require('./me');
const user = require('./user');
const contact = require('./contact');
const group = require('./group');
const contactGroup = require('./contactGroup');


router.use('/me', me);
router.use('/user', user);
router.use('/contact', contact);
router.use('/group', group);
router.use('/contactGroup', contactGroup);

module.exports = router;
