import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory, Link } from 'react-router'
class NotFound extends React.Component {
    constructor() {
        super();
        this.state = {
            time: 5,
        }
        this.toHome = null;
        this.changeTimer = null;
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.changeTime = this.changeTime.bind(this);
    }

    componentDidMount() {
        this.toHome = setTimeout(function(){
            hashHistory.push('/');
        }, 5000);
        
        this.changeTimer = setInterval(()=> {
            this.changeTime();
        }, 1000);
    }
    componentWillUnmount(){
        console.log('unmount');
        clearInterval(this.changeTimer);
        clearTimeout(this.toHome);
    }
    changeTime() {
        this.setState(prevState => ({
            time: prevState.time - 1,
        }));
    }
    render() {
        return (
            <div>
                <h3 className="notFound">404 not found page {this.state.time}秒后回到<Link to="/" activeClassName="to-home">首页</Link></h3>
            </div>
        )
    }
}

export default NotFound
