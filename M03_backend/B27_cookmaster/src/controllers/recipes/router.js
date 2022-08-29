const express = require('express');
const rescue = require('express-rescue');
const auth = require('../../middlewares/auth');
const uploadFile = require('../../middlewares/uploadFile');

const router = express.Router({ mergeParams: true });
const app = express();

app.use(express.static(`${__dirname}/uploads`));

router.post('/', auth, rescue(require('./create')));

router.get('/', rescue(require('./list')));

router.get('/:id', rescue(require('./get')));

router.put('/:id', auth, rescue(require('./update')));

router.put('/:id/image', auth, uploadFile, rescue(require('./updateImage')));

router.delete('/:id', auth, rescue(require('./remove')));

module.exports = router;
