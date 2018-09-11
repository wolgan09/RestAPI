let express = require("express")

const router = express.Router()

// router.use('/api/v1/module2',require('./modules/module2/module2Router'))
router.use('/api/v1/module1',require('./modules/module1/module1Router'))

module.exports = router