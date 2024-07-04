import React, {Component} from 'react';
import {IUser} from "../../model/user/IUser";
import {getAllPosts, getAllUsers} from "../../service/api.users";
import UserComponent from "../userComponent/UserComponent";
import {IPosts} from "../../model/post/IPosts";
import PostComponent from "../postsComponent/PostComponent";



type IProps ={
    users:IUser[],
    posts:IPosts[]
}
class UsersComponent extends Component<IProps,{}>{
    state:IProps ={
        users:[],
        posts:[]
    }

    componentDidMount() {
        getAllUsers().then(value => {
            this.setState({
                ...this.state,
                users:value.data.users
            })
            console.log(value.data.users)})

    }

    render() {
        console.log('render');
        const clickPosts = (id:number) =>{
            getAllPosts(id).then(value => {
                this.setState({
                    ...this.props,
                    posts:value.data.posts
                })
                console.log(value.data.posts);
                console.log(id);
            })
        }

        return (
            <div>
                <div>
                    {
                        this.state.users.map((user,index) =><UserComponent key={index} clickPosts={clickPosts} user={user}/>)
                    }
                    {
                        this.state.posts.map(posts => <PostComponent post={posts}/>)
                    }
                </div>
            </div>
        );
    }
}

export default UsersComponent;