import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import './index.less'

class User extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <header className="index-header">
                    <Link to="/city">
                        <a className="iconfont icon-down city">{this.props.cityName}</a>
                    </Link>
                    <div className="search-wrap">
                        <a className="iconfont icon-search"></a>
                        <input className="search-input" />
                    </div>
                    <a className="iconfont icon-user"></a>
                </header>
                <div className="header_fill"></div>        
            </div>
        )
    }
}

export default User
