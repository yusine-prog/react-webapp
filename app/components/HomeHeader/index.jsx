import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './index.less'
class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <header className="index-header">
                <a className="iconfont icon-down city">{this.props.cityName}</a>
                <div className="search-wrap">
                    <a className="iconfont icon-search"></a>
                    <input className="search-input" />
                </div>
                <a className="iconfont icon-user"></a>
            </header>
        )
    }
}

export default User
