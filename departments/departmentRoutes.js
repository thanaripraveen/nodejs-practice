const router = require('express').Router();
const department = require('./departmentController')

router.post('/addDepartment', department.addDepartment)
router.post('/updateDepartment', department.updateDepartment)
router.post('/getDepartments', department.getDepartmentData)

module.exports = router;