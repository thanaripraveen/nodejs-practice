const router = require('express').Router();
const employee = require('./employeeController.js')

router.post('/addEmployee', employee.addEmployee)
router.post('/updateEmployee', employee.updateEmployee)
router.post('/getEmployees', employee.getEmployeeData)

module.exports = router;