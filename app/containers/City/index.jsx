import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import Header from '../../components/Header'

class City extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title='选择城市' />
                <div className="locate_line">{this.props.userinfo.cityName}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo,
  }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)
