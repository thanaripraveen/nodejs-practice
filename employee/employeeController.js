const util = require("../utils");
const pool = require('../database/db.js').pool;
const sql = require('mssql')

const myArrayList = [
  { empId: 1, empName: "David" },
  { empId: 2, empName: "raj" },
  { empId: 3, empName: "kumar" }
]
const addEmployee = (request, response) => {
  let empValue = myArrayList.find(item => item.empId == request.body.empId)
  if (empValue) {
    if (empValue.empId == request.body.empId || request.body.empId == 0) {
      response.json(util.responseErrorJson(404, 'Insertion Failed', 'Failed'));

    }
  }
  else {
    const obj = {
      "empId": request.body.empId,
      "empName": request.body.empName
    }
    myArrayList.push(obj);
    response.json(util.responseSuccessJson(200, 'Success', myArrayList));
  }
};

const getEmployeeData = (request, response) => {
  if (request.body.empId != 0) {
    const newArray = myArrayList.filter((item) => item.empId == request.body.empId);
    response.json(util.responseSuccessJson(200, 'Success', newArray));
  }
  else {
    response.json(util.responseSuccessJson(200, 'Success', myArrayList));
  }
}

const updateEmployee = (request, response) => {
  const newArray = myArrayList.filter((item) => item.empId == request.body.empId);
  newArray.empName = request.body.empName;
  newArray.empId = request.body.empId;
  const obj = {
    "empId": newArray.empId,
    "empName": newArray.empName
  }
  response.json(util.responseSuccessJson(200, 'Success', obj));
}


const postEmployee = (request, response) => {

  pool.request().input('emp_name', sql.VarChar, request.body.employee_name)
    .input('emp_job', sql.VarChar, request.body.employee_job).input('emp_email', sql.VarChar, request.body.employee_email)
    .input('emp_mobile', sql.BigInt, request.body.employee_mobile).execute('usp_tbl_addEmployee', (err, result) => {

      if (!err) {
        response.json(util.responseSuccessJson(200, 'success', 'employee registered successfully'));
      }
      else {
        response.json(util.responseErrorJson(400, 'failed', err));
      }
    });
}

const putEmployee = (request, response) => {
  pool.query("update employee set employee_Name = '" + request.body.employee_name + "', employee_Job= '" + request.body.employee_job + "', employee_Mobile = '" + request.body.employee_mobile + "',employee_Status = '"+request.body.employee_status+"' where employee_Id = '" + request.body.employee_id + "'", (err) => {
    if (!err) {
      response.json(util.responseSuccessJson(200, 'success', 'employee updated successfully'));
    }
    else {
      response.json(util.responseErrorJson(401, 'failed', err));
    }
  });
}

const deleteEmployee = (request,response)=>{
  pool.query("update employee set employee_Status = 'D' where employee_Id = '"+request.body.employee_id+"'",(err)=>{
    if(!err)
    {
      response.json(util.responseSuccessJson(200, 'success', 'employee deleted successfully'));

    }
    else
    {
      response.json(util.responseErrorJson(401, 'failed', err));

    }
  })
}

const employeesGetData = (request,response)=>{
  if(request.body.employee_id == 0 || request.body.employee_id == "")
  {
    pool.query("select * from employee where employee_Status != 'D'",(err,result)=>{

      if(!err)
      {
        response.json(util.responseSuccessJson(200,'success',result.recordset));
      }
      else
      {
        response.json(util.responseErrorJson(404,'failed',err));
      }
    })
  }
  else
  {
    pool.query("select * from employee where employee_Id = '"+request.body.employee_id+"'",(err,result)=>{

      if(!err)
      {
        response.json(util.responseSuccessJson(200,'success',result.recordset[0]));
      }
      else
      {
        response.json(util.responseErrorJson(404,'failed',err));
      }
    })
  }
  
}

module.exports = {
  addEmployee,
  getEmployeeData,
  updateEmployee,
  postEmployee,
  putEmployee,
  deleteEmployee,
  employeesGetData
}