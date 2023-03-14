const router = require('express').Router();
const employee = require('./employeeController.js')
const validateToken = require('../auth/validateToken.js')

router.post('/addEmployee', validateToken.verifyToken ,employee.addEmployee)
router.post('/updateEmployee', validateToken.verifyToken, employee.updateEmployee)
router.post('/getEmployees',validateToken.verifyToken, employee.getEmployeeData)

module.exports = router;