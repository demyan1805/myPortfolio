import React from 'react';
import {Link} from 'react-router-dom';
import user from '../user.svg';
import folder from '../folder.svg';


export default class MainMenu extends React.Component {


    render() {
        return (
            <div className="main-menu">
                <Link to="/" className="main-menu__link">
                    <img src={user} alt="profile"/>
                </Link>
                <Link to="/projects/" className="main-menu__link">
                    <img src={folder} alt="projects"/>
                </Link>
            </div>
        );
    }
}