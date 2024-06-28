import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{'Content-Type': 'application/json'}
    }
);
const getAllUsers = async ()=>{
    return await axiosInstance.get('/users').then(response =>response.data)
};
const getPostsOfUserById = async (id:number) =>{
    return await axiosInstance.get('/users/' + id +'/posts/').then(response => response.data)
}


export {getAllUsers,getPostsOfUserById}