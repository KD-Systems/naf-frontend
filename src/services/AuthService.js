import axios from "axios"

const API_URL = "naf-inventory.test/api/login"


const login = (email,password)=>{
    return axios.post(API_URL,{
        email,
        password
    })
    .then((res)=>{
        if(res.data.access_token){
            localStorage.setItem("user",JSON.stringify(res.data));
        }

        return res.data
    })
}