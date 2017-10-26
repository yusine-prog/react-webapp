import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import OrderListComponent from '../../../components/OrderList'
import { getOrderListData, postComment } from '../../../fetch/user/orderlist.js'

import './style.less'

export default class OrderList extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
        this.loadOrderList = this.loadOrderList.bind(this);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount() {
        // 获取订单数据
        const username = this.props.username
        if (username) {
            this.loadOrderList(username)
        }
    }

    loadOrderList(username) {
        const result = getOrderListData(username)
        result.then(res => {
            return res.json()
        }).then(json => {
            // 获取数据
            this.setState({
                data: json
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('用户主页“订单列表”获取数据报错, ', ex.message)
            }
        })
    }

    postComment(id, val, callback) {
        const result = postComment(id, val);
        result.then(res => {
            return res.json()
        }).then(json => {
            if (json.errno === 0) {
                callback()
            }
        })
    }

    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                    ? <OrderListComponent data={this.state.data} postComment={this.postComment} />
                    : null
                }
            </div>
        )
    }
}
