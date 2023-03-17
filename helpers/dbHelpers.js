const pool = require('../database/db.js').pool;
const sql = require('mssql');

const postEmployee = (empName, empJob, empEmail, empMobile) => {
    return new Promise((resolve, reject) => {
        pool.request().input('emp_name', sql.VarChar, empName)
            .input('emp_job', sql.VarChar, empJob).input('emp_email', sql.VarChar, empEmail)
            .input('emp_mobile', sql.BigInt, empMobile).execute('usp_tbl_addEmployee', (err, result) => {

                if (!err) {
                    resolve(result)
                }
                else {
                    reject(err)
                }
            });
    })
}

const putEmployee = (empName, empJob, empMobile, empStatus, empId) => {
    return new Promise((resolve, reject) => {
        pool.query("update employee set employee_Name = '" + empName + "', employee_Job= '" + empJob + "', employee_Mobile = '" + empMobile + "',employee_Status = '" + empStatus + "' where employee_Id = '" + empId + "'", (err, result) => {
            if (!err) {
                resolve(result.recordset)
            }
            else {
                reject(err)
            }
        });
    })
}

const deleteEmployee = (employee_id) => {
    return new Promise((resolve, reject) => {
        pool.query("update employee set employee_Status = 'D' where employee_Id = '" + employee_id + "'", (err,result) => {
            if (!err) {
                resolve(result)
            }
            else {
                reject(err)
            }
        })
    });
}

async function employeesGetData(requestObj) {
    return new Promise((resolve, reject) => {
        if (requestObj == 0 || requestObj == "") {
            pool.query("select * from employee where employee_Status != 'D'", (err, result) => {

                if (!err) {
                    resolve(result.recordset)
                }
                else {
                    reject(err)
                }
            })
        }
        else {
            pool.query("select * from employee where employee_Id = '" + requestObj + "'", (err, result) => {

                if (!err) {
                    resolve(result.recordset)
                }
                else {
                    reject(err)
                }
            })
        }
    })
}

module.exports = {

    postEmployee,
    putEmployee,
    deleteEmployee,
    employeesGetData
}