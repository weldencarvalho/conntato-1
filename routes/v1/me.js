const {Router} = require('express');
const router = Router();
const me = require('../../middlewares/v1/me');

router.route('/')

.get(me.buscarUmUsuario)
.put(me.atualizarUsusario);

module.exports = router;
