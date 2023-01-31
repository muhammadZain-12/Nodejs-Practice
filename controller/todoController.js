const TodoModel = require("../models/todoSchema")


const TodoController = {
    post : (req, res) => {
        const body = req.body
      
        if (!body.todo) {
          res.json({
            message: 'Required Field are missing',
            status: false,
          })
          return
        }
      
        TodoModel.create(body, (err, data) => {
          if (err) {
            res.json({
              message: 'Internal Error',
              status: false,
            })
          } else {
            res.json({
              message: 'Todo Successfully Created',
              status: true,
              data,
            })
          }
        })
      },

      get : (req, res) => {
        TodoModel.find({}, (err, data) => {
          if (err) {
            res.json({
              message: `${err}`,
              status: false,
            })
          } else {
            res.json({
              message: 'Todo Successfully get',
              status: true,
              data,
            })
          }
        })
      },

      delete : (req, res) => {
        const { id } = req.params
      
        TodoModel.findByIdAndDelete(id, (err, data) => {
          if (err) {
            res.json({
              message: `${err}`,
              status: false,
            })
          } else {
            res.json({
              message: 'Todo deleted successfully',
              status: true,
            })
          }
        })
      },

      put : (req, res) => {
        const body = req.body
      
        TodoModel.findByIdAndUpdate(body.id, body, (err, data) => {
          if (err) {
            res.json({
              message: `${err}`,
              status: false,
            })
          } else {
            res.json({
              message: 'Todo Successfully Updated',
              status: true,
            })
          }
        })
      }

}


module.exports = TodoController