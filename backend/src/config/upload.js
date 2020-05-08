const multer = require('multer');
const path = require('path');

//exportando a forma como o multer vai armazenar os dados no banco de dados
module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);
            cb(null, `${name} - ${Date.now()} ${ext}`);
        },
    }),
}