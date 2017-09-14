import React from 'react';
import './KeyValue.less';

export default React.createClass({
    render() {
        return (
            <li>
                <span className="left">{ this.props.left }</span>
                <span className="right">{ this.props.right }</span>
            </li>    
        );
    },
});
