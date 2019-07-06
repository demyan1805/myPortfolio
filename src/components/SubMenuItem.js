import React from 'react';
import {Link} from 'react-router-dom';
import newspaper from '../newspaper.svg';
export default class SubMenuItem extends React.Component {


    render() {
        const item = this.props;
        return (
            <div className="sub-menu__item" onClick={() => this.props.getSelectedItem({item})}>
                <img alt="item-icon" src={this.props.icon} className="sub-menu__item-icon"></img>
                <Link to={this.props.to} className="sub-menu__item-link">{this.props.name}</Link>
            </div>
        );
    }
}