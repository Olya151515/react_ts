import React, {Component} from 'react';
import {IPosts} from "../../model/post/IPosts";

type IProps ={
    post:IPosts
}
class PostComponent extends Component<IProps,{} >{
    state:IProps={
        post:{id:this.props.post.id , title:this.props.post.title , userId:this.props.post.userId}
    }
    render() {
        return (
            <div>
                PostId -{this.props.post.id} - UserId -{this.props.post.userId} <br/>
               Title:  {this.props.post.title}
            </div>
        );
    }
}
export default PostComponent;