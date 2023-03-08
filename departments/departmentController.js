
const departmentList = [
    {deptNo : 1,deptName : "David"},
    {deptNo : 2,deptName : "raj"},
    {deptNo : 3,deptName : "kumar"}
]
const addDepartment =  (request, res) => {
    console.log(request.body.deptNo)
    departmentList.forEach((item)=>{
        // console.log(item.deptNo);
        if(item.deptNo == request.body.deptNo || request.body.deptNo == 0)
        {
            res.send({
                status : 404,
                message : "Insertion Failed"
            })
        }
        else
        {
            const obj = {
                "deptNo" : request.body.deptNo,
                "deptName" : request.body.deptName
            }
            departmentList.push(obj)
            res.send({
                status : 200,
                message : "Data added successfully"
            })
        }
    })
   


  };

  const getDepartmentData = (request,response) =>{
if(request.body.deptNo != 0)
{
   const newArray =  departmentList.filter((item)=> item.deptNo == request.body.deptNo)
       
            response.send({
                response : newArray
            })
  
}

else
{
   response.send({
    status : 200,
    message : 'success',
    response : departmentList
   })
}
  }

const updateDepartment = (request,response)=>{

    const newArray =  departmentList.filter((item)=> item.deptNo == request.body.deptNo)
      newArray.deptName = request.body.deptName;
      newArray.deptNo = request.body.deptNo;
      const obj = {
        "deptNo" : newArray.deptNo,
        "deptName" : newArray.deptName
      }
            response.send({
                message : "Data updated successfully",
                response : obj
            })
}

  module.exports ={
    addDepartment,
    getDepartmentData,
    updateDepartment
  }