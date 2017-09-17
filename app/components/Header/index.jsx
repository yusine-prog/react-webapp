import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './index.less';

class Header extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="common-header">
                <a className="back"></a>
                <div className="header-title">{this.props.title}</div>
                <div></div>
            </div>
        )
    }
}

export default Header
