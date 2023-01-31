const express = require("express")
const router = express.Router()
const TodoController = require("../controller/todoController") 

router.post('/api/todo', TodoController.post )
  
router.get('/api/todo', TodoController.get )
  
router.delete('/api/todo/:id',  TodoController.delete )
  
router.put('/api/todo',  TodoController.put )






  module.exports = router
  