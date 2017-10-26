import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

export default class Item extends React.Component {
	constructor() {
		super();
		this.state = {
			commentState: 0
		};
		this.showComment = this.showComment.bind(this);
		this.hideComment = this.hideComment.bind(this);
		this.postComment = this.postComment.bind(this);
		this.commentOK = this.commentOK.bind(this);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	// 展示评论框
	showComment() {
		this.setState({
			commentState: 1
		}, () => {
			this.refs.commentText.focus();	
		});
	}

	// 收回评论框
	hideComment() {
		this.setState({
			commentState: 0
		})
	}

	// 提交评论
	postComment() {
		const id = this.props.data.id;
		const postComment = this.props.postComment;
		const value = this.refs.commentText.value.trim();
		if (!value) {
			return
		}
		postComment(id, value, this.commentOK);
	}

	// 评论成功之后的回调
	commentOK() {
		this.setState({
			commentState: 2
		})
	}

	render() {
		const data = this.props.data;
		return (
			<div className="order-item-container">
                <div className="clear-fix">
                    <div className="order-item-img float-left">
                        <img src={data.img}/>
                    </div>
                    <div className="order-item-comment float-right">
                    	{
                    		this.state.commentState === 0
                    		? <button className="btn" onClick={this.showComment}>评价</button>
                    		: this.state.commentState === 1
                    			? ''
                    			: <button className="btn unseleted-btn">已评价</button>
                    	}
                    </div>
                    <div className="order-item-content">
                        <span>商户：{data.title}</span>
                        <span>数量：{data.count}</span>
                        <span>价格：￥{data.price}</span>
                    </div>
                </div>
                {
                	this.state.commentState === 1 ? (
                		<div className="comment-text-container">
                			<textarea style={{width: '100%', height: '80px'}} className="comment-text" ref="commentText"></textarea>
                			<button className="btn" onClick={this.postComment}>提交</button>
                			<button className="btn unseleted-btn" onClick={this.hideComment}>取消</button>
                		</div>
                	) : null
                }
            </div>
		)
	}
}