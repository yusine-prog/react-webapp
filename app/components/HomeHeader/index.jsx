import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'
import './index.less'

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            keyword: 's'
        };
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerKeyup = this.handlerKeyup.bind(this);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    handlerChange(e) {
        this.setState({ keyword: e.target.value })
    }
    handlerKeyup(e) {
        if (e.keyCode == 13) {
            hashHistory.push('/search/all/' + encodeURIComponent(this.state.keyword));
        }
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
                        <input
                            className="search-input"
                            value={this.state.keyword}
                            onChange={this.handlerChange}
                            onKeyUp={this.handlerKeyup}
                        />
                    </div>
                    <a className="iconfont icon-user"></a>
                </header>
                <div className="header_fill"></div>        
            </div>
        )
    }
}

export default User
