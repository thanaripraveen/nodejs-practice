const router = require('express').Router();
const employee = require('./employeeController.js');
const validateToken = require('../auth/validateToken.js');

router.post('/addEmployee', validateToken.verifyToken ,employee.addEmployee);
router.post('/updateEmployee', validateToken.verifyToken, employee.updateEmployee);
router.post('/getEmployees',validateToken.verifyToken, employee.getEmployeeData);
router.post('/postEmployee',validateToken.verifyToken, employee.postEmployee);
router.put('/putEmployee',validateToken.verifyToken, employee.putEmployee);
router.delete('/deleteEmployee',validateToken.verifyToken, employee.deleteEmployee);
router.post('/employeesGetData',validateToken.verifyToken, employee.employeesGetData);

module.exports = router;