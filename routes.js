const router = require('express').Router();
// Employee routes
const employeeRoutes = require('./employee/employeeRoutes')
router.use('/employee',employeeRoutes);


// Department routes
let departmentRoutes = require('./departments/departmentRoutes');
router.use('/department',departmentRoutes);

module.exports = router;