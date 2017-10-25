import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userinfoAction from '../../actions/userinfo.js'

import Header from '../../components/Header'
import LoginComponent from '../../components/Login'

class Login extends React.Component {
	constructor() {
        super();
        this.state = {
        	checking: true
        };
        this.loginHandle = this.loginHandle.bind(this);
        this.doCheck = this.doCheck.bind(this);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount() {
    	this.doCheck();
    }
    doCheck() {
    	const userinfo = this.props.userinfo;
    	if (userinfo.username) {
    		// 跳转
    		this.goUserPage()
    	} else {
    		// 显示登录组件
    		this.setState({
    			checking: false,
    		});
    	}
    }
    loginHandle(username) {
    	// 保存用户名
    	const userinfoActions = this.props.userinfoActions;
    	let userinfo = this.props.userinfo;
    	userinfo.username = username;
    	userinfoActions.update(userinfo);

    	const params = this.props.params;
    	if (params.router) {
    		// 跳转到指定的页面
    		hashHistory.push(params.router);
    	} else {
    		this.goUserPage();
    	}

    }

    // 跳转到用户中心
    goUserPage() {
    	hashHistory.push('/User');
    }
    render() {
        return (
        	<div>
        		<Header title="登录" />
        		{
        			this.state.checking
        			? <div></div>
        			: <LoginComponent loginHandle={this.loginHandle} />
        		}
        	</div>
        )
	}
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo,
  }
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoAction, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)