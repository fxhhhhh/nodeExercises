const express = require('express')
const router = express.Router()
const {createProduct,getAllProduct} = require('../controllers/productController')
const {uploadProductImages} = require('../controllers/uploadsController')

router.route('/').get(getAllProduct).post(createProduct)
router.route('/uploads').post(uploadProductImages)

module.exports = router

