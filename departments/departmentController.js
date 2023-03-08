const util = require("../utils");

const departmentList = [
    { deptNo: 1, deptName: "David" },
    { deptNo: 2, deptName: "raj" },
    { deptNo: 3, deptName: "kumar" }
]
const addDepartment = (request, response) => {

    let deptValue = departmentList.find(item => item.deptNo == request.body.deptNo)

    if (deptValue) {
        if (deptValue.deptNo == request.body.deptNo || deptValue.deptNo == 0) {
            response.json(util.responseErrorJson(404, 'Insertion Failed', 'Failed'))
        }
    }
    else {
        const obj = {
            "deptNo": request.body.deptNo,
            "deptName": request.body.deptName
        }
        departmentList.push(obj)

        response.json(util.responseSuccessJson(200, 'success', 'Data added successfully'))

    }
}

const getDepartmentData = (request, response) => {
    if (request.body.deptNo != 0) {
        const newArray = departmentList.filter((item) => item.deptNo == request.body.deptNo)
        response.json(util.responseSuccessJson(200, 'success', newArray))
    }
    else {
        response.json(util.responseSuccessJson(200, 'success', departmentList))
    }
}

const updateDepartment = (request, response) => {

    const newArray = departmentList.filter((item) => item.deptNo == request.body.deptNo)
    newArray.deptName = request.body.deptName;
    newArray.deptNo = request.body.deptNo;
    const obj = {
        "deptNo": newArray.deptNo,
        "deptName": newArray.deptName
    }

    response.json(util.responseSuccessJson(200, 'success', obj))

}

module.exports = {
    addDepartment,
    getDepartmentData,
    updateDepartment
}