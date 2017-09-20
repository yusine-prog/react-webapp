import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'
import SearchInput from '../SearchInput'
import './style.less'

class SearchHeader extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value));
    }
    handleClick() {
        window.history.back()
    }
    render() {
        return (
            <div className="search-header">
                <a className="back" onClick={this.handleClick}></a>
                <div className="search-wrap">
                    <a className="iconfont icon-search"></a>
                    <SearchInput value={this.props.keyword} enterHandle={this.enterHandle} />
                </div>
            </div>
        )
    }
}

export default SearchHeader
