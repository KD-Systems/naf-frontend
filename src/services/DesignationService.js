import http from "../http-common"
import React,{useState} from "react";





const  getAll = async()=>{
    const res =  await http.get("/designations")

    return res.data
    
            
};

const get = async(id) =>{
    const res = await http.get(`/designations/${id}`)
    return res.data
};

const create = async(data) =>{
    return http.post("/designations",data)
};

const update = async(id,data) =>{
    
    const res = await http.put(`/designations/${id}`,data)
    return res.data
};

const remove = async(id) => {
    const res = await http.delete(`/designations/${id}`)
    return res.data
};

const DesignationService = {
    getAll,
    get,
    create,
    update,
    remove,
    
    
  };

  export default DesignationService;