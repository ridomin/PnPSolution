const express = require('express')
const mongoService = require('../mongo/mongoService')
const sampleData = require('../sampleData')

const router = express.Router()

// List Items
router.get('/list', function (req, res, next) {
  mongoService.get(req, res, next)
})

router.post('/list', function (req, res, next) {
  mongoService.create(req, res, next)
})

router.delete('/list' + '/:_id', function (req, res, next) {
  mongoService.destroy(req, res, next)
})

// MasterDetail Page Endpoint
router.get('/masterdetail', (req, res) => {
  res.json(sampleData.textAssets)
})

// Grid Page Endpoint
router.get('/grid', (req, res) => {
  res.json(sampleData.textAssets)
})

module.exports = router
