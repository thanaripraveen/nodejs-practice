const router = require('express').Router();
const employee = require('./employeeController.js');
const validateToken = require('../auth/validateToken.js');


router.post('/postEmployee',validateToken.verifyToken, employee.postEmployee);
router.put('/putEmployee',validateToken.verifyToken, employee.putEmployee);
router.delete('/deleteEmployee',validateToken.verifyToken, employee.deleteEmployee);
router.post('/employeesGetData',validateToken.verifyToken, employee.getEmployeeList);

module.exports = router;