
const myArrayList = [
    {empId : 1,empName : "David"},
    {empId : 2,empName : "raj"},
    {empId : 3,empName : "kumar"}
]
const addEmployee =  (request, res) => {
    myArrayList.forEach((item)=>{
        if(item.empId == request.body.empId || request.body.empId == 0)
        {
            res.send({
                status : 404,
                message : "Insertion Failed"
            })
        }
        else
        {
            const obj = {
                "empId" : request.body.empId,
                "empName" : request.body.empName
            }
            myArrayList.push(obj)
            res.send({
                status : 200,
                message : "Data added successfully"
            })
        }
    })
   


  };

  const getEmployeeData = (request,response) =>{
if(request.body.empId != 0)
{
   const newArray =  myArrayList.filter((item)=> item.empId == request.body.empId)
       
            response.send({
                response : newArray
            })
  
}

else
{
   response.send({
    status : 200,
    message : 'success',
    response : myArrayList
   })
}
  }

const updateEmployee = (request,response)=>{

    const newArray =  myArrayList.filter((item)=> item.empId == request.body.empId)
      newArray.empName = request.body.empName;
      newArray.empId = request.body.empId;
      const obj = {
        "empId" : newArray.empId,
        "empName" : newArray.empName
      }
            response.send({
                message : "Data updated successfully",
                response : obj
            })
}

  module.exports ={
    addEmployee,
    getEmployeeData,
    updateEmployee
  }