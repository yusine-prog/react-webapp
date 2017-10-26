import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'

export default class OrderList extends React.Component {
	constructor() {
		super();
		this.state = {};
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render() {
		const data = this.props.data;
		const postComment = this.props.postComment;
		return (
			<div>
				{data.map((item, index) => {
					return <Item data={item} key={index} postComment={postComment} />
				})}
			</div>
		)
	}
}