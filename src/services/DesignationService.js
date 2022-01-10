import http from "../http-common"
import React,{useState} from "react";





const  getAll = async()=>{
    const res =  await http.get("/designations")

    return res.data
    
            
};

const get = id =>{
    return http.get(`/designations/${id}`)
};

const create = data =>{
    return http.post("/designations",data)
};

const update = (id,data) =>{
    return http.put(`/designations/${id}`,data)
};

const remove = id => {
    return http.delete(`/designations/${id}`)
};

const DesignationService = {
    getAll,
    get,
    create,
    update,
    remove,
    
    
  };

  export default DesignationService;