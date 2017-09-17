import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="load-more" ref="wrapper">
                {this.props.isLoadingMore ? (
                    <span>加载中...</span>
                ) : (
                    <span>加载更多</span>
                )}
            </div>
        )
    }
    componentDidMount() {
        let scrollTimer = null;
        const wrapper = this.refs.wrapper;
        window.addEventListener('scroll', () => {
            const callback = () => {
                const bodyHeight = document.documentElement.clientHeight;
                const top = wrapper.getBoundingClientRect().top;
                
                if (top && top < bodyHeight) {
                    this.props.loadMoreFn();
                }
            }

            if (this.props.isLoadingMore) {
                 return
            }
            if (scrollTimer) {
                clearTimeout(scrollTimer);
            }
            scrollTimer = setTimeout(callback, 50);
        })
    }
}

export default LoadMore