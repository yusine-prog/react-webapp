import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'
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
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    changeCity(newCity) {
        if (!newCity) {
            return;
        }
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCity;
        // 修改redux
        this.props.userinfoActions.update(userinfo);
        // 更新localStorage里的城市信息
        LocalStore.setItem('cityName', newCity);
        // 跳转到首页
        hashHistory.push('/');
    }
    render() {
        return (
            <div>
                <Header title='选择城市' />
                <div className="locate_line">
                    <span className="current-city">{this.props.userinfo.cityName}</span>
                    <sub>GPS定位</sub>
                </div>
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
