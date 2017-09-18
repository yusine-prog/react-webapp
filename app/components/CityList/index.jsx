import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './index.less'

class CityList extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    clickHander(newCity) {
        this.props.changeCityFn(newCity);
    }
    render() {
        return (
            <div>
                <h3>CityList</h3>
                <ul>
                    <li onClick={this.clickHander.bind(this, '北京')}>北京</li>
                </ul>
            </div>
        )
    }
}

export default CityList
