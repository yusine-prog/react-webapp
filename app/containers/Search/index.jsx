import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader'
import List from './subPage/List'

class Search extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const params = this.props.params;
        return (
            <div>
                <SearchHeader keyword={params.keyword} />
                <List keyword={params.keyword} category={params.type} />
            </div>
        )
    }
}

export default Search
