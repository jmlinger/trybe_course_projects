const multer = require('multer');

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'src/uploads');
  },
  filename: (req, _file, callback) => {
    const { path } = req;
    const id = path.split('/')[1];
    callback(null, `${id}.jpeg`);
  },
});

module.exports = multer({ storage }).single('image');
