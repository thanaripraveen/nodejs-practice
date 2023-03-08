const util = require("../utils");

const myArrayList = [
  { empId: 1, empName: "David" },
  { empId: 2, empName: "raj" },
  { empId: 3, empName: "kumar" }
]
const addEmployee = (request, response) => {
  let empValue = myArrayList.find(item => item.empId == request.body.empId)
  if (empValue) {
    if (empValue.empId == request.body.empId || request.body.empId == 0) {
      response.json(util.responseErrorJson(404, 'Insertion Failed', 'Failed'))

    }
  }
  else {
    const obj = {
      "empId": request.body.empId,
      "empName": request.body.empName
    }
    myArrayList.push(obj)
    response.json(util.responseSuccessJson(200, 'Success', myArrayList))
  }
};

const getEmployeeData = (request, response) => {
  if (request.body.empId != 0) {
    const newArray = myArrayList.filter((item) => item.empId == request.body.empId)
    response.json(util.responseSuccessJson(200, 'Success', newArray))
  }
  else {
    response.json(util.responseSuccessJson(200, 'Success', myArrayList))
  }
}

const updateEmployee = (request, response) => {
  const newArray = myArrayList.filter((item) => item.empId == request.body.empId)
  newArray.empName = request.body.empName;
  newArray.empId = request.body.empId;
  const obj = {
    "empId": newArray.empId,
    "empName": newArray.empName
  }
  response.json(util.responseSuccessJson(200, 'Success', obj))
}

module.exports = {
  addEmployee,
  getEmployeeData,
  updateEmployee
}