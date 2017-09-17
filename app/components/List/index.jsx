import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './index.less';

// 猜你喜欢列表组件
class List extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data;
        return (
            <div>
                {data.map((item, i) => {
                    return (
                        <a className="index_content_item" key={i}>
                            <div className="pic">
                                <div className="pic_tag">免预约</div>
                                <img src={item.img} width="90px" height="90px" />
                            </div>
                            <div className="content">
                                <div className="shop_name_main">
                                    <div className="shop_name">{item.title}</div>
                                    <div className="shop_tags">
                                        <div className="shop_distance">{item.distance}</div>
                                    </div>
                                </div>
                                <div className="shop_name_sub">{item.subTitle}</div>
                                <div className="item_price">
                                    <div className="price_current">￥{item.price}</div>
                                    <div className="sale_desc">已售 {item.mumber}</div>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        )
    }
}

export default List
