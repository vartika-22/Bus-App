let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// Bus Model
let busSchema = require('../Models/Bus')


// CREATE Bus
router.route('/create-bus').post((req, res, next) => {
  busSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ Buss
router.route('/').get((req, res) => {
  busSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Bus
router.route('/get-bus/:id').get((req, res) => {
  busSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Bus
router.route('/update-bus/:id').put((req, res, next) => {
  busSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('Bus updated successfully !')
      }
    },
  )
})

// Delete Bus
router.route('/delete-bus/:id').delete((req, res, next) => {
  busSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
