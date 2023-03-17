const util = require('../utils.js');
const dbHelper = require('../helpers/dbHelpers.js');




const getEmployeeList = async (request, response) => {
  apiresponse = await dbHelper.employeesGetData(request.body.employee_id);
  response.json(util.responseSuccessJson(200, 'success', apiresponse));
}

const postEmployee = async(request,response) =>{
  let postData = request.body;
  apiresponse = await dbHelper.postEmployee(postData.employee_name,postData.employee_job,postData.employee_email,postData.employee_mobile)
  response.json(util.responseSuccessJson(200, 'success', 'employee added successfully'));

}

const putEmployee = async(request,response) =>{
  let postData = request.body;
  apiresponse = await dbHelper.putEmployee(postData.employee_name,postData.employee_job,postData.employee_mobile,postData.employee_status,postData.employee_id)
  response.json(util.responseSuccessJson(200, 'success', 'employee data updated successfully'));

}

const deleteEmployee = async(request,response) =>{
  let postData = request.body;
  apiresponse = await dbHelper.deleteEmployee(postData.employee_id)
  response.json(util.responseSuccessJson(200, 'success', 'employee data deleted successfully'));

}


module.exports = { getEmployeeList,postEmployee,putEmployee,deleteEmployee }