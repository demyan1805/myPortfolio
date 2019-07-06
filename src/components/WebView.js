import React from 'react';

export default class WebView extends React.Component {
  

    render() {
        const href = this.props.href;
        return (
            <div className={this.props.visible ? "web-view" : "web-view inactive"}>
                <iframe src={href.href} frameborder="0"></iframe>
            </div>
        );
    }
}