const server = require("express");
const linkControl = require('../controllers/linkControl');

const router = server.Router();

router.post('/:name', linkControl.add);
router.get('/', linkControl.getAll);

module.exports = router