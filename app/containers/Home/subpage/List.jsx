import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home.js';
import ListComponent from '../../../components/List';
import LoadMore from '../../../components/LoadMore';

import './style.less';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 1,
        };
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.loadMoreFn = this.loadMoreFn.bind(this);
        this.resultHandle = this.resultHandle.bind(this);
    }
    componentDidMount() {
        this.loadFirstPageData();
    }
    // 获取首屏数据
    loadFirstPageData() {
        const cityName = this.props.cityName;
        const result = getListData(cityName, 0);
        this.resultHandle(result);
    }
    // 加载更多
    loadMoreFn() {
        this.setState({
            isLoadingMore: true,
        });

        const cityName = this.props.cityName;
        const page = this.state.page;
        const result = getListData(cityName, page);
        this.resultHandle(result);

        this.setState({
            isLoadingMore: false,
            page: page + 1,
        });
    }
    // 数据解析及更新
    resultHandle(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            const hasMore = json.hasMore;
            const data = json.data;

            this.setState({
                hasMore: hasMore,
                data: this.state.data.concat(data),
            });
        })
    }
    render() {
        return (
            <div className="index_for_you">
                <div className="index_like_title">猜你喜欢 {this.state.page}</div>
                {this.state.data.length ? (
                    <ListComponent data={this.state.data} />
                ) : (
                    <div>加载中...</div>
                )}
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreFn} />
                    : null
                }
            </div>
        )
    }
}

export default List
