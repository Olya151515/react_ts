import {IUser} from "../model/IUser";

const postUser = (data: IUser) =>{
    fetch('https://jsonplaceholder.typicode.com/users',
        {
            method:'POST',
            body:JSON.stringify({data}),
            headers:{ 'Content-type': 'application/json; charset=UTF-8',},
        }).then(response => response.json())
        .then(response => console.log(response))
}

export {postUser}