import React, {FC} from 'react';
import {Link} from "react-router-dom";

const MenuComponent:FC = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>home</Link></li>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
                <li><Link to={'comments'}>comment</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;