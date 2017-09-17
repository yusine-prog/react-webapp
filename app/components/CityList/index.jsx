import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './index.less'

class CityList extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <h3>CityList</h3>
            </div>
        )
    }
}

export default CityList
