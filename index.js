const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userSchema = require('./models/userSchema')
const bcrypt = require('bcrypt')
const TodoModel = require('./models/todoSchema')
const cors = require('cors')
const router = require('./route/route')
require("dotenv").config()

const PORT = process.env.PORT || 9000
const Base_Uri =
  'mongodb+srv://nodejs:nodejs123@cluster0.ymnevqq.mongodb.net/test'

mongoose
  .connect(Base_Uri)
  .then(() => {
    console.log('mongoDb connected')
  })
  .catch((error) => {
    console.log(error)
  })

app.use(express.json())
app.use(cors())
app.use(router)

// app.post("/api/todo",(req,res)=>{

//     const body = req.body

//     res.json({
//         "message" : "Todo Successfully created",
//         "status" : true,
//         body
//     })
// })

// app.post('/api/signUp', (req, res) => {
//   const { username, email, password, mobileNumber } = req.body

//   if (!username || !password || !email || !mobileNumber) {
//     res.send({
//       message: 'Required Fields are missing',
//       status: false,
//     })
//     return
//   }

//   userSchema.find({ email }, (err, data) => {
//     console.log(data, 'data')

//     if (err) {
//       res.json({
//         message: `Internal Error ${err}`,
//         status: false,
//       })
//       return
//     }

//     if (data && data.length > 0) {
//       res.json({
//         message: 'Email already exist',
//         status: false,
//       })
//     } else {
//       const hashPassword = bcrypt.hashSync(password, 10)

//       const objToSend = {
//         username,
//         email,
//         password: hashPassword,
//         mobileNumber,
//       }

//       userSchema.create(objToSend, (err, data) => {
//         if (err) {
//           res.json({
//             message: `Internal Error ${err}`,
//             status: false,
//           })
//         } else {
//           res.json({
//             message: 'User Successfully Created',
//             status: true,
//             data,
//           })
//         }
//       })
//     }
//   })
// })

// app.post("/api/login",(req,res)=>{
//     const {email,password} = req.body

//     if(!email || !password){
//         res.json({
//             "message" : "Required Fields are missing",
//             "status"  : false
//         })
//         return
//     }

//     userSchema.findOne({email},(err,data)=>{
//             if(err){
//                 res.json({
//                     "message" : `Interal Error ${err}`,
//                     "status" : false
//                 })
//                 return
//             }

//             if(!data){
//                 res.json({
//                     "message" : "email and password does not exist",
//                     "status" : false
//                 })
//             }

//             else{

//                 const matchedPassword = bcrypt.compareSync(password,data.password)

//                 if(!matchedPassword){
//                     res.json({
//                         "message" : "Email and password does not match",
//                         "status" : false
//                     })
//                 }
//                 else{
//                     res.json({
//                         "message" : "Login Successfully",
//                         "status" : true,
//                         data
//                     })
//                 }

//             }

//     })

// })

app.listen(PORT, () => console.log(`Server running on local host ${PORT} `))
