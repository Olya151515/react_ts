const BaseUrl = 'https://jsonplaceholder.typicode.com'

const URLS ={
    users:{
        AllUsers: BaseUrl + '/users'
    },
    posts:{
        AllPosts:BaseUrl + '/posts'
    },
    comments:{
        AllComments:BaseUrl + '/comments'
    }
}

export {
    URLS,
    BaseUrl
}