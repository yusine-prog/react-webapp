import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getAdDate } from '../../../fetch/home/home.js';
import HomeAd from '../../../components/HomeAd'
class Ad extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount() {
        getAdDate()
        .then(response => response.json())
        .then(data => {
            if(data.length) {
                this.setState({ data });
            }
        }).catch(ex => {
            if (__DEV__) {
                console.error('首页”超值特惠“获取数据报错, ', ex.message);
            }
        })
    }
    render() {
        return (
            <div>
                {this.state.data.length ? (
                    <HomeAd data={this.state.data} />
                ) : (
                    <div>数据加载中</div>
                )}
            </div>
        )
    }
}

export default Ad
