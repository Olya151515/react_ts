import React, {Component} from 'react';
import {IUser} from "../../model/user/IUser";
import {getAllPosts, getAllUsers} from "../../service/api.users";
import UserComponent from "../userComponent/UserComponent";
import {IPosts} from "../../model/post/IPosts";
import PostComponent from "../postsComponent/PostComponent";

type IState ={
    users:IUser[],
    posts:IPosts[]
}
class UsersComponent extends Component<{},IState>{
    constructor(props:{}) {
        super(props);
        this.state={
            users:[],
            posts:[]
        }
    }
    componentDidMount() {
        getAllUsers().then(value => {
            this.setState({
                ...this.state,
                users:value.data.users
            })
            console.log(value.data.users)})

    }
    clickPosts = (id:number) =>{
        console.log('click');
        getAllPosts(id).then(value => {
            this.setState({
                ...this.state,
                posts:value.data.posts
            })
            console.log(value.data.posts);
            console.log(id);
        })
    }

    render() {
        console.log('render');
        return (
            <div>
                <div>
                    {
                        this.state.users.map((user,index) =>
                            <UserComponent key={index} clickPosts={this.clickPosts} user={user}/>)
                    }

                    <hr/>
                    {
                        this.state.posts.map((posts,index) => <PostComponent key={index} post={posts}/>)
                    }
                </div>
            </div>
        );
    }
}

export default UsersComponent;