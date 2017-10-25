import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeFromAction from '../../../actions/store.js'

import BuyAndStore from '../../../components/BuyAndStore'

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        	isStore: false
        };
        this.checkStoreState = this.checkStoreState.bind(this);
        this.storeHandle = this.storeHandle.bind(this);
        this.buyHandle = this.buyHandle.bind(this);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount() {
        this.checkStoreState();
    }

    // 检查登录状态 未登录返回false 已登录返回true
    checkLogin() {
    	const id = this.props.id;
    	const userinfo = this.props.userinfo;

    	if (!userinfo.username) {
    		hashHistory.push('/Login/' + encodeURIComponent('/detail/' + id));
    		return false;
    	}
    	return true;
    }
    // 检查是否收藏
    checkStoreState() {
        const id = this.props.id;
        const store = this.props.store;

        store.some(item => {
            if (item.id === id) {
                // 已经被收藏
                this.setState({
                    isStore: true
                });

                // 跳出循环
                return true;
            }
        })
    }

    // 收藏事件
    storeHandle() {
        const loginFlag = this.checkLogin();
        if (!loginFlag) {
            return;
        }

        const id = this.props.id;
        const storeActions = this.props.storeActions;
        if (this.state.isStore) {
            // 如果已收藏，则取消收藏
            storeActions.rm({id})
        } else {
            // 如果未收藏，则进行收藏
            storeActions.add({id})
        }

        // 更新组件按钮状态
        this.setState({
            isStore: !this.state.isStore,
        });
    }

    // 购买事件
    buyHandle() {
        const loginFlag = this.checkLogin();
        if (!loginFlag) {
            return;
        }

        // 此处购买只是能在用户展式，相当于加入购物车
        hashHistory.push('/User');
    }

    render() {
        return (
    		<BuyAndStore
                isStore={this.state.isStore}
                buyHandle={this.buyHandle}
                storeHandle={this.storeHandle}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeFromAction, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)
