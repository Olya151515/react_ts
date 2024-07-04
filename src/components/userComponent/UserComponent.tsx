import React, {Component} from 'react';
import {IUser} from "../../model/user/IUser";

type IProps = {
    user:IUser,
    clickPosts:(id:number) => void
}
type MyState ={
    user:{id:number , firstName:string , lastName: string}
    clickPosts:(id:number) => {};
}
class UserComponent extends Component<IProps,MyState> {

    render() {


        return (
            <div>
                {this.props.user.id} - {this.props.user.firstName} - {this.props.user.lastName}
                <button onClick={() =>{
                    this.state.clickPosts(this.props.user.id)

                }}>posts</button>
            </div>
        );
    }
}

export default UserComponent;