import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as userinfoAction from '../actions/userinfo.js'
import LocalStore from '../util/localStore.js'
import 'normalize.css'
import '../static/css/iconfont.css'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: false
        }
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount() {
        let cityName = LocalStore.getItem('cityName');
        if(cityName == null) {
            cityName = '武汉';
        }
        this.props.userinfoAction.update({ cityName })
        this.setState({
            initDone: true
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone
                    ? this.props.children
                    : <div>正在加载中...</div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoAction: bindActionCreators(userinfoAction, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
