
var express = require('express');
var router = express.Router();

const pgdbconnect = require("../database/pgdbconnect")




//ADD AN EMPLOYEE
router.post('/employees/:id/:name',(req,res)=>{

  var empid = req.params.id;
  var name = req.params.name;
  var empcode = req.body.empcode;
  var salary = req.body.salary
  
    pgdbconnect.query('insert into employee(empid,name,empcode,salary) values($1,$2,$3,$4) ',[empid,name,empcode,salary],(err,result) =>{
     if (err) throw err
  
    console.log(req.body)
    
    res.send(req.body) 
    
    // res.status(200).send(" OK DONE")  
   
    })
    }) 
  



//GET ALL EMPLOYEES
router.get('/employees',(req,res)=>{

  pgdbconnect.query('select * from employee ',(err,result) =>{
   if (err) throw err

console.log("employee" ,result )
  res.send(result)  
}) 

})

//GET AN EMPLOYEES 
//mysql ===>>>  empid =?
//postgres  ==>>> empid =$1

router.get('/employees/:id',(req,res)=>{

  pgdbconnect.query('select * from employee where empid = $1 ',[req.params.id],(err,result) =>{
   if (err) throw err

console.log("employee" ,result )
  res.send(result)  
})

}) 


//DELETE AN EMPLOYEE

router.delete('/employees/:id',(req,res)=>{

  pgdbconnect.query('delete from employee where empid = $1 ',[req.params.id],(err,result) =>{
   if (err) throw err

console.log("employee" ,result )
  res.send("deleted successfuly")  
})

}) 






  //UPDATE/edit  AN EMPLOYEE

  //patch

router.patch('/employees/update/:id',(req,res)=>{


  var empid = req.params.id;
  var name = req.body.name;
  var empcode = req.body.empcode;
  var salary = req.body.salary;

 pgdbconnect.query('update employee  set name=$1,empcode=$2,salary=$3 where empid=$4 ',[name,empcode,salary,empid],(err,result) =>{
     if (err) throw err
  
    console.log(result)
    console.log(req.body)

    res.send(req.body) 
     })  
     }) 
 module.exports = router;