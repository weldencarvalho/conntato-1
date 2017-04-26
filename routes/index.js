const {Router} = require('express');
const router = Router();
const v1 = require('./v1');

router.get('/',(req, res, next) =>{
  throw new Error('teste');
  res.json({
    message: 'Hello REST API'
  });
});

router.use('/v1', v1);

router.use(function onNotFound(req, res, next){
  res.status(404).json({
    error: {
      message: "Page Not Found (404)",
      code: 404
    }
  });
});

router.use(function onError(err, req, res, next){
  if (res.headersSent) return next(err);
res.status(500).json({
      error: {
        message: err.message,
        code:500
      }
  });
});

module.exports = router;
