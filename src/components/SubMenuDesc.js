import React from 'react';

export default class SubMenuDesc extends React.Component {
    render() {
        const {href, name, desc} = this.props.item;

        return (
            <div className="sub-menu__desc">
                <div className="sub-menu__desc-subtitle">description</div>
                <div className="sub-menu__desc-content">{desc}</div>
                <a href={href}>{href}</a>
            </div>
        );
    }
}