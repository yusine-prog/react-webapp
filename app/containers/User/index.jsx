import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import OrderLisr from './subPage/OrderList'

class User extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount() {
        // 如果没登录，跳转至首页
        if (!this.props.userinfo.username) {
            hashHistory.push('/Login')
        }
    }
    render() {
        const userinfo = this.props.userinfo;
        return (
            <div>
                <Header title="用户主页" backRouter="/" />
                <UserInfo username={userinfo.username} city={userinfo.cityName} />
                <OrderLisr username={userinfo.username} />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)
