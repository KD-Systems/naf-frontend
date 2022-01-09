import axios from "axios"

export default axios.create({
    baseURL:"//naf-inventory.test/api",
    headers:{
        "Content-type":"application/json"
    }
})