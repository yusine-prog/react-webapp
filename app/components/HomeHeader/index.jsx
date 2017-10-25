import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'
import SearchInput from '../SearchInput'
import './index.less'

class User extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value));
    }
    render() {
        return (
            <div>
                <header className="index-header">
                    <Link to="/city">
                        <span className="iconfont icon-down city">{this.props.cityName}</span>
                    </Link>
                    <div className="search-wrap">
                        <a className="iconfont icon-search"></a>
                        <SearchInput value="" enterHandle={this.enterHandle} />
                    </div>
                    <Link to="/login">
                        <span className="iconfont icon-user"></span>
                    </Link>
                </header>
                <div className="header_fill"></div>        
            </div>
        )
    }
}

export default User
