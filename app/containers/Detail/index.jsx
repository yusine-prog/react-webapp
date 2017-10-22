import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header'
import Info from './subPage/Info.jsx'
import Comment from './subPage/Comment.jsx'

class Detail extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const id = this.props.params.id || ''
        return (
            <div>
                <Header title="商品详情" />
                <Info id={id} />
                <Comment id={id} />
            </div>
        )
    }
}

export default Detail
