
const util = {
    responseSuccessJson(status,message,response){
        return{
            "status" :200,
            "message" :message,
            "response" : response
        };

        
    },

    responseErrorJson(statu,message,error){
    return {

      "status" :404,
        "message" :message,
        "response" : error
    }
}
   
}

module.exports  = util
