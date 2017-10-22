import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import DetailInfo from '../../../components/DetailInfo'
import { getInfoData } from '../../../fetch/detail/detail'

class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        	info: false
        };
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount() {
    	const result = getInfoData(this.props.id)
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
            	info: json
            })
        })
    }
    render() {

        return (
        	<div>
        		{this.state.info ? <DetailInfo data={this.state.info} /> : null}
        	</div>
        )
    }
}

export default Info