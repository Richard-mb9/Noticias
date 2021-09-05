import axios from 'axios';
import {getToken, isAuthenticated} from '../shared/utils'


const getHost = ()=>{
    return process.env['base_api_url'] 
    ? process.env['base_api_url'] 
    : 'http://localhost:5000'
}

const createHeader = ()=>{
    if(isAuthenticated()) return {token: getToken()}
    return{}
}

export default  axios.create({
    baseURL: getHost(),
    headers:{
        ...createHeader()
    }

})