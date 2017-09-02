import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

class HomeAd extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data;

        return (
            <div className="czth">
                <div className="title_sale">超值特惠</div>
                <div className="item-content">
                    {data.map((item, index) => {
                        return (
                            <a className="item" href={item.link} key={index}>
                                <img src={item.img} alt={item.title} />
                                <div className="title">{item.title}</div>
                                <div className="price">
                                    <span className="price_current">￥{item.price}</span>
                                    <del className="price_old">￥{item.oldPrice}</del>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default HomeAd