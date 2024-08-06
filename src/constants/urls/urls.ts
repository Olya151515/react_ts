export const baseUrl = 'https://jsonplaceholder.typicode.com';
export const urls = {
    users:{
        allUsers:'/users',
        byId: (id:number):string => urls.users.allUsers +'/'+id
    },
    posts:{
        allPosts:'/posts',
        byId:(id:number):string =>urls.posts.allPosts+'/'+id
    },
    comments:{
        allComments:'/comments',
        byId:(id:number) => urls.comments.allComments+'/'+id
    }
}