import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'
import './index.less';

// 此组件为公共头
class Header extends React.Component {
    constructor() {
        super();
        this.backHander = this.backHander.bind(this);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    backHander() {

        const backRouter = this.props.backRouter;
        // backRouter 为返回时自定义跳转
        if (backRouter) {
            hashHistory.push(backRouter);
            return;
        }

        window.history.back();
    }
    render() {
        return (
            <div className="common-header">
                <a className="back" onClick={this.backHander}></a>
                <div className="header-title">{this.props.title}</div>
                <div></div>
            </div>
        )
    }
}

export default Header
