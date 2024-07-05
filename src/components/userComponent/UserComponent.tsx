import React, {Component} from 'react';
import {IUser} from "../../model/user/IUser";

type IProps = {
    user:IUser,
    clickPosts:(id:number) => void
}
class UserComponent extends Component<IProps> {
    render() {
        return (
            <div>
                {this.props.user.id} - {this.props.user.firstName} - {this.props.user.lastName}
                <button onClick={() =>{
                    this.props.clickPosts(this.props.user.id)
                }}>posts</button>
            </div>
        );
    }
}

export default UserComponent;