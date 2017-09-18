import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './index.less'

class CityList extends React.Component {
    constructor() {
        super();
        this.cityData = [
            '北京',
            '上海',
            '杭州',
            '广州',
            '苏州',
            '深圳',
            '南京',
            '天津',
            '重庆',
            '厦门',
            '武汉',
            '西安',
        ];
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    clickHander(newCity) {
        this.props.changeCityFn(newCity);
    }
    render() {
        return (
            <div className="citylist-wrap">
                <h3>热门城市</h3>
                <ul className="hot-citylist">
                    {this.cityData.map((item, i) => {
                        return (
                            <li key={i} onClick={() => {this.clickHander(item)}}>
                                <span>{item}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default CityList
