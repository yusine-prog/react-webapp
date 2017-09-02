import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import HomeHeader from '../../components/HomeHeader/index.jsx'
import Category from '../../components/Category/index.jsx'


class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        <HomeHeader cityName={this.props.userinfo.cityName} />
        <Category />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

export default connect(
    mapStateToProps,
)(Home)
