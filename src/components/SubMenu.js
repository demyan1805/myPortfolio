import React from 'react';
import {Link} from 'react-router-dom';
import SubMenuItem from './SubMenuItem';
import SubMenuDesc from './SubMenuDesc';
import res from './res';

export default class SubMenu extends React.Component {
    state = {
        items: [],
        res: res.projects,
        title: "Projects"
    };

    getSelectedItem = this.props.getSelectedItem;

    componentDidMount() {
        this.loadResource(this.state.res);
    }

    loadResource = (res) => {
        this.setState({
            items: res
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {icon, href, name, to, desc} = item;

            return (
                <SubMenuItem 
                icon={icon}
                to={to}
                name={name}
                href={href}
                desc={desc}
                getSelectedItem={this.getSelectedItem}
                />
            )
        });
    }


    render() {
        const items = this.renderItems(this.state.items);

        return (
            <div className="sub-menu">
                <div className="sub-menu__title">{this.state.title}</div>
                <div className="sub-menu__items-wrap">
                    {items}
                </div>
                <SubMenuDesc item={this.props.selectedItem} />


            </div>
        );
    }
}