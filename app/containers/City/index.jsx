import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userinfoAction from '../../actions/userinfo.js'
import LocalStore from '../../util/localStore.js'
import Header from '../../components/Header'
import CityList from '../../components/CityList'

class City extends React.Component {
    constructor() {
        super();
        this.changeCity = this.changeCity.bind(this);
        //this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount() {
        this.changeCity('beijin');
    }
    changeCity(newCity) {
        if (!newCity) {
            return;
        }
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCity;
        this.props.userinfoActions.update(userinfo);
        LocalStore.setItem('cityName', newCity);
    }
    render() {
        console.log(this.props,this.props.userinfo.cityName);
        return (
            <div>
                <Header title='选择城市' />
                <div className="locate_line">{this.props.userinfo.cityName}</div>
                <CityList changeCityFn={this.changeCity} />
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
        userinfoActions: bindActionCreators(userinfoAction, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)
